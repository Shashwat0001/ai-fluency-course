"use client";

import React, { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, PartyPopper, RotateCcw, Rows3, X } from "lucide-react";
import type { Lesson } from "@/data/types";
import { completeLesson } from "@/lib/progress";
import ActivityBlock from "@/components/activities/ActivityBlock";
import QuizQuestionCard from "./QuizQuestionCard";
import { GlossaryProvider } from "./Glossary";
import {
  Analogy,
  AnalogyMap,
  BigIdea,
  FastMovingNotice,
  JargonCard,
  RealWorld,
  Sources,
  TechConversation,
} from "./LessonSections";

type Step =
  | { kind: "intro" }
  | { kind: "content"; key: string; node: React.ReactNode }
  | { kind: "quiz"; index: number }
  | { kind: "done" };

interface LinkedLesson {
  id: string;
  title: string;
}

// Where each learner stopped, per lesson, so they can pick up on another visit.
const stepKey = (lessonId: string) => `ai-fluency-step:${lessonId}`;
const readSavedStep = (lessonId: string): number | null => {
  try {
    const raw = window.localStorage.getItem(stepKey(lessonId));
    return raw ? Number(raw) : null;
  } catch {
    return null;
  }
};
const writeSavedStep = (lessonId: string, step: number | null) => {
  try {
    if (step === null) window.localStorage.removeItem(stepKey(lessonId));
    else window.localStorage.setItem(stepKey(lessonId), String(step));
  } catch {
    // Storage blocked: resuming just won't be offered.
  }
};
const noSubscribe = () => () => {};

function buildSteps(lesson: Lesson): Step[] {
  const steps: Step[] = [{ kind: "intro" }];
  const add = (key: string, node: React.ReactNode) => steps.push({ kind: "content", key, node });

  add("big-idea", <BigIdea bigIdea={lesson.bigIdea}/>);
  if (lesson.analogy) {
    add("analogy", <Analogy analogy={lesson.analogy}/>);
    if (lesson.analogy.visualComparison.length > 0) add("analogy-map", <AnalogyMap analogy={lesson.analogy}/>);
  }
  lesson.activities?.forEach((activity, i) => add(`activity-${i}`, <ActivityBlock activity={activity}/>));
  if (lesson.techConversation) add("conversation", <TechConversation conversation={lesson.techConversation}/>);
  if (lesson.realWorldApplication) add("real-world", <RealWorld realWorld={lesson.realWorldApplication}/>);
  if (lesson.jargonCard) add("jargon", <JargonCard card={lesson.jargonCard}/>);
  lesson.quiz.forEach((_, index) => steps.push({ kind: "quiz", index }));
  steps.push({ kind: "done" });
  return steps;
}

export default function LessonPlayer({
  lesson,
  trackId,
  trackNumber,
  lessonIndex,
  lessonCount,
  prevLesson,
  nextLesson,
}: {
  lesson: Lesson;
  trackId: string;
  trackNumber: number;
  lessonIndex: number;
  lessonCount: number;
  prevLesson: LinkedLesson | null;
  nextLesson: LinkedLesson | null;
}) {
  const [steps] = useState(() => buildSteps(lesson));
  const [step, setStep] = useState(0);
  const [onePage, setOnePage] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [solved, setSolved] = useState<Set<string>>(new Set());
  const savedStep = useSyncExternalStore(noSubscribe, () => readSavedStep(lesson.id), () => null);

  const lastIndex = steps.length - 1;
  const current = steps[step];
  const quizTotal = lesson.quiz.length;
  const activityCount = lesson.activities?.length ?? 0;
  const canResume = savedStep !== null && savedStep > 0 && savedStep < lastIndex;
  const lessonHref = (id: string) => `/learn/${trackId}/${id}`;

  const isBlocked = (s: Step) => s.kind === "quiz" && !solved.has(lesson.quiz[s.index].id);

  const goTo = useCallback(
    (target: number) => {
      const next = Math.max(0, Math.min(lastIndex, target));
      setStep(next);
      writeSavedStep(lesson.id, next === lastIndex ? null : next);
      window.scrollTo({ top: 0 });
    },
    [lastIndex, lesson.id]
  );

  const answer = (questionIndex: number, optionIndex: number) => {
    const question = lesson.quiz[questionIndex];
    setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }));
    if (!question.options[optionIndex].isCorrect) return;
    const next = new Set(solved).add(question.id);
    setSolved(next);
    if (next.size === quizTotal) completeLesson(lesson.id, lesson.xpReward);
  };

  // Arrow keys move between screens on a laptop, unless the learner is typing or using a slider.
  useEffect(() => {
    if (onePage) return;
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight" && !isBlocked(steps[step]) && step < lastIndex) goTo(step + 1);
      if (e.key === "ArrowLeft" && step > 0) goTo(step - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const renderQuiz = (index: number) => (
    <QuizQuestionCard
      question={lesson.quiz[index]}
      number={index + 1}
      total={quizTotal}
      selected={answers[lesson.quiz[index].id]}
      onSelect={(option) => answer(index, option)}
    />
  );

  const intro = (
    <header>
      <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
        Track {trackNumber} • Lesson {lessonIndex + 1} of {lessonCount}
      </span>
      <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">{lesson.title}</h1>
      <p className="mt-2 text-lg text-slate-600">{lesson.subtitle}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
        <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5"/> {lesson.durationMinutes} min</span>
        <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-[#4F46E5]">+{lesson.xpReward} XP</span>
        <span>Updated {lesson.lastUpdated}</span>
      </div>
      {lesson.isUpdatedBiWeekly && (
        <div className="mt-6">
          <FastMovingNotice lastUpdated={lesson.lastUpdated}/>
        </div>
      )}
    </header>
  );

  const allSolved = solved.size === quizTotal;
  const doneScreen = (
    <section className="space-y-6">
      <div className="p-6 rounded-2xl bg-[#4F46E5] text-white">
        <PartyPopper className="w-8 h-8"/>
        <h2 className="mt-3 text-2xl font-extrabold">{allSolved ? "Lesson complete!" : "You reached the end"}</h2>
        <p className="mt-2 text-base text-indigo-100 leading-relaxed">
          {allSolved
            ? `+${lesson.xpReward} XP added to your total. The one thing to remember: ${lesson.bigIdea.headline}`
            : `Answer all ${quizTotal} questions correctly to earn ${lesson.xpReward} XP.`}
        </p>
      </div>
      {lesson.sources && lesson.sources.length > 0 && <Sources sources={lesson.sources}/>}
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
        <button onClick={() => goTo(1)} className="inline-flex items-center gap-1.5 text-slate-600 cursor-pointer">
          <RotateCcw className="w-4 h-4"/> Go through it again
        </button>
        {prevLesson && (
          <Link href={lessonHref(prevLesson.id)} className="inline-flex items-center gap-1.5 text-slate-600">
            <ArrowLeft className="w-4 h-4"/> Previous: {prevLesson.title}
          </Link>
        )}
      </div>
    </section>
  );

  const finishLink = nextLesson ? (
    <Link
      href={lessonHref(nextLesson.id)}
      className="flex-1 min-h-14 px-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#4F46E5] text-white text-base font-semibold hover:bg-[#4338CA]"
    >
      <span className="truncate">Next: {nextLesson.title}</span> <ArrowRight className="w-5 h-5 shrink-0"/>
    </Link>
  ) : (
    <Link
      href="/#curriculum"
      className="flex-1 min-h-14 px-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#4F46E5] text-white text-base font-semibold hover:bg-[#4338CA]"
    >
      Track complete: back to Course Map <ArrowRight className="w-5 h-5 shrink-0"/>
    </Link>
  );

  // ---- Whole lesson on one page (handy on a laptop, or for reviewing content) ----
  if (onePage) {
    return (
      <GlossaryProvider>
        <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 pb-16 space-y-6">
          <button
            onClick={() => setOnePage(false)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F46E5] cursor-pointer"
          >
            <ArrowRight className="w-4 h-4"/> Switch to step-by-step
          </button>
          {intro}
          {steps.map((s, i) =>
            s.kind === "content" ? <div key={s.key}>{s.node}</div> : s.kind === "quiz" ? <div key={`quiz-${i}`}>{renderQuiz(s.index)}</div> : null
          )}
          {doneScreen}
          <div className="flex">{finishLink}</div>
        </main>
      </GlossaryProvider>
    );
  }

  // ---- Step-by-step player ----
  const blocked = isBlocked(current);
  const continueLabel =
    current.kind === "intro"
      ? "Start lesson"
      : blocked
        ? "Choose the right answer to continue"
        : steps[step + 1]?.kind === "done"
          ? "Finish lesson"
          : "Continue";

  return (
    <GlossaryProvider>
      <div className="sticky top-16 z-30 bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 h-12 flex items-center gap-3">
          <Link href="/#curriculum" aria-label="Close lesson and go to the course map" className="p-1 -ml-1 text-slate-500 hover:text-[#0F172A]">
            <X className="w-5 h-5"/>
          </Link>
          <div className="flex-1 flex gap-1" role="progressbar" aria-valuemin={1} aria-valuemax={steps.length} aria-valuenow={step + 1}>
            {steps.map((s, i) => (
              <span
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i <= step ? "bg-[#4F46E5]" : s.kind === "quiz" ? "bg-amber-200" : "bg-slate-200"
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-slate-500 tabular-nums">{step + 1}/{steps.length}</span>
        </div>
      </div>

      <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 pt-6 pb-36">
        <div key={step} className="step-in">
          {current.kind === "intro" && (
            <>
              {intro}
              <div className="mt-6 p-4 rounded-xl bg-white border border-[#E2E8F0] text-sm text-slate-600 leading-relaxed">
                <p className="font-semibold text-[#0F172A]">In this lesson</p>
                <p className="mt-1">
                  {steps.length - 2} short screens
                  {activityCount > 0 ? `, ${activityCount} hands-on ${activityCount === 1 ? "activity" : "activities"}` : ""}
                  {`, and ${quizTotal} quick ${quizTotal === 1 ? "question" : "questions"}`}. Tap any
                  <span className="mx-1 underline decoration-dotted decoration-2 decoration-indigo-400 underline-offset-4">underlined word</span>
                  to see what it means.
                </p>
              </div>
              {canResume && (
                <button
                  onClick={() => goTo(savedStep ?? 1)}
                  className="mt-4 w-full p-4 rounded-xl border-2 border-indigo-200 bg-indigo-50 text-left text-sm font-semibold text-[#4F46E5] cursor-pointer"
                >
                  Pick up where you left off (screen {savedStep + 1} of {steps.length}) →
                </button>
              )}
              <button
                onClick={() => setOnePage(true)}
                className="mt-4 inline-flex items-center gap-1.5 text-left text-sm font-semibold text-slate-500 hover:text-[#0F172A] cursor-pointer"
              >
                <Rows3 className="w-4 h-4"/> Prefer to scroll? See the whole lesson on one page
              </button>
            </>
          )}
          {current.kind === "content" && current.node}
          {current.kind === "quiz" && renderQuiz(current.index)}
          {current.kind === "done" && doneScreen}
        </div>
      </main>

      <nav
        className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E2E8F0]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-3 flex gap-3">
          {step > 0 && (
            <button
              onClick={() => goTo(step - 1)}
              aria-label="Previous screen"
              className="min-h-14 w-14 shrink-0 inline-flex items-center justify-center rounded-xl border-2 border-[#E2E8F0] bg-white text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5"/>
            </button>
          )}
          {current.kind === "done" ? (
            finishLink
          ) : (
            <button
              onClick={() => goTo(step + 1)}
              disabled={blocked}
              className={`flex-1 min-h-14 px-5 inline-flex items-center justify-center gap-2 rounded-xl text-base font-semibold transition-colors ${
                blocked
                  ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                  : "bg-[#4F46E5] text-white hover:bg-[#4338CA] cursor-pointer"
              }`}
            >
              {continueLabel} {!blocked && <ArrowRight className="w-5 h-5"/>}
            </button>
          )}
        </div>
      </nav>
    </GlossaryProvider>
  );
}

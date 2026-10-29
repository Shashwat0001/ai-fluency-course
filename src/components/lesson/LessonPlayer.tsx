"use client";

import React, { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock, Layers3, PartyPopper, RotateCcw, Rows3, Share2, Trophy, X, Zap } from "lucide-react";
import type { Lesson } from "@/data/types";
import { CURRICULUM_TRACKS } from "@/data/curriculum";
import { completeLesson } from "@/lib/progress";
import ActivityBlock from "@/components/activities/ActivityBlock";
import { CreatorStrip } from "@/components/CreatorCard";
import { buildLessonDeck, DeckButton, LessonDeck } from "./LessonDeck";
import QuizQuestionCard from "./QuizQuestionCard";
import { GlossaryDemoTrigger, GlossaryProvider, RichText } from "./Glossary";
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
  trackLessons,
  prevLesson,
  nextLesson,
}: {
  lesson: Lesson;
  trackId: string;
  trackNumber: number;
  lessonIndex: number;
  lessonCount: number;
  trackLessons?: LinkedLesson[];
  prevLesson: LinkedLesson | null;
  nextLesson: LinkedLesson | null;
}) {
  const steps = useMemo(() => buildSteps(lesson), [lesson]);
  const [step, setStep] = useState(0);
  const [onePage, setOnePage] = useState(false);
  const deck = useMemo(() => buildLessonDeck(lesson), [lesson]);
  const [deckOpen, setDeckOpen] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [solved, setSolved] = useState<Set<string>>(new Set());
  const [copiedBadge, setCopiedBadge] = useState(false);
  const savedStep = useSyncExternalStore(noSubscribe, () => readSavedStep(lesson.id), () => null);
  const currentTrack = useMemo(() => CURRICULUM_TRACKS.find((t) => t.id === trackId), [trackId]);

  const lastIndex = steps.length - 1;
  const current = steps[step] ?? steps[0];
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
    if (onePage || deckOpen) return;
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
    <header className="min-w-0">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-xs font-bold uppercase tracking-wider text-brand-700">
          Track {trackNumber} · Lesson {lessonIndex + 1} of {lessonCount}
        </span>
        {trackLessons && trackLessons.length > 1 && (
          <div className="flex items-center gap-1 flex-wrap">
            {trackLessons.map((item, idx) => (
              <Link
                key={item.id}
                href={lessonHref(item.id)}
                title={`Lesson ${idx + 1}: ${item.title}`}
                className={`inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full text-[11px] sm:text-xs font-bold transition-colors ${
                  idx === lessonIndex
                    ? "bg-brand-600 text-white"
                    : "bg-white border border-ink-200 text-ink-600 hover:border-brand-300 hover:text-brand-700"
                }`}
              >
                {idx + 1}
              </Link>
            ))}
          </div>
        )}
      </div>
      <h1 className="mt-3 sm:mt-4 text-[1.75rem] sm:text-5xl font-extrabold leading-[1.1] sm:leading-[1.05] text-ink break-words">
        {lesson.title}
      </h1>
      <p className="mt-2.5 sm:mt-3 text-base sm:text-xl text-ink-600 leading-snug break-words">{lesson.subtitle}</p>
      <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2 text-xs font-bold">
        <span className="inline-flex items-center gap-1 h-7 px-2.5 rounded-full bg-white border border-ink-200 text-ink-600"><Clock className="w-3.5 h-3.5"/> {lesson.durationMinutes} min</span>
        <span className="inline-flex items-center gap-1 h-7 px-2.5 rounded-full bg-marigold-100 text-marigold-900"><Zap className="w-3.5 h-3.5 fill-marigold-500 text-marigold-600"/> +{lesson.xpReward} XP</span>
        <span className="inline-flex items-center h-7 px-1 text-ink-500 font-semibold">Updated {lesson.lastUpdated}</span>
      </div>
      {lesson.isUpdatedBiWeekly && (
        <div className="mt-5 sm:mt-6">
          <FastMovingNotice lastUpdated={lesson.lastUpdated}/>
        </div>
      )}
    </header>
  );

  const allSolved = solved.size === quizTotal;
  const badgeTitle = currentTrack?.badgeName ?? "AI Fluency Credential";
  const shareUrl = "https://aifluency.in";
  const shareText = `Just completed "${lesson.title}" and progressed toward the ${badgeTitle} credential on AI Fluency! 🚀`;
  const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&summary=${encodeURIComponent(shareText)}`;

  const doneScreen = (
    <section className="space-y-6 min-w-0">
      <div className="relative overflow-hidden p-5 sm:p-7 rounded-[var(--radius-card)] bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-[var(--shadow-card)] [--rt-strong:#fff] [--rt-hl-text:var(--color-ink)]">
        <span aria-hidden="true" className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-marigold-400/30 blur-2xl"/>
        <div className="relative flex items-center justify-between gap-3">
          <PartyPopper className="w-9 h-9 text-marigold-300"/>
          {allSolved && (
            <span className="inline-flex items-center gap-1 h-8 px-3 rounded-full bg-marigold-400 text-ink text-sm font-extrabold">
              <Zap className="w-4 h-4 fill-ink"/> +{lesson.xpReward} XP
            </span>
          )}
        </div>
        <h2 className="relative mt-4 text-2xl sm:text-3xl font-extrabold">{allSolved ? "Lesson complete!" : "Almost there"}</h2>
        {allSolved ? (
          <div className="relative mt-4 p-4 rounded-2xl bg-white/10 border border-white/15">
            <p className="text-xs font-bold uppercase tracking-wider text-marigold-300">The one thing to remember</p>
            <p className="mt-1.5 text-[16px] sm:text-[17px] font-semibold leading-snug"><RichText text={lesson.bigIdea.headline} glossary={false}/></p>
          </div>
        ) : (
          <p className="relative mt-2 text-base text-brand-100 leading-relaxed">
            Get all {quizTotal} questions right to finish the lesson and earn {lesson.xpReward} XP.
          </p>
        )}
      </div>

      {/* Glowing Digital Certificate Badge + Share to LinkedIn */}
      {currentTrack && (
        <div className="relative overflow-hidden p-5 sm:p-6 rounded-[var(--radius-card)] bg-ink-950 text-white border border-cyber-400/50 badge-cyber-glow">
          <div aria-hidden="true" className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-cyber-500/20 blur-2xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-neon-500/20 blur-2xl" />
          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-cyber-400/25 to-neon-500/25 border border-cyber-400/50 text-cyber-300 shrink-0 shadow-[0_0_16px_rgba(0,229,255,0.3)]">
                <Trophy className="w-6 h-6 text-marigold-300" />
              </span>
              <div className="min-w-0">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-cyber-300">
                  Track {trackNumber} Digital Credential · Lesson {lessonIndex + 1}/{lessonCount}
                </span>
                <h3 className="mt-0.5 text-xl font-extrabold text-white break-words">{badgeTitle}</h3>
                <p className="mt-0.5 text-xs text-ink-300">
                  Verified fluency milestone in {currentTrack.title}
                </p>
              </div>
            </div>
            <a
              href={linkedInHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                navigator.clipboard?.writeText(`${shareText} ${shareUrl}`).catch(() => {});
                setCopiedBadge(true);
                setTimeout(() => setCopiedBadge(false), 3000);
              }}
              className="btn-cyber inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-gradient-to-r from-cyber-500 to-neon-600 text-ink-950 font-extrabold text-xs uppercase tracking-wider hover:from-cyber-400 hover:to-neon-500 shrink-0 cursor-pointer"
            >
              {copiedBadge ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
              <span>{copiedBadge ? "Copied & Opening LinkedIn" : "Share to LinkedIn"}</span>
            </a>
          </div>
        </div>
      )}
      {lesson.sources && lesson.sources.length > 0 && <Sources sources={lesson.sources}/>}
      <CreatorStrip/>
      {deck.length > 0 && (
        <button
          type="button"
          onClick={() => setDeckOpen(true)}
          className="tile-pop w-full flex items-center gap-3 p-4 rounded-2xl border-2 border-brand-200 bg-brand-50 text-left cursor-pointer"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-600 text-white shrink-0"><Layers3 className="w-5 h-5"/></span>
          <span className="flex-1 min-w-0">
            <span className="block text-[15px] font-bold text-ink">Lock it in: review the {deck.length} key terms</span>
            <span className="block text-sm text-ink-600">Tap-to-flip flashcards. Come back to them any time from the header.</span>
          </span>
          <ArrowRight className="w-5 h-5 text-brand-600 shrink-0"/>
        </button>
      )}
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
        <button type="button" onClick={() => goTo(1)} className="inline-flex items-center gap-1.5 text-ink-600 hover:text-ink cursor-pointer">
          <RotateCcw className="w-4 h-4"/> Replay this lesson
        </button>
        {prevLesson && (
          <Link href={lessonHref(prevLesson.id)} className="inline-flex items-center gap-1.5 text-ink-600">
            <ArrowLeft className="w-4 h-4 shrink-0"/> <span className="truncate">Previous: {prevLesson.title}</span>
          </Link>
        )}
      </div>
    </section>
  );

  const finishLink = nextLesson ? (
    <Link
      href={lessonHref(nextLesson.id)}
      className="btn-pop flex-1 min-w-0 min-h-12 sm:min-h-14 px-4 sm:px-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-600 text-white text-[15px] sm:text-[17px] font-bold hover:bg-brand-700"
    >
      <span className="truncate">Next: {nextLesson.title}</span> <ArrowRight className="w-5 h-5 shrink-0"/>
    </Link>
  ) : (
    <Link
      href="/#curriculum"
      className="btn-pop flex-1 min-w-0 min-h-12 sm:min-h-14 px-4 sm:px-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-600 text-white text-[15px] sm:text-[17px] font-bold hover:bg-brand-700"
    >
      <span className="truncate">Track done! Back to the course map</span> <ArrowRight className="w-5 h-5 shrink-0"/>
    </Link>
  );

  // ---- Whole lesson on one page (handy on a laptop, or for reviewing content) ----
  if (onePage) {
    return (
      <GlossaryProvider>
        <main className="flex-1 w-full max-w-2xl mx-auto px-3.5 sm:px-6 py-6 sm:py-8 pb-16 space-y-6 min-w-0">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setOnePage(false)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4"/> Switch to step-by-step
            </button>
            {deck.length > 0 && <DeckButton count={deck.length} onClick={() => setDeckOpen(true)}/>}
          </div>
          {intro}
          {steps.map((s, i) =>
            s.kind === "content" ? <div key={s.key} className="min-w-0">{s.node}</div> : s.kind === "quiz" ? <div key={`quiz-${i}`} className="min-w-0">{renderQuiz(s.index)}</div> : null
          )}
          {doneScreen}
          <div className="flex min-w-0">{finishLink}</div>
        </main>
        {deckOpen && <LessonDeck cards={deck} lessonTitle={lesson.title} onClose={() => setDeckOpen(false)}/>}
      </GlossaryProvider>
    );
  }

  // ---- Step-by-step player ----
  const blocked = isBlocked(current);
  const continueLabel =
    current.kind === "intro"
      ? "Start lesson"
      : blocked
        ? "Pick the right answer to continue"
        : steps[step + 1]?.kind === "done"
          ? "Finish lesson"
          : "Continue";

  return (
    <GlossaryProvider>
      <div className="sticky top-14 sm:top-16 z-30 w-full bg-paper/95 backdrop-blur-md border-b border-ink-200">
        <div className="max-w-2xl mx-auto px-3 sm:px-6 h-12 flex items-center gap-2 sm:gap-3 min-w-0">
          <Link href="/#curriculum" aria-label="Close lesson and go to the course map" className="p-1 -ml-1 text-ink-500 hover:text-ink shrink-0">
            <X className="w-5 h-5"/>
          </Link>
          <div className="flex-1 min-w-0 flex gap-1" role="progressbar" aria-valuemin={1} aria-valuemax={steps.length} aria-valuenow={step + 1}>
            {steps.map((s, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to screen ${i + 1} of ${steps.length}`}
                className={`h-2 flex-1 min-w-0 rounded-full transition-colors duration-300 cursor-pointer ${
                  i < step ? "bg-brand-600" : i === step ? "bg-brand-400" : s.kind === "quiz" ? "bg-marigold-200" : "bg-ink-200"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] sm:text-xs font-bold text-ink-500 tabular-nums shrink-0">{step + 1}/{steps.length}</span>
          {deck.length > 0 && <DeckButton count={deck.length} onClick={() => setDeckOpen(true)}/>}
        </div>
      </div>

      <main className="flex-1 w-full max-w-2xl mx-auto px-3.5 sm:px-6 pt-5 sm:pt-6 pb-32 sm:pb-36 min-w-0">
        <div key={step} className="step-in min-w-0">
          {current.kind === "intro" && (
            <>
              {intro}
              <div className="mt-5 sm:mt-7 grid grid-cols-3 gap-2">
                {[
                  { n: steps.length - 2, label: "bite-size screens" },
                  { n: activityCount, label: activityCount === 1 ? "hands-on activity" : "hands-on activities" },
                  { n: quizTotal, label: quizTotal === 1 ? "quick check" : "quick checks" },
                ].map((stat) => (
                  <div key={stat.label} className="p-2.5 sm:p-3 rounded-2xl bg-white border border-ink-200 text-center min-w-0">
                    <p className="font-display text-xl sm:text-2xl font-extrabold text-ink">{stat.n}</p>
                    <p className="mt-0.5 text-[11px] font-semibold leading-tight text-ink-500">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-ink-600 leading-relaxed">
                Stuck on a word? Tap anything <GlossaryDemoTrigger>underlined like this</GlossaryDemoTrigger> for a plain-English meaning.
              </p>
              <div className="mt-3 flex flex-col items-start gap-2.5">
                {deck.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setDeckOpen(true)}
                    className="inline-flex items-center gap-1.5 py-1 text-left text-sm font-semibold text-brand-700 hover:text-brand-800 cursor-pointer"
                  >
                    <Layers3 className="w-4 h-4 shrink-0"/> <span>Want a head start? Flip through the {deck.length} key terms</span>
                  </button>
                )}
                {canResume && (
                  <button
                    type="button"
                    onClick={() => goTo(savedStep ?? 1)}
                    className="tile-pop my-1 w-full p-4 rounded-2xl border-2 border-brand-200 bg-brand-50 text-left text-[15px] font-bold text-brand-700 cursor-pointer"
                  >
                    Welcome back! Pick up at screen {savedStep + 1} of {steps.length} →
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setOnePage(true)}
                  className="inline-flex items-center gap-1.5 py-1 text-left text-sm font-semibold text-ink-500 hover:text-ink cursor-pointer"
                >
                  <Rows3 className="w-4 h-4 shrink-0"/> <span>Prefer to scroll? See the whole lesson on one page</span>
                </button>
              </div>
            </>
          )}
          {current.kind === "content" && current.node}
          {current.kind === "quiz" && renderQuiz(current.index)}
          {current.kind === "done" && doneScreen}
        </div>
      </main>

      <nav
        className="fixed bottom-0 inset-x-0 z-40 bg-paper/95 backdrop-blur-md border-t border-ink-200"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="max-w-2xl mx-auto px-3.5 sm:px-6 py-2.5 sm:py-3 flex gap-2.5 sm:gap-3 min-w-0">
          {step > 0 && (
            <button
              onClick={() => goTo(step - 1)}
              aria-label="Previous screen"
              className="tile-pop min-h-12 sm:min-h-14 w-12 sm:w-14 shrink-0 inline-flex items-center justify-center rounded-2xl border-2 border-ink-200 bg-white text-ink-700 hover:border-ink-300 cursor-pointer"
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
              className={`flex-1 min-w-0 min-h-12 sm:min-h-14 px-4 sm:px-5 inline-flex items-center justify-center gap-2 rounded-2xl text-[15px] sm:text-[17px] font-bold ${
                blocked
                  ? "bg-ink-100 text-ink-500 border-2 border-dashed border-ink-200 cursor-not-allowed"
                  : "btn-pop bg-brand-600 text-white hover:bg-brand-700 cursor-pointer"
              }`}
            >
              <span className="truncate">{continueLabel}</span> {!blocked && <ArrowRight className="w-5 h-5 shrink-0"/>}
            </button>
          )}
        </div>
      </nav>
      {deckOpen && <LessonDeck cards={deck} lessonTitle={lesson.title} onClose={() => setDeckOpen(false)}/>}
    </GlossaryProvider>
  );
}

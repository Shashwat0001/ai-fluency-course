"use client";

import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import { CreatorCard } from "@/components/CreatorCard";
import { GlossaryProvider, RichText } from "@/components/lesson/Glossary";
import { CURRICULUM_TRACKS, BI_WEEKLY_META } from "@/data/curriculum";
import { CREATOR } from "@/data/creator";
import { getCompletedKey, subscribeToProgress } from "@/lib/progress";
import {
  ArrowRight,
  BookOpenText,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Clock,
  Cpu,
  Globe2,
  Hand,
  Layers,
  Lightbulb,
  Newspaper,
  PanelsTopLeft,
  Sparkles,
  Trophy,
  XCircle,
  Zap,
} from "lucide-react";

const TRACK_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  BrainCircuit,
  Layers,
  Sparkles,
  Bot,
  Zap,
  Globe2,
};

const FEATURES = [
  {
    icon: PanelsTopLeft,
    title: "One idea per screen",
    body: "Bite-size screens you can finish between metro stops. Close the tab and you'll pick up exactly where you left off.",
  },
  {
    icon: Hand,
    title: "Learn by doing",
    body: "Sort, simulate, catch the made-up fact, price an AI feature in rupees. You'll rarely just read.",
  },
  {
    icon: BookOpenText,
    title: "Jargon, decoded",
    body: "Tap any underlined word for a one-line meaning. Walk into your next meeting knowing what \"RAG\" means.",
  },
  {
    icon: Newspaper,
    title: "Always current",
    body: "A fresh AI Pulse every two weeks, with sources, so you're never quoting last year's news.",
  },
];

const lessonHref = (trackId: string, lessonId: string) => `/learn/${trackId}/${lessonId}`;

export default function HomePage() {
  const [demoAnswer, setDemoAnswer] = useState<number | null>(null);
  const completedKey = useSyncExternalStore(subscribeToProgress, getCompletedKey, () => "");
  const completed = new Set(completedKey ? completedKey.split(",") : []);

  const allLessons = CURRICULUM_TRACKS.flatMap((track) => track.lessons.map((lesson) => ({ track, lesson })));
  const totalMinutes = allLessons.reduce((sum, { lesson }) => sum + lesson.durationMinutes, 0);
  const nextUp = allLessons.find(({ lesson }) => !completed.has(lesson.id)) ?? allLessons[0];
  const started = completed.size > 0;

  const demoTrack = CURRICULUM_TRACKS[0];
  const demoLesson = demoTrack.lessons[0];
  const demoQuestion = demoLesson.quiz[0];
  const demoChoice = demoAnswer !== null ? demoQuestion.options[demoAnswer] : null;

  const pulseTrack = CURRICULUM_TRACKS[CURRICULUM_TRACKS.length - 1];
  const pulseLesson = pulseTrack.lessons[pulseTrack.lessons.length - 1];

  return (
    <GlossaryProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar/>

        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full bg-brand-200/50 blur-3xl"/>
            <div className="absolute top-24 -right-24 w-72 h-72 rounded-full bg-marigold-200/60 blur-3xl"/>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-12 text-center">
            {pulseLesson && (
              <Link
                href={lessonHref(pulseTrack.id, pulseLesson.id)}
                className="inline-flex items-center gap-2 h-9 pl-1.5 pr-3 rounded-full bg-white border border-ink-200 shadow-sm text-sm font-semibold text-ink-700 hover:border-brand-300"
              >
                <span className="inline-flex items-center h-6 px-2 rounded-full bg-mint-100 text-mint-800 text-xs font-bold">New</span>
                AI Pulse for {BI_WEEKLY_META.lastUpdated} is out
                <ArrowRight className="w-4 h-4 text-ink-400"/>
              </Link>
            )}

            <h1 className="mt-7 text-[clamp(2.6rem,9vw,5.25rem)] font-extrabold leading-[0.98] text-ink">
              Get fluent in AI
              <span className="block mt-2 font-serif font-normal italic tracking-normal text-brand-600">without the jargon.</span>
            </h1>

            <p className="mt-7 max-w-2xl mx-auto text-lg sm:text-xl text-ink-600 leading-relaxed">
              Five-minute lessons that take you from <span className="text-ink font-semibold">&ldquo;what&rsquo;s a token?&rdquo;</span> to holding
              your own with engineers. Built for India, packed with hands-on exercises, and free.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <Link
                href={lessonHref(nextUp.track.id, nextUp.lesson.id)}
                className="btn-pop inline-flex items-center justify-center gap-2 min-h-14 px-7 rounded-2xl bg-brand-600 text-white text-[17px] font-bold hover:bg-brand-700"
              >
                {started ? "Continue where you left off" : "Start the first lesson"} <ArrowRight className="w-5 h-5"/>
              </Link>
              <a
                href="#curriculum"
                className="tile-pop inline-flex items-center justify-center gap-2 min-h-14 px-7 rounded-2xl bg-white border-2 border-ink-200 text-ink text-[17px] font-bold hover:border-ink-300"
              >
                See all {allLessons.length} lessons
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {[
                { value: allLessons.length, label: "bite-size lessons" },
                { value: `${totalMinutes} min`, label: "zero to fluent" },
                { value: CURRICULUM_TRACKS.length, label: "learning tracks" },
                { value: "0", label: "lines of code" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-2xl bg-white/80 border border-ink-200">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-extrabold text-ink">{stat.value}</dd>
                  <dd className="mt-0.5 text-xs font-semibold text-ink-500">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------- 30-second taster ---------- */}
        <section id="interactive-demo" className="px-4 sm:px-6 pb-16">
          <div className="max-w-3xl mx-auto p-6 sm:p-9 rounded-[var(--radius-card)] bg-white border border-ink-200 shadow-[var(--shadow-card)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50"><Lightbulb className="w-[18px] h-[18px]"/></span>
                Try it in 30 seconds
              </span>
              <span className="inline-flex items-center gap-1 h-7 px-2.5 rounded-full bg-marigold-100 text-marigold-900 text-xs font-bold">
                <Zap className="w-3.5 h-3.5 fill-marigold-500 text-marigold-600"/> +{demoLesson.xpReward} XP lesson
              </span>
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight text-ink">{demoLesson.title}</h2>

            {demoLesson.analogy && (
              <p className="mt-4 p-5 rounded-2xl bg-brand-50 border border-brand-100 text-[17px] leading-relaxed text-ink-800">
                <RichText text={demoLesson.analogy.metaphor}/>
              </p>
            )}

            <p className="mt-7 text-xs font-bold uppercase tracking-wider text-marigold-700">Quick check</p>
            <p className="mt-2 text-xl font-bold leading-snug text-ink">
              <RichText text={demoQuestion.scenario}/>
            </p>

            <div className="mt-5 space-y-3">
              {demoQuestion.options.map((option, index) => {
                const isSelected = demoAnswer === index;
                let style = "border-ink-200 bg-white hover:border-brand-300";
                if (isSelected) style = option.isCorrect ? "border-mint-500 bg-mint-50" : "border-coral-400 bg-coral-50";
                return (
                  <button
                    key={option.id}
                    onClick={() => setDemoAnswer(index)}
                    className={`tile-pop w-full min-h-14 text-left px-4 py-3.5 rounded-2xl border-2 flex items-center justify-between gap-4 cursor-pointer ${style}`}
                  >
                    <span className="text-[16px] font-medium leading-snug text-ink">{option.text}</span>
                    {isSelected &&
                      (option.isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-mint-500 shrink-0"/>
                      ) : (
                        <XCircle className="w-6 h-6 text-coral-500 shrink-0"/>
                      ))}
                  </button>
                );
              })}
            </div>

            {demoChoice && (
              <>
                <div
                  role="status"
                  className={`mt-4 p-4 rounded-2xl text-[16px] leading-relaxed [--rt-strong:currentColor] ${
                    demoChoice.isCorrect ? "bg-mint-100 text-mint-900" : "bg-coral-100 text-coral-900"
                  }`}
                >
                  <RichText text={demoChoice.analogyFeedback} glossary={false}/>
                </div>
                <Link
                  href={lessonHref(demoTrack.id, demoLesson.id)}
                  className="btn-pop mt-5 inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-14 px-6 rounded-2xl bg-brand-600 text-white text-[17px] font-bold hover:bg-brand-700"
                >
                  Finish this lesson <ArrowRight className="w-5 h-5"/>
                </Link>
              </>
            )}
          </div>
        </section>

        {/* ---------- How it works ---------- */}
        <section className="px-4 sm:px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-600">How it works</p>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold leading-[1.05] text-ink">
                Built for your phone, your commute and your{" "}
                <span className="font-serif font-normal italic tracking-normal text-brand-600">next meeting.</span>
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="p-6 rounded-[var(--radius-card)] bg-white border border-ink-200 shadow-[var(--shadow-card)]">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-600 text-white shadow-[0_3px_0_0_var(--color-brand-800)]">
                    <Icon className="w-5 h-5"/>
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-[15px] text-ink-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Course map ---------- */}
        <section id="curriculum" className="px-4 sm:px-6 py-20 bg-white border-y border-ink-200 scroll-mt-16">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-600">The course</p>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold leading-[1.05] text-ink">Six tracks. Zero to fluent.</h2>
              <p className="mt-4 text-lg text-ink-600 leading-relaxed">
                Go in order, or jump straight to whatever your next meeting needs. Every track ends with a badge.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {CURRICULUM_TRACKS.map((track) => {
                const Icon = TRACK_ICONS[track.icon] ?? Cpu;
                const done = track.lessons.filter((lesson) => completed.has(lesson.id)).length;
                const total = track.lessons.length;
                const minutes = track.lessons.reduce((sum, lesson) => sum + lesson.durationMinutes, 0);
                const target = track.lessons.find((lesson) => !completed.has(lesson.id)) ?? track.lessons[0];
                const finished = total > 0 && done === total;

                return (
                  <Link
                    key={track.id}
                    href={target ? lessonHref(track.id, target.id) : "#curriculum"}
                    className="group relative flex flex-col p-6 rounded-[var(--radius-card)] bg-paper border border-ink-200 hover:border-brand-300 hover:bg-white hover:shadow-[var(--shadow-card)] transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6"/>
                      </span>
                      <span className="font-display text-5xl font-extrabold leading-none text-ink-200 group-hover:text-brand-100 transition-colors">
                        {String(track.number).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-bold leading-tight text-ink">{track.title}</h3>
                    <p className="mt-2 text-[15px] text-ink-600 leading-relaxed flex-1">{track.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold">
                      <span className="inline-flex items-center gap-1 h-7 px-2.5 rounded-full bg-white border border-ink-200 text-ink-600">
                        {total} {total === 1 ? "lesson" : "lessons"}
                      </span>
                      <span className="inline-flex items-center gap-1 h-7 px-2.5 rounded-full bg-white border border-ink-200 text-ink-600">
                        <Clock className="w-3.5 h-3.5"/> {minutes} min
                      </span>
                      <span className="inline-flex items-center gap-1 h-7 px-2.5 rounded-full bg-marigold-100 text-marigold-900">
                        <Trophy className="w-3.5 h-3.5"/> {track.badgeName}
                      </span>
                    </div>

                    <div className="mt-5 pt-4 border-t border-ink-200">
                      {done > 0 && (
                        <div className="mb-3 h-2 rounded-full bg-ink-100 overflow-hidden" aria-label={`${done} of ${total} lessons done`}>
                          <div className="h-full rounded-full bg-mint-500" style={{ width: `${(done / total) * 100}%` }}/>
                        </div>
                      )}
                      <span className="flex items-center justify-between text-sm font-bold text-brand-600">
                        {finished ? "Badge earned · review" : done > 0 ? `${done} of ${total} done · continue` : "Start track"}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- Creator ---------- */}
        <section className="px-4 sm:px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <CreatorCard/>
          </div>
        </section>

        {/* ---------- Footer ---------- */}
        <footer className="mt-auto border-t border-ink-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
            <div>
              <Logo/>
              <p className="mt-3 text-sm text-ink-500 max-w-sm">
                AI, without the jargon. Made in India for curious people everywhere.
              </p>
            </div>
            <div className="text-sm text-ink-500 sm:text-right space-y-1">
              <p>
                Built by{" "}
                <a href={CREATOR.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink hover:text-brand-600">
                  {CREATOR.name}
                </a>{" "}
                ·{" "}
                <a href={`mailto:${CREATOR.email}`} className="hover:text-brand-600">Say hello</a>
              </p>
              <p>AI Pulse updated {BI_WEEKLY_META.lastUpdated} · Your progress is saved in this browser</p>
            </div>
          </div>
        </footer>
      </div>
    </GlossaryProvider>
  );
}

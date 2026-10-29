"use client";

import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import { CreatorCard } from "@/components/CreatorCard";
import { GlossaryInlineTerm, GlossaryProvider, RichText } from "@/components/lesson/Glossary";
import CertificateModal, { buildLinkedInCertificateShare } from "@/components/CertificateModal";
import { CURRICULUM_TRACKS, BI_WEEKLY_META } from "@/data/curriculum";
import { CREATOR } from "@/data/creator";
import { getCompletedKey, getInProgressLessonId, subscribeToProgress } from "@/lib/progress";
import type { Track } from "@/data/types";
import {
  ArrowRight,
  Award,
  BookOpenText,
  Bot,
  BrainCircuit,
  Check,
  CheckCircle2,
  Clock,
  Cpu,
  Eye,
  Globe2,
  Hand,
  Layers,
  Lightbulb,
  Lock,
  Newspaper,
  PanelsTopLeft,
  Play,
  Rocket,
  Share2,
  Sparkles,
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
  Rocket,
};

const DEMO_PREVIEW_COUNTS: Record<number, number> = {
  1: 10,
  2: 7,
  3: 4,
  4: 2,
  5: 0,
  6: 5,
  7: 1,
};

const lessonHref = (trackId: string, lessonId: string) => `/learn/${trackId}/${lessonId}`;

function TrackProgressRing({ done, total }: { done: number; total: number }) {
  const size = 54;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = Number((2 * Math.PI * radius).toFixed(2));
  const ratio = total > 0 ? Math.min(1, done / total) : 0;
  const dashOffset = Number((circumference * (1 - ratio)).toFixed(2));
  const finished = total > 0 && done === total;

  return (
    <div
      className="relative inline-flex items-center justify-center shrink-0"
      style={{ width: size, height: size }}
      aria-label={`${done} of ${total} lessons completed`}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-ink-200"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={finished ? "var(--color-mint-500)" : "var(--color-cyber-500)"}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          className="transition-all duration-500 drop-shadow-[0_0_6px_rgba(0,229,255,0.5)]"
        />
      </svg>
      <span className="absolute inset-0 flex flex-col items-center justify-center text-[11px] font-extrabold tabular-nums text-ink leading-none">
        <span>
          {done}/{total}
        </span>
      </span>
    </div>
  );
}

export default function HomePage() {
  const [demoAnswer, setDemoAnswer] = useState<number | null>(null);
  const [demoShakeCount, setDemoShakeCount] = useState(0);
  const [previewProgress, setPreviewProgress] = useState(false);
  const [copiedTrackId, setCopiedTrackId] = useState<string | null>(null);
  const [activeCertificateTrack, setActiveCertificateTrack] = useState<Track | null>(null);

  const completedKey = useSyncExternalStore(subscribeToProgress, getCompletedKey, () => "");
  const completed = new Set(completedKey ? completedKey.split(",").filter(Boolean) : []);

  const allLessons = CURRICULUM_TRACKS.flatMap((track) => track.lessons.map((lesson) => ({ track, lesson })));
  const allLessonIds = allLessons.map(({ lesson }) => lesson.id);
  const inProgressId = useSyncExternalStore(
    subscribeToProgress,
    () => getInProgressLessonId(allLessonIds),
    () => null
  );

  const totalMinutes = allLessons.reduce((sum, { lesson }) => sum + lesson.durationMinutes, 0);
  const inProgressEntry = inProgressId ? allLessons.find(({ lesson }) => lesson.id === inProgressId) : undefined;
  const nextUp = inProgressEntry ?? allLessons.find(({ lesson }) => !completed.has(lesson.id)) ?? allLessons[0];
  const started = completed.size > 0 || Boolean(inProgressEntry);

  const demoTrack = CURRICULUM_TRACKS[0];
  const demoLesson = demoTrack.lessons[0];
  const demoQuestion = demoLesson.quiz[0];
  const demoChoice = demoAnswer !== null ? demoQuestion.options[demoAnswer] : null;

  const pulseTrack = CURRICULUM_TRACKS.find((t) => t.id === "track-6-biweekly-pulse") ?? CURRICULUM_TRACKS[0];
  const pulseLesson = pulseTrack.lessons[pulseTrack.lessons.length - 1];

  const handleDemoSelect = (index: number) => {
    setDemoAnswer(index);
    const chosen = demoQuestion.options[index];
    if (chosen && !chosen.isCorrect) {
      setDemoShakeCount((c) => c + 1);
    }
  };

  const handleLinkedInShare = (track: Track) => {
    const { postText } = buildLinkedInCertificateShare(track);
    navigator.clipboard?.writeText(postText).catch(() => {});
    setCopiedTrackId(track.id);
    setTimeout(() => {
      setCopiedTrackId((prev) => (prev === track.id ? null : prev));
    }, 3500);
  };

  return (
    <GlossaryProvider>
      <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden flex flex-col">
        <Navbar />

        {/* ---------- Hero ---------- */}
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[760px] h-[420px] rounded-full bg-brand-200/45 blur-3xl" />
            <div className="absolute top-16 left-1/4 w-72 h-72 rounded-full bg-cyber-300/35 blur-3xl" />
            <div className="absolute top-24 -right-20 w-80 h-80 rounded-full bg-neon-300/35 blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-20 pb-10 sm:pb-12 text-center">
            {pulseLesson && (
              <Link
                href={lessonHref(pulseTrack.id, pulseLesson.id)}
                className="inline-flex items-center gap-2 min-h-9 py-1 pl-1.5 pr-3.5 rounded-full bg-white/90 backdrop-blur-sm border border-cyber-400/60 shadow-[0_0_16px_-4px_rgba(0,229,255,0.4)] text-xs sm:text-sm font-semibold text-ink-800 hover:border-neon-500 transition-all max-w-full"
              >
                <span className="inline-flex items-center h-6 px-2.5 rounded-full bg-ink-950 text-cyber-300 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider shrink-0">
                  New
                </span>
                <span className="truncate">AI Pulse for {BI_WEEKLY_META.lastUpdated} is out</span>
                <ArrowRight className="w-4 h-4 text-cyber-600 shrink-0" />
              </Link>
            )}

            <h1 className="mt-6 sm:mt-7 text-[clamp(2.2rem,8.5vw,5.25rem)] font-extrabold leading-[1.02] sm:leading-[0.98] text-ink">
              Get fluent in AI
              <span className="block mt-2 font-serif font-normal italic tracking-normal bg-gradient-to-r from-brand-600 via-neon-600 to-cyber-600 bg-clip-text text-transparent">
                without the jargon.
              </span>
            </h1>

            <p className="mt-6 sm:mt-7 max-w-2xl mx-auto text-base sm:text-xl text-ink-600 leading-relaxed">
              Five-minute lessons that take you from{" "}
              <span className="text-ink font-semibold">
                &ldquo;what&rsquo;s a <GlossaryInlineTerm term="token">token</GlossaryInlineTerm>?&rdquo;
              </span>{" "}
              to holding your own with engineers. Built for India, packed with hands-on exercises, and free.
            </p>

            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
              <Link
                href={lessonHref(nextUp.track.id, nextUp.lesson.id)}
                className="btn-cyber inline-flex items-center justify-center gap-2.5 min-h-14 px-5 sm:px-7 rounded-2xl bg-ink-950 border-2 border-cyber-400 text-white text-base sm:text-[17px] font-extrabold hover:bg-brand-950 hover:border-neon-400"
              >
                <Zap className="w-5 h-5 text-cyber-400 fill-cyber-400 shrink-0" />
                <span>{started ? "Continue where you left off" : "Start the first lesson"}</span>
                <ArrowRight className="w-5 h-5 text-cyber-300 shrink-0" />
              </Link>
              <a
                href="#curriculum"
                className="tile-pop inline-flex items-center justify-center gap-2 min-h-14 px-5 sm:px-7 rounded-2xl bg-white border-2 border-ink-200 text-ink text-base sm:text-[17px] font-bold hover:border-neon-400 hover:shadow-[0_0_18px_-4px_rgba(168,85,247,0.35)] transition-all"
              >
                See all {allLessons.length} lessons
              </a>
            </div>

            <dl className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {[
                { value: allLessons.length, label: "bite-size lessons", accent: "border-cyber-300/60" },
                { value: `${totalMinutes} min`, label: "zero to fluent", accent: "border-neon-300/60" },
                { value: CURRICULUM_TRACKS.length, label: "learning tracks", accent: "border-cyber-300/60" },
                { value: "0", label: "lines of code", accent: "border-neon-300/60" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`p-3.5 sm:p-4 rounded-2xl bg-white/85 backdrop-blur-sm border ${stat.accent} shadow-sm`}
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl sm:text-3xl font-extrabold text-ink tabular-nums">{stat.value}</dd>
                  <dd className="mt-0.5 text-xs font-semibold text-ink-500">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---------- 30-second taster (Interactive Quick Check) ---------- */}
        <section id="interactive-demo" className="px-4 sm:px-6 pb-16">
          <div className="max-w-3xl mx-auto p-5 sm:p-9 rounded-[var(--radius-card)] bg-white border-2 border-ink-200 shadow-[var(--shadow-card)] relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-cyber-400 via-brand-500 to-neon-500"
            />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-brand-700">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-ink-950 text-cyber-300 border border-cyber-400/50 shrink-0">
                  <Lightbulb className="w-[18px] h-[18px]" />
                </span>
                Try it in 30 seconds · Interactive Demo
              </span>
              <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-ink-950 border border-cyber-400/50 text-cyber-300 text-xs font-extrabold">
                <Zap className="w-3.5 h-3.5 fill-marigold-400 text-marigold-400" /> +{demoLesson.xpReward} XP lesson
              </span>
            </div>
            <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold leading-tight text-ink">{demoLesson.title}</h2>

            {demoLesson.analogy && (
              <div className="mt-4 p-5 rounded-2xl bg-brand-50/70 border border-brand-200 text-[17px] leading-relaxed text-ink-800">
                <RichText text={demoLesson.analogy.metaphor} />
                <p className="mt-2.5 text-xs font-semibold text-ink-500">
                  💡 Tip: Hover or tap any <GlossaryInlineTerm term="LLM">dotted-underlined word</GlossaryInlineTerm>{" "}
                  for an instant frosted-glass definition.
                </p>
              </div>
            )}

            <div className="mt-7 flex items-center justify-between gap-2">
              <p className="text-xs font-extrabold uppercase tracking-wider text-neon-700 flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-neon-500 animate-pulse" />
                Quick check · Tap an answer to test yourself
              </p>
              {demoChoice && (
                <span
                  className={`text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    demoChoice.isCorrect
                      ? "bg-mint-100 text-mint-800 border border-mint-300"
                      : "bg-coral-100 text-coral-800 border border-coral-300"
                  }`}
                >
                  {demoChoice.isCorrect ? "✓ Spot on!" : "✗ Try another option"}
                </span>
              )}
            </div>
            <p className="mt-2 text-xl font-bold leading-snug text-ink">
              <RichText text={demoQuestion.scenario} />
            </p>

            <div className="mt-5 space-y-3" role="radiogroup" aria-label="Quick check options">
              {demoQuestion.options.map((option, index) => {
                const isSelected = demoAnswer === index;
                let style =
                  "border-ink-200 bg-white hover:border-cyber-500 hover:bg-cyber-50/40 hover:shadow-[0_0_18px_-4px_rgba(0,229,255,0.4)]";
                if (isSelected) {
                  style = option.isCorrect
                    ? "border-mint-500 bg-mint-50 shadow-[0_0_25px_-4px_rgba(18,180,124,0.55)] ring-2 ring-mint-400/40"
                    : "border-coral-500 bg-coral-50 animate-shake ring-2 ring-coral-400/30";
                }
                return (
                  <button
                    key={`${option.id}-${isSelected && !option.isCorrect ? demoShakeCount : 0}`}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleDemoSelect(index)}
                    className={`tile-pop w-full min-h-14 text-left px-4 py-3.5 rounded-2xl border-2 flex items-center justify-between gap-4 cursor-pointer transition-all ${style}`}
                  >
                    <span className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 inline-flex items-center justify-center w-7 h-7 shrink-0 rounded-lg border-2 text-xs font-extrabold uppercase transition-colors ${
                          isSelected
                            ? option.isCorrect
                              ? "border-mint-600 bg-mint-500 text-white"
                              : "border-coral-600 bg-coral-500 text-white"
                            : "border-ink-200 bg-ink-50 text-ink-600"
                        }`}
                      >
                        {option.id}
                      </span>
                      <span className="text-[16px] font-semibold leading-snug text-ink">{option.text}</span>
                    </span>
                    {isSelected &&
                      (option.isCorrect ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-mint-500 text-white text-xs font-extrabold shrink-0 shadow-sm">
                          <CheckCircle2 className="w-4 h-4" /> Correct
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-coral-500 text-white text-xs font-extrabold shrink-0 shadow-sm">
                          <XCircle className="w-4 h-4" /> Retry
                        </span>
                      ))}
                  </button>
                );
              })}
            </div>

            {demoChoice && (
              <div className="mt-5 step-in">
                <div
                  role="status"
                  className={`p-4 rounded-2xl border-2 text-[16px] leading-relaxed [--rt-strong:currentColor] ${
                    demoChoice.isCorrect
                      ? "bg-mint-50 border-mint-400 text-mint-900 shadow-[0_0_24px_-6px_rgba(18,180,124,0.4)]"
                      : "bg-coral-50 border-coral-300 text-coral-900"
                  }`}
                >
                  <p className="text-xs font-extrabold uppercase tracking-wider mb-1">
                    {demoChoice.isCorrect ? "🎉 Why that works:" : "⚡ Not quite — here's why:"}
                  </p>
                  <RichText text={demoChoice.analogyFeedback} glossary={false} />
                </div>
                <Link
                  href={lessonHref(demoTrack.id, demoLesson.id)}
                  className="btn-cyber mt-5 inline-flex items-center justify-center gap-2.5 w-full sm:w-auto min-h-14 px-7 rounded-2xl bg-ink-950 border-2 border-cyber-400 text-white text-[17px] font-extrabold hover:border-neon-400"
                >
                  <span>Finish this lesson (+{demoLesson.xpReward} XP)</span>
                  <ArrowRight className="w-5 h-5 text-cyber-300" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ---------- How it works (with interactive Frosted Glass Jargon Tooltips) ---------- */}
        <section className="px-4 sm:px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-wider text-neon-700">How it works</p>
              <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold leading-[1.05] text-ink">
                Built for your phone, your commute and your{" "}
                <span className="font-serif font-normal italic tracking-normal text-brand-600">next meeting.</span>
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Feature 1 */}
              <div className="p-6 rounded-[var(--radius-card)] bg-white border border-ink-200 hover:border-cyber-400 shadow-[var(--shadow-card)] transition-all">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-ink-950 border border-cyber-400/50 text-cyber-300 shadow-[0_3px_0_0_var(--color-brand-950)]">
                  <PanelsTopLeft className="w-5 h-5" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink">One idea per screen</h3>
                <p className="mt-2 text-[15px] text-ink-600 leading-relaxed">
                  Bite-size screens you can finish between metro stops. Close the tab and you&rsquo;ll pick up
                  exactly where you left off.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-6 rounded-[var(--radius-card)] bg-white border border-ink-200 hover:border-neon-400 shadow-[var(--shadow-card)] transition-all">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-ink-950 border border-neon-400/50 text-neon-300 shadow-[0_3px_0_0_var(--color-brand-950)]">
                  <Hand className="w-5 h-5" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink">Learn by doing</h3>
                <p className="mt-2 text-[15px] text-ink-600 leading-relaxed">
                  Sort, simulate, catch the made-up fact, price an AI feature in rupees. You&rsquo;ll rarely just read.
                </p>
              </div>

              {/* Feature 3: Interactive Jargon, decoded card */}
              <div className="p-6 rounded-[var(--radius-card)] bg-white border-2 border-cyber-400/70 shadow-[0_0_24px_-8px_rgba(0,229,255,0.35)] transition-all">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-ink-950 border border-cyber-400 text-cyber-300 shadow-[0_3px_0_0_var(--color-brand-950)]">
                    <BookOpenText className="w-5 h-5" />
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-cyber-100 text-cyber-900 text-[11px] font-extrabold uppercase tracking-wider">
                    Hover or Tap
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">Jargon, decoded</h3>
                <p className="mt-2 text-[15px] text-ink-600 leading-relaxed">
                  Hover or tap any dotted word for a frosted-glass meaning:{" "}
                  <GlossaryInlineTerm term="RAG">RAG</GlossaryInlineTerm>,{" "}
                  <GlossaryInlineTerm term="hallucination">hallucination</GlossaryInlineTerm>, or{" "}
                  <GlossaryInlineTerm term="context window">context window</GlossaryInlineTerm>.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-6 rounded-[var(--radius-card)] bg-white border border-ink-200 hover:border-cyber-400 shadow-[var(--shadow-card)] transition-all">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-ink-950 border border-cyber-400/50 text-cyber-300 shadow-[0_3px_0_0_var(--color-brand-950)]">
                  <Newspaper className="w-5 h-5" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink">Always current</h3>
                <p className="mt-2 text-[15px] text-ink-600 leading-relaxed">
                  A fresh AI Pulse every two weeks, with sources, so you&rsquo;re never quoting last year&rsquo;s news.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Course map (Gamified Progress Rings + Pixel Bars + Glowing LinkedIn Certificates) ---------- */}
        <section id="curriculum" className="px-4 sm:px-6 py-20 bg-white border-y border-ink-200 scroll-mt-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="text-xs font-extrabold uppercase tracking-wider text-cyber-700">The course</p>
                <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold leading-[1.05] text-ink">
                  Six tracks and a capstone. Zero to fluent.
                </h2>
                <p className="mt-4 text-lg text-ink-600 leading-relaxed">
                  Go in order, or jump straight to whatever your next meeting needs. Every track ends with a glowing
                  digital certificate you can share to LinkedIn in one click.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setPreviewProgress((prev) => !prev)}
                className={`self-start md:self-auto inline-flex items-center gap-2 h-10 px-4 rounded-xl border text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  previewProgress
                    ? "bg-ink-950 text-cyber-300 border-cyber-400 shadow-[0_0_16px_-2px_rgba(0,229,255,0.45)]"
                    : "bg-paper text-ink-700 border-ink-200 hover:border-cyber-400"
                }`}
              >
                <Eye className="w-4 h-4 text-cyber-500" />
                <span>{previewProgress ? "Showing Sample Progress" : "Preview Progress & Badges"}</span>
              </button>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {CURRICULUM_TRACKS.map((track) => {
                const Icon = TRACK_ICONS[track.icon] ?? Cpu;
                const realDone = track.lessons.filter((lesson) => completed.has(lesson.id)).length;
                const total = track.lessons.length;
                const done = previewProgress ? Math.max(realDone, DEMO_PREVIEW_COUNTS[track.number] ?? 3) : realDone;
                const minutes = track.lessons.reduce((sum, lesson) => sum + lesson.durationMinutes, 0);
                const target = track.lessons.find((lesson) => !completed.has(lesson.id)) ?? track.lessons[0];
                const finished = total > 0 && done === total;

                const { linkedInUrl } = buildLinkedInCertificateShare(track);
                const isCopied = copiedTrackId === track.id;

                return (
                  <article
                    key={track.id}
                    className="group relative flex flex-col p-6 rounded-[var(--radius-card)] bg-paper border-2 border-ink-200 hover:border-cyber-400 hover:bg-white hover:shadow-[0_12px_32px_-12px_rgba(0,229,255,0.28)] transition-all"
                  >
                    {/* Header with Track Icon, Track Number, and Circular Progress Ring */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-ink-950 text-cyber-300 border border-cyber-400/50 group-hover:border-neon-400 group-hover:text-neon-300 shadow-[0_0_14px_-3px_rgba(0,229,255,0.35)] transition-colors">
                          <Icon className="w-6 h-6" />
                        </span>
                        <div>
                          <span className="block text-[11px] font-extrabold uppercase tracking-widest text-ink-500">
                            Track {String(track.number).padStart(2, "0")}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-ink-600">
                            <Clock className="w-3 h-3 text-cyber-600" /> {minutes} min total
                          </span>
                        </div>
                      </div>

                      <TrackProgressRing done={done} total={total} />
                    </div>

                    <Link
                      href={target ? lessonHref(track.id, target.id) : "#curriculum"}
                      className="mt-5 block group/title focus:outline-none"
                    >
                      <h3 className="text-2xl font-extrabold leading-tight text-ink group-hover/title:text-brand-600 transition-colors">
                        {track.title}
                      </h3>
                      <p className="mt-2 text-[15px] text-ink-600 leading-relaxed">{track.description}</p>
                    </Link>

                    {/* Retro-Inspired 10-Segment Pixel Tracker Bar */}
                    <div className="mt-5 p-3.5 rounded-2xl bg-white border border-ink-200">
                      <div className="flex items-center justify-between text-xs font-extrabold">
                        <span className="uppercase tracking-wider text-ink-600">Completion Tracker</span>
                        <span className="tabular-nums text-ink font-extrabold">
                          {done}/{total} lessons
                        </span>
                      </div>
                      <div
                        className="mt-2 grid grid-cols-10 gap-1"
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={total}
                        aria-valuenow={done}
                        aria-label={`Track ${track.number}: ${done} of ${total} lessons completed`}
                      >
                        {track.lessons.map((lesson, idx) => {
                          const isSegmentDone = idx < done;
                          return (
                            <span
                              key={lesson.id}
                              title={`Lesson ${idx + 1}: ${lesson.title}`}
                              className={`h-2.5 rounded-[3px] transition-all duration-300 ${
                                isSegmentDone
                                  ? finished
                                    ? "bg-mint-500 shadow-[0_0_6px_rgba(18,180,124,0.6)]"
                                    : "bg-gradient-to-r from-cyber-500 to-neon-500 shadow-[0_0_6px_rgba(0,229,255,0.55)]"
                                  : "bg-ink-100 border border-ink-200/80"
                              }`}
                            />
                          );
                        })}
                      </div>
                    </div>

                    {/* Digital Certificate Badge: Locked until track is completed; unlocks Certificate + Share to LinkedIn once finished */}
                    <div
                      className={`mt-4 p-4 rounded-2xl text-white relative overflow-hidden transition-all ${
                        finished
                          ? "bg-ink-950 border border-cyber-400/60 badge-cyber-glow"
                          : "bg-ink-900/95 border border-ink-700/80"
                      }`}
                    >
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-8 -top-8 w-24 h-24 rounded-full bg-cyber-500/20 blur-xl"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-8 -bottom-8 w-24 h-24 rounded-full bg-neon-500/20 blur-xl"
                      />
                      <div className="relative flex items-start justify-between gap-2.5">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`inline-flex items-center justify-center w-9 h-9 rounded-xl border shrink-0 ${
                              finished
                                ? "bg-gradient-to-br from-cyber-400/25 to-neon-500/25 border-cyber-400/50 text-marigold-300"
                                : "bg-white/5 border-white/15 text-ink-400"
                            }`}
                          >
                            {finished ? <Award className="w-5 h-5" /> : <Lock className="w-4 h-4" />}
                          </span>
                          <div className="min-w-0">
                            <span
                              className={`block text-[10px] font-extrabold uppercase tracking-widest ${
                                finished ? "text-cyber-300" : "text-ink-400"
                              }`}
                            >
                              {finished ? "★ Certificate Unlocked" : "Track Certificate Locked"}
                            </span>
                            <span className="font-display text-sm font-extrabold text-white block truncate">
                              {track.badgeName}
                            </span>
                          </div>
                        </div>
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider border shrink-0 ${
                            finished
                              ? "bg-mint-500/20 border-mint-400/50 text-mint-300"
                              : "bg-white/5 border-white/15 text-ink-300"
                          }`}
                        >
                          {finished ? "Earned" : `${done}/${total}`}
                        </span>
                      </div>

                      {finished ? (
                        <div className="relative mt-3 flex flex-col sm:flex-row gap-2">
                          <button
                            type="button"
                            onClick={() => setActiveCertificateTrack(track)}
                            className="flex-1 h-9 px-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-extrabold uppercase tracking-wider inline-flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                          >
                            <Award className="w-3.5 h-3.5 text-marigold-300 shrink-0" />
                            <span>View Certificate</span>
                          </button>
                          <a
                            href={linkedInUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleLinkedInShare(track)}
                            className="flex-1 h-9 px-3 rounded-xl bg-gradient-to-r from-cyber-500 to-neon-500 hover:from-cyber-400 hover:to-neon-400 text-ink-950 text-xs font-extrabold uppercase tracking-wider inline-flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-[0_0_14px_rgba(0,229,255,0.35)]"
                          >
                            {isCopied ? (
                              <>
                                <Check className="w-3.5 h-3.5 shrink-0" />
                                <span className="truncate">Copied & Opening</span>
                              </>
                            ) : (
                              <>
                                <Share2 className="w-3.5 h-3.5 shrink-0" />
                                <span className="truncate">Share to LinkedIn</span>
                              </>
                            )}
                          </a>
                        </div>
                      ) : (
                        <p className="relative mt-2.5 text-[11px] text-ink-300 leading-snug">
                          Complete {total - done === 1 ? "1 remaining lesson" : `all ${total} lessons (${total - done} left)`} in Track 0{track.number} to earn your certificate &amp; unlock <span className="text-cyber-300 font-bold">Share to LinkedIn</span>.
                        </p>
                      )}
                    </div>

                    {/* Primary Track Action Link */}
                    <div className="mt-4 pt-3.5 border-t border-ink-200">
                      <Link
                        href={target ? lessonHref(track.id, target.id) : "#curriculum"}
                        className="flex items-center justify-between text-sm font-extrabold text-brand-700 group-hover:text-neon-700 transition-colors"
                      >
                        <span>
                          {finished
                            ? "Certificate earned · Review lessons"
                            : done > 0
                              ? `${done} of ${total} done · Continue track`
                              : "Start track"}
                        </span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- Creator ---------- */}
        <section className="px-4 sm:px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <CreatorCard />
          </div>
        </section>

        {/* ---------- Footer ---------- */}
        <footer className="mt-auto border-t border-ink-200 bg-white pb-24 sm:pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
            <div>
              <Logo />
              <p className="mt-3 text-sm text-ink-500 max-w-sm">
                AI, without the jargon. Made in India for curious people everywhere.
              </p>
            </div>
            <div className="text-sm text-ink-500 sm:text-right space-y-1">
              <p>
                Built by{" "}
                <a
                  href={CREATOR.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ink hover:text-brand-600"
                >
                  {CREATOR.name}
                </a>{" "}
                ·{" "}
                <a href={`mailto:${CREATOR.email}`} className="hover:text-brand-600">
                  Say hello
                </a>
              </p>
              <p>AI Pulse updated {BI_WEEKLY_META.lastUpdated} · Your progress is saved in this browser</p>
            </div>
          </div>
        </footer>

        {/* ---------- Sticky "Resume Learning" Floating Action Button (FAB) ---------- */}
        {nextUp && (
          <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 max-w-[calc(100vw-2rem)]">
            <Link
              href={lessonHref(nextUp.track.id, nextUp.lesson.id)}
              aria-label={`Resume: ${nextUp.lesson.title}`}
              className="btn-cyber group flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-ink-950/95 backdrop-blur-xl border-2 border-cyber-400 hover:border-neon-400 text-white shadow-[0_12px_32px_-6px_rgba(0,0,0,0.5),0_0_24px_-2px_rgba(0,229,255,0.45)]"
            >
              <span className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyber-500 to-neon-600 text-ink-950 shrink-0">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </span>
              <div className="min-w-0 pr-1">
                <span className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-cyber-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-400 animate-ping" />
                  Track {nextUp.track.number} · {completed.size}/{allLessons.length} done
                </span>
                <span className="block text-sm sm:text-[15px] font-extrabold text-white truncate max-w-[230px] sm:max-w-[300px]">
                  Resume: {nextUp.lesson.title}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-cyber-300 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}

        {activeCertificateTrack && (
          <CertificateModal
            track={activeCertificateTrack}
            onClose={() => setActiveCertificateTrack(null)}
          />
        )}
      </div>
    </GlossaryProvider>
  );
}

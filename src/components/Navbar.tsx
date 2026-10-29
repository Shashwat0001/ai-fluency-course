"use client";

import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Map, Zap, X, ArrowUpRight, Trophy, Sparkles } from "lucide-react";
import Logo from "@/components/Logo";
import { RichText } from "@/components/lesson/Glossary";
import { BI_WEEKLY_META, BI_WEEKLY_PULSE_FEED, CURRICULUM_TRACKS } from "@/data/curriculum";
import { getCompletedKey, getTotalXp, subscribeToProgress } from "@/lib/progress";

const ALL_LESSONS = CURRICULUM_TRACKS.flatMap((t) => t.lessons);
const MAX_COURSE_XP = ALL_LESSONS.reduce((sum, l) => sum + l.xpReward, 0);
const XP_PER_LEVEL = 500;

export default function Navbar() {
  const [isPulseOpen, setIsPulseOpen] = useState(false);
  const [isXpPopoverOpen, setIsXpPopoverOpen] = useState(false);
  const totalXp = useSyncExternalStore(subscribeToProgress, getTotalXp, () => 0);
  const completedKey = useSyncExternalStore(subscribeToProgress, getCompletedKey, () => "");
  const completedCount = completedKey ? completedKey.split(",").filter(Boolean).length : 0;

  const currentLevel = Math.floor(totalXp / XP_PER_LEVEL) + 1;
  const xpIntoLevel = totalXp % XP_PER_LEVEL;
  const levelPercent = Math.min(100, Math.round((xpIntoLevel / XP_PER_LEVEL) * 100));
  const coursePercent = MAX_COURSE_XP > 0 ? Math.min(100, Math.round((totalXp / MAX_COURSE_XP) * 100)) : 0;
  // Show level progress if in-level, or overall course progress, with a minimum 8% visual nub so the bar is always unmistakably a live progress bar
  const visualBarFill = totalXp === 0 ? 8 : Math.max(12, levelPercent || coursePercent);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-paper/90 backdrop-blur-md border-b border-ink-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
          <Link href="/" className="group select-none shrink-0" aria-label="AI Fluency home">
            <Logo/>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link href="/#curriculum" className="px-3.5 py-2 rounded-lg text-sm font-semibold text-ink-600 hover:text-ink hover:bg-ink-100 flex items-center gap-1.5 transition-colors">
              <Map className="w-4 h-4 text-cyber-600" /> Course map
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              onClick={() => setIsPulseOpen(true)}
              className="flex items-center gap-2 h-9 px-3 rounded-full text-xs font-bold whitespace-nowrap bg-white text-ink border border-ink-200 hover:border-cyber-400 hover:shadow-[0_0_12px_-2px_rgba(0,229,255,0.35)] transition-all cursor-pointer"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-mint-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-mint-500" />
              </span>
              <span>AI Pulse</span>
            </button>

            {/* Gamified Visual XP Progress Bar Widget */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsXpPopoverOpen((prev) => !prev)}
                aria-label={`XP Progress: ${totalXp} XP, Level ${currentLevel}, ${completedCount} of ${ALL_LESSONS.length} lessons completed`}
                className="group flex items-center gap-2.5 h-10 pl-2.5 pr-3 rounded-xl bg-ink-950 text-white border border-cyber-500/40 hover:border-cyber-400 shadow-[0_0_15px_-4px_rgba(0,229,255,0.35)] transition-all cursor-pointer"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-gradient-to-br from-cyber-500/25 to-neon-500/25 border border-cyber-400/40 text-cyber-300 shrink-0">
                  <Zap className="w-3.5 h-3.5 fill-marigold-400 text-marigold-400" />
                </span>
                <div className="flex flex-col justify-center min-w-[108px] sm:min-w-[136px]">
                  <div className="flex items-center justify-between gap-2 text-[11px] font-extrabold leading-none">
                    <span className="tabular-nums text-white">{totalXp} XP</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyber-300 tabular-nums">
                      LVL {currentLevel} · {completedCount}/{ALL_LESSONS.length}
                    </span>
                  </div>
                  <div
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={XP_PER_LEVEL}
                    aria-valuenow={xpIntoLevel}
                    className="mt-1.5 w-full h-2 rounded-full bg-ink-800 p-[1px] overflow-hidden border border-white/10"
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyber-400 via-brand-400 to-neon-400 shadow-[0_0_8px_#00e5ff] transition-all duration-500"
                      style={{ width: `${visualBarFill}%` }}
                    />
                  </div>
                </div>
              </button>

              {isXpPopoverOpen && (
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsXpPopoverOpen(false)}
                >
                  <div
                    role="dialog"
                    aria-label="Your AI Fluency XP Progress"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-4 sm:right-6 top-16 w-72 p-4 rounded-2xl bg-ink-950/90 backdrop-blur-xl border border-cyber-400/50 text-white shadow-[0_16px_40px_-8px_rgba(0,0,0,0.55),0_0_24px_-4px_rgba(0,229,255,0.3)] tooltip-pop"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest text-cyber-300">
                        <Sparkles className="w-3.5 h-3.5" /> Fluency Telemetry
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-neon-500/20 border border-neon-400/40 text-[11px] font-bold text-neon-200">
                        Level {currentLevel}
                      </span>
                    </div>
                    <div className="mt-3 flex items-baseline justify-between">
                      <p className="font-display text-2xl font-extrabold tabular-nums text-white">
                        {totalXp} <span className="text-xs font-bold text-ink-300">/ {MAX_COURSE_XP} XP</span>
                      </p>
                      <span className="text-xs font-bold text-cyber-300 tabular-nums">
                        {XP_PER_LEVEL - xpIntoLevel} XP to LVL {currentLevel + 1}
                      </span>
                    </div>
                    <div className="mt-2 h-2.5 w-full rounded-full bg-ink-800 overflow-hidden border border-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyber-400 via-brand-400 to-neon-400 shadow-[0_0_10px_#00e5ff] transition-all duration-500"
                        style={{ width: `${visualBarFill}%` }}
                      />
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-ink-200">
                      <span className="inline-flex items-center gap-1.5 font-semibold">
                        <Trophy className="w-3.5 h-3.5 text-marigold-400" /> {completedCount} of {ALL_LESSONS.length} lessons done
                      </span>
                      <span className="font-bold text-mint-300 tabular-nums">{coursePercent}%</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {isPulseOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-ink-900/30"
          onClick={() => setIsPulseOpen(false)}
        >
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Bi-Weekly AI Pulse"
            className="w-full max-w-md h-full overflow-y-auto bg-paper border-l border-ink-200 shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-ink-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                  AI Pulse • {BI_WEEKLY_META.currentCycle}
                </span>
                <h2 className="text-2xl font-extrabold text-ink mt-1 leading-tight">
                  {BI_WEEKLY_META.pulseHeadline}
                </h2>
              </div>
              <button
                onClick={() => setIsPulseOpen(false)}
                aria-label="Close"
                className="p-1.5 rounded-lg text-ink-500 hover:bg-ink-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              {BI_WEEKLY_PULSE_FEED.map((item) => (
                <article key={item.id} className="p-5 rounded-[var(--radius-card)] bg-white border border-ink-200 shadow-[var(--shadow-card)]">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-ink-500">
                    <span className="px-2 py-0.5 rounded-full bg-brand-50 text-brand-600">{item.category}</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-ink">{item.title}</h3>
                  <p className="mt-2 text-[15px] text-ink-600 leading-relaxed"><RichText text={item.summary} glossary={false}/></p>
                  <p className="mt-3 p-3 rounded-xl bg-marigold-50 border border-marigold-100 text-sm text-ink-800 leading-relaxed">
                    <span className="font-bold">Why it matters: </span>
                    <RichText text={item.analogyTakeaway} glossary={false}/>
                  </p>
                  {item.source && (
                    <a
                      href={item.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600"
                    >
                      Source: {item.source.label} <ArrowUpRight className="w-3.5 h-3.5"/>
                    </a>
                  )}
                </article>
              ))}
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

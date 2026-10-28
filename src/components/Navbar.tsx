"use client";

import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Map, Zap, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";
import { RichText } from "@/components/lesson/Glossary";
import { BI_WEEKLY_META, BI_WEEKLY_PULSE_FEED } from "@/data/curriculum";
import { getTotalXp, subscribeToProgress } from "@/lib/progress";

export default function Navbar() {
  const [isPulseOpen, setIsPulseOpen] = useState(false);
  const totalXp = useSyncExternalStore(subscribeToProgress, getTotalXp, () => 0);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-paper/90 backdrop-blur-md border-b border-ink-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="group select-none" aria-label="AI Fluency home">
            <Logo/>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link href="/#curriculum" className="px-3.5 py-2 rounded-lg text-sm font-semibold text-ink-600 hover:text-ink hover:bg-ink-100 flex items-center gap-1.5">
              <Map className="w-4 h-4 text-ink-400" /> Course map
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPulseOpen(true)}
              className="flex items-center gap-2 h-9 px-3 rounded-full text-xs font-bold whitespace-nowrap bg-white text-ink border border-ink-200 hover:border-brand-300 cursor-pointer"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-mint-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-mint-500" />
              </span>
              <span>AI Pulse</span>
            </button>
            <div
              className="flex items-center gap-1.5 h-9 px-3 rounded-full bg-marigold-100 border border-marigold-200 text-xs font-bold whitespace-nowrap text-marigold-900"
              title="XP you've earned, saved in this browser"
            >
              <Zap className="w-3.5 h-3.5 fill-marigold-500 text-marigold-600" />
              <span className="tabular-nums">{totalXp} XP</span>
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

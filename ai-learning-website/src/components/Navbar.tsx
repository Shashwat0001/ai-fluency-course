"use client";

import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Sparkles, BookOpen, Flame, X } from "lucide-react";
import { BI_WEEKLY_META, BI_WEEKLY_PULSE_FEED } from "@/data/curriculum";
import { getTotalXp, subscribeToProgress } from "@/lib/progress";

export default function Navbar() {
  const [isPulseOpen, setIsPulseOpen] = useState(false);
  const totalXp = useSyncExternalStore(subscribeToProgress, getTotalXp, () => 0);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-[#4F46E5] flex items-center justify-center text-white shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-[#0F172A] tracking-tight text-base block leading-none">
                AI Fluency
              </span>
              <span className="hidden sm:block text-[11px] text-slate-500 font-medium">
                Zero Jargon • Intuition First
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link href="/#curriculum" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[#0F172A] hover:bg-slate-200/60 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-slate-400" /> Course Map
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsPulseOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap bg-emerald-50 text-emerald-800 border border-emerald-200 cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Oct 2026 Pulse</span>
            </button>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-semibold whitespace-nowrap text-[#0F172A]">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{totalXp} XP</span>
            </div>
          </div>
        </div>
      </header>

      {isPulseOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-slate-900/30"
          onClick={() => setIsPulseOpen(false)}
        >
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Bi-Weekly AI Pulse"
            className="w-full max-w-md h-full overflow-y-auto bg-white border-l border-[#E2E8F0] shadow-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E2E8F0]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  {BI_WEEKLY_META.currentCycle}
                </span>
                <h2 className="text-lg font-bold text-[#0F172A] mt-1 leading-snug">
                  {BI_WEEKLY_META.pulseHeadline}
                </h2>
              </div>
              <button
                onClick={() => setIsPulseOpen(false)}
                aria-label="Close"
                className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              {BI_WEEKLY_PULSE_FEED.map((item) => (
                <article key={item.id} className="p-4 rounded-2xl border border-[#E2E8F0]">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-[#4F46E5]">{item.category}</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.summary}</p>
                  <p className="mt-3 p-3 rounded-xl bg-emerald-50 text-sm text-emerald-900 leading-relaxed">
                    {item.analogyTakeaway}
                  </p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

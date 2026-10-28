"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, BookOpen, Layers, Award, Flame, X, ArrowUpRight } from "lucide-react";
import { BI_WEEKLY_META, BI_WEEKLY_PULSE_FEED } from "@/data/curriculum";

export default function Navbar() {
  const [isPulseOpen, setIsPulseOpen] = useState(false);

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
              <span className="text-[11px] text-slate-500 font-medium">
                Zero Jargon • Intuition First
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link href="#curriculum" className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[#0F172A] hover:bg-slate-200/60 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-slate-400" /> Course Map
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPulseOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Oct 2026 Pulse</span>
            </button>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-semibold text-[#0F172A]">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>150 XP</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
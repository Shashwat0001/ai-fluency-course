"use client";

import React from "react";
import {
  ArrowUpRight,
  BookMarked,
  Briefcase,
  CalendarClock,
  GraduationCap,
  Library,
  Lightbulb,
  MessagesSquare,
} from "lucide-react";
import type { Lesson } from "@/data/types";
import { GlossaryText } from "./Glossary";

// The classic lesson sections. Each one is a self-contained card, so the
// player can show them one per screen or all stacked on one page.

export function FastMovingNotice({ lastUpdated }: { lastUpdated: string }) {
  return (
    <aside className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-900">
      <div className="flex items-center gap-2 font-semibold">
        <CalendarClock className="w-4 h-4 shrink-0"/>
        <span>Fast-moving topic: accurate as of {lastUpdated}</span>
      </div>
      <p className="mt-1 leading-relaxed">
        AI products, rankings and prices change every few weeks. Treat specific comparisons here as a snapshot, not a permanent fact. Sources are listed at the end.
      </p>
    </aside>
  );
}

export function BigIdea({ bigIdea }: { bigIdea: Lesson["bigIdea"] }) {
  return (
    <section className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">The Big Idea</p>
      <h2 className="mt-2 text-xl font-bold leading-snug">{bigIdea.headline}</h2>
      <p className="mt-3 text-base text-slate-600 leading-relaxed">
        <GlossaryText text={bigIdea.explanation}/>
      </p>
    </section>
  );
}

export function Analogy({ analogy }: { analogy: NonNullable<Lesson["analogy"]> }) {
  return (
    <section className="p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100">
      <div className="flex items-center gap-2 text-[#4F46E5]">
        <Lightbulb className="w-5 h-5"/>
        <span className="text-xs font-bold uppercase tracking-wider">The Everyday Analogy</span>
      </div>
      <h2 className="mt-2 text-xl font-bold">{analogy.title}</h2>
      <p className="mt-3 text-base leading-relaxed font-medium">
        <GlossaryText text={analogy.metaphor}/>
      </p>
    </section>
  );
}

export function AnalogyMap({ analogy }: { analogy: NonNullable<Lesson["analogy"]> }) {
  return (
    <section className="p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100">
      <div className="flex items-center gap-2 text-[#4F46E5]">
        <Lightbulb className="w-5 h-5"/>
        <span className="text-xs font-bold uppercase tracking-wider">How the Analogy Maps</span>
      </div>
      <div className="mt-4 grid gap-3">
        {analogy.visualComparison.map((row) => (
          <div key={row.everydayItem} className="p-4 rounded-xl bg-white border border-indigo-100 text-sm">
            <p className="font-semibold">{row.everydayItem}</p>
            <p className="mt-1 text-slate-600">
              <span className="text-[#4F46E5] font-bold">→ </span>
              <GlossaryText text={row.aiEquivalent}/>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TechConversation({ conversation }: { conversation: NonNullable<Lesson["techConversation"]> }) {
  return (
    <section className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
      <div className="flex items-center gap-2 text-slate-500">
        <MessagesSquare className="w-5 h-5"/>
        <span className="text-xs font-bold uppercase tracking-wider">Overheard in a Tech Meeting</span>
      </div>
      <p className="mt-2 text-sm text-slate-500">{conversation.context}</p>

      <div className="mt-4 space-y-3">
        {[conversation.speakerA, conversation.speakerB].map((speaker) => (
          <div key={speaker.role} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{speaker.role}</p>
            <p className="mt-1 text-base">&ldquo;<GlossaryText text={speaker.quote}/>&rdquo;</p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 rounded-xl bg-emerald-50 text-emerald-900">
        <p className="text-xs font-bold uppercase tracking-wider">In Plain English</p>
        <p className="mt-1 text-base leading-relaxed">{conversation.plainEnglishTranslation}</p>
      </div>
    </section>
  );
}

export function RealWorld({ realWorld }: { realWorld: NonNullable<Lesson["realWorldApplication"]> }) {
  return (
    <section className="grid gap-4">
      <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
        <div className="flex items-center gap-2 text-slate-500">
          <Briefcase className="w-5 h-5"/>
          <span className="text-xs font-bold uppercase tracking-wider">Use It at Work</span>
        </div>
        <p className="mt-3 text-base text-slate-700 leading-relaxed"><GlossaryText text={realWorld.forWork}/></p>
      </div>
      <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
        <div className="flex items-center gap-2 text-slate-500">
          <GraduationCap className="w-5 h-5"/>
          <span className="text-xs font-bold uppercase tracking-wider">Use It to Learn</span>
        </div>
        <p className="mt-3 text-base text-slate-700 leading-relaxed"><GlossaryText text={realWorld.forLearning}/></p>
      </div>
    </section>
  );
}

export function JargonCard({ card }: { card: NonNullable<Lesson["jargonCard"]> }) {
  return (
    <section className="p-6 rounded-2xl bg-[#0F172A] text-white">
      <div className="flex items-center gap-2 text-indigo-300">
        <BookMarked className="w-5 h-5"/>
        <span className="text-xs font-bold uppercase tracking-wider">Jargon Card</span>
      </div>
      <h2 className="mt-2 text-xl font-bold">{card.term}</h2>
      <p className="mt-2 text-base text-slate-300 leading-relaxed">{card.oneLineAnalogy}</p>
      <p className="mt-4 text-xs font-bold uppercase tracking-wider text-indigo-300">Say This in Your Next Meeting</p>
      <p className="mt-1 text-base italic">{card.meetingDropLine}</p>
    </section>
  );
}

export function Sources({ sources }: { sources: NonNullable<Lesson["sources"]> }) {
  return (
    <section className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
      <div className="flex items-center gap-2 text-slate-500">
        <Library className="w-5 h-5"/>
        <span className="text-xs font-bold uppercase tracking-wider">Sources & Further Reading</span>
      </div>
      <ul className="mt-3 space-y-2">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-1 text-sm text-[#4F46E5] hover:underline"
            >
              {source.label} <ArrowUpRight className="w-3.5 h-3.5 mt-0.5 shrink-0"/>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

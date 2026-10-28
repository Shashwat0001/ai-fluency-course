"use client";

import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookMarked,
  Briefcase,
  CalendarClock,
  GraduationCap,
  Languages,
  Library,
  Lightbulb,
  MessagesSquare,
  Sparkles,
} from "lucide-react";
import type { Lesson } from "@/data/types";
import { RichText } from "./Glossary";

// The classic lesson sections. Each one is a self-contained card, so the
// player can show them one per screen or all stacked on one page.

const card = "p-6 rounded-[var(--radius-card)] bg-white border border-ink-200 shadow-[var(--shadow-card)]";

function Label({ icon, children, tone = "brand" }: { icon: React.ReactNode; children: React.ReactNode; tone?: "brand" | "ink" | "light" }) {
  const tones = {
    brand: "bg-brand-50 text-brand-600",
    ink: "bg-ink-100 text-ink-600",
    light: "bg-white/10 text-marigold-300",
  };
  return (
    <div className="flex items-center gap-2">
      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg [&>svg]:w-[18px] [&>svg]:h-[18px] ${tones[tone]}`}>{icon}</span>
      <span className={`text-xs font-bold uppercase tracking-wider ${tone === "light" ? "text-marigold-300" : tone === "ink" ? "text-ink-500" : "text-brand-600"}`}>
        {children}
      </span>
    </div>
  );
}

export function FastMovingNotice({ lastUpdated }: { lastUpdated: string }) {
  return (
    <aside className="p-4 rounded-2xl bg-marigold-50 border border-marigold-200 text-sm text-ink-800">
      <div className="flex items-center gap-2 font-bold text-marigold-800">
        <CalendarClock className="w-4 h-4 shrink-0"/>
        <span>Fast-moving topic · accurate as of {lastUpdated}</span>
      </div>
      <p className="mt-1 leading-relaxed">
        AI products, prices and rankings change every few weeks. Treat the specifics as a snapshot; sources are at the end.
      </p>
    </aside>
  );
}

export function BigIdea({ bigIdea }: { bigIdea: Lesson["bigIdea"] }) {
  return (
    <section className="relative overflow-hidden p-6 sm:p-7 rounded-[var(--radius-card)] bg-white border border-ink-200 shadow-[var(--shadow-card)]">
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-brand-500 to-marigold-400"/>
      <Label icon={<Sparkles/>}>The big idea</Label>
      <h2 className="mt-4 text-[1.65rem] sm:text-3xl font-extrabold leading-[1.15] text-ink">
        <RichText text={bigIdea.headline} glossary={false}/>
      </h2>
      <p className="mt-4 text-[17px] text-ink-600 leading-relaxed">
        <RichText text={bigIdea.explanation}/>
      </p>
    </section>
  );
}

export function Analogy({ analogy }: { analogy: NonNullable<Lesson["analogy"]> }) {
  return (
    <section className="p-6 sm:p-7 rounded-[var(--radius-card)] bg-brand-50 border border-brand-100">
      <Label icon={<Lightbulb/>}>Picture it like this</Label>
      <h2 className="mt-4 text-2xl sm:text-[1.75rem] font-extrabold leading-tight text-ink">{analogy.title}</h2>
      <p className="mt-4 text-[17px] leading-relaxed text-ink-800">
        <RichText text={analogy.metaphor}/>
      </p>
    </section>
  );
}

export function AnalogyMap({ analogy }: { analogy: NonNullable<Lesson["analogy"]> }) {
  return (
    <section className={card}>
      <Label icon={<Lightbulb/>}>How the analogy maps</Label>
      <div className="mt-5 grid gap-3">
        {analogy.visualComparison.map((row) => (
          <div key={row.everydayItem} className="rounded-2xl border border-ink-200 overflow-hidden">
            <p className="px-4 py-3 bg-ink-50 text-[15px] font-semibold text-ink">{row.everydayItem}</p>
            <p className="px-4 py-3 flex gap-2 text-[15px] text-ink-700 leading-relaxed">
              <ArrowRight className="w-4 h-4 mt-1 shrink-0 text-brand-500"/>
              <span><RichText text={row.aiEquivalent}/></span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TechConversation({ conversation }: { conversation: NonNullable<Lesson["techConversation"]> }) {
  const speakers = [conversation.speakerA, conversation.speakerB];
  return (
    <section className={card}>
      <Label icon={<MessagesSquare/>}>Overheard in a tech meeting</Label>
      <p className="mt-3 text-sm text-ink-500">{conversation.context}</p>

      <div className="mt-5 space-y-3">
        {speakers.map((speaker, i) => (
          <div key={speaker.role} className={`flex flex-col ${i === 1 ? "items-end" : "items-start"}`}>
            <span className="px-1 text-[11px] font-bold uppercase tracking-wider text-ink-500">{speaker.role}</span>
            <p
              className={`mt-1 max-w-[92%] px-4 py-3 text-[16px] leading-relaxed ${
                i === 1 ? "rounded-2xl rounded-tr-md bg-brand-600 text-white [--rt-strong:#fff] [--rt-hl-text:var(--color-ink)]" : "rounded-2xl rounded-tl-md bg-ink-100 text-ink"
              }`}
            >
              <RichText text={speaker.quote}/>
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 p-4 rounded-2xl bg-mint-50 border border-mint-100">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-mint-700">
          <Languages className="w-4 h-4"/> In plain English
        </div>
        <p className="mt-1.5 text-[16px] leading-relaxed text-ink-800">
          <RichText text={conversation.plainEnglishTranslation}/>
        </p>
      </div>
    </section>
  );
}

export function RealWorld({ realWorld }: { realWorld: NonNullable<Lesson["realWorldApplication"]> }) {
  return (
    <section className="grid gap-4">
      <div className={card}>
        <Label icon={<Briefcase/>}>Use it at work</Label>
        <p className="mt-4 text-[16px] text-ink-700 leading-relaxed"><RichText text={realWorld.forWork}/></p>
      </div>
      <div className={card}>
        <Label icon={<GraduationCap/>}>Use it to learn</Label>
        <p className="mt-4 text-[16px] text-ink-700 leading-relaxed"><RichText text={realWorld.forLearning}/></p>
      </div>
    </section>
  );
}

export function JargonCard({ card: jargon }: { card: NonNullable<Lesson["jargonCard"]> }) {
  return (
    <section className="relative overflow-hidden p-6 sm:p-7 rounded-[var(--radius-card)] bg-ink-900 text-white shadow-[var(--shadow-card)] [--rt-strong:#fff] [--rt-hl-text:var(--color-ink)]">
      <span aria-hidden="true" className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-brand-600/40 blur-2xl"/>
      <Label icon={<BookMarked/>} tone="light">Jargon card</Label>
      <h2 className="relative mt-4 text-[1.75rem] font-extrabold leading-tight">{jargon.term}</h2>
      <p className="relative mt-3 text-[17px] text-ink-200 leading-relaxed">
        <RichText text={jargon.oneLineAnalogy} glossary={false}/>
      </p>
      <div className="relative mt-6 pt-5 border-t border-white/10">
        <p className="text-xs font-bold uppercase tracking-wider text-marigold-300">Say this in your next meeting</p>
        <p className="mt-2 font-serif italic text-[22px] leading-snug text-white">{jargon.meetingDropLine}</p>
      </div>
    </section>
  );
}

export function Sources({ sources }: { sources: NonNullable<Lesson["sources"]> }) {
  return (
    <section className={card}>
      <Label icon={<Library/>} tone="ink">Sources & further reading</Label>
      <ul className="mt-4 space-y-2.5">
        {sources.map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-1 text-[15px] text-brand-700 hover:underline"
            >
              {source.label} <ArrowUpRight className="w-3.5 h-3.5 mt-1 shrink-0"/>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

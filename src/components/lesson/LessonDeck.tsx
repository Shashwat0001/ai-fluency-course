"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Layers3, RefreshCw, Shuffle, X } from "lucide-react";
import type { Lesson } from "@/data/types";
import { GLOSSARY } from "@/data/glossary";
import { findGlossaryEntries, RichText } from "./Glossary";

export interface DeckCard {
  term: string;
  meaning: string;
  sayIt?: string;
}

const MAX_CARDS = 12;

// Every piece of learner-facing text in a lesson, in reading order.
// Skips ids, links and source labels so they can't add stray terms.
function lessonText(value: unknown, key = ""): string {
  if (typeof value === "string") return ["id", "url", "type"].includes(key) ? "" : value;
  if (Array.isArray(value)) return value.map((v) => lessonText(v)).join("\n");
  if (value && typeof value === "object") {
    return Object.entries(value)
      .filter(([k]) => k !== "sources")
      .map(([k, v]) => lessonText(v, k))
      .join("\n");
  }
  return "";
}

/**
 * A lesson's deck: its jargon card first, then every dictionary term the lesson
 * mentions, in the order a learner meets them. Duplicate names collapse to one card.
 */
export function buildLessonDeck(lesson: Lesson): DeckCard[] {
  const cards: DeckCard[] = [];
  // A term is "covered" if an existing card's title already contains it,
  // e.g. the jargon card "Tokens & Context Window" covers "token".
  const covered = (term: string) => {
    const t = term.toLowerCase();
    return cards.some((c) => {
      const title = c.term.toLowerCase();
      return title === t || title.includes(t);
    });
  };
  const add = (card: DeckCard) => {
    if (cards.length < MAX_CARDS && !covered(card.term)) cards.push(card);
  };

  // 1. The lesson's headline term.
  if (lesson.jargonCard) {
    add({ term: lesson.jargonCard.term, meaning: lesson.jargonCard.oneLineAnalogy, sayIt: lesson.jargonCard.meetingDropLine });
  }
  // 2. Cards the lesson already curated: its flashcard activities and any extra key terms.
  for (const activity of lesson.activities ?? []) {
    if (activity.type === "flashcards") activity.cards.forEach((c) => add({ term: c.front, meaning: c.back }));
  }
  lesson.keyTerms?.forEach((k) => add({ term: k.term, meaning: k.meaning }));
  // 3. Every dictionary term the lesson mentions, in reading order.
  for (const found of findGlossaryEntries(lessonText(lesson))) {
    const entry = found.sameAs ? GLOSSARY.find((g) => g.term === found.sameAs) ?? found : found;
    add({ term: entry.term, meaning: entry.definition });
  }
  return cards;
}

/** The header button that opens the deck. */
export function DeckButton({ count, onClick, compact = false }: { count: number; onClick: () => void; compact?: boolean }) {
  return (
    <button
      onClick={onClick}
      aria-label={`Open key-term flashcards (${count} cards)`}
      className="relative inline-flex items-center gap-1.5 h-9 px-2.5 sm:px-3 rounded-full bg-white border border-ink-200 text-xs font-bold text-ink hover:border-brand-300 cursor-pointer shrink-0"
    >
      <Layers3 className="w-4 h-4 text-brand-600"/>
      {!compact && <span className="hidden sm:inline">Key terms</span>}
      <span className="inline-flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-brand-600 text-white text-[11px] tabular-nums">
        {count}
      </span>
    </button>
  );
}

/** Full-screen (phone) / dialog (laptop) deck of tap-to-flip cards. */
export function LessonDeck({
  cards,
  lessonTitle,
  onClose,
}: {
  cards: DeckCard[];
  lessonTitle: string;
  onClose: () => void;
}) {
  const [order, setOrder] = useState(() => cards.map((_, i) => i));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const touchStart = useRef<number | null>(null);
  const card = cards[order[index]];

  const go = (step: number) => {
    setFlipped(false);
    setIndex((i) => Math.max(0, Math.min(cards.length - 1, i + step)));
  };
  const shuffle = () => {
    const next = [...order];
    for (let i = next.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [next[i], next[j]] = [next[j], next[i]];
    }
    setOrder(next);
    setIndex(0);
    setFlipped(false);
  };

  // Keyboard: space/enter flips, arrows move, escape closes. Also freeze the page behind.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      e.stopPropagation();
      if (e.key === "Escape") onClose();
      else if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey, true);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey, true);
      document.body.style.overflow = previousOverflow;
    };
  });

  return (
    <div className="fixed inset-0 z-[60] flex items-stretch sm:items-center justify-center bg-ink-900/40 backdrop-blur-sm" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Key terms for ${lessonTitle}`}
        className="relative w-full sm:max-w-lg h-full sm:h-auto flex flex-col bg-paper sm:rounded-[var(--radius-card)] sm:shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <header className="flex items-start justify-between gap-3 px-5 pt-5">
          <div className="min-w-0">
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
              <Layers3 className="w-4 h-4"/> Key terms
            </p>
            <p className="mt-1 text-sm font-semibold text-ink-600 truncate">{lessonTitle}</p>
          </div>
          <button onClick={onClose} aria-label="Close flashcards" className="p-2 -m-1 rounded-xl text-ink-500 hover:bg-ink-100 cursor-pointer">
            <X className="w-5 h-5"/>
          </button>
        </header>

        <div className="flex items-center gap-1 px-5 mt-4" aria-hidden="true">
          {cards.map((_, i) => (
            <span key={i} className={`h-1.5 flex-1 rounded-full ${i <= index ? "bg-brand-600" : "bg-ink-200"}`}/>
          ))}
        </div>

        <div className="flex-1 flex flex-col justify-center px-5 py-6">
          <button
            onClick={() => setFlipped((f) => !f)}
            onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStart.current === null) return;
              const dx = e.changedTouches[0].clientX - touchStart.current;
              touchStart.current = null;
              if (Math.abs(dx) > 50) {
                e.preventDefault();
                go(dx < 0 ? 1 : -1);
              }
            }}
            aria-label={flipped ? `Meaning of ${card.term}. Tap to see the term.` : `${card.term}. Tap to see the meaning.`}
            className="deck-stage w-full h-[min(60vh,380px)] cursor-pointer text-left"
          >
            <span className={`deck-card ${flipped ? "is-flipped" : ""}`}>
              <span className="deck-face flex flex-col items-center justify-center text-center p-7 rounded-[var(--radius-card)] bg-white border-2 border-ink-200 shadow-[0_6px_0_0_var(--color-ink-200)]">
                <span className="text-xs font-bold uppercase tracking-wider text-ink-500">Term</span>
                <span className="mt-4 font-display text-[2rem] sm:text-4xl font-extrabold leading-tight text-ink">{card.term}</span>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  <RefreshCw className="w-4 h-4"/> Tap to flip
                </span>
              </span>
              <span className="deck-face deck-back flex flex-col justify-center p-7 rounded-[var(--radius-card)] bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-[0_6px_0_0_var(--color-brand-900)] [--rt-strong:#fff] [--rt-hl-text:var(--color-ink)]">
                <span className="text-xs font-bold uppercase tracking-wider text-marigold-300">{card.term}</span>
                <span className="mt-3 text-xl sm:text-2xl font-semibold leading-snug">
                  <RichText text={card.meaning} glossary={false}/>
                </span>
                {card.sayIt && (
                  <span className="mt-5 pt-4 border-t border-white/15 block">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-marigold-300">Say it in a meeting</span>
                    <span className="mt-1 block font-serif italic text-lg leading-snug">{card.sayIt}</span>
                  </span>
                )}
              </span>
            </span>
          </button>
          <p className="mt-4 text-center text-xs font-semibold text-ink-500 tabular-nums">
            Card {index + 1} of {cards.length} · swipe or use the arrows
          </p>
        </div>

        <footer className="flex items-center gap-3 px-5 pb-5">
          <button
            onClick={() => go(-1)}
            disabled={index === 0}
            aria-label="Previous card"
            className="tile-pop min-h-14 w-14 shrink-0 inline-flex items-center justify-center rounded-2xl border-2 border-ink-200 bg-white text-ink-700 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-5 h-5"/>
          </button>
          {index < cards.length - 1 ? (
            <button
              onClick={() => go(1)}
              className="btn-pop flex-1 min-h-14 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-600 text-white text-[17px] font-bold hover:bg-brand-700 cursor-pointer"
            >
              Next card <ArrowRight className="w-5 h-5"/>
            </button>
          ) : (
            <button
              onClick={onClose}
              className="btn-pop flex-1 min-h-14 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-600 text-white text-[17px] font-bold hover:bg-brand-700 cursor-pointer"
            >
              Done: back to the lesson
            </button>
          )}
          <button
            onClick={shuffle}
            aria-label="Shuffle the cards"
            className="tile-pop min-h-14 w-14 shrink-0 inline-flex items-center justify-center rounded-2xl border-2 border-ink-200 bg-white text-ink-700 cursor-pointer"
          >
            <Shuffle className="w-5 h-5"/>
          </button>
        </footer>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Layers3, ArrowLeft, ArrowRight } from "lucide-react";
import ActivityCard from "./ActivityCard";
import { RichText } from "@/components/lesson/Glossary";
import type { FlashcardsActivity } from "@/data/types";

export default function Flashcards({ activity }: { activity: FlashcardsActivity }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = activity.cards[index];

  const go = (step: number) => {
    setFlipped(false);
    setIndex((prev) => (prev + step + activity.cards.length) % activity.cards.length);
  };

  return (
    <ActivityCard label="Flashcards" title={activity.title} icon={<Layers3 className="w-5 h-5"/>}>
      <button
        onClick={() => setFlipped((f) => !f)}
        className={`w-full min-h-40 p-6 rounded-2xl border-2 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
          flipped ? "bg-ink border-ink text-white [--rt-strong:#fff] [--rt-hl-text:var(--color-ink)]" : "bg-brand-50 border-brand-100 text-ink"
        }`}
      >
        <span className={`text-xs font-bold uppercase tracking-wider ${flipped ? "text-brand-300" : "text-brand-600"}`}>
          {flipped ? "Meaning" : "Term (tap to flip)"}
        </span>
        <span className={`mt-3 ${flipped ? "text-base leading-relaxed" : "text-2xl font-extrabold"}`}>
          {flipped ? <RichText text={card.back} glossary={false}/> : card.front}
        </span>
      </button>

      <div className="mt-4 flex items-center justify-between text-sm font-semibold">
        <button onClick={() => go(-1)} className="inline-flex items-center gap-1 text-ink-600 cursor-pointer">
          <ArrowLeft className="w-4 h-4"/> Back
        </button>
        <span className="text-ink-500">{index + 1} / {activity.cards.length}</span>
        <button onClick={() => go(1)} className="inline-flex items-center gap-1 text-brand-600 cursor-pointer">
          Next <ArrowRight className="w-4 h-4"/>
        </button>
      </div>
    </ActivityCard>
  );
}

"use client";

import React, { useState } from "react";
import { SearchCheck } from "lucide-react";
import ActivityCard from "./ActivityCard";
import { RichText } from "@/components/lesson/Glossary";
import type { SpotTheErrorActivity } from "@/data/types";

export default function SpotTheError({ activity }: { activity: SpotTheErrorActivity }) {
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [checked, setChecked] = useState(false);
  const errorCount = activity.sentences.filter((s) => s.isError).length;
  const caught = activity.sentences.filter((s, i) => s.isError && flagged.has(i)).length;
  const falseAlarms = activity.sentences.filter((s, i) => !s.isError && flagged.has(i)).length;

  const toggle = (index: number) => {
    if (checked) return;
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <ActivityCard label="Spot the Error" title={activity.title} icon={<SearchCheck className="w-5 h-5"/>}>
      <p className="text-base text-ink-700 leading-relaxed"><RichText text={activity.instructions}/></p>

      <div className="mt-4 rounded-xl bg-ink-50 border border-ink-200 p-4">
        <p className="text-xs font-bold uppercase tracking-wider text-ink-500">Someone asked</p>
        <p className="mt-1 text-sm font-semibold text-ink">{activity.question}</p>
        <p className="mt-4 text-xs font-bold uppercase tracking-wider text-ink-500">The AI replied (tap the suspicious sentences)</p>
        <p className="mt-1 text-sm leading-7 text-ink">
          {activity.sentences.map((sentence, index) => {
            const isFlagged = flagged.has(index);
            let style = isFlagged ? "bg-marigold-200" : "hover:bg-brand-100";
            if (checked) {
              if (sentence.isError) style = isFlagged ? "bg-mint-200" : "bg-coral-200";
              else style = isFlagged ? "bg-ink-300 line-through" : "";
            }
            return (
              <span
                key={sentence.text}
                role="button"
                tabIndex={0}
                onClick={() => toggle(index)}
                onKeyDown={(e) => e.key === "Enter" && toggle(index)}
                className={`rounded px-0.5 cursor-pointer transition-colors ${style}`}
              >
                {sentence.text}{" "}
              </span>
            );
          })}
        </p>
      </div>

      {!checked ? (
        <button
          onClick={() => setChecked(true)}
          className="mt-4 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 cursor-pointer"
        >
          Check my answers ({flagged.size} flagged)
        </button>
      ) : (
        <div className="mt-4 space-y-3">
          <p className="text-sm font-bold text-ink">
            You caught {caught} of {errorCount} errors{falseAlarms > 0 ? `, with ${falseAlarms} false alarm${falseAlarms > 1 ? "s" : ""}` : ""}.
          </p>
          {activity.sentences.map((sentence) =>
            sentence.isError ? (
              <div key={sentence.text} className="p-3 rounded-xl bg-coral-50 border border-coral-200 text-sm leading-relaxed">
                <p className="font-semibold text-coral-900">&ldquo;{sentence.text}&rdquo;</p>
                <p className="mt-1 text-coral-900"><RichText text={sentence.why}/></p>
              </div>
            ) : null
          )}
          <button
            onClick={() => { setFlagged(new Set()); setChecked(false); }}
            className="text-sm font-semibold text-brand-600 cursor-pointer"
          >
            Try again
          </button>
        </div>
      )}
    </ActivityCard>
  );
}

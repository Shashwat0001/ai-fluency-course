"use client";

import React from "react";
import { CheckCircle2, XCircle, Target } from "lucide-react";
import type { QuizQuestion } from "@/data/types";
import { RichText } from "./Glossary";

// One quiz question. The player owns which option is selected, so the
// answer survives moving back and forth between screens.
export default function QuizQuestionCard({
  question,
  number,
  total,
  selected,
  onSelect,
}: {
  question: QuizQuestion;
  number: number;
  total: number;
  selected: number | undefined;
  onSelect: (index: number) => void;
}) {
  const chosen = selected !== undefined ? question.options[selected] : undefined;

  return (
    <section className="p-6 rounded-[var(--radius-card)] bg-white border border-ink-200 shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-marigold-100 text-marigold-700">
            <Target className="w-[18px] h-[18px]"/>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-marigold-700">Quick check</span>
        </div>
        <span className="text-xs font-bold text-ink-500 tabular-nums">{number} of {total}</span>
      </div>
      <h2 className="mt-4 mb-5 text-[1.35rem] font-bold leading-snug text-ink">
        <RichText text={question.scenario}/>
      </h2>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selected === index;
          let style = "border-ink-200 bg-white hover:border-brand-300";
          if (isSelected) {
            style = option.isCorrect ? "border-mint-500 bg-mint-50" : "border-coral-400 bg-coral-50";
          }

          return (
            <button
              key={option.id}
              onClick={() => onSelect(index)}
              className={`tile-pop w-full min-h-14 text-left px-4 py-3.5 rounded-2xl border-2 flex items-center justify-between gap-4 cursor-pointer ${style}`}
            >
              <span className="flex items-start gap-3">
                <span
                  className={`mt-0.5 inline-flex items-center justify-center w-6 h-6 shrink-0 rounded-md border-2 text-xs font-bold uppercase ${
                    isSelected ? (option.isCorrect ? "border-mint-500 text-mint-700" : "border-coral-400 text-coral-600") : "border-ink-200 text-ink-500"
                  }`}
                >
                  {option.id}
                </span>
                <span className="text-[16px] font-medium leading-snug text-ink">{option.text}</span>
              </span>
              {isSelected &&
                (option.isCorrect ? (
                  <CheckCircle2 className="w-6 h-6 text-mint-500 shrink-0"/>
                ) : (
                  <XCircle className="w-6 h-6 text-coral-500 shrink-0"/>
                ))}
            </button>
          );
        })}
      </div>

      {chosen && (
        <div
          role="status"
          className={`mt-4 p-4 rounded-2xl text-[16px] leading-relaxed ${
            chosen.isCorrect ? "bg-mint-100 text-mint-900" : "bg-coral-100 text-coral-900"
          } [--rt-strong:currentColor]`}
        >
          <RichText text={chosen.analogyFeedback} glossary={false}/>
          {!chosen.isCorrect && (
            <span className="block mt-1.5 text-sm font-bold">Have another go: pick a different answer to continue.</span>
          )}
        </div>
      )}
    </section>
  );
}

"use client";

import React from "react";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import type { QuizQuestion } from "@/data/types";
import { GlossaryText } from "./Glossary";

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
  return (
    <section className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
      <div className="flex items-center gap-2 text-slate-500">
        <HelpCircle className="w-5 h-5"/>
        <span className="text-xs font-bold uppercase tracking-wider">
          Check Your Intuition • {number} of {total}
        </span>
      </div>
      <p className="mt-3 mb-5 text-lg font-semibold text-[#0F172A] leading-snug">
        <GlossaryText text={question.scenario}/>
      </p>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selected === index;
          let btnStyle = "border-[#E2E8F0] bg-white hover:bg-slate-50";
          if (isSelected) {
            btnStyle = option.isCorrect ? "border-[#10B981] bg-emerald-50" : "border-rose-400 bg-rose-50";
          }

          return (
            <button
              key={option.id}
              onClick={() => onSelect(index)}
              className={`w-full min-h-14 text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between gap-4 cursor-pointer ${btnStyle}`}
            >
              <span className="text-base font-medium text-[#0F172A]">{option.text}</span>
              {isSelected &&
                (option.isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0"/>
                ) : (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0"/>
                ))}
            </button>
          );
        })}
      </div>

      {selected !== undefined && (
        <div
          className={`mt-4 p-4 rounded-xl text-base font-medium leading-relaxed ${
            question.options[selected].isCorrect ? "bg-emerald-100 text-emerald-900" : "bg-rose-100 text-rose-900"
          }`}
        >
          {question.options[selected].analogyFeedback}
          {!question.options[selected].isCorrect && (
            <span className="block mt-1 text-sm font-semibold">Try another answer to continue.</span>
          )}
        </div>
      )}
    </section>
  );
}

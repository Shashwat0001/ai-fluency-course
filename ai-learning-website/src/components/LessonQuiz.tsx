"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import type { QuizQuestion } from "@/data/curriculum";

export default function LessonQuiz({ questions }: { questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});

  return (
    <div className="space-y-8">
      {questions.map((question) => {
        const selected = answers[question.id];

        return (
          <div key={question.id}>
            <p className="text-base font-semibold text-[#0F172A] mb-4">{question.scenario}</p>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selected === index;
                let btnStyle = "border-[#E2E8F0] bg-white hover:bg-slate-50";
                if (isSelected) {
                  btnStyle = option.isCorrect
                    ? "border-[#10B981] bg-emerald-50"
                    : "border-rose-400 bg-rose-50";
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: index }))}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between gap-4 cursor-pointer ${btnStyle}`}
                  >
                    <span className="text-sm font-medium text-[#0F172A]">{option.text}</span>
                    {isSelected && (
                      option.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0"/>
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0"/>
                      )
                    )}
                  </button>
                );
              })}
            </div>

            {selected !== undefined && (
              <div
                className={`mt-4 p-4 rounded-xl text-sm font-medium ${
                  question.options[selected].isCorrect
                    ? "bg-emerald-100 text-emerald-900"
                    : "bg-rose-100 text-rose-900"
                }`}
              >
                {question.options[selected].analogyFeedback}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

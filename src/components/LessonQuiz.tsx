"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, PartyPopper } from "lucide-react";
import type { QuizQuestion } from "@/data/types";
import { completeLesson } from "@/lib/progress";

export default function LessonQuiz({
  lessonId,
  xpReward,
  questions,
}: {
  lessonId: string;
  xpReward: number;
  questions: QuizQuestion[];
}) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  // Questions answered correctly at least once; the lesson completes when all are.
  const [solved, setSolved] = useState<Set<string>>(new Set());
  const allSolved = solved.size === questions.length;

  const choose = (question: QuizQuestion, index: number) => {
    setAnswers((prev) => ({ ...prev, [question.id]: index }));
    if (!question.options[index].isCorrect) return;
    const next = new Set(solved).add(question.id);
    setSolved(next);
    if (next.size === questions.length) completeLesson(lessonId, xpReward);
  };

  return (
    <div className="space-y-8">
      {questions.map((question, questionIndex) => {
        const selected = answers[question.id];

        return (
          <div key={question.id}>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Question {questionIndex + 1} of {questions.length}
            </p>
            <p className="mt-1 text-base font-semibold text-[#0F172A] mb-4">{question.scenario}</p>

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
                    onClick={() => choose(question, index)}
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

      {allSolved && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-[#4F46E5] text-white font-semibold">
          <PartyPopper className="w-5 h-5 shrink-0"/>
          <span>Lesson complete! +{xpReward} XP added to your total.</span>
        </div>
      )}
    </div>
  );
}

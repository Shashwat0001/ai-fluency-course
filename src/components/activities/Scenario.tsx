"use client";

import React, { useState } from "react";
import { Users, ArrowRight, RotateCcw } from "lucide-react";
import ActivityCard from "./ActivityCard";
import { RichText } from "@/components/lesson/Glossary";
import type { ScenarioActivity } from "@/data/types";

export default function Scenario({ activity }: { activity: ScenarioActivity }) {
  // One chosen option per step; the next step appears once the current one is answered.
  const [picks, setPicks] = useState<number[]>([]);
  const [revealed, setRevealed] = useState(1);
  const finished = picks.length === activity.steps.length && revealed > activity.steps.length;
  const bestCount = picks.filter((pick, i) => activity.steps[i].choices[pick].isBest).length;

  return (
    <ActivityCard label="Simulation" title={activity.title} icon={<Users className="w-5 h-5"/>}>
      <p className="text-sm text-ink-500 leading-relaxed"><RichText text={activity.setting}/></p>

      <div className="mt-4 space-y-6">
        {activity.steps.slice(0, revealed).map((step, stepIndex) => {
          const pick = picks[stepIndex];
          const answered = pick !== undefined;

          return (
            <div key={step.situation}>
              <p className="text-xs font-bold uppercase tracking-wider text-ink-500">
                Moment {stepIndex + 1} of {activity.steps.length}
              </p>
              <p className="mt-1 text-base font-semibold text-ink leading-relaxed"><RichText text={step.situation}/></p>

              <div className="mt-3 space-y-2">
                {step.choices.map((choice, choiceIndex) => {
                  const isPicked = pick === choiceIndex;
                  let style = "border-ink-200 bg-white hover:bg-ink-50 cursor-pointer";
                  if (answered) {
                    style = isPicked
                      ? choice.isBest
                        ? "border-mint-500 bg-mint-50"
                        : "border-marigold-400 bg-marigold-50"
                      : "border-ink-200 bg-white opacity-60";
                  }
                  return (
                    <button
                      key={choice.text}
                      disabled={answered}
                      onClick={() => setPicks((prev) => [...prev.slice(0, stepIndex), choiceIndex])}
                      className={`tile-pop w-full min-h-12 text-left p-4 rounded-xl border-2 text-base font-medium text-ink ${style}`}
                    >
                      {choice.text}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <div
                  className={`mt-3 p-4 rounded-xl text-sm leading-relaxed ${
                    step.choices[pick].isBest ? "bg-mint-100 text-mint-900" : "bg-marigold-100 text-marigold-900"
                  }`}
                >
                  <RichText text={step.choices[pick].outcome}/>
                </div>
              )}

              {answered && revealed === stepIndex + 1 && (
                <button
                  onClick={() => setRevealed(stepIndex + 2)}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 cursor-pointer"
                >
                  {stepIndex + 1 < activity.steps.length ? "Next moment" : "See how you did"} <ArrowRight className="w-4 h-4"/>
                </button>
              )}
            </div>
          );
        })}
      </div>

      {finished && (
        <div className="mt-6 p-4 rounded-xl bg-brand-50 text-sm leading-relaxed text-ink">
          <p className="font-bold">
            You made the strongest call {bestCount} of {activity.steps.length} times.
          </p>
          <p className="mt-2"><RichText text={activity.debrief}/></p>
          <button
            onClick={() => { setPicks([]); setRevealed(1); }}
            className="mt-3 inline-flex items-center gap-1.5 font-semibold text-brand-600 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4"/> Replay
          </button>
        </div>
      )}
    </ActivityCard>
  );
}

"use client";

import React, { useState } from "react";
import { Shuffle, CheckCircle2, XCircle } from "lucide-react";
import ActivityCard from "./ActivityCard";
import { RichText } from "@/components/lesson/Glossary";
import type { SortActivity } from "@/data/types";

export default function SortCards({ activity }: { activity: SortActivity }) {
  const [placed, setPlaced] = useState<Record<number, 0 | 1>>({});
  const doneCount = Object.keys(placed).length;
  const correctCount = Object.entries(placed).filter(
    ([index, bucket]) => activity.items[Number(index)].bucket === bucket
  ).length;

  return (
    <ActivityCard label="Sort It" title={activity.title} icon={<Shuffle className="w-5 h-5"/>}>
      <p className="text-base text-ink-700 leading-relaxed"><RichText text={activity.instructions}/></p>

      <div className="mt-4 space-y-3">
        {activity.items.map((item, index) => {
          const choice = placed[index];
          const answered = choice !== undefined;
          const isRight = answered && choice === item.bucket;

          return (
            <div
              key={item.text}
              className={`p-4 rounded-xl border-2 ${
                !answered ? "border-ink-200" : isRight ? "border-mint-500 bg-mint-50" : "border-coral-300 bg-coral-50"
              }`}
            >
              <p className="text-sm font-medium text-ink">{item.text}</p>
              {!answered ? (
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {activity.buckets.map((bucket, bucketIndex) => (
                    <button
                      key={bucket}
                      onClick={() => setPlaced((prev) => ({ ...prev, [index]: bucketIndex as 0 | 1 }))}
                      className="tile-pop min-h-11 px-3 py-2 rounded-xl border-2 border-ink-200 bg-white hover:border-brand-300 text-sm font-semibold text-ink-700 cursor-pointer"
                    >
                      {bucket}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="mt-2 flex gap-2 text-sm leading-relaxed">
                  {isRight ? (
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-mint-500 shrink-0"/>
                  ) : (
                    <XCircle className="w-4 h-4 mt-0.5 text-coral-500 shrink-0"/>
                  )}
                  <span className="text-ink-700">
                    <strong>{activity.buckets[item.bucket]}.</strong> <RichText text={item.why}/>
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {doneCount === activity.items.length && (
        <div className="mt-4 flex items-center justify-between gap-3 p-4 rounded-xl bg-brand-50 text-sm font-semibold text-ink">
          <span>You sorted {correctCount} of {activity.items.length} correctly.</span>
          <button onClick={() => setPlaced({})} className="text-brand-600 cursor-pointer">Try again</button>
        </div>
      )}
    </ActivityCard>
  );
}

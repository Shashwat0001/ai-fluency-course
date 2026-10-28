"use client";

import React, { useState } from "react";
import { Shuffle, CheckCircle2, XCircle } from "lucide-react";
import ActivityCard from "./ActivityCard";
import type { SortActivity } from "@/data/types";

export default function SortCards({ activity }: { activity: SortActivity }) {
  const [placed, setPlaced] = useState<Record<number, 0 | 1>>({});
  const doneCount = Object.keys(placed).length;
  const correctCount = Object.entries(placed).filter(
    ([index, bucket]) => activity.items[Number(index)].bucket === bucket
  ).length;

  return (
    <ActivityCard label="Sort It" title={activity.title} icon={<Shuffle className="w-5 h-5"/>}>
      <p className="text-base text-slate-700 leading-relaxed">{activity.instructions}</p>

      <div className="mt-4 space-y-3">
        {activity.items.map((item, index) => {
          const choice = placed[index];
          const answered = choice !== undefined;
          const isRight = answered && choice === item.bucket;

          return (
            <div
              key={item.text}
              className={`p-4 rounded-xl border-2 ${
                !answered ? "border-[#E2E8F0]" : isRight ? "border-[#10B981] bg-emerald-50" : "border-rose-300 bg-rose-50"
              }`}
            >
              <p className="text-sm font-medium text-[#0F172A]">{item.text}</p>
              {!answered ? (
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {activity.buckets.map((bucket, bucketIndex) => (
                    <button
                      key={bucket}
                      onClick={() => setPlaced((prev) => ({ ...prev, [index]: bucketIndex as 0 | 1 }))}
                      className="px-3 py-2 rounded-lg border border-[#E2E8F0] bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 cursor-pointer"
                    >
                      {bucket}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="mt-2 flex gap-2 text-sm leading-relaxed">
                  {isRight ? (
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#10B981] shrink-0"/>
                  ) : (
                    <XCircle className="w-4 h-4 mt-0.5 text-rose-500 shrink-0"/>
                  )}
                  <span className="text-slate-700">
                    <strong>{activity.buckets[item.bucket]}.</strong> {item.why}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {doneCount === activity.items.length && (
        <div className="mt-4 flex items-center justify-between gap-3 p-4 rounded-xl bg-indigo-50 text-sm font-semibold text-[#0F172A]">
          <span>You sorted {correctCount} of {activity.items.length} correctly.</span>
          <button onClick={() => setPlaced({})} className="text-[#4F46E5] cursor-pointer">Try again</button>
        </div>
      )}
    </ActivityCard>
  );
}

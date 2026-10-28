"use client";

import React, { useState } from "react";
import { ListChecks } from "lucide-react";
import ActivityCard from "./ActivityCard";
import type { ChecklistActivity } from "@/data/types";

export default function Checklist({ activity }: { activity: ChecklistActivity }) {
  const [ticked, setTicked] = useState<Set<number>>(new Set());

  const toggle = (index: number) =>
    setTicked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <ActivityCard label="Your Playbook" title={activity.title} icon={<ListChecks className="w-5 h-5"/>}>
      <p className="text-base text-slate-700 leading-relaxed">{activity.intro}</p>
      <ul className="mt-4 space-y-2">
        {activity.items.map((item, index) => (
          <li key={item.text}>
            <label className="flex gap-3 p-3 rounded-xl border border-[#E2E8F0] hover:bg-slate-50 cursor-pointer">
              <input
                type="checkbox"
                checked={ticked.has(index)}
                onChange={() => toggle(index)}
                className="mt-1 w-4 h-4 accent-[#4F46E5] shrink-0"
              />
              <span>
                <span className={`block text-sm font-semibold ${ticked.has(index) ? "text-slate-400 line-through" : "text-[#0F172A]"}`}>
                  {item.text}
                </span>
                {item.detail && <span className="block mt-0.5 text-sm text-slate-600 leading-relaxed">{item.detail}</span>}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </ActivityCard>
  );
}

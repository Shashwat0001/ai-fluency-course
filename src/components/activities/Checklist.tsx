"use client";

import React, { useState } from "react";
import { ListChecks } from "lucide-react";
import ActivityCard from "./ActivityCard";
import { RichText } from "@/components/lesson/Glossary";
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
      <p className="text-base text-ink-700 leading-relaxed"><RichText text={activity.intro}/></p>
      <ul className="mt-4 space-y-2">
        {activity.items.map((item, index) => (
          <li key={item.text}>
            <label className="flex gap-3 p-3 rounded-xl border border-ink-200 hover:bg-ink-50 cursor-pointer">
              <input
                type="checkbox"
                checked={ticked.has(index)}
                onChange={() => toggle(index)}
                className="mt-1 w-4 h-4 accent-brand-600 shrink-0"
              />
              <span>
                <span className={`block text-sm font-semibold ${ticked.has(index) ? "text-ink-400 line-through" : "text-ink"}`}>
                  {item.text}
                </span>
                {item.detail && <span className="block mt-0.5 text-sm text-ink-600 leading-relaxed"><RichText text={item.detail} glossary={false}/></span>}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </ActivityCard>
  );
}

"use client";

import React, { useState } from "react";
import { MessageSquareText, Languages } from "lucide-react";
import ActivityCard from "./ActivityCard";
import type { DecodeChatActivity } from "@/data/types";

export default function DecodeChat({ activity }: { activity: DecodeChatActivity }) {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const decodable = activity.lines.filter((l) => l.plainEnglish).length;

  const toggle = (index: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <ActivityCard label="Decode the Meeting" title={activity.title} icon={<MessageSquareText className="w-5 h-5"/>}>
      <p className="text-sm text-slate-500 leading-relaxed">{activity.setting}</p>
      <p className="mt-2 text-xs font-semibold text-[#4F46E5]">
        Tap any line marked “Decode” to translate it ({open.size}/{decodable} decoded)
      </p>

      <div className="mt-4 space-y-3">
        {activity.lines.map((line, index) => (
          <div key={line.text} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{line.speaker}</p>
              {line.plainEnglish && (
                <button
                  onClick={() => toggle(index)}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white border border-[#E2E8F0] text-[11px] font-semibold text-[#4F46E5] cursor-pointer"
                >
                  <Languages className="w-3.5 h-3.5"/> {open.has(index) ? "Hide" : "Decode"}
                </button>
              )}
            </div>
            <p className="mt-1 text-base text-[#0F172A]">&ldquo;{line.text}&rdquo;</p>
            {line.plainEnglish && open.has(index) && (
              <p className="mt-3 p-3 rounded-lg bg-emerald-50 text-sm text-emerald-900 leading-relaxed">
                <strong>In plain English:</strong> {line.plainEnglish}
              </p>
            )}
          </div>
        ))}
      </div>
    </ActivityCard>
  );
}

"use client";

import React, { useState } from "react";
import { MessageSquareText, Languages } from "lucide-react";
import ActivityCard from "./ActivityCard";
import { RichText } from "@/components/lesson/Glossary";
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
      <p className="text-sm text-ink-500 leading-relaxed"><RichText text={activity.setting}/></p>
      <p className="mt-2 text-xs font-semibold text-brand-600">
        Tap any line marked “Decode” to translate it ({open.size}/{decodable} decoded)
      </p>

      <div className="mt-4 space-y-3">
        {activity.lines.map((line, index) => (
          <div key={line.text} className="p-4 rounded-xl bg-ink-50 border border-ink-100">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-wider text-ink-500">{line.speaker}</p>
              {line.plainEnglish && (
                <button
                  onClick={() => toggle(index)}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white border border-ink-200 text-[11px] font-semibold text-brand-600 cursor-pointer"
                >
                  <Languages className="w-3.5 h-3.5"/> {open.has(index) ? "Hide" : "Decode"}
                </button>
              )}
            </div>
            <p className="mt-1 text-base text-ink">&ldquo;{line.text}&rdquo;</p>
            {line.plainEnglish && open.has(index) && (
              <p className="mt-3 p-3 rounded-lg bg-mint-50 text-sm text-mint-900 leading-relaxed">
                <strong>In plain English:</strong> <RichText text={line.plainEnglish}/>
              </p>
            )}
          </div>
        ))}
      </div>
    </ActivityCard>
  );
}

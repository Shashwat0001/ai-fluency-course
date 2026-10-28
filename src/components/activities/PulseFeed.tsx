import React from "react";
import { Newspaper, ArrowUpRight } from "lucide-react";
import ActivityCard from "./ActivityCard";
import { RichText } from "@/components/lesson/Glossary";
import { BI_WEEKLY_PULSE_FEED } from "@/data/pulse";
import type { PulseFeedActivity } from "@/data/types";

export default function PulseFeed({ activity }: { activity: PulseFeedActivity }) {
  return (
    <ActivityCard label="This Edition" title={activity.title} icon={<Newspaper className="w-5 h-5"/>}>
      <div className="space-y-4">
        {BI_WEEKLY_PULSE_FEED.map((item) => (
          <article key={item.id} className="p-4 rounded-2xl border border-ink-200">
            <div className="flex items-center justify-between text-[11px] font-semibold text-ink-500">
              <span className="px-2 py-0.5 rounded-full bg-brand-50 text-brand-600">{item.category}</span>
              <span>{item.date}</span>
            </div>
            <h3 className="mt-3 text-base font-bold text-ink">{item.title}</h3>
            <p className="mt-2 text-[15px] text-ink-600 leading-relaxed"><RichText text={item.summary}/></p>
            <p className="mt-3 p-3 rounded-xl bg-marigold-50 border border-marigold-100 text-sm text-ink-800 leading-relaxed"><span className="font-bold">Why it matters: </span><RichText text={item.analogyTakeaway}/></p>
            {item.source && (
              <a
                href={item.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600"
              >
                Source: {item.source.label} <ArrowUpRight className="w-3.5 h-3.5"/>
              </a>
            )}
          </article>
        ))}
      </div>
    </ActivityCard>
  );
}

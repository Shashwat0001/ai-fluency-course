import React from "react";
import { WandSparkles } from "lucide-react";
import ActivityCard from "./ActivityCard";
import { RichText } from "@/components/lesson/Glossary";
import type { BeforeAfterActivity } from "@/data/types";

export default function BeforeAfter({ activity }: { activity: BeforeAfterActivity }) {
  return (
    <ActivityCard label="Before & After" title={activity.title} icon={<WandSparkles className="w-5 h-5"/>}>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="p-4 rounded-xl bg-coral-50 border border-coral-200">
          <p className="text-xs font-bold uppercase tracking-wider text-coral-700">{activity.before.label}</p>
          <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink">{activity.before.text}</p>
        </div>
        <div className="p-4 rounded-xl bg-mint-50 border border-mint-200">
          <p className="text-xs font-bold uppercase tracking-wider text-mint-700">{activity.after.label}</p>
          <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink">{activity.after.text}</p>
        </div>
      </div>

      <p className="mt-5 text-xs font-bold uppercase tracking-wider text-ink-500">Why the second one works</p>
      <ul className="mt-2 space-y-2">
        {activity.whyItWorks.map((reason) => (
          <li key={reason} className="flex gap-2 text-sm text-ink-700 leading-relaxed">
            <span className="text-mint-600 font-bold">✓</span>
            <span><RichText text={reason}/></span>
          </li>
        ))}
      </ul>
    </ActivityCard>
  );
}

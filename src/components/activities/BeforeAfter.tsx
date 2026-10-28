import React from "react";
import { WandSparkles } from "lucide-react";
import ActivityCard from "./ActivityCard";
import type { BeforeAfterActivity } from "@/data/types";

export default function BeforeAfter({ activity }: { activity: BeforeAfterActivity }) {
  return (
    <ActivityCard label="Before & After" title={activity.title} icon={<WandSparkles className="w-5 h-5"/>}>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
          <p className="text-xs font-bold uppercase tracking-wider text-rose-700">{activity.before.label}</p>
          <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-[#0F172A]">{activity.before.text}</p>
        </div>
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">{activity.after.label}</p>
          <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-[#0F172A]">{activity.after.text}</p>
        </div>
      </div>

      <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">Why the second one works</p>
      <ul className="mt-2 space-y-2">
        {activity.whyItWorks.map((reason) => (
          <li key={reason} className="flex gap-2 text-sm text-slate-700 leading-relaxed">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>{reason}</span>
          </li>
        ))}
      </ul>
    </ActivityCard>
  );
}

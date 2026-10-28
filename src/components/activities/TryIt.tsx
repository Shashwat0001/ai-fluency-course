"use client";

import React, { useState } from "react";
import { Copy, Check, Rocket } from "lucide-react";
import ActivityCard from "./ActivityCard";
import { RichText } from "@/components/lesson/Glossary";
import type { TryItActivity } from "@/data/types";

export default function TryIt({ activity }: { activity: TryItActivity }) {
  const [copied, setCopied] = useState(false);

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(activity.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the prompt is still visible to select by hand.
    }
  };

  return (
    <ActivityCard label="Try It Now" title={activity.title} icon={<Rocket className="w-5 h-5"/>}>
      <p className="text-base text-ink-700 leading-relaxed"><RichText text={activity.intro}/></p>

      <div className="mt-4 rounded-xl bg-ink-900 text-ink-100 p-4">
        <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed">{activity.prompt}</pre>
        <button
          onClick={copyPrompt}
          className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5"/> : <Copy className="w-3.5 h-3.5"/>}
          {copied ? "Copied" : "Copy prompt"}
        </button>
      </div>

      <p className="mt-3 text-xs text-ink-500">
        Paste it into any free AI assistant: ChatGPT, Gemini, Claude, Copilot or Meta AI.
      </p>

      <p className="mt-5 text-xs font-bold uppercase tracking-wider text-ink-500">What to notice</p>
      <ul className="mt-2 space-y-2">
        {activity.whatToNotice.map((point) => (
          <li key={point} className="flex gap-2 text-sm text-ink-700 leading-relaxed">
            <span className="text-brand-600 font-bold">→</span>
            <span><RichText text={point}/></span>
          </li>
        ))}
      </ul>
    </ActivityCard>
  );
}

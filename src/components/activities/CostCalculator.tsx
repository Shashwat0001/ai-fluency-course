"use client";

import React, { useState } from "react";
import { IndianRupee } from "lucide-react";
import ActivityCard from "./ActivityCard";
import { RichText } from "@/components/lesson/Glossary";
import type { CostCalculatorActivity } from "@/data/types";

// Rule of thumb for English text: 1 token is roughly 3/4 of a word.
const TOKENS_PER_WORD = 4 / 3;
const DAYS_PER_MONTH = 30;

const formatRupees = (amount: number) =>
  amount >= 100
    ? `₹${Math.round(amount).toLocaleString("en-IN")}`
    : `₹${amount.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-ink-700">{label}</span>
        <span className="font-bold text-ink">{value.toLocaleString("en-IN")}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-brand-600"
      />
    </label>
  );
}

export default function CostCalculator({ activity }: { activity: CostCalculatorActivity }) {
  const [messagesPerDay, setMessagesPerDay] = useState(activity.defaults.messagesPerDay);
  const [wordsIn, setWordsIn] = useState(activity.defaults.wordsIn);
  const [wordsOut, setWordsOut] = useState(activity.defaults.wordsOut);

  const monthlyMessages = messagesPerDay * DAYS_PER_MONTH;
  const inputTokens = monthlyMessages * wordsIn * TOKENS_PER_WORD;
  const outputTokens = monthlyMessages * wordsOut * TOKENS_PER_WORD;

  return (
    <ActivityCard label="Cost Calculator" title={activity.title} icon={<IndianRupee className="w-5 h-5"/>}>
      <p className="text-base text-ink-700 leading-relaxed"><RichText text={activity.intro}/></p>

      <div className="mt-5 space-y-5">
        <Slider label="Customer messages per day" value={messagesPerDay} min={100} max={100000} step={100} onChange={setMessagesPerDay}/>
        <Slider label="Words the AI reads per message (question + instructions + documents)" value={wordsIn} min={50} max={5000} step={50} onChange={setWordsIn}/>
        <Slider label="Words the AI writes back per message" value={wordsOut} min={20} max={1000} step={10} onChange={setWordsOut}/>
      </div>

      <div className="mt-6 grid gap-3">
        {activity.models.map((model) => {
          const usd =
            (inputTokens / 1_000_000) * model.inputUsdPerMillion +
            (outputTokens / 1_000_000) * model.outputUsdPerMillion;
          const inr = usd * activity.usdToInr;
          return (
            <div key={model.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 p-4 rounded-xl bg-ink-50 border border-ink-100">
              <span className="text-sm font-semibold text-ink">{model.name}</span>
              <span className="sm:text-right">
                <span className="block text-lg font-extrabold text-ink">{formatRupees(inr)}<span className="text-xs font-semibold text-ink-500"> /month</span></span>
                <span className="block text-xs text-ink-500">{formatRupees(inr / monthlyMessages)} per message</span>
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-xs text-ink-500 leading-relaxed">
        {monthlyMessages.toLocaleString("en-IN")} messages a month ≈ {Math.round((inputTokens + outputTokens) / 1_000_000).toLocaleString("en-IN")} million tokens.
        List prices checked {activity.pricesCheckedOn}, at ₹{activity.usdToInr} per US dollar. Real bills vary with discounts, caching and taxes; Indian-language text usually uses more tokens per word than English.
      </p>
    </ActivityCard>
  );
}

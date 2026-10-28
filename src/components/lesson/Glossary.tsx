"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { BookOpenText, X } from "lucide-react";
import { GLOSSARY, type GlossaryEntry } from "@/data/glossary";

// One regex for the whole glossary, longest terms first so "system prompt"
// wins over "prompt". Lookarounds stand in for word boundaries so hyphenated
// terms ("fine-tuning", "time-to-first-token") match whole.
const LOOKUP = new Map<string, GlossaryEntry>();
const patterns: { text: string; entry: GlossaryEntry }[] = [];
for (const entry of GLOSSARY) {
  for (const text of [entry.term, ...(entry.aliases ?? [])]) {
    patterns.push({ text, entry });
    LOOKUP.set(entry.caseSensitive ? text : text.toLowerCase(), entry);
  }
}
patterns.sort((a, b) => b.text.length - a.text.length);
const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const MATCHER = new RegExp(
  `(?<![\\w-])(${patterns.map((p) => escape(p.text)).join("|")})(?![\\w-])`,
  "gi"
);

function findEntry(match: string): GlossaryEntry | undefined {
  const exact = LOOKUP.get(match);
  if (exact) return exact;
  const loose = LOOKUP.get(match.toLowerCase());
  // A case-insensitive hit on a case-sensitive acronym ("rag" for "RAG") doesn't count.
  return loose && !loose.caseSensitive ? loose : undefined;
}

const GlossaryContext = createContext<(entry: GlossaryEntry) => void>(() => {});

export function GlossaryProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<GlossaryEntry | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <GlossaryContext.Provider value={setActive}>
      {children}
      {active && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/20" onClick={() => setActive(null)}>
          <div
            role="dialog"
            aria-label={`Meaning of ${active.term}`}
            className="w-full max-w-2xl mx-2 mb-24 sm:mb-28 p-5 rounded-2xl bg-[#0F172A] text-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2 text-indigo-300">
                <BookOpenText className="w-4 h-4"/>
                <span className="text-xs font-bold uppercase tracking-wider">Jargon, decoded</span>
              </div>
              <button onClick={() => setActive(null)} aria-label="Close" className="p-1 -m-1 text-slate-400 hover:text-white cursor-pointer">
                <X className="w-5 h-5"/>
              </button>
            </div>
            <p className="mt-2 text-lg font-bold">{active.term}</p>
            <p className="mt-1 text-base text-slate-200 leading-relaxed">{active.definition}</p>
          </div>
        </div>
      )}
    </GlossaryContext.Provider>
  );
}

// Renders plain text, turning the first mention of each glossary term into a
// tappable, dotted-underlined word that opens its definition.
export function GlossaryText({ text }: { text: string }) {
  const open = useContext(GlossaryContext);
  const seen = new Set<string>();
  const parts: React.ReactNode[] = [];
  let last = 0;

  for (const match of text.matchAll(MATCHER)) {
    const entry = findEntry(match[0]);
    if (!entry || seen.has(entry.term)) continue;
    seen.add(entry.term);
    const start = match.index ?? 0;
    parts.push(text.slice(last, start));
    parts.push(
      <button
        key={start}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          open(entry);
        }}
        className="inline underline decoration-dotted decoration-2 decoration-indigo-400 underline-offset-4 cursor-help"
      >
        {match[0]}
      </button>
    );
    last = start + match[0].length;
  }
  parts.push(text.slice(last));

  return <>{parts}</>;
}

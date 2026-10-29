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

/** Every glossary entry mentioned in a text, in order of first appearance. */
export function findGlossaryEntries(text: string): GlossaryEntry[] {
  const found: GlossaryEntry[] = [];
  for (const match of text.matchAll(MATCHER)) {
    const entry = findEntry(match[0]);
    if (entry && !found.includes(entry)) found.push(entry);
  }
  return found;
}

interface ActivePopover {
  entry: GlossaryEntry;
  rect: { top: number; bottom: number; left: number; width: number };
  pinned: boolean;
}

interface GlossaryContextValue {
  openPopover: (entry: GlossaryEntry, el: HTMLElement | null, pinned?: boolean) => void;
  scheduleClose: () => void;
  cancelClose: () => void;
}

const GlossaryContext = createContext<GlossaryContextValue>({
  openPopover: () => {},
  scheduleClose: () => {},
  cancelClose: () => {},
});

export function GlossaryProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState<ActivePopover | null>(null);
  const closeTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = React.useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleClose = React.useCallback(() => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => {
      setActive((prev) => (prev?.pinned ? prev : null));
    }, 180);
  }, [cancelClose]);

  const openPopover = React.useCallback(
    (entry: GlossaryEntry, el: HTMLElement | null, pinned = false) => {
      cancelClose();
      const fallbackRect = {
        top: typeof window !== "undefined" ? window.innerHeight / 2 - 40 : 200,
        bottom: typeof window !== "undefined" ? window.innerHeight / 2 : 240,
        left: typeof window !== "undefined" ? window.innerWidth / 2 - 60 : 200,
        width: 120,
      };
      const r = el ? el.getBoundingClientRect() : fallbackRect;
      setActive((prev) => ({
        entry,
        rect: { top: r.top, bottom: r.bottom, left: r.left, width: r.width },
        pinned: pinned || (prev?.entry.term === entry.term && prev.pinned),
      }));
    },
    [cancelClose]
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    const onPointerDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("[data-glossary-popover]") || target?.closest(".glossary-term")) {
        return;
      }
      setActive(null);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onPointerDown);
    };
  }, [active]);

  // Compute clamped popover coordinates so it stays near the trigger word without overflowing viewport
  const getPopoverStyle = (): React.CSSProperties => {
    if (!active || typeof window === "undefined") return {};
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const popoverWidth = Math.min(360, vw - 24);
    const centerX = active.rect.left + active.rect.width / 2;
    const left = Math.max(12, Math.min(vw - popoverWidth - 12, centerX - popoverWidth / 2));
    const showAbove = active.rect.top > 190 || active.rect.bottom > vh - 160;
    if (showAbove) {
      return {
        width: `${popoverWidth}px`,
        left: `${left}px`,
        bottom: `${Math.max(12, vh - active.rect.top + 10)}px`,
      };
    }
    return {
      width: `${popoverWidth}px`,
      left: `${left}px`,
      top: `${Math.min(vh - 180, active.rect.bottom + 10)}px`,
    };
  };

  return (
    <GlossaryContext.Provider value={{ openPopover, scheduleClose, cancelClose }}>
      {children}
      {active && (
        <div
          data-glossary-popover
          role="dialog"
          aria-label={`Meaning of ${active.entry.term}`}
          style={getPopoverStyle()}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          className="fixed z-50 tooltip-pop p-4 rounded-2xl bg-ink-950/85 backdrop-blur-xl border border-cyber-400/50 text-white shadow-[0_16px_40px_-8px_rgba(0,0,0,0.5),0_0_24px_-4px_rgba(0,229,255,0.3)]"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-1.5 text-cyber-300">
              <BookOpenText className="w-3.5 h-3.5" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest">
                Jargon, decoded
              </span>
            </div>
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close definition"
              className="p-1 -m-1 rounded-lg text-ink-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="mt-1.5 font-display text-base font-extrabold text-white flex items-center gap-2">
            <span>{active.entry.term}</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyber-400 shadow-[0_0_8px_#00e5ff]" />
          </p>
          <p className="mt-1 text-sm text-ink-100 leading-relaxed">{active.entry.definition}</p>
        </div>
      )}
    </GlossaryContext.Provider>
  );
}

// Lesson text supports two bits of markup:
//   **bold**       the phrases a student would underline
//   ==highlight==  the single line to remember (marigold highlighter)
// The first mention of each glossary term also becomes a hoverable/tappable word,
// unless `glossary` is false (e.g. text that sits inside a button).
const EMPHASIS = /(\*\*[^*]+\*\*|==[^=]+==)/g;

function GlossaryTriggerSpan({
  entry,
  children,
}: {
  entry: GlossaryEntry;
  children: React.ReactNode;
}) {
  const { openPopover, scheduleClose } = useContext(GlossaryContext);
  return (
    <span
      role="button"
      tabIndex={0}
      onMouseEnter={(e) => openPopover(entry, e.currentTarget, false)}
      onMouseLeave={() => scheduleClose()}
      onFocus={(e) => openPopover(entry, e.currentTarget, false)}
      onBlur={() => scheduleClose()}
      onClick={(e) => {
        e.stopPropagation();
        openPopover(entry, e.currentTarget, true);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          openPopover(entry, e.currentTarget, true);
        }
      }}
      className="glossary-term"
    >
      {children}
    </span>
  );
}

export function GlossaryDemoTrigger({ children }: { children: React.ReactNode }) {
  const demoEntry: GlossaryEntry = {
    term: "Underlined jargon terms",
    definition:
      "Whenever you see a word with this tech-dotted underline, hover or tap it for an instant frosted-glass meaning without losing your place.",
  };
  return <GlossaryTriggerSpan entry={demoEntry}>{children}</GlossaryTriggerSpan>;
}

export function GlossaryInlineTerm({
  term,
  children,
}: {
  term: string;
  children?: React.ReactNode;
}) {
  const entry = findEntry(term) ?? {
    term,
    definition: "A key AI concept explained in plain English inside the course.",
  };
  return <GlossaryTriggerSpan entry={entry}>{children ?? term}</GlossaryTriggerSpan>;
}

export function RichText({ text, glossary = true }: { text: string; glossary?: boolean }) {
  const seen = new Set<string>();

  const withGlossary = (chunk: string, keyPrefix: string): React.ReactNode[] => {
    if (!glossary) return [chunk];
    const parts: React.ReactNode[] = [];
    let last = 0;
    for (const match of chunk.matchAll(MATCHER)) {
      const entry = findEntry(match[0]);
      if (!entry || seen.has(entry.term)) continue;
      seen.add(entry.term);
      const start = match.index ?? 0;
      parts.push(chunk.slice(last, start));
      parts.push(
        <GlossaryTriggerSpan key={`${keyPrefix}-${start}`} entry={entry}>
          {match[0]}
        </GlossaryTriggerSpan>
      );
      last = start + match[0].length;
    }
    parts.push(chunk.slice(last));
    return parts;
  };

  return (
    <>
      {text.split(EMPHASIS).map((piece, i) => {
        if (piece.startsWith("**") && piece.endsWith("**") && piece.length > 4) {
          return <strong key={i} className="rich-strong">{withGlossary(piece.slice(2, -2), `b${i}`)}</strong>;
        }
        if (piece.startsWith("==") && piece.endsWith("==") && piece.length > 4) {
          return <mark key={i} className="highlight">{withGlossary(piece.slice(2, -2), `h${i}`)}</mark>;
        }
        return <React.Fragment key={i}>{withGlossary(piece, `t${i}`)}</React.Fragment>;
      })}
    </>
  );
}

// Older name, kept so existing imports keep working.
export const GlossaryText = RichText;

/** Strips the markup, for places that need plain text (e.g. copying a prompt). */
export const plainText = (text: string) => text.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/==([^=]+)==/g, "$1");

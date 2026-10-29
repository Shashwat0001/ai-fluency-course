import React from "react";

// The AI Fluency mark: a big spark (the "aha" moment) with a small marigold
// spark beside it (the next idea). Same drawing as src/app/icon.svg.
export function LogoMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="af-mark" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6E56FF"/>
          <stop offset="1" stopColor="#3B27A6"/>
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#af-mark)"/>
      <path d="M18 8.5c.9 6.4 4.1 9.6 10.5 10.5-6.4.9-9.6 4.1-10.5 10.5-.9-6.4-4.1-9.6-10.5-10.5 6.4-.9 9.6-4.1 10.5-10.5Z" fill="#fff"/>
      <path d="M30 6c.35 2.5 1.6 3.75 4.1 4.1-2.5.35-3.75 1.6-4.1 4.1-.35-2.5-1.6-3.75-4.1-4.1 2.5-.35 3.75-1.6 4.1-4.1Z" fill="#FFBF1F"/>
    </svg>
  );
}

export default function Logo({ tagline = true }: { tagline?: boolean }) {
  return (
    <span className="flex items-center gap-2 sm:gap-2.5 min-w-0">
      <LogoMark className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 transition-transform duration-200 group-hover:rotate-[-6deg] group-hover:scale-105"/>
      <span className="flex flex-col leading-none min-w-0">
        <span className="font-display text-[16px] sm:text-[19px] font-extrabold tracking-tight text-ink whitespace-nowrap">
          AI Fluency
        </span>
        {tagline && (
          <span className="hidden sm:block mt-1 text-[11px] font-medium text-ink-500">
            from <span className="font-serif italic text-[13px] text-brand-600">scratch</span>
          </span>
        )}
      </span>
    </span>
  );
}

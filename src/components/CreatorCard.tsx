import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { CREATOR } from "@/data/creator";

// LinkedIn's "in" mark (the icon library doesn't ship brand logos).
function Linkedin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/>
    </svg>
  );
}

function Avatar({ size }: { size: number }) {
  if (CREATOR.photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={CREATOR.photo}
        alt={`Photo of ${CREATOR.name}`}
        width={size}
        height={size}
        className="rounded-full object-cover ring-4 ring-white shadow-md"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-800 text-white font-display font-extrabold ring-4 ring-white shadow-md"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {CREATOR.initials}
    </span>
  );
}

const linkedinButton =
  "tile-pop w-full sm:w-auto min-w-0 inline-flex items-center justify-center gap-2 min-h-11 px-4 rounded-xl border-2 border-ink-200 bg-white text-[13px] sm:text-sm font-bold text-ink hover:border-brand-300";

// Full card for the homepage: who built this, and how to reach him.
export function CreatorCard() {
  return (
    <section
      aria-labelledby="creator-heading"
      className="relative overflow-hidden p-6 sm:p-8 rounded-[var(--radius-card)] bg-white border border-ink-200 shadow-[var(--shadow-card)]"
    >
      <span aria-hidden="true" className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full bg-marigold-200/50 blur-3xl"/>
      <div className="relative flex flex-col sm:flex-row gap-6 sm:items-center">
        <Avatar size={88}/>
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Made with care by</p>
          <h2 id="creator-heading" className="mt-1 text-3xl font-extrabold text-ink">{CREATOR.name}</h2>
          <p className="mt-3 text-[16px] text-ink-600 leading-relaxed">
            I built AI Fluency so that anyone, whatever their background, can walk into a room of engineers and{" "}
            <span className="font-serif italic text-[19px] text-ink">hold their own.</span>{" "}
            I&rsquo;m always up for a good conversation: <strong className="text-ink">collaborations, partnerships and new roles</strong> in AI,
            product or education. If you&rsquo;re building something or hiring, I&rsquo;d love to hear from you.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <a
              href={CREATOR.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pop w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-11 px-4 rounded-xl bg-brand-600 text-white text-sm font-bold hover:bg-brand-700"
            >
              <Linkedin className="w-4 h-4"/> Connect on LinkedIn <ArrowUpRight className="w-4 h-4"/>
            </a>
            <a href={`mailto:${CREATOR.email}?subject=Hello%20from%20AI%20Fluency`} className={linkedinButton}>
              <Mail className="w-4 h-4 shrink-0"/> <span className="truncate">{CREATOR.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Compact strip for the end of each lesson.
export function CreatorStrip() {
  return (
    <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-ink-200">
      <Avatar size={44}/>
      <p className="flex-1 text-sm text-ink-600 leading-snug">
        Enjoying this? <strong className="text-ink">{CREATOR.firstName}</strong> built the course and is open to collaborations and new roles.
      </p>
      <a
        href={CREATOR.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${CREATOR.name} on LinkedIn`}
        className="tile-pop inline-flex items-center justify-center w-11 h-11 rounded-xl border-2 border-ink-200 bg-white text-brand-600 hover:border-brand-300"
      >
        <Linkedin className="w-5 h-5"/>
      </a>
      <a
        href={`mailto:${CREATOR.email}?subject=Hello%20from%20AI%20Fluency`}
        aria-label={`Email ${CREATOR.name}`}
        className="tile-pop inline-flex items-center justify-center w-11 h-11 rounded-xl border-2 border-ink-200 bg-white text-brand-600 hover:border-brand-300"
      >
        <Mail className="w-5 h-5"/>
      </a>
    </div>
  );
}

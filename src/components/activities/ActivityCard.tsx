import React from "react";

// Shared frame for every activity, so new formats look like part of the same lesson.
export default function ActivityCard({
  label,
  title,
  icon,
  children,
}: {
  label: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="p-6 rounded-[var(--radius-card)] bg-white border border-ink-200 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 text-brand-600 [&>svg]:w-[18px] [&>svg]:h-[18px]">
          {icon}
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-brand-600">{label}</span>
      </div>
      <h2 className="mt-3 text-2xl font-bold leading-tight text-ink">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

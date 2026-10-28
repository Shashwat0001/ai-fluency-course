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
    <section className="p-6 rounded-2xl bg-white border-2 border-indigo-100">
      <div className="flex items-center gap-2 text-[#4F46E5]">
        {icon}
        <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
      </div>
      <h2 className="mt-2 text-xl font-bold text-[#0F172A]">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

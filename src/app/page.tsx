"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { CURRICULUM_TRACKS, BI_WEEKLY_META } from "@/data/curriculum";
import { completeLesson } from "@/lib/progress";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Cpu,
  BrainCircuit,
  Bot,
  Zap,
  Globe2,
  Layers,
} from "lucide-react";

export default function HomePage() {
  const [selectedDemoAnswer, setSelectedDemoAnswer] = useState<number | null>(null);

  const demoTrack = CURRICULUM_TRACKS[0];
  const demoLesson = demoTrack.lessons[0];

  const getTrackIcon = (iconName: string) => {
    switch (iconName) {
      case "BrainCircuit":
        return <BrainCircuit className="w-5 h-5 text-[#4F46E5]"/>;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#4F46E5]"/>;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#4F46E5]"/>;
      case "Bot":
        return <Bot className="w-5 h-5 text-[#4F46E5]"/>;
      case "Zap":
        return <Zap className="w-5 h-5 text-[#4F46E5]"/>;
      case "Globe2":
        return <Globe2 className="w-5 h-5 text-[#4F46E5]"/>;
      default:
        return <Cpu className="w-5 h-5 text-[#4F46E5]"/>;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0F172A] flex flex-col font-sans">
      <Navbar/>

      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#4F46E5] text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5"/>
<span>Latest AI Pulse: {BI_WEEKLY_META.lastUpdated}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-tight sm:leading-none">
          AI Fluency from Scratch.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Zero math prerequisites. Master the concepts shaping big tech through everyday analogies, interactive intuition builders, and real Silicon Valley dialogues.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#interactive-demo"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#4F46E5] text-white font-semibold text-sm hover:bg-[#4338CA] transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Try the 60-Second Demo</span>
            <ArrowRight className="w-4 h-4"/>
          </a>
          <a
            href="#curriculum"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white text-[#0F172A] font-semibold text-sm border border-[#E2E8F0] hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore the 6-Track Map</span>
          </a>
        </div>
      </section>

      <section id="interactive-demo" className="py-12 px-4 sm:px-6 max-w-4xl mx-auto w-full">
        <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm p-6 sm:p-10">
          <div className="flex items-center justify-between pb-6 border-b border-[#E2E8F0]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5]">Interactive Teaser</span>
              <h2 className="text-2xl font-bold text-[#0F172A] mt-1">{demoLesson.title}</h2>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-[#4F46E5]">
              +{demoLesson.xpReward} XP
            </span>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100">
            <div className="flex items-center gap-2 text-[#4F46E5] mb-3">
              <Lightbulb className="w-5 h-5"/>
              <span className="text-xs font-bold uppercase tracking-wider">The Everyday Analogy</span>
            </div>
            <p className="text-base text-[#0F172A] leading-relaxed font-medium">
              {demoLesson.analogy.metaphor}
            </p>
          </div>

          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Check Your Intuition</p>
            <p className="text-base font-semibold text-[#0F172A] mb-4">
              {demoLesson.quiz[0].scenario}
            </p>

            <div className="space-y-3">
              {demoLesson.quiz[0].options.map((option, index) => {
                const isSelected = selectedDemoAnswer === index;
                let btnStyle = "border-[#E2E8F0] bg-white hover:bg-slate-50";
                if (isSelected) {
                  btnStyle = option.isCorrect
                    ? "border-[#10B981] bg-emerald-50"
                    : "border-rose-400 bg-rose-50";
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSelectedDemoAnswer(index);
                      if (option.isCorrect) completeLesson(demoLesson.id, demoLesson.xpReward);
                    }}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between gap-4 cursor-pointer ${btnStyle}`}
                  >
                    <span className="text-sm font-medium text-[#0F172A]">{option.text}</span>
                    {isSelected && (
                      option.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0"/>
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0"/>
                      )
                    )}
                  </button>
                );
              })}
            </div>

            {selectedDemoAnswer !== null && (
              <div
                className={`mt-4 p-4 rounded-xl text-sm font-medium ${
                  demoLesson.quiz[0].options[selectedDemoAnswer].isCorrect
                    ? "bg-emerald-100 text-emerald-900"
                    : "bg-rose-100 text-rose-900"
                }`}
              >
                {demoLesson.quiz[0].options[selectedDemoAnswer].analogyFeedback}
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="curriculum" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5]">Complete Learning Pathway</span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] mt-2">6 Intuition-First Tracks</h2>
          <p className="text-slate-500 mt-2 text-base">Select any track to enter the distraction-free lesson player.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRICULUM_TRACKS.map((track) => {
            const firstLesson = track.lessons[0];
            const cardBody = (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                    {getTrackIcon(track.icon)}
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    {firstLesson
                      ? `${track.lessons.length} ${track.lessons.length === 1 ? "Lesson" : "Lessons"}`
                      : "In Production"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">{track.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{track.description}</p>
              </div>
            );

            if (!firstLesson) {
              return (
                <div
                  key={track.id}
                  className="p-6 rounded-2xl bg-white/60 border border-dashed border-[#E2E8F0] flex flex-col justify-between"
                >
                  {cardBody}
                  <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-400">
                    <span>Coming Soon</span>
                  </div>
                </div>
              );
            }

            return (
              <Link
                href={`/learn/${track.id}/${firstLesson.id}`}
                key={track.id}
                className="p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-slate-300 transition-all flex flex-col justify-between hover:shadow-lg cursor-pointer"
              >
                {cardBody}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#4F46E5]">
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4"/>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <footer className="mt-auto border-t border-[#E2E8F0] bg-white py-10 px-4 text-center text-xs text-slate-500">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-slate-950 flex items-center justify-center border border-white/10 shadow-sm">
            <BrainCircuit className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <span className="font-bold text-sm tracking-tight text-[#0F172A]">AI Fluency</span>
        </div>
        <p className="font-medium text-slate-600">Intuition-First Learning for Everyone</p>
        <p className="mt-1">AI Pulse last updated {BI_WEEKLY_META.lastUpdated} · Progress saved locally in this browser</p>
      </footer>
    </div>
  );
}
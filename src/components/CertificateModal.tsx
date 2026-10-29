"use client";

import React, { useState } from "react";
import { Award, Check, Copy, ExternalLink, Printer, ShieldCheck, Sparkles, Trophy, X, Zap } from "lucide-react";
import type { Track } from "@/data/types";
import { CREATOR } from "@/data/creator";

const LEARNER_NAME_KEY = "ai-fluency-learner-name";

function getSavedLearnerName(): string {
  if (typeof window === "undefined") return "";
  try {
    return window.localStorage.getItem(LEARNER_NAME_KEY) ?? "";
  } catch {
    return "";
  }
}

function saveLearnerName(name: string) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LEARNER_NAME_KEY, name);
  } catch {
    // Ignore storage errors
  }
}

export function buildLinkedInCertificateShare(track: Track, learnerName?: string) {
  const origin = typeof window !== "undefined" ? window.location.origin : "https://aifluency.in";
  const totalLessons = track.lessons.length;
  const totalXp = track.lessons.reduce((sum, l) => sum + l.xpReward, 0);
  const credentialId = `AIF-T0${track.number}-${track.id.slice(0, 6).toUpperCase()}`;
  const sampleTopics = track.lessons
    .slice(0, 3)
    .map((l) => l.title)
    .join(" • ");

  const holderLine = learnerName?.trim() ? `Issued to: ${learnerName.trim()}\n` : "";

  const postText =
    `🎓 Excited to share that I've completed Track 0${track.number}: "${track.title}" on AI Fluency and earned the "${track.badgeName}" Certificate of Completion!\n\n` +
    `✅ Completed all ${totalLessons} interactive lessons (+${totalXp.toLocaleString()} XP)\n` +
    `🧠 Key concepts mastered: ${sampleTopics}\n` +
    `${holderLine}🔖 Credential ID: ${credentialId}\n\n` +
    `Practical, jargon-free AI fluency built for real product & engineering conversations: ${origin}\n\n` +
    `#AIFluency #ArtificialIntelligence #GenerativeAI #LLMs #TechLeadership #ContinuousLearning`;

  // LinkedIn's feed composer URL pre-fills the post text directly in the share dialog
  const linkedInUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(postText)}`;

  return {
    postText,
    linkedInUrl,
    credentialId,
    totalLessons,
    totalXp,
  };
}

export default function CertificateModal({
  track,
  onClose,
}: {
  track: Track;
  onClose: () => void;
}) {
  const [learnerName, setLearnerName] = useState<string>(() => getSavedLearnerName());
  const [copiedPost, setCopiedPost] = useState(false);
  const [sharedClicked, setSharedClicked] = useState(false);

  const { postText, linkedInUrl, credentialId, totalLessons, totalXp } = buildLinkedInCertificateShare(
    track,
    learnerName
  );

  const issueDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setLearnerName(val);
    saveLearnerName(val);
  };

  const handleCopyPost = () => {
    navigator.clipboard?.writeText(postText).catch(() => {});
    setCopiedPost(true);
    setTimeout(() => setCopiedPost(false), 3000);
  };

  const handleLinkedInClick = () => {
    navigator.clipboard?.writeText(postText).catch(() => {});
    setSharedClicked(true);
    setTimeout(() => setSharedClicked(false), 3500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink-950/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl bg-ink-950 text-white border-2 border-cyber-400/70 shadow-[0_24px_64px_rgba(0,0,0,0.65),0_0_40px_-4px_rgba(0,229,255,0.4)] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient cyber glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyber-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-neon-500/25 blur-3xl"
        />

        {/* Top bar */}
        <div className="relative flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/10 bg-white/[0.03]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-mint-400 shrink-0" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-cyber-300">
              Verified Track Completion Certificate
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate"
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="relative p-5 sm:p-7 space-y-5">
          {/* Visual Certificate Frame */}
          <div className="relative rounded-2xl p-5 sm:p-7 bg-gradient-to-br from-ink-900 via-ink-950 to-brand-950 border-2 border-cyber-400/50 shadow-inner overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-4 opacity-10"
            >
              <Trophy className="w-28 h-28 text-cyber-300" />
            </div>

            <div className="relative flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyber-500/15 border border-cyber-400/40 text-[11px] font-extrabold uppercase tracking-widest text-cyber-300">
                <Sparkles className="w-3.5 h-3.5" /> AI Fluency Official Credential
              </span>
              <span className="text-xs font-mono font-bold text-ink-300">
                ID: {credentialId}
              </span>
            </div>

            <div className="relative mt-5">
              <p className="text-xs font-bold uppercase tracking-widest text-ink-300">
                This certifies that
              </p>
              <div className="mt-1.5">
                <input
                  type="text"
                  value={learnerName}
                  onChange={handleNameChange}
                  placeholder="Enter your name for the certificate..."
                  aria-label="Recipient name on certificate"
                  className="w-full sm:max-w-md bg-white/[0.06] hover:bg-white/[0.1] focus:bg-white/[0.12] border border-cyber-400/40 focus:border-cyber-300 rounded-xl px-3.5 py-2 text-lg sm:text-xl font-display font-extrabold text-white placeholder:text-ink-400 focus:outline-none transition-colors"
                />
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-ink-300">
                has successfully mastered all {totalLessons} lessons in Track 0{track.number} and earned the credential
              </p>

              <div className="mt-2.5 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-cyber-400/25 to-neon-500/25 border border-cyber-400/60 text-marigold-300 shrink-0 shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                  <Award className="w-6 h-6" />
                </span>
                <div className="min-w-0">
                  <h2
                    id="certificate-modal-title"
                    className="text-xl sm:text-2xl font-extrabold text-white leading-tight break-words"
                  >
                    {track.badgeName}
                  </h2>
                  <p className="text-sm font-semibold text-cyber-300 break-words">
                    Track 0{track.number}: {track.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics & Signature Footer */}
            <div className="relative mt-6 pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-ink-400">
                  Curriculum Completed
                </span>
                <span className="mt-0.5 inline-flex items-center gap-1 font-extrabold text-mint-300">
                  <Check className="w-3.5 h-3.5" /> {totalLessons}/{totalLessons} Lessons (100%)
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-ink-400">
                  Fluency XP Earned
                </span>
                <span className="mt-0.5 inline-flex items-center gap-1 font-extrabold text-marigold-300">
                  <Zap className="w-3.5 h-3.5 fill-current" /> +{totalXp.toLocaleString()} XP
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 sm:text-right">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-ink-400">
                  Issued By
                </span>
                <span className="mt-0.5 block font-extrabold text-white">
                  {CREATOR.name} · {issueDate}
                </span>
              </div>
            </div>
          </div>

          {/* Pre-populated LinkedIn Share Content Preview */}
          <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-cyber-300">
                LinkedIn Post Content (Auto-filled & Copied on Share)
              </span>
              <button
                type="button"
                onClick={handleCopyPost}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-[11px] font-bold text-white transition-colors cursor-pointer"
              >
                {copiedPost ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-mint-400" />
                    <span className="text-mint-300">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-cyber-300" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-ink-200 whitespace-pre-line leading-relaxed max-h-28 overflow-y-auto pr-1">
              {postText}
            </p>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-extrabold uppercase tracking-wider text-white transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-cyber-300" />
              <span>Print / Save PDF</span>
            </button>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkedInClick}
              className="btn-cyber inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-gradient-to-r from-cyber-500 to-neon-500 hover:from-cyber-400 hover:to-neon-400 text-ink-950 text-xs font-extrabold uppercase tracking-wider shadow-[0_0_20px_rgba(0,229,255,0.4)] cursor-pointer"
            >
              {sharedClicked ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Post Copied · Opening LinkedIn</span>
                </>
              ) : (
                <>
                  <ExternalLink className="w-4 h-4" />
                  <span>Share Certificate to LinkedIn</span>
                </>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

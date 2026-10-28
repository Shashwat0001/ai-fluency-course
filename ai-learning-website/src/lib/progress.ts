// Learner progress, saved in this browser only (no accounts yet).
// Maps lessonId -> XP earned for that lesson, so each lesson pays out once.

const STORAGE_KEY = "ai-fluency-progress";
const CHANGE_EVENT = "ai-fluency-progress-change";

type Progress = Record<string, number>;

function readProgress(): Progress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Progress) : {};
  } catch {
    return {};
  }
}

export function completeLesson(lessonId: string, xp: number) {
  const progress = readProgress();
  if (progress[lessonId] !== undefined) return;
  progress[lessonId] = xp;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Private browsing or blocked storage: progress just won't persist.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function getTotalXp(): number {
  return Object.values(readProgress()).reduce((sum, xp) => sum + xp, 0);
}

export function subscribeToProgress(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

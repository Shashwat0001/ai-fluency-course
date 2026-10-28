// Shapes of all course content. Lessons live in ./tracks/, the AI Pulse in ./pulse.ts.

export interface QuizQuestion {
  id: string;
  scenario: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    analogyFeedback: string;
  }[];
}

export interface Source {
  label: string;
  url: string;
}

// ---------------------------------------------------------------------------
// Activities: interactive formats a lesson can mix in between the analogy and
// the quiz. Each lesson picks the 1-3 formats that suit its topic best.
// ---------------------------------------------------------------------------

/** A ready-to-copy prompt to run in a free AI assistant, plus what to look for. */
export interface TryItActivity {
  type: "tryIt";
  title: string;
  intro: string;
  prompt: string;
  whatToNotice: string[];
}

/** Tap each card into one of two buckets, then see why. */
export interface SortActivity {
  type: "sort";
  title: string;
  instructions: string;
  buckets: [string, string];
  items: { text: string; bucket: 0 | 1; why: string }[];
}

/** A meeting or work situation that unfolds over a few decisions. */
export interface ScenarioActivity {
  type: "scenario";
  title: string;
  setting: string;
  steps: {
    situation: string;
    choices: { text: string; isBest: boolean; outcome: string }[];
  }[];
  debrief: string;
}

/** Read an AI-written answer and tap the sentences that are made up or wrong. */
export interface SpotTheErrorActivity {
  type: "spotTheError";
  title: string;
  instructions: string;
  question: string;
  sentences: { text: string; isError: boolean; why: string }[];
}

/** A weak version and a strong version side by side. */
export interface BeforeAfterActivity {
  type: "beforeAfter";
  title: string;
  before: { label: string; text: string };
  after: { label: string; text: string };
  whyItWorks: string[];
}

/** Flip cards for quick recall. */
export interface FlashcardsActivity {
  type: "flashcards";
  title: string;
  cards: { front: string; back: string }[];
}

/** A real-sounding conversation where any line can be tapped for a plain-English meaning. */
export interface DecodeChatActivity {
  type: "decodeChat";
  title: string;
  setting: string;
  lines: { speaker: string; text: string; plainEnglish?: string }[];
}

/** Move the sliders to see what an AI feature would cost per month, in rupees. */
export interface CostCalculatorActivity {
  type: "costCalculator";
  title: string;
  intro: string;
  usdToInr: number;
  models: { name: string; inputUsdPerMillion: number; outputUsdPerMillion: number }[];
  defaults: { messagesPerDay: number; wordsIn: number; wordsOut: number };
  pricesCheckedOn: string;
}

/** A practical checklist the learner can tick off and reuse at work. */
export interface ChecklistActivity {
  type: "checklist";
  title: string;
  intro: string;
  items: { text: string; detail?: string }[];
}

/** Shows the current AI Pulse edition (from ./pulse.ts), so news lives in one place. */
export interface PulseFeedActivity {
  type: "pulseFeed";
  title: string;
}

export type Activity =
  | TryItActivity
  | SortActivity
  | ScenarioActivity
  | SpotTheErrorActivity
  | BeforeAfterActivity
  | FlashcardsActivity
  | DecodeChatActivity
  | CostCalculatorActivity
  | ChecklistActivity
  | PulseFeedActivity;

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  durationMinutes: number;
  xpReward: number;
  isUpdatedBiWeekly?: boolean;
  lastUpdated: string;
  // Where the time-sensitive claims in this lesson come from (rankings, model capabilities, prices).
  sources?: Source[];
  bigIdea: {
    headline: string;
    explanation: string;
  };
  analogy?: {
    title: string;
    metaphor: string;
    visualComparison: {
      everydayItem: string;
      aiEquivalent: string;
    }[];
  };
  activities?: Activity[];
  techConversation?: {
    context: string;
    speakerA: { role: string; quote: string };
    speakerB: { role: string; quote: string };
    plainEnglishTranslation: string;
  };
  realWorldApplication?: {
    forWork: string;
    forLearning: string;
  };
  // Extra cards for the lesson's flashcard deck, for key ideas that aren't in the
  // jargon dictionary (src/data/glossary.ts). Markup allowed in `meaning`.
  keyTerms?: { term: string; meaning: string }[];
  jargonCard?: {
    term: string;
    oneLineAnalogy: string;
    meetingDropLine: string;
  };
  quiz: QuizQuestion[];
}

export interface Track {
  id: string;
  number: number;
  title: string;
  description: string;
  badgeName: string;
  icon: string;
  estimatedTime: string;
  isUpdatedThisFortnight?: boolean;
  lessons: Lesson[];
}

export interface BiWeeklyPulseItem {
  id: string;
  date: string;
  title: string;
  category: "New Model" | "New Term" | "Industry Shift" | "India";
  summary: string;
  analogyTakeaway: string;
  source?: Source;
}

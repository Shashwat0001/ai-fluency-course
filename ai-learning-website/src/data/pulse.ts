import type { BiWeeklyPulseItem } from "./types";

// The AI Pulse: one edition at a time. To publish a new edition, follow
// CONTENT_GUIDE.md at the repo root, then update lastUpdated and the feed.

export const BI_WEEKLY_META = {
  currentCycle: "Edition 1 • Oct 28, 2026",
  lastUpdated: "Oct 28, 2026",
  pulseHeadline: "GPT-6 for everyone, AI coworkers with their own logins, and India's deepfake rules",
};

export const BI_WEEKLY_PULSE_FEED: BiWeeklyPulseItem[] = [
  {
    id: "pulse-2026-10-gpt6",
    date: "Oct 7, 2026",
    title: "GPT-6 Arrives in ChatGPT, Including the Free Version",
    category: "New Model",
    summary:
      "OpenAI's GPT-6 family reached ChatGPT. Free and Go users get GPT-6 Luna; paid plans get GPT-6 Sol. The flagship, GPT-6 Astra, launched on 3 September for organisations and developers, aimed at long, multi-step work like building documents, spreadsheets and slides.",
    analogyTakeaway:
      "If ChatGPT feels different this month, it is: the engine under the bonnet was swapped. Re-test any prompts you rely on at work.",
    source: { label: "OpenAI: ChatGPT release notes", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
  },
  {
    id: "pulse-2026-10-opus55",
    date: "Sep 22, 2026",
    title: "Claude Opus 5.5: AI That Works for Hours on Its Own",
    category: "New Model",
    summary:
      "Anthropic released Claude Opus 5.5. Anthropic says it performs close to its top model, Fable 5.1, at lower cost, leads on tests of operating a computer, and better resists 'prompt injection' (hidden instructions planted in web pages or files).",
    analogyTakeaway:
      "AI is moving from a helper you chat with to a worker you hand a whole task to. Your new skill is checking the finished work, not doing every step.",
    source: { label: "Anthropic: Introducing Claude Opus 5.5", url: "https://www.anthropic.com/claude-opus-5-5" },
  },
  {
    id: "pulse-2026-10-argon",
    date: "Oct 13, 2026",
    title: "Google's Gemini 4 Argon Opens Up",
    category: "New Model",
    summary:
      "Google's new frontier model first went only to vetted cyber-security defenders (30 Sep), then opened to developers and paid Gemini app subscribers on 13 Oct.",
    analogyTakeaway:
      "With all three big labs launching top models within weeks of each other, they're neck and neck. Price, convenience and your own tests matter more than any one headline.",
    source: { label: "Google: Gemini 4 Argon is now available in the Gemini app", url: "https://blog.google/innovation-and-ai/products/gemini-app/gemini-4-argon-availability/" },
  },
  {
    id: "pulse-2026-10-agents",
    date: "Oct 8, 2026",
    title: "AI Coworkers Get Their Own Logins",
    category: "Industry Shift",
    summary:
      "Google announced Gemini Agent for businesses: you give it a goal, and it works with its own work account and email address across Workspace, Microsoft 365, Slack and Jira, keeping an audit log of what it did. Separately, ChatGPT can now complete browser tasks for you, asking for confirmation before sensitive actions.",
    analogyTakeaway:
      "It's like a new team member getting an employee ID on day one. Someone still has to review their work, and that someone is increasingly you.",
    source: { label: "TechCrunch: Google brings agentic AI to Gemini, starting with businesses", url: "https://techcrunch.com/2026/10/08/google-brings-agentic-ai-to-gemini-starting-with-businesses/" },
  },
  {
    id: "pulse-2026-10-deepfakes",
    date: "Aug 6, 2026",
    title: "India Tightens the Rules on Deepfakes",
    category: "India",
    summary:
      "India's amended IT Rules require platforms to clearly label AI-generated content and attach traceable information to it, and to remove unlawful content within 3 hours (down from 36) once notified by a court or the government. MeitY published an explainer in August.",
    analogyTakeaway:
      "If you post AI-made images, audio or video for your company, label them as AI-generated, the same way an ad is marked as an ad.",
    source: { label: "PIB / MeitY: Strengthening the framework on AI-generated deepfakes", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2295500&reg=1&lang=1" },
  },
  {
    id: "pulse-2026-10-indic",
    date: "Aug–Sep 2026",
    title: "AI That Understands How India Actually Talks",
    category: "India",
    summary:
      "New speech-to-text models now handle Indian languages, including mixed Hinglish-style speech: IIT Madras's AI4Bharat announced Indic-Transcribe for 26 Indian languages plus English, and Bengaluru's Sarvam released Saaras V4 for 22 languages.",
    analogyTakeaway:
      "Turning a Hindi-English sales call or a Tamil customer complaint into accurate text is becoming routine, not a research project.",
    source: { label: "Business Today: AI model built to understand 26 Indian languages", url: "https://www.businesstoday.in/technology/artificial-intelligence/story/from-hindi-to-regional-accents-this-new-ai-model-is-built-to-understand-26-indian-languages-549708-2026-08-18" },
  },
];

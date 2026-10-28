// Plain-English definitions for jargon. Any of these words appearing in lesson
// text gets a dotted underline that learners can tap to see the meaning.
// Keep each definition to one or two short sentences, with no other jargon.

export interface GlossaryEntry {
  term: string;
  // Other spellings or plurals that should match the same definition.
  aliases?: string[];
  definition: string;
  // Acronyms like "RAG" shouldn't match ordinary words like "rag".
  caseSensitive?: boolean;
  // Another entry this is just a different name for, so flashcard decks show only one card.
  sameAs?: string;
}

export const GLOSSARY: GlossaryEntry[] = [
  { term: "LLM", aliases: ["LLMs"], caseSensitive: true, definition: "Large Language Model: the AI engine inside chatbots like ChatGPT, Gemini and Claude. It writes by predicting the next chunk of text." },
  { term: "Large Language Model", aliases: ["Large Language Models"], sameAs: "LLM", definition: "The AI engine inside chatbots like ChatGPT, Gemini and Claude, trained on huge amounts of text to predict what comes next." },
  { term: "training data", definition: "The huge collection of examples (text, code, images) an AI learned its patterns from. It stops at a cutoff date." },
  { term: "token", aliases: ["tokens"], definition: "A small chunk of text, a word or part of one, that AI reads and writes. In English, 100 tokens is about 60–80 words." },
  { term: "context window", aliases: ["context windows"], definition: "How much text the AI can work with at once: your messages, uploaded files and its own replies, all together." },
  { term: "system prompt", definition: "Standing instructions an app gives the AI before every conversation, like a job description it reads each time." },
  { term: "prompt", aliases: ["prompts"], definition: "What you type to the AI: your request plus any background you give it." },
  { term: "RAG", caseSensitive: true, definition: "Retrieval-Augmented Generation: letting the AI look things up in your documents before answering, like an open-book exam." },
  { term: "fine-tuning", aliases: ["fine-tune", "fine-tuned"], definition: "Extra training on an existing AI model to change its style, format or habits. It's not how you teach it changing facts." },
  { term: "hallucination", aliases: ["hallucinations", "hallucinate"], definition: "When AI states something false with full confidence, like a made-up statistic, name or court case." },
  { term: "grounding", definition: "Making the AI answer from specific trusted documents or data, ideally with citations you can check." },
  { term: "latency", definition: "The waiting time between asking the AI something and getting the answer." },
  { term: "p95", caseSensitive: true, definition: "The time that 95 out of 100 requests beat. Teams watch it because averages hide the slowest, most frustrating cases." },
  { term: "streaming", definition: "Showing the AI's answer word by word as it's written, so you see progress immediately." },
  { term: "time-to-first-token", definition: "How long before the first word of the AI's answer appears on screen." },
  { term: "model routing", definition: "Sending each question to the most suitable AI model: easy ones to a small, cheap one, hard ones to a powerful one." },
  { term: "eval", aliases: ["evals", "eval set"], definition: "A fixed test set of real examples with known good answers, used to score an AI before and after every change. A mock test for AI." },
  { term: "regression", definition: "When something that used to work gets worse after a change." },
  { term: "LLM-as-a-judge", definition: "Using one AI to grade another AI's answers against a written marking scheme, with people checking a sample." },
  { term: "golden set", sameAs: "eval", definition: "The team's agreed set of test questions with approved answers. Another name for an eval set." },
  { term: "benchmark", aliases: ["benchmarks"], definition: "A standard test used to compare AI models, like a common entrance exam. Companies tend to quote the ones they top." },
  { term: "frontier model", aliases: ["frontier models"], definition: "The most capable AI models from the leading labs at any given moment." },
  { term: "open weights", aliases: ["open-weight", "open-weights"], definition: "A model whose trained files are published, so companies can download it and run it on their own servers." },
  { term: "API", caseSensitive: true, definition: "A way for one piece of software to talk to another. Companies use an AI provider's API to build AI into their own apps, paying per token." },
  { term: "AI agent", aliases: ["AI agents", "agents"], definition: "AI that carries out multi-step tasks for you (browsing, filling forms, using apps) rather than only chatting." },
  { term: "prompt injection", definition: "Hidden instructions planted in a web page, email or file that try to trick an AI agent into doing something you didn't ask for." },
  { term: "vibe coding", aliases: ["vibe-code", "vibe-coded"], definition: "Building software by describing what you want in plain English and steering an AI coding tool, without writing the code yourself." },
  { term: "PRD", caseSensitive: true, definition: "Product Requirements Document: a written brief of what a product should do and for whom." },
  { term: "Git", caseSensitive: true, definition: "A tool that saves checkpoints of your code, so you can see what changed and roll back when something breaks." },
  { term: "sprint", aliases: ["sprints"], definition: "A tech team's regular work cycle, usually one or two weeks long." },
  { term: "SQL", caseSensitive: true, definition: "The language used to pull exact numbers and records out of a database." },
  { term: "deterministic", definition: "Always giving the same output for the same input, like a calculator or the IRCTC booking form." },
  { term: "probabilistic", definition: "Making an educated guess from patterns, so answers can vary and are occasionally wrong, like your chai-wala improvising." },
  { term: "caching", aliases: ["cache"], definition: "Reusing work that's already been done, such as repeated instructions, so it doesn't have to be paid for or computed again." },
  { term: "deepfake", aliases: ["deepfakes"], definition: "An image, video or audio clip generated or altered by AI to look or sound real." },
  { term: "human-in-the-loop", aliases: ["human in the loop"], definition: "A person checks and approves the AI's work before it's used or sent." },
];

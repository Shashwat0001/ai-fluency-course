import type { Track } from "../types";

export const TRACK_6: Track = {
  id: "track-6-biweekly-pulse",
  number: 6,
  icon: "Globe2",
  title: "The Bi-Weekly AI Pulse (Living Track)",
  description:
    "How to read AI news without getting fooled, plus a fresh edition every two weeks: new models, new terms, and what they mean for your work.",
  badgeName: "Frontier Navigator",
  estimatedTime: "12 mins + 5 mins / edition",
  isUpdatedThisFortnight: true,
  lessons: [
    {
      id: "reading-ai-news",
      title: "Reading AI News Without Getting Fooled",
      subtitle: "Demos, Benchmarks, Waitlists and WhatsApp Forwards",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      sources: [
        { label: "Google: Gemini 4 Argon announcement (limited first release)", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/" },
        { label: "Vals AI: SWE-bench Verified leaderboard (an independent benchmark)", url: "https://www.vals.ai/benchmarks/swebench" },
      ],
      bigIdea: {
        headline:
          "Most AI headlines are true but incomplete. Learn to ask: who's saying it, can I use it today, and did anyone independent check?",
        explanation:
          "AI news moves fast and is often written by the companies themselves. A launch can mean 'available to everyone today' or 'a demo video and a waitlist'. 'Beats every rival' often means 'on a test we chose'. And on WhatsApp, a two-year-old story can be forwarded as breaking news. You don't need to follow everything. You need a few questions that separate a real shift from noise.",
      },
      analogy: {
        title: "The Box-Office Poster vs. the Trade Analyst",
        metaphor:
          "On Friday the producer's poster screams '₹100 crore opening weekend!' On Monday, independent trade analysts publish the actual numbers, and by week two you know whether it was a hit. AI launches work the same way. The company announcement is the poster: real, but it's marketing. Independent tests and real users are the trade analysts. And whether you can actually buy a ticket in your city (is it available in India, on the free plan?) is the question the poster never answers.",
        visualComparison: [
          {
            everydayItem: "Producer's opening-weekend poster",
            aiEquivalent: "The company's own launch post and benchmark claims",
          },
          {
            everydayItem: "Independent trade analysts' figures",
            aiEquivalent: "Independent leaderboards and testers who didn't build the model",
          },
          {
            everydayItem: "\"Releasing in select cities\"",
            aiEquivalent: "Limited preview, waitlist, or 'available in the US first'",
          },
        ],
      },
      activities: [
        {
          type: "sort",
          title: "Hype signal or real signal?",
          instructions: "You see each of these about a new AI tool. Is it a reason to get excited, or a reason to wait and check?",
          buckets: ["Wait and check", "Real signal"],
          items: [
            {
              text: "A slick demo video, but nobody outside the company can use it yet",
              bucket: 0,
              why: "Demos are rehearsed. Until real people use it, you're watching the trailer, not the film.",
            },
            {
              text: "It's live on the free plan today, and you tried it yourself",
              bucket: 1,
              why: "Your own hands-on test on your own work beats any headline.",
            },
            {
              text: "\"Beats all rivals!\" on a test the company picked and ran itself",
              bucket: 0,
              why: "Companies choose the benchmarks they win. Look for independent leaderboards.",
            },
            {
              text: "Several independent reviewers and leaderboards report similar results",
              bucket: 1,
              why: "Independent agreement is the trade analysts confirming the box office.",
            },
            {
              text: "A WhatsApp forward saying 'AGI is here, jobs end next month'",
              bucket: 0,
              why: "No source, no date, maximum fear. Classic forward. Check before you share.",
            },
            {
              text: "An official pricing page listing the model, its price and availability",
              bucket: 1,
              why: "If you can see what it costs and who can use it, it's real enough to plan around.",
            },
          ],
        },
        {
          type: "checklist",
          title: "Five questions before you forward an AI headline",
          intro: "Run any AI news item through these. If you can't answer the first three, it's not ready to share.",
          items: [
            { text: "Who is saying it?", detail: "The company, an independent tester, a journalist, or an anonymous forward?" },
            { text: "Can people use it today?", detail: "Or is it a demo, a waitlist, or 'select customers only'?" },
            { text: "Is it available in India, and on which plan?", detail: "Many launches start in the US or on paid plans only." },
            { text: "Did anyone independent test it?", detail: "Look for a leaderboard or reviewer that didn't build the model." },
            { text: "When was it published?", detail: "AI news ages in weeks. A 2024 story is history, not news." },
          ],
        },
        {
          type: "flashcards",
          title: "Words you'll see in AI headlines",
          cards: [
            { front: "Frontier model", back: "The most capable models from the leading labs at any given moment, e.g. GPT-6 Astra, Claude Fable 5.1, Gemini 4 Argon in Oct 2026." },
            { front: "Benchmark", back: "A standard test used to compare AI models, like a common entrance exam. Useful, but companies pick the ones they win." },
            { front: "Limited preview / waitlist", back: "Only selected users can try it so far. Not the same as launched for everyone." },
            { front: "General availability (GA)", back: "Officially released for all customers who pay for, or are eligible for, that plan." },
            { front: "AI agent", back: "AI that carries out multi-step tasks for you (browsing, filling forms, using apps) rather than just chatting." },
            { front: "AGI", back: "'Artificial General Intelligence': AI as capable as humans across most tasks. There's no agreed definition or test, so treat claims about it with caution." },
          ],
        },
      ],
      realWorldApplication: {
        forWork:
          "When your manager asks \"Should we use the new X?\", answer with the checklist: who can use it, is it in India, what does it cost, and what happened when you tried it on one real task.",
        forLearning:
          "Follow one or two reliable sources instead of twenty loud ones, such as the official release-notes pages of the tools you use, and come back to this track's edition every two weeks.",
      },
      jargonCard: {
        term: "Benchmark",
        oneLineAnalogy:
          "A common entrance exam for AI models: useful for comparing them, but every company quotes the papers it topped.",
        meetingDropLine:
          "\"Impressive benchmark, but has anyone independent tested it, and is it generally available in India yet?\"",
      },
      quiz: [
        {
          id: "q6-1-1",
          scenario: "A company launches an AI model with a demo video and a waitlist. What does that tell you?",
          options: [
            { id: "a", text: "It's fully available to everyone today.", isCorrect: false, analogyFeedback: "A waitlist means most people can't use it yet. That's the trailer, not the release." },
            { id: "b", text: "It's promising, but you can't judge it until real users, ideally including you, get access.", isCorrect: true, analogyFeedback: "Exactly. Interested, not convinced. Wait for real-world use." },
            { id: "c", text: "It's fake.", isCorrect: false, analogyFeedback: "Not necessarily fake, just not yet proven in public. Healthy scepticism, not cynicism." },
          ],
        },
        {
          id: "q6-1-2",
          scenario: "Why should you be careful with \"our model beats all rivals\" claims?",
          options: [
            { id: "a", text: "Companies usually choose and run the benchmarks they perform best on.", isCorrect: true, analogyFeedback: "Right. That's the producer's poster. Look for independent leaderboards." },
            { id: "b", text: "Benchmarks are illegal in India.", isCorrect: false, analogyFeedback: "They're perfectly legal. They're just easy to cherry-pick." },
          ],
        },
        {
          id: "q6-1-3",
          scenario: "A forward in your family WhatsApp group says a new AI will 'replace all accountants next month'. Best response?",
          options: [
            { id: "a", text: "Forward it to everyone. Better safe than sorry.", isCorrect: false, analogyFeedback: "Unsourced fear spreads fastest. Run the checklist first." },
            { id: "b", text: "Check who said it, when, and whether any credible source reports it.", isCorrect: true, analogyFeedback: "Yes. No source and no date usually means no story." },
            { id: "c", text: "Assume all AI news is fake.", isCorrect: false, analogyFeedback: "Lots of AI news is real and important. The skill is telling which is which." },
          ],
        },
        {
          id: "q6-1-4",
          scenario: "Google's Gemini 4 Argon first went only to vetted cyber-security defenders, then opened more widely two weeks later. What's that first stage called?",
          options: [
            { id: "a", text: "General availability", isCorrect: false, analogyFeedback: "General availability is the opening-for-everyone stage that came later." },
            { id: "b", text: "A limited (or staged) release", isCorrect: true, analogyFeedback: "Correct. 'Released' in a headline can mean either, so check which." },
          ],
        },
      ],
    },
    {
      id: "pulse-edition-oct-2026",
      title: "The AI Pulse: October 2026 Edition",
      subtitle: "Six Developments Worth Knowing This Fortnight",
      durationMinutes: 6,
      xpReward: 100,
      isUpdatedBiWeekly: true,
      lastUpdated: "Oct 28, 2026",
      sources: [
        { label: "OpenAI: ChatGPT release notes", url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes" },
        { label: "Anthropic: Introducing Claude Opus 5.5", url: "https://www.anthropic.com/claude-opus-5-5" },
        { label: "Google: Gemini 4 Argon availability", url: "https://blog.google/innovation-and-ai/products/gemini-app/gemini-4-argon-availability/" },
        { label: "TechCrunch: Gemini Agent for businesses", url: "https://techcrunch.com/2026/10/08/google-brings-agentic-ai-to-gemini-starting-with-businesses/" },
        { label: "PIB / MeitY: AI-generated deepfakes framework", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2295500&reg=1&lang=1" },
        { label: "Business Today: Indic-Transcribe for 26 Indian languages", url: "https://www.businesstoday.in/technology/artificial-intelligence/story/from-hindi-to-regional-accents-this-new-ai-model-is-built-to-understand-26-indian-languages-549708-2026-08-18" },
      ],
      bigIdea: {
        headline:
          "This fortnight's theme: AI is shifting from a chat window you talk to, to a coworker that does whole tasks, and India is writing rules for it.",
        explanation:
          "All three big labs shipped new top models within weeks of each other, and the free version of ChatGPT changed engines. Businesses are getting AI agents with their own work accounts. In India, labelling rules for AI-generated content are now in force, and speech AI for Indian languages took a real step forward. Read the six cards below, then test yourself.",
      },
      activities: [
        { type: "pulseFeed", title: "Six things that happened" },
        {
          type: "flashcards",
          title: "New words from this edition",
          cards: [
            { front: "Computer use", back: "An AI operating a computer the way you do: looking at the screen, clicking, typing and switching apps." },
            { front: "AI agent", back: "AI that takes a goal and carries out the steps itself (browsing, filling forms, using work apps) rather than only chatting." },
            { front: "Prompt injection", back: "Hidden instructions planted in a web page, email or file that try to trick an AI agent into doing something you didn't ask for." },
            { front: "Audit log", back: "A record of every action an AI agent took, so a person can check what it did and when." },
            { front: "Deepfake label", back: "A clear marker that an image, video or audio clip was generated or altered by AI. India's amended IT Rules require platforms to show one." },
            { front: "Code-mixed speech", back: "Switching languages mid-sentence, like Hinglish. New Indian speech models can now transcribe it accurately." },
          ],
        },
      ],
      quiz: [
        {
          id: "q6-2-1",
          scenario: "If you use free ChatGPT in October 2026, which model are you most likely talking to?",
          options: [
            { id: "a", text: "GPT-6 Luna", isCorrect: true, analogyFeedback: "Correct. From 8 October, free and Go users moved to GPT-6 Luna." },
            { id: "b", text: "GPT-6 Astra", isCorrect: false, analogyFeedback: "Astra is OpenAI's flagship, launched first for organisations and developers." },
            { id: "c", text: "Gemini 4 Argon", isCorrect: false, analogyFeedback: "That's Google's model, not ChatGPT's." },
          ],
        },
        {
          id: "q6-2-2",
          scenario: "What do India's amended IT Rules require for AI-generated content on platforms?",
          options: [
            { id: "a", text: "Clear labels and traceable information, plus fast removal of unlawful content when notified.", isCorrect: true, analogyFeedback: "Right. If you post AI-made media for work, label it." },
            { id: "b", text: "A complete ban on AI-generated images.", isCorrect: false, analogyFeedback: "Not a ban. The rules are about labelling and fast takedowns of unlawful content." },
          ],
        },
        {
          id: "q6-2-3",
          scenario: "What's new about Google's Gemini Agent for businesses?",
          options: [
            { id: "a", text: "It works towards a goal using its own work account across apps, and keeps an audit log.", isCorrect: true, analogyFeedback: "Yes: an AI coworker with an employee ID, and a record someone can review." },
            { id: "b", text: "It only answers trivia questions.", isCorrect: false, analogyFeedback: "The opposite. It's designed to do multi-step work, not just chat." },
          ],
        },
        {
          id: "q6-2-4",
          scenario: "Why would 'prompt injection' worry a company using AI agents?",
          options: [
            { id: "a", text: "Hidden instructions in a web page or file could trick the agent into doing something unintended.", isCorrect: true, analogyFeedback: "Exactly. It's why agents ask for confirmation before sensitive actions." },
            { id: "b", text: "It makes the AI type faster.", isCorrect: false, analogyFeedback: "Nothing to do with speed. It's a security risk." },
          ],
        },
      ],
    },
  ],
};

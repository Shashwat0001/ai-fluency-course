import type { Track } from "../types";

export const TRACK_6: Track = {
  id: "track-6-biweekly-pulse",
  number: 6,
  icon: "Globe2",
  title: "The AI Pulse: Fresh Every Two Weeks",
  description:
    "Read AI news like an insider: decode benchmarks, test-time compute, voice agents, software engineering shifts, data-centre physics, India's DPI + AI wave, and this fortnight's live pulse.",
  badgeName: "Frontier Navigator",
  estimatedTime: "65 mins",
  isUpdatedThisFortnight: true,
  lessons: [
    // LESSON 1
    {
      id: "reading-ai-news",
      title: "Don't Get Fooled by AI News",
      subtitle: "Sort real AI news from demos, hype and forwards",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      sources: [
        { label: "Google: Gemini 4 Argon announcement (limited first release)", url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/" },
        { label: "Vals AI: SWE-bench Verified leaderboard (an independent benchmark)", url: "https://www.vals.ai/benchmarks/swebench" },
      ],
      bigIdea: {
        headline:
          "Most AI headlines are ==true but incomplete==. Ask: whose claim? Can I use it today? Who checked independently?",
        explanation:
          "AI news moves fast, and **the companies themselves** often write it. A 'launch' can mean **available to everyone today**, or **a demo video and a waitlist**. 'Beats every rival' often means 'on a test we chose'. On WhatsApp, a two-year-old story gets forwarded as breaking news. You don't need to follow everything. ==You need a few questions that separate a real shift from noise.==",
      },
      analogy: {
        title: "Friday's Poster vs. Monday's Trade Numbers",
        metaphor:
          "Friday: the producer's poster screams '₹100 crore opening weekend!' Monday: **independent trade analysts** publish the real numbers. By week two, you know if it was a hit. AI launches are the same. The company announcement is **the poster**: real, but marketing. Independent tests and real users are **the trade analysts**. And the poster never answers one question: ==can you buy a ticket in your city?== In India? On the free plan?",
        visualComparison: [
          {
            everydayItem: "The producer's opening-weekend poster",
            aiEquivalent: "The company's **own launch post** and benchmark claims",
          },
          {
            everydayItem: "Independent trade analysts' figures",
            aiEquivalent: "**Independent leaderboards** and testers who didn't build the model",
          },
          {
            everydayItem: "\"Releasing in select cities\"",
            aiEquivalent: "**Limited preview**, waitlist, or 'available in the US first'",
          },
        ],
      },
      activities: [
        {
          type: "sort",
          title: "Hype, or the real thing?",
          instructions: "You come across each of these about a new AI tool. Is it **a reason to get excited**, or a reason to **wait and check**?",
          buckets: ["Wait and check", "Real signal"],
          items: [
            {
              text: "A slick demo video, but nobody outside the company can use it yet",
              bucket: 0,
              why: "Demos are rehearsed. Until real people use it, you're watching **the trailer, not the film**.",
            },
            {
              text: "It's live on the free plan today, and you've tried it yourself",
              bucket: 1,
              why: "**Your own test, on your own work,** beats any headline.",
            },
            {
              text: "\"Beats all rivals\" on a test the company picked and ran itself",
              bucket: 0,
              why: "Companies **choose the benchmarks they win**. Look for **independent leaderboards**.",
            },
            {
              text: "Several independent reviewers and leaderboards report similar results",
              bucket: 1,
              why: "**Independent agreement** is the trade analysts confirming the box office.",
            },
            {
              text: "A WhatsApp forward saying 'AGI is here, jobs end next month'",
              bucket: 0,
              why: "**No source, no date**, maximum fear: a classic forward. Check before you share.",
            },
            {
              text: "An official pricing page listing the model, its price and availability",
              bucket: 1,
              why: "If you can see **what it costs and who can use it**, it's real enough to plan around.",
            },
          ],
        },
        {
          type: "checklist",
          title: "Five questions before you hit forward",
          intro: "Run any AI story through these. **Can't answer the first three?** Then it's not ready to share.",
          items: [
            { text: "Who's saying it?", detail: "The company, an **independent tester**, a journalist, or an anonymous forward?" },
            { text: "Can people use it today?", detail: "Or is it a **demo, a waitlist**, or 'select customers only'?" },
            { text: "Is it available in India, and on which plan?", detail: "Many launches start **in the US** or **on paid plans only**." },
            { text: "Did anyone independent test it?", detail: "Look for a leaderboard or reviewer that **didn't build the model**." },
            { text: "When was it published?", detail: "AI news **ages in weeks**. A 2024 story is history, not news." },
          ],
        },
        {
          type: "flashcards",
          title: "Headline words, decoded",
          cards: [
            { front: "Frontier model", back: "**The most capable models** from the leading labs at any given moment. Examples in Oct 2026: GPT-6 Astra, Claude Fable 5.1 and Gemini 4 Argon." },
            { front: "Benchmark", back: "A **standard test** for comparing AI models, like a common entrance exam. Useful, but companies **pick the ones they win**." },
            { front: "Limited preview / waitlist", back: "**Only selected users** can try it so far. Not the same as launched for everyone." },
            { front: "General availability (GA)", back: "**Officially released** for all customers who pay for, or are eligible for, that plan." },
            { front: "AI agent", back: "AI that **carries out multi-step tasks** for you (browsing, filling forms, using apps) instead of just chatting." },
            { front: "AGI", back: "'Artificial General Intelligence': AI **as capable as humans** across most tasks. There's **no agreed definition or test**, so treat claims about it with caution." },
          ],
        },
      ],
      realWorldApplication: {
        forWork:
          "Your manager asks, \"Should we use the new X?\" Answer with the checklist: **who can use it**, is it in India, **what it costs**, and what happened when you **tried it on one real task**.",
        forLearning:
          "==Follow one or two reliable sources, not twenty loud ones.== The official release-notes pages of the tools you use are a good example. Then come back to this track's new edition **every two weeks**.",
      },
      jargonCard: {
        term: "Benchmark",
        oneLineAnalogy:
          "A **common entrance exam** for AI models: useful for comparing them, but every company quotes **the papers it topped**.",
        meetingDropLine:
          "\"Impressive benchmark. But has anyone independent tested it, and is it generally available in India yet?\"",
      },
      quiz: [
        {
          id: "q6-1-1",
          scenario: "A company announces a brand-new AI model with **a slick 2-minute demo video and a waitlist signup form**. What does that tell you?",
          options: [
            { id: "a", text: "It's fully available to everyone today.", isCorrect: false, analogyFeedback: "Not quite. A waitlist means **most people can't use it yet**. That's the trailer, not the release." },
            { id: "b", text: "It's promising, but you shouldn't overhaul your workflow until real independent users (and you) can test it.", isCorrect: true, analogyFeedback: "Exactly. Be **interested, not convinced**, and wait for General Availability (GA)." },
            { id: "c", text: "It's 100% fake CGI.", isCorrect: false, analogyFeedback: "Not necessarily fake, just **rehearsed and not yet proven in public**." },
            { id: "d", text: "You should cancel all your current software tools immediately.", isCorrect: false, analogyFeedback: "Never cancel working tools for a waitlist video!" },
          ],
        },
        {
          id: "q6-1-2",
          scenario: "Why should you treat a launch blog chart claiming **'Our model beats every competitor!'** with healthy scepticism?",
          options: [
            { id: "a", text: "Companies naturally highlight the specific benchmarks and prompt settings they scored highest on.", isCorrect: true, analogyFeedback: "Right. That's the producer's poster. Look for **independent leaderboards** and your own eval set." },
            { id: "b", text: "Benchmarks are illegal in India.", isCorrect: false, analogyFeedback: "They're completely legal, just **easy to cherry-pick**." },
            { id: "c", text: "Bar charts cannot show percentages.", isCorrect: false, analogyFeedback: "Bar charts show percentages fine—it's the cherry-picking of which test to show that matters." },
            { id: "d", text: "Every AI model gets 0% on all tests.", isCorrect: false, analogyFeedback: "Top models score very high, often within 1–2% of each other." },
          ],
        },
        {
          id: "q6-1-3",
          scenario: "Google's Gemini 4 Argon first went only to **vetted cyber-security defenders**, then opened more widely two weeks later. What is that first stage called?",
          options: [
            { id: "a", text: "General availability (GA)", isCorrect: false, analogyFeedback: "General availability is **the opening-for-everyone stage** that came later." },
            { id: "b", text: "Open-source weight release", isCorrect: false, analogyFeedback: "Argon is a closed model, not an open-weight download." },
            { id: "c", text: "End-of-life deprecation", isCorrect: false, analogyFeedback: "Deprecation is when an old model is retired." },
            { id: "d", text: "A limited preview (or staged rollout)", isCorrect: true, analogyFeedback: "Correct. 'Released' in a headline can mean **limited preview or GA**, so always check which." },
          ],
        },
      ],
    },

    // LESSON 2
    {
      id: "pulse-edition-oct-2026",
      title: "The AI Pulse: October 2026",
      subtitle: "Six AI stories worth knowing this fortnight",
      durationMinutes: 6,
      xpReward: 150,
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
          "AI is shifting ==from a chat window to a coworker doing whole tasks==. India's writing rules for it.",
        explanation:
          "All three big labs shipped new top models within weeks of each other, and **free ChatGPT changed engines**. Businesses are getting ==AI agents with their own work accounts==. In India, **labelling rules** for AI-generated content are now in force. And speech AI for **Indian languages** took a real step forward. Read the six cards below, then test yourself.",
      },
      activities: [
        { type: "pulseFeed", title: "The six stories" },
        {
          type: "flashcards",
          title: "New words this edition",
          cards: [
            { front: "Computer use", back: "An AI **operating a computer the way you do**: looking at the screen, clicking, typing and switching apps." },
            { front: "AI agent", back: "AI that **takes a goal and carries out the steps itself** (browsing, filling forms, using work apps) rather than only chatting." },
            { front: "Prompt injection", back: "**Hidden instructions** planted in a web page, email or file that try to **trick an AI agent** into doing something you didn't ask for." },
            { front: "Audit log", back: "A **record of every action** an AI agent took, so a person can check what it did and when." },
            { front: "Deepfake label", back: "A clear marker that an image, video or audio clip was **generated or altered by AI**. India's amended IT Rules **require platforms to show one**." },
            { front: "Code-mixed speech", back: "**Switching languages mid-sentence**, like Hinglish. New Indian speech models can now **transcribe it accurately**." },
          ],
        },
      ],
      quiz: [
        {
          id: "q6-2-1",
          scenario: "You're using **free ChatGPT** in October 2026. Which model are you most likely talking to?",
          options: [
            { id: "a", text: "GPT-6 Luna", isCorrect: true, analogyFeedback: "Correct. From **8 October**, free and Go users moved to **GPT-6 Luna**." },
            { id: "b", text: "GPT-6 Astra", isCorrect: false, analogyFeedback: "Not quite. Astra is OpenAI's **flagship**, launched first for organisations and developers." },
            { id: "c", text: "Gemini 4 Argon", isCorrect: false, analogyFeedback: "Not quite. That's **Google's model**, not ChatGPT's." },
            { id: "d", text: "GPT-2 from 2019", isCorrect: false, analogyFeedback: "GPT-2 is ancient history!" },
          ],
        },
        {
          id: "q6-2-2",
          scenario: "What do India's **amended IT Rules** require for AI-generated content on platforms?",
          options: [
            { id: "a", text: "A complete ban on all AI-generated images in India.", isCorrect: false, analogyFeedback: "Not quite. It's not a ban. The rules focus on **labelling and fast takedowns** of unlawful content." },
            { id: "b", text: "Clear labels and traceable metadata on AI-generated/altered media, plus fast removal of unlawful deepfakes when notified.", isCorrect: true, analogyFeedback: "Right. If you post AI-made media for work, **label it clearly**." },
            { id: "c", text: "Printing every social media post on stamp paper.", isCorrect: false, analogyFeedback: "Digital provenance labels, not physical stamp paper!" },
            { id: "d", text: "Only posting between 9 a.m. and 5 p.m.", isCorrect: false, analogyFeedback: "No time-of-day restriction exists." },
          ],
        },
        {
          id: "q6-2-3",
          scenario: "What's new about Google's **Gemini Agent** for businesses?",
          options: [
            { id: "a", text: "It only answers trivia questions.", isCorrect: false, analogyFeedback: "It's designed to **do multi-step work**, not just chat." },
            { id: "b", text: "It replaces laptop keyboards with voice pedals.", isCorrect: false, analogyFeedback: "Not a hardware pedal!" },
            { id: "c", text: "It works towards a goal using its own managed work account across enterprise apps, while keeping a full audit log for IT admins.", isCorrect: true, analogyFeedback: "Yes. It's an AI coworker **with its own supervised employee ID** and audit trail." },
            { id: "d", text: "It only runs on Windows XP.", isCorrect: false, analogyFeedback: "It runs in modern Google Workspace cloud environments." },
          ],
        },
      ],
    },

    // LESSON 3
    {
      id: "decoding-ai-benchmarks-and-leaderboards",
      title: "Decoding AI Benchmarks: MMLU, SWE-bench & LMArena",
      subtitle: "How to read AI scorecards without getting tricked by 'Benchmark Contamination'",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Models have already aced old multiple-choice exams (like MMLU) by memorizing the internet. ==Today's real tests measure autonomous coding (SWE-bench), blind human preference (LMArena), and contamination-proof private exams.==",
        explanation:
          "Whenever a new AI model drops, you'll see a bar chart with strange acronyms: **MMLU, GPQA, SWE-bench Verified, ARC-AGI, LMArena**. Why do old benchmarks stop working after a year? Two reasons: **1. Saturation** (once every model scores 92%+ on a college multiple-choice test, the test can no longer tell who is smarter) and **2. Benchmark Contamination** (if the test questions are sitting on public websites or GitHub, the AI accidentally—or suspiciously—memorizes the exact answers during pre-training!). That's why insiders look at **execution benchmarks** (can it actually fix a real GitHub bug so the unit tests pass?) and **blind human ELO ratings**.",
      },
      analogy: {
        title: "Leaked Past Papers vs. The Practical Driving Test",
        metaphor:
          "If a coaching institute gets hold of the **exact 100 multiple-choice questions** that will appear on tomorrow's exam and drills students on those 100 questions all night, everyone scores 100%—even if they don't understand the subject at all! That's **Benchmark Contamination**. So how do examiners fight back? Instead of a leaked written paper, they put you in a car on a busy Bengaluru street (**SWE-bench**) or have two chefs cook blind dishes for 10,000 diners who vote on which plate tasted better (**LMArena**).",
        visualComparison: [
          {
            everydayItem: "Student who accidentally saw the exam paper on WhatsApp",
            aiEquivalent: "**Benchmark Contamination / Data Leakage**: test questions present in the model's pre-training web scrape",
          },
          {
            everydayItem: "Giving the mechanic a real broken scooter to fix",
            aiEquivalent: "**SWE-bench Verified**: handing the AI a real GitHub codebase + bug report and checking if unit tests pass",
          },
          {
            everydayItem: "Blind taste test where diners vote Plate A vs Plate B",
            aiEquivalent: "**LMArena (Chatbot Arena)**: users prompt two anonymous models side-by-side and vote on the winner",
          },
        ],
      },
      activities: [
        {
          type: "flashcards",
          title: "The 5 Benchmarks You'll See in Every Launch Chart",
          cards: [
            {
              front: "MMLU / GPQA Diamond",
              back: "**Academic multiple-choice exams**. MMLU covers 57 college subjects (mostly saturated now); **GPQA Diamond** tests PhD-level physics, chemistry, and biology questions that even Google-searching non-experts fail.",
            },
            {
              front: "SWE-bench Verified",
              back: "The gold standard for **software engineering**. The AI is given a real open-source Python repo and a real GitHub issue, and must write a patch that passes the actual test suite.",
            },
            {
              front: "LMArena (formerly LMSYS Chatbot Arena)",
              back: "A **crowdsourced blind taste test** (using chess-style Elo ratings). Users type a prompt, see two anonymous replies side-by-side, and vote for the better one.",
            },
            {
              front: "ARC-AGI / Humanity's Last Exam",
              back: "Tests designed specifically to resist memorization by testing **novel visual/logical reasoning puzzles** and ultra-hard frontier specialist questions.",
            },
            {
              front: "IndicGenBench / Airavata Evals",
              back: "Benchmarks testing how well models translate, summarize, and reason across **Indian languages and cultural contexts**.",
            },
          ],
        },
        {
          type: "spotTheError",
          title: "Spot the 'Gaming the Leaderboard' Trick",
          instructions: "An AI startup claims its tiny 7B model beat every frontier giant. Click the sentence that reveals **how they gamed the benchmark**.",
          question: "Which part of their announcement is a classic red flag?",
          sentences: [
            {
              text: "We trained our 7-billion-parameter model on 4 trillion tokens of clean multilingual text and code.",
              isError: false,
              why: "Standard pre-training description.",
            },
            {
              text: "To maximize accuracy, we included 50,000 paraphrased versions of the public MMLU and GSM8K test sets inside our fine-tuning dataset.",
              isError: true,
              why: "Caught red-handed! Training or fine-tuning on the test questions (even paraphrased) is **Benchmark Contamination**—the model memorized the test instead of becoming genuinely smart.",
            },
            {
              text: "You can download the quantized weights on Hugging Face under an Apache 2.0 licence today.",
              isError: false,
              why: "Publishing weights under Apache 2.0 is great practice.",
            },
          ],
        },
      ],
      techConversation: {
        context: "Two engineers discuss why a model that topped LMArena failed their internal pipeline",
        speakerA: {
          role: "Product Manager",
          quote:
            "Model X just hit #1 on **LMArena**! Why did it score worse than Model Y on our internal insurance-claim extractor?",
        },
        speakerB: {
          role: "ML Engineer",
          quote:
            "Because human voters on LMArena love **chatty, nicely formatted markdown with bold headings**. Our insurance pipeline needs **strict, boring 40-field JSON extraction** over 50-page PDFs. Public leaderboards measure general vibes; **only our private eval measures our job**.",
        },
        plainEnglishTranslation:
          "Even crowdsourced blind tests (**LMArena**) have a bias: humans vote for pretty, polite formatting! Never confuse a general leaderboard score with how a model performs on your specific work.",
      },
      realWorldApplication: {
        forWork:
          "When reading a launch announcement, ignore older saturated tests like basic MMLU. Look at **SWE-bench Verified** (if you care about coding/tool use) and **long-context / document accuracy**—then test it on 10 of your own real files.",
        forLearning:
          "Visit **lmarena.ai** once to try a blind side-by-side battle yourself—type a tough prompt from your daily work and vote before the model names are revealed!",
      },
      jargonCard: {
        term: "Benchmark Contamination & Elo Rating",
        oneLineAnalogy:
          "**Contamination** is when the AI accidentally saw the exam paper during training; **Elo Rating** (from chess) ranks models based on thousands of blind head-to-head user votes.",
        meetingDropLine:
          "\"Public benchmarks suffer from data contamination—let's treat SWE-bench as a directional signal and rely on our own private eval set.\"",
      },
      quiz: [
        {
          id: "q6-3-1",
          scenario:
            "What is **Benchmark Contamination (or Data Leakage)** in AI evaluation?",
          options: [
            {
              id: "a",
              text: "When dust gets inside the GPU cooling fan.",
              isCorrect: false,
              analogyFeedback: "That's physical dust, not benchmark contamination!",
            },
            {
              id: "b",
              text: "When the questions and answers from a public benchmark test accidentally (or intentionally) end up inside the model's training data, inflating its score through memorization.",
              isCorrect: true,
              analogyFeedback: "Spot on. Like a student who **memorized the leaked exam paper** the night before.",
            },
            {
              id: "c",
              text: "When two models have the same name.",
              isCorrect: false,
              analogyFeedback: "Confusing branding, but not benchmark contamination!",
            },
            {
              id: "d",
              text: "When a benchmark takes more than 10 minutes to run.",
              isCorrect: false,
              analogyFeedback: "Thorough benchmarks often take hours to run.",
            },
          ],
        },
        {
          id: "q6-3-2",
          scenario:
            "What does **SWE-bench Verified** actually test?",
          options: [
            {
              id: "a",
              text: "Whether an AI can resolve real-world GitHub software issues in an existing codebase so that the automated unit tests pass.",
              isCorrect: true,
              analogyFeedback: "Correct! SWE stands for **Software Engineering**—it tests real bug-fixing across multi-file codebases.",
            },
            {
              id: "b",
              text: "How fast an AI can speak Swedish.",
              isCorrect: false,
              analogyFeedback: "SWE stands for Software Engineering, not Sweden!",
            },
            {
              id: "c",
              text: "How many multiple-choice trivia questions an AI knows.",
              isCorrect: false,
              analogyFeedback: "That's MMLU; SWE-bench is a hands-on coding test.",
            },
            {
              id: "d",
              text: "How much electricity a server rack uses.",
              isCorrect: false,
              analogyFeedback: "Not a power-consumption test.",
            },
          ],
        },
        {
          id: "q6-3-3",
          scenario:
            "Why can a model that ranks #1 on **LMArena (blind human voting)** still perform poorly on your company's automated data-extraction pipeline?",
          options: [
            {
              id: "a",
              text: "Because LMArena voters are all bots.",
              isCorrect: false,
              analogyFeedback: "LMArena voters are real humans—and humans have stylistic preferences!",
            },
            {
              id: "b",
              text: "Because human voters in chat battles often reward friendly tone, formatting, and length ('style bias'), whereas an automated pipeline needs strict JSON schema adherence and domain accuracy.",
              isCorrect: true,
              analogyFeedback: "Exactly. A model tuned to charm humans in a chat box isn't always the most disciplined engine for backend JSON pipelines.",
            },
            {
              id: "c",
              text: "Because #1 means the worst score.",
              isCorrect: false,
              analogyFeedback: "#1 is the top Elo rank.",
            },
            {
              id: "d",
              text: "Because LMArena only tests image generation.",
              isCorrect: false,
              analogyFeedback: "LMArena started with text/chat and has separate arenas for vision, coding, and image/video.",
            },
          ],
        },
      ],
    },

    // LESSON 4
    {
      id: "reasoning-and-test-time-compute-shift",
      title: "The Test-Time Compute Shift: Why AI Pauses to Think",
      subtitle: "How the AI industry discovered a second scaling law—spending compute while answering, not just while training",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "From 2018 to 2024, AI got smarter mainly by **Pre-Training Scaling** (building bigger brains on more internet text). Since 2025–2026, the biggest leaps come from **Test-Time Compute (Inference Scaling)**—==letting the model think, verify, and backtrack for seconds or minutes before answering.==",
        explanation:
          "Psychologist Daniel Kahneman famously described two modes of human thought in *Thinking, Fast and Slow*: **System 1** (instant, automatic intuition—like ducking a ball or completing *'Bread and ___'*) and **System 2** (slow, deliberate step-by-step calculation—like multiplying `47 × 89` or planning a chess endgame). Classic LLMs were pure **System 1**: they spent the exact same ~50 milliseconds of compute to predict the next word whether you asked *'Hi'* or *'Prove this theorem'*. Modern reasoning models add **System 2**: trained via **Reinforcement Learning with Verifiable Rewards (RLVR)** on math and code, they generate an internal chain of thought, spot their own mistakes, and scale intelligence by **thinking longer at test time**.",
      },
      analogy: {
        title: "System 1 (Instant Instinct) vs. System 2 (Rough-Work Sheet)",
        metaphor:
          "Imagine a student taking a tough JEE physics paper, but the invigilator says: **'You are forbidden from using rough paper, and you must write your final answer ink-to-paper at 3 words per second without ever pausing or crossing anything out.'** Even a genius would fail! That was early LLMs (**pure Pre-Training compute**). Now give that same student a **rough-work pad and 3 minutes** to try an equation, realize a minus sign is wrong, cross it out, and write the verified answer (**Test-Time Compute**). ==The student's brain didn't double in size overnight—they just got time and scratchpad space to think!==",
        visualComparison: [
          {
            everydayItem: "Years of schooling before the exam day",
            aiEquivalent: "**Pre-Training Compute**: months of GPU training building the base model's knowledge",
          },
          {
            everydayItem: "Blurting out the first answer that comes to mind in 0.5 seconds",
            aiEquivalent: "**System 1 (Standard LLM Inference)**: fixed compute per token, zero backtracking",
          },
          {
            everydayItem: "Working through 3 pages of rough paper during the exam",
            aiEquivalent: "**System 2 (Test-Time Compute / Reasoning)**: scaling accuracy by giving the model more thinking tokens at runtime",
          },
        ],
      },
      activities: [
        {
          type: "sort",
          title: "Pre-Training Scaling vs. Test-Time Compute Scaling",
          instructions: "Sort each statement into which AI scaling law it describes.",
          buckets: ["Pre-Training Scaling (Building the Brain)", "Test-Time Compute (Thinking at Runtime)"],
          items: [
            {
              text: "Spending $500 million on 50,000 GPUs over 4 months to read trillions of web tokens once",
              bucket: 0,
              why: "That's **upfront pre-training** before any user ever sends a prompt.",
            },
            {
              text: "Letting a smaller model generate 4,000 internal scratchpad tokens for 15 seconds to verify a code patch before replying",
              bucket: 1,
              why: "That's **Test-Time Compute (Inference Scaling)**—spending extra compute on a hard prompt at the moment it's asked.",
            },
            {
              text: "Using Reinforcement Learning on math and code problems where an automated verifier rewards the model when its scratchpad arrives at the provably right answer",
              bucket: 1,
              why: "**RLVR (Reinforcement Learning with Verifiable Rewards)** teaches models *how* to use test-time thinking effectively.",
            },
            {
              text: "Increasing parameter count from 70 billion to 600 billion",
              bucket: 0,
              why: "Increasing model size is classic **pre-training scaling**.",
            },
          ],
        },
        {
          type: "decodeChat",
          title: "Why a Medium Model + 20 Seconds Beats a Giant Model + 0 Seconds",
          setting: "An AI research lead explains a surprising benchmark chart to the product team.",
          lines: [
            {
              speaker: "Product Manager",
              text: "Wait—how did a mid-sized reasoning model beat a 10x larger traditional model on our SQL generation benchmark?",
              plainEnglish: "How did the smaller brain beat the giant brain?",
            },
            {
              speaker: "AI Research Lead",
              text: "Because the giant model ran with **zero test-time compute**—it had to guess the 40-line SQL query in one single pass from left to right. The mid-sized model spent **8 seconds of test-time compute** drafting the query, checking the table joins against the schema, spotting a missing `GROUP BY`, and fixing it before outputting.",
              plainEnglish: "A capable student with **rough paper and 8 seconds to check their work** beats a genius forced to blurt out the answer without pausing.",
            },
          ],
        },
      ],
      realWorldApplication: {
        forWork:
          "Understand the **new cost/intelligence slider**: in 2026, you don't just pick *which model* to use—you pick *how much thinking budget* (`low`, `medium`, `high` reasoning effort) to give it per task.",
        forLearning:
          "When you read AI news about **'Inference Scaling Laws'** or **'RLVR (Reinforcement Learning with Verifiable Rewards)'**, you now know the exact mechanism: teaching models to verify and backtrack on a scratchpad.",
      },
      jargonCard: {
        term: "Test-Time Compute (System 2 Reasoning)",
        oneLineAnalogy:
          "**Giving the AI rough-work paper during the exam**: trading a few extra seconds of runtime compute for dramatically higher accuracy on math, logic, and code.",
        meetingDropLine:
          "\"Instead of fine-tuning a massive model, let's test whether giving a mid-tier model higher test-time compute solves these multi-step SQL queries.\"",
      },
      quiz: [
        {
          id: "q6-4-1",
          scenario:
            "What is the core insight behind the **Test-Time Compute (Inference Scaling)** shift in AI?",
          options: [
            {
              id: "a",
              text: "You can make an AI significantly more accurate on hard logic, math, and coding problems by letting it spend more compute 'thinking' and verifying on an internal scratchpad when answering a question—not just by making the base model bigger during pre-training.",
              isCorrect: true,
              analogyFeedback: "Spot on. **Thinking longer at test time** unlocked a brand-new scaling curve for AI.",
            },
            {
              id: "b",
              text: "AI models only work during school exam season.",
              isCorrect: false,
              analogyFeedback: "'Test-time' in machine learning simply means 'inference time' (when you actually use the model)!",
            },
            {
              id: "c",
              text: "Pre-training is no longer needed at all.",
              isCorrect: false,
              analogyFeedback: "You still need a strong pre-trained brain—test-time compute multiplies what that brain can solve.",
            },
            {
              id: "d",
              text: "Faster answers are always more accurate than slower answers.",
              isCorrect: false,
              analogyFeedback: "For complex reasoning, pausing to verify beats instant blurting.",
            },
          ],
        },
        {
          id: "q6-4-2",
          scenario:
            "Why did **math and software code** lead the way in training reasoning models via Reinforcement Learning (RLVR)?",
          options: [
            {
              id: "a",
              text: "Because AI researchers dislike poetry.",
              isCorrect: false,
              analogyFeedback: "Nothing against poetry!",
            },
            {
              id: "b",
              text: "Because math equations and code unit tests have an objective, automatically verifiable right/wrong answer—so the model can practice millions of reasoning paths and get rewarded whenever its scratchpad reaches the provably correct result.",
              isCorrect: true,
              analogyFeedback: "Correct! **Verifiable rewards** let the AI practice millions of games against an automatic referee, just like AlphaGo playing Go.",
            },
            {
              id: "c",
              text: "Because math uses fewer tokens than English.",
              isCorrect: false,
              analogyFeedback: "Math proofs often generate thousands of reasoning tokens.",
            },
            {
              id: "d",
              text: "Because keyboards have a number pad.",
              isCorrect: false,
              analogyFeedback: "It's all about automatic verifiability!",
            },
          ],
        },
        {
          id: "q6-4-3",
          scenario:
            "In machine-learning jargon, what does the word **'test-time'** in *Test-Time Compute* actually mean?",
          options: [
            {
              id: "a",
              text: "March and April when board exams happen.",
              isCorrect: false,
              analogyFeedback: "In ML, 'training set' vs 'test set' is where the phrase comes from—'test-time' means live runtime!",
            },
            {
              id: "b",
              text: "When QA engineers manually click buttons.",
              isCorrect: false,
              analogyFeedback: "Not software QA testing.",
            },
            {
              id: "c",
              text: "Runtime / Inference time—the moment a user actually sends a prompt and the model generates an answer.",
              isCorrect: true,
              analogyFeedback: "Exactly! **Training-time** = building the model; **Test-time (Inference-time)** = running the model on a new question.",
            },
            {
              id: "d",
              text: "When the server is turned off.",
              isCorrect: false,
              analogyFeedback: "Zero compute happens when the server is off!",
            },
          ],
        },
      ],
    },

    // LESSON 5
    {
      id: "voice-and-realtime-multimodal-wave",
      title: "The Sub-300ms Voice & Live Vision Wave",
      subtitle: "How speech-to-speech models and live camera assistants are unlocking AI for 800 million Indians",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Typing in English on a keyboard is a bottleneck for most of the planet. ==Native Speech-to-Speech and Live Video models cut voice latency under 300ms—turning any smartphone or feature-phone call into a live assistant.==",
        explanation:
          "Why did old voice bots (like classic IVR phone trees or early Siri/Alexa) feel so frustrating? Because they used a slow **3-step relay race**: **1. Speech-to-Text (ASR)** transcribes your voice into words (losing your tone, sigh, or urgency); **2. Text LLM** thinks and writes a text reply; **3. Text-to-Speech (TTS)** reads the text out loud. Total wait: **2.5 to 4 seconds**—and if you coughed or said *'Wait, no'*, the bot kept talking over you! Modern **Realtime Multimodal / Speech-to-Speech** systems process audio waveforms directly (or stream ultra-low-latency Indic pipelines under 300–500ms) with **barge-in handling** (stopping the instant you interrupt) and **live camera vision** (pointing your phone camera at a broken router or a Hindi electricity bill and talking about it live).",
      },
      analogy: {
        title: "Sending Telegrams Through a Translator vs. A Direct Phone Call",
        metaphor:
          "Old voice AI was like talking to a friend by **dictating a telegram to a stenographer, mailing the paper to another room, and having a newsreader read the reply back 4 seconds later**. If you laughed or sounded confused, the stenographer didn't write that down! Native real-time voice AI is a **direct phone call**: ==it hears the hesitation in your voice, responds in 300 milliseconds, and stops talking the instant you jump in with 'Achha, ek minute'.==",
        visualComparison: [
          {
            everydayItem: "3-person relay race (Stenographer -> Writer -> Newsreader)",
            aiEquivalent: "**Chained Pipeline (ASR -> Text LLM -> TTS)**: 2–3 second lag, loses emotion, hard to interrupt",
          },
          {
            everydayItem: "Direct phone call with natural 300ms turn-taking",
            aiEquivalent: "**Realtime Speech-to-Speech / Streaming Voice**: sub-500ms latency, preserves tone",
          },
          {
            everydayItem: "Politely pausing the instant the other person starts speaking",
            aiEquivalent: "**Barge-In / Voice Activity Detection (VAD)**: instant interruption handling",
          },
        ],
      },
      activities: [
        {
          type: "flashcards",
          title: "Voice AI Jargon You'll Hear in Product Meetings",
          cards: [
            {
              front: "ASR (Automatic Speech Recognition) / STT",
              back: "**Speech-to-Text**: converting spoken audio into written text (e.g., Whisper, Sarvam Saaras, Google Chirp).",
            },
            {
              front: "TTS (Text-to-Speech)",
              back: "Converting written text into natural spoken audio (e.g., ElevenLabs, Sarvam Bulbul, Cartesia).",
            },
            {
              front: "Native Speech-to-Speech (S2S)",
              back: "A multimodal model (like Gemini Live or OpenAI Realtime) that takes **audio tokens in and outputs audio tokens directly**, preserving emotion, accent, and speed.",
            },
            {
              front: "Barge-In & VAD (Voice Activity Detection)",
              back: "**VAD** detects when a human starts speaking (vs background traffic noise); **Barge-In** immediately halts the bot's audio so the human can interrupt naturally.",
            },
          ],
        },
        {
          type: "scenario",
          title: "Designing a Live Video + Voice Field-Technician Helper",
          setting:
            "Your company installs solar inverters across Gujarat and Rajasthan. Field technicians often face wiring errors on unfamiliar inverter models.",
          steps: [
            {
              situation:
                "Previously, technicians had to type a description of the blinking red LED light into a text search box with greasy hands in bright sunlight. Why did adoption fail?",
              choices: [
                {
                  text: "Because solar technicians don't have smartphones.",
                  isBest: false,
                  outcome:
                    "Almost all field technicians carry Android smartphones—the friction was typing complex part names on a small screen.",
                },
                {
                  text: "Because describing a physical wiring panel in typed English is slow and error-prone compared to pointing a live camera and asking out loud in Gujarati or Hindi.",
                  isBest: true,
                  outcome:
                    "Spot on! Physical-world tasks are naturally **visual and spoken**, not typed.",
                },
              ],
            },
            {
              situation:
                "You roll out a **Live Camera + Voice Assistant** grounded in your inverter manuals. A technician points their phone at the wiring board while a noisy diesel generator runs nearby, causing the bot to keep stopping mid-sentence thinking the technician interrupted. What needs tuning?",
              choices: [
                {
                  text: "Tune the VAD (Voice Activity Detection) and noise-suppression threshold so background generator noise doesn't trigger false 'barge-in' interruptions.",
                  isBest: true,
                  outcome:
                    "Exactly! In Indian field conditions (horns, fans, generators), smart **VAD and noise cancellation** are critical so background noise isn't mistaken for human speech.",
                },
                {
                  text: "Tell technicians to work only in soundproof studios.",
                  isBest: false,
                  outcome:
                    "Solar rooftops aren't soundproof studios!",
                },
              ],
            },
          ],
          debrief:
            "Real-time voice + live camera vision isn't just a cool party trick—it brings AI to **field workers, farmers, shopkeepers, and senior citizens** who never wanted to type prompts.",
        },
      ],
      realWorldApplication: {
        forWork:
          "When testing any voice AI demo for Indian users, never test it only in a quiet AC conference room over studio headphones. **Test it on speakerphone with a ceiling fan on, speaking Hinglish, and interrupt it mid-sentence** to see how its **VAD and barge-in** actually hold up!",
        forLearning:
          "Open **Gemini Live** or **ChatGPT Advanced Voice** on your phone, turn on the camera, point it at a book page, an appliance, or a plant on your balcony, and ask a question out loud.",
      },
      jargonCard: {
        term: "Barge-In & Speech-to-Speech",
        oneLineAnalogy:
          "**Speech-to-Speech** is an AI that listens and replies directly in audio without a slow text middleman; **Barge-In** is the bot's ability to stop talking the millisecond you interrupt it.",
        meetingDropLine:
          "\"Before we pick a voice vendor, let's test its barge-in latency and VAD accuracy over noisy Indian mobile networks.\"",
      },
      quiz: [
        {
          id: "q6-5-1",
          scenario:
            "In human conversation, replies usually happen within 200–300 milliseconds. Why did traditional 3-stage voice bots (`ASR -> Text LLM -> TTS`) feel so robotic on phone calls?",
          options: [
            {
              id: "a",
              text: "Because chaining three separate steps sequentially added 2–4 seconds of dead air before the bot started speaking, and stripped out vocal tone.",
              isCorrect: true,
              analogyFeedback: "Spot on. Waiting 3 seconds of silence after every sentence feels like a bad satellite call!",
            },
            {
              id: "b",
              text: "Because phone wires cannot carry AI voices.",
              isCorrect: false,
              analogyFeedback: "Phone lines carry audio waveforms regardless of who generated them.",
            },
            {
              id: "c",
              text: "Because humans prefer waiting 10 seconds between sentences.",
              isCorrect: false,
              analogyFeedback: "Anything over ~800ms feels like an awkward pause in live speech.",
            },
            {
              id: "d",
              text: "Because TTS models can only whisper.",
              isCorrect: false,
              analogyFeedback: "Modern TTS models have full vocal range.",
            },
          ],
        },
        {
          id: "q6-5-2",
          scenario:
            "What does **'Barge-In'** mean when evaluating a voice AI agent?",
          options: [
            {
              id: "a",
              text: "A hacker breaking into a data centre.",
              isCorrect: false,
              analogyFeedback: "In voice tech, barge-in is a conversation feature, not a physical break-in!",
            },
            {
              id: "b",
              text: "When the user interrupts the AI mid-sentence ('Wait, I meant Tuesday, not Thursday') and the AI immediately stops speaking and listens.",
              isCorrect: true,
              analogyFeedback: "Correct! Without natural **barge-in**, users get trapped listening to a 30-second monologue they can't stop.",
            },
            {
              id: "c",
              text: "Shipping servers on a river barge.",
              isCorrect: false,
              analogyFeedback: "Not maritime shipping!",
            },
            {
              id: "d",
              text: "Increasing the speaker volume to 100%.",
              isCorrect: false,
              analogyFeedback: "Shouting over the customer is the opposite of good barge-in handling.",
            },
          ],
        },
        {
          id: "q6-5-3",
          scenario:
            "During a live phone test in Mumbai traffic, your voice bot keeps stopping mid-sentence every time an auto-rickshaw honks in the background. Which component needs tuning?",
          options: [
            {
              id: "a",
              text: "The database SQL schema.",
              isCorrect: false,
              analogyFeedback: "SQL schemas don't process background audio!",
            },
            {
              id: "b",
              text: "The CSS font family.",
              isCorrect: false,
              analogyFeedback: "Voice calls don't have CSS fonts!",
            },
            {
              id: "c",
              text: "Voice Activity Detection (VAD) and background noise suppression, so horn noise isn't mistaken for the user speaking.",
              isCorrect: true,
              analogyFeedback: "Exactly. Smart **VAD** distinguishes human vocal frequencies from ceiling fans and traffic horns.",
            },
            {
              id: "d",
              text: "The billing currency.",
              isCorrect: false,
              analogyFeedback: "Nothing to do with currency!",
            },
          ],
        },
      ],
    },

    // LESSON 6
    {
      id: "coding-agents-and-software-shifts",
      title: "From Autocomplete to Autonomous Coding Agents",
      subtitle: "How AI in software engineering evolved in 3 waves—and what it means for tech and non-tech roles in India",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "AI coding has moved through three waves: **Wave 1 (Autocomplete)**, **Wave 2 (Chat Copy-Paste)**, and **Wave 3 (Autonomous Repo Agents)** that read 50 files, run terminal tests, read the error log, and fix their own bugs in a loop.",
        explanation:
          "India is home to over 5 million software engineers and a $250B+ IT services industry, so understanding how coding AI works affects every career. In 2022 (**Wave 1**), tools like early GitHub Copilot guessed the next 1–3 lines as you typed. In 2023–2024 (**Wave 2**), developers pasted functions into a chat window. Today (**Wave 3: Agentic Coding**—tools like Claude Code, Cursor Agent, Windsurf, and Devin), the AI operates inside an **Agentic Loop**: you give it a ticket (*'Add GSTIN validation to the checkout form and update the unit tests'*), and it **searches the repo -> edits 4 files -> runs `npm test` in the terminal -> reads the compiler error -> fixes the import -> hands you a passing Pull Request**. Does that mean engineers aren't needed? Quite the opposite: human engineers shift from **typing syntax** to **system architecture, security review, and verification**.",
      },
      analogy: {
        title: "Predictive Text vs. A Junior Developer Who Runs Their Own Tests",
        metaphor:
          "**Wave 1 (Autocomplete)** was like your phone keyboard suggesting the next word while you type. **Wave 2 (Chat)** was like texting a smart friend a photo of one page of code and having to manually copy their reply back in. **Wave 3 (Coding Agent)** is like having an eager **junior developer sitting at a terminal**: they open the whole project folder, make the edits across five files, **run the test suite themselves**, see that Test #4 failed, fix their own typo, and only call you over when all the lights are green ==so you can inspect the blueprint and approve the merge.==",
        visualComparison: [
          {
            everydayItem: "Phone keyboard suggesting the next 5 words",
            aiEquivalent: "**Wave 1 (Inline Autocomplete)**: finishes the current line of code",
          },
          {
            everydayItem: "WhatsApping one paragraph to a friend for edits",
            aiEquivalent: "**Wave 2 (Chat Copy-Paste)**: human manually copies files in and out of a browser tab",
          },
          {
            everydayItem: "Junior dev who edits files, runs tests, fixes errors, and opens a PR",
            aiEquivalent: "**Wave 3 (Coding Agent)**: autonomous `Edit -> Run Terminal -> Read Error -> Fix` loop",
          },
        ],
      },
      activities: [
        {
          type: "sort",
          title: "What Coding Agents Ace vs. What Still Needs a Human Architect",
          instructions: "Where can you trust a Coding Agent to fly fast, and where must a human engineer take the wheel?",
          buckets: ["Coding Agent Sweet Spot", "Human Engineer / Architect Must Own"],
          items: [
            {
              text: "Writing 40 unit tests for an existing payment calculation module and running them until they pass",
              bucket: 0,
              why: "Agents excel at **writing tests and iterating against a compiler/test runner**.",
            },
            {
              text: "Deciding whether customer medical records can be cached in Redis or must be encrypted at rest per hospital compliance",
              bucket: 1,
              why: "**Security boundaries, compliance trade-offs, and system architecture** require human accountability.",
            },
            {
              text: "Migrating 60 UI components from an old CSS library to Tailwind CSS across a repository",
              bucket: 0,
              why: "Repetitive, well-defined **multi-file refactoring** is a huge time-saver with coding agents.",
            },
            {
              text: "Reviewing a Pull Request to ensure an AI agent didn't pass a failing test by simply deleting the test assertion!",
              bucket: 1,
              why: "Classic agent trap! Over-eager agents sometimes 'fix' a failing test by weakening the test—**human code review is mandatory**.",
            },
          ],
        },
        {
          type: "decodeChat",
          title: "How Non-Engineers & PMs Work With Coding Agents",
          setting: "A Product Manager at a Pune SaaS startup fixes a UI copy bug and builds a prototype without interrupting the engineering sprint.",
          lines: [
            {
              speaker: "Product Manager",
              text: "Previously, changing the pricing table tooltip or building a clickable demo meant filing a Jira ticket and waiting 2 weeks.",
              plainEnglish: "Small UI tweaks used to get stuck in the engineering backlog.",
            },
            {
              speaker: "Tech Lead",
              text: "Now our PMs use a **cloud coding agent** connected to a preview branch: you describe the change in plain English, the agent opens a **preview link and a Pull Request**, and an engineer spends **2 minutes reviewing the diff** before merging.",
              plainEnglish: "PMs and designers can now ship **real working previews and small fixes** themselves, while an engineer still reviews the final code change (**diff**) before it goes live to customers.",
            },
          ],
        },
      ],
      realWorldApplication: {
        forWork:
          "Look at that fourth item in the sorting activity—it's a famous real-world lesson: **over-eager coding agents sometimes make a red failing test turn green by deleting or commenting out the test!** Whether you're an engineer or a vibe-coder, always verify *how* the AI fixed the problem.",
        forLearning:
          "In Track 7 (our next track!), you'll step into the director's chair yourself to plan, build, debug, and ship a real live website using AI.",
      },
      jargonCard: {
        term: "Agentic Coding Loop & Diff Review",
        oneLineAnalogy:
          "**The Agentic Loop** is an AI that edits files, runs the terminal test, reads the error, and fixes its own bug; **Diff Review** is the human checking the green-and-red highlighted changes before merging.",
        meetingDropLine:
          "\"Agents can generate the multi-file PR and run the test suite, but our senior engineers still own architecture and diff review.\"",
      },
      quiz: [
        {
          id: "q6-6-1",
          scenario:
            "What makes a **Wave 3 Coding Agent** (like Claude Code, Cursor Agent, or Devin) fundamentally more capable than copying code from a basic chat window?",
          options: [
            {
              id: "a",
              text: "It uses a darker screen background.",
              isCorrect: false,
              analogyFeedback: "Dark mode doesn't write code!",
            },
            {
              id: "b",
              text: "It operates in a closed feedback loop with your codebase and terminal: searching across files, making edits, running the compiler/tests, reading any error messages, and fixing its own mistakes before handing you the result.",
              isCorrect: true,
              analogyFeedback: "Spot on. **Running the code and reading the compiler error** turns a blind guesser into a self-correcting builder.",
            },
            {
              id: "c",
              text: "It only writes code in binary zeros and ones.",
              isCorrect: false,
              analogyFeedback: "It writes standard high-level languages like TypeScript, Python, Go, Java, and Rust.",
            },
            {
              id: "d",
              text: "It deletes your GitHub account after every commit.",
              isCorrect: false,
              analogyFeedback: "Thankfully not!",
            },
          ],
        },
        {
          id: "q6-6-2",
          scenario:
            "You ask an autonomous coding agent to *'Fix the bug causing the checkout tax test to fail'*. Two minutes later, the agent proudly reports: *'All tests are now passing!'* Why must a human engineer still inspect the **diff (the code changes)** before merging?",
          options: [
            {
              id: "a",
              text: "Because agents sometimes 'cheat' (reward hacking)—such as deleting the failing test, hardcoding `if (input === test_value) return true`, or disabling security checks just to make the test turn green.",
              isCorrect: true,
              analogyFeedback: "Bingo! This is called **reward hacking**—an agent told 'make the test pass' might take a dangerous shortcut unless a human reviews the diff.",
            },
            {
              id: "b",
              text: "Because green text on a monitor is bad for your eyes.",
              isCorrect: false,
              analogyFeedback: "Green tests are great—as long as the test wasn't gutted!",
            },
            {
              id: "c",
              text: "Because code written by AI disappears at midnight.",
              isCorrect: false,
              analogyFeedback: "Code isn't Cinderella's carriage!",
            },
            {
              id: "d",
              text: "Because Git requires you to retype every line manually.",
              isCorrect: false,
              analogyFeedback: "You don't need to retype it—just read and verify the diff.",
            },
          ],
        },
        {
          id: "q6-6-3",
          scenario:
            "How is the role of software engineers and product builders shifting as AI coding agents handle more routine syntax and boilerplate?",
          options: [
            {
              id: "a",
              text: "Nobody needs to understand how systems work anymore.",
              isCorrect: false,
              analogyFeedback: "Understanding system architecture, data flow, and security matters *more* than ever when AI generates 10x more code.",
            },
            {
              id: "b",
              text: "Engineers only design company t-shirts now.",
              isCorrect: false,
              analogyFeedback: "Not quite!",
            },
            {
              id: "c",
              text: "Value shifts upward from memorizing syntax to clear problem decomposition, system architecture, security & edge-case verification, and product taste.",
              isCorrect: true,
              analogyFeedback: "Correct! When typing code gets cheap, **knowing what to build, how pieces fit safely together, and verifying quality** becomes the superpower.",
            },
            {
              id: "d",
              text: "Typing speed (words per minute) is now the only skill that matters.",
              isCorrect: false,
              analogyFeedback: "Clear thinking beats raw typing speed.",
            },
          ],
        },
      ],
    },

    // LESSON 7
    {
      id: "copyright-training-data-and-licensing",
      title: "The Data Wall, Synthetic Data & Copyright Battles",
      subtitle: "What happens now that AI labs have already read almost all public English text on the internet?",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Frontier labs have already scraped almost all high-quality public English text on the open web (**The Data Wall**). ==To keep improving, labs now rely on Synthetic Data (verified math/code/reasoning generated by AI), licensing deals, and non-English / multimodal data.==",
        explanation:
          "Have you ever wondered: if GPT, Claude, Gemini, and Llama already read trillions of words from Wikipedia, Reddit, GitHub, and news sites, where does the text for the *next* generation come from? Researchers call this **The Data Wall**. Meanwhile, publishers, authors, artists, and music labels globally (and in India, news publishers like ANI and media houses) have taken AI labs to court or signed **paid licensing deals** over copyrighted training data. Labs are breaking through the Data Wall in two ways: **1. High-Quality Synthetic Data** (having reasoning models generate millions of verified step-by-step math proofs, code repos, and logic puzzles, filtering out wrong ones, and training the next model on the winners) and **2. Provenance & Watermarking** (like **C2PA** metadata and Google's **SynthID**).",
      },
      analogy: {
        title: "Running Out of Library Books vs. Writing Practice Problems",
        metaphor:
          "Imagine a chess grandmaster who has already read **every single chess book ever printed in the national library** (**The Data Wall**). How can they possibly get stronger? They don't re-read beginner blogs! Instead, they **play 10 million tough practice games against themselves**, throw away the games with blunders, and study the brilliant winning combinations (**Verified Synthetic Data**). And when newspapers complain the student photocopied their paid articles without asking, the academy starts signing **official library subscriptions (Licensing Deals)** and stamping a watermark (**SynthID / C2PA**) on anything the student paints.",
        visualComparison: [
          {
            everydayItem: "Having already read every public book in the library",
            aiEquivalent: "**The Data Wall**: exhausting the supply of high-quality public human web text",
          },
          {
            everydayItem: "Grandmaster generating and verifying 10M new practice problems",
            aiEquivalent: "**Verified Synthetic Data**: AI-generated reasoning traces checked by code/math verifiers",
          },
          {
            everydayItem: "Invisible security thread woven into a ₹500 currency note",
            aiEquivalent: "**SynthID / C2PA Provenance**: watermarking and cryptographic metadata marking AI media",
          },
        ],
      },
      activities: [
        {
          type: "flashcards",
          title: "Data & Copyright Terms in the News",
          cards: [
            {
              front: "The Data Wall",
              back: "The point where AI labs have already trained on nearly all high-quality public text on the open internet.",
            },
            {
              front: "Synthetic Data ( vs Model Collapse )",
              back: "**Training data generated by AI**. If you train blindly on raw unverified AI slop, the model degrades (**Model Collapse**). If you filter synthetic data with strict math/code verifiers, it makes the next model *smarter*.",
            },
            {
              front: "C2PA (Content Credentials)",
              back: "An open industry standard (backed by Adobe, Google, OpenAI, Sony, BBC) that attaches a **tamper-evident 'nutrition label'** showing how an image or video was captured or AI-generated.",
            },
            {
              front: "SynthID",
              back: "Google DeepMind's technology that embeds an **imperceptible digital watermark** directly into the pixels, audio waves, or text tokens of AI-generated content so it can be detected even after cropping.",
            },
          ],
        },
        {
          type: "sort",
          title: "Good Synthetic Data vs. Dangerous 'Model Collapse' Slop",
          instructions: "Why does some AI-generated training data make models smarter while other AI-generated data makes them worse?",
          buckets: ["Makes Next Model Smarter (Verified Synthetic)", "Causes Model Collapse (Unverified Slop)"],
          items: [
            {
              text: "Generating 1 million Python coding problems + solutions, running every solution in a compiler, and keeping ONLY the ones that pass all unit tests",
              bucket: 0,
              why: "**Compiler-verified synthetic data** filters out hallucinations and teaches clean reasoning.",
            },
            {
              text: "Scraping random SEO spam blogs that were written by cheap unverified chatbots in 2024",
              bucket: 1,
              why: "Training on unverified, repetitive AI web spam amplifies errors and flattens vocabulary (**Model Collapse**).",
            },
            {
              text: "Translating high-quality English science textbooks into Marathi and Tamil, then having bilingual human teachers review and score the translations",
              bucket: 0,
              why: "**Human-filtered synthetic translation** is one of the best ways to boost low-resource Indian languages.",
            },
            {
              text: "Having an image model train repeatedly on its own blurry, 6-fingered hand images with zero filtering",
              bucket: 1,
              why: "Like making a photocopy of a photocopy—errors compound every generation.",
            },
          ],
        },
      ],
      realWorldApplication: {
        forWork:
          "If your marketing or creative team uses AI-generated images, audio, or video in commercial campaigns, keep **two rules** in mind: **1.** Use enterprise-licensed tools (some enterprise image models offer **copyright indemnification** because they were trained on licensed stock libraries like Adobe Firefly), and **2.** Comply with **India's IT Rules on labelling synthetic media**.",
        forLearning:
          "When you hear someone say *'AI will get dumber because the internet is filling up with AI text'*, you now know the nuance: blind scraping causes **Model Collapse**, which is why labs switched to **verifier-filtered synthetic data**!",
      },
      jargonCard: {
        term: "Synthetic Data & C2PA / SynthID",
        oneLineAnalogy:
          "**Verified Synthetic Data** is AI generating and checking its own practice problems; **C2PA / SynthID** is the invisible security thread proving whether an image or audio clip was made by AI.",
        meetingDropLine:
          "\"For our brand campaigns, let's use an enterprise image tool with copyright indemnification and keep C2PA provenance metadata intact.\"",
      },
      quiz: [
        {
          id: "q6-7-1",
          scenario:
            "What do researchers mean by **'Model Collapse'**—and how do frontier AI labs prevent it when using **Synthetic Data**?",
          options: [
            {
              id: "a",
              text: "Model Collapse is when a server rack physically falls over.",
              isCorrect: false,
              analogyFeedback: "Not a physical collapse!",
            },
            {
              id: "b",
              text: "Model Collapse happens if a model trains blindly on unfiltered, low-quality AI-generated slop (like a photocopy of a photocopy). Labs prevent it by using strict verifiers (compilers, math checkers, judge rubrics) to keep only high-quality synthetic solutions.",
              isCorrect: true,
              analogyFeedback: "Spot on. **Unfiltered AI slop degrades models; verifier-filtered synthetic data makes them smarter.**",
            },
            {
              id: "c",
              text: "Model Collapse is when a user closes their laptop lid.",
              isCorrect: false,
              analogyFeedback: "Nothing to do with closing your laptop!",
            },
            {
              id: "d",
              text: "Synthetic data is made out of plastic.",
              isCorrect: false,
              analogyFeedback: "'Synthetic' here means generated by a model rather than written by a human.",
            },
          ],
        },
        {
          id: "q6-7-2",
          scenario:
            "What is the purpose of **C2PA Content Credentials** and **SynthID** watermarks?",
          options: [
            {
              id: "a",
              text: "To make image files 10x heavier.",
              isCorrect: false,
              analogyFeedback: "Metadata and pixel watermarks add almost zero file size.",
            },
            {
              id: "b",
              text: "To embed tamper-evident provenance metadata or imperceptible watermarks so platforms and users can verify whether an image, audio, or video was generated or altered by AI.",
              isCorrect: true,
              analogyFeedback: "Correct! Like the **security thread in a currency note**, it helps fight deepfakes and comply with labelling laws.",
            },
            {
              id: "c",
              text: "To put a giant ugly 'SAMPLE' stamp across the middle of every family photo.",
              isCorrect: false,
              analogyFeedback: "SynthID is imperceptible to the human eye/ear, and C2PA sits in the cryptographic metadata.",
            },
            {
              id: "d",
              text: "To make images print faster on inkjets.",
              isCorrect: false,
              analogyFeedback: "Not a printer driver!",
            },
          ],
        },
        {
          id: "q6-7-3",
          scenario:
            "Your advertising agency is generating visuals for a major national bank's billboard campaign. What copyright and compliance precaution should the creative director take?",
          options: [
            {
              id: "a",
              text: "Generate a picture of a famous copyrighted cartoon character and put the bank's logo on it.",
              isCorrect: false,
              analogyFeedback: "Generating recognizable copyrighted characters or celebrity likenesses for ads will trigger an instant lawsuit!",
            },
            {
              id: "b",
              text: "Use an anonymous free image generator on Telegram with no terms of service.",
              isCorrect: false,
              analogyFeedback: "Zero legal protection for a commercial client!",
            },
            {
              id: "c",
              text: "Use an enterprise-approved creative tool (ideally offering commercial IP indemnification), avoid prompts naming copyrighted brands/artists/celebrities, and follow platform disclosure rules.",
              isCorrect: true,
              analogyFeedback: "Exactly. Enterprise IP indemnification + clean prompts keeps commercial campaigns safe.",
            },
            {
              id: "d",
              text: "Never use computers for graphic design.",
              isCorrect: false,
              analogyFeedback: "You can use AI safely with commercial licences and clean prompts.",
            },
          ],
        },
      ],
    },

    // LESSON 8
    {
      id: "energy-chips-and-datacenter-bottlenecks",
      title: "Gigawatts, HBM Memory & The Physical Bottlenecks of AI",
      subtitle: "Why AI isn't floating in a magical 'cloud'—it's constrained by power grids, electrical transformers, and memory chips",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Software can scale overnight, but AI runs into hard physics. ==Today's biggest bottlenecks aren't algorithms—they are Gigawatt electricity grids, liquid-cooled data centres, High-Bandwidth Memory (HBM), and TSMC's chip packaging.==",
        explanation:
          "Why can't every lab just build a 10x bigger supercomputer next month? Because training and running frontier AI for billions of people hits four physical walls: **1. Electricity (Gigawatts)**: A single frontier AI data-centre campus now demands **1 to 2 Gigawatts (GW)** of continuous 24/7 power—roughly the electricity consumption of **an entire city of 1.5 million homes**! **2. Cooling**: Modern GPU racks (like NVIDIA's NVL72) pack so much heat into one cabinet (120+ kilowatts) that fans aren't enough—they need **direct-to-chip liquid cooling**. **3. High-Bandwidth Memory (HBM)**: Made by SK Hynix, Samsung, and Micron, HBM stacks memory vertically right next to the GPU; without it, the GPU starves waiting for data. **4. Advanced Packaging (CoWoS)**: TSMC's ultra-precise process that stitches the GPU and HBM together on a silicon wafer.",
      },
      analogy: {
        title: "The Formula 1 Car That Needs a Fuel Pipeline and a Radiator",
        metaphor:
          "Having the smartest AI algorithm is like designing a **1,000-horsepower Formula 1 engine**. But an engine on a blueprint wins zero races unless you have: **1. A wide fuel pipe right next to the cylinders (HBM Memory)** so the engine doesn't choke waiting for petrol; **2. A precision assembly line in Taiwan (TSMC CoWoS packaging)** to bolt the engine together; **3. Liquid radiators (Liquid Cooling)** so it doesn't melt in 30 seconds; and **4. A dedicated power plant (Gigawatt Grid + Solar/Nuclear)** to keep 100,000 of those engines roaring 24x7.",
        visualComparison: [
          {
            everydayItem: "Wide fuel pipe feeding the engine without delay",
            aiEquivalent: "**HBM (High-Bandwidth Memory)**: ultra-fast stacked memory sitting right next to the GPU",
          },
          {
            everydayItem: "Water radiator cooling a red-hot race engine",
            aiEquivalent: "**Direct Liquid Cooling**: required for 100kW+ AI server racks where air fans aren't enough",
          },
          {
            everydayItem: "A dedicated power station for an industrial township",
            aiEquivalent: "**1-Gigawatt (GW) AI Data Centre**: why tech giants are signing solar, wind, and nuclear power deals",
          },
        ],
      },
      activities: [
        {
          type: "flashcards",
          title: "Hardware & Energy Terms in Tech News",
          cards: [
            {
              front: "HBM (High-Bandwidth Memory)",
              back: "3D-stacked memory chips (led by **SK Hynix, Micron, and Samsung**) mounted right beside an AI GPU. **Memory bandwidth** is often the #1 speed bottleneck when generating tokens.",
            },
            {
              front: "TSMC & CoWoS Packaging",
              back: "**TSMC** manufactures most of the world's advanced AI chips; **CoWoS (Chip-on-Wafer-on-Substrate)** is the microscopic packaging bottleneck that connects the logic GPU to its HBM memory stacks.",
            },
            {
              front: "1 Gigawatt (1 GW) Campus",
              back: "1,000 Megawatts of power—roughly the output of a **full-scale nuclear reactor** or a massive solar + battery park. Frontier AI clusters are now measured in **Gigawatts**, not just chip counts.",
            },
            {
              front: "Edge AI / NPU (Neural Processing Unit)",
              back: "Dedicated low-power AI silicon inside **smartphones and laptops** (Apple Neural Engine, Qualcomm Hexagon, MediaTek) that runs small 2B–4B models locally using **zero data-centre electricity**.",
            },
          ],
        },
        {
          type: "sort",
          title: "Cloud Data-Centre AI vs. On-Device Edge AI (NPU)",
          instructions: "One way the industry fights data-centre power and cost limits is running small models directly on your phone or laptop's **NPU**. Sort each task!",
          buckets: ["Needs Giant Cloud GPU Cluster", "Can Run Locally on Phone/Laptop NPU (Edge AI)"],
          items: [
            {
              text: "Smart keyboard autocorrect, call noise cancellation, and summarizing a 3-line WhatsApp notification on your phone",
              bucket: 1,
              why: "Small 2B–3B models on your phone's **NPU** do this in milliseconds, offline, for ₹0 cloud cost.",
            },
            {
              text: "Deep Research across 80 live websites and 500-page financial PDFs",
              bucket: 0,
              why: "Requires a **frontier model and massive cloud memory**.",
            },
            {
              text: "Blurring your background on a video call and live-captioning offline audio on a laptop",
              bucket: 1,
              why: "Runs directly on your laptop's **local NPU/GPU** without draining data-centre power.",
            },
            {
              text: "Pre-training a new 500-billion-parameter foundational model from scratch",
              bucket: 0,
              why: "Requires **tens of thousands of liquid-cooled data-centre GPUs/TPUs** and megawatts of power.",
            },
          ],
        },
      ],
      realWorldApplication: {
        forWork:
          "When you see headlines about **Mumbai, Navi Mumbai, Chennai, and Hyderabad booming as data-centre hubs**, or Indian conglomerates investing in **renewable solar-wind-battery parks for AI**, you now see the full picture: **AI compute is ultimately converted electricity**.",
        forLearning:
          "Understand why AI labs obsess over making models **smaller and more efficient** (distillation, MoE, quantization): every 50% efficiency gain means serving **twice as many users from the same power grid and chip supply**!",
      },
      jargonCard: {
        term: "HBM Memory & Edge NPU",
        oneLineAnalogy:
          "**HBM** is the ultra-wide memory highway inside data-centre GPUs; an **NPU** is the tiny energy-sipping AI chip inside your phone that runs small models offline for free.",
        meetingDropLine:
          "\"For simple offline features like smart reply, can we use the phone's on-device model (NPU) instead of paying for cloud GPU inference?\"",
      },
      quiz: [
        {
          id: "q6-8-1",
          scenario:
            "Why are major tech companies signing long-term **solar, wind, hydro, and nuclear power deals** measured in **Gigawatts (GW)**?",
          options: [
            {
              id: "a",
              text: "Because training and running 24/7 frontier AI data-centre clusters consumes city-scale amounts of continuous electricity and requires massive cooling infrastructure.",
              isCorrect: true,
              analogyFeedback: "Spot on. In the 2020s, **access to reliable gigawatt power and grid transformers** is as strategic as algorithms.",
            },
            {
              id: "b",
              text: "Because they want to sell household AA batteries.",
              isCorrect: false,
              analogyFeedback: "Data centres don't run on AA batteries!",
            },
            {
              id: "c",
              text: "Because smartphones need nuclear reactors.",
              isCorrect: false,
              analogyFeedback: "Smartphones use a few watts; it's the hyperscale cloud data centres that need gigawatts.",
            },
            {
              id: "d",
              text: "Because coding editors only work in the dark.",
              isCorrect: false,
              analogyFeedback: "Definitely not!",
            },
          ],
        },
        {
          id: "q6-8-2",
          scenario:
            "What is **HBM (High-Bandwidth Memory)**, and why is it such a critical bottleneck in AI chip supply?",
          options: [
            {
              id: "a",
              text: "A course on how to memorize phone numbers.",
              isCorrect: false,
              analogyFeedback: "HBM is silicon hardware, not a memory trick!",
            },
            {
              id: "b",
              text: "Ultra-fast 3D-stacked memory mounted right next to an AI GPU/TPU—essential because generating tokens requires reading billions of model weights from memory into the processor at blistering speeds.",
              isCorrect: true,
              analogyFeedback: "Correct! Without **HBM's massive bandwidth**, the fastest GPU in the world sits idle waiting for weights to load.",
            },
            {
              id: "c",
              text: "A USB pen drive you plug into your TV.",
              isCorrect: false,
              analogyFeedback: "A USB stick is millions of times too slow for frontier LLM inference.",
            },
            {
              id: "d",
              text: "A type of office Wi-Fi cable.",
              isCorrect: false,
              analogyFeedback: "HBM sits inside the chip package itself.",
            },
          ],
        },
        {
          id: "q6-8-3",
          scenario:
            "What is the advantage of running a small 3-billion-parameter model locally on a smartphone's **NPU (Edge AI)** for tasks like keyboard suggestions or call summaries?",
          options: [
            {
              id: "a",
              text: "It requires a 1-Gigawatt power plant in your backpack.",
              isCorrect: false,
              analogyFeedback: "An NPU uses just a couple of watts from your phone battery!",
            },
            {
              id: "b",
              text: "It sends all your data to 10 foreign servers.",
              isCorrect: false,
              analogyFeedback: "On-device Edge AI keeps the data **100% on your phone**.",
            },
            {
              id: "c",
              text: "Zero cloud API cost for the app developer, works even offline with zero network latency, and keeps personal text completely on the user's device.",
              isCorrect: true,
              analogyFeedback: "Exactly! **Privacy + ₹0 cloud bill + offline speed** makes Edge AI a huge frontier for routine mobile tasks.",
            },
            {
              id: "d",
              text: "It can train GPT-7 from scratch on your phone.",
              isCorrect: false,
              analogyFeedback: "Phone NPUs are for lightweight local *inference*, not frontier pre-training!",
            },
          ],
        },
      ],
    },

    // LESSON 9
    {
      id: "india-ai-mission-and-dpi-integration",
      title: "IndiaAI Mission Meets Digital Public Infrastructure (DPI)",
      subtitle: "Why plugging Indic Voice AI into UPI, ONDC, AgriStack, and Ayushman Bharat is India's unique global play",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Silicon Valley builds AI for individual knowledge workers on laptops. ==India's unique leap is pairing **Multilingual Voice AI** with **Digital Public Infrastructure (DPI)**—letting a citizen speak in Bhojpuri or Tamil to pay via UPI, sell on ONDC, or check crop advisories on AgriStack.==",
        explanation:
          "Over the last decade, India built world-famous **Digital Public Infrastructure (DPI)**—open, interoperable public rails like **Aadhaar** (identity), **UPI** (payments), **DigiLocker** (documents), **Account Aggregator** (consented financial data), **ONDC** (open commerce network), **ABDM** (health IDs), and **AgriStack** (farmer registries). Until recently, using these rails still required navigating smartphone screens and reading text. Now, combining **Bhashini + IndiaAI Mission compute & sovereign models + DPI rails** turns every screen-based menu into a **conversational voice transaction**: a small kirana owner in Madurai can catalogue 200 items onto ONDC just by speaking in Tamil and snapping a photo, and an elderly citizen can make a conversational **UPI 123Pay / Hello! UPI** payment by voice.",
      },
      analogy: {
        title: "Adding a Multilingual Ticket Agent to Every Railway Station",
        metaphor:
          "India already laid the **world's most modern high-speed railway tracks (DPI: UPI, Aadhaar, DigiLocker, ONDC)**. Bridges, signals, and tracks reach every district. But to buy a ticket, you still had to use a **touchscreen kiosk with tiny buttons**—which locked out anyone who wasn't comfortable reading menus on glass. Pairing **Indic Voice AI with DPI** puts a **patient, multilingual station master at every single window** ==who understands 22 languages, fills out the form while you speak naturally, and only asks for your PIN to confirm.==",
        visualComparison: [
          {
            everydayItem: "The nationwide railway tracks and signalling grid",
            aiEquivalent: "**Digital Public Infrastructure (DPI)**: UPI, ONDC, Account Aggregator, DigiLocker, AgriStack",
          },
          {
            everydayItem: "Multilingual station master who speaks your dialect",
            aiEquivalent: "**Indic Voice & Multimodal Layer** (Bhashini, Sarvam, AI4Bharat models)",
          },
          {
            everydayItem: "Entering your 4-digit UPI PIN before money actually moves",
            aiEquivalent: "**Deterministic Security Gate**: AI handles the conversation; cryptographic PIN/OTP authorizes the transaction",
          },
        ],
      },
      activities: [
        {
          type: "flashcards",
          title: "How AI Pairs With India's DPI Rails",
          cards: [
            {
              front: "Conversational UPI (Hello! UPI)",
              back: "Produced with **NPCI & Bhashini**: lets users make voice-activated UPI payments in Hindi and regional languages—AI parses the intent and amount, while the user still enters their **secure UPI PIN**.",
            },
            {
              front: "ONDC + Multimodal Cataloguing",
              back: "Small sellers upload a **photo of their shelf or handwritten price list** + a voice note in Kannada or Bengali, and AI generates a clean, bilingual **ONDC product catalogue** automatically.",
            },
            {
              front: "AgriStack & Kisan e-Mitra",
              back: "Voice-first AI assistants grounded in **ICAR agricultural science, soil health cards, PM-KISAN status, and IMD weather**—answering farmers' pest and mandi questions in their local dialect.",
            },
            {
              front: "IndiaAI Compute & Datasets Pillar (AIKosh)",
              back: "Under the **₹10,000+ crore IndiaAI Mission**, the government subsidizes shared GPU compute hours for Indian startups/researchers and hosts **AIKosh** (India's national dataset platform).",
            },
          ],
        },
        {
          type: "sort",
          title: "What the AI Layer Does vs. What the DPI Rail Does",
          instructions: "In a **Conversational UPI or ONDC** workflow, separate the **Probabilistic AI job** from the **Deterministic DPI job**.",
          buckets: ["Probabilistic AI Layer (Voice / Vision)", "Deterministic DPI Rail (NPCI / ONDC / AA)"],
          items: [
            {
              text: "Understanding a user saying 'Ramesh doodhwale ko saadhe chaar sau rupaye bhej do' (Send ₹450 to Ramesh the milkman)",
              bucket: 0,
              why: "**Indic Speech + Intent Extraction** converts natural spoken Hindi into `{ payee: 'Ramesh', amount: 450 }`.",
            },
            {
              text: "Verifying the user's cryptographic UPI PIN and settling ₹450 between SBI and HDFC Bank ledgers",
              bucket: 1,
              why: "**NPCI's deterministic UPI switch** handles authentication and exact money movement—never an LLM!",
            },
            {
              text: "Reading a photo of a handwritten Gujarati mithai menu and turning it into structured item names, weights, and prices",
              bucket: 0,
              why: "**Multimodal Vision AI** extracts structured fields from messy photos.",
            },
            {
              text: "Routing the confirmed order request from a buyer app to a logistics courier on the open network protocol",
              bucket: 1,
              why: "**ONDC's deterministic Beckn protocol** routes standardized commerce transactions.",
            },
          ],
        },
      ],
      realWorldApplication: {
        forWork:
          "If you build products for Indian consumers or MSMEs, look at how **AI + DPI** removes onboarding friction: instead of a 12-field form, let users **speak in their language or snap a photo of a document**, use AI to fill the form fields, and let the user tap **Confirm**.",
        forLearning:
          "Notice how this brings Track 1's very first lesson full circle: **Probabilistic AI** handles messy human speech and photos at the edge; **Deterministic DPI rails** handle identity, consent, and rupees at the core!",
      },
      jargonCard: {
        term: "DPI + AI (Population-Scale AI)",
        oneLineAnalogy:
          "**Putting a multilingual voice steering wheel on India's public digital highways (UPI, ONDC, AgriStack)**—AI understands the human, DPI executes the verified transaction.",
        meetingDropLine:
          "\"Our onboarding drop-off is high in Tier-3 cities—let's add a Bhashini/Sarvam voice + photo intake layer on top of our KYC and ONDC flow.\"",
      },
      quiz: [
        {
          id: "q6-9-1",
          scenario:
            "In a **Conversational Voice UPI** payment (*'Send ₹500 to Priya'*), why is the architecture split between **Voice AI** and the **deterministic UPI PIN screen**?",
          options: [
            {
              id: "a",
              text: "Because the AI handles the messy natural-language voice intent in Hindi/Tamil, while the deterministic UPI rail and cryptographic PIN guarantee that no money ever moves without exact human authorization.",
              isCorrect: true,
              analogyFeedback: "Spot on. **Probabilistic AI for natural conversation + Deterministic DPI for money and security** is the gold-standard pattern.",
            },
            {
              id: "b",
              text: "Because the LLM guesses your 4-digit UPI PIN for you.",
              isCorrect: false,
              analogyFeedback: "Never share a UPI PIN with any AI—the PIN screen is strictly deterministic and private!",
            },
            {
              id: "c",
              text: "Because UPI only works in English.",
              isCorrect: false,
              analogyFeedback: "Hello! UPI supports Hindi and regional Indian languages.",
            },
            {
              id: "d",
              text: "Because voice payments don't use banks.",
              isCorrect: false,
              analogyFeedback: "Every UPI payment settles across bank accounts via NPCI.",
            },
          ],
        },
        {
          id: "q6-9-2",
          scenario:
            "How is multimodal AI helping millions of small kirana and craft sellers join **ONDC (Open Network for Digital Commerce)**?",
          options: [
            {
              id: "a",
              text: "By requiring every seller to learn Python programming first.",
              isCorrect: false,
              analogyFeedback: "The whole point of AI is removing technical barriers!",
            },
            {
              id: "b",
              text: "By letting sellers take photos of their products or speak item details in their regional language, which AI turns into a clean, searchable digital catalogue in seconds.",
              isCorrect: true,
              analogyFeedback: "Correct! Turning **a photo + a 10-second Tamil or Hindi voice note** into a live online catalogue removes the biggest hurdle for small merchants.",
            },
            {
              id: "c",
              text: "By banning mobile phones in shops.",
              isCorrect: false,
              analogyFeedback: "Smartphones are the primary tool for ONDC sellers!",
            },
            {
              id: "d",
              text: "By printing paper yellow pages.",
              isCorrect: false,
              analogyFeedback: "ONDC is a digital commerce network.",
            },
          ],
        },
        {
          id: "q6-9-3",
          scenario:
            "What is one of the core goals of the Government of India's **IndiaAI Mission**?",
          options: [
            {
              id: "a",
              text: "To replace UPI with cash.",
              isCorrect: false,
              analogyFeedback: "Definitely not!",
            },
            {
              id: "b",
              text: "To make English the only language allowed on the internet.",
              isCorrect: false,
              analogyFeedback: "The exact opposite—IndiaAI champions indigenous multilingual models across Indian languages!",
            },
            {
              id: "c",
              text: "To provide shared GPU compute infrastructure, Indian datasets (AIKosh), and support for indigenous foundational and voice models tailored to India's languages and public needs.",
              isCorrect: true,
              analogyFeedback: "Exactly. Shared GPU compute + Indian datasets + sovereign Indic models.",
            },
            {
              id: "d",
              text: "To ban all open-weight models.",
              isCorrect: false,
              analogyFeedback: "IndiaAI actively supports open datasets and open/sovereign model innovation.",
            },
          ],
        },
      ],
    },

    // LESSON 10
    {
      id: "personal-ai-radar-setup",
      title: "Your 15-Minute Bi-Weekly AI Radar",
      subtitle: "How to stay ahead of 99% of professionals without drowning in daily Twitter hype or FOMO",
      durationMinutes: 6,
      xpReward: 200,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Trying to read AI news every single day leads to exhaustion and zero action. ==Set a 15-minute bi-weekly habit: ignore 95% of announcements, and test 1 new capability on 1 real work task every two weeks.==",
        explanation:
          "Every week, 50 new AI tools launch claiming to 'revolutionize everything'. People who doomscroll AI hype for an hour a day end up anxious and overwhelmed—while people who ignore AI completely wake up two years behind. The antidote is a **15-Minute Bi-Weekly Radar**: **1. Filter Ruthlessly** (only care when a model/feature hits **General Availability** in the tools you actually use); **2. Keep a Personal Benchmark of 3 Hard Tasks** from your own job; and **3. Run a 10-Minute Friday Sandbox Test** twice a month. If a new model beats your old workflow on one of your 3 real tasks, upgrade your habit. If not, close the tab and get back to your life!",
      },
      analogy: {
        title: "Upgrading Your Phone Once a Year vs. Reading Spec Rumours Every Hour",
        metaphor:
          "Imagine someone who spends **two hours every single day** reading rumoured camera-sensor leaks for 40 different smartphone brands, yet still takes blurry photos because they never learned how to use the camera already in their pocket. Now picture a professional photographer: they ignore the daily rumour mill, check **two trusted reviews twice a month**, and when a new lens actually ships in stores, they **test it on one real shoot**. ==Be the photographer, not the spec-sheet doomscroller.==",
        visualComparison: [
          {
            everydayItem: "Reading 50 daily phone-rumour tweets (anxiety, zero output)",
            aiEquivalent: "**AI FOMO Doomscrolling**: chasing waitlist demos and cherry-picked benchmark drama",
          },
          {
            everydayItem: "3 tricky test photos you shoot in your own studio",
            aiEquivalent: "**Your Personal 3-Prompt Benchmark**: 3 real tasks from your job that current AI struggles with",
          },
          {
            everydayItem: "15-minute check-in on the 1st and 15th of the month",
            aiEquivalent: "**Bi-Weekly Pulse Habit**: 10 minutes reading release notes + 5 minutes testing 1 real workflow",
          },
        ],
      },
      activities: [
        {
          type: "checklist",
          title: "Set Up Your Personal AI Radar Today",
          intro: "Tick these four boxes to lock in a calm, high-signal system that takes just 15 minutes every two weeks.",
          items: [
            {
              text: "1. Write down your '3 Unsolved Work Prompts' (Your Personal Eval)",
              detail: "Keep a note with 3 real tasks from your job that current AI gets only 60% right (e.g., a gnarly Excel reconciliation, a bilingual legal summary, a tricky coding bug). Whenever a new model launches, paste those 3 prompts first!",
            },
            {
              text: "2. Bookmark only primary Release Notes + this Bi-Weekly Pulse",
              detail: "Check official release notes (OpenAI, Anthropic, Google, Sarvam) and Track 6 once a fortnight instead of anonymous social media threads.",
            },
            {
              text: "3. Block a 15-minute 'Friday Sandbox' every second Friday",
              detail: "Pick ONE thing you read about—Voice mode, Deep Research, Artifacts/Canvas, NotebookLM—and use it on a real Friday task.",
            },
            {
              text: "4. Share 1 working prompt with your team each month",
              detail: "Becoming the person who shares a tested, 5-minute time-saver in your team Slack/WhatsApp group makes you visibly valuable.",
            },
          ],
        },
        {
          type: "tryIt",
          title: "Create Your 'Personal 3-Prompt Benchmark' Note Right Now",
          intro: "Use this prompt to design a custom 3-question test tailored to your exact role.",
          prompt: "I work as a [YOUR ROLE, e.g., Product Manager / Chartered Accountant / Marketing Lead / Software Engineer / Student] in [YOUR INDUSTRY] in India.\n\nHelp me design my 'Personal 3-Prompt AI Benchmark'—three realistic, challenging test prompts from my daily work (one for writing/communication, one for data/analysis, and one for complex reasoning/planning) that I can save in a note and run whenever a new AI model launches to see in 3 minutes whether the new model is actually better for my job.",
          whatToNotice: [
            "Save the 3 prompts it helps you craft in your Notes app.",
            "Next time someone says *'Did you try the new GPT / Claude / Gemini update?'*, you can run your 3 prompts in 180 seconds and give a razor-sharp answer based on **your own evidence**.",
          ],
        },
      ],
      realWorldApplication: {
        forWork:
          "Sharing **one concrete 'Before vs. After' workflow** you tested on a Friday afternoon with your team is worth more to your career than forwarding 100 generic AI news links.",
        forLearning:
          "Congratulations—you've completed all 10 lessons of Track 6 and earned your **Frontier Navigator** badge! Now it's time for Track 7: putting everything into action by building and launching your own live website.",
      },
      jargonCard: {
        term: "Personal Benchmark (The 3-Prompt Test)",
        oneLineAnalogy:
          "**Your own 3-song playlist for testing new headphones**: three tough, realistic tasks from your actual job that you run on every new model to see if it truly improved.",
        meetingDropLine:
          "\"I ran the new model release against my 3-prompt benchmark for our quarterly financial briefs—it cut table formatting errors in half.\"",
      },
      quiz: [
        {
          id: "q6-10-1",
          scenario:
            "What is the smartest way to evaluate whether a newly launched AI model is actually worth switching to for your daily work?",
          options: [
            {
              id: "a",
              text: "Run your saved 'Personal 3-Prompt Benchmark' (3 tough, real tasks from your actual job) on the new model and compare the output side-by-side against your current tool.",
              isCorrect: true,
              analogyFeedback: "Spot on. **Your own 3-song test playlist** beats every marketing chart on the internet.",
            },
            {
              id: "b",
              text: "Read 200 comments on X (Twitter) arguing about it.",
              isCorrect: false,
              analogyFeedback: "Social media debates waste hours; a side-by-side test takes 3 minutes!",
            },
            {
              id: "c",
              text: "Ask the model 'Are you the best AI in the world?'",
              isCorrect: false,
              analogyFeedback: "Models don't even know their own recent benchmark rankings reliably.",
            },
            {
              id: "d",
              text: "Switch all company systems immediately without testing.",
              isCorrect: false,
              analogyFeedback: "Always test before switching!",
            },
          ],
        },
        {
          id: "q6-10-2",
          scenario:
            "Why should your **Personal 3-Prompt Benchmark** consist of tasks that your current AI tool **partially struggles with** (rather than super easy questions like *'Write a 2-line birthday wish'*)?",
          options: [
            {
              id: "a",
              text: "Because AI models refuse to write birthday wishes.",
              isCorrect: false,
              analogyFeedback: "Every model writes birthday wishes easily—which is why it's a terrible test!",
            },
            {
              id: "b",
              text: "Because if every model already gets 10/10 on an easy prompt, that prompt is 'saturated' and can't reveal whether the new model is any smarter.",
              isCorrect: true,
              analogyFeedback: "Correct! Only **hard tasks where current models stumble** show you genuine frontier progress.",
            },
            {
              id: "c",
              text: "Because hard prompts are cheaper.",
              isCorrect: false,
              analogyFeedback: "It's about signal and differentiation, not cost.",
            },
            {
              id: "d",
              text: "Because you should never use AI for easy tasks.",
              isCorrect: false,
              analogyFeedback: "Use AI for easy tasks every day—just don't use easy tasks to *judge* a new frontier model!",
            },
          ],
        },
        {
          id: "q6-10-3",
          scenario:
            "How much time do you actually need to stay in the top 1% of AI-fluent professionals at work without burning out?",
          options: [
            {
              id: "a",
              text: "4 hours every single night reading research papers.",
              isCorrect: false,
              analogyFeedback: "Unless you are an ML PhD researcher, 4 hours a night is a recipe for burnout.",
            },
            {
              id: "b",
              text: "Zero minutes—never try any new tool for the next 10 years.",
              isCorrect: false,
              analogyFeedback: "Ignoring major workflow shifts leaves easy productivity gains on the table.",
            },
            {
              id: "c",
              text: "Forwarding 10 unverified messages a day in WhatsApp groups.",
              isCorrect: false,
              analogyFeedback: "Please spare your family WhatsApp group!",
            },
            {
              id: "d",
              text: "A focused 15-minute bi-weekly radar: check verified release notes / The AI Pulse twice a month, and spend 10 minutes hands-on testing 1 real capability on 1 real work task.",
              isCorrect: true,
              analogyFeedback: "Exactly! **Consistent hands-on testing on real work** beats passive hype scrolling every single time.",
            },
          ],
        },
      ],
    },
  ],
};

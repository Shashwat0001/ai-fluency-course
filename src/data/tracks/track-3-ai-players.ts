import type { Track } from "../types";

export const TRACK_3: Track = {
  id: "track-3-ai-players",
  number: 3,
  icon: "Sparkles",
  title: "The AI Players: Who Builds What",
  description:
    "Meet the labs behind today's AI: OpenAI, Anthropic, Google, Meta, global open-weight challengers, India's sovereign builders, and the chip makers underneath.",
  badgeName: "Ecosystem Insider",
  estimatedTime: "65 mins",
  isUpdatedThisFortnight: true,
  lessons: [
    // LESSON 1
    {
      id: "frontier-model-players",
      title: "Who Actually Builds Your AI?",
      subtitle: "The big labs, open-weight rivals and India's own builders",
      durationMinutes: 7,
      xpReward: 150,
      isUpdatedBiWeekly: true,
      lastUpdated: "Oct 28, 2026",
      sources: [
        { label: "OpenAI: API models overview", url: "https://developers.openai.com/api/docs/models" },
        { label: "Anthropic: Claude models overview", url: "https://docs.claude.com/en/docs/about-claude/models/overview" },
        { label: "Google: Gemini models", url: "https://ai.google.dev/gemini-api/docs/models" },
        { label: "Vals AI: SWE-bench Verified coding leaderboard", url: "https://www.vals.ai/benchmarks/swebench" },
        { label: "Mistral Large 3, open weights under Apache 2.0 (Hugging Face)", url: "https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512-NVFP4" },
        { label: "Sarvam AI: Epoch announcements", url: "https://www.sarvam.ai/epoch/summary" },
      ],
      bigIdea: {
        headline:
          "Top models are now neck and neck. ==Choose on fit, price, speed and where the data lives.==",
        explanation:
          "A handful of labs build the most powerful 'frontier' models. OpenAI (ChatGPT), Anthropic (Claude) and Google (Gemini) make the leading **closed models**: you rent them over the internet and never see inside. Meta offers Meta AI inside WhatsApp and Instagram, and also publishes **open-weight models** (Llama) that companies can download and run on their own servers. So do labs like DeepSeek, Mistral and Alibaba's Qwen. India has its own builders too, like Bengaluru's Sarvam, focused on Indian languages and India-hosted services. As of October 2026, the top models score **within a point or two** of each other on major benchmarks. ==So 'which is best' matters less than 'which is best for this job'.==",
      },
      analogy: {
        title: "Cab, Scooter or the Local Auto?",
        metaphor:
          "You don't book an XL cab to pop to the chemist, or an auto for a family of six with luggage. The closed models from OpenAI, Anthropic and Google are like **ride-app categories**. You pay per trip, the car isn't yours, and there's a tier for every need, from budget to premium. Open-weight models are like **owning your own scooter**. More effort to maintain, but it's yours. It lives in your garage, and nobody else sees where you go. Indian-language specialists like Sarvam are ==the local auto driver who knows every gali and speaks your language.==",
        visualComparison: [
          {
            everydayItem: "Ride-app categories: pay per trip, budget to premium",
            aiEquivalent: "**Closed models** (GPT, Claude, Gemini): rented over the internet, **priced per token**, many tiers",
          },
          {
            everydayItem: "Owning your own scooter",
            aiEquivalent: "**Open-weight models** (Llama, DeepSeek, Mistral): download them and run them on your own servers",
          },
          {
            everydayItem: "The local auto driver who speaks your language",
            aiEquivalent: "**Indian-language specialists** (e.g. Sarvam), including AI hosted in India",
          },
        ],
      },
      activities: [
        {
          type: "flashcards",
          title: "Meet the cast (as of October 2026)",
          cards: [
            {
              front: "OpenAI",
              back: "Makes ChatGPT. Its **GPT-6 family** arrived in 2026. **GPT-6 Astra** is the flagship, and free ChatGPT users get **GPT-6 Luna**.",
            },
            {
              front: "Anthropic",
              back: "Makes Claude. Its top models are **Claude Fable 5.1** and **Opus 5.5**, with a 1-million-token context window. Among the **top scorers on coding benchmarks**.",
            },
            {
              front: "Google",
              back: "Makes Gemini, built into Android, Gmail and Docs. Its flagship is **Gemini 4 Argon**. Gemini is especially strong with **video and very long documents**.",
            },
            {
              front: "Meta",
              back: "Runs Meta AI inside WhatsApp, Instagram and Facebook. It also publishes some **open-weight models (Llama)** under its own licence.",
            },
            {
              front: "DeepSeek & Mistral",
              back: "DeepSeek (China) and Mistral (France) publish powerful **open-weight models** that anyone can download and run.",
            },
            {
              front: "Sarvam AI",
              back: "Bengaluru startup building models and **voice AI for Indian languages**, with AI services **hosted in Indian data centres**.",
            },
          ],
        },
        {
          type: "sort",
          title: "Rent it or own it?",
          instructions: "Is each one a **closed model** you reach over the internet, or an **open-weight model** you can download and run yourself?",
          buckets: ["Closed (rent it)", "Open weights (own it)"],
          items: [
            { text: "GPT-6 models behind ChatGPT", bucket: 0, why: "OpenAI's GPT models are only available through its apps and **paid developer access**." },
            { text: "Meta's Llama models", bucket: 1, why: "Meta publishes Llama's weights for download, **free to use under Meta's licence terms**." },
            { text: "Claude", bucket: 0, why: "You get Anthropic's Claude through its apps and paid access, **not as a download**." },
            { text: "Mistral Large 3", bucket: 1, why: "Mistral released it as **open weights** under the permissive **Apache 2.0 licence**." },
            { text: "Gemini 4 Argon", bucket: 0, why: "You reach Google's flagship through the **Gemini app** and Google's **paid services**." },
            { text: "DeepSeek's models", bucket: 1, why: "DeepSeek publishes its model weights **openly on Hugging Face**." },
          ],
        },
        {
          type: "tryIt",
          title: "Same question, two assistants",
          intro: "The fastest way to feel the difference between AI labs is a **side-by-side test**.",
          prompt: "In under 80 words, explain UPI to a tourist visiting India for the first time. Then tell me the one thing in your answer you're least sure about.",
          whatToNotice: [
            "Paste it into **two different assistants**, say ChatGPT and Gemini, or Claude and Meta AI in WhatsApp. Compare tone, length and clarity.",
            "Check one fact from each answer yourself. ==The one that admits uncertainty honestly often deserves more trust.==",
            "You've just run a mini **eval**: same question, same yardstick, different models. Teams do exactly this with hundreds of questions.",
          ],
        },
      ],
      techConversation: {
        context: "A Hyderabad SaaS team picks models for two features",
        speakerA: {
          role: "Product Manager",
          quote:
            "Why are we using a **top-tier model** for code generation, but a **budget model** for sorting support tickets?",
        },
        speakerB: {
          role: "Staff Engineer",
          quote:
            "Code generation needs the **strongest reasoning**. The top models are neck and neck there, so we picked the one that **won our own evals**. Ticket sorting is simple. The budget tier costs **about 1% as much per token**, with the same accuracy on our test set.",
        },
        plainEnglishTranslation:
          "Hard jobs get the **premium ride**; simple, high-volume jobs get the **budget one**. ==The choice comes from the team's own tests, not headlines about which AI is 'best'.==",
      },
      realWorldApplication: {
        forWork:
          "Use whichever assistant **your company approves**. For a team decision, test two or three models **on your own real examples** (an eval, Track 5). Don't just trust rankings. If your legal team says data must stay on company or Indian servers, ask about **open-weight or India-hosted options**.",
        forLearning:
          "Ask ChatGPT, Gemini and Claude **the same question** and compare the answers. You'll quickly feel their different styles. You'll also spot when one of them is **confidently wrong**.",
      },
      jargonCard: {
        term: "Closed Models vs. Open Weights",
        oneLineAnalogy:
          "**Booking a cab** you'll never own (OpenAI, Anthropic, Google) vs. **owning a scooter** you keep in your own garage (Llama, DeepSeek, Mistral).",
        meetingDropLine:
          "\"Do our compliance rules allow a closed API here, or do we need an open-weight model hosted on our own servers in India?\"",
      },
      quiz: [
        {
          id: "q3-1-1",
          scenario:
            "A hospital wants to run an AI model **entirely inside its own building**, so patient data never leaves its servers. What will the engineers pick?",
          options: [
            {
              id: "a",
              text: "An open-weight model (like Llama or Mistral) they can download and run on their own servers.",
              isCorrect: true,
              analogyFeedback: "Spot on. Owning the scooter means **it never leaves your garage**.",
            },
            {
              id: "b",
              text: "A consumer ChatGPT subscription.",
              isCorrect: false,
              analogyFeedback: "Not quite. ChatGPT runs on **OpenAI's servers**, so the data leaves the building.",
            },
            {
              id: "c",
              text: "A free browser extension that summarizes web pages.",
              isCorrect: false,
              analogyFeedback: "Not quite. Browser extensions send text to external servers, violating strict hospital data residency.",
            },
            {
              id: "d",
              text: "Meta AI inside WhatsApp.",
              isCorrect: false,
              analogyFeedback: "Not quite. WhatsApp messages to Meta AI are processed on Meta's cloud servers, not inside the hospital.",
            },
          ],
        },
        {
          id: "q3-1-2",
          scenario: "Which statement about the top AI models **in October 2026** is most accurate?",
          options: [
            {
              id: "a",
              text: "One company is miles ahead of everyone on every task.",
              isCorrect: false,
              analogyFeedback: "Not any more. On major coding benchmarks, the leaders sit **within a point or two** of each other.",
            },
            {
              id: "b",
              text: "Only open-weight models can write production code.",
              isCorrect: false,
              analogyFeedback: "Not quite. Closed and open models alike can write code. Several of the **top coding scorers** are closed models.",
            },
            {
              id: "c",
              text: "The leaders are close in ability, so fit, price, speed and data rules often decide.",
              isCorrect: true,
              analogyFeedback: "Correct. **Choose the ride for the trip**, not the brand with the loudest ads.",
            },
            {
              id: "d",
              text: "Every AI model charges the exact same price per token.",
              isCorrect: false,
              analogyFeedback: "Not quite. Prices vary by up to 100x between budget tiers and flagship reasoning tiers.",
            },
          ],
        },
        {
          id: "q3-1-3",
          scenario: "What does 'open weights' mean when a lab releases a model?",
          options: [
            {
              id: "a",
              text: "The model is free to use inside ChatGPT without logging in.",
              isCorrect: false,
              analogyFeedback: "Not quite. Free to use in an app isn't the same as open weights. Open weights means **you can run the model yourself**.",
            },
            {
              id: "b",
              text: "The model has no safety rules or licence terms.",
              isCorrect: false,
              analogyFeedback: "Not quite. Open-weight models usually come with licences and built-in safety training. 'Open' is about **access to the files**.",
            },
            {
              id: "c",
              text: "Anyone can edit the company's live cloud servers.",
              isCorrect: false,
              analogyFeedback: "Not quite. You download a copy of the model files to run on your own hardware.",
            },
            {
              id: "d",
              text: "The company publishes the trained model's parameter files, so others can download and run it on their own infrastructure.",
              isCorrect: true,
              analogyFeedback: "Correct. You get **the scooter itself**, usually under licence terms you must follow.",
            },
          ],
        },
      ],
    },

    // LESSON 2
    {
      id: "openai-gpt-and-reasoning-series",
      title: "OpenAI: The ChatGPT & Reasoning Powerhouse",
      subtitle: "How OpenAI splits its lineup between fast daily drivers and slow deep thinkers",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "OpenAI doesn't build one model—it builds a fleet: ==fast models for instant chat, and reasoning models that pause to think through hard math, code, and strategy.==",
        explanation:
          "Most people say 'I asked ChatGPT' as if ChatGPT is a single brain. Behind the scenes, OpenAI splits its models along two axes: **size** (flagship vs mini/nano tiers) and **thinking style** (standard instant generation vs test-time reasoning). When you ask a quick question or draft an email, the router uses a fast conversational model. When you hand it a knotted tax problem, a 500-line bug, or a multi-constraint supply-chain schedule, its **reasoning mode** spends extra seconds generating hidden 'thinking tokens'—testing hypotheses and backtracking before showing you the final answer.",
      },
      analogy: {
        title: "The Reflex Batters vs. The Test Match Captain",
        metaphor:
          "In a T20 Super Over, you want a batter who reacts in **0.3 seconds** on pure instinct. That's OpenAI's **instant conversational tier**: snappy, fluent, and great for 85% of daily tasks. In a 5-day Test match on a turning Chennai pitch, you want a captain who **studies the field, calculates the bowler's angle, and plans four overs ahead** before playing a shot. That's OpenAI's **reasoning tier**. ==You don't ask the Test captain to sprint a single when a reflex flick will do—and you don't play a blind T20slog on a tricky legal contract.==",
        visualComparison: [
          {
            everydayItem: "T20 reflex shot (instant, fluid, low effort)",
            aiEquivalent: "**Standard chat models** (e.g., GPT-6 Luna / mini): great for emails, summaries, and quick Q&A",
          },
          {
            everydayItem: "Test match captain studying the field for 30 seconds",
            aiEquivalent: "**Reasoning models / thinking mode**: spends extra compute verifying logic, math, and multi-step code",
          },
          {
            everydayItem: "The team coach picking who bats next",
            aiEquivalent: "**Auto-router in ChatGPT**: automatically picks fast vs deep thinking based on your prompt",
          },
        ],
      },
      activities: [
        {
          type: "sort",
          title: "Fast Chat Mode vs. Deep Reasoning Mode",
          instructions: "Which OpenAI model mode fits each task best so you don't waste time or money?",
          buckets: ["Fast Instant Tier", "Deep Reasoning Tier"],
          items: [
            {
              text: "Rewriting a rough 4-line Slack message to sound polite",
              bucket: 0,
              why: "Simple tone editing needs zero multi-step planning—**instant mode** finishes in under a second.",
            },
            {
              text: "Finding a subtle race-condition bug across three microservices",
              bucket: 1,
              why: "Tracing execution paths across files requires **holding state and testing hypotheses** before answering.",
            },
            {
              text: "Scheduling 18 doctors across 3 hospital shifts with 7 strict union rules",
              bucket: 1,
              why: "Constraint satisfaction problems fail when guessed left-to-right; **reasoning mode** checks and backtracks.",
            },
            {
              text: "Translating a restaurant menu from English to Marathi",
              bucket: 0,
              why: "Direct translation is pattern matching—waiting 25 seconds for reasoning tokens adds **cost with no gain**.",
            },
          ],
        },
        {
          type: "beforeAfter",
          title: "How you prompt a Reasoning model differs from a Chat model",
          before: {
            label: "Old micromanaging prompt (meant for basic chat models)",
            text: "Think step by step. First list the constraints, then calculate the tax slab, then check section 80C, then verify the surcharge, and explain every single step in detail.",
          },
          after: {
            label: "Goal-first brief (for Reasoning / Thinking models)",
            text: "Goal: Calculate the optimal tax regime (Old vs New FY 2026-27) for a salaried resident in Mumbai earning ₹24.5 lakh with ₹1.5L 80C, ₹50k NPS, and ₹42k medical insurance.\n\nConstraints: Show a clean comparison table with exact rupee tax liability under both regimes and a 2-sentence recommendation.",
          },
          whyItWorks: [
            "Reasoning models **already perform internal chain-of-thought** automatically.",
            "Give them a crystal-clear **goal, constraints, and acceptance criteria** rather than micromanaging *how* to think.",
            "This lets the model choose the most accurate verification path internally while keeping your final output concise.",
          ],
        },
      ],
      techConversation: {
        context: "A Bengaluru fintech team reviews their monthly OpenAI API bill",
        speakerA: {
          role: "Engineering Manager",
          quote:
            "Why did our API latency jump to 14 seconds on the loan-eligibility screen, and why is our token bill 4x higher?",
        },
        speakerB: {
          role: "Backend Developer",
          quote:
            "Someone set `reasoning_effort: high` on every single API call! Even 'What is your customer care number?' was burning **3,000 hidden reasoning tokens**. I've switched FAQ calls to the **mini tier** and kept high reasoning only for credit underwriting.",
        },
        plainEnglishTranslation:
          "You pay for the hidden 'thinking words' a reasoning model generates before it speaks. ==Use high reasoning effort only where deep logic is required, and use mini/nano tiers for routine queries.==",
      },
      realWorldApplication: {
        forWork:
          "When you face a messy spreadsheet reconciliation, a strategic pricing trade-off, or a tricky contract comparison, manually toggle **Thinking / Reasoning mode** on. Give it all your constraints at once and let it work for 20–40 seconds.",
        forLearning:
          "When a reasoning model finishes thinking, click to expand its **thought summary**. Watching how it spots its own false assumptions and corrects course is a masterclass in structured problem-solving.",
      },
      jargonCard: {
        term: "Reasoning Tokens (Test-Time Compute)",
        oneLineAnalogy:
          "**Scratchpad rough-work** the AI writes and checks in its head before giving you the neat final answer—and yes, you pay for the scratchpad paper.",
        meetingDropLine:
          "\"Let's reserve high reasoning effort for complex multi-constraint workflows and route simple classification to the mini tier.\"",
      },
      quiz: [
        {
          id: "q3-2-1",
          scenario:
            "You ask a reasoning-enabled model a tough scheduling puzzle. It pauses for 20 seconds before printing a short 100-word answer, yet your API bill charges you for **2,500 output tokens**. Why?",
          options: [
            {
              id: "a",
              text: "The API billing meter is broken.",
              isCorrect: false,
              analogyFeedback: "Not quite. The meter is counting something real that happened during those 20 seconds.",
            },
            {
              id: "b",
              text: "The model generated 2,400 hidden reasoning tokens on its internal scratchpad to test and verify the schedule before printing the final 100 words.",
              isCorrect: true,
              analogyFeedback: "Spot on. **Thinking takes tokens**, and those hidden scratchpad tokens are billed as output tokens.",
            },
            {
              id: "c",
              text: "OpenAI charges per second of wall-clock time.",
              isCorrect: false,
              analogyFeedback: "Not quite. Pricing is based on **tokens processed and generated**, not a stopwatch timer.",
            },
            {
              id: "d",
              text: "Short answers always cost more than long answers.",
              isCorrect: false,
              analogyFeedback: "Not quite. A short answer from a fast non-reasoning model costs only a tiny fraction of a paisa.",
            },
          ],
        },
        {
          id: "q3-2-2",
          scenario:
            "Which task benefits the **least** from switching on an expensive, slow reasoning mode?",
          options: [
            {
              id: "a",
              text: "Proving a tricky mathematical theorem with edge cases.",
              isCorrect: false,
              analogyFeedback: "Math proofs require careful step-by-step verification and backtracking—ideal for reasoning mode.",
            },
            {
              id: "b",
              text: "Refactoring a legacy 800-line payment module without breaking existing types.",
              isCorrect: false,
              analogyFeedback: "Multi-constraint code refactoring is where reasoning models shine brightest.",
            },
            {
              id: "c",
              text: "Reconciling conflicting clauses across three 40-page vendor contracts.",
              isCorrect: false,
              analogyFeedback: "Cross-checking legal edge cases benefits heavily from deliberate reasoning.",
            },
            {
              id: "d",
              text: "Summarizing a 200-word internal birthday announcement into two bullet points.",
              isCorrect: true,
              analogyFeedback: "Correct! Using a heavy reasoning model to summarize a birthday note is like hiring a **Test captain to toss a coin**.",
            },
          ],
        },
        {
          id: "q3-2-3",
          scenario:
            "How should you adjust your prompting style when working with a modern reasoning model?",
          options: [
            {
              id: "a",
              text: "Define the exact end goal, constraints, and edge cases clearly, and let the model figure out the internal reasoning path.",
              isCorrect: true,
              analogyFeedback: "Exactly. Give the **destination and rules of the road**, and let the reasoning engine plan the route.",
            },
            {
              id: "b",
              text: "Use only 2-word prompts so it doesn't get confused.",
              isCorrect: false,
              analogyFeedback: "Not quite. Reasoning models thrive on **rich context and explicit constraints**.",
            },
            {
              id: "c",
              text: "Repeat 'think step by step' ten times at the bottom of the prompt.",
              isCorrect: false,
              analogyFeedback: "Not needed! Reasoning models already think step by step natively inside their hidden scratchpad.",
            },
            {
              id: "d",
              text: "Never specify the output format.",
              isCorrect: false,
              analogyFeedback: "Always tell the model what shape you want the final answer to take (e.g., table, JSON, 3 bullets).",
            },
          ],
        },
      ],
    },

    // LESSON 3
    {
      id: "anthropic-claude-and-constitutional-ai",
      title: "Anthropic's Claude: The Coder's & Writer's Favourite",
      subtitle: "Why software engineers and editors swear by Claude's nuance, Artifacts, and Constitutional AI",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Founded by former OpenAI safety researchers, Anthropic built Claude to excel at two things: ==nuanced, non-robotic writing and surgical software engineering.==",
        explanation:
          "Walk into any startup office in Koramangala or Cyber City and look at the developers' screens: chances are you'll see **Claude** (or tools powered by Claude like Cursor and Claude Code). Anthropic trained Claude using **Constitutional AI**—giving the model an explicit written charter of principles so it critiques and refines its own behaviour during training rather than relying only on human click-workers. The result is a model family (Haiku for speed, Sonnet/Fable for everyday brilliance, Opus for heavy lifting) that feels remarkably **human in tone** and **disciplined in following complex coding instructions**.",
      },
      analogy: {
        title: "The Craftsperson With a Written Code of Ethics",
        metaphor:
          "Imagine two apprentices. You train the first by clapping or frowning after every task, hoping they guess your principles. You train the second by handing them a **clear 20-point charter of craftsmanship and ethics**, asking them to review their own drafts against that charter before showing you. That second apprentice is **Constitutional AI**. And when you ask Claude to build a calculator or a dashboard, it doesn't just hand you raw bricks in the chat—it opens a side-by-side workshop window (**Artifacts**) where ==you can actually click and use what it just built.==",
        visualComparison: [
          {
            everydayItem: "A written charter the apprentice checks their own work against",
            aiEquivalent: "**Constitutional AI**: self-critique against explicit principles during training",
          },
          {
            everydayItem: "Three specialist tools: pocket knife, chef's knife, cleaver",
            aiEquivalent: "**Haiku** (fast/cheap), **Sonnet/Fable** (sweet-spot coder/writer), **Opus** (deep flagship)",
          },
          {
            everydayItem: "A live workbench next to your conversation",
            aiEquivalent: "**Claude Artifacts**: interactive side-panel rendering live apps, charts, and documents",
          },
        ],
      },
      activities: [
        {
          type: "flashcards",
          title: "The Anthropic Toolkit Explained",
          cards: [
            {
              front: "Haiku Tier",
              back: "Anthropic's **fastest, lowest-cost model**. Built for instant customer chat, classification, and high-volume extraction.",
            },
            {
              front: "Sonnet / Fable Tier",
              back: "The **workhorse sweet spot**. Balances frontier coding intelligence with brisk speed—the default engine inside most AI code editors.",
            },
            {
              front: "Opus Tier",
              back: "Anthropic's **heavyweight flagship**. Used for architectural refactoring, deep research synthesis, and hard agentic workflows.",
            },
            {
              front: "Artifacts",
              back: "A live **split-screen workspace** inside Claude where code, interactive React prototypes, SVG diagrams, and long documents render outside the chat stream.",
            },
            {
              front: "Claude Code & MCP",
              back: "**Claude Code** is a terminal agent that edits repositories directly; **Model Context Protocol (MCP)** is Anthropic's open standard for connecting AI to tools like GitHub, Slack, and Postgres.",
            },
          ],
        },
        {
          type: "tryIt",
          title: "Turn a spreadsheet headache into a live mini-app",
          intro: "Test how an interactive workspace (**Artifacts** in Claude, or Canvas in ChatGPT/Gemini) turns plain English into a working tool.",
          prompt: "Create an interactive single-page EMI & Prepayment Calculator for an Indian home loan in Rupees (₹). Let me adjust loan amount (₹20L to ₹3Cr), interest rate (7% to 11%), tenure (5 to 30 years), and an annual lump-sum prepayment. Show me clearly how many years and how many lakhs in interest I save.",
          whatToNotice: [
            "Instead of dumping dead code, the assistant opens a **live preview** with sliders you can drag immediately.",
            "Ask for an alteration: \"Add a toggle to compare reducing-balance vs keeping EMI constant when repo rate drops by 0.5%.\"",
            "You just built a **custom financial calculator** in 60 seconds without opening Excel.",
          ],
        },
      ],
      techConversation: {
        context: "A Pune product designer and lead engineer discuss prototyping a new onboarding flow",
        speakerA: {
          role: "Product Designer",
          quote:
            "Instead of static slides for tomorrow's review, I built a clickable prototype in **Claude Artifacts** and shared the link with the PM.",
        },
        speakerB: {
          role: "Lead Engineer",
          quote:
            "Nice! And once we lock the UX, I'll point **Claude Code** at our repo using **MCP** so it can read our design tokens from Figma and open a pull request automatically.",
        },
        plainEnglishTranslation:
          "Designers use **Artifacts** to spin up live, clickable prototypes from text briefs. Engineers use **MCP (Model Context Protocol)**—a universal USB-C plug for AI—so the model can safely read company tools and write production code.",
      },
      realWorldApplication: {
        forWork:
          "Next time you need to pitch an idea—a pricing calculator, an interactive ROI estimator for a client, or a project timeline—ask for an **interactive Artifact/Canvas prototype** instead of a static bulleted doc.",
        forLearning:
          "Use Artifacts/Canvas to visualize concepts: \"Build an interactive visual simulation showing how compound interest works vs inflation over 20 years in India.\"",
      },
      jargonCard: {
        term: "Model Context Protocol (MCP)",
        oneLineAnalogy:
          "**The USB-C port for AI**: one universal open standard introduced by Anthropic so any AI model can plug into Google Drive, Slack, GitHub, or your database without custom wiring.",
        meetingDropLine:
          "\"Instead of building custom integrations for every data source, let's expose our internal tools as an MCP server.\"",
      },
      quiz: [
        {
          id: "q3-3-1",
          scenario:
            "What is the core idea behind Anthropic's **Constitutional AI** training method?",
          options: [
            {
              id: "a",
              text: "The model is only trained on the Constitution of India and the US Constitution.",
              isCorrect: false,
              analogyFeedback: "Not quite! 'Constitution' here is a metaphor for a written charter of safety and helpfulness principles.",
            },
            {
              id: "b",
              text: "The model uses an explicit written set of principles to critique and revise its own responses during training.",
              isCorrect: true,
              analogyFeedback: "Spot on. Like an apprentice checking their own work against a **written charter of principles**.",
            },
            {
              id: "c",
              text: "Every response must be approved by a lawyer before it appears on screen.",
              isCorrect: false,
              analogyFeedback: "Not quite. The self-critique happens automatically during model training.",
            },
            {
              id: "d",
              text: "The model refuses to write code.",
              isCorrect: false,
              analogyFeedback: "Quite the opposite—Claude is one of the world's most popular coding models.",
            },
          ],
        },
        {
          id: "q3-3-2",
          scenario:
            "Your engineering team wants to connect your internal Postgres database, Jira board, and GitHub repo to your AI coding assistant using a single open standard rather than writing brittle custom glue code for each tool. What standard are they talking about?",
          options: [
            {
              id: "a",
              text: "HTTP Cookies",
              isCorrect: false,
              analogyFeedback: "Cookies store browser session data, not AI tool definitions.",
            },
            {
              id: "b",
              text: "JPEG Compression",
              isCorrect: false,
              analogyFeedback: "JPEG is an image format.",
            },
            {
              id: "c",
              text: "MCP (Model Context Protocol)",
              isCorrect: true,
              analogyFeedback: "Correct! **MCP is the USB-C port for AI**, letting models connect cleanly to external data and tools.",
            },
            {
              id: "d",
              text: "HTML5 Tables",
              isCorrect: false,
              analogyFeedback: "HTML5 tables format web page rows and columns, not AI tool integrations.",
            },
          ],
        },
        {
          id: "q3-3-3",
          scenario:
            "Within Anthropic's model lineup, how do **Haiku**, **Sonnet/Fable**, and **Opus** generally compare?",
          options: [
            {
              id: "a",
              text: "Haiku is only for poetry, Sonnet is only for songs, and Opus is only for music.",
              isCorrect: false,
              analogyFeedback: "Those are just the literary names Anthropic chose for its size tiers!",
            },
            {
              id: "b",
              text: "Haiku is the slowest and most expensive; Opus is the smallest and fastest.",
              isCorrect: false,
              analogyFeedback: "You've got it backwards—a haiku is a tiny 3-line poem, while an opus is a massive symphony.",
            },
            {
              id: "c",
              text: "All three are identical in speed, price, and size.",
              isCorrect: false,
              analogyFeedback: "They differ significantly in speed, cost per token, and reasoning depth.",
            },
            {
              id: "d",
              text: "Haiku is the ultra-fast budget tier, Sonnet/Fable is the balanced daily coding/writing workhorse, and Opus is the heavy flagship for complex reasoning.",
              isCorrect: true,
              analogyFeedback: "Exactly right. Match the tier to the complexity of the task.",
            },
          ],
        },
      ],
    },

    // LESSON 4
    {
      id: "google-gemini-and-multimodal-scale",
      title: "Google's Gemini: Native Multimodality & Massive Context",
      subtitle: "Why built-in video/audio understanding, 1M+ token context, and Workspace integration change the game",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Google built Gemini from day one to be **natively multimodal** with a **massive context window**—==meaning it can watch a 45-minute video, listen to audio, and read a 1,500-page codebase in a single prompt.==",
        explanation:
          "Many early AI systems were text-only brains with separate vision or speech models bolted on later. Google trained **Gemini** (Flash-Lite, Flash, and Pro/Argon tiers) across text, code, images, audio, and video simultaneously, running on Google's custom **TPU (Tensor Processing Unit)** chips. That architecture gives Gemini two distinct superpowers: it can ingest **entire hours of raw video or audio** directly without losing tone or visual detail, and its **1M to 2M token context window** lets you drop an entire folder of PDFs, financial filings, or a full software repository into one conversation—plus it sits right inside Gmail, Docs, Sheets, and Android.",
      },
      analogy: {
        title: "The All-Rounder With Photographic Memory",
        metaphor:
          "Imagine hiring a legal analyst who can only read typed transcripts—if you hand them a CCTV video or a Hindi voice note, they have to wait for someone else to type it up first, losing all the body language and tone. Now imagine an analyst who can **watch the 1-hour video directly, hear the hesitation in the voice note, and cross-reference it with 1,200 pages of contracts on their desk at the exact same moment**. ==That's native multimodality paired with a million-token context window.==",
        visualComparison: [
          {
            everydayItem: "Watching the video and hearing the voice directly",
            aiEquivalent: "**Native Multimodality**: understanding text, images, audio, and video in one unified model",
          },
          {
            everydayItem: "A desk big enough to spread out 1,500 pages at once",
            aiEquivalent: "**1M–2M Token Context Window**: holding entire books, codebases, or hour-long videos in working memory",
          },
          {
            everydayItem: "An assistant who already sits inside your office filing cabinet",
            aiEquivalent: "**Workspace & Search Grounding**: connected to Google Search, Docs, Drive, Gmail, and NotebookLM",
          },
        ],
      },
      activities: [
        {
          type: "sort",
          title: "Which Gemini capability solves the problem?",
          instructions: "Sort each workplace scenario into the specific Gemini strength it relies on.",
          buckets: ["Native Video/Audio + Long Context", "Search Grounding & Workspace Ecosystem"],
          items: [
            {
              text: "Uploading a 40-minute screen recording of a buggy mobile app to find every frame where the UI freezes",
              bucket: 0,
              why: "Gemini processes **raw video frames and timestamps** natively inside its huge context window.",
            },
            {
              text: "Checking live RBI circulars published this morning with clickable source citations",
              bucket: 1,
              why: "**Google Search grounding** fetches live web facts and links every claim to its source URL.",
            },
            {
              text: "Dropping 12 quarterly annual reports (900 pages total) into one prompt to trace margin trends",
              bucket: 0,
              why: "900 pages is roughly 450,000 tokens—well inside Gemini's **1M+ token context window**.",
            },
            {
              text: "Summarizing a 15-email customer thread directly inside Gmail and drafting a reply pulling numbers from a Google Sheet",
              bucket: 1,
              why: "Built-in **Google Workspace integration** reads across your Drive, Docs, Sheets, and Gmail safely.",
            },
          ],
        },
        {
          type: "tryIt",
          title: "Test video or long-document comprehension",
          intro: "Instead of feeding AI tiny 1-page snippets, test what happens when you give a long-context multimodal model the **whole primary source**.",
          prompt: "I am attaching a long PDF report / YouTube lecture link. Do not give me a generic summary. Instead:\n1. Find the 3 most surprising quantitative claims in the document, with exact page numbers or timestamps.\n2. Identify any contradiction between the executive summary and the detailed tables in the appendix.\n3. List 2 questions the author left unanswered.",
          whatToNotice: [
            "Long-context models excel at **cross-referencing Page 3 against Page 180**—something chunked search often misses.",
            "Asking for **exact page numbers or timestamps** makes verifying the AI's work take 15 seconds.",
            "Compare this with Google's **NotebookLM**, which grounds every single sentence in your uploaded sources with clickable citation badges.",
          ],
        },
      ],
      techConversation: {
        context: "An ed-tech startup in Noida builds an AI doubt-solver for JEE & NEET students",
        speakerA: {
          role: "Head of Curriculum",
          quote:
            "Students send photos of handwritten physics diagrams along with a 30-second Hinglish voice note asking where their derivation went wrong.",
        },
        speakerB: {
          role: "AI Lead",
          quote:
            "Instead of chaining an OCR tool, a speech-to-text API, and a text LLM, we pass the image and audio file straight to **Gemini Flash**. It sees the diagram and hears the Hinglish question in one call, cutting latency in half.",
        },
        plainEnglishTranslation:
          "When one model understands **images, audio, and text natively**, you don't need a fragile chain of three separate tools—making the app faster, cheaper, and more accurate.",
      },
      realWorldApplication: {
        forWork:
          "Record a screen-walkthrough of a complex spreadsheet or website bug while speaking your thoughts out loud, then upload the video to Gemini to automatically generate a clean **Product Requirements Document (PRD)** or bug ticket with timestamps.",
        forLearning:
          "Paste a YouTube link of a 1-hour technical lecture into Gemini and ask it to extract a structured study guide with **exact clickable timestamps** for every formula or case study.",
      },
      jargonCard: {
        term: "Search Grounding",
        oneLineAnalogy:
          "Letting the AI **check Google Search in real time** before answering, and forcing it to pin a **clickable source link** to every factual claim.",
        meetingDropLine:
          "\"Let's enable Search Grounding on our market-research endpoint so the model cites live web sources instead of relying on training memory.\"",
      },
      quiz: [
        {
          id: "q3-4-1",
          scenario:
            "What makes a **natively multimodal** model different from an older text-only LLM connected to a separate transcription tool?",
          options: [
            {
              id: "a",
              text: "It converts everything into Morse code first.",
              isCorrect: false,
              analogyFeedback: "Not quite! No Morse code involved.",
            },
            {
              id: "b",
              text: "It cannot read text at all, only images.",
              isCorrect: false,
              analogyFeedback: "Multimodal means *many* modalities—text, code, images, audio, and video together.",
            },
            {
              id: "c",
              text: "It was trained across text, images, audio, and video in one unified brain, so it can pick up visual details, tone of voice, and timestamps directly without losing information in translation.",
              isCorrect: true,
              analogyFeedback: "Spot on. Watching the video and hearing the voice directly preserves **context that plain transcripts lose**.",
            },
            {
              id: "d",
              text: "It only works on desktop computers with 4 monitors.",
              isCorrect: false,
              analogyFeedback: "Multimodal models run in the cloud or even on smartphones (like Gemini Nano on Android).",
            },
          ],
        },
        {
          id: "q3-4-2",
          scenario:
            "You have 800 pages of tender documents for a metro rail project and need to find if any penalty clause in Volume 1 conflicts with the payment schedule in Volume 4. Why is a **1M+ token context window** so valuable here?",
          options: [
            {
              id: "a",
              text: "You can load all 800 pages into working memory at once, letting the model reason across Volume 1 and Volume 4 simultaneously.",
              isCorrect: true,
              analogyFeedback: "Exactly. It's a **desk big enough to spread out all 800 pages at once** and compare them side by side.",
            },
            {
              id: "b",
              text: "It automatically deletes 790 pages so you don't have to read them.",
              isCorrect: false,
              analogyFeedback: "A large context window *retains* and attends to the pages rather than deleting them.",
            },
            {
              id: "c",
              text: "It makes the PDF file size smaller on your hard drive.",
              isCorrect: false,
              analogyFeedback: "Context window refers to the AI's working memory, not file compression on your laptop.",
            },
            {
              id: "d",
              text: "It guarantees the tender is legally valid without human review.",
              isCorrect: false,
              analogyFeedback: "Always verify legal and financial conclusions—AI finds the clauses fast, humans sign off.",
            },
          ],
        },
        {
          id: "q3-4-3",
          scenario:
            "What happens when you enable **Search Grounding** on a Gemini request?",
          options: [
            {
              id: "a",
              text: "The model disconnects from the internet to save battery.",
              isCorrect: false,
              analogyFeedback: "Search Grounding *connects* the model to live search results.",
            },
            {
              id: "b",
              text: "The model queries live Google Search results to verify current facts and attaches source links to its answer.",
              isCorrect: true,
              analogyFeedback: "Correct! Grounding anchors the model's answer in **live, verifiable web sources**.",
            },
            {
              id: "c",
              text: "The model rewrites your company website automatically.",
              isCorrect: false,
              analogyFeedback: "Search Grounding reads live information; it doesn't edit websites.",
            },
            {
              id: "d",
              text: "The model charges you in cryptocurrency.",
              isCorrect: false,
              analogyFeedback: "Definitely not!",
            },
          ],
        },
      ],
    },

    // LESSON 5
    {
      id: "meta-llama-and-open-weights",
      title: "Meta's Llama & The Open-Weight Revolution",
      subtitle: "Why Mark Zuckerberg gave away billions of dollars of AI training—and why enterprises love it",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "By releasing **Llama** as open weights, Meta turned frontier AI from a walled garden into something ==any company, hospital, or government can run inside its own firewall.==",
        explanation:
          "While OpenAI, Anthropic, and Google sell access to closed models behind an API, Meta took a radically different path with **Llama**. Meta spends billions training Llama on massive GPU clusters and then **publishes the trained parameter weights for free download** (under the Llama community licence). Why? Just as Google open-sourced Android so no rival could lock it out of mobile phones, Meta open-sourced Llama so the entire global developer ecosystem standardizes on Meta's architecture—lowering Meta's own costs and preventing closed-model monopolies. For Indian banks, hospitals, and defence labs, open weights mean **100% data sovereignty and zero per-token tax to a foreign API**.",
      },
      analogy: {
        title: "Android vs. iOS—And Commercial Kitchens vs. Swiggy",
        metaphor:
          "Ordering from a closed API (like GPT or Claude) is like **ordering every meal on Swiggy**: zero kitchen setup, great variety, and you pay per plate—but the restaurant sees every order you place. Running an open-weight model like **Llama** is like **setting up your own commercial kitchen with a master chef's published recipe book**. You have to buy or rent the ovens (GPUs), ==but no outside company ever sees your ingredients, and once your volume is huge, each plate costs a fraction as much.==",
        visualComparison: [
          {
            everydayItem: "Ordering per plate on Swiggy (zero setup, pay per item)",
            aiEquivalent: "**Closed APIs**: instant start, pay per million tokens, data travels to vendor servers",
          },
          {
            everydayItem: "Running your own kitchen with a free master recipe book",
            aiEquivalent: "**Self-hosting Open Weights (Llama)**: you pay for GPU servers, keep 100% data privacy, customize freely",
          },
          {
            everydayItem: "Note: 'Free recipe book, unless you run a rival 700-million-customer hotel chain'",
            aiEquivalent: "**Llama Licence vs True Open Source (Apache 2.0)**: Llama is free for almost everyone, with a special clause for giant tech rivals",
          },
        ],
      },
      activities: [
        {
          type: "sort",
          title: "Closed API or Self-Hosted Open Weights?",
          instructions: "Match each company's situation to the right deployment approach.",
          buckets: ["Use a Closed Frontier API", "Run Open Weights (Llama / Mistral)"],
          items: [
            {
              text: "A 3-person startup building an MVP over the weekend with zero GPU engineers",
              bucket: 0,
              why: "Closed APIs require **zero server setup** and cost pennies at low traffic.",
            },
            {
              text: "A defence research lab that operates on an air-gapped network with no internet connection",
              bucket: 1,
              why: "Only **downloaded open weights** can run on servers completely disconnected from the internet.",
            },
            {
              text: "A telecom giant processing 200 million routine call-transcript classifications every single day",
              bucket: 1,
              why: "At massive, steady volume, **fine-tuning a small 8B open-weight model** on dedicated GPUs slashes unit cost dramatically.",
            },
            {
              text: "A marketing agency needing the absolute highest multimodal video reasoning for 20 client campaigns a month",
              bucket: 0,
              why: "Low volume + maximum capability favours **renting a frontier closed model** per token.",
            },
          ],
        },
        {
          type: "flashcards",
          title: "Open-Weight Jargon You'll Hear in Meetings",
          cards: [
            {
              front: "8B vs 70B vs 405B",
              back: "The **parameter count** (in billions). An **8B** model can run on a high-end laptop; a **70B** or **405B** model needs data-centre GPU servers.",
            },
            {
              front: "Quantization (4-bit / 8-bit)",
              back: "Shrinking a model's weights from 16-bit numbers to **8-bit or 4-bit** so it fits in half the GPU memory with only a tiny dip in accuracy.",
            },
            {
              front: "Hugging Face",
              back: "The **'GitHub of AI'**: the website where labs publish open-weight models and datasets for developers to download.",
            },
            {
              front: "Ollama / vLLM",
              back: "Popular software tools for running open-weight models—**Ollama** for running local models on your Mac/PC, **vLLM** for high-speed production servers.",
            },
          ],
        },
      ],
      techConversation: {
        context: "A Mumbai brokerage firm's CISO (Chief Information Security Officer) reviews an AI proposal",
        speakerA: {
          role: "CISO",
          quote:
            "SEBI rules and our internal policy strictly forbid sending raw client portfolio holdings to any third-party cloud endpoint outside our VPC.",
        },
        speakerB: {
          role: "VP of Engineering",
          quote:
            "Understood. We'll deploy a **quantized Llama 70B** model inside our own Mumbai AWS Virtual Private Cloud using **vLLM**. Not a single byte leaves our network.",
        },
        plainEnglishTranslation:
          "When strict regulations forbid sending data to an external AI company, teams download an **open-weight model** and run it inside their own private cloud servers (**VPC**) in India.",
      },
      realWorldApplication: {
        forWork:
          "When someone says 'We can't use AI because of client privacy', you now know the exact middle ground: **open-weight models hosted in your company's own private cloud (VPC)**.",
        forLearning:
          "If you have a modern laptop with 16GB+ RAM, you can download a free tool like **Ollama** and run an 8-billion-parameter open model completely offline—even on an aeroplane in flight mode!",
      },
      jargonCard: {
        term: "Quantization",
        oneLineAnalogy:
          "**Saving a huge RAW photo as a sharp JPEG**: rounding the model's internal numbers from 16 decimals to 4 or 8 so it fits on a much smaller, cheaper chip with barely any visible loss.",
        meetingDropLine:
          "\"Can we run a 4-bit quantized 70B open model on our existing GPUs instead of provisioning a whole new cluster?\"",
      },
      quiz: [
        {
          id: "q3-5-1",
          scenario:
            "Why does a company like Meta spend billions training **Llama** and then let other companies download the weights for free?",
          options: [
            {
              id: "a",
              text: "They accidentally uploaded the files and couldn't delete them.",
              isCorrect: false,
              analogyFeedback: "Definitely not an accident—Meta has released multiple generations of Llama deliberately.",
            },
            {
              id: "b",
              text: "By making Llama the open industry standard (like Android), Meta prevents closed-model lock-in and benefits from thousands of outside developers improving the ecosystem.",
              isCorrect: true,
              analogyFeedback: "Spot on. When the whole ecosystem optimizes for Llama, Meta wins strategic independence and community improvements.",
            },
            {
              id: "c",
              text: "Because open-weight models require zero electricity to run.",
              isCorrect: false,
              analogyFeedback: "Open models still need plenty of GPU power and electricity when you run them.",
            },
            {
              id: "d",
              text: "Meta charges ₹100 per word whenever you type on your own laptop.",
              isCorrect: false,
              analogyFeedback: "When you run an open-weight model on your own hardware, you pay ₹0 per token to Meta.",
            },
          ],
        },
        {
          id: "q3-5-2",
          scenario:
            "What is the main trade-off when a company chooses to **self-host an open-weight model** instead of calling a closed API?",
          options: [
            {
              id: "a",
              text: "You get complete control over where data lives, but your engineering team must rent, manage, and scale the GPU servers themselves.",
              isCorrect: true,
              analogyFeedback: "Correct! Owning the scooter or commercial kitchen gives you privacy and control, but **you are responsible for the maintenance**.",
            },
            {
              id: "b",
              text: "Open-weight models can only speak French.",
              isCorrect: false,
              analogyFeedback: "Modern open-weight models are multilingual.",
            },
            {
              id: "c",
              text: "You don't need any computers or servers at all.",
              isCorrect: false,
              analogyFeedback: "Self-hosting requires GPU servers (either on-premise or rented in the cloud).",
            },
            {
              id: "d",
              text: "Every prompt is posted publicly on Instagram.",
              isCorrect: false,
              analogyFeedback: "Self-hosted models keep your prompts completely private on your own servers.",
            },
          ],
        },
        {
          id: "q3-5-3",
          scenario:
            "An engineer says: 'We used **4-bit quantization** so the 70B model fits on a single server.' What did they do?",
          options: [
            {
              id: "a",
              text: "They deleted 95% of the English vocabulary from the model.",
              isCorrect: false,
              analogyFeedback: "Quantization compresses the numerical precision of weights, not the dictionary.",
            },
            {
              id: "b",
              text: "They limited the model to answering in 4 words or fewer.",
              isCorrect: false,
              analogyFeedback: "'4-bit' refers to the precision of each parameter weight in memory, not output length.",
            },
            {
              id: "c",
              text: "They split the model across 4 different countries.",
              isCorrect: false,
              analogyFeedback: "Nothing to do with geography!",
            },
            {
              id: "d",
              text: "They compressed the numerical precision of the model's weights so it uses far less GPU memory while keeping almost all of its intelligence.",
              isCorrect: true,
              analogyFeedback: "Exactly—like turning a massive RAW image into a **high-quality JPEG**.",
            },
          ],
        },
      ],
    },

    // LESSON 6
    {
      id: "deepseek-mistral-and-global-challengers",
      title: "DeepSeek, Mistral & The Mixture-of-Experts Trick",
      subtitle: "How challenger labs matched frontier giants at a fraction of the compute cost",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "You don't need to light up the entire brain for every word. ==Mixture-of-Experts (MoE) models have hundreds of billions of parameters, but activate only a small specialist team for each token.==",
        explanation:
          "For years, people assumed only US tech giants with $10 billion supercomputers could build frontier AI. Then France's **Mistral**, China's **DeepSeek**, and Alibaba's **Qwen** proved that architectural cleverness could beat brute force. Their secret weapon (now used by almost all frontier labs too) is **Mixture-of-Experts (MoE)**. Instead of a 'dense' model where every single parameter fires for every single word, an MoE model might have **670 billion total parameters** divided into dozens of specialist sub-networks, yet activate only **37 billion parameters** for any given token. You get the encyclopedic knowledge of a giant model with the speed and electricity bill of a much smaller one.",
      },
      analogy: {
        title: "The Multispecialty Hospital vs. The All-Hands Meeting",
        metaphor:
          "Imagine a hospital with **100 specialist doctors** (cardiologists, orthopaedists, neurologists, paediatricians). In an old **Dense Model**, when a patient walks in with a sprained ankle, **all 100 doctors** are forced to sit in the room and examine the ankle for every single sentence spoken. Huge cost, slow decisions! In a **Mixture-of-Experts (MoE)** hospital, a smart triage nurse at the front desk (**the Router**) looks at the sprained ankle and wakes up **only the 8 orthopaedic and physio specialists** needed. ==You still have a 100-doctor hospital's knowledge on staff, but you only pay for 8 doctors' time per visit.==",
        visualComparison: [
          {
            everydayItem: "All 100 doctors examining every sprained ankle together",
            aiEquivalent: "**Dense Model**: 100% of parameters activate for every single token generated",
          },
          {
            everydayItem: "Triage desk waking up only the 8 relevant specialists per token",
            aiEquivalent: "**Mixture-of-Experts (MoE)**: huge total knowledge, tiny active compute per word",
          },
          {
            everydayItem: "Open-book Apache 2.0 / MIT licence",
            aiEquivalent: "**Permissive Open Weights** (DeepSeek, Mistral, Qwen): commercial freedom to modify and deploy",
          },
        ],
      },
      activities: [
        {
          type: "flashcards",
          title: "Meet the Global Challenger Labs",
          cards: [
            {
              front: "DeepSeek",
              back: "Chinese research lab that shocked Silicon Valley with ultra-efficient **MoE and reasoning models** (DeepSeek-V3 / R-series) released as open weights.",
            },
            {
              front: "Mistral AI",
              back: "Paris-based champion of European AI. Known for punchy, fast models (**Mistral Large, Codestral, Pixtral**) and pioneering open MoE weights.",
            },
            {
              front: "Qwen (Alibaba Cloud)",
              back: "One of the world's most downloaded open-weight families on Hugging Face, prized by developers for **coding, math, and small on-device sizes**.",
            },
            {
              front: "Mixture-of-Experts (MoE)",
              back: "An architecture that splits a giant model into **specialist sub-networks** and routes each token to only a fraction of them—slashing inference cost.",
            },
          ],
        },
        {
          type: "spotTheError",
          title: "Audit the AI Vendor Pitch",
          instructions: "A vendor is pitching their new AI deployment to your CTO. Click the sentence that contains a **misleading technical claim**.",
          question: "Which statement about Mixture-of-Experts (MoE) and open challengers is wrong?",
          sentences: [
            {
              text: "Our model uses a Mixture-of-Experts architecture with 671B total parameters and 37B active parameters per token.",
              isError: false,
              why: "This is accurate—MoE models have a large total parameter count but only activate a small subset per token.",
            },
            {
              text: "Because only 37B parameters activate per token, generating each word takes far less compute than a 671B dense model.",
              isError: false,
              why: "Correct! Active parameters determine how much math (FLOPs) happens per token.",
            },
            {
              text: "And because only 37B parameters are active, you only need enough server RAM to hold 37B parameters—the other 634B parameters don't need to be loaded into memory at all!",
              isError: true,
              why: "Busted! Even though only 37B fire per token, you **never know which expert the next word will need**—so **all 671B parameters must still sit loaded in fast GPU memory (VRAM)**.",
            },
            {
              text: "If we self-host the open-weight files inside our Indian data centre, no prompt data is ever sent to the foreign lab that trained the model.",
              isError: false,
              why: "True! Downloaded open weights are static math files; running them on your own servers sends zero traffic back to the creator.",
            },
          ],
        },
      ],
      techConversation: {
        context: "Two ML engineers debate whether running a DeepSeek or Qwen model is safe for Indian enterprise data",
        speakerA: {
          role: "Product Manager",
          quote:
            "Wait—if DeepSeek and Qwen were trained by Chinese labs, won't our customer data go to China if we use them?",
        },
        speakerB: {
          role: "Principal ML Engineer",
          quote:
            "Great question—it depends entirely on **how we run it**. Calling DeepSeek's consumer app sends data to their servers. Downloading the **open weights** and running them on our own **AWS Mumbai servers** means the model is just a static math file inside our firewall—it literally has no internet connection to phone home.",
        },
        plainEnglishTranslation:
          "Always separate **who trained the weights** from **who hosts the server**. ==A downloaded open-weight model running on your own air-gapped or Mumbai server cannot send your data anywhere.==",
      },
      realWorldApplication: {
        forWork:
          "When evaluating an AI vendor or open-weight model, always ask two separate questions: **1. What is the licence of the weights?** (e.g., Apache 2.0 or MIT lets you use it commercially without restriction) and **2. Whose servers are running the inference?**",
        forLearning:
          "Notice how competition between US, European, Chinese, and Indian labs has driven the cost of intelligence down by over **90% every year**—making building with AI cheaper than ever.",
      },
      jargonCard: {
        term: "Mixture-of-Experts (MoE)",
        oneLineAnalogy:
          "**A 100-doctor hospital where only the 8 right specialists wake up for each patient**—giving you giant-model knowledge at small-model speed.",
        meetingDropLine:
          "\"An MoE model gives us fast token generation because only a fraction of parameters activate per token, though we still need the VRAM to hold all weights.\"",
      },
      quiz: [
        {
          id: "q3-6-1",
          scenario:
            "How does a **Mixture-of-Experts (MoE)** model generate answers so much faster and cheaper than a traditional Dense model of the same total size?",
          options: [
            {
              id: "a",
              text: "It skips every second word in your prompt.",
              isCorrect: false,
              analogyFeedback: "It reads every token in your prompt.",
            },
            {
              id: "b",
              text: "An internal router activates only a small subset of specialist parameters for each token instead of firing the entire network.",
              isCorrect: true,
              analogyFeedback: "Spot on. Like waking up **only the 8 relevant specialists** out of a 100-doctor hospital.",
            },
            {
              id: "c",
              text: "It emails your question to human freelancers.",
              isCorrect: false,
              analogyFeedback: "The 'experts' are mathematical sub-networks inside the neural net, not humans!",
            },
            {
              id: "d",
              text: "It only works between midnight and 6 a.m.",
              isCorrect: false,
              analogyFeedback: "MoE architecture works 24/7.",
            },
          ],
        },
        {
          id: "q3-6-2",
          scenario:
            "Your compliance officer asks: 'If we download an open-weight model trained by a foreign lab (like Mistral in France or DeepSeek in China) and run it on our **own disconnected servers in Chennai**, can that foreign lab read our prompts?'",
          options: [
            {
              id: "a",
              text: "Yes, every model weight contains a hidden radio transmitter.",
              isCorrect: false,
              analogyFeedback: "Model weights are just giant tables of floating-point numbers—there is no radio transmitter!",
            },
            {
              id: "b",
              text: "Yes, all open-weight models automatically email logs back to their creator.",
              isCorrect: false,
              analogyFeedback: "Weights are static files; your inference server controls all network traffic.",
            },
            {
              id: "c",
              text: "No—once you download the weights and run them inside your own isolated server environment, the model is just a local math file and no data leaves your Chennai servers.",
              isCorrect: true,
              analogyFeedback: "Correct! **Where the model is hosted** determines where your prompt data goes.",
            },
            {
              id: "d",
              text: "Only on weekends.",
              isCorrect: false,
              analogyFeedback: "Network isolation works every day of the week.",
            },
          ],
        },
        {
          id: "q3-6-3",
          scenario:
            "What is the one hardware catch with a large **Mixture-of-Experts (MoE)** model that has 600B total parameters and 35B active parameters?",
          options: [
            {
              id: "a",
              text: "Even though only 35B parameters fire per token, all 600B parameters must still be loaded in fast GPU memory (VRAM) because the router might pick any expert next.",
              isCorrect: true,
              analogyFeedback: "Bingo! All 100 doctors still have to be **in the hospital building** ready to be called.",
            },
            {
              id: "b",
              text: "It can only run on Windows 95.",
              isCorrect: false,
              analogyFeedback: "MoE models run on modern Linux GPU servers.",
            },
            {
              id: "c",
              text: "It cannot output numbers.",
              isCorrect: false,
              analogyFeedback: "MoE models are actually among the strongest math and coding models.",
            },
            {
              id: "d",
              text: "You have to manually choose which expert fires using a dropdown menu.",
              isCorrect: false,
              analogyFeedback: "The learned neural router inside the model picks the experts automatically for every single token.",
            },
          ],
        },
      ],
    },

    // LESSON 7
    {
      id: "india-sovereign-ai-sarvam-krutrim-bhashini",
      title: "India's Sovereign AI: Sarvam, Bhashini & Indic Models",
      subtitle: "Why Indian scripts, code-mixed Hinglish/Tanglish voice, and local data centres need homegrown builders",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "India doesn't speak in textbook English—it speaks across **22 official languages, 12 scripts, and code-mixed Hinglish/Tanglish over noisy phone lines**. ==That's why India's sovereign AI builders exist.==",
        explanation:
          "Remember from Track 1 how Western tokenizers chop Devanagari, Tamil, or Telugu into 3x–5x more tokens than English? Indian AI labs like Bengaluru's **Sarvam AI** (bulbul voice models, Sarvam-2B/M, and sovereign models under the IndiaAI Mission), **Bhashini** (India's Digital Public Infrastructure for voice translation), **AI4Bharat** (at IIT Madras), and **Krutrim** tackle three problems global labs treat as an afterthought: **1. Custom Indic tokenizers** that make Hindi, Tamil, Marathi, and Kannada 3x faster and cheaper; **2. Code-mixed voice AI** that understands a farmer or customer switching mid-sentence between Hindi and English over an ₹800 feature phone; and **3. Strict Indian data residency** for banks, courts, and citizen services.",
      },
      analogy: {
        title: "Imported Winter Coats vs. Cotton Kurta Tailored for Indian Summers",
        metaphor:
          "A luxury European winter coat is a masterpiece of engineering—for **Zurich in January**. Wear it in **Chennai in May**, or try riding a crowded Mumbai local train in it, and it fails miserably. Western LLMs were built first for English text on laptops. India's AI market is **voice-first, mobile-first, multilingual, and price-sensitive**. Builders like Sarvam AI and Bhashini stitch AI specifically for Indian weather: ==handling background horn noise, regional accents, rupee amounts in lakhs and crores, and switching seamlessly between Malayalam and English.==",
        visualComparison: [
          {
            everydayItem: "Western tokenizer charging 4x tokens for Hindi/Tamil script",
            aiEquivalent: "**Indic Tokenizer** (Sarvam / Krutrim): compresses Indian scripts efficiently so calls are fast and cheap",
          },
          {
            everydayItem: "\"Mera refund status check karo please, order ID 482 hai\"",
            aiEquivalent: "**Code-Mixed Voice AI**: handles real-world Hinglish/Tanglish phone calls with low latency",
          },
          {
            everydayItem: "UPI / Aadhaar as public rails anyone can build on",
            aiEquivalent: "**Bhashini & AI4Bharat**: open datasets and translation rails across 22 scheduled Indian languages",
          },
        ],
      },
      activities: [
        {
          type: "flashcards",
          title: "Key Players in India's AI Ecosystem",
          cards: [
            {
              front: "Sarvam AI",
              back: "Bengaluru lab building **Indic foundational models and ultra-natural voice agents** (Bulbul, Saaras) in 10+ Indian languages, selected under the **IndiaAI Mission**.",
            },
            {
              front: "Bhashini",
              back: "India's **National Language Translation Mission**—Digital Public Infrastructure (like UPI for language) providing speech-to-speech and text translation across 22 Indian languages.",
            },
            {
              front: "AI4Bharat (IIT Madras)",
              back: "Premier open-source research group creating **Indic datasets, speech models, and benchmarks** that power much of India's language AI ecosystem.",
            },
            {
              front: "IndiaAI Mission",
              back: "The Government of India's **₹10,000+ crore initiative** providing shared GPU compute clusters, indigenous foundational models, and safe datasets for Indian startups and researchers.",
            },
          ],
        },
        {
          type: "scenario",
          title: "Building a Voice Helpline for Rural Microfinance Borrowers",
          setting:
            "You are the Product Lead at an NBFC serving **4 million borrowers across Maharashtra, Tamil Nadu, and Uttar Pradesh**. Borrowers call on normal phone lines (not apps) to check EMI dates in Marathi, Tamil, and Bhojpuri-inflected Hindi.",
          steps: [
            {
              situation:
                "Your engineer tests a standard US-hosted English-first voice model. Borrowers complain of **3-second awkward pauses** and the bot mishears 'डेढ़ लाख' (₹1.5 lakh) and village names. Why?",
              choices: [
                {
                  text: "Because Indian borrowers speak too fast for computers.",
                  isBest: false,
                  outcome:
                    "Not at all! The issue is the model's training distribution, tokenizer, and server distance.",
                },
                {
                  text: "Because round-trip audio to US servers adds latency, Western tokenizers bloat Indic scripts, and the speech model wasn't trained on Indian telephony audio and lakhs/crores.",
                  isBest: true,
                  outcome:
                    "Spot on! Voice conversations feel broken if latency crosses ~500ms, and Indian numbers/accents need specialized Indic training.",
                },
              ],
            },
            {
              situation:
                "How do you redesign the architecture so the helpline feels instant, understands code-mixed Marathi/Tamil, and meets RBI data localization rules?",
              choices: [
                {
                  text: "Tell borrowers to send emails in English instead.",
                  isBest: false,
                  outcome:
                    "You'd lose 90% of your rural borrowers overnight.",
                },
                {
                  text: "Deploy an India-hosted Indic voice stack (like Sarvam's voice APIs or AI4Bharat/Bhashini models inside a Mumbai/Chennai data centre) for speech-to-text and text-to-speech.",
                  isBest: true,
                  outcome:
                    "Exactly! Sub-500ms local latency, native understanding of Indian names and lakhs/crores, and 100% RBI data residency compliance.",
                },
              ],
            },
          ],
          debrief:
            "For India's next 500 million internet users, **AI equals Voice in their mother tongue**. Combining global reasoning models with **Indian-language voice specialists** is a winning playbook.",
        },
      ],
      techConversation: {
        context: "An e-commerce logistics head sets up automated delivery confirmation calls",
        speakerA: {
          role: "VP of Logistics",
          quote:
            "30% of our cash-on-delivery parcels return undelivered because customers don't read English SMS alerts.",
        },
        speakerB: {
          role: "AI Product Manager",
          quote:
            "We plugged in **Sarvam's Indic voice agent**. It calls the customer in their pin-code's local language, confirms if they're home or want evening delivery in natural **Hinglish or Kannada**, and updates our dispatch system automatically for **under ₹2 per call**.",
        },
        plainEnglishTranslation:
          "Voice AI built specifically for **Indian accents, code-mixing, and noisy 8kHz phone lines** solves real operational problems that text chatbots never reach.",
      },
      realWorldApplication: {
        forWork:
          "If your business serves customers outside Tier-1 English-speaking metros, test an **Indic voice or translation layer** (Sarvam, Bhashini) rather than assuming a US-centric model will nail regional nuances out of the box.",
        forLearning:
          "Try speaking to a modern Indic voice model in natural Hinglish or your mother tongue mixed with English words—notice how it handles the switch without choking.",
      },
      jargonCard: {
        term: "Sovereign AI & Code-Mixing",
        oneLineAnalogy:
          "**Sovereign AI** is AI trained on a nation's own languages and hosted within its borders; **code-mixing** is switching between languages mid-sentence (*'Kal meeting postpone karein kya?'*).",
        meetingDropLine:
          "\"For Tier-2 and Tier-3 voice support, we need a model tuned for code-mixed Indic telephony audio hosted in an Indian data centre.\"",
      },
      quiz: [
        {
          id: "q3-7-1",
          scenario:
            "Why do Indian AI builders like **Sarvam AI** train custom tokenizers for Indian scripts (Devanagari, Tamil, Telugu, Kannada, Bengali) instead of using standard English-centric tokenizers?",
          options: [
            {
              id: "a",
              text: "Because English tokenizers break Indian scripts into 3x–5x more fragments per word, making Indian languages slower and more expensive to process.",
              isCorrect: true,
              analogyFeedback: "Spot on. An **Indic-optimized tokenizer** treats Indian syllables as first-class citizens, cutting latency and cost.",
            },
            {
              id: "b",
              text: "Because Unicode does not support Indian alphabets.",
              isCorrect: false,
              analogyFeedback: "Unicode has supported Indian scripts for decades; the issue is how the AI's tokenizer groups characters.",
            },
            {
              id: "c",
              text: "To stop the model from understanding English.",
              isCorrect: false,
              analogyFeedback: "Indic models are intentionally trained on both English and Indian languages to handle code-mixing.",
            },
            {
              id: "d",
              text: "Because Indian scripts don't have vowels.",
              isCorrect: false,
              analogyFeedback: "Indian scripts are rich abugida systems with full vowel and consonant representations!",
            },
          ],
        },
        {
          id: "q3-7-2",
          scenario:
            "What is **code-mixing** in the context of Indian customer conversations?",
          options: [
            {
              id: "a",
              text: "Writing Python and JavaScript in the same file.",
              isCorrect: false,
              analogyFeedback: "In linguistics and voice AI, 'code-mixing' refers to human languages, not programming languages.",
            },
            {
              id: "b",
              text: "Encrypting bank passwords.",
              isCorrect: false,
              analogyFeedback: "That's cryptography, not code-mixing.",
            },
            {
              id: "c",
              text: "Naturally blending two languages in the same sentence, like Hinglish ('Mera order abhi tak dispatch nahi hua, please check karo').",
              isCorrect: true,
              analogyFeedback: "Correct! Real Indians rarely speak pure textbook Hindi or Tamil on customer calls—they **blend English and regional words** in every sentence.",
            },
            {
              id: "d",
              text: "Speaking two sentences at the exact same time.",
              isCorrect: false,
              analogyFeedback: "Nobody can speak two sentences simultaneously!",
            },
          ],
        },
        {
          id: "q3-7-3",
          scenario:
            "What is **Bhashini** in India's technology landscape?",
          options: [
            {
              id: "a",
              text: "A paid foreign video game.",
              isCorrect: false,
              analogyFeedback: "Not a video game!",
            },
            {
              id: "b",
              text: "A hardware chip manufacturer in Taiwan.",
              isCorrect: false,
              analogyFeedback: "That's TSMC.",
            },
            {
              id: "c",
              text: "A private cryptocurrency exchange.",
              isCorrect: false,
              analogyFeedback: "Not crypto-related at all.",
            },
            {
              id: "d",
              text: "India's Digital Public Infrastructure (National Language Translation Mission) for speech and text translation across 22 scheduled Indian languages.",
              isCorrect: true,
              analogyFeedback: "Exactly—think of Bhashini as **public digital rails for Indian languages**, similar in spirit to UPI for payments.",
            },
          ],
        },
      ],
    },

    // LESSON 8
    {
      id: "cloud-hyperscalers-and-inference-chips",
      title: "The Picks & Shovels: NVIDIA, TPUs & Cloud Hyperscalers",
      subtitle: "Why every AI lab depends on chipmakers, cloud landlords, and ultra-fast inference engines",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "In a gold rush, the people selling **picks, shovels, and land** get rich first. ==In AI, that's chip designers (NVIDIA, Google TPUs), foundry giant TSMC, and cloud hyperscalers (AWS, Azure, Google Cloud).==",
        explanation:
          "When your company uses AI, you rarely buy a ₹3 crore server rack yourself. Instead, there is a three-layer hardware stack underneath every model: **1. Silicon Chips**: **NVIDIA** (Blackwell & Rubin GPUs) dominates general AI training and inference, while **Google builds its own custom TPUs** (Tensor Processing Units), AWS builds Trainium/Inferentia, and specialised startups like **Groq and Cerebras** build ultra-fast inference chips (LPUs / wafer-scale chips) that spit out 1,000+ tokens per second. **2. The Foundry**: Almost all of these advanced chips are physically manufactured by **TSMC** in Taiwan. **3. Cloud Gateways**: **AWS Bedrock**, **Google Cloud Vertex AI**, and **Azure AI Foundry** let enterprises rent dozens of different models through one single security and billing contract.",
      },
      analogy: {
        title: "The Airline, The Boeing Engine, and The Airport Terminal",
        metaphor:
          "Think of AI models (Claude, Llama, Gemini) as **airlines**. Underneath those airlines, almost all of them fly on jet engines made by one dominant manufacturer (**NVIDIA GPUs**, plus Google's in-house **TPUs**), forged in one ultra-precision factory (**TSMC**). And as a corporate traveller, you don't sign separate contracts with 15 airlines—you book through one corporate travel desk (**AWS Bedrock or Google Vertex AI**) ==that puts every model on your existing monthly cloud bill and keeps your flights inside the Mumbai or Hyderabad airport terminal.==",
        visualComparison: [
          {
            everydayItem: "The high-thrust jet engine under the wing",
            aiEquivalent: "**AI Accelerators**: NVIDIA GPUs, Google TPUs, Groq LPUs, Cerebras wafer-scale chips",
          },
          {
            everydayItem: "The single corporate travel desk for all airlines",
            aiEquivalent: "**Managed Cloud Gateways**: AWS Bedrock, Google Vertex AI, Azure AI Foundry",
          },
          {
            everydayItem: "Bullet train built purely for instant point-to-point speed",
            aiEquivalent: "**Fast Inference Providers** (Groq, Cerebras, Fireworks, Together): 500–2,000 tokens/sec on open models",
          },
        ],
      },
      activities: [
        {
          type: "sort",
          title: "Who does what in the AI infrastructure stack?",
          instructions: "Sort each name into **Chips & Fast Hardware** vs **Enterprise Cloud Model Gateways**.",
          buckets: ["Chips & Ultra-Fast Silicon", "Enterprise Cloud Gateways"],
          items: [
            {
              text: "NVIDIA Blackwell & Rubin GPUs",
              bucket: 0,
              why: "NVIDIA designs the **dominant GPUs** (and CUDA software) used to train and run AI models worldwide.",
            },
            {
              text: "AWS Bedrock",
              bucket: 1,
              why: "Amazon's managed cloud service where enterprises access **Claude, Llama, Mistral, and Nova** under one AWS account.",
            },
            {
              text: "Google TPUs (Tensor Processing Units)",
              bucket: 0,
              why: "Google's custom-designed **AI silicon chips** that train and serve Gemini at massive scale.",
            },
            {
              text: "Google Cloud Vertex AI & Azure AI Foundry",
              bucket: 1,
              why: "Enterprise cloud platforms that wrap frontier and open models with **IAM security, regional hosting, and unified billing**.",
            },
            {
              text: "Groq LPUs & Cerebras Wafer-Scale Engines",
              bucket: 0,
              why: "Specialized **inference silicon** built to generate tokens at blistering speeds (often 1,000+ tokens/sec) for real-time voice and coding.",
            },
          ],
        },
        {
          type: "decodeChat",
          title: "Decode the Cloud Architecture Meeting",
          setting: "Your DevOps lead explains why the team isn't signing up directly on a model lab's website",
          lines: [
            {
              speaker: "DevOps Lead",
              text: "Instead of putting a corporate credit card on three different AI startup websites, we're routing everything through **AWS Bedrock** in the `ap-south-1` (Mumbai) region.",
              plainEnglish: "We're renting the AI models through our **existing Amazon Cloud account inside Mumbai** so our finance and security teams only deal with one trusted vendor.",
            },
            {
              speaker: "Backend Lead",
              text: "That way our prompts stay inside our **VPC via PrivateLink**, we use our existing **AWS credits**, and we can swap between **Claude and Llama** with a one-line config change.",
              plainEnglish: "Our data travels over a **private cable instead of the public internet**, uses cloud discounts we already paid for, and avoids getting locked into one model.",
            },
          ],
        },
      ],
      techConversation: {
        context: "A voice-bot startup needs instant responses with zero lag",
        speakerA: {
          role: "Founder",
          quote:
            "When a customer speaks on the phone, waiting 2 seconds for the LLM to generate a reply feels robotic. How do we make it feel instantaneous?",
        },
        speakerB: {
          role: "CTO",
          quote:
            "We switched our Llama 70B inference to a specialized **SRAM-based inference chip provider** (like Groq or Cerebras). It generates **over 800 tokens per second**, so the full answer is ready in **120 milliseconds**.",
        },
        plainEnglishTranslation:
          "Standard GPUs can bottleneck on memory bandwidth when generating words one by one. Specialized **fast-inference chips** generate text faster than the blink of an eye, making live voice agents feel human.",
      },
      realWorldApplication: {
        forWork:
          "If your procurement or security team is blocking a new AI vendor because onboarding a new supplier takes 6 months, ask: **'Is this model already available inside our existing AWS Bedrock, Google Vertex AI, or Azure account?'** Nine times out of ten, it is—and it's already pre-approved!",
        forLearning:
          "Understand why NVIDIA became one of the most valuable companies on Earth: every lab—whether OpenAI, Meta, or xAI—had to buy its 'shovels' (GPUs and CUDA software) to compete.",
      },
      jargonCard: {
        term: "Hyperscaler Model Gateway (Bedrock / Vertex / Foundry)",
        oneLineAnalogy:
          "**A food-court card inside your existing cloud account**: use your existing AWS, Google Cloud, or Azure security and billing to order models from Anthropic, Meta, Mistral, and more.",
        meetingDropLine:
          "\"We don't need a new vendor security audit—we can call Claude or Llama directly through our existing AWS Bedrock Mumbai setup.\"",
      },
      quiz: [
        {
          id: "q3-8-1",
          scenario:
            "Your enterprise IT security team says onboarding a brand-new vendor takes 4 months of legal review, but your company already has an enterprise contract with **AWS (Mumbai region)** or **Google Cloud**. What is the fastest compliant way to use Claude or Llama?",
          options: [
            {
              id: "a",
              text: "Use a personal Gmail account and hope IT doesn't notice.",
              isCorrect: false,
              analogyFeedback: "Shadow AI violates security policy and risks leaking company data!",
            },
            {
              id: "b",
              text: "Access the models through your existing cloud provider's managed gateway (like AWS Bedrock or Google Cloud Vertex AI), which is already covered by your enterprise agreement.",
              isCorrect: true,
              analogyFeedback: "Spot on. You use your **existing cloud security, Mumbai region hosting, and unified billing**.",
            },
            {
              id: "c",
              text: "Build your own semiconductor factory in the office basement.",
              isCorrect: false,
              analogyFeedback: "A semiconductor fab costs $20 billion and takes years to build!",
            },
            {
              id: "d",
              text: "Wait 4 months before writing a single line of code.",
              isCorrect: false,
              analogyFeedback: "Using your existing cloud gateway lets you start building today.",
            },
          ],
        },
        {
          id: "q3-8-2",
          scenario:
            "What role do **NVIDIA GPUs** and **Google TPUs** play in the AI ecosystem?",
          options: [
            {
              id: "a",
              text: "They are consumer chat apps competing with WhatsApp.",
              isCorrect: false,
              analogyFeedback: "They are hardware chips, not consumer chat apps.",
            },
            {
              id: "b",
              text: "They are office chairs designed for programmers.",
              isCorrect: false,
              analogyFeedback: "Not furniture!",
            },
            {
              id: "c",
              text: "They are the specialized silicon chips (AI accelerators) that perform the massive matrix math required to train and run AI models.",
              isCorrect: true,
              analogyFeedback: "Correct! They are the **high-thrust jet engines** powering both training and inference.",
            },
            {
              id: "d",
              text: "They are government regulators that approve AI laws.",
              isCorrect: false,
              analogyFeedback: "GPUs and TPUs are computer chips, not regulatory bodies.",
            },
          ],
        },
        {
          id: "q3-8-3",
          scenario:
            "Why would an engineering team use a specialized inference provider like **Groq** or **Cerebras** to run an open-weight model?",
          options: [
            {
              id: "a",
              text: "To slow the model down so humans can read more slowly.",
              isCorrect: false,
              analogyFeedback: "Nobody pays extra to make an API slower!",
            },
            {
              id: "b",
              text: "Because they offer free laptops to every user.",
              isCorrect: false,
              analogyFeedback: "They are cloud inference API providers, not laptop giveaways.",
            },
            {
              id: "c",
              text: "To store PDF files offline.",
              isCorrect: false,
              analogyFeedback: "That's cloud storage (like S3), not an inference engine.",
            },
            {
              id: "d",
              text: "To achieve ultra-fast token generation speeds (hundreds or thousands of tokens per second) for latency-critical features like live voice agents and instant code autocomplete.",
              isCorrect: true,
              analogyFeedback: "Exactly. When **every millisecond counts**, specialized inference silicon makes AI feel instant.",
            },
          ],
        },
      ],
    },

    // LESSON 9
    {
      id: "coding-and-workflow-specialists",
      title: "The Application Layer: Cursor, Perplexity, NotebookLM & Lovable",
      subtitle: "Why the tools you use every day aren't foundational labs—they're workflow specialists that orchestrate multiple models",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "You don't buy a raw car engine; you buy a car with a steering wheel, brakes, and GPS. ==Application-layer winners wrap frontier models in purpose-built workflows and smart multi-model routing.==",
        explanation:
          "Early on, critics dismissed apps built on top of OpenAI, Anthropic, or Google APIs as 'thin wrappers'. Today, the fastest-growing AI products in the world—like **Cursor** (for software engineering), **Perplexity** (for cited live research), **Lovable / Bolt / v0** (for full-stack app building), and **NotebookLM** (for grounded document study)—sit at the **application layer**. They don't train $5 billion base models from scratch. Instead, they win on **context engineering, UX, and model orchestration**: indexing your entire codebase or document library, routing simple steps to fast small models, sending hard steps to Claude or GPT or Gemini, and verifying the output before you ever see it.",
      },
      analogy: {
        title: "The Master Chef's Kitchen vs. The Raw Flour Mill",
        metaphor:
          "Foundational labs (OpenAI, Anthropic, Google, Meta) are the **giant mills and farms** producing world-class flour, spices, and paneer. You *can* buy a 50kg sack of raw flour (a raw chatbot window) and cook everything from scratch by pasting files back and forth all day. Or you can walk into a **specialist kitchen** where the knives, ovens, and ingredients are already arranged for one exact job: **Cursor** for software engineers, **Perplexity** for cited web answers, **NotebookLM** for studying your own PDFs. ==They don't grow the wheat—they plate the finished dish in 10 seconds.==",
        visualComparison: [
          {
            everydayItem: "Raw 50kg sack of flour (versatile, manual effort)",
            aiEquivalent: "**General Chatbot Window**: great for ad-hoc questions, manual copy-pasting",
          },
          {
            everydayItem: "A power tool built right into the carpenter's workbench",
            aiEquivalent: "**Cursor / Windsurf**: reads your whole codebase, edits multiple files, runs terminal tests",
          },
          {
            everydayItem: "A research librarian who pins a footnote to every sentence",
            aiEquivalent: "**Perplexity & NotebookLM**: search-first and document-grounded workflows with strict citations",
          },
        ],
      },
      activities: [
        {
          type: "flashcards",
          title: "Specialist Tools Worth Knowing by Name",
          cards: [
            {
              front: "Cursor / Windsurf",
              back: "**AI-native code editors**. They index your whole project, let you pick between Claude, GPT, or Gemini, and edit 10 files at once.",
            },
            {
              front: "Perplexity",
              back: "An **AI answer engine** that searches live web sources first, synthesizes a concise briefing, and cites every single claim with links.",
            },
            {
              front: "NotebookLM (Google)",
              back: "A **source-grounded research workspace**. Upload up to dozens of PDFs, links, or audio files; it answers *only* from your uploads and can even generate a 2-host audio podcast summary.",
            },
            {
              front: "Lovable / v0 / Bolt",
              back: "**Vibe-coding app builders** for non-coders and PMs. Describe a web app in plain English and get a live, deployed full-stack site with database and login.",
            },
          ],
        },
        {
          type: "sort",
          title: "Pick the Right Specialist Tool for the Job",
          instructions: "Instead of doing everything in one blank chat box, match each task to the specialist workflow tool designed for it.",
          buckets: ["Perplexity / NotebookLM (Research & Grounding)", "Cursor / Lovable (Building & Coding)"],
          items: [
            {
              text: "Studying 15 uploaded RBI compliance PDFs so every answer points to the exact paragraph in your files",
              bucket: 0,
              why: "**NotebookLM** locks the AI to your uploaded documents with clickable inline citations and near-zero outside hallucination.",
            },
            {
              text: "Spinning up a working customer feedback portal with a database and shareable URL before a 4 p.m. meeting",
              bucket: 1,
              why: "**Lovable / Bolt / v0** turn plain-English prompts into deployed web apps with live previews.",
            },
            {
              text: "Checking how three competitors in Southeast Asia changed their pricing this week, with live web links",
              bucket: 0,
              why: "**Perplexity** searches the live web first and compiles a cited competitive brief.",
            },
            {
              text: "Refactoring an existing 50-file TypeScript repository and running automated unit tests to verify nothing broke",
              bucket: 1,
              why: "**Cursor** indexes the entire repository, applies multi-file diffs, and executes terminal tests in a loop.",
            },
          ],
        },
      ],
      techConversation: {
        context: "A venture investor and a SaaS founder discuss why 'thin wrappers' fail while workflow apps win",
        speakerA: {
          role: "Investor",
          quote:
            "If your product just takes a user's text, sends it to an LLM API, and prints the reply, why won't ChatGPT or Gemini crush you next month?",
        },
        speakerB: {
          role: "Founder",
          quote:
            "A thin prompt wrapper would die. Our moat is the **workflow and context engine**: we connect to the hospital's billing system, run **3 specialized models in a cascade**, verify every insurance code against a deterministic rule table, and write directly into the claim portal.",
        },
        plainEnglishTranslation:
          "Putting a pretty coat of paint on one AI prompt is a **thin wrapper**. Building a tool that **pulls the right context, orchestrates multiple models, checks accuracy, and completes the action inside the user's real workflow** is how application-layer companies win.",
      },
      realWorldApplication: {
        forWork:
          "Stop using one single tab for everything. Use **Perplexity** (or Gemini/ChatGPT Search) when you need live cited facts, **NotebookLM** when working strictly from your own PDFs/contracts, and **Lovable / AI Studio / Cursor** when you want to build a working prototype.",
        forLearning:
          "Upload 5 chapters of a textbook or 4 industry reports into **NotebookLM** and click **Audio Overview**—it generates a remarkably lively 10-minute conversation you can listen to on your commute.",
      },
      jargonCard: {
        term: "Thin Wrapper vs. System of Action",
        oneLineAnalogy:
          "A **thin wrapper** just puts a new label on someone else's chatbot; a **system of action** connects the AI to your real files, checks its work, and finishes the job end-to-end.",
        meetingDropLine:
          "\"We shouldn't build a thin chat wrapper—our value is automatic context retrieval and writing verified results straight back into the CRM.\"",
      },
      quiz: [
        {
          id: "q3-9-1",
          scenario:
            "You have 12 confidential board deck PDFs and want an AI workspace that answers questions **strictly from those 12 files**, pinning a clickable citation to the exact slide for every single sentence. Which tool was built specifically for this workflow?",
          options: [
            {
              id: "a",
              text: "Midjourney",
              isCorrect: false,
              analogyFeedback: "Midjourney generates images, not document-grounded research.",
            },
            {
              id: "b",
              text: "NotebookLM",
              isCorrect: true,
              analogyFeedback: "Spot on! **NotebookLM** grounds every response strictly in the sources you upload into that notebook.",
            },
            {
              id: "c",
              text: "A calculator app",
              isCorrect: false,
              analogyFeedback: "A calculator doesn't read PDFs!",
            },
            {
              id: "d",
              text: "An ungrounded image generator",
              isCorrect: false,
              analogyFeedback: "Image generators create pictures, not cited document answers.",
            },
          ],
        },
        {
          id: "q3-9-2",
          scenario:
            "Why do AI code editors like **Cursor** let developers switch between models from Anthropic (Claude), OpenAI (GPT), and Google (Gemini) inside the same project?",
          options: [
            {
              id: "a",
              text: "Because no single model is best at everything—a developer might use a fast model for autocomplete, Claude for multi-file refactoring, and Gemini for reading a huge 1M-token log file.",
              isCorrect: true,
              analogyFeedback: "Correct! Application-layer winners **orchestrate the best model for each specific sub-task**.",
            },
            {
              id: "b",
              text: "Because models get tired after 5 minutes and need a nap.",
              isCorrect: false,
              analogyFeedback: "Cloud APIs don't take naps!",
            },
            {
              id: "c",
              text: "Because each model can only type 10 lines of code per day.",
              isCorrect: false,
              analogyFeedback: "Models can generate thousands of lines of code.",
            },
            {
              id: "d",
              text: "To make the settings menu look complicated.",
              isCorrect: false,
              analogyFeedback: "Multi-model choice is a genuine productivity superpower, not decoration.",
            },
          ],
        },
        {
          id: "q3-9-3",
          scenario:
            "What do investors and product leaders mean when they call an AI product a **'thin wrapper'**?",
          options: [
            {
              id: "a",
              text: "A mobile app that uses very little battery.",
              isCorrect: false,
              analogyFeedback: "'Thin wrapper' is about business and product depth, not battery usage.",
            },
            {
              id: "b",
              text: "A chip manufactured at 2 nanometers.",
              isCorrect: false,
              analogyFeedback: "That's semiconductor manufacturing.",
            },
            {
              id: "c",
              text: "An app that does nothing more than forward a user's prompt to a foundational model API with a basic system prompt—offering no proprietary context, workflow integration, or verification.",
              isCorrect: true,
              analogyFeedback: "Exactly. Without deep workflow integration and context engineering, a thin wrapper is easily replaced.",
            },
            {
              id: "d",
              text: "An open-weight model hosted in Mumbai.",
              isCorrect: false,
              analogyFeedback: "Self-hosting an open model is infrastructure engineering, not a thin wrapper.",
            },
          ],
        },
      ],
    },

    // LESSON 10
    {
      id: "model-selection-playbook",
      title: "The Model Selection Playbook: How to Pick Like a CTO",
      subtitle: "A 4-question matrix to choose the right AI for any task across intelligence, speed, privacy, and rupee cost",
      durationMinutes: 8,
      xpReward: 200,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Stop asking 'Which AI is the smartest?' Start asking four sharper questions: ==How hard is the task? How fast must it reply? Where must the data live? And how many times a day will it run?==",
        explanation:
          "You now know the entire chessboard: closed frontier labs (OpenAI, Anthropic, Google), open-weight champions (Llama, DeepSeek, Mistral, Qwen), India's sovereign voice & language builders (Sarvam, Bhashini), hardware & cloud gateways (NVIDIA, TPUs, Bedrock, Vertex), and workflow apps (Cursor, Perplexity, NotebookLM). How do you actually pick? Smart teams never pick **one** model for their whole company. They use a **4-Question Decision Matrix**—matching each workflow to the **smallest, fastest, most compliant model that passes their quality bar**.",
      },
      analogy: {
        title: "Running a Fleet for an E-Commerce Delivery Company",
        metaphor:
          "Imagine running logistics for a national commerce brand. You don't buy 5,000 helicopters, and you don't buy 5,000 bicycles. You use **electric 2-wheelers** for 10-minute neighbourhood grocery drops (fast/nano models), **refrigerated vans** for inter-city medicine (secure private-cloud open models), **local auto-rickshaws** for narrow old-city lanes (Indic voice specialists), and **cargo jets** for urgent high-value electronics (frontier reasoning models). ==Being an Ecosystem Insider means dispatching the right vehicle for every route.==",
        visualComparison: [
          {
            everydayItem: "Electric scooter for 10,000 daily neighbourhood drops",
            aiEquivalent: "**Mini / Flash / Haiku tier**: sub-second speed, ~₹5–₹15 per million tokens",
          },
          {
            everydayItem: "Cargo jet for complex, high-value freight",
            aiEquivalent: "**Frontier / Reasoning tier** (GPT-6 Astra, Claude Opus/Fable, Gemini Argon): deep logic & coding",
          },
          {
            everydayItem: "Armoured van that never leaves your city limits",
            aiEquivalent: "**Self-hosted Open Weights / Sovereign Indic AI**: strict RBI/DPDP data residency & regional voice",
          },
        ],
      },
      activities: [
        {
          type: "scenario",
          title: "You're the AI Architect: Pick the Stack for 3 Features",
          setting:
            "You've just been promoted to head the AI rollout at a **mid-sized Indian healthcare & insurance platform** in Gurugram. The CEO wants three features launched this quarter without blowing the budget or breaking compliance.",
          steps: [
            {
              situation:
                "Feature 1: **Live Voice Triage in Hindi, Marathi, and Tamil** when patients call the helpline on regular phone lines. Latency must be under 500ms.",
              choices: [
                {
                  text: "Route phone audio to a heavy US-hosted reasoning model that thinks for 18 seconds before replying.",
                  isBest: false,
                  outcome:
                    "Patients will think the call dropped and hang up after 4 seconds of silence!",
                },
                {
                  text: "Use an India-hosted Indic voice stack (e.g. Sarvam AI / Bhashini speech + a fast low-latency Flash/Haiku/Llama-8B model in Mumbai).",
                  isBest: true,
                  outcome:
                    "Spot on! Sub-500ms latency, fluent code-mixed regional speech, and data stays inside Indian servers.",
                },
              ],
            },
            {
              situation:
                "Feature 2: **Reading 150-page scanned hospital discharge summaries and policy wordings** to flag missing documents for human claims officers.",
              choices: [
                {
                  text: "Use a tiny 4,000-token text-only model and chop the 150 pages into 60 disconnected pieces.",
                  isBest: false,
                  outcome:
                    "Chopping a medical chart into 60 blind fragments makes the model miss links between diagnosis on page 2 and billing on page 140.",
                },
                {
                  text: "Use a long-context natively multimodal model (like Gemini or Claude via Vertex AI / AWS Bedrock in Mumbai) that can read all 150 scanned pages in one context window.",
                  isBest: true,
                  outcome:
                    "Exactly. Native vision reads scanned tables/handwriting, the 1M+ window holds the whole claim at once, and the Mumbai cloud gateway satisfies enterprise security.",
                },
              ],
            },
            {
              situation:
                "Feature 3: **An internal coding assistant** for your 40 software engineers to modernize legacy Java backend services.",
              choices: [
                {
                  text: "Ask engineers to paste one function at a time into a free personal chat tab.",
                  isBest: false,
                  outcome:
                    "Slow, loses multi-file context, and leaks proprietary source code into personal accounts.",
                },
                {
                  text: "Equip engineers with an enterprise AI code editor (like Cursor / Claude Code) backed by frontier coding models (Claude Sonnet/Opus or GPT reasoning) with zero-data-retention enabled.",
                  isBest: true,
                  outcome:
                    "Textbook decision. Multi-file repository indexing, top coding intelligence, and enterprise privacy guarantees.",
                },
              ],
            },
          ],
          debrief:
            "Notice how you didn't pick a single 'best' AI company—you picked **three purpose-fit combinations** across voice, long-document multimodality, and software engineering.",
        },
        {
          type: "checklist",
          title: "The 4-Question Buyer's Checklist (Save This for Work)",
          intro: "Run any new AI idea through these four questions before choosing a model or vendor.",
          items: [
            {
              text: "1. Complexity: Does it need multi-step reasoning, or is it pattern matching?",
              detail: "Use **Reasoning / Flagship** tiers only for hard math, code architecture, and multi-constraint logic. Use **Mini / Flash / Haiku** for 80% of daily drafting and sorting.",
            },
            {
              text: "2. Modality & Length: What are the inputs?",
              detail: "Hours of video/audio or 500+ page PDFs? Pick **Gemini's 1M+ multimodal window** or **Claude's 1M context**. Indian telephony voice? Pick **Sarvam / Bhashini**.",
            },
            {
              text: "3. Data Residency & Privacy: Where is the data allowed to go?",
              detail: "Strict air-gap or on-prem? Pick **Open Weights (Llama, Mistral, Qwen)**. Regulated Indian cloud? Use **AWS Bedrock or Google Vertex AI in Mumbai/Hyderabad**.",
            },
            {
              text: "4. Volume & Latency: How fast and how often does it run?",
              detail: "Live voice needs **<500ms latency** (fast small models or Groq/Cerebras silicon). Millions of daily background jobs need **fine-tuned small open models or Batch APIs**.",
            },
          ],
        },
      ],
      techConversation: {
        context: "A CTO summarizes the company's AI strategy for the Board of Directors",
        speakerA: {
          role: "Board Member",
          quote:
            "Are we betting our company on OpenAI, Anthropic, or Google? What if one of them raises prices or falls behind next quarter?",
        },
        speakerB: {
          role: "CTO",
          quote:
            "We are **model-agnostic by design**. Our prompts and evals sit behind a unified gateway on our Mumbai cloud. Today we route coding to **Claude**, long-PDF extraction to **Gemini**, and Hindi voice to **Sarvam**—and we can swap any model in 15 minutes when a better one launches.",
        },
        plainEnglishTranslation:
          "Smart companies avoid **vendor lock-in**. By keeping their own test suite (**evals**) and routing calls through a clean gateway, they can upgrade to whichever lab leads next month without rewriting their product.",
      },
      realWorldApplication: {
        forWork:
          "Bring the **4-Question Checklist** (Complexity, Modality/Length, Data Residency, Volume/Latency) to your next product or vendor meeting. It immediately turns a vague 'Let's add AI' conversation into a sharp engineering plan.",
        forLearning:
          "You've just completed Track 3 and earned your **Ecosystem Insider** badge! When a new model drops in the news next week, you'll know within 30 seconds where it fits on the map.",
      },
      jargonCard: {
        term: "Model-Agnostic Architecture",
        oneLineAnalogy:
          "**Building a lamp with a standard bulb socket** so you can unscrew a Philips bulb and screw in a Havells or Syska bulb in 10 seconds whenever a brighter, cheaper one comes out.",
        meetingDropLine:
          "\"Let's keep our architecture model-agnostic behind a gateway so we can benchmark and swap between GPT, Claude, Gemini, and Llama as prices drop.\"",
      },
      quiz: [
        {
          id: "q3-10-1",
          scenario:
            "What does it mean for a company to build a **model-agnostic** AI system?",
          options: [
            {
              id: "a",
              text: "The company refuses to use any AI models at all.",
              isCorrect: false,
              analogyFeedback: "Model-agnostic means not being locked into a single model vendor, not avoiding AI!",
            },
            {
              id: "b",
              text: "The system is designed with a clean interface and evaluation suite so the team can easily switch or route between OpenAI, Anthropic, Google, or open-weight models without rewriting the whole app.",
              isCorrect: true,
              analogyFeedback: "Spot on. Like a **standard light-bulb socket**—swap in the best bulb for each room.",
            },
            {
              id: "c",
              text: "The company trains a new $10 billion model every Monday.",
              isCorrect: false,
              analogyFeedback: "No company does that!",
            },
            {
              id: "d",
              text: "The model doesn't know its own name.",
              isCorrect: false,
              analogyFeedback: "Not what agnostic means in software architecture!",
            },
          ],
        },
        {
          id: "q3-10-2",
          scenario:
            "You need to process **5 million simple product-review sentiment checks** every night on a tight rupee budget, and none of the reviews are longer than 40 words. Which model tier makes the most financial and technical sense?",
          options: [
            {
              id: "a",
              text: "The most expensive frontier reasoning model on high thinking effort.",
              isCorrect: false,
              analogyFeedback: "That would cost 50x–100x more and take hours longer for a task that needs zero multi-step reasoning.",
            },
            {
              id: "b",
              text: "A video generation model.",
              isCorrect: false,
              analogyFeedback: "Sentiment analysis is text classification, not video generation!",
            },
            {
              id: "c",
              text: "A small, fast budget tier (like Flash-Lite, Haiku, GPT-mini/nano, or a quantized 8B open-weight model), ideally run via an overnight Batch API.",
              isCorrect: true,
              analogyFeedback: "Correct! High-volume, short-text classification is the textbook job for **nano/mini models or small open weights**.",
            },
            {
              id: "d",
              text: "Printing all 5 million reviews on paper.",
              isCorrect: false,
              analogyFeedback: "Save the trees—and your time!",
            },
          ],
        },
        {
          id: "q3-10-3",
          scenario:
            "Which four factors form the **Model Selection Matrix** used by experienced engineering teams?",
          options: [
            {
              id: "a",
              text: "Logo colour, CEO's Twitter follower count, office city, and font size.",
              isCorrect: false,
              analogyFeedback: "Never pick enterprise software based on Twitter hype or logo colour!",
            },
            {
              id: "b",
              text: "Only the MMLU benchmark score from two years ago.",
              isCorrect: false,
              analogyFeedback: "A single benchmark ignores latency, price, modality, and data privacy.",
            },
            {
              id: "c",
              text: "Alphabetical order of the model names.",
              isCorrect: false,
              analogyFeedback: "Definitely not alphabetical!",
            },
            {
              id: "d",
              text: "Task Complexity (reasoning vs routine), Modality & Context Length (text/video/voice/size), Data Residency & Privacy rules, and Volume & Latency requirements.",
              isCorrect: true,
              analogyFeedback: "Congratulations! Answering those four questions turns you into a true **Ecosystem Insider**.",
            },
          ],
        },
      ],
    },
  ],
};

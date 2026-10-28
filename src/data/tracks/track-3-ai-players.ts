import type { Track } from "../types";

export const TRACK_3: Track = {
  id: "track-3-ai-players",
  number: 3,
  icon: "Sparkles",
  title: "The AI Players: Who Builds What",
  description:
    "Meet the labs behind today's AI: OpenAI, Anthropic, Google, Meta, the open-weight crowd and India's own. Then see how teams pick.",
  badgeName: "Ecosystem Insider",
  estimatedTime: "7 mins",
  isUpdatedThisFortnight: true,
  lessons: [
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
          "A handful of labs build the most powerful 'frontier' models. OpenAI (ChatGPT), Anthropic (Claude) and Google (Gemini) make the leading **closed models**: you rent them over the internet and never see inside. Meta offers Meta AI inside WhatsApp and Instagram. It also publishes some **open-weight models** (Llama) that companies can download and run on their own servers. So do labs like DeepSeek and Mistral. India has its own builders too, like Bengaluru's Sarvam, focused on Indian languages and India-hosted services. As of October 2026, the top models score **within a point or two** of each other on major coding benchmarks. ==So 'which is best' matters less than 'which is best for this job'.==",
      },
      analogy: {
        title: "Cab, Scooter or the Local Auto?",
        metaphor:
          "You don't book an XL cab to pop to the chemist. Or an auto for a family of six with luggage. The closed models from OpenAI, Anthropic and Google are like **ride-app categories**. You pay per trip, the car isn't yours, and there's a tier for every need, from budget to premium. Open-weight models are like **owning your own scooter**. More effort to maintain, but it's yours. It lives in your garage, and nobody else sees where you go. Indian-language specialists like Sarvam are ==the local auto driver who knows every gali and speaks your language.==",
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
          id: "q3-1",
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
          ],
        },
        {
          id: "q3-2",
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
              text: "The leaders are close in ability, so fit, price, speed and data rules often decide.",
              isCorrect: true,
              analogyFeedback: "Correct. **Choose the ride for the trip**, not the brand with the loudest ads.",
            },
            {
              id: "c",
              text: "Only open-weight models can write code.",
              isCorrect: false,
              analogyFeedback: "Not quite. Closed and open models alike can write code. Several of the **top coding scorers** are closed models.",
            },
          ],
        },
        {
          id: "q3-3",
          scenario: "An Indian bank says customer conversations **must be processed in India**. Which option fits best?",
          options: [
            {
              id: "a",
              text: "An India-hosted service, or an open-weight model on the bank's own Indian servers.",
              isCorrect: true,
              analogyFeedback: "Yes. **Where the data is processed** can matter as much as which model is smartest.",
            },
            {
              id: "b",
              text: "Whatever model topped last week's headlines.",
              isCorrect: false,
              analogyFeedback: "Not quite. A top benchmark score doesn't satisfy a **data-location rule**. Requirements come first.",
            },
          ],
        },
        {
          id: "q3-4",
          scenario: "What does 'open weights' mean?",
          options: [
            {
              id: "a",
              text: "The company publishes the trained model's files, so others can download and run it themselves.",
              isCorrect: true,
              analogyFeedback: "Correct. You get **the scooter itself**, usually under licence terms you must follow.",
            },
            {
              id: "b",
              text: "The model is free to use inside ChatGPT.",
              isCorrect: false,
              analogyFeedback: "Not quite. Free to use in an app isn't the same as open weights. Open weights means **you can run the model yourself**.",
            },
            {
              id: "c",
              text: "The model has no safety rules.",
              isCorrect: false,
              analogyFeedback: "Not quite. Open-weight models usually come with licences and built-in safety training. 'Open' is about **access to the files**.",
            },
          ],
        },
      ],
    },
  ],
};

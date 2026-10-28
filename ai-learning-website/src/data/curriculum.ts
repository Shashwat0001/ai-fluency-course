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

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  durationMinutes: number;
  xpReward: number;
  isUpdatedBiWeekly?: boolean;
  lastUpdated: string;
  bigIdea: {
    headline: string;
    explanation: string;
  };
  analogy: {
    title: string;
    metaphor: string;
    visualComparison: {
      everydayItem: string;
      aiEquivalent: string;
    }[];
  };
  techConversation: {
    context: string;
    speakerA: { role: string; quote: string };
    speakerB: { role: string; quote: string };
    plainEnglishTranslation: string;
  };
  realWorldApplication: {
    forWork: string;
    forLearning: string;
  };
  jargonCard: {
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
  category: "New Model" | "New Term" | "Industry Shift";
  summary: string;
  analogyTakeaway: string;
}

export const BI_WEEKLY_META = {
  currentCycle: "Cycle #14 • Oct 25, 2026",
  nextUpdateInDays: 14,
  pulseHeadline: "Reasoning Models, Autonomous Desktop Agents & Vibe Coding 2.0",
};

export const BI_WEEKLY_PULSE_FEED: BiWeeklyPulseItem[] = [
  {
    id: "pulse-1",
    date: "Oct 25, 2026",
    title: "The Shift from 'Chatbots' to 'Computer-Using Agents'",
    category: "Industry Shift",
    summary:
      "Major labs (Anthropic, OpenAI, Google) have shifted focus from AI that just writes text to AI that can click buttons, browse tabs, and fill spreadsheets on your behalf.",
    analogyTakeaway:
      "We moved from an advisor who shouts directions from the passenger seat to a chauffeur who can actually hold the steering wheel.",
  },
  {
    id: "pulse-2",
    date: "Oct 25, 2026",
    title: "Why 'Test-Time Compute' (Thinking Models) Matters",
    category: "New Term",
    summary:
      "Instead of blurting out the first word that comes to mind, modern reasoning models pause for 10–30 seconds to double-check their own logic before answering.",
    analogyTakeaway:
      "It is the difference between blurting out an answer in trivia vs. using scratch paper to work out a math problem before raising your hand.",
  },
  {
    id: "pulse-3",
    date: "Oct 25, 2026",
    title: "Vibe Coding Reaches Full-Stack Production",
    category: "New Model",
    summary:
      "Non-technical founders are now shipping complete web apps with databases and payments solely by prompting AI IDEs in plain English.",
    analogyTakeaway:
      "You no longer need to be a bricklayer to build a house; you act as the film director describing the scene until it looks right.",
  },
];

export const CURRICULUM_TRACKS: Track[] = [
  {
    id: "track-1-foundations",
    number: 1,
    icon: "BrainCircuit",
    title: "What Actually Is AI? (Foundations Without Math)",
    description:
      "Understand the core shift from traditional rule-based software to pattern-recognizing AI using kitchen and library analogies.",
    badgeName: "Pattern Spotter",
    estimatedTime: "15 mins",
    lessons: [
      {
        id: "deterministic-vs-probabilistic",
        title: "Strict Recipes vs. Master Chefs",
        subtitle: "Deterministic Software vs. Probabilistic AI",
        durationMinutes: 4,
        xpReward: 100,
        lastUpdated: "Oct 25, 2026",
        bigIdea: {
          headline:
            "Traditional software follows strict rules. AI recognizes patterns and makes educated guesses.",
          explanation:
            "For 50 years, computers only did exactly what programmers told them step-by-step (Deterministic). If a programmer forgot a rule, the app crashed. Modern AI (Probabilistic) isn't given rules—instead, it is shown millions of examples until it intuits the pattern on its own.",
        },
        analogy: {
          title: "The Vending Machine vs. The Master Barista",
          metaphor:
            "Traditional software is a vending machine: press B4, and the exact same snack drops 100% of the time. AI is a seasoned barista who has tasted 10,000 coffees: if you ask for 'something cozy for a rainy afternoon,' they invent a drink on the spot based on patterns they've learned. It might vary slightly each time, and occasionally they might add a weird spice.",
          visualComparison: [
            {
              everydayItem: "Vending Machine (Press Button -> Exact Item)",
              aiEquivalent: "Traditional Code (Deterministic: Input A always equals Output B)",
            },
            {
              everydayItem: "Master Barista (Improvises from 10,000 past orders)",
              aiEquivalent: "Generative AI (Probabilistic: Predicts the best response based on patterns)",
            },
          ],
        },
        techConversation: {
          context: "Planning a new customer refund feature",
          speakerA: {
            role: "Product Manager",
            quote:
              "Should we use an LLM to calculate the exact tax refund for the invoice?",
          },
          speakerB: {
            role: "Senior Engineer",
            quote:
              "Definitely not. LLMs are probabilistic—we need 100% deterministic code for math and billing, and we'll use the LLM just to draft the polite email explaining the refund.",
          },
          plainEnglishTranslation:
            "Don't use a creative 'guessing' AI to do strict accounting math where 2+2 must equal 4 every time. Use normal code for the calculator, and use AI to write the friendly message.",
        },
        realWorldApplication: {
          forWork:
            "Use AI when you need brainstorming, drafting, summarizing, or categorizing messy human text. Use traditional spreadsheets/calculators when you need exact financial totals.",
          forLearning:
            "Ask AI to explain a concept in three different metaphors—because it is probabilistic, it will generate fresh angles every time.",
        },
        jargonCard: {
          term: "Deterministic vs. Probabilistic",
          oneLineAnalogy:
            "A vending machine that follows strict rules vs. a chef who improvises based on tasting 10,000 dishes.",
          meetingDropLine:
            "\"Let's keep the pricing calculation deterministic in code, and only use the probabilistic LLM layer to summarize the report.\"",
        },
        quiz: [
          {
            id: "q1-1",
            scenario:
              "Your team is building a healthcare app. An engineer says, 'Because this model is probabilistic, we need a confirmation screen before sending prescriptions.' What do they mean?",
            options: [
              {
                id: "a",
                text: "The AI is too slow to run on mobile phones.",
                isCorrect: false,
                analogyFeedback:
                  "Speed is 'latency.' Probabilistic is about *how* the AI makes decisions.",
              },
              {
                id: "b",
                text: "The AI works by predicting high-probability patterns rather than following rigid rules, so there is always a small chance it guesses wrong.",
                isCorrect: true,
                analogyFeedback:
                  "Spot on! Just like the Master Barista, an AI predicts the most likely answer rather than following a hard-coded checklist.",
              },
              {
                id: "c",
                text: "The AI database is full and needs more storage.",
                isCorrect: false,
                analogyFeedback:
                  "Storage has nothing to do with probabilistic behavior.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "track-2-jargon-buster",
    number: 2,
    icon: "Layers",
    title: "Essential AI Terminology & Mental Models",
    description:
      "Master LLMs, Tokens, Context Windows, RAG, Fine-Tuning, and Vibe Coding without memorizing a single textbook definition.",
    badgeName: "Jargon Translator",
    estimatedTime: "25 mins",
    isUpdatedThisFortnight: true,
    lessons: [
      {
        id: "llms-tokens-context",
        title: "LLMs, Tokens & Context Windows",
        subtitle: "How AI Reads, Thinks, and Remembers",
        durationMinutes: 5,
        xpReward: 150,
        lastUpdated: "Oct 25, 2026",
        bigIdea: {
          headline:
            "An LLM is a super-powered next-word predictor working on a desk of limited size.",
          explanation:
            "Large Language Models (LLMs) don't read whole sentences at once; they chop words into tiny syllable puzzle pieces called 'Tokens.' And the 'Context Window' is the size of the AI's working desk—how many pages it can keep in front of its eyes at one time before forgetting the beginning of the conversation.",
        },
        analogy: {
          title: "Scrabble Tiles on an Office Desk",
          metaphor:
            "Imagine an author sitting at a desk. 'Tokens' are Scrabble tiles (about 3/4 of a word each)—the AI pays and thinks per tile. The 'Context Window' is the physical surface area of the desk. If you dump a 500-page binder onto a tiny desk, the oldest pages fall off the edge onto the floor, and the author forgets what was on page 1.",
          visualComparison: [
            {
              everydayItem: "Scrabble Syllable Tiles",
              aiEquivalent: "Tokens (The tiny chunks of words AI reads and charges for)",
            },
            {
              everydayItem: "Size of the Physical Desk",
              aiEquivalent: "Context Window (How much info the AI can hold in short-term memory at once)",
            },
          ],
        },
        techConversation: {
          context: "Debugging why an AI assistant forgot earlier instructions",
          speakerA: {
            role: "Product Manager",
            quote:
              "Why did the chatbot forget our brand tone guidelines after the user uploaded three PDFs?",
          },
          speakerB: {
            role: "AI Engineer",
            quote:
              "Those PDFs ate up 180,000 tokens and blew past our context window, so the system prompt got truncated.",
          },
          plainEnglishTranslation:
            "The three PDFs took up all the space on the AI's desk, pushing our original instructions right off the edge.",
        },
        realWorldApplication: {
          forWork:
            "When an AI starts repeating itself or forgetting rules in a very long chat, its 'desk' (Context Window) is cluttered. Start a fresh chat with a clean summary.",
          forLearning:
            "You can paste an entire textbook chapter into models with huge context windows (like Gemini or Claude) and ask questions across the whole book at once.",
        },
        jargonCard: {
          term: "Tokens & Context Window",
          oneLineAnalogy:
            "Tokens are Scrabble word-tiles; the Context Window is the size of the desk holding them before older pages fall off.",
          meetingDropLine:
            "\"If users upload full legal contracts, do we have a large enough context window, or will the token cost be too high?\"",
        },
        quiz: [
          {
            id: "q2-1",
            scenario:
              "An engineer says: 'Using Gemini 2.5 Pro gives us a 2-million-token context window, whereas the smaller model only gives us 32k.' What practical advantage does that give your product?",
            options: [
              {
                id: "a",
                text: "The AI can hold vastly more documents, code, or video in its short-term working memory during a single conversation without forgetting.",
                isCorrect: true,
                analogyFeedback:
                  "Bingo! A 2-million-token context window is like upgrading from a tiny coffee table to a massive conference room table.",
              },
              {
                id: "b",
                text: "The AI will generate 3D graphics faster.",
                isCorrect: false,
                analogyFeedback:
                  "Context windows measure short-term memory capacity, not graphics rendering speed.",
              },
            ],
          },
        ],
      },
      {
        id: "rag-vs-finetuning",
        title: "Prompting vs. RAG vs. Fine-Tuning",
        subtitle: "Three Ways to Make AI Smarter About Your Business",
        durationMinutes: 5,
        xpReward: 150,
        lastUpdated: "Oct 25, 2026",
        bigIdea: {
          headline:
            "You don't need to retrain an AI from scratch so it knows your company's private data.",
          explanation:
            "Out of the box, an LLM only knows public internet data. To make it answer questions about your company's private docs, teams choose between Prompting (instructions), RAG (Retrieval-Augmented Generation—looking up facts in real time), or Fine-Tuning (retraining its habits and tone).",
        },
        analogy: {
          title: "The Open-Book Exam vs. Medical School",
          metaphor:
            "Imagine hiring a brilliant college graduate. 'Prompting' is handing them a sticky note with today's task. 'RAG (Retrieval-Augmented Generation)' is letting them take an open-book exam with your company's filing cabinet right next to them—before answering a customer, they look up the exact policy page. 'Fine-Tuning' is sending them to 4 years of medical school to permanently change how they speak and think.",
          visualComparison: [
            {
              everydayItem: "Sticky Note Instruction",
              aiEquivalent: "Prompting (Fast, free, tells the AI what to do right now)",
            },
            {
              everydayItem: "Open-Book Exam with a Filing Cabinet",
              aiEquivalent: "RAG (Searches your live company docs and quotes the facts)",
            },
            {
              everydayItem: "Sending Graduate to Specialist School",
              aiEquivalent: "Fine-Tuning (Expensive training to teach a specific style or format)",
            },
          ],
        },
        techConversation: {
          context: "Building an internal HR policy bot",
          speakerA: {
            role: "Founder",
            quote:
              "Our HR policies change every month. Should we fine-tune our own model on our Notion docs?",
          },
          speakerB: {
            role: "Lead Engineer",
            quote:
              "No, fine-tuning is overkill and goes stale immediately. We should set up a RAG pipeline connected to Notion so the model retrieves the latest policy doc at query time.",
          },
          plainEnglishTranslation:
            "Don't send the AI back to school every month when HR rules change. Just give it an open-book search tool (RAG) so it reads the live Notion page whenever someone asks a question.",
        },
        realWorldApplication: {
          forWork:
            "90% of enterprise AI apps use RAG (open-book lookup) rather than Fine-Tuning because company data changes daily and RAG reduces hallucinations.",
          forLearning:
            "Tools like NotebookLM use RAG under the hood—you upload your PDFs, and the AI only answers using quotes from your uploaded files.",
        },
        jargonCard: {
          term: "RAG (Retrieval-Augmented Generation)",
          oneLineAnalogy:
            "Giving the AI an open-book exam with your company's live filing cabinet so it doesn't have to guess from memory.",
          meetingDropLine:
            "\"Since our product inventory updates hourly, let's use RAG rather than fine-tuning so the bot always pulls live data.\"",
        },
        quiz: [
          {
            id: "q2-2",
            scenario:
              "A client wants an AI chatbot that answers questions about their daily-changing stock prices and internal memos without making things up. What should you recommend?",
            options: [
              {
                id: "a",
                text: "RAG (Retrieval-Augmented Generation), so the AI searches their live documents before answering.",
                isCorrect: true,
                analogyFeedback:
                  "Exactly! RAG is the open-book exam—perfect for facts that change frequently.",
              },
              {
                id: "b",
                text: "Fine-tuning a brand new model from scratch every morning.",
                isCorrect: false,
                analogyFeedback:
                  "Sending an AI back to school every morning is slow, expensive, and unnecessary when an open-book lookup (RAG) works instantly.",
              },
            ],
          },
        ],
      },
      {
        id: "vibe-coding-explained",
        title: "What Is 'Vibe Coding'?",
        subtitle: "Building Real Software in Plain English",
        durationMinutes: 4,
        xpReward: 150,
        isUpdatedBiWeekly: true,
        lastUpdated: "Oct 25, 2026",
        bigIdea: {
          headline:
            "Vibe coding is building real software by describing what you want in plain English and guiding the AI like a creative director.",
          explanation:
            "Coined by AI researcher Andrej Karpathy, 'Vibe Coding' describes a workflow where you don't write or even read every line of code. Instead, you use AI-native editors (like Cursor, Trae, Windsurf, or Lovable), describe the feature, inspect the live preview, paste in any errors, and iterate on the 'vibe' until the product works.",
        },
        analogy: {
          title: "The Movie Director vs. The Camera Operator",
          metaphor:
            "Traditional coding is building a camera lens by hand with a screwdriver. Vibe coding is sitting in the Movie Director's chair: you tell the crew, 'Make the lighting warmer and move the button to the top right.' You don't touch the wires—you judge the final screen and steer the vision.",
          visualComparison: [
            {
              everydayItem: "Film Director guiding the scene on a monitor",
              aiEquivalent: "Vibe Coder prompting an AI IDE and testing the live browser preview",
            },
            {
              everydayItem: "Script Storyboard",
              aiEquivalent: "Your PRD (Product Requirements Document) that tells the AI what to build",
            },
          ],
        },
        techConversation: {
          context: "Testing a new product idea before hiring engineers",
          speakerA: {
            role: "Product Manager",
            quote:
              "Instead of writing a 20-page spec and waiting two sprints, I vibe-coded a working prototype over the weekend so users can click through it today.",
          },
          speakerB: {
            role: "Engineering Manager",
            quote:
              "Love it. That validates the UX flow immediately, and now my team can harden the backend security for production.",
          },
          plainEnglishTranslation:
            "The PM used AI to build a working mockup in plain English over the weekend, saving the engineering team weeks of guesswork.",
        },
        realWorldApplication: {
          forWork:
            "Non-technical PMs, marketers, and founders now vibe-code interactive prototypes, internal dashboards, and micro-tools in hours rather than waiting months for engineering bandwidth.",
          forLearning:
            "Always start vibe coding with a clear PRD (just like you did for this website!) and save checkpoints with Git so you can roll back if the AI breaks a screen.",
        },
        jargonCard: {
          term: "Vibe Coding",
          oneLineAnalogy:
            "Acting like a movie director who describes the scene in plain English while the AI crew writes the actual code.",
          meetingDropLine:
            "\"I can vibe-code an interactive prototype from our PRD today so we can test it with five customers tomorrow.\"",
        },
        quiz: [
          {
            id: "q2-3",
            scenario:
              "When non-technical creators 'vibe code' a web app successfully, what is their most important responsibility?",
            options: [
              {
                id: "a",
                text: "Memorizing every semicolon of C++ syntax.",
                isCorrect: false,
                analogyFeedback:
                  "The AI handles the syntax! Vibe coding is about clear direction and product taste.",
              },
              {
                id: "b",
                text: "Giving clear product requirements (PRDs), testing the live app, and saving working checkpoints in Git.",
                isCorrect: true,
                analogyFeedback:
                  "Spot on! Just like a film director needs a clear script (PRD) and saved takes (Git), a vibe coder steers the product vision.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "track-3-ai-players",
    number: 3,
    icon: "Sparkles",
    title: "The AI Landscape: Players, Competitors & Stack",
    description:
      "Compare OpenAI, Anthropic, Google, Meta, xAI, and DeepSeek—and know who does what best in a tech conversation.",
    badgeName: "Ecosystem Insider",
    estimatedTime: "20 mins",
    isUpdatedThisFortnight: true,
    lessons: [
      {
        id: "frontier-model-players",
        title: "The Big Tech AI Players Compared",
        subtitle: "OpenAI vs. Anthropic vs. Google vs. Meta",
        durationMinutes: 5,
        xpReward: 150,
        isUpdatedBiWeekly: true,
        lastUpdated: "Oct 25, 2026",
        bigIdea: {
          headline:
            "Different AI labs have distinct personalities and superpowers—engineers pick the right model for the specific job.",
          explanation:
            "In tech companies, teams rarely rely on just one AI provider. They mix and match models based on whether they need elite coding/writing (Anthropic Claude), massive multimodal context and Google ecosystem speed (Google Gemini), versatile reasoning and consumer reach (OpenAI GPT), or free customizable open-weights models (Meta Llama & DeepSeek).",
        },
        analogy: {
          title: "Specialized Vehicles in a Garage",
          metaphor:
            "You wouldn't use a Formula 1 car to move furniture. OpenAI (ChatGPT) is the all-rounder Swiss Army SUV. Anthropic (Claude) is the precision craftsman's coupe favored by writers and software engineers. Google (Gemini) is the massive cargo plane that can swallow whole hours of video and 2,000-page books at once. Meta (Llama) hands you the free engine blueprints so you can build your own car in your private garage.",
          visualComparison: [
            {
              everydayItem: "Closed Luxury Car Dealership (Rent via API)",
              aiEquivalent: "Proprietary Models (OpenAI GPT, Anthropic Claude, Google Gemini)",
            },
            {
              everydayItem: "Free Engine Blueprints You Run on Your Own Servers",
              aiEquivalent: "Open-Weights Models (Meta Llama, DeepSeek, Mistral)",
            },
          ],
        },
        techConversation: {
          context: "Choosing which AI model to power a new feature",
          speakerA: {
            role: "Product Manager",
            quote:
              "Why are we using Claude for our code-generation feature but Gemini Flash for classifying customer support tickets?",
          },
          speakerB: {
            role: "Staff Engineer",
            quote:
              "Claude leads on complex coding benchmarks, while Gemini Flash gives us super-low latency and costs pennies per million tokens at high volume.",
          },
          plainEnglishTranslation:
            "We use the expensive master craftsman (Claude) for the hard coding jobs, and the lightning-fast, affordable sprinter (Gemini Flash) for sorting thousands of simple support messages.",
        },
        realWorldApplication: {
          forWork:
            "Use Claude or GPT for nuanced writing and coding; use Gemini when analyzing huge PDFs, audio, or video files; suggest open-weights models (Llama) when your legal team requires data to never leave company servers.",
          forLearning:
            "Compare how two different models explain the same concept—you'll quickly feel their distinct 'personalities.'",
        },
        jargonCard: {
          term: "Closed-Source vs. Open-Weights Models",
          oneLineAnalogy:
            "Renting a chef via phone call (OpenAI/Anthropic/Google) vs. downloading the chef's brain to run privately on your own kitchen computer (Meta Llama/DeepSeek).",
          meetingDropLine:
            "\"Do our enterprise compliance rules allow calling a closed API like Claude, or do we need to self-host an open-weights model like Llama?\"",
        },
        quiz: [
          {
            id: "q3-1",
            scenario:
              "A hospital wants to run an AI model completely offline inside its own private building so patient data never touches the internet. Which type of model will the engineering team pick?",
            options: [
              {
                id: "a",
                text: "An Open-Weights model (like Meta's Llama or Mistral) that they can download and host on their own servers.",
                isCorrect: true,
                analogyFeedback:
                  "Spot on! Open-weights models give you the blueprints to run the AI entirely inside your own private garage.",
              },
              {
                id: "b",
                text: "A consumer ChatGPT Plus web subscription.",
                isCorrect: false,
                analogyFeedback:
                  "Web subscriptions send data over the internet to OpenAI's cloud servers.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "track-4-modern-world",
    number: 4,
    icon: "Bot",
    title: "AI for Work, Learning & the Modern World",
    description:
      "Practical playbooks for automating busywork, mastering Socratic learning, and spotting where AI creates real business ROI.",
    badgeName: "Workflow Architect",
    estimatedTime: "20 mins",
    lessons: [],
  },
  {
    id: "track-5-tech-fluency",
    number: 5,
    icon: "Zap",
    title: "Speaking 'Tech': PM & Engineer Simulations",
    description:
      "Real-world dialogue breakdowns on Latency, Hallucinations, Evals, and API unit economics.",
    badgeName: "Tech-Fluent Insider",
    estimatedTime: "20 mins",
    lessons: [],
  },
  {
    id: "track-6-biweekly-pulse",
    number: 6,
    icon: "Globe2",
    title: "The Bi-Weekly AI Pulse (Living Track)",
    description:
      "Refreshed every 14 days so your AI fluency never goes stale. New models, new terms, and shifting rankings.",
    badgeName: "Frontier Navigator",
    estimatedTime: "3 mins / fortnight",
    isUpdatedThisFortnight: true,
    lessons: [],
  },
];
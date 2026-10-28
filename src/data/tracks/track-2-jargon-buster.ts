import type { Track } from "../types";

export const TRACK_2: Track = {
  id: "track-2-jargon-buster",
  number: 2,
  icon: "Layers",
  title: "AI Jargon, Decoded",
  description:
    "LLMs, tokens, context windows, RAG, fine-tuning and vibe coding, explained in plain English. No textbook definitions to memorise.",
  badgeName: "Jargon Translator",
  estimatedTime: "20 mins",
  lessons: [
    {
      id: "llms-tokens-context",
      title: "How AI Reads, Writes and Forgets",
      subtitle: "LLMs, tokens and context windows in plain English",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      sources: [
        { label: "Google: Understand and count tokens", url: "https://ai.google.dev/gemini-api/docs/tokens" },
        { label: "Google: Long context (what fits in 1 million tokens)", url: "https://ai.google.dev/gemini-api/docs/long-context" },
        { label: "Anthropic: Context windows explained", url: "https://docs.claude.com/en/docs/build-with-claude/context-windows" },
      ],
      bigIdea: {
        headline:
          "An LLM is a ==super-powered next-word predictor==, reading in tokens on a blackboard of limited size.",
        explanation:
          "A **Large Language Model (LLM)** powers ChatGPT, Gemini and Claude. It writes by repeatedly predicting the next chunk of text. Those chunks are **tokens**: a word or part of one. In English, 100 tokens is roughly 60–80 words. The **context window** is how many tokens it holds at once: messages, uploads and its replies. Overflow it, and the app drops or summarises older parts, or stops. Early details can vanish.",
      },
      analogy: {
        title: "Chalk on a Classroom Blackboard",
        metaphor:
          "Picture a teacher at a classroom blackboard. Everything they can 'see' while answering must be on the board: your question, the textbook page you pasted, the working so far. Text goes up in **small pieces (tokens)**, like syllables, not paragraphs. The board is big, but **not endless**. Once it's full, something gets rubbed out or squeezed into a summary. ==The details from first period may disappear.==",
        visualComparison: [
          {
            everydayItem: "Small chunks of writing on the board",
            aiEquivalent: "**Tokens**: the pieces of text the AI reads, writes, and is billed for",
          },
          {
            everydayItem: "The size of the blackboard",
            aiEquivalent: "**Context window**: how much the AI can work with at one time",
          },
          {
            everydayItem: "Rubbing out the oldest notes to make room",
            aiEquivalent: "Older parts of a long chat get dropped or summarised, so **early instructions can be lost**",
          },
        ],
      },
      activities: [
        {
          type: "flashcards",
          title: "Five words to lock in",
          cards: [
            { front: "LLM", back: "**Large Language Model**: the AI engine behind chatbots, trained on huge amounts of text to **predict what comes next**." },
            { front: "Token", back: "A **chunk of text** the AI reads or writes: a word or part of one. In English, **100 tokens ≈ 60–80 words**." },
            { front: "Context window", back: "How many tokens the AI can work with **at once**: your messages, uploads and its replies, all together." },
            { front: "Prompt", back: "What you type to the AI. The **more context** it has, the **better the answer**." },
            { front: "System prompt", back: "**Standing instructions** an app gives the AI before every conversation, e.g. 'Always reply in a friendly tone.'" },
          ],
        },
        {
          type: "tryIt",
          title: "Plant a rule and watch it stick",
          intro: "Everything in a chat sits on the AI's **blackboard**. Plant a rule at the start and see how long it lasts.",
          prompt: "For this whole chat, end every reply with the word \"Shabash\". First question: in two sentences, what is a context window?",
          whatToNotice: [
            "Ask two or three follow-ups. The rule holds, because it's still **on the blackboard**.",
            "In a **very long chat** (dozens of messages, or big pasted documents), early rules can get squeezed out. ==That's when you start fresh and restate them.==",
            "Bonus: ask \"Roughly how many tokens was my first message?\" Treat the answer as an **estimate**: models can't count their own tokens exactly.",
          ],
        },
      ],
      techConversation: {
        context: "A Pune edtech startup works out why its study assistant 'forgot' its rules",
        speakerA: {
          role: "Product Manager",
          quote:
            "Why did the study-bot stop answering in Hinglish after a student uploaded three textbook PDFs?",
        },
        speakerB: {
          role: "AI Engineer",
          quote:
            "Those PDFs were about **180,000 tokens**. That's more than our model's **context window**, so our earlier instructions got squeezed out.",
        },
        plainEnglishTranslation:
          "The PDFs filled the whole blackboard. ==The 'answer in Hinglish' instruction got rubbed out to make room.==",
      },
      realWorldApplication: {
        forWork:
          "If an AI starts **forgetting your rules** or repeating itself in a very long chat, its blackboard is crowded. ==Start a fresh chat and paste a short summary of what matters.==",
        forLearning:
          "Today's big models can hold **around a million tokens** (roughly 1,500 pages). So you can paste a whole textbook chapter and ask questions across all of it.",
      },
      jargonCard: {
        term: "Tokens & Context Window",
        oneLineAnalogy:
          "**Tokens** are the chalk pieces. The **context window** is the size of the blackboard before something has to be rubbed out.",
        meetingDropLine:
          "\"If users upload full legal contracts, will they fit in the context window, and what will the token cost be?\"",
      },
      quiz: [
        {
          id: "q2-1",
          scenario:
            "An engineer says: 'The big model gives us a **1-million-token** context window; the smaller one only **32,000**.' What's the practical difference for your product?",
          options: [
            {
              id: "a",
              text: "The big model can work with far more documents, chat history or code in one go without losing track.",
              isCorrect: true,
              analogyFeedback: "Exactly. It's like swapping a small slate for a **wall-sized blackboard**.",
            },
            {
              id: "b",
              text: "The big model makes 3D graphics faster.",
              isCorrect: false,
              analogyFeedback: "Not quite. The context window measures **how much text the AI can hold at once**, not graphics speed.",
            },
            {
              id: "c",
              text: "The big model is always more accurate.",
              isCorrect: false,
              analogyFeedback: "Not quite. A bigger blackboard holds more, but it doesn't make the teacher smarter. **Size and quality** are different things.",
            },
          ],
        },
        {
          id: "q2-1b",
          scenario: "Roughly how many English words are in **1,000 tokens**?",
          options: [
            {
              id: "a",
              text: "About 100 words",
              isCorrect: false,
              analogyFeedback: "Not quite, that's too few. A token is usually **a word or part of one**, not ten words.",
            },
            {
              id: "b",
              text: "About 600–800 words",
              isCorrect: true,
              analogyFeedback: "Right. In English, **100 tokens ≈ 60–80 words**, so a token is a bit less than a word.",
            },
            {
              id: "c",
              text: "About 10,000 words",
              isCorrect: false,
              analogyFeedback: "Not quite, that's way too many. Tokens are **smaller than words**, not bigger.",
            },
          ],
        },
        {
          id: "q2-1c",
          scenario:
            "Two hours into a long chat, the AI ignores the 'keep it under 50 words' rule you set at the start. What's the likely reason, and the fix?",
          options: [
            {
              id: "a",
              text: "The AI got tired. Wait an hour and try again.",
              isCorrect: false,
              analogyFeedback: "Not quite. AI doesn't get tired. The problem is **space on the blackboard**, not energy.",
            },
            {
              id: "b",
              text: "The early instruction got crowded out. Start a new chat and restate your key rules.",
              isCorrect: true,
              analogyFeedback: "Yes. A **fresh chat with a short summary** puts your rules back at the top of a clean blackboard.",
            },
            {
              id: "c",
              text: "You've run out of internet data.",
              isCorrect: false,
              analogyFeedback: "Not quite. Your data pack isn't involved. This is about **the AI's working space**.",
            },
          ],
        },
        {
          id: "q2-1d",
          scenario: "What is an LLM fundamentally doing when it writes a reply?",
          options: [
            {
              id: "a",
              text: "Looking up the answer in a giant database of stored replies.",
              isCorrect: false,
              analogyFeedback: "Not quite. It doesn't retrieve stored answers. It **generates new text, token by token**.",
            },
            {
              id: "b",
              text: "Repeatedly predicting the most likely next chunk of text.",
              isCorrect: true,
              analogyFeedback: "Correct. Everything it does, from essays to code, is built from **next-token predictions**.",
            },
            {
              id: "c",
              text: "Searching Google and copying the top result.",
              isCorrect: false,
              analogyFeedback: "Not quite. Some apps add web search, but the model itself is a **next-token predictor**, not a copy-paste machine.",
            },
          ],
        },
      ],
    },
    {
      id: "rag-vs-finetuning",
      title: "Prompting, RAG or Fine-Tuning?",
      subtitle: "Three ways to make AI smarter about your business",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      sources: [
        { label: "Retrieval-augmented generation (Wikipedia)", url: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation" },
        { label: "Fine-tuning (Wikipedia)", url: "https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning)" },
        { label: "Menlo Ventures: 2024 State of Generative AI in the Enterprise", url: "https://menlovc.com/2024-the-state-of-generative-ai-in-the-enterprise/" },
        { label: "Google: Learn about Gemini Notebook (formerly NotebookLM)", url: "https://support.google.com/notebooklm/answer/16164461" },
      ],
      bigIdea: {
        headline:
          "No need to build your own AI. ==Instruct it, let it look things up, or train it further.==",
        explanation:
          "An LLM only knows its training data, up to a cutoff date. It has never seen your company's private files. To make it useful on your information, teams choose from three approaches. **Prompting**: put the instructions and facts in the message. **RAG (Retrieval-Augmented Generation)**: let the AI search your documents and answer from what it finds. **Fine-tuning**: extra training on an existing model to change its style or format.",
      },
      analogy: {
        title: "Sticky Note, Open Book or Specialist Course",
        metaphor:
          "A bright fresher joins your company. **Prompting** is the sticky note from their manager: 'Reply to this client, keep it formal.' **RAG** is answering customers with the handbook open on the desk, checking the exact policy page first. **Fine-tuning** is a specialist course that changes how they write, so reports come out in your house style. ==Usually, the sticky note plus the open handbook is all you need.==",
        visualComparison: [
          {
            everydayItem: "Sticky note from the manager",
            aiEquivalent: "**Prompting**: quick, cheap, tells the AI what to do right now",
          },
          {
            everydayItem: "Open-book exam with the company handbook",
            aiEquivalent: "**RAG**: the AI searches your live documents and answers from them",
          },
          {
            everydayItem: "A specialist training course",
            aiEquivalent: "**Fine-tuning**: extra training that changes the model's style, format or habits",
          },
        ],
      },
      activities: [
        {
          type: "scenario",
          title: "Pick the right tool",
          setting: "You're advising three teams at a mid-sized Indian company. Each one asks the same thing: 'How do we make the AI work for us?'",
          steps: [
            {
              situation:
                "HR wants a bot that answers employee questions about leave and reimbursement. The **policy document gets updated every few weeks**.",
              choices: [
                {
                  text: "Prompting: paste the policy into every message",
                  isBest: false,
                  outcome: "Fine for a quick test. But long policies **crowd the blackboard**, and someone has to remember to paste the latest version.",
                },
                {
                  text: "RAG: let the bot search the current policy documents",
                  isBest: true,
                  outcome: "Right. Update the document and the bot answers from the new version **immediately, with no retraining**.",
                },
                {
                  text: "Fine-tuning: train the model on the policy",
                  isBest: false,
                  outcome: "It would **go stale** with every policy update. And fine-tuning is better at teaching style than at storing facts reliably.",
                },
              ],
            },
            {
              situation:
                "Marketing wants a one-off caption for tomorrow's Diwali Instagram post, in the brand's **playful tone**.",
              choices: [
                {
                  text: "Prompting: describe the tone and give two past captions as examples",
                  isBest: true,
                  outcome: "Exactly. For a one-off task, **a good brief with examples** beats any setup.",
                },
                {
                  text: "RAG: connect the bot to every past Instagram post",
                  isBest: false,
                  outcome: "Overkill for one caption. **Two good examples** in the prompt do the job in a minute.",
                },
                {
                  text: "Fine-tuning: train a custom marketing model",
                  isBest: false,
                  outcome: "**Weeks of work** for one caption. Like sending the fresher on a course to write one post.",
                },
              ],
            },
            {
              situation:
                "Support handles **50,000 tickets a month**. Every reply must follow a strict structure, and prompting alone keeps getting it slightly wrong.",
              choices: [
                {
                  text: "Prompting: just write the instructions in capital letters",
                  isBest: false,
                  outcome: "If careful prompting with examples still isn't consistent at this volume, **louder instructions won't fix it**.",
                },
                {
                  text: "Fine-tuning: train the model on thousands of correctly formatted replies",
                  isBest: true,
                  outcome:
                    "This is where fine-tuning **earns its cost**: a consistent style or format at high volume. Facts like order status would still come via RAG.",
                },
              ],
            },
          ],
          debrief:
            "Rule of thumb: start with **prompting**. Add **RAG** when the AI needs your documents or changing facts. Consider **fine-tuning** only for a consistent style or format at scale.",
        },
        {
          type: "tryIt",
          title: "Run a mini open-book exam",
          intro: "You can feel how **RAG** works with zero setup: hand the AI a document and make it answer only from that.",
          prompt: "Answer ONLY using the policy below. If the answer isn't in it, reply exactly: \"Not in the document.\"\n\nPOLICY: Employees get 18 days of paid leave a year. Up to 6 unused days carry over to the next year. Leave requests need manager approval 7 days in advance, except sick leave.\n\nQuestions:\n1. How many paid leave days do I get?\n2. Can I carry over 10 unused days?\n3. How much is the Diwali bonus?",
          whatToNotice: [
            "Questions 1 and 2 come **straight from the text**. That's grounding: answers you can trace back to a source.",
            "Question 3 should get \"Not in the document.\" If the AI invents a bonus instead, you've just watched a **hallucination** happen.",
            "Real RAG does this automatically: ==it finds the right pages among thousands, then answers from them==.",
          ],
        },
      ],
      techConversation: {
        context: "A Gurugram startup builds an internal HR policy bot",
        speakerA: {
          role: "Founder",
          quote: "Our HR policies change every month. Should we fine-tune our own model on our Notion docs?",
        },
        speakerB: {
          role: "Lead Engineer",
          quote:
            "No, that would **go stale immediately**. Let's set up **RAG on Notion**, so the model retrieves the latest policy page every time someone asks.",
        },
        plainEnglishTranslation:
          "Don't send the AI on a training course every month. ==Give it the open handbook (RAG), so it reads the current Notion page whenever someone asks.==",
      },
      realWorldApplication: {
        forWork:
          "Most company AI projects start with **prompting and RAG**. A 2024 Menlo Ventures survey found about half of enterprise AI deployments used RAG, while only **9% of production models** were fine-tuned. RAG reduces made-up answers but doesn't eliminate them, ==so keep source links visible.==",
        forLearning:
          "Tools like Google's **Gemini Notebook** (formerly NotebookLM) work like RAG. Upload your PDFs and it answers from them, with **citations** pointing to the exact passages.",
      },
      jargonCard: {
        term: "RAG (Retrieval-Augmented Generation)",
        oneLineAnalogy:
          "Letting the AI sit an **open-book exam** with your company's documents, so it **looks things up** instead of guessing from memory.",
        meetingDropLine:
          "\"Our inventory changes hourly, so let's use RAG rather than fine-tuning. That way the bot always reads live data.\"",
      },
      quiz: [
        {
          id: "q2-2",
          scenario:
            "A client wants a chatbot that answers questions about its **daily-changing product prices** and internal memos, while keeping made-up answers to a minimum. What do you recommend?",
          options: [
            {
              id: "a",
              text: "RAG, so the AI searches the live documents before answering.",
              isCorrect: true,
              analogyFeedback: "Exactly. The **open-book exam**: perfect when facts change often.",
            },
            {
              id: "b",
              text: "Fine-tuning the model again every morning on the new data.",
              isCorrect: false,
              analogyFeedback:
                "Not quite. Retraining daily is **slow and expensive**, and fine-tuning isn't a reliable way to store facts. Retrieval needs no retraining.",
            },
          ],
        },
        {
          id: "q2-2b",
          scenario: "What does an LLM know 'out of the box', before you connect anything?",
          options: [
            {
              id: "a",
              text: "Everything on the internet, updated live.",
              isCorrect: false,
              analogyFeedback: "Not quite. A model's knowledge **stops at its training cutoff**, unless an app adds web search or RAG.",
            },
            {
              id: "b",
              text: "What was in its training data, up to a cutoff date, and nothing from your company's private files.",
              isCorrect: true,
              analogyFeedback: "Correct. That's why **prompting and RAG** exist: to bring your information to it.",
            },
            {
              id: "c",
              text: "All your company's emails, because it's on the same internet.",
              isCorrect: false,
              analogyFeedback: "Not quite. Your private data was never in its training. It only sees **what you or an approved system give it**.",
            },
          ],
        },
        {
          id: "q2-2c",
          scenario: "When is fine-tuning usually **worth the effort**?",
          options: [
            {
              id: "a",
              text: "When you need a consistent style or format across a very large volume of outputs.",
              isCorrect: true,
              analogyFeedback: "Yes. That's the specialist course: it **changes habits**, not the facts the fresher looks up.",
            },
            {
              id: "b",
              text: "When you want the AI to know today's stock prices.",
              isCorrect: false,
              analogyFeedback: "Not quite. Changing facts belong in **RAG**. Training is the wrong tool for daily data.",
            },
            {
              id: "c",
              text: "For a single one-off email.",
              isCorrect: false,
              analogyFeedback: "Not quite. A **good prompt** handles one-off tasks in seconds.",
            },
          ],
        },
        {
          id: "q2-2d",
          scenario: "Does RAG guarantee the AI will **never make things up**?",
          options: [
            {
              id: "a",
              text: "Yes. Once it has documents, it's always correct.",
              isCorrect: false,
              analogyFeedback: "Not quite. Even in an open-book exam, a student can misread the page. RAG **reduces errors**; it doesn't eliminate them.",
            },
            {
              id: "b",
              text: "No. It reduces made-up answers, so showing sources and spot-checking still matter.",
              isCorrect: true,
              analogyFeedback: "Correct. Good RAG apps **show citations**, so you can check the exact passage.",
            },
          ],
        },
      ],
    },
    {
      id: "vibe-coding-explained",
      title: "Vibe Coding: Build Apps in Plain English",
      subtitle: "What it is, when to use it, and its limits",
      durationMinutes: 6,
      xpReward: 150,
      isUpdatedBiWeekly: true,
      lastUpdated: "Oct 28, 2026",
      sources: [
        { label: "Vibe coding: origin and risks (Wikipedia)", url: "https://en.wikipedia.org/wiki/Vibe_coding" },
        { label: "Devin Desktop (formerly Windsurf)", url: "https://devin.ai/desktop" },
        { label: "Lovable docs: connecting Stripe payments", url: "https://docs.lovable.dev/integrations/stripe" },
      ],
      bigIdea: {
        headline:
          "Vibe coding: ==build working software by describing it in plain English==, then steering the AI like a director.",
        explanation:
          "AI researcher **Andrej Karpathy** coined 'vibe coding' in **February 2025**, originally for quick weekend projects. You don't write, or even read, every line. In AI tools like Cursor, Lovable, Replit or Devin Desktop (formerly Windsurf), you describe the feature, try the live preview, paste in errors and refine until it works. Brilliant for prototypes and personal tools. But ==anything handling real users' data or money needs an engineer's security review.==",
      },
      analogy: {
        title: "You're the Director, Not the Crew",
        metaphor:
          "Traditional coding is running the camera, lights and sound yourself. Vibe coding puts you in the **director's chair**: 'Warmer lighting. Move the button to the top right. That scene drags, cut it.' ==You don't touch the wires; you judge what's on the monitor and steer.== But a director still needs **a script**, and a production still needs **a safety check** before the public sees it.",
        visualComparison: [
          {
            everydayItem: "Director watching the monitor and giving notes",
            aiEquivalent: "You **prompting an AI coding tool** and testing the live preview",
          },
          {
            everydayItem: "The script and storyboard",
            aiEquivalent: "**A clear written brief** of what to build (often called a PRD: Product Requirements Document)",
          },
          {
            everydayItem: "Saving each good take",
            aiEquivalent: "**Saving checkpoints** (with Git) so you can undo when the AI breaks something",
          },
        ],
      },
      activities: [
        {
          type: "beforeAfter",
          title: "From vague wish to buildable brief",
          before: {
            label: "Vague prompt",
            text: "Make a website for my mom's sweets business.",
          },
          after: {
            label: "Director's brief",
            text:
              "Build a one-page website for 'Meera's Kitchen', a home business in Lucknow selling Diwali sweets.\n\n• Top: name, a one-line tagline, and a big 'Order on WhatsApp' button that opens a chat with +91 98XXXXXXXX.\n• Middle: 6 sweets as cards, each with a photo placeholder, name, price per 500g in ₹ and 'Bestseller' tags on two.\n• Bottom: delivery areas, order cut-off date (28 Oct), and an Instagram link.\n• Warm colours (saffron, cream), large text, must look great on a phone.\n• No payments or login. Orders happen on WhatsApp.",
          },
          whyItWorks: [
            "It lists **every section**, so the AI isn't guessing what the page needs.",
            "**Concrete details** (₹ per 500g, cut-off date, WhatsApp) make the result usable straight away.",
            "'Must look great on a phone' matches **how her customers will actually open it**.",
            "'No payments or login' keeps it **simple and safe**. Those features need an engineer's review.",
          ],
        },
        {
          type: "tryIt",
          title: "Vibe-code a tiny tool in one prompt",
          intro: "Your first vibe-coded app, in about two minutes. **Best done on a laptop.**",
          prompt: "Create a single-file HTML web app: a bill splitter for friends at a restaurant.\n- Inputs: total bill in ₹, tip % (default 10), number of people.\n- Show each person's share in big text, rounded to the nearest rupee.\n- Mobile-friendly, warm saffron and cream colours, a friendly font.\nGive me the complete code in one block.",
          whatToNotice: [
            "If your assistant shows a **Preview**, **Canvas** or **Artifact** view, open it. If not, copy the code into a file called **index.html** and double-click it to open it in your browser.",
            "Now direct it like a film director: \"Add a toggle that rounds each share up to the nearest ₹10.\" That back-and-forth ==is vibe coding==.",
            "Test it once with numbers you can check in your head: ₹1,000, 0% tip and 4 people should give **₹250 each**.",
          ],
        },
      ],
      techConversation: {
        context: "A Mumbai D2C brand tests a product idea before hiring engineers",
        speakerA: {
          role: "Product Manager",
          quote:
            "Instead of a 20-page spec and two sprints of waiting, I vibe-coded a **clickable prototype** over the weekend. Ten customers tried it on Monday.",
        },
        speakerB: {
          role: "Engineering Manager",
          quote:
            "Love it. That proves the flow works. Before real customers' data goes in, my team will **rebuild the backend properly** and do a **security review**.",
        },
        plainEnglishTranslation:
          "The PM used AI to build a working mock-up in plain English, saving weeks of guessing. The engineers make it **safe and solid** before it handles real users. (A **sprint** is a team's usual 1–2 week work cycle.)",
      },
      realWorldApplication: {
        forWork:
          "Non-technical PMs, marketers and founders now vibe-code **clickable prototypes**, internal dashboards and small tools **in hours**. Use them to test ideas and ==show engineers exactly what you mean.==",
        forLearning:
          "Start every vibe-coding session with **a written brief**, and **save checkpoints** often. That's exactly how the team behind this course works.",
      },
      jargonCard: {
        term: "Vibe Coding",
        oneLineAnalogy:
          "Being the **film director**: you describe the scene in plain English while the **AI crew writes the code**.",
        meetingDropLine:
          "\"I can vibe-code a clickable prototype from this brief today, so we can test it with five customers before engineering commits.\"",
      },
      quiz: [
        {
          id: "q2-3",
          scenario: "When a non-technical person vibe-codes an app, what's their **most important job**?",
          options: [
            {
              id: "a",
              text: "Memorising programming syntax.",
              isCorrect: false,
              analogyFeedback: "Not quite. The AI handles syntax. Your job is **direction and judgement**.",
            },
            {
              id: "b",
              text: "Giving a clear brief, testing the live app, and saving working checkpoints.",
              isCorrect: true,
              analogyFeedback: "Spot on. Script, monitor, saved takes: that's **the director's job**.",
            },
          ],
        },
        {
          id: "q2-3b",
          scenario: "You vibe-coded an app that will collect customers' **phone numbers and payments**. What's the responsible next step?",
          options: [
            {
              id: "a",
              text: "Launch it. If it works on your phone, it's ready.",
              isCorrect: false,
              analogyFeedback:
                "Not quite. Working isn't the same as **safe**. In 2025, a scan found about 170 out of 1,645 apps built on one vibe-coding platform exposing personal data.",
            },
            {
              id: "b",
              text: "Get an engineer to review its security before real customers use it.",
              isCorrect: true,
              analogyFeedback: "Right. Prototype with vibes, **protect users with expertise**.",
            },
            {
              id: "c",
              text: "Ask the AI if the app is secure and trust its answer.",
              isCorrect: false,
              analogyFeedback: "Not quite. The AI that wrote the code **isn't an independent reviewer**. Get a human expert to check.",
            },
          ],
        },
        {
          id: "q2-3c",
          scenario: "The AI coding tool broke a page that worked an hour ago. What saves you?",
          options: [
            {
              id: "a",
              text: "A saved checkpoint (a Git commit) from when it worked.",
              isCorrect: true,
              analogyFeedback: "Yes. Like keeping the good take, you **roll back** and try a different instruction.",
            },
            {
              id: "b",
              text: "Starting the whole project from scratch.",
              isCorrect: false,
              analogyFeedback: "Not quite. Painful, and unnecessary if you've been **saving checkpoints**.",
            },
            {
              id: "c",
              text: "Telling the AI it made a mistake, louder.",
              isCorrect: false,
              analogyFeedback: "Not quite. Pasting the **exact error** helps; volume doesn't. Checkpoints are your real safety net.",
            },
          ],
        },
        {
          id: "q2-3d",
          scenario: "Who coined the term 'vibe coding', and when?",
          options: [
            {
              id: "a",
              text: "AI researcher Andrej Karpathy, in February 2025.",
              isCorrect: true,
              analogyFeedback: "Correct. He described it as **giving in to the vibes** and not even reading the code, originally for throwaway weekend projects.",
            },
            {
              id: "b",
              text: "Apple, at a 2010 product launch.",
              isCorrect: false,
              analogyFeedback: "Not quite, far too early. AI coding tools capable of this only **took off in the 2020s**.",
            },
          ],
        },
      ],
    },
  ],
};

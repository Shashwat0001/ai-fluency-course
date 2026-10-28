import type { Track } from "../types";

export const TRACK_4: Track = {
  id: "track-4-modern-world",
  number: 4,
  icon: "Bot",
  title: "AI for Work and Learning",
  description:
    "Practical playbooks: brief AI well, hand off busywork safely, spot what's worth automating, and learn faster with AI as your tutor.",
  badgeName: "Workflow Architect",
  estimatedTime: "20 mins",
  lessons: [
    {
      id: "prompt-recipe",
      title: "Brief AI Like Your Darzi",
      subtitle: "A five-part recipe for prompts that actually work",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "AI is only as good as your brief. ==Good briefs have five parts: role, task, context, format, limits.==",
        explanation:
          "The most common beginner mistake: type a one-line request, then judge AI by the **bland reply**. AI doesn't know your company, your boss, your customer or your deadline **unless you tell it**. A useful prompt reads like a brief you'd give a **capable new colleague**. ==No magic words needed, just the details a person would need too.==",
      },
      analogy: {
        title: "What Your Darzi Needs to Know",
        metaphor:
          "Walk into a tailor's shop and say 'make me a shirt'. You'll get a shirt, **just not the one you pictured**. Now give the darzi your measurements, the fabric, the occasion (office or a cousin's wedding), the collar style and the date you need it. You get exactly what you wanted. AI is a skilled tailor too. Talented, but ==it can only stitch what you specify.== And just like a **trial fitting**, you can ask for alterations afterwards.",
        visualComparison: [
          {
            everydayItem: "\"Make me a shirt\"",
            aiEquivalent: "A one-line prompt: you get a **generic, average answer**",
          },
          {
            everydayItem: "Measurements, fabric, occasion, collar, delivery date",
            aiEquivalent: "**Role, task, context, format and limits** in your prompt",
          },
          {
            everydayItem: "Trial fitting and alterations",
            aiEquivalent: "**Follow-up messages**: \"shorter\", \"more formal\", \"give me 3 options\"",
          },
        ],
      },
      activities: [
        {
          type: "beforeAfter",
          title: "Same task, two briefs",
          before: {
            label: "One-line prompt",
            text: "Write an email to a client about the delay.",
          },
          after: {
            label: "Five-part prompt",
            text:
              "You are an account manager at a Mumbai logistics company. [Role]\n\nWrite an email to our client, Mehta Textiles, explaining that their shipment to Chennai will arrive on 4 November instead of 31 October. [Task]\n\nThe delay is because heavy rain closed a highway. They're a long-standing client and were already upset about a delay last month. [Context]\n\nUnder 120 words, with a clear subject line and one apology, not three. [Format]\n\nDon't offer a discount; offer a call with my manager instead. [Limits]",
          },
          whyItWorks: [
            "**The role sets the tone**: a professional account manager, not a robot.",
            "The context (an **unhappy repeat client**) tells the AI to be extra careful and warm.",
            "The format stops the AI writing a **400-word essay** full of apologies.",
            "The limits stop it **inventing a discount** you never approved. AI will happily promise things you can't deliver.",
          ],
        },
        {
          type: "checklist",
          title: "The prompt recipe: screenshot this",
          intro: "Run through these before you hit enter on **anything that matters**.",
          items: [
            { text: "Role: who should the AI act as?", detail: "\"You are an HR manager at a 200-person startup in Bengaluru.\"" },
            { text: "Task: what exactly should it produce?", detail: "\"Write a leave-policy FAQ with 8 questions and answers.\"" },
            { text: "Context: what does it need to know?", detail: "Who it's for, what happened, what you've tried, **why it matters**." },
            { text: "Format: what should the answer look like?", detail: "Length, bullet points or table, **language** (English, Hindi, Hinglish), tone." },
            { text: "Limits: what must it avoid?", detail: "\"Don't mention salaries. Don't make up policy numbers; say 'check with HR' instead.\"" },
            { text: "Refine with follow-ups, don't start over", detail: "\"Good. Now make it friendlier and cut it to half.\"" },
          ],
        },
        {
          type: "tryIt",
          title: "Let the AI interview you first",
          intro:
            "Stuck on what to put in the brief? **Make the AI ask you** for what it's missing. This works for almost anything you write.",
          prompt:
            "I want to write a short LinkedIn post saying I've finished a beginner course on AI. Before you write anything, ask me 5 questions you need answered so the post sounds like me and not like a generic AI post. Ask them one at a time and wait for my answer each time.",
          whatToNotice: [
            "It asks about things you'd never think to include: **who you want to reach**, your tone, what you'll do next.",
            "Compare the final post with what a one-line request gets you. ==The difference is the context you gave.==",
            "Edit the final version **in your own words** before posting. Readers can tell when a post is 100% AI.",
          ],
        },
      ],
      techConversation: {
        context: "A D2C fashion brand wonders why its AI product copy sounds fake",
        speakerA: {
          role: "Marketing Lead",
          quote:
            "Every AI-generated description says 'elevate your style' and 'effortlessly chic'. Customers can **smell it**.",
        },
        speakerB: {
          role: "Growth Engineer",
          quote:
            "That's a **prompt problem**, not a model problem. Let's put our brand-voice rules, three descriptions we love and a **banned-words list** into the **system prompt**.",
        },
        plainEnglishTranslation:
          "The AI got no brief, so it wrote average marketing-speak. The **'system prompt'** is the standing brief the AI reads before every request. Give it the brand's voice, **good examples** and words to avoid, and the writing improves.",
      },
      realWorldApplication: {
        forWork:
          "Keep a notes file of **prompts that worked** for repeat tasks: the weekly update, client follow-ups, meeting summaries. **Reusing a proven brief** beats writing a new one every time.",
        forLearning:
          "When an answer disappoints, **don't start a new chat**. Reply like you would to a colleague: \"Too formal. Make it sound like a WhatsApp message to a friend.\"",
      },
      keyTerms: [
        { term: "Role", meaning: "**Who the AI should act as**, e.g. \"You are an HR manager at a 200-person startup.\" It sets the tone and the expertise." },
        { term: "Task", meaning: "**Exactly what the AI should produce**: an email, a table, five headline options." },
        { term: "Context", meaning: "**The background it needs**: who it's for, what happened, why it matters. The biggest fix for generic answers." },
        { term: "Format", meaning: "**What the answer should look like**: length, bullets or a table, language, tone." },
        { term: "Limits", meaning: "**What the AI must avoid**, e.g. \"Don't promise a discount\" or \"Say 'not specified' instead of guessing.\"" },
      ],
      jargonCard: {
        term: "Prompt (and System Prompt)",
        oneLineAnalogy:
          "A **prompt** is the brief for one task; a **system prompt** is the standing brief the AI reads before every task.",
        meetingDropLine:
          "\"Before we blame the tool, let's fix the prompt: add our brand voice, two good examples and the exact format we need.\"",
      },
      quiz: [
        {
          id: "q4-1-1",
          scenario:
            "Your AI-written reply to a customer sounds **stiff and generic**. What's the most useful first fix?",
          options: [
            {
              id: "a",
              text: "Switch to a more expensive AI model.",
              isCorrect: false,
              analogyFeedback:
                "Not quite. A better tailor still can't guess your measurements. Most generic answers come from a **thin brief**, not a weak model.",
            },
            {
              id: "b",
              text: "Add context: who the customer is, what happened, and the tone you want.",
              isCorrect: true,
              analogyFeedback:
                "Yes! Context is the **measurements and occasion**. With it, the AI writes for this customer, not an average one.",
            },
            {
              id: "c",
              text: "Type the same request again in capital letters.",
              isCorrect: false,
              analogyFeedback:
                "Not quite. Shouting the same vague order at the darzi doesn't change the shirt. Add **information**, not volume.",
            },
          ],
        },
        {
          id: "q4-1-2",
          scenario:
            "Which part of the recipe is this line: \"Answer as a table with three columns: Task, Owner, Deadline\"?",
          options: [
            {
              id: "a",
              text: "Role",
              isCorrect: false,
              analogyFeedback: "Not quite. Role is **who the AI acts as** (\"You are a project manager\"). This line describes the shape of the answer.",
            },
            {
              id: "b",
              text: "Format",
              isCorrect: true,
              analogyFeedback: "Correct. Format is **what the answer should look like**: table, bullets, length, language.",
            },
            {
              id: "c",
              text: "Context",
              isCorrect: false,
              analogyFeedback: "Close, but no. Context is the **background** the AI needs. This line shapes the output, so it's format.",
            },
          ],
        },
        {
          id: "q4-1-3",
          scenario: "Why would you tell the AI \"Ask me 3 questions before you answer\"?",
          options: [
            {
              id: "a",
              text: "It makes the AI reply faster.",
              isCorrect: false,
              analogyFeedback: "Not quite. It actually adds a step. The payoff is a **better answer**, not a faster one.",
            },
            {
              id: "b",
              text: "It surfaces the context you forgot to give.",
              isCorrect: true,
              analogyFeedback:
                "Exactly. It's the darzi asking **\"Office or wedding? Full sleeves or half?\"** before cutting the cloth.",
            },
            {
              id: "c",
              text: "The AI won't answer otherwise.",
              isCorrect: false,
              analogyFeedback: "Not quite. AI will always answer, and that's the problem. Without questions, it **fills the gaps with guesses**.",
            },
          ],
        },
        {
          id: "q4-1-4",
          scenario: "The AI gives you a good draft, but it's **twice as long** as you need. Best next step?",
          options: [
            {
              id: "a",
              text: "Start a new chat and retype the whole request.",
              isCorrect: false,
              analogyFeedback: "Not quite. You'd lose all the context you built. **Ask for an alteration** instead.",
            },
            {
              id: "b",
              text: "Reply: \"Good. Now cut it to 80 words and keep the second paragraph's example.\"",
              isCorrect: true,
              analogyFeedback: "Perfect: a trial fitting. **Specific follow-ups** are the fastest way from 'decent' to 'done'.",
            },
            {
              id: "c",
              text: "Use it as is. The AI knows best.",
              isCorrect: false,
              analogyFeedback: "Not quite. You know your reader; the AI doesn't. **You're the editor**, not the audience.",
            },
          ],
        },
      ],
    },
    {
      id: "automate-busywork",
      title: "Give AI Your Busywork, Not Your Secrets",
      subtitle: "What to delegate, what to check, what never to paste",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      sources: [
        {
          label: "India's Digital Personal Data Protection Act, 2023 (Wikipedia overview)",
          url: "https://en.wikipedia.org/wiki/Digital_Personal_Data_Protection_Act,_2023",
        },
      ],
      bigIdea: {
        headline:
          "AI is a brilliant day-one intern. ==Let it draft and sort, check its work, keep the locker keys.==",
        explanation:
          "The best early wins are tasks that are **repetitive, text-heavy and easy to check**: first drafts, meeting summaries, messy notes turned into tables, spreadsheet formulas, translations, feedback grouped into themes. Two rules keep you safe. Check anything that will be **sent, signed or used as a number**. And don't paste **confidential information** (customer details, Aadhaar or PAN numbers, salaries, unannounced results) into a personal AI account. ==Your company's AI policy and approved tools always come first.==",
      },
      analogy: {
        title: "The Brilliant Day-One Intern",
        metaphor:
          "Picture an intern who has read millions of documents, types a hundred times faster than you and never gets tired. But they **joined this morning**. They don't know your clients, and sometimes answer **confidently when they're unsure**. You'd happily give them the meeting minutes to draft or a messy spreadsheet to tidy. You'd read their work before it goes to a client. ==And you wouldn't hand them the payroll file on day one.==",
        visualComparison: [
          {
            everydayItem: "The intern drafts; you review and sign off",
            aiEquivalent: "AI writes the **first version**; a human checks before anything goes out",
          },
          {
            everydayItem: "No locker keys on day one",
            aiEquivalent: "**No confidential data** in tools your company hasn't approved",
          },
          {
            everydayItem: "Showing the intern 'how we do it here'",
            aiEquivalent: "**Saved prompts and examples** that teach the AI your format",
          },
        ],
      },
      activities: [
        {
          type: "sort",
          title: "Safe to paste?",
          instructions:
            "You're on a **free, personal AI account** (not one your company provides). For each item, decide: fine to paste in, or keep it out?",
          buckets: ["Fine to paste", "Keep it out"],
          items: [
            {
              text: "Your company's public press release, to turn into a LinkedIn post",
              bucket: 0,
              why: "It's **already public**, so there's nothing to leak.",
            },
            {
              text: "A spreadsheet of customer names, phone numbers and order history",
              bucket: 1,
              why: "That's **other people's personal data**. India's data protection law and nearly every company policy restrict sending it to outside tools.",
            },
            {
              text: "Your own rough notes for a presentation, with no client names",
              bucket: 0,
              why: "Your own **non-confidential thinking** is exactly what AI is good at polishing.",
            },
            {
              text: "A colleague's Aadhaar and PAN numbers for a reimbursement form",
              bucket: 1,
              why: "**Government ID numbers** are highly sensitive. Never paste them into AI tools.",
            },
            {
              text: "Next quarter's revenue numbers, before they're announced",
              bucket: 1,
              why: "Unannounced financial results are confidential. For listed companies, they can **affect the share price**. They stay inside approved systems.",
            },
            {
              text: "A generic job description for a 'Marketing Associate' role",
              bucket: 0,
              why: "Generic, **non-confidential** text. A great thing to improve with AI.",
            },
          ],
        },
        {
          type: "scenario",
          title: "Monday, 10 a.m.: the complaints pile",
          setting:
            "Your manager wants a summary of last week's **60 customer complaints** by **1 p.m.**: the top 3 issues, with numbers. Your company provides an **approved AI assistant**.",
          steps: [
            {
              situation:
                "The complaints sit in a spreadsheet that also has **customer names and phone numbers**. What do you paste into the AI?",
              choices: [
                {
                  text: "Everything, as is. The AI needs all the data.",
                  isBest: false,
                  outcome:
                    "Names and phone numbers don't help find themes. They just add **privacy risk**. Even with an approved tool, share only what the task needs.",
                },
                {
                  text: "Only the complaint-text column, with names and numbers removed.",
                  isBest: true,
                  outcome:
                    "Exactly. The themes live in the text. '**Share only what the task needs**' is the habit that keeps you out of trouble.",
                },
                {
                  text: "Nothing. AI must never touch customer data.",
                  isBest: false,
                  outcome:
                    "With an approved tool and personal details removed, this is a **textbook good use**. Skipping AI here just means a slower, more tired you.",
                },
              ],
            },
            {
              situation:
                "The AI replies: \"Top issue: late delivery (24 complaints, 40%).\" What do you do **before it goes in your summary**?",
              choices: [
                {
                  text: "Paste it straight in. Computers are good at counting.",
                  isBest: false,
                  outcome:
                    "Spreadsheets are good at counting; **chatbots often miscount** long lists. A number your manager repeats in a meeting **has to be right**.",
                },
                {
                  text: "Spot-check: filter the sheet for 'late' and 'delay' and see if the count roughly matches.",
                  isBest: true,
                  outcome:
                    "Right. Let AI find the themes and let **the spreadsheet do the exact counting**. Two minutes of checking protects your credibility.",
                },
                {
                  text: "Ask the AI \"Are you sure?\" until it agrees with itself.",
                  isBest: false,
                  outcome:
                    "Asking again just produces **another guess**, sometimes a different one. Check against **the source data** instead.",
                },
              ],
            },
            {
              situation: "It's 12:15 and the summary is ready. What do you **send**?",
              choices: [
                {
                  text: "The AI's text exactly as it came out.",
                  isBest: false,
                  outcome:
                    "AI drafts often sound generic and can slip in a **confident claim you haven't checked**. Your name is on this.",
                },
                {
                  text: "Your edited version: checked numbers, plus your own one-line recommendation at the top.",
                  isBest: true,
                  outcome:
                    "This is '**AI drafts, human owns**'. The AI saved you two hours; **your judgement** is what your manager actually needs.",
                },
              ],
            },
          ],
          debrief:
            "The pattern to remember: ==share only what's needed, let AI read and draft, check numbers against the source, and own the final version.==",
        },
        {
          type: "checklist",
          title: "Is this task worth handing to AI?",
          intro:
            "Think of one task from your own week and tick what's true. **Four or more ticks** makes it a strong first candidate.",
          items: [
            { text: "I do it at least once a week" },
            { text: "It takes me 30 minutes or more each time" },
            { text: "It's mostly reading, writing, summarising or reformatting text" },
            { text: "A mistake would be easy to spot before it causes harm" },
            { text: "It doesn't need confidential data outside approved tools" },
          ],
        },
      ],
      techConversation: {
        context: "An ops team plans to automate the weekly vendor report",
        speakerA: {
          role: "Operations Manager",
          quote: "Can AI just write the **whole weekly vendor performance report** for us?",
        },
        speakerB: {
          role: "Data Analyst",
          quote:
            "For the commentary, yes. For the **numbers**, no. A **SQL query** pulls the exact figures, the LLM writes the summary around them, and **someone signs off** before it goes out.",
        },
        plainEnglishTranslation:
          "Let the database calculate the numbers exactly (**SQL** is the language used to pull data from a database). Let AI write the words around them. Then have a person approve it. That's the '**human in the loop**'.",
      },
      realWorldApplication: {
        forWork:
          "Pick one task that scored **four or more ticks** above. Do it with AI this week, **save the prompt** that worked, and reuse it next week.",
        forLearning:
          "Ask AI to write the spreadsheet formula you need **and explain it piece by piece**: \"Write a Google Sheets formula that counts orders above ₹5,000 in column C, and explain each part.\"",
      },
      jargonCard: {
        term: "Human-in-the-Loop",
        oneLineAnalogy: "The AI intern **does the first draft**; a person **checks and approves** before anything goes out.",
        meetingDropLine:
          "\"Let's keep a human in the loop on anything customer-facing, and fully automate only the internal drafts for now.\"",
      },
      quiz: [
        {
          id: "q4-2-1",
          scenario: "Which of these is the best first task to hand to AI?",
          options: [
            {
              id: "a",
              text: "Approving this month's vendor payments.",
              isCorrect: false,
              analogyFeedback: "Not quite. Money going out the door needs **exact rules and human approval**. Not a day-one intern job.",
            },
            {
              id: "b",
              text: "Turning your messy meeting notes into a clean list of action items.",
              isCorrect: true,
              analogyFeedback: "Yes. It's repetitive and text-heavy, and you'll **spot a mistake instantly** because you were in the meeting.",
            },
            {
              id: "c",
              text: "Deciding which team member gets promoted.",
              isCorrect: false,
              analogyFeedback: "Not quite. High-stakes judgements about people need **human accountability**. AI can help organise your notes, but it shouldn't make the call.",
            },
          ],
        },
        {
          id: "q4-2-2",
          scenario:
            "A teammate pastes a customer list with phone numbers into their **personal ChatGPT account** to 'clean it up'. What's the problem?",
          options: [
            {
              id: "a",
              text: "None. AI tools delete everything the moment you close the chat.",
              isCorrect: false,
              analogyFeedback:
                "Not quite. Consumer AI services usually store chats, and some may use them to improve their models unless you opt out. Assume **anything you paste could be kept**.",
            },
            {
              id: "b",
              text: "Customers' personal data has gone to an outside tool the company hasn't approved.",
              isCorrect: true,
              analogyFeedback: "Exactly: the **locker keys** went to the day-one intern. Use **approved tools**, or strip out personal details first.",
            },
            {
              id: "c",
              text: "AI can't understand phone numbers.",
              isCorrect: false,
              analogyFeedback: "Not quite. It can read them perfectly well, which is **exactly why they shouldn't be there**.",
            },
          ],
        },
        {
          id: "q4-2-3",
          scenario: "What does 'human-in-the-loop' mean?",
          options: [
            {
              id: "a",
              text: "A person reviews and approves the AI's output before it's used.",
              isCorrect: true,
              analogyFeedback: "Right. **AI drafts, a human owns** the final version.",
            },
            {
              id: "b",
              text: "A person types every word while AI watches.",
              isCorrect: false,
              analogyFeedback: "Not quite. That's just no AI at all. The human's job is to **check and decide**, not to do all the typing.",
            },
            {
              id: "c",
              text: "The AI keeps asking the human to repeat themselves.",
              isCorrect: false,
              analogyFeedback: "Not quite. The 'loop' is about **review and approval**, not repetition.",
            },
          ],
        },
        {
          id: "q4-2-4",
          scenario: "Which task is most worth automating first?",
          options: [
            {
              id: "a",
              text: "A two-minute task you do once a year.",
              isCorrect: false,
              analogyFeedback: "Not quite. Rare and quick means **tiny savings**. Not worth setting up.",
            },
            {
              id: "b",
              text: "A weekly 45-minute status report that's mostly rewriting the same updates.",
              isCorrect: true,
              analogyFeedback: "Exactly. Frequent, slow, text-heavy and easy to check: **the sweet spot**. That's about **40 hours a year** back.",
            },
            {
              id: "c",
              text: "A one-off, sensitive legal negotiation.",
              isCorrect: false,
              analogyFeedback: "Not quite. One-off and high-stakes: AI can help you prepare, but this **isn't one to hand off**.",
            },
          ],
        },
      ],
    },
    {
      id: "ai-as-tutor",
      title: "Your Tutor, Not Your Homework Machine",
      subtitle: "Make AI teach you instead of answering for you",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Used well, AI is a patient 24x7 tutor. ==Used badly, it's a shortcut to knowing nothing.==",
        explanation:
          "If AI does the work for you, you finish faster and **learn nothing**. It's like copying a friend's notebook the night before the exam. Ask it to **explain, quiz you and correct your answers**, and it adapts to exactly the part you don't get. ==The trick: tell it to teach, not to answer.== And because AI can still be confidently wrong, **check important facts** against a trusted source.",
      },
      analogy: {
        title: "Gym Trainer or Paid Lifter?",
        metaphor:
          "Pay someone to lift weights for you and the weights get lifted, but **your muscles stay the same**. A good trainer shows you the form, **makes you do the reps**, corrects you mid-set, and adds weight when you're ready. ==You want AI to be the trainer: it explains, quizzes you, and makes you do the thinking.==",
        visualComparison: [
          {
            everydayItem: "Someone lifts the weights for you",
            aiEquivalent: "\"Write my answer\": task done, **nothing learned**",
          },
          {
            everydayItem: "Trainer corrects your form",
            aiEquivalent: "\"Quiz me and tell me **exactly what I got wrong**\"",
          },
          {
            everydayItem: "Adding weight as you get stronger",
            aiEquivalent: "\"That was easy. Give me a **harder question**.\"",
          },
        ],
      },
      activities: [
        {
          type: "beforeAfter",
          title: "Answer machine vs. tutor",
          before: {
            label: "Answer-machine prompt",
            text: "Explain what inflation is.",
          },
          after: {
            label: "Tutor prompt",
            text:
              "I'm learning economics from scratch. Teach me what inflation is using an example from everyday Indian life, in under 100 words. Then ask me one question to check I understood. Don't give me the answer until I've tried. If I'm wrong, give me a hint, not the answer.",
          },
          whyItWorks: [
            "\"From scratch\" **sets your level**, so it doesn't bury you in jargon.",
            "A **familiar example** (vegetable prices, rent, petrol) makes the idea stick.",
            "Being asked a question **forces you to think**, and that's where the learning happens.",
            "\"A hint, not the answer\" stops the AI **doing the reps for you**.",
          ],
        },
        {
          type: "tryIt",
          title: "Learn one thing in 10 minutes",
          intro:
            "Pick a term you've **nodded along to** in meetings ('EBITDA', 'API', 'repo rate', 'churn'). Put it where it says [TOPIC].",
          prompt:
            "Be my patient tutor. I want to understand [TOPIC] well enough to explain it to a friend.\n1. Explain it in 3 short steps, using an everyday Indian example.\n2. Then quiz me with 3 questions, one at a time, waiting for my answer each time.\n3. After my answers, tell me what I misunderstood.\n4. Finally, ask me to explain the whole idea back to you in two sentences, and grade my explanation out of 10.",
          whatToNotice: [
            "The **'explain it back'** step (the Feynman technique) shows you exactly what you haven't understood yet.",
            "If an example sounds off, ask: \"How sure are you about that? **Where could I check it?**\"",
            "This works for **exam prep** too: swap [TOPIC] for a chapter name.",
          ],
        },
        {
          type: "flashcards",
          title: "Study tricks that pair brilliantly with AI",
          cards: [
            {
              front: "Socratic method",
              back: "Learning by **being asked questions** instead of being told answers. Prompt: \"Teach me by asking me questions.\"",
            },
            {
              front: "Feynman technique",
              back: "Explain an idea in simple words, **as if to a 12-year-old**. The gaps in your explanation show you what to study next.",
            },
            {
              front: "Active recall",
              back: "**Testing yourself** instead of re-reading. Prompt: \"Quiz me on this chapter, one question at a time.\"",
            },
            {
              front: "Spaced repetition",
              back: "Revisiting material at **growing gaps** (1 day, 3 days, a week). Ask AI to turn your notes into flashcards you come back to.",
            },
            {
              front: "ELI5",
              back: "\"Explain Like I'm 5\": internet shorthand for asking for **the simplest possible explanation**.",
            },
          ],
        },
      ],
      realWorldApplication: {
        forWork:
          "Before a meeting on an unfamiliar topic, spend **10 minutes with the tutor prompt**. Walk in with **three sharp questions** instead of nodding along.",
        forLearning:
          "Upload your own notes or a chapter to a tool like Google's Gemini Notebook (formerly NotebookLM). Ask it to quiz you **only from that material**, so the questions match your syllabus.",
      },
      jargonCard: {
        term: "Socratic Prompting",
        oneLineAnalogy:
          "Asking AI to **teach you by questioning you**, like a good teacher, instead of handing over the answer.",
        meetingDropLine:
          "\"I used AI as a Socratic tutor to get up to speed on our pricing model this week. Happy to share the prompt.\"",
      },
      quiz: [
        {
          id: "q4-3-1",
          scenario: "You have an exam on **GST basics** next week. Which use of AI will help you learn the most?",
          options: [
            {
              id: "a",
              text: "Ask AI to write model answers to last year's paper and memorise them.",
              isCorrect: false,
              analogyFeedback: "Not quite. That's someone else lifting the weights. One **twist in the exam question** and the memorised answer won't fit.",
            },
            {
              id: "b",
              text: "Ask AI to quiz you topic by topic and explain your mistakes.",
              isCorrect: true,
              analogyFeedback: "Yes, that's the trainer approach. **Active recall plus correction** is one of the most effective ways to learn.",
            },
            {
              id: "c",
              text: "Ask for a one-line summary of the whole chapter.",
              isCorrect: false,
              analogyFeedback: "Close, but no. Handy for revision, but a summary alone gives you **the illusion of knowing** without the understanding.",
            },
          ],
        },
        {
          id: "q4-3-2",
          scenario: "What is the 'Feynman technique'?",
          options: [
            {
              id: "a",
              text: "Memorising definitions word for word.",
              isCorrect: false,
              analogyFeedback: "Not quite. That's **rote learning**, almost the opposite of Feynman.",
            },
            {
              id: "b",
              text: "Explaining an idea in plain words to find the gaps in your understanding.",
              isCorrect: true,
              analogyFeedback: "Correct. If you can't explain it simply, you've found **exactly what to study next**.",
            },
            {
              id: "c",
              text: "Reading the same chapter three times.",
              isCorrect: false,
              analogyFeedback: "Not quite. Re-reading feels productive but is one of the **weakest ways to learn**.",
            },
          ],
        },
        {
          id: "q4-3-3",
          scenario: "Your AI tutor quotes a statistic you'd like to use in a presentation. What should you do?",
          options: [
            {
              id: "a",
              text: "Use it. Tutors don't lie.",
              isCorrect: false,
              analogyFeedback: "Not quite. AI doesn't lie on purpose, but it can **state wrong facts very confidently**. You'll learn why in Track 5.",
            },
            {
              id: "b",
              text: "Check it against a trusted source before using it.",
              isCorrect: true,
              analogyFeedback: "Right. Use AI to understand, and use **trusted sources** for facts you'll repeat in public.",
            },
            {
              id: "c",
              text: "Ask the same AI \"Are you sure?\"",
              isCorrect: false,
              analogyFeedback: "Not quite. It may just apologise and give you a different number. Check **outside the chat**.",
            },
          ],
        },
        {
          id: "q4-3-4",
          scenario: "Why does the instruction \"give me a hint, not the answer\" help you learn?",
          options: [
            {
              id: "a",
              text: "It makes the AI respond faster.",
              isCorrect: false,
              analogyFeedback: "Not quite. Speed isn't the point. The point is **who does the thinking**.",
            },
            {
              id: "b",
              text: "It keeps you doing the thinking, which is what builds understanding.",
              isCorrect: true,
              analogyFeedback: "Exactly. **Struggling a little** before the answer is what makes it stick.",
            },
            {
              id: "c",
              text: "It makes the AI use fewer words.",
              isCorrect: false,
              analogyFeedback: "Not quite. Maybe it does, but that's a side effect. The real benefit is that **your brain does the reps**.",
            },
          ],
        },
      ],
    },
  ],
};

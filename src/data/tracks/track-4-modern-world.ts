import type { Track } from "../types";

export const TRACK_4: Track = {
  id: "track-4-modern-world",
  number: 4,
  icon: "Bot",
  title: "AI for Work and Learning",
  description:
    "Practical playbooks for daily productivity: brief AI like a pro, crush spreadsheet and meeting busywork, write without robotic slop, and master any skill faster.",
  badgeName: "Workflow Architect",
  estimatedTime: "65 mins",
  lessons: [
    // LESSON 1
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
            "I want to write a short LinkedIn post saying I've finished a course on AI fluency. Before you write anything, ask me 5 questions you need answered so the post sounds like me and not like a generic AI post. Ask them one at a time and wait for my answer each time.",
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
              text: "Add context: who the customer is, what happened, and the exact tone and limits you want.",
              isCorrect: true,
              analogyFeedback:
                "Yes! Context is the **measurements and occasion**. With it, the AI writes for this customer, not an average one.",
            },
            {
              id: "b",
              text: "Switch to a more expensive AI model immediately.",
              isCorrect: false,
              analogyFeedback:
                "Not quite. A better tailor still can't guess your measurements. Most generic answers come from a **thin brief**, not a weak model.",
            },
            {
              id: "c",
              text: "Type the same request again in capital letters.",
              isCorrect: false,
              analogyFeedback:
                "Not quite. Shouting the same vague order at the darzi doesn't change the shirt. Add **information**, not volume.",
            },
            {
              id: "d",
              text: "Restart your laptop.",
              isCorrect: false,
              analogyFeedback: "Rebooting won't fix a missing brief!",
            },
          ],
        },
        {
          id: "q4-1-2",
          scenario:
            "Which part of the 5-part recipe is this line: \"Answer as a table with three columns: Task, Owner, Deadline\"?",
          options: [
            {
              id: "a",
              text: "Role",
              isCorrect: false,
              analogyFeedback: "Not quite. Role is **who the AI acts as** (\"You are a project manager\"). This line describes the shape of the answer.",
            },
            {
              id: "b",
              text: "Context",
              isCorrect: false,
              analogyFeedback: "Close, but no. Context is the **background** the AI needs. This line shapes the output.",
            },
            {
              id: "c",
              text: "Format",
              isCorrect: true,
              analogyFeedback: "Correct. Format is **what the answer should look like**: table, bullets, length, language.",
            },
            {
              id: "d",
              text: "Limits",
              isCorrect: false,
              analogyFeedback: "Limits specify what the AI must *avoid* (e.g., 'Do not promise a refund').",
            },
          ],
        },
        {
          id: "q4-1-3",
          scenario: "The AI gives you a good draft, but it's **twice as long** as you need. Best next step?",
          options: [
            {
              id: "a",
              text: "Start a new chat and retype the whole request from scratch.",
              isCorrect: false,
              analogyFeedback: "Not quite. You'd lose all the context you built. **Ask for an alteration** instead.",
            },
            {
              id: "b",
              text: "Use it as is. The AI knows best.",
              isCorrect: false,
              analogyFeedback: "Not quite. You know your reader; the AI doesn't. **You're the editor**, not the audience.",
            },
            {
              id: "c",
              text: "Delete your account.",
              isCorrect: false,
              analogyFeedback: "A quick follow-up prompt is all you need!",
            },
            {
              id: "d",
              text: "Reply in the same chat: \"Good. Now cut it to 80 words and keep the second paragraph's example.\"",
              isCorrect: true,
              analogyFeedback: "Perfect: a trial fitting. **Specific follow-ups** are the fastest way from 'decent' to 'done'.",
            },
          ],
        },
      ],
    },

    // LESSON 2
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
              text: "Approving this month's vendor payments automatically.",
              isCorrect: false,
              analogyFeedback: "Not quite. Money going out the door needs **exact rules and human approval**. Not a day-one intern job.",
            },
            {
              id: "b",
              text: "Turning your messy meeting notes into a clean list of action items for you to review.",
              isCorrect: true,
              analogyFeedback: "Yes. It's repetitive and text-heavy, and you'll **spot a mistake instantly** because you were in the meeting.",
            },
            {
              id: "c",
              text: "Deciding which team member gets promoted.",
              isCorrect: false,
              analogyFeedback: "Not quite. High-stakes judgements about people need **human accountability**.",
            },
            {
              id: "d",
              text: "Signing a binding commercial lease on behalf of the company.",
              isCorrect: false,
              analogyFeedback: "Legal commitments always require human authority and review.",
            },
          ],
        },
        {
          id: "q4-2-2",
          scenario:
            "A teammate pastes a customer list with phone numbers and PAN details into their **personal free AI account** to 'clean it up'. What's the problem?",
          options: [
            {
              id: "a",
              text: "None. Consumer AI tools delete everything the moment you close the browser tab.",
              isCorrect: false,
              analogyFeedback:
                "Not quite. Consumer AI services store chats and may use them for model training unless opted out. Assume **anything you paste could be kept**.",
            },
            {
              id: "b",
              text: "AI can't understand 10-digit phone numbers.",
              isCorrect: false,
              analogyFeedback: "Not quite. It can read them perfectly well, which is **exactly why they shouldn't be there**.",
            },
            {
              id: "c",
              text: "Customers' sensitive personal data has been sent to an unapproved outside service, violating company policy and privacy rules.",
              isCorrect: true,
              analogyFeedback: "Exactly: the **locker keys** went to an external server. Use **approved tools** and strip out personal details first.",
            },
            {
              id: "d",
              text: "The font of the spreadsheet will change.",
              isCorrect: false,
              analogyFeedback: "Font styling is the least of your worries when leaking PII!",
            },
          ],
        },
        {
          id: "q4-2-3",
          scenario: "What does 'human-in-the-loop' mean in a workplace AI workflow?",
          options: [
            {
              id: "a",
              text: "A person reviews, edits, and approves the AI's output before it is sent or acted upon.",
              isCorrect: true,
              analogyFeedback: "Right. **AI drafts, a human owns** the final version.",
            },
            {
              id: "b",
              text: "A person types every word manually while the AI watches.",
              isCorrect: false,
              analogyFeedback: "Not quite. That's just no AI at all. The human's job is to **check and decide**, not do all the typing.",
            },
            {
              id: "c",
              text: "The AI keeps asking the human to repeat themselves in a loop.",
              isCorrect: false,
              analogyFeedback: "Not quite. The 'loop' is about **review and approval**, not repetition.",
            },
            {
              id: "d",
              text: "Employees have to sit in a circle while using laptops.",
              isCorrect: false,
              analogyFeedback: "Definitely not a seating arrangement!",
            },
          ],
        },
      ],
    },

    // LESSON 3
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
          "Upload your own notes or a chapter to a tool like Google's NotebookLM. Ask it to quiz you **only from that material**, so the questions match your syllabus.",
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
              text: "Ask AI to write model answers to last year's paper and memorise them word for word.",
              isCorrect: false,
              analogyFeedback: "Not quite. That's someone else lifting the weights. One **twist in the exam question** and the memorised answer won't fit.",
            },
            {
              id: "b",
              text: "Ask for a one-line summary of the whole chapter.",
              isCorrect: false,
              analogyFeedback: "Handy for quick revision, but a summary alone gives you **the illusion of knowing** without deep understanding.",
            },
            {
              id: "c",
              text: "Ask AI to generate a pretty cover page for your notes.",
              isCorrect: false,
              analogyFeedback: "A nice cover page won't help you answer GST slab questions!",
            },
            {
              id: "d",
              text: "Ask AI to quiz you topic by topic, wait for your attempt, and explain your mistakes.",
              isCorrect: true,
              analogyFeedback: "Yes, that's the trainer approach. **Active recall plus correction** is one of the most effective ways to learn.",
            },
          ],
        },
        {
          id: "q4-3-2",
          scenario: "What is the **Feynman technique** when studying a complex topic?",
          options: [
            {
              id: "a",
              text: "Explaining an idea in plain, simple words (as if to a 12-year-old) to expose the exact gaps in your own understanding.",
              isCorrect: true,
              analogyFeedback: "Correct. If you can't explain it simply without hiding behind jargon, you've found **exactly what to study next**.",
            },
            {
              id: "b",
              text: "Memorising textbook definitions word for word.",
              isCorrect: false,
              analogyFeedback: "Not quite. That's **rote learning**, almost the opposite of Feynman.",
            },
            {
              id: "c",
              text: "Reading the same chapter silently three times in a row.",
              isCorrect: false,
              analogyFeedback: "Not quite. Passive re-reading feels productive but is one of the **weakest ways to learn**.",
            },
            {
              id: "d",
              text: "Listening to podcasts at 3x speed while sleeping.",
              isCorrect: false,
              analogyFeedback: "Sleep learning doesn't build active mental models!",
            },
          ],
        },
        {
          id: "q4-3-3",
          scenario: "Why does the instruction **\"give me a hint, not the answer\"** make your AI study session twice as effective?",
          options: [
            {
              id: "a",
              text: "It makes the AI respond faster.",
              isCorrect: false,
              analogyFeedback: "Not quite. Speed isn't the point. The point is **who does the thinking**.",
            },
            {
              id: "b",
              text: "It keeps your brain doing the mental reps, which is what actually wires new understanding into long-term memory.",
              isCorrect: true,
              analogyFeedback: "Exactly. **Struggling a little** to retrieve the answer is what makes it stick.",
            },
            {
              id: "c",
              text: "It saves electricity in the data centre.",
              isCorrect: false,
              analogyFeedback: "A multi-turn Socratic chat actually uses more tokens—and it's worth every paisa!",
            },
            {
              id: "d",
              text: "It unlocks a secret free subscription.",
              isCorrect: false,
              analogyFeedback: "No secret subscription—just a much sharper brain!",
            },
          ],
        },
      ],
    },

    // LESSON 4
    {
      id: "research-synthesis-and-fact-checking",
      title: "Deep Research & Fact-Checking Playbook",
      subtitle: "How to turn 20 open browser tabs into a verified, source-cited executive brief in 15 minutes",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Never use a standard memory-only chat for live facts. ==Use Deep Research and Search-Grounded tools to gather cited sources, then cross-examine the claims like an investigative journalist.==",
        explanation:
          "When your boss asks for a competitive analysis on 'EV two-wheeler battery swapping in India' by 4 p.m., opening 25 Google tabs takes three hours—and asking an ungrounded chatbot risks fabricated market-share numbers. Modern AI gives you a third mode: **Deep Research agents** (in Gemini, ChatGPT, and Perplexity). A Deep Research agent plans a 10-step search strategy, reads 40–100 live web pages, cross-checks conflicting numbers, and hands you a structured report with clickable links. Your job shifts from **manual hunter-gatherer** to **senior editor who verifies the top 3 numbers at the primary source**.",
      },
      analogy: {
        title: "The Investigative Newsroom Desk",
        metaphor:
          "A solo reporter trying to write a cover story from memory will get sued for libel on day one. A real newsroom sends **three junior researchers** to pull government filings, industry reports, and company announcements—and requires them to **clip the original PDF link to every single number**. Then you, the **Chief Sub-Editor**, click the links on the headline numbers before the story goes to print. ==Deep Research is your team of fast researchers; you are the Chief Sub-Editor.==",
        visualComparison: [
          {
            everydayItem: "Writing a news story from memory with no notes",
            aiEquivalent: "**Ungrounded LLM prompt**: fluent prose, high risk of invented statistics",
          },
          {
            everydayItem: "3 researchers reading 60 filings and pinning source links",
            aiEquivalent: "**Deep Research mode / Perplexity**: autonomous multi-step web search with inline citations",
          },
          {
            everydayItem: "Chief Sub-Editor clicking the link on the 3 headline numbers",
            aiEquivalent: "**Triangulation check**: opening the cited PDF/article to confirm the quote wasn't misread",
          },
        ],
      },
      activities: [
        {
          type: "beforeAfter",
          title: "Vague Research Prompt vs. Triangulated Deep-Research Brief",
          before: {
            label: "Vague, unverified prompt",
            text: "Tell me about the quick-commerce market in India and give me market share stats.",
          },
          after: {
            label: "Structured Deep-Research prompt",
            text: "Run a source-cited research brief on India's Quick Commerce market (Blinkit, Zepto, Swiggy Instamart) using only reports published in 2025 or 2026.\n\n1. Compare estimated gross order value (GOV), dark-store count, and average order value (AOV) in a table.\n2. Where two analyst reports (e.g., Goldman Sachs, HSBC, Redseer, or public earnings filings) disagree on market share, show BOTH numbers side by side instead of averaging them.\n3. Attach the exact source name, date, and URL to every figure. Flag any metric where no reliable public source exists.",
          },
          whyItWorks: [
            "Asking the AI to **show conflicting analyst numbers side by side** stops it from quietly picking a random number.",
            "Setting a **publication date window (2025–2026)** prevents stale 2022 figures from polluting your brief.",
            "Explicitly permitting **'flag where no reliable source exists'** removes the pressure to hallucinate.",
          ],
        },
        {
          type: "checklist",
          title: "The 3-Minute Fact-Checking Protocol",
          intro: "Even search-grounded AI can misread a noisy web page or cite a low-quality blog. Run this 3-minute check before sharing any research deck.",
          items: [
            {
              text: "1. Check the domain quality of the citation",
              detail: "Did the number come from an official SEBI/RBI filing or earnings release, or an anonymous SEO blog repeating a rumour?",
            },
            {
              text: "2. Click through on the 3 numbers your decision depends on",
              detail: "Open the cited link and press `Ctrl+F` (`Cmd+F`) for the exact number—make sure it wasn't a projection for 2030 mislabelled as 2026 actuals.",
            },
            {
              text: "3. Ask for counter-evidence ('Steelman the opposite view')",
              detail: "Prompt: \"Now search specifically for evidence or analyst notes that contradict this conclusion.\"",
            },
          ],
        },
      ],
      techConversation: {
        context: "A strategy consultant in Gurugram prepares a market-entry deck for a client",
        speakerA: {
          role: "Engagement Manager",
          quote:
            "This slide says India's cold-chain logistics market grew 28% YoY. Where did that 28% come from?",
        },
        speakerB: {
          role: "Associate Consultant",
          quote:
            "I used **Deep Research** to scan 45 industry reports. Two blogs claimed 28% with no source, while the **CRISIL 2026 report** puts it at **14.5%**. I cited the CRISIL report in the main table and noted the methodology gap in the footnote.",
        },
        plainEnglishTranslation:
          "AI can read 45 reports in 5 minutes, but **source hygiene**—separating primary ratings-agency data from unverified blog claims—is what makes your work bulletproof.",
      },
      realWorldApplication: {
        forWork:
          "Next time you're researching a vendor, competitor, or regulation, always add this sentence to your prompt: **'Where sources disagree, show both numbers with their dates and publishers rather than picking one.'**",
        forLearning:
          "Use the **Steelman prompt** whenever you read an opinionated article: \"Summarize the author's core argument, then find the 3 strongest data-backed counter-arguments from credible sources.\"",
      },
      jargonCard: {
        term: "Deep Research Agent & Source Triangulation",
        oneLineAnalogy:
          "**An AI researcher that spends 5–10 minutes browsing dozens of live sources**, comparing conflicting numbers before writing a cited report.",
        meetingDropLine:
          "\"I ran a Deep Research pass across recent filings and triangulated the market-sizing numbers across two independent analyst reports.\"",
      },
      quiz: [
        {
          id: "q4-4-1",
          scenario:
            "Why is asking an AI **'Where two sources disagree, show both numbers side by side with their dates and publishers'** such a powerful research trick?",
          options: [
            {
              id: "a",
              text: "Because real-world analyst reports often use different definitions, and forcing the AI to surface disagreements prevents it from quietly picking one stale or biased number.",
              isCorrect: true,
              analogyFeedback: "Spot on. Surfacing disagreements gives you **executive-level nuance** instead of false certainty.",
            },
            {
              id: "b",
              text: "Because it makes the table twice as colourful.",
              isCorrect: false,
              analogyFeedback: "It's about data integrity, not colours!",
            },
            {
              id: "c",
              text: "Because AI models cannot read numbers below 100.",
              isCorrect: false,
              analogyFeedback: "Models read numbers of any size.",
            },
            {
              id: "d",
              text: "To trick the AI into crashing.",
              isCorrect: false,
              analogyFeedback: "Modern Deep Research agents handle multi-source comparisons gracefully.",
            },
          ],
        },
        {
          id: "q4-4-2",
          scenario:
            "A search-grounded AI tool gives you a statistic with a clickable citation badge `[1]` next to it. Does the presence of a `[1]` link guarantee the number is 100% accurate and authoritative?",
          options: [
            {
              id: "a",
              text: "Yes—if there is a blue link, you never need to click it.",
              isCorrect: false,
              analogyFeedback: "Careful! The link might point to a low-quality blog, or the AI might have misread a 2030 forecast as a 2026 actual figure.",
            },
            {
              id: "b",
              text: "No—you should still click through on headline numbers to verify the publisher's credibility and confirm the number wasn't taken out of context.",
              isCorrect: true,
              analogyFeedback: "Correct! **Click the primary source** on the 3 numbers your decision depends on.",
            },
            {
              id: "c",
              text: "Citations are only decorative emojis.",
              isCorrect: false,
              analogyFeedback: "Citations are real links to web pages, and they make verification 10x faster—if you click them!",
            },
            {
              id: "d",
              text: "Only odd-numbered citations (`[1]`, `[3]`) are accurate.",
              isCorrect: false,
              analogyFeedback: "Citation numbering is just the order in which sources appear.",
            },
          ],
        },
        {
          id: "q4-4-3",
          scenario:
            "What does it mean to ask AI to **'steelman'** the opposing view in a strategy document?",
          options: [
            {
              id: "a",
              text: "Translate the document into heavy-metal lyrics.",
              isCorrect: false,
              analogyFeedback: "Fun idea, but not what steelmanning means!",
            },
            {
              id: "b",
              text: "Make the opposing argument look weak and silly (a strawman).",
              isCorrect: false,
              analogyFeedback: "That's a *strawman*. Steelmanning is the exact opposite.",
            },
            {
              id: "c",
              text: "Construct the strongest, most evidence-backed version of the counter-argument so you can spot blind spots in your own plan before your boss or client does.",
              isCorrect: true,
              analogyFeedback: "Exactly. **Steelmanning** prepares you for the toughest questions in the boardroom.",
            },
            {
              id: "d",
              text: "Restricted only to steel-manufacturing companies.",
              isCorrect: false,
              analogyFeedback: "Works in every industry!",
            },
          ],
        },
      ],
    },

    // LESSON 5
    {
      id: "spreadsheet-and-data-analysis-copilot",
      title: "Your Spreadsheet & Data Analysis Copilot",
      subtitle: "How to write complex Excel/Sheets formulas, clean messy CSVs, and run Python data analysis without coding",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Never ask an LLM to do mental arithmetic on 5,000 rows. ==Instead, ask it to write the exact Excel formula, SQL query, or Python script that crunches the 5,000 rows deterministically.==",
        explanation:
          "Remember Lesson 1 of Track 1? Language models predict words probabilistically; spreadsheets and Python calculate numbers deterministically. That distinction unlocks a massive productivity superpower. Whenever you're staring at a messy spreadsheet—inconsistent date formats (`12/04/26` vs `12-Apr-2026`), broken `XLOOKUP` formulas, or a 20,000-row sales CSV—you don't need to Google syntax for 45 minutes. Describe your column letters and goal in plain English, and let AI generate the **exact Google Sheets/Excel formula** or run **Code Interpreter / Data Analysis (Python sandbox)** to produce verified charts and cleaned files in seconds.",
      },
      analogy: {
        title: "The Architect Who Draws the Blueprint vs. Counting Bricks by Hand",
        metaphor:
          "Asking a chatbot 'What is the average of these 800 pasted numbers?' is like asking a poet to **count a truckload of bricks by squinting at them**. They'll guess 'around 4,200'. Asking the chatbot to **write a `=SUMIFS()` formula or run a Python script in its built-in sandbox** is like having the poet hand your data to a **digital weighing scale**. ==The AI writes the code in 2 seconds; the calculator executes the math with 100.00% precision.==",
        visualComparison: [
          {
            everydayItem: "Squinting at a pile of numbers and guessing the total",
            aiEquivalent: "**Raw chat arithmetic**: pasting 500 numbers and asking the LLM to add them in text",
          },
          {
            everydayItem: "Writing the exact weighing machine instruction",
            aiEquivalent: "**Formula Generation**: AI writes your `XLOOKUP`, `INDEX/MATCH`, `QUERY`, or `REGEXEXTRACT`",
          },
          {
            everydayItem: "An automated lab that cleans, weighs, and charts the data",
            aiEquivalent: "**Code Execution / Data Analysis Sandbox**: AI writes and runs real Python (pandas) on your CSV",
          },
        ],
      },
      activities: [
        {
          type: "beforeAfter",
          title: "How to Ask for an Unbreakable Spreadsheet Formula",
          before: {
            label: "Vague formula request",
            text: "Give me an Excel formula to look up GST numbers and sum the sales.",
          },
          after: {
            label: "Column-exact formula brief",
            text: "In Google Sheets, I have two tabs:\n- Tab `Orders`: Column A is `Order_ID`, Column B is `Vendor_GSTIN` (text), Column D is `Order_Date`, Column F is `Invoice_Amount_INR`.\n- Tab `Summary`: Cell A2 has a specific `Vendor_GSTIN`.\n\nWrite a single formula for cell B2 in `Summary` that sums `Invoice_Amount_INR` from `Orders` for that vendor, ONLY for orders in October 2026, and returns 0 if there are no matches. Explain how each part works.",
          },
          whyItWorks: [
            "Giving **exact tab names (`Orders`, `Summary`) and column letters (`B`, `D`, `F`)** means you can copy-paste the formula directly without editing.",
            "Specifying edge cases (**'returns 0 if no matches'**) prevents ugly `#N/A` or `#VALUE!` errors across your sheet.",
            "Asking for a brief explanation helps you audit the logic in 10 seconds.",
          ],
        },
        {
          type: "tryIt",
          title: "Clean a Messy Indian Address & Phone List in Seconds",
          intro: "Copy this prompt into your AI assistant to see how it untangles messy real-world operations data.",
          prompt: "Here are 5 messy rows from a vendor registration form. Standardize them into a clean Markdown table with columns: Vendor_Name, City, State, Clean_10_Digit_Mobile, and Valid_PIN_Code (flag if invalid).\n\n1. shree ganesh traders , pune mh - ph: +91 98220-11223 pin 411001\n2. Kaveri Silks (Bengaluru) Mob: 09845099887, Karnataka, 560002\n3. Gupta Electronics, Gurugram HR, call 981112233, pin: 122001\n4. Meenakshi Agro, Madurai TN - 625001 / 91-9443055667\n5. Royal Packaging, Ahmedabad GJ, 380015, Ph: 98250 44556",
          whatToNotice: [
            "Notice row 3 (`981112233`): it only has **9 digits**! A good prompt makes the AI flag invalid data instead of silently mangling it.",
            "It strips `+91`, leading `0`s, spaces, and hyphens into a uniform 10-digit format ready for WhatsApp/SMS automation.",
            "If you have 5,000 rows like this, ask the AI: **'Now give me the Google Sheets `REGEXREPLACE` formula to clean the phone column automatically.'**",
          ],
        },
      ],
      techConversation: {
        context: "A finance analyst in Chennai reconciles 15,000 monthly UPI and card settlement rows",
        speakerA: {
          role: "Senior Accountant",
          quote:
            "Every month I spend 4 hours fixing date formats and matching UTR numbers between our bank statement and Razorpay export.",
        },
        speakerB: {
          role: "FP&A Analyst",
          quote:
            "Upload a **5-row dummy sample** (with fake names and numbers) to Claude or ChatGPT and ask it to write a reusable **Excel Power Query / Apps Script macro**. You'll run it locally on all 15,000 rows in **3 seconds** without uploading sensitive bank data.",
        },
        plainEnglishTranslation:
          "Smart trick for confidential financial sheets: **paste only 5 fake sample rows** into the AI so it knows your column structure, ask it to write the **Excel macro or formula**, and run that formula locally on your real file!",
      },
      realWorldApplication: {
        forWork:
          "Use the **5-Row Dummy Sample Trick**: whenever you have sensitive payroll or financial data, replace the real numbers with 5 fake rows, show the AI the headers and format, and ask it to write the **formula, SQL query, or macro** for you to run on your own computer.",
        forLearning:
          "When you inherit a scary 5-line nested `IF(INDEX(MATCH(...)))` formula from a former colleague, paste the formula into AI and ask: **'Translate this formula into plain English bullet points and tell me what could break it.'**",
      },
      jargonCard: {
        term: "Code Interpreter (Python Sandbox)",
        oneLineAnalogy:
          "**A secure mini-computer inside the AI** where it writes and runs real Python code on your uploaded spreadsheet—so math and charts are 100% calculated, never guessed.",
        meetingDropLine:
          "\"Don't ask the LLM to sum the table in text—make sure it triggers the Python data analysis sandbox or gives us the SQL query.\"",
      },
      quiz: [
        {
          id: "q4-5-1",
          scenario:
            "You have a CSV file with **12,000 rows of regional sales data** and want to find the exact total revenue and top 3 pin codes by growth rate. What is the safest, most accurate way to use AI?",
          options: [
            {
              id: "a",
              text: "Copy-paste all 12,000 rows into a plain text chat prompt and ask the LLM to add them up in its head.",
              isCorrect: false,
              analogyFeedback: "Never ask a language model to do mental arithmetic on 12,000 rows—it will guess!",
            },
            {
              id: "b",
              text: "Have the AI write a spreadsheet formula / SQL query, or use its built-in Python Code Interpreter sandbox so real code calculates the exact totals.",
              isCorrect: true,
              analogyFeedback: "Spot on. **Let the AI write the code or formula**, and let deterministic math crunch the numbers.",
            },
            {
              id: "c",
              text: "Ask the AI to guess the numbers based on last year's news.",
              isCorrect: false,
              analogyFeedback: "Guessing has no place in financial reporting!",
            },
            {
              id: "d",
              text: "Print all 12,000 rows and use an abacus.",
              isCorrect: false,
              analogyFeedback: "Formulas or Python will finish in 2 seconds!",
            },
          ],
        },
        {
          id: "q4-5-2",
          scenario:
            "Your spreadsheet contains **confidential employee salary data**, and you are not allowed to upload it to any external tool. However, you desperately need a complex Excel formula to calculate pro-rata bonus payouts across columns `A` through `H`. What should you do?",
          options: [
            {
              id: "a",
              text: "Upload the real salary sheet anyway and delete the chat afterwards.",
              isCorrect: false,
              analogyFeedback: "Deleting a chat does not undo a compliance violation!",
            },
            {
              id: "b",
              text: "Give up and calculate 400 rows on a pocket calculator.",
              isCorrect: false,
              analogyFeedback: "There's a much smarter privacy-safe trick.",
            },
            {
              id: "c",
              text: "Use the 5-Row Dummy Sample Trick: describe your exact column headers (`A` to `H`) with 3–5 rows of fake sample data, get the Excel formula from the AI, and paste the formula into your local sheet.",
              isCorrect: true,
              analogyFeedback: "Brilliant! The AI only needs to know **column structure and data types**, never your real confidential numbers.",
            },
            {
              id: "d",
              text: "Send the file over public WhatsApp.",
              isCorrect: false,
              analogyFeedback: "Definitely not safe for confidential payroll files!",
            },
          ],
        },
        {
          id: "q4-5-3",
          scenario:
            "Why does giving **exact tab names and column letters** (e.g., `Tab 'Orders', Column F is 'Invoice_Amount'`) produce vastly better spreadsheet formulas?",
          options: [
            {
              id: "a",
              text: "Because the AI writes a formula you can paste straight into your sheet without manually fixing placeholder column names.",
              isCorrect: true,
              analogyFeedback: "Exactly. Zero translation friction between the chat window and your spreadsheet.",
            },
            {
              id: "b",
              text: "Because Excel only works on columns A through F.",
              isCorrect: false,
              analogyFeedback: "Excel goes all the way to column XFD!",
            },
            {
              id: "c",
              text: "Because capital letters make the internet faster.",
              isCorrect: false,
              analogyFeedback: "Column letters are about cell references, not network speed.",
            },
            {
              id: "d",
              text: "It doesn't matter at all.",
              isCorrect: false,
              analogyFeedback: "Without column letters, the AI invents fake ranges like `A1:Z100` that break when you paste them.",
            },
          ],
        },
      ],
    },

    // LESSON 6
    {
      id: "meeting-notes-to-action-items",
      title: "From Chaotic Meeting Transcripts to Crisp Execution",
      subtitle: "Turn a rambling 45-minute call into decisions, owners, deadlines, and follow-up emails in 60 seconds",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Default AI meeting summaries are mushy wall-of-text recaps nobody reads. ==Great meeting prompts extract four hard artefacts: Decisions Made, Action Items (Owner + Date), Open Risks, and the Draft Follow-up Message.==",
        explanation:
          "Most teams turn on an automatic meeting recorder (in Google Meet, Teams, or Zoom) and get a 2-page chronological summary: *'First Rakesh talked about Q3, then Priya discussed marketing...'* Nobody ever reads those! Why? Because a chronological recap buries the **commitments**. When you feed a raw meeting transcript or rough voice notes into AI with an **Execution Extraction Prompt**, it ignores the 35 minutes of small talk and pulls out a tight table of **Who promised What by When**—plus flags any task where people agreed something should happen ('We should really fix the login page') without naming an owner.",
      },
      analogy: {
        title: "The Court Stenographer vs. The Chief of Staff",
        metaphor:
          "A **stenographer** writes down every cough, joke, and tangent in the order it happened. A **Chief of Staff** sits quietly through a chaotic 45-minute argument and stands up at the end with four crisp lines on the whiteboard: **1. What we decided, 2. Who owns what by Friday, 3. What we still disagree on, and 4. Who failed to volunteer for the orphan task**. ==Stop asking AI to be a stenographer; prompt it to be your Chief of Staff.==",
        visualComparison: [
          {
            everydayItem: "\"First Rakesh spoke, then Priya spoke...\" (Stenographer recap)",
            aiEquivalent: "**Generic 'Summarize this meeting' prompt**: chronological mush that hides action items",
          },
          {
            everydayItem: "Task | Owner | Deadline | Exact Quote from Call",
            aiEquivalent: "**Chief-of-Staff Extraction Prompt**: structured accountability table",
          },
          {
            everydayItem: "\"Wait—nobody actually agreed to call the vendor!\"",
            aiEquivalent: "**Orphan Task Detector**: asking AI to flag commitments mentioned with no clear owner or date",
          },
        ],
      },
      activities: [
        {
          type: "beforeAfter",
          title: "Stenographer Summary vs. Chief-of-Staff Extraction",
          before: {
            label: "Weak prompt: 'Summarize this meeting transcript'",
            text: "The team discussed the Diwali campaign launch. Ananya mentioned that the banner designs are almost ready but the Hindi copy needs review. Vikram talked about the ₹8 lakh ad budget and suggested shifting 20% to Instagram Reels. Everyone agreed the landing page load speed needs to be fixed before Tuesday.",
          },
          after: {
            label: "Chief-of-Staff Extraction Output",
            text: "**1. Decisions Locked:**\n- Shift 20% (₹1.6L) of the ₹8L Diwali ad budget to Instagram Reels (Approved by Vikram).\n\n**2. Action Items:**\n| Task | Owner | Deadline | Status |\n|---|---|---|---|\n| Finalize banner designs | Ananya | Thursday 5 PM | In progress |\n| Allocate ₹1.6L to Reels in Ad Manager | Vikram | Friday EOD | Pending |\n\n**3. Orphan Tasks (Needs an Owner!):**\n- **Hindi copy review**: Mentioned by Ananya, but no reviewer or deadline was assigned.\n- **Fix landing page load speed before Tuesday**: Agreed by group, but **no engineer was named as owner**.",
          },
          whyItWorks: [
            "Separating **Decisions Locked** from **Action Items** stops people re-litigating settled debates next week.",
            "The **Orphan Tasks** section catches the #1 cause of dropped balls at work: tasks everyone nodded at, but nobody owned.",
            "You can copy-paste this straight into Slack, Teams, or WhatsApp within 2 minutes of hanging up.",
          ],
        },
        {
          type: "tryIt",
          title: "Save This Master Meeting Prompt",
          intro: "Copy this template into your notes app and use it after your very next call or voice-note braindump.",
          prompt: "Act as a sharp Chief of Staff. Below is a raw meeting transcript / rough notes. Ignore small talk and chronological play-by-play. Output ONLY:\n\n1. DECISIONS LOCKED (bullet points of final choices agreed on).\n2. ACTION TABLE with columns: Action Item | Owner | Deadline | Context. If a deadline wasn't stated, write 'Needs Date'.\n3. ORPHAN COMMITMENTS: Any task someone said 'we should do' where no specific person took ownership.\n4. OPEN QUESTIONS / BLOCKERS that need a follow-up decision.\n5. A 60-word Slack/WhatsApp message I can paste into the team group right now.",
          whatToNotice: [
            "Try feeding it a **2-minute messy voice note** you record right after an in-person meeting.",
            "Notice how **Orphan Commitments** immediately gives you the exact follow-up question to ask in the team chat: *'Hey team, who is taking ownership of the landing page speed fix for Tuesday?'*",
          ],
        },
      ],
      techConversation: {
        context: "A customer success manager in Bengaluru handles 6 client onboarding calls a day",
        speakerA: {
          role: "VP of Customer Success",
          quote:
            "How are you sending such detailed client follow-up emails and updating Jira tickets within 3 minutes of every call ending?",
        },
        speakerB: {
          role: "Customer Success Manager",
          quote:
            "Our approved meeting tool exports the transcript. I run it through my saved **Chief-of-Staff prompt** which outputs two blocks: the **client-facing email** and the **internal Jira ticket JSON**.",
        },
        plainEnglishTranslation:
          "One transcript + one structured prompt can generate **multiple tailored outputs at once**: a warm summary for the client and a technical checklist for your internal engineering team.",
      },
      realWorldApplication: {
        forWork:
          "Even if a meeting isn't recorded, spend **60 seconds right after the call speaking a voice note** into your phone ('We decided X, Priya is doing Y by Thursday, still need to check Z with legal') and run the Chief-of-Staff prompt on it.",
        forLearning:
          "After watching a webinar or panel discussion, run the transcript through a prompt that extracts: **'3 actionable frameworks, 2 contrarian claims, and 1 thing I can test this week.'**",
      },
      jargonCard: {
        term: "Orphan Action Item Extraction",
        oneLineAnalogy:
          "**Using AI to spot the ball dropped between two fielders**: catching every time a meeting transcript says *'Someone should really check that'* without naming who or when.",
        meetingDropLine:
          "\"I ran the transcript through my action extractor—we have two orphan tasks from the call that still need an owner before we wrap.\"",
      },
      quiz: [
        {
          id: "q4-6-1",
          scenario:
            "Why do most people ignore default AI meeting summaries that simply say *'Summarize this transcript'*?",
          options: [
            {
              id: "a",
              text: "Because default summaries write a long chronological play-by-play ('First X spoke, then Y spoke') that buries actual decisions, owners, and deadlines.",
              isCorrect: true,
              analogyFeedback: "Spot on. You want a **Chief of Staff**, not a rambling court stenographer.",
            },
            {
              id: "b",
              text: "Because AI cannot read English transcripts.",
              isCorrect: false,
              analogyFeedback: "AI reads transcripts easily—the problem is the default chronological format.",
            },
            {
              id: "c",
              text: "Because meeting summaries are always 100 pages long.",
              isCorrect: false,
              analogyFeedback: "Even a 1-page mushy paragraph gets ignored if action items aren't separated.",
            },
            {
              id: "d",
              text: "Because tables are illegal in emails.",
              isCorrect: false,
              analogyFeedback: "Tables are the clearest way to show Task, Owner, and Deadline!",
            },
          ],
        },
        {
          id: "q4-6-2",
          scenario:
            "What is an **'orphan commitment'** in a meeting transcript, and why should you ask AI to flag it?",
          options: [
            {
              id: "a",
              text: "A meeting that started 5 minutes late.",
              isCorrect: false,
              analogyFeedback: "Not about punctuality!",
            },
            {
              id: "b",
              text: "A task everyone agreed should happen ('We definitely need to update the pricing page before launch'), but where no specific person or deadline was assigned.",
              isCorrect: true,
              analogyFeedback: "Correct! If **everyone** owns a task, **nobody** owns it. Flagging orphan tasks immediately after the call saves projects.",
            },
            {
              id: "c",
              text: "A calendar invite with no Zoom link.",
              isCorrect: false,
              analogyFeedback: "Annoying, but not an orphan commitment!",
            },
            {
              id: "d",
              text: "A task assigned to the CEO.",
              isCorrect: false,
              analogyFeedback: "If the CEO is named with a date, it has an owner!",
            },
          ],
        },
        {
          id: "q4-6-3",
          scenario:
            "An automatic voice transcription of your call misheard your colleague saying *'We'll cap the discount at **15%**'* and typed *'We'll cap the discount at **50%**'*. What habit protects you before you send the AI-generated action table to the client?",
          options: [
            {
              id: "a",
              text: "Blindly auto-forwarding the AI email without reading it.",
              isCorrect: false,
              analogyFeedback: "Auto-forwarding unverified numbers can bind you to a 50% discount by mistake!",
            },
            {
              id: "b",
              text: "Deleting all numbers from every email.",
              isCorrect: false,
              analogyFeedback: "You need the numbers—just the right ones!",
            },
            {
              id: "c",
              text: "Scanning the extracted Decisions and Numbers for 30 seconds before hitting send (Speech-to-Text often confuses '15' and '50', or names and acronyms).",
              isCorrect: true,
              analogyFeedback: "Exactly. **15 vs 50** is the classic speech-to-text trap. A 30-second human scan catches it every time.",
            },
            {
              id: "d",
              text: "Never holding meetings again.",
              isCorrect: false,
              analogyFeedback: "Tempting, but a 30-second review is much easier!",
            },
          ],
        },
      ],
    },

    // LESSON 7
    {
      id: "writing-and-editing-without-ai-slop",
      title: "Writing That Sounds Like You—Zero 'AI Slop'",
      subtitle: "How to banish robotic buzzwords, clone your personal writing voice, and use AI as a ruthless editor",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Readers can spot default AI writing in 3 seconds flat. ==To write with punch and authenticity, give the AI 3 samples of your own writing, a banned-buzzwords list, and your messy human bullet points first.==",
        explanation:
          "Why does raw AI writing make your eyes glaze over? Because without direction, LLMs regress to the average of corporate internet prose: *'In today's fast-paced digital landscape, let's delve into how we can leverage seamless synergies...'* That's called **AI Slop**. High-output writers flip the workflow completely: **1. Never ask AI to invent your thoughts from a blank page**—feed it your raw, opinionated 5-bullet braindump or voice note; **2. Paste 2–3 examples of emails or posts you actually wrote** (few-shot style priming); and **3. Use AI as a ruthless developmental editor** that cuts fluff, tightens verbs, and keeps *your* voice intact.",
      },
      analogy: {
        title: "Ghostwriter With a Brochure vs. Editor With Your Voice Note",
        metaphor:
          "Hire a stranger who has never met you and say 'Write a speech for my best friend's wedding'. They'll read out a **Hallmark greeting card** that embarrasses everyone in the room. Now record a **2-minute voice note** telling two real stories about your friend, hand the writer **three WhatsApp messages you've written** so they hear your rhythm, and say: **'Tighten my stories into 250 words and never use cheesy clichés.'** ==The ideas and stories come from you; the polish comes from the tool.==",
        visualComparison: [
          {
            everydayItem: "Hallmark card written by a stranger (generic clichés)",
            aiEquivalent: "**Zero-context writing prompt**: 'Write a post about leadership' -> instant AI Slop",
          },
          {
            everydayItem: "Handing over 3 real messages you wrote in the past",
            aiEquivalent: "**Voice Priming (Few-Shot Style Examples)**: teaching sentence length, warmth, and rhythm",
          },
          {
            everydayItem: "Red pen crossing out 'delve', 'leverage', 'testament', 'tapestry'",
            aiEquivalent: "**Anti-Slop Guardrail**: explicit negative constraints banning robotic corporate filler",
          },
        ],
      },
      activities: [
        {
          type: "spotTheError",
          title: "Spot the 'AI Slop' Tell-Tale Clichés",
          instructions: "One of the sentences below screams 'I copy-pasted this straight from an unprompted chatbot'. Click the sentence full of **AI Slop**.",
          question: "Which sentence would immediately make a hiring manager or client suspect lazy AI copy-pasting?",
          sentences: [
            {
              text: "We cut our warehouse dispatch time in Bhiwandi from 18 hours to 6 hours last quarter by redesigning the packing stations.",
              isError: false,
              why: "Specific place (Bhiwandi), concrete numbers (18 hours to 6 hours), and active verbs. Sounds 100% human and credible.",
            },
            {
              text: "In today's fast-paced logistical tapestry, this game-changing milestone serves as a testament to our unwavering commitment to elevating seamless operational excellence.",
              isError: true,
              why: "Bingo! *'Fast-paced tapestry'*, *'game-changing'*, *'testament'*, *'unwavering commitment'*, *'elevating seamless excellence'*—five classic AI-slop buzzwords in one sentence and zero real facts!",
            },
            {
              text: "Two things broke during the first week: our barcode scanners disconnected on the night shift, and the tape dispensers jammed.",
              isError: false,
              why: "Real humans admit specific things that went wrong. Unprompted AI rarely invents concrete operational hiccups like jammed tape dispensers.",
            },
          ],
        },
        {
          type: "beforeAfter",
          title: "The Anti-Slop Voice Cloning Prompt",
          before: {
            label: "Lazy prompt",
            text: "Write a cold email to a VP of Engineering pitching our cloud cost optimization tool.",
          },
          after: {
            label: "Braindump + Voice Sample + Anti-Slop Prompt",
            text: "Turn my rough notes below into a 75-word cold email to a VP of Engineering at a Series B startup in Bengaluru.\n\nMY ROUGH NOTES:\n- Most teams overpay 30% on AWS Mumbai data transfer fees between availability zones.\n- Our read-only script spots the exact misconfigured NAT gateway in 10 mins.\n- Helped AcmePay save ₹4.2L/month last month.\n\nSTYLE RULES:\n- Match the direct, conversational tone of my sample email below: [Paste 1 real email you wrote].\n- Short sentences. No exclamation marks.\n- BANNED WORDS: delve, unlock, elevate, seamless, game-changer, synergy, landscape, testament, I hope this email finds you well.",
          },
          whyItWorks: [
            "**Specific facts (`₹4.2L/month`, `NAT gateway`)** come from your rough notes, giving the email real teeth.",
            "Banning the **#1 robotic opener (*'I hope this email finds you well'*)** forces the AI to open with value.",
            "A **75-word ceiling** respects a busy executive's screen on a smartphone.",
          ],
        },
      ],
      techConversation: {
        context: "A hiring manager and a recruiter review 80 cover letters for a Product Manager role",
        speakerA: {
          role: "Hiring Manager",
          quote:
            "Out of 80 applications, 55 start with *'I am thrilled to apply for... With a proven track record of leveraging cross-functional synergies...'* I'm skipping all of them.",
        },
        speakerB: {
          role: "Talent Lead",
          quote:
            "Look at candidate #14 though. She used AI to structure her note, but every bullet has a **real metric, a specific product trade-off she made, and plain conversational English**.",
        },
        plainEnglishTranslation:
          "Using AI to polish your writing is smart; letting AI replace your **specific stories, numbers, and voice** makes you invisible in a sea of identical applications.",
      },
      realWorldApplication: {
        forWork:
          "Create a small note on your laptop called **`My Voice Card`**. Paste 3 emails or memos you're proud of, plus the **Banned Words List** (`delve, elevate, unlock, seamless, robust, tapestry, testament, game-changer`). Paste that block at the bottom of important writing prompts.",
        forLearning:
          "Try the **Reverse Editor Prompt** on something you wrote yourself: *'Do not rewrite my draft. Instead, highlight the 3 weakest sentences where I used passive voice or vague filler, and tell me why.'*",
      },
      jargonCard: {
        term: "AI Slop & Style Priming",
        oneLineAnalogy:
          "**AI Slop** is bloated, generic chatbot prose full of buzzwords; **Style Priming** is showing the AI 3 samples of your real writing + a banned-words list so it sounds like you.",
        meetingDropLine:
          "\"Let's strip out the AI slop—give the model our actual customer anecdotes and a banned-buzzwords list.\"",
      },
      quiz: [
        {
          id: "q4-7-1",
          scenario:
            "Why do unprompted AI drafts so often include phrases like *'In today's fast-paced digital landscape'*, *'delve into'*, and *'serves as a testament'*?",
          options: [
            {
              id: "a",
              text: "Because without your specific voice examples and constraints, the model predicts the statistically average corporate filler phrases from its training data.",
              isCorrect: true,
              analogyFeedback: "Spot on. Default prompts give you **statistical average prose**—which sounds like a corporate brochure.",
            },
            {
              id: "b",
              text: "Because a law requires AI to use the word 'delve' in every paragraph.",
              isCorrect: false,
              analogyFeedback: "Thankfully, no such law exists!",
            },
            {
              id: "c",
              text: "Because those words use fewer tokens.",
              isCorrect: false,
              analogyFeedback: "Bloated filler actually wastes *more* tokens!",
            },
            {
              id: "d",
              text: "Because the keyboard is stuck.",
              isCorrect: false,
              analogyFeedback: "It's probability distribution, not a sticky keyboard.",
            },
          ],
        },
        {
          id: "q4-7-2",
          scenario:
            "What is the most effective way to make an AI-assisted LinkedIn post or client email sound unmistakably human and credible?",
          options: [
            {
              id: "a",
              text: "Ask the AI: 'Write a viral post about hard work' with zero context.",
              isCorrect: false,
              analogyFeedback: "That is the fastest recipe for generic AI slop.",
            },
            {
              id: "b",
              text: "Add 15 rocket emojis 🚀 to every paragraph.",
              isCorrect: false,
              analogyFeedback: "Excessive emojis are another classic AI-slop giveaway!",
            },
            {
              id: "c",
              text: "Start with your own rough bullet points containing a real story or specific number, include 2–3 samples of your past writing, and ban robotic buzzwords.",
              isCorrect: true,
              analogyFeedback: "Correct! **Your real stories + your voice samples + an anti-slop ban list** = crisp, authentic writing.",
            },
            {
              id: "d",
              text: "Tell the AI to use as many 5-syllable words as possible.",
              isCorrect: false,
              analogyFeedback: "Good writing uses plain, direct words—not dictionary gymnastics.",
            },
          ],
        },
        {
          id: "q4-7-3",
          scenario:
            "You want to improve your own writing skills rather than having AI overwrite your voice. Which prompt accomplishes that?",
          options: [
            {
              id: "a",
              text: "\"Rewrite this whole essay from scratch.\"",
              isCorrect: false,
              analogyFeedback: "If it rewrites everything, your voice disappears and you don't learn.",
            },
            {
              id: "b",
              text: "\"Make this 5 times longer.\"",
              isCorrect: false,
              analogyFeedback: "Padding length adds fluff, not clarity.",
            },
            {
              id: "c",
              text: "\"Translate this into Latin.\"",
              isCorrect: false,
              analogyFeedback: "Unlikely to help your Monday morning memo!",
            },
            {
              id: "d",
              text: "\"Act as a ruthless editor. Do not rewrite my draft—instead, point out the 3 sentences where my argument is vague or wordy, and ask me how I want to sharpen them.\"",
              isCorrect: true,
              analogyFeedback: "Exactly! Using AI as a **developmental editor** keeps 100% of your voice while sharpening your craft.",
            },
          ],
        },
      ],
    },

    // LESSON 8
    {
      id: "presentation-and-storytelling-workflows",
      title: "Board Decks & Persuasive Storytelling",
      subtitle: "How to structure Pyramid-Principle narratives, action slide titles, and stress-test your pitch before the meeting",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Great presentations aren't built by picking slide templates first—they're built by locking the **narrative spine** first. ==Use AI to structure your Pyramid Principle story and role-play your toughest critic.==",
        explanation:
          "When people ask 'Which AI makes slides?', they often generate 15 pretty slides full of vague bullet points that fail in the first 2 minutes of a leadership review. Top consultants and product leaders use a two-step workflow: **1. The Narrative Spine (Minto Pyramid Principle)**—using AI to turn messy data into **Answer First -> 3 Supporting Pillars -> Evidence**, where every slide title is a **complete takeaway sentence** (*'Tier-2 cities drove 64% of Q3 growth'* instead of a dead label like *'Regional Overview'*); and **2. The Red-Team Rehearsal**—asking AI to role-play a skeptical CFO or client poking holes in your deck before you walk into the room.",
      },
      analogy: {
        title: "The Movie Storyboard vs. Painting the Set First",
        metaphor:
          "A film director like Rajamouli doesn't start by painting 50 background sets and hoping a story emerges. First comes the **tight 8-scene storyboard** where every scene has a clear purpose. And before release, the director shows the rough cut to a **brutally honest test audience** to spot plot holes. ==Use AI to nail the 8-slide storyboard and play the tough CFO in your rehearsal.==",
        visualComparison: [
          {
            everydayItem: "Dead slide title: 'Q3 Marketing Metrics'",
            aiEquivalent: "**Action Slide Title**: 'WhatsApp referrals cut customer acquisition cost by 38% in Q3'",
          },
          {
            everydayItem: "Burying the conclusion on Slide 18",
            aiEquivalent: "**Pyramid Principle (BLUF: Bottom Line Up Front)**: Slide 1 states the exact recommendation and ROI",
          },
          {
            everydayItem: "Friendly rehearsal where everyone claps",
            aiEquivalent: "**Red-Team Roleplay**: asking AI to act as a skeptical CFO challenging your assumptions",
          },
        ],
      },
      activities: [
        {
          type: "beforeAfter",
          title: "Topic Labels vs. Action Slide Titles",
          before: {
            label: "Weak slide outline (Topic Labels)",
            text: "Slide 1: Introduction\nSlide 2: Customer Support Data\nSlide 3: AI Chatbot Proposal\nSlide 4: Budget & Timeline\nSlide 5: Conclusion",
          },
          after: {
            label: "Executive slide outline (Action Titles — readable in 15 seconds)",
            text: "Slide 1 [Recommendation]: Automating Tier-1 order tracking will save ₹18L/year and cut wait times from 6 mins to 15 secs.\nSlide 2 [The Bottleneck]: 62% of our 14,000 monthly support tickets are simple 'Where is my order?' queries.\nSlide 3 [The Solution]: A WhatsApp + web bot connected to our dispatch API resolves tracking queries with 94% accuracy.\nSlide 4 [Economics & Rollout]: ₹3.5L setup cost pays back in 10 weeks; 4-week rollout starting with Hindi & English.\nSlide 5 [Decision Needed Today]: Approve ₹3.5L pilot budget and 1 backend engineer for 2 sprints.",
          },
          whyItWorks: [
            "Read ONLY the 5 slide titles in the 'After' version: **they tell the entire story** even if the CEO never reads a single bullet point.",
            "Every slide title answers **'So what?'** with a concrete number.",
            "Slide 5 ends with a **clear Decision Needed Today**, not a vague 'Thank You / Q&A'.",
          ],
        },
        {
          type: "tryIt",
          title: "Run a 'Skeptical CFO' Pre-Mortem on Your Next Pitch",
          intro: "Before your next presentation or proposal, paste your draft outline into this Red-Team prompt.",
          prompt: "I am pitching the following proposal to our company leadership: [PASTE YOUR PROPOSAL OR SLIDE OUTLINE].\n\nAct as a sharp, skeptical CFO and VP of Operations at an Indian company. Read my pitch and:\n1. Ask me the 4 hardest, most uncomfortable questions about my numbers, hidden costs, or execution risks.\n2. Point out any slide or claim that sounds like vague hand-waving.\n3. Suggest 1 backup ('Appendix') slide I should prepare right now so I'm ready when someone asks those questions.",
          whatToNotice: [
            "The AI immediately spots the **hidden assumptions** you took for granted (e.g., 'What happens if adoption is 20% instead of 80%?').",
            "Creating that **1 Appendix slide** beforehand makes you look extraordinarily prepared when the tough question comes up live.",
          ],
        },
      ],
      techConversation: {
        context: "A product manager prepares for a quarterly roadmap review with the founders",
        speakerA: {
          role: "Junior PM",
          quote:
            "I have 22 slides of user research notes and feature ideas, but I only get 10 minutes with the founders.",
        },
        speakerB: {
          role: "Director of Product",
          quote:
            "Paste your notes into Claude or Gemini and ask it to restructure them using the **Minto Pyramid Principle** into **6 slides with Action Titles**—and put the rest in the Appendix.",
        },
        plainEnglishTranslation:
          "Busy leaders want the **conclusion first (Slide 1)**, backed by **3–5 crisp evidence slides**, with detailed data tucked safely into the **Appendix** for Q&A.",
      },
      realWorldApplication: {
        forWork:
          "Never start in PowerPoint or Google Slides. Spend the first 10 minutes in AI locking your **6 Action Slide Titles** so that reading just the headlines from Slide 1 to Slide 6 tells a complete, persuasive story.",
        forLearning:
          "Use AI to practice **interview or sales objections**: ask it to role-play an interviewer or buyer pushing back on your pitch one turn at a time.",
      },
      jargonCard: {
        term: "Pyramid Principle & Red-Teaming",
        oneLineAnalogy:
          "**Pyramid Principle** means starting with the final answer on Slide 1; **Red-Teaming** means having AI attack your draft like a tough critic so you fix weak spots before the real meeting.",
        meetingDropLine:
          "\"I structured the deck using action titles and red-teamed the unit economics with a skeptical-CFO prompt.\"",
      },
      quiz: [
        {
          id: "q4-8-1",
          scenario:
            "What is the difference between a **Topic Label** slide title and an **Action Title** slide title?",
          options: [
            {
              id: "a",
              text: "Topic Labels ('Q2 Churn Data') just name the subject, whereas Action Titles ('Onboarding delays caused 70% of Q2 churn') state the actual takeaway so an executive gets the point in 3 seconds.",
              isCorrect: true,
              analogyFeedback: "Spot on. If someone reads **only your Action Titles**, they should understand your entire presentation.",
            },
            {
              id: "b",
              text: "Action Titles must be written in red comic-sans font.",
              isCorrect: false,
              analogyFeedback: "Please never use red comic sans in a board deck!",
            },
            {
              id: "c",
              text: "Action Titles are only for action movies.",
              isCorrect: false,
              analogyFeedback: "In consulting and business, 'action title' means a takeaway headline!",
            },
            {
              id: "d",
              text: "Topic Labels are always 50 words long.",
              isCorrect: false,
              analogyFeedback: "Topic labels are usually 2–3 vague words that say nothing about the conclusion.",
            },
          ],
        },
        {
          id: "q4-8-2",
          scenario:
            "What does the **Minto Pyramid Principle (or BLUF: Bottom Line Up Front)** recommend when structuring a business presentation?",
          options: [
            {
              id: "a",
              text: "Hide your main recommendation until Slide 30 as a surprise twist.",
              isCorrect: false,
              analogyFeedback: "A board presentation is not a murder mystery—executives hate waiting 25 minutes for the point!",
            },
            {
              id: "b",
              text: "Lead with your core conclusion and recommendation on Slide 1, then support it with 3–4 clear pillars of evidence.",
              isCorrect: true,
              analogyFeedback: "Correct! **Answer first**, then show the supporting pillars and data.",
            },
            {
              id: "c",
              text: "Draw a picture of an Egyptian pyramid on every slide.",
              isCorrect: false,
              analogyFeedback: "The pyramid is the logical structure of your argument, not clip art!",
            },
            {
              id: "d",
              text: "Put 800 words of tiny text on Slide 1.",
              isCorrect: false,
              analogyFeedback: "Keep slides uncluttered and lead with a crisp takeaway.",
            },
          ],
        },
        {
          id: "q4-8-3",
          scenario:
            "Why should you run a **'Red-Team / Skeptical CFO' prompt** on your presentation outline before the actual meeting?",
          options: [
            {
              id: "a",
              text: "So the AI can delete your slides.",
              isCorrect: false,
              analogyFeedback: "It critiques your logic; it doesn't delete your file!",
            },
            {
              id: "b",
              text: "To change the background colour to red.",
              isCorrect: false,
              analogyFeedback: "'Red team' comes from cybersecurity/military exercises where a friendly team plays the adversary.",
            },
            {
              id: "c",
              text: "Because CFOs love long poems.",
              isCorrect: false,
              analogyFeedback: "CFOs love unit economics and risk mitigation, not poetry!",
            },
            {
              id: "d",
              text: "To uncover weak assumptions, missing numbers, and tough objections in advance so you can fix them or prepare a backup Appendix slide.",
              isCorrect: true,
              analogyFeedback: "Exactly. Walking in with an **Appendix slide ready for the toughest question** wins instant trust.",
            },
          ],
        },
      ],
    },

    // LESSON 9
    {
      id: "personal-knowledge-base-with-notebooklm",
      title: "Building Your 'Second Brain' Over PDFs & Contracts",
      subtitle: "How to query 50 uploaded documents with strict citations and zero outside hallucinations",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "When working with your own contracts, policies, or textbooks, you don't want the AI's general internet opinions—==you want a closed-book workspace that answers strictly from your uploaded files with clickable page citations.==",
        explanation:
          "Suppose you are preparing for a client audit, onboarding onto a new codebase, or studying 25 PDFs of RBI master directions. If you ask a normal chatbot, it mixes your uploaded PDF with stuff it read on Reddit in 2023. Source-grounded workspaces—like **Google's NotebookLM**, **Claude Projects**, or **ChatGPT Projects** with strict grounding instructions—solve this by creating a **walled garden around your specific documents**. Every answer comes with numbered citation badges (`[1]`, `[2]`); hover or click a badge and it highlights the **exact paragraph in your original PDF**.",
      },
      analogy: {
        title: "The Open-Book Exam With Sticky Tabs",
        metaphor:
          "Imagine two law clerks helping a judge. The first clerk answers from memory of TV courtroom dramas—entertaining, but dangerous. The second clerk is locked in a room with **only the 18 case binders for this specific trial**, and is forbidden from stating a single fact unless they **place a numbered yellow sticky tab on the exact page and line** where they read it. ==Source-grounded notebooks are that second clerk.==",
        visualComparison: [
          {
            everydayItem: "Clerk answering from memory of TV dramas",
            aiEquivalent: "**Standard open chat**: blends your PDF with outside internet training data",
          },
          {
            everydayItem: "Locked room with only your 18 project binders",
            aiEquivalent: "**NotebookLM / Grounded Project**: scoped strictly to your uploaded PDFs, Docs, and links",
          },
          {
            everydayItem: "Numbered sticky tab pointing to Page 14, Paragraph 3",
            aiEquivalent: "**Inline Citation Badge**: click `[3]` to jump straight to the source passage",
          },
        ],
      },
      activities: [
        {
          type: "sort",
          title: "General Web Search AI vs. Source-Grounded Notebook",
          instructions: "Which workspace fits each task best?",
          buckets: ["Live Web Search AI (Perplexity / Search Mode)", "Source-Grounded Notebook (NotebookLM / Project)"],
          items: [
            {
              text: "Checking today's live Nifty 50 movements and breaking news on an IPO",
              bucket: 0,
              why: "Requires **live web search** across today's financial news.",
            },
            {
              text: "Cross-checking 8 vendor Master Service Agreements (MSAs) from your legal folder to see which ones have a 30-day termination clause",
              bucket: 1,
              why: "Requires **strictly closed-book reading** over your 8 private PDFs with exact clause citations.",
            },
            {
              text: "Turning 6 chapters of your university textbook and lecture slides into a custom practice quiz and audio study guide",
              bucket: 1,
              why: "You want to be tested **only on your syllabus**, not random internet trivia.",
            },
            {
              text: "Finding 5 top-rated coworking spaces in Indiranagar with current desk pricing",
              bucket: 0,
              why: "Requires **live public web listings** and current pricing.",
            },
          ],
        },
        {
          type: "tryIt",
          title: "The Cross-Document Contradiction Finder",
          intro: "Next time you upload 3 or more documents (e.g., a client RFP, your product spec, and your pricing sheet) into a grounded workspace, run this prompt.",
          prompt: "Read strictly across the uploaded documents. Do not use any outside knowledge.\n\n1. Build a table comparing every deadline, deliverable, and penalty clause mentioned across these files.\n2. Highlight any place where Document A contradicts Document B, or where a requirement in the RFP is not covered in our proposal.\n3. Cite the exact document name and section/page number for every row.",
          whatToNotice: [
            "Humans are great at reading one document top-to-bottom, but terrible at holding **Document 1 Page 4** in mind while reading **Document 5 Page 29**.",
            "A grounded workspace spots cross-document mismatches in 20 seconds.",
          ],
        },
      ],
      techConversation: {
        context: "A new Product Manager joins a 400-person SaaS company in Chennai",
        speakerA: {
          role: "New PM (Day 3 on the job)",
          quote:
            "There are 40 past PRDs, 12 architecture docs, and 6 quarterly strategy decks in Google Drive. It'll take me a month to read all of this!",
        },
        speakerB: {
          role: "Senior PM",
          quote:
            "Drop the top 25 docs into a **shared NotebookLM workspace** (or a **Claude Project**). Generate an **Audio Overview** for your commute tonight, and tomorrow morning ask it to map out every past experiment we ran on checkout conversion—with links to the original PRDs.",
        },
        plainEnglishTranslation:
          "Instead of drowning in 40 onboarding documents, turn them into an **interactive, cited knowledge base** you can interview on day one.",
      },
      realWorldApplication: {
        forWork:
          "Create a dedicated **Grounded Project / Notebook** for your biggest active project or client. Drop in the contract, meeting transcripts, and spec docs. Whenever someone asks *'Wait, what did we agree on phase-2 billing?'*, you'll have the cited answer in 10 seconds.",
        forLearning:
          "Use **Audio Overview** inside NotebookLM on dry technical reports or regulatory circulars—hearing two hosts debate the trade-offs out loud makes dense material effortless to absorb before you read the text.",
      },
      jargonCard: {
        term: "Source-Grounded Workspace",
        oneLineAnalogy:
          "**An open-book assistant locked inside your project folder**—it only answers from the files you uploaded and pins a page citation to every sentence.",
        meetingDropLine:
          "\"I loaded all 14 tender PDFs into a source-grounded notebook so we can audit every compliance clause with exact page citations.\"",
      },
      quiz: [
        {
          id: "q4-9-1",
          scenario:
            "How does a **source-grounded workspace** (like NotebookLM) behave differently from a standard open-ended chatbot when you ask a question that is **not** answered in your uploaded PDFs?",
          options: [
            {
              id: "a",
              text: "It invents a creative story to keep you entertained.",
              isCorrect: false,
              analogyFeedback: "Inventing facts is the exact opposite of source grounding!",
            },
            {
              id: "b",
              text: "It explicitly tells you that the uploaded sources do not contain that information, rather than guessing from general internet training data.",
              isCorrect: true,
              analogyFeedback: "Spot on. A grounded workspace stays **strictly inside the fence of your uploaded documents**.",
            },
            {
              id: "c",
              text: "It deletes your PDF files.",
              isCorrect: false,
              analogyFeedback: "Your uploaded files stay safe in your notebook.",
            },
            {
              id: "d",
              text: "It posts your question on social media.",
              isCorrect: false,
              analogyFeedback: "Definitely not!",
            },
          ],
        },
        {
          id: "q4-9-2",
          scenario:
            "You are reviewing a 90-page client RFP against your company's 40-page technical proposal. What is the highest-leverage question to ask a source-grounded workspace holding both files?",
          options: [
            {
              id: "a",
              text: "\"Write a poem about RFPs.\"",
              isCorrect: false,
              analogyFeedback: "Won't help you win the deal!",
            },
            {
              id: "b",
              text: "\"Count how many times the word 'the' appears.\"",
              isCorrect: false,
              analogyFeedback: "Zero business value.",
            },
            {
              id: "c",
              text: "\"List every mandatory requirement in the client RFP and check whether our proposal addresses it, flagging any gap or contradiction with exact page citations.\"",
              isCorrect: true,
              analogyFeedback: "Correct! **Cross-document gap analysis** with page citations saves hours of manual cross-checking.",
            },
            {
              id: "d",
              text: "\"Ignore both files and tell me a joke.\"",
              isCorrect: false,
              analogyFeedback: "Save the jokes for after the proposal is submitted!",
            },
          ],
        },
        {
          id: "q4-9-3",
          scenario:
            "What happens when you click a numbered citation badge (e.g., `[4]`) inside a source-grounded answer?",
          options: [
            {
              id: "a",
              text: "It opens the exact passage in your uploaded document that the AI used to generate that claim, letting you verify the context in seconds.",
              isCorrect: true,
              analogyFeedback: "Exactly—like a **yellow sticky tab pointing to the exact paragraph**.",
            },
            {
              id: "b",
              text: "It charges you ₹4.",
              isCorrect: false,
              analogyFeedback: "Citation numbers are reference markers, not price tags!",
            },
            {
              id: "c",
              text: "It closes your browser.",
              isCorrect: false,
              analogyFeedback: "It opens the source panel right next to your chat.",
            },
            {
              id: "d",
              text: "It translates the page into binary.",
              isCorrect: false,
              analogyFeedback: "It shows you the plain original text from your uploaded file.",
            },
          ],
        },
      ],
    },

    // LESSON 10
    {
      id: "workplace-privacy-and-shadow-ai-rules",
      title: "Shadow AI, PII Redaction & Workplace Rules",
      subtitle: "How to move fast with AI at work without leaking company secrets or breaking India's DPDP Act",
      durationMinutes: 7,
      xpReward: 200,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Using unapproved personal AI accounts on company data ('Shadow AI') is the #1 security headache in modern offices. ==Know the difference between Consumer Tiers and Enterprise Zero-Data-Retention Tiers—and always anonymize before you paste.==",
        explanation:
          "Why does your IT security team panic when employees paste work documents into a free personal AI account? Because on **default consumer tiers**, your prompts can be logged, reviewed by third-party contractors, and used to **train future versions of the public model**. In contrast, **Enterprise / Team / API accounts** come with a legal guarantee called **Zero Data Retention (ZDR) / No Training on Customer Data**—meaning your company's prompts are never used to train the model. Even better, if you master **30-Second Anonymization** (replacing real client names with `Client_A`, stripping phone/PAN/Aadhaar numbers, and scaling financial figures), you get 100% of the productivity boost with **zero privacy risk**.",
      },
      analogy: {
        title: "The Public Chai Stall vs. The Soundproof Conference Room",
        metaphor:
          "Discussing a confidential M&A deal or reading out customer Aadhaar numbers at a **crowded public chai stall** where anyone at the next table can take notes and repeat your story tomorrow is **Consumer AI with training turned on**. Using your company's **approved Enterprise AI (or API)** is a **soundproof conference room inside your own office** where nothing spoken is ever repeated outside. ==And replacing 'Tata Motors' with 'Company X' is speaking in code so even if someone overheard a sentence, they'd learn nothing confidential.==",
        visualComparison: [
          {
            everydayItem: "Crowded public chai stall where strangers take notes",
            aiEquivalent: "**Free Consumer AI (default settings)**: chats may be stored and used to train future public models",
          },
          {
            everydayItem: "Soundproof conference room with a signed NDA",
            aiEquivalent: "**Enterprise / Team / API Tier**: contractual guarantee that prompts are NEVER used for model training",
          },
          {
            everydayItem: "Referring to the client as 'Project Lotus / Client_A'",
            aiEquivalent: "**PII & Entity Redaction**: stripping names, phone numbers, keys, and exact identifiers before prompting",
          },
        ],
      },
      activities: [
        {
          type: "beforeAfter",
          title: "How to Sanitize a Sensitive Work Prompt in 20 Seconds",
          before: {
            label: "Dangerous raw prompt (Leaks Client Identity, PII & Unannounced Deal Size)",
            text: "Draft a contract addendum for our ₹14.5 crore acquisition of Koramangala Labs Pvt Ltd (CEO: Rahul Verma, PAN: AAECK1234F, email: rahul@koramangalalabs.in) moving the closing date to 15 Nov 2026.",
          },
          after: {
            label: "Sanitized placeholder prompt (100% safe, identical output quality)",
            text: "Draft a standard contract addendum for an acquisition of `[TARGET_COMPANY]` (represented by `[CEO_NAME]`) moving the closing date from `[OLD_DATE]` to `[NEW_DATE]` for a consideration of `[DEAL_AMOUNT]`. Include standard Indian corporate law placeholders that I can fill in locally.",
          },
          whyItWorks: [
            "The AI doesn't need to know the target's **real company name, PAN number, or ₹14.5 crore deal value** to write a crisp legal template.",
            "Using **`[BRACKETED_PLACEHOLDERS]`** gives you a drop-in draft where you fill in the real names locally inside Word/Docs in 15 seconds.",
            "Zero confidential M&A or personal data ever touches an outside server.",
          ],
        },
        {
          type: "checklist",
          title: "The 5-Point Safe-AI Workplace Checklist",
          intro: "Follow these five rules and your CISO (Chief Information Security Officer) will love you.",
          items: [
            {
              text: "1. Use your company's approved Enterprise / Workspace AI first",
              detail: "Enterprise accounts (ChatGPT Enterprise/Team, Claude for Work, Gemini for Google Workspace, Microsoft Copilot) do NOT train models on your work.",
            },
            {
              text: "2. If using a personal account for non-sensitive learning, turn OFF 'Model Training'",
              detail: "In Settings -> Data Controls, toggle off 'Improve the model for everyone' / 'Chat History Training'.",
            },
            {
              text: "3. Never paste the 'Forbidden Four': PII, Secrets, Unannounced Financials, Private Source Code",
              detail: "No customer phone/Aadhaar/PAN, no API keys/passwords (`.env` files), no unreleased earnings, and no proprietary code in unapproved tools.",
            },
            {
              text: "4. Use `[PLACEHOLDERS]` and the 5-Row Dummy Trick",
              detail: "Replace client names with `[CLIENT_A]` and use fake sample rows when asking for spreadsheet formulas.",
            },
            {
              text: "5. Verify before external action",
              detail: "Always keep a human in the loop before sending emails, publishing numbers, or running database commands.",
            },
          ],
        },
      ],
      techConversation: {
        context: "An IT Security Lead runs a company-wide town hall on AI usage",
        speakerA: {
          role: "Marketing Manager",
          quote:
            "Why did IT block free browser extensions that promise '1-click AI email summaries', while encouraging us to use **Gemini inside our company Google Workspace**?",
        },
        speakerB: {
          role: "Head of Information Security",
          quote:
            "Random free browser extensions often read every webpage you open and sell your data. Our **Enterprise Workspace account** has a signed **Data Processing Addendum** and **zero training retention**, so your emails stay completely private under our corporate boundary.",
        },
        plainEnglishTranslation:
          "Security teams aren't anti-AI—they are against **Shadow AI** (unvetted free tools and sketchy browser extensions). Stick to approved enterprise tools and placeholder sanitization.",
      },
      realWorldApplication: {
        forWork:
          "Take 60 seconds today to open the **Data Controls / Privacy Settings** in any personal AI apps you use on your phone or laptop and switch off **'Use my chats to train models'**.",
        forLearning:
          "Congratulations—you've finished Track 4 and earned your **Workflow Architect** badge! You now have practical, safe playbooks for prompting, research, spreadsheets, meetings, writing, decks, and knowledge management.",
      },
      jargonCard: {
        term: "Shadow AI & Zero Data Retention (ZDR)",
        oneLineAnalogy:
          "**Shadow AI** is employees sneaking company data into unapproved personal AI tools; **Zero Data Retention (ZDR)** is an enterprise agreement where the AI provider deletes your prompt immediately after replying and never trains on it.",
        meetingDropLine:
          "\"To prevent Shadow AI, let's give the team approved enterprise seats with Zero Data Retention and train everyone on bracketed placeholders.\"",
      },
      quiz: [
        {
          id: "q4-10-1",
          scenario:
            "What is **'Shadow AI'** in a company?",
          options: [
            {
              id: "a",
              text: "An AI model that only works in dark mode.",
              isCorrect: false,
              analogyFeedback: "Dark mode is just a screen theme!",
            },
            {
              id: "b",
              text: "Employees using unapproved personal AI accounts or sketchy browser extensions on company data without IT security oversight.",
              isCorrect: true,
              analogyFeedback: "Spot on. Shadow AI creates serious data-leak and compliance risks when confidential work data goes into unapproved consumer tools.",
            },
            {
              id: "c",
              text: "An AI that generates realistic drop-shadows in Photoshop.",
              isCorrect: false,
              analogyFeedback: "That's graphic design, not cybersecurity!",
            },
            {
              id: "d",
              text: "A backup server kept in a basement.",
              isCorrect: false,
              analogyFeedback: "Not what Shadow AI means.",
            },
          ],
        },
        {
          id: "q4-10-2",
          scenario:
            "What is the key privacy difference between a **free default consumer AI account** and an **approved Enterprise / API account**?",
          options: [
            {
              id: "a",
              text: "There is no difference at all; enterprise accounts just have a different logo.",
              isCorrect: false,
              analogyFeedback: "There is a huge legal and technical difference in how data is handled.",
            },
            {
              id: "b",
              text: "Consumer accounts are more secure than enterprise accounts.",
              isCorrect: false,
              analogyFeedback: "It's the exact opposite!",
            },
            {
              id: "c",
              text: "Consumer accounts often use your chats to train future public models by default, whereas Enterprise and API accounts contractually guarantee your data is never used to train models (and often support Zero Data Retention).",
              isCorrect: true,
              analogyFeedback: "Correct! Enterprise seats act like a **soundproof room inside your company boundary**.",
            },
            {
              id: "d",
              text: "Enterprise accounts only work on Tuesdays.",
              isCorrect: false,
              analogyFeedback: "Enterprise accounts work 24/7.",
            },
          ],
        },
        {
          id: "q4-10-3",
          scenario:
            "You need help drafting a sensitive termination or settlement letter for a specific vendor dispute. How can you use AI to draft the legal structure **without** exposing the vendor's identity or the dispute amount?",
          options: [
            {
              id: "a",
              text: "Paste the vendor's real PAN, bank account number, and name, then type 'Please keep this a secret' at the end of the prompt.",
              isCorrect: false,
              analogyFeedback: "Typing 'keep this a secret' in a prompt has zero technical or legal effect on server logging!",
            },
            {
              id: "b",
              text: "Use whispered voice input so the microphone barely hears it.",
              isCorrect: false,
              analogyFeedback: "Whispering into a mic still sends the transcribed text to the server!",
            },
            {
              id: "c",
              text: "Post the contract on a public forum first.",
              isCorrect: false,
              analogyFeedback: "That leaks the data publicly!",
            },
            {
              id: "d",
              text: "Replace all identifying details with bracketed placeholders (`[VENDOR_NAME]`, `[SETTLEMENT_AMOUNT]`, `[AGREEMENT_DATE]`), get the template from the AI, and fill in the real values locally on your computer.",
              isCorrect: true,
              analogyFeedback: "Exactly! **Bracketed placeholders** give you 100% of the drafting speed with zero confidential exposure.",
            },
          ],
        },
      ],
    },
  ],
};

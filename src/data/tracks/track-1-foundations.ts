import type { Track } from "../types";

export const TRACK_1: Track = {
  id: "track-1-foundations",
  number: 1,
  icon: "BrainCircuit",
  title: "What Is AI, Really? (No Maths Needed)",
  description:
    "Get the core shift behind AI: from software that follows rules to software that learns patterns. Explained at the railway counter and the chai stall.",
  badgeName: "Pattern Spotter",
  estimatedTime: "6 mins",
  lessons: [
    {
      id: "deterministic-vs-probabilistic",
      title: "Why AI Is a Chai-Wala, Not IRCTC",
      subtitle: "Why normal software follows rules but AI learns patterns",
      durationMinutes: 6,
      xpReward: 100,
      lastUpdated: "Oct 28, 2026",
      sources: [
        { label: "Machine learning: overview and history (Wikipedia)", url: "https://en.wikipedia.org/wiki/Machine_learning" },
      ],
      bigIdea: {
        headline:
          "Traditional software follows exact rules. ==AI learns patterns from examples, then makes educated guesses.==",
        explanation:
          "For decades, most software ran on **step-by-step rules** written by programmers. Same input, same output, every time. Miss a case, and it broke or gave a wrong answer. Modern AI flips this. Nobody writes the rules. It's **trained on enormous numbers of examples** (for chatbots, billions of pages of text) and learns the patterns itself. So it copes with messy, human requests. But ==it's guessing, so it can be wrong.==",
      },
      analogy: {
        title: "The Booking Form and the Chai-Wala",
        metaphor:
          "The **IRCTC form** is traditional software. Enter the exact station code, date and class: same result, every time. Get the date format wrong and it refuses. Your **chai-wala** is more like AI. After lakhs of cups, he knows his customers' patterns. Say 'kuch strong, kam cheeni, adrak wali' and he improvises the right cup, no recipe card. ==Each cup differs slightly, and now and then he gets your order wrong.==",
        visualComparison: [
          {
            everydayItem: "IRCTC form: exact input in, same result out, anything unexpected rejected",
            aiEquivalent: "**Traditional code (deterministic)**: input A always gives output B",
          },
          {
            everydayItem: "Chai-wala: improvises from lakhs of past cups, slightly different each time",
            aiEquivalent: "**Generative AI (probabilistic)**: predicts the most likely good response from learned patterns",
          },
        ],
      },
      activities: [
        {
          type: "sort",
          title: "Rules or patterns?",
          instructions:
            "Sort each job. Should it run on **exact rules** (normal software), or is it a good fit for **pattern-learning AI**?",
          buckets: ["Exact rules", "AI is a good fit"],
          items: [
            {
              text: "Calculating GST on 500 invoices",
              bucket: 0,
              why: "Tax maths has to be **exact, every time**. A spreadsheet or billing system never 'guesses'.",
            },
            {
              text: "Replying politely to an angry one-star app review",
              bucket: 1,
              why: "Tone and wording are fuzzy, human things. **Perfect for AI to draft**, and for you to check.",
            },
            {
              text: "Checking that a PAN number has the right format",
              bucket: 0,
              why: "There's **one correct pattern**: 5 letters, 4 digits, 1 letter. A simple rule checks it perfectly.",
            },
            {
              text: "Tagging 2,000 customer comments as 'delivery', 'payment' or 'app bug'",
              bucket: 1,
              why: "People describe the same problem a thousand ways. **Pattern-spotting** is exactly what AI is good at.",
            },
            {
              text: "Crediting salaries to 300 employees' bank accounts",
              bucket: 0,
              why: "Moving money needs **exact, auditable rules**. 'Probably right' isn't good enough.",
            },
            {
              text: "Turning a 40-page policy into a 5-point summary",
              bucket: 1,
              why: "Summarising is a **pattern-and-language job**. AI does it in seconds; you check it against the original.",
            },
          ],
        },
      ],
      techConversation: {
        context: "A Bengaluru fintech plans a new refund feature",
        speakerA: {
          role: "Product Manager",
          quote: "Can we use an LLM to calculate the exact GST refund on each invoice?",
        },
        speakerB: {
          role: "Senior Engineer",
          quote:
            "Definitely not. LLMs are **probabilistic**, and refund maths has to be **deterministic**. Normal code calculates the amount. The LLM only drafts the WhatsApp message explaining it to the customer.",
        },
        plainEnglishTranslation:
          "Don't let a 'guessing' AI do accounting, where 2 + 2 must always equal 4. **Ordinary code does the calculation**; AI writes the friendly message around it.",
      },
      realWorldApplication: {
        forWork:
          "Use AI for **brainstorming, drafting, summarising** and sorting messy text. ==For totals, tax, salaries and anything with money attached, use spreadsheets and your company's systems.==",
        forLearning:
          "Ask an AI to explain one concept through **three different analogies**. Because it's probabilistic, you'll get fresh angles every time you ask.",
      },
      jargonCard: {
        term: "Deterministic vs. Probabilistic",
        oneLineAnalogy:
          "The IRCTC form that gives the **same result every time**, vs. the chai-wala who **improvises from experience**.",
        meetingDropLine:
          "\"Let's keep the pricing calculation deterministic, in code, and use the LLM only to summarise the report.\"",
      },
      quiz: [
        {
          id: "q1-1",
          scenario:
            "A pharmacy app team says: 'Because the AI is **probabilistic**, a pharmacist must confirm every prescription it reads.' What do they mean?",
          options: [
            {
              id: "a",
              text: "The AI is too slow to run on phones.",
              isCorrect: false,
              analogyFeedback: "Not quite. Speed is called **latency** (Track 5). Probabilistic is about how the AI decides, not how fast.",
            },
            {
              id: "b",
              text: "The AI predicts the most likely answer instead of following fixed rules, so there's always a small chance it's wrong.",
              isCorrect: true,
              analogyFeedback:
                "Spot on. Like the chai-wala, it's usually right. But where a mistake could hurt someone, **a human checks**.",
            },
            {
              id: "c",
              text: "The AI's storage is full.",
              isCorrect: false,
              analogyFeedback: "Not quite. Storage has nothing to do with it. Probabilistic describes **how the AI makes its guesses**.",
            },
          ],
        },
        {
          id: "q1-2",
          scenario: "You ask a chatbot the same question twice and get two differently worded answers. What's going on?",
          options: [
            {
              id: "a",
              text: "It's broken and should be reported.",
              isCorrect: false,
              analogyFeedback: "Not quite. That's **normal for a probabilistic system**, like the chai tasting slightly different each time.",
            },
            {
              id: "b",
              text: "It generates each answer fresh from patterns, so the wording varies.",
              isCorrect: true,
              analogyFeedback: "Exactly. Great for brainstorming, and a reason **not to rely on it** where you need identical output every time.",
            },
            {
              id: "c",
              text: "Someone at the company is typing the replies.",
              isCorrect: false,
              analogyFeedback: "Not quite. No human is involved. The variation comes from **how the model predicts text**.",
            },
          ],
        },
        {
          id: "q1-3",
          scenario: "How did a chatbot learn to write a decent leave-application email?",
          options: [
            {
              id: "a",
              text: "A programmer wrote a rule for every possible email.",
              isCorrect: false,
              analogyFeedback: "Not quite. That's the IRCTC approach, and it's **impossible for something as varied as language**.",
            },
            {
              id: "b",
              text: "It learned the patterns of language from training on huge amounts of text.",
              isCorrect: true,
              analogyFeedback: "Correct. Nobody taught it the rules. It **absorbed the patterns**, like the chai-wala after lakhs of cups.",
            },
            {
              id: "c",
              text: "It copies a template stored in a database.",
              isCorrect: false,
              analogyFeedback: "Not quite. It **generates new text** each time rather than pulling up a stored template.",
            },
          ],
        },
        {
          id: "q1-4",
          scenario: "Which job should NOT be left to an AI chatbot **on its own**?",
          options: [
            {
              id: "a",
              text: "Suggesting five names for a team offsite.",
              isCorrect: false,
              analogyFeedback: "Not quite. Low stakes and creative: a **perfect AI job**.",
            },
            {
              id: "b",
              text: "Working out the final tax amount on your company's invoices.",
              isCorrect: true,
              analogyFeedback: "Right. Exact numbers with legal consequences belong to **deterministic software**.",
            },
            {
              id: "c",
              text: "Summarising a long email thread before a meeting.",
              isCorrect: false,
              analogyFeedback: "Not quite. Summarising is a **good AI job**. Just skim the original if something important hangs on it.",
            },
          ],
        },
      ],
    },
  ],
};

import type { Track } from "../types";

export const TRACK_5: Track = {
  id: "track-5-tech-fluency",
  number: 5,
  icon: "Zap",
  title: "Speaking 'Tech': PM & Engineer Simulations",
  description:
    "Sit in on real-sounding team meetings and decode them line by line: latency, hallucinations, evals and what AI actually costs, in rupees.",
  badgeName: "Tech-Fluent Insider",
  estimatedTime: "28 mins",
  lessons: [
    {
      id: "latency-and-streaming",
      title: "Why Is the AI So Slow?",
      subtitle: "Latency, Streaming and the Speed–Quality Trade-off",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Latency is the wait between asking and getting an answer. It's always a trade-off against quality and cost.",
        explanation:
          "Bigger, smarter models usually take longer to answer. Long replies take longer to write, because the AI produces them token by token. Models that 'think' before answering take longer still. On a phone, a few seconds of blank screen feels broken, so teams fight latency in three ways: streaming the answer as it's written, sending easy questions to smaller, faster models, and setting a time limit after which a person takes over.",
      },
      analogy: {
        title: "Your Swiggy Order",
        metaphor:
          "Order biryani and the wait has two parts: the restaurant preparing it, then the rider bringing it. AI is similar: the time before the first word appears, then the time to write the rest. The live-tracking map doesn't make the biryani arrive sooner, but seeing the rider move makes the wait feel shorter. That's streaming. And a restaurant with a giant menu often takes longer to prepare your order, just as a bigger model often takes longer to answer.",
        visualComparison: [
          {
            everydayItem: "Restaurant prep time",
            aiEquivalent: "Time to first token: how long before the first word appears",
          },
          {
            everydayItem: "Live rider tracking on the map",
            aiEquivalent: "Streaming: showing the answer word by word as it's generated",
          },
          {
            everydayItem: "Quick snack from the corner shop vs. a feast from a big restaurant",
            aiEquivalent: "Small, fast model for easy questions vs. large model for hard ones (model routing)",
          },
        ],
      },
      activities: [
        {
          type: "decodeChat",
          title: "Stand-up: the support bot feels slow",
          setting:
            "Daily stand-up at a food-delivery app in Bengaluru. Customers are complaining that the new AI support assistant is slow.",
          lines: [
            {
              speaker: "Engineering Lead",
              text: "Median latency on the support bot is 2.1 seconds, but p95 is 9 seconds.",
              plainEnglish:
                "Half the replies arrive within about 2 seconds, but the slowest 5 in every 100 customers wait 9 seconds or more. 'p95' means 95% of requests are faster than this number.",
            },
            {
              speaker: "Product Manager",
              text: "Nine seconds of blank screen feels broken on a phone. Can we stream the response?",
              plainEnglish:
                "Can we show the reply word by word as it's written, so the customer sees something happening straight away?",
            },
            {
              speaker: "ML Engineer",
              text: "Yes. Streaming won't change total generation time, but time-to-first-token drops below a second.",
              plainEnglish:
                "The full answer takes just as long, but the first words appear in under a second, so it feels much faster. Like the live-tracking map.",
            },
            {
              speaker: "Engineering Lead",
              text: "We should also route 'where is my order' questions to a smaller model.",
              plainEnglish:
                "Send simple, common questions to a quicker, cheaper AI, and keep the big model for complicated complaints. That's called model routing.",
            },
            {
              speaker: "Product Manager",
              text: "And add a 15-second timeout with a fallback to a human agent.",
              plainEnglish:
                "If the AI hasn't answered in 15 seconds, stop waiting and hand the customer to a person.",
            },
          ],
        },
        {
          type: "sort",
          title: "Speed first, or quality first?",
          instructions: "For each AI feature, what should the team prioritise?",
          buckets: ["Speed first", "Quality first"],
          items: [
            {
              text: "Search-box suggestions that appear as you type",
              bucket: 0,
              why: "If suggestions arrive after the user finishes typing, they're useless. Milliseconds matter.",
            },
            {
              text: "Reviewing a ₹50-lakh vendor contract for risky clauses",
              bucket: 1,
              why: "Nobody minds waiting two minutes if it catches a costly clause. Use the most careful model.",
            },
            {
              text: "A voice assistant that talks back in real time",
              bucket: 0,
              why: "Long pauses in a conversation feel unnatural. Voice needs low latency.",
            },
            {
              text: "Explaining a patient's blood-test report in plain language",
              bucket: 1,
              why: "Accuracy matters far more than a few seconds. Take the time, and keep a doctor in the loop.",
            },
            {
              text: "\"Where is my order?\" replies in a delivery app",
              bucket: 0,
              why: "A simple, common question from an impatient customer: fast and good enough wins.",
            },
            {
              text: "A monthly strategy summary for the leadership team",
              bucket: 1,
              why: "It's read carefully once a month. Quality and correctness beat speed.",
            },
          ],
        },
      ],
      jargonCard: {
        term: "Latency (and p95)",
        oneLineAnalogy:
          "How long the customer waits for their order. 'p95' is the wait time that 95 out of 100 orders beat.",
        meetingDropLine:
          "\"What's the p95 latency on mobile, and can we stream the response so it feels instant?\"",
      },
      quiz: [
        {
          id: "q5-1-1",
          scenario: "An engineer says: 'p95 latency is 8 seconds.' What does that mean?",
          options: [
            {
              id: "a",
              text: "95% of requests finish within 8 seconds; the slowest 5% take longer.",
              isCorrect: true,
              analogyFeedback: "Correct. Teams watch p95 because averages hide the customers having the worst experience.",
            },
            {
              id: "b",
              text: "The AI is 95% accurate.",
              isCorrect: false,
              analogyFeedback: "p95 is about speed, not accuracy. Accuracy is measured with evals (next lessons).",
            },
            {
              id: "c",
              text: "Every request takes exactly 8 seconds.",
              isCorrect: false,
              analogyFeedback: "Latency varies from request to request. p95 describes the slow end of that range.",
            },
          ],
        },
        {
          id: "q5-1-2",
          scenario: "Why does streaming make an AI feel faster even though the total time is the same?",
          options: [
            {
              id: "a",
              text: "Users see words appearing almost immediately, so they know it's working.",
              isCorrect: true,
              analogyFeedback: "Yes. It's the live-tracking map: same delivery time, much calmer customer.",
            },
            {
              id: "b",
              text: "Streaming uses a smarter model.",
              isCorrect: false,
              analogyFeedback: "Same model. Streaming only changes how the answer is shown.",
            },
            {
              id: "c",
              text: "Streaming deletes half the answer.",
              isCorrect: false,
              analogyFeedback: "Nothing is cut. You just start seeing it sooner.",
            },
          ],
        },
        {
          id: "q5-1-3",
          scenario: "What is 'model routing'?",
          options: [
            {
              id: "a",
              text: "Sending each question to the most suitable model, e.g. easy ones to a small fast model, hard ones to a big one.",
              isCorrect: true,
              analogyFeedback: "Right. Corner-shop snack for a quick craving, big restaurant for the feast.",
            },
            {
              id: "b",
              text: "Using Google Maps inside the AI.",
              isCorrect: false,
              analogyFeedback: "Nothing to do with maps. It's about choosing which AI handles which question.",
            },
          ],
        },
        {
          id: "q5-1-4",
          scenario: "Which feature can most afford to be slow?",
          options: [
            {
              id: "a",
              text: "Live autocomplete in a search bar.",
              isCorrect: false,
              analogyFeedback: "Autocomplete is useless if it's slower than the user's typing.",
            },
            {
              id: "b",
              text: "An overnight report that summarises 2,000 customer reviews.",
              isCorrect: true,
              analogyFeedback: "Correct. Nobody is watching it run, so quality and cost matter more than seconds.",
            },
            {
              id: "c",
              text: "A real-time voice assistant.",
              isCorrect: false,
              analogyFeedback: "Voice is the most latency-sensitive of all. Pauses feel awkward instantly.",
            },
          ],
        },
      ],
    },
    {
      id: "hallucinations",
      title: "When AI Makes Things Up",
      subtitle: "Hallucinations: Why They Happen and How Teams Catch Them",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      sources: [
        { label: "Mata v. Avianca: lawyers sanctioned for AI-invented case citations (Wikipedia)", url: "https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc." },
        { label: "Hallucination (artificial intelligence) (Wikipedia)", url: "https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)" },
      ],
      bigIdea: {
        headline:
          "A hallucination is when AI states something false with complete confidence. It isn't lying; it's producing plausible-sounding text.",
        explanation:
          "An LLM is built to produce likely-sounding text, not to check facts. Unless it's set up and prompted to say 'I don't know', it fills gaps with something plausible. Hallucinations are most likely with very specific details (names, numbers, dates, section numbers, legal cases, links), niche topics and recent events. Teams reduce them by grounding the AI in real documents (RAG), asking for sources and checking them, letting the AI say 'I don't know', and keeping a human check on anything high-stakes.",
      },
      analogy: {
        title: "The Student Who Never Leaves an Answer Blank",
        metaphor:
          "Every class has that student: in the board exam, they never leave a question blank, because a confident, well-written answer might still earn marks. Ask them a date they don't know and they'll write a believable one. Their handwriting is beautiful and their tone is sure, so the examiner might not notice. AI often behaves the same way: a fluent, confident answer, whether or not it actually knows.",
        visualComparison: [
          {
            everydayItem: "Writing a believable date instead of leaving it blank",
            aiEquivalent: "Inventing a specific number, name, citation or link that sounds right",
          },
          {
            everydayItem: "Open-book exam with the textbook in front of them",
            aiEquivalent: "Grounding the AI in your documents (RAG), so it answers from real sources",
          },
          {
            everydayItem: "Telling them blanks won't lose marks",
            aiEquivalent: "Prompting: \"If you're not sure, say you don't know\"",
          },
        ],
      },
      activities: [
        {
          type: "spotTheError",
          title: "Catch the made-up policy",
          instructions:
            "Your company's actual travel policy says: economy flights only; hotels up to ₹4,000 a night in metro cities; claims within 30 days with receipts. That's all it says. Below is the company AI assistant's answer to an employee. Tap every sentence that is made up or doesn't match the policy.",
          question: "Can I fly business class to Delhi for a client meeting, and how much can I spend on a hotel?",
          sentences: [
            { text: "Great question, happy to help!", isError: false, why: "" },
            {
              text: "Business class is allowed on flights longer than two hours.",
              isError: true,
              why: "Invented. The policy says economy only. The AI produced a rule that sounds plausible because many companies have one.",
            },
            {
              text: "For metro cities like Delhi, the hotel limit is ₹4,000 per night.",
              isError: false,
              why: "",
            },
            {
              text: "Under Section 14.2, approved by the CFO in March 2025, you can also claim ₹1,500 a day for meals.",
              isError: true,
              why: "A made-up section number, approval date and allowance. Precise-sounding details are a classic hallucination warning sign. The policy never mentions meals.",
            },
            {
              text: "Remember to submit your claim with receipts within 30 days.",
              isError: false,
              why: "",
            },
            {
              text: "If economy is full, you're automatically approved for an upgrade.",
              isError: true,
              why: "Invented to sound helpful. Nothing in the policy supports it, and an employee acting on it could be out of pocket.",
            },
          ],
        },
      ],
      techConversation: {
        context: "A legal team in Delhi reviewing an AI-drafted research memo",
        speakerA: {
          role: "Junior Associate",
          quote: "The AI's memo cites three Supreme Court judgments that support our argument perfectly.",
        },
        speakerB: {
          role: "Senior Partner",
          quote:
            "Pull every one of them from an official law database before this goes anywhere. In 2023, lawyers in New York were fined for submitting cases ChatGPT had invented.",
        },
        plainEnglishTranslation:
          "'Perfect' citations from AI are a red flag, not a win. Check every source against the original. Courts have penalised lawyers who didn't.",
      },
      realWorldApplication: {
        forWork:
          "Add one line to important prompts: \"Only use the information I've given you. If something isn't there, say 'not specified' instead of guessing.\" Then check every number and name before it leaves your desk.",
        forLearning:
          "When AI gives you a fact, ask: \"What's your source, and how confident are you?\" Then open the source yourself. AI can invent links too.",
      },
      jargonCard: {
        term: "Hallucination (and Grounding)",
        oneLineAnalogy:
          "Hallucination: the student confidently writing a believable wrong answer. Grounding: giving them the textbook to answer from.",
        meetingDropLine:
          "\"How are we grounding the bot's answers, and what's our hallucination rate on the eval set?\"",
      },
      quiz: [
        {
          id: "q5-2-1",
          scenario: "Why do LLMs hallucinate?",
          options: [
            {
              id: "a",
              text: "They're designed to produce plausible text, and they don't automatically check facts.",
              isCorrect: true,
              analogyFeedback: "Exactly. Fluency isn't the same as truth. The model fills gaps with what sounds likely.",
            },
            {
              id: "b",
              text: "They're trying to trick you on purpose.",
              isCorrect: false,
              analogyFeedback: "There's no intent. It's the never-leave-it-blank habit, not deception.",
            },
            {
              id: "c",
              text: "Your internet connection corrupted the answer.",
              isCorrect: false,
              analogyFeedback: "Hallucinations come from how the model generates text, not from your network.",
            },
          ],
        },
        {
          id: "q5-2-2",
          scenario: "Which AI answer should make you most suspicious?",
          options: [
            {
              id: "a",
              text: "A general explanation of what inflation is.",
              isCorrect: false,
              analogyFeedback: "Broad, well-known concepts are usually reliable. Still worth a sanity check.",
            },
            {
              id: "b",
              text: "\"As per Rule 7(3)(b) of the 2019 notification, the penalty is ₹23,450.\"",
              isCorrect: true,
              analogyFeedback: "Correct. Very precise sections, dates and amounts are exactly where hallucinations hide. Verify every part.",
            },
            {
              id: "c",
              text: "Five catchy names for a team offsite.",
              isCorrect: false,
              analogyFeedback: "There's no 'true' answer to get wrong here. Creative tasks are safe ground.",
            },
          ],
        },
        {
          id: "q5-2-3",
          scenario: "What does 'grounding' an AI mean?",
          options: [
            {
              id: "a",
              text: "Making it answer from specific trusted documents or data, often with citations.",
              isCorrect: true,
              analogyFeedback: "Yes. The open-book exam. It's one of the most effective ways to reduce hallucinations.",
            },
            {
              id: "b",
              text: "Punishing the AI when it's wrong.",
              isCorrect: false,
              analogyFeedback: "Not that kind of grounding! It means tying answers to real sources.",
            },
            {
              id: "c",
              text: "Turning the AI off and on again.",
              isCorrect: false,
              analogyFeedback: "Restarting doesn't help. Giving it real sources does.",
            },
          ],
        },
        {
          id: "q5-2-4",
          scenario: "Your AI-drafted proposal includes a statistic with a link. What's the right check?",
          options: [
            {
              id: "a",
              text: "Make sure the link looks professional.",
              isCorrect: false,
              analogyFeedback: "AI can invent realistic-looking links. Looking right isn't being right.",
            },
            {
              id: "b",
              text: "Open the link and find the statistic on the page yourself.",
              isCorrect: true,
              analogyFeedback: "Right. If you can't find it in the source, it doesn't go in the proposal.",
            },
            {
              id: "c",
              text: "Ask the AI whether the statistic is real.",
              isCorrect: false,
              analogyFeedback: "It may confidently say yes. Check outside the chat.",
            },
          ],
        },
      ],
    },
    {
      id: "evals",
      title: "How Do You Know the AI Is Good?",
      subtitle: "Evals: The Mock Test Series for AI",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "An 'eval' is a fixed test set with known good answers. Teams run it before every change, so improvements are measured, not felt.",
        explanation:
          "Trying an AI on five questions and saying 'looks good' is how bad launches happen. Serious teams build an evaluation set ('eval'): hundreds of real examples with what a good answer looks like, including the tricky cases. Every new prompt or model is scored on the same set. If one area gets worse after a change, that's a 'regression', and it's caught before customers see it. Often a second AI grades the answers against a written rubric ('LLM-as-a-judge'), with humans checking a sample of its grades.",
      },
      analogy: {
        title: "The Mock Test Series Before an Entrance Exam",
        metaphor:
          "Nobody preparing for CAT or JEE judges their readiness by solving three questions they like. They take full mock tests with an answer key, track their score week after week, and look at sections: maybe quant went up but verbal dropped after a new study plan. An eval is a mock test series for AI: the same paper, the same answer key, every time you change something.",
        visualComparison: [
          {
            everydayItem: "A full mock paper with an answer key",
            aiEquivalent: "Eval set ('golden set'): real questions with approved answers",
          },
          {
            everydayItem: "Section-wise scores: quant up, verbal down",
            aiEquivalent: "Scores by category, e.g. English up, Hindi queries down (a regression)",
          },
          {
            everydayItem: "A tutor marking your paper against the marking scheme",
            aiEquivalent: "LLM-as-a-judge: an AI grading answers against a rubric, spot-checked by humans",
          },
        ],
      },
      activities: [
        {
          type: "decodeChat",
          title: "Launch review: is the claims bot ready?",
          setting:
            "An insurance company in Mumbai is deciding whether to launch a new version of its claims-help chatbot.",
          lines: [
            {
              speaker: "QA Lead",
              text: "On our golden set of 300 real customer questions, the new prompt scores 91%, up from 84%.",
              plainEnglish:
                "We keep a fixed mock test of 300 real questions with approved answers. The new version gets 91% right, up from 84%.",
            },
            {
              speaker: "Product Manager",
              text: "Great. But did anything get worse?",
            },
            {
              speaker: "QA Lead",
              text: "One regression: Hindi queries dropped from 88% to 79%.",
              plainEnglish:
                "The overall score went up, but questions asked in Hindi got noticeably worse. A drop like this after a change is called a regression.",
            },
            {
              speaker: "ML Engineer",
              text: "Scoring was LLM-as-a-judge with a rubric; humans spot-checked 10% of the grades.",
              plainEnglish:
                "Another AI marked each answer against a written marking scheme, and people re-checked one in ten of its marks to make sure the grader itself was fair.",
            },
            {
              speaker: "Product Manager",
              text: "Then we hold the launch until Hindi is back above 85%, and add 50 more Hindi cases to the eval set.",
              plainEnglish:
                "No launch until the Hindi score recovers, and make the mock test tougher exactly where it broke.",
            },
          ],
        },
        {
          type: "checklist",
          title: "Build a mini-eval for your own AI task",
          intro: "You don't need engineers to do this. A spreadsheet works. Tick each step as you set it up for one task you use AI for.",
          items: [
            { text: "Collect 20 real examples", detail: "Actual emails, questions or documents from your work, not made-up easy ones." },
            { text: "Write what a good answer looks like for each", detail: "Your 'answer key'. Even a few bullet points per example is enough." },
            { text: "Include the tricky cases", detail: "Hinglish, an angry customer, a question the AI should refuse, missing information." },
            { text: "Score each answer: pass or fail", detail: "Same rules every time. Note why it failed." },
            { text: "Re-run the same 20 after every prompt change", detail: "If the score drops anywhere, you've found a regression before your boss did." },
          ],
        },
      ],
      jargonCard: {
        term: "Evals (and Regressions)",
        oneLineAnalogy:
          "An eval is the AI's mock test series; a regression is when one section's score drops after a change.",
        meetingDropLine:
          "\"Before we switch models, can we run both on our eval set and check for regressions on the Hindi cases?\"",
      },
      quiz: [
        {
          id: "q5-3-1",
          scenario: "Your team tried a new AI prompt on five questions and it 'looked great'. What's missing?",
          options: [
            {
              id: "a",
              text: "A proper eval: a fixed, larger set of real examples, scored the same way for old and new versions.",
              isCorrect: true,
              analogyFeedback: "Exactly. Five favourite questions isn't a mock test. It's a vibe check.",
            },
            {
              id: "b",
              text: "Nothing. Five good answers proves it works.",
              isCorrect: false,
              analogyFeedback: "Five examples can't show you the tricky cases or the areas that quietly got worse.",
            },
          ],
        },
        {
          id: "q5-3-2",
          scenario: "Overall accuracy went from 84% to 91%, but Hindi questions fell from 88% to 79%. What's that drop called?",
          options: [
            { id: "a", text: "A hallucination", isCorrect: false, analogyFeedback: "Hallucination is an individual made-up answer. A score dropping after a change has its own name." },
            { id: "b", text: "A regression", isCorrect: true, analogyFeedback: "Correct. Something that used to work got worse after a change." },
            { id: "c", text: "Latency", isCorrect: false, analogyFeedback: "Latency is about speed, not accuracy." },
          ],
        },
        {
          id: "q5-3-3",
          scenario: "What is 'LLM-as-a-judge'?",
          options: [
            {
              id: "a",
              text: "Using an AI to grade other AI answers against a rubric, with humans checking a sample.",
              isCorrect: true,
              analogyFeedback: "Right. It makes grading hundreds of answers practical, but the grader needs checking too.",
            },
            {
              id: "b",
              text: "An AI that decides court cases in India.",
              isCorrect: false,
              analogyFeedback: "Not that kind of judge! It's an AI marking another AI's answers.",
            },
          ],
        },
        {
          id: "q5-3-4",
          scenario: "Which example is most valuable to add to an eval set for a customer-support bot?",
          options: [
            {
              id: "a",
              text: "A question the bot already answers perfectly every time.",
              isCorrect: false,
              analogyFeedback: "Fine to keep a few, but easy questions don't reveal weaknesses.",
            },
            {
              id: "b",
              text: "A real, angry message in Hinglish asking for a refund the policy doesn't allow.",
              isCorrect: true,
              analogyFeedback: "Yes. Tricky, realistic cases are where bots fail in public. They belong in the mock test.",
            },
          ],
        },
      ],
    },
    {
      id: "ai-unit-economics",
      title: "What Does AI Actually Cost?",
      subtitle: "Tokens, Price Tiers and the Rupee Maths Behind AI Features",
      durationMinutes: 7,
      xpReward: 150,
      isUpdatedBiWeekly: true,
      lastUpdated: "Oct 28, 2026",
      sources: [
        { label: "OpenAI API pricing", url: "https://developers.openai.com/api/docs/pricing" },
        { label: "Anthropic (Claude) pricing", url: "https://claude.com/pricing" },
        { label: "Sarvam: why Indian languages need more tokens (2024)", url: "https://www.sarvam.ai/blogs/sarvam-1" },
      ],
      bigIdea: {
        headline:
          "Companies pay for AI by the token, like electricity by the unit. Model choice can change the bill a hundredfold.",
        explanation:
          "When a company builds AI into its product, it usually pays the AI provider per token: a price for every million tokens the model reads (input) and a higher price for every million it writes (output). Top-tier models can cost about 100 times more per token than budget models. So the same feature can cost a few thousand rupees a month or a few lakh, depending on which model it uses, how much text goes in, and how long the answers are. Free chatbot apps hide this from you; product teams can't.",
      },
      analogy: {
        title: "Your Electricity Bill",
        metaphor:
          "Your electricity bill is units used × rate per unit. A ceiling fan running all month barely moves the bill; an AC running all day in May doubles it. AI bills work the same way: tokens used × price per token. A budget model is the fan: cheap even at huge volume. A top-tier model is the AC: worth it when you really need it, painful if you leave it running for everything. Writing (output) costs more per unit than reading (input), like a higher slab rate.",
        visualComparison: [
          {
            everydayItem: "Units (kWh) on the meter",
            aiEquivalent: "Tokens read and written",
          },
          {
            everydayItem: "Fan vs. AC",
            aiEquivalent: "Budget model vs. top-tier model: about 100× difference per token",
          },
          {
            everydayItem: "Switching off the AC when you leave the room",
            aiEquivalent: "Shorter prompts, shorter answers, and routing easy questions to cheaper models",
          },
        ],
      },
      activities: [
        {
          type: "costCalculator",
          title: "Price a customer-support bot",
          intro:
            "A company wants AI to answer customer messages. Move the sliders and watch the monthly bill change for three price tiers. Start with the defaults: 5,000 messages a day.",
          usdToInr: 95,
          models: [
            { name: "Top tier (e.g. GPT-6 Astra, Claude Fable 5.1)", inputUsdPerMillion: 10, outputUsdPerMillion: 50 },
            { name: "Mid tier (e.g. GPT-6.1 Sol, Claude Sonnet 5.5)", inputUsdPerMillion: 2, outputUsdPerMillion: 10 },
            { name: "Budget (e.g. GPT-6 Luna, Claude Haiku 5.5)", inputUsdPerMillion: 0.1, outputUsdPerMillion: 0.5 },
          ],
          defaults: { messagesPerDay: 5000, wordsIn: 600, wordsOut: 120 },
          pricesCheckedOn: "Oct 28, 2026",
        },
        {
          type: "decodeChat",
          title: "Budget review: the AI bill tripled",
          setting: "Monthly review at a travel-booking startup in Gurugram. Last month's AI bill came in at three times the forecast.",
          lines: [
            {
              speaker: "Finance Manager",
              text: "Our LLM spend went from ₹1.2 lakh to ₹3.6 lakh. Did traffic triple?",
            },
            {
              speaker: "Engineering Lead",
              text: "Traffic was flat. Average input tokens per request tripled after we started stuffing the full booking history into the context.",
              plainEnglish:
                "Same number of customers, but each question now sends three times more text to the AI, because we attach the customer's entire booking history. More text read = more tokens = bigger bill.",
            },
            {
              speaker: "ML Engineer",
              text: "We can retrieve only the relevant booking instead, and cache the system prompt.",
              plainEnglish:
                "Send only the one booking the customer is asking about (that's RAG again), and reuse our standing instructions instead of paying full price for them on every request (caching).",
            },
            {
              speaker: "Product Manager",
              text: "And can we route FAQ-type questions to the budget tier? Evals say quality holds there.",
              plainEnglish:
                "Send simple questions like 'what's the baggage limit?' to the cheapest model. Our mock tests show it answers those just as well.",
            },
            {
              speaker: "Finance Manager",
              text: "Great. So cost per conversation is the number I should track, not total spend.",
              plainEnglish:
                "Track what each customer conversation costs. Total spend can grow for good reasons (more customers); cost per conversation shows whether we're being efficient.",
            },
          ],
        },
      ],
      realWorldApplication: {
        forWork:
          "When someone proposes an AI feature, ask three questions: How many requests a month? Which model tier? What's the cost per request? It's the AI equivalent of asking about the electricity load before buying an AC.",
        forLearning:
          "Indian-language text often uses more tokens per word than English: in 2024, Sarvam reported 4–8 tokens per word for Indian scripts on many models, against about 1.4 for English. Newer models are narrowing the gap, but a Hindi product can still cost more to run than an English one.",
      },
      jargonCard: {
        term: "Cost per Token (Unit Economics)",
        oneLineAnalogy:
          "Your electricity bill for AI: tokens used × price per token, where output 'units' cost more than input.",
        meetingDropLine:
          "\"What's our cost per conversation on the top tier, and how much do we save if we route FAQs to a budget model?\"",
      },
      quiz: [
        {
          id: "q5-4-1",
          scenario: "How do most companies pay when they build an AI model into their product?",
          options: [
            {
              id: "a",
              text: "Per token: a price per million tokens read, and a higher one per million written.",
              isCorrect: true,
              analogyFeedback: "Correct. Units on the meter, with a higher slab rate for writing.",
            },
            {
              id: "b",
              text: "One fixed price forever, however much they use.",
              isCorrect: false,
              analogyFeedback: "Consumer apps often have flat monthly plans, but building AI into a product is usually pay-per-use.",
            },
            {
              id: "c",
              text: "Per employee who uses the product.",
              isCorrect: false,
              analogyFeedback: "That's how some software subscriptions work, not how AI model usage is typically billed.",
            },
          ],
        },
        {
          id: "q5-4-2",
          scenario:
            "Using the calculator's defaults, roughly how much more does the top tier cost than the budget tier for the same traffic?",
          options: [
            { id: "a", text: "About 2×", isCorrect: false, analogyFeedback: "Much more than that. Look at the per-token prices: $10 vs $0.10 for input." },
            { id: "b", text: "About 100×", isCorrect: true, analogyFeedback: "Yes. Same customers, same questions, a 100× difference in the bill. That's why model choice is a business decision." },
            { id: "c", text: "They cost the same", isCorrect: false, analogyFeedback: "Not even close. The tiers are priced very differently." },
          ],
        },
        {
          id: "q5-4-3",
          scenario: "The AI bill tripled but customer numbers didn't change. What's the most likely cause?",
          options: [
            {
              id: "a",
              text: "Each request started sending or generating much more text (more tokens).",
              isCorrect: true,
              analogyFeedback: "Right. Same number of rooms, but the AC is now on all day. Check tokens per request first.",
            },
            {
              id: "b",
              text: "The internet got more expensive.",
              isCorrect: false,
              analogyFeedback: "AI bills follow tokens and model choice, not internet prices.",
            },
          ],
        },
        {
          id: "q5-4-4",
          scenario: "Which change would cut costs the most for simple FAQ questions, if evals show quality holds?",
          options: [
            {
              id: "a",
              text: "Route them to a budget-tier model.",
              isCorrect: true,
              analogyFeedback: "Exactly. Don't run the AC to cool an empty room. Use the cheapest model that passes your mock test.",
            },
            {
              id: "b",
              text: "Make the answers longer and more detailed.",
              isCorrect: false,
              analogyFeedback: "Longer answers mean more output tokens, the most expensive kind.",
            },
            {
              id: "c",
              text: "Attach more documents to every question, just in case.",
              isCorrect: false,
              analogyFeedback: "More input tokens on every request raises the bill. Send only what's relevant.",
            },
          ],
        },
      ],
    },
  ],
};

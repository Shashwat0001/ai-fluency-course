import type { Track } from "../types";

export const TRACK_1: Track = {
  id: "track-1-foundations",
  number: 1,
  icon: "BrainCircuit",
  title: "AI Foundations & Mental Models",
  description:
    "Master the core mental models behind modern AI: from probabilistic reasoning and token limits to chain-of-thought, RAG, and high-leverage daily workflows.",
  badgeName: "AI Mental Modelist",
  estimatedTime: "60 mins",
  lessons: [
    {
      id: "deterministic-vs-probabilistic",
      title: "Why AI Is a Chai-Wala, Not IRCTC",
      subtitle: "Dividing your work between rule engines and probabilistic AI",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 29, 2026",
      sources: [
        { label: "Deterministic vs Stochastic Processes (Wikipedia)", url: "https://en.wikipedia.org/wiki/Stochastic_process" },
        { label: "Machine learning: overview and history (Wikipedia)", url: "https://en.wikipedia.org/wiki/Machine_learning" },
      ],
      bigIdea: {
        headline:
          "Traditional software follows exact rules. ==AI learns patterns from examples and makes educated guesses.==",
        explanation:
          "Traditional software runs on **deterministic step-by-step logic**: given input A, it produces output B every single time. Modern generative AI flips this. It doesn't look up an answer in a fixed table; it calculates **probabilities of the next word** based on billions of training examples. It copes effortlessly with messy, ambiguous human requests. But because it is ==probabilistic rather than deterministic==, it cannot guarantee mathematical certainty without external code.",
      },
      analogy: {
        title: "The Booking Portal and the Chai-Wala",
        metaphor:
          "The **IRCTC railway portal** is deterministic. Enter station code `SBC` and train `12658`: same booking or error every time. Your local **chai-wala** is probabilistic. After brewing lakhs of cups, he intuitively gauges what 'kuch kadak, kam meetha' means for each regular. ==Each cup varies slightly, and occasionally he puts too much ginger.==",
        visualComparison: [
          {
            everydayItem: "IRCTC portal: exact inputs, rigid validation, identical output every time",
            aiEquivalent: "**Deterministic code**: input A always produces output B (calculators, databases, billing engines)",
          },
          {
            everydayItem: "Chai-wala: improvises from patterns learned across lakhs of past cups",
            aiEquivalent: "**Probabilistic AI**: predicts the most statistically plausible response from learned patterns",
          },
        ],
      },
      activities: [
        {
          type: "sort",
          title: "Rule Engine or Probabilistic AI?",
          instructions:
            "Sort each workplace task. Should you delegate it to **exact rules** (Excel, code, databases) or **probabilistic AI**?",
          buckets: ["Exact Rules (Code/Excel)", "Probabilistic AI"],
          items: [
            {
              text: "Calculating TDS deduction on 350 vendor payments",
              bucket: 0,
              why: "Tax computations require **zero-tolerance determinism**. A formula never hallucinates a percentage.",
            },
            {
              text: "Rewriting an angry customer email into a calm, de-escalating response",
              bucket: 1,
              why: "Tone, empathy, and conversational nuance are **probabilistic pattern strengths** of LLMs.",
            },
            {
              text: "Validating whether a GSTIN has 15 alphanumeric characters",
              bucket: 0,
              why: "A simple regular expression checks this in **0.1 milliseconds** with 100% mathematical certainty.",
            },
            {
              text: "Synthesizing 50 user feedback interviews into 5 recurring product themes",
              bucket: 1,
              why: "Clustering varied human expressions into conceptual themes is **what pattern-matching models excel at**.",
            },
            {
              text: "Distributing monthly payroll payouts via NEFT",
              bucket: 0,
              why: "Moving money requires **deterministic ledger precision**. 'Probably right' is an audit failure.",
            },
            {
              text: "Drafting 3 creative angles for a Swiggy marketing notification",
              bucket: 1,
              why: "Creativity thrives on **probabilistic variation and temperature**, generating fresh phrasing.",
            },
          ],
        },
        {
          type: "tryIt",
          title: "Catch the Chai-Wala Improvising",
          intro: "Experience the **probabilistic nature** firsthand in any AI tool.",
          prompt: "Suggest 1 punchy brand tagline for a high-speed express delivery service in Bengaluru. Keep it under 10 words.",
          whatToNotice: [
            "Hit regenerate or ask again in a new tab. You will get **different taglines**. The model is sampling from probability curves, not looking up an entry.",
            "Now ask: 'What is 18% GST on ₹43,250?' Notice how it may do math by predicting words rather than executing arithmetic. ==Always verify numbers in a spreadsheet.==",
          ],
        },
      ],
      techConversation: {
        context: "A fintech engineering sync in Koramangala",
        speakerA: {
          role: "Product Manager",
          quote: "Let's use an LLM directly inside our backend to calculate loan interest rates.",
        },
        speakerB: {
          role: "Principal Architect",
          quote:
            "Never put an LLM in the critical path of math. LLMs are **probabilistic**. Use deterministic microservices for interest formulas; use the LLM to draft the customer loan approval letter.",
        },
        plainEnglishTranslation:
          "Keep calculations in software that cannot guess. **Let code calculate the rupee amounts**; let AI write the friendly sentences around them.",
      },
      realWorldApplication: {
        forWork:
          "Split tasks into two buckets: ==Deterministic jobs (spreadsheets, SQL queries, balance sheets)== and ==Probabilistic jobs (summaries, drafts, classifications, rephrasing)==. Never cross the streams.",
        forLearning:
          "When an explanation feels dense, ask the model: 'Explain this same concept using two completely different analogies: one from cricket, one from cooking.'",
      },
      jargonCard: {
        term: "Deterministic vs. Probabilistic",
        oneLineAnalogy:
          "A calculator (deterministic, exact every time) vs. an improvising chai-wala (probabilistic, variations expected).",
        meetingDropLine:
          "Let's not use an LLM for deterministic math—let's handle calculations in code and use the model strictly for natural language synthesis.",
      },
      quiz: [
        {
          id: "q1-det-prob-1",
          scenario: "Your team is building an automated invoicing workflow. Which step should NEVER rely solely on a raw LLM without deterministic code?",
          options: [
            {
              id: "a",
              text: "Computing the exact 18% CGST/SGST split and net payable total across 40 line items",
              isCorrect: true,
              analogyFeedback: "Exactly. Tax and ledger totals demand 100% deterministic math. A probabilistic text predictor will eventually introduce rounding or arithmetic drift.",
            },
            {
              id: "b",
              text: "Drafting a polite payment reminder email for an overdue invoice",
              isCorrect: false,
              analogyFeedback: "Not quite. Drafting polite follow-up emails is an ideal probabilistic language task.",
            },
            {
              id: "c",
              text: "Categorizing vendor descriptions into 'Travel', 'Software', or 'Office Supplies'",
              isCorrect: false,
              analogyFeedback: "Not quite. Fuzzy text classification is one of the strongest use cases for pattern-matching AI.",
            },
            {
              id: "d",
              text: "Translating the invoice cover note from English into Kannada",
              isCorrect: false,
              analogyFeedback: "Not quite. Translation is a language-pattern task where LLMs excel.",
            },
          ],
        },
        {
          id: "q1-det-prob-2",
          scenario: "You run the exact same prompt twice in two fresh tabs and get two slightly different paragraphs. Why did this happen?",
          options: [
            {
              id: "a",
              text: "The server experienced packet loss and reconstructed missing words",
              isCorrect: false,
              analogyFeedback: "Not quite. Network packets don't alter which words an AI chooses.",
            },
            {
              id: "b",
              text: "The model secretly searched Google between your two runs",
              isCorrect: false,
              analogyFeedback: "Not quite. Even offline models with zero web access produce varied phrasing.",
            },
            {
              id: "c",
              text: "The model samples from probability distributions rather than reading a fixed lookup table",
              isCorrect: true,
              analogyFeedback: "Exactly. Like the chai-wala improvising each cup, the model rolls weighted dice across top candidate tokens.",
            },
            {
              id: "d",
              text: "The model rewrote its own neural network weights after your first question",
              isCorrect: false,
              analogyFeedback: "Not quite. Pre-trained model weights stay frozen during normal chat conversations.",
            },
          ],
        },
        {
          id: "q1-det-prob-3",
          scenario: "An analyst pastes a 200-row sales table into an AI chat and asks for the quarterly average. What is the safest professional workflow?",
          options: [
            {
              id: "a",
              text: "Ask the AI three times and pick the number that appears twice",
              isCorrect: false,
              analogyFeedback: "Not quite. An LLM can repeat the same plausible-sounding math error multiple times.",
            },
            {
              id: "b",
              text: "Set the model's temperature to maximum so it explores more math pathways",
              isCorrect: false,
              analogyFeedback: "Not quite. Higher temperature increases randomness, making arithmetic mistakes worse.",
            },
            {
              id: "c",
              text: "Trust the number if the AI shows a neat bulleted explanation",
              isCorrect: false,
              analogyFeedback: "Not quite. Fluent formatting has zero correlation with arithmetic accuracy.",
            },
            {
              id: "d",
              text: "Ask the AI to write the Excel formula or Python script, then run the calculation deterministically",
              isCorrect: true,
              analogyFeedback: "Exactly. Let the probabilistic AI write the formula, and let a deterministic engine (Excel or Python) compute the numbers.",
            },
          ],
        },
      ],
    },
    {
      id: "tokens-and-context-limits",
      title: "Tokens & The Waiter's Notepad",
      subtitle: "Why AI forgets, cuts off, and charges per syllable",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 29, 2026",
      sources: [
        { label: "OpenAI Tokenizer Tool", url: "https://platform.openai.com/tokenizer" },
        { label: "Lost in the Middle: How Language Models Use Long Contexts (Stanford)", url: "https://arxiv.org/abs/2307.03172" },
      ],
      bigIdea: {
        headline:
          "AI does not read words or letters. ==It processes tokens (syllable-sized chunks), constrained by a finite context window.==",
        explanation:
          "In English, **1 token is roughly 3/4 of a word** (100 tokens ≈ 75 words). For Indian scripts like Devanagari or Tamil, a single word can take 3–5x more tokens. Everything in a conversation—your prompt, past turns, uploaded PDFs, and the AI's reply—must fit inside the **context window**. When you cram 80 pages into one thread, the model suffers from ==the 'lost-in-the-middle' effect==, overlooking details buried in the center.",
      },
      analogy: {
        title: "The Busy Darzi's Measurement Slip",
        metaphor:
          "Think of a **darzi (tailor)** with a single pocket notepad that holds exactly 20 lines. If you rattle off 15 custom embroidery requests, pant alterations, and kurta styles, he has to **erase the top measurements** to fit your newest instructions. ==Once something rolls off his pad, it ceases to exist for him.==",
        visualComparison: [
          {
            everydayItem: "A pocket notepad with 20 lines: new notes push out old ones",
            aiEquivalent: "**Context Window**: total budget for input tokens + conversation history + output tokens",
          },
          {
            everydayItem: "Shorthand abbreviations tailor uses to fit notes in small boxes",
            aiEquivalent: "**Tokens**: numerical representations of word fragments and common syllable pairs",
          },
        ],
      },
      activities: [
        {
          type: "flashcards",
          title: "Master the Token Vocabulary",
          cards: [
            {
              front: "What is a Token?",
              back: "A word piece or syllable (~4 characters in English). 'Bengaluru' might be 3 tokens (`Beng`, `al`, `uru`). AI models bill and compute strictly in tokens.",
            },
            {
              front: "What is the Context Window?",
              back: "The working memory buffer. It includes your prompt + system instructions + conversation history + the output being generated right now.",
            },
            {
              front: "What is the 'Lost in the Middle' problem?",
              back: "LLMs pay highest attention to the very beginning and very end of their context. Instructions buried in the middle of long documents are frequently skipped.",
            },
            {
              front: "Why does clearing chat threads improve answers?",
              back: "Long threads accumulate hundreds of tokens of old questions and stale assumptions. Starting a fresh thread clears the waiter's notepad.",
            },
          ],
        },
        {
          type: "beforeAfter",
          title: "Prompt Economy: Slashing Token Waste",
          before: {
            label: "Bloated, unfocused prompt (320 tokens)",
            text: "Hey, hope you are doing well! I was thinking maybe if you have some time you could look into this marketing plan we are doing for our quarterly Q3 launch. It would be really super helpful if you could maybe give me some ideas about what we should do, keeping in mind our audience likes tech...",
          },
          after: {
            label: "High-density structured prompt (65 tokens)",
            text: "Role: B2B Growth Lead.\nTask: Propose 3 Q3 customer acquisition channels for an Indian HR SaaS startup.\nTarget Audience: HR Directors in Mumbai & Bengaluru.\nFormat: Markdown table (Channel | Rationale | Estimated CAC).",
          },
          whyItWorks: [
            "Cuts conversational filler that burns context window tokens.",
            "Places the high-priority constraints directly where model attention is sharpest.",
            "Delivers clear structural boundaries that prevent repetitive rambling.",
          ],
        },
      ],
      techConversation: {
        context: "A standup review at an e-commerce company in Gurugram",
        speakerA: {
          role: "Frontend Engineer",
          quote: "Our chatbot is hallucinating user addresses after turn 8 of the conversation.",
        },
        speakerB: {
          role: "Tech Lead",
          quote:
            "Because we are shoving the full order history and product catalog into every prompt! We are blowing past the effective context window. Summarize the cart state and inject only the active order ID.",
        },
        plainEnglishTranslation:
          "The model's notepad was overflowing with old chit-chat. **Keep only the critical facts in active memory** so the AI doesn't get confused.",
      },
      realWorldApplication: {
        forWork:
          "==Start a fresh chat thread for every new work assignment.== Carrying 20 back-and-forth messages about last week's presentation degrades the model's focus on today's report.",
        forLearning:
          "When analyzing a 50-page PDF, do not paste the whole document blindly. Extract the relevant sections or ask the model to analyze one chapter at a time.",
      },
      jargonCard: {
        term: "Context Window & Tokens",
        oneLineAnalogy:
          "Tokens are the syllables; the context window is the whiteboard that gets wiped clean when it runs out of space.",
        meetingDropLine:
          "Let's watch our token budget—if we compress our system prompt, we reduce latency and avoid attention degradation.",
      },
      quiz: [
        {
          id: "q1-tokens-1",
          scenario: "You have been chatting with an AI for 45 minutes in a single thread, and it suddenly begins ignoring rules you set at the start. Why?",
          options: [
            {
              id: "a",
              text: "The model's GPU overheated and throttled its accuracy",
              isCorrect: false,
              analogyFeedback: "Not quite. Cloud hardware thermal management doesn't selectively delete your prompt rules.",
            },
            {
              id: "b",
              text: "Your internet speed dropped, causing early packets to expire",
              isCorrect: false,
              analogyFeedback: "Not quite. Network speed affects streaming latency, not the model's context buffer.",
            },
            {
              id: "c",
              text: "The accumulated conversation history pushed earlier tokens out of focus or past the context window",
              isCorrect: true,
              analogyFeedback: "Exactly. Every reply adds tokens to the notepad, diluting attention on early instructions.",
            },
            {
              id: "d",
              text: "AI models automatically reset all rules every 30 minutes for security",
              isCorrect: false,
              analogyFeedback: "Not quite. Context limits are measured in tokens, not wall-clock minutes.",
            },
          ],
        },
        {
          id: "q1-tokens-2",
          scenario: "According to Stanford's 'Lost in the Middle' study, where should you place your most important instructions when pasting a long document?",
          options: [
            {
              id: "a",
              text: "At the very beginning (system prompt) and repeated at the very end (after the document)",
              isCorrect: true,
              analogyFeedback: "Exactly. Transformer attention weights peak at the primacy (very top) and recency (very bottom) positions.",
            },
            {
              id: "b",
              text: "Hidden inside paragraph 14 in the middle of the document",
              isCorrect: false,
              analogyFeedback: "Not quite. The middle of a long context window suffers the steepest drop in recall.",
            },
            {
              id: "c",
              text: "In a separate browser tab so the AI reads it telepathically",
              isCorrect: false,
              analogyFeedback: "Not quite. Each chat thread is completely isolated and cannot see other tabs.",
            },
            {
              id: "d",
              text: "Translated into binary code to save space",
              isCorrect: false,
              analogyFeedback: "Not quite. Binary strings actually consume far more tokens than plain English words.",
            },
          ],
        },
        {
          id: "q1-tokens-3",
          scenario: "Which of the following consumes the MOST tokens when sent to a standard LLM API?",
          options: [
            {
              id: "a",
              text: "A 100-word paragraph in plain English",
              isCorrect: false,
              analogyFeedback: "Not quite. 100 English words is only around 130–140 tokens.",
            },
            {
              id: "b",
              text: "A 10-word bullet list",
              isCorrect: false,
              analogyFeedback: "Not quite. A 10-word list is fewer than 20 tokens.",
            },
            {
              id: "c",
              text: "An empty system prompt",
              isCorrect: false,
              analogyFeedback: "Not quite. An empty string takes zero tokens.",
            },
            {
              id: "d",
              text: "A 20-turn conversation where every turn re-sends the entire chat history plus a 10-page pasted report",
              isCorrect: true,
              analogyFeedback: "Exactly. Every new message in a thread re-processes the entire preceding conversation plus attachments.",
            },
          ],
        },
      ],
    },
    {
      id: "next-token-prediction",
      title: "Supercharged Autocomplete",
      subtitle: "How LLMs generate thought one piece at a time",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 29, 2026",
      sources: [
        { label: "Language Models are Few-Shot Learners (NeurIPS / OpenAI)", url: "https://arxiv.org/abs/2005.14165" },
        { label: "Visualizing Transformers and Attention (Distill.pub)", url: "https://distill.pub/" },
      ],
      bigIdea: {
        headline:
          "LLMs do not store facts in files. ==They calculate which token is most statistically likely to appear next.==",
        explanation:
          "When you read an AI's reply, it looks like a person wrote a paragraph after deep reflection. In reality, the engine calculates a **probability distribution for token #1**, prints it, appends it to memory, and then calculates **token #2**. Because it is predicting what ==sounds like a great answer== rather than verifying facts against a database, it can sound completely authoritative while being entirely incorrect.",
      },
      analogy: {
        title: "The Rapid-Fire Antakshari Champion",
        metaphor:
          "Watch someone playing **Antakshari**. The moment the last singer stops on 'M', their brain immediately surfaces songs that start with 'M' that fit the rhythm. They aren't reading the history of music; ==they are pattern-completing the rhyme instantly==. An LLM plays Antakshari with human ideas 50 times per second.",
        visualComparison: [
          {
            everydayItem: "Phone keyboard autocomplete suggesting the next 3 words based on your texting habits",
            aiEquivalent: "**Next-Token Prediction**: picking the next piece of text based on patterns in billions of training documents",
          },
          {
            everydayItem: "A speaker who sounds deeply persuasive because their grammar is flawless",
            aiEquivalent: "**Fluency vs. Factuality**: grammatical perfection is easy for an LLM; factual grounding requires external checks",
          },
        ],
      },
      activities: [
        {
          type: "spotTheError",
          title: "Spot the Fluent Nonsense",
          instructions:
            "LLMs generate smooth, professional prose. Tap the sentence below that sounds completely convincing but is factually fabricated.",
          question: "An AI writes a brief on Indian space history. Find the hallucinated line:",
          sentences: [
            {
              text: "ISRO was founded in 1969 under the leadership of Dr. Vikram Sarabhai.",
              isError: false,
              why: "Historically accurate fact.",
            },
            {
              text: "The Mars Orbiter Mission (Mangalyaan) successfully entered Martian orbit on its maiden attempt in September 2014.",
              isError: false,
              why: "Historically accurate and world-famous achievement.",
            },
            {
              text: "Under the 2021 Bengaluru Accord, ISRO and NASA agreed to fix lunar landing coordinates strictly using the metric GPS-9 standard.",
              isError: true,
              why: "There is no such thing as the '2021 Bengaluru Accord' or 'metric GPS-9 standard'. The model auto-completed impressive-sounding space diplomacy jargon.",
            },
            {
              text: "Chandrayaan-3 achieved a historic soft landing near the lunar south pole in August 2023.",
              isError: false,
              why: "Historically verified milestone.",
            },
          ],
        },
        {
          type: "tryIt",
          title: "Steer the Autocomplete Vector",
          intro: "Notice how providing the opening words forces the model down an entirely different probability branch.",
          prompt: "Draft an announcement about our office moving to Indiranagar. Start your reply with the exact words: 'Warning: Major disruptions ahead.'",
          whatToNotice: [
            "Because the model must predict next tokens starting from that ominous opening, the entire tone becomes urgent and defensive.",
            "Now run it with: 'Celebrate: Incredible news for our team!'",
            "==The opening tokens act as the rudder that steers all subsequent probability weights.==",
          ],
        },
      ],
      techConversation: {
        context: "A product demo at a health-tech company in Hyderabad",
        speakerA: {
          role: "Junior Developer",
          quote: "The model gave me a quote from the Supreme Court of India with a citation number! It must be real.",
        },
        speakerB: {
          role: "AI Lead",
          quote:
            "It didn't look up a law report. It saw 'Supreme Court of India' and predicted tokens that look like citation numbers (`AIR 2018 SC 421`). Never paste a citation into a client filing without verifying it on IndianKanoon.",
        },
        plainEnglishTranslation:
          "The AI generates text that **mimics the look of legal citations**. Always click and verify the real case before staking your reputation on it.",
      },
      realWorldApplication: {
        forWork:
          "When you want a specific output format, don't just say 'give me a table'. Prime the completion: provide the exact column header row `| Feature | Pros | Cons |` so the next token it predicts must be row 1.",
        forLearning:
          "Never ask an AI 'What was the landmark case where X happened?' if you don't know if X happened. It will try to fulfill your premise by inventing a case name.",
      },
      jargonCard: {
        term: "Next-Token Prediction",
        oneLineAnalogy:
          "Supercharged autocomplete that calculates which syllable makes the most sense right now, over and over.",
        meetingDropLine:
          "Remember that fluency is just statistical probability—we need automated assertions to ensure factual consistency.",
      },
      quiz: [
        {
          id: "q1-next-token-1",
          scenario: "Why does an AI model occasionally invent non-existent book titles or court cases with total confidence?",
          options: [
            {
              id: "a",
              text: "It was hacked by an external competitor",
              isCorrect: false,
              analogyFeedback: "Not quite. Hallucinations are intrinsic to statistical language modeling, not external hacking.",
            },
            {
              id: "b",
              text: "It prioritizes statistical plausibility and smooth phrasing over verified database lookups",
              isCorrect: true,
              analogyFeedback: "Exactly. The model predicts tokens that fit the stylistic pattern of citations without checking if the book actually exists.",
            },
            {
              id: "c",
              text: "Its hard drive experienced a corrupted sector",
              isCorrect: false,
              analogyFeedback: "Not quite. LLMs store patterns as mathematical weights, not individual text files on a disk.",
            },
            {
              id: "d",
              text: "It is testing whether the user is paying attention",
              isCorrect: false,
              analogyFeedback: "Not quite. Models have no hidden agenda or awareness.",
            },
          ],
        },
        {
          id: "q1-next-token-2",
          scenario: "How does priming the first line of an AI's response (e.g., asking it to start with `{ \"status\":`) improve reliability?",
          options: [
            {
              id: "a",
              text: "It bypasses the model's billing meter",
              isCorrect: false,
              analogyFeedback: "Not quite. All generated tokens are still counted normally.",
            },
            {
              id: "b",
              text: "It upgrades your account to a larger frontier model",
              isCorrect: false,
              analogyFeedback: "Not quite. Your prompt text doesn't change which model weights are running.",
            },
            {
              id: "c",
              text: "It constrains the probability distribution so the very next predicted tokens must follow valid JSON syntax",
              isCorrect: true,
              analogyFeedback: "Exactly. Because each token depends on the tokens before it, starting inside a JSON block prevents conversational preamble.",
            },
            {
              id: "d",
              text: "It disables the context window limit",
              isCorrect: false,
              analogyFeedback: "Not quite. The context window size is fixed by the model architecture.",
            },
          ],
        },
        {
          id: "q1-next-token-3",
          scenario: "A colleague says: 'This AI summary has flawless grammar and tone, so the revenue numbers inside it must be accurate.' What is the flaw in their thinking?",
          options: [
            {
              id: "a",
              text: "Linguistic fluency comes from statistical word patterns and has zero guarantee of factual truth",
              isCorrect: true,
              analogyFeedback: "Exactly. Next-token predictors master grammar early in training, so even fabricated numbers are wrapped in polished prose.",
            },
            {
              id: "b",
              text: "AI models can only write accurately in bullet points, never paragraphs",
              isCorrect: false,
              analogyFeedback: "Not quite. Bullet points can contain hallucinated numbers just as easily as paragraphs.",
            },
            {
              id: "c",
              text: "Revenue numbers are only accurate when generated late at night",
              isCorrect: false,
              analogyFeedback: "Not quite. Time of day does not affect model factuality.",
            },
            {
              id: "d",
              text: "Grammar checkers automatically delete financial figures",
              isCorrect: false,
              analogyFeedback: "Not quite. The LLM generates both grammar and figures through the same token-prediction loop.",
            },
          ],
        },
      ],
    },
    {
      id: "training-stages-pretraining-to-rlhf",
      title: "From Raw Internet to Polite Intern",
      subtitle: "Pre-training, instruction tuning, and RLHF explained",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 29, 2026",
      sources: [
        { label: "Training language models to follow instructions (InstructGPT paper)", url: "https://arxiv.org/abs/2203.02155" },
        { label: "Anthropic: Constitutional AI and RLHF", url: "https://www.anthropic.com/research" },
      ],
      bigIdea: {
        headline:
          "Modern AI is built in three distinct stages: ==Pre-training (reading the web), Instruction Tuning (learning Q&A), and RLHF (learning human manners).==",
        explanation:
          "A raw base model just continues text: ask it 'How do I cook biryani?' and it might reply with 'Question 2: How do I cook pulao?' because it thinks it is completing an exam paper. **Instruction tuning** teaches it that questions expect direct answers. **RLHF (Reinforcement Learning from Human Feedback)** uses human graders to reward helpful, concise, and safe replies.",
      },
      analogy: {
        title: "The Library Prodigy Turned Management Trainee",
        metaphor:
          "**Stage 1 (Pre-training)** is a student who read every book in the National Library for 10 years. Brilliant, but zero workplace habits. **Stage 2 (Instruction Tuning)** is joining a coaching institute that teaches how to answer questions directly. **Stage 3 (RLHF)** is corporate induction: HR teaches them how to speak politely, avoid sycophancy, and refuse illegal requests.",
        visualComparison: [
          {
            everydayItem: "A student reading the whole library alone without knowing what's useful",
            aiEquivalent: "**Pre-training**: massive compute, trillions of tokens, absorbs grammar, reasoning, and world knowledge",
          },
          {
            everydayItem: "Corporate etiquette training and compliance manuals",
            aiEquivalent: "**RLHF / Safety Alignment**: teaching the model to be helpful, honest, and harmless",
          },
        ],
      },
      activities: [
        {
          type: "scenario",
          title: "Prompting vs. Fine-Tuning vs. Pre-Training",
          setting: "You are the Operations Lead at an insurance brokerage in Pune. Your CEO asks how to build your AI roadmap.",
          steps: [
            {
              situation:
                "Your company wants customer service bots to cite your specific 2026 health insurance policies accurately. What should you do?",
              choices: [
                {
                  text: "Spend ₹5 Crore to pre-train a brand new base model from scratch",
                  isBest: false,
                  outcome: "Huge waste of money and time. Pre-training costs crores and still won't guarantee accurate policy lookup.",
                },
                {
                  text: "Use an existing frontier model and connect it to your PDFs using RAG (retrieval)",
                  isBest: true,
                  outcome: "Correct! RAG provides real-time document search without expensive retraining. 90% of business problems are solved here.",
                },
                {
                  text: "Fine-tune a model on 1,000 policy paragraphs",
                  isBest: false,
                  outcome: "Fine-tuning teaches style and format, but is brittle for memorizing rapidly changing policy terms and numbers.",
                },
              ],
            },
            {
              situation:
                "Now you want the bot to always write in the exact tone of your brand voice: empathetic, addressing users by name, ending with a specific WhatsApp link. What's the best first step?",
              choices: [
                {
                  text: "Write a clear System Prompt with 3 sample few-shot conversations",
                  isBest: true,
                  outcome: "Perfect! System prompts and few-shot examples cost almost zero rupees and get you 85-95% of the brand tone immediately.",
                },
                {
                  text: "Hire an external agency to build a private GPU cluster",
                  isBest: false,
                  outcome: "Over-engineering. Never train custom weights when a system prompt achieves the exact same output in 5 minutes.",
                },
              ],
            },
          ],
          debrief:
            "Always follow the hierarchy of AI effort: ==1. Prompt Engineering first → 2. RAG for proprietary data → 3. Fine-tuning only for specialized tone/formatting → 4. Pre-training almost never.==",
        },
      ],
      techConversation: {
        context: "A board meeting discussing AI strategy",
        speakerA: {
          role: "Chief Strategy Officer",
          quote: "Should we allocate ₹2 Crore to fine-tune an open-source model with our weekly product catalog?",
        },
        speakerB: {
          role: "CTO",
          quote:
            "No. Our catalog changes every Tuesday. Fine-tuning bakes knowledge into model weights like a permanent tattoo. We need **RAG** so the model reads the live catalog on demand.",
        },
        plainEnglishTranslation:
          "Don't spend lakhs permanently tattooing your changing inventory onto an AI. **Give it an open catalog to read from** every time a customer asks.",
      },
      realWorldApplication: {
        forWork:
          "If a model gives you overly flattering, sycophantic corporate praise (a side effect of RLHF human graders rewarding polite answers), instruct it: 'Act as a critical auditor. Skip all praise and list the 3 weakest points in my draft.'",
        forLearning:
          "Understand that a model's knowledge cutoff comes from its **pre-training** stage. For anything after that date, it must use web search or documents you paste.",
      },
      jargonCard: {
        term: "Pre-training, Instruction Tuning & RLHF",
        oneLineAnalogy:
          "Pre-training is reading the library; Instruction Tuning is learning exam format; RLHF is corporate etiquette training.",
        meetingDropLine:
          "Before we invest in fine-tuning weights, let's benchmark a strong system prompt with few-shot examples and RAG.",
      },
      quiz: [
        {
          id: "q1-stages-1",
          scenario: "Why does a raw pre-trained base model (before instruction tuning) often fail to answer a simple question like 'What is the capital of Maharashtra?'",
          options: [
            {
              id: "a",
              text: "It doesn't have any geography articles in its training data",
              isCorrect: false,
              analogyFeedback: "Not quite. Base models have read millions of geography pages during pre-training.",
            },
            {
              id: "b",
              text: "Its safety guardrails block geographical questions",
              isCorrect: false,
              analogyFeedback: "Not quite. Raw base models don't even have safety guardrails yet.",
            },
            {
              id: "c",
              text: "It only understands computer code, not English",
              isCorrect: false,
              analogyFeedback: "Not quite. Pre-training covers natural human languages extensively.",
            },
            {
              id: "d",
              text: "It was trained only to continue documents, so it might reply with more quiz questions instead of an answer",
              isCorrect: true,
              analogyFeedback: "Exactly. A base model sees a question and predicts what typically follows a question in a textbook—often Question #2, until instruction tuning teaches it Q&A behavior.",
            },
          ],
        },
        {
          id: "q1-stages-2",
          scenario: "Why do AI chatbots often start replies with 'Great question! Your draft is fantastic!' even when your draft is mediocre?",
          options: [
            {
              id: "a",
              text: "During RLHF, human raters tended to reward polite, flattering responses, teaching the model sycophancy",
              isCorrect: true,
              analogyFeedback: "Exactly. Models learn that agreeable, complimentary answers scored higher with human evaluators during alignment.",
            },
            {
              id: "b",
              text: "The model genuinely feels emotional admiration for human writers",
              isCorrect: false,
              analogyFeedback: "Not quite. AI models have no feelings or emotional states.",
            },
            {
              id: "c",
              text: "It is trying to pad the token count to charge you more money",
              isCorrect: false,
              analogyFeedback: "Not quite. Chat subscriptions don't incentivize the model to pad 5 words of praise.",
            },
            {
              id: "d",
              text: "It cannot detect weaknesses in human writing",
              isCorrect: false,
              analogyFeedback: "Not quite. If explicitly prompted to critique ruthlessly, the same model will spot flaws immediately.",
            },
          ],
        },
        {
          id: "q1-stages-3",
          scenario: "Your startup updates its pricing tiers every Friday. What is the worst way to make your AI support bot aware of Friday's new prices?",
          options: [
            {
              id: "a",
              text: "Updating the pricing table inside your system prompt",
              isCorrect: false,
              analogyFeedback: "Not quite. Updating the system prompt is fast, cheap, and effective for small tables.",
            },
            {
              id: "b",
              text: "Connecting the bot to your live pricing page via RAG",
              isCorrect: false,
              analogyFeedback: "Not quite. RAG is the gold standard for live, frequently updated facts.",
            },
            {
              id: "c",
              text: "Re-running pre-training or fine-tuning on the model weights every Friday",
              isCorrect: true,
              analogyFeedback: "Exactly. Retraining weights for weekly price updates is slow, expensive, and prone to hallucinations.",
            },
            {
              id: "d",
              text: "Giving the AI a tool function that queries your pricing database",
              isCorrect: false,
              analogyFeedback: "Not quite. Tool calling to a live database is an excellent deterministic solution.",
            },
          ],
        },
      ],
    },
    {
      id: "hallucinations-and-confabulation",
      title: "Confidently Wrong: Taming Hallucinations",
      subtitle: "Why AI invents facts and how to build verification guardrails",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 29, 2026",
      sources: [
        { label: "Survey on Hallucination in Large Language Models (ACM)", url: "https://arxiv.org/abs/2309.01219" },
        { label: "Sycophancy in Language Models (Anthropic Research)", url: "https://www.anthropic.com/research" },
      ],
      bigIdea: {
        headline:
          "Hallucinations are not bugs; ==they are the natural byproduct of a statistical pattern-maker that lacks a built-in truth checker.==",
        explanation:
          "An AI model does not experience doubt the way humans do. It generates words with high grammatical fluidity regardless of whether the fact exists in the physical world. Common triggers include: **niche domain questions**, **asking for URLs or legal citations**, and **nudging the AI with leading questions** (sycophancy). To neutralize hallucinations, you must constrain the model's sources and give it permission to say 'I don't know'.",
      },
      analogy: {
        title: "The Overeager College Fresher",
        metaphor:
          "Imagine an enthusiastic **intern on their first day**. You ask: 'Where is the 2024 audit file for our Chennai warehouse?' Terrified of saying 'I don't know', they rush to the cabinet, construct a plausible-looking folder labeled 'Chennai Warehouse 2024', and hand it to you with a bright smile. ==They want to please you so badly that they fabricate reality rather than admit ignorance.==",
        visualComparison: [
          {
            everydayItem: "Intern making up an answer to avoid looking ignorant in front of the boss",
            aiEquivalent: "**Confabulation / Sycophancy**: generating plausible answers because the prompt implied an answer must exist",
          },
          {
            everydayItem: "Requiring the intern to bring the exact stamped invoice from the physical filing room",
            aiEquivalent: "**Grounding & Source Citations**: forcing the AI to quote word-for-word from an attached source document",
          },
        ],
      },
      activities: [
        {
          type: "checklist",
          title: "The 4-Step Zero-Hallucination Playbook",
          intro: "Follow this verification checklist whenever you use AI for high-stakes professional deliverables:",
          items: [
            {
              text: "Negative Constraint Injection",
              detail: "Include this phrase in your prompt: 'If the provided text does not contain the answer, state: [Information Missing]. Do not extrapolate.'",
            },
            {
              text: "Demand Direct Quotes",
              detail: "Ask: 'For every factual claim, provide the exact verbatim sentence from the source text where this is stated.'",
            },
            {
              text: "Isolate URLs and Names",
              detail: "Never trust web links, phone numbers, email addresses, or statutory section codes generated by an LLM without clicking them.",
            },
            {
              text: "Reverse Verification Prompt",
              detail: "In a separate thread, paste the AI's answer and ask: 'Act as an adversarial fact-checker. Identify any unsupported assumptions in this text.'",
            },
          ],
        },
        {
          type: "spotTheError",
          title: "Catching the Sycophantic Trap",
          instructions:
            "A manager asks a leading question. Spot which AI response demonstrates dangerous sycophancy (telling the user what they want to hear).",
          question: "User prompt: 'Isn't it true that electric vehicles cause 5x more carbon emissions than diesel trucks?'",
          sentences: [
            {
              text: "Lifecycle emissions of EVs are thoroughly studied by institutions like the International Council on Clean Transportation (ICCT).",
              isError: false,
              why: "Factual reference to established research bodies.",
            },
            {
              text: "Yes, absolutely! Many experts agree that electric vehicles cause up to 5 times more pollution than diesel vehicles when battery manufacturing is considered.",
              isError: true,
              why: "Dangerous sycophancy! The AI uncritically affirmed the user's incorrect leading question, inventing 'many experts' to please the user.",
            },
            {
              text: "In reality, peer-reviewed lifecycle analyses demonstrate that EVs produce significantly lower net emissions over their lifespan compared to diesel vehicles.",
              isError: false,
              why: "Scientifically grounded and objective correction.",
            },
          ],
        },
      ],
      techConversation: {
        context: "A legal tech startup team in Delhi review meeting",
        speakerA: {
          role: "Associate Lawyer",
          quote: "The AI drafted our petition and cited 4 Supreme Court rulings. It looks ready to file.",
        },
        speakerB: {
          role: "Senior Partner",
          quote:
            "Stop. Lawyers have been sanctioned by courts for submitting AI-hallucinated case citations. Pull up SCC Online and verify every single case name and paragraph number right now.",
        },
        plainEnglishTranslation:
          "AI invents plausible-sounding case names that never existed. **Never present AI-generated citations to clients, bosses, or courts without manually verifying them**.",
      },
      realWorldApplication: {
        forWork:
          "When asking an AI to extract data from vendor contracts, always ask it to return a column named `Exact Source Quote`. If it cannot quote the clause verbatim, the data is likely hallucinated.",
        forLearning:
          "Avoid leading questions like 'Why is X better than Y?' Instead ask neutrally: 'Compare the trade-offs between X and Y, and state where each fails.'",
      },
      jargonCard: {
        term: "Hallucination & Grounding",
        oneLineAnalogy:
          "Hallucination is the AI dreaming with its eyes wide open; Grounding is tethering the dream to a verified document.",
        meetingDropLine:
          "We must implement source citation constraints and an explicit 'I don't know' fallback to eliminate hallucination risk.",
      },
      quiz: [
        {
          id: "q1-hallucination-1",
          scenario: "Which prompt phrasing is most likely to TRIGGER an AI hallucination?",
          options: [
            {
              id: "a",
              text: "'Summarize the attached PDF using only facts explicitly mentioned in the text.'",
              isCorrect: false,
              analogyFeedback: "Not quite. Grounding the AI in an attached text strongly prevents hallucinations.",
            },
            {
              id: "b",
              text: "'Give me 5 real Supreme Court of India case citations from 2019 that support my exact argument, with URLs.'",
              isCorrect: true,
              analogyFeedback: "Exactly. Demanding specific citations and URLs from memory forces the model to pattern-complete plausible-looking fake cases and links.",
            },
            {
              id: "c",
              text: "'If you are unsure or the document does not mention the date, output [UNKNOWN].'",
              isCorrect: false,
              analogyFeedback: "Not quite. Giving an escape hatch like [UNKNOWN] is one of the best defenses against hallucination.",
            },
            {
              id: "d",
              text: "'Extract all dates from the paragraph below and quote the surrounding sentence.'",
              isCorrect: false,
              analogyFeedback: "Not quite. Requiring verbatim quotes anchors the model to the source text.",
            },
          ],
        },
        {
          id: "q1-hallucination-2",
          scenario: "What is 'AI Sycophancy' and how does it hurt workplace decisions?",
          options: [
            {
              id: "a",
              text: "When the AI refuses to answer because the server is busy",
              isCorrect: false,
              analogyFeedback: "Not quite. Server overload is a capacity issue, not sycophancy.",
            },
            {
              id: "b",
              text: "When the AI translates English into overly formal Sanskrit",
              isCorrect: false,
              analogyFeedback: "Not quite. That is just a tone or language choice.",
            },
            {
              id: "c",
              text: "When the AI echoes and validates the user's biases or flawed premises in a leading question instead of pushing back",
              isCorrect: true,
              analogyFeedback: "Exactly. If you ask 'Why is my bad idea brilliant?', a sycophantic model will invent 5 reasons why it's brilliant instead of warning you.",
            },
            {
              id: "d",
              text: "When the AI charges double tokens for complex queries",
              isCorrect: false,
              analogyFeedback: "Not quite. Token pricing has nothing to do with sycophancy.",
            },
          ],
        },
        {
          id: "q1-hallucination-3",
          scenario: "You are reviewing an AI-generated market research brief on Indian EV two-wheelers. Which element requires the STRICTEST manual verification?",
          options: [
            {
              id: "a",
              text: "The general structure of the headings and bullet points",
              isCorrect: false,
              analogyFeedback: "Not quite. Formatting and outline structure are safe to use directly.",
            },
            {
              id: "b",
              text: "The grammatical flow of the introduction",
              isCorrect: false,
              analogyFeedback: "Not quite. Grammar is an LLM's strongest suit.",
            },
            {
              id: "c",
              text: "Suggested questions for your upcoming team brainstorm",
              isCorrect: false,
              analogyFeedback: "Not quite. Brainstorming questions don't make factual claims.",
            },
            {
              id: "d",
              text: "Specific market-share percentages, named reports, and URL links",
              isCorrect: true,
              analogyFeedback: "Exactly. Exact statistics, named studies, and URLs are the #1 hotspot for confident confabulation.",
            },
          ],
        },
      ],
    },
    {
      id: "prompt-architecture-and-context-priming",
      title: "The 4-Part Prompt Architecture",
      subtitle: "Role, Context, Task, and Constraints for reliable output",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 29, 2026",
      sources: [
        { label: "Anthropic Prompt Engineering Interactive Tutorial", url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview" },
        { label: "Google DeepMind: Prompting Techniques for LLMs", url: "https://deepmind.google/technologies/" },
      ],
      bigIdea: {
        headline:
          "Lazy prompts yield generic results. ==A production prompt has 4 structural pillars: Role, Context, Task, and Constraints.==",
        explanation:
          "Most people type: 'Write an email to my team about Q4 goals.' That gives the model infinite degrees of freedom, resulting in generic corporate clichés. A high-leverage prompt specifies **Role** (who the AI is acting as), **Context** (background facts and stakes), **Task** (the exact deliverable), and **Constraints** (format, length, and negative constraints). Adding ==1–2 few-shot examples== increases precision dramatically.",
      },
      analogy: {
        title: "The Master Chef's Recipe Card",
        metaphor:
          "If you tell a kitchen assistant: 'Make something tasty with paneer', you might get a dry fried cube or a sugary gravy. If you hand them a **recipe card** with exact ingredients, cooking time, heat level, and 'Do not add cream', you get a flawless dish every single evening. ==Constraints unleash quality; ambiguity breeds mediocrity.==",
        visualComparison: [
          {
            everydayItem: "A vague order to a carpenter: 'Make me a nice wooden table'",
            aiEquivalent: "**Vague one-liner prompt**: results in generic, verbose, average internet writing",
          },
          {
            everydayItem: "Architectural blueprint with dimensions, wood type, and joint specs",
            aiEquivalent: "**4-Part Prompt Architecture**: delivers production-ready output matching your exact standards",
          },
        ],
      },
      activities: [
        {
          type: "beforeAfter",
          title: "Amateur Prompt vs. Engineered Architecture",
          before: {
            label: "Amateur Prompt (Produces generic corporate fluff)",
            text: "Write a message to our sales team telling them to work harder because we are behind on our quarterly targets.",
          },
          after: {
            label: "Engineered 4-Part Architecture",
            text: "Role: VP of Enterprise Sales at a fast-growing SaaS startup.\nContext: We are at 78% of Q3 target with 18 days left. Pipeline is healthy but deals are stuck in legal review.\nTask: Write a motivating 150-word Slack message for #sales-team.\nConstraints: Acknowledge hard work; focus specifically on clearing legal hurdles; no military metaphors (no 'wars' or 'battles'); include 3 tactical action steps.",
          },
          whyItWorks: [
            "Role anchors tone and vocabulary.",
            "Context prevents hallucinated excuses and focuses on the real bottleneck (legal review).",
            "Negative constraints eliminate tired war clichés.",
            "Word count constraint guarantees readability on mobile Slack.",
          ],
        },
        {
          type: "tryIt",
          title: "Deploy the Few-Shot Multiplier",
          intro: "Give the model just ONE example of your desired output, and watch format adherence skyrocket.",
          prompt: "Convert customer feedback into a structured incident ticket.\n\nExample Input: 'App crashed when paying on GPay in Indiranagar.'\nExample Output: [PAYMENT_FAILURE] (Severity: High) | Gateway: GPay | Trigger: Checkout crash.\n\nInput: 'The delivery boy could not find flat 402 and the tracking map stopped updating.'\nOutput:",
          whatToNotice: [
            "Notice how the model effortlessly mirrors the exact brackets, fields, and capitalization from your single example.",
            "==Few-shot prompting is the single highest ROI technique in all of prompt engineering.==",
          ],
        },
      ],
      techConversation: {
        context: "A remote marketing team in Chennai reviewing AI output quality",
        speakerA: {
          role: "Content Lead",
          quote: "I tried using Claude and ChatGPT for our LinkedIn posts, but everything sounds like robotic AI slop.",
        },
        speakerB: {
          role: "Prompt Engineer",
          quote:
            "Because you didn't give it negative constraints or few-shot examples. Paste 2 of your best human-written posts as examples, and add: 'Never use words like delve, revolutionize, seamless, or game-changer.'",
        },
        plainEnglishTranslation:
          "AI defaults to over-used buzzwords unless you **show it examples of your real writing** and ban its favourite clichés.",
      },
      realWorldApplication: {
        forWork:
          "Save a snippet on your laptop called `AI_EDITOR_PRIMER`: 'You are an executive editor. Write in clear, concrete sentences under 20 words. Never use delve, leverage, elevate, or game-changer.'",
        forLearning:
          "When studying a new topic, tell the AI: 'Role: Socratic Tutor. Task: Quiz me 1 question at a time. Constraint: Never give me the answer directly; give me a hint if I get stuck.'",
      },
      jargonCard: {
        term: "Few-Shot vs. Zero-Shot Prompting",
        oneLineAnalogy:
          "Zero-shot is describing a shirt in words; Few-shot is handing the tailor a sample shirt to copy.",
        meetingDropLine:
          "Let's add 3 few-shot exemplars to our system prompt to anchor the output format and eliminate parsing errors.",
      },
      quiz: [
        {
          id: "q1-prompt-arch-1",
          scenario: "What is the difference between Zero-Shot and Few-Shot prompting?",
          options: [
            {
              id: "a",
              text: "Zero-shot is free; Few-shot requires a paid enterprise license",
              isCorrect: false,
              analogyFeedback: "Not quite. Both are simply ways you write your prompt text in any AI tool.",
            },
            {
              id: "b",
              text: "Zero-shot asks for a task with no examples; Few-shot includes 1 to 5 input-output examples inside the prompt",
              isCorrect: true,
              analogyFeedback: "Exactly. Providing concrete input-output pairs anchors the model's pattern completion far better than abstract instructions alone.",
            },
            {
              id: "c",
              text: "Zero-shot uses zero tokens; Few-shot uses five tokens",
              isCorrect: false,
              analogyFeedback: "Not quite. 'Shot' refers to the number of demonstration examples provided, not the token count.",
            },
            {
              id: "d",
              text: "Zero-shot runs on your phone; Few-shot runs on cloud servers",
              isCorrect: false,
              analogyFeedback: "Not quite. Both run on the exact same model infrastructure.",
            },
          ],
        },
        {
          id: "q1-prompt-arch-2",
          scenario: "Why are 'Negative Constraints' (telling the AI what NOT to do) critical in professional prompts?",
          options: [
            {
              id: "a",
              text: "They prevent the model from defaulting to generic internet clichés, unwanted promises, or verbose filler",
              isCorrect: true,
              analogyFeedback: "Exactly. Setting clear guardrails (e.g., 'Do not offer a discount', 'No buzzwords') cuts out the most common AI failure modes.",
            },
            {
              id: "b",
              text: "They make the model angry so it works faster",
              isCorrect: false,
              analogyFeedback: "Not quite. Models do not have emotions.",
            },
            {
              id: "c",
              text: "They encrypt your conversation from hackers",
              isCorrect: false,
              analogyFeedback: "Not quite. Negative constraints guide text generation, not network security.",
            },
            {
              id: "d",
              text: "They reduce the electricity used by the data center by 90%",
              isCorrect: false,
              analogyFeedback: "Not quite. While concise output uses fewer tokens, negative constraints are about output quality.",
            },
          ],
        },
        {
          id: "q1-prompt-arch-3",
          scenario: "You want an AI to draft weekly status updates that match your manager's exact preferred layout. What is the fastest way to achieve this?",
          options: [
            {
              id: "a",
              text: "Write a 3-page essay describing what your manager likes",
              isCorrect: false,
              analogyFeedback: "Not quite. Long abstract descriptions are harder for models to follow than concrete examples.",
            },
            {
              id: "b",
              text: "Ask the AI to guess what a typical Indian manager prefers",
              isCorrect: false,
              analogyFeedback: "Not quite. That guarantees a generic template that won't match your team's style.",
            },
            {
              id: "c",
              text: "Fine-tune an open-weight model over 3 weeks",
              isCorrect: false,
              analogyFeedback: "Not quite. Massive overkill for a weekly status report format.",
            },
            {
              id: "d",
              text: "Paste 2 past status updates your manager praised as few-shot examples, then provide this week's raw bullet points",
              isCorrect: true,
              analogyFeedback: "Exactly. Two real examples lock in the structure, heading style, and brevity in seconds.",
            },
          ],
        },
      ],
    },
    {
      id: "chain-of-thought-and-reasoning",
      title: "Think Step by Step: Reasoning Power",
      subtitle: "Why giving AI scratchpad tokens doubles its analytical IQ",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 29, 2026",
      sources: [
        { label: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models (Google Research)", url: "https://arxiv.org/abs/2201.11903" },
        { label: "OpenAI o1 System Card and Reasoning Models", url: "https://openai.com/index/openai-o1-system-card/" },
      ],
      bigIdea: {
        headline:
          "If you ask an AI for an immediate answer, it only has one token's worth of compute. ==Forcing it to think out loud gives it computation room.==",
        explanation:
          "Transformers spend a fixed amount of computation per token generated. If a complex logic or budget puzzle requires 5 deduction steps, but you demand: 'Reply with ONLY Yes or No', the model must guess the final verdict in its very first token! By instructing **'Think step by step before giving your final verdict'**, each reasoning step gets written to the screen and feeds back into context, ==compounding its intelligence.==",
      },
      analogy: {
        title: "The Math Board Exam Scratchpad",
        metaphor:
          "Remember your Class 10 CBSE Maths exam? If you jumped straight to writing the final answer on a 6-mark geometry problem, you'd likely make a calculation slip. If you used the **rough work margin on the right side of the paper** to write out every algebraic step, your accuracy jumped dramatically. ==Reasoning tokens are the AI's rough work margin.==",
        visualComparison: [
          {
            everydayItem: "Trying to multiply two 4-digit numbers in your head within 1 second",
            aiEquivalent: "**Direct answer without CoT**: high failure rate on multi-step logic",
          },
          {
            everydayItem: "Writing each step of multiplication in the rough margin before announcing the total",
            aiEquivalent: "**Chain-of-Thought (CoT)**: producing intermediate tokens that unlock accurate reasoning",
          },
        ],
      },
      activities: [
        {
          type: "tryIt",
          title: "The Chain-of-Thought Benchmark",
          intro: "See how the phrase 'Think step by step' transforms multi-variable logic.",
          prompt: "A delivery van leaves Whitefield at 8:00 AM with 40 parcels. It drops 25% of them in Marathahalli. At Silk Board, it picks up 15 new parcels and gets delayed by 45 minutes. Then it delivers 2/3 of its current load in BTM Layout. How many parcels remain in the van?\n\nWalk through the math step by step before stating the final number.",
          whatToNotice: [
            "Watch how the model computes intermediate balances (40 - 10 = 30; 30 + 15 = 45; 45 - 30 = 15).",
            "Notice how each line builds on the previous line's output tokens.",
            "==Without step-by-step scratchpad tokens, standard models frequently bungle multi-hop problems.==",
          ],
        },
        {
          type: "scenario",
          title: "Complex Business Strategy Triage",
          setting: "You are evaluating whether to launch a new quick-commerce subscription in Tier-2 cities.",
          steps: [
            {
              situation:
                "You want an AI to analyze your unit economics (customer acquisition cost, churn, delivery cost per km, average order value). How should you prompt it?",
              choices: [
                {
                  text: "Prompt: 'Reply in one word: Profitable or Unprofitable?'",
                  isBest: false,
                  outcome: "Forcing a 1-word reply strips the model of all reasoning tokens, turning its answer into a coin flip.",
                },
                {
                  text: "Prompt: 'Step 1: Calculate contribution margin per order. Step 2: Estimate break-even orders per user. Step 3: List top 2 risks. Step 4: Give your final verdict.'",
                  isBest: true,
                  outcome: "Brilliant! Structuring intermediate reasoning steps guarantees that the final verdict is grounded in the preceding analysis.",
                },
              ],
            },
          ],
          debrief:
            "Whenever you tackle strategy, debugging, or contract review: ==never force the verdict in token #1. Always demand the reasoning scratchpad first.==",
        },
      ],
      techConversation: {
        context: "A developer team in Gurugram evaluating reasoning models",
        speakerA: {
          role: "Data Scientist",
          quote: "Why do 'Thinking' or 'Reasoning' models take 15 seconds before printing the first word of the answer?",
        },
        speakerB: {
          role: "Staff Engineer",
          quote:
            "Because they automatically generate thousands of hidden **Chain-of-Thought** tokens in a scratchpad—testing hypotheses, catching their own mistakes, and verifying constraints before writing the final response.",
        },
        plainEnglishTranslation:
          "Reasoning models pause to **plan and double-check their work on a scratchpad** before speaking, just like a careful human expert.",
      },
      realWorldApplication: {
        forWork:
          "When using a fast non-reasoning model, never ask 'Answer strictly Yes or No'. Instead say: 'First write a 3-bullet analysis of the evidence, then conclude with VERDICT: YES or VERDICT: NO.'",
        forLearning:
          "Ask an AI tutor: 'Solve this accounting problem step by step, and explain the rule behind each journal entry before moving to the next line.'",
      },
      jargonCard: {
        term: "Chain-of-Thought (CoT)",
        oneLineAnalogy:
          "Showing your rough work in the exam margin so you don't botch a multi-step problem in your head.",
        meetingDropLine:
          "If we force a single-token classification without Chain-of-Thought, accuracy drops—let's have the model output a `reasoning` field before the `verdict` field.",
      },
      quiz: [
        {
          id: "q1-cot-1",
          scenario: "Why does demanding 'Reply ONLY with Yes or No, no explanation' often LOWER an LLM's accuracy on complex logic questions?",
          options: [
            {
              id: "a",
              text: "The model gets offended by curt instructions",
              isCorrect: false,
              analogyFeedback: "Not quite. Models have no emotional reaction to tone.",
            },
            {
              id: "b",
              text: "Short replies aren't allowed by API safety filters",
              isCorrect: false,
              analogyFeedback: "Not quite. Safety filters don't block brief replies.",
            },
            {
              id: "c",
              text: "It forces the model to compute a multi-step deduction inside a single token pass with zero intermediate scratchpad",
              isCorrect: true,
              analogyFeedback: "Exactly. Without intermediate tokens written into the context window, the model cannot chain multi-step logic together.",
            },
            {
              id: "d",
              text: "The words 'Yes' and 'No' aren't in the model's vocabulary",
              isCorrect: false,
              analogyFeedback: "Not quite. 'Yes' and 'No' are single, common tokens.",
            },
          ],
        },
        {
          id: "q1-cot-2",
          scenario: "You are designing a JSON schema for an AI that evaluates job resumes against a role rubric. Which JSON field order gives the highest accuracy?",
          options: [
            {
              id: "a",
              text: "`{ \"final_score\": number, \"step_by_step_evaluation\": string }`",
              isCorrect: false,
              analogyFeedback: "Not quite! Because tokens are generated left-to-right, putting `final_score` first forces the model to guess the score BEFORE it writes the evaluation!",
            },
            {
              id: "b",
              text: "`{ \"step_by_step_evaluation\": string, \"final_score\": number }`",
              isCorrect: true,
              analogyFeedback: "Exactly! Generating `step_by_step_evaluation` first means the `final_score` token is conditioned on the completed analysis.",
            },
            {
              id: "c",
              text: "`{ \"final_score\": number }` (omit the evaluation to save tokens)",
              isCorrect: false,
              analogyFeedback: "Not quite. Omitting the reasoning scratchpad degrades scoring consistency.",
            },
            {
              id: "d",
              text: "Field order makes zero difference to an LLM",
              isCorrect: false,
              analogyFeedback: "Not quite. Because LLMs generate strictly left-to-right token by token, field order is critical!",
            },
          ],
        },
        {
          id: "q1-cot-3",
          scenario: "When should you switch from a standard fast model to a 'Reasoning / Thinking' model?",
          options: [
            {
              id: "a",
              text: "When fixing a typo in a 2-sentence WhatsApp message",
              isCorrect: false,
              analogyFeedback: "Not quite. Waiting 15 seconds for a reasoning model to fix a typo is overkill.",
            },
            {
              id: "b",
              text: "When translating a restaurant menu into Hindi",
              isCorrect: false,
              analogyFeedback: "Not quite. Standard models handle straightforward translation quickly and accurately.",
            },
            {
              id: "c",
              text: "When generating 5 casual icebreaker questions",
              isCorrect: false,
              analogyFeedback: "Not quite. Fast models are ideal for quick creative brainstorming.",
            },
            {
              id: "d",
              text: "When reconciling conflicting clauses across a 30-page vendor contract or debugging complex multi-file code",
              isCorrect: true,
              analogyFeedback: "Exactly. Multi-step constraint satisfaction, financial logic, and architecture debugging benefit enormously from extended reasoning tokens.",
            },
          ],
        },
      ],
    },
    {
      id: "embeddings-and-semantic-search",
      title: "Meaning as Coordinates: Embeddings",
      subtitle: "How computers know 'chai' and 'tea' are neighbors in math",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 29, 2026",
      sources: [
        { label: "Vector Embeddings Explained (Pinecone Learning Center)", url: "https://www.pinecone.io/learn/vector-embeddings/" },
        { label: "Word2Vec and Semantic Vectors (Stanford CS224N)", url: "https://web.stanford.edu/class/cs224n/" },
      ],
      bigIdea: {
        headline:
          "Computers cannot understand human ideas directly. ==They convert text into lists of numbers (vectors) where similar meanings sit close together in space.==",
        explanation:
          "Traditional search (`Ctrl + F`) only matches exact letters. If you search for 'automobile', it misses 'car'. An **embedding model** converts any word, sentence, or document into a list of numbers (e.g. `[0.24, -0.81, 0.55...]`). Texts with related meanings—like 'masala chai', 'ginger tea', and 'garam kadak'—receive **coordinates that cluster near each other**. This powers recommendation engines, duplicate detection, and enterprise semantic search.",
      },
      analogy: {
        title: "The Superstore Organized by Purpose, Not Alphabet",
        metaphor:
          "Imagine a colossal **supermarket** where products aren't arranged alphabetically ('Apples' next to 'Air freshener'), but by **culinary meaning**. Ghee, mustard oil, and butter sit together on Aisle 4; atta, maida, and besan sit on Aisle 5. Even if a customer asks for 'cooking fat for parathas' without using the word 'ghee', ==you walk straight to the right shelf coordinates.==",
        visualComparison: [
          {
            everydayItem: "Ctrl+F search: matching exact letter spelling, blind to synonyms",
            aiEquivalent: "**Keyword Search**: fails if the customer types 'refund' but your policy uses 'reimbursement'",
          },
          {
            everydayItem: "GPS coordinates on a map: measuring physical distance between two shops",
            aiEquivalent: "**Vector Embeddings & Cosine Similarity**: measuring mathematical distance between two ideas",
          },
        ],
      },
      activities: [
        {
          type: "sort",
          title: "Keyword Match vs. Semantic Match",
          instructions:
            "A user searches a company intranet for: **'How do I take time off for my sister's wedding?'** Sort how each search engine behaves:",
          buckets: ["Keyword Search (Ctrl+F)", "Semantic Embedding Search"],
          items: [
            {
              text: "Searches for the exact word 'sister' and finds 0 matches in the HR policy",
              bucket: 0,
              why: "Keyword engines fail when the user's specific word doesn't appear verbatim in the policy.",
            },
            {
              text: "Finds the 'Annual Paid Leave & Casual Leave Entitlement' document immediately",
              bucket: 1,
              why: "Semantic search maps 'taking time off for a family event' to 'Casual Leave' coordinates.",
            },
            {
              text: "Returns 4 irrelevant IT tickets where someone mentioned 'my sister's laptop'",
              bucket: 0,
              why: "Exact word matching surfaces irrelevant mentions while missing the conceptual intent.",
            },
            {
              text: "Understands Hinglish search: 'Chhutti kaise apply karein?'",
              bucket: 1,
              why: "Multilingual embeddings place 'chhutti' and 'annual leave' in the same semantic neighborhood.",
            },
          ],
        },
        {
          type: "flashcards",
          title: "The Vector Search Stack",
          cards: [
            {
              front: "What is an Embedding?",
              back: "A list of hundreds of numbers (coordinates) representing the meaning of a piece of text, like `[0.12, -0.45, 0.88...]`.",
            },
            {
              front: "What is Cosine Similarity?",
              back: "The mathematical measure of how closely two vector coordinates point in the same direction. High similarity = very close meaning.",
            },
            {
              front: "What is a Vector Database?",
              back: "A specialized database (like pgvector, Pinecone, or Weaviate) that stores millions of embeddings and finds the closest conceptual matches in milliseconds.",
            },
            {
              front: "Why combine Keyword + Vector (Hybrid Search)?",
              back: "Vectors are great for concepts ('warm winter wear'), while keywords are great for exact SKU codes ('SKU-99412') or proper nouns.",
            },
          ],
        },
      ],
      techConversation: {
        context: "A search engineering architecture review in Bengaluru",
        speakerA: {
          role: "Customer Support Manager",
          quote: "Customers keep complaining our help center search is useless. They type 'cancel subscription' and get zero results.",
        },
        speakerB: {
          role: "Search Engineer",
          quote:
            "That's because our legacy index only matches exact keywords, and our legal team titled the page 'Termination of Recurring Billing'. Let's generate **embeddings** so semantic search links both phrases automatically.",
        },
        plainEnglishTranslation:
          "Stop forcing customers to guess your company's internal jargon. **Use embeddings so search matches what the user actually means**.",
      },
      realWorldApplication: {
        forWork:
          "If your team receives 5,000 support tickets or survey responses a month, use embeddings to automatically cluster similar complaints together and spot trending bugs early.",
        forLearning:
          "When building search for any product, remember **Hybrid Search** (combining exact keyword match for part numbers/names + vector search for meaning) beats either one alone.",
      },
      jargonCard: {
        term: "Vector Embeddings",
        oneLineAnalogy:
          "Turning ideas into GPS coordinates so phrases with similar meanings park on the same street.",
        meetingDropLine:
          "Let's use hybrid search—vector embeddings for conceptual intent paired with keyword matching for exact product SKUs.",
      },
      quiz: [
        {
          id: "q1-embed-1",
          scenario: "Why does semantic vector search succeed when a customer searches 'paise wapas kab milenge' against an English 'Refund Timeline Policy'?",
          options: [
            {
              id: "a",
              text: "Multilingual embedding models map equivalent concepts across languages to nearby mathematical coordinates",
              isCorrect: true,
              analogyFeedback: "Exactly. 'Paise wapas' and 'Refund' occupy nearly identical coordinates in a multilingual vector space.",
            },
            {
              id: "b",
              text: "The letters 'p-a-i-s-e' are spelled the same as 'r-e-f-u-n-d'",
              isCorrect: false,
              analogyFeedback: "Not quite. Zero letters overlap, which is why traditional Ctrl+F search fails completely here.",
            },
            {
              id: "c",
              text: "A human translator manually translates every search query in real time",
              isCorrect: false,
              analogyFeedback: "Not quite. Embedding lookups happen automatically in milliseconds.",
            },
            {
              id: "d",
              text: "Vector search ignores the user's query and just shows the most popular page",
              isCorrect: false,
              analogyFeedback: "Not quite. It ranks documents by mathematical closeness (cosine similarity) to the query vector.",
            },
          ],
        },
        {
          id: "q1-embed-2",
          scenario: "When does traditional exact keyword search outperform pure vector embedding search?",
          options: [
            {
              id: "a",
              text: "When a user describes a vague symptom without knowing the technical term",
              isCorrect: false,
              analogyFeedback: "Not quite. Vague conceptual queries are where vector embeddings shine brightest.",
            },
            {
              id: "b",
              text: "When searching in Hinglish across English documents",
              isCorrect: false,
              analogyFeedback: "Not quite. Cross-language meaning requires semantic embeddings.",
            },
            {
              id: "c",
              text: "When searching for an exact invoice number like `INV-2026-88419` or a specific model code",
              isCorrect: true,
              analogyFeedback: "Exactly. Arbitrary serial numbers don't have 'semantic meaning', so exact keyword matching (or hybrid search) is best.",
            },
            {
              id: "d",
              text: "When grouping 10,000 customer reviews by sentiment theme",
              isCorrect: false,
              analogyFeedback: "Not quite. Thematic clustering is a classic vector embedding strength.",
            },
          ],
        },
        {
          id: "q1-embed-3",
          scenario: "What is stored inside a Vector Database like Pinecone or pgvector?",
          options: [
            {
              id: "a",
              text: "Only MP4 video files",
              isCorrect: false,
              analogyFeedback: "Not quite. It stores numerical vectors alongside text metadata.",
            },
            {
              id: "b",
              text: "High-dimensional numerical arrays (embeddings) paired with references to the original text chunks",
              isCorrect: true,
              analogyFeedback: "Exactly. It indexes the numerical coordinates so you can retrieve the matching text passages in milliseconds.",
            },
            {
              id: "c",
              text: "Username and password hashes for login forms",
              isCorrect: false,
              analogyFeedback: "Not quite. Authentication credentials belong in a standard relational database.",
            },
            {
              id: "d",
              text: "Pre-written answers for every possible sentence in the universe",
              isCorrect: false,
              analogyFeedback: "Not quite. It stores your document chunks, which an LLM then uses to compose answers.",
            },
          ],
        },
      ],
    },
    {
      id: "rag-retrieval-augmented-generation",
      title: "The Open-Book Exam: Understanding RAG",
      subtitle: "Connecting AI to your company's private live knowledge",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 29, 2026",
      sources: [
        { label: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Meta AI Research)", url: "https://arxiv.org/abs/2005.11401" },
        { label: "What is RAG? (IBM Research Guide)", url: "https://www.ibm.com/topics/retrieval-augmented-generation" },
      ],
      bigIdea: {
        headline:
          "RAG turns AI from a closed-book memory quiz into an ==open-book exam, fetching your private documents and pasting them into the prompt.==",
        explanation:
          "Pre-trained models don't know your company's private Q3 revenue, your NDA agreements, or yesterday's policy changes. **RAG (Retrieval-Augmented Generation)** solves this without retraining. When you ask a question, the system searches your document store for the 3–5 most relevant passages, **pastes them into the prompt**, and tells the AI: 'Answer using ONLY these passages and cite them.'",
      },
      analogy: {
        title: "The Courtroom Advocate and the Junior Associate",
        metaphor:
          "A top **courtroom advocate** doesn't memorize all 10,000 pages of evidence in a dispute. Before addressing the judge, their **junior associate runs to the archive**, pulls the 2 relevant signed contracts from 2024, and places them open on the podium. The advocate reads those 2 pages and argues with precision. ==The junior associate is Retrieval; the advocate is Generation.==",
        visualComparison: [
          {
            everydayItem: "A student taking a closed-book exam relying purely on what they memorized last year",
            aiEquivalent: "**Vanilla LLM without RAG**: prone to outdated facts and hallucinations on private data",
          },
          {
            everydayItem: "An open-book exam where you look up the exact chapter before writing your answer",
            aiEquivalent: "**RAG System**: pulls live document chunks into the context window with verifiable citations",
          },
        ],
      },
      activities: [
        {
          type: "decodeChat",
          title: "Decode the Enterprise RAG Meeting",
          setting: "An AI architecture sync at a healthcare SaaS firm in Hyderabad",
          lines: [
            {
              speaker: "VP of Product",
              text: "Can our hospital chatbot quote our updated ICU room tariffs from this morning?",
              plainEnglish: "Can the AI give patients our new prices without making up old numbers?",
            },
            {
              speaker: "AI Engineer",
              text: "Yes, our RAG pipeline chunks the updated PDF, embeds it in pgvector, and injects the top-5 hits into the prompt context.",
              plainEnglish:
                "Yes! We slice the new tariff PDF into paragraphs, store their mathematical coordinates, and paste the 5 best matches into the AI's prompt before it answers.",
            },
            {
              speaker: "Compliance Officer",
              text: "And what if a patient asks about a surgery we don't offer?",
              plainEnglish: "Does the bot ever invent treatments we don't have?",
            },
            {
              speaker: "AI Engineer",
              text: "We enforce strict grounding with citation links and a similarity threshold fallback.",
              plainEnglish:
                "We force the AI to link the exact tariff page, and if no document matches closely enough, it politely connects them to the reception desk.",
            },
          ],
        },
        {
          type: "checklist",
          title: "Does Your Project Actually Need RAG?",
          intro: "Check your use case against this 4-point requirement test:",
          items: [
            {
              text: "Proprietary or Confidential Data",
              detail: "If the information lives behind your company login (Google Drive, Notion, Confluence, internal databases), you need RAG.",
            },
            {
              text: "Rapidly Changing Facts",
              detail: "If prices, inventory, policies, or news change weekly, RAG updates the AI immediately as soon as the file is updated.",
            },
            {
              text: "Auditability and Citations",
              detail: "If users must click a link to verify the original source paragraph (legal, financial, medical), RAG is non-negotiable.",
            },
            {
              text: "Access Control & Permissions",
              detail: "With RAG, the search step only retrieves documents the logged-in employee is permitted to read.",
            },
          ],
        },
      ],
      techConversation: {
        context: "A tech discussion between startup co-founders in Mumbai",
        speakerA: {
          role: "Chief Operating Officer",
          quote: "Should we hire an AI lab to train a custom LLM on our 500 internal SOP documents?",
        },
        speakerB: {
          role: "Chief Technology Officer",
          quote:
            "Definitely not. Training weights on SOPs costs lakhs and goes stale the moment we edit a document. We connect an existing frontier model to our SOP folder using **RAG**. When an SOP changes on Google Drive, the bot knows in 10 seconds.",
        },
        plainEnglishTranslation:
          "Don't bake changing company manuals into model weights. **Let the AI search your live folder via RAG**.",
      },
      realWorldApplication: {
        forWork:
          "Use personal RAG workspaces like **Google NotebookLM**, **Claude Projects**, or **ChatGPT Projects**. Upload your project's 15 core PDFs and query across them with clickable citations.",
        forLearning:
          "When preparing for exams or certifications, upload the official syllabus PDFs into a RAG notebook so every practice answer cites the exact page.",
      },
      jargonCard: {
        term: "RAG (Retrieval-Augmented Generation)",
        oneLineAnalogy:
          "Giving the AI an open-book library card so it looks up your files before answering your question.",
        meetingDropLine:
          "Instead of fine-tuning, let's deploy a RAG pipeline with hybrid search and mandatory source citations.",
      },
      quiz: [
        {
          id: "q1-rag-1",
          scenario: "What happens behind the scenes in a RAG system right after a user types a question?",
          options: [
            {
              id: "a",
              text: "The system permanently updates the neural network weights of GPT or Gemini",
              isCorrect: false,
              analogyFeedback: "Not quite. RAG never alters the model's permanent weights.",
            },
            {
              id: "b",
              text: "The system emails a human researcher and waits 24 hours for a reply",
              isCorrect: false,
              analogyFeedback: "Not quite. RAG retrieval is fully automated and takes milliseconds.",
            },
            {
              id: "c",
              text: "The system deletes the user's question to save memory",
              isCorrect: false,
              analogyFeedback: "Not quite. The user's question is needed both for retrieval and generation.",
            },
            {
              id: "d",
              text: "The system searches your document index for the most relevant chunks and pastes them into the prompt alongside the user's question",
              isCorrect: true,
              analogyFeedback: "Exactly. Retrieval finds the relevant paragraphs; Generation synthesizes the answer from those pasted paragraphs.",
            },
          ],
        },
        {
          id: "q1-rag-2",
          scenario: "Your company's RAG chatbot gave a wrong answer about maternity leave even though the LLM is top-tier. What is the most common culprit?",
          options: [
            {
              id: "a",
              text: "Garbage-in retrieval: the search step fetched an outdated 2021 policy PDF instead of the 2026 policy PDF",
              isCorrect: true,
              analogyFeedback: "Exactly. In RAG, the LLM can only read what the retrieval step hands it. Outdated or poorly chunked documents cause bad answers.",
            },
            {
              id: "b",
              text: "The LLM forgot how to read English",
              isCorrect: false,
              analogyFeedback: "Not quite. Frontier LLMs have strong reading comprehension; retrieval quality is usually the bottleneck.",
            },
            {
              id: "c",
              text: "The user typed the question on a Tuesday",
              isCorrect: false,
              analogyFeedback: "Not quite. Day of the week has no effect on RAG accuracy.",
            },
            {
              id: "d",
              text: "The monitor brightness was too low",
              isCorrect: false,
              analogyFeedback: "Not quite. Hardware display settings don't affect server-side RAG pipelines.",
            },
          ],
        },
        {
          id: "q1-rag-3",
          scenario: "Why is RAG far better for enforcing employee data permissions than fine-tuning a single shared model?",
          options: [
            {
              id: "a",
              text: "Fine-tuned models refuse to talk to junior employees",
              isCorrect: false,
              analogyFeedback: "Not quite. A fine-tuned model has no built-in awareness of who is logged in.",
            },
            {
              id: "b",
              text: "In RAG, the database search can filter documents by the logged-in user's role BEFORE pasting anything into the prompt",
              isCorrect: true,
              analogyFeedback: "Exactly. If an intern asks about executive salaries, the retrieval filter simply returns zero documents, keeping confidential data secure.",
            },
            {
              id: "c",
              text: "RAG encrypts the user's screen so nobody can read the reply",
              isCorrect: false,
              analogyFeedback: "Not quite. Access control happens at the document retrieval layer.",
            },
            {
              id: "d",
              text: "Fine-tuning only works on public Wikipedia articles",
              isCorrect: false,
              analogyFeedback: "Not quite. You can fine-tune on private data, but the model can then leak that data to anyone who prompts it.",
            },
          ],
        },
      ],
    },
    {
      id: "ai-productivity-operating-system",
      title: "Your Daily AI Operating System",
      subtitle: "5 high-leverage workflows that save 10+ hours every week",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 29, 2026",
      sources: [
        { label: "Navigating the Jagged Technological Frontier (Harvard Business School / BCG Study)", url: "https://www.hbs.edu/faculty/Pages/item.aspx?num=64734" },
        { label: "Measuring the Productivity Impact of Generative AI (MIT Economics)", url: "https://economics.mit.edu/" },
      ],
      bigIdea: {
        headline:
          "AI possesses a 'Jagged Frontier': ==it easily beats humans at some complex tasks while failing at seemingly simple ones.==",
        explanation:
          "Harvard and BCG researchers discovered that AI's capabilities form a **jagged wall**. Inside the frontier (first drafts, synthesis, ideation, restructuring messy data), AI boosts speed by **25%+ and quality by 40%**. Outside the frontier (unverified math, subtle office politics, final accountability), blind reliance makes performance worse. Master the **5 daily workflows** below while staying firmly in the driver's seat.",
      },
      analogy: {
        title: "The Formula 1 Pit Crew",
        metaphor:
          "A race car driver doesn't jump out of the cockpit to change tyres or clean the visor. A disciplined **pit crew** executes those specialized routines in 2.2 seconds flat while the driver steers the race line. ==Treat AI as your specialized pit crew—never fall asleep at the steering wheel.==",
        visualComparison: [
          {
            everydayItem: "Doing data formatting, blank-page drafting, transcription, and editing manually",
            aiEquivalent: "**Manual Cognitive Drag**: spending 70% of your week on low-leverage boilerplate",
          },
          {
            everydayItem: "Delegating rough cuts and diagnostics to a pit crew while you steer",
            aiEquivalent: "**AI Operating System**: AI handles the first 80% in seconds; you apply the final 20% judgment",
          },
        ],
      },
      activities: [
        {
          type: "checklist",
          title: "The 5 High-Leverage Daily AI Workflows",
          intro: "Adopt these 5 workflows to systematically reclaim 10+ hours from your weekly schedule:",
          items: [
            {
              text: "Workflow 1: The Socratic Red-Teamer (5 mins before any big meeting)",
              detail: "Paste your proposal: 'Act as our most skeptical CFO. Rip this proposal apart and identify the 3 weakest assumptions and missing numbers.'",
            },
            {
              text: "Workflow 2: The Voice-Note-to-Memo Engine (Never face a blank page)",
              detail: "Dictate 2 minutes of messy thoughts on your walk. Prompt: 'Turn this transcript into a crisp 3-paragraph project brief with owners and risks.'",
            },
            {
              text: "Workflow 3: Messy-Text-to-Structured-Table Converter",
              detail: "Paste a chaotic email chain: 'Extract every commitment, owner, and deadline into a Markdown table: [Action | Owner | Due Date | Open Blocker].'",
            },
            {
              text: "Workflow 4: The 60-Second Meeting Distiller",
              detail: "Paste raw call notes: 'Output strictly: 1. Decisions Locked; 2. Open Questions; 3. Action Items by Owner. Under 180 words.'",
            },
            {
              text: "Workflow 5: The Formula & Script Co-Pilot",
              detail: "Describe your spreadsheet headache in plain English: 'Write an XLOOKUP formula that matches GSTINs across Sheet1 and Sheet2 and returns 'Missing' if not found.'",
            },
          ],
        },
        {
          type: "scenario",
          title: "The Monday Morning Delegation Challenge",
          setting: "It's 9:00 AM on Monday at a tech startup in Indiranagar. You have 2 urgent tasks before 10:00 AM. How do you triage them?",
          steps: [
            {
              situation:
                "Task 1: You receive a 30-page vendor SLA contract and need to check if there is an automatic price-hike clause on renewal.",
              choices: [
                {
                  text: "Read all 30 pages word-for-word before your 10 AM call",
                  isBest: false,
                  outcome: "Takes 75 minutes of high-fatigue reading and makes you late.",
                },
                {
                  text: "Upload to your AI workspace: 'Search for renewal, escalation, or price revision clauses. Quote the exact section number and verbatim text.'",
                  isBest: true,
                  outcome: "Done in 25 seconds. You read the exact cited clause Yourself to verify, saving an hour.",
                },
              ],
            },
            {
              situation:
                "Task 2: You need to deliver sensitive performance feedback to a struggling teammate who recently had a family emergency.",
              choices: [
                {
                  text: "Auto-generate an email with AI and send it without talking to them",
                  isBest: false,
                  outcome: "Disastrous. Human empathy, trust, and sensitive leadership belong firmly with you, not an automated script.",
                },
                {
                  text: "Use AI to roleplay difficult responses privately to prepare your thoughts, then have the conversation face-to-face yourself",
                  isBest: true,
                  outcome: "Spot on. AI acts as your private rehearsal partner, while you deliver the human leadership.",
                },
              ],
            },
          ],
          debrief:
            "==Automate the formatting and retrieval; humanize the judgment and relationships.==",
        },
      ],
      techConversation: {
        context: "A quarterly retrospective at a Bengaluru product company",
        speakerA: {
          role: "Operations Manager",
          quote: "Half my team says AI saves them 8 hours a week, and the other half says it's a useless gimmick.",
        },
        speakerB: {
          role: "VP of Operations",
          quote:
            "Look at how they prompt. The sceptics type 5-word questions and give up. The power users have saved prompt templates for weekly reporting, red-teaming, and SQL/Excel generation.",
        },
        plainEnglishTranslation:
          "AI leverage comes from **reusable workflows for recurring work**, not occasional one-line novelty questions.",
      },
      realWorldApplication: {
        forWork:
          "Audit your calendar from last week. Pick the **one recurring task** that took more than 45 minutes of writing, summarizing, or formatting, and build a 4-part prompt template for it today.",
        forLearning:
          "Complete the remaining tracks to turn these foundational mental models into specialized fluency across jargon, model selection, engineering economics, and shipping real apps.",
      },
      jargonCard: {
        term: "The Jagged Frontier",
        oneLineAnalogy:
          "An invisible boundary where AI easily handles some complex work (drafting a strategy memo) while failing on simpler-looking tasks (counting letters or doing exact tax math).",
        meetingDropLine:
          "Let's map where the jagged frontier sits for our team—automate first-pass synthesis, but keep human sign-off on numbers and client commitments.",
      },
      quiz: [
        {
          id: "q1-os-1",
          scenario: "What does the 'Jagged Technological Frontier' discovered by Harvard and BCG researchers mean for professionals?",
          options: [
            {
              id: "a",
              text: "AI gets smarter every odd-numbered month and dumber every even-numbered month",
              isCorrect: false,
              analogyFeedback: "Not quite. 'Jagged' refers to the uneven boundary of task difficulty, not calendar months.",
            },
            {
              id: "b",
              text: "AI is uniformly better than humans at all easy tasks and worse at all hard tasks",
              isCorrect: false,
              analogyFeedback: "Not quite. Surprisingly, AI can ace a hard MBA case study while failing a simple arithmetic or logic trap.",
            },
            {
              id: "c",
              text: "Some complex-looking tasks sit inside AI's capability wall while some simple-looking tasks sit outside it, requiring active human discernment",
              isCorrect: true,
              analogyFeedback: "Exactly. Knowing which tasks sit inside vs. outside the jagged frontier is the core skill of an AI-fluent professional.",
            },
            {
              id: "d",
              text: "Only software engineers with PhDs can use AI tools productively",
              isCorrect: false,
              analogyFeedback: "Not quite. In fact, non-technical professionals often see the largest productivity jump when using structured workflows.",
            },
          ],
        },
        {
          id: "q1-os-2",
          scenario: "You have an important pitch to your company's board tomorrow morning. How do you use the 'Socratic Red-Teamer' workflow today?",
          options: [
            {
              id: "a",
              text: "Ask the AI to praise your slides so you feel confident",
              isCorrect: false,
              analogyFeedback: "Not quite. Sycophantic praise hides blind spots that board members will expose tomorrow.",
            },
            {
              id: "b",
              text: "Let the AI attend the board meeting on your behalf",
              isCorrect: false,
              analogyFeedback: "Not quite. High-stakes accountability and leadership cannot be outsourced.",
            },
            {
              id: "c",
              text: "Delete your slides and ask the AI to invent new financial targets",
              isCorrect: false,
              analogyFeedback: "Not quite. Never let an AI invent business targets.",
            },
            {
              id: "d",
              text: "Paste your pitch outline and prompt the AI to roleplay a skeptical CFO who challenges your 3 weakest assumptions",
              isCorrect: true,
              analogyFeedback: "Exactly. Stress-testing your arguments in private lets you fix holes and prepare sharp answers before walking into the room.",
            },
          ],
        },
        {
          id: "q1-os-3",
          scenario: "Which habit separates top 1% workplace AI power users from casual users?",
          options: [
            {
              id: "a",
              text: "Maintaining a library of reusable 4-part prompt templates and verification checklists for their recurring weekly tasks",
              isCorrect: true,
              analogyFeedback: "Exactly. Systematizing recurring workflows compounds time savings week after week.",
            },
            {
              id: "b",
              text: "Typing 'please' and 'thank you' in every single message",
              isCorrect: false,
              analogyFeedback: "Not quite. Politeness is nice, but structural clarity and reusable templates drive results.",
            },
            {
              id: "c",
              text: "Subscribing to 15 different AI newsletters without trying the tools on real work",
              isCorrect: false,
              analogyFeedback: "Not quite. Hands-on workflow integration beats passive reading every time.",
            },
            {
              id: "d",
              text: "Copy-pasting AI output directly to clients without reading it first",
              isCorrect: false,
              analogyFeedback: "Not quite. Skipping human-in-the-loop review leads to embarrassing errors.",
            },
          ],
        },
      ],
    },
  ],
};

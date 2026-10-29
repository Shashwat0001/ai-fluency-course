# AI Fluency Curriculum Expansion & Assessment Overhaul

This plan scales all 7 tracks of **AI Fluency from Scratch** to **10 comprehensive lessons per track (70 lessons total)**, deepens each lesson with practical workflows and multi-question assessments while keeping pacing digestible, and re-balances every multiple-choice quiz so correct answers are unpredictably distributed across options A, B, C, and D.

## User Review & Critical Decisions

> [!IMPORTANT]
> Review the curriculum expansion scope and assessment design below. Click **Proceed** when ready to build and commit all changes.

- **Confirmed Decision 1 — Full 7-Track Curriculum Scaling**: Expand every track (Tracks 1 through 7) to **10 full lessons each** (70 lessons across the platform), balancing technical depth with bite-sized, step-by-step pacing so learners gain real mastery without cognitive overload.
- **Confirmed Decision 2 — Static MCQ Option Distribution (A, B, C, D)**: Standardize all quiz option identifiers to clean `a`, `b`, `c`, `d` badges and redistribute correct answers across all four positions (`a`, `b`, `c`, and `d`) with 3–4 challenging, scenario-driven questions per lesson.
- **Decision 3 — Git Commit & Sync Preparation (Default)**: Commit all curriculum and assessment updates cleanly to the local `main` branch pointed at `Shashwat0001/ai-fluency-course` so they can be pushed in one click via the AI Studio GitHub integration or a Personal Access Token.

---

## 1. Overview & Core Concept

- **What It Does**: Transforms the platform from a brief introductory sampler into a complete, 70-lesson applied AI mastery curriculum tailored for Indian professionals and builders.
- **Target Audience / Persona**: Ambitious professionals, product managers, analysts, founders, and students who want deep, practical AI literacy and workplace leverage without needing a computer science degree.
- **Key Value**:
  - **Depth Without Overwhelm**: Every lesson breaks down a high-value concept using progressive step-by-step cards (Big Idea → Everyday Indian Analogy → Interactive Activity → Tech Meeting Translation → Workplace Playbook → Jargon Card → Multi-Question Assessment).
  - **Unpredictable, Thought-Provoking Quizzes**: Eliminates the "always pick B" pattern by providing 3–4 realistic scenario questions per lesson with 4 distinct options (`A`, `B`, `C`, `D`) and balanced answer keys.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Course Map Discovery**: Learners browse 7 structured tracks (10 lessons each), viewing real-time completion progress bars, estimated reading times, and earned XP.
  2. **Step-by-Step Lesson Player**: Learners progress through bite-sized screens (`step-in` transitions) or toggle to single-page reading mode (`All on one page`), with tap-to-define glossary terms (`dotted underline`) and an interactive **Key Terms Flashcard Deck**.
  3. **Active Practice & Unpredictable Quizzes**: Each lesson includes interactive exercises (`Try It`, `Sort It`, `Scenario`, `Spot the Error`, `Before & After`, `Decode the Meeting`, `Cost Calculator`, `Playbook Checklist`) followed by 3–4 multiple-choice questions where learners must reason through options `A`, `B`, `C`, and `D`.
- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Warm editorial edtech—tactile, high-contrast, distraction-free reading environment.
  - *Color Palette & Mood*:
    - Dominant Canvas (60%): Warm paper (`--color-paper: #fbfaf7`) and deep ink (`--color-ink: #17161a`).
    - Structural Surfaces (30%): Crisp white cards with warm neutral hairline borders (`--color-ink-200: #e5e2dd`) and soft elevation (`--shadow-card`).
    - Semantic Accents (10%): Electric iris brand actions (`--color-brand-600: #5a3ff0`), marigold highlighter callouts (`--color-marigold-300: #ffcf4d`), mint validation (`--color-mint-500: #12b47c`), and coral error feedback (`--color-coral-500: #f43f5e`).
  - *Typography & Hierarchy*: `Bricolage Grotesque` for expressive display headers, `Inter` for clean body prose, and `Instrument Serif` for editorial accents, paired with `tabular-nums` on all XP counters, step indicators, and calculators.
  - *Component Styling & Layout*: Tactile press-down buttons (`btn-pop`) and option tiles (`tile-pop`) with explicit `A` / `B` / `C` / `D` option badges and dual-coded validation icons (`CheckCircle2` / `XCircle`).

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Structured 10-Lesson Arcs Across All 7 Tracks**
  - *Chosen Approach*: Expand every track to 10 cohesive lessons (70 lessons total) while keeping individual paragraphs under 70 words and breaking lessons into interactive steps.
  - *Why*: Gives learners genuine mastery across foundational theory, technical jargon, model ecosystems, workplace workflows, engineering economics, news literacy, and no-code shipping—without ever presenting a wall of text.
  - *Alternatives Considered*: Making fewer, 30-minute marathon lessons (rejected because long single-scroll pages cause learner fatigue on mobile).
- **Decision 2: Balanced 4-Option (`A`, `B`, `C`, `D`) Scenario Quizzes in Data**
  - *Chosen Approach*: Upgrade all lessons (including Track 1's `opt1`/`opt2` IDs) to use standardized `a`, `b`, `c`, `d` option badges and systematically rotate the correct option position across `A`, `B`, `C`, and `D`.
  - *Why*: Ensures deterministic SSR hydration and persistent step state while forcing learners to carefully evaluate every option.

---

## 4. Technical Architecture & Data Strategy

### Architecture & Component Diagram

```
┌──────────────────────────────────────────────────────────────────────────┐
│                        Curriculum Data Layer                             │
│  ┌────────────────┐  ┌────────────────────────────────────────────────┐  │
│  │ Glossary Store │  │ 7 Track Modules (10 Lessons × 7 Tracks = 70)   │  │
│  │ (Tap-to-Define │  │ • Track 1: Foundations & Mental Models         │  │
│  │  Terms &       │  │ • Track 2: AI Jargon, Decoded                  │  │
│  │  Aliases)      │  │ • Track 3: The AI Players & Model Ecosystem    │  │
│  └───────┬────────┘  │ • Track 4: AI for Work & Learning Playbooks    │  │
│          │           │ • Track 5: Speak Tech & Engineering Economics  │  │
│          │           │ • Track 6: The AI Pulse & News Literacy        │  │
│          │           │ • Track 7: Capstone — Plan, Build & Launch     │  │
│          └─────┬─────┴───────────────────────┬────────────────────────┘  │
└────────────────┼─────────────────────────────┼───────────────────────────┘
                 ▼                             ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                      Next.js App Router Views                            │
│  ┌──────────────────────────────┐   ┌─────────────────────────────────┐  │
│  │ Course Map & Interactive     │   │ Dynamic Lesson Player           │  │
│  │ Teaser (Home View)           │   │ (/learn/[trackId]/[lessonId])   │  │
│  └──────────────┬───────────────┘   └────────────────┬────────────────┘  │
│                 │                                    │                   │
│                 ▼                                    ▼                   │
│  ┌──────────────────────────────┐   ┌─────────────────────────────────┐  │
│  │ LocalStorage Progress Store  │◄──┤ Step Sequencer & Activity Engine│  │
│  │ • Completed Lesson IDs & XP  │   │ • 10 Interactive Activity Types │  │
│  │ • Per-Lesson Saved Step      │   │ • Key Terms Flashcard Modal     │  │
│  └──────────────────────────────┘   │ • Balanced A/B/C/D Quiz Engine  │  │
│                                     └─────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────┘
```

### 7-Track × 10-Lesson Curriculum Blueprint (70 Lessons)

1. **Track 1 — AI Foundations & Mental Models (10 Lessons)**:
   - `deterministic-vs-probabilistic`, `tokens-and-context-limits`, `next-token-prediction`, `training-stages-pretraining-to-rlhf`, `hallucinations-and-confabulation`, `prompt-architecture-and-context-priming`, `chain-of-thought-and-reasoning`, `embeddings-and-semantic-search`, `rag-retrieval-augmented-generation`, `ai-productivity-operating-system` (upgraded with 3–4 balanced `a`/`b`/`c`/`d` quiz questions per lesson).
2. **Track 2 — AI Jargon, Decoded (10 Lessons)**:
   - `llms-tokens-context`, `rag-and-fine-tuning`, `vibe-coding`, `parameters-weights-and-inference`, `temperature-and-sampling`, `multimodality-vision-audio`, `system-prompts-and-personas`, `structured-outputs-and-json`, `function-calling-and-tools`, `context-caching-and-memory`.
3. **Track 3 — The AI Players: Who Builds What (10 Lessons)**:
   - `frontier-model-players`, `openai-gpt-and-reasoning-series`, `anthropic-claude-and-constitutional-ai`, `google-gemini-and-multimodal-scale`, `meta-llama-and-open-weights`, `deepseek-mistral-and-global-challengers`, `india-sovereign-ai-sarvam-krutrim-bhashini`, `cloud-hyperscalers-and-inference-chips`, `coding-and-workflow-specialists`, `model-selection-playbook`.
4. **Track 4 — AI for Work and Learning (10 Lessons)**:
   - `prompt-recipe`, `automate-busywork`, `ai-as-tutor`, `research-synthesis-and-fact-checking`, `spreadsheet-and-data-analysis-copilot`, `meeting-notes-to-action-items`, `writing-and-editing-without-ai-slop`, `presentation-and-storytelling-workflows`, `personal-knowledge-base-with-notebooklm`, `workplace-privacy-and-shadow-ai-rules`.
5. **Track 5 — Speak Tech: Sit In on the Meeting (10 Lessons)**:
   - `latency-and-streaming`, `hallucinations`, `evals`, `ai-unit-economics`, `model-routing-and-cascades`, `guardrails-and-content-moderation`, `prompt-versioning-and-ci-cd`, `rate-limits-tiers-and-batch-apis`, `data-privacy-dpdp-act-and-residency`, `build-vs-buy-ai-roi`.
6. **Track 6 — The AI Pulse: News Literacy & Frontier Shifts (10 Lessons)**:
   - `reading-ai-news`, `pulse-edition-oct-2026`, `decoding-ai-benchmarks-and-leaderboards`, `reasoning-and-test-time-compute-shift`, `voice-and-realtime-multimodal-wave`, `coding-agents-and-software-shifts`, `copyright-training-data-and-licensing`, `energy-chips-and-datacenter-bottlenecks`, `india-ai-mission-and-dpi-integration`, `personal-ai-radar-setup`.
7. **Track 7 — Capstone: Plan, Build and Launch (10 Lessons)**:
   - `capstone-plan`, `capstone-build`, `capstone-launch`, `capstone-wireframing-and-page-flow`, `capstone-copywriting-that-converts`, `capstone-mobile-first-and-accessibility`, `capstone-forms-and-whatsapp-leads`, `capstone-seo-and-social-preview-cards`, `capstone-custom-domains-and-analytics`, `capstone-portfolio-pitch-and-iteration`.

### Interactive Component & State Mapping

- **Quiz Option Badge & Answer Distribution**:
  - Every `QuizQuestion` across all 70 lessons uses `id: "a" | "b" | "c" | "d"`.
  - Correct answers are rotated across `a`, `b`, `c`, and `d` both within each lesson's 3–4 questions and across sequential lessons.
  - Homepage interactive demo teaser (`HomePage`) and `QuizQuestionCard` display the option letter badge and provide immediate per-option analogy feedback.

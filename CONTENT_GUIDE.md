# Content Guide

How to write lessons and publish the AI Pulse so every page meets the same bar.
**Audience:** young professionals in India, new to AI, with no technical background. They mostly read on a phone.

## Where content lives

| What | File |
| --- | --- |
| Track 1–6 lessons | `src/data/tracks/track-*.ts` (one file per track) |
| AI Pulse edition | `src/data/pulse.ts` |
| Shapes of everything (what fields exist) | `src/data/types.ts` |

New lessons appear on the site automatically. Add the lesson object to a track's `lessons` array and that's it.

## The lesson checklist

A lesson isn't ready until every box is ticked.

- [ ] **One idea.** If the title needs "and" twice, split it into two lessons.
- [ ] **Big idea:** a headline under 25 words, plus an explanation a non-technical friend would follow.
- [ ] **An Indian everyday analogy:** chai stall, IRCTC, Swiggy, cricket, board exams, the electricity bill, the darzi. No vending machines, baristas or Formula 1.
- [ ] **Indian settings** in dialogues and examples: Bengaluru stand-ups, Pune startups, ₹ amounts in lakh and crore.
- [ ] **1–3 activities** in different formats (see below). Pick what fits the topic, and vary formats from one lesson to the next so learners don't hit the same exercise repeatedly.
- [ ] **3–5 quiz questions,** each wrong option with feedback that explains why it's wrong, not just "Incorrect".
- [ ] **Every new term is defined** in the same lesson, at first use.
- [ ] **Every checkable fact has a source** in `sources`. Prefer official docs, pricing pages and government sites, then Wikipedia or major news. Open every link before adding it.
- [ ] **Anything that changes fast** (model names, prices, rankings, offers) gets `isUpdatedBiWeekly: true`, which shows the "accurate as of" notice.
- [ ] **`lastUpdated`** is set to today.
- [ ] `npm run build` passes before you push.

**Banned:** unsourced statistics ("90% of companies…"), "the best model is…", and anything you haven't checked yourself.

## Activity formats

Put these in a lesson's `activities` array. Exact fields are in `types.ts`; the lessons in `track-4` and `track-5` are working examples of each.

| Format | `type` | Use it when… | Example lesson |
| --- | --- | --- | --- |
| Try It Now | `tryIt` | Learners should feel something firsthand in a free AI tool | `ai-as-tutor` |
| Sort It | `sort` | Teaching a judgement call between two categories | `deterministic-vs-probabilistic` |
| Simulation | `scenario` | A realistic situation with a few decisions in a row | `automate-busywork` |
| Spot the Error | `spotTheError` | Training a sceptical eye (hallucinations, bad advice) | `hallucinations` |
| Before & After | `beforeAfter` | Showing what "good" looks like next to "typical" | `prompt-recipe` |
| Flashcards | `flashcards` | Locking in 4–6 terms | `llms-tokens-context` |
| Decode the Meeting | `decodeChat` | Translating real-sounding jargon line by line | `latency-and-streaming` |
| Cost Calculator | `costCalculator` | Making money and scale concrete in ₹ | `ai-unit-economics` |
| Your Playbook | `checklist` | A reusable routine learners take to work | `evals` |
| This Edition | `pulseFeed` | Showing the current AI Pulse inside a lesson | `pulse-edition-oct-2026` |

The classic sections (`analogy`, `techConversation`, `realWorldApplication`, `jargonCard`) are optional. Skip the ones an activity already covers; for example, a `decodeChat` replaces `techConversation`.

## Publishing the AI Pulse (every two weeks)

About 90 minutes per edition. Claude can draft it; a person must check every link and approve it.

1. **Collect** 8–10 candidate stories from the last two weeks, using primary sources only (company release notes and blogs, PIB/MeitY, official pricing pages) plus one or two major news outlets.
2. **Pick 5–6** that change what an Indian office worker can do, or must know. Include at least one India story.
3. **Write each item:** date, a plain-English title, a 2–3 sentence summary ("X says…" for company claims), a one-line everyday takeaway, and one `source` link.
4. **Check** that every link opens and says what the summary says. Leave out anything you can't confirm.
5. **Update** in `pulse.ts`: `BI_WEEKLY_META` (edition number, `lastUpdated`, headline) and replace `BI_WEEKLY_PULSE_FEED`.
6. **Update the edition lesson** in `track-6-biweekly-pulse.ts`: new lesson `id` and title, new flashcards for the edition's terms, 3–4 quiz questions about the new items, and `sources`.
7. **Sweep** the lessons marked `isUpdatedBiWeekly: true` for anything the news made out of date (model names, prices, renamed tools), and update their `lastUpdated`.
8. **Ship it:** branch → pull request → check the Vercel preview link → merge.

## Before you merge anything

Open the Vercel preview link on a phone, click through every changed lesson, answer each quiz (including a wrong answer), and use every activity once.

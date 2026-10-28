# AI Fluency from Scratch

An intuition-first AI course for people with zero technical background.

## Where things are

- `src/data/tracks/`: **the lessons**, one file per track. Most edits happen here.
- `src/data/pulse.ts`: the current AI Pulse edition.
- `src/data/types.ts`: what fields a lesson and each activity format can have.
- `src/components/activities/`: the interactive formats (sorting, simulations, flashcards, calculator and more).
- `src/app/`: the pages (the homepage and the lesson player at `learn/[trackId]/[lessonId]`).
- `CONTENT_GUIDE.md`: the lesson checklist and the two-weekly AI Pulse routine.

## How we work

1. Make changes on a branch, never straight on `main`.
2. Open a pull request. Vercel comments a **preview link**, and you both check it from any device.
3. Merge the pull request. The live site updates on its own within a couple of minutes.

## Running it on your own computer (optional)

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Before pushing, run `npm run build`: if it passes on your machine, it will pass on Vercel.

# AI Fluency from Scratch

An intuition-first AI course for people with zero technical background.

## Where things are

- `ai-learning-website/`: the website (Next.js). This is the folder Vercel builds.
- `ai-learning-website/src/data/curriculum.ts`: **all course content** (tracks, lessons, quizzes, AI Pulse). Most edits happen here.
- `ai-learning-website/src/app/`: the pages (homepage and the lesson player at `learn/[trackId]/[lessonId]`).

## How we work

1. Make changes on a branch, never straight on `main`.
2. Open a pull request. Vercel comments a **preview link**, and you both check it from any device.
3. Merge the pull request. The live site updates on its own within a couple of minutes.

## Running it on your own computer (optional)

```bash
cd ai-learning-website
npm install
npm run dev
```

Then open http://localhost:3000. Before pushing, run `npm run build`: if it passes on your machine, it will pass on Vercel.

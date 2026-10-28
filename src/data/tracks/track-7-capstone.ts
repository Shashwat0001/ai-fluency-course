import type { Track } from "../types";

// The capstone: learners plan, build and publish a real one-page website with
// AI. Publishing steps checked against Netlify's docs on 28 Oct 2026.
export const TRACK_7: Track = {
  id: "track-7-capstone",
  number: 7,
  icon: "Rocket",
  title: "Capstone: Build and Launch Your Own Site",
  description:
    "Put it all together. Plan, build and publish a real one-page website with AI, then share the link. No code required.",
  badgeName: "Builder",
  estimatedTime: "45–60 mins",
  lessons: [
    {
      id: "capstone-plan",
      title: "Pick Your Site, Write the Brief",
      subtitle: "Choose a project and brief it like a pro",
      durationMinutes: 12,
      xpReward: 200,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline: "Great sites start as ==a clear one-page brief==, not as code.",
        explanation:
          "Over these three lessons you'll **build and publish a real one-page website** with AI, without writing code. Pick something useful: a **personal portfolio** for your job hunt, a page for a **side business** (tuition classes, a home bakery, photography), or an **event page** for a wedding or college fest. Then write the brief. **The brief does most of the work**; the AI just follows it.",
      },
      analogy: {
        title: "Planning the Wedding Card",
        metaphor:
          "Before the printer prints a single wedding card, the family settles the names, the date, the venue, the RSVP number, the colours and how formal it should feel. Change your mind after 500 cards are printed and it's expensive. **A site brief is that same checklist**, done before the AI writes any code. ==Changing a sentence in the brief is free.==",
        visualComparison: [
          { everydayItem: "Names, date and venue on the card", aiEquivalent: "**What the page is for**, and who it's for" },
          { everydayItem: "Colours and how formal it feels", aiEquivalent: "**Look and feel**: two colours and a few mood words" },
          { everydayItem: "The RSVP number at the bottom", aiEquivalent: "**The one action** you want visitors to take" },
        ],
      },
      activities: [
        {
          type: "sort",
          title: "Good first project, or save it for later?",
          instructions: "Your capstone should be **one page, your own content, nothing sensitive**. Sort these ideas.",
          buckets: ["Great first project", "Save for later"],
          items: [
            { text: "A one-page portfolio with your projects and LinkedIn link", bucket: 0, why: "One page, your own content, nothing private. **Ideal.**" },
            { text: "An online shop that takes card payments", bucket: 1, why: "Payments mean **security and legal checks**. Build that later, with an engineer." },
            { text: "A page for your weekend tuition classes with a WhatsApp button", bucket: 0, why: "Simple, useful, and the WhatsApp button is a clear **one action**." },
            { text: "An app where people log in and save their data", bucket: 1, why: "Logins and stored personal data need **proper security**. Not a first project." },
            { text: "An invite page for your cousin's wedding, with the date, venue and a map link", bucket: 0, why: "A classic one-pager. Everyone in the family will actually open it." },
            { text: "A form that collects people's Aadhaar numbers", bucket: 1, why: "**Never** collect government ID numbers on a hobby site." },
          ],
        },
        {
          type: "checklist",
          title: "Your one-page brief",
          intro: "Answer each line in a sentence or two. **Real details beat nice-sounding ones.**",
          items: [
            { text: "Purpose: what is the page for, in one sentence?", detail: "\"Get recruiters to contact me for product roles.\"" },
            { text: "Audience: who will open it, and on what device?", detail: "Most people in India will see it **on a phone**." },
            { text: "Sections, top to bottom", detail: "Headline · About me · 3 projects · Contact." },
            { text: "The one action", detail: "\"Message me on LinkedIn\" or \"Order on WhatsApp\"." },
            { text: "Look and feel", detail: "Two colours plus mood words: \"calm, professional\" or \"bright, playful\"." },
            { text: "Real content, ready to paste", detail: "Your actual text, links and numbers. **If you don't give them, AI will invent placeholders.**" },
            { text: "What to leave out", detail: "Anything private: home address, ID numbers, a personal phone number (unless it's a business line)." },
          ],
        },
        {
          type: "tryIt",
          title: "Let AI interview you into a brief",
          intro: "Don't write the brief alone. Let the AI ask the questions, and you supply **the real answers**.",
          prompt:
            "I want to build a one-page website with AI, and I have no coding experience. Interview me to write a clear brief for it. Ask me one question at a time (about 8 in total), covering: purpose, audience, sections, the one action I want visitors to take, look and feel, and the real content I have. At the end, write the full brief as a tidy bullet list I can paste into an AI coding tool.",
          whatToNotice: [
            "Answer with **specifics**: \"a portfolio for product roles in Bengaluru\", not \"something nice\".",
            "Stuck on a question? Ask the AI for **three example answers** to choose from.",
            "==Save the final brief somewhere safe.== You'll paste it in the next lesson.",
          ],
        },
      ],
      keyTerms: [
        { term: "Portfolio", meaning: "A one-page site showing **your work and how to reach you**. The classic first site for a job hunt." },
        { term: "Audience", meaning: "Who the page is for, and the device they'll use. In India, **mostly a phone**." },
        { term: "Call to action (CTA)", meaning: "The **one thing** you want visitors to do, like \"Message me on LinkedIn\". Every page needs one clear CTA." },
        { term: "Placeholder", meaning: "Stand-in text like \"Project title here\". Without real content, **AI invents placeholders**." },
      ],
      jargonCard: {
        term: "Brief (or PRD)",
        oneLineAnalogy: "A one-page plan of **what you're building, for whom, and what it must do**, written before any code.",
        meetingDropLine: "\"Before we build anything, can we agree a one-page brief: purpose, audience, sections and the one action?\"",
      },
      quiz: [
        {
          id: "q7-1-1",
          scenario: "Which is the best first project for this capstone?",
          options: [
            { id: "a", text: "A one-page portfolio with your projects and LinkedIn link", isCorrect: true, analogyFeedback: "Exactly. **One page, your own content, nothing sensitive.** Perfect for a first build." },
            { id: "b", text: "An online store that takes card payments", isCorrect: false, analogyFeedback: "Not yet. Payments need **security reviews and legal checks**. Save it for later, with an engineer." },
            { id: "c", text: "A full social network with logins", isCorrect: false, analogyFeedback: "Too big. Logins and personal data need **proper security**. Start with one page." },
          ],
        },
        {
          id: "q7-1-2",
          scenario: "Why write the brief before asking AI to build anything?",
          options: [
            { id: "a", text: "Changing a sentence in the brief is free; changing a built site is slower and messier", isCorrect: true, analogyFeedback: "Right. It's the wedding card: **settle the details before you print**." },
            { id: "b", text: "AI refuses to write code without a brief", isCorrect: false, analogyFeedback: "Not quite. AI will happily build from a one-liner. It just **guesses everything you didn't say**." },
            { id: "c", text: "A brief makes the website load faster", isCorrect: false, analogyFeedback: "No. A brief shapes **what** gets built, not how fast it loads." },
          ],
        },
        {
          id: "q7-1-3",
          scenario: "Your brief just says \"add some projects\". What will the AI most likely do?",
          options: [
            { id: "a", text: "Invent placeholder projects that aren't yours", isCorrect: true, analogyFeedback: "Exactly. AI **fills gaps with plausible inventions**. Give it your real projects." },
            { id: "b", text: "Find your real projects online by itself", isCorrect: false, analogyFeedback: "Not quite. It doesn't know who you are. It will **make something up** instead." },
            { id: "c", text: "Leave the section empty", isCorrect: false, analogyFeedback: "Rarely. AI almost never leaves a blank. It writes **something plausible**." },
          ],
        },
      ],
    },
    {
      id: "capstone-build",
      title: "Build It With AI",
      subtitle: "Turn your brief into a working page",
      durationMinutes: 15,
      xpReward: 200,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline: "You direct, the AI builds. ==Your job is the brief, the feedback and the final check.==",
        explanation:
          "Paste your brief into any AI assistant and ask for **one single HTML file**. It's the simplest kind of website: one file that any browser can open, and that you can put online for free in the next lesson. Then improve it in **small, specific rounds**: a few changes per message, checked each time on a phone-sized screen. **Do this lesson on a laptop**; it's much easier to save and open files there.",
      },
      analogy: {
        title: "Trial Fittings at the Darzi",
        metaphor:
          "Your first stitched shirt is rarely perfect. So you go back for trial fittings: \"sleeves a little shorter\", \"collar softer\". Hand the darzi twenty changes at once and mistakes creep in. **Building with AI works the same way.** ==A few clear changes per message, then check the fit.==",
        visualComparison: [
          { everydayItem: "The first stitching", aiEquivalent: "The **first version** of your page" },
          { everydayItem: "\"Sleeves shorter, collar softer\"", aiEquivalent: "**A few specific changes** per message" },
          { everydayItem: "The final look in the mirror", aiEquivalent: "**Checking on your phone** before you publish" },
        ],
      },
      activities: [
        {
          type: "tryIt",
          title: "Generate your first version",
          intro: "Paste your brief where it says [PASTE YOUR BRIEF HERE]. The instructions stop the AI **inventing content**.",
          prompt:
            "Build my website as ONE complete HTML file, with all the CSS inside it (no other files, except Google Fonts). It must look great on a phone first, then on a laptop. Use only the content in my brief. Where something is missing, write [ADD: what's missing] instead of inventing it. Set a clear browser-tab title and a one-line page description.\n\nHere is my brief:\n[PASTE YOUR BRIEF HERE]",
          whatToNotice: [
            "**[ADD: …] markers** show exactly what content you still owe it. No made-up projects or fake reviews.",
            "Open the **Preview**, **Canvas** or **Artifact** view if your assistant has one. Otherwise save the code as **index.html** and double-click it.",
            "Check it at **phone width**: drag your browser window narrow, or open the file on your phone. ==Most of your visitors will be on a phone.==",
          ],
        },
        {
          type: "beforeAfter",
          title: "Asking for changes",
          before: { label: "Vague feedback", text: "Make it look better and more professional." },
          after: {
            label: "Specific feedback",
            text: "Three changes, nothing else:\n1. Make the headline bigger and bold.\n2. Change the background to off-white (#FBFAF7).\n3. Add more space between the project cards.\nKeep everything else exactly the same.",
          },
          whyItWorks: [
            "**Numbered, specific changes** are easy for the AI to make and easy for you to check.",
            "\"Keep everything else exactly the same\" **stops it rewriting** the parts you already liked.",
            "Three changes per round is plenty. **More, and mistakes creep in.**",
          ],
        },
        {
          type: "scenario",
          title: "When things go wrong",
          setting: "You're 20 minutes into building your portfolio page with AI.",
          steps: [
            {
              situation: "The latest version broke the layout: your photo now covers your name. What do you do?",
              choices: [
                {
                  text: "Describe it precisely: \"The photo now overlaps my name at the top. Put the photo above the name, centred. Keep everything else.\"",
                  isBest: true,
                  outcome: "Exactly. **Say what you see and what you want.** Precise bug reports get precise fixes.",
                },
                { text: "Type \"it's broken, fix it\"", isBest: false, outcome: "The AI has to guess what \"broken\" means, and **may change things that were fine**." },
                { text: "Start over in a new chat", isBest: false, outcome: "You'd lose all your progress. **Ask for a targeted fix first.**" },
              ],
            },
            {
              situation: "The AI added a \"Testimonials\" section with glowing quotes from people you've never met.",
              choices: [
                {
                  text: "Delete it, and tell the AI: \"Never invent content. Use only what I've given you.\"",
                  isBest: true,
                  outcome: "Right. **Fake testimonials are a hallucination** you'd be publishing under your own name.",
                },
                { text: "Keep them. They look impressive.", isBest: false, outcome: "Invented quotes can **embarrass you badly** when a recruiter or customer asks about them." },
              ],
            },
            {
              situation: "You love the current version, and now you want to try a bold new colour scheme.",
              choices: [
                {
                  text: "First save a copy of this version (for example as index-v1.html), then experiment",
                  isBest: true,
                  outcome: "Yes. That's your **checkpoint**, like keeping the good take. Now you can experiment without fear.",
                },
                { text: "Just ask for new colours. You'll remember the old ones.", isBest: false, outcome: "AI changes often touch more than you asked. **Without a saved copy, getting back is painful.**" },
              ],
            },
          ],
          debrief:
            "The build loop: **a few clear changes, check on a phone, save versions you like**, and never publish anything you haven't written or checked yourself.",
        },
        {
          type: "checklist",
          title: "Before you call it done",
          intro: "Tick every box before the next lesson. **This is your quality gate.**",
          items: [
            { text: "Every [ADD: …] marker is replaced with real content" },
            { text: "It looks right on a phone-sized screen", detail: "Text readable without zooming; buttons easy to tap." },
            { text: "Every link and button works", detail: "Tap each one: LinkedIn, email, WhatsApp, map links." },
            { text: "No invented content", detail: "No fake testimonials, numbers, clients or awards." },
            { text: "No private information", detail: "No home address, ID numbers or personal phone number unless it's meant to be public." },
            { text: "Your final version is saved as index.html", detail: "Exactly that name, all lower case." },
          ],
        },
      ],
      keyTerms: [
        { term: "Mobile-first", meaning: "Designing for a **phone screen first**, then laptops. Most of your visitors will arrive on a phone." },
        { term: "Checkpoint", meaning: "A saved copy of a version you liked, like **index-v1.html**, so you can always go back." },
        { term: "Bug report", meaning: "A precise note of **what you see and what you expected**. A much faster route to a fix than \"it's broken\"." },
      ],
      jargonCard: {
        term: "Single-File Site",
        oneLineAnalogy: "A whole web page in **one HTML file**: text, layout and styling together. It opens in any browser and is easy to publish.",
        meetingDropLine: "\"For the prototype, a single-file HTML page is enough. If it takes off, we can rebuild it properly.\"",
      },
      quiz: [
        {
          id: "q7-2-1",
          scenario: "Why ask the AI for one single HTML file?",
          options: [
            { id: "a", text: "It's the simplest kind of website: it opens in any browser and is easy to publish", isCorrect: true, analogyFeedback: "Exactly. **One file, no setup.** Perfect for a first site." },
            { id: "b", text: "AI can only write HTML", isCorrect: false, analogyFeedback: "Not quite. AI writes many languages. One HTML file is just **the simplest thing to open and publish**." },
            { id: "c", text: "Single files can never be hacked", isCorrect: false, analogyFeedback: "No. It's **simple**, not magically secure. Keep private data off it anyway." },
          ],
        },
        {
          id: "q7-2-2",
          scenario: "What's the best way to ask the AI for changes?",
          options: [
            { id: "a", text: "A few specific, numbered changes, plus \"keep everything else the same\"", isCorrect: true, analogyFeedback: "Right. **Trial fittings, not a full re-stitch.**" },
            { id: "b", text: "\"Make it better\", and hope", isCorrect: false, analogyFeedback: "Not quite. Vague asks get **random changes**. Say exactly what to change." },
            { id: "c", text: "List 25 changes in one message to save time", isCorrect: false, analogyFeedback: "Close, but no. Big batches make **mistakes creep in** and hard to spot." },
          ],
        },
        {
          id: "q7-2-3",
          scenario: "The AI adds \"Trusted by 500+ clients\" to your page, but you never said that. What is it?",
          options: [
            { id: "a", text: "A hallucination. Remove it.", isCorrect: true, analogyFeedback: "Exactly. **Invented claims under your name** are worse than no claim at all." },
            { id: "b", text: "Good marketing. Keep it.", isCorrect: false, analogyFeedback: "No. A false claim can **cost you trust** the moment anyone checks." },
            { id: "c", text: "A security feature", isCorrect: false, analogyFeedback: "Not at all. It's **made-up content**, the classic hallucination." },
          ],
        },
      ],
    },
    {
      id: "capstone-ship",
      title: "Ship It: Put Your Site Online",
      subtitle: "Publish free in minutes, then share it",
      durationMinutes: 12,
      xpReward: 250,
      lastUpdated: "Oct 28, 2026",
      sources: [
        { label: "Netlify Docs: Netlify Drop quickstart", url: "https://docs.netlify.com/start/quickstarts/netlify-drop-quickstart/" },
        { label: "Netlify Docs: Create and update deploys (drag and drop)", url: "https://docs.netlify.com/deploy/create-deploys/" },
      ],
      bigIdea: {
        headline: "A site isn't real until it has a link. ==Publishing one page takes minutes and costs nothing.==",
        explanation:
          "To put your page online you need **hosting**: an always-on computer that shows your page to anyone with the link. For a single HTML file, **Netlify Drop** is one of the simplest routes: drag a folder onto a web page and you get a live link. You don't need an account to try it, but **the site stays password-protected until you claim it** by signing up for a free Netlify account.",
      },
      analogy: {
        title: "From Your Diary to a Shop on the Main Road",
        metaphor:
          "Your index.html on your laptop is like a recipe in your diary: **only you can see it**. Publishing is like putting it in a shop window on the main road. Anyone with the address can walk up and see it, any time of day, ==even when your laptop is closed==.",
        visualComparison: [
          { everydayItem: "A recipe in your diary", aiEquivalent: "**index.html** sitting on your laptop" },
          { everydayItem: "A shop on the main road, open 24x7", aiEquivalent: "**Hosting**: Netlify keeps your page online" },
          { everydayItem: "The shop's address", aiEquivalent: "**Your site's link** (URL) that you share" },
        ],
      },
      activities: [
        {
          type: "checklist",
          title: "Publish with Netlify Drop, step by step",
          intro: "Do this on a laptop. **It takes about five minutes.** Tick each step as you go.",
          items: [
            { text: "Make a new folder named after your site", detail: "For example **my-portfolio**." },
            { text: "Save your final code inside it as index.html", detail: "Exactly that name, all lower case. It's the page browsers open first." },
            { text: "Open app.netlify.com/drop in your browser" },
            { text: "Drag the whole folder onto that page", detail: "Drag the **folder**, not just the file." },
            { text: "Sign up for a free Netlify account to claim the site", detail: "Until you claim it, the link is **password-protected**, so nobody else can see it yet." },
            { text: "Open your link on your phone and tap every button" },
            { text: "To update it later: drag the updated folder onto your site's Deploys page", detail: "There's a **drop zone at the bottom** of the Deploys page." },
          ],
        },
        {
          type: "scenario",
          title: "Launch-day decisions",
          setting: "Your page is live. You have the link. Now what?",
          steps: [
            {
              situation: "Right after publishing, you spot a typo in your headline.",
              choices: [
                {
                  text: "Fix it in index.html, then drag the updated folder onto your site's Deploys page in Netlify",
                  isBest: true,
                  outcome: "Exactly. **Updating is just publishing again.** Each drag is a new deploy of the same site.",
                },
                { text: "Leave it. Nobody will notice.", isBest: false, outcome: "Recruiters and customers notice typos. **Fixing it takes a minute.**" },
              ],
            },
            {
              situation: "Where should you share the link first?",
              choices: [
                {
                  text: "With 2–3 friends, asking: \"What's unclear, and what would make you click?\"",
                  isBest: true,
                  outcome: "Right. **A small test first**, like real product teams do. Fix what confuses them, then share widely.",
                },
                { text: "Post it everywhere immediately", isBest: false, outcome: "You only get one first impression. **A quick friends' test catches the embarrassing stuff.**" },
              ],
            },
            {
              situation: "A friend says it looks broken on their phone.",
              choices: [
                {
                  text: "Ask for a screenshot and their phone model, then describe the problem to the AI precisely",
                  isBest: true,
                  outcome: "Yes. **A screenshot plus a precise description** is the fastest route to a fix.",
                },
                { text: "Tell them to open it on a laptop instead", isBest: false, outcome: "Most people in India browse on phones. **If it breaks there, it's broken.**" },
              ],
            },
          ],
          debrief: "Shipping is a loop too: **publish, test with real people, fix, publish again.**",
        },
        {
          type: "tryIt",
          title: "Write your launch post",
          intro: "You built something real. Tell people, **in your own voice**.",
          prompt:
            "I just built and published my first website with AI, without writing code. Help me write a short LinkedIn post (under 120 words) announcing it. It's a [TYPE OF SITE] for [WHO IT'S FOR]. Link: [YOUR LINK]. Mention one thing I learned. Warm and humble, no buzzwords, at most two hashtags. Give me 2 options.",
          whatToNotice: [
            "Fill in the brackets with **real details**. Generic posts get scrolled past.",
            "Pick one option and **rewrite it in your own words** before posting.",
            "Share it in your WhatsApp groups too. ==That's where most people you know will actually click.==",
          ],
        },
      ],
      keyTerms: [
        { term: "URL", meaning: "A web address, like **a shop's street address**. Share it and anyone can visit." },
        { term: "Netlify Drop", meaning: "Netlify's page where you **drag a folder to publish it**. Claim the site with a free account to make it public." },
        { term: "index.html", meaning: "The file name browsers **open first** in a folder. Your main page must use exactly this name." },
      ],
      jargonCard: {
        term: "Hosting (and Deploy)",
        oneLineAnalogy: "**Hosting** is the always-open shop for your page; a **deploy** is each time you put a new version in the window.",
        meetingDropLine: "\"I've deployed the prototype on Netlify. Here's the link. Can you try it on your phone?\"",
      },
      quiz: [
        {
          id: "q7-3-1",
          scenario: "What does hosting do for your website?",
          options: [
            { id: "a", text: "Keeps your page on an always-on computer, so anyone with the link can see it", isCorrect: true, analogyFeedback: "Exactly. **The shop on the main road, open 24x7.**" },
            { id: "b", text: "Makes your design look better", isCorrect: false, analogyFeedback: "No. Hosting changes **who can see** the page, not how it looks." },
            { id: "c", text: "Writes the code for you", isCorrect: false, analogyFeedback: "Not quite. The AI wrote the code; hosting **keeps it online**." },
          ],
        },
        {
          id: "q7-3-2",
          scenario: "You dropped your folder on Netlify Drop without signing in. Why can't your friend see the page?",
          options: [
            { id: "a", text: "Unclaimed sites are password-protected until you claim them with a free account", isCorrect: true, analogyFeedback: "Right. **Sign up and claim it**, and the page opens to everyone." },
            { id: "b", text: "Netlify only works in the US", isCorrect: false, analogyFeedback: "No. Your link works worldwide **once the site is claimed**." },
            { id: "c", text: "Your friend's phone is too old", isCorrect: false, analogyFeedback: "Unlikely. The **password protection** on unclaimed sites is the reason." },
          ],
        },
        {
          id: "q7-3-3",
          scenario: "What should the main file in your folder be called?",
          options: [
            { id: "a", text: "index.html", isCorrect: true, analogyFeedback: "Exactly. Browsers open **index.html** first." },
            { id: "b", text: "website.txt", isCorrect: false, analogyFeedback: "No. A .txt file shows as plain text, **not as a web page**." },
            { id: "c", text: "final-final-v2.html", isCorrect: false, analogyFeedback: "Tempting, but no. Name it **index.html** so it opens as the main page." },
          ],
        },
      ],
    },
  ],
};

import type { Track } from "../types";

// The capstone: learners plan, design, write, build, optimize, and publish a real
// one-page website with AI across 10 step-by-step lessons.
export const TRACK_7: Track = {
  id: "track-7-capstone",
  number: 7,
  icon: "Rocket",
  title: "Capstone: Build and Launch Your Own Site",
  description:
    "Put everything together across 10 hands-on builder lessons: plan your brief, wireframe the flow, write human copy, build with AI, add WhatsApp lead capture, nail SEO preview cards, and publish live.",
  badgeName: "Builder",
  estimatedTime: "75 mins",
  lessons: [
    // LESSON 1
    {
      id: "capstone-plan",
      title: "Pick Your Site, Write the Brief",
      subtitle: "Choose a project and brief it like a pro",
      durationMinutes: 8,
      xpReward: 200,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline: "Great sites start as ==a clear one-page brief==, not as code.",
        explanation:
          "Over this track you'll **build and publish a real one-page website** with AI, without writing code by hand. Pick something useful: a **personal portfolio** for your job hunt, a page for a **side business** (tuition classes, a home bakery, consulting, photography), or an **event page** for a wedding or college fest. Then write the brief. **The brief does most of the work**; the AI just follows it.",
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
            { text: "An online shop that takes live credit card payments", bucket: 1, why: "Payments mean **security and legal checks**. Build that later, with an engineer." },
            { text: "A page for your weekend tuition classes with a WhatsApp button", bucket: 0, why: "Simple, useful, and the WhatsApp button is a clear **one action**." },
            { text: "An app where people log in and save their private medical data", bucket: 1, why: "Logins and stored personal data need **proper security**. Not a first project." },
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
            { text: "Look and feel", detail: "Two colours plus mood words: \"warm cream, deep navy, calm and editorial\"." },
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
            "==Save the final brief somewhere safe.== You'll use it across this track.",
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
            { id: "b", text: "An online store that processes credit card numbers directly", isCorrect: false, analogyFeedback: "Not yet. Payments need **security reviews and legal checks**." },
            { id: "c", text: "A full social network with user logins and private chat", isCorrect: false, analogyFeedback: "Too big. Logins and personal data need **proper backend security**." },
            { id: "d", text: "A portal for storing hospital Aadhaar records", isCorrect: false, analogyFeedback: "Never touch sensitive government IDs on a beginner project!" },
          ],
        },
        {
          id: "q7-1-2",
          scenario: "Why write the brief before asking AI to build anything?",
          options: [
            { id: "a", text: "AI refuses to write code without a 10-page document", isCorrect: false, analogyFeedback: "AI will happily build from a one-liner—it just **guesses everything you didn't say**." },
            { id: "b", text: "A brief makes the internet connection faster", isCorrect: false, analogyFeedback: "A brief shapes **what** gets built, not network speed." },
            { id: "c", text: "Changing a sentence in the brief is free; fixing a built site that guessed your goals wrong is slower and messier", isCorrect: true, analogyFeedback: "Right. It's the wedding card: **settle the details before you print**." },
            { id: "d", text: "Because HTML requires a brief tag", isCorrect: false, analogyFeedback: "There is no `<brief>` tag in HTML!" },
          ],
        },
        {
          id: "q7-1-3",
          scenario: "Your brief just says \"add some projects\" without listing your actual work. What will the AI most likely do?",
          options: [
            { id: "a", text: "Find your real projects on your laptop hard drive automatically", isCorrect: false, analogyFeedback: "A browser chat cannot search your laptop hard drive!" },
            { id: "b", text: "Leave the section completely invisible", isCorrect: false, analogyFeedback: "AI almost never leaves a blank—it writes **something plausible**." },
            { id: "c", text: "Call your college professor to ask", isCorrect: false, analogyFeedback: "Definitely not!" },
            { id: "d", text: "Invent plausible-sounding placeholder projects that aren't actually yours", isCorrect: true, analogyFeedback: "Exactly. AI **fills gaps with plausible inventions**. Give it your real projects." },
          ],
        },
      ],
    },

    // LESSON 2
    {
      id: "capstone-wireframing-and-page-flow",
      title: "Sketching the Page Flow: Hero, Proof, Offer & CTA",
      subtitle: "How to structure a high-converting 4-section page so visitors know who you are in 5 seconds",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Visitors decide whether to stay on your page in **under 5 seconds**. ==Every great one-page site follows a 4-beat rhythm: The Hook (Hero), The Proof (Work/Results), The Offer (How You Help), and The One Action (CTA).==",
        explanation:
          "Why do some personal websites and landing pages make you want to reach out immediately, while others feel like a confusing maze? Because amateurs design by **decorating** (adding random sliders, 5 navigation menus, and spinning animations), whereas pros design by **information hierarchy**. When a recruiter, client, or guest opens your link on their phone, their brain asks four questions in strict order: **1. Am I in the right place, and what do you do? (Hero Section)** -> **2. Can I trust you? Show me proof! (3 Concrete Projects or Case Studies)** -> **3. What exactly are you offering or looking for? (Services / About / Details)** -> **4. How do I take the next step in 1 tap? (Single Primary CTA)**.",
      },
      analogy: {
        title: "The Well-Run South Indian Darshini vs. A 14-Page Confusion Menu",
        metaphor:
          "Walk into a legendary Bengaluru darshini for breakfast: **1. The board right above the counter** tells you today's special in bold letters (*Crispy Masala Dosa & Filter Coffee*); **2. You can see and smell** the fresh golden dosas coming off the tawa right behind the glass (**Proof**); **3. Three clear combos** with exact rupee prices (**The Offer**); and **4. One single token counter** to place your order (**The One CTA**). ==Nobody gets lost, and everyone orders in 30 seconds.==",
        visualComparison: [
          {
            everydayItem: "Big board above the entrance: what this place is famous for",
            aiEquivalent: "**1. Hero Section (Above the Fold)**: 1-sentence value prop + subhead + primary CTA button",
          },
          {
            everydayItem: "Seeing the golden dosas sizzling on the tawa",
            aiEquivalent: "**2. Proof Section**: 3 real project cards, case studies, or before/after outcomes",
          },
          {
            everydayItem: "One clear token counter to pay and order",
            aiEquivalent: "**4. Single Call-to-Action (CTA)**: one unmissable button (not 7 competing links)",
          },
        ],
      },
      activities: [
        {
          type: "sort",
          title: "Above the Fold (Hero) vs. Below the Fold",
          instructions: "'Above the fold' means what a visitor sees on their phone screen **before scrolling even one inch**. Sort what belongs at the very top vs further down.",
          buckets: ["Belongs in the Hero (Top Screen)", "Belongs Further Down the Page"],
          items: [
            {
              text: "A crisp 10-word headline stating who you help and the outcome you deliver, plus your primary CTA button",
              bucket: 0,
              why: "Visitors must understand **what you do and how to contact you** within 5 seconds of landing.",
            },
            {
              text: "A 4-paragraph childhood biography starting with which school you attended in 2012",
              bucket: 1,
              why: "Put a concise 'About' section **below your strongest work**, not blocking the top of the screen.",
            },
            {
              text: "A 1-line credibility bar (e.g., 'Ex-Zomato Ops · Built 3 tools used by 4,000+ sellers')",
              bucket: 0,
              why: "A tiny **trust signal right under the headline** hooks the reader to scroll down.",
            },
            {
              text: "Detailed breakdown of your 3 project case studies and FAQ accordion",
              bucket: 1,
              why: "Great meat for **Sections 2 and 3** as the visitor scrolls.",
            },
          ],
        },
        {
          type: "tryIt",
          title: "Turn Your Brief Into a 4-Section Wireframe Outline",
          intro: "Before generating HTML, ask AI to map out the exact visual wireframe and section order.",
          prompt: "Using my website brief below, design a clean 4-section single-page wireframe outline following the Hero -> Proof -> Offer/About -> CTA structure.\n\nFor each section, tell me:\n1. The exact Headline and Subheadline text.\n2. How the cards or items should be arranged on a mobile screen vs a laptop screen.\n3. Why a visitor will keep scrolling to the next section.\n\nDo NOT write HTML code yet—just show me the visual blueprint so I can approve the structure first.\n\n[PASTE YOUR BRIEF]",
          whatToNotice: [
            "Approving the **4-section blueprint** in plain text takes 2 minutes and prevents the AI from generating a cluttered 12-section monster.",
            "Check that your **Primary CTA button** appears twice: once in the **Hero** at the top, and once in the **Footer CTA** at the bottom!",
          ],
        },
      ],
      realWorldApplication: {
        forWork:
          "Use the **5-Second Squint Test** on any landing page or slide at work: step back from the screen, squint your eyes for 5 seconds, and ask: *1. What is this page offering? 2. What is the one button I'm supposed to click?*",
        forLearning:
          "Notice how professional designers always go **Brief -> Text Wireframe -> Visual Build**. Skipping straight to code is why beginners get stuck.",
      },
      jargonCard: {
        term: "Above the Fold & Visual Hierarchy",
        oneLineAnalogy:
          "**Above the fold** is the top half of a folded newspaper (what you see on a phone before scrolling); **Visual Hierarchy** is making the most important thing the biggest and clearest.",
        meetingDropLine:
          "\"Right now our value proposition is buried below the fold—let's put a single clear headline and primary CTA in the hero section.\"",
      },
      quiz: [
        {
          id: "q7-2-1",
          scenario:
            "What does **'Above the Fold'** mean in web design?",
          options: [
            {
              id: "a",
              text: "The part of the webpage visible on the user's screen immediately upon loading, before they scroll down at all.",
              isCorrect: true,
              analogyFeedback: "Spot on. Named after the top half of a folded newspaper on a newsstand—it has to hook the reader in 5 seconds!",
            },
            {
              id: "b",
              text: "A special CSS code for foldable Samsung phones only.",
              isCorrect: false,
              analogyFeedback: "'Above the fold' applies to every phone and laptop screen!",
            },
            {
              id: "c",
              text: "The hidden footer at the very bottom of the page.",
              isCorrect: false,
              analogyFeedback: "The footer is at the very bottom (*below* the fold).",
            },
            {
              id: "d",
              text: "Origami paper folding instructions.",
              isCorrect: false,
              analogyFeedback: "Not paper origami!",
            },
          ],
        },
        {
          id: "q7-2-2",
          scenario:
            "A friend's portfolio page has **7 different buttons** in the top hero section: *'Read My Blog', 'Follow on Instagram', 'Download PDF', 'View Gallery', 'Subscribe to Newsletter', 'Check My Spotify', 'Book a Call'*. Why does nobody click any of them?",
          options: [
            {
              id: "a",
              text: "Because buttons don't work on smartphones.",
              isCorrect: false,
              analogyFeedback: "Buttons work great on phones—when there's a clear primary choice!",
            },
            {
              id: "b",
              text: "Decision fatigue (paradox of choice): when 7 buttons compete for equal attention, the visitor gets overwhelmed and closes the tab. A page should have ONE unmistakable primary Call-to-Action.",
              isCorrect: true,
              analogyFeedback: "Correct! Give visitors **one clear main door** to walk through (plus at most one quiet secondary link).",
            },
            {
              id: "c",
              text: "Because 7 is an odd number; 8 buttons would work.",
              isCorrect: false,
              analogyFeedback: "8 competing buttons is even worse!",
            },
            {
              id: "d",
              text: "Because Spotify links crash browsers.",
              isCorrect: false,
              analogyFeedback: "It's about attention and visual hierarchy, not browser crashes.",
            },
          ],
        },
        {
          id: "q7-2-3",
          scenario:
            "In what order should the core sections of a persuasive one-page portfolio or service site generally flow?",
          options: [
            {
              id: "a",
              text: "Privacy Policy -> Childhood Story -> 40 Links -> Headline at the very bottom.",
              isCorrect: false,
              analogyFeedback: "Nobody scrolls past a privacy policy at the top of a page!",
            },
            {
              id: "b",
              text: "Random order shuffled every time the page refreshes.",
              isCorrect: false,
              analogyFeedback: "Shuffling sections confuses visitors.",
            },
            {
              id: "c",
              text: "1. Hero (Clear Hook + Primary CTA) -> 2. Proof (3 Concrete Projects / Results) -> 3. Offer / About (How You Work) -> 4. Final Call-to-Action.",
              isCorrect: true,
              analogyFeedback: "Exactly. **Hook them, prove it with real work, explain how you help, and invite action.**",
            },
            {
              id: "d",
              text: "Only a blank white screen with an email address in 6px font.",
              isCorrect: false,
              analogyFeedback: "Too minimal—visitors won't know who you are or why they should email you!",
            },
          ],
        },
      ],
    },

    // LESSON 3
    {
      id: "capstone-copywriting-that-converts",
      title: "Writing Human Copy That Converts—Zero Corporate Fluff",
      subtitle: "How to write headlines, project cards, and offers that make recruiters and clients actually click",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "Visitors don't read websites word-for-word; they **scan** them. ==Replace vague self-praise ('Passionate problem solver') with concrete outcomes ('Built an inventory tracker that cut stockouts by 32%').==",
        explanation:
          "If you let an AI write your website text without strict rules, it will write: *'Welcome to my digital portfolio! I am a passionate, results-driven visionary dedicated to leveraging cutting-edge solutions.'* Every recruiter and client has seen that sentence 10,000 times—and it says **nothing**. Great web copy follows three rules: **1. Outcomes over Adjectives** (show a number, a before/after, or a tangible artefact instead of calling yourself 'hardworking'); **2. Scannable Micro-Copy** (every project card has **Problem · What I Built · Result** in under 45 words); and **3. First-Person Warmth** (write like a sharp, helpful human talking across a coffee table in Indiranagar or Bandra).",
      },
      analogy: {
        title: "\"Best Sweets in Town\" vs. \"Hot Mysore Pak Made in Pure Ghee Every 30 Mins\"",
        metaphor:
          "Walk down a market street and you'll see ten shops with a faded board saying **'Best Quality Sweets & Snacks'**. Your eyes slide right past them. Then one shop has a sign: **'Hot Mysore Pak — Fresh Batch Every 30 Mins in Pure Cow Ghee (₹60)'**. Your mouth waters immediately! Why? ==Because concrete specifics create instant trust, while vague adjectives create zero trust.==",
        visualComparison: [
          {
            everydayItem: "\"Best Quality Sweets & Snacks\" (vague adjective)",
            aiEquivalent: "**Weak Hero Headline**: \"Passionate Finance & Analytics Professional\"",
          },
          {
            everydayItem: "\"Hot Mysore Pak in Pure Ghee Every 30 Mins\"",
            aiEquivalent: "**Specific Hero Headline**: \"FP&A Analyst helping D2C brands turn messy Shopify & GST data into 1-page weekly cashflow boards\"",
          },
          {
            everydayItem: "Ingredient list + weight + price on the box",
            aiEquivalent: "**3-Line Project Card**: **The Problem** · **What I Built** · **The Measurable Result**",
          },
        ],
      },
      activities: [
        {
          type: "beforeAfter",
          title: "Adjective Soup vs. Concrete Outcome Copy",
          before: {
            label: "Default AI / Resume Cliché Copy",
            text: "Hero: Welcome to the portfolio of Rohan Sharma. I am a passionate, detail-oriented Marketing & Growth Specialist who leverages innovative strategies to elevate brand presence.\n\nProject 1: Social Media Campaign. Managed Instagram and worked hard to increase engagement seamlessly.",
          },
          after: {
            label: "Concrete, Scannable Human Copy",
            text: "Hero: I help Indian B2B SaaS startups turn technical product updates into LinkedIn & YouTube stories that book demos.\n\nProject 1: Rebuilt AcmeCloud's Launch Playbook\n- Problem: Product launches were getting <500 views on LinkedIn.\n- What I Did: Replaced corporate PDFs with 60-second founder loom walkthroughs + customer teardown threads.\n- Result: 42,000 organic views and 19 qualified enterprise demo bookings in 3 weeks.",
          },
          whyItWorks: [
            "The Hero headline names **who you help (`Indian B2B SaaS startups`)** and **the tangible outcome (`stories that book demos`)**.",
            "The Project Card uses the **Problem -> What I Did -> Result** formula with real numbers (`<500 views` -> `42,000 views`, `19 demos`).",
            "Zero banned AI-slop words (*passionate, leverage, elevate, seamless*).",
          ],
        },
        {
          type: "tryIt",
          title: "Sharpen Your Headline & 3 Project Cards With AI",
          intro: "Run your rough project or business notes through this copywriting prompt before you generate your website code.",
          prompt: "Act as a direct-response copywriter who hates corporate buzzwords. Rewrite the copy for my one-page website using my rough notes below:\n\n1. Give me 3 options for the HERO HEADLINE + SUBHEADLINE. Each must clearly state who it's for and the specific outcome, in plain conversational English.\n2. Format each of my 3 PROJECTS / SERVICES into a scannable card under 45 words with three bold labels: **The Problem**, **What I Did**, and **The Outcome**.\n3. Write 2 options for the PRIMARY BUTTON TEXT (specific action like 'Get the Free Sample Sheet' or 'Message Me on WhatsApp', never vague words like 'Submit').\n4. BANNED WORDS: passionate, visionary, delve, elevate, unlock, leverage, seamless, cutting-edge, synergy, Welcome to my website.\n\nMY ROUGH NOTES:\n[PASTE YOUR ROUGH NOTES HERE]",
          whatToNotice: [
            "Look at the button text: **'Chat on WhatsApp for Batch Timings'** gets 2x more clicks than a cold button that just says **'Submit'** or **'Click Here'**.",
            "Paste the sharpened copy straight into your saved site brief!",
          ],
        },
      ],
      realWorldApplication: {
        forWork:
          "This exact **Problem -> What I Did -> Result** formula works not just on your website, but also on your **LinkedIn Experience section, performance self-reviews, and client case studies**.",
        forLearning:
          "Read your website copy out loud. If you wouldn't say a sentence out loud to a smart friend at a café (*'I strive to synergize paradigm shifts'*), delete it!",
      },
      jargonCard: {
        term: "Micro-Copy & Conversion Copywriting",
        oneLineAnalogy:
          "**Conversion Copywriting** replaces vague bragging with specific proof; **Micro-Copy** is the tiny, high-impact text on buttons and labels (*'Message on WhatsApp — replies in 2 hrs'* vs *'Submit'*).",
        meetingDropLine:
          "\"Let's replace the generic 'Submit' button micro-copy with a specific outcome like 'Get Instant Fee Breakdown on WhatsApp'.\"",
      },
      quiz: [
        {
          id: "q7-3-1",
          scenario:
            "Which Hero Headline is strongest for a freelance chartered accountant's one-page website?",
          options: [
            {
              id: "a",
              text: "\"Welcome to My Website! I Am a Passionate & Hardworking Number Lover.\"",
              isCorrect: false,
              analogyFeedback: "'Welcome to my website' wastes the most valuable 3 seconds on the page!",
            },
            {
              id: "b",
              text: "\" GST, ITR & Startup Compliance for Bengaluru Founders—Filed on Time, Zero Notice Headaches.\"",
              isCorrect: true,
              analogyFeedback: "Spot on! Names the **exact services, the exact audience, and the concrete relief** in one scannable line.",
            },
            {
              id: "c",
              text: "\"Leveraging Holistic Financial Synergies in Today's Dynamic Landscape.\"",
              isCorrect: false,
              analogyFeedback: "100% AI slop—visitors won't even know if you file taxes or sell insurance!",
            },
            {
              id: "d",
              text: "\"Home Page\"",
              isCorrect: false,
              analogyFeedback: "Never waste your main headline on the words 'Home Page'!",
            },
          ],
        },
        {
          id: "q7-3-2",
          scenario:
            "What is the best structure for each of the **3 Project / Case Study cards** on a portfolio page?",
          options: [
            {
              id: "a",
              text: "Problem · What I Built/Did · Measurable Result (in under 45 scannable words).",
              isCorrect: true,
              analogyFeedback: "Correct! A busy recruiter or client can scan **Problem -> Action -> Result** in 6 seconds flat.",
            },
            {
              id: "b",
              text: "A single 600-word paragraph with no line breaks.",
              isCorrect: false,
              analogyFeedback: "Walls of text on a mobile screen get skipped immediately.",
            },
            {
              id: "c",
              text: "Only a blurry stock photo of a laptop.",
              isCorrect: false,
              analogyFeedback: "Generic laptop stock photos add zero credibility.",
            },
            {
              id: "d",
              text: "A list of 50 software icons with no explanation of what you actually built.",
              isCorrect: false,
              analogyFeedback: "Tools without outcomes don't prove what you can deliver.",
            },
          ],
        },
        {
          id: "q7-3-3",
          scenario:
            "Why does button micro-copy like **'Book Free 15-Min Trial Class on WhatsApp'** outperform a button that just says **'Submit'**?",
          options: [
            {
              id: "a",
              text: "Because the word 'Submit' is banned by Google.",
              isCorrect: false,
              analogyFeedback: "Not banned—just cold and vague!",
            },
            {
              id: "b",
              text: "Because specific button text tells the visitor exactly what value they get and what happens next when they tap, lowering anxiety and friction.",
              isCorrect: true,
              analogyFeedback: "Exactly. Nobody wakes up wanting to 'Submit'—they want to **get the trial class or price sheet**.",
            },
            {
              id: "c",
              text: "Because longer buttons use more electricity.",
              isCorrect: false,
              analogyFeedback: "Nothing to do with electricity!",
            },
            {
              id: "d",
              text: "Because green buttons only work with 7 words.",
              isCorrect: false,
              analogyFeedback: "It's the clarity of the promise, not a magic word count.",
            },
          ],
        },
      ],
    },

    // LESSON 4
    {
      id: "capstone-build",
      title: "Build It With AI & Iterate Like a Director",
      subtitle: "Turn your brief and copy into a working single-file HTML page",
      durationMinutes: 12,
      xpReward: 200,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline: "You direct, the AI builds. ==Your job is the brief, the 3-change iteration loop, and the final check.==",
        explanation:
          "Paste your brief and sharpened copy into any AI assistant and ask for **one single HTML file**. It's the simplest kind of website: one file that any browser can open, and that you can put online for free. Then improve it in **small, specific rounds**: at most 3 changes per message, checked each time on a phone-sized screen. **Do this lesson on a laptop**; it's much easier to save and open files there.",
      },
      analogy: {
        title: "Trial Fittings at the Darzi",
        metaphor:
          "Your first stitched shirt is rarely perfect. So you go back for trial fittings: \"sleeves a little shorter\", \"collar softer\". Hand the darzi twenty changes at once and mistakes creep in. **Building with AI works the same way.** ==A few clear changes per message, then check the fit.==",
        visualComparison: [
          { everydayItem: "The first stitching", aiEquivalent: "The **first version** of your page (`index.html`)" },
          { everydayItem: "\"Sleeves shorter, collar softer\"", aiEquivalent: "**3 specific changes** per message" },
          { everydayItem: "Keeping the good shirt safe before trying a risky alteration", aiEquivalent: "**Saving a checkpoint (`index-v1.html`)** before experimenting" },
        ],
      },
      activities: [
        {
          type: "tryIt",
          title: "Generate your first version",
          intro: "Paste your brief where it says `[PASTE YOUR BRIEF HERE]`. The instructions stop the AI **inventing fake content**.",
          prompt:
            "Build my website as ONE complete HTML file, with all the CSS inside it (no external files, except Google Fonts). It must look great on a phone first, then on a laptop. Use only the content in my brief. Where something is missing, write [ADD: what's missing] instead of inventing it. Set a clear browser-tab title and a one-line page description.\n\nHere is my brief:\n[PASTE YOUR BRIEF HERE]",
          whatToNotice: [
            "**`[ADD: …]` markers** show exactly what content you still owe it. No made-up projects or fake reviews.",
            "Open the **Preview**, **Canvas** or **Artifact** view if your assistant has one. Otherwise save the code as **index.html** and double-click it.",
            "Check it at **phone width**: drag your browser window narrow, or open the file on your phone. ==Most of your visitors will be on a phone.==",
          ],
        },
        {
          type: "beforeAfter",
          title: "Asking for changes",
          before: { label: "Vague feedback", text: "Make it look better and more professional." },
          after: {
            label: "Specific 3-point feedback",
            text: "Three changes, nothing else:\n1. Make the hero headline bigger and bold.\n2. Change the page background to warm off-white (#FBFAF7).\n3. Add more vertical space between the 3 project cards.\nKeep everything else exactly the same, and output the complete updated index.html file.",
          },
          whyItWorks: [
            "**Numbered, specific changes** are easy for the AI to make and easy for you to check.",
            "\"Keep everything else exactly the same\" **stops it rewriting** the parts you already liked.",
            "Asking for the **complete updated `index.html` file** prevents lazy `// ... rest of code here` truncation.",
          ],
        },
        {
          type: "scenario",
          title: "When things go wrong during the build",
          setting: "You're 15 minutes into building your portfolio page with AI.",
          steps: [
            {
              situation: "The latest version broke the layout: your photo now overlaps your name at the top. What do you do?",
              choices: [
                {
                  text: "Describe it precisely: \"The photo now overlaps my name at the top. Put the photo above the name, centred, with 16px space below it. Keep everything else.\"",
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
                  text: "Delete it, and tell the AI: \"Remove the Testimonials section. Never invent content—use only what I've given you.\"",
                  isBest: true,
                  outcome: "Right. **Fake testimonials are a hallucination** you'd be publishing under your own name.",
                },
                { text: "Keep them. They look impressive.", isBest: false, outcome: "Invented quotes can **embarrass you badly** when a recruiter or customer asks about them." },
              ],
            },
            {
              situation: "You love the current version, and now you want to try a bold dark-mode colour scheme.",
              choices: [
                {
                  text: "First save a copy of this working version as `index-v1.html` on your computer, then experiment.",
                  isBest: true,
                  outcome: "Yes. That's your **checkpoint**. Now you can experiment without fear of losing your working page.",
                },
                { text: "Just ask for new colours without saving.", isBest: false, outcome: "Without a saved copy, getting back to the exact layout you loved can be painful." },
              ],
            },
          ],
          debrief:
            "The build loop: **3 clear changes per round, save checkpoints (`index-v1.html`), and always ask for the complete file so no code gets cut off.**",
        },
      ],
      keyTerms: [
        { term: "Checkpoint", meaning: "A saved copy of a version you liked, like **index-v1.html**, so you can always go back if an experiment breaks." },
        { term: "Bug report", meaning: "A precise note of **what you see on screen and what you expected instead**." },
      ],
      jargonCard: {
        term: "Single-File Site & Checkpoints",
        oneLineAnalogy: "A whole web page in **one HTML file** (text, layout and styling together), with **saved checkpoints (`v1`, `v2`)** before every big experiment.",
        meetingDropLine: "\"For the prototype, a single-file HTML page is enough—let's save a checkpoint before we test the new layout.\"",
      },
      quiz: [
        {
          id: "q7-4-1",
          scenario: "Why ask the AI for **one single HTML file** with CSS included inside it for your first website?",
          options: [
            { id: "a", text: "It's the simplest kind of website: zero build tools needed, opens in any browser with a double-click, and deploys in 30 seconds.", isCorrect: true, analogyFeedback: "Exactly. **One file, zero setup.** Perfect for a first live site." },
            { id: "b", text: "Because AI cannot write separate CSS files.", isCorrect: false, analogyFeedback: "AI can write multi-file projects easily, but a single file has zero moving parts to break." },
            { id: "c", text: "Because single files are immune to typos.", isCorrect: false, analogyFeedback: "You still need to proofread your text!" },
            { id: "d", text: "Because browsers charge money for second files.", isCorrect: false, analogyFeedback: "Browsers don't charge per file!" },
          ],
        },
        {
          id: "q7-4-2",
          scenario: "What's the most reliable way to ask the AI for visual or copy changes on your page?",
          options: [
            { id: "a", text: "\"Make it pop more\", and hope for the best.", isCorrect: false, analogyFeedback: "Vague asks get **random changes**." },
            { id: "b", text: "List 30 different changes in one giant paragraph.", isCorrect: false, analogyFeedback: "Big batches make **mistakes creep in**." },
            { id: "c", text: "Give 2–3 specific, numbered changes, plus \"Keep everything else exactly the same and output the complete HTML file.\"", isCorrect: true, analogyFeedback: "Right. **Trial fittings, not a full re-stitch.**" },
            { id: "d", text: "Delete your prompt and start from zero every time.", isCorrect: false, analogyFeedback: "Iterate on the version that works!" },
          ],
        },
        {
          id: "q7-4-3",
          scenario: "The AI adds **\"Trusted by 500+ clients across India\"** to your tuition page, even though you just started and have 12 students. What should you do?",
          options: [
            { id: "a", text: "Keep it—nobody checks numbers on websites.", isCorrect: false, analogyFeedback: "False claims destroy trust the moment a parent or recruiter asks a follow-up question." },
            { id: "b", text: "Change 500+ to 10,000+.", isCorrect: false, analogyFeedback: "Even worse!" },
            { id: "c", text: "Blame the browser.", isCorrect: false, analogyFeedback: "The browser just renders the HTML you give it." },
            { id: "d", text: "Remove the invented claim immediately and replace it with your real, honest details (e.g., 'Small batches of 6 students for personal attention').", isCorrect: true, analogyFeedback: "Spot on. **Specific honesty ('Small batches of 6 students')** is far more persuasive than fake bragging!" },
          ],
        },
      ],
    },

    // LESSON 5
    {
      id: "capstone-mobile-first-and-accessibility",
      title: "Designing for the Indian Smartphone Screen",
      subtitle: "How to test tap targets, contrast in bright sunlight, and fast loading on 4G/5G mobile networks",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "In India, **over 80% of people who click your link will open it on a smartphone**—often inside WhatsApp or LinkedIn's in-app browser while commuting. ==If your site only looks good on a 15-inch MacBook, it's broken for 4 out of 5 visitors.==",
        explanation:
          "You're building your site on a laptop, so it's easy to fall into the **Desktop Trap**: tiny 12px text, three narrow columns squished side-by-side, a 9-megabyte uncompressed photo that takes 14 seconds to load on metro-train 4G, and tiny links so close together that a thumb tap hits the wrong one. Professional builders run a **Mobile & Accessibility Audit**: **1. Responsive Stacking** (columns stack into 1 clean vertical column on screens under `768px`); **2. Thumb-Friendly Tap Targets** (buttons at least `44px–48px` tall); **3. High Contrast** (dark crisp text on light backgrounds or vice versa—never pale grey text on white that disappears in bright Indian sunlight); and **4. Lightweight Assets** (compressed images under `200KB`).",
      },
      analogy: {
        title: "Reading a Highway Billboard vs. Fine Print on a Medicine Bottle",
        metaphor:
          "On a quiet laptop desk indoors, people can squint at tiny grey text and click a 10-pixel link with a precision mouse pointer. On a **moving Mumbai local or Bengaluru metro in bright midday glare**, your visitor is holding their phone in **one hand** and scrolling with their **thumb**. ==Your mobile page needs to read like a clean highway signboard with big, thumb-sized buttons—not the fine print on a cough-syrup bottle.==",
        visualComparison: [
          {
            everydayItem: "3 columns squished horizontally so you have to pinch-and-zoom",
            aiEquivalent: "**Desktop-Only Layout Bug**: missing `<meta name=\"viewport\">` or missing mobile responsive stacking",
          },
          {
            everydayItem: "Elevator button big enough to press with your thumb while carrying bags",
            aiEquivalent: "**48px Tap Target + Sticky Bottom CTA**: effortless 1-thumb mobile tapping",
          },
          {
            everydayItem: "Dark ink on crisp cream paper readable in bright sun",
            aiEquivalent: "**WCAG High Contrast + 16px+ Body Font**: zero squinting outdoors",
          },
        ],
      },
      activities: [
        {
          type: "checklist",
          title: "The 2-Minute Phone Screen Audit",
          intro: "Open your `index.html` in Chrome/Edge/Safari, right-click -> **Inspect**, and click the little **Phone/Tablet icon** (or resize your browser window as narrow as a phone). Check these 5 things:",
          items: [
            {
              text: "1. Zero Horizontal Scrolling",
              detail: "Try swiping left and right at phone width. If the page wobbles sideways or text gets cut off on the right edge, ask AI to fix horizontal overflow!",
            },
            {
              text: "2. Multi-column cards stack into 1 vertical column on mobile",
              detail: "Three project cards side-by-side on a laptop should automatically stack **one below the other** on a phone.",
            },
            {
              text: "3. Body text is at least 16px (`1rem`) with comfortable line spacing",
              detail: "Nobody should ever have to pinch-to-zoom to read a sentence.",
            },
            {
              text: "4. Buttons are full-width or at least 48px tall on mobile",
              detail: "Easy to tap with either thumb without accidentally hitting another link.",
            },
            {
              text: "5. Photos are compressed (under 200KB) or use clean SVG icons",
              detail: "A raw 8MB camera photo makes visitors close the tab before it loads.",
            },
          ],
        },
        {
          type: "tryIt",
          title: "Run the Mobile & Accessibility Upgrade Prompt",
          intro: "Paste this into your AI chat to make your `index.html` pass every mobile and readability check.",
          prompt: "Audit and upgrade my current index.html for mobile smartphones and accessibility:\n\n1. Ensure `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` is present.\n2. At mobile widths (`max-width: 768px`), stack all multi-column grids into a single vertical column with `16px` side padding and zero horizontal scroll (`overflow-x: hidden`).\n3. Make body text at least `16px` (`1rem`) with `1.6` line-height and strong text contrast so it's easily readable outdoors in bright sunlight.\n4. Make all buttons at least `48px` tall with generous tap padding, and make the primary CTA button full-width on mobile screens.\n5. Keep all my existing content and colours intact, and output the complete updated index.html.",
          whatToNotice: [
            "Resize your browser window from wide (laptop) to narrow (phone) and watch the cards smoothly stack into one clean column!",
            "Notice how a **full-width button on mobile** looks like a native app and is effortless to tap.",
          ],
        },
      ],
      realWorldApplication: {
        forWork:
          "Whenever an agency or designer sends you a new landing page preview at work, **open the link on your phone first** before looking at it on your laptop. You'll immediately catch 90% of UX issues.",
        forLearning:
          "That `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` line in the prompt is the single line of HTML that tells mobile browsers *'Don't shrink this page like a tiny desktop screen—render it at real phone scale!'*",
      },
      jargonCard: {
        term: "Responsive Design & Tap Targets",
        oneLineAnalogy:
          "**Responsive Design** is water pouring cleanly into either a wide bowl (laptop) or a tall glass (phone); **Tap Targets** are buttons sized for a human thumb (`48px`), not a needle.",
        meetingDropLine:
          "\"80% of our WhatsApp campaign traffic is on mobile—let's check the responsive stacking and make sure the CTA tap target is at least 48px.\"",
      },
      quiz: [
        {
          id: "q7-5-1",
          scenario:
            "You open your newly built website on your phone and have to **swipe left and right horizontally** to read the end of every sentence. What is the bug, and how do you ask AI to fix it?",
          options: [
            {
              id: "a",
              text: "Horizontal overflow (an element has a fixed pixel width wider than the phone screen). Ask the AI: 'Fix the horizontal scroll on mobile so all sections fit within 100% viewport width and stack vertically.'",
              isCorrect: true,
              analogyFeedback: "Spot on. **Zero horizontal scrolling** is Rule #1 of mobile web design.",
            },
            {
              id: "b",
              text: "Buy a wider phone.",
              isCorrect: false,
              analogyFeedback: "Your visitors won't buy a new phone to read your site!",
            },
            {
              id: "c",
              text: "Delete half the words in every sentence.",
              isCorrect: false,
              analogyFeedback: "Text should wrap naturally to the next line, not get deleted.",
            },
            {
              id: "d",
              text: "Turn your phone upside down.",
              isCorrect: false,
              analogyFeedback: "Won't fix a fixed-width CSS bug!",
            },
          ],
        },
        {
          id: "q7-5-2",
          scenario:
            "Why is light-grey text (`#CCCCCC`) on a white background (`#FFFFFF`) a terrible choice for a mobile website in India?",
          options: [
            {
              id: "a",
              text: "Because grey pixels cost more money.",
              isCorrect: false,
              analogyFeedback: "All hex colours are free!",
            },
            {
              id: "b",
              text: "Because low contrast is nearly invisible on phone screens outdoors in bright sunlight or on budget displays with low brightness, failing accessibility standards.",
              isCorrect: true,
              analogyFeedback: "Correct! High contrast ensures everyone can read your page effortlessly, indoors or outdoors.",
            },
            {
              id: "c",
              text: "Because only black-and-white phones exist.",
              isCorrect: false,
              analogyFeedback: "Even on the newest OLED phone, pale grey on white washes out in daylight.",
            },
            {
              id: "d",
              text: "Because Google bans the colour grey.",
              isCorrect: false,
              analogyFeedback: "Google doesn't ban colours, though low contrast hurts usability!",
            },
          ],
        },
        {
          id: "q7-5-3",
          scenario:
            "What is the recommended minimum height for a mobile button (**tap target**) so users can tap it comfortably with their thumb?",
          options: [
            {
              id: "a",
              text: "4 pixels tall (the size of a grain of rice).",
              isCorrect: false,
              analogyFeedback: "Impossible to tap with a human thumb!",
            },
            {
              id: "b",
              text: "2,000 pixels tall (covering 3 entire screens).",
              isCorrect: false,
              analogyFeedback: "Way too giant!",
            },
            {
              id: "c",
              text: "At least 44px to 48px tall, with comfortable spacing around it.",
              isCorrect: true,
              analogyFeedback: "Exactly. **44–48px** is the universal mobile ergonomics standard (Apple HIG & Material Design).",
            },
            {
              id: "d",
              text: "Buttons should be invisible on mobile.",
              isCorrect: false,
              analogyFeedback: "Invisible buttons get zero clicks!",
            },
          ],
        },
      ],
    },

    // LESSON 6
    {
      id: "capstone-forms-and-whatsapp-leads",
      title: "Connecting a Click-to-WhatsApp Button or Lead Form",
      subtitle: "How to make your CTA button actually start a pre-filled WhatsApp chat, open an email, or capture leads with zero backend code",
      durationMinutes: 7,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "A fake contact form that goes nowhere is the #1 beginner trap. ==On a static one-page site, use a Pre-Filled Click-to-WhatsApp link (`wa.me`), a pre-filled `mailto:` / LinkedIn link, or a free form endpoint so every tap reaches you instantly.==",
        explanation:
          "Here is a secret that surprises many first-time builders: if you ask AI to *'Add a Contact Us form with Name, Email, and Message boxes'* inside a static HTML file, the form looks pretty on screen—**but when someone clicks Submit, the message goes nowhere** because there is no backend server connected to it! Instead, you have three **100% working, zero-server options**: **1. The `wa.me` Pre-Filled WhatsApp Link** (in India, WhatsApp converts 3x–5x better than email forms for tuition, consulting, events, and local businesses); **2. Direct LinkedIn / Pre-Filled `mailto:` Link** (ideal for job-hunt portfolios, where you don't want your personal phone number public); or **3. A Free Static Form Service** (like Formspree, Netlify Forms, or an embedded Google Form / Tally form).",
      },
      analogy: {
        title: "A Unplugged Toy Bell vs. A Direct Intercom to Your Phone",
        metaphor:
          "Putting an HTML `<form>` on a static page without a backend is like gluing a **plastic doorbell button** to your gate with **no wires connected behind it**. Visitors press it politely, wait outside, think you ignored them, and walk away! A **Click-to-WhatsApp (`wa.me`) link** or a **Netlify Form / Google Form** is a **real wired intercom** ==that rings straight in your pocket the second a visitor taps the button.==",
        visualComparison: [
          {
            everydayItem: "Plastic doorbell with no wires behind it",
            aiEquivalent: "**Unconnected HTML `<form>`**: looks real, silently drops every message into the void",
          },
          {
            everydayItem: "1-tap intercom that opens WhatsApp with the message already typed",
            aiEquivalent: "**`https://wa.me/9198XXXXXXXX?text=...`**: opens WhatsApp with a pre-filled intro message",
          },
          {
            everydayItem: "Professional receptionist logging inquiries into a sheet",
            aiEquivalent: "**Netlify Forms (`data-netlify=\"true\"`) / Tally / Google Forms**: saves form submissions without coding a server",
          },
        ],
      },
      activities: [
        {
          type: "sort",
          title: "Pick the Right Contact Mechanism for Your Site",
          instructions: "Match each type of one-page site to the safest, highest-converting contact method.",
          buckets: ["LinkedIn + Pre-filled Email (Keep Phone Private)", "Pre-filled Click-to-WhatsApp (`wa.me`) or Embedded Form"],
          items: [
            {
              text: "A public job-hunt portfolio for Product Manager or Software Engineer roles",
              bucket: 0,
              why: "Recruiters live on **LinkedIn and email**—and keeping your personal mobile number off the public web prevents spam calls!",
            },
            {
              text: "A neighbourhood home bakery taking custom birthday cake orders in Pune",
              bucket: 1,
              why: "Customers love ordering via a **1-tap WhatsApp link** pre-filled with *'Hi! I'd like to order a cake for [Date]'*.",
            },
            {
              text: "Weekend Class 10 Maths tuition batches using a dedicated business WhatsApp number",
              bucket: 1,
              why: "Parents in India strongly prefer **WhatsApp** to ask about batch timings and fees.",
            },
            {
              text: "An academic research profile for university applications",
              bucket: 0,
              why: "Professors and admissions committees use **email and Google Scholar / LinkedIn links**.",
            },
          ],
        },
        {
          type: "tryIt",
          title: "Wire Up Your Real Working CTA Links",
          intro: "Never leave a `#` dummy link in your HTML! Use this prompt to connect real working links (and remove any dead unconnected forms).",
          prompt: "Update the Call-to-Action buttons and contact section in my index.html so every button works for real:\n\n1. Remove any unconnected `<form>` that doesn't have a real backend.\n2. Set my primary CTA button to open this exact working link in a new tab (`target=\"_blank\" rel=\"noopener noreferrer\"`):\n   - [Option A - For Portfolios]: My LinkedIn URL (`https://www.linkedin.com/in/YOUR-HANDLE`) and a secondary button with a pre-filled email link (`mailto:YOUR-EMAIL?subject=Saw%20your%20portfolio`).\n   - [Option B - For Business/Events]: A pre-filled WhatsApp link (`https://wa.me/91YOUR10DIGITNUMBER?text=Hi%2C%20I%20saw%20your%20website%20and%20wanted%20to%20enquire%20about...`).\n3. Double-check that there are zero dead `href=\"#\"` links anywhere on the page. Output the complete updated index.html.",
          whatToNotice: [
            "Look at how `https://wa.me/91...` works: it uses country code `91` followed by the 10-digit number with **no `+` sign, spaces, or dashes**.",
            "If you DO want a form on Netlify later, adding the single attribute `netlify` (or `data-netlify=\"true\"`) to a `<form name=\"contact\" method=\"POST\" data-netlify=\"true\">` makes Netlify capture submissions automatically for free!",
          ],
        },
      ],
      realWorldApplication: {
        forWork:
          "Test that `wa.me` pre-filled link trick for your company's marketing campaigns too! Sending customers to a WhatsApp chat where the first sentence (*'Hi, I want a quote for the Enterprise Plan'*) is **already typed in their message box** boosts reply rates dramatically.",
        forLearning:
          "Always test every single button on your page by actually clicking it before you launch. A `href=\"#\"` link that jumps to the top of the page and does nothing is the most common AI placeholder leftover.",
      },
      jargonCard: {
        term: "Static Site vs. Backend Form Endpoint",
        oneLineAnalogy:
          "A **Static Site** is a printed brochure (it displays info, but can't save form boxes by itself); a **Form Endpoint** or **`wa.me` deep link** is the phone line that delivers the visitor's message to you.",
        meetingDropLine:
          "\"Since this is a static landing page, let's use a pre-filled WhatsApp deep link and Netlify Forms instead of spinning up a backend server.\"",
      },
      quiz: [
        {
          id: "q7-6-1",
          scenario:
            "You ask an AI to put a 'Contact Me' form (`<form><input type=\"text\">...</form>`) into your single-file `index.html`, and you open the file or host it statically without configuring a form service. What happens when a visitor types a message and clicks Submit?",
          options: [
            {
              id: "a",
              text: "The AI magically teleports the message to your brain.",
              isCorrect: false,
              analogyFeedback: "HTML cannot read minds!",
            },
            {
              id: "b",
              text: "Nothing reaches you! Without a backend server or form service (like Netlify Forms / Formspree / Google Forms), a raw HTML form cannot send you an email or WhatsApp message.",
              isCorrect: true,
              analogyFeedback: "Spot on. It's an **unplugged doorbell**. Always use a real `wa.me`, LinkedIn, `mailto:`, or connected form endpoint!",
            },
            {
              id: "c",
              text: "It automatically sends you a speed-post letter via India Post.",
              isCorrect: false,
              analogyFeedback: "Definitely not!",
            },
            {
              id: "d",
              text: "It prints the message on your home printer.",
              isCorrect: false,
              analogyFeedback: "Nope!",
            },
          ],
        },
        {
          id: "q7-6-2",
          scenario:
            "What is the correct format for a **Click-to-WhatsApp (`wa.me`)** link for an Indian business number `+91 98765-43210`?",
          options: [
            {
              id: "a",
              text: "`https://wa.me/919876543210?text=Hi%20there` (country code `91` + 10 digits, with no `+` symbol, spaces, or hyphens).",
              isCorrect: true,
              analogyFeedback: "Correct! WhatsApp's `wa.me` standard requires **digits only** (`91` + 10-digit number) and URL-encoded text.",
            },
            {
              id: "b",
              text: "`whatsapp://call-me-maybe`",
              isCorrect: false,
              analogyFeedback: "Not a valid URL!",
            },
            {
              id: "c",
              text: "`href=\"#whatsapp\"`",
              isCorrect: false,
              analogyFeedback: "`href=\"#...\"` only scrolls within the current page; it never opens WhatsApp.",
            },
            {
              id: "d",
              text: "`www.google.com`",
              isCorrect: false,
              analogyFeedback: "That opens Google Search!",
            },
          ],
        },
        {
          id: "q7-6-3",
          scenario:
            "You are publishing a **public job-hunt portfolio** online. Why is a **LinkedIn profile button + email link** usually smarter than putting your personal mobile phone number and home street address on the page?",
          options: [
            {
              id: "a",
              text: "Because recruiters don't own phones.",
              isCorrect: false,
              analogyFeedback: "Recruiters have phones, but they reach out first via LinkedIn or email—and scraping bots love public phone numbers.",
            },
            {
              id: "b",
              text: "Because HTML cannot display 10-digit numbers.",
              isCorrect: false,
              analogyFeedback: "HTML can display any number.",
            },
            {
              id: "c",
              text: "Because anyone on the internet (including spam bots) can scrape a public web page—so keeping your personal phone number and home address off a public portfolio protects your privacy while still letting recruiters reach you easily.",
              isCorrect: true,
              analogyFeedback: "Exactly. Share your **LinkedIn and professional email** on a public portfolio; keep your personal phone number on your private PDF resume or business line.",
            },
            {
              id: "d",
              text: "Because LinkedIn pays you ₹100 every time someone clicks.",
              isCorrect: false,
              analogyFeedback: "LinkedIn doesn't pay per click, though landing a great job pays very well!",
            },
          ],
        },
      ],
    },

    // LESSON 7
    {
      id: "capstone-seo-and-social-preview-cards",
      title: "Titles, SEO & WhatsApp/LinkedIn Preview Cards",
      subtitle: "How to add the 6 lines of `<meta>` tags that make your link look like a million-rupee product when shared in a chat",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "When you paste your website link into WhatsApp or LinkedIn, what appears? ==Without OpenGraph (`og:`) meta tags, it looks like a bare, sketchy link. With 6 lines in your `<head>`, it unfolds into a rich preview card with a bold title and description.==",
        explanation:
          "Think about the last time someone sent you a link on WhatsApp or posted one on LinkedIn. Did it show a ugly raw URL with *'Untitled Document'*, or did a crisp **Social Preview Card** pop up with a clear headline, a 1-sentence pitch, and a clean icon? That magic is controlled by 6 tiny lines hidden inside the `<head>` section of your `index.html`: **1. `<title>`** (what appears on the browser tab and Google search headline); **2. `<meta name=\"description\">`** (the 150-character summary under your link on Google); **3. OpenGraph tags (`og:title`, `og:description`, `og:type`)** used by WhatsApp, LinkedIn, Slack, and Instagram; and **4. An inline SVG Favicon** (the little icon on the browser tab).",
      },
      analogy: {
        title: "An Unlabelled Brown Cardboard Box vs. A Gift Box With a Name Tag",
        metaphor:
          "Sharing a website link that has `<title>Document</title>` and no OpenGraph tags is like handing a recruiter or customer an **unlabelled brown cardboard box**. They hesitate to even open it because it looks unfinished or spammy. Adding **`<title>`, `<meta description>`, and `og:` tags** is putting a **crisp printed label and ribbon on the box** ==so the moment you drop the link in a WhatsApp group, everyone sees exactly what's inside and wants to tap it.==",
        visualComparison: [
          {
            everydayItem: "Browser tab saying 'index.html' or 'Document'",
            aiEquivalent: "**Missing `<title>` tag**: the #1 sign of an amateur page",
          },
          {
            everydayItem: "Rich preview card that pops up inside WhatsApp & LinkedIn",
            aiEquivalent: "**OpenGraph Tags (`og:title`, `og:description`)**: controls how chat apps preview your URL",
          },
          {
            everydayItem: "Clean little badge icon next to the tab name",
            aiEquivalent: "**Inline SVG Favicon**: a 1-line icon inside `index.html` with zero extra image files needed",
          },
        ],
      },
      activities: [
        {
          type: "beforeAfter",
          title: "Bare HTML `<head>` vs. Polished SEO + WhatsApp Preview `<head>`",
          before: {
            label: "Default AI <head> (Looks bare in WhatsApp & Google)",
            text: "<head>\n  <meta charset=\"UTF-8\">\n  <title>Document</title>\n</head>",
          },
          after: {
            label: "Polished <head> (Rich preview in WhatsApp, LinkedIn & Google Search)",
            text: "<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Ananya Rao — Product Analyst Portfolio (Bengaluru)</title>\n  <meta name=\"description\" content=\"SQL, Python & growth analytics case studies by Ananya Rao. See 3 live teardown projects and get in touch.\">\n  <meta property=\"og:title\" content=\"Ananya Rao — Product Analyst Portfolio\">\n  <meta property=\"og:description\" content=\"3 real data case studies in SQL & Python. Tap to view projects.\">\n  <meta property=\"og:type\" content=\"website\">\n  <link rel=\"icon\" href=\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>\">\n</head>",
          },
          whyItWorks: [
            "The `<title>` is **under 60 characters** and includes **your name + role + city** so Google and browser tabs identify you immediately.",
            "The `og:title` and `og:description` make WhatsApp and LinkedIn render a **clean, clickable preview card** whenever you share your link.",
            "The 1-line `data:image/svg+xml` favicon gives your browser tab a crisp icon **without needing to upload a separate `.ico` file**!",
          ],
        },
        {
          type: "tryIt",
          title: "Add SEO, OpenGraph & a Tab Icon to Your `index.html`",
          intro: "Run this prompt to upgrade the `<head>` of your `index.html` before we publish it live in Lesson 8.",
          prompt: "Upgrade the `<head>` section of my index.html with complete SEO and WhatsApp/LinkedIn social preview tags:\n\n1. Set a crisp `<title>` (under 60 characters) with my name/brand and what I do.\n2. Add a compelling `<meta name=\"description\">` (under 150 characters).\n3. Add OpenGraph tags (`og:title`, `og:description`, `og:type=\"website\"`) and Twitter card tags so the link generates a rich preview card when pasted in WhatsApp or LinkedIn.\n4. Add a clean inline `data:image/svg+xml` favicon matching my site's theme so the browser tab has a nice icon without needing an external file.\n5. Keep the rest of my page unchanged and output the complete index.html.",
          whatToNotice: [
            "Open your updated `index.html` in your browser and look at the **very top browser tab**: you'll see your custom icon and title right away!",
            "Every detail in `index.html` is now ready for launch.",
          ],
        },
      ],
      realWorldApplication: {
        forWork:
          "Ever seen a company launch a big campaign page, share the link on LinkedIn or WhatsApp, and the preview card says *'Home - Vite App'* or *'Next.js App'*? Now you know why—someone forgot to update the **`<title>` and `og:` meta tags**!",
        forLearning:
          "That inline SVG favicon trick (`<link rel=\"icon\" href=\"data:image/svg+xml,...\">`) is a favourite shortcut of senior web developers for single-file prototypes.",
      },
      jargonCard: {
        term: "OpenGraph (`og:`) Tags & Meta Description",
        oneLineAnalogy:
          "**OpenGraph (`og:`) tags** are the business card your website hands to WhatsApp and LinkedIn whenever someone pastes your link in a chat.",
        meetingDropLine:
          "\"Before we share the campaign URL on LinkedIn and WhatsApp, let's check the OpenGraph `og:title` and `og:description` tags so the preview card looks sharp.\"",
      },
      quiz: [
        {
          id: "q7-7-1",
          scenario:
            "You paste your newly published website link into a WhatsApp chat, and the preview box says **'Untitled Document'** instead of your name and headline. Which HTML tags inside `<head>` were missing or left as placeholders?",
          options: [
            {
              id: "a",
              text: "The `<title>` and OpenGraph (`og:title`, `og:description`) meta tags.",
              isCorrect: true,
              analogyFeedback: "Spot on. WhatsApp, LinkedIn, and Slack read your **`<title>` and `og:` tags** to build the link preview card.",
            },
            {
              id: "b",
              text: "The `<footer>` tag at the bottom of the page.",
              isCorrect: false,
              analogyFeedback: "Chat apps don't use the footer for link previews—they check `<head>` meta tags.",
            },
            {
              id: "c",
              text: "The button colour.",
              isCorrect: false,
              analogyFeedback: "CSS button colours don't affect WhatsApp link titles.",
            },
            {
              id: "d",
              text: "Your Wi-Fi password.",
              isCorrect: false,
              analogyFeedback: "Nothing to do with Wi-Fi!",
            },
          ],
        },
        {
          id: "q7-7-2",
          scenario:
            "Where do visitors actually see the text inside your `<head>` tags (`<title>` and `<meta name=\"description\">`)?",
          options: [
            {
              id: "a",
              text: "In giant 80px letters across the middle of your webpage.",
              isCorrect: false,
              analogyFeedback: "That's the `<h1>` inside `<body>`. Tags inside `<head>` don't render inside the page body.",
            },
            {
              id: "b",
              text: "On the browser tab at the top of the window, in Google Search results, and inside social/WhatsApp link preview cards.",
              isCorrect: true,
              analogyFeedback: "Correct! `<head>` tags are metadata for browsers, search engines, and chat apps.",
            },
            {
              id: "c",
              text: "Only when the computer is turned off.",
              isCorrect: false,
              analogyFeedback: "Nothing shows when the screen is off!",
            },
            {
              id: "d",
              text: "Inside the computer's calculator app.",
              isCorrect: false,
              analogyFeedback: "Definitely not!",
            },
          ],
        },
        {
          id: "q7-7-3",
          scenario:
            "Why is using an **inline `data:image/svg+xml` favicon** so handy for a single-file `index.html` website?",
          options: [
            {
              id: "a",
              text: "Because it gives your browser tab a crisp icon right inside the single `index.html` file, without needing to create or upload a second image file.",
              isCorrect: true,
              analogyFeedback: "Exactly. Everything stays self-contained in your one `index.html` file!",
            },
            {
              id: "b",
              text: "Because it makes the website play music.",
              isCorrect: false,
              analogyFeedback: "A favicon is a small tab icon, not an audio player.",
            },
            {
              id: "c",
              text: "Because browsers refuse to open websites without a favicon.",
              isCorrect: false,
              analogyFeedback: "Browsers open pages without favicons, they just show a generic blank globe icon.",
            },
            {
              id: "d",
              text: "Because it translates your page into 10 languages.",
              isCorrect: false,
              analogyFeedback: "A favicon is just the visual icon in the browser tab.",
            },
          ],
        },
      ],
    },

    // LESSON 8
    {
      id: "capstone-ship",
      title: "Ship It: Put Your Site Online",
      subtitle: "Publish free in minutes, then test the live link on your phone",
      durationMinutes: 10,
      xpReward: 200,
      lastUpdated: "Oct 28, 2026",
      sources: [
        { label: "Netlify Docs: Netlify Drop quickstart", url: "https://docs.netlify.com/start/quickstarts/netlify-drop-quickstart/" },
        { label: "Netlify Docs: Create and update deploys (drag and drop)", url: "https://docs.netlify.com/deploy/create-deploys/" },
      ],
      bigIdea: {
        headline: "A site isn't real until it has a link. ==Publishing one page takes minutes and costs nothing.==",
        explanation:
          "To put your page online you need **hosting**: an always-on computer that shows your page to anyone with the link. For a single HTML file, **Netlify Drop** (or **GitHub Pages / Vercel**) is one of the simplest routes: drag a folder containing your `index.html` onto a web page and you get a live `https://` link. You don't need an account to try Netlify Drop, but **the site stays password-protected until you claim it** by signing up for a free Netlify account.",
      },
      analogy: {
        title: "From Your Diary to a Shop on the Main Road",
        metaphor:
          "Your `index.html` on your laptop is like a recipe in your diary: **only you can see it**. Publishing is like putting it in a shop window on the main road. Anyone with the address can walk up and see it, any time of day, ==even when your laptop is closed==.",
        visualComparison: [
          { everydayItem: "A recipe in your diary", aiEquivalent: "**index.html** sitting on your laptop (`file:///...`)" },
          { everydayItem: "A shop on the main road, open 24x7", aiEquivalent: "**Cloud Hosting**: Netlify / Vercel / GitHub Pages keeps your page online" },
          { everydayItem: "The shop's street address", aiEquivalent: "**Your site's public URL** (`https://...`) that you share" },
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
            { text: "Rename your subdomain in Site Configuration -> Change site name", detail: "Change `random-words-123.netlify.app` to something clean like `ananya-rao.netlify.app`!" },
            { text: "To update it later: drag the updated folder onto your site's Deploys page", detail: "There's a **drop zone at the bottom** of the Deploys page." },
          ],
        },
        {
          type: "scenario",
          title: "Launch-day troubleshooting",
          setting: "You just dragged your folder to publish your site. Let's handle three classic launch-day hiccups.",
          steps: [
            {
              situation: "You copy the address bar from your local file (`file:///Users/rohan/Desktop/index.html`) and WhatsApp it to a friend. They say 'Site can't be reached'. Why?",
              choices: [
                {
                  text: "A `file:///` link points to your own laptop's hard drive—nobody else on the internet can open it! You must share the `https://...netlify.app` hosted URL.",
                  isBest: true,
                  outcome: "Spot on! Always check that the link you share starts with **`https://`**, never `file:///`.",
                },
                { text: "Because WhatsApp blocks all websites.", isBest: false, outcome: "WhatsApp opens `https://` links easily—`file:///` only exists on your own laptop." },
              ],
            },
            {
              situation: "You uploaded your folder to Netlify, but visiting the `https://` link shows a '404 Page Not Found' error. You check your folder and see the file is named `Portfolio_Final.html`.",
              choices: [
                {
                  text: "Rename the file to `index.html` (all lowercase) and re-drag the folder.",
                  isBest: true,
                  outcome: "Exactly. Web servers look for **`index.html`** by default when someone visits your main URL.",
                },
                { text: "Wait 24 hours for the server to guess the filename.", isBest: false, outcome: "Web servers never guess filenames—it must be named `index.html`." },
              ],
            },
            {
              situation: "Right after publishing, you spot a typo in your headline.",
              choices: [
                {
                  text: "Fix it in `index.html` on your laptop, then drag the updated folder onto your site's Deploys page in Netlify.",
                  isBest: true,
                  outcome: "Right! **Updating is just dragging the folder again.** Your live link updates in 5 seconds while keeping the exact same URL.",
                },
                { text: "Create a brand-new account and a brand-new URL.", isBest: false, outcome: "No need for a new URL—re-deploying updates your existing link in place!" },
              ],
            },
          ],
          debrief: "Shipping is a loop: **publish, check the live `https://` link on your phone, fix any typo in 60 seconds, and re-deploy.**",
        },
      ],
      keyTerms: [
        { term: "URL", meaning: "A public web address starting with `https://`, like **a shop's street address**." },
        { term: "Netlify Drop", meaning: "Netlify's page where you **drag a folder to publish it**. Claim the site with a free account to make it public." },
        { term: "index.html", meaning: "The exact lowercase file name web servers **open first** in a folder." },
      ],
      jargonCard: {
        term: "Hosting & Re-Deploy",
        oneLineAnalogy: "**Hosting** is the always-open shop on the main road; a **re-deploy** is putting an updated version in the shop window while keeping the same street address.",
        meetingDropLine: "\"I've deployed the prototype on Netlify and customized the subdomain—here's the live `https://` link.\"",
      },
      quiz: [
        {
          id: "q7-8-1",
          scenario: "Why can't your friend open a link that starts with `file:///C:/Users/Priya/Desktop/index.html`?",
          options: [
            { id: "a", text: "Because `file:///` is a local path on your own laptop's hard drive, not a public `https://` URL hosted on a web server.", isCorrect: true, analogyFeedback: "Exactly. That's the recipe still sitting inside your bedroom diary! Host it first to get an **`https://`** link." },
            { id: "b", text: "Because their phone doesn't have enough storage.", isCorrect: false, analogyFeedback: "Nothing to do with phone storage." },
            { id: "c", text: "Because the letter C is blocked on WhatsApp.", isCorrect: false, analogyFeedback: "Definitely not!" },
            { id: "d", text: "Because HTML files only open on Mondays.", isCorrect: false, analogyFeedback: "Hosted `https://` links work 24x7!" },
          ],
        },
        {
          id: "q7-8-2",
          scenario: "You dropped your folder on Netlify Drop without signing in. Why does your friend see a password screen when they open the link?",
          options: [
            { id: "a", text: "Netlify only works in the US.", isCorrect: false, analogyFeedback: "Netlify's CDN works worldwide, including across India." },
            { id: "b", text: "Unclaimed sites are password-protected until you claim them with a free Netlify account.", isCorrect: true, analogyFeedback: "Right. **Sign up and claim it**, and the page opens to everyone immediately." },
            { id: "c", text: "Your friend's phone is too old.", isCorrect: false, analogyFeedback: "The password protection on unclaimed drops is the reason." },
            { id: "d", text: "Because you used a dark background colour.", isCorrect: false, analogyFeedback: "CSS colours don't add password screens!" },
          ],
        },
        {
          id: "q7-8-3",
          scenario: "What must the main HTML file inside your folder be named so the web server opens it automatically at your main URL?",
          options: [
            { id: "a", text: "website.txt", isCorrect: false, analogyFeedback: "A `.txt` file shows raw code as plain text, not a web page." },
            { id: "b", text: "final-final-v2.html", isCorrect: false, analogyFeedback: "Web servers don't look for `final-final-v2.html` by default—you'd get a 404 error!" },
            { id: "c", text: "MY_PAGE.DOCX", isCorrect: false, analogyFeedback: "Word documents aren't web pages." },
            { id: "d", text: "index.html (all lowercase)", isCorrect: true, analogyFeedback: "Exactly. Every web server on Earth looks for **`index.html`** first." },
          ],
        },
      ],
    },

    // LESSON 9
    {
      id: "capstone-custom-domains-and-analytics",
      title: "Custom `.in` / `.com` Domains & Privacy-Friendly Analytics",
      subtitle: "How custom domain names, HTTPS SSL padlocks, and visitor analytics work in plain English",
      durationMinutes: 6,
      xpReward: 150,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "A free `.netlify.app` link is great for a portfolio or event. ==When you're ready to look like an established brand, connecting a ₹699/year `.in` or `.com` domain takes 10 minutes—and Netlify provides the HTTPS security padlock for free.==",
        explanation:
          "Once your site is live at `yourname.netlify.app`, two natural questions pop up: **1. 'How do I put this on `yourname.in` or `mybakery.com`?'** and **2. 'How do I know how many people actually visited my page and clicked my button?'** Let's demystify both without jargon. A **Domain Name** (`yourname.in`) is leased from a registrar (like Cloudflare, Namecheap, or GoDaddy) for ~₹500–₹900 a year. To connect it to your Netlify host, you add a **DNS Record** (a phonebook entry that tells browsers *'When someone types `yourname.in`, show them the site hosted on Netlify'*), and Netlify automatically issues a free **HTTPS / SSL certificate** (the security padlock in the address bar). And to see visitor counts, adding a 1-line **privacy-friendly analytics script** (like Plausible, Umami, or Cloudflare Web Analytics) shows you how many visitors came from LinkedIn vs WhatsApp—without creepy cookie banners!",
      },
      analogy: {
        title: "Saving a Contact Name in Your Phonebook + A Door Counter",
        metaphor:
          "Computers find servers using hard-to-remember numbers (`192.0.2.1`) or long hosting addresses (`rohan-site-8492.netlify.app`). **DNS (Domain Name System)** is simply the **internet's phonebook**: it links a clean name (`rohansharma.in`) to your Netlify shop window so nobody has to memorize the long address. And **Web Analytics** is a **simple clicker counter at the shop door** ==that tells you: '42 people walked in from LinkedIn today, and 9 tapped the WhatsApp button.'==",
        visualComparison: [
          {
            everydayItem: "`rohan-sharma.netlify.app` (Free hosted subdomain)",
            aiEquivalent: "**Free Subdomain**: ₹0 forever, great for student portfolios, internal demos, and events",
          },
          {
            everydayItem: "`rohansharma.in` or `kaveribakery.com`",
            aiEquivalent: "**Custom Domain + DNS Record**: ~₹600–₹900/year, points your custom name to your free Netlify host",
          },
          {
            everydayItem: "Padlock on the shop door + footfall counter",
            aiEquivalent: "**Auto HTTPS (SSL) + Lightweight Analytics**: encrypted connection + tracking page views and CTA clicks",
          },
        ],
      },
      activities: [
        {
          type: "flashcards",
          title: "4 Web Infrastructure Terms You Now Own",
          cards: [
            {
              front: "Subdomain vs. Custom Domain",
              back: "`ananya.netlify.app` is a **free subdomain** (you can rename the first part for free in Netlify settings!). `ananyarao.in` is a **custom domain** you rent for ~₹600/year.",
            },
            {
              front: "DNS (Domain Name System)",
              back: "The **phonebook of the internet**. Adding an `A` record or `CNAME` record in your domain dashboard points your custom domain to your hosting provider.",
            },
            {
              front: "HTTPS & SSL/TLS Certificate",
              back: "The **padlock icon** in the browser bar that encrypts traffic between the visitor's phone and your site. Modern hosts like Netlify, Vercel, and GitHub Pages generate and renew SSL certificates **automatically for free**.",
            },
            {
              front: "UTM Parameters (`?utm_source=linkedin`)",
              back: "A tiny tag you add to the end of your link when sharing (e.g. `yoursite.netlify.app/?utm_source=linkedin`) so analytics can tell you **which platform sent the visitor**.",
            },
          ],
        },
        {
          type: "sort",
          title: "Free `.netlify.app` Subdomain vs. Custom `.in` / `.com` Domain",
          instructions: "When is the free renamed `.netlify.app` subdomain plenty, and when is a ₹700/year custom domain worth buying?",
          buckets: ["Free Renamed `.netlify.app` Is Plenty", "Worth Buying a Custom `.in` / `.com` Domain"],
          items: [
            {
              text: "A cousin's wedding invite page needed for 3 weeks",
              bucket: 0,
              why: "`sharma-wedding-2026.netlify.app` is **100% free** and nobody needs a custom domain after the wedding!",
            },
            {
              text: "A commercial consulting practice or D2C brand printing its website on visiting cards and invoices",
              bucket: 1,
              why: "For a long-term business, `mehtaconsulting.in` looks authoritative and gives you matching custom email addresses.",
            },
            {
              text: "A clickable prototype built on Tuesday to show your manager on Wednesday morning",
              bucket: 0,
              why: "Internal prototypes should always use free instant URLs.",
            },
            {
              text: "A flagship freelance design studio portfolio you plan to promote for the next 5 years",
              bucket: 1,
              why: "Owning your own `.in` or `.com` domain means even if you switch hosts later, your link never changes.",
            },
          ],
        },
      ],
      realWorldApplication: {
        forWork:
          "Never pay a web hosting vendor extra money for a 'Basic SSL Certificate'—modern hosts (Netlify, Vercel, Cloudflare Pages) include **automated Let's Encrypt HTTPS certificates for ₹0**.",
        forLearning:
          "Even without buying a custom domain, remember to go into **Netlify -> Site Configuration -> Change site name** to turn your random URL (`sparkling-cupcake-4829.netlify.app`) into your clean name (`rohan-sharma-pm.netlify.app`) for free!",
      },
      jargonCard: {
        term: "DNS & HTTPS (SSL)",
        oneLineAnalogy:
          "**DNS** is the internet's phonebook that connects your `.in` name to your server; **HTTPS (SSL)** is the free encrypted padlock that proves your site is safe to open.",
        meetingDropLine:
          "\"Once the landing page is approved on the staging subdomain, we'll point the DNS CNAME record and let auto-SSL provision the certificate.\"",
      },
      quiz: [
        {
          id: "q7-9-1",
          scenario:
            "Netlify initially gives your site a random address like `magical-narwhal-83920.netlify.app`. How much does it cost to change that to a clean address like `priya-verma-portfolio.netlify.app`?",
          options: [
            {
              id: "a",
              text: "₹0—you can rename the `.netlify.app` subdomain for free inside Site Configuration -> Change site name.",
              isCorrect: true,
              analogyFeedback: "Spot on! Renaming your `.netlify.app` subdomain is **100% free** and takes 10 seconds.",
            },
            {
              id: "b",
              text: "₹50,000 per month.",
              isCorrect: false,
              analogyFeedback: "Renaming a `.netlify.app` subdomain is completely free!",
            },
            {
              id: "c",
              text: "It is impossible to change.",
              isCorrect: false,
              analogyFeedback: "One button click in Site Settings changes it immediately.",
            },
            {
              id: "d",
              text: "You have to rewrite all your HTML code.",
              isCorrect: false,
              analogyFeedback: "Your HTML file stays untouched when you change the subdomain name.",
            },
          ],
        },
        {
          id: "q7-9-2",
          scenario:
            "What is the role of **DNS (Domain Name System)** when you buy a custom domain like `mybakery.in`?",
          options: [
            {
              id: "a",
              text: "It bakes the cakes automatically.",
              isCorrect: false,
              analogyFeedback: "If only DNS could bake cakes!",
            },
            {
              id: "b",
              text: "It acts like the internet's phonebook, pointing visitors who type `mybakery.in` to the hosting server (like Netlify) where your `index.html` lives.",
              isCorrect: true,
              analogyFeedback: "Correct! **Domain = the name; Hosting = the building; DNS = the address book connecting them.**",
            },
            {
              id: "c",
              text: "It deletes your website after 7 days.",
              isCorrect: false,
              analogyFeedback: "DNS keeps pointing to your host as long as your domain is active.",
            },
            {
              id: "d",
              text: "It changes the font size on mobile phones.",
              isCorrect: false,
              analogyFeedback: "That's CSS, not DNS!",
            },
          ],
        },
        {
          id: "q7-9-3",
          scenario:
            "What does adding `?utm_source=linkedin` vs `?utm_source=whatsapp` to the end of your website link allow your analytics tool to show you?",
          options: [
            {
              id: "a",
              text: "The visitor's private bank balance.",
              isCorrect: false,
              analogyFeedback: "Analytics never sees private bank data!",
            },
            {
              id: "b",
              text: "It breaks the link so nobody can open it.",
              isCorrect: false,
              analogyFeedback: "`?utm_source=...` query parameters don't break your page—the page opens normally while logging the traffic source.",
            },
            {
              id: "c",
              text: "Exactly how many visitors arrived from your LinkedIn post versus your WhatsApp shares.",
              isCorrect: true,
              analogyFeedback: "Exactly. **UTM tags** show you which channel actually drives clicks.",
            },
            {
              id: "d",
              text: "It translates the website into Spanish.",
              isCorrect: false,
              analogyFeedback: "UTM tags track referral sources, not translation.",
            },
          ],
        },
      ],
    },

    // LESSON 10
    {
      id: "capstone-portfolio-pitch-and-iteration",
      title: "Showcasing Your Live Site & Running the 3-Friend Test",
      subtitle: "How to test your site with real humans, pitch it in interviews, and celebrate completing all 70 lessons",
      durationMinutes: 8,
      xpReward: 250,
      lastUpdated: "Oct 28, 2026",
      bigIdea: {
        headline:
          "You now have something 95% of people talking about AI don't have: **a live, shipped link on the internet**. ==Run a quick 3-Friend Usability Test, fix what confuses them, and put your link to work.==",
        explanation:
          "In product management and software engineering, version 1.0 going live isn't the end—it's the start of the **Feedback Loop**. Before you blast your link to 500 people on LinkedIn or send it to your dream client, send it privately on WhatsApp to **3 trusted friends or colleagues** with two specific questions: **1. 'Open this on your phone—in 5 seconds, what do you think this page is offering?'** and **2. 'Try tapping the main button—did anything look weird or confusing?'** Spend 10 minutes with AI fixing the one or two things they spot, re-drag your folder to Netlify, and **then** share it widely.",
      },
      analogy: {
        title: "Tasting the Dish Before Serving the Wedding Hall",
        metaphor:
          "Even the most experienced chef lets **two people in the kitchen taste a spoonful** before sending 300 plates out to the banquet hall. Maybe it just needs a pinch of salt or a squeeze of lime—a 30-second fix before the guests taste it! **Your 3-Friend Test is that kitchen taste test.** ==And once you've added that final pinch of salt, serve it proudly.==",
        visualComparison: [
          {
            everydayItem: "\"Does this look nice?\" (Friends just say 'Yes, nice!' to be polite)",
            aiEquivalent: "**Bad feedback question**: gets polite compliments, hides real bugs",
          },
          {
            everydayItem: "\"Open this on your phone: what's the first thing that looks confusing?\"",
            aiEquivalent: "**Actionable Usability Test**: gives permission for honest, specific feedback",
          },
          {
            everydayItem: "Pinning your live link to your LinkedIn Featured section & Resume header",
            aiEquivalent: "**Distribution & Proof of Work**: turning your capstone into career or business leverage",
          },
        ],
      },
      activities: [
        {
          type: "checklist",
          title: "Your Final Launch & Distribution Checklist",
          intro: "Tick off these 5 steps to turn your live capstone into real career or business momentum.",
          items: [
            {
              text: "1. Run the 3-Friend Mobile Test on WhatsApp",
              detail: "Send your link to 3 friends on different phones (Android & iPhone) and ask: 'What is 1 thing that looks unclear or broken on your screen?'",
            },
            {
              text: "2. Fix, Re-Deploy, and Verify the WhatsApp Preview Card",
              detail: "Make the final tweak in `index.html`, drag the folder to Netlify Deploys, and confirm the title & preview card look crisp.",
            },
            {
              text: "3. Add the link to your LinkedIn 'Featured' section or WhatsApp Business profile",
              detail: "A clickable live site in your LinkedIn header or resume stands out immediately against plain PDF resumes.",
            },
            {
              text: "4. Share your launch story in your own human voice",
              detail: "Write a short, humble post about what you built and one concrete thing you learned about directing AI.",
            },
            {
              text: "5. Keep iterating once a month",
              detail: "Every time you finish a new project at work or get a great client quote, take 3 minutes to add it to `index.html` and re-deploy!",
            },
          ],
        },
        {
          type: "tryIt",
          title: "Write Your Humble, Zero-Slop Launch Post",
          intro: "You built and shipped something real. Use this prompt to draft an authentic announcement—then edit it in your own words before posting.",
          prompt:
            "I just completed an AI fluency course and built and published my first live one-page website using AI—without writing code by hand. Help me draft a short, authentic LinkedIn / WhatsApp message (under 110 words) sharing it.\n\nDetails:\n- What I built: [TYPE OF SITE, e.g., my product analytics portfolio / a page for my weekend maths classes]\n- Live link: [YOUR HTTPS LINK]\n- One specific thing I learned: [e.g., why writing a tight 5-part brief and mobile-first testing matters more than fancy prompts]\n\nStyle rules:\n- Warm, humble, conversational Indian professional tone.\n- Ask readers for 1 piece of honest feedback on how it looks on their phone.\n- BANNED WORDS: thrilled, delve, elevate, unlock, game-changer, seamless, synergy, testament, tapestry.\n- Give me 2 distinct options.",
          whatToNotice: [
            "Ending your post with **'If you open it on your phone, let me know one thing I can make clearer!'** invites genuine comments and engagement instead of passive scrolling.",
            "Rewrite at least 2 sentences in your own natural rhythm before hitting post.",
          ],
        },
      ],
      realWorldApplication: {
        forWork:
          "In your next job interview or client meeting, don't just *say* 'I know how to use AI'. Pull up your live link on your phone or laptop and say: **'Here is how I write structured briefs, run evals, guard against hallucinations, and ship live prototypes with AI.'** Proof of work beats buzzwords every single time.",
        forLearning:
          "Take a bow—you have completed **all 7 tracks and all 70 lessons** of **AI Fluency from Scratch**, earning your **Builder** badge! Keep your 15-minute bi-weekly radar going, keep building, and put your new superpower to work.",
      },
      jargonCard: {
        term: "Proof of Work & The Iteration Loop",
        oneLineAnalogy:
          "**Proof of Work** is showing a live link you built instead of just listing 'AI' on your resume; **The Iteration Loop** is `Ship -> Test with 3 Real Humans -> Fix -> Re-deploy`.",
        meetingDropLine:
          "\"Instead of debating the spec in another meeting, I vibecoded a live single-file prototype and deployed it—let's test it on our phones right now.\"",
      },
      quiz: [
        {
          id: "q7-10-1",
          scenario:
            "Why does asking a friend **'Open this on your phone—what is 1 thing that looks confusing or broken?'** get much better feedback than asking **'Do you like my website?'**",
          options: [
            {
              id: "a",
              text: "Because 'Do you like it?' invites polite compliments ('Looks great!'), whereas asking specifically for 1 confusing thing gives your friend permission to spot real usability issues you missed.",
              isCorrect: true,
              analogyFeedback: "Spot on. Specific permission to critique is how real product designers run usability tests.",
            },
            {
              id: "b",
              text: "Because friends dislike websites.",
              isCorrect: false,
              analogyFeedback: "Friends want to help—they just need a specific question so they don't feel rude pointing out a bug!",
            },
            {
              id: "c",
              text: "Because websites only work when you ask questions.",
              isCorrect: false,
              analogyFeedback: "It's about human psychology, not server mechanics.",
            },
            {
              id: "d",
              text: "Because polite compliments crash Netlify.",
              isCorrect: false,
              analogyFeedback: "Netlify handles compliments just fine!",
            },
          ],
        },
        {
          id: "q7-10-2",
          scenario:
            "You are in a job interview or pitching a client, and they ask: *'Everyone puts AI on their resume these days. How do you actually use AI in your work?'* What is the strongest answer?",
          options: [
            {
              id: "a",
              text: "\"I use it to write 'I hope this email finds you well' faster.\"",
              isCorrect: false,
              analogyFeedback: "Anyone can do that on day one—and it sounds like AI slop!",
            },
            {
              id: "b",
              text: "\"I paste confidential company spreadsheets into free random websites.\"",
              isCorrect: false,
              analogyFeedback: "That will end the interview immediately!",
            },
            {
              id: "c",
              text: "Show concrete Proof of Work: share the live prototype/portfolio you built, explain your 5-part briefing workflow, how you separate probabilistic drafting from deterministic math, and how you verify outputs against sources.",
              isCorrect: true,
              analogyFeedback: "Correct! Combining a **live shipped artefact** with **clear mental models** puts you in the top 1% of candidates.",
            },
            {
              id: "d",
              text: "\"I memorize model code names from Twitter.\"",
              isCorrect: false,
              analogyFeedback: "Recruiters care about outcomes and safe judgment, not Twitter trivia.",
            },
          ],
        },
        {
          id: "q7-10-3",
          scenario:
            "Three months from now, you complete an exciting new project at work and want to add it to your live website. What is the workflow?",
          options: [
            {
              id: "a",
              text: "Throw away your website and start a brand-new URL from scratch.",
              isCorrect: false,
              analogyFeedback: "Never break your existing shared URL!",
            },
            {
              id: "b",
              text: "Pay an agency ₹25,000 to change three sentences.",
              isCorrect: false,
              analogyFeedback: "You are the builder now—you can update it in 2 minutes for ₹0!",
            },
            {
              id: "c",
              text: "Mail a USB drive to Netlify headquarters.",
              isCorrect: false,
              analogyFeedback: "Everything happens right in your browser!",
            },
            {
              id: "d",
              text: "Open your saved `index.html`, ask AI to add the new project card using the Problem -> What I Did -> Result format while keeping everything else the same, check it on mobile width, and drag the folder onto your Netlify Deploys page.",
              isCorrect: true,
              analogyFeedback: "Congratulations, Builder! You have mastered the entire AI Fluency journey from foundations to shipping live on the web.",
            },
          ],
        },
      ],
    },
  ],
};

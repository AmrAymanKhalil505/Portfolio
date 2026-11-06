import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import fm103Graph from "../../assets/thumbnails/projects/EduLab/FM103 Graph.thumb.webp";
import cimBlockEditor from "../../assets/thumbnails/projects/cim/Inter02.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: GameJobs.co post "C# Unity Developer (Game Development)" (Playcus, posted 2026-10-15,
// validThrough 2027-04-17), also listed on playcus.com/careers as Full Time, Remote. Playcus Limited
// describes itself as a publisher of casual mobile and PC titles (founded 2011). The post asks no
// written questions and gives no location, time zone or pay, so the answers follow its qualification
// list in order, then location, hours, start date and salary.

const atmoVideo = "https://youtu.be/eWFaHaYUy44";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";

const proposal: Proposal = {
  slug: "playcus",
  client: "Playcus",
  projectName: "C# Unity game development for casual mobile and PC titles",
  dateLabel: "October 2026",
  greeting: "Hello Playcus team,",
  eyebrow: "Application · Playcus · C# Unity Developer (Game Development)",
  headline: "Unity / C# developer who ships features to mobile and the browser and connects them to a backend",
  lead: [
    "Your role is about adding and maintaining features in live Unity games: clean, reusable C#, bug hunting, backend APIs wired into the client, and designs that change after A/B tests. The closest match in my work is the Ivris interior-design app, where I built the Unity client for Android, iOS and WebGL and connected it to PlayFab and a hosted backend, and Atmosphere Protector, a casual mobile game I built in Unity for Android and iOS.",
    "Since October 2024 I have been a Senior Unity Engineer at BEDO, building commercial Unity / WebGL simulations on a shared team codebase of about 80,000 lines of in-house C#. Below I answer each qualification from your post with dates, show the projects, and say plainly where I fall short: I have not run A/B tests on a released game yet.",
  ],
  quickFacts: [
    { label: "Stack", value: "Unity · C# · mobile · WebGL" },
    { label: "Start", value: "1 month after an offer" },
    { label: "Hours", value: "40 h/week, full-time" },
    { label: "Location", value: "Egypt (remote)" },
  ],
  answers: [
    {
      title: "Hands-on coding experience",
      original: "1–3 years hands-on coding experience",
      body: [
        "Continuous professional Unity / C# work since December 2023, close to three years: Senior Unity Engineer at BEDO Innovating Education (Oct 2024 - present), Unity and AR developer for Ivris (freelance, Jun 2024 - Jun 2026), sole Unity VR developer at Tanta University (Dec 2023 - Oct 2024), and a one-week VR booth game for Nescafe Ice Coffee (2025). The table further down lists the technologies and my own responsibility in each.",
      ],
    },
    {
      title: "Involvement in multiple software projects",
      original: "Proven involvement in multiple software projects",
      body: [
        "Yes: several BEDO lab and station simulations (EV117 fuel-cell lab, MR109 / MR110 mechatronics stations, PID control labs, fluid-mechanics labs), the Ivris app, the Tanta University Quest 2 suite, Atmosphere Protector and the Nescafe booth game. BEDO's simulations are commercial products sold to universities and companies.",
      ],
    },
    {
      title: "Issue trackers and agile",
      original: "Experience with Issue/Bug trackers like JIRA in agile environments",
      body: ["[[TODO: which issue tracker and agile process Amr uses at BEDO / Ivris (JIRA, Trello, ClickUp, sprints?)]]"],
    },
    {
      title: "C#, Unity3D and JavaScript",
      original: "Highly skilled C# / Unity3D / JavaScript Developer",
      body: [
        "C# and Unity are my daily work: interaction and state logic, runtime editors and interpreters, UI, and WebGL builds. JavaScript is secondary for me: OneJS (JavaScript / TypeScript UI inside Unity) at Ivris, this portfolio site in React and TypeScript, and a Coursera full-stack specialization (React, Node.js / Express, MongoDB, HKUST 2021). I write JavaScript with heavy AI help and I am not a JavaScript specialist.",
      ],
    },
    {
      title: "Mobile and desktop",
      original: "Development experience for mobile and desktop",
      body: [
        "Mobile: Android and iOS builds for the Ivris AR preview and for Atmosphere Protector, plus standalone Meta Quest 2 builds (Android-based). Desktop: Unity WebGL in production at BEDO and Ivris. [[TODO: any standalone Windows / macOS desktop builds to mention?]]",
      ],
    },
    {
      title: "Back-end APIs",
      original: "Comfortable integrating back-end APIs with front-end",
      body: [
        "At Ivris I connected the Unity client to PlayFab and to a Render-hosted backend for user and content workflows, and used Photon for multiplayer room editing in WebGL. The backend itself belonged to the wider Ivris team; my part was the Unity side of the integration.",
      ],
    },
    {
      title: "Location and working hours",
      body: [
        "I live in Egypt and work remotely. Your post says Remote without a region, so I ask about this first below. After the notice month I work full-time, 40 hours a week, and I can line my hours up with your team's time zone.",
      ],
    },
    {
      title: "Start date",
      body: [
        "I am currently employed with a one-month notice period. I give notice when I accept an offer and start full-time one month later. During the notice month I can already put in about 15 hours a week, for example to set up the projects, read the codebase and pick up first bugs.",
      ],
    },
    {
      title: "Salary expectation",
      body: ["[[TODO: salary]] per month for the full-time role, open to discussing the full package and the contract form."],
    },
  ],
  candidNote: {
    title: "A transparent note on the fit",
    body: "Your post asks for A/B testing on game designs, JavaScript at a high level, and an understanding of security and data protection. I have not run A/B tests on a released game: Atmosphere Protector is built for Android and iOS but is not released, and my shipped work is commercial B2B simulations rather than store games. JavaScript is a secondary language for me, not my main one. On security and data protection I have handled user and content data through PlayFab and a hosted backend at Ivris, but I have no formal security background. What I bring: close to three years of continuous Unity / C# work, a large shared codebase I maintain with a team, mobile and WebGL builds in production, and backend-connected Unity clients. I would rather you know this now than find it in the dates.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Interactive Unity training simulations of BEDO engineering trainers, sold as commercial B2B products: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics stations, PID control labs, fluid-mechanics labs. Migrating projects to Unity 6 since mid-2026.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration)", "ScriptableObject architecture", "Dependency injection", "DOTween", "Timeline"],
      responsibility:
        "Interaction and state logic, guided steps, UI and feedback, runtime tools such as a visual command editor and interpreter, WebGL builds, and bug fixing on a shared team codebase of about 80,000 lines of in-house C#. I mentor one intern and review his work. The hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "WebGL", "Android", "iOS", "AR Foundation", "Photon", "PlayFab", "OneJS"],
      responsibility:
        "The Unity app, not the whole product: runtime loading of 3D models, Photon multiplayer room editing in WebGL, mobile AR preview, and the client side of the PlayFab and hosted-backend integration.",
      links: [
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
        { label: "Video", href: ivrisVideo },
      ],
    },
    {
      period: "Dec 2023 – Oct 2024",
      title: "Tanta University — Unity VR developer (sole developer)",
      context: "Meta Quest 2 training suite: onboarding tutorial, 360° surgical-room viewer, interactive viscosity lab.",
      tech: ["Unity", "C#", "Meta Quest 2", "Auto Hand", "Android"],
      responsibility:
        "Everything: interaction flows, scenes, hand-held tool interactions, onboarding for first-time users, standalone Android headset builds.",
      links: [{ label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") }],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth game (freelance)",
      context: "Short-session branded game for an event booth: surf sand and water routes, collect cans, beat the timer.",
      tech: ["Unity", "C#", "VR", "URP"],
      responsibility:
        "Unity developer: gameplay loop, movement, timed scoring, collectibles and onboarding that visitors understand in seconds, from brief to booth in one week. The brand belongs to its owners.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Casual mobile game",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Unity · built for Android / iOS · not released",
      copy:
        "Mobile educational game: fly a plane, collect pollution clouds, keep the atmosphere's health bar up and unlock upgrades. Simple controls, a readable core loop and Arabic instruction screens for young players.",
      links: [
        { label: "Video", href: atmoVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "Backend-connected client",
      title: "Ivris interior-design app",
      image: ivrisApp,
      meta: "WebGL + Android / iOS · PlayFab · Photon",
      copy:
        "The Unity client of a cross-platform app: runtime loading of 3D content, multiplayer room editing in the browser, mobile AR preview, and user and content workflows connected to PlayFab and a hosted backend.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Reusable C# on a shared codebase",
      title: "Engineering education virtual labs",
      image: fm103Graph,
      meta: "Several labs · shared patterns · WebGL",
      copy:
        "Bernoulli, laminar-flow and fuel-cell labs built by reusing common Unity patterns for guided steps, measurement feedback, graphs and dashboards, on a team codebase configured per project through ScriptableObjects and dependency injection.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Feature from requirements",
      title: "Visual command editor and interpreter",
      image: cimBlockEditor,
      meta: "Block editor · validation · interpreter",
      copy:
        "A block-based editor where students build robot command rows without typing syntax, validate them and run them through a G-code-style interpreter with run, pause and stop controls.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Game loop in a week",
      title: "Nescafe VR surfing booth",
      image: nescafeSurfing,
      meta: "One week · timer · score · collectibles",
      copy:
        "A short-session arcade loop from brief to live event in one week: simple movement, collectible targets, score and timer feedback, three themed routes, and a fast start and reset for booth throughput.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Responsibilities",
      items: [
        {
          need: "Translate requirements, storyboards and use cases into working applications",
          status: "direct",
          proof: "At BEDO I turn instructional-design requirements and lab procedures into guided Unity simulations, delivered as WebGL builds.",
        },
        {
          need: "Design, build and maintain efficient, reusable C# code",
          status: "direct",
          proof: "Shared BEDO codebase (~80,000 lines of in-house C#) with systems configured per project through ScriptableObjects and dependency injection; now migrating projects to Unity 6.",
        },
        {
          need: "Track down bugs and defects and fix them",
          status: "direct",
          proof: "Daily debugging across a large shared codebase, an engine-version migration, and complex state logic (station behaviour, interpreters).",
        },
        {
          need: "Document delivered features and functionality",
          status: "commitment",
          proof: "I document each feature I deliver in your format. My portfolio case studies show how I write up a system for other people.",
        },
        {
          need: "Refine user stories with the product owner and plan iterations with the team",
          status: "adjacent",
          proof: "I agree system behaviour with BEDO's instructional-design team before Unity work starts, and review the result with them until they sign off.",
        },
        {
          need: "Augment game features with Unity 3D and C# scripting",
          status: "direct",
          proof: "Core loops and features in Atmosphere Protector and the Nescafe game, all in Unity / C#.",
        },
        {
          need: "Modify designs to improve user acceptance through A/B testing",
          status: "commitment",
          proof: "Not done on a released game. I would build features so values and variants come from remote configuration and learn your testing setup.",
        },
        {
          need: "Optimal performance, quality and responsiveness",
          status: "adjacent",
          proof: "Builds for constrained targets: standalone Quest 2, production Unity WebGL, Android / iOS. Not a wide range of low-end phones in a store release.",
        },
      ],
    },
    {
      title: "Qualifications",
      items: [
        {
          need: "1–3 years hands-on coding experience",
          status: "direct",
          proof: "Continuous professional Unity / C# work since December 2023.",
        },
        {
          need: "Proven involvement in multiple software projects",
          status: "direct",
          proof: "BEDO labs and stations, Ivris, Tanta University, Atmosphere Protector, Nescafe; see the table above.",
        },
        {
          need: "Issue / bug trackers like JIRA in agile environments",
          status: "partial",
          proof: "[[TODO: tracker and process used at BEDO / Ivris]]",
        },
        {
          need: "Highly skilled C# / Unity3D",
          status: "direct",
          proof: "C# and Unity in every project above, including interpreters, editors and a large shared codebase.",
        },
        {
          need: "JavaScript",
          status: "partial",
          proof: "OneJS UI inside Unity at Ivris, this React / TypeScript portfolio, Coursera full-stack React and Node.js specialization. Secondary language, written with heavy AI help.",
        },
        {
          need: "Development for mobile and desktop",
          status: "adjacent",
          proof: "Android / iOS (Ivris, Atmosphere Protector), Quest 2, and Unity WebGL in production. No store-released mobile game.",
        },
        {
          need: "Integrate back-end APIs with the front end",
          status: "direct",
          proof: "Ivris Unity client connected to PlayFab and a Render-hosted backend; Photon multiplayer in WebGL.",
        },
        {
          need: "Good instinct for choosing problem-solving tools",
          status: "direct",
          proof: "HTML prototypes before Unity work, Codex and Claude Code in daily development (I review and test the output), Blender for quick model fixes without waiting for the 3D artist.",
        },
        {
          need: "Security and data protection",
          status: "partial",
          proof: "User and content data handled through PlayFab and a hosted backend at Ivris. No formal security background.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would work on Playcus games",
    intro: "To be checked against your codebase, tools and release process, but this is how I would work from the first weeks:",
    steps: [
      {
        title: "Learn the game before changing it",
        body: "Play the titles I join, read the code around the first tasks, and start with bugs, so I learn your conventions before I add features.",
      },
      {
        title: "Agree the behaviour before building it",
        body: "At BEDO I build an HTML prototype with 2D vector graphics before Unity work, so everyone agrees how a system behaves before Unity time is spent. For a game feature the same idea is a short written spec or a rough playable build that the product owner signs off.",
      },
      {
        title: "Values in data, ready for A/B tests",
        body: "Tuning values, layouts and feature switches live in ScriptableObjects or remote configuration, so a design variant is a data change rather than a new build.",
      },
      {
        title: "A clear line between client and backend",
        body: "API calls go through one service layer with clear error and offline handling, the way I kept the Unity side separate from PlayFab and the backend at Ivris.",
      },
      {
        title: "Test on real devices every iteration",
        body: "Check each feature on your lowest supported phones and on desktop, and flag performance risks as soon as they appear.",
      },
    ],
    note: "A/B testing on a live game, your analytics stack and your release process are things I would learn from your team; I have not done them in production.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time onboarding",
      body: "About 15 hours a week around my current job: set up the projects, read the codebase and coding standards, and fix first bugs.",
    },
    {
      when: "Month 1",
      title: "Full-time",
      body: "40 hours a week. Bugs and small features on a live title, first backend-connected feature, and first iteration planning with the product owner.",
    },
    {
      when: "Months 2-3",
      title: "Features and A/B variants",
      body: "Own features from user story to release, build them so variants can be tested, and document each one as it ships.",
    },
  ],
  questions: [
    "Can you hire someone living in Egypt for this remote role, and which time zone and core hours does the team work?",
    "Which titles would I work on first, and on which platforms (Android, iOS, PC, web)?",
    "Where does the JavaScript in this role sit: WebGL builds and browser interop, or separate web tools?",
    "Which backend and analytics services do your games use, and who owns the server side?",
    "How do you run A/B tests today: remote config, a third-party tool, or your own system?",
    "How large is the Unity team, and how is code review done?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the demos in a short call, and to take a small technical task on one of your games if that helps your decision.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity developer · games and interactive simulations",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

import cimBlockEditor from "../../assets/thumbnails/projects/cim/Inter02.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import fm103Graph from "../../assets/thumbnails/projects/EduLab/FM103 Graph.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: Greenhouse post "Senior Gameplay Programmer" (Naphora Games Group, EMEA), fully remote on
// KSA hours (Sun-Thu 9:00-17:00). Direct application through the Greenhouse form (name, email, phone,
// country, CV, portfolio link). The post asks no written questions, so the answers below cover the
// qualifications a recruiter screens first (years, shipped titles, mentoring, English), hours, start
// date and pay. Separate application from the Playable Ads role (naphora.ts).

const atmoVideo = "https://youtu.be/eWFaHaYUy44";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";

const proposal: Proposal = {
  slug: "naphora-gameplay",
  client: "Naphora Games Group",
  projectName: "Gameplay systems and fast prototypes for hybrid-casual mobile games",
  dateLabel: "October 2026",
  greeting: "Hello Naphora team,",
  eyebrow: "Application · Naphora Games Group · Senior Gameplay Programmer (Unity / C#)",
  headline: "Unity gameplay programmer who prototypes fast and builds systems a team can reuse",
  lead: [
    "Your role asks for two things at once: turning a design idea into a playable build quickly, and owning gameplay architecture that the next title can reuse without a rewrite. That is how I already work. I built a short-session Unity game for a Nescafe Ice Coffee event booth in one week, and at BEDO I build on a shared Unity codebase of about 80,000 lines of in-house C# where systems are configured per project through ScriptableObjects and dependency injection, so labs share systems instead of re-implementing them.",
    "I have worked professionally in Unity and C# without a break since December 2023, on targets where performance is tight: standalone Meta Quest 2, Unity WebGL in production, and Android / iOS builds. Below I go through what your post asks for, list my experience with dates and my own role, and say plainly where I fall short of the bar: my background is simulations and apps, not hybrid-casual titles in the stores.",
  ],
  quickFacts: [
    { label: "Stack", value: "Unity · C# · mobile · WebGL" },
    { label: "Start", value: "1 month after an offer" },
    { label: "Hours", value: "Sun-Thu 9:00-17:00 KSA" },
    { label: "Location", value: "Egypt (remote)" },
  ],
  answers: [
    {
      title: "Unity experience, with dates",
      original: "5+ years of experience in mobile game development, with significant time on hybrid-casual titles (Unity required)",
      body: [
        "Continuous professional Unity / C# work since December 2023, just under three years: Senior Unity Engineer at BEDO Innovating Education (Oct 2024 - present), Unity and AR developer for Ivris (freelance, Jun 2024 - Jun 2026), sole Unity VR developer at Tanta University (Dec 2023 - Oct 2024), and a one-week VR booth game for Nescafe Ice Coffee (2025). Most of it is simulations and apps rather than mobile games, and none of it is hybrid-casual; see the note below. The full table with technologies and my own responsibility is further down.",
      ],
    },
    {
      title: "Shipped titles",
      original: "At least 4 shipped mobile titles, or equivalent experience taking prototypes through to launch",
      body: [
        "I have not released a mobile game in the stores. What I have shipped is commercial B2B software: BEDO's Unity training simulations are sold to universities and companies, and I take them from first prototype to delivered product. On the game side, I built Atmosphere Protector, a mobile educational game, for Android and iOS (not released yet), and the Nescafe booth game, which ran at a live event.",
      ],
    },
    {
      title: "Code review and mentoring",
      original: "Experience reviewing code and mentoring other programmers",
      body: [
        "Since August 2026 I have mentored one intern at BEDO and review his work. That is one person, not a team, so mentoring several mid-level and junior programmers would be a step up for me, and one I want.",
      ],
    },
    {
      title: "English",
      original: "Strong English speaking skills for active communication both verbal and written with an international team",
      body: [
        "I work in English every day, and my B.Sc. studies and bachelor thesis at the German University in Cairo were in English. I have no formal test score to show.",
      ],
    },
    {
      title: "Working on Saudi Arabia hours",
      original: "Available during our Saudi Arabia working schedule (Sunday–Thursday, 9:00 AM–5:00 PM KSA time)",
      body: [
        "Yes, fully. Sunday to Thursday is already the working week in Egypt, and Egypt is at most one hour behind KSA, so 9:00-17:00 KSA is 8:00-16:00 Egypt time (the same clock time when Egypt is on summer time). After the notice month I work full-time, 40 hours a week, on your schedule.",
      ],
    },
    {
      title: "Start date",
      body: [
        "I am currently employed with a one-month notice period. I give notice when I accept an offer and start full-time one month later. During the notice month I can already put in about 15 hours a week around my current job, for example to get into your codebase, tools and analytics setup before day one.",
      ],
    },
    {
      title: "Salary expectation",
      body: ["USD 2,500–3,500 per month for the full-time role, open to discussing the full package and the contract form."],
    },
    {
      title: "Portfolio and gameplay work",
      original: "A portfolio, GitHub or shipped titles that show relevant gameplay work",
      body: [
        "Each project below links to a demo video and a case study that states what I built myself and what belongs to the wider team or the company.",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on the experience bar",
    body: "Your post asks for 5+ years of mobile game development with significant hybrid-casual time, at least 4 shipped mobile titles, soft launch and live ops, and analytics and A/B testing. I have just under three years of professional Unity (since December 2023), mostly simulations and apps. I have not worked on a hybrid-casual title, I have no store-released mobile game (Atmosphere Protector was built for Android and iOS but is not released), and I have not taken a game through soft launch, live ops or A/B testing. My mentoring is one intern since August 2026. What I bring: fast prototyping as my normal way of working, reusable gameplay-style systems on a large shared codebase, builds for constrained hardware (Quest 2, WebGL, mobile), and commercial software I have taken from prototype to delivery. If the role needs someone who already knows the hybrid-casual metrics loop from day one, I am not that person yet; if you can teach the data side while I bring the engineering, I would learn it fast. I would rather you know this now than find it in the dates.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Interactive Unity training simulations of BEDO engineering trainers, sold as commercial B2B products: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics stations, PID control labs, fluid-mechanics labs. Migrating projects to Unity 6 since mid-2026.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration)", "ScriptableObject architecture", "Dependency injection", "DOTween", "Timeline"],
      responsibility:
        "Interaction and state logic, guided steps, UI and feedback, runtime tools such as a visual command editor and interpreter, WebGL builds, and short Timeline intro sequences for the marketing team. Shared team codebase of about 80,000 lines of in-house C#; I mentor one intern and review his work. The hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "WebGL", "Android", "iOS", "AR Foundation", "Photon", "PlayFab"],
      responsibility:
        "The Unity app, not the whole product: runtime loading of 3D models, Photon multiplayer room editing in WebGL, mobile AR preview, PlayFab integration.",
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
        "Everything: interaction flows, scenes, hand-held tool interactions, onboarding for first-time users, standalone Android headset builds on mobile hardware.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth game (freelance)",
      context: "Short-session branded game for an event booth: surf sand and water routes, collect cans, beat the timer.",
      tech: ["Unity", "C#", "VR", "URP"],
      responsibility:
        "Unity developer: gameplay loop, movement, timed scoring, collectibles and onboarding that visitors understand in seconds, built from brief to booth in one week. The brand belongs to its owners.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Concept to playable in a week",
      title: "Nescafe VR surfing booth",
      image: nescafeSurfing,
      meta: "One week · timer · score · collectibles",
      copy:
        "A short-session arcade loop built from brief to live event in one week: simple movement, collectible targets, score and timer feedback, three themed routes, and a fast start and reset for booth throughput.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "Mobile game loop",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Unity · built for Android / iOS · not released",
      copy:
        "Mobile educational game: fly a plane, collect pollution clouds, keep the atmosphere's health bar up and unlock upgrades. Simple controls and a readable core loop for young players.",
      links: [
        { label: "Video", href: atmoVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "Reusable systems",
      title: "Engineering education virtual labs",
      image: fm103Graph,
      meta: "Several labs · shared patterns · WebGL",
      copy:
        "Bernoulli, laminar-flow and fuel-cell labs built by reusing common Unity patterns for guided steps, measurement feedback, graphs, dashboards and WebGL delivery, on a team codebase configured per project through ScriptableObjects and dependency injection.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Tools for other people",
      title: "Visual command editor and interpreter",
      image: cimBlockEditor,
      meta: "Block editor · validation · interpreter",
      copy:
        "A block-based editor where students build robot command rows without typing syntax, validate them and run them through a G-code-style interpreter with run, pause and stop controls, alongside a 6-joint robot arm with forward and inverse kinematics.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Constrained hardware",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Standalone Quest 2 · sole developer",
      copy:
        "Standalone headset builds on mobile hardware, with hand-held tool interactions and an onboarding tutorial for people who have never used the device. Teaching a new control scheme in seconds is the same problem as a hybrid-casual first session.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Gameplay systems and architecture",
      items: [
        {
          need: "Design, develop and optimise core gameplay systems in Unity (C#)",
          status: "direct",
          proof: "Core loops and interaction systems in the Nescafe game, Atmosphere Protector and BEDO's simulations, all in Unity / C#.",
        },
        {
          need: "Mechanics, controls, physics, camera and AI behaviours",
          status: "adjacent",
          proof: "Movement and controls (plane flight, surf traversal), robot arm forward / inverse kinematics, equation-driven simulation behaviour. No enemy or NPC AI work to show.",
        },
        {
          need: "Own scalable, modular gameplay architecture reused across titles and prototypes",
          status: "adjacent",
          proof: "At BEDO I work on a shared team codebase (~80,000 lines of in-house C#) where systems are configured per project through ScriptableObjects and dependency injection; the education labs reuse common patterns for guided steps, feedback, graphs and dashboards. Reused across simulations, not across game titles.",
        },
        {
          need: "Balance speed, quality and long-term maintainability",
          status: "direct",
          proof: "A one-week booth game on one side; long-lived commercial labs that the team keeps extending and is now migrating to Unity 6 on the other.",
        },
      ],
    },
    {
      title: "Prototyping and iteration",
      items: [
        {
          need: "Prototype new gameplay concepts quickly with designers",
          status: "direct",
          proof: "I prototype every system before full Unity work and agree it with the design side first; the Nescafe game went from brief to booth in a week.",
        },
        {
          need: "Refine builds from playtests, feedback and data",
          status: "partial",
          proof: "Iterating with instructional-design reviewers until they sign off is my daily loop. Iterating from player analytics data is new to me.",
        },
        {
          need: "Take games from prototype to production and through Soft Launch",
          status: "partial",
          proof: "Prototype to delivered commercial product: yes, at BEDO. Soft launch of a mobile game: not yet.",
        },
      ],
    },
    {
      title: "Code quality and performance",
      items: [
        {
          need: "Clean, modular code, maintained over time",
          status: "direct",
          proof: "Ongoing work on a shared, long-lived team codebase, including the current Unity 6 migration.",
        },
        {
          need: "Profile and optimise for performance, memory and stability on many mobile devices",
          status: "adjacent",
          proof: "Builds for constrained targets: standalone Quest 2, production Unity WebGL, Android / iOS. Not a wide range of low-end phones in a store release.",
        },
        {
          need: "Lead debugging of complex gameplay issues across the codebase",
          status: "adjacent",
          proof: "Debugging across a large shared codebase and through an engine-version migration; complex state logic (PLC-style station behaviour, interpreters).",
        },
      ],
    },
    {
      title: "Collaboration and technical leadership",
      items: [
        {
          need: "Work with Design, Art, Product, Engineering and AI Engineering",
          status: "adjacent",
          proof: "Daily work with instructional-design, art and mechatronics teams at BEDO, plus Timeline intro sequences for the marketing team; shared Unity and backend codebase at Ivris.",
        },
        {
          need: "Review code, set standards, mentor mid-level and junior programmers",
          status: "partial",
          proof: "I mentor one intern at BEDO and review his work (since Aug 2026). Setting standards for a team of programmers would be new.",
        },
        {
          need: "Input on feasibility, scope and timelines",
          status: "adjacent",
          proof: "Agreeing what is buildable with the design side before Unity time is spent is part of my prototype-first process.",
        },
        {
          need: "Bring useful new tools and techniques to the team",
          status: "direct",
          proof: "Codex and Claude Code in daily development; Unity 6 migration work at BEDO.",
        },
      ],
    },
    {
      title: "Qualifications",
      items: [
        {
          need: "5+ years mobile game development, significant hybrid-casual time",
          status: "partial",
          proof: "Just under three years of professional Unity, mostly simulations and apps; no hybrid-casual titles. See the note above.",
        },
        {
          need: "Expert-level C#",
          status: "direct",
          proof: "C# in every project above, including interpreters, editors and a large shared codebase.",
        },
        {
          need: "4+ shipped mobile titles, or prototypes taken to launch",
          status: "partial",
          proof: "Commercial B2B simulations shipped through BEDO; one mobile game built for Android / iOS but not released.",
        },
        {
          need: "Game architecture, design patterns and gameplay systems",
          status: "direct",
          proof: "ScriptableObject-driven configuration, dependency injection, state logic for station and lab behaviour.",
        },
        {
          need: "Mobile optimisation, profiling and performance constraints",
          status: "adjacent",
          proof: "Quest 2, WebGL and Android / iOS targets; see the performance row above.",
        },
        {
          need: "Own complex features end to end and decide independently",
          status: "direct",
          proof: "Sole developer of the Quest 2 suite; at BEDO, whole features such as the visual command editor and interpreter.",
        },
        {
          need: "Fast-paced prototyping, tight deadlines, quick adaptation to feedback",
          status: "direct",
          proof: "One-week booth deadline; parallel freelance and full-time work; review cycles with instructional designers.",
        },
        {
          need: "Soft Launch and live operations",
          status: "commitment",
          proof: "Not done yet. I would learn your soft-launch and live-ops process on the first title.",
        },
        {
          need: "Game analytics, A/B testing, data-informed iteration",
          status: "commitment",
          proof: "Not done yet. I would build features so tuning values and variants come from data and remote configuration, then learn your analytics stack.",
        },
        {
          need: "Strong spoken and written English",
          status: "direct",
          proof: "English every day at work; B.Sc. and thesis in English.",
        },
      ],
    },
    {
      title: "Bonus points",
      items: [
        {
          need: "Internal tools, editor extensions or reusable frameworks in Unity",
          status: "adjacent",
          proof: "Block-based command editor with validation and an interpreter (a runtime tool for students); data-configured shared systems on BEDO's team codebase.",
        },
        {
          need: "AI-assisted development workflows or tools",
          status: "direct",
          proof: "Codex and Claude Code daily in development; I review and test what they produce.",
        },
        {
          need: "Portfolio, GitHub or shipped titles showing gameplay work",
          status: "direct",
          proof: "Portfolio with demo videos and case studies, linked throughout this page.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would work on gameplay at Naphora",
    intro:
      "To be checked against your existing codebase, tools and analytics setup, but this is how I would work from the first weeks:",
    steps: [
      {
        title: "Playable before polished",
        body: "At BEDO I build an HTML prototype with 2D vector graphics before any Unity work, with every changing value driven by its real equation so the design side can check the behaviour. For a hybrid-casual concept the same rule means a rough playable build of the core action in days, so designers can judge the feel before art and polish time is spent.",
      },
      {
        title: "Tuning in data, not in code",
        body: "Speeds, costs, spawn rates and difficulty curves live in ScriptableObjects or remote configuration from the first prototype, so designers iterate without a programmer and the same values can later drive A/B variants.",
      },
      {
        title: "Systems that move to the next title",
        body: "Keep core systems (input, camera, progression, economy hooks, feedback) as modules with clear boundaries and dependency injection, so a prototype that fails costs nothing and the parts that work carry into the next game.",
      },
      {
        title: "Feel is a feature",
        body: "Responsive input, short and readable feedback (tweens with DOTween, camera and UI reactions), and a first session that teaches the controls in seconds, the same constraint I had at the Nescafe booth.",
      },
      {
        title: "A device budget from the first build",
        body: "Agree frame-time and memory targets for your lowest supported phones early, profile on real devices every iteration, and flag scope or performance risks as soon as they appear rather than at soft launch.",
      },
    ],
    note: "Hybrid-casual metrics, soft-launch practice and your analytics and A/B tooling are things I would learn from your team; I have not done them in production.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time onboarding",
      body: "About 15 hours a week around my current job: read the codebase and coding standards, learn your analytics and remote-config setup, and pick up a small gameplay task.",
    },
    {
      when: "Month 1",
      title: "Full-time on KSA hours",
      body: "40 hours a week, Sun-Thu 9:00-17:00 KSA. Ship gameplay features on a current title and pair with designers on a first prototype.",
    },
    {
      when: "Months 2-3",
      title: "Reusable systems and reviews",
      body: "Pull the systems that recur across prototypes into shared modules, agree gameplay coding standards with the team, and take on code reviews and mentoring.",
    },
    {
      when: "Ongoing",
      title: "Prototype to soft launch",
      body: "Own gameplay features from first prototype through soft launch and live iteration, using test results to decide what to build next.",
    },
  ],
  questions: [
    "Which titles or genres would I join first, and at what stage are they: early prototype, production or soft launch?",
    "How does a prototype get greenlit today: which playtest or market-test signals move it into production, and how long is a typical prototype cycle?",
    "Is there a shared gameplay framework or core package across your titles already, or would building it be part of this role?",
    "How large is a game team, and which programmers would I review and mentor?",
    "What analytics, A/B testing and remote-config stack do you use, and who owns the integration in the client?",
    "Which devices are your minimum spec, and what frame-time and memory targets do you hold builds to?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the demos in a short call, and to take a technical or prototyping task on one of your game concepts if that helps your decision.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity developer · games and interactive simulations",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

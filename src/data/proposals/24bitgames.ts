import cimBlockEditor from "../../assets/thumbnails/projects/cim/Inter02.thumb.webp";
import fm103Graph from "../../assets/thumbnails/projects/EduLab/FM103 Graph.thumb.webp";
import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: GameJobs.co post "Senior Game Developer" (24 Bit Games, South Africa, posted ~2026-10-16),
// permanent role, Unity or UE4 track, R40,000-R70,000+ per month. The post asks no written questions,
// so the answers follow its own requirement list in order (Unity track, general requirements, bonus).
// IMPORTANT: 24bitgames.com/careers (checked 2026-10-20) says they only hire South African residents
// at this time and will not respond to non-residents. Amr lives in Egypt: this is the first question
// and the candid note. Do not send unless that route is confirmed open.

const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";

const proposal: Proposal = {
  slug: "24bitgames",
  client: "24 Bit Games",
  projectName: "Senior Game Developer (Unity track)",
  dateLabel: "October 2026",
  greeting: "Hello 24 Bit Games team,",
  eyebrow: "Application · 24 Bit Games · Senior Game Developer (Unity)",
  headline: "Unity developer who gets productive fast in an existing codebase and ships to constrained hardware",
  lead: [
    "Your post puts weight on getting up to speed with an existing codebase and writing optimised, extendable code that follows its conventions. That is my daily work at BEDO, where I build on a shared Unity codebase of about 80,000 lines of in-house C# and am migrating projects to Unity 6, and it is how I worked for two years on an existing product at Ivris, where I built the Unity app for WebGL, Android and iOS.",
    "I apply for the Unity track. I have worked professionally in Unity and C# since December 2023, on targets with tight budgets: standalone Meta Quest 2, Unity WebGL in production, and mobile AR. Below I go through your requirements in order, list my experience with dates and my own role, and say plainly where I fall short, starting with the fact that I live in Egypt, not South Africa.",
  ],
  quickFacts: [
    { label: "Track", value: "Unity · C# · .NET" },
    { label: "Start", value: "1 month after an offer" },
    { label: "Location", value: "Egypt (remote)" },
    { label: "Time zone", value: "Same as SAST in winter, +1 h in summer" },
  ],
  answers: [
    {
      title: "Where I live, first",
      body: [
        "I live in Egypt and I am not a South African resident. Your careers page says you are only hiring within South Africa at this time, so I want to raise this before anything else. If there is a route for someone outside South Africa (for example a remote contractor agreement or an employer-of-record arrangement), I would welcome the conversation; if there is not, I understand and thank you for reading this far.",
      ],
    },
    {
      title: "Unity experience, with dates",
      original: "Experience building games or related real time applications in Unity 2018 or higher",
      body: [
        "Continuous professional Unity work since December 2023: Senior Unity Engineer at BEDO Innovating Education (Oct 2024 - present), Unity and AR developer for Ivris (freelance, Jun 2024 - Jun 2026), sole Unity VR developer at Tanta University (Dec 2023 - Oct 2024), and a one-week VR booth game for Nescafe Ice Coffee (2025). Most of it is real-time simulations and apps rather than games; the closest game work is the Nescafe booth game and Atmosphere Protector, a mobile educational game (not released). Unity 6 in production at Ivris and in the BEDO migration.",
      ],
    },
    {
      title: "C#, .NET, Unity scripting and the Editor",
      original: "Experience programming in C# and .NET. Excellent knowledge and familiarity with Unity Scripting and the Unity Editor.",
      body: [
        "C# in every project I have built, including a block-based command editor with validation and a G-code-style interpreter, PLC-style station behaviour, and a ScriptableObject and dependency-injection setup that configures shared systems per project. I do not have C or C++ project work; on the Unreal side I have only explored the engine briefly.",
      ],
    },
    {
      title: "Getting up to speed with an existing codebase",
      original: "Ability to get up to speed with an existing code base",
      body: [
        "At BEDO I work on a shared team codebase of about 80,000 lines of in-house C# (around 390 files) and am moving projects to Unity 6, which means reading code I did not write and changing it without breaking the labs built on it. At Ivris I joined an existing product and built the Unity app around its backend and services (Photon, PlayFab).",
      ],
    },
    {
      title: "Remote working",
      original: "Ability to self motivate and manage tasks in a remote working environment. Secure and comfortable remote working environment.",
      body: [
        "I managed my own tasks as a freelancer for Ivris for two years alongside my full-time role, and as the sole developer of the Tanta University VR suite. [[TODO: home setup: dedicated workspace, backup power and internet?]]",
      ],
    },
    {
      title: "Start date and hours",
      body: [
        "I am employed with a one-month notice period. I give notice when I accept an offer and start full-time one month later. During the notice month I can already put in about 15 hours a week to learn your codebase, conventions and tools. After that, full-time on your working week. South Africa and Egypt are both on UTC+2 in winter; in Egyptian summer time I am one hour ahead.",
      ],
    },
    {
      title: "Salary",
      original: "Salary in the range of R40,000 to R70,000+ per month, depending upon skill level and experience",
      body: ["[[TODO: salary]] per month, open to discussing the contract form if a non-resident route exists."],
    },
  ],
  candidNote: {
    title: "A transparent note on location and seniority",
    body: "Two things you should know now. First, I live in Egypt; your careers page says you only hire South African residents at this time, so this application only makes sense if you can contract someone abroad. Second, I have just under three years of professional Unity (since December 2023), mostly real-time simulations and apps rather than commercial games, no console or DirectX / OpenGL work, and no C or C++ projects. My mentoring is one intern since August 2026. What I bring: fast onboarding into large existing codebases, builds for constrained targets (standalone Quest 2, WebGL, mobile AR), Unity 6 migration work, and commercial B2B software I have taken from prototype to delivery. If the senior bar means years of shipped console titles, I am not there yet, and I would rather you know that before a call.",
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
      label: "Large existing codebase",
      title: "Engineering education virtual labs",
      image: fm103Graph,
      meta: "Shared team codebase · ~80k lines C# · WebGL",
      copy:
        "Bernoulli, laminar-flow and fuel-cell labs built on a shared team codebase configured per project through ScriptableObjects and dependency injection, so labs reuse systems for guided steps, measurement feedback, graphs and dashboards instead of re-implementing them.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Standalone VR hardware",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Standalone Quest 2 · sole developer",
      copy:
        "Standalone headset builds on mobile hardware, with hand-held tool interactions and an onboarding tutorial for people who have never used a headset.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
    {
      label: "Game loop in a week",
      title: "Nescafe VR surfing booth",
      image: nescafeSurfing,
      meta: "One week · URP · timer · score · collectibles",
      copy:
        "A short-session arcade loop built from brief to live event in one week: movement, collectible targets, score and timer feedback, three themed routes, and a fast start and reset for booth throughput.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "Mobile and WebGL",
      title: "Ivris AR interior visualization",
      image: ivrisApp,
      meta: "Unity 6 · WebGL · Android / iOS AR · Photon",
      copy:
        "My Unity implementation of an existing product's app: runtime 3D model loading, multiplayer room editing in WebGL with Photon, and an AR preview on phones, wired into the product's backend services.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Tools and interpreters",
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
  ],
  requirementGroups: [
    {
      title: "Unity track",
      items: [
        {
          need: "Games or related real-time applications in Unity 2018 or higher",
          status: "direct",
          proof: "Real-time Unity simulations, VR and AR apps since Dec 2023, Unity 6 in production. Games: the Nescafe booth game and Atmosphere Protector (built for Android / iOS, not released).",
        },
        {
          need: "C# and .NET",
          status: "direct",
          proof: "C# in every project, including an interpreter, a block editor and a large shared codebase.",
        },
        {
          need: "Excellent knowledge of Unity scripting and the Unity Editor",
          status: "direct",
          proof: "Daily Unity work across WebGL, Quest 2 and mobile targets, a Unity 6 migration, ScriptableObject-driven configuration, Timeline and DOTween.",
        },
      ],
    },
    {
      title: "General requirements",
      items: [
        {
          need: "Problem-solving, organisation and communication",
          status: "direct",
          proof: "Daily work in English with instructional-design, art and mechatronics teams; full-time and freelance work in parallel for two years.",
        },
        {
          need: "Attention to detail",
          status: "direct",
          proof: "Simulations that engineering reviewers check value by value against the real equipment and equations.",
        },
        {
          need: "Collaborative team work",
          status: "direct",
          proof: "Shared BEDO team codebase; I mentor one intern and review his work (since Aug 2026); shared Unity and backend codebase at Ivris.",
        },
        {
          need: "Self-motivated task management in a remote environment",
          status: "direct",
          proof: "Two years of freelance work for Ivris next to a full-time job; sole developer of the Tanta University VR suite.",
        },
        {
          need: "Get up to speed with an existing codebase",
          status: "direct",
          proof: "BEDO shared codebase (~80,000 lines of in-house C#) and its Unity 6 migration; joined an existing product at Ivris.",
        },
        {
          need: "Optimised, extendable code that follows established conventions",
          status: "adjacent",
          proof: "Extendable: shared systems configured per project through ScriptableObjects and dependency injection. Optimised for Quest 2, WebGL and mobile targets, without a written-up profiling case study to show yet.",
        },
        {
          need: "Proficient in C, C++ and / or C#",
          status: "direct",
          proof: "C#. No C or C++ project work.",
        },
        {
          need: "Git and GitFlow",
          status: "partial",
          proof: "[[TODO: Git and GitFlow use at BEDO / Ivris?]]",
        },
        {
          need: "Diagnose issues through debugging and profiling",
          status: "adjacent",
          proof: "Debugging across a large shared codebase and through an engine-version migration; builds held to the budgets of standalone Quest 2 and WebGL.",
        },
        {
          need: "Secure and comfortable remote working environment",
          status: "commitment",
          proof: "See the remote-working answer above.",
        },
      ],
    },
    {
      title: "Bonus points",
      items: [
        {
          need: "2D and 3D graphics pipelines",
          status: "adjacent",
          proof: "Built-in render pipeline on BEDO and Ivris projects, URP on the Nescafe VR game; Blender to fix and adjust models. No custom render-pipeline work.",
        },
        {
          need: "Game development optimisation principles",
          status: "adjacent",
          proof: "Standalone Quest 2 and WebGL builds, where frame time and memory are tight by default.",
        },
        {
          need: "Mobile, VR or console platforms",
          status: "direct",
          proof: "VR: Meta Quest 2 suite (sole developer) and the Nescafe booth. Mobile: Android / iOS AR app at Ivris. No console work.",
        },
        {
          need: "DirectX or OpenGL APIs",
          status: "commitment",
          proof: "Not used directly; I have worked through Unity's rendering layer only.",
        },
        {
          need: "JIRA or related task management tools",
          status: "partial",
          proof: "[[TODO: task tracker used at BEDO / Ivris?]]",
        },
        {
          need: "Passionate about video games",
          status: "adjacent",
          proof: "[[TODO: one line on the games you play]]",
        },
        {
          need: "Computer Science, Engineering or related degree",
          status: "direct",
          proof: "B.Sc. Computer Science Engineering and Technology, German University in Cairo (2014-2019); thesis trained a model to drive a car in a Unity simulation.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would work on your projects",
    intro:
      "To be adapted to how your teams run projects and to the codebases you work in, but this is how I would approach the first weeks:",
    steps: [
      {
        title: "Read the codebase before changing it",
        body: "Learn the project's conventions, branching model and build pipeline first, make small changes that follow them, and ask early where the code is load-bearing. This is how I work on BEDO's shared codebase and its Unity 6 migration.",
      },
      {
        title: "Playable before polished",
        body: "At BEDO I build an HTML prototype with 2D vector graphics before any Unity work, with every changing value driven by its real equation so the design side can check the behaviour. For game features the same rule means a rough playable version of the mechanic first, so the team can judge it before art and polish time is spent.",
      },
      {
        title: "A budget per platform from the first build",
        body: "Agree frame-time and memory targets for each platform early, profile on the target device every iteration, and flag performance risks when they appear instead of at the end.",
      },
      {
        title: "Extendable by default",
        body: "Tuning values in ScriptableObjects, systems with clear boundaries and dependency injection, so the next feature or the next platform does not need a rewrite.",
      },
    ],
    note: "Console platforms, low-level graphics APIs and your specific profiling tools are things I would learn from your team; I have not used them in production.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time onboarding",
      body: "About 15 hours a week around my current job: set up the toolchain, read the project codebase and conventions, and pick up a small, well-bounded task.",
    },
    {
      when: "Month 1",
      title: "Full-time on your working week",
      body: "Full-time on your team's hours (same clock time as South Africa in winter, one hour ahead in Egyptian summer). Ship features and fixes on a current project.",
    },
    {
      when: "Months 2-3",
      title: "Ownership",
      body: "Own features end to end, take on profiling and optimisation tasks for the project's target platforms, and join code reviews.",
    },
  ],
  questions: [
    "Your careers page says you only hire South African residents at this time. Is there any route for someone based in Egypt, such as a remote contractor agreement or an employer-of-record arrangement?",
    "On the Unity track, what kind of work would I join first: co-development on another studio's game, a port, or an internal title, and on which Unity versions?",
    "Which target platforms do current Unity projects ship on (PC, consoles, mobile, VR), and how is device and dev-kit access handled for remote developers?",
    "How do you onboard developers into a client's existing codebase and conventions, and what does code review look like in your GitFlow setup?",
    "Where in the R40,000-R70,000+ range does your senior level start, and what would you expect a senior to own that an intermediate developer does not?",
  ],
  closing: {
    title: "Next step",
    body: "If a route for a developer in Egypt exists, I would be glad to walk you through the demos in a short call and to take a technical task in Unity if that helps your decision.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity developer · games and real-time simulations",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

import fm103Graph from "../../assets/thumbnails/projects/EduLab/FM103 Graph.thumb.webp";
import mr109RobotArm from "../../assets/thumbnails/projects/MR109 Compact/MR109 Robot Arm.thumb.webp";
import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: Skillshot.pl listing "Senior Unity Programmer dla Artifex Mundi" (Katowice / remote /
// hybrid, permanent role, published 2026-10-12,
// https://www.skillshot.pl/jobs/39922-senior-unity-programmer-at-artifex-mundi). Applications go
// through an external recruitment system. The post asks for no specific application materials,
// so the answers follow its requirement list in order, with the Polish wording as `original`.

const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const atmosphereVideo = "https://youtu.be/eWFaHaYUy44";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";

const proposal: Proposal = {
  slug: "artifexmundi",
  client: "Artifex Mundi",
  projectName: "Senior Unity Programmer · Void Hunters (RPG studio)",
  dateLabel: "October 2026",
  greeting: "Dzień dobry,",
  eyebrow: "Application · Artifex Mundi · Senior Unity Programmer",
  headline: "Unity / C# engineer who designs systems to stay scalable, for Void Hunters",
  lead: [
    "Void Hunters is built on system depth: turn-based combat, squad progression and synergies between heroes. Most of my work is the engineering under that kind of depth: rule-driven Unity systems with many interacting states, built on ScriptableObject architecture and dependency injection so new content does not mean new special cases. Since October 2024 I have been Senior Unity Engineer at BEDO, building simulation systems that several modules share.",
    "Below I go through your requirements in order, list my experience with dates and my own role, and say plainly where I fall short of the post (years of experience, F2P and a shipped commercial game title), so you can judge the fit quickly.",
  ],
  quickFacts: [
    { label: "Unity / C#", value: "Professionally since Dec 2023" },
    { label: "Architecture", value: "ScriptableObjects · DI · state machines" },
    { label: "Start", value: "1 month after offer (notice period)" },
    { label: "Time zone", value: "Egypt · 1 h ahead of Poland" },
  ],
  answers: [
    {
      title: "Commercial C# and Unity experience",
      original:
        "minimum 5 lat doświadczenia w programowaniu komercyjnych projektów w C# oraz 3–5 lat doświadczenia w pracy z Unity",
      body: [
        "Continuous professional Unity / C# work since December 2023: Unity VR developer at Tanta University (Dec 2023 – Oct 2024, sole developer), Unity and AR developer for Ivris (freelance, Jun 2024 – Jun 2026) and Senior Unity Engineer at BEDO Innovating Education (Oct 2024 – present). That is just under three years, below the five years of C# you ask for; see the note below. The full table with technologies and my responsibility is further down.",
      ],
    },
    {
      title: "Architecture, design patterns and scalable systems",
      original:
        "bardzo dobra znajomość architektury aplikacji, wzorców projektowych, zasad clean code, SOLID; doświadczenie w projektowaniu i rozwijaniu skalowalnych systemów",
      body: [
        "At BEDO I improved the scalability of our simulations with ScriptableObject architecture and dependency injection: configuration and content live in data, services are injected rather than looked up, and behaviour is driven by explicit state machines (ready / running / done / emergency on the industrial stations, guided experiment steps in the labs). The same patterns carry several lab modules, so a new module reuses the guided-step, measurement, graph and dashboard systems instead of copying them.",
        "On Ivris I kept one Unity codebase working across a WebGL editor with Photon multiplayer and an Android / iOS AR app, with 3D models loaded at runtime and PlayFab plus a hosted backend behind it.",
      ],
    },
    {
      title: "Profiling, performance and memory",
      original:
        "umiejętność pracy z profilowaniem, optymalizacją wydajności oraz analizą bottlenecków CPU/GPU/memory",
      body: [
        "My targets have always been constrained: Meta Quest 2 standalone, Unity WebGL in the browser and Android / iOS. I profile on the device or build, not in the editor, because those are the only numbers that matter on these platforms.",
      ],
    },
    {
      title: "Working with designers, artists, QA; code review and mentoring",
      original:
        "doświadczenie we współpracy z designerami, artystami, QA oraz innymi programistami; umiejętność prowadzenia code review i mentoringu",
      body: [
        "Day to day at BEDO I work with instructional-design, art and mechatronics teams. Before Unity work on a system, I build an HTML prototype with 2D vector graphics where every changing value is driven by its real equation, shown next to it, so the designers can check the behaviour and agree the rules before Unity time is spent. For a game, that is the same conversation as agreeing combat and progression formulas with game designers.",
        "Since August 2026 I have mentored an intern at BEDO and reviewed his work. That is my code-review and mentoring experience so far: one person, not a team.",
      ],
    },
    {
      title: "AI tools for code generation",
      original: "umiejętność korzystania z narzędzi AI do generacji kodu (codex, claude code)",
      body: ["I use Codex and Claude Code in my daily work to speed up development, and I review and test what they generate."],
    },
    {
      title: "Work mode, start date and salary",
      original: "możliwość wyboru trybu pracy (office-first, remote lub hybryda); elastyczne godziny pracy (core hours: 10:00 – 15:00)",
      body: [
        "Remote, from Egypt. Egypt is one hour ahead of Poland, so your 10:00–15:00 core hours are 11:00–16:00 for me and fit fully inside my working day. Whether your remote option is open to a candidate living outside Poland, and on which contract form, is my first question below.",
        "I am currently employed with a one-month notice period, so I can start one month after an offer.",
        "Salary expectation: [[TODO: salary expectation (monthly, gross or B2B, currency)]]",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on where I don't yet match the post",
    body: "Three things you should know up front. My professional Unity / C# experience starts in December 2023: just under three years, below the five years of commercial C# and the three-to-five years of Unity you list. Most of that work is training simulations and educational and branded games, not free-to-play titles, so I have not worked with F2P economies, live-ops or crash-reporting pipelines in production, and I have not shipped a commercial game to store release with a game studio. What I bring is system architecture for rule-heavy, state-heavy Unity applications (ScriptableObjects, dependency injection, state machines), production delivery to constrained platforms (Quest 2, WebGL, mobile) and a habit of agreeing rules with designers before code is written. I prefer you know this now rather than discover it in an interview.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity training simulations of BEDO engineering trainers: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics and industrial stations, PID control labs, fluid-mechanics labs.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "ScriptableObject architecture", "Dependency injection"],
      responsibility:
        "Simulation systems and equipment states, guided experiment steps, monitoring and measurement UI, response graphs, a block-based command editor with validation, WebGL builds and migration of projects to Unity 6. Improved scalability with ScriptableObject architecture and dependency injection. Worked with instructional-design, art and mechatronics teams; the hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context:
        "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview. I built the Unity app, not the whole product.",
      tech: ["Unity 6", "C#", "WebGL", "Android", "iOS", "AR Foundation", "Photon", "PlayFab"],
      responsibility:
        "Runtime loading of 3D furniture and room models, Photon multiplayer room editing in WebGL, editor UI, AR preview on mobile, PlayFab and backend integration.",
      links: [
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
        { label: "Video", href: ivrisVideo },
      ],
    },
    {
      period: "Dec 2023 – Oct 2024",
      title: "Tanta University — Unity VR developer (sole developer)",
      context:
        "Meta Quest 2 training suite: headset onboarding tutorial, multi-angle 360° surgical-room viewer, interactive viscosity lab.",
      tech: ["Unity", "C#", "Meta Quest 2", "Auto Hand", "360 video", "Android"],
      responsibility:
        "Everything, as the only developer: technical decisions, interaction flows, scenes, hand-held tools (a working calculator and stopwatch), adapting 3D assets, headset builds and optimisation.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth (freelance)",
      context: "Short-session branded VR game for an event booth: surf sand and water tracks, collect cans, beat the timer.",
      tech: ["Unity", "C#", "VR"],
      responsibility: "Unity developer: gameplay loop, timed scoring, collectibles and visitor-friendly onboarding.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Reusable systems",
      title: "Engineering education virtual labs",
      image: fm103Graph,
      meta: "Shared systems · several modules · WebGL",
      copy:
        "Several lab simulations built on shared Unity systems for guided steps, measurement feedback, graphs and dashboards, so each new module extends the systems instead of copying them.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "State logic + tooling",
      title: "MR109 / MR110 industrial training",
      image: mr109RobotArm,
      meta: "State machines · command editor · validation",
      copy:
        "Station behaviour driven by ready / running / done / emergency states, and a block-based editor where students build robot command scripts that are validated before they run.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Mobile game systems",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Android / iOS · health · upgrades",
      copy:
        "Children's educational mobile game: airplane movement, pollution collection, an atmosphere-health system and environmental upgrades tied to progression.",
      links: [
        { label: "Video", href: atmosphereVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "Runtime content + backend",
      title: "Ivris WebGL room editor",
      image: ivrisApp,
      meta: "Runtime 3D loading · Photon · PlayFab",
      copy:
        "Production Unity 6 app with 3D models loaded at runtime, real-time multiplayer editing in WebGL and a mobile AR preview of the same content.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Gameplay loop",
      title: "Nescafe VR surfing game",
      image: nescafeSurfing,
      meta: "Gameplay loop · scoring · timer",
      copy: "Short-session game with movement, collectibles, a timer and scoring, designed so first-time players understand it in seconds.",
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
          need: "Design and build the architecture of new features and systems",
          status: "direct",
          proof: "ScriptableObject + dependency-injection architecture and state-machine systems shared across BEDO simulation modules; sole technical owner of the Tanta University suite.",
        },
        {
          need: "Implement features in Unity / C# with quality, performance and scalability",
          status: "direct",
          proof: "Every project above is Unity / C#, shipped to Quest 2, WebGL and Android / iOS.",
        },
        {
          need: "Co-create the technical vision; make technical decisions",
          status: "adjacent",
          proof: "Architecture choices in BEDO's team projects and the Unity 6 migration; every technical decision on the Tanta suite. Not yet as the lead of a game studio team.",
        },
        {
          need: "Develop and maintain existing systems and production tools",
          status: "direct",
          proof: "Maintaining and extending BEDO simulations through the Unity 6 migration; block-based command editor with validation (MR110).",
        },
        {
          need: "Turn design goals into technical solutions with designers, artists, QA and producers",
          status: "direct",
          proof: "Daily work with instructional-design, art and mechatronics teams at BEDO; rules agreed in HTML prototypes before Unity work.",
        },
        {
          need: "Identify technical risks early",
          status: "adjacent",
          proof: "Prototyping rules before Unity work is how I take risk out early; WebGL and Quest constraints checked on the build from the start.",
        },
        {
          need: "Optimise performance and stability",
          status: "direct",
          proof: "Meta Quest 2 standalone, Unity WebGL and Android / iOS, all memory- and performance-constrained targets.",
        },
        {
          need: "Support the team through code review",
          status: "partial",
          proof: "Team codebases at BEDO and Ivris; my code review experience is in the answer above.",
        },
      ],
    },
    {
      title: "Requirements",
      items: [
        {
          need: "5+ years of commercial C# and 3–5 years of Unity",
          status: "partial",
          proof: "Continuous professional Unity / C# since Dec 2023, just under three years. See the note above.",
        },
        {
          need: "Architecture, design patterns, clean code, SOLID",
          status: "direct",
          proof: "ScriptableObject architecture, dependency injection and explicit state machines at BEDO.",
        },
        {
          need: "Designing and growing scalable systems",
          status: "direct",
          proof: "Shared guided-step, measurement, graph and dashboard systems reused across several BEDO lab modules.",
        },
        {
          need: "Profiling and CPU / GPU / memory bottleneck analysis",
          status: "direct",
          proof: "Quest 2 standalone and WebGL builds, where editor numbers are not the real ones.",
        },
        {
          need: "Game development lifecycle and process",
          status: "partial",
          proof: "Full delivery cycles on training simulations and on two games (Atmosphere Protector, Nescafe VR booth); not yet a commercial game studio production.",
        },
        {
          need: "Git",
          status: "direct",
          proof: "Git in team development at BEDO and on a shared Unity and backend codebase at Ivris.",
        },
        {
          need: "Readable, testable, maintainable code",
          status: "adjacent",
          proof: "Injected dependencies and data-driven configuration keep systems separable and testable; I would follow your testing conventions.",
        },
        {
          need: "Debugging complex technical problems",
          status: "direct",
          proof: "Multiplayer state across Photon WebGL clients (Ivris); simulation state and equipment logic (BEDO); standalone headset builds (Tanta).",
        },
        {
          need: "Independent technical decisions",
          status: "direct",
          proof: "Sole developer of the Tanta University Quest 2 suite; freelance Unity developer for Ivris.",
        },
        {
          need: "Code review and mentoring less experienced developers",
          status: "partial",
          proof: "See the answer on code review and mentoring above.",
        },
        {
          need: "AI tools for code generation (Codex, Claude Code)",
          status: "partial",
          proof: "See the answer on AI tools above.",
        },
        {
          need: "Explaining technical topics to design and business",
          status: "direct",
          proof: "HTML prototypes that show each value next to its equation, so non-programmers can verify the behaviour themselves.",
        },
      ],
    },
    {
      title: "Nice to have",
      items: [
        {
          need: "Mobile, PC or console games",
          status: "partial",
          proof: "Atmosphere Protector (Android / iOS) and the Nescafe VR booth game; no PC or console titles.",
        },
        {
          need: "Asset Bundles",
          status: "adjacent",
          proof: "Runtime loading of 3D models in a production app (Ivris). Asset Bundles specifically are not in my portfolio projects.",
        },
        {
          need: "Dependency injection systems",
          status: "direct",
          proof: "Dependency injection used to keep BEDO simulations scalable.",
        },
        {
          need: "Analytics, crash reporting and live-ops",
          status: "adjacent",
          proof: "PlayFab and a hosted backend integrated into the Unity client (Ivris); no F2P live-ops or crash-reporting pipeline in production.",
        },
        {
          need: "Free-to-play projects",
          status: "commitment",
          proof: "Not yet. I would learn your economy and live-ops constraints from the team during onboarding.",
        },
        {
          need: "Shipped at least one title to market",
          status: "partial",
          proof: "Shipped to market: BEDO's Unity training simulations are commercial products sold to universities and companies (B2B). Also delivered the Tanta University Quest 2 suite, the Nescafe booth game and the Ivris app. No commercial game store release with a studio yet.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would start on Void Hunters",
    intro:
      "This depends on your codebase and conventions, which I would learn first, but this is how I would expect to contribute in the first months:",
    steps: [
      {
        title: "Learn the architecture before changing it",
        body: "Read the codebase, its DI setup and content pipeline, build and run it on the target devices, and take small, reviewable tasks first so my code matches the team's conventions before I propose changes.",
      },
      {
        title: "Rules in data, presentation separate",
        body: "Combat, progression and synergy rules expressed as data and injected services, kept apart from animation and UI, so designers can add heroes and effects without new special cases, and the rules can be tested without a scene.",
      },
      {
        title: "Agree the formulas before building them",
        body: "When a new system needs design sign-off, I build a quick HTML prototype with 2D vector graphics where every changing value is driven by its formula and shown next to it. Designers can check the numbers and edge cases before Unity time is spent.",
      },
      {
        title: "Profile on real devices",
        body: "Measure CPU, GPU and memory on your lowest supported devices early, and keep a short list of known risks, so performance problems show up in a feature's first build, not before release.",
      },
      {
        title: "Code review as shared standards",
        body: "Reviews that explain the reasoning and point to the agreed architecture, so the codebase stays consistent as the team grows.",
      },
    ],
    note: "F2P economy, live-ops and your analytics and crash-reporting stack are new to me; I would learn them from your team and documentation in the first weeks.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Offer and notice period",
      body: "One-month notice period at my current job after an offer; start at the end of that month.",
    },
    {
      when: "First 2–4 weeks",
      title: "Onboarding",
      body: "Repository, build pipeline, DI and content setup, target devices; first small features and code reviews.",
    },
    {
      when: "Months 1–3",
      title: "Features and systems",
      body: "Gameplay systems end to end with designers and QA, performance work on device, and taking ownership of a system area.",
    },
  ],
  questions: [
    "Is the remote option open to a candidate living in Egypt, and on which contract form (B2B contract, employer of record or other)? Can the team work in English day to day, or is Polish required?",
    "Which platforms does Void Hunters target, and what stage is the project in (pre-production, soft launch, live)?",
    "Which DI framework and content pipeline does the project use (for example Zenject or VContainer, Asset Bundles or Addressables)?",
    "Which system area would this role own first: combat, progression, meta systems or production tools?",
    "How do code review and technical decisions work in the RPG team, and how many programmers would I work with?",
    "How does the team use AI coding tools today, and are there rules for using them on the codebase?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the demos and the architecture behind them in a short call.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Senior Unity Engineer (systems, simulation, games)",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

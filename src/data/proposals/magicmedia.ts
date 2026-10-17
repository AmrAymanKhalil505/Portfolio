import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import pidGraph from "../../assets/thumbnails/projects/PID/graph photo.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: LinkedIn post "Mid Unity Developer" (Magic Media, listed in Lisbon, Portugal, posted
// 2026-10-12, full-time, "Permanently remote position", daily overlap with Helsinki hours,
// https://pt.linkedin.com/jobs/view/mid-unity-developer-at-magic-media-4478508879). The post asks
// for no specific application materials, so the answers below follow its requirement list in order.
// The end client is not named in the post; it is not named here either.

const atmoVideo = "https://youtu.be/eWFaHaYUy44";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";

const proposal: Proposal = {
  slug: "magicmedia",
  client: "Magic Media",
  projectName: "Mid Unity Developer (cloud-streamed TV party game)",
  dateLabel: "October 2026",
  greeting: "Hello Magic Media team,",
  eyebrow: "Application · Magic Media · Mid Unity Developer",
  headline: "Unity / C# developer for a party game where phones are the controllers",
  lead: [
    "A party game on one TV with phones as controllers depends on two things I have built in Unity: shared state that every connected client agrees on, and play that first-time players understand in seconds. In my Unity implementation of the Ivris app, several users edit the same room in real time over Photon, with PlayFab and a hosted backend behind it. For Nescafe Ice Coffee I built a short-session booth game with collectibles and a timed score loop for walk-up players.",
    "I have worked professionally in Unity and C# since December 2023, including Unity 6 in production. Below I go through your requirements in order, list my experience with dates and my own role, and say plainly where I would be learning (FMOD, telemetry, and the client's SDKs).",
  ],
  quickFacts: [
    { label: "Stack", value: "Unity 6 · C# · multiplayer · UI" },
    { label: "Role", value: "Full-time, permanently remote" },
    { label: "Start", value: "1 month after offer (notice period)" },
    { label: "Time zone", value: "Egypt · same offset as Helsinki" },
  ],
  answers: [
    {
      title: "Unity game development experience",
      original: "3+ years of experience as a Unity game developer",
      body: [
        "Continuous professional Unity / C# work since December 2023: Senior Unity Engineer at BEDO Innovating Education (Oct 2024 – present), Unity and AR developer for Ivris (freelance, Jun 2024 – Jun 2026), sole Unity VR developer at Tanta University (Dec 2023 – Oct 2024), and a one-week VR booth game for Nescafe Ice Coffee (2025). That is just under three years, and most of it is interactive simulations and apps rather than games; see the note below. The full table with technologies and my own responsibility is further down.",
      ],
    },
    {
      title: "Shipped work",
      original: "Worked on at least one shipped game title",
      body: [
        "Games: the Nescafe Ice Coffee VR surfing game ran with visitors at an event booth (2025), and I was the Unity developer of Atmosphere Protector, a mobile educational game for Android and iOS that has not been released yet.",
        "Shipped commercial software: the training simulations I build in Unity at BEDO are commercial products sold to universities and companies (B2B, through BEDO rather than a public store). Also in users' hands: the Ivris production app (WebGL editor plus Android / iOS AR) and the Tanta University Quest 2 suite (three experiences, sole developer).",
      ],
    },
    {
      title: "Overlap with Helsinki hours",
      original: "Availability for daily working-hours overlap with Helsinki (EET/EEST)",
      body: [
        "Yes. Egypt is one hour ahead of CET, the same offset as Helsinki, so my normal working day overlaps yours completely.",
      ],
    },
    {
      title: "Unity, C#, Unity 6 and URP",
      original: "Strong skills in Unity and C#. Unity 6 and URP are a plus",
      body: [
        "Every project below is Unity / C#, with ScriptableObject architecture and dependency injection in team projects at BEDO. Unity 6 is in production use: the Ivris app was built in Unity 6, and I have been migrating BEDO projects to Unity 6 since mid-2026.",
        "URP: used on the Nescafe VR booth game (2025). My BEDO and Ivris projects use the built-in render pipeline, so most of my production rendering work is outside URP.",
      ],
    },
    {
      title: "Taking a feature to delivery and asking early",
      original: "Able to take a well-defined feature through to delivery, asking questions early when information is missing",
      body: [
        "This is how I already work. Before building a system in Unity, I make a quick HTML prototype with 2D vector graphics where every changing value is shown next to the rule that drives it, so the people who own the design can confirm the behaviour and fill the gaps before Unity time is spent. On a defined game feature I would do the lighter version: list the open questions on day one and agree them with the lead before writing the feature.",
      ],
    },
    {
      title: "Performance and debugging",
      original: "Familiar with performance bottlenecks and ways to resolve them · Strong debugging skills",
      body: [
        "My main targets are Meta Quest 2 standalone and Unity WebGL, both tight on memory and frame time, so I profile on the real build, not only in the editor. I also debugged multiplayer state in the Ivris editor, where several clients must end up in the same room state.",
      ],
    },
    {
      title: "Multiplayer and client-server basics",
      original: "Basic understanding of multiplayer concepts and client-server communication",
      body: [
        "Yes, from production: Photon real-time multiplayer room editing in the Ivris WebGL app, plus PlayFab and a hosted backend connected to the Unity client.",
      ],
    },
    {
      title: "FMOD, the client's SDKs and existing tooling",
      original: "Willingness to learn FMOD, the client's SDKs and the existing tooling",
      body: [
        "Yes. FMOD is not part of the projects in my portfolio, so I would learn it on your project. Working inside a codebase I did not start and its SDKs is normal for me: at Ivris I integrated Photon, PlayFab and AR Foundation into one Unity app, and at BEDO I am carrying existing projects through the Unity 6 migration.",
      ],
    },
    {
      title: "English, reporting and documentation",
      original: "Good communication skills in English, and good reporting and documentation skills",
      body: [
        "Yes. My portfolio, case studies and project documentation are written in English, and I write build and run instructions for the code I hand over.",
      ],
    },
    {
      title: "Salary and start date",
      original: "Full-time · permanently remote",
      body: [
        "Salary expectation: USD 2,500–3,000 per month, open to discussing the full package and the contract form.",
        "I am currently employed with a one-month notice period. When you make an offer I give notice and start one month later; during the notice month I can already work about 15 hours per week on onboarding. After the notice month I work full-time, 40 hours per week.",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on games, years and the stack",
    body: "You ask for 3+ years as a Unity game developer. My professional Unity work started in December 2023, so it is just under three years, and most of it is interactive training simulations and a production app rather than commercial games. My game work is a mobile educational game and a one-week VR booth game, and I have not yet worked on a party game, a cloud-streamed game or phone-as-controller input. FMOD, telemetry events and Unity Editor authoring tools are not part of the projects in my portfolio; my tool-like work is runtime editors (the Ivris room editor and a block-based command editor at BEDO). What I bring: production multiplayer and backend integration, Unity 6, UI-heavy features, and state logic that has to be right every time. I prefer you know this now rather than discover it in the interview.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity training simulations of BEDO engineering trainers: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics and industrial stations, PID control labs, fluid-mechanics labs.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "ScriptableObject architecture", "Dependency injection"],
      responsibility:
        "Simulation logic and equipment states, guided steps, monitoring and measurement UI, live response graphs, a block-based command editor, WebGL builds, and migration of projects to Unity 6. Worked with instructional-design, art and mechatronics teams; the hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "PID labs case study", href: caseStudyUrl("pid-control-virtual-labs-suite") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context:
        "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview. I built the Unity app, not the whole product.",
      tech: ["Unity 6", "C#", "WebGL", "Android", "iOS", "Photon", "PlayFab", "AR Foundation"],
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
        "Everything: interaction flows, scenes, in-world UI, hand-held tools (a working calculator and stopwatch), adapting 3D assets, and headset builds and optimisation.",
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
      label: "Multiplayer + client-server",
      title: "Ivris WebGL room editor",
      image: ivrisApp,
      meta: "Unity 6 · Photon · PlayFab",
      copy:
        "Production Unity app where several users edit the same room in real time, with 3D models loaded at runtime and a PlayFab and hosted-backend layer behind the client.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Casual gameplay",
      title: "Nescafe VR surfing game",
      image: nescafeSurfing,
      meta: "Score loop · timer · collectibles",
      copy:
        "Short-session game with movement, collectibles, a timer and scoring, designed so first-time players at a busy booth understand it in seconds.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "Mobile game + progression",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Android / iOS · upgrades · Arabic UI",
      copy:
        "Children's educational mobile game: airplane movement, pollution collection, an atmosphere-health system, environmental upgrades and localized Arabic instruction screens.",
      links: [
        { label: "Video", href: atmoVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "Runtime editor + state logic",
      title: "MR109 / MR110 industrial training",
      image: youtubeThumbnail("R4gS25C_wGs"),
      meta: "Command editor · process states",
      copy:
        "A block-based editor where students build and validate robot command scripts, and station behaviour driven by ready / running / done / emergency states.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Data-driven UI",
      title: "PID virtual labs",
      image: pidGraph,
      meta: "Live graphs · tuning UI · WebGL",
      copy: "Tuning controls and response graphs that update in real time as students change values across several trainer modules.",
      links: [{ label: "Case study", href: caseStudyUrl("pid-control-virtual-labs-suite") }],
    },
  ],
  requirementGroups: [
    {
      title: "What you will do",
      items: [
        {
          need: "Client features in Unity 6.3 (C#, URP, FMOD) inside an existing codebase and the client's SDKs",
          status: "partial",
          proof: "Unity 6 and C# in production; existing codebases and third-party SDKs (Photon, PlayFab, AR Foundation) at Ivris and BEDO. FMOD would be new; URP see above.",
        },
        {
          need: "Gameplay and UI features: challenge modes, trophy and progression screens, themed content",
          status: "adjacent",
          proof: "Score, timer and collectible loops (Nescafe), upgrades and health systems (Atmosphere Protector), UI-heavy features in every project. No trophy or challenge-mode screens shipped yet.",
        },
        {
          need: "Content authoring tools and telemetry events",
          status: "adjacent",
          proof: "Runtime editors built: the Ivris room editor and a block-based command editor at BEDO. Unity Editor tooling and telemetry are not shown in my portfolio.",
        },
        {
          need: "Integrate audio in FMOD (events and banks) from an audio team",
          status: "commitment",
          proof: "Not used yet. I would learn the project's FMOD setup during onboarding and wire events to gameplay through one audio layer.",
        },
        {
          need: "Fix bugs, support client QA through alpha, regression and release, prepare documentation",
          status: "adjacent",
          proof: "Two years on the Ivris production Unity app; WebGL deliveries at BEDO; build and run documentation for the code I hand over.",
        },
        {
          need: "Estimate own tasks and write technical documentation",
          status: "adjacent",
          proof: "Sole developer of the Tanta University suite, from requirements to headset builds; my HTML prototypes double as a reviewable spec agreed before Unity work.",
        },
      ],
    },
    {
      title: "Requirements",
      items: [
        {
          need: "3+ years as a Unity game developer",
          status: "partial",
          proof: "Continuous professional Unity since Dec 2023, just under three years, mostly simulations and apps. See the note above.",
        },
        {
          need: "At least one shipped game title",
          status: "partial",
          proof: "Shipped commercial Unity products: BEDO training simulations sold to universities and companies (B2B). Games: the Nescafe booth game used by event visitors (2025); Atmosphere Protector is built but not released yet. No consumer game store release yet.",
        },
        {
          need: "Daily overlap with Helsinki (EET/EEST)",
          status: "direct",
          proof: "Egypt is on the same offset as Helsinki; full working-day overlap.",
        },
        {
          need: "Strong Unity and C#; Unity 6 and URP a plus",
          status: "direct",
          proof: "All projects above; Unity 6 at Ivris and in the BEDO migration. URP: see the answer above.",
        },
        {
          need: "Take a defined feature to delivery, asking questions early",
          status: "direct",
          proof: "Prototype-first process: open questions agreed with the design owners before Unity time is spent.",
        },
        {
          need: "Performance bottlenecks and strong debugging",
          status: "direct",
          proof: "Quest 2 standalone and Unity WebGL, both memory- and frame-time-constrained; multiplayer state debugging at Ivris.",
        },
        {
          need: "Basic multiplayer and client-server communication",
          status: "direct",
          proof: "Photon real-time editing, PlayFab and a hosted backend in the Ivris app.",
        },
        {
          need: "Willingness to learn FMOD, the client's SDKs and tooling",
          status: "commitment",
          proof: "Yes; SDK integration is routine for me (Photon, PlayFab, AR Foundation).",
        },
        {
          need: "English, reporting and documentation",
          status: "direct",
          proof: "Portfolio, case studies and build instructions written in English.",
        },
        {
          need: "Flexibility with changing priorities",
          status: "direct",
          proof: "Worked across WebGL, mobile AR and Quest 2 targets, and ran a two-year freelance project (Ivris) alongside my employment.",
        },
      ],
    },
    {
      title: "Desirable pluses",
      items: [
        {
          need: "Multiplayer, party or casual games",
          status: "partial",
          proof: "Production multiplayer in an app (Ivris); casual short-session games (Nescafe, Atmosphere Protector). No party game yet.",
        },
        {
          need: "FMOD or other audio middleware",
          status: "commitment",
          proof: "Not in my portfolio projects; I would learn it on your project.",
        },
        {
          need: "Game tools, analytics and telemetry",
          status: "adjacent",
          proof: "Runtime editors (Ivris, BEDO command editor) and PlayFab integration; no telemetry work shown.",
        },
        {
          need: "TypeScript or React",
          status: "adjacent",
          proof: "The portfolio site linked below is a React + TypeScript app; my production web work is Unity WebGL.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would start on the party game",
    intro:
      "This depends on the codebase and the client's SDKs, which I have not seen, but this is how I would expect to contribute in the first months:",
    steps: [
      {
        title: "Learn the codebase and SDKs before changing them",
        body: "Build and run the game the way the team does, read how phone input reaches Unity through the client's SDK, and take small, reviewable tasks first so my code follows the team's conventions.",
      },
      {
        title: "Treat phone input as network messages",
        body: "Controller input from phones arrives late, out of order or not at all. Gameplay and UI should read it through one input layer that tolerates that, so a dropped phone or a player joining mid-round does not break a challenge.",
      },
      {
        title: "UI for a TV across the room",
        body: "Trophy, progression and challenge screens readable from the sofa, with clear focus on what each player must do, checked on the streamed output rather than only in the editor.",
      },
      {
        title: "Content as data",
        body: "Challenge modes and themed content defined in data assets (ScriptableObjects or the project's own format), so authoring tools and new themes add content without new code. Telemetry events named and agreed with the team before they are added, then fired from the same places.",
      },
      {
        title: "Agree the rules before building them",
        body: "Where a challenge mode's rules or scoring need sign-off, I would sketch them in a quick HTML prototype with each value next to the rule that drives it, so the lead and designers can confirm the behaviour before Unity time is spent.",
      },
    ],
    note: "Streaming and phone-controller specifics (latency budget, SDK input model, target devices) come from the client's SDK documentation and your senior developers.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Offer and notice period",
      body: "One-month notice period at my current job after an offer; about 15 hours per week available for onboarding (repository, SDKs, FMOD basics) if that helps.",
    },
    {
      when: "First 2 weeks",
      title: "Onboarding",
      body: "Build and run the game, read the codebase and client SDKs, first small fixes and code reviews.",
    },
    {
      when: "Months 1–3",
      title: "Features to delivery",
      body: "Gameplay and UI features end to end (challenge modes, progression screens, themed content), FMOD integration and telemetry events, with documentation and support for client QA.",
    },
  ],
  questions: [
    "Is this role open to someone based in Egypt, and how would the contract work (employee through a group entity, or contractor)?",
    "Does phone input reach Unity through the client's SDK as events, and how is latency handled in gameplay design?",
    "Where is the game in its schedule: which milestone would I join before alpha, regression and release?",
    "Are the content authoring tools Unity Editor tools for designers, or web tools (is that where TypeScript / React comes in)?",
    "Which analytics backend receives the telemetry events, and who defines the event list?",
    "Who would I work with most closely, and how do code review and task estimation work in the team?",
  ],
  closing: {
    title: "Next step",
    body: "Reply to my application and I will gladly walk you through the demos in a short call.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity developer (gameplay, UI, multiplayer)",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

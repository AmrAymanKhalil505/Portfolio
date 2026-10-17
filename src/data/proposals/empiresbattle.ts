import ivrisRoomEditor from "../../assets/thumbnails/projects/Ivris/Screenshot2025-04-01at8.36.11PM.thumb.webp";
import mr109RobotArm from "../../assets/thumbnails/projects/MR109 Compact/MR109 Robot Arm.thumb.webp";
import ev117Particles from "../../assets/thumbnails/projects/EduLab/EV117 Particles.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: Habr Career vacancy "Unity-разработчик (WebGL)" — Empire's Battle, part-time, remote,
// posted 28 Sep 2026 (https://career.habr.com/vacancies/1000166387). The post is in Russian;
// `original` fields quote it. Answers follow the "Как откликнуться" list in its order.

const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const atmosphereVideo = "https://youtu.be/eWFaHaYUy44";
const workResume = "https://amraymankhalil505.github.io/Portfolio/Amr_Khalil_CV_work.pdf";

const proposal: Proposal = {
  slug: "empiresbattle",
  client: "Empire's Battle",
  projectName: "Empire's Battle Combat Arena (Unity WebGL · Telegram Mini App)",
  dateLabel: "October 2026",
  greeting: "Здравствуйте,",
  eyebrow: "Application · Empire's Battle · Unity developer (WebGL), part-time",
  headline: "Unity WebGL developer for Empire's Battle Combat Arena",
  lead: [
    "Your client is a Unity WebGL build living inside a web wrapper, talking to it over a JavaScript bridge, with a REST backend and synchronised multiplayer state. That is the shape of the Ivris app I built from June 2024 to June 2026: a production Unity WebGL room editor with Photon multiplayer editing, 3D content loaded at runtime and PlayFab / backend integration.",
    "Since October 2024 I am a Senior Unity Engineer at BEDO, shipping Unity WebGL simulations built on state machines and a ScriptableObject + dependency-injection architecture. Below I answer each point from your post, map every requirement honestly — including the ones I have not done yet — and show how I would start on your codebase.",
  ],
  quickFacts: [
    { label: "Rate", value: "[[TODO: salary/rate expectation]]" },
    { label: "Format", value: "Remote · part-time" },
    { label: "Main stack", value: "Unity · C# · WebGL" },
    { label: "Time zone", value: "Egypt · 1 h ahead of CET" },
  ],
  answers: [
    {
      title: "Resume",
      original: "Пришлите резюме",
      body: [
        `Contact-free resume: ${workResume}. The experience table below lists every role with dates, technologies and my own responsibility.`,
      ],
    },
    {
      title: "Portfolio link",
      original: "ссылку на GitHub/GitLab/портфолио",
      body: [
        `Portfolio with case studies and demo videos: ${portfolioUrl}/. Client and employer code is private, so the case studies describe the systems and show them running rather than linking source.`,
      ],
    },
    {
      title: "My strongest Unity project, and why",
      original: "какой проект на Unity вы считаете своей самой сильной работой и почему",
      body: [
        "For your role, the Ivris interior-design app (Jun 2024 – Jun 2026). It was a two-year production Unity codebase shipped to WebGL, Android and iOS from one project, and it combined the problems your post lists: a browser build that has to stay within WebGL memory and load-time limits, 3D content loaded at runtime instead of baked into the build, Photon multiplayer where several users edit the same room and every client must end up in the same state, and a Unity client connected to PlayFab and a hosted backend.",
        "It is my strongest work because it was not a single-scene demo: it had to keep working as content, platforms and features grew around it — the same situation as adding heroes, bosses and events to a 42k-line codebase.",
      ],
    },
    {
      title: "Bonus: multiplayer and WebGL material",
      original: "Бонусом — любые материалы по проектам с пошаговой тактикой, мультиплеером или WebGL-сборкой",
      body: [
        "Multiplayer and WebGL: the Ivris WebGL editor (video and case study below). WebGL at scale: the BEDO training simulations, all delivered as Unity WebGL builds. I have no turn-based tactics project to show — see the note below.",
      ],
    },
    {
      title: "Availability",
      body: [
        "Remote, part-time, from Egypt (1 hour ahead of CET). [[TODO: weekly hours for this part-time role alongside BEDO (e.g. ~15 h/week), or give the one-month notice and offer 30 h/week]]",
      ],
    },
    {
      title: "Language",
      body: ["I write this application in English. I do not speak Russian, so I would need English-only communication with the team."],
    },
  ],
  candidNote: {
    title: "A transparent note on what I have not done yet",
    body: "Some of your requirements go beyond my experience, and I prefer you see that here rather than in the interview. Commercial Unity: continuously since December 2023 — just under the 3 years you ask for. Deterministic multiplayer: my multiplayer work is Photon state synchronisation in the Ivris editor, not lockstep / mirror-action turn sync, fixed-point maths or a deterministic RNG; I understand the principles but have not shipped them. I have not built a Telegram Mini App, a turn-based tactics game, or HMAC / nonce anti-cheat, and UniTask, Odin Inspector, Best HTTP, GitLab CI and Unity IAP / Ads are not part of the projects in my portfolio. What I bring is production Unity WebGL with a web-side integration, multiplayer and backend from Ivris, and almost three years of state-machine-driven Unity systems at BEDO and Tanta University.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity training simulations of BEDO engineering trainers: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics and industrial stations, PID control labs, fluid-mechanics labs.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "ScriptableObject architecture", "Dependency injection", "uGUI"],
      responsibility:
        "Simulation logic and equipment state machines, guided steps, monitoring UI, WebGL builds; migrating projects to Unity 6. Worked with instructional-design, art and mechatronics teams; the hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "WebGL", "Photon", "PlayFab", "Runtime 3D loading", "AR Foundation"],
      responsibility:
        "I built the Unity application (not the whole Ivris product): runtime loading of furniture and room models, Photon multiplayer room editing in WebGL, AR preview, PlayFab and backend integration.",
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
      tech: ["Unity", "C#", "Meta Quest 2", "Auto Hand", "Android"],
      responsibility:
        "Everything, as the only developer: interaction flows, scenes, tool interactions, asset adaptation, performance on a standalone device, builds.",
      links: [{ label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") }],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth game (freelance)",
      context: "Short-session branded game for an event booth: surf sand and water tracks, collect cans, beat the timer.",
      tech: ["Unity", "C#", "VR"],
      responsibility: "Unity developer: gameplay loop, timed scoring, collectibles, onboarding for first-time players.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Closest match: WebGL + multiplayer + backend",
      title: "Ivris WebGL room editor",
      image: ivrisRoomEditor,
      meta: "WebGL · Photon · PlayFab · runtime 3D loading",
      copy:
        "Production Unity WebGL app where several users edit the same room in real time, with 3D models loaded at runtime and a Unity client connected to PlayFab and a hosted backend.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "State machines",
      title: "MR109 / MR110 industrial training",
      image: mr109RobotArm,
      meta: "WebGL · process states · events",
      copy:
        "Stations whose motors, pneumatics, conveyors and sensors are driven by ready / running / done / emergency state logic — the same discipline as nested game and battle states.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "WebGL in production",
      title: "Engineering education virtual labs",
      image: ev117Particles,
      meta: "WebGL · particles · live data UI",
      copy:
        "Browser-delivered Unity labs with particle visualisations, live readings and guided steps, built to run within WebGL limits.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Game loop",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Mobile game · upgrades · health system",
      copy:
        "Educational mobile game: player controller, collection targets, an atmosphere-health system and upgrade mechanics.",
      links: [
        { label: "Video", href: atmosphereVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "Game loop",
      title: "Nescafe VR booth game",
      image: nescafeSurfing,
      meta: "Timer · score · collectibles",
      copy: "Short-session game with collectibles, a timer and scoring, designed so first-time players understand it in seconds.",
      links: [{ label: "Video", href: nescafeVideo }],
    },
  ],
  requirementGroups: [
    {
      title: "Tasks in the role",
      items: [
        {
          need: "New heroes, active / passive skills, bosses, dungeon types, seasonal events in the existing SkillRegistry and effects system",
          status: "adjacent",
          proof: "Content-driven systems configured through ScriptableObjects at BEDO; upgrade and health mechanics in Atmosphere Protector. Not a hero / skill system yet.",
        },
        {
          need: "PvP turn states: mirror-action turn sync, reconnects, anti-cheat (P2PSecurityManager, P2PConsensusManager)",
          status: "partial",
          proof: "Photon multiplayer editing with shared state in the Ivris WebGL editor. No deterministic turn sync or anti-cheat shipped — see the note above.",
        },
        {
          need: "Backend and Telegram WebApp integration: authorisation, Game API, battle lifecycle events",
          status: "partial",
          proof: "Unity client connected to PlayFab and a hosted backend at Ivris. Telegram WebApp: not done before.",
        },
        {
          need: "WebGL build optimisation: size, load time, memory, GC, Addressables in the browser",
          status: "direct",
          proof: "WebGL is my main production target at BEDO and Ivris, including runtime-loaded 3D content at Ivris. Addressables specifically: not shown in my portfolio projects.",
        },
        {
          need: "Refactoring large classes (Hero.cs ~2000 lines, battle states) into services and controllers",
          status: "adjacent",
          proof: "ScriptableObject + dependency-injection architecture introduced at BEDO to keep simulations scalable.",
        },
        {
          need: "UI features: battle HUD, hero selection, potion / relic inventory, localisation",
          status: "adjacent",
          proof: "uGUI monitoring dashboards and instruction overlays at BEDO; Arabic UI in Atmosphere Protector.",
        },
        {
          need: "Build pipeline and CI: GitLab CI, WebGL auto-deploy",
          status: "partial",
          proof: "I produce and ship WebGL builds; GitLab CI pipelines are not part of my portfolio projects.",
        },
        {
          need: "Code review of colleagues' MRs and keeping project conventions",
          status: "commitment",
          proof: "Will review and follow your conventions; Git team work at BEDO and on the shared Ivris codebase.",
        },
      ],
    },
    {
      title: "Requirements",
      items: [
        {
          need: "Middle+ / Senior, 3+ years of commercial Unity",
          status: "partial",
          proof: "Commercial Unity continuously since Dec 2023; Senior Unity Engineer at BEDO since Oct 2024.",
        },
        {
          need: "1+ year on one production project with a 30k+ line C# codebase",
          status: "direct",
          proof: "At BEDO since Oct 2024 on a shared team codebase of roughly 80,000 lines of in-house C# (about 390 files, not counting third-party packages). Two years on the Ivris production app (Jun 2024 – Jun 2026).",
        },
        {
          need: "WebGL build and optimisation, DllImport(\"__Internal\"), Application.ExternalEval (critical)",
          status: "direct",
          proof: "Production WebGL builds at BEDO and Ivris; JavaScript .jslib plugins for the WebGL side are part of my toolset.",
        },
        {
          need: "Deterministic multiplayer: lockstep / mirror-action, fixed-point or deterministic random",
          status: "partial",
          proof: "Real-time Photon multiplayer at Ivris; deterministic turn sync not shipped yet.",
        },
        {
          need: "Strong C#: delegates and events, generics, LINQ, async/await, GC and allocations",
          status: "direct",
          proof: "C# daily since 2023; allocation discipline is a requirement on WebGL and standalone Quest 2 alike.",
        },
        {
          need: "Unity API: Addressables, coroutines, UniTask, ScriptableObject configs, Animator, Particle System, 2D sprites",
          status: "partial",
          proof: "ScriptableObject configs, coroutines and particle visualisations in production; UniTask and Addressables not in my portfolio projects.",
        },
        {
          need: "Architecture: nested state machines, events, Service Locator / DI, MVC / MVP for UI, factories",
          status: "direct",
          proof: "State-machine-driven stations and labs with ScriptableObject + DI architecture at BEDO.",
        },
        {
          need: "Networking: REST (Best HTTP / UnityWebRequest), Newtonsoft.Json, errors and reconnects, JWT / Bearer",
          status: "adjacent",
          proof: "Unity client talking to PlayFab and a hosted backend at Ivris. Best HTTP not used.",
        },
        {
          need: "Profiling: Unity Profiler, Memory Profiler, Frame Debugger, WebGL debugging in Chrome DevTools",
          status: "adjacent",
          proof: "Performance work on WebGL builds (BEDO, Ivris) and standalone Quest 2 (Tanta), both memory- and performance-constrained targets.",
        },
        {
          need: "Git and GitLab team work: branches, MR / code review, merge conflicts",
          status: "adjacent",
          proof: "Git team development at BEDO and Ivris; GitLab with Git Flow would be new tooling, not a new practice.",
        },
      ],
    },
    {
      title: "Nice to have",
      items: [
        { need: "Odin Inspector", status: "commitment", proof: "Not used in my portfolio projects; will follow the project's existing attributes." },
        {
          need: "Decomposing God Object classes into services, controllers and states",
          status: "adjacent",
          proof: "Architecture work for scalability at BEDO; my plan for Hero.cs is below.",
        },
        {
          need: "Cryptography and anti-cheat: HMAC, nonce, deterministic RNG",
          status: "commitment",
          proof: "Not done in production.",
        },
        {
          need: "Turn-based tactics (XCOM-like, Heroes-like, chess engines)",
          status: "commitment",
          proof: "No tactics game shipped; game-loop work in Atmosphere Protector and the Nescafe booth game.",
        },
        {
          need: "Basic JavaScript / TypeScript for the React ↔ Unity bridge",
          status: "adjacent",
          proof: "JavaScript for WebGL .jslib plugins; TypeScript / React not in my portfolio projects.",
        },
        { need: "IAP, ads, analytics", status: "commitment", proof: "Not part of my portfolio projects." },
        {
          need: "Telegram Mini Apps / WebApp SDK, or a Unity client inside a web wrapper",
          status: "adjacent",
          proof: "Unity WebGL clients embedded in web pages (BEDO, Ivris); Telegram Mini Apps not done yet.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would start on Empire's Battle",
    intro:
      "A large codebase with monolithic parts and live PvP rewards care more than speed in the first weeks. This is how I would work, to be adjusted to your conventions:",
    steps: [
      {
        title: "Map the two state hierarchies first",
        body: "Before changing anything, draw the global game state machine and the battle state machine (including PvpPlayerTurnState / PvpOpponentTurnState) with their transitions and the events that drive them, and agree that map with the team. It becomes the reference for every feature and refactor after it.",
      },
      {
        title: "Spec a mechanic before coding it",
        body: "At BEDO I build the logic of a system as a quick prototype and agree it with the team before Unity time is spent. For a new hero, skill or boss, the equivalent is a short written spec of the rules, triggers and effect order, checked against existing skills in SkillRegistry, so behaviour is agreed before it reaches PvP.",
      },
      {
        title: "Protect PvP determinism",
        body: "Anything that runs inside the turn simulation stays free of frame timing, unordered collections and non-seeded randomness, and gets a replay-style check: the same actions in the same order must produce the same state on both clients. Desync bugs are the most expensive ones in your game.",
      },
      {
        title: "Measure WebGL before optimising",
        body: "Baseline the build size, load time and memory in the Telegram environment, then profile GC allocations and Addressables loading in the browser. Fix the largest measured cost first and keep the numbers in the MR, so every optimisation is verified.",
      },
      {
        title: "Refactor Hero.cs in small, reviewable steps",
        body: "Extract one responsibility at a time (stats, skills, effects, movement) behind interfaces, keeping behaviour identical and each step in its own MR, rather than one big rewrite of a class that PvP depends on.",
      },
    ],
    note: "The exact order depends on your backlog; the technical interview and test task are a good place to align on it.",
  },
  timeline: [
    {
      when: "Before start",
      title: "Interview and test task",
      body: "Technical interview and, if you choose it, the grid feature with two turn states or the code-review task.",
    },
    {
      when: "Start",
      title: "Availability",
      body: "Part-time start as agreed after the interview; weekly hours as in the availability answer above.",
    },
    {
      when: "Weeks 1–2",
      title: "Onboarding",
      body: "Repository, GitLab flow and build; state-machine map of the game and battle states; WebGL baseline measurements; first small fixes through MRs.",
    },
    {
      when: "Weeks 3–6",
      title: "First features",
      body: "A first hero, skill or event through the existing systems, plus the first measured WebGL improvement.",
    },
    {
      when: "Ongoing",
      title: "Features, PvP and tech debt",
      body: "Content and UI features, PvP and Telegram integration work, step-by-step refactoring, code review.",
    },
  ],
  questions: [
    "Is the mirror-action PvP fully client-side between peers, or does a server validate and relay turns?",
    "Which WebGL problem hurts most today — download size, first-load time, or memory crashes on particular phones?",
    "Is there an automated way to replay a recorded PvP match, or are desyncs found from player reports?",
    "Which part of the backlog would the part-time developer own first: content, PvP, WebGL optimisation or refactoring?",
    "How many hours per week, and which overlap hours with the team, do you expect?",
    "Is team communication and code review in Russian, or is English workable?",
  ],
  closing: {
    title: "Next step",
    body: "Reply through Habr Career and I will gladly walk you through the Ivris WebGL editor and talk through your PvP and WebGL questions in the technical interview.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity / WebGL developer",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

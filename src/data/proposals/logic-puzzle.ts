import cimBlockEditor from "../../assets/thumbnails/projects/cim/Inter02.thumb.webp";
import cimBlockValidation from "../../assets/thumbnails/projects/cim/Inter03.thumb.webp";
import nescafeMenu from "../../assets/thumbnails/projects/Nescafe/Sand Board Main Menu.thumb.webp";
import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: Freelancer.com post "Xây dựng game logic mini" (project 40771758, posted ~2026-10-16,
// client in Ho Chi Minh City, Vietnam; hourly, min $50 USD/hour; no engine named). A duplicate
// listing by the same client exists (game-logic-mini-edt). The post is in Vietnamese; `original`
// lines quote it as written. Every answer below maps to an item the post asks for.

const atmosphereVideo = "https://youtu.be/eWFaHaYUy44";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";

const proposal: Proposal = {
  slug: "logic-puzzle",
  client: "Logic puzzle game (Freelancer.com)",
  projectName: "Mini logic puzzle game for browser and mobile",
  dateLabel: "October 2026",
  greeting: "Xin chào,",
  eyebrow: "Application · Freelancer.com · Logic puzzle game (browser + mobile)",
  headline: "A light logic puzzle game with 20+ levels, built so you can add the next ones yourself",
  lead: [
    "You want a short, easy-to-learn logic puzzle game with at least 20 levels of rising difficulty, each level unlocking the next, small points or badges that bring players back, a minimal UI, and a small, fast build that runs in the browser and on common phones. You also want clean code, clear documentation and a simple way to add new levels later.",
    "I am a Unity C# engineer (professionally since December 2023). The closest logic work I have built is a block-based command editor at BEDO where students put command blocks in order and the system checks the sequence and explains what is wrong before it runs. I ship Unity WebGL builds in production and have built Unity apps for Android and iOS. I have not shipped a puzzle game before, and I say below exactly how I would cover that.",
  ],
  quickFacts: [
    { label: "Rate", value: "[[TODO: rate]]" },
    { label: "Start", value: "Part-time on award, more hours 1 month later" },
    { label: "Hours", value: "~15 h/week first month, then 30 h/week" },
    { label: "You receive", value: "Source · setup guide · add-a-level guide" },
  ],
  answers: [
    {
      title: "Examples of similar logic or puzzle work",
      original: "Nếu bạn từng thực hiện game logic hoặc puzzle tương tự, vui lòng chia sẻ ví dụ khi trao đổi.",
      body: [
        "Logic and rule checking: in BEDO's CIM station simulation I built an educational command editor. Students add, order and edit command blocks for a robot or CNC station, the system validates the sequence, and it reports line-specific problems (missing condition, missing parameter, invalid value) before the sequence runs. That is the core of a logic puzzle: a clear rule set, player moves, and instant feedback on whether the solution works.",
        "Game loops: Atmosphere Protector, a Unity mobile educational game for children (Android / iOS, not released yet), with movement, collection, a health system and upgrades; and the Nescafe Ice Coffee booth game (2025, one week), a short-session game with a timer and score that first-time players understand in seconds.",
        "I have not shipped a dedicated puzzle game. Screenshots, videos and case studies of the projects above are linked in the evidence section.",
      ],
    },
    {
      title: "Hourly rate",
      original: "min $50 USD / hour",
      body: ["[[TODO: rate]]. Estimated total for the first 20 levels: [[TODO: estimated total hours]], confirmed after we agree the puzzle types in the first week."],
    },
    {
      title: "Handover: source code, setup and adding new levels",
      original: "Bàn giao mã nguồn, hướng dẫn cài đặt và cách tự thêm cấp độ mới trong tương lai.",
      body: [
        "You receive the full project source, a setup guide (how to open, build and publish the browser and mobile versions), and a short guide for adding levels.",
        "Each level is a small data file (grid size, pieces, rules, target moves), so a new level means adding one file and testing it in the game, not changing code. A small solver script checks that every level can be solved and records its shortest solution, which also sets the star score.",
      ],
    },
    {
      title: "Clean code, clear documentation, room to grow",
      original: "Tôi ưu tiên mã sạch, tài liệu rõ ràng và khả năng mở rộng.",
      body: [
        "Each puzzle type is its own module behind a shared interface (load level, apply move, check solved), so a new puzzle type can be added without touching the others. Progress, scoring, badges and sound are separate systems. At BEDO I work in a shared Unity codebase of about 80,000 lines with ScriptableObject-based architecture and dependency injection, and I mentor and review an intern's code, so readable structure is a daily habit.",
      ],
    },
    {
      title: "Availability",
      body: [
        "I am currently employed with a one-month notice period. During that month I can work part-time, about 15 hours per week, which covers the puzzle prototype and the game foundation. After that: 30 hours per week, up to 40 in busy weeks. Time zone: Egypt (UTC+2 / +3), so our working days overlap by several hours.",
      ],
    },
    {
      title: "After delivery",
      body: [
        "During an agreed warranty period I fix defects in code I wrote at no extra charge. New levels, features and scope changes are billed separately. I would like us to agree in writing what counts as a defect versus a change, and the response times, before we start.",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on fit",
    body: "Three things to know up front. First, I have not shipped a puzzle game. My logic work is rule checking and step validation in training simulations, and my game work is a mobile educational game (not released) and a one-week booth game. To reduce the risk, you play and approve the puzzle mechanics in a quick prototype before I build them in Unity. Second, I would build this in Unity (C#, as listed in your skills), which gives one codebase for the browser and phones. The trade-off is a larger first download in the browser than a plain HTML5 game. I would measure it in the first build, and if the smallest possible web load matters most, I would rather discuss that with you before we start. Third, I do not speak Vietnamese. I work in English, and any Vietnamese text in the game would come from you, kept in one text table so it is easy to edit.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity / WebGL training simulations of BEDO engineering trainers: MR109 / MR110 industrial and CIM stations (including an educational command editor with validation), EV117 fuel-cell lab, PID control and fluid labs.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "ScriptableObject architecture", "Dependency injection", "DOTween"],
      responsibility:
        "My Unity implementation of simulation logic and states, guided steps that unlock in order, rule and command validation, feedback UI and animation, WebGL builds. Team work with instructional-design and art colleagues; the hardware and products belong to BEDO.",
      links: [
        { label: "CIM station case study", href: caseStudyUrl("cim-station-behavior-simulation") },
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "WebGL", "Android", "iOS", "AR Foundation", "Photon", "PlayFab"],
      responsibility:
        "Built the Unity app (not the whole product): runtime loading of 3D models, multiplayer room editing in WebGL, AR preview on phones, PlayFab integration.",
      links: [
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
        { label: "Video", href: ivrisVideo },
      ],
    },
    {
      period: "Dec 2023 – Oct 2024",
      title: "Tanta University — Unity VR developer (sole developer)",
      context: "Meta Quest 2 training suite: onboarding tutorial, 360° viewer, interactive viscosity lab.",
      tech: ["Unity", "C#", "Meta Quest 2", "Auto Hand", "Android"],
      responsibility:
        "Everything: step-by-step interaction flows, scenes, tool interactions, onboarding for first-time users, device builds.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth game (freelance)",
      context: "Short-session branded game for an event booth: collect cans and beat the timer.",
      tech: ["Unity", "C#", "VR"],
      responsibility: "Unity developer: gameplay loop, timer and score, visitor-friendly onboarding.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Closest logic match",
      title: "Educational command editor",
      image: cimBlockEditor,
      meta: "Ordered blocks · rules · parameters",
      copy:
        "Students build a robot or CNC command sequence block by block instead of writing raw code: the same add, order and test loop a logic puzzle uses.",
      links: [{ label: "Case study", href: caseStudyUrl("cim-station-behavior-simulation") }],
    },
    {
      label: "Instant feedback on a wrong solution",
      title: "Command validation",
      image: cimBlockValidation,
      meta: "Line-specific feedback",
      copy:
        "The sequence is checked before it runs, and the player sees which step failed and why: the kind of clear, friendly feedback a puzzle needs when a move is not allowed.",
      links: [{ label: "Case study", href: caseStudyUrl("cim-station-behavior-simulation") }],
    },
    {
      label: "Mobile game",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Unity · Android / iOS · not released yet",
      copy:
        "Educational mobile game for children with instruction screens, a collection loop, a health system and upgrades: a simple loop that rewards the player for coming back.",
      links: [
        { label: "Video", href: atmosphereVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "Easy to understand in seconds",
      title: "Nescafe booth game",
      image: nescafeMenu,
      meta: "Short sessions · timer · score",
      copy: "A short-session game with a minimal menu, a timer and a score, designed so first-time players start without explanation.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "Browser and phones",
      title: "Ivris app",
      image: ivrisApp,
      meta: "WebGL · Android · iOS",
      copy: "Production Unity app delivered as a WebGL editor in the browser and as an AR app on phones.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Goals",
      items: [
        {
          need: "Short, easy-to-understand gameplay with enough depth to feel satisfying when solved",
          status: "adjacent",
          proof: "Short-session games for first-time players (Nescafe) and children (Atmosphere Protector). Puzzle depth comes from the level ramp, which you approve in the prototype.",
        },
        {
          need: "Small size and smooth performance in the browser and on common phones",
          status: "direct",
          proof: "Unity WebGL in production (BEDO labs, Ivris); Unity Android / iOS builds (Ivris, Atmosphere Protector). A 2D puzzle with light assets is a small build; I report its size and load time with each build.",
        },
        {
          need: "Minimal, friendly UI focused on the puzzle, not heavy effects",
          status: "direct",
          proof: "UI in every project I build: instruction screens, feedback panels, score and timer HUDs; small UI animation with DOTween.",
        },
      ],
    },
    {
      title: "Main tasks",
      items: [
        {
          need: "1. Puzzle ideas and a level set of at least 20 levels with rising difficulty",
          status: "commitment",
          proof: "New for me as a shipped product. 3–4 puzzle types shortlisted with you, levels as data, every level solver-checked and ordered by shortest solution length.",
        },
        {
          need: "Logic rules and checking whether the player's solution is correct",
          status: "direct",
          proof: "Command-sequence validation with line-specific feedback (BEDO CIM station); procedure and state checks across BEDO labs.",
        },
        {
          need: "2. Level flow: completing the current level unlocks the next",
          status: "adjacent",
          proof: "Guided scenarios at BEDO where the next step unlocks only when the current one is done; for the game: a level map with saved progress.",
        },
        {
          need: "3. Points or small badges that bring players back",
          status: "adjacent",
          proof: "Score and timer (Nescafe), health and upgrades (Atmosphere Protector). Here: 1–3 stars per level by moves, plus a few badges, saved on the device.",
        },
        {
          need: "4. Small sounds and effects when a puzzle is solved (optional)",
          status: "adjacent",
          proof: "Feedback animation with DOTween in almost every BEDO project; short sounds with a mute button, from assets you provide or free-licensed ones.",
        },
        {
          need: "5. Source code, setup guide and how to add new levels",
          status: "commitment",
          proof: "Full source, a setup and build guide, and an add-a-level guide using the level data files.",
        },
      ],
    },
    {
      title: "Skills listed in the post",
      items: [
        {
          need: "C# programming, game programming",
          status: "direct",
          proof: "Professional Unity C# work since December 2023; Unity 6 in production.",
        },
        {
          need: "Clean code, clear documentation, extensibility",
          status: "direct",
          proof: "ScriptableObject architecture and dependency injection in a shared ~80,000-line codebase at BEDO; reviewing an intern's code since August 2026.",
        },
        {
          need: "Mobile app development",
          status: "direct",
          proof: "Unity Android / iOS builds: Ivris AR app, Atmosphere Protector.",
        },
        {
          need: "Game design",
          status: "partial",
          proof: "Game loops for two small games; puzzle level design would be new, which is why the mechanics are prototyped and approved first.",
        },
        {
          need: "C / C++ programming",
          status: "adjacent",
          proof: "I work in C#. No production C or C++ work; I ask below whether a specific language is required.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would build the game",
    intro:
      "To be confirmed with you in the first call, but this is the order I would propose so you see and play something early:",
    steps: [
      {
        title: "Choose 3–4 puzzle types together",
        body: "For example light switching (tap a tile, it and its neighbours flip), sliding blocks, connecting a path through a grid, or ordering simple commands to guide a piece to the goal. Mixing types keeps 20+ levels fresh; each type gets a clear one-screen tutorial level.",
      },
      {
        title: "Prototype the rules before building in Unity",
        body: "Before any Unity work I build the puzzles as a small HTML prototype with 2D vector graphics. You play the mechanics and the first levels in the browser, every rule and move counter is shown next to the board, and we agree what is fun and how hard the ramp should be before Unity time is spent.",
      },
      {
        title: "Levels as data, checked by a solver",
        body: "Each level is a small data file. A solver script confirms every level can be solved, records the shortest solution (used for stars) and helps order the levels from easy to hard.",
      },
      {
        title: "Game shell: level map, unlocks, stars and badges",
        body: "A minimal level-select screen, next level unlocked on completion, progress saved on the device, stars by number of moves, a few badges (for example, finish a puzzle type, or solve five levels in the minimum moves), optional sound with a mute button.",
      },
      {
        title: "Browser and phone builds from one project",
        body: "Unity 2D with light assets; a WebGL build for the browser and an Android build (iOS as well if you need it), with build size and load time reported every time.",
      },
    ],
    note: "Final puzzle types, art style, text language and target platforms come from you in the first call.",
  },
  timeline: [
    {
      when: "Notice month (~15 h/week)",
      title: "Prototype and foundation",
      body: "Kick-off call, puzzle-type shortlist, HTML prototype of the mechanics and first levels for you to play, then the Unity project with the level data format.",
    },
    {
      when: "Next phase",
      title: "Game shell",
      body: "Level map, unlocking, saved progress, stars and badges; first playable browser and phone builds for your feedback.",
    },
    {
      when: "Next phase",
      title: "20+ levels and polish",
      body: "Full level set with the agreed difficulty ramp, solver-checked; small effects and optional sound; size and performance checks.",
    },
    {
      when: "Handover",
      title: "Source and guides",
      body: "Full source, setup and build guide, add-a-level guide. Total estimate: [[TODO: estimated total hours]].",
    },
    {
      when: "After delivery",
      title: "Warranty",
      body: "Defects in my code fixed at no charge; new levels and features billed separately, with the boundaries agreed up front.",
    },
  ],
  questions: [
    "Is working in English fine for our communication? Which language should the game text be in (Vietnamese, English or both), and will you provide the Vietnamese text?",
    "Which platforms matter most: browser only, or also an Android / iOS app in the stores? And does the smallest possible web download matter more to you than one codebase for web and phones?",
    "The project lists C, C++ and C#. Do you need a specific language or engine, or is Unity with C# fine?",
    "Who are the players (age, casual or learning-focused), and do you have reference puzzle games you like?",
    "Should points and badges stay on the player's device, or do you need accounts or an online leaderboard later?",
    "Will you provide art and sound, or should I use simple free-licensed assets? Is there a target date or hour budget for the first 20 levels?",
  ],
  closing: {
    title: "Next step",
    body: "Reply on Freelancer.com and I will gladly walk you through the examples and the first-week plan in a short call.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity C# developer",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

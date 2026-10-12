import nescafeJungle from "../../assets/thumbnails/projects/Nescafe/Nescafe Water Jungle.thumb.webp";
import mr109RobotArm from "../../assets/thumbnails/projects/MR109 Compact/MR109 Robot Arm.thumb.webp";
import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: Freelancer.com post "Unity Survival Game Systems & Environment" (project 40762715,
// posted 2026-10-11, client in Chandler, US, budget $15-25/hr). Every answer below maps to an item
// the post asks for: a Unity project where I owned similar AI or environment work, and how I would
// approach the town pipeline first.

const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const atmosphereVideo = "https://youtu.be/eWFaHaYUy44";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";

const proposal: Proposal = {
  slug: "survival-unity",
  client: "Survival game project (Freelancer.com)",
  projectName: "3D fantasy survival game: playable slice",
  dateLabel: "October 2026",
  greeting: "Hello,",
  eyebrow: "Application · Freelancer.com · Unity C# gameplay systems",
  headline: "Unity C# systems developer for your survival game's playable slice",
  lead: [
    "Your post asks for a playable slice built on clean, data-driven systems: harvesting, inventory, crafting stations, enemy and NPC AI, a handcrafted town, wilderness, weather and a day-night cycle, with balance values in ScriptableObjects and a playable build every week.",
    "I am a Unity C# engineer who builds state-driven systems that have to behave correctly every session: gameplay loops with scoring and progression, equipment that moves through ready / running / done / fault states, runtime-loaded 3D content, and production WebGL and headset builds. I want to be upfront: most of my shipped work is simulations and short games, not a survival game, and I say exactly where the gaps are below.",
  ],
  quickFacts: [
    { label: "Rate", value: "[[TODO: rate for Freelancer.com (budget $15-25/hr)]]" },
    { label: "Start", value: "Part-time on award, full engagement 1 month later" },
    { label: "Hours", value: "15 h/week first month, then 30 h/week" },
    { label: "Builds", value: "Playable build every week" },
  ],
  answers: [
    {
      title: "A Unity project where I owned similar AI or environment work",
      original: "Show me a Unity project where you owned similar AI or environment work",
      body: [
        "Environment: for the Nescafe VR surfing booth (2025, one week, freelance) I built the gameplay loop and created and assembled several themed play environments (sand and water routes, beach and jungle variations) with collectibles, a timer and scoring. It is a short game, not an open-world survival map.",
        "AI-style behavior: I have not shipped NavMesh enemies or behavior trees in a game. The closest is the MR109 / MR110 industrial training stations at BEDO, where every machine is driven by explicit state logic (idle, ready, running, done, emergency stop) reacting to sensors and to the player's actions, which is the same pattern as patrol / chase / attack / return states. See the note below.",
      ],
    },
    {
      title: "How I would approach the town pipeline first",
      original: "Outline how you'd approach the town pipeline first",
      body: [
        "1. Reference board and blockout: from your reference images, block out the town with primitive shapes at real scale (street widths, doors, sight lines, where the crafting stations and NPC routines live). You approve the layout in a playable build before any art is placed.",
        "2. Modular kit: agree on a grid and a small set of modular pieces (walls, roofs, props) so buildings snap together and stay editable; prefab variants instead of one-off meshes.",
        "3. Gameplay hooks in the blockout: NavMesh baked on the blockout, NPC waypoints, harvest nodes and crafting-station slots placed as data, so AI and systems are tested on the real layout early.",
        "4. Dress and light: replace blockout pieces with the final kit, then lighting, and only then weather and day-night, profiled in each weekly build.",
      ],
    },
    {
      title: "Rate and bid",
      original: "Budget: $15-25 USD per hour",
      body: ["[[TODO: rate for Freelancer.com (budget $15-25/hr)]]"],
    },
    {
      title: "Availability and start date",
      body: [
        "I am currently employed with a one-month notice period. During that month I can work part-time, about 15 hours per week (around 60 hours), which is enough to set up the project structure, the ScriptableObject data layer and the town blockout.",
        "After the notice month: 30 hours per week (around 120-130 hours per month), up to 40 hours per week in busy phases. Time zone: Egypt (1 hour ahead of CET); happy to agree a regular Discord sync time.",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on game AI, combat and environment art",
    body: "My Unity work since December 2023 is mostly training simulations of real equipment, a VR training suite and short games. I have not shipped third-person melee combat, NavMesh enemy AI or behavior trees, terrain sculpting or a weather system in a production game, and I am a developer, not an environment artist. What I bring is solid C# system design: state-driven logic, data-driven configuration, UI, runtime 3D content and reliable builds. For the AI I would use a small, readable state machine on Unity's NavMesh (or a behavior-tree package you choose) and prove it in the first weekly builds. If you need someone with a shipped survival game or strong terrain art, I would rather you know now.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity training simulations of BEDO engineering trainers: MR109 / MR110 industrial stations, EV117 fuel-cell lab, PID control labs, fluid-mechanics labs.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "ScriptableObject architecture", "Dependency injection"],
      responsibility:
        "Simulation logic and equipment states, guided steps, monitoring UI, visual explanations, WebGL builds, in a team with art and instructional-design colleagues. The hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "WebGL", "AR Foundation", "Photon", "PlayFab"],
      responsibility:
        "Built the Unity app (not the whole product): runtime loading of 3D furniture and room models, Photon multiplayer room editing in WebGL, AR preview, PlayFab integration.",
      links: [
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
        { label: "Video", href: ivrisVideo },
      ],
    },
    {
      period: "Dec 2023 – Oct 2024",
      title: "Tanta University — Unity VR developer (sole developer)",
      context: "Meta Quest 2 training suite: onboarding tutorial, 360° surgical viewer, interactive viscosity lab.",
      tech: ["Unity", "C#", "Meta Quest 2", "Auto Hand", "Android"],
      responsibility:
        "Everything: interaction flows, scenes, grab and tool interactions, adapting 3D assets, headset builds.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth (freelance)",
      context: "Short-session branded VR game: surf sand and water routes, collect cans, beat the timer.",
      tech: ["Unity", "C#", "VR"],
      responsibility:
        "Unity developer: gameplay loop, collectibles, timer and score UI, themed play environments.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Environments and gameplay loop",
      title: "Nescafe VR surfing booth",
      image: nescafeJungle,
      meta: "Themed routes · collectibles · timer",
      copy:
        "Created and assembled several themed play environments (sand, beach, jungle water routes) around a collect-and-score loop that first-time players understand in seconds.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "Resource and upgrade loop",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Mobile game · collection · upgrades",
      copy:
        "Educational mobile game: airplane movement, pollution collection, an atmosphere-health system and environmental upgrades — a small collect → resource → upgrade loop.",
      links: [
        { label: "Video", href: atmosphereVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "State-driven behavior",
      title: "MR109 / MR110 industrial stations",
      image: mr109RobotArm,
      meta: "States · sensors · reactions",
      copy:
        "Machines driven by ready / running / done / emergency logic that reacts to sensors and the user — the same backbone as enemy patrol / chase / attack states and NPC routines.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Runtime content and builds",
      title: "Ivris room editor",
      image: ivrisApp,
      meta: "Runtime 3D loading · WebGL · Photon",
      copy:
        "Production Unity app that loads 3D models at runtime and places them in rooms — the same placement and catalog thinking a crafting / building system needs.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Gameplay systems",
      items: [
        {
          need: "Resource harvesting, inventory and crafting stations",
          status: "adjacent",
          proof: "Collection and upgrade loops (Atmosphere Protector, Nescafe), runtime item catalogs (Ivris). A full inventory / crafting system would be new work, built data-first.",
        },
        {
          need: "Third-person combat",
          status: "commitment",
          proof: "Not in my portfolio. I would build a simple, tunable hit / damage / cooldown model with all values in ScriptableObjects.",
        },
        {
          need: "Enemy AI (patrol, chase, cooperate) and civilian NPC routines on NavMesh or a behavior tree",
          status: "partial",
          proof: "State-driven behavior in production (MR109 / MR110 stations); NavMesh and behavior-tree game AI not shipped before — see the note above.",
        },
        {
          need: "Supporting UI (inventory, crafting, health)",
          status: "direct",
          proof: "Game HUDs with score and timer (Nescafe), monitoring and instruction UI across BEDO labs, editor UI at Ivris.",
        },
      ],
    },
    {
      title: "Environment",
      items: [
        {
          need: "Handcrafted town from reference images",
          status: "partial",
          proof: "Assembled themed play environments (Nescafe) and scene layouts for labs; I would block out and assemble with a modular kit, not model the art myself.",
        },
        {
          need: "Sculpted wilderness terrain, lighting and weather",
          status: "commitment",
          proof: "Not in my portfolio. Unity Terrain, lighting and a weather controller would be built and profiled in the weekly builds.",
        },
        {
          need: "Day-night cycle",
          status: "commitment",
          proof: "Time-of-day controller driving sun, ambient light and NPC schedules from one data asset.",
        },
      ],
    },
    {
      title: "Stack and process",
      items: [
        {
          need: "Unity and C#",
          status: "direct",
          proof: "Professional Unity C# work continuously since December 2023; Unity 6 in production.",
        },
        {
          need: "Balance values exposed in ScriptableObjects",
          status: "adjacent",
          proof: "ScriptableObject-based architecture at BEDO; for your game every item, recipe, enemy and weather value lives in a data asset.",
        },
        {
          need: "Git",
          status: "direct",
          proof: "Team development at BEDO; shared codebase at Ivris.",
        },
        {
          need: "Weekly playable builds, scene loads with no console errors",
          status: "commitment",
          proof: "A build every week with a short changelog; zero console errors on load is part of each build's checklist.",
        },
        {
          need: "Discord for discussion",
          status: "commitment",
          proof: "Yes.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would build the playable slice",
    intro:
      "To be validated against your existing prototype and art, but this is the order I would propose so every weekly build is playable:",
    steps: [
      {
        title: "Data layer first",
        body: "ScriptableObjects for items, resources, recipes, crafting stations, enemy stats and weather / time settings, so balancing never needs code changes.",
      },
      {
        title: "Town blockout and NavMesh",
        body: "Greybox town and wilderness edges at real scale, NavMesh baked, NPC waypoints and harvest nodes placed — the layout you approve before art goes in.",
      },
      {
        title: "Prototype the systems before full Unity polish",
        body: "Before building in Unity I usually prototype the logic as a small HTML page with 2D vector graphics: for example the crafting recipes, enemy state transitions and day-night schedule, with every changing value shown next to the rule that drives it. You can check the behavior and balance quickly, and confirm nothing is hard-coded, before Unity time is spent.",
      },
      {
        title: "Core loop, then AI, then combat",
        body: "Harvest → inventory → craft the three items first; then the two enemy types (patrol / chase / attack / cooperate) and civilian routines; then third-person combat tuned against them.",
      },
      {
        title: "Dress, light and weather last",
        body: "Final town kit, terrain, lighting, weather and day-night, profiled in every build; the deliverable scene loads with no console errors.",
      },
    ],
    note: "Exact scope per week depends on your existing prototype, the art you provide and the behavior-tree tool (if any) you prefer.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time start (~15 h/week)",
      body: "Repository and prototype review, ScriptableObject data layer, town blockout with NavMesh, first weekly builds.",
    },
    {
      when: "Following weeks",
      title: "Systems",
      body: "Harvesting, inventory, three craftable items at crafting stations, supporting UI.",
    },
    {
      when: "Next",
      title: "AI and combat",
      body: "Two enemy types with working AI, civilian NPC routines, third-person combat.",
    },
    {
      when: "Final phase",
      title: "Environment and polish",
      body: "Final town dressing, wilderness, lighting, weather, day-night cycle; error-free standalone scene.",
    },
  ],
  questions: [
    "What state is the current prototype in — which systems exist, and which Unity render pipeline does it use?",
    "Will you provide the town and wilderness art (modular kit, terrain textures), or should I source store assets?",
    "Do you have a preferred behavior-tree tool, or is a plain state machine on NavMesh acceptable for the slice?",
    "Third-person combat: melee, ranged or both, and is there a reference game for the feel?",
    "How many hours per week do you expect, and is there a target date for the playable slice?",
    "Target platform for the slice — Windows standalone only, or mobile as well?",
  ],
  closing: {
    title: "Next step",
    body: "Reply on Freelancer.com and I will gladly walk you through the demos and the first-week plan in a short Discord call.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity C# / simulation developer",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

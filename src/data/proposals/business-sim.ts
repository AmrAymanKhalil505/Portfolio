import mr109Processing from "../../assets/thumbnails/projects/MR109 Compact/MR109 Processing.thumb.webp";
import pidGraph from "../../assets/thumbnails/projects/PID/graph photo.thumb.webp";
import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import nescafeMenu from "../../assets/thumbnails/projects/Nescafe/Sand Board Main Menu.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: Freelancer.com post "Cross-Platform Business Simulation Game" (project 40772803, posted
// ~2026-10-17, client in India, budget INR 75,000-150,000 fixed, paid on delivery; open for bidding
// on 2026-10-20). The answers follow the post's own "Please Include in Your Proposal" list, in order.

const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const cimVideo = "https://youtu.be/pkXqNAiVa8s";
const atmosphereVideo = "https://youtu.be/eWFaHaYUy44";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";

const proposal: Proposal = {
  slug: "business-sim",
  client: "3D factory tycoon game (Freelancer.com)",
  projectName: "3D factory / tycoon simulation game for Android and iOS",
  dateLabel: "October 2026",
  greeting: "Hello,",
  eyebrow: "Application · Freelancer.com · Unity 3D mobile tycoon game",
  headline: "A Unity developer who builds factory machines and their logic for a living",
  lead: [
    "Your game is a 3D factory and business simulation: production stations, machine upgrades, automation, resource management, offline earnings and progressive levels, monetized with AdMob and optional purchases, on Android and iOS. Since October 2024 I have built Unity simulations of real production lines as a Senior Unity Engineer at BEDO: loading, transporting, processing, assembly, sorting and storage stations with conveyors, pneumatic cylinders and a robot arm, every machine driven by its own state logic. These are commercial training products sold to universities and companies.",
    "A tycoon game is the same backbone with an economy on top: machines that produce at a rate, upgrades that change that rate, and a balance that must feel right for hours. Below I answer each point your post asks for, in order, and I am clear about what I would need help with, mainly premium 3D art.",
  ],
  quickFacts: [
    { label: "Engine", value: "Unity (C#), Android + iOS" },
    { label: "Price", value: "[[TODO: project price (budget INR 75,000-150,000 fixed)]]" },
    { label: "Team", value: "Solo Unity developer" },
    { label: "Start", value: "Part-time now, full engagement 1 month later" },
  ],
  answers: [
    {
      title: "Links to similar work",
      original: "Links to similar 3D mobile games you have developed",
      body: [
        "Closest in systems: the MR109 / MR110 production-line simulations at BEDO (multi-station factory workflows, machine motion and process states). Closest in format: Atmosphere Protector, a Unity mobile game for Android and iOS with a collect, resource and upgrade loop, and the Nescafe VR booth game with a timed score loop. Videos and case studies for each are in the evidence section below.",
        "To be clear: none of these is a published 3D tycoon game in the app stores. Atmosphere Protector is finished as a game but not released. See the note below.",
      ],
    },
    {
      title: "Recommended engine and technology stack",
      original: "Recommended game engine and technology stack",
      body: [
        "Unity 6 with C#, which I use in production. I would recommend the Universal Render Pipeline for mid-range phones (I have used it on one shipped project, the Nescafe booth game; my other projects use the built-in pipeline), Google Mobile Ads for AdMob rewarded and interstitial ads, Unity IAP for optional purchases, a local save file with versioning, and Unity Analytics or Firebase depending on what you prefer.",
        "Game data (machines, production rates, upgrade costs, levels, missions, daily rewards) lives in ScriptableObjects, so new machines and levels are added as data, not new code. That is how I structure the simulations at BEDO.",
      ],
    },
    {
      title: "Estimated total cost",
      original: "Estimated total development cost",
      body: ["[[TODO: project price (budget INR 75,000-150,000 fixed) and which scope it covers]]"],
    },
    {
      title: "Estimated timeline",
      original: "Estimated completion timeline",
      body: [
        "[[TODO: delivery estimate in weeks for the agreed scope]]",
        "I am currently employed with a one-month notice period. During that month I can work about 15 hours per week, which is enough for the economy prototype and a playable greybox of the core loop. After it, 30 hours per week, up to 40 in busy phases. The phase plan is in the timeline below.",
      ],
    },
    {
      title: "Team size and relevant experience",
      original: "Team size and relevant experience",
      body: [
        "I work alone: one Unity developer. Professional Unity work continuously since December 2023: BEDO (Oct 2024 - present, Senior Unity Engineer, industrial and engineering training simulations), Ivris (Jun 2024 - Jun 2026, freelance, Unity app with Android / iOS AR and PlayFab), Tanta University (Dec 2023 - Oct 2024, sole developer of a Meta Quest 2 training suite). The largest codebase I work in is about 80,000 lines of C#.",
        "For art: I am a developer, not a 3D artist. I use Blender to fix and adjust models and did a six-month modelling and texturing specialization, but premium environments and machines for a whole game would come from licensed asset packs that I adapt, or from a 3D artist you or I bring in. The candid note below explains this.",
      ],
    },
    {
      title: "What the quotation includes",
      original: "Details of what is included in your quotation",
      body: [
        "Full Unity project and C# source, Android (APK / AAB) and iOS builds, AdMob and in-app purchase integration, analytics events, save / load, testing on real devices, a short technical document on how to add machines and levels, and help preparing the Google Play and App Store submissions.",
        "Art, music and sound effects are licensed assets with usage rights, bought on your accounts or listed with their licenses so the rights stay with you. The exact list of machines, levels and features per milestone would be agreed in writing before we start: [[TODO: project price (budget INR 75,000-150,000 fixed) and which scope it covers]].",
      ],
    },
    {
      title: "Post-launch support and maintenance",
      original: "Post-launch support and maintenance terms",
      body: [
        "During an agreed warranty period I fix defects in code I wrote at no extra charge. New features, new levels and scope changes are billed separately. I would like us to agree in writing what counts as a defect versus a change, and the response times, before we start. I am also open to the long-term collaboration you mention for future simulation games.",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on published games and art",
    body: "Two things you should know before choosing. First, I have not published a 3D tycoon, idle or hypercasual game in the app stores. My shipped commercial software is BEDO's Unity simulations, which are sold to universities and companies, not consumer games; Atmosphere Protector is a finished Unity mobile game but it is not released. AdMob and in-app purchases are not in my portfolio, so those are items I will deliver and test, not past work. Second, your post asks one developer or team to make everything, including premium 3D models and animations. I build the game, the systems, the machine animations and the UI; for a premium look I would adapt licensed asset packs or work with a 3D artist. For the budget in your post, a complete premium game with full original art is not realistic from anyone working carefully, so I would rather agree an honest first milestone with you than promise everything.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity / WebGL simulations of BEDO engineering trainers: MR109 / MR110 production-line and mechatronics stations, PID control labs, EV117 fuel-cell lab, fluid-mechanics labs. Commercial products sold to universities and companies.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "ScriptableObject architecture", "Dependency injection", "DOTween"],
      responsibility:
        "Simulation logic and machine states, conveyors, actuators and robot-arm motion, equation-driven live values and graphs, guided steps, UI, builds. Team work with art and instructional-design colleagues; the hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "PID labs case study", href: caseStudyUrl("pid-control-virtual-labs-suite") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "Android", "iOS", "AR Foundation", "Photon", "PlayFab"],
      responsibility:
        "Built the Unity app (not the whole product): runtime loading of 3D models, Photon multiplayer editing in WebGL, Android / iOS AR preview, PlayFab integration.",
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
      responsibility: "Everything: interaction flows, scenes, adapting 3D assets, standalone headset builds.",
      links: [{ label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") }],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth game (freelance)",
      context: "Short-session branded game for an event booth: surf routes, collect cans, beat the timer.",
      tech: ["Unity", "C#", "URP", "VR"],
      responsibility: "Unity developer: gameplay loop, collectibles, timer, score and menu UI.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Closest match: production stations",
      title: "MR109 production-line simulation",
      image: mr109Processing,
      meta: "Stations · conveyors · machine states",
      copy:
        "Loading, transporting, measuring, buffering, processing, assembly, sorting and storage stations, each a machine with its own motion and ready / running / done / emergency states, chained into one workflow. My Unity implementation of BEDO's trainer.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Machine motion and automation",
      title: "MR110 CIM station run",
      image: youtubeThumbnail("pkXqNAiVa8s"),
      meta: "Robot arm · laser · drilling · storage",
      copy:
        "A full system run across stations: pneumatics, a 6-joint robot arm, laser marking and drilling, driven by PLC-style logic. The kind of satisfying, readable machine movement a factory game needs.",
      links: [
        { label: "Video", href: cimVideo },
        { label: "Case study", href: caseStudyUrl("cim-station-behavior-simulation") },
      ],
    },
    {
      label: "Equation-driven values",
      title: "PID virtual labs",
      image: pidGraph,
      meta: "Live values · graphs · save / load",
      copy:
        "Live process values computed from the control model react to the user's input and are plotted as graphs, with start, reset, save and load controls. A tycoon economy (production rates, upgrade costs, offline earnings) is built the same way.",
      links: [{ label: "Case study", href: caseStudyUrl("pid-control-virtual-labs-suite") }],
    },
    {
      label: "Mobile game loop (not released)",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Unity · Android / iOS · upgrades",
      copy:
        "Educational mobile game: fly, collect pollution, protect an atmosphere-health value and unlock environmental upgrades. A small collect, resource and upgrade loop on phones.",
      links: [
        { label: "Video", href: atmosphereVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "Game UI and score loop",
      title: "Nescafe booth game",
      image: nescafeMenu,
      meta: "URP · menu · timer and score",
      copy: "Menu, timer, collectibles and scoring designed so first-time players understand the game in seconds.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "Android and iOS builds",
      title: "Ivris app",
      image: ivrisApp,
      meta: "Unity 6 · mobile AR · PlayFab",
      copy: "Production Unity app with Android / iOS AR preview, 3D models loaded at runtime and a PlayFab backend.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Complete game development",
      items: [
        {
          need: "Interactive production and management systems",
          status: "adjacent",
          proof: "Multi-station production workflows in the MR109 / MR110 simulations; the management and economy layer of a game would be new work, built on the same state logic.",
        },
        {
          need: "Realistic machine movements and visual effects",
          status: "direct",
          proof: "Conveyors, pneumatic cylinders, grippers, a 6-joint robot arm, laser and drilling stations at BEDO; DOTween on almost every project.",
        },
        {
          need: "High-quality 3D environments, machines, objects and animations",
          status: "partial",
          proof: "I animate and integrate machines and fix models in Blender, but I am not a 3D artist; premium art would come from licensed packs or an artist (see the note).",
        },
        {
          need: "Professional UI / UX with attractive menus",
          status: "adjacent",
          proof: "Game menus and HUDs (Nescafe, Atmosphere Protector), monitoring and instruction UI across BEDO labs; a polished visual style would need UI art or a UI kit.",
        },
        {
          need: "Full development from concept to release",
          status: "partial",
          proof: "Sole developer of the Tanta University suite from requirements to headset builds; no consumer store release of my own yet.",
        },
      ],
    },
    {
      title: "Gameplay features",
      items: [
        {
          need: "Factory simulation, multiple machines, production stations and upgrades",
          status: "adjacent",
          proof: "Machines and stations: production work at BEDO. Upgrades: Atmosphere Protector's environmental upgrades (not released).",
        },
        {
          need: "Progressive levels, unlockable equipment and environments",
          status: "commitment",
          proof: "Levels and unlocks defined as data assets, with the difficulty curve tuned in the economy prototype first.",
        },
        {
          need: "In-game currency, rewards and offline earnings",
          status: "commitment",
          proof: "Built from explicit formulas (production rate × time, capped and saved with a timestamp), so every number can be checked and balanced.",
        },
        {
          need: "Achievements, daily rewards and missions",
          status: "commitment",
          proof: "One data-driven goal system with a shared progress tracker, so new missions are added without code changes.",
        },
        {
          need: "Smooth camera movements and touch controls",
          status: "adjacent",
          proof: "Mobile touch input in Atmosphere Protector and the Ivris AR app; pan / zoom / tap camera for a factory floor would be built and tested on device.",
        },
        {
          need: "Sound effects and background music",
          status: "commitment",
          proof: "Licensed audio integrated with a mixer and volume settings.",
        },
      ],
    },
    {
      title: "Monetization",
      items: [
        {
          need: "Google AdMob: rewarded videos and interstitials with balanced frequency",
          status: "commitment",
          proof: "Not in my portfolio yet. Integrated with test ad units first; interstitial frequency and rewarded placements controlled from one config.",
        },
        {
          need: "Optional in-app purchases",
          status: "commitment",
          proof: "Not in my portfolio yet. Unity IAP with store test accounts before release.",
        },
      ],
    },
    {
      title: "Technical requirements",
      items: [
        {
          need: "Android and iOS",
          status: "direct",
          proof: "Android / iOS builds for the Ivris AR app; Atmosphere Protector built for Android and iOS.",
        },
        {
          need: "Unity or Godot",
          status: "direct",
          proof: "Unity C# professionally since December 2023, Unity 6 in production.",
        },
        {
          need: "Optimized performance on mid-range phones, fast loading, stable frame rate",
          status: "adjacent",
          proof: "Shipped to constrained targets (Unity WebGL, standalone Quest 2); for your game I would profile on a mid-range Android phone in every milestone.",
        },
        {
          need: "Proper save / load system",
          status: "adjacent",
          proof: "Save and load of lab state in BEDO labs, PlayFab user data at Ivris; a versioned local save for the game.",
        },
        {
          need: "Scalable, maintainable architecture",
          status: "direct",
          proof: "ScriptableObject architecture and dependency injection in BEDO's ~80,000-line lab codebase.",
        },
        {
          need: "Original or properly licensed assets",
          status: "commitment",
          proof: "Every asset listed with its source and license in the handover document.",
        },
      ],
    },
    {
      title: "Deliverables",
      items: [
        {
          need: "Full editable source and project files, release builds (APK / AAB, iOS)",
          status: "commitment",
          proof: "Delivered at each milestone through a shared Git repository.",
        },
        {
          need: "AdMob and analytics integration, testing and bug fixing",
          status: "commitment",
          proof: "Tested on real devices with a short test checklist per milestone.",
        },
        {
          need: "Google Play and App Store submission assistance",
          status: "commitment",
          proof: "Release builds, store checklist and help with the submission under your developer accounts.",
        },
        {
          need: "Documentation and post-launch bug support",
          status: "commitment",
          proof: "How-to-add-content document; defects in my code fixed during the warranty period.",
        },
      ],
    },
    {
      title: "Qualifications",
      items: [
        {
          need: "Previously published 3D simulation, idle tycoon, factory or hypercasual mobile games",
          status: "partial",
          proof: "Shipped commercial 3D simulations of production equipment (BEDO, B2B), not consumer store games; see the note above.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would build your factory tycoon",
    intro:
      "To be agreed with you against your game design and references, but this is the order I would propose so the economy feels right before money is spent on art:",
    steps: [
      {
        title: "Balance the economy before building it in Unity",
        body: "First I build the economy as a small HTML prototype with simple 2D graphics: machines, production rates, upgrade costs, unlock thresholds and offline earnings. Every changing value is driven by its formula, shown next to it, so you can play it in the browser, see exactly why a number changes, and confirm nothing is hard-coded. We agree the progression curve here, before any Unity time is spent.",
      },
      {
        title: "Machines as data",
        body: "Each machine is one data asset: input, output, cycle time, upgrade levels and their effect. The Unity code reads the same formulas the prototype used, so the balance carries over exactly and new machines are added without new code.",
      },
      {
        title: "Playable greybox on a phone",
        body: "The core loop with simple shapes on a real mid-range Android phone: build, produce, sell, upgrade, offline earnings, save / load, touch camera. You judge the feel early.",
      },
      {
        title: "Art, animation and juice",
        body: "Licensed or artist-made models swapped in, machine animations, effects, UI skin, sound and music. Profiled on the phone after each art pass.",
      },
      {
        title: "Monetization, analytics and release",
        body: "AdMob rewarded and interstitial placements and optional IAP, analytics events for the progression funnel, iOS build, device testing and store submission help.",
      },
    ],
    note: "Scope per milestone, art source and the target devices are agreed in writing before work starts.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time start (~15 h/week)",
      body: "HTML economy prototype reviewed with you, game data structure, first playable greybox of the core loop on Android.",
    },
    {
      when: "After the notice month",
      title: "Core game (30 h/week)",
      body: "Machines, upgrades, levels, unlocks, currency, offline earnings, missions and daily rewards, save / load, camera and touch.",
    },
    {
      when: "Next",
      title: "Art and polish",
      body: "Licensed or artist-made art integrated, machine animations, effects, UI, audio, performance passes on mid-range devices.",
    },
    {
      when: "Final phase",
      title: "Monetization and release",
      body: "AdMob, IAP, analytics, Android and iOS release builds, testing, store submission help. Total duration: [[TODO: delivery estimate in weeks for the agreed scope]].",
    },
    {
      when: "After launch",
      title: "Warranty",
      body: "Defects in my code fixed at no charge during the agreed period; new content billed separately.",
    },
  ],
  questions: [
    "Do you have a game design document or two or three reference titles, and which theme should the factory have?",
    "How many machines, production stations and levels should the first release include?",
    "Do you already have 3D art, or a budget for licensed asset packs or a 3D artist on top of development?",
    "Should the first milestone be Android only, with iOS after, and do you have Google Play and Apple developer accounts?",
    "Would you consider milestone payments instead of one payment on delivery, given the size of the project?",
    "Which analytics do you want (Firebase, Unity Analytics or another), and are there any markets the game must be localized for?",
  ],
  closing: {
    title: "Next step",
    body: "Reply on Freelancer.com and I will gladly walk you through the factory simulations in a short call and sketch a first milestone that fits your budget.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity C# / simulation developer",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

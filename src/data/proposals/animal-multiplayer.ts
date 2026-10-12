import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import mr109RobotArm from "../../assets/thumbnails/projects/MR109 Compact/MR109 Robot Arm.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: Freelancer.com project "Multiplayer Animal-Themed Game Development" (unnamed client,
// posted ~2026-10-06, fixed INR 75,000-150,000, paid on delivery). Answers follow the eight items
// the post asks applicants to include, in its order. Full mechanics are shared only with the shortlist.

const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const atmoVideo = "https://youtu.be/eWFaHaYUy44";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";

const proposal: Proposal = {
  slug: "animal-multiplayer",
  client: "Multiplayer animal game (Freelancer.com)",
  projectName: "Multiplayer animal racing / board game: prototype to production (Android + iOS)",
  dateLabel: "October 2026",
  greeting: "Hello,",
  eyebrow: "Application · Freelancer.com · Unity multiplayer mobile game",
  headline: "Taking your multiplayer animal game from prototype to a production mobile build",
  lead: [
    "Your game needs real-time multiplayer and a PlayFab-style backend on top of an existing Unity prototype. That is the stack I worked in on Ivris: in the Unity app I built Photon real-time multiplayer room editing and the PlayFab integration, and shipped Android / iOS builds of the same Unity codebase.",
    "Since December 2023 I have worked professionally in Unity and C#, including a mobile Android / iOS game loop, short-session arcade gameplay and simulations with strict state logic. Below I answer each of the eight points from your post, show the closest work with my own role, and say clearly where your scope goes beyond what I have shipped.",
  ],
  quickFacts: [
    { label: "Engine", value: "Unity 6 · C#" },
    { label: "Multiplayer / backend", value: "Photon · PlayFab (production)" },
    { label: "Price", value: "[[TODO: fixed price / milestones]]" },
    { label: "Time zone", value: "Egypt · 1 h ahead of CET" },
  ],
  answers: [
    {
      title: "Years of Unity experience",
      original: "Years of Unity experience",
      body: [
        "Almost three years of continuous professional Unity / C# work since December 2023: Senior Unity Engineer at BEDO (Oct 2024 – present), Unity and AR developer for Ivris (freelance, Jun 2024 – Jun 2026), and sole Unity developer of a Meta Quest 2 suite at Tanta University (Dec 2023 – Oct 2024). Unity 6 in production (Ivris, and the BEDO migration since mid-2026).",
      ],
    },
    {
      title: "Multiplayer frameworks used",
      original: "Multiplayer frameworks used",
      body: [
        "Photon, in production: real-time multiplayer room editing in the Ivris Unity WebGL app, where several users change the same room and see each other's changes. PlayFab in the same Unity app for accounts and backend data.",
        "I have not used Colyseus or Unity Netcode in production. I would choose between Photon PUN / Fusion and the alternatives after seeing what the prototype already uses, since keeping the existing networking is usually cheaper than replacing it.",
      ],
    },
    {
      title: "Examples of 3D games developed",
      original: "Examples of 3D games developed",
      body: [
        "Nescafe Ice Coffee VR surfing booth (2025): a 3D arcade game where the player surfs sand and water tracks, collects cans and races a timer. Atmosphere Protector: a Unity mobile game (Android / iOS) with player movement, collectibles, a health system and upgrades. Videos and case studies are linked below.",
      ],
    },
    {
      title: "Examples of games with 3D characters",
      original: "Examples of games with 3D characters",
      body: [
        "Honest answer: I do not yet have a shipped game with rigged animal characters driven by Animator controllers. My character-side work is player controllers (the surfer in the Nescafe game, the airplane in Atmosphere Protector) and runtime-loaded 3D models in Ivris. Rigging, Animator setup and Mixamo-style retargeting are part of the work I would deliver here, and I am happy to prove them in your practical assignment.",
      ],
    },
    {
      title: "Android / iOS development experience",
      original: "Android/iOS development experience",
      body: [
        "Android and iOS builds of the Ivris Unity app (AR furniture preview with AR Foundation), the Atmosphere Protector mobile game for Android / iOS, and Android-based Meta Quest 2 builds at Tanta University. Mobile and WebGL are both memory- and performance-limited targets, so optimisation has been part of every project.",
      ],
    },
    {
      title: "Links to previous work and videos",
      original: "Links to previous work, videos, or published games",
      body: [
        "Each project below links to a video and a case study on my portfolio, with what I built versus the wider team. Full portfolio: amraymankhalil505.github.io/Portfolio/work.",
      ],
    },
    {
      title: "Estimated development timeline",
      original: "Estimated development timeline",
      body: [
        "I can give a firm estimate after the private scope discussion and a look at the prototype. Based on the summary in the post: [[TODO: estimated weeks to production build, after scope call]].",
        "I am currently employed with a one-month notice period. During that month I can already work about 15 hours per week; after it, 30 hours per week, up to 40 in busy phases.",
      ],
    },
    {
      title: "Expected fixed project cost",
      original: "Expected fixed project cost",
      body: [
        "[[TODO: fixed price / milestones]]. Because the full mechanics are shared only with the shortlist, I would confirm the price after the scope call, and I would prefer it split into milestones (for example multiplayer core, characters and bots, polish and store-ready builds) rather than one payment on final delivery.",
      ],
    },
  ],
  candidNote: {
    title: "Where your scope goes beyond what I have shipped",
    body: "I have not yet published a game of my own to Google Play or the App Store, I have not built AI bots for a racing or board game, I have not used PostgreSQL as a game backend, and I am not a 3D animator: I integrate and set up characters, I do not model or animate them. What I do bring is production Photon multiplayer and PlayFab in a Unity app, Android / iOS Unity builds, mobile gameplay loops and careful state logic. The scope in the post (characters, multiplayer, bots, UI, VFX, optimisation and two store builds) is also large for the posted budget, so I would rather agree the exact feature list and milestones before we start than discover it later.",
  },
  experience: [
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: Unity WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "Photon", "PlayFab", "WebGL", "AR Foundation", "Android", "iOS"],
      responsibility:
        "I built the Unity app, not the whole product: runtime loading of 3D models, Photon multiplayer room editing in WebGL, PlayFab integration in the app, AR preview. The product, brand and backend services belong to Ivris.",
      links: [
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
        { label: "Video", href: ivrisVideo },
      ],
    },
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity / WebGL training simulations of BEDO engineering trainers (fuel-cell, mechatronics, PID and fluid labs).",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "ScriptableObject architecture", "Git"],
      responsibility:
        "Simulation and state logic, guided steps, UI, visual effects explaining hidden processes, builds and optimisation, in a team codebase. The hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
      ],
    },
    {
      period: "Dec 2023 – Oct 2024",
      title: "Tanta University — Unity VR developer (sole developer)",
      context: "Meta Quest 2 training suite: onboarding tutorial, 360° surgical-room viewer, interactive viscosity lab.",
      tech: ["Unity", "C#", "Meta Quest 2", "Android", "Auto Hand"],
      responsibility: "Everything in Unity: interaction flows, scenes, physics-based grab and tool interactions, Android headset builds.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth game (freelance)",
      context: "Short-session branded 3D arcade game: surf sand and water tracks, collect cans, beat the timer.",
      tech: ["Unity", "C#", "VR"],
      responsibility: "Unity developer: player movement on the tracks, collectibles, timed scoring and onboarding.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Closest technical match",
      title: "Ivris: Photon multiplayer + PlayFab",
      image: ivrisApp,
      meta: "Photon · PlayFab · Android / iOS",
      copy:
        "My Unity implementation of real-time multiplayer room editing with Photon and the PlayFab integration in a production app, with Android / iOS builds from the same codebase.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Mobile game",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Unity · Android / iOS · game loop",
      copy:
        "Mobile game with player movement, collectible targets, a health system, upgrades and localised instruction screens.",
      links: [
        { label: "Video", href: atmoVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "Racing-style arcade game",
      title: "Nescafe VR surfing booth",
      image: nescafeSurfing,
      meta: "3D tracks · collectibles · timer",
      copy: "3D arcade game where the player moves along sand and water tracks, collects cans and races a timer.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "State logic and rules",
      title: "MR109 / MR110 industrial training",
      image: mr109RobotArm,
      meta: "Turn / state machines · feedback",
      copy:
        "Stations driven by ready / running / done / emergency logic: the same disciplined state handling a turn-based board game and its rules need.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Scope of work",
      items: [
        {
          need: "Continue from the existing Unity prototype",
          status: "adjacent",
          proof: "Joined and extended existing team codebases at BEDO and Ivris; I would start with a code review of the prototype.",
        },
        {
          need: "Real-time multiplayer",
          status: "adjacent",
          proof: "Photon real-time multiplayer in production (Ivris room editing); racing / board sync is a different game, but the same rooms, ownership and state-sync problems.",
        },
        {
          need: "Backend: PlayFab or PostgreSQL",
          status: "partial",
          proof: "PlayFab integrated in the Ivris Unity app. No PostgreSQL game backend.",
        },
        {
          need: "3D animal character integration, rigging, Animator setup",
          status: "commitment",
          proof: "Not shipped before with rigged characters; I will set up imported / licensed characters with Animator controllers and can prove it in the practical assignment.",
        },
        {
          need: "Character movement, controllers and physics",
          status: "adjacent",
          proof: "Player movement in the Nescafe surfing game and Atmosphere Protector; physics-based interactions at Tanta.",
        },
        {
          need: "Computer-controlled players (bots)",
          status: "commitment",
          proof: "No shipped game AI yet; bots would be built on the same rules / state logic as human players, so they can also fill empty multiplayer seats.",
        },
        {
          need: "UI (TextMeshPro), camera, sound and VFX",
          status: "direct",
          proof: "Game and simulation UI, monitoring screens and visual effects across BEDO, Atmosphere Protector and Nescafe.",
        },
        {
          need: "Mobile optimisation and Android / iOS builds",
          status: "partial",
          proof: "Android / iOS Unity builds (Ivris, Atmosphere Protector) and Quest 2 Android builds; I have not handled a store release of my own.",
        },
      ],
    },
    {
      title: "Required skills",
      items: [
        { need: "Unity 3D and C#", status: "direct", proof: "Every project above; Unity 6 in production." },
        { need: "Git / GitHub", status: "direct", proof: "Team development at BEDO; shared codebase at Ivris." },
        {
          need: "Multiplayer development",
          status: "adjacent",
          proof: "Photon in production; Colyseus and Unity Netcode not used yet.",
        },
        {
          need: "Character and Animator work",
          status: "partial",
          proof: "Player controllers yes; rigged-character Animator pipelines not yet shipped — see the note above.",
        },
      ],
    },
    {
      title: "Nice to have",
      items: [
        { need: "Published Android / iOS games", status: "partial", proof: "Mobile Unity builds yes; no store release of my own." },
        { need: "Firebase, AdMob / AppLovin", status: "commitment", proof: "Not shown in my portfolio projects; SDK integration as a scoped milestone if needed." },
        { need: "REST APIs", status: "adjacent", proof: "Backend-connected app workflows in the Ivris Unity app." },
        { need: "Mixamo, Asset Store, basic Blender", status: "partial", proof: "Adapted 3D assets for Unity scenes (Tanta, Ivris runtime models); no Mixamo or Blender pipeline shipped." },
        {
          need: "Multiplayer racing / board / casual games",
          status: "adjacent",
          proof: "Casual arcade games (Nescafe, Atmosphere Protector) and multiplayer in Ivris, not yet combined in one game.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would take the prototype to production",
    intro:
      "To be validated against your prototype and the full mechanics you share with the shortlist, this is the order I would propose:",
    steps: [
      {
        title: "Review the prototype first",
        body: "Code and scene review, what networking it already uses, what can be kept and what must be rebuilt for production. You get a short written report and the milestone plan before the main build starts.",
      },
      {
        title: "Write the rules down before polishing them",
        body: "Before spending Unity time on new mechanics, I build the race / board rules as a quick HTML prototype with simple 2D graphics: turns, movement, scoring and win conditions, with every value visible. You confirm the rules there, and the same rules then drive human players, bots and the server.",
      },
      {
        title: "Multiplayer core and backend",
        body: "Matchmaking or rooms, turn / race state sync, disconnect and rejoin handling, and the PlayFab side (accounts, player data). Multiplayer is the riskiest part, so it goes first.",
      },
      {
        title: "Characters, bots and game feel",
        body: "Licensed or free animal characters set up with Animator controllers and movement, bots that follow the same rules as players, camera, UI with TextMeshPro, sound and VFX. No primitive placeholders in the final game.",
      },
      {
        title: "Optimise on real phones",
        body: "Profiling on low- and mid-range Android devices and on iOS, draw calls, texture and memory budgets, then release builds for both stores.",
      },
    ],
    note: "Store accounts, signing and the final store submission stay under your accounts; I prepare the builds and help with the steps.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time start (~15 h/week)",
      body: "Prototype review, rules prototype, multiplayer and backend foundation.",
    },
    {
      when: "After notice",
      title: "Full engagement (30 h/week)",
      body: "Characters and Animator setup, bots, UI, camera, sound and VFX, built in agreed milestones.",
    },
    {
      when: "Final milestone",
      title: "Optimisation and store builds",
      body: "Device testing, performance work, Android and iOS release builds. Total duration: [[TODO: estimated weeks to production build, after scope call]].",
    },
    {
      when: "After delivery",
      title: "Defect fixes",
      body: "Defects in code I wrote are fixed at no extra charge during an agreed warranty period; new features are billed separately. Boundaries agreed in writing up front.",
    },
  ],
  questions: [
    "Which multiplayer framework and Unity version does the current prototype use, and how much of it should be kept?",
    "How many players per match, and is it a real-time race, turn-based board play, or both?",
    "Should bots only fill empty seats in online matches, or is there a full offline mode against bots?",
    "Is PlayFab already set up, or is PostgreSQL behind your own server a firm requirement?",
    "Are the animal characters already chosen and rigged, or should I source licensed ones?",
    "Which minimum Android and iOS devices must the game run smoothly on?",
  ],
  closing: {
    title: "Next step",
    body: "Reply on Freelancer.com and I am glad to take the practical assignment and walk you through the demos in a short call.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity developer (multiplayer · mobile · simulation)",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

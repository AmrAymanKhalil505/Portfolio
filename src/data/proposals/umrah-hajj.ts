import ivrisDollhouse from "../../assets/thumbnails/projects/Ivris/Screenshot_2025-04-01_at_8.38.02_PM.thumb.webp";
import ivrisRoomEditor from "../../assets/thumbnails/projects/Ivris/Screenshot2025-04-01at8.36.11PM.thumb.webp";
import ev117Particles from "../../assets/thumbnails/projects/EduLab/EV117 Particles.thumb.webp";
import nescafeJungle from "../../assets/thumbnails/projects/Nescafe/Nescafe Water Jungle.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: Freelancer.com post "Unity Developer Needed: High-Graphics Umrah & Hajj Training
// Simulation (Desktop)" (project 40766343, posted ~2026-10-13, client in Karachi, Pakistan;
// $15-25 USD/hour; 23 bids; "Open for bidding" when checked 2026-10-20). The post asks bidders to
// include: Unity experience with similar 3D/architectural projects, examples of work, estimated cost
// and timeline, and the PC requirements of the final app. Answers follow that order.

const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const ivrisVisualizationVideo = "https://youtu.be/RSsFnyzbDvA";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const atmosphereVideo = "https://youtu.be/eWFaHaYUy44";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";

const proposal: Proposal = {
  slug: "umrah-hajj",
  client: "Umrah & Hajj training simulation (Freelancer.com)",
  projectName: "Umrah and Hajj training simulation for Windows",
  dateLabel: "October 2026",
  greeting: "Assalamu alaikum,",
  eyebrow: "Application · Freelancer.com · Unity desktop training simulation",
  headline: "Rebuilding your Umrah and Hajj simulation: clean movement first, then high-quality visuals",
  lead: [
    "You already have a working version with the ritual steps. What it lacks is quality: poor graphics, and a character that passes through walls or gets stuck. The rebuild needs heavy TurboSquid models of Masjid al-Haram, Jamarat and Masjid an-Nabawi optimised for Unity, a smooth third-person character and camera, and the Umrah module finished by 12 December 2026.",
    "Guided training simulations are my main work. Since October 2024 I have built Unity simulations at BEDO where learners follow enforced steps with counters, instructions and feedback. These are commercial products sold to universities and companies. Before that I was the sole developer of a Meta Quest 2 training suite at Tanta University. At Ivris I built a Unity app for walking through and editing furnished rooms. Below I answer the four points your post asks for, and I say plainly where the fit is weaker.",
  ],
  quickFacts: [
    { label: "Rate", value: "[[TODO: rate (budget $15-25/hr)]]" },
    { label: "Umrah module estimate", value: "[[TODO: hour estimate for the Umrah module]]" },
    { label: "Start", value: "Part-time on award, full engagement 1 month later" },
    { label: "You receive", value: "Windows .exe + full Unity project" },
  ],
  answers: [
    {
      title: "My Unity experience with similar 3D and architectural projects",
      original: "Your Unity experience with similar 3D/architectural projects",
      body: [
        "Continuous professional Unity work since December 2023. The parts closest to your project:",
        "Guided procedures. At BEDO (Oct 2024 – present) and Tanta University (Dec 2023 – Oct 2024) I turn instructional material into enforced steps: learners must complete one action before the next opens, with counters, on-screen guidance and feedback. Tawaf rounds, two Nafl and Sa'i laps follow the same pattern.",
        "Moving through buildings. The Ivris app (Jun 2024 – Jun 2026) lets users walk through furnished rooms in first person and view them as a dollhouse, with 3D models loaded at runtime. It is interior scale, not a mosque. Your environments are much larger, which is why optimising the heavy models comes first in my plan.",
        "3D models and animation. I use Blender to fix and adjust models myself without waiting for a 3D artist, and I have made short Unity Timeline intro sequences for BEDO's marketing team.",
        "Arabic text in Unity. Atmosphere Protector, a children's educational game, has Arabic instruction screens (not yet released). That is useful for showing duas correctly.",
      ],
    },
    {
      title: "Examples of my work",
      original: "Examples of your work",
      body: [
        "Each project in the evidence section below has a demo video and a case study, and says what I built myself and what the wider team or company owns.",
      ],
    },
    {
      title: "Estimated cost and timeline",
      original: "Your estimated cost and timeline",
      body: [
        "Rate: [[TODO: rate (budget $15-25/hr)]], billed hourly through Freelancer.com. Estimate for the Umrah module: [[TODO: hour estimate for the Umrah module]]. I will confirm that number in the first week, after opening your old source, the TurboSquid models and the flow diagrams, and before most of the hours are spent.",
        "Availability: I am employed full-time with a one-month notice period. I can start part-time right away (about 15 hours per week). After the notice month I work 30 hours per week, and up to 40 in busy weeks, which covers the run-up to 12 December. The Hajj and Masjid an-Nabawi modules follow in January and February 2027, as your post plans.",
        "Time zone: Egypt, two to three hours behind Karachi depending on the season, so we share most of the working day for calls.",
      ],
    },
    {
      title: "PC requirements of the final app",
      original: "The PC requirements the final app would need",
      body: [
        "I would rather measure this than guess. In the first week I import the Masjid al-Haram model, optimise it and profile it. Then we set a target together, such as 60 FPS at 1080p on a typical PC used by your university or by pilgrims. Every milestone build comes with measured frame rates and a minimum and recommended spec (Windows 10/11 64-bit, CPU, GPU, RAM, disk), checked against that target.",
        "If you know which PCs the app must run on, for example university lab machines or ordinary home laptops, please tell me, because that decides how far the graphics can go. I test on my own development PC: [[TODO: Amr's PC spec (CPU / GPU / RAM)]].",
      ],
    },
    {
      title: "Deliverables",
      original: "Deliver final .exe plus the complete Unity project",
      body: [
        "Both, at every milestone: a Windows .exe you can try right away, and the complete Unity project. During an agreed warranty period I fix defects in code I wrote at no extra charge. New features and scope changes are billed separately, and I would like those boundaries agreed in writing before we start.",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on graphics, the character and the deadline",
    body: "Three things you should know now. First, my production projects use Unity's built-in render pipeline, plus URP in one short VR game in 2025. I have not shipped an HDRP project or a photorealistic architectural visualisation. For a large mosque on ordinary PCs, I would get the quality from well-optimised models, baked lighting and good materials, and we would choose the render pipeline together on a test scene in week one. Second, I have not shipped a third-person character controller. My character work is first-person room navigation (Ivris) and player controllers in short games. A wall-safe controller and camera is the first thing I would build and send you to test. Third, I am a developer, not a 3D artist or animator. I can fix and optimise the models you supply, but the intro film and the character with four outfits depend on what animations and character models are provided. Finally, 12 December is close and my first month is part-time, so I will confirm in week one whether the full Umrah module fits. If it does not, I will propose what to cut or simplify rather than miss the date.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Interactive 3D training simulations of BEDO's engineering trainers (fuel-cell, mechatronics, PID and fluid labs), sold to universities and companies.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "DOTween", "Timeline", "Blender"],
      responsibility:
        "My Unity implementation of the simulations: guided steps with validation, instruction and feedback UI, 3D model preparation, short Timeline intro sequences, and builds for a performance-limited platform. The hardware and products belong to BEDO.",
      links: [
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context:
        "Interior-design app: first-person room editing, dollhouse and floor-plan views of furnished rooms, plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "WebGL", "AR Foundation", "Photon", "PlayFab"],
      responsibility:
        "I built the Unity app, not the whole product: runtime loading of 3D room and furniture models, room navigation and editing, multiplayer editing in WebGL, AR preview. The product and service belong to Ivris.",
      links: [
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
        { label: "Video", href: ivrisVisualizationVideo },
      ],
    },
    {
      period: "Dec 2023 – Oct 2024",
      title: "Tanta University — Unity VR developer (sole developer)",
      context:
        "Meta Quest 2 training suite: onboarding tutorial for first-time users, multi-angle 360° surgical-room viewer, interactive viscosity lab.",
      tech: ["Unity", "C#", "Meta Quest 2", "Auto Hand", "360 video"],
      responsibility:
        "Everything: turning instructional goals into step-by-step training flows, scenes, adapting 3D assets, interactions and builds.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth (freelance)",
      context: "Short branded game: the player moves through sand and water environments, collects cans and races a timer.",
      tech: ["Unity", "C#", "URP", "VR"],
      responsibility: "Unity developer: player movement through the environments, collectibles, timer and scoring, onboarding for first-time visitors.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Closest match: guided training steps",
      title: "Tanta University training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Step-by-step training · sole developer",
      copy:
        "Instructional goals turned into scenes that learners complete step by step, plus a 360° viewer where they switch between fixed viewpoints. It runs in VR, but the training logic is the same as Tawaf and Sa'i.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
    {
      label: "Moving through interiors",
      title: "Ivris room walk-through and dollhouse",
      image: ivrisDollhouse,
      meta: "Unity · first-person rooms · runtime 3D",
      copy: "A dollhouse view of a furnished room, alongside first-person and floor-plan modes of the same space, with 3D models loaded at runtime.",
      links: [
        { label: "Video", href: ivrisVisualizationVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Heavy 3D content kept responsive",
      title: "Ivris room editor",
      image: ivrisRoomEditor,
      meta: "Runtime 3D loading · WebGL",
      copy: "A production Unity app that keeps room and furniture models responsive in the browser, a platform with tighter limits than a desktop .exe.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Instructions, counters and feedback",
      title: "BEDO engineering training labs",
      image: ev117Particles,
      meta: "Guided steps · instruction overlays",
      copy: "Guided labs where each step is checked before the next one opens, with instruction overlays, live values and visual explanations. This is the backbone a ritual-by-ritual guide needs.",
      links: [
        { label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") },
        { label: "Industrial training video", href: industrialVideo },
      ],
    },
    {
      label: "Movement through environments",
      title: "Nescafe surfing game",
      image: nescafeJungle,
      meta: "URP · player movement · timer",
      copy: "A short game where the player moves along sand and water routes. It is my URP project.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "Arabic learning UI",
      title: "Atmosphere Protector (not yet released)",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Educational game · Arabic instructions",
      copy: "A children's educational game with Arabic instruction screens and a player-controlled airplane. It shows I can display Arabic text properly in Unity.",
      links: [
        { label: "Video", href: atmosphereVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Umrah module (first priority)",
      items: [
        {
          need: "Third-person character in Masjid al-Haram, WASD + mouse, with a smooth camera",
          status: "partial",
          proof: "Player movement in short games and first-person room navigation (Ivris). I have not shipped a third-person controller; it is the first thing I would build and send you.",
        },
        {
          need: "7 rounds of Tawaf with a round counter and key-press actions, then 2 Nafl",
          status: "direct",
          proof: "Enforced step sequences with counters and validation in BEDO's commercial training simulations and the Tanta suite.",
        },
        {
          need: "7 laps of Sa'i between Safa and Marwa, faster walking in the green zone",
          status: "commitment",
          proof: "Lap counter on the same step system; walking speed set by trigger zones placed at your marked positions.",
        },
        {
          need: "Dua windows near the Kaaba, duas and audio guidance",
          status: "adjacent",
          proof: "On-screen instruction overlays at each step in BEDO labs; Arabic instruction screens in Atmosphere Protector. Audio played per step is a small addition on the same system.",
        },
      ],
    },
    {
      title: "Later modules",
      items: [
        {
          need: "Hajj: Mina, Arafat, Masjid Namirah, Muzdalifah, Jamarat pebble throwing, Masjid al-Haram",
          status: "commitment",
          proof: "The same step system reused, with one scene per location and a throwing interaction at Jamarat.",
        },
        {
          need: "Short animated travel scenes and an intro video (home, airport, plane)",
          status: "adjacent",
          proof: "Short Unity Timeline intro sequences for BEDO's marketing team. Depends on the animations and models provided; see the note above.",
        },
        {
          need: "Ihram wearing guide",
          status: "commitment",
          proof: "A step-by-step guide with the outfit changing at each step, using the same guided-step pattern.",
        },
        {
          need: "Masjid an-Nabawi free-roam walk",
          status: "commitment",
          proof: "The Umrah character and camera reused in the optimised Nabawi model, with no ritual steps.",
        },
      ],
    },
    {
      title: "Requirements",
      items: [
        {
          need: "High-quality graphics on Windows desktop",
          status: "partial",
          proof: "Built-in pipeline in production, URP in one project, no HDRP. The pipeline is chosen on a test scene in week one; see the note above.",
        },
        {
          need: "Optimise very heavy TurboSquid models for Unity",
          status: "adjacent",
          proof: "I fix and adjust models in Blender without a 3D artist, and I deliver to performance-limited platforms (WebGL, Quest 2). Models this heavy are larger than my previous work, so I profile them first.",
        },
        {
          need: "LODs, baked lighting, occlusion culling",
          status: "commitment",
          proof: "Planned from the start and checked with measured frame rates in each milestone build.",
        },
        {
          need: "Proper collisions: no passing through walls or getting stuck",
          status: "commitment",
          proof: "Simplified collision shapes built separately from the visual mesh, and a test walk around every wall and pillar before each delivery.",
        },
        {
          need: "One character with 4 outfits (normal clothes and Ihram); face never shown",
          status: "commitment",
          proof: "Outfit switching on one character, and a camera that always stays behind the character so the face is never seen.",
        },
        {
          need: "No VR, no crowds; keyboard and mouse only",
          status: "direct",
          proof: "Mouse-and-keyboard Unity apps in production (BEDO, Ivris).",
        },
        {
          need: "Final .exe plus the complete Unity project",
          status: "commitment",
          proof: "Both delivered at every milestone.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would rebuild it",
    intro:
      "To be confirmed once I have opened your old project, the models and the flow diagrams, but this is the order I would propose. It deals with the biggest risks first:",
    steps: [
      {
        title: "Week one: the heavy model on a real PC",
        body: "Import the Masjid al-Haram model, measure it, and make it fast enough: split it into sections, reduce what the camera never sees closely, add LODs and occlusion culling, and bake the lighting. That week also settles the render pipeline and the PC target, and confirms whether 12 December is realistic for the full module.",
      },
      {
        title: "A character that cannot get stuck",
        body: "Separate simplified colliders for walls, pillars and steps, kept apart from the detailed visual mesh. That separation is what usually fixes passing through walls and getting stuck. A third-person camera that stays behind the character and pulls in near walls, so the face never appears. You test this build before any ritual logic is added.",
      },
      {
        title: "Agree the ritual flow on a simple prototype first",
        body: "Before building in Unity, I put the flow from your diagrams into a simple HTML prototype with 2D vector graphics: the order of steps, what each key press does, when a counter advances, which dua and audio play where, and how a mistake is handled. You can check every step against the religious content before Unity time is spent.",
      },
      {
        title: "One step system for every ritual",
        body: "Tawaf, Nafl, Sa'i, Jamarat and the Ihram guide all run on one data-driven step system: the position, required action, counter, dua text and audio for each step. Your team can correct content without changing code, and the Hajj modules reuse what the Umrah module proves.",
      },
      {
        title: "Measured builds at every milestone",
        body: "Each delivery is a Windows .exe with measured frame rates on the agreed target PC, plus the full Unity project.",
      },
    ],
    note: "The religious content, marking positions and the correct order of each ritual come from you. I implement them exactly as given and ask whenever something in the old version and the diagrams disagree.",
  },
  timeline: [
    {
      when: "Award + week 1",
      title: "Audit and heavy-model test",
      body: "Part-time (about 15 h/week during my notice month). Review the old project and diagrams, run the Masjid al-Haram performance test, choose the render pipeline and PC target, and confirm the Umrah scope for 12 December.",
    },
    {
      when: "Notice month",
      title: "Character, camera and ritual prototype",
      body: "Wall-safe third-person character and camera in the optimised mosque for you to test; the HTML prototype of the Umrah flow, reviewed with you.",
    },
    {
      when: "From late November",
      title: "Umrah module to 12 December",
      body: "30 h/week, up to 40 in the final weeks. Tawaf, Nafl and Sa'i with counters, duas, audio and outfits, a lighting and performance pass, then the .exe and Unity project delivered by 12 December 2026.",
    },
    {
      when: "Dec 2026 – Feb 2027",
      title: "Hajj and Masjid an-Nabawi",
      body: "Mina, Arafat, Namirah, Muzdalifah, Jamarat and Masjid al-Haram on the same step system, travel scenes, Ihram guide, intro, and the Nabawi free-roam walk.",
    },
    {
      when: "After delivery",
      title: "Warranty",
      body: "Defects in my code fixed at no charge during the agreed period; changes and new features billed separately.",
    },
  ],
  questions: [
    "Which PCs must the app run on: university lab machines, ordinary home laptops, or something else? That decides how far the graphics can go.",
    "Which Unity version and render pipeline does the old project use? Do you need it moved to a newer version, or is a fresh project acceptable?",
    "Is the character with four outfits, and its walk and ritual animations, already part of the assets you supply, or does that need to be sourced?",
    "For the intro (home, airport, plane) and the travel scenes, do you have models and animations, or should I propose a simpler approach, such as camera moves over still scenes?",
    "Will the app be in Arabic, Urdu, English, or several languages, and is the dua audio already recorded?",
    "Who reviews the religious accuracy of each step, and how quickly can they approve a milestone before 12 December?",
  ],
  closing: {
    title: "Next step",
    body: "Reply on Freelancer.com and I will gladly join a call to go through your proposal document and the old build. After the first week's audit I will give you a confirmed hour estimate.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity simulation developer",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

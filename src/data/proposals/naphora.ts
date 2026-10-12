import ev117Particles from "../../assets/thumbnails/projects/EduLab/EV117 Particles.thumb.webp";
import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: LinkedIn post "Senior Playable Ads Programmer" (body: "Mid-Senior Playable Programmer /
// Creative Technical Artist"), Naphora Games Group, posted ~2026-09-29, full-time, fully remote on
// KSA hours (Sun-Thu 9:00-17:00). The post lists no required application items; the answers below
// cover the requirements, the portfolio nice-to-have, hours and pay.

const atmoVideo = "https://youtu.be/eWFaHaYUy44";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";

const proposal: Proposal = {
  slug: "naphora",
  client: "Naphora Games Group",
  projectName: "Playable ads and gameplay prototypes for mobile games",
  dateLabel: "October 2026",
  greeting: "Hello Naphora team,",
  eyebrow: "Application · Naphora Games Group · Playable Programmer (Unity / C#)",
  headline: "Unity developer for fast, small, short-session playables",
  lead: [
    "Your role is about turning a game's core hook into a few seconds of play that runs fast, loads small and works on every device. The closest things I have built are short-session Unity games: a mobile educational game for Android and iOS (Atmosphere Protector) and a one-week branded VR booth game for Nescafe Ice Coffee, where first-time players had to understand the loop in seconds and replay it against a timer.",
    "Since December 2023 I have worked professionally in Unity and C# without a break, and I ship Unity WebGL builds in production, the browser target where load time, file size and memory matter most. Below I go through each requirement in your post, list my experience with dates and my own role, and say plainly where I would be learning: I have not yet shipped playable ads or used Luna Playable.",
  ],
  quickFacts: [
    { label: "Stack", value: "Unity · C# · WebGL · mobile" },
    { label: "Start", value: "1 month after an offer" },
    { label: "Hours", value: "Sun-Thu 9:00-17:00 KSA" },
    { label: "Location", value: "Egypt (remote)" },
  ],
  answers: [
    {
      title: "Unity experience, with dates",
      original: "4+ years in Unity game development, technical art, creative development, or a related field",
      body: [
        "Continuous professional Unity / C# work since December 2023: Senior Unity Engineer at BEDO Innovating Education (Oct 2024 - present), Unity and AR developer for Ivris (freelance, Jun 2024 - Jun 2026), sole Unity VR developer at Tanta University (Dec 2023 - Oct 2024), and a one-week VR booth game for Nescafe Ice Coffee (2025). That is under your four years; see the note below. The full table with technologies and my own responsibility is further down.",
      ],
    },
    {
      title: "Portfolio, playable examples or video creatives",
      original: "A portfolio, GitHub, playable examples, or video creatives",
      body: [
        "Each project below links to a demo video and a case study that states what I built myself. I do not have published playable ads to show yet. My closest examples are the short-session games below: a mobile game loop and a timed booth game.",
      ],
    },
    {
      title: "Working on Saudi Arabia hours",
      original: "Sunday to Thursday, 9:00 AM to 5:00 PM KSA time",
      body: [
        "Yes. Sunday to Thursday is already the working week in Egypt, and Egypt is at most one hour behind KSA depending on the season, so I can keep 9:00-17:00 KSA every working day.",
      ],
    },
    {
      title: "Start date",
      body: [
        "I am currently employed with a one-month notice period. I give notice when I accept an offer and can start full-time one month later. During the notice month I can already put in about 15 hours a week if it helps onboarding, for example learning your Luna pipeline and templates.",
      ],
    },
    {
      title: "Salary expectation",
      body: ["[[TODO: monthly salary expectation for this full-time role (USD)]]"],
    },
  ],
  candidNote: {
    title: "A transparent note on the 4-year bar and playable ads",
    body: "I have almost three years of continuous professional Unity work (since December 2023), so I am below the four years you ask for. I have not shipped playable ads, used Luna Playable, or worked with ad networks or UA data, and my JavaScript, motion graphics and shader work is light compared with my C#. What I bring: production Unity WebGL (the same browser constraints a playable faces), a mobile game built for Android and iOS, short-session game loops built for people who have never seen them before, and a habit of prototyping a mechanic quickly before polishing it. I would rather you know this now than find it in the dates.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Interactive Unity training simulations of BEDO engineering trainers: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics stations, PID control labs, fluid-mechanics labs.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "ScriptableObject architecture", "Dependency injection"],
      responsibility:
        "Interaction and state logic, guided steps, UI and feedback, visual explanations such as the EV117 particle view, WebGL builds. Worked with instructional-design, art and mechatronics teams; the hardware and product belong to BEDO.",
      links: [
        { label: "EV117 / education labs", href: caseStudyUrl("engineering-education-virtual-labs") },
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "WebGL", "AR Foundation", "AR Foundation Remote 2", "Photon", "PlayFab"],
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
      tech: ["Unity", "C#", "Meta Quest 2", "Auto Hand", "360 video", "Android"],
      responsibility:
        "Everything: interaction flows, scenes, hand-held tool interactions, onboarding for first-time users, adapting 3D assets, standalone Android headset builds.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth game (freelance)",
      context: "Short-session branded game for an event booth: surf sand and water tracks, collect cans, beat the timer.",
      tech: ["Unity", "C#", "VR"],
      responsibility:
        "Unity developer: gameplay loop, timed scoring, collectibles and onboarding that visitors understand in seconds. The brand belongs to its owners.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Mobile game loop",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Unity · Android / iOS · Arabic UI",
      copy:
        "Mobile educational game: fly a plane, collect pollution clouds, keep the atmosphere's health bar up, unlock upgrades. Simple controls and a readable loop for young players.",
      links: [
        { label: "Video", href: atmoVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "Short-session, replayable",
      title: "Nescafe VR surfing booth",
      image: nescafeSurfing,
      meta: "Timer · score · collectibles",
      copy:
        "Built in one week: a hook that works in seconds, a timed score loop and collectibles, designed for players who have never seen the game before. That is the same brief a playable ad has.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "Browser delivery",
      title: "Ivris WebGL room editor",
      image: ivrisApp,
      meta: "WebGL · runtime 3D loading · Photon",
      copy: "Production Unity WebGL app with real-time multiplayer editing and 3D models loaded at runtime, where load time and memory had to stay under control.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Visual explanation",
      title: "EV117 particle view",
      image: ev117Particles,
      meta: "Particles · labelled flows · WebGL",
      copy:
        "Moving particles show what happens inside a fuel cell (hydrogen, protons, electrons, oxygen, water), so an invisible process reads at a glance.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "First-time user onboarding",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Quest 2 · sole developer",
      copy: "An onboarding tutorial for people putting on a headset for the first time, plus hand-held tool interactions. Teaching a new interaction quickly is the core of a good playable.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Responsibilities",
      items: [
        {
          need: "Build and maintain playable ads, gameplay prototypes, interactions and UI flows",
          status: "adjacent",
          proof: "Gameplay loops, UI flows and interactions in Atmosphere Protector, the Nescafe booth game and BEDO labs. No playable ads shipped yet.",
        },
        {
          need: "Reusable playable templates",
          status: "adjacent",
          proof: "Reusable Unity patterns for guided steps, feedback and dashboards across BEDO's lab family (ScriptableObject architecture, dependency injection).",
        },
        {
          need: "Optimise performance, load time, file size and cross-platform compatibility",
          status: "adjacent",
          proof: "Production Unity WebGL (BEDO, Ivris), standalone Quest 2 and Android / iOS builds. These are size- and memory-limited targets, but not ad-network size caps.",
        },
        {
          need: "Many video and playable variations, iterated from test results and UA data",
          status: "commitment",
          proof: "No UA experience yet. I would build templates so the hook, art, difficulty and end card can change through data, without code changes.",
        },
        {
          need: "AI-generated playables and video workflows; internal production tools",
          status: "commitment",
          proof: "[[TODO: confirm any AI-assisted production or tooling experience Amr can cite]]",
        },
        {
          need: "Work with Marketing, UA, Product, Design, Art, AI and Engineering",
          status: "direct",
          proof: "Daily work with instructional-design, art and mechatronics teams at BEDO; shared Unity and backend codebase at Ivris.",
        },
      ],
    },
    {
      title: "Requirements",
      items: [
        {
          need: "4+ years in Unity game development or a related field",
          status: "partial",
          proof: "Continuous professional Unity since Dec 2023, almost three years. See the note above.",
        },
        {
          need: "Strong Unity and C#, and/or JavaScript",
          status: "direct",
          proof: "Unity and C# in every project above. JavaScript is light; my HTML prototypes are the main place I use web tech.",
        },
        {
          need: "Gameplay systems, prototypes, playable or interactive ads",
          status: "partial",
          proof: "Gameplay systems and fast prototypes (Atmosphere Protector, Nescafe, HTML-first prototypes). No playable or interactive ads yet.",
        },
        {
          need: "Mobile optimisation and technical constraints",
          status: "adjacent",
          proof: "Android / iOS game, standalone Quest 2 (mobile hardware) and WebGL builds.",
        },
        {
          need: "Technical implementation plus creative thinking and fast prototyping",
          status: "direct",
          proof: "One-week Nescafe game from brief to booth; I prototype every system before building it in full.",
        },
        {
          need: "Fast, iterative, performance-driven environment",
          status: "direct",
          proof: "Booth deadline, parallel freelance and full-time work, iterating with reviewers until they sign off.",
        },
      ],
    },
    {
      title: "Nice to have",
      items: [
        {
          need: "Luna Playable; AppLovin, Unity Ads, Meta or Google",
          status: "commitment",
          proof: "Not used yet. Luna builds from a Unity project, so my Unity and WebGL work carries over; I would learn your pipeline in the notice month.",
        },
        {
          need: "Hypercasual / hybrid-casual prototypes or UA video creatives",
          status: "adjacent",
          proof: "The Nescafe booth game is a hypercasual-style timed loop; Atmosphere Protector is a casual mobile loop. No UA creatives yet.",
        },
        {
          need: "Motion graphics, animation, VFX, shaders, technical art",
          status: "partial",
          proof: "Particle-based explanations (EV117) and animated visual feedback in Unity. No After Effects or custom shader work to show.",
        },
        {
          need: "AI-assisted creative production or automation",
          status: "partial",
          proof: "[[TODO: confirm whether Amr has AI-assisted production work to cite]]",
        },
        {
          need: "Portfolio, playable examples or video creatives",
          status: "direct",
          proof: "Portfolio with demo videos and case studies, linked throughout this page.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would approach playables at Naphora",
    intro:
      "To be checked against your Luna setup, networks and art pipeline, but this is how I would work from the first weeks:",
    steps: [
      {
        title: "One hook, proven in seconds",
        body: "Find the single action that sells the game, make it playable in the first second with a clear hand-pointer tutorial, and end on a strong call to action. Anything that does not serve the hook stays out.",
      },
      {
        title: "Prototype the mechanic before polishing it",
        body: "Before full Unity work I build a quick browser prototype with simple 2D vector graphics, so the team can play the mechanic and agree on it before art and polish time is spent. For playables this means testing feel and difficulty while changes are still cheap.",
      },
      {
        title: "Templates driven by data",
        body: "Each playable is a template: hook, level layout, difficulty, art set, copy and end card set through data (for example ScriptableObjects), so producing a new variation for a UA test is a configuration change, not a new build from scratch.",
      },
      {
        title: "A size and performance budget from the first build",
        body: "Track build size and load time on every iteration: compressed textures and audio, few draw calls, no unused assets or packages. Then test on low-end Android and in each network's preview tool.",
      },
      {
        title: "Close the loop with UA",
        body: "Name variations so their results map back to the template settings, and use the results to choose the next round of hooks.",
      },
    ],
    note: "Network size limits, Luna-specific constraints and your AI workflow are things I would learn from your team; I have not used them in production.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time onboarding",
      body: "About 15 hours a week: learn your Luna pipeline, existing templates and network requirements; build a first test playable from one of your games.",
    },
    {
      when: "Month 1",
      title: "Full-time, first playables",
      body: "Ship playables from existing templates on KSA hours, and agree a size and performance budget per network.",
    },
    {
      when: "Months 2-3",
      title: "Reusable templates",
      body: "Turn the hooks that test well into data-driven templates so variations come out faster.",
    },
    {
      when: "Ongoing",
      title: "Variations and tools",
      body: "Iterate on UA results, and work with your AI engineers on production tools and AI-assisted variations.",
    },
  ],
  questions: [
    "Which games will the first playables be for, and do you already have Luna templates I would extend, or am I starting them?",
    "Which networks matter most (AppLovin, Unity Ads, Meta, Google), and what size and load-time limits do you work to?",
    "How is the work split between Unity / Luna playables and pure HTML / JavaScript ones?",
    "How do UA results come back to the creative team, and how many variations per week do you usually aim for?",
    "What does the AI-generated playable workflow look like today, and which parts would this role build or own?",
    "Is there a paid test task, or a sample playable you would like me to rebuild as part of the process?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the demos in a short call, and to build a test playable for one of your games if that helps your decision.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity developer · games and interactive simulations",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

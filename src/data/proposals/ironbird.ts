import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import ev117Particles from "../../assets/thumbnails/projects/EduLab/EV117 Particles.thumb.webp";
import mr110Robot from "../../assets/thumbnails/projects/cim/MR110 Robot Station Statndalone.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: Skillshot.pl listing "Unity Optimization Developer" (Ironbird Creations S.A., Kraków or fully
// remote within CET ±2h, B2B or civil-law contract, 10,000-16,000 PLN DOE, published 2026-10-13,
// https://www.skillshot.pl/jobs/39932-unity-optimization-developer-at-ironbird-creations). Applications
// go through the on-page form (message + CV attachment; the CV must carry the RODO/GDPR clause). The
// post asks no written questions, so the answers follow its requirement list in order, with the
// post's own wording as `original`. Concrete optimisation examples are not yet confirmed in facts.md,
// so they stay as TODOs.

const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";

const proposal: Proposal = {
  slug: "ironbird",
  client: "Ironbird Creations",
  projectName: "Performance and frame-budget work on Phantom Hellcat (Unity HDRP, PC and consoles)",
  dateLabel: "October 2026",
  greeting: "Hello Ironbird team,",
  eyebrow: "Application · Ironbird Creations · Unity Optimization Developer",
  headline: "Unity engineer who delivers on tight hardware budgets, applying to grow into your performance role",
  lead: [
    "You are looking for someone to find and remove CPU, GPU and memory bottlenecks in Phantom Hellcat on real target hardware, set per-platform budgets and document the results. My Unity work since December 2023 has always run on targets where performance is not optional: standalone Meta Quest 2, Unity WebGL in the browser for commercial training simulations, and Android / iOS builds, plus a URP VR game for a live event booth.",
    "I want to be upfront: I have not worked in HDRP or shipped on a console, and both are core to your post. Below I answer your requirements in order, mark each one honestly as done, related or something I would still have to learn, and explain how I would approach a performance audit of your game.",
  ],
  quickFacts: [
    { label: "Stack", value: "Unity · C# · Quest 2 · WebGL · mobile" },
    { label: "Start", value: "1 month after an offer" },
    { label: "Hours", value: "Full-time, 40 h/week" },
    { label: "Location", value: "Egypt · 1 h ahead of Poland" },
  ],
  answers: [
    {
      title: "Unity profiling and optimisation experience",
      original: "Strong professional experience in Unity performance profiling and optimization",
      body: [
        "[[TODO: one or two concrete optimisation examples: project, what was slow (CPU, GPU or memory), what you changed, and the measured result]]",
        "Profiling tools I have used in production: [[TODO: which of Unity Profiler, Profile Analyzer, Memory Profiler and Frame Debugger you have used, and on which projects]]",
      ],
    },
    {
      title: "Profiling on target hardware",
      original:
        "Experience profiling and optimizing standalone game builds on target hardware, rather than relying solely on Unity Editor profiling",
      body: [
        "My builds have to run on the device, not in the Editor: standalone Android builds on my own Meta Quest 2 for the Tanta University training suite, Unity WebGL builds that run in the browser for BEDO's commercial simulations, and Android / iOS builds for the Ivris AR app. None of those targets is a PC or a console, so console devkits would be new to me.",
      ],
    },
    {
      title: "HDRP",
      original: "Very good knowledge of Unity HDRP (High Definition Render Pipeline) and its performance optimization",
      body: [
        "Not in production. BEDO's and Ivris's projects use the built-in render pipeline, and the Nescafe VR booth game (2025) used URP. HDRP's lighting, volumetrics and post-processing costs are the first thing I would have to learn on your project.",
      ],
    },
    {
      title: "Shaders",
      original: "Experience analyzing and optimizing shaders using Shader Graph, Amplify Shader Editor, or HLSL",
      body: ["[[TODO: your shader experience (Shader Graph, Amplify or HLSL), on which projects, or say none]]"],
    },
    {
      title: "C# runtime performance and memory",
      original:
        "Very good knowledge of C# in Unity, particularly in the context of runtime performance and memory management",
      body: [
        "C# is in every project I have built. At BEDO I work on a shared codebase of about 80,000 lines of in-house C# that has to stay responsive in WebGL while it runs live simulation values, graphs and 3D feedback every frame. At Ivris I built runtime loading of 3D models, so furniture and room assets are loaded on demand instead of being bundled into the WebGL and mobile builds.",
      ],
    },
    {
      title: "Shipped console title",
      original: "Participation in the development of at least one completed or shipped console title",
      body: [
        "No. I have shipped commercial software: BEDO's Unity training simulations are sold to universities and companies (B2B, through BEDO, not a public store). I have not worked on a console title and have not used PIX or platform devkits.",
      ],
    },
    {
      title: "Remote work within CET ±2h",
      original: "Remote work – we are open to fully remote candidates (CET time zone ±2h).",
      body: [
        "I live in Egypt, which is one hour ahead of Poland for most of the year and inside your CET ±2h window all year, so I can keep normal Kraków working hours. Whether you can contract someone outside the EU on a B2B or civil-law contract is my first question below.",
      ],
    },
    {
      title: "Start date, hours and salary",
      original: "10 000 – 16 000 PLN (DOE) · B2B or civil law contract",
      body: [
        "I am currently employed with a one-month notice period, so I start full-time one month after an offer. During the notice month I can already put in about 15 hours a week around my current job, for example to read the project and take first baseline captures. After that I work full-time, 40 hours a week.",
        "Salary expectation: [[TODO: salary (monthly, PLN net on B2B, within your 10,000–16,000 PLN range)]]",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on where I don't yet match the post",
    body: "Your post is written for a performance specialist with HDRP and console experience, and I am not that yet. I have not used HDRP in production (built-in pipeline at BEDO and Ivris, URP only on the Nescafe booth game), I have not worked on a console title, and I have never used PIX or a console devkit. My Unity experience starts in December 2023, just under three years, on simulations, VR training and apps rather than visually heavy action games. What I do bring: every project I have delivered ran on constrained hardware (standalone Quest 2, browser WebGL, mobile), I work daily in a large shared C# codebase, and I am used to agreeing priorities with art and design teams before changing their work. If you need someone who can audit an HDRP console build from day one, I am not the right hire; if you would consider someone who learns the HDRP and console side on your project, I would be glad to show you how I work. I would rather you know this now than discover it in an interview.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Interactive Unity training simulations of BEDO engineering trainers, sold as commercial B2B products: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics stations, PID control labs, fluid-mechanics labs. Delivered as WebGL builds; migrating projects to Unity 6 since mid-2026.",
      tech: ["Unity", "C#", "WebGL", "Built-in render pipeline", "Unity 6 (migration)", "ScriptableObjects", "Dependency injection", "DOTween"],
      responsibility:
        "Interaction and state logic, live simulation values, graphs and 3D feedback, runtime tools such as a visual command editor and interpreter, and WebGL builds. Shared team codebase of about 80,000 lines of in-house C#; I mentor one intern and review his work. The hardware and products belong to BEDO.",
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
        "The Unity app, not the whole product: runtime loading of 3D models instead of bundling every asset into the build, Photon multiplayer room editing in WebGL, mobile AR preview, PlayFab integration.",
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
        "Everything: interaction flows, scenes, hand-held tool interactions, onboarding, and standalone Android builds running on the headset's mobile hardware.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth game (freelance)",
      context: "Short-session branded VR game for an event booth: surf sand and water routes, collect cans, beat the timer.",
      tech: ["Unity", "C#", "VR", "URP"],
      responsibility:
        "Unity developer: gameplay loop, movement, timed scoring, collectibles and three themed routes, from brief to booth in one week. The brand belongs to its owners.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Standalone mobile-class hardware",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Standalone Quest 2 · sole developer",
      copy:
        "VR scenes, hand-held tool interactions and a 360° viewer built as standalone Android builds for the headset, tested on my own Quest 2. In VR an unstable frame rate is felt immediately, so the build has to hold up on the device itself.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
    {
      label: "Runtime asset loading",
      title: "Ivris interior design app",
      image: ivrisApp,
      meta: "Unity 6 · WebGL · Android / iOS",
      copy:
        "Furniture and room models are loaded at runtime instead of bundled into the build, with collaborative WebGL editing and mobile AR preview on the same content. The closest thing I have to your asset-streaming and loading-time work.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Visuals vs performance in the browser",
      title: "Engineering education virtual labs",
      image: ev117Particles,
      meta: "WebGL · live values · particle and flow visuals",
      copy:
        "Fluid-flow and fuel-cell labs where calculated measurements, graphs and 3D effects stay in sync as learners change inputs, balancing visual clarity against performance in a browser-friendly WebGL build.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Large shared codebase",
      title: "Industrial training simulations",
      image: mr110Robot,
      meta: "Multi-station scenes · ~80k lines team C#",
      copy:
        "Mechatronics station simulations with PLC-style state logic, a 6-joint robot arm with forward and inverse kinematics and a visual command interpreter, built on BEDO's shared team codebase.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "URP game",
      title: "Nescafe VR surfing booth",
      image: nescafeSurfing,
      meta: "URP · VR · one week",
      copy:
        "My only URP project: a short-session VR arcade game with three themed routes, collectibles and a timer, built from brief to live event booth in one week.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Profiling and bottleneck analysis",
      items: [
        {
          need: "Strong professional experience in Unity performance profiling and optimisation",
          status: "partial",
          proof: "Performance-constrained delivery on Quest 2, WebGL and mobile; my concrete examples are in the first answer above. Not a dedicated optimisation role so far.",
        },
        {
          need: "CPU, GPU and memory profiling; identify and remove bottlenecks independently",
          status: "partial",
          proof: "Same projects as above; doing this as the main job on a large HDRP game would be a step up.",
        },
        {
          need: "Unity Profiler, Profile Analyzer, Memory Profiler, Frame Debugger",
          status: "partial",
          proof: "See the tools line in the first answer above.",
        },
        {
          need: "Profile standalone builds on target hardware, not only in the Editor",
          status: "adjacent",
          proof: "Standalone Quest 2 builds on my own headset, WebGL in the browser, Android / iOS devices. Not PC or console hardware.",
        },
        {
          need: "Frame time, frame pacing, FPS stability and stutter analysis",
          status: "adjacent",
          proof: "Standalone VR on Quest 2, where frame drops are felt immediately by the user. No console frame-pacing work.",
        },
      ],
    },
    {
      title: "Rendering, HDRP and shaders",
      items: [
        {
          need: "Very good knowledge of HDRP and its performance optimisation",
          status: "commitment",
          proof: "Not used in production (built-in pipeline at BEDO and Ivris, URP on the Nescafe game). I would learn it on your project.",
        },
        {
          need: "Optimise lighting, post-processing, volumetrics and other heavy HDRP features",
          status: "commitment",
          proof: "Not done yet; depends on learning HDRP first.",
        },
        {
          need: "Analyse and optimise shaders (Shader Graph, Amplify, HLSL)",
          status: "commitment",
          proof: "Shader optimisation at HDRP / console scale would be new to me; my shader background is in the answer above.",
        },
        {
          need: "Rendering costs: draw calls, overdraw, batching, culling, LODs, shadows; GPU budgets",
          status: "adjacent",
          proof: "Delivering 3D scenes to WebGL and standalone Quest 2 means working inside small rendering budgets. Not HDRP or PC / console GPU budgets.",
        },
      ],
    },
    {
      title: "C#, memory and assets",
      items: [
        {
          need: "C# in Unity for runtime performance and memory management",
          status: "adjacent",
          proof: "C# in every project, including a shared ~80,000-line team codebase that runs live simulation values, graphs and 3D feedback in WebGL.",
        },
        {
          need: "Reduce garbage collection, allocations and CPU spikes",
          status: "partial",
          proof: "See the examples in the first answer above.",
        },
        {
          need: "Asset optimisation: textures, meshes, materials, animations",
          status: "adjacent",
          proof: "I use Blender to fix and adjust models without waiting for the 3D artist, and built runtime model loading at Ivris for WebGL and mobile targets.",
        },
        {
          need: "Diagnose and fix memory usage and resource management issues",
          status: "adjacent",
          proof: "Runtime asset loading at Ivris instead of bundling every model; browser WebGL and Quest 2 as memory-constrained targets.",
        },
      ],
    },
    {
      title: "Consoles",
      items: [
        {
          need: "At least one completed or shipped console title",
          status: "partial",
          proof: "Shipped commercial software: BEDO's B2B training simulations, sold to universities and companies. No console title.",
        },
        {
          need: "PIX and platform-specific console tools",
          status: "commitment",
          proof: "Not used. I would learn them with your team and devkits.",
        },
        {
          need: "Reach and hold target frame rates and memory budgets on consoles",
          status: "commitment",
          proof: "Not done on consoles; done in the sense of making builds run acceptably on Quest 2, WebGL and mobile.",
        },
      ],
    },
    {
      title: "Process and collaboration",
      items: [
        {
          need: "Run performance audits, prioritise optimisation tasks, write improvement plans",
          status: "commitment",
          proof: "How I would do it is in the approach section below.",
        },
        {
          need: "Measure and document optimisation results",
          status: "commitment",
          proof: "Before / after captures with the same benchmark path for every change, written up for the team.",
        },
        {
          need: "Good communication with multidisciplinary teams",
          status: "direct",
          proof: "Daily work with instructional-design, art and mechatronics teams at BEDO; mentoring and reviewing one intern; English every day at work.",
        },
        {
          need: "Work independently",
          status: "direct",
          proof: "Sole developer of the Quest 2 training suite; whole features end to end at BEDO; remote freelance work for Ivris alongside a full-time job.",
        },
      ],
    },
    {
      title: "Preferred qualifications",
      items: [
        {
          need: "Addressables, asset streaming and loading-time optimisation",
          status: "adjacent",
          proof: "Runtime loading of 3D models at Ivris instead of bundling them into the build. Not with Addressables at open-world scale.",
        },
        {
          need: "Open-world or large, complex environments",
          status: "commitment",
          proof: "Not done; my largest scenes are multi-station industrial training simulations.",
        },
        {
          need: "Dynamic resolution scaling, FSR, DLSS",
          status: "commitment",
          proof: "Not used yet.",
        },
        {
          need: "Third-person action-adventure or other visually demanding 3D",
          status: "partial",
          proof: "3D simulations, VR and a VR arcade game; no third-person action game.",
        },
        {
          need: "Passion for games; balance between visual quality and performance",
          status: "adjacent",
          proof: "Balancing visual clarity, performance and browser-friendly presentation is a stated challenge of my WebGL virtual labs.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would approach performance on Phantom Hellcat",
    intro:
      "To be checked against your current builds, targets and tooling. HDRP and the console tools are the parts I would learn with your team; the method below is how I would structure the work:",
    steps: [
      {
        title: "Agree the budget first",
        body: "Before touching content, agree per-platform targets with the leads: frame rate (16.7 ms at 60 fps, 33.3 ms at 30 fps), memory ceilings and loading times. At BEDO I agree the system with the design side before writing Unity code; the same habit applies to budgets with art and design here.",
      },
      {
        title: "A repeatable baseline on real hardware",
        body: "Fixed benchmark paths through the heaviest areas and combat situations, captured in development builds on the target PC and console hardware, so every later change is measured against the same numbers instead of impressions from the Editor.",
      },
      {
        title: "Classify, then fix the largest cost",
        body: "For each problem area, first decide whether it is CPU-, GPU- or memory-bound, then go after the biggest measured cost. No micro-optimising code that is not on the critical path.",
      },
      {
        title: "Fix it with the people who own it",
        body: "Many rendering costs come from content: lights, shadows, materials, LODs, effects. I would bring the capture and a proposed change to the artist or technical artist who owns it, so the visual intent stays theirs and the fix sticks.",
      },
      {
        title: "Before / after, every time",
        body: "Each change gets a short note with its before and after captures and the platform it was measured on, so the team can see what was gained and catch regressions in later builds.",
      },
    ],
    note: "HDRP, console devkits, PIX and upscalers such as FSR or DLSS are not part of my production experience yet; I would learn them on your project.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time onboarding",
      body: "About 15 hours a week around my current job: read the project and its render-pipeline setup, learn your build and profiling workflow, and take first baseline captures on PC.",
    },
    {
      when: "Month 1",
      title: "Full-time audit",
      body: "40 hours a week on Kraków hours. Benchmark paths and baselines per target platform, a prioritised list of bottlenecks, and an improvement plan agreed with the leads.",
    },
    {
      when: "Months 2-3",
      title: "Fixes and budgets",
      body: "Work through the highest-impact items with programmers and artists, set per-platform budgets for content, and document every change with before / after numbers.",
    },
    {
      when: "Ongoing",
      title: "Hold the line to ship",
      body: "Keep frame rate and memory inside budget as content grows, re-check each milestone build on target hardware, and flag new regressions early.",
    },
  ],
  questions: [
    "Can you contract a remote developer living in Egypt (outside the EU) on your B2B or civil-law contract, and is English the team's working language day to day?",
    "Which platforms and frame-rate targets is Phantom Hellcat aiming for, and how far from them is the current build?",
    "How would a remote developer profile on console hardware: remote devkit access, shipped devkits, or console work done on-site in Kraków?",
    "Where do you see the biggest problems today: GPU cost in HDRP, CPU and garbage-collection spikes, memory, or streaming and loading stutter?",
    "Is there already a benchmark or automated performance-capture setup, or would building it be part of this role?",
    "How is shader and lighting work split between programmers and technical artists, and would I work mainly with one of them?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the demos in a short call, and to take a profiling task on a test build if that helps your decision.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity developer · simulations, VR and games",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

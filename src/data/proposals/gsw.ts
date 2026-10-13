import ev117Particles from "../../assets/thumbnails/projects/EduLab/EV117 Particles.thumb.webp";
import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import mr109RobotArm from "../../assets/thumbnails/projects/MR109 Compact/MR109 Robot Arm.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: LinkedIn post "Freelance Creative Technologist - Unity Generalist" (GSW, powered by
// Syneos Health; healthcare communications agency; posted ~2026-10-08). Read through a summarising
// fetch, so the `original` lines are close paraphrases. The post asks for no specific application
// materials and does not say whether the role is remote or open outside the US (it is listed as
// "United States" and mentions possible 401(k) eligibility), so that is the first question below.

const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";

const proposal: Proposal = {
  slug: "gsw",
  client: "GSW",
  projectName: "Interactive Unity WebGL experiences (freelance creative technologist)",
  dateLabel: "October 2026",
  greeting: "Hello GSW team,",
  eyebrow: "Application · GSW · Freelance Creative Technologist, Unity generalist",
  headline: "Unity WebGL experiences that explain something, and run well in every browser",
  lead: [
    "I build interactive Unity experiences that ship to the browser and make a hidden process visible. The closest match to your role is my Unity / WebGL work at BEDO: guided labs where animated particles show what happens inside a hydrogen fuel cell, exploded-view equipment animations, and live readings that react to what the learner does, all delivered as WebGL builds.",
    "I also built the Unity app for Ivris, a production WebGL room editor with 3D models loaded at runtime and real-time multiplayer editing, and I was the sole developer of a Meta Quest 2 training suite at Tanta University that included a 360° surgical-room viewer. Below: how I match each point in your post, what I have not shown yet, my experience with dates, and how I would work with your creative team.",
  ],
  quickFacts: [
    { label: "Rate", value: "[[TODO: hourly rate for direct freelance (post lists USD 65–75 / h)]]" },
    { label: "Start", value: "Part-time now, full engagement 1 month after award" },
    { label: "Hours", value: "30 h / week, up to 40 in busy phases" },
    { label: "Location", value: "Egypt (remote) · CET+1" },
  ],
  answers: [
    {
      title: "Unity scenes built and optimised for WebGL",
      original: "Build and optimize Unity scenes for WebGL deployment · WebGL export constraints (compression, memory)",
      body: [
        "Unity WebGL is my main delivery target. At BEDO (Oct 2024 – present) every training simulation ships as a WebGL build, with 3D scenes, live graphs and guided interaction that have to stay responsive in the browser. At Ivris (Jun 2024 – Jun 2026) I built a WebGL room editor where furniture and room models are loaded at runtime and edits are synchronised between users with Photon, so memory and loading had to stay under control while content changed during the session.",
      ],
    },
    {
      title: "Timeline and animation",
      original: "Use Timeline to drive scripted sequences, object animation and environmental effects",
      body: [
        "Animated sequences are a regular part of my work: exploded-view equipment animations and particle explanations in the BEDO labs, and robot arms, conveyors and pneumatics animated from their process states in the MR109 / MR110 industrial stations.",
        "[[TODO: confirm whether any of these used Unity Timeline (and which project), or say that Timeline-driven sequences would be new in production]]",
      ],
    },
    {
      title: "UI, VFX, audio and logic in one package",
      original: "Combine UI, VFX, audio and logic into a cohesive, performant package",
      body: [
        "In the BEDO labs one build combines simulation logic, measurement and monitoring UI, guided instruction overlays and particle-based visual explanations. The Nescafe VR booth game combined gameplay, a timer, scoring and collectibles into a short experience first-time visitors understood in seconds. Audio work is not something I show in my portfolio yet.",
      ],
    },
    {
      title: "C# and modular architecture",
      original: "C# scripting and modular architecture",
      body: [
        "All my Unity work is C#. At BEDO I reuse common patterns for guided steps, measurement feedback, graphs, dashboards and WebGL delivery across many labs, and at Tanta University I built reusable VR patterns for guided instruction, 360° viewpoint switching and hand-held tools.",
      ],
    },
    {
      title: "Debugging and testing across browsers and hardware",
      original: "Debug and test across browsers and hardware · performance and browser compatibility",
      body: [
        "I ship to constrained targets on both sides: Unity WebGL in production (BEDO, Ivris), Meta Quest 2 standalone (Tanta University) and Android / iOS (Ivris AR preview). Keeping runtime-loaded 3D models reliable across WebGL and mobile was one of the main challenges at Ivris.",
      ],
    },
    {
      title: "Working with a fast creative team, and independently",
      original: "Collaborate with artists, designers and developers · work independently",
      body: [
        "At BEDO I work daily with instructional-design, art and engineering teams. At Tanta University I was the sole developer, turning instructional requirements into finished Quest 2 experiences, and at Ivris I delivered the Unity app as a freelancer on a shared codebase.",
      ],
    },
    {
      title: "Rate, availability and location",
      body: [
        "Rate: as in the quick facts at the top, billed hourly.",
        "I have a one-month notice period at my current job. During that month I can already work about 15 hours per week (around 60 hours). After it: 30 hours per week (around 120–130 hours per month), up to 40 hours per week in busy phases.",
        "I work remotely from Egypt (CET+1). Overlap with your team: [[TODO: which US Eastern hours Amr can overlap each working day]]",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on experience and tooling",
    body: "My continuous professional Unity work started in December 2023, a little under the three years you prefer. My portfolio does not yet show Shader Graph or custom shaders, audio work, DOTS or Addressables, or Three.js; my visual-effects evidence is particle-based explanations, and the closest thing to Addressables is the runtime 3D model loading I built at Ivris. What I bring alongside it: production Unity WebGL delivery, animated explanations of processes people cannot see, and short-session experiences designed for first-time users. I prefer you know this now rather than discover it on the first project.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity / WebGL training simulations of BEDO engineering trainers: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics and industrial stations, PID control labs, fluid-mechanics labs.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "Particles", "Data visualisation"],
      responsibility:
        "Simulation logic, animated visual explanations, measurement and monitoring UI, guided experiment steps, WebGL builds. Worked with instructional-design, art and engineering teams; the hardware and products belong to BEDO.",
      links: [
        { label: "Engineering labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context:
        "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview. I built the Unity app, not the whole product.",
      tech: ["Unity 6", "C#", "WebGL", "AR Foundation", "AR Foundation Remote 2", "Photon", "PlayFab"],
      responsibility:
        "Runtime loading of 3D furniture and room models, Photon multiplayer room editing in WebGL, AR preview, PlayFab and backend integration.",
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
        "Everything: turning instructional requirements into interaction flows, scenes, hand-held tool interactions, 360° viewpoint switching, adapting 3D assets, headset builds.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth (freelance, one-week project)",
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
      label: "Closest match",
      title: "EV117 fuel-cell particle explanation",
      image: ev117Particles,
      meta: "WebGL · particles · exploded view",
      copy:
        "Moving particles and labelled flows show hydrogen, protons, electrons, oxygen and water inside a PEM fuel cell, next to an exploded module diagram and a guided explanation overlay, in a browser lab.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Production WebGL",
      title: "Ivris WebGL room editor",
      image: ivrisApp,
      meta: "WebGL · runtime 3D loading · Photon",
      copy:
        "Production Unity WebGL app with furniture and room models loaded at runtime and real-time multiplayer room editing.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Animated sequences",
      title: "MR109 / MR110 industrial stations",
      image: mr109RobotArm,
      meta: "WebGL · animated machinery · state-driven",
      copy:
        "Robot arms, conveyors and pneumatics animated through loading, storage, transport, laser and drilling sequences, with visual cause-and-effect feedback.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Medical-education content",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Quest 2 · 360° surgical-room viewer · sole developer",
      copy:
        "A multi-angle 360° surgical-room viewer, a viscosity lab with working hand-held tools, and an onboarding tutorial for first-time headset users.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
    {
      label: "Branded short-session experience",
      title: "Nescafe VR booth",
      image: nescafeSurfing,
      meta: "VR · event activation · timed score loop",
      copy: "Short branded game with collectibles, a timer and scoring, designed so first-time visitors understand it in seconds.",
      links: [{ label: "Video", href: nescafeVideo }],
    },
  ],
  requirementGroups: [
    {
      title: "What the role does",
      items: [
        {
          need: "Build and optimise Unity scenes for WebGL deployment",
          status: "direct",
          proof: "Unity WebGL in production at BEDO (training labs) and Ivris (room editor with runtime 3D loading).",
        },
        {
          need: "Timeline-driven scripted sequences, object animation and environmental effects",
          status: "adjacent",
          proof: "Exploded-view and machinery animations, particle explanations (BEDO). Timeline specifically: see the answer above.",
        },
        {
          need: "Combine UI, VFX, audio and logic into a cohesive, performant package",
          status: "partial",
          proof: "UI, logic and particle effects combined in BEDO labs; full gameplay package in the Nescafe booth. Audio not shown in my portfolio.",
        },
        {
          need: "Work with artists, designers and developers on a fast-moving creative team",
          status: "direct",
          proof: "Daily work with instructional-design, art and engineering teams at BEDO; shared codebase at Ivris.",
        },
        {
          need: "Debug and test across browsers and hardware",
          status: "direct",
          proof: "WebGL (BEDO, Ivris), Meta Quest 2 standalone (Tanta), Android / iOS (Ivris AR preview).",
        },
      ],
    },
    {
      title: "Requirements",
      items: [
        {
          need: "Strong Unity experience, 3+ years preferred",
          status: "partial",
          proof: "Continuous professional Unity since Dec 2023, a little under three years. See the note above.",
        },
        {
          need: "WebGL export constraints such as compression and memory",
          status: "direct",
          proof: "Runtime-loaded 3D content kept reliable in WebGL (Ivris); responsive simulations with live graphs in WebGL (BEDO).",
        },
        {
          need: "Unity Timeline and Animation systems",
          status: "partial",
          proof: "Animated equipment and process sequences in BEDO labs; Timeline specifically: see the answer above.",
        },
        {
          need: "C# scripting and modular architecture",
          status: "direct",
          proof: "All projects in C#; reusable patterns for guided steps, feedback and dashboards across BEDO labs; reusable VR patterns at Tanta.",
        },
        {
          need: "Attention to performance and browser compatibility",
          status: "direct",
          proof: "WebGL, Quest 2 standalone and mobile AR are all memory- and performance-constrained targets.",
        },
        {
          need: "Strong communication and working independently",
          status: "direct",
          proof: "Sole developer of the Tanta University suite; freelance delivery for Ivris and the one-week Nescafe booth.",
        },
      ],
    },
    {
      title: "Nice to have",
      items: [
        {
          need: "Shader Graph or custom shaders",
          status: "adjacent",
          proof: "Particle-based visual explanations at BEDO. Shader work is not something I show in my portfolio yet.",
        },
        {
          need: "DOTS or Addressables",
          status: "adjacent",
          proof: "Runtime loading of 3D models that are not baked into the build (Ivris). DOTS and Addressables not listed as production experience.",
        },
        {
          need: "Unity-adjacent tools such as Three.js",
          status: "adjacent",
          proof: "I prototype interactive behaviour in HTML with 2D vector graphics before building it in Unity. Three.js not used in production.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would work on your interactive WebGL experiences",
    intro: "To be adapted to your pipeline and the first brief, but this is how I would start:",
    steps: [
      {
        title: "Set the browser budget first",
        body: "Agree the target browsers and devices up front, including mobile if needed, then set budgets for download size, memory, textures and frame rate, and check early builds in each target browser rather than only at the end.",
      },
      {
        title: "Agree the behaviour before building",
        body: "For anything with interactive logic, I first build a quick HTML prototype with 2D vector graphics, where every changing value is driven by its real rule and shown next to it. Your creative team, and any medical reviewers, can confirm the behaviour there, before Unity time is spent.",
      },
      {
        title: "Authored sequences and interaction kept separate",
        body: "Scripted sequences (camera moves, object animation, effects) stay editable by artists, while C# handles interaction, state and UI. Changes in timing or wording then do not require code changes.",
      },
      {
        title: "Load in stages",
        body: "Keep the first load light and bring in heavier models and textures when they are needed, the same approach I used for runtime-loaded furniture at Ivris.",
      },
      {
        title: "Test on a fixed matrix before each delivery",
        body: "A short checklist of browsers and devices agreed with you, run before every handover, so review rounds focus on content, not on bugs.",
      },
    ],
    note: "Device targets, performance budgets and review steps come from your briefs and your clients.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time start",
      body: "About 15 hours per week: onboarding to your Unity setup, templates and review process, and a first small task you can judge.",
    },
    {
      when: "After the notice month",
      title: "Full engagement",
      body: "30 hours per week (around 120–130 hours per month), up to 40 hours per week in busy phases or before launches.",
    },
    {
      when: "Per project",
      title: "Delivery",
      body: "Milestones agreed with you for each brief, with WebGL builds you can review in your target browsers at every step.",
    },
  ],
  questions: [
    "Is this freelance role open to a contractor working remotely from Egypt, or does it require US residency or US work authorisation? The listing says United States and mentions 401(k) eligibility.",
    "What kinds of experiences will the first projects be (for example websites, congress or event installations, sales tools), and who is the audience?",
    "Which browsers and devices must the WebGL builds support, including mobile, and are there size or load-time limits from your clients or hosting?",
    "Which Unity version and render pipeline does the team use, and are there existing project templates or shared packages?",
    "How many hours per week do you expect, for how long, and which US hours should I overlap with the team?",
    "How do client and medical / legal review rounds work for interactive pieces, and how late can sequence timing or copy change?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the WebGL demos in a short call and talk about your first brief.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity WebGL / interactive simulation developer",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

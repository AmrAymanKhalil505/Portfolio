import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import ev117Particles from "../../assets/thumbnails/projects/EduLab/EV117 Particles.thumb.webp";
import pidGraph from "../../assets/thumbnails/projects/PID/graph photo.thumb.webp";
import mr109RobotArm from "../../assets/thumbnails/projects/MR109 Compact/MR109 Robot Arm.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import { caseStudyUrl, portfolioUrl } from "./index";
import type { Proposal } from "./types";

// Source: LinkedIn post "PlayCanvas (WebGL) Developer - Freelance" (North, Barcelona digital
// product studio, posted ~2026-10-02). The post asks for no specific application materials, so the
// answers cover what a studio needs to decide: PlayCanvas, Unity web work, AR, time zone, availability.

const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";

const proposal: Proposal = {
  slug: "north",
  client: "North",
  projectName: "Interactive WebGL and AR web experiences (PlayCanvas)",
  dateLabel: "October 2026",
  greeting: "Hola, equipo de North:",
  eyebrow: "Application · North · PlayCanvas (WebGL) developer, freelance",
  headline: "Interactive WebGL and AR experiences that run smoothly in the browser",
  lead: [
    "I build interactive 3D experiences that ship to the browser. The closest match to your role is my Unity implementation of the Ivris interior-design app: a production WebGL room editor with 3D furniture loaded at runtime and real-time multiplayer editing, plus an Android / iOS AR preview built with AR Foundation, connected to PlayFab and a hosted backend.",
    "Since October 2024 I have also been building Unity / WebGL training simulations of engineering equipment at BEDO, where every lab has to stay responsive in a browser. Below: how I match each requirement, what I have not done yet (PlayCanvas in production), my experience with dates, and how I would work with your designers.",
  ],
  quickFacts: [
    { label: "Rate", value: "[[TODO: freelance rate for North (EUR or USD, hourly or monthly)]]" },
    { label: "Start", value: "Part-time now, full engagement 1 month after award" },
    { label: "Hours", value: "30 h / week, up to 40 in busy phases" },
    { label: "Time zone", value: "Egypt · 1 h ahead of Spain" },
  ],
  answers: [
    {
      title: "PlayCanvas",
      original: "PlayCanvas (WebGL) Developer",
      body: [
        "I have not shipped a PlayCanvas project yet; my production web 3D work is Unity WebGL. The concepts carry over directly: entity-component scenes, scripts attached to entities, asset loading and memory budgets, draw-call and texture limits, and testing on real browsers and phones. What changes is the language (JavaScript / TypeScript instead of C#) and the tooling. Details in the note below.",
      ],
    },
    {
      title: "Unity for the web",
      original: "At least 3 years of experience with Unity, especially for web",
      body: [
        "Continuous professional Unity work since December 2023, much of it for the web: the Ivris WebGL room editor (Jun 2024 – Jun 2026) and the BEDO Unity / WebGL simulations (Oct 2024 – present). That is just under three years; see the note below.",
      ],
    },
    {
      title: "WebGL and browser optimisation",
      original: "Knowledge of WebGL and browser content optimisation",
      body: [
        "Keeping runtime-loaded 3D models reliable in WebGL and synchronising Photon multiplayer edits in the browser (Ivris); keeping simulation, live graphs and interaction responsive inside WebGL builds (BEDO PID and engineering labs).",
      ],
    },
    {
      title: "AR",
      original: "AR experience with ARFoundation, WebXR or similar",
      body: [
        "AR Foundation in production at Ivris: Android / iOS AR preview of furniture in the user's real room, developed with AR Foundation Remote 2, in Unity 6. I have not shipped WebXR yet.",
      ],
    },
    {
      title: "APIs, backend and Git",
      original: "Basic knowledge of APIs and backend integration · Familiarity with Git",
      body: [
        "At Ivris the Unity client was connected to PlayFab and to a Render-hosted backend for content and user workflows. I work in Git on shared codebases at BEDO and Ivris.",
      ],
    },
    {
      title: "Time zone and availability",
      original: "Residency in Spain or a similar time zone",
      body: [
        "I am in Egypt, one hour ahead of Spain, so my working day overlaps fully with yours.",
        "I have a one-month notice period at my current job. During that month I can already work about 15 hours per week (around 60 hours). After it: 30 hours per week (around 120–130 hours per month), up to 40 hours per week in busy phases.",
      ],
    },
    {
      title: "Rate",
      body: ["[[TODO: freelance rate and billing for North (currency, hourly or monthly, invoicing method)]]"],
    },
  ],
  candidNote: {
    title: "A transparent note on PlayCanvas and the 3 years",
    body: "Two things you should know now rather than discover later. First, I have not used PlayCanvas in production; all my shipped browser 3D work is Unity WebGL in C#. I would need ramp-up time on the PlayCanvas engine, editor and JavaScript / TypeScript scripting, and I would rather start on a small, well-defined first task so you can judge the result yourselves. Second, my continuous professional Unity work started in December 2023, just under the three years you ask for. What I bring alongside it: production WebGL with runtime 3D loading and multiplayer, production AR Foundation, backend integration, and daily work on keeping interactive 3D responsive in the browser.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity / WebGL training simulations of BEDO engineering trainers: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics and industrial stations, PID control labs, fluid-mechanics labs.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "Data visualisation"],
      responsibility:
        "Simulation logic, interactive 3D views, animated visual explanations, measurement UI and live graphs, WebGL builds. Worked with instructional-design, art and engineering teams; the hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "Engineering labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview. I built the Unity app, not the whole product.",
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
      context: "Meta Quest 2 training suite: headset onboarding, 360° surgical-room viewer, interactive viscosity lab.",
      tech: ["Unity", "C#", "Meta Quest 2", "Auto Hand", "360 video"],
      responsibility: "Everything from interaction design to scenes, hand-held tool interactions and headset builds.",
      links: [{ label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") }],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth (freelance)",
      context: "Short-session branded VR game for an event booth.",
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
      title: "Ivris WebGL editor + AR preview",
      image: ivrisApp,
      meta: "WebGL · AR Foundation · Photon · PlayFab",
      copy:
        "Production browser 3D with furniture loaded at runtime, real-time multiplayer room editing, and a mobile AR preview of the same content in the user's room.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Animated visual explanation",
      title: "EV117 fuel-cell particle view",
      image: ev117Particles,
      meta: "WebGL · particles · labelled flows",
      copy:
        "Moving particles and labelled flows that show what happens inside a fuel cell, built to run in a browser lab.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Responsive in the browser",
      title: "PID virtual labs",
      image: pidGraph,
      meta: "WebGL · live graphs · interaction",
      copy:
        "Simulation, live response graphs and user input running together in WebGL without the experience stalling.",
      links: [{ label: "Case study", href: caseStudyUrl("pid-control-virtual-labs-suite") }],
    },
    {
      label: "3D interaction and animation",
      title: "MR109 / MR110 industrial stations",
      image: mr109RobotArm,
      meta: "Animated machinery · state-driven feedback",
      copy:
        "Robot arms, conveyors and pneumatics animated from their process states, with visual cause-and-effect feedback.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Immersive brand experience",
      title: "Nescafe VR booth",
      image: nescafeSurfing,
      meta: "VR · event activation",
      copy: "Short-session branded game designed so first-time visitors understand it in seconds.",
      links: [{ label: "Video", href: nescafeVideo }],
    },
  ],
  requirementGroups: [
    {
      title: "Responsibilities",
      items: [
        {
          need: "Interactive WebGL experiences in PlayCanvas that perform well across browsers and mobile devices",
          status: "partial",
          proof: "Interactive WebGL in production with Unity (Ivris, BEDO). PlayCanvas itself not yet used in production.",
        },
        {
          need: "Optimising code for smooth performance on different devices",
          status: "direct",
          proof: "WebGL builds at BEDO and Ivris; Meta Quest 2 standalone builds at Tanta; mobile AR at Ivris.",
        },
        {
          need: "Working with designers and developers to bring UX / UI into the build",
          status: "direct",
          proof: "BEDO: built interfaces and flows with instructional-design and art teams; Ivris: shared Unity and backend codebase.",
        },
        {
          need: "Testing, debugging and optimising for stability and performance",
          status: "direct",
          proof: "Runtime-loaded models and Photon sync kept reliable in WebGL (Ivris); responsive simulations with live graphs (BEDO).",
        },
        {
          need: "Working independently to deadlines",
          status: "direct",
          proof: "Sole developer of the Tanta University suite; freelance delivery for Ivris and the one-week Nescafe booth.",
        },
      ],
    },
    {
      title: "Requirements",
      items: [
        {
          need: "3+ years of Unity, especially for web",
          status: "partial",
          proof: "Continuous professional Unity since Dec 2023, just under three years; web work at Ivris and BEDO. See the note above.",
        },
        {
          need: "WebGL and browser content optimisation",
          status: "direct",
          proof: "Unity WebGL in production at Ivris and BEDO.",
        },
        {
          need: "AR with AR Foundation, WebXR or similar",
          status: "direct",
          proof: "AR Foundation and AR Foundation Remote 2 in production at Ivris (Unity 6). WebXR not yet used.",
        },
        {
          need: "C# and good coding practice",
          status: "direct",
          proof: "All projects above are C#.",
        },
        {
          need: "APIs and backend integration",
          status: "direct",
          proof: "PlayFab and a Render-hosted backend connected to the Unity client at Ivris.",
        },
        { need: "Git", status: "direct", proof: "Team development at BEDO and Ivris." },
        {
          need: "Independent problem solving and good team communication",
          status: "direct",
          proof: "Sole developer at Tanta; cross-team work with instructional design and art at BEDO.",
        },
      ],
    },
    {
      title: "Nice to have",
      items: [
        {
          need: "Advanced 3D interaction and animation",
          status: "direct",
          proof: "Runtime furniture placement and editing (Ivris); animated machinery and particle explanations (BEDO).",
        },
        {
          need: "Shaders and advanced visual effects",
          status: "adjacent",
          proof: "Particle-based visual explanations at BEDO. Custom shader work is not something I show in my portfolio yet.",
        },
        {
          need: "Digital marketing, eCommerce or immersive experiences",
          status: "adjacent",
          proof: "Nescafe branded VR booth (immersive activation); Ivris app supporting a customer interior-design service.",
        },
        {
          need: "Residency in Spain or a similar time zone",
          status: "direct",
          proof: "Egypt, one hour ahead of Spain.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would work on your PlayCanvas projects",
    intro: "To be adapted to your pipeline and the first brief, but this is how I would start:",
    steps: [
      {
        title: "Ramp up on your stack first",
        body: "Get familiar with your PlayCanvas project structure, editor workflow, script conventions and Git setup, starting with a small, well-defined task so you can review my code early.",
      },
      {
        title: "Agree the behaviour before building",
        body: "For anything with interactive logic, I first build a quick HTML prototype with 2D vector graphics where every changing value is driven by its real rule and shown next to it. Designers and developers agree on the behaviour there, before engine time is spent.",
      },
      {
        title: "Set a budget per device",
        body: "Agree target devices and browsers up front, then set budgets for download size, textures, draw calls and memory, and check them on real phones throughout, not only at the end.",
      },
      {
        title: "Load content when it is needed",
        body: "Keep the first load light and stream heavier models and textures afterwards, the same approach I used for runtime-loaded furniture at Ivris.",
      },
      {
        title: "AR as a layer on the same content",
        body: "Reuse the same 3D content and interaction logic for the AR mode, with a clear fallback for devices or browsers that do not support it.",
      },
    ],
    note: "Device targets, performance budgets and AR support rules come from your briefs and your clients.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time start",
      body: "About 15 hours per week: onboarding to your PlayCanvas pipeline and Git, a first small task, and getting to know your designers' workflow.",
    },
    {
      when: "After the notice month",
      title: "Full engagement",
      body: "30 hours per week (around 120–130 hours per month), up to 40 hours per week in busy phases or before launches.",
    },
    {
      when: "Per project",
      title: "Delivery",
      body: "Milestones and deadlines agreed with you for each brief, with builds you can test on your target devices at every step.",
    },
  ],
  questions: [
    "Is this ongoing work across several client projects, or one specific project first? What does the first brief look like?",
    "The post is titled freelance but lists full-time hours. How many hours per week do you expect, and for how long?",
    "Which devices and browsers must the experiences support, and do you have performance targets (load size, frame rate)?",
    "For AR, are you using WebXR, a third-party web AR SDK, or native apps with AR Foundation?",
    "Do you use the PlayCanvas Editor or the engine-only workflow, and JavaScript or TypeScript?",
    "Is residency in Spain a requirement for the contract, or is working from a close time zone enough?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the WebGL and AR demos in a short call and talk about your first brief.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity WebGL / AR developer",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

import ev117Particles from "../../assets/thumbnails/projects/EduLab/EV117 Particles.thumb.webp";
import laminarStreamlines from "../../assets/thumbnails/projects/EduLab/Laminar 02.thumb.webp";
import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import nescafeWaterBeach from "../../assets/thumbnails/projects/Nescafe/Nescafe Water Beach.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: Djinni post "Unity Technical Artist" (Clarisign, posted 2026-10-04, full remote worldwide,
// full-time). Every answer below maps to an item the post asks applicants to include.

const atmoVideo = "https://youtu.be/eWFaHaYUy44";
const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";

const proposal: Proposal = {
  slug: "clarisign",
  client: "Clarisign",
  projectName: "Football + cognitive-training mobile game",
  dateLabel: "October 2026",
  greeting: "Hello Clarisign team,",
  eyebrow: "Application · Clarisign · Unity Technical Artist",
  headline: "Unity developer for the visuals and mobile performance of your football cognitive-training game",
  lead: [
    "Your game sits where I have spent most of my career: Unity experiences that teach something, built so the visuals explain what is happening. The closest matches are Atmosphere Protector, a Unity mobile educational game for Android and iOS, and the Nescafe VR surfing booth, a short-session arcade game with timed scoring and branded sand and water environments.",
    "I come to the technical-artist role from the engineering side: almost three years of professional Unity and C#, shipping to mobile, standalone VR and WebGL, all targets where every draw call and texture counts. Below I answer what your post asks for, list my experience with dates and my own role, and say plainly where I am strong and where I would be growing.",
  ],
  quickFacts: [
    { label: "Salary expectation", value: "[[TODO: monthly salary expectation in USD for this full-time role]]" },
    { label: "Start", value: "1 month after offer (notice period)" },
    { label: "Unity", value: "Professional since Dec 2023 · Unity 6" },
    { label: "Time zone", value: "Egypt · 1 h ahead of CET" },
  ],
  answers: [
    {
      title: "Portfolio and brief introduction",
      original: "A portfolio and a brief introduction",
      body: [
        "I am a Unity engineer from Egypt. Since October 2024 I have been Senior Unity Engineer at BEDO, building Unity / WebGL simulations of engineering trainers. Before that I was the sole developer of a Meta Quest 2 training suite at Tanta University, and from 2024 to 2026 I built the Unity app for Ivris, a cross-platform interior-design product with mobile AR. My portfolio for this application: " +
          portfolioUrl +
          "/",
      ],
    },
    {
      title: "Examples of my Unity work and my specific contribution",
      original: "Examples of your Unity work and your specific contributions",
      body: [
        "Each project below links to a video or case study and states what I personally built versus the wider team. Company products and hardware belong to their owners; what I show is my Unity implementation.",
      ],
    },
    {
      title: "Visual or performance improvements I delivered",
      original: "Any visual or performance improvements you delivered",
      body: [
        "Visual: the EV117 particle view, which makes hydrogen, protons, electrons and water inside a PEM fuel cell visible; laminar-flow streamlines for a fluid-mechanics lab; exploded-view animations of equipment; and the sand and water environments of the Nescafe booth game.",
        "Performance: all of my work ships to constrained targets: Meta Quest 2 standalone, Android / iOS, and Unity WebGL in the browser, where runtime-loaded 3D models had to stay reliable on both web and mobile at Ivris. [[TODO: one or two concrete optimisation examples you did (what was slow, what you changed, before/after if you know it)]]",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on the technical-artist profile",
    body: "My title so far has been Unity engineer, not technical artist. My portfolio shows in-engine visual work (particles, flow visualisation, environments, animated equipment) and a lot of C# and platform work, but it does not show dedicated shader authoring, URP lighting setups, or a shipped mobile game with a published profiling pass. I have almost three years of continuous professional Unity work, which meets your experience range, but not as a dedicated technical artist. What I would bring is the engineer's half of the role from day one: profiling, C# tools and asset-pipeline automation, and close work with gameplay programmers. The lighting and shader depth I would build on your project. I prefer you know this now rather than find it out in the interview.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education · Senior Unity Engineer",
      context:
        "Training simulations of BEDO engineering trainers: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics and industrial stations, PID control labs, fluid-mechanics labs.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "Particles and flow visualisation", "Exploded-view animation"],
      responsibility:
        "Simulation logic and equipment states, visual explanations of hidden processes, measurement and monitoring UI, WebGL builds. Worked with instructional-design, art and mechatronics teams; the hardware and product belong to BEDO.",
      links: [
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris · Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "WebGL", "Android", "iOS", "AR Foundation", "Photon", "PlayFab"],
      responsibility:
        "I built the Unity app, not the whole product: runtime loading of 3D furniture and room models across WebGL and mobile, Photon multiplayer room editing, AR preview, PlayFab and backend integration.",
      links: [
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
        { label: "Video", href: ivrisVideo },
      ],
    },
    {
      period: "Dec 2023 – Oct 2024",
      title: "Tanta University · Unity VR developer (sole developer)",
      context:
        "Meta Quest 2 training suite: headset onboarding tutorial, multi-angle 360° surgical-room viewer, interactive viscosity lab.",
      tech: ["Unity", "C#", "Meta Quest 2", "Android", "Auto Hand", "360 video"],
      responsibility:
        "Everything: interaction flows, scenes, adapting 3D assets for the headset, hand-held tools (working calculator and stopwatch), and standalone Quest builds, which run on a mobile GPU.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee · VR surfing booth (freelance)",
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
      label: "Closest match: mobile learning game",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Unity · Android / iOS · educational game",
      copy:
        "Mobile game for children: fly an airplane, collect pollution clouds, protect the atmosphere's health and unlock upgrades. Gameplay that carries a learning goal, much like football that trains cognition.",
      links: [
        { label: "Video", href: atmoVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "Arcade game feel",
      title: "Nescafe VR surfing booth",
      image: nescafeWaterBeach,
      meta: "Sand and water routes · timed score",
      copy:
        "Short-session game with several environment routes, collectibles and a timer, built so first-time visitors understand it in seconds and get fast visual feedback.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "Visual effects that explain",
      title: "EV117 particle view",
      image: ev117Particles,
      meta: "Particles · guided lab · WebGL",
      copy:
        "Particle visualisation of what happens inside a PEM fuel cell: hydrogen, protons, electrons, oxygen and water, with live readings beside it.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Flow visualisation",
      title: "Laminar-flow streamlines",
      image: laminarStreamlines,
      meta: "Fluid mechanics · real-time visuals",
      copy:
        "Streamline visualisation for a fluid-mechanics lab, part of the BEDO virtual labs: turning flow that is hard to see into something learners can read.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Mobile and asset pipeline",
      title: "Ivris AR and WebGL app",
      image: ivrisApp,
      meta: "Android / iOS · runtime 3D loading",
      copy: "Unity app that loads furniture and room models at runtime and has to stay reliable on both browser and mobile targets.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Responsibilities",
      items: [
        {
          need: "Improve scene visuals through lighting, materials, shaders and effects",
          status: "partial",
          proof: "In-engine effects and visualisation (EV117 particles, laminar streamlines, exploded views, booth environments). Dedicated lighting and shader work is not shown in my portfolio yet; see the note above.",
        },
        {
          need: "Integrate artwork into Unity and set up reliable asset pipelines",
          status: "adjacent",
          proof: "Adapted 3D assets for Quest 2 at Tanta; runtime 3D model loading across WebGL and mobile at Ivris; 3D models and animations integrated into the BEDO labs with the art team.",
        },
        {
          need: "Reusable visual setups for consistency across minigames",
          status: "adjacent",
          proof: "ScriptableObject-based architecture across the BEDO simulations; reusable VR patterns for instruction and tools at Tanta.",
        },
        {
          need: "Profile scenes on mobile devices and fix rendering bottlenecks",
          status: "adjacent",
          proof: "Standalone Quest 2 (mobile GPU), Android / iOS and WebGL builds. A full mobile rendering profiling pass is something I would deliver here.",
        },
        {
          need: "Create small tools and automate repetitive tasks",
          status: "direct",
          proof: "C# is my main language in every project above; the tools I would build first are listed in the approach below.",
        },
        {
          need: "Work with engineers to keep gameplay responsive as visual quality rises",
          status: "direct",
          proof: "I am an engineer; at BEDO I work daily between art, instructional-design and engineering teams.",
        },
      ],
    },
    {
      title: "Requirements",
      items: [
        {
          need: "Practical experience as a technical artist in Unity",
          status: "partial",
          proof: "Almost 3 years of professional Unity, including visual and effects work, but with an engineer title.",
        },
        {
          need: "Portfolio with strong visual judgment and finished in-engine work",
          status: "direct",
          proof: "Finished in-engine projects with videos: Atmosphere Protector, Nescafe booth, EV117, Tanta suite, Ivris.",
        },
        {
          need: "Solid understanding of Unity rendering, lighting, materials and shaders",
          status: "partial",
          proof: "Working knowledge from shipping to Quest, mobile and WebGL; deeper lighting and shader authoring is the area I would grow in.",
        },
        {
          need: "Diagnose draw calls, overdraw, textures and memory issues",
          status: "adjacent",
          proof: "These are the limits I work within on Quest 2 standalone, mobile AR and WebGL.",
        },
        {
          need: "Comfortable writing C# for tools and workflow improvements",
          status: "direct",
          proof: "Every project above is C#.",
        },
        {
          need: "Communicate well with both artists and engineers",
          status: "direct",
          proof: "Cross-team work at BEDO (art, instructional design, mechatronics); client-facing work at Ivris and Nescafe.",
        },
      ],
    },
    {
      title: "Nice to have",
      items: [
        {
          need: "Unity URP",
          status: "partial",
          proof: "[[TODO: say whether any of your projects used URP]]",
        },
        {
          need: "Mobile releases",
          status: "adjacent",
          proof: "Android / iOS builds for Atmosphere Protector and the Ivris AR app; Android builds for Quest 2.",
        },
        {
          need: "3D content creation tools",
          status: "partial",
          proof: "Adapted 3D assets for Unity at Tanta. [[TODO: name the 3D tools you use, e.g. Blender, if any]]",
        },
      ],
    },
  ],
  approach: {
    title: "How I would start on your game",
    intro:
      "To be validated against your current project and devices, but this is how I would spend the first weeks:",
    steps: [
      {
        title: "Measure before changing anything",
        body: "Pick the lowest device you support, profile each minigame with the Unity Profiler, Frame Debugger and Memory Profiler, and write down frame time, draw calls, overdraw hot spots and texture memory. Every later change is judged against that baseline.",
      },
      {
        title: "One shared visual kit for all minigames",
        body: "A shared set of lighting setups, material library and post-processing profiles, packaged as prefabs and ScriptableObjects so a new minigame starts already looking like the game and stays inside the performance budget.",
      },
      {
        title: "Automate the asset pipeline",
        body: "Small C# editor tools: texture and model import presets applied automatically, checks that flag oversized textures or missing atlases, and one-click setup of a new minigame scene. Artists keep working the same way; mistakes are caught on import.",
      },
      {
        title: "Responsiveness first, for a cognitive-training game",
        body: "In reaction and attention exercises, a dropped frame changes what the player sees and when. I would agree a frame-time budget with your engineers and treat it as a hard limit when raising visual quality.",
      },
      {
        title: "Prototype new minigame logic before building it",
        body: "Where a new exercise has rules to agree on, I build it first as a quick HTML prototype with 2D vector graphics, with every changing value driven by its rule and shown on screen, so designers and engineers agree on the behaviour before Unity time is spent.",
      },
    ],
    note: "Target devices, art style and current bottlenecks come from your team; I would not change the look of the game without your art direction.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time start",
      body: "About 15 hours per week while I serve my one-month notice: repository and pipeline onboarding, first profiling baseline on your target devices.",
    },
    {
      when: "First weeks full-time",
      title: "Quick wins",
      body: "Fix the worst bottlenecks the baseline shows, set up import presets and the first editor tools.",
    },
    {
      when: "Next 1–2 months",
      title: "Shared visual kit",
      body: "Lighting, material and effect setups reused across minigames, agreed with your art lead, with the frame-time budget checked on device.",
    },
    {
      when: "Ongoing",
      title: "Per-minigame polish",
      body: "Visual polish and performance checks for each new minigame as it is built, alongside the engineers.",
    },
  ],
  questions: [
    "Which devices are the minimum spec, and is the game Android, iOS or both?",
    "Is the project already on URP, and which Unity version?",
    "Is there an art lead or art direction document I would work under, and who makes the 3D and 2D assets?",
    "What are the biggest visual or performance problems today, the ones that made you open this role?",
    "How many minigames exist now, and how different are their scenes and cameras?",
    "Do the cognitive-training exercises measure reaction time, and if so, how strict is the timing requirement?",
  ],
  closing: {
    title: "Next step",
    body: "Reply on Djinni and I will gladly walk you through the demos in a short call and go through any part of this in more detail. [[TODO: confirm you would take this full-time (40 h/week) role after your BEDO notice month]]",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity developer · visuals, simulation and mobile",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

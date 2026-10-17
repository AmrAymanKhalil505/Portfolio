import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import ev117Monitoring from "../../assets/thumbnails/projects/EduLab/EV117 save screen.thumb.webp";
import pidGraph from "../../assets/thumbnails/projects/PID/graph photo.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: DOU.ua vacancy "Unity developer" (Dragons Lake / Room 8 Group, posted 2026-09-16,
// https://jobs.dou.ua/companies/dragonlake/vacancies/373596/). The post lists requirements,
// nice-to-haves and responsibilities but asks for no specific application materials, so the
// answers below follow its requirement list in order.

const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const atmosphereVideo = "https://youtu.be/eWFaHaYUy44";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";

const proposal: Proposal = {
  slug: "dragonslake",
  client: "Dragons Lake",
  projectName: "Unity Developer (multiplatform, Unity + web)",
  dateLabel: "October 2026",
  greeting: "Hello Dragons Lake team,",
  eyebrow: "Application · Dragons Lake (Room 8 Group) · Unity Developer",
  headline: "Unity / C# developer who ships to web, mobile and headset, with UI at the centre",
  lead: [
    "Your role combines Unity gameplay and UI work with web development and multiplatform delivery. That combination is what I do day to day: I build Unity applications that ship as WebGL in the browser, as Android / iOS apps and as Meta Quest 2 builds, and most of my features are UI-heavy (monitoring dashboards, editors, guided instructions).",
    "Below I go through your requirements in order, list my experience with dates and my own role, and say plainly where I fall short of the post (console porting, ECS, production React depth), so you can judge the fit quickly.",
  ],
  quickFacts: [
    { label: "Unity / C#", value: "Professionally since Dec 2023" },
    { label: "Platforms shipped", value: "WebGL · Android / iOS · Quest 2" },
    { label: "Start", value: "1 month after offer (notice period)" },
    { label: "Time zone", value: "Egypt · 1 h ahead of CET" },
  ],
  answers: [
    {
      title: "Unity and C# experience",
      original: "3+ years of commercial experience in C# and Unity development",
      body: [
        "Continuous professional Unity / C# work since December 2023: Unity VR developer at Tanta University (Dec 2023 – Oct 2024), Unity and AR developer for Ivris (freelance, Jun 2024 – Jun 2026) and Senior Unity Engineer at BEDO Innovating Education (Oct 2024 – present). That is just under three years; the full table with technologies and my responsibility is below.",
      ],
    },
    {
      title: "Web development (JavaScript, React.js)",
      original: "Web development experience, especially JavaScript and React.js",
      body: [
        "On the web side of Unity: production Unity WebGL builds at BEDO and Ivris, including a real-time multiplayer room editor running in the browser. Before Unity work on a simulation I build an HTML prototype with 2D vector graphics, so browser-side logic is part of my normal process.",
        "JavaScript / React: I completed the Coursera specialization Full-Stack Web Development with React (HKUST, 2021: React, React Native, Node.js, Express, MongoDB). At Ivris I used OneJS (JavaScript / TypeScript UI inside Unity), and this portfolio is a React + TypeScript site. I build that web code with heavy help from AI coding tools, so I would not present myself as a React specialist.",
      ],
    },
    {
      title: "UI development",
      original: "UI development experience",
      body: [
        "UI is a large part of every project I ship: live monitoring and measurement screens and response graphs in BEDO's lab simulations, a block-based command editor students use to build and validate robot scripts, the room-editing interface of the Ivris WebGL app, and Arabic instruction screens in a children's mobile game.",
      ],
    },
    {
      title: "English",
      original: "Intermediate+ English",
      body: ["I work in English every day; my B.Sc. studies and my bachelor thesis were in English. I have no formal test score."],
    },
    {
      title: "Start date and salary expectation",
      body: [
        "I am currently employed with a one-month notice period, so I can start one month after an offer.",
        "Salary expectation: [[TODO: salary/rate expectation]]",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on where I don't yet match the post",
    body: "Three things you should know up front. My professional Unity experience starts in December 2023, just under the three years you list. I have not ported to or developed for PlayStation, Xbox or Switch, and I have not used Unity ECS or Coherent in production; my multiplatform experience is WebGL, Android / iOS and Meta Quest 2 (Android-based), with the memory and performance constraints those bring. My web experience is mostly on the Unity WebGL side rather than years of React product work. What I bring is UI-heavy Unity development across several platforms, real-time state and gameplay logic, and experience turning the behaviour of real engineering equipment into working software. I prefer you know this now rather than discover it in an interview.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity training simulations of BEDO engineering trainers: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics and industrial stations, PID control labs, fluid-mechanics labs.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "ScriptableObject architecture", "Dependency injection"],
      responsibility:
        "Simulation logic and equipment states, guided experiment steps, monitoring and measurement UI, response graphs, WebGL builds, and migration of projects to Unity 6. Worked with instructional-design, art and mechatronics teams; the hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "PID labs case study", href: caseStudyUrl("pid-control-virtual-labs-suite") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview. I built the Unity app, not the whole product.",
      tech: ["Unity 6", "C#", "WebGL", "Android", "iOS", "AR Foundation", "Photon", "PlayFab"],
      responsibility:
        "Runtime loading of 3D furniture and room models, Photon multiplayer room editing in WebGL, editor UI, AR preview on mobile, PlayFab and backend integration.",
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
        "Everything: interaction flows, scenes, in-world UI, hand-held tools (a working calculator and stopwatch), adapting 3D assets, and headset builds and optimisation.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth (freelance)",
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
      label: "Web + multiplayer",
      title: "Ivris WebGL room editor",
      image: ivrisApp,
      meta: "WebGL · Photon · Android / iOS AR",
      copy:
        "Production Unity WebGL app with real-time multiplayer editing and 3D models loaded at runtime, plus a mobile AR preview of the same content.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Gameplay",
      title: "Nescafe VR surfing game",
      image: nescafeSurfing,
      meta: "Gameplay loop · scoring · timer",
      copy: "Short-session game with movement, collectibles, a timer and scoring, designed so first-time players understand it in seconds.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "Mobile game",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Android / iOS · Arabic UI",
      copy:
        "Children's educational mobile game: airplane movement, pollution collection, an atmosphere-health system, upgrades and localized Arabic instruction screens.",
      links: [
        { label: "Video", href: atmosphereVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "Data-driven UI",
      title: "PID virtual labs",
      image: pidGraph,
      meta: "Live graphs · tuning UI · WebGL",
      copy: "Tuning controls and response graphs that update in real time as students change controller values across several trainer modules.",
      links: [{ label: "Case study", href: caseStudyUrl("pid-control-virtual-labs-suite") }],
    },
    {
      label: "Monitoring UI",
      title: "EV117 fuel-cell lab",
      image: ev117Monitoring,
      meta: "Monitoring · guided steps",
      copy: "Software-monitor view of a fuel-cell vehicle lab: hydrogen flow and pressure, voltage, current, battery and efficiency readings, with a guided instruction overlay and screen-save workflow.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "State logic + editor UI",
      title: "MR109 / MR110 industrial training",
      image: youtubeThumbnail("R4gS25C_wGs"),
      meta: "Process states · command editor",
      copy:
        "Station behaviour driven by ready / running / done / emergency states, and a block-based editor where students build and validate robot command scripts.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Requirements",
      items: [
        {
          need: "3+ years of C# and Unity development",
          status: "partial",
          proof: "Continuous professional Unity / C# since Dec 2023, just under three years. See the note above.",
        },
        {
          need: "Strong Unity and C# skills",
          status: "direct",
          proof: "Every project above is Unity / C#; ScriptableObject architecture and dependency injection at BEDO; Unity 6 in production.",
        },
        {
          need: "Web development, especially JavaScript and React.js",
          status: "partial",
          proof: "Unity WebGL in production (BEDO, Ivris) and HTML prototypes before Unity work. Coursera React specialization (2021), OneJS UI in Unity at Ivris and this React + TypeScript portfolio, all AI-assisted; not front-end specialist work.",
        },
        {
          need: "UI development",
          status: "direct",
          proof: "Monitoring dashboards and live graphs (BEDO), command editor (MR110), room-editor UI (Ivris), Arabic instruction screens (Atmosphere Protector).",
        },
        {
          need: "Reading and working with technical documentation",
          status: "direct",
          proof: "BEDO simulations are built from the behaviour of real engineering trainers, worked out with mechatronics and instructional-design engineers.",
        },
        {
          need: "Git / GitLab",
          status: "direct",
          proof: "Git in team development at BEDO and on a shared Unity and backend codebase at Ivris.",
        },
        {
          need: "Intermediate+ English",
          status: "direct",
          proof: "I work in English every day; my B.Sc. studies and my bachelor thesis were in English. I have no formal test score.",
        },
        {
          need: "Collaborative work in multidisciplinary teams",
          status: "direct",
          proof: "Day-to-day work with instructional-design, art and mechatronics teams at BEDO.",
        },
      ],
    },
    {
      title: "Responsibilities",
      items: [
        {
          need: "Develop and port games and apps across console, mobile, web, PC and Mac",
          status: "partial",
          proof: "Shipped WebGL, Android / iOS and Meta Quest 2 builds. No console (PlayStation, Xbox, Switch) work yet.",
        },
        {
          need: "Implement features and gameplay in Unity / C#",
          status: "direct",
          proof: "Gameplay loops in Nescafe and Atmosphere Protector; interaction and state logic across all BEDO and Tanta projects.",
        },
        {
          need: "Build and maintain UI and user-facing features",
          status: "direct",
          proof: "UI-heavy features in every project above; currently carrying BEDO projects through the Unity 6 migration.",
        },
        {
          need: "Write and review technical documentation",
          status: "adjacent",
          proof: "My HTML prototypes double as a reviewable spec: each value shown next to the equation that drives it, agreed with the instructional-design team before Unity work.",
        },
        {
          need: "Architecture discussions, design and code reviews, estimation",
          status: "adjacent",
          proof: "Architecture choices (ScriptableObjects, dependency injection) in team projects at BEDO; sole developer responsible for the whole Tanta University suite.",
        },
      ],
    },
    {
      title: "Nice to have",
      items: [
        {
          need: "Node.js",
          status: "adjacent",
          proof: "Integrated the Unity client with PlayFab and a hosted backend at Ivris; I have not built Node.js services in production.",
        },
        {
          need: "Coherent for Unity3D or another UI tool",
          status: "adjacent",
          proof: "Not used. My UI work is inside Unity; Coherent's HTML / JS approach is where my web-side experience would help.",
        },
        {
          need: "ECS for Unity",
          status: "commitment",
          proof: "Not used in production. I would ramp up on your codebase's ECS usage during onboarding.",
        },
        {
          need: "Profiling and optimisation (CPU, GPU, memory)",
          status: "direct",
          proof: "Meta Quest 2 standalone and Unity WebGL, both memory- and performance-constrained targets.",
        },
        {
          need: "Porting or developing for Xbox / PlayStation",
          status: "commitment",
          proof: "No console experience yet. Platform-specific work I have done: WebGL, Android / iOS and Quest builds and their constraints.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would work in a co-development and porting team",
    intro:
      "This depends on the project and the publisher's process, but this is how I would expect to contribute in the first months:",
    steps: [
      {
        title: "Learn the codebase before changing it",
        body: "Read the project's architecture and documentation, build and run it on every target I'm assigned, and take small, reviewable tasks first so my code matches the team's conventions.",
      },
      {
        title: "Keep platform differences in one place",
        body: "Input, storage, resolution and platform services behind thin per-platform layers, so gameplay and UI code stays shared. This is how I kept one codebase working across WebGL and mobile AR at Ivris.",
      },
      {
        title: "UI built for every screen and input",
        body: "Layouts that adapt to resolutions and safe areas, and navigation that works with touch, mouse and gamepad, checked on each target, not only in the editor.",
      },
      {
        title: "Profile on the device, not the editor",
        body: "Measure CPU, GPU and memory on the target build early; WebGL and Quest taught me that editor numbers are not the real ones.",
      },
      {
        title: "Prototype feature logic when it needs sign-off",
        body: "Where a feature's rules need agreement first, I build a quick HTML prototype with 2D vector graphics, with every changing value driven by its real equation and shown next to it, so the team can review the behaviour before Unity time is spent.",
      },
    ],
    note: "Console platform specifics (SDKs, certification requirements) are new to me and I would learn them from your senior developers and documentation.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Offer and notice period",
      body: "One-month notice period at my current job after an offer; full-time start at the end of that month.",
    },
    {
      when: "First 2 weeks",
      title: "Onboarding",
      body: "Repository, build pipeline and target platforms; first small tasks and code reviews.",
    },
    {
      when: "First 1–3 months",
      title: "Features and UI",
      body: "Gameplay and UI features end to end, with documentation, and ramping up on console specifics and ECS where the project uses them.",
    },
  ],
  questions: [
    "Which project and platforms would this role start on, and is it porting, co-development or a new build?",
    "How much of the day-to-day work is React / JavaScript versus Unity, and where does it sit (tools, web builds, UI layer)?",
    "Does the project use Coherent or another HTML-based UI for Unity, or Unity's own UI systems?",
    "How is ECS used in your Unity projects, and would I work with it from the start?",
    "How do code review and estimation work in your teams, and who would I work with most closely?",
  ],
  closing: {
    title: "Next step",
    body: "Reply through DOU and I will gladly walk you through the demos in a short call.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity developer (simulation, web, XR)",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

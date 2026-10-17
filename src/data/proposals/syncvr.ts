import mr109RobotArm from "../../assets/thumbnails/projects/MR109 Compact/MR109 Robot Arm.thumb.webp";
import ev117Particles from "../../assets/thumbnails/projects/EduLab/EV117 Particles.thumb.webp";
import pidPressure from "../../assets/thumbnails/projects/PID/MPC 100 Pressure Far.thumb.webp";
import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: LinkedIn post "Medior 3D XR Developer" (SyncVR Medical, Education team, full-time,
// listed for Serbia, posted 2026-10-12, ~59 applicants):
// https://rs.linkedin.com/jobs/view/medior-3d-xr-developer-at-syncvr-medical-4475681357
// Read through a summarising fetch, so the "original" lines below are close paraphrases;
// re-check them against the live post before sending. The post does not say whether the role
// is remote or open outside Serbia, and it asks for no specific application items, so the
// answers cover its responsibilities and requirements in the post's own order.

const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";

const proposal: Proposal = {
  slug: "syncvr",
  client: "SyncVR Medical",
  projectName: "Medior 3D XR Developer (Education team)",
  dateLabel: "October 2026",
  greeting: "Hello SyncVR team,",
  eyebrow: "Application · SyncVR Medical · Medior 3D XR Developer",
  headline: "Unity XR developer for procedure-driven medical training on Quest",
  lead: [
    "Your Education team turns medical protocols into reusable Unity training modules on standalone headsets. That is the shape of my work: I build Unity training simulations where a procedure runs as states and steps, the equipment reacts to what the learner does, and the same logic is reused across many modules. The closest match is the Meta Quest 2 training suite I built as the sole developer at Tanta University, which included a multi-angle 360° surgical-room viewer for medical observation and a hands-on lab with working hand-held tools.",
    "Since October 2024 I have built training simulations of real engineering equipment at BEDO, where procedures, guided steps and process states drive everything on screen. Below: my experience with dates and my own role, how I match each line of your post, and how I would approach clinical procedure modules.",
  ],
  quickFacts: [
    { label: "Role", value: "Full-time · location to confirm" },
    { label: "Start", value: "1 month after offer (notice period)" },
    { label: "Test headset", value: "Meta Quest 2 (own)" },
    { label: "Time zone", value: "Egypt · 1 h ahead of CET" },
  ],
  answers: [
    {
      title: "Where I am based",
      original: "Location: Serbia (workplace type not stated in the post)",
      body: [
        "I live and work in Egypt, one hour ahead of Central European Time, so my working day overlaps fully with the Netherlands and Serbia. Your post does not say whether this role is remote or tied to a country, so this is my first question below. I would rather ask than assume.",
      ],
    },
    {
      title: "Unity experience, with dates",
      original: "2–5 years of professional experience building real-time Unity applications",
      body: [
        "Professional Unity / C# development continuously since December 2023, close to three years. Dedicated VR: Meta Quest 2 training suite at Tanta University (Dec 2023 – Oct 2024, sole developer) and a one-week VR booth game for Nescafe (2025). Since Oct 2024: Senior Unity Engineer at BEDO, building training simulations of engineering trainers. Jun 2024 – Jun 2026: Unity and AR developer for Ivris (freelance), Unity 6. Full table with technologies and my own responsibility is below.",
      ],
    },
    {
      title: "Shipping features and improving existing systems",
      original: "Strong Unity skills, including shipping features and improving existing systems",
      body: [
        "Shipped to real users: the Quest 2 training suite (three experiences), the Ivris production app (WebGL editor plus Android / iOS AR), the Nescafe VR booth game and BEDO's training labs delivered as Unity WebGL. Improving existing systems: since mid-2026 I have been migrating BEDO's Unity projects to Unity 6, and I extend a shared state backbone that many training stations already depend on.",
      ],
    },
    {
      title: "Studio, agency or simulation background",
      original: "Experience in game studios, XR agencies or industrial simulation companies; bonus: serious games or simulation-based training",
      body: [
        "Simulation-based training is the core of my work since 2023: industrial and engineering training simulations at BEDO and VR training at Tanta University, where accuracy of the behaviour matters as much as the visuals. I have not worked inside a game studio or an XR agency.",
      ],
    },
    {
      title: "Salary and start date",
      original: "Full-time",
      body: [
        "Salary expectation: EUR 2,700 gross per month.",
        "I am currently employed with a one-month notice period. When you make an offer I give notice and start full-time one month later. During the notice month I can already work part-time, about 15 hours per week, on onboarding and a first small task. After the notice month I work full-time, 40 hours per week.",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on medical procedures, XR depth and the stack",
    body: "My medical work so far is the 360° surgical-room viewer at Tanta University, which is observation, not an interactive clinical procedure; turning medical protocols into state machines would be new to me in the medical domain, although I do the same for equipment procedures every day. My dedicated VR work is about 11 months at Tanta University plus a one-week VR booth game, all on Quest 2 with Auto Hand; I have not shipped on Quest 3 or used OpenXR or the XR Interaction Toolkit in production. xAPI telemetry and LMS integration are not part of the work I can show, and neither is shader authoring; my visual work is particle and process explanations, exploded views and flow streamlines working with art teams. Finally, I am based in Egypt while the post is listed for Serbia. I prefer you know all of this now rather than discover it later.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Training simulations of BEDO engineering trainers: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics and industrial stations, PID control labs, fluid-mechanics labs.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "ScriptableObject architecture", "Dependency injection"],
      responsibility:
        "Simulation logic and equipment states, guided experiment steps, measurement and monitoring UI, visual explanations of hidden processes, WebGL builds. Worked with instructional-design, art and mechatronics teams; the hardware and product belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
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
        "Everything: turning instructional requirements into VR interaction flows, scenes, grab and tool interactions (working calculator and stopwatch held in hand, objects placed into liquid), viewpoint switching in the 360° viewer, adapting 3D assets, headset builds.",
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
      label: "Closest match: medical VR training",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Quest 2 · 360° surgical room · sole developer",
      copy:
        "Three Quest 2 experiences: a multi-angle 360° surgical-room viewer for medical observation, a lab with a working hand-held calculator and stopwatch, and onboarding for first-time headset users.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
    {
      label: "Procedures as state machines",
      title: "MR109 / MR110 industrial training",
      image: mr109RobotArm,
      meta: "Shared state backbone · ScriptableObjects",
      copy:
        "Many stations driven by the same ready / running / done / emergency logic, so each new station reuses the backbone instead of new code: the module structure a library of clinical procedures needs.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "A system that reacts to the learner",
      title: "PID virtual labs",
      image: pidPressure,
      meta: "Live response · disturbances · feedback",
      copy:
        "Learners change settings and disturb the process, and the simulated system responds in real time with live graphs: the same pattern as equipment and patient reactions that must follow the learner's actions.",
      links: [{ label: "Case study", href: caseStudyUrl("pid-control-virtual-labs-suite") }],
    },
    {
      label: "Guided steps and hidden processes",
      title: "EV117 fuel-cell vehicle lab",
      image: ev117Particles,
      meta: "Guided lab · particle view · live readings",
      copy:
        "A guided experiment with a particle view of what happens inside a fuel cell and live readings that follow the learner's actions: making an invisible process understandable.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Runtime content and performance",
      title: "Ivris WebGL room editor",
      image: ivrisApp,
      meta: "Unity 6 · Photon · runtime 3D loading",
      copy: "Production Unity 6 app with real-time multiplayer editing and 3D models loaded at runtime on a memory-constrained WebGL target.",
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
          need: "Clean, modular C# for interactive procedures, reusable across many modules",
          status: "direct",
          proof: "One state backbone reused across MR109 / MR110 stations (ScriptableObject architecture, dependency injection); reusable VR patterns for guided instruction and hand-held tools at Tanta.",
        },
        {
          need: "Translate medical protocols into state-machine logic for equipment and patient reactions",
          status: "adjacent",
          proof: "Equipment procedures as states and guided steps at BEDO, with systems that respond live to learner input (PID labs). Medical protocols would be new; my medical work so far is the 360° surgical-room viewer.",
        },
        {
          need: "Art-to-engine integration: lighting, shaders and assets with artists",
          status: "partial",
          proof: "Integrated and adapted 3D assets (Tanta) and worked with art teams on visual explanations at BEDO. Shader authoring is not part of the work I can show.",
        },
        {
          need: "Stable performance on standalone headsets, specifically Quest 3",
          status: "partial",
          proof: "Quest 2 standalone builds at Tanta and memory-constrained WebGL at BEDO and Ivris. Not yet shipped on Quest 3; I test on my own Quest 2.",
        },
        {
          need: "Research and integrate AI tools for development speed and dynamic scenarios",
          status: "partial",
          proof: "I use AI coding tools, Codex and Claude Code, in my development work to speed it up. Using AI for dynamic scenarios inside a product would be new to me.",
        },
        {
          need: "xAPI telemetry for learner progress, connected to LMS and data systems",
          status: "commitment",
          proof: "Not part of the work I can show. A step-based state machine maps naturally to xAPI statements; I would implement them against your LRS (see the approach below).",
        },
      ],
    },
    {
      title: "Requirements",
      items: [
        {
          need: "2–5 years of professional real-time Unity development",
          status: "direct",
          proof: "Continuous professional Unity since Dec 2023, close to three years, including Unity 6 in production (Ivris, BEDO migration).",
        },
        {
          need: "Shipping features and improving existing systems",
          status: "direct",
          proof: "Shipped Quest 2, WebGL and mobile AR apps; migrating BEDO's Unity projects to Unity 6 since mid-2026.",
        },
        {
          need: "Background in a game studio, XR agency or industrial simulation company",
          status: "adjacent",
          proof: "Industrial and engineering training simulations at BEDO, an engineering-education equipment company; no game-studio or XR-agency employment.",
        },
        {
          need: "Bonus: serious games or simulation-based training where accuracy and performance matter",
          status: "direct",
          proof: "The core of my work since 2023: BEDO training simulations of real equipment, the Tanta VR training suite, and the Atmosphere Protector educational game.",
        },
      ],
    },
    {
      title: "Related to the role",
      items: [
        {
          need: "Meta Quest / standalone VR",
          status: "direct",
          proof: "Quest 2 production training suite as sole developer (Auto Hand); own Quest 2 for testing.",
        },
        {
          need: "Working with medical and subject-matter experts",
          status: "adjacent",
          proof: "Turned instructional requirements into VR flows at Tanta; work with instructional-design engineers at BEDO, who verify behaviour in my prototypes.",
        },
        {
          need: "OpenXR / XR Interaction Toolkit",
          status: "adjacent",
          proof: "Not yet used in production. VR interactions built with Auto Hand (Tanta); AR built on Unity's XR stack with AR Foundation (Ivris).",
        },
      ],
    },
  ],
  approach: {
    title: "How I would approach clinical procedure modules",
    intro:
      "To be shaped with your medical experts, artists and existing codebase, but this is how I would structure the work:",
    steps: [
      {
        title: "The protocol as data, run by one state machine",
        body: "Each procedure described as steps with preconditions, allowed orders, critical errors and recoverable mistakes, plus the equipment and patient responses each step triggers. The protocol lives in data assets, so a change from a medical expert is a content edit, not new code, and every module reuses the same engine.",
      },
      {
        title: "Prototype the protocol before building in Unity",
        body: "Before any Unity work, I build the logic as an HTML prototype with 2D vector graphics, covering guided mode with enforced steps and free practice. Every changing value is driven by its rule or equation, shown next to it, so the medical experts can walk every branch, verify the behaviour and confirm nothing is hard-coded. The team agrees on the system there, before headset time is spent.",
      },
      {
        title: "Telemetry from the same source",
        body: "Because each step transition is an event in the state machine, xAPI statements (step completed, error made, time taken, assessment result) come from one place instead of being scattered through scenes, and stay consistent across modules. Validated against your LRS early, not at the end.",
      },
      {
        title: "A Quest 3 budget from day one",
        body: "Agree frame, draw-call and texture budgets with the artists at the start, profile on device after every new asset or effect, and keep lighting and shader choices inside that budget so an operating-room scene stays stable on standalone hardware.",
      },
      {
        title: "Reusable building blocks",
        body: "Instruments, monitors, checks and patient-response models built once and configured per module, the way one state backbone serves many BEDO stations.",
      },
    ],
    note: "Clinical behaviour, protocol steps and acceptable deviations come from your medical experts. I implement and verify them; I do not define them.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time start",
      body: "About 15 hours per week: repository and tools onboarding, running your modules on Quest, a first small task to learn the codebase.",
    },
    {
      when: "Month 1",
      title: "Full-time, first feature",
      body: "One contained feature in an existing module, through review and a Quest 3 build, profiled on device.",
    },
    {
      when: "Months 2–3",
      title: "Procedure logic and telemetry",
      body: "First clinical protocol prototyped with your medical experts and implemented on the shared state machine, with its xAPI statements checked against your LRS.",
    },
    {
      when: "Ongoing",
      title: "Module production",
      body: "New procedure modules, art integration and performance work, and improvements to the shared systems.",
    },
  ],
  questions: [
    "Is this role remote, and is it open to someone living in Egypt (as an employee through an employer-of-record, or as a contractor), or does it require living in Serbia or the Netherlands?",
    "How are clinical protocols handed to developers today: written procedures, flowcharts or sessions with the medical experts? And who signs off that a module behaves correctly?",
    "Is there already a shared procedure or state-machine framework across modules, or would this role help design it?",
    "Which interaction stack do the modules use (XR Interaction Toolkit, Meta SDK, your own), and which Unity version?",
    "Which LMS or LRS receives the xAPI data, and is there an agreed statement vocabulary?",
    "What should the AI integration do: speed up content production, drive dynamic scenarios such as patient dialogue, or both?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the Quest and training-simulation demos in a short call, and to hear how your team builds a new procedure module today.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity XR / simulation developer",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

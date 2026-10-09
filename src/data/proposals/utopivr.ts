import ev117Particles from "../../assets/thumbnails/projects/EduLab/EV117 Particles.thumb.webp";
import mr109RobotArm from "../../assets/thumbnails/projects/MR109 Compact/MR109 Robot Arm.thumb.webp";
import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: Upwork post "Programista Unity VR (C#) — szukamy 2 freelancerów do projektu
// edukacyjnego" (uTopiVR, posted ~2026-10-05). Every answer below maps to an item the post asks for.

const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";

const proposal: Proposal = {
  slug: "utopivr",
  client: "uTopiVR",
  projectName: "Electrolyzer training simulator (VR + browser)",
  dateLabel: "October 2026",
  greeting: "Dzień dobry,",
  eyebrow: "Application · uTopiVR · Unity VR (C#) developer",
  headline: "Unity VR developer for your electrolyzer training simulator",
  lead: [
    "I build Unity training simulations of real technical equipment for engineering education. The closest match to your project is the EV117 fuel-cell vehicle lab I built at BEDO: a PEM fuel cell and a PEM electrolyzer share the same membrane principle — one consumes hydrogen, the other produces it.",
    "Before that I was the sole Unity developer of a Meta Quest 2 training suite with hand-held lab tools, and I ship Unity WebGL builds in production. Below I answer each point from your post, list my experience with dates and my own role, and show how I would approach the simulator.",
  ],
  quickFacts: [
    { label: "Rate", value: "USD 28 / hour net" },
    { label: "Start", value: "1 month after award" },
    { label: "Test headset", value: "Meta Quest 2 (own)" },
    { label: "Time zone", value: "Egypt · 1 h ahead of Poland" },
  ],
  answers: [
    {
      title: "Unity and VR experience, with dates",
      original: "Krótki opis doświadczenia w Unity i VR, z datami",
      body: [
        "Professional Unity development continuously since December 2023. Dedicated VR: Meta Quest 2 training suite at Tanta University (Dec 2023 – Oct 2024, sole developer) and a one-week VR booth game for Nescafe (2025). Since Oct 2024: Senior Unity Engineer at BEDO, building training simulations of real engineering equipment (Unity / WebGL). Full table with technologies and my responsibility is below.",
      ],
    },
    {
      title: "Portfolio and demo videos, with my own contribution",
      original: "Portfolio, filmy demonstracyjne lub opis wdrożeń wraz ze wskazaniem własnego wkładu",
      body: [
        "Each project below links to a demo video and a case study, and states what I personally built versus the wider team.",
      ],
    },
    {
      title: "Hourly rate and billing",
      original: "Proponowana stawka godzinowa, informacja netto/brutto i forma rozliczenia",
      body: ["USD 28 per hour net (no VAT added on my side), billed as an hourly contract through Upwork."],
    },
    {
      title: "Monthly availability and start date",
      original: "Dostępność godzinowa w miesiącu oraz możliwy termin rozpoczęcia",
      body: [
        "I have a one-month notice period at my current job. When you confirm the project is awarded, I give notice and start full engagement one month later. During that notice month I can already work part-time, about 15 hours per week (around 60 hours that month) — which fits your first two months of functional design.",
        "After the notice month: 30 hours per week (around 120–130 hours per month), and up to 40 hours per week in busy phases if the project needs it.",
      ],
    },
    {
      title: "VR headset for testing",
      original: "Informacja, czy dysponujesz goglami do testów i jakim modelem",
      body: ["Yes — I own a Meta Quest 2 (Oculus Quest 2) for development and on-device testing."],
    },
    {
      title: "Maintenance after delivery",
      original: "Informacja o możliwości dalszej współpracy przy utrzymaniu aplikacji",
      body: [
        "Yes. During the 24-month warranty I fix defects in code I wrote at no additional charge. New features and changes to the agreed scope are billed separately. I would like us to agree the boundaries in writing before signing — what counts as a defect versus a change, and expected response times.",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on the 2-year VR requirement",
    body: "My dedicated production VR work is about 11 months at Tanta University plus a one-week VR booth project — less than the two years you list. What I bring alongside it: almost three years of continuous professional Unity work focused on training simulations of real equipment, which is the procedure, state and feedback logic your simulator needs, and direct hydrogen-technology experience from the EV117 fuel-cell lab. I prefer you know this now rather than discover it in the dates.",
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
        { label: "EV117 / education labs", href: caseStudyUrl("engineering-education-virtual-labs") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview.",
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
        "Everything: turning instructional requirements into VR interaction flows, scenes, grab and tool interactions (working calculator and stopwatch held in hand, objects placed into liquid), adapting 3D assets, headset builds.",
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
      label: "Closest domain match",
      title: "EV117 fuel-cell vehicle lab",
      image: ev117Particles,
      meta: "Hydrogen · PEM · monitoring",
      copy:
        "Particle view of what happens inside a PEM cell — hydrogen, protons, electrons, oxygen and water — plus live readings of hydrogen pressure, voltage, current and efficiency in a guided lab.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "VR tools and procedures",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Quest 2 · Auto Hand · sole developer",
      copy:
        "Hand-held lab tools in VR: a working calculator and stopwatch, objects placed into liquid, and an onboarding tutorial for first-time headset users.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
    {
      label: "Equipment states and procedures",
      title: "MR109 / MR110 industrial training",
      image: mr109RobotArm,
      meta: "Sensors · actuators · process states",
      copy:
        "Stations with motors, pneumatics, conveyors and sensors driven by ready / running / done / emergency logic — the same step-and-state backbone a training procedure needs.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Browser delivery",
      title: "Ivris WebGL room editor",
      image: ivrisApp,
      meta: "WebGL · Photon · runtime 3D loading",
      copy: "Production Unity WebGL app with real-time multiplayer editing and 3D models loaded at runtime.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Gamification",
      title: "Nescafe VR booth",
      image: nescafeSurfing,
      meta: "VR · timed score loop",
      copy: "Short-session VR game with collectibles, a timer and scoring, designed so first-time visitors understand it in seconds.",
      links: [{ label: "Video", href: nescafeVideo }],
    },
  ],
  requirementGroups: [
    {
      title: "Scope of work",
      items: [
        {
          need: "VR interactions: grabbing and using tools, operating device elements, performing procedures",
          status: "direct",
          proof: "Tanta viscosity lab — hand-held calculator and stopwatch, objects placed into liquid (Auto Hand, Quest 2).",
        },
        {
          need: "Scenario logic, exercises, assessment and gamification",
          status: "direct",
          proof: "BEDO guided experiment steps and measurement feedback; MR109 process-state logic; Nescafe timer and scoring.",
        },
        {
          need: "Integrating 3D models, animations, interfaces and teaching materials",
          status: "direct",
          proof: "BEDO labs: exploded views, particle explanations, instruction overlays, monitoring dashboards; adapted assets at Tanta.",
        },
        {
          need: "Browser version",
          status: "direct",
          proof: "BEDO labs delivered as Unity WebGL; Ivris WebGL editor in production.",
        },
        {
          need: "Testing on VR hardware, performance optimisation, code review, bug fixing",
          status: "direct",
          proof: "Quest 2 builds at Tanta; WebGL optimisation at BEDO and Ivris; own Quest 2 for testing.",
        },
        {
          need: "Technical documentation and build / run instructions",
          status: "commitment",
          proof: "README per module plus step-by-step Quest and WebGL build instructions, kept current in the repository.",
        },
      ],
    },
    {
      title: "Requirements",
      items: [
        {
          need: "At least 2 years of Unity VR development",
          status: "partial",
          proof: "About 11 months dedicated VR plus a one-week VR booth; almost 3 years of Unity training simulations — see the note above.",
        },
        {
          need: "Good C# and hands-on VR interaction work",
          status: "direct",
          proof: "All projects above are C#; VR interactions built end-to-end at Tanta.",
        },
        {
          need: "Debugging and optimisation",
          status: "direct",
          proof: "Quest 2 standalone and WebGL — both are memory- and performance-constrained targets.",
        },
        {
          need: "Git and working on a shared codebase",
          status: "direct",
          proof: "Team development at BEDO; shared Unity and backend codebase at Ivris.",
        },
        {
          need: "Handing over source code and documentation",
          status: "direct",
          proof: "Yes — full source, documentation and build steps at every milestone.",
        },
        {
          need: "Confirmable experience: periods, technologies, own responsibility",
          status: "direct",
          proof: "Listed per project in the experience table above.",
        },
      ],
    },
    {
      title: "Nice to have",
      items: [
        { need: "Meta Quest", status: "direct", proof: "Quest 2 production apps; own Quest 2." },
        {
          need: "OpenXR and XR Interaction Toolkit",
          status: "adjacent",
          proof: "Not yet in production. VR interactions built with Auto Hand (Tanta); AR built on Unity's XR stack with AR Foundation and AR Foundation Remote 2 (Ivris).",
        },
        {
          need: "Unity 6",
          status: "direct",
          proof: "Ivris AR app built in Unity 6; migrating BEDO projects to Unity 6 since mid-2026.",
        },
        {
          need: "Educational, training or technical simulators",
          status: "direct",
          proof: "The core of my work since 2023 — BEDO, Tanta University.",
        },
        {
          need: "WebGL and adapting to different control schemes",
          status: "direct",
          proof: "Unity WebGL in production (BEDO, Ivris) with mouse / keyboard interaction.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would approach the electrolyzer simulator",
    intro:
      "To be validated against your device and the functional design, but this is the structure I would propose in the first two months:",
    steps: [
      {
        title: "The procedure as a state machine",
        body: "Pre-start checks (water supply and quality, gas lines, ventilation), purge where the device requires it, power-up and current ramp, steady operation, shutdown and depressurisation, alarms. Each step validates the learner's actions and allows recoverable mistakes.",
      },
      {
        title: "Make the invisible visible",
        body: "Water splitting at the electrodes, hydrogen and oxygen leaving on separate sides, ion transport through the membrane or electrolyte — the same approach as my EV117 particle view.",
      },
      {
        title: "Live operating values",
        body: "Cell and stack voltage, current, temperature, gas pressure and production rate, water level and quality — reacting to what the learner does, with alarms when limits are exceeded.",
      },
      {
        title: "Prototype the logic before building in Unity",
        body: "Before any Unity work, I build the system as an HTML prototype with 2D vector graphics, covering both guided scenarios with enforced steps and free mode where learners change values themselves. Every changing value is driven by its equation, shown next to it, so the instructional-design engineers can verify the behaviour and confirm nothing is hard-coded. The development and instructional-design teams agree on the system here, before time is spent in Unity.",
      },
      {
        title: "One codebase, two ways to interact",
        body: "Shared scenario and simulation logic, with a thin interaction layer on top — VR hands and controllers, or mouse and keyboard. The browser version is designed in from the start, not ported at the end.",
      },
    ],
    note: "Exact equipment behaviour, limits and assessment rules come from your device documentation and subject-matter experts.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time start",
      body: "Onboarding to the repository and tools, input to the functional design, first VR interaction prototypes on Quest.",
    },
    {
      when: "Months 1–2",
      title: "Functional design",
      body: "HTML / 2D prototype of the system, guided and free modes, reviewed with your instructional designers; agree procedures, interactions, assessment rules and browser controls.",
    },
    {
      when: "Months 2–6",
      title: "Build to acceptance",
      body: "Interactions, scenarios, assessment and gamification, 3D and teaching-material integration, WebGL version, Quest testing, documentation.",
    },
    {
      when: "To 20 Nov 2027",
      title: "User testing and development",
      body: "Fixes and improvements from user testing, as planned in your post.",
    },
    {
      when: "24 months",
      title: "Warranty",
      body: "Defects in my code fixed at no charge; new work billed — boundaries agreed up front.",
    },
  ],
  questions: [
    "Which electrolyzer is it — PEM or alkaline, and which model? Are CAD / 3D models and the operating manual available?",
    "Which headsets should the VR version target, and which browsers and devices the web version?",
    "Is the Unity version and interaction framework (for example XR Interaction Toolkit) already decided?",
    "Do results need to be reported anywhere (LMS, SCORM / xAPI), or stored only in the application?",
    "Which interface languages are needed — Polish only, or English as well?",
    "How do you plan to split the work between the two developers?",
  ],
  closing: {
    title: "Next step",
    body: "Reply on Upwork and I will gladly walk you through the demos in a short call — and help with any details you need for your offer.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity VR / simulation developer",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

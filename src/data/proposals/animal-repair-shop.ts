import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import ivrisRoomEditor from "../../assets/thumbnails/projects/Ivris/Screenshot2025-04-01at8.36.11PM.thumb.webp";
import mr109RobotArm from "../../assets/thumbnails/projects/MR109 Compact/MR109 Robot Arm.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: GameJobs.co post "AR Engineer" (Animal Repair Shop, LLC; posted 2026-10-16), same text on
// animalrepairshop.com/careers. Remote, no region named, excellent English required; benefits are
// health / vision / dental, PTO and paid holidays (US-style), so hiring from Egypt is unconfirmed.
// The post asks no written questions: the answers below follow its qualifications list in order,
// then start date, hours, location and salary. Apply through their careers page.

const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";

const proposal: Proposal = {
  slug: "animal-repair-shop",
  client: "Animal Repair Shop",
  projectName: "Cross-platform AR experiences in Unity AR Foundation for a new gaming platform",
  dateLabel: "October 2026",
  greeting: "Hello ARS team,",
  eyebrow: "Application · Animal Repair Shop · AR Engineer (Unity / AR Foundation)",
  headline: "Unity AR engineer for a greenfield platform that bridges digital and physical play",
  lead: [
    "You are building cross-platform AR experiences with Unity AR Foundation on a new gaming platform. That is the stack I used on Ivris for two years: I built the Unity app behind an interior-design product, where furniture loaded at runtime is placed in the user's real room on Android and iOS through AR Foundation, with AR Foundation Remote 2 for fast on-device iteration, and the same codebase also runs as a WebGL editor with Photon multiplayer and PlayFab.",
    "I have worked professionally in Unity and C# without a break since December 2023, on targets where performance is tight: mobile AR, standalone Meta Quest 2 and Unity WebGL in production. Below I go through your qualifications in order, list my experience with dates and my own role, and say plainly where I am short of the bar.",
  ],
  quickFacts: [
    { label: "Stack", value: "Unity · C# · AR Foundation · Android / iOS" },
    { label: "Start", value: "1 month after an offer" },
    { label: "Hours", value: "40 h / week, full-time" },
    { label: "Location", value: "Egypt (remote)" },
  ],
  answers: [
    {
      title: "Professional experience, with dates",
      original: "3-5+ years of experience delivering professional games, simulations, or similar applications",
      body: [
        "Continuous professional Unity / C# work since December 2023, just under three years: Senior Unity Engineer at BEDO Innovating Education (Oct 2024 - present), whose Unity training simulations are commercial products sold to universities and companies; Unity and AR developer for Ivris (freelance, Jun 2024 - Jun 2026); sole Unity VR developer at Tanta University (Dec 2023 - Oct 2024); and a one-week VR booth game for Nescafe Ice Coffee (2025). That is below your 3-5+ years; see the note further down.",
      ],
    },
    {
      title: "Unity engine and editor",
      original: "Advanced knowledge of the Unity engine and editor",
      body: [
        "Unity is my daily tool. At BEDO I work on a shared team codebase of about 80,000 lines of in-house C#, configured per project through ScriptableObjects and dependency injection, and I have been migrating projects to Unity 6 since mid-2026. The Ivris AR app was built in Unity 6.",
      ],
    },
    {
      title: "AR and VR in Unity, including AR Foundation",
      original: "Extensive experience building AR and/or VR applications in Unity, including Unity AR Foundation",
      body: [
        "AR: the Ivris mobile AR preview on Android and iOS with AR Foundation, placing runtime-loaded 3D furniture in a real room with move, rotate and scale controls; AR Foundation Remote 2 to test on device straight from the editor. VR: a Meta Quest 2 training suite at Tanta University as the sole developer (about 11 months, Auto Hand interactions), and the Nescafe VR booth game.",
      ],
    },
    {
      title: "Debugging and optimisation",
      original: "Excellent debugging and optimization skills for Unity projects",
      body: [
        "Every target I build for is constrained: phones running AR, standalone Quest 2, and Unity WebGL in the browser. I profile on the device or the build, not only in the editor, and I debug across a large shared codebase, including through the current engine-version migration.",
      ],
    },
    {
      title: "C# and performant code",
      original: "Advanced experience with C#, with an emphasis on writing performant code",
      body: [
        "C# in every project I list, including a G-code-style interpreter and a block-based command editor for students, PLC-style station logic and a 6-joint robot arm with forward and inverse kinematics.",
      ],
    },
    {
      title: "Degree",
      original: "Bachelor's degree in Computer Science or equivalent",
      body: [
        "B.Sc. in Computer Science Engineering and Technology, German University in Cairo (2014-2019). My thesis trained a model in Python to drive a car inside a Unity simulation.",
      ],
    },
    {
      title: "Working with developers, artists and technical leads",
      original: "Experience working with developers, artists, and technical leads",
      body: [
        "At BEDO I work daily with instructional-design, art and mechatronics teams, and since August 2026 I mentor one intern and review his work. At Ivris I worked on a shared Unity and backend codebase. I use Blender to fix and adjust models myself when an artist is not available.",
      ],
    },
    {
      title: "Git and GitHub",
      original: "Proficient with Git and GitHub",
      body: [
        "Git on shared team codebases at BEDO and Ivris; this portfolio is built and deployed from a GitHub repository.",
      ],
    },
    {
      title: "English",
      original: "Excellent English skills, spoken and written",
      body: [
        "I work in English every day, and my B.Sc. studies and bachelor thesis were in English. I have no formal test score to show.",
      ],
    },
    {
      title: "Start date and hours",
      body: [
        "I am currently employed with a one-month notice period. I give notice when I accept an offer and start full-time one month later, 40 hours a week. During the notice month I can already put in about 15 hours a week, for example to get into your repository, tools and AR test devices before day one.",
      ],
    },
    {
      title: "Location",
      body: [
        "I live in Egypt and work remotely. Your post lists the role as remote without naming countries, and the benefits read like a US employment package, so my first question below is whether you can hire from Egypt, and in which form.",
      ],
    },
    {
      title: "Salary expectation",
      body: ["[[TODO: salary]] per month for the full-time role, open to discussing the full package and the contract form."],
    },
  ],
  candidNote: {
    title: "A transparent note on the experience bar",
    body: "Your post asks for 3-5+ years delivering professional games or simulations and extensive Unity AR / VR work. I have just under three years of professional Unity (since December 2023). My AR Foundation work is one product, the Ivris app, over two years; my dedicated VR is about 11 months at Tanta University plus a one-week booth game. Most of my work is simulations and apps rather than games: I have not shipped a consumer game in the stores, though BEDO's simulations are commercial products I take from prototype to delivery. I have no native Android (Java / Kotlin) or iOS (Objective-C / Swift) work to show; my mobile builds come from Unity. What I bring: production AR Foundation on Android and iOS, runtime 3D content, real-time multiplayer, and constrained-hardware builds, plus a habit of agreeing the system with designers before Unity time is spent. I would rather you know this now than find it in the dates.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Interactive Unity training simulations of BEDO engineering trainers, sold as commercial B2B products: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics stations, PID control labs, fluid-mechanics labs. Migrating projects to Unity 6 since mid-2026.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration)", "ScriptableObject architecture", "Dependency injection", "DOTween", "Timeline"],
      responsibility:
        "Interaction and state logic, guided steps, UI and feedback, runtime tools such as a visual command editor and interpreter, robot arm kinematics, WebGL builds and short Timeline intro sequences for the marketing team. Shared team codebase of about 80,000 lines of in-house C#; I mentor one intern and review his work. The hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "AR Foundation", "AR Foundation Remote 2", "Android", "iOS", "WebGL", "Photon", "PlayFab"],
      responsibility:
        "The Unity app, not the whole product: mobile AR preview with AR Foundation, runtime loading of 3D furniture and room models, Photon multiplayer room editing in WebGL, PlayFab and hosted-backend integration.",
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
        "Everything: interaction flows, scenes, hand-held tool interactions (working calculator and stopwatch), onboarding for first-time headset users, standalone Android headset builds.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth game (freelance)",
      context: "Short-session branded game for an event booth: surf sand and water routes, collect cans, beat the timer.",
      tech: ["Unity", "C#", "VR", "URP"],
      responsibility:
        "Unity developer: gameplay loop, timed scoring, collectibles and onboarding that visitors understand in seconds, from brief to booth in one week. The brand belongs to its owners.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "AR Foundation in production",
      title: "Ivris mobile AR preview",
      image: ivrisApp,
      meta: "AR Foundation · Android / iOS · placement controls",
      copy:
        "My Unity implementation of the app's AR preview: runtime-loaded 3D furniture placed in the user's real room, with move, rotate and scale controls, built and tested on Android and iOS.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Platform plumbing",
      title: "Runtime 3D content and multiplayer",
      image: ivrisRoomEditor,
      meta: "Runtime loading · Photon · PlayFab · backend",
      copy:
        "Content loaded at runtime instead of baked into the build, real-time multiplayer room editing with Photon, and PlayFab plus a hosted backend behind one Unity client on WebGL, Android and iOS.",
      links: [{ label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") }],
    },
    {
      label: "3D math",
      title: "6-joint robot arm, FK / IK",
      image: mr109RobotArm,
      meta: "Forward / inverse kinematics · joint limits",
      copy:
        "Forward kinematics, inverse kinematics through X / Y / Z target control and joint limits for an industrial training robot arm, driven by a G-code-style interpreter.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Spatial interaction",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Standalone Quest 2 · sole developer",
      copy:
        "Hand-held tools in VR and an onboarding tutorial for people who have never worn a headset: teaching a new spatial control scheme in seconds, the same first-session problem AR has.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
    {
      label: "Game loop",
      title: "Nescafe VR booth game",
      image: nescafeSurfing,
      meta: "One week · timer · score · collectibles",
      copy: "A short-session arcade loop built from brief to a live event in one week, with fast start and reset for booth throughput.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Responsibilities",
      items: [
        {
          need: "Develop a greenfield gaming platform",
          status: "adjacent",
          proof: "Built the Ivris Unity app's core systems (AR preview, runtime content, multiplayer, backend hooks); at BEDO I take labs from first prototype to delivered product. A gaming platform from zero would be new.",
        },
        {
          need: "Build cross-platform AR experiences with AR Foundation",
          status: "direct",
          proof: "Ivris AR preview on Android and iOS with AR Foundation and AR Foundation Remote 2.",
        },
        {
          need: "Work with UX designers on concepts and features",
          status: "direct",
          proof: "I agree interactions and behaviour with BEDO's instructional designers in a prototype before Unity work starts.",
        },
        {
          need: "Design and integrate internal and external APIs with the platform team",
          status: "adjacent",
          proof: "Integrated Photon, PlayFab and a Render-hosted backend into the Ivris Unity client; designing the APIs themselves would be shared work with your platform team.",
        },
        {
          need: "Clean, consistent code and code reviews",
          status: "direct",
          proof: "Shared, long-lived team codebase at BEDO; I review my intern's work since Aug 2026.",
        },
        {
          need: "Meet deadlines and work autonomously",
          status: "direct",
          proof: "Sole developer of the Quest 2 suite; one-week booth deadline; freelance AR work alongside a full-time job.",
        },
        {
          need: "Solve 3D spatial data problems with geometry and 3D tools",
          status: "direct",
          proof: "Robot arm forward / inverse kinematics, AR placement and transform controls, runtime room loading with tour, floor-plan and dollhouse views.",
        },
        {
          need: "Document features for internal and external audiences",
          status: "adjacent",
          proof: "Public case studies in my portfolio; I would keep feature docs in the repository from the first sprint.",
        },
      ],
    },
    {
      title: "Qualifications",
      items: [
        {
          need: "3-5+ years delivering professional games, simulations or similar applications",
          status: "partial",
          proof: "Just under three years of continuous professional Unity, mostly commercial simulations and apps; see the note above.",
        },
        { need: "Advanced Unity engine and editor", status: "direct", proof: "Daily since Dec 2023; Unity 6 in production (Ivris) and migration (BEDO)." },
        {
          need: "Extensive AR / VR in Unity, including AR Foundation",
          status: "partial",
          proof: "AR Foundation in one production app over two years; about 11 months dedicated VR plus a one-week booth game.",
        },
        { need: "Debugging and optimisation for Unity projects", status: "direct", proof: "Mobile AR, standalone Quest 2 and WebGL targets, all performance-constrained." },
        { need: "Advanced C#, performant code", status: "direct", proof: "Interpreters, editors, kinematics and a large shared codebase, all in C#." },
        { need: "High-level thinking with attention to detail", status: "direct", proof: "Equation-level checks with designers in prototypes; full system design down to station states at BEDO." },
        { need: "B.Sc. Computer Science or equivalent", status: "direct", proof: "B.Sc. Computer Science Engineering and Technology, German University in Cairo (2014-2019)." },
        { need: "Work with developers, artists and technical leads", status: "direct", proof: "Daily with design, art and engineering teams at BEDO; shared codebase at Ivris." },
        { need: "Git and GitHub", status: "direct", proof: "Git on team codebases; this portfolio lives in a GitHub repository." },
        { need: "Excellent spoken and written English", status: "direct", proof: "English every day at work; B.Sc. and thesis in English." },
      ],
    },
    {
      title: "Preferred skills",
      items: [
        {
          need: "Writing Unity shaders",
          status: "partial",
          proof: "[[TODO: confirm any Shader Graph or HLSL shader work]]",
        },
        { need: "Writing documentation", status: "adjacent", proof: "Case studies for every project in my portfolio; on your team I would keep feature docs and build steps in the repository." },
        {
          need: "3D mathematics and 3D modelling",
          status: "direct",
          proof: "Robot arm FK / IK; Blender to fix and adjust models, a six-month modelling and texturing specialization (Nayzak animation school).",
        },
        {
          need: "Full application lifecycle, design to deployment",
          status: "direct",
          proof: "BEDO simulations from HTML prototype to delivered commercial product; Ivris builds for WebGL, Android and iOS.",
        },
        {
          need: "AR UX principles",
          status: "adjacent",
          proof: "Placement and transform controls in the Ivris AR preview; first-time-user onboarding on Quest 2. No dedicated AR UX research.",
        },
        { need: "Agile methodology", status: "adjacent", proof: "Short iteration and review cycles with design teams at BEDO." },
        {
          need: "Android development, Java or Kotlin",
          status: "partial",
          proof: "Android builds from Unity (AR app, Quest 2); no native Java or Kotlin work to show.",
        },
        {
          need: "iOS development, Objective-C or Swift",
          status: "partial",
          proof: "iOS builds of the Ivris Unity AR app; no native Objective-C or Swift work to show.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would start on the AR side of the platform",
    intro:
      "To be checked against your platform design and target devices, but this is how I would work in the first weeks:",
    steps: [
      {
        title: "Agree the experience before building it",
        body: "Before Unity work I build an HTML prototype with 2D vector graphics of the system, where every changing value is driven by its real rule and shown next to it, so designers can check the behaviour and see nothing is hard-coded. For an AR feature that means the story beats, triggers and states are agreed with UX on screen before device time is spent.",
      },
      {
        title: "One AR layer, many experiences",
        body: "Wrap AR Foundation session, plane, image and anchor handling in a small service the experiences talk to, so content teams build on stable events (surface found, target seen, anchor lost) and platform differences between ARCore and ARKit stay in one place.",
      },
      {
        title: "Content outside the build",
        body: "Load 3D content and experience data at runtime, the way I did on Ivris, so new experiences ship without an app update and the platform can grow past its first title.",
      },
      {
        title: "On-device from day one",
        body: "AR Foundation Remote for fast iteration, then weekly builds on your lowest supported Android and iOS phones with agreed frame-time, thermal and memory budgets.",
      },
      {
        title: "First-session onboarding",
        body: "Clear prompts for scanning, lighting and movement, and graceful recovery when tracking is lost, so first-time players reach the fun in seconds.",
      },
    ],
    note: "Which tracking modes the platform needs (surfaces, images, objects, location) and how it connects to your backend come from your team; I have not seen the platform design yet.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time onboarding",
      body: "About 15 hours a week around my current job: read the repository and coding standards, set up AR test devices, pick up a small AR task.",
    },
    {
      when: "Month 1",
      title: "Full-time, 40 h / week",
      body: "Prototype the first AR experience with UX, and agree the shared AR service and its events with the platform team.",
    },
    {
      when: "Months 2-3",
      title: "Platform AR layer",
      body: "Build the AR layer, runtime content loading and the API hooks to platform services; device testing on Android and iOS every week.",
    },
    {
      when: "Ongoing",
      title: "Experiences and docs",
      body: "Ship experiences on the platform, take part in code reviews, and keep internal and external feature documentation current.",
    },
  ],
  questions: [
    "Can you hire someone living in Egypt for this role, as an employee, a contractor or through an employer-of-record, and does the benefits package apply in that case?",
    "Which time zone does the team work in, and how many hours of overlap do you need each day?",
    "What does the platform anchor AR content to: physical products and printed pieces (image or object tracking), the room (planes and anchors), or locations?",
    "Which Unity version and AR Foundation version are you starting on, and which Android and iOS devices are your minimum spec?",
    "How is the platform split between the Unity client and the platform engineering team: who owns the APIs, accounts and content delivery?",
    "How large is the team today, and who would I work with most closely: UX, art or the technical lead?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the AR and VR demos in a short call, and to take a small AR technical task if that helps your decision.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity AR / XR developer · games and interactive simulations",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

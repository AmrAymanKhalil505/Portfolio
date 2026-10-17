import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import ivrisRoomEditor from "../../assets/thumbnails/projects/Ivris/Screenshot2025-04-01at8.36.11PM.thumb.webp";
import cimBlockEditor from "../../assets/thumbnails/projects/cim/Inter02.thumb.webp";
import mr109RobotArm from "../../assets/thumbnails/projects/MR109 Compact/MR109 Robot Arm.thumb.webp";
import pidGraph from "../../assets/thumbnails/projects/PID/graph photo.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: LinkedIn posting "Senior SDK Engineer (C#/Unity) - Remote Work | REF#305341" (BairesDev,
// posted ~2026-10-03; a duplicate exists as REF#304219). Read from the LinkedIn guest view on 2026-10-12.
// The post lists responsibilities, requirements and nice-to-haves but no specific application items,
// so the answers below cover what a recruiter screening this role needs: Unity/C# depth, dates, own role,
// SDK-consumer experience, availability and pay.

const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";

const proposal: Proposal = {
  slug: "bairesdev",
  client: "BairesDev",
  projectName: "Senior SDK Engineer (C#/Unity) · REF#305341",
  dateLabel: "October 2026",
  eyebrow: "Application · BairesDev · Senior SDK Engineer (C#/Unity)",
  headline: "Unity / C# engineer who has integrated platform SDKs into shipped apps",
  lead: [
    "Your role is about the Unity side of a platform SDK: libraries, APIs and sample apps that game teams drop into their titles to reach platform services. The closest match in my work is the Ivris app, where I connected a cross-platform Unity client (WebGL, Android, iOS) to Photon multiplayer, PlayFab, AR Foundation and a hosted backend, and built runtime 3D content loading so assets did not have to ship inside the build.",
    "I have built Unity / C# software professionally since December 2023, and since October 2024 I have been Senior Unity Engineer at BEDO, where I write reusable simulation systems with ScriptableObject architecture and dependency injection, plus in-app developer-style tooling such as a command interpreter and a visual script editor with validation. Below: my experience with dates and my own role, an honest requirement-by-requirement check against your post, and how I would approach the first months.",
  ],
  quickFacts: [
    { label: "Core stack", value: "Unity · C# · WebGL / Android / iOS" },
    { label: "Unity 6", value: "In production (Ivris, BEDO migration)" },
    { label: "Start", value: "1 month notice period" },
    { label: "Location", value: "Egypt · remote" },
  ],
  answers: [
    {
      title: "Unity and C# experience, with dates",
      original: "Strong C# skills and hands-on experience with Unity and .NET",
      body: [
        "Professional Unity / C# development continuously since December 2023: Unity VR developer at Tanta University (Dec 2023 – Oct 2024, sole developer), Unity and AR application developer for Ivris (freelance, Jun 2024 – Jun 2026) and Senior Unity Engineer at BEDO Innovating Education (Oct 2024 – present). The full table with technologies and my own responsibility is below.",
      ],
    },
    {
      title: "Integrating platform services into Unity",
      original: "Build and maintain SDK components, libraries, and APIs that internal game teams use to integrate platform services",
      body: [
        "I have been on the consuming side of exactly this kind of SDK. At Ivris I integrated Photon (real-time multiplayer room editing in WebGL), PlayFab (user and content workflows), AR Foundation with AR Foundation Remote 2, and a Render-hosted Node.js backend into one Unity client that had to behave on WebGL, Android and iOS. That gives me a concrete view of what makes an SDK easy or painful to adopt: clear initialization, predictable async behaviour, platform differences handled inside the SDK, and samples that actually build.",
        "I have not yet authored and versioned an SDK that other teams consume as a product. The note below covers this.",
      ],
    },
    {
      title: "Sample apps and developer tooling",
      original: "Produce sample apps and developer tooling",
      body: [
        "At BEDO I built in-app tooling for robot and CNC-style stations: a G-code-style interpreter with Run / Pause / Stop / Load / Edit controls, conditions, jumps and calls, and a visual script editor and compiler that validates command rows and reports line-specific errors before execution. It is aimed at students rather than developers, but the work is the same: a small language, a validator, clear error messages and a runtime that executes it.",
      ],
    },
    {
      title: "Owning features from design to release",
      original: "Own features independently from design through release",
      body: [
        "I was the sole developer of the Tanta University Meta Quest 2 suite, from requirements to headset builds. At BEDO I take simulation modules from the agreed system design (prototyped first, see the approach section) through Unity implementation and WebGL delivery.",
      ],
    },
    {
      title: "Availability and start date",
      body: [
        "I am currently employed with a one-month notice period, so I can start one month after an offer. [[TODO: confirm full-time 40 h/week availability after the notice month and the working-hours overlap you can offer with US / LATAM teams]]",
      ],
    },
    {
      title: "Compensation",
      original: "Competitive compensation in USD or your local currency",
      body: ["[[TODO: salary/rate expectation for this full-time role]]"],
    },
  ],
  candidNote: {
    title: "A transparent note on the gaps",
    body: "Your post asks for 5+ years of software engineering; my professional Unity / C# work runs from December 2023, a little under three years. I have no production experience with Unreal Engine or C++, and I have not authored a versioned SDK for other teams or owned a CI/CD pipeline. What I bring instead: deep, current Unity and C# work (including Unity 6 in production), hands-on integration of several platform SDKs into one cross-platform client, and a habit of building reusable systems and tooling. If the Unreal/C++ share of the work is large, I am probably not the right fit; if it is mainly C#/Unity with some Unreal support, I would ramp up on the Unreal side deliberately and say so in planning. I prefer you know this now rather than discover it in the dates.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity training simulations of BEDO engineering trainers: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics and industrial stations, PID control labs, fluid-mechanics labs.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "ScriptableObject architecture", "Dependency injection"],
      responsibility:
        "Simulation logic and equipment states, a robot command interpreter and visual script editor with validation, monitoring UI, WebGL builds, and the migration of projects to Unity 6. Worked with instructional-design, art and mechatronics teams; the hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "PID labs case study", href: caseStudyUrl("pid-control-virtual-labs-suite") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "WebGL", "Android", "iOS", "AR Foundation", "AR Foundation Remote 2", "Photon", "PlayFab", "Node.js backend"],
      responsibility:
        "Built the Unity app, not the whole product: runtime loading of 3D furniture and room models, Photon multiplayer room editing in WebGL, AR preview, and integration with PlayFab and the hosted backend.",
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
        "Everything from requirements to headset builds: interaction flows, scenes, hand-held tool interactions (working calculator and stopwatch), asset adaptation and Android builds for Quest.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Closest match: SDK integration",
      title: "Ivris cross-platform Unity app",
      image: ivrisApp,
      meta: "Photon · PlayFab · AR Foundation · backend",
      copy:
        "One Unity client on WebGL, Android and iOS, wired to Photon multiplayer, PlayFab, AR Foundation and a hosted backend.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Runtime content system",
      title: "Ivris WebGL room editor",
      image: ivrisRoomEditor,
      meta: "Runtime 3D loading · real-time sync",
      copy:
        "Furniture and room models loaded at runtime instead of baked into the build, and layout changes synchronised between users in WebGL sessions.",
      links: [{ label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") }],
    },
    {
      label: "Tooling: language + validator",
      title: "Robot visual script editor and interpreter",
      image: cimBlockEditor,
      meta: "Interpreter · compiler · validation",
      copy:
        "A G-code-style interpreter with run controls, conditions, jumps and calls, plus a visual editor that compiles command rows and reports line-specific errors before execution.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Reusable systems",
      title: "MR109 / MR110 industrial training",
      image: mr109RobotArm,
      meta: "State machines · kinematics · many stations",
      copy:
        "Many station types built on shared state logic (ready / running / done / emergency), with 6-joint forward and inverse kinematics for the robot arm.",
      links: [{ label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") }],
    },
    {
      label: "Data and feedback",
      title: "PID virtual labs suite",
      image: pidGraph,
      meta: "Control loops · live graphs · WebGL",
      copy: "A suite of PID control labs sharing one simulation and graphing approach, delivered in the browser.",
      links: [{ label: "Case study", href: caseStudyUrl("pid-control-virtual-labs-suite") }],
    },
    {
      label: "Sole ownership",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Quest 2 · sole developer",
      copy: "Requirements to headset builds by myself: an example of owning a feature set end to end.",
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
          need: "Build and maintain SDK components, libraries and APIs that game teams use to integrate platform services",
          status: "adjacent",
          proof: "Integrated Photon, PlayFab, AR Foundation and a hosted backend into one Unity client (Ivris); reusable ScriptableObject / DI systems at BEDO. Not yet the SDK author.",
        },
        {
          need: "Develop mainly in C#/.NET and Unity",
          status: "direct",
          proof: "All projects above are Unity / C#, including Unity 6 in production.",
        },
        {
          need: "Some Unreal / C++ work",
          status: "commitment",
          proof: "No production Unreal or C++ experience; would ramp up deliberately. See the note above.",
        },
        {
          need: "Produce sample apps and developer tooling",
          status: "adjacent",
          proof: "Command interpreter and visual script editor with validation at BEDO, built for learners rather than developers.",
        },
        {
          need: "Troubleshoot across the SDK, engines and backend",
          status: "direct",
          proof: "Ivris integration work spanned the Unity client, Photon, PlayFab and the backend on WebGL, Android and iOS.",
        },
        {
          need: "Own features independently from design through release",
          status: "direct",
          proof: "Sole developer at Tanta University; simulation modules from design to WebGL delivery at BEDO.",
        },
      ],
    },
    {
      title: "Requirements",
      items: [
        {
          need: "5+ years of software engineering",
          status: "partial",
          proof: "Professional Unity / C# since December 2023 (a little under 3 years). See the note above.",
        },
        {
          need: "Strong C#, hands-on Unity and .NET",
          status: "direct",
          proof: "Daily Unity / C# work since 2023; Unity 6 at Ivris and in the BEDO migration.",
        },
        {
          need: "Unreal Engine and C++ proficiency",
          status: "commitment",
          proof: "A gap: I have only explored Unreal Engine briefly, without a project.",
        },
        {
          need: "REST APIs and JSON",
          status: "adjacent",
          proof: "Unity client connected to PlayFab and a Render-hosted Node.js backend at Ivris.",
        },
        {
          need: "Unit and integration testing",
          status: "commitment",
          proof: "Not a strength yet: where I add automated tests, AI coding tools (Codex, Claude Code) write most of them and I review them. A disciplined test practice would be something I build with your team.",
        },
        {
          need: "Git and CI/CD",
          status: "partial",
          proof: "Git on shared codebases at BEDO and Ivris; I have not owned a CI/CD pipeline.",
        },
        {
          need: "Advanced English",
          status: "direct",
          proof: "I work in English every day; my B.Sc. studies and my bachelor thesis were in English. I have no formal test score.",
        },
      ],
    },
    {
      title: "Nice to have",
      items: [
        {
          need: "Unity Package Manager or Unreal plugin architecture",
          status: "commitment",
          proof: "Consumed AR Foundation through UPM plus the Photon and PlayFab Unity SDKs; have not authored a package. Would ship SDK code as UPM packages with samples.",
        },
        {
          need: "Cross-platform development (PC, console, mobile, cloud)",
          status: "partial",
          proof: "WebGL, Android, iOS and Meta Quest in production; no console work.",
        },
        {
          need: "Developer documentation and sample code",
          status: "commitment",
          proof: "README and build instructions per module; would treat samples as first-class, buildable deliverables.",
        },
        {
          need: "SDK versioning and dependency management",
          status: "commitment",
          proof: "Lived with SDK version changes as a consumer (Unity 6 migration); not yet owned a release process.",
        },
        {
          need: "Java, Go, AWS, Docker, telemetry / observability",
          status: "partial",
          proof: "Not in my production history; backend exposure is the Node.js service at Ivris.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would approach the first months",
    intro:
      "To be validated against your platform services and team practices, but this is how I would start on an SDK that game teams depend on:",
    steps: [
      {
        title: "Learn the SDK as a consumer first",
        body: "Integrate the current SDK into a fresh sample project on each target platform, follow the docs exactly, and write down every point of friction. That list is the most honest backlog an SDK team can have.",
      },
      {
        title: "Keep the public API small and boring",
        body: "Clear initialization, explicit async results and errors, no hidden singletons, platform differences resolved inside the SDK rather than in game code. Breaking changes only with a version bump and a migration note.",
      },
      {
        title: "Samples that always build",
        body: "Each feature ships with a minimal sample scene that shows the intended usage. If a sample is hard to write, the API needs another look before release.",
      },
      {
        title: "Agree behaviour before code",
        body: "In my current work I prototype the system first (an HTML model with every value driven by its real equation) so reviewers can verify behaviour before Unity time is spent. For an SDK, the equivalent is agreeing the API surface, error cases and sample usage with the consuming teams before implementation.",
      },
      {
        title: "Tests around the contract",
        body: "Automated tests on the public API and its error paths, run on every change, so game teams can upgrade with confidence.",
      },
    ],
    note: "Concrete services, target platforms and the Unreal share of the work come from your team; I would confirm these in the first week.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Notice period",
      body: "One-month notice at my current job after an offer; available for onboarding calls and access setup during that month.",
    },
    {
      when: "Weeks 1–2",
      title: "Onboarding as a consumer",
      body: "Build the existing SDK into sample projects on the target platforms, read the codebase and CI, and collect integration friction.",
    },
    {
      when: "Weeks 3–6",
      title: "First owned features",
      body: "Pick up scoped Unity / C# SDK tasks and bug fixes, with tests and an updated sample for each change.",
    },
    {
      when: "Month 2 onward",
      title: "Feature ownership",
      body: "Own features from design to release on the Unity side, and start contributing to the Unreal / C++ side where the team needs it.",
    },
  ],
  questions: [
    "Which platform services does the SDK cover (accounts, matchmaking, telemetry, payments, cloud saves), and which platforms do the game teams ship on?",
    "How is the work split between C#/Unity and Unreal/C++ today, and is there a dedicated Unreal engineer on the team?",
    "How is the Unity SDK distributed and versioned: UPM packages, a registry, or source drops? How often do you release?",
    "What does the CI/CD and test setup look like for the SDK and its sample apps?",
    "Is the role open to engineers based in Egypt, and what working-hours overlap does the client team expect?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the Ivris integration work and the BEDO tooling in a short call.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Senior Unity Engineer (C#)",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

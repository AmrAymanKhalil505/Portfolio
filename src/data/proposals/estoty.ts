import mr109RobotArm from "../../assets/thumbnails/projects/MR109 Compact/MR109 Robot Arm.thumb.webp";
import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: LinkedIn post "Unity Developer (Porting & LiveOps)" (Estoty, Riga, posted ~2026-09-26,
// EUR 1,800-4,000 gross/month, full-time 09:00-18:00). Read via the public LinkedIn guest page;
// the post does not say whether the role is on-site, hybrid or remote.

const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const atmoVideo = "https://youtu.be/eWFaHaYUy44";

const proposal: Proposal = {
  slug: "estoty",
  client: "Estoty",
  projectName: "Unity Developer (Porting & LiveOps)",
  dateLabel: "October 2026",
  greeting: "Hello Estoty team,",
  eyebrow: "Application · Estoty · Unity Developer (Porting & LiveOps)",
  headline: "A Unity developer who ships Quest builds and keeps one codebase running on several platforms",
  lead: [
    "Your role starts from Meta Quest titles and takes them to other platforms. I was the sole Unity developer of a Meta Quest 2 training suite at Tanta University, built a one-week VR booth game for a Nescafe event, and I own a Quest 2 for on-device testing.",
    "Since then my daily work has been keeping existing Unity codebases healthy across targets: one Ivris app running as WebGL plus Android / iOS AR, and BEDO's simulation projects that I am migrating to Unity 6. Below I map each point of your post to real work, with dates and my own role, and I am open about where I have not been yet (consoles, other VR stores, certification).",
  ],
  quickFacts: [
    { label: "Unity / C#", value: "Professionally since Dec 2023" },
    { label: "VR", value: "Meta Quest 2 (own headset)" },
    { label: "Start", value: "1 month after an offer (notice period)" },
    { label: "Time zone", value: "Egypt · same hours as Riga" },
  ],
  answers: [
    {
      title: "Commercial Unity and C# experience",
      original: "2+ years of commercial Unity and C# experience",
      body: [
        "Continuous professional Unity and C# work since December 2023, almost three years: Tanta University (Dec 2023 – Oct 2024, VR), Ivris (Jun 2024 – Jun 2026, freelance, WebGL and mobile AR) and BEDO Innovating Education (Oct 2024 – present, Senior Unity Engineer). Full table with technologies and my own responsibility is below.",
      ],
    },
    {
      title: "Shipped work",
      original: "Experience contributing to at least one shipped game",
      body: [
        "Delivered to real users: the Nescafe Ice Coffee VR surfing game ran at an event booth (2025), I delivered the Tanta University Quest 2 suite (three experiences) as sole developer, and I built the Unity app for Ivris across WebGL, Android and iOS. I was also the Unity developer of Atmosphere Protector, a mobile game for children with Arabic instruction screens. I have not yet shipped a title through a console or VR-store release; see the note below.",
      ],
    },
    {
      title: "Working in an existing codebase without breaking it",
      original: "Ability to work in an existing codebase without breaking it",
      body: [
        "This is most of my current job. Since around July 2026 I have been migrating BEDO's Unity simulation projects to Unity 6 while they stay in use, and at Ivris I worked inside a shared Unity and backend codebase where one change had to keep WebGL, Android and iOS working.",
      ],
    },
    {
      title: "Start date",
      body: [
        "I am employed at BEDO with a one-month notice period, so I can start full-time one month after an offer. Egypt's time zone is one hour ahead of CET, the same as Riga, so your 09:00–18:00 day is my 09:00–18:00 day.",
      ],
    },
    {
      title: "Location and work arrangement",
      body: [
        "I am based in Egypt and would work remotely. [[TODO: Amr — open to relocating to Riga or a hybrid setup if remote is not possible, or remote only?]]",
      ],
    },
    {
      title: "Salary",
      original: "1,800 – 4,000 EUR gross, depending on experience",
      body: ["[[TODO: salary expectation within the stated range]]"],
    },
  ],
  candidNote: {
    title: "A transparent note on porting, consoles and certification",
    body: "I have not released on PlayStation, Xbox, Nintendo, SteamVR, PlayStation VR2 or Pico, and I have not been through console or VR-store certification or Chinese regional builds. My VR work is about 11 months as sole developer of a Meta Quest 2 suite plus a one-week VR booth game, built with Auto Hand rather than OpenXR or the XR Interaction Toolkit. What I do bring: Quest builds on my own headset, one Unity codebase kept running on WebGL, Android and iOS, SDK integration (Photon, PlayFab, AR Foundation), an engine migration to Unity 6, and the habit of checking a build on the real device before calling it done. I would expect to learn each platform's SDK and certification checklist on the first port, and I would rather tell you that now than in month two.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity / WebGL training simulations of BEDO engineering trainers: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics and industrial stations, PID control labs, fluid-mechanics labs.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "ScriptableObject architecture", "Dependency injection"],
      responsibility:
        "Simulation logic and equipment states, guided steps, monitoring UI, WebGL builds, and the ongoing migration of existing projects to Unity 6. Worked with instructional-design, art and mechatronics teams; the hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "WebGL", "Android", "iOS", "AR Foundation", "AR Foundation Remote 2", "Photon", "PlayFab"],
      responsibility:
        "I built the Unity app, not the whole product: runtime loading of 3D models, Photon multiplayer room editing in WebGL, AR preview on mobile, PlayFab and backend integration.",
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
        "Everything: VR interaction flows, scenes, grab and tool interactions (working calculator and stopwatch held in hand), adapting 3D assets, and Quest builds.",
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
      responsibility: "Unity developer: gameplay loop, timed scoring, collectibles and visitor-friendly onboarding, delivered in one week.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Quest development",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Quest 2 · Auto Hand · sole developer",
      copy:
        "Three standalone Quest 2 experiences built and tested on the headset: onboarding, a 360° viewer with camera switching, and a lab with hand-held tools.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
    {
      label: "Fast-turnaround VR game",
      title: "Nescafe VR surfing booth",
      image: nescafeSurfing,
      meta: "VR · timed score loop · one week",
      copy:
        "A short-session VR game built in a week for a live event: collectibles, timer, scoring and onboarding that first-time visitors understand in seconds. Close to your playtest and marketing-build requests.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "One codebase, several platforms",
      title: "Ivris WebGL editor and mobile AR",
      image: ivrisApp,
      meta: "WebGL · Android · iOS · Photon · PlayFab",
      copy:
        "The same Unity app kept working in the browser and on Android / iOS, with third-party SDKs (Photon, PlayFab, AR Foundation) integrated and maintained across targets.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Mobile game and localized UI",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Unity · Android / iOS · Arabic UI",
      copy:
        "A Unity mobile game for children: airplane movement, pollution collection, an atmosphere health system, upgrades, and Arabic instruction screens.",
      links: [
        { label: "Video", href: atmoVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "Maintaining live projects",
      title: "BEDO industrial training simulations",
      image: mr109RobotArm,
      meta: "Unity · WebGL · Unity 6 migration",
      copy:
        "Long-running simulation projects that I extend and am migrating to Unity 6, where every change has to keep existing scenes and builds working.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Responsibilities",
      items: [
        {
          need: "Port VR titles from Meta Quest to SteamVR, PlayStation VR2 and Pico (including Chinese versions)",
          status: "partial",
          proof: "Quest 2 production builds as sole developer (Tanta) and a VR booth game (Nescafe). No release on SteamVR, PS VR2 or Pico yet.",
        },
        {
          need: "Port PC games to PlayStation, Xbox and Nintendo",
          status: "adjacent",
          proof: "No console work yet. Related: one Unity codebase shipped to WebGL, Android and iOS (Ivris), with per-platform input and build differences.",
        },
        {
          need: "Keep platform builds in sync with the main version",
          status: "direct",
          proof: "Ivris: the same app maintained across WebGL, Android and iOS as features were added.",
        },
        {
          need: "Fix platform-specific bugs, update SDKs, prepare builds",
          status: "direct",
          proof: "Quest 2 and WebGL builds and fixes (Tanta, BEDO, Ivris); Photon, PlayFab and AR Foundation integration; migrating BEDO projects to Unity 6.",
        },
        {
          need: "Support certification",
          status: "commitment",
          proof: "Not done before. I would work through each platform's requirement checklist on the first port and keep it as a reusable pre-submission list.",
        },
        {
          need: "Integrate and maintain localized versions",
          status: "adjacent",
          proof: "Arabic instruction screens in Atmosphere Protector; no multi-language pipeline or string-table workflow shipped yet.",
        },
        {
          need: "Small marketing features and prototypes: characters, UI, trailer scenes, playtest builds",
          status: "adjacent",
          proof: "One-week Nescafe VR game; UI and visual explanations across BEDO labs; I prototype quickly before committing Unity time.",
        },
        {
          need: "Switch between long-term porting and short-turnaround requests",
          status: "direct",
          proof: "Long-running BEDO projects alongside a one-week VR booth game and a parallel freelance app (Ivris).",
        },
      ],
    },
    {
      title: "Requirements",
      items: [
        {
          need: "2+ years of commercial Unity and C# experience",
          status: "direct",
          proof: "Continuously since December 2023 (almost three years) across BEDO, Ivris and Tanta University.",
        },
        {
          need: "Contributed to at least one shipped game",
          status: "partial",
          proof: "Nescafe VR game ran at a live event; Atmosphere Protector mobile game; Ivris cross-platform app. No console or VR-store game release yet.",
        },
        {
          need: "Work in an existing codebase without breaking it",
          status: "direct",
          proof: "Unity 6 migration of existing BEDO projects; shared multi-platform codebase at Ivris.",
        },
        {
          need: "Independent, adaptable, solution-oriented under tight deadlines",
          status: "direct",
          proof: "Sole developer of the Tanta Quest suite; Nescafe VR game delivered in one week.",
        },
      ],
    },
    {
      title: "Nice to have",
      items: [
        {
          need: "VR development in Unity",
          status: "direct",
          proof: "Meta Quest 2 suite (Dec 2023 – Oct 2024) and Nescafe VR booth (2025). Interactions built with Auto Hand; OpenXR / XR Interaction Toolkit not yet used in production.",
        },
        {
          need: "Console or multi-VR-platform releases, including certification",
          status: "partial",
          proof: "Multi-platform releases yes (WebGL, Android, iOS); console and multi-VR-store releases and certification not yet.",
        },
        {
          need: "Chinese platforms, stores or regional builds",
          status: "commitment",
          proof: "No prior experience; I would learn the Pico China requirements as part of the first Pico port.",
        },
        {
          need: "Platform-specific SDKs and technical requirements",
          status: "adjacent",
          proof: "Meta Quest (Android), WebGL memory and loading limits, AR Foundation on Android / iOS, Photon and PlayFab.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would approach a Quest-to-other-platform port",
    intro:
      "A first port is where I learn your codebase and the target platform, so I would make it repeatable for the next title. To be validated against your projects and pipeline:",
    steps: [
      {
        title: "Audit before changing anything",
        body: "Build the current Quest version, play it on my own Quest 2, and list every platform-dependent piece: XR plugin and input, store and entitlement SDKs, achievements, save data, rendering and performance settings, and anything hard-coded to Quest.",
      },
      {
        title: "Isolate the platform layer",
        body: "Keep gameplay in the main branch and push platform differences behind small interfaces and scripting defines, so the Quest, SteamVR, PS VR2 and Pico builds come from the same code and stay in sync with each update.",
      },
      {
        title: "Certification checklist from day one",
        body: "Read the target platform's technical requirements before porting, track each item against the build, and test on the real device. The checklist is kept and reused for the next title on the same platform.",
      },
      {
        title: "Repeatable builds",
        body: "One documented build procedure per platform, version-matched with the main game, so a LiveOps update can go out to every platform without rediscovering settings.",
      },
      {
        title: "Short requests without derailing the port",
        body: "Marketing features, trailer scenes and playtest builds on their own branches, so a quick request never leaves a port half-merged.",
      },
    ],
    note: "Platform SDKs and dev kits for PlayStation, Xbox, Nintendo and Pico come through your developer accounts; I have not had access to them before.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Before the start date",
      body: "One-month notice at my current job. If useful, I can read the platform requirements and your porting documentation during that month.",
    },
    {
      when: "Weeks 1–2",
      title: "Onboarding",
      body: "Repository, build pipeline and branching; build and play the current Quest titles; audit the first title to port.",
    },
    {
      when: "Month 1–2",
      title: "First port",
      body: "Platform layer, target SDKs, device testing and the certification checklist, with short LiveOps requests handled in parallel.",
    },
    {
      when: "After",
      title: "Repeat and maintain",
      body: "Keep every platform build in sync with updates, reuse the checklist on the next titles, and pick up marketing and playtest builds as they come.",
    },
  ],
  questions: [
    "Is the role open to full-time remote work from outside Latvia, or is it on-site or hybrid in Riga?",
    "Which title and target platform would the first port be, and is there an existing porting layer from earlier ports?",
    "Which XR stack do the Quest titles use (Oculus Integration / Meta XR SDK, OpenXR, XR Interaction Toolkit), and on which Unity versions?",
    "How are platform SDKs and dev kits handled for a remote developer: shipped hardware, remote test devices, or a QA team in Riga?",
    "How is localization set up today (Unity Localization package, string tables, an external service)?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the Quest and multi-platform demos in a short call, and to talk through how I would approach your first port.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity developer · VR and multi-platform",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

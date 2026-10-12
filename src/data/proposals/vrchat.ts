import nescafeJungle from "../../assets/thumbnails/projects/Nescafe/Nescafe Water Jungle.thumb.webp";
import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import mr109RobotArm from "../../assets/thumbnails/projects/MR109 Compact/MR109 Robot Arm.thumb.webp";
import laminar from "../../assets/thumbnails/projects/EduLab/Laminar.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: VRChat careers on Lever, "Unity Technical Artist, Event Pipeline" (full-time, remote
// anywhere with US time-zone overlap, posted ~2026-09-11). The post has no application questions,
// so the answers cover what a hiring team needs to decide: experience, evidence, pay, start, overlap.

const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const atmosphereVideo = "https://youtu.be/eWFaHaYUy44";

const proposal: Proposal = {
  slug: "vrchat",
  client: "VRChat",
  projectName: "Unity Technical Artist, Event Pipeline",
  dateLabel: "October 2026",
  greeting: "Hello VRChat team,",
  eyebrow: "Application · VRChat · Unity Technical Artist, Event Pipeline",
  headline: "A Unity engineer who ships 3D content to Quest, WebGL and mobile, for your event pipeline",
  lead: [
    "Your role is about getting live-ops props from finished to shipped without surprises: implementing and validating assets in Unity, writing C# and Udon automation, and setting quality gates and performance budgets. I come at that from the engineering side. I have shipped Unity scenes and 3D content to Meta Quest 2 standalone, Unity WebGL and Android / iOS, and I build the systems that check and drive that content.",
    "I am a Unity engineer rather than a career technical artist, and I say exactly where that matters in the note below. On this page: my experience with dates and my own role, the evidence from my portfolio, an honest match against your requirements, and how I would approach the first months of the event pipeline.",
  ],
  quickFacts: [
    { label: "Role", value: "Full-time, remote" },
    { label: "Start", value: "1 month after an offer (notice period)" },
    { label: "Time zone", value: "Egypt · 1 h ahead of CET" },
    { label: "Test headset", value: "Meta Quest 2 (own)" },
  ],
  answers: [
    {
      title: "Unity experience, with dates",
      body: [
        "Professional Unity development continuously since December 2023. Since Oct 2024: Senior Unity Engineer at BEDO Innovating Education (Unity / WebGL simulations of engineering trainers, migrating projects to Unity 6 since mid-2026). Jun 2024 – Jun 2026: Unity and AR developer for Ivris (freelance), including runtime 3D model loading across WebGL and mobile. Dec 2023 – Oct 2024: sole Unity VR developer of a Meta Quest 2 training suite at Tanta University. 2025: a one-week VR booth game for Nescafe. Full table below.",
      ],
    },
    {
      title: "Portfolio, with my own contribution",
      body: [
        "Each project below links to a demo video and a case study, and states what I built versus what belongs to the company. Company products and hardware belong to their owners; my part is the Unity implementation.",
      ],
    },
    {
      title: "Overlap with US time zones",
      body: [
        "I work from Egypt, one hour ahead of Central European Time. I can overlap with US time zones [[TODO: daily overlap window you can commit to, e.g. which US Eastern / Pacific hours]], and I am used to async handoffs: written notes, short recorded walkthroughs and clear tickets.",
      ],
    },
    {
      title: "Start date",
      body: [
        "I have a one-month notice period at my current job, so I can start full-time one month after accepting an offer. [[TODO: confirm you would leave BEDO for a full-time employee role at 40 h/week]]",
      ],
    },
    {
      title: "Salary expectation",
      body: ["[[TODO: salary/rate expectation for a full-time remote role]]"],
    },
  ],
  candidNote: {
    title: "A transparent note on the technical-artist requirement",
    body: "You ask for 3+ years as a Technical Artist, Tools Artist or similar. My professional Unity work adds up to almost three years (since December 2023), and it is engineering rather than technical art: simulation logic, interaction systems, runtime content loading and builds for Quest 2, WebGL and mobile. I have adapted and modified 3D models to fit scenes and kept them running on constrained targets, but I have not owned a shader, lighting or LOD pipeline, I have not built Unity Editor extensions that are shown in my portfolio, and I have not used Udon, UdonSharp or the VRChat SDK in production. What I would bring is the systems side of the role: validation, automation and state logic that stop the same failure from shipping twice. I would rather you know this now than find it in the dates.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity / WebGL training simulations of BEDO engineering trainers: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics and industrial stations, PID control labs, fluid-mechanics labs.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)"],
      responsibility:
        "Simulation logic and equipment states, guided experiment steps, measurement UI, visual explanations of hidden processes, browser builds. Includes a visual command editor that validates student-built robot scripts before they run. The hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "WebGL", "AR Foundation", "Photon", "PlayFab"],
      responsibility:
        "I built the Unity app, not the whole product: runtime loading of furniture and room models that had to stay reliable on WebGL and mobile, Photon multiplayer room editing, AR preview and backend integration.",
      links: [
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
        { label: "Video", href: ivrisVideo },
      ],
    },
    {
      period: "Dec 2023 – Oct 2024",
      title: "Tanta University — Unity VR developer (sole developer)",
      context:
        "Meta Quest 2 training suite: headset onboarding, multi-angle 360° surgical-room viewer, interactive viscosity lab.",
      tech: ["Unity", "C#", "Meta Quest 2", "Auto Hand", "360 video", "Android"],
      responsibility:
        "Everything: interaction flows, scenes, adapting and modifying 3D models to fit each scenario, hand-held tool interactions, and standalone headset builds.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth (freelance)",
      context: "Short-session branded VR game for an event booth: themed sand and water routes, collectibles, a timer.",
      tech: ["Unity", "C#", "VR"],
      responsibility:
        "Unity developer: gameplay loop, timed scoring, collectibles, visitor onboarding, and keeping it reliable through repeated public sessions.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Event content in VR",
      title: "Nescafe VR booth",
      image: nescafeJungle,
      meta: "VR · themed routes · live event",
      copy:
        "Branded environments and collectibles for a one-week event build, made to read clearly in a headset and survive back-to-back public sessions.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "Standalone headset target",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Quest 2 · adapted 3D assets · sole developer",
      copy:
        "Three standalone Quest 2 experiences built alone, including adapting and modifying 3D models so each scene served its purpose on mobile-class hardware.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
    {
      label: "3D content at runtime",
      title: "Ivris WebGL room editor",
      image: ivrisApp,
      meta: "WebGL · mobile AR · runtime model loading",
      copy:
        "Furniture and room models loaded at runtime in a production Unity app, kept reliable across WebGL and Android / iOS, with multiplayer editing on top.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Validation before execution",
      title: "MR109 / MR110 industrial training",
      image: mr109RobotArm,
      meta: "State machines · validated command editor",
      copy:
        "Station behaviour driven by explicit states, and a visual command editor that reports structural problems before a script is allowed to run: the same idea as a quality gate.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Browser performance",
      title: "Engineering education virtual labs",
      image: laminar,
      meta: "WebGL · real-time visuals",
      copy:
        "Flow and energy visualisations that update live as learners change inputs, balanced for clarity and performance in the browser.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Mobile tier",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Android · iOS · educational game",
      copy: "A Unity educational mobile game for children, built for Android and iOS.",
      links: [
        { label: "Video", href: atmosphereVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "What the role does",
      items: [
        {
          need: "Own and improve the Unity pipeline for live-ops assets",
          status: "commitment",
          proof: "I have not owned an art pipeline yet. I would start by mapping the current path from finished asset to shipped event and fixing the steps that fail most often.",
        },
        {
          need: "Implement and validate 3D assets: prefabs, materials, shaders, collisions, LODs, lighting, import settings",
          status: "partial",
          proof: "Unity scenes and adapted or runtime-loaded 3D models shipped to Quest 2, WebGL and mobile. No shader authoring, LOD pipeline or lighting ownership shown in my portfolio.",
        },
        {
          need: "Tools and automation in C# and Udon",
          status: "partial",
          proof: "C# in every project, including a validating command editor and runtime model loading. Udon / UdonSharp: not used yet.",
        },
        {
          need: "Quality gates: asset validation, naming conventions, performance budgets, release checklists",
          status: "adjacent",
          proof: "Validation-before-run in the MR109 / MR110 command editor; performance limits on Quest 2 standalone and WebGL. Applied to art assets, this would be new for me.",
        },
        {
          need: "Debug content and pipeline issues across disciplines",
          status: "direct",
          proof: "Simulation work at BEDO that has to match engineering trainers and instructional goals; Unity, Photon and backend integration issues at Ivris.",
        },
        {
          need: "Work with Product Design and Creators partners",
          status: "adjacent",
          proof: "I agree system behaviour with non-programmers before building it (see my prototype-first process below); no creator-partner work yet.",
        },
        {
          need: "Document workflows as content volume grows",
          status: "commitment",
          proof: "Written checklists and short how-to pages for every gate and tool, kept next to the tool itself.",
        },
      ],
    },
    {
      title: "Requirements",
      items: [
        {
          need: "3+ years as a Technical Artist, Tools Artist or similar, or equivalent shipped work",
          status: "partial",
          proof: "Almost 3 years of professional Unity engineering since Dec 2023, with shipped builds; not as a technical artist. See the note above.",
        },
        {
          need: "Strong Unity, shipping real-time 3D content that performs well",
          status: "direct",
          proof: "Shipped to Quest 2 standalone, WebGL and Android / iOS: all performance-constrained targets.",
        },
        {
          need: "C# scripting and tools that reduce production risk",
          status: "direct",
          proof: "C# across all projects; the validating command editor exists to stop broken scripts before they run.",
        },
        {
          need: "Solid 3D fundamentals",
          status: "adjacent",
          proof: "Unity scenes, adapted models, runtime model loading, exploded-view animation and 3D visualisation; I am not a 3D artist.",
        },
        {
          need: "Systems-minded about preventing recurring failures",
          status: "direct",
          proof: "My simulations are built on explicit state machines and validation, so a failure is caught at a known step instead of at the end.",
        },
        {
          need: "Clear cross-disciplinary communication and ownership",
          status: "direct",
          proof: "Sole developer at Tanta University, from instructional-design requirements to headset builds; built the Unity app at Ivris; HTML prototypes that let instructional-design engineers verify behaviour before Unity work.",
        },
      ],
    },
    {
      title: "Nice to have",
      items: [
        {
          need: "Unity Editor tooling, import automation, asset validation",
          status: "adjacent",
          proof: "Runtime tooling (command editor with validation, runtime model loading). Unity Editor extensions are not in my portfolio.",
        },
        {
          need: "VRChat toolchain: VRChat SDK, Creator Companion",
          status: "commitment",
          proof: "Not used yet. I would learn it in the notice month by building and uploading test worlds.",
        },
        {
          need: "Udon / UdonSharp",
          status: "commitment",
          proof: "Not used yet. Photon multiplayer at Ivris gave me the habit of thinking about synced versus local state.",
        },
        {
          need: "Avatar components (PhysBones, Contacts)",
          status: "commitment",
          proof: "Not used yet.",
        },
        {
          need: "Optimising for several hardware tiers, including PC and mobile",
          status: "adjacent",
          proof: "Shipped to Quest 2 standalone (Android), WebGL and Android / iOS; no PC VR tier in my portfolio.",
        },
        {
          need: "Live ops or high-cadence publishing",
          status: "partial",
          proof: "A one-week event build (Nescafe booth); no recurring live-ops schedule yet.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would approach the event pipeline",
    intro:
      "To be validated against your current pipeline and the team's pain points, but this is where I would start:",
    steps: [
      {
        title: "Map the path from finished to shipped",
        body: "Follow a few recent event props from hand-off to release and list where they failed: missing colliders, wrong import settings, materials that don't hold up on mobile, budget overruns, late surprises in review. The most frequent failure becomes the first gate.",
      },
      {
        title: "Write the rules down before the tool",
        body: "Naming conventions, per-tier budgets (PC and mobile) and the release checklist agreed with art and product design as a short shared document first, so the tool enforces rules people already accept.",
      },
      {
        title: "Automate the checks in the Unity Editor",
        body: "A C# validator that runs on import or on demand, reports each problem with a link to the offending object, and fixes the safe ones automatically. Results are readable by artists, not only engineers.",
      },
      {
        title: "Prototype event logic before building it",
        body: "Before I build interactive event behaviour in Unity, I make an HTML prototype with 2D vector graphics where every changing value is driven by its real rule and shown next to it. Designers can check the behaviour and see nothing is hard-coded, and we agree on it there before Unity or Udon time is spent. I use this process for every simulation today.",
      },
      {
        title: "Document as the volume grows",
        body: "Each gate and tool gets a one-page how-to and a changelog, so a new event or a new team member does not depend on asking me.",
      },
    ],
    note: "Udon / UdonSharp, the VRChat SDK and your shader and lighting standards are new to me; I would treat the first weeks as learning them on real event content with the team.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Preparation",
      body: "Learn the VRChat SDK, Creator Companion and UdonSharp by building and uploading test worlds; read your public creator documentation.",
    },
    {
      when: "First month",
      title: "Learn the pipeline",
      body: "Ship real event props with the team, map the current hand-off path and list the recurring failures.",
    },
    {
      when: "Months 2–3",
      title: "First quality gates",
      body: "Written conventions and budgets agreed with art and product design; first Editor validator covering the most frequent failures.",
    },
    {
      when: "After",
      title: "Automate and document",
      body: "Extend validation and automation event by event, with documentation kept next to each tool.",
    },
  ],
  questions: [
    "Where do event props fail most often today: on import, in review, on mobile performance, or after release?",
    "Which hardware tiers must every event asset pass (PC, Quest / Android, iOS), and are the budgets already written down?",
    "How much of the role is hands-on asset implementation versus building tools and automation?",
    "Is Udon logic for events written in UdonSharp, Udon Graph, or both?",
    "How many US working hours of overlap does the team need each day, and in which time zone?",
    "For someone outside the US and Canada, how is employment set up (contractor or employer of record)?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the demos in a short call and talk about where your event pipeline loses the most time.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity engineer · VR / simulation",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import ev117Particles from "../../assets/thumbnails/projects/EduLab/EV117 Particles.thumb.webp";
import cimBlockEditor from "../../assets/thumbnails/projects/cim/Inter02.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: Reddit r/gameDevClassifieds post "[PAID] [FULLTIME] Senior Multiplayer / Backend Developer –
// Indie Space MMO Shooter (Unity / FishNet)", posted 2026-10-18 (crosspost from r/gameDevJobs).
// The post text could not be re-read on 2026-10-20 (Reddit login wall), so the answers follow the
// Job Radar summary: server-side work on a Unity FishNet space MMO shooter (scaling the server
// architecture, replication and sync, zone and server merging, procedural space zones, networked
// flight and FPS physics, server builds and releases), AI-assisted development as a plus, and
// applicants asked for their expected hourly rate. Reddit client: the studio is described, not named.
// Amr's multiplayer experience is Photon + PlayFab at Ivris only; the candid note says so.

const atmoVideo = "https://youtu.be/eWFaHaYUy44";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";

const proposal: Proposal = {
  slug: "space-mmo",
  client: "Indie space MMO studio",
  projectName: "Multiplayer and server work on a Unity / FishNet space MMO shooter",
  dateLabel: "October 2026",
  greeting: "Hello,",
  eyebrow: "Application · Indie space MMO shooter · Senior Multiplayer / Backend Developer (Unity / FishNet)",
  headline: "Unity engineer with real-time multiplayer in production, applying to grow into your server side",
  lead: [
    "Your post is about the server side of a Unity space MMO shooter on FishNet: replication and synchronization, scaling the server architecture, zones that merge and split, procedural space, and flight and FPS physics that have to agree across the network. My closest match is Ivris, where I built the Unity app's real-time multiplayer: Photon-based collaborative room editing in WebGL, where several users change the same scene and every edit has to reach everyone in the same state, connected to PlayFab and a hosted backend.",
    "I want to be straight about the level: that is client-side multiplayer on Photon, not FishNet, and I have not built or run dedicated or authoritative game servers. Below I answer what your post asks, show the work that does transfer (state sync, physics-driven simulation, large shared C# codebases, Codex and Claude Code every day), and say plainly where I would be learning on your project.",
  ],
  quickFacts: [
    { label: "Stack", value: "Unity · C# · Photon · PlayFab" },
    { label: "Start", value: "1 month after an offer" },
    { label: "Hours", value: "40 h/week (full-time)" },
    { label: "Location", value: "Egypt (remote)" },
  ],
  answers: [
    {
      title: "Multiplayer and backend experience",
      original: "Senior multiplayer / backend developer: Unity, FishNet, authoritative and dedicated servers",
      body: [
        "Ivris (freelance, Jun 2024 - Jun 2026): I built the Unity app, not the whole product. That included Photon-based multiplayer room editing in WebGL, with layout changes synchronized between users in real time, and the Unity client's integration with PlayFab and a Render-hosted backend for user and content workflows.",
        "I have not used FishNet in a project, and I have not designed, hosted or scaled a dedicated or authoritative server, merged server zones or shipped server builds. The note below covers that honestly.",
      ],
    },
    {
      title: "Unity and C# experience, with dates",
      body: [
        "Continuous professional Unity / C# work since December 2023: Senior Unity Engineer at BEDO Innovating Education (Oct 2024 - present), Unity and AR developer for Ivris (freelance, Jun 2024 - Jun 2026), sole Unity VR developer at Tanta University (Dec 2023 - Oct 2024), and a one-week VR booth game for Nescafe Ice Coffee (2025). At BEDO I work on a shared team codebase of about 80,000 lines of in-house C#. Full table with technologies and my own role is further down.",
      ],
    },
    {
      title: "Physics and simulation",
      original: "Networked flight and FPS physics",
      body: [
        "Most of my work is physics- and equation-driven simulation: fluid-mechanics and fuel-cell labs where every changing value comes from its real equation, and a plane-flight core loop in Atmosphere Protector, a mobile educational game (not released). None of that physics was networked, and I have not built FPS systems.",
      ],
    },
    {
      title: "AI-assisted development",
      body: [
        "I use Codex and Claude Code every day to speed up development, and I review and test what they produce before it goes in. That would help most on the parts that are new to me: reading FishNet's source and docs, writing test harnesses and load-test clients, and scaffolding server tooling.",
      ],
    },
    {
      title: "Expected hourly rate",
      original: "Your expected hourly rate",
      body: ["[[TODO: rate]]"],
    },
    {
      title: "Availability and start date",
      body: [
        "I am currently employed with a one-month notice period. I give notice when we agree terms and start full-time one month later. During the notice month I can already work about 15 hours a week, enough to get into your codebase and the FishNet setup before day one. After that, 40 hours a week.",
      ],
    },
    {
      title: "Location and time zone",
      body: [
        "I live in Egypt and work remotely, one hour ahead of Central European time. Your post does not say where you hire from, so that is my first question below.",
      ],
    },
    {
      title: "Portfolio",
      body: [
        "Each project below links to a demo video and a case study that states what I built myself and what belongs to the wider team or the company.",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on the server side",
    body: "This is a senior multiplayer / backend role and my multiplayer background is narrower than that title. What I have done in production: real-time multiplayer on the Unity client with Photon (collaborative WebGL room editing at Ivris) and PlayFab plus hosted-backend integration from the client. What I have not done: FishNet, authoritative or dedicated game servers, client-side prediction and lag compensation for fast movement, zone or server merging, server hosting and scaling for many concurrent players, server build and release pipelines, procedural generation, or FPS systems. I also have not worked on an MMO or a shooter. What I bring: careful state and synchronization thinking from collaborative editing, physics-driven simulation, long-lived shared C# codebases, and AI tools that make me fast at learning a new stack. If you need someone who owns the server architecture from day one, I am not that person yet. If you have a senior or lead who sets the server design and want an engineer who takes over replication, sync and server-side features under that design and grows into the rest, I would like to try, and I am happy to start with a paid trial task so you can judge.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Interactive Unity training simulations of BEDO engineering trainers, sold as commercial B2B products: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics stations, PID control labs, fluid-mechanics labs. Migrating projects to Unity 6 since mid-2026.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration)", "ScriptableObject architecture", "Dependency injection", "DOTween"],
      responsibility:
        "Simulation and state logic (equation-driven lab behaviour, PLC-style station states), guided steps, UI, runtime tools such as a visual command editor and interpreter, and WebGL builds. Shared team codebase of about 80,000 lines of in-house C#; I mentor one intern and review his work. The hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: collaborative WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "WebGL", "Photon", "PlayFab", "AR Foundation", "Android", "iOS"],
      responsibility:
        "The Unity app, not the whole product: Photon-based multiplayer room editing in WebGL with real-time layout sync between users, runtime loading of 3D models, mobile AR preview, and the client's integration with PlayFab and a Render-hosted backend.",
      links: [
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
        { label: "Video", href: ivrisVideo },
      ],
    },
    {
      period: "Dec 2023 – Oct 2024",
      title: "Tanta University — Unity VR developer (sole developer)",
      context: "Meta Quest 2 training suite: onboarding tutorial, 360° surgical-room viewer, interactive viscosity lab.",
      tech: ["Unity", "C#", "Meta Quest 2", "Auto Hand", "Android"],
      responsibility:
        "Everything: interaction flows, scenes, hand-held tool interactions, standalone headset builds on mobile hardware.",
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
        "Unity developer: gameplay loop, movement, timed scoring and collectibles, from brief to booth in one week. The brand belongs to its owners.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Real-time multiplayer",
      title: "Ivris collaborative room editor",
      image: ivrisApp,
      meta: "Photon · WebGL · PlayFab · hosted backend",
      copy:
        "Several users edit the same room in the browser and every furniture change is synchronized to the others in real time. The Unity client also connects to PlayFab and a Render-hosted backend for user and content workflows. My part was the Unity app; the backend and product belong to Ivris.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Physics-driven simulation",
      title: "Engineering education virtual labs",
      image: ev117Particles,
      meta: "Equation-driven · graphs · WebGL",
      copy:
        "Fluid-mechanics and fuel-cell labs where measurements, graphs and 3D feedback stay consistent with the underlying equations as learners change inputs. Keeping one source of truth for state is the same discipline a server-authoritative simulation needs.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Flight controls",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Unity · plane flight · not released",
      copy:
        "Mobile educational game where the player flies a plane through pollution clouds and unlocks upgrades. Single-player and not released; shown for the flight controls and core loop.",
      links: [
        { label: "Video", href: atmoVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "State machines and tools",
      title: "Station behaviour and command interpreter",
      image: cimBlockEditor,
      meta: "PLC-style states · block editor · interpreter",
      copy:
        "Station-by-station process states for a mechatronics training line, plus a block-based command editor with validation and a G-code-style interpreter with run, pause and stop controls.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Multiplayer and server",
      items: [
        {
          need: "Unity multiplayer with FishNet",
          status: "adjacent",
          proof: "Real-time multiplayer on Photon at Ivris (collaborative WebGL editing). FishNet itself not used yet.",
        },
        {
          need: "Replication and synchronization",
          status: "adjacent",
          proof: "Real-time sync of shared scene edits between users at Ivris. Not fast-moving ships or players with prediction and reconciliation.",
        },
        {
          need: "Authoritative / dedicated server architecture and scaling",
          status: "commitment",
          proof: "Not done yet. I would learn it under your current design, starting with measurements on your existing server.",
        },
        {
          need: "Zone and server merging",
          status: "commitment",
          proof: "Not done yet.",
        },
        {
          need: "Server builds and releases",
          status: "partial",
          proof: "I own WebGL, Android / iOS and Quest builds in production. Headless server builds and server deployment: not yet.",
        },
        {
          need: "Backend services",
          status: "partial",
          proof: "Client-side integration with PlayFab and a Render-hosted backend at Ivris. I did not build that backend.",
        },
      ],
    },
    {
      title: "Gameplay systems over the network",
      items: [
        {
          need: "Networked flight physics",
          status: "partial",
          proof: "Plane-flight controls in Atmosphere Protector (single-player, not released) and physics-driven lab simulations. Not networked.",
        },
        {
          need: "FPS systems",
          status: "commitment",
          proof: "Not done yet.",
        },
        {
          need: "Procedurally generated space zones",
          status: "commitment",
          proof: "Not done yet. Seeded, deterministic generation that server and clients agree on would be my starting point.",
        },
      ],
    },
    {
      title: "Engineering and way of working",
      items: [
        {
          need: "Senior-level Unity / C#",
          status: "direct",
          proof: "Senior Unity Engineer at BEDO; Unity / C# continuously since Dec 2023, including a shared ~80,000-line in-house C# codebase and a Unity 6 migration.",
        },
        {
          need: "Own features end to end, work independently and remotely",
          status: "direct",
          proof: "Sole developer of the Quest 2 suite; freelance work for Ivris over two years alongside full-time roles.",
        },
        {
          need: "AI-assisted development",
          status: "direct",
          proof: "Codex and Claude Code daily in development; I review and test what they produce.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would start on the server side",
    intro:
      "To be checked against your codebase, FishNet version and hosting setup, but this is how I would use the first weeks:",
    steps: [
      {
        title: "Read the netcode before changing it",
        body: "Map what the server owns and what clients predict, the tick rate, which objects are networked and how zones are split today, and write it down as a one-page diagram you can correct.",
      },
      {
        title: "Measure first",
        body: "Add counters for bandwidth per client, objects per zone and server frame time, and build a headless bot client that flies ships around, so every later change has a before and after number.",
      },
      {
        title: "Prototype in a small scene",
        body: "At BEDO I build an HTML prototype of every system, with each changing value driven by its real equation, and the people who own the behaviour check it before any Unity time is spent. Here the same rule means trying a sync or zone change in a stripped-down FishNet scene with bots first, and only then moving it into the game.",
      },
      {
        title: "One source of truth",
        body: "Keep the authoritative state on the server and make clients pure presentation plus prediction, so a zone merge or a reconnect is a state transfer, not a special case.",
      },
      {
        title: "Small, reviewable changes",
        body: "Ship server work in small pull requests that your lead can review, with the measurements attached, so mistakes stay cheap while I am learning your architecture.",
      },
    ],
    note: "FishNet, dedicated-server hosting and zone merging are new to me; I would expect a senior or lead on your side to own the server architecture decisions at first.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time onboarding",
      body: "About 15 hours a week around my current job: read the codebase and FishNet setup, run a local server and clients, and deliver a small first task or the paid trial.",
    },
    {
      when: "Month 1",
      title: "Full-time, measuring and fixing",
      body: "40 hours a week. Bot client and network metrics in place, then the first replication or sync fixes your team prioritizes.",
    },
    {
      when: "Months 2-3",
      title: "Server-side features",
      body: "Take over server-side features under your architecture: zone work, procedural zone generation, networked flight behaviour, with measurements on every change.",
    },
    {
      when: "Ongoing",
      title: "Scaling and releases",
      body: "Share in server builds and releases and grow toward owning parts of the server architecture as your lead hands them over.",
    },
  ],
  questions: [
    "Do you hire contractors living in Egypt, and how many working hours of overlap do you need with your team's time zone?",
    "How is the server set up today: dedicated FishNet servers or host mode, where are they hosted, and what tick rate and player count per zone do you run?",
    "What does zone and server merging mean in your game: moving players between server instances at runtime, or combining shards?",
    "Who owns the server architecture now, and would this role work under a lead or be the only multiplayer engineer?",
    "Are procedural space zones generated on the server and replicated, or from a shared seed on each client?",
    "Would you consider a short paid trial task, for example a sync or bandwidth problem you already know about?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the Ivris multiplayer work in a short call and to take a paid trial task on your codebase, so you can judge how fast I pick up FishNet and your server side.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity developer · real-time multiplayer and simulations",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

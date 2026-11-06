import ev117Particles from "../../assets/thumbnails/projects/EduLab/EV117 Particles.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: r/gameDevClassifieds post "[Hiring][Paid] Unity HDRP Optimization Engineer / Technical
// Artist – Fixed-Price $2,500 USD" (independent solo artist, posted ~2026-10-16). The full post could
// not be fetched (Reddit blocked); answers map to the Job Radar summary: content-complete ~20-minute
// Unity HDRP PC art game for Steam; Milestone 1 (2-3 weeks): performance across 4 hardware tiers,
// Low-Ultra graphics presets and menu, Steam Input gamepad support with prompt swapping, crash
// telemetry (Unity Cloud Diagnostics / Sentry), Steam Deck compatibility, release build; Milestone 2:
// 2-4 weeks post-launch hotfix standby at about 5-10 hours/week. Playmaker is listed in the skills.

const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";

const proposal: Proposal = {
  slug: "hdrp-optimization",
  client: "Independent HDRP art game (Steam release)",
  projectName: "HDRP optimisation and Steam release build",
  dateLabel: "October 2026",
  eyebrow: "Application · Indie HDRP art game · Unity optimisation and release engineer",
  headline: "Unity engineer for your HDRP game's optimisation and Steam release",
  lead: [
    "Your game is content-complete; what is left is engineering: make it run well on four hardware tiers and the Steam Deck, give players Low to Ultra presets, add gamepad support with the right button prompts, catch crashes after launch, and ship a clean release build. That is the kind of work I do every day as a Unity engineer: I take content made by artists and designers and turn it into builds that hold up on the hardware they have to run on.",
    "I want to be upfront: I have not shipped an HDRP project. My production work is in the built-in pipeline and URP. Below I answer each part of your post, show what I have shipped, and explain how I would measure first, change second, and show you the numbers at every step.",
  ],
  quickFacts: [
    { label: "Budget", value: "USD 2,500 fixed, 2 milestones (as posted)" },
    { label: "Engine", value: "Unity (C#)" },
    { label: "Start", value: "Part-time in notice month, full pace after" },
    { label: "Time zone", value: "Egypt (UTC+2 / +3)" },
  ],
  answers: [
    {
      title: "Optimisation across your four hardware tiers",
      original: "Performance optimisation across 4 hardware tiers",
      body: [
        "I would start with a profiled baseline on each tier (Unity Profiler, Frame Debugger, HDRP's own debug views) so we both see where the frame time goes before anything changes. Then the usual HDRP cost centres, in order of what the profiler shows: volumetrics and fog, shadows and shadow cascades, screen-space effects (SSR, SSAO, SSGI), post-processing, lighting and reflection probes, draw calls and overdraw, texture memory.",
        "Every change is measured before and after, so you keep the look you made and only lose what players will not notice. [[TODO: optimisation example from my own work (what was slow, what changed, result)]]",
      ],
    },
    {
      title: "Graphics presets and settings menu",
      original: "Low / Medium / High / Ultra graphics presets and menu",
      body: [
        "One HDRP asset (or quality level) per preset, with the expensive features scaled down step by step, plus a settings menu for preset, resolution, window mode, V-Sync and frame-rate cap, saved between sessions. Each preset is checked on the tier it is meant for, and you sign off on how each one looks, since the art direction is yours.",
      ],
    },
    {
      title: "Steam Input and gamepad support",
      original: "Steam Input / gamepad support with prompt swapping",
      body: [
        "Full gamepad navigation of the game and every menu, with on-screen prompts that switch between keyboard and gamepad icons when the player changes device. I have not shipped Steam Input before; I would agree with you early whether we use Unity's Input System with Steam Input's controller mapping or the Steamworks Input API, and test it on the controllers you care about.",
      ],
    },
    {
      title: "Crash reporting",
      original: "Crash reporting (Unity Cloud Diagnostics / Sentry)",
      body: [
        "Set up whichever you prefer, so crashes and exceptions from players' machines arrive with the hardware, OS and build version. That is what makes the post-launch hotfix weeks efficient. I would test the integration with a forced crash before release, so we know reports arrive before players do.",
      ],
    },
    {
      title: "Steam Deck compatibility and the release build",
      original: "Steam Deck / Steam Machine compatibility, release build",
      body: [
        "A Deck-specific preset (resolution, frame cap, the heaviest effects off), gamepad-only playable, readable text at Deck screen size, and a release build with development flags off, logs trimmed and the build size checked. [[TODO: test hardware I have for the four tiers; do I have a Steam Deck?]]",
      ],
    },
    {
      title: "Post-launch hotfix standby",
      original: "Milestone 2: 2-4 weeks of post-launch support, about 5-10 hours/week",
      body: [
        "Yes. During the standby weeks I check the crash reports and your player feedback, fix defects and ship patch builds. Defects in code I wrote are fixed at no extra charge; new features after launch are priced separately. I would like us to agree in writing what counts as a hotfix, and the response time you expect, before we start.",
      ],
    },
    {
      title: "Budget and availability",
      original: "Fixed price USD 2,500, Milestone 1 (2-3 weeks) + Milestone 2",
      body: [
        "[[TODO: project price]]",
        "I am employed with a one-month notice period. During that month I can work part-time, about 15 hours per week; after it, 30 hours per week, up to 40 in busy phases. If your launch date needs Milestone 1 inside two to three weeks from now, tell me the date and I will tell you honestly whether the notice-month hours cover it.",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on HDRP and optimisation evidence",
    body: "I have not worked on an HDRP project in production. My shipped Unity work uses the built-in render pipeline (BEDO, Ivris) and URP (the Nescafe VR booth game, 2025). General Unity engineering, C#, UI and build work transfer directly; the HDRP-specific settings (volumetrics, its shadow and screen-space options, frame settings per camera) I would learn on your project, guided by the profiler. My scripting is in C#. [[TODO: Playmaker experience]] If you need someone who has already shipped an HDRP game on Steam, I am probably not your strongest candidate, and I prefer you know that now rather than after the first milestone.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity / WebGL training simulations of BEDO engineering trainers: fuel-cell, mechatronics, PID control and fluid-mechanics labs. Commercial products sold to universities and companies.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "Built-in render pipeline", "DOTween"],
      responsibility:
        "My Unity implementation of the simulations: state logic, visual effects that show hidden processes, UI and browser builds. Largest codebase about 80,000 lines of in-house C#, shared by the team. The hardware and products belong to BEDO.",
      links: [
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Interior-design app: WebGL room editor plus Android / iOS AR preview. I built the Unity app, not the whole product.",
      tech: ["Unity 6", "C#", "WebGL", "AR Foundation", "Photon", "PlayFab"],
      responsibility: "Runtime loading of 3D furniture and room models, Photon multiplayer room editing in WebGL, AR preview, backend integration.",
      links: [
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
        { label: "Video", href: ivrisVideo },
      ],
    },
    {
      period: "Dec 2023 – Oct 2024",
      title: "Tanta University — Unity VR developer (sole developer)",
      context: "Meta Quest 2 training suite: headset onboarding, 360° surgical-room viewer, interactive viscosity lab.",
      tech: ["Unity", "C#", "Meta Quest 2", "Auto Hand", "Android"],
      responsibility: "Everything: scenes, interactions, adapting 3D assets and standalone headset builds.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth (freelance, one-week project)",
      context: "Short-session VR game for an event booth: surf sand and water tracks, collect cans, beat the timer. Built in URP.",
      tech: ["Unity", "C#", "URP", "VR"],
      responsibility: "Unity developer: gameplay loop, timed scoring, collectibles and visitor-friendly onboarding.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Shipped to constrained hardware",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Standalone headset · sole developer",
      copy:
        "A complete suite running on a standalone mobile headset, where every scene has to fit a tight frame and memory budget. I built it alone, including the builds.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
    {
      label: "Render pipeline closest to yours",
      title: "Nescafe VR surfing booth",
      image: nescafeSurfing,
      meta: "URP · VR · one week",
      copy:
        "My URP project: several environment routes delivered as a finished game in a week. Scriptable render pipeline, but not HDRP.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "Effects in a commercial product",
      title: "EV117 particle view",
      image: ev117Particles,
      meta: "Particles · UI · browser delivery",
      copy:
        "Particle effects, live readings and UI in a commercial training product delivered as a browser build.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Production builds and runtime content",
      title: "Ivris WebGL room editor",
      image: ivrisApp,
      meta: "Unity 6 · WebGL · runtime 3D loading",
      copy: "Production Unity 6 app loading 3D models at runtime with real-time multiplayer editing in the browser.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Milestone 1: pre-launch",
      items: [
        {
          need: "Performance optimisation across 4 hardware tiers",
          status: "partial",
          proof: "Builds shipped for a standalone headset and the browser; profiling-led method. No HDRP project yet. [[TODO: optimisation example]]",
        },
        {
          need: "Unity HDRP",
          status: "partial",
          proof: "Built-in pipeline in production (BEDO, Ivris) and URP (Nescafe, 2025). HDRP not used in production.",
        },
        {
          need: "Low to Ultra graphics presets and settings menu",
          status: "commitment",
          proof: "One HDRP quality level per preset, a settings menu that saves the player's choice, each preset checked on its tier and signed off by you.",
        },
        {
          need: "UI",
          status: "direct",
          proof: "Menus, dashboards and step-by-step UI in every BEDO simulation and the Nescafe main menu.",
        },
        {
          need: "Steam Input / gamepad support with prompt swapping",
          status: "commitment",
          proof: "Not shipped before. Full gamepad navigation and device-aware prompts, tested on the controllers you name.",
        },
        {
          need: "Crash reporting (Unity Cloud Diagnostics or Sentry)",
          status: "commitment",
          proof: "Integrated with the tool you prefer and tested with a forced crash before release.",
        },
        {
          need: "Steam Deck / Steam Machine compatibility",
          status: "commitment",
          proof: "Deck preset, gamepad-only play, readable text at Deck screen size. Test hardware to be agreed.",
        },
        {
          need: "Release build",
          status: "direct",
          proof: "Production builds for WebGL (BEDO, Ivris), Android / iOS (Ivris) and Quest 2 (Tanta).",
        },
      ],
    },
    {
      title: "Milestone 2 and working style",
      items: [
        {
          need: "Post-launch hotfix standby, about 5-10 hours/week for 2-4 weeks",
          status: "commitment",
          proof: "Crash reports and player feedback checked, patch builds shipped; hotfix vs new work agreed in writing.",
        },
        {
          need: "C#",
          status: "direct",
          proof: "All my Unity work since Dec 2023; largest codebase about 80,000 lines of in-house C# at BEDO.",
        },
        {
          need: "Playmaker",
          status: "partial",
          proof: "I work in C#. Existing Playmaker logic would be left in place unless the profiler shows it is a cost.",
        },
        {
          need: "Working with a solo artist without engineering support",
          status: "direct",
          proof: "I work with art, instructional-design and mechatronics teams at BEDO who are not programmers; changes are shown and explained, not just committed.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would run the optimisation pass",
    intro: "To be adjusted once I have the project and your hardware list, but this is the plan I would propose:",
    steps: [
      {
        title: "Baseline before any change",
        body: "Profile the full 20-minute playthrough on each of the four tiers and note the frame time per scene and the worst moments. You get a one-page table: where the game is today, and the target for each tier.",
      },
      {
        title: "Fix the biggest cost first, keep the look",
        body: "Work through the costs the profiler shows, largest first. Every change that is visible on screen is shown to you as a before / after pair, so you decide what the art can give up.",
      },
      {
        title: "Presets built from the measurements",
        body: "Low to Ultra (plus a Deck preset) come out of the baseline: each preset turns off or scales down exactly what was measured as expensive on the tier it is meant for.",
      },
      {
        title: "Input, telemetry and build as a checklist",
        body: "Gamepad navigation and prompts, crash reporting, Steam Deck checks and release-build settings tracked as a short checklist you can see, so nothing is forgotten in the last days before launch.",
      },
      {
        title: "Your project stays yours",
        body: "Changes go in small, described commits (or a change log if you do not use version control), with a short hand-over note on the presets and settings, so you can still open and edit your own game after I leave.",
      },
    ],
    note: "Target frame rates, the hardware tiers and how much visual change is acceptable are decided with you, not by me.",
  },
  timeline: [
    {
      when: "Before starting",
      title: "Project access and agreement",
      body: "Project or build access, hardware tiers and target frame rates, launch date, and the hotfix vs new-work boundary, agreed in writing.",
    },
    {
      when: "Notice month",
      title: "Milestone 1 starts part-time",
      body: "About 15 hours per week: profiled baseline on each tier, the biggest performance fixes and the preset structure.",
    },
    {
      when: "After notice",
      title: "Milestone 1 completed",
      body: "30 hours per week: presets and settings menu, Steam Input and prompts, crash reporting, Steam Deck checks, release build.",
    },
    {
      when: "Launch + 2-4 weeks",
      title: "Milestone 2: hotfix standby",
      body: "About 5-10 hours per week as posted: crash reports, player feedback, patch builds. Defects in my code fixed at no charge.",
    },
  ],
  questions: [
    "Are you happy to work with a contractor based in Egypt, and how would you pay the milestones (for example Wise or PayPal)?",
    "Which Unity and HDRP version is the game on, and is the logic mostly Playmaker or C#? Could I get a build or the project for a short profiling look before we agree the plan?",
    "What are the four hardware tiers and the target frame rate and resolution for each, and is Steam Deck Verified a goal?",
    "What is the launch date, and should Milestone 2 be two or four weeks?",
    "Is Steamworks already in the project (for example Steamworks.NET), and which controllers' prompts matter most: Xbox, PlayStation or Steam Deck?",
    "Do you prefer Unity Cloud Diagnostics or Sentry, and do you need a player consent option for sending crash reports?",
  ],
  closing: {
    title: "Next step",
    body: "If this sounds right, send me your hardware tiers and launch date. With a build or the project, I will come back with a short baseline and an honest view of what Milestone 1 can achieve on each tier.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity engineer",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

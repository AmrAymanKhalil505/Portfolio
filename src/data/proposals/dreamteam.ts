import ev117Particles from "../../assets/thumbnails/projects/EduLab/EV117 Particles.thumb.webp";
import mr109Sorting from "../../assets/thumbnails/projects/MR109 Compact/MR109 Sorting.thumb.webp";
import nescafeWaterBeach from "../../assets/thumbnails/projects/Nescafe/Nescafe Water Beach.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: Djinni post "Unity Developer / Technical Artist (2D)" (Dream Team Base, posted 18 Oct 2026,
// full-time, outsource, Full Remote / Worldwide, English B1). The post asks for a CV and a portfolio,
// ideally videos of 2D VFX work with a short note on the applicant's contribution to each example.
// Required: Unity 2 years, pixel art 6 months, tech art 1 year, 3+ years overall. The answers follow
// those asks in order; the requirement rows follow the post's Responsibilities / Requirements /
// Nice to Have lists.

const atmoVideo = "https://youtu.be/eWFaHaYUy44";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";

const proposal: Proposal = {
  slug: "dreamteam",
  client: "Dream Team Base",
  projectName: "Unity developer / technical artist for 2D games",
  dateLabel: "October 2026",
  greeting: "Hello Dream Team Base team,",
  eyebrow: "Application · Dream Team Base · Unity Developer / Technical Artist (2D)",
  headline: "Unity C# developer who wires visual states into gameplay and keeps them readable",
  lead: [
    "Your role sits between the art and the code: C# components that drive visual states from gameplay, animation and VFX integrated into an existing codebase, and scenes that stay fast. The closest match in my work is the visual feedback layer of BEDO's Unity simulations, where every on-screen state (particles, highlights, readings, animations) follows the simulation logic, on a shared codebase of about 80,000 lines of in-house C# built together with an art team.",
    "I have worked professionally in Unity and C# without a break since December 2023, including a mobile educational game for Android and iOS and a short-session arcade game for a Nescafe Ice Coffee event booth. Below I answer what your post asks for, list my experience with dates and my own role, and say plainly where I fall short: I am a Unity developer first, and dedicated 2D pixel-art and technical-art work is the part of your list I have the least of.",
  ],
  quickFacts: [
    { label: "Stack", value: "Unity · C# · Git" },
    { label: "Start", value: "1 month after an offer" },
    { label: "Hours", value: "Full-time, 40 h / week" },
    { label: "Location", value: "Egypt (remote) · EET" },
  ],
  answers: [
    {
      title: "CV",
      original: "Please send your CV",
      body: [
        "Attached on Djinni. The experience table further down gives the same dates with the technologies and my own responsibility on each project.",
      ],
    },
    {
      title: "Portfolio and videos, with my contribution per example",
      original:
        "Portfolio. We're particularly interested in videos showcasing your work on 2D VFX. For each example, briefly describe your contribution, such as effect creation or editing, programming, animation setup, integration, or optimization.",
      body: [
        "Each project below links to a video or case study, and each card states what I did myself: programming, integration, animation setup or the gameplay loop, versus what the art team or the company provided.",
        "I do not have a dedicated 2D VFX reel. The nearest examples are the particle explanation views in BEDO's fuel-cell lab (programming and integration of particle flows driven by the simulation) and the feedback effects in Atmosphere Protector and the Nescafe booth game. [[TODO: 2D VFX video: does Amr have any clip of 2D or sprite-based effects he built or set up (Atmosphere Protector or other)? If yes, add the link and his exact contribution; if not, keep this answer as it is]]",
      ],
    },
    {
      title: "Experience, with dates",
      original: "From 3 years of experience · Unity 2 years · Tech Art 1 year · Pixel art 6 months",
      body: [
        "Unity / C#: continuous professional work since December 2023, just under three years. Senior Unity Engineer at BEDO Innovating Education (Oct 2024 - present), Unity and AR developer for Ivris (freelance, Jun 2024 - Jun 2026), sole Unity VR developer at Tanta University (Dec 2023 - Oct 2024), and a one-week VR booth game for Nescafe Ice Coffee (2025).",
        "Technical art: integration and visual-state work inside those projects, plus Blender for fixing and adjusting models without the 3D artist; it has not been a dedicated tech-art role. Pixel art: none in production. See the note below.",
      ],
    },
    {
      title: "English",
      original: "English B1 - Intermediate",
      body: [
        "I work in English every day, and my B.Sc. studies and bachelor thesis at the German University in Cairo were in English. I have no formal test score to show.",
      ],
    },
    {
      title: "Start date and hours",
      body: [
        "I am currently employed with a one-month notice period. I give notice when I accept an offer and start full-time one month later, 40 hours a week. During the notice month I can already put in about 15 hours a week, for example to get into your codebase, art pipeline and import conventions before day one.",
        "Egypt is on Eastern European time: the same clock as Dnipro and one hour ahead of Vienna.",
      ],
    },
    {
      title: "Salary expectation",
      body: ["[[TODO: salary]] per month for the full-time role, open to discussing the contract form."],
    },
  ],
  candidNote: {
    title: "A transparent note on 2D, pixel art and tech art",
    body: "Your post asks for hands-on 2D game development, sprite-sheet and frame-by-frame animation, Tilemaps and sorting, Pixels Per Unit, compression and Sprite Atlases, 6 months of pixel art and a year of tech art. Most of my production work is 3D simulations, VR and AR, and my portfolio does not show Tilemap scenes, Sprite Atlas setup, Pixel Perfect Camera, Shader Graph or the URP 2D Renderer (my only URP project is the 3D Nescafe booth game). I have no pixel-art work and no dedicated 2D VFX reel. I also have just under three years of professional Unity, not the full three. What I bring: strong C# and component architecture on a large shared codebase, years of wiring visual states, particles, animation and UI feedback to gameplay and simulation logic, integration of other people's art into an existing project, and builds for constrained hardware (Quest 2, WebGL, Android / iOS). The 2D-specific Unity tooling is learnable for a C# developer in weeks; a pixel artist's eye is not something I can claim today. I would rather you know this now than find it in the portfolio.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Interactive Unity training simulations of BEDO engineering trainers, sold as commercial B2B products: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics stations, PID control labs, fluid-mechanics labs. Migrating projects to Unity 6 since mid-2026.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration)", "ScriptableObject architecture", "Dependency injection", "DOTween", "Timeline"],
      responsibility:
        "Interaction and state logic, and the visual layer that follows it: particle explanation views, exploded-view animations, highlights, readings and UI feedback; integrating the art team's assets; WebGL builds; short Timeline intro sequences for the marketing team. Shared team codebase of about 80,000 lines of in-house C#; I mentor one intern and review his work. The hardware and products belong to BEDO.",
      links: [
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "WebGL", "Android", "iOS", "AR Foundation", "Photon", "PlayFab"],
      responsibility:
        "The Unity app, not the whole product: runtime loading of 3D models, Photon multiplayer room editing in WebGL, mobile AR preview, PlayFab integration.",
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
        "Everything: interaction flows, scenes, hand-held tool interactions, adapting 3D assets, standalone headset builds on mobile hardware.",
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
        "Unity developer: gameplay loop, timed scoring, collectibles and fast visual feedback that visitors understand in seconds, from brief to booth in one week. The brand belongs to its owners.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Mobile game loop",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Unity · Android / iOS · not released",
      copy:
        "Children's educational mobile game in a readable arcade-style scene: fly a plane, collect pollution clouds, keep the atmosphere's health bar up and unlock upgrades, with immediate feedback when a target is collected. My part: the Unity gameplay, health and upgrade systems, and the Arabic instruction screens. [[TODO: confirm Atmosphere Protector's art and animation setup (2D sprites or 3D, Animator or code-driven) and who made the art, so this card can say exactly what Amr integrated]]",
      links: [
        { label: "Video", href: atmoVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "Effects driven by logic",
      title: "EV117 fuel-cell particle view",
      image: ev117Particles,
      meta: "Particles · legend · guided overlay",
      copy:
        "Electrons, hydrogen, protons, oxygen and water shown as moving particle flows inside an exploded fuel cell, following the simulation's state. My part: the Unity implementation of the particle flows and their link to the lab logic, working with BEDO's art team.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Visual states from gameplay",
      title: "MR109 / MR110 station behaviour",
      image: mr109Sorting,
      meta: "States · highlights · animation",
      copy:
        "Conveyors, pneumatics, motors and sensors whose movement and visual feedback follow ready / running / done / emergency states: the same pattern as C# components that keep visual states in sync with gameplay. My part: the state logic and its visual feedback; the stations are BEDO hardware.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Feedback that reads in seconds",
      title: "Nescafe VR surfing booth",
      image: nescafeWaterBeach,
      meta: "URP · one week · score · collectibles",
      copy:
        "A short-session arcade loop with collectible targets, score and timer feedback and three themed routes, built in one week. My part: the gameplay loop, scoring and feedback; the brand art belongs to its owners.",
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
          need: "Integrate and configure 2D assets, animations, VFX and audio in Unity",
          status: "adjacent",
          proof: "Working with BEDO's art team to bring models, animations and particle explanations into the labs; 3D rather than 2D sprite content.",
        },
        {
          need: "C# components that control visual states and keep them in sync with gameplay",
          status: "direct",
          proof: "Station animations, highlights, particles and UI feedback driven by simulation states at BEDO; health and collection feedback in Atmosphere Protector.",
        },
        {
          need: "Animation Clips, Animator Controllers, transitions and Animation Events",
          status: "adjacent",
          proof: "Exploded-view and station animations at BEDO, Timeline sequences for marketing, DOTween in almost every BEDO project. Animator-heavy 2D character animation is not in my portfolio.",
        },
        {
          need: "Create and maintain Prefabs and Prefab Variants",
          status: "direct",
          proof: "Prefabs throughout BEDO's labs and stations on the shared codebase, configured per project through ScriptableObjects.",
        },
        {
          need: "Assemble 2D scenes with Tilemaps, Sprite Renderers, Sorting Layers and Sorting Groups",
          status: "commitment",
          proof: "Not in my portfolio. I would learn your scene conventions on the first tasks and follow them.",
        },
        {
          need: "Texture and sprite import settings, materials, rendering parameters",
          status: "adjacent",
          proof: "Builds for WebGL and standalone Quest 2, both memory-constrained targets; sprite-specific import settings would be new.",
        },
        {
          need: "Optimise graphical assets and visual effects",
          status: "adjacent",
          proof: "Performance work on WebGL (BEDO, Ivris) and Quest 2 (Tanta) builds; not 2D-specific.",
        },
        {
          need: "Work in an existing codebase with developers and artists",
          status: "direct",
          proof: "BEDO's shared codebase of about 80,000 lines of in-house C#, with instructional-design, art and mechatronics teams; shared Unity and backend codebase at Ivris.",
        },
      ],
    },
    {
      title: "Requirements",
      items: [
        {
          need: "Hands-on experience developing 2D games in Unity",
          status: "partial",
          proof: "Atmosphere Protector, a mobile educational game in a readable arcade-style scene (built for Android / iOS, not released). Most of my work is 3D.",
        },
        {
          need: "Strong C#, component-based architecture, Unity lifecycle",
          status: "direct",
          proof: "C# in every project above: ScriptableObject configuration, dependency injection, interpreters and editors on a large shared codebase.",
        },
        {
          need: "Integrating visual content into existing gameplay systems",
          status: "direct",
          proof: "Particle views, animations and art-team assets connected to existing simulation logic at BEDO.",
        },
        {
          need: "Sprite sheets, frame-by-frame animation and Animator",
          status: "partial",
          proof: "Animation integration and code-driven animation (DOTween, Timeline) in production; sprite-sheet and frame-by-frame work is not in my portfolio.",
        },
        {
          need: "2D rendering: sorting, transparency, materials, camera setup",
          status: "partial",
          proof: "Transparency, materials and camera setup in 3D, VR and WebGL projects; 2D sorting layers and groups would be new.",
        },
        {
          need: "Pixels Per Unit, texture filtering and compression, Sprite Atlases",
          status: "commitment",
          proof: "Not done in production. I would set them up from your project's standards and verify the results in the Profiler.",
        },
        {
          need: "Find performance issues with the Unity Profiler and Frame Debugger",
          status: "adjacent",
          proof: "Performance work on WebGL and standalone Quest 2 builds, both memory- and performance-constrained targets.",
        },
        {
          need: "Git",
          status: "direct",
          proof: "Team development at BEDO; shared codebase at Ivris.",
        },
        {
          need: "Work independently with strong attention to visual quality",
          status: "direct",
          proof: "Sole developer of the Quest 2 training suite; whole features owned end to end at BEDO; a one-week booth game delivered on time.",
        },
        {
          need: "Pixel art (6 months) and tech art (1 year)",
          status: "partial",
          proof: "No pixel art. Tech-art-style work (integration, visual states, particles, Blender fixes) inside developer roles, not as a dedicated role. See the note above.",
        },
        {
          need: "English B1",
          status: "direct",
          proof: "English every day at work; B.Sc. and thesis in English.",
        },
      ],
    },
    {
      title: "Nice to have",
      items: [
        {
          need: "Create and edit 2D VFX: sprite-based effects, flipbooks, particle systems",
          status: "adjacent",
          proof: "Particle flows and feedback effects in BEDO's labs and my games; sprite and flipbook effects are not in my portfolio.",
        },
        {
          need: "Particle System, Shader Graph, URP 2D Renderer",
          status: "partial",
          proof: "Particle visualisations in production; URP on the 3D Nescafe booth game only. Shader Graph and the 2D Renderer are not in my portfolio.",
        },
        {
          need: "Pixel art care: pixel density, palettes, Pixel Perfect Camera, blur and artifacts",
          status: "commitment",
          proof: "Not done yet. I would follow your art direction's rules and check every scene at target resolution.",
        },
        {
          need: "Aseprite, Photoshop or similar for preparing and editing assets",
          status: "partial",
          proof: "My art tools are 3D: Blender to fix and adjust models, a six-month modelling and texturing specialisation, beginner Substance Painter and ZBrush. No Aseprite or Photoshop work in my portfolio.",
        },
        {
          need: "Optimise 2D graphics and effects for mobile",
          status: "adjacent",
          proof: "Android / iOS builds (Atmosphere Protector, Ivris) and standalone Quest 2 on mobile hardware.",
        },
        {
          need: "Editor tools that automate asset import and configuration",
          status: "adjacent",
          proof: "Tools for other people (a block-based command editor with validation and an interpreter) and data-configured systems on BEDO's codebase; import-automation editor scripts would be new.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would work on your 2D games",
    intro:
      "To be checked against your codebase, art pipeline and target devices, but this is how I would start:",
    steps: [
      {
        title: "Learn the pipeline before touching assets",
        body: "Read how the current game imports sprites, sets Pixels Per Unit, filtering, compression and atlases, and how sorting layers are organised, then write those conventions down as a short checklist I and the artists can both use.",
      },
      {
        title: "Agree the visual-state map first",
        body: "In my current work I build an HTML prototype with 2D vector graphics before any Unity work, so the design side can check every state and transition before Unity time is spent. For a game character or object, the light version is a table of gameplay states, the animation or effect each one plays, and the events that move between them, agreed with the artist and the gameplay developer before the Animator is wired.",
      },
      {
        title: "Visual components that listen, not decide",
        body: "Small C# components that react to gameplay events and drive Animator parameters, sprite swaps, effects and sound, so art can change without touching gameplay code and gameplay can change without breaking visuals.",
      },
      {
        title: "Automate what repeats",
        body: "Once the conventions are clear, an editor script or import preset that applies the right sprite settings and atlas membership on import, so new art arrives configured correctly.",
      },
      {
        title: "Measure before optimising",
        body: "Profile the heaviest scenes on your lowest target device, check draw calls and overdraw from transparent effects in the Frame Debugger, fix the largest measured cost first, and record the before and after.",
      },
    ],
    note: "Pixel-art judgement (palettes, density, what looks right) belongs to your artists; my job is to make sure their work reaches the screen exactly as they made it.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time onboarding",
      body: "About 15 hours a week around my current job: read the codebase, learn the art and import pipeline, and take a small integration task.",
    },
    {
      when: "Month 1",
      title: "Full-time integration work",
      body: "40 hours a week. Integrate sprites, animations and effects into the current game following your conventions, with reviews from the lead developer and artists.",
    },
    {
      when: "Months 2-3",
      title: "Visual systems and tooling",
      body: "Reusable visual-state components, import automation where it saves the team time, and a first profiling pass on the heaviest scenes.",
    },
    {
      when: "Ongoing",
      title: "Polish and performance",
      body: "Own the art-to-gameplay layer: new content integrated, effects tuned, performance kept within the device budget.",
    },
  ],
  questions: [
    "What contract form do you use for a full-time contractor based in Egypt (outstaff through Dream Team Base, or a B2B contract), and which hours should I overlap with the team?",
    "Which game would I join, on which platforms, and what is the art style: pixel art at a fixed resolution, or higher-resolution 2D?",
    "How is the pipeline set up today: Unity version, URP 2D Renderer or built-in, frame-by-frame sprites or skeletal animation, and who makes the VFX, the artists or this role?",
    "How are visual states tied to gameplay in the current codebase: Animator parameters, events, or a custom state system?",
    "Which devices are your minimum spec, and what frame-time or memory targets do builds have to meet?",
    "Would a short test task help your decision, for example integrating a sprite sheet and an effect into a sample scene?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the demos in a short call, and to take a small integration test task if that helps you judge the 2D side.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity developer · games and interactive simulations",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

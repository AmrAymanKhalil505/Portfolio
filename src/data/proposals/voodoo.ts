import cimBlockEditor from "../../assets/thumbnails/projects/cim/Inter02.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import fm103Graph from "../../assets/thumbnails/projects/EduLab/FM103 Graph.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: LinkedIn post "Game Developer - Collect'Em All" (Voodoo, new studio, listed in Istanbul,
// posted ~2026-10-15, Mid-Senior level, full-time, 200+ applicants). The post says the position
// "can be Turkey-based or fully remote within CET +/-2h", which covers Egypt (UTC+2 / UTC+3).
// It asks no written questions, so the answers follow the Profile list in the post's order, then
// remote work, start date and pay. Whether Voodoo can contract someone living in Egypt is the first
// question below.

const atmoVideo = "https://youtu.be/eWFaHaYUy44";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";

const proposal: Proposal = {
  slug: "voodoo",
  client: "Voodoo",
  projectName: "Collect'Em All studio: gameplay features, balancing and code quality",
  dateLabel: "October 2026",
  greeting: "Hello Voodoo team,",
  eyebrow: "Application · Voodoo · Game Developer, Collect'Em All (Unity / C#)",
  headline: "Unity developer who gets the core action playable fast and keeps the code ready for the next spin",
  lead: [
    "Your new studio needs someone who codes hands-on at a fast pace, tunes the core gameplay parameters, and still keeps the codebase in a shape that holds up as the game grows and its learnings move to other portfolio titles. That mix is how I work today. I built a short-session Unity game for a Nescafe Ice Coffee event booth in one week, and at BEDO I build on a shared Unity codebase of about 80,000 lines of in-house C#, where tuning values and systems are configured per project through ScriptableObjects and dependency injection instead of being rewritten each time.",
    "I have worked professionally in Unity and C# without a break since December 2023, on targets where performance is tight: standalone Meta Quest 2, Unity WebGL in production, and Android / iOS builds. Below I go through your profile list, show my experience with dates and my own role, and say plainly where I am below your bar: my background is simulations and apps, not top-tier mobile games.",
  ],
  quickFacts: [
    { label: "Stack", value: "Unity · C# · mobile · WebGL" },
    { label: "Start", value: "1 month after an offer" },
    { label: "Time zone", value: "Egypt · CET +1 h" },
    { label: "Location", value: "Egypt (fully remote)" },
  ],
  answers: [
    {
      title: "Unity experience",
      original: "At least 5 years of professional experience on Unity or other game engines",
      body: [
        "Continuous professional Unity / C# work since December 2023, just under three years: Senior Unity Engineer at BEDO Innovating Education (Oct 2024 - present), Unity and AR developer for Ivris (freelance, Jun 2024 - Jun 2026), sole Unity VR developer at Tanta University (Dec 2023 - Oct 2024), and a one-week VR booth game for Nescafe Ice Coffee (2025). That is below your five years; see the note further down. The full table with technologies and my own responsibility follows.",
      ],
    },
    {
      title: "Mobile games track record",
      original: "Successful track record in top-tier mobile games",
      body: [
        "I do not have one. I have not released a mobile game in the stores. What I have shipped is commercial B2B software: BEDO's Unity training simulations are sold to universities and companies, and I take them from first prototype to delivered product. On the game side, I built Atmosphere Protector, a mobile educational game, for Android and iOS (not released yet), and the Nescafe booth game, which ran at a live event.",
      ],
    },
    {
      title: "Optimization",
      original: "Familiar with optimization issues",
      body: [
        "My builds run on constrained hardware: standalone Meta Quest 2 (mobile chipset, fixed frame-rate target), Unity WebGL in production, and Android / iOS for the Ivris AR app. Keeping frame time and memory inside those limits is part of every delivery. I have not optimised a game across the wide range of low-end phones a Voodoo title reaches, and I would want your device targets from the first week.",
      ],
    },
    {
      title: "Gameplay sense and creativity",
      original: "A creative and hacker mindset · Good sense of gameplay experience and special attention to details",
      body: [
        "The Nescafe game had to make sense to a visitor within seconds and be fun in a short session: simple movement, collectibles, score and a timer, three themed routes, a fast restart. Atmosphere Protector is a readable mobile loop for young players (fly, collect pollution clouds, keep the health bar up, unlock upgrades). On the hacker side, I build my own tools when a task needs them, such as a block-based command editor with an interpreter for BEDO's robot labs.",
      ],
    },
    {
      title: "Working fully remote within CET +/-2h",
      original: "This position can be Turkey-based or fully remote within CET +/-2h · Comfortable with full-remote environment",
      body: [
        "I live in Egypt, one hour ahead of CET, so I work your hours without shifting my day. I worked for two years as the freelance Unity developer of the Ivris app next to my full-time job [[TODO: confirm the Ivris work was fully remote]], and I work in English every day; my B.Sc. studies and bachelor thesis at the German University in Cairo were in English.",
      ],
    },
    {
      title: "Technical leadership",
      original: "Partner with the General Manager in taking responsibility for technical team structure, recruitment and onboarding · Provide technical leadership for the team",
      body: [
        "Since August 2026 I have mentored one intern at BEDO and review his work. That is one person, not a team, and I have not recruited anyone. I can own code quality and onboarding documentation for the codebase I work in from day one; shaping team structure and hiring next to the General Manager would be a step up that I would grow into, not something I have done.",
      ],
    },
    {
      title: "Start date and hours",
      body: [
        "I am currently employed with a one-month notice period. I give notice when I accept an offer and start full-time one month later, 40 hours a week. During the notice month I can already put in about 15 hours a week around my current job, for example to read the Collect'Em All codebase and play through the current build before day one.",
      ],
    },
    {
      title: "Salary expectation",
      body: ["[[TODO: salary]] for the full-time role, open to discussing the full package and the contract form for someone living in Egypt."],
    },
  ],
  candidNote: {
    title: "A transparent note on the experience bar",
    body: "Your profile asks for at least five years in Unity or another engine, a successful track record in top-tier mobile games, and a strong understanding of the hypercasual and casual markets, and the role includes technical leadership, recruitment and onboarding. I have just under three years of professional Unity (since December 2023), mostly simulations and apps. I have not worked on a hypercasual or casual title, I have no store-released mobile game (Atmosphere Protector was built for Android and iOS but is not released), and I have not worked with live game analytics or A/B tests. My leadership is mentoring one intern since August 2026. What I bring: playable builds fast as my normal way of working, gameplay tuning kept in data on a large shared codebase, builds for constrained hardware (Quest 2, WebGL, mobile), and commercial software I have taken from prototype to delivery. If the role needs someone who already knows the hypercasual metrics loop and can lead hiring from day one, I am not that person yet; if a hands-on developer who learns the market side from your veterans fits the small team, I would like to talk. I would rather you know this now than find it in the dates.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Interactive Unity training simulations of BEDO engineering trainers, sold as commercial B2B products: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics stations, PID control labs, fluid-mechanics labs. Migrating projects to Unity 6 since mid-2026.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration)", "ScriptableObject architecture", "Dependency injection", "DOTween", "Timeline"],
      responsibility:
        "Interaction and state logic, guided steps, UI and feedback, runtime tools such as a visual command editor and interpreter, WebGL builds, and short Timeline intro sequences for the marketing team. Shared team codebase of about 80,000 lines of in-house C#; I mentor one intern and review his work. The hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
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
        "Everything: interaction flows, scenes, hand-held tool interactions, onboarding for first-time users, standalone Android headset builds on mobile hardware.",
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
        "Unity developer: gameplay loop, movement, timed scoring, collectibles and onboarding that visitors understand in seconds, built from brief to booth in one week. The brand belongs to its owners.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Collect, score, beat the clock",
      title: "Nescafe VR surfing booth",
      image: nescafeSurfing,
      meta: "One week · timer · score · collectibles",
      copy:
        "A short-session arcade loop built from brief to live event in one week: simple movement, collectible targets, score and timer feedback, three themed routes, and a fast start and reset so the next visitor can play straight away.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "Mobile game loop",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Unity · built for Android / iOS · not released",
      copy:
        "Mobile educational game: fly a plane, collect pollution clouds, keep the atmosphere's health bar up and unlock upgrades. Simple controls and a readable core loop for young players.",
      links: [
        { label: "Video", href: atmoVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "Systems reused across products",
      title: "Engineering education virtual labs",
      image: fm103Graph,
      meta: "Several labs · shared patterns · WebGL",
      copy:
        "Bernoulli, laminar-flow and fuel-cell labs built by reusing common Unity patterns for guided steps, measurement feedback, graphs, dashboards and WebGL delivery, on a team codebase configured per project through ScriptableObjects and dependency injection. The same idea as moving a hit's learnings to other portfolio games.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Hacker mindset",
      title: "Visual command editor and interpreter",
      image: cimBlockEditor,
      meta: "Block editor · validation · interpreter",
      copy:
        "A block-based editor where students build robot command rows without typing syntax, validate them and run them through a G-code-style interpreter with run, pause and stop controls, alongside a 6-joint robot arm with forward and inverse kinematics.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Constrained hardware",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Standalone Quest 2 · sole developer",
      copy:
        "Standalone headset builds on mobile hardware, with hand-held tool interactions and an onboarding tutorial for people who have never used the device. Teaching a new control scheme in seconds is the same problem as a casual game's first session.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Hands-on gameplay development",
      items: [
        {
          need: "Hands-on coding of innovative features played by millions of users",
          status: "partial",
          proof: "Hands-on Unity / C# feature work every day (Nescafe game, Atmosphere Protector, BEDO's simulations). None of it has reached an audience of millions.",
        },
        {
          need: "Balancing and core gameplay parameters / features",
          status: "adjacent",
          proof: "Timer, score and collectible tuning for the Nescafe booth; tuning values kept in ScriptableObjects on BEDO's codebase so they change without code. No balancing from live player data yet.",
        },
        {
          need: "Deconstruct, analyze and adapt mobile game mechanics",
          status: "commitment",
          proof: "Not a documented practice of mine yet. I would start with a written deconstruction of Collect'Em All and the comparable titles your team points me to.",
        },
        {
          need: "Flesh out design details, oversee testing, revise in response to player feedback",
          status: "adjacent",
          proof: "I revise builds with instructional-design reviewers until they sign off, every project. Revising from store-player feedback would be new.",
        },
      ],
    },
    {
      title: "Development cycle and code quality",
      items: [
        {
          need: "Manage the development cycle and identify the engineering tasks needed to execute the roadmap",
          status: "adjacent",
          proof: "I break BEDO lab features into Unity tasks and agree scope with the design side through my prototype-first process; sole developer on the Tanta suite, planning it end to end.",
        },
        {
          need: "High standards and solid coding practices for long-term quality and a high pace",
          status: "direct",
          proof: "A one-week booth game on one side; long-lived commercial labs on a shared ~80,000-line codebase that the team keeps extending and is migrating to Unity 6 on the other.",
        },
        {
          need: "Monitor product health and get issues addressed on time",
          status: "partial",
          proof: "I maintain and fix delivered BEDO products and carry them through an engine migration. Monitoring a live game through crash and analytics dashboards would be new.",
        },
        {
          need: "Familiar with optimization issues",
          status: "adjacent",
          proof: "Standalone Quest 2, production Unity WebGL and Android / iOS builds. Not a wide range of low-end phones in a store release.",
        },
      ],
    },
    {
      title: "Leadership and collaboration",
      items: [
        {
          need: "Partner with the General Manager on technical team structure, recruitment and onboarding",
          status: "partial",
          proof: "I mentor one intern at BEDO and review his work (since Aug 2026). No recruitment or team-structure experience.",
        },
        {
          need: "Provide technical leadership for the team",
          status: "partial",
          proof: "Code review and mentoring for one intern; ownership of whole features such as the visual command editor and interpreter. Not a team lead.",
        },
        {
          need: "Work with product leadership on roadmap, rollouts and adoption",
          status: "adjacent",
          proof: "Daily work with instructional-design, art and mechatronics teams at BEDO, plus Timeline intro sequences for the marketing team. No game rollouts.",
        },
      ],
    },
    {
      title: "Profile",
      items: [
        {
          need: "Strong understanding of the hypercasual and casual mobile game markets",
          status: "commitment",
          proof: "Not from production work. I would learn it from your veterans and your data, starting from Collect'Em All.",
        },
        {
          need: "At least 5 years of professional experience on Unity or other game engines",
          status: "partial",
          proof: "Just under three years of professional Unity, continuous since December 2023. See the note above.",
        },
        {
          need: "Successful track record in top-tier mobile games",
          status: "partial",
          proof: "Commercial B2B simulations shipped through BEDO; one mobile game built for Android / iOS but not released; no store titles.",
        },
        {
          need: "Creative and hacker mindset; good sense of gameplay experience and details",
          status: "direct",
          proof: "Short-session game loops (Nescafe, Atmosphere Protector) and self-built tools such as the block command editor and interpreter.",
        },
        {
          need: "Comfortable with a full-remote environment (Turkey or CET +/-2h)",
          status: "direct",
          proof: "Egypt is CET +1 h, inside your window. Two years of freelance Unity work for Ivris next to a full-time job. English every day; B.Sc. and thesis in English.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would work on Collect'Em All",
    intro:
      "To be checked against the current codebase, your tools and the studio's roadmap, but this is how I would work from the first weeks:",
    steps: [
      {
        title: "Play and deconstruct first",
        body: "Play the current build and the comparable titles you point me to, and write down the core action, the session shape, where players gain and lose, and which parameters carry the feel. That gives the team a shared map before any new feature is coded.",
      },
      {
        title: "Playable before polished",
        body: "At BEDO I build an HTML prototype with 2D vector graphics before any Unity work, so the design side checks the behaviour before engine time is spent. For a new spin on Collect'Em All the same rule means a rough playable build of the core change in days, so the GM and designers judge the feel before art and polish.",
      },
      {
        title: "Balancing in data, not in code",
        body: "Speeds, spawn rates, rewards and difficulty curves live in ScriptableObjects or remote configuration from the first prototype, so the team tunes without a programmer and the same values can drive test variants later.",
      },
      {
        title: "Code that carries to the next game",
        body: "Keep core systems (input, camera, progression, feedback, economy hooks) as modules with clear boundaries and dependency injection, so a failed experiment costs little and what works can move to other portfolio games, which your post names as one of the studio's goals.",
      },
      {
        title: "A device budget from the first build",
        body: "Agree frame-time and memory targets for the lowest supported phones early, profile on real devices every iteration, and flag performance risks as soon as they appear rather than at release.",
      },
    ],
    note: "Hypercasual market metrics, live analytics and A/B testing practice are things I would learn from your team; I have not done them in production.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time onboarding",
      body: "About 15 hours a week around my current job: play and deconstruct the game, read the codebase and its conventions, and pick up a small gameplay task.",
    },
    {
      when: "Month 1",
      title: "Full-time, 40 hours a week",
      body: "Ship gameplay features on the roadmap and move the main balancing parameters into data so the team can tune them without code changes.",
    },
    {
      when: "Months 2-3",
      title: "Quality and onboarding",
      body: "Agree coding standards and review practice with the team, write onboarding notes for the codebase, and help onboard new developers as the studio grows.",
    },
    {
      when: "Ongoing",
      title: "Iterate with the data",
      body: "Own features from playable prototype to release, revise them from player feedback and product health, and carry what works into other portfolio games.",
    },
  ],
  questions: [
    "Can the fully remote option within CET +/-2h be offered to someone living in Egypt, and in which contract form (local employment, employer of record or contractor)?",
    "Where is Collect'Em All today: is the studio refreshing the existing codebase, or rebuilding it, and how much of the legacy code is still in use?",
    "How large is the studio now, and how many developers do you plan to hire into it over the next months?",
    "What does a feature or experiment cycle look like at the studio, and which signals decide whether a change stays in the game?",
    "Which analytics, remote-config and A/B testing tools does the studio use, and who owns their integration in the client?",
    "Which devices are your minimum spec, and what frame-time and memory targets do you hold builds to?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the demos in a short call, and to take a technical or gameplay task on Collect'Em All or a similar mechanic if that helps your decision.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity developer · games and interactive simulations",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

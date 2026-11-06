import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import ivrisApp from "../../assets/thumbnails/projects/Ivris/ivris app 02.thumb.webp";
import fm103Graph from "../../assets/thumbnails/projects/EduLab/FM103 Graph.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: YoYo Studios careers page "Unity Gameplay Developer" (Meme Wars, 3D mobile arena fighter),
// fully remote, full-time contract, USD 5,000-8,000 per month, "start now". No country restriction
// stated; the company is registered in Delaware, USA. Application is a Google Form; the answers below
// follow its questions in order (name, email and LinkedIn fields are left to the form itself).

const atmoVideo = "https://youtu.be/eWFaHaYUy44";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";

const proposal: Proposal = {
  slug: "yoyo-gameplay",
  client: "YoYo Studios",
  projectName: "Character and combat gameplay for Meme Wars",
  dateLabel: "October 2026",
  greeting: "Hello YoYo Studios team,",
  eyebrow: "Application · YoYo Studios · Unity Gameplay Developer (Meme Wars)",
  headline: "Unity gameplay developer who gets ideas into a playable build in days and tunes them by playing",
  lead: [
    "Meme Wars needs characters and combat that feel right moment to moment, built fast during a launch sprint by someone who can playtest their own work and say why a hit feels wrong. My strongest match is speed and feel on short-session games: I built a Unity arcade game for a Nescafe Ice Coffee event booth, with movement, collectibles, score and timer, from brief to live event in one week. At Ivris I built Photon-based real-time multiplayer editing for a Unity WebGL app.",
    "I have worked professionally in Unity and C# without a break since December 2023, on mobile, standalone Quest 2 and WebGL targets. I have not shipped a competitive game and have not built a fighting-game combat system, so I say so plainly below and show what I would bring instead. The answers follow your application form in order.",
  ],
  quickFacts: [
    { label: "Stack", value: "Unity · C# · mobile · Photon" },
    { label: "Start", value: "1 month after an offer" },
    { label: "Hours", value: "Full-time, 40 h/week" },
    { label: "Location", value: "Egypt (remote, UTC+2 / +3)" },
  ],
  answers: [
    {
      title: "Where I am based",
      original: "Where are you based? (City + timezone)",
      body: [
        "Egypt, on Egyptian time: UTC+2, or UTC+3 in summer. I work remotely and can agree a fixed daily overlap window with your team.",
      ],
    },
    {
      title: "Portfolio",
      original: "Portfolio / links",
      body: [
        "Each project below links to a demo video and a case study that states what I built myself and what belongs to the wider team or the company.",
      ],
    },
    {
      title: "Unity and C# experience",
      original: "Years of Unity + C# experience",
      body: [
        "2-4 years: continuous professional Unity / C# work since December 2023. Senior Unity Engineer at BEDO Innovating Education (Oct 2024 - present), Unity and AR developer for Ivris (freelance, Jun 2024 - Jun 2026), sole Unity VR developer at Tanta University (Dec 2023 - Oct 2024), and a one-week VR booth game for Nescafe Ice Coffee (2025).",
      ],
    },
    {
      title: "Availability",
      original: "Availability",
      body: [
        "Full-time: 40 hours a week after my one-month notice period, about 15 hours a week during it.",
      ],
    },
    {
      title: "Competitive or multiplayer games I have worked on",
      original: "Which competitive or multiplayer games have you worked on? Name each game, your role, and what you built.",
      body: [
        "None that are competitive games, and I want to be clear about that. The closest work: at Ivris (Unity and AR developer, freelance) I built Photon-based multiplayer room editing, so several users edit the same room in a Unity WebGL session in real time; it is a collaborative app, not a game. On the game side, the Nescafe Ice Coffee booth game (Unity developer) is a single-player timed score loop with collectibles at a live event, and Atmosphere Protector (Unity developer) is a single-player mobile game for Android and iOS that is not released.",
      ],
    },
    {
      title: "Real-time multiplayer and rollback netcode",
      original: "What's your hands-on experience with real-time multiplayer and rollback / deterministic netcode?",
      body: [
        "Real-time multiplayer: Photon, at Ivris, where I built the multiplayer room editing in the Unity app (synchronising object edits between users in a WebGL session); PlayFab was a separate integration in the same app. Rollback or deterministic netcode: none. I have not used GGPO-style rollback, Photon Quantum or a deterministic simulation, and would learn your setup on the job.",
      ],
    },
    {
      title: "Rate",
      original: "Your rate in USD per hour",
      body: ["[[TODO: rate]] USD per hour for the full-time contract, 40 hours a week."],
    },
    {
      title: "Earliest start date",
      original: "Earliest start date",
      body: [
        "I am currently employed with a one-month notice period. I give notice when I accept an offer and start full-time one month later. During the notice month I can already work about 15 hours a week around my current job, for example to learn your codebase and take a first tuning or character task.",
      ],
    },
    {
      title: "A game whose combat felt bad, and how I would fix it",
      original: "Think of a game whose combat or core mechanic felt bad to you. What was wrong and how would you fix it?",
      body: ["[[TODO: game whose combat felt bad, what was wrong, how to fix it (2-4 sentences, Amr's own example)]]"],
    },
    {
      title: "Fastest from idea to working in-game",
      original: "What's the fastest you've taken a feature from idea to working in-game? Feature, method, tools (including any AI).",
      body: [
        "The Nescafe Ice Coffee booth game went from brief to a working game at a live event in one week: surf movement on sand and water routes, collectible cans, a timer and score, and a start and reset that visitors understood in seconds. The method is to get the core action playable first, then tune it by playing it, and only then add content. Today I also use Codex and Claude Code every day to write the boilerplate and first drafts of systems; I review and test what they produce myself.",
      ],
    },
    {
      title: "The game I have played most",
      original: "What game have you sunk the most hours into as a player? What makes its combat or core mechanic feel good?",
      body: ["[[TODO: most-played game and what makes its combat or core mechanic feel good (2-4 sentences, Amr's own words)]]"],
    },
    {
      title: "Meme Wars: observations",
      original: "Go look at Meme Wars, watch the trailer. Specific observations, changes you'd make, and questions about design choices.",
      body: [
        "[[TODO: Amr's own observations after watching the Meme Wars trailer and App Store listing: what reads well, what he would change, questions on design choices]]",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on the experience bar",
    body: "Your post asks for experience shipping competitive or multiplayer games, and lists a fighter or brawler background and rollback netcode as a plus. I have not shipped a competitive game, I have not built a combat system with combos, hit reactions or supers, and I have no rollback or deterministic netcode experience. My multiplayer work is Photon real-time sync in a collaborative app, not a game. I have just under three years of professional Unity (since December 2023), and I can start full-time one month after an offer rather than right away. What I bring: getting a core action playable within days and tuning it by playing, builds for constrained hardware (mobile, Quest 2, WebGL), real-time Photon work, and AI tools in daily development. If the launch sprint needs someone who already knows fighting-game frame data from shipped titles, I am not that person yet; if you need a fast Unity developer who will learn your combat model quickly, I would like to show you on a trial task. I would rather you know this now than find it in the dates.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Interactive Unity training simulations of BEDO engineering trainers, sold as commercial B2B products: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics stations, PID control labs, fluid-mechanics labs. Migrating projects to Unity 6 since mid-2026.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration)", "ScriptableObject architecture", "Dependency injection", "DOTween", "Timeline"],
      responsibility:
        "Interaction and state logic, guided steps, UI and feedback (DOTween in almost every project), runtime tools such as a visual command editor and interpreter, WebGL builds. Shared team codebase of about 80,000 lines of in-house C#; I mentor one intern and review his work. The hardware and products belong to BEDO.",
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
      label: "Idea to playable in days",
      title: "Nescafe VR surfing booth",
      image: nescafeSurfing,
      meta: "One week · movement · timer · score",
      copy:
        "A short-session arcade loop built from brief to live event in one week: simple movement, collectible targets, score and timer feedback, three themed routes, and a fast start and reset so a stranger is playing within seconds.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "Real-time multiplayer",
      title: "Ivris interior design app",
      image: ivrisApp,
      meta: "Photon · WebGL · Android / iOS",
      copy:
        "Photon-based multiplayer room editing, so several users change the same room in a WebGL session in real time, plus mobile AR preview and PlayFab. A collaborative app, not a game, but the same work of keeping shared state in sync.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Mobile game loop",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Unity · built for Android / iOS · not released",
      copy:
        "Mobile game for children: fly a plane, collect pollution clouds, keep the atmosphere's health bar up and unlock upgrades. Touch controls and a core loop young players read at once.",
      links: [
        { label: "Video", href: atmoVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "Tuning values you can see",
      title: "Engineering education virtual labs",
      image: fm103Graph,
      meta: "Live values · graphs · data-configured",
      copy:
        "Labs where every changing value is shown next to the behaviour it drives, with systems configured per project through ScriptableObjects. For combat the same habit means frame data and hitboxes on screen while you tune.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Physical interaction feel",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Standalone Quest 2 · sole developer",
      copy:
        "Hand-held tool interactions that have to feel physical and responsive on mobile hardware, and an onboarding tutorial that teaches first-time users a new control scheme in seconds.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "What you would do",
      items: [
        {
          need: "Build characters with movesets that feel good to control",
          status: "adjacent",
          proof: "Player movement and controls in the Nescafe game (surf traversal) and Atmosphere Protector (plane flight). No fighting-game characters with movesets yet.",
        },
        {
          need: "Combat with fighting-game feel: combos, hits, supers",
          status: "commitment",
          proof: "Not done in production. I would build it data-driven, with frame data and hitboxes visible while tuning; see the approach below.",
        },
        {
          need: "Playtest your own work, notice when a combo or hit feels wrong, and find out why",
          status: "adjacent",
          proof: "Review cycles with BEDO's instructional designers until behaviour is right; the Nescafe loop had to read for strangers within seconds. Combat-specific diagnosis is new.",
        },
        {
          need: "Take features from idea to in-game within days",
          status: "direct",
          proof: "A whole booth game in one week; at BEDO every system is prototyped and agreed before full Unity work.",
        },
      ],
    },
    {
      title: "Required",
      items: [
        {
          need: "Strong Unity and C#",
          status: "direct",
          proof: "Unity / C# in every project above since December 2023, including interpreters, editors and a shared codebase of about 80,000 lines of in-house C#.",
        },
        {
          need: "Experience shipping competitive or multiplayer games (fighters, brawlers, shooters)",
          status: "partial",
          proof: "Shipped commercial B2B software (BEDO's simulations) and Photon real-time multiplayer in a collaborative app (Ivris). No shipped competitive or multiplayer game.",
        },
        {
          need: "Solid grasp of game feel, tuned independently",
          status: "adjacent",
          proof: "Arcade feel for the Nescafe booth; responsive feedback with DOTween in almost every BEDO project; tool interactions on Quest 2. Not in a fighter.",
        },
        {
          need: "Fast, independent work",
          status: "direct",
          proof: "Sole developer of the Quest 2 suite; one-week booth deadline; whole features at BEDO such as the visual command editor and interpreter.",
        },
      ],
    },
    {
      title: "Nice to have",
      items: [
        {
          need: "Brawler or fighting-game background",
          status: "commitment",
          proof: "No professional fighter or brawler work. See the note above.",
        },
        {
          need: "Real-time multiplayer or rollback netcode",
          status: "partial",
          proof: "Real-time multiplayer with Photon at Ivris. No rollback or deterministic netcode.",
        },
        {
          need: "Fluent with AI development tools and a modern workflow",
          status: "direct",
          proof: "Codex and Claude Code daily in development; I review and test what they produce.",
        },
      ],
    },
    {
      title: "The role",
      items: [
        {
          need: "3D mobile game",
          status: "adjacent",
          proof: "Android / iOS builds for Atmosphere Protector and the Ivris AR app; standalone Quest 2 builds on mobile hardware.",
        },
        {
          need: "Full-time, fully remote contract",
          status: "commitment",
          proof: "40 hours a week from Egypt after the notice month.",
        },
        {
          need: "Start now, during the launch sprint",
          status: "partial",
          proof: "About 15 hours a week from the day I accept, full-time one month later.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would work on Meme Wars combat",
    intro:
      "To be checked against your current codebase, netcode and tools, but this is how I would work from the first week:",
    steps: [
      {
        title: "Play it before touching it",
        body: "Play the current build against bots and other players, record sessions, and write down where combos drop, hits feel weightless or inputs feel late, with the exact move and frame where possible. That list becomes the first tuning work.",
      },
      {
        title: "Moves as data, not code",
        body: "Startup, active and recovery frames, damage, hitstun, knockback and cancel windows live per move in ScriptableObjects (or whatever format you use), so a move can be retuned without a programmer and without a rebuild. This is how BEDO's systems are configured per project.",
      },
      {
        title: "Show the numbers while you tune",
        body: "Before Unity work at BEDO I build an HTML prototype where every changing value is shown next to the behaviour it drives, so the people reviewing it can check it. For combat the equivalent is a debug overlay in the build: hitboxes, hurtboxes, frame counter and input log on screen, so 'this feels wrong' turns into a number we can change.",
      },
      {
        title: "Feel as a checklist",
        body: "Hit-stop, camera and screen reactions, input buffering, readable telegraphs for supers, and short feedback tweens, each tested by playing and kept only if it helps. On touch screens, the input layer gets its own tuning pass.",
      },
      {
        title: "Netcode-aware from the start",
        body: "Keep the combat simulation separate from presentation so it fits your netcode model, whether that is rollback or something else. I have not built rollback, so I would follow your existing architecture and ask early rather than guess.",
      },
      {
        title: "Days, not weeks",
        body: "Small playable increments in daily builds, Codex and Claude Code for boilerplate and first drafts that I review and test, and profiling on your minimum-spec phones so a new character does not cost frame rate.",
      },
    ],
    note: "Fighting-game combat, rollback netcode and your launch process are things I would learn from your team; I have not done them in production.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time onboarding",
      body: "About 15 hours a week around my current job: play the game, read the combat and character code, set up the debug overlay, and take a first tuning task on one character.",
    },
    {
      when: "Weeks 1-2 full-time",
      title: "40 hours a week",
      body: "Fix the feel issues from the playtest list, ship small combat features into daily builds, and agree with you how moves are authored and reviewed.",
    },
    {
      when: "Weeks 3-6",
      title: "Characters into the game",
      body: "Build and tune new characters or moves end to end, from idea to in-game in days, with playtests deciding what stays.",
    },
    {
      when: "Launch and after",
      title: "Tuning from real matches",
      body: "Balance and feel changes from player feedback and match data during and after launch.",
    },
  ],
  questions: [
    "Can you contract with someone living in Egypt (UTC+2, UTC+3 in summer), and how many hours of overlap do you need with the rest of the team each day?",
    "When is launch, and does a full-time start one month after an offer, with about 15 hours a week before that, still help the sprint?",
    "Is real-time multiplayer already in place, and which netcode model and framework do you use (custom rollback, Photon, something else)? Which parts would I own?",
    "How are moves authored today: animation-driven hitboxes, frame data in data files, or in code? Who designs the movesets and signs off on feel?",
    "Which platforms ship first (iOS, Android, PC), and which minimum devices do you hold builds to?",
    "How do you playtest during the sprint: internal sessions, the pre-order community, match telemetry?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the demos in a short call, and to take a trial task on one Meme Wars character or combat feel issue if that helps your decision.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity developer · games and interactive simulations",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

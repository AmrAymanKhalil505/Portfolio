import mr110Drilling from "../../assets/thumbnails/projects/cim/MR110 CNC Drilling.thumb.webp";
import pidDcMotor from "../../assets/thumbnails/projects/PID/MPC 103 DC Motor.thumb.webp";
import ev117Monitoring from "../../assets/thumbnails/projects/EduLab/EV117 save screen.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: Skillshot.pl post "Programista Gier - Unity3D - Electrician Life" (FreeMind Games SA,
// published 2026-10-08, "Praca stała", "Zdalnie"). Read directly from skillshot.pl; the post is
// in Polish and lists no formal requirements, so the answers follow its own lines. Game details
// (two ways to play, jobs with a shopping list, sandbox mode) come from the public Steam page
// (app 3592200, "Coming soon"). The post says the team is remote and "rozproszony po całej
// Polsce"; it does not say whether someone living outside Poland can join.

const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const atmoVideo = "https://youtu.be/eWFaHaYUy44";

const proposal: Proposal = {
  slug: "freemind",
  client: "FreeMind Games",
  projectName: "Electrician Life — Unity3D game programmer",
  dateLabel: "October 2026",
  greeting: "Dzień dobry,",
  eyebrow: "Application · FreeMind Games · Programista Gier Unity3D (Electrician Life)",
  headline: "A Unity programmer who simulates real electrical and mechanical equipment, for Electrician Life",
  lead: [
    "Electrician Life is about sockets, cables and testing voltage, with a player who can do the job properly or wing it. My daily work since October 2024 is close to that: at BEDO I build Unity simulations of real engineering trainers, where sensors, DC motors and actuators react to what the learner does, and readings such as voltage, current or motor speed come from the equation behind them, not from a hard-coded animation.",
    "Your post has no formal requirements list, so below I answer its own lines: my experience with dates and my own role, what I can bring to a cable-and-voltage simulator, and how I would approach it. I am also open about what I have not done yet: I have not shipped a commercial Steam game, and I live in Egypt, not Poland.",
  ],
  quickFacts: [
    { label: "Unity / C#", value: "Professionally since Dec 2023" },
    { label: "Work mode", value: "Remote, from Egypt" },
    { label: "Start", value: "1 month after an offer (notice period)" },
    { label: "Time zone", value: "Egypt · 1 h ahead of Poland" },
  ],
  answers: [
    {
      title: "A programmer for a game about electricity",
      original: "Szukamy programisty / elektryka... do rozwoju projektu \"Electrician Life\"",
      body: [
        "I am a programmer, not an electrician, but electrical and electromechanical behaviour is a big part of what I simulate. The BEDO MR110 / MR109 station simulations I built drive more than 50 sensor and PLC-style I/O signals (inductive, capacitive, reed, limit and photoelectric sensors), DC and stepper motors, pneumatics, and start / running / stop / emergency states. The EV117 fuel-cell lab shows live voltage, current, power and pressure, and the PID labs model DC motor speed and position from their equations.",
      ],
    },
    {
      title: "Interesting, fun and educational",
      original: "Dołącz do zespołu i spraw żeby to była ciekawa, zabawna i pouczająca produkcja.",
      body: [
        "Teaching through doing is my core work: guided experiment steps, measurement feedback and visible cause and effect in engineering labs. On the fun side, I built a one-week VR surfing game with a timer, collectibles and scoring for a Nescafe event booth, and I was the Unity developer of Atmosphere Protector, a mobile learning game for children.",
        "Your game's two ways to play, following procedures or improvising, mirror the two modes I already build: guided scenarios with enforced steps, and a free mode where the learner changes things and sees what happens.",
      ],
    },
    {
      title: "Experience, with dates and my own role",
      body: [
        "Professional Unity and C# continuously since December 2023: Tanta University (Dec 2023 – Oct 2024, sole developer of a Meta Quest 2 training suite), Ivris (Jun 2024 – Jun 2026, freelance, I built the Unity app) and BEDO Innovating Education (Oct 2024 – present, Senior Unity Engineer). The table below lists technologies and what I personally built in each.",
      ],
    },
    {
      title: "Remote work, from Egypt",
      original: "Wszyscy pracujemy zdalnie. Dołącz do naszego, rozproszonego po całej Polsce zespołu.",
      body: [
        "I am based in Egypt and work remotely. Egypt is one hour ahead of Poland, so a Polish working day overlaps almost completely with mine. Your post describes a team spread across Poland, so my first question below is whether a team member living outside Poland works for you, and on which contract basis.",
      ],
    },
    {
      title: "Permanent role and start date",
      original: "Praca stała",
      body: [
        "I am employed at BEDO with a one-month notice period. During that month I can already work part-time, about 15 hours per week, for onboarding and first tasks.",
        "After the notice month: [[TODO: Amr — full-time 40 h/week for this permanent role, or 30 h/week (up to 40 in busy phases)?]]",
      ],
    },
    {
      title: "Terms",
      original: "Poznajmy się i optymalne warunki współpracy ustalmy wspólnie.",
      body: [
        "Happy to agree the terms together, as you suggest. My expectation: [[TODO: salary expectation (monthly amount, currency, net or gross)]].",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on commercial games, location and language",
    body: "I have not yet shipped a commercial PC game on Steam or worked on a game in Early Access. My production work is training simulations (BEDO, Tanta University), a cross-platform Unity app (Ivris), a mobile learning game and a one-week VR event game. I also live in Egypt rather than Poland and I am writing to you in English. What I bring: almost three years of continuous professional Unity and C# where the job is to make equipment behave correctly and to teach through interaction, which is the core of a simulator like Electrician Life. I would expect to learn your Steam release process and your game-design habits from the team, and I prefer you know this now.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity / WebGL training simulations of BEDO engineering trainers: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics and industrial stations, PID control labs, fluid-mechanics labs.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "ScriptableObject architecture", "Dependency injection"],
      responsibility:
        "Simulation logic and equipment states (sensors, motors, actuators, process and emergency states), guided experiment steps, measurement and monitoring UI, WebGL builds, and the migration of existing projects to Unity 6. Worked with instructional-design, art and mechatronics teams; the hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "PID labs case study", href: caseStudyUrl("pid-control-virtual-labs-suite") },
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "WebGL", "AR Foundation", "AR Foundation Remote 2", "Photon", "PlayFab"],
      responsibility:
        "I built the Unity app, not the whole product: runtime loading of 3D furniture and room models, Photon multiplayer room editing in WebGL, AR preview, PlayFab and backend integration.",
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
        "Everything: interaction flows, scenes, grab and tool interactions (a working calculator and stopwatch held in hand, objects placed into liquid), adapting 3D assets, and headset builds.",
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
      label: "Electrical and electromechanical behaviour",
      title: "MR110 / MR109 industrial training stations",
      image: mr110Drilling,
      meta: "50+ sensor / PLC I/O signals · motors · emergency states",
      copy:
        "Stations with sensors, DC and stepper motors, pneumatics and conveyors driven by start / running / stop / emergency logic, so the learner sees the cause-and-effect chain behind each machine.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Values from real equations",
      title: "PID control virtual labs",
      image: pidDcMotor,
      meta: "6 process models · live tuning · response graphs",
      copy:
        "Pressure, temperature, DC motor speed and position, level and flow, each driven by its model. Students change gains and setpoints and watch the 3D equipment and the graphs react together.",
      links: [{ label: "Case study", href: caseStudyUrl("pid-control-virtual-labs-suite") }],
    },
    {
      label: "Readings the player can trust",
      title: "EV117 fuel-cell vehicle lab",
      image: ev117Monitoring,
      meta: "Voltage · current · power · pressure",
      copy:
        "A monitoring screen whose voltage, current, power and pressure readings follow the simulated energy path, plus a particle view of what happens inside the fuel cell.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Tools in the player's hand",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Quest 2 · Auto Hand · sole developer",
      copy:
        "A working calculator and stopwatch held in hand and objects dropped into liquid: tools that do real work in the scene, the same idea as a voltage tester that reads the actual circuit.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
    {
      label: "Fun and replayable",
      title: "Nescafe VR surfing booth",
      image: nescafeSurfing,
      meta: "VR · timed score loop · one week",
      copy: "A short-session game with collectibles, a timer and scoring, designed so first-time players understand it in seconds.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "Learning through play",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Unity · Android / iOS · learning game",
      copy:
        "A mobile game for children: airplane movement, pollution collection, an atmosphere health system and upgrades that carry the educational message.",
      links: [
        { label: "Video", href: atmoVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "From your post and the game",
      items: [
        {
          need: "Unity3D game programmer for a simulator in production",
          status: "direct",
          proof: "Unity and C# professionally since December 2023; simulations of real equipment are my main work at BEDO.",
        },
        {
          need: "A project about current, cables and electricity in general",
          status: "adjacent",
          proof: "Simulated sensors, motors, PLC-style I/O and voltage / current monitoring in BEDO trainers. Not household wiring or circuit-building gameplay yet.",
        },
        {
          need: "Jobs: fixing sockets, running cables, testing voltage",
          status: "adjacent",
          proof: "Hand-held working tools (Tanta), guided procedures with step validation and measurement feedback (BEDO). Cable routing itself would be new to me.",
        },
        {
          need: "Two ways to play: follow procedures or improvise",
          status: "direct",
          proof: "Guided scenarios with enforced steps plus a free mode where the learner changes values, in BEDO labs and in my HTML prototypes.",
        },
        {
          need: "Sandbox mode: build working (or not) electrical systems",
          status: "commitment",
          proof: "Not built before as a game feature. Related: free-mode labs where every reading comes from the model, so wrong setups behave wrongly instead of being blocked.",
        },
        {
          need: "Interesting, fun and educational",
          status: "direct",
          proof: "Educational simulations (BEDO, Tanta), a learning game (Atmosphere Protector) and a timed score game (Nescafe booth).",
        },
        {
          need: "Many months of work in a remote, distributed team",
          status: "partial",
          proof: "Long-running projects with several teams at BEDO since Oct 2024, and two years of freelance work for Ivris in a shared codebase. I would work remotely from Egypt; whether that fits your team is my first question.",
        },
      ],
    },
    {
      title: "What a Steam simulator team usually expects",
      items: [
        {
          need: "A shipped commercial PC game",
          status: "partial",
          proof: "Delivered to real users: the Nescafe booth game ran at a live event, the Tanta Quest 2 suite as sole developer, and the Ivris app on WebGL, Android and iOS. No Steam or PC game release yet — see the note above.",
        },
        {
          need: "Gameplay systems: tasks, progression, feedback",
          status: "adjacent",
          proof: "Guided steps and assessment feedback (BEDO), timer and scoring (Nescafe), atmosphere health and upgrades (Atmosphere Protector).",
        },
        {
          need: "Working in an existing codebase without breaking it",
          status: "direct",
          proof: "Migrating BEDO's existing simulation projects to Unity 6 since mid-2026; shared Unity and backend codebase at Ivris.",
        },
        {
          need: "Performance",
          status: "adjacent",
          proof: "Quest 2 standalone and WebGL, both memory- and performance-constrained targets. Not profiled for PC hardware tiers yet.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would approach electricity in Electrician Life",
    intro:
      "I have not seen your codebase, so this depends on how electricity is modelled today. It is the structure I would bring to the first conversation with your lead:",
    steps: [
      {
        title: "The circuit as data, not as scripted outcomes",
        body: "Breakers, cables, switches, sockets and lamps as connected components, updated by a few simple rules (continuity, polarity, load against breaker rating). Then a lamp lights because the circuit is closed, and duct tape fails because the model says so, in jobs and in sandbox mode alike.",
      },
      {
        title: "Tools read the model",
        body: "A voltage tester or multimeter asks the circuit for the value at the point it touches, the way the BEDO monitoring screens read the simulation. Players can trust the tester, and designers get a debugging view for free.",
      },
      {
        title: "Jobs as steps, with fun failure",
        body: "Each job as a sequence of steps that checks what the player did, with the same step-and-state backbone as my guided labs. The professional path is validated; the reckless path is allowed and produces consequences (sparks, a tripped breaker, an angry client) instead of being blocked.",
      },
      {
        title: "Prototype the rules before building in Unity",
        body: "Before Unity work, I build the system as an HTML prototype with 2D vector graphics. Every changing value is driven by its equation and shown next to it, so the team can check that nothing is hard-coded, and it covers both guided scenarios with enforced steps and free mode. In a game team, this gives designers a cheap place to tune realism against fun before Unity time is spent.",
      },
      {
        title: "Teach by consequence",
        body: "Short feedback loops in the style of my learning games: the player sees immediately why something worked or burned, which keeps the game entertaining and educational at the same time.",
      },
    ],
    note: "How realistic the electrical rules should be is a design decision for your team; the structure above works for simplified game rules as well as for stricter ones.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time start",
      body: "About 15 hours per week: repository, build and tools, play the current build, and take first small tasks or bug fixes.",
    },
    {
      when: "Weeks 1–4",
      title: "Onboarding at full engagement",
      body: "Learn how electricity, tools and jobs are built today; deliver first features with code review from the team.",
    },
    {
      when: "Months 2–3",
      title: "Own a system",
      body: "Take responsibility for the area your lead chooses, for example tools and measurement, job logic or the sandbox, with an HTML prototype first where the rules need agreeing.",
    },
    {
      when: "After",
      title: "Through release",
      body: "Ongoing development across the many months of work your post mentions, including fixes from playtests and player feedback.",
    },
  ],
  questions: [
    "Is the role open to someone living in Egypt and working remotely from there, and if so on which contract basis (for example B2B / invoice)?",
    "Is English enough for day-to-day work in the team, or is Polish needed for meetings, documentation or in-game text?",
    "How is electricity modelled in the current build — a general circuit simulation, or scripted per job — and which part would I work on first?",
    "Which Unity version does Electrician Life use, and is it PC-only for now?",
    "How realistic should the electrical rules be: real rules such as polarity, breakers and residual-current devices, or simplified game rules?",
    "How does the team work day to day: task tracking, code review and core hours?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the simulation demos in a short call and hear how electricity works in Electrician Life today.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity simulation engineer",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

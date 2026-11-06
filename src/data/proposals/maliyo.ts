import cimBlockEditor from "../../assets/thumbnails/projects/cim/Inter02.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import fm103Graph from "../../assets/thumbnails/projects/EduLab/FM103 Graph.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: Maliyo Games careers page "Unity Game Developer" (maliyo.com/unity-game-developer/,
// found via GameJobs.co, posted ~2026-10-16). Status: Full-Time Exempt, Location: Remote,
// Compensation: Negotiable (subject to experience). Lagos-based studio, African-inspired mobile games,
// 40+ titles. Applied through the site's "Apply for the Job" form; the post asks no written questions,
// so the answers below follow its Requirements list in order, then location, start date and pay.

const atmoVideo = "https://youtu.be/eWFaHaYUy44";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";

const proposal: Proposal = {
  slug: "maliyo",
  client: "Maliyo Games",
  projectName: "Unity gameplay, prototypes and maintenance for African-inspired mobile games",
  dateLabel: "October 2026",
  greeting: "Hello Maliyo team,",
  eyebrow: "Application · Maliyo Games · Unity Game Developer (remote)",
  headline: "Unity developer who turns a game concept into a playable prototype, then keeps the game healthy",
  lead: [
    "Your role covers the whole life of a mobile game: brainstorming concepts with the design team, prototyping and testing gameplay, building UI and integrating art, then maintaining and fixing your existing titles. The closest match in my work is Atmosphere Protector, a Unity mobile game for Android and iOS that teaches children about air pollution through play, with Arabic instruction screens for its young local audience. Building a game around a culture and a language its players recognise is the same job you describe.",
    "I have worked professionally in Unity and C# since December 2023. Today I am Senior Unity Engineer at BEDO, where I build commercial Unity training simulations from first prototype to delivered product on a shared codebase of about 80,000 lines of in-house C#. Below I go through your requirements in order, list my experience with dates and my own role, and say plainly where I fall short: I have not released a game in the app stores yet, and I have no NPC AI work to show.",
  ],
  quickFacts: [
    { label: "Stack", value: "Unity · C# · Android / iOS · WebGL" },
    { label: "Start", value: "1 month after an offer" },
    { label: "Hours", value: "40 h/week, full-time" },
    { label: "Location", value: "Egypt (remote)" },
  ],
  answers: [
    {
      title: "Computer science background",
      original: "Background in computer science, computer engineering, or similar technical skills.",
      body: [
        "B.Sc. in Computer Science Engineering and Technology from the German University in Cairo (2014-2019). My bachelor thesis already used Unity: I trained a model in Python to drive a car inside a Unity simulation.",
      ],
    },
    {
      title: "Game design and development training",
      original: "Education and training in game design and development preferred.",
      body: [
        "No formal game-design degree. My game development training is practical: just under three years of professional Unity work, two games (Atmosphere Protector and a one-week Nescafe event game), and a six-month 3D modelling and texturing specialization at the Nayzak animation school, which helps me work with artists and fix models in Blender myself.",
      ],
    },
    {
      title: "Building libraries and APIs",
      original: "Demonstrated experience building libraries and application program interfaces (APIs).",
      body: [
        "At BEDO I build systems that other developers on the team reuse across many simulations, on a shared codebase of about 80,000 lines of in-house C#. One example is a block-based command editor with validation and an interpreter that runs the commands with run, pause and stop controls. On the integration side, I connected the Ivris Unity app to Photon (multiplayer) and PlayFab (backend). I have not published a public library or a web API of my own.",
      ],
    },
    {
      title: "Unity and programming languages",
      original: "Knowledge of Unity game engine and/or related technologies. Proficient in programming languages, such as C#, C++, Object C, Parse, JavaScript, or Java.",
      body: [
        "Unity and C# every working day since December 2023, including Unity 6 (Ivris, and the current migration of BEDO projects). JavaScript: a Coursera specialization in full-stack web development with React (HKUST, 2021), JavaScript / TypeScript UI inside Unity with OneJS at Ivris, and the HTML prototypes I build before every Unity system. C++, Objective-C and Java: no real project experience.",
      ],
    },
    {
      title: "Android and iOS",
      original: "Prior app development experience in Android or iOS is desirable.",
      body: [
        "Yes. Android and iOS builds of the Ivris Unity app (AR furniture preview with AR Foundation), the Atmosphere Protector game built for Android and iOS, and Android-based standalone Meta Quest 2 builds at Tanta University. I have not handled a store release of my own.",
      ],
    },
    {
      title: "Working with cross-functional teams, in person and remotely",
      original: "Demonstrated flexibility and the ability to work with cross-functional teams in-person and remotely.",
      body: [
        "At BEDO I work every day with instructional designers, artists and mechatronics engineers, and I mentor one intern and review his work. For two years (Jun 2024 - Jun 2026) I also worked freelance for Ivris alongside my full-time job, on a shared Unity and backend codebase, which is also where my time management is tested. I work in English every day; my B.Sc. and thesis were in English.",
      ],
    },
    {
      title: "Location and working hours",
      original: "Location: Remote",
      body: [
        "I live in Egypt and would work remotely. Egypt is one to two hours ahead of Lagos depending on the season, so your whole working day fits inside mine. Please tell me if the role is open to someone outside Nigeria; it is the first question at the end of this page.",
      ],
    },
    {
      title: "Start date and hours",
      original: "Status: Full-Time Exempt",
      body: [
        "I am currently employed with a one-month notice period. I give notice when I accept an offer and start full-time, 40 hours a week, one month later. During the notice month I can already put in about 15 hours a week, for example to get into your codebase and one of your existing games.",
      ],
    },
    {
      title: "Salary expectation",
      original: "Compensation: Negotiable (subject to experience)",
      body: ["[[TODO: salary]] per month for the full-time role, open to discussing the contract form and how payment works across borders."],
    },
  ],
  candidNote: {
    title: "A transparent note on fit",
    body: "My professional Unity work started in December 2023, and most of it is training simulations and apps rather than games. I have built two games, but neither is in the app stores: Atmosphere Protector was built for Android and iOS and is not released yet, and the Nescafe game ran at a live event. I have not programmed NPC AI or procedural terrain, I have not written game scripts or storyboards, and I am not a character animator: I fix and adjust models in Blender and am a beginner in Substance Painter and ZBrush. Automated testing is not a strength either; I test manually with reviewers and use AI tools to help write the tests I add. What I bring: fast prototyping as my normal way of working, gameplay and UI that a first-time player understands in seconds, mobile and other constrained targets, and long-lived commercial code that I keep maintaining and extending. I would rather you know this now than find it in an interview.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Interactive Unity training simulations of BEDO engineering trainers, sold as commercial B2B products: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics stations, PID control labs, fluid-mechanics labs. Migrating projects to Unity 6 since mid-2026.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration)", "DOTween", "Timeline"],
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
      tech: ["Unity 6", "C#", "WebGL", "Android", "iOS", "AR Foundation", "Photon", "PlayFab", "OneJS"],
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
      label: "Educational mobile game",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Unity · built for Android / iOS · Arabic UI · not released",
      copy:
        "Fly a plane, collect pollution clouds, keep the atmosphere's health bar up and unlock cleaner upgrades such as recycling, filtering and electric transport. Arabic instruction screens introduce the goal to young players before play starts: a game built around its audience's language and everyday world.",
      links: [
        { label: "Video", href: atmoVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "Concept to playable in a week",
      title: "Nescafe VR surfing booth",
      image: nescafeSurfing,
      meta: "One week · timer · score · collectibles",
      copy:
        "A short-session arcade loop built from brief to live event in one week: simple movement, collectible targets, score and timer feedback, three themed sand and water routes, and a fast start and reset for booth throughput.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "Android and iOS",
      title: "Ivris AR interior app",
      image: ivrisApp,
      meta: "Unity 6 · Android / iOS · WebGL · Photon · PlayFab",
      copy:
        "My Unity implementation of a cross-platform interior-design app: runtime-loaded 3D models, multiplayer room editing in the browser, and an AR preview on Android and iOS phones.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Learning through play",
      title: "Engineering education virtual labs",
      image: fm103Graph,
      meta: "Commercial B2B · WebGL · guided and free modes",
      copy:
        "Bernoulli, laminar-flow and fuel-cell labs where students learn by doing: guided steps, measurement feedback, graphs and dashboards, built by reusing common Unity patterns across labs and delivered as WebGL.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Tools other people build with",
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
  ],
  requirementGroups: [
    {
      title: "Game design and prototyping",
      items: [
        {
          need: "Brainstorm game concepts, design elements and specifications with the design team",
          status: "adjacent",
          proof: "Before any Unity work I agree each system with BEDO's instructional designers on an HTML prototype; I shaped the Atmosphere Protector loop around its learning goal. Not yet inside a game design team.",
        },
        {
          need: "Design and test gameplay features and prototypes",
          status: "direct",
          proof: "Core loops in Atmosphere Protector and the Nescafe game (brief to booth in one week); prototype-first on every BEDO system.",
        },
        {
          need: "Select suitable frameworks and turn concepts into clean, efficient code",
          status: "direct",
          proof: "Unity / C# in every project; Photon, PlayFab, AR Foundation, Auto Hand and DOTween integrated where each project needed them.",
        },
        {
          need: "Contribute to innovation in game design and follow industry trends",
          status: "adjacent",
          proof: "Educational game design (gameplay that carries a learning message); Codex and Claude Code in daily development.",
        },
      ],
    },
    {
      title: "Gameplay programming",
      items: [
        {
          need: "Program the game's terrain",
          status: "partial",
          proof: "Sand and water routes in the Nescafe game, 3D scenes in every project. No procedural or runtime terrain systems.",
        },
        {
          need: "Program artificial intelligence for non-player characters",
          status: "commitment",
          proof: "Not done yet. My closest work is state logic for simulated machines and an interpreter that drives a robot arm; I would build NPC behaviour on your first title.",
        },
        {
          need: "Develop milestones, checkpoints and expansion packs",
          status: "adjacent",
          proof: "Upgrades and progression in Atmosphere Protector; guided-step progression in BEDO labs. No expansion packs or DLC yet.",
        },
      ],
    },
    {
      title: "UI, art, animation and audio",
      items: [
        {
          need: "User interface development",
          status: "direct",
          proof: "Game UI in Atmosphere Protector (Arabic instructions, health feedback, upgrade screen) and simulation UI, dashboards and graphs at BEDO.",
        },
        {
          need: "Integrate graphic design, animation and audio features",
          status: "adjacent",
          proof: "Integrating artists' models and UI art at BEDO, DOTween animation in almost every project, Blender to fix and adjust models myself.",
        },
        {
          need: "Game scripts, storyboards, animated characters and objects",
          status: "partial",
          proof: "Short Timeline intro sequences for BEDO's marketing team; six-month modelling and texturing specialization. No storyboards or rigged character animation.",
        },
      ],
    },
    {
      title: "Quality and maintenance",
      items: [
        {
          need: "Maintain code and fix bugs in existing mobile games",
          status: "adjacent",
          proof: "Ongoing maintenance of long-lived commercial Unity products at BEDO, including the Unity 6 migration; mobile builds at Ivris. Not existing store games.",
        },
        {
          need: "Perform tests and implement validation procedures",
          status: "partial",
          proof: "Manual testing with instructional-design reviewers until sign-off; validation in the command editor. Automated tests are not a strength; AI tools write most of the ones I add.",
        },
        {
          need: "Document the full lifecycle of game development",
          status: "adjacent",
          proof: "The HTML prototype is the written-down agreement for each system before Unity work; portfolio case studies of each project.",
        },
        {
          need: "Set work schedules and deadlines with other programmers",
          status: "adjacent",
          proof: "Shared team codebase at BEDO; mentoring one intern since Aug 2026; a fixed one-week booth deadline.",
        },
      ],
    },
    {
      title: "Requirements",
      items: [
        {
          need: "Computer science or computer engineering background",
          status: "direct",
          proof: "B.Sc. Computer Science Engineering and Technology, German University in Cairo (2014-2019).",
        },
        {
          need: "Education and training in game design and development (preferred)",
          status: "partial",
          proof: "Practical training only: professional Unity since Dec 2023, Unity thesis, Nayzak modelling and texturing specialization.",
        },
        {
          need: "Experience building libraries and APIs",
          status: "adjacent",
          proof: "Reusable systems on BEDO's shared codebase (~80,000 lines of in-house C#); command editor and interpreter. No public library or web API.",
        },
        {
          need: "Knowledge of Unity",
          status: "direct",
          proof: "Every project above, including Unity 6.",
        },
        {
          need: "C#, C++, Objective-C, JavaScript or Java",
          status: "direct",
          proof: "C# daily. JavaScript: React specialization, OneJS in Unity, HTML prototypes. No real C++, Objective-C or Java work.",
        },
        {
          need: "Android or iOS app development (desirable)",
          status: "direct",
          proof: "Ivris Android / iOS AR app, Atmosphere Protector for Android / iOS, Quest 2 Android builds. No store release of my own.",
        },
        {
          need: "Analytical and problem-solving skills on complex coding issues",
          status: "direct",
          proof: "Interpreter, forward / inverse kinematics, equation-driven simulation behaviour, engine-version migration.",
        },
        {
          need: "Communication, collaboration, organisation, several tasks at once",
          status: "direct",
          proof: "English daily; two years of freelance work alongside a full-time job; daily work with design, art and engineering teams.",
        },
        {
          need: "Cross-functional teams in person and remotely",
          status: "direct",
          proof: "Daily work with design, art and engineering teams at BEDO; two years of freelance work for Ivris. For this role, remote from Egypt.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would work on Maliyo's games",
    intro:
      "To be checked against your codebase, tools and the games I would join first, but this is how I would work from the first weeks:",
    steps: [
      {
        title: "Playable before polished",
        body: "At BEDO I build an HTML prototype with 2D vector graphics before any Unity work, so the design side can check the behaviour and agree on it first. For a Maliyo concept the same rule means a rough playable build of the core action in days, so the design team can judge the idea before art time is spent.",
      },
      {
        title: "Learn the existing games first",
        body: "Start with bug fixes on one of your live titles, so I learn how your games are structured, then write down what recurs across titles (menus, progression, audio, ads or store hooks) and agree with the team what is worth sharing.",
      },
      {
        title: "Tuning values outside the code",
        body: "Keep speeds, difficulty, rewards and level settings in data that designers can change without a programmer, so balancing a new game does not wait on code changes.",
      },
      {
        title: "Readable for the player",
        body: "Clear first-session onboarding, short feedback through UI and tweens, and text and audio that can be swapped per language, the way Atmosphere Protector introduces its goal in Arabic before play.",
      },
      {
        title: "Built for the phones your players have",
        body: "Agree a minimum device early, test builds on real Android devices every iteration, and flag performance and download-size risks as soon as they appear.",
      },
    ],
    note: "NPC AI, terrain systems and app-store release practice are things I would build or learn on your games; I have not done them in production.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time onboarding",
      body: "About 15 hours a week around my current job: read your codebase, set up builds for one existing title and fix a first set of bugs.",
    },
    {
      when: "Month 1",
      title: "Full-time",
      body: "40 hours a week on your working hours. Maintenance and features on current titles, and a first prototype with the design team.",
    },
    {
      when: "Months 2-3",
      title: "Prototypes and shared systems",
      body: "Take a concept from brainstorm to a tested prototype, and pull systems that recur across your games into shared code the team agrees on.",
    },
    {
      when: "Ongoing",
      title: "Concept to release",
      body: "Own gameplay features from prototype through release and maintenance, with milestones and checkpoints agreed with the team.",
    },
  ],
  questions: [
    "Is this remote role open to someone living in Egypt, and what contract form would it be (employment through Maliyo or a contractor agreement), paid in which currency?",
    "Which games would I join first: new prototypes, or maintenance of existing titles? Which Unity version are they on?",
    "How does a concept move from brainstorm to prototype to release at Maliyo, and who owns game design versus programming?",
    "What kind of NPC AI and terrain do your upcoming games need, and is there an existing framework for them?",
    "Do artists and animators on the team create characters and storyboards, or is part of that expected from the developer?",
    "How many programmers are on a game, and what working hours (WAT) and in-person time, if any, do you expect from remote team members?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the demos in a short call, and to take a prototyping task on one of your game concepts if that helps your decision.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity developer · games and interactive simulations",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

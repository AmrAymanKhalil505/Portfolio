import mr109RobotArm from "../../assets/thumbnails/projects/MR109 Compact/MR109 Robot Arm.thumb.webp";
import cimBlockEditor from "../../assets/thumbnails/projects/cim/Inter02.thumb.webp";
import ev117Particles from "../../assets/thumbnails/projects/EduLab/EV117 Particles.thumb.webp";
import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: hh.ru vacancy 138480602 "Unity разработчик (VR) Middle+" (TOO Delovye Informatsionnye
// Sistemy Kazakhstan, Astana), posted 2026-10-14, still open on 2026-10-20. Remote, full-time, 5/2,
// experience 1-3 years. Contract shown as a civil (GPH) contract with an individual, while the text
// also offers official employment under the Kazakh labour code. Pay "discussed at the interview".
// The post is in Russian and asks no written questions, so the answers below follow its own lists
// (what you will do, what we expect) plus the points a recruiter checks first: language, location,
// contract, start date and pay. Amr does not speak Russian; that is stated openly and asked first.

const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";

const proposal: Proposal = {
  slug: "kazakh-vr",
  client: "Delovye Informatsionnye Sistemy Kazakhstan",
  projectName: "VR safety and skills trainers for industrial, construction and manufacturing companies",
  dateLabel: "October 2026",
  greeting: "Hello,",
  eyebrow: "Application · Delovye Informatsionnye Sistemy Kazakhstan · Unity VR Developer (Middle+)",
  headline: "Unity VR developer for your industrial safety and skills trainers",
  lead: [
    "You build custom and off-the-shelf VR trainers that teach safe work on industrial equipment. That is the kind of software I build: at BEDO I develop Unity training simulations of real industrial and mechatronics stations, with process states, guided steps and emergency behaviour, sold as commercial products. Before that I was the sole Unity developer of a Meta Quest 2 training suite, from architecture to headset builds.",
    "I am writing in English because I do not speak Russian. Whether English works for your team is my first question at the end of this page. Below I go through your list of tasks and requirements in order, with dates, my own role, and an honest status for each point.",
  ],
  quickFacts: [
    { label: "Start", value: "1 month after an offer" },
    { label: "Hours", value: "Full-time · 5/2 · 40 h/week" },
    { label: "Location", value: "Egypt (remote) · 2-3 h behind Astana" },
    { label: "Working language", value: "English (no Russian)" },
  ],
  answers: [
    {
      title: "Experience, with dates",
      original: "Опыт работы: 1–3 года",
      body: [
        "Continuous professional Unity / C# work since December 2023, almost three years: Senior Unity Engineer at BEDO Innovating Education (Oct 2024 - present), Unity and AR developer for Ivris (freelance, Jun 2024 - Jun 2026), sole Unity VR developer at Tanta University (Dec 2023 - Oct 2024), and a one-week VR booth game for Nescafe Ice Coffee (2025). The full table with technologies and my own responsibility is further down.",
      ],
    },
    {
      title: "C#, OOP, SOLID and design patterns",
      original: "Уверенное знание C#, ООП, SOLID, паттернов проектирования",
      body: [
        "C# in every project I have done. At BEDO I work on a shared team codebase of about 80,000 lines of in-house C#, where systems are configured per project through ScriptableObjects and dependency injection. Station and lab behaviour is built as explicit state logic, and I wrote a command interpreter for a robot-programming tool. I also mentor one intern at BEDO and review his code (since August 2026).",
      ],
    },
    {
      title: "Architecture, core systems, mechanics and UI",
      original: "Опыт разработки архитектуры, Core-систем, механик, UI, Unity Editor Tools, модульных пакетов и оптимизации производительности",
      body: [
        "Architecture and core systems: I designed the whole Tanta University Quest 2 suite as its only developer, and I build and maintain systems in BEDO's shared codebase. Mechanics, interactive scenarios and UI are my daily work: guided experiment steps, equipment states, measurement and monitoring screens, VR hand-held tools.",
        "Editor tools and packages are the weaker part, and I say so in the note below: I have built runtime editors (a block-based command editor, a WebGL room editor), and I use packages through the Unity Package Manager, but custom Unity Editor tooling and authoring versioned UPM packages are not shown in my portfolio.",
      ],
    },
    {
      title: "Working language",
      body: [
        "I work in English every day, and my B.Sc. studies and thesis at the German University in Cairo were in English. I do not speak Russian (my other language is German at A1 level). Written reports, Git history, code comments and calls with your technical lead would need to be in English. If the team works only in Russian, I would rather you know now.",
      ],
    },
    {
      title: "Location and contract",
      original: "Официальное оформление по ТК РК · Работаем удалённо",
      body: [
        "I live in Egypt and would work remotely. Your vacancy lists a civil (GPH) contract with an individual and also mentions official employment under the Kazakh labour code. I do not know which of the two your company can offer someone who lives outside Kazakhstan, so I have made it my first question below.",
      ],
    },
    {
      title: "Schedule and start date",
      original: "Полная занятость · График: 5/2",
      body: [
        "Full-time, five days a week, 40 hours a week. I am currently employed with a one-month notice period: I give notice when I accept an offer and start full-time one month later. During the notice month I can already work about 15 hours a week, to get into your repository, packages and tools before day one.",
        "Astana is 3 hours ahead of Egypt in winter and 2 hours in summer, so a normal Egypt working day overlaps most of yours.",
      ],
    },
    {
      title: "Salary expectation",
      original: "Вознаграждение обсуждаем при собеседовании",
      body: ["USD 1,500-1,800 per month, open to discussing the details and the contract form at the interview."],
    },
  ],
  candidNote: {
    title: "A transparent note before you read further",
    body: "Three things you should know. First, I do not speak Russian, so I can only work with your team in English. Second, my dedicated VR work is about 11 months at Tanta University plus a one-week VR booth game; my industrial training simulations at BEDO are desktop and WebGL, not VR. Third, two items on your list are not shown in my portfolio: custom Unity Editor tooling (I have built runtime editors instead) and authoring versioned, backward-compatible UPM packages (I have used packages and SDKs through UPM, and I reuse modules across projects inside one shared codebase). What I bring: almost three years of continuous professional Unity work on training simulations of real equipment, which is the scenario, state and feedback logic a safety trainer needs, plus standalone Quest 2 delivery as a sole developer. I would rather you know this now than find it in the interview.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity training simulations of BEDO engineering trainers, sold as commercial B2B products: MR109 / MR110 mechatronics and industrial stations, EV117 fuel-cell vehicle lab, PID control labs, fluid-mechanics labs. Migrating projects to Unity 6 since mid-2026.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration)", "ScriptableObject architecture", "Dependency injection", "DOTween", "Git"],
      responsibility:
        "Simulation logic and equipment states, guided steps, UI and feedback, runtime tools such as a visual command editor and interpreter, WebGL builds. Shared team codebase of about 80,000 lines of in-house C#; I mentor one intern and review his work. Worked with instructional-design, art and mechatronics teams; the hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "WebGL", "AR Foundation", "AR Foundation Remote 2", "Photon", "PlayFab"],
      responsibility:
        "The Unity app, not the whole product: runtime loading of 3D models, Photon multiplayer room editing in WebGL, AR preview, PlayFab integration.",
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
        "Everything: application architecture, turning instructional requirements into VR interaction flows, scenes, grab and tool interactions (a working calculator and stopwatch held in hand, objects placed into liquid), adapting 3D assets, standalone headset builds.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth game (freelance)",
      context: "Short-session branded VR game for an event booth: surf sand and water tracks, collect cans, beat the timer.",
      tech: ["Unity", "C#", "VR", "URP"],
      responsibility:
        "Unity developer: gameplay loop, timed scoring, collectibles and onboarding that first-time visitors understand in seconds, from brief to booth in one week. The brand belongs to its owners.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "VR training, sole developer",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Quest 2 · Auto Hand · onboarding",
      copy:
        "Hand-held tools in VR (a working calculator and stopwatch), objects placed into liquid, and an onboarding tutorial for people who have never worn a headset, the same first-session problem a factory worker has with a safety trainer.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
    {
      label: "Industrial equipment and procedures",
      title: "MR109 / MR110 industrial training",
      image: mr109RobotArm,
      meta: "Sensors · actuators · process states",
      copy:
        "Stations with motors, pneumatics, conveyors, a robot arm and sensors, driven by ready / running / done / emergency logic. A safety scenario sits on the same step-and-state backbone.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Tools for non-programmers",
      title: "Visual command editor and interpreter",
      image: cimBlockEditor,
      meta: "Block editor · validation · interpreter",
      copy:
        "A block-based editor where students build robot command rows without typing syntax, validate them and run them through a G-code-style interpreter with run, pause and stop controls. A runtime tool, built so non-programmers can configure behaviour.",
      links: [{ label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") }],
    },
    {
      label: "Guided scenarios and feedback",
      title: "EV117 fuel-cell vehicle lab",
      image: ev117Particles,
      meta: "Guided steps · live readings · hidden processes",
      copy:
        "A guided lab with live readings of pressure, voltage, current and efficiency, plus a particle view of what happens inside the cell: making an invisible process and its risks visible to the learner.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "VR on a deadline",
      title: "Nescafe VR booth",
      image: nescafeSurfing,
      meta: "VR · URP · one week",
      copy: "Short-session VR game with collectibles, a timer and scoring, built from brief to live event in one week.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "What you will do (Чем нужно будет заниматься)",
      items: [
        {
          need: "Develop and maintain core systems and application architecture",
          status: "direct",
          proof: "Designed the whole Quest 2 suite at Tanta as sole developer; build and maintain systems in BEDO's shared ~80,000-line codebase.",
        },
        {
          need: "Game and simulation mechanics",
          status: "direct",
          proof: "Equipment and process simulation at BEDO (stations, labs, robot arm kinematics); VR tool interactions at Tanta; gameplay loop at the Nescafe booth.",
        },
        {
          need: "Build interactive scenarios",
          status: "direct",
          proof: "Guided experiment steps with validation at BEDO; VR onboarding and lab procedures at Tanta.",
        },
        {
          need: "User interfaces (UI)",
          status: "direct",
          proof: "Measurement and monitoring screens, instruction overlays and dashboards at BEDO; in-VR UI and hand-held tools at Tanta.",
        },
        {
          need: "Tools for the Unity Editor",
          status: "partial",
          proof: "Runtime editors built (block-based command editor at BEDO, WebGL room editor at Ivris). Custom Unity Editor windows and inspectors are not shown in my portfolio.",
        },
        {
          need: "Reusable Unity packages and modules, versioning, backward compatibility",
          status: "partial",
          proof: "Modules reused across labs inside BEDO's shared codebase, configured per project; packages and SDKs consumed through UPM. Have not authored and versioned a UPM package.",
        },
        {
          need: "Integrate third-party SDKs and libraries",
          status: "direct",
          proof: "Auto Hand (VR), AR Foundation and AR Foundation Remote 2, Photon, PlayFab, DOTween.",
        },
        {
          need: "Performance optimisation",
          status: "adjacent",
          proof: "Standalone Quest 2 and production Unity WebGL, both tight on memory and frame time.",
        },
        {
          need: "Maintain the Git repository and change history",
          status: "direct",
          proof: "Team Git workflow at BEDO; shared Unity and backend codebase at Ivris.",
        },
        {
          need: "Short reports on completed work",
          status: "commitment",
          proof: "Short written reports in English per task or per week, in whatever format your technical lead uses.",
        },
        {
          need: "Work with the technical lead and other specialists",
          status: "direct",
          proof: "Daily work with instructional-design, art and mechatronics teams at BEDO.",
        },
        {
          need: "Find and work out technical solutions independently",
          status: "direct",
          proof: "Sole developer at Tanta; whole features such as the command editor and interpreter at BEDO.",
        },
      ],
    },
    {
      title: "What you expect (Ожидаем от тебя)",
      items: [
        {
          need: "Confident C#, OOP, SOLID, design patterns",
          status: "direct",
          proof: "ScriptableObject-driven configuration, dependency injection, state logic, an interpreter; I review an intern's code at BEDO.",
        },
        {
          need: "Experience in architecture, core systems, mechanics, UI, Editor tools, modular packages and optimisation",
          status: "partial",
          proof: "Architecture, core systems, mechanics and UI: yes. Editor tools and package authoring: see the rows above and the note.",
        },
        {
          need: "Unity, Visual Studio / Rider, Git, Unity Package Manager, profiling and debugging tools",
          status: "direct",
          proof: "Unity and Git daily; packages added through UPM; profiling and debugging on Quest 2 and WebGL builds.",
        },
        {
          need: "Independence, ownership, initiative, systems thinking, attention to code quality, teamwork",
          status: "direct",
          proof: "Sole ownership at Tanta, one-week delivery at Nescafe, long-lived shared code at BEDO, prototype-first agreement with the design side.",
        },
        {
          need: "Experience: 1-3 years",
          status: "direct",
          proof: "Almost three years of continuous professional Unity work since December 2023.",
        },
        {
          need: "VR development",
          status: "partial",
          proof: "About 11 months of dedicated Quest 2 work plus a one-week VR booth game; own Meta Quest 2 for testing.",
        },
        {
          need: "Working language of the team (not stated; the post is in Russian)",
          status: "partial",
          proof: "English only. I do not speak Russian.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would work on your VR trainers",
    intro:
      "To be checked against your existing architecture, packages and headsets, but this is how I would approach a new or existing trainer:",
    steps: [
      {
        title: "Each scenario as a state machine",
        body: "A safety procedure is a sequence of states with checks: for example protective equipment, inspection before work, isolating the equipment, the work itself, and what happens after a mistake. Each step validates what the learner did, records errors for assessment, and can show the consequence of an unsafe action without harming anyone.",
      },
      {
        title: "Scenarios configured as data",
        body: "Steps, hazards, hints and scoring rules live in ScriptableObjects or similar data, so one trainer engine serves many customers and off-the-shelf trainers differ by content, not by code. This is where Editor tools pay off: a scenario editor that lets a methodologist build and check steps without a programmer.",
      },
      {
        title: "Prototype the logic before Unity time",
        body: "At BEDO, before any Unity work, I build the system as an HTML prototype with 2D vector graphics. Every changing value is driven by its real equation, shown next to it, so the instructional designers can verify the behaviour and confirm nothing is hard-coded. It covers guided scenarios with enforced steps and free mode. For a safety trainer the same step lets your subject-matter experts confirm the procedure before 3D and VR work starts.",
      },
      {
        title: "A thin interaction layer",
        body: "Scenario logic stays independent of the VR toolkit and headset, with interactions (grab, use a tool, press a control, point and confirm) in a separate layer. That keeps shared packages stable when a customer needs another headset or a desktop version.",
      },
      {
        title: "Packages with versions you can trust",
        body: "Shared modules as UPM packages with semantic versions, a changelog and a sample scene, so a trainer built last year still compiles when the core package moves on. This is new to me as an author, and I would follow your existing conventions.",
      },
      {
        title: "A frame budget from the first build",
        body: "Agree frame-time and memory targets for your headsets early and test on the device every iteration, not only in the editor.",
      },
    ],
    note: "Safety procedures, hazards and assessment rules come from your methodologists and your customers' safety experts; I implement them, I do not define them.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time onboarding",
      body: "About 15 hours a week around my current job: read the architecture and shared packages, set up the build pipeline for your headsets, and take a small task with a short report.",
    },
    {
      when: "Month 1",
      title: "Full-time, 40 h/week",
      body: "Work on a current trainer: mechanics, scenario steps and UI, reviewed by your technical lead.",
    },
    {
      when: "Months 2-3",
      title: "Core systems and tools",
      body: "Take ownership of a core module or a reusable package, and start Editor tools that make scenario building faster.",
    },
    {
      when: "Ongoing",
      title: "Custom and off-the-shelf trainers",
      body: "Build new trainers on the shared core, integrate customer-specific SDKs, keep packages backward compatible and builds within budget.",
    },
  ],
  questions: [
    "Can you hire someone living in Egypt, and on which contract (civil GPH contract or employment), and can the work, reports and calls with the technical lead be in English?",
    "Which headsets do the trainers target (standalone or PC VR), and which XR toolkit do you use: XR Interaction Toolkit, a vendor SDK, or your own?",
    "How are scenarios built today: by programmers in code, or by methodologists through Editor tools? Which packages are shared across trainers?",
    "How big is the Unity team, how does code review work, and which core hours (Astana time) should I overlap with?",
    "Which languages do the trainers' interfaces need: Kazakh, Russian, English?",
    "Do training results go to the customer's LMS or reporting system, or stay in the application?",
  ],
  closing: {
    title: "Next step",
    body: "If English works for your team, I would be glad to walk you through the demos in a short call, and to take a test task on one of your trainer scenarios if that helps your decision.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity VR / simulation developer",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

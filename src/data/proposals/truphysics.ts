import mr109RobotArm from "../../assets/thumbnails/projects/MR109 Compact/MR109 Robot Arm.thumb.webp";
import mr110RobotStation from "../../assets/thumbnails/projects/cim/MR110 Robot Station Statndalone.thumb.webp";
import robotScriptEditor from "../../assets/thumbnails/projects/cim/Inter02.thumb.webp";
import pidGraph from "../../assets/thumbnails/projects/PID/graph photo.thumb.webp";
import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import { caseStudyUrl, portfolioUrl } from "./index";
import type { Proposal } from "./types";

// Source: LinkedIn post "IT Gaming Engineer - Robotik (m/w/d)" (TruPhysics GmbH, Stuttgart,
// posted ~2026-10-08, full-time, entry level, 36,000-72,000 EUR/year listed). The post asks for no
// specific documents, so the answers follow its "Qualifikation" and "Benefits" points in order.

const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";

const proposal: Proposal = {
  slug: "truphysics",
  client: "TruPhysics GmbH",
  projectName: "IT Gaming Engineer – Robotik (m/w/d)",
  dateLabel: "October 2026",
  greeting: "Guten Tag,",
  eyebrow: "Application · TruPhysics · IT Gaming Engineer – Robotik",
  headline: "A Unity engineer who already uses the game engine for machines, not games",
  lead: [
    "Your post says it plainly: no video games, the game engine is used to build robotics systems. That is how I have used Unity since 2023. At BEDO I build Unity simulations of industrial training stations: a 6-joint robot arm with forward and inverse kinematics and joint limits, a G-code-style robot program interpreter, and sensor, actuator and PLC-style process logic across multi-station automation lines.",
    "What I have not done yet is ROS or work on a real robot controller in production, and I say so below rather than stretch it. This page answers each point from your post, lists my experience with dates and my own role, and shows how I would approach the work.",
  ],
  quickFacts: [
    { label: "Core stack", value: "Unity · C# (production since Dec 2023)" },
    { label: "Start", value: "1 month notice period" },
    { label: "Salary", value: "[[TODO: salary/rate expectation]]" },
    { label: "Location", value: "Egypt · 1 h ahead of Germany" },
  ],
  answers: [
    {
      title: "Education",
      original: "Studium, Ausbildung in Informatik, Robotik (Selbstlerner auch erwünscht!)",
      body: [
        "[[TODO: confirm the education line to use — profile.ts lists B.Sc. Computer Science Engineering and Technology, German University in Cairo, 2014–2019]]",
        "Robotics itself I learned on the job: the robot arm kinematics, the robot program interpreter and the automation-station logic below were all built in production at BEDO.",
      ],
    },
    {
      title: "C#",
      original: "Kenntnisse in C# erforderlich",
      body: [
        "C# is my daily language. Every project on this page is C# in Unity: simulation and state logic, interpreters, UI, networking (Photon) and backend integration (PlayFab), with ScriptableObject-based architecture and dependency injection at BEDO.",
      ],
    },
    {
      title: "Unity, Python, Linux and ROS",
      original: "Erfahrung mit Unity, Python, Linux und ROS bevorzugt",
      body: [
        "Unity: done in production continuously since December 2023, including Unity 6 (Ivris app; migrating BEDO projects to Unity 6 since mid-2026), WebGL, Android, Meta Quest 2 and AR.",
        "Python, Linux and ROS: not part of my production work so far. See the note below for how I would close that gap.",
      ],
    },
    {
      title: "Interest in robotics and automation, hands-on",
      original: "Interesse an Robotik und Automatisierungstechnologien, Hands-On-Mentalität",
      body: [
        "Automation is the core of what I build: conveyors, pneumatic cylinders, grippers and suction handling, stepper and DC motors, around ten sensor types (light barrier, inductive, capacitive, encoder, laser distance, colour…), and the ready / running / stop / emergency states that tie them together. On the robot side: 6-joint forward and inverse kinematics with X/Y/Z target control, joint limits, manual jogging, and an automatic mode that runs robot programs with conditions, jumps, calls and dwell commands.",
      ],
    },
    {
      title: "Remote work and start date",
      original: "Hohe Flexibilität: Remote Work und freie Arbeitszeiteinteilung",
      body: [
        "I am based in Egypt, one hour ahead of Germany, and would work fully remote. Your post does not say whether remote work from outside Germany is possible, so I have listed that as the first question at the end.",
        "I have a one-month notice period at my current job and would start full-time one month after an offer. If useful, I can already give about 15 hours per week during that notice month for onboarding.",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on ROS, Python, Linux, real controllers and German",
    body: "I have not used ROS, Python or Linux in production, and my controller work so far is simulation: robot and station behaviour driven by PLC-style logic for training, not software running on or commanding a real robot cell. I would start on ROS 2 on Linux right away, including the Unity side of a ROS bridge, and expect to need your team's guidance on your controllers and hardware interfaces in the first months. [[TODO: any Python / Linux use outside production worth naming, or confirm none]] German: [[TODO: Amr's German level]]. I am also outside Germany, so the remote setup is something to clarify first. I prefer you know all of this now rather than discover it later.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity / WebGL training simulations of BEDO engineering trainers: MR109 / MR110 mechatronics and industrial stations, PID control labs, EV117 fuel-cell lab, fluid-mechanics labs.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "ScriptableObject architecture", "Dependency injection"],
      responsibility:
        "My Unity implementation of the station behaviour: motion, sensor and actuator simulation, PLC-style process states, robot arm kinematics, the robot program interpreter and visual script editor, measurement UI and WebGL builds. Worked with instructional-design, art and mechatronics teams; the hardware and products belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "PID labs case study", href: caseStudyUrl("pid-control-virtual-labs-suite") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "WebGL", "AR Foundation", "AR Foundation Remote 2", "Photon", "PlayFab"],
      responsibility:
        "Built the Unity app (not the whole product): runtime loading of 3D models, Photon multiplayer room editing in WebGL, AR preview, PlayFab and backend integration.",
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
      tech: ["Unity", "C#", "Meta Quest 2", "Auto Hand", "Android"],
      responsibility:
        "Everything: interaction flows, physics-based tool interactions (hand-held calculator and stopwatch, objects dropped into liquid), scenes and headset builds.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
  ],
  evidence: [
    {
      label: "Closest match: robot in a game engine",
      title: "Robot arm station with FK / IK",
      image: mr110RobotStation,
      meta: "6 joints · FK / IK · joint limits",
      copy:
        "Robot arm simulated in Unity with forward kinematics, inverse kinematics through X/Y/Z target control, joint limits and direct manual motion control.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Robot programs",
      title: "Robot program interpreter and visual script editor",
      image: robotScriptEditor,
      meta: "G-code-style · Run / Pause / Stop",
      copy:
        "Automatic mode runs robot programs with conditions, jumps, calls, dwell commands and output writes; a visual editor lets students build, validate and load programs without typing every line.",
      links: [{ label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") }],
    },
    {
      label: "Automation lines",
      title: "MR109 / MR110 multi-station simulation",
      image: mr109RobotArm,
      meta: "Sensors · actuators · PLC-style states",
      copy:
        "Loading, transport, measuring, sorting, assembly, robot and storage stations driven by sensor events and ready / running / stop / emergency logic, in a digital twin connected to TIA Portal for training.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Simulation models",
      title: "PID virtual labs",
      image: pidGraph,
      meta: "Control loops · live response graphs",
      copy:
        "Pressure, temperature, speed, DC-motor, level and flow loops whose process response reacts to tuning and disturbances, plotted live.",
      links: [{ label: "Case study", href: caseStudyUrl("pid-control-virtual-labs-suite") }],
    },
    {
      label: "Networking and runtime data",
      title: "Ivris WebGL editor",
      image: ivrisApp,
      meta: "Photon · runtime 3D loading",
      copy: "Production Unity app with real-time multiplayer state sync and 3D models loaded at runtime.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Aufgaben",
      items: [
        {
          need: "Use a game engine to build robotics systems, not video games",
          status: "direct",
          proof: "Unity used for industrial training stations and a simulated robot arm since Oct 2024 at BEDO.",
        },
        {
          need: "Develop and optimise robot systems and robot OS",
          status: "adjacent",
          proof: "Robot arm kinematics, joint limits and a robot program interpreter in Unity, as simulation; no robot OS or physical robot work yet.",
        },
        {
          need: "Connect to existing controllers and hardware interfaces",
          status: "adjacent",
          proof: "PLC-style I/O and station states in a TIA Portal-connected training digital twin; no production integration with robot controllers or fieldbus hardware.",
        },
        {
          need: "Implement and test simulation models for robotics applications",
          status: "direct",
          proof: "Sensor, actuator, conveyor, pneumatic and robot-arm models for MR109 / MR110; process models in the PID labs.",
        },
        {
          need: "Software for autonomous behaviour, in a team of hardware and IT specialists",
          status: "adjacent",
          proof: "Automatic sequences driven by sensor events and program logic; built with mechatronics, instructional-design and art teams at BEDO.",
        },
      ],
    },
    {
      title: "Qualifikation",
      items: [
        {
          need: "Degree or training in computer science or robotics (self-taught welcome)",
          status: "direct",
          proof: "[[TODO: confirm education line]]; robotics skills learned in production.",
        },
        { need: "C# (required)", status: "direct", proof: "Daily language in every project since Dec 2023." },
        { need: "Unity", status: "direct", proof: "Production since Dec 2023, including Unity 6, WebGL, Android, Quest 2 and AR." },
        {
          need: "Python",
          status: "commitment",
          proof: "Not used in production; I would pick it up for tooling and ROS nodes as needed.",
        },
        {
          need: "Linux",
          status: "commitment",
          proof: "Not my daily environment so far; I would set up the ROS 2 / Linux workflow from the first week.",
        },
        {
          need: "ROS",
          status: "commitment",
          proof: "No ROS experience yet; ROS 2 plus the Unity side of a ROS bridge would be my first learning goal.",
        },
        {
          need: "Interest in robotics and automation, hands-on mindset",
          status: "direct",
          proof: "Robot kinematics, robot program interpreter and automation-line logic built hands-on.",
        },
      ],
    },
    {
      title: "Working setup",
      items: [
        {
          need: "Remote work and flexible hours",
          status: "partial",
          proof: "Fully remote from Egypt (1 h ahead of Germany); whether remote from outside Germany works for you is my first question.",
        },
        {
          need: "Team and posting language (German)",
          status: "partial",
          proof: "[[TODO: Amr's German level]]",
        },
      ],
    },
  ],
  approach: {
    title: "How I would approach the first months",
    intro:
      "To be validated against your robots, controllers and existing codebase, but this is how I would work into the role:",
    steps: [
      {
        title: "Learn your stack on your terms",
        body: "First weeks: your Unity project and conventions, ROS 2 on Linux, and how your controllers and hardware interfaces are exposed. I would ask for one small, real task early so I learn on your system, not on tutorials.",
      },
      {
        title: "Behaviour as explicit states",
        body: "Robot and cell behaviour written as clear state machines with checked transitions, safe stops and recoverable faults — the same backbone as my station simulations, where ready / running / stop / emergency drive every module.",
      },
      {
        title: "One interface for simulation and hardware",
        body: "The Unity side talks to a thin controller interface that can be backed either by a simulated controller or by the real one. Behaviour can then be developed and tested in simulation and switched to hardware without rewriting it.",
      },
      {
        title: "Prove the logic before building it",
        body: "Where behaviour or a simulation model has to be agreed with the hardware team, I first build a small HTML prototype with 2D vector graphics. Every changing value is driven by its real equation, shown next to it, so engineers can verify the behaviour and see nothing is hard-coded, before time goes into the Unity implementation.",
      },
      {
        title: "Test against the real thing",
        body: "Simulation models are only useful if they match the hardware, so I would compare them with recorded behaviour from your systems and keep tests for each model.",
      },
    ],
    note: "Exact robot behaviour, interfaces, limits and safety rules come from your hardware specialists and documentation.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Optional part-time start",
      body: "About 15 hours per week if useful: access to the repository, ROS 2 / Linux setup, reading the codebase.",
    },
    {
      when: "Month 1 full-time",
      title: "Onboarding",
      body: "Your Unity project, robots and controller interfaces; a first small task delivered end to end.",
    },
    {
      when: "Months 2–3",
      title: "First owned module",
      body: "A simulation model or behaviour module tested in simulation and, with your team, against the hardware.",
    },
    {
      when: "After",
      title: "Full contribution",
      body: "Robot behaviour, controller connections and simulation models as a regular member of the team.",
    },
  ],
  questions: [
    "Is fully remote work from Egypt possible for this role, and if so as an employee (for example through an employer-of-record) or as a contractor?",
    "Is Unity used only for simulation, or does the Unity application also run on the real systems and command the robots?",
    "Which ROS version do you use, and how does Unity connect to it today?",
    "Which controllers and hardware interfaces would I connect to first (PLCs, robot controllers, fieldbus, OPC UA…)?",
    "Does the team work in German, English or both?",
    "What would a good first task in the first month look like?",
  ],
  closing: {
    title: "Next step",
    body: "Your post says you prefer to talk quickly and directly — so do I. I would gladly walk you through the robot arm and station simulations in a short call.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity simulation engineer",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

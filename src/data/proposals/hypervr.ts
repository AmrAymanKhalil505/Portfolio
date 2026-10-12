import nescafeSurfing from "../../assets/thumbnails/projects/Nescafe/Nescafe Sand surfing.thumb.webp";
import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import mr109RobotArm from "../../assets/thumbnails/projects/MR109 Compact/MR109 Robot Arm.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: InGame Job post "Senior Unity Developer" (HyperVR Games, Remote, Full time, Senior,
// Negotiable, posted 2026-09-08): https://ingamejob.com/en/job/senior-unity-developer-247
// The post asks for no specific items beyond the application form (message + resume), so the
// answers below cover the points a hiring lead will check first, in the post's own order.

const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const atmoVideo = "https://youtu.be/eWFaHaYUy44";
const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";

const proposal: Proposal = {
  slug: "hypervr",
  client: "HyperVR Games",
  projectName: "Senior VR Unity Developer",
  dateLabel: "October 2026",
  greeting: "Hello HyperVR team,",
  eyebrow: "Application · HyperVR Games · Senior Unity Developer (VR)",
  headline: "Unity VR developer for hands-on, physical VR gameplay on Quest",
  lead: [
    "Your games live on hands touching objects: shaving, stocking shelves, handling things that should feel right in the hand. The closest match in my work is the Meta Quest 2 training suite I built as the sole developer at Tanta University, where learners pick up and use a working calculator and stopwatch, drop objects into liquid and follow interactive steps, built with Auto Hand, one of the frameworks you list.",
    "Alongside that I built a short-session VR booth game with a timed score loop, a mobile educational game, and production Unity apps with performance-constrained targets (Quest standalone, WebGL). Below: my experience with dates and my own role, how I match each line of your post, and how I would start on your team.",
  ],
  quickFacts: [
    { label: "Role", value: "Full-time, remote" },
    { label: "Start", value: "1 month after offer (notice period)" },
    { label: "Test headset", value: "Meta Quest 2 (own)" },
    { label: "Time zone", value: "Egypt · 1 h ahead of CET, same as Latvia" },
  ],
  answers: [
    {
      title: "Experience, with dates",
      original: "5+ years of experience in game development; Solid C# + Unity development background",
      body: [
        "Professional Unity / C# development continuously since December 2023. Dedicated VR: Meta Quest 2 training suite at Tanta University (Dec 2023 – Oct 2024, sole developer, Auto Hand) and a one-week VR booth game for Nescafe (2025). Since Oct 2024: Senior Unity Engineer at BEDO, building interactive simulations of real engineering equipment. Jun 2024 – Jun 2026: Unity and AR developer for Ivris (freelance), Unity 6. That is less than the five years you ask for; see the note below.",
      ],
    },
    {
      title: "Shipped Unity work",
      original: "Experience shipping Unity-based titles",
      body: [
        "Shipped to real users: the Quest 2 training suite (three experiences), the Nescafe VR booth game used by event visitors, the Ivris production app (WebGL editor plus Android / iOS AR) and BEDO's training labs delivered as Unity WebGL. Each one links to a video and a case study below that states what I built versus the wider team.",
      ],
    },
    {
      title: "Gameplay systems, shaders and optimisation",
      original: "Hands-on experience with gameplay systems, shaders, and optimization",
      body: [
        "Gameplay and interaction systems: VR grab-and-use tools, timed score and collectible loops, step and state logic, upgrade mechanics in a mobile game. Optimisation: Quest 2 standalone builds and Unity WebGL, both tight on memory and frame time. Shaders: I can show visual-explanation work such as particle views of hidden processes, but not hand-written HLSL shaders; that is a gap I name openly below.",
      ],
    },
    {
      title: "English",
      original: "English (for daily communication & documentation)",
      body: [
        "Yes. My portfolio, case studies and project documentation are written in English, and I write build instructions for the code I hand over.",
      ],
    },
    {
      title: "Salary and start date",
      original: "Negotiable · Full time",
      body: [
        "Salary expectation: [[TODO: salary expectation for a full-time remote role]].",
        "I am currently employed with a one-month notice period. When you make an offer I give notice and start full-time one month later. During the notice month I can already work part-time, about 15 hours per week, on onboarding and a first small feature. Full-time hours after the notice month: [[TODO: confirm 40 h/week full-time availability for an employment role]].",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on the 5+ years and the stack",
    body: "You ask for 5+ years in game development. My professional Unity work started in December 2023, so it is close to three years, and my dedicated VR work is about 11 months at Tanta University plus a one-week VR booth game. Most of my work is training simulations rather than commercial games, and none of the titles I list is a commercial release on the Meta Store, Pico or Steam. I have not used the XR Interaction Toolkit in production (my VR interactions use Auto Hand), and custom HLSL shader authoring is not part of the work I can show. What I bring: hands-on VR interaction work on Quest 2, a habit of building reusable systems, and interaction design for first-time users. I prefer you know this now rather than discover it in the dates.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Interactive training simulations of BEDO engineering trainers: EV117 fuel-cell vehicle lab, MR109 / MR110 mechatronics and industrial stations, PID control labs, fluid-mechanics labs.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "ScriptableObject architecture", "Dependency injection"],
      responsibility:
        "Simulation logic and equipment states, guided steps, interactive UI and feedback, visual explanations of hidden processes, WebGL builds. Worked with instructional-design, art and mechatronics teams; the hardware and product belong to BEDO.",
      links: [
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview. I built the Unity app, not the whole product.",
      tech: ["Unity 6", "C#", "WebGL", "AR Foundation", "AR Foundation Remote 2", "Photon", "PlayFab"],
      responsibility:
        "Runtime loading of 3D furniture and room models, Photon multiplayer room editing in WebGL, AR preview, PlayFab and backend integration.",
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
        "Everything: VR interaction flows, scenes, grab and tool interactions (working calculator and stopwatch held in hand, objects placed into liquid), onboarding for first-time headset users, adapting 3D assets, headset builds.",
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
      label: "Closest match: hands-on VR",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Quest 2 · Auto Hand · sole developer",
      copy:
        "Physical interactions in the hand: a working calculator and stopwatch, objects dropped into liquid, and an onboarding tutorial that teaches first-time users the headset and controls.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
    {
      label: "VR game loop",
      title: "Nescafe VR surfing booth",
      image: nescafeSurfing,
      meta: "VR · timed score loop · collectibles",
      copy: "Short-session VR game with collectibles, a timer and scoring, designed so first-time visitors understand it in seconds.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "Casual gameplay systems",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Mobile game · collection loop · upgrades",
      copy:
        "Educational mobile game for children: airplane movement, pollution collection, an atmosphere-health system and environmental upgrades in one casual gameplay loop.",
      links: [
        { label: "Video", href: atmoVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "Reusable systems",
      title: "MR109 / MR110 industrial training",
      image: mr109RobotArm,
      meta: "Shared state logic across stations",
      copy:
        "Many stations driven by the same ready / running / done / emergency state backbone (ScriptableObject architecture), the kind of reusable module structure you want across future VR projects.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Runtime content and performance",
      title: "Ivris WebGL room editor",
      image: ivrisApp,
      meta: "Unity 6 · Photon · runtime 3D loading",
      copy: "Production Unity app with real-time multiplayer editing and 3D models loaded at runtime on a memory-constrained WebGL target.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Responsibilities",
      items: [
        {
          need: "Architect, implement and optimise gameplay systems in Unity / C#",
          status: "direct",
          proof: "VR tool interactions (Tanta), timed score loop (Nescafe), collection and upgrade systems (Atmosphere Protector), state systems (BEDO).",
        },
        {
          need: "Rapidly prototype features and run internal playtests",
          status: "adjacent",
          proof: "I prototype system logic before full Unity builds and tested VR flows with first-time users at Tanta and the Nescafe booth; not in a game studio's playtest cycle yet.",
        },
        {
          need: "Develop reusable modules for future VR projects",
          status: "direct",
          proof: "Reusable VR patterns at Tanta (guided instruction, handheld tools, 360 viewpoint switching); one state backbone reused across BEDO stations, built with ScriptableObject architecture.",
        },
        {
          need: "Integrate VR frameworks (e.g. XR Interaction Toolkit)",
          status: "adjacent",
          proof: "Auto Hand integrated end-to-end on Quest 2 (Tanta). XR Interaction Toolkit not yet used in production; AR built on Unity's XR stack with AR Foundation (Ivris).",
        },
        {
          need: "Debug, profile and improve performance and stability",
          status: "direct",
          proof: "Quest 2 standalone builds (Tanta); Unity WebGL performance and memory work (BEDO, Ivris).",
        },
        {
          need: "Design brainstorms, controls and mechanics with top-tier UX",
          status: "direct",
          proof: "Interaction design for first-time VR users (Tanta onboarding, Nescafe booth); worked with instructional-design and art teams at BEDO.",
        },
        {
          need: "Proactive technical and process improvements",
          status: "direct",
          proof: "My own prototype-first step, so design and development agree on systems before Unity time; migrating BEDO projects to Unity 6 since mid-2026.",
        },
      ],
    },
    {
      title: "Requirements",
      items: [
        {
          need: "5+ years of experience in game development",
          status: "partial",
          proof: "Professional Unity since Dec 2023 (close to 3 years), about 11 months dedicated VR plus a one-week VR booth; see the note above.",
        },
        {
          need: "Solid C# + Unity background",
          status: "direct",
          proof: "All projects above are Unity / C#, including Unity 6 in production (Ivris, BEDO migration).",
        },
        {
          need: "Experience shipping Unity-based titles",
          status: "partial",
          proof: "Shipped Quest 2, booth, WebGL and mobile AR apps to real users; no commercial store release on Meta, Pico or Steam.",
        },
        {
          need: "Gameplay systems, shaders and optimisation",
          status: "partial",
          proof: "Gameplay systems and optimisation: yes (above). Shaders: visual-explanation effects only, no hand-written HLSL to show.",
        },
        {
          need: "Problem-solving, self-driven, works independently",
          status: "direct",
          proof: "Sole developer of the Tanta Quest 2 suite, from requirements to headset builds.",
        },
        {
          need: "User experience and interaction design",
          status: "direct",
          proof: "VR onboarding for first-time headset users; hand-held tool interactions; visitor-friendly booth flow.",
        },
        {
          need: "English for daily communication and documentation",
          status: "direct",
          proof: "Portfolio, case studies and documentation in English.",
        },
      ],
    },
    {
      title: "Nice to have",
      items: [
        {
          need: "Unity VR frameworks (XR Interaction Toolkit, AutoHands)",
          status: "direct",
          proof: "Auto Hand in production on Quest 2 (Tanta, including finger interaction). XR Interaction Toolkit: related experience only.",
        },
        {
          need: "Shader development (HLSL)",
          status: "partial",
          proof: "Not part of the work I can show; I would ramp up on your existing shaders first.",
        },
        {
          need: "Animation tools (DoTween / PrimeTween)",
          status: "partial",
          proof: "[[TODO: confirm whether you have used DOTween or PrimeTween in production]].",
        },
        {
          need: "Meta Horizon SDK or remote config systems",
          status: "adjacent",
          proof: "Quest 2 builds at Tanta; PlayFab backend integration at Ivris. Meta Horizon platform features are not part of my listed work.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would start on your team",
    intro:
      "To be shaped with your leads and your existing codebase, but this is how I would make myself useful in the first months:",
    steps: [
      {
        title: "Learn the hand-feel first",
        body: "Play your released titles on Quest, then read how grabbing, tool use and object physics are built in your code. In casual simulators the feel of the hands is the product, so I would match your existing interaction conventions before adding anything new.",
      },
      {
        title: "Ship one small feature end to end",
        body: "Take a contained task (a new tool, item or interaction in a live title), take it through prototype, internal playtest and a Quest build, and profile it on device so it fits your frame budget on standalone headsets.",
      },
      {
        title: "Prototype the rules before the polish",
        body: "For systems driven by numbers, such as prices, customer satisfaction or progression, I build a quick HTML prototype with 2D vector graphics first. Every changing value is driven by its formula, shown next to it, so designers can tune and confirm the behaviour before Unity time is spent. Feel-driven mechanics I prototype directly in the headset.",
      },
      {
        title: "Turn repeated work into modules",
        body: "Spot what your projects repeat (grabbable tools, shop and inventory logic, onboarding, settings, comfort options) and extract it into reusable, documented modules with clear configuration, the way one state backbone serves many BEDO stations.",
      },
      {
        title: "Framework integration, carefully",
        body: "Where you use the XR Interaction Toolkit alongside Auto Hand, I would start with a small integration spike on Quest and agree the approach with your team before it touches a live title, since XRI is new to me in production.",
      },
    ],
    note: "Pico and Steam builds, your profiling targets and your remote-config setup come from your team; I would test on my own Quest 2 and on your devices for the other platforms.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Part-time start",
      body: "About 15 hours per week: repository and tools onboarding, playing your titles on Quest, a first small task to learn the codebase.",
    },
    {
      when: "Month 1",
      title: "Full-time, first feature",
      body: "One contained gameplay feature through prototype, internal playtest and Quest build, profiled on device.",
    },
    {
      when: "Months 2–3",
      title: "Reusable modules",
      body: "First reusable module agreed with the team and documented; framework integration work (XRI / Auto Hand) where your projects need it.",
    },
    {
      when: "Ongoing",
      title: "Product work",
      body: "Gameplay systems for current and future titles, performance and stability work, ideas in design brainstorms.",
    },
  ],
  questions: [
    "Which interaction stack do your current titles use: Auto Hand, the XR Interaction Toolkit, your own, or a mix? Is the plan to move new projects to one of them?",
    "Which project would this role start on: live updates to Shave & Stuff or Shop & Stuff, Pets & Stuff in early access, or a new title?",
    "What are your performance targets on Quest and Pico standalone, and which profiling tools does the team rely on?",
    "How do internal playtests work today: who plays, how often, and how is feedback turned into tasks?",
    "Is the role an employment contract under Latvian law, or open to a remote contractor based in Egypt?",
    "How big is the Unity team, and how are code reviews and shared modules organised?",
  ],
  closing: {
    title: "Next step",
    body: "I would be glad to walk you through the Quest demos in a short call and talk about how your games handle hand interactions.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity VR / gameplay developer",
    location: "Egypt (remote)",
    links: [
      { label: "Portfolio", href: portfolioUrl },
      { label: "Resume (PDF)", href: "https://amraymankhalil505.github.io/Portfolio/Amr_Khalil_CV_work.pdf" },
    ],
  },
};

export default proposal;

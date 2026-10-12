import ivrisRoomEditor from "../../assets/thumbnails/projects/Ivris/Screenshot2025-04-01at8.36.11PM.thumb.webp";
import ivrisDollhouse from "../../assets/thumbnails/projects/Ivris/Screenshot_2025-04-01_at_8.38.02_PM.thumb.webp";
import ivrisArPreview from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import ev117Monitoring from "../../assets/thumbnails/projects/EduLab/EV117 save screen.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: Twine project "Game Developer" by Mat R Plot R (Visakhapatnam, India; posted ~2026-10-10).
// The post is short: it lists deliverables (apartment walkthroughs, shareable browser tours,
// Meta Quest VR, mobile AR, desktop), an MVP reusable across properties, junior level,
// hybrid in Visakhapatnam with travel applicants welcome, budget "receive offers".
// It does not list items applicants must include, so the answers cover what the post states.

const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const ivrisVisualizationVideo = "https://youtu.be/RSsFnyzbDvA";

const proposal: Proposal = {
  slug: "matrplotr",
  client: "Mat R Plot R",
  projectName: "VR / AR real estate visualization MVP",
  dateLabel: "October 2026",
  greeting: "Hello,",
  eyebrow: "Application · Mat R Plot R · VR / AR developer for the MVP",
  headline: "One Unity codebase for your apartment tours: browser, Meta Quest, mobile AR and desktop",
  lead: [
    "Your MVP is close to work I have shipped. From June 2024 to June 2026 I built the Unity app for Ivris, an interior-design product: room and furniture models loaded at runtime instead of baked into the build, a browser (WebGL) room editor with tour, floor-plan and dollhouse views, real-time multiplayer editing, and Android / iOS AR preview. The product belongs to Ivris; the Unity application was my work.",
    "Before that I was the sole Unity developer of a Meta Quest 2 training suite at Tanta University. Below I answer the points in your post, show the closest evidence, and describe how I would structure the MVP so each new property is content, not new code.",
  ],
  quickFacts: [
    { label: "Offer", value: "[[TODO: rate / project price]]" },
    { label: "Start", value: "1 month after award (part-time from day one)" },
    { label: "Test headset", value: "Meta Quest 2 (own)" },
    { label: "Location", value: "Egypt · remote" },
  ],
  answers: [
    {
      title: "Experience building this kind of product",
      original: "Interactive apartment walkthroughs, browser-based tours, Meta Quest VR, mobile AR, desktop",
      body: [
        "Professional Unity development continuously since December 2023. Interior visualization across browser and mobile AR: Ivris (Jun 2024 to Jun 2026, freelance, Unity app developer). Dedicated VR on Meta Quest 2: Tanta University (Dec 2023 to Oct 2024, sole developer) plus a one-week VR booth game for Nescafe (2025). Since Oct 2024 I am Senior Unity Engineer at BEDO, building interactive 3D simulations delivered as Unity WebGL.",
        "The table below lists each project with dates, technologies and what I personally built.",
      ],
    },
    {
      title: "Scalable and reusable across properties",
      original: "An MVP that is scalable and reusable across multiple properties",
      body: [
        "This is the main design decision, and I have built it before: at Ivris, room and furniture content was loaded at runtime so new content did not require a new app build. For your MVP I would treat each property as a content package (models, floor plan, hotspots, unit data) that one shared viewer loads on every platform.",
      ],
    },
    {
      title: "Budget",
      original: "Receive offers",
      body: [
        "[[TODO: rate / project price, hourly or fixed per milestone]]. I am happy to split the MVP into milestones with a price per milestone once we agree the scope in a first call.",
      ],
    },
    {
      title: "Location: hybrid in Visakhapatnam",
      original: "Hybrid, Visakhapatnam, India; applicants who need to travel are welcome",
      body: [
        "I am based in Egypt and would work remotely, with regular demo builds and calls. India is about 2.5 to 3.5 hours ahead of Egypt depending on the season, so there is a good daily overlap. [[TODO: whether Amr can travel to Visakhapatnam for on-site sessions, and on what terms]]",
      ],
    },
    {
      title: "Availability and start date",
      body: [
        "I have a one-month notice period at my current job. After award I give notice and start full engagement one month later. During the notice month I already work part-time, about 15 hours per week (around 60 hours that month), which covers the scoping and prototype phase.",
        "After that: 30 hours per week (around 120 to 130 hours per month), and up to 40 hours per week in busy phases.",
      ],
    },
    {
      title: "Ongoing work after the MVP",
      original: "Potential follow-up work",
      body: [
        "Yes. During an agreed warranty period I fix defects in code I wrote at no extra charge; new features, new properties and scope changes are billed separately. I would like the boundaries (defect versus change, response times) agreed in writing before we start.",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on fit",
    body: "Three things you should know up front. First, your post says hybrid in Visakhapatnam; I am in Egypt and would deliver remotely. Second, my browser work is Unity WebGL apps (the Ivris room editor and BEDO's simulations); I have not yet shipped a real estate tour with per-property shareable links, so that part is a direct extension of past work rather than a repeat of it. Third, my dedicated VR work is about 11 months on Meta Quest 2 plus a one-week VR booth project. Interior visualization, runtime 3D loading, mobile AR and WebGL are where most of my experience sits, and they are the core of your MVP.",
  },
  experience: [
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context:
        "Cross-platform interior-design app: browser (WebGL) room editor with tour, floor-plan and dollhouse views, plus Android / iOS AR furniture preview.",
      tech: ["Unity 6", "C#", "WebGL", "AR Foundation", "AR Foundation Remote 2", "Photon", "PlayFab"],
      responsibility:
        "I built the Unity app, not the whole product: runtime loading of 3D furniture and room models, Photon multiplayer room editing in WebGL, AR preview, PlayFab and backend integration. The product and service belong to Ivris.",
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
        "Everything: VR interaction flows, scenes, grab and tool interactions, onboarding for first-time headset users, adapting 3D assets, headset builds.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Interactive 3D training simulations of BEDO engineering trainers (fuel-cell, mechatronics, PID and fluid labs), delivered as Unity WebGL.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "ScriptableObject architecture"],
      responsibility:
        "My Unity implementation of the simulations: interaction logic, guided steps, information UI, WebGL builds and browser performance. The hardware and products belong to BEDO.",
      links: [
        { label: "Education labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
        { label: "Industrial training case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth (freelance)",
      context: "Short-session branded VR game for an event booth.",
      tech: ["Unity", "C#", "VR"],
      responsibility: "Unity developer: gameplay loop, timed scoring and onboarding first-time visitors understand in seconds.",
      links: [{ label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") }],
    },
  ],
  evidence: [
    {
      label: "Closest match: walkthrough views",
      title: "Ivris tour, floor-plan and dollhouse views",
      image: ivrisDollhouse,
      meta: "Unity WebGL · spatial review modes",
      copy:
        "Dollhouse overview of a full room layout with placed furniture, alongside first-person tour and floor-plan modes: the same set of views an apartment tour needs.",
      links: [
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
        { label: "Video", href: ivrisVisualizationVideo },
      ],
    },
    {
      label: "Reusable across properties",
      title: "Runtime 3D content in the browser",
      image: ivrisRoomEditor,
      meta: "WebGL · runtime model loading · Photon",
      copy:
        "Room editor that loads furniture and room models at runtime from a searchable catalog, with real-time multiplayer editing. New content did not need a new build.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Mobile AR",
      title: "Ivris AR furniture preview",
      image: ivrisArPreview,
      meta: "Android / iOS · AR Foundation",
      copy: "Furniture placed in a real room with move, rotate and scale controls, built with AR Foundation in Unity 6.",
      links: [{ label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") }],
    },
    {
      label: "Meta Quest VR",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Quest 2 · Auto Hand · sole developer",
      copy:
        "Standalone Quest 2 app with an onboarding tutorial for first-time headset users, hand interactions and a 360° viewer. First-time users are exactly who will try an apartment tour at a sales office.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
    {
      label: "Information on top of 3D",
      title: "BEDO WebGL simulations",
      image: ev117Monitoring,
      meta: "Unity WebGL · guided UI",
      copy:
        "Browser-delivered 3D labs with guided steps and information panels over the model, the same pattern as unit details and hotspots inside a tour.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
  ],
  requirementGroups: [
    {
      title: "Deliverables in your post",
      items: [
        {
          need: "Interactive apartment walkthroughs",
          status: "adjacent",
          proof: "Ivris interior app with first-person tour, floor-plan and dollhouse views of furnished rooms; built for interior design rather than property sales.",
        },
        {
          need: "Browser-based tours with shareable links",
          status: "partial",
          proof: "Unity WebGL in production (Ivris editor, BEDO labs). A per-property link that opens straight into a tour is new; I would build it as part of the MVP.",
        },
        {
          need: "Meta Quest VR experience",
          status: "direct",
          proof: "Standalone Quest 2 app at Tanta University (sole developer); own Quest 2 for testing.",
        },
        {
          need: "Mobile AR",
          status: "direct",
          proof: "Android / iOS AR preview at Ivris with AR Foundation and AR Foundation Remote 2.",
        },
        {
          need: "Desktop compatibility",
          status: "adjacent",
          proof: "Mouse and keyboard interaction in all my WebGL work; a standalone desktop build comes from the same Unity project.",
        },
      ],
    },
    {
      title: "Product requirements",
      items: [
        {
          need: "MVP that is scalable and reusable across multiple properties",
          status: "direct",
          proof: "Runtime 3D content loading at Ivris, so new rooms and furniture did not require a new build.",
        },
        {
          need: "One product across several devices",
          status: "direct",
          proof: "Ivris shipped one Unity app to WebGL, Android and iOS.",
        },
        {
          need: "Performance on browser, phone and headset",
          status: "direct",
          proof: "WebGL optimisation at BEDO and Ivris; Quest 2 standalone builds at Tanta.",
        },
        {
          need: "Source code and documentation handed over",
          status: "commitment",
          proof: "Full source, a README per module and build steps for each platform at every milestone.",
        },
      ],
    },
    {
      title: "Working terms",
      items: [
        {
          need: "Hybrid, based in Visakhapatnam",
          status: "partial",
          proof: "Remote from Egypt with regular builds and calls; see the note above.",
        },
        {
          need: "Potential ongoing work",
          status: "commitment",
          proof: "Available after the MVP; warranty on my code, new work billed separately.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would build the MVP",
    intro:
      "To be confirmed in the first call against your first property and target devices, but this is the structure I would propose:",
    steps: [
      {
        title: "A property is content, not code",
        body: "One shared Unity viewer. Each property is a package: 3D model, floor plan, rooms and hotspots, unit data and materials, loaded at runtime. Adding the second property should be content work, which is the point of an MVP that has to scale.",
      },
      {
        title: "Agree the tour on a prototype first",
        body: "Before Unity work I build an HTML prototype with 2D vector graphics. For a tour that means the clickable floor plan, room-to-room navigation, hotspots, information panels and the guided versus free-explore flow. You and your team agree the experience there, before Unity time is spent.",
      },
      {
        title: "Browser tour with a shareable link first",
        body: "The WebGL tour is the version every buyer can open, so it comes first: a link per property (and per unit if needed) that opens straight into the tour, with a lightweight version for phones.",
      },
      {
        title: "Same tour on Quest, phone AR and desktop",
        body: "Shared navigation and content logic with a thin interaction layer per device: teleport and hand / controller input on Quest, a tabletop scale model of the building in mobile AR, mouse and keyboard on desktop.",
      },
      {
        title: "Optimise per device",
        body: "Architectural models are often too heavy for a browser or a standalone headset. Baked lighting, reduced meshes and texture budgets per platform, checked on real devices including my own Quest 2.",
      },
    ],
    note: "Model sources (CAD, BIM, SketchUp or a 3D artist), visual quality targets and hosting for the shared links need to be agreed early; they drive most of the effort.",
  },
  timeline: [
    {
      when: "Notice month",
      title: "Scope and prototype (part-time)",
      body: "About 15 hours per week: agree the tour flow on the HTML / 2D prototype, review your first property's 3D data, set up the shared Unity project and the content format.",
    },
    {
      when: "Milestone 1",
      title: "Browser tour",
      body: "WebGL walkthrough of the first property with floor plan, hotspots and a shareable link; reviewed with you before moving on.",
    },
    {
      when: "Milestone 2",
      title: "Quest VR and desktop",
      body: "The same property on Meta Quest and as a desktop build, tested on device.",
    },
    {
      when: "Milestone 3",
      title: "Mobile AR and second property",
      body: "AR scale-model view on Android / iOS, then a second property loaded through the same pipeline to prove the MVP is reusable.",
    },
    {
      when: "After the MVP",
      title: "Warranty and ongoing work",
      body: "Defects in my code fixed at no charge during the agreed warranty; new properties and features billed separately.",
    },
  ],
  questions: [
    "What 3D data do property developers usually give you: CAD / BIM, SketchUp, renders, or will a 3D artist build the models?",
    "Which platform matters most for the first sale: shareable browser links for buyers, or Quest VR at a sales office?",
    "Is the AR use case a tabletop model of the building, or a full-scale apartment placed on site?",
    "Should the tour show live unit data (availability, prices, finishes), and where would that data come from?",
    "Where should the shared tours be hosted, and do you need analytics on who opened which link?",
    "Do you have a first pilot property and a target date for showing the MVP?",
  ],
  closing: {
    title: "Next step",
    body: "Reply on Twine and I will walk you through the Ivris and Quest demos in a short call, then send a milestone plan for your first property.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity VR / AR developer",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

import ivrisDollhouse from "../../assets/thumbnails/projects/Ivris/Screenshot_2025-04-01_at_8.38.02_PM.thumb.webp";
import ivrisRoomEditor from "../../assets/thumbnails/projects/Ivris/Screenshot2025-04-01at8.36.11PM.thumb.webp";
import nescafeBeach from "../../assets/thumbnails/projects/Nescafe/Nescafe Water Beach.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: Freelancer.com post "Apartment VR Tour Creation" (project 40765327, posted 2026-10-13,
// client in Johannesburg, South Africa; budget $250-750 USD fixed, paid on delivery). Read through a
// summarising fetch, so the `original` lines are close paraphrases; re-check against the live post.
// The only thing the post asks bidders to include is a sample Quest build of similar work; the other
// answers cover the deliverables and acceptance criteria it states.

const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const ivrisVisualizationVideo = "https://youtu.be/RSsFnyzbDvA";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";

const proposal: Proposal = {
  slug: "apartment-vr-tour",
  client: "Apartment VR tour (Freelancer.com)",
  projectName: "Standalone Meta Quest apartment tour",
  dateLabel: "October 2026",
  greeting: "Hello,",
  eyebrow: "Application · Freelancer.com · Unity Meta Quest apartment tour",
  headline: "A standalone Meta Quest tour of your apartment, matched to your renders",
  lead: [
    "You want your apartment renders turned into a clean Quest tour: 6–8 fixed viewpoints, gaze-activated teleporting, no buttons or narration, nodes loading within three seconds, and a look that stays close to the renders. The closest work I have done is the Meta Quest 2 training suite at Tanta University (Dec 2023 – Oct 2024), where I was the sole Unity developer. It included a 360° viewer where users switch between fixed camera viewpoints inside the headset.",
    "From June 2024 to June 2026 I also built the Unity app for Ivris, an interior-design product with tour and dollhouse views of furnished rooms. Below I answer what your post asks for, show the closest evidence, and explain how I would build the tour so you approve the look on the first node before I do the rest.",
  ],
  quickFacts: [
    { label: "Price", value: "[[TODO: project price (budget $250-750 fixed)]]" },
    { label: "Delivery", value: "[[TODO: delivery time in days]]" },
    { label: "Test headset", value: "Meta Quest 2 (own)" },
    { label: "You receive", value: "Quest APK · Unity project · 1-page guide" },
  ],
  answers: [
    {
      title: "A sample of similar Quest work",
      original: "Share a sample Quest build demonstrating similar work, so performance and visual fidelity can be assessed",
      body: [
        "My Quest 2 work is shown as videos, with my own role per project: the Tanta University suite (onboarding for first-time headset users, a multi-angle 360° viewer with in-headset viewpoint switching, and a hand-interaction lab). Links are in the evidence section below.",
        "[[TODO: can Amr send a sample Quest APK he has the rights to share, or videos only?]]",
      ],
    },
    {
      title: "Deliverables",
      original: "Quest .apk for immediate installation, project source files (Unity, Unreal or equivalent), a one-page setup and use guide",
      body: [
        "All three. The tour is built in Unity (I work in Unity 6 in production). You receive the Quest APK, the full Unity project so it can be tweaked later, and a one-page guide covering installation, launching and moving between viewpoints.",
      ],
    },
    {
      title: "Acceptance criteria",
      original: "Installs and launches on Quest without sideloading complications; all 6–8 nodes load within three seconds; geometry, materials and lightmaps match the renders within reasonable mobile limits",
      body: [
        "Load time: I would keep the whole apartment in one optimised scene, so moving to another node is a short fade rather than a new load. I measure it on my own Quest 2 and report the numbers with each build.",
        "Look: you approve one finished node against your renders on the headset before I build the rest.",
        "Installation: a plain APK needs the headset in developer mode. If the people using it should not have to do that, a private release channel on the Meta Horizon Store under your developer account avoids it. I would like to agree the route with you at the start (see the questions below).",
      ],
    },
    {
      title: "Price and delivery",
      original: "Budget $250–750 USD, paid on delivery",
      body: [
        "[[TODO: project price (budget $250-750 fixed)]]. Delivery: [[TODO: delivery time in days]].",
        "I currently work full-time as a Unity engineer, so this project runs alongside that, with a build you can try on your headset at each milestone. Time zone: Egypt, the same as South Africa or one hour ahead depending on the season.",
      ],
    },
    {
      title: "After delivery",
      body: [
        "During an agreed warranty period I fix defects in code I wrote at no extra charge. New features and scope changes are billed separately. I would like the boundaries (defect versus change, response times) agreed in writing before we start.",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on fit",
    body: "Two things to know up front. First, I have not shipped an architectural VR tour that had to match offline renders with baked lightmaps. My closest work is the Quest 2 360° viewer with fixed viewpoints at Tanta University and the Ivris interior visualization app. That is why I build one node first and you approve the look against your renders before I do the rest. Second, I am a Unity developer, not a 3D artist: I prepare, light and optimise the scene you supply for Quest, but remodelling or re-texturing large parts of the apartment would be extra work to agree first.",
  },
  experience: [
    {
      period: "Dec 2023 – Oct 2024",
      title: "Tanta University — Unity VR developer (sole developer)",
      context:
        "Meta Quest 2 training suite: headset onboarding tutorial, multi-angle 360° surgical-room viewer with viewpoint switching, interactive viscosity lab.",
      tech: ["Unity", "C#", "Meta Quest 2", "Auto Hand", "360 video", "Android"],
      responsibility:
        "Everything: VR interaction flows, scenes, switching between 360° viewpoints inside the headset, onboarding for first-time headset users, adapting 3D assets, standalone headset builds.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context:
        "Cross-platform interior-design app: browser (WebGL) room editor with tour, floor-plan and dollhouse views, plus Android / iOS AR furniture preview.",
      tech: ["Unity 6", "C#", "WebGL", "AR Foundation", "Photon", "PlayFab"],
      responsibility:
        "I built the Unity app, not the whole product: runtime loading of 3D furniture and room models, multiplayer room editing in WebGL, AR preview, backend integration. The product and service belong to Ivris.",
      links: [
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
        { label: "Video", href: ivrisVisualizationVideo },
      ],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth (freelance)",
      context: "Short-session branded VR game for an event booth, played by first-time visitors.",
      tech: ["Unity", "C#", "VR"],
      responsibility: "Unity developer: gameplay loop, timed scoring, and onboarding designed for first-time visitors.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Interactive 3D training simulations of BEDO engineering trainers (fuel-cell, mechatronics, PID and fluid labs), delivered as Unity WebGL.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)"],
      responsibility:
        "My Unity implementation of the simulations: interaction logic, guided steps, UI, builds and performance on a constrained platform. The hardware and products belong to BEDO.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
  ],
  evidence: [
    {
      label: "Closest match: fixed viewpoints on Quest",
      title: "Tanta University Meta Quest 2 suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Quest 2 standalone · 360° viewpoints · sole developer",
      copy:
        "A 360° viewer where users switch between fixed camera viewpoints inside the headset, plus an onboarding tutorial for first-time users. Your tour is the same pattern: fixed nodes, simple movement between them, nothing to learn.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
    {
      label: "Interior visualization",
      title: "Ivris tour and dollhouse views",
      image: ivrisDollhouse,
      meta: "Unity · furnished room layouts",
      copy: "Dollhouse overview of a furnished room layout, alongside first-person tour and floor-plan modes of the same space.",
      links: [
        { label: "Video", href: ivrisVisualizationVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "Rooms and furniture in Unity",
      title: "Ivris room editor",
      image: ivrisRoomEditor,
      meta: "Runtime 3D loading · WebGL",
      copy: "Production Unity app that loads room and furniture models and keeps them responsive on a constrained platform (the browser).",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
    {
      label: "VR for first-time users",
      title: "Nescafe VR surfing booth",
      image: nescafeBeach,
      meta: "VR · short session · no instructions needed",
      copy: "A booth game designed so first-time visitors understand it in seconds, the same goal as a tour with no buttons, pop-ups or narration.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "Scope in your post",
      items: [
        {
          need: "Standalone Quest build from the existing renders, 6–8 fixed viewpoints",
          status: "adjacent",
          proof: "Standalone Quest 2 apps at Tanta, including a 360° viewer with several fixed viewpoints; interior scenes at Ivris. An apartment tour from your source files would be new content on the same pattern.",
        },
        {
          need: "Gaze-activated teleport between nodes",
          status: "adjacent",
          proof: "In-headset viewpoint switching built at Tanta. A gaze reticle with a short dwell timer is a small addition I would build for your tour.",
        },
        {
          need: "Living room, kitchen and bedroom each with at least one viewpoint",
          status: "commitment",
          proof: "Node positions agreed with you on a floor plan before building.",
        },
        {
          need: "Viewing only: no buttons, pop-ups or narration",
          status: "commitment",
          proof: "Only a gaze reticle and minimal node markers, if you want markers at all.",
        },
        {
          need: "Lighting and textures close to the renders, performant on Quest",
          status: "partial",
          proof: "Quest 2 performance work at Tanta. Matching offline renders with baked lighting is not in my portfolio yet; see the note above.",
        },
      ],
    },
    {
      title: "Deliverables",
      items: [
        { need: "Quest .apk", status: "direct", proof: "Standalone Quest 2 builds at Tanta University." },
        {
          need: "Project source files",
          status: "commitment",
          proof: "The full Unity project, organised so you or another developer can tweak it later.",
        },
        {
          need: "One-page setup and use guide",
          status: "commitment",
          proof: "Installation, launching, moving between viewpoints, and what to do if something goes wrong.",
        },
      ],
    },
    {
      title: "Acceptance criteria",
      items: [
        {
          need: "Installs and launches on Quest without sideloading complications",
          status: "commitment",
          proof: "Install route agreed at the start (developer-mode APK or a private store release channel), then tested end to end on my Quest 2.",
        },
        {
          need: "All 6–8 nodes load within three seconds",
          status: "commitment",
          proof: "One optimised scene with a short fade between nodes; load times measured on device and reported with each build.",
        },
        {
          need: "Geometry, materials and lightmaps match the renders within mobile limits",
          status: "commitment",
          proof: "You approve the first finished node against your renders before the rest is built.",
        },
      ],
    },
    {
      title: "What your post asks bidders to include",
      items: [
        {
          need: "Sample Quest build of similar work",
          status: "partial",
          proof: "Quest 2 work shown as videos with my role per project; see the first answer above.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would build the tour",
    intro:
      "To be confirmed once I see your source files, but this is the order I would propose so you see the look early and nothing is redone:",
    steps: [
      {
        title: "Check the source and pick the route",
        body: "If you have the 3D scene behind the renders, I bring it into Unity, reduce what Quest does not need, and bake the lighting so it stays close to the renders. If you only have images, or your renderer can output a 360° panorama from each viewpoint, the tour can show those panoramas instead: a near-exact match to the renders and very light on the headset, the same approach as my Tanta 360° viewer. We choose together before any build work.",
      },
      {
        title: "Agree the nodes on a 2D floor plan first",
        body: "Before Unity work I agree the system on a small HTML prototype with 2D vector graphics. For a tour this is simple: the floor plan with the 6–8 node positions, the starting view of each one and which nodes it links to, so the living room, kitchen and bedroom are covered before I build anything.",
      },
      {
        title: "One node on the headset for your approval",
        body: "I finish one node completely and send you a Quest build of it. You compare it with your renders on the headset; lighting and materials are adjusted until you are happy, then the same settings carry over to the other nodes.",
      },
      {
        title: "Comfortable gaze teleport",
        body: "A small reticle; looking at a node marker for a moment fills it and moves you there with a short fade, which is more comfortable than a sudden jump for people new to VR. No controllers needed.",
      },
      {
        title: "Measure on the device, then hand over",
        body: "Load times and frame rate checked on my Quest 2 at every milestone. Final delivery: APK, Unity project and the one-page guide, tested with the install route we agreed.",
      },
    ],
    note: "The visual match depends mostly on what source files exist. I would rather confirm that in the first message than promise a result before seeing them.",
  },
  timeline: [
    {
      when: "Start",
      title: "Source files and floor plan",
      body: "Review your files, agree the route (3D scene or panoramas), the 6–8 node positions and the install route.",
    },
    {
      when: "Milestone 1",
      title: "First node on Quest",
      body: "One finished viewpoint on the headset for you to compare with the renders, with its measured load time.",
    },
    {
      when: "Milestone 2",
      title: "Full tour",
      body: "All 6–8 nodes with gaze teleport, matched to the approved look, with a performance pass on Quest 2.",
    },
    {
      when: "Delivery",
      title: "APK, source and guide",
      body: "Quest APK, Unity project and the one-page setup and use guide, tested with the agreed install route.",
    },
    {
      when: "After delivery",
      title: "Warranty",
      body: "Defects in my code fixed at no charge during the agreed period; changes and new features billed separately.",
    },
  ],
  questions: [
    "What are the source files behind the renders: the 3D scene (and which software and renderer), or only the rendered images? Could your renderer output a 360° panorama from each viewpoint?",
    "Which headsets must the tour run on: Quest 2, Quest 3, Quest 3S? I test on my own Quest 2.",
    "Who will install and use it, you or buyers at a sales office? Is a developer-mode APK acceptable, or should it go through a private release channel on the Meta Horizon Store?",
    "Should node markers be visible in the headset, or should the tour feel completely clean with teleport triggered only by looking at a spot?",
    "Do you already have the 6–8 viewpoint positions in mind, or should I propose them on the floor plan?",
    "Is this one apartment, or will more units or projects follow that should reuse the same setup?",
  ],
  closing: {
    title: "Next step",
    body: "Reply on Freelancer.com with a look at the source files if you can, and I will confirm the route and send the floor plan with proposed viewpoints.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity VR developer",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

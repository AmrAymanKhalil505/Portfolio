import nescafeJungle from "../../assets/thumbnails/projects/Nescafe/Nescafe Water Jungle.thumb.webp";
import ev117Particles from "../../assets/thumbnails/projects/EduLab/EV117 Particles.thumb.webp";
import { caseStudyUrl, portfolioUrl, youtubeThumbnail } from "./index";
import type { Proposal } from "./types";

// Source: r/gameDevClassifieds post "[HIRING] Indie game developer for a short story-driven horror
// game based on real folklore" (private indie client, posted ~2026-10-08). The full post could not be
// fetched (Reddit blocked); answers map to the Job Radar summary: short first-person slow-burn
// psychological horror game or playable first chapter, Italian and Balkan folklore testimonies,
// client supplies story and references, scope and timeline agreed first, $5,000 fixed in milestones
// (prototype, first level, final build).

const tantaVideo = "https://youtube.com/shorts/hgh_BzUa5X0";
const nescafeVideo = "https://youtube.com/shorts/upsJHmKdVN0";
const atmosphereVideo = "https://youtu.be/eWFaHaYUy44";

const proposal: Proposal = {
  slug: "folklore-horror",
  client: "Folklore horror game (indie project)",
  projectName: "Short first-person folklore horror game",
  dateLabel: "October 2026",
  eyebrow: "Application · Indie folklore horror game · Unity developer",
  headline: "Unity developer for your slow-burn folklore horror chapter",
  lead: [
    "You have the story and the folklore testimonies; you need someone to turn them into a playable first-person experience in Unity. That translation is what I do every day: I take material written by other people (instructional designers, subject experts) and turn it into scenes, step-by-step flows, triggers and feedback that a first-time player understands without a manual.",
    "I have built first-person experiences in Unity, including a Meta Quest 2 suite I developed alone with guided onboarding and paced, step-driven scenes, and two short games. I have not shipped a horror game, and I say so plainly below. What I offer is solid Unity engineering, a clear milestone plan matched to your three payments, and a prototype you can play early to judge the pacing before the money for the full build is spent.",
  ],
  quickFacts: [
    { label: "Budget", value: "USD 5,000 fixed, 3 milestones (as posted)" },
    { label: "Engine", value: "Unity (C#)" },
    { label: "Start", value: "Part-time in notice month, full pace after" },
    { label: "Time zone", value: "Egypt · 1 h ahead of Italy (CET)" },
  ],
  answers: [
    {
      title: "Shipped portfolio",
      original: "Portfolio of shipped work",
      body: [
        "Below are Unity projects with videos and case studies, each stating my own role: a Meta Quest 2 training suite I built as the sole developer (Tanta University, Dec 2023 – Oct 2024), a short-session VR booth game (Nescafe Ice Coffee, 2025, one week), a mobile educational game (Atmosphere Protector), and engineering simulations I have built at BEDO since Oct 2024. None of these is a horror title.",
      ],
    },
    {
      title: "Engine",
      original: "Unity (or Unreal / Godot)",
      body: [
        "Unity with C#. I have worked in Unity continuously since December 2023 and use Unity 6 in production.",
      ],
    },
    {
      title: "Budget and milestones",
      original: "Fixed budget of USD 5,000, paid in milestones: prototype, first level, final build",
      body: [
        "I am happy to work to a fixed price with your three milestones: (1) a playable prototype, (2) the first finished level, (3) the final build. [[TODO: confirm fixed price / milestone split]]",
        "Each milestone ends with a build you can play and the Unity project source. Changes to the agreed scope after we start are discussed and priced separately, so the fixed price stays fair for both of us.",
      ],
    },
    {
      title: "Scope and timeline before starting",
      original: "Scope and timeline agreed before starting",
      body: [
        "Agreed. In the first days I would write a one-page scope from your story: the spaces, the story beats and scares, what the player can interact with, and what is explicitly out of scope. We sign off on that and on the milestone dates before I build anything.",
        "My availability: I am employed with a one-month notice period. During that month I can work part-time, about 15 hours per week, which is enough for the scope document and the prototype. After that, 30 hours per week, up to 40 in busy phases.",
      ],
    },
  ],
  candidNote: {
    title: "A transparent note on horror and level building",
    body: "I have not shipped a horror or narrative game, and level design and environment art for horror atmosphere are not my production background: my professional work is Unity simulations and training experiences, plus two short games. My strengths for your project are the engineering side: first-person movement and interaction, scripted sequences and triggers, step-by-step pacing, and clean, maintainable builds. For the look of the levels I would assemble spaces from existing asset packs or assets you provide, and tune lighting, fog and sound with you through the prototype. If you need someone who brings their own horror art direction and a shipped horror title, I may not be the strongest fit, and I prefer you know that now.",
  },
  experience: [
    {
      period: "Dec 2023 – Oct 2024",
      title: "Tanta University — Unity VR developer (sole developer)",
      context:
        "Meta Quest 2 suite: headset onboarding tutorial, multi-angle 360° surgical-room viewer, interactive viscosity lab.",
      tech: ["Unity", "C#", "Meta Quest 2", "Auto Hand", "360 video", "Android"],
      responsibility:
        "Everything: turning written instructional material into first-person scenes and interaction flows, grab and tool interactions, adapting existing 3D assets to fit each scene, headset builds.",
      links: [
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
        { label: "Video", href: tantaVideo },
      ],
    },
    {
      period: "2025 · one week",
      title: "Nescafe Ice Coffee — VR surfing booth (freelance, one-week project)",
      context: "Short-session VR game for an event booth: surf sand and water tracks, collect cans, beat the timer.",
      tech: ["Unity", "C#", "VR"],
      responsibility: "Unity developer: gameplay loop, timed scoring, collectibles and visitor-friendly onboarding.",
      links: [
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
        { label: "Video", href: nescafeVideo },
      ],
    },
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity / WebGL training simulations of BEDO engineering trainers: fuel-cell, mechatronics, PID control and fluid-mechanics labs.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "ScriptableObject architecture"],
      responsibility:
        "My Unity implementation of the simulations: state logic, guided step sequences, visual effects that show hidden processes, UI and builds. The hardware and products belong to BEDO.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Interior-design app: WebGL room editor plus Android / iOS AR preview. I built the Unity app, not the whole product.",
      tech: ["Unity 6", "C#", "WebGL", "AR Foundation", "Photon", "PlayFab"],
      responsibility: "Runtime loading of 3D models, Photon multiplayer room editing in WebGL, AR preview, backend integration.",
      links: [{ label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") }],
    },
  ],
  evidence: [
    {
      label: "First-person, paced scenes",
      title: "Meta Quest 2 training suite",
      image: youtubeThumbnail("hgh_BzUa5X0"),
      meta: "Quest 2 · sole developer · guided flow",
      copy:
        "Written material turned into first-person scenes the player moves through step by step, with objects to pick up and use and an onboarding flow for people who had never worn a headset.",
      links: [
        { label: "Video", href: tantaVideo },
        { label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") },
      ],
    },
    {
      label: "Short game, start to finish",
      title: "Nescafe VR surfing booth",
      image: nescafeJungle,
      meta: "VR · several environments · one week",
      copy:
        "A short, complete game delivered in a week: several environment routes, a timed loop and collectibles, built so a first-time player understands it in seconds.",
      links: [
        { label: "Video", href: nescafeVideo },
        { label: "Case study", href: caseStudyUrl("nescafe-surfing-vr-booth") },
      ],
    },
    {
      label: "Game loop and feedback",
      title: "Atmosphere Protector",
      image: youtubeThumbnail("eWFaHaYUy44"),
      meta: "Mobile game · Unity · Android / iOS",
      copy:
        "An educational mobile game with a core loop, a health state the player can see, upgrades and instruction screens that introduce the goal before play.",
      links: [
        { label: "Video", href: atmosphereVideo },
        { label: "Case study", href: caseStudyUrl("atmosphere-protector") },
      ],
    },
    {
      label: "Mood with lighting and effects",
      title: "EV117 particle view",
      image: ev117Particles,
      meta: "Particles · timing · visual explanation",
      copy:
        "Not a game, but the same tools a slow-burn atmosphere relies on: particle systems and timing used to make something invisible feel present on screen.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
  ],
  requirementGroups: [
    {
      title: "What the project needs",
      items: [
        {
          need: "Unity (or Unreal / Godot)",
          status: "direct",
          proof: "Unity and C# in production since Dec 2023; Unity 6 at Ivris and BEDO.",
        },
        {
          need: "First-person exploration and interaction",
          status: "adjacent",
          proof: "First-person VR scenes with grab and use interactions at Tanta; not yet a desktop first-person exploration game.",
        },
        {
          need: "Story told through the environment, from material you provide",
          status: "adjacent",
          proof: "Every project above starts from material written by others (instructional designers, experts) and turns it into scripted steps and triggers.",
        },
        {
          need: "Slow-burn horror atmosphere (lighting, fog, sound, pacing)",
          status: "partial",
          proof: "Particles, scene effects and timing used in simulations and games; no horror title yet. Tuned with you through the prototype.",
        },
        {
          need: "Level building",
          status: "partial",
          proof: "Scenes assembled and adapted from existing assets (Tanta, Nescafe); not a dedicated level designer or environment artist.",
        },
        {
          need: "Shipped portfolio",
          status: "partial",
          proof: "Shipped Unity apps, the Nescafe event game and an unreleased mobile game, with videos; none is a horror or narrative title.",
        },
      ],
    },
    {
      title: "Milestone deliverables",
      items: [
        {
          need: "Milestone 1: playable prototype",
          status: "commitment",
          proof: "Greybox of the main space, first-person controller, interaction, and two or three story beats with first lighting and sound.",
        },
        {
          need: "Milestone 2: first level",
          status: "commitment",
          proof: "The first level complete: dressed spaces, all its beats and scares, audio pass, save / checkpoint if agreed.",
        },
        {
          need: "Milestone 3: final build",
          status: "commitment",
          proof: "Remaining agreed content, menus and settings, performance pass, bug fixing, a build for the agreed platform and the full Unity project.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would build your folklore horror chapter",
    intro:
      "To be shaped around your story and references, but this is the structure I would propose:",
    steps: [
      {
        title: "Story beats first, as a clickable flow",
        body: "Before any Unity work, I map your story into a simple clickable flow of beats: where the player is, what they find, what changes, what they hear. You can read and click through it and correct the order and pacing in minutes, before time is spent building it. This is the same prototype-first habit I use at work, adapted to a story.",
      },
      {
        title: "Beats as data, not hard-coded scenes",
        body: "Each beat is a small, reusable piece: a trigger, a condition (has the player found the object, looked at the door, waited long enough) and a response (sound, light change, object moved, text or voice line). That makes it quick to rearrange the pacing after you play it, which is where slow-burn horror is won or lost.",
      },
      {
        title: "Greybox, then play, then dress",
        body: "Spaces are blocked out in simple shapes first so you can walk them and judge distance and tension, then dressed with assets that fit the Italian and Balkan setting of the testimonies.",
      },
      {
        title: "Atmosphere tuned together",
        body: "Lighting, fog, darkness and sound are adjusted in short review rounds with you, using your references, rather than decided by me alone.",
      },
      {
        title: "Playable build at every milestone",
        body: "You get a build you can play and the project source at each payment, so you always see exactly what you are paying for.",
      },
    ],
    note: "Art direction, the story and the folklore details come from you. Assets would come from licensed packs or from you; licences and the art budget are agreed in the scope.",
  },
  timeline: [
    {
      when: "Before starting",
      title: "Scope and dates",
      body: "One-page scope from your story and references, out-of-scope list, and dates for the three milestones, agreed in writing.",
    },
    {
      when: "Notice month",
      title: "Milestone 1: prototype",
      body: "Part-time, about 15 hours per week: the story-beat flow, then a playable greybox with first lighting, sound and beats.",
    },
    {
      when: "After notice",
      title: "Milestone 2: first level",
      body: "30 hours per week: the first level complete, reviewed with you in short rounds.",
    },
    {
      when: "Final phase",
      title: "Milestone 3: final build",
      body: "Remaining agreed content, polish, performance and bug fixing, final build and project hand-over. Defects in my code found after delivery are fixed at no charge; new features are priced separately.",
    },
  ],
  questions: [
    "Is the goal the full short game or a playable first chapter, and roughly how long should one playthrough take?",
    "Which platform is the target: PC only (Steam, itch.io), or consoles later?",
    "Do you have a visual reference or art budget in mind: licensed asset packs, assets you provide, or a separate artist?",
    "How will sound and any voice lines be handled: from you, a sound designer, or licensed libraries?",
    "How would you like the folklore told in game: environmental details, documents and notes, voice, or a mix?",
    "Is the $5,000 split equally across the three milestones, or weighted toward the final build?",
  ],
  closing: {
    title: "Next step",
    body: "If this sounds right, send me the story outline and a few references, and I will come back with a one-page scope and milestone dates for you to review.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity developer",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

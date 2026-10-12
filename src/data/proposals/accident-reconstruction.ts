import pidGraph from "../../assets/thumbnails/projects/PID/graph photo.thumb.webp";
import fm103Graph from "../../assets/thumbnails/projects/EduLab/FM103 Graph.thumb.webp";
import mr109Transporting from "../../assets/thumbnails/projects/MR109 Compact/MR109 Transporting.thumb.webp";
import ivrisApp from "../../assets/thumbnails/projects/Ivris/Ivris app 03.thumb.webp";
import { caseStudyUrl, portfolioUrl } from "./index";
import type { Proposal } from "./types";

// Source: Reddit r/gameDevClassifieds post "Looking for a 3D artist / vehicle simulation
// specialist" (posted ~2026-09-29). The post itself could not be fetched (Reddit blocked);
// this file is written from the Job Radar summary: a neutral, technically plausible 3D
// reconstruction of a motorway rear-end collision (trucks and stationary cars) built from
// police documents, photos, speeds and distances; Blender / BeamNG / Unreal / Houdini or
// similar; asks for a rate or project price. The poster is a private person: no username or
// accident details beyond that generic description belong in this file.

const industrialVideo = "https://youtu.be/R4gS25C_wGs";
const ivrisVideo = "https://youtu.be/EfT0RmH9TT0";

const proposal: Proposal = {
  slug: "accident-reconstruction",
  client: "Collision reconstruction project",
  projectName: "3D reconstruction of a motorway rear-end collision",
  dateLabel: "October 2026",
  greeting: "Hello,",
  eyebrow: "Application · Collision reconstruction · Unity simulation developer",
  headline: "A neutral, traceable 3D reconstruction built from your documented speeds and distances",
  lead: [
    "I build Unity simulations where every moving value comes from a real equation and a stated input, so engineers can check the behaviour instead of trusting an animation. That is what a neutral reconstruction needs: each vehicle's position over time follows from the speeds, distances and timings in your documents, and every assumption is written down next to the result.",
    "You listed Blender, BeamNG, Unreal, Houdini or similar tools; I work in Unity, which covers the same ground for this job: vehicle motion along the motorway, the moment of impact, multiple camera views and a rendered video. Below I explain how I would work from your material, what you would receive, and where the limits of a reconstruction like this are.",
  ],
  quickFacts: [
    { label: "Project price", value: "[[TODO: project price]]" },
    { label: "Tool", value: "Unity (C#), video + browser viewer" },
    { label: "Inputs", value: "Your documents, photos, speeds, distances" },
    { label: "Time zone", value: "Egypt · 1 h ahead of CET" },
  ],
  answers: [
    {
      title: "Rate or project price",
      body: [
        "[[TODO: project price]] as a fixed price for the scope described below, agreed after I have seen what the documents contain. Changes beyond that scope (extra scenarios, extra deliverables) would be quoted separately before I start them.",
      ],
    },
    {
      title: "Which tool, and why Unity",
      body: [
        "Unity with C#. I drive the vehicle motion from the documented values with explicit kinematic equations (speed, reaction time, braking deceleration, distance) rather than letting a game-physics engine decide the outcome. That keeps the reconstruction reproducible: the same inputs always give the same result, and anyone can see which number produced which movement.",
      ],
    },
    {
      title: "Relevant experience",
      body: [
        "Since December 2023 I have worked professionally in Unity on simulations of real technical systems: equation-driven engineering labs (flow, pressure, control-loop response) and moving industrial stations at BEDO, plus a production Unity WebGL app with runtime 3D loading at Ivris. I have not done accident reconstruction before; the note below says exactly what that means for your project.",
      ],
    },
    {
      title: "How I would use your material",
      body: [
        "Police documents and measurements set the positions, distances, speeds and timings. Photos set the road layout, lane positions, vehicle types and final rest positions. Anything the documents do not state (for example a reaction time or a braking rate) becomes a clearly labelled assumption with a source or a range, never a hidden value.",
      ],
    },
    {
      title: "Delivery time",
      body: [
        "[[TODO: delivery estimate in weeks, after seeing the documents]]. I can work on this part-time, about 15 hours per week.",
      ],
    },
  ],
  candidNote: {
    title: "What I am, and what this reconstruction is not",
    body: "I have not done accident reconstruction, forensic or vehicle-dynamics work before, and I am a Unity simulation developer, not a 3D artist: vehicles would be suitable generic or licensed models matched to the types in your photos, not custom photoreal recreations, and I would not simulate body deformation the way BeamNG does. Most importantly, a Unity reconstruction is a visualisation of the inputs you give it, not a certified forensic expert report. If it is meant for an insurer, a court or legal proceedings, it should support an accredited accident reconstructionist's findings, not replace them. I prefer you know this before you choose.",
  },
  experience: [
    {
      period: "Oct 2024 – present",
      title: "BEDO Innovating Education — Senior Unity Engineer",
      context:
        "Unity / WebGL simulations of engineering trainers: PID control labs, fluid-mechanics labs, the EV117 fuel-cell lab and MR109 / MR110 industrial stations.",
      tech: ["Unity", "C#", "WebGL", "Unity 6 (migration since 2026)", "Equation-driven simulation", "Data visualisation"],
      responsibility:
        "Simulation logic driven by engineering models, real-time graphs and measurement readouts, moving station behaviour, guided steps and WebGL builds. The hardware and products belong to BEDO; my work is the Unity implementation.",
      links: [
        { label: "PID labs case study", href: caseStudyUrl("pid-control-virtual-labs-suite") },
        { label: "Engineering labs case study", href: caseStudyUrl("engineering-education-virtual-labs") },
      ],
    },
    {
      period: "Jun 2024 – Jun 2026",
      title: "Ivris — Unity and AR application developer (freelance)",
      context: "Cross-platform interior-design app: WebGL room editor plus Android / iOS AR preview.",
      tech: ["Unity 6", "C#", "WebGL", "AR Foundation", "Photon", "PlayFab"],
      responsibility:
        "Built the Unity app: runtime loading of 3D models, multiplayer room editing in WebGL, AR preview and backend integration.",
      links: [
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
        { label: "Video", href: ivrisVideo },
      ],
    },
    {
      period: "Dec 2023 – Oct 2024",
      title: "Tanta University — Unity VR developer (sole developer)",
      context: "Meta Quest 2 training suite: onboarding tutorial, 360° viewer, interactive viscosity lab.",
      tech: ["Unity", "C#", "Meta Quest 2", "Auto Hand"],
      responsibility: "Sole developer, from requirements to scenes, interactions and builds.",
      links: [{ label: "Case study", href: caseStudyUrl("meta-quest-vr-training-suite") }],
    },
  ],
  evidence: [
    {
      label: "Values driven by equations",
      title: "PID virtual labs",
      image: pidGraph,
      meta: "Control models · live response graphs",
      copy:
        "Every reading and response curve comes from the system's model and the parameters the user sets, plotted over time. A reconstruction timeline works the same way: inputs in, positions and speeds over time out.",
      links: [{ label: "Case study", href: caseStudyUrl("pid-control-virtual-labs-suite") }],
    },
    {
      label: "Physics shown with its numbers",
      title: "Engineering education labs",
      image: fm103Graph,
      meta: "Bernoulli flow · measurement · graphs",
      copy:
        "Fluid-mechanics experiments where the visible behaviour and the measured values follow the same engineering model, with graphs for analysis.",
      links: [{ label: "Case study", href: caseStudyUrl("engineering-education-virtual-labs") }],
    },
    {
      label: "Moving objects on a timeline",
      title: "MR109 / MR110 industrial stations",
      image: mr109Transporting,
      meta: "Motion · sensors · process states",
      copy:
        "Conveyors, actuators and parts moving in sequence with sensor-triggered states: timed motion of several objects in one scene, the core of a multi-vehicle reconstruction.",
      links: [
        { label: "Video", href: industrialVideo },
        { label: "Case study", href: caseStudyUrl("industrial-training-simulation-systems") },
      ],
    },
    {
      label: "Delivered in the browser",
      title: "Ivris WebGL app",
      image: ivrisApp,
      meta: "WebGL · runtime 3D loading",
      copy: "Production Unity WebGL app: the same delivery route for an interactive reconstruction viewer that opens from a link.",
      links: [
        { label: "Video", href: ivrisVideo },
        { label: "Case study", href: caseStudyUrl("ivris-ar-interior-visualization") },
      ],
    },
  ],
  requirementGroups: [
    {
      title: "What the project needs",
      items: [
        {
          need: "Technically plausible vehicle motion from documented speeds and distances",
          status: "adjacent",
          proof: "Equation-driven simulations at BEDO (control and flow models). Vehicle kinematics are new to me, but they are simpler, well-documented equations.",
        },
        {
          need: "Collision physics between trucks and stationary cars",
          status: "partial",
          proof: "I would reconstruct approach, impact point and documented rest positions with stated assumptions; I would not claim a validated crash or deformation simulation.",
        },
        {
          need: "3D scene reconstruction of the motorway from photos and documents",
          status: "adjacent",
          proof: "Built 3D training scenes and integrated 3D models at BEDO and Ivris; the road layout would be modelled from your photos and measurements.",
        },
        {
          need: "Neutral presentation",
          status: "commitment",
          proof: "Every input linked to its source, every assumption listed, and alternative values switchable so nothing is quietly chosen in one party's favour.",
        },
        {
          need: "3D artist skills (Blender / Houdini level)",
          status: "partial",
          proof: "Not a 3D artist. I adapt and place existing models; custom photoreal vehicle modelling would need an artist.",
        },
      ],
    },
    {
      title: "What you receive",
      items: [
        {
          need: "Rendered video of the reconstruction",
          status: "commitment",
          proof: "Overhead view, driver-eye views and a wide view, with a time and speed overlay.",
        },
        {
          need: "Interactive browser viewer",
          status: "commitment",
          proof: "Unity WebGL build with a timeline scrubber and free camera, as I deliver at BEDO and Ivris.",
        },
        {
          need: "Inputs and assumptions sheet",
          status: "commitment",
          proof: "One table: each value, its unit, its source document or photo, and whether it is measured or assumed.",
        },
      ],
    },
  ],
  approach: {
    title: "How I would build the reconstruction",
    intro:
      "To be adjusted once I have seen your documents, but this is the order I would work in:",
    steps: [
      {
        title: "Collect every input in one table",
        body: "Speeds, distances, positions, lane, vehicle types and sizes, timings and final rest positions, each with its source. Gaps are marked as assumptions with a range, and you confirm the table before anything is built.",
      },
      {
        title: "Check the numbers in a 2D prototype first",
        body: "Before any 3D work I build an HTML prototype with 2D vector graphics: a top-down view of the motorway where each vehicle moves according to its equation (constant speed, reaction time, braking deceleration), with the equation and current value shown next to it. You can see that nothing is hard-coded and whether the documented values are consistent with each other, before time is spent on the 3D scene.",
      },
      {
        title: "Build the 3D scene",
        body: "Motorway section, lanes and surroundings modelled from your photos and measurements, with vehicle models matched to the types involved.",
      },
      {
        title: "Drive the 3D vehicles from the same equations",
        body: "The Unity scene uses the same motion model as the prototype, so the 3D result matches the checked numbers. Where values are uncertain, alternative scenarios (for example a different reaction time) can be shown side by side.",
      },
      {
        title: "Render and deliver",
        body: "Video from several viewpoints, the browser viewer and the inputs-and-assumptions sheet, with a round of review and corrections.",
      },
    ],
    note: "The reconstruction can only be as accurate as the inputs. It shows what the documented values imply; it does not establish fault or replace an expert report.",
  },
  timeline: [
    {
      when: "Step 1",
      title: "Inputs and price",
      body: "You share the documents you are comfortable sharing; I return the inputs table, open questions and a fixed price.",
    },
    {
      when: "Step 2",
      title: "2D prototype",
      body: "Top-down, equation-driven motion of all vehicles for you to review and correct.",
    },
    {
      when: "Step 3",
      title: "3D scene and motion",
      body: "Motorway scene, vehicles, impact and rest positions driven by the confirmed values.",
    },
    {
      when: "Step 4",
      title: "Video, viewer, sheet",
      body: "Rendered views, WebGL viewer, assumptions sheet, one round of corrections.",
    },
  ],
  questions: [
    "What will the reconstruction be used for: your own understanding, an insurer, a lawyer or a court? That decides how formal the assumptions sheet needs to be and whether an accredited expert should be involved.",
    "Do the police documents give measured speeds and distances, or estimates? Are there skid marks, rest positions or a sketch plan with dimensions?",
    "Which vehicles were involved (truck types with or without trailers, car models), and are photos of the vehicles and road available?",
    "Which deliverable matters most: a video, an interactive viewer, still images, or all three?",
    "Is there a deadline you are working towards?",
  ],
  closing: {
    title: "Next step",
    body: "If this approach fits, reply in the thread and I will walk you through the demos and the 2D prototype idea, then give you a fixed price once I have seen what the documents contain.",
  },
  signature: {
    name: "Amr Khalil",
    role: "Unity simulation developer",
    location: "Egypt (remote)",
    links: [{ label: "Portfolio", href: portfolioUrl }],
  },
};

export default proposal;

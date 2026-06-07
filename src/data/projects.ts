import plcThumb from "../assets/plc-digital-twin.svg";
import fluidThumb from "../assets/fluid-physics.svg";
import vrThumb from "../assets/vr-booth.svg";
import agriThumb from "../assets/agri-tech.svg";
import pidThumb from "../assets/pid-control.svg";
import webglThumb from "../assets/webgl-systems.svg";
import ivrisThumb from "../assets/ivris-ar-room.svg";
import vrTrainingThumb from "../assets/vr-training-suite.svg";
import cimThumb from "../assets/cim-station.svg";
import type { MediaItem } from "../components/MediaDemoViewer";

export type ProjectCategory =
  | "Educational Simulations"
  | "Digital Twin / Industrial Training"
  | "VR & Interactive Booths"
  | "WebGL Experiments"
  | "Game Systems & Architecture"
  | "AR / Interior Visualization"
  | "IoT / ML / Social Impact";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  role: string;
  platform: string[];
  tech: string[];
  thumbnail: string;
  previewGif?: string;
  media?: MediaItem[];
  articleLayout?: "blog";
  demoUrl?: string;
  githubUrl?: string;
  caseStudyUrl: string;
  highlights: string[];
  timeline: string;
  problem: string;
  solution: string;
  challenges: string[];
  impact: string[];
  overview?: string[];
  simulatedBehaviors?: {
    title: string;
    bullets: string[];
  }[];
  stationBreakdown?: {
    title: string;
    description: string;
    bullets: string[];
  }[];
  technicalHighlights?: string[];
  featured?: boolean;
  webglAvailable?: boolean;
};

export const categories: ProjectCategory[] = [
  "Educational Simulations",
  "Digital Twin / Industrial Training",
  "VR & Interactive Booths",
  "WebGL Experiments",
  "Game Systems & Architecture",
  "AR / Interior Visualization",
  "IoT / ML / Social Impact",
];

export const projects: Project[] = [
  {
    id: "cim-station-behavior-simulation",
    title: "CIM Station Behavior Simulation",
    category: "Digital Twin / Industrial Training",
    summary:
      "Unity simulation of industrial station behaviors, combining motion, pneumatic actuation, sensor response, and PLC-style logic across multiple CIM modules.",
    role: "Unity Developer",
    platform: ["Unity", "WebGL", "Industrial training"],
    tech: ["Unity", "C#", "Simulation", "Digital Twin", "Industrial Automation", "PLC Logic", "TIA Portal"],
    thumbnail: "/projects/cim/thumnail.jpg",
    previewGif: "https://youtu.be/QLjgsxOoedk",
    demoUrl: "#demo",
    caseStudyUrl: "/projects/cim-station-behavior-simulation",
    articleLayout: "blog",
    media: [
      {
        id: "full-system-run",
        type: "youtube",
        title: "Full System Run",
        youtubeId: "https://youtu.be/pkXqNAiVa8s",
        thumbnail: "https://i.ytimg.com/vi/pkXqNAiVa8s/hqdefault.jpg",
        caption: "Full system run showing coordinated station behavior and process flow.",
      },
      {
        id: "laser-cnc-working",
        type: "youtube",
        title: "Laser CNC Working",
        youtubeId: "https://youtu.be/kR9O9rkUtwk",
        thumbnail: "https://i.ytimg.com/vi/kR9O9rkUtwk/hqdefault.jpg",
        caption:
          "Laser CNC station behavior, including sample detection, pneumatic clamping, cutting-head movement, return-to-home behavior, and valve reset.",
      },
      {
        id: "loading-tia-portal",
        type: "youtube",
        title: "Loading Station + TIA Portal",
        youtubeId: "https://youtu.be/5KX95fT4f5U",
        thumbnail: "https://i.ytimg.com/vi/5KX95fT4f5U/hqdefault.jpg",
        caption:
          "Loading Station simulation running alongside TIA Portal logic, showing sensor-triggered movement, pneumatic transfer, conveyor behavior, and process state changes.",
      },
      {
        id: "robot-interpreter",
        type: "youtube",
        title: "Robot Interpreter Preview",
        youtubeId: "https://youtu.be/1kYcYGzhTFA",
        thumbnail: "https://i.ytimg.com/vi/1kYcYGzhTFA/hqdefault.jpg",
        caption: "Robot interpreter interface used to visualize or drive robot behavior and process steps.",
      },
      {
        id: "cnc-interpreter",
        type: "youtube",
        title: "CNC Interpreter Preview",
        youtubeId: "https://youtu.be/QLjgsxOoedk",
        thumbnail: "/projects/cim/thumnail.jpg",
        caption: "CNC interpreter interface used to visualize or drive CNC behavior and operation steps.",
      },
    ],
    highlights: [
      "Simulated motion, pneumatic actuation, and digital behavior across multiple CIM stations.",
      "Built behavior for loading, storage, robot, laser CNC, and drilling CNC modules.",
      "Visualized sensor logic, actuator states, and PLC-style process transitions.",
      "Added interpreter-style interfaces for robot and CNC behavior visualization.",
    ],
    timeline: "BEDO Innovating Education - behavior simulation project",
    problem:
      "CIM station behavior can be difficult to inspect when motion, pneumatics, sensors, and PLC-style states are only visible in separate tools.",
    solution:
      "Built a Unity simulation focused on station behavior so motion, pneumatic actuation, sensor response, and process state changes can be observed together.",
    challenges: [
      "Representing machine motion clearly without over-explaining the full manufacturing system.",
      "Coordinating pneumatic, sensor, and digital state changes across multiple stations.",
      "Creating interpreter-style interfaces for robot and CNC behavior visualization.",
    ],
    impact: [
      "Made station behavior easier to demonstrate and debug.",
      "Supported industrial training and digital twin style presentation.",
      "Kept the showcase focused on simulated behavior and technical contribution.",
    ],
    overview: [
      "CIM Station Behavior Simulation is a Unity project focused on reproducing the behavior of multiple industrial stations. The goal was not to explain the entire manufacturing system, but to visualize how each station moves, reacts, and changes state.",
      "I simulated motion behavior, pneumatic actuation, sensor-triggered responses, and PLC-style digital logic across Loading, Storage, Robot, CNC Laser, and CNC Drilling stations. The project also includes interpreter-style interfaces for robot and CNC behavior, making the simulation easier to observe, debug, and demonstrate.",
    ],
    simulatedBehaviors: [
      {
        title: "Motion Behavior",
        bullets: [
          "Conveyor and transfer movement",
          "Robot arm transport behavior",
          "CNC head/spindle movement",
          "Stepper-driven positioning",
          "Return-to-home behavior",
        ],
      },
      {
        title: "Pneumatic Behavior",
        bullets: [
          "Double-acting cylinder extension and retraction",
          "Guided pneumatic cylinder movement",
          "Pneumatic valve state changes",
          "Pneumatic gripper open/close behavior",
          "Rotary pneumatic actuation",
        ],
      },
      {
        title: "Digital / Sensor Behavior",
        bullets: [
          "Capacitive sensor detection",
          "Inductive material sensing",
          "Light barrier detection",
          "Reed switch feedback",
          "Photoelectric sensing",
          "Start, running, stop, ready, emergency, and done states",
        ],
      },
    ],
    stationBreakdown: [
      {
        title: "Loading Station",
        description:
          "Simulates part detection, pneumatic extraction, conveyor movement, material sensing, and motor stop behavior.",
        bullets: [
          "Detects parts using light barrier and capacitive sensors",
          "Uses pneumatic cylinder behavior to extract/transfer parts",
          "Starts conveyor behavior after part detection",
          "Uses inductive sensing to classify metal/non-metal behavior",
          "Stops motor when the part reaches the end light barrier",
        ],
      },
      {
        title: "Storage Station",
        description: "Simulates receiving, rotating, gripping, and storing parts into storage pockets.",
        bullets: [
          "Detects incoming parts in the receiving area",
          "Rotates toward the part using pneumatic rotary behavior",
          "Closes pneumatic gripper to hold and transfer the part",
          "Deposits parts into available storage pockets",
          "Moves to the next pocket when a proximity sensor indicates a pocket is full",
        ],
      },
      {
        title: "Robot Station",
        description: "Simulates robot transport behavior and PLC-style robot process states.",
        bullets: [
          "Starts robot movement based on process signal",
          "Transports test pieces between stations",
          "Uses vacuum/gripper behavior for interaction",
          "Visualizes robot on/done states",
          "Includes start, running, stop, and emergency behavior",
        ],
      },
      {
        title: "CNC Laser Station",
        description: "Simulates laser station operation behavior.",
        bullets: [
          "Detects the sample using capacitive sensing",
          "Triggers pneumatic clamping through valve behavior",
          "Moves the laser head toward the sample",
          "Simulates laser operation behavior",
          "Returns the head to home position and resets the valve",
        ],
      },
      {
        title: "CNC Drilling Station",
        description: "Simulates drilling station operation behavior.",
        bullets: [
          "Detects the sample using capacitive sensing",
          "Triggers pneumatic clamping through valve behavior",
          "Simulates spindle/drilling behavior",
          "Uses stepper-driven positioning behavior",
          "Returns to default state after operation",
        ],
      },
    ],
    technicalHighlights: [
      "Built behavior-driven station simulations in Unity.",
      "Simulated mechanical motion, pneumatic actuation, and digital sensor states.",
      "Represented PLC-style process logic and machine status transitions.",
      "Created visual behavior for loading, storage, robot, laser CNC, and drilling CNC stations.",
      "Added interpreter-style interfaces for robot and CNC process visualization.",
      "Designed the project for industrial training, demonstration, and digital twin style presentation.",
    ],
    featured: true,
    webglAvailable: true,
  },
  {
    id: "cim-station-behavior-simulation-gallery",
    title: "CIM Station Behavior Simulation (Gallery View)",
    category: "Digital Twin / Industrial Training",
    summary:
      "Store-style gallery version of the CIM behavior simulation, with a large selectable YouTube demo viewer.",
    role: "Unity Developer",
    platform: ["Unity", "WebGL", "Industrial training"],
    tech: ["Unity", "C#", "Simulation", "Digital Twin", "Industrial Automation", "PLC Logic", "TIA Portal"],
    thumbnail: "/projects/cim/thumnail.jpg",
    previewGif: "https://youtu.be/QLjgsxOoedk",
    demoUrl: "#demo",
    caseStudyUrl: "/projects/cim-station-behavior-simulation-gallery",
    media: [
      {
        id: "full-system-run",
        type: "youtube",
        title: "Full System Run",
        youtubeId: "https://youtu.be/pkXqNAiVa8s",
        thumbnail: "https://i.ytimg.com/vi/pkXqNAiVa8s/hqdefault.jpg",
        caption: "Full system run showing coordinated station behavior and process flow.",
      },
      {
        id: "laser-cnc-working",
        type: "youtube",
        title: "Laser CNC Working",
        youtubeId: "https://youtu.be/kR9O9rkUtwk",
        thumbnail: "https://i.ytimg.com/vi/kR9O9rkUtwk/hqdefault.jpg",
        caption:
          "Laser CNC station behavior, including sample detection, pneumatic clamping, cutting-head movement, return-to-home behavior, and valve reset.",
      },
      {
        id: "loading-tia-portal",
        type: "youtube",
        title: "Loading Station + TIA Portal",
        youtubeId: "https://youtu.be/5KX95fT4f5U",
        thumbnail: "https://i.ytimg.com/vi/5KX95fT4f5U/hqdefault.jpg",
        caption:
          "Loading Station simulation running alongside TIA Portal logic, showing sensor-triggered movement, pneumatic transfer, conveyor behavior, and process state changes.",
      },
      {
        id: "robot-interpreter",
        type: "youtube",
        title: "Robot Interpreter Preview",
        youtubeId: "https://youtu.be/1kYcYGzhTFA",
        thumbnail: "https://i.ytimg.com/vi/1kYcYGzhTFA/hqdefault.jpg",
        caption: "Robot interpreter interface used to visualize or drive robot behavior and process steps.",
      },
      {
        id: "cnc-interpreter",
        type: "youtube",
        title: "CNC Interpreter Preview",
        youtubeId: "https://youtu.be/QLjgsxOoedk",
        thumbnail: "/projects/cim/thumnail.jpg",
        caption: "CNC interpreter interface used to visualize or drive CNC behavior and operation steps.",
      },
    ],
    highlights: [
      "Simulated motion, pneumatic actuation, and digital behavior across multiple CIM stations.",
      "Built behavior for loading, storage, robot, laser CNC, and drilling CNC modules.",
      "Visualized sensor logic, actuator states, and PLC-style process transitions.",
      "Added interpreter-style interfaces for robot and CNC behavior visualization.",
    ],
    timeline: "BEDO Innovating Education - behavior simulation project",
    problem:
      "CIM station behavior can be difficult to inspect when motion, pneumatics, sensors, and PLC-style states are only visible in separate tools.",
    solution:
      "Built a Unity simulation focused on station behavior so motion, pneumatic actuation, sensor response, and process state changes can be observed together.",
    challenges: [
      "Representing machine motion clearly without over-explaining the full manufacturing system.",
      "Coordinating pneumatic, sensor, and digital state changes across multiple stations.",
      "Creating interpreter-style interfaces for robot and CNC behavior visualization.",
    ],
    impact: [
      "Made station behavior easier to demonstrate and debug.",
      "Supported industrial training and digital twin style presentation.",
      "Kept the showcase focused on simulated behavior and technical contribution.",
    ],
    webglAvailable: true,
  },
  {
    id: "plc-digital-twin",
    title: "PLC Digital Twin Simulation",
    category: "Digital Twin / Industrial Training",
    summary:
      "An interactive Unity simulation that visualizes industrial device behavior controlled by PLC-style ladder logic.",
    role: "Senior Unity Engineer",
    platform: ["Unity", "WebGL"],
    tech: ["Unity", "C#", "WebGL", "TIA Portal", "PID Systems", "uGUI"],
    thumbnail: plcThumb,
    demoUrl: "#demo",
    caseStudyUrl: "/projects/plc-digital-twin",
    highlights: [
      "Built simulation state logic for virtual devices.",
      "Created interactive controls and real-time visual feedback.",
      "Structured the project for educational demonstration and debugging.",
    ],
    timeline: "BEDO Innovating Education - Oct 2024 to present",
    problem:
      "Industrial automation logic can be difficult to understand when learners only see diagrams or static ladder logic.",
    solution:
      "Built a Unity-based digital twin that lets learners toggle devices, observe state changes, and connect control behavior to visible outcomes.",
    challenges: [
      "Keeping simulation state readable while still feeling responsive.",
      "Mapping PLC-style concepts into Unity components and UI feedback.",
      "Designing a layout that works for demos and technical review.",
    ],
    impact: [
      "Created a clearer way to explain device states and automation flow.",
      "Made debugging and demonstration easier through visible feedback.",
      "Established a reusable pattern for future industrial training modules.",
    ],
    featured: true,
    webglAvailable: true,
  },
  {
    id: "ivris-ar-interior-visualization",
    title: "Ivris AR Interior Visualization",
    category: "AR / Interior Visualization",
    summary:
      "A cross-platform Unity app for room visualization with runtime 3D model loading, AR previewing, and collaborative WebGL editing.",
    role: "Unity and AR Application Developer",
    platform: ["Unity", "WebGL", "Android", "iOS"],
    tech: ["Unity", "C#", "AR", "Photon", "PlayFab", "Node.js", "Render"],
    thumbnail: ivrisThumb,
    demoUrl: "#demo",
    caseStudyUrl: "/projects/ivris-ar-interior-visualization",
    highlights: [
      "Implemented runtime 3D model loading for furniture and room assets.",
      "Built Photon-based multiplayer room editing for real-time WebGL collaboration.",
      "Integrated Android and iOS AR previewing with PlayFab and a Render-hosted backend.",
    ],
    timeline: "Ivris - Jun 2024 to present",
    problem:
      "Interior visualization needs to work across WebGL, mobile, and AR without forcing every user into the same workflow.",
    solution:
      "Built a Unity app architecture that supports runtime asset loading, shared room editing, AR previewing, and backend-driven content.",
    challenges: [
      "Keeping runtime model loading reliable across platforms.",
      "Synchronizing room edits in collaborative WebGL sessions.",
      "Connecting AR preview, user data, and hosted backend services cleanly.",
    ],
    impact: [
      "Created a practical visualization flow for furniture and room layout decisions.",
      "Supported collaborative editing for remote users.",
      "Expanded Unity work beyond simulations into AR product-style applications.",
    ],
    featured: true,
    webglAvailable: true,
  },
  {
    id: "fluid-physics-experiments",
    title: "Fluid Physics Experiments",
    category: "Educational Simulations",
    summary:
      "Unity experiments exploring fluid-like motion and interactive physics behavior for learning and visualization.",
    role: "Unity Developer",
    platform: ["Unity", "WebGL"],
    tech: ["Unity", "C#", "Physics", "Simulation", "WebGL"],
    thumbnail: fluidThumb,
    demoUrl: "#demo",
    caseStudyUrl: "/projects/fluid-physics-experiments",
    highlights: [
      "Implemented interactive fluid behavior prototypes.",
      "Tuned parameters for stable and understandable visual output.",
      "Built UI controls for changing simulation variables.",
    ],
    timeline: "Research prototype",
    problem:
      "Physics concepts are often explained passively, which makes parameter effects hard to inspect.",
    solution:
      "Created real-time experiments where learners can adjust values and see immediate visual responses in the simulation.",
    challenges: [
      "Balancing visual clarity against physical believability.",
      "Preventing parameter ranges from producing unstable or confusing output.",
      "Creating controls that support experimentation without overwhelming users.",
    ],
    impact: [
      "Supported faster intuition-building around motion and force.",
      "Turned parameter changes into visible cause-and-effect moments.",
      "Produced a flexible base for future simulation lessons.",
    ],
    webglAvailable: true,
  },
  {
    id: "nescafe-surfing-vr-booth",
    title: "Nescafe Ice Coffee VR Surfing Experience",
    category: "VR & Interactive Booths",
    summary: "A short VR surfing experience created for a marketing booth activation.",
    role: "Unity Developer",
    platform: ["Unity", "VR headset"],
    tech: ["Unity", "C#", "VR", "Interaction Design"],
    thumbnail: vrThumb,
    demoUrl: "#demo",
    caseStudyUrl: "/projects/nescafe-surfing-vr-booth",
    highlights: [
      "Built a short interactive VR experience for public use.",
      "Focused on quick onboarding and easy-to-understand controls.",
      "Designed the experience for a live event environment.",
    ],
    timeline: "Freelance booth project",
    problem:
      "Live booth experiences need to be understandable in seconds while still feeling memorable.",
    solution:
      "Built a compact VR interaction loop with simple feedback, clear movement, and quick reset behavior for event flow.",
    challenges: [
      "Reducing onboarding friction for first-time VR users.",
      "Keeping the experience reliable during repeated public sessions.",
      "Designing feedback that reads clearly inside a headset.",
    ],
    impact: [
      "Delivered an approachable interactive booth experience.",
      "Kept sessions short enough for live event throughput.",
      "Showed Unity's usefulness beyond traditional games.",
    ],
    featured: true,
  },
  {
    id: "meta-quest-vr-training-suite",
    title: "Meta Quest VR Training Suite",
    category: "VR & Interactive Booths",
    summary:
      "A set of Meta Quest 2 VR applications for educational, lab, onboarding, and medical training scenarios.",
    role: "Unity Virtual Reality Developer",
    platform: ["Unity", "Meta Quest 2", "VR"],
    tech: ["Unity", "C#", "VR", "Auto Hand", "360 Video", "Android"],
    thumbnail: vrTrainingThumb,
    demoUrl: "#demo",
    caseStudyUrl: "/projects/meta-quest-vr-training-suite",
    highlights: [
      "Built VR onboarding and lab simulation experiences with interactive tools.",
      "Developed a viscosity lab simulation for educational training.",
      "Created a multi-angle 360 surgical operation viewer with camera switching.",
    ],
    timeline: "Tanta University - Dec 2023 to Oct 2024",
    problem:
      "Training users need safe, repeatable practice spaces for lab and medical concepts before real-world exposure.",
    solution:
      "Built Meta Quest 2 VR experiences that use guided interaction, camera switching, and tool-based workflows for training.",
    challenges: [
      "Designing interactions that first-time VR users can understand quickly.",
      "Keeping lab and medical content structured without overloading the scene.",
      "Managing 360 video viewpoints and training flow inside the headset.",
    ],
    impact: [
      "Supported educational, lab, and medical training use cases.",
      "Improved onboarding into VR interactions.",
      "Created reusable experience patterns for future Quest training modules.",
    ],
  },
  {
    id: "ibm-call-for-code-agri-tech",
    title: "IBM Call for Code Agri-Tech Solution",
    category: "IoT / ML / Social Impact",
    summary:
      "Regional-winning agri-tech solution using IoT and machine learning to monitor plant health and reduce water usage.",
    role: "Developer / Team Member",
    platform: ["IoT prototype", "Data dashboard"],
    tech: ["IoT", "Machine Learning", "Data Monitoring"],
    thumbnail: agriThumb,
    caseStudyUrl: "/projects/ibm-call-for-code-agri-tech",
    highlights: [
      "Contributed to a regional-winning social impact project.",
      "Helped present a system focused on water efficiency and plant health.",
      "Worked on a solution combining sensor data and intelligent decision support.",
    ],
    timeline: "Hackathon / competition",
    problem:
      "Farmers need earlier signals about plant health and water usage to make better decisions.",
    solution:
      "Combined sensor-oriented monitoring concepts with intelligent analysis to support more efficient plant care.",
    challenges: [
      "Explaining technical sensor and ML ideas clearly to judges.",
      "Turning a broad social impact problem into a focused prototype.",
      "Coordinating technical and presentation work under time pressure.",
    ],
    impact: [
      "Earned regional recognition in IBM Call for Code.",
      "Connected software, data, and sustainability goals.",
      "Strengthened experience building for practical problem-solving contexts.",
    ],
    featured: true,
  },
  {
    id: "pid-control-station",
    title: "PID Control Station",
    category: "Educational Simulations",
    summary:
      "A visual control-system station that demonstrates target tracking, overshoot, and tuning tradeoffs.",
    role: "Unity Developer",
    platform: ["Unity", "WebGL"],
    tech: ["Unity", "C#", "Control Systems", "uGUI"],
    thumbnail: pidThumb,
    demoUrl: "#demo",
    caseStudyUrl: "/projects/pid-control-station",
    highlights: [
      "Designed a simple graph-driven control visualization.",
      "Mapped parameter changes to readable real-time behavior.",
      "Created a compact station suitable for an interactive lab.",
    ],
    timeline: "Concept prototype",
    problem:
      "PID tuning can feel abstract when learners only see equations and numeric output.",
    solution:
      "Presented control response visually with target lines, response curves, and parameter feedback.",
    challenges: [
      "Making graph behavior legible at a small size.",
      "Keeping controls minimal while still showing meaningful differences.",
      "Explaining technical behavior through interaction instead of long copy.",
    ],
    impact: [
      "Made tuning behavior easier to compare at a glance.",
      "Created a reusable station for control-system lessons.",
      "Supported quick recruiter and technical-lead scanning.",
    ],
    webglAvailable: true,
  },
  {
    id: "webgl-ui-systems",
    title: "WebGL UI Systems Sandbox",
    category: "Game Systems & Architecture",
    summary:
      "A modular Unity UI sandbox for event-driven screens, debug overlays, and WebGL-friendly interaction patterns.",
    role: "Unity Developer",
    platform: ["Unity", "WebGL"],
    tech: ["Unity", "C#", "ScriptableObject architecture", "SOAP", "WebGL"],
    thumbnail: webglThumb,
    githubUrl: "#",
    caseStudyUrl: "/projects/webgl-ui-systems",
    highlights: [
      "Organized UI flows with modular data and events.",
      "Built debug-friendly screens for simulation projects.",
      "Focused on maintainable patterns for browser deployment.",
    ],
    timeline: "Ongoing sandbox",
    problem:
      "Simulation projects need UI that can evolve without turning every screen into tangled references.",
    solution:
      "Used modular event channels and data-driven screens to keep interaction systems easier to extend.",
    challenges: [
      "Keeping architecture lightweight enough for prototypes.",
      "Designing reusable UI without over-abstracting simple screens.",
      "Maintaining responsive browser behavior in WebGL builds.",
    ],
    impact: [
      "Created a cleaner starting point for future interactive tools.",
      "Improved debugging and iteration speed.",
      "Reduced duplicated UI logic across prototypes.",
    ],
    webglAvailable: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProjectById = (id: string | undefined) =>
  projects.find((project) => project.id === id);

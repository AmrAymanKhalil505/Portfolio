import plcThumb from "../assets/plc-digital-twin.svg";
import fluidThumb from "../assets/fluid-physics.svg";
import vrThumb from "../assets/vr-booth.svg";
import agriThumb from "../assets/agri-tech.svg";
import pidThumb from "../assets/pid-control.svg";
import webglThumb from "../assets/webgl-systems.svg";
import ivrisThumb from "../assets/ivris-ar-room.svg";
import vrTrainingThumb from "../assets/vr-training-suite.svg";
import cimSystemImage from "../assets/projects/cim/thumnail.jpg";
import cimLoadingImage from "../assets/projects/cim/Digital-Twin-Loading-Station.png";
import cimLaserImage from "../assets/projects/cim/CNC Laser thunail .jpg";
import cimRobotInterpreterImage from "../assets/projects/cim/Inter01.jpg";
import cimBlockEditorImage from "../assets/projects/cim/Inter02.jpg";
import cimBlockValidationImage from "../assets/projects/cim/Inter03.jpg";
import ivrisMobileServicesImage from "../assets/projects/Ivris/ivris app 02.webp";
import ivrisArPreviewImage from "../assets/projects/Ivris/Ivris app 03.webp";
import ivrisRoomEditorImage from "../assets/projects/Ivris/Screenshot2025-04-01at8.36.11PM.png";
import ivrisDollhouseImage from "../assets/projects/Ivris/Screenshot_2025-04-01_at_8.38.02_PM.png";
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
  aliases?: string[];
  hidden?: boolean;
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
  demoLabel?: string;
  githubUrl?: string;
  caseStudyUrl: string;
  productContext?: {
    label: string;
    url?: string;
  }[];
  attributionNote?: string;
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

const cimStationDetails = {
  loading: {
    components: [
      "Part presence sensing",
      "Material/state sensing",
      "Position feedback sensing",
      "Pneumatic transfer behavior",
      "Valve-driven actuator state",
      "Conveyor motor behavior",
      "Magazine/feed area behavior",
      "Start / running / stop indicators",
      "Process ON/OFF",
      "Emergency state",
    ],
    behaviors: [
      "Part detection",
      "Part extraction",
      "Conveyor movement",
      "Material/state classification",
      "Motor start / stop logic",
      "PLC-style process states",
    ],
  },
  storage: {
    components: [
      "Part detection sensors",
      "Material/state sensing",
      "Position feedback sensors",
      "Linear transfer actuation",
      "Guided movement behavior",
      "Rotary transfer behavior",
      "Gripper open/close behavior",
      "Valve-driven actuator states",
      "Indexed positioning behavior",
      "Storage slot logic",
      "Part receiving area",
      "Start / running / stop indicators",
      "Process ON/OFF",
      "Emergency state",
    ],
    behaviors: [
      "Part receiving",
      "Rotary movement toward part",
      "Gripper open / close",
      "Part transfer into storage pockets",
      "Pocket selection",
      "Full-pocket detection",
      "Stepper positioning",
      "PLC-style process states",
    ],
  },
  robot: {
    components: [
      "Robot transport behavior",
      "Pick/place interaction state",
      "Part detection sensing",
      "Gripper interaction behavior",
      "Start / running / stop indicators",
      "Process ON/OFF",
      "Emergency state",
      "Robot command state",
      "Robot completion state",
    ],
    behaviors: [
      "Robot arm transport",
      "Pick / place behavior",
      "Tool / gripper interaction",
      "Sensor-triggered process logic",
      "Start / running / stop / emergency states",
      "Robot command / completion transitions",
    ],
  },
  laser: {
    components: [
      "Tool-head movement",
      "Indexed positioning behavior",
      "Sample detection sensing",
      "Guided clamping behavior",
      "Valve-driven actuator state",
      "Limit / home feedback",
      "Start / running / stop indicators",
      "Process ON/OFF",
      "Emergency state",
    ],
    behaviors: [
      "Sample detection",
      "Clamp/release behavior",
      "Tool-head movement",
      "Operation sequence",
      "Return-to-home behavior",
      "Actuator reset",
      "PLC-style stage transitions",
    ],
  },
  drilling: {
    components: [
      "Tool operation movement",
      "Indexed positioning behavior",
      "Sample detection sensing",
      "Guided clamping behavior",
      "Valve-driven actuator state",
      "Limit / home feedback",
      "Start / running / stop indicators",
      "Process ON/OFF",
      "Emergency state",
    ],
    behaviors: [
      "Sample detection",
      "Clamp/release behavior",
      "Tool operation motion",
      "Positioning behavior",
      "Return-to-home behavior",
      "Actuator reset",
      "PLC-style operation sequence",
    ],
  },
};

const bedoAttributionNote =
  "Product names and hardware references belong to BEDO and their respective owners. This portfolio page focuses on my Unity/WebGL simulation, UI, visualization, and educational implementation work, not ownership of the physical training product or full hardware design. Any media, module previews, or gallery content shown here are my portfolio presentation, not official BEDO-provided demos.";

const ivrisAttributionNote =
  "Ivris product names, service pages, and brand references belong to Ivris. This portfolio page focuses on my Unity, AR, WebGL collaboration, runtime content loading, and integration work for the application.";

const mr109StationBreakdown = [
  {
    title: "MR109 - Loading Station",
    description:
      "Simulates feeding behavior where workpieces are released from a magazine and transferred one by one into the process.",
    bullets: [
      "Workpiece detection in the magazine/feed area.",
      "Pneumatic pushing and releasing behavior.",
      "Sensor-based end-position feedback.",
      "Sequential part feeding with start, running, stop, and emergency states.",
    ],
  },
  {
    title: "MR109 - Transporting Station",
    description:
      "Simulates moving workpieces between stations using conveyor or linear transport behavior.",
    bullets: [
      "Conveyor and transport motion.",
      "Workpiece detection along the transfer path.",
      "Start/stop logic based on sensor feedback.",
      "Motor-driven movement visualization and transfer timing.",
    ],
  },
  {
    title: "MR109 - Measuring Station",
    description:
      "Simulates inspection or measurement behavior before the workpiece continues through the process.",
    bullets: [
      "Part arrival detection.",
      "Sensor-based measurement or inspection state.",
      "Result-driven transition to the next station.",
      "Integration with sorting or downstream station logic.",
    ],
  },
  {
    title: "MR109 - Processing Station",
    description:
      "Simulates an operation cycle on a detected workpiece, including actuator movement and reset behavior.",
    bullets: [
      "Part detection before processing.",
      "Actuator movement for the process operation.",
      "Clamp/hold behavior where required.",
      "Operation running, done, return-to-home, and reset states.",
    ],
  },
  {
    title: "MR109 - Assembly Station",
    description:
      "Simulates part positioning and actuator-based assembly behavior inside a training workflow.",
    bullets: [
      "Part positioning behavior.",
      "Actuator-based assembly motion.",
      "Sensor confirmation after movement.",
      "Done state after the assembly cycle.",
    ],
  },
  {
    title: "MR109 - Buffering Station",
    description:
      "Simulates temporary workpiece holding and queue-like flow control between process stages.",
    bullets: [
      "Workpiece accumulation behavior.",
      "Buffer full/empty detection.",
      "Release logic based on next-station availability.",
      "Sensor-triggered transfer behavior.",
    ],
  },
  {
    title: "MR109 - Sorting Station",
    description:
      "Simulates classifying and routing workpieces based on sensor results and station state.",
    bullets: [
      "Workpiece detection and classification.",
      "Material/type routing behavior.",
      "Conveyor movement through the sorting area.",
      "Sorting actuator or diverter behavior.",
    ],
  },
  {
    title: "MR109 - Robot Station",
    description:
      "Simulates robot handling and transfer behavior between stations.",
    bullets: [
      "Robot arm movement.",
      "Pick/place logic.",
      "Gripper or vacuum-style handling behavior.",
      "Robot ready, busy, and done state transitions.",
    ],
  },
  {
    title: "MR109 - Storage Station",
    description:
      "Simulates receiving workpieces and placing them into storage positions or containers.",
    bullets: [
      "Receiving area detection.",
      "Transfer and placement behavior.",
      "Gripper open/close behavior.",
      "Storage slot full/available logic.",
    ],
  },
];

const pidLabModules = [
  {
    id: "mpc100-pressure-process-control",
    title: "MPC100 Pressure Process Control",
    caption:
      "Digital shadow of a pressure-control trainer where students tune PID gains, observe pressure response, introduce disturbance, and analyze system performance.",
    controlledVariable: "Pressure",
    actuator: "Pump and proportional valve behavior",
    feedback: "Pressure sensor feedback",
    disturbance: "Needle valve / pressure release behavior",
    components: [
      "Pressure vessel visualization",
      "Pump actuator behavior",
      "Pressure sensor feedback",
      "Needle valve disturbance",
      "Proportional valve response",
      "Set point, pressure, error, and control signal graphs",
    ],
    behaviors: [
      "Closed-loop pressure regulation",
      "P, PI, and PID gain comparison",
      "Rise time, settling, overshoot, and steady-state error analysis",
      "Disturbance response visualization",
    ],
  },
  {
    id: "mpc101-temperature-process-control",
    title: "MPC101 Temperature Process Control",
    caption:
      "Digital shadow of a temperature-control trainer where students tune PID gains, observe heating/cooling behavior, apply fan disturbance, and analyze response curves.",
    controlledVariable: "Temperature",
    actuator: "Peltier heating/cooling behavior",
    feedback: "Temperature sensor feedback",
    disturbance: "External fan cooling behavior",
    components: [
      "Peltier heating and cooling state",
      "Temperature sensor feedback",
      "External fan disturbance",
      "Heating, cooling, and fan indicators",
      "Set point, temperature, error, and controller signal graphs",
    ],
    behaviors: [
      "Temperature regulation",
      "Heating/cooling response comparison",
      "Fan disturbance response",
      "P, PI, and PID tuning workflow",
    ],
  },
  {
    id: "mpc102-dc-motor-speed-control",
    title: "MPC102 DC Motor Speed Control",
    caption:
      "Digital shadow of a DC motor speed-control trainer where students tune PID gains, observe RPM response, apply load disturbance, and compare control behavior.",
    controlledVariable: "Motor speed / RPM",
    actuator: "DC motor drive behavior",
    feedback: "Speed sensor feedback",
    disturbance: "Generator/load behavior",
    components: [
      "DC motor speed visualization",
      "Shaft speed feedback",
      "Generator/load disturbance",
      "Digital RPM display",
      "Speed response, error, and control signal graphs",
    ],
    behaviors: [
      "Open-loop and closed-loop comparison",
      "P, PI, and PID speed response comparison",
      "Load disturbance response",
      "Acceleration, overshoot, settling, and steady-state speed analysis",
    ],
  },
  {
    id: "mpc103-dc-motor-position-control",
    title: "MPC103 DC Motor Position Control",
    caption:
      "Virtual control lab for DC motor position control with editable motor parameters, PID tuning, real-time response graphs, and guided experiments.",
    controlledVariable: "Motor position",
    actuator: "DC motor position movement",
    feedback: "Calculated position and response feedback",
    disturbance: "Editable motor/friction parameters",
    components: [
      "3D DC motor position trainer",
      "Editable motor parameters",
      "P, PI, PD, and PID controller modes",
      "Open-loop and closed-loop toggle",
      "Set point, position, error, speed, and control signal graphs",
      "Exportable plots, screenshots, and lab data",
    ],
    behaviors: [
      "Step-response experiment workflow",
      "Controller gain tuning",
      "Stability feedback",
      "Rise time, settling time, overshoot, steady-state error, and power analysis",
    ],
  },
  {
    id: "mpc104-level-process-control",
    title: "MPC104 Level Process Control",
    caption:
      "Digital shadow of a liquid-level PID trainer where students tune controller gains, observe tank level response, apply valve disturbance, and analyze closed-loop behavior.",
    controlledVariable: "Liquid level",
    actuator: "Pump filling behavior",
    feedback: "Pressure-based level feedback",
    disturbance: "Proportional valve flow disturbance",
    components: [
      "Lower and upper tank visualization",
      "Pump actuator behavior",
      "Pressure sensor level feedback",
      "Proportional valve disturbance",
      "Level response, error, and control signal graphs",
    ],
    behaviors: [
      "Tank filling response",
      "P, PI, and PID level-control comparison",
      "Valve disturbance response",
      "Fill response, overshoot, settling, and steady-state error analysis",
    ],
  },
  {
    id: "mpc105-flow-process-control",
    title: "MPC105 Flow Process Control",
    caption:
      "Digital shadow of a flow-control PID trainer where students tune controller gains, observe flow-rate response, apply valve disturbance, and compare control behavior.",
    controlledVariable: "Liquid flow rate",
    actuator: "Pump flow behavior",
    feedback: "Flowmeter feedback",
    disturbance: "Proportional valve flow restriction",
    components: [
      "Pump-driven flow loop",
      "Flowmeter feedback",
      "Rotameter-style visual reading",
      "Proportional valve disturbance",
      "Flow response, error, and control signal graphs",
    ],
    behaviors: [
      "Open-loop and closed-loop comparison",
      "P, PI, and PID flow-control comparison",
      "Valve disturbance response",
      "Flow response speed, overshoot, settling, and steady-state error analysis",
    ],
  },
];

const engineeringEducationModules = [
  {
    id: "bernoulli-principle-virtual-lab",
    title: "Bernoulli Principle Virtual Lab",
    caption:
      "Unity virtual lab for visualizing Bernoulli's principle through venturi flow, pressure distribution, velocity changes, and real-time measurement feedback.",
    domain: "Fluid Mechanics",
    learningGoal:
      "Show how changing flow area affects velocity and static pressure across a venturi section.",
    components: [
      "Venturi tube / flow channel visualization",
      "Water flow path",
      "Pressure tapping points",
      "Manometer-style pressure indicators",
      "Flow control valve",
      "Measuring scale and experiment UI",
    ],
    behaviors: [
      "Flow moving through different cross-section areas",
      "Velocity increasing in narrow sections",
      "Static pressure decreasing at high-velocity regions",
      "Flow-rate changes affecting all pressure and velocity readings",
      "Comparison between theoretical and measured-style values",
    ],
  },
  {
    id: "laminar-flow-visualization-virtual-lab",
    title: "Laminar Flow Visualization Virtual Lab",
    caption:
      "Unity virtual lab for visualizing laminar streamlines, source/sink behavior, obstacle interaction, and flow changes through different channel geometries.",
    domain: "Fluid Mechanics",
    learningGoal:
      "Make normally invisible streamline behavior visible around boundaries, obstacles, sources, sinks, and geometry changes.",
    components: [
      "Transparent flow channel",
      "Streamline / dye injection points",
      "Flow source and sink behavior",
      "Obstacle or shape inserts",
      "Flow control valve",
      "Measuring grid and guided experiment UI",
    ],
    behaviors: [
      "Smooth laminar streamline movement",
      "Streamlines bending around obstacles",
      "Flow contraction and expansion through cross-section changes",
      "Source/sink flow pattern visualization",
      "Flow-rate changes affecting streamline density and speed",
    ],
  },
  {
    id: "ev117-fuel-cell-vehicle-digital-lab",
    title: "EV117 Fuel Cell Vehicle Digital Lab",
    caption:
      "Unity educational simulation for a fuel-cell vehicle trainer, visualizing hydrogen supply, fuel-cell power generation, battery support, monitoring data, and vehicle test behavior.",
    domain: "Energy Systems / Automotive Training",
    learningGoal:
      "Explain the high-level energy path from hydrogen supply to fuel-cell generation, battery support, motor load, and monitoring data.",
    components: [
      "Fuel cell stack visualization",
      "Hydrogen storage and pressure regulation path",
      "Battery and power-flow display",
      "Monitoring dashboard",
      "Vehicle body / chassis and drivetrain visualization",
      "Test bench and guided learning UI",
    ],
    behaviors: [
      "Hydrogen supply into the fuel-cell system",
      "Pressure regulation before fuel-cell input",
      "Fuel cell generating electrical power",
      "Battery support / hybrid energy behavior",
      "Vehicle motor consuming power",
      "Monitoring values changing during operation",
    ],
  },
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
    tech: ["Unity", "C#", "WebGL", "Simulation", "Industrial Training", "PLC Concepts"],
    aliases: ["cim-station-behavior-simulation-gallery"],
    thumbnail: cimSystemImage,
    previewGif: "https://youtu.be/pkXqNAiVa8s",
    demoUrl: "#demo",
    demoLabel: "View Gallery",
    caseStudyUrl: "/projects/cim-station-behavior-simulation",
    productContext: [
      {
        label: "BEDO MR110 Advanced Modular CIM",
        url: "https://bedoeg.com/product/mr110/",
      },
    ],
    attributionNote: bedoAttributionNote,
    media: [
      {
        id: "full-system-run",
        type: "youtube",
        title: "Full System Run",
        youtubeId: "https://youtu.be/pkXqNAiVa8s",
        thumbnail: "https://i.ytimg.com/vi/pkXqNAiVa8s/hqdefault.jpg",
        caption:
          "Full training-simulation run showing coordinated station behavior, sensor-driven state changes, actuator movement, and PLC-style process transitions.",
      },
      {
        id: "laser-cnc-working",
        type: "youtube",
        title: "Laser Marking Station Working",
        youtubeId: "https://youtu.be/kR9O9rkUtwk",
        thumbnail: "https://i.ytimg.com/vi/kR9O9rkUtwk/hqdefault.jpg",
        caption:
          "CNC-style station simulation showing sample detection, clamp/release behavior, tool-head movement, operation sequencing, return-to-home behavior, actuator reset, and PLC-style stage transitions.",
      },
      {
        id: "loading-tia-portal",
        type: "youtube",
        title: "Loading Station Logic Preview",
        youtubeId: "https://youtu.be/5KX95fT4f5U",
        thumbnail: "https://i.ytimg.com/vi/5KX95fT4f5U/hqdefault.jpg",
        caption:
          "Loading station logic preview showing part sensing, transfer behavior, conveyor movement, material/state classification, motor start/stop logic, process indicators, ON/OFF state, and emergency behavior.",
      },
      {
        id: "system-overview",
        type: "image",
        title: "Full CIM Station Overview",
        src: cimSystemImage,
        thumbnail: cimSystemImage,
        caption:
          "Overall Unity scene for an industrial training simulation, showing connected station modules, robot arm transport, laser marking and drilling modules, station panels, process controls, indicators, and shared lab context used to demonstrate workflow behavior.",
      },
      {
        id: "loading-station-photo",
        type: "image",
        title: "Loading Station Simulation",
        src: cimLoadingImage,
        thumbnail: cimLoadingImage,
        caption:
          "Standalone loading station view. I simulated part sensing, state/material detection, position feedback, transfer actuation, conveyor movement, process ON/OFF, emergency behavior, and start/running/stop indicators. The behavior covers part detection, part extraction, conveyor movement, material/state classification, motor start/stop logic, and PLC-style states.",
        details: {
          title: "Loading Station Details",
          components: cimStationDetails.loading.components,
          behaviors: cimStationDetails.loading.behaviors,
        },
      },
      {
        id: "storage-station-photo",
        type: "image",
        title: "Storage Station Simulation",
        src: cimSystemImage,
        thumbnail: cimSystemImage,
        caption:
          "Storage station gallery entry. Replace this image with the standalone storage station screenshot once it is added; the details below already describe the simulated storage station components and behavior.",
        details: {
          title: "Storage Station Details",
          components: cimStationDetails.storage.components,
          behaviors: cimStationDetails.storage.behaviors,
        },
      },
      {
        id: "robot-station-photo",
        type: "image",
        title: "Robot Arm Station Simulation",
        src: cimSystemImage,
        thumbnail: cimSystemImage,
        caption:
          "Robot arm station gallery entry. Replace this image with the standalone robot arm station screenshot once it is added; the details below already describe the simulated robot arm station components and behavior.",
        details: {
          title: "Robot Arm Station Details",
          components: cimStationDetails.robot.components,
          behaviors: cimStationDetails.robot.behaviors,
        },
      },
      {
        id: "cnc-laser-station-photo",
        type: "image",
        title: "Laser Marking Station Simulation",
        src: cimLaserImage,
        thumbnail: cimLaserImage,
        caption:
          "Standalone laser marking station view. I simulated sample sensing, guided clamp/release behavior, tool-head movement, indexed positioning, limit/home feedback, process ON/OFF, emergency behavior, and start/running/stop indicators. The behavior covers sample detection, tool operation sequencing, return-to-home behavior, actuator reset, and PLC-style stage transitions.",
        details: {
          title: "Laser Marking Station Details",
          components: cimStationDetails.laser.components,
          behaviors: cimStationDetails.laser.behaviors,
        },
      },
      {
        id: "cnc-drilling-station-photo",
        type: "image",
        title: "Electrical Drilling Station Simulation",
        src: cimSystemImage,
        thumbnail: cimSystemImage,
        caption:
          "Electrical drilling station gallery entry. Replace this image with the standalone drilling station screenshot once it is added; the details below already describe the simulated drilling station components and behavior.",
        details: {
          title: "Electrical Drilling Station Details",
          components: cimStationDetails.drilling.components,
          behaviors: cimStationDetails.drilling.behaviors,
        },
      },
      {
        id: "robot-interpreter-photo",
        type: "image",
        title: "Educational Robot Command Preview",
        src: cimRobotInterpreterImage,
        thumbnail: cimRobotInterpreterImage,
        caption:
          "Educational command preview for teaching and testing robot-style movement logic. It connects command steps to station behavior such as pick/place movement, conditional flow, and command/completion state transitions.",
        details: {
          title: "Educational Robot Command Details",
          notes: [
            "Displays command-oriented steps beside the simulated training scene.",
            "Supports previewing, editing, and validating command sequences.",
            "Helps students connect robot-style commands with station-level events, home states, command states, and completion states.",
          ],
        },
      },
      {
        id: "block-education-editor",
        type: "image",
        title: "Educational Command Editor",
        src: cimBlockEditorImage,
        thumbnail: cimBlockEditorImage,
        caption:
          "Educational block-by-block command editor inspired by visual learning tools. Students can add, edit, order, and validate command blocks instead of reading raw command syntax first, making robot/CNC-style logic easier to learn inside the simulation.",
        details: {
          title: "Educational Command Editor Details",
          notes: [
            "Turns robot/CNC-style command editing into a guided block workflow.",
            "Lets students add and edit command rows without writing every line as raw code first.",
            "Supports teaching command-sequencing concepts through readable blocks, labels, conditions, and parameters.",
          ],
        },
      },
      {
        id: "block-education-validation",
        type: "image",
        title: "Command Validation Feedback",
        src: cimBlockValidationImage,
        thumbnail: cimBlockValidationImage,
        caption:
          "Validation view for the educational command system. The interface reports command-structure issues before execution, helping students understand why a robot/CNC-style sequence needs correction before running.",
        details: {
          title: "Validation Details",
          notes: [
            "Shows compile feedback directly under the block editor.",
            "Reports line-specific issues so students can correct the command that failed.",
            "Supports learning by explaining missing conditions, missing parameters, invalid values, and command-structure problems before execution.",
          ],
        },
      },
    ],
    highlights: [
      "Simulated motion, pneumatic actuation, and digital behavior across multiple CIM stations.",
      "Built behavior for loading, storage, robot arm, laser marking, and electrical drilling modules.",
      "Visualized sensor logic, actuator states, and PLC-style process transitions.",
      "Added interpreter-style interfaces for robot and CNC behavior visualization.",
    ],
    timeline: "Industrial training simulation project",
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
      "CIM Station Behavior Simulation is a Unity industrial training project for inspecting station behavior in one visual environment. The focus is the cause-and-effect chain behind each module: sensors detect changes, actuators move, control states update, motors start or stop, and PLC-style process states respond.",
      "The gallery shows the simulation from two angles: process demos and station/interface views. Under the gallery, each station is described by the functional systems I simulated and the behavior those systems create, so a technical reviewer can understand the engineering work without exposing internal implementation details.",
    ],
    simulatedBehaviors: [
      {
        title: "Motion Behavior",
        bullets: [
          "Conveyor and transfer movement",
          "Robot arm transport behavior",
          "CNC-style tool movement",
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
          "Part presence sensing",
          "Material/state sensing",
          "Position feedback sensing",
          "Actuator state feedback",
          "Process trigger sensing",
          "Start, running, stop, ready, emergency, and done states",
        ],
      },
    ],
    stationBreakdown: [
      {
        title: "Loading Station",
        description:
          "Simulates the entry point of the CIM process: detecting a part, extracting it pneumatically, moving it on a conveyor, and classifying material behavior before the motor stops.",
        bullets: [
          `Components: ${cimStationDetails.loading.components.join(", ")}.`,
          `Behavior: ${cimStationDetails.loading.behaviors.join(", ")}.`,
        ],
      },
      {
        title: "Storage Station",
        description:
          "Simulates receiving parts from the process flow, rotating toward them, gripping them, and transferring them into indexed storage pockets.",
        bullets: [
          `Components: ${cimStationDetails.storage.components.join(", ")}.`,
          `Behavior: ${cimStationDetails.storage.behaviors.join(", ")}.`,
        ],
      },
      {
        title: "Robot Arm Station",
        description:
          "Simulates robot transport between stations, including the signals and interaction points needed to coordinate pick/place behavior with the rest of the CIM process.",
        bullets: [
          `Components: ${cimStationDetails.robot.components.join(", ")}.`,
          `Behavior: ${cimStationDetails.robot.behaviors.join(", ")}.`,
        ],
      },
      {
        title: "Laser Marking Station",
        description:
          "Simulates a laser marking operation sequence from detecting a sample through clamping, moving the tool head, executing the operation, and returning to home.",
        bullets: [
          `Components: ${cimStationDetails.laser.components.join(", ")}.`,
          `Behavior: ${cimStationDetails.laser.behaviors.join(", ")}.`,
        ],
      },
      {
        title: "Electrical Drilling Station",
        description:
          "Simulates a separate CNC-style process with its own detection, clamping, positioning, tool motion, and reset sequence.",
        bullets: [
          `Components: ${cimStationDetails.drilling.components.join(", ")}.`,
          `Behavior: ${cimStationDetails.drilling.behaviors.join(", ")}.`,
        ],
      },
    ],
    technicalHighlights: [
      "Built behavior-driven station simulations in Unity.",
      "Simulated mechanical motion, pneumatic actuation, and digital sensor states.",
      "Represented PLC-style process concepts and machine status transitions.",
      "Created visual behavior for loading, storage, robot arm transport, laser marking, and electrical drilling station modules.",
      "Added educational command interfaces for robot/CNC-style process visualization.",
      "Designed the project for industrial training, demonstration, and digital twin style presentation.",
    ],
    featured: true,
    webglAvailable: true,
    hidden: true,
  },
  {
    id: "industrial-training-simulation-systems",
    title: "Industrial Training Simulation Systems",
    category: "Digital Twin / Industrial Training",
    summary:
      "A grouped showcase of Unity/WebGL industrial training simulations for MR110 and MR109 systems, focused on station behavior, process states, and visual cause-and-effect feedback.",
    role: "Unity Developer",
    platform: ["Unity", "WebGL", "Industrial training"],
    tech: ["Unity", "C#", "WebGL", "Simulation", "Digital Twin", "Mechatronics", "PLC Concepts"],
    thumbnail: cimSystemImage,
    demoUrl: "#demo",
    demoLabel: "View Gallery",
    caseStudyUrl: "/projects/industrial-training-simulation-systems",
    productContext: [
      {
        label: "BEDO MR110 Advanced Modular CIM",
        url: "https://bedoeg.com/product/mr110/",
      },
      {
        label: "BEDO MR109 Compact Mechatronics Training System",
      },
    ],
    attributionNote: bedoAttributionNote,
    highlights: [
      "Built Unity-based training simulations for multi-station industrial systems.",
      "Simulated MR110 Advanced Modular CIM and MR109 Compact Mechatronics training workflows.",
      "Visualized station motion, sensor-driven events, actuator states, and process transitions.",
      "Created safe educational views that explain behavior without exposing internal implementation details.",
    ],
    timeline: "Grouped industrial training simulation work",
    problem:
      "Industrial training systems such as MR110 and MR109 can be difficult to understand when mechanical motion, sensing, actuation, and process state changes are separated across diagrams, hardware, and control tools.",
    solution:
      "Built Unity simulations that connect visible station behavior with PLC-style process concepts, allowing learners and reviewers to observe motion, state changes, and training workflows in one environment.",
    challenges: [
      "Representing industrial behavior clearly without publishing proprietary hardware details.",
      "Balancing technical depth with NDA-safe portfolio presentation.",
      "Keeping complex station interactions understandable through visual state feedback.",
    ],
    impact: [
      "Demonstrates experience building serious Unity simulations for industrial education.",
      "Shows ability to model station behavior, process flow, and training-oriented feedback.",
      "Creates a reusable public-facing umbrella for related company work without exposing every internal project.",
    ],
    featured: true,
  },
  {
    id: "pid-control-virtual-labs-suite",
    title: "PID Virtual Labs Suite",
    category: "Educational Simulations",
    summary:
      "Unity-based digital-shadow simulations for PID control trainers, designed to help students experiment with tuning, system response, disturbance behavior, and real-time visual feedback.",
    role: "Unity Developer",
    platform: ["Unity", "WebGL", "Virtual labs"],
    tech: ["Unity", "C#", "WebGL", "PID Control", "Control Systems", "Digital Shadow", "Virtual Lab", "Data Visualization"],
    thumbnail: pidThumb,
    demoUrl: "#demo",
    demoLabel: "View Lab Modules",
    caseStudyUrl: "/projects/pid-control-virtual-labs-suite",
    productContext: [
      { label: "BEDO MPC100 Pressure Process Control Trainer" },
      { label: "BEDO MPC101 Temperature Process Control Trainer" },
      { label: "BEDO MPC102 DC Motor Speed Control Trainer" },
      { label: "BEDO MPC103 DC Motor Position Control Trainer" },
      { label: "BEDO MPC104 Level Process Control Trainer" },
      { label: "BEDO MPC105 Flow Process Control Trainer" },
    ],
    attributionNote: bedoAttributionNote,
    media: pidLabModules.map((module) => ({
      id: module.id,
      type: "image" as const,
      title: module.title,
      src: pidThumb,
      thumbnail: pidThumb,
      caption: module.caption,
      details: {
        title: `${module.title} Details`,
        components: module.components,
        behaviors: module.behaviors,
        notes: [
          `Controlled variable: ${module.controlledVariable}.`,
          `Main actuator: ${module.actuator}.`,
          `Feedback signal: ${module.feedback}.`,
          `Disturbance/source of variation: ${module.disturbance}.`,
        ],
      },
    })),
    highlights: [
      "Built Unity digital-shadow modules for pressure, temperature, motor speed, motor position, level, and flow control trainers.",
      "Connected 3D visual feedback with setpoints, response curves, error signals, control outputs, and performance indicators.",
      "Created guided virtual-lab workflows where students compare open-loop, closed-loop, P, PI, PD, and PID behavior.",
    ],
    timeline: "Grouped control-systems virtual lab work",
    problem:
      "Control-system concepts are hard to evaluate when learners only see equations, static plots, or hardware behavior without a clear visual explanation.",
    solution:
      "Created Unity virtual labs where controller tuning, process response, disturbance behavior, and visual feedback update together, helping students compare behavior across different control scenarios.",
    challenges: [
      "Making control response readable for learners without overloading the UI.",
      "Presenting process-control work without exposing internal implementation details or unpublished lab files.",
      "Keeping simulation, graphing, and interaction responsive inside WebGL-friendly experiences.",
    ],
    impact: [
      "Shows experience building educational simulations for control systems and engineering labs.",
      "Demonstrates UI, plotting, and real-time feedback work in Unity.",
      "Provides a safe umbrella for related PID modules instead of publishing each company product separately.",
    ],
    overview: [
      "PID Virtual Labs Suite groups multiple Unity/WebGL digital-shadow modules for control-system education. The suite focuses on how PID tuning changes visible system response across pressure, temperature, DC motor speed, DC motor position, liquid level, and flow-rate trainers.",
      "Each module is presented through the controlled variable, actuator behavior, feedback signal, disturbance source, response visualization, and student workflow. The page stays portfolio-safe by explaining the learning behavior and Unity implementation without exposing internal project files or detailed proprietary logic.",
    ],
    simulatedBehaviors: [
      {
        title: "Control-System Interaction",
        bullets: [
          "Editable setpoints and PID gains.",
          "Open-loop and closed-loop comparison.",
          "P, PI, PD, and PID controller modes where relevant.",
          "Guided experiment steps for student workflows.",
        ],
      },
      {
        title: "Process Response Visualization",
        bullets: [
          "Pressure, temperature, speed, position, level, and flow response curves.",
          "Set point, process value, error, and control signal graphing.",
          "Performance metrics such as rise time, settling time, overshoot, and steady-state error.",
        ],
      },
      {
        title: "Disturbance and Feedback",
        bullets: [
          "Valve, fan, load, and parameter-based disturbance behavior.",
          "Sensor-style feedback for closed-loop regulation.",
          "Actuator response visualization tied to controller output.",
        ],
      },
    ],
    stationBreakdown: pidLabModules.map((module) => ({
      title: module.title,
      description: module.caption,
      bullets: [
        `Controlled variable: ${module.controlledVariable}.`,
        `Main actuator: ${module.actuator}.`,
        `Feedback: ${module.feedback}.`,
        `Disturbance/source of variation: ${module.disturbance}.`,
        `Core behavior: ${module.behaviors.join(", ")}.`,
      ],
    })),
    technicalHighlights: [
      "Built Unity-based digital-shadow modules for multiple PID control trainers.",
      "Connected visible 3D process behavior with calculated response curves and control-system UI.",
      "Implemented PID tuning workflows with setpoints, gains, response plots, and performance feedback.",
      "Represented disturbance behavior through valves, external cooling, load changes, and editable model parameters.",
      "Designed the suite for engineering education, guided experimentation, browser-friendly demos, and technical review.",
    ],
    featured: true,
  },
  {
    id: "engineering-education-virtual-labs",
    title: "Engineering Education Virtual Labs",
    category: "Educational Simulations",
    summary:
      "Unity-based educational simulations for fluid mechanics and energy systems, designed to turn abstract engineering concepts into visual, interactive lab experiences.",
    role: "Unity Developer",
    platform: ["Unity", "WebGL", "Educational simulations"],
    tech: ["Unity", "C#", "WebGL", "Virtual Lab", "Educational Simulation", "Data Visualization", "Interactive Learning"],
    thumbnail: fluidThumb,
    demoUrl: "#demo",
    demoLabel: "View Lab Modules",
    caseStudyUrl: "/projects/engineering-education-virtual-labs",
    productContext: [
      { label: "BEDO fluid mechanics virtual-lab training context" },
      { label: "BEDO EV117 Fuel Cell Vehicle training context" },
    ],
    attributionNote: bedoAttributionNote,
    media: engineeringEducationModules.map((module) => ({
      id: module.id,
      type: "image" as const,
      title: module.title,
      src: fluidThumb,
      thumbnail: fluidThumb,
      caption: module.caption,
      details: {
        title: `${module.title} Details`,
        components: module.components,
        behaviors: module.behaviors,
        notes: [
          `Domain: ${module.domain}.`,
          `Learning goal: ${module.learningGoal}`,
        ],
      },
    })),
    highlights: [
      "Built Unity virtual labs for Bernoulli principle visualization, laminar flow visualization, and fuel-cell vehicle training.",
      "Created interactive controls, guided experiment steps, measurement feedback, dashboards, and visual cause-and-effect learning flows.",
      "Grouped fluid mechanics and energy-system labs into a safer public-facing showcase instead of publishing each internal project separately.",
    ],
    timeline: "Grouped engineering education simulation work",
    problem:
      "Engineering concepts can be difficult to understand when learners cannot safely manipulate variables or observe cause and effect directly.",
    solution:
      "Built Unity/WebGL virtual labs that let learners interact with experiment variables, observe visual feedback, and understand fluid mechanics and energy-system behavior through guided simulation.",
    challenges: [
      "Designing educational interactions that are simple enough for students but useful for technical review.",
      "Choosing public-safe screenshots and videos that do not reveal internal curriculum or product details.",
      "Balancing scientific clarity, performance, and browser-friendly presentation.",
    ],
    impact: [
      "Demonstrates breadth across engineering education, physics visualization, and virtual lab workflows.",
      "Shows ability to build reusable interaction patterns for simulation-based learning.",
      "Creates a clean umbrella page for multiple lower-risk educational lab projects.",
    ],
    overview: [
      "Engineering Education Virtual Labs groups my Unity/WebGL educational simulations for fluid mechanics and energy systems. The page focuses on turning abstract classroom concepts into visible, interactive experiment workflows that learners can inspect and repeat.",
      "The modules cover Bernoulli principle behavior, laminar streamline visualization, and fuel-cell vehicle energy flow. Each module is described through the learning goal, simulated components, visual behavior, guided experiment flow, and public-safe technical contribution.",
    ],
    simulatedBehaviors: [
      {
        title: "Fluid Mechanics Visualization",
        bullets: [
          "Venturi flow, pressure distribution, and velocity change visualization.",
          "Laminar streamlines around obstacles, sources, sinks, and cross-section changes.",
          "Interactive flow controls with immediate visual feedback.",
        ],
      },
      {
        title: "Measurement and Data Feedback",
        bullets: [
          "Manometer-style pressure indicators and reading points.",
          "Real-time calculated values, tables, graphs, and comparison views.",
          "Guided experiment steps that connect visuals with lab observations.",
        ],
      },
      {
        title: "Energy-System Training",
        bullets: [
          "Hydrogen supply and pressure regulation visualization.",
          "Fuel-cell stack, battery support, and vehicle motor energy-flow behavior.",
          "Monitoring dashboard behavior for voltage, current, power, pressure, and operating state style feedback.",
        ],
      },
    ],
    stationBreakdown: engineeringEducationModules.map((module) => ({
      title: module.title,
      description: module.caption,
      bullets: [
        `Domain: ${module.domain}.`,
        `Learning goal: ${module.learningGoal}`,
        `Simulated components: ${module.components.join(", ")}.`,
        `Main behavior: ${module.behaviors.join(", ")}.`,
      ],
    })),
    technicalHighlights: [
      "Built Unity virtual lab scenes for fluid mechanics and energy-system education.",
      "Created visual simulations for pressure/velocity relationships, laminar flow patterns, and fuel-cell vehicle energy flow.",
      "Added interactive controls, guided experiment steps, measurement feedback, and dashboard-style educational UI.",
      "Designed the page to show engineering-simulation ability without overloading visitors with formulas or exposing internal curriculum files.",
      "Kept the public presentation focused on learning behavior, visual feedback, and reusable Unity simulation patterns.",
    ],
    featured: true,
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
    demoLabel: "View Project Preview",
    caseStudyUrl: "/projects/plc-digital-twin",
    productContext: [{ label: "BEDO industrial training / PLC education context" }],
    attributionNote: bedoAttributionNote,
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
    hidden: true,
  },
  {
    id: "ivris-ar-interior-visualization",
    title: "Ivris Customer Design Services App",
    category: "AR / Interior Visualization",
    summary:
      "Cross-platform Unity interior-design app for customer room visualization, runtime furniture/model loading, collaborative WebGL editing, and Android/iOS AR preview.",
    role: "Unity and AR Application Developer",
    platform: ["Unity", "WebGL", "Android", "iOS"],
    tech: ["Unity", "C#", "WebGL", "AR", "Photon", "PlayFab", "Node.js", "Render"],
    thumbnail: ivrisRoomEditorImage,
    demoUrl: "#demo",
    demoLabel: "View App Gallery",
    caseStudyUrl: "/projects/ivris-ar-interior-visualization",
    productContext: [
      {
        label: "Ivris Customer Design Services",
        url: "https://www.ivris.ai/collections/customer-design-services",
      },
      {
        label: "Ivris AR Viewer on Google Play",
        url: "https://play.google.com/store/apps/details?id=com.Ivris.IvrisArViewer&hl=en",
      },
    ],
    attributionNote: ivrisAttributionNote,
    media: [
      {
        id: "ivris-customer-services-mobile",
        type: "image",
        title: "Customer Design Services Mobile Context",
        src: ivrisMobileServicesImage,
        thumbnail: ivrisMobileServicesImage,
        caption:
          "Public Ivris mobile/service page context showing how the customer design experience is presented to users. I use this as product context for the Unity app work, not as a claim of ownership over the Ivris storefront.",
        details: {
          title: "Customer Service Context",
          notes: [
            "Shows the public-facing design-service entry point.",
            "Connects the portfolio case study to the customer journey around interior visualization.",
            "The implementation focus remains my Unity app work: runtime content, room editing, collaboration, AR preview, and backend integration.",
          ],
        },
      },
      {
        id: "ivris-ar-preview-mobile",
        type: "image",
        title: "Mobile AR Furniture Preview",
        src: ivrisArPreviewImage,
        thumbnail: ivrisArPreviewImage,
        caption:
          "Mobile AR-style preview showing furniture placed in a real room with transform controls. This supports the Android/iOS AR preview workflow described in the case study.",
        details: {
          title: "AR Preview Workflow",
          components: [
            "Mobile AR preview surface",
            "Placed furniture asset",
            "Transform controls for move, rotate, scale, and placement adjustment",
            "Real-room camera background",
          ],
          behaviors: [
            "Preview furniture in physical space",
            "Adjust placed item transform",
            "Review design choices on mobile",
            "Bridge customer visualization between app and room context",
          ],
        },
      },
      {
        id: "ivris-room-editor",
        type: "image",
        title: "WebGL Room Editing View",
        src: ivrisRoomEditorImage,
        thumbnail: ivrisRoomEditorImage,
        caption:
          "Room editing view with furniture placed in a scanned/interior space and a searchable asset catalog. This reflects the runtime furniture loading and collaborative editing work from the Unity/WebGL side.",
        details: {
          title: "Room Editing and Asset Loading",
          components: [
            "Room visualization scene",
            "Runtime furniture asset catalog",
            "Search and category filtering",
            "Editable placed furniture",
            "Tour, edit, floor-plan, and dollhouse modes",
          ],
          behaviors: [
            "Load furniture and room assets at runtime",
            "Place and review furniture in the room scene",
            "Support browser-based editing workflows",
            "Prepare layout state for collaboration and review",
          ],
        },
      },
      {
        id: "ivris-dollhouse-overview",
        type: "image",
        title: "Dollhouse / Floor Plan Overview",
        src: ivrisDollhouseImage,
        thumbnail: ivrisDollhouseImage,
        caption:
          "Dollhouse-style overview showing the full room layout, supporting spatial review beyond first-person room editing.",
        details: {
          title: "Spatial Review Modes",
          components: [
            "Dollhouse-style room overview",
            "Floor-plan navigation mode",
            "Placed furniture state",
            "Room-scale review camera",
          ],
          behaviors: [
            "Inspect full apartment/room layout",
            "Switch between editing and overview modes",
            "Review furniture placement from a spatial planning perspective",
            "Support customer-facing design comparison",
          ],
        },
      },
    ],
    highlights: [
      "Developed a cross-platform Unity app for home interior visualization.",
      "Implemented runtime 3D model loading for furniture and room assets.",
      "Built Photon-based multiplayer room editing for real-time WebGL collaboration.",
      "Integrated Android/iOS AR previewing with PlayFab and a Render-hosted backend.",
    ],
    timeline: "Ivris - Jun 2024 to Jun 2026",
    problem:
      "Customer interior-design services need a visual workflow where users can inspect furniture and room layouts across browser, mobile, and AR contexts without forcing every user into the same device flow.",
    solution:
      "Built Unity application systems for runtime room/furniture content loading, WebGL collaboration, mobile AR previewing, and backend-connected user/content workflows.",
    challenges: [
      "Keeping runtime 3D model loading reliable across WebGL and mobile targets.",
      "Synchronizing room edits in Photon-powered collaborative WebGL sessions.",
      "Connecting AR preview, user data, and hosted backend services through PlayFab and Render.",
    ],
    impact: [
      "Created a practical customer visualization flow for furniture and room layout decisions.",
      "Supported collaborative editing for remote design review.",
      "Expanded my Unity work beyond simulations into AR, WebGL product tooling, and customer-facing design workflows.",
    ],
    overview: [
      "Ivris Customer Design Services is a public-facing interior-design service context where the product experience benefits from visual room planning and customer review. My portfolio focus is the Unity application work behind that experience: loading room/furniture content at runtime, making layouts editable, supporting collaborative WebGL sessions, and enabling mobile AR preview.",
      "The app work connects several surfaces rather than living in one platform only. WebGL supports browser-based review and collaboration, while Android/iOS AR preview lets users inspect design choices in a physical space. Backend services support hosted content, user state, and integration needs around the Unity client.",
    ],
    simulatedBehaviors: [
      {
        title: "Runtime Visualization",
        bullets: [
          "Runtime loading for furniture and room assets.",
          "Interactive room layout editing in Unity.",
          "Customer-facing visualization for comparing design choices.",
          "Reusable systems for handling content that is not baked into the build.",
        ],
      },
      {
        title: "Collaboration and WebGL",
        bullets: [
          "Photon-based multiplayer room editing.",
          "Real-time synchronization of layout changes between users.",
          "Browser-friendly interaction patterns for design review.",
          "WebGL workflow support alongside mobile builds.",
        ],
      },
      {
        title: "Mobile AR and Backend",
        bullets: [
          "Android and iOS AR preview integration.",
          "PlayFab-backed user/content workflow integration.",
          "Render-hosted backend integration for app services.",
          "Cross-platform architecture across WebGL, Android, and iOS.",
        ],
      },
    ],
    stationBreakdown: [
      {
        title: "Runtime 3D Content System",
        description:
          "Allows furniture and room assets to be loaded dynamically instead of requiring every object to be bundled into the Unity build.",
        bullets: [
          "Runtime 3D model loading for furniture and room assets.",
          "Content flow designed for customer design-service use cases.",
          "Cross-platform constraints considered for WebGL and mobile targets.",
        ],
      },
      {
        title: "Collaborative Room Editing",
        description:
          "Supports shared room-layout sessions where users can review and adjust design choices together in a browser-based Unity experience.",
        bullets: [
          "Photon-based multiplayer synchronization.",
          "Shared editing state for room/furniture layout changes.",
          "WebGL-friendly interaction and review workflow.",
        ],
      },
      {
        title: "AR Preview Workflow",
        description:
          "Extends the visualization experience from browser review into mobile AR preview on Android and iOS.",
        bullets: [
          "Mobile AR preview integration.",
          "Furniture and room-design context shown in physical-space preview.",
          "Cross-platform Unity build considerations for Android and iOS.",
        ],
      },
      {
        title: "Backend and Account Integration",
        description:
          "Connects the Unity client with backend services used for user/content workflows and hosted application services.",
        bullets: [
          "PlayFab integration for app/user workflow needs.",
          "Render-hosted backend integration.",
          "Client/backend boundaries designed around product-style content updates.",
        ],
      },
    ],
    technicalHighlights: [
      "Developed cross-platform Unity application features for WebGL, Android, and iOS.",
      "Implemented runtime 3D model loading for furniture and room visualization workflows.",
      "Built Photon-powered collaborative room editing for WebGL sessions.",
      "Integrated mobile AR preview flows for Android and iOS.",
      "Connected the Unity client with PlayFab and a Render-hosted backend.",
      "Used the public Ivris Customer Design Services context to present the work without exposing private implementation details.",
    ],
    featured: true,
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
    hidden: true,
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
    title: "Tanta University Meta Quest 2 Training Suite",
    category: "VR & Interactive Booths",
    summary:
      "Solo-developed Meta Quest 2 training suite covering VR onboarding, a multi-angle 360 surgical-room viewer, and an interactive viscosity experiment with handheld tools.",
    role: "Solo Unity Virtual Reality Developer",
    platform: ["Unity", "Meta Quest 2", "VR"],
    tech: ["Unity", "C#", "Meta Quest 2", "VR", "Auto Hand", "360 Video", "Android"],
    thumbnail: vrTrainingThumb,
    caseStudyUrl: "/projects/meta-quest-vr-training-suite",
    highlights: [
      "Handled the full development pipeline as the solo developer, from instructional-design interpretation through Unity implementation.",
      "Built three Meta Quest 2 experiences: headset onboarding, 360 surgical-room video viewing, and an interactive viscosity lab.",
      "Adapted placeholder assets and modified models to fit educational scenarios, then programmed the full VR interactions.",
    ],
    timeline: "Tanta University - Dec 2023 to Oct 2024",
    problem:
      "Students and first-time VR users needed safe, repeatable training experiences for headset onboarding, medical observation, and lab experimentation before real-world exposure.",
    solution:
      "Built a Meta Quest 2 training suite that converts instructional goals into VR scenes, interaction flows, modified/placeholder 3D assets, 360 video navigation, and hands-on lab tools.",
    challenges: [
      "Designing VR interactions that first-time Quest 2 users can understand quickly.",
      "Turning instructional material into usable VR steps without a large production team.",
      "Adapting placeholder models and assets so the scenes supported the learning goal.",
      "Managing 360 surgical-room viewpoints and camera switching inside the headset.",
      "Making handheld lab tools feel usable with VR grabbing and interaction constraints.",
    ],
    impact: [
      "Delivered three educational Quest 2 experiences as a solo Unity developer.",
      "Supported onboarding, lab, and medical-observation training use cases.",
      "Created reusable VR patterns for guided instruction, 360 viewpoint switching, handheld tools, and lab-device interactions.",
    ],
    overview: [
      "At Tanta University, I worked as the solo Unity VR developer for a Meta Quest 2 training suite. I handled the full flow from understanding the instructional-design requirements, adapting or modifying placeholder assets/models, building the Unity scenes, programming the interactions, and preparing the headset experiences.",
      "The suite included three main experiments: a Quest 2 onboarding tutorial for learning headset controls, a surgical-room 360 video viewer with multiple camera angles, and a viscosity experiment with handheld tools such as a calculator, stopwatch, and objects that can be placed into liquid.",
    ],
    simulatedBehaviors: [
      {
        title: "Full Solo Development Pipeline",
        bullets: [
          "Translated instructional requirements into VR interaction flows.",
          "Built Unity scenes and interaction logic for Meta Quest 2.",
          "Used placeholder assets where needed and modified them to fit the training context.",
          "Programmed the experience flow, tools, UI, and headset-ready builds.",
        ],
      },
      {
        title: "Quest 2 and 360 Training",
        bullets: [
          "Created a Quest 2 tutorial for first-time users.",
          "Built a surgical-room 360 video viewer from recorded multi-angle footage.",
          "Allowed users to switch between different 360 camera viewpoints inside the headset.",
        ],
      },
      {
        title: "Interactive Lab Tools",
        bullets: [
          "Built a viscosity experiment with hand-held interaction.",
          "Implemented a functional calculator and stopwatch device.",
          "Created grabbable pedals/objects that users place into liquid during the experiment.",
        ],
      },
    ],
    stationBreakdown: [
      {
        title: "Quest 2 Tutorial",
        description:
          "A headset onboarding experience that teaches new users how to interact with the Oculus/Meta Quest 2 controls and VR environment.",
        bullets: [
          "Guided first-time user flow.",
          "Basic controller and interaction onboarding.",
          "Scene setup designed for quick orientation inside the headset.",
        ],
      },
      {
        title: "360 Surgical-Room Viewer",
        description:
          "A medical-observation experience using recorded 360-degree surgical-room video from multiple camera angles.",
        bullets: [
          "360 video playback inside Meta Quest 2.",
          "Camera/viewpoint switching between recorded angles.",
          "Structured viewing flow for medical training observation.",
        ],
      },
      {
        title: "Viscosity Experiment",
        description:
          "An interactive lab simulation where students use handheld tools and place objects into liquid as part of the experiment workflow.",
        bullets: [
          "Functional calculator device usable in VR.",
          "Functional stopwatch device usable in VR.",
          "Grabbable objects/pedals placed into liquid.",
          "Hand interaction workflow built for lab-style training.",
        ],
      },
      {
        title: "Asset and Scene Adaptation",
        description:
          "A practical solo-dev workflow where placeholder assets were used as a base, modified, and assembled into working training scenes.",
        bullets: [
          "Placeholder assets adapted for instructional needs.",
          "Model/scene adjustments to support interaction points.",
          "Unity implementation prepared for Quest 2 deployment.",
        ],
      },
    ],
    technicalHighlights: [
      "Owned the full Unity VR development process as solo developer.",
      "Built three Meta Quest 2 experiences for onboarding, medical observation, and lab training.",
      "Implemented 360 video viewing with camera-angle switching.",
      "Programmed handheld VR lab devices, including calculator and stopwatch interactions.",
      "Built grabbable experiment objects and liquid-placement interaction flow for the viscosity lab.",
      "Adapted placeholder assets and modified scene elements to satisfy educational requirements.",
    ],
  },
  {
    id: "ibm-call-for-code-agri-tech",
    title: "IBM Call for Code Smart Irrigation",
    category: "IoT / ML / Social Impact",
    summary:
      "Agri-tech smart irrigation solution using IoT monitoring, backend APIs, and machine-learning decision support to help farmers reduce water waste and respond to plant health signals.",
    role: "Developer / Team Member",
    platform: ["IoT prototype", "Backend API", "Mobile / dashboard workflow"],
    tech: ["IoT", "Machine Learning", "Django", "REST API", "IBM Cloud", "Kubernetes", "Data Monitoring"],
    thumbnail: agriThumb,
    previewGif: "https://media.giphy.com/media/veNYydVkae95U84yvF/giphy.gif",
    demoUrl: "#demo",
    demoLabel: "Watch Project Demo",
    githubUrl: "https://github.com/mohamedazab/cfc-smart-irrigation",
    caseStudyUrl: "/projects/ibm-call-for-code-agri-tech",
    productContext: [
      {
        label: "Project GitHub repository",
        url: "https://github.com/mohamedazab/cfc-smart-irrigation",
      },
      {
        label: "IBM Cairo hackathon newsroom coverage",
        url: "https://mea.newsroom.ibm.com/2019-07-02-IBMs-Cairo-hackathon-tackled-Water-Related-Natural-Disasters-in-Egypt",
      },
      {
        label: "StartupScene competition coverage",
        url: "https://thestartupscene.me/INVESTMENTS/Egyptian-Agri-Tech-Solution-Wins-IBM-Call-for-Code-Competition",
      },
    ],
    attributionNote:
      "Public links provide competition and project context. This portfolio page focuses on my contribution as a team member and summarizes the public smart-irrigation concept without claiming sole ownership of the full team project.",
    media: [
      {
        id: "smart-irrigation-demo",
        type: "youtube",
        title: "Smart Irrigation Project Demo",
        youtubeId: "https://youtu.be/pqaKUDnPQRg",
        thumbnail: "https://media.giphy.com/media/veNYydVkae95U84yvF/giphy.gif",
        caption:
          "Project demo preview for the IBM Call for Code smart irrigation solution, showing the public presentation flow for the agri-tech prototype.",
        details: {
          title: "Demo Focus",
          components: [
            "IoT-oriented moisture monitoring concept",
            "Smart irrigation decision workflow",
            "Backend API layer for device, database, and app communication",
            "Mobile/dashboard user flow",
          ],
          behaviors: [
            "Monitor soil moisture conditions",
            "Support water-saving irrigation decisions",
            "Use data-driven plant/crop health signals",
            "Present the solution clearly for judges and public review",
          ],
          notes: [
            "The public GitHub repository describes a Django backend API used to connect database, mobile app, and hardware-device communication.",
            "The public coverage describes the solution as an IoT smart irrigation system with machine-learning support for crop and wilting detection.",
          ],
        },
      },
    ],
    highlights: [
      "Contributed to a public IBM Call for Code smart-irrigation team project.",
      "Helped present an IoT/ML system focused on water efficiency and plant-health decision support.",
      "Worked around a backend/API workflow connecting database, mobile app, and hardware-device communication.",
    ],
    timeline: "IBM Call for Code / Code and Response, 2019",
    problem:
      "Water scarcity and inefficient irrigation create real pressure for farmers who need earlier signals about soil moisture, crop health, and when irrigation is actually needed.",
    solution:
      "Built and presented a smart-irrigation concept that combines IoT field monitoring, backend services, app/database communication, and machine-learning decision support for more efficient plant care.",
    challenges: [
      "Turning a broad water-scarcity problem into a focused prototype workflow.",
      "Explaining IoT sensing, backend communication, and ML decision support clearly to judges.",
      "Coordinating team implementation and presentation work under competition time pressure.",
    ],
    impact: [
      "Connected software, data, agriculture, and sustainability goals in a public social-impact competition.",
      "Public coverage described the smart irrigation solution as a Call for Code competition winner.",
      "Strengthened experience building practical prototypes for real-world water and agriculture challenges.",
    ],
    overview: [
      "This IBM Call for Code smart-irrigation project focused on helping farmers reduce water waste through soil-moisture monitoring, plant-health signals, and data-driven irrigation recommendations. The public coverage describes the solution as an IoT device in the field that detects soil moisture, predicts when and how much water crops need, and uses machine-learning support for crop and wilting detection.",
      "The public GitHub repository shows the backend side of the system: a Django API intended to connect the database, mobile app, and hardware device communication. My portfolio page presents the project as a team social-impact prototype and focuses on the system thinking, data flow, and practical problem-solving context.",
    ],
    simulatedBehaviors: [
      {
        title: "IoT Monitoring Workflow",
        bullets: [
          "Soil-moisture monitoring concept for field-level irrigation decisions.",
          "Hardware-device communication represented as part of the full system workflow.",
          "Data flow from sensing layer into backend/database services.",
        ],
      },
      {
        title: "Backend and App Flow",
        bullets: [
          "Django backend API for database, mobile app, and hardware-device communication.",
          "Plant lookup and user/plant-grid API concepts shown in the public repository.",
          "Mobile/dashboard workflow for presenting current plant and irrigation state.",
        ],
      },
      {
        title: "Decision Support",
        bullets: [
          "Water-saving irrigation recommendations based on plant and moisture context.",
          "Machine-learning support described publicly for crop-type and wilting detection.",
          "Clear presentation of sensor and ML ideas for judging and public review.",
        ],
      },
    ],
    stationBreakdown: [
      {
        title: "Field Monitoring Concept",
        description:
          "The solution centers on gathering field data that can help decide when crops need water instead of relying on fixed irrigation habits.",
        bullets: [
          "Soil-moisture sensing concept.",
          "Plant and crop-condition context.",
          "Water-saving irrigation decision flow.",
        ],
      },
      {
        title: "Backend API Layer",
        description:
          "The public repository describes a Django server/API layer used to interface between database, mobile app, and hardware device communication.",
        bullets: [
          "Plant lookup API concept.",
          "User and plant-grid API workflow.",
          "Device/app/database communication boundary.",
        ],
      },
      {
        title: "ML Decision Support",
        description:
          "Public coverage describes machine-learning support for crop type and wilting detection as part of the smart-irrigation concept.",
        bullets: [
          "Crop-type adaptation concept.",
          "Wilting/plant-health detection support.",
          "Recommendation-oriented irrigation workflow.",
        ],
      },
      {
        title: "Competition Presentation",
        description:
          "The project was presented in a social-impact competition context, where the team needed to connect technical feasibility with a clear water-saving story.",
        bullets: [
          "IBM Call for Code / Code and Response context.",
          "Water scarcity and irrigation efficiency framing.",
          "Public demo and judging-oriented explanation.",
        ],
      },
    ],
    technicalHighlights: [
      "Worked on a team smart-irrigation prototype connecting IoT, backend services, mobile/dashboard flow, and ML decision support.",
      "Used public backend/API concepts from the Django repository to support app, database, and hardware-device communication.",
      "Helped frame the project around soil moisture, crop health, irrigation timing, and water-saving recommendations.",
      "Contributed in a competition environment where technical choices had to be explained clearly to judges and public audiences.",
      "Linked the portfolio page to the public demo, repository, IBM newsroom context, and StartupScene coverage for transparency.",
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
    hidden: true,
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

const cimDraftProject = projects.find((project) => project.id === "cim-station-behavior-simulation");
const industrialTrainingProject = projects.find((project) => project.id === "industrial-training-simulation-systems");

if (cimDraftProject && industrialTrainingProject) {
  industrialTrainingProject.media = cimDraftProject.media;
  industrialTrainingProject.previewGif = cimDraftProject.previewGif;
  industrialTrainingProject.overview = [
    "Industrial Training Simulation Systems groups my Unity/WebGL digital twin style work for BEDO training systems, including MR110 Advanced Modular CIM and MR109 Compact Mechatronics workflows. The focus is the behavior I simulated: station motion, sensor feedback, actuator states, process transitions, and PLC-style training logic.",
    "The MR110 gallery shows the media currently available for the public portfolio. MR109 is included on the same page as a station-behavior breakdown, so reviewers can understand the additional simulation scope without exposing internal code, PLC projects, or unpublished media.",
  ];
  industrialTrainingProject.simulatedBehaviors = [
    {
      title: "Multi-Station Process Flow",
      bullets: [
        "MR110 loading, laser marking, electrical drilling, robot arm, and storage workflows.",
        "MR109 loading, transporting, measuring, processing, assembly, buffering, sorting, robot, and storage workflows.",
        "Station-to-station transfer behavior and visible process state changes.",
      ],
    },
    {
      title: "Motion and Actuation",
      bullets: [
        "Conveyor and transfer movement.",
        "Robot arm pick/place behavior.",
        "Tool-head, guided motion, rotary motion, and indexed positioning.",
        "Pneumatic cylinder, valve, gripper, and reset behavior.",
      ],
    },
    {
      title: "Sensor and PLC-Style States",
      bullets: [
        "Part presence, material/state, position feedback, and process trigger sensing.",
        "Start, running, stop, ready, busy, done, emergency, and process ON/OFF states.",
        "Visual training feedback that connects station behavior with control concepts.",
      ],
    },
  ];
  industrialTrainingProject.stationBreakdown = [
    ...(cimDraftProject.stationBreakdown ?? []).map((station) => ({
      ...station,
      title: `MR110 - ${station.title}`,
    })),
    ...mr109StationBreakdown,
  ];
  industrialTrainingProject.technicalHighlights = [
    "Built Unity-based digital twin style simulations for MR110 Advanced Modular CIM and MR109 Compact Mechatronics training systems.",
    "Simulated multi-station industrial behavior using sensors, actuators, motors, conveyors, robot handling, storage, sorting, and pneumatic components.",
    "Represented PLC-style process states such as start, running, stop, process ON/OFF, ready, busy, done, and emergency.",
    "Created visual behavior for loading, transporting, measuring, processing, assembly, buffering, sorting, robot arm, storage, laser marking, and electrical drilling station concepts.",
    "Designed the simulations for industrial training, demonstration, learning, and debugging without exposing internal project files or proprietary implementation details.",
  ];
}

export const publicProjects = projects.filter((project) => !project.hidden);

export const featuredProjects = publicProjects.filter((project) => project.featured);

export const getProjectById = (id: string | undefined) =>
  projects.find((project) => project.id === id || project.aliases?.includes(id ?? ""));

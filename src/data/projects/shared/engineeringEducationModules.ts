import eduLaminarImage from "../../../assets/projects/EduLab/Laminar.jpg";
import eduFm103LabImage from "../../../assets/projects/EduLab/FM103.png";
import eduEv117TrainerImage from "../../../assets/projects/EduLab/EV117 Fuel Outside.jpg";

export const engineeringEducationModules = [
  {
    id: "bernoulli-principle-virtual-lab",
    title: "Bernoulli Principle Virtual Lab",
    image: eduFm103LabImage,
    caption:
      "Unity virtual lab for the FM103 Bernoulli and flow-measurement trainer, connecting venturi flow, pressure distribution, flow control, measurement readings, guided steps, and graph feedback in one interactive scene.",
    domain: "Fluid Mechanics",
    learningGoal:
      "Show how changing flow area affects velocity and static pressure while helping students connect flow changes with measurement feedback, graph behavior, and repeatable experiment observations.",
    components: [
      "FM103 Bernoulli / flow-measurement trainer visualization",
      "Venturi tube / flow channel visualization",
      "Water flow path and flow-control area",
      "Pressure tapping points and manometer-style indicators",
      "Measurement display and experiment controls",
      "Guided step interface",
      "Graph/response feedback view",
    ],
    behaviors: [
      "Flow moving through different cross-section areas",
      "Velocity increasing in narrow sections",
      "Static pressure decreasing at high-velocity regions",
      "Flow-rate changes affecting pressure, velocity, and measurement readings",
      "Connect visual flow behavior with graph feedback",
      "Support guided student comparison between theoretical and measured-style values",
    ],
  },
  {
    id: "laminar-flow-visualization-virtual-lab",
    title: "Laminar Flow Visualization Virtual Lab",
    image: eduLaminarImage,
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
    image: eduEv117TrainerImage,
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

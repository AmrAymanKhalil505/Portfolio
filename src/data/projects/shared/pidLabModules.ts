import pidPressureImage from "../../../assets/projects/PID/MPC 100 Pressure Far.png";
import pidTemperatureImage from "../../../assets/projects/PID/MPC 101 Temp.png";
import pidSpeedImage from "../../../assets/projects/PID/MPC 102 Speed far.png";
import pidPositionImage from "../../../assets/projects/PID/MPC 103 DC Motor.png";
import pidLevelImage from "../../../assets/projects/PID/MPC104 Level.png";
import pidFlowImage from "../../../assets/projects/PID/MPC 105 Flow.png";

export const pidLabModules = [
  {
    id: "mpc100-pressure-process-control",
    title: "MPC100 Pressure Process Control",
    image: pidPressureImage,
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
    image: pidTemperatureImage,
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
    image: pidSpeedImage,
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
    image: pidPositionImage,
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
    image: pidLevelImage,
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
    image: pidFlowImage,
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

export const mr109StationBreakdown = [
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

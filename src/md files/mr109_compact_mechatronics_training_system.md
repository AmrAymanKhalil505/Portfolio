# Add Portfolio Project: MR109 Compact Mechatronics Training System

## Project Title
MR109 Compact Mechatronics Training System Simulation

## Category
Digital Twin / Mechatronics Training

## Short Card Summary
Unity-based simulation of a compact mechatronics training system, focused on station behavior, PLC-style logic, sensors, pneumatic actuators, conveyors, robot handling, storage, and sorting processes.

## Source Device
BEDO MR109 — Compact Mechatronics Training System

## Portfolio Positioning
Present this project as a Unity digital twin / virtual training simulation for mechatronics and industrial automation education.

The project should communicate that I can simulate multi-station industrial training systems, including mechanical motion, pneumatic actuation, sensor feedback, PLC-style control states, and station-to-station process flow.

Do not present it as a normal game project.

Present it as:
- digital twin style simulation
- mechatronics virtual lab
- industrial automation training simulation
- PLC / sensors / actuators behavior simulation
- Unity-based engineering education project

## Project Context
MR109 is a compact mechatronics training system made of multiple experimental stations that can operate separately or be linked together to simulate real production processes.

The official MR109 system includes 9 stations:
- MR109.01 Loading Station
- MR109.02 Transporting Station
- MR109.03 Measuring Station
- MR109.04 Processing Station
- MR109.05 Assembly Station
- MR109.06 Buffering Station
- MR109.07 Sorting Station
- MR109.08 Robot Station
- MR109.09 Storage Station

## Main Simulation Focus
The portfolio page should focus on what I simulated:

- station motion behavior
- pneumatic actuator behavior
- sensor detection and feedback
- conveyor / transporting behavior
- robot handling behavior
- storage and sorting behavior
- PLC-style process states
- station-to-station process flow
- visual training/demo behavior

Avoid explaining the full hardware manual in detail. Keep it portfolio-friendly.

## My Role
Unity Developer

## What I Built
I built a Unity simulation/digital twin for the compact mechatronics training system, focusing on how the stations behave and interact.

Main responsibilities:
- Built the 3D virtual training environment
- Simulated station movement and process flow
- Simulated pneumatic cylinders, valves, grippers, and rotary actuators
- Simulated conveyors, DC motors, stepper movement, and transfer mechanisms
- Simulated sensor feedback such as light barrier, photoelectric, proximity, inductive, capacitive, and limit switch signals
- Built PLC-style state behavior such as start, running, stop, process on/off, ready, done, and emergency
- Visualized station operation for educational demonstration and debugging

## Main Components / Behaviors to Show

Use these as portfolio-friendly component groups:

### Sensors
- Light barrier sensors
- Photoelectric sensors
- Proximity sensors
- Inductive sensors
- Capacitive sensors
- Limit switches
- Encoder feedback, if included in the simulated station

### Pneumatic Components
- Pneumatic cylinders
- Rodless cylinders
- Guided pneumatic cylinders
- Pneumatic rotary actuators
- Pneumatic grippers
- Solenoid valves
- Air manifold behavior

### Motion / Drive Components
- Belt conveyors
- DC motors
- Stepper motors
- Robot arm movement
- Transport sliders
- Rotary motion
- Linear transfer motion

### Control / State Components
- PLC-style process logic
- Main ON/OFF
- Process ON/OFF
- Emergency state
- Start / running / stop indicators
- Station ready / busy / done states

## Suggested Station Breakdown

Create short cards or accordions for the MR109 stations.

### Loading Station
Simulates feeding behavior where workpieces are released from a magazine and transferred one by one into the process.

Behaviors:
- Workpiece detection in magazine
- Pneumatic pushing/releasing behavior
- Sensor-based end-position feedback
- Sequential part feeding
- Start/running/stop/emergency process states

### Transporting Station
Simulates moving workpieces between stations using conveyor or linear transport behavior.

Behaviors:
- Conveyor/transport motion
- Workpiece detection along the path
- Start/stop logic based on sensor feedback
- Transfer timing between stations
- Motor-driven movement visualization

### Measuring Station
Simulates inspection or measurement behavior for workpieces.

Behaviors:
- Part arrival detection
- Sensor-based measurement/inspection state
- Pass/fail or value-based result display, if available
- Process state transition after measurement
- Integration with sorting or next station logic

### Processing Station
Simulates process-operation behavior on a workpiece.

Behaviors:
- Part detection before processing
- Actuator movement for processing operation
- Clamp / hold behavior, if applicable
- Operation running/done states
- Return-to-home/reset behavior

### Assembly Station
Simulates assembly or part-combination behavior.

Behaviors:
- Part positioning
- Actuator-based assembly motion
- Sensor confirmation
- Pneumatic/linear movement
- Done state after assembly cycle

### Buffering Station
Simulates temporary workpiece holding and queue behavior.

Behaviors:
- Workpiece accumulation
- Buffer full/empty detection
- Release logic based on next station availability
- Sensor-triggered transfer behavior
- Queue-like process visualization

### Sorting Station
Simulates classifying and routing workpieces based on sensor results.

Behaviors:
- Workpiece detection
- Material/type classification using sensors
- Conveyor movement
- Pneumatic diverter or sorting actuator behavior
- Routing to different output areas

### Robot Station
Simulates robot handling and transfer behavior.

Behaviors:
- Robot arm movement
- Pick/place logic
- Gripper or vacuum handling
- Station-to-station transfer
- Robot ready/busy/done states

### Storage Station
Simulates placing workpieces into storage containers or pockets.

Behaviors:
- Receiving area detection
- Rotary actuator movement
- Gripper open/close behavior
- Stepper-based positioning
- Storage pocket full/available detection

## Project Card Copy

Title:
MR109 Compact Mechatronics Training System

Description:
Unity digital twin simulation of a compact mechatronics training system, visualizing station motion, pneumatic actuation, sensor feedback, PLC-style logic, and multi-station production flow.

Tags:
Unity, C#, Digital Twin, Mechatronics, PLC Logic, Pneumatics, Industrial Automation

Thumbnail:
Use the best screenshot/GIF showing the complete MR109 station system or a multi-station overview.

CTA:
View Project

Secondary CTA:
Watch Demo

## Project Overview Copy

MR109 Compact Mechatronics Training System Simulation is a Unity-based digital twin style project for industrial automation education. The simulation focuses on the behavior of a compact multi-station mechatronics trainer, including station motion, pneumatic actuation, sensor feedback, conveyor transfer, robot handling, storage, sorting, and PLC-style process states.

The goal of the project is not to explain every hardware detail, but to make the system behavior visible and understandable for training and demonstration. Each station is presented through its key simulated behaviors, such as part detection, actuator movement, process transitions, and emergency/start/stop logic.

## Feature Cards

### Multi-Station Process Flow
Shows how workpieces move between loading, transporting, measuring, processing, assembly, buffering, sorting, robot, and storage stations.

### Sensor Feedback Simulation
Visualizes sensor-triggered state changes using light barrier, photoelectric, proximity, inductive, capacitive, and limit switch behavior.

### Pneumatic Actuation
Simulates pneumatic cylinders, valves, grippers, guided motion, and rotary actuator behavior.

### Conveyor and Motion Systems
Represents conveyor movement, DC motor behavior, stepper-driven positioning, sliders, and transfer mechanisms.

### Robot and Handling Behavior
Shows robot arm handling, pick/place actions, gripper/vacuum interaction, and station-to-station transfer.

### PLC-Style State Logic
Visualizes start, running, stop, emergency, ready, busy, and done states for training and debugging.

## Technical Highlights

- Built a Unity-based digital twin simulation for a compact mechatronics training system.
- Simulated multi-station industrial behavior using sensors, actuators, motors, conveyors, and pneumatic components.
- Built visual behavior for loading, transporting, measuring, processing, assembly, buffering, sorting, robot, and storage station concepts.
- Represented PLC-style process states such as start, running, stop, process on/off, ready, done, and emergency.
- Connected station motion and digital state changes to create an educational automation-training experience.
- Designed the simulation for demonstration, learning, and debugging of mechatronics system behavior.

## Media Layout

Use the same MediaDemoViewer component used for CIM and PID projects.

Recommended media items:

media:
  - title: "MR109 Full System Demo"
    type: "youtube"
    youtubeId: "REPLACE_WITH_YOUTUBE_ID"
    thumbnail: "/projects/mr109/full-system-thumbnail.jpg"
    caption: "Full compact mechatronics system simulation showing coordinated station behavior and process flow."

  - title: "Loading and Transport Behavior"
    type: "video-or-gif"
    src: "/projects/mr109/loading-transport-preview.mp4"
    thumbnail: "/projects/mr109/loading-transport-thumbnail.jpg"
    caption: "Loading and transporting behavior with sensor-triggered transfer and motion logic."

  - title: "Sorting / Storage Behavior"
    type: "video-or-gif"
    src: "/projects/mr109/sorting-storage-preview.mp4"
    thumbnail: "/projects/mr109/sorting-storage-thumbnail.jpg"
    caption: "Sorting and storage behavior with sensor feedback, actuator movement, and pocket/container logic."

  - title: "Robot Handling Preview"
    type: "video-or-gif"
    src: "/projects/mr109/robot-handling-preview.mp4"
    thumbnail: "/projects/mr109/robot-thumbnail.jpg"
    caption: "Robot station handling behavior with pick/place transfer and station state logic."

  - title: "PLC / State Visualization"
    type: "image-or-video"
    src: "/projects/mr109/plc-state-preview.mp4"
    thumbnail: "/projects/mr109/plc-state-thumbnail.jpg"
    caption: "PLC-style process states and station feedback visualized for training and debugging."

## Suggested Project Data Object

{
  id: "mr109-compact-mechatronics-training-system",
  title: "MR109 Compact Mechatronics Training System",
  category: "Digital Twin / Mechatronics Training",
  summary: "Unity digital twin simulation of a compact mechatronics training system, visualizing station motion, pneumatic actuation, sensor feedback, PLC-style logic, and multi-station production flow.",
  role: "Unity Developer",
  tech: [
    "Unity",
    "C#",
    "Digital Twin",
    "Mechatronics",
    "PLC Logic",
    "Pneumatics",
    "Industrial Automation",
    "Simulation"
  ],
  thumbnail: "/projects/mr109/thumbnail.jpg",
  previewGif: "/projects/mr109/preview-loop.mp4",
  media: [
    {
      id: "mr109-full-system",
      type: "youtube",
      title: "MR109 Full System Demo",
      youtubeId: "REPLACE_WITH_YOUTUBE_ID",
      thumbnail: "/projects/mr109/full-system-thumbnail.jpg",
      caption: "Full compact mechatronics system simulation showing coordinated station behavior and process flow."
    },
    {
      id: "loading-transport",
      type: "video-or-gif",
      title: "Loading and Transport Behavior",
      src: "/projects/mr109/loading-transport-preview.mp4",
      thumbnail: "/projects/mr109/loading-transport-thumbnail.jpg",
      caption: "Loading and transporting behavior with sensor-triggered transfer and motion logic."
    },
    {
      id: "sorting-storage",
      type: "video-or-gif",
      title: "Sorting / Storage Behavior",
      src: "/projects/mr109/sorting-storage-preview.mp4",
      thumbnail: "/projects/mr109/sorting-storage-thumbnail.jpg",
      caption: "Sorting and storage behavior with sensor feedback, actuator movement, and pocket/container logic."
    },
    {
      id: "robot-handling",
      type: "video-or-gif",
      title: "Robot Handling Preview",
      src: "/projects/mr109/robot-handling-preview.mp4",
      thumbnail: "/projects/mr109/robot-thumbnail.jpg",
      caption: "Robot station handling behavior with pick/place transfer and station state logic."
    }
  ],
  highlights: [
    "Built a Unity-based digital twin simulation for a compact mechatronics training system.",
    "Simulated multi-station behavior using sensors, actuators, motors, conveyors, and pneumatic components.",
    "Visualized PLC-style states such as start, running, stop, ready, done, and emergency.",
    "Created station behavior for loading, transporting, measuring, processing, assembly, buffering, sorting, robot, and storage concepts."
  ],
  features: [
    "Multi-station production flow",
    "Sensor feedback simulation",
    "Pneumatic actuator behavior",
    "Conveyor and motor movement",
    "Robot handling behavior",
    "Sorting and storage logic",
    "PLC-style state visualization"
  ]
}

## Design Requirements

The project page should feel like a professional industrial automation training simulation showcase.

Visual direction:
- dark modern engineering UI
- clean station cards
- media-heavy proof
- short technical bullets
- optional station breakdown

Avoid:
- long hardware manual text
- too much theory
- making it look like a game
- hiding the project behind complex 3D navigation

## Important Notes for Codex

1. Keep the page concise and visual.
2. Focus on station behavior, not full hardware explanation.
3. Use videos/GIFs to prove the simulation.
4. Reuse the same MediaDemoViewer component from CIM/PID pages.
5. Make this project fit near the CIM Station Behavior Simulation project, but keep it separate.

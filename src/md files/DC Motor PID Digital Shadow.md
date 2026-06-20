# Add Portfolio Project: DC Motor PID Digital Shadow

## Project Title
DC Motor PID Digital Shadow

## Category
Educational Simulation / Control Systems

## Short Card Summary
A Unity-based virtual control lab for DC motor position control, featuring real-time PID tuning, parameter editing, live response graphs, and guided experiments.

## Full Project Summary
This project is an interactive digital shadow / virtual lab for a DC motor position control PID system.

The goal is to help students and instructors understand how motor parameters and controller gains affect system response. The project combines a 3D motor position trainer with mathematical modeling, PID control modes, real-time plotting, performance analysis, and exportable lab results.

The focus should be on:
- PID behavior
- DC motor position response
- editable electrical and mechanical parameters
- live graphing and performance metrics
- guided educational workflow
- digital shadow / virtual lab presentation

Do not present this as a normal game project. Present it as an educational control-systems simulation built in Unity.

---

## My Role
Unity Developer

## What I Built
I built the Unity-side virtual lab experience and simulation interface for a DC motor PID position control trainer.

Main responsibilities:
- Built the 3D interactive virtual lab scene
- Simulated visible DC motor position movement
- Connected visual motion to the system response
- Built UI panels for PID gains and motor parameters
- Built real-time graph/plot visualization
- Added controls for open-loop / closed-loop behavior
- Added selectable controller modes: P, PI, PD, PID
- Added performance analysis display
- Added guided mode for step-by-step student experiments
- Supported export/saving workflow for lab reporting

---

## Important Positioning
This project should be presented as:

- digital shadow
- virtual lab
- educational simulation
- control systems trainer
- PID learning tool
- Unity simulation for engineering education

Do NOT make it sound like:
- a game
- a generic 3D model viewer
- only a UI dashboard
- only a theoretical math project

The key idea:
The user can change parameters and controller gains, then immediately see the effect on the system response, graph, and motor movement.

---

## Core Features

### 1. 3D DC Motor Position Trainer
The project includes a 3D virtual model representing the physical control lab device.

Show this as:
- 3D motor trainer
- position carriage / movement visualization
- lab table / monitor interface
- visible motor response based on simulation values

Portfolio text:
"Built a 3D virtual control trainer where motor position movement is visually linked to the calculated system response."

---

### 2. Mathematical Model / Transfer Function
The simulation uses a transfer-function-based DC motor model.

Mention:
- DC motor position control model
- transfer function representation
- model based on mechanical/electrical motor parameters
- motion calculated from system equations

Do not overload the portfolio page with equations. Keep equations inside an optional technical breakdown.

Portfolio text:
"Implemented a transfer-function-based control simulation where motor behavior responds to editable electrical and mechanical parameters."

---

### 3. Editable System Parameters
The UI allows editing motor parameters.

Parameters to show:
- Moment of inertia of rotor, J
- Viscous friction constant, B
- Electric resistance, R
- Electric inductance, L
- Motor torque constant, Kt
- Back EMF constant, Kb
- Static friction
- Coulomb friction

Parameter ranges from the technical spec:
- J: 10^-4 to 10^-2
- B: 10^-4 to 10^-2
- R: 0.5 to 20
- L: 10^-4 to 10^-1
- Kt: 10^-4 to 1
- Kb: 10^-4 to 1
- Static Friction: 0 to 0.05
- Coulomb Friction: 0 to 0.05

Portfolio text:
"Created an editable parameter panel for motor properties such as inertia, friction, resistance, inductance, torque constant, and back EMF constant."

---

### 4. PID Controller Modes
The user can select different controller modes.

Modes:
- P
- PI
- PD
- PID

Controller gains:
- Kp
- Ki
- Kd

Portfolio text:
"Added controller mode selection and live PID gain editing so students can compare P, PI, PD, and PID behavior without changing code."

---

### 5. Open-Loop / Closed-Loop Toggle
The project includes a toggle between control states.

Modes:
- Open-loop
- Closed-loop
- PID control behavior

Portfolio text:
"Added toggle-based switching between open-loop and closed-loop control behavior for comparison."

---

### 6. Step Input Experiment
The system supports Step reference input.

Mention:
- Step input
- set point
- position response
- comparison of response before/after changes

Do not claim Ramp, Sinusoidal, or Custom were implemented if they were not.

Portfolio text:
"Built a step-response experiment where users can change set point and controller values, then observe the resulting position response."

---

### 7. Real-Time Plots
The virtual lab shows real-time graphs.

Graph signals:
- Set point
- Position
- Error
- Voltage / control signal
- Speed, if available in the implementation

Portfolio text:
"Implemented real-time plotting for control-system response, including set point, position, error, and voltage/control signal."

---

### 8. Performance Analysis
The system calculates and displays control performance metrics.

Metrics:
- Rise Time
- Settling Time
- Overshoot
- Steady-State Error
- Electrical Power

Portfolio text:
"Added a performance analysis panel showing rise time, settling time, overshoot, steady-state error, and electrical power."

---

### 9. Stability Feedback
The system gives stability feedback based on controller values.

States:
- Stable
- Marginally Stable / Margin
- Unstable

Portfolio text:
"Displayed stability feedback that updates based on selected Kp, Ki, and Kd values."

---

### 10. Export / Reporting Tools
The system supports saving outputs for lab reports.

Export features:
- Save plot as PNG
- Export data to Excel
- Save screen/screenshot

Portfolio text:
"Added export tools so students can save plots, screenshots, and experiment data for lab reports."

---

### 11. Guided Mode
The project includes a guided workflow for students.

Mention:
- step-by-step experiment mode
- academic lab usage
- student-friendly instructions

Portfolio text:
"Created a guided mode that walks students through the experiment step by step."

---

## Suggested Project Page Structure

The project page should use this layout:

1. Hero
2. Demo Viewer
3. Project Overview
4. Core Simulation Features
5. Control System Features
6. Graphs & Analysis
7. Educational Workflow
8. Technical Highlights
9. Media Gallery

---

## Hero Section

Title:
DC Motor PID Digital Shadow

Subtitle:
A Unity-based virtual control lab for DC motor position control, built to visualize PID behavior, system response, editable motor parameters, and real-time performance analysis.

Tags:
Unity, C#, PID Control, Control Systems, Digital Shadow, Virtual Lab, Simulation, Data Visualization

Buttons:
- Watch Demo
- View Features
- Contact Me

---

## Demo Viewer

Use the same media viewer style as the CIM project.

The project should support embedded YouTube videos inside the website.

Use privacy-friendly YouTube embeds if possible:
- use youtube-nocookie.com for embeds
- lazy-load the iframe
- show a thumbnail first
- load the video only when the user clicks

YouTube’s official help page says Privacy Enhanced Mode uses the `youtube-nocookie.com` domain instead of the normal YouTube embed domain. :contentReference[oaicite:1]{index=1}

Do not autoplay videos with sound.

---

## Recommended Media Items

Add these media placeholders:

### 1. Full PID Virtual Lab Demo
Type:
YouTube video

Caption:
"Full virtual lab demo showing DC motor position control, PID tuning, live response graphing, and 3D motion feedback."

### 2. Parameter Editing Demo
Type:
YouTube video or short MP4 loop

Caption:
"Editable motor parameters such as inertia, friction, resistance, inductance, torque constant, and back EMF constant."

### 3. PID Gain Tuning Demo
Type:
YouTube video or short MP4 loop

Caption:
"Live tuning of Kp, Ki, and Kd values with immediate response changes."

### 4. Graph & Performance Analysis Demo
Type:
YouTube video or image/GIF

Caption:
"Real-time plots and performance metrics including rise time, settling time, overshoot, steady-state error, and electrical power."

### 5. Guided Mode Demo
Type:
YouTube video or image/GIF

Caption:
"Guided student workflow for running the control experiment step by step."

---

## Project Overview Copy

Use this copy:

DC Motor PID Digital Shadow is a Unity-based virtual control lab for studying DC motor position control. The project visualizes how motor parameters and PID controller gains affect the system response through a 3D model, real-time plots, and performance analysis.

The lab allows users to edit electrical and mechanical parameters, switch between controller modes, tune Kp, Ki, and Kd values, and observe the effect on motor movement and response curves. It was designed as an educational simulation for control-system experiments, with guided steps and export tools for lab reporting.

---

## Feature Cards

Create feature cards for:

### 3D Motor Response
Visualizes the DC motor position trainer and links visible movement to simulation response.

### Editable Motor Parameters
Allows users to change inertia, friction, resistance, inductance, torque constant, back EMF constant, static friction, and Coulomb friction.

### PID Controller Tuning
Supports P, PI, PD, and PID modes with editable Kp, Ki, and Kd values.

### Open / Closed Loop Control
Allows switching between open-loop and closed-loop behavior for comparison.

### Real-Time Graphs
Displays set point, position, error, voltage/control signal, and response behavior over time.

### Performance Metrics
Shows rise time, settling time, overshoot, steady-state error, electrical power, and stability feedback.

### Guided Experiments
Provides a guided workflow so students can run the experiment step by step.

### Export Tools
Supports saving plots, screenshots, and experiment data for reports.

---

## Technical Highlights

Use these bullets:

- Built an interactive Unity virtual lab for DC motor position control.
- Connected 3D motor movement to calculated control-system response.
- Implemented editable motor parameters for mechanical and electrical properties.
- Added live PID gain tuning for P, PI, PD, and PID controller modes.
- Built real-time graphing for set point, position, error, and control signal.
- Added performance metrics such as rise time, settling time, overshoot, and steady-state error.
- Added stability feedback based on controller gain changes.
- Supported export tools for screenshots, plots, and Excel data.
- Designed guided student workflow for academic control experiments.

---

## Project Card Content

Title:
DC Motor PID Digital Shadow

Description:
Unity-based virtual control lab for DC motor position control, featuring editable motor parameters, PID tuning, real-time response graphs, and guided experiments.

Tags:
Unity, C#, PID Control, Simulation, Digital Shadow, Virtual Lab

Thumbnail:
Use a screenshot of the 3D motor trainer with the graph/UI visible.

CTA:
View Project

Secondary CTA:
Watch Demo

---

## Suggested Project Data Object

Add this to the project data file:

{
  id: "dc-motor-pid-digital-shadow",
  title: "DC Motor PID Digital Shadow",
  category: "Educational Simulation / Control Systems",
  summary: "Unity-based virtual control lab for DC motor position control, featuring editable motor parameters, PID tuning, real-time response graphs, and guided experiments.",
  role: "Unity Developer",
  tech: [
    "Unity",
    "C#",
    "PID Control",
    "Control Systems",
    "Digital Shadow",
    "Virtual Lab",
    "Simulation",
    "Data Visualization"
  ],
  thumbnail: "/projects/pid-digital-shadow/thumbnail.jpg",
  previewGif: "/projects/pid-digital-shadow/preview-loop.mp4",
  media: [
    {
      id: "full-pid-demo",
      type: "youtube",
      title: "Full PID Virtual Lab Demo",
      youtubeId: "REPLACE_WITH_YOUTUBE_ID",
      thumbnail: "/projects/pid-digital-shadow/full-demo-thumbnail.jpg",
      caption: "Full virtual lab demo showing DC motor position control, PID tuning, live response graphing, and 3D motion feedback."
    },
    {
      id: "parameter-editing",
      type: "video-or-gif",
      title: "Parameter Editing",
      src: "/projects/pid-digital-shadow/parameter-editing.mp4",
      thumbnail: "/projects/pid-digital-shadow/parameters-thumbnail.jpg",
      caption: "Editable motor parameters such as inertia, friction, resistance, inductance, torque constant, and back EMF constant."
    },
    {
      id: "pid-gain-tuning",
      type: "video-or-gif",
      title: "PID Gain Tuning",
      src: "/projects/pid-digital-shadow/pid-gain-tuning.mp4",
      thumbnail: "/projects/pid-digital-shadow/pid-thumbnail.jpg",
      caption: "Live tuning of Kp, Ki, and Kd values with immediate response changes."
    },
    {
      id: "graph-analysis",
      type: "video-or-gif",
      title: "Graph & Performance Analysis",
      src: "/projects/pid-digital-shadow/graph-analysis.mp4",
      thumbnail: "/projects/pid-digital-shadow/graph-thumbnail.jpg",
      caption: "Real-time plots and performance metrics including rise time, settling time, overshoot, steady-state error, and electrical power."
    },
    {
      id: "guided-mode",
      type: "video-or-gif",
      title: "Guided Mode",
      src: "/projects/pid-digital-shadow/guided-mode.mp4",
      thumbnail: "/projects/pid-digital-shadow/guided-thumbnail.jpg",
      caption: "Guided student workflow for running the control experiment step by step."
    }
  ],
  highlights: [
    "Built an interactive Unity virtual lab for DC motor position control.",
    "Connected 3D motor movement to calculated PID response.",
    "Added editable motor parameters and live Kp, Ki, Kd tuning.",
    "Implemented real-time response plots and control performance metrics.",
    "Supported export tools for screenshots, plots, and Excel experiment data."
  ],
  features: [
    "3D motor position visualization",
    "Transfer-function-based simulation",
    "Editable mechanical and electrical parameters",
    "P, PI, PD, and PID controller modes",
    "Open-loop and closed-loop comparison",
    "Step input experiment",
    "Real-time graphing",
    "Performance metrics",
    "Stability feedback",
    "Guided academic mode",
    "PNG and Excel export"
  ]
}

---

## Design Requirements

The project page should feel more like a professional engineering simulation showcase than a game showcase.

Visual direction:
- dark modern UI
- control-system dashboard style
- graph/plot visuals
- 3D lab preview
- clean cards
- technical but readable

Avoid:
- long math-heavy paragraphs
- giant equations on the main page
- too many UI screenshots without explanation
- presenting it as a game
- claiming unsupported inputs like Ramp/Sinusoidal/Custom if they are not implemented

---

## Important Notes for Codex

1. Keep the main project page readable for HR.
2. Put math details in an optional "Technical Breakdown" section.
3. Use videos and UI screenshots to prove the project.
4. Do not overload the card with control theory.
5. Make the project sound like Unity + engineering education + interactive simulation.
6. Reuse the same MediaDemoViewer component from the CIM project if available.
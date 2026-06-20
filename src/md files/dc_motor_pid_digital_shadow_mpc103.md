# DC Motor PID Digital Shadow — MPC103

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

## My Role
Unity Developer

## What I Built
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

## Core Features

### 3D DC Motor Position Trainer
Built a 3D virtual control trainer where motor position movement is visually linked to the calculated system response.

### Mathematical Model / Transfer Function
Implemented a transfer-function-based control simulation where motor behavior responds to editable electrical and mechanical parameters.

### Editable System Parameters
Parameters:
- Moment of inertia of rotor, J
- Viscous friction constant, B
- Electric resistance, R
- Electric inductance, L
- Motor torque constant, Kt
- Back EMF constant, Kb
- Static friction
- Coulomb friction

Parameter ranges:
- J: 10^-4 to 10^-2
- B: 10^-4 to 10^-2
- R: 0.5 to 20
- L: 10^-4 to 10^-1
- Kt: 10^-4 to 1
- Kb: 10^-4 to 1
- Static Friction: 0 to 0.05
- Coulomb Friction: 0 to 0.05

### PID Controller Modes
Modes:
- P
- PI
- PD
- PID

Controller gains:
- Kp
- Ki
- Kd

### Open-Loop / Closed-Loop Toggle
Added toggle-based switching between open-loop and closed-loop control behavior for comparison.

### Step Input Experiment
Built a step-response experiment where users can change set point and controller values, then observe the resulting position response.

### Real-Time Plots
Graph signals:
- Set point
- Position
- Error
- Voltage / control signal
- Speed, if available in the implementation

### Performance Analysis
Metrics:
- Rise Time
- Settling Time
- Overshoot
- Steady-State Error
- Electrical Power

### Stability Feedback
States:
- Stable
- Marginally Stable / Margin
- Unstable

### Export / Reporting Tools
Export features:
- Save plot as PNG
- Export data to Excel
- Save screen/screenshot

### Guided Mode
Created a guided mode that walks students through the experiment step by step.

## Project Overview Copy
DC Motor PID Digital Shadow is a Unity-based virtual control lab for studying DC motor position control. The project visualizes how motor parameters and PID controller gains affect the system response through a 3D model, real-time plots, and performance analysis.

The lab allows users to edit electrical and mechanical parameters, switch between controller modes, tune Kp, Ki, and Kd values, and observe the effect on motor movement and response curves. It was designed as an educational simulation for control-system experiments, with guided steps and export tools for lab reporting.

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

## Technical Highlights
- Built an interactive Unity virtual lab for DC motor position control.
- Connected 3D motor movement to calculated control-system response.
- Implemented editable motor parameters for mechanical and electrical properties.
- Added live PID gain tuning for P, PI, PD, and PID controller modes.
- Built real-time graphing for set point, position, error, and control signal.
- Added performance metrics such as rise time, settling time, overshoot, and steady-state error.
- Added stability feedback based on controller gain changes.
- Supported export tools for screenshots, plots, and Excel data.
- Designed guided student workflow for academic control experiments.

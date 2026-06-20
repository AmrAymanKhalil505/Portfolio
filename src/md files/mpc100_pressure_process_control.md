# MPC100 — Pressure Process Control Digital Shadow

## Parent Project
PID Virtual Labs Suite

## Category
Educational Simulation / Control Systems

## Short Summary
Unity-based digital shadow for a pressure process control trainer, focused on PID pressure regulation, disturbance behavior, actuator response, and real-time system feedback.

## Source Device
BEDO MPC100 — Pressure Process Control Trainer

## Portfolio Positioning
Present this module as part of a Unity virtual lab suite for PID control education.

The module represents an industrial pressure-control process where students can observe how PID gains affect pressure response, actuator behavior, and system stability.

Do not present it as a game. Present it as:
- digital shadow
- virtual lab
- PID trainer simulation
- pressure-control educational simulation

## Simulated System Focus
- air pressure regulation
- PID gain effect
- open-loop / closed-loop comparison
- pressure sensor feedback
- actuator response
- disturbance behavior
- response graph visualization
- guided student workflow

## Main Components to Show
- Diaphragm pump
- Pressure vessel
- Pressure gauge
- Pressure sensor
- Needle valve
- Proportional solenoid valve
- ON/OFF switch
- Emergency switch
- Pump indication LED
- Valve indication LED

## Key Behaviors to Describe
- The pressure inside the vessel is the controlled variable.
- The pressure sensor provides feedback to the PID controller.
- The pump and proportional valve act as actuators.
- The needle valve introduces disturbance by changing the pressure release path.
- PID gains affect response speed, overshoot, settling, and steady-state error.
- The software visualizes the response curve and process values.

## Project Card Copy
Title:
MPC100 Pressure Process Control

Description:
Digital shadow of a pressure-control trainer where users tune PID gains, observe pressure response, introduce disturbance through valve behavior, and analyze system performance.

Tags:
Unity, C#, PID Control, Pressure Control, Digital Shadow, Virtual Lab

CTA:
View Module

## Module Overview Copy
MPC100 Pressure Process Control is a Unity digital-shadow module for studying PID-based pressure regulation. The simulation visualizes how a pressure vessel, pump, pressure sensor, needle valve, and proportional solenoid valve interact inside a closed-loop control system.

The module lets users observe how controller tuning affects the pressure response, including rise time, settling behavior, overshoot, and steady-state error. It is designed as part of an educational virtual lab for control-system experiments.

## Feature Cards

### Pressure Feedback Loop
Visualizes the pressure vessel, pressure sensor feedback, and controlled pressure response.

### PID Tuning
Allows users to compare P, PI, and PID behavior and observe the effect of changing controller gains.

### Disturbance Simulation
Represents disturbance through needle valve behavior and changing pressure release.

### Actuator Response
Shows pump and proportional solenoid valve behavior responding to the controller output.

### Real-Time Graphs
Displays set point, pressure response, error, and control signal over time.

### Performance Metrics
Shows response analysis such as rise time, settling time, overshoot, and steady-state error.

## Technical Highlights
- Built a Unity-based digital shadow for a pressure-control PID trainer.
- Simulated pressure feedback behavior using sensor-driven control logic.
- Visualized pump and proportional valve response to PID output.
- Added disturbance behavior through needle valve interaction.
- Displayed real-time response curves and performance metrics.
- Designed the module for guided control-system learning.

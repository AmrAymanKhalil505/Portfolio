# MPC104 — Level Process Control Digital Shadow

## Parent Project
PID Virtual Labs Suite

## Category
Educational Simulation / Control Systems

## Short Summary
Unity-based digital shadow for a liquid-level process control trainer, featuring PID level regulation, pump behavior, proportional valve disturbance, pressure-sensor feedback, and response visualization.

## Source Device
BEDO MPC104 — Level Process Control Trainer

## Portfolio Positioning
Present this module as an educational Unity simulation for liquid-level PID experiments.

## Simulated System Focus
- liquid level regulation
- pump-driven filling behavior
- proportional valve disturbance
- pressure-sensor feedback
- hydrostatic level measurement
- open-loop / closed-loop comparison
- PID gain effect
- real-time response graphs

## Main Components to Show
- Lower tank
- Upper tank
- Pump
- Pressure sensor
- Proportional valve
- Measuring scale
- Schematic diagram
- ON/OFF switch
- Emergency button
- Pump indication LED
- Valve indication LED

## Key Behaviors to Describe
- Liquid level is the controlled variable.
- The pump moves water from the lower tank to the upper tank.
- The pump acts as an actuator responding to PID output.
- The proportional valve introduces disturbance by changing flow passage.
- The pressure sensor measures liquid level using hydrostatic pressure.
- PID gains affect fill response, overshoot, settling time, and steady-state error.
- The transparent tanks help users observe the process visually.

## Project Card Copy
Title:
MPC104 Level Process Control

Description:
Digital shadow of a liquid-level PID trainer where users tune controller gains, observe tank level response, apply valve disturbance, and analyze closed-loop behavior.

Tags:
Unity, C#, PID Control, Level Control, Digital Shadow, Virtual Lab

CTA:
View Module

## Module Overview Copy
MPC104 Level Process Control is a Unity digital-shadow module for studying PID-based liquid-level regulation. The simulation visualizes a two-tank process where a pump moves water into an upper tank while feedback from a pressure sensor is used to control the liquid level.

The module allows users to tune controller gains, introduce valve disturbance, and observe how the level response changes in real time. It is designed for educational experiments comparing P, PI, and PID behavior in a process-control system.

## Feature Cards

### Tank Level Visualization
Shows liquid movement between lower and upper tanks.

### Pump Actuator Behavior
Visualizes pump response to controller output.

### Pressure Sensor Feedback
Represents liquid-level measurement using pressure feedback.

### Valve Disturbance
Simulates proportional valve disturbance by varying flow passage.

### PID Tuning
Allows comparison of P, PI, and PID controller response.

### Response Analysis
Displays level response, error, control signal, and performance metrics.

## Technical Highlights
- Built a Unity digital shadow for a liquid-level PID trainer.
- Simulated tank filling behavior and pump actuator response.
- Represented pressure-sensor feedback for level measurement.
- Added proportional valve disturbance behavior.
- Connected PID gain changes to visible level-response changes.
- Built real-time graphs and guided experiment UI.

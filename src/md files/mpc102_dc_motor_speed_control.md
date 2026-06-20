# MPC102 — DC Motor Speed Control Digital Shadow

## Parent Project
PID Virtual Labs Suite

## Category
Educational Simulation / Control Systems

## Short Summary
Unity-based digital shadow for a DC motor speed control trainer, featuring PID speed regulation, proximity-sensor feedback, generator load disturbance, and real-time response analysis.

## Source Device
BEDO MPC102 — DC Motor Speed Control Trainer

## Portfolio Positioning
Present this module as the speed-control companion to the MPC103 position-control lab.

## Simulated System Focus
- DC motor speed regulation
- RPM response
- inductive proximity sensor feedback
- generator load disturbance
- PID tuning
- open-loop / closed-loop comparison
- response graph visualization
- speed display

## Main Components to Show
- DC motor
- Motor shaft / flywheel
- Inductive proximity sensor
- Generator
- Speed digital display
- Emergency switch
- ON/OFF switch
- Motor indication LED
- Generator indication LED
- Acrylic safety cover, optional visual detail

## Key Behaviors to Describe
- DC motor speed is the controlled variable.
- The inductive proximity sensor measures speed feedback.
- The generator introduces load disturbance.
- Resistive loads affect shaft speed and system response.
- PID gains affect acceleration, overshoot, settling, and steady-state speed.
- The speed display shows measured RPM.
- The software visualizes response changes caused by PID gain tuning.

## Project Card Copy
Title:
MPC102 DC Motor Speed Control

Description:
Digital shadow of a DC motor speed-control trainer where users tune PID gains, observe RPM response, apply generator load disturbance, and compare control behavior.

Tags:
Unity, C#, PID Control, Motor Speed, Digital Shadow, Virtual Lab

CTA:
View Module

## Module Overview Copy
MPC102 DC Motor Speed Control is a Unity digital-shadow module for studying PID-based speed regulation. The simulation visualizes a DC motor, shaft speed feedback, generator load behavior, and the effect of P, PI, and PID tuning on system response.

The module lets users observe how controller gains and load disturbances affect motor speed. It includes speed display feedback, response curves, and performance analysis for educational control-system experiments.

## Feature Cards

### Motor Speed Response
Visualizes DC motor speed change and RPM response over time.

### Sensor Feedback
Represents inductive proximity sensor feedback for closed-loop speed control.

### Generator Load Disturbance
Simulates generator/resistive load behavior that affects shaft speed.

### PID Gain Tuning
Allows comparison between P, PI, and PID controller behavior.

### Speed Display
Shows digital RPM feedback from the simulated measurement system.

### Response Analysis
Displays speed response, error, control signal, and performance metrics.

## Technical Highlights
- Built a Unity digital shadow for a DC motor speed-control PID trainer.
- Simulated motor speed response and sensor feedback behavior.
- Added generator-load disturbance to affect shaft speed.
- Connected PID gain changes to real-time RPM response.
- Built graphing and analysis UI for control-system learning.
- Designed the module for open-loop and closed-loop experiment comparison.

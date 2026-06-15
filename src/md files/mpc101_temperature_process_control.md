# MPC101 — Temperature Process Control Digital Shadow

## Parent Project
PID Virtual Labs Suite

## Category
Educational Simulation / Control Systems

## Short Summary
Unity-based digital shadow for a temperature process control trainer, featuring PID temperature regulation, Peltier heating/cooling behavior, fan disturbance, Pt100 feedback, and response visualization.

## Source Device
BEDO MPC101 — Temperature Process Control Trainer

## Portfolio Positioning
Present this module as an educational Unity simulation for temperature-control experiments.

## Simulated System Focus
- temperature regulation
- heating and cooling behavior
- Peltier element polarity behavior
- external fan disturbance
- Pt100 sensor feedback
- PID gain tuning
- response graph visualization
- guided experiment flow

## Main Components to Show
- Peltier element
- External fan
- Temperature gauge
- Pt100 temperature sensors
- Copper experiment tube
- Schematic diagram
- ON/OFF trainer switch
- Emergency button
- Heating indication LED
- Cooling indication LED
- Fan indication LED

## Key Behaviors to Describe
- The Peltier element acts as the heating/cooling actuator.
- The external fan introduces disturbance by changing heat removal.
- Pt100 sensors measure temperature and provide feedback.
- The mean temperature value is used as feedback for the PID system.
- PID gains affect heating/cooling response, overshoot, settling, and stability.
- The software visualizes response changes caused by Kp, Ki, and Kd tuning.

## Project Card Copy
Title:
MPC101 Temperature Process Control

Description:
Digital shadow of a temperature-control trainer where users tune PID gains, observe heating/cooling behavior, apply fan disturbance, and analyze response curves.

Tags:
Unity, C#, PID Control, Temperature Control, Digital Shadow, Virtual Lab

CTA:
View Module

## Module Overview Copy
MPC101 Temperature Process Control is a Unity digital-shadow module for studying PID-based temperature regulation. The simulation visualizes a Peltier-driven heating and cooling process, Pt100 sensor feedback, and disturbance behavior caused by external fan cooling.

The module allows users to tune controller gains and observe how temperature response changes in real time. It is designed for educational control-system experiments where students compare P, PI, and PID behavior through visual feedback and response graphs.

## Feature Cards

### Peltier Heating / Cooling
Visualizes Peltier actuator behavior for both heating and cooling operation.

### Pt100 Feedback
Represents temperature measurement using Pt100 sensor feedback.

### Fan Disturbance
Simulates disturbance by changing external fan heat-removal behavior.

### PID Tuning
Allows comparison of P, PI, and PID controller behavior.

### Real-Time Temperature Graphs
Displays set point, temperature response, error, and controller signal.

### Guided Experiment Mode
Provides a student-friendly workflow for running temperature-control experiments.

## Technical Highlights
- Built a Unity digital shadow for a temperature-control PID trainer.
- Simulated Peltier heating and cooling behavior.
- Represented Pt100 temperature feedback and mean temperature calculation.
- Added fan-based disturbance behavior.
- Connected PID gain changes to visible response curve changes.
- Built real-time graphing and educational experiment flow.

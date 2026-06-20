# CIM Station Behavior Simulation

## Category
Digital Twin / Industrial Training

## Short Card Summary
A Unity-based simulation of CIM station behaviors, focused on motion, pneumatic actuation, and digital sensor/logic behavior across multiple industrial stations.

## Full Project Summary
This project is a Unity simulation of several CIM stations. The focus is not explaining the full manufacturing system, but showing how the individual stations behave.

I simulated:
- motion behavior
- pneumatic behavior
- digital/sensor behavior

The stations included are:
- Loading Station
- Storage Station
- Robot Station
- CNC Laser Station
- CNC Drilling Station

The project should be presented as a simulation / digital twin style project for industrial or educational use.

## My Role
Unity Developer

## What I Built
I simulated the behavior of multiple CIM stations in Unity, including mechanical motion, pneumatic actuation, and digital state changes based on sensors and control logic.

Main responsibilities:
- Simulated station movement and animation
- Simulated pneumatic actuators and their extend/retract behavior
- Simulated digital input/output behavior
- Simulated sensor detection and state changes
- Built logic for station interaction and process flow
- Visualized machine behavior in a way suitable for learning, demonstration, or training

## Important Positioning
Do NOT describe this as a full explanation of the complete CIM production system.

Do describe it as:
- a behavior-focused simulation
- a digital twin style project
- an industrial/educational simulation
- a Unity simulation of station logic and mechanics

The emphasis should be on how the stations behave, not on teaching every system component in detail.

## Project Card Content

Title:
CIM Station Behavior Simulation

Short description:
Unity simulation of CIM station behaviors, including motion, pneumatic actuation, and digital logic across loading, storage, robot, and CNC modules.

Tags:
Unity, C#, Simulation, Digital Twin, PLC Logic

Buttons:
- View Case Study
- Watch Demo

## Demo Viewer UX
The project page should work like a product/media page similar to Humble Bundle or Unity Asset Store:

- The project card shows a thumbnail or short looping preview.
- When the user opens the project, they see a large media viewer.
- The main media viewer can play embedded YouTube videos inside the website.
- Under the main viewer, show selectable thumbnails for each video/demo.
- Clicking a thumbnail changes the main embedded video.
- Do not force the user to leave the website to watch the videos.

Use privacy-friendly YouTube embeds if possible:
- youtube-nocookie.com
- lazy-load the iframe
- show a thumbnail first
- only load the YouTube iframe after the user clicks a video thumbnail or play button

Do not autoplay videos with sound.

## Media Items

### Full System Run
Type: YouTube video

Purpose: Show the complete simulated CIM system running.

Caption:
Full system run showing coordinated station behavior and process flow.

### Laser CNC Working
Type: YouTube video

Caption:
Laser CNC station behavior, including sample detection, pneumatic clamping, cutting-head movement, return-to-home behavior, and valve reset.

### Loading Station with TIA Portal
Type: YouTube video

Caption:
Loading Station simulation running alongside TIA Portal logic, showing sensor-triggered movement, pneumatic transfer, conveyor behavior, and process state changes.

### Robot Interpreter Preview
Type: Image sequence / GIF-like loop / short video

Caption:
Robot interpreter interface used to visualize or drive robot behavior and process steps.

### CNC Interpreter Preview
Type: Image sequence / GIF-like loop / short video

Caption:
CNC interpreter interface used to visualize or drive CNC behavior and operation steps.

## Simulated Behaviors

### Motion Behavior
- Conveyor and transfer movement
- Robot arm transport behavior
- CNC head/spindle movement
- Stepper-driven positioning
- Return-to-home behavior

### Pneumatic Behavior
- Double-acting cylinder extension and retraction
- Guided pneumatic cylinder movement
- Pneumatic valve state changes
- Pneumatic gripper open/close behavior
- Rotary pneumatic actuation

### Digital / Sensor Behavior
- Capacitive sensor detection
- Inductive material sensing
- Light barrier detection
- Reed switch feedback
- Photoelectric sensing
- Start, running, stop, ready, emergency, and done states

## Station Breakdown

### Loading Station
Simulates part detection, pneumatic extraction, conveyor movement, material sensing, and motor stop behavior.

Behavior bullets:
- Detects parts using light barrier and capacitive sensors
- Uses pneumatic cylinder behavior to extract/transfer parts
- Starts conveyor behavior after part detection
- Uses inductive sensing to classify metal/non-metal behavior
- Stops motor when the part reaches the end light barrier

Simulated components:
- Light barrier sensor
- Capacitive sensor
- Reed switch
- Inductive sensor
- Double-acting pneumatic cylinder
- 5/2 single solenoid valve
- DC motor
- Belt conveyor
- Hopper / magazine
- Start / running / stop indicators
- Process ON/OFF
- Emergency switch

### Storage Station
Simulates receiving, rotating, gripping, and storing parts into storage pockets.

Behavior bullets:
- Detects incoming parts in the receiving area
- Rotates toward the part using pneumatic rotary behavior
- Closes pneumatic gripper to hold and transfer the part
- Deposits parts into available storage pockets
- Moves to the next pocket when a proximity sensor indicates a pocket is full

Simulated components:
- Capacitive sensors
- Inductive sensor
- Reed switches
- Double-acting pneumatic cylinder
- Guided pneumatic cylinder
- Pneumatic rotary actuator
- Pneumatic gripper
- 5/2 single solenoid valves
- Stepper motor
- Storage pockets
- Part receiving area
- Start / running / stop indicators
- Process ON/OFF
- Emergency switch

### Robot Station
Simulates robot transport behavior and PLC-style robot process states.

Behavior bullets:
- Starts robot movement based on process signal
- Transports test pieces between stations
- Uses vacuum/gripper behavior for interaction
- Visualizes robot on/done states
- Includes start, running, stop, and emergency behavior

Simulated components:
- Robot arm
- Vacuum valve
- Photoelectric sensor
- Pneumatic gripper
- Start / running / stop indicators
- Process ON/OFF
- Emergency switch
- Robot ON signal
- Robot DONE signal

### CNC Laser Station
Simulates laser station operation behavior.

Behavior bullets:
- Detects the sample using capacitive sensing
- Triggers pneumatic clamping through valve behavior
- Moves the laser head toward the sample
- Simulates laser operation behavior
- Returns the head to home position and resets the valve

Simulated components:
- Laser head
- Stepper motor
- Capacitive sensor
- Guided pneumatic cylinder
- Pneumatic valve
- Limit switches
- Start / running / stop indicators
- Process ON/OFF
- Emergency switch

### CNC Drilling Station
Simulates drilling station operation behavior.

Behavior bullets:
- Detects the sample using capacitive sensing
- Triggers pneumatic clamping through valve behavior
- Simulates spindle/drilling behavior
- Uses stepper-driven positioning behavior
- Returns to default state after operation

Simulated components:
- Spindle
- Stepper motor
- Capacitive sensor
- Guided pneumatic cylinder
- Pneumatic valve
- Limit switches
- Start / running / stop indicators
- Process ON/OFF
- Emergency switch

## Technical Highlights
- Built behavior-driven station simulations in Unity.
- Simulated mechanical motion, pneumatic actuation, and digital sensor states.
- Represented PLC-style process logic and machine status transitions.
- Created visual behavior for loading, storage, robot, laser CNC, and drilling CNC stations.
- Added interpreter-style interfaces for robot and CNC process visualization.
- Designed the project for industrial training, demonstration, and digital twin style presentation.

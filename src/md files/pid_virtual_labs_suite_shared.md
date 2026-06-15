# Shared Implementation Notes for PID Virtual Labs Suite

Create one main project page called "PID Virtual Labs Suite".

Inside it, show six module cards:
- MPC100 Pressure Process Control
- MPC101 Temperature Process Control
- MPC102 DC Motor Speed Control
- MPC103 DC Motor Position Control
- MPC104 Level Process Control
- MPC105 Flow Process Control

MPC103 already exists as "DC Motor PID Digital Shadow". Reuse it as the DC Motor Position module.

Each module card should include:
- module number
- trainer name
- short summary
- controlled variable
- main actuator
- feedback sensor
- disturbance source, if applicable
- tags
- media/demo button

Use a reusable ModuleCard component.

Use a reusable MediaDemoViewer component for YouTube demos, MP4 loops, GIF previews, and screenshots.

The project page should feel like a professional Unity engineering-education showcase, not a game project.

Keep the page readable for HR:
- short summaries
- clear module names
- clean feature cards
- videos near the top

Let technical users go deeper:
- optional technical breakdown
- response graphs
- parameter panels
- controller modes
- export/reporting tools

Use this shared tech stack:
Unity, C#, PID Control, Control Systems, Digital Shadow, Virtual Lab, Simulation, Data Visualization

Use this shared positioning:
"Unity-based digital-shadow simulations for PID control trainers, designed to help students experiment with controller tuning, system response, disturbance behavior, and real-time visual feedback."

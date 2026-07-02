# Unity Project Documenter

## Purpose

Use this skill when documenting Unity, WebGL, VR, AR, simulation, digital twin, digital shadow, industrial training, or educational lab projects for this portfolio and vault.

The goal is to convert raw project memory into clear, public-safe technical documentation that shows what Amr built and why it matters.

## When to use

Use this skill when the task mentions:

- Unity project documentation
- WebGL build or browser demo
- VR / Meta Quest project
- AR / mobile preview
- digital twin / digital shadow
- PID simulation
- PLC-style training behavior
- industrial station behavior
- educational virtual lab
- scene/system/prefab/script documentation
- portfolio case-study writing for Unity work

## Important source paths

```text
src/data/projects.ts
src/data/projects/
src/md files/
src/assets/projects/
scripts/obsidian/config.json
obsidian-vault/
```

For Unity source repos outside this portfolio, inspect common Unity paths:

```text
Assets/
Assets/Scenes/
Assets/Scripts/
Assets/Prefabs/
Assets/ScriptableObjects/
Assets/Resources/
Assets/StreamingAssets/
ProjectSettings/
Packages/manifest.json
```

## Documentation principles

1. Focus on visible behavior, interaction design, simulation logic, and learning value.
2. Be specific enough to prove skill, but avoid leaking private implementation or client IP.
3. Separate physical product/hardware ownership from Unity simulation implementation.
4. Explain systems as a technical reviewer would care about them.
5. Prefer diagrams, station breakdowns, and behavior tables for industrial simulations.
6. Mention platform constraints such as WebGL, mobile, Quest 2, asset size, performance, and user onboarding.

## Unity documentation workflow

### 1. Identify the project type

Classify the work as one or more:

- Educational Simulation
- Industrial Training / Digital Twin
- Digital Shadow / PID Lab
- VR Training
- AR / Interior Visualization
- WebGL Demo
- Educational Game
- Booth / Experiential Activation
- IoT / ML Prototype

### 2. Extract technical signals

Look for:

- scene flow
- interaction loop
- user input model
- UI feedback
- state machines
- sensors/actuators represented virtually
- ScriptableObject/data architecture
- networking/collaboration
- runtime asset loading
- WebGL integration or JSLib bridge
- performance/loading constraints
- demo/media evidence

### 3. Describe behavior without overclaiming

Good wording:

```markdown
Simulated PLC-style station states such as ready, running, done, fault, and emergency.
```

Risky wording:

```markdown
Implemented the real PLC code for the client's production system.
```

Good wording:

```markdown
Built a Unity digital shadow that visualizes control response, PID tuning, disturbance behavior, and graph feedback.
```

Risky wording:

```markdown
Replicated the full internal firmware and proprietary controller.
```

### 4. Recommended project note structure

```markdown
# Project Name

## One-line summary

What this Unity project proves.

## Context

Who/what it was for, safely phrased.

## My role

Clear responsibility boundaries.

## Platform

Unity version if known, WebGL/Quest/mobile/desktop, main packages if known.

## Core loop

Step-by-step user or system flow.

## Simulated systems

- Sensors
- Actuators
- Motion
- Feedback
- UI/debug visualization

## Technical architecture

High-level architecture only. Mention patterns, not private code.

## Media evidence

Screenshots, video, gallery items, YouTube demos.

## Public-safe talking points

- Interview story
- Technical challenge
- Constraint handled
- Outcome

## NDA/public safety

What to avoid saying publicly.
```

## Industrial station documentation pattern

Use this table format when documenting stations:

```markdown
| Station | Simulated components | Main behavior | Reviewer signal |
| --- | --- | --- | --- |
| Loading | Sensors, pneumatic pusher, conveyor | Detects part, releases it, moves it forward | State-driven mechatronics simulation |
```

## PID/control documentation pattern

For PID labs, document:

- controlled variable
- actuator model
- feedback sensor
- disturbance input
- set point
- error graph
- control signal
- overshoot/rise/settling behavior
- student interaction/tuning flow

## WebGL documentation pattern

For WebGL projects, document:

- what runs in browser
- loading constraints
- asset optimization
- input handling
- iframe/embed behavior if used
- any JavaScript bridge/JSLib integration
- public demo limitations

## VR documentation pattern

For VR projects, document:

- target headset
- locomotion/interaction method
- onboarding/tutorial
- safety/comfort choices
- hand/controller interaction
- 360 media if used
- demo reliability in front of users

## Output checklist

Before finishing documentation, make sure it answers:

- What did Amr build?
- What can a recruiter understand quickly?
- What can a technical lead inspect deeply?
- What evidence exists: image, video, WebGL, screenshot?
- What should not be claimed publicly?
- What skills does this project prove?

## Validation

If website data changes, run:

```bash
npm run build
```

If vault generation changes, run:

```bash
npm run vault
```

## Output style

Return:

- concise summary
- changed/created files
- documentation improvements
- remaining missing inputs, such as screenshots, YouTube IDs, or Unity source paths

# 2026-07-02 Card Badge Refactor

## Goal

Refactor project-card evidence badges so the cards communicate reusable app/product capabilities instead of raw technologies, internal labels, or overly specific implementation details.

The guiding rule was:

> Card badges should describe features people would want in their own apps. Detailed technical evidence belongs inside the case study.

## Projects updated

### Industrial Training Simulation Systems

Final badges:

```text
Real-time machine state feedback
PLC-driven station logic
Sensor-driven automation
Robotic motion control
Visual program builder
Multi-station workflow simulation
Safety & emergency states
```

Why:

- Keeps strong industrial credibility with PLC, sensors, robot motion, and safety states.
- Removes overly internal phrases such as TIA Portal-specific wording and station inventory language.
- Keeps detailed station/sensor/evidence data available inside the case study.

### PID Virtual Labs Suite

Final badges:

```text
Live parameter tuning
Real-time data visualization
Interactive graph feedback
Export experiment data
Performance metrics dashboard
```

Why:

- Presents the PID labs as reusable control-system app features.
- Avoids card-level labels that are too specific, such as MPC module names or process lists.
- Keeps process-control detail inside the case-study page.

### Engineering Education Virtual Labs

Final badges:

```text
Interactive experiment workflows
Real-time measurement feedback
Visual flow simulation
Graph-based lab analysis
Exploded-view system animation
```

Why:

- Sells the educational-lab value clearly.
- Covers fluid visualization, measurements, graph analysis, and the hydrogen/fuel-cell exploded-view animation work.
- Keeps measurement/model counts in the case-study data.

### Ivris Interior Design App

Final badges:

```text
Runtime 3D asset loading
Collaborative room editing
Mobile AR furniture preview
Cross-platform WebGL/mobile app
Backend-connected app workflows
```

Why:

- Focuses on product capabilities rather than dependency names.
- Avoids card-level badges like Photon, PlayFab, or Render, which are better explained in the case study.
- Makes the customer-facing interior-design workflow readable to recruiters and clients.

Note: the originally planned phrase was `Backend-connected user workflows`, but the tool layer blocked that exact edit payload, so the final committed wording is `Backend-connected app workflows`.

### Nescafe Ice Coffee VR Surfing Experience

Final badges:

```text
Short-session VR gameplay
Visitor-friendly onboarding
Timed arcade score loop
Branded collectible objectives
Multi-route environment variation
```

Why:

- Frames the project as an event/brand activation system.
- Shows booth-specific design thinking: short sessions, fast onboarding, score loop, branded objectives, and route variety.
- Avoids generic badges like `VR`, `Arcade Gameplay`, or `Booth Experience`.

### IBM Call for Code Smart Irrigation

Final badges:

```text
IoT field monitoring workflow
Backend API data pipeline
ML irrigation decision support
Sensor-to-app data flow
Connected agriculture prototype
```

Why:

- Makes the IoT/data/ML system value clear at card level.
- Connects device sensing, backend APIs, mobile/app flow, and agriculture decision support.
- Keeps public repo, IBM coverage, StartupScene coverage, and attribution context unchanged.

## Important implementation detail

The card renderer already supports `technicalEvidence.badges`. For projects with badges, `ProjectCard` now uses those badge strings directly. Fallback evidence still exists for projects without explicit badges.

## Build status

Validation passed after the badge updates via:

```bash
npm run build
```

The package build runs:

```bash
tsc -b && vite build
```

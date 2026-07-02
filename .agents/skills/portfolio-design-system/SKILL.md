# Portfolio Design System

## Purpose

Use this skill when changing the visual design, layout, UI components, or recruiter-facing presentation of the portfolio.

The portfolio should stand out as a **premium engineering simulation portfolio** for Unity, WebGL, VR, AR, digital twins, educational labs, robotics, and industrial training systems.

## Required reading

Before making design changes, read:

```text
DESIGN.md
tailwind.config.js
src/styles.css
```

If the change affects project presentation, also inspect:

```text
src/data/projects.ts
src/data/projects/
src/components/ProjectCard.tsx
src/components/MediaDemoViewer.tsx
src/pages/HomePage.tsx
src/pages/CaseStudyPage.tsx
src/pages/ProjectsPage.tsx
```

## When to use

Use this skill when the task mentions:

- design system
- UI polish
- make portfolio stand out
- visual style
- landing page
- hero section
- project cards
- case-study page
- media gallery
- responsive layout
- Tailwind styling
- DESIGN.md
- awesome-design-md style guidance

## Design north star

The site should feel like:

```text
engineering cockpit + technical lab + premium simulation case-study system
```

It should not feel like:

```text
generic SaaS landing page
student template portfolio
random AI startup clone
cartoon game-dev portfolio
```

## Visual identity

Use the existing tokens first:

```text
ink   = deep technical background
panel = dark card/panel surface
line  = subtle industrial border
scan  = primary green accent
pulse = secondary cyan accent
amber = caution/highlight accent
steel = readable secondary text
```

Preserve these qualities:

- dark engineering canvas
- scan-green technical accent
- subtle grid/blueprint feel
- thin borders
- precise spacing
- strong media presentation
- recruiter-readable hierarchy

## Design priorities

When improving UI, optimize in this order:

1. Make Amr's strongest technical evidence obvious.
2. Make project pages easier to scan.
3. Improve visual premium/engineering feel.
4. Improve media and screenshot presentation.
5. Improve responsiveness and readability.
6. Only then add decorative polish.

## Component rules

### Hero

The hero should communicate quickly:

- Unity simulation developer
- technical/industrial/educational focus
- proof via strong visual background
- clear CTA to projects and resume

Do not let hero media reduce text readability.

### Project cards

Project cards should act like technical evidence panels.

They need:

- strong thumbnail/media area
- clear title
- category
- role/platform/stack signal
- short summary
- clear action

Avoid vague marketing copy or purely decorative cards.

### Case studies

Case studies must serve two audiences:

- recruiter scan
- technical reviewer inspection

Major case-study pages should include:

- role
- platform
- tech stack
- media/demo
- behaviors/technical highlights
- problem/solution
- result/impact
- attribution where needed

### Media galleries

Media is a portfolio differentiator. Treat it as core evidence.

Improve:

- thumbnail quality
- video/screenshot captions
- selected media details
- station behavior descriptions
- responsive gallery usability

### Attribution blocks

Keep attribution calm and professional.

Do not make them look like legal warnings unless the content is risky.

## Content rules

Good wording:

```text
Built a Unity/WebGL simulation that visualizes station behavior, sensor feedback, actuator states, and PLC-style process flow.
```

Weak wording:

```text
Made a cool simulation project.
```

Risky wording:

```text
Recreated the full proprietary client machine and PLC implementation.
```

## UI change workflow

1. Read `DESIGN.md`.
2. Inspect the affected component/page.
3. Identify the content evidence the UI should reveal.
4. Make the smallest useful design change.
5. Avoid adding new dependencies unless strongly justified.
6. Run `npm run build` after code changes.
7. Report what changed and what visual behavior to test.

## Quality checklist

Before finishing a design task, verify:

- The page still feels like Amr's portfolio, not a copied brand.
- Existing color tokens are reused.
- Text remains readable on dark backgrounds.
- Recruiter scan path is clear.
- Technical reviewer path is clear.
- Media evidence is not buried.
- Mobile layout is not harmed.
- Attribution/public-safety notes remain intact.

## Suggested future improvements

Good design tasks for this project:

- stronger project-card hierarchy
- case-study summary rail
- station behavior comparison tables
- better gallery metadata panels
- design tokens documented in code comments
- motion rules for Framer Motion
- screenshot/video evidence badges
- Dataview-like project metadata UI
- recruiter mode vs technical reviewer mode

## Output style

When reporting back, include:

- files changed
- visual/design intent
- what to test in browser
- build result
- any tradeoffs or remaining polish ideas

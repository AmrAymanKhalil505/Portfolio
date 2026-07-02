# Amr Engineering Simulation Portfolio Design System

## Purpose

This document gives AI agents and human contributors a clear design direction for the portfolio.

Use it whenever changing:

- layout
- colors
- typography
- project cards
- case-study pages
- media galleries
- hero section
- Obsidian/vault-facing documentation pages
- recruiter-facing project presentation

The site should feel like a **premium engineering simulation portfolio**, not a generic SaaS landing page.

## Design north star

The visual identity should communicate:

```text
Unity simulation engineer
industrial digital twins
electromechanical training systems
educational virtual labs
WebGL / VR / AR technical demos
robotics and real-time interaction
```

The best mental model is:

```text
engineering cockpit + technical lab + premium simulation case-study system
```

## Inspirations, not copies

Use these as directional references only:

- IBM: structured, credible, enterprise engineering clarity.
- NVIDIA: black/green technical energy and hardware-performance feeling.
- Together AI: blueprint-like technical communication.
- BMW/BMW M: premium engineering precision.
- VoltAgent: dark canvas, emerald accent, terminal-native agent aesthetic.

Do not clone any brand. The portfolio must remain Amr's own visual language.

## Current design tokens

The current Tailwind tokens are the source of truth unless intentionally changed.

```js
colors: {
  ink: "#050606",
  panel: "#101314",
  line: "#263031",
  scan: "#A9FBD7",
  pulse: "#6EE7F9",
  amber: "#F8D36A",
  steel: "#C9D5D2"
}
```

### Color roles

| Token | Role |
| --- | --- |
| `ink` | Main background. Deep black-green engineering canvas. |
| `panel` | Cards, sections, control blocks, gallery panels. |
| `line` | Borders, separators, subtle geometry. |
| `scan` | Primary accent, CTA, active filter, active gallery state. |
| `pulse` | Secondary technical/cyan accent. Use sparingly. |
| `amber` | Warning, highlight, selected technical insight. Do not overuse. |
| `steel` | Body text, captions, quiet secondary copy. |

### Background rules

Use dark layered backgrounds:

- black/green base
- subtle grid/scanline feel
- soft radial highlights
- thin borders
- controlled glow
- high contrast around text

Avoid:

- flat white sections
- random gradients
- bright rainbow palettes
- heavy glassmorphism everywhere
- startup-style pastel blobs

## Typography

Current font stack:

```text
Inter, ui-sans-serif, system-ui, Segoe UI, Arial, sans-serif
```

Typography should feel:

- clean
- technical
- readable
- direct
- recruiter-friendly
- not overly futuristic

### Heading rules

Headings should be confident and specific.

Good:

```text
Simulation projects with visible technical behavior
Project media and station details
Unity Developer for Interactive Simulations, EdTech, and Real-Time Experiences
```

Avoid:

```text
Crafting magical digital experiences
Innovating the future of tomorrow
Welcome to my world
```

## Layout principles

### Page structure

Use clear engineering-review hierarchy:

1. Hero / page purpose
2. Fast recruiter summary
3. Project evidence
4. Technical breakdown
5. Media/demo proof
6. Role, stack, impact
7. Contact or next action

### Spacing

Prefer spacious layouts with strong rhythm:

- `max-w-7xl` for wide project grids
- `max-w-4xl` for readable article/case-study pages
- generous vertical spacing between sections
- compact cards only when scanning many projects

### Cards

Project cards should feel like technical asset panels.

Use:

- dark panel background
- thin border
- hover lift
- small glow
- clear thumbnail area
- category/role/stack visible quickly
- one clear action

Avoid:

- playful rounded blobs
- excessive shadows
- cramped text
- hidden technical value

## Components

### Buttons

Primary buttons:

- scan-green background
- dark text
- strong contrast
- used for main actions only

Secondary buttons:

- dark background
- scan or white border
- used for technical navigation

Ghost buttons:

- quiet border/text
- used for resume, GitHub, contact, external links

### Tech badges

Tech badges should feel like instrument tags:

- compact
- uppercase only if readable
- dark/outlined base
- scan/cyan highlight only where needed

### Media galleries

Media galleries are one of the strongest parts of this portfolio.

They should emphasize:

- video/image evidence
- station details
- simulated components
- behavior notes
- reviewer-friendly captions

Rules:

- Main media should be large and easy to inspect.
- Thumbnails should not dominate the page.
- Details panel should explain what the reviewer is seeing.
- Captions should be technical, not generic.

Good caption style:

```text
Shows CNC station behavior with sample detection, clamp state, tool-head motion, and PLC-style sequence feedback.
```

Weak caption style:

```text
Cool demo of the project.
```

## Case-study design rules

Case studies should satisfy two audiences:

1. Recruiter: can understand the value in 20 seconds.
2. Technical reviewer: can inspect behavior, constraints, and implementation signals.

Required sections for major projects:

- summary
- role
- platform
- tech stack
- media/demo
- problem
- solution
- simulated behaviors or technical highlights
- result/impact
- public-safe attribution if company/product context exists

## Visual motifs to reinforce

Use motifs that fit Amr's background:

- grid overlays
- scanlines
- thin industrial borders
- station cards
- signal/status indicators
- terminal-like metadata blocks
- technical diagrams
- X-ray/cutaway/blueprint-inspired visuals
- schematic labels
- controlled glow around important panels

Avoid motifs that weaken credibility:

- cartoon SaaS illustrations
- excessive emojis
- vague abstract waves
- unrelated AI/futuristic clichés
- generic stock startup imagery

## Content tone

The site should sound:

- clear
- technical
- honest
- specific
- recruiter-safe
- confident without exaggeration

Good phrase patterns:

```text
Built a Unity/WebGL simulation that visualizes...
Simulated station behavior including...
Created a media-backed case study showing...
Designed the interaction flow for learners to...
```

Avoid:

```text
Revolutionized...
World-class...
Perfectly replicated...
Owned the entire product...
```

## Public-safety and attribution design

For company or product-related work, include calm attribution blocks.

They should be:

- visible but not alarming
- clear about ownership
- focused on Amr's implementation contribution

Good attribution style:

```text
Product names and hardware references belong to their respective owners. This page focuses on my Unity simulation, visualization, UI, and educational implementation work.
```

## Responsive behavior

Mobile should preserve the same identity.

Rules:

- hero video/image should not hide the headline
- case-study content should become single-column
- galleries should stay usable with horizontal thumbnails
- CTAs should remain large enough to tap
- dense technical details should be collapsible or stacked cleanly

## Accessibility

Do not sacrifice readability for style.

Minimum expectations:

- strong text contrast
- meaningful image alt text for content images
- decorative visuals marked as decorative
- keyboard-friendly buttons/links
- no critical info conveyed only through color
- motion should not block reading

## AI agent instructions

When modifying UI:

1. Read this `DESIGN.md` first.
2. Preserve the dark engineering simulation identity.
3. Reuse existing tokens before adding new colors.
4. Improve technical clarity, not just decoration.
5. Make project evidence more visible.
6. Keep recruiter scanning fast.
7. Keep public-safety/attribution wording intact.
8. Run `npm run build` after code changes.

## Do / Don't summary

### Do

- Make the site feel like a premium simulation lab.
- Use dark panels, scan-green accents, subtle grids, and precise spacing.
- Make videos, screenshots, and station behaviors central.
- Use technical copy that proves real implementation skill.
- Keep pages easy for recruiters and technical leads.

### Don't

- Turn the portfolio into a generic AI startup page.
- Copy another company's brand system.
- Add random colors or trendy visual effects.
- Hide the strongest technical evidence below weak marketing text.
- Overclaim ownership of company products, physical hardware, or private systems.

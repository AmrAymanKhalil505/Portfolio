# Frontend Design Notes

The source of truth for visual direction is the root `DESIGN.md`.

This folder exists so frontend contributors and AI agents can quickly find the design intent while working under `src/`.

## Current visual identity

```text
premium engineering simulation portfolio
technical lab interface
dark cockpit-style canvas
scan-green interaction accents
media-backed case studies
```

## Current token source

Design tokens live in:

```text
tailwind.config.js
```

Primary tokens:

```text
ink
panel
line
scan
pulse
amber
steel
```

## Main UI surfaces

```text
src/pages/HomePage.tsx
src/pages/ProjectsPage.tsx
src/pages/CaseStudyPage.tsx
src/components/ProjectCard.tsx
src/components/MediaDemoViewer.tsx
src/components/TechBadge.tsx
src/components/ButtonLink.tsx
src/styles.css
```

## Design rule

When changing UI, improve one of these:

1. recruiter scan speed
2. technical evidence clarity
3. media/demo presentation
4. engineering premium feel
5. mobile readability

Avoid decoration that does not make the portfolio easier to understand or trust.

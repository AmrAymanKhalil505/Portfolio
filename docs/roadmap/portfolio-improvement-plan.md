# Portfolio Improvement Roadmap

## Source

This roadmap is based on the complete inspection and improvement plan pasted into the chat on 2026-07-02.

## Goal

Turn the portfolio from a good personal portfolio into a premium engineering simulation portfolio plus a second-brain documentation system.

The project should prove three things clearly:

1. Serious Unity/WebGL/VR/AR simulation systems.
2. Visible media, behavior breakdowns, and technical evidence.
3. A repo organized well enough for future agents to improve safely.

## Status Legend

```text
✅ Done
🟡 Partial / in progress
⬜ Not started
```

## Current Status Summary

```text
Phase 0 — ✅ Mostly done
Phase 1 — ✅ Mostly done
Phase 2 — 🟡 Partial
Phase 3 — 🟡 Partial
Phase 4 — 🟡 Partial
Phase 5 — 🟡 Partial
Phase 6 — 🟡 Partial
Phase 7 — ⬜ Not started
Phase 8 — ⬜ Not started
Phase 9 — ⬜ Not started
Phase 10 — 🟡 Started
```

## Phase 0 — Branch and Safety Setup

Status: ✅ Mostly done

Current branch:

```text
codex/awesome-design-system
```

Completed:

- ✅ Design system and agent skill baseline committed.
- ✅ Project data modularization started and committed.
- ✅ Project card badge and layout improvements committed.
- ✅ Session handoff markdown files committed.
- ✅ Working tree was clean after commit `46f3575 Refine project card badges and layout`.

Original suggested commit sequence:

```text
commit 1: design docs + skills
commit 2: project data refactor
commit 3: project card improvements
commit 4: case study improvements
commit 5: vault generator improvements
commit 6: final QA polish
```

Current progress against that sequence:

```text
commit 1 — ✅ Done
commit 2 — 🟡 Partial
commit 3 — ✅ Done
commit 4 — ⬜ Not started
commit 5 — 🟡 Partial
commit 6 — ⬜ Not started
```

## Phase 1 — Full Project Inspection

Status: ✅ Mostly done

### 1. Inspect app structure

Files reviewed during earlier sessions:

```text
src/App.tsx
src/main.tsx
src/pages/
src/components/
src/data/
src/styles.css
tailwind.config.js
vite.config.ts
package.json
```

Findings:

- ✅ App is React/Vite with routes for home, projects, case studies, lab, and admin.
- ✅ Project content is mostly data-driven.
- ✅ `src/data/projects.ts` is still large and should continue being split.
- ✅ `MediaDemoViewer` is already a strong component and should become more like an evidence console.

### 2. Inspect project content quality

Status: 🟡 Partial

Priority projects were reviewed enough to improve card badges:

```text
CIM / industrial training simulation
PID control virtual labs
Engineering education virtual labs
Ivris AR interior visualization
Nescafe VR booth
IBM agri-tech
```

Still needed:

- ⬜ Formal 1–5 scoring for every project.
- ⬜ Identify projects that should be hidden, rewritten, or promoted.

### 3. Inspect media assets

Status: 🟡 Partial

Known findings:

- ✅ Media is a major differentiator.
- ✅ Cards now put more emphasis on technical evidence.
- ⬜ Large image/video review is not done.
- ⬜ Thumbnail strength review is not done.

### 4. Inspect Obsidian system

Status: ✅ Mostly done

Completed:

- ✅ `scripts/obsidian/README.md` exists.
- ✅ `scripts/obsidian/PLAN.md` exists.
- ✅ `scripts/obsidian/config.json` exists.
- ✅ `scripts/obsidian/generate-vault.mjs` exists.
- ✅ `npm run vault` exists.
- ✅ `npm run vault:clean` exists.
- ✅ Generated vault is ignored by Git except `.gitkeep`.

Still needed:

- ⬜ Improve Dataview-oriented MOCs.
- ⬜ Add interview prep notes.
- ⬜ Add architecture notes.

### 5. Inspect design consistency

Status: 🟡 Partial

Completed:

- ✅ `DESIGN.md` added.
- ✅ `.agents/skills/portfolio-design-system/SKILL.md` added.
- ✅ `src/design/README.md` added.
- ✅ Project cards moved closer to premium engineering evidence cards.

Still needed:

- ⬜ Home page design pass.
- ⬜ Projects page design pass.
- ⬜ Case study page design pass.
- ⬜ Media viewer design pass.
- ⬜ Mobile visual QA.

## Phase 2 — Project Data Refactor

Status: 🟡 Partial

Current problem:

```text
src/data/projects.ts is still too large.
```

It still mixes:

```text
asset imports
project entries
helper data
shared content
exports
```

Completed:

- ✅ Shared data files started.
- ✅ Types split into project-related modules.
- ✅ Attribution data exists separately.
- ✅ CIM station details split.
- ✅ Some shared station/module files exist.

Target structure:

```text
src/data/projects/
  index.ts
  types.ts
  categories.ts
  attribution.ts

  shared/
    cimStationDetails.ts
    mr109StationBreakdown.ts
    pidModules.ts
    productContext.ts

  items/
    cim.ts
    industrialTraining.ts
    pidControlLabs.ts
    engineeringEducationLabs.ts
    atmosphereGuardian.ts
    plcDigitalTwin.ts
    ivris.ts
    fluidPhysics.ts
    nescafeVrBooth.ts
    metaQuestTraining.ts
    ibmAgriTech.ts
    webglSystems.ts
```

Still needed:

- ⬜ Move project entries into `src/data/projects/items/` one at a time.
- ⬜ Keep `src/data/projects.ts` as a compatibility export.
- ⬜ Run `npm run build` after each extraction.

Recommended next refactor approach:

1. Extract one project item.
2. Build.
3. Commit.
4. Repeat.

Do not split the whole file in one edit.

## Phase 3 — Design System Implementation

Status: 🟡 Partial

### 1. Project cards

Status: ✅ Major pass done

Completed:

- ✅ Evidence badges added through `technicalEvidence.badges`.
- ✅ Card badges rewritten as feature/value statements.
- ✅ Dot indicator badge reel added for projects with more than 3 badges.
- ✅ Up/down arrows added to vertical dot rail.
- ✅ Active dot follows scroll progress.
- ✅ Card sections aligned using fixed slots.
- ✅ `Inspect Case Study` buttons aligned better across cards.
- ✅ Card body increased for more breathing room.

Current feature badges:

Industrial Training Simulation Systems:

```text
Real-time machine state feedback
PLC-driven station logic
Sensor-driven automation
Robotic motion control
Visual program builder
Multi-station workflow simulation
Safety & emergency states
```

PID Virtual Labs Suite:

```text
Live parameter tuning
Real-time data visualization
Interactive graph feedback
Export experiment data
Performance metrics dashboard
```

Engineering Education Virtual Labs:

```text
Interactive experiment workflows
Real-time measurement feedback
Visual flow simulation
Graph-based lab analysis
Exploded-view system animation
```

Ivris Interior Design App:

```text
Runtime 3D asset loading
Collaborative room editing
Mobile AR furniture preview
Cross-platform WebGL/mobile app
Backend-connected app workflows
```

Nescafe Ice Coffee VR Surfing Experience:

```text
Short-session VR gameplay
Visitor-friendly onboarding
Timed arcade score loop
Branded collectible objectives
Multi-route environment variation
```

IBM Call for Code Smart Irrigation:

```text
IoT field monitoring workflow
Backend API data pipeline
ML irrigation decision support
Sensor-to-app data flow
Connected agriculture prototype
```

Still needed:

- ⬜ Visual browser pass after latest card changes.
- ⬜ Confirm mobile card height.
- ⬜ Confirm cards on `/projects` and home both feel right.

### 2. Home page

Status: ⬜ Not started

Needed:

- ⬜ Improve hero positioning.
- ⬜ Add technical proof strip near hero.
- ⬜ Add `What I simulate` section.

Target message:

```text
Unity simulation engineer for industrial training, educational labs, WebGL, VR, and AR.
```

Possible proof strip:

```text
Industrial Simulations
PID Virtual Labs
WebGL Case Studies
VR Training
AR Visualization
```

Possible `What I simulate` list:

```text
Sensors
Actuators
PLC-style state flow
PID response
Graph feedback
VR interactions
Runtime AR content
```

### 3. Projects page

Status: ⬜ Not started

Needed:

- ⬜ Better page intro.
- ⬜ Better visual treatment for filters.
- ⬜ Consider optional technical/recruiter filters later.

Possible future filters:

```text
All
WebGL-ready
Industrial
Educational Labs
VR/AR
Media-rich
Featured
```

### 4. Case study page

Status: ⬜ Not started

This is the recommended next visible upgrade.

Add a `Technical Review Summary` near the top.

Suggested structure:

```text
Technical Review Summary
Role: Unity/WebGL Simulation Developer
Platform: Unity, WebGL, VR, Mobile
Evidence: 5 media demos, 6 simulated behaviors, 4 station breakdowns
Best signal: PLC-style process simulation + media-backed case study
```

Goal:

Within 20 seconds, the visitor should understand:

```text
what was built
what platform
what behavior was simulated
what evidence exists
why it is impressive
```

### 5. Media gallery

Status: ⬜ Not started

Improve `src/components/MediaDemoViewer.tsx` into a stronger evidence console.

Needed:

- ⬜ Media type badge.
- ⬜ Behavior tags.
- ⬜ Better components/behaviors/notes hierarchy.
- ⬜ Better selected-media details panel.
- ⬜ Better mobile scrolling.
- ⬜ Stronger copy, such as `Watch evidence`.

## Phase 4 — Content Improvement

Status: 🟡 Partial

### 1. Rewrite weak project summaries

Status: ⬜ Not started as a systematic pass

Target summary pattern:

```text
Built a [platform/system] that simulates [specific behavior] for [training/education/visualization goal], with [technical evidence].
```

### 2. Add recruiter summaries

Status: ⬜ Not started

Potential fields:

```ts
recruiterSummary?: string;
technicalSummary?: string;
```

### 3. Add evidence scoring

Status: ⬜ Not started

Potential field:

```ts
evidence?: {
  mediaCount?: number;
  hasVideo?: boolean;
  hasWebGL?: boolean;
  hasStationBreakdown?: boolean;
  hasTechnicalHighlights?: boolean;
};
```

Alternative: derive this automatically from existing fields.

### 4. Improve public-safety wording

Status: 🟡 Partial

Completed:

- ✅ Attribution notes exist for company/client projects.
- ✅ Several case studies use public-safe context language.

Still needed:

- ⬜ Full public-safety pass for BEDO, Ivris, Nescafe, Tanta University, and IBM.
- ⬜ Check for overclaiming.

Preferred wording:

```text
This page focuses on my Unity simulation, visualization, UI, and educational implementation work.
```

Avoid:

```text
I built the full product/hardware/client system.
```

## Phase 5 — Obsidian Vault Improvement

Status: 🟡 Partial

Existing skills:

```text
portfolio-vault-curator
obsidian-vault-qa
nda-public-safety-review
codebase-to-second-brain
```

### 1. Improve frontmatter

Status: 🟡 Partial

Needed:

- ⬜ Confirm every generated project note has Dataview-ready frontmatter.
- ⬜ Add richer evidence/public-safety fields.

Target example:

```yaml
---
type: project
project_id: cim-station-behavior-simulation
category: Digital Twin / Industrial Training
status: portfolio-ready
public_safety: medium
platform:
  - Unity
  - WebGL
skills:
  - Unity
  - WebGL
  - Simulation & Digital Twin
companies:
  - BEDO
evidence:
  media: true
  webgl: true
  station_breakdown: true
---
```

### 2. Add Dataview MOCs

Status: ⬜ Not started

Needed MOCs:

```text
00 - Maps of Content/
  Portfolio Overview.md
  Industrial Simulation Projects.md
  Unity WebGL Projects.md
  PID and Control Systems.md
  VR and AR Projects.md
  Recruiter Talking Points.md
  Public Safety Review.md
```

### 3. Add interview notes

Status: ⬜ Not started

Needed folder:

```text
06 - Interview Prep/
```

Needed notes:

```text
Strongest Project Stories.md
STAR Stories - Industrial Simulation.md
STAR Stories - PID Labs.md
Technical Reviewer Talking Points.md
Recruiter-Friendly Summaries.md
```

### 4. Add codebase architecture notes

Status: ⬜ Not started

Needed folder:

```text
01 - Architecture/
```

Needed notes:

```text
Portfolio Website Architecture.md
Project Data System.md
Obsidian Vault Generator.md
Media Gallery System.md
Hero Settings System.md
```

## Phase 6 — Technical Quality Improvements

Status: 🟡 Partial

### 1. Build check

Status: ✅ Done repeatedly

Latest known passing command:

```bash
npm run build
```

### 2. Vault check

Status: 🟡 Partial

Known scripts:

```bash
npm run vault
npm run vault:clean
```

Still needed:

- ⬜ Run vault after future vault changes.
- ⬜ Inspect generated notes manually.

### 3. Add validation script

Status: ⬜ Not started

Needed file:

```text
scripts/validate-projects.mjs
```

Checks:

```text
duplicate project IDs
missing thumbnails
missing caseStudyUrl
empty highlights
broken media entries
hidden featured conflicts
invalid categories
missing public-safety attribution for company projects
```

Needed package script:

```json
"validate:projects": "node scripts/validate-projects.mjs"
```

Target validation sequence:

```bash
npm run validate:projects
npm run build
npm run vault
```

## Phase 7 — Performance and Asset Review

Status: ⬜ Not started

Build output shows large images and videos. This is expected for a media-heavy portfolio, but it still needs review.

Check:

```text
large PNGs over 2MB
large MP4s
duplicated thumbnails
unused images
unoptimized screenshots
```

Potential improvements:

```text
convert large PNGs to WebP where safe
keep original screenshots only if needed
lazy-load heavy media
use thumbnails first, full media after click
avoid autoplaying too much media
```

## Phase 8 — SEO and Shareability

Status: ⬜ Not started

Needed:

- ⬜ Page titles.
- ⬜ Meta descriptions.
- ⬜ Open Graph image.
- ⬜ Project-specific metadata.
- ⬜ Resume link clarity.
- ⬜ Canonical deployment URL.

Files to inspect:

```text
index.html
src/App.tsx
src/pages/CaseStudyPage.tsx
```

Potential fields:

```ts
project.seoDescription
project.ogImage
```

## Phase 9 — Accessibility and Mobile QA

Status: ⬜ Not started

Check:

```text
keyboard navigation
button focus states
image alt text
text contrast
mobile hero readability
project card height on mobile
media gallery mobile usability
reduced motion
```

Manual browser test pages:

```text
/
/projects
/projects/cim-station-behavior-simulation
/projects/pid-control-virtual-labs-suite
/projects/engineering-education-virtual-labs
/projects/ivris-ar-interior-visualization
/admin
```

## Phase 10 — Final Polish Sequence

Status: 🟡 Started

Recommended order:

```text
1. Finish project data split.                       🟡 Started
2. Improve project cards.                           ✅ Major pass done
3. Add technical review summary to case-study pages. ⬜ Recommended next
4. Improve MediaDemoViewer evidence presentation.    ⬜ Not started
5. Improve home hero and proof strip.                ⬜ Not started
6. Improve Obsidian frontmatter and MOCs.            🟡 Partial
7. Add project validation script.                    ⬜ Not started
8. Optimize largest media assets.                    ⬜ Not started
9. Add SEO/share metadata.                           ⬜ Not started
10. Final mobile/accessibility pass.                 ⬜ Not started
```

## Suggested Work Tickets

### Ticket 1 — Finish data modularization

Status: 🟡 Started

```text
Move project entries from src/data/projects.ts into src/data/projects/items/
Keep exports compatible.
Run npm run build.
```

### Ticket 2 — Project card evidence redesign

Status: ✅ Major pass done

```text
Show technical feature badges and align card layout.
Make cards feel like technical evidence panels.
Run npm run build.
```

Note: the original plan mentioned media count, WebGL status, behavior count, station count, and motion preview. The implemented direction changed toward feature/value badges instead, because that better matched the desired card communication.

### Ticket 3 — Case-study technical review summary

Status: ⬜ Recommended next

```text
Add top summary panel with role, platform, evidence, strongest signal, and public-safe attribution.
Run npm run build.
```

### Ticket 4 — Media gallery evidence console

Status: ⬜ Not started

```text
Improve MediaDemoViewer with technical captions, media type badges, selected evidence details, and mobile layout.
Run npm run build.
```

### Ticket 5 — Vault Dataview readiness

Status: 🟡 Partial

```text
Improve generated frontmatter, add MOCs, add interview-prep notes, improve raw note coverage report.
Run npm run vault.
```

### Ticket 6 — Public-safety review

Status: 🟡 Partial

```text
Review project data and generated notes for NDA/confidential/overclaiming risks.
Add safer wording where needed.
Run npm run build and npm run vault.
```

### Ticket 7 — Project validation script

Status: ⬜ Not started

```text
Create scripts/validate-projects.mjs.
Check IDs, thumbnails, media, categories, required fields, and attribution.
Add npm script.
Run validation + build.
```

## Definition of Done

The project is improved when:

```text
npm run build passes
npm run vault passes
major project cards show technical evidence
case-study pages explain role/platform/evidence clearly
Obsidian vault has usable MOCs and Dataview-ready metadata
project data is modular enough to edit safely
public-safety wording is clean
mobile pages still look good
```

Current status against definition of done:

```text
npm run build passes                                      ✅ Done
npm run vault passes                                      🟡 Verify after vault changes
major project cards show technical evidence               ✅ Major pass done
case-study pages explain role/platform/evidence clearly    ⬜ Next recommended work
Obsidian vault has usable MOCs and Dataview metadata        🟡 Partial
project data is modular enough to edit safely              🟡 Partial
public-safety wording is clean                             🟡 Partial
mobile pages still look good                               ⬜ Needs manual QA
```

## Next Recommended Task

Start with:

```text
Ticket 3 — Case-study technical review summary
```

Reason:

```text
It gives the biggest visible portfolio upgrade for the least risk.
```

# Portfolio Vault Curator

## Purpose

Use this skill when improving the portfolio's Obsidian second-brain vault, especially notes generated from portfolio project data and raw Markdown files.

The goal is to make the vault useful for:

- remembering project details
- preparing recruiter-safe case studies
- finding talking points for interviews
- connecting projects, skills, companies, media, and technical concepts
- keeping website content and vault notes aligned

## When to use

Use this skill when the task mentions:

- Obsidian vault
- second brain
- portfolio notes
- MOC / map of content
- project documentation
- skill notes
- company notes
- media notes
- generated vault quality
- turning portfolio project data into better notes

## Important paths

```text
src/data/projects.ts
src/data/projects/
src/data/profile.ts
src/md files/
scripts/obsidian/config.json
scripts/obsidian/generate-vault.mjs
scripts/obsidian/README.md
obsidian-vault/
```

## Operating rules

1. Treat `src/data/projects.ts`, `src/data/projects/`, and `src/md files/` as source material.
2. Treat `obsidian-vault/` as generated output unless the user explicitly asks for manual vault files.
3. Prefer improving the generator/config over manually editing generated notes.
4. Preserve recruiter-safe wording and attribution notes.
5. Keep notes readable outside Obsidian; wikilinks should add value, not replace normal explanation.
6. Do not expose private implementation details, source-code internals, credentials, or exact client-confidential process details.

## Curator workflow

### 1. Inspect source data

Check:

- project ids, titles, aliases, categories
- tech stack and platform values
- `highlights`, `technicalHighlights`, `simulatedBehaviors`, `stationBreakdown`
- raw markdown notes under `src/md files/`
- mappings in `scripts/obsidian/config.json`

### 2. Improve metadata

Every important generated project note should have enough metadata for Dataview-style querying:

```yaml
---
type: project
project_id: example-project-id
category: Educational Simulations
status: portfolio-ready
public_safety: low
platform:
  - Unity
  - WebGL
skills:
  - Unity
  - Simulation
  - WebGL
companies:
  - BEDO
---
```

Use controlled values where possible.

### 3. Improve note body structure

Prefer this structure for project notes:

```markdown
# Project Name

## Summary

Short explanation of what this project proves.

## Why it matters

Explain the portfolio value.

## My role

Clear, recruiter-safe role statement.

## Technical signals

- Concrete technical strength
- Simulation behavior
- UI/UX or WebGL constraint

## Related skills

- [[Unity]]
- [[Simulation & Digital Twin]]

## Related media

- [[Media - Demo Name]]

## Interview talking points

- Problem solved
- Technical decision
- Constraint handled

## Public safety notes

Mention attribution, NDA caution, or what should not be overclaimed.
```

### 4. Improve MOCs

Create or improve maps of content for:

- portfolio overview
- Unity simulation work
- industrial training systems
- PID/control systems
- VR/AR projects
- WebGL projects
- companies/clients
- media evidence
- skills and interview stories

A good MOC should answer: "Where should I go next?"

### 5. Add interview utility

For each major project, try to surface:

- 1-line recruiter summary
- technical reviewer summary
- STAR story material
- strongest proof points
- weak/missing evidence
- media/demo link references
- safe wording for public presentation

## Quality checklist

Before finishing, check:

- No broken obvious project ids.
- Project notes link to skill notes.
- Skill notes link back to projects.
- Company notes link to related projects.
- Raw markdown notes are either mapped or listed as unmatched.
- Notes do not claim ownership of physical hardware or client IP.
- Important project pages have recruiter-safe summaries.
- MOCs are short enough to scan.

## Validation

After generator/config changes, run:

```bash
npm run vault
```

If cleaning generated output is intended, run:

```bash
npm run vault:clean
```

If project data changed, also run:

```bash
npm run build
```

## Output style

When reporting back, include:

- files changed
- what improved
- remaining gaps
- commands run and whether they passed

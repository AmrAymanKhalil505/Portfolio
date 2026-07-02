# Codebase to Second Brain

## Purpose

Use this skill when converting an undocumented or weakly documented codebase into an Obsidian-style technical knowledge base.

The goal is to produce useful notes that help a developer understand:

- architecture
- entry points
- modules/components
- data flow
- runtime behavior
- build/deploy flow
- important domain concepts
- risks and TODOs
- how to onboard into the codebase

## When to use

Use this skill when the task mentions:

- undocumented codebase
- second brain for code
- generate Obsidian vault from repo
- codebase documentation
- architecture notes
- onboarding guide
- understand project
- knowledge graph
- document unknown project
- repo-to-vault

## Inputs

Possible inputs:

- local repo path
- project folder already opened by agent tools
- source files
- README/package/build files
- Unity project files
- markdown notes
- diagrams/screenshots/media

## Output targets

For this portfolio repo, generated or curated notes should usually connect to:

```text
obsidian-vault/
src/md files/
scripts/obsidian/config.json
scripts/obsidian/generate-vault.mjs
```

For other repos, create an Obsidian-ready structure like:

```text
second-brain/
  00 - Maps of Content/
  01 - Architecture/
  02 - Modules/
  03 - Workflows/
  04 - Domain Concepts/
  05 - Decisions/
  06 - Onboarding/
  07 - Risks and TODOs/
```

## Core workflow

### 1. Repo scan

Identify:

- project type and language
- package/build files
- entry points
- main directories
- generated folders to ignore
- tests
- deployment/config files
- documentation that already exists

Ignore noisy folders:

```text
node_modules/
dist/
build/
.git/
Library/
Temp/
Obj/
Logs/
UserSettings/
.vs/
.vscode/ when not relevant
```

### 2. Build a project map

Create notes for:

- entry points
- major modules
- app/page routes
- data model
- UI components
- scripts/tools
- configuration
- assets/media strategy
- external integrations
- deployment flow

### 3. Extract relationships

Capture links like:

- page uses component
- component renders project data
- script reads config
- config maps raw notes to generated notes
- project note links to skills and media
- Unity scene uses systems/scripts/prefabs

Use normal text plus wikilinks.

### 4. Write architecture notes

A good architecture note should include:

```markdown
# Architecture - Project Name

## What this system does

## Main entry points

## Important folders

## Data flow

## Build/deploy flow

## Extension points

## Risks and fragile areas

## Good next improvements
```

### 5. Write module notes

A module note should include:

```markdown
# Module - Name

## Responsibility

## Important files

## Inputs

## Outputs

## Depends on

## Used by

## Change safely

## Common failure modes
```

### 6. Write onboarding notes

An onboarding note should include:

```markdown
# Onboarding - Project Name

## First 30 minutes

## First day

## How to run locally

## How to build

## Where content lives

## How to add a feature

## How to avoid breaking things
```

## Unity-specific workflow

For Unity projects, inspect:

```text
Assets/Scenes/
Assets/Scripts/
Assets/Prefabs/
Assets/ScriptableObjects/
ProjectSettings/
Packages/manifest.json
```

Document:

- scene list
- gameplay/simulation loop
- managers/controllers
- ScriptableObjects/data assets
- UI flow
- input/interaction systems
- physics/simulation systems
- external SDKs
- build targets
- WebGL/VR/mobile constraints

Avoid claiming private implementation details if this is client work.

## Portfolio repo workflow

For this portfolio specifically:

1. Inspect `src/App.tsx` and routes.
2. Inspect `src/pages/` and `src/components/`.
3. Inspect `src/data/projects.ts` and `src/data/projects/`.
4. Inspect `scripts/obsidian/`.
5. Generate notes that explain how website content becomes vault knowledge.
6. Make sure vault notes can support portfolio writing and recruiter-safe explanations.

## Public safety

When documenting client/company work:

- document behavior, not private code
- avoid credentials, private URLs, internal paths
- avoid exact unreleased client process details
- add attribution notes for products/companies
- mark risky notes as review-needed

## Validation

For this portfolio repo:

```bash
npm run build
npm run vault
```

For other repos, run the safest available build/test/documentation commands after inspection.

## Output style

Return:

- project map summary
- generated/changed note files
- architecture decisions captured
- gaps that need human input
- commands run and results

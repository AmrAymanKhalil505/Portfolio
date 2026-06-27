# Obsidian Vault Generator Plan

## Goal

Add a local Obsidian second-brain vault generator inside the existing React/Vite portfolio repo.

The generator will read portfolio project data and raw Markdown notes, then generate a deterministic Obsidian vault into:

```text
obsidian-vault/
```

The generated vault will be gitignored by default.

## Files To Add

```text
scripts/obsidian/
  generate-vault.mjs
  config.json
  README.md

obsidian-vault/
  .gitkeep
```

## Files To Update

```text
package.json
.gitignore
```

## NPM Scripts

Add:

```json
{
  "vault": "node scripts/obsidian/generate-vault.mjs",
  "vault:clean": "node scripts/obsidian/generate-vault.mjs --clean"
}
```

## Gitignore Update

Add:

```gitignore
obsidian-vault/*
!obsidian-vault/.gitkeep
```

## Generated Vault Structure

```text
obsidian-vault/
  00 - Maps of Content/
    Portfolio Projects.md
    Skills Map.md
    Companies and Clients.md
    NDA Safe Portfolio Notes.md
  01 - Projects/
  02 - Skills/
  03 - Companies/
  04 - Media Notes/
  05 - Templates/
  attachments/
```

## Data Loading Strategy

Use Node.js.

Try to load `src/data/projects.ts` through Vite's SSR loader so the generator can use the real exported project data, including asset imports and post-declaration mutations.

Do not modify:

```text
src/data/projects.ts
src/md files/
src/assets/
```

## Raw Notes Strategy

Read Markdown files from:

```text
src/md files/
```

Match notes to projects using:

1. Explicit mappings in `scripts/obsidian/config.json`
2. Project `id`
3. Slugified project title
4. Loose title matching as fallback

## Project Notes

Generate one Obsidian note per project under:

```text
01 - Projects/
```

Each project note will include frontmatter:

```yaml
---
type: project
status: portfolio-ready
company:
category:
role:
platforms:
technologies:
timeline:
nda_risk:
source:
---
```

Each project note will include these sections:

```md
# Project Name

## Summary

## My Role

## Technologies Used

## What I Built

## Simulated / Implemented Behavior

## Media

## NDA Notes

## Related Skills

## Related Projects

## Source References
```

## Wikilinks And Tags

Generate Obsidian wikilinks such as:

```md
[[Unity]]
[[WebGL]]
[[BEDO]]
[[Digital Twin]]
```

Generate tags such as:

```md
#project
#unity
#webgl
#vr
#digital-twin
#nda-safe
#needs-review
```

## Skill Notes

Generate notes under:

```text
02 - Skills/
```

Skills will be derived from project `tech` fields.

Each skill note will link back to projects that use it.

## Company / Client Notes

Generate notes under:

```text
03 - Companies/
```

Companies and clients will be inferred from:

- `productContext`
- `attributionNote`
- configured aliases in `config.json`

Examples:

```md
[[BEDO]]
[[Ivris]]
[[Nescafe]]
[[IBM]]
[[Tanta University]]
```

## MOC Notes

Generate these index notes:

```text
00 - Maps of Content/Portfolio Projects.md
00 - Maps of Content/Skills Map.md
00 - Maps of Content/Companies and Clients.md
00 - Maps of Content/NDA Safe Portfolio Notes.md
```

## NDA Scanner

Add configurable rules in:

```text
scripts/obsidian/config.json
```

The scanner will flag notes as `needs-review` if they include:

- credentials
- private URLs
- local file paths
- source-code blocks
- PLC code details
- internal client implementation wording
- exact sensor/component lists, if configured
- words like `confidential`, `NDA`, `internal`, `proprietary`

Flagged notes get:

```yaml
nda_risk: needs-review
```

and:

```md
#needs-review
```

Otherwise they get:

```yaml
nda_risk: low
```

and:

```md
#nda-safe
```

## Rerun Safety

The generator will be deterministic and safe to rerun.

It will:

- sort projects, skills, and companies consistently
- write stable filenames
- preserve `obsidian-vault/.gitkeep`
- avoid touching original portfolio files
- maintain a generated-file manifest
- avoid deleting manually added vault files unless `--clean` is used

## Clean Mode

Running:

```bash
npm run vault:clean
```

will clean only generated vault contents after path safety checks, then regenerate the vault.

## Verification

After implementation, run:

```bash
npm run vault
npm run vault:clean
npm run build
```

Confirm generated files exist and the React portfolio still builds.

# Portfolio Agent Skills

This folder contains project-local agent skills for maintaining the portfolio website and its Obsidian second-brain vault.

Use these skills when working on:

- portfolio project notes
- Unity/WebGL simulation documentation
- generated Obsidian vault quality
- recruiter-safe public documentation
- codebase-to-second-brain conversion

## Skills

| Skill | Use when |
| --- | --- |
| `portfolio-vault-curator` | Improving generated project notes, MOCs, tags, links, and metadata. |
| `unity-project-documenter` | Documenting Unity projects, simulations, scenes, systems, and WebGL behavior. |
| `obsidian-vault-qa` | Checking vault structure, broken links, weak notes, duplicates, and orphan notes. |
| `nda-public-safety-review` | Reviewing portfolio/vault content before sharing publicly or with recruiters. |
| `codebase-to-second-brain` | Turning an undocumented codebase into an Obsidian-style technical knowledge base. |
| `portfolio-design-system` | Preserving and improving the portfolio's premium engineering simulation visual identity. |

## Important project paths

```text
src/data/projects.ts
src/data/projects/
src/data/profile.ts
src/md files/
scripts/obsidian/config.json
scripts/obsidian/generate-vault.mjs
obsidian-vault/
```

Run `npm run build` after code/data changes that affect the website.
Run `npm run vault` or `npm run vault:clean` after changes that affect generated vault output.

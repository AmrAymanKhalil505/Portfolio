# Obsidian Vault Generator

Generates a local Obsidian second-brain vault from portfolio project data.

## Usage

```bash
npm run vault
```

Generates the vault into `obsidian-vault/`.

To clean and regenerate:

```bash
npm run vault:clean
```

## How It Works

1. Loads project data from `src/data/projects.ts` via Vite SSR.
2. Reads raw Markdown notes from `src/md files/`.
3. Matches notes to projects using explicit mappings, project IDs, slugified titles, and loose matching.
4. Generates project notes, skill notes, company/client notes, and Maps of Content (MOC) index notes.
5. Runs an NDA scanner to flag notes that may contain sensitive content.
6. Writes a deterministic, stable vault output.

## Configuration

See `config.json` for:

- **companyAliases** — Company name detection patterns
- **explicitNoteMappings** — Manual note-to-project mappings
- **ndaRules** — NDA scanner sensitivity patterns
- **skillCategories** — Skill grouping for skill notes
- **excludedMdFiles** — Markdown files to skip

## Generated Structure

```
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

## Rerun Safety

The generator is deterministic. It sorts all items, writes stable filenames, preserves `.gitkeep`, and maintains a generated-file manifest. It will not delete manually added vault files unless `--clean` is used.

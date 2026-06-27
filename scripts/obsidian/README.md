# Obsidian Vault Generator

This tool generates a local Obsidian second-brain vault from the portfolio data and raw project notes.

## Commands

```bash
npm run vault
npm run vault:clean
```

`npm run vault` generates or updates notes in `obsidian-vault/`.

`npm run vault:clean` removes previously generated files listed in `.generated-manifest.json`, then regenerates the vault.

## Git Behavior

Generated vault contents are ignored by default:

```gitignore
obsidian-vault/*
!obsidian-vault/.gitkeep
```

This keeps private/generated notes local unless you explicitly decide to track them.

## What It Generates

```text
obsidian-vault/
  00 - Maps of Content/
  01 - Projects/
  02 - Skills/
  03 - Companies/
  04 - Media Notes/
  05 - Templates/
  attachments/
```

The generator creates:

- project notes
- component/module notes from raw Markdown
- skill notes
- company/client notes
- media notes
- MOC/index notes
- raw note coverage report
- NDA/public-safety review notes

## Configuration

Edit `scripts/obsidian/config.json` to adjust:

- raw note to project mappings
- component note mappings
- company aliases
- skill categories and talking points
- NDA scanner patterns

## Design Notes

The generated notes are intended to be readable by a human outside Obsidian, while still using Obsidian-style wikilinks and tags.

The generator avoids modifying original portfolio files.

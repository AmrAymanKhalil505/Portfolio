# Excellent Obsidian Second-Brain Vault Plan

## Goal

Create a local Obsidian vault generator inside this portfolio repo that produces notes a human can actually use to understand the projects, skills, company context, media evidence, and NDA-safe portfolio story.

The generator should create structured notes from:

- `src/data/projects.ts`
- `src/md files/`
- configurable mappings in `scripts/obsidian/config.json`

Generated vault contents live in:

```text
obsidian-vault/
```

Generated contents are ignored by Git by default, except `obsidian-vault/.gitkeep`.

## Quality Bar

The output should feel like a second brain, not a field dump.

Each generated note should answer:

- What is this?
- Why does it matter in the portfolio?
- What did I personally do?
- What technical proof does it provide?
- What is safe to say publicly?
- What should be reviewed before sharing?

## Structure

```text
obsidian-vault/
  00 - Maps of Content/
    Portfolio Projects.md
    Skills Map.md
    Companies and Clients.md
    NDA Safe Portfolio Notes.md
    Raw Notes Coverage.md
  01 - Projects/
  02 - Skills/
  03 - Companies/
  04 - Media Notes/
  05 - Templates/
  attachments/
```

## Project Notes

Project notes should include:

```md
# Project Name

## One-Line Summary

## Project Interpretation

## Context

## My Role

## What I Built

## System Behavior

## Technical Proof

## Media

## NDA / Public Safety Notes

## Related Skills

## Related Projects

## Source References
```

## Skill Notes

Skill notes should explain what a skill means in this specific portfolio, not just list linked projects.

Each skill note should include:

- portfolio meaning
- related technologies
- strongest examples
- project evidence
- interview talking points

## Company Notes

Company notes should clarify ownership and positioning.

They should include:

- relationship to portfolio
- projects
- public-safe positioning
- related skills
- source references

## NDA Scanner

The scanner should output exact reasons, not just `needs-review`.

Examples:

- credential wording
- confidentiality wording
- private URL
- local file path
- source-code block
- PLC code detail
- exact sensor or component list

Flagged notes should include safer framing guidance.

## Raw Notes Coverage

The generator should produce a report that shows:

- which raw notes were matched to projects
- which raw notes became component notes
- which notes were unmatched

This makes it easy to judge if the generator is using the source material well.

## Rerun Safety

The generator must:

- sort output deterministically
- write stable filenames
- preserve `obsidian-vault/.gitkeep`
- keep generated files local/ignored by default
- maintain `.generated-manifest.json`
- clean only generated files in `--clean` mode
- never modify `src/data/projects.ts`, `src/md files/`, or `src/assets/`

## Verification

Run:

```bash
npm run vault
npm run vault:clean
npm run build
```

Then inspect a few generated notes for human readability.

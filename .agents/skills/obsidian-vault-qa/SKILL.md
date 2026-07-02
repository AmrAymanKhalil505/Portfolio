# Obsidian Vault QA

## Purpose

Use this skill to review and improve the quality of the generated Obsidian vault for the portfolio.

The goal is to make the vault easy to search, navigate, query, and reuse for portfolio writing, interview preparation, and technical memory.

## When to use

Use this skill when the task mentions:

- vault QA
- broken links
- orphan notes
- duplicate notes
- Dataview quality
- note metadata
- frontmatter consistency
- generated vault validation
- MOC quality
- raw note coverage
- weak project notes
- vault structure cleanup

## Important paths

```text
obsidian-vault/
scripts/obsidian/generate-vault.mjs
scripts/obsidian/config.json
scripts/obsidian/README.md
src/md files/
src/data/projects.ts
src/data/projects/
```

## Operating rules

1. Prefer fixing generator logic/config rather than manually editing generated notes.
2. Do not treat every orphan note as a problem; some index/template notes can be intentionally standalone.
3. Flag issues clearly as high, medium, or low priority.
4. Keep public-safety and attribution notes intact.
5. Avoid deleting generated content unless the user asks for cleanup.

## QA workflow

### 1. Generate or inspect current vault

If needed, run:

```bash
npm run vault
```

For a full clean regeneration:

```bash
npm run vault:clean
```

### 2. Check structure

Expected structure:

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

Flag missing folders or unexpected generated locations.

### 3. Check frontmatter

Important notes should have:

- `type`
- `title` or clear heading
- project/category identifiers where relevant
- tags or skills where useful
- public-safety/review status if generated

Recommended note types:

```text
project
skill
company
media
moc
review
template
component
```

### 4. Check links

Look for:

- broken wikilinks
- project notes without skill backlinks
- skill notes without project examples
- media notes not linked from project notes
- company notes not linked from project notes
- duplicate company or skill names
- inconsistent spelling: WebGL vs Web GL, PID vs P.I.D., etc.

### 5. Check note quality

A good project note has:

- clear summary
- role statement
- technical evidence
- related skills
- related media
- interview talking points
- public-safety note

A weak note usually has:

- generic claims
- no evidence links
- no specific behavior
- no relation to skills/projects
- no recruiter-safe summary

### 6. Check raw note coverage

Compare `src/md files/` with generator mappings in:

```text
scripts/obsidian/config.json
```

Flag:

- raw notes not mapped to projects
- component notes without parent project ids
- duplicate raw notes covering same concept
- notes that should become component notes

### 7. Check Dataview readiness

The vault should support queries like:

```dataview
TABLE category, platform, skills
FROM "01 - Projects"
WHERE type = "project"
SORT category ASC
```

If metadata is inconsistent, recommend generator/frontmatter fixes.

## Issue severity

### High priority

- generated vault command fails
- broken project pages or missing project ids
- public-risk content included in notes
- raw notes silently ignored
- project notes missing essential summary/role

### Medium priority

- inconsistent frontmatter keys
- duplicate skill/company notes
- weak backlinks
- missing media references
- inconsistent category/tag naming

### Low priority

- formatting inconsistencies
- long notes that need summarization
- minor spelling/capitalization issues
- optional MOC improvements

## Output format

Return a compact report:

```markdown
## Vault QA Result

Build/generation:
- npm run vault: passed/failed

High priority:
- Issue → suggested fix

Medium priority:
- Issue → suggested fix

Low priority:
- Issue → suggested fix

Files to change next:
- path
```

## Validation

After generator/config edits, run:

```bash
npm run vault
```

If website project data changed, run:

```bash
npm run build
```

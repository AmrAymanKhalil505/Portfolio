# NDA Public Safety Review

## Purpose

Use this skill before publishing, sharing, exporting, or presenting portfolio/vault content publicly.

The goal is to keep the portfolio strong without exposing private client information, proprietary implementation details, credentials, private URLs, local paths, or overclaims about hardware/product ownership.

## When to use

Use this skill when the task mentions:

- NDA
- public safety
- recruiter-safe wording
- publish portfolio
- share with recruiter
- public case study
- client-safe documentation
- attribution notes
- confidential content
- privacy review
- BEDO/Ivris/Nescafe/company ownership wording

## Important paths

```text
src/data/projects.ts
src/data/projects/
src/md files/
scripts/obsidian/config.json
scripts/obsidian/generate-vault.mjs
obsidian-vault/
public/
```

## Review rules

### Safe to say

Use wording like:

- Built a Unity/WebGL simulation of visible behavior.
- Simulated PLC-style process states for training and visualization.
- Created educational UI, feedback, and interaction flows.
- Developed runtime visualization and media/demo presentation.
- Worked on Unity implementation, simulation logic, UI, and platform delivery.
- Portfolio page focuses on my implementation work, not ownership of the physical product.

### Avoid saying

Avoid or flag wording like:

- Full internal source code
- Exact client implementation
- Proprietary algorithm
- Real production PLC code
- Credentials, keys, tokens, passwords
- Private server URLs or IP addresses
- Local Windows paths
- Internal repo names
- Full hardware design ownership
- Client-confidential process details
- Exact I/O mappings, addresses, private data blocks, or code blocks if not already cleared

## Risk levels

### High risk

Immediately flag:

- API keys, secrets, tokens, passwords
- private URLs/IPs/local paths
- source-code blocks copied from client work
- confidential/NDA/proprietary wording
- exact internal implementation details
- files that reveal private folder/user names

### Medium risk

Review carefully:

- exact PLC component lists
- TIA Portal / ladder logic specifics
- screenshots with private UI, customers, dashboards, or internal names
- detailed machine sequences that may expose client process design
- claims of owning products/hardware from BEDO, Ivris, Nescafe, or other companies

### Low risk

Usually acceptable:

- high-level simulated behavior
- public product names with attribution
- public YouTube/demo media
- general skill claims
- screenshots already intended for portfolio use
- generic station behavior summaries

## Review workflow

### 1. Inspect target content

Check the requested files or generated vault notes.

If no target is specified, inspect:

```text
src/data/projects.ts
src/md files/
scripts/obsidian/config.json
```

### 2. Search for risk patterns

Look for:

```text
password
token
secret
api key
credential
private key
confidential
proprietary
under nda
localhost
127.0.0.1
192.168.
10.x.x.x
C:\
TIA Portal
ladder logic
PLC code
function block
data block
I/O address
input address
output address
```

### 3. Check overclaiming

For company/client projects, verify wording separates:

- what Amr implemented
- what belongs to the company/client
- what is public product context
- what is only simulation/visualization behavior

### 4. Recommend safer wording

For every risky sentence, provide a safer replacement.

Example:

Risky:

```markdown
I recreated the full BEDO machine and its PLC implementation.
```

Safer:

```markdown
I built a Unity training simulation that visualizes station behavior, sensor feedback, actuator states, and PLC-style process flow for educational review.
```

## Attribution guidance

When mentioning company/product names, include clear attribution where relevant:

```markdown
Product names and hardware references belong to their respective owners. This page focuses on my Unity simulation, visualization, UI, and educational implementation work.
```

## Output format

Return:

```markdown
## Public Safety Review

Overall risk: low / medium / high

High-risk findings:
- Finding
- Safer replacement

Medium-risk findings:
- Finding
- Safer replacement

Safe strengths:
- Strong wording that can stay

Recommended edits:
- File path → change summary
```

## Validation

If you change project data, run:

```bash
npm run build
```

If you change vault generator/config, run:

```bash
npm run vault
```

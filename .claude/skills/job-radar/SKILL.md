---
name: job-radar
description: Run Amr's deep job search now and update his Job Radar board (jobs, freelance, companies to watch, talent networks). Use when Amr asks to run the job hunt, refresh the job board, or look for jobs.
---

# Job Radar run

Board (private artifact, only Amr can open it): https://claude.ai/artifact/3NScXvVVESx1YdHy9qcpTU
This file is the single source of truth: the cloud routine "Job Radar — job hunt every 3 days" (claude.ai/code/routines) just follows it, and a manual run here does the same thing.
Never apply, bid, message, sign up or log in anywhere. Do not edit or commit repo files during a run.

## 1. Read the board (ArtifactData tool; load it with ToolSearch "select:ArtifactData,Workflow,PushNotification")
- get `meta/latest` (keep its `version`).
- list `jobs`, `companies` and `marks` (query.limit 1000, follow next_cursor). Keep each doc's id, version, url, score, foundAt, closed.
- `marks` is Amr's Save/Applied/Not interested/notes data. **Never write to it.**
- Today: `date -u +%F`. WEEKLY = meta.companiesRunAt missing or 6+ days before today.
- RECHECK = up to 25 job docs with score >= 55, not closed, foundAt at least 2 days ago, whose mark status is not "not_interested" or "applied": `[{url, title}]`.

## 2. Run the search
Workflow tool with `scriptPath: ".claude/workflows/job-hunt.js"` and args:
`{"today": "<today>", "includeCompanies": WEEKLY, "runScout": WEEKLY, "knownUrls": [<urls of all existing job docs>], "regionsHint": "<if not WEEKLY: compact JSON of meta.regions (region, hiringModel, boardsAndSites); else \"\">", "recheck": RECHECK}`
It costs roughly 1M tokens. In a manual chat, tell Amr before starting; the scheduled routine runs without asking.
If the returned summary is truncated, read the full result from the task output file or the run's journal.jsonl.

## 3. Prepare documents (python for hashing / JSON files)
- Keep returned `jobs` except kind "freelance" with score < 35.
- Job id = "j" + sha1(url with ?query/#fragment removed, trailing "/" removed, lowercased)[:16]. Fields = job minus keep/duplicateOf, plus foundAt (today, new docs only) and runId (today).
- WEEKLY: company id = "c-" + name lowercased, every run of non [a-z0-9] chars -> "-", trimmed of "-", max 60 chars. Fields = company plus foundAt (new only).

## 4. Write (ArtifactData "batch", max 50 writes each, file_path JSON files)
- New job/company docs: op "set".
- Existing docs (same id): op "update" with if_version, every field EXCEPT foundAt.
- Recheck results: status "closed" -> update the job `{closed: true, closedAt: today, closedEvidence}`; "open" -> `{lastCheckedAt: today}`; "unknown" -> no change.
- Prune: op "delete" (if_version) for job docs whose foundAt is over 30 days old AND that have no doc in `marks`. Never delete marked jobs or companies.
- `meta/latest` (op "update", if_version): jobsRunAt = today; sourcesTried = [{source (max 60 chars), status (first words, max 30 chars)}]; counts = {jobs, freelance, companies} board totals after the run, plus droppedLowScore. If WEEKLY and scout is not null: companiesRunAt = today, regions, scoutNotes, searchTerms, and networks = scout.talentNetworks.
- If a write fails because a version changed, re-read that document and redo only that write.

## 5. Notify and report
- If any NEW job or freelance item scored >= 70, send ONE PushNotification: "<n> new strong matches on Job Radar: <best title> at <company> (<score>)". Otherwise send none.
- Final report: new jobs, new freelance, updated, closed, pruned, companies (weekly), blocked sources, top 5 new items (title, company, score).

## Known
- Upwork, Guru, We Work Remotely, Remote OK, Jobicy and Games Jobs Direct block automated reading; LinkedIn guest pages are the best source.
- Cloud runs need the environment's network access set to Full, or WebFetch fails.
- To change sources, profile or scoring, edit `.claude/workflows/job-hunt.js` and push; to change these steps, edit this file and push. The routine reads both from the repo.

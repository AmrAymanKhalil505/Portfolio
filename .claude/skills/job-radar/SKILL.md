---
name: job-radar
description: Run Amr's deep job search now and update his Job Radar board (jobs, freelance, companies to watch). Use when Amr asks to run the job hunt, refresh the job board, or look for jobs.
---

# Job Radar run

Board (private artifact, only Amr can open it): https://claude.ai/artifact/3NScXvVVESx1YdHy9qcpTU
The same steps also run automatically every 3 days as the cloud routine "Job Radar — job hunt every 3 days" (claude.ai/code/routines). A manual run here does the same thing.
Never apply, bid, message, sign up or log in anywhere.

1. **Read the board** with the ArtifactData tool: get `meta/latest` (keep `version`); list `jobs`, `companies` and `marks` (limit 1000, follow cursors). Never write to `marks`; that is Amr's Save/Applied/notes data. Today's date: `date -u +%F`. WEEKLY = companiesRunAt missing or 6+ days old.

2. **Run the Workflow tool** with `scriptPath: ".claude/workflows/job-hunt.js"` and args
   `{"today": "<today>", "includeCompanies": WEEKLY, "runScout": WEEKLY, "knownUrls": [<urls of existing job docs>], "regionsHint": "<if not WEEKLY: compact JSON of meta.regions>"}`.
   It costs roughly 1M tokens; tell Amr before starting a manual run.

3. **Prepare documents** (python for hashing):
   - Keep returned jobs except kind "freelance" with score < 35.
   - Job id = "j" + sha1(url without ?query/#fragment, without trailing "/", lowercased)[:16]. Fields = job minus keep/duplicateOf, plus foundAt (today, new docs only) and runId (today).
   - WEEKLY: company id = "c-" + slug(name) (lowercase, non [a-z0-9] runs to "-", trimmed, max 60). Fields = company plus foundAt (new only).

4. **Write** with ArtifactData `batch` (max 50 per batch, file_path JSON files): new docs `set`; existing docs `update` with if_version and without foundAt; `delete` (if_version) unmarked jobs whose foundAt is over 30 days old; update `meta/latest`: jobsRunAt, sourcesTried, counts; WEEKLY also companiesRunAt, regions, scoutNotes, searchTerms.

5. **Report**: new jobs, new freelance, updated, pruned, blocked sources, top 5 new by score.

Known: Upwork, Guru, We Work Remotely, Remote OK, Jobicy and Games Jobs Direct block automated reading; LinkedIn guest pages are the best source. Cloud runs need the environment's network access set to Full or WebFetch fails.
To change the search (sources, profile, scoring), edit `.claude/workflows/job-hunt.js`, and also update the cloud routine's prompt, which carries its own copy of the script.

---
name: handoff
description: End-of-session handover so the next chat (phone, web, or PC) can continue exactly where this one stopped. Use when Amr says handoff, wrap up, end of session, or asks to save progress for another chat.
---

# Session handoff

1. **Collect the state**
   - `git status --short` and `git log --oneline origin/main..HEAD` (unpushed commits).
   - What was done this session, what was decided, what is half-finished, and what Amr still needs to answer or do himself.

2. **Write the session note**: `docs/session-notes/YYYY-MM-DD-<topic>.md` (today's date, short topic):
   - **Done**: bullet list with commit hashes where they exist.
   - **Decisions**: anything Amr decided that the code doesn't show (e.g. "keep the candid VR note").
   - **Open / waiting on Amr**: questions and facts still missing.
   - **Next steps**: in priority order, specific enough to start without re-reading the chat.
   - **Gotchas**: anything that cost time (environment quirks, tools that failed and the workaround).

3. **Update `docs/backlog.md`**: mark finished items ✅, add new findings with the right priority, keep "In progress" accurate.

4. **New durable facts**: if Amr confirmed a fact used in proposals (rate, availability, experience, tools), add it to `.claude/skills/proposal/facts.md`. If a project rule changed, update `CLAUDE.md`.

5. **Report to Amr** in a few lines: what's saved where, what's unpushed, and the one-line next step. Ask before committing and pushing (CLAUDE.md git rule); if he says yes, commit with `docs: session handoff <topic>` and push.

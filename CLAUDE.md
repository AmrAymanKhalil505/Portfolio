# CLAUDE.md

Personal portfolio for a Unity simulation engineer. Audience: recruiters, technical leads,
and prospective clients. Vite + React + TS + Tailwind, deployed to GitHub Pages
(amraymankhalil505.github.io/Portfolio, base `/Portfolio/`) by .github/workflows/deploy-pages.yml on
every push to main. netlify.toml / public/_redirects are not used by the live site.

## Read first
- UI/visual changes: follow DESIGN.md (tokens, tone, Do/Don't). Don't add new colors or effects
  without asking.
- Project content lives in src/data/projects.ts; case-study pages are generated from it.
  Edit data, not page components, to change a project.

## Content honesty (non-negotiable)
- Never invent metrics, clients, outcomes, team sizes, or dates. If copy needs a fact I haven't
  given, leave a TODO and ask.
- Never overclaim ownership of company products, hardware, or private systems. Keep the
  attribution blocks intact. Frame work as "my Unity implementation of...".
- Before publishing anything about client/NDA work, run the nda-public-safety-review skill
  (.agents/skills/).
- Card badges describe what kind of system the work proves I can build; detailed technical
  evidence belongs on the case-study page.

## Public vs work mode (one site, two URLs)
- `/...` is public: email, phone, LinkedIn, GitHub, public resume. `/work/...` is the same site
  for job platforms like Upwork (no contact details before a contract): none of those appear,
  and the resume button uses `profile.workResumeUrl` (hidden while unset). Work pages are noindex.
- Mode comes from the URL at load (src/lib/siteMode.ts) and is baked into the router basename,
  so internal `<Link to="/...">` stays inside the mode automatically.
- Never read `profile.email/phone/linkedinUrl/githubUrl/resumeUrl` in components. Use `contact`
  from src/lib/siteMode.ts and render a link only when its field is set.
- Anything sent through a job platform (proposals included) links to `/work/` URLs.

## Client proposal pages (/proposal/*)
- These are targeted pitches for one company. Don't link them from nav, home, or sitemap.
- One data file per company in src/data/proposals/<slug>.ts, registered in
  src/data/proposals/index.ts; src/pages/ProposalPage.tsx renders all of them (lazy-loaded).
  Structure every proposal around the client's own requirements and questions.
- Use `[[TODO: ...]]` for any fact the user hasn't given; never invent dates, rates, or experience.
  The page shows a TODO count; a proposal with TODOs left is not ready to send.
- PDF = "Save as PDF" button (light A4 print theme in src/pages/proposal.css). Check the PDF,
  not just the screen view.
- They are kept out of search indexes by the robots meta in App.tsx (the X-Robots-Tag
  header in netlify.toml only applies if the site moves to Netlify). Pushing to main publishes them.
- Only cite projects that already exist in projects.ts as evidence.

## Media & performance
- src/assets is already ~170 MB, mostly 2560px PNGs (131 MB) plus mp4. Don't add videos over ~10 MB to the bundle. Prefer
  the YouTube `media` entries (see README) or compress first, and ask before adding large files.
- Every video needs a poster image; thumbnails come from `npm run thumbnails`.

## Responsive
- Check every layout change at 375px. No horizontal scroll, and no nested scroll containers on
  mobile (this has been a scroll-trap bug before).

## Verify before calling it done
- Run `npm run build` (it type-checks). It must pass.
- For visual changes, open the page in the browser at desktop and mobile width and look at it.

## Git
- Conventional commit prefixes (feat:, fix:, style:). Commit only when I ask.
- Never squash, rebase, or amend commits that are already pushed.
- Don't commit logs, dist/, qa-*.png, or obsidian-vault/ output.

## Windows environment
- Bash tool is Git Bash: redirect to /dev/null, never `> nul` (that creates a stray `nul` file).
- Asset filenames contain spaces. Always quote paths.

## Session continuity
- At the end of substantial work, add a handoff note in docs/session-notes/YYYY-MM-DD-topic.md.

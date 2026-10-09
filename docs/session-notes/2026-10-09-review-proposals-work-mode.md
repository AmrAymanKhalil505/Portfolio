# 2026-10-08/09 — Review, proposal template, work mode

## Done (commits d6a5308, c5c2949 on main, deployed to GitHub Pages)

- Full review: `docs/reviews/2026-10-08-portfolio-review.md`; open items tracked in `docs/backlog.md`
  (replaces the July roadmap).
- CLAUDE.md created (host is GitHub Pages, not Netlify).
- Atmosphere project: correct video (`eWFaHaYUy44`), renamed "Atmosphere Protector",
  `/projects/atmosphere-guardian` redirects.
- Proposal template: `src/data/proposals/<slug>.ts` + `src/pages/ProposalPage.tsx` + `proposal.css`
  (lazy chunk, light multi-page A4 print theme, `[[TODO: ...]]` markers with a counter).
  uTopiVR rebuilt from the Upwork post and sent as PDF.
- Work mode: `/work/...` = same site without email, phone, LinkedIn, GitHub; noindex; resume button
  uses `public/Amr_Khalil_CV_work.pdf`. Logic in `src/lib/siteMode.ts` (router basename).
- Resumes: LaTeX sources in `docs/resume/` (public + work); PDFs in `public/`.
  Grade line now "Bachelor Grade: A - Overall Grade: B+" everywhere.
- Visual "looks AI-made" audit ran in a separate session: `docs/reviews/2026-10-09-visual-design-audit.md`.

## Gotchas found

- Git Bash rewrites `/Portfolio/` args into Windows paths: use `MSYS_NO_PATHCONV=1` for
  `vite build --base=/Portfolio/`.
- The user's own dev server on :5173 sometimes misses a file change; `touch` the file to force re-transform.
- Browser-pane screenshots can time out; headless Chrome (`--print-to-pdf`, `--dump-dom`) is reliable
  (headless has a ~500px minimum width, so use pane emulation for 375px).
- Deep links on GitHub Pages return HTTP 404 status (SPA served via 404.html); humans see the page.

## Next

- Pick a visual direction from the audit report.
- Backlog P0: render Problem/Impact on case studies (scrub NDA reasoning first), empty category tiles,
  hosting decision (prerender vs. move host).
- Upwork resume wording: "Developed Ivris" overclaims; Nescafé should say one-week project.

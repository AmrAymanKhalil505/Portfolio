# Portfolio Review — 2026-10-08

Scope: live walkthrough (local dev, desktop + 375px), content audit of every project, technical
audit (performance, SEO, a11y, code, deploy), and a re-baseline of
`docs/roadmap/portfolio-improvement-plan.md`. Read-only; nothing was fixed yet.

Live site: https://amraymankhalil505.github.io/Portfolio/ (GitHub Pages, deployed on every push to `main`).

## Verdict

The foundation is strong: a clear niche, real industrial/edtech work, rich media, a distinctive
dark engineering design, and an easy-to-find CV and contact. The problems are not the idea, they
are **delivery**: deep links return 404 on the live host, pages ship 3–6 MB images where 20 KB
thumbnails already exist, the best case-study content (problem / impact) is never rendered, and a
few visible content errors undermine credibility. The uTopiVR proposal page is a one-off A4 print
layout that breaks on phones and can't scale to many companies.

Priority = impact on a recruiter/client visitor × effort.

---

## P0 — Broken or embarrassing (fix first, mostly small)

| # | Finding | Evidence | Fix |
|---|---|---|---|
| 1 | **Every deep link on the live site returns HTTP 404.** Humans still see the page (404.html is the SPA), but crawlers and LinkedIn/Slack link previews see a 404. | Verified: `/Portfolio/projects`, `/projects/ivris-interior-design-app`, `/proposal/utopivr` → 404. `deploy-pages.yml` copies `index.html` to `404.html`. | Prerender per-route HTML at build time (each route gets a real `index.html` with its own title/meta), or move to Netlify/Vercel where SPA rewrites return 200. |
| 2 | ~~Atmosphere Guardian and Nescafe shared one video.~~ **Fixed 2026-10-08.** | `upsJHmKdVN0` is "Nescafe Three Levels" (Nescafe was correct); Atmosphere Protector (renamed from "Atmosphere Guardian") now uses `eWFaHaYUy44` ("atmosphere protector") for both card preview and gallery. | — |
| 3 | **Problem / Solution / Challenges / Impact are never shown on any public case study.** | `CaseStudyPage.tsx:99` — any project with `overview` renders `CimProjectDetails`, which skips those fields. All public projects have `overview`. | Render them in the overview layout. **First** scrub the internal NDA reasoning in those fields (`projects.ts:544, 774, 789` — e.g. "safer public-facing showcase instead of publishing each internal project separately"). |
| 4 | **Two category tiles lead to empty pages.** | "WebGL Experiments", "Game Systems & Architecture" (`HomePage.tsx:62,66`, filters in `ProjectsPage.tsx`) have 0 public projects. | Derive tiles/filters from categories that have public projects. |
| 5 | **uTopiVR proposal page clips on mobile** (headline and cards cut off at 375px). | Fixed `mm` A4 sheet with `overflow-hidden` (`UtopivrProposalPage.tsx:104-160`). | Covered by the proposal template rebuild below. |
| 6 | **Proposal pages are not private.** Client name and pitch text ship in the public JS bundle; the next push to `main` publishes the page. The `netlify.toml` noindex header does nothing on GitHub Pages. | `App.tsx` static import; technical audit. | Decide policy (see "Decisions needed"). |

## P1 — High impact on first impression

**Performance (the site is heavy on exactly the pages recruiters open):**
- Project cards load full-size thumbnails: the 6 featured cards on Home pull **~5.8 MB**
  (e.g. `MPC 100 Pressure Far.png` 2.86 MB). Generated 480px WebP thumbnails (~16 KB) already exist
  but `ProjectCard.tsx:29-35` doesn't use them. → ~120 KB instead.
- Gallery main image and case-study video posters load 2–6 MB source PNGs (`MediaDemoViewer.tsx:223`,
  `CaseStudyPage.tsx:20,163`). → add a 1280–1600px WebP variant.
- Two hover-preview loops are encoded at ~14 Mbps (`Ivris Web gif.mp4` 4.7 MB, `CIM Thumnail gif.mp4`
  4.9 MB) — hovering two featured cards costs ~9.6 MB. → re-encode to ~480p / ~300 KB.
- Hero renders two autoplay `<video>` elements of the same file (one hidden by CSS) on Home and every
  case study; no reduced-motion / data-saver handling anywhere.
- JS: one 531 KB chunk. framer-motion is 126 KB (24%) for a single 0.25 s fade that also delays every
  navigation. → CSS fade + `React.lazy` routes ≈ −160 KB.

**Positioning and credibility:**
- Hero headline is vague ("…and Real-Time Experiences") and doesn't mention industrial digital twins /
  training sims — your strongest work. Your CV line "Unity Engineer | Simulation, XR, Digital Twins" is sharper.
- Title is inconsistent in four places: "Senior Unity Engineer" (header) vs "Unity Developer" (hero,
  og:title, and the `role` of every BEDO case study) vs the CV.
- The 4 experience stats (Senior at BEDO, PlayFab/Photon AR, Quest 2, IBM winner) are hidden on mobile
  (`HomePage.tsx:244`).
- Ivris: site says "Jun 2024 – Jun 2026" with present-tense bullets; the CV says "Present". "Developed Ivris,
  a cross-platform Unity app" claims the whole product — say which parts were yours.
- Education line "Bachelor Grade: A – GPA 1.79 (German Standard: B+)" contradicts itself and 1.79
  reads as low to non-German readers. Suggest: "GPA 1.79 (German scale, 1.0 = best)" or just "Very Good".

**Project order and featuring (suggested):**
1. Industrial Training (strongest evidence — keep #1)
2. Ivris (shipped product: multiplayer, AR, backend — currently #5)
3. PID Virtual Labs
4. Tanta Meta Quest suite — **feature it** (clearest solo ownership; currently not featured)
5. Engineering Education Virtual Labs
6. Nescafe (after the video fix)
7. Atmosphere Protector
8. IBM — **unfeature** (off-brand, contribution vague, GitHub button points to a teammate's repo)

**Sharing / SEO:**
- No `og:image`, Twitter card, canonical, favicon (404 live), `robots.txt`, or `sitemap.xml`.
- Every case study is titled "Case Study | Unity Developer Portfolio" — no project name, no "Amr Khalil".
  Shared links on LinkedIn all look identical with no image.

## P2 — Quality and polish

**Content**
- Defensive NDA wording repeated in many panels ("no source code, file paths, credentials… are visible",
  "pixelated regions are intentional…"). One calm attribution block per page is enough.
- BEDO attribution note never says the products belong to BEDO; the BEDO logo is redrawn in brand orange on
  every card — confirm BEDO is fine with that.
- Team vs personal contribution unclear on all BEDO projects — add a one-line "My part" per project.
- Unverified counts: "50 sensor / PLC I/O signals", "6 control models" — confirm or remove.
- "Digital shadow" implies live hardware data — confirm or use "simulation".
- Missing attribution notes: Tanta, Atmosphere Protector (Green Minds logo shown, org never named).
- Placeholder SVG thumbnails on Tanta and IBM; PID and Engineering Education galleries have no video;
  no playable WebGL demo anywhere despite "WebGL" in the hero.
- "Technical focus" on Atmosphere Protector says "YouTube gameplay demo" (`CaseStudyPage.tsx:348`).
- Typo: "grabbable pedals" (probably pellets/balls) `projects.ts:1757,1789`. Misspelled asset filenames
  appear in URLs ("Traning", "thumnail", "Statndalone").
- Stale public CVs still reachable: `public/amr-khalil-resume.html` / `.pdf`.
- Phone number is published in the footer — confirm that's intentional.

**Accessibility**
- No `prefers-reduced-motion` handling (autoplay videos, infinite CSS animations).
- Project cards are `<article role="link">` containing buttons/links — confusing for screen readers;
  on mobile there's no real `<a>` to the case study.
- Gallery: no arrow-key navigation, no `aria-live`, dots at 2.1:1 contrast, "scroll brief" thumb is
  mouse-only, nested fixed-height scroller on mobile.
- Text contrast is good everywhere (≥ 9.8:1).

**Code / repo**
- `projects.ts` is 2,224 lines; `industrialTrainingProject` is built by mutating another exported object.
- Inter font is declared but never loaded (renders in system font).
- `/admin` and `/lab` are public; `/lab` CTAs go to `#`; `saveHeroSettings` lacks try/catch; no 404 route.
- 37 MB of unreferenced assets (7 are byte-identical duplicates); git pack is 125 MB — consider Git LFS
  or keeping originals outside the repo.
- `@types/react` 19 with React 18 runtime; `@vitejs/plugin-react` in `dependencies`.

## Proposal pages — rebuild as a reusable template

The uTopiVR page proves the idea but can't scale to "one page per company". Recommended design:

1. **Data-driven**: one `ProposalPage` component + `/proposal/:slug` route + one data file per company
   (`src/data/proposals/<slug>.ts`). A new company = one data file, no new component.
2. **Requirement → evidence mapping** as the core section: quote/paraphrase each thing the client asked for,
   and next to it the specific project, clip, or screenshot that proves you've done it. This is what
   uTopiVR is missing — it lists projects but never ties them to the client's stated needs.
3. **Real proof inline**: embedded video or GIF per evidence item (not placeholder SVGs), linking to the
   full case study.
4. **Responsive screen layout first**, with a separate `@media print` stylesheet for the PDF version
   (instead of an A4 sheet squeezed onto phones).
5. **Clear next step**: a call-to-action (email / calendar / Upwork reply), availability, and what you'd
   deliver in the first two weeks.
6. **Small images**: use generated WebP thumbnails, not 3–4 MB PNGs.
7. **Privacy**: lazy-load each proposal so the client name isn't in the main bundle; pair with the hosting
   decision below.

## Roadmap status (July plan vs today)

- Branch `codex/awesome-design-system` is obsolete; work is on `main`.
- **Unmerged branch `redesign/editorial-engineering-dossier-v2` (Sept 2)** rewrites CaseStudyPage,
  MediaDemoViewer, ProjectCard. Decide on it before any design work on `main`.
- Phases 5 (Obsidian vault) and the data split are stalled — low visitor impact, deprioritize.
- Still valuable and not done: thumbnails/perf (Phase 7), sharing metadata (Phase 8), reduced motion and
  keyboard audit (Phase 9), a `validate-projects` script (would catch empty categories, duplicate videos,
  featured+hidden conflicts).
- Recommend retiring the July roadmap in favor of this review.

## Decisions needed from Amr

1. **Hosting**: stay on GitHub Pages and add prerendering, or move to Netlify/Vercel? (Fixes the 404s either way.)
2. **Proposal privacy**: fine with proposals being public-but-unlisted, or should they live on a separate
   unlisted deploy/branch?
3. **redesign-v2 branch**: merge, cherry-pick parts, or drop?
4. **What's wrong with uTopiVR in your view** — so the template fixes your concerns, not just mine.
5. Content facts only you can confirm: the real Nescafe video, Ivris end date and your exact part,
   BEDO logo permission, the sensor/model counts, "digital shadow" accuracy, phone number in footer.

## Suggested sequence

1. P0 quick fixes: Nescafe video, empty categories, render problem/impact (after scrub), title consistency.
2. Performance pass: card thumbnails, WebP gallery variants, re-encode loops, single hero video, drop
   framer-motion, lazy routes.
3. Hosting decision + prerender/meta/og:image/sitemap.
4. Proposal template rebuild, then migrate uTopiVR onto it.
5. Content pass: reorder/feature, contribution lines, attribution notes, education line.
6. Accessibility pass + `validate-projects` script.

# Portfolio Backlog

Single list of known problems and planned work. Details and evidence for each item are in
[reviews/2026-10-08-portfolio-review.md](reviews/2026-10-08-portfolio-review.md).
This replaces `roadmap/portfolio-improvement-plan.md` (July 2026) as the source of truth.

Status: ✅ done · 🔨 in progress · ⬜ open · ❓ needs a decision or facts from Amr

## In progress

- (nothing in progress)

## Done

- ✅ **Work-mode resume**: `public/Amr_Khalil_CV_work.pdf` (no contact, `/work/` links); public CV refreshed. LaTeX sources in `docs/resume/`.
- ✅ **Work mode (`/work/...`)**: same site, Upwork-safe. No email, phone, LinkedIn/GitHub or
  contact-bearing resume; noindex; proposals link to `/work/` URLs.
- ✅ Atmosphere project showed the Nescafe video → now its own video (`eWFaHaYUy44`).
- ✅ Renamed "Atmosphere Guardian" → "Atmosphere Protector" (old URL redirects).
- ✅ Proposal pages rebuilt as a data-driven template (`src/data/proposals/`, lazy-loaded,
  responsive, light multi-page A4 PDF). uTopiVR migrated.
- ✅ CLAUDE.md created; stray `nul` file removed.

## P0 — Broken or embarrassing

- ⬜ **Deep links return HTTP 404 on GitHub Pages** (page still renders for humans via
  `404.html`, but crawlers and link previews see an error). Fix: prerender each route, or move host. ❓ host decision
- ⬜ **Problem / Solution / Challenges / Impact never render** on public case studies
  (`CaseStudyPage.tsx:99`). Scrub internal NDA reasoning from those fields first
  (`projects.ts` ~544, 774, 789).
- ⬜ **Empty category tiles/filters**: "WebGL Experiments", "Game Systems & Architecture" show 0 projects.
- ❓ **Proposal privacy**: proposals are public-but-unlisted (noindex meta only on GitHub Pages).
  Separate unlisted deploy if that isn't acceptable.

## P1 — First impression

Performance
- ⬜ Project cards load full-size images (~5.8 MB on Home) — use generated WebP thumbnails.
- ⬜ Gallery main image and case-study posters load 2–6 MB PNGs — add 1280–1600px WebP variants.
- ⬜ Hover loops encoded at ~14 Mbps (`Ivris Web gif.mp4`, `CIM Thumnail gif.mp4`) — re-encode ~480p.
- ⬜ Two autoplay hero `<video>` elements per page; no reduced-motion / data-saver handling.
- ⬜ 531 KB single JS chunk; framer-motion (126 KB) used for one fade — CSS fade + lazy routes.

Positioning and content
- ⬜ Hero headline vague; doesn't mention digital twins / industrial training.
- ⬜ Title inconsistent: "Senior Unity Engineer" vs "Unity Developer" (hero, og:title, BEDO case-study roles) vs CV.
- ⬜ Experience stats strip hidden on mobile.
- ❓ Ivris: site says Jun 2024 – Jun 2026, CV says "Present"; "Developed Ivris" overclaims — state your part.
- ✅ Education line now "Bachelor Grade: A - Overall Grade: B+" (site and Upwork resume).
- ⬜ Project order/featuring: Ivris → #2, feature Tanta, unfeature IBM (teammate's GitHub repo, vague role).

Sharing / SEO
- ⬜ No og:image, Twitter card, canonical, favicon, robots.txt, sitemap.xml.
- ⬜ Every case study titled "Case Study | Unity Developer Portfolio" (no project name, no "Amr Khalil").

## P2 — Quality and polish

Content
- ⬜ Defensive NDA wording repeated across panels — one attribution block per page.
- ❓ BEDO attribution doesn't say products belong to BEDO; BEDO logo on every card — confirm permission.
- ⬜ Per-project "My part" line on BEDO projects (team vs personal contribution).
- ❓ Unverified counts ("50 sensor / PLC I/O signals", "6 control models") and "digital shadow" wording.
- ⬜ Missing attribution notes: Tanta, Atmosphere Protector (Green Minds logo, org never named).
- ⬜ Placeholder SVG thumbnail on IBM (Tanta fixed with real screenshots); PID / Engineering Education galleries have no video;
  no playable WebGL demo anywhere.
- ⬜ "Technical focus: YouTube gameplay demo" on Atmosphere Protector (`CaseStudyPage.tsx:348`).
- ⬜ Typo "grabbable pedals" (`projects.ts` ~1757, 1789); misspelled asset filenames in URLs.
- ⬜ Stale public CVs reachable: `public/amr-khalil-resume.html` / `.pdf` (contain contact details).
- ❓ Phone number published in footer.
- ❓ Nescafe booth date (needed for proposals too).

Accessibility
- ⬜ No `prefers-reduced-motion` handling.
- ⬜ Project cards are `role="link"` wrapping buttons/links; no real `<a>` to case study on mobile.
- ⬜ Gallery: no arrow keys, no `aria-live`, dots 2.1:1 contrast, mouse-only scroll thumb, nested scroller on mobile.
- ⬜ Inconsistent focus styles; mobile menu has no Esc-to-close.

Code / repo
- ⬜ `projects.ts` 2,224 lines; `industrialTrainingProject` built by mutating another export.
- ⬜ Inter font declared, never loaded.
- ⬜ `/admin` and `/lab` publicly routed; `/lab` CTAs go to `#`; `saveHeroSettings` lacks try/catch; no 404 route.
- ⬜ 37 MB unreferenced assets (7 byte-identical duplicates); 125 MB git pack — consider LFS.
- ⬜ `getYouTubeId` duplicated 3× with different fallbacks; hero video markup duplicated 3×.
- ⬜ `@types/react` 19 vs React 18; `@vitejs/plugin-react` in `dependencies`.
- ⬜ Dead CSS from removed badge reel (`styles.css` `.evidence-dot-*`, `.evidence-badge-scroll*`).
- ⬜ `validate-projects` script (would catch empty categories, duplicate videos, featured+hidden conflicts).

## Decisions pending

1. ❓ Hosting: stay on GitHub Pages + prerender, or move to Netlify/Vercel.
2. ❓ `redesign/editorial-engineering-dossier-v2` branch (Sept 2): merge, cherry-pick, or drop —
   decide before any design work on `main`.

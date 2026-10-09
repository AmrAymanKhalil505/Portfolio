# Visual design audit: why the site reads as AI-made (2026-10-09)

Research and recommendations only. No site code was changed.
Screenshots: [2026-10-09-design-audit/](2026-10-09-design-audit/) (1440×900 desktop and 375px mobile,
`*-fold.jpg` = first screen, `*-full.jpg` = full page; `v2-branch_*` = the unmerged redesign branch).
They are untracked and add up to ~6 MB, so don't commit the `*-full.jpg` files.

Pages captured: Home, /projects, /projects/industrial-training-simulation-systems,
/projects/ivris-ar-interior-visualization. (The CIM case study is `hidden`, so its URL redirects to /projects.)

---

## 1. Diagnosis

### 1.1 The biggest problem: the hero art is AI-generated, and the files say so

All 8 hero videos carry C2PA Content Credentials that read **"Created by Google Generative AI"**
(`digitalSourceType: trainedAlgorithmicMedia`) plus a **SynthID** watermark:

`Robot Disass.mp4` (Home hero), `Industrial Traning Hero.mp4`, `PID Hero .mp4`, `Engineering Educational .mp4`,
`Atmo Protector Hero.mp4`, `Ivris.mp4`, `Nescafe .mp4`, `Tanta University.mp4`.

This is more than a style issue:
- People see it before any text: the Home first screen is an exploded wireframe robot arm with teal
  glowing gears. The industrial case-study hero is a glowing CNC/3D-printer cutaway with purple light
  rings. The Ivris hero is a neon wireframe room. These are exactly what an image model makes when
  asked for "x-ray/blueprint/hologram engineering".
- Machines can detect it. Tools that read C2PA or SynthID will label these files as AI-generated.
- It undercuts the claim the site is making. The pitch is "I build Unity simulations", but the
  biggest images are not Unity and not your work. The machines shown aren't MR110/MR109 hardware either.
- The real evidence looks better than the fake hero. The project cards show actual Unity captures
  (grey-white lab, orange MR110 station, Free/Guided Mode tabs, PLC connection panel). They are specific
  and clearly authored. On the case-study pages that real footage sits directly under the generated hero,
  so the two clash.

**Fix, whatever direction you pick:** replace every hero with real footage from your own builds
(screen captures, editor views, wireframe/gizmo views exported from Unity, or real lab photos).
For BEDO work, run the nda-public-safety-review skill first. This also clears the backlog item
"two autoplay hero videos per page".

### 1.2 Other tells (with evidence)

| Area | What's on the page | Why it reads as AI-made |
| --- | --- | --- |
| **Palette** | `#050606` near-black, mint `#A9FBD7`, cyan `#6EE7F9`, `shadow-glow` on 15 elements, `backdrop-blur` on 12, a 44px grid over the hero | Mint/cyan glow on black is the default "technical dark mode" that AI site builders produce. DESIGN.md even cites VoltAgent ("dark canvas, emerald accent") as a model, and that look is the template. Nothing in the palette comes from your field. |
| **Fonts** | `Inter` is declared but never loaded (`document.fonts` is empty), so Windows visitors see Segoe UI and Mac visitors see SF. One weight family everywhere: `font-semibold` headings, `text-steel` body | Typography has no point of view. Nobody chose a face; the stack only falls back. Headings, labels and buttons all look like OS UI. |
| **Eyebrow + H2 + paragraph** | `text-sm font-semibold text-scan` appears 32 times. Every section is a mint eyebrow ("Featured work", "Experience", "Education", "Project categories", "Technical skills", "About", "Start a project") over a white H2 over a grey paragraph | This three-line stack is the most recognizable LLM landing-page pattern. Seven sections on Home use it in a row. |
| **Pills/badges** | 27 `border-scan/` pills, 30 `rounded-full`. Every card has a category chip on the image, 3 mint "evidence" chips, 4 tech badges each with a Lucide icon (Box for Unity, Code2 for C#), and "+2 more technical signals in the case study" | Badges have taken the place of content. Icon-per-tag is a generator habit. "Technical signals" is model wording. |
| **Identical cards** | `rounded-lg border border-white/10 bg-panel` 22 times. Featured grid: 4 equal columns with height forced (`md:min-h-[33rem]`, fixed `h-16`/`h-28` slots) so every card matches. Experience, education, categories, skills and the CTA are all the same box | When everything is the same rounded panel, nothing stands out. The flagship MR110/MR109 work gets the same weight as the IBM hackathon. |
| **Case-study template** | Both case studies run through the same 10 sections: "Quick overview" → "Context note" → "My role / Timeline / Platform / Tech stack" → "Product context" (on Ivris it repeats the Context note text word for word) → "What the gallery is showing" → "How the experience was organized" → "What each area covers" → "Technical Highlights" | The headings are generic and could sit on any project. Panels sit inside panels. The duplicated context block reads like generated filler. |
| **Copy tone** | H1 "Unity Developer for Interactive Simulations, EdTech, and Real-Time Experiences". Projects H1 "Filterable Unity and interactive systems portfolio" (it describes the UI, not the work). "cause and effect" 8×, "real-time feedback" 3× | Lists of keywords and lines that describe the page itself. A person usually leads with one specific claim ("I build the Unity side of BEDO's MR110/MR109 training labs"). |
| **Motion** | Every card has hover lift, image scale, mint border glow, and a play-on-hover video. Two autoplay hero videos. framer-motion (126 KB) is used for a single fade. No `prefers-reduced-motion` | Motion is applied the same way to everything, so it decorates instead of explaining. |
| **Brand mark** | "AK" monogram in a mint-bordered rounded square | This is the default avatar/logo placeholder look. |

### 1.3 Worth keeping

- **Real Unity media and captions.** The gallery with technical captions (e.g. "MR110 – Loading Station …")
  is the most human part of the site. Every direction below builds on it.
- **Station-level breakdown content** (MR110/MR109 stations, components, behaviors). It's specific, hard to
  fake, and exactly what technical leads look for. It needs a lighter presentation, not removal.
- **Honest, attributed copy and the attribution blocks** (one per page, as the backlog says).
- **Mobile behavior:** no horizontal scroll at 375px on all 4 pages (`scrollWidth` 375), the gallery
  scroll-trap fixes, the select-based filter on mobile.
- **Work mode / contact gating**: it's architecture, not style, and it must survive any redesign.
- **The amber idea:** one warm accent on a cool base is right. It's just underused and competes with mint and cyan.

---

## 2. Reference portfolios

I checked all twelve live on 2026-10-09. For each one I pulled the page's HTML/CSS to read its real fonts and colors, and I loaded it in a browser.

| # | Site | Who | What makes it feel authored | Borrow |
| --- | --- | --- | --- | --- |
| 1 | [realvirtual.io](https://realvirtual.io/en/) | Unity digital-twin / virtual-commissioning vendor (your exact niche) | Light `#f2f5fa`, Jost, crimson accent. Real robot render with crop-mark corners. Monospace **drawing title block**: "Digital Twin \| Rev. 6.3.x · Unity 6000.3 LTS \| realvirtual GmbH". (Still has a pill and a stat strip.) | A title block per case study: project / rev / Unity version / client type |
| 2 | [ScanLAB Projects](https://scanlabprojects.co.uk/) | London studio, LiDAR digital replicas | Its own monochrome scan data *is* the visual identity. Each project has a venue line ("Tribeca Film Festival \| Mercer Labs") | Use your own wireframe/gizmo/point-cloud captures from Unity as the texture of the site |
| 3 | [Bartosz Ciechanowski](https://ciechanow.ski/) | Interactive engineering explainers | IBM Plex Sans, a cobalt header band, a white prose column, then black panels with **live draggable 3D figures**. Color appears only inside the simulations | Embed one small WebGL piece (a valve, a station) as a "drag this" figure. Closes the backlog's "no playable WebGL demo" |
| 4 | [Making Software](https://makingsoftware.com/) | Dan Hollick, technical publication | Serif body + Departure Mono labels on faint grid paper, one electric blue. **Isometric exploded drawings with leader-line part labels** | Annotated/exploded drawings of your stations instead of AI x-ray art |
| 5 | [Lucas Pope](https://dukope.com/) | Unity game dev (Papers Please, Obra Dinn) | Libre Baskerville on white, double rules between dated entries. A dry, specific subtitle per game | Dated log entries with rules instead of cards; one specific line per project |
| 6 | [Marc ten Bosch](https://marctenbosch.com/) | 4D-physics game dev, SIGGRAPH author | Orange-red `#f64000` links, grey ruled panels. Entries labelled like citations ("SIGGRAPH 2020 Technical Paper"). Plain "Sort: Type \| Date" | Real-world labels (client type, venue, year) and a plain sort instead of filter pills |
| 7 | [Robert Hodgin](https://roberthodgin.com/) | Creative technologist, simulation art | Simplon BP, black/grey + one acid green `#7aed00`. A grid of full-bleed renders with 2–3 word titles | Big stills from your own sims doing the visual work; one accent that isn't mint |
| 8 | [Freya Holmér](https://acegikmo.com/) | Unity tools developer (Shapes) | Cormorant small-caps name on navy, a real photo, one hot pink. Personal tiles next to technical ones | A real photo of you; one unexpected typeface against technical content |
| 9 | [Inigo Quilez](https://iquilezles.org/) | Shader/SDF technical artist | Dark `#282828` + soft pink links, a plain sans. Opens with a biographical paragraph and dense content | Evidence that dark + cards isn't the problem. **Empty copy is.** Lead with a plain "who I am" paragraph |
| 10 | [Fathom Information Design](https://www.fathom.info/) | Boston data-platform studio | Custom Hendrix typeface, navy + steel + crimson. The hero is **a photo of their real dashboard on a screen**. A "Notebook" section | Photograph or angle your real training UI in context instead of flat screenshots in glowing frames |
| 11 | [Teenage Engineering](https://teenage.engineering/) | Hardware/instrument maker | Univers, pictogram nav tiles with micro-captions, ink drawings. Orange used like a warning label | Safety orange used sparingly, the way it appears on equipment |
| 12 | [Nervous System](https://n-e-r-v-o-u-s.com/) | Simulation-driven generative design studio | Hand-drawn wordmark, product photos. Copy names the method ("we create computer simulations to generate designs") | Say what your simulations *produce*, and show trainees/hardware, not only renders |

**Patterns.** The authored sites have:
- an intentional typeface (none use system sans alone)
- **one** owned accent (never a mint/cyan glow)
- their own work as the imagery (scans, renders, diagrams, photos of real screens)
- labels taken from their field (citations, title blocks, revision numbers)
- first-person copy
- structure that follows the content (dated lists, numbered figures)

The AI-template look is the opposite on every point.

**Dropped:**
- Theia Interactive (dark background + "Results. Solutions. Delivered."): the look to avoid.
- ForgeFX, Make Real, Simumatik: theme templates.
- Oxide Computer (dark, mint, mono "FIG. 1" labels) is effectively what the current site imitates. It works there only because of custom fonts and real hardware photography.

---

## 3. Visual directions

All three:
- replace AI heroes with your own captures
- self-host 2–3 real fonts (woff2 in `src/assets/fonts` or `@fontsource/*`, ~60–120 KB total)
- cut pills to one label per card
- give the flagship project more room than the rest
- add `prefers-reduced-motion`

Each one changes the tokens in DESIGN.md, so whichever you pick, DESIGN.md gets updated first, per CLAUDE.md.

### A. Control room (HMI): **recommended**

Based on real plant HMI design, specifically ISA-101 "high-performance HMI": a calm grey screen
where **color only means state**. It's credible to industrial clients, and the color choices have a reason you
can explain ("color means something here, like on a plant screen"). It's also the smallest step from the current dark site.

- **Palette:** HMI grey `#1E2124` canvas, `#2A2E32` panels, `#3A4046` rules, off-white text `#E4E6E3`, muted
  label grey `#9AA1A6`. State colors used *only* as state: running green `#3FA34D`, alarm amber `#E8A33D`,
  fault red `#D0473F`, selection blue `#4C8DD6` for links/focus. Drop mint, cyan and glow.
- **Fonts:** **B612** (headings/UI) + **B612 Mono** (tags, values). Both are open-source fonts made for
  Airbus cockpit displays: legible, technical, rarely seen on portfolios. **IBM Plex Sans** for long body text.
- **Layout:** a single strip at the top of each project like an HMI faceplate, holding project tag
  (`PRJ-01 · MR110/MR109`), platform, role and status. Projects page as an **equipment list**: one large
  "unit" for the flagship, then table rows (tag · name · platform · role · year) instead of a card grid.
  Case studies get one header block plus gallery, then the station list as a real table/process diagram.
- **Motion:** almost none. State changes only: a lamp turns on when a video is playing, a row highlights
  on hover. No lift, glow or scale.
- **Signature details:** small status lamps built from real `projects.ts` data (e.g. "WebGL build: public
  demo / private"), station names as tag plates, a simple process-flow strip (Loading → Storage → Robot → …)
  on the industrial case study drawn from `stationBreakdown`. Everything shown is true.
- **Remove:** grid overlay, glow shadows, eyebrows on every section, icon-per-tech badges, hover lift,
  AK square monogram (use the name set in B612).
- **Effort:** medium, ~2–3 days. Tokens + fonts + ProjectCard/ProjectsPage rebuild + case-study header and
  station table. Content and routes untouched.

### B. Drawing sheet

The site as a set of engineering drawings: paper background, title blocks, sheet numbers, dimension
lines and leader-line callouts on **your real screenshots** ("① clamp state", "② PLC handshake").

- **Palette:** drafting paper `#F1EFE8`, graphite ink `#1D2021`, construction-line grey `#B9B6AC`, one
  drafting blue `#1F4E9C` for links and callouts, safety orange `#E2581F` for the single primary CTA.
- **Fonts:** **IBM Plex Sans Condensed** (title blocks, headings) + **IBM Plex Sans** (body) + **IBM Plex Mono**
  (dimensions, part numbers, captions). One superfamily, very "engineering document".
- **Layout:** each case study is a "sheet" with a title block bottom-right (project, role, platform, date,
  sheet 1/3). Figures are numbered ("Fig. 4: MR110 storage station, Guided Mode"). The home page is a drawing
  index (sheet list). Projects are a parts list.
- **Motion:** callout leader lines draw in once when a figure enters the view. That's it.
- **Signature details:** title block, revision table ("Rev C: added Ivris AR"), dimension-line dividers,
  hand-placed callouts on screenshots.
- **Remove:** dark theme entirely, all glows, rounded cards, pill badges.
- **Effort:** high, ~4–6 days. Light theme is a full re-skin, callouts need hand-authoring per figure, the
  proposal PDF theme should be aligned, and DESIGN.md's "dark engineering identity" rule is reversed.
  Most distinctive of the three.

### C. Lab notebook / technical report

Case studies as short technical reports: serif reading text, numbered sections and figures, margin notes.
It feels personal and senior: "here is what I built and why", not a product page.

- **Palette:** warm dark `#141311` or light `#FAF8F3` (pick one), text `#ECE8DF` / `#1C1B19`, a single
  accent: oxide orange `#C8552B`. No secondary accent.
- **Fonts:** **Source Serif 4** (headings + body) + **IBM Plex Mono** (captions, metadata). Optional
  **Source Sans 3** for UI.
- **Layout:** narrow reading column (~68ch) with a wide figure column that can bleed. Margin notes for
  stack/role instead of badge rows. Home is a short intro paragraph + selected-work list with years.
- **Motion:** none beyond native video controls.
- **Signature details:** numbered figures, margin annotations, a "what I'd do differently" note per
  project (written by you, never invented).
- **Remove:** cards almost entirely, badges, eyebrows, grid.
- **Effort:** medium, ~3 days, but needs **new writing from you** (the format shows thin copy fast).

### Recommendation

Go with **A (Control room)** and borrow two things from B: numbered figures with callouts on your
real screenshots, and a title-block style metadata strip. It fits industrial-training buyers, keeps the
dark identity DESIGN.md asks for, and every color has a reason.

---

## 4. The `redesign/editorial-engineering-dossier-v2` branch

One commit (4373b0e, 2026-09-02, +2461/−2583 across 32 files), based on `ce19193` (July 20).
Screenshots: `v2-branch_*.jpg`.

**Verdict: don't merge. Hand-pick the structural parts.**

Its visual language is not the fix. All-caps condensed display ("ENGINEERING BEHAVIOR, MADE
INTERACTIVE."), letter-spaced mono labels, "01 /" section numbers, orange hairline + mint block CTA:
this is the 2025–26 "editorial brutalist" look that AI design skills produce. The branch's own plan
says it was built from the `gpt-taste` / `image-to-code` skills and a reference image. It swaps one
recognizable template for another.

Problems:
- **Fonts still aren't loaded.** `Aptos` ships with Windows/Office and `Arial Narrow` mostly with
  Windows/Office. Elsewhere the condensed all-caps hero falls back to regular-width Arial and will
  look very different from the screenshots.
- **It keeps the AI hero videos** (same robot arm, same CNC cutaway).
- **It predates work mode.** `git merge-tree` shows 6 conflicts: `App.tsx`, `Header.tsx`, `Footer.tsx`,
  `ProjectCard.tsx`, `CaseStudyPage.tsx`, `HomePage.tsx`. Header, Footer and Home are exactly where
  contact gating lives, so a careless merge could put email/phone back on `/work` pages.
- It rewrites DESIGN.md (−475 lines changed) and has a "Netlify configuration" checklist that no longer
  matches the GitHub Pages setup.

Worth taking (by hand, after choosing a direction):
- **Home structure:** one large featured project followed by a numbered list instead of a 4-card grid
  (the right idea for any direction).
- **MediaDemoViewer rewrite** with no nested vertical scroller (−640 lines changed; check it against the backlog's
  gallery a11y items).
- Skip-to-content link, `prefers-reduced-motion` CSS, `::selection`, favicon + theme-color.
- `scripts/qa/full-visual-qa.mjs` (route × viewport overflow audit).
- Experience as a ruled list instead of three boxed cards.

---

## 5. Backlog check (docs/backlog.md)

- **Decisions pending #2** says to decide on the v2 branch before any design work on `main`. The
  recommendation above settles that ("don't merge, cherry-pick"), once you confirm.
- **No conflicts with P0.** Problem/Solution/Impact rendering and empty category tiles should be done
  *inside* the new case-study and projects layouts rather than patched in the old ones first.
  Do the NDA scrub of those fields before they become visible.
- **Same work as P1/P2 items, do together:**
  - "Inter font declared, never loaded" (replaced by the real font choice)
  - "Two autoplay hero videos / no reduced-motion" (replaced by real footage + reduced motion)
  - "framer-motion for one fade" (directions A/B/C need no motion library)
  - "Dead CSS from badge reel" (delete with the pill cleanup)
  - "Hero headline vague" and "Title inconsistent"
  - "Experience stats strip hidden on mobile"
- **Media rules (CLAUDE.md):** replacement hero captures must stay under ~10 MB each (or go to YouTube)
  and need posters; run `npm run thumbnails`. BEDO captures go through the NDA review skill.
- **Proposal pages** use their own light A4 theme (`proposal.css`). Direction B would match it most; A and C
  only need the font swap there.

## 6. Questions before any code

1. Which direction: A, B, C, or a mix?
2. Can you capture real footage for the heroes (Unity builds/editor), and which BEDO footage is cleared to show?
3. OK to delete the v2 branch after cherry-picking, or keep it for reference?

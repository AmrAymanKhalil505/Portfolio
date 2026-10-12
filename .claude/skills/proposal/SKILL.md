---
name: proposal
description: Build a tailored proposal page and PDF for a job post (usually Upwork) on the portfolio site, plus the cover letter. Use when Amr pastes a job post or names a company to apply to.
---

# Proposal for a job post

Input: the job post text (preferred) or its URL, and anything Amr adds.

## 1. Read first
- `.claude/skills/proposal/facts.md`: Amr's confirmed rate, availability, equipment, maintenance terms, experience dates and process. Use them; do not re-ask.
- `src/data/proposals/utopivr.ts`: the reference proposal. Match its structure and quality.
- `src/data/proposals/types.ts`: the data shape.

## 2. Analyse the post before writing
- List **everything the post asks applicants to include** (dates, portfolio, rate, hours, equipment, etc.). Each becomes one answer, in their order, with their own wording as `original` (in their language if not English).
- List **scope items, requirements, nice-to-haves**. Each becomes a row in `requirementGroups` with an honest status: `direct` (done in production), `adjacent`, `partial`, or `commitment` (will deliver).
- Note anything that does not fit Amr (e.g. years of VR required). Add a `candidNote` instead of stretching facts.
- Note what kind of client this is (direct hire, agency, a company bidding for a tender) and what helps them most.

## 3. Write the data file
- Create `src/data/proposals/<slug>.ts` (slug = lowercase company name) and register it in `src/data/proposals/index.ts`.
- Evidence: only projects that exist in `src/data/projects.ts`. Use generated WebP thumbnails from `src/assets/thumbnails/projects/...` (small), not the large source PNGs. Links use `caseStudyUrl()` (the `/work/` site).
- Approach section: specific to their domain and device, honest about what must be validated. Include Amr's HTML-prototype-first process where it fits.
- Timeline: fit THEIR schedule from the post; include the notice month.
- Questions: 4-6 real questions a good contractor would ask in the first call.
- Any fact not in facts.md and not in the post: write `[[TODO: ...]]` and ask Amr. Never invent rates, dates, hours or experience.
- No email, phone, LinkedIn or GitHub anywhere (job-platform rules before a contract).

## 4. Verify
- `npm run build` must pass.
- Open `/work/proposal/<slug>` at desktop and 375px width; the TODO counter must be 0 before sending.
- PDF: from the page, "Save as PDF" in a desktop browser, or headless Chrome:
  `chrome --headless=new --no-pdf-header-footer --print-to-pdf=<out.pdf> http://localhost:5173/work/proposal/<slug>`.
  On a phone: open the live page, then Share > Print > Save as PDF. Check the PDF itself, not just the screen.
- Run the `nda-public-safety-review` skill over the new file.

## 5. Cover letter (for the platform's text box)
About 150-200 words. First two lines are about THEIR project and the closest match (they are all the preview shows). Then short answers to what they asked for, the prototype-first process if relevant, the `/work/` portfolio link, and end with one real question about their project. Keep weaknesses for the PDF's candid note, not the opening.

## 6. Publish
Commit (`feat: add <company> proposal`) and push to main only when Amr says so. Remind him the page goes live (unlisted, noindex) and that the PDF links only work after the push.

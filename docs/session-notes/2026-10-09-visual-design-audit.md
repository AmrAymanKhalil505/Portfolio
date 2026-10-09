# 2026-10-09 Visual design audit (research only)

- Report: docs/reviews/2026-10-09-visual-design-audit.md. Screenshots in docs/reviews/2026-10-09-design-audit/
  (untracked, ~6 MB; don't commit the *-full.jpg files).
- Key finding: all 8 hero videos in src/assets (Robot Disass, Industrial Traning Hero, PID Hero, Engineering
  Educational, Atmo Protector Hero, Ivris, Nescafe, Tanta University) carry C2PA "Created by Google Generative
  AI" + SynthID metadata. Replace with real Unity captures before any restyle.
- Recommended direction: A "Control room (HMI)" (ISA-101 grey, color = state, B612 + B612 Mono + IBM Plex Sans),
  borrowing figure callouts + title block from B. Awaiting Amr's pick.
- redesign/editorial-engineering-dossier-v2: don't merge (6 conflicts with work mode, unloaded fonts, keeps AI
  heroes, template look). Cherry-pick structure by hand: featured + numbered list, MediaDemoViewer without nested
  scroller, skip link, reduced motion, favicon, scripts/qa/full-visual-qa.mjs.
- No site code changed. .claude/launch.json was temporarily edited to preview the branch and restored.

# Proposal facts (confirmed by Amr, 2026-10-08/10)

Reuse these in every proposal. Do not re-ask unless a job needs different terms.

## Rate and billing
- Upwork / job platforms: **USD 28 per hour net**, no VAT added on Amr's side, billed as an hourly Upwork contract.
  (Chosen so Amr nets about $25/hour after Upwork's ~10% fee. If the job's Upwork fee is not 10%, ask.)
- Minimum acceptable: about USD 1,500 per month.

## Availability
- Currently employed at BEDO with a **one-month notice period**: starts full engagement one month after an award.
- During the notice month: part-time, about **15 hours/week** (~60 hours that month).
- After (freelance/contract): **30 hours/week** (~120-130 hours/month), up to **40 hours/week** in busy phases.
- After (full-time employment role): **40 hours/week** (confirmed 2026-10-17).
- Time zone: Egypt, 1 hour ahead of Poland / CET.

## Tools
- AI coding tools: uses **Codex** and **Claude Code** in development (confirmed 2026-10-17). AI features inside a shipped product: not confirmed, ask.

## Salary asks (per job, confirmed)
- SyncVR Medical (Medior 3D XR Developer): EUR 2,700 gross per month.

## Equipment
- Owns a **Meta Quest 2** (Oculus Quest 2) for development and testing.

## Maintenance / warranty
- Fixes defects in code he wrote at no extra charge during a warranty period.
- New features and scope changes are billed separately.
- Wants the boundaries (defect vs change, response times) agreed in writing before signing.

## Experience (use these dates exactly)
| Period | Role | Notes |
|---|---|---|
| Oct 2024 - present | Senior Unity Engineer, BEDO Innovating Education | Unity/WebGL simulations of engineering trainers (EV117 fuel-cell lab, MR109/MR110 stations, PID labs, fluid labs); migrating projects to Unity 6 since ~July 2026 |
| Jun 2024 - Jun 2026 | Unity & AR developer, Ivris (freelance) | Built the Unity app (not the whole product): runtime 3D loading, Photon WebGL multiplayer editing, AR Foundation + AR Foundation Remote 2, PlayFab; Unity 6 |
| Dec 2023 - Oct 2024 | Unity VR developer, Tanta University (sole developer) | Meta Quest 2 suite: onboarding, 360 surgical viewer, viscosity lab with hand-held calculator/stopwatch; Auto Hand |
| 2025, one week | Nescafe Ice Coffee VR surfing booth (freelance) | Short-session VR game |

- **No VR work before Tanta University.** Dedicated VR = about 11 months + the one-week booth. Be candid when a job asks for more.
- **OpenXR / XR Interaction Toolkit: not used in production.** VR interactions used Auto Hand; AR used AR Foundation. Mark as "Related experience", never "Done".
- **Unity 6: done in production** (Ivris; BEDO migration).
- **Shipped commercial software: yes.** BEDO's Unity simulations are commercial products sold to universities and companies (B2B, bought through BEDO, not a public store). Count them as shipped products. They are not consumer games, so for "shipped game title" requirements keep the status "partial" but lead with BEDO. Don't name BEDO's customers.
- **Atmosphere Protector: not released** (not in a store or with schools yet). Never call it shipped.
- **URP: only the Nescafe VR booth game (2025).** BEDO and Ivris projects use the built-in render pipeline.

## Skills and background (confirmed 2026-10-17)
- **English:** works in English daily; B.Sc. studies and bachelor thesis were in English. No formal test score. **German: A1. Russian: none.**
- **Education:** B.Sc. Computer Science Engineering and Technology, German University in Cairo (2014-2019). Thesis used Python to train a model that drives a car in a Unity simulation (his only Python work).
- **Mentoring / code review:** mentors one intern at BEDO and reviews his work since 1 Aug 2026. One person, not a team lead.
- **AI coding tools:** Codex and Claude Code, daily, to speed up development; he reviews and tests the output. No AI-generated creative assets or AI inside a shipped product.
- **Automated tests:** not a strength; AI tools write most tests he adds. Never claim a test practice.
- **Unreal / C++:** only explored Unreal briefly, no projects.
- **JavaScript / React:** Coursera specialization "Full-Stack Web Development with React" (HKUST, Aug 2021: React, React Native, Node.js/Express, MongoDB). OneJS (JS/TS UI inside Unity) at Ivris; the portfolio is React + TypeScript. Built with heavy AI help, so not a React specialist.
- **3D tools:** Blender to fix and adjust models without the 3D artist; a six-month modelling and texturing specialization at Nayzak animation school; beginner Substance Painter and ZBrush.
- **Unity Timeline:** short intro sequences for BEDO's marketing team. **DOTween:** almost every BEDO project. PrimeTween: not used.
- **Largest codebase:** BEDO lab project, about 80,000 lines of in-house C# (~390 files, excluding third-party packages), shared by the team.
- **Full-time roles:** willing to work 40 h/week after the notice month (confirmed for Magic Media, 2026-10-17). Salary is set per client: Magic Media (mid-level, remote, Europe pay) = USD 2,500-3,000/month.
- **Still unknown:** concrete optimisation examples (what was slow, what changed, result).

## How he works (his real process, use it)
Before any Unity development he builds an **HTML prototype with 2D vector graphics**. Every changing value is driven by its real equation, shown next to it, so instructional-design engineers can verify the behavior and confirm nothing is hard-coded. It covers both guided scenarios (enforced steps) and free mode. Dev and ID teams agree on the system there, before Unity time is spent.

## Links
- Portfolio for job platforms (no contact details): https://amraymankhalil505.github.io/Portfolio/work/
- Case studies: `/Portfolio/work/projects/<id>` (ids in src/data/projects.ts)
- Contact-free resume: https://amraymankhalil505.github.io/Portfolio/Amr_Khalil_CV_work.pdf

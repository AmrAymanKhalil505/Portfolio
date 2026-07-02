# 2026-07-02 Project Card Layout Alignment

## Goal

Make the project cards look aligned and intentional when shown in a grid.

The problem was that different project titles, summaries, badge counts, and tech-chip rows caused card sections to drift vertically. The user specifically marked that sections needed to be parallel and that all `Inspect Case Study` buttons should sit on the same horizontal line.

## Files changed

- `src/components/ProjectCard.tsx`
- `src/styles.css`

## Layout changes

`ProjectCard.tsx` was changed from a flexible content stack to fixed visual slots:

```text
Image / preview media
Title area
Summary area
Evidence badge area
Tech chip area
CTA button area
```

Current body layout intent:

```text
Card body min-height: 35rem
Title slot: fixed height for consistent title alignment
Summary slot: fixed height for consistent summary alignment
Evidence slot: fixed height for badge reel alignment
Tech-chip slot: fixed height so extra chip rows cannot push the CTA down
CTA slot: anchored at the bottom
```

This keeps the main card sections parallel across the grid.

## Evidence badge scroll behavior

The badge reel was generalized so projects with more than 3 explicit evidence badges use the vertical dot indicator.

Current behavior:

- Projects with more than 3 evidence badges use a compact vertical dot rail.
- The dot rail has up/down arrow buttons.
- The active dot updates based on scroll position.
- The actual scrollbar is hidden for dot-indicator reels.
- Non-dot fallback reels keep standard compact scrolling.

## Relevant design decisions

### Why fixed slots?

The project grid has mixed content lengths. If each card is allowed to grow naturally, sections stop lining up. Fixed slots solve this by making the cards behave more like structured product tiles.

### Why increase the card size?

The Engineering Education card needed more breathing room after the badge refactor. The card body was increased from `33rem` to `35rem` rather than shrinking the content too aggressively.

### Why fix the tech-chip area?

Some cards have more tech chips than others. When this area used only `min-height`, extra rows could push the `Inspect Case Study` button down. Switching to a fixed-height tech-chip slot prevents that.

## Validation

The layout and badge changes were validated multiple times with:

```bash
npx tsc -b
npm run build
```

Some direct Vite/TypeScript commands were occasionally blocked by the tool layer, but `npm run build` passed and runs both TypeScript and Vite production build.

## Follow-up visual check

Recommended next step:

1. Start dev server:
   ```bash
   npm run dev -- --host 127.0.0.1
   ```
2. Open the portfolio grid.
3. Check that:
   - card titles align,
   - summaries align,
   - badge sections align,
   - tech chips align,
   - all `Inspect Case Study` buttons align on the same horizontal line.

If any row still feels too tight, adjust only the fixed slot heights in `ProjectCard.tsx`, not the project text.

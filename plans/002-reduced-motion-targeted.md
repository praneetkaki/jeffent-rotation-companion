# 002: Replace the blanket reduced-motion rule with a targeted one

- **Status**: DONE
- **Commit**: 7512774
- **Severity**: HIGH
- **Category**: Accessibility
- **Estimated scope**: 1 file (assets/styles.css), about 12 lines

## Problem

The global safety net sets every animation and transition to about zero, which also removes harmless color and opacity feedback (hover color, focus fills, fades). Reduced motion should mean fewer and gentler animations, not none.

```css
/* assets/styles.css:1763-1769 current */
/* ---- global reduced-motion safety net ---- */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .001ms !important; animation-iteration-count: 1 !important;
    transition-duration: .001ms !important; scroll-behavior: auto !important;
  }
}
```

## Target

Keep color, background, border and opacity transitions (at their normal short duration). Remove movement: transforms, infinite animations, smooth scrolling.

```css
/* target */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
  *, *::before, *::after { transition-property: color, background-color, border-color, opacity, box-shadow !important; }
  .home-scroll-cue svg, .welcome-card { animation: none !important; }
}
```

`transition-property` with the five properties above drops `transform`, `left`, `top`, `width`, `height` transitions while keeping the feedback ones. Keyframe animations that move things are already disabled per component by existing `@media (prefers-reduced-motion: reduce)` blocks (about 56 of them); leave those in place.

## Repo conventions to follow

- Easing tokens live in `assets/styles.css` `:root` (about lines 45-48): `--ease-out: cubic-bezier(0.23, 1, 0.32, 1);`, `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);`, `--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);`. Use them; do not add new curves.
- Plain ES5 JavaScript, no build step. Bump the `?v=` cache-buster for any edited file in `index.html`.
- No em dashes in any visible text.

## Steps

1. In `assets/styles.css`, replace lines 1763-1769 with the target block.
2. Search for `cueBob` (line about 2659) and `welcomeFloat`/`welcomeSpin` (lines 200-201) and confirm each infinite animation is covered by the `animation: none !important` selector list; add selectors for any infinite animation that is missing.
3. Bump `?v=` on `assets/styles.css`.

## Boundaries

- Do NOT remove the per-component reduced-motion rules.
- Do NOT edit JavaScript. (JS that checks `matchMedia` for reduced motion stays as is.)

## Verification

- **Mechanical**: `node -e "new (require('vm').Script)(require('fs').readFileSync('js/app.js','utf8'))"` exits with no output (only if `js/app.js` was edited). Reload the app with a fresh `?nocache=` query and confirm the browser console shows no errors.
- **Reduced motion**: in DevTools Rendering panel set `prefers-reduced-motion: reduce` and confirm movement is gone but nothing is broken.
- **Feel check**: with reduced motion on, hover a button: its color still changes. Click a tab: the tab content changes without sliding. The scroll cue on the home hero is still, and clicking an in-page link jumps instead of smooth-scrolling.
- **Done when**: no `transition-duration: .001ms` remains in `assets/styles.css`.


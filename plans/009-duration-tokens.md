# 009: Add duration tokens and use them

- **Status**: TODO
- **Commit**: 7512774
- **Severity**: LOW
- **Category**: Cohesion and tokens
- **Estimated scope**: 1 file (assets/styles.css), mechanical find and replace

## Problem

Curves are shared tokens, but durations are hand-typed: `.15s` (66 uses), `.16s` (37), `.18s` (34), `.12s`, `.14s`, `.2s`, `.25s`, `.3s`. Near-identical values drift apart over time.

```css
/* assets/styles.css:45-48 current: curves only */
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

## Target

```css
/* add next to the curves in :root */
--dur-fast: 120ms;   /* press, small color changes */
--dur-base: 160ms;   /* hover, focus, chips */
--dur-slow: 240ms;   /* dropdowns, panels */
```

Replace transition durations as follows, in `transition:` declarations only: `.12s` and `.14s` become `var(--dur-fast)`; `.15s`, `.16s` and `.18s` become `var(--dur-base)`; `.2s`, `.22s`, `.25s` become `var(--dur-slow)`. Leave durations of `.3s` and above, keyframe animations, `scroll` and ring/stroke transitions unchanged.

## Repo conventions to follow

- Easing tokens live in `assets/styles.css` `:root` (about lines 45-48): `--ease-out: cubic-bezier(0.23, 1, 0.32, 1);`, `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);`, `--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);`. Use them; do not add new curves.
- Plain ES5 JavaScript, no build step. Bump the `?v=` cache-buster for any edited file in `index.html`.
- No em dashes in any visible text.

## Steps

1. Add the three tokens to `:root` in `assets/styles.css` next to the easing tokens.
2. Run a targeted replacement only inside lines that contain `transition:` and `var(--ease-out)`: `.12s`, `.14s` to `var(--dur-fast)`; `.15s`, `.16s`, `.18s` to `var(--dur-base)`; `.2s`, `.22s`, `.25s` to `var(--dur-slow)`.
3. Confirm no keyframe `animation:` durations changed (`git diff` should show only `transition` lines).
4. Bump `?v=` on `assets/styles.css`.

## Boundaries

- Do NOT replace durations inside `animation:` declarations or `@keyframes`.
- Do NOT touch tokens used by JavaScript timers.
- If a replacement would change a duration by more than 40ms, skip that line and list it in your report.

## Verification

- **Mechanical**: `node -e "new (require('vm').Script)(require('fs').readFileSync('js/app.js','utf8'))"` exits with no output (only if `js/app.js` was edited). Reload the app with a fresh `?nocache=` query and confirm the browser console shows no errors.
- **Reduced motion**: in DevTools Rendering panel set `prefers-reduced-motion: reduce` and confirm movement is gone but nothing is broken.
- **Feel check**: hover and focus around the site; nothing should feel noticeably faster or slower than before (all changes are within a few milliseconds).
- **Done when**: `grep -c "var(--dur-" assets/styles.css` is above 100 and `git diff --stat` shows only `assets/styles.css` and `index.html`.


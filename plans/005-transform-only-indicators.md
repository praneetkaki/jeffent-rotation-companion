# 005: Animate indicators and progress bars with transform, not layout

- **Status**: TODO
- **Commit**: 7512774
- **Severity**: MEDIUM
- **Category**: Performance
- **Estimated scope**: 1 CSS file plus small JS for the indicator, about 40 lines

## Problem

Sliding pill indicators transition `left`, `top`, `width` and `height`, and progress bars transition `width`. These trigger layout on every frame.

```css
/* assets/styles.css:498-500 current */
.filter-pill-indicator { position: absolute; background: var(--hero-bg); border-radius: 999px; z-index: 0;
  transition: left .3s var(--ease-spring), top .3s var(--ease-spring), width .3s var(--ease-spring), height .3s var(--ease-spring); }
/* assets/styles.css:605-607 current */
.tab-pill-indicator { position: absolute; background: var(--track-color, var(--primary)); border-radius: 2px 2px 0 0;
  top: auto !important; bottom: 0; height: 2px !important; z-index: 2;
  transition: left .3s var(--ease-spring), top .3s var(--ease-spring), width .3s var(--ease-spring), height .3s var(--ease-spring); }
/* assets/styles.css:393, 891, 1535 current progress bars */
.bar > i { ... transition: width .5s var(--ease-out); ... }
.progress > i { ... transition: width .5s var(--ease-out); }
.fp-prog i { ... transition: width .3s var(--ease-out); }
```

The JS that positions these indicators sets `style.left` and `style.width` (search `filter-pill-indicator` and `tab-pill-indicator` in `js/app.js`).

## Target

- Indicators: JS sets `transform: translateX(<left>px)` and `width` is set once without transition, or use `transform: translateX(...) scaleX(...)` with `transform-origin: left`. CSS: `transition: transform .3s var(--ease-drawer);` only.
- Progress bars: keep `width` set by JS but animate with `transform: scaleX(<ratio>)` and `transform-origin: left`: `transition: transform .3s var(--ease-out);`, element at `width: 100%`.

Keep the springy `--ease-spring` only where it is used today on the filter pill if you want the personality; otherwise `--ease-drawer`. Do not exceed 300ms.

## Repo conventions to follow

- Tokens as in `:root` lines 45-48. Exemplar for transform-only bar growth: `.bp-col .bp-bar` at `assets/styles.css:2774` (`transform-origin: bottom; transform: scaleY(0)` then `scaleY(1)`).
- Reduced motion rules already exist for each indicator; keep them.

## Steps

1. Find the JS that sets indicator geometry (`grep -n "pill-indicator" js/app.js`). Change it to set `transform: translateX(<n>px)` and a fixed `width`, and to disable the transition on the first placement (set a `data-ready` attribute after the first frame).
2. Change the two indicator CSS rules to transition `transform` only.
3. For each progress bar rule (lines 393, 891, 1535): set the inner `i` to `width: 100%; transform-origin: left; transform: scaleX(var(--p, 0)); transition: transform .3s var(--ease-out);`. In the JS that sets `style.width = x + "%"` for these elements, set `style.setProperty("--p", x / 100)` instead. Search `\.bar\b`, `\.progress\b` and `fp-prog` usages in `js/app.js`.
4. Bump `?v=` on both files.

## Boundaries

- Do NOT touch the pimp panel layout transitions (`body` padding, `.topbar` margins at `assets/styles.css:1457-1463`); they are a separate, larger change.
- Do NOT change colors, sizes or markup.
- If the JS setting these values differs from the description, STOP and report.

## Verification

- **Mechanical**: `node -e "new (require('vm').Script)(require('fs').readFileSync('js/app.js','utf8'))"` exits with no output (only if `js/app.js` was edited). Reload the app with a fresh `?nocache=` query and confirm the browser console shows no errors.
- **Reduced motion**: in DevTools Rendering panel set `prefers-reduced-motion: reduce` and confirm movement is gone but nothing is broken.
- **Feel check**: click between Home filter pills and module tabs: the indicator slides smoothly with no jitter. Complete a card and watch the study progress bar grow smoothly. In DevTools Performance, record a pill slide and confirm no Layout entries per frame.
- **Done when**: `grep -n "transition: *\(left\|top\|width\|height\)" assets/styles.css` finds only the tour ring and the pimp panel.


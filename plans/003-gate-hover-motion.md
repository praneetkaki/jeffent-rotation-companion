# 003: Gate hover motion to real hover devices

- **Status**: TODO
- **Commit**: 7512774
- **Severity**: MEDIUM
- **Category**: Accessibility
- **Estimated scope**: 1 file (assets/styles.css), about 40 lines moved

## Problem

About 30 hover rules move things (lift, slide, scale) but only 3 media queries limit hover to devices that really hover. On touch screens a tap leaves the lift or scale "stuck".

Examples, all current:

```css
/* assets/styles.css */
173: .welcome-card:hover, .welcome-card:focus-visible { transform: scale(1.02); }
414: .tile:not(:disabled):hover { transform: translateY(-3px); ... }
667: .tg-filter:hover:not(.active) { color: var(--ink-soft); transform: translateY(-1px); }
698: .tg-card:hover { transform: translateY(-4px); ... }
702: .tg-card:hover .tg-media img { transform: scale(1.06); }
877: .mod-row:hover { ... transform: translateY(-2px); }
1033: .case-row:hover { ... transform: translateY(-1px); }
2385: .rate:hover, .rate.again:hover ... { transform: translateY(-2px); ... }
2589: .jump-chip:hover { ... transform: translateY(-2px); ... }
2783: .bp-row:hover, .bp-row:focus-visible { ... transform: translateX(3px); }
2920: .deck-tile:hover, .deck-tile:focus-visible { transform: translateY(-2px); ... }
2949: .ds-top:hover { transform: translateY(-3px); }
```

(Run `grep -n ":hover[^{]*{[^}]*transform" assets/styles.css` to get the full current list; the line numbers above are from commit stamp.)

## Target

Every hover rule that sets `transform` is wrapped:

```css
@media (hover: hover) and (pointer: fine) {
  .tile:not(:disabled):hover { transform: translateY(-3px); /* keep the rest of the declarations */ }
}
```

Keep `:focus-visible` variants outside the media query so keyboard focus still shows. Color, border and shadow changes may stay ungated; only the `transform` declarations need gating.

## Repo conventions to follow

- Easing tokens live in `assets/styles.css` `:root` (about lines 45-48): `--ease-out: cubic-bezier(0.23, 1, 0.32, 1);`, `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);`, `--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);`. Use them; do not add new curves.
- Plain ES5 JavaScript, no build step. Bump the `?v=` cache-buster for any edited file in `index.html`.
- No em dashes in any visible text.
- Exemplar: `assets/styles.css:1783` already does `@media (hover: hover) and (pointer: fine) { .note-fig img:hover { transform: scale(1.012); } }`.

## Steps

1. For each rule returned by the grep above, split it: leave non-transform declarations where they are, and move the `transform` declaration into a new rule inside `@media (hover: hover) and (pointer: fine)` placed directly under the original rule.
2. For rules that share a selector with `:focus-visible`, keep a separate ungated `:focus-visible` rule with the same transform.
3. Bump `?v=` on `assets/styles.css`.

## Boundaries

- Do NOT change durations, curves or non-transform properties.
- Do NOT touch `:active` rules.
- If a selector is shared across many properties and splitting is ambiguous, STOP and report that selector.

## Verification

- **Mechanical**: `node -e "new (require('vm').Script)(require('fs').readFileSync('js/app.js','utf8'))"` exits with no output (only if `js/app.js` was edited). Reload the app with a fresh `?nocache=` query and confirm the browser console shows no errors.
- **Reduced motion**: in DevTools Rendering panel set `prefers-reduced-motion: reduce` and confirm movement is gone but nothing is broken.
- **Feel check**: in DevTools device mode (touch), tap a tile and a subspecialty card: nothing stays lifted after the tap. On desktop with a mouse, hover lifts still work and keyboard Tab focus still shows the focus ring.
- **Done when**: `grep -n ":hover[^{]*{[^}]*transform" assets/styles.css` returns only lines inside a `@media (hover: hover)` block.


# 006: Shorten the route fade and make it a quiet opacity change

- **Status**: TODO
- **Commit**: 7512774
- **Severity**: MEDIUM
- **Category**: Purpose and frequency
- **Estimated scope**: 1 file (assets/styles.css), 3 lines

## Problem

Each screen change replays a 280ms fade with a 6px upward move from keyframes, which restart from zero if the user navigates quickly. Navigation is the most frequent action in the app.

```css
/* assets/styles.css:253-255 current */
.screen { animation: fade .28s var(--ease-out); }
@keyframes fade { from { opacity: 0; transform: translateY(6px);} to {opacity:1; transform:none;} }
@media (prefers-reduced-motion: reduce) { .screen { animation: none; } }
```

## Target

```css
/* target */
.screen { animation: fade 140ms var(--ease-out); }
@keyframes fade { from { opacity: 0; } to { opacity: 1; } }
```

(Opacity only. Under reduced motion keep the fade: remove line 255, because opacity is allowed to stay.)

## Repo conventions to follow

- Easing tokens live in `assets/styles.css` `:root` (about lines 45-48): `--ease-out: cubic-bezier(0.23, 1, 0.32, 1);`, `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);`, `--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);`. Use them; do not add new curves.
- Plain ES5 JavaScript, no build step. Bump the `?v=` cache-buster for any edited file in `index.html`.
- No em dashes in any visible text.

## Steps

1. Edit lines 253-255 of `assets/styles.css` to the target above, deleting the reduced-motion override.
2. Bump `?v=` on `assets/styles.css`.

## Boundaries

- Do NOT change any other use of the `fade` keyframe: first run `grep -n "fade " assets/styles.css` and, if another rule uses `animation: fade`, keep it working with the opacity-only version.

## Verification

- **Mechanical**: `node -e "new (require('vm').Script)(require('fs').readFileSync('js/app.js','utf8'))"` exits with no output (only if `js/app.js` was edited). Reload the app with a fresh `?nocache=` query and confirm the browser console shows no errors.
- **Reduced motion**: in DevTools Rendering panel set `prefers-reduced-motion: reduce` and confirm movement is gone but nothing is broken.
- **Feel check**: click Home, a module, a tab, Home again quickly. Each screen appears at once with a faint fade; there is no vertical drift.
- **Done when**: `.screen` animation is 140ms and the `fade` keyframes contain no transform.


# 008: Add subtle press feedback to the main controls

- **Status**: TODO
- **Commit**: 7512774
- **Severity**: LOW
- **Category**: Physicality and origin
- **Estimated scope**: 1 file (assets/styles.css), about 12 lines

## Problem

Only 8 controls have an `:active` press state, so the most-used controls (rating buttons, plan chips, deck and case buttons) give no press feedback.

Existing exemplar rules:

```css
/* assets/styles.css:174, 563, 2230 current */
.welcome-card:active { transform: scale(.98); }
.recall-fab:active { transform: scale(.96); }
.lesson-learned-btn:active, .lesson-learned-cards:active { transform: scale(.97); }
```

## Target

Add the same subtle press to these selectors, each with `transition: transform 160ms var(--ease-out)` on the base rule if not already present:

```css
.rate:active, .plan-chip:active, .plan-check:active, .case-skip:active, .case-strip-dot:active,
.cl-chip:active, .proc-chip:active, .deck-chip:active, .ds-controls .btn:active { transform: scale(0.97); }
```

Wrap in `@media (prefers-reduced-motion: reduce) { ...:active { transform: none; } }`.

## Repo conventions to follow

- Exemplar: `assets/styles.css:2230`. Tokens as in `:root` lines 45-48.

## Steps

1. Append the rule above near the existing `:active` rules (around line 2230) in `assets/styles.css`.
2. For each selector, confirm its base rule transitions `transform`. Where it does not, add `transform 160ms var(--ease-out)` to that rule's `transition` list (do not replace other transitions).
3. Bump `?v=` on `assets/styles.css`.

## Boundaries

- Do NOT change `.rate:hover` or any hover rule.
- Do NOT add a scale to links or text-only elements.

## Verification

- **Mechanical**: `node -e "new (require('vm').Script)(require('fs').readFileSync('js/app.js','utf8'))"` exits with no output (only if `js/app.js` was edited). Reload the app with a fresh `?nocache=` query and confirm the browser console shows no errors.
- **Reduced motion**: in DevTools Rendering panel set `prefers-reduced-motion: reduce` and confirm movement is gone but nothing is broken.
- **Feel check**: press and hold a rating button: it shrinks slightly and returns on release in about 160ms. It never shrinks enough to reveal a gap.
- **Done when**: each listed selector has an `:active` transform.


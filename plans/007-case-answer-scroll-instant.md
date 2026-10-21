# 007: Make the case answer scroll prompt and keyboard friendly

- **Status**: TODO
- **Commit**: 7512774
- **Severity**: MEDIUM
- **Category**: Purpose and frequency
- **Estimated scope**: 1 file (js/app.js), about 6 lines

## Problem

After you reveal a case answer, the page waits 160ms and then smooth-scrolls the next question to the middle of the screen. Space triggers the reveal, so the delay and long smooth scroll slow a keyboard flow.

```js
// js/app.js:4061-4066 current (inside renderCaseStepper)
/* After an answer opens, glide the next stage into view. */
function settle() {
  var nxt = flow.querySelector(".cu-stage:not(.locked):not(.done)") || flow.querySelector(".cu-end:not(.locked)");
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (nxt && nxt.scrollIntoView) setTimeout(function () { nxt.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" }); }, 160);
}
```

The same file has a second, unrelated `function settle()` at about line 4318; edit only the one that contains `.cu-stage`.

## Target

Scroll only if the next stage is not already fully in view, with no delay, and use `block: "nearest"` so the page moves the minimum distance. Smooth scroll is allowed because it is a short distance, but skip it when the next stage is visible.

```js
// target
function settle() {
  var nxt = flow.querySelector(".cu-stage:not(.locked):not(.done)") || flow.querySelector(".cu-end:not(.locked)");
  if (!nxt) return;
  var r = nxt.getBoundingClientRect();
  if (r.top >= 0 && r.bottom <= window.innerHeight) return;
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  nxt.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "nearest" });
}
```

## Repo conventions to follow

- Easing tokens live in `assets/styles.css` `:root` (about lines 45-48): `--ease-out: cubic-bezier(0.23, 1, 0.32, 1);`, `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);`, `--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);`. Use them; do not add new curves.
- Plain ES5 JavaScript, no build step. Bump the `?v=` cache-buster for any edited file in `index.html`.
- No em dashes in any visible text.

## Steps

1. Replace the `settle` function in the case view (the one with `.cu-stage`) with the target code.
2. Bump `?v=` on `js/app.js`.

## Boundaries

- Do NOT change the unlocking logic (`refresh`), the stage fade-in, or the second `settle` function.

## Verification

- **Mechanical**: `node -e "new (require('vm').Script)(require('fs').readFileSync('js/app.js','utf8'))"` exits with no output (only if `js/app.js` was edited). Reload the app with a fresh `?nocache=` query and confirm the browser console shows no errors.
- **Reduced motion**: in DevTools Rendering panel set `prefers-reduced-motion: reduce` and confirm movement is gone but nothing is broken.
- **Feel check**: open a case on a tall window: answering question 1 does not move the page if question 2 is already visible. On a short window, the page moves just far enough. Pressing Space repeatedly feels immediate.
- **Done when**: no `setTimeout` remains inside the case `settle` function.


# 001: Remove the flashcard flip and slide-up reveals

- **Status**: DONE
- **Commit**: 7512774
- **Severity**: HIGH
- **Category**: Purpose and frequency
- **Estimated scope**: 2 files (assets/styles.css, js/app.js), about 25 lines

## Problem

Every flashcard reveal plays a 3D flip (rotate out 170ms, swap, rotate in 170ms), then the answer slides up (260ms) and the rating buttons slide up (300ms). Cards are studied hundreds of times a day and Space triggers this, so the interface feels slow.

```css
/* assets/styles.css:975-978 current */
.flashcard.card-flip-out { animation: cardFlipOut .17s var(--ease-out) forwards; }
.flashcard.card-flip-in { animation: cardFlipIn .17s var(--ease-out); }
@keyframes cardFlipOut { from { transform: rotateY(0deg); } to { transform: rotateY(-90deg); } }
@keyframes cardFlipIn { from { transform: rotateY(90deg); } to { transform: rotateY(0deg); } }
/* assets/styles.css:1777-1779 current */
.card-back:not(.hidden) { animation: cardReveal .26s var(--ease-out); }
.answer-controls { animation: cardReveal .3s var(--ease-out); }
@keyframes cardReveal { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
```

```js
// js/app.js flipCardThen, current
function flipCardThen(container, reveal) {
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fcEl = container && container.querySelector(".flashcard");
  if (reduced || !fcEl) { reveal(); return; }
  fcEl.classList.add("card-flip-out");
  setTimeout(function () { flipInPending = true; reveal(); }, 170);
}
```

`flipCardThen` is called from js/app.js at the study session reveal (about line 4494), the card-library reveal (about line 4450) and the side flashcard panel (about line 6390).

## Target

- No flip and no delay: reveal happens on the same frame.
- Answer fades in only: `opacity 0 to 1`, 120ms, `var(--ease-out)`, no translate.
- Rating buttons appear with no animation (they are the next action; delaying them delays grading).

```css
/* target */
.card-back:not(.hidden) { animation: cardFade 120ms var(--ease-out); }
@keyframes cardFade { from { opacity: 0; } to { opacity: 1; } }
/* delete the .answer-controls animation rule at line 1778 */
```

```js
// target
function flipCardThen(container, reveal) { reveal(); }
```

## Repo conventions to follow

- Easing tokens live in `assets/styles.css` `:root` (about lines 45-48): `--ease-out: cubic-bezier(0.23, 1, 0.32, 1);`, `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);`, `--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);`. Use them; do not add new curves.
- Plain ES5 JavaScript, no build step. Bump the `?v=` cache-buster for any edited file in `index.html`.
- No em dashes in any visible text.

## Steps

1. In `assets/styles.css`, delete lines 975-978 (the two flip classes and two flip keyframes).
2. Replace line 1777 with the 120ms `cardFade` rule above and add the `cardFade` keyframes. Delete line 1778 (`.answer-controls { animation: ... }`). Leave `@keyframes cardReveal` in place because `.case-a` (line 1058) still uses it.
3. In `js/app.js`, replace the body of `flipCardThen` with `reveal();` and remove the now unused `flipInPending` variable and every `if (flipInPending) { ... }` block (search for `flipInPending`).
4. Bump `?v=` on `assets/styles.css` and `js/app.js` in `index.html`.

## Boundaries

- Do NOT touch the swipe grading code (`initCardSwipe`) or the case answer animation (`.case-a`).
- Do NOT change markup or the rating logic.
- If `flipCardThen` or the CSS lines do not match the excerpts, STOP and report.

## Verification

- **Mechanical**: `node -e "new (require('vm').Script)(require('fs').readFileSync('js/app.js','utf8'))"` exits with no output (only if `js/app.js` was edited). Reload the app with a fresh `?nocache=` query and confirm the browser console shows no errors.
- **Reduced motion**: in DevTools Rendering panel set `prefers-reduced-motion: reduce` and confirm movement is gone but nothing is broken.
- **Feel check**: study a card; press Space. The answer appears at once with a barely visible fade, the rating buttons are there with no movement, and holding Space through ten cards feels instant. At 10% playback speed the fade is opacity only.
- **Done when**: no `card-flip` or `cardFlip` string remains in `assets/styles.css` or `js/app.js`.


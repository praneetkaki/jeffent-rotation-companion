# 004: Play Home count-ups and ring draws once per day

- **Status**: TODO
- **Commit**: 7512774
- **Severity**: MEDIUM
- **Category**: Purpose and frequency
- **Estimated scope**: 1 file (js/app.js), about 25 lines

## Problem

Home runs a 650ms stat count-up, a 900ms due-number count-up, ring drawing and staggered bar growth on every visit, and again each time the daily goal changes (the field calls `renderHome()`). Home is opened tens of times a day, so the replay becomes noise.

```js
// js/app.js:1886-1887 current (inside renderHome)
animateStatCounts(bento);
animateMasteryRing(bento);
```

```js
// js/app.js:1839-1854 current, the due-number count-up
(function () {
  var n = rp.querySelector(".bp-ring-n");
  var target = n ? parseInt(n.textContent, 10) : 0;
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!n || !target || reduced) return;
  ... // runs a 900ms requestAnimationFrame count-up from 0
})();
```

## Target

Play the intro motion at most once per calendar day. On later renders, show final values immediately and set bars and rings to their end state with no transition.

```js
// target helper, place above renderHome
function homeIntroSeen() {
  var key = "jeffent.homeIntro", day = localDayKey();
  try {
    if (localStorage.getItem(key) === day) return true;
    localStorage.setItem(key, day);
  } catch (e) {}
  return false;
}
```

In `renderHome`, call `var seenIntro = homeIntroSeen();` once near the top (after `var streak = getStreak();`). Then:

- If `seenIntro`: skip the due-number count-up IIFE, and instead of `animateStatCounts(bento)` set each `[data-count]` node's `textContent` to `data-count` plus `data-suffix`; call `animateMasteryRing(bento)` with reduced motion semantics (set `strokeDashoffset` directly); add class `is-in` to `cp` immediately and give `.bp-bar` and `.bp-ring` `transition: none` via a `home-static` class on `heroSec`.
- Else: run exactly the current code.

Add the CSS: `.home-static .bp-ring, .home-static .bp-col .bp-bar { transition: none; }`.

## Repo conventions to follow

- Easing tokens live in `assets/styles.css` `:root` (about lines 45-48): `--ease-out: cubic-bezier(0.23, 1, 0.32, 1);`, `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);`, `--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);`. Use them; do not add new curves.
- Plain ES5 JavaScript, no build step. Bump the `?v=` cache-buster for any edited file in `index.html`.
- No em dashes in any visible text.
- Exemplar: `animateStatCounts` (js/app.js:1324) already branches on reduced motion; mirror its "set final value" branch.

## Steps

1. Add `homeIntroSeen` above `renderHome` in `js/app.js`.
2. In `renderHome`, call it once and branch as described. Keep the first-visit path unchanged.
3. Add the `.home-static` rule to `assets/styles.css` and apply the class to `heroSec` when `seenIntro` is true.
4. Bump `?v=` on `js/app.js` and `assets/styles.css`.

## Boundaries

- Do NOT change any SRS or streak logic.
- Do NOT change the visual end state of any number, ring or bar.

## Verification

- **Mechanical**: `node -e "new (require('vm').Script)(require('fs').readFileSync('js/app.js','utf8'))"` exits with no output (only if `js/app.js` was edited). Reload the app with a fresh `?nocache=` query and confirm the browser console shows no errors.
- **Reduced motion**: in DevTools Rendering panel set `prefers-reduced-motion: reduce` and confirm movement is gone but nothing is broken.
- **Feel check**: clear `jeffent.homeIntro` in localStorage, reload: the numbers count up. Navigate to a module and back to Home: values are already final, with no bar growth. Change the daily goal: no replay.
- **Done when**: second and later Home renders on the same day show final values with no animation.


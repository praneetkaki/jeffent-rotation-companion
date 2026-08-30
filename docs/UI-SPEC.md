# UI Build Spec — topic-browser upgrade

Instructions for Claude Code to rebuild the interface. The visual reference is **`docs/ui-mockup.html`** (open it in a browser). Match its look and layout. Reuse the existing CSS tokens in `assets/styles.css`; **keep the SRS engine (`js/srs.js`), light/dark theming, offline-friendliness, and keyboard accessibility.** Do not add frameworks or a build step.

## What changes
Today the app shows one flat module. Upgrade it to two screens:

1. **Home = subspecialty browser.** A progress strip (overall mastery, due today, modules reviewed) + a responsive grid of **subspecialty tiles**. Each tile: a mono monogram badge (e.g., `OT`), the track name, a `red flags`/`core` chip, a meta line (`N modules · M cards`), and a progress bar. Clicking a tile opens that track's module list (or, if one module, the module directly).

2. **Module view = tabbed.** Breadcrumb (`← All topics`), eyebrow (track name), title, subtitle, a status chip (DRAFT/reviewed), then tabs: **Anatomy · Clinical · Cases · Cards**. See the mockup for the two-column Anatomy layout (notes + label-practice diagram) and the Clinical red-flags panel.

Keep the existing study/flashcard flow — it becomes the **Cards** tab. Keep the Reference red-flag styling — it moves into the **Clinical** tab.

## Data model change (do this carefully; it's the core of the refactor)
Extend the module object so content maps to the four tabs, and add track grouping. Migrate the existing pilot (`ent-exam-clinic-complaints.js`) into this shape as the "Foundations" track (its diagram → `anatomy`, its `redFlags`/`reference`/differential cards → `clinical`, `cases` and `cards` stay).

```js
window.JEFFENT.register({
  id: "otology-ear",
  track: "otology",                 // groups tiles on Home
  trackName: "Otology & Neurotology",
  trackAbbr: "OT",
  order: 1,                          // position within the track
  title: "The ear — anatomy to the clinic",
  subtitle: "…",
  level: ["core","sub-I"],
  status: "DRAFT — pending faculty review",
  facultyReviewer: "",
  curriculumAnchors: ["AAO-HNS …","Delphi …"],

  anatomy: {                         // → Anatomy tab
    notes: [ { title:"…", html:"…" } ],
    diagrams: [ /* same shape as the pilot's diagrams[] */ ]
  },
  clinical: {                        // → Clinical tab
    blocks: [ { title:"…", html:"…", table?:{head,rows} } ],
    redFlags: [ { t:"…" } ]
  },
  cases: [ /* unchanged shape */ ],
  cards: [ /* unchanged shape; SRS keys off module id */ ]
});
```

Add a small `content/tracks.js` (loaded first) defining track order, full name, and abbreviation, so Home can render tiles even before every module in a track exists:
```js
window.JEFFENT.tracks = [
  { id:"foundations", name:"Foundations", abbr:"FN" },
  { id:"otology", name:"Otology & Neurotology", abbr:"OT" },
  … (see ROADMAP.md §4 for the full list)
];
```

## Home aggregation
For each track tile, compute progress by summing `SRS.stats()` across all cards in that track's modules. Show `red flags` chip if any module in the track has a red-flag card; otherwise `core`. Tracks with no module yet render as a tile marked "coming soon" (disabled), so the map is visible from day one.

## Behavior & states
- Tab switching is client-side, no reload; remember the last tab per module in `localStorage` (wrapped in try/catch).
- Empty states: a module missing a section shows a quiet "content in progress" note in that tab, not a broken pane.
- Preserve `prefers-reduced-motion` (no animations when set) and visible `:focus-visible`.
- The footer disclaimer stays.

## Acceptance check
- `python3 -m http.server 8000` → Home shows all tracks from `tracks.js`; the migrated Foundations module opens with all four tabs populated; studying from the Cards tab still schedules via SRS; light/dark both legible; no horizontal scroll on mobile width.

## Guardrails (unchanged)
Content in `content/`, logic in `js/`. DRAFT until faculty sign-off. Author-drawn/open-licensed images only. No patient data. See `ROADMAP.md` §6.

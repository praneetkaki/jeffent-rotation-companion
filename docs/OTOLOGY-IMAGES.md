# Otology — real image upgrade (task for Claude Code)

The Otology module ships with accurate **author-drawn SVG** anatomy that works now. This task swaps in (or adds alongside) **real public-domain images** for a more impressive, realistic look. Wikimedia can't be reached from the Cowork chat environment, but **Claude Code on the Mac can** — and it can open each downloaded image to place the labels correctly.

## Licensing (state the source on every image)
- **Gray's Anatomy (1918 / 20th ed.) plates = public domain** (published pre-1928). Free to use, attribution courteous. Via Wikimedia Commons.
- Optional modern alternative: **"Anatomy of the Human Ear"** by Chittka L. & Brockmann — a clean, colored, labeled ear diagram — **CC BY 2.5** (requires attribution). Nice for the overview.

## Reliable download URL
For any Commons file, this redirects to the full image (no need to find the hashed URL):
```
https://commons.wikimedia.org/wiki/Special:FilePath/<FileName>
```
e.g. `https://commons.wikimedia.org/wiki/Special:FilePath/Gray904.png`. Save into `assets/img/ear/`.

## Images to source (verify each on its Commons page before using)
Browse **[Category:Gray's Anatomy plates of sensory system](https://commons.wikimedia.org/wiki/Category:Gray's_Anatomy_plates_of_sensory_system)** and pick the plate that best shows each structure. Candidates to check (confirm the caption matches before trusting the number):

| Need | Candidate Gray plates to verify | Structures to label |
|---|---|---|
| Ear overview / cross-section | a sensory-system ear plate, **or** the CC-BY "Anatomy of the Human Ear" diagram | auricle, EAC, tympanic membrane, ossicles, cochlea, semicircular canals, CN VIII, Eustachian tube |
| Tympanic membrane | `Gray904.png` and neighbors — verify it's the TM/eardrum view | pars tensa, pars flaccida, umbo, malleus handle, cone of light |
| Middle ear / ossicles | a tympanic-cavity plate | malleus, incus, stapes, oval window, Eustachian tube |
| Inner ear / labyrinth | `Gray920.png`, `Gray923.png`, `Gray928.png` — verify which shows the osseous labyrinth/cochlea | cochlea, vestibule, semicircular canals, oval/round window |

## What to do
1. Download the chosen images into `assets/img/ear/` with clear names (e.g. `ear-overview.png`, `tympanic-membrane.png`, `cochlea.png`).
2. For each, add a diagram to `content/otology.js` → `anatomy.diagrams` using the **image kind** from `docs/MEDIA-SPEC.md`:
   ```js
   { kind:"image", id:"ear-overview", title:"The ear in cross-section",
     src:"assets/img/ear/ear-overview.png",
     source:"Gray's Anatomy (1918), public domain — via Wikimedia Commons",
     labels:[ {id:"a",text:"Tympanic membrane", xPct:__, yPct:__}, … ] }
   ```
3. **Open each downloaded image and set `xPct`/`yPct`** so every label dot sits on the correct structure (0–100% of width/height).
4. Keep the author-drawn SVGs as a fallback, or remove them once the photos look good.
5. Verify in the browser (Anatomy tab), then commit.

## Guardrail
Every image must show its `source` line. Public-domain or properly-attributed CC only — no textbook/Google images. Confirm each plate actually depicts the intended structure before trusting a filename.

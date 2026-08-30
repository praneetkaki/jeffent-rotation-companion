# Media Spec — real images + CT stack viewer

Build instructions for Claude Code. Adds two capabilities to the app, then wires a working sample of each. Reuse existing CSS tokens; keep light/dark, accessibility, and the content-in-`content/` / logic-in-`js/` separation. No frameworks.

---

## Capability 1 — labeled real images (not just drawn SVG)

Today the label system (`diagrams`) only supports an author-drawn SVG `base`. Extend it so a diagram's base can instead be a **raster image** (PNG/JPG), with the same fade-on-demand labels layered on top.

**Content-model change** — a diagram may now be one of two kinds:

```js
// existing SVG kind still supported:
{ kind:"svg", id, title, note, viewBox, base:"<svg shapes>", labels:[{id,text,px,py,lx,ly}] }

// new image kind — labels use PERCENT coordinates so they scale with the image:
{
  kind:"image", id, title, note,
  src:"assets/img/ear/tympanic-membrane.jpg",
  source:"Gray's Anatomy (1918), public domain — via Wikimedia Commons",   // REQUIRED, shown under the image
  labels:[ { id:"l1", text:"Umbo", xPct:50, yPct:58 } ]      // xPct/yPct = 0–100 of image width/height
}
```

**Rendering:** wrap the image in a positioned container; render each label as an absolutely-positioned dot at `xPct%/yPct%` with the text in a small pill, hidden by default, toggled by the existing "reveal all" control and by clicking each dot (same UX as the SVG version). **Always render the `source` line** in small faint text beneath the image — attribution is mandatory.

---

## Capability 2 — the CT stack viewer

A PACS-style scroller: step through an ordered stack of slice images, with a per-slice label overlay you can toggle.

**New content type** (a module's `anatomy` may include `stacks`, and the Anatomy Atlas can hold standalone ones):

```js
{
  id:"neck-ct-normal",
  title:"Normal neck CT (axial)",
  note:"Scroll superior → inferior. Toggle labels to test yourself.",
  source:"SAMPLE placeholder slices — replace with a faculty-provided de-identified normal neck CT.",
  // list ALL slices in assets/ct/neck in filename order — there are 36:
  // slice-01.png, slice-02.png, … slice-36.png
  slices:[ "assets/ct/neck/slice-01.png", "assets/ct/neck/slice-02.png", /* …through… */ "assets/ct/neck/slice-36.png" ],
  // labels keyed by slice index (0-based); percent coords over the image.
  // These are SAMPLE labels on two mid slices; faculty verify/expand once the real CT is in.
  labels:{
    17:[ {text:"Airway (larynx/trachea)",xPct:50,yPct:46},
         {text:"Carotid a.",xPct:36,yPct:48}, {text:"Carotid a.",xPct:64,yPct:48},
         {text:"Sternocleidomastoid",xPct:16,yPct:52}, {text:"Sternocleidomastoid",xPct:84,yPct:52},
         {text:"Vertebral body",xPct:50,yPct:70}, {text:"Thyroid lobe",xPct:40,yPct:50}, {text:"Thyroid lobe",xPct:60,yPct:50} ],
    23:[ {text:"Airway (trachea)",xPct:50,yPct:47}, {text:"Vertebral body",xPct:50,yPct:70} ]
  }
}
```

**Viewer behavior:**
- A large slice image + a **range slider** beneath it; also respond to **mouse wheel** over the image and **↑/↓ arrow keys** to change slice.
- Show a slice counter ("Slice 6 / 12").
- A **"Show labels" toggle**: when on, render this slice's labels (percent-positioned dots + text) over the image; labels update as you scroll.
- **Preload/lazy-load** slices so scrolling is smooth (e.g., `new Image()` prefetch, or set `loading="lazy"`).
- Always render the `source` line beneath the viewer.
- Keyboard accessible (slider is a native input; label toggle is a button); respect `prefers-reduced-motion`.

**Where it appears:** add a **"Normal Neck CT"** entry to the **Anatomy Atlas** track so it's demoable now. The same stack type should also be usable inside any module's Anatomy tab later.

---

## Wire the samples
1. The 36 sample slices already exist at `assets/ct/neck/slice-01.png … slice-36.png`.
2. Create the sample stack (above) in the Anatomy Atlas so it renders immediately.
3. Leave a clear `source` line flagging the slices as SAMPLE placeholders to be swapped for a real de-identified CT (see `docs/MEDIA-GUIDE.md`).

## Acceptance check
`python3 -m http.server 8000` → open the Anatomy Atlas → "Normal Neck CT" scrolls via slider, wheel, and arrow keys; labels toggle and follow the slice; source line visible; no console errors; works in light and dark.

## Guardrails
Every image/stack shows its `source`. Only public-domain, open-licensed (with attribution), or faculty-provided media — see `docs/MEDIA-GUIDE.md`. No patient data in sample or committed files. Content in `content/`, logic in `js/`.

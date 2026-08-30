# Content authoring guide

How to add or edit content **without touching the app code**. If you can edit a text file, you can maintain this tool.

## The golden rule
Content lives in `content/`. Logic lives in `js/`. You only ever edit files in `content/`.

## Add a new module in 3 steps

**1. Copy the pilot file.**
```
content/ent-exam-clinic-complaints.js  →  content/<your-topic>.js
```

**2. Edit the data.** Change `id`, `title`, `track`, and fill in the four tab sections. The shape (see `docs/UI-SPEC.md` for the full rationale):

```js
window.JEFFENT.register({
  id: "airway-emergencies",                 // unique, kebab-case
  track: "laryngology",                      // must match an id in content/tracks.js
  trackName: "Laryngology, Voice & Airway",
  trackAbbr: "LA",
  order: 1,                                  // position within the track's module list
  title: "ENT Emergencies & Red Flags",
  subtitle: "One line describing the module.",
  version: "0.1.0-draft",
  level: ["core"],                           // "core" and/or "sub-I"
  status: "DRAFT — pending faculty review",
  facultyReviewer: "",                       // "A. Thal, MD — 2026-09-15" once signed off
  curriculumAnchors: ["AAO-HNS Core Curriculum: ...", "Delphi list: ..."],

  anatomy: {                                 // → Anatomy tab
    notes: [
      { title: "Section title", html: "<p>Prose, lists, whatever the tab needs.</p>" }
    ],
    diagrams: [
      { kind:"svg", id:"structure", title:"Structure — landmarks",
        note:"Instruction shown to the learner.",
        viewBox:"0 0 360 360",
        base:"<!-- SVG shapes for the anatomy, no labels -->",
        labels:[ { id:"l1", text:"Landmark name", px:180, py:100, lx:60, ly:90 } ] }
        // px,py = point on the anatomy; lx,ly = where the label text sits
    ],
    stacks: []                                 // CT/imaging scrollers — see docs/MEDIA-SPEC.md
  },

  clinical: {                                // → Clinical tab
    blocks: [
      { id:"a-table", title:"Section title",
        html:"<p>Optional prose.</p>",
        table:{ head:["Col A","Col B"], rows:[ ["a1","b1"], ["a2","b2"] ] } }  // table optional
    ],
    redFlags: [ { t:"<b>Short</b> scannable red-flag line." } ]
  },

  cases: [                                   // → Cases tab (unchanged shape)
    { id:"case-1",
      stem:"Fictional vignette as HTML with <b>key facts</b> bolded.",
      prompts:[ { q:"A question to reason through.", a:"The answer, revealed on click." } ],
      teaching:"One-line takeaway." }
  ],

  cards: [                                   // → Cards tab, SRS-scheduled (unchanged shape)
    { id:"epistaxis-first-aid",
      tags:["Nose","Emergency"],
      front:"Question shown first.",
      back:"Answer as HTML. Use <strong> and <ul><li>…</li></ul>.",
      redFlag:true,                          // optional: adds the ⚑ marker + red stripe
      reviewer:"" },                          // optional: per-card sign-off
  ]
});
```

Any section can be left empty (or omitted) — the tab just shows a quiet "content in progress" note instead of a broken pane.

**3. Register it in `index.html`.** Add one line with the other content scripts, *before* `js/srs.js` (and after `content/tracks.js`):
```html
<script src="content/<your-topic>.js"></script>
```
If your module's `track` isn't in `content/tracks.js` yet, add it there too — that's the only other file you need to touch, and it's what makes the subspecialty tile show up on Home even before any module exists for it. Reload. Done.

## Writing good recall cards
- One idea per card. If the answer has three parts, that's often three cards.
- The **front** should force retrieval ("How do you interpret a negative Rinne?"), not recognition.
- Put "don't-miss" content on cards with `redFlag:true`.
- Keep `back` tight — a sentence or a short list, not a paragraph.

## The rules that keep us safe and credible
- **DRAFT until vetted.** Leave `status` as DRAFT and `reviewer` empty until faculty sign off. Don't mark your own content reviewed.
- **Cite the anchor.** Every module needs its `curriculumAnchors`.
- **Images:** author-drawn SVG, faculty-provided, or clearly open-licensed (CC) only. Never paste in atlas/textbook figures. A real photo/illustration uses `kind:"image"` (percent-coordinate labels, `source` required) instead of `kind:"svg"` — see `docs/MEDIA-SPEC.md` and `docs/MEDIA-GUIDE.md` for the labeled-image and CT-stack-viewer shapes and how to source images legally.
- **No patient data.** Cases are fictional. No names, MRNs, dates, or real images/scans that aren't fully de-identified.

## Handy Claude Code prompts
From inside the repo (`claude` in your terminal):
- *"Draft 15 recall cards for a module on pediatric ENT following content-authoring-guide.md, all DRAFT, AAO-HNS anchor, red-flag flags where appropriate."*
- *"List every card across content/ whose `reviewer` is empty, grouped by module."*
- *"Add a labeled SVG of the neck nodal levels I–VI with fade-on-demand labels."*

Always route drafted clinical content to a faculty reviewer before it counts as final.

# CLAUDE.md — conventions for the JeffENT Rotation Companion

Read this first. It tells Claude Code how this project is built and the rules to keep it maintainable and safe.

## What this is
A dependency-free **static web app** for ENT rotation study (active recall + spaced repetition). No build step, no framework, no backend. Vanilla HTML/CSS/JS so any medical student can maintain it.

## Architecture — the one rule that matters
- **Content** = `content/*.js` (data only). Each module calls `window.JEFFENT.register({...})`.
- **Logic** = `js/*.js` (`srs.js` scheduler, `app.js` rendering). Framework-free.
- **Never put clinical content inside `js/`, and never put rendering logic inside `content/`.** This separation is what lets faculty and future students edit content without reading code.

## Content model (a module object)
```
{ id, title, subtitle, version, status, facultyReviewer, curriculumAnchors:[],
  cards:[ { id, tags:[], front, back /* HTML */, redFlag?, reviewer? } ],
  cases:[ { id, stem, prompts:[{q,a}], teaching } ],
  reference:[ { id, title, html?, table?:{head:[],rows:[[]]} } ],
  redFlags:[ { t /* HTML */ } ],
  diagrams:[ { id, title, note, viewBox, base /* SVG */, labels:[{id,text,px,py,lx,ly}] } ] }
```
`front`/`back`/`html`/`t` may contain trusted HTML (it's local content, rendered via innerHTML).

## Hard rules for content
1. **Every clinical item is DRAFT until a faculty reviewer signs off.** Set `status` and per-card `reviewer` — do not silently mark things reviewed.
2. **Cite the curriculum anchor** for each module (`curriculumAnchors`) — AAO-HNS Core Curriculum item and/or the department's Delphi priority list.
3. **Images must be author-drawn SVG, faculty-provided, or explicitly open-licensed (CC).** Never embed copyrighted figures or atlas screenshots. When in doubt, draw a schematic SVG like the tympanic-membrane diagram.
4. **No patient data, ever.** No real cases, names, MRNs, images of real patients. Cases are fictional teaching vignettes.
5. **Not a clinical decision tool** — keep the footer disclaimer intact.

## Code conventions
- Plain ES5-compatible JS (works everywhere, easy for students to read). No `import`, no bundler.
- Adding a module = new `content/<name>.js` + one `<script>` tag in `index.html` (before `js/srs.js`).
- Keep `srs.js` and `app.js` free of clinical content.
- Preserve keyboard accessibility (hotspots are focusable; `:focus-visible` styles exist) and `prefers-reduced-motion`.
- Themes are token-based in `:root` / `[data-theme]` — add colors as tokens, not literals.

## Good tasks to ask Claude Code for
- "Draft cards for a new module on <topic>, following the content model, all marked DRAFT with the AAO-HNS anchor." (Then route to faculty for review.)
- "Add a labeled SVG diagram of <structure> with fade-on-demand labels."
- "Wire in the pre/post-test flow that links to a Google Form and records only an anonymous session id."
- "Write a short script that lists every card whose `reviewer` field is still empty." (review tracker)

## Not this project's job
No accounts, analytics that identify users, ad code, or anything that stores personal data. Keep it boring, static, and legible.

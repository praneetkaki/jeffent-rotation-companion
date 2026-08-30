# JeffENT Rotation Companion

An open, active-recall study tool for the Otolaryngology clinical rotation — built by and for JeffENT medical students, vetted by faculty, and designed to be handed down to the classes behind you.

It is a **static web app**: no server, no database, no login. Content lives in plain files that faculty and future students can edit without touching code. It runs from any browser and hosts for free on GitHub Pages.

## What's in the pilot

The first module — **"The ENT Exam & Top Clinic Complaints"** — demonstrates the full format:

- **Active-recall cards** with a built-in **spaced-repetition** scheduler (Leitner boxes, saved per-browser).
- **Clinical cases** that make you reason before revealing the answer.
- A **reference tab** leading with the "don't-miss" **red flags**.
- An **image-label diagram** (tympanic membrane) with fade-on-demand landmarks.

All clinical content is a **DRAFT pending faculty review** — that review step is the point, not an afterthought (see `docs/faculty-onepager.md`).

## Run it

**Easiest:** double-click `index.html` — it opens in your browser and works offline.

**Recommended for development** (some browsers restrict features on `file://`):

```bash
# from the project folder
python3 -m http.server 8000
# then open http://localhost:8000
```

**Publish it (free):** push to a GitHub repo, then enable **Settings → Pages → deploy from branch (main, /root)**. You'll get a public URL to share on the rotation.

## Project layout

```
index.html                         app shell (loads content, then the engine)
assets/styles.css                  all styling; light + dark themes
js/srs.js                          spaced-repetition scheduler (no dependencies)
js/app.js                          view logic / rendering
content/registry.js                the seam modules register onto
content/ent-exam-clinic-complaints.js   the pilot module DATA (edit this, not the JS engine)
docs/                              faculty one-pager, authoring guide, Claude Code guide
CLAUDE.md                          conventions for developing with the Claude Code CLI
```

The rule that keeps this maintainable: **content lives in `content/`, logic lives in `js/`.** A faculty reviewer or a first-year never has to read `js/app.js` to fix a card.

## Adding a module

Copy `content/ent-exam-clinic-complaints.js`, rename it, edit the data, and add one `<script>` line in `index.html`. Full walkthrough in `docs/content-authoring-guide.md`.

## Measurement (added before pilot launch)

The pre/post knowledge test and satisfaction survey that turn this into a presentable study are **not yet wired in** — that's a deliberate next step to design with your faculty sponsor. See `docs/faculty-onepager.md` → "Instrumenting for scholarship."

## Ownership

To stay a *living* asset, this repo needs a **faculty sponsor** and a **named successor owner** each year. Record them at the top of this file when assigned:

- Faculty sponsor: _TBD_
- Student owner (current): Praneet C. Kaki
- Successor owner: _TBD_

## License

Content: CC BY-NC 4.0 (attribution, non-commercial) — suggested, confirm with the department. Code: MIT.

---
*Educational tool only. Not for clinical decision-making.*

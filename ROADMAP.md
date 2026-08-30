# Build Roadmap & Workflow — JeffENT Rotation Companion

How to build this out into a comprehensive, nicely-designed ENT study tool for medical students and sub-interns. This file is the shared brain for the project — you, the Cowork Claude (chat), and Claude Code (the CLI in this repo) all work from it. Tell Claude Code *"follow ROADMAP.md"* and it will.

---

## 1. Who does what

Think of it as a small team with clear lanes.

**You — the lead & domain owner.** Decide scope and order, own the medicine, run the local preview to look at changes, route drafted content to faculty, and hit commit/deploy. You never have to write code.

**Cowork Claude (the chat you're in now) — the architect & author.** Best at *what goes in the app and whether it's right*:
- Designs the curriculum and the topic map.
- Drafts medically-sound content for each module as a ready-to-drop content file (anatomy + clinical + cards + cases + diagram), all marked DRAFT with curriculum anchors.
- Designs the UI/UX (mockups, layout, visual direction).
- Writes faculty-facing docs and research/citation material.
- Reviews and QAs what Claude Code builds.
- It has your research context, web search, and memory of your goals.

**Claude Code (the CLI in the repo) — the engineer.** Best at *making the app do it*:
- Drops content files into the app and wires them into the navigation.
- Builds and upgrades UI features; runs and tests the app locally.
- Refactors, fixes bugs, manages Git/GitHub, and deploys to GitHub Pages.
- It lives *inside* the folder and edits/runs the real code fast.

**Faculty sponsor — the validator.** Vets each module before it counts as final.

**Supporting cast.** GitHub (version control + free hosting via Pages), Google Forms (pre/post-test + survey, added later), open-license or faculty-provided images.

> Rule of thumb: **design and author in the chat; implement, run, and ship in Claude Code.** Content is medicine — draft it where there's research and careful review (the chat), then let Claude Code integrate it.

---

## 2. The per-module loop (repeat for every topic)

This is the rhythm you'll run over and over. One module at a time.

1. **Author (chat).** Ask Cowork Claude: *"Draft the Otology module."* → you get a complete `content/otology.js` (anatomy + clinical + red flags + cases + recall cards + a labeled diagram), all DRAFT and anchored to the curriculum.
2. **Integrate (Claude Code).** In the repo, tell Claude Code:
   > "Add the file I'm pasting as `content/otology.js`, register it in `index.html`, make sure it appears in the topic navigation, then start the local server so I can see it."
3. **Preview (you).** Open `http://localhost:8000` and look at it.
4. **Vet (faculty).** Share it; collect edits. Then in Claude Code: *"Set the reviewer field on the otology cards to 'Dr. ___, reviewed <date>' and change the module status to reviewed."*
5. **Ship (Claude Code).** *"Commit these changes and push to GitHub."* → it's live on your Pages URL.

Then start the next module. Content grows topic by topic; the app never has to be rebuilt.

---

## 3. Phases

### Phase 1 — Architecture & a nicer UI *(do this first)*
Lock the topic map (Section 4) and upgrade the interface from a single-module app into a **topic browser**:
- A landing page of **subspecialty cards** (Otology, Rhinology, Head & Neck, …) showing progress.
- Each subspecialty opens to its **modules**; each module has tabs: **Anatomy · Clinical · Cases · Cards**.
- A dedicated **Anatomy Atlas** view for the labeled diagrams.
- Keep: spaced-repetition scheduling, red-flag styling, light/dark, offline-friendliness.

*How:* Cowork Claude designs the layout (and can mock it up), Claude Code implements it against the existing token-based CSS.

### Phase 2 — Content, topic by topic
Run the per-module loop across the subspecialties. Suggested order (starts on your strengths + highest yield):
**Otology → Rhinology → Head & Neck → Laryngology/Airway → Pediatric ENT → Sleep/OSA → Facial Plastics & Trauma**, with the **Anatomy Atlas** growing alongside each one.

### Phase 3 — Scholarship & handoff
- Wire in the **pre-test / post-test + satisfaction survey** (Google Forms; anonymous session id only).
- Recruit the **faculty sponsor** and a **named successor owner**.
- Deploy publicly and **pilot with a rotation cohort** → knowledge-gain + satisfaction data → abstract.

---

## 4. Curriculum map (the comprehensive topic backbone)

Organized by subspecialty. **Anatomy is woven into each** *and* collected in a dedicated Atlas. Tag each item for level: **[core]** = day-1 rotator essentials, **[sub-I]** = audition-level depth.

**0. Foundations** — the ENT history & exam *(pilot ✓)*; instruments; documentation; procedures overview.

**1. Otology & Neurotology**
- Anatomy: external/middle/inner ear, ossicles, tympanic membrane, temporal bone, **CN VII course**, cochlea/labyrinth.
- Clinical: otitis externa & media, cholesteatoma, TM perforation, **hearing loss (conductive vs SNHL)**, **sudden SNHL [red flag]**, tinnitus, **vertigo — BPPV / vestibular neuritis / Ménière's / vestibular schwannoma**, cerumen.

**2. Rhinology & Sinus**
- Anatomy: septum, turbinates & meatus, **ostiomeatal complex**, paranasal sinuses & drainage pathways.
- Clinical: acute & chronic rhinosinusitis, nasal polyps, allergic rhinitis, **epistaxis**, septal deviation, **sinusitis complications (orbital/intracranial) [red flag]**, unilateral disease [red flag].

**3. Laryngology, Voice & Airway**
- Anatomy: laryngeal cartilages, vocal folds, intrinsic muscles, **RLN & SLN**.
- Clinical: **hoarseness/dysphonia [red flag if >2–4 wks]**, vocal fold lesions & paralysis, **airway emergencies — stridor, epiglottitis, angioedema [red flag]**, dysphagia, tracheostomy basics.

**4. Head & Neck Oncology**
- Anatomy: neck triangles, **nodal levels I–VI**, deep cervical fascia & **deep neck spaces**, salivary glands (parotid + **CN VII**), thyroid/parathyroid.
- Clinical: **adult neck mass = cancer until proven otherwise [red flag]**, oral cavity/oropharynx (HPV), laryngeal/hypopharyngeal cancer, salivary tumors, thyroid nodules, **free-flap reconstruction basics** *(your research area — a showcase module)*.

**5. Pediatric ENT**
- Tonsils & adenoids / pediatric OSA, otitis media with effusion, **pediatric airway & stridor / laryngomalacia [red flag]**, congenital neck masses (branchial cleft, thyroglossal duct), nasal/aural **foreign bodies**, choanal atresia.

**6. Sleep Surgery & OSA** *(your niche — make it strong)*
- OSA pathophysiology, evaluation (polysomnography, **DISE**), CPAP & adherence, surgical options including **hypoglossal nerve stimulation**.

**7. Facial Plastics & Trauma**
- Anatomy: facial subunits, **facial nerve branches**.
- Clinical: **facial fractures (nasal, orbital blowout, mandible, Le Fort) [red flag]**, Bell's palsy vs central [red flag], skin cancer & reconstruction basics, epistaxis overlap.

**8. Emergencies & Red Flags** *(cross-cutting capstone)* — the don't-miss list pulled together: sudden SNHL, adult neck mass, hoarseness >2–4 wks, unilateral nasal disease, facial palsy patterns, airway red flags, sinusitis complications, deep neck infection.

**9. Anatomy Atlas** *(dedicated labeled-diagram track)* — tympanic membrane *(✓)*, temporal bone, **cranial nerves V / VII / VIII / IX / X / XII**, neck triangles & levels, deep neck spaces & fascial layers, larynx, paranasal sinuses & OMC, **skull base foramina**, parotid & facial nerve, thyroid. Each is an author-drawn SVG with fade-on-demand labels.

---

## 5. Copy-paste prompts for Claude Code

Keep these handy — paste into the `claude` prompt inside the repo.

- **Integrate a module:** *"Add the file I'm pasting as `content/<name>.js`, register its `<script>` in index.html before js/srs.js, and confirm it shows in the topic nav. Then run `python3 -m http.server 8000`."*
- **Build the topic-browser UI:** *"Following ROADMAP.md Phase 1, refactor the home view into a subspecialty-card landing page, and give each module Anatomy/Clinical/Cases/Cards tabs. Use the existing CSS tokens; keep light/dark and the SRS engine."*
- **Add an anatomy diagram:** *"Add a labeled SVG of the <structure> to the Anatomy Atlas, matching the tympanic-membrane fade-on-demand pattern in content/ent-exam-clinic-complaints.js."*
- **Track review status:** *"List every card across `content/` whose `reviewer` field is empty, grouped by module, as a checklist."*
- **Publish:** *"Initialize a git repo, push to a new GitHub repo, and enable GitHub Pages so I get a public URL. Walk me through anything you can't do for me."*

---

## 6. Guardrails (unchanged, always)
- Every clinical item is **DRAFT until a faculty reviewer signs off.** Don't mark your own content reviewed.
- **Cite the curriculum anchor** for each module (AAO-HNS Core Curriculum item and/or the Delphi priority list).
- **Images:** author-drawn SVG, faculty-provided, or clearly open-licensed (CC) only. Never paste in atlas/textbook figures.
- **No patient data, ever.** Cases are fictional teaching vignettes.
- **Content lives in `content/`, logic in `js/`.** Keep the seam clean so faculty and future students can contribute.
- Not a clinical decision tool — keep the footer disclaimer.

---
*Student lead: Praneet C. Kaki, JeffENT. Educational tool only; not for clinical decision-making.*

# Module Build Standard

The reusable framework for building every module. Perfected on **Foundations**, now stamped out to **Rhinology & Sinus**, **Laryngology, Voice & Airway**, and **Head & Neck Oncology**. A module is not "done" because it feels complete — it's done when it satisfies this standard.

## 1. The dual curriculum anchor
- **Scope = UKMLA Content Map (GMC).** The student/sub-I blueprint. Every card maps to a UKMLA **presentation** or **condition** (`content/ukmla.js`). Nothing enters that isn't on the map for this module; nothing on the map is left out.
- **Depth & practical skills = ENT UK undergraduate curriculum + Lloyd/Constable Delphi.** These set *how deep* for a student and add exam/procedure skills a bare list omits.
- **Tags = ACGME Milestones 2.0** (`content/frameworks.js`). Keeps the tool legible to US program directors.
- **Content = US-appropriate.** Management, drug choices, and guideline references follow **US standards** (AAO-HNSF clinical practice guidelines, NCCN, ATA, IDSA, etc. — see each card's `source`); flag any notable **UK vs US** difference in-line. Scope is UK; practice is US.

Every card therefore carries a **triple identity**: *UKMLA item · Milestone · student scope.*

## 2. The card schema (fixed for all modules)
```js
{ id, tags:[…],
  ukmla: "Hearing loss",            // or ["Painful ear","Otitis media"] — REQUIRED (scope)
  milestones: ["PC4","MK3"],        // ACGME tag(s) — REQUIRED
  scope: "core",                    // "core" | "sub-I" (Delphi depth); omit = core
  redFlag: true,                    // optional
  source: "AAO-HNS CPG …",          // REQUIRED on any management claim
  reviewer: "",                     // faculty sign-off; empty = DRAFT
  front:"…", back:"… (HTML)" }
```
Anatomy/Cases carry `ukmla` + `source` too. Images carry `source`.

## 3. The Coverage Matrix (how comprehensiveness is proven)
Each module owns a set of UKMLA items. Build a table — one row per item — and the module is complete only when **every row is satisfied**:

| For each UKMLA item | Requirement |
|---|---|
| Any presentation/condition | ≥ 1 recall card |
| Any **red-flag/emergency** item | + ≥ 1 case |
| Every row | a faculty `reviewer` sign-off |

No row unaddressed = comprehensive, by definition, against the national standard.

## 4. Section standards (what each tab must contain)
- **Anatomy:** the region overview + labeled diagram(s); student-level relationships only (no surgical detail).
- **Clinical:** an *approach-to* framework for each presentation (triage → differential → red flags) + a red-flags panel. Management at US student depth.
- **Cases:** one worked vignette per emergency/red-flag item; reasoning before the answer.
- **Cards:** one idea per card, red-flags flagged, plain language.

**Depth cap:** if a fact wouldn't be expected of a sub-I on an NBME shelf / OSCE, it belongs in the subspecialty track, not Foundations. Subspecialty tracks go one notch deeper than Foundations on the *same* UKMLA items (escalation ladders, staging basics, named eponymous patterns) — still at Delphi student scope, not resident/attending depth.

## 5. Content standards
One idea per card · red-flags first · active-recall phrasing on the front · a named `source` on every management claim · UK/US differences flagged · nothing without a UKMLA and Milestone tag.

## 6. Accuracy gate
Everything ships **DRAFT** until a faculty `reviewer` signs it. The coverage matrix doubles as the faculty review sheet. Sources are named so a reviewer verifies against a standard, not against opinion.

## 7. The build loop (identical every module)
1. **Pull** the module's UKMLA items → build its Coverage Matrix.
2. **Draft** (me) from the matrix — cards/cases/anatomy, US-content, fully tagged, DRAFT.
3. **Review** (you + faculty) against the matrix; set `reviewer`.
4. **Refine** (me) from feedback.
5. **Ship** (Claude Code commit/push).

---

## Foundations — UKMLA coverage matrix (STATUS: 100% covered)
Foundations owns the **cross-cutting** presentations + the emergencies. All 19 ENT presentations and 11 ENT conditions on the UKMLA content map now have ≥1 card (51 cards total across the module), every red-flag/emergency item has a worked case (10 cases), and every card/case carries a `ukmla`, `milestones`, and `source` tag. UK/US practice differences are flagged inline on 8 cards (otitis externa/media prescribing, sore throat scoring, hoarseness referral thresholds, epistaxis, OSA screening, neck-mass referral urgency, allergic rhinitis).

| UKMLA item | Type | Status |
|---|---|---|
| Hearing loss | Pres | ✓ covered |
| Painful ear | Pres | ✓ |
| Tinnitus | Pres | ✓ |
| Vertigo / Dizziness | Pres | ✓ |
| Nasal obstruction | Pres | ✓ |
| Epistaxis | Pres/Cond | ✓ (card + case) |
| Anosmia | Pres | ✓ |
| Facial/periorbital swelling | Pres | ✓ (orbital cellulitis case) |
| Sore throat | Pres | ✓ |
| Hoarseness & voice change | Pres | ✓ (card + case) |
| Swallowing problems | Pres | ✓ |
| Snoring | Pres | ✓ (OSA screen) |
| Stridor | Pres | ✓ |
| Neck lump | Pres | ✓ (card + case) |
| Epiglottitis | Cond | ✓ |
| BPPV / Ménière's | Cond | ✓ |
| Rhinosinusitis (+ complications) | Cond | ✓ |
| Tonsillitis (+ quinsy) | Cond | ✓ |
| Otitis externa / media | Cond | ✓ approach covered; depth → Otology |
| Acoustic neuroma | Cond | ✓ flagged; depth → Otology |
| OSA | Cond | ✓ screen covered; depth → Sleep (track not yet built) |
| Allergies | Pres | ✓ **filled** — allergic rhinitis card |
| Facial pain | Pres | ✓ **filled** — facial-pain differential card |
| Ear & nasal discharge | Pres | ✓ **filled** — unifying 'approach to discharge' card |
| Cough (ENT angle) | Pres | ✓ **filled** — post-nasal drip / LPR cough card |
| Infectious mononucleosis | Cond | ✓ **filled** — dedicated card |
| Facial weakness *(added to ukmla.js)* | Pres | ✓ — facial-palsy card + Bell's-vs-central case |

**Next step for Foundations:** faculty review pass (set `reviewer` per card) — the content build is complete.

---

## Rhinology & Sinus — coverage matrix (v0.1.0-draft)
Owns: Nasal obstruction, Epistaxis, Anosmia, Allergies, Facial pain, Ear and nasal discharge (nasal portion), Rhinosinusitis — at subspecialty depth beyond Foundations (chronic disease definitions, escalation ladders, red-flag masses, FESS complications). 19 cards, 5 cases (all red-flag items cased), 3 anatomy diagrams. `content/rhinology.js`.

## Laryngology, Voice & Airway — coverage matrix (v0.1.0-draft)
Owns: Hoarseness and voice change, Stridor, Swallowing problems, Sore throat/Cough (laryngeal angle), Epiglottitis, Tonsillitis (airway angle) — at subspecialty depth (vocal-fold pathology, pediatric-airway differential, laryngeal cancer staging basics, RLN course). 18 cards, 5 cases. `content/laryngology.js`.

## Head & Neck Oncology — coverage matrix (v0.1.0-draft)
Owns: Neck lump, Swallowing problems (oncologic), Facial/periorbital swelling (parotid), Infectious mononucleosis (differential cross-reference) — at subspecialty depth (unknown-primary workup, HPV-associated oropharyngeal cancer, thyroid nodule workup, salivary gland tumours, TNM/MDT basics). 20 cards, 5 cases. `content/head-neck.js`.

**All three new tracks are v0.1.0-draft** — comparable first-pass depth to Otology, not yet at Foundations' exhaustive coverage. Next step for each: faculty review, then a second pass adding any additional UKMLA-adjacent depth faculty flag as missing.

---

## Pediatric ENT — coverage matrix (v0.1.0-draft)
Owns: Painful ear, Hearing loss, Stridor, Neck lump, Nasal obstruction, Snoring, Facial/periorbital swelling — at pediatric-specific depth (airway anatomy differences, congenital anomalies, age-specific management thresholds/timelines like the 1-3-6 hearing rule). 20 cards, 5 cases, 3 anatomy diagrams. `content/pediatric.js`.

## Sleep Surgery & OSA — coverage matrix (v0.1.0-draft)
Owns: Snoring, Obstructive sleep apnoea — at adult subspecialty depth (STOP-BANG, AHI/Epworth scoring, DISE, the CPAP-to-surgery ladder including UPPP/MMA/hypoglossal nerve stimulation). Deliberately adult-focused; pediatric OSA depth lives in Pediatric ENT. 20 cards, 5 cases, 3 anatomy diagrams. `content/sleep.js`.

## Facial Plastics & Trauma — coverage matrix (v0.1.0-draft)
Owns: Facial/periorbital swelling, Epistaxis, Facial weakness — at trauma-subspecialty depth (Le Fort classification, facial nerve injury timing, orbital blow-out fractures, the reconstructive ladder). 19 cards, 5 cases, 3 anatomy diagrams. `content/facial-plastics.js`.

## Emergencies & Red Flags — coverage matrix (v0.1.0-draft)
A deliberate cross-cutting synthesis, not a new UKMLA-item owner — re-frames the red-flag/emergency rows already anchored in Foundations and every subspecialty track (epiglottitis, deep neck infections, orbital/intracranial complications, SSNHL, post-op hemorrhage, foreign bodies) as one rapid-triage recall deck for on-call and shelf-exam preparation. 17 cards, 5 cases, 2 anatomy diagrams. `content/emergencies.js`.

## Anatomy Atlas — expanded (v0.2.0-draft)
Deliberately anatomy-only — no clinical content or cases. Added four integrative anatomy notes (temporal bone parts, paranasal sinus set, neck fascial layers/triangles, head & neck cranial nerves), three labeled SVG diagrams, and 10 pure-anatomy recall cards cross-tagged to the UKMLA presentation each structure underlies (for search/coverage purposes only). The existing sample CT stack viewer is unchanged. `content/anatomy-atlas.js`.

**All five are v0.1.0–0.2.0-draft** — first-pass depth, pending faculty review. Validated: `node --check` passes on every content file; a structural scan confirms 0 duplicate ids and 0 missing `ukmla`/`source`/`milestones`/front-back fields across all five new files (215 cards / 46 cases total across all 10 modules).

**Known pre-existing gap found during this pass (not part of this build):** `content/otology.js` has 5 duplicate card ids (`weber`, `rinne`, `sudden-snhl`, `central-vertigo`, `facial-palsy`) and ~10 early anatomy cards missing `ukmla`/`source`/`milestones` tags. Flagged here for a future cleanup pass — out of scope for this session's five-track build.

To replicate for a future module, pull *its* UKMLA rows and run the identical loop.

---

## Cross-module features

**Search (topbar).** The topbar search is fully functional — it indexes every module title/subtitle, anatomy note, diagram, clinical block, case, and card front/back across all 10 modules, grouped by type in a live dropdown. Selecting a topic/anatomy/clinical/case result jumps to that module and tab and scrolls to (and briefly highlights) the matching panel; selecting a card result jumps straight into a single-card study session on the Cards tab.

**All Due Cards (cross-module study).** A "Study all due cards" panel on the Home screen (and its own screen reachable from there) aggregates due — or all — cards from every module into one queue, so a student doesn't need to open each subspecialty individually. Deliberately kept to two options only (Study due / Review all), matching the per-module Cards tab pattern. Per-card spaced-repetition state still writes to each card's *own* module bucket, so progress stays consistent with the per-module dashboards.

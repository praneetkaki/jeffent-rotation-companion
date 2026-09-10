# Curriculum Alignment

How this tool anchors to established, published curricula instead of a self-assembled "high-yield" list. This is both a teaching-quality decision and an application/scholarship one: it lets you tell a faculty sponsor that *scope was defined by national consensus, not by a student's judgment*, and it makes the tool legible to the people who train and rank you.

## The frameworks, and the job each one does
They're **complementary, not interchangeable** — layer them, don't substitute one for another.

| Framework | Role in this tool | Why it matters |
|---|---|---|
| **ACGME Otolaryngology–HNS Milestones 2.0** (2021) | **Per-item tags.** Every card declares which subcompetency it serves (e.g. `PC4 Otologic Disease`, `MK1 Anatomy`). | The single most authoritative US framework; it's the exact language program directors think in. |
| **ACGME 6 core competencies** | **Coverage check.** Ensure the tool isn't only Medical Knowledge + Patient Care — deliberately include Communication (ICS), Professionalism, PBLI, and SBP items. | Reviews (Faucett et al.) show ENT curricula neglect communication/professionalism. Covering them distinguishes this from every fact-only Anki deck. |
| **AAO-HNS Otolaryngology Core Curriculum (OCC)** | **Topic sequencing + outcome comparator.** | A formalized, validated didactic skeleton (Epperson et al. showed large knowledge gains). Gives you a national comparator when you write up results. |
| **UK undergraduate Delphi** (Lloyd; Constable; Steven) | **Scope & depth for a student/sub-I audience.** | Keeps content at the right level. Resident-level frameworks organize; the Delphi work decides how deep to go for a sub-I. |

> Rule: **Delphi sets *how much* (student scope); Milestones 2.0 + the 6 competencies set *how it's tagged*; the OCC sets *what order* and is your outcome comparator.** Layering is a strength; pitching Foundations at resident depth would over-shoot a sub-I audience.

## ACGME Otolaryngology Milestones 2.0 — the subcompetencies (tag values)
These are the exact codes cards use (defined in `content/frameworks.js`).

**Patient Care:** PC1 Airway Emergency & Management · PC2 Facial Trauma · PC3 Head & Neck Neoplasm · PC4 Otologic Disease · PC5 Rhinologic Disease · PC6 Laryngologic Disease · PC7 Pediatric Otolaryngology · PC8 Facial Plastic & Reconstructive Surgery · PC9 Sleep
**Medical Knowledge:** MK1 Anatomy · MK2 Allergy · MK3 Pathophysiology
**ICS:** ICS1 Patient/Family Communication · ICS2 Interprofessional/Team · ICS3 Within Health-Care Systems
**Professionalism:** Prof1 Ethics/Behavior · Prof2 Accountability · Prof3 Well-being
**PBLI:** PBLI1 Evidence-Based Practice · PBLI2 Reflective Practice
**SBP:** SBP1 Patient Safety & QI · SBP2 System Navigation · SBP3 Physician Role in Systems

*Source: ACGME Otolaryngology–Head and Neck Surgery Milestones (2021).*

## How the tracks map to Milestones (this is your information architecture)
| Track | Primary Milestone(s) |
|---|---|
| Otology & Neurotology | PC4, MK1 |
| Rhinology & Sinus | PC5, MK2 |
| Head & Neck Oncology | PC3, MK1 |
| Laryngology, Voice & Airway | PC6, PC1 |
| Pediatric ENT | PC7 |
| Sleep Surgery & OSA | PC9 |
| Facial Plastics & Trauma | PC8, PC2 |
| Emergencies & Red Flags | PC1 (cross-cutting) |
| Anatomy Atlas | MK1 |

## The schema addition (already in the code)
Each card carries a `milestones` array; the competency is derived from the code prefix, and the display comes from `content/frameworks.js`:
```js
{ id:"sudden-snhl", tags:["Ear","Emergency"], milestones:["PC4"], redFlag:true,
  front:"…", back:"…" }
{ id:"spikes", tags:["Communication","H&N"], milestones:["ICS1","PC3"], scope:"sub-I",
  front:"How do you break bad news…", back:"SPIKES…" }
```
- `milestones:[…]` — one or more Milestone subcompetency codes.
- `scope:"core" | "sub-I"` — student-level depth (Delphi); omit = core.

## "How much / what to include in each spot" — the Foundations blueprint
Foundations is the model. It now spans **all six competencies**, at student scope:
- **Exam & anatomy (MK1, PC3–6):** otoscopy, tuning forks, anterior rhinoscopy, oropharyngeal/CN screen, neck levels, when to scope, audiogram basics.
- **Cardinal complaints & red flags (PC1, PC3–6):** hearing loss, otalgia (referred vs primary), nasal obstruction/epistaxis, sore throat/airway, hoarseness, neck mass, facial palsy.
- **The differentiators most decks skip:** breaking bad news (ICS1), informed consent (Prof1), SBAR consults (ICS2), evidence appraisal (PBLI1), the surgical time-out/patient safety (SBP1).

Each subspecialty track then goes *deep* on its own PC milestone, at the Delphi student depth, in the OCC's sequence.

## Why this pays off for the application
- **Replaces your judgment with consensus** — a far stronger defense to a faculty sponsor.
- **Makes it measurable/publishable** — anchor pre/post outcomes to a defined curriculum (as Epperson/Salmon did).
- **Signals fluency in competency-based education / EPAs** — a sophistication most applicants don't show.

## Faculty ask
When you meet your sponsor: confirm the **OCC topic sequence**, agree the **Delphi scope** for each track, and have them verify the **Milestone tag** on each card. That single review makes the alignment real.

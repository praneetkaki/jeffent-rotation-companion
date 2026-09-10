# ENT Companion — Figure Tracker & Sourcing Manifest

> **Purpose.** A single running map of every anatomy topic in the app, what figure
> it currently has, and what open-access figure it *should* have. Hand this file
> to an AI (Claude or Gemini) to guide figure sourcing — see
> [§ How to use this with an AI](#how-to-use-this-with-an-ai) at the bottom.
>
> **Maintainer note.** Keep this in sync with `content/*.js`. The topic/diagram
> lists below were generated directly from the live content on the date below.

**Last synced:** 2026-09-03 · **Modules:** 9 · **Anatomy topics:** 45+ · **Real figures sourced:** 11 (4 wired, 7 staged)

---

## Status legend

| Tag | Meaning |
|-----|---------|
| 🔌 **WIRED** | Real open-access figure, in `assets/`, AND referenced in `content/*.js` (live in app). |
| ✅ **SOURCED** | Real figure downloaded to `assets/` with attribution captured, but **not yet wired** into content. |
| ✏️ **SCHEMATIC** | Currently an author-drawn SVG schematic. Works, but not a real anatomical figure. |
| ⛳ **NEEDED** | No real figure yet — good target for sourcing. |
| ⭐ **PRIORITY** | High-yield topic where a real labeled figure adds the most value. |

---

## Licensing rules for this app

The app is a **free, non-commercial educational tool**. Acceptable figure sources, in order of preference:

| License | Use? | Requirement / caveat |
|---------|------|----------------------|
| **Public Domain** (CC0, US-Gov, pre-1929 e.g. Gray's 1918) | ✅ best | No restriction. Attribution still shown as courtesy. |
| **CC BY** (2.5 / 3.0 / 4.0 — OpenStax, Servier, some Wikimedia) | ✅ yes | Must show credit + license link in the figure's `source:` line. |
| **CC BY-SA** (Wikimedia, many derivatives) | ✅ yes | Must show credit + license link. If you *modify* the image, the modified image must stay BY-SA (embedding as-is is fine). |
| **CC BY-NC** (Open Access Atlas of Otolaryngology) | ⚠️ conditional | OK **only** while the app stays non-commercial. Remove before any monetization. |
| **All-rights-reserved** (Pasha, modern Gray's, journal figures) | ❌ never | Copyrighted. Use only as a *reference* to draw original SVGs or to write labels — never embed. |

**Every embedded figure must carry attribution in its `source:` field** (the image-diagram
renderer already prints this). Format:
`Source: <Title>, <Author/Org> — <License> (<link>)`.

---

## Figure asset registry (real figures already in the repo)

| File | Source figure | License | Maps to topic | State |
|------|---------------|---------|---------------|-------|
| `assets/img/ear/ear-overview.png` | Gray's Anatomy 1918 — ear cross-section | Public Domain | Otology › Three compartments | 🔌 WIRED |
| `assets/img/ear/tympanic-membrane.png` | Gray's Anatomy 1918 — TM | Public Domain | Otology › TM landmarks | 🔌 WIRED |
| `assets/img/ear/middle-ear-ossicles.png` | Gray's Anatomy 1918 — TM from within | Public Domain | Otology › middle ear | 🔌 WIRED |
| `assets/img/ear/inner-ear-labyrinth.png` | Gray's Anatomy 1918 — osseous labyrinth | Public Domain | Otology › inner ear | 🔌 WIRED |
| `assets/img/laryngology/larynx-cartilage-framework.png` | OpenStax A&P 2e, Fig 23.6 "The Larynx" | CC BY 4.0 | Laryngology › cartilage framework | 🔌 WIRED |
| `assets/img/laryngology/larynx-coronal-gray954.png` | Gray's Anatomy 1918, Plate 954 — coronal larynx | Public Domain | Laryngology › subsites / vocal fold layers | 🔌 WIRED |
| `assets/img/rhinology/paranasal-sinuses-numbered.svg` | Wikimedia — paranasal sinuses (numbered) | CC BY-SA 4.0 | Rhinology › paranasal sinuses | 🔌 WIRED |
| `assets/img/rhinology/midsagittal-head-neck.png` | NCI SEER / Wikimedia — Illu01 head & neck | Public Domain (US-Gov) | Rhinology › lateral nasal wall (sagittal) | 🔌 WIRED |
| `assets/img/head-neck/neck-triangles-wikimedia.svg` | Wikimedia — labeled triangles of the neck | CC BY-SA 4.0 | Head&Neck / Atlas › triangles | 🔌 WIRED |
| `assets/img/head-neck/cervical-lymph-glands-gray602.png` | Gray's Anatomy 1918, Plate 602 — cervical lymph glands | Public Domain | Head&Neck › lymphatics (⚠ not Robbins levels) | 🔌 WIRED |
| `assets/img/anatomy-atlas/cranial-nerves-inferior-view.svg` | Wikimedia — cranial nerves, inferior brain view | CC BY-SA 3.0 | Atlas › cranial nerves | 🔌 WIRED |

---

## Per-module figure map

Each table lists every **anatomy topic** and its current **diagram(s)** as they exist in `content/*.js`,
with the figure status and a suggested open-access target where a real figure would help.

### 1. Foundations — ENT Exam & Clinic (`ent-exam`)

| Anatomy topic | Current diagram | Status | Target open-access figure | License |
|---|---|---|---|---|
| The ENT regions at a glance | "…regions at a glance (schematic)" | ✏️ SCHEMATIC | keep schematic (overview graphic) | — |
| The cranial nerves of ENT | "skull base foramina & CNs (schematic)" | ✏️ SCHEMATIC → ⛳ | `cranial-nerves-inferior-view.svg` (already sourced) | CC BY-SA 3.0 |
| Nose & paranasal sinuses: essentials | "Paranasal sinuses: coronal (schematic)" | ⛳ NEEDED | `paranasal-sinuses-numbered.svg` (sourced) | CC BY-SA 4.0 |
| **Larynx: essentials** ⭐ | "Larynx: coronal (schematic)" | ⛳ NEEDED | `larynx-cartilage-framework.png` + `larynx-coronal-gray954.png` (sourced) | CC BY 4.0 / PD |
| **Neck: triangles, levels & glands** ⭐ | "Neck nodal levels I-VI (schematic)" | ⛳ NEEDED | `neck-triangles-wikimedia.svg` (sourced) + **colored Robbins levels fig (NEEDED)** | CC BY-SA / see gap |
| Tympanic membrane landmarks | "Right TM: landmarks" (svg) | ✏️ SCHEMATIC | `assets/img/ear/tympanic-membrane.png` (reuse) | PD |

### 2. Otology & Neurotology (`otology-ear`)

| Anatomy topic | Current diagram | Status | Target open-access figure | License |
|---|---|---|---|---|
| Three compartments, one organ | ear-overview.png + 3 more | 🔌 WIRED | — (done) | PD |
| The clinically dangerous relationships | "middle ear & mastoid danger zone (schematic)" | ✏️ SCHEMATIC | Servier middle-ear, or keep schematic | CC BY 4.0 |
| *(inner ear detail)* | inner-ear-labyrinth.png | 🔌 WIRED | Servier inner ear (optional upgrade, color) | CC BY 4.0 |

### 3. Rhinology & Sinus (`rhinology-sinus`)

| Anatomy topic | Current diagram | Status | Target open-access figure | License |
|---|---|---|---|---|
| Lateral nasal wall & OMC | "Lateral nasal wall (sagittal schematic)" | ⛳ NEEDED | `midsagittal-head-neck.png` (sourced) | PD |
| Paranasal sinuses: drainage & danger zones | "OMC coronal (schematic)" | ⛳ NEEDED | `paranasal-sinuses-numbered.svg` (sourced) | CC BY-SA 4.0 |
| Blood supply / epistaxis (Little's area) | "Little's area (schematic)" | ✏️ SCHEMATIC | keep schematic (Kiesselbach concept) or Servier | — / CC BY |
| The nasal septum | "Nasal septum (schematic)" | ⛳ NEEDED | Gray's 1918 nasal septum plate (PD) | PD |
| FESS variants (concha bullosa, Haller, Onodi) | "FESS variants (schematic)" | ✏️ SCHEMATIC | keep schematic (concept) or CT panel | — |

### 4. Laryngology, Voice & Airway (`laryngology-voice-airway`) ⭐

| Anatomy topic | Current diagram | Status | Target open-access figure | License |
|---|---|---|---|---|
| The laryngeal cartilage framework | "Laryngeal cartilage framework (schematic)" | ⛳ NEEDED | `larynx-cartilage-framework.png` (sourced) | CC BY 4.0 |
| Three subsites: supra/glottis/subglottis | "Supraglottis·glottis·subglottis (coronal)" | ⛳ NEEDED | `larynx-coronal-gray954.png` (sourced) | PD |
| Vocal fold layers | "Vocal fold layers (schematic)" | ✏️ SCHEMATIC | Servier vocal fold / histology cross-section | CC BY 4.0 |
| Laryngeal nerve supply (RLN course) | "RLN course (schematic)" | ✏️ SCHEMATIC | keep schematic (RLN loop is best as diagram) | — |

### 5. Head & Neck Oncology (`head-neck-oncology`) ⭐

| Anatomy topic | Current diagram | Status | Target open-access figure | License |
|---|---|---|---|---|
| **Neck levels I-VII, in full** ⭐ | "Neck nodal levels I-VII (extended schematic)" | ⛳ **PRIORITY GAP** | **Colored Robbins levels figure (the pasted IIa/IIb, Va/Vb image)** — confirm exact Wikimedia source/license | likely CC BY-SA |
| The salivary glands | "3 major salivary glands & ducts (schematic)" | ✏️ SCHEMATIC | Gray's 1918 salivary plate (PD) or Servier | PD / CC BY |
| Thyroid & parathyroid anatomy | "Thyroid/parathyroid + RLN (schematic)" | ✏️ SCHEMATIC | OpenStax thyroid figure | CC BY 4.0 |
| Oral cavity vs oropharynx | "Oral cavity vs oropharynx (sagittal)" | ✏️ SCHEMATIC | `midsagittal-head-neck.png` (reuse) | PD |
| *(parotid & facial nerve)* | "Parotid & facial nerve (schematic)" | ✏️ SCHEMATIC | keep schematic (relationship diagram) | — |
| *(lymphatic drainage)* | — | 🔌 WIRED | `cervical-lymph-glands-gray602.png` | PD |

### 6. Pediatric ENT (`pediatric-ent`)

| Anatomy topic | Current diagram | Status | Target open-access figure | License |
|---|---|---|---|---|
| Pediatric vs adult airway | "Pediatric vs adult airway (schematic)" | ✏️ SCHEMATIC | keep schematic (comparison diagram) | — |
| Eustachian tube in children | "Peds vs adult ET angle (schematic)" | ✏️ SCHEMATIC | keep schematic (angle comparison) | — |
| Branchial apparatus embryology | "2nd branchial cleft tract (schematic)" | ✏️ SCHEMATIC | keep schematic or embryology figure (CC BY) | — / CC BY |
| Waldeyer's ring | "Waldeyer's ring (schematic)" | ✏️ SCHEMATIC | keep schematic (ring concept) | — |

### 7. Sleep Surgery & OSA (`sleep-osa`)

| Anatomy topic | Current diagram | Status | Target open-access figure | License |
|---|---|---|---|---|
| Sites of upper airway obstruction | "Levels of obstruction (schematic)" | ✏️ SCHEMATIC | keep schematic (level map) | — |
| Friedman tongue position | "Friedman tongue position (I-IV)" | ✏️ SCHEMATIC | keep schematic (staging figure) | — |
| Hypoglossal nerve & tongue protrusion | "hypoglossal/genioglossus (schematic)" | ✏️ SCHEMATIC | keep schematic or Servier tongue | — / CC BY |
| Why CPAP works | "pneumatic splinting (schematic)" | ✏️ SCHEMATIC | keep schematic (mechanism) | — |

### 8. Facial Plastics & Trauma (`facial-plastics-trauma`)

| Anatomy topic | Current diagram | Status | Target open-access figure | License |
|---|---|---|---|---|
| The facial buttresses | "Facial buttresses (schematic)" | ✏️ SCHEMATIC | Gray's 1918 skull (PD) overlay, or keep schematic | PD / — |
| Parotid, facial nerve & Stensen's duct | "Facial nerve through parotid (schematic)" | ✏️ SCHEMATIC | keep schematic (branch pattern) | — |
| Frontal branch & Pitanguy's line | "Pitanguy's line (schematic)" | ✏️ SCHEMATIC | keep schematic (surface landmark) | — |
| Orbital floor / inferior rectus | "Orbital floor blow-out (schematic)" | ✏️ SCHEMATIC | Gray's 1918 orbit (PD) or CT, or keep schematic | PD / — |

### 9. Emergencies & Red Flags (`emergencies-red-flags`)

| Anatomy topic | Current diagram | Status | Target open-access figure | License |
|---|---|---|---|---|
| Deep neck space spread | "Deep neck space spread (schematic)" | ✏️ SCHEMATIC | keep schematic (fascial planes) | — |
| Impending airway obstruction | "signs of obstruction (schematic)" | ✏️ SCHEMATIC | keep schematic | — |
| Zones I/II/III of the neck | "penetrating trauma zones (schematic)" | ✏️ SCHEMATIC | keep schematic (surgical zones) | — |

### Anatomy Atlas (`anatomy-atlas`) — cross-cutting reference

| Anatomy topic | Current diagram | Status | Target open-access figure | License |
|---|---|---|---|---|
| Temporal bone in four parts | schematic | ✏️ SCHEMATIC | Gray's 1918 temporal bone (PD) | PD |
| Paranasal sinuses as a set | schematic | ⛳ NEEDED | `paranasal-sinuses-numbered.svg` (reuse) | CC BY-SA 4.0 |
| Neck as fascial layers & triangles | schematic | ⛳ NEEDED | `neck-triangles-wikimedia.svg` (sourced) | CC BY-SA 4.0 |
| Cranial nerves with a H&N home | schematic | ⛳ NEEDED | `cranial-nerves-inferior-view.svg` (sourced) | CC BY-SA 3.0 |
| Facial nerve intratemporal segments | schematic | ✏️ SCHEMATIC | keep schematic (segment map) | — |
| Branchial arch/pouch/cleft embryology | schematic | ✏️ SCHEMATIC | keep schematic or CC BY embryology fig | — / CC BY |
| Skull base foramina | schematic | ✏️ SCHEMATIC | Gray's 1918 skull base (PD) | PD |

---

## Priority sourcing queue (what to pull next)

1. ⭐ **Colored cervical node levels (Robbins I–VII)** — the single most valuable missing figure. The engraving already sourced (`gray602`) shows drainage, not levels. Find the colored levels diagram (e.g. the pasted IIa/IIb / Va/Vb image) on Wikimedia Commons; **record its exact file page + license** before embedding.
2. **Servier Medical Art (CC BY 4.0)** color figures to upgrade schematics: inner ear, vocal fold layers, thyroid, salivary glands, tongue/hypoglossal. Servier is clean, modern, and reliably CC BY 4.0.
3. **OpenStax A&P 2e (CC BY 4.0)** for thyroid/parathyroid and nasal cavity — matches the larynx figure already pulled.
4. **Gray's 1918 (PD)** for nasal septum, salivary plate, skull base foramina, temporal bone — zero license risk.

---

## How to use this with an AI

Paste this file (or the relevant module table) to Claude/Gemini with an instruction like:

> "Using the Figure Tracker below, pull open-access figures for every row marked
> ⛳ NEEDED or ⭐ PRIORITY in Module X. For each figure give me: (1) exact source
> URL + file page, (2) license, (3) a ready-to-use `source:` attribution string,
> (4) the suggested `assets/img/<module>/<filename>`. Do not use any
> all-rights-reserved source (Pasha, modern Gray's, journals). Prefer PD > CC BY >
> CC BY-SA; flag any CC BY-NC. Confirm each license on the source page."

**Per-figure record format** (append confirmed figures to the asset registry table above):

```
- topic: <module › topic>
  file: assets/img/<module>/<name>.<ext>
  source_url: <direct file/page URL>
  title: <figure title>
  author: <author/org>
  license: <PD | CC BY 4.0 | CC BY-SA 4.0 | ...>
  attribution: "Source: <title>, <author> — <license> (<link>)"
  status: SOURCED   # → WIRED once referenced in content/*.js
```

**Wiring reminder (for Claude):** a real figure becomes live by adding an
`anatomy.diagrams[]` entry with `kind:"image"`, `src`, `source`, and
percent-positioned `labels[]` (see `content/otology.js` for the pattern), or by
replacing a schematic diagram's `kind:"svg"` block with the image equivalent.

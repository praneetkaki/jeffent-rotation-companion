# Figures Needed (Citations, Not Images)

An earlier version of this document assumed the app's figures were still placeholder images waiting to be sourced. That assumption was wrong. The real images are already deployed under `assets/img/figures/` (and a few module-specific folders like `assets/img/facial-plastics/`), and they were verified byte-identical against a staging pool. Nothing here is about finding or replacing images anymore.

The actual gap is smaller and purely textual: a number of `<figure>` tags in `content/*.js` still carry the literal placeholder string `data-credit="Add figure citation"` (or single-quoted) instead of a real citation. The image is fine and already showing in the app; it just doesn't have an attribution line yet. Two non-figure `source:` fields have the same placeholder text.

One more note on display: citations are no longer shown in an always-visible list at the bottom of a page. They now appear only when a student clicks or taps a figure to open it in the lightbox viewer, as small italic text under the image. So there's nothing to build here either, just the citation text itself.

AI-generated figures (for example anything with "gemini" in the filename) are fine as-is per the project owner; this checklist does not flag them as a problem.

**Current count: 149 placeholder occurrences across `content/*.js`, covering 69 distinct image files, plus 2 `source:` field placeholders.**

## Otology

| Image filename | What it should show | Real citation |
|---|---|---|
| `ear_anatomy_physiology_overview.png` | Overview of the ear's three compartments (external, middle, inner) and how CN VIII reads out. | |
| `middle_ear_dangerous_relationships.png` | Middle-ear/mastoid danger zone: facial nerve, tensor tympani/stapedius, chorda tympani, referred otalgia via CN V/VII/IX/X. | |
| `hearing_loss_ear.png` | Conductive vs sensorineural hearing loss, localized by lesion site along the auditory pathway. | |
| `otoscopy-comparison-gemini.png` | Side-by-side otoscopic comparison of otitis externa, AOM, cholesteatoma, and necrotizing otitis externa. | |
| `tympanograms.png` | Tympanogram types A, B, C and the ear conditions each indicates. | |
| `cholesteatoma_TM_perforation.png` | Cholesteatoma pathophysiology (retraction pocket, keratin accumulation, bone erosion). | |
| `vestibular_schwannoma_MRI.png` | Vestibular schwannoma presentation, MRI IAC workup, management ladder. | |
| `necrotizing_otitis_externa.png` | Necrotizing otitis externa pathogen, cranial-nerve progression, treatment. | |
| `tympanic_membrane_landmarks.png` | Naming TM landmarks (cone of light, umbo, manubrium, pars tensa/flaccida). | |
| `ossicles_joints.png` | Ossicular chain (malleus, incus, stapes) and its mechanical connection from TM to oval window. | |
| `facial_nerve_ear_otology.png` | Facial nerve course through the temporal bone and vulnerability to otologic disease. | |
| `inner_ear_anatomy.png` | Cochlea (hearing) vs vestibule + semicircular canals (balance), both read by CN VIII. | |
| `audiogram_interpretation.png` | Rinne tuning-fork test (AC vs BC) alongside Weber/Rinne comparison. | |
| `cholesteatoma_ear.png` | Congenital cholesteatoma: white mass behind an intact, normal-looking TM in a child. | |

## Rhinology

| Image filename | What it should show | Real citation |
|---|---|---|
| `osteomeatal_complex.png` | Middle meatus/uncinate process/ethmoid bulla forming the ostiomeatal complex. | |
| `paranasal_sinus_drainage_danger_zones.png` | Drainage pathways of the four paranasal sinuses and adjacent danger zones (orbit, skull base, cavernous sinus). | |
| `kiesselbach_plexus.png` | Little's area/Kiesselbach's plexus and anterior vs posterior epistaxis sources. | |
| `nasal-septum-openstax.png` | **Already fixed this session.** Septal skeleton anatomy; credit now reads "OpenStax, Anatomy and Physiology 2e. CC BY 4.0." |
| `FESS_anatomy_variants_sinus_CT.png` | Pneumatization variants relevant to FESS: concha bullosa, Haller cells, Onodi cells. | |
| `chronic_rhinosinusitis.png` | CRS definition and CRSsNP/CRSwNP/AERD subtypes with first-line management. | |
| `ARIA_allergic_rhinitis_management.png` | ARIA's duration/severity classification grid for allergic rhinitis. | |
| `ARIA_allergic_rhinitis_stepwise.png` | Stepwise escalation of allergic rhinitis therapy. | |
| `epistaxis_mgmt.png` | Stepwise epistaxis management from first aid through cautery, packing, ligation/embolization. | |
| `unilateral_sinonasal_masses.png` | Age-based pattern for unilateral sinonasal masses: JNA, inverted papilloma, esthesioneuroblastoma/malignancy. | |
| `acute_sinusitis_complications.png` | Subperiosteal orbital abscess as a Chandler stage III complication. | |
| `nasal_septum.png` | Composition of the nasal septum and why septal hematoma causes saddle-nose deformity. | |

## Head & Neck

| Image filename | What it should show | Real citation |
|---|---|---|
| `neck_levels_colored.png` | Cervical lymph node level classification (I-VII, including IIA/IIB and VA/VB). | |
| `salivary-glands-openstax.png` | **Already fixed this session.** Major salivary gland anatomy; credit now reads "OpenStax, Anatomy and Physiology 2e. CC BY 4.0." |
| `thyroid_adjacent_structures.png` | Thyroid lobes/isthmus, parathyroid glands, recurrent laryngeal nerve relationships. | |
| `oral_cavity_oropharynx_anatomy.png` | Oral cavity vs oropharynx subsites and oncologic significance (tobacco vs HPV driven). | |
| `parotid_facial_nerve.png` | Facial nerve running through and dividing the parotid gland. | |
| `thyroid_diagnostic_steps.png` | TI-RADS ultrasound features driving FNA, then Bethesda-reported cytology. | |
| `salivary_gland_ducts.png` | Wharton's duct's uphill course and submandibular gland stone risk. | |
| `parotid_pathology.png` | Parotid tumor prevalence: pleomorphic adenoma (benign), mucoepidermoid carcinoma (malignant). | |

## Facial Plastics

| Image filename | What it should show | Real citation |
|---|---|---|
| `facial_buttresses.png` | Vertical/horizontal facial buttress columns and reconstructive plating. | |
| `parotid_facial_nerve.png` | Facial nerve trunk and its five branches through the parotid, plus Stensen's duct. | |
| `pitanguy_line.png` | Temporal (frontal) branch of the facial nerve and Pitanguy's surface-marking line. | |
| `mandible_anatomy.png` | Mandible subunits and common fracture sites (condyle, angle, body, parasymphysis). | |
| `le_fort_fractures.png` | Le Fort I, II, III midface fracture patterns. | |
| `reconstructive_ladder.png` | Stepwise reconstructive options from secondary intention through free tissue transfer. | |
| `facial_nerve_course.png` | Immediate complete facial paralysis after penetrating preauricular injury indicating transection. | |

Already correctly cited in this module, no action needed: `skull-anterior-openstax.png` ("OpenStax, Anatomy and Physiology 2e (Ch. 7). CC BY 4.0.") and the orbital blowout figure ("Orbital Floor Blowout Fracture and Muscle Entrapment. Wikimedia Commons.").

## Laryngology

| Image filename | What it should show | Real citation |
|---|---|---|
| `laryngeal_cartilages.png` | Thyroid, cricoid, arytenoid cartilages and epiglottis forming the laryngeal skeleton. | |
| `laryngeal_subsites_supraglottis.png` | Coronal division into supraglottis, glottis, subglottis (cancer staging/airway localization). | |
| `vocal_fold_layers.png` | Layered cover-body microarchitecture of the vocal fold. | |
| `recurrent_laryngeal_nerve_course_2.png` | Superior laryngeal nerve and recurrent laryngeal nerve courses. | |
| `vocal_process_granuloma.png` | Contact granuloma at the vocal process, usually from intubation trauma or reflux. | |
| `tracheostomy_tube.png` | Tracheostomy tube types, first-postoperative-week dislodgement, decannulation pathway. | |
| `acute_epiglottitis.png` | Differentiating croup from epiglottitis by onset speed, fever, toxicity. | |
| `larynx-openstax.png` | **Already fixed this session.** Epiglottis/cartilage/vocal fold framework; credit now reads "OpenStax, Anatomy and Physiology 2e. CC BY 4.0." (referenced from `content/ent-exam-clinic-complaints.js`) |

## Anatomy Atlas

| Image filename | What it should show | Real citation |
|---|---|---|
| `temporal_bone_anatomy.png` | Temporal bone's four parts (squamous, tympanic, petrous, mastoid) and the TMJ. | |
| `paranasal_sinus_drainage.png` | The four paranasal sinuses and where each drains. | |
| `fascial_layers_neck.png` | Deep cervical fascial layers, carotid sheath, neck triangles, nodal-level table. | |
| `cranial-nerves-inferior-view.svg` | Twelve cranial nerves, emphasis on the seven relevant to ENT, skull-base exits. | |
| `facial_nerve_course.png` | Labyrinthine/tympanic/mastoid intratemporal segments of the facial nerve, geniculate ganglion. | |
| `sphenoid_sinus_cavernous_sinus.png` | Pituitary, optic nerve, cavernous sinus as sphenoid sinus neighbors. | |
| `neck-triangles-colored.png` | Boundaries and contents of anterior/posterior neck triangles. | |
| `ear_cross_section.png` | External, middle, and inner ear compartments. | |
| `laryngeal_subsites_supraglottis.png` | The three laryngeal subsites (supraglottis, glottis, subglottis). | |
| `parotid_facial_nerve.png` | Facial nerve running through and dividing the parotid gland. | |
| `skullbase_foramen.png` | Skull-base foramina (ovale, rotundum, spinosum, internal acoustic meatus) and contents. | |

## ENT Exam & Clinic Complaints

| Image filename | What it should show | Real citation |
|---|---|---|
| `ENT_regions_glance.png` | Overview map of the five linked ENT anatomical regions. | |
| `cranial-nerves-inferior-view.svg` | Twelve cranial nerves with skull-base exit foramen and function. | |
| `paranasal_sinus_drainage_danger_zones.png` | Turbinates/meatuses, ostiomeatal drainage, proximity to orbit/skull base. | |
| `neck-triangles-colored.png` | Anterior/posterior neck triangles, cervical nodal levels I-VII, key neck glands. | |
| `tympanic_membrane_landmarks.png` | Otoscopic TM landmarks: cone of light, umbo, manubrium, pars tensa/flaccida. | |
| `peritonsilllar abscess.png` | Peritonsillar abscess: trismus, muffled voice, drooling; airway first, then drainage. | |
| `epistaxis_mgmt.png` | Anterior epistaxis on anticoagulation: compression, topical vasoconstrictor, INR check. | |
| `recurrent_laryngeal_nerve_course_2.png` | Persistent hoarseness in a smoker, vocal-fold paralysis via RLN course. | |
| `acute_sinusitis_complications.png` | Orbital cellulitis/subperiosteal abscess complicating pediatric ethmoid sinusitis. | |
| `facial_nerve_course.png` | Peripheral (Bell's) vs central facial palsy using forehead sparing. | |
| `neck_levels_colored.png` | Neck exam structured by nodal levels I-VI plus thyroid/parotid/supraclavicular. | |
| `audiogram_interpretation.png` | Reading an audiogram: axes, symbols, air-bone gap vs bilateral threshold drop. | |
| `tympanograms.png` | Tympanogram types A, B, C and the ear conditions each indicates. | |
| `kiesselbach_plexus.png` | Kiesselbach's plexus as the source of most anterior nosebleeds. | |
| `sore_throat_centor.png` | Approach to acute sore throat using the Centor score. | |
| `acute_epiglottitis.png` | Classic epiglottitis presentation and the rule against examining the throat. | |

Note: `peritonsilllar abscess.png` has a filename typo (extra "l", stray space) but is left as-is here since renaming the file is out of scope for a citations-only pass; flag separately if you want it cleaned up.

## Pediatric

| Image filename | What it should show | Real citation |
|---|---|---|
| `pediatric_adult_airway.png` | Child's funnel-shaped airway (narrowest at subglottis, cephalad larynx, omega epiglottis). | |
| `eustachian_tube_child_adult.png` | Child's shorter, more horizontal Eustachian tube vs adult's steeper tube. | |
| `branchial_cleft_cyst.png` | Second branchial cleft anomaly tract from a neck pit anterior to SCM to the tonsillar fossa. | |
| `waldeyer_ring.png` | Ring of lymphoid tissue (adenoids, tubal tonsils, palatine tonsils, lingual tonsil). | |
| `congenital_neck_masses.png` | Anatomic location differentiating congenital neck mass diagnoses. | |
| `cervical_fascia_danger_space.png` | Retropharyngeal abscess in a child, diagnosed with contrast CT. | |

## Sleep Medicine

| Image filename | What it should show | Real citation |
|---|---|---|
| `level_upper_airway_obstruction_labeled.png` | Three anatomic levels of upper airway collapse in OSA: nasal, retropalatal, retroglossal. | |
| `Friedman_tongue.png` | Friedman tongue position grades I-IV and UPPP response prediction. | |
| `hypoglossal_nerve_branches.png` | CN XII course and genioglossus innervation underlying tongue protrusion/OSA. | |
| `CPAP_therapy.png` | CPAP as pneumatic splinting of the collapsible upper airway. | |
| `hypoglossal_nerve_stimulator_diagram.png` | STAR-trial candidacy criteria; embedded generator/lead/cuff figure. | |

## Emergencies

| Image filename | What it should show | Real citation |
|---|---|---|
| `cervical_fascia_danger_space.png` | Deep cervical fascial spaces communicating (peritonsillar/parapharyngeal/retropharyngeal), the "danger space" for spreading infection. | |
| `neck_zones_trauma.png` | Zones I, II, III of the neck for penetrating trauma, surgical accessibility by zone. | |
| `acute_epiglottitis.png` | Adult epiglottitis, muffled voice/drooling despite normal-looking oropharynx. | |
| `acute_sinusitis_complications.png` | Sinusitis progressing to orbital (postseptal) cellulitis, proptosis and painful eye movement. | |
| `thyroid_adjacent_structures.png` | Expanding neck hematoma after thyroidectomy compressing the airway. | |
| `audiogram_interpretation.png` | Sudden sensorineural hearing loss confirmed by urgent audiogram, steroid treatment window. | |
| `fascial_layers_neck.png` | Ludwig's angina: odontogenic floor-of-mouth/submandibular cellulitis threatening the airway. | |

## Needs a specific license lookup (Wikimedia-sourced)

Checked all four Wikimedia-named files directly against the current content files. Only one still needs work:

| Image filename | Status |
|---|---|
| `tmj-wikimedia.png` | Still a placeholder, referenced in `content/anatomy-atlas.js` (TMJ's proximity to the ear canal, referred otalgia). This is the one that needs a license lookup. |
| `larynx-coronal-wikimedia.png` | Already has a real citation in `content/ent-exam-clinic-complaints.js`: `"Larynx: Coronal Section Showing Airway Framework and Vocal Folds. Wikimedia Commons."` Not an action item. |
| `middle-ear-wikimedia.png` | Not referenced anywhere in `content/*.js`. Available in the image pool but unused. |
| `paranasal-3d-wikimedia.png` | Not referenced anywhere in `content/*.js`. Available in the image pool but unused. |

So the actual to-do here is just `tmj-wikimedia.png`. Wikimedia Commons licensing varies per file (CC BY-SA, CC BY, public domain, etc.), so it needs the specific file looked up on Commons (or supplied by the student) rather than a generic OpenStax-style auto-fill. Match the existing precedent from `content/facial-plastics.js`: format `Title. Wikimedia Commons.` (or a more specific license line if available, like the `Fig. 907, ... Public domain. Via Wikimedia Commons (...)` style already used in `content/otology.js`).

Also available in the image pool but not currently referenced by any content file (nothing to fix, just noting they exist): `pharynx-regions-openstax.png`, `skull-lateral-openstax.png`.

## The two `source:` field placeholders

These aren't `<figure data-credit>` markup, they're `source:` fields on image-hotspot blocks (the labeled-diagram lightbox type), but they carry the same placeholder text and need the same fix.

| File | Context |
|---|---|
| `content/facial-plastics.js` (~line 129) | The "Orbital floor blow-out fracture" hotspot image (`assets/img/figures/orbital_blowout_fracture.png`), a coronal CT of the right orbit showing a trapdoor fracture with soft tissue herniation. |
| `content/emergencies.js` (~line 135) | The "Zones I, II, and III of the neck in penetrating trauma" hotspot image (`assets/img/figures/neck_zones_trauma.png`), reused from the anatomy lecture, with zone boundaries as the labeled hotspots. |

## Easiest way to send me the real sources

No image files need to move this time, everything is already in place. The fastest path is just to tell me, in chat or as a short pasted list, where each image came from: a textbook name and edition, a named clinical guideline, "my own drawing," a Wikimedia Commons file name or URL, or "faculty-provided, drawn by Dr. X." For example:

- `temporal_bone_anatomy.png`: my own drawing
- `tmj-wikimedia.png`: Wikimedia Commons, [file name or URL], [license if known]
- `chronic_rhinosinusitis.png`: EPOS 2020 guideline, Figure 2

Once I have that, I'll write the citation text and update the `data-credit` (or `source:`) attribute directly in the relevant `content/*.js` file, matching the existing `Title. Wikimedia Commons.` / `OpenStax, Anatomy and Physiology 2e (Ch. N). CC BY 4.0.` style already used elsewhere in the codebase. You don't need to batch everything at once, sending sources for a few images at a time works fine too.

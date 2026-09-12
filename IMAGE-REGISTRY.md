# Image Registry

> **Live tracking now lives in [`IMAGE-REGISTRY.json`](IMAGE-REGISTRY.json)**, regenerated straight from the current
> `content/*.js` files (not hand-maintained) via `python3 scripts/build-image-registry.py`. It lists every image and
> every single place it's used, including images reused in more than one place. Run the script any time content
> changes and you want an up-to-date map — no manual dragging/tracking needed. This `.md` file is the older,
> hand-written sourcing history below; keep it for citation/license notes, but treat the JSON as the source of truth
> for "what shows where."

Tracking for every image referenced in `MODULE-CONTENT-FULL.md`. Each row lists the source label, what the image shows, the citation exactly as it appeared in the source document, its license class, and its current status in the app.

License classes:

- **OPEN** = open-licensed (Wikimedia Commons / Creative Commons) or public domain (NIDCD, NCI). Safe to embed and keep.
- **USER-AI** = generated with Google Gemini for this project. Embedded with a Gemini credit.
- **COPYRIGHTED** = from a textbook, subscription resource, journal, or teaching site. **Not embedded.** Listed here as a slot to fill with an open-licensed replacement later.
- **UNKNOWN** = no usable citation was given; needs a source before it can be used.

Every embedded image is responsive and zoomable (`class='zoomable'`) and its credit appears in the "Figure sources" list at the bottom of its module page.

## New batch (added 2026-09-09, from MODULECONTENTFULL_TAGGED_FOR_CLAUDE.md / IMAGE_MANIFEST_FOR_CLAUDE.md)

Standardized filenames live at `assets/img/mc/<standardized-name>.png` (copied from the unzipped `images/imageN.png` export via `rename_unzipped_images.py.md`'s mapping). These are separate files from the old `assets/img/mc/image1.png`...`image70.png` batch and do not overwrite them, even where the subject overlaps.

### Anatomy Atlas

| Label | Shows | Source (as cited) | License | File | Module(s) |
|---|---|---|---|---|---|
| fig_01_temporal_bone | The Temporal Bone in Four Parts | theskeletalsystem.net | COPYRIGHTED | `assets/img/mc/01_temporal_bone_four_parts.png` | Anatomy Atlas (note, flashcard 1, diagram) |
| fig_02_paranasal_sinuses | Paranasal Sinuses and Their Drainage Pathways | Wikimedia Commons | OPEN | `assets/img/mc/02_paranasal_sinuses_drainage.png` | Anatomy Atlas (diagram) |
| fig_03_neck_fascial_triangles | Fascial Layers and Triangles of the Neck | Scholes & Ramakrishnan (2015) ENT Secrets / Wikimedia Commons CC BY-SA 4.0 | COPYRIGHTED | `assets/img/mc/03_neck_fascial_layers_triangles.png` | Anatomy Atlas (note, diagram) |
| fig_04_cranial_nerves_skull_base | Cranial Nerves of the Head and Neck with Skull Base Foramina | teachmeanatomy.info | COPYRIGHTED | `assets/img/mc/04_cranial_nerves_skull_base_exit.png` | Anatomy Atlas (note, diagram) |
| fig_05a_facial_nerve_amboss | Intratemporal Course of the Facial Nerve (overview) | AMBOSS | COPYRIGHTED | `assets/img/mc/05a_facial_nerve_intratemporal_amboss.png` | Anatomy Atlas (note) |
| fig_05b_facial_nerve_hovland | Detailed Surgical Anatomy of the Facial Nerve | Hovland N, Phuong A, Lu GN. Oper Tech Otolaryngol Head Neck Surg. 2021;32(4):190-196 | COPYRIGHTED | `assets/img/mc/05b_facial_nerve_intratemporal_hovland.png` | Anatomy Atlas (note, diagram) |
| fig_06 / fig_06b_skull_base_foramina | Skull Base Foramina (Superior Endocranial View) | teachmeanatomy.info | COPYRIGHTED | `assets/img/mc/06_skull_base_foramina_superior.png` | Anatomy Atlas (note, flashcard 15, diagram) |
| fig_07_paranasal_sinuses_flashcard | Paranasal Sinus Drainage Anatomy | teachmeanatomy.info | COPYRIGHTED | `assets/img/mc/07_paranasal_sinuses_drainage_flashcard.png` | Anatomy Atlas (flashcard 2) |
| fig_08_sphenoid_sinus_secrets | Sphenoid Sinus and Cavernous Sinus Anatomic Relations | Scholes & Ramakrishnan (2015) ENT Secrets | COPYRIGHTED | `assets/img/mc/08_sphenoid_sinus_relations_secrets.png` | Anatomy Atlas (flashcard 3) |
| fig_09_deep_cervical_fascia_secrets | Layers of the Deep Cervical Fascia | Scholes & Ramakrishnan (2015) ENT Secrets | COPYRIGHTED | `assets/img/mc/09_deep_cervical_fascia_secrets.png` | Anatomy Atlas (flashcard 4) |
| fig_10_neck_triangles | Anterior and Posterior Triangles of the Neck | Wikimedia Commons | OPEN | `assets/img/mc/10_neck_triangles_anterior_posterior.png` | Anatomy Atlas (flashcard 7) |
| fig_11_ear_compartments | External, Middle, and Inner Ear Compartments | Wikimedia Commons | OPEN | `assets/img/mc/11_ear_three_compartments_cross_section.png` | Anatomy Atlas (flashcard 8) |
| fig_12_laryngeal_subsites | Laryngeal Subsites: Supraglottis, Glottis, Subglottis | Wikimedia Commons | OPEN | `assets/img/mc/12_laryngeal_subsites_coronal.png` | Anatomy Atlas (flashcard 9) |
| fig_13_facial_nerve_parotid | Facial Nerve Course Through the Parotid Gland | ECR 2015 / ESR Poster Archive | COPYRIGHTED | `assets/img/mc/13_facial_nerve_parotid_relationship.png` | Anatomy Atlas (flashcard 10) |
| fig_14_branchial_arches | Branchial Arch Skeletal and Muscular Derivatives | Wikimedia Commons | OPEN | `assets/img/mc/14_branchial_arches_derivatives.png` | Anatomy Atlas (flashcard 13, diagram) |
| fig_15_tmj_ear_relation | TMJ Relationship to the External Auditory Canal | Wikimedia Commons | OPEN | `assets/img/mc/15_tmj_external_auditory_canal_relation.png` | Anatomy Atlas (flashcard 17) |

### Foundations

| Label | Shows | Source (as cited) | License | File | Module(s) |
|---|---|---|---|---|---|
| fig_04b_cranial_nerves_table | Twelve Cranial Nerves and Skull Base Exits | teachmeanatomy.info | COPYRIGHTED | `assets/img/mc/04_cranial_nerves_skull_base_exit.png` | Foundations (note) |
| fig_16 / fig_16b_ent_regions | Five ENT Anatomical Regions Overview | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/16_ent_regions_overview.png` | Foundations (note, diagram) |
| fig_17_ostiomeatal_complex | Ostiomeatal Complex (OMC) Coronal Drainage | radiopaedia.org | COPYRIGHTED | `assets/img/mc/17_ostiomeatal_complex_radiopaedia.png` | Foundations (note) |
| fig_19_paranasal_sinuses_coronal | Paranasal Sinuses: Coronal CT & Anatomy | radiopaedia.org | COPYRIGHTED | `assets/img/mc/19_paranasal_sinuses_coronal_radiopaedia.png` | Foundations (diagram) |
| fig_20_larynx_coronal | Larynx Coronal Section | Wikimedia Commons | OPEN | `assets/img/mc/20_larynx_coronal_section.png` | Foundations (diagram) |
| fig_21_neck_nodal_levels | Neck Nodal Levels I-VI | Wikimedia Commons | OPEN | `assets/img/mc/21_neck_nodal_levels_i_vi.png` | Foundations (diagram, flashcard) |
| fig_22_tympanic_membrane_oxford | Normal Right TM Landmarks | oxfordmedicaleducation.com | COPYRIGHTED | `assets/img/mc/22_tympanic_membrane_normal_oxford.png` | Foundations (diagram, flashcard) |
| fig_23_skull_base_radiopaedia | Skull Base Foramina and Their Cranial Nerves | Radiopaedia | COPYRIGHTED | `assets/img/mc/23_skull_base_foramina_cranial_nerves_radiopaedia.png` | Foundations (diagram) |
| fig_24_audiogram_interpretation | How to Read an Audiogram | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/24_audiogram_interpretation_gemini.png` | Foundations (flashcard 13) |
| fig_25_kiesselbachs_plexus | Kiesselbach's Plexus | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/25_kiesselbachs_plexus_gemini.png` | Foundations (flashcard 27) |
| fig_26_sore_throat_scores | Centor / FeverPAIN Scores | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/26_acute_sore_throat_centor_feverpain_gemini.png` | Foundations (flashcard 29) |
| fig_27_salivary_gland_swelling | Salivary Gland Swelling Approach | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/27_salivary_gland_swelling_algorithm_gemini.png` | Foundations (flashcard 34) |
| fig_28_epiglottitis | Epiglottitis Presentation | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/28_epiglottitis_presentation_gemini.png` | Foundations (flashcard 37) |
| fig_29_peritonsillar_abscess | Peritonsillar Abscess Triad | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/29_peritonsillar_abscess_triad_gemini.png` | Foundations (flashcard 38) |
| fig_30_sinusitis_complications | Sinusitis Complications | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/30_sinusitis_complications_orbital_gemini.png` | Foundations (flashcard 44) |

### Otology

| Label | Shows | Source (as cited) | License | File | Module(s) |
|---|---|---|---|---|---|
| fig_18_ear_cross_section_nidcd | Ear in Cross-Section | nidcd.nih.gov | OPEN | `assets/img/mc/18_ear_anatomy_cross_section_nidcd.png` | Otology (diagram) |
| fig_31b_middle_ear_danger_zone | Middle Ear and Mastoid Danger Zone | Gemini AI (adapted from Bagla) | GEMINI-DERIV | `assets/img/mc/31_middle_ear_mastoid_danger_zone_bagla.png` | Otology (note, diagram) |
| fig_34_conductive_hl_intact_tm | Conductive HL with Intact TM | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/34_conductive_hearing_loss_intact_tm_gemini.png` | Otology (clinical block) |
| fig_35_cholesteatoma_tm_perf | Cholesteatoma with TM Perforation | Wikimedia Commons | OPEN | `assets/img/mc/35_cholesteatoma_tm_perforation_wikimedia.png` | Otology (clinical block, case) |
| fig_36a_vestibular_schwannoma_mri | Vestibular Schwannoma on Axial MRI | Wikimedia Commons | OPEN | `assets/img/mc/36a_vestibular_schwannoma_mri_wikimedia.png` | Otology (clinical block, flashcards) |
| fig_36b_vestibular_schwannoma_gross | Vestibular Schwannoma Gross Specimen | Wikimedia Commons | OPEN | `assets/img/mc/36b_vestibular_schwannoma_gross_wikimedia.png` | Otology (clinical block) |
| fig_37_necrotizing_otitis_externa | Necrotizing OE Skull Base Progression | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/37_necrotizing_otitis_externa_progression_gemini.png` | Otology (clinical block) |
| fig_38_external_ear_innervation | External Ear Innervation | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/38_external_ear_innervation_gemini.png` | Otology (flashcard 1) |
| fig_39_ossicular_chain | Ossicular Chain | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/39_ossicular_chain_gemini.png` | Otology (flashcard 4) |
| fig_40_facial_nerve_otology | Facial Nerve in Otologic Disease | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/40_facial_nerve_otology_pathway_gemini.png` | Otology (flashcard 7) |
| fig_41_bony_labyrinth | Bony Labyrinth | Wikimedia Commons | OPEN | `assets/img/mc/41_bony_labyrinth_inner_ear_wikimedia.png` | Otology (flashcard 9) |
| fig_42_congenital_cholesteatoma | Congenital Cholesteatoma | Wikimedia Commons | OPEN | `assets/img/mc/42_congenital_cholesteatoma_wikimedia.png` | Otology (flashcard 24) |

### Rhinology

| Label | Shows | Source (as cited) | License | File | Module(s) |
|---|---|---|---|---|---|
| fig_44_paranasal_danger_zones | Paranasal Sinus Drainage & Danger Zones | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/44_paranasal_sinuses_danger_zones_gemini.png` | Rhinology (note, diagram, flashcard) |
| fig_45_nasal_septum | Nasal Septum Osteocartilaginous Anatomy | Wikimedia Commons | OPEN | `assets/img/mc/45_nasal_septum_framework_wikimedia.png` | Rhinology (note, diagram, flashcard) |
| fig_46_fess_variants | FESS Anatomic Variants | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/46_fess_anatomy_variants_gemini.png` | Rhinology (note, diagram) |
| fig_47_aria_classification | ARIA Classification | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/47_aria_classification_allergic_rhinitis_gemini.png` | Rhinology (clinical block) |
| fig_48_allergic_rhinitis_ladder | Allergic Rhinitis Step-Up Ladder | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/48_allergic_rhinitis_ladder_gemini.png` | Rhinology (clinical block) |
| fig_49_epistaxis_ladder | Epistaxis Escalation Ladder | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/49_epistaxis_escalation_ladder_gemini.png` | Rhinology (clinical block, case) |
| fig_50_unilateral_nasal_masses | Unilateral Sinonasal Masses by Age | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/50_unilateral_nasal_masses_by_age_gemini.png` | Rhinology (clinical block) |
| fig_51_nasal_polyps_ladder | Nasal Polyp Management Ladder | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/51_nasal_polyps_management_ladder_gemini.png` | Rhinology (flashcard 9) |

### Laryngology

| Label | Shows | Source (as cited) | License | File | Module(s) |
|---|---|---|---|---|---|
| fig_52_vocal_fold_layers | True Vocal Fold Microarchitecture | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/52_vocal_fold_microarchitecture_gemini.png` | Laryngology (note, flashcard, diagram) |
| fig_53_laryngeal_nerve_supply | SLN/RLN Innervation | Wikimedia Commons | OPEN | `assets/img/mc/53_laryngeal_nerve_supply_wikimedia.png` | Laryngology (note) |
| fig_54_laryngeal_cartilage_framework | Laryngeal Cartilage Framework | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/54_laryngeal_cartilage_framework_gemini.png` | Laryngology (flashcard, diagram) |
| fig_55_rln_course | RLN Asymmetric Course | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/55_recurrent_laryngeal_nerve_course_gemini.png` | Laryngology (flashcard) |
| fig_56_vocal_process_granuloma | Vocal Process Granuloma | Wikimedia Commons | OPEN | `assets/img/mc/56_vocal_process_granuloma_wikimedia.png` | Laryngology (block, flashcard) |
| fig_57_tracheostomy_tubes | Tracheostomy Tube Types | Wikimedia Commons | OPEN | `assets/img/mc/57_tracheostomy_tube_types_wikimedia.png` | Laryngology (block) |
| fig_58_reinkes_edema | Reinke's Edema | Wikimedia Commons | OPEN | `assets/img/mc/58_reinkes_edema_wikimedia.png` | Laryngology (flashcard) |

### Head & Neck

| Label | Shows | Source (as cited) | License | File | Module(s) |
|---|---|---|---|---|---|
| fig_59_salivary_glands_ducts | Major Salivary Glands & Ducts | KnowledgeWorks Global Ltd. | CC BY | `assets/img/mc/59_salivary_glands_ducts_knowledgeworks.png` | Head & Neck (note, diagram, flashcard) |
| fig_60_thyroid_parathyroid_vasculature | Thyroid/Parathyroid Vasculature & RLN | Royal College of Surgeons of Ireland | CC BY-NC-SA | `assets/img/mc/60_thyroid_parathyroid_vasculature_rcsi.png` | Head & Neck (note, diagram, flashcard) |
| fig_61a_oral_vs_oropharynx_coronal | Oral Cavity vs Oropharynx, Coronal | OpenStax | OPEN | `assets/img/mc/61a_oral_cavity_oropharynx_coronal_openstax.png` | Head & Neck (note, flashcard) |
| fig_61b_oral_vs_oropharynx_sagittal | Oral Cavity vs Oropharynx, Sagittal | OpenStax | OPEN | `assets/img/mc/61b_oral_cavity_oropharynx_sagittal_openstax.png` | Head & Neck (note, diagram) |
| fig_62_neck_levels_i_vii | Cervical Lymph Node Levels I-VII | Wikimedia Commons | OPEN | `assets/img/mc/62_neck_levels_i_vii_wikimedia.png` | Head & Neck (diagram) |
| fig_63_parotid_facial_nerve | Parotid Region & Facial Nerve | Royal College of Surgeons of Ireland | CC BY-NC-SA | `assets/img/mc/63_parotid_facial_nerve_rcsi.png` | Head & Neck (diagram, flashcard) |
| fig_65_bethesda_system | Bethesda System | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/65_bethesda_fna_algorithm_gemini.png` | Head & Neck (flashcard) |
| fig_66_thyroid_nodule_workup | Thyroid Nodule Workup Algorithm | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/66_thyroid_nodule_workup_algorithm_gemini.png` | Head & Neck (flashcard) |

### Pediatric ENT

| Label | Shows | Source (as cited) | License | File | Module(s) |
|---|---|---|---|---|---|
| fig_67_pediatric_airway | Pediatric vs Adult Airway Anatomy | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/67_pediatric_vs_adult_airway_gemini.png` | Pediatric ENT (note, diagram, flashcard) |
| fig_68_pediatric_eustachian | Pediatric vs Adult Eustachian Tube | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/68_pediatric_vs_adult_eustachian_tube_gemini.png` | Pediatric ENT (note, diagram, flashcard) |
| fig_69_branchial_cleft | Second Branchial Cleft Tract | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/69_second_branchial_cleft_tract_gemini.png` | Pediatric ENT (note, diagram) |
| fig_70_waldeyers_ring | Waldeyer's Ring | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/70_waldeyers_ring_lymphoid_gemini.png` | Pediatric ENT (note, diagram, flashcard) |
| fig_71_congenital_neck_masses | Congenital Neck Masses by Location | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/71_congenital_neck_masses_by_location_gemini.png` | Pediatric ENT (clinical block) |

### Sleep Surgery & OSA

| Label | Shows | Source (as cited) | License | File | Module(s) |
|---|---|---|---|---|---|
| fig_72_osa_obstruction_sites | Sites of Upper Airway Obstruction | Tan, Yang, & Lim (2021). Sleep Medicine Research. | COPYRIGHTED | `assets/img/mc/72_upper_airway_obstruction_sites_tan2021.png` | Sleep Surgery (note) |
| fig_73_friedman_grades | Friedman Tongue Position Grades | ResearchGate / Friedman et al. | COPYRIGHTED | `assets/img/mc/73_friedman_tongue_position_grades_researchgate.png` | Sleep Surgery (note, diagram) |
| fig_74_hypoglossal_nerve_genioglossus | Hypoglossal Nerve & Genioglossus | Mashaqi et al. (2021) | COPYRIGHTED | `assets/img/mc/74_hypoglossal_nerve_genioglossus_mashaqi2021.png` | Sleep Surgery (note, diagram) |
| fig_75_cpap_splinting | How CPAP Works | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/75_cpap_pneumatic_splinting_gemini.png` | Sleep Surgery (note, diagram) |
| fig_76_levels_obstruction | Levels of Upper Airway Obstruction | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/76_levels_of_upper_airway_obstruction_diagram_gemini.png` | Sleep Surgery (diagram) |
| fig_77_hgns_device | Hypoglossal Nerve Stimulator Components | Xia et al. (2023) Sensors | COPYRIGHTED | `assets/img/mc/77_hypoglossal_nerve_stimulator_device_xia2023.png` | Sleep Surgery (diagram, new flashcard) |

### Facial Plastics & Trauma

| Label | Shows | Source (as cited) | License | File | Module(s) |
|---|---|---|---|---|---|
| fig_78_facial_buttresses | Vertical & Horizontal Facial Buttresses | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/78_facial_buttresses_vertical_horizontal_gemini.png` | Facial Plastics (note, diagram, flashcard) |
| fig_79a_parotid_branches | Facial Nerve Branches Through Parotid | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/79a_parotid_facial_nerve_branches_gemini.png` | Facial Plastics (note, diagram, flashcard) |
| fig_79b_stensens_duct | Stensen's Duct Course | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/79b_stensens_duct_course_gemini.png` | Facial Plastics (note) |
| fig_80_pitanguys_line | Pitanguy's Line & Frontal Branch | Jawad, Hohman, & Raggio (2025). StatPearls. | COPYRIGHTED | `assets/img/mc/80_pitanguys_line_frontal_branch_statpearls.png` | Facial Plastics (note, diagram, flashcard) |
| fig_81_orbital_blowout | Orbital Floor Blowout Fracture | Wikimedia Commons | OPEN | `assets/img/mc/81_orbital_floor_blowout_fracture_wikimedia.png` | Facial Plastics (note, diagram, flashcard) |
| fig_82_le_fort_fractures | Le Fort Fracture Classification | Wikimedia Commons | OPEN | `assets/img/mc/82_le_fort_fractures_i_ii_iii_wikimedia.png` | Facial Plastics (block, flashcard) |
| fig_83_reconstructive_ladder | Reconstructive Ladder | Gemini AI Generated Schematic | GEMINI | `assets/img/mc/83_reconstructive_ladder_gemini.png` | Facial Plastics (block, flashcard) |
| fig_84_mandible_fractures | Mandible Fracture Patterns | Wikimedia Commons | OPEN | `assets/img/mc/84_mandible_fractures_ring_rule_wikimedia.png` | Facial Plastics (block, flashcard) |

### Emergencies & Red Flags

| Label | Shows | Source (as cited) | License | File | Module(s) |
|---|---|---|---|---|---|
| fig_85_airway_triage | Airway Triage Signs | Wikimedia Commons | OPEN | `assets/img/mc/85_airway_triage_signs_obstruction_wikimedia.png` | Emergencies (note) |
| fig_86_deep_neck_spaces | Deep Neck Space Communications | Wikimedia Commons | OPEN | `assets/img/mc/86_deep_neck_spaces_communication_wikimedia.png` | Emergencies (note, diagram) |
| fig_87_neck_zones | NOT WIRED: source file missing (`images/image90.png` never delivered in the unzipped export) | Gemini AI Generated Schematic | GEMINI | n/a | Emergencies (note, diagram) — needs owner to supply the missing file |

## Embedded (open-licensed, public-domain, or Gemini)

| Label | Shows | Source (as cited) | License | File | Module(s) |
|---|---|---|---|---|---|
| image2 | Paranasal sinuses, 3D view | Wikimedia Commons | OPEN | `assets/img/anatomy-atlas/paranasal-3d-wikimedia.png` | Anatomy Atlas |
| image10 | Anterior and posterior triangles of the neck | Wikimedia Commons | OPEN | `assets/img/anatomy-atlas/neck-triangles-colored.png` | Anatomy Atlas, Foundations |
| image11 | External / middle / inner ear boundaries | Wikimedia Commons | OPEN | `assets/img/ear/middle-ear-wikimedia.png` | Otology |
| image12 | Laryngeal subsites (supraglottis, glottis, subglottis) | Wikimedia Commons (NCI public-domain illustration) | OPEN | `assets/img/laryngology/larynx-subsites-nci.png` | Laryngology |
| image14 | Auditory ossicles (malleus, incus, stapes) | Wikimedia Commons | OPEN | `assets/img/ear/ossicles-wikimedia.png` | Otology |
| image16 | Temporomandibular joint | Wikimedia Commons | OPEN | `assets/img/anatomy-atlas/tmj-wikimedia.png` | Anatomy Atlas |
| image17 | ENT regions at a glance (sagittal profile) | Gemini AI | USER-AI | `assets/img/head-neck/ent-regions-gemini.png` | Head & Neck |
| image19 | Parts of the ear (cross-section, occlusion labels) | NIDCD / NIH (nidcd.nih.gov) | OPEN (public domain) | `assets/img/ear/ear-parts-nidcd.png` | Foundations |
| image21 | Larynx, coronal section | Wikimedia Commons | OPEN | `assets/img/laryngology/larynx-coronal-wikimedia.png` | Laryngology |
| image22 | Cervical nodal levels I to VII | Wikimedia Commons | OPEN | `assets/img/head-neck/neck-levels-colored.png` | Foundations, Anatomy Atlas, Head & Neck |
| image24 | ENT regions (sagittal), duplicate of image17 | Gemini | USER-AI | (same file as image17) | Head & Neck |
| image27 | Otoscopy comparison: otitis externa, acute otitis media, cholesteatoma, necrotizing otitis externa | Gemini AI (user-confirmed) | USER-AI | `assets/img/ear/otoscopy-comparison-gemini.png` | Otology |

## Not embedded: copyrighted, replace later

These are logged as slots. Find an open-licensed or public-domain equivalent, drop it into `assets/img/`, and wire it in the same way.

| Label | Shows | Source (as cited) | License | Suggested open replacement |
|---|---|---|---|---|
| image1 | Temporal bone, four parts | theskeletalsystem.net | COPYRIGHTED | Gray's Anatomy plate or OpenStax skull (an OpenStax lateral skull is already embedded in Anatomy Atlas) |
| image3 | Neck triangles / fascial layers | Scholes & Ramakrishnan, ENT Secrets (4th ed.), Elsevier | COPYRIGHTED | Covered by image10 (Wikimedia) already embedded |
| image4 | Twelve cranial nerves / cranial foramina | teachmeanatomy.info | COPYRIGHTED | Covered by the Wikimedia cranial-nerves figure already in Anatomy Atlas |
| image5 | Facial nerve, intratemporal segments | AMBOSS | COPYRIGHTED | Gray's plate 788 (public domain) is already embedded in Anatomy Atlas |
| image6 | Facial nerve anatomy | Hovland N, Phuong A, Lu GN. Oper Tech Otolaryngol Head Neck Surg. 2021;32(4):190-196 | COPYRIGHTED | Same as above |
| image7 | Skull base foramina | teachmeanatomy.info | COPYRIGHTED | Gray's plate 193 (public domain), already in Anatomy Atlas |
| image8 | Paranasal sinus drainage pathways | teachmeanatomy.info | COPYRIGHTED | Wikimedia paranasal sinus drainage diagram |
| image9 | Sphenoid sinus relations | Scholes & Ramakrishnan, ENT Secrets (4th ed.), Elsevier | COPYRIGHTED | Wikimedia / Gray's sagittal sinus view |
| image13 | Facial nerve (teaching poster) | ESR / ECR 2015 poster, epos.myesr.org | COPYRIGHTED | Gray's plate 788 (already embedded) |
| image15 | Skull-base foramina | teachmeanatomy.info | COPYRIGHTED | Gray's plate 193 (already embedded) |
| image18 | Ostiomeatal complex | radiopaedia.org | COPYRIGHTED | Wikimedia coronal sinus CT (open) |
| image20 | Paranasal sinuses, coronal | radiopaedia.org | COPYRIGHTED | Wikimedia coronal sinus anatomy |
| image23 | Tympanic membrane landmarks | oxfordmedicaleducation.com | COPYRIGHTED | Wikimedia normal TM photo (already embedded in Foundations) |
| image25 | Clinically dangerous middle-ear relationships | Gemini AI (adapted from Dr. Rahul Bagla textbook) | COPYRIGHTED (derivative of a textbook figure) | Redraw as an original schematic, or use a Wikimedia medial-wall image |
| image26 | Hearing loss / sensorineural causes | Scholes & Ramakrishnan, ENT Secrets (4th ed.), Elsevier | COPYRIGHTED | Wikimedia audiogram or hearing-loss schematic |

## Open items flagged for you

- **image18 asterisk command:** the source document has `** DELETE THIS EXISTING FIGURE **` on the existing "The paranasal sinuses" figure, with the copyrighted Radiopaedia ostiomeatal-complex image as its intended replacement. Since that replacement is copyrighted, I left the existing figure in place rather than deleting it. Tell me whether to remove the old paranasal schematic and, if so, what open image should take its place.
- **image27** had no citation, but you confirmed it is AI-generated, so it is embedded in Otology with a Gemini credit.
- **image12** was cited as "Wikimedia commons" but the underlying illustration is an NCI public-domain figure; the embedded credit reads "NCI Visuals Online. Public domain." Adjust if you prefer the plain Wikimedia credit.

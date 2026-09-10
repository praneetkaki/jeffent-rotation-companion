# Figure & Module Database

The single source of truth for every figure in the app and where it belongs. Reference any figure by its **imageNN label**; the file lives at `assets/img/mc/imageNN.png`. Use these labels (not descriptions) when asking for a figure to be moved, recaptioned, or replaced.

## License classes

- **OPEN** = Wikimedia / OpenStax / NCI / NIDCD, open or public domain. Safe to keep and share.
- **GEMINI** = generated with Google Gemini for this project. Fine to keep; credit as an illustration.
- **CC BY / CC BY-NC-SA** = licensed drawings (KnowledgeWorks, RCSI); keep attribution. NC-SA is non-commercial.
- **COPYRIGHTED** = textbook / subscription / journal figures (Netter/ENT Secrets, TeachMeAnatomy, AMBOSS, Radiopaedia, Oxford, ESR). Embedded now with citation per your instruction; **replace before any public or shared release.**
- **GEMINI-DERIV** = AI image adapted from a copyrighted textbook figure; treat like COPYRIGHTED.


## Wiring status (updated live)

**All figures are now wired and live** (cache `?v=20260909b`; hard-reload to see them). 50 figure references across the modules.

- **Note figures:** Anatomy Atlas (1,3,4,6,7), Foundations (17,18), Otology (32,33,35,36,37,38,39), Rhinology (46-54), Laryngology (57,58,62,63), Head & Neck (64,65,66,67,70). Several replaced silently-broken Gray-plate references (Gray788, Gray193, Gray1174, Gray910, Gray855, Gray791, Locus_Kiesselbachii, Vocal_cords_layers, Illu01) and the paranasal figure was swapped to image18 per your call.
- **Occlusion overviews:** Larynx subsites (image60) and recurrent-laryngeal-nerve course (image61) converted from hand-drawn SVG to click-to-reveal image occlusion. (The ear cross-section and the Foundations labeled-diagram set were already occlusion diagrams.)
- **Flashcard figures:** Anatomy Atlas (8,9,13,15), Foundations (25,26,27,29,30,31), Otology (40,41,42,43,44,45), Rhinology (55,56), Head & Neck (69).

**Not placed (need your call):**
- image28 (Sjogren syndrome overview) — no matching flashcard in Foundations. Tell me which card it belongs on.
- image68 (neck nodal levels) — redundant with the neck-levels figure already shown; left out to avoid duplication.


## Replace before sharing (15 figures, old batch)

image1, image3, image4, image5, image6, image7, image8, image9, image13, image15, image18, image20, image23, image32, image33

## Replace before sharing (new batch, added 2026-09-09, `assets/img/mc/<standardized-name>.png`)

Running list, appended per module as each is wired: fig_01_temporal_bone, fig_03_neck_fascial_triangles, fig_04_cranial_nerves_skull_base, fig_05a_facial_nerve_amboss, fig_05b_facial_nerve_hovland, fig_06_skull_base_foramina, fig_06b_skull_base_foramina, fig_07_paranasal_sinuses_flashcard, fig_08_sphenoid_sinus_secrets, fig_09_deep_cervical_fascia_secrets, fig_13_facial_nerve_parotid, fig_04b_cranial_nerves_table, fig_17_ostiomeatal_complex, fig_19_paranasal_sinuses_coronal, fig_22_tympanic_membrane_oxford, fig_23_skull_base_radiopaedia, fig_31b_middle_ear_danger_zone, fig_34_conductive_hl_intact_tm, fig_17_ostiomeatal_complex (Rhinology reuse), fig_72_osa_obstruction_sites, fig_73_friedman_grades, fig_74_hypoglossal_nerve_genioglossus, fig_77_hgns_device, fig_80_pitanguys_line


## Anatomy Atlas

| Image | License | Shows | Submodule | Placement |
|---|---|---|---|---|
| fig_01_temporal_bone (`01_temporal_bone_four_parts.png`) | COPYRIGHTED | The Temporal Bone in Four Parts | Temporal bone in four parts | note + flashcard 1 + diagram (SVG replaced with image occlusion) |
| fig_03_neck_fascial_triangles (`03_neck_fascial_layers_triangles.png`) | COPYRIGHTED | Fascial Layers and Triangles of the Neck | The neck as fascial layers and triangles | note + diagram (SVG replaced with image occlusion) |
| fig_04_cranial_nerves_skull_base (`04_cranial_nerves_skull_base_exit.png`) | COPYRIGHTED | Cranial Nerves of the Head and Neck with Skull Base Foramina | Cranial nerves of the head & neck | note + diagram (SVG replaced with image occlusion) |
| fig_05a_facial_nerve_amboss (`05a_facial_nerve_intratemporal_amboss.png`) | COPYRIGHTED | Intratemporal Course of the Facial Nerve (overview) | Facial nerve: intratemporal segments | note |
| fig_05b_facial_nerve_hovland (`05b_facial_nerve_intratemporal_hovland.png`) | COPYRIGHTED | Detailed Surgical Anatomy of the Facial Nerve | Facial nerve: intratemporal segments | note + diagram (SVG replaced with image occlusion) |
| fig_06_skull_base_foramina / fig_06b (`06_skull_base_foramina_superior.png`) | COPYRIGHTED | Skull Base Foramina (Superior Endocranial View) | Skull base foramina | note + flashcard 15 + diagram (SVG replaced with image occlusion) |
| fig_07_paranasal_sinuses_flashcard (`07_paranasal_sinuses_drainage_flashcard.png`) | COPYRIGHTED | Paranasal Sinus Drainage Anatomy | Flashcards | flashcard 2 |
| fig_08_sphenoid_sinus_secrets (`08_sphenoid_sinus_relations_secrets.png`) | COPYRIGHTED | Sphenoid Sinus and Cavernous Sinus Anatomic Relations | Flashcards | flashcard 3 |
| fig_09_deep_cervical_fascia_secrets (`09_deep_cervical_fascia_secrets.png`) | COPYRIGHTED | Layers of the Deep Cervical Fascia | Flashcards | flashcard 4 |
| fig_10_neck_triangles (`10_neck_triangles_anterior_posterior.png`) | OPEN (Wikimedia) | Anterior and Posterior Triangles of the Neck | Flashcards | flashcard 7 |
| fig_11_ear_compartments (`11_ear_three_compartments_cross_section.png`) | OPEN (Wikimedia) | External, Middle, and Inner Ear Compartments | Flashcards | flashcard 8 |
| fig_12_laryngeal_subsites (`12_laryngeal_subsites_coronal.png`) | OPEN (Wikimedia) | Laryngeal Subsites: Supraglottis, Glottis, Subglottis | Flashcards | flashcard 9 |
| fig_13_facial_nerve_parotid (`13_facial_nerve_parotid_relationship.png`) | COPYRIGHTED | Facial Nerve Course Through the Parotid Gland | Flashcards | flashcard 10 |
| fig_14_branchial_arches (`14_branchial_arches_derivatives.png`) | OPEN (Wikimedia) | Branchial Arch Skeletal and Muscular Derivatives | Flashcards | flashcard 13 + diagram (SVG replaced with image occlusion) |
| fig_15_tmj_ear_relation (`15_tmj_external_auditory_canal_relation.png`) | OPEN (Wikimedia) | TMJ Relationship to the External Auditory Canal | Flashcards | flashcard 17 |
| fig_02_paranasal_sinuses (`02_paranasal_sinuses_drainage.png`) | OPEN (Wikimedia) | Paranasal Sinuses and Their Drainage Pathways | Paranasal sinuses diagram | diagram (SVG replaced with image occlusion; no note marker in tagged doc, used for the drainage diagram per its title match) |
| image1 | COPYRIGHTED | Temporal bone, four parts (lateral + medial) | Temporal bone in four parts | note |
| image2 | OPEN (Wikimedia) | Paranasal sinuses, 3D face view | Paranasal sinuses | note (already embedded) |
| image3 | COPYRIGHTED | Fascial layers of the neck, cross-section (Netter) | Neck as fascial layers & triangles | note |
| image4 | COPYRIGHTED | Cranial foramina + cranial-nerve colour map | Cranial nerves of the head & neck | note |
| image5 | COPYRIGHTED | Facial nerve intratemporal segments (AMBOSS) | Facial nerve: intratemporal segments | note |
| image6 | COPYRIGHTED | Facial nerve course, labelled (Hovland 2021) | Facial nerve: intratemporal segments | note |
| image7 | COPYRIGHTED | Cranial foramina colour map (variant) | Skull base foramina | note |
| image8 | COPYRIGHTED | Sinus ostia / semilunar hiatus drainage | Flashcards | flashcard |
| image9 | COPYRIGHTED | Coronal endoscopic sinus / skull-base approach | Flashcards | flashcard |
| image10 | OPEN (Wikimedia) | Neck triangles, colour, sagittal head/neck | Flashcards | flashcard (already embedded as note) |
| image11 | OPEN (Wikimedia) | Middle ear (labelled + ossicle photo) | Flashcards | flashcard (already embedded) |
| image12 | OPEN (NCI, PD) | Larynx subsites, sagittal (NCI) | Flashcards | flashcard (already embedded) |
| image13 | COPYRIGHTED | Parotid region (facial nerve, retromandibular v.) | Flashcards | flashcard |
| image14 | OPEN (Wikimedia) | Auditory ossicles, labelled | Flashcards | flashcard (already embedded) |
| image15 | COPYRIGHTED | Cranial foramina colour map (variant) | Flashcards | flashcard |
| image16 | OPEN (Wikimedia) | Temporal bone + TMJ, lateral skull | Flashcards | flashcard (already embedded as note) |

## Foundations

| Image | License | Shows | Submodule | Placement |
|---|---|---|---|---|
| fig_04b_cranial_nerves_table (`04_cranial_nerves_skull_base_exit.png`) | COPYRIGHTED | Twelve Cranial Nerves and Skull Base Exits | Cranial nerves | note |
| fig_16 / fig_16b_ent_regions (`16_ent_regions_overview.png`) | GEMINI | Five ENT Anatomical Regions Overview | The ENT regions at a glance | note + diagram (SVG replaced with image occlusion) |
| fig_17_ostiomeatal_complex (`17_ostiomeatal_complex_radiopaedia.png`) | COPYRIGHTED | Ostiomeatal Complex (OMC) Coronal Drainage | Nose & paranasal sinuses | note (alongside existing image18) |
| fig_19_paranasal_sinuses_coronal (`19_paranasal_sinuses_coronal_radiopaedia.png`) | COPYRIGHTED | Paranasal Sinuses: Coronal CT & Anatomy | Labeled diagrams | diagram (SVG replaced with image occlusion) |
| fig_20_larynx_coronal (`20_larynx_coronal_section.png`) | OPEN (Wikimedia) | Larynx Coronal Section | Labeled diagrams | diagram (SVG replaced with image occlusion) |
| fig_21_neck_nodal_levels (`21_neck_nodal_levels_i_vi.png`) | OPEN (Wikimedia) | Neck Nodal Levels I-VI | Labeled diagrams + flashcard 10 | diagram (SVG replaced with image occlusion) + flashcard |
| fig_22_tympanic_membrane_oxford (`22_tympanic_membrane_normal_oxford.png`) | COPYRIGHTED | Normal Right TM Landmarks | Labeled diagrams + flashcard 2 | diagram (SVG replaced with image occlusion) + flashcard |
| fig_23_skull_base_radiopaedia (`23_skull_base_foramina_cranial_nerves_radiopaedia.png`) | COPYRIGHTED | Skull Base Foramina and Their Cranial Nerves | Labeled diagrams | diagram (SVG replaced with image occlusion) |
| fig_24_audiogram_interpretation (`24_audiogram_interpretation_gemini.png`) | GEMINI | How to Read an Audiogram | Flashcards | flashcard 13 |
| fig_25_kiesselbachs_plexus (`25_kiesselbachs_plexus_gemini.png`) | GEMINI | Kiesselbach's Plexus | Flashcards | flashcard 27 |
| fig_26_sore_throat_scores (`26_acute_sore_throat_centor_feverpain_gemini.png`) | GEMINI | Centor / FeverPAIN Scores | Flashcards | flashcard 29 |
| fig_27_salivary_gland_swelling (`27_salivary_gland_swelling_algorithm_gemini.png`) | GEMINI | Salivary Gland Swelling Approach | Flashcards | flashcard 34 |
| fig_28_epiglottitis (`28_epiglottitis_presentation_gemini.png`) | GEMINI | Epiglottitis Presentation | Flashcards | flashcard 37 |
| fig_29_peritonsillar_abscess (`29_peritonsillar_abscess_triad_gemini.png`) | GEMINI | Peritonsillar Abscess Triad | Flashcards | flashcard 38 |
| fig_30_sinusitis_complications (`30_sinusitis_complications_orbital_gemini.png`) | GEMINI | Sinusitis Complications | Flashcards | flashcard 44 |
| image35 (reused) | GEMINI | Tympanogram types A/B/C | Flashcards | flashcard 14 (tympanometry), per "include tympanometry figure" instruction, reusing the Otology tympanogram figure |
| image17 | GEMINI | ENT regions at a glance (sagittal profile) | The ENT regions at a glance | note (already embedded) |
| image18 | COPYRIGHTED | Nasal cavity / ostiomeatal complex | Nose & paranasal sinuses | note |
| image19 | OPEN (NIDCD, PD) | Ear cross-section (outer/middle/inner) | Labeled diagrams | diagram (already embedded) |
| image20 | COPYRIGHTED | Paranasal sinuses, coronal | Labeled diagrams | diagram |
| image21 | OPEN (Wikimedia) | Larynx coronal (folds) | Labeled diagrams | diagram (already embedded) |
| image22 | OPEN (Wikimedia) | Neck nodal levels I-VI, colour | Labeled diagrams | diagram (already embedded) |
| image23 | COPYRIGHTED | Tympanic membrane, otoscopic labelled | Labeled diagrams | diagram |
| image24 | GEMINI | ENT regions sagittal, fully labelled | Labeled diagrams | diagram |
| image25 | GEMINI | Audiogram reading guide | Flashcards | flashcard |
| image26 | GEMINI | Kiesselbach plexus / epistaxis zone | Flashcards | flashcard |
| image27 | GEMINI | Sore throat / Centor criteria guide | Flashcards | flashcard |
| image28 | GEMINI | Sjogren syndrome overview | Flashcards | flashcard |
| image29 | GEMINI | Acute epiglottitis critical guide | Flashcards | flashcard |
| image30 | GEMINI | Peritonsillar abscess guide | Flashcards | flashcard |
| image31 | GEMINI | Acute sinusitis complications guide | Flashcards | flashcard |

## Otology

| Image | License | Shows | Submodule | Placement |
|---|---|---|---|---|
| fig_18_ear_cross_section_nidcd (`18_ear_anatomy_cross_section_nidcd.png`) | OPEN (NIDCD, PD) | Ear in Cross-Section | Labeled diagrams | diagram (SVG replaced with image occlusion) |
| fig_22_tympanic_membrane_oxford (`22_tympanic_membrane_normal_oxford.png`) | COPYRIGHTED | Normal Right TM Landmarks | Labeled diagrams + flashcard 3 | diagram (SVG replaced with image occlusion) + flashcard |
| fig_31b_middle_ear_danger_zone (`31_middle_ear_mastoid_danger_zone_bagla.png`) | GEMINI-DERIV | Middle Ear and Mastoid Danger Zone | The clinically dangerous relationships + Labeled diagrams | note + diagram (SVG replaced with image occlusion) |
| fig_34_conductive_hl_intact_tm (`34_conductive_hearing_loss_intact_tm_gemini.png`) | GEMINI | Conductive HL with Intact TM: Tympanometry | Clinical section | block |
| fig_35_cholesteatoma_tm_perf (`35_cholesteatoma_tm_perforation_wikimedia.png`) | OPEN (Wikimedia) | Cholesteatoma with TM Perforation | Clinical section + Case 2 | block + case |
| fig_36a_vestibular_schwannoma_mri (`36a_vestibular_schwannoma_mri_wikimedia.png`) | OPEN (Wikimedia) | Vestibular Schwannoma on Axial MRI | Clinical section + flashcards 14, 26 | block + flashcard |
| fig_36b_vestibular_schwannoma_gross (`36b_vestibular_schwannoma_gross_wikimedia.png`) | OPEN (Wikimedia) | Vestibular Schwannoma Gross Specimen | Clinical section | block |
| fig_37_necrotizing_otitis_externa (`37_necrotizing_otitis_externa_progression_gemini.png`) | GEMINI | Necrotizing OE Skull Base Progression | Clinical section | block |
| fig_38_external_ear_innervation (`38_external_ear_innervation_gemini.png`) | GEMINI | External Ear Innervation | Flashcards | flashcard 1 |
| fig_39_ossicular_chain (`39_ossicular_chain_gemini.png`) | GEMINI | Ossicular Chain | Flashcards | flashcard 4 |
| fig_40_facial_nerve_otology (`40_facial_nerve_otology_pathway_gemini.png`) | GEMINI | Facial Nerve in Otologic Disease | Flashcards | flashcard 7 |
| fig_41_bony_labyrinth (`41_bony_labyrinth_inner_ear_wikimedia.png`) | OPEN (Wikimedia) | Bony Labyrinth | Flashcards | flashcard 9 |
| fig_42_congenital_cholesteatoma (`42_congenital_cholesteatoma_wikimedia.png`) | OPEN (Wikimedia) | Congenital Cholesteatoma | Flashcards | flashcard 24 |
| image32 | GEMINI-DERIV | Middle-ear dangerous relationships (Bagla-derived) | The clinically dangerous relationships | note |
| image33 | COPYRIGHTED | Conductive vs sensorineural hearing loss | Hearing loss: the fork in the road | note |
| image34 | GEMINI | Otoscopy comparison (OE/AOM/cholest./NOE) | Infection, and when it's dangerous | note (already embedded) |
| image35 | GEMINI | Tympanograms & associated ear conditions | Conductive HL with intact TM | note |
| image36 | OPEN (Wikimedia) | Cholesteatoma, otoscopic photo | Cholesteatoma: mechanism | note |
| image37 | OPEN (Wikimedia) | Acoustic neuroma illustration | Vestibular schwannoma | note |
| image38 | OPEN (Wikimedia) | Vestibular schwannoma, axial MRI | Vestibular schwannoma | note |
| image39 | GEMINI | Necrotizing (malignant) otitis externa guide | Necrotizing otitis externa | note |
| image40 | GEMINI | External canal / otoscopy positioning | Flashcards | flashcard |
| image41 | GEMINI | Middle-ear muscles (tensor tympani/stapedius) | Flashcards | flashcard |
| image42 | GEMINI | Chorda tympani | Flashcards | flashcard |
| image43 | OPEN (Wikimedia) | Weber/Rinne tuning-fork tests | Flashcards | flashcard |
| image44 | OPEN (Wikimedia) | Cholesteatoma, large perforation (otoscopic) | Flashcards | flashcard |
| image45 | OPEN (Wikimedia) | Vestibular schwannoma MRI | Flashcards | flashcard |

## Rhinology

| Image | License | Shows | Submodule | Placement |
|---|---|---|---|---|
| fig_44_paranasal_danger_zones (`44_paranasal_sinuses_danger_zones_gemini.png`) | GEMINI | Paranasal Sinus Drainage & Danger Zones | Note + Labeled diagrams + flashcard 2 | note + diagram (SVG replaced) + flashcard |
| fig_45_nasal_septum (`45_nasal_septum_framework_wikimedia.png`) | OPEN (Wikimedia) | Nasal Septum Osteocartilaginous Anatomy | Note + Labeled diagrams + flashcard 4 | note + diagram (SVG replaced) + flashcard |
| fig_46_fess_variants (`46_fess_anatomy_variants_gemini.png`) | GEMINI | FESS Anatomic Variants | Note + Labeled diagrams | note + diagram (SVG replaced) |
| fig_47_aria_classification (`47_aria_classification_allergic_rhinitis_gemini.png`) | GEMINI | ARIA Classification | Clinical section | block |
| fig_48_allergic_rhinitis_ladder (`48_allergic_rhinitis_ladder_gemini.png`) | GEMINI | Allergic Rhinitis Step-Up Ladder | Clinical section | block |
| fig_49_epistaxis_ladder / fig_49b (`49_epistaxis_escalation_ladder_gemini.png`) | GEMINI | Epistaxis Escalation Ladder | Clinical section + Case 1 | block + case |
| fig_50_unilateral_nasal_masses (`50_unilateral_nasal_masses_by_age_gemini.png`) | GEMINI | Unilateral Sinonasal Masses by Age | Clinical section | block |
| fig_17_ostiomeatal_complex (reused, `17_ostiomeatal_complex_radiopaedia.png`) | COPYRIGHTED | Ostiomeatal Complex Coronal Drainage | Labeled diagrams + flashcard 1 | diagram (SVG replaced) + flashcard |
| fig_25b_kiesselbachs_plexus (reused, `25_kiesselbachs_plexus_gemini.png`) | GEMINI | Kiesselbach's Plexus | Labeled diagrams + flashcard 3 | diagram (SVG replaced) + flashcard |
| fig_51_nasal_polyps_ladder (`51_nasal_polyps_management_ladder_gemini.png`) | GEMINI | Nasal Polyp Management Ladder | Flashcards | flashcard 9 |
| image46 | OPEN (Wikimedia) | Ostiomeatal complex, coronal CT (highlighted) | Lateral nasal wall & OMC | note |
| image47 | GEMINI | Paranasal sinuses: drainage & danger zones | Paranasal sinuses: drainage & danger | note |
| image48 | GEMINI | Blood supply of the nose | Blood supply of the nose | note |
| image49 | OPEN (Wikimedia) | Nasal septum (cartilage/vomer, Gray) | The nasal septum | note |
| image50 | GEMINI | FESS anatomy variants on coronal CT | FESS anatomy variants | note |
| image51 | GEMINI | ARIA allergic rhinitis classification | Allergic rhinitis: ARIA | note |
| image52 | GEMINI | Allergic rhinitis step-up therapy ladder | Allergic rhinitis: step-up ladder | note |
| image53 | GEMINI | Epistaxis escalation ladder | The epistaxis escalation ladder | note |
| image54 | GEMINI | Unilateral sinonasal masses by age | Unilateral nasal masses by age | note |
| image55 | GEMINI | Kiesselbach plexus (Little's area) | Case / flashcards | flashcard |
| image56 | GEMINI | CRSsNP vs CRSwNP | Flashcards | flashcard |

## Laryngology

| Image | License | Shows | Submodule | Placement |
|---|---|---|---|---|
| fig_52_vocal_fold_layers (`52_vocal_fold_microarchitecture_gemini.png`) | GEMINI | True Vocal Fold Microarchitecture | Vocal fold layers + flashcard 3 + diagram | note + flashcard + diagram (SVG replaced with image occlusion) |
| fig_53_laryngeal_nerve_supply (`53_laryngeal_nerve_supply_wikimedia.png`) | OPEN (Wikimedia) | SLN/RLN Innervation | Laryngeal nerve supply | note |
| fig_54_laryngeal_cartilage_framework (`54_laryngeal_cartilage_framework_gemini.png`) | GEMINI | Laryngeal Cartilage Framework | Flashcard 1 + diagram | flashcard + diagram (SVG replaced with image occlusion) |
| fig_55_rln_course (`55_recurrent_laryngeal_nerve_course_gemini.png`) | GEMINI | RLN Asymmetric Course | Flashcard 5 | flashcard |
| fig_56_vocal_process_granuloma (`56_vocal_process_granuloma_wikimedia.png`) | OPEN (Wikimedia) | Vocal Process Granuloma | Clinical section + flashcard 12 | block + flashcard |
| fig_57_tracheostomy_tubes (`57_tracheostomy_tube_types_wikimedia.png`) | OPEN (Wikimedia) | Tracheostomy Tube Types | Clinical section | block |
| fig_58_reinkes_edema (`58_reinkes_edema_wikimedia.png`) | OPEN (Wikimedia) | Reinke's Edema | Flashcard 11 | flashcard (no CLAUDE_FIGURE marker in tagged doc; wired per manifest row only) |
| image57 | GEMINI | Vocal fold layers (cover-body) | Vocal fold layers | note |
| image58 | OPEN (Wikimedia) | Laryngeal nerves (SLN/RLN) | Laryngeal nerve supply | note |
| image59 | GEMINI | Laryngeal cartilage framework | Labeled diagrams | diagram |
| image60 | GEMINI | Laryngeal subsites (supra/glottis/sub) | Labeled diagrams | diagram (occlusion; replaces SVG) |
| image61 | GEMINI | Recurrent laryngeal nerve course | Labeled diagrams | diagram (occlusion) |
| image62 | OPEN (Wikimedia) | Vocal folds, endoscopic (glottis open) | Vocal process granuloma | note |
| image63 | OPEN (Wikimedia) | Tracheostomy tube in place | Tracheostomy | note |

## Head & Neck

| Image | License | Shows | Submodule | Placement |
|---|---|---|---|---|
| fig_59_salivary_glands_ducts (`59_salivary_glands_ducts_knowledgeworks.png`) | CC BY (KnowledgeWorks) | Major Salivary Glands & Ducts | Note + Labeled diagrams + flashcard 3 | note + diagram (SVG replaced) + flashcard |
| fig_60_thyroid_parathyroid_vasculature (`60_thyroid_parathyroid_vasculature_rcsi.png`) | CC BY-NC-SA (RCSI) | Thyroid/Parathyroid Vasculature & RLN | Note + Labeled diagrams + flashcard 4 | note + diagram (SVG replaced) + flashcard |
| fig_61a_oral_vs_oropharynx_coronal (`61a_oral_cavity_oropharynx_coronal_openstax.png`) | OPEN (OpenStax CC BY) | Oral Cavity vs Oropharynx, Coronal | Note + flashcard 6 | note + flashcard |
| fig_61b_oral_vs_oropharynx_sagittal (`61b_oral_cavity_oropharynx_sagittal_openstax.png`) | OPEN (OpenStax CC BY) | Oral Cavity vs Oropharynx, Sagittal | Note + Labeled diagrams | note + diagram (SVG replaced) |
| fig_62_neck_levels_i_vii (`62_neck_levels_i_vii_wikimedia.png`) | OPEN (Wikimedia) | Cervical Lymph Node Levels I-VII | Labeled diagrams + flashcard 1 | diagram (SVG replaced) |
| fig_63_parotid_facial_nerve (`63_parotid_facial_nerve_rcsi.png`) | CC BY-NC-SA (RCSI) | Parotid Region & Facial Nerve | Labeled diagrams + flashcard 2 | diagram (SVG replaced) + flashcard |
| fig_65_bethesda_system (`65_bethesda_fna_algorithm_gemini.png`) | GEMINI | Bethesda System for Thyroid Cytopathology | Flashcards | flashcard 14 |
| fig_66_thyroid_nodule_workup (`66_thyroid_nodule_workup_algorithm_gemini.png`) | GEMINI | Thyroid Nodule Workup Algorithm | Flashcards | flashcard 12 |
| image64 | CC BY (KnowledgeWorks) | Salivary glands & ducts | The salivary glands | note |

## Pediatric ENT (new batch only, no old-batch figures existed for this module)

| Image | License | Shows | Submodule | Placement |
|---|---|---|---|---|
| fig_67_pediatric_airway (`67_pediatric_vs_adult_airway_gemini.png`) | GEMINI | Pediatric vs Adult Airway Anatomy | Note + Labeled diagrams + flashcard 1 | note + diagram (SVG replaced) + flashcard (no CLAUDE_FIGURE marker in tagged doc; wired per manifest + inline `**` instruction) |
| fig_68_pediatric_eustachian (`68_pediatric_vs_adult_eustachian_tube_gemini.png`) | GEMINI | Pediatric vs Adult Eustachian Tube | Note + Labeled diagrams + flashcard 2 | note + diagram (SVG replaced) + flashcard (same as above) |
| fig_69_branchial_cleft (`69_second_branchial_cleft_tract_gemini.png`) | GEMINI | Second Branchial Cleft Tract | Note + Labeled diagrams | note + diagram (SVG replaced) (same as above) |
| fig_70_waldeyers_ring (`70_waldeyers_ring_lymphoid_gemini.png`) | GEMINI | Waldeyer's Ring | Note + Labeled diagrams + flashcard 3 | note + diagram (SVG replaced) + flashcard (same as above) |
| fig_71_congenital_neck_masses (`71_congenital_neck_masses_by_location_gemini.png`) | GEMINI | Congenital Neck Masses by Location | Clinical section | block (same as above) |

## Sleep Surgery & OSA (new batch only)

| Image | License | Shows | Submodule | Placement |
|---|---|---|---|---|
| fig_72_osa_obstruction_sites (`72_upper_airway_obstruction_sites_tan2021.png`) | COPYRIGHTED (journal figure, Tan/Yang/Lim 2021) | Sites of Upper Airway Obstruction | Note | note |
| fig_73_friedman_grades (`73_friedman_tongue_position_grades_researchgate.png`) | COPYRIGHTED (ResearchGate/Friedman) | Friedman Tongue Position Grades I-IV | Note + Labeled diagrams | note + diagram (SVG replaced) |
| fig_74_hypoglossal_nerve_genioglossus (`74_hypoglossal_nerve_genioglossus_mashaqi2021.png`) | COPYRIGHTED (journal figure, Mashaqi 2021) | Hypoglossal Nerve, Genioglossus, Tongue Protrusion | Note + Labeled diagrams | note + diagram (SVG replaced) |
| fig_75_cpap_splinting (`75_cpap_pneumatic_splinting_gemini.png`) | GEMINI | How CPAP Works | Note + Labeled diagrams | note + diagram (SVG replaced) |
| fig_76_levels_obstruction (`76_levels_of_upper_airway_obstruction_diagram_gemini.png`) | GEMINI | Levels of Upper Airway Obstruction | Labeled diagrams | diagram (SVG replaced; no CLAUDE_FIGURE marker in tagged doc, wired per manifest) |
| fig_77_hgns_device (`77_hypoglossal_nerve_stimulator_device_xia2023.png`) | COPYRIGHTED (journal figure, Xia 2023) | Hypoglossal Nerve Stimulator Components | Labeled diagrams + new flashcard | diagram (SVG replaced) + new flashcard (per "add this Q to the flashcards!!" instruction) |

## Facial Plastics & Trauma (new batch only)

| Image | License | Shows | Submodule | Placement |
|---|---|---|---|---|
| fig_78_facial_buttresses (`78_facial_buttresses_vertical_horizontal_gemini.png`) | GEMINI | Vertical & Horizontal Facial Buttresses | Note + Labeled diagrams + flashcard 1 | note + diagram (SVG replaced) + flashcard |
| fig_79a_parotid_branches (`79a_parotid_facial_nerve_branches_gemini.png`) | GEMINI | Facial Nerve Branches Through Parotid | Note + Labeled diagrams + flashcard 4 | note + diagram (SVG replaced) + flashcard |
| fig_79b_stensens_duct (`79b_stensens_duct_course_gemini.png`) | GEMINI | Stensen's Duct Course | Note | note |
| fig_80_pitanguys_line (`80_pitanguys_line_frontal_branch_statpearls.png`) | COPYRIGHTED (StatPearls) | Pitanguy's Line & Frontal Branch | Note + Labeled diagrams + flashcard 5 | note + diagram (SVG replaced) + flashcard |
| fig_81_orbital_blowout (`81_orbital_floor_blowout_fracture_wikimedia.png`) | OPEN (Wikimedia) | Orbital Floor Blowout Fracture | Note + Labeled diagrams + flashcard 9 | note + diagram (SVG replaced) + flashcard |
| fig_82_le_fort_fractures (`82_le_fort_fractures_i_ii_iii_wikimedia.png`) | OPEN (Wikimedia) | Le Fort Fracture Classification | Clinical section + flashcard 2 | block + flashcard |
| fig_83_reconstructive_ladder (`83_reconstructive_ladder_gemini.png`) | GEMINI | Reconstructive Ladder | Clinical section + flashcard 12 | block + flashcard |
| fig_84_mandible_fractures (`84_mandible_fractures_ring_rule_wikimedia.png`) | OPEN (Wikimedia) | Mandible Fracture Patterns | Clinical section + flashcard | block + flashcard |

## Emergencies & Red Flags (new batch only)

| Image | License | Shows | Submodule | Placement |
|---|---|---|---|---|
| fig_85_airway_triage (`85_airway_triage_signs_obstruction_wikimedia.png`) | OPEN (Wikimedia) | Airway Triage Signs | Note | note |
| fig_86_deep_neck_spaces (`86_deep_neck_spaces_communication_wikimedia.png`) | OPEN (Wikimedia) | Deep Neck Space Communications | Note + Labeled diagrams | note + diagram (SVG replaced with image occlusion) |
| fig_87_neck_zones (`87_zones_of_the_neck_penetrating_trauma_gemini.png`) | GEMINI | Zones I/II/III of the Neck | Note + Labeled diagrams | **NOT WIRED** — source file `images/image90.png` is missing from the unzipped export (only image1-89.png present); the `rename_unzipped_images.py.md` mapping references image90 for this figure but it was never delivered. The "Zones of the neck" note and the "Zones I, II, and III" diagram were left as-is (SVG diagram untouched). Needs the owner to supply the missing image. |
| "Signs of impending airway obstruction" diagram | — | — | Labeled diagrams | **DELETED** per explicit doc instruction "REMOVE THIS, no good figure" — the `airway-red-flags` SVG diagram was removed from `content/emergencies.js` entirely, not replaced. |
| image65 | CC BY-NC-SA (RCSI) | Thyroid & parathyroid + vasculature | Thyroid & parathyroid anatomy | note |
| image66 | OPEN (OpenStax CC BY) | Oral cavity, anterior view | Oral cavity vs oropharynx | note |
| image67 | OPEN (OpenStax CC BY) | Oral cavity vs oropharynx, sagittal | Oral cavity vs oropharynx | note |
| image68 | OPEN (Wikimedia) | Neck nodal levels, colour (II subdivisions) | Labeled diagrams | diagram (already embedded) |
| image69 | CC BY-NC-SA (RCSI) | Parotid region (facial nerve, vessels) | Labeled diagrams | diagram |
| image70 | GEMINI | Thyroid nodule workup sequence | Thyroid nodule: the workup order | note |

# JeffENT Content Review Export

Generated from content/*.js for clinical fact-checking. Every module, card, case, clinical block, table, diagram, glossary entry, and question bank currently in the app is below, in full, with no summarizing or omission. Each item lists its module id and field path so corrections can be traced back to source.


_Generated 2026-10-05_

> **How to use:** paste a module file below (or ALL.md) into OpenEvidence / any reviewer, followed by an instruction such as
> "Fact-check every claim against current guidelines, flag anything outdated or wrong, and propose exact replacement wording. Keep our style: no em dashes, plain clinical language."
> Send changes back to Claude Code with the item id (e.g. `[card-id]`) so edits land in `content/*.js`. This folder is generated: do not edit it by hand.

---

## Module: Key Abbreviations (`abbreviations`)
- version: 0.1.0-draft
- status: DRAFT, pending faculty review. v0.1.0: compiled from the abbreviations already introduced across every track's content (otology, rhinology, laryngology, head & neck, pediatric, sleep, facial plastics,
- facultyReviewer: ""
- curriculum anchors: AAO-HNS Otolaryngology Core Curriculum, terminology and abbreviations used throughout the core curriculum; UKMLA Content Map (GMC), abbreviations cross-cut every presentation/condition this platform covers
- subtitle: The high-yield abbreviations used across every track on this platform, gathered into one lookup page.

### Clinical blocks (8)

**[abbrev-exam-general] General & exam**

| Abbreviation | Stands for |
| --- | --- |
| CN | Cranial nerve (I-XII) |
| TM | Tympanic membrane |
| EAC | External auditory canal |
| SNHL | Sensorineural hearing loss |
| CHL | Conductive hearing loss |
| HINTS | Head Impulse, Nystagmus, Test of Skew (bedside vertigo exam) |
| SBAR | Situation, Background, Assessment, Recommendation (handoff framework) |
| ATLS | Advanced Trauma Life Support |
| CT | Computed tomography |
| MRI | Magnetic resonance imaging |
| PET | Positron emission tomography |
| FNA | Fine-needle aspiration |
| CSF | Cerebrospinal fluid |
| UMN / LMN | Upper motor neuron / lower motor neuron |

**[abbrev-otology] Otology & neurotology**

| Abbreviation | Stands for |
| --- | --- |
| AOM | Acute otitis media |
| OME | Otitis media with effusion |
| BPPV | Benign paroxysmal positional vertigo |
| IAC | Internal auditory canal |
| ISSNHL | Idiopathic sudden sensorineural hearing loss |

**[abbrev-rhinology] Rhinology & skull base**

| Abbreviation | Stands for |
| --- | --- |
| OMC | Ostiomeatal complex |
| FESS / ESS | (Functional) endoscopic sinus surgery |
| CRS | Chronic rhinosinusitis |
| CRSsNP / CRSwNP | CRS without / with nasal polyps |
| AERD | Aspirin-exacerbated respiratory disease (Samter's triad) |
| ARIA | Allergic Rhinitis and its Impact on Asthma (classification) |
| NARES | Non-allergic rhinitis with eosinophilia syndrome |
| SCIT / SLIT | Subcutaneous / sublingual immunotherapy |
| JNA | Juvenile nasopharyngeal angiofibroma |
| HHT | Hereditary hemorrhagic telangiectasia (Osler-Weber-Rendu) |
| ICA | Internal carotid artery |

**[abbrev-laryngology] Laryngology, voice & airway**

| Abbreviation | Stands for |
| --- | --- |
| RLN | Recurrent laryngeal nerve |
| SLN | Superior laryngeal nerve |
| EBSLN | External branch of the superior laryngeal nerve |
| LPR | Laryngopharyngeal reflux |
| FEES | Fiberoptic endoscopic evaluation of swallowing |
| RRP | Recurrent respiratory papillomatosis |
| VCD | Vocal cord dysfunction |

**[abbrev-head-neck] Head & neck oncology**

| Abbreviation | Stands for |
| --- | --- |
| EBV | Epstein-Barr virus |
| NPC | Nasopharyngeal carcinoma |
| TI-RADS | Thyroid Imaging Reporting and Data System |
| TNM | Tumor, Node, Metastasis (staging) |
| IJV | Internal jugular vein |

**[abbrev-pediatric-sleep] Pediatric ENT & sleep/airway**

| Abbreviation | Stands for |
| --- | --- |
| OSA | Obstructive sleep apnea |
| AHI | Apnea-hypopnea index |
| STOP-BANG | OSA screening questionnaire (Snoring, Tiredness, Observed apnea, Pressure, BMI, Age, Neck, Gender) |
| CPAP | Continuous positive airway pressure |
| UPPP | Uvulopalatopharyngoplasty |
| MMA | Maxillomandibular advancement |
| DISE | Drug-induced sleep endoscopy |
| VOTE | Velum, Oropharynx, Tongue base, Epiglottis (DISE grading) |
| HGNS | Hypoglossal nerve stimulation |
| CMV | Cytomegalovirus |
| GJB2 | Gap junction beta-2 gene (connexin 26) |

**[abbrev-facial-plastics] Facial plastics & trauma**

| Abbreviation | Stands for |
| --- | --- |
| SMAS | Superficial musculoaponeurotic system |
| ZMC | Zygomaticomaxillary complex |
| NOE | Naso-orbito-ethmoid (fracture) |
| RAPD | Relative afferent pupillary defect |

**[abbrev-emergencies] Emergencies & red flags**

| Abbreviation | Stands for |
| --- | --- |
| PTA | Peritonsillar abscess |
| RPA | Retropharyngeal abscess |
| DNSI | Deep neck space infection |
| HAE | Hereditary angioedema |
| C1-INH | C1-esterase inhibitor |
| CICO | Can't intubate, can't oxygenate |
| CDI | Clostridioides difficile infection |
| GPA | Granulomatosis with polyangiitis |

---

## Module: Anatomy Atlas (`anatomy-atlas`)
- version: 0.5.0-draft
- status: DRAFT, pending faculty review. v0.3.0: added a cross-cutting depth pass covering genuinely missing foundational anatomy not owned by any subspecialty track, the facial nerve's intratemporal segments (
- facultyReviewer: ""
- curriculum anchors: AAO-HNS Otolaryngology Core Curriculum, anatomy objectives, mapped per structure as diagrams are added; Delphi priority topic list, map exact items with faculty sponsor; UKMLA Content Map (GMC), pure-anatomy recall cards are cross-tagged to the presentation/condition each structure underlies, for search and coverage purposes only; this track carries no clinical management content
- subtitle: Labeled diagrams and imaging stacks, cross-cutting every subspecialty. Grows alongside the topic tracks.

### Anatomy notes

**The temporal bone in four parts** (tags: Petrous part · Mastoid · Jaw joint)

[figure: Overview of the temporal bone's four parts (squamous, tympanic, petrous, mastoid) and the TMJ formed by its squamous portion.]
- Squamous part: lateral flat portion; its zygomatic process and glenoid (mandibular) fossa form the temporomandibular joint: the anatomic reason TMJ pathology causes referred otalgia.
- Tympanic part: forms the anterior, inferior, and part of the posterior wall of the external auditory canal (bony EAC).
- Petrous part: dense pyramid that houses the middle and inner ear and the intratemporal facial nerve; separates the middle from the posterior cranial fossa (the focus of otology/neurotology).
- Mastoid part: postauricular air-cell system continuous with the middle ear via the aditus ad antrum; site of mastoiditis and the surgical corridor for mastoidectomy/cochlear implantation.A fifth part, the small styloid process, is sometimes listed separately: it anchors the stylohyoid, styloglossus, and stylopharyngeus; an elongated styloid causes Eagle syndrome (throat/facial pain on swallowing or neck rotation).
Petrous Contents: Middle & Inner Ear Structures

- Middle ear: the ossicles (malleus -> incus -> stapes) transmit sound from the tympanic membrane to the oval window; connected to the nasopharynx by the Eustachian tube.
- Inner ear (bony labyrinth): the cochlea (hearing) and the vestibule plus three semicircular canals (balance).
- Internal auditory canal (IAC): carries CN VII (facial), CN VIII (vestibulocochlear), and the labyrinthine artery from the posterior fossa into the inner ear.Facial Nerve Course Through the Temporal Bone: CN VII takes a long, turning course through the temporal bone (the fallopian/facial canal), which is why temporal bone disease and surgery so often threaten the face.

- Intracanalicular (IAC): within the internal auditory canal; Bill's bar separates it from the superior vestibular nerve at the fundus.
- Labyrinthine: the shortest, narrowest segment (most vulnerable to edema, e.g. Bell's palsy) -> ends at the geniculate ganglion (first genu), where the greater superficial petrosal nerve branches off (lacrimation).
- Tympanic (horizontal): runs above the oval window, under the lateral semicircular canal; the most common site of bony dehiscence, exposing it to middle-ear disease (cholesteatoma).
- Mastoid (vertical): descends to exit at the stylomastoid foramen; gives off the nerve to stapedius and the chorda tympani (taste to the anterior two-thirds of the tongue plus submandibular/sublingual secretion) before exiting.Landmarks that keep it safe in surgery: the lateral semicircular canal (points to the tympanic segment) and the facial recess (bounded by the facial nerve medially, chorda tympani laterally, and the incus buttress superiorly: the surgical window to the middle ear in cochlear implantation).
Quick-reference: canals and foramina of the temporal bone region
Canal / foramenContentsInternal auditory canalCN VII, CN VIII, labyrinthine arteryStylomastoid foramenCN VII exits the skullCarotid canalInternal carotid arteryJugular foramen (at the petrous-occipital junction)Internal jugular vein, CN IX, X, XIThe carotid canal and jugular bulb sit immediately deep to the middle-ear floor: the anatomic reason a pulsatile middle-ear mass (aberrant carotid artery, a high or dehiscent jugular bulb, glomus tumor) must never be biopsied blindly.
Clinical Relevance

- Acute mastoiditis: suppurative infection of the mastoid air cells, usually complicating AOM; postauricular erythema/tenderness with a protruding pinna. Can erode into a subperiosteal abscess, through the tip (Bezold abscess), or intracranially (sinus thrombosis, meningitis). Get a CT temporal bone if a complication is suspected.
- Temporal bone fracture: longitudinal (more common; EAC/ossicle disruption, conductive loss) vs transverse (crosses the otic capsule -> SNHL, vertigo, a higher rate of facial palsy). Immediate/complete facial palsy after trauma suggests transection and may warrant exploration; delayed/incomplete palsy is usually observed.
- Cholesteatoma erodes the dehiscent tympanic facial segment and the lateral semicircular canal: the anatomic basis for facial palsy and a positive fistula test.

**Paranasal sinuses** (tags: Paranasal sinuses · Drainage pathways · Sinusitis)

[figure: The four paranasal sinuses and where each one drains.]
- Maxillary (largest): ostium sits high on the medial wall and drains into the middle meatus, a drainage-against-gravity design that makes maxillary sinusitis common.
- Frontal: drains via the frontonasal duct into the middle meatus.
- Ethmoid: anterior cells drain to the middle meatus, posterior cells to the superior meatus.
- Sphenoid: drains into the sphenoethmoidal recess; lies close to the pituitary, optic nerve, and cavernous sinus, so sphenoid disease can have neuro-ophthalmic consequences.

**The neck as fascial layers and triangles** (tags: Fascial planes · Neck triangles · Neck mass)

[figure: Deep cervical fascial layers, the carotid sheath, and the surface triangles of the neck, plus a nodal-level table.]
- Fascial layers: superficial cervical fascia; deep cervical fascia (superficial/investing, pretracheal, prevertebral) plus the carotid sheath.
- Triangles: bounded by the sternocleidomastoid, trapezius, mandible, and midline (anterior and posterior triangles, further subdivided).
- Clinical relevance: deep neck infections are described by fascial space (how they spread) and by triangle/level (where a mass sits and what it is likely to be).Deep cervical fascial layers:
Fascial layerKey structures enclosedBoundaries / featuresClinical relevanceSuperficial cervical fascia (subcutaneous)Platysma, cutaneous cervical plexus branches, superficial veins (external jugular), superficial nodesBetween dermis and deep fascia; continuous sheetNot a true deep-neck space but can hold infection; plane for face-lift/platysmal flapsInvesting (superficial) layer of deep cervical fasciaEncircles the neck; splits around SCM and trapezius, and the parotid and submandibular glandsSplits around 2 muscles (SCM, trapezius) and 2 glands (parotid, submandibular); runs mandible to manubriumSuperficial surgical plane; roof of the anterior and posterior trianglesMiddle (pretracheal), muscular divisionStrap muscles: sternohyoid, sternothyroid, thyrohyoid, omohyoidDeep to investing layer, superficial to visceraEncountered on approach in thyroid/tracheal surgeryMiddle (pretracheal), visceral divisionThyroid, trachea, esophagus, pharynx, larynx, recurrent laryngeal nerves; posterosuperiorly the buccopharyngeal fasciaBetween the two carotid sheaths; anterior wall of the retropharyngeal spacePretracheal-space infection can spread directly to the anterior mediastinumDeep (prevertebral) layerPrevertebral and paraspinal muscles, scalenes, phrenic nerve, cervical roots, sympathetic chain, vertebral vesselsEncircles the vertebral column; continuous with scalene fasciaFloor of the posterior triangle; site of brachial/cervical plexus blocksAlar fascia(no specific contents)Coronal sheet on the prevertebral fascia; separates retropharyngeal space (anterior) from danger space (posterior)Divides the retropharyngeal space from the danger space, which reaches the posterior mediastinumCarotid sheathCarotid artery, internal jugular vein, vagus nerve (CN X); deep cervical nodes; sympathetic plexus on its surfaceFormed by all three deep layersA direct longitudinal conduit for deep-neck infection spread toward the mediastinumLongitudinal Extent of Deep Neck Spaces
SpaceExtends toRetropharyngealSkull base to about C6-T4 (where the alar and buccopharyngeal fascia fuse)DangerSkull base to the diaphragm (posterior mediastinum)PrevertebralAlong the spine, potentially to the coccyxCervical nodal levels (Robbins classification):
LevelLocation and boundariesMain nodal contentsPrimary drainageIa (submental)Between the anterior bellies of digastric, above the hyoidSubmental nodesChin, lower lip, floor of mouth, tongue tipIb (submandibular)Submandibular triangleSubmandibular gland and nodesOral cavity, anterior faceIIa / IIb (upper jugular)Skull base to hyoid, around the upper internal jugular vein; split by the spinal accessory nerve (CN XI)Upper deep cervical nodesOral cavity, nasopharynx, oropharynx, larynx, parotidIII (mid jugular)Hyoid to cricoidMiddle deep cervical nodesLarynx, hypopharynx, oropharynxIV (lower jugular)Cricoid to clavicleLower deep cervical nodesLarynx, thyroid, hypopharynx, cervical esophagusVa / Vb (posterior triangle)Behind the sternocleidomastoid, in front of trapezius; split by the cricoid planeSpinal accessory and transverse cervical nodesNasopharynx, posterior scalp and neck, thyroidVI (central compartment)Hyoid to sternal notch, between the carotid sheathsPretracheal, paratracheal, prelaryngeal (Delphian) nodesThyroid, glottic and subglottic larynx, hypopharynx, cervical esophagusVII (superior mediastinal)Below the sternal notchSuperior mediastinal nodesThyroid, cervical esophagus

**Cranial nerves of the head & neck** (tags: Cranial nerves · Skull-base exits)

[figure: The twelve cranial nerves, with emphasis on the seven relevant to ENT, and their skull-base exits.]Of the twelve cranial nerves, ENT anatomy revolves around several in particular:

- CN V (trigeminal: facial/sinus sensation)
- CN VII (facial: facial movement, runs through the parotid)
- CN VIII (vestibulocochlear: hearing/balance)
- CN IX (glossopharyngeal: oropharyngeal sensation, gag)
- CN X (vagus, including the recurrent laryngeal nerve: laryngeal motor/sensory)
- CN XI (accessory: sternocleidomastoid/trapezius, at risk in neck dissection)
- CN XII (hypoglossal: tongue movement)All twelve cranial nerves and their skull-base exits:
NerveSkull base exitFunctionI OlfactoryCribriform plateSmellII OpticOptic canalVisionIII OculomotorSuperior orbital fissureMost eye movement, eyelid elevation, pupil constrictionIV TrochlearSuperior orbital fissureSuperior oblique (eye down and in)V1 OphthalmicSuperior orbital fissureSensation: forehead, scalp, corneaV2 MaxillaryForamen rotundumSensation: midface, upper teeth, palateV3 MandibularForamen ovaleSensation: lower face and tongue; muscles of masticationVI AbducensSuperior orbital fissureLateral rectus (eye out)VII FacialInternal acoustic meatus (exits at stylomastoid foramen)Facial movement, taste (anterior two-thirds of tongue), lacrimation, salivationVIII VestibulocochlearInternal acoustic meatusHearing and balanceIX GlossopharyngealJugular foramenPharyngeal sensation, gag, taste (posterior third), parotid secretionX VagusJugular foramenLarynx and pharynx motor/sensory (recurrent laryngeal nerve); parasympathetic to thorax and abdomenXI AccessoryJugular foramenTrapezius and sternocleidomastoidXII HypoglossalHypoglossal canalTongue movementForamen spinosum is not a cranial nerve exit: it carries the middle meningeal artery, and injury there causes an epidural hematoma. It's included here for completeness since it's frequently tested alongside the skull-base foramina above.
ENT relevance of each cranial nerve:
NerveENT relevance (one-liner)I OlfactoryAnosmia from chronic rhinosinusitis, nasal polyps, or head trauma (cribriform shear); loss of smell is often reported as "loss of taste."II OpticThreatened in sphenoid/posterior ethmoid disease and FESS (the optic nerve may be dehiscent in an Onodi cell); vision change with sinus disease is an emergency.III, IV, VI Oculomotor / Trochlear / AbducensOcular motility; diplopia signals orbital (blow-out, orbital cellulitis) or cavernous sinus involvement. CN VI palsy is the classic first cranial neuropathy in nasopharyngeal carcinoma and petrous apicitis (Gradenigo syndrome).V TrigeminalFacial/sinus/dental sensation and mastication; V2 numbness flags maxillary/ethmoid/nasopharyngeal tumor and perineural spread (adenoid cystic carcinoma). Afferent limb of the corneal reflex.VII FacialFacial movement; runs through the parotid and temporal bone. An LMN palsy is Bell's, cholesteatoma, necrotizing otitis externa, or parotid malignancy until proven otherwise. Also taste (anterior two-thirds tongue), tearing, and salivation.VIII VestibulocochlearHearing and balance; asymmetric SNHL or unilateral tinnitus -> MRI IAC to exclude vestibular schwannoma.IX GlossopharyngealOropharyngeal/tonsillar sensation, the gag reflex (afferent limb), taste posterior third, parotid secretion; referred otalgia (Jacobson's nerve) after tonsillectomy or from tongue-base/oropharyngeal cancer.X VagusLaryngeal/pharyngeal motor and sensory via the recurrent laryngeal nerve; hoarseness or vocal-fold paralysis can be the first sign of thyroid, lung apex, mediastinal, or skull-base disease. Referred otalgia (Arnold's nerve).XI AccessorySCM/trapezius; at risk in level II/V neck dissection -> shoulder droop and winging if injured.XII HypoglossalTongue movement; the tongue deviates toward the injured side; at risk in submandibular/neck surgery and skull-base (hypoglossal canal) tumors.UMN vs. LMN Facial Palsy: an upper motor neuron (central/stroke) lesion spares the forehead (bilateral cortical input to the upper face), while a lower motor neuron (peripheral) lesion involves the forehead.

- Forehead-involving palsy is peripheral: Bell's palsy (a diagnosis of exclusion) or an ENT cause: cholesteatoma, necrotizing otitis externa, parotid malignancy, temporal bone fracture.
- Forehead-sparing palsy -> treat as a stroke.Referred Otalgia: Convergent Innervation of the Ear
The ear receives sensation from CN V (auriculotemporal), CN VII, CN IX (Jacobson's), CN X (Arnold's), and C2-C3. This shared innervation is why a normal-looking ear can hurt from disease at the TMJ, teeth, tonsil, tongue base, or larynx. Otalgia with a normal ear exam in an adult smoker should prompt flexible nasopharyngolaryngoscopy of the aerodigestive tract for malignancy.
Nerve Groupings by Skull-Base Exit

- Jugular foramen (IX, X, XI): combined lower-cranial-nerve palsies (dysphagia, hoarseness, shoulder weakness) suggest a glomus jugulare tumor, skull-base metastasis, or nasopharyngeal carcinoma extension.
- Cavernous sinus / superior orbital fissure (III, IV, V1, V2, VI): ophthalmoplegia plus facial sensory loss; think cavernous sinus thrombosis (which can complicate the facial "danger triangle" and sinusitis) or a skull-base tumor.
- Internal acoustic meatus (VII, VIII): combined facial weakness plus SNHL/vertigo points to a cerebellopontine-angle lesion (vestibular schwannoma).Non-Motor Fibers of CN VII and CN IX

- CN VII is more than facial movement: the chorda tympani carries taste (anterior two-thirds of the tongue) and parasympathetics to the submandibular/sublingual glands; the greater petrosal nerve drives lacrimation. This is why facial nerve lesions can also cause dry eye, altered taste, and hyperacusis (stapedius).
- CN IX carries taste and sensation of the posterior third of the tongue, the afferent limb of the gag reflex, and secretomotor fibers to the parotid (via the otic ganglion).

**Facial nerve: intratemporal segments** (tags: Facial nerve segments · Bell's palsy · Ramsay Hunt)

[figure: The labyrinthine, tympanic, and mastoid intratemporal segments of the facial nerve and the geniculate ganglion (Ramsay Hunt syndrome).]
- Three intratemporal segments: labyrinthine, tympanic, and mastoid, meeting at the geniculate ganglion (between labyrinthine and tympanic).
- Labyrinthine: narrowest and most vulnerable to swelling; the segment most often compressed in Bell's palsy.
- Tympanic: runs along the medial middle-ear wall just above the oval window; at risk in cholesteatoma and middle-ear surgery.
- Mastoid (vertical): descends to the stylomastoid foramen, giving off the nerve to stapedius and the chorda tympani.
- Ramsay Hunt syndrome (herpes zoster oticus): zoster reactivation at the geniculate ganglion; facial palsy with a vesicular ear-canal/pinna rash, usually more severe and slower to recover than Bell's palsy.

**Branchial arch, pouch, and cleft embryology** (tags: Branchial arches · Second branchial cleft anomalies)

Branchial arch derivatives:
ArchCartilageSkeletal derivativesMusclesCranial nerve1st (mandibular)Meckel'sMalleus, incus, mandible, sphenomandibular ligamentMuscles of mastication, mylohyoid, anterior belly of digastric, tensor tympani, tensor veli palatiniCN V2nd (hyoid)Reichert'sStapes, styloid process, lesser horn and upper body of hyoid, stylohyoid ligamentMuscles of facial expression, stapedius, stylohyoid, posterior belly of digastric, platysmaCN VII3rd(none)Greater horn and lower body of hyoidStylopharyngeusCN IX4th/6th(none)Laryngeal cartilages (thyroid, cricoid, arytenoid)Pharyngeal and laryngeal muscles (cricothyroid, levator veli palatini, intrinsic laryngeal muscles)CN X (SLN for 4th, RLN for 6th)Pharyngeal pouches and clefts:
StructureDerivativeClinical correlate1st pouchEustachian tube and middle-ear cavityTympanic cavity anatomy2nd pouchTonsillar fossa and palatine tonsilSite of the 2nd cleft internal opening3rd pouchInferior parathyroids and thymusMigrate caudally (DiGeorge if disrupted)4th pouchSuperior parathyroids (and ultimobranchial body, C cells)3rd/4th pouch syndrome (DiGeorge/velocardiofacial)1st cleftExternal auditory canal (only cleft that normally persists)1st branchial cleft anomalies, near the parotid and facial nerve2nd, 3rd, 4th cleftsNormally obliterate (cervical sinus of His)Persistence causes cysts/sinuses/fistulas; 2nd cleft is about 90 to 95% of anomalies
- Components: arches; pouches (internal, endoderm-lined); clefts (external, ectoderm-lined).
- First arch (Meckel's cartilage): malleus, incus, mandible, muscles of mastication; CN V.
- Second arch (Reichert's cartilage): stapes, styloid process, lesser horn of hyoid, stapedius; CN VII.
- Pouches: 1st becomes the Eustachian tube and middle-ear cavity; 2nd the tonsillar fossa; 3rd and 4th the parathyroids and thymus.
- Clefts: only the 2nd normally persists as a tract, which is why second branchial cleft cysts/sinuses dominate clinically.

### Anatomy diagrams (5)

**Diagram: The temporal bone in four parts**

Squamous, tympanic, petrous, and mastoid. Name each, then reveal.

_Image source: The Temporal Bone in Four Parts. theskeletalsystem.net._
- Zygomatic process: anterior projection of the squamous part that joins the zygomatic bone to form the zygomatic arch.
- Squamous part: flat, fan-shaped lateral portion of the temporal bone; forms the mandibular fossa/articular tubercle side of the TMJ.
- Articular tubercle: anterior bony ridge of the mandibular fossa; the mandibular condyle translates onto it when the jaw opens wide.
- Mandibular fossa: concave articular surface on the squamous part that receives the mandibular condyle to form the TMJ.
- Opening for the external auditory meatus: bony entrance to the ear canal, framed largely by the tympanic part.
- Tympanic part: forms most of the bony external auditory canal (anterior, inferior, and part of the posterior wall).
- Styloid process: slender projection anchoring the stylohyoid ligament and stylohyoid/styloglossus/stylopharyngeus muscles; a key parapharyngeal-space landmark.
- Petromastoid part: the composite term for the petrous and mastoid portions, which arise from a shared ossification center and form the posteromedial temporal bone.
- Petrous part: dense pyramidal bone housing the middle and inner ear, the otologic core of the temporal bone.
- Mastoid part: air-cell system posterior to the ear canal; relevant to mastoiditis and cochlear implant surgery.
- Mastoid process: bony projection palpable behind the ear canal; attachment site for sternocleidomastoid, splenius capitis, and longissimus capitis.
- Mastoid notch (digastric groove): groove medial to the mastoid process that gives origin to the posterior belly of digastric.
- Zygomatic process, medial view: same anterior projection of the squamous part seen from the opposite side.
- Squamous part, medial view: the inner surface of the flat lateral portion of the temporal bone.
- Opening for the internal auditory meatus: transmits CN VII and CN VIII (plus the labyrinthine artery) into the petrous bone.
- Petrous part, medial view: the same pyramidal bone housing the middle/inner ear, seen from its cranial (medial) surface.
- Styloid process, medial view: the same slender muscle/ligament attachment site seen from the medial aspect.

**Diagram: The four paranasal sinuses and their drainage**

Maxillary, frontal, ethmoid, sphenoid. Name each and its drainage site, then reveal.

_Image source: Paranasal Sinuses and Their Drainage Pathways. Wikimedia Commons._
- Semilunar hiatus: the middle-meatus groove receiving the openings of the frontal, maxillary, and anterior ethmoidal sinuses, the ostiomeatal complex's key drainage channel.
- Ethmoid bulla: the largest, most constant anterior ethmoid air cell, bulging into the middle meatus; carries the opening of the middle ethmoid sinus cells.
- Opening of sphenoid sinus: drains into the sphenoethmoidal recess, high and posterior; the sinus borders the pituitary, optic nerve, and cavernous sinus.
- Opening of eustachian tube: pharyngeal (torus tubarius) opening on the lateral nasopharyngeal wall, posterior to the inferior turbinate; equalizes middle-ear pressure.
- Opening of nasolacrimal duct: drains tears into the inferior meatus, beneath the inferior turbinate; obstruction here causes epiphora.

**Diagram: Cranial nerves of the head and neck**

The seven CNs ENT anatomy revolves around. Name each, then reveal.

_Image source: Cranial Nerves of the Head and Neck with Skull Base Foramina. teachmeanatomy.info._
- Cribriform plate: transmits CN I, the olfactory nerve, into the anterior cranial fossa; a fracture here causes anosmia and CSF rhinorrhea.
- Optic canal: transmits CN II, the optic nerve, along with the ophthalmic artery, into the orbit.
- Superior orbital fissure: transmits CN III, IV, V1 (ophthalmic), and VI; compression here causes orbital apex/superior orbital fissure syndrome.
- Foramen rotundum: transmits CN V2, the maxillary division of the trigeminal nerve, to the midface and upper teeth.
- Foramen ovale: transmits CN V3, the mandibular division of the trigeminal nerve, to the lower face, tongue, and muscles of mastication.
- Internal acoustic meatus: transmits CN VII (facial) and CN VIII (vestibulocochlear); CN VII here is the site of vulnerability in Bell's palsy.
- Jugular foramen: transmits CN IX (glossopharyngeal: gag/oropharyngeal sensation), CN X (vagus: laryngeal motor/sensory), and CN XI (accessory: SCM/trapezius, at risk in neck dissection).
- Hypoglossal canal: transmits CN XII, the hypoglossal nerve, which supplies tongue movement.

**Diagram: The facial nerve's intratemporal course**

Labyrinthine → geniculate ganglion → tympanic → mastoid → stylomastoid foramen. Name each segment, then reveal.

_Image source: Detailed Surgical Anatomy of the Facial Nerve. Hovland N, Phuong A, Lu GN. Oper Tech Otolaryngol Head Neck Surg. 2021;32(4):190-196._
- Motor root of the facial nerve: the larger root, carrying the special visceral efferent fibers to the muscles of facial expression, stapedius, stylohyoid, and posterior digastric.
- Sensory root (nervus intermedius): carries taste (anterior two-thirds of tongue) and parasympathetic secretomotor fibers to the lacrimal, submandibular, and sublingual glands.
- Cisternal segment: the facial nerve's course through the cerebellopontine angle cistern before entering the internal acoustic meatus; the site involved by vestibular schwannomas.
- Geniculate ganglion: sensory ganglion between the labyrinthine and tympanic segments; herpes zoster reactivation here causes Ramsay Hunt syndrome.
- Internal acoustic meatus (IAM): transmits CN VII and CN VIII from the posterior fossa into the temporal bone.
- Tympanic segment: runs along the medial middle-ear wall just above the oval window; at risk in cholesteatoma and middle-ear surgery.
- Facial nerve (CN VII): the intratemporal course runs labyrinthine to tympanic to mastoid segments before exiting the stylomastoid foramen.
- Meatal and labyrinthine segments: the narrowest part of the nerve's course, between the IAM fundus and the geniculate ganglion; the most common site of compression in Bell's palsy.
- Greater petrosal nerve: branches off at the geniculate ganglion carrying parasympathetic fibers to the lacrimal gland; injury here causes dry eye.
- Mastoid (vertical) segment: descends to the stylomastoid foramen, giving off the nerve to stapedius and the chorda tympani.
- Stylomastoid foramen: the facial nerve's exit point from the temporal bone into the parotid gland.
- Chorda tympani: branches from the mastoid segment, crosses the middle ear, and carries taste from the anterior two-thirds of the tongue plus secretomotor fibers to the submandibular/sublingual glands.

**Diagram: The neck as fascial layers and triangles**

Two ways to read the same neck: by surface triangle, and by deep fascial plane. Name each, then reveal.

_Image source: Fascial Layers and Triangles of the Neck. Scholes & Ramakrishnan (2015) ENT Secrets / Wikimedia Commons CC BY-SA 4.0._
- Mandibula (mandible): forms the superior boundary of the anterior triangle of the neck.
- Os hyoideum (hyoid bone): U-shaped bone at the C3 level that anchors suprahyoid and infrahyoid muscles and marks the boundary between the submental/submandibular and carotid/muscular triangles.
- Anterior triangle: bounded by the mandible above, the midline medially, and the anterior border of sternocleidomastoid laterally; subdivided into submental, submandibular, carotid, and muscular triangles.
- Submental triangle: unpaired midline space between the anterior bellies of digastric and the hyoid; drains the chin, lower lip, and tongue tip (level Ia nodes).
- Submandibular triangle: bounded by the digastric bellies and mandible; contains the submandibular gland and level Ib nodes.
- Carotid triangle: bounded by the SCM, posterior digastric, and omohyoid; exposes the carotid sheath (carotid artery, IJV, vagus nerve) for surgical access.
- Muscular triangle: bounded by the midline, SCM, and omohyoid; contains the infrahyoid (strap) muscles overlying the thyroid and trachea.
- Processus mastoideus (mastoid process): posterior attachment point of sternocleidomastoid, marking the upper posterior corner of the anterior/posterior triangle boundary.
- Posterior triangle: bounded by the posterior border of sternocleidomastoid, the anterior border of trapezius, and the clavicle; carries CN XI (spinal accessory) and the brachial plexus roots superficially.
- Occipital triangle: the larger, superior subdivision of the posterior triangle (above the inferior belly of omohyoid); contains CN XI and the upper posterior triangle lymph nodes (level Va).
- Subclavian (supraclavicular) triangle: the smaller, inferior subdivision of the posterior triangle, floored by the subclavian artery and lower brachial plexus trunks (level Vb nodes).
- Clavicula (clavicle): forms the inferior boundary of the posterior triangle and the neck as a whole.

### Flashcards (17)

**[temporal-bone-parts-card]** tags: AN, anatomy, milestones: MK1, UKMLA: Hearing loss, reviewer: (none)
- Front: Name the four parts of the temporal bone and one clinically relevant fact about each.
- Back: Squamous (lateral skull, part of the TMJ), tympanic (most of the external auditory canal), petrous (houses the middle/inner ear), mastoid (air-cell system: mastoiditis, cochlear implant surgery site).[figure: Recall of the temporal bone's four parts and a clinical fact about each.]
- Source: Standard temporal bone anatomy teaching.

**[paranasal-sinus-drainage-card]** tags: AN, anatomy, milestones: MK1, UKMLA: Nasal obstruction, reviewer: (none)
- Front: Where does each paranasal sinus drain?
- Back: Maxillary and frontal → middle meatus (maxillary via an ostium high on its medial wall, against gravity). Ethmoid: anterior cells → middle meatus, posterior cells → superior meatus. Sphenoid → sphenoethmoidal recess.[figure: Recall of where each paranasal sinus drains.]
- Source: Standard paranasal sinus anatomy teaching.

**[sphenoid-neighbors-card]** tags: AN, anatomy, milestones: MK1, UKMLA: Facial pain, reviewer: (none)
- Front: What structures border the sphenoid sinus, and why does that matter clinically?
- Back: The pituitary gland, optic nerve, and cavernous sinus (with the internal carotid artery and CNs III, IV, V1, V2, VI running through/near it). Sphenoid sinus disease or surgery here carries neuro-ophthalmic and vascular risk not shared by the other sinuses.[figure: The pituitary, optic nerve, and cavernous sinus as sphenoid sinus neighbors and their clinical significance.]
- Source: Standard skull-base anatomy teaching.

**[neck-fascial-layers-card]** tags: AN, anatomy, milestones: MK1, UKMLA: Neck lump, reviewer: (none)
- Front: Name the layers of deep cervical fascia.
- Back: Superficial (investing) layer (envelopes the neck, splits around SCM/trapezius), pretracheal layer (envelopes thyroid/trachea/esophagus), prevertebral layer (envelopes the vertebral column/paraspinal muscles), and the carotid sheath (contributions from all three, envelopes the carotid/IJV/vagus).[figure: Recall of the deep cervical fascial layers and the carotid sheath.]
- Source: Standard cervical fascia anatomy teaching.

**[cn-v-vii-viii-card]** tags: AN, anatomy, milestones: MK1, UKMLA: Facial weakness, reviewer: (none)
- Front: What does each of CN V, VII, and VIII do in the head and neck?
- Back: CN V (trigeminal): facial/sinus/oral sensation, muscles of mastication. CN VII (facial): facial movement, runs through the parotid. CN VIII (vestibulocochlear): hearing and balance.
- Source: Standard head and neck cranial nerve teaching.

**[cn-ix-x-xi-xii-card]** tags: AN, anatomy, milestones: MK1, UKMLA: Swallowing problems, reviewer: (none)
- Front: What does each of CN IX, X, XI, and XII do in the head and neck?
- Back: CN IX (glossopharyngeal): oropharyngeal sensation, gag. CN X (vagus, incl. recurrent laryngeal nerve): laryngeal motor/sensory. CN XI (accessory): SCM/trapezius, at risk in neck dissection. CN XII (hypoglossal): tongue movement.
- Source: Standard head and neck cranial nerve teaching.

**[neck-triangles-card]** tags: AN, anatomy, milestones: MK1, UKMLA: Neck lump, reviewer: (none)
- Front: What structures define the anterior and posterior triangles of the neck?
- Back: Anterior triangle: bounded by the mandible, midline, and anterior border of SCM, contains most of the visceral neck structures. Posterior triangle: bounded by SCM, trapezius, and the clavicle, contains CN XI and the brachial plexus roots among other structures.[figure: Recall of the boundaries and contents of the anterior and posterior neck triangles.]
- Source: Standard neck surface anatomy teaching.

**[external-vs-middle-inner-ear-card]** tags: AN, anatomy, milestones: MK1, UKMLA: Hearing loss, reviewer: (none)
- Front: What separates the external, middle, and inner ear anatomically?
- Back: The tympanic membrane separates external from middle ear; the oval and round windows separate the air-filled middle ear from the fluid-filled inner ear (cochlea/vestibular apparatus), housed within the petrous temporal bone.[figure: What separates the external, middle, and inner ear compartments anatomically.]
- Source: Standard otologic anatomy teaching.

**[larynx-subsites-recall-card]** tags: AN, anatomy, milestones: MK1, UKMLA: Hoarseness and voice change, reviewer: (none)
- Front: Name the three laryngeal subsites from superior to inferior.
- Back: Supraglottis (epiglottis to the laryngeal ventricle), glottis (true vocal folds, ~1cm inferiorly, including the anterior/posterior commissures), subglottis (below the true folds to the inferior cricoid border).[figure: Recall of the three laryngeal subsites (supraglottis, glottis, subglottis).]
- Source: Standard laryngeal anatomy teaching.

**[parotid-facial-nerve-recall-card]** tags: AN, anatomy, milestones: MK1, UKMLA: Facial weakness, reviewer: (none)
- Front: How does the facial nerve relate anatomically to the parotid gland?
- Back: The facial nerve trunk exits the stylomastoid foramen and runs through the substance of the parotid gland, dividing it (surgically) into superficial and deep lobes, before branching into five named terminal branches.[figure: How the facial nerve runs through and divides the parotid gland.]
- Source: Standard parotid anatomy teaching.

**[facial-nerve-segments-card]** tags: AN, anatomy, milestones: MK1, UKMLA: Facial weakness, reviewer: (none)
- Front: The narrowest of the facial nerve's three intratemporal segments, and the one most vulnerable to swelling in Bell's palsy, is the [...] segment.
- Back: The narrowest of the facial nerve's three intratemporal segments, and the one most vulnerable to swelling in Bell's palsy, is the labyrinthine segment. It runs from the internal auditory canal to the geniculate ganglion.[figure: Identifying the labyrinthine segment as the narrowest/most vulnerable facial nerve segment in Bell's palsy.]
- Source: Standard temporal bone / facial nerve anatomy teaching.

**[geniculate-ganglion-ramsay-hunt-card]** tags: AN, anatomy, milestones: MK1, UKMLA: Facial weakness, reviewer: (none)
- Front: Herpes zoster reactivation at the facial nerve's geniculate ganglion causes [...], presenting as facial palsy with a vesicular rash of the ear canal or pinna.
- Back: Herpes zoster reactivation at the facial nerve's geniculate ganglion causes Ramsay Hunt syndrome, presenting as facial palsy with a vesicular rash of the ear canal or pinna. It tends to be more severe and slower to recover than Bell's palsy.
- Source: Standard facial nerve anatomy teaching.

**[branchial-arch-derivatives-card]** tags: AN, anatomy, milestones: MK1, UKMLA: Neck lump, reviewer: (none)
- Front: Unlike the malleus and incus, which arise from the first arch, the stapes derives embryologically from the [...] (Reichert's cartilage).
- Back: Unlike the malleus and incus, which arise from the first arch, the stapes derives embryologically from the second branchial arch (Reichert's cartilage). This is why second-arch anomalies are far more common clinically than first-arch ones.
- Source: Standard branchial arch embryology teaching.

**[pharyngeal-pouch-vs-cleft-card]** tags: AN, anatomy, milestones: MK1, UKMLA: Hearing loss, reviewer: (none)
- Front: The first pharyngeal pouch develops into the [...].
- Back: The first pharyngeal pouch develops into the Eustachian tube and middle-ear cavity. Only the second cleft normally persists, which is why second branchial cleft cysts and sinuses dominate clinically.
- Source: Standard pharyngeal pouch/cleft embryology teaching.

**[skull-base-foramina-card]** tags: AN, anatomy, milestones: MK1, UKMLA: Facial pain, reviewer: (none)
- Front: Match the skull-base foramen to what passes through it: foramen ovale, foramen rotundum, foramen spinosum, internal acoustic meatus.
- Back: Foramen ovale: CN V3. Foramen rotundum: CN V2. Foramen spinosum: middle meningeal artery (injury here causes an epidural hematoma). Internal acoustic meatus: CN VII and CN VIII (with the labyrinthine artery).[figure: Matching skull-base foramina (ovale, rotundum, spinosum, internal acoustic meatus) to what passes through them.]
- Source: Standard skull-base anatomy teaching.

**[jugular-foramen-syndrome-card]** tags: AN, anatomy, milestones: MK1, UKMLA: Swallowing problems, reviewer: (none)
- Front: What is jugular foramen syndrome (Vernet syndrome), and which cranial nerves does it affect?
- Back: Compression or invasion at the jugular foramen, classically by a glomus jugulare tumor but also skull-base trauma or metastasis, affects the three cranial nerves that pass through it: CN IX, X, and XI. Produces loss of gag/pharyngeal sensation (IX), vocal-fold palsy/dysphagia (X), and shoulder droop/weak trapezius-SCM (XI).[figure: Jugular foramen syndrome (Vernet syndrome) affecting CN IX, X, and XI.]
- Source: Standard skull-base anatomy teaching.

**[tmj-anatomy-card]** tags: AN, anatomy, milestones: MK1, UKMLA: Facial pain, reviewer: (none)
- Front: Referred otalgia with a normal ear exam is commonly caused by TMJ dysfunction, due to the joint's location directly anterior to the [...].
- Back: Referred otalgia with a normal ear exam is commonly caused by TMJ dysfunction, due to the joint's location directly anterior to the external auditory canal. The joint is formed by the mandibular condyle and the temporal bone's glenoid fossa.[figure: The TMJ's proximity to the ear canal as a cause of referred otalgia.]
- Source: Standard TMJ anatomy teaching.

---

## Module: Emergencies & Red Flags (`emergencies-red-flags`)
- version: 0.4.0-draft
- status: DRAFT, pending faculty review. v0.2.0: added a depth pass on four genuinely uncovered airway/emergency algorithms, angioedema differential and management (allergic/mast-cell-mediated vs ACE-inhibitor 
- facultyReviewer: ""
- curriculum anchors: UKMLA Content Map (GMC), scope anchor; synthesizes the emergency/red-flag rows already owned by Foundations and every subspecialty track at rapid-triage depth; ACGME Otolaryngology-HNS Milestones 2.0, primarily PC1 (emergency recognition/management); ATLS principles; standard US emergency otolaryngology teaching; UK undergraduate Delphi (Lloyd 2014), student-scope depth cap
- subtitle: The true time-critical ENT presentations, gathered across every subspecialty into one rapid-triage synthesis.

### Anatomy notes

**Airway triage: look, listen, act** (tags: Airway assessment · Airway patency)

[figure: Landmarks: Cricothyroid membrane surface anatomy for the emergency surgical airway.]
- The airway question comes first, before any differential: is it patent, at risk, or failing right now?
- Signs of impending obstruction: stridor, drooling or inability to handle secretions, tripod positioning, agitation or lethargy from hypoxia, voice change.
- Securing or protecting the airway (positioning, urgent ENT/anesthesia, sometimes a surgical airway) always comes before definitive diagnosis.[figure: Airway triage: signs of impending obstruction.]Stridor localizes the obstruction. Stridor is turbulent airflow through a narrowed airway, and its timing tells you the level:

- Inspiratory stridor → supraglottic/glottic (above or at the cords): the extrathoracic airway collapses inward on inspiration (e.g. epiglottitis, laryngomalacia, a supraglottic mass).
- Biphasic stridor → glottic/subglottic (fixed narrowing at or just below the cords): present in both phases (e.g. subglottic stenosis, croup, bilateral vocal fold paralysis).
- Expiratory stridor/wheeze → tracheobronchial (intrathoracic): worse on expiration (e.g. tracheomalacia, a distal foreign body).Inspiratory stridor localizes above the cords, biphasic at or below the cords, expiratory below the thoracic inlet. Stridor is a red flag, not a diagnosis: never mistake it for asthmatic wheeze, and never send a stridulous patient for a test they must lie flat or be sedated for without airway backup.
Voice/quality clues to the level:

- Muffled "hot potato" voice → a supraglottic problem (epiglottitis, peritonsillar abscess); the airway is threatened but the cords still work.
- Hoarse/breathy voice → a glottic problem (vocal fold pathology).
- Aphonia plus respiratory distress → complete or near-complete glottic obstruction.The surgical-airway landmark and the CICO endpoint. Every triage pathway ends the same way: if the patient cannot be intubated and cannot be oxygenated (CICO), the rescue is a front-of-neck airway through the cricothyroid membrane (the soft depression between the thyroid cartilage above and the cricoid cartilage below).

- Cricothyroid membrane location: superficial, midline, relatively avascular, and it sits above the thyroid isthmus and the great vessels.
- Finding it, the laryngeal handshake: stabilize the larynx between thumb and middle finger, walk down from the thyroid notch onto the cricoid, and the membrane is the gap the index finger falls into (tracing upward from the sternal notch improves accuracy when landmarks are hard to feel).
- Cricothyroidotomy vs tracheostomy: cricothyroidotomy is the emergency front-of-neck airway (fast, high landmark); tracheostomy is the planned/definitive surgical airway. Cricothyroidotomy is generally avoided as the primary airway in young children.Mechanisms of acute airway decompensation in maxillofacial and neck trauma: the airway can be lost even when it looks patent at minute one.

- A posteriorly displaced maxilla (Le Fort) blocks the nasopharynx; a bilateral anterior mandible fracture lets the tongue base fall back (worse supine).
- Blood, secretions, avulsed teeth, and progressive soft-tissue edema/hematoma narrow the lumen over minutes to hours.
- An expanding neck hematoma (e.g. post-thyroidectomy, penetrating neck injury) compresses the airway: sit the patient up, and for a post-op neck, open the wound at the bedside.Principle: in trauma, secure the airway early and electively, before swelling makes intubation impossible; keep a surgical airway ready.

**The 'danger triangle' of deep-space infection** (tags: Tonsil/dental infection · Carotid sheath · Mediastinum)

[figure: Deep cervical fascial spaces communicate (peritonsillar/parapharyngeal/retropharyngeal) and can carry infection down the 'danger space' toward the mediastinum.]
- Neck and facial infections track along fascial planes into spaces next to the airway, great vessels, and mediastinum.
- The deep neck spaces communicate (peritonsillar, parapharyngeal, retropharyngeal, mediastinum).
- This is why a localized infection (quinsy, dental abscess) can escalate to airway compromise, carotid sheath involvement, or descending mediastinitis if not treated promptly.
- Note this is a different concept from the "danger triangle of the face" (the mid-face region drained by the facial vein, with retrograde spread risking cavernous sinus thrombosis): both are worth knowing, but they are not the same danger triangle.The clinically important deep neck spaces, organized by relationship to the hyoid:
SpaceKey boundaries/locationExtends toClassic source & why it mattersPeritonsillarBetween the tonsillar capsule and the superior constrictorCan spread laterally into the parapharyngeal spaceTonsillitis → quinsy; trismus, uvular deviation, "hot potato" voiceSubmandibular / sublingualFloor of mouth, split by the mylohyoidCommunicates posteriorly with the parapharyngeal spaceOdontogenic (lower molars); bilateral spread = Ludwig's anginaParapharyngeal (lateral pharyngeal)Inverted cone: skull base to hyoid; carotid sheath in its posterior compartmentCommunicates with the retropharyngeal, submandibular, and carotid spacesThe "crossroads": connects nearly every other space; carotid sheath at riskMasticatorMuscles of mastication plus the ramus/body of the mandibleCommunicates with the parapharyngeal spaceOdontogenic; prominent trismusCarotid sheathCarotid artery, IJV, vagus (CN X)Skull base to mediastinum: a direct longitudinal conduit for descending spreadErosion → hemorrhage; septic thrombophlebitis (Lemierre's)RetropharyngealBuccopharyngeal fascia (anterior) to alar fascia (posterior); midline raphe presentSkull base to roughly C6-T4, where the alar and buccopharyngeal fascia fusePediatric (suppurative RP nodes after a URI); anterior route to the mediastinumDanger space (space 4)Between the alar fascia (anterior) and the prevertebral fascia (posterior); loose areolar tissue, no midline rapheSkull base to the diaphragm (posterior mediastinum, retroperitoneum)A direct, low-resistance conduit from a localized infection to the chestPrevertebralBetween the prevertebral fascia and the vertebral bodiesAlong the spineVertebral osteomyelitis / spinal sourcePretracheal (anterior visceral)Anterior to the trachea, behind the strap musclesDown to the pericardium at the carinaAnterior route to the anterior mediastinum; airway compressionRetropharyngeal vs. danger space boundaries:

- The retropharyngeal space stops where the alar and buccopharyngeal fascia fuse (roughly C6-T4) and has a midline raphe limiting side-to-side spread.
- The danger space (space 4) sits just behind it, separated only by the thin alar fascia: no midline raphe, running skull base to diaphragm, so infection breaching into it spreads both contralaterally and all the way to the posterior mediastinum.
- That single fascial plane (the alar fascia) is the difference between a contained retropharyngeal abscess and descending necrotizing mediastinitis.Clinical complications:

- Ludwig's angina: bilateral submandibular/sublingual cellulitis (usually odontogenic) → floor-of-mouth induration, posterior tongue displacement → airway obstruction. Early surgical drainage cuts airway-compromise risk roughly tenfold vs antibiotics alone; secure the airway first.
- Descending necrotizing mediastinitis (DNM): about 70% descend via the retropharyngeal/danger space to the posterior mediastinum; reported mortality roughly 10-40%; requires neck and chest CT plus surgical drainage.
- Lemierre's syndrome: septic thrombophlebitis of the IJV (carotid space), classically Fusobacterium after an oropharyngeal infection → septic pulmonary emboli.
- Carotid artery erosion/blowout: carotid sheath involvement; a sentinel bleed precedes catastrophic hemorrhage.
- Highest-risk sources are odontogenic (lower molars) and pharyngeal/tonsillar; risk factors for descent are diabetes, immunocompromise, older age, and multispace involvement (especially retropharyngeal plus parapharyngeal).Imaging/management anchor: contrast-enhanced CT neck (extended through the chest if descent is suspected) is the key study, distinguishing a drainable abscess (rim-enhancing collection) from phlegmon and screening the mediastinum. Airway first, then IV broad-spectrum antibiotics covering oral flora (Gram-positive, Gram-negative, anaerobes) plus surgical drainage of any organized collection.

**Shared anatomic basis of ENT emergencies** (tags: Small airways · Orbit/brain vascular connections · Cartilage necrosis)

[figure: Landmarks: Airway bottlenecks and rich vascular and fascial connections.]Several anatomic facts recur across ENT emergencies:

- Airway lumens are small, so a little swelling causes a lot of obstruction (more so in children; see Pediatric ENT).
- The head and neck have rich vascular and lymphatic connections to the orbit and intracranial space (sinusitis → orbital/intracranial complications; otitis media → intracranial complications).
- Cartilage (septum, auricle, larynx) depends on adjacent perichondrium/perichondrium-equivalent for blood supply, so untreated hematoma or infection causes necrosis within days, not weeks.

**Zones of the neck** (tags: Neck zones I-III · Penetrating trauma)

[figure: Zones I, II, III of the neck for penetrating trauma and how surgical accessibility differs by zone.]For penetrating neck trauma, the neck is divided into three horizontal zones, not because the anatomy changes character at each boundary, but because surgical accessibility does, and that access drives the initial management algorithm (see Clinical tab):

- Zone I: cricoid cartilage to the thoracic outlet/clavicles. Contains the great vessel origins (proximal carotids, subclavian vessels), trachea, esophagus, thoracic duct, apex of the lung. Least accessible surgically: injuries here may need a sternotomy/thoracotomy approach.
- Zone II: cricoid cartilage to the angle of the mandible. Contains the carotid arteries, jugular veins, larynx, trachea, esophagus, vagus and recurrent laryngeal nerves. The largest zone and the most surgically accessible, and most penetrating neck injuries occur here.
- Zone III: angle of the mandible to the skull base. Contains the distal carotid/vertebral arteries, distal jugular veins, and lower cranial nerves. Also poorly accessible: proximal vascular control is difficult, and injuries here may need interventional radiology (endovascular) rather than open exploration.The practical point: a Zone II injury is easy to get into and control operatively, so a Zone II patient with hard signs typically goes straight to the OR; Zone I and III injuries are harder to control surgically, so even some hard-sign patients there are worked up with imaging (CT angiography) first to plan the approach, when they are stable enough to allow it. Note on currency: modern trauma practice has shifted to a "no-zone" approach: in the stable patient, hard/soft signs plus CT angiography drive management rather than the zone itself. The zones now mainly describe surgical accessibility, not who is explored.

### Anatomy diagrams (2)

**Diagram: Deep neck space spread**

How infection tracks from a localized source toward the mediastinum. Name each space, then reveal.

_Image source: Deep Neck Space Communications and Mediastinal Spread Pathways. Wikimedia Commons._
- Visceral space: encased by the middle layer of deep cervical fascia, contains the thyroid, trachea, and esophagus; thyroiditis or esophageal perforation can spread infection here toward the mediastinum.
- Perivertebral space: surrounds the vertebral bodies within the deep layer of deep cervical fascia; osteomyelitis here can track down along the psoas sheath to the groin.
- Posterior cervical space: lies within the posterior triangle between the middle and deep layers of deep cervical fascia; rarely a primary infection site.
- Carotid space: formed by contributions from all three fascial layers, encloses the carotid artery, internal jugular vein, and vagus nerve; infection here risks septic jugular thrombophlebitis (Lemierre syndrome) or carotid blowout.
- Anterior cervical space: superficial to the strap muscles and anterior to the visceral space; contains the anterior jugular veins.
- Superficial layer of deep cervical fascia: encircles the entire neck and splits to envelop the sternocleidomastoid and trapezius muscles.
- Middle layer of deep cervical fascia: its visceral division forms the buccopharyngeal fascia behind the pharynx/esophagus, the anterior wall of the retropharyngeal space.
- Deep layer of deep cervical fascia (prevertebral fascia): its anterior lamina, the alar fascia, forms the posterior wall of the danger space.
- Retroesophageal space: between the buccopharyngeal fascia and the alar fascia, posterior to the esophagus; infection here can spread toward the danger space.
- Danger space: between the alar fascia and the prevertebral fascia, extending from the skull base to the diaphragm; the classic route for infection to spread rapidly into the posterior mediastinum.

**Diagram: Zones I, II, and III of the neck in penetrating trauma**

Same figure used in this module's 'Zones of the neck' anatomy lecture. Only the zone numbers are hidden; the landmark labels (skull base, angle of mandible, cricoid cartilage, clavicle) stay visible on the image. Click a zone number to reveal what defines it.

_Image source: Add figure citation_
- Zone III: angle of mandible to skull base. Poor surgical access, may need an endovascular approach.
- Zone II: cricoid to angle of mandible. Largest and most surgically accessible zone; most penetrating injuries occur here.
- Zone I: cricoid to the clavicles/thoracic outlet. Least accessible, may need a sternotomy or thoracotomy approach.

### Clinical blocks (8)

**[emergency-triage-table] The ENT emergency quick-reference**

A rapid-recall table of the classic time-critical presentations across every track.

| Presentation | Think | Immediate action |
| --- | --- | --- |
| Stridor + drooling + tripod position (child) | Epiglottitis | Do NOT examine the throat/lay the child down; keep calm, urgent airway team + ENT |
| Cyclical cyanosis relieved by crying (newborn) | Bilateral choanal atresia | Oral airway/McGovern nipple; urgent ENT |
| Trismus + muffled 'hot potato' voice + uvula deviation | Peritonsillar abscess (quinsy) | Urgent drainage; airway assessment first |
| Torticollis + neck pain + fever + odynophagia (child) | Retropharyngeal abscess | Urgent contrast CT neck, ENT |
| Periorbital swelling + proptosis + painful eye movement | Orbital cellulitis (sinusitis complication) | Urgent CT, IV antibiotics, ENT/ophthalmology |
| Diabetic/immunocompromised + black nasal eschar + facial pain | Acute invasive fungal sinusitis (mucormycosis) | Emergent biopsy/debridement; do not delay for imaging |
| Facial swelling + fever + toxic-appearing + odontogenic source | Ludwig's angina / floor-of-mouth abscess | Urgent airway assessment; can obstruct rapidly |
| Sudden unilateral hearing loss (within 72h) | Sudden sensorineural hearing loss (SSNHL) | Urgent audiogram + steroids; treatment window is time-sensitive |
| Post-tonsillectomy bleeding | Post-tonsillectomy hemorrhage | Airway + hemodynamic assessment, urgent ENT; even 'minor' bleeds need evaluation |
| Button battery in ear/nose | Time-critical foreign body | Urgent removal; liquefactive necrosis within hours |
| Expanding neck hematoma / stridor after neck surgery | Post-thyroidectomy/neck-surgery hematoma | Open the wound at bedside if airway threatened; do not wait for OR |
| Proptosis + decreasing vision after orbital trauma | Orbital compartment syndrome | Emergent lateral canthotomy/cantholysis at the bedside |

**[epiglottitis-quinsy-differential] Epiglottitis vs peritonsillar abscess vs retropharyngeal abscess**

All three can present with sore throat, drooling, and voice change, but the differentiating features matter.

|  | Epiglottitis | Peritonsillar abscess | Retropharyngeal abscess |
| --- | --- | --- | --- |
| Typical age | Any age (historically kids pre-Hib vaccine; now often adults) | Adolescents/adults | Young children (<6yr) |
| Voice | Muffled 'hot potato' | Muffled 'hot potato', trismus | Muffled, may refuse to move neck |
| Key exam clue | Tripod position, drooling; avoid oropharyngeal exam/tongue depressor | Uvula deviation, tonsillar bulge, trismus | Torticollis, neck stiffness, bulge on lateral pharyngeal wall |
| Imaging/diagnosis | Clinical + flexible laryngoscopy by ENT/anesthesia in a controlled setting | Clinical ± intraoral ultrasound; CT is also used, especially if the diagnosis is unclear or spread beyond the tonsil is suspected | Contrast CT neck |

**[when-not-to-examine] When NOT to examine the throat**

In suspected epiglottitis (especially in a child with drooling/tripod positioning), do not use a tongue depressor or attempt to visualize the oropharynx outside a controlled setting with airway backup immediately available: manipulation can precipitate complete airway obstruction. Keep the child calm, ideally in a parent's lap, and get anesthesia/ENT to secure the airway in the OR.

**[angioedema-three-diseases] Angioedema: Key Differentials**

Sudden lip/tongue/airway swelling without urticaria or itch requires determining whether the mechanism is histamine-mediated at all. Two of the three major causes of angioedema are bradykinin-mediated, not mast-cell/histamine-mediated, and bradykinin-mediated swelling does not reliably respond to epinephrine, antihistamines, or steroids, the standard anaphylaxis triad.

|  | Allergic / mast-cell-mediated | ACE-inhibitor-induced | Hereditary angioedema (HAE) |
| --- | --- | --- | --- |
| Mechanism | IgE/mast-cell degranulation → histamine | Bradykinin accumulation (ACE normally degrades bradykinin) | C1-esterase-inhibitor deficiency/dysfunction → uncontrolled bradykinin generation |
| Clues | Urticaria, itch, rapid onset (minutes), a trigger (food/drug/sting), may have wheeze/hypotension | Any time after starting an ACE inhibitor (even years later); no urticaria/itch; face/lips/tongue, sometimes bowel wall (abdominal pain) | Recurrent attacks since childhood/adolescence; family history; no urticaria/itch; may include painful abdominal attacks (bowel-wall edema mimicking a surgical abdomen) |
| Responds to epinephrine/antihistamines/steroids? | Yes, first-line | No, reliably: supportive care + stop the drug is the actual treatment | No: needs specific bradykinin-pathway therapy, not standard anaphylaxis treatment |
| Actual management | IM epinephrine, antihistamines, steroids per anaphylaxis protocol | Stop the ACE inhibitor (and avoid ARBs cautiously; cross-reactivity is low but reported); secure the airway if threatened; icatibant/C1-INH concentrate have been used off-label with inconsistent trial evidence | C1-inhibitor concentrate, icatibant (bradykinin B2-receptor antagonist), or ecallantide (kallikrein inhibitor), not epinephrine/antihistamines as primary treatment |

**[penetrating-neck-trauma-management] Penetrating neck trauma: hard signs go to the OR; the modern approach is "no-zone"**

After the ATLS primary survey (airway/breathing/circulation), the first question is "hard signs or not?", not "what zone?". Hard signs (expanding/pulsatile hematoma, active pulsatile bleeding, bruit/thrill, absent distal pulse, air bubbling from the wound, airway compromise, massive hemoptysis/hematemesis) mandate immediate operative exploration.
For the stable patient without hard signs, current practice uses a "no-zone" approach: CT angiography plus serial exam guides management, regardless of which zone the wound is in. This has largely replaced the older rule of "explore all Zone II, image Zone I and III," because the entry-wound zone poorly predicts the actual internal injury and mandatory Zone II exploration produced many negative operations.
The zones (see Anatomy tab) still matter for how the operation is done (surgical access differs), but they no longer decide who goes to the OR. That decision is driven by hard signs and imaging.

|  | Hard signs | Soft signs |
| --- | --- | --- |
| Vascular | Pulsatile/expanding hematoma, active pulsatile bleeding, absent distal pulse, bruit/thrill over the wound | Non-expanding/stable hematoma, history of moderate bleeding at the scene, proximity to major vessels without other findings |
| Aerodigestive | Air bubbling through the wound, massive subcutaneous emphysema, stridor/respiratory distress from the injury itself | Hoarseness, dysphagia/odynophagia, hemoptysis, minor subcutaneous emphysema |
| Neurologic | New focal neurologic deficit referable to the injury (e.g. hemiparesis suggesting carotid injury) | N/A |
| Action | Immediate operative exploration: do not delay for imaging | CT angiography of the neck in a stable patient to characterize injury and plan management (observation vs. selective exploration vs. endovascular) |

**[inhalational-thermal-airway-injury] Inhalational/thermal airway injury: the airway that looks fine now, and won't in an hour**

Facial/oropharyngeal burns from flame, steam, or hot gas cause progressive supraglottic and glottic edema over hours. The exam at minute one can look deceptively reassuring while the swelling that will obstruct the airway is only just beginning. The management principle is early, elective intubation before the airway becomes difficult or impossible, rather than waiting for obvious distress.
Signs raising concern for inhalational injury (any one is enough to trigger urgent airway evaluation):

- Facial or oropharyngeal burns, singed nasal/facial hair
- Carbonaceous sputum or soot in the oropharynx
- New hoarseness or stridor
- History of a closed-space fire, decreased level of consciousness at the scene, or a fire involving synthetic/chemical materials (higher risk of toxic inhalation/chemical burn on top of thermal injury)The management logic mirrors the airway-first principle above, with one twist: here, the decision to intubate is made before stridor/drooling/tripod positioning appear, because once those late signs are present in a burn patient, the airway may already be too swollen and distorted for a straightforward intubation. This is a case where the emergency intervention deliberately gets ahead of the exam findings.

**[caustic-ingestion-deep] Caustic ingestion, deeper: alkali vs acid injury, endoscopic grading, and stricture risk**

Beyond the immediate "don't induce vomiting, don't neutralize" rule, the type of caustic agent shapes what happens next:

|  | Alkali (e.g. drain cleaner, lye) | Acid (e.g. toilet-bowl cleaner, battery acid) |
| --- | --- | --- |
| Injury pattern | Liquefactive necrosis: penetrates deeply through tissue layers, often painless enough on contact that more is swallowed before symptoms stop it | Coagulative necrosis: forms a surface eschar that can (imperfectly) limit further penetration, but still causes significant injury, especially to the stomach |
| Typical worst injury site | Esophagus (deep, circumferential injury → high stricture risk) | Stomach (acid passes through the esophagus quickly but pools and injures the antrum), though esophageal injury still occurs and is not to be assumed absent |

**[caustic-ingestion-endoscopy-grading] Caustic ingestion: endoscopic grading and stricture risk**

Once the airway and hemodynamic status are stable, upper endoscopy (typically within 12-24 hours of ingestion) grades the depth of injury and guides disposition. This is done carefully, since the injured wall is at its most friable and perforation risk is highest in the first days. A widely used framework grades injury from I (mucosal edema/erythema only) through IIa/IIb (superficial vs deep/circumferential ulceration) to III (transmural necrosis); higher grades carry a substantially higher risk of esophageal stricture developing over the following weeks to months, and grade III injury carries a real risk of perforation and mediastinitis. Patients with higher-grade injuries need close follow-up for dysphagia (the presenting symptom of a developing stricture) and may need serial esophageal dilation.

### Red flags
- Any airway red flag (stridor, drooling, tripod position, agitation-then-lethargy): secure and protect the airway before pursuing a differential diagnosis.
- Suspected epiglottitis: do not examine the throat outside a controlled airway setting.
- Post-tonsillectomy or post-neck-surgery bleeding: always evaluated urgently, regardless of how 'minor' it appears.
- Button battery in the ear, nose, or (especially) esophagus: an hours-scale emergency due to alkaline liquefactive necrosis. An esophageal battery needs emergent removal (ideally <2 h); give honey (en route, if able to swallow) and sucralfate (in hospital) to mitigate injury, but never let this delay removal.
- Orbital or intracranial complications of sinusitis/otitis media: proptosis, painful eye movement, altered mental status, focal neurologic signs.
- Acute invasive fungal sinusitis in a diabetic/immunocompromised patient: black eschar, facial pain/numbness; emergent biopsy and debridement.
- Sudden sensorineural hearing loss: a time-sensitive window for steroid treatment; treat this as urgent, not routine.
- Ludwig's angina / rapidly expanding neck or floor-of-mouth infection: can obstruct the airway quickly; urgent airway assessment.
- Facial/lip/tongue swelling without urticaria or itch, especially on an ACE inhibitor or with a personal/family history of recurrent attacks, should raise bradykinin-mediated angioedema (ACE-inhibitor-induced or hereditary); it will not reliably respond to epinephrine, antihistamines, or steroids.
- Penetrating neck wound with a hard sign (expanding/pulsatile hematoma, active pulsatile bleeding, absent distal pulse, air bubbling from the wound, or a new focal neurologic deficit): immediate operative exploration; do not wait for imaging.

### Cases (12)

**Case [case-epiglottitis-adult]**

Stem: An adult presents with rapid-onset severe sore throat, muffled voice, and drooling, but a relatively unremarkable-looking oropharynx on cursory inspection. He prefers to sit leaning forward.

- Q: Why doesn't a normal-looking oropharynx rule this out, and what should you avoid doing?
  A: Epiglottitis involves the supraglottic structures, not the visible oropharynx/tonsils, so a normal oral exam doesn't exclude it. Avoid aggressive oropharyngeal manipulation or anything that could agitate the patient; adult epiglottitis is increasingly recognized (not just a pediatric disease) and remains airway-threatening.

- Q: What confirms the diagnosis safely, and who should be present?
  A: Flexible laryngoscopy, ideally performed by ENT with anesthesia/airway backup immediately available, given the risk of precipitating obstruction.

Teaching: [figure: Adult epiglottitis presenting with muffled voice/drooling despite a deceptively normal-looking oropharynx, confirmed by flexible laryngoscopy.]Clinical Pearl: Epiglottitis occurs in adults, not only in the pre-vaccine pediatric population. Muffled voice and drooling with a normal-appearing oropharynx warrants airway-first management.

**Case [case-orbital-cellulitis-complication]**

Stem: A child with several days of sinusitis symptoms develops eyelid swelling, proptosis, and pain with eye movement, plus a low-grade fever.

- Q: What is the concern, and how would you distinguish it from simple preseptal cellulitis?
  A: Orbital (postseptal) cellulitis, a sinusitis complication. Proptosis, painful/restricted eye movement, and vision change distinguish it from preseptal (periorbital) cellulitis, which spares eye movement and vision.

- Q: What is the management, and what would make you escalate further?
  A: Urgent CT imaging, IV antibiotics, and ENT/ophthalmology involvement. Decreasing vision, a relative afferent pupillary defect, or altered mental status would raise concern for intracranial extension (subperiosteal/orbital abscess, cavernous sinus thrombosis) and prompt more urgent surgical drainage.

Teaching: [figure: Sinusitis progressing to orbital (postseptal) cellulitis with proptosis and painful eye movement.]Clinical Pearl: Painful eye movement and proptosis with sinusitis indicate postseptal (orbital) extension, an emergency. The eye exam determines urgency, not the sinus history alone.

**Case [case-invasive-fungal-sinusitis]**

Stem: A patient with poorly controlled diabetes (in DKA) presents with facial pain, nasal congestion, and a black, necrotic-appearing area on the nasal septum/palate, with facial numbness.

- Q: What is the diagnosis until proven otherwise, and why is speed critical?
  A: Acute invasive fungal sinusitis (mucormycosis), an angioinvasive infection that spreads rapidly through tissue planes in immunocompromised/hyperglycemic hosts, with high mortality if treatment is delayed even by hours to a day.

- Q: What is the immediate management?
  A: Emergent bedside biopsy for frozen section and surgical debridement of necrotic tissue, plus IV liposomal amphotericin B (first-line antifungal) and aggressive correction of the underlying metabolic derangement (DKA); do not wait for formal imaging or cultures to begin acting.

Teaching: Clinical Pearl: Black eschar plus facial numbness in a hyperglycemic or immunocompromised patient is a same-hour surgical emergency.

**Case [case-post-thyroidectomy-hematoma]**

Stem: A few hours after thyroidectomy, a patient develops rapidly expanding neck swelling, difficulty breathing, and stridor at the bedside.

- Q: What is happening, and what is the immediate bedside action, before imaging and before calling the OR?
  A: Expanding neck hematoma compressing the airway. The immediate action is to open the wound at the bedside (remove skin/strap muscle sutures/clips) to evacuate the hematoma and relieve pressure. This cannot wait for imaging or transport to the OR.

- Q: What happens after the bedside decompression?
  A: The patient still needs to go to the OR for definitive hemostasis and wound exploration, but the bedside opening buys critical time by relieving the airway-threatening pressure immediately.

Teaching: [figure: Expanding neck hematoma after thyroidectomy compressing the airway, requiring bedside wound opening.]Clinical Pearl: A post-thyroidectomy expanding hematoma is opened at the bedside immediately; this does not wait for the operating room.

**Case [case-ssnhl-window]**

Stem: A patient reports sudden hearing loss in one ear over the past 2 days, with no preceding trauma, infection, or barotrauma history.

- Q: Why is this treated with urgency rather than routine referral?
  A: Sudden sensorineural hearing loss (SSNHL) has a time-sensitive treatment window: corticosteroid benefit is greatest in the first 2 weeks and is minimal after 4-6 weeks; more recent data encourage starting within 7 days of onset when possible. Delayed treatment reduces the chance of hearing recovery.

- Q: What must be done urgently to confirm the diagnosis and guide treatment?
  A: An urgent audiogram to confirm a sensorineural (not conductive) loss of a defined magnitude, and prompt initiation of steroids without waiting for a full subspecialty work-up to be completed first.

Teaching: [figure: Sudden sensorineural hearing loss confirmed by urgent audiogram, with a time-sensitive steroid treatment window.]Clinical Pearl: Sudden sensorineural hearing loss is a treatment-window emergency; delayed steroid initiation risks permanent hearing loss.

**Case [case-ace-inhibitor-angioedema]**

Stem: A patient on lisinopril for 3 years presents with lip and tongue swelling that developed over an hour, no urticaria, no itch, no wheeze. In the ED she was given IM epinephrine, IV diphenhydramine, and IV steroids, but the swelling has not improved after 45 minutes.

- Q: Why hasn't the standard anaphylaxis treatment worked, and what does the absence of urticaria/itch tell you?
  A: This is very unlikely to be histamine-mediated. ACE-inhibitor-induced angioedema is bradykinin-mediated: ACE normally breaks down bradykinin, so inhibiting it lets bradykinin accumulate. Epinephrine, antihistamines, and steroids target histamine/mast-cell pathways and don't reliably work on bradykinin-driven swelling. It can occur at any point after starting the drug, including years after initiation.

- Q: What is the actual management?
  A: Stop the ACE inhibitor immediately and do not restart it (avoid ARBs with caution too, though cross-reactivity is low). Secure/protect the airway if there's any threat: this can still progress to obstruct the airway even though it's not anaphylaxis. Specific bradykinin-pathway agents (icatibant, C1-inhibitor concentrate) have been tried off-label but trial evidence for ACE-inhibitor angioedema specifically is inconsistent, unlike their clear role in hereditary angioedema.

Teaching: Clinical Pearl: Angioedema unresponsive to epinephrine and antihistamines indicates a bradykinin-mediated mechanism, not treatment-refractory anaphylaxis. Screen for ACE-inhibitor use and family history before repeating the anaphylaxis protocol.

**Case [case-penetrating-neck-zone2]**

Stem: A patient arrives with a stab wound to the mid-neck (Zone II). On exam there is a rapidly expanding hematoma and a bruit is audible over the wound. The patient is hemodynamically stable at this moment.

- Q: Does 'hemodynamically stable right now' mean this can wait for a CT angiogram?
  A: No. An expanding hematoma and a bruit are hard signs of vascular injury. Hard signs mandate immediate operative exploration regardless of the patient's current hemodynamic stability, because that stability can be lost abruptly. Waiting for imaging in a hard-sign patient risks a sudden, catastrophic bleed or airway loss.

- Q: Why does the zone (II here) matter for how that exploration happens?
  A: Zone II (cricoid to the angle of the mandible) is the most surgically accessible zone: proximal and distal vascular control is straightforward compared to Zone I (needs a chest approach) or Zone III (needs skull-base access, sometimes endovascular). A Zone II hard-sign injury goes to the OR directly; the same hard signs in Zone I or III may still prompt urgent imaging first, purely because the surgical approach needs more planning.

Teaching: [figure: Zone II penetrating neck stab wound with hard signs (expanding hematoma, bruit) mandating immediate OR exploration.]Clinical Pearl: In penetrating neck trauma, hard signs mandate operative exploration regardless of current hemodynamic stability. Anatomic zone determines the surgical approach, not whether hard signs require the OR.

**Case [case-ludwigs-angina]**

Stem: A 45-year-old man with poor dental hygiene and a known infected lower molar presents with 2 days of rapidly worsening bilateral submandibular swelling that is firm and 'woody' to palpation. His tongue is elevated and pushed posteriorly, his voice is muffled, and he is drooling and leaning forward.

- Q: What is the diagnosis, and how does the exam differ from a typical drainable abscess?
  A: Ludwig's angina, a rapidly spreading, usually odontogenic cellulitis of the bilateral submandibular, sublingual, and submental spaces. Unlike a typical abscess, it is classically a diffuse, brawny/'woody' cellulitis without a discrete fluctuant pocket, and the hallmark is tongue elevation and posterior displacement from floor-of-mouth swelling.

- Q: What is the immediate priority, and why can standard airway maneuvers be difficult here?
  A: Airway assessment first. Floor-of-mouth swelling and tongue displacement can make bag-mask ventilation and direct laryngoscopy difficult or impossible, and sedation for a standard rapid-sequence approach risks losing the airway entirely if intubation fails. Awake fiberoptic intubation, with a surgical airway (cricothyroidotomy/tracheostomy) set up as backup, is the preferred controlled approach in a threatened airway.

- Q: What imaging and treatment follow once the airway is addressed?
  A: Contrast-enhanced CT of the neck to define the extent of spread and look for a drainable collection or gas, IV broad-spectrum antibiotics covering oral flora (streptococci and anaerobes), dental source control, and surgical drainage if a discrete abscess pocket is identified.

- Q: Why can this obstruct the airway before it ever 'points' like a typical abscess?
  A: Because it is primarily a diffuse fascial-space cellulitis rather than a walled-off collection, mechanical displacement of the tongue and floor of mouth can compromise the airway well before any fluctuant, drainable pus develops, so management does not wait for 'fluctuance' the way a peritonsillar abscess might.

Teaching: [figure: Ludwig's angina: odontogenic bilateral floor-of-mouth/submandibular space cellulitis threatening the airway via tongue displacement.]Clinical Pearl: Ludwig's angina can obstruct the airway via posterior tongue displacement before any drainable collection forms. Early, controlled airway management (awake fiberoptic intubation with surgical airway standby) is indicated rather than observation.

**Case [case-orbital-compartment-syndrome]**

Stem: Two hours after blunt facial trauma, a 28-year-old man develops rapidly worsening eye pain, proptosis, and decreasing vision in the affected eye. The globe feels tense and firm to palpation, extraocular movements are restricted, and intraocular pressure is markedly elevated.

- Q: What is the diagnosis and the underlying mechanism threatening his vision?
  A: Orbital compartment syndrome from retrobulbar hemorrhage: bleeding within the closed bony orbit raises intraorbital pressure, compressing the optic nerve and its vascular supply. Vision can be permanently lost within roughly an hour or two of significant ischemia, making this a true minutes-to-hours emergency.

- Q: Which exam findings confirm this, and what does a relative afferent pupillary defect (RAPD) add?
  A: Proptosis, a tense/resistant-to-retropulsion globe, decreased vision, elevated intraocular pressure, and restricted eye movements support the diagnosis. A RAPD indicates the optic nerve itself is being functionally compromised, a marker that the threat to vision is real and immediate, not just cosmetic swelling.

- Q: What is the emergency treatment, and should you wait for a CT scan first?
  A: Emergent lateral canthotomy and inferior cantholysis performed at the bedside: releasing the lateral canthal tendon (and its inferior crus) immediately decompresses the orbit. Do not wait for CT imaging if vision is acutely threatened; adjuncts (IOP-lowering agents such as acetazolamide or mannitol, head-of-bed elevation) support but do not replace surgical decompression.

- Q: Besides blunt trauma, what other common ENT-relevant setting causes this?
  A: Postoperative retrobulbar hemorrhage after functional endoscopic sinus surgery (FESS), an uncommon but recognized complication that requires the identical emergent bedside canthotomy/cantholysis response.

Teaching: Clinical Pearl: Retrobulbar hemorrhage with proptosis, a tense globe, and decreasing vision (particularly with an RAPD) requires immediate bedside lateral canthotomy and cantholysis, without waiting for imaging.

**Case [case-deep-neck-space-differential]**

Stem: Three patients present overnight with sore throat and difficulty swallowing. Patient A is 22 years old with trismus and a muffled 'hot potato' voice. Patient B is a 4-year-old with fever, torticollis, and refusal to move his neck. Patient C is a 6-year-old with rapid-onset drooling, a soft inspiratory stridor, and a tripod posture.

- Q: Match each patient to the most likely diagnosis and the single exam clue that clinches it.
  A: Patient A, peritonsillar abscess (quinsy): trismus with a muffled voice, classically with uvular deviation and a tonsillar bulge. Patient B, retropharyngeal abscess: torticollis and refusal to move/extend the neck in a young child. Patient C, epiglottitis: rapid onset, tripod positioning, drooling, and stridor, a 'look, don't touch' presentation.

- Q: Which of the three should NOT have their oropharynx examined with a tongue depressor outside a controlled airway setting, and why?
  A: Patient C (epiglottitis). The pathology is supraglottic, and manipulating the airway can precipitate complete obstruction. The other two can generally be examined with reasonable care, since their pathology is not primarily supraglottic.

- Q: What confirms the diagnosis in each case?
  A: PTA: largely clinical, sometimes with intraoral ultrasound to confirm fluctuance before aspiration. RPA: contrast-enhanced CT of the neck to define the collection and its relationship to the great vessels/mediastinum before drainage. Epiglottitis: clinical suspicion confirmed by flexible laryngoscopy, performed by ENT/anesthesia with airway backup immediately available, not by CT or throat swabs in an unstable patient.

- Q: What is the definitive management for each, and what do all three share as the very first step?
  A: PTA: needle aspiration or incision and drainage plus antibiotics, often outpatient afterward. RPA: IV antibiotics ± surgical (usually transoral) drainage if a discrete collection is present or the patient fails to improve. Epiglottitis: a secured airway (often awake fiberoptic intubation in a controlled OR) plus IV antibiotics; drainage doesn't apply, since it isn't an abscess. All three share the same first step regardless of which it turns out to be: airway assessment before anything else, since the deep neck spaces communicate and any one of these can progress toward airway compromise if untreated.

Teaching: Clinical Pearl: Peritonsillar abscess, retropharyngeal abscess, and epiglottitis overlap in presentation but diverge in exam findings, diagnostic study, and management. Age and exam pattern (trismus/uvular deviation vs. torticollis in a toddler vs. tripod/drooling/stridor) differentiate them; airway assessment takes priority regardless of diagnosis.

**Case [case-caustic-ingestion]**

Stem: An 18-month-old is found with an open bottle of liquid drain cleaner. She is crying, drooling, and refusing to swallow. There is no visible burn on her lips or mouth.

- Q: Does the absence of visible oral burns rule out significant esophageal injury?
  A: No. The presence or absence of oropharyngeal burns correlates poorly with the presence or severity of esophageal injury. A child can have a completely normal-looking mouth and still have significant esophageal damage, so a reassuring oral exam does not exclude serious injury lower down.

- Q: What should NOT be done, and what is the immediate priority given her drooling and refusal to swallow?
  A: Do not induce vomiting (re-exposes the esophagus and airway to the caustic agent on the way back up), do not attempt to neutralize the agent (the acid-base reaction is exothermic and worsens the burn), and avoid activated charcoal (doesn't bind caustics and obscures endoscopy). The immediate priority is airway assessment: oropharyngeal and laryngeal edema can threaten the airway even before esophageal symptoms are obvious.

- Q: What test defines the extent of injury, and when is it done?
  A: Upper endoscopy within about 12-24 hours of ingestion, once the airway and hemodynamic status are stable. This is done carefully, since the wall is most friable and perforation risk is highest in the first days. Grading (mucosal edema through transmural necrosis) predicts the risk of later esophageal stricture and, at the highest grade, perforation.

- Q: How does an adult intentional (suicidal) caustic ingestion change the picture, beyond the injury itself?
  A: The same airway-first and endoscopic-grading principles apply, but intentional ingestions often involve larger volumes or higher concentrations with a correspondingly higher risk of severe injury, and management must also include a psychiatric evaluation and a higher index of suspicion for associated injury (e.g. aspiration, mixed ingestions).

Teaching: Clinical Pearl: A normal oral exam does not exclude esophageal caustic injury. Do not induce vomiting or attempt neutralization. Endoscopy within 24 hours of stabilization grades injury severity and predicts stricture risk; intentional ingestion also requires psychiatric evaluation.

**Case [case-hereditary-angioedema]**

Stem: A 24-year-old woman presents with tongue and facial swelling and new abdominal pain. She describes recurrent, non-itchy swelling episodes of her hands, face, and once her larynx (requiring hospitalization) several times a year since adolescence, and says her mother has 'the same thing.' She is not on any ACE inhibitor. A previous episode was treated with epinephrine, diphenhydramine, and steroids 'without much benefit.'

- Q: What is the likely diagnosis, and which features point away from allergic or ACE-inhibitor-induced angioedema?
  A: Hereditary angioedema (HAE). Recurrent attacks since adolescence, a strong family history, absence of urticaria/itch, and a documented lack of response to epinephrine, antihistamines, and steroids all point away from an allergic mechanism. She is not taking an ACE inhibitor, which excludes that bradykinin-mediated cause as well.

- Q: What is the underlying mechanism?
  A: Deficiency or dysfunction of C1-esterase inhibitor (C1-INH), which normally restrains the kallikrein-kinin/contact-system cascade. Its absence leads to unchecked bradykinin generation, the same downstream mediator as ACE-inhibitor angioedema, but from a completely different upstream cause (a genetic deficiency rather than a drug effect).

- Q: Why is her new abdominal pain clinically important, and what mimic must be considered?
  A: HAE can cause bowel-wall angioedema, producing painful abdominal attacks that can closely mimic an acute surgical abdomen (appendicitis, bowel obstruction). Recognizing HAE as the cause can prevent an unnecessary laparotomy.

- Q: What is the acute treatment, and how should the tongue/laryngeal involvement be managed?
  A: C1-inhibitor concentrate, icatibant (a bradykinin B2-receptor antagonist), or ecallantide (a kallikrein inhibitor), not epinephrine, antihistamines, or steroids, which don't target the bradykinin pathway. Because laryngeal HAE attacks can progress to complete airway obstruction, early airway assessment and a low threshold for definitive airway management (potentially awake intubation or a surgical airway) is warranted alongside prompt disease-specific treatment; the team should not wait to see whether 'the epinephrine kicks in.'

Teaching: Clinical Pearl: Hereditary angioedema is a C1-inhibitor deficiency driving bradykinin-mediated, not histamine-mediated, swelling. Recurrent attacks since childhood/adolescence, a family history, absence of urticaria, and a documented non-response to the anaphylaxis protocol are the clues. Acute attacks need C1-INH concentrate, icatibant, or ecallantide (with long-term prophylactic options for frequent attacks), and laryngeal involvement still demands urgent airway vigilance even though the mechanism is different from anaphylaxis.

### Flashcards (28)

**[airway-first-card]** tags: EM, clinical, milestones: PC1, UKMLA: Stridor, RED FLAG, reviewer: (none)
- Front: In any ENT emergency, what question comes before forming a differential diagnosis?
- Back: Is the airway patent, at risk, or failing right now? Signs of impending obstruction (stridor, drooling, tripod positioning, agitation→lethargy, voice change) override diagnostic work-up; protect the airway first.
- Source: Standard emergency otolaryngology triage teaching.

**[epiglottitis-exam-card]** tags: EM, clinical, milestones: PC1, UKMLA: Stridor, RED FLAG, reviewer: (none)
- Front: Why should you avoid using a tongue depressor in suspected epiglottitis?
- Back: Oropharyngeal manipulation can precipitate complete airway obstruction in a swollen, irritable supraglottis. Keep the patient calm (child in a parent's lap) and secure the airway in a controlled setting (OR) with anesthesia/ENT present.
- Source: Standard emergency airway teaching.

**[adult-epiglottitis-airway-card]** tags: EM, clinical, milestones: PC1, UKMLA: Stridor, RED FLAG, reviewer: (none)
- Front: How does airway management of adult epiglottitis differ from the classic pediatric approach?
- Back: Adults have a larger airway, so most do NOT need intubation: a selective approach is used, with airway intervention required in under ~10% of cases. Red flags that predict the need for a secured airway: stridor, drooling, respiratory distress, rapid onset, tachypnea/hypoxia. When intervention is needed, awake flexible/fiberoptic intubation (with surgical airway backup) has replaced routine direct laryngoscopy. All patients get IV antibiotics and airway monitoring in a controlled setting.
- Source: Bridwell, Koyfman & Long, Am J Emerg Med, 2022; Felton et al., West J Emerg Med, 2021.

**[quinsy-vs-rpa-vs-epiglottitis-card]** tags: EM, clinical, milestones: PC1, MK1, UKMLA: Sore throat, RED FLAG, reviewer: (none)
- Front: Differentiate peritonsillar abscess, retropharyngeal abscess, and epiglottitis by key exam clue.
- Back: - Peritonsillar abscess: uvula deviation, tonsillar bulge, trismus.
- Retropharyngeal abscess: torticollis, neck stiffness, refusal to extend neck (mostly young children).
- Epiglottitis: tripod position, drooling, no oropharyngeal exam without airway backup.
- Source: Standard emergency otolaryngology differential teaching.

**[retropharyngeal-abscess-imaging-card]** tags: EM, clinical, milestones: PC1, MK2, UKMLA: Sore throat, reviewer: (none)
- Front: What is the imaging of choice and the surgical threshold for a pediatric retropharyngeal abscess?
- Back: Contrast-enhanced CT of the neck (after airway is assured) is the mainstay: it defines the collection, its relation to the great vessels/mediastinum, and guides drainage. Many cases resolve with IV antibiotics alone; surgical (usually transoral) drainage is indicated for airway compromise, an abscess > ~2-2.5 cm, or failure to improve on antibiotics.
- Source: Darawish et al., Deep Neck Space Infections in Children, Am J Otolaryngol, 2026.

**[deep-neck-spread-card]** tags: EM, anatomy, milestones: MK1, PC1, UKMLA: Neck lump, reviewer: (none)
- Front: Why can a localized pharyngeal infection become a mediastinal emergency?
- Back: The deep neck spaces communicate: peritonsillar → parapharyngeal → retropharyngeal spaces connect directly toward the mediastinum along fascial planes, allowing infection to descend and cause descending necrotizing mediastinitis if untreated.
- Source: Standard deep neck space anatomy teaching.

**[button-battery-card]** tags: EM, clinical, milestones: PC1, PC7, UKMLA: Ear and nasal discharge, RED FLAG, reviewer: (none)
- Front: Why is a button battery in the esophagus an hours-scale emergency, and what mitigates injury before removal?
- Back: Current conducted through moist mucosa generates hydroxide at the negative pole, causing alkaline liquefactive necrosis within hours (necrosis can begin within ~15 min, serious injury within ~2 h). An esophageal battery needs emergent endoscopic removal (ideally <2 h); delayed vascular complications (e.g., aortoenteric fistula) can occur days to weeks later.
Interim mitigation: honey 10 mL every 10 min (child >12 months, able to swallow, within 12 h of ingestion, en route) and sucralfate 1 g every 10 min in hospital: these must NEVER delay removal.
- Source: National Capital Poison Center guidance on button battery injuries.

**[post-tonsillectomy-bleed-card]** tags: EM, clinical, milestones: PC1, PC9, UKMLA: Sore throat, RED FLAG, reviewer: (none)
- Front: How should any post-tonsillectomy bleeding be triaged, regardless of apparent severity?
- Back: Urgently: airway and hemodynamic assessment, same-day ENT evaluation. Even a small ('herald') bleed can precede a much larger hemorrhage; there is no 'wait and see' for post-tonsillectomy bleeding.
- Source: Standard post-tonsillectomy hemorrhage teaching.

**[post-thyroid-hematoma-card]** tags: EM, clinical, milestones: PC1, PC9, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: What is the immediate bedside action for a rapidly expanding hematoma with stridor after thyroid/neck surgery?
- Back: Open the wound at the bedside (release skin/strap muscle closure) to evacuate the hematoma and relieve airway pressure immediately. This precedes imaging or transport to the OR, given how quickly it can obstruct the airway.
- Source: Standard head & neck surgery teaching on post-thyroidectomy hematoma.

**[orbital-complications-sinusitis-card]** tags: EM, clinical, milestones: PC1, MK2, UKMLA: Facial/periorbital swelling, RED FLAG, reviewer: (none)
- Front: What exam findings distinguish orbital (postseptal) cellulitis from preseptal cellulitis?
- Back: Proptosis, painful or restricted eye movement, and vision change indicate orbital (postseptal) involvement, a sinusitis complication requiring urgent CT and IV antibiotics ± surgical drainage. Preseptal cellulitis spares eye movement and vision.
- Source: Standard rhinology teaching on orbital complications of sinusitis.

**[invasive-fungal-sinusitis-card]** tags: EM, clinical, milestones: PC1, MK2, UKMLA: Facial pain, RED FLAG, reviewer: (none)
- Front: What clinical picture should trigger emergent evaluation for acute invasive fungal sinusitis, and what is first-line treatment?
- Back: Diabetic (especially DKA) or immunocompromised patient with facial pain, nasal congestion, a black/necrotic eschar on the septum or palate, and facial numbness. Management is a same-hour triad: emergent biopsy/frozen section and surgical debridement, IV liposomal amphotericin B (first-line), and aggressive correction of the underlying derangement (e.g., DKA). Delay measured in hours worsens mortality.
- Source: Standard rhinology teaching on acute invasive fungal sinusitis.

**[ssnhl-window-card]** tags: EM, clinical, milestones: PC1, PC4, UKMLA: Hearing loss, RED FLAG, reviewer: (none)
- Front: Why is sudden sensorineural hearing loss (SSNHL) treated urgently?
- Back: Corticosteroid treatment (oral or intratympanic) has a time-sensitive window: earlier initiation (ideally within about 2 weeks) improves the chance of hearing recovery. An urgent audiogram confirms the sensorineural nature and severity.
- Source: AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019.

**[orbital-compartment-syndrome-emerg-card]** tags: EM, clinical, milestones: PC1, UKMLA: Facial/periorbital swelling, RED FLAG, reviewer: (none)
- Front: What is the bedside emergency treatment for orbital compartment syndrome (expanding retrobulbar hematoma with vision loss)?
- Back: Emergent lateral canthotomy and cantholysis at the bedside, without waiting for imaging, when vision is acutely threatened; it decompresses the orbit and can save vision within a narrow time window.
- Source: Standard ophthalmic emergency teaching on orbital compartment syndrome.

**[ludwigs-angina-card]** tags: EM, clinical, milestones: PC1, UKMLA: Sore throat, RED FLAG, reviewer: (none)
- Front: A rapidly spreading, usually odontogenic, bilateral cellulitis of the floor of the mouth that pushes the tongue posteriorly and can obstruct the airway before any drainable abscess forms is called [...].
- Back: A rapidly spreading, usually odontogenic, bilateral cellulitis of the floor of the mouth that pushes the tongue posteriorly and can obstruct the airway before any drainable abscess forms is called Ludwig's angina. It often needs awake fiberoptic intubation, with a surgical airway on standby, since bag-mask ventilation and direct laryngoscopy can be difficult.
- Source: Standard deep neck infection teaching on Ludwig's angina.

**[deep-neck-abx-card]** tags: EM, pharm, milestones: PC1, SBP3, UKMLA: Sore throat, reviewer: (none)
- Front: What is the empiric antibiotic approach for a deep neck space infection or Ludwig's angina?
- Back: IV broad-spectrum coverage of oral flora: streptococci, Staphylococcus aureus, and anaerobes: most commonly ampicillin-sulbactam. Add vancomycin if MRSA risk factors are present. Clindamycin is an option in penicillin allergy. Antibiotics support but do not replace airway management and surgical/dental source control.
- Source: Bridwell et al., Diagnosis and Management of Ludwig's Angina, Am J Emerg Med, 2021; Eskander, de Almeida & Irish, N Engl J Med, 2019.

**[csf-leak-card-2]** tags: EM, clinical, milestones: PC1, UKMLA: Epistaxis, RED FLAG, reviewer: (none)
- Front: What bedside signs suggest CSF rather than ordinary rhinorrhea after head trauma, and what should be avoided?
- Back: A 'halo/ring' sign on gauze and glucose-positive fluid suggest CSF. Avoid nasal packing near a suspected skull-base defect (infection risk); most traumatic leaks are managed with head elevation and observation first.
- Source: Standard skull-base trauma teaching on CSF leak recognition.

**[epistaxis-emergency-card]** tags: EM, clinical, milestones: PC1, PC9, UKMLA: Epistaxis, RED FLAG, reviewer: (none)
- Front: What is the escalation ladder for epistaxis that fails initial first aid?
- Back: Direct pressure (10-15 min, pinching the cartilaginous septum, leaning forward) → topical vasoconstrictor/cautery → anterior nasal packing → posterior packing/balloon → surgical or interventional-radiology arterial ligation/embolization for refractory bleeding.
- Source: Standard emergency epistaxis management teaching.

**[foreign-body-airway-card]** tags: EM, clinical, milestones: PC1, PC7, UKMLA: Stridor, RED FLAG, reviewer: (none)
- Front: What history should raise concern for an aspirated airway foreign body in a young child?
- Back: A choking/coughing episode witnessed by a caregiver, followed by new-onset unilateral wheeze, stridor, or decreased breath sounds, even if the child seems to recover initially. Needs urgent evaluation (imaging ± rigid bronchoscopy), as objects can migrate or cause delayed complications.
- Source: Standard pediatric airway foreign body teaching.

**[caustic-ingestion-card]** tags: EM, clinical, milestones: PC1, UKMLA: Swallowing problems, RED FLAG, reviewer: (none)
- Front: What should NOT be done after a suspected caustic (alkali/acid) ingestion, and why?
- Back: Do not induce vomiting (re-exposes the esophagus to the caustic agent on the way back up) and do not attempt neutralization (exothermic reaction worsens injury). Urgent evaluation (often endoscopy) is needed to assess esophageal injury.
- Source: Standard emergency teaching on caustic ingestion.

**[triage-mindset-summary-card]** tags: EM, clinical, milestones: PC1, SBP1, UKMLA: Stridor, reviewer: (none)
- Front: What is the one-line mental model for triaging any ENT emergency?
- Back: Airway first, source second. Assess and protect the airway before pursuing the underlying diagnosis. Nearly every true ENT emergency (epiglottitis, deep neck infection, post-op hematoma, angioedema, foreign body) shares this same triage logic even though the causes differ completely.
- Source: Synthesis card: cross-references Foundations and every subspecialty track's red-flag items.

**[angioedema-three-types-card]** tags: EM, clinical, milestones: PC1, MK2, UKMLA: Allergies, RED FLAG, reviewer: (none)
- Front: A patient has lip/tongue swelling with no urticaria or itch. What three mechanisms of angioedema should you consider, and which one(s) respond to epinephrine?
- Back: - Allergic/mast-cell-mediated (histamine): responds to epinephrine/antihistamines/steroids.
- ACE-inhibitor-induced (bradykinin): does NOT reliably respond.
- Hereditary angioedema (HAE) from C1-esterase-inhibitor deficiency (bradykinin): does NOT respond.Only the allergic type is treated with standard anaphylaxis medications.
- Source: Standard emergency/allergy teaching; WAO hereditary angioedema guidance for the bradykinin-mediated framework.

**[ace-inhibitor-angioedema-card]** tags: EM, pharm, milestones: PC1, MK2, UKMLA: Allergies, RED FLAG, reviewer: (none)
- Front: Because ACE-inhibitor-induced angioedema is bradykinin-mediated and does not reliably respond to epinephrine, antihistamines, or steroids, the actual treatment is [...].
- Back: Because ACE-inhibitor-induced angioedema is bradykinin-mediated and does not reliably respond to epinephrine, antihistamines, or steroids, the actual treatment is stopping the ACE inhibitor, permanently. It can occur at any point after starting the drug, even years later.
- Source: Standard emergency medicine/allergy teaching on ACE-inhibitor-induced angioedema.

**[hereditary-angioedema-card]** tags: EM, clinical, milestones: PC1, MK2, UKMLA: Allergies, RED FLAG, reviewer: (none)
- Front: Hereditary angioedema is caused by deficiency or dysfunction of [...], which lets bradykinin accumulate unchecked and produces recurrent swelling attacks without urticaria or itch.
- Back: Hereditary angioedema is caused by deficiency or dysfunction of C1-esterase inhibitor (C1-INH), which lets bradykinin accumulate unchecked and produces recurrent swelling attacks without urticaria or itch. Acute attacks are treated with C1-inhibitor concentrate, icatibant, or ecallantide, not epinephrine.
- Source: WAO (World Allergy Organization) hereditary angioedema guidance.

**[penetrating-neck-zones-card]** tags: EM, anatomy, milestones: PC1, MK1, UKMLA: Neck lump, reviewer: (none)
- Front: In penetrating neck trauma, [...], running from the cricoid cartilage to the angle of the mandible, is the largest and most surgically accessible zone, and most penetrating injuries occur there.
- Back: In penetrating neck trauma, Zone II, running from the cricoid cartilage to the angle of the mandible, is the largest and most surgically accessible zone, and most penetrating injuries occur there. Zone I (below the cricoid) and Zone III (above the mandible) are both harder to access surgically.
- Source: ATLS principles; standard trauma teaching on the zones of the neck.

**[neck-trauma-hard-signs-card]** tags: EM, clinical, milestones: PC1, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: In penetrating neck trauma, any hard sign of vascular or aerodigestive injury, such as an expanding hematoma or active pulsatile bleeding, mandates [...], even if the patient looks stable at that moment.
- Back: In penetrating neck trauma, any hard sign of vascular or aerodigestive injury, such as an expanding hematoma or active pulsatile bleeding, mandates immediate operative exploration, even if the patient looks stable at that moment. In the stable patient without hard signs, the modern "no-zone" approach uses CT angiography plus serial exam to guide management, rather than the entry-wound zone.
- Source: ATLS principles; standard trauma teaching on penetrating neck trauma.

**[inhalation-injury-card]** tags: EM, clinical, milestones: PC1, PC2, UKMLA: Stridor, RED FLAG, reviewer: (none)
- Front: After a facial or inhalational thermal burn, because airway swelling is progressive, the airway is best secured by intubating [...], before stridor, drooling, or tripod positioning appear.
- Back: After a facial or inhalational thermal burn, because airway swelling is progressive, the airway is best secured by intubating early and electively, before stridor, drooling, or tripod positioning appear. Singed nasal hair, carbonaceous sputum, or new hoarseness after a closed-space fire should raise concern for this.
- Source: Standard burn/inhalational airway injury teaching.

**[caustic-alkali-vs-acid-card]** tags: EM, clinical, milestones: PC1, UKMLA: Swallowing problems, RED FLAG, reviewer: (none)
- Front: Alkali caustic ingestion, such as drain cleaner, causes [...] that penetrates deeply into the esophageal wall, whereas acid ingestion causes coagulative necrosis that forms a self-limiting surface eschar.
- Back: Alkali caustic ingestion, such as drain cleaner, causes liquefactive necrosis that penetrates deeply into the esophageal wall, whereas acid ingestion causes coagulative necrosis that forms a self-limiting surface eschar. Acid tends to injure the stomach more, since it passes through the esophagus quickly but pools in the antrum.
- Source: Standard emergency teaching on caustic ingestion.

**[caustic-endoscopy-grading-card]** tags: EM, clinical, milestones: PC1, UKMLA: Swallowing problems, RED FLAG, reviewer: (none)
- Front: After caustic ingestion, once the airway and hemodynamic status are stable, grading upper endoscopy is typically performed within [...] of the ingestion.
- Back: After caustic ingestion, once the airway and hemodynamic status are stable, grading upper endoscopy is typically performed within 12 to 24 hours of the ingestion. Higher injury grades, up to grade III transmural necrosis, predict a substantially higher risk of esophageal stricture and perforation.
- Source: Standard emergency/GI teaching on caustic ingestion endoscopic grading.

---

## Module: Foundations: Exam, Approach & Emergencies (`ent-exam`)
- version: 0.6.0-draft
- status: DRAFT, pending faculty review. 100% UKMLA ENT-item coverage reached (see docs/MODULE-BUILD-STANDARD.md coverage matrix); every card carries a UKMLA scope tag, an ACGME Milestone tag, and a named sourc
- facultyReviewer: ""
- curriculum anchors: UKMLA Content Map (GMC), scope anchor; every card/case tagged `ukmla` (content/ukmla.js); ACGME Otolaryngology-HNS Milestones 2.0, per-card tags (see content/frameworks.js); ACGME 6 core competencies, Foundations spans all six; AAO-HNS Otolaryngology Core Curriculum (OCC), sequencing / outcome comparator; UK undergraduate Delphi (Lloyd 2014) + AAO-HNS/OHSU medical-student curricula, student scope; Content written to US practice standards (named AAO-HNSF/specialty-society sources); UK/US differences flagged inline

### Anatomy notes

**The ENT regions at a glance** (tags: Five ENT regions)

[figure: Overview map of the five linked ENT anatomical regions (ear, nose/sinuses, oral cavity/pharynx, larynx, neck).]ENT anatomy breaks down into five linked regions.
RegionKey structuresHigh-yield pathologiesEarAuricle (pinna) and external auditory canal; tympanic membrane; ossicles (malleus, incus, stapes); Eustachian tube; cochlea, vestibule, semicircular canals; CN VII and CN VIIIAOM/OME, cholesteatoma, otosclerosis, sudden SNHL, vestibular schwannoma, BPPVNose & paranasal sinusesSeptum; inferior/middle/superior turbinates and their meatuses; frontal, ethmoid, maxillary, and sphenoid sinuses; ostiomeatal complex; cribriform plateEpistaxis, chronic rhinosinusitis, nasal polyps, CSF leak, sinonasal malignancyOral cavity & pharynxTongue and floor of mouth; palatine, lingual, and pharyngeal (adenoid) tonsils (Waldeyer's ring); soft and hard palate; naso-, oro-, and hypopharynxTonsillitis / peritonsillar abscess, OSA, oropharyngeal (HPV-related) cancer, nasopharyngeal carcinomaLarynxEpiglottis; thyroid and cricoid cartilages; true and false vocal folds; recurrent laryngeal and superior laryngeal nervesLaryngitis, vocal-fold paralysis, laryngeal cancer, epiglottitis, croupNeckAnterior/posterior triangles (sternocleidomastoid); nodal levels I-VII; thyroid, parotid, and submandibular glandsMalignant neck mass, thyroid nodule, sialadenitis/salivary stones, deep neck space infectionThe nasal septum divides the nasal cavity in the midline; the meatuses are the grooves beneath each turbinate that the sinuses drain into. The salivary glands (parotid, submandibular, sublingual, plus hundreds of minor glands) sit at the crossroads of the oral cavity and neck. The epiglottis is the cartilage leaf that folds down to protect the airway on swallowing -- the hinge between the pharynx above and the larynx below.

**Cranial nerves** (tags: Cranial nerves · Skull-base exit · Function)

[figure: All twelve cranial nerves with their skull-base exit foramen and function.]All twelve cranial nerves, in order, with the skull base foramen or canal each one exits through and why it matters clinically. This is the complete reference; see the diagram below for where each foramen actually sits.
NerveSkull base exitTypeFunctionIf injuredI &middot; OlfactoryCribriform plateSensorySmellAnosmia; classic after an anterior skull-base fracture through the cribriform plateII &middot; OpticOptic canalSensoryVisionMonocular vision loss, relative afferent pupillary defect (RAPD)III &middot; OculomotorSuperior orbital fissureMotor (+ parasympathetic)Superior, inferior, and medial rectus; inferior oblique; levator palpebrae superioris; parasympathetic to the sphincter pupillae and ciliary musclePtosis, eye deviated "down and out," and a fixed dilated pupil (a "surgical" third-nerve palsy, e.g. from a compressive aneurysm) vs pupil-sparing (a "medical" cause, e.g. microvascular/diabetic)IV &middot; TrochlearSuperior orbital fissureMotorSuperior oblique (eye moves down and in)Vertical diplopia, worse looking down/reading; a compensatory head tilt away from the affected sideV1 &middot; Ophthalmic (trigeminal)Superior orbital fissureSensorySensation: forehead, scalp, corneaLoss of the corneal reflex (afferent limb), forehead/scalp numbnessV2 &middot; Maxillary (trigeminal)Foramen rotundumSensorySensation: midface, upper teeth, palateMidface and upper-teeth numbnessV3 &middot; Mandibular (trigeminal)Foramen ovaleBothSensory: lower face, chin, lower teeth, anterior two-thirds tongue (general sensation only, not taste). Motor: muscles of mastication (masseter, temporalis, medial and lateral pterygoids)Lower-face/tongue numbness; on opening, the jaw deviates toward the weak side (unopposed contralateral pterygoid)VI &middot; AbducensSuperior orbital fissureMotorLateral rectus (eye moves out)Horizontal diplopia; the eye cannot abduct past midlineVII &middot; FacialInternal acoustic meatus (traverses the temporal bone; exits the skull at the stylomastoid foramen)Both (+ parasympathetic)Motor: muscles of facial expression, stapedius, posterior belly of digastric, stylohyoid. Sensory: taste, anterior two-thirds of tongue (via chorda tympani). Parasympathetic: lacrimal, submandibular, and sublingual glandsFacial droop (forehead spared if central/UMN, forehead involved if peripheral/Bell's), hyperacusis (stapedius), dry eye/mouth, taste lossVIII &middot; VestibulocochlearInternal acoustic meatusSensoryHearing (cochlear division) and balance (vestibular division)Sensorineural hearing loss, tinnitus, vertigo/imbalance; a unilateral asymmetric pattern raises concern for vestibular schwannomaIX &middot; GlossopharyngealJugular foramenBoth (+ parasympathetic)Motor: stylopharyngeus. Sensory: pharynx, posterior third of tongue (taste and general sensation), carotid body/sinus. Parasympathetic: parotid glandLoss of the gag reflex (afferent limb), impaired posterior-tongue tasteX &middot; VagusJugular foramenBoth (+ parasympathetic)Motor: pharyngeal and laryngeal muscles (via the pharyngeal and recurrent laryngeal branches), soft palate. Sensory: external ear, larynx, and thoracoabdominal viscera. Parasympathetic: thorax and abdomen to the splenic flexureHoarseness/vocal-fold paralysis (recurrent laryngeal branch), dysphagia, and the soft palate/uvula deviates away from the lesion on "ahh"XI &middot; AccessoryJugular foramenMotorTrapezius and sternocleidomastoidShoulder droop and weak shrug (trapezius); weak head turn to the opposite side (SCM) -- classically injured in posterior triangle/level V neck dissectionXII &middot; HypoglossalHypoglossal canalMotorIntrinsic and most extrinsic tongue musclesOn protrusion, the tongue deviates toward the side of a peripheral (LMN) lesion

**Nose & paranasal sinuses** (tags: Turbinates · Ostiomeatal complex · Orbit/brain proximity)

[figure: Turbinates/meatuses, ostiomeatal complex drainage, and proximity of sinuses to orbit/skull base.]
- Turbinates (conchae): the inferior, middle, and superior turbinates are scroll-shaped bony shelves projecting from the lateral nasal wall, covered in vascular mucosa; they warm, humidify, and filter inspired air, and each one creates the space (meatus) beneath it. "Turbinate" and "concha" are the same structure -- turbinate is the more common clinical term, concha the anatomical one.
- Meatuses: the grooves underneath each turbinate. The inferior meatus receives the nasolacrimal duct. The middle meatus is where the frontal, anterior ethmoid, and maxillary sinuses all drain via the ostiomeatal complex (OMC); block it and you get sinusitis. The superior meatus receives drainage from the posterior ethmoid air cells. The sphenoid sinus drains separately, via the sphenoethmoidal recess above and behind the superior turbinate, not into any of the three meatuses.
- Orbit and anterior skull base: the ethmoid sinuses are separated from the orbit only by the paper-thin lamina papyracea, and from the anterior cranial fossa only by the thin, perforated cribriform plate and fovea ethmoidalis. Because these walls are so thin, sinus infection or surgical instrumentation can breach either boundary: breach the lamina papyracea and you get orbital cellulitis/abscess (proptosis, painful or limited eye movement, vision change); breach the skull base and you risk a CSF leak, meningitis, or intracranial abscess.

**Larynx: essentials** (tags: Epiglottis · Vocal folds · Recurrent laryngeal nerve)

[figure: Epiglottis, thyroid/cricoid cartilage framework, true/false vocal folds, recurrent laryngeal nerve.]
- Epiglottis: the cartilage leaf that folds down over the laryngeal inlet to protect the airway on swallowing.
- Cartilage framework -- unpaired: thyroid (the largest, forms the laryngeal prominence/Adam's apple), cricoid (the only complete cartilage ring in the airway), and the epiglottis itself. Paired: arytenoid (the vocal folds attach to these and they rotate/slide to open and close the airway), plus the small corniculate and cuneiform cartilages sitting within the aryepiglottic folds.
- True vs false vocal folds: the true vocal folds (vocal cords) sit below the false vocal folds (also called the vestibular folds), separated by the ventricle (of Morgagni). Only the true folds vibrate to produce voice; the false folds protect the airway but don't normally phonate.
- Nerve supply: the recurrent laryngeal nerve (RLN) supplies every intrinsic laryngeal muscle except one (cricothyroid) -- both motor to those muscles and sensation below the vocal folds. Its long course through the chest and around the aorta (left) or subclavian artery (right) before ascending back to the larynx explains hoarseness from lung, thyroid, or mediastinal disease along that path. The external branch of the superior laryngeal nerve (EBSLN) supplies the cricothyroid muscle alone (pitch control); the internal branch of the superior laryngeal nerve is purely sensory, supplying the mucosa above the vocal folds down to their level (the afferent limb of the cough/protective reflex when food or liquid threatens the airway).

**Neck: triangles, levels & glands** (tags: Neck triangles · Nodal levels I-VII · Salivary glands)

[figure: Anterior/posterior neck triangles, cervical nodal levels I-VII, and key neck glands.]
- Triangles: the sternocleidomastoid splits the neck into anterior and posterior triangles.
- Nodal levels: lymph nodes are mapped as levels I-VI, used for every neck mass and cancer.
- Key glands: thyroid (midline, moves with swallowing), parotid (the facial nerve runs through it), and submandibular (a common site for stones).Cervical nodal levels, defined by their surgical boundaries (the landmarks a surgeon actually uses in the neck, not radiologic estimates):
LevelSuperiorInferiorAnteriorPosteriorMain contentsPrimary drainageKey surgical riskIa (submental)Symphysis of the mandibleBody of the hyoidContralateral anterior belly of digastricIpsilateral anterior belly of digastricSubmental nodesChin, lower lip, floor of mouth, tongue tipLow; generally safe dissectionIb (submandibular)Body of the mandiblePosterior belly of digastricAnterior belly of digastricStylohyoid muscleSubmandibular gland and nodesOral cavity, anterior faceMarginal mandibular branch of CN VII (lip droop); submandibular duct/gland injuryIIa / IIb (upper jugular)Skull baseInferior body of the hyoidLateral border of sternohyoidPosterior border of sternocleidomastoidUpper deep cervical nodes; IIa/IIb split by the spinal accessory nerveOral cavity, nasopharynx, oropharynx, larynx, parotidSpinal accessory nerve (CN XI) -- shoulder droop/weak shrug from trapezius palsyIII (mid jugular)Inferior body of the hyoidInferior border of the cricoid cartilageLateral border of sternohyoidPosterior border of sternocleidomastoidMiddle deep cervical nodesLarynx, hypopharynx, oropharynxRelatively low; hypoglossal nerve (CN XII) at the superior marginIV (lower jugular)Inferior border of the cricoid cartilageClavicleLateral border of sternohyoidPosterior border of sternocleidomastoidLower deep cervical nodesLarynx, thyroid, hypopharynx, cervical esophagusThoracic duct injury on the left (chyle leak); phrenic nerveVa / Vb (posterior triangle)Convergence of sternocleidomastoid and trapeziusClaviclePosterior border of sternocleidomastoidAnterior border of trapeziusSpinal accessory and transverse cervical nodes; Va/Vb split by the inferior-cricoid planeNasopharynx, posterior scalp and neck, thyroidSpinal accessory nerve (CN XI) is most exposed here, running superficially across the triangleVI (central compartment)Hyoid boneSuprasternal notchBounded laterally by the carotid sheaths (a midline compartment, not flanked anterior/posterior like the lateral levels)Pretracheal, paratracheal, prelaryngeal (Delphian) nodesThyroid, glottic and subglottic larynx, hypopharynx, cervical esophagusRecurrent laryngeal nerve (vocal-fold paralysis/hoarseness); parathyroid glands (hypocalcemia)VII (superior mediastinal)Suprasternal notchInnominate arteryBounded by the trachea and great vesselsSuperior mediastinal nodesThyroid, cervical esophagusGreat vessels, thoracic duct, phrenic and recurrent laryngeal nervesCervical fascia, high-yield: deep to the skin and subcutaneous fat, the deep cervical fascia has three layers. The investing (superficial) layer wraps the whole neck and splits to envelop sternocleidomastoid, trapezius, the parotid, and the submandibular gland. The pretracheal layer surrounds the thyroid, trachea, and esophagus, and continues down into the mediastinum -- which is exactly why an untreated deep neck infection here (or in the retropharyngeal "danger space" just behind it) can descend into the chest as mediastinitis. The prevertebral layer covers the prevertebral muscles and vertebral column and forms the floor of the posterior triangle. All three layers contribute fibers to the carotid sheath, which encloses the common/internal carotid artery, internal jugular vein, and vagus nerve together.

**Tympanic membrane landmarks** (tags: Cone of light · Umbo · Pars tensa vs flaccida)

[figure: Naming otoscopic TM landmarks: cone of light, umbo, manubrium, pars tensa/flaccida.]On otoscopy, name these landmarks:

- Cone of light (antero-inferior): the triangular reflection of the otoscope light off the pars tensa; a normal finding that blunts or fragments with effusion or retraction.
- Umbo (central): the point where the tip of the malleus indents the drum from behind -- the center of the cone of light and the point of maximal TM displacement.
- Manubrium (handle) of malleus: runs from the umbo up to the lateral process, the visible bony prominence at its top; the main landmark for orientation on otoscopy.
- Pars tensa vs pars flaccida: the taut, fibrous-layered main part of the drum (pars tensa) vs the smaller, lax superior part above the lateral process (pars flaccida, or Shrapnell's membrane) -- the classic site for an attic cholesteatoma.Three layers of the tympanic membrane: an outer squamous (skin) layer, continuous with the ear-canal skin, that migrates laterally to keep the drum self-cleaning; a middle fibrous layer that gives the drum its tension and strength (present in the pars tensa, absent in the pars flaccida -- why the flaccida retracts and perforates more easily); and an inner mucosal layer, continuous with the middle-ear mucosa.
Performing the exam: pull the pinna up and back in an adult (down and back in a young child) to straighten the ear canal, then use the largest speculum the canal will comfortably accept. Note color, translucency, contour, perforation, and mobility (pneumatic otoscopy: a normal drum moves briskly to insufflation; sluggish or absent movement is the most reliable bedside sign of a middle-ear effusion).

**Flexible Nasopharyngolaryngoscopy (NPL)** (tags: Nasal cavity · Nasopharynx · Larynx)

Flexible nasolaryngoscopy (flex NPL) passes a thin fiberoptic or distal-chip scope through the nose to see what anterior rhinoscopy and a tongue depressor cannot reach. In sequence it shows:

- Nasal cavity: septum, inferior and middle turbinates, meatuses, mucosa, discharge, polyps, masses.
- Nasopharynx: adenoid pad, Eustachian tube openings (torus tubarius), and the fossa of Rosenm&uuml;ller, the classic nasopharyngeal carcinoma site.
- Oropharynx: base of tongue, lingual tonsils, vallecula, posterior pharyngeal wall.
- Hypopharynx: pyriform sinuses and the postcricoid region.
- Larynx: epiglottis, aryepiglottic folds, false and true vocal folds, anterior commissure; vocal-fold mobility can be judged dynamically.
- Subglottis: the narrowest adult laryngeal view; a tongue-pull maneuver is often needed to see the lateral and posterior walls.Why it matters
Nasal endoscopy reveals pathology missed on anterior rhinoscopy in roughly 39% of patients, and its overall diagnostic accuracy is higher (about 85% vs 74%). It is also the criterion-standard assessment of the posterior nasal cavity and nasopharynx, especially in children.

### Anatomy diagrams (7)

**Diagram: The ear in cross-section**

External ear (left) to inner ear (right). Tap each covered label to name the structure, then reveal.

_Image source: Parts of the ear. NIDCD / NIH. Public domain._
- Pinna: cartilage-and-skin auricle that collects and funnels sound into the ear canal.
- Temporal bone: houses the entire middle and inner ear; its petrous portion is the densest bone in the body.
- Stapes: smallest bone in the body; its footplate sits in the oval window and drives fluid movement in the inner ear.
- Malleus: the ossicle attached to the eardrum; its handle (manubrium) is the landmark seen on otoscopy.
- Semicircular canals: three orthogonal fluid-filled loops that detect angular head rotation for balance.
- Vestibular nerve: carries balance signals from the semicircular canals and otolith organs to the brainstem.
- Auditory (cochlear) nerve: carries sound signals from the cochlea's hair cells to the brainstem.
- Incus: the middle ossicle, bridging the malleus and stapes.
- Ear canal (external auditory meatus): S-shaped cartilaginous-then-bony canal; pull the pinna up and back in an adult to straighten it for otoscopy.
- Eardrum (tympanic membrane): vibrates with sound and transmits that energy to the ossicular chain.
- Eustachian tube: connects the middle ear to the nasopharynx and equalizes pressure; dysfunction causes effusion or barotrauma.
- Cochlea: snail-shaped, fluid-filled organ that converts sound vibration into neural signals via hair cells.

**Diagram: Paranasal sinuses: coronal**

A coronal slice through the face. Name the sinuses, turbinates, and the drainage pathway.

_Image source: Paranasal Sinuses: Coronal CT & Anatomy. radiopaedia.org._
- Superior concha: the smallest, most posterior-superior turbinate; overlies the superior meatus where the posterior ethmoid cells drain.
- Ethmoidal air cell: thin-walled cells separated from the orbit only by the paper-thin lamina papyracea, so ethmoiditis can spread to cause orbital cellulitis.
- Contents of orbit: separated from the ethmoid sinus by the lamina papyracea, the classic route for orbital spread of sinogenic infection.
- Superior meatus: the groove under the superior concha; receives drainage from the posterior ethmoid air cells.
- Middle concha (turbinate): overlies the middle meatus and the ostiomeatal complex, the final common drainage pathway for the frontal, maxillary, and anterior ethmoid sinuses.
- Middle meatus: drains the frontal sinus, anterior ethmoid cells, and maxillary sinus; obstruction here drives most cases of rhinosinusitis.
- Septum nasi: the midline cartilage and bone partition; deviation can obstruct one nasal passage and its sinus drainage.
- Inferior concha (turbinate): the largest turbinate, a separate bone that warms and humidifies inspired air.
- Maxillary sinus: the largest paranasal sinus; its ostium sits high on the medial wall, so it drains uphill into the middle meatus.
- Inferior meatus: the groove under the inferior concha; the nasolacrimal duct opens here, not into the sinus drainage pathway.
- Hard palate: the bony floor of the nasal cavity and roof of the mouth, separating the two.

**Diagram: Larynx: coronal**

The airway framework and the folds that make voice. Name each, then reveal.

_Image source: Larynx: Coronal Section Showing Airway Framework and Vocal Folds. Wikimedia Commons._
- Hyoid bone: the free-floating U-shaped bone suspending the larynx, anchoring the thyrohyoid membrane above.
- Epiglottis: the cartilage leaf that folds down over the laryngeal inlet during swallowing to protect the airway.
- Thyrohyoid membrane: connects the hyoid bone to the thyroid cartilage; pierced by the superior laryngeal neurovascular bundle.
- False (vestibular) vocal cords: mucosal folds above the true cords that protect the airway but do not normally phonate.
- Ventricle (of Morgagni): the space between the false and true cords; a common site for laryngocele formation.
- True vocal cords: the folds that vibrate to produce voice; their free edge is the primary site examined in any hoarseness workup.
- Vocalis muscle: the medial belly of thyroarytenoid that tenses and fine-tunes the vocal fold for pitch.
- Thyroid cartilage: the largest laryngeal cartilage, forming the laryngeal prominence (Adam's apple); the framework for the vocal cords.
- Cricoid cartilage: the only complete cartilage ring in the airway; cricothyrotomy is performed just above it.
- Trachea: the cartilage-ringed airway continuing below the cricoid to the carina.

**Diagram: Neck nodal levels I-VI**

The map behind every neck mass and cancer. Locate each level, then reveal.

_Image source: Neck Nodal Levels I-VI Schematic. Wikimedia Commons._
- Posterior auricular (mastoid) nodes: drain the posterior scalp and pinna, part of the outer Waldeyer nodal ring.
- Occipital nodes: drain the posterior scalp; enlarge with scalp infection or, classically, rubella.
- Superficial cervical nodes: run along the external jugular vein, superficial to sternocleidomastoid.
- Lower border of the hyoid bone: the surface landmark separating level II (above) from level III (below).
- Superior deep cervical nodes: the upper deep cervical chain along the internal jugular vein, corresponding to level II.
- Lower margin of the cricoid cartilage: the surface landmark separating level III (above) from level IV (below).
- Inferior deep cervical nodes: the lower deep cervical chain along the internal jugular vein, corresponding to level IV.
- Parotid nodes: intra- and peri-parotid nodes draining the scalp, external ear, and the parotid gland itself.
- Buccinator (facial) nodes: drain the cheek and lower eyelid along the course of the facial vessels.
- Supramandibulary (submandibular) region: houses the level Ib nodes and gland, draining the oral cavity, submandibular gland, and anterior face.
- Submaxillary (submandibular) gland: sits within level Ib, a common site for salivary stones and gland swelling.
- Submental nodes: the level Ia group, draining the chin, lower lip, and anterior floor of mouth.
- Level Ia (submental): between the anterior bellies of digastric, draining the chin, lower lip, and anterior floor of mouth.
- Level Ib (submandibular): contains the submandibular gland and nodes, draining the oral cavity and anterior face.
- Level IIa (upper jugular, anterior to CN XI): drains the oral cavity, nasopharynx, oropharynx, larynx, and parotid.
- Level IIb (upper jugular, posterior to CN XI): the posterior upper jugular group, split from IIa by the spinal accessory nerve.
- Level III (mid jugular): hyoid to cricoid, draining the larynx, hypopharynx, and oropharynx.
- Level IV (lower jugular): cricoid to clavicle, draining the larynx, thyroid, hypopharynx, and cervical esophagus.
- Level Va (upper posterior triangle): above the cricoid plane, draining the nasopharynx and posterior scalp.
- Level Vb (lower posterior triangle): below the cricoid plane, draining the thyroid and posterior neck.
- Level VI (central compartment): pretracheal, paratracheal, and Delphian nodes draining the thyroid and larynx; the key nodal basin for thyroid cancer.

**Diagram: Right tympanic membrane: landmarks**

Schematic for label practice (DRAFT: confirm laterality/orientation with faculty). Hide the labels, name each landmark, then reveal to check.

_Image source: Normal Right Tympanic Membrane Landmarks (Otoscopic View). oxfordmedicaleducation.com._
- Posterior fold: mucosal fold running from the lateral process of the malleus posteriorly; marks the upper edge of the pars tensa.
- Pars flaccida (Shrapnell's membrane): the lax superior part of the eardrum with no fibrous middle layer; the classic site for an attic (acquired) cholesteatoma.
- Anterior fold: mucosal fold running from the lateral process of the malleus anteriorly; marks the upper edge of the pars tensa.
- Short process (lateral process) of malleus: the visible bony prominence at the top of the malleus handle, between the anterior and posterior folds.
- Incus: the middle ossicle, sometimes visible as a faint shadow through the postero-superior eardrum.
- Umbo: the point where the malleus tip indents the eardrum; the center of the cone of light and a key landmark on otoscopy.
- Manubrium (handle) of malleus: runs from the umbo up to the lateral process; the main landmark for orientation on otoscopy.
- Annulus: the fibrocartilaginous ring anchoring the pars tensa into the tympanic sulcus of the temporal bone.
- Pars tensa: the taut, fibrous-layered main part of the eardrum that vibrates efficiently with sound.
- Cone of light (light reflex): the antero-inferior light reflection from the otoscope off the pars tensa; blunts or distorts with effusion or retraction.

**Diagram: The ENT regions at a glance**

A side profile of the head and neck, divided into the regions this specialty covers. Hide the labels, name each region, then reveal.

_Image source: The Five Primary ENT Anatomical Regions Overview. Illustration generated with Google Gemini._
- Sphenoidal sinus: the most posterior paranasal sinus, sitting below the pituitary fossa and beside the optic nerve and cavernous sinus; infection here can threaten vision or spread intracranially.
- Nasal meatuses (superior, middle, inferior): the grooves beneath each turbinate; the middle meatus houses the ostiomeatal complex, the final common drainage pathway for the frontal, maxillary, and anterior ethmoid sinuses.
- Pharyngeal tonsil (adenoid): lymphoid tissue on the nasopharyngeal roof; hypertrophy in children causes nasal obstruction, mouth breathing, and Eustachian tube dysfunction.
- Opening of the auditory (Eustachian) tube: the nasopharyngeal orifice that equalizes middle-ear pressure; obstruction (adenoids, nasopharyngeal tumor) causes effusion.
- Nasopharynx: skull base to soft palate; site of the adenoid and, in adults, nasopharyngeal carcinoma (think unilateral effusion plus neck mass).
- Uvula: the midline soft-palate projection; deviates away from the affected side in peritonsillar abscess.
- Palatine tonsil: the paired lymphoid tissue at the oropharyngeal fauces; the usual source of tonsillitis and peritonsillar abscess.
- Fauces: the archway connecting the oral cavity to the oropharynx, bounded by the palatoglossal and palatopharyngeal folds.
- Oropharynx: soft palate to hyoid; includes the tonsils, tongue base, and posterior pharyngeal wall, the classic site for HPV-related oropharyngeal cancer.
- Laryngopharynx (hypopharynx): hyoid to cricoid, behind the larynx; an easily missed site for hypopharyngeal cancer presenting with dysphagia.
- Vestibular (false vocal) fold: the mucosal fold above the true cord that protects the airway but does not normally phonate.
- Vocal (true) fold: the vibrating edge that produces voice; exam-room focus for any hoarseness workup.
- Esophagus: begins behind the cricoid cartilage at the cricopharyngeus (upper esophageal sphincter); a foreign body or button battery here is a time-critical emergency.
- Frontal sinus: drains via the frontonasal duct into the middle meatus; frontal sinusitis can erode posteriorly to cause intracranial complications (Pott's puffy tumor).
- Ethmoid bone: forms the nasal roof and part of the medial orbital wall (lamina papyracea), the classic route for orbital spread of sinogenic infection.
- Olfactory epithelium: sits near the cribriform plate; carries CN I fibers through it, so a skull-base fracture here causes anosmia and CSF rhinorrhea risk.
- Nasal conchae (turbinates): the superior, middle, and inferior scroll-shaped bones that warm, humidify, and filter inspired air.
- Nasal vestibule: the skin-lined entrance just inside the nostril; the site of vestibulitis and the 'danger triangle' venous drainage toward the cavernous sinus.
- Nostril (naris): the external opening of the nasal cavity.
- Hard palate: the bony anterior roof of the mouth; a cleft here causes nasal regurgitation of food and speech problems.
- Soft palate: the mobile posterior palate that elevates on swallowing (CN X) to seal off the nasopharynx; deviates away from a peritonsillar abscess.
- Tongue: its posterior third (base) belongs to the oropharynx and is frequently missed on routine oral exam, delaying early cancer detection.
- Lingual tonsil: lymphoid tissue at the tongue base, part of Waldeyer's ring; can hide an HPV-related primary tumor presenting as an unknown-primary neck node.
- Epiglottis: the cartilage leaf that folds over the laryngeal inlet during swallowing; a floppy, swollen epiglottis is the airway emergency of epiglottitis.
- Hyoid bone: the free-floating U-shaped bone anchoring the tongue base and larynx; the surface landmark separating neck level II (above) from level III (below).
- Thyroid cartilage: the largest laryngeal cartilage, forming the laryngeal prominence (Adam's apple) and the framework for the vocal cords.
- Cricoid cartilage: the only complete cartilage ring in the airway; cricothyrotomy is performed through the cricothyroid membrane just above it.
- Thyroid gland: sits over the 2nd-4th tracheal rings; a midline neck mass that moves with swallowing points here.
- Trachea: the cartilage-ringed airway continuing below the cricoid to the carina.

**Diagram: The skull base foramina and their cranial nerves**

The skull base viewed from above, from the anterior fossa (top) to the posterior fossa (bottom), right side shown. Every foramen here is paired left-right except the midline cribriform plate. Hide the labels, name each foramen and its nerve(s), then reveal.

_Image source: Skull Base Foramina and Their Cranial Nerves. Radiopaedia._
- Cribriform plate: transmits the olfactory nerve (CN I); anterior skull-base fracture here causes anosmia and CSF rhinorrhea.
- Optic canal: transmits the optic nerve (CN II) and ophthalmic artery; compression here causes progressive monocular vision loss.
- Superior orbital fissure: transmits CN III (oculomotor), CN IV (trochlear), CN V1 (ophthalmic), and CN VI (abducens); a lesion here causes painful ophthalmoplegia (superior orbital fissure syndrome).
- Foramen rotundum: transmits CN V2 (maxillary nerve), the route for perineural spread of some sinonasal and skin cancers.
- Foramen ovale: transmits CN V3 (mandibular nerve); also a common route for perineural tumor spread from the face and parotid.
- Internal acoustic (auditory) meatus: transmits CN VII (facial) and CN VIII (vestibulocochlear); site of vestibular schwannoma.
- Jugular foramen: transmits CN IX (glossopharyngeal), CN X (vagus), and CN XI (accessory), plus the internal jugular vein; jugular foramen syndrome affects all three nerves together.
- Hypoglossal canal: transmits CN XII (hypoglossal nerve); a lesion causes ipsilateral tongue weakness, with deviation toward the affected side on protrusion.

### Clinical blocks (9)

**[exam-flow] A quick, complete ENT exam sequence**

EarsInspect the pinna and periauricular area. Perform otoscopy of both canals and TMs using the largest comfortable speculum, bracing the hand on the cheek (pull the pinna up-and-back in adults, down-and-back in young children). Clear obstructing cerumen first, since the TM cannot be assessed through it. Name the landmarks (cone of light, umbo, manubrium/lateral process of malleus, pars tensa vs. flaccida) and note color, position, translucency, perforation, and mobility. Add pneumatic otoscopy to assess mobility and effusion, and tuning forks (512 Hz) if there is a hearing concern. A new unilateral middle-ear effusion in an adult warrants a nasopharyngeal exam to exclude nasopharyngeal carcinoma.
NoseAnterior rhinoscopy with a speculum (or otoscope) visualizes only the anterior third: septum (deviation, perforation, spurs), inferior/middle turbinates, mucosa (boggy/pale vs. erythematous), discharge, and polyps. A topical decongestant improves the view when mucosa is edematous. Posterior disease requires endoscopy.
Oral cavity / oropharynxRemove dentures. Inspect dentition, buccal mucosa, hard/soft palate, and the ventral and lateral tongue and floor of mouth (the highest-risk oral-cancer sites), with bimanual palpation of the floor of mouth and digital palpation of the tongue base and tonsillar fossae. Have the patient open the mouth without protruding the tongue (protrusion obscures the oropharynx), and assess symmetric palatal elevation (CN IX/X). Note tonsillar asymmetry, mass, or ulceration.
Nasopharynx / hypopharynx / larynxThese subsites, including the Eustachian tube orifices, pyriform sinuses, epiglottis, vocal folds (mobility), and subglottis, cannot be seen on routine exam and require flexible (or mirror) laryngoscopy. An incomplete office exam of a symptomatic patient should prompt referral or endoscopy.
NeckSystematic palpation of nodal levels I-VI (plus level VII, superior mediastinal), thyroid, and the parotid and submandibular glands. Characterize any mass by size, firmness, mobility/fixation, and location. A nontender, firm, fixed mass is more concerning for malignancy. Avoid mistaking normal structures (hyoid, C2 transverse process, carotid bulb, submandibular gland) for pathology.
Cranial nervesAn itemized screen: ocular motility (III/IV/VI), facial sensation (V), facial movement including forehead (VII), hearing (VIII), palate elevation and gag (IX/X), vocal fold movement (X/RLN), tongue mobility (XII), and shoulder/SCM elevation (XI), with left-right comparison. Emphasize CN VII in otologic disease and CN X in voice complaints.

**[flex-npl-indications] Flex NPL: when to scope**

Scope whenever the diagnosis cannot be made from history plus anterior rhinoscopy, or a structure beyond their reach must be seen. The most common indications are hoarseness, chronic cough, globus sensation, and nasal obstruction. High yield indications:

- Hoarseness or dysphonia lasting more than 2-4 weeks (exclude vocal-fold lesion, paralysis, or laryngeal cancer).
- Dysphagia, odynophagia, or globus with red flags.
- Stridor or any airway concern.
- Neck mass (scope the mucosal upper aerodigestive tract for a primary).
- Referred otalgia with a normal ear exam (scope for an aerodigestive source).
- Unexplained unilateral nasal obstruction, epistaxis, or discharge (exclude a sinonasal or nasopharyngeal mass).
- Suspected foreign body or epiglottitis (in a controlled setting).
- Aspiration or swallow assessment (the basis of FEES).
- Pearl: true

**[flex-npl-technique] Flex NPL: technique and preparation**

- Position: patient upright, leaning slightly forward in a &ldquo;sniffing&rdquo; position.
- Choose the side: do anterior rhinoscopy first to pick the more patent passage and anticipate a deviated septum.
- Topical prep is optional: a decongestant (e.g. oxymetazoline or phenylephrine) widens the passage and a topical anesthetic (e.g. 4% lidocaine) reduces sensation, but a placebo-controlled pediatric trial found no clear comfort benefit and some adult data show anesthetic can worsen the experience. Small-caliber scopes are often tolerated with no spray.
- Scope path: pass along the floor (inferior meatus) or the middle meatus; warm or defog the tip; keep mucosal contact, especially with the septum, to a minimum.
- Subglottic view: a forward sniffing position plus an anterior tongue-pull (grasp the tongue with gauze) opens the angle for a lateral and posterior subglottic view without topical laryngeal anesthesia.
- Nasal route blocked (packing, trauma, impassable deviation): a trans-oral adaptor allows flexible laryngoscopy by mouth.
- Learning curve: competence benefits from a laryngeal simulator or about 6 supervised examinations.

**[flex-npl-systematic-exam] Flex NPL: the systematic examination**

Examine every region in order and record both anatomy and function. Do not skip a subsite.

- Nasal cavity: septum, turbinates, mucosa, discharge, polyps, masses.
- Nasopharynx: adenoids, Eustachian tube orifices, fossa of Rosenm&uuml;ller; palatal elevation on phonation.
- Oropharynx: base of tongue, lingual tonsil, vallecula, posterior wall.
- Hypopharynx: pyriform sinuses, postcricoid region, pooling of secretions.
- Larynx: epiglottis, false and true folds, anterior commissure; vocal-fold mobility on phonation, laryngeal elevation, penetration or aspiration.
- Subglottis: patency (tongue-pull view).Functional points to document: palatal elevation, dynamic vocal-cord tension on phonation, vocal-fold mobility (and position if immobile), laryngeal penetration or aspiration, subglottic patency, and any lesion or mass.

**[flex-npl-vs-imaging] Scope first, image for selected cases**

History and nasal endoscopy are the first-line diagnostic tools. Imaging is reserved for specific indications, not routine use.

- Suspected chronic rhinosinusitis: nasal endoscopy is the first-line confirmatory test; CT is reserved for a prolonged or complicated course.
- Nasal obstruction and epistaxis: endoscopy first. Add CT for structure and bone, MRI for soft-tissue or intracranial extension, and CT angiography for recurrent or posterior bleeds or a vascular lesion, when findings are inconclusive, persistent, severe, or posterior.
- Adult neck mass: scope and cross-sectional imaging are complementary; imaging plus endoscopy finds subclinical primaries that scope alone misses.

**[flex-npl-pediatric] Flex NPL in children**

In children, awake flexible nasendoscopy is the criterion standard for the posterior nasal cavity and nasopharynx (adenoid hypertrophy, nasopharyngeal mass) and for dynamic airway assessment (laryngomalacia). Topical decongestant with or without anesthetic is commonly used but of unproven benefit.
Technique relies on calm preparation: let the child touch the scope, use parent-lap positioning, and stabilize the head gently. Imaging (ultrasound, lateral neck radiograph, CT or MRI) is complementary but does not replace direct dynamic visualization.

**[tuning-forks] Tuning-fork interpretation (512 Hz)**

Use Weber and Rinne together. 'Affected ear' = the ear in question.
Worked example: a patient reports a muffled right ear. On Weber, the tone sounds louder in the right ear (lateralizes to the right) -- that points to either a conductive loss on the right, or a sensorineural loss on the left (better ear). Rinne on the right is negative (bone conduction louder than air conduction) -- that confirms a right conductive loss. If instead Rinne had been positive bilaterally with the same Weber lateralization to the right, the pattern would flip to a left sensorineural loss (Weber lateralizes toward the better ear in SNHL).

| Scenario | Weber | Rinne (affected ear) |
| --- | --- | --- |
| Normal / symmetric | Midline | AC > BC (positive) |
| Conductive loss, right | Lateralizes to right (affected) | BC > AC (negative) |
| Sensorineural loss, right | Lateralizes to left (better) | AC > BC (positive) |
- Pearl: true

**[investigations] Core investigations: what and when**

Ear / hearing

- Audiogram: a graph of hearing thresholds (in dB) across frequencies, measured for both air and bone conduction. Normal is &le;25 dB HL. An air-bone gap (air conduction worse than bone) = conductive loss; both lines down together = sensorineural.
- Tympanometry: an objective bedside measure of TM mobility and middle-ear pressure. Type A normal &middot; Type B flat (effusion or perforation) &middot; Type C negative pressure (Eustachian-tube dysfunction).Imaging

- CT for bone/sinuses/temporal bone, trauma, and infection extent.
- MRI for soft tissue, retrocochlear lesions (vestibular schwannoma), skull base, and tumor/perineural spread.Neck mass

- Contrast-enhanced CT/MRI AND FNA: FNA is strongly preferred over open excisional biopsy (an experienced operator can even do it before imaging).

**[emergency-principles] First principles of the ENT emergency**

Across every ENT emergency, the priority order is the same:

- Airway first. Do not lie a stridulous child flat or examine the throat if epiglottitis is possible; get senior ENT and anesthetics early.
- Bleeding second.
- Time-critical tissue injury third.A button battery in the nose or esophagus, a septal hematoma, and sudden SNHL are all time-critical even though they look minor.

### Red flags
- Airway signs (stridor, drooling, tripod, muffled voice): epiglottitis / deep neck infection; secure the airway first.
- Button battery in nose or esophagus: liquefactive necrosis within hours; immediate removal.
- Sudden SNHL (<72h): otologic emergency, urgent audiogram + MRI (exclude retrocochlear pathology); corticosteroids may be offered but are an option (shared decision-making), not a mandatory treatment.
- Necrotizing (malignant) otitis externa: diabetic/immunocompromised patient with pain out of proportion and canal granulation tissue that fails standard OE therapy; skull-base osteomyelitis, needs IV antipseudomonal antibiotics.
- Nasal septal hematoma after trauma: drain urgently or the cartilage necroses (saddle nose).
- Post-tonsillectomy bleed: can be catastrophic; ABC, ENT, may need to return to the OR.
- Orbital/intracranial signs with sinusitis (proptosis, painful/limited eye movement, reduced vision): urgent CT + IV antibiotics.
- Adult neck mass >2-3 weeks: malignancy until proven otherwise; imaging (CT/MRI) AND FNA, FNA preferred over open biopsy. A cystic node in a middle-aged patient can still be HPV-related oropharyngeal cancer: never assume benign.
- Hoarseness >2-4 weeks (smoker/drinker): laryngoscopy to exclude laryngeal cancer.
- Progressive dysphagia + weight loss: exclude esophageal/hypopharyngeal cancer.
- Unilateral nasal symptoms + epistaxis (adult): exclude sinonasal neoplasm; unilateral foul discharge in a child: foreign body.
- Facial palsy with forehead sparing: treat as central/stroke; forehead involved + ear disease: urgent ENT.
- Otalgia with a normal ear exam in an adult smoker: referred pain; scope the aerodigestive tract.
- Stridor, drooling, or respiratory distress is an airway assessment, not a routine clinic scope: have ENT, anesthesia, and airway equipment ready, and never provoke a child with suspected epiglottitis.
- Immobile vocal fold: image the entire recurrent laryngeal nerve course (skull base to mediastinum).
- Pooling of secretions or penetration/aspiration on scope: an airway-protection and swallow concern.

### Cases (15)

**Case [case-referred-otalgia]**

Stem: A 58-year-old man with a 40 pack-year history reports 3 weeks of right ear pain. Otoscopy is completely normal bilaterally. Hearing is intact.

- Q: What category of otalgia is this, and what's the concern?
  A: Referred otalgia with a normal ear exam. In an older smoker this is a red flag for a head & neck malignancy referring pain via CN V/VII/IX/X: base of tongue, tonsil, hypopharynx, or larynx.

- Q: Key next step?
  A: Refer for a full mucosal exam including flexible laryngoscopy; do not stop at a normal ear.

Teaching: Otalgia + normal ear exam in an adult smoker = scope the upper aerodigestive tract.

**Case [case-sudden-snhl]**

Stem: A 34-year-old notices her right ear went muffled over a day with new ringing. No wax. Weber lateralizes left; Rinne positive bilaterally.

- Q: What does the tuning-fork pattern show?
  A: A sensorineural pattern on the right (Weber to the better ear, Rinne positive), not conductive/wax.

- Q: Diagnosis and urgency?
  A: Sudden SNHL, an otologic emergency: urgent audiogram and MRI to exclude retrocochlear pathology. Oral ± intratympanic corticosteroids may be offered via shared decision-making (2019 AAO-HNS update: an option, not a mandate, since spontaneous recovery is common and the placebo-controlled evidence is weak).

Teaching: Sudden SNHL is time-sensitive and often dismissed as wax; the bedside forks separate them in seconds.

**Case [case-button-battery]**

Stem: A 3-year-old has one day of foul, blood-tinged discharge from the left nostril. On inspection there is a shiny round object high in the nasal cavity.

- Q: What is this until proven otherwise, and why the urgency?
  A: A button battery: it causes liquefactive necrosis and septal perforation within hours. This is an emergency, not a routine foreign body.

- Q: What do you do?
  A: Immediate removal (ENT); do not irrigate or delay. Any battery in the nose or esophagus is time-critical.

Teaching: Unilateral foul nasal discharge in a child = foreign body, and if it's a battery, the clock is in hours.

**Case [case-airway-pta]**

Stem: A 19-year-old has severe sore throat, trismus, a muffled 'hot potato' voice, and drools. Temperature 39°C.

- Q: Most likely diagnosis?
  A: Peritonsillar abscess (quinsy): trismus + muffled voice + uvular deviation. Watch the airway and for spread to deep neck spaces.

- Q: What must you assess first, and manage?
  A: Airway first. Then needle aspiration / incision & drainage plus antibiotics; escalate to ENT.

Teaching: [figure: Peritonsillar abscess presenting with trismus, muffled voice, and drooling; airway first, then drainage.]Muffled voice + trismus + drooling = think abscess and airway before anything else.

**Case [case-neck-mass]**

Stem: A 61-year-old smoker has a firm 3 cm level II neck lump present for 6 weeks, non-tender, not moving.

- Q: What's the rule here?
  A: A persistent firm neck mass in an adult is malignancy (often metastatic squamous cell carcinoma) until proven otherwise.

- Q: How do you work it up, and what do you avoid?
  A: Mucosal exam (± laryngoscopy), contrast-enhanced imaging (CT or MRI), and FNA: FNA is strongly preferred over open excisional biopsy, which can compromise oncologic management. FNA can even precede imaging when done by an experienced operator, and anticoagulation is not a contraindication.

Teaching: Adult + persistent neck mass + smoker = cancer workup with imaging AND FNA, never open biopsy first. A cystic node in a middle-aged patient can still be HPV-related oropharyngeal cancer: don't assume it's benign.

**Case [case-epistaxis]**

Stem: A 74-year-old on warfarin has a brisk left-sided nosebleed for 30 minutes at home. He is hemodynamically stable on arrival.

- Q: First-line management before anything invasive?
  A: Sit forward, pinch the cartilaginous (soft) part of the nose firmly for 10-15 minutes, plus a topical vasoconstrictor (e.g. oxymetazoline) as an effective adjunct. Most bleeds are anterior (Kiesselbach's plexus) and settle with compression + oxymetazoline alone.

- Q: What if it doesn't stop, and what else do you check?
  A: Topical tranexamic acid (e.g. 500 mg/5 mL on a pledget for 10-15 min) is a reasonable adjunct before packing, especially in anticoagulated patients. If still bleeding, escalate to cautery or packing; consider a posterior bleed (heavier, needs posterior packing/admission). Check the INR and reverse if supratherapeutic.

Teaching: [figure: Anterior epistaxis on anticoagulation managed with compression, topical vasoconstrictor, and INR check.]Pressure on the soft part of the nose, not the bony bridge, stops most nosebleeds. Always check anticoagulation.

**Case [case-bppv]**

Stem: A 62-year-old gets seconds-long spinning whenever he rolls over in bed or looks up. Hearing is normal; neuro exam is normal.

- Q: Likely diagnosis and the confirming test?
  A: BPPV: confirm with the Dix-Hallpike maneuver (reproduces vertigo + characteristic nystagmus).

- Q: Treatment, and one central red flag to screen for?
  A: Epley repositioning. Screen for central signs (vertical/direction-changing nystagmus, normal head-impulse test, the HINTS exam) before settling on BPPV.

Teaching: Brief + positional + hearing intact = BPPV; but always rule out the central red flags.

**Case [case-hoarseness]**

Stem: A 63-year-old smoker has been hoarse for 6 weeks. No sore throat now. He's otherwise well.

- Q: What does the duration + smoking mandate?
  A: Hoarseness >2-4 weeks in a smoker requires laryngoscopy to exclude laryngeal cancer: do not keep treating it as laryngitis.

- Q: If the vocal fold is immobile, what else must you consider?
  A: Vocal-fold paralysis from a lesion along the recurrent laryngeal nerve (lung apex, thyroid, mediastinum): image the whole nerve course.

Teaching: [figure: Persistent hoarseness in a smoker requiring laryngoscopy, with vocal-fold paralysis raised via recurrent laryngeal nerve course.]Clinical Pearl: Persistent hoarseness in a smoker requires flexible laryngoscopy; voice change is often the earliest sign of laryngeal malignancy.

**Case [case-orbital-cellulitis]**

Stem: A 9-year-old with a week of a cold now has a swollen, red left eyelid, eye pain on looking around, and the eye looks pushed forward.

- Q: What complication is this, and of what?
  A: Orbital cellulitis (± subperiosteal abscess) complicating ethmoid sinusitis: the thin lamina papyracea lets infection into the orbit.

- Q: Which findings make it an emergency, and what do you do?
  A: Proptosis, painful/limited eye movements, reduced acuity or color vision = post-septal disease. Urgent contrast CT, IV antibiotics, and ophthalmology/ENT; may need surgical drainage.

Teaching: [figure: Orbital cellulitis/subperiosteal abscess complicating pediatric ethmoid sinusitis via the lamina papyracea.]Eye signs with sinusitis (proptosis, painful eye movement, vision change) = sight- and life-threatening: image and admit.

**Case [case-bells-vs-central]**

Stem: A 40-year-old wakes with a drooping right face: the mouth and the forehead are both affected. No limb weakness, no other neuro signs.

- Q: Peripheral or central, and how do you know?
  A: Peripheral (LMN): the forehead is involved. A central (UMN) lesion spares the forehead. So this is a peripheral palsy, most commonly Bell's palsy (a diagnosis of exclusion).

- Q: What must you not miss?
  A: If the forehead were spared, treat as a stroke. And with ear disease/weakness, think otologic causes (cholesteatoma, necrotizing OE, tumor): an ENT red flag.

- Q: What's first-line treatment for Bell's palsy, and one supportive measure?
  A: Oral corticosteroids started within 72 hours of onset, the mainstay (Level A, AAN). Antiviral monotherapy is not effective; adding an antiviral to steroids offers at most a small extra benefit, mainly considered in severe palsy. Protect the eye with lubricating drops ± taping if eyelid closure is incomplete.

Teaching: [figure: Distinguishing peripheral (Bell's) from central facial palsy using forehead involvement/sparing.]The forehead is the discriminator: involved = peripheral (Bell's); spared = central (stroke). Bell's palsy itself is treated with early oral steroids, not antivirals alone.

**Case [case-cerumen-impaction]**

Stem: A 68-year-old on warfarin reports 2 weeks of muffled hearing and fullness in his right ear. Otoscopy shows the canal completely occluded by wax; the TM cannot be visualized.

- Q: Does 'wax on the exam' by itself mean treatment is needed?
  A: No. Cerumen impaction is defined as wax that is symptomatic (as here: muffled hearing, fullness) or that obstructs visualization/testing, not wax alone.

- Q: How does the anticoagulation change your approach?
  A: Warfarin is a modifying factor that favors cerumenolytics or gentle manual removal under direct vision over irrigation, which carries more bleeding/trauma risk in an anticoagulated patient. Ear candling is never appropriate: no benefit, real burn/perforation risk.

Teaching: Cerumen impaction is a symptom-or-obstruction diagnosis, and modifying factors (anticoagulation, diabetes, immunocompromise, prior radiation, a non-intact TM, canal stenosis), not just 'there's wax', should steer the removal technique.

**Case [case-hoarseness-scope]**

Stem: A 58-year-old ever-smoker has had 8 weeks of progressive hoarseness and intermittent referred right otalgia. The ear exam is normal.

- Q: What is the next step, and why does the normal ear matter?
  A: Flexible nasolaryngoscopy. Hoarseness beyond 2-4 weeks in a smoker mandates visualizing the larynx to exclude cancer, and otalgia with a normal ear is referred pain from the aerodigestive tract that the scope can source.

- Q: What finding would most change management?
  A: A true-vocal-fold lesion or an immobile fold. The latter prompts imaging of the whole recurrent laryngeal nerve course.

Teaching: Persistent hoarseness in a smoker is a scope-first presentation.

**Case [case-unilateral-effusion]**

Stem: A 46-year-old adult has a new unilateral serous middle-ear effusion and occasional blood-streaked nasal mucus.

- Q: Why scope the nasopharynx?
  A: A unilateral adult middle-ear effusion can be the presenting sign of a nasopharyngeal carcinoma obstructing the Eustachian tube. Flex NPL inspects the fossa of Rosenm&uuml;ller directly.

Teaching: Unilateral adult serous otitis media is a red flag: look at the nasopharynx before treating &ldquo;fluid in the ear.&rdquo;

**Case [case-pediatric-stridor]**

Stem: A 6-week-old has inspiratory stridor that is worse supine and with feeding and improves prone. Growth is normal.

- Q: What bedside study confirms the likely diagnosis?
  A: Awake flexible nasolaryngoscopy showing dynamic supraglottic collapse confirms laryngomalacia, the most common cause of infant stridor.

Teaching: Flex NPL is the criterion standard for dynamic pediatric airway collapse that static imaging cannot capture.

**Case [case-nasal-route-blocked]**

Stem: A patient with bilateral nasal packing after epistaxis now needs urgent laryngeal visualization for a voice change.

- Q: How can the larynx be examined?
  A: A trans-oral flexible laryngoscopy adaptor allows a flexible laryngeal view by mouth when the nasal route is blocked.

Teaching: A blocked nose is not an absolute barrier: the trans-oral route keeps flexible laryngoscopy available.

### Flashcards (72)

**[otoscope-pinna]** tags: FN, clinical, milestones: MK1, PC4, UKMLA: Painful ear, reviewer: (none)
- Front: How do you position the pinna for otoscopy in an adult vs. a young child, and why?
- Back: Adult: pull the pinna up and back. Young child: pull down and back. This straightens the cartilaginous canal for a clear TM view. Use the largest speculum that fits and brace your hand on the cheek.
- Source: Bailey's Head & Neck Surgery: Otolaryngology, 6th ed.; otoscopic examination technique.

**[tm-landmarks]** tags: FN, clinical, milestones: MK1, PC4, UKMLA: Hearing loss, reviewer: (none)
- Front: Name the normal tympanic-membrane landmarks.
- Back: - Cone of light (antero-inferior)
- Umbo (central, most depressed)
- Manubrium + lateral process of malleus
- Pars tensa and pars flaccida[figure: Naming normal tympanic-membrane landmarks (cone of light, umbo, manubrium, pars tensa/flaccida).]
- Source: Bailey's Head & Neck Surgery: Otolaryngology, 6th ed.; tympanic membrane landmarks.

**[weber]** tags: FN, clinical, milestones: PC4, UKMLA: Hearing loss, reviewer: (none)
- Front: Describe the Weber test and interpret lateralization.
- Back: 512 Hz on the vertex. 
- Conductive loss: lateralizes to the affected ear.
- SNHL: lateralizes to the better ear.
- Normal: midline.ScenarioWeberRinne (affected ear)Normal / symmetricMidlineAC > BC (positive)Conductive loss, rightLateralizes to right (affected)BC > AC (negative)Sensorineural loss, rightLateralizes to left (better)AC > BC (positive)
- Source: AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019; tuning-fork triage.

**[rinne]** tags: FN, clinical, milestones: PC4, UKMLA: Hearing loss, reviewer: (none)
- Front: Describe the Rinne test and what a 'negative' Rinne means.
- Back: 512 Hz on the mastoid (BC) then beside the ear (AC). 
- Normal / SNHL: AC > BC = positive.
- Conductive loss: BC > AC = negative in the affected ear.ScenarioWeberRinne (affected ear)Normal / symmetricMidlineAC > BC (positive)Conductive loss, rightLateralizes to right (affected)BC > AC (negative)Sensorineural loss, rightLateralizes to left (better)AC > BC (positive)
- Source: AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019; tuning-fork triage.

**[fork-512]** tags: FN, clinical, milestones: PC4, UKMLA: Hearing loss, reviewer: (none)
- Front: Why is a 512 Hz fork the standard for hearing tests?
- Back: It balances vibration decay and tactile perception. 256 Hz is felt too much (false positives); 1024 Hz decays too fast to compare.
- Source: Standard audiologic examination teaching.

**[whisper-test]** tags: FN, clinical, milestones: PC4, UKMLA: Hearing loss, reviewer: (none)
- Front: How do you screen hearing at the bedside without equipment?
- Back: Whispered-voice test: stand arm's length behind the patient, mask the other ear (rub the tragus), and whisper numbers/words for them to repeat. The finger-rub test is a quick alternative. Abnormal → formal audiogram.
- Source: Bailey's Head & Neck Surgery: Otolaryngology, 6th ed.; bedside hearing screen.

**[ant-rhinoscopy]** tags: FN, clinical, milestones: MK1, PC5, UKMLA: Nasal obstruction, reviewer: (none)
- Front: What do you assess on anterior rhinoscopy?
- Back: Speculum + light: septum (deviation, perforation), inferior turbinates, mucosa (boggy/allergic vs erythematous), discharge (clear/purulent/bloody), polyps (pale, insensate). Note unilateral vs bilateral.
- Source: Standard rhinologic examination teaching.

**[oropharynx-cn]** tags: FN, clinical, milestones: MK1, PC3, UKMLA: Sore throat, reviewer: (none)
- Front: On the oral/oropharyngeal exam, which cranial nerves are screened and how?
- Back: - IX/X: palate elevation, uvula midline on 'ahh', gag.
- XII: tongue protrusion (deviates toward a weak side).
- V/VII: facial sensation and symmetry.Inspect tonsils, floor of mouth, lateral tongue (oral cancer sites).
- Source: Standard head & neck examination teaching.

**[cn-screen-ent]** tags: FN, clinical, milestones: MK1, PC4, UKMLA: Facial weakness, reviewer: (none)
- Front: Which cranial nerves matter most on an ENT exam, and what does each tell you?
- Back: V facial sensation/mastication; VII facial movement (forehead!), key with ear disease; VIII hearing/balance; IX/X palate, gag, voice (RLN), key with hoarseness; XII tongue.
- Source: Standard head & neck examination teaching.

**[neck-levels]** tags: FN, clinical, milestones: MK1, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: How do you structure the neck exam and which nodal levels do you palpate?
- Back: Region by region: levels I-VI (submental/submandibular, upper/mid/lower jugular, posterior triangle, central) plus level VII (superior mediastinal, imaging-only, not palpable), plus thyroid, parotid, supraclavicular. [figure: Structuring the neck exam by nodal levels I-VI plus thyroid/parotid/supraclavicular.]
- Source: Standard head & neck examination teaching.

**[scope-indication]** tags: FN, clinical, milestones: PC6, PC3, UKMLA: Hoarseness and voice change, Swallowing problems, reviewer: (none)
- Front: Name common indications for flexible nasolaryngoscopy.
- Back: Persistent hoarseness (>2-4 wks), dysphagia/odynophagia, globus with red flags, neck mass, stridor/airway concern, referred otalgia with a normal ear, and unexplained epistaxis/obstruction. Know when to ask for it.
- Source: AAO-HNSF Clinical Practice Guideline: Hoarseness (Dysphonia) (Update), 2018; indications for laryngoscopy.

**[fb-wax-awareness]** tags: FN, clinical, milestones: PC7, PC4, UKMLA: Ear and nasal discharge, reviewer: (none)
- Front: What should a student know about ear wax and ear/nose foreign bodies?
- Back: Wax: softening drops then irrigation: avoid irrigation if perforation/grommet. Ear FB: don't push deeper; immobilize an insect (oil/lidocaine) before removal. Nasal FB (child): positive-pressure 'parent's kiss'. Any battery = emergency (separate card).
- Source: AAO-HNSF Clinical Practice Guideline: Cerumen Impaction (Update), 2017.

**[audiogram-basics]** tags: FN, clinical, milestones: PC4, MK1, UKMLA: Hearing loss, reviewer: (none)
- Front: How do you read an audiogram at a glance?
- Back: X = frequency (low→high Hz), Y = threshold in dB (louder downward). O = right air, X = left air; [ ] = bone. Air-bone gap = conductive; both down together = sensorineural; gap + both down = mixed.[figure: Reading an audiogram: axes, symbols, air-bone gap vs bilateral threshold drop.]
- Source: Standard audiology teaching; AAO-HNSF Sudden Hearing Loss CPG (2019) for interpretation context.

**[tympanometry]** tags: FN, clinical, milestones: PC4, UKMLA: Hearing loss, reviewer: (none)
- Front: What do tympanometry types A, B, and C mean?
- Back: A = normal middle-ear pressure/compliance. B = flat: middle-ear effusion or perforation. [figure: Tympanogram types A, B, C and the ear conditions each indicates.]
- Source: Jerger, tympanogram classification, Archives of Otolaryngology 1970.

**[ct-vs-mri]** tags: FN, clinical, milestones: MK1, PC3, UKMLA: Hearing loss, Neck lump, reviewer: (none)
- Front: When do you choose CT vs MRI in ENT?
- Back: CT: bone and air: sinuses, temporal bone, trauma, infection extent, stones. MRI: soft tissue: retrocochlear lesions (vestibular schwannoma), skull base, tumor extent and perineural spread.
- Source: ACR Appropriateness Criteria: Hearing Loss and/or Vertigo; Neck Mass.

**[chl-vs-snhl]** tags: FN, clinical, milestones: PC4, MK3, UKMLA: Hearing loss, reviewer: (none)
- Front: Contrast the common causes of conductive vs sensorineural hearing loss.
- Back: Conductive: cerumen, effusion, TM perforation, otosclerosis, ossicular problems. Sensorineural: presbycusis, noise, ototoxicity, sudden SNHL, and (if asymmetric) retrocochlear lesions.
- Source: Standard otologic pathophysiology teaching.

**[sudden-snhl]** tags: FN, clinical, milestones: PC4, UKMLA: Hearing loss, RED FLAG, reviewer: (none)
- Front: Sudden sensorineural hearing loss is defined as a loss of at least [...] across at least three frequencies within seventy-two hours.
- Back: Sudden sensorineural hearing loss is defined as a loss of at least 30 decibels across at least three frequencies within seventy-two hours. It is an otologic emergency needing an urgent audiogram and MRI to exclude a retrocochlear lesion, and steroids may be offered as an option rather than a mandatory treatment.
- Source: AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019.

**[asymmetric-snhl]** tags: FN, clinical, milestones: PC4, UKMLA: Hearing loss, Acoustic neuroma, RED FLAG, reviewer: (none)
- Front: Asymmetric SNHL or unilateral tinnitus: what must you exclude?
- Back: Vestibular schwannoma and other retrocochlear lesions: get an MRI of the internal auditory canals.
- Source: ACR Appropriateness Criteria: Hearing Loss and/or Vertigo (asymmetric SNHL imaging).

**[otalgia-referred]** tags: FN, clinical, milestones: PC4, PC3, UKMLA: Painful ear, RED FLAG, reviewer: (none)
- Front: Ear pain but a completely NORMAL ear exam: what must you consider?
- Back: Referred otalgia via CN V/VII/IX/X and C2-C3 (TMJ, teeth, tonsil, tongue base, larynx). In an adult smoker, otalgia + normal ear exam is a red flag for head & neck malignancy → laryngoscopy.
- Source: Bailey's Head & Neck Surgery: Otolaryngology, 6th ed.; referred otalgia.

**[otalgia-primary]** tags: FN, clinical, milestones: PC4, UKMLA: Painful ear, Otitis externa, reviewer: (none)
- Front: In an adult, a new unilateral middle-ear effusion should prompt a nasopharyngeal exam to exclude [...], since acute otitis media is uncommon in this age group.
- Back: In an adult, a new unilateral middle-ear effusion should prompt a nasopharyngeal exam to exclude nasopharyngeal carcinoma, since acute otitis media is uncommon in this age group.
- Source: AAO-HNSF Clinical Practice Guideline: Acute Otitis Externa, 2014.

**[tinnitus]** tags: FN, clinical, milestones: PC4, UKMLA: Tinnitus, RED FLAG, reviewer: (none)
- Front: When is tinnitus a red flag rather than benign?
- Back: Most tinnitus is subjective and benign. Worry about pulsatile tinnitus (vascular, image it) and unilateral/asymmetric tinnitus with hearing loss (retrocochlear, MRI).
- Source: AAO-HNSF Clinical Practice Guideline: Tinnitus, 2014.

**[vertigo-periph]** tags: FN, clinical, milestones: PC4, UKMLA: Vertigo, Dizziness, Benign paroxysmal positional vertigo, Ménière's disease, reviewer: (none)
- Front: Differentiate BPPV, vestibular neuritis, and Ménière's.
- Back: - BPPV: brief positional vertigo; Dix-Hallpike; treat with Epley.
- Vestibular neuritis: acute constant vertigo for days, no hearing loss.
- Ménière's: episodic vertigo + fluctuating SNHL + tinnitus + aural fullness.
- Source: AAO-HNSF CPG: BPPV (Update), 2017; Bárány Society/AAO-HNS diagnostic criteria for Ménière's disease, 2015.

**[central-vertigo]** tags: FN, clinical, milestones: PC4, UKMLA: Vertigo, RED FLAG, reviewer: (none)
- Front: What findings suggest a CENTRAL cause of vertigo?
- Back: HINTS red flags: direction-changing/vertical nystagmus, a normal head-impulse test, skew deviation, plus other neuro signs → image for stroke.
- Source: Kattah et al., HINTS exam, Stroke 2009.

**[facial-palsy]** tags: FN, clinical, milestones: PC4, MK1, UKMLA: Facial weakness, Bell's palsy, RED FLAG, reviewer: (none)
- Front: Facial weakness with a spared forehead should be treated as a [...] until proven otherwise, since a peripheral lesion like Bell's palsy always involves the forehead.
- Back: Facial weakness with a spared forehead should be treated as a stroke until proven otherwise, since a peripheral lesion like Bell's palsy always involves the forehead. Bell's palsy itself is treated with oral corticosteroids started within seventy-two hours, since antivirals alone don't help.
- Source: AAN Practice Guideline: Bell's Palsy, 2012.

**[nasal-obstruction]** tags: FN, clinical, milestones: PC5, UKMLA: Nasal obstruction, reviewer: (none)
- Front: Work through the differential for chronic nasal obstruction.
- Back: Allergic rhinitis, chronic rhinosinusitis (± polyps), septal deviation, turbinate hypertrophy, and (less common) neoplasm. Bilateral/variable → inflammatory; fixed unilateral → structural or neoplastic.
- Source: AAO-HNSF Clinical Practice Guideline: Adult Sinusitis (Update), 2015; Allergic Rhinitis, 2015.

**[unilateral-nose]** tags: FN, clinical, milestones: PC5, PC7, UKMLA: Nasal obstruction, Epistaxis, RED FLAG, reviewer: (none)
- Front: Unilateral nasal obstruction + bloody discharge: adult vs child?
- Back: Adult: red flag for sinonasal neoplasm: endoscopy ± imaging. Child: foreign body until proven otherwise (and a battery is an emergency).
- Source: AAO-HNS patient education: unilateral nasal red flags; AAP pediatric foreign-body literature.

**[epistaxis]** tags: FN, clinical, milestones: PC5, PC1, UKMLA: Epistaxis, reviewer: (none)
- Front: Most anterior epistaxis arises from [...], and first-line treatment is firm pressure on the cartilaginous part of the nose plus a topical vasoconstrictor.
- Back: Most anterior epistaxis arises from Kiesselbach's plexus, and first-line treatment is firm pressure on the cartilaginous part of the nose plus a topical vasoconstrictor. If bleeding persists, topical tranexamic acid on a pledget is a reasonable adjunct before packing, especially in anticoagulated patients. Posterior bleeds are heavier and more often need packing or admission.[figure: Kiesselbach's plexus as the source of most anterior nosebleeds.]
- Source: AAO-HNSF Clinical Practice Guideline: Nosebleed (Epistaxis), 2020.

**[rhinorrhoea-anosmia]** tags: FN, clinical, milestones: PC5, MK2, UKMLA: Ear and nasal discharge, Anosmia, reviewer: (none)
- Front: Approach to rhinorrhea and smell loss, and the one that's a red flag.
- Back: Rhinorrhea: allergic (clear, itch, sneeze), infective (purulent), vasomotor. Anosmia: URI, chronic rhinosinusitis, head injury, ageing. Red flag: unilateral clear watery rhinorrhea after trauma/surgery = CSF leak (test β2-transferrin).
- Source: AAO-HNSF Adult Sinusitis CPG, 2015; Meco et al., β2-transferrin testing for CSF leak, Am J Rhinol 2003.

**[sore-throat-centor]** tags: FN, clinical, milestones: MK3, PC6, UKMLA: Sore throat, reviewer: (none)
- Front: How do you approach acute sore throat?
- Back: Most are viral. Use the Centor score for likely GAS (fever, tonsillar exudate, tender anterior nodes, no cough) to guide testing/antibiotic decisions. Escalate for airway/abscess red flags.[figure: Approach to acute sore throat using the Centor score.]
- Source: IDSA Clinical Practice Guideline: Group A Streptococcal Pharyngitis, 2012.

**[hoarseness]** tags: FN, clinical, milestones: PC6, PC3, UKMLA: Hoarseness and voice change, RED FLAG, reviewer: (none)
- Front: When does hoarseness require laryngoscopy, and why?
- Back: Hoarseness >2-4 weeks, especially a smoker/drinker, needs laryngoscopy to exclude laryngeal cancer. Also consider vocal-fold paralysis (RLN course). Most acute hoarseness is viral laryngitis.
- Source: AAO-HNSF Clinical Practice Guideline: Hoarseness (Dysphonia) (Update), 2018.

**[dysphagia-globus]** tags: FN, clinical, milestones: PC6, PC3, UKMLA: Swallowing problems, RED FLAG, reviewer: (none)
- Front: Distinguish globus from dysphagia, and give the dysphagia red flags.
- Back: Globus = intermittent 'lump' sensation, swallowing intact, usually benign. Dysphagia red flags: progressive, solids > liquids, weight loss, odynophagia, older smoker → urgent workup for esophageal/hypopharyngeal cancer.
- Source: Standard otolaryngology teaching on red-flag dysphagia.

**[osa-screen]** tags: FN, clinical, milestones: PC9, UKMLA: Snoring, Obstructive sleep apnoea, reviewer: (none)
- Front: How do you screen for obstructive sleep apnea?
- Back: STOP-BANG: Snoring, Tiredness, Observed apneas, Pressure (HTN), BMI >35, Age >50, Neck >40 cm, Gender male. ≥3 = higher risk → refer for a sleep study (polysomnography).
- Source: Chung F et al., STOP-BANG questionnaire, Anesthesiology 2008; AASM clinical guideline for OSA.

**[neck-mass-adult]** tags: FN, clinical, milestones: PC3, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: A firm, persistent adult neck mass present for more than [...] is malignancy until proven otherwise.
- Back: A firm, persistent adult neck mass present for more than two to three weeks is malignancy until proven otherwise. Workup pairs contrast-enhanced CT or MRI with FNA, which is favored over open excisional biopsy.
- Source: NCCN Clinical Practice Guidelines in Oncology: Head and Neck Cancers.

**[salivary-swelling]** tags: FN, clinical, milestones: PC3, UKMLA: Neck lump, reviewer: (none)
- Front: Approach to a salivary gland swelling.
- Back: Diffuse/bilateral: viral (mumps), sialadenosis, autoimmune (Sjögren). Discrete/unilateral: stone (meal-related swelling) or tumor (parotid; usually pleomorphic adenoma). Red flags: pain, rapid growth, or facial-nerve weakness = malignant.[figure: Diagnostic approach to salivary gland swelling.]
- Source: Bailey's Head & Neck Surgery: Otolaryngology, 6th ed.; salivary gland disease.

**[midline-neck]** tags: FN, clinical, milestones: PC3, UKMLA: Neck lump, reviewer: (none)
- Front: Approach to a midline anterior neck swelling.
- Back: Thyroglossal duct cyst: midline, moves up on tongue protrusion and swallowing. Thyroid nodule/goitre: moves with swallowing only. Assess thyroid status, ultrasound. Also dermoid. Lateral masses follow the adult-neck-mass rule.
- Source: American Thyroid Association guidelines on thyroid nodule evaluation, 2015.

**[airway-redflags]** tags: FN, clinical, milestones: PC1, UKMLA: Stridor, RED FLAG, reviewer: (none)
- Front: Which airway red flags demand urgent action, and what's the principle?
- Back: Stridor, drooling, tripod positioning, muffled voice, severe odynophagia. Airway first: get senior ENT plus anesthetics, keep the patient calm and upright, and don't provoke a child's throat.
- Source: AAO-HNS pediatric airway emergency teaching.

**[epiglottitis]** tags: FN, clinical, milestones: PC1, PC7, UKMLA: Stridor, Epiglottitis, RED FLAG, reviewer: (none)
- Front: What is the classic presentation and the critical DON'T of epiglottitis?
- Back: Rapid severe sore throat, drooling, tripod posture, muffled 'hot potato' voice, stridor. Do NOT examine the throat or lie the (child) patient flat: it can precipitate airway loss. Controlled airway in the OR + IV antibiotics.[figure: Classic epiglottitis presentation (drooling, tripod, muffled voice, stridor) and the rule against examining the throat.]
- Source: IDSA / pediatric infectious-disease guidance on epiglottitis (supraglottitis) management.

**[pta]** tags: FN, clinical, milestones: PC1, PC6, UKMLA: Sore throat, RED FLAG, reviewer: (none)
- Front: What triad suggests a peritonsillar abscess?
- Back: Trismus, 'hot potato' muffled voice, and uvular deviation away from a swollen peritonsil region. Needs drainage (needle/I&D) + antibiotics; watch the airway and deep-neck spread.[figure: Peritonsillar abscess triad (trismus, muffled voice, uvular deviation) and management.]
- Source: AAO-HNS patient education: peritonsillar abscess management.

**[deep-neck-infection]** tags: FN, clinical, milestones: PC1, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: [...] is a rapidly spreading bilateral submandibular infection, usually odontogenic, that threatens the airway through tongue elevation even before a drainable collection forms.
- Back: Ludwig's angina is a rapidly spreading bilateral submandibular infection, usually odontogenic, that threatens the airway through tongue elevation even before a drainable collection forms. Retropharyngeal abscess is the deep neck infection to suspect instead in a young child with neck stiffness and a muffled voice, often following a preceding throat or ear infection.
- Source: Bailey's Head & Neck Surgery: Otolaryngology, 6th ed.; deep neck space infections.

**[post-tonsillectomy-bleed]** tags: FN, clinical, milestones: PC6, UKMLA: Sore throat, RED FLAG, reviewer: (none)
- Front: How do you approach post-tonsillectomy hemorrhage?
- Back: Primary (<24h) vs secondary (~5-10 days, often infection). Can be life-threatening (swallowed blood hides volume). ABC, IV access, call ENT/anesthetics; may need to return to the OR.
- Source: AAO-HNSF Clinical Practice Guideline: Tonsillectomy in Children (Update), 2019.

**[septal-haematoma]** tags: FN, clinical, milestones: PC2, PC5, UKMLA: Nasal obstruction, RED FLAG, reviewer: (none)
- Front: Why must you look for a septal hematoma after nasal trauma?
- Back: A boggy, cherry-red bilateral septal swelling deprives the cartilage of its blood supply. Undrained → cartilage necrosis (saddle-nose) or abscess. Incise and drain urgently.
- Source: AAO-HNS facial-trauma teaching: septal hematoma management.

**[foreign-bodies]** tags: FN, clinical, milestones: PC7, UKMLA: Ear and nasal discharge, Stridor, reviewer: (none)
- Front: Many aspirated airway foreign bodies, such as food or plastic, are [...], so a normal chest X-ray does not exclude one.
- Back: Many aspirated airway foreign bodies, such as food or plastic, are radiolucent, so a normal chest X-ray does not exclude one. Bronchoscopy is needed whenever aspiration is suspected despite normal imaging.
- Source: AAP clinical guidance on pediatric foreign-body management.

**[button-battery]** tags: FN, clinical, milestones: PC7, UKMLA: Ear and nasal discharge, RED FLAG, reviewer: (none)
- Front: Why is a button battery different from any other foreign body?
- Back: It causes liquefactive necrosis within hours. A battery in the nose (septal perforation) or esophagus (perforation, fistula) needs immediate removal: do not observe, do not irrigate.
- Source: National Capital Poison Center / AAP button-battery guidance, 2020.

**[sinusitis-complications]** tags: FN, clinical, milestones: PC5, UKMLA: Facial/periorbital swelling, Rhinosinusitis, RED FLAG, reviewer: (none)
- Front: What complications of sinusitis must you not miss?
- Back: Orbital: proptosis, painful/limited eye movement, reduced acuity (orbital cellulitis/abscess). Intracranial: meningitis, abscess, cavernous sinus thrombosis; Pott's puffy tumor (frontal). Urgent contrast CT + IV antibiotics ± surgery.[figure: Orbital and intracranial complications of sinusitis requiring urgent CT and IV antibiotics.]
- Source: Chandler et al., Laryngoscope 1970; AAO-HNSF Adult Sinusitis CPG, 2015.

**[ent-history]** tags: FN, clinical, milestones: ICS1, MK3, UKMLA: Hearing loss, Nasal obstruction, Hoarseness and voice change, Neck lump, reviewer: (none)
- Front: What structure keeps an ENT history efficient across ear, nose, throat, and neck?
- Back: Screen each region's cardinal symptoms: ear (hearing, otalgia, otorrhea, tinnitus, vertigo), nose (obstruction & side, discharge, epistaxis, smell), throat/voice (dysphonia, dysphagia, odynophagia, globus), neck (lump: duration, growth). Always pin laterality, duration, red flags, plus smoking/alcohol.
- Source: Bailey's Head & Neck Surgery: Otolaryngology, 6th ed.; structured ENT history.

**[spikes]** tags: FN, clinical, milestones: ICS1, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: How do you break bad news (e.g., a head & neck cancer diagnosis)?
- Back: SPIKES: Setting, Perception, Invitation, Knowledge (warning shot, plain language), Emotions (empathy, silence), Strategy/summary. Communication is an ACGME competency most fact decks skip.
- Source: Baile WF et al., SPIKES protocol, The Oncologist 2000.

**[consent]** tags: FN, clinical, milestones: Prof1, ICS1, UKMLA: Neck lump, reviewer: (none)
- Front: What are the elements of valid informed consent?
- Back: Capacity, disclosure (diagnosis, procedure, risks/benefits, alternatives, risk of doing nothing), understanding, voluntariness. Document, and confirm teach-back.
- Source: AMA Code of Medical Ethics: Informed Consent; Joint Commission consent standards.

**[sbar-consult]** tags: FN, clinical, milestones: ICS2, SBP2, UKMLA: Stridor, reviewer: (none)
- Front: How should you call an ENT consult so it's useful?
- Back: SBAR: Situation (who + one-line why), Background (history, airway status), Assessment (your read), Recommendation (what you need, by when). Airway concerns first.
- Source: Institute for Healthcare Improvement: SBAR communication tool.

**[ebm-appraise]** tags: FN, clinical, milestones: PBLI1, UKMLA: Hearing loss, reviewer: (none)
- Front: Before applying a guideline or study to a patient, what do you check?
- Back: Is it valid (design, bias), are the results meaningful (effect size + confidence interval, not just a p-value), and are they applicable to this patient?
- Source: Users' Guides to the Medical Literature, JAMA; CEBM levels of evidence.

**[safety-timeout]** tags: FN, clinical, milestones: SBP1, Prof2, UKMLA: Neck lump, reviewer: (none)
- Front: What is the surgical 'time-out,' and why does it matter in ENT?
- Back: A pre-procedure pause confirming correct patient, procedure, and site/side (laterality matters enormously in ENT), plus allergies, antibiotics, equipment. Front-line patient safety.
- Source: WHO Surgical Safety Checklist, 2009; Joint Commission Universal Protocol.

**[prescribing-ent]** tags: FN, pharm, milestones: SBP3, PC5, UKMLA: Painful ear, Ear and nasal discharge, reviewer: (none)
- Front: Aminoglycoside ear drops should be avoided in a patient with a [...], because of the risk of ototoxicity.
- Back: Aminoglycoside ear drops should be avoided in a patient with a tympanic membrane perforation, because of the risk of ototoxicity. Most sore throats and cases of acute otitis media are viral and self-limiting, so antibiotic stewardship matters just as much here.
- Source: AAO-HNSF CPG: Acute Otitis Externa, 2014; Allergic Rhinitis, 2015; CDC Core Elements of Antibiotic Stewardship.

**[allergic-rhinitis]** tags: FN, clinical, milestones: MK2, PC5, UKMLA: Allergies, reviewer: (none)
- Front: First-line treatment for allergic rhinitis, after allergen avoidance, is [...].
- Back: First-line treatment for allergic rhinitis, after allergen avoidance, is intranasal corticosteroids. It classically presents with clear, itchy rhinorrhea and bilateral nasal obstruction, classified by ARIA as intermittent or persistent rather than by a seasonal/perennial trigger.
- Source: AAO-HNSF Clinical Practice Guideline: Allergic Rhinitis, 2015.

**[facial-pain-differential]** tags: FN, clinical, milestones: PC5, MK3, UKMLA: Facial pain, reviewer: (none)
- Front: Facial pain that is brief and electric-shock-like, rather than tied to nasal congestion, suggests [...] rather than a sinogenic cause.
- Back: Facial pain that is brief and electric-shock-like, rather than tied to nasal congestion, suggests trigeminal neuralgia rather than a sinogenic cause. Facial pain with a neurologic deficit, or pain that persists despite adequate sinus treatment, should raise concern for a neoplasm and prompt imaging.
- Source: AAO-HNSF Adult Sinusitis CPG, 2015; International Classification of Headache Disorders (ICHD-3).

**[approach-to-discharge]** tags: FN, clinical, milestones: PC4, PC5, UKMLA: Ear and nasal discharge, reviewer: (none)
- Front: In both the ear and the nose, discharge that is unilateral and foul-smelling points to a [...] in a child or a neoplasm in an adult.
- Back: In both the ear and the nose, discharge that is unilateral and foul-smelling points to a foreign body in a child or a neoplasm in an adult. Unexplained unilateral clear watery nasal discharge should be tested for CSF with beta-2 transferrin.
- Source: AAO-HNSF CPG: Acute Otitis Externa, 2014; Adult Sinusitis, 2015; Meco et al. on CSF leak testing, 2003.

**[cough-ent-angle]** tags: FN, clinical, milestones: PC5, PC6, UKMLA: Cough, reviewer: (none)
- Front: From an ENT standpoint, what upper-airway causes should you consider for chronic cough?
- Back: Upper airway cough syndrome (post-nasal drip from rhinosinusitis or allergic rhinitis) and laryngopharyngeal reflux (throat clearing, globus, hoarseness, chronic laryngitis) are the two ENT-driven causes to screen for alongside asthma and GERD. Red flag: cough + hoarseness + smoker → laryngoscopy to exclude laryngeal pathology, not just empiric treatment for post-nasal drip.
- Source: ACCP/CHEST Cough Guidelines; AAO-HNS teaching on laryngopharyngeal reflux and post-nasal drip.

**[infectious-mononucleosis]** tags: FN, clinical, milestones: MK3, PC6, UKMLA: Sore throat, Infectious mononucleosis, reviewer: (none)
- Front: Giving [...] for presumed bacterial tonsillitis in a patient who actually has infectious mononucleosis classically triggers a florid morbilliform rash.
- Back: Giving amoxicillin or ampicillin for presumed bacterial tonsillitis in a patient who actually has infectious mononucleosis classically triggers a florid morbilliform rash. Watch for airway obstruction from tonsillar hypertrophy, and advise avoiding contact sports for three to four weeks given the risk of splenic rupture.
- Source: CDC clinical guidance on EBV/infectious mononucleosis.

**[aom-ome-basics]** tags: FN, clinical, milestones: MK1, PC5, UKMLA: Painful ear, Hearing loss, Otitis media, reviewer: (none)
- Front: Otitis media with effusion, fluid in the middle ear without signs of acute infection, is managed with [...] rather than antibiotics.
- Back: Otitis media with effusion, fluid in the middle ear without signs of acute infection, is managed with watchful waiting rather than antibiotics. Tympanostomy tubes are added if the effusion persists beyond three months bilaterally or hearing is at risk. For acute otitis media, give antibiotics immediately (rather than observe) if: age <6 months; otorrhea; severe symptoms (T &ge;39&deg;C, or moderate-severe/&ge;48h otalgia); or bilateral AOM in a child 6-23 months. First-line when treating is high-dose amoxicillin (80-90 mg/kg/day).
- Source: AAO-HNSF/AAP Clinical Practice Guideline: Diagnosis and Management of Acute Otitis Media (Update), 2013; AAO-HNSF CPG: Otitis Media with Effusion (Update), 2016.

**[cerumen-impaction-mgmt]** tags: FN, clinical, milestones: PC4, PC7, UKMLA: Hearing loss, Painful ear, reviewer: (none)
- Front: Cerumen impaction is defined as wax that is [...], not simply wax that is visible on exam.
- Back: Cerumen impaction is defined as wax that is symptomatic or obstructs visualization or testing, not simply wax that is visible on exam. Manual removal under direct vision is favored over irrigation in a patient on anticoagulation or with a non-intact tympanic membrane.
- Source: AAO-HNSF Clinical Practice Guideline: Cerumen Impaction (Update), 2017.

**[tonsillectomy-indications]** tags: FN, clinical, milestones: MK1, PC9, UKMLA: Sore throat, Tonsillitis, reviewer: (none)
- Front: The leading indication for tonsillectomy in children today is [...] from tonsillar hypertrophy, rather than recurrent throat infection.
- Back: The leading indication for tonsillectomy in children today is obstructive sleep-disordered breathing (OSA) from tonsillar hypertrophy, rather than recurrent throat infection. Recurrent infection still qualifies under the Paradise criteria, classically seven or more documented episodes in a year.
- Source: AAO-HNSF Clinical Practice Guideline: Tonsillectomy in Children (Update), 2019.

**[thyroid-nodule-workup-fn]** tags: FN, clinical, milestones: PC4, MK1, UKMLA: Neck lump, reviewer: (none)
- Front: The first step in the workup of a thyroid nodule is checking the [...].
- Back: The first step in the workup of a thyroid nodule is checking the TSH. A suppressed TSH points to a hot, functioning nodule on radionuclide scan, which is rarely malignant and usually not biopsied.
- Source: American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules, 2015; ACR TI-RADS Atlas, 2017.

**[tm-perforation-trauma]** tags: FN, clinical, milestones: PC4, MK1, UKMLA: Painful ear, Hearing loss, reviewer: (none)
- Front: A marginal or attic tympanic-membrane perforation is called 'unsafe' because it raises concern for a [...] forming through the defect.
- Back: A marginal or attic tympanic-membrane perforation is called 'unsafe' because it raises concern for a cholesteatoma forming through the defect. Most simple perforations after trauma heal on their own with a dry ear and no irrigation.
- Source: Bailey's Head & Neck Surgery: Otolaryngology, 6th ed.; traumatic TM perforation and chronic otitis media.

**[ototoxic-drugs-card]** tags: FN, clinical, milestones: PC4, MK3, UKMLA: Hearing loss, Tinnitus, reviewer: (none)
- Front: Among ototoxic drugs, the platinum chemotherapy agent [...] classically causes permanent, dose-related hearing loss.
- Back: Among ototoxic drugs, the platinum chemotherapy agent cisplatin classically causes permanent, dose-related hearing loss. New hearing loss or tinnitus in a patient on any ototoxic medication should prompt asking about the drug before assuming a primary otologic cause.
- Source: Standard clinical pharmacology teaching on ototoxicity.

**[surgical-airway-card]** tags: FN, clinical, milestones: PC1, PC7, UKMLA: Stridor, RED FLAG, reviewer: (none)
- Front: Emergency surgical airway access, when the patient can't be intubated or oxygenated, is achieved through the [...], located between the thyroid and cricoid cartilages.
- Back: Emergency surgical airway access, when the patient can't be intubated or oxygenated, is achieved through the cricothyroid membrane, located between the thyroid and cricoid cartilages. This cricothyroidotomy approach is faster and technically simpler than tracheostomy, the planned surgical airway used once the patient is stabilized.
- Source: Standard emergency airway management teaching.

**[flexnpl-indications]** tags: FN, clinical, milestones: PC4, MK1, UKMLA: Hoarseness and voice change, reviewer: (none)
- Front: List the most common indications for flexible nasolaryngoscopy.
- Back: Hoarseness (>2-4 weeks), chronic cough, globus, and nasal obstruction are the most common. Also dysphagia/odynophagia, stridor or airway concern, neck mass, referred otalgia with a normal ear, unilateral nasal symptoms or epistaxis, suspected foreign body or epiglottitis, and swallow assessment.

**[flexnpl-accuracy]** tags: FN, clinical, milestones: PC4, MK1, reviewer: (none)
- Front: Why is nasal endoscopy preferred over anterior rhinoscopy for posterior disease?
- Back: Endoscopy reveals pathology missed on anterior rhinoscopy in about 39% of patients and has higher diagnostic accuracy (~85% vs ~74%). It is also the criterion standard for the posterior nasal cavity and nasopharynx.

**[flexnpl-sequence]** tags: FN, clinical, milestones: PC4, MK1, reviewer: (none)
- Front: Name the systematic sequence of a complete flex NPL exam.
- Back: Nasal cavity -> nasopharynx -> oropharynx -> hypopharynx -> larynx -> subglottis. Record anatomy and function: palatal elevation, vocal-fold mobility, penetration/aspiration, subglottic patency, and any mass.

**[flexnpl-prep]** tags: FN, clinical, milestones: PC4, reviewer: (none)
- Front: Before passing the scope, what two preparatory steps improve success and comfort?
- Back: Do anterior rhinoscopy first to choose the more patent nasal passage, and warm/defog the tip. Topical decongestant &plusmn; anesthetic is optional and of unproven benefit; keep septal mucosal contact minimal.

**[flexnpl-subglottis]** tags: FN, clinical, milestones: PC4, reviewer: (none)
- Front: What maneuver improves the subglottic view during transnasal flexible laryngoscopy?
- Back: A forward &ldquo;sniffing&rdquo; position plus an anterior tongue-pull (grasping the tongue with gauze), which opens the angle to see the lateral and posterior subglottis without topical laryngeal anesthesia.

**[flexnpl-imaging]** tags: FN, clinical, milestones: PC4, MK1, reviewer: (none)
- Front: When does imaging get added after nasal endoscopy?
- Back: Endoscopy is first-line. Image selected cases: CT for structural/sinus disease or a complicated course, MRI for soft-tissue or intracranial extension, and CT angiography for recurrent, severe, or posterior epistaxis or a suspected vascular lesion.

**[flexnpl-cancer-yield]** tags: FN, clinical, milestones: PC4, MK1, UKMLA: Hoarseness and voice change, RED FLAG, reviewer: (none)
- Front: What is the yield of scoping persistent hoarseness, and who is highest risk?
- Back: Even in primary-care series, roughly 1-2% of scoped patients have a laryngeal cancer, and the risk is significantly higher in ever-smokers with hoarseness. Do not dismiss persistent dysphonia.

**[flexnpl-cautions]** tags: FN, clinical, milestones: PC4, reviewer: (none)
- Front: Name relative cautions before flexible nasendoscopy.
- Back: Significant nasal obstruction or pathology, active epistaxis, poorly controlled hypertension, and allergy to topical anesthetic. The main practical limitation is patient tolerance.

**[flexnpl-competence]** tags: FN, clinical, milestones: PC4, reviewer: (none)
- Front: What supports achieving competence in flex NPL?
- Back: A laryngeal endoscopy simulator or at least about 6 supervised examinations improves efficacy and patient comfort for the novice.

---

## Module: Facial Plastics & Trauma (`facial-plastics-trauma`)
- version: 0.4.0-draft
- status: DRAFT, pending faculty review. v0.2.0: added a depth pass covering genuinely missing trauma-subspecialty topics, mandible fracture patterns and the bimanual/malocclusion exam (including the bilateral 
- facultyReviewer: ""
- curriculum anchors: UKMLA Content Map (GMC), scope anchor; owns Facial/periorbital swelling (traumatic), Epistaxis (traumatic), Facial weakness (traumatic) at subspecialty trauma depth; ACGME Otolaryngology-HNS Milestones 2.0, primarily PC1 (emergency/trauma), PC9 (surgical management); ATLS (Advanced Trauma Life Support) principles for the primary survey; standard US facial trauma/reconstructive teaching; UK undergraduate Delphi (Lloyd 2014), student-scope depth cap
- subtitle: Facial fracture patterns, the ABCs of facial trauma, nerve/duct injuries not to miss, and the reconstructive ladder.

### Anatomy notes

**The facial buttresses** (tags: Facial buttresses · Bone columns · Fracture reconstruction)

[figure: Vertical and horizontal facial buttress columns that absorb/transmit force and that reconstructive plating restores.]
- Buttresses are thickened bone columns that absorb and transmit force: vertical (nasomaxillary, zygomaticomaxillary, pterygomaxillary) and horizontal (frontal bar, infraorbital rim, maxillary alveolus).
- Reconstructive plating re-establishes these buttresses rather than patching individual fracture lines.
- Restoring buttress continuity restores facial height, width, and projection.

**The parotid gland, facial nerve, and Stensen's duct** (tags: Facial nerve branches · Parotid gland · Stensen's duct)

[figure: Facial nerve trunk and its five branches running through the parotid gland, plus Stensen's duct course.]Why the parotid is really a &lsquo;facial nerve operation.' The facial nerve (CN VII) runs through the parotid, so the single most important thing documented before and after any parotid surgery is facial nerve function. Every branch drives a muscle (or muscles) of facial expression: injury shows up as a specific, predictable facial deficit.
Parotid facial nerve
- The facial nerve trunk exits the stylomastoid foramen and enters the posterior parotid, dividing it (a surgical, not true anatomic, plane) into superficial (~80%) and deep (~20%) lobes.
- Within the gland it splits at the pes anserinus into two divisions, temporofacial (upper) and cervicofacial (lower), giving the five terminal branches.Depth relationships (deep to superficial, key for parotid surgery):

- Facial nerve: most superficial of the three structures.
- Retromandibular vein: lies just deep to the nerve (used on imaging to estimate the nerve plane).
- External carotid artery: deepest.Landmarks to find the main trunk intraoperatively:

- Tragal pointer: trunk lies ~1 cm deep and inferior to its tip.
- Tympanomastoid suture line: points toward the trunk, a reliable landmark.
- Posterior belly of digastric: trunk is at the same depth, just superior to its attachment.The five branches, their muscles, and their deficitsMnemonic (superior -> inferior): &ldquo;To Zanzibar By Motor Car&rdquo;: Temporal, Zygomatic, Buccal, Marginal mandibular, Cervical.
BranchMain musclesFunctionDeficit if injuredTemporal (frontal)Frontalis, orbicularis oculi (upper), corrugatorRaises eyebrow, wrinkles foreheadBrow ptosis, can't wrinkle foreheadZygomaticOrbicularis oculiEye closureIncomplete eye closure -> corneal exposure riskBuccalBuccinator, upper lip elevators, nasalis, orbicularis orisSmile, keeps food off cheek, nasal/upper-lip movementDrooling, food pocketing, weak smileMarginal mandibularDepressors of lower lip (depressor anguli oris/labii inferioris), mentalisLower lip depression, symmetric full-denture smileAsymmetric smile, lower-lip weaknessCervicalPlatysmaTenses neck skinMinimal functional deficitVery high-yield surgical points
- The two &lsquo;watershed' branches, temporal and marginal mandibular, have the fewest cross-connections with adjacent branches, so injury to either is far more likely to cause a permanent, non-compensated deficit. The richly anastomosing midface branches (zygomatic/buccal) often recover because neighboring branches co-innervate the same muscles.
- Marginal mandibular branch is the most commonly discussed vulnerable branch: runs deep to platysma near the mandibular border/facial vessels, exposed in submandibular and lower-face surgery.
- Temporal (frontal) branch runs superficially under the temporoparietal (superficial temporal) fascia, crossing the zygomatic arch: at risk in facelift, temporal, and lateral brow surgery (see Pitanguy's line, below).
- Almost all facial expression muscles are innervated on their deep surface: the classic exceptions (innervated on their superficial side) are the buccinator, levator anguli oris, and mentalis.
- A peripheral (CN VII) lesion involves the forehead; a central/UMN lesion spares the forehead because the frontalis receives bilateral cortical input: the single most tested facial-nerve discriminator.
- Extracranially the nerve is purely motor; its other functions (taste to the anterior 2/3 tongue via the chorda tympani, stapedius, lacrimation/salivation) branch off within the temporal bone, before the stylomastoid foramen.Stensen's (parotid) duct
- Runs from the anterior parotid, over masseter, then pierces buccinator to open opposite the upper second molar.
- Surface landmark: the middle third of a line from the tragus/intertragal notch to the midpoint of the upper lip (philtrum).
- A cheek laceration along this line threatens both Stensen's duct and the buccal branch: assess both before closing; clear fluid expressible from the wound (increased by a sialagogue) suggests duct injury.Frey syndrome (gustatory sweating)After parotidectomy, regenerating parasympathetic secretomotor fibers (originally destined for the gland) misdirect to cutaneous sweat glands, causing sweating/flushing of the cheek with eating. Confirmed with the Minor starch-iodine test.

**The frontal branch of the facial nerve and Pitanguy's line** (tags: Frontal nerve branch · Brow ptosis)

[figure: The temporal (frontal) branch of the facial nerve and Pitanguy's surface-marking line that approximates its course.]
- The temporal (frontal) branch is the most superficial and vulnerable branch, running just under the temporoparietal fascia.
- Pitanguy's line (0.5 cm below the tragus to 1.5 cm above the lateral eyebrow) approximates its course.
- Lacerations or incisions crossing this line risk brow ptosis from frontal branch injury.

**Orbital floor and the inferior rectus/orbital fat** (tags: Orbital floor · Enophthalmos · Diplopia)

[figure: Bony orbit: optic canal, superior and inferior orbital fissures, infraorbital foramen; the floor is formed by the maxilla.]The thin orbital floor is the classic blow-out site, and entrapment there is what produces the enophthalmos and diplopia seen on exam.
Bony anatomy (the basics)
- The bony orbit is a pyramid with four walls. Key openings: optic canal (CN II, ophthalmic artery), superior orbital fissure (CN III, IV, V1, VI), inferior orbital fissure, and the infraorbital foramen.
- The floor is formed mainly by the maxilla (orbital plate): which is also the roof of the maxillary sinus.
- The floor is thin and grooved by the infraorbital canal (carries the infraorbital nerve, V2): the weakest wall along with the medial wall (lamina papyracea), the two classic blow-out sites.What a blow-out fracture isA fracture of the orbital floor (or medial wall) with an intact orbital rim. Two mechanisms:

- Hydraulic: a blow to the globe raises intraorbital pressure, which &lsquo;blows out' the thin floor.
- Buckling: force on the rim transmits a shock wave that fractures the floor.Common causes
- Blunt periorbital trauma (assault/fist, sports balls, MVCs, falls).
- Any object larger than the orbital rim striking the eye (smaller objects tend to rupture the globe instead).Clinical findings (why they happen)
- Enophthalmos: orbital fat/contents herniate into the maxillary sinus, and the globe sinks back.
- Diplopia on upgaze: herniation or entrapment of orbital fat &plusmn; the inferior rectus tethers vertical eye movement.
- Infraorbital nerve hypesthesia: numb cheek, upper lip, upper teeth (the nerve runs in the floor).
- Orbital emphysema: air tracks from the sinus into the orbit, worse with nose-blowing.[figure: Orbital floor blowout fracture and muscle entrapment.]

**Zygomaticomaxillary Complex (ZMC) Anatomy** (tags: Zygoma · Four-point articulation · ZMC fracture)

The zygoma is the main lateral buttress of the midface, forming the malar prominence and the lateral/inferior orbital walls; it's the second most common facial fracture after the nasal bones. Because it's a stout bone suspended between four articulations, force displaces the whole complex rather than fracturing it in isolation: why a 'tripod fracture' is better called a quadripod/ZMC fracture.
Four articulations
- Zygomaticofrontal (ZF) suture: lateral orbital rim, a palpable step-off.
- Zygomaticomaxillary suture/infraorbital rim: carries the infraorbital nerve (V2).
- Zygomaticotemporal suture: the zygomatic arch.
- Zygomaticosphenoid suture: lateral orbital wall, deep in the orbit.Highest-yield clinical points
- The zygomaticosphenoid suture is the key to reduction: alignment at the lateral orbital wall is the most reliable indicator of adequate 3-D reduction, because other sutures can look aligned while the complex is still rotated.
- Classic clinical triad: malar (cheek) flattening, trismus (a depressed arch/body impinges on the coronoid process and temporalis), and infraorbital nerve hypesthesia (numb cheek, lateral nose, upper lip, upper teeth).
- Orbital overlap: ZMC fractures commonly cause orbital-floor findings (enophthalmos, diplopia, possible globe injury); always do a visual acuity/globe check.
- Lateral canthus: the lateral canthal tendon attaches to the Whitnall tubercle on the zygoma; displacement produces canthal dystopia (antimongoloid slant).
- Imaging: non-contrast maxillofacial CT with coronal and 3-D reconstruction is the study of choice.The clinical triad (malar flattening, trismus, infraorbital numbness) mandates an orbital/globe exam.

**Mandible Anatomy** (tags: Mandible ring · Occlusion · Numb chin sign)

The mandible is a U-shaped (ring-like) bone articulating with the skull base at the paired TMJs. Because it's a ring, a single strong impact commonly produces two fractures: at the point of impact plus a second, often contralateral, fracture (classically parasymphyseal + contralateral condyle). Always image the whole mandible after finding one fracture.
Subunits, anterior to posterior
- Symphysis/parasymphysis
- Body
- Angle
- Ramus
- Condyle (and coronoid process)Common fracture sites, roughly by frequency: condyle > angle > body > parasymphysis.
Key neurovascular structureThe inferior alveolar nerve (V3) enters at the mandibular foramen (lingula), runs through the body in the mandibular canal, and exits at the mental foramen as the mental nerve. Injury -> numb-chin sign (lower lip/chin hypesthesia), a strong localizer for a body/parasymphyseal fracture.
Highest-yield clinical points
- Malocclusion is the cardinal symptom (&ldquo;my bite feels off&rdquo;): any new malocclusion after trauma is a mandible fracture until proven otherwise.
- Angle classification of occlusion (relationship of maxillary to mandibular first molar): Class I normal, Class II retrognathic, Class III prognathic; restoring premorbid occlusion is the goal of fixation.
- Exam clues: step-off or mucosal/gingival tear along the gumline, sublingual hematoma (highly suggestive), trismus, and a positive tongue-blade test (can't hold/twist a blade between the molars, a sensitive bedside screen).
- Airway risk: bilateral parasymphyseal/body fractures free the anterior segment, letting the tongue base fall back and obstruct the airway (worse supine/sedated), an ATLS airway problem before an orthopedic one.
- Imaging: panoramic radiograph (Panorex) screens; CT with 3-D reconstruction is definitive, especially for condylar/comminuted fractures.
- &lsquo;Guardsman fracture': chin-first fall -> bilateral condyle fractures &plusmn; symphyseal fracture.Closed-ring biomechanics dictate that a concentrated impact produces paired disruptions; post-traumatic malocclusion confirms an unstable mandibular fracture.
[figure: Mandible subunits and common fracture sites (condyle, angle, body, parasymphysis).]

**Trigeminal Nerve (CN V) Anatomy** (tags: Trigeminal divisions · Facial sensation · Foramina)

CN V is the main sensory nerve of the face (and motor to the muscles of mastication via V3). It has three divisions, each exiting the skull through its own foramen and each supplying a horizontal band of the face: a sensory deficit in one band points directly to the injured region in facial trauma.
Three divisions
- V1 Ophthalmic (superior orbital fissure): forehead, upper eyelid, cornea, dorsum of nose; cutaneous branches supraorbital + supratrochlear.
- V2 Maxillary (foramen rotundum -> infraorbital foramen): midface: lower eyelid, lateral nose, cheek, upper lip, upper teeth, palate; cutaneous branch is the infraorbital nerve.
- V3 Mandibular (foramen ovale -> mental foramen): lower face: lower lip, chin, lower teeth, anterior two-thirds of tongue (general sensation), plus motor to the muscles of mastication; cutaneous branch is the mental nerve.Highest-yield clinical points
- The three foramina line up vertically: supraorbital notch/foramen (V1), infraorbital foramen (V2), mental foramen (V3) sit roughly along a vertical line at the mid-pupillary plane: a quick surface landmark and where you test sensation.
- Infraorbital nerve (V2) hypesthesia is the classic sign of an orbital floor blow-out or ZMC fracture.
- Mental/inferior alveolar nerve (V3) hypesthesia (numb-chin sign) localizes to a mandibular body/parasymphyseal fracture.
- V1 corneal sensation matters for eye protection: a numb, poorly-closing eye (combined with facial nerve injury) is at high risk for exposure keratopathy.
- Motor is V3 only (masseter, temporalis, medial/lateral pterygoids): the rest of CN V is purely sensory.
- Corneal reflex: afferent limb V1, efferent limb CN VII (orbicularis oculi).Sensory deficit localizes to the division: forehead (V1), cheek (V2), or chin (V3).

**Layers of the Face and SMAS** (tags: SMAS · Facelift plane · Facial nerve protection)

The face is built in concentric layers, most consistent in the scalp and cheek. From superficial to deep:

- Skin
- Subcutaneous fat
- SMAS (superficial musculoaponeurotic system): the muscle/fascia layer
- Areolar (loose) tissue/retaining ligaments: the natural surgical glide plane
- Deep fascia: parotidomasseteric fascia over the cheek, deep temporal fascia over the templeSuperficial Musculoaponeurotic System (SMAS)A continuous fibromuscular sheet that invests/connects the muscles of facial expression, transmitting their pull to the skin. It's continuous with the platysma inferiorly, the temporoparietal (superficial temporal) fascia superiorly, and blends into the frontalis/orbicularis system. It's the layer plicated or elevated in a facelift (rhytidectomy): repositioning the SMAS, not just the skin, gives durable lift.
Facial Nerve Relationship to the SMASWithin the parotid, facial nerve branches lie deep to the gland; as they exit anteriorly, branches run deep to (under) the SMAS, protected by it, becoming more superficial toward the muscles they innervate (entered from their deep surface). Surgical corollary: dissection superficial to the SMAS (sub-SMAS plane preserved) protects the nerve; dissection deep to it risks branch injury. The temporal (frontal) branch is uniquely vulnerable because over the zygomatic arch it travels within the superficial temporal fascia (the SMAS equivalent) with little overlying protection: the basis for Pitanguy's line and for brow ptosis after facelift/temporal incisions.
Related high-yield layers
- Retaining ligaments (e.g. zygomatic, mandibular) tether skin/SMAS to bone; their release allows tissue repositioning and explains the aging descent of facial fat.
- Deep temporal fascia splits around the superficial temporal fat pad: the landmark plane used to safely approach the arch while keeping the frontal branch superficial/out of harm's way.Dissection superficial to the SMAS avoids facial nerve branch injury.

### Anatomy diagrams (4)

**Diagram: Facial buttresses**

Vertical and horizontal reinforcing columns. Name each, then reveal.

_Image source: Vertical and Horizontal Facial Buttresses. Illustration generated with Google Gemini._
- Frontal bar (horizontal): the superior horizontal buttress along the brow, part of the frame that absorbs frontal impact.
- Nasomaxillary buttress (vertical): runs alongside the nose from the maxillary alveolus to the frontal bone.
- Infraorbital rim (horizontal): connects the nasomaxillary and zygomaticomaxillary buttresses; disruption contributes to midface flattening.
- Zygomaticomaxillary buttress (vertical): transmits masticatory and impact forces from the zygoma to the maxillary alveolus.
- Maxillary alveolus (horizontal): the inferior horizontal buttress; houses the maxillary teeth and connects the vertical buttresses.
- Pterygomaxillary buttress (vertical, posterior): connects the maxilla to the pterygoid plates/skull base posteriorly.
- Nasomaxillary buttress (vertical): runs alongside the nose from the maxillary alveolus to the frontal bone.
- Zygomaticomaxillary buttress (vertical): transmits masticatory and impact forces from the zygoma to the maxillary alveolus.
- Pterygomaxillary buttress (vertical, posterior): connects the maxilla to the pterygoid plates/skull base posteriorly.

**Diagram: Facial nerve branches through the parotid**

Five named branches. Name each, then reveal.

_Image source: Facial Nerve Branches Through the Parotid Gland. Illustration generated with Google Gemini._
- Temporal (frontal) branch: most vulnerable branch, crosses Pitanguy's line, injury causes brow ptosis.
- Zygomatic branch: contributes to eyelid closure (orbicularis oculi); injury can impair blink.
- Buccal branch: runs near Stensen's duct; often has multiple interconnecting twigs so injury is less consistently disabling.
- Buccal branch: crosses the cheek toward the upper lip and nose, alongside Stensen's duct.
- Facial nerve trunk: exits the stylomastoid foramen and enters the parotid before branching.
- Stylomastoid foramen: exit point of the facial nerve from the skull base.
- Parotid gland: the facial nerve trunk divides it into superficial and deep lobes as it passes through.
- Marginal mandibular branch: vulnerable along the mandible border, injury causes asymmetric smile/lower lip droop.
- Cervical branch: innervates platysma; injury is usually of minimal functional consequence.
- Stensen's duct: runs from the tragus toward the upper lip, pierces buccinator opposite the second upper molar.

**Diagram: Orbital floor blow-out fracture**

Coronal CT, right orbit. The arrow marks the fracture site. Reveal to see what it shows.

_Image source: Add figure citation_
- Yellow arrow: a trapdoor fracture of the orbital floor, with soft tissue herniating through the defect into the roof of the maxillary sinus below: the CT correlate of enophthalmos and diplopia on upgaze from inferior rectus entrapment.

**Diagram: Pitanguy's line and the frontal branch**

Lateral face, not to scale. Name each landmark, then reveal.

_Image source: Pitanguy's Line and the Frontal Branch of the Facial Nerve. Jawad, Hohman, & Raggio (2025). StatPearls._
- Inferior landmark: 0.5 cm (5 mm) below the tragus, the starting point of Pitanguy's line for the frontal branch's surface course.
- Superior landmark: 1.5 cm (15 mm) above the lateral eyebrow, the endpoint of Pitanguy's line; incisions crossing this corridor risk the frontal branch and brow ptosis.

### Clinical blocks (15)

**[trauma-primary-survey] Facial trauma: ABCs before the face**

Facial trauma is managed within the ATLS primary survey, before detailed facial exam:

- Airway: facial fractures can compromise the airway directly (posteriorly displaced maxillary segments, loose teeth/blood, associated mandible fractures).
- Breathing
- Circulation: facial and scalp wounds can bleed briskly.Never let a dramatic facial injury distract from a life-threatening airway or C-spine issue.

**[le-fort-classification] Le Fort fracture classification**

Describes patterns of midface fracture through the pterygoid plates, distinguished by the level of the fracture line, not a strict hierarchy of severity, and patterns can be mixed/asymmetric.
[figure: Le Fort I, II, and III midface fracture patterns distinguished by fracture line level.]

| Type | Fracture line | Clinical clue |
| --- | --- | --- |
| Le Fort I | Horizontal, above the maxillary teeth apices (separates the palate/alveolus) | Mobile hard palate/maxilla, teeth intact with the mobile segment |
| Le Fort II | Pyramidal, through the nasofrontal suture, medial orbit, and zygomaticomaxillary region | Mobile nasal-maxillary complex; midface mobility on exam |
| Le Fort III | Craniofacial disjunction, through the frontozygomatic suture and orbits, separating the face from the skull base | Entire midface mobile relative to the skull; 'floating face' |

**[facial-nerve-injury-timing] Facial nerve injury after trauma: when to explore**

Immediate, complete facial weakness after penetrating trauma lateral to the lateral canthus is the classic indication for urgent surgical exploration and nerve repair (nerve stimulation can still identify distal branches within ~72 hours before Wallerian degeneration). Delayed-onset or incomplete weakness is more often due to edema/neurapraxia and can typically be observed.

**[duct-and-nerve-not-to-miss] Structures not to miss in a cheek/parotid laceration**

[figure: Stensen's duct and buccal branch of the facial nerve at risk along the tragus-to-upper-lip line.]Any laceration crossing the line from tragus to the midpoint of the upper lip should raise concern for injury to Stensen's (parotid) duct and/or buccal branch of the facial nerve. Clear, salivary fluid from a facial wound, or an asymmetric smile, should prompt exploration ± duct cannulation before closure.

**[reconstructive-ladder] The reconstructive ladder**

A framework for choosing the simplest option that achieves a good functional/cosmetic result, escalating only as needed:

- Healing by secondary intention
- Primary closure
- Skin graft (split- or full-thickness)
- Local flap
- Regional flap
- Free tissue transfer (microvascular free flap)Choice depends on defect size/location, tissue match, and patient factors, not simply 'use the most advanced option.'
[figure: Stepwise reconstructive options from secondary intention through free tissue transfer.]

**[facial-bite-wound] Facial bite wounds**

Copious irrigation and debridement first. Amoxicillin-clavulanate is first-line prophylaxis (covers Pasteurella from cats/dogs, Eikenella from human bites, Capnocytophaga, and oral anaerobes); doxycycline + metronidazole, or a fluoroquinolone + clindamycin, if penicillin-allergic. Unlike bites elsewhere on the body (often left open), well-irrigated facial bite wounds are generally closed primarily given the face's rich vascularity and cosmetic/functional stakes. Always address rabies risk (animal, exposure type) and tetanus status.

**[mandible-fracture-patterns] Mandible fracture patterns and the bimanual exam**

The mandible is a ring-like bone, so a strong enough force often fractures it in two places (e.g. a body fracture with a contralateral condyle fracture). Always image the whole mandible, not just the obvious injury site.
Common sites, roughly in order of frequency:

- Condyle
- Angle
- Body
- Parasymphysis/symphysisExam clues:

- Malocclusion (patient reports their bite 'feels wrong')
- Trismus
- A palpable step-off or mucosal tear along the gumline
- A positive bimanual/tongue-blade test (a tongue blade held between the molars snaps when the patient bites down through an intact mandible, but the patient can't generate enough bite force to break it when a fracture is present; poor sensitivity, but a quick bedside screen)Panorex (panoramic radiograph) is a good screening view; CT with 3D reconstruction is the definitive study, especially for condylar and comminuted fractures.
[figure: Common mandible fracture sites (condyle, angle, body, parasymphysis) and the bimanual/tongue-blade exam.]

**[mandible-fracture-antibiotics] Antibiotic prophylaxis for mandible fractures**

Fractures through the dentate (tooth-bearing) segment (angle, body, parasymphysis, symphysis) communicate with the oral cavity and are open/contaminated, with infection rates reported as high as ~50% untreated. Give perioperative antibiotics (e.g., a penicillin covering oral flora, or clindamycin if penicillin-allergic). Evidence supports continuing prophylaxis for no more than 24 hours after repair: prolonged post-operative courses add no benefit and increase resistance/C. difficile risk. Prolonged pre-operative antibiotics likewise show no benefit. Condylar/subcondylar and ramus fractures (non-dentate) are generally closed and do not require the same prophylaxis.

**[zmc-fracture] Zygomaticomaxillary complex (ZMC) fracture**

The second most common facial fracture, after the nasal bones.

- The zygoma articulates at four points: zygomaticofrontal, zygomaticomaxillary/infraorbital rim, zygomaticotemporal/arch, and zygomaticosphenoid (lateral orbital wall). A true &lsquo;tripod/quadripod' fracture disrupts more than one of these: an isolated arch fracture is a different (and generally less complex) injury.
- Clinical triad: malar (cheek) flattening, trismus (coronoid/temporalis impingement), and infraorbital nerve hypoesthesia.
- Also look for subconjunctival hemorrhage and a palpable step-off at the infraorbital rim or zygomaticofrontal suture.
- The zygomaticosphenoid suture at the lateral orbital wall is the best indicator of adequate 3-D reduction.
- CT confirms the diagnosis: watch for associated orbital floor involvement and increased orbital volume -> enophthalmos.

**[csf-rhinorrhea] Traumatic CSF rhinorrhea**

Suspect with clear, unilateral watery drainage after midface/skull-base trauma, worse leaning forward.

- Bedside clues: a &lsquo;halo/ring' sign on gauze, and glucose-positive fluid.
- Confirm with beta-2 transferrin (specific); localize with CT &plusmn; cisternography.
- Avoid nasal packing/instrumentation near a suspected skull-base defect (ascending meningitis risk).
- Most traumatic leaks resolve with head elevation/observation; persistent leaks need surgical repair.

**[auricular-hematoma] Auricular hematoma**

Blunt shear separates the perichondrium from the underlying cartilage. Cartilage has no independent blood supply, so an undrained collection leads to necrosis and the permanent &lsquo;cauliflower ear' deformity.
Treat with prompt incision/aspiration plus a bolster or compressive dressing to prevent reaccumulation: drainage alone is insufficient.

**[noe-fracture] Naso-orbito-ethmoid (NOE) fracture**

A high-energy fracture of the central midface involving the nasal bones, medial orbital walls, and ethmoid complex. The key structure at risk is the medial canthal tendon, which anchors the eyelids to the central fragment. Disruption causes traumatic telecanthus (widened, rounded medial canthal distance) and a flattened, splayed nasal-bridge appearance. Test with the bowstring (traction) test: pull the lower eyelid laterally while palpating the medial canthal area. If the tendon is intact, it stays taut against the bone; if disrupted, the tissue moves independently. The nasolacrimal duct runs through this same region and can be injured concurrently, risking post-traumatic epiphora (excess tearing) if not addressed. CT is required for diagnosis and surgical planning; the central fragment may remain a single unit with the tendon still attached (better prognosis) or be comminuted into multiple pieces (Markowitz classification, types I-III); comminuted patterns need direct tendon fixation, not just bone reduction.

**[frontal-sinus-fracture] Frontal sinus fracture: anterior vs posterior table**

Frontal sinus fractures are described by which wall (table) is involved, because it changes both risk and management. Anterior table only: primarily a cosmetic/contour concern and a risk factor for a later mucocele if the sinus outflow tract is obstructed; many can be observed if minimally displaced. Posterior table involvement: the posterior table separates the sinus from the anterior cranial fossa, so a fracture here carries real risk of dural tear, CSF leak, and pneumocephalus (see the CSF rhinorrhea red flag above) and often needs neurosurgical involvement. The nasofrontal outflow tract (drainage pathway) is assessed on CT because an obstructed tract changes management from simple observation/repair toward sinus obliteration or cranialization to prevent a delayed mucocele or mucopyocele.

**[house-brackmann-grading] Grading facial nerve function: the House-Brackmann scale**

Once the decision to observe (rather than explore) has been made, facial nerve function is tracked over time using the House-Brackmann scale (grade I-VI):

- I: normal
- II: mild dysfunction (slight weakness, normal symmetry at rest)
- III: moderate (obvious but not disfiguring asymmetry, complete eye closure with effort)
- IV: moderately severe (disfiguring asymmetry, incomplete eye closure)
- V: severe (barely perceptible motion)
- VI: total paralysis, no movementIt's a documentation and follow-up tool, distinct from the explore-vs-observe decision itself. A worsening grade over serial exams is what prompts reconsidering surgical exploration in a case initially chosen for observation.

**[facial-nerve-electrodiagnostics] When exam alone isn't enough: electrodiagnostic testing**

A cooperative, alert patient's voluntary facial movement is the best test, but when the patient is obtunded, intubated, or the exam is otherwise equivocal, electrodiagnostic testing helps decide observation vs exploration. A nerve stimulator applied to the distal (peripheral) branches can still evoke a motor response for roughly 72 hours after injury even if the nerve is transected, because the distal segment hasn't yet undergone Wallerian degeneration. A response present at this stage doesn't rule out transection. Electroneuronography (ENoG) compares the amplitude of the evoked compound muscle action potential on the injured side to the normal side; a drop of >90% is generally taken as a threshold favoring surgical exploration/decompression, most classically used in the analogous setting of temporal-bone facial nerve injury and severe Bell's palsy, but the same electrodiagnostic logic applies to extratemporal trauma when the injury site and timing are uncertain. Note that the >90% ENoG threshold is decision-support, not an automatic trigger: prospective data show near-universal recovery to House-Brackmann I-II with steroids alone in complete post-traumatic palsy from undisplaced temporal bone fractures, even at <5% ENoG response. The threshold is most useful in displaced or suspected transecting injuries.

### Red flags
- Any facial trauma with airway compromise signs (stridor, inability to control secretions, expanding neck/floor-of-mouth hematoma): airway takes priority over facial fracture management per ATLS.
- Immediate, complete facial paralysis after penetrating lateral facial trauma: time-sensitive indication for surgical exploration/nerve repair (~72h stimulation window).
- Clear or salivary drainage from a cheek laceration: suspect Stensen's duct injury; needs exploration before closure.
- Orbital blow-out fracture with restricted upgaze, nausea/vomiting/bradycardia (oculocardiac reflex), or a 'white-eyed' presentation in a child: possible muscle entrapment; can be a surgical emergency, especially in pediatric trapdoor fractures.
- Expanding retrobulbar/orbital hematoma with proptosis and decreasing vision: orbital compartment syndrome; a true ophthalmic emergency requiring emergent lateral canthotomy/cantholysis.
- CSF rhinorrhea after facial/skull-base trauma: think anterior skull base fracture; assess for meningitis risk, avoid nasal packing that could seed infection intracranially.
- Le Fort III ('floating face') fracture: high-energy craniofacial disjunction; screen carefully for associated intracranial and cervical spine injury.
- Naso-orbito-ethmoid (NOE) fracture with traumatic telecanthus or a positive bowstring/traction test: suspect medial canthal tendon disruption; missed injury causes permanent telecanthus and epiphora, so this needs specialist (facial plastics/oculoplastics) evaluation, not routine follow-up.
- Frontal sinus fracture with CSF leak, pneumocephalus, or posterior table involvement on CT: intracranial risk; needs neurosurgical involvement, unlike an isolated anterior-table-only fracture which is often just a cosmetic concern.

### Cases (11)

**Case [case-le-fort-ii]**

Stem: After a motor vehicle collision, a patient has facial swelling, epistaxis, and a mobile midface that moves as a unit with the nasal bones when the examiner grasps the anterior maxillary teeth and palate.

- Q: Which Le Fort pattern does this describe, and why?
  A: Le Fort II, a pyramidal fracture through the nasofrontal suture and zygomaticomaxillary region, so the nasal complex moves together with the maxilla as one mobile pyramidal segment.

- Q: What must be assessed before definitive facial fracture management?
  A: Airway, breathing, circulation, and C-spine per ATLS primary survey. Facial fractures are managed after life threats are addressed, and the airway can be directly threatened by a mobile, posteriorly displaced midface.

Teaching: [figure: A mobile midface moving with the nasal complex, classic for Le Fort II fracture, assessed after ATLS priorities.]Clinical Pearl: Midface mobility, tested by grasping the maxillary alveolus, distinguishes Le Fort patterns clinically. ATLS priorities take precedence regardless of fracture pattern.

**Case [case-facial-nerve-laceration]**

Stem: A patient has a deep laceration anterior to the ear from a knife injury, with immediate, complete inability to move the ipsilateral forehead, eye closure, and mouth on that side.

- Q: What does the immediate, complete nature of the weakness suggest, and what is the management implication?
  A: Immediate and complete weakness after penetrating trauma lateral to the lateral canthus suggests a transected facial nerve. This is an indication for urgent surgical exploration, ideally with nerve stimulation to identify distal branches within about 72 hours before Wallerian degeneration makes this unreliable.

- Q: How would the approach differ if the weakness had developed gradually over 2 days instead?
  A: Delayed-onset weakness is more consistent with edema/neurapraxia rather than transection, and would typically be observed rather than explored urgently.

Teaching: [figure: Immediate complete facial paralysis after a penetrating preauricular knife wound indicating nerve transection needing urgent exploration.]Clinical Pearl: The timing and completeness of post-traumatic facial weakness, not weakness alone, determines whether urgent surgical exploration or observation is indicated.

**Case [case-orbital-blowout-child]**

Stem: A 9-year-old is hit in the eye with a ball. The eye looks relatively unremarkable (no significant bruising or swelling: a 'white eye'), but he has marked restriction of upgaze, nausea, and vomiting.

- Q: Why is the benign external appearance misleading here?
  A: This is the classic 'white-eyed' pediatric blow-out fracture. Children's more elastic bone can spring back after fracture, trapping (entrapping) the inferior rectus muscle with minimal external bruising, unlike the more obvious hematoma typically seen in adult blow-out fractures.

- Q: Why are the nausea and vomiting clinically important here, and what is the urgency?
  A: They suggest the oculocardiac reflex (from muscle entrapment/traction) and indicate this may be a surgical emergency: unlike most adult blow-out fractures, which can often be observed, pediatric white-eyed entrapment needs prompt surgical release to prevent permanent muscle ischemia/fibrosis.

Teaching: Clinical Pearl: A 'white eye' orbital fracture in a pediatric patient with restricted upgaze and nausea/vomiting is a surgical emergency (trapdoor fracture with muscle entrapment) despite the benign external appearance.

**Case [case-parotid-duct-injury]**

Stem: A patient has a laceration over the cheek along a line from the tragus to the corner of the mouth, with clear, watery fluid draining from the wound that increases when he is shown food.

- Q: What structure is likely injured, and what confirms it?
  A: Stensen's (parotid) duct. Clear fluid that increases with a salivary stimulus (sialogogue, like the sight or smell of food) suggests saliva, not just serous wound drainage. Duct cannulation or exploration confirms the injury.

- Q: What else must be assessed along this same line of injury?
  A: The buccal branch of the facial nerve, which runs near the duct along this trajectory. Assess for asymmetric smile or cheek weakness before closing the wound.

Teaching: [figure: Cheek laceration with clear salivary drainage indicating Stensen's duct injury, with concurrent buccal nerve risk.]Clinical Pearl: A cheek laceration along the tragus-to-lip-corner line risks both Stensen's duct and the buccal branch of the facial nerve; examine both before closure.

**Case [case-csf-rhinorrhea]**

Stem: After a high-energy facial/skull-base injury, a patient has clear fluid dripping from one nostril that the patient describes as different from typical nasal discharge, worse when leaning forward.

- Q: What must be excluded, and how might it be distinguished from ordinary rhinorrhea at the bedside?
  A: CSF rhinorrhea from an anterior skull base fracture. The 'halo' or 'ring' sign on gauze (a clear ring surrounding a central blood spot) and glucose-positive fluid support CSF; definitive testing (e.g. beta-2 transferrin) confirms it.

- Q: What should be avoided in managing this patient's nose, and why?
  A: Avoid nasal packing where possible. Packing near a skull-base defect risks pushing bacteria intracranially and increasing meningitis risk. Most traumatic CSF leaks are managed with head elevation and observation initially, with surgical repair reserved for persistent leaks.

Teaching: Clinical Pearl: Clear rhinorrhea after skull-base trauma is CSF until proven otherwise. Nasal packing is contraindicated.

**Case [case-guardsman-fracture]**

Stem: A patient fell and landed chin-first on the pavement. He reports his bite feels wrong, has bilateral preauricular pain and trismus, and describes numbness of his lower lip and chin bilaterally.

- Q: What fracture pattern does a chin-first fall classically produce, and why does it happen in two places at once?
  A: A 'guardsman fracture': bilateral mandibular condyle fractures, often with an associated symphyseal/parasymphyseal fracture at the point of direct impact. The mandible is a ring of bone, so force transmitted through the symphysis frequently fractures the condyles as well, at the weakest points furthest from the impact.

- Q: What does the bilateral numbness of the lip and chin localize, and what confirms the diagnosis?
  A: A bilateral numb chin sign localizes to the inferior alveolar/mental nerve as it runs through the body of the mandible, consistent with body/parasymphyseal involvement. Panorex (panoramic dental/mandible radiograph) screens for the fracture lines; CT with 3D reconstruction confirms and characterizes them, especially the condyles.

Teaching: [figure: Bilateral condylar mandible fracture with symphyseal fracture and bilateral numb chin sign from a chin-first fall.]Clinical Pearl: A chin-first mechanism with malocclusion and trismus requires bilateral evaluation beyond the obvious symphyseal fracture; the mandible, as a closed ring, rarely fractures in only one location.

**Case [case-noe-fracture]**

Stem: After a high-speed motor vehicle collision with direct impact to the nasal bridge, a patient has a widened, rounded appearance to the inner corners of both eyes and a flattened nasal bridge. Pulling gently on the lower eyelid laterally while palpating the inner canthus, the examiner feels the soft tissue move independently of the underlying bone.

- Q: What is this exam maneuver, and what does the finding indicate?
  A: This is the bowstring (traction) test for the medial canthal tendon. Independent movement of the soft tissue from the bone indicates the tendon has been disrupted from its bony attachment: a positive test.

- Q: What is this overall injury pattern, what nearby structure is also at risk, and what imaging is needed?
  A: This is a naso-orbito-ethmoid (NOE) fracture with traumatic telecanthus. The nasolacrimal duct runs through the same region and can be injured concurrently, risking post-traumatic epiphora. CT is required to characterize the central fragment and plan direct tendon fixation (comminuted patterns need more than simple bone reduction).

Teaching: Clinical Pearl: Telecanthus with a positive bowstring test after central midface trauma indicates canthal tendon injury, a diagnosis not evident on visual inspection alone; specialist repair prevents permanent deformity and epiphora.

**Case [case-mandible-fracture-airway]**

Stem: An intoxicated patient is brought in after an assault with direct blows to the chin. Lying supine, he is snoring loudly with intermittent stridor. Exam shows bilateral parasymphyseal step-offs, a mobile anterior mandibular segment, malocclusion, and blood pooling in the floor of mouth.

- Q: Why is this patient's airway at risk, and why does lying supine make it worse?
  A: Bilateral parasymphyseal (or body) mandible fractures free the anterior mandibular segment from its normal bony support, letting the tongue base fall posteriorly and obstruct the hypopharyngeal airway. This is worsened supine (gravity), by sedation or intoxication (reduced tone), and by floor-of-mouth swelling or bleeding stacking on top of it.

- Q: What is the immediate bedside action, before any imaging?
  A: Reposition: sit the patient up, use a jaw-thrust/chin-lift, or manually pull the mobile anterior segment/tongue forward, to relieve tongue-base obstruction while airway equipment is readied. This is an ATLS-primary-survey airway problem, addressed before fracture workup.

- Q: What imaging confirms the fracture pattern, and what does it typically show?
  A: Panorex (panoramic dental/mandible radiograph) screens; CT mandible with 3D reconstruction confirms and characterizes it. Because the mandible is a ring of bone, a fracture in one place (e.g. parasymphyseal) is frequently paired with a second fracture elsewhere (e.g. contralateral condyle/angle). Always image the whole mandible.

- Q: If positioning and jaw-thrust don't secure the airway, what is the escalation, and why is fixation not the first move?
  A: Escalate to a definitive airway: awake fiberoptic intubation is often preferred over blind orotracheal intubation when anatomy is disrupted, with a surgical airway (cricothyroidotomy/tracheostomy) as backup if intubation fails. Open reduction and fixation of the fracture is definitive but not urgent: it comes after the airway is secured, not instead of securing it.

Teaching: [figure: Bilateral parasymphyseal mandible fracture causing tongue-base airway obstruction requiring airway management before fixation.]Clinical Pearl: Bilateral mandible fracture requires airway management before orthopedic fixation. Tongue-base collapse from a flail anterior segment can obstruct the airway, particularly in the supine or sedated patient.

**Case [case-auricular-hematoma]**

Stem: A collegiate wrestler presents after a match with a painful, tense, fluctuant swelling of the outer ear that has obliterated the normal cartilaginous contours. There is no overlying skin laceration.

- Q: What has happened, and why does the perichondrium matter here?
  A: An auricular (pinna) hematoma. Blunt trauma shears the perichondrium off the underlying cartilage, and blood collects in the resulting subperichondrial space. Auricular cartilage has no blood supply of its own; it depends entirely on the overlying perichondrium for oxygen and nutrients.

- Q: Why is this a same-day problem rather than something to reassess in clinic next week?
  A: The hematoma physically separates cartilage from its only blood supply. Left undrained, the cartilage undergoes avascular necrosis, and the body lays down disorganized new (fibro)cartilage in response, producing the permanent, irreversible 'cauliflower ear' deformity. The window to prevent this is narrow.

- Q: What is the management, and why is drainage alone not enough?
  A: Needle aspiration (for a small, early hematoma) or incision and drainage (for larger/recurrent collections), followed by a compressive pressure dressing or bolster sutured across the ear. The dressing/bolster is essential: without it, blood reaccumulates in the same potential space and the hematoma recurs.

- Q: How does management change if the patient returns a week later with a firm, irregular, thickened ear instead?
  A: Once fibrocartilage has already formed, drainage no longer helps: the deformity is established. At that point management shifts from prevention to cosmetic/reconstructive discussion rather than acute intervention.

Teaching: Clinical Pearl: Auricular cartilage has no intrinsic blood supply; prompt drainage plus a pressure dressing, not drainage alone, prevents cauliflower ear deformity.

**Case [case-frontal-sinus-fracture]**

Stem: After a high-speed motor vehicle collision with direct forehead impact, CT shows a frontal sinus fracture. The report specifically comments on the status of the posterior table and the nasofrontal outflow tract.

- Q: Why does the report single out the posterior table specifically?
  A: The posterior table is the only thing separating the frontal sinus from the anterior cranial fossa. A posterior table fracture carries real risk of dural tear, CSF leak, and pneumocephalus, very different stakes from an anterior-table-only fracture, which is mainly a contour/cosmetic issue.

- Q: If only the anterior table is fractured and minimally displaced, how is this typically managed?
  A: Often observed, or reduced primarily for cosmesis, without violating the sinus, as long as the nasofrontal outflow tract is patent, since the main long-term risk of an isolated anterior-table fracture is a contour deformity rather than an intracranial one.

- Q: Why does the nasofrontal outflow tract get assessed separately from which table is broken?
  A: If the outflow tract is obstructed (by fracture fragments or scarring) regardless of which table is involved, the sinus can no longer drain, risking a delayed mucocele or mucopyocele: a mucus- or pus-filled expansile lesion that can present months to years later and erode adjacent bone (orbit, skull base).

- Q: What does management of a posterior-table or outflow-tract-involving fracture generally require, beyond ENT?
  A: Neurosurgical co-evaluation, given the intracranial risk. Depending on severity this may mean observation with CSF-leak precautions, or operative management with sinus obliteration or cranialization to eliminate the mucocele risk and any dead space communicating with the intracranial cavity.

Teaching: Clinical Pearl: Frontal sinus fracture management depends on posterior table involvement (intracranial risk) and nasofrontal outflow tract patency (delayed mucocele risk), not anterior table appearance.

**Case [case-septal-hematoma]**

Stem: A 7-year-old falls off a bike onto his face. Nasal exam shows a bilateral, boggy, fluctuant, bluish-red swelling of the nasal septum that nearly obstructs both nostrils; there is no active bleeding.

- Q: How is this distinguished from a simple deviated septum after trauma?
  A: A deviated septum is firm and follows the normal septal contour off to one side. A septal hematoma is boggy/fluctuant to palpation with a cotton-tip applicator, characteristically bilateral, and bluish-red/discolored: blood has collected in the subperichondrial/submucosal space on both sides of the cartilage.

- Q: Why is this a same-day surgical emergency rather than something to reduce electively?
  A: Septal cartilage, like auricular cartilage, has no blood supply of its own and depends entirely on the overlying perichondrium/mucoperichondrium. An undrained hematoma causes avascular necrosis of the cartilage within days, and can also become a septal abscess. Both are surgical emergencies that must be drained the same day it's found.

- Q: What deformity results if this is missed, and why?
  A: A saddle-nose deformity: loss of the cartilaginous dorsal septal support (from necrosis) causes the nasal dorsum to collapse, producing a sunken/flattened nasal bridge. It is a permanent structural loss, not just a cosmetic bruise that resolves.

- Q: What is the treatment, and why is drainage alone insufficient?
  A: Prompt incision and drainage of the hematoma, followed by anterior nasal packing or through-and-through quilting sutures to appose the mucoperichondrial flaps against the septal cartilage and prevent the space from reaccumulating blood. Drainage without preventing reaccumulation risks the hematoma simply reforming.

Teaching: Clinical Pearl: Boggy, fluctuant, bilateral septal swelling after nasal trauma is a septal hematoma until proven otherwise. Same-day incision and drainage plus packing/quilting prevents saddle-nose deformity and abscess formation.

### Flashcards (30)

**[facial-buttresses-card]** tags: FP, anatomy, milestones: MK1, PC9, UKMLA: Facial/periorbital swelling, reviewer: (none)
- Front: What are the facial buttresses, and why does reconstructive plating target them specifically?
- Back: Thickened bone columns (vertical: nasomaxillary, zygomaticomaxillary, pterygomaxillary; horizontal: frontal bar, infraorbital rim, maxillary alveolus) that absorb and transmit force. Restoring buttress continuity, not just individual fracture lines, restores facial height, width, and projection.[figure: Facial buttresses as force-absorbing bone columns targeted by reconstructive plating.]
- Source: Standard facial trauma anatomy teaching.

**[le-fort-card]** tags: FP, clinical, milestones: MK1, PC1, UKMLA: Facial/periorbital swelling, reviewer: (none)
- Front: Distinguish Le Fort I, II, and III fractures.
- Back: I: horizontal, above the tooth apices: mobile palate/alveolus. II: pyramidal, through the nasofrontal suture: mobile nasomaxillary complex. III: craniofacial disjunction through the frontozygomatic sutures: entire midface mobile relative to the skull ('floating face').[figure: Distinguishing Le Fort I, II, and III fracture patterns.]
- Source: Standard facial trauma teaching on Le Fort classification.

**[trauma-abcs-card]** tags: FP, clinical, milestones: PC1, SBP1, UKMLA: Facial/periorbital swelling, RED FLAG, reviewer: (none)
- Front: What comes before detailed facial fracture assessment in a trauma patient?
- Back: The ATLS primary survey: Airway (facial fractures can directly compromise it), Breathing, Circulation, Disability, Exposure. A dramatic facial injury should never distract from a life-threatening airway or C-spine issue.
- Source: ATLS (Advanced Trauma Life Support) primary survey principles.

**[facial-nerve-parotid-card]** tags: FP, anatomy, milestones: MK1, PC9, UKMLA: Facial weakness, reviewer: (none)
- Front: Name the five branches of the facial nerve as it exits the parotid.
- Back: Temporal, Zygomatic, Buccal, Marginal mandibular, Cervical (mnemonic: 'Ten Zebras Bite My Cat'). The nerve trunk runs through the substance of the parotid gland, dividing it surgically into superficial and deep lobes.[figure: The five facial nerve branches exiting the parotid gland.]
- Source: Standard facial nerve/parotid anatomy teaching.

**[pitanguys-line-card]** tags: FP, anatomy, milestones: MK1, PC9, UKMLA: Facial weakness, reviewer: (none)
- Front: What is Pitanguy's line, and why does it matter clinically?
- Back: A line from 0.5cm below the tragus to 1.5cm above the lateral eyebrow, approximating the course of the temporal (frontal) branch of the facial nerve, the most superficial and vulnerable branch. Incisions or lacerations crossing it risk brow ptosis.[figure: Pitanguy's line as a surface marking for the temporal (frontal) branch of the facial nerve.]
- Source: Standard facial plastics teaching on the temporal branch of the facial nerve.

**[facial-nerve-injury-timing-card]** tags: FP, clinical, milestones: PC9, PC1, UKMLA: Facial weakness, RED FLAG, reviewer: (none)
- Front: What distinguishes facial nerve injuries that need urgent exploration from those that can be observed?
- Back: Immediate, complete weakness after penetrating trauma lateral to the lateral canthus → urgent surgical exploration/repair (nerve stimulation works best within ~72h before Wallerian degeneration). Delayed or incomplete weakness is more often edema/neurapraxia → can typically be observed.
- Source: Standard facial trauma teaching on nerve injury timing.

**[stensens-duct-card]** tags: FP, anatomy, milestones: MK1, PC9, UKMLA: Facial weakness, reviewer: (none)
- Front: Where does Stensen's duct run, and what clinical clue suggests it's injured?
- Back: Along a line from the tragus to the midline of the upper lip, over masseter, piercing buccinator opposite the second upper molar. Clear, watery drainage from a cheek wound that increases with a sialogogue (e.g., food) suggests duct injury. Explore or cannulate before closing.
- Source: Standard facial trauma teaching on parotid duct injury.

**[orbital-blowout-card]** tags: FP, clinical, milestones: PC1, MK2, UKMLA: Facial/periorbital swelling, reviewer: (none)
- Front: What is an orbital blow-out fracture, and what classic exam findings does it cause?
- Back: Fracture of the thin orbital floor (or medial wall) from direct globe impact, with fat ± inferior rectus herniation/entrapment. Causes enophthalmos, diplopia on upgaze (restricted extraocular movement), and infraorbital nerve hypoesthesia (cheek/upper lip numbness). Repair timing: in adults, repair within ~2 weeks for persistent symptomatic diplopia with entrapment or a large floor defect (&ge;50% floor, or significant enophthalmos). In children, a white-eyed trapdoor with muscle entrapment or a nonresolving oculocardiac reflex is a surgical emergency (ideally within ~24-48 h) to prevent muscle ischemia/fibrosis.[figure: Coronal CT: the arrow marks the trapdoor fracture and herniated tissue into the maxillary sinus.]
- Source: Standard orbital trauma teaching on blow-out fractures.

**[white-eyed-blowout-card]** tags: FP, clinical, milestones: PC1, PC7, UKMLA: Facial/periorbital swelling, RED FLAG, reviewer: (none)
- Front: Why is a 'white-eyed' blow-out fracture in a child more dangerous than it looks?
- Back: Children's elastic bone can spring back after fracture, trapping the inferior rectus with minimal external bruising, unlike the obvious hematoma typical of adult blow-outs. Restricted upgaze plus nausea/vomiting (oculocardiac reflex) signals a surgical emergency needing prompt release to prevent muscle ischemia.
- Source: Standard pediatric orbital trauma teaching on white-eyed blow-out fractures.

**[orbital-compartment-syndrome-card]** tags: FP, clinical, milestones: PC1, UKMLA: Facial/periorbital swelling, RED FLAG, reviewer: (none)
- Front: What is orbital compartment syndrome, and what is the emergency treatment?
- Back: An expanding retrobulbar hematoma/hemorrhage causing rising intraorbital pressure: proptosis, decreasing vision, a tense orbit. A true emergency: emergent lateral canthotomy and cantholysis to decompress the orbit and preserve vision, performed at the bedside without waiting for imaging if vision is threatened.
- Source: Standard ophthalmic emergency teaching on orbital compartment syndrome.

**[csf-rhinorrhea-card]** tags: FP, clinical, milestones: PC1, MK2, UKMLA: Epistaxis, RED FLAG, reviewer: (none)
- Front: How is traumatic CSF rhinorrhea recognized, and what should be avoided in its initial management?
- Back: Clear fluid, a 'halo/ring' sign on gauze, and glucose-positive/beta-2-transferrin-positive fluid. Avoid nasal packing near a suspected skull-base defect. It risks introducing infection intracranially; most leaks are managed with head elevation and observation, escalating to surgical repair if persistent.
- Source: Standard skull-base trauma teaching on CSF leak recognition.

**[reconstructive-ladder-card]** tags: FP, clinical, milestones: PC9, MK2, UKMLA: Facial/periorbital swelling, reviewer: (none)
- Front: State the reconstructive ladder in order.
- Back: Secondary intention (small, low-tension wounds allowed to granulate/epithelialize) -> primary closure (clean, low-tension edges reapproximated directly) -> skin graft (split- or full-thickness; larger defects with a healthy, vascularized bed) -> local flap (adjacent tissue with matching color/texture, its own blood supply) -> regional flap (nearby tissue on a named pedicle, for larger/deeper defects) -> free tissue transfer (microvascular free flap; large or composite defects needing distant tissue with its own vascular anastomosis). Choose the simplest option achieving a good result, escalating only as the defect and tissue needs require.[figure: The reconstructive ladder from secondary intention to free tissue transfer.]
- Source: Standard reconstructive surgery teaching: the reconstructive ladder.

**[nasal-septal-hematoma-card]** tags: FP, clinical, milestones: PC1, UKMLA: Epistaxis, RED FLAG, reviewer: (none)
- Front: Why must a septal hematoma after nasal trauma be drained urgently?
- Back: An undrained septal hematoma can cause avascular necrosis of the septal cartilage (the cartilage depends on the perichondrium for its blood supply) within days, leading to a saddle-nose deformity. Prompt incision and drainage, with packing to prevent reaccumulation, prevents this.
- Source: Standard nasal trauma teaching on septal hematoma.

**[nasal-bone-fracture-card]** tags: FP, clinical, milestones: PC9, PC1, UKMLA: Epistaxis, reviewer: (none)
- Front: What is the general timing for closed reduction of a nasal bone fracture, and why does timing matter?
- Back: Typically within 5-10 days in adults (sooner in children, whose bones heal faster), before the fracture fragments begin to fixate or heal in a malaligned position, after which closed reduction becomes ineffective and open techniques may be needed. When the septum is involved, a 2025 systematic review/meta-analysis found early open septoplasty roughly halved persistent obstruction (~6% vs ~22%) and reduced 3-year revision rates (~6% vs ~31%) versus closed reduction alone: so consider early septal correction rather than closed reduction alone for nasoseptal fractures.
- Source: Standard nasal trauma teaching.

**[zygoma-fracture-card]** tags: FP, clinical, milestones: MK1, PC9, UKMLA: Facial/periorbital swelling, reviewer: (none)
- Front: What exam findings suggest a zygomaticomaxillary complex (ZMC) fracture?
- Back: Cheek flattening, trismus (from impingement on the temporalis/coronoid), infraorbital nerve hypoesthesia, and a palpable step-off at the infraorbital rim or zygomaticofrontal suture. The zygoma articulates at four points: zygomaticofrontal suture, zygomaticomaxillary suture/infraorbital rim, zygomaticotemporal suture (arch), and zygomaticosphenoid suture (lateral orbital wall): so a true fracture usually disrupts more than one.
- Source: Standard facial trauma teaching on zygomaticomaxillary complex fractures.

**[mandible-fracture-airway-card]** tags: FP, clinical, milestones: PC1, UKMLA: Facial/periorbital swelling, RED FLAG, reviewer: (none)
- Front: Why can bilateral mandible fractures threaten the airway?
- Back: Bilateral (especially bilateral parasymphyseal/body) fractures let the anterior mandibular segment and tongue fall posteriorly, obstructing the airway, particularly when supine. This is assessed and managed within the ATLS primary survey, not after.
- Source: Standard facial trauma teaching on mandible fractures and airway risk.

**[animal-bite-face-card]** tags: FP, clinical, milestones: PC9, SBP1, UKMLA: Facial/periorbital swelling, reviewer: (none)
- Front: Unlike animal bites elsewhere on the body, which are often left open, facial animal bites are generally [...], given the face's excellent blood supply and the cosmetic and functional stakes.
- Back: Unlike animal bites elsewhere on the body, which are often left open, facial animal bites are generally closed primarily, given the face's excellent blood supply and the cosmetic and functional stakes.
- Source: Standard facial wound management teaching on bite wounds.

**[facial-bite-card]** tags: FP, clinical, milestones: PC9, SBP1, UKMLA: Facial/periorbital swelling, reviewer: (none)
- Front: First-line antibiotic prophylaxis for a facial bite wound, and why are facial bites closed differently from bites elsewhere?
- Back: Amoxicillin-clavulanate (covers Pasteurella, Eikenella, Capnocytophaga, oral anaerobes). Unlike bites elsewhere, well-irrigated facial bite wounds are usually closed primarily because of the face's vascularity and cosmetic stakes. Address rabies and tetanus.
- Source: Ortiz & Lezcano, Am Fam Physician, 2023; Maurer et al., J Clin Med, 2023.

**[scar-revision-timing-card]** tags: FP, clinical, milestones: PC9, UKMLA: Facial/periorbital swelling, reviewer: (none)
- Front: Why is elective scar revision typically delayed after facial trauma?
- Back: Scars continue to remodel for up to about 12-18 months; many immature, red, or slightly irregular scars improve substantially on their own. Elective revision is generally deferred until scar maturation, except when function (e.g., eyelid ectropion, oral commissure) is affected sooner.
- Source: Standard facial plastics teaching on scar maturation.

**[auricular-hematoma-card]** tags: FP, clinical, milestones: PC1, UKMLA: Painful ear, RED FLAG, reviewer: (none)
- Front: Why does an auricular (pinna) hematoma need prompt drainage?
- Back: The auricular cartilage has no direct blood supply of its own and relies on the overlying perichondrium; a hematoma separates the two, causing cartilage necrosis and fibrosis, the 'cauliflower ear' deformity, if not promptly drained with a pressure dressing/bolster to prevent reaccumulation.
- Source: Standard auricular trauma teaching on cauliflower ear prevention.

**[mandible-fracture-sites-card]** tags: FP, anatomy, milestones: MK1, PC2, UKMLA: Facial/periorbital swelling, reviewer: (none)
- Front: Because the mandible is a ring of bone, a strong enough force often fractures it in [...], for example a symphyseal fracture with a contralateral condyle fracture.
- Back: Because the mandible is a ring of bone, a strong enough force often fractures it in two places at once, for example a symphyseal fracture with a contralateral condyle fracture. This is why the whole mandible should be imaged after finding one fracture.[figure: The mandible as a ring of bone that often fractures in two places at once.]
- Source: Standard oral-maxillofacial trauma teaching (AO/ATLS facial trauma principles) on mandible fracture sites.

**[mandible-antibiotics-card]** tags: FP, clinical, milestones: PC9, SBP1, UKMLA: Facial/periorbital swelling, reviewer: (none)
- Front: Which mandible fractures need antibiotic prophylaxis, and for how long after repair?
- Back: Fractures through the dentate segment (angle, body, parasymphysis, symphysis) are open to the mouth and contaminated: give perioperative antibiotics, continued &le;24 h after repair (no benefit beyond). Non-dentate condylar/ramus fractures generally don't require it.
- Source: Coccolini et al., Global Alliance guideline, J Trauma Acute Care Surg, 2024; Appelbaum et al., AAST consensus, Trauma Surg Acute Care Open, 2023.

**[guardsman-fracture-card]** tags: FP, clinical, milestones: PC2, PC1, UKMLA: Facial/periorbital swelling, RED FLAG, reviewer: (none)
- Front: What is a 'guardsman fracture,' and what mechanism produces it?
- Back: A bilateral mandibular condyle fracture, often paired with a symphyseal/parasymphyseal fracture, classically from a chin-first fall: force transmitted through the point of direct impact fractures the ring of bone again at its weakest points, the condyles.
- Source: Standard facial trauma teaching on bilateral condylar ('guardsman') fracture patterns.

**[mandible-malocclusion-numbchin-card]** tags: FP, clinical, milestones: PC2, MK1, UKMLA: Facial/periorbital swelling, reviewer: (none)
- Front: Hypoesthesia of the lip and chin after a mandible fracture, from injury to the inferior alveolar/mental nerve as it runs through the mandibular body, is called the [...].
- Back: Hypoesthesia of the lip and chin after a mandible fracture, from injury to the inferior alveolar/mental nerve as it runs through the mandibular body, is called the numb chin sign.
- Source: Standard facial trauma teaching on the mandible fracture exam.

**[noe-fracture-card]** tags: FP, anatomy, milestones: PC2, MK1, UKMLA: Facial/periorbital swelling, RED FLAG, reviewer: (none)
- Front: Medial canthal tendon disruption after a naso-orbito-ethmoid (NOE) fracture is assessed with the [...], pulling the lower eyelid laterally while palpating the medial canthus for independent soft-tissue movement from bone.
- Back: Medial canthal tendon disruption after a naso-orbito-ethmoid (NOE) fracture is assessed with the bowstring (traction) test, pulling the lower eyelid laterally while palpating the medial canthus for independent soft-tissue movement from bone. Disruption causes traumatic telecanthus and a flattened nasal bridge.
- Source: Standard craniomaxillofacial trauma teaching on naso-orbito-ethmoid (NOE) fracture.

**[nasolacrimal-duct-injury-card]** tags: FP, anatomy, milestones: MK1, PC2, UKMLA: Facial/periorbital swelling, reviewer: (none)
- Front: Why can an NOE fracture cause post-traumatic epiphora (excess tearing)?
- Back: The nasolacrimal duct runs through the same naso-orbito-ethmoid region as the medial canthal tendon and can be injured concurrently. Unaddressed duct injury causes chronic epiphora; recognizing the risk at the time of NOE fracture repair (± duct probing/intubation) prevents a delayed, harder-to-fix problem.
- Source: Standard craniomaxillofacial trauma teaching on nasolacrimal duct injury in NOE fracture.

**[frontal-sinus-fracture-card]** tags: FP, clinical, milestones: PC2, MK2, UKMLA: Epistaxis, RED FLAG, reviewer: (none)
- Front: In a frontal sinus fracture, [...] involvement carries a real risk of dural tear, CSF leak, and pneumocephalus, because it is the only barrier between the sinus and the anterior cranial fossa.
- Back: In a frontal sinus fracture, posterior table involvement carries a real risk of dural tear, CSF leak, and pneumocephalus, because it is the only barrier between the sinus and the anterior cranial fossa. An isolated anterior-table fracture is mainly a cosmetic concern.
- Source: Standard craniomaxillofacial trauma teaching on frontal sinus fracture management.

**[house-brackmann-card]** tags: FP, clinical, milestones: PC8, MK1, UKMLA: Facial weakness, reviewer: (none)
- Front: Facial nerve function after trauma is graded on the [...], ranging from grade I (normal) to grade VI (total paralysis).
- Back: Facial nerve function after trauma is graded on the House-Brackmann scale, ranging from grade I (normal) to grade VI (total paralysis). A worsening grade on serial exam prompts reconsidering surgical exploration.
- Source: House-Brackmann facial nerve grading system (House & Brackmann, 1985).

**[facial-nerve-electrodiagnostics-card]** tags: FP, clinical, milestones: PC8, PC2, UKMLA: Facial weakness, reviewer: (none)
- Front: On electroneuronography (ENoG), a compound muscle action potential amplitude drop of more than [...] compared to the normal side generally favors surgical exploration or decompression.
- Back: On electroneuronography (ENoG), a compound muscle action potential amplitude drop of more than 90% compared to the normal side generally favors surgical exploration or decompression. A nerve stimulator on distal branches can still evoke a response for about 72 hours after injury even if the nerve is transected. Note that the >90% ENoG threshold is decision-support, not an automatic trigger: prospective data show near-universal recovery to House-Brackmann I-II with steroids alone in complete post-traumatic palsy from undisplaced temporal bone fractures, even at <5% ENoG response. The threshold is most useful in displaced or suspected transecting injuries.
- Source: Standard facial nerve injury workup teaching on nerve stimulation and electroneuronography (ENoG).

**[local-flaps-facial-card]** tags: FP, clinical, milestones: PC8, MK1, UKMLA: Facial/periorbital swelling, reviewer: (none)
- Front: The classic local flap for a larger nasal-tip or dorsum defect is the [...], based on the supratrochlear vessels.
- Back: The classic local flap for a larger nasal-tip or dorsum defect is the paramedian forehead flap, based on the supratrochlear vessels. Cheek defects are typically closed instead with adjacent advancement or rotation flaps.
- Source: Standard facial plastic & reconstructive surgery teaching on local flaps and the aesthetic subunit principle.

---

## Module: Curriculum framework registry (`frameworks`)

Source: ACGME Otolaryngology-Head and Neck Surgery Milestones 2.0 (2021). Scope per UK undergraduate Delphi (Lloyd/Constable); sequencing per AAO-HNS Otolaryngology Core Curriculum.

### Competencies
- PC: Patient Care
- MK: Medical Knowledge
- ICS: Interpersonal & Communication Skills
- Prof: Professionalism
- PBLI: Practice-Based Learning & Improvement
- SBP: Systems-Based Practice

### Milestone subcompetencies (referenced by cards' `milestones` field)
- PC1: Airway Emergency & Management
- PC2: Facial Trauma
- PC3: Head & Neck Neoplasm
- PC4: Otologic Disease
- PC5: Rhinologic Disease
- PC6: Laryngologic Disease
- PC7: Pediatric Otolaryngology
- PC8: Facial Plastic & Reconstructive Surgery
- PC9: Sleep
- MK1: Anatomy
- MK2: Allergy
- MK3: Pathophysiology
- SBP1: Patient Safety & Quality Improvement
- SBP2: System Navigation for Patient-Centered Care
- SBP3: Physician Role in Health Care Systems
- PBLI1: Evidence-Based & Informed Practice
- PBLI2: Reflective Practice & Personal Growth
- Prof1: Professional Behavior & Ethical Principles
- Prof2: Accountability / Conscientiousness
- Prof3: Well-Being (Systemic & Individual Factors)
- ICS1: Patient- & Family-Centered Communication
- ICS2: Interprofessional & Team Communication
- ICS3: Communication within Health Care Systems

---

## Module: Glossary (inline term popovers) (`glossary`)

265 terms.

**Otoscopy**
- Definition: Examination of the ear canal and tympanic membrane using an otoscope. The pinna is pulled up-and-back in adults and down-and-back in young children to straighten the cartilaginous canal; systematically note TM color, translucency, contour, and mobility. Pneumatic otoscopy is the most useful bedside test for a middle-ear effusion.
- More: use the largest speculum the canal will accept and a tight air seal: a normal drum moves briskly to insufflation, while sluggish or absent movement is the most reliable sign of effusion.

**Tympanic membrane (TM)** (also matches: Tympanic membrane)
- Definition: The eardrum; a three-layered membrane separating the external canal from the middle ear, divided into the taut pars tensa and lax pars flaccida.
- More: its outer squamous layer undergoes centrifugal epithelial migration, laterally and outward from the umbo, clearing keratin debris; failure of this migration underlies retraction-pocket cholesteatoma.

**Cone of light**
- Definition: The triangular reflection of otoscope light off the antero-inferior TM; loss or fragmentation is an early clue to effusion or retraction.
- More: it is a nonspecific finding: a normal drum can lose the reflex with speculum angle alone, so never diagnose pathology on the cone of light in isolation.

**Umbo**
- Definition: The central, most depressed point of the TM, marking the tip of the malleus handle (manubrium).
- More: it is the point of maximal TM displacement during sound transmission and the fulcrum of the ossicular lever.

**Pars tensa**
- Definition: The larger, taut lower portion of the TM, stiffened by the fibrous middle layer (annulus); the main sound-conducting region and site of most simple perforations.
- More: central (pars tensa) perforations sparing the annulus are "safe," whereas marginal perforations reaching the annulus carry cholesteatoma risk.

**Pars flaccida**
- Definition: The smaller, lax upper portion lacking the fibrous middle layer; prone to inward retraction and the classic site of attic cholesteatoma.
- More: it is easily hidden by the superior canal wall: failure to examine the attic is a classic reason early cholesteatoma is missed.

**Weber test**
- Definition: 512 Hz fork on the vertex; lateralizes to the affected ear in conductive loss and to the better ear in sensorineural loss.
- More: a conductive gap of roughly ≥10 dB is generally needed before lateralization becomes reliable.

**Rinne test**
- Definition: Compares air conduction with bone conduction; AC > BC (positive) is normal/sensorineural, BC > AC (negative) indicates conductive loss.
- More: a severe unilateral SNHL can give a false-negative Rinne when the fork is heard by the opposite cochlea via bone (the "false negative" of profound SNHL): always pair with Weber.

**Air-bone gap**
- Definition: The difference between air- and bone-conduction thresholds; localizes loss to a conductive component.
- More: a gap >30–40 dB with an intact drum suggests ossicular discontinuity, whereas otosclerosis typically produces a smaller gap that is largest at low frequencies.

**Audiogram**
- Definition: Graph of hearing thresholds (dB) across frequencies (Hz).
- More: normal is ≤25 dB HL; mild 26–40, moderate 41–55, moderately severe 56–70, severe 71–90, and profound >90 dB HL.

**Tympanometry**
- Definition: Objective measure of TM mobility and middle-ear pressure; Type A normal, Type B flat, Type C negative pressure.
- More: Type C reflects middle-ear pressure more negative than about −150 to −200 daPa; a Type B with normal canal volume implies effusion, while a Type B with high volume implies perforation or a patent tube.

**Conductive hearing loss**
- Definition: Impaired transmission through external/middle ear (cerumen, effusion, perforation, otosclerosis, ossicular problems).
- More: the middle ear normally provides ~30 dB of impedance matching via the TM-to-oval-window area ratio and ossicular lever, so its loss defines the maximum conductive gap.

**Sensorineural hearing loss (SNHL)** (also matches: Sensorineural hearing loss, SNHL)
- Definition: Cochlear hair-cell or auditory-nerve dysfunction; generally permanent.
- More: an interaural asymmetry of ≥15 dB at 3 kHz (or ≥15% word-recognition difference) should prompt MRI to exclude a retrocochlear lesion.

**Referred otalgia**
- Definition: Ear pain with a normal ear exam, transmitted via CN V, VII, IX, X, and C2–C3.
- More: in an adult smoker/drinker with normal otoscopy, referred otalgia mandates full mucosal exam and flexible laryngoscopy: a normal ear does not exclude an aerodigestive malignancy.

**Flexible nasolaryngoscopy**
- Definition: Transnasal fiberoptic exam of the nasal cavity, nasopharynx, pharynx, and larynx in the awake patient.
- More: it is the standard first study for any hoarseness persisting beyond 3–4 weeks to directly visualize vocal-fold mobility and lesions.

**Anterior rhinoscopy**
- Definition: Speculum-and-light inspection of the anterior septum, turbinates, and mucosa.
- More: it visualizes only the anterior third of the nasal cavity: posterior masses, choanal lesions, and the OMC require endoscopy, so a normal rhinoscopy does not exclude posterior pathology.

**Cricothyroid membrane**
- Definition: The membrane between thyroid and cricoid cartilages; the access point for emergency surgical airway.
- More: it lies roughly 1–1.5 cm below the thyroid notch and is ~10 mm tall: incise vertically through skin, then horizontally through the membrane to avoid the cricothyroid vessels superiorly.

**HINTS exam**
- Definition: Head-Impulse, Nystagmus, Test of Skew battery for acute continuous vertigo.
- More: it is valid only in acute vestibular syndrome with ongoing nystagmus: applying it to episodic or resolved vertigo is a misuse, and a "normal" head impulse in a patient with acute vertigo is worrisome for stroke.

**SBAR**
- Definition: Situation, Background, Assessment, Recommendation handoff format.
- More: airway or hemodynamic instability is stated in the first sentence so the receiver can act before the full narrative.

**SPIKES**
- Definition: Six-step bad-news protocol: Setting, Perception, Invitation, Knowledge, Emotions, Strategy.
- More: the "warning shot" precedes disclosure and empathic acknowledgment of emotion precedes any discussion of the plan.

**External auditory canal (EAC)** (also matches: External auditory canal, EAC)
- Definition: Outer third cartilaginous (cerumen, hair), inner two-thirds bony and thin-skinned.
- More: the adult canal is ~2.5 cm long with an S-shaped course; the fissures of Santorini at the cartilage-bone junction are the route by which necrotizing otitis externa breaches to the skull base.

**Ossicles**
- Definition: Malleus, incus, stapes lever chain matching air-to-fluid impedance.
- More: the ossicular lever plus the TM-to-footplate area ratio (~17–20:1) together provide ~25–30 dB of gain; the long process of the incus is the most vascularly vulnerable and first to erode.

**Tensor tympani**
- Definition: Small middle-ear muscle running from the cartilaginous Eustachian tube to the malleus neck; innervated by CN V3 (mandibular branch of the trigeminal nerve).
- More: it co-contracts with the stapedius in the acoustic (stapedial) reflex, stiffening the ossicular chain to dampen transmission of loud sound: its tendon is also a landmark during middle-ear and cochlear-implant surgery.

**Stapedius**
- Definition: Smallest skeletal muscle in the body, running from the pyramidal eminence to the stapes neck; innervated by CN VII (facial nerve).
- More: its reflex contraction to loud sound stiffens the stapes and is the basis of stapedial (acoustic) reflex testing: an absent reflex with an intact-appearing TM can point to a CN VII lesion or otosclerosis fixing the stapes.

**Eustachian tube**
- Definition: Connects middle ear to nasopharynx, equalizing pressure and draining secretions.
- More: it opens actively via tensor veli palatini on swallowing/yawning; the child's shorter, more horizontal tube explains the peak AOM incidence at 6–18 months.

**Cochlea**
- Definition: Spiral organ of hearing; organ of Corti transduces along a tonotopic map.
- More: it makes ~2.5–2.75 turns, with high frequencies at the base and low at the apex: the basis for frequency-specific cochlear implant electrode mapping.

**Vestibule and semicircular canals** (also matches: Semicircular canals)
- Definition: Otolith organs sense linear acceleration; three canals sense angular rotation.
- More: the canals are paired in push-pull coplanar sets, so a head turn excites one side and inhibits the other: the substrate for the vestibulo-ocular reflex tested by head impulse.

**Chorda tympani**
- Definition: CN VII branch carrying anterior two-thirds tongue taste and submandibular/sublingual secretomotor fibers.
- More: it crosses the middle ear without bony cover, so it is readily stretched or divided in tympanoplasty: warn patients of transient metallic taste.

**Cerumen impaction**
- Definition: Symptomatic or view-obstructing wax, not merely visible wax.
- More: irrigation is contraindicated with a non-intact or uncertain TM, prior ear surgery, or diabetes: use cerumenolytics or manual removal instead.

**Otitis externa**
- Definition: Diffuse canal infection ("swimmer's ear"), classically Pseudomonas or Staph.
- More: topical drops achieve canal concentrations far exceeding MIC, so first-line therapy is topical (± wick), not oral antibiotics, in the uncomplicated case.

**Acute otitis media (AOM)** (also matches: Acute otitis media, AOM)
- Definition: Symptomatic middle-ear infection with a bulging, poorly mobile TM and effusion.
- More: bulging of the TM is the key diagnostic sign: bacteria are recoverable from ~80% of bulging drums, whereas redness without bulging warrants AOM diagnosis in only ~25% of cases.

**Otitis media with effusion (OME)** (also matches: Otitis media with effusion, OME)
- Definition: Middle-ear fluid behind an intact TM without acute infection.
- More: effusion persisting ≥3 months is chronic OME and warrants audiometry and consideration of tympanostomy tubes, particularly with hearing loss or speech delay.

**Cholesteatoma**
- Definition: Expanding keratinizing squamous sac that erodes bone via osteolytic enzymes.
- More: painless, foul otorrhea unresponsive to drops with an attic crust is cholesteatoma until proven otherwise; definitive treatment is surgical, and topical drops alone delay diagnosis and treatment.

**Prussak's space**
- Definition: Epitympanic recess bounded by pars flaccida laterally and malleus neck medially.
- More: it is the earliest site of attic cholesteatoma and drains poorly, explaining why disease accumulates here before becoming otoscopically obvious.

**Necrotizing (malignant) otitis externa** (also matches: Malignant otitis externa)
- Definition: Skull-base osteomyelitis, almost always Pseudomonas, in diabetics/immunocompromised.
- More: pain out of proportion plus granulation at the bony-cartilaginous junction is the hallmark; CN VII palsy is the first cranial neuropathy, and treatment is weeks of IV antipseudomonal therapy: not topical drops.

**Otosclerosis**
- Definition: Bony remodeling fixing the stapes footplate, causing progressive conductive loss.
- More: autosomal dominant with ~40% penetrance, typically presenting in the 20s–40s, often bilateral, and accelerated by pregnancy.

**Carhart notch**
- Definition: Artifactual bone-conduction dip at ~2000 Hz in otosclerosis.
- More: it reflects loss of the ossicular resonance contribution to bone conduction and reverses after successful stapedectomy.

**Ossicular discontinuity**
- Definition: Break in the chain (usually incudostapedial joint) from trauma/infection/cholesteatoma.
- More: produces a large conductive gap (often >30–40 dB) with a hypermobile Type Ad tympanogram: the mechanical opposite of the stiff As pattern of otosclerosis.

**BPPV**
- Definition: Brief positional vertigo from otoconia in a semicircular canal (usually posterior).
- More: posterior-canal BPPV accounts for ~80–90% of cases; vertigo lasts seconds with a characteristic latency and fatigability, and hearing is normal.

**Dix-Hallpike maneuver**
- Definition: Provocative test hanging the head with the affected ear down.
- More: it elicits an upbeat-torsional nystagmus with a 1–5 second latency that fatigues: an immediate, non-fatiguing, or direction-changing nystagmus suggests a central cause.

**Epley maneuver**
- Definition: Repositioning sequence returning otoconia from the posterior canal to the utricle.
- More: a single maneuver resolves BPPV in roughly 80% of patients, with repeat treatment for persistent cases.

**Vestibular neuritis**
- Definition: Acute constant vertigo lasting days from vestibular nerve inflammation.
- More: HINTS is reassuring-peripheral and hearing is normal: any new hearing loss reclassifies it as labyrinthitis and any central HINTS sign mandates stroke workup.

**Ménière's disease**
- Definition: Endolymphatic hydrops causing episodic vertigo with fluctuating low-mid SNHL, tinnitus, fullness.
- More: diagnosis requires ≥2 spontaneous vertigo episodes lasting 20 minutes to 12 hours with audiometrically documented low-to-mid SNHL in the affected ear.

**Labyrinthine fistula**
- Definition: Abnormal opening into the inner ear, classically lateral semicircular canal eroded by cholesteatoma.
- More: a positive fistula test (pressure-induced vertigo/nystagmus on tragal pressure) localizes the erosion and predicts intraoperative findings.

**Vestibular schwannoma (acoustic neuroma)** (also matches: Vestibular schwannoma, acoustic neuroma)
- Definition: Benign vestibular-nerve Schwann-cell tumor in the IAC.
- More: it presents with asymmetric SNHL and unilateral tinnitus rather than true vertigo, and sudden SNHL can be its first sign: MRI of the IACs with contrast is the diagnostic test.

**Mastoidectomy**
- Definition: Removal of mastoid air cells and disease.
- More: canal-wall-up preserves anatomy but carries higher recurrence and usually a planned second-look at ~9–12 months, whereas canal-wall-down lowers recurrence at the cost of a lifelong cavity requiring cleaning.

**Tympanoplasty**
- Definition: TM repair (± ossicular reconstruction), grafted with fascia or cartilage-perichondrium.
- More: graft take rates are ~85–90%; cartilage grafting is favored for large/revision perforations or Eustachian tube dysfunction because of its resistance to reperforation.

**Facial recess**
- Definition: Window bounded by the facial nerve medially, chorda tympani laterally, incus buttress superiorly.
- More: opening it (posterior tympanotomy) gives mastoid access to the round window for cochlear implant electrode insertion while keeping the nerve under direct view.

**Stylomastoid foramen**
- Definition: Opening at the skull base, between the styloid and mastoid processes, where the facial nerve (CN VII) exits the temporal bone to enter the parotid region.
- More: it is the classic landmark for identifying and preserving the main trunk of the facial nerve during parotidectomy and mastoid surgery.

**Cochlear implant**
- Definition: Bypasses hair cells to stimulate the auditory nerve directly.
- More: candidacy is severe-to-profound SNHL with limited aided benefit, conventionally aided sentence-recognition scores at or below ~50–60% in the ear to be implanted.

**Turbinates** (also matches: Concha, Conchae)
- Definition: Three paired projections (inferior, middle, superior) that warm, humidify, and direct airflow.
- More: the inferior turbinate is the primary regulator of nasal resistance via venous sinusoid engorgement, cycling side-to-side every few hours (the nasal cycle): the reason unilateral congestion often alternates.

**Ostiomeatal complex (OMC)** (also matches: Ostiomeatal complex, OMC)
- Definition: Common drainage funnel in the middle meatus for frontal, anterior ethmoid, and maxillary sinuses.
- More: because all three share this channel, a single point of OMC obstruction can cause disease in three sinuses at once: the central rationale for FESS.

**Uncinate process**
- Definition: Sickle-shaped bony flap forming the ethmoid infundibulum with the bulla.
- More: its free edge lies just anterior to the lamina papyracea, so uncinectomy carried too laterally is a classic route to orbital entry.

**Lamina papyracea**
- Definition: Paper-thin medial orbital wall between ethmoid sinus and orbit.
- More: a breach with orbital fat prolapse plus periorbital ecchymosis intraoperatively signals penetration: never grasp herniated fat (risk of medial rectus avulsion and diplopia).

**Sphenoethmoidal recess**
- Definition: Drainage site of the sphenoid sinus, medial to the superior turbinate.
- More: the natural sphenoid ostium sits ~7 cm from the nasal sill at ~30° from the floor, medial to the superior turbinate: the landmark for safe sphenoidotomy.

**Kiesselbach's plexus (Little's area)** (also matches: Kiesselbach's plexus, Little's area)
- Definition: Anterior septal anastomosis of four arteries.
- More: it is the source of >90% of epistaxis and the target of first-line anterior pressure/cautery.

**Sphenopalatine artery**
- Definition: Terminal maxillary artery branch supplying the posterior nasal cavity.
- More: it is the source of most posterior epistaxis and the target of endoscopic ligation when packing fails: it exits the sphenopalatine foramen at the posterior attachment of the middle turbinate.

**Keros classification**
- Definition: Grades olfactory-fossa depth (I–III) by lateral lamella length.
- More: Keros III (lateral lamella 7–16 mm) carries the highest risk of cribriform/skull-base injury and CSF leak: flagged preoperatively on coronal CT.

**Concha bullosa**
- Definition: Pneumatized middle turbinate.
- More: usually incidental, but a large one narrows the OMC and can be mistaken for a polyp: resect the lateral lamella while preserving the medial to keep the turbinate as a landmark.

**Haller cells**
- Definition: Infraorbital ethmoid cells along the orbital floor near the maxillary ostium.
- More: they narrow the maxillary infundibulum and bring the orbital floor into the surgical field, contributing to recurrent maxillary disease.

**Onodi cells**
- Definition: Most posterior ethmoid cells pneumatizing superolateral to the sphenoid.
- More: the optic nerve and carotid may be dehiscent within an Onodi cell: mistaking it for the sphenoid on CT is a classic setup for optic nerve injury.

**Orbit**
- Definition: The bony eye socket, formed by seven bones and separated from the ethmoid and maxillary sinuses by paper-thin walls (the lamina papyracea medially, the orbital floor inferiorly).
- More: its thin sinus-facing walls are the route by which sinus infection or surgical instrumentation can breach into orbital fat, causing preseptal or postseptal cellulitis, or orbital compartment syndrome.

**Optic nerve**
- Definition: CN II; carries visual information from the retina to the brain, running along the superolateral wall of the sphenoid sinus (sometimes within a dehiscent Onodi cell) before entering the optic canal.
- More: its close, sometimes bony-deficient relationship to the sphenoid and posterior ethmoid sinuses makes it vulnerable during posterior sinus and skull-base surgery: injury causes sudden, often irreversible vision loss.

**Carotid artery** (also matches: Internal carotid artery)
- Definition: Major artery supplying the brain and orbit; its petrous and cavernous segments run immediately lateral to the sphenoid sinus, sometimes with a dehiscent bony covering.
- More: a dehiscent or medially bulging carotid within the sphenoid sinus is a critical finding on preoperative CT: inadvertent injury during sphenoid or skull-base surgery causes catastrophic hemorrhage.

**Cavernous sinus**
- Definition: Paired venous channel lateral to the sphenoid sinus and pituitary, through which the internal carotid artery and cranial nerves III, IV, V1, V2, and VI travel.
- More: its intimate relationship to the sphenoid sinus means posterior sinus infection or tumor can spread here, producing cavernous sinus thrombosis with ophthalmoplegia, proptosis, and cranial neuropathies.

**Pituitary gland** (also matches: Pituitary)
- Definition: Endocrine gland seated in the sella turcica directly above the sphenoid sinus roof, accessed surgically via the transsphenoidal approach.
- More: the sphenoid sinus's direct relationship to the sella is what makes endoscopic transsphenoidal surgery the standard route to pituitary tumors, avoiding a craniotomy.

**FESS (functional endoscopic sinus surgery)** (also matches: functional endoscopic sinus surgery, FESS)
- Definition: Endoscopic reopening of natural drainage pathways.
- More: indicated for CRS refractory to an adequate trial of medical therapy (typically ≥ several weeks of intranasal steroids ± saline, and appropriate courses for the phenotype), and for polyps, mucoceles, or fungal disease.

**Chronic rhinosinusitis (CRS)** (also matches: Chronic rhinosinusitis, CRS)
- Definition: ≥12 weeks of ≥2 cardinal symptoms with objective confirmation.
- More: symptoms alone are insufficient beyond 12 weeks: diagnosis requires objective evidence of inflammation on endoscopy or CT.

**CRSsNP / CRSwNP**
- Definition: Without vs with nasal polyps.
- More: polyps are present in ~20% of CRS patients; CRSwNP is typically type-2/eosinophil-driven and more recurrent, steered toward steroids then biologics or FESS when refractory.

**Nasal polyps**
- Definition: Benign edematous type-2 mucosal outgrowths.
- More: FDA-approved biologics for CRSwNP include dupilumab, omalizumab, and mepolizumab, reserved for disease inadequately controlled by intranasal steroids ± surgery.

**AERD (Samter's triad)** (also matches: Samter's triad, AERD)
- Definition: CRSwNP + asthma + NSAID/aspirin sensitivity.
- More: driven by COX-1 inhibition shunting arachidonic acid toward cysteinyl leukotrienes: the basis for both NSAID avoidance and supervised aspirin desensitization in refractory cases.

**Allergic rhinitis**
- Definition: IgE-mediated nasal inflammation with itch, sneezing, watery rhinorrhea, congestion.
- More: for persistent moderate-to-severe disease, regularly dosed intranasal corticosteroids are first-line, outperforming oral antihistamines for congestion.

**ARIA classification**
- Definition: Grades by duration (intermittent vs persistent) and severity (mild vs moderate-severe).
- More: persistent = symptoms >4 days/week and >4 consecutive weeks; this axis, not the old seasonal/perennial split, drives step-up therapy.

**Rhinitis medicamentosa**
- Definition: Rebound congestion from topical decongestant overuse.
- More: risk rises sharply beyond ~3–5 days of oxymetazoline; treat by stopping the spray and bridging with an intranasal steroid.

**Vasomotor (non-allergic) rhinitis**
- Definition: Irritant/temperature-triggered congestion and rhinorrhea without itch/sneeze/conjunctivitis.
- More: allergy testing is negative; first-line is intranasal antihistamine or ipratropium rather than oral antihistamines, which are largely ineffective here.

**Beta-2 transferrin** (also matches: Beta 2 transferrin, β2-transferrin)
- Definition: Protein nearly unique to CSF (and perilymph); confirmatory test for CSF rhinorrhea.
- More: a positive result mandates leak localization (high-resolution CT ± MR cisternography) and precludes reflexive nasal packing, which can drive an ascending meningitis.

**Juvenile nasopharyngeal angiofibroma (JNA)** (also matches: Juvenile nasopharyngeal angiofibroma, JNA)
- Definition: Benign but highly vascular nasopharyngeal tumor of adolescent males.
- More: clinic biopsy is contraindicated because of hemorrhage risk: diagnose by contrast imaging then angiography ± preoperative embolization before excision.

**Inverted papilloma**
- Definition: Locally aggressive unilateral sinonasal tumor.
- More: carries a ~5–10% risk of harboring or progressing to squamous cell carcinoma, so it requires complete excision with margin control (often endoscopic medial maxillectomy), not simple polypectomy.

**Esthesioneuroblastoma**
- Definition: Malignant olfactory-neuroepithelium tumor high in the olfactory groove.
- More: it straddles the cribriform plate, so staging (Kadish/Dulguerov) and treatment hinge on skull-base and intracranial extension: typically craniofacial/endoscopic resection plus radiation.

**Hereditary hemorrhagic telangiectasia (HHT / Osler-Weber-Rendu)** (also matches: Hereditary hemorrhagic telangiectasia, Osler-Weber-Rendu, HHT)
- Definition: Autosomal-dominant vascular disorder with recurrent epistaxis, telangiectasias, visceral AVMs.
- More: diagnosed by the Curaçao criteria (epistaxis, telangiectasias, visceral AVMs, affected first-degree relative: 3 of 4 = definite); screen for pulmonary and cerebral AVMs given stroke/abscess risk.

**Cervical nodal levels (I–VII)** (also matches: Cervical nodal levels, I–VII)
- Definition: Robbins map of neck node regions with defined boundaries and drainage.
- More: levels II–IV follow the internal jugular chain and are the first-echelon basins for most mucosal head-and-neck primaries, guiding selective dissection design.

**Level VII**
- Definition: Superior mediastinal nodes below the sternal notch.
- More: chiefly relevant to thyroid and cervical-esophageal cancer staging, where paratracheal (level VI) and level VII spread predict recurrent laryngeal nerve proximity and mediastinal extension.

**Parotid gland** (also matches: Parotid)
- Definition: Largest salivary gland, draining via Stensen's duct, split by the facial nerve.
- More: ~85% of salivary tumors arise here and ~80% of parotid tumors are benign: documenting facial-nerve function before and after any parotid surgery is essential.

**Stensen's duct**
- Definition: Parotid duct over the masseter, opening opposite the upper second molar.
- More: a cheek laceration along the tragus-to-midphiltrum line risks duct and facial-nerve buccal branch injury together: probe and repair the duct over a stent.

**Wharton's duct**
- Definition: Submandibular duct opening at the sublingual caruncle.
- More: its uphill course against gravity plus thicker mucinous saliva explains why ~80–90% of salivary stones form here.

**Sialolithiasis**
- Definition: Duct calculi causing painful, meal-related gland swelling.
- More: stimulated saliva backs up against the obstruction: the reason swelling peaks at mealtimes and settles between meals; most common in the submandibular gland via Wharton's duct.

**Fine-needle aspiration (FNA)** (also matches: Fine-needle aspiration, FNA)
- Definition: First-line tissue sampling for a neck mass.
- More: strongly preferred over open excisional biopsy, which can seed tumor and compromise later neck dissection: image-guided FNA/core improves yield for cystic nodes.

**p16 immunohistochemistry** (also matches: p16)
- Definition: Surrogate marker for HPV-driven oropharyngeal SCC.
- More: positivity is scored when ≥70% of tumor cells show strong nuclear and cytoplasmic staining, and it triggers a distinct, more favorable AJCC staging system.

**Epstein-Barr virus (EBV)** (also matches: Epstein-Barr virus, EBV)
- Definition: Herpesvirus linked to nasopharyngeal carcinoma and certain lymphomas.
- More: EBV-encoded RNA (EBER) in situ hybridization on a neck-node biopsy is the diagnostic clue that points back to an occult nasopharyngeal primary.

**Panendoscopy**
- Definition: Operative endoscopic survey of the upper aerodigestive tract (nasopharynx, oropharynx, larynx, hypopharynx, esophagus, ± bronchoscopy) under anesthesia.
- More: used to stage a known head & neck cancer, biopsy it, and screen for a synchronous second primary -- field cancerization means tobacco/alcohol-driven cancers cluster.

**Oropharynx**
- Definition: The pharynx from the soft palate to the hyoid, including the tonsils, tongue base, and posterior pharyngeal wall.
- More: it is separated from the oral cavity by the plane through the hard-soft palate junction and circumvallate papillae -- the anatomic line that splits classically tobacco-driven oral cavity cancer from increasingly HPV-driven oropharyngeal cancer.

**Oral cavity**
- Definition: The mouth from the lips to the hard-soft palate junction and circumvallate papillae, including the tongue's anterior two-thirds, floor of mouth, buccal mucosa, and gingiva.
- More: cancer here is classically tobacco- and alcohol-driven, presents early as a visible sore, and is staged and treated differently from the HPV-associated cancers just behind it in the oropharynx.

**Carotid sheath**
- Definition: Fascial tube enclosing the common/internal carotid artery, internal jugular vein, and vagus nerve together down the neck.
- More: it is the key surgical landmark for exposing the great vessels, and a deep neck infection tracking within it risks carotid blowout or internal jugular (Lemierre) thrombophlebitis.

**HPV-associated oropharyngeal cancer**
- Definition: HPV-driven OPSCC in younger non-smokers, often a painless cystic node.
- More: a cystic neck node in an adult >40 must not be assumed to be a branchial cleft cyst: it is metastatic HPV+ SCC until proven otherwise.

**Nasopharyngeal carcinoma (NPC)** (also matches: Nasopharyngeal carcinoma, NPC)
- Definition: EBV-associated cancer endemic to southern China/SE Asia.
- More: new unilateral serous otitis media in an adult is nasopharyngeal carcinoma until excluded by nasopharyngoscopy: it reflects Eustachian tube obstruction; the tumor is radiosensitive, treated primarily with radiation ± chemotherapy.

**TI-RADS**
- Definition: ACR ultrasound risk stratification for thyroid nodules.
- More: points across five features set the FNA threshold: e.g., TR5 nodules are aspirated at ≥1 cm, TR4 at ≥1.5 cm, and TR3 at ≥2.5 cm.

**Bethesda System**
- Definition: Six-tier thyroid FNA cytology framework.
- More: malignancy risk climbs from ~5–10% for category III (AUS) to ~25–40% for IV, ~50–75% for V, and ~97–99% for VI: each tier steering repeat FNA, molecular testing, lobectomy, or thyroidectomy.

**Pleomorphic adenoma**
- Definition: Most common benign salivary/parotid tumor.
- More: carries a small but real risk of malignant transformation (~1.5% early, rising to ~10% after ~15 years): the reason it is excised with a cuff rather than enucleated or observed.

**Warthin tumor**
- Definition: Second most common benign parotid tumor in elderly male smokers.
- More: uniquely bilateral or multifocal in up to ~10% of cases and avidly takes up technetium-99m: often incidentally PET-avid, a benign pitfall on staging scans.

**Mucoepidermoid carcinoma**
- Definition: Most common malignant salivary tumor.
- More: graded low-to-high on mucous-vs-epidermoid cell ratio and often driven by the MAML2 fusion; grade, more than stage, predicts behavior in early disease.

**Adenoid cystic carcinoma**
- Definition: Salivary malignancy favoring minor glands (classically palate).
- More: hallmarked by perineural invasion and late distant metastasis (often lung) even a decade out: cure is judged over long horizons, so "no evidence of disease at 5 years" does not equal cure.

**Perineural invasion** (also matches: Perineural spread)
- Definition: Tumor spread along nerve sheaths.
- More: it produces pain or numbness out of proportion to mass size and skip lesions along the nerve: a driver of local recurrence and an indication for adjuvant radiation.

**Selective neck dissection**
- Definition: Removes only the highest-risk levels while preserving non-lymphatic structures.
- More: standard for the clinically node-negative (cN0) neck when the occult metastasis risk exceeds ~15–20%.

**Modified radical neck dissection**
- Definition: Removes levels I–V, sparing at least one of SCM, IJV, or spinal accessory nerve.
- More: preserving the spinal accessory nerve is prioritized to avoid shoulder-drop morbidity while still clearing node-positive disease.

**Radical neck dissection**
- Definition: Removes levels I–V plus SCM, IJV, and spinal accessory nerve.
- More: reserved for bulky nodal disease: bilateral IJV sacrifice risks fatal facial/cerebral venous congestion and is avoided in a single stage.

**Virchow's node**
- Definition: Enlarged left supraclavicular node suggesting a sub-diaphragmatic primary.
- More: it sits at the thoracic duct's junction with the left subclavian vein, so metastatic seeding here prompts imaging of the abdomen/pelvis, not just the neck.

**Leukoplakia**
- Definition: White mucosal patch that cannot be wiped off or otherwise explained.
- More: overall malignant transformation is roughly ~1–5%, higher for non-homogeneous or floor-of-mouth/ventral-tongue lesions: biopsy rather than observe.

**Erythroplakia**
- Definition: Red mucosal patch, less common than leukoplakia.
- More: far higher risk: the majority already show severe dysplasia, carcinoma in situ, or invasive SCC on biopsy, so it always warrants biopsy.

**TNM staging**
- Definition: Classifies by primary Tumor, regional Node, distant Metastasis.
- More: HPV+ oropharyngeal cancer uses a separate staging table: applying the HPV-negative criteria will markedly overstage these favorable tumors.

**Plummer-Vinson syndrome**
- Definition: Iron-deficiency anemia + esophageal web + dysphagia.
- More: predisposes specifically to postcricoid/hypopharyngeal carcinoma: correcting the anemia relieves symptoms but does not substitute for excluding malignancy.

**Osteoradionecrosis**
- Definition: Non-healing exposed bone in a previously irradiated mandible.
- More: risk rises sharply above ~60 Gy, so high-risk teeth are extracted before radiotherapy and post-radiation extractions from the irradiated field are avoided.

**Free flap**
- Definition: Distant tissue with its own pedicle, microvascularly reanastomosed at the defect.
- More: modern success rates exceed ~95%; flap monitoring is most critical in the first 48–72 hours when the majority of salvageable thromboses occur.

**Field cancerization**
- Definition: Diffuse carcinogen exposure priming the whole aerodigestive mucosa.
- More: it drives a second-primary risk of roughly 3–4% per year, the rationale for years-long post-treatment surveillance and continued tobacco/alcohol cessation.

**Larynx (subsites)** (also matches: subsites, Larynx)
- Definition: The voice box, divided into three surgically and oncologically distinct subsites: the supraglottis (epiglottis, false cords, aryepiglottic folds), the glottis (true vocal cords), and the subglottis (down to the cricoid). The glottis has sparse lymphatics, so glottic cancers present early with hoarseness and metastasize late; the supraglottis is lymphatic-rich and presents with early nodal spread.

**True vocal cord (vocal fold)** (also matches: True vocal cord, vocal fold)
- Definition: The vibrating shelf of the glottis, built as a layered structure: epithelium, the pliable superficial lamina propria (Reinke's space), and the vocalis muscle. Vibration occurs in a mucosal wave over Reinke's space; any lesion that stiffens this layer (scar, sulcus) causes hoarseness that surgery cannot always restore.

**Recurrent laryngeal nerve (RLN)** (also matches: Recurrent laryngeal nerve, RLN)
- Definition: The branch of the vagus supplying all intrinsic laryngeal muscles except the cricothyroid. Its long left course loops under the aortic arch, making it vulnerable to thyroid surgery, mediastinal disease, and aortic pathology; injury produces a paramedian cord and a breathy voice.

**Superior laryngeal nerve (external branch)** (also matches: Superior laryngeal nerve, external branch)
- Definition: Motor to the cricothyroid muscle, which tenses the cord for pitch. Injury (classically in thyroidectomy near the superior pole vessels) causes loss of high pitch and vocal fatigue: subtle, and easily missed in a non-singer.

**Vocal cord paralysis (unilateral)**
- Definition: Immobile cord from RLN injury; the affected cord sits in a paramedian position and the voice is breathy with weak cough. Up to a third are idiopathic, but a new unilateral paralysis without a surgical cause mandates imaging from skull base to aortopulmonary window to exclude tumor.

**Vocal cord paralysis (bilateral)**
- Definition: Both cords immobile, typically in a near-midline position after thyroid surgery; the danger is airway obstruction and stridor rather than voice change, and it may require tracheostomy or cordotomy.

**Vocal fold nodules**
- Definition: Bilateral, symmetric "singer's nodules" at the mid-membranous cord (the point of maximal vibratory impact), caused by phonotrauma. First-line treatment is voice therapy, not surgery: a classic pitfall is operating on what behavior can resolve.

**Vocal fold polyp**
- Definition: Usually a unilateral, often hemorrhagic lesion from a single phonotraumatic event; unlike nodules, polyps more often require microsurgical excision after a trial of voice rest and therapy.

**Reinke's edema (polypoid corditis)** (also matches: polypoid corditis, Reinke's edema)
- Definition: Diffuse, bilateral fluid accumulation in the superficial lamina propria, almost exclusively in smokers, producing a low, gravelly voice. Smoking cessation is mandatory; a low-pitched voice in a woman is the classic clue.

**Laryngopharyngeal reflux (LPR)** (also matches: Laryngopharyngeal reflux, LPR)
- Definition: Retrograde gastric content reaching the larynx/pharynx, producing throat clearing, globus, cough, and hoarseness. Laryngoscopic signs (posterior commissure hypertrophy, arytenoid edema) are nonspecific (up to ~86% of asymptomatic adults show them), so symptoms plus signs do not equal disease; objective reflux testing (pH-impedance) is required before committing to long-term acid suppression when symptoms are isolated or refractory.

**Muscle tension dysphonia**
- Definition: Effortful, strained voice from maladaptive laryngeal muscle recruitment with structurally normal cords; a primary functional disorder or secondary to reflux/lesion. Diagnosed by ruling out structural disease and treated with voice therapy.

**Laryngoscopy with stroboscopy**
- Definition: Adds a strobe light synchronized near the vocal frequency to "slow down" and reveal the mucosal wave; the key test for detecting subtle stiffness (scar, early cancer, sulcus) invisible on standard exam.

**FEES**
- Definition: Flexible Endoscopic Evaluation of Swallowing: a transnasal scope watches the pharynx and larynx directly while the patient swallows trial foods/liquids.
- More: unlike a modified barium swallow it needs no radiation and gives a direct view of residue/penetration/aspiration, but it can't see the brief moment of swallow itself ("white-out").

**Botulinum toxin (Botox)** (also matches: Botulinum toxin, Botox)
- Definition: A neurotoxin that causes temporary, reversible chemodenervation by blocking acetylcholine release at the neuromuscular junction.
- More: in laryngology it's injected into the thyroarytenoid/vocalis for spasmodic dysphonia and into synkinetic facial muscles after facial nerve injury; effects wear off over months, requiring repeat injections.

**Spasmodic dysphonia**
- Definition: A focal laryngeal dystonia causing task-specific voice breaks (strained-strangled in the adductor type); treated with targeted botulinum toxin injection into the thyroarytenoid, repeated roughly every 3 months.

**Laryngeal papillomatosis (RRP)** (also matches: Laryngeal papillomatosis, RRP)
- Definition: Recurrent respiratory papillomas from HPV 6 and 11, seeded during vaginal birth in the juvenile form; wart-like airway lesions that recur after debulking, with a small risk of malignant transformation (especially HPV 11).

**Laryngeal squamous cell carcinoma**
- Definition: The dominant laryngeal malignancy, tobacco- and alcohol-driven; glottic tumors declare themselves early with hoarseness (>2–3 weeks of hoarseness in a smoker demands laryngoscopy), whereas supraglottic tumors present later with a neck node or dysphagia.

**Tracheostomy**
- Definition: A surgical airway placed between the second and fourth tracheal rings; the feared early complication is tube displacement before a tract has matured (~5–7 days), when blind reinsertion can create a false passage.

**Tracheoinnominate fistula**
- Definition: A rare, catastrophic erosion of the tracheostomy tube into the innominate artery, classically 3 days to 6 weeks post-op. A "sentinel bleed" precedes exsanguination; initial control is overinflating the cuff or applying anterior digital pressure through the stoma.

**Adenoids**
- Definition: Nasopharyngeal lymphoid tissue that peaks in size around ages 3–7 and normally regresses by adolescence; hypertrophy causes mouth breathing, hyponasal speech, and Eustachian tube obstruction with recurrent otitis media.

**Adenoidectomy**
- Definition: Removal of the adenoid pad, a separate operation from tonsillectomy with different indications (nasal obstruction, chronic/recurrent otitis media, chronic adenoiditis). It is often combined with tympanostomy tubes for recurrent OME.

**Tonsillectomy: Paradise criteria**
- Definition: The frequency threshold defining "severe recurrent throat infection" that justifies tonsillectomy: ≥7 documented episodes in 1 year, ≥5/year for 2 years, or ≥3/year for 3 years, each episode with a qualifying feature (temp >38.3°C, cervical adenopathy, exudate, or positive GAS). Below this, watchful waiting is favored unless modifying factors (e.g., PFAPA, multiple antibiotic allergies) are present.

**Adenotonsillectomy for OSA**
- Definition: The first-line surgical treatment for pediatric obstructive sleep-disordered breathing; the CHAT trial showed benefit over watchful waiting for polysomnographic, behavioral, and quality-of-life outcomes. Inpatient observation is advised for children under age 3 or with severe OSA (AHI >10 or oxygen nadir <80%).

**Tympanostomy tubes**
- Definition: Ventilation tubes placed for recurrent AOM or persistent OME; the standard threshold is bilateral OME persisting ≥3 months with hearing loss, or recurrent AOM (≥3 in 6 months / ≥4 in 12 months) with effusion.

**Laryngomalacia**
- Definition: The most common cause of infant stridor (up to ~45–78% of cases), from dynamic inspiratory collapse of soft supraglottic structures; produces intermittent inspiratory stridor worse with feeding, crying, and supine position, typically self-resolving by 12–24 months. Diagnosis is by flexible laryngoscopy showing the dynamic collapse.

**Supraglottoplasty**
- Definition: The surgical treatment for the ~10% of laryngomalacia cases that are severe (failure to thrive, aspiration, significant obstruction); it divides tight aryepiglottic folds and trims redundant supraglottic tissue, resolving stridor in most.

**Subglottic stenosis**
- Definition: Narrowing at the cricoid, the only complete cartilage ring and the narrowest point of the pediatric airway; most acquired cases follow prolonged intubation. It produces biphasic stridor, and severity is graded by the Myer-Cotton system (I–IV by percent luminal obstruction).

**Choanal atresia**
- Definition: Bony or membranous blockage of the posterior nasal aperture. Bilateral atresia presents at birth with cyclical cyanosis relieved by crying (neonates are obligate nasal breathers); the bedside clue is inability to pass a catheter through the nose. It is associated with CHARGE syndrome.

**Laryngeal cleft**
- Definition: A posterior midline defect between larynx and esophagus allowing aspiration; presents with feeding-associated coughing/choking and recurrent pneumonia, and is graded by the Benjamin-Inglis classification by depth of the cleft.

**Branchial cleft anomaly**
- Definition: Congenital lateral neck cyst/sinus from incomplete branchial apparatus involution; the second-cleft cyst (the most common) sits along the anterior border of the sternocleidomastoid. A "branchial cyst" first appearing after age 40 must be treated as a cystic metastasis until proven otherwise.

**Thyroglossal duct cyst**
- Definition: The most common congenital midline neck cyst, arising along the thyroid's descent from the foramen cecum; it classically elevates with tongue protrusion and swallowing. The Sistrunk procedure (excising the cyst with the mid-portion of the hyoid) is required to prevent recurrence.

**Cystic hygroma (lymphatic malformation)** (also matches: lymphatic malformation, Cystic hygroma)
- Definition: A soft, compressible, transilluminating neck mass from maldeveloped lymphatics, usually presenting by age 2 in the posterior triangle; can enlarge abruptly with infection or intralesional bleeding.

**Croup (laryngotracheobronchitis)** (also matches: laryngotracheobronchitis, Croup)
- Definition: Viral subglottic inflammation (parainfluenza) with barky cough and inspiratory stridor; the "steeple sign" of subglottic narrowing may appear on AP neck film. Treated with dexamethasone, and nebulized epinephrine for moderate-to-severe cases.

**Obstructive sleep apnea (OSA)** (also matches: Obstructive sleep apnea, OSA)
- Definition: Repetitive pharyngeal collapse during sleep causing apneas/hypopneas, arousals, and desaturations; diagnosed by polysomnography and graded by the apnea-hypopnea index (AHI 5–15 mild, 15–30 moderate, >30 severe).

**Apnea-hypopnea index (AHI)** (also matches: Apnea-hypopnea index, AHI)
- Definition: The number of apneas plus hypopneas per hour of sleep, the core severity metric of OSA; an AHI ≥5 with symptoms, or ≥15 regardless of symptoms, meets diagnostic criteria.

**STOP-BANG**
- Definition: An 8-item screening tool (Snoring, Tiredness, Observed apnea, Pressure, BMI, Age, Neck, Gender); a score ≥3 flags elevated OSA risk and ≥5 suggests high risk of moderate-to-severe disease.

**Continuous positive airway pressure (CPAP)** (also matches: Continuous positive airway pressure, CPAP)
- Definition: The most efficacious OSA treatment, pneumatically splinting the airway open; its real-world limitation is adherence, and the surgical/alternative pathways exist chiefly for the substantial fraction of patients who cannot tolerate it.

**Uvulopalatopharyngoplasty (UPPP)** (also matches: Uvulopalatopharyngoplasty, UPPP)
- Definition: Resection/reconfiguration of the uvula, soft palate, and tonsillar pillars to enlarge the retropalatal airway; effective for palatal-level obstruction but with variable success, so anatomic phenotyping guides selection.

**Hypoglossal nerve stimulation**
- Definition: An implanted device that protrudes the tongue during inspiration via CN XII stimulation; indicated for moderate-to-severe OSA in patients intolerant of CPAP, with a BMI ≤32 kg/m² and without complete concentric palatal collapse on drug-induced sleep endoscopy.

**Maxillomandibular advancement (MMA)** (also matches: Maxillomandibular advancement, MMA)
- Definition: Skeletal surgery advancing both jaws to enlarge the entire velo-oro-hypopharyngeal airway; the most effective soft-tissue-sparing surgical option, more durable than UPPP for appropriate candidates.

**Drug-induced sleep endoscopy (DISE)** (also matches: Drug-induced sleep endoscopy, DISE)
- Definition: Flexible endoscopy during pharmacologically induced sleep to identify the level(s) and pattern of collapse (VOTE: velum, oropharynx, tongue base, epiglottis); complete concentric palatal collapse is a contraindication to hypoglossal nerve stimulation.

**Facial nerve (CN VII) segments** (also matches: Facial nerve)
- Definition: The nerve's course runs intracranial → internal auditory canal → labyrinthine (narrowest segment, the site of entrapment in Bell's palsy) → tympanic → mastoid, exiting at the stylomastoid foramen. The labyrinthine segment's tight bony canal explains why edema there causes ischemic paralysis.

**Bell's palsy**
- Definition: Acute idiopathic (largely HSV-linked) unilateral lower-motor-neuron facial paralysis of exclusion, involving the forehead. Early oral corticosteroids improve recovery; surgical decompression evidence remains insufficient to recommend routinely. Forehead sparing instead points to a central (upper-motor-neuron) lesion.

**Ramsay Hunt syndrome (herpes zoster oticus)** (also matches: Ramsay Hunt syndrome, herpes zoster oticus)
- Definition: VZV reactivation in the geniculate ganglion causing facial palsy plus a painful vesicular rash in the ear canal/auricle, often with hearing loss and vertigo; it has a worse prognosis than Bell's palsy, so antivirals plus steroids are started promptly.

**Synkinesis**
- Definition: Aberrant facial nerve regeneration causing involuntary co-contraction (e.g., eye closure with smiling); a late sequela of facial palsy managed with targeted botulinum toxin and neuromuscular retraining rather than further surgery.

**Nasal septal hematoma** (also matches: Septal hematoma)
- Definition: Blood collection between septal cartilage and perichondrium after trauma, stripping the cartilage of its blood supply; if not drained urgently it causes avascular necrosis and a saddle-nose deformity. The exam clue is a boggy, fluctuant septal swelling obstructing both sides.

**Auricular hematoma**
- Definition: Subperichondrial blood in the pinna ("wrestler's ear") that, if not evacuated with a pressure dressing, organizes into the fibrocartilaginous "cauliflower ear"; time-sensitive because the cartilage depends on the perichondrium for perfusion.

**Nasal bone fracture**
- Definition: The most common facial fracture; assessment is best repeated at 3–5 days once swelling settles, and closed reduction is ideally performed within ~2 weeks before the fracture sets. Always exclude a septal hematoma first.

**Orbital blowout fracture**
- Definition: Fracture of the thin orbital floor (or medial wall) from a blunt globe injury; entrapment of the inferior rectus causes vertical diplopia, and a "trapdoor" fracture in a child with the oculocardiac reflex (bradycardia, nausea) is a surgical emergency.

**Le Fort fractures**
- Definition: A classification of midface fractures by the plane of the fracture (I transverse maxilla, II pyramidal, III craniofacial disjunction), all crossing the pterygoid plates; they signal high-energy trauma and airway risk from a mobile, retro-displaced midface.

**Temporal bone fracture**
- Definition: Skull-base fracture classified as longitudinal (more common, along the petrous axis, causing conductive loss and ossicular disruption) or transverse (crossing the axis, higher risk of sensorineural loss and facial paralysis). CSF otorrhea and Battle's sign are supporting signs.

**Mandible fracture**
- Definition: Frequently occurs in pairs because of the ring-like mandible; malocclusion is the most sensitive clinical sign, and condylar/angle regions are common sites. Fractures through a tooth-bearing segment are effectively open and warrant antibiotics.

**Septorhinoplasty**
- Definition: Combined functional and aesthetic reshaping of the nasal septum and framework; over-resection of dorsal or caudal septal cartilage risks late saddle-nose or tip ptosis, so preserving an adequate structural strut is the key principle.

**Local/regional flap**
- Definition: Reconstruction using adjacent tissue moved on its own blood supply (e.g., paramedian forehead flap for nasal defects); chosen when tissue quality and defect size allow closure without the complexity of free-tissue transfer.

**Open middle ear**
- Definition: The state in which a perforated tympanic membrane or a patent tympanostomy tube exposes the middle ear (and, through the round/oval window, the inner ear) to anything instilled in the ear canal.
- More: A drop reaches the inner ear only via the round window membrane, which is why an aminoglycoside can be cochleotoxic once the drum is not intact but is safe on an intact drum.

**Ototoxicity**
- Definition: Drug-induced injury to the cochlea or vestibular system causing hearing loss, tinnitus, or imbalance.
- More: Topical aminoglycosides, alcohol, and acidifying drops are the classic offenders through an open middle ear; assume a tube is patent for roughly 12 months after placement unless drum closure is documented (teaching convention: confirm locally).

**Non-ototoxic fluoroquinolone otic drop**
- Definition: Topical quinolone (ofloxacin, or ciprofloxacin ± dexamethasone) safe for use through a perforation or tube and first-line for tube otorrhea and chronic suppurative otitis media.
- More: For tube otorrhea/CSOM, topical antibiotics are preferred over oral because local drug concentration is far higher than achievable systemically.

**Idiopathic sudden sensorineural hearing loss (ISSNHL)** (also matches: Idiopathic sudden sensorineural hearing loss, ISSNHL, Sudden SNHL)
- Definition: Otologic emergency defined as ≥30 dB sensorineural loss across ≥3 contiguous frequencies developing within 72 hours.
- More: Steroids are most effective when started within about 2 weeks of onset; treat within 7 days when possible, and obtain an audiogram to confirm plus MRI to exclude retrocochlear pathology.

**Steroid dose equivalence**
- Definition: Conversion used to avoid underdosing when switching corticosteroids: prednisone 60 mg ≈ methylprednisolone 48 mg ≈ dexamethasone 10 mg.
- More: Cautions include hyperglycemia, insomnia, mood change, and GI upset; use care in diabetes, uncontrolled hypertension, and peptic ulcer disease.

**Intratympanic steroid**
- Definition: Corticosteroid injected across the tympanic membrane into the middle ear, used as salvage after failed oral steroids or first-line when systemic steroids are risky (e.g., poorly controlled diabetes).
- More: Combined oral + intratympanic therapy is favored for severe/profound loss.

**Peritonsillar abscess (quinsy)** (also matches: Peritonsillar abscess, quinsy)
- Definition: Collection of pus between the tonsillar capsule and the superior constrictor muscle, presenting with trismus, "hot potato" voice, and uvular deviation.
- More: US incidence ~30 per 100,000/year; managed by needle aspiration or I&D plus antibiotics.

**Deep neck space infection (DNSI)** (also matches: Deep neck space infection, DNSI)
- Definition: Infection tracking along interconnected cervical fascial planes (parapharyngeal, retropharyngeal, submandibular, danger space) toward the airway, great vessels, and mediastinum.
- More: Surgical drainage is typically indicated for a discrete collection (often quoted as >2–2.5 cm), airway compromise, or failure of medical therapy.

**Polymicrobial infection**
- Definition: Infection caused by multiple organisms simultaneously; head and neck DNSIs mix aerobic gram-positives (*S. pyogenes*, *S. anginosus* group, *S. aureus*) with oral anaerobes (*Fusobacterium*, *Prevotella*).
- More: Anaerobes predominate in odontogenic sources, which is why empiric regimens must cover "above-the-diaphragm" anaerobes.

**Ampicillin-sulbactam**
- Definition: First-line empiric IV agent for PTA/DNSI; the sulbactam beta-lactamase inhibitor restores coverage of oral anaerobes and many staphylococci.
- More: Adding metronidazole is redundant here because anaerobic coverage is already built in; reserve metronidazole for backbones that lack it (e.g., a cephalosporin).

**Clindamycin**
- Definition: Lincosamide covering streptococci, many staphylococci, and above-the-diaphragm anaerobes; used for penicillin-allergic patients and odontogenic infection.
- More: Do NOT rely on it as dependable MRSA coverage: community MRSA susceptibility is variable and inducible resistance requires D-test confirmation.

**Metronidazole**
- Definition: Nitroimidazole with potent anaerobic (and antiprotozoal) activity but no aerobic gram-positive coverage.
- More: Add it only when the regimen backbone lacks anaerobic activity, e.g., ceftriaxone or cefuroxime; not needed with ampicillin-sulbactam.

**Ciprofloxacin**
- Definition: Fluoroquinolone with the best antipseudomonal activity but poor streptococcal coverage.
- More: A poor choice for strep-driven head and neck infection and never appropriate as MRSA monotherapy.

**Lemierre syndrome**
- Definition: Septic thrombophlebitis of the internal jugular vein, classically caused by *Fusobacterium necrophorum* after oropharyngeal infection, with septic pulmonary emboli.
- More: Oropharyngeal infection invades the parapharyngeal space and seeds the IJV, producing metastatic abscesses.

**Invasive fungal head & neck disease**
- Definition: Angioinvasive mould infection (e.g., *Aspergillus*, Mucorales) in immunocompromised or hyperglycemic hosts requiring antifungals plus surgical debridement.
- More: Angioinvasion causes vascular thrombosis and tissue necrosis (black eschar), so antifungal drug penetration into dead tissue is limited and surgery is essential.

**Voriconazole**
- Definition: First-line triazole for invasive aspergillosis (isavuconazole is co–first-line).
- More: Has NO activity against Mucorales; voriconazole prophylaxis is associated with breakthrough mucormycosis.

**Liposomal amphotericin B**
- Definition: Polyene, first-line for invasive mucormycosis; the liposomal formulation reduces nephrotoxicity versus conventional amphotericin.
- More: Binds fungal membrane ergosterol to form pores; must be paired with urgent surgical debridement and reversal of the host derangement (e.g., DKA).

**Isavuconazole**
- Definition: Newer triazole, co–first-line with voriconazole for invasive aspergillosis and an accepted alternative for mucormycosis, with fewer drug interactions and less hepatotoxicity.
- More: Chosen when interaction burden or hepatic tolerance favors it over voriconazole.

**Clostridioides difficile infection (CDI)** (also matches: Clostridioides difficile infection, CDI)
- Definition: Antibiotic-associated colitis presenting as watery diarrhea with leukocytosis (which may precede diarrhea); prior antibiotic exposure is the dominant risk factor.
- More: Highest-risk classes are clindamycin, fluoroquinolones, cephalosporins, and carbapenems; lower risk with macrolides, penicillins, and sulfonamides.

**Airway-first principle**
- Definition: The rule that assessing and protecting the airway precedes forming any differential in an ENT emergency.
- More: Signs of impending obstruction (stridor, drooling/inability to handle secretions, tripod positioning, agitation progressing to lethargy, voice change) override the diagnostic work-up.

**Tripod position**
- Definition: Patient sitting upright, leaning forward on the arms with the neck extended and chin thrust forward to maximize airway patency.
- More: In suspected epiglottitis it signals a near-critical airway: keep the patient calm and do not force a supine position or throat exam.

**"When not to examine the throat"**
- Definition: Rule that a tongue depressor or oropharyngeal exam is deferred in suspected epiglottitis (especially a drooling, tripoding child) until a controlled setting with airway backup is available.
- More: Manipulation can precipitate complete obstruction; definitive visualization is flexible laryngoscopy with ENT/anesthesia present.

**Ludwig's angina**
- Definition: Rapidly spreading, usually odontogenic bilateral cellulitis of the submandibular, sublingual, and submental spaces that elevates and posteriorly displaces the tongue.
- More: It is a diffuse "woody" cellulitis, not a drainable pocket, so it can obstruct the airway before fluctuance develops: default to early awake fiberoptic intubation with surgical airway on standby.

**Awake fiberoptic intubation**
- Definition: Securing the airway in a spontaneously breathing, minimally sedated patient using a flexible scope, preferred when distorted anatomy makes direct laryngoscopy and bag-mask ventilation unreliable.
- More: Preferred in Ludwig's angina and threatened deep-neck airways because sedation-induced apnea in a "can't intubate, can't ventilate" scenario is catastrophic.

**Orbital (postseptal) cellulitis** (also matches: Postseptal cellulitis)
- Definition: Infection posterior to the orbital septum, usually a complication of sinusitis, presenting with proptosis, painful/restricted eye movement, and vision change.
- More: Proptosis, ophthalmoplegia, decreasing vision, or an RAPD distinguish it from preseptal cellulitis and prompt urgent CT plus consideration of surgical drainage.

**Preseptal (periorbital) cellulitis** (also matches: Periorbital cellulitis)
- Definition: Infection anterior to the orbital septum causing eyelid swelling/erythema but sparing eye movement and vision.
- More: Painful or restricted eye movement means the process is no longer preseptal: reclassify and image.

**Acute invasive fungal sinusitis (mucormycosis)** (also matches: Acute invasive fungal sinusitis, mucormycosis)
- Definition: Angioinvasive mould infection of the sinuses in diabetic (especially DKA) or immunocompromised hosts, with black necrotic eschar and facial pain/numbness.
- More: A same-hour surgical emergency: emergent biopsy/frozen section and debridement plus liposomal amphotericin B and correction of the metabolic derangement; do not wait for formal imaging or cultures.

**Orbital compartment syndrome**
- Definition: Rise in intraorbital pressure (usually from retrobulbar hemorrhage) compressing the optic nerve and its blood supply within the closed bony orbit.
- More: Irreversible vision loss can occur within roughly 60–120 minutes of significant ischemia, so treatment precedes imaging (teaching convention: confirm locally).

**Lateral canthotomy and inferior cantholysis** (also matches: Lateral canthotomy)
- Definition: Bedside release of the lateral canthal tendon (and its inferior crus) to decompress the orbit in orbital compartment syndrome.
- More: Perform immediately when vision is acutely threatened and do not wait for CT; IOP-lowering agents (acetazolamide, mannitol) are adjuncts, not substitutes.

**Relative afferent pupillary defect (RAPD)** (also matches: Relative afferent pupillary defect, RAPD)
- Definition: Asymmetric pupillary light response indicating optic nerve or severe retinal dysfunction on the affected side.
- More: On the swinging-flashlight test the affected pupil paradoxically dilates when light swings to it, signaling that the optic nerve is functionally compromised and vision is under real threat.

**SSNHL treatment window**
- Definition: The time-sensitive period during which corticosteroids can improve recovery in sudden sensorineural hearing loss; earlier is better, ideally within about 2 weeks.
- More: Defined as ≥30 dB loss across ≥3 contiguous frequencies within 72 hours; confirm with an urgent audiogram before attributing symptoms to cerumen or effusion.

**Post-thyroidectomy hematoma**
- Definition: Expanding neck hematoma after thyroid/neck surgery compressing the airway.
- More: The immediate action is to open the wound at the bedside (release skin and strap-muscle closure) to evacuate the clot BEFORE imaging or OR transport; definitive hemostasis follows in the OR.

**Button battery impaction** (also matches: Button battery)
- Definition: Disc battery lodged in the ear, nose, or (most dangerously) esophagus, causing hydrolysis-driven liquefactive necrosis within hours.
- More: An esophageal battery should be removed emergently, ideally within about 2 hours; honey (pre-hospital) and sucralfate (in-hospital) can mitigate injury while awaiting removal.

**Liquefactive necrosis**
- Definition: Tissue destruction in which cells are digested into a liquid mass, characteristic of button-battery and alkali injury.
- More: At the battery's negative pole, current generates hydroxide ions, raising local pH and dissolving tissue: the reason removal is measured in hours, not days.

**Caustic ingestion**
- Definition: Swallowing of a corrosive alkali or acid causing aerodigestive injury; do not induce vomiting, neutralize, or give charcoal.
- More: Absence of visible oral burns does NOT exclude significant esophageal injury, so a normal mouth cannot clear the esophagus.

**Alkali vs. acid injury**
- Definition: Alkali (e.g., drain cleaner) causes deeply penetrating liquefactive necrosis of the esophagus; acid causes coagulative necrosis forming a limiting surface eschar and tends to injure the stomach.
- More: Alkali saponifies lipids and penetrates the wall, whereas the acid eschar can partially self-limit depth.

**Endoscopic injury grading (caustic)** (also matches: Endoscopic injury grading, caustic)
- Definition: Grading of caustic injury from I (mucosal edema/erythema) through IIa/IIb (superficial vs. deep/circumferential ulceration) to III (transmural necrosis).
- More: Performed within about 12–24 hours once stable; higher grades markedly raise the risk of later stricture, and grade III risks perforation/mediastinitis (teaching convention for timing: confirm locally).

**CSF rhinorrhea**
- Definition: Leakage of cerebrospinal fluid from a skull-base defect, suggested by a "halo/ring" sign on gauze and glucose-positive fluid.
- More: Avoid nasal packing near a suspected skull-base defect because of the meningitis risk; most traumatic leaks are first managed with head elevation and observation.

**Angioedema**
- Definition: Localized, non-pitting deep dermal/submucosal swelling of the lips, tongue, or airway; the key triage question is whether it is histamine- or bradykinin-mediated.
- More: Swelling without urticaria or itch points away from a histaminergic cause and toward a bradykinin mechanism that will not respond to the anaphylaxis triad.

**Histamine (mast-cell)–mediated angioedema** (also matches: Mast-cell-mediated angioedema)
- Definition: Allergic angioedema, typically with urticaria/itch, that responds to epinephrine, antihistamines, and steroids.
- More: Mast-cell histamine release increases vascular permeability: the one angioedema subtype for which the anaphylaxis protocol works.

**ACE-inhibitor–induced angioedema**
- Definition: Bradykinin-mediated swelling from reduced bradykinin breakdown, occurring at any time after starting the drug: even years later.
- More: Definitive treatment is permanent discontinuation of the ACE inhibitor; epinephrine, antihistamines, and steroids are unreliable, and trial evidence for icatibant/C1-INH in this setting is inconsistent.

**Hereditary angioedema (HAE)** (also matches: Hereditary angioedema, HAE)
- Definition: Recurrent bradykinin-mediated angioedema from C1-esterase inhibitor deficiency/dysfunction, with attacks since adolescence, positive family history, and no urticaria.
- More: Loss of C1-INH lets the contact/kallikrein-kinin system generate excess bradykinin; abdominal attacks from bowel-wall edema can mimic a surgical abdomen.

**C1-esterase inhibitor (C1-INH)** (also matches: C1-esterase inhibitor, C1-INH)
- Definition: Regulatory protein that restrains the kallikrein-kinin (contact) system and complement; its deficiency underlies HAE.
- More: Without it, unchecked kallikrein cleaves kininogen to bradykinin, the shared final mediator with ACE-inhibitor angioedema.

**Bradykinin-pathway agents**
- Definition: Targeted HAE therapies: C1-inhibitor concentrate, icatibant (B2-receptor antagonist), and ecallantide (kallikrein inhibitor).
- More: These treat acute bradykinin-mediated attacks; epinephrine/antihistamines/steroids do not, though airway vigilance remains paramount because laryngeal attacks can fully obstruct.

**Inhalational/thermal airway injury**
- Definition: Progressive supraglottic and glottic edema after flame, steam, or hot-gas exposure that can look reassuring initially.
- More: Intubate early and electively, before stridor/drooling appear, because once late signs develop, edema may make intubation impossible.

**Carbonaceous sputum**
- Definition: Soot-containing sputum indicating smoke inhalation.
- More: Together with facial burns, singed nasal hair, or new hoarseness after a closed-space fire, any single finding should trigger urgent airway evaluation rather than observation.

**Penetrating neck trauma**
- Definition: hard signs: Findings mandating immediate operative exploration: expanding/pulsatile hematoma, active pulsatile bleeding, absent distal pulse, air bubbling from the wound, or a new focal neurologic deficit.
- More: Hard signs go to the OR regardless of zone and regardless of a currently stable blood pressure; "stable now" is not "safe to image first."

**"No-zone" approach**
- Definition: Contemporary paradigm managing the stable penetrating-neck-trauma patient by physical exam plus CT angiography rather than by entry-wound zone.
- More: Entry zone poorly predicts the trajectory and internal injury, so CTA now guides selective work-up and reduces negative neck explorations.

**Neck Zone I**
- Definition: Region from the cricoid cartilage to the clavicles/thoracic outlet, containing great-vessel origins, trachea, esophagus, and lung apex.
- More: Least surgically accessible: proximal vascular control may need sternotomy/thoracotomy, so even some hard-sign patients get imaging first when stable enough.

**Neck Zone II**
- Definition: Region from the cricoid to the angle of the mandible, containing the carotids, jugulars, larynx, trachea, and esophagus.
- More: The largest and most surgically accessible zone and the site of most penetrating neck injuries; hard signs here typically go directly to the OR.

**Neck Zone III**
- Definition: Region from the angle of the mandible to the skull base, containing distal carotid/vertebral arteries and lower cranial nerves.
- More: Proximal control is difficult, so injuries here may require endovascular (IR) management rather than open exploration.

**Danger space**
- Definition: Potential space between the alar and prevertebral fascia extending from the skull base to the diaphragm/posterior mediastinum.
- More: It is the anatomic conduit by which a retropharyngeal infection descends to cause necrotizing mediastinitis.

**Retropharyngeal abscess**
- Definition: Deep-space collection behind the pharynx, classically in young children with fever, neck stiffness/torticollis, and refusal to move the neck.
- More: Contrast-enhanced neck CT defines the collection and its relation to great vessels/mediastinum before drainage.

**Descending necrotizing mediastinitis**
- Definition: Life-threatening spread of oropharyngeal/deep-neck infection into the mediastinum along fascial planes.
- More: Mortality rises steeply once mediastinitis occurs (reported ~17.5–50%), underscoring early source control.

**Stridor**
- Definition: High-pitched noise from turbulent airflow through a narrowed airway. Timing localizes the level: inspiratory suggests extrathoracic/laryngeal, expiratory suggests intrathoracic, and biphasic suggests fixed subglottic/tracheal narrowing.
- More: It becomes audible once the airway lumen is critically narrowed (roughly ≤50% in adults), so stridor at rest signals advanced obstruction requiring urgent assessment. Because resistance rises with the fourth power of the radius, a small absolute reduction in an already small-caliber airway causes disproportionate obstruction: why children decompensate faster than adults.

**Post-tonsillectomy hemorrhage**
- Definition: Bleeding after tonsillectomy, classified as primary (<24 h, technical) or secondary (classically post-op days 5–10, when the eschar sloughs); always evaluated urgently regardless of apparent severity.
- More: Swallowed blood underestimates true loss in a small child, and a small "herald" bleed can precede catastrophic hemorrhage: there is no "wait and see."

**Airway foreign body**
- Definition: Aspirated object causing choking, unilateral wheeze, stridor, or decreased breath sounds, classically in a young child; a right mainstem lodgment is most common given the more vertical right bronchus.
- More: A witnessed choking episode with apparent recovery, or a normal chest film, does not exclude it, since objects migrate and cause delayed complications; rigid bronchoscopy is both diagnostic and therapeutic.

**Epiglottitis (supraglottitis)** (also matches: supraglottitis, Epiglottitis)
- Definition: Inflammation of the epiglottis and supraglottic structures causing rapid airway compromise; presents with sore throat, muffled voice, drooling, and a deceptively normal-looking oropharynx (historically Haemophilus influenzae type b in children, now rarer post-vaccine).
- More: Sore throat (~79%) and dysphagia (~71%) are the commonest symptoms, while stridor (~3.6%) and dyspnea (~6.7%) are less common but predict need for airway intervention. In a child, this means tripod positioning and drooling: do not examine the throat or agitate the patient; secure the airway in a controlled setting first.

**House-Brackmann scale**
- Definition: Grades facial nerve function from I (normal) to VI (total paralysis); used to document and track facial nerve status before and after otologic, skull-base, or parotid surgery, and to follow recovery after facial palsy.
- More: Grade III is the threshold for clinically evident weakness with complete eye closure on effort. Incomplete palsy (retaining some movement) carries an excellent prognosis, whereas complete paralysis with no return by 3 weeks predicts poorer recovery.

**Olfactory nerve (CN I)** (also matches: Olfactory nerve)
- Definition: Sensory nerve for smell; its fibers pass through the cribriform plate to the olfactory bulb.
- More: an anterior skull-base fracture through the cribriform plate can shear these fibers, causing anosmia -- often permanent.

**Oculomotor nerve (CN III)** (also matches: Oculomotor nerve)
- Definition: Motor nerve to the superior, inferior, and medial rectus, inferior oblique, and levator palpebrae superioris, plus parasympathetic fibers to the pupil.
- More: a compressive lesion (e.g. a posterior communicating artery aneurysm) classically causes a "surgical" palsy with a blown, fixed pupil, since the superficial parasympathetic fibers are compressed first; a "medical" (ischemic/diabetic) palsy tends to spare the pupil.

**Trochlear nerve (CN IV)** (also matches: Trochlear nerve)
- Definition: Motor nerve to the superior oblique muscle, which depresses and intorts the eye.
- More: injury causes vertical diplopia worse on downgaze (e.g. reading or descending stairs), often with a compensatory head tilt away from the affected side.

**Trigeminal nerve (CN V)** (also matches: Trigeminal nerve)
- Definition: The great sensory nerve of the face, in three divisions: V1 (ophthalmic, forehead/cornea), V2 (maxillary, midface/upper teeth), and V3 (mandibular, lower face/tongue plus the motor supply to the muscles of mastication).
- More: V3 is the only division carrying a motor root; loss of the corneal reflex (V1 afferent) is an early, subtle sign of a cerebellopontine-angle lesion like vestibular schwannoma.

**Abducens nerve (CN VI)** (also matches: Abducens nerve)
- Definition: Motor nerve to the lateral rectus, which abducts the eye.
- More: its long intracranial course makes it especially vulnerable to raised intracranial pressure, so a CN VI palsy can be a nonspecific/false-localizing sign of elevated ICP rather than a direct nerve lesion.

**Vestibulocochlear nerve (CN VIII)** (also matches: Vestibulocochlear nerve)
- Definition: Carries hearing (cochlear division) and balance (vestibular division) signals from the inner ear to the brainstem, traveling through the internal acoustic meatus.
- More: an asymmetric sensorineural hearing loss or unilateral tinnitus should prompt an MRI of the internal auditory canals to exclude a vestibular schwannoma arising from this nerve.

**Glossopharyngeal nerve (CN IX)** (also matches: Glossopharyngeal nerve)
- Definition: Supplies the stylopharyngeus muscle, sensation and taste to the posterior third of the tongue, pharyngeal sensation (the afferent limb of the gag reflex), and parasympathetic secretomotor fibers to the parotid gland.
- More: glossopharyngeal neuralgia causes brief, severe throat/ear pain triggered by swallowing or talking -- easily mistaken for other causes of otalgia or sore throat.

**Vagus nerve (CN X)** (also matches: Vagus nerve)
- Definition: Supplies motor and sensory innervation to the pharynx and larynx (via the pharyngeal and recurrent laryngeal branches) and carries parasympathetic fibers to the thorax and abdomen.
- More: its recurrent laryngeal branch's long, asymmetric course (looping under the aortic arch on the left, the subclavian artery on the right) is why thoracic, thyroid, and mediastinal disease can present as hoarseness.

**Accessory nerve (CN XI)** (also matches: Accessory nerve, Spinal accessory nerve)
- Definition: Motor nerve to trapezius and sternocleidomastoid.
- More: it runs superficially through the posterior triangle (neck level V), making it the nerve most often injured during neck dissection -- injury causes shoulder droop and a weak shrug from trapezius palsy.

**Hypoglossal nerve (CN XII)** (also matches: Hypoglossal nerve)
- Definition: Motor nerve to the intrinsic and most extrinsic tongue muscles.
- More: on a peripheral (LMN) injury, the protruded tongue deviates toward the weak side (the unopposed genioglossus on the healthy side pushes it over).

**Jugular foramen**
- Definition: Skull-base opening transmitting cranial nerves IX, X, and XI, plus the internal jugular vein.
- More: a jugular foramen syndrome (lower cranial neuropathies from a mass here, e.g. glomus jugulare or schwannoma) causes hoarseness, dysphagia, and shoulder weakness together.

**Internal acoustic meatus** (also matches: Internal auditory canal, Internal auditory meatus)
- Definition: Canal through the petrous temporal bone carrying CN VII and CN VIII (plus the labyrinthine artery) from the brainstem to the inner ear.
- More: vestibular schwannoma classically arises from the vestibular division of CN VIII within this canal, and MRI of the internal auditory canals with contrast is the diagnostic study.

**Optic canal**
- Definition: Skull-base canal transmitting the optic nerve (CN II) and ophthalmic artery from the orbit to the cranial cavity.
- More: traumatic or compressive optic-canal injury causes progressive monocular vision loss and is a surgical emergency (optic nerve decompression) in selected cases.

**Cribriform plate**
- Definition: Perforated portion of the ethmoid bone forming the nasal cavity roof and floor of the anterior cranial fossa, transmitting olfactory nerve (CN I) fibers.
- More: it is thin and easily fractured, the classic route for a CSF leak (and anosmia) after facial or skull-base trauma, or for tumor to breach into the anterior cranial fossa (e.g. esthesioneuroblastoma).

**Meatuses** (also matches: Meatus)
- Definition: The grooves on the lateral nasal wall beneath each turbinate. The inferior meatus receives the nasolacrimal duct; the middle meatus houses the ostiomeatal complex (frontal, anterior ethmoid, and maxillary sinus drainage); the superior meatus receives posterior ethmoid drainage.
- More: the sphenoid sinus is the exception -- it drains via the sphenoethmoidal recess above the superior turbinate, not into any of the three meatuses.

**Middle meatus**
- Definition: The groove beneath the middle turbinate; houses the ostiomeatal complex, the shared drainage pathway for the frontal, anterior ethmoid, and maxillary sinuses.
- More: obstruction here is the final common pathway for most rhinosinusitis, regardless of which of the three sinuses started it.

**Frontal recess**
- Definition: The hourglass-shaped drainage pathway connecting the frontal sinus to the middle meatus, bounded by the agger nasi cell anteriorly and the ethmoid bulla posteriorly.
- More: it is one of the most anatomically variable and surgically challenging areas in FESS -- narrow and easily scarred shut by aggressive instrumentation, causing iatrogenic frontal sinusitis.

**Nasal septum**
- Definition: The midline cartilage (quadrangular cartilage anteriorly) and bone (perpendicular plate of ethmoid, vomer posteriorly) partition dividing the nasal cavity into two passages.
- More: a deviated septum can obstruct one side and impair sinus drainage on that side; septal cartilage has no independent blood supply of its own, relying entirely on its perichondrium -- which is exactly why an undrained septal hematoma causes necrosis.

**Salivary glands**
- Definition: Three paired major glands (parotid, submandibular, sublingual) plus hundreds of minor glands throughout the oral mucosa, producing saliva for digestion, lubrication, and antimicrobial defense.
- More: the parotid is the largest but least commonly involved by stones (mostly mucous, low-flow submandibular saliva forms stones more often); the parotid is the most common site of both benign and malignant salivary tumors.

**Epiglottis**
- Definition: The leaf-shaped elastic cartilage at the laryngeal inlet that folds down to protect the airway during swallowing.
- More: a swollen, "cherry-red" epiglottis on lateral neck X-ray (the "thumb sign") is the classic finding in epiglottitis -- but the diagnosis is clinical, and imaging should never delay securing the airway.

**Cricoid cartilage**
- Definition: The only complete cartilage ring in the airway, sitting below the thyroid cartilage; the narrowest point of the pediatric airway.
- More: it is the landmark for cricothyrotomy (through the cricothyroid membrane just above it) and for cricoid pressure during rapid-sequence intubation.

**Thyroid cartilage**
- Definition: The largest laryngeal cartilage, forming the laryngeal prominence (Adam's apple) and the anterior/lateral framework the vocal folds attach to.
- More: it is unpaired, unlike the arytenoid, corniculate, and cuneiform cartilages, and is the landmark for a thyroplasty (medializing a paralyzed vocal fold via a window cut in its lamina).

**False vocal folds** (also matches: Vestibular folds, Ventricular folds)
- Definition: The mucosal folds sitting above the true vocal folds, separated from them by the laryngeal ventricle; they protect the airway on swallowing/straining but don't normally vibrate for voice.
- More: "false cord" or dysphonic plica ventricularis phonation happens when these folds compensate for weak true-fold closure, producing a rough, strained voice quality.

**Sternocleidomastoid**
- Definition: The paired strap muscle running from the mastoid process to the sternum and clavicle, dividing the neck into anterior and posterior triangles; innervated by the accessory nerve (CN XI).
- More: it is the key surgical landmark for exposing the carotid sheath, and congenital torticollis (fibrosis/shortening of this muscle) presents as a palpable neonatal neck mass with head tilt.

**Thyroid gland**
- Definition: A midline, butterfly-shaped endocrine gland overlying the 2nd-4th tracheal rings; the classic reason a midline neck mass that moves with swallowing points here.
- More: the recurrent laryngeal nerve runs immediately posterior to it (at risk in thyroidectomy), and the parathyroid glands sit on its posterior surface.

**Nasopharynx**
- Definition: The uppermost part of the pharynx, from the skull base to the soft palate; home to the adenoid and the Eustachian tube orifice.
- More: in an adult, a unilateral middle-ear effusion with no other cause should prompt nasopharyngoscopy to exclude a nasopharyngeal mass obstructing the Eustachian tube.

**Anterior ethmoidal artery**
- Definition: A branch of the ophthalmic artery (itself from the internal carotid) that supplies the anterior-superior nasal septum and lateral wall, and contributes to Kiesselbach's plexus.
- More: it is a major source of severe epistaxis when Kiesselbach's-plexus measures fail, and because it's an internal-carotid branch it isn't reachable by transnasal arterial ligation/embolization -- it needs a different surgical approach (endoscopic clipping).

**Ethmoid air cells**
- Definition: A honeycomb of thin-walled air cells within the ethmoid bone, divided into anterior cells (draining to the middle meatus) and posterior cells (draining to the superior meatus).
- More: they are separated from the orbit by only the paper-thin lamina papyracea and from the anterior cranial fossa by the thin fovea ethmoidalis/cribriform plate -- the anatomic basis for orbital and intracranial complications of ethmoiditis.

**Sphenoid sinus**
- Definition: The most posterior paranasal sinus, sitting below the pituitary fossa (sella turcica) and flanked by the optic nerve, internal carotid artery, and cavernous sinus.
- More: its central skull-base location makes it both the highest-stakes sinus surgically and the standard route for endoscopic transsphenoidal pituitary surgery.

**Embolization**
- Definition: An interventional-radiology procedure that occludes a feeding blood vessel (via catheter-delivered particles, coils, or glue) to control bleeding or devascularize a tumor before surgery.
- More: it is used for posterior epistaxis refractory to packing and cautery, and preoperatively for highly vascular tumors like juvenile nasopharyngeal angiofibroma, where a direct biopsy would risk severe hemorrhage.

**Thyroplasty**
- Definition: A laryngeal framework surgery that alters vocal-fold position (most often medializing a paralyzed fold) by placing an implant through a window cut in the thyroid cartilage.
- More: type I thyroplasty (medialization) is the standard surgical treatment for symptomatic unilateral vocal-fold paralysis, done under local anesthesia so the surgeon can fine-tune voice quality while the patient phonates intraoperatively.

**Sistrunk procedure**
- Definition: The definitive operation for a thyroglossal duct cyst: excises the cyst together with the central portion of the hyoid bone and a core of tissue up to the foramen cecum.
- More: removing only the cyst (without the hyoid segment and tract) leaves epithelial remnants behind and is the main reason for recurrence.

**Wallerian degeneration**
- Definition: The process by which the axon distal to a nerve injury degenerates while the nerve sheath remains, occurring over roughly 72 hours after transection.
- More: this is why a nerve stimulator applied to distal branches can still evoke a motor response for about 72 hours after a facial or hypoglossal nerve injury even if the nerve is transected -- a response at this stage does not rule out transection.

**Telecanthus**
- Definition: An abnormally increased distance between the medial canthi (inner corners of the eyelids), out of proportion to interpupillary distance.
- More: traumatic telecanthus after a naso-orbito-ethmoid (NOE) fracture signals disruption of the medial canthal tendon, confirmed with the bowstring (traction) test.

**Medial canthal tendon**
- Definition: The tendon anchoring the eyelids to the central midface skeleton at the medial orbit; disrupted by naso-orbito-ethmoid (NOE) fractures.
- More: tested with the bowstring (traction) test: pull the lower eyelid laterally while palpating the medial canthus for independent soft-tissue movement from bone.

**Nasolacrimal duct**
- Definition: The duct draining tears from the lacrimal sac into the inferior meatus of the nose; runs through the same naso-orbito-ethmoid region as the medial canthal tendon.
- More: it can be injured concurrently with NOE fractures, risking post-traumatic epiphora (excess tearing) if not addressed at the time of repair.

**Epiphora**
- Definition: Excessive tearing/watering of the eye, from overproduction or (more often) impaired drainage through the nasolacrimal system.
- More: post-traumatic epiphora after a naso-orbito-ethmoid fracture suggests concurrent nasolacrimal duct injury.

**Epistaxis**
- Definition: Nosebleed; anterior bleeds (most common, from Kiesselbach's plexus) are usually controlled with compression and cautery, while posterior bleeds (sphenopalatine artery) are more likely to need packing, ligation, or embolization.
- More: escalation ladder: topical vasoconstrictor -> cautery of a visualized source -> anterior/posterior packing -> surgical ligation or embolization for refractory bleeding.

**ATLS**
- Definition: Advanced Trauma Life Support: the standardized primary-survey framework (Airway, Breathing, Circulation, Disability, Exposure) for the initial assessment of a trauma patient.
- More: in facial trauma, ATLS priorities always come before detailed facial fracture assessment -- a dramatic facial injury should never distract from a life-threatening airway or C-spine issue.

---

## Module: Head & Neck Oncology (`head-neck-oncology`)
- version: 0.3.0-draft
- status: DRAFT, pending faculty review. v0.2.0: added a depth pass covering genuinely missing high-yield sub-I topics, nasopharyngeal carcinoma (EBV-associated), the wider salivary gland spectrum (Warthin tumo
- facultyReviewer: ""
- curriculum anchors: UKMLA Content Map (GMC), scope anchor; owns Neck lump (oncologic depth), Swallowing problems (oncologic dysphagia), Facial/periorbital swelling (parotid angle), Hearing loss (nasopharyngeal effusion), Infectious mononucleosis (neck-lump differential cross-reference); ACGME Otolaryngology-HNS Milestones 2.0, primarily PC3 Head & Neck Neoplasm, MK1 Anatomy; NCCN Clinical Practice Guidelines in Oncology, Head and Neck Cancers; American Thyroid Association guidelines; AJCC Cancer Staging Manual, 8th ed.; UK undergraduate Delphi (Lloyd 2014), student-scope depth cap
- subtitle: The neck mass, the salivary gland, and the thyroid nodule worked all the way through, plus the HPV and EBV stories reshaping oropharyngeal and nasopharyngeal cancer.

### Anatomy notes

**Neck levels I-VII** (tags: Nodal levels · Boundaries · Dissections)

The neck levels are a standardized map of the neck's lymph node basins (the Robbins classification). Head & neck cancers spread in fairly predictable nodal patterns depending on the primary site, so the levels give surgeons, radiologists, and pathologists a common language for describing where nodal disease is, staging it (the N in TNM), and planning exactly which basins a neck dissection needs to cover.
[figure: Cervical lymph node level classification (I-VII, including IIA/IIB and VA/VB) for head & neck cancer staging.]
- Beyond levels I-VI, add level VII (superior mediastinal nodes, below the sternal notch), which matters for thyroid and lower-neck cancer staging.
- Level II is often split into IIA/IIB by the spinal accessory nerve, and level V into VA/VB.Cervical nodal levels (Robbins classification), with surgical boundaries:
LevelSuperiorInferiorAnteriorPosteriorMain nodal contentsPrimary drainageStructures to watchIa (submental)Mandibular symphysisHyoid boneContralateral anterior digastricIpsilateral anterior digastricSubmental nodesChin, lower lip, floor of mouth, tongue tipAnterior jugular veinsIb (submandibular)Body of mandiblePosterior belly of digastricAnterior belly of digastricStylohyoid muscleSubmandibular gland and nodesOral cavity, anterior faceMarginal mandibular branch of CN VII, lingual and hypoglossal nervesIIa / IIb (upper jugular)Skull baseHyoid bone (inferior border of hyoid)Stylohyoid musclePosterior border of sternocleidomastoidUpper deep cervical nodesOral cavity, nasopharynx, oropharynx, larynx, parotidSpinal accessory nerve (CN XI) divides IIa from IIb; internal jugular veinIII (mid jugular)Hyoid boneInferior border of cricoid cartilageLateral border of sternohyoidPosterior border of sternocleidomastoidMiddle deep cervical nodesLarynx, hypopharynx, oropharynxInternal jugular vein, ansa cervicalisIV (lower jugular)Inferior border of cricoid cartilageClavicleLateral border of sternohyoidPosterior border of sternocleidomastoidLower deep cervical nodesLarynx, thyroid, hypopharynx, cervical esophagusThoracic duct (left side); phrenic nerve on scalenus anteriorVa / Vb (posterior triangle)Convergence of sternocleidomastoid and trapeziusClaviclePosterior border of sternocleidomastoidAnterior border of trapeziusSpinal accessory and transverse cervical nodesNasopharynx, posterior scalp and neck, thyroidSpinal accessory nerve (CN XI) runs through this level; brachial plexusVI (central compartment)Hyoid boneSternal notch (suprasternal notch)Common carotid artery (right) / carotid sheath (left)Common carotid artery (left) / carotid sheath (right)Pretracheal, paratracheal, prelaryngeal (Delphian) nodesThyroid, glottic and subglottic larynx, hypopharynx, cervical esophagusRecurrent laryngeal nerve and parathyroid glandsVII (superior mediastinal)Sternal notchInnominate arterySternumTracheaSuperior mediastinal nodesThyroid, cervical esophagusThoracic duct (left side), great vesselsWhich levels are dissected together depends on the primary site:

- Supraomohyoid neck dissection (levels I-III): for oral cavity primaries.
- Lateral neck dissection (levels II-IV): for oropharynx, larynx, and hypopharynx primaries.
- Posterolateral neck dissection (levels II-V): for skin/scalp primaries (e.g., melanoma) or other posteriorly draining primaries.
- Central (level VI) dissection: for thyroid cancer.

**The salivary glands** (tags: Parotid · Submandibular · Sublingual glands)

[figure: Major salivary gland anatomy: parotid (Stensen's duct) and submandibular (Wharton's duct).]
- Parotid: the largest gland; the facial nerve runs through it, dividing it into superficial and deep lobes, so facial-nerve function must be documented before and after any parotid surgery. Duct: Stensen's, opens opposite the upper second molar.
- Submandibular: duct is Wharton's, opening at the sublingual caruncle; its uphill course makes it the classic site for salivary stones (sialolithiasis).
- Sublingual: the smallest major gland, sitting in the floor of the mouth; drains via multiple small ducts (ducts of Rivinus) near the sublingual caruncle rather than one dominant duct.The three major glands compared:
GlandLocationSecretion typeClinical pearlsParotidOverlies the mandibular ramus, below and in front of the earSerousFacial nerve runs through it; ~80% of tumors are benign, mostly pleomorphic adenoma; stones are uncommon because serous saliva is thinSubmandibularSubmandibular triangle, below the body of the mandibleMixed, mucous-predominantWharton's duct runs an uphill course; accounts for the large majority of salivary stonesSublingualFloor of mouth, anterior to the submandibular glandMucous-predominantSmallest major gland; tumors here are rare but disproportionately likely to be malignant when they occurCommon lesions and tumors:

- Pleomorphic adenoma: the most common benign salivary tumor overall, usually in the parotid.
- Warthin tumor: the second most common benign tumor, essentially specific to the parotid.
- Mucoepidermoid carcinoma: the most common malignant salivary tumor.
- Sialolithiasis: far more common in the submandibular gland, because its secretion is thicker/more mucous and its duct runs uphill, against gravity, favoring stasis and stone formation.

**Thyroid & parathyroid anatomy** (tags: Thyroid gland · RLN · Parathyroids)

[figure: Thyroid lobes/isthmus, parathyroid glands, and recurrent laryngeal nerve relationships relevant to thyroidectomy risk.]The gland itself
- Butterfly-shaped: two lobes joined by an isthmus, sitting in the anterior neck across roughly C5-T1. The isthmus drapes over the 2nd-4th tracheal rings, just below the cricoid cartilage.
- A pyramidal lobe projects upward from the isthmus in a substantial minority of people, a remnant of the thyroglossal duct's embryologic descent from the foramen cecum at the tongue base.
- Moves with swallowing because the posterior suspensory ligament of Berry anchors it to the cricoid and upper tracheal rings.
- Highly vascular: superior thyroid artery (first branch of the external carotid artery), inferior thyroid artery (from the thyrocervical trunk), and venous drainage via superior, middle, and inferior thyroid veins.Recurrent Laryngeal Nerve Course & Risk
- The RLN runs in the tracheoesophageal groove in most people, but its course is variable. It passes right where the gland is anchored, near or through branches of the inferior thyroid artery and just deep/lateral to the ligament of Berry, its single most common injury site.
- Left vs right differ: the left RLN loops under the aortic arch and ascends fairly vertically in the groove; the right RLN loops under the right subclavian artery and takes a more oblique, lateral path. A non-recurrent nerve (right side, ~0.6-1.3%) is associated with an aberrant right subclavian artery, a classic surgical trap.
- Consequence of injury: unilateral -> vocal fold paralysis (hoarse, breathy voice); bilateral -> airway emergency, may require tracheostomy.
- The external branch of the superior laryngeal nerve, near the superior pole vessels, is separately at risk and controls pitch via the cricothyroid muscle.Parathyroid Vascularity & Hypocalcemia
- Four glands (two superior, two inferior) on the posterior thyroid capsule, each only a few millimeters, secreting parathyroid hormone (PTH) for calcium/phosphate balance.
- Embryology explains their behavior, and it crosses over: superior glands come from the 4th pharyngeal pouch and travel a short distance, so they're more constant in position (typically posterior to the RLN near the cricothyroid junction). Inferior glands come from the 3rd pharyngeal pouch and descend with the thymus, so they're far more variable (occasionally trailing into the thymus or mediastinum). Counterintuitively, the inferior glands arise from the higher-numbered embryologic pouch.
- Consequence of injury: small, tan, and sharing blood supply with the thyroid, they can be inadvertently removed or devascularized -> postoperative hypocalcemia. Watch for perioral numbness and Chvostek/Trousseau signs. Autotransplantation is an option if a gland is devascularized.

**Oral cavity vs oropharynx** (tags: Tobacco-driven cancer · HPV-driven cancer)

[figure: Anatomic distinction between oral cavity and oropharynx subsites and its oncologic significance (tobacco vs HPV driven cancer).]A single anatomic boundary separates two different cancers. The plane running from the junction of the hard and soft palate to the circumvallate papillae of the tongue (and along the anterior tonsillar pillars) divides the oral cavity in front from the oropharynx behind.
Everything anterior is classically tobacco- and alcohol-driven disease; everything posterior is increasingly HPV-driven disease with a markedly better prognosis. Knowing which side of that line a lesion sits on reframes the risk factors, staging system, treatment, and expected outcome.
Oral cavity
- Boundaries: skin-vermilion junction of the lips anteriorly -> hard-soft palate junction and circumvallate papillae posteriorly.
- Eight subsites: mucosal lip, buccal mucosa, floor of mouth, anterior two-thirds (oral) tongue, upper and lower alveolar ridge/gingiva, retromolar trigone, and hard palate.
- Cancer profile: ~90% squamous cell carcinoma, driven by tobacco and alcohol (synergistic), with betel/areca nut, poor dentition, and chronic trauma as additional factors. Tends to be visible and symptomatic early (a non-healing ulcer, white/red patch, pain), yet up to ~45% have cervical nodal metastases at presentation.
- Lymphatic drainage: principally to levels I-III, the anterior floor of mouth and lip to submental (Ia)/submandibular (Ib), and the oral tongue to submandibular and upper/mid jugular nodes. The oral tongue can drain bilaterally, which matters for elective neck treatment.Oropharynx
- Boundaries: extends from the soft palate superiorly to the level of the hyoid bone (&asymp;C3); continuous with the nasopharynx above, hypopharynx below, and oral cavity in front through the isthmus faucium.
- Four subsites: base of tongue (posterior third + lingual tonsils), palatine tonsils/tonsillar fossae, soft palate, and posterior pharyngeal wall.
- Cancer profile: increasingly HPV-associated (most often type 16), arising in the reactive lymphoid tissue of the tonsils and tongue base. Classically a younger, non-smoking patient who presents with a painless cystic neck node rather than local symptoms, the "asymptomatic primary with a neck mass" pattern. HPV-driven tumors are staged with a separate AJCC 8th-edition system because of their favorable biology.
- Lymphatic drainage: to the jugulodigastric (level II) and retropharyngeal nodes; base of tongue and posterior wall drain bilaterally, tonsil tends to drain ipsilaterally first.Oral cavity vs HPV+ oropharynx at a glance:
FeatureOral cavityOropharynx (HPV+)Main driverTobacco + alcohol (synergistic)High-risk HPV, typically type 16Typical patientOlder heavy smoker/drinkerYounger, often non-smokerUsual presentationVisible ulcer/patch + pain, early symptomsPainless cystic neck node, few local symptomsMolecular hallmarkTP53 mutationp16 overexpression (E7-driven)PrognosisLess favorableSubstantially better stage-for-stageStagingStandard AJCCSeparate AJCC 8th-ed. HPV+ systemThe prognostic gap is large: HPV-associated oropharyngeal SCC carries roughly 80-90% 5-year overall survival, versus ~40% for HPV-negative disease.
High-yield pitfalls:

- p16 testing is for the oropharynx, not the oral cavity: routine HPV/p16 testing is recommended for oropharyngeal (and sinonasal) tumors, not oral cavity cancers, where it lacks consistent prognostic value.
- A new "branchial cleft cyst" in an adult over ~40 is oropharyngeal cancer until proven otherwise: a cystic level II node from an HPV+ tonsil/base-of-tongue primary can look radiologically and cytologically like a benign branchial cleft cyst; exclude the primary, don't just drain it.
- Smoking still matters even when HPV+: tobacco use in HPV+ oropharyngeal disease confers an intermediate prognosis, between HPV+ non-smokers (best) and HPV- smokers (worst).
- "Base of tongue" is oropharynx, "oral tongue" is oral cavity: the circumvallate papillae are the dividing landmark, and misclassification is a common registry and exam error.

### Anatomy diagrams (5)

**Diagram: Neck nodal levels I-VII**

Beyond levels I-VI: level VII (superior mediastinal) and the IIA/IIB, VA/VB split. Name each, then reveal.

_Image source: Cervical Lymph Node Levels I-VII Classification. Wikimedia Commons._
- Level Ia (submental): between the anterior bellies of digastric, above the hyoid; drains the chin, lower lip, and floor of mouth.
- Level Ib (submandibular): submandibular triangle, around the submandibular gland; drains the oral cavity and anterior face.
- Level IIa (upper jugular, anterior to the spinal accessory nerve, CN XI): drains the oral cavity, nasopharynx, oropharynx, larynx, and parotid.
- Level IIb (upper jugular, posterior to the spinal accessory nerve, CN XI): separated from IIa by CN XI.
- Level III (mid jugular): hyoid to cricoid; drains the larynx, hypopharynx, and oropharynx.
- Level IV (lower jugular): cricoid to clavicle; drains the larynx, thyroid, hypopharynx, and cervical esophagus.
- Level Va (posterior triangle, above the cricoid plane): drains the nasopharynx and posterior scalp/neck.
- Level Vb (posterior triangle, below the cricoid plane): drains the thyroid, with the transverse cervical nodes.
- Level VI (central compartment/thyroid bed): pretracheal, paratracheal, and prelaryngeal (Delphian) nodes; drains the thyroid, glottic/subglottic larynx, hypopharynx, and cervical esophagus.

**Diagram: Parotid gland & facial nerve**

Why facial-nerve function is documented before and after every parotid operation. Name each, then reveal.

_Image source: Parotid Region and Facial Nerve Branching Pattern. Royal College of Surgeons of Ireland (CC BY-NC-SA)._
- Temporal branch: crosses the zygomatic arch to innervate the frontalis and orbicularis oculi; injury causes brow ptosis and difficulty closing the eye.
- Zygomatic branch: contributes to orbicularis oculi innervation, helping close the eye.
- Buccal branch (upper division): innervates the buccinator and the upper lip elevators.
- Buccal branch (lower division): innervates the buccinator and orbicularis oris.
- Facial nerve trunk (CN VII): exits the stylomastoid foramen and enters the parotid, where it divides into its terminal branches.
- Stylomastoid foramen: skull-base exit point of the facial nerve, just before it enters the parotid gland.
- Parotid gland: the largest salivary gland; the facial nerve runs through it, dividing it into superficial and deep lobes.
- Marginal mandibular branch: runs near the mandibular border to the lower lip depressors; injury causes an asymmetric smile.
- Cervical branch: innervates platysma.
- Stensen's duct: opens opposite the upper second molar.

**Diagram: Oral cavity vs oropharynx (sagittal)**

The subsite boundary that separates tobacco-driven from HPV-driven cancer. Name each, then reveal.

_Image source: Oral Cavity vs. Oropharynx Boundaries (Sagittal Section). OpenStax._
- Superior lip: part of the oral cavity.
- Superior labial frenulum: midline mucosal fold connecting the upper lip to the gingiva.
- Gingivae (gums): mucosa overlying the alveolar bone and tooth roots.
- Palatoglossal arch: the anterior tonsillar pillar; marks the oral cavity-oropharynx boundary.
- Fauces: the archway connecting the oral cavity to the oropharynx.
- Palatopharyngeal arch: the posterior tonsillar pillar, behind the palatine tonsil.
- Hard palate: bony anterior roof of the mouth; part of the oral cavity.
- Soft palate: mobile posterior palate; part of the oropharynx.
- Uvula: midline muscular projection from the free edge of the soft palate.
- Cheek (buccal mucosa): part of the oral cavity; a classic subsite for tobacco/alcohol-driven squamous cell carcinoma.
- Palatine tonsil: lies between the anterior and posterior tonsillar pillars; the most common oropharyngeal subsite for HPV-driven squamous cell carcinoma.
- Tongue (undersurface): the anterior two-thirds is oral cavity; the base of tongue (posterior third) is oropharynx.
- Lingual frenulum: midline mucosal fold connecting the tongue to the floor of mouth.
- Opening of the submandibular (Wharton's) duct: at the sublingual caruncle, lateral to the lingual frenulum.
- Molars: posterior grinding teeth.
- Premolars: teeth between the canines and molars.
- Cuspid (canine): pointed tooth used for tearing.
- Gingivae (gums): mucosa overlying the lower alveolar bone and tooth roots.
- Incisors: anterior cutting teeth.
- Inferior labial frenulum: midline mucosal fold connecting the lower lip to the gingiva.
- Oral vestibule: the space between the lips/cheeks and the teeth/gingiva.
- Inferior lip: part of the oral cavity.

**Diagram: The three major salivary glands and their ducts**

Parotid, submandibular, and sublingual, together with where each duct empties into the mouth. Name each, then reveal.

_Image source: Major Salivary Glands and Ducts (Parotid, Submandibular, Sublingual). KnowledgeWorks Global Ltd. (CC BY)._
- Parotid (Stensen's) duct: crosses the masseter and opens opposite the upper second molar.
- Opening of the submandibular (Wharton's) duct: at the sublingual caruncle in the floor of the mouth.
- Sublingual gland: smallest major salivary gland, in the floor of the mouth; drains via multiple small ducts near the sublingual caruncle.
- Submandibular (Wharton's) duct: runs an uphill course from the gland to the sublingual caruncle, the classic site for salivary stones.
- Accessory parotid gland: a separate lobule of parotid tissue lying along Stensen's duct, anterior to the main gland.
- Parotid gland: the largest major salivary gland, overlying the mandibular ramus below the ear.
- Body of mandible: bony landmark separating the parotid and submandibular regions.
- Submandibular gland: sits below the body of the mandible; classic site for sialolithiasis given its uphill duct course.

**Diagram: Thyroid and parathyroid glands with the recurrent laryngeal nerve**

Two lobes, one isthmus, four parathyroids, and a nerve at risk on each side. Name each, then reveal.

_Image source: Thyroid and Parathyroid Glands, Vasculature, and Recurrent Laryngeal Nerve. Royal College of Surgeons of Ireland (CC BY-NC-SA)._
- Hyoid bone: superior bony landmark above the thyrohyoid membrane and larynx.
- Thyrohyoid membrane: connects the hyoid bone to the thyroid cartilage; pierced by the internal laryngeal nerve and superior laryngeal vessels.
- Superior laryngeal nerve: its external branch runs with the superior thyroid artery and is at risk during upper-pole ligation, causing voice pitch change if injured.
- Superior thyroid artery: first branch of the external carotid artery, supplying the upper pole of the thyroid.
- Superior thyroid artery: first branch of the external carotid artery, supplying the upper pole of the thyroid.
- Vagus nerve (CN X): runs within the carotid sheath and gives off the recurrent laryngeal nerve.
- Right lobe of thyroid gland: joined to the left lobe by the isthmus, anterior to the trachea.
- Left lobe of thyroid gland: joined to the right lobe by the isthmus, anterior to the trachea.
- Common carotid artery: runs in the carotid sheath lateral to the thyroid lobe.
- Common carotid artery: runs in the carotid sheath lateral to the thyroid lobe.
- Superior parathyroid gland: usually found at a fairly consistent location on the posterior thyroid capsule, near the cricothyroid junction.
- Superior parathyroid gland: usually found at a fairly consistent location on the posterior thyroid capsule, near the cricothyroid junction.
- Inferior parathyroid gland: more variable in location than the superior gland; can be found anywhere from the thyroid capsule down into the mediastinum.
- Inferior parathyroid gland: more variable in location than the superior gland; can be found anywhere from the thyroid capsule down into the mediastinum.
- Inferior thyroid artery: branch of the thyrocervical trunk; runs close to the recurrent laryngeal nerve, so ligation near the gland must be done carefully.
- Recurrent laryngeal nerve: runs in the tracheoesophageal groove; injury causes vocal fold paralysis and hoarseness.
- Recurrent laryngeal nerve: runs in the tracheoesophageal groove; injury causes vocal fold paralysis and hoarseness.
- Subclavian artery: gives rise to the inferior thyroid artery via the thyrocervical trunk.
- Subclavian artery: gives rise to the inferior thyroid artery via the thyrocervical trunk.
- Trachea: the thyroid gland wraps around its anterior and lateral surface.

### Clinical blocks (19)

**[unknown-primary] The unknown-primary workup for a neck mass**

- FNA first: never open biopsy first.
- If FNA shows squamous cell carcinoma, examine and image the likely primary sites (base of tongue, tonsil, nasopharynx, hypopharynx), plus p16 (HPV surrogate) and EBV testing on the FNA/biopsy specimen, since a positive result points strongly toward an oropharyngeal or nasopharyngeal source respectively.
- PET-CT and panendoscopy with directed/blind biopsies (including tonsillectomy of the ipsilateral tonsil) if no primary is found on exam/imaging.

**[hpv-oropharyngeal] HPV-associated oropharyngeal cancer**

Rising incidence, typically in younger, non-smoking patients. p16 immunohistochemistry is the standard surrogate marker for HPV-driven tumors (types 16/18 most implicated) and carries a better prognosis than HPV-negative disease at the same stage, reflected in a separate staging system.
Pitfall: a cystic neck node from an HPV+ oropharyngeal primary can look radiologically and even cytologically like a benign branchial cleft cyst. A new 'branchial cleft cyst' in an adult over ~40 needs the primary excluded, not just drained.

**[nasopharyngeal-carcinoma] Nasopharyngeal carcinoma (NPC): the EBV-associated cancer everyone should recognize early**

Endemic in southern China/Southeast Asia (also elevated in North Africa), strongly associated with Epstein-Barr virus (EBV); salted/preserved-food diet and genetic susceptibility contribute. Importantly, tobacco and alcohol are far less central than for other head & neck cancers, and NPC readily occurs in never-smokers.
Classic presentation, driven by the tumor's nasopharyngeal location:

- A painless neck mass (nodal metastasis), often the presenting sign.
- A unilateral middle-ear effusion/hearing loss in an adult, from Eustachian tube obstruction.
- Epistaxis or nasal obstruction.
- With skull-base extension, cranial neuropathies (CN VI most classically, causing diplopia).Workup: nasopharyngoscopy with biopsy of the primary; EBV serology/plasma EBV DNA supports diagnosis and is used to track treatment response and detect recurrence; MRI of the skull base/neck for local extent and nodal disease.
Treatment: NPC is highly radiosensitive, so primary treatment is radiation (often with concurrent chemotherapy for locoregionally advanced disease), unlike most oral cavity/oropharyngeal SCC, where surgery is typically first-line.

**[thyroid-nodule-workup] Thyroid nodule: the workup order**

- TSH first: if low/suppressed, get a radionuclide scan.
- Ultrasound: assess size and suspicious features (TI-RADS: microcalcifications, taller-than-wide shape, irregular margins, marked hypoechogenicity) to decide if FNA is warranted.
- FNA, reported by the Bethesda System (categories I-VI, from non-diagnostic to malignant), guides surgery vs surveillance."Hot" vs "cold" on radionuclide scan:

- Hot nodule: autonomously functioning, suppresses TSH, takes up tracer more than surrounding tissue. Rarely malignant, so it does not need FNA; manage as hyperfunctioning thyroid tissue.
- Cold nodule: normal or low tracer uptake. Carries a higher relative malignancy risk, so it needs FNA per size/ultrasound (TI-RADS) criteria.[figure: Thyroid nodule workup order: TSH, then ultrasound (TI-RADS), then FNA (Bethesda).]ACR TI-RADS scoring:
Feature categoryFeature (points)CompositionCystic/spongiform (0); mixed cystic-solid (1); solid (2)EchogenicityAnechoic (0); hyper-/isoechoic (1); hypoechoic (2); very hypoechoic (3)ShapeWider-than-tall (0); taller-than-wide (3)MarginSmooth/ill-defined (0); lobulated/irregular (2); extrathyroidal extension (3)Echogenic fociNone/comet-tail (0); macrocalcification (1); peripheral/rim (2); punctate echogenic foci/microcalcifications (3)LevelPointsSuspicionFNA if &ge;Follow-up US if &ge;TR10BenignNo FNANoneTR22Not suspiciousNo FNANoneTR33Mildly suspicious2.5 cm1.5 cmTR44-6Moderately suspicious1.5 cm1.0 cmTR5&ge;7Highly suspicious1.0 cm0.5 cmBethesda System for Reporting Thyroid Cytopathology (2023, 3rd edition):
CategoryName (2023)ROM (%, NIFTP=ca)Usual managementINondiagnostic5-20Repeat FNA under ultrasound guidanceIIBenign2-7Clinical + sonographic follow-upIIIAtypia of undetermined significance (AUS)~22 (13-30)Repeat FNA, molecular testing, or diagnostic lobectomy; subclassify AUS-nuclear (higher ROM) vs AUS-other (lower ROM)IVFollicular neoplasm (or oncocytic follicular neoplasm)~30 (23-34)Molecular testing or diagnostic lobectomyVSuspicious for malignancy~74 (67-83)Lobectomy or total thyroidectomyVIMalignant~97 (97-100)Lobectomy or total thyroidectomy (per tumor type)ROMs shown are inclusive of NIFTP counted as malignant; excluding NIFTP lowers the indeterminate-category ROMs.

**[indeterminate-nodule-molecular] Molecular testing for indeterminate thyroid nodules (Bethesda III/IV)**

Bethesda III and IV are the "indeterminate" categories (ROM ~22% and ~30%), where cytology alone cannot separate benign from malignant follicular-patterned lesions. Rather than sending every one to diagnostic lobectomy, molecular testing on the FNA sample is now standard to refine risk:

- Commercial tests: ThyroSeq v3 (DNA/RNA next-generation sequencing panel) and Afirma GSC (RNA-based gene sequencing classifier) are the two most used; ThyGeNEXT/ThyraMIR is a third (mutation + microRNA).
- How they're used: primarily as rule-out tests: all have high negative predictive value (~96-97%), so a benign/negative result supports surveillance instead of surgery, avoiding unnecessary operations. A positive result raises malignancy risk and generally prompts surgery.
- Specific drivers matter: a BRAF V600E mutation or RET fusion is essentially diagnostic of papillary thyroid carcinoma; RAS-like mutations tend toward less aggressive disease.Common mutations to know:

- BRAF V600E: the most common driver in papillary thyroid carcinoma; also associated with radioactive iodine (RAI) resistance.
- RET: RET fusions occur in papillary thyroid carcinoma; RET point mutations are the driver in medullary thyroid carcinoma (see pearl below).
- RAS: seen in follicular-patterned lesions (follicular adenoma, follicular carcinoma, and the follicular variant of papillary carcinoma); tends toward less aggressive behavior.Pearl, MEN syndromes and medullary thyroid cancer: germline RET proto-oncogene mutations cause MEN2A, MEN2B, and familial (hereditary) medullary thyroid carcinoma. Medullary thyroid cancer arises from parafollicular C-cells, not follicular cells, and secretes calcitonin as a tumor marker.

**[thyroid-surgery-extent] Extent of thyroid surgery: lobectomy vs total thyroidectomy**

The historical "total thyroidectomy for any cancer >1 cm" paradigm has shifted toward de-escalation. Per the 2025 ATA guidelines:

- Lobectomy is the initial procedure for unifocal, intrathyroidal, node-negative differentiated thyroid cancer &le;2 cm (cT1N0M0): lower complication rates, no lifelong levothyroxine in most patients, equivalent survival.
- For >2-4 cm (cT2N0M0) low-risk unilateral disease, lobectomy may be preferred, but total thyroidectomy is an option (enables radioactive iodine and eases surveillance); counsel about a ~20% chance of needing completion thyroidectomy.
- Total thyroidectomy is indicated for tumors >4 cm, gross extrathyroidal extension, clinically apparent nodal (cN1) or distant (cM1) metastasis, bilateral disease, or when postoperative RAI is planned.
- Risk/benefit tradeoff: total thyroidectomy carries higher rates of recurrent laryngeal nerve injury and hypocalcemia than lobectomy, driving the extent-of-surgery decision.Levothyroxine after surgery:

- Total thyroidectomy: universal, lifelong levothyroxine supplementation.
- Lobectomy: uncommon; most patients with a healthy remaining lobe stay euthyroid, though a minority eventually need supplementation.

**[salivary-tumours] Salivary gland tumors: prevalence and red-flag features**

Roughly 80% of parotid tumors are benign, and 80% of those benign tumors are pleomorphic adenoma (the most common salivary neoplasm overall). The most common malignant parotid tumor is mucoepidermoid carcinoma. The single most important red flag on exam: facial nerve weakness with a parotid mass is a malignant sign until proven otherwise. A benign tumor essentially never causes facial weakness.

**[salivary-gland-spectrum] The salivary gland spectrum: beyond pleomorphic adenoma**

Approximately 80% of parotid tumors are benign, and approximately 80% of those are pleomorphic adenoma, the two most common parotid entities. A well-rounded differential adds:

- Warthin tumor (papillary cystadenoma lymphomatosum): the second most common benign parotid tumor; classically an elderly male smoker, and unique among salivary tumors for being bilateral or multifocal in up to ~10% of cases.
- Adenoid cystic carcinoma: more often arises in the minor salivary glands (classically the palate) than the parotid. The hallmark is perineural invasion: pain or numbness disproportionate to the size of the mass. It behaves indolently but relentlessly, with a tendency for late distant metastasis (often to lung) even after apparently successful local treatment.
- Acute bacterial sialadenitis: typically the parotid, in a dehydrated, debilitated, or post-operative patient (reduced salivary flow lets bacteria ascend the duct), with painful, tender, unilateral swelling and purulent discharge expressible from the duct; Staph. aureus is the classic organism. Treat with hydration, sialagogues/massage, and antibiotics.
- Viral parotitis (mumps): typically bilateral, with a viral prodrome, in an unvaccinated or under-vaccinated patient. Self-limited, supportive care only.

**[hypopharyngeal-cancer] Hypopharyngeal cancer: prognostic factors and latent presentation**

Three subsites: the pyriform sinus (the most common site), the postcricoid region, and the posterior pharyngeal wall. Unlike glottic cancer (which causes hoarseness early), the hypopharynx is roomy with sparse early symptoms. Patients often present late with a neck mass, progressive dysphagia, or referred otalgia, by which point disease is frequently locally advanced. This late presentation is the main reason hypopharyngeal cancer carries a worse prognosis than most other head & neck subsites.
Plummer-Vinson (Paterson-Kelly) syndrome (iron-deficiency anemia, an esophageal web, and dysphagia, classically in middle-aged women) is a rare but classic predisposing condition specifically for postcricoid carcinoma; correcting the anemia and dilating the web don't substitute for excluding malignancy.

**[neck-dissection-classification] Neck dissection: the three classes to know**

Named for how much beyond the lymph nodes themselves is sacrificed. Modern head & neck surgery favors the least aggressive dissection that still adequately treats the disease. A selective neck dissection is now standard for many cN0 (clinically node-negative) necks.

| Type | What's removed | What's preserved |
| --- | --- | --- |
| Radical neck dissection | All lymph node levels I-V | Nothing extra spared: sacrifices SCM, internal jugular vein, and spinal accessory nerve |
| Modified radical neck dissection | All lymph node levels I-V | One or more of SCM / IJV / spinal accessory nerve preserved |
| Selective neck dissection | Only the level(s) at highest risk for the specific primary (e.g., levels I-III for oral cavity) | All non-lymphatic structures (SCM, IJV, spinal accessory nerve) preserved |

**[tnm-mdt] Staging, margins, and the multidisciplinary tumor board**

Head & neck cancers are staged with TNM (tumor size/invasion, nodal spread, distant metastasis), which drives treatment choice (surgery vs chemoradiation vs both). Cases are reviewed at a multidisciplinary tumor board (surgery, radiation oncology, medical oncology, pathology, radiology) before treatment starts. This is standard of care, not a formality.
AJCC 8th edition, HPV-mediated (p16+) oropharyngeal SCC:
ComponentCategoryDefinitionTT0No primary identified (p16+ node)T1&le;2 cmT2>2 cm to &le;4 cmT3>4 cm, or extension to lingual surface of epiglottisT4Invades larynx, extrinsic tongue muscle, medial pterygoid, hard palate, mandible, or beyondClinical N (cN)N0No regional nodesN1&ge;1 ipsilateral node, none >6 cmN2Contralateral or bilateral nodes, none >6 cmN3Any node >6 cmPathological N (pN)N0No positive nodesN1&le;4 positive nodesN2>4 positive nodesMM0 / M1No distant metastasis / distant metastasisClinical stage (RT/chemoRT)IT0-T2, N0-N1, M0IIT0-T2 N2, or T3 N0-N2, M0IIIT0-T3 N3, or T4 N0-N3, M0IVAny T, any N, M1Pathological stage (surgery)IT0-T2, N0-N1, M0IIT0-T2 N2, or T3-T4 N0-N1, M0IIIT3-T4 N2, M0IVAny T, any N, M1

**[cancer-immunotherapy-intro] Cancer immunotherapy: the fundamentals**

Normally, PD-1 (on T-cells) binding PD-L1 (on tumor or immune cells) switches the T-cell off, letting the tumor evade immune attack. Checkpoint inhibitors block that interaction so T-cells can recognize and kill tumor cells. This is the relevant immunotherapy class in head & neck cancer, with pembrolizumab and nivolumab (anti-PD-1 antibodies) as the drugs to know.
This is fundamentally different from traditional cytotoxic chemotherapy: chemotherapy kills rapidly dividing cells directly, while checkpoint inhibitors work by releasing the brakes on the patient's own immune system.
PD-L1 CPS (Combined Positive Score) quantifies how much PD-L1 the tumor expresses, and it directly guides treatment selection (see KEYNOTE-048, below): higher CPS predicts greater benefit from checkpoint inhibitor monotherapy, while lower CPS tumors generally still need chemotherapy on board.
Immune-related adverse effects to know, from unleashing the immune system broadly rather than targeting the tumor alone:

- Colitis (diarrhea, abdominal pain)
- Pneumonitis (cough, dyspnea)
- Thyroiditis and other endocrinopathies (thyroid dysfunction, hypophysitis, adrenal insufficiency)
- Hepatitis (transaminitis)

**[systemic-therapy-rm] First-line systemic therapy: recurrent/metastatic HNSCC**

The pivotal trial is KEYNOTE-048. Two category-1 first-line options for recurrent/metastatic, non-nasopharyngeal HNSCC:

- Pembrolizumab monotherapy: for PD-L1 CPS &ge;1 tumors.
- Pembrolizumab + platinum (cisplatin or carboplatin) + 5-FU ("chemoimmunotherapy"): appropriate for any CPS, including CPS <1.How CPS guides the choice:

- Greatest monotherapy benefit is in CPS &ge;20 (median overall survival 14.9 vs 10.7 months vs the older EXTREME regimen).
- In CPS 1-19, adding chemotherapy tends to improve disease control.
- Practical pattern: favor monotherapy for CPS &ge;20, and chemoimmunotherapy for lower CPS or when rapid tumor shrinkage (high disease burden) is needed.The older EXTREME regimen (platinum/5-FU + cetuximab) remains an alternative when checkpoint inhibition isn't appropriate.

**[systemic-therapy-npc] First-line systemic therapy: nasopharyngeal carcinoma (NPC)**

NPC is handled separately from other HNSCC because of its distinct EBV-driven biology and radiosensitivity. First-line systemic therapy for recurrent/metastatic NPC is cisplatin/gemcitabine plus a PD-1 inhibitor (e.g., toripalimab).

**[free-flap-fundamentals] Free flap reconstruction: the fundamentals**

A free flap (free tissue transfer) is a block of tissue harvested with its own artery and vein from a distant donor site, disconnected completely, then microvascularly re-anastomosed to recipient vessels in the neck. Unlike a graft, a flap brings its own blood supply, so it survives independent of the wound bed's vascularity, critical in irradiated or poorly vascularized fields.
Three tiers of the reconstructive ladder, in ascending complexity:

- Local flap: adjacent tissue repositioned into the defect.
- Regional/pedicled flap: tissue rotated on an intact vascular pedicle (e.g., pectoralis major myocutaneous flap), limited by pedicle length/arc of rotation.
- Free flap: microvascular transfer from a distant site, freeing the surgeon from arc-of-rotation constraints.Microvascular free tissue transfer is now the accepted standard of care for reconstructing complex head and neck defects after tumor ablation.
Oncologic Rationale for Free Flap Reconstruction

- Reliable primary healing in irradiated tissue: protects against wound breakdown, fistula, and osteoradionecrosis in patients needing adjuvant chemoradiotherapy.
- Enables radical resection: the surgeon should never compromise tumor-free margins for an easier closure.
- Two-team approach: ablative and reconstructive teams work simultaneously, shortening operative time.
- Long-term stability: revascularized bone flaps resist resorption and maintain contour.How the flap is chosen, a matching exercise:

- Tissue composition needed: soft tissue only/fasciocutaneous, bulk/myocutaneous, or bone/osteocutaneous (composite/chimeric flaps combine bone and soft tissue on separate branches).
- Thinness/pliability: the tongue and floor of mouth need thin, pliable tissue; a bulky flap impairs function.
- Pedicle length and vessel caliber: must reach recipient neck vessels and match for anastomosis.
- Donor-site morbidity.
- Patient factors: body habitus, peripheral vascular disease affecting fibula candidacy, prior surgery, comorbidities.The anterolateral thigh, radial forearm, and fibula are the "workhorse" flaps, covering the large majority of reconstructions.

**[free-flap-soft-tissue-workhorses] Workhorse soft-tissue free flaps**

Fasciocutaneous and myocutaneous options for soft-tissue defects.

| Flap | Donor site | Pedicle vessel | Tissue type | Ideal defect / must-know point |
| --- | --- | --- | --- | --- |
| Radial forearm free flap (RFFF) | Volar forearm | Radial artery | Fasciocutaneous, thin and pliable | Workhorse for tongue and floor of mouth; long pedicle; sacrifices a major forearm artery |
| Anterolateral thigh (ALT) | Anterolateral thigh | Descending branch of lateral circumflex femoral artery | Fasciocutaneous ± muscle (chimeric) | Large skin island, long pedicle; bulky in high-BMI patients |
| Latissimus dorsi | Back | Thoracodorsal artery | Myocutaneous, large volume | Large-volume coverage (e.g., scalp); possible shoulder weakness |
| Rectus abdominis / DIEP | Lower abdomen | Deep inferior epigastric artery | Myocutaneous or perforator (DIEP spares muscle) | High-volume soft tissue; DIEP reduces hernia risk |

**[free-flap-osseous] Osseous (bone-containing) free flaps**

For mandible/maxilla defects, the gold standard for restoring continuity, occlusion, and a platform for dental implants.

| Flap | Donor site | Pedicle vessel | Must-know point |
| --- | --- | --- | --- |
| Fibula free flap (FFF) | Lateral leg | Peroneal artery | Workhorse for mandibular reconstruction; long bone tolerates multiple osteotomies and accepts dental implants; check three-vessel leg runoff first |
| Scapula / parascapular system | Lateral scapula | Circumflex scapular artery | Bone + large soft-tissue components (chimeric); best for maxillary/composite defects; shorter usable bone |
| Osteocutaneous radial forearm (OCRFFF) | Forearm | Radial artery | Thin bone + pliable skin; limited bone stock; risk of radial fracture |

**[free-flap-perioperative] Free flap perioperative principles (ERAS pathway)**

- Fluid management: avoid overload and under-resuscitation; aim for near-zero balance/goal-directed therapy.
- Vasopressors are not contraindicated intraoperatively.
- Restrictive transfusion: transfusion doesn't improve flap survival and is associated with more complications.
- Nutrition and multimodal, opioid-sparing analgesia.
- Flap monitoring: serial clinical checks (color, capillary refill, temperature, Doppler); the first 48-72 hours are highest risk for anastomotic thrombosis, and early recognition enables salvage.

**[free-flap-complications] Free flap complications and outcomes**

- Overall success rates exceed ~95% at experienced centers; pooled data show flap compromise in ~8% and complete flap failure in ~4%.
- The most common cause of flap loss is arterial or venous thrombosis at the anastomosis; venous congestion is more common and often more salvageable if caught early.
- Risk factors, non-modifiable: prior radiotherapy is strongest, plus diabetes and advanced age.
- Risk factors, modifiable/intraoperative: prolonged ischemia time, fluid overload, low albumin, need for intraoperative pedicle revision, postoperative alcohol withdrawal.
- Donor-site-specific morbidity: RFFF (tendon exposure/graft needs), fibula (gait/ankle issues, needs vascular runoff), latissimus (shoulder weakness).
- The feared late complication is carotid blowout, from wound breakdown/infection eroding neck vessels, the rationale for well-vascularized flap coverage over the carotid.

### Red flags
- Extranodal extension (ENE) or a positive margin on resection pathology: triggers treatment intensification to adjuvant concurrent chemoradiotherapy, not radiotherapy alone.
- Supraclavicular node (Virchow's node): think of a primary below the diaphragm (GI, GU) as well as head & neck; work up accordingly.
- Facial nerve weakness with a parotid mass: malignant until proven otherwise.
- Persistent oral ulcer, leukoplakia, or erythroplakia (>2-3 weeks) in a smoker: biopsy; erythroplakia carries a higher malignant-transformation risk than leukoplakia.
- Rapidly enlarging thyroid nodule, hoarseness, or a fixed/hard nodule: concern for malignancy with possible extrathyroidal extension (RLN involvement).
- Odynophagia + referred otalgia in a smoker: consider hypopharyngeal cancer; this presentation is easy to miss.
- New 'branchial cleft cyst' in an adult >~40: exclude a cystic nodal metastasis from an HPV+ oropharyngeal primary before assuming a congenital cyst.
- Trismus with a neck/parotid mass: suggests parapharyngeal space extension; involves the muscles of mastication.
- Unilateral middle-ear effusion in an adult, especially with epistaxis, nasal obstruction, or a new cranial neuropathy (e.g., diplopia): exclude nasopharyngeal carcinoma with nasopharyngoscopy, not just a course of decongestants.
- Pain or numbness out of proportion to the size of a minor salivary gland mass (e.g., a palatal lump): think perineural invasion from adenoid cystic carcinoma.

### Cases (7)

**Case [case-hpv-oropharyngeal]**

Stem: A 52-year-old non-smoker notices a painless right neck lump for a month. On exam there is a firm level II node and a subtle asymmetric fullness at the base of the tongue.

- Q: Given the profile (non-smoker, painless neck node), what should you specifically test for?
  A: p16 immunohistochemistry on FNA/biopsy. A positive result strongly suggests an HPV-associated oropharyngeal primary, which fits this non-smoking, middle-aged demographic far better than classic tobacco-driven head & neck cancer.

- Q: How does this change the prognosis and workup?
  A: HPV-associated oropharyngeal cancer carries a better prognosis stage-for-stage and is staged separately from HPV-negative disease. The workup still starts with FNA (not open biopsy), followed by exam/imaging of the base of tongue and tonsil, and often panendoscopy.

Teaching: [figure: Painless neck node with base-of-tongue fullness in a non-smoker, pointing to HPV-associated oropharyngeal cancer.]A painless neck node in an otherwise well, non-smoking, middle-aged patient is the classic setup for HPV-associated oropharyngeal cancer. Don't let 'non-smoker' lower your suspicion for head & neck cancer.

**Case [case-nasopharyngeal-carcinoma]**

Stem: A 48-year-old, recently emigrated from southern China, presents with three months of right-sided hearing loss and ear fullness and a new painless neck lump. Otoscopy shows a dull, retracted tympanic membrane with a visible fluid level but no history of an upper respiratory infection.

- Q: What unifying diagnosis explains the ear findings, the neck mass, and his background, and why?
  A: Nasopharyngeal carcinoma (NPC), endemic in southern China and strongly EBV-associated. The tumor obstructs the Eustachian tube, causing a unilateral middle-ear effusion, while cervical nodal metastasis produces the neck mass. A unilateral effusion in an adult is never 'just fluid' until the nasopharynx has been examined.

- Q: What confirms the diagnosis, and how does treatment differ from most other head & neck cancers?
  A: Nasopharyngoscopy with biopsy of the primary, plus EBV serology/plasma EBV DNA. Unlike most oral cavity/oropharyngeal SCC (surgery-first), NPC is highly radiosensitive and is primarily treated with radiation ± chemotherapy.

Teaching: Unilateral serous otitis media in an adult is a red flag, not routine ENT. Look at the nasopharynx before treating 'fluid in the ear.'

**Case [case-parotid-facial-weakness]**

Stem: A 64-year-old has a slowly enlarging right parotid mass over several months, now with new weakness of the right side of the face.

- Q: What does the facial weakness signify?
  A: Facial nerve involvement with a parotid mass is a red flag for malignancy. Benign parotid tumors (like pleomorphic adenoma) essentially never cause facial weakness because they don't invade the nerve.

- Q: What's the workup?
  A: Imaging (MRI) to assess extent, FNA for cytology, and surgical planning that accounts for probable nerve involvement. Patients need counseling that nerve sacrifice/reconstruction may be part of treatment if malignant.

Teaching: [figure: Enlarging parotid mass with new facial weakness signifying likely malignant nerve invasion.]A parotid mass is a low-stakes finding until the facial nerve is involved. Then it's a different conversation entirely.

**Case [case-adenoid-cystic-perineural]**

Stem: A 55-year-old has a slow-growing, painless 1.5 cm hard palate mass first noticed six months ago. She now reports intermittent numbness of the ipsilateral upper lip and cheek, out of proportion to the size of the lesion.

- Q: What tumor type does facial numbness out of proportion to lesion size suggest, and why?
  A: Adenoid cystic carcinoma, the most common malignancy of the minor salivary glands, such as the palate. Its hallmark is perineural invasion: tumor tracks along nerve sheaths (here, a branch of CN V2), producing sensory disturbance far beyond what the visible mass would predict.

- Q: What does perineural invasion mean for long-term follow-up, even after apparently complete local excision?
  A: ACC behaves indolently but relentlessly. It has a marked tendency for late distant metastasis (classically to lung), sometimes many years after treatment, so long-term surveillance continues well beyond the typical 5-year mark used for other head & neck cancers.

Teaching: Numbness, not just a mass, is the clue. Perineural spread can outrun what you can feel or see on the palate.

**Case [case-thyroid-nodule]**

Stem: A 45-year-old woman has an incidentally found 1.8 cm thyroid nodule. TSH is normal. Ultrasound shows a hypoechoic nodule that is taller than it is wide, with microcalcifications.

- Q: What do these ultrasound features suggest, and what's next?
  A: These are TI-RADS high-suspicion features (hypoechoic, taller-than-wide, microcalcifications), and they warrant FNA regardless of the nodule being otherwise asymptomatic.

- Q: How is the FNA result reported and acted on?
  A: By the Bethesda System (categories I-VI). A malignant or suspicious result (categories V-VI) generally leads to surgery (lobectomy or total thyroidectomy depending on features); indeterminate categories may use molecular testing to help decide.

Teaching: [figure: Suspicious thyroid nodule ultrasound features (TI-RADS) driving FNA, then Bethesda-reported cytology.]TSH and ultrasound features decide who gets an FNA, not nodule size alone.

**Case [case-virchows-node]**

Stem: A 58-year-old presents with a firm, non-tender left supraclavicular node and unintentional weight loss. Head and neck exam and endoscopy are unremarkable.

- Q: What does a supraclavicular node specifically raise concern for?
  A: Virchow's node (left supraclavicular, via the thoracic duct) classically signals a primary below the diaphragm (gastric, pancreatic, or other abdominal/pelvic malignancy), in addition to thoracic and head & neck sources.

- Q: How does the workup differ from a typical head & neck neck-mass workup?
  A: Still start with FNA, but when the head & neck exam is unremarkable, broaden imaging to include the chest and abdomen/pelvis rather than only searching the aerodigestive tract.

Teaching: Location changes the differential: a supraclavicular node earns a workup below the diaphragm, not just above it.

**Case [case-oral-leukoplakia]**

Stem: A 60-year-old smoker has a white patch on the lateral tongue that his dentist noticed 6 weeks ago. It does not wipe off and is not painful.

- Q: What is this lesion called, and what must be done?
  A: Leukoplakia, a white patch that can't be scraped off and isn't attributable to another cause. It is a premalignant lesion and requires biopsy to assess for dysplasia or early invasive carcinoma, not reassurance or watchful waiting alone.

- Q: What lesion carries even higher risk if seen instead?
  A: Erythroplakia (a red patch) is less common than leukoplakia but carries a substantially higher rate of dysplasia/malignancy on biopsy, and should be treated with even greater urgency.

Teaching: Any persistent oral white or red patch in a smoker gets biopsied. Location (lateral tongue, floor of mouth) is high-risk, and description alone can't exclude cancer.

### Flashcards (40)

**[neck-levels-full-card]** tags: HN, anatomy, milestones: MK1, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: Beyond levels I-VI, what is level VII, and how are levels II and V further subdivided?
- Back: Level VII = superior mediastinal nodes, below the sternal notch, relevant to thyroid/lower-neck cancer. Level II splits into IIA/IIB, and level V into VA/VB, both divided relative to the spinal accessory nerve.
- Source: Standard head & neck oncologic anatomy teaching.

**[parotid-anatomy-card]** tags: HN, anatomy, milestones: MK1, PC3, UKMLA: Facial/periorbital swelling, reviewer: (none)
- Front: The [...] (CN VII) runs directly through the parotid gland, dividing it into superficial and deep lobes.
- Back: The facial nerve (CN VII) runs directly through the parotid gland, dividing it into superficial and deep lobes. Its function is documented before and after every parotid operation, since new weakness can signal malignant invasion.[figure: Facial nerve running through and dividing the parotid gland into superficial/deep lobes.]
- Source: Standard salivary gland anatomy teaching.

**[submandibular-duct-card]** tags: HN, anatomy, milestones: MK1, UKMLA: Neck lump, reviewer: (none)
- Front: Why is the submandibular gland the classic site for salivary stones?
- Back: Wharton's duct runs an uphill, tortuous course from the gland to the sublingual caruncle, and submandibular saliva is more mucous/viscous. Both favor stone (sialolith) formation, causing meal-time pain and swelling.[figure: Wharton's duct's uphill course explaining why the submandibular gland is the classic site for salivary stones.]
- Source: Standard salivary gland anatomy teaching.

**[thyroid-parathyroid-anatomy-card]** tags: HN, anatomy, milestones: MK1, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: What two structures are at surgical risk during thyroidectomy, and what does injury to each cause?
- Back: Recurrent laryngeal nerve (runs near the tracheoesophageal groove): injury causes vocal fold paralysis/hoarseness (bilateral = airway emergency). Parathyroid glands (four, on the posterior thyroid capsule): inadvertent removal/devascularization causes post-operative hypocalcemia.[figure: Recurrent laryngeal nerve and parathyroid glands at surgical risk during thyroidectomy.]
- Source: Standard thyroid/parathyroid surgical anatomy teaching.

**[oral-vs-oropharynx-card]** tags: HN, anatomy, milestones: MK1, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: What structures define the oral cavity vs the oropharynx, and why does the distinction matter oncologically?
- Back: Oral cavity: lips, buccal mucosa, floor of mouth, hard palate, anterior 2/3 tongue, classically tobacco/alcohol-driven. Oropharynx: base of tongue, tonsil, soft palate, posterior pharyngeal wall, increasingly HPV-driven, with a better prognosis.[figure: Structures defining the oral cavity vs oropharynx and their differing oncologic drivers.]
- Source: NCCN Head and Neck Cancers Guideline: subsite definitions.

**[unknown-primary-card]** tags: HN, clinical, milestones: PC3, UKMLA: Neck lump, reviewer: (none)
- Front: Outline the workup for a neck mass with FNA showing squamous cell carcinoma but no obvious primary.
- Back: Examine/image the likely primaries: base of tongue, tonsil, nasopharynx, hypopharynx. Test the specimen for p16 (HPV surrogate → oropharyngeal source) and EBV (→ nasopharyngeal source). If still unlocalized: PET-CT and panendoscopy with directed biopsies (± ipsilateral tonsillectomy).
- Source: NCCN Head and Neck Cancers Guideline: unknown primary workup.

**[hpv-oropharyngeal-card]** tags: HN, clinical, milestones: PC3, MK3, UKMLA: Neck lump, reviewer: (none)
- Front: How does HPV-associated oropharyngeal cancer differ from classic tobacco-driven head & neck cancer?
- Back: Typically a younger, non-smoking patient; confirmed by p16 immunohistochemistry (surrogate for HPV 16/18); carries a better prognosis stage-for-stage, with its own separate staging system.
- Source: NCCN Head and Neck Cancers Guideline; standard oncology teaching on HPV-associated disease.

**[tors-deescalation-card]** tags: HN, clinical, milestones: PC3, MK3, UKMLA: Neck lump, reviewer: (none)
- Front: In carefully selected early-stage (T1-T2) HPV-positive oropharyngeal cancer, [...] allows pathology-driven treatment de-escalation, sometimes reducing or omitting adjuvant radiation.
- Back: In carefully selected early-stage (T1-T2) HPV-positive oropharyngeal cancer, transoral robotic surgery (TORS) with neck dissection allows pathology-driven treatment de-escalation, sometimes reducing or omitting adjuvant radiation (ECOG-3311). Adverse features (positive margin, ENE) still trigger adjuvant chemoradiotherapy.
- Source: ECOG-3311; standard head & neck oncology teaching on treatment de-escalation.

**[cystic-neck-met-pitfall-card]** tags: HN, clinical, milestones: PC3, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: Why is a new 'branchial cleft cyst' in an older adult a diagnostic trap?
- Back: A cystic neck mass from an HPV+ oropharyngeal cancer nodal metastasis can look identical, radiologically and even cytologically, to a benign branchial cleft cyst. A first-time 'branchial cleft cyst' presenting after ~age 40 needs the primary excluded (exam, p16 testing), not just drainage.
- Source: Standard head & neck oncology teaching on cystic nodal metastasis.

**[npc-epidemiology-card]** tags: HN, clinical, milestones: PC3, MK3, UKMLA: Neck lump, reviewer: (none)
- Front: Unlike most head and neck cancers, which are driven by tobacco and alcohol, nasopharyngeal carcinoma is strongly associated with [...] and occurs readily in never-smokers.
- Back: Unlike most head and neck cancers, which are driven by tobacco and alcohol, nasopharyngeal carcinoma is strongly associated with Epstein-Barr virus (EBV) and occurs readily in never-smokers. It's endemic in southern China and Southeast Asia, where diet and genetic susceptibility also contribute.
- Source: NCCN Head and Neck Cancers Guideline; standard oncology teaching on EBV-associated NPC.

**[npc-presentation-workup-card]** tags: HN, clinical, milestones: PC3, MK3, UKMLA: Neck lump, Hearing loss, RED FLAG, reviewer: (none)
- Front: What classic presentation and workup should nasopharyngeal carcinoma trigger?
- Back: Painless neck mass + unilateral middle-ear effusion/hearing loss in an adult (Eustachian tube obstruction) ± epistaxis/nasal obstruction ± cranial neuropathies (CN VI/diplopia) from skull-base extension. Workup: nasopharyngoscopy with biopsy, EBV serology/plasma EBV DNA, and MRI skull base/neck.
- Source: NCCN Head and Neck Cancers Guideline; standard oncology teaching on EBV-associated NPC.

**[npc-treatment-card]** tags: HN, clinical, milestones: PC3, MK3, UKMLA: Neck lump, reviewer: (none)
- Front: How does first-line treatment of NPC differ from most oral cavity/oropharyngeal SCC?
- Back: NPC is highly radiosensitive, so primary treatment is radiation (often with concurrent chemotherapy for locoregionally advanced disease), rather than the surgery-first approach used for most oral cavity/oropharyngeal squamous cell carcinoma.
- Source: NCCN Head and Neck Cancers Guideline.

**[thyroid-nodule-workup-card]** tags: HN, clinical, milestones: PC3, MK1, UKMLA: Neck lump, reviewer: (none)
- Front: What is the stepwise workup for a newly found thyroid nodule?
- Back: TSH first (a suppressed TSH → radionuclide scan; a 'hot' nodule is rarely malignant and skips FNA). Then ultrasound to assess suspicious features. Then FNA if features/size warrant it, reported by the Bethesda System.[figure: Stepwise thyroid nodule workup: TSH, then ultrasound, then FNA.]
- Source: American Thyroid Association guidelines on thyroid nodule management, 2015.

**[tirads-card]** tags: HN, clinical, milestones: PC3, UKMLA: Neck lump, reviewer: (none)
- Front: What ultrasound features raise suspicion for thyroid malignancy (TI-RADS)?
- Back: Microcalcifications, taller-than-wide shape, irregular/spiculated margins, marked hypoechogenicity, and extrathyroidal extension. More high-risk features → lower size threshold for recommending FNA.
- Source: American Thyroid Association / ACR TI-RADS.

**[bethesda-card]** tags: HN, clinical, milestones: PC3, UKMLA: Neck lump, reviewer: (none)
- Front: What does the Bethesda System do for a thyroid FNA result, and what changed in the 2023 update?
- Back: Standardizes thyroid FNA reporting into six categories (I nondiagnostic → VI malignant), each with an implied risk of malignancy that guides management from repeat FNA/surveillance up to surgery. The 2023 third edition gave each category a single name and split category III (AUS) into AUS-nuclear (higher ROM) and AUS-other (lower ROM). For indeterminate results (III and IV), molecular testing is now routinely used to refine the malignancy risk.CategoryName (2023)ROM (%, NIFTP=ca)Usual managementINondiagnostic5-20Repeat FNA under ultrasound guidanceIIBenign2-7Clinical + sonographic follow-upIIIAtypia of undetermined significance (AUS)~22 (13-30)Repeat FNA, molecular testing, or diagnostic lobectomy; subclassify AUS-nuclear vs AUS-otherIVFollicular neoplasm (or oncocytic follicular neoplasm)~30 (23-34)Molecular testing or diagnostic lobectomyVSuspicious for malignancy~74 (67-83)Lobectomy or total thyroidectomyVIMalignant~97 (97-100)Lobectomy or total thyroidectomy[figure: Bethesda System categories (I-VI), 2023 edition, for reporting thyroid FNA cytology and their associated management.]
- Source: The Bethesda System for Reporting Thyroid Cytopathology, 3rd ed. (Ali et al., Thyroid 2023).

**[molecular-testing-card]** tags: HN, clinical, milestones: PC3, MK1, UKMLA: Neck lump, reviewer: (none)
- Front: For an indeterminate (Bethesda III/IV) thyroid nodule, [...] is now routinely performed on the FNA sample to refine malignancy risk and reduce unnecessary surgery.
- Back: For an indeterminate (Bethesda III/IV) thyroid nodule, molecular testing (e.g., ThyroSeq v3 or Afirma GSC) is now routinely performed on the FNA sample to refine malignancy risk and reduce unnecessary surgery. These tests have high negative predictive value, so a benign/negative result supports surveillance; a BRAF V600E mutation or RET fusion is essentially diagnostic of papillary thyroid carcinoma.
- Source: Standard head & neck oncology teaching on molecular testing for indeterminate thyroid nodules.

**[thyroid-surgery-extent-card]** tags: HN, clinical, milestones: PC3, MK1, UKMLA: Neck lump, reviewer: (none)
- Front: Current ATA guidance favors [...] over total thyroidectomy for unifocal, intrathyroidal, node-negative differentiated thyroid cancer &le;2 cm.
- Back: Current ATA guidance favors thyroid lobectomy over total thyroidectomy for unifocal, intrathyroidal, node-negative differentiated thyroid cancer &le;2 cm, because it has fewer complications (recurrent laryngeal nerve injury, hypocalcemia) and avoids lifelong levothyroxine in most patients, with equivalent survival. Total thyroidectomy remains standard for tumors >4 cm, gross extrathyroidal extension, or clinical nodal/distant metastasis.
- Source: American Thyroid Association guidelines on thyroid nodule/cancer management, 2025 update.

**[extranodal-extension-card]** tags: HN, clinical, milestones: PC3, SBP1, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: In HPV-negative head & neck squamous cell carcinoma, [...] on pathology upstages nodal disease and is an indication for adjuvant chemoradiotherapy rather than radiotherapy alone.
- Back: In HPV-negative head & neck squamous cell carcinoma, extranodal extension (ENE) on pathology upstages nodal disease (to N3b clinically / pN2-3) and is an indication for adjuvant chemoradiotherapy (concurrent cisplatin) rather than radiotherapy alone: along with a positive surgical margin, per the EORTC 22931 and RTOG 9501 trials.
- Source: EORTC 22931; RTOG 9501; AJCC 8th edition staging manual.

**[parotid-rule-80s-card]** tags: HN, clinical, milestones: PC3, MK3, UKMLA: Facial/periorbital swelling, reviewer: (none)
- Front: What proportion of parotid tumors are benign, what is the most common benign entity, and what is the most common malignant one?
- Back: ~80% of parotid tumors are benign, and ~80% of those benign tumors are pleomorphic adenoma (the most common salivary neoplasm overall). The most common malignant parotid tumor is mucoepidermoid carcinoma.[figure: Parotid tumor prevalence: pleomorphic adenoma most common benign, mucoepidermoid carcinoma most common malignant.]
- Source: Standard head & neck oncology teaching on parotid tumor prevalence.

**[warthin-tumor-card]** tags: HN, clinical, milestones: PC3, MK3, UKMLA: Facial/periorbital swelling, reviewer: (none)
- Front: What is distinctive about Warthin tumor compared with other benign parotid tumors?
- Back: The second most common benign parotid tumor; classically an elderly male smoker. Unique among salivary tumors for being bilateral or multifocal in up to ~10% of cases, a helpful clue when a parotid mass turns out to be symmetric or multiple.
- Source: Standard salivary gland oncology teaching.

**[adenoid-cystic-carcinoma-card]** tags: HN, clinical, milestones: PC3, MK3, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: The hallmark feature of adenoid cystic carcinoma, which most often arises in the minor salivary glands such as the palate, is [...], causing pain or numbness out of proportion to the size of the mass.
- Back: The hallmark feature of adenoid cystic carcinoma, which most often arises in the minor salivary glands such as the palate, is perineural invasion, causing pain or numbness out of proportion to the size of the mass. Despite an indolent course, it has a tendency for late distant metastasis, often to the lung, even years after treatment.
- Source: Standard salivary gland oncology teaching.

**[sialadenitis-card]** tags: HN, clinical, milestones: PC3, MK3, UKMLA: Neck lump, reviewer: (none)
- Front: Acute bacterial sialadenitis typically causes painful, tender, unilateral parotid swelling, while viral parotitis from mumps is typically [...].
- Back: Acute bacterial sialadenitis typically causes painful, tender, unilateral parotid swelling, while viral parotitis from mumps is typically bilateral. Staph. aureus is the classic organism behind bacterial sialadenitis, treated with hydration, duct massage, and antibiotics.
- Source: Standard salivary gland infection teaching.

**[facial-weakness-parotid-card]** tags: HN, clinical, milestones: PC3, UKMLA: Facial/periorbital swelling, RED FLAG, reviewer: (none)
- Front: Why is facial nerve weakness with a parotid mass so significant?
- Back: Benign parotid tumors essentially never cause facial weakness. A mass with new facial nerve involvement is a red flag for malignancy until proven otherwise, and changes both workup urgency and surgical counseling.
- Source: Standard head & neck oncology teaching.

**[salivary-swelling-pattern-card]** tags: HN, clinical, milestones: PC3, UKMLA: Neck lump, reviewer: (none)
- Front: How do you distinguish a stone from a tumor in a salivary gland swelling?
- Back: Stone (sialolithiasis): swelling and pain that come with meals (salivary stimulation against an obstructed duct), most common in the submandibular gland. Tumor: a persistent, non-meal-related, often painless mass. Evaluate with imaging/FNA rather than assuming a stone.
- Source: Standard salivary gland teaching.

**[hypopharyngeal-subsites-card]** tags: HN, anatomy, milestones: PC3, MK1, UKMLA: Neck lump, Swallowing problems, RED FLAG, reviewer: (none)
- Front: The most common subsite for hypopharyngeal cancer is the [...]; because the hypopharynx is roomy with few early symptoms, patients often present late with locally advanced disease and a worse prognosis than most other head and neck subsites.
- Back: The most common subsite for hypopharyngeal cancer is the pyriform sinus; because the hypopharynx is roomy with few early symptoms, patients often present late with locally advanced disease and a worse prognosis than most other head and neck subsites.
- Source: NCCN Head and Neck Cancers Guideline: hypopharyngeal subsites; standard oncology teaching.

**[neck-dissection-classification-card]** tags: HN, clinical, milestones: PC3, MK1, UKMLA: Neck lump, reviewer: (none)
- Front: The neck dissection that removes only the lymph node level(s) at highest risk for the primary tumor, while preserving the SCM, internal jugular vein, and spinal accessory nerve, is called a [...].
- Back: The neck dissection that removes only the lymph node level(s) at highest risk for the primary tumor, while preserving the SCM, internal jugular vein, and spinal accessory nerve, is called a selective neck dissection. It's now standard for many clinically node-negative (cN0) necks, unlike a radical dissection, which sacrifices all three of those structures.
- Source: Standard head & neck surgical oncology teaching.

**[virchows-node-card]** tags: HN, clinical, milestones: PC3, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: What does a left supraclavicular node (Virchow's node) suggest?
- Back: A primary malignancy below the diaphragm (gastric, pancreatic, other abdominal/pelvic) that has spread via the thoracic duct, in addition to thoracic and head & neck primaries. Broaden imaging beyond the aerodigestive tract when the head & neck exam is unremarkable.
- Source: Standard oncology teaching on Virchow's node/Troisier's sign.

**[leukoplakia-erythroplakia-card]** tags: HN, clinical, milestones: PC3, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: Contrast leukoplakia and erythroplakia, and state the required next step for either.
- Back: Leukoplakia: a white patch that can't be wiped off/attributed to another cause, premalignant. Erythroplakia: a red patch, less common but a substantially higher rate of dysplasia/carcinoma on biopsy. Either finding, especially in a smoker, requires biopsy, not observation.
- Source: Standard oral oncology teaching on premalignant lesions.

**[tnm-staging-card]** tags: HN, clinical, milestones: PC3, UKMLA: Neck lump, reviewer: (none)
- Front: What does TNM staging capture, and why does it matter to a student?
- Back: T (primary tumor size/local invasion), N (regional nodal spread), M (distant metastasis). Together they drive the treatment pathway (surgery vs chemoradiation vs combined). Knowing the framework lets you understand why two patients with 'the same cancer' get very different treatment plans.
- Source: NCCN Head and Neck Cancers Guideline; AJCC TNM staging.

**[mdt-tumor-board-card]** tags: HN, clinical, milestones: SBP2, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: What is a multidisciplinary tumor board, and why is it standard of care?
- Back: A structured case review with surgery, radiation oncology, medical oncology, pathology, and radiology together, before treatment starts. It ensures staging and treatment planning reflect every specialty's input rather than one surgeon's view alone.
- Source: NCCN Head and Neck Cancers Guideline: multidisciplinary care standard.

**[dental-clearance-osteoradionecrosis-card]** tags: HN, clinical, milestones: SBP2, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: Because radiation permanently impairs jaw bone vascularity, extracting teeth from an already-irradiated mandible carries a real risk of [...], so high-risk teeth are cleared before radiotherapy begins.
- Back: Because radiation permanently impairs jaw bone vascularity, extracting teeth from an already-irradiated mandible carries a real risk of osteoradionecrosis, so high-risk teeth are cleared before radiotherapy begins. This non-healing exposed bone is difficult to treat once it occurs.
- Source: NCCN Head and Neck Cancers Guideline: pre-treatment dental evaluation.

**[plummer-vinson-card]** tags: HN, clinical, milestones: PC3, MK3, UKMLA: Neck lump, Swallowing problems, reviewer: (none)
- Front: Plummer-Vinson (Paterson-Kelly) syndrome, the triad of iron-deficiency anemia, an esophageal web, and dysphagia in a middle-aged woman, is a classic predisposing condition for [...] carcinoma.
- Back: Plummer-Vinson (Paterson-Kelly) syndrome, the triad of iron-deficiency anemia, an esophageal web, and dysphagia in a middle-aged woman, is a classic predisposing condition for postcricoid carcinoma. Correcting the anemia and dilating the web don't substitute for excluding malignancy.
- Source: Standard oncology teaching on Plummer-Vinson (Paterson-Kelly) syndrome.

**[free-flap-basics-card]** tags: HN, clinical, milestones: PC3, PC8, UKMLA: Neck lump, reviewer: (none)
- Front: A free flap is tissue transferred from elsewhere on the body with its own blood supply, then [...] at the defect site.
- Back: A free flap is tissue transferred from elsewhere on the body with its own blood supply, then microvascularly reconnected at the defect site. It's used to reconstruct large defects after resection of oral cavity, oropharyngeal, or mandibular tumors when local tissue can't close the gap.
- Source: Standard head & neck reconstructive surgery teaching.

**[free-flap-workhorse-pedicles-card]** tags: HN, clinical, milestones: PC3, PC8, UKMLA: Neck lump, reviewer: (none)
- Front: Name the pedicle vessel for the three workhorse free flaps: RFFF, ALT, and fibula.
- Back: Radial forearm free flap (RFFF) -> radial artery. Anterolateral thigh (ALT) -> descending branch of the lateral circumflex femoral artery. Fibula -> peroneal artery.
- Source: Standard head & neck reconstructive surgery teaching.

**[free-flap-osseous-choice-card]** tags: HN, clinical, milestones: PC3, PC8, UKMLA: Neck lump, reviewer: (none)
- Front: A defect that includes bone loss calls for what class of flap, and which one is the mandibular workhorse?
- Back: A bone defect calls for an osseous (bone-containing) flap. The fibula is the workhorse for mandibular reconstruction because its long bone stock tolerates multiple osteotomies and accepts dental implants.
- Source: Standard head & neck reconstructive surgery teaching.

**[free-flap-vs-graft-card]** tags: HN, clinical, milestones: PC3, PC8, UKMLA: Neck lump, reviewer: (none)
- Front: Why does a free flap survive in an irradiated wound bed when a skin graft would fail?
- Back: A free flap carries its own blood supply (microvascularly anastomosed to recipient vessels), so it survives independent of the wound bed's vascularity. A graft has no independent blood supply and depends entirely on the (often poorly vascularized, irradiated) bed to take.
- Source: Standard head & neck reconstructive surgery teaching.

**[free-flap-fibula-runoff-card]** tags: HN, clinical, milestones: PC3, PC8, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: What must be checked before harvesting a fibula free flap?
- Back: Adequate lower-limb arterial runoff (three-vessel leg circulation), to avoid harvesting the leg's dominant blood supply and compromising the foot.
- Source: Standard head & neck reconstructive surgery teaching.

**[free-flap-monitoring-window-card]** tags: HN, clinical, milestones: PC3, PC8, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: When is a free flap at highest risk of failure, and what's the classic early salvageable finding?
- Back: The first 48-72 hours after surgery, from anastomotic thrombosis. Venous congestion is the classic early finding and is often salvageable if caught quickly; arterial thrombosis is less common but less forgiving.
- Source: Standard head & neck reconstructive surgery teaching.

**[free-flap-risk-factor-card]** tags: HN, clinical, milestones: PC3, PC8, UKMLA: Neck lump, reviewer: (none)
- Front: What is the single biggest patient risk factor for free flap failure?
- Back: Prior radiotherapy to the surgical field, the strongest non-modifiable risk factor, ahead of diabetes and advanced age.
- Source: Standard head & neck reconstructive surgery teaching.

**[surveillance-card]** tags: HN, clinical, milestones: PC3, SBP2, UKMLA: Neck lump, reviewer: (none)
- Front: Why does head & neck cancer surveillance continue for years after treatment?
- Back: Risk of local/regional recurrence is highest in the first 2 years, but field cancerization (especially in tobacco/alcohol-driven disease) also raises the risk of a second primary tumor. Surveillance combines exam, endoscopy, and imaging on a schedule that tapers but continues for years.
- Source: NCCN Head and Neck Cancers Guideline: surveillance schedule.

---

## Module: Laryngology, Voice & Airway (`laryngology-voice-airway`)
- version: 0.3.0-draft
- status: DRAFT, pending faculty review. v0.2.0: added a depth pass covering genuinely missing sub-I topics, the unilateral vocal fold paralysis workup/management ladder (imaging along the RLN course, voice the
- facultyReviewer: ""
- curriculum anchors: UKMLA Content Map (GMC), scope anchor; owns Hoarseness and voice change, Stridor, Swallowing problems, Sore throat (laryngeal/airway angle), Cough (laryngeal angle), Epiglottitis, Tonsillitis (airway angle); ACGME Otolaryngology-HNS Milestones 2.0, primarily PC6 Laryngologic Disease, PC1 Airway Emergency & Management; AAO-HNSF Clinical Practice Guideline: Hoarseness (Dysphonia), 2018; UK undergraduate Delphi (Lloyd 2014), student-scope depth cap
- subtitle: The larynx in depth: subsites, vocal-fold pathology, the pediatric-airway differential, and the emergencies that live here.

### Anatomy notes

**The laryngeal cartilage framework** (tags: Thyroid cartilage · Cricoid cartilage · Arytenoid cartilages)

[figure: Overview of the thyroid, cricoid, arytenoid cartilages and epiglottis forming the laryngeal skeleton.]
- Thyroid cartilage (the 'Adam's apple') and cricoid cartilage (the only complete ring in the airway) form the outer skeleton.
- The paired arytenoid cartilages sit on the cricoid and rotate/glide to open and close the vocal folds.
- The epiglottis folds over the laryngeal inlet during swallowing to protect the airway.UnpairedPairedThyroidArytenoidCricoidCorniculateEpiglottisCuneiformThe corniculate and cuneiform cartilages are small paired cartilages within the aryepiglottic folds, above the arytenoids, that add structural support but no independent motion.

**Three subsites: supraglottis, glottis, subglottis** (tags: Laryngeal subsites · Cancer staging · Glottic cancer)

[figure: Coronal division of the larynx into supraglottis, glottis, and subglottis, the basis for cancer staging and airway localization.]
- The backbone of laryngeal cancer staging and of localizing airway pathology.
- Supraglottis (epiglottis, false folds, ventricle): rich lymphatics, so cancers present later with neck nodes.
- Glottis (true vocal folds): sparse lymphatics, so cancer causes hoarseness early and is often caught before it spreads.
- Subglottis (true folds to cricoid): the narrowest part of a child's airway and the site of subglottic stenosis.Clinical pearl: laryngeal cancer is strongly associated with tobacco and alcohol use. Because the glottis has sparse lymphatics, glottic cancers tend to present early with hoarseness and carry the best prognosis, while supraglottic and subglottic cancers, with richer lymphatic drainage or a more silent growth pattern, tend to present later and carry a worse prognosis.

**Vocal fold layers** (tags: Vocal fold cover-body model)

[figure: Layered cover-body microarchitecture of the vocal fold (epithelium, lamina propria, vocalis muscle).]
- The fold is layered: epithelium, then the lamina propria (superficial 'Reinke's space', intermediate, deep), then the vocalis muscle.
- Phonation depends on the epithelium and superficial lamina propria vibrating freely over the deeper layers (the 'cover-body' model).
- Scarring or swelling of Reinke's space (smoking, reflux, vocal abuse) stiffens the cover and roughens the voice.
- The vocalis muscle is the medial belly of the thyroarytenoid muscle: contracting it tenses and shortens the vocal fold, fine-tuning pitch and stiffness rather than opening or closing the airway.

**Laryngeal nerve supply** (tags: Superior laryngeal nerve · Recurrent laryngeal nerve)

[figure: Superior laryngeal nerve and recurrent laryngeal nerve innervation of the larynx and their courses.]
- Superior laryngeal nerve: external branch to cricothyroid (pitch); internal branch for sensation above the cords.
- Recurrent laryngeal nerve (RLN): every other intrinsic muscle (including the only abductor, posterior cricoarytenoid) and sensation below the cords.
- The RLN is long and asymmetric: left loops under the aortic arch, right under the subclavian artery.
- That is why hoarseness can be the first sign of a lung apex tumor, aortic aneurysm, or thyroid/mediastinal disease, and why the RLN is at risk in thyroid surgery.
- The cricothyroid is the only intrinsic laryngeal muscle not innervated by the RLN: it's supplied by the external branch of the superior laryngeal nerve (EBSLN) instead.MuscleActionEffectPosterior cricoarytenoidAbductor (the only one)Opens the airwayLateral cricoarytenoidAdductorCloses the airwayInterarytenoid (transverse arytenoid)AdductorCloses the airwayThyroarytenoid (vocalis)Adductor; relaxes/shortens the foldCloses the airway; lowers pitchCricothyroidTenses/lengthens the foldRaises pitchClinical pearl: non-recurrent laryngeal nerve: a rare anatomic variant, almost always on the right, seen with an aberrant right subclavian artery arising distal to the left subclavian (arteria lusoria). The 'recurrent' nerve then runs directly to the larynx without looping under a vessel, putting it at higher risk of injury during thyroid or neck surgery if it isn't recognized.
RLN injury vs EBSLN injury: RLN injury causes vocal fold paralysis (usually paramedian), producing a hoarse, breathy, weak voice and aspiration risk. EBSLN injury is subtler and often under-recognized: cricothyroid weakness causes loss of high pitch and projection, vocal fatigue, and difficulty singing or projecting the voice, without frank hoarseness at rest.

### Anatomy diagrams (4)

**Diagram: Laryngeal cartilage framework**

The skeleton of the airway and voice box. Name each cartilage, then reveal.

_Image source: Laryngeal Cartilage Framework (Thyroid, Cricoid, Arytenoids, Epiglottis). Illustration generated with Google Gemini._
- Hyoid bone: superior anchor for laryngeal suspension; tethers the epiglottis and thyrohyoid membrane above the larynx (not itself a laryngeal cartilage).
- Epiglottis: leaf-shaped elastic cartilage that folds down over the laryngeal inlet during swallowing to protect the airway.
- Thyroid cartilage: the largest laryngeal cartilage; its anterior fusion forms the laryngeal prominence ('Adam's apple').
- Cricothyroid membrane: the surface landmark for emergency cricothyrotomy, spanning between the thyroid and cricoid cartilages.
- Cricoid cartilage: the only complete cartilaginous ring in the airway; forms the lower boundary of the subglottis.
- Arytenoid cartilages: paired pyramidal cartilages that rotate and glide on the cricoid to open and close the vocal folds.
- Superior tracheal rings: the trachea begins just below the cricoid cartilage, continuing the airway into the chest.

**Diagram: Supraglottis · glottis · subglottis (coronal)**

The three subsites that stage laryngeal cancer and localize airway disease. Tap each covered label to name the subsite, then reveal.

_Image source: Laryngeal subsites. Illustration generated with Google Gemini._
- Epiglottis: leaf-shaped cartilage forming the top of the supraglottis; folds over the laryngeal inlet during swallowing.
- False vocal folds (vestibular folds): supraglottic mucosal folds above the true cords; do not vibrate for phonation, but can compensate for glottic insufficiency.
- Laryngeal ventricles (of Morgagni): the space between the false and true vocal folds; saccule herniation here causes a laryngocele.
- Supraglottis (epiglottis, false folds, ventricle): rich lymphatics, so cancer here presents late, often with a neck node.
- Laryngeal ventricle: the mucosal recess separating the false fold above from the true fold below.
- True vocal folds (vocal cords): the vibrating margin that produces voice; sparse lymphatics mean cancer here causes hoarseness early.
- True cords: the free edge of the vocal fold, formed by the vocalis muscle covered by the epithelium and lamina propria.
- Glottis (true vocal folds): sparse lymphatics, hoarseness presents early and cancer is often caught before it spreads.
- Rima glottidis: the airway opening between the true vocal folds; its widest point is at the posterior commissure during abduction.
- Cricoid cartilage: the only complete cartilaginous ring in the airway, forming the subglottic framework below the folds.
- Subglottis: narrowest part of a child's airway; site of subglottic stenosis (iatrogenic, idiopathic, or GPA).
- Trachea: continues the airway below the cricoid cartilage, made of incomplete (C-shaped) cartilaginous rings.

**Diagram: Recurrent laryngeal nerve course**

Why hoarseness can be the first sign of chest, thyroid, or mediastinal disease. Tap each covered label, then reveal.

_Image source: Recurrent laryngeal nerve course. Illustration generated with Google Gemini._
- Right vagus nerve: descends in the carotid sheath and gives off the right recurrent laryngeal nerve in the root of the neck.
- Right recurrent laryngeal nerve: loops under the right subclavian artery, a shorter and more direct course than the left.
- Right subclavian artery: the right RLN hooks under this vessel before ascending back to the larynx.
- Left vagus nerve: continues past the aortic arch before giving off the left recurrent laryngeal nerve, giving it a longer thoracic course.
- Left recurrent laryngeal nerve: loops under the arch of the aorta, exposing it to mediastinal, thyroid, and aortic pathology.
- Left subclavian artery: arises from the aortic arch; the left RLN passes medial to it, not around it.
- Arch of the aorta: the anatomic reason the left RLN has a longer, more clinically vulnerable course than the right.

**Diagram: Vocal fold layers in cross-section**

Why voice quality depends on layers, not just open vs closed. Name each layer, then reveal.

_Image source: Microarchitecture of the True Vocal Fold (Cover-Body Layers). Illustration generated with Google Gemini._
- Epithelium: the thin surface lining of the vocal fold, part of the vibrating 'cover'.
- Superficial lamina propria (Reinke's space): the pliable, gelatinous layer that lets the cover slide over the body; swells with smoking, reflux, or vocal abuse.
- Intermediate lamina propria: elastin-rich middle layer of the vocal ligament, part of the 'transition' between cover and body.
- Vocal ligament: formed by the intermediate and deep lamina propria together; the fibrous band spanning the anterior and posterior glottis.
- Vocalis (thyroarytenoid) muscle: the stiffer 'body' of the fold; its tension helps set pitch.
- Deep lamina propria: collagen-rich layer bordering the muscle, part of the 'transition' contributing to the vocal ligament.
- Cover: the epithelium plus superficial lamina propria; the pliable layer that vibrates freely in the mucosal wave.
- Body: the vocalis muscle plus the vocal ligament (intermediate and deep lamina propria); the stiffer layer the cover vibrates over.

### Clinical blocks (13)

**[dysphonia-guideline-principles] When to scope, and what not to prescribe (AAO-HNS 2018)**

Perform or refer for laryngoscopy if dysphonia fails to improve/resolve within 4 weeks, or expedited at any time if a serious cause is suspected (recent head/neck/chest surgery or intubation, neck mass, stridor/respiratory distress, tobacco use, professional voice user). Do not obtain CT/MRI for a primary voice complaint before visualizing the larynx. Do not routinely prescribe antireflux medication, corticosteroids, or antibiotics for dysphonia before laryngoscopy (strong recommendation against routine antibiotics).

**[vf-immobility] Vocal fold immobility: unilateral vs bilateral**

These are opposite problems: one leaks air, the other blocks it.

|  | Unilateral | Bilateral |
| --- | --- | --- |
| Voice | Breathy, weak | Often near-normal |
| Airway | Usually fine | Compromised: stridor, airway emergency |
| Aspiration risk | Yes (glottic incompetence) | Less (folds paramedian, close together) |
| Common causes | Thyroid surgery, lung/mediastinal mass, idiopathic, viral | Bilateral thyroid surgery injury, neurologic disease |

**[vf-paralysis-workup-management] Unilateral vocal fold paralysis: workup and the management ladder**

[figure: Workup of unilateral vocal fold paralysis requires imaging the entire RLN course; management ladder from voice therapy to thyroplasty.]Once laryngoscopy confirms an immobile fold, image the entire recurrent laryngeal nerve course, from skull base to the aortic arch and mediastinum, because a lesion anywhere along that path (lung apex tumor, thyroid mass, mediastinal node, aortic aneurysm) can be the cause, not just the neck.
Management ladder (for a fold unlikely to be from a treatable cause found above):

- Observe + voice therapy first: a genuine chance of spontaneous recovery persists for up to ~6-12 months, especially after a clear iatrogenic or viral insult.
- Injection augmentation (medialization laryngoplasty): an in-office or OR injection of a temporary filler into the paralyzed fold to push it toward midline. Used as a bridge while recovery is still possible, or for a likely-transient palsy (e.g. malignancy with expected nerve recovery after resection).
- Medialization thyroplasty (Type I thyroplasty: a permanent implant placed through a laryngeal framework surgery) ± arytenoid adduction for a larger posterior glottic gap. Reserved for once vocal fold motion is judged unlikely to recover.

**[benign-vf-lesions] Benign vocal fold lesions**

Distinguish by laterality, symmetry, and history.

| Lesion | Typical pattern | Cause / association |
| --- | --- | --- |
| Vocal nodules ('singer's nodules') | Bilateral, symmetric, mid-membranous | Chronic vocal abuse/misuse |
| Vocal polyp | Usually unilateral | A single voice-abuse or straining event, or reflux |
| Reinke's edema | Diffuse, bilateral, gelatinous swelling | Smoking (classic), also reflux/hypothyroidism; low, husky voice |
| Vocal fold cyst | Usually unilateral, submucosal | Congenital or acquired; often needs surgical excision |

**[vocal-process-granuloma] Vocal process (contact) granuloma**

[figure: Contact granuloma at the vocal process of the arytenoid, usually from intubation trauma or reflux.]A benign inflammatory lesion at the vocal process of the arytenoid (posterior glottis), usually unilateral. Causes: intubation trauma (the classic post-operative cause), chronic laryngopharyngeal reflux, or phonotrauma (hard glottal attack, habitual throat-clearing). Often presents with globus or throat pain that seems out of proportion to a small lesion on exam. Treat the underlying cause first, with reflux therapy or voice therapy to reduce hard glottal onset and throat-clearing, since surgical excision has a high recurrence rate if the driving behavior or reflux isn't addressed.

**[peds-airway-differential] The pediatric stridor differential**

Onset speed, fever, and posture separate these quickly.

| Condition | Key features |
| --- | --- |
| Croup (laryngotracheobronchitis) | Barky cough, low fever, gradual onset, steeple sign on X-ray. Usually viral (parainfluenza). |
| Epiglottitis (supraglottitis) | Rapid onset, high fever, drooling, tripod, muffled voice, thumbprint sign. Do not examine the throat/lie flat. |
| Bacterial tracheitis | Toxic-appearing, high fever, fails to improve with croup treatment, thick purulent secretions. |
| Foreign body aspiration | Sudden onset in a well child, choking episode, unilateral wheeze/decreased breath sounds. |

**[laryngeal-cancer-approach] Laryngeal cancer: risk and the staging logic**

[figure: Laryngeal cancer risk factors (synergistic tobacco/alcohol) and why subsite lymphatic drainage drives presentation timing.]Risk factors: tobacco and alcohol act synergistically (not just additively). Glottic Cancer: Early Presentation: the true vocal folds have sparse lymphatics, so even a small tumor causes hoarseness before it can spread. Persistent hoarseness therefore warrants laryngoscopy rather than being dismissed. Supraglottic and subglottic tumors are more lymphatic-rich or silent, so they tend to present later, with a neck mass or airway symptoms.
Staging, high-yield overview (a simplified look at T-stage logic, not full AJCC granularity):

| Stage | Glottic (rough guide) | Supraglottic / subglottic (rough guide) |
| --- | --- | --- |
| T1 | Confined to the vocal fold(s), normal mobility | Confined to one subsite, normal mobility |
| T2 | Extends to adjacent subsite, or impaired (not fixed) fold mobility | Extends to more than one subsite or adjacent structures |
| T3 | Vocal fold fixation, or invades paraglottic space/inner cartilage cortex | Fixation, or invades postcricoid/paraglottic/pre-epiglottic space |
| T4 | Invades through cartilage or extends outside the larynx | Invades through cartilage or extends outside the larynx |

**[laryngeal-cancer-n-stage] Laryngeal cancer: nodal staging, general logic**

N-stage follows the general head and neck nodal pattern rather than a larynx-specific scheme: N0 (no regional nodes), N1 (a single ipsilateral node &le;3 cm), through N2-N3 (larger, multiple, bilateral/contralateral, or extranodal-extension-positive nodes). Because the supraglottis drains to rich bilateral lymphatics, supraglottic tumors are more likely to present with nodal disease than glottic tumors of similar size.

**[early-glottic-cancer-treatment] Early glottic cancer (T1-T2, N0): TLM vs radiotherapy**

For early glottic SCC, the two standard single-modality options are transoral laser microsurgery (TLM) and definitive radiotherapy (RT). The only randomized trial and multiple cohorts/meta-analyses show equivalent overall and disease-specific survival and high larynx-preservation with either. TLM is a single procedure that provides margin histology, spares surrounding tissue, and preserves RT for later salvage; RT may give a smoother voice in some cases but irradiates the whole larynx and generally cannot be repeated. Choice depends on tumor exposure/extent (e.g., anterior commissure involvement), voice priorities, comorbidity, and team expertise. Advanced disease (T3-T4) is managed with larynx-preservation chemoradiation or total laryngectomy, decided at tumor board.

**[vcd] Vocal cord dysfunction (paradoxical vocal fold motion): the asthma mimic**

Vocal cord dysfunction, now termed inducible laryngeal obstruction (ILO) (paradoxical vocal fold motion), is paradoxical inspiratory adduction of the vocal folds causing episodic dyspnea/inspiratory stridor that mimics asthma and does not respond to bronchodilators. Spirometry between episodes is often normal; a symptomatic episode may show a truncated/flattened inspiratory flow-volume loop. The gold standard is laryngoscopy with provocation, and the consensus threshold for an abnormal study is &ge;50% laryngeal closure on inspiration (or Maat grade &ge;2). It frequently coexists with asthma (reported ~30-50% in difficult asthma), so the presence of asthma does not exclude it. Managed with speech-therapy breathing retraining and treating triggers (reflux, irritants, exercise, anxiety), not inhaler escalation.

**[subglottic-stenosis-differential] Subglottic stenosis: iatrogenic vs idiopathic vs GPA, and the other asthma mimic**

A second airway condition that gets mistaken for asthma, distinct from VCD above: subglottic stenosis is a fixed, structural narrowing that causes biphasic stridor and exertional dyspnea that does not respond to bronchodilators or inhaled steroids. Failure of 'asthma' therapy should prompt flexible laryngoscopy.

| Cause | Key features |
| --- | --- |
| Iatrogenic (post-intubation) | Most common cause overall, from prolonged or traumatic intubation, or cuff overinflation. |
| Idiopathic (iSGS) | Classically a healthy woman in her 30s-50s, never a smoker, with no identifiable cause. A diagnosis of exclusion. |
| Granulomatosis with polyangiitis (GPA) | Can present as isolated subglottic disease before other systemic features; screen with ANCA and ask about sinonasal/renal/pulmonary symptoms; limited disease can be ANCA-negative. |

**[subglottic-stenosis-management] Subglottic stenosis: the treatment ladder**

Three main approaches, trading durability against morbidity and voice:

- Endoscopic dilation (ED): least invasive, most common, but highest recurrence (~50% needing repeat surgery at 5 yr).
- Endoscopic resection with adjuvant medical therapy (ERMT): CO&#8322; laser incision + dilation plus adjuvant medical therapy (PPI, inhaled corticosteroid, &plusmn; trimethoprim-sulfamethoxazole); intermediate recurrence (~30% at 5 yr) with minimal voice impact.
- Cricotracheal resection (CTR): open resection, most durable (~5% recurrence at 5 yr) and best breathing/QoL, but greatest perioperative risk and worst long-term voice.Serial intralesional steroid injection (SILSI) is an increasingly used office-based adjunct, particularly effective in idiopathic disease. Always screen for GPA (ANCA) before labeling stenosis idiopathic, since active vasculitis is treated medically.

**[tracheostomy-in-depth] Tracheostomy: tube types, first-week emergencies, and decannulation**

[figure: Tracheostomy tube types, the first-postoperative-week dislodgement emergency, and decannulation pathway.]Tube variables:

- Cuffed (seals the airway, needed for mechanical ventilation or aspiration risk) vs uncuffed (spontaneously breathing patient with an adequate airway/swallow).
- Fenestrated (has an opening that lets air pass through the upper airway for voicing once capped, used later in the recovery pathway) vs non-fenestrated.
- Dual-cannula tubes have a removable inner cannula for routine cleaning without a full tube change.
- Sizing: the most commonly used tube in an average adult is a cuffed size 8 (roughly size 7-8), sized to the patient's airway and clinical need rather than by brand.The first postoperative week is the danger window. The stoma tract takes roughly 1-2 weeks to mature (epithelialize). Before then, a dislodged or accidentally decannulated tube must not be blindly reinserted, because the tract can be pushed into a false passage in the soft tissues of the neck rather than the trachea. Instead: ventilate/oxygenate via the mouth and nose with the stoma occluded, or orally intubate, while an experienced provider reinserts under direct visualization. A mature stoma tolerates safe direct reinsertion.
Speaking valves and the cuff: a Passy-Muir (one-way speaking) valve should never be used while the tracheostomy cuff is inflated. An inflated cuff blocks air from passing around the tube, up past the vocal folds, and out the mouth/nose; adding a one-way valve on top of that traps exhaled air with nowhere to escape, a dangerous air-trapping hazard. The cuff must be deflated first.
Decannulation protocol, in order, once the original indication has resolved:

- The patient is clinically stable (for head and neck cancer patients, generally at least 72 hours post-operatively).
- Cuff deflation is tolerated.
- A finger-occlusion test is tolerated, sometimes followed by a speaking valve trial.
- A capping trial for 24-48 hours: the cuff is deflated and the tracheostomy opening is capped so the patient breathes entirely through the upper airway, with continuous monitoring of oxygen saturation, respiratory effort, and sleep throughout.
- If the capping trial is passed, the tube is removed, ideally in the morning rather than overnight.
- Speech-language pathology swallow assessment and physiotherapy cough-strength assessment should precede decannulation.[figure: A tracheostomy tube seated in the trachea through the stoma.]

### Red flags
- Bilateral vocal fold paralysis (e.g., after total thyroidectomy): airway emergency, stridor at rest, may need reintubation or tracheostomy.
- Stridor + high fever + drooling + tripod in a child: epiglottitis. Do not examine the throat or lie the child flat.
- Croup that fails to improve or worsens: reconsider bacterial tracheitis (toxic-appearing, thick secretions).
- Sudden choking episode + unilateral wheeze in a child: foreign body aspiration. Needs bronchoscopy, not just observation.
- Progressive hoarseness >2-4 weeks in a smoker/drinker: get laryngoscopy to exclude laryngeal cancer.
- New breathing difficulty or stridor after thyroid/neck surgery: think bilateral RLN injury and assess the airway immediately.
- Stridor in a previously intubated patient: consider subglottic stenosis.
- Hoarseness that doesn't fit a laryngeal exam (normal cords, persistent voice change): consider a lesion along the entire RLN course (lung apex, mediastinum, thyroid) and image accordingly.
- Dislodged or decannulated tracheostomy tube in the first postoperative week: the stoma tract isn't mature, so don't blindly reinsert (risk of a false passage). Ventilate via the mouth/nose (occluding the stoma) or intubate orally while getting experienced help.
- Exertional dyspnea/biphasic stridor treated as 'asthma' that doesn't respond to inhalers, especially in a young, non-smoking woman: think subglottic stenosis (idiopathic or iatrogenic) and get flexible laryngoscopy.
- Total laryngectomy patient in respiratory distress: these are obligate neck breathers: there is no connection between the mouth/nose and the trachea. Never attempt oral intubation or bag-mask ventilation via the face; ventilate and intubate through the stoma.

### Cases (7)

**Case [case-bilateral-vf-paralysis]**

Stem: A 52-year-old woman, six hours after a total thyroidectomy, develops inspiratory stridor and increasing respiratory distress. Her voice sounds relatively preserved.

- Q: What is the leading diagnosis, and why is the voice deceptively normal?
  A: Bilateral vocal fold paralysis from bilateral recurrent laryngeal nerve injury. With both folds paramedian and close together, phonation can sound near-normal even though the airway is critically narrowed.

- Q: What is the immediate management?
  A: This is an airway emergency. Prepare for possible reintubation or emergency tracheostomy; get anesthesia/ENT immediately. Do not wait for imaging before securing the airway if distress is significant.

Teaching: Bilateral vocal fold paralysis is the opposite trap of unilateral: a near-normal voice can hide an airway that is about to close.

**Case [case-croup-vs-epiglottitis]**

Stem: A 2-year-old has one day of a barky, seal-like cough, mild fever, and a hoarse voice, worse at night. She is comfortable, drinking fluids, and sitting on her mother's lap without distress.

- Q: What is the most likely diagnosis, and what confirms it if imaged?
  A: Croup (laryngotracheobronchitis): viral, gradual onset, barky cough, low fever. The steeple sign on a frontal neck X-ray (subglottic narrowing) supports it, though imaging isn't required for a classic presentation.

- Q: What features would make you reconsider epiglottitis instead?
  A: Rapid onset, high fever, drooling, tripod positioning, muffled 'hot potato' voice, and looking toxic all point to epiglottitis, and in that case you avoid examining the throat or lying the child flat.

Teaching: [figure: Differentiating croup from epiglottitis in a young child by onset speed, fever, and toxicity.]Onset speed and toxicity separate croup from epiglottitis faster than any single sign.

**Case [case-laryngeal-cancer]**

Stem: A 67-year-old man with a 45 pack-year smoking history and daily alcohol use presents with progressive hoarseness for 3 months and 15 lb of unintentional weight loss.

- Q: What must be done before anything else?
  A: Flexible laryngoscopy to directly visualize the vocal folds. Hoarseness this duration, with these risk factors and weight loss, is laryngeal cancer until excluded.

- Q: Why do tobacco and alcohol matter together?
  A: They act synergistically on mucosal carcinogenesis, not just additively. A smoker who also drinks heavily has a much higher risk than either exposure alone.

Teaching: [figure: Progressive hoarseness with tobacco/alcohol risk factors and weight loss requiring urgent laryngoscopy for laryngeal cancer.]Progressive hoarseness + weight loss + tobacco/alcohol is a scope-first presentation, not a 'wait and see.'

**Case [case-fb-aspiration]**

Stem: A previously well 18-month-old suddenly develops coughing and choking while eating peanuts, then seems to settle. Hours later he has persistent coughing and you hear decreased breath sounds and wheeze on the right side only.

- Q: What does the initial choking episode plus a unilateral exam finding suggest?
  A: Foreign body aspiration: the abrupt choking event witnessed by a caregiver, followed by asymmetric findings, is the classic pattern. A quiet interval after the initial event does not rule it out.

- Q: What is the next step, and what shouldn't you rely on?
  A: Bronchoscopy (rigid, typically) for removal. Don't rely solely on a normal chest X-ray to exclude it, since most aspirated foreign bodies (like peanuts) are radiolucent.

Teaching: A witnessed choking event plus a unilateral chest exam finding is foreign body aspiration until bronchoscopy says otherwise. A normal X-ray doesn't clear it.

**Case [case-vcd]**

Stem: A 19-year-old competitive athlete has recurrent episodes of sudden shortness of breath and noisy breathing on inspiration during intense exercise. She has been treated for asthma with escalating inhalers without improvement; spirometry between episodes is normal.

- Q: What diagnosis should you now consider, and why?
  A: Vocal cord dysfunction (paradoxical vocal fold motion): episodic inspiratory noise that doesn't respond to asthma therapy, with normal interval spirometry, is the classic pattern. True asthma is predominantly expiratory wheeze.

- Q: How is it confirmed and managed?
  A: Laryngoscopy during an episode (or with a provocation test) showing paradoxical adduction of the vocal folds on inspiration. Managed with speech-therapy breathing retraining, not more bronchodilators.

Teaching: Inspiratory symptoms that don't respond to asthma treatment, with normal spirometry between episodes, should make you look at the larynx, not escalate the inhaler.

**Case [case-trach-dislodgement]**

Stem: A nurse calls urgently: a patient who underwent tracheostomy 3 days ago for prolonged ventilator weaning has become acutely short of breath, and the tracheostomy tube appears to have come out and is lying on the dressing.

- Q: What is the danger with simply reinserting the tube, and why?
  A: The stoma tract is only 3 days old and not yet mature (epithelialized). Blind reinsertion risks pushing the tube into a false passage in the soft tissues of the neck rather than back into the trachea, worsening the obstruction.

- Q: What should be done instead?
  A: Ventilate/oxygenate via the mouth and nose with the stoma occluded, or proceed to oral intubation if needed, while an experienced airway provider (ENT/anesthesia) reinserts the tracheostomy tube under direct visualization. Do not force blind reinsertion into an immature stoma.

Teaching: [figure: Dislodged tracheostomy tube 3 days post-op requiring alternate airway rather than blind reinsertion into an immature stoma.]In the first postoperative week a tracheostomy stoma is a fresh surgical tract, not an established airway. Treat a dislodged tube as an emergency requiring an alternate airway, not a bedside reinsertion.

**Case [case-idiopathic-subglottic-stenosis]**

Stem: A previously healthy 38-year-old woman, never a smoker, has had progressively worsening dyspnea on exertion and noisy breathing for a year. She has been treated for asthma with escalating inhalers without improvement. On exam she has biphasic stridor when asked to breathe deeply.

- Q: What diagnosis should be considered before treating this as refractory asthma?
  A: Subglottic stenosis: a slowly progressive, fixed central airway narrowing that produces biphasic stridor and exertional dyspnea, is a classic asthma mimic, and does not respond to bronchodilators/inhaled steroids.

- Q: What are the two main categories of cause to consider, and how would you screen for one of them?
  A: Idiopathic subglottic stenosis (iSGS), classically a healthy woman in her 30s-50s with no clear cause, versus a secondary cause, most importantly granulomatosis with polyangiitis (GPA), which can present with isolated subglottic stenosis before other systemic features. Screen with ANCA and ask about sinonasal crusting/epistaxis, hematuria, and pulmonary symptoms, though limited GPA can be ANCA-negative.

Teaching: Fixed, biphasic stridor that fails asthma therapy in a young, non-smoking woman is subglottic stenosis until laryngoscopy says otherwise, and idiopathic disease is a diagnosis of exclusion after screening for GPA.

### Flashcards (29)

**[laryngeal-cartilages-card]** tags: LA, anatomy, milestones: MK1, PC6, UKMLA: Hoarseness and voice change, reviewer: (none)
- Front: Name the laryngeal cartilages and one key fact about each.
- Back: Thyroid (largest, the 'Adam's apple'), cricoid (only complete ring in the airway, critical for cricothyroidotomy landmarks), paired arytenoids (rotate/glide to open/close the folds), and the epiglottis (protects the airway on swallowing).[figure: Naming the laryngeal cartilages (thyroid, cricoid, arytenoids, epiglottis) and a key fact about each.]
- Source: Standard laryngeal anatomy teaching.

**[laryngeal-subsites-card]** tags: LA, anatomy, milestones: MK1, PC3, UKMLA: Hoarseness and voice change, reviewer: (none)
- Front: Name the three laryngeal subsites and why glottic cancer tends to present earlier than supraglottic cancer.
- Back: Supraglottis, glottis, subglottis. The glottis (true vocal folds) has sparse lymphatics, so even a small tumor causes hoarseness early, often caught before nodal spread. The lymphatic-rich supraglottis tends to present later, with a neck node.
- Source: Standard laryngeal oncology teaching on subsite staging.

**[vf-cover-body]** tags: LA, anatomy, milestones: MK1, PC6, UKMLA: Hoarseness and voice change, reviewer: (none)
- Front: What is the 'cover-body' model of vocal fold vibration, and why does it matter clinically?
- Back: The epithelium + superficial lamina propria (Reinke's space) form a flexible 'cover' that vibrates over the deeper 'body' (vocalis muscle). Anything that stiffens or scars this cover, whether smoking, reflux, chronic vocal abuse, or surgery, dampens the mucosal wave and roughens the voice.[figure: The cover-body model of vocal fold vibration and clinical implications of cover stiffening.]
- Source: Standard voice-science teaching (cover-body model of phonation).

**[sln-rln-card]** tags: LA, anatomy, milestones: MK1, PC6, UKMLA: Hoarseness and voice change, reviewer: (none)
- Front: What does the superior laryngeal nerve control vs the recurrent laryngeal nerve?
- Back: Superior laryngeal n.: external branch → cricothyroid (pitch); internal branch → sensation above the cords. Recurrent laryngeal n. (RLN): all other intrinsic muscles (including the only abductor, posterior cricoarytenoid) + sensation below the cords.
- Source: Standard laryngeal neuroanatomy teaching.

**[rln-course-card]** tags: LA, anatomy, milestones: MK1, PC6, UKMLA: Hoarseness and voice change, reviewer: (none)
- Front: Trace the course of the recurrent laryngeal nerve on each side, and explain why it matters for hoarseness.
- Back: Left RLN loops under the aortic arch; right RLN loops under the subclavian artery. Both then ascend near the thyroid. This long course means a lung apex tumor, aortic aneurysm, or thyroid/mediastinal mass can present as hoarseness, and it's the nerve at risk during thyroid surgery.[figure: Course of the recurrent laryngeal nerve on each side and its clinical significance for hoarseness.]
- Source: Standard laryngeal neuroanatomy teaching.

**[unilateral-vf-paralysis-card]** tags: LA, clinical, milestones: PC6, UKMLA: Hoarseness and voice change, reviewer: (none)
- Front: What does unilateral vocal fold paralysis look like, and what are the common causes?
- Back: Breathy, weak voice and aspiration risk (glottic incompetence), but the airway is usually fine. Causes: thyroid/neck/chest surgery, a lung apex or mediastinal mass along the RLN course, idiopathic, viral.
- Source: Standard laryngology teaching on vocal fold immobility.

**[vf-paralysis-management-card]** tags: LA, clinical, milestones: PC6, MK3, UKMLA: Hoarseness and voice change, reviewer: (none)
- Front: Working up unilateral vocal fold paralysis means imaging [...], from the skull base to the aortic arch, since a lesion anywhere along that path can be the cause.
- Back: Working up unilateral vocal fold paralysis means imaging the entire recurrent laryngeal nerve course, from the skull base to the aortic arch, since a lesion anywhere along that path can be the cause. Management then follows a ladder from voice therapy to thyroplasty as spontaneous recovery becomes unlikely.
- Source: Standard laryngology teaching on vocal fold paralysis workup and medialization procedures.

**[bilateral-vf-paralysis-card]** tags: LA, clinical, milestones: PC6, PC1, UKMLA: Stridor, RED FLAG, reviewer: (none)
- Front: Why is bilateral vocal fold paralysis an airway emergency even when the voice sounds okay?
- Back: Both paramedian folds sit close together, so phonation can sound near-normal while the airway is critically narrowed. That's the opposite trap of the unilateral case. Classic cause: bilateral RLN injury after total thyroidectomy. May need emergency reintubation or tracheostomy.
- Source: Standard laryngology teaching on bilateral vocal fold paralysis.

**[vf-nodules-polyps-card]** tags: LA, clinical, milestones: PC6, UKMLA: Hoarseness and voice change, reviewer: (none)
- Front: Distinguish vocal nodules from a vocal polyp by pattern and cause.
- Back: Nodules: bilateral, symmetric, mid-membranous, from chronic vocal abuse/misuse ('singer's/screamer's nodules'). Polyp: usually unilateral, from a single straining/abuse event or reflux.
- Source: Standard laryngology teaching on benign vocal fold lesions.

**[benign-vf-lesion-management-card]** tags: LA, clinical, milestones: PC6, UKMLA: Hoarseness and voice change, reviewer: (none)
- Front: Vocal nodules, which arise from a reversible behavior such as chronic vocal abuse, are usually tried on [...] before any consideration of surgery.
- Back: Vocal nodules, which arise from a reversible behavior such as chronic vocal abuse, are usually tried on voice therapy before any consideration of surgery. Polyps and cysts are more structural and often need surgical excision instead.
- Source: Standard laryngology teaching on voice therapy vs surgical management of benign vocal fold lesions.

**[reinkes-edema-card]** tags: LA, clinical, milestones: PC6, UKMLA: Hoarseness and voice change, reviewer: (none)
- Front: What is Reinke's edema, and what is its classic association?
- Back: Diffuse, bilateral, gelatinous swelling of the superficial lamina propria (Reinke's space) causing a low, husky voice. Classically associated with chronic smoking; also reflux and hypothyroidism. Management starts with smoking cessation.
- Source: Standard laryngology teaching on Reinke's edema.

**[vocal-process-granuloma-card]** tags: LA, clinical, milestones: PC6, UKMLA: Hoarseness and voice change, reviewer: (none)
- Front: A vocal process (contact) granuloma is a benign inflammatory lesion at the [...] of the arytenoid, most often following intubation trauma.
- Back: A vocal process (contact) granuloma is a benign inflammatory lesion at the vocal process of the arytenoid, most often following intubation trauma. Surgical excision carries a high recurrence rate unless a driving cause, such as reflux or phonotrauma, is treated first.
- Source: Standard laryngology teaching on vocal process (contact) granuloma.

**[peds-stridor-differential-card]** tags: LA, clinical, milestones: PC1, PC7, UKMLA: Stridor, RED FLAG, reviewer: (none)
- Front: Differentiate croup, epiglottitis, bacterial tracheitis, and foreign body aspiration.
- Back: Croup: barky cough, gradual, low fever, steeple sign. Epiglottitis: rapid, high fever, drooling, tripod, thumbprint sign; don't examine the throat. Bacterial tracheitis: toxic, fails croup treatment, thick secretions. Foreign body: sudden choking event, unilateral wheeze.
- Source: Standard pediatric airway teaching.

**[laryngeal-cancer-riskfactors-card]** tags: LA, clinical, milestones: PC3, PC6, UKMLA: Hoarseness and voice change, RED FLAG, reviewer: (none)
- Front: What risk factors and presentation should prompt urgent laryngoscopy for possible laryngeal cancer?
- Back: Tobacco + alcohol act synergistically (not just additively). Presentation: hoarseness >2-4 weeks, especially with weight loss, odynophagia, referred otalgia, or a neck mass. Glottic tumors cause hoarseness early because of sparse lymphatics, a reason not to dismiss persistent voice change.
- Source: AAO-HNSF Hoarseness (Dysphonia) CPG, 2018.

**[early-glottic-treatment-card]** tags: LA, clinical, milestones: PC6, MK3, UKMLA: Hoarseness and voice change, reviewer: (none)
- Front: For early (T1-T2 N0) glottic cancer, transoral laser microsurgery and radiotherapy give [...] survival, so the choice hinges on exposure, voice, and salvage considerations.
- Back: For early (T1-T2 N0) glottic cancer, transoral laser microsurgery and radiotherapy give equivalent survival and larynx-preservation. TLM is a single procedure with margin histology that preserves RT for salvage; RT irradiates the whole larynx and usually can't be repeated. Anterior commissure involvement, comorbidity, and voice priorities guide selection.
- Source: Forastiere et al., ASCO larynx-preservation guideline, 2018; NCCN Head & Neck Cancers, 2026.

**[rrp-card]** tags: LA, clinical, milestones: PC6, PC7, UKMLA: Hoarseness and voice change, reviewer: (none)
- Front: What is recurrent respiratory papillomatosis (RRP), and who gets it?
- Back: Benign but recurrent HPV (types 6/11) laryngeal papillomas causing progressive hoarseness (and airway obstruction if severe). Biphasic age distribution: juvenile-onset (acquired perinatally from an infected mother) and adult-onset. Needs repeated surgical debulking; rarely undergoes malignant transformation. Beyond debulking, adjuvant medical therapy now matters: systemic bevacizumab (anti-VEGF, ~10 mg/kg q3wk) markedly reduces surgical frequency in aggressive juvenile- and adult-onset disease, and in 2025 the FDA approved the first HPV-specific immunotherapy (zopapogene imadenovec-drba, Papzimeos) for adults, offering durable control after a short course. HPV vaccination is preventive (reduces maternal genital HPV and perinatal transmission). Adjuvant cidofovir is used off-label.
- Source: Standard laryngology teaching on recurrent respiratory papillomatosis.

**[vcd-card]** tags: LA, clinical, milestones: PC6, PC1, UKMLA: Stridor, reviewer: (none)
- Front: What is vocal cord dysfunction (paradoxical vocal fold motion), and how is it distinguished from asthma?
- Back: The vocal folds adduct paradoxically on inspiration, causing episodic dyspnea that mimics asthma but doesn't respond to bronchodilators; spirometry is often normal between episodes. Confirmed by laryngoscopy during an episode. Treated with speech-therapy breathing retraining. The preferred umbrella term is inducible laryngeal obstruction (ILO); diagnosis is by laryngoscopy with provocation showing &ge;50% inspiratory closure (or Maat grade &ge;2). The exercise-induced subtype (EILO) is confirmed with continuous laryngoscopy during exercise (CLE test).
- Source: Standard laryngology teaching on paradoxical vocal fold motion.

**[lpr-card]** tags: LA, clinical, milestones: PC6, MK3, UKMLA: Hoarseness and voice change, reviewer: (none)
- Front: How does laryngopharyngeal reflux (LPR) differ from typical GERD in presentation?
- Back: LPR ('silent reflux') presents with throat clearing, globus, chronic cough, hoarseness, and posterior laryngeal erythema/edema on exam, often without classic heartburn. First-line is behavioral/dietary modification (weight loss, avoiding late meals, alginates). Empiric PPIs are controversial: placebo-controlled trials and meta-analyses show no consistent benefit for isolated laryngeal symptoms, and the AGA advises against empiric PPI use unless there are concomitant typical GERD symptoms. A PPI response does not by itself confirm the diagnosis; refractory or isolated cases warrant objective testing (e.g., pH-impedance).
- Source: Standard laryngology teaching on laryngopharyngeal reflux.

**[tracheostomy-indications-card]** tags: LA, clinical, milestones: PC1, SBP1, UKMLA: Stridor, reviewer: (none)
- Front: Name the broad indications for tracheostomy.
- Back: Prolonged mechanical ventilation, upper airway obstruction that can't be otherwise relieved (bilateral VF paralysis, tumor, severe subglottic stenosis), and need for pulmonary toilet/airway protection in patients who can't manage their own secretions.
- Source: Standard airway-management teaching.

**[tracheostomy-tube-types-card]** tags: LA, clinical, milestones: PC1, MK1, UKMLA: Stridor, reviewer: (none)
- Front: A [...] tracheostomy tube has an opening that lets air pass through the upper airway, letting the patient voice once the tube is capped.
- Back: A fenestrated tracheostomy tube has an opening that lets air pass through the upper airway, letting the patient voice once the tube is capped. A cuffed tube, by contrast, seals the airway for mechanical ventilation or a high aspiration risk.
- Source: Standard tracheostomy care teaching.

**[tracheostomy-first-week-card]** tags: LA, clinical, milestones: PC1, SBP1, UKMLA: Stridor, RED FLAG, reviewer: (none)
- Front: A tracheostomy stoma tract takes roughly [...] to mature by epithelializing, so blind reinsertion of a dislodged tube before then risks creating a false passage in the neck's soft tissues.
- Back: A tracheostomy stoma tract takes roughly 1 to 2 weeks to mature by epithelializing, so blind reinsertion of a dislodged tube before then risks creating a false passage in the neck's soft tissues. Until it matures, ventilate via the mouth and nose with the stoma occluded while an experienced provider reinserts under direct visualization.
- Source: Standard tracheostomy emergency-management teaching.

**[tracheostomy-decannulation-card]** tags: LA, clinical, milestones: PC1, UKMLA: Stridor, reviewer: (none)
- Front: What is the general pathway to decannulate a tracheostomy?
- Back: Once the original indication has resolved (airway patent, secretions manageable, ventilator weaned): progressively downsize the tube, then run a capping/plugging trial (the patient breathes entirely around the tube through the upper airway) and confirm tolerance (oxygenation, work of breathing) before final removal.
- Source: Standard tracheostomy decannulation-pathway teaching.

**[subglottic-stenosis-card]** tags: LA, clinical, milestones: PC6, PC1, UKMLA: Stridor, RED FLAG, reviewer: (none)
- Front: What is subglottic stenosis, and what's the classic risk factor to ask about?
- Back: Narrowing of the airway at the subglottis (the narrowest part of a child's airway) from scarring, most often after prolonged intubation. Presents with progressive stridor/dyspnea; ask about a prior ICU/intubation history in anyone with new unexplained stridor.
- Source: Standard airway teaching on subglottic stenosis.

**[subglottic-stenosis-causes-card]** tags: LA, clinical, milestones: PC6, MK3, UKMLA: Stridor, RED FLAG, reviewer: (none)
- Front: Idiopathic subglottic stenosis (iSGS) classically affects [...] who has never smoked, and is a diagnosis of exclusion.
- Back: Idiopathic subglottic stenosis (iSGS) classically affects a healthy woman in her 30s to 50s who has never smoked, and is a diagnosis of exclusion. The most common cause of subglottic stenosis overall is iatrogenic, from prolonged or traumatic intubation.
- Source: Standard airway teaching on subglottic stenosis etiology; screening principles for GPA-associated laryngotracheal disease.

**[subglottic-stenosis-asthma-mimic-card]** tags: LA, clinical, milestones: PC6, PC1, UKMLA: Stridor, RED FLAG, reviewer: (none)
- Front: Why does subglottic stenosis get misdiagnosed as asthma, and what should prompt reconsideration?
- Back: It causes exertional dyspnea and biphasic stridor that can be mistaken for asthma, especially early. Failure to respond to bronchodilators/inhaled steroids, a fixed (non-reversible) obstructive pattern, or stridor rather than wheeze should prompt flexible laryngoscopy rather than escalating asthma therapy.
- Source: Standard airway teaching on subglottic stenosis presentation.

**[subglottic-stenosis-management-card]** tags: LA, clinical, milestones: PC6, MK3, UKMLA: Stridor, reviewer: (none)
- Front: Rank the three main surgical approaches to subglottic stenosis by durability, and name the trade-off of the most durable one.
- Back: Cricotracheal resection (CTR) is most durable (~5% 5-yr recurrence) but has the greatest perioperative risk and worst voice; endoscopic resection with adjuvant medical therapy (ERMT) is intermediate (~30%); endoscopic dilation is least invasive but highest recurrence (~50%). Office-based serial intralesional steroid injection is a growing adjunct.
- Source: Gelbard et al., NoAAC 3-yr, JAMA Otolaryngol Head Neck Surg, 2020; Tierney et al., NoAAC 5-yr update, Otolaryngol Head Neck Surg, 2023.

**[fb-airway-algorithm-card]** tags: LA, clinical, milestones: PC1, PC7, UKMLA: Stridor, RED FLAG, reviewer: (none)
- Front: For a suspected airway foreign body with complete obstruction, meaning the patient can't cough, speak, or breathe, the immediate step is to start age-appropriate [...], such as back blows and abdominal thrusts.
- Back: For a suspected airway foreign body with complete obstruction, meaning the patient can't cough, speak, or breathe, the immediate step is to start age-appropriate BLS choking maneuvers, such as back blows and abdominal thrusts. If the patient can still cough or speak, encourage coughing instead and avoid blind intervention.
- Source: AAP clinical guidance on pediatric foreign-body aspiration; basic life support choking algorithm.

**[spasmodic-dysphonia-card]** tags: LA, clinical, milestones: PC6, UKMLA: Hoarseness and voice change, reviewer: (none)
- Front: What is spasmodic dysphonia, and how does it sound different from a structural vocal fold lesion?
- Back: A focal laryngeal dystonia causing involuntary spasms of the vocal folds: a strained, strangled voice (adductor type, most common) or breathy, effortful voice (abductor type) that is task-specific (worse on speaking, may be normal singing/laughing). Managed with botulinum toxin injections, not surgery for a 'lesion.'
- Source: Standard laryngology teaching on spasmodic dysphonia.

**[fees-swallow-eval-card]** tags: LA, clinical, milestones: PC6, PC1, UKMLA: Swallowing problems, reviewer: (none)
- Front: FEES visualizes the pharynx and larynx directly during swallowing through a transnasal endoscope, without radiation, while the test that instead images the whole swallow under fluoroscopy is the [...].
- Back: FEES visualizes the pharynx and larynx directly during swallowing through a transnasal endoscope, without radiation, while the test that instead images the whole swallow under fluoroscopy is the modified barium swallow (videofluoroscopy). FEES also directly detects pooling, penetration, and silent aspiration at the bedside.
- Source: Standard speech-language pathology/laryngology teaching on instrumental swallow evaluation.

---

## Module: The Ear: Anatomy to the Clinic (`otology-ear`)
- version: 0.3.0-draft
- status: DRAFT, pending faculty review. v0.2.0: added a subspecialty depth pass beyond the Foundations-level content this module started with, otosclerosis (pathophysiology, Carhart notch, stapedectomy) and th
- facultyReviewer: ""
- curriculum anchors: UKMLA Content Map (GMC), scope anchor; owns Hearing loss, Painful ear, Tinnitus, Vertigo/Dizziness, and the ear-related conditions (Otitis externa, Otitis media, BPPV, Ménière's disease, Acoustic neuroma); ACGME Otolaryngology-HNS Milestones 2.0, primarily PC4 Otologic Disease, MK1 Anatomy; AAO-HNSF Clinical Practice Guidelines: Sudden Hearing Loss (2019), BPPV (2017), Otitis Externa (2014), AOM (2013)/OME (2016); Bárány Society/AAO-HNS consensus diagnostic criteria for Ménière's disease (2015); House-Brackmann facial nerve grading system (1985); UK undergraduate Delphi (Lloyd 2014), student-scope depth cap
- subtitle: External, middle, and inner ear; hearing loss, otalgia, infection, and the vertigo syndromes.

### Anatomy notes

**Three compartments, one organ** (tags: External ear · Middle ear · Inner ear)

[figure: Overview of the ear's three compartments (external/sound-gathering, middle/amplification, inner/transduction) and how CN VIII reads out the inner ear.]Work outside-in: external (sound gathering), middle (sound amplification & transmission), inner (transduction + balance).

- External: auricle + external auditory canal (EAC): outer ⅓ cartilage, inner ⅔ bone; cerumen glands in the cartilaginous part.
- Middle: tympanic membrane → ossicles (malleus → incus → stapes) → oval window; connected to the nasopharynx by the Eustachian tube.
- Inner: cochlea (hearing) and vestibule + semicircular canals (balance), read out by CN VIII.

**The clinically dangerous relationships** (tags: Facial nerve · Referred otalgia · Chorda tympani)

[figure: Middle-ear/mastoid danger zone: facial nerve, tensor tympani/stapedius, chorda tympani, and referred otalgia via CN V/VII/IX/X.]
- Facial nerve (CN VII) runs through the temporal bone next to the middle/inner ear, so facial weakness with ear disease is a red flag.
- Referred otalgia: the ear is innervated by CN V, VII, IX, X and C2-C3, so a normal-looking ear can hurt because of pathology elsewhere (TMJ, teeth, tonsil, tongue base, larynx).
- Middle-ear muscles: tensor tympani (CN V3) and stapedius (CN VII) dampen loud sound.
- Chorda tympani (branch of VII) crosses the middle ear carrying taste from the anterior ⅔ of the tongue.

### Anatomy diagrams (7)

**Diagram: The ear in cross-section**

Gray's Anatomy plate 907: a real historical dissection illustration. Auricle → canal → tympanic membrane → middle ear → auditory tube, in one section.

_Image source: Fig. 907, “The Auditory Ossicles Etc.” Gray's Anatomy of the Human Body, 20th ed. (1918), illustrated by Henry Vandyke Carter. Public domain. Via Wikimedia Commons (commons.wikimedia.org/wiki/File:Gray907.png)._
- Cartilage of auricula: the elastic cartilage skeleton of the pinna that funnels sound into the external acoustic meatus.
- Attic (epitympanic recess): the space above the tympanic membrane housing the head of the malleus and body of the incus, the classic site where attic cholesteatoma forms.
- Incus: the middle ossicle, bridging the malleus to the stapes via the incudostapedial joint.
- Malleus: the first and largest ossicle; its handle (manubrium) is embedded in the tympanic membrane.
- Tympanic cavity: the air-filled middle-ear space housing the ossicular chain, between the tympanic membrane and the inner ear.
- Tensor tympani: innervated by CN V3, it inserts near the malleus neck and dampens loud sound by tensing the tympanic membrane.
- External acoustic meatus: outer third cartilaginous, inner two-thirds bony, the boundary that matters for otoscopy technique and canal-wall surgery.
- Mastoid process: the air-cell-containing bony prominence behind the ear that communicates with the middle ear via the aditus ad antrum, the route mastoiditis and cholesteatoma spread posteriorly.
- Tympanic part of the temporal bone: forms the bony ext. acoustic meatus and part of the middle-ear floor.
- Auditory (Eustachian) tube: connects the middle ear to the nasopharynx, equalizing pressure and draining secretions.
- Nasal part of the pharynx (nasopharynx): where the auditory tube opens, the reason nasopharyngeal disease can cause unilateral middle-ear effusion.
- Levator veli palatini: runs alongside the auditory tube and helps actively open it on swallowing/yawning, aided by tensor veli palatini.
- Styloid process: a slender bony projection just anteroinferior to the mastoid, giving attachment to the stylohyoid ligament and several muscles.
- Tympanic membrane: the three-layered drum that vibrates with sound and transmits energy to the ossicular chain.
- Bony part of the external acoustic meatus: the inner two-thirds of the canal, thin-skinned and pain-sensitive, why bony-canal manipulation hurts more.
- Cartilaginous part of the external acoustic meatus: the outer third, containing cerumen glands and hair follicles.

**Diagram: Right tympanic membrane**

Gray's Anatomy plate 909: the otoscopic view, same landmarks as the schematic below. Test yourself here first, then check the simplified diagram.

_Image source: Fig. 909, “Membrana Tympani, Right Side.” Gray's Anatomy of the Human Body, 20th ed. (1918), illustrated by Henry Vandyke Carter. Public domain. Via Wikimedia Commons (commons.wikimedia.org/wiki/File:Gray909.png)._
- Posterior malleolar fold: runs from the lateral (short) process of the malleus back to the annulus, marking the pars tensa's upper-posterior border.
- Long crus (process) of incus: seen as a faint vertical line through the postero-superior drum, continuing down to the stapes.
- Pars flaccida (Shrapnell's membrane): the lax portion above the malleolar folds, the classic site where a retraction-pocket cholesteatoma begins.
- Lateral (short) process of malleus: the prominent point at the junction of pars flaccida and pars tensa.
- Anterior malleolar fold: mirrors the posterior fold anteriorly, marking the pars tensa's upper-anterior border.
- Manubrium (handle) of malleus: runs from the umbo up to the lateral process, visible as a whitish streak through the drum.
- Postero-superior quadrant: houses the incus and stapes deep to it, the danger quadrant for ossicular erosion by attic disease.
- Antero-superior quadrant: overlies the Eustachian tube orifice and tensor tympani anteriorly.
- Postero-inferior quadrant: the preferred site for a safe myringotomy incision, avoiding the ossicles and chorda tympani.
- Umbo: the most medial (depressed) point of the drum, where the malleus tip inserts, the reference point for the four quadrants.
- Cone of light (light reflex): the antero-inferior reflection of the otoscope light off the pars tensa, an orientation landmark, not a discrete structure.
- Antero-inferior quadrant: the most common site for a traumatic or chronic tympanic membrane perforation.

**Diagram: Tympanic membrane viewed from within**

Gray's Anatomy plate 912: the medial (middle-ear) surface of the drum, showing the malleus, chorda tympani, and facial nerve running close by.

_Image source: Fig. 912, “Right Membrana Tympani, Viewed from Within.” Gray's Anatomy of the Human Body, 20th ed. (1918), illustrated by Henry Vandyke Carter. Public domain. Via Wikimedia Commons (commons.wikimedia.org/wiki/File:Gray912.png)._
- Superior ligament of the malleus: suspends the head of the malleus from the tegmen tympani in the epitympanum.
- Epitympanic recess (attic): houses the malleus head and incus body above the tympanic membrane, poorly ventilated and prone to retraction/cholesteatoma.
- Neck of malleus: the narrowed segment between the head and the lateral process/manubrium.
- Head of malleus: the rounded superior end that articulates with the body of the incus in the epitympanum.
- Articular surface for the body of the incus: the incudomalleolar joint, transmitting vibration from malleus to incus.
- Anterior ligament and anterior process of the malleus: anchors the malleus anteriorly via the petrotympanic (Glaserian) fissure.
- Flaccid portion of the membrana tympani (pars flaccida): the lax segment above the lateral process, the classic attic-cholesteatoma origin site.
- Posterior tympanic spine: a bony projection of the tympanic annulus posteriorly, near the chorda tympani's exit.
- Insertion of tensor tympani muscle: attaches near the neck of the malleus; contraction dampens ossicular chain movement.
- Chorda tympani nerve: a branch of CN VII crossing the middle ear medial to the malleus, carrying taste from the anterior two-thirds of the tongue, at risk in middle-ear/mastoid surgery.
- Glaserian (petrotympanic) fissure: a narrow cleft anterior to the malleus through which the chorda tympani exits the middle ear.
- Tympanic orifice of the canal for the chorda tympani nerve: where the chorda tympani enters the middle-ear cavity posteriorly.
- Handle (manubrium) of malleus: embedded within the fibrous layer of the tympanic membrane, seen here from its medial (middle-ear) surface.
- Facial nerve (CN VII): runs in the fallopian canal just posterosuperior to the middle ear before exiting at the stylomastoid foramen, vulnerable in mastoid/middle-ear surgery.
- Eustachian tube: connects the middle ear to the nasopharynx, equalizing pressure and draining secretions; dysfunction causes effusion and conductive loss.
- Tense portion of the membrana tympani (pars tensa): the taut three-layered bulk of the drum, viewed here from its medial surface.

**Diagram: Bony (osseous) labyrinth: inner ear**

Gray's Anatomy plate 920, the right bony labyrinth from the lateral side: cochlea (hearing) and the vestibule + semicircular canals (balance) in one piece.

_Image source: Fig. 920, “Right Osseous Labyrinth, Lateral View.” Gray's Anatomy of the Human Body, 20th ed. (1918), illustrated by Henry Vandyke Carter. Public domain. Via Wikimedia Commons (commons.wikimedia.org/wiki/File:Gray920.png)._
- Superior semicircular canal: senses rotation in the sagittal plane; its arch corresponds to the arcuate eminence on the middle cranial fossa floor.
- Common crus: the shared limb where the superior and posterior semicircular canals join before entering the vestibule.
- Ampulla of the superior semicircular canal: contains the crista ampullaris, sensing angular acceleration in that canal's plane.
- Ampulla of the lateral semicircular canal: the canal most easily tested at the bedside (horizontal head-impulse test, caloric testing).
- Lateral (horizontal) semicircular canal: oriented roughly 30 degrees up from horizontal; the canal most often involved in BPPV after the posterior canal.
- Posterior semicircular canal: the canal most commonly affected in BPPV, tested with the Dix-Hallpike maneuver and treated with the Epley maneuver.
- Ampulla of the posterior semicircular canal: houses the crista ampullaris for that canal, the site of canalithiasis in posterior-canal BPPV.
- Vestibular fenestra (oval window): where the stapes footplate sits, transmitting vibration into the perilymph of the vestibule, the site fixed in otosclerosis.
- Vestibule: the central chamber of the bony labyrinth, containing the utricle and saccule, continuous with the semicircular canals and cochlea.
- Cochlear fenestra (round window): a membrane-covered opening that allows pressure release from cochlear fluid waves driven by the stapes.
- Cochlea: the spiral, fluid-filled organ of hearing, making about 2.5 turns around the modiolus.

**Diagram: The ear in cross-section**

Lateral (outside) on the left → medial (inside) on the right. Hide the labels, name each structure, then reveal to check.

_Image source: The Ear in Cross-Section (External, Middle, Inner). nidcd.nih.gov._
- Pinna (auricle): the cartilaginous outer ear that funnels sound into the canal and helps localize sound.
- Temporal bone: the skull bone that houses the entire external, middle, and inner ear.
- External auditory canal: outer 1/3 cartilaginous (cerumen glands), inner 2/3 bony: why you pull the pinna up-and-back in adults for otoscopy.
- Eardrum (tympanic membrane): vibrates with incoming sound and transmits that energy to the ossicular chain.
- Malleus: the first and largest ossicle; its handle (manubrium) attaches directly to the eardrum.
- Incus: the middle ossicle, bridging the malleus to the stapes.
- Stapes: the smallest bone in the body; its footplate sits in the oval window and drives cochlear fluid waves.
- Semicircular canals: three fluid-filled loops that sense rotational head movement (angular acceleration) for balance.
- Vestibular nerve: carries balance signals from the semicircular canals and vestibule to the brainstem.
- Auditory (cochlear) nerve: carries sound signals from the cochlea's hair cells to the brainstem.
- Eustachian tube: connects the middle ear to the nasopharynx, equalizing pressure and draining secretions; dysfunction causes effusion and conductive loss.
- Cochlea: the spiral, fluid-filled organ of hearing; hair cells along its length transduce sound frequencies into neural signals.

**Diagram: Right tympanic membrane: landmarks**

Confirm laterality/orientation with faculty. Name each landmark, then reveal.

_Image source: Normal Right Tympanic Membrane Landmarks (Otoscopic View). oxfordmedicaleducation.com._
- Posterior malleolar fold: runs from the lateral (short) process of the malleus back to the annulus, marking the pars tensa's upper-posterior border.
- Pars flaccida (Shrapnell's membrane): the lax portion above the malleolar folds: the classic site where a retraction-pocket cholesteatoma begins.
- Anterior malleolar fold: mirrors the posterior fold anteriorly, marking the pars tensa's upper-anterior border.
- Short (lateral) process of malleus: the lateral prominence at the junction of pars flaccida and pars tensa.
- Incus: seen as a faint shadow through the translucent postero-superior drum on otoscopy.
- Umbo: the most medial (depressed) point of the drum, where the malleus tip inserts: the reference point for the four quadrants.
- Manubrium (handle) of malleus: runs from the umbo up to the short process, visible as a whitish streak through the drum.
- Tympanic annulus: the fibrocartilaginous ring anchoring the pars tensa into the bony sulcus of the external canal.
- Pars tensa: the taut, three-layered bulk of the drum below the malleolar folds: where perforations and most retraction disease are staged.
- Cone of light (light reflex): antero-inferior reflection of the otoscope light off the pars tensa: an orientation landmark, not a discrete structure.

**Diagram: The middle ear and mastoid danger zone**

Hand-drawn schematic, not to scale. Shows how closely the facial nerve, tegmen tympani, sigmoid sinus, and ossicular chain sit within the same small middle-ear/mastoid space, the reason disease or surgery here can threaten all four at once. Click a landmark to reveal its label.

_Image source: The Middle Ear and Mastoid Danger Zone Anatomic Relationships. Illustration generated with Google Gemini (adapted from Bagla)._
- Prominence of the lateral semicircular canal: bulges into the mastoid antrum just above the facial canal: the surgical landmark used to find the facial nerve during mastoidectomy.
- Prominence of the facial canal: the bony ridge overlying the tympanic segment of CN VII as it runs above the oval window: thin and dehiscent in up to 30% of temporal bones, so it's easily eroded by cholesteatoma or infection.
- Tegmen tympani: the thin bony (and dural) plate roofing the middle ear/mastoid; erosion lets infection track into the middle cranial fossa (meningitis, abscess).
- Promontory: the bulge overlying the cochlea's basal turn, between the oval and round windows; carries the tympanic nerve plexus (Jacobson's nerve) on its surface.
- Auditory (Eustachian) tube muscle complex: the cartilaginous tube's opening is driven by the tensor veli palatini, not the tensor tympani: dysfunction here drives otitis media with effusion.
- Tensor tympani: CN V3-innervated muscle that tenses the malleus/eardrum, dampening loud sounds (part of the acoustic reflex).
- Pharyngeal (cartilaginous) end of the auditory tube, opening into the nasopharynx: the route for reflux, infection, and pressure equalization.
- Aditus ad antrum: the narrow channel connecting the epitympanum to the mastoid antrum: the bottleneck that, when blocked, lets middle-ear infection wall itself off into mastoiditis.
- Oval (vestibular) window: the stapes footplate seats here and drives cochlear perilymph: the target of stapedotomy in otosclerosis.
- Pyramidal eminence: a small conical projection housing the stapedius muscle (CN VII), just anterior to the facial recess.
- Chorda tympani: branches off CN VII and crosses the middle ear medial to the malleus, carrying taste from the anterior 2/3 tongue: at risk in chronic otitis media and ossicular surgery.
- Lesser petrosal nerve: carries parasympathetic fibers (from CN IX via the tympanic plexus) to the otic ganglion, ultimately supplying the parotid gland.
- Branch from the internal carotid (sympathetic) plexus joining the tympanic plexus on the promontory: the anatomic basis for Jacobson's/tympanic plexus mixed autonomic-CN IX innervation.
- Sympathetic plexus draped over the internal carotid artery as it ascends through the carotid canal, immediately anteromedial to the middle ear.
- Internal carotid artery: runs just anteromedial to the middle ear/cochlea in the carotid canal: an aberrant or dehiscent ICA here is a critical surgical hazard.
- Round window: membrane-covered opening that releases pressure from the scala tympani, allowing cochlear fluid to move: its niche is a target for intratympanic drug delivery.
- Facial nerve (CN VII), vertical (mastoid) segment: descends just posterior to the middle ear before exiting the stylomastoid foramen: the most common site of iatrogenic injury.
- Chorda tympani nerve branching off the vertical facial nerve: shown here in cross-section entering the middle ear to cross behind the malleus.
- Tympanic nerve plexus (Jacobson's plexus, CN IX): lies on the promontory and supplies general sensation to the middle ear plus parasympathetics via the lesser petrosal nerve.
- Tympanic branch of the glossopharyngeal nerve (CN IX, Jacobson's nerve): enters the middle ear through the inferior tympanic canaliculus to form the tympanic plexus.
- Internal jugular vein (jugular bulb): sits directly inferior to the middle ear floor: a high or dehiscent jugular bulb is a recognized cause of pulsatile tinnitus and a surgical hazard.

### Clinical blocks (10)

**[hearing-loss-fork] Hearing loss: the fork in the road**

Conductive (something blocks sound reaching the cochlea) vs sensorineural (cochlea or CN VIII). Localize at the bedside with Weber + Rinne (512 Hz).

- Conductive causes: cerumen, middle-ear effusion, TM perforation, otosclerosis, ossicular problems.
- Sensorineural causes: presbycusis, noise, ototoxicity, sudden SNHL, and, if asymmetric, retrocochlear lesions (vestibular schwannoma).[figure: Conductive vs sensorineural hearing loss, localized by lesion site along the auditory pathway.]

**[otalgia-primary-referred] Otalgia: primary vs referred**

- Primary (ear pathology): otitis externa (pain on tragal traction, canal edema), acute otitis media (bulging red TM), cerumen, TM perforation.
- Referred (normal ear exam): pain travels via CN V/VII/IX/X to the TMJ, teeth, tonsil, tongue base, or larynx.Otalgia + normal ear exam in an adult smoker → scope for malignancy.

**[infection-and-danger] Infection, and when it's dangerous**

- Otitis externa: canal infection; tragal tenderness, discharge.
- Acute otitis media: middle-ear infection; bulging TM, effusion. Mastoiditis is a complication/extension of AOM: infection spreads from the middle ear into the mastoid air cells via the aditus ad antrum, producing postauricular swelling/erythema and an outwardly-displaced auricle; it needs urgent ENT input, not just more oral antibiotics.
- Cholesteatoma: keratin sac, often from a retraction pocket; painless foul otorrhea + attic crust/retraction, erodes bone. Refer. See the dedicated block below for the mechanism and why it's surgical.
- Necrotizing (malignant) otitis externa: occurs in diabetic or immunocompromised patients, with severe deep pain and granulation tissue in the canal; skull-base osteomyelitis risk. See the dedicated block below for the organism and cranial-nerve progression.[figure: Side-by-side otoscopic comparison of otitis externa, AOM, cholesteatoma, and necrotizing otitis externa.]

**[otitis-externa-management] Acute otitis externa: first-line management**

- Topical therapy is first-line, not oral antibiotics: topical agents reach far higher local concentrations, have fewer systemic effects, and limit resistance (AAO-HNS 2014). Most common pathogens: Pseudomonas aeruginosa and Staphylococcus aureus.
- Aural toilet (cleaning/microsuction) and pain control are integral; a wick is placed when canal edema prevents drops from entering.
- Agent choice depends on TM status: with a possible perforation or tube, use a non-ototoxic topical fluoroquinolone (ciprofloxacin/ofloxacin, &plusmn; steroid); avoid topical aminoglycosides (neomycin, gentamicin) when the TM is not intact, given ototoxicity risk.
- Oral antibiotics are reserved for infection spreading beyond the canal (cellulitis), or the immunocompromised/diabetic patient: the same population in whom necrotizing OE must be excluded (see the necrotizing otitis externa block above).

**[dizziness-peripheral-central] Dizziness: peripheral vs central**

- BPPV: brief positional vertigo; Dix-Hallpike reproduces it; treat with Epley.
- Vestibular neuritis: acute constant vertigo for days, no hearing loss, often post-viral.
- Ménière's: episodic vertigo + fluctuating SNHL + tinnitus + aural fullness; see the dedicated block below for the formal diagnostic criteria and management ladder.
- Central red flags: for a patient with continuous vertigo and spontaneous nystagmus (acute vestibular syndrome), use HINTS: a normal/negative head-impulse test, direction-changing or vertical nystagmus, or skew deviation each indicate a central cause (any single central component overrides the others). HINTS does not apply to brief positional vertigo (BPPV) or to a patient without spontaneous nystagmus; the head-impulse test in those settings is misleading.

**[otosclerosis-chl-differential] Conductive hearing loss with an intact tympanic membrane: the differential**

When conductive hearing loss is confirmed (Weber lateralizes to the affected ear, Rinne negative) but the tympanic membrane looks completely normal, three diagnoses dominate, and tympanometry usually separates them before imaging is ever needed.

- Otosclerosis: abnormal bone remodeling fixes the stapes footplate in the oval window. Classically a young adult (20s-40s) with a family history (autosomal dominant, variable penetrance), bilateral in roughly 70-80%, and often worsens in pregnancy. Tympanogram is Type As (normal peak pressure, reduced compliance/shallow peak): the drum moves normally but the ossicular chain is stiff. The audiogram classically shows a Carhart notch (an artifactual dip in bone conduction around 2000 Hz that resolves after successful surgery).
- Otitis media with effusion (OME): fluid behind an intact drum without acute infection signs; Eustachian tube dysfunction is the usual driver. Tympanogram is Type B (flat, no discernible peak). Common in children; a new unilateral effusion in an adult needs the nasopharynx examined to exclude a mass.
- Ossicular discontinuity: most often the incudostapedial joint, from prior trauma, infection, or cholesteatoma erosion. Tympanogram can show an abnormally high-compliance Type Ad peak (a floppy, hypermobile system), the opposite mechanical picture from otosclerosis.Management follows the diagnosis: OME is watched or ventilated (tubes); otosclerosis and ossicular discontinuity are surgical (stapedectomy/stapedotomy or ossicular reconstruction) or managed with amplification if surgery isn't wanted or appropriate. Stapes surgery for bilateral otosclerosis is typically staged, operating the worse-hearing ear first, given the small risk of a "dead ear": a frequently asked counseling point.
[figure: Differentiating otosclerosis (Type As), OME (Type B), and ossicular discontinuity (Type Ad) by tympanogram pattern.]

**[cholesteatoma-depth] Cholesteatoma: mechanism, classification, and why it's surgical**

A cholesteatoma is not a tumor. It's a sac of stratified squamous epithelium and trapped keratin debris growing where it doesn't belong, expanding by pressure and by releasing enzymes that resorb adjacent bone.

- Acquired (primary): the common type. Chronic Eustachian tube dysfunction creates negative middle-ear pressure, drawing the pars flaccida (or, less often, the postero-superior pars tensa) inward into a retraction pocket. Desquamated keratin accumulates in the pocket instead of migrating out normally, and the sac enlarges.
- Acquired (secondary): squamous epithelium is implanted through a pre-existing marginal or attic TM perforation (from chronic otitis media or trauma) rather than forming via a retraction pocket.
- Congenital: a white mass behind an intact, normal-looking TM in a child with no history of perforation or ear surgery: a keratin rest that failed to involute embryologically. Easy to miss because the drum itself looks unremarkable.Progressive Bony Erosion: the sac keeps enlarging regardless of infection control, and its bone-resorbing enzymes progressively erode whatever is nearby, so medical therapy alone does not resolve it:

- The ossicular chain (conductive loss, often the long process of the incus first)
- The facial nerve canal (facial palsy)
- The lateral semicircular canal (a labyrinthine fistula, with vertigo triggered by pressure and a positive fistula test)
- The tegmen tympani (intracranial spread: meningitis, brain abscess)Mastoidectomy, surgical removal of the sac and diseased bone, is the definitive treatment; topical/oral antibiotics only quiet secondary infection while the structural problem remains.
[figure: Cholesteatoma pathophysiology (retraction pocket, keratin accumulation, bone erosion) and why mastoidectomy is required.]

**[vestibular-schwannoma-workup] Vestibular schwannoma: workup and the management ladder**

A vestibular schwannoma (acoustic neuroma) is a benign, slow-growing Schwann-cell tumor of the vestibular division of CN VIII, arising in the internal auditory canal. It's the classic explanation for asymmetric/unilateral SNHL or tinnitus, can cause disequilibrium (true vertigo is uncommon; slow growth allows central compensation), and, as it enlarges, can produce trigeminal (facial numbness) or facial nerve symptoms from cerebellopontine-angle/brainstem compression.

- Imaging: MRI of the internal auditory canals with and without gadolinium contrast is the study of choice: it detects tumors a few millimeters across, far below CT's resolution.
- Management is a size/growth/patient decision, not one default answer:
- Observation with serial MRI: reasonable for small, non-growing tumors, especially in older patients or those with useful hearing and minimal symptoms; many grow slowly or not at all.
- Stereotactic radiosurgery (SRS): for small-moderate tumors, or when surgery carries higher risk; aims to arrest growth rather than remove the tumor, with a lower immediate facial-nerve risk than microsurgery.
- Microsurgical resection: for larger or growing tumors, or brainstem compression; the surgical approach (translabyrinthine, retrosigmoid, middle fossa) is chosen partly on whether preserving hearing is realistic.Facial nerve function is tracked before and after any intervention using the House-Brackmann grading scale (Grade I = normal, Grade VI = total paralysis), the standard language for describing facial nerve outcomes in vestibular schwannoma care.
[figure: Vestibular schwannoma presentation, MRI IAC workup, and the observation/radiosurgery/microsurgery management ladder.]

**[meniere-criteria-management] Ménière's disease: diagnostic criteria and the step-up ladder**

The Bárány Society/AAO-HNS (2015) consensus criteria formalize the diagnosis beyond the simple tetrad:
Definite Ménière's disease requires all of the following:

- ≥2 spontaneous vertigo episodes, each lasting 20 minutes to 12 hours
- Audiometrically documented low- to mid-frequency SNHL in the affected ear on at least one occasion before, during, or after an episode
- Fluctuating aural symptoms (hearing, tinnitus, fullness) in that ear
- No better explanationProbable Ménière's disease: &ge;2 episodes of vertigo or dizziness each lasting 20 minutes to 24 hours (a wider window than definite MD), fluctuating aural symptoms in the affected ear, and no better explanation: without the requirement for audiometrically documented SNHL.
Step-up management (escalate only as needed):

- Lifestyle/dietary: low-sodium diet and caffeine/alcohol moderation, first-line and low-risk. Betahistine is widely used as an adjunct here (especially outside the US) but is not FDA-approved for Ménière's, and evidence is conflicting/low-certainty: the well-designed BEMED RCT found no benefit over placebo, so it is not a guideline-mandated step.
- Diuretics (e.g., hydrochlorothiazide-triamterene) if diet alone is insufficient.
- Intratympanic corticosteroid injections for persistent vertigo despite the above, hearing-preserving.
- Intratympanic gentamicin ('chemical labyrinthectomy') for refractory disease: effective at controlling vertigo but carries a real risk of further hearing loss, since gentamicin is vestibulotoxic and only relatively selective for vestibular over cochlear hair cells.
- Surgical labyrinthectomy or vestibular nerve section: reserved for disabling, refractory vertigo, typically once hearing in that ear is already poor (labyrinthectomy sacrifices remaining hearing).The ladder trades rising efficacy against rising risk to hearing: reserve the ear-destructive options for disease that has failed the earlier, hearing-preserving steps.

**[noe-depth] Necrotizing (malignant) otitis externa: the progression to watch**

Pseudomonas aeruginosa is the classic pathogen, invading through the fissures of Santorini and the bony-cartilaginous junction of the canal to cause osteomyelitis of the skull base, almost always in a diabetic (poor glycemic control) or otherwise immunocompromised patient. Pain is disproportionate to exam findings and often worse at night; granulation tissue at the bony-cartilaginous junction of the canal floor is the classic sign.
Cranial nerve progression tracks how far the osteomyelitis has spread: CN VII is affected first and most often (it exits nearby via the stylomastoid foramen); further skull-base spread toward the jugular foramen threatens CN IX, X, XI (dysphagia, hoarseness, shoulder weakness), and CN XII (tongue weakness) if it extends to the hypoglossal canal. New cranial neuropathies signal advancing disease, not a new, separate problem.
Workup and treatment: CT temporal bone shows bony erosion; MRI better delineates soft-tissue and marrow involvement; a technetium-99m bone scan is sensitive early but stays positive long after cure (not useful for following response), while a gallium-67 scan reflects active inflammation and is used to confirm treatment response. Treatment is prolonged (often 6-8 weeks) IV antipseudomonal antibiotics (e.g., an antipseudomonal fluoroquinolone or a beta-lactam/aminoglycoside combination) plus tight glycemic control and debridement of obvious necrotic tissue. This is not an outpatient-drops problem.
[figure: Necrotizing otitis externa pathogen, cranial-nerve progression from skull-base osteomyelitis, and treatment.]

### Red flags
- Sudden SNHL (<72h), otologic emergency: urgent audiogram, corticosteroids may be offered (shared decision-making), MRI.
- Asymmetric SNHL / unilateral tinnitus: MRI for vestibular schwannoma.
- Facial weakness with ear disease: urgent ENT (cholesteatoma, malignancy, necrotizing OE).
- Cholesteatoma signs: painless foul otorrhea, attic retraction/crust; erodes bone.
- Necrotizing otitis externa: diabetic/immunocompromised, severe pain, canal granulation.
- Central vertigo (HINTS): vertical/direction-changing nystagmus, normal head-impulse, skew.
- Progressive facial weakness over weeks, or palsy with a parotid/temporal-bone mass: atypical for Bell's (which is acute); think tumor (vestibular schwannoma with facial nerve involvement, parotid malignancy) and image.
- Necrotizing otitis externa with new lower cranial neuropathies (IX-XI/XII): skull-base spread beyond the stylomastoid foramen; escalate imaging and antibiotic duration.

### Cases (7)

**Case [case-sudden-snhl]**

Stem: A 34-year-old notices her right ear went muffled over a day with new ringing. No wax on exam. Weber lateralizes left; Rinne positive bilaterally.

- Q: Interpret the tuning-fork pattern.
  A: Weber to the better (left) ear + positive Rinne on the right = a sensorineural pattern on the right, not conductive/wax.

- Q: Diagnosis and urgency?
  A: Sudden SNHL is an otologic emergency. Urgent audiogram and MRI for retrocochlear pathology are firm recommendations; corticosteroids may be offered within 2 weeks as a shared decision-making option (AAO-HNS 2019), reflecting frequent spontaneous recovery and weak placebo-controlled evidence.

Teaching: Sudden SNHL is time-sensitive and often dismissed as wax. The bedside forks separate the two in seconds.

**Case [case-cholesteatoma]**

Stem: A 28-year-old has months of painless, foul-smelling drainage from one ear and mild hearing loss. Otoscopy shows a crusted retraction pocket in the attic.

- Q: What's the concern?
  A: Cholesteatoma: a keratin sac that erodes bone and can involve the ossicles, facial nerve, and inner ear.

- Q: Next step?
  A: ENT referral; imaging (CT temporal bone) and surgical management. Not a 'treat with drops and forget' problem.

Teaching: Painless, chronic, foul otorrhea + retraction/attic crust = cholesteatoma until proven otherwise.[figure: Chronic painless foul otorrhea with an attic retraction pocket, diagnostic of cholesteatoma.]

**Case [case-bppv]**

Stem: A 62-year-old reports seconds-long spinning each time he rolls over in bed or looks up. Hearing is normal. Neuro exam is normal.

- Q: Most likely diagnosis and confirming test?
  A: BPPV; confirm with the Dix-Hallpike maneuver (reproduces vertigo + characteristic nystagmus).

- Q: What would push you toward a central cause?
  A: Features atypical for BPPV: positional nystagmus that is purely vertical (typically down-beating), non-fatiguing, or persistent, that does not match a specific canal plane, or that is accompanied by other neurologic signs. These suggest a central positional cause and warrant imaging for posterior-fossa pathology. (Note: the HINTS battery is for continuous acute vestibular syndrome, not positional vertigo: don't apply the head-impulse test here.)

Teaching: Brief, positional, hearing intact = think BPPV; but always screen for atypical/central positional nystagmus before you settle.

**Case [case-noe-progression]**

Stem: A 68-year-old with poorly controlled diabetes has three weeks of severe, worsening left ear pain and purulent discharge that hasn't responded to two courses of topical antibiotic drops. On exam there is granulation tissue at the bony-cartilaginous junction of the canal. Over the past few days he has also developed drooping of the left side of his face and new hoarseness.

- Q: What is happening, and why the facial droop and hoarseness?
  A: This is progressing necrotizing (malignant) otitis externa: skull-base osteomyelitis, almost always Pseudomonas aeruginosa, in a diabetic patient. The facial droop reflects CN VII involvement near the stylomastoid foramen; the new hoarseness suggests spread toward the jugular foramen affecting CN X, and each new cranial neuropathy marks advancing disease along the skull base.

- Q: Workup and treatment?
  A: CT temporal bone for bony erosion, MRI for soft-tissue/marrow extent, and later a gallium scan to track treatment response. Admit for prolonged IV antipseudomonal antibiotics (typically 6-8 weeks), tight glycemic control, and ENT debridement; topical drops alone will not control this.

Teaching: [figure: Progressive necrotizing otitis externa in a diabetic patient developing facial droop and hoarseness from skull-base spread.]New cranial neuropathies in otitis externa aren't a separate diagnosis to chase. They're the same disease spreading along the skull base, and they demand escalation, not another course of drops.

**Case [case-otosclerosis]**

Stem: A 29-year-old woman, now 20 weeks pregnant, reports progressive hearing loss in both ears over two years, worse on the left, and says her mother has worn hearing aids since a young age. Both tympanic membranes look entirely normal. Weber lateralizes to the left; Rinne is negative on the left.

- Q: Interpret the tuning-fork findings and suggest the leading diagnosis.
  A: Weber lateralizing to the worse (left) ear with a negative Rinne on that side = a conductive pattern. Combined with a normal-looking TM, bilateral involvement, a strong family history, young adult onset, and worsening during pregnancy, the leading diagnosis is otosclerosis.

- Q: What would confirm it, and what are the management options?
  A: Tympanometry (expect a Type As pattern: reduced compliance, normal peak pressure) and audiometry (look for a Carhart notch). Options are amplification (hearing aids) or surgery (stapedectomy/stapedotomy), with surgery usually deferred until she is no longer pregnant or breastfeeding, since otosclerosis often worsens with pregnancy.

Teaching: [figure: Bilateral conductive hearing loss with a normal TM, family history, and pregnancy-related worsening, diagnostic of otosclerosis.]Bilateral conductive loss with a normal drum, a family history, and a young adult: think otosclerosis before you think 'wax I must have missed.'

**Case [case-meniere]**

Stem: A 45-year-old describes recurrent episodes, each lasting about an hour, of spinning vertigo with nausea, accompanied each time by muffled hearing, ringing, and a full sensation in the right ear. Between episodes she feels well. Audiometry obtained during a recent episode confirmed a low-frequency sensorineural hearing loss on the right.

- Q: Does this meet the diagnostic criteria for Ménière's disease, and which tier?
  A: Yes, this is definite Ménière's disease: ≥2 spontaneous vertigo episodes of 20 minutes-12 hours, audiometrically documented low-frequency SNHL in the affected ear, and fluctuating aural symptoms (hearing, tinnitus, fullness), with no better explanation.

- Q: How do you sequence management if dietary sodium restriction alone doesn't control her symptoms?
  A: Step up rather than jumping to ear-destructive options: add a diuretic next, then intratympanic corticosteroids if vertigo persists. Intratympanic gentamicin or surgical labyrinthectomy are reserved for disease refractory to those hearing-preserving steps, given their risk to residual hearing.

Teaching: Meeting the Bárány/AAO-HNS criteria is what separates 'Ménière's' from 'recurrent dizziness with some ear symptoms,' and management escalates in a defined order, not straight to gentamicin.

**Case [case-vestibular-schwannoma]**

Stem: A 52-year-old reports gradually worsening hearing in his right ear over 18 months, with a constant right-sided ringing and a vague sense of unsteadiness, not true spinning vertigo. He denies facial weakness or numbness. Weber lateralizes to the left; Rinne positive bilaterally. Pure-tone audiometry shows an asymmetric sensorineural hearing loss, worse on the right, with poorer-than-expected word recognition for the degree of loss.

- Q: Interpret the tuning-fork and audiogram pattern, and give the leading diagnosis.
  A: Weber to the better (left) ear with positive Rinne bilaterally is a sensorineural pattern, and it's asymmetric, worse on the right, with disproportionately poor word recognition. Slowly progressive unilateral SNHL with tinnitus and mild disequilibrium (not true vertigo, since a slow-growing lesion allows central vestibular compensation) is the classic presentation of a vestibular schwannoma (acoustic neuroma).

- Q: Why does asymmetric SNHL mandate imaging rather than a 'watch and repeat the audiogram' approach?
  A: Asymmetric SNHL is a red flag for a retrocochlear lesion, not just presbycusis or noise damage. The next step is an MRI of the internal auditory canals (IACs) with contrast, the most sensitive study for a vestibular schwannoma, which can be missed on plain CT. Waiting risks a tumor enlarging into the cerebellopontine angle and compressing the brainstem or trigeminal/facial nerves before it's caught.

- Q: What else lives in the cerebellopontine-angle differential besides vestibular schwannoma?
  A: Meningioma, epidermoid (congenital cholesteatoma of the CPA), facial nerve schwannoma, and, much less commonly, metastasis or a lower cranial nerve schwannoma. MRI with contrast, plus the pattern of cranial nerve involvement, helps distinguish these.

- Q: The MRI confirms a 1.5 cm intracanalicular-to-CPA vestibular schwannoma. What are the management options, and how do you choose?
  A: Three options, chosen by tumor size/growth, symptoms, hearing status, and patient factors: observation with serial MRI (reasonable for a small, stable tumor, especially in an older patient or one with useful hearing, since many grow slowly or not at all); stereotactic radiosurgery (arrests growth in most cases, lower upfront morbidity, but doesn't remove the tumor and carries some risk to hearing/facial nerve over time); and microsurgical resection (definitive for large tumors or those with brainstem compression, but with the highest risk to facial nerve function and residual hearing).

- Q: How is facial nerve outcome tracked and discussed with the patient before and after treatment?
  A: Using the House-Brackmann grading scale (see the House-Brackmann card), the same I-VI scale used across otologic and skull-base surgery. Counseling before microsurgery or radiosurgery should frame facial nerve preservation as a spectrum of possible House-Brackmann outcomes, not a guarantee of normal function, and this tradeoff is a major factor in choosing among observation, radiosurgery, and resection.

Teaching: [figure: Progressive asymmetric SNHL and tinnitus worked up with MRI IAC, revealing a vestibular schwannoma, with management options discussed via House-Brackmann.]Vestibular schwannoma is the lesion an asymmetric-SNHL red flag is chasing: progressive unilateral hearing loss, tinnitus, and disequilibrium (not spinning vertigo) should trigger an MRI IAC with contrast, not a repeat audiogram in six months. Once found, the management ladder (observe → radiosurgery → resection) is chosen against the same facial-nerve-preservation tradeoff the House-Brackmann scale is built to describe.

### Flashcards (33)

**[eac-anat]** tags: OT, anatomy, milestones: MK1, UKMLA: Painful ear, Hearing loss, reviewer: (none)
- Front: What innervates the external ear, and why is that clinically relevant?
- Back: The external ear's sensory supply is shared among several nerves, each covering a different patch of the auricle and canal: the great auricular nerve (C2-C3) supplies most of the lower auricle and the skin over the mastoid/parotid region; the auriculotemporal nerve (CN V3) supplies the anterosuperior auricle, tragus, and the anterior/superior EAC and TM; the lesser occipital nerve (C2) covers the posterosuperior auricle; the posterior auricular branch of CN VII contributes to the auricle and postauricular skin; and Arnold's nerve, the auricular branch of CN X, supplies part of the concha and the posteroinferior EAC. Because so many nerves converge on one small structure, ear pain is frequently referred from distant sites those same nerves also supply (TMJ, teeth, throat, larynx), and stimulating Arnold's nerve in the canal (e.g., on otoscopy or cerumen removal) can trigger a vagally-mediated cough reflex (Arnold's/ear-cough reflex).
- Source: Standard otologic anatomy teaching.

**[eac-canal]** tags: OT, anatomy, milestones: MK1, UKMLA: Painful ear, reviewer: (none)
- Front: Describe the makeup of the external auditory canal.
- Back: Outer ⅓ cartilaginous (contains cerumen glands), inner ⅔ bony. This is why you pull the pinna up-and-back (adult) to straighten it for otoscopy.[figure: External auditory canal composition: outer 1/3 cartilaginous (cerumen glands), inner 2/3 bony.]
- Source: Standard otologic anatomy teaching.

**[tm-landmarks2]** tags: OT, anatomy, milestones: MK1, PC4, UKMLA: Hearing loss, reviewer: (none)
- Front: Name the tympanic membrane landmarks.
- Back: - Cone of light (antero-inferior)
- Umbo (central, most depressed)
- Manubrium + lateral process of malleus
- Pars tensa and pars flaccida[figure: Naming tympanic membrane landmarks (cone of light, umbo, manubrium, pars tensa/flaccida) on otoscopy.]
- Source: Standard otoscopy teaching.

**[ossicles]** tags: OT, anatomy, milestones: MK1, UKMLA: Hearing loss, reviewer: (none)
- Front: Name the ossicular chain in order and what it connects.
- Back: Malleus → incus → stapes → oval window. It mechanically transmits and amplifies TM vibration into the cochlear fluid.[figure: The ossicular chain (malleus, incus, stapes) and its mechanical connection from TM to oval window.]
- Source: Standard otologic anatomy teaching.

**[me-muscles]** tags: OT, anatomy, milestones: MK1, UKMLA: Hearing loss, reviewer: (none)
- Front: What are the two middle-ear muscles, their nerves, and their function?
- Back: Tensor tympani (CN V3) and stapedius (CN VII). They reflexively dampen loud sounds (acoustic reflex). Because the stapedius mediates the acoustic reflex, a facial nerve palsy proximal to the stapedial branch can cause hyperacusis: a common pimp point linking this anatomy to the facial-palsy cards.[figure: Tensor tympani (CN V3) and stapedius (CN VII), the two middle-ear muscles and the acoustic reflex.]
- Source: Standard otologic anatomy teaching.

**[et]** tags: OT, anatomy, milestones: MK1, MK3, UKMLA: Hearing loss, Otitis media, reviewer: (none)
- Front: What does the Eustachian tube connect, and what happens when it fails?
- Back: Middle ear ↔ nasopharynx; equalizes pressure and drains the middle ear. Dysfunction → negative pressure, effusion, retraction, and conductive loss (common in kids).
- Source: Standard otologic anatomy teaching.

**[cn7-me]** tags: OT, anatomy, milestones: MK1, PC4, UKMLA: Facial weakness, reviewer: (none)
- Front: What is the relevance of the facial nerve in otology?
- Back: CN VII courses through the temporal bone adjacent to the middle/inner ear, so it's at risk from cholesteatoma, tumor, necrotizing otitis externa, and surgery. Facial weakness + ear disease = red flag.[figure: Facial nerve course through the temporal bone and vulnerability to otologic disease.]
- Source: Standard otologic anatomy teaching.

**[chorda]** tags: OT, anatomy, milestones: MK1, UKMLA: Hearing loss, reviewer: (none)
- Front: What is the chorda tympani and what does it carry?
- Back: A branch of CN VII that crosses the middle ear carrying taste from the anterior ⅔ of the tongue (and parasympathetics to submandibular/sublingual glands).[figure: The chorda tympani (CN VII branch) crossing the middle ear, carrying taste from the anterior 2/3 of the tongue.]
- Source: Standard otologic anatomy teaching.

**[inner-div]** tags: OT, anatomy, milestones: MK1, UKMLA: Hearing loss, Vertigo, reviewer: (none)
- Front: Divide the inner ear by function.
- Back: Cochlea = hearing; vestibule + semicircular canals = balance. Both are read out by CN VIII (cochlear + vestibular divisions).[figure: Dividing the inner ear by function: cochlea (hearing) vs vestibule + semicircular canals (balance), both read by CN VIII.]
- Source: Standard otologic anatomy teaching.

**[weber]** tags: OT, clinical, milestones: PC4, UKMLA: Hearing loss, reviewer: (none)
- Front: Interpret the Weber test.
- Back: 512 Hz on the vertex. Conductive loss: lateralizes to the affected ear. SNHL: lateralizes to the better ear.[figure: Tuning-fork testing: Weber and Rinne in conductive vs sensorineural loss.]ScenarioWeberRinne (affected ear)Normal / symmetricMidlineAC > BC (positive)Conductive loss, rightLateralizes to right (affected)BC > AC (negative)Sensorineural loss, rightLateralizes to left (better)AC > BC (positive)
- Source: AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019: tuning-fork triage.

**[rinne]** tags: OT, clinical, milestones: PC4, UKMLA: Hearing loss, reviewer: (none)
- Front: Interpret the Rinne test.
- Back: Mastoid (BC) vs beside the ear (AC). Normal/SNHL: AC > BC (positive). Conductive loss: BC > AC (negative) in the affected ear.ScenarioWeberRinne (affected ear)Normal / symmetricMidlineAC > BC (positive)Conductive loss, rightLateralizes to right (affected)BC > AC (negative)Sensorineural loss, rightLateralizes to left (better)AC > BC (positive)[figure: Interpreting the Rinne tuning-fork test (AC vs BC) alongside the Weber/Rinne comparison table.]
- Source: AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019: tuning-fork triage.

**[chl-snhl]** tags: OT, clinical, milestones: PC4, MK3, UKMLA: Hearing loss, reviewer: (none)
- Front: Give the common causes of conductive vs sensorineural hearing loss.
- Back: Conductive: cerumen, effusion, perforation, otosclerosis. SNHL: presbycusis, noise, ototoxicity, sudden SNHL, vestibular schwannoma (if asymmetric).
- Source: Standard audiology teaching.

**[sudden-snhl]** tags: OT, clinical, milestones: PC4, UKMLA: Hearing loss, RED FLAG, reviewer: (none)
- Front: Why is sudden SNHL an emergency, and what's the workup?
- Back: Otologic emergency (≥30 dB over ≥3 frequencies within 72h). Forks show a sensorineural pattern (Weber to better ear, Rinne positive). Urgent audiogram and MRI are firm recommendations; corticosteroids may be offered (shared decision-making) within 2 weeks, per AAO-HNS 2019: not a mandatory step. Don't call it wax.
- Source: AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019.

**[asym-snhl]** tags: OT, clinical, milestones: PC4, UKMLA: Hearing loss, Acoustic neuroma, RED FLAG, reviewer: (none)
- Front: Asymmetric SNHL or unilateral tinnitus: what must you exclude?
- Back: Vestibular schwannoma (and other retrocochlear lesions). Get an MRI with contrast of the internal auditory canals.[figure: Asymmetric SNHL or unilateral tinnitus must be worked up with MRI to exclude vestibular schwannoma.]
- Source: ACR Appropriateness Criteria: Hearing Loss and/or Vertigo (asymmetric SNHL imaging).

**[oe-om]** tags: OT, clinical, milestones: PC4, MK3, UKMLA: Painful ear, Otitis externa, Otitis media, reviewer: (none)
- Front: Distinguish otitis externa from acute otitis media on exam.
- Back: Otitis externa: pain on tragal traction, canal edema/discharge, TM often normal. AOM: bulging, erythematous TM with effusion; canal not tender.
- Source: AAO-HNSF Clinical Practice Guideline: Otitis Externa (Update), 2014; AAO-HNSF/AAP Clinical Practice Guideline: Acute Otitis Media (Update), 2013.

**[otitis-externa-topical-card]** tags: OT, clinical, milestones: PC4, MK3, UKMLA: Painful ear, Otitis externa, reviewer: (none)
- Front: First-line treatment for uncomplicated acute otitis externa is [...], and a topical aminoglycoside should be avoided when [...].
- Back: First-line treatment for uncomplicated acute otitis externa is topical antimicrobial therapy (with aural toilet and analgesia), not oral antibiotics. A topical aminoglycoside should be avoided when the tympanic membrane may be perforated (ototoxicity risk); a non-ototoxic topical fluoroquinolone is preferred there. Oral antibiotics are reserved for spread beyond the canal or the immunocompromised patient.
- Source: AAO-HNSF Clinical Practice Guideline: Otitis Externa (Update), 2014.

**[cholesteatoma]** tags: OT, clinical, milestones: PC4, MK3, UKMLA: Ear and nasal discharge, Otitis media, RED FLAG, reviewer: (none)
- Front: What findings suggest cholesteatoma, and why is it clinically relevant?
- Back: Painless, chronic, foul otorrhea + attic retraction/crust. It's a keratin sac that erodes bone, and can reach the ossicles, facial nerve, and labyrinth. Needs CT + surgery.
- Source: Standard otology teaching on cholesteatoma.

**[noe]** tags: OT, clinical, milestones: PC4, UKMLA: Painful ear, Otitis externa, RED FLAG, reviewer: (none)
- Front: Which patient with an 'ear infection' should worry you most, and why?
- Back: A diabetic or immunocompromised patient with severe deep otalgia and granulation tissue in the canal: necrotizing (malignant) otitis externa, a skull-base osteomyelitis. Urgent ENT + imaging.
- Source: Standard otology teaching on necrotizing (malignant) otitis externa.

**[bppv]** tags: OT, clinical, milestones: PC4, UKMLA: Vertigo, Benign paroxysmal positional vertigo, reviewer: (none)
- Front: Classic BPPV: features, test, treatment.
- Back: Brief, seconds-long positional vertigo; confirm with Dix-Hallpike; treat with the Epley maneuver. Hearing is normal.Dix-Hallpike: from sitting, the examiner rapidly moves the patient to supine with the head turned 45&deg; to one side and extended slightly over the end of the table; a positive test reproduces vertigo with the characteristic torsional/upbeating nystagmus of posterior-canal BPPV on that side. Epley maneuver: a sequence of head/body repositions starting from the positive Dix-Hallpike position, rotating the head/body stepwise through roughly 180&deg; (affected ear down -> head turned to the other side -> body rolled onto that side facing down -> sit up), designed to walk the displaced otoconia out of the posterior semicircular canal and back into the utricle.
- Source: AAO-HNSF Clinical Practice Guideline: BPPV (Update), 2017.

**[meniere]** tags: OT, clinical, milestones: PC4, UKMLA: Vertigo, Ménière's disease, reviewer: (none)
- Front: What is the Ménière's tetrad?
- Back: Episodic vertigo (minutes-hours) + fluctuating SNHL + tinnitus + aural fullness.
- Source: Bárány Society/AAO-HNS diagnostic criteria for Ménière's disease, 2015.

**[central-vertigo]** tags: OT, clinical, milestones: PC4, UKMLA: Vertigo, Dizziness, RED FLAG, reviewer: (none)
- Front: Which dizziness features point CENTRAL rather than peripheral?
- Back: HINTS applies only to acute vestibular syndrome (continuous vertigo with spontaneous nystagmus), not to positional vertigo. A central pattern = any ONE of: normal/negative head-impulse test, direction-changing or vertical nystagmus, or skew deviation (mnemonic INFARCT). Any single central component overrides the others → image for posterior-circulation stroke. Do not use HINTS for positional or episodic vertigo.
- Source: Kattah et al., HINTS exam, Stroke 2009.

**[facial-palsy]** tags: OT, clinical, milestones: PC4, MK1, UKMLA: Facial weakness, Bell's palsy, RED FLAG, reviewer: (none)
- Front: Distinguish central from peripheral facial palsy, and why it matters in otology.
- Back: Peripheral (LMN): forehead involved (Bell's, or otologic causes: cholesteatoma, necrotizing OE, tumor). Central (UMN): forehead spared → stroke workup. Facial weakness with ear disease is an ENT red flag.
- Source: AAN Practice Guideline: Bell's Palsy, 2012.

**[ramsay-hunt]** tags: OT, clinical, milestones: PC4, MK1, UKMLA: Facial weakness, Bell's palsy, RED FLAG, reviewer: (none)
- Front: What must you inspect for before diagnosing Bell's palsy, and why?
- Back: Examine the ear canal and auricle for zoster vesicles: Ramsay Hunt syndrome (herpes zoster oticus) causes a more severe palsy with worse recovery and warrants antivirals PLUS steroids, unlike Bell's palsy. Bell's palsy is a diagnosis of exclusion, so a normal ear-canal exam is part of making it.
- Source: Standard otology teaching on Ramsay Hunt syndrome (herpes zoster oticus).

**[otosclerosis-card]** tags: OT, clinical, milestones: PC4, MK3, UKMLA: Hearing loss, reviewer: (none)
- Front: The audiogram finding classically linked to otosclerosis, an artifactual dip in bone conduction near 2000 Hz that improves after successful stapes surgery, is called the [...].
- Back: The audiogram finding classically linked to otosclerosis, an artifactual dip in bone conduction near 2000 Hz that improves after successful stapes surgery, is called the Carhart notch. Otosclerosis itself is autosomal-dominant bone remodeling that fixes the stapes footplate, often worsening in pregnancy.
- Source: Standard otology teaching on otosclerosis.

**[tympanometry-differential-card]** tags: OT, clinical, milestones: PC4, MK3, UKMLA: Hearing loss, reviewer: (none)
- Front: On tympanometry, how do otosclerosis, OME, and ossicular discontinuity differ?
- Back: Otosclerosis: Type As (normal peak pressure, reduced/shallow compliance: a stiff system). OME: Type B (flat, no peak: fluid behind the drum). Ossicular discontinuity: abnormally high-compliance Type Ad (a floppy, hypermobile system), the opposite mechanical picture from otosclerosis.
- Source: Jerger, tympanogram classification, Archives of Otolaryngology 1970.

**[cholesteatoma-classification-card]** tags: OT, clinical, milestones: PC4, MK3, UKMLA: Ear and nasal discharge, Otitis media, reviewer: (none)
- Front: A white mass behind an intact, normal-looking tympanic membrane in a child with no history of perforation or ear surgery is [...].
- Back: A white mass behind an intact, normal-looking tympanic membrane in a child with no history of perforation or ear surgery is congenital cholesteatoma, a keratin rest that failed to involute embryologically. It's easy to miss, since the drum itself looks unremarkable.[figure: Congenital cholesteatoma: a white mass behind an intact, normal-looking TM in a child.]
- Source: Standard otology teaching on cholesteatoma.

**[cholesteatoma-erosion-card]** tags: OT, clinical, milestones: PC4, MK3, UKMLA: Ear and nasal discharge, Facial weakness, RED FLAG, reviewer: (none)
- Front: Cholesteatoma needs [...] rather than antibiotic drops alone, because the sac's bone-resorbing enzymes keep eroding nearby structures regardless of infection control.
- Back: Cholesteatoma needs mastoidectomy rather than antibiotic drops alone, because the sac's bone-resorbing enzymes keep eroding nearby structures regardless of infection control. Erosion can reach the ossicular chain, the facial nerve canal, the lateral semicircular canal, or the tegmen tympani.[figure: Cholesteatoma requires mastoidectomy, not drops, because its enzymes keep eroding nearby bone.]
- Source: Standard otology teaching on cholesteatoma; Cummings Otolaryngology-Head and Neck Surgery, 7th ed.

**[vestibular-schwannoma-workup-card]** tags: OT, clinical, milestones: PC4, UKMLA: Hearing loss, Acoustic neuroma, Tinnitus, RED FLAG, reviewer: (none)
- Front: The imaging study of choice for a suspected vestibular schwannoma, able to detect tumors only a few millimeters across, is [...].
- Back: The imaging study of choice for a suspected vestibular schwannoma, able to detect tumors only a few millimeters across, is MRI of the internal auditory canals with and without gadolinium contrast. Management then ranges from observation through stereotactic radiosurgery to microsurgical resection, chosen by tumor size, growth, and hearing status.[figure: MRI of the internal auditory canals with gadolinium is the imaging study of choice for vestibular schwannoma.]
- Source: ACR Appropriateness Criteria: Hearing Loss and/or Vertigo (asymmetric SNHL imaging); Cummings Otolaryngology-Head and Neck Surgery, 7th ed.

**[house-brackmann-card]** tags: OT, clinical, milestones: PC4, MK1, UKMLA: Facial weakness, Acoustic neuroma, reviewer: (none)
- Front: The scale that grades facial nerve function from Grade I, normal function, to Grade VI, total paralysis, is the [...].
- Back: The scale that grades facial nerve function from Grade I, normal function, to Grade VI, total paralysis, is the House-Brackmann scale. It documents facial nerve status before and after otologic or skull-base surgery, such as vestibular schwannoma resection.GradeDescriptorOverall / at restForeheadEyeMouthSynkinesis / spasmINormalNormal symmetry and tone in all areasNormalNormalNormalNoneIIMild dysfunctionSlight weakness on close inspection; normal symmetry/tone at restModerate-good movementComplete closure with minimal effortSlight asymmetry with max effortAbsent or barely noticeableIIIModerate dysfunctionObvious but not disfiguring difference; normal symmetry/tone at restSlight-moderate movementComplete closure with effortSlightly weak with max effortNoticeable but not severe; hemifacial spasm may developIVModerately severe dysfunctionObvious weakness and/or disfiguring asymmetry; normal tone at restNo movementIncomplete closureAsymmetric with max effortSevere enough to interfere with functionVSevere dysfunctionOnly barely perceptible motion; asymmetry at restNoneIncomplete closureSlight movementUsually absentVITotal paralysisNo movement; loss of tone; asymmetryNoneNoneNoneNone
- Source: House JW, Brackmann DE. Facial nerve grading system. Otolaryngol Head Neck Surg. 1985.

**[meniere-criteria-card]** tags: OT, clinical, milestones: PC4, UKMLA: Vertigo, Ménière's disease, reviewer: (none)
- Front: The Bárány Society/AAO-HNS 2015 criteria for definite Ménière's disease require at least two spontaneous vertigo episodes, each lasting between [...].
- Back: The Bárány Society/AAO-HNS 2015 criteria for definite Ménière's disease require at least two spontaneous vertigo episodes, each lasting between 20 minutes and 12 hours. The diagnosis also needs audiometrically documented low-to-mid-frequency SNHL and fluctuating aural symptoms in the affected ear. Probable MD widens the episode duration to 20 minutes-24 hours and drops the audiometric confirmation requirement.
- Source: Bárány Society/AAO-HNS diagnostic criteria for Ménière's disease, 2015.

**[meniere-management-ladder-card]** tags: OT, clinical, milestones: PC4, UKMLA: Ménière's disease, reviewer: (none)
- Front: In the Ménière's disease step-up management ladder, [...] is reserved for vertigo refractory to diet, diuretics, and intratympanic steroids, because it risks further hearing loss.
- Back: In the Ménière's disease step-up management ladder, intratympanic gentamicin is reserved for vertigo refractory to diet, diuretics, and intratympanic steroids, because it risks further hearing loss. This 'chemical labyrinthectomy' controls vertigo well but is only relatively selective for vestibular over cochlear hair cells.
- Source: Standard otology/neurotology teaching on Ménière's disease management.

**[noe-pathogen-progression-card]** tags: OT, clinical, milestones: PC4, UKMLA: Painful ear, Otitis externa, RED FLAG, reviewer: (none)
- Front: The classic pathogen behind necrotizing (malignant) otitis externa, invading the skull base from the canal floor almost always in a diabetic or immunocompromised patient, is [...].
- Back: The classic pathogen behind necrotizing (malignant) otitis externa, invading the skull base from the canal floor almost always in a diabetic or immunocompromised patient, is Pseudomonas aeruginosa. As osteomyelitis spreads along the skull base, CN VII is affected first, followed by CN IX, X, XI, and then CN XII.
- Source: Standard otology teaching on necrotizing (malignant) otitis externa.

**[cochlear-implant-candidacy-card]** tags: OT, clinical, milestones: PC4, UKMLA: Hearing loss, reviewer: (none)
- Front: Cochlear implant candidacy requires [...] with limited benefit from appropriately fit hearing aids, confirmed by aided speech-perception testing.
- Back: Cochlear implant candidacy requires severe-to-profound sensorineural hearing loss with limited benefit from appropriately fit hearing aids, confirmed by aided speech-perception testing. Unlike a hearing aid, an implant bypasses damaged cochlear hair cells and stimulates the auditory nerve directly. Since 2019, FDA-approved indications also include single-sided deafness and asymmetric hearing loss (age &ge;5 years; profound SNHL in the affected ear with near-normal hearing contralaterally), not only bilateral severe-to-profound loss.
- Source: Standard neurotology teaching on cochlear implant candidacy (FDA-approved criteria; AAO-HNS Cochlear Implants clinical indicators statement).

---

## Module: Pediatric ENT (`pediatric-ent`)
- version: 0.4.0-draft
- status: DRAFT, pending faculty review. v0.2.0: added a depth pass covering genuinely missing pediatric-specific topics, congenital aural atresia/microtia and congenital (vs acquired) cholesteatoma, pediatric 
- facultyReviewer: ""
- curriculum anchors: UKMLA Content Map (GMC), scope anchor; owns Painful ear, Hearing loss, Stridor, Neck lump, Nasal obstruction, Snoring, Facial/periorbital swelling, all at pediatric-specific depth; ACGME Otolaryngology-HNS Milestones 2.0, primarily PC7 Pediatric Otolaryngology; AAP Clinical Practice Guidelines: Otitis Media, Tonsillectomy, Childhood Obstructive Sleep Apnea Syndrome; AAO-HNSF Clinical Practice Guidelines: Tympanostomy Tubes, Tonsillectomy in Children; UK undergraduate Delphi (Lloyd 2014), student-scope depth cap
- subtitle: The child is not a small adult: airway anatomy, ear disease, congenital anomalies, and the red flags unique to kids.

### Anatomy notes

**The pediatric airway vs the adult airway** (tags: Funnel-shaped · Cephalad · Floppy airway)

- Funnel-shaped, narrowest at the subglottis (vs the glottis in adults).
- Larynx sits more cephalad (about C3-4 vs C4-6).
- Tongue and tonsils are relatively larger for the airway size.
- Epiglottis is omega-shaped and floppier.
- So small amounts of edema cause disproportionate obstruction, and airway emergencies escalate faster.[figure: Explains why a child's funnel-shaped airway (narrowest at the subglottis, cephalad larynx, floppy omega-shaped epiglottis) makes small amounts of edema disproportionately obstructive compared to an adult's cylindrical airway.]

**Eustachian tube anatomy in children** (tags: Shorter, horizontal tube · Childhood otitis)

[figure: Contrasts the child's shorter, more horizontal Eustachian tube with the adult's steeper tube to explain why otitis media is a childhood disease.]
- A child's Eustachian tube is shorter, more horizontal, and less angled than an adult's.
- It therefore drains the middle ear less efficiently and lets nasopharyngeal secretions and pathogens reflux more easily.
- This is why otitis media is overwhelmingly a childhood disease, becoming far less common once the tube matures toward its adult angle.

**The branchial (pharyngeal) apparatus: the framework** (tags: Arches · Clefts · Pouches)

The branchial apparatus appears in weeks 4-7 as a series of bulges on the side of the embryonic head that build the face and neck. Learn the three-part vocabulary first, then hang every anomaly off it.

- Arches = the bulges themselves. Each has its own cartilage, muscle, artery (aortic arch), and cranial nerve. Mesoderm + neural crest core.
- Clefts (grooves) = the outside (ectoderm) gaps between arches.
- Pouches = the inside (endoderm) gaps between arches.Clefts are outside (Cutaneous), pouches are inside (Pharyngeal).
There are 6 arches, but arch 5 is rudimentary/absent, so clinically you learn arches 1, 2, 3, 4, and 6. Only the first cleft stays as a normal adult structure (the external auditory canal); every other cleft and pouch should obliterate by week 7. Failure to obliterate produces the anomalies covered next.
Tissue of origin: a cleft anomaly is lined by ectoderm (skin/squamous), a pouch anomaly by endoderm.
[figure: Explains second branchial cleft anomalies and the classic tract from a neck pit anterior to the SCM up to the tonsillar fossa.]

**Arch derivatives: cartilage, muscle & nerve** (tags: Arch nerves · Muscles · Skeleton)

Each arch is a self-contained package: its skeleton, its muscles, and its own cranial nerve all move together. The nerve of an arch supplies the muscles of that same arch.

- Arch 1 (mandibular): CN V3 (trigeminal). Muscles: mastication, mylohyoid, anterior belly of digastric, tensor tympani, tensor veli palatini. Skeleton: Meckel's cartilage -> malleus & incus; mandible, maxilla (membranous bone).
- Arch 2 (hyoid): CN VII (facial). Muscles: facial expression, stapedius, stylohyoid, posterior belly of digastric. Skeleton: Reichert's cartilage -> stapes, styloid process, lesser horn + upper hyoid.
- Arch 3: CN IX (glossopharyngeal). Muscle: stylopharyngeus. Skeleton: greater horn + lower body of hyoid.
- Arch 4: CN X, superior laryngeal branch. Muscles: pharyngeal constrictors, cricothyroid, levator veli palatini. Skeleton: thyroid & most laryngeal cartilages.
- Arch 6: CN X, recurrent laryngeal branch. Muscles: intrinsic laryngeal muscles (except cricothyroid). Skeleton: cricoid, arytenoid, remaining laryngeal cartilages.The cranial nerves of the arches run V, VII, IX, X in order (arches 1-2-3-4/6): trigeminal, facial, glossopharyngeal, then vagus, the same nerves involved in the gag/swallow reflex arc.
The cricothyroid is the exception: the one intrinsic laryngeal muscle innervated from arch 4 (superior laryngeal nerve); all other intrinsic laryngeal muscles arise from arch 6 (recurrent laryngeal nerve). This is the anatomic basis for the RLN and the external branch of the SLN being the two nerves at risk in thyroid surgery.

**Pouch derivatives (endoderm): glands & spaces** (tags: Pouch derivatives · Glands · Spaces)

The pouches are endodermal and become glands and spaces (thymus, parathyroids, middle ear, tonsil), contrasting with clefts (their external counterpart), which mostly disappear.

- Pouch 1 -> middle ear cavity + Eustachian tube (also contributes to the tympanic membrane).
- Pouch 2 -> palatine tonsil (crypts/surface epithelium).
- Pouch 3 -> inferior parathyroids + thymus.
- Pouch 4 -> superior parathyroids (+ ultimobranchial body -> C cells).Parathyroid Origin and Descent: inferior parathyroids arise from pouch 3, superior parathyroids from pouch 4, an inversion of the expected numeric order because pouch 3 also carries the thymus, dragging its parathyroids inferiorly past the pouch-4 pair as the thymus descends. This is also why an ectopic inferior parathyroid can end up in the mediastinum with the thymus.
DiGeorge syndrome (22q11.2) is failure of pouches 3 and 4, producing absent thymus (T-cell immunodeficiency) and absent parathyroids (hypocalcemia).

**Waldeyer's ring: the foundational picture** (tags: Adenoids · Tonsils · Lymphoid ring)

A ring of mucosa-associated lymphoid tissue (MALT) encircling the opening of the oral and nasal cavities into the pharynx, first described by Wilhelm von Waldeyer. It is the body's first-line immune "gatekeeper" at the crossroads of the respiratory and alimentary tracts, sampling inhaled and ingested antigens.
The four components, superior to inferior:

- Pharyngeal tonsil (adenoids): single, midline, in the roof/posterior wall of the nasopharynx. Not seen on routine oral exam (needs mirror/endoscopy).
- Tubal tonsils: paired, at the torus tubarius around each Eustachian tube opening. The component students most often forget, and the anatomic link between adenoid disease and middle-ear effusion.
- Palatine tonsils: paired, in the tonsillar fossa between the palatoglossal (anterior) and palatopharyngeal (posterior) arches. These are "the tonsils" seen on oral exam and graded on the Brodsky scale (0-4+, where 4+ = "kissing" tonsils).
- Lingual tonsil: at the base of the tongue.Superior to inferior: adenoid (roof) -> tubal (around the tubes) -> palatine (visible on oral exam) -> lingual (tongue base).
Immunologically: lymphoid tissue with germinal centers activating B cells against nasally/orally encountered pathogens, sampled through deep epithelial crypts (the palatine tonsil has 10-30 branched crypts, massively expanding surface area but also trapping debris and becoming an infection reservoir). Unlike lymph nodes, tonsils have no afferent lymphatics: antigen reaches them directly across the epithelium.
[figure: Describes the ring of lymphoid tissue (adenoids, tubal tonsils, palatine tonsils, lingual tonsil) guarding the aerodigestive entrance.]

**The age curve: why this is a childhood problem** (tags: Peak ages 2-8 · Regression)

Adenoid and tonsillar tissue is small at birth, grows through early childhood, peaks roughly between ages 2 and 8 (relative to a still-small pharynx), then regresses through adolescence.
This growth-then-involution curve, layered on repeated viral/bacterial antigen exposure, is exactly why obstructive and infectious tonsil disease clusters in preschool/early-school-age children and becomes far less common in adults, in whom adenoids are usually vestigial.
Blood supply pearl (bleeding risk): the palatine tonsil is fed mainly by the tonsillar branch of the facial artery, with contributions from the ascending pharyngeal, lingual, and descending palatine arteries: all from the external carotid system.

**The two clinical endpoints** (tags: Recurrent tonsillitis · Obstruction)

The same ring produces two distinct, high-yield problems depending on whether infection or bulk dominates:

- Recurrent tonsillitis: repeated infection/inflammation of the palatine tonsils (histologically: fibrosis, reduced follicles, strong inflammatory infiltrate). Drives the recurrent-infection indication for tonsillectomy (Paradise-criteria frequency).
- Adenotonsillar hypertrophy -> obstruction: bulk enlargement narrows the nasopharyngeal/oropharyngeal airway, producing mouth breathing, snoring, sleep-disordered breathing, and pediatric OSA (now the leading indication for T&A). Tubal/adenoid hypertrophy also obstructs the Eustachian tube -> otitis media with effusion. Chronic untreated obstruction can cause the "adenoid facies" dentofacial changes and, if severe/prolonged, cor pulmonale.Waldeyer's ring is protective lymphoid tissue that predictably enlarges in early childhood, helpful for immunity, but when it over-enlarges or is chronically infected it becomes the anatomic root of recurrent tonsillitis, middle-ear effusion, and pediatric obstructive sleep apnea.

### Anatomy diagrams (4)

**Diagram: Pediatric vs adult airway shape**

Funnel-shaped vs cylindrical: why a little swelling goes a long way in a child. Name each feature, then reveal.

_Image source: Pediatric vs. Adult Airway Anatomy and Geometric Differences. Illustration generated with Google Gemini._
- Tongue: relatively larger for the airway size in a child, crowding the oropharynx; proportionally smaller relative to airway size in an adult.
- Epiglottis: omega-shaped and floppier in a child; flatter and stiffer in an adult.
- Larynx sits more cephalad in a child (~C3-4) than in an adult (~C4-6, more caudal).
- Vocal cords (glottis): the true vocal folds; in a child this is NOT the narrowest point (the subglottis below it is), but in an adult this IS the narrowest point of the airway.
- In a child, the airway is narrowest at the SUBGLOTTIS, not the glottis, so mucosal edema here causes disproportionate obstruction. In an adult, the airway is narrowest at the GLOTTIS (true vocal cords), unlike the child's subglottic narrowing.
- Subglottis: bounded by the complete cricoid ring, the narrowest fixed point of a child's airway; present in the adult too, but there it is not the narrowest point (the glottis above it is).
- Cricoid cartilage: the only complete (360-degree) cartilage ring in the airway, defining the subglottis; same landmark in the adult, just further from the narrowest point.
- Trachea: continues below the cricoid; shorter overall length and funnel-shaped in a child, roughly cylindrical caliber in an adult.
- Tongue: relatively larger for the airway size in a child, crowding the oropharynx; proportionally smaller relative to airway size in an adult.
- Epiglottis: omega-shaped and floppier in a child; flatter and stiffer in an adult.
- Larynx sits more cephalad in a child (~C3-4) than in an adult (~C4-6, more caudal).
- Vocal cords (glottis): the true vocal folds; in a child this is NOT the narrowest point (the subglottis below it is), but in an adult this IS the narrowest point of the airway.
- In a child, the airway is narrowest at the SUBGLOTTIS, not the glottis, so mucosal edema here causes disproportionate obstruction. In an adult, the airway is narrowest at the GLOTTIS (true vocal cords), unlike the child's subglottic narrowing.
- Subglottis: bounded by the complete cricoid ring, the narrowest fixed point of a child's airway; present in the adult too, but there it is not the narrowest point (the glottis above it is).
- Cricoid cartilage: the only complete (360-degree) cartilage ring in the airway, defining the subglottis; same landmark in the adult, just further from the narrowest point.
- Trachea: continues below the cricoid; shorter overall length and funnel-shaped in a child, roughly cylindrical caliber in an adult.

**Diagram: Second branchial cleft tract**

The classic route from a preauricular/neck pit toward the tonsillar fossa. Name each landmark, then reveal.

_Image source: Second Branchial Cleft Anomalies Anatomic Tract. Illustration generated with Google Gemini._
- Tonsillar fossa: the internal (deep) end of the classic second branchial cleft tract.
- Sternocleidomastoid muscle: the tract runs deep to (medial to) this muscle as it courses toward the tonsil, and the external opening classically sits anterior to its lower third.
- Tonsillar fossa: where a persistent second branchial cleft tract terminates internally.
- Second branchial cleft tract: the embryologic remnant that gives rise to branchial cleft cysts, sinuses, and fistulae.
- Carotid sheath: the tract runs between the internal and external carotid arteries, close to this neurovascular bundle.
- Branchial cleft cyst (typical location): presents as a smooth, often fluctuant lateral neck mass anterior to the SCM.
- External opening (skin pit): a pit or sinus anterior to the lower SCM; can intermittently drain mucoid fluid or become infected.

**Diagram: Waldeyer's ring**

The lymphoid ring guarding the aerodigestive entrance. Name each component, then reveal.

_Image source: Waldeyer's Ring of Lymphoid Tissue. Illustration generated with Google Gemini._
- Tubal tonsil: lymphoid tissue around the pharyngeal (Eustachian tube) opening, part of Waldeyer's ring though less commonly tested.
- Adenoids (nasopharyngeal tonsil): a single midline mass in the nasopharyngeal roof; hypertrophy is a leading cause of pediatric nasal obstruction and OSA.
- Nasopharynx: the space behind the nasal cavity where the adenoids sit, bounded inferiorly by the soft palate.
- Palatine tonsil: the paired tonsils visible on oral exam; the ones removed in a routine tonsillectomy.
- Oropharynx: houses the palatine tonsils between the soft palate and the hyoid bone.
- Tongue: its posterior third (base) carries the lingual tonsil.
- Lingual tonsil: lymphoid tissue at the tongue base; can hypertrophy and contribute to obstructive sleep apnea, especially after tonsillectomy.

**Diagram: Pediatric vs adult Eustachian tube angle**

Same tube, different geometry: shorter and flatter in a child, longer and steeper in an adult. Name each feature, then reveal.

_Image source: Pediatric vs. Adult Eustachian Tube Orientation and Drainage. Illustration generated with Google Gemini._
- Middle ear (child): the air-filled space medial to the tympanic membrane that the Eustachian tube must ventilate and drain. Middle ear (adult): the same space, ventilated by a longer, steeper Eustachian tube.
- Tympanic membrane (child): separates the middle ear from the ear canal; retraction/effusion here reflects poor Eustachian tube function. Tympanic membrane (adult): normally well-aerated because the adult Eustachian tube equalizes pressure and drains effectively.
- Eustachian tube (child): shorter, floppier, and more horizontal than in an adult, so it drains and ventilates the middle ear less efficiently, predisposing to otitis media. Eustachian tube (adult): longer, stiffer, and angled closer to vertical (~45 degrees), giving more effective drainage and ventilation.
- Nasopharynx (child): the Eustachian tube's nasopharyngeal opening; the tube's flatter angle here favors reflux of nasopharyngeal secretions into the middle ear. Nasopharynx (adult): the tube's steeper angle here makes reflux far less likely than in a child.
- Child Eustachian tube: shorter, flatter, drains poorly, i.e. the anatomic basis for the high incidence of otitis media in young children.
- Middle ear (child): the air-filled space medial to the tympanic membrane that the Eustachian tube must ventilate and drain. Middle ear (adult): the same space, ventilated by a longer, steeper Eustachian tube.
- Tympanic membrane (child): separates the middle ear from the ear canal; retraction/effusion here reflects poor Eustachian tube function. Tympanic membrane (adult): normally well-aerated because the adult Eustachian tube equalizes pressure and drains effectively.
- Eustachian tube (child): shorter, floppier, and more horizontal than in an adult, so it drains and ventilates the middle ear less efficiently, predisposing to otitis media. Eustachian tube (adult): longer, stiffer, and angled closer to vertical (~45 degrees), giving more effective drainage and ventilation.
- Nasopharynx (child): the Eustachian tube's nasopharyngeal opening; the tube's flatter angle here favors reflux of nasopharyngeal secretions into the middle ear. Nasopharynx (adult): the tube's steeper angle here makes reflux far less likely than in a child.
- Adult Eustachian tube: longer, steeper, drains well, one reason acute otitis media becomes far less common after early childhood.

### Clinical blocks (17)

**[ome-vs-aom] Otitis media with effusion (OME) vs acute otitis media (AOM)**

The distinction changes management entirely.

|  | OME | AOM |
| --- | --- | --- |
| Definition | Fluid behind an intact TM, no acute infection signs | Acute infection: bulging TM, acute signs/symptoms |
| Symptoms | Often none, or muffled hearing | Otalgia, fever, irritability |
| TM appearance | Dull, effusion, may see air-fluid level | Bulging, erythematous, opaque |
| First-line management | Watchful waiting (most resolve in weeks) | Analgesia for all; then observation vs high-dose amoxicillin (80-90 mg/kg/day) depending on age/severity. Use amoxicillin-clavulanate if amoxicillin in the prior 30 days, concurrent purulent conjunctivitis, or treatment failure at 48-72h. |

**[aom-observation-criteria] AOM: who can be watched, and what causes it**

Who can be observed: Always treat infants <6 months.

- Ages 6-23 months: antibiotics if bilateral, severe (T &ge;39&deg;C, moderate/severe otalgia, or otalgia &ge;48h), or otorrhea; otherwise a 48-72h observation option with shared decision-making and a rescue prescription is reasonable for mild, unilateral disease.
- Ages &ge;2 years: observation is an option for non-severe disease.
- Reassess and escalate to amoxicillin-clavulanate if not improving at 48-72h.Common organisms: Streptococcus pneumoniae, non-typeable Haemophilus influenzae, and Moraxella catarrhalis.

**[peds-tna-indications] Tonsillectomy & adenoidectomy: when it's indicated**

Recurrent infection (the 'Paradise criteria' as a reference point), each episode documented and meeting defined severity criteria:

- Roughly ≥7 episodes in 1 year
- ≥5/year for 2 years
- ≥3/year for 3 yearsIn current practice, obstructive sleep-disordered breathing/OSA from adenotonsillar hypertrophy has become the leading indication for T&A, arguably more common now than recurrent infection.

**[intracapsular-tonsillectomy] Intracapsular (partial) vs extracapsular (total) tonsillectomy**

For an obstructive indication (sleep-disordered breathing/OSA), intracapsular tonsillectomy (tonsillotomy), which removes the tonsil tissue while preserving the surrounding capsule as a biologic dressing over the pharyngeal muscle, is increasingly preferred. It gives comparable polysomnographic and quality-of-life improvement to total tonsillectomy, with less pain, faster return to normal diet, and substantially lower post-tonsillectomy hemorrhage (roughly 1.7% vs 4.1% in large cohorts, with a much lower return-to-OR rate).
The trade-off is a small risk of tonsillar regrowth and symptom recurrence (~2-15% depending on follow-up), so it requires long-term surveillance.
Extracapsular (total) tonsillectomy remains preferred when recurrent/chronic tonsillitis is the driving indication, since it definitively removes all tonsil tissue.

**[peds-tna-perioperative] Perioperative T&A essentials (AAO-HNS)**

Give a single intraoperative dose of IV dexamethasone (~0.5 mg/kg, max ~10-16 mg): it halves postoperative nausea/vomiting and speeds return to a normal diet. Some centers are now adding a short postoperative oral dexamethasone course (0.5 mg/kg on postop days 2/4/6) as an analgesic adjunct that may reduce opioid prescriptions without increasing bleeding risk, though this is emerging/optional practice, not established guidance.
Do not give routine perioperative prophylactic antibiotics: they don't reduce infection, pain, or bleeding.
Manage pain with scheduled acetaminophen &plusmn; ibuprofen (ibuprofen does not meaningfully increase bleeding). Do not administer or prescribe codeine (or codeine-containing medications) to children <12 years after tonsillectomy: ultra-rapid CYP2D6 metabolizers can convert codeine to morphine and suffer fatal respiratory depression. Tramadol shares this CYP2D6 mechanism and is likewise avoided.
Admit high-risk children (age <3, severe OSA, comorbidities) for postoperative monitoring given the risk of respiratory compromise.

**[newborn-hearing-screen] Newborn hearing screening: the 1-3-6 rule**

The 1-3-6 rule, in order:

- Screen by 1 month of age (universal newborn hearing screening, using OAE or automated ABR).
- Diagnose definitively by 3 months if screening fails.
- Begin intervention (amplification, early intervention services) by 6 months.Missing this window measurably worsens speech and language development outcomes.

**[congenital-neck-masses] Congenital neck masses by location**

Location does most of the differential work.
Thyroglossal duct cyst is the most common congenital neck mass (~70%); branchial cleft anomalies are second (~20%). Most congenital neck masses are midline (~66%).
[figure: Uses anatomic location (midline, lateral anterior to SCM, posterior triangle, preauricular) to differentiate congenital neck mass diagnoses.]

| Location | Likely diagnosis |
| --- | --- |
| Midline | Thyroglossal duct cyst (moves with tongue protrusion/swallowing); image the thyroid before excising, since it may be the only functioning thyroid tissue |
| Lateral, anterior to SCM | Branchial cleft cyst (2nd arch most common) |
| Posterior triangle | Cystic hygroma / lymphatic malformation, often present at birth or found prenatally |
| Preauricular | Preauricular pit/sinus (branchial anomaly), can become infected |

**[branchial-anomaly-rule] The unifying rule: where each branchial anomaly opens internally**

A branchial anomaly is a remnant that failed to obliterate. Whether it presents as a cyst (no opening), sinus (one opening), or fistula (opens to both skin and pharynx) depends on what persisted, but the internal opening is fixed by the arch of origin:

- 1st cleft -> external auditory canal / around the pinna & parotid (near the facial nerve).
- 2nd cleft -> tonsillar fossa (most common).
- 3rd & 4th -> pyriform sinus (3rd = base, 4th = apex; almost always left-sided).The internal opening descends in the pharynx as the arch number rises: 1st = ear, 2nd = tonsil, 3rd/4th = pyriform sinus.
Second-cleft dominance: roughly 90-95% of all branchial cleft anomalies are 2nd cleft: a lateral neck cyst along the anterior border of the SCM is a 2nd branchial cleft cyst until proven otherwise.

**[second-branchial-cleft-cyst] The 2nd branchial cleft cyst: the must-know anomaly**

Classic picture: a painless, smooth, fluctuant mass at the anterior border of the upper-third SCM, often first noticed or enlarging after an upper respiratory infection. Aspirate resembles "motor oil"/cholesterol-crystal fluid.
The tract runs from the tonsillar fossa, between the internal and external carotid arteries, superficial to CN IX and XII, and terminates at the skin anterior to the SCM.
FNA is useful and accurate for diagnosis in older children/adults, but in an adult over ~40, a "branchial cleft cyst" must have a cystic nodal metastasis from HPV+ oropharyngeal cancer excluded first.
Definitive treatment is complete surgical excision of the cyst and any tract; incomplete excision recurs. Drain/treat active infection before elective excision.

**[pyriform-sinus-tract] 3rd/4th anomalies: the pyriform sinus fistula pitfall**

3rd and 4th arch anomalies both open into the pyriform sinus and course near the thyroid, so they're lumped clinically as pyriform sinus fistulae. Almost always left-sided.
Classic presentation: recurrent left-sided neck abscess, or "acute suppurative thyroiditis" in a child: an otherwise rare diagnosis that should immediately raise this anomaly.
Definitive management requires identifying and obliterating the pyriform sinus tract (endoscopic cauterization or open excision), not just draining the abscess.

**[first-branchial-cleft-anomaly] 1st cleft anomaly: the facial-nerve trap**

Rare (~1% of branchial anomalies) but high-stakes: presents around the angle of the mandible/periauricular region, or as recurrent otorrhea with a normal middle ear.
The tract runs near or through the facial nerve and parotid, so excision risks CN VII injury and belongs to an experienced surgeon.

**[lateral-vs-midline-neck-masses] Lateral vs midline neck masses: the quick contrast**

Midline masses that elevate with tongue protrusion are thyroglossal duct cysts; lateral masses anterior to the SCM are branchial cleft anomalies.

| Mass | Location | Moves with tongue protrusion? | Origin |
| --- | --- | --- | --- |
| 2nd branchial cleft cyst | Lateral, anterior to SCM | No | 2nd cleft remnant |
| Thyroglossal duct cyst | Midline, near hyoid | Yes | Thyroglossal tract |
| Dermoid cyst | Midline | No | Ectodermal inclusion |
| Cystic hygroma / lymphatic malformation | Posterior triangle | No | Lymphatic |

**[congenital-airway] Congenital airway anomalies to recognize**

Choanal atresia: newborns are obligate nasal breathers, so bilateral atresia causes cyclical cyanosis that improves with crying (mouth breathing) and worsens at rest; it's part of the CHARGE association.
Laryngomalacia: the most common cause of stridor in infants, with inspiratory stridor worse when supine, feeding, or crying; it typically self-resolves by 12-18 months, but severe cases with growth failure need surgery (supraglottoplasty).

**[congenital-ear-anomalies] Congenital & structural ear anomalies: aural atresia, microtia, congenital cholesteatoma**

Aural atresia and microtia (absent/malformed ear canal and pinna) occur on a spectrum, often together, and may be isolated or syndromic (Treacher Collins syndrome, hemifacial microsomia/Goldenhar syndrome).
Unilateral cases with a normal contralateral ear can be worked up electively; bilateral atresia causes significant conductive hearing loss from birth and is urgent: audiologic assessment and a bone-conduction hearing device are needed right away, since there is no ear canal for a conventional aid and the 1-3-6 hearing timeline still applies. Surgical ear canal/pinna reconstruction is deferred to school age or later (~age 6+, once rib cartilage is adequate for grafting), so early hearing access has to come from amplification, not surgery.
Congenital cholesteatoma is a distinct entity from the acquired cholesteatoma covered in Foundations. It forms behind an intact, normal-looking tympanic membrane in a child with no history of otitis media, perforation, or ear surgery. Because there's no otorrhea to prompt a visit, it is often found incidentally (a pearly-white mass on routine exam) or via conductive hearing loss rather than discharge. Management is still surgical removal; earlier removal limits ossicular erosion.

|  | Acquired cholesteatoma (Foundations) | Congenital cholesteatoma |
| --- | --- | --- |
| History | Chronic otorrhea, prior perforation/infection | None, with no history of ear infection or perforation |
| TM appearance | Retracted/perforated, crusted attic | Intact, normal-looking |
| Typical clue | Painless foul otorrhea | Incidental pearly-white mass, or conductive hearing loss |
| Management | Surgical removal | Surgical removal, earlier where possible to limit ossicular erosion |

**[peds-osa-depth] Pediatric OSA: diagnosis and the post-adenotonsillectomy question**

Pediatric OSA is diagnosed against a different threshold than adult OSA (adult depth lives in the Sleep Surgery & OSA track): an obstructive apnea-hypopnea index (AHI) ≥1 event/hour on polysomnography is abnormal in a child, versus ≥5/hour in an adult, a much lower bar. Polysomnography remains the gold standard, though in practice many children go straight to adenotonsillectomy on a strong clinical picture (snoring, witnessed apneas, gasping) without a preoperative sleep study, per AAP guidance; PSG is reserved for cases where the diagnosis/severity is unclear or the child is high-risk for residual disease.
Adenotonsillectomy resolves OSA in most otherwise-healthy children, but not all. Risk factors for persistent/residual OSA after T&A include:

- Obesity
- Down syndrome (macroglossia, midface hypoplasia, hypotonia)
- Other craniofacial syndromes
- Severe preoperative AHIThese children should get a postoperative polysomnogram rather than being assumed cured, since a second driver of obstruction is more likely.

**[neonatal-airway-beyond-laryngomalacia] Neonatal upper airway obstruction beyond laryngomalacia**

Pierre Robin sequence is a triad of micrognathia (small mandible), glossoptosis (the tongue falls posteriorly into the airway because the small jaw can't hold it forward), and a U-shaped cleft palate. The jaw is the primary abnormality; glossoptosis and the cleft are downstream consequences. Airway obstruction from the retruded tongue is the presenting problem, not the palate itself. Management is a ladder:

- Prone positioning (lets the tongue fall forward by gravity) and a nasopharyngeal airway, first-line for mild cases.
- Tongue-lip adhesion or mandibular distraction osteogenesis, for feeding difficulty, growth failure, or significant desaturations.
- Tracheostomy, reserved as a last resort.Vascular ring and tracheomalacia both cause biphasic stridor (inspiratory and expiratory) rather than the predominantly inspiratory, positional stridor of laryngomalacia, and are often worse with feeding.
A vascular ring (an aberrant great-vessel arrangement encircling the trachea and esophagus) can also cause feeding difficulty or 'dying spells' from esophageal compression.
Where laryngomalacia is usually a clinical diagnosis, biphasic stridor warrants imaging (barium esophagram, CT/MR angiography) and often bronchoscopy to look for external tracheal compression rather than assuming a floppy larynx.

**[rrp-croup-mimic] Recurrent respiratory papillomatosis: the stridor/hoarseness mimic of croup**

Recurrent respiratory papillomatosis (RRP), introduced in Laryngology as an HPV-driven cause of hoarseness, has a distinct pediatric presentation worth knowing on its own.
Juvenile-onset RRP is acquired perinatally, from a mother with genital HPV (types 6/11) during vaginal delivery, and typically presents between ages 2 and 4 with progressive hoarseness that, as papillomas enlarge, can progress to stridor and airway compromise.
Because it is slow and recurrent, it is easy to mistake for recurrent croup or asthma. A child with 'recurrent croup' that doesn't fit the usual single-episode viral pattern, or with progressive voice change alongside noisy breathing, deserves direct laryngoscopy, not another course of steroids.
Disease burden is tracked with the Derkay staging system. Because papillomas regrow, management is repeated surgical debulking (microdebrider or CO2/KTP laser) rather than a single cure; adjuvant therapy (e.g., cidofovir, bevacizumab) is reserved for aggressive, rapidly recurring disease.
The single biggest lever on juvenile-onset RRP is prevention: routine HPV vaccination lowers the prevalence of maternal genital HPV infection and, with it, the risk of perinatal transmission.

### Red flags
- Bilateral choanal atresia in a newborn: an airway emergency (obligate nasal breathers), needing an oral airway/McGovern nipple and urgent ENT.
- Stridor with growth failure or severe apneic episodes in a laryngomalacia-presenting infant: beyond the 'watch and wait' threshold, needing surgical evaluation (supraglottoplasty).
- Congenital neck mass with rapid enlargement, fever, or fluctuance: suggests an infected branchial cleft cyst or abscess.
- Missed 1-3-6 hearing-screening window: delayed diagnosis and intervention measurably worsens speech-language outcomes.
- Midline neck mass planned for excision without thyroid imaging: must exclude ectopic thyroid first, since a thyroglossal duct cyst excision (Sistrunk) assumes normal thyroid tissue exists elsewhere.
- Worsening stridor over weeks with cutaneous hemangiomas: consider subglottic hemangioma (biphasic growth) and the PHACE syndrome association.
- Torticollis, neck pain, and refusal to move the neck in a young child: think retropharyngeal abscess or deep neck infection, not just muscular torticollis.
- Untreated pediatric OSA: can progress to growth failure, behavioral/attention problems, and, rarely, cor pulmonale if severe and prolonged.
- Pierre Robin sequence with feeding difficulty, growth failure, or desaturations: beyond what prone positioning and a nasopharyngeal airway can manage, needing escalation to tongue-lip adhesion or mandibular distraction rather than more time in the prone position.
- Progressive hoarseness with new stridor in a toddler, especially if repeatedly labeled 'croup': think recurrent respiratory papillomatosis and get a laryngoscopy rather than repeating steroids.
- Recurrent left-sided neck abscess or suppurative thyroiditis in a child: suspect a 3rd/4th pyriform sinus fistula; image and find the tract rather than repeatedly draining.
- 'Branchial cleft cyst' first appearing in an adult >40: exclude a cystic metastasis from HPV+ oropharyngeal carcinoma before calling it congenital.
- Recurrent otorrhea with a normal-looking middle ear &plusmn; periauricular swelling: consider a 1st branchial cleft anomaly near the facial nerve.
- Neonate/infant with hypocalcemia, recurrent infections, and congenital heart disease: think DiGeorge syndrome (pouch 3/4 failure).

### Cases (9)

**Case [case-choanal-atresia]**

Stem: A newborn has episodes of cyanosis at rest that resolve with crying, and repeated attempts to pass a nasal catheter fail bilaterally.

- Q: What is happening, and why does crying help?
  A: Newborns are obligate nasal breathers; bilateral choanal atresia blocks the nasal airway, and crying opens the mouth, allowing oral breathing and relieving the cyanosis.

- Q: What is the immediate management, and what association should be considered?
  A: Secure an oral airway (e.g., a McGovern nipple) urgently and get ENT involved. Screen for the CHARGE association (Coloboma, Heart defects, Atresia choanae, Retarded growth, Genital abnormalities, Ear abnormalities).

Teaching: A newborn whose cyanosis improves with crying and worsens at rest has an obstructed nose until proven otherwise. Bilateral choanal atresia is an airway emergency in this age group specifically.

**Case [case-recurrent-aom]**

Stem: A 4-year-old has had 6 episodes of acute otitis media in the past 12 months, each treated with antibiotics, with persistent effusion noted between episodes.

- Q: Does this meet criteria for surgical intervention, and what would it be?
  A: This approaches the recurrent AOM threshold (historically referenced against the Paradise criteria, ~7/year). Combined with persistent effusion, this supports tympanostomy tube placement, which reduces episode frequency and severity and treats the effusion's hearing impact directly.

- Q: What would push you toward T&A instead of, or in addition to, tubes?
  A: If there were also obstructive symptoms (snoring, sleep-disordered breathing) from adenotonsillar hypertrophy, adenoidectomy (± tonsillectomy) would be added, since obstructive sleep-disordered breathing is now the leading indication for T&A in children.

Teaching: Recurrent AOM plus persistent effusion is a tympanostomy-tube conversation; add T&A to the conversation only if there's also an obstructive component.

**Case [case-failed-newborn-screen]**

Stem: A newborn fails the automated ABR hearing screen before hospital discharge. The parents are told 'it's probably just fluid, don't worry about it.'

- Q: Is that reassurance appropriate?
  A: Not without a defined follow-up plan. A failed screen requires diagnostic audiologic testing by 3 months of age; dismissing it risks missing the window for early intervention.

- Q: What happens if hearing loss is confirmed?
  A: Intervention (amplification, early intervention services) should begin by 6 months. The full '1-3-6' timeline (screen by 1 month, diagnose by 3, intervene by 6) exists because early intervention measurably improves speech-language outcomes.

Teaching: A failed newborn hearing screen is not a reassurance conversation. It's the start of a time-sensitive diagnostic pathway.

**Case [case-thyroglossal-cyst]**

Stem: A 3-year-old has a painless midline neck swelling that moves upward when he sticks out his tongue.

- Q: What is the leading diagnosis, and what confirms it clinically?
  A: Thyroglossal duct cyst. The movement with tongue protrusion (and with swallowing) reflects its embryologic attachment along the thyroglossal duct tract.

- Q: What must be done before surgery, and why?
  A: Thyroid ultrasound (± thyroid function tests) to confirm normal thyroid tissue is present in its usual location. In a minority of cases the cyst contains the patient's only functioning thyroid tissue, and removing it without checking could cause surgical hypothyroidism. Definitive treatment is the Sistrunk procedure.

Teaching: [figure: Child with a midline neck mass moving with tongue protrusion, diagnosed as thyroglossal duct cyst, requiring thyroid imaging before Sistrunk procedure.]Don't excise a midline neck cyst without imaging the thyroid first. 'It's probably just a thyroglossal cyst' still needs that one confirmatory step.

**Case [case-laryngomalacia-vs-hemangioma]**

Stem: A 6-week-old has inspiratory stridor, worse when feeding and lying supine, present since 2 weeks of age. He is gaining weight normally.

- Q: What is the most likely diagnosis, and what is the expected course?
  A: Laryngomalacia, the most common cause of infant stridor, positional and feeding-related, and typically self-resolves by 12-18 months. Reassurance and monitoring growth is appropriate for mild cases.

- Q: What change in this picture would make you reconsider, and what would you consider instead?
  A: Worsening stridor over weeks (rather than stable/improving), growth failure, or cutaneous hemangiomas elsewhere should raise concern for a subglottic hemangioma (biphasic growth pattern, can rapidly enlarge) and its association with PHACE syndrome. This needs direct airway evaluation, not reassurance.

Teaching: Stable or improving stridor in a thriving infant is reassuring for laryngomalacia; worsening stridor is a reason to look for something else, not to wait longer.

**Case [case-pierre-robin]**

Stem: A newborn has a very small, retruded jaw, a U-shaped cleft palate noted on newborn exam, and noisy, obstructed breathing that improves somewhat prone but still shows intermittent desaturations and difficulty completing feeds.

- Q: What is the diagnosis, and what actually causes the airway obstruction?
  A: Pierre Robin sequence. Micrognathia is the primary abnormality; the small jaw can't hold the tongue forward, so glossoptosis (the tongue falling posteriorly) obstructs the airway. The U-shaped cleft palate is a downstream consequence, not the cause of obstruction.

- Q: Given ongoing desaturations and feeding difficulty despite prone positioning, what's next?
  A: This has moved beyond first-line positioning and nasopharyngeal airway. Escalate to tongue-lip adhesion or mandibular distraction osteogenesis to relieve the obstruction; tracheostomy is reserved for cases that fail this step.

Teaching: In Pierre Robin sequence the jaw is the problem and the tongue is the airway threat. The palate cleft comes along for the ride, and persistent desaturations mean positioning alone has failed.

**Case [case-rrp-mimic-croup]**

Stem: A 3-year-old has had four episodes of 'croup' over 8 months, each treated with steroids and racemic epinephrine with only partial improvement. Between episodes his voice has become progressively more hoarse, and his parents now notice noisy breathing even when he's calm.

- Q: What should make you doubt the recurrent-croup label?
  A: True viral croup is typically a single self-limited illness following a URI, not four recurrences with progressively worsening interval hoarseness. That pattern instead fits recurrent respiratory papillomatosis (RRP).

- Q: What's the next step, and how did he most likely acquire it?
  A: Direct laryngoscopy to look for papillomas, not another course of steroids. Juvenile-onset RRP is acquired perinatally from maternal genital HPV (types 6/11) during vaginal delivery.

Teaching: Progressive interval hoarseness plus recurrent 'croup' that doesn't fit the usual viral pattern is a laryngoscopy indication, not a repeat-steroids indication.

**Case [case-pediatric-airway-foreign-body]**

Stem: A 20-month-old is brought in with a 2-week history of persistent cough and intermittent wheeze that hasn't improved with an albuterol trial. His mother recalls no choking episode, though he was playing near a bowl of popcorn and small toy blocks around when the cough began. He is afebrile and well-grown; a chest X-ray was read as normal.

- Q: Does the absence of a witnessed choking event, or a normal chest X-ray, rule out foreign body aspiration?
  A: No. Pediatric airway foreign body aspiration peaks between ages 1 and 3 years, when children explore orally and lack molars to fully chew, and caregivers often never witness the event. The classic triad (cough, wheeze, and decreased breath sounds) is frequently incomplete or absent, especially once the acute phase passes. Most aspirated foreign bodies (peanuts, popcorn, toy fragments) are radiolucent, so a normal plain film does not exclude the diagnosis.

- Q: What imaging beyond a standard inspiratory chest X-ray would help, and what are you looking for?
  A: Inspiratory-expiratory films (or a lateral decubitus series in a child too young to cooperate) looking for air-trapping: a ball-valve effect where the affected lung fails to deflate on expiration (or the down lung fails to collapse in decubitus positioning), causing unilateral hyperinflation. The object itself is rarely seen; the indirect sign of trapped air is often the only clue.

- Q: Would it matter if the object were a button battery rather than a toy block or food item?
  A: Yes. This is the key organic/inorganic distinction. A button battery in the airway (or esophagus) is a true emergency: it causes liquefactive necrosis of surrounding tissue within hours via generated current, and needs emergent removal, not routine scheduling. Organic material (peanuts, other food) is not as immediately tissue-destructive but provokes an intense local inflammatory reaction the longer it sits, making removal progressively harder, so even 'routine' organic foreign bodies should not be delayed.

- Q: What is the definitive diagnostic and therapeutic step here, regardless of what the imaging shows?
  A: Rigid bronchoscopy under general anesthesia. It is both diagnostic (directly visualizes the airway) and therapeutic (allows controlled extraction with rigid grasping forceps while maintaining ventilation). A high-suspicion history (even without positive imaging) is enough to proceed to bronchoscopy; imaging supports the decision but a negative film should not stop it.

Teaching: Pediatric airway foreign body aspiration peaks at ages 1-3, the classic triad is often absent, and most objects are radiolucent. A normal CXR doesn't clear the diagnosis, and rigid bronchoscopy remains both the definitive test and the treatment.

**Case [case-pediatric-retropharyngeal-abscess]**

Stem: A 3-year-old has had 4 days of fever and reduced oral intake following a recent upper respiratory infection. On exam she holds her neck rigidly extended and cries when you try to flex or rotate it, her voice sounds muffled, and she is drooling.

- Q: What diagnosis fits neck stiffness, muffled voice, and drooling in a young febrile child, and why does she extend rather than flex her neck?
  A: Retropharyngeal abscess, typically a disease of children under 6 years, arising when a preceding URI/pharyngitis seeds the retropharyngeal lymph nodes, which suppurate. The child extends the neck to maximize airway calibre and avoid pressure on the inflamed prevertebral space; flexion and rotation are painful, producing torticollis and neck stiffness that can be mistaken for meningitis or muscular torticollis.

- Q: What would a lateral neck X-ray show, and what's a simple threshold to remember?
  A: Widened prevertebral soft tissue, classically cited as >7mm at C2 or >14mm at C6 in a child, though a simpler pediatric rule of thumb is comparing the prevertebral soft-tissue width to the width of the adjacent vertebral body: soft tissue clearly wider than the vertebral body it sits against is abnormal. A lateral neck film is a useful, quick screening test but is not definitive on its own.

- Q: What is the definitive imaging study, and what key distinction must it make?
  A: Contrast-enhanced CT of the neck. It distinguishes a discrete, drainable abscess (a rim-enhancing fluid collection) from phlegmon (diffuse inflammatory infiltration without an organized collection), a distinction that directly changes management.

- Q: How does management differ between phlegmon and a true abscess?
  A: Phlegmon can often be managed with IV antibiotics alone and close observation, since there is no collection to drain. A well-defined or enlarging abscess, especially with airway compromise, sepsis, or failure to improve on antibiotics, needs surgical incision and drainage in addition to IV antibiotics.

Teaching: [figure: Young child with fever, rigid neck extension, muffled voice, and drooling from a retropharyngeal abscess, diagnosed with contrast CT distinguishing abscess from phlegmon.]Pediatric retropharyngeal abscess presents in a child typically under 6 with fever, neck stiffness/torticollis, muffled voice, and drooling after a preceding URI; a widened prevertebral space on lateral X-ray screens for it, but contrast CT is what separates a drainable abscess from phlegmon and decides whether surgery joins IV antibiotics.

### Flashcards (47)

**[peds-airway-anatomy-card]** tags: PE, anatomy, milestones: MK1, PC7, UKMLA: Stridor, reviewer: (none)
- Front: Name three ways a child's airway anatomy differs from an adult's, and why it matters.
- Back: Funnel-shaped (narrowest at the subglottis, not the glottis), larynx more cephalad (~C3-4), and a larger tongue/tonsils relative to airway size with a floppier, omega-shaped epiglottis. Together, these mean small amounts of airway edema cause disproportionately severe obstruction compared to an adult.[figure: Flashcard on three anatomic differences between a child's and an adult's airway (funnel shape, cephalad larynx, floppy epiglottis).]
- Source: Standard pediatric airway anatomy teaching.

**[et-tube-child-card]** tags: PE, anatomy, milestones: MK1, PC7, UKMLA: Painful ear, reviewer: (none)
- Front: Why does a child's Eustachian tube anatomy predispose to otitis media?
- Back: It is shorter, more horizontal, and less angled than an adult's, draining the middle ear less efficiently and allowing nasopharyngeal secretions to reflux more easily. This is why otitis media is predominantly a disease of early childhood.[figure: Flashcard on why a child's Eustachian tube anatomy predisposes to otitis media.]
- Source: Standard pediatric otologic anatomy teaching.

**[waldeyers-ring-card]** tags: PE, anatomy, milestones: MK1, PC7, UKMLA: Sore throat, reviewer: (none)
- Front: What structures make up Waldeyer's ring?
- Back: Adenoids (nasopharyngeal tonsil), paired palatine tonsils, and the lingual tonsil: a ring of lymphoid tissue at the aerodigestive entrance that hypertrophies with recurrent antigen exposure in childhood.[figure: Flashcard on the structures composing Waldeyer's ring.]
- Source: Standard pediatric anatomy teaching.

**[branchial-cleft-anatomy-card]** tags: PE, anatomy, milestones: MK1, PC7, UKMLA: Neck lump, reviewer: (none)
- Front: Where does a second branchial cleft anomaly classically track, and where does it present?
- Back: From a pit/sinus anterior to the sternocleidomastoid in the lower neck, tracking along the carotid sheath up toward the tonsillar fossa. This is the anatomic basis for the classic branchial cleft cyst location.
- Source: Standard pediatric embryology teaching.

**[ome-vs-aom-card]** tags: PE, clinical, milestones: PC7, PC4, UKMLA: Painful ear, reviewer: (none)
- Front: Distinguish OME from AOM, and state first-line management for each.
- Back: OME: fluid behind an intact TM without acute infection signs, often asymptomatic. First-line is watchful waiting (most resolve in weeks). AOM: a bulging, erythematous TM with acute symptoms (otalgia, fever), managed with observation or amoxicillin depending on age and severity.
- Source: AAP Clinical Practice Guideline: Otitis Media with Effusion.

**[aom-treatment-card]** tags: PE, pharm, milestones: SBP3, PC7, UKMLA: Painful ear, reviewer: (none)
- Front: What determines whether a child with AOM gets watchful waiting vs immediate antibiotics?
- Back: Immediate antibiotics for: age <6 months (any AOM); otorrhea or severe symptoms (T &ge;39&deg;C, moderate-severe or &ge;48h otalgia) at any age; and children 6-23 months with bilateral AOM. Observation for 48-72h (shared decision-making, with analgesia and assured follow-up) is an option for 6-23 months with non-severe unilateral AOM, and for &ge;24 months with non-severe unilateral or bilateral AOM. First-line is high-dose amoxicillin (80-90 mg/kg/day divided BID). Use high-dose amoxicillin-clavulanate first-line instead when H. influenzae is likely: antibiotics in the prior 30 days, concurrent purulent conjunctivitis, or TM rupture. Duration: 10 days if <2 years or severe; 7 days for ages 2-5; 5-7 days for &ge;6 years with mild-moderate disease. Avoid macrolides (pneumococcal resistance).
- Source: AAP Clinical Practice Guideline: Diagnosis and Management of Acute Otitis Media, 2013.

**[tna-indications-card]** tags: PE, clinical, milestones: PC7, PC9, UKMLA: Sore throat, reviewer: (none)
- Front: What are the two main indication categories for pediatric tonsillectomy/adenoidectomy?
- Back: Recurrent infection meeting frequency criteria (historically referenced against the Paradise criteria: ~7/yr, 5/yr×2yrs, or 3/yr×3yrs), and obstructive sleep-disordered breathing/OSA from adenotonsillar hypertrophy, now the leading indication for T&A in current practice.
- Source: AAO-HNSF Clinical Practice Guideline: Tonsillectomy in Children (Update), 2019.

**[intracapsular-tonsillectomy-card]** tags: PE, clinical, milestones: PC7, PC9, UKMLA: Sore throat, reviewer: (none)
- Front: For an obstructive (OSA) indication, [...] tonsillectomy is increasingly preferred over total tonsillectomy because it roughly halves post-tonsillectomy bleeding, at the cost of a small risk of regrowth.
- Back: For an obstructive (OSA) indication, intracapsular (partial) tonsillectomy (tonsillotomy) is increasingly preferred over total tonsillectomy because it roughly halves post-tonsillectomy bleeding (and markedly lowers return-to-OR rates), at the cost of a small risk of tonsillar regrowth/recurrence. Total (extracapsular) tonsillectomy is still preferred when recurrent/chronic tonsillitis is the indication.
- Source: Blackshaw et al., Cochrane Database Syst Rev, 2020; Loh et al., Int J Pediatr Otorhinolaryngol, 2024.

**[peds-tna-perioperative-card]** tags: PE, pharm, milestones: PC7, SBP3, UKMLA: Sore throat, reviewer: (none)
- Front: In pediatric tonsillectomy, a single intraoperative dose of [...] reduces nausea/vomiting, while routine perioperative antibiotics are not recommended and codeine is contraindicated.
- Back: In pediatric tonsillectomy, a single intraoperative dose of IV dexamethasone (~0.5 mg/kg) reduces PONV and speeds return to normal diet. Routine perioperative prophylactic antibiotics are not recommended (no benefit for infection/pain/bleeding), and codeine is contraindicated post-T&A because ultra-rapid CYP2D6 metabolizers risk fatal respiratory depression. Base analgesia on scheduled acetaminophen &plusmn; ibuprofen.
- Source: Mitchell et al., AAO-HNS Tonsillectomy in Children Update, Otolaryngol Head Neck Surg, 2019.

**[ear-tubes-card]** tags: PE, clinical, milestones: PC7, PC4, UKMLA: Painful ear, reviewer: (none)
- Front: What are the indications for tympanostomy tube placement?
- Back: Recurrent AOM (with intervening effusion), or persistent OME ≥3 months with associated hearing loss or other concern (speech delay, at-risk child). Tubes ventilate the middle ear and reduce both infection frequency and effusion-related hearing impact.
- Source: AAO-HNSF Clinical Practice Guideline: Tympanostomy Tubes in Children (Update), 2022.

**[newborn-hearing-screen-card]** tags: PE, clinical, milestones: PC7, PC4, UKMLA: Hearing loss, reviewer: (none)
- Front: State the '1-3-6 rule' for newborn hearing screening.
- Back: Screen by 1 month (universal newborn hearing screening, using OAE or automated ABR), diagnose by 3 months if screening fails, intervene (amplification/early intervention) by 6 months. Missing this window measurably worsens speech-language outcomes.
- Source: Standard pediatric audiology teaching: the 1-3-6 rule.

**[congenital-hl-causes-card]** tags: PE, clinical, milestones: PC7, MK3, UKMLA: Hearing loss, reviewer: (none)
- Front: What are the leading causes of congenital sensorineural hearing loss?
- Back: Genetic (most common single cause: connexin 26 / GJB2 mutations), congenital CMV infection (leading non-genetic/infectious cause), and syndromic causes (Usher, Waardenburg, Pendred syndromes among others). Confirming congenital CMV requires testing (saliva/urine PCR) within the first ~3 weeks of life; after that, a positive test can't distinguish congenital from postnatal infection. Symptomatic congenital CMV (including CNS involvement/SNHL) is treated with oral valganciclovir (16 mg/kg/dose BID) for 6 months in moderate-severe disease, or ~6 weeks for isolated SNHL, with weekly neutrophil monitoring for neutropenia. CMV-related SNHL is frequently delayed/progressive, so ~40% of affected infants pass the newborn screen and need ongoing audiologic surveillance.
- Source: Standard pediatric audiology/genetics teaching.

**[congenital-neck-mass-card]** tags: PE, clinical, milestones: PC7, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: Use location to differentiate congenital neck masses.
- Back: - Midline → thyroglossal duct cyst (moves with tongue protrusion).
- Lateral, anterior to SCM → branchial cleft cyst.
- Posterior triangle → cystic hygroma/lymphatic malformation.
- Preauricular → preauricular pit/sinus.
- Source: Standard pediatric otolaryngology teaching on congenital neck masses.

**[thyroglossal-cyst-card]** tags: PE, clinical, milestones: PC7, PC3, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: What must be confirmed before excising a suspected thyroglossal duct cyst, and what is the definitive operation?
- Back: Confirm normal thyroid tissue exists in its usual location (ultrasound ± thyroid function), since the cyst may be the patient's only functioning thyroid tissue. Definitive treatment is the Sistrunk procedure (removes the cyst, the central hyoid bone segment, and the tract to the tongue base to minimize recurrence).
- Source: Standard pediatric otolaryngology teaching.

**[branchial-cleft-cyst-card]** tags: PE, clinical, milestones: PC7, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: What is the most common branchial cleft anomaly, and where does it present?
- Back: A second branchial cleft anomaly, presenting as a cyst, sinus, or fistula anterior to the sternocleidomastoid, sometimes tracking toward the tonsillar fossa. Can become infected and present acutely as a tender, enlarging neck mass.
- Source: Standard pediatric otolaryngology teaching.

**[choanal-atresia-card]** tags: PE, clinical, milestones: PC7, PC1, UKMLA: Nasal obstruction, RED FLAG, reviewer: (none)
- Front: Why is bilateral choanal atresia an emergency, and what association should be screened for?
- Back: Newborns are obligate nasal breathers, so bilateral atresia causes cyclical cyanosis at rest that improves with crying. Secure an oral airway urgently and screen for the CHARGE association (Coloboma, Heart defects, Atresia choanae, Retarded growth, Genital/ear abnormalities).
- Source: Standard pediatric otolaryngology teaching.

**[laryngomalacia-card]** tags: PE, clinical, milestones: PC7, PC6, UKMLA: Stridor, reviewer: (none)
- Front: What is laryngomalacia, and what is its typical course?
- Back: The most common cause of stridor in infants: collapse of floppy supraglottic structures on inspiration, worse when supine, feeding, or crying. Typically self-resolves by 12-18 months; severe cases with growth failure or significant apnea need surgery (supraglottoplasty).
- Source: Standard pediatric airway teaching on laryngomalacia.

**[subglottic-hemangioma-card]** tags: PE, clinical, milestones: PC7, PC6, UKMLA: Stridor, RED FLAG, reviewer: (none)
- Front: What should make you reconsider a diagnosis of simple laryngomalacia in favor of subglottic hemangioma?
- Back: - Reconsider laryngomalacia when: stridor is worsening (rather than stable/improving) over weeks, growth follows a biphasic pattern typical of infantile hemangiomas, or there are cutaneous hemangiomas elsewhere raising concern for PHACE syndrome.
- Needs direct airway evaluation; first-line medical treatment is propranolol.
- Propranolol is typically titrated to ~2-3 mg/kg/day divided 2-3 times daily, continued ~6-12 months, with airway clearance rates ~96%. Give after feeds and hold when the infant is ill/not feeding (hypoglycemia risk).
- Screen for PHACE syndrome before high-dose therapy, since large segmental facial/PHACE hemangiomas may warrant a lower dose and cerebrovascular imaging first.
- Source: Standard pediatric airway teaching on subglottic hemangioma.

**[peds-osa-card]** tags: PE, clinical, milestones: PC7, PC9, UKMLA: Snoring, Obstructive sleep apnoea, reviewer: (none)
- Front: What is the leading cause of pediatric OSA, and the first-line treatment?
- Back: Adenotonsillar hypertrophy is the leading cause, unlike adult OSA, which is driven more by obesity and soft-tissue redundancy. First-line treatment is adenotonsillectomy, not CPAP, which is the adult first-line.
- Source: Standard pediatric sleep medicine teaching.

**[cleft-lip-palate-card]** tags: PE, clinical, milestones: PC7, SBP2, UKMLA: Neck lump, reviewer: (none)
- Front: Cleft palate disrupts normal [...], causing a very high rate of chronic otitis media with effusion, so most affected children need tympanostomy tubes.
- Back: Cleft palate disrupts normal Eustachian tube function, causing a very high rate of chronic otitis media with effusion, so most affected children need tympanostomy tubes. Repair is staged: lip around 3 months, palate around 12 months, by a multidisciplinary craniofacial team.
- Source: Standard pediatric craniofacial teaching.

**[peds-fb-card]** tags: PE, clinical, milestones: PC7, PC1, UKMLA: Ear and nasal discharge, RED FLAG, reviewer: (none)
- Front: A [...] lodged in the nose, ear canal, or esophagus is a time-critical emergency, causing liquefactive necrosis within hours.
- Back: A button battery lodged in the nose, ear canal, or esophagus is a time-critical emergency, causing liquefactive necrosis within hours. Toddlers are the peak age group for foreign bodies generally, since they explore orally and manually without judgment.
- Source: AAP clinical guidance on pediatric foreign bodies; National Capital Poison Center button-battery data.

**[peds-neck-infection-card]** tags: PE, clinical, milestones: PC7, PC1, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: What presentation in a young child should make you consider retropharyngeal abscess rather than simple torticollis?
- Back: Torticollis with neck pain, refusal to move or extend the neck, fever, and drooling/odynophagia. This combination points to a deep neck space infection (retropharyngeal abscess), not benign muscular torticollis, and warrants urgent imaging (contrast CT neck) and ENT involvement.
- Source: Standard pediatric otolaryngology teaching on deep neck infections.

**[microtia-aural-atresia-card]** tags: PE, clinical, milestones: PC7, PC4, UKMLA: Hearing loss, reviewer: (none)
- Front: In congenital aural atresia, unilateral cases with a normal contralateral ear can be worked up electively, while [...] atresia is urgent because it causes significant conductive hearing loss from birth.
- Back: In congenital aural atresia, unilateral cases with a normal contralateral ear can be worked up electively, while bilateral atresia is urgent because it causes significant conductive hearing loss from birth. Bilateral cases need audiologic assessment and amplification right away, since the 1-3-6 hearing timeline still applies.
- Source: Standard pediatric otologic teaching on aural atresia and microtia.

**[congenital-cholesteatoma-card]** tags: PE, clinical, milestones: PC7, PC4, UKMLA: Hearing loss, reviewer: (none)
- Front: Congenital cholesteatoma forms behind an [...], in a child with no history of otitis media, perforation, or ear surgery.
- Back: Congenital cholesteatoma forms behind an intact, normal-looking tympanic membrane, in a child with no history of otitis media, perforation, or ear surgery. It's often found incidentally, as a pearly-white mass or conductive hearing loss, rather than the foul otorrhea typical of acquired disease.
- Source: Standard pediatric otologic teaching on congenital cholesteatoma.

**[bone-anchored-hearing-device-card]** tags: PE, clinical, milestones: PC7, PC4, UKMLA: Hearing loss, reviewer: (none)
- Front: In bilateral aural atresia, a [...] hearing device transmits sound vibration directly through the skull to the inner ear, bypassing the atretic canal and middle ear entirely.
- Back: In bilateral aural atresia, a bone-conduction hearing device transmits sound vibration directly through the skull to the inner ear, bypassing the atretic canal and middle ear entirely. It bridges hearing access until surgical ear canal reconstruction is feasible, typically around age 6.
- Source: Standard pediatric audiology teaching on bone-conduction amplification.

**[pediatric-osa-ahi-card]** tags: PE, clinical, milestones: PC7, PC9, UKMLA: Obstructive sleep apnoea, Snoring, reviewer: (none)
- Front: What obstructive AHI defines OSA in a child, and how does it compare to the adult threshold?
- Back: An obstructive AHI ≥1 event/hour on polysomnography is abnormal in a child, far lower than the adult threshold of ≥5/hour (see Sleep Surgery & OSA track). PSG remains the gold standard, though many children proceed straight to adenotonsillectomy on a strong clinical picture without a preoperative sleep study.
- Source: AAP Clinical Practice Guideline: Diagnosis and Management of Childhood Obstructive Sleep Apnea Syndrome, 2012 (reaffirmed); AASM pediatric scoring criteria.

**[peds-osa-post-ta-card]** tags: PE, clinical, milestones: PC7, PC9, UKMLA: Obstructive sleep apnoea, Snoring, RED FLAG, reviewer: (none)
- Front: Children with [...] are at high risk of persistent OSA after adenotonsillectomy, due to macroglossia, midface hypoplasia, and hypotonia, and should get a postoperative polysomnogram rather than being assumed cured.
- Back: Children with Down syndrome are at high risk of persistent OSA after adenotonsillectomy, due to macroglossia, midface hypoplasia, and hypotonia, and should get a postoperative polysomnogram rather than being assumed cured. Obesity, other craniofacial syndromes, and severe preoperative AHI also raise this risk.
- Source: Standard pediatric sleep medicine teaching on residual OSA after adenotonsillectomy.

**[pierre-robin-sequence-card]** tags: PE, clinical, milestones: PC7, PC1, UKMLA: Stridor, RED FLAG, reviewer: (none)
- Front: In Pierre Robin sequence, the airway obstruction is caused by [...], the tongue falling posteriorly because the small jaw cannot hold it forward, not by the cleft palate itself.
- Back: In Pierre Robin sequence, the airway obstruction is caused by glossoptosis, the tongue falling posteriorly because the small jaw cannot hold it forward, not by the cleft palate itself. Micrognathia is the primary abnormality, and the cleft palate is a downstream consequence.
- Source: Standard pediatric craniofacial airway teaching on Pierre Robin sequence.

**[vascular-ring-tracheomalacia-card]** tags: PE, clinical, milestones: PC7, PC6, UKMLA: Stridor, reviewer: (none)
- Front: Vascular ring and tracheomalacia both cause [...] stridor, inspiratory and expiratory, unlike the predominantly inspiratory, positional stridor of laryngomalacia.
- Back: Vascular ring and tracheomalacia both cause biphasic stridor, inspiratory and expiratory, unlike the predominantly inspiratory, positional stridor of laryngomalacia. Biphasic stridor warrants imaging, such as a barium esophagram or CT/MR angiography, rather than assuming a floppy larynx.
- Source: Standard pediatric airway teaching on vascular ring and tracheomalacia.

**[rrp-pediatric-card]** tags: PE, clinical, milestones: PC7, PC6, UKMLA: Stridor, reviewer: (none)
- Front: Juvenile-onset recurrent respiratory papillomatosis is acquired [...], from a mother with genital HPV types 6/11 during vaginal delivery, and typically presents between ages 2 and 4 with progressive hoarseness that can advance to stridor.
- Back: Juvenile-onset recurrent respiratory papillomatosis is acquired perinatally, from a mother with genital HPV types 6/11 during vaginal delivery, and typically presents between ages 2 and 4 with progressive hoarseness that can advance to stridor. It's easily mistaken for recurrent croup, so progressive hoarseness with atypical 'croup' warrants direct laryngoscopy.
- Source: Standard pediatric laryngology teaching on recurrent respiratory papillomatosis.

**[hpv-vaccine-rrp-prevention-card]** tags: PE, clinical, milestones: PC7, SBP1, UKMLA: Stridor, reviewer: (none)
- Front: How does HPV vaccination relate to preventing pediatric recurrent respiratory papillomatosis (RRP)?
- Back: Juvenile-onset RRP is acquired perinatally from maternal genital HPV (types 6/11). Routine HPV vaccination lowers the prevalence of maternal genital HPV infection and, with it, the risk of perinatal transmission. It's a rare example of a vaccine given to one generation reducing a pediatric ENT disease in the next.
- Source: Standard public-health teaching on HPV vaccination and perinatal RRP transmission.

**[branchial-cleft-vs-pouch-card]** tags: PE, embryo, milestones: MK1, PC7, UKMLA: Neck lump, reviewer: (none)
- Front: In the branchial apparatus, clefts are lined by [...] and become skin-side structures, while pouches are lined by [...] and become glands/spaces.
- Back: Clefts are lined by ectoderm (only the 1st persists, as the external auditory canal); pouches are lined by endoderm (middle ear, tonsil, thymus, parathyroids).
- Source: Standard embryology teaching on the branchial apparatus.

**[branchial-arch-nerves-card]** tags: PE, embryo, milestones: MK1, PC7, UKMLA: Neck lump, reviewer: (none)
- Front: Name the cranial nerve of branchial arches 1, 2, 3, and 4/6 in order.
- Back: V3, VII, IX, X (arch 1 -> V3, arch 2 -> VII, arch 3 -> IX, arch 4 & 6 -> X). The nerve of each arch supplies the muscles derived from that arch.
- Source: Standard embryology teaching on the branchial apparatus.

**[branchial-arch1-vs-arch2-card]** tags: PE, embryo, milestones: MK1, PC7, UKMLA: Neck lump, reviewer: (none)
- Front: Contrast the skeletal derivatives of arch 1 vs arch 2.
- Back: Arch 1 (V3): Meckel's cartilage -> malleus + incus; mandible/maxilla; muscles of mastication. Arch 2 (VII): Reichert's cartilage -> stapes, styloid process, lesser horn + upper hyoid; muscles of facial expression.
- Source: Standard embryology teaching on the branchial apparatus.

**[branchial-pouch-derivatives-card]** tags: PE, embryo, milestones: MK1, PC7, UKMLA: Neck lump, reviewer: (none)
- Front: Match pouches 1-4 to their adult derivatives.
- Back: 1 -> middle ear + Eustachian tube; 2 -> palatine tonsil; 3 -> inferior parathyroids + thymus; 4 -> superior parathyroids (+ ultimobranchial body/C cells).
- Source: Standard embryology teaching on the branchial apparatus.

**[parathyroid-pouch-inversion-card]** tags: PE, embryo, milestones: MK1, PC7, UKMLA: Neck lump, reviewer: (none)
- Front: Why do the inferior parathyroids come from a lower-numbered pouch than the superior ones?
- Back: Inferior parathyroids = pouch 3, superior parathyroids = pouch 4. Pouch 3 also carries the thymus, which descends and drags the pouch-3 parathyroids inferiorly past the pouch-4 pair.
- Source: Standard embryology teaching on the branchial apparatus.

**[digeorge-pouches-card]** tags: PE, clinical, milestones: MK1, PC7, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: DiGeorge syndrome (22q11.2) results from failure of pouches [...], causing which two clinical deficits?
- Back: Pouches 3 and 4 -> absent thymus (T-cell immunodeficiency) and absent parathyroids (hypocalcemia), often with conotruncal cardiac defects.
- Source: Standard embryology teaching on the branchial apparatus.

**[branchial-anomaly-internal-opening-card]** tags: PE, clinical, milestones: PC7, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: State the internal opening for 1st, 2nd, and 3rd/4th branchial anomalies.
- Back: 1st -> external auditory canal (periauricular/parotid, near CN VII); 2nd -> tonsillar fossa; 3rd/4th -> pyriform sinus.
- Source: Standard pediatric otolaryngology teaching on branchial anomalies.

**[second-branchial-cleft-cyst-tract-card]** tags: PE, clinical, milestones: PC7, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: Describe the classic 2nd branchial cleft cyst and its tract.
- Back: Painless fluctuant mass at the anterior border of the upper-third SCM, often enlarging after a URI; ~90-95% of branchial anomalies. Tract runs from the tonsillar fossa between the internal and external carotid arteries. Treatment: complete surgical excision.
- Source: Standard pediatric otolaryngology teaching on branchial anomalies.

**[pyriform-sinus-fistula-card]** tags: PE, clinical, milestones: PC7, PC3, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: A child with recurrent left-sided neck abscess or acute suppurative thyroiditis should raise suspicion for [...].
- Back: A 3rd/4th branchial (pyriform sinus) fistula, almost always left-sided. Definitive treatment obliterates the pyriform sinus tract (endoscopic cautery or open excision), not just abscess drainage.
- Source: Standard pediatric otolaryngology teaching on branchial anomalies.

**[first-branchial-cleft-facial-nerve-card]** tags: PE, clinical, milestones: PC7, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: Why is a 1st branchial cleft anomaly higher-stakes surgically than a 2nd?
- Back: It sits at the angle of the mandible/periauricular region and its tract runs near or through the facial nerve and parotid; excision risks CN VII injury. Suspect it with recurrent otorrhea and a normal middle ear.
- Source: Standard pediatric otolaryngology teaching on branchial anomalies.

**[branchial-vs-thyroglossal-exam-card]** tags: PE, clinical, milestones: PC7, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: How do you distinguish a branchial cleft cyst from a thyroglossal duct cyst on exam?
- Back: Branchial = lateral, anterior to SCM, does not move with the tongue. Thyroglossal = midline, near the hyoid, moves up with tongue protrusion/swallowing; confirm normal thyroid before Sistrunk excision.
- Source: Standard pediatric otolaryngology teaching on congenital neck masses.

**[waldeyers-ring-components-card]** tags: PE, anatomy, milestones: MK1, PC7, UKMLA: Sore throat, reviewer: (none)
- Front: Name the four components of Waldeyer's ring from superior to inferior.
- Back: Pharyngeal tonsil (adenoids, nasopharyngeal roof) -> tubal tonsils (around the Eustachian tube openings) -> palatine tonsils (tonsillar fossa, seen on oral exam) -> lingual tonsil (tongue base). Mnemonic: A-T-P-L. The tubal tonsils are the commonly forgotten fourth component.
- Source: Standard pediatric anatomy teaching.

**[waldeyers-ring-malt-card]** tags: PE, anatomy, milestones: MK1, PC7, UKMLA: Sore throat, reviewer: (none)
- Front: What kind of tissue is Waldeyer's ring, and what makes its antigen sampling distinctive?
- Back: Mucosa-associated lymphoid tissue (MALT) with germinal centers, acting as first-line immune defense at the aerodigestive entrance. It samples antigen through deep epithelial crypts and, unlike lymph nodes, has no afferent lymphatics: antigen crosses the epithelium directly.
- Source: Standard pediatric anatomy teaching.

**[waldeyers-ring-age-curve-card]** tags: PE, clinical, milestones: PC7, MK1, UKMLA: Sore throat, reviewer: (none)
- Front: Why do tonsil and adenoid problems cluster in early childhood?
- Back: Adenotonsillar lymphoid tissue grows through early childhood (peaking ~ages 2-8 relative to a small pharynx) then regresses in adolescence. This growth curve plus recurrent antigen exposure makes obstructive and infectious tonsil disease a predominantly pediatric problem; adenoids are usually vestigial in adults.
- Source: Standard pediatric anatomy teaching.

**[waldeyers-ring-endpoints-card]** tags: PE, clinical, milestones: PC7, PC9, UKMLA: Sore throat, reviewer: (none)
- Front: What are the two distinct clinical endpoints of Waldeyer's ring disease?
- Back: (1) Recurrent tonsillitis (repeated palatine tonsil infection -> recurrent-infection indication for tonsillectomy) and (2) adenotonsillar hypertrophy causing airway obstruction (snoring, sleep-disordered breathing, pediatric OSA, and Eustachian-tube obstruction -> middle-ear effusion). Obstructive hypertrophy is now the leading indication for T&A.
- Source: Standard pediatric anatomy teaching.

**[palatine-tonsil-blood-supply-card]** tags: PE, anatomy, milestones: MK1, PC9, UKMLA: Sore throat, reviewer: (none)
- Front: What is the dominant blood supply to the palatine tonsil, and why does it matter?
- Back: The tonsillar branch of the facial artery (with ascending pharyngeal, lingual, and descending palatine contributions), all from the external carotid system. This rich supply explains the post-tonsillectomy hemorrhage risk.
- Source: Standard pediatric anatomy teaching.

---

## Module: Pharmacology Pocket Guide (`pharm-pocket`)
- version: 
- status: DRAFT, pending faculty review. Verify all doses locally before prescribing.
- facultyReviewer: ""
- subtitle: Point-of-care antimicrobial and steroid choices for the ENT rotation: otic drops, sudden hearing loss, deep neck infections, and the antibiotic classes worth knowing cold.

### Clinical blocks (9)

**[otic-drops] Otic drop selection: the open middle ear rule**

The single most important principle in otic pharmacology.
When the tympanic membrane is perforated or a tube is present, the middle ear is open to the round/oval window, so a drop can reach the inner ear. Choose a non-ototoxic fluoroquinolone and avoid aminoglycosides, alcohol, and acidifying agents (ototoxicity and pain).

| Setting | Preferred drops | Avoid |
| --- | --- | --- |
| Open middle ear (perforation or tubes) | Fluoroquinolone: ofloxacin, or ciprofloxacin + dexamethasone (Ciprodex) | Aminoglycosides (neomycin, gentamicin, tobramycin); alcohol or acidifying drops |
| Intact TM (uncomplicated otitis externa) | Acidifying/antiseptic, aminoglycoside combinations, or fluoroquinolone with or without a steroid; add a wick if the canal is edematous | Ototoxicity is not the concern with an intact drum |

**[otic-drops-pearls] Otic drops: practical pearls**

- Assume a tube is patent for about 12 months after placement (sometimes longer) unless extrusion and drum closure are documented; treat as an open middle ear.
- Patients who taste the drops or can blow air out the ear have a non-intact TM.
- Tragal pumping and aural toileting before drops improve middle-ear penetration.
- For tube otorrhea and chronic suppurative otitis media, topical antibiotics outperform oral (far higher local concentration).
- If an aminoglycoside drop is unavoidable in a discharging ear: only with active infection, for no more than 2 weeks, document the rationale, and get baseline audiometry if practical.

**[issnhl] Sudden SNHL (ISSNHL): steroid regimens**

An otologic emergency. Greatest benefit within the first 2 weeks; treat within 7 days when possible.
Definition: at least 30 dB SNHL across 3 contiguous frequencies over 72 hours or less. Always get an audiogram to confirm and an MRI to exclude retrocochlear pathology.

| Route | Regimen | Role |
| --- | --- | --- |
| Oral (first-line) | Prednisone 1 mg/kg/day as a single morning dose (usual max 60 mg), about 10 to 14 days including a taper | Default first-line |
| Intratympanic | Dexamethasone or methylprednisolone, about 3 injections spaced 3 to 7 days apart | Salvage after oral failure; first-line alternative when systemic steroids are risky (e.g. diabetes); combined with oral for severe/profound loss |

**[issnhl-equiv] Steroid dose equivalence**

Avoid underdosing when switching agents:
Prednisone 60 mg &asymp; methylprednisolone 48 mg &asymp; dexamethasone 10 mg.
Counsel on hyperglycemia, insomnia, mood change, and GI upset; caution in diabetes, uncontrolled hypertension, and peptic ulcer disease. Verify doses locally before prescribing.

**[pta-dnsi] Peritonsillar abscess & deep neck infections**

Airway first, then source control plus antibiotics.
These infections are polymicrobial (aerobic gram-positives plus oral anaerobes). Cover Streptococcus pyogenes, the S. anginosus group, S. aureus, and anaerobes (Fusobacterium, Prevotella). Drainage plus IV antibiotics is the paradigm.

| Scenario | First-line | Penicillin allergy | Add-on |
| --- | --- | --- | --- |
| PTA / DNSI, standard | Ampicillin-sulbactam IV | Clindamycin | Vancomycin if MRSA risk |
| Cephalosporin-based regimen | Ceftriaxone or cefuroxime | (use clindamycin) | Metronidazole for anaerobes |
| Severe/toxic or MRSA risk | Ampicillin-sulbactam + vancomycin | Clindamycin with or without vancomycin | (covered) |

**[pta-points] Deep neck infections: practical points**

- Drainage (needle aspiration or I&D for PTA; surgical drainage for a DNSI abscess, typically over 2 to 2.5 cm, airway compromise, or medical failure) is essential; antibiotics alone are often not enough.
- Metronidazole is not needed with ampicillin-sulbactam (already covers anaerobes); add it to a regimen that lacks anaerobic activity (e.g. a cephalosporin).
- Typical course about 7 to 14 days: initial IV, then oral step-down (e.g. amoxicillin-clavulanate) guided by response.
- Watch for Lemierre syndrome (Fusobacterium septic internal jugular thrombophlebitis) and mediastinal or airway extension.

**[abx-classes] Antimicrobial classes: high-yield reference**

What each class covers and where it fits in head and neck infection.

| Class | Mechanism | Key coverage | Notes |
| --- | --- | --- | --- |
| Natural penicillins (Pen G/V) | Cell wall (cidal) | GPC, some GNC, spirochetes, actinomyces | Susceptible to all beta-lactamases |
| Antistaph penicillins (oxacillin, nafcillin, dicloxacillin) | Cell wall | MSSA, susceptible strep | No gram-negative activity; beta-lactamase resistant |
| Aminopenicillins (amoxicillin, ampicillin) | Cell wall | Penicillin spectrum plus H. influenzae | Add sulbactam/clavulanate for anaerobes and beta-lactamase producers |
| Piperacillin-tazobactam | Cell wall | Broad GP and GN incl. Pseudomonas | Antipseudomonal workhorse |
| Cephalosporin, 3rd gen (ceftriaxone, ceftazidime) | Cell wall | Broad GN; ceftriaxone covers penicillin-resistant pneumococcus; ceftazidime covers Pseudomonas | Pair with metronidazole for anaerobes |
| Cephalosporin, 4th gen (cefepime) | Cell wall | Broadest GN incl. Pseudomonas |  |
| Cephalosporin, 5th gen (ceftaroline) | Cell wall | MRSA plus gram-positives; GN like ceftriaxone | Only MRSA-active cephalosporin |
| Carbapenems (ertapenem, imipenem, meropenem, doripenem) | Cell wall | Very broad: GP, resistant GN, anaerobes | Ertapenem lacks Pseudomonas and Enterococcus |
| Fluoroquinolones | DNA gyrase | GN bacilli, atypicals; respiratory FQs (levo, moxi) add strep | Ciprofloxacin: best Pseudomonas, poor strep (not for head/neck); never MRSA monotherapy |
| Macrolides (azithromycin, clarithromycin, erythromycin) | Protein synthesis (static) | GP and GN, atypicals | Azithro/clarithro broader and better tolerated than erythro |
| Clindamycin | Protein synthesis (static) | GP incl. MRSA and strep; strong anaerobes above the diaphragm | Ideal for odontogenic infection; standard penicillin-allergy option |
| TMP-SMX | Folate antagonist | MSSA and MRSA, pneumococcus, H. flu, enteric GN | Watch SJS/TEN and nephrotoxicity |
| Tetracyclines (doxycycline, minocycline) | Protein synthesis (static) | Broad GP/GN, atypicals | Contraindicated in children and pregnancy |
| Anti-MRSA agents | Varies | MRSA | IV: vancomycin, daptomycin, linezolid, ceftaroline. Oral: TMP-SMX, clindamycin, tetracyclines, linezolid |

**[antifungals] Antifungals for invasive head & neck disease**

| Agent | Use |
| --- | --- |
| Fluconazole | Candida |
| Voriconazole | First-line for aspergillosis |
| Echinocandins (micafungin, caspofungin, anidulafungin) | Invasive candidiasis incl. C. glabrata and C. krusei |
| Amphotericin B (liposomal preferred) | Serious infection incl. invasive rhinocerebral mucormycosis |

**[cdiff] C. difficile: antibiotic risk stratification**

Watery diarrhea with leukocytosis (may precede diarrhea); prior antibiotic use is the main risk factor.

| Risk | Antibiotics |
| --- | --- |
| Highest risk | Clindamycin, fluoroquinolones, cephalosporins, carbapenems |
| Lower risk | Macrolides, penicillins, sulfonamides |

### Flashcards (11)

**[rx-open-ear]** tags: RX, pharm, reviewer: (none)
- Front: TM perforation or tube present: which otic drops, and which to avoid?
- Back: Use a non-ototoxic fluoroquinolone (ofloxacin, or ciprofloxacin + dexamethasone). Avoid aminoglycosides and alcohol/acidifying drops (ototoxicity).
- Source: ENT Pharm Pocket Guide.

**[rx-issnhl-dose]** tags: RX, pharm, reviewer: (none)
- Front: Standard oral steroid regimen for idiopathic sudden SNHL?
- Back: Prednisone 1 mg/kg/day single morning dose (max ~60 mg), about 10 to 14 days including taper. Treat within 2 weeks of onset.
- Source: ENT Pharm Pocket Guide.

**[rx-issnhl-it]** tags: RX, pharm, reviewer: (none)
- Front: When is intratympanic steroid the go-to for sudden SNHL?
- Back: Salvage after failed oral steroids, and first-line when systemic steroids are risky (e.g. poorly controlled diabetes); combine with oral for severe loss.
- Source: ENT Pharm Pocket Guide.

**[rx-pta-firstline]** tags: RX, pharm, reviewer: (none)
- Front: First-line empiric antibiotic for PTA / deep neck infection?
- Back: Ampicillin-sulbactam IV (covers strep, S. aureus, and oral anaerobes). Add vancomycin if MRSA risk. Drainage is essential.
- Source: ENT Pharm Pocket Guide.

**[rx-penallergy]** tags: RX, pharm, reviewer: (none)
- Front: Penicillin-allergic patient with a deep neck infection: antibiotic?
- Back: Clindamycin (covers strep, S. aureus, and anaerobes).
- Source: ENT Pharm Pocket Guide.

**[rx-metronidazole]** tags: RX, pharm, reviewer: (none)
- Front: When do you add metronidazole to a head/neck infection regimen?
- Back: When the backbone lacks anaerobic coverage (e.g. a cephalosporin like ceftriaxone/cefuroxime). Not needed with ampicillin-sulbactam.
- Source: ENT Pharm Pocket Guide.

**[rx-clinda-anaerobe]** tags: RX, pharm, reviewer: (none)
- Front: Which antibiotic is ideal for odontogenic infection, and why?
- Back: Clindamycin: strong anaerobic coverage 'above the diaphragm' plus gram-positives including MRSA.
- Source: ENT Pharm Pocket Guide.

**[rx-cipro-strep]** tags: RX, pharm, reviewer: (none)
- Front: Why is ciprofloxacin a poor choice for head and neck infections?
- Back: Limited streptococcal activity. It has the best Pseudomonas coverage but should not be used for strep-driven head/neck infection, and never as MRSA monotherapy.
- Source: ENT Pharm Pocket Guide.

**[rx-voriconazole]** tags: RX, pharm, reviewer: (none)
- Front: First-line antifungal for invasive aspergillosis?
- Back: Voriconazole.
- Source: ENT Pharm Pocket Guide.

**[rx-ampho-mucor]** tags: RX, pharm, reviewer: (none)
- Front: Antifungal for invasive rhinocerebral mucormycosis?
- Back: Amphotericin B (liposomal preferred, less nephrotoxic), plus urgent surgical debridement.
- Source: ENT Pharm Pocket Guide.

**[rx-cdiff]** tags: RX, pharm, reviewer: (none)
- Front: Which antibiotic classes carry the highest C. difficile risk?
- Back: Clindamycin, fluoroquinolones, cephalosporins, and carbapenems. Lower risk: macrolides, penicillins, sulfonamides.
- Source: ENT Pharm Pocket Guide.

---

## Module: Frequently Asked Questions (rounds/procedures) (`pimp-questions`)
- version: 
- status: DRAFT, pending faculty review.
- facultyReviewer: ""
- curriculum anchors: AAO-HNSF and AAP practice standards; high-yield rotation questions for flagship procedures.; Procedure selection per resident case-log and ENT emergency-room data (Sethi et al., Laryngoscope 2015; Welschmeyer et al., Ann Otol Rhinol Laryngol 2021; Awad et al., Clin Otolaryngol 2014).; A study aid, not a clinical decision tool. Faculty should verify all doses, criteria, and anatomic teaching points before publication.

### Question sets (14)

**[pimp-oto-tubes] Myringotomy & Tympanostomy Tubes** (Otology / Neurotology, track: otology)
- Q: Indications for tympanostomy tubes?
  A: Recurrent AOM (3 or more in 6 months, or 4 or more in 12 months with one recent), or OME lasting 3 months or longer (bilateral) with hearing difficulty. Also OME with structural TM damage, or at-risk children.
- Q: Where do you make the myringotomy incision, and why?
  A: The anteroinferior (or inferior) quadrant. It keeps you off the ossicles and the chorda tympani (superior and posterior) and away from the jugular bulb, and it gives the best view and drainage.
- Q: What must you avoid in the posterosuperior quadrant?
  A: The incudostapedial joint and ossicular chain and the round window niche. Injury there risks ossicular damage and SNHL.
- Q: Most common complications of ear tubes?
  A: Otorrhea is the most common. Others: tympanosclerosis, persistent perforation, premature extrusion or retention, granulation tissue, and rarely cholesteatoma.
- Q: First-line treatment for acute tube otorrhea?
  A: Topical antibiotic drops (for example a fluoroquinolone) rather than systemic antibiotics; fluoroquinolones are non-ototoxic.
- Q: Which nerve gives referred otalgia and runs near the middle ear?
  A: Jacobson's nerve (the tympanic branch of CN IX). The chorda tympani (CN VII) carries taste from the anterior two-thirds of the tongue.
- Q: OME vs. AOM on otoscopy?
  A: OME shows a retracted or neutral TM with an air-fluid level or bubbles, reduced mobility, and no acute inflammation. AOM shows a bulging, erythematous or opacified TM with impaired mobility, sometimes with otorrhea.

**[pimp-oto-tympmastoid] Tympanoplasty / Mastoidectomy** (Otology / Neurotology, track: otology)
- Q: What is a cholesteatoma, and why is it dangerous?
  A: Keratinizing squamous epithelium trapped in the middle ear or mastoid. It erodes bone, which can destroy the ossicles and cause a labyrinthine fistula, facial nerve palsy, and intracranial complications.
- Q: CWU vs. CWD mastoidectomy?
  A: CWU keeps the posterior canal wall: better anatomy but higher recurrence, and it needs a second-look. CWD removes the wall: lower recurrence, but it leaves a mastoid bowl that needs lifelong cleaning.
- Q: What are the 3 segments of the facial nerve (intratemporal)?
  A: The fallopian (bony) canal has three segments: labyrinthine (IAC fundus to the geniculate ganglion, the shortest and narrowest), tympanic (geniculate ganglion beneath the lateral semicircular canal to the second genu), and mastoid or vertical (second genu to the stylomastoid foramen). The geniculate ganglion is the first genu. Broader six-segment schemes add the intracranial or cisternal, meatal, and extratemporal or parotid segments.
- Q: What does the tegmen separate?
  A: The tegmen tympani separates the middle ear and mastoid from the middle cranial fossa. The cog is a bony ridge anterior to the epitympanum.
- Q: Common graft materials for tympanoplasty?
  A: Temporalis fascia (most common), tragal or conchal cartilage-perichondrium, and fat.
- Q: What is Prussak's space?
  A: The epitympanic recess between the pars flaccida and the neck of the malleus, a common site for pars flaccida (attic) cholesteatoma.
- Q: Boundaries of the facial recess?
  A: Facial nerve (medial and posterior), chorda tympani (lateral and anterior), and the incus buttress (superior). This is the window for a posterior tympanotomy.
- Q: Sign of a labyrinthine fistula on exam?
  A: A positive fistula test: vertigo or nystagmus when you apply pneumatic pressure to the ear canal.
- Q: Borders of Macewen's (suprameatal) triangle?
  A: Superiorly, the supramastoid crest (temporal line); anteroinferiorly, the posterosuperior margin of the bony external auditory canal (marked by the spine of Henle); posteriorly, a tangent connecting the two. It overlies the mastoid antrum and marks the safe starting point for cortical mastoidectomy drilling.
- Q: What structure is removed to enter the mastoid antrum?
  A: You drill away the lateral mastoid cortex and the overlying air cells (a cortical mastoidectomy with saucerization). The antrum sits roughly 12-15 mm deep to Macewen's triangle, with Koerner's septum drilled through on the way.

**[pimp-rhi-ess] Endoscopic Sinus Surgery** (Rhinology / Sinus & Skull Base, track: rhinology)
- Q: Ostiomeatal complex?
  A: The final common drainage pathway of the frontal, maxillary, and anterior ethmoid sinuses into the middle meatus. Obstruction here is central to sinusitis.
- Q: Middle vs. superior meatus drainage?
  A: Middle meatus: frontal, maxillary, and anterior ethmoids. Superior meatus: posterior ethmoids. The sphenoid drains to the sphenoethmoidal recess, and the nasolacrimal duct drains to the inferior meatus.
- Q: Dangerous complications of ESS?
  A: A skull-base CSF leak (cribriform or fovea ethmoidalis injury), orbital injury (medial rectus, optic nerve), and internal carotid injury near the sphenoid.
- Q: Keros classification?
  A: It grades the depth of the olfactory fossa (cribriform relative to the fovea ethmoidalis). A higher Keros (type III) means a longer lateral lamella and a higher risk of skull-base injury.
- Q: Landmark for the anterior ethmoid artery?
  A: It runs along the skull base at the frontoethmoidal junction, a common bleeding site that can retract into the orbit.
- Q: Lamina papyracea: what lies beyond it?
  A: The thin medial orbital wall. Breaching it risks orbital fat herniation, medial rectus injury, and orbital hematoma.
- Q: Test for CSF leak?
  A: Beta-2 transferrin is the most specific. Intrathecal fluorescein can localize the leak.
- Q: Indications for ESS in CRS?
  A: Failure of appropriate medical therapy with objective disease on CT or endoscopy. Also complications, mucoceles, polyps, fungal disease, and tumor.
- Q: How do you confirm sphenoid location?
  A: It sits about 7 cm from the nasal sill at roughly 30 degrees, with the ostium medial to the superior turbinate. The carotid and optic nerve may be dehiscent laterally.
- Q: Concha bullosa?
  A: A pneumatized middle turbinate that can obstruct the OMC and contribute to sinusitis.

**[pimp-rhi-epistaxis] Epistaxis** (Rhinology / Sinus & Skull Base, track: rhinology)
- Q: Most common source of anterior epistaxis?
  A: Kiesselbach's plexus (Little's area) on the anterior septum.
- Q: Arteries forming Kiesselbach's plexus?
  A: The anterior ethmoid, sphenopalatine, greater palatine, and superior labial branches.
- Q: First-line management of an anterior bleed?
  A: Firm compression of the soft lower third of the nose for about 15 minutes, leaning forward, with or without topical oxymetazoline.
- Q: Source of posterior epistaxis?
  A: The sphenopalatine artery (the terminal maxillary branch). It may need posterior packing or SPA ligation or embolization.
- Q: Why avoid bilateral septal cautery?
  A: It risks septal perforation from bilateral mucosal and cartilage devascularization.
- Q: Key risk with posterior packing?
  A: Airway compromise, hypoxia, and pressure necrosis; these patients often need monitoring.
- Q: Which artery is ligated or embolized for refractory posterior bleeds?
  A: The sphenopalatine artery (endoscopic ligation), or the internal maxillary artery (embolization).
- Q: When should you suspect a tumor?
  A: Unilateral recurrent epistaxis with obstruction in an adult (a sinonasal neoplasm), or in an adolescent male (JNA, which you never biopsy in clinic).
- Q: Danger of an untreated septal hematoma?
  A: Avascular cartilage necrosis, which leads to a saddle-nose deformity and perforation. It needs urgent I&D.

**[pimp-rhi-transsphenoidal] Transsphenoidal Hypophysectomy (Pituitary Resection)** (Rhinology / Sinus & Skull Base, track: rhinology)
- Q: Anatomical stages of the endoscopic endonasal transsphenoidal approach?
  A: Three stages: a nasal stage (find and lateralize the middle turbinate, and elevate a nasoseptal flap if needed), a sphenoid stage (a wide sphenoidotomy through the sphenoid ostium medial to the superior turbinate), and a sellar stage (open the sella floor, incise dura, and resect tumor with ring curettes and suction). Graded skull-base reconstruction follows.
- Q: Indications for surgery?
  A: Functioning adenomas (except prolactinomas, which are treated medically first) and nonfunctioning adenomas causing mass effect: visual field loss or chiasmal compression, hypopituitarism, or apoplexy. Also tumors larger than 10 mm or with extrasellar extension or growth, and pituitary apoplexy.
- Q: What critical structures border the surgical corridor?
  A: The internal carotid arteries laterally in the cavernous sinus, the optic nerves and chiasm superiorly, the cavernous sinus and its cranial nerves (III, IV, V1-V2, VI) laterally, and the sphenoid sinus septations, which can lead to the carotid canal.
- Q: Most feared intraoperative vascular complication?
  A: Internal carotid artery injury: rare (about 0.1%) but potentially catastrophic. It is managed with packing or tamponade and emergent endovascular treatment.
- Q: Most common surgical complication postoperatively?
  A: CSF leak or rhinorrhea (about 4% after endoscopic surgery), which is also the leading cause of early reoperation. The risk rises with an intraoperative CSF leak, larger tumors, firm tumors, and extended approaches.
- Q: Most common endocrine or medical complication?
  A: Transient diabetes insipidus (about 9%), usually self-limited; permanent DI is uncommon (about 2%). Delayed hyponatremia (SIADH) around postoperative days 5-9 is the most common reason for readmission.
- Q: How is the skull base reconstructed and a leak prevented?
  A: A graded, multilayer closure of the sellar defect: hemostatic material and gelatin or fat in the sella, an inlay or onlay dural substitute, and a vascularized nasoseptal flap for higher-flow leaks.

**[pimp-lar-flexlaryng] Flexible Laryngoscopy & Vocal Fold Disorders** (Laryngology, track: laryngology)
- Q: Sensation above vs. below the cords?
  A: Above the cords (supraglottis): the internal branch of the superior laryngeal nerve. Below the cords (subglottis): the recurrent laryngeal nerve.
- Q: Which intrinsic muscle abducts the cords?
  A: The posterior cricoarytenoid, the only abductor.
- Q: Which muscle tenses the cords, and what innervates it?
  A: The cricothyroid, innervated by the external branch of the SLN. Every other intrinsic muscle is innervated by the RLN.
- Q: Unilateral RLN injury?
  A: Ipsilateral vocal fold paralysis in a paramedian position, giving a breathy, hoarse voice and aspiration risk.
- Q: Bilateral RLN injury?
  A: Both cords sit paramedian, which can obstruct the airway and cause stridor; it may need a tracheostomy.
- Q: Where do vocal fold nodules form, and why?
  A: At the junction of the anterior and middle thirds of the membranous cord, the point of maximal vibratory contact. They are usually bilateral and come from voice overuse.
- Q: Layers of the vocal fold?
  A: Epithelium, superficial lamina propria (Reinke's space), intermediate and deep lamina propria (the vocal ligament), and the thyroarytenoid muscle (the body).
- Q: Reinke's edema associations?
  A: Chronic smoking, and voice abuse, which put fluid in the superficial lamina propria and deepen the voice.

**[pimp-hn-tonsils] Tonsillectomy & Adenoidectomy** (Head & Neck Surgery, track: head-neck)
- Q: Indications for tonsillectomy?
  A: Recurrent throat infection by the Paradise criteria (7 or more in 1 year, 5 or more per year for 2 years, or 3 or more per year for 3 years) and obstructive sleep-disordered breathing or OSA. Also recurrent PTA, or an asymmetric tonsil that raises concern for malignancy.
- Q: Blood supply to the palatine tonsil?
  A: Mainly the tonsillar branch of the facial artery. Also the lingual, ascending pharyngeal, and internal maxillary (descending palatine) branches.
- Q: Preferred post-T&A analgesia?
  A: Acetaminophen, with or without ibuprofen. Minimize opioids because of respiratory depression risk.
- Q: Velopharyngeal insufficiency: who is at risk?
  A: It shows as hypernasal speech or nasal regurgitation after adenoidectomy. Risk is higher with a cleft or submucous cleft palate, a bifid uvula, or 22q11, so screen for a submucous cleft.
- Q: Managing an active post-tonsillectomy bleed?
  A: Start with ABCs, IV access and fluids, and labs with a type and screen. Apply direct pressure or a topical vasoconstrictor, and return to the OR for cautery or ligation if the bleed is brisk. Assume it can be catastrophic.
- Q: Muscles of the tonsillar pillars and lateral fossa wall?
  A: The anterior pillar is palatoglossus and the posterior pillar is palatopharyngeus. The lateral wall (bed) of the tonsillar fossa is formed mainly by the superior pharyngeal constrictor, with contributions from the middle constrictor and styloglossus and stylopharyngeus. The superior constrictor lies immediately lateral to the tonsillar capsule.

**[pimp-hn-thyroid] Thyroidectomy** (Head & Neck Surgery, track: head-neck)
- Q: Two nerves at risk and their function?
  A: The RLN (vocal fold abduction and adduction, and sensation below the cords) and the external branch of the SLN (cricothyroid, which sets pitch).
- Q: RLN relation to the inferior thyroid artery?
  A: The nerve runs near or through its branches, so ligate the arterial branches right on the capsule to protect it.
- Q: Ligament of Berry?
  A: The posterior suspensory ligament attaching the thyroid to the trachea and cricoid. The RLN runs just deep and lateral to it, so this is high-risk ground near the nerve's laryngeal entry.
- Q: How do you reliably identify the RLN?
  A: In the tracheoesophageal groove, within Beahrs' triangle (common carotid, inferior thyroid artery, and RLN). The tubercle of Zuckerkandl points to it.
- Q: Most common complication after total thyroidectomy?
  A: Transient hypocalcemia from parathyroid injury or devascularization. Check calcium and PTH, and watch for perioral numbness and Chvostek and Trousseau signs.
- Q: Distinguishing parathyroids from nodes or fat?
  A: A tan or mustard color with a characteristic vascular pedicle.
- Q: Parathyroid embryology?
  A: The superior glands come from the 4th pouch (a more constant location); the inferior glands come from the 3rd pouch (variable, sometimes in the thymus).
- Q: Signs of bilateral RLN injury postop?
  A: Stridor or airway obstruction on extubation, which may require reintubation or tracheostomy.
- Q: Workup of a thyroid nodule?
  A: TSH first, then ultrasound with risk stratification (TI-RADS), then FNA by size and features, then Bethesda cytology.
- Q: Voice change with a normal-looking cord: which nerve?
  A: The external branch of the SLN. Loss of cricothyroid tension reduces pitch and causes vocal fatigue.
- Q: Perioperative thyroid storm management?
  A: Beta-blockade, antithyroid drugs (PTU or methimazole), iodine (given after the antithyroid drug), steroids, and supportive care.
- Q: The 5 components of ACR TI-RADS?
  A: Points are summed across five ultrasound feature categories: composition, echogenicity, shape, margin, and echogenic foci. You take one feature from each of the first four plus all applicable foci, which yields TR1 (benign) through TR5 (highly suspicious). FNA or follow-up then depends on the level and the nodule size.
- Q: The Bethesda System categories?
  A: Six categories: I nondiagnostic or unsatisfactory, II benign, III atypia of undetermined significance (AUS/FLUS), IV follicular neoplasm or suspicious for follicular neoplasm, V suspicious for malignancy, and VI malignant. Each carries an implied risk of malignancy rising from about 0-3% (II) to about 97-99% (VI), with management tied to the category.
- Q: Types of thyroid cancer: which is most common and which is most aggressive?
  A: The follicular-cell-derived cancers are papillary (most common, about 80-84%, best prognosis), follicular, and oncocytic (Hurthle cell); together these are the differentiated thyroid cancers, and poorly differentiated and anaplastic types round out the group. Medullary cancer arises from parafollicular C cells (about 4%). Anaplastic (undifferentiated) carcinoma is the most aggressive, with a median survival of only months, even though it is under 2% of cases.

**[pimp-hn-parotid-neck] Parotidectomy & Neck Dissection** (Head & Neck Surgery, track: head-neck)
- Q: Landmarks for the facial nerve trunk?
  A: The tragal pointer (the nerve is about 1 cm deep, inferior, and anterior to it), the tympanomastoid suture line, and the posterior belly of digastric at the digastric ridge.
- Q: What divides the parotid into superficial and deep lobes?
  A: The plane of the facial nerve, which is a surgical division rather than a true anatomic one.
- Q: Frey syndrome?
  A: Gustatory sweating from aberrant reinnervation of sweat glands by parasympathetic fibers after parotid surgery. Minor's starch-iodine test is positive.
- Q: Most common benign parotid tumor?
  A: Pleomorphic adenoma, with Warthin tumor second (bilateral, in smokers). The most common malignant tumor overall is mucoepidermoid carcinoma.
- Q: Structures through the parotid (superficial to deep)?
  A: The facial nerve (most superficial), then the retromandibular vein, then the external carotid artery (deepest).
- Q: Nerves at risk in the submandibular triangle?
  A: The marginal mandibular branch of CN VII, the lingual nerve, and the hypoglossal nerve (CN XII).
- Q: Neck node levels?
  A: I (submental and submandibular), II to IV (jugular chain), V (posterior triangle), and VI (central). Level II is common for oropharyngeal or HPV-positive metastasis.
- Q: Selective vs. MRND vs. radical neck dissection?
  A: Selective dissection preserves some nodal levels plus all non-lymphatic structures. MRND removes levels I to V but spares at least one of the SCM, IJV, or CN XI. Radical dissection removes all three.
- Q: Nerve most commonly injured causing shoulder droop?
  A: The spinal accessory nerve (CN XI), in level V or II.
- Q: A cystic neck mass in a middle-aged adult: what to exclude?
  A: Metastatic HPV-associated oropharyngeal SCC. Never assume a branchial cleft cyst in an adult; get FNA and imaging.
- Q: Contents of the carotid sheath?
  A: The common or internal carotid artery, the internal jugular vein, and the vagus nerve (CN X). The ansa cervicalis runs on or within its anterior surface, and deep cervical nodes lie along it.
- Q: Sensory nerves of the cervical plexus?
  A: The lesser occipital, great auricular, transverse cervical, and supraclavicular nerves (C2-C4), emerging at Erb's point along the posterior border of the SCM.
- Q: The strap muscles and their innervation?
  A: Sternohyoid, sternothyroid, omohyoid, and thyrohyoid. The first three are innervated by the ansa cervicalis (C1-C3); the thyrohyoid is supplied by C1 fibers traveling with the hypoglossal nerve.
- Q: Concern about level IV dissection?
  A: Injury to the thoracic duct on the left (or the right lymphatic duct) near where it enters at the IJV-subclavian junction, causing a chyle leak or chylous fistula. Ligate or clip lymphatics and avoid energy devices low in level IV.
- Q: Artery at the inferior border of level IV?
  A: The transverse cervical artery, which is usually preserved during dissection.
- Q: Structure separating levels IIa and IIb?
  A: The spinal accessory nerve (CN XI): nodes anteromedial or inferior to it are IIa, and those posterosuperior are IIb. Radiologically the divider is drawn at the posterior edge of the internal jugular vein.
- Q: Maneuver to protect the marginal mandibular nerve?
  A: The Hayes-Martin maneuver: identify, ligate, and divide the facial (anterior facial) vein low over the submandibular gland, then reflect the fascia and vein superiorly. This carries the nerve, which lies superficial to the vessels, up and out of the operative field.

**[pimp-fp-trauma] Facial Trauma & Nasal Fracture** (Facial Plastic & Reconstructive Surgery, track: facial-plastics)
- Q: Rule out before treating a nasal fracture?
  A: A septal hematoma (drain it urgently) and CSF rhinorrhea.
- Q: How do you assess for a CSF leak?
  A: Beta-2 transferrin. The halo sign is nonspecific.
- Q: Orbital blowout fracture signs?
  A: Enophthalmos, diplopia on upgaze (inferior rectus entrapment), and infraorbital hypesthesia. Watch for the oculocardiac reflex (bradycardia) in pediatric trapdoor fractures, which is a surgical urgency.
- Q: Le Fort classification?
  A: I is a transverse maxilla, or floating palate; II is pyramidal; III is craniofacial disjunction. All three cross the pterygoid plates.
- Q: Ideal timing to repair facial lacerations?
  A: Generally within 24 hours, though the rich facial blood supply allows longer windows. Align the vermilion border and eyebrows precisely.
- Q: Reconstructive ladder?
  A: Secondary intention, then primary closure, then skin graft, then local flap, then regional or free flap.

**[pimp-peds-airway] Pediatric Airway** (Pediatric Otolaryngology, track: pediatric)
- Q: Most common cause of infant stridor?
  A: Laryngomalacia: inspiratory stridor that is worse supine, with feeding, or when agitated, and better prone. It usually self-resolves.
- Q: Narrowest part of the pediatric airway?
  A: The subglottis (the cricoid ring), the only complete cartilage ring.
- Q: Foreign-body aspiration presentation?
  A: Witnessed choking, with a unilateral wheeze or decreased breath sounds. Look for air trapping or hyperinflation on decubitus or expiratory films.
- Q: Why is an esophageal button battery an emergency?
  A: It causes liquefactive necrosis within hours, leading to perforation and fistula. Remove it emergently.
- Q: Croup vs. epiglottitis radiographs?
  A: Croup shows the subglottic steeple sign (AP). Epiglottitis shows the thumbprint sign (lateral); do not agitate the child, and secure the airway first.
- Q: Most common congenital midline neck mass?
  A: A thyroglossal duct cyst. It moves with swallowing and tongue protrusion, and is treated with the Sistrunk procedure.
- Q: Where do branchial cleft cysts present?
  A: The second cleft is most common: at the anterior border of the SCM.
- Q: Why confirm a functioning thyroid before excising a midline mass?
  A: To rule out an ectopic or lingual thyroid that is the only thyroid tissue present. Get an ultrasound, with a scan if needed, before a Sistrunk.
- Q: AOM antibiotic choice and when to observe?
  A: High-dose amoxicillin (80-90 mg/kg/day) is first line. Use amoxicillin-clavulanate if there were antibiotics in the prior 30 days, purulent conjunctivitis, or treatment failure. Observation is reasonable for select non-severe cases.

**[pimp-sleep-osa] OSA & Sleep Surgery** (Sleep Surgery, track: sleep)
- Q: OSA severity by AHI?
  A: Mild is 5-15, moderate is 15-30, and severe is over 30 events per hour.
- Q: First-line therapy for adult OSA?
  A: CPAP. Surgery is for patients who fail or cannot tolerate CPAP, or who have a specific anatomic obstruction.
- Q: First-line surgical therapy for pediatric OSA?
  A: Adenotonsillectomy.
- Q: What does Friedman staging assess?
  A: Tongue position (modified Mallampati), tonsil size, and BMI. It predicts UPPP success.
- Q: Criteria for hypoglossal nerve stimulation?
  A: Moderate-to-severe OSA, failure or intolerance of CPAP, a BMI below the threshold (roughly under 32-35), and no complete concentric palatal collapse on DISE.
- Q: Which nerve or muscle does HGNS target?
  A: The hypoglossal nerve, driving genioglossus protrusion to open the retrolingual airway.
- Q: Common UPPP complications?
  A: Bleeding, VPI, nasopharyngeal stenosis, dysphagia, and airway edema. Respiratory distress and readmission are notable early risks.
- Q: Why are OSA patients higher perioperative risk?
  A: They are sensitive to sedatives and opioids, can be a difficult airway, and are prone to postoperative respiratory depression. Minimize opioids and monitor closely.
- Q: What is DISE, and why is it useful?
  A: Drug-induced sleep endoscopy identifies the levels of collapse (palate, oropharynx, tongue base, epiglottis) so you can tailor the surgery.
- Q: Screening tool for OSA risk?
  A: STOP-BANG.

**[pimp-sleep-hgns] Hypoglossal Nerve Stimulator (HGNS) Implantation** (Sleep Surgery, track: sleep)
- Q: What is the mechanism of HGNS?
  A: A pacemaker-like implanted pulse generator delivers a stimulus timed to inspiration. It activates the protrusor branches of the hypoglossal nerve, advancing the tongue to enlarge and stabilize the retrolingual airway (and, through palatoglossal coupling, the retropalatal airway).
- Q: Medial vs. lateral branches of CN XII: which is the target?
  A: CN XII splits into a medial division (m-XII) supplying the protrusor and stiffener muscles (genioglossus, both horizontal and oblique, and the transverse and vertical intrinsics, plus a C1 branch to geniohyoid), and a lateral division (l-XII) supplying the retractor muscles, styloglossus and hyoglossus. The cuff captures the medial (inclusion) branches while excluding the lateral (retractor) branches, so the tongue protrudes rather than retracts.
- Q: How is correct branch selection confirmed intraoperatively?
  A: By intraoperative EMG and nerve monitoring. Stimulating the medial branches produces genioglossus (protrusion) responses, while stimulating the lateral branches drives styloglossus and hyoglossus (retraction). Inclusion electrodes monitor genioglossus and exclusion electrodes monitor the retractors, which guides cuff placement.
- Q: The three implanted components (classic system)?
  A: A stimulation cuff electrode on the medial branches of CN XII, an implantable pulse generator in an infraclavicular pocket, and a respiratory-sensing lead. It was historically placed via a 3-incision technique, and there is now an FDA-approved 2-incision approach.
- Q: Standard eligibility criteria?
  A: Moderate-to-severe OSA, documented CPAP intolerance or failure, a BMI below the device threshold (roughly under 32-35), and no complete concentric palatal collapse on DISE, which is a contraindication.
- Q: Why is complete concentric palatal collapse a contraindication?
  A: That collapse pattern does not respond to tongue protrusion and predicts therapy failure, which is why DISE screening is required before implantation.
- Q: Why is the genioglossus the physiologic target?
  A: It is the main upper-airway dilator. Its inspiratory contraction pulls the tongue base forward, and its relaxation during sleep allows the posterior collapse that HGNS counteracts.
- Q: What structures are at risk during the CN XII dissection?
  A: The hypoglossal nerve branches themselves, the ranine (venous) plexus and vessels superficial to the hyoglossus, the submandibular gland, and the C1 and ansa contributions running with the nerve.
- Q: Common device or surgical complications?
  A: Tongue or incision discomfort and abrasion, temporary tongue weakness or dysarthria, stimulation-related discomfort, lead or device malfunction or the need for revision, and infection or hematoma at the pocket.
- Q: Why place the cuff superficial to the hyoglossus at the branch point?
  A: All the terminal branches run immediately superficial to the hyoglossus up to its anterior margin. That is where the surgeon can reliably separate the inclusion (medial) from the exclusion (lateral) fibers for selective cuff placement.

**[pimp-trach] Tracheostomy** (General ENT Topics, track: foundations)
- Q: Between which tracheal rings is the incision made?
  A: Between the 2nd and 3rd (or the 3rd and 4th) tracheal rings.
- Q: What structure crosses the midline over the trachea?
  A: The thyroid isthmus, which is often divided or retracted.
- Q: What vascular structure lies low in the midline neck?
  A: The innominate (brachiocephalic) artery. Eroding into it causes a tracheo-innominate fistula.
- Q: Tracheo-innominate fistula: presentation and management?
  A: A herald sentinel bleed followed by massive bleeding. Hyperinflate the cuff or apply digital compression (the Utley maneuver) and go to the OR.
- Q: First step if a fresh (immature) trach is dislodged?
  A: Do not blindly reinsert it, since the tract is not mature (under 7 days). Orally intubate or bag-mask ventilate as needed, and get help.
- Q: When is a tract considered mature?
  A: Around 5-7 days (longer in children and obese patients). Tube changes are safer after it matures.
- Q: Advantages of tracheostomy over prolonged intubation?
  A: Less laryngeal injury, easier secretion clearance, better comfort and oral care, and the potential to reduce sedation and ventilator time.
- Q: Subglottic stenosis and its relation to intubation?
  A: Cricoid-level narrowing from prolonged intubation and cuff pressure. It is a reason to consider earlier tracheostomy.
- Q: Decannulation readiness?
  A: Adequate cough and secretion management, tolerating capping or downsizing, a patent upper airway on scope, and stable respiratory status.
- Q: What is a false passage?
  A: A tract created during insertion or a tube change that does not enter the tracheal lumen. The tube sits in the pretracheal soft tissue or mediastinum, so ventilation fails and subcutaneous emphysema or pneumomediastinum can develop. Prevent it with good exposure, maturation or stay sutures, avoiding blind reinsertion of an immature tract, and confirming intraluminal placement (capnography, bronchoscopy, or bag ventilation with breath sounds and CO2).
- Q: Most common cause of acute respiratory distress in a trach patient, and prevention?
  A: A mucus plug or tube obstruction from inspissated secretions. Prevention centers on good humidification, scheduled suctioning, inner-cannula care and exchange, and adequate systemic hydration.

---

## Module: 2-Minute Procedure Prep (`procedures-2min`)
- version: 
- status: DRAFT, pending faculty review.
- facultyReviewer: ""
- subtitle: Fast pre-scrub briefs for the OR and bedside: the indication, the key steps, the danger structures, and one pearl, for the operations you will see on the rotation.

### Clinical section intro

Each brief is a two-minute pre-scrub read: the indication, the key steps, the danger structures, and one pearl. Work the decision points before you look, then lock in the pearl.

### Quick-matcher table

| Procedure | Subspecialty | Key structures |
| --- | --- | --- |
| Myringotomy & tubes | Otology | Ossicles, chorda tympani, jugular bulb |
| Tympanoplasty / mastoidectomy | Otology | Facial nerve, lateral SCC, sigmoid sinus, tegmen |
| Endoscopic sinus surgery | Rhinology & Skull Base | Lamina papyracea, skull base, ant. ethmoid a., carotid |
| Epistaxis control | Rhinology & Skull Base | Sphenopalatine a., ethmoid aa., septal cartilage |
| Transsphenoidal hypophysectomy | Rhinology & Skull Base | Carotids, optic chiasm, cavernous sinus |
| Vocal fold surgery | Laryngology | Lamina propria, anterior commissure, SLN bundle |
| Tonsillectomy & adenoidectomy | Head & Neck | Facial a. tonsillar branch, ICA, Eustachian orifices |
| Thyroidectomy | Head & Neck | RLN, external branch SLN, parathyroids |
| Parotidectomy | Head & Neck | Facial nerve trunk and branches, retromandibular vein |
| Nasal fracture / facial trauma | Facial Plastics | Septal hematoma, cribriform plate, medial canthus |
| Pediatric airway (DL & B) | Pediatric | Subglottis, vocal folds, teeth, friable mucosa |
| UPPP | Sleep/Airway | Velopharynx, great vessels lateral to fossa |
| Hypoglossal nerve stimulator | Sleep/Airway | Lateral (retractor) CN XII branch, C1, pleura |
| Tracheostomy | Cross-Cutting | Thyroid isthmus, innominate a., posterior tracheal wall |


### Clinical blocks (14)

**[myringotomy] Myringotomy & tympanostomy tubes** (Otology)

- Scenario: A 2-year-old with recurrent acute otitis media and persistent bilateral effusions, now with delayed speech.
- Decision point: Criteria met: recurrent AOM (3 in 6 months, or 4 in 12 months with one recent) OR bilateral OME for 3 months with a hearing or developmental concern.
- Decision point: Get an audiogram and tympanometry first to document baseline hearing and effusion.
- Decision point: Incision goes in the anteroinferior quadrant, away from ossicles, chorda tympani, and jugular bulb.
- Decision point: Tube choice: short-term (grommet) tubes for typical cases vs. long-term (T-tubes) when prolonged ventilation is needed: long-term tubes carry a much higher persistent perforation rate (~20% vs. ~2%).
- Key step: Position, place the ear speculum, clear cerumen under the microscope.
- Key step: Bring the drum into full view; orient to the malleus and light reflex.
- Key step: Make a small radial incision in the anteroinferior (or inferior) quadrant: radial to spare the drum's circular fibers.
- Key step: Aspirate the effusion (serous, mucoid, or purulent).
- Key step: Insert the tube and seat both flanges; instill ototopical drops if indicated.
- Danger structures: Ossicular chain and chorda tympani (posterosuperior quadrant), a dehiscent or high jugular bulb (posteroinferior floor), and the round window niche.
- Pearl: The most common postoperative problem is tube otorrhea: occurs in up to ~50% of closely monitored children. Treat with ototopical fluoroquinolone drops, not systemic antibiotics.

**[chole] Tympanoplasty / mastoidectomy for cholesteatoma** (Otology)

- Scenario: A 34-year-old with chronic foul otorrhea, hearing loss, a pars flaccida retraction pocket with keratin, and CT showing scutum erosion.
- Decision point: Preop workup: audiogram to document baseline hearing, and CT temporal bone to map disease extent, tegmen/sigmoid position, and canal integrity before entering.
- Decision point: Diagnosis: attic (pars flaccida) cholesteatoma in Prussak's space.
- Decision point: Urgent because it erodes bone: ossicular destruction, labyrinthine fistula, facial palsy, intracranial spread.
- Decision point: Intraoperative facial nerve monitoring is routine, directly relevant to the danger structures below.
- Decision point: Canal-wall-up (CWU) preserves ear-canal anatomy but recurs more (residual/recurrent disease reported up to ~60%, needs a planned second look); canal-wall-down (CWD) recurs less (~0-17%) but leaves a mastoid bowl needing lifelong cleaning.
- Key step: Postauricular incision; harvest fascia or cartilage graft; elevate a tympanomeatal flap.
- Key step: Cortical mastoidectomy within tegmen (superior), sigmoid sinus (posterior), and bony canal (anterior); MacEwen's triangle marks the antrum.
- Key step: Identify the antrum, lateral semicircular canal, and short process of the incus.
- Key step: Posterior tympanotomy (facial recess) if middle-ear access is needed.
- Key step: Remove all disease; decide CWU vs. CWD; address the ossicular chain and graft the drum.
- Danger structures: Facial nerve (tympanic and mastoid segments, facial recess), lateral semicircular canal (fistula), sigmoid sinus, tegmen/dura, and the ossicular chain.
- Pearl: New vertigo with a positive fistula test signals a labyrinthine fistula, a red flag that changes the surgical plan.

**[ess] Endoscopic sinus surgery (ESS)** (Rhinology & Skull Base)

- Scenario: A 45-year-old with 6 months of congestion, facial pressure, and anosmia after failed medical therapy; CT shows osteomeatal complex (OMC) obstruction and ethmoid opacification.
- Decision point: Indication: failure of appropriate medical therapy plus objective disease on CT/endoscopy.
- Decision point: Read the CT for danger zones: Keros classification of skull-base height: Type 1 (1-3 mm), Type 2 (4-7 mm), Type 3 (8-16 mm, the longest lateral lamella and highest skull-base injury risk): plus lamina papyracea integrity, anterior ethmoid artery course, and any dehiscence.
- Decision point: Most feared complications: CSF leak (cribriform/fovea ethmoidalis), orbital injury (medial rectus, optic nerve), carotid injury near the sphenoid.
- Decision point: Overall context: ESS has an ~0.5% overall complication rate, with CSF leak and orbital injury each ~0.09%.
- Key step: Decongest; medialize the middle turbinate; identify the uncinate process.
- Key step: Uncinectomy to expose the infundibulum.
- Key step: Maxillary antrostomy incorporating the natural ostium to avoid recirculation.
- Key step: Anterior then posterior ethmoidectomy through the basal lamella, identifying skull base and lamina papyracea.
- Key step: Sphenoidotomy (ostium medial to the superior turbinate); frontal recess last as needed.
- Danger structures: Lamina papyracea/orbit (medial rectus, optic nerve), skull base at the cribriform/fovea (CSF leak), the anterior ethmoid artery: which can run in a mesentery below the skull base rather than always within bone, which is exactly why it retracts into the orbit when transected: and the carotid in the lateral sphenoid wall.
- Pearl: Suspected clear rhinorrhea: send fluid for beta-2 transferrin, the most specific test for CSF.

**[epistaxis] Epistaxis control** (Rhinology & Skull Base)

- Scenario: A 60-year-old on apixaban with 45 minutes of brisk bleeding, spitting blood, and no anterior source after decongestion.
- Decision point: Anterior vs. posterior: failure of firm compression plus posterior bleeding or no visible anterior source suggests a posterior (sphenopalatine) bleed.
- Decision point: Escalate: topical vasoconstrictor, then cautery of a seen source, then anterior/posterior packing, then sphenopalatine artery (SPA) ligation or embolization.
- Decision point: Transnasal endoscopic sphenopalatine artery ligation (TESPAL) is favored over repeat packing: ~98% success with a low (~3.4%) rebleed rate.
- Decision point: Correct the coagulopathy and check hemodynamics; posterior packs need monitoring for airway compromise and hypoxia.
- Key step: Firm compression of the lower-third nose for about 15 minutes leaning forward, plus topical oxymetazoline.
- Key step: Anterior rhinoscopy/endoscopy after decongestion to localize the source.
- Key step: Silver nitrate or electrocautery of a visualized anterior source (avoid bilateral septal cautery).
- Key step: Anterior packing if diffuse; add posterior packing for posterior bleeds.
- Key step: Endoscopic sphenopalatine artery ligation, or IR embolization, for refractory bleeding.
- Danger structures: Sphenopalatine artery (posterior source), anterior and posterior ethmoid arteries (skull base, can retract into the orbit). Ethmoid artery embolization is contraindicated: they arise from the ophthalmic artery, so embolization risks blindness; refractory ethmoidal bleeds need surgical ligation, not IR. Also watch the septal cartilage (perforation with bilateral cautery).
- Pearl: Unilateral recurrent epistaxis with obstruction in an adolescent male suggests juvenile nasopharyngeal angiofibroma: image it, do not biopsy in clinic.

**[tsa] Transsphenoidal hypophysectomy** (Rhinology & Skull Base)

- Scenario: A 52-year-old with bitemporal hemianopia and a 2.2 cm sellar mass compressing the optic chiasm; labs confirm a nonfunctioning adenoma.
- Decision point: Preop workup: morning hormone panel (prolactin, IGF-1, ACTH/cortisol, TSH/free T4, FSH/LH) plus formal visual field testing.
- Decision point: Indication: mass effect (visual loss, chiasmal compression) with extrasellar extension.
- Decision point: Prolactinomas are treated medically first, not surgically; by contrast, Cushing disease and acromegaly require surgery even when the adenoma is small.
- Decision point: Border structures: carotids laterally, optic nerves/chiasm superiorly, cavernous sinus (CN III, IV, V1, V2, VI) laterally.
- Key step: Endoscopic transnasal approach; preserve superior turbinate/septal mucosa to spare olfaction.
- Key step: Posterior septectomy/sphenoethmoidectomy to widen the corridor.
- Key step: Wide sphenoidotomy; remove septations to expose the sella.
- Key step: Open the sellar floor; X-shaped durotomy.
- Key step: Intradural resection; reconstruct with fat graft and nasoseptal flap.
- Danger structures: Internal carotid arteries (lateral sphenoid wall), optic nerves/chiasm (superolateral), cavernous sinus contents, and the diaphragma sellae (CSF leak).
- Pearl: Watch the endocrine course: transient diabetes insipidus (DI) is the most common early problem, delayed hyponatremia (syndrome of inappropriate antidiuretic hormone, SIADH) around days 5 to 9 drives readmissions, and CSF leak is the most common surgical complication.

**[vocalfold] Flexible laryngoscopy & vocal fold surgery** (Laryngology)

- Scenario: A 30-year-old teacher with 3 months of hoarseness; scope shows symmetric bilateral lesions at the anterior/middle-third junction.
- Decision point: Diagnosis: vocal fold nodules (bilateral, at the point of maximal contact, from overuse).
- Decision point: Videostroboscopy is the key office assessment before the OR: it evaluates the mucosal wave and identifies whether a lesion is epithelial vs. involves the deeper lamina propria, which changes the operative plan (microflap vs. simple excision) more than a white-light scope alone.
- Decision point: Optimize reflux and vocal hygiene first; many nodules and mild lesions improve with voice therapy alone over 6-12 weeks, avoiding surgery entirely.
- Decision point: Contrast with a paramedian immobile cord (recurrent laryngeal nerve, RLN, injury) or a unilateral polyp/cyst.
- Key step: Suspension microlaryngoscopy under GA (or awake injection for medialization).
- Key step: Assess the lesion and vibratory margin with a rigid endoscope and microscope.
- Key step: For a benign lesion: raise a subepithelial microflap, preserving the vocal ligament and superficial lamina propria.
- Key step: Excise with cold instruments, preferred over laser for benign disease: cold-steel microflap avoids thermal injury to the superficial lamina propria (Reinke's space); laser is reserved for select vascular lesions/papilloma, not routine benign lesions.
- Key step: For glottic insufficiency: inject a medialization material lateral to the vocalis until midline closure.
- Danger structures: The layered lamina propria and vocal ligament (over-resection causes scar); the anterior commissure: avoid operating on both folds there in the same setting, since opposing raw surfaces cause an anterior glottic web (stage bilateral lesions if needed); and the superior laryngeal nerve (SLN) bundle in the supraglottic danger triangle during CO2 laser work.
- Pearl: Breathy hoarseness with a paramedian fixed cord after neck/thyroid surgery points to recurrent laryngeal nerve (RLN) injury; a normal-appearing cord with loss of pitch/projection and vocal fatigue points to external branch of the superior laryngeal nerve (SLN) injury (cricothyroid weakness). Both can follow thyroid/neck surgery.

**[tonsils] Tonsillectomy & adenoidectomy** (Head & Neck)

- Scenario: A 6-year-old with loud snoring, witnessed apneas, and 3+ obstructing tonsils.
- Decision point: Two classic indications: obstructive sleep-disordered breathing/OSA, and recurrent infection by Paradise criteria (7 in 1 year, 5/year for 2 years, or 3/year for 3 years).
- Decision point: For the obstructive/OSA indication, intracapsular tonsillectomy (tonsillotomy) gives comparable obstructive outcomes with less pain and substantially lower post-tonsillectomy hemorrhage, at a small regrowth risk (~2-15%); extracapsular (total) tonsillectomy is preferred when recurrent/chronic infection is the driver.
- Decision point: Screen for a submucous cleft or bifid uvula before adenoidectomy (velopharyngeal insufficiency risk).
- Decision point: Perioperative essentials (AAO-HNS): single intraoperative IV dexamethasone (~0.5 mg/kg) reduces nausea/vomiting; no routine prophylactic antibiotics; scheduled acetaminophen &plusmn; ibuprofen; codeine is contraindicated post-T&A.
- Decision point: Admit high-risk children: age <3, severe OSA, or significant comorbidity -> postoperative overnight monitoring for respiratory compromise.
- Key step: Oral Ring-Adair-Elwyn (RAE) tube; place the mouth gag; confirm the airway and tongue are not compressed.
- Key step: Retract the tonsil medially; incise mucosa over the superior pole.
- Key step: Develop the plane between capsule and pharyngeal muscle (extracapsular), or debride to the capsule (intracapsular).
- Key step: Dissect superior to inferior; remove at the inferior pole.
- Key step: Hemostasis in the fossa; adenoidectomy by curettage, suction cautery, or microdebrider.
- Danger structures: The tonsillar branch of the facial artery and the internal carotid artery (ICA) lateral to the fossa, the pharyngeal muscle, and (during adenoidectomy) the Eustachian tube orifices and velopharynx.
- Pearl: A post-tonsillectomy bleed can be catastrophic: ABCs, IV access, type and screen, and return to OR for brisk bleeding. Secondary bleeds classically occur days 5-10 (eschar sloughs); overall post-tonsillectomy hemorrhage (PTH) rate is ~4-5%. Any PTH is an ABC/return-to-OR consideration even without active bleeding on exam, since a herald bleed can precede catastrophic hemorrhage.

**[thyroid] Thyroidectomy** (Head & Neck)

- Scenario: A 48-year-old with a 2.5 cm TR4 nodule, Bethesda V on FNA; total thyroidectomy planned.
- Decision point: Nerves at risk: recurrent laryngeal nerve (RLN) (near the inferior thyroid artery and ligament of Berry) and the external branch of the superior laryngeal nerve (SLN).
- Decision point: Find the RLN in the tracheoesophageal (TE) groove within Beahrs' triangle; the tubercle of Zuckerkandl points to it.
- Decision point: Intraoperative nerve monitoring (IONM, endotracheal-tube based) is widely used to map and confirm RLN integrity; a loss of signal on the first side may prompt staging the contralateral lobectomy to avoid bilateral RLN injury/airway catastrophe: not a substitute for anatomic dissection.
- Decision point: Anticipate transient hypocalcemia: check calcium/PTH; watch for perioral numbness and Chvostek/Trousseau signs.
- Key step: Curvilinear incision two fingerbreadths above the sternal notch; divide platysma; separate straps in the midline.
- Key step: Rotate the lobe medially; ligate the middle thyroid vein.
- Key step: Take the superior pole close to the capsule to protect the external SLN branch.
- Key step: Identify and preserve both parathyroids with their blood supply; if one is devascularized or inadvertently removed, confirm it is parathyroid (not cancer) by frozen section, then autotransplant into the SCM or strap muscle: inspect the specimen before it leaves the field to salvage glands.
- Key step: Trace the RLN in the TE groove; reidentify it at Berry's ligament and dissect off the trachea; repeat contralaterally.
- Danger structures: RLN (especially at Berry's ligament and near the inferior thyroid artery), external branch of the SLN (superior pole), the parathyroids and their pedicles, the trachea/esophagus, and a postoperative neck hematoma: an expanding neck hematoma with airway compromise is a bedside emergency: open the wound/evacuate the clot immediately, before returning to the OR.
- Pearl: Postoperative stridor and airway obstruction on extubation suggests bilateral RLN injury: be ready to reintubate or perform tracheostomy. Postoperative hypocalcemia is the most common cause of prolonged stay; PTH-directed calcium/vitamin D supplementation after total thyroidectomy reduces symptomatic hypocalcemia.

**[parotid] Parotidectomy & neck dissection** (Head & Neck)

- Scenario: A 55-year-old with a slow-growing painless mass at the mandibular angle, intact facial nerve, FNA suggesting pleomorphic adenoma.
- Decision point: Most common benign parotid tumor is pleomorphic adenoma (Warthin is second, bilateral, smokers); mucoepidermoid is the most common malignancy.
- Decision point: Tell anesthesia to avoid muscle relaxants so the facial nerve can be stimulated/monitored throughout.
- Decision point: Counsel on Frey syndrome (gustatory sweating) as a delayed complication.
- Key step: Modified Blair incision; raise a thick skin-SMAS (superficial musculoaponeurotic system) flap: and consider SMAS reapproximation: which lowers both skin necrosis and Frey syndrome rates.
- Key step: Identify the great auricular nerve and external jugular vein; free the parotid tail from the SCM.
- Key step: Locate the facial nerve main trunk at the standard landmarks (tragal pointer, tympanomastoid suture, posterior belly of digastric): it lies ~1 cm deep and inferior to the tragal pointer, with the retromandibular vein and external carotid artery running deep to the nerve (dissection deep to those vessels, e.g. for deep-lobe tumors, is safe for the nerve).
- Key step: Dissect the branches anteriorly, separating superficial from deep lobe along the nerve plane.
- Key step: Remove the tumor with a cuff of normal gland; confirm nerve integrity with a stimulator; close over a drain.
- Danger structures: Facial nerve (trunk and branches, especially marginal mandibular), the retromandibular vein and external carotid within the gland, the great auricular nerve, and the auriculotemporal nerve (Frey syndrome: aberrant reinnervation of skin sweat glands by severed parasympathetic fibers; confirmed with Minor's starch-iodine test).
- Pearl: A cystic neck mass in a middle-aged adult is metastatic HPV-associated oropharyngeal SCC until proven otherwise: do FNA and imaging, never assume a branchial cleft cyst.

**[nasalfx] Facial trauma & nasal fracture** (Facial Plastics)

- Scenario: A 22-year-old after a sports injury with a deformed swollen nose, epistaxis, and a bluish boggy septal swelling.
- Decision point: Rule out first: septal hematoma (drain urgently) and CSF rhinorrhea (beta-2 transferrin).
- Decision point: Untreated septal hematoma leads to cartilage necrosis and saddle-nose deformity.
- Decision point: Nasal fracture diagnosis is clinical; plain nasal X-rays add little and can mislead. CT only when concomitant facial fractures (orbit, naso-orbito-ethmoid (NOE), midface) or CSF leak are suspected.
- Decision point: For orbital trauma, check enophthalmos, diplopia on upgaze, and infraorbital hypesthesia (blowout fracture).
- Key step: Inspect intranasally for septal hematoma; if present, incise, drain, and quilt/pack to prevent reaccumulation.
- Key step: Time the closed reduction: reduce before swelling sets in, or after swelling subsides: ~3-5 days in children, up to 7-10 days (some say 14) in adults, before fragments fixate.
- Key step: Anesthetize (local or general).
- Key step: Reduce the nasal bones with a Boies elevator plus external molding.
- Key step: Reduce the septum; apply internal and external splints.
- Danger structures: The septal cartilage blood supply (necrosis and saddle-nose from untreated hematoma), the cribriform plate (CSF leak), and the medial canthal/lacrimal apparatus in naso-orbito-ethmoid injury. Red flag: a widened intercanthal distance or a flattened/splayed nasal bridge suggests an NOE fracture with medial canthal tendon disruption (bowstring test): refer, do not treat as a simple nasal fracture.
- Pearl: A child with an orbital trapdoor fracture and bradycardia/nausea (oculocardiac reflex from muscle entrapment) is a surgical urgency, not a delayed repair. Refer to a subspecialist for: septal hematoma, CSF rhinorrhea, malocclusion, or an extraocular movement deficit.

**[pedairway] Pediatric airway (direct laryngoscopy & bronchoscopy)** (Pediatric)

- Scenario: A 4-month-old with inspiratory stridor since birth, worse supine and with feeding, better prone; growth is adequate.
- Decision point: Most likely laryngomalacia, the most common cause of infant stridor, usually self-resolving.
- Decision point: The narrowest part of the pediatric airway is the subglottis (cricoid ring).
- Decision point: Distinguish emergent mimics: croup (steeple sign), epiglottitis (thumbprint sign, do not agitate), foreign body (unilateral wheeze, air trapping).
- Key step: Shared airway plan with anesthesia; maintain spontaneous ventilation.
- Key step: Awake flexible laryngoscopy to assess dynamic collapse.
- Key step: Direct laryngoscopy/rigid bronchoscopy of the supraglottis, glottis, subglottis, and trachea.
- Key step: Treat pathology (supraglottoplasty for severe laryngomalacia; retrieve a foreign body with optical forceps).
- Key step: Reassess for a synchronous second airway lesion.
- Danger structures: The subglottis (cricoid, post-procedure edema/stenosis), the true vocal folds, the teeth and lips, and friable mucosa; for foreign bodies, distal migration and complete obstruction.
- Pearl: An esophageal button battery is a true emergency: liquefactive necrosis within hours mandates emergent removal.

**[uppp] OSA surgery (UPPP)** (Sleep/Airway)

- Scenario: A 50-year-old with moderate OSA (AHI 28) who cannot tolerate CPAP and asks about surgery.
- Decision point: Severity by AHI: mild 5 to 15, moderate 15 to 30, severe over 30.
- Decision point: CPAP is first-line; surgery is for intolerance/failure or a specific anatomic obstruction.
- Decision point: Drug-induced sleep endoscopy (DISE) identifies the level(s) of collapse to tailor surgery.
- Key step: Orotracheal intubation and mouth-gag exposure.
- Key step: Tonsillectomy if tonsils are present.
- Key step: Trim and reposition the posterior tonsillar pillar.
- Key step: Conservatively excise redundant soft palate/uvular mucosa (avoid over-resection).
- Key step: Suture the pillars/flaps to widen the retropalatal airway; confirm an adequate velopharyngeal port.
- Danger structures: The velopharynx (over-resection causes velopharyngeal insufficiency and nasopharyngeal stenosis), the great vessels lateral to the fossa, and postoperative airway edema.
- Pearl: OSA patients are high-risk perioperatively (sensitivity to sedatives/opioids, difficult airway, postoperative respiratory depression): minimize opioids and monitor closely.

**[hgns] Hypoglossal nerve stimulator (HGNS)** (Sleep/Airway)

- Scenario: The same CPAP-intolerant patient has moderate-to-severe OSA, an eligible BMI, and DISE showing anteroposterior tongue-base collapse without complete concentric palatal collapse.
- Decision point: Candidacy: moderate-to-severe OSA, CPAP failure, BMI below threshold, and absence of complete concentric palatal collapse (a contraindication).
- Decision point: Mechanism: inspiration-synchronized stimulation of the protrusor branches of CN XII (hypoglossal nerve) advances the tongue via genioglossus.
- Decision point: Branch selection is the crux: include the medial (protrusor) division, exclude the lateral (retractor) division and the C1 twig.
- Key step: Place EMG electrodes in the tongue; map the three incisions.
- Key step: Submandibular incision about one fingerbreadth below the mandible to reach CN XII.
- Key step: Isolate CN XII; use neurostimulation to confirm protrusor (medial) branches and exclude retractor fibers; place the cuff.
- Key step: Create an infraclavicular pocket for the pulse generator.
- Key step: Place the respiratory sensing lead between the intercostal muscles; tunnel, connect, and test before closure.
- Danger structures: The lateral (retractor) branch of CN XII and the C1 twig (exclude from the cuff), Wharton's duct and the lingual vein, the marginal mandibular nerve, the external jugular vein, and the pleura (sensing lead).
- Pearl: Intraoperative EMG confirms capture: medial-branch stimulation protrudes the tongue, lateral-branch stimulation retracts it; the cuff sits superficial to the hyoglossus where the fibers separate.

**[trach] Tracheostomy** (Cross-Cutting)

- Scenario: A ventilated ICU patient 4 days after tracheostomy suddenly desaturates and the tube looks partially dislodged during repositioning.
- Decision point: Is the tract mature? No: maturation takes about 5 to 7 days, so do not blindly reinsert an immature tube.
- Decision point: Secure the airway from above: orally intubate or bag-mask as needed and call for help.
- Decision point: Beware a false passage into pretracheal tissue: confirm intraluminal placement with capnography or bronchoscopy.
- Key step: Extend the neck; horizontal incision midway between cricoid and sternal notch.
- Key step: Divide platysma; separate the straps in the midline.
- Key step: Retract or divide the thyroid isthmus to expose the trachea.
- Key step: Identify the cricoid and rings; place a cricoid hook and stay sutures.
- Key step: Enter between the 2nd-3rd (or 3rd-4th) rings; insert the tube; confirm with capnography; secure.
- Danger structures: The thyroid isthmus, anterior jugular veins, the innominate artery low in the neck (tracheo-innominate fistula), the esophagus/posterior tracheal wall, and the RLNs in the TE grooves.
- Pearl: A herald sentinel bleed from a trach signals a possible tracheo-innominate fistula: hyperinflate the cuff or apply digital compression (Utley maneuver) and go emergently to OR. The most common cause of acute distress overall is a mucus plug.

### Flashcards (15)

**[pr-tubes-otorrhea]** tags: PR, clinical, reviewer: (none)
- Front: First-line treatment for tympanostomy tube otorrhea?
- Back: Ototopical fluoroquinolone drops, not systemic antibiotics (higher local concentration, non-ototoxic).
- Source: 2-Minute Procedure Prep.

**[pr-myringotomy-quadrant]** tags: PR, clinical, reviewer: (none)
- Front: Which tympanic membrane quadrant is used for myringotomy, and why?
- Back: Anteroinferior, away from the ossicles and chorda tympani (posterosuperior) and the jugular bulb (posteroinferior floor).
- Source: 2-Minute Procedure Prep.

**[pr-chole-fistula]** tags: PR, clinical, reviewer: (none)
- Front: New vertigo with a positive fistula test during cholesteatoma disease?
- Back: Suggests a labyrinthine fistula (lateral semicircular canal), a red flag that changes surgical planning.
- Source: 2-Minute Procedure Prep.

**[pr-csf-test]** tags: PR, clinical, reviewer: (none)
- Front: Most specific test for suspected CSF rhinorrhea after sinus/skull-base surgery?
- Back: Beta-2 transferrin on the fluid.
- Source: 2-Minute Procedure Prep.

**[pr-jna]** tags: PR, clinical, reviewer: (none)
- Front: Adolescent male, unilateral recurrent epistaxis and nasal obstruction, next step?
- Back: Suspect juvenile nasopharyngeal angiofibroma: image it, do NOT biopsy in clinic.
- Source: 2-Minute Procedure Prep.

**[pr-tsa-di]** tags: PR, clinical, reviewer: (none)
- Front: Most common early endocrine problem after transsphenoidal pituitary surgery?
- Back: Transient diabetes insipidus; delayed hyponatremia (SIADH) around days 5 to 9 drives readmissions.
- Source: 2-Minute Procedure Prep.

**[pr-nodules]** tags: PR, clinical, reviewer: (none)
- Front: First-line management of vocal fold nodules?
- Back: Voice therapy, not surgery (they are bilateral overuse lesions).
- Source: 2-Minute Procedure Prep.

**[pr-paradise]** tags: PR, clinical, reviewer: (none)
- Front: Paradise criteria for recurrent tonsillitis?
- Back: 7 in 1 year, 5/year for 2 years, or 3/year for 3 years.
- Source: 2-Minute Procedure Prep.

**[pr-post-tonsil-bleed]** tags: PR, clinical, reviewer: (none)
- Front: When do secondary post-tonsillectomy bleeds classically occur?
- Back: Postoperative days 5 to 10. Manage with ABCs, IV access, type and screen, and OR for brisk bleeding.
- Source: 2-Minute Procedure Prep.

**[pr-bilat-rln]** tags: PR, clinical, reviewer: (none)
- Front: Stridor and airway obstruction immediately after extubation from thyroidectomy?
- Back: Bilateral RLN injury; be ready to reintubate or perform tracheostomy.
- Source: 2-Minute Procedure Prep.

**[pr-parotid-tumor]** tags: PR, clinical, reviewer: (none)
- Front: Most common benign and most common malignant parotid tumors?
- Back: Benign: pleomorphic adenoma. Malignant: mucoepidermoid carcinoma.
- Source: 2-Minute Procedure Prep.

**[pr-septal-hematoma]** tags: PR, clinical, reviewer: (none)
- Front: Why is a septal hematoma an emergency?
- Back: Untreated, it causes cartilage necrosis and saddle-nose deformity (cartilage depends on the overlying mucoperichondrium). Drain urgently.
- Source: 2-Minute Procedure Prep.

**[pr-button-battery]** tags: PR, clinical, reviewer: (none)
- Front: Esophageal button battery, urgency?
- Back: True emergency: liquefactive necrosis within hours mandates emergent removal.
- Source: 2-Minute Procedure Prep.

**[pr-ti-fistula]** tags: PR, clinical, reviewer: (none)
- Front: Herald sentinel bleed from a tracheostomy?
- Back: Possible tracheo-innominate fistula: hyperinflate the cuff or apply digital compression (Utley maneuver) and go emergently to OR.
- Source: 2-Minute Procedure Prep.

**[pr-hgns-emg]** tags: PR, clinical, reviewer: (none)
- Front: What does intraoperative EMG confirm during HGNS implantation?
- Back: Correct capture: medial-branch stimulation protrudes the tongue (include), lateral-branch stimulation retracts it (exclude).
- Source: 2-Minute Procedure Prep.

---

## Module: Rhinology & Sinus (`rhinology-sinus`)
- version: 0.3.0-draft
- status: DRAFT, pending faculty review. v0.2.0: added an allergy/rhinitis depth pass, ARIA classification and step-up therapy for allergic rhinitis, the non-allergic rhinitis mimics (vasomotor, hormonal, drug-
- facultyReviewer: ""
- curriculum anchors: UKMLA Content Map (GMC), scope anchor; owns Nasal obstruction, Epistaxis, Anosmia, Allergies, Facial pain, Ear and nasal discharge (nasal), Rhinosinusitis; ACGME Otolaryngology-HNS Milestones 2.0, primarily PC5 Rhinologic Disease, MK2 Allergy; AAO-HNSF Clinical Practice Guidelines: Adult Sinusitis (2015), Allergic Rhinitis (2015), Nosebleed/Epistaxis (2020); ARIA (Allergic Rhinitis and its Impact on Asthma) guideline; EPOS 2020 (European Position Paper on Rhinosinusitis and Nasal Polyps); UK undergraduate Delphi (Lloyd 2014), student-scope depth cap
- subtitle: Nose and paranasal sinus disease in depth: anatomy, chronic rhinosinusitis, allergic/non-allergic rhinitis, epistaxis escalation, and the unilateral masses you must not miss.

### Anatomy notes

**The lateral nasal wall & the ostiomeatal complex (OMC)** (tags: OMC drainage funnel · Three sinuses · Chronic rhinosinusitis)

[figure: Anatomy of the middle meatus/uncinate process/ethmoid bulla forming the ostiomeatal complex, the shared drainage funnel for frontal, anterior ethmoid, and maxillary sinuses.]
- Three turbinates (inferior, middle, superior) overhang three meatuses; the middle meatus is the key one.
- The uncinate process and ethmoid bulla form the ethmoid infundibulum, the final common drainage pathway (the ostiomeatal complex) for the frontal, anterior ethmoid, and maxillary sinuses.
- Obstruct the OMC (mucosal edema, deviated septum, concha bullosa) and all three sinuses back up, which is why CRS is usually a disease of the OMC, not of one sinus alone.

**The paranasal sinuses: drainage & danger zones** (tags: Sinus drainage · Orbital danger zone · Cavernous sinus)

[figure: Drainage pathways of frontal/maxillary/ethmoid/sphenoid sinuses and the adjacent danger zones (orbit, skull base, cavernous sinus).]
- Frontal: drains via the frontal recess into the middle meatus; borders the anterior cranial fossa.
- Maxillary: largest sinus; ostium sits high on its medial wall (gravity-independent drainage). Floor relates to molar/premolar roots (odontogenic sinusitis).
- Ethmoid: anterior cells → middle meatus, posterior cells → superior meatus; separated from the orbit by the paper-thin lamina papyracea, which is the route for orbital complications.
- Sphenoid: drains via the sphenoethmoidal recess; borders the optic nerve, carotid artery, cavernous sinus, and pituitary, making it the highest-stakes sinus surgically.

**Blood supply of the nose** (tags: Four-vessel convergence · Anterior nosebleeds · Posterior bleeds)

[figure: Little's area/Kiesselbach's plexus vascular convergence and anterior vs posterior epistaxis sources.]
- Little's area (Kiesselbach's plexus) on the anterior septum is where four vessels converge: anterior ethmoidal (internal carotid to ophthalmic), sphenopalatine and greater palatine (external carotid to maxillary), and superior labial (external carotid to facial).
- Over 90% of nosebleeds are anterior, from this plexus.
- Posterior bleeds come from the sphenopalatine artery itself: heavier, harder to see, and more likely in older or anticoagulated patients.

**The nasal septum** (tags: Septal cartilage & bone · Septal hematoma)

[figure: Septal skeleton (quadrangular cartilage, perpendicular plate of ethmoid, vomer) and septal hematoma risk.]
- Cartilage anteriorly (quadrangular cartilage); bone posteriorly (perpendicular plate of the ethmoid above, vomer below).
- Deviation is very common and often asymptomatic.
- A septal hematoma or abscess is an emergency: the cartilage has no blood supply of its own and depends entirely on the overlying mucoperichondrium.

**FESS anatomy variants** (tags: Concha bullosa · Haller cells · Onodi cells)

[figure: Pneumatization variants relevant to FESS: concha bullosa, Haller cells, Onodi cells.]Three pneumatization variants that every surgeon (and every student reading a preop sinus CT) should be able to name:

- Concha bullosa: an aerated (pneumatized) middle turbinate. Common and often incidental, but a large one can narrow the OMC and contribute to obstruction/CRS, so it's sometimes resected as part of FESS.
- Haller cells (infraorbital ethmoid cells): ethmoid air cells that extend along the orbital floor, next to the maxillary sinus ostium. They can narrow the ostium (contributing to maxillary sinus disease) and put the orbital floor closer to the surgical field than expected.
- Onodi cells: the most posterior ethmoid air cell(s), pneumatizing superolaterally alongside or above the sphenoid sinus, close to (sometimes directly overlying) the optic nerve. Missing an Onodi cell on preop CT and mistaking it for the sphenoid sinus proper is a classic setup for optic nerve injury during posterior ethmoid/sphenoid surgery.None of these are diseases on their own. They matter because they change where the danger is on the CT, which is why every preop sinus CT is read systematically before a scope ever goes in.

### Anatomy diagrams (6)

**Diagram: Little's area (Kiesselbach's plexus)**

The anastomosis behind >90% of nosebleeds. Name each contributing vessel, then reveal.

_Image source: Kiesselbach's Plexus (Little's Area) Arterial Supply. Illustration generated with Google Gemini._
- Anterior ethmoidal a. (internal carotid → ophthalmic branch): the highest of the four contributing vessels
- Anterior ethmoidal a. descending to the septum: internal carotid supply to Kiesselbach's plexus
- Sphenopalatine a. (external carotid → maxillary a.): the posterior bleed source when it bleeds on its own, higher up the septum
- Greater palatine a. (external carotid → maxillary a.): reaches the anterior septum via the incisive canal
- Superior labial a., septal branch (external carotid → facial a.): supplies the plexus from below
- Little's area / Kiesselbach's plexus: the anastomosis on the anterior septum
- Anterior epistaxis zone: thin, exposed mucosa prone to abrasion and spontaneous bleeding, over 90% of nosebleeds
- Kiesselbach's plexus: confluence of the four arteries above, responsible for the great majority of epistaxis

**Diagram: Ostiomeatal complex: coronal drainage**

The final common pathway for frontal, anterior ethmoid, and maxillary drainage. Name each structure, then reveal.

_Image source: Ostiomeatal Complex (OMC) Coronal Drainage Anatomy. radiopaedia.org._
- Orbit: separated from the ethmoid air cells by the paper-thin lamina papyracea, the route for orbital spread of sinus infection
- Ethmoid bulla: the largest, most constant anterior ethmoid air cell, forming part of the medial wall of the OMC channel
- Hiatus semilunaris: the two-dimensional cleft behind the uncinate process that the ethmoid infundibulum opens into, and through which the maxillary sinus, frontal recess, and anterior ethmoid cells drain
- Uncinate process: a thin curved bone whose posterior free edge forms the anterior boundary of the hiatus semilunaris; removed first in FESS to open the OMC
- Middle nasal meatus: the space under the middle turbinate that receives drainage from the frontal, maxillary, and anterior ethmoid sinuses via the OMC
- Middle turbinate: overhangs the middle meatus/OMC; a pneumatized (concha bullosa) or paradoxically-bent middle turbinate can narrow the OMC and predispose to CRS
- Inferior turbinate: overhangs the inferior meatus, where the nasolacrimal duct opens; not part of the OMC
- Maxillary sinus: the largest paranasal sinus; its natural ostium sits high on the medial wall, so drainage depends on ciliary function rather than gravity

**Diagram: Lateral nasal wall: turbinates & meatuses (sagittal)**

Which sinus drains into which meatus. Name each, then reveal.
- Inferior turbinate → inferior meatus (nasolacrimal duct opens here)
- Middle turbinate → middle meatus (OMC: frontal/max/ant. ethmoid)
- Superior turbinate → superior meatus (posterior ethmoid)
- Sphenoethmoidal recess (sphenoid sinus drains here)

**Diagram: Sinus danger zones: orbit and skull base**

Why sinusitis can become an orbital or intracranial emergency. Name each structure, then reveal.

_Image source: Paranasal Sinuses Drainage and Adjacent Danger Zones. Illustration generated with Google Gemini._
- Anterior cranial fossa: sits directly above the ethmoid roof, separated from it only by thin bone, so ethmoid infection can spread intracranially (meningitis, epidural/subdural abscess)
- Frontal sinus: drains via the frontal recess into the middle meatus; borders the anterior cranial fossa, so frontal sinusitis risks intracranial spread (Pott's puffy tumor)
- Frontal recess → middle meatus: the frontal sinus's only drainage route, easily obstructed by anterior ethmoid disease or a large agger nasi cell
- Anterior ethmoid air cells → middle meatus: anterior ethmoid cells drain through the ethmoid infundibulum into the OMC, same pathway as the frontal and maxillary sinuses
- Frontal recess: the hourglass-shaped channel connecting the frontal sinus to the middle meatus, the narrowest and most surgically important part of frontal drainage
- Ethmoid air cells: thin-walled cells sitting between the nasal cavity and the orbit, separated from it by the paper-thin lamina papyracea
- Ostium (gravity-independent drainage): the maxillary sinus ostium sits high on the medial wall, so mucus must be cleared by ciliary action rather than gravity, a key reason CRS is so persistent
- Nasal cavity: the shared airway that all paranasal sinus drainage pathways ultimately empty into via the middle and superior meatuses
- Maxillary sinus: the largest paranasal sinus; its floor lies close to the molar/premolar tooth roots, the basis of odontogenic sinusitis
- Molar/premolar tooth roots: separated from the maxillary sinus floor by a thin bony plate (sometimes dehiscent), allowing dental infection or extraction to seed the sinus
- Odontogenic source: roughly 10-40% of maxillary sinusitis is dental in origin (periapical abscess, extraction, or a displaced root/implant), and it's classically unilateral and foul-smelling
- Ostiomeatal complex (middle meatus): the final common drainage channel for the frontal, maxillary, and anterior ethmoid sinuses; obstruction here is the central mechanism of CRS
- Lamina papyracea (route to orbital complications): paper-thin ethmoid bone separating the sinuses from the orbit; dehiscence or erosion lets infection spread to cause periorbital/orbital cellulitis, abscess, or vision loss
- Posterior ethmoid air → superior meatus: posterior ethmoid cells drain separately from the anterior/middle group, emptying into the superior meatus rather than the OMC
- Ostiomeatal complex (shared drainage hub): because three sinuses funnel through this one narrow channel, a single site of mucosal edema or anatomic variant can obstruct all three at once
- Sphenoid sinus (highest-stakes sinus): drains via the sphenoethmoidal recess; borders the optic nerve, internal carotid artery, cavernous sinus, and pituitary gland, making it the highest-risk sinus to operate on
- Optic nerve: can run directly along or within the sphenoid sinus wall (sometimes dehiscent), at risk during posterior ethmoid/sphenoid surgery
- Internal carotid artery: courses along the lateral sphenoid sinus wall, sometimes with a dehiscent bony covering; the most feared vascular injury in sphenoid/skull base surgery
- Cavernous sinus: lies lateral to the sphenoid sinus; sphenoid or posterior ethmoid infection can spread here to cause cavernous sinus thrombosis, a life-threatening emergency
- Pituitary gland: sits just above/behind the sphenoid sinus, which is why the sphenoid is the surgical corridor for transsphenoidal pituitary surgery
- Nasal cavity (sagittal view): shown here alongside the sphenoid sinus and its neurovascular neighbors to orient the danger zone in three dimensions

**Diagram: Nasal septum: cartilage and bone**

The septal skeleton and where it typically deviates. Name each part, then reveal.

_Image source: Osteocartilaginous Anatomy of the Nasal Septum. Wikimedia Commons._
- Nasal bone: forms the bony dorsum, articulating with the upper lateral (septal) cartilage below it
- Perpendicular plate of the ethmoid: the posterosuperior bony septum, continuous above with the cribriform plate, which is why a severe septal fracture can risk a CSF leak
- Cartilage of septum (quadrangular cartilage): the anterior two-thirds of the septum, flexible and avascular on its own, dependent entirely on the overlying mucoperichondrium for its blood supply
- Vomer: the posteroinferior bony septum, a thin flat bone forming the floor of the bony septum below the perpendicular plate
- Palatine bone: contributes to the posterior floor of the nasal cavity where it meets the vomer and maxilla
- Maxilla: its palatine process forms the anterior floor of the nasal cavity and the maxillary crest groove that the septum sits in
- Greater alar cartilage: forms the nasal tip and ala, continuous with but distinct from the septal cartilage; septal deviation near this junction can visibly tilt the nasal tip

**Diagram: FESS anatomic variants: concha bullosa, Haller cells, Onodi cells**

Three pneumatization variants shown against normal sinus anatomy (not all at the same coronal level). Name each, then reveal.

_Image source: Key FESS Anatomic Variants (Concha Bullosa, Haller Cells, Onodi Cells). Illustration generated with Google Gemini._
- Concha bullosa: an aerated (pneumatized) middle turbinate, shaded green here, that can narrow the ostiomeatal complex and contribute to obstruction/CRS
- Ostiomeatal complex (OMC): the shared drainage channel that a large concha bullosa can compress from the medial side
- Haller cell (infraorbital ethmoid cell): an ethmoid air cell extending along the orbital floor next to the maxillary sinus ostium; can narrow the ostium and puts the orbital floor closer to the surgical field than expected
- Onodi cell: the most posterior ethmoid air cell, pneumatizing beside or above the sphenoid and closely related to the optic nerve, so mistaking it for the sphenoid sinus risks optic nerve injury during posterior ethmoid/sphenoid surgery
- Optic nerve: can run directly beneath or beside an Onodi cell, at risk during posterior ethmoid/sphenoid surgery if the cell is mistaken for the sphenoid sinus proper

### Clinical blocks (9)

**[crs-definition] Chronic rhinosinusitis (CRS): definition & subtypes**

[figure: Formal CRS definition and CRSsNP/CRSwNP/AERD subtypes with first-line management.]≥12 weeks of ≥2 of: nasal obstruction, discharge, facial pain/pressure, or reduced smell, confirmed by nasal endoscopy or CT.

| Subtype | Key feature | First-line management | Second-line / refractory |
| --- | --- | --- | --- |
| CRS without polyps (CRSsNP) | Mucosal thickening, no polyps | Saline irrigation + intranasal corticosteroid | Culture-directed oral antibiotics for an acute exacerbation; FESS if anatomic obstruction persists despite maximal medical therapy |
| CRS with polyps (CRSwNP) | Bilateral polyps on endoscopy | Intranasal/short oral steroid; biologics or FESS if refractory | Biologic therapy (e.g., anti-IL-4/13 such as dupilumab, or anti-IgE) for refractory type-2 inflammation; revision FESS if polyps recur despite medical therapy |
| AERD (Samter's triad) | CRSwNP + asthma + ASA/NSAID sensitivity | Steroids, leukotriene modifiers, consider aspirin desensitization | Supervised aspirin desensitization if not already tried; biologics (e.g., dupilumab) or revision FESS for disease refractory to desensitization |

**[ar-classification] Allergic rhinitis: ARIA classification & step-up therapy**

The old "seasonal vs perennial" split has been replaced by ARIA (Allergic Rhinitis and its Impact on Asthma), which classifies by duration and severity, and this is what actually drives step-up therapy.
[figure: ARIA's duration/severity classification grid for allergic rhinitis.]

| Axis | Categories |
| --- | --- |
| Duration | Intermittent (<4 days/week OR <4 consecutive weeks) vs persistent (≥4 days/week AND ≥4 consecutive weeks) |
| Severity | Mild (no impact on sleep/daily activity/school/work) vs moderate-severe (one or more of: sleep disturbance, impaired daily activity/sport, impaired school/work, troublesome symptoms) |

**[ar-step-therapy] Allergic rhinitis: the step-up therapy ladder**

- Allergen avoidance + as-needed second-generation oral or intranasal antihistamine for mild/intermittent disease.
- Intranasal corticosteroid (INCS), the single most effective agent and first-line for persistent or moderate-severe disease. Regular (not as-needed) dosing works best.
- Combination therapy: INCS + intranasal antihistamine (e.g., fluticasone-azelastine) for inadequate response to INCS alone; add a leukotriene receptor antagonist if there's concurrent asthma, or an intranasal anticholinergic (ipratropium) if rhinorrhea is the dominant symptom.
- Refractory disease: refer for allergen immunotherapy, either SCIT (subcutaneous immunotherapy) or SLIT (sublingual immunotherapy), the only disease-modifying option.[figure: Stepwise escalation of allergic rhinitis therapy from avoidance through immunotherapy.]

**[non-allergic-rhinitis] Non-allergic rhinitis: the mimics of allergic rhinitis**

Chronic rhinitis with a negative allergy workup. The clinical clue: itch, sneezing bouts, and conjunctivitis point to allergic rhinitis; non-allergic rhinitis is dominated by congestion and rhinorrhea without them.

| Subtype | Trigger / clue | Basic management |
| --- | --- | --- |
| Vasomotor rhinitis | Temperature change, strong odors, alcohol, emotional stress | Diagnosis of exclusion; intranasal antihistamine or intranasal ipratropium plus trigger avoidance: oral antihistamines target histamine, not the mechanism here, so they're less effective |
| Hormonal (pregnancy) rhinitis | Onset/worsening in pregnancy, no allergic trigger | Saline irrigation first; add an intranasal corticosteroid if needed. Avoid systemic decongestants (pseudoephedrine) in pregnancy. Resolves postpartum |
| Drug-induced (see next block) | Topical decongestant overuse, ACE inhibitors, alpha-blockers, OCPs/hormone therapy | Stop/switch the causative agent; bridge rebound congestion with an intranasal corticosteroid (± short oral steroid taper) if severe |
| NARES (non-allergic rhinitis with eosinophilia syndrome) | Nasal smear shows eosinophilia; skin/IgE testing negative | Intranasal corticosteroids: often responds well despite the negative allergy workup |
| Gustatory rhinitis | Rhinorrhea triggered by eating (especially spicy/hot food) | Cholinergically mediated; intranasal ipratropium taken before meals if bothersome |

**[allergy-testing-pharmacology] Allergy testing & rhinitis pharmacology**

Testing (used to confirm allergic vs non-allergic rhinitis and identify triggers for avoidance/immunotherapy):

- Skin-prick testing: fast, sensitive, results in ~20 minutes, but antihistamines must be held for several days beforehand (they blunt the wheal-and-flare response), and it carries a small anaphylaxis risk so it's done under supervision with resuscitation available.
- Serum-specific IgE testing: no need to stop antihistamines, safer in patients with extensive eczema/dermatographism or a high anaphylaxis risk, but slower to result and generally slightly less sensitive.Either way: a positive test without a matching clinical history is sensitization, not allergy, so always correlate with symptoms and exposure.
Pharmacology:

- Second-generation oral antihistamines (cetirizine, loratadine, fexofenadine) are preferred over first-generation agents (diphenhydramine, chlorpheniramine), which cross the blood-brain barrier and cause significant sedation, anticholinergic effects, and impaired driving/psychomotor performance, including "hangover" sedation the next day.
- Oral decongestants (pseudoephedrine) raise heart rate and blood pressure, so use them with caution in hypertension/cardiovascular disease and avoid them in pregnancy.
- Topical decongestants (oxymetazoline) work within minutes but must be limited to ≤3 consecutive days to avoid rebound congestion (see rhinitis medicamentosa, next block).

**[epistaxis-ladder] The epistaxis escalation ladder**

- First aid: lean forward, firm pressure on the cartilaginous nose 10-15 min, ± topical vasoconstrictor/tranexamic acid.
- Chemical or electrical cautery of a visible anterior bleeding point.
- Anterior nasal packing (absorbable or non-absorbable): prefer resorbable packing in patients on anticoagulants/antiplatelets, with bleeding disorders, or in young children.
- Posterior bleed suspected (heavy, bleeding from both nostrils/posterior pharynx): posterior packing or a balloon device, admit, monitor airway/vagal response.
- Refractory: endoscopic sphenopalatine artery ligation or interventional embolization.Always check anticoagulation status and reverse if supratherapeutic; consider HHT in recurrent bilateral bleeders with a family history and telangiectasias.
Posterior packs need inpatient admission with cardiac/airway monitoring because the pack can trigger the nasopulmonary (nasocardiac) vagal reflex (bradycardia and hypotension), and the pack itself carries aspiration and airway-obstruction risk, especially in older patients.
[figure: Stepwise epistaxis management from first aid through cautery, packing, and arterial ligation/embolization.]

**[unilateral-masses] Unilateral nasal masses by age: the pattern to memorize**

- Adolescent male + recurrent unilateral epistaxis + nasal mass → juvenile nasopharyngeal angiofibroma (JNA). Highly vascular, so biopsy in clinic is contraindicated.
- Adult + unilateral polypoid mass → inverted papilloma until proven otherwise: locally aggressive, with malignant potential, and needing full excision (not just polypectomy).
- Older adult + unilateral mass + anosmia/epistaxis → consider esthesioneuroblastoma (olfactory groove) or other sinonasal malignancy.[figure: Age-based pattern for unilateral sinonasal masses: JNA, inverted papilloma, esthesioneuroblastoma/malignancy.]

**[fess-complications] FESS: the three complication sites every student should know**

[figure: Three FESS complication sites: orbit (lamina papyracea), skull base (cribriform plate), and internal carotid artery.]Endoscopic sinus surgery works through thin bone next to three critical structures:

- Orbit (via the lamina papyracea): injury causes orbital hematoma, diplopia, or blindness.
- Skull base (via the ethmoid roof/cribriform plate): injury causes a CSF leak.
- Internal carotid artery (in sphenoid surgery): it can run directly under thin or dehiscent bone in the sphenoid sinus wall.See the Anatomy tab for the pneumatization variants (concha bullosa, Haller cells, Onodi cells) that change where these risks sit on an individual patient's CT.

**[invasive-fungal-sinusitis] Acute invasive fungal rhinosinusitis: the can't-miss emergency**

Fungal sinus disease spans a spectrum, and host immune status is what separates the emergency from the chronic nuisance:

- Allergic fungal rhinosinusitis (AFRS): a hypersensitivity reaction to fungi (not true infection) in an immunocompetent, atopic patient. Presents as chronic polypoid CRS with thick allergic mucin; not urgent, managed like refractory CRSwNP (steroids, surgery to clear the mucin).
- Fungal ball (mycetoma): a noninvasive mass of fungal debris colonizing a single sinus (usually maxillary) in an immunocompetent patient. Presents as chronic unilateral sinus pressure/discharge, often found incidentally on CT; not urgent, curative with surgical removal alone (no antifungals needed).
- Acute invasive fungal rhinosinusitis: true angioinvasive infection in an immunocompromised host, covered in detail below. This is the only one of the three that is a surgical emergency.A rapidly progressive (<4 weeks), angioinvasive fungal infection of the sinuses in immunocompromised patients: poorly controlled diabetes (classically DKA), neutropenia, hematologic malignancy, transplant, or chronic high-dose steroids. Mortality is high (roughly 50%, higher with intracranial spread).

- Organisms: Mucorales (mucormycosis, classic in diabetic ketoacidosis) and Aspergillus.
- Exam: facial pain/numbness, fever, nasal congestion; endoscopy shows pale, insensate, or necrotic (black) mucosa/eschar on the turbinates or palate. Facial numbness and cranial neuropathies signal angioinvasive spread.
- Imaging: MRI is most sensitive (loss of contrast enhancement / "black turbinate" sign, perineural and early extrasinus spread); CT complements it for bony/surgical detail. Note ~40% have minimal or normal CT findings early: a normal CT does not exclude it.
- Diagnosis: urgent nasal endoscopy with biopsy (frozen section can confirm tissue invasion within ~30 min).
- Management (all three, urgently): (1) reverse immunosuppression / correct the underlying condition (e.g., treat DKA), (2) immediate systemic antifungals: liposomal amphotericin B for Mucorales, voriconazole for Aspergillus, and (3) urgent surgical debridement. This is a same-day surgical emergency, not a drops-and-observe problem.

### Red flags
- Immunocompromised/diabetic (DKA) patient with facial pain, numbness, or a necrotic nasal/palatal eschar: acute invasive fungal rhinosinusitis (mucormycosis/Aspergillus); urgent endoscopy + biopsy, MRI, systemic antifungals, and surgical debridement.
- Adolescent male, recurrent unilateral epistaxis + nasal mass: JNA; do not biopsy in clinic (highly vascular).
- Unilateral clear watery rhinorrhea after trauma/sinus surgery: CSF leak; test β2-transferrin, avoid packing/blowing the nose.
- Orbital signs with sinusitis (proptosis, painful/limited eye movement, reduced vision): urgent contrast CT + IV antibiotics ± drainage.
- Posterior epistaxis (heavy, bilateral, older/anticoagulated): admit, posterior packing, airway monitoring.
- AERD (Samter's triad): CRSwNP + asthma + NSAID/ASA sensitivity; avoid NSAIDs, refer for aspirin desensitization if refractory.
- Recurrent unilateral polyp in an adult: inverted papilloma until excised and confirmed benign; malignant transformation risk.
- Saddle-nose deformity: undrained septal hematoma/abscess, trauma, cocaine use, or GPA (granulomatosis with polyangiitis); investigate systemically if no trauma history.
- Recurrent bilateral epistaxis + family history + telangiectasias: hereditary hemorrhagic telangiectasia (HHT/Osler-Weber-Rendu).

### Cases (7)

**Case [case-posterior-epistaxis]**

Stem: An 81-year-old on apixaban has a heavy nosebleed with blood visible in the oropharynx despite 20 minutes of firm anterior pressure. No clear anterior bleeding point is seen on exam.

- Q: What does bleeding into the oropharynx despite anterior pressure suggest?
  A: A posterior bleed, typically from the sphenopalatine artery. Heavier, harder to visualize, and higher risk in older/anticoagulated patients.

- Q: Next steps?
  A: Posterior packing or a balloon device, admission for airway/vagal monitoring, ENT involvement, and consideration of endoscopic sphenopalatine artery ligation or embolization if it persists. Assess whether anticoagulation needs to be held/reversed with the prescribing team. If packing is needed in this anticoagulated patient, resorbable packing is preferred over nonresorbable, since removing a nonresorbable pack can abrade mucosa and provoke rebleeding (AAO-HNS 2020).

Teaching: When anterior measures fail and blood tracks posteriorly, escalate the ladder. Don't keep repeating anterior pressure.[figure: Posterior epistaxis in an anticoagulated elderly patient, requiring escalation past anterior measures.]

**Case [case-aerd]**

Stem: A 38-year-old woman with asthma has recurrent nasal polyps despite three prior polypectomies. She recalls a severe asthma flare and facial flushing after taking ibuprofen for a headache last year.

- Q: What triad does this suggest?
  A: Samter's triad (AERD, aspirin-exacerbated respiratory disease): CRS with nasal polyps + asthma + NSAID/aspirin sensitivity.

- Q: Management implications?
  A: Strict NSAID avoidance, aggressive medical therapy (intranasal/systemic steroids, biologics), and, for refractory cases, aspirin desensitization under specialist supervision, which can reduce polyp recurrence.

Teaching: Recurrent polyps + asthma + an NSAID reaction history = ask about AERD before the fourth polypectomy.

**Case [case-jna]**

Stem: A 14-year-old boy has had three episodes of unilateral nosebleeds over two months and now reports one-sided nasal blockage. Endoscopy shows a smooth, reddish-purple mass in the nasal cavity.

- Q: What is the leading diagnosis, and why does age/sex matter?
  A: Juvenile nasopharyngeal angiofibroma (JNA), a benign but highly vascular tumor that occurs almost exclusively in adolescent males.

- Q: What must you NOT do, and what's the correct next step?
  A: Do not biopsy in clinic: it is extremely vascular and can bleed catastrophically. Get contrast-enhanced MRI/CT and refer for angiography ± preoperative embolization before surgical excision.

Teaching: Adolescent male + recurrent unilateral epistaxis + a nasal mass is JNA until imaging says otherwise, and imaging comes before biopsy.

**Case [case-orbital-abscess]**

Stem: A 7-year-old with known sinusitis develops worsening proptosis; eye movements are now painful and limited, and contrast CT shows a rim-enhancing fluid collection medial to the globe.

- Q: What is this, and how is it staged?
  A: A subperiosteal orbital abscess, a Chandler stage III orbital complication of sinusitis (post-septal disease with a discrete collection).

- Q: Management?
  A: IV antibiotics and urgent surgical drainage (often endoscopic) are typically required for a subperiosteal abscess, especially with limited eye movement or visual change. This is not managed with antibiotics alone. Empiric IV coverage is typically broad-spectrum until culture data return, e.g., vancomycin (MRSA/streptococcal coverage) plus ceftriaxone or ampicillin-sulbactam (gram-negative and anaerobic coverage), then narrowed based on intraoperative culture and sensitivity results.

Teaching: [figure: Subperiosteal orbital abscess as a Chandler stage III complication of pediatric sinusitis.]Once there's a discrete collection and limited eye movement, this has moved from 'watch on antibiotics' to 'drain it.'

**Case [case-csf-leak]**

Stem: A 29-year-old two weeks after minor facial trauma reports persistent clear, watery drainage from one nostril, worse when leaning forward. He has no other ENT symptoms.

- Q: What must be excluded, and how?
  A: CSF rhinorrhea from a skull-base fracture. Test the fluid for β2-transferrin (specific to CSF); a 'halo sign' on filter paper is suggestive but not definitive.

- Q: What do you avoid while this is being worked up?
  A: Avoid nasal packing, nose-blowing, and instrumentation until a leak is excluded/localized (CT/MRI); there's a risk of ascending meningitis. Most traumatic leaks are managed with bed rest/head elevation first; persistent leaks need surgical repair.

Teaching: Unilateral clear rhinorrhea after trauma is CSF until proven otherwise. Test it, don't dismiss it as a cold.

**Case [case-rhinitis-medicamentosa]**

Stem: A 34-year-old reports severe nasal congestion for the past two months, ever since a cold. She has been using an over-the-counter oxymetazoline spray nightly because "nothing else touches it," and now finds her nose blocks up worse than ever a few hours after each dose.

- Q: What's happening, and what's the mechanism?
  A: Rhinitis medicamentosa, rebound congestion from prolonged topical decongestant use (typically >5-7 days). Tachyphylaxis and reactive mucosal hyperemia set in, so congestion worsens as each dose wears off, driving escalating use.

- Q: How do you manage it, and what should have been done differently at the start?
  A: Stop the topical decongestant. This is the definitive step, even though congestion often transiently worsens for several days. Bridge with an intranasal corticosteroid (± a short oral steroid taper for severe rebound) and saline irrigation. She should have been counselled up front to limit oxymetazoline to ≤3 consecutive days.

Teaching: Worsening congestion in someone using a decongestant spray nightly for weeks is rhinitis medicamentosa until proven otherwise. The fix is stopping the spray, not adding another agent on top of it.

**Case [case-vasomotor-rhinitis]**

Stem: A 50-year-old describes years of chronic nasal congestion and clear rhinorrhea triggered by cold air, strong perfume, and going from air-conditioning into humid heat. She denies itching, sneezing bouts, or eye symptoms. Skin-prick testing to common aeroallergens is negative.

- Q: What is the likely diagnosis, and what feature argues against allergic rhinitis?
  A: Vasomotor (non-allergic) rhinitis: irritant/temperature triggers with congestion and rhinorrhea but no itch, sneezing, or conjunctivitis (the classic allergic-rhinitis symptom cluster), plus a negative allergy workup.

- Q: How does management differ from allergic rhinitis?
  A: Oral antihistamines target histamine-mediated symptoms and are typically less effective here. First-line options are an intranasal antihistamine (e.g., azelastine, which has independent anti-inflammatory effects) or intranasal ipratropium if rhinorrhea predominates, plus trigger avoidance.

Teaching: Congestion and rhinorrhea without itch/sneeze/conjunctivitis, plus negative allergy testing, is the non-allergic rhinitis pattern. Treat the mechanism, not a reflex prescription of an oral antihistamine.

### Flashcards (28)

**[omc-anatomy]** tags: RH, anatomy, milestones: MK1, PC5, UKMLA: Nasal obstruction, reviewer: (none)
- Front: What structures form the ostiomeatal complex, and why does it matter clinically?
- Back: The uncinate process and ethmoid bulla create the ethmoid infundibulum, the shared drainage channel for the frontal, anterior ethmoid, and maxillary sinuses via the middle meatus. Obstruct the OMC and all three back up together: the anatomic basis of most chronic rhinosinusitis.[figure: Ostiomeatal complex structures (uncinate process, ethmoid bulla, infundibulum) and their role in CRS.]
- Source: Standard rhinologic anatomy teaching.

**[sinus-danger-zones]** tags: RH, anatomy, milestones: MK1, PC5, UKMLA: Facial pain, reviewer: (none)
- Front: What critical structures border each paranasal sinus, and what complication does each border explain?
- Back: Ethmoid → orbit (lamina papyracea) → orbital cellulitis/abscess. Frontal → anterior cranial fossa → intracranial spread/Pott's puffy tumor. Sphenoid → optic nerve, carotid artery, cavernous sinus, pituitary → the highest-stakes sinus surgically.[figure: Critical structures bordering each paranasal sinus and the complications each border explains.]
- Source: Standard rhinologic anatomy teaching.

**[septal-blood-supply]** tags: RH, anatomy, milestones: MK1, PC5, UKMLA: Epistaxis, reviewer: (none)
- Front: Which four arteries converge at Little's area (Kiesselbach's plexus)?
- Back: Anterior ethmoidal (ICA→ophthalmic), sphenopalatine and greater palatine (ECA→maxillary), and superior labial (ECA→facial). This anastomosis on the anterior septum is the source of >90% of nosebleeds.[figure: Four arteries converging at Little's area/Kiesselbach's plexus.]
- Source: Standard rhinologic anatomy teaching.

**[septal-structure]** tags: RH, anatomy, milestones: MK1, UKMLA: Nasal obstruction, reviewer: (none)
- Front: What makes up the nasal septum, and why is a septal hematoma dangerous?
- Back: Quadrangular cartilage anteriorly, perpendicular plate of the ethmoid and vomer posteriorly. The cartilage has no blood supply of its own; it depends on the overlying mucoperichondrium, so a hematoma/abscess there causes avascular necrosis (saddle-nose deformity) if not drained.[figure: Composition of the nasal septum and why septal hematoma causes saddle-nose deformity.]
- Source: Standard rhinologic anatomy teaching.

**[fess-anatomy-variants-card]** tags: RH, anatomy, milestones: MK1, PC5, UKMLA: Rhinosinusitis, reviewer: (none)
- Front: The most posterior ethmoid air cells, which pneumatize alongside or above the sphenoid sinus and can sit right next to the optic nerve, are called [...].
- Back: The most posterior ethmoid air cells, which pneumatize alongside or above the sphenoid sinus and can sit right next to the optic nerve, are called Onodi cells. Mistaking one for the sphenoid sinus proper on preop CT is a classic setup for optic nerve injury during posterior ethmoid or sphenoid surgery.
- Source: Standard rhinologic surgical anatomy teaching.

**[crs-definition-card]** tags: RH, clinical, milestones: PC5, MK3, UKMLA: Rhinosinusitis, reviewer: (none)
- Front: How is chronic rhinosinusitis (CRS) formally defined?
- Back: ≥12 weeks of ≥2 of: nasal obstruction, discharge, facial pain/pressure, or reduced smell, confirmed by endoscopy or CT (symptoms alone aren't diagnostic beyond 12 weeks).
- Source: AAO-HNSF Clinical Practice Guideline: Adult Sinusitis (Update), 2015.

**[crs-subtypes-card]** tags: RH, clinical, milestones: PC5, MK3, UKMLA: Rhinosinusitis, reviewer: (none)
- Front: Contrast CRSsNP and CRSwNP, and name their first-line treatments.
- Back: CRSsNP (without polyps): mucosal thickening → saline irrigation + intranasal corticosteroid. CRSwNP (with polyps): bilateral polyps on endoscopy → intranasal/short-course oral steroids first; biologics or FESS if refractory.[figure: Contrast of CRSsNP vs CRSwNP and their first-line treatments.]
- Source: AAO-HNSF Adult Sinusitis CPG, 2015.

**[aerd-card]** tags: RH, clinical, milestones: MK2, PC5, UKMLA: Rhinosinusitis, Allergies, reviewer: (none)
- Front: What is Samter's triad (AERD), and what must patients avoid?
- Back: CRS with nasal polyps + asthma + ASA/NSAID sensitivity. Strict NSAID avoidance; refractory cases may benefit from supervised aspirin desensitization, which can reduce polyp recurrence.
- Source: AAO-HNSF Adult Sinusitis CPG, 2015.

**[nasal-polyp-mgmt]** tags: RH, clinical, milestones: PC5, UKMLA: Rhinosinusitis, reviewer: (none)
- Front: What is the step-up management ladder for nasal polyps?
- Back: Intranasal corticosteroids first-line → short oral steroid course for flares → biologic therapy (e.g., anti-IL4/13, anti-IgE) for refractory type-2 inflammation → FESS if medical therapy fails. Polyps commonly recur without ongoing medical maintenance.[figure: Nasal polyposis step-up management ladder.]
- Source: AAO-HNSF Adult Sinusitis CPG, 2015.

**[aria-classification-card]** tags: RH, clinical, milestones: MK2, PC5, UKMLA: Allergies, reviewer: (none)
- Front: How does ARIA classify allergic rhinitis, and why does it matter more than 'seasonal vs perennial'?
- Back: Two axes: duration (intermittent, <4 days/week or <4 weeks vs persistent, ≥4 days/week and ≥4 weeks) and severity (mild, with no impact on sleep/activity/school/work, vs moderate-severe, with one or more of those impacts). This duration+severity grid, not the trigger's season, is what drives step-up therapy.
- Source: ARIA (Allergic Rhinitis and its Impact on Asthma) guideline.

**[ar-step-therapy-card]** tags: RH, clinical, milestones: MK2, PC5, UKMLA: Allergies, reviewer: (none)
- Front: For persistent or moderate-severe allergic rhinitis, the single most effective first-line agent is a regularly dosed [...].
- Back: For persistent or moderate-severe allergic rhinitis, the single most effective first-line agent is a regularly dosed intranasal corticosteroid. Regular, scheduled dosing works better than as-needed use.
- Source: AAO-HNSF Clinical Practice Guideline: Allergic Rhinitis, 2015; ARIA guideline.

**[non-allergic-rhinitis-differential]** tags: RH, clinical, milestones: MK2, PC5, UKMLA: Allergies, reviewer: (none)
- Front: The symptom cluster that points toward allergic rather than non-allergic rhinitis is [...].
- Back: The symptom cluster that points toward allergic rather than non-allergic rhinitis is itch, sneezing bouts, and conjunctivitis. Their absence, together with a negative allergy workup, points instead to a non-allergic cause such as vasomotor rhinitis.
- Source: ARIA guideline; standard rhinology teaching on non-allergic rhinitis.

**[rhinitis-medicamentosa-card]** tags: RH, pharm, milestones: MK2, PC5, UKMLA: Allergies, reviewer: (none)
- Front: [...] is rebound nasal congestion that develops after using a topical decongestant, such as oxymetazoline, for more than about 5 to 7 days.
- Back: Rhinitis medicamentosa is rebound nasal congestion that develops after using a topical decongestant, such as oxymetazoline, for more than about 5 to 7 days. Treatment means stopping the spray and bridging with an intranasal corticosteroid if congestion is severe.
- Source: AAO-HNSF Allergic Rhinitis CPG, 2015; standard rhinology teaching.

**[drug-induced-rhinitis-card]** tags: RH, pharm, milestones: MK2, PC5, UKMLA: Allergies, reviewer: (none)
- Front: Among drugs that can cause or worsen chronic rhinitis, [...] do so through a bradykinin-mediated mechanism.
- Back: Among drugs that can cause or worsen chronic rhinitis, ACE inhibitors do so through a bradykinin-mediated mechanism. Ask about medication history in any patient with unexplained chronic nasal congestion.
- Source: ARIA guideline; standard rhinology/pharmacology teaching.

**[allergy-testing-card]** tags: RH, clinical, milestones: MK2, PC5, UKMLA: Allergies, reviewer: (none)
- Front: A positive allergy test result that doesn't match the clinical history indicates [...], not true allergy.
- Back: A positive allergy test result that doesn't match the clinical history indicates sensitization, not true allergy, so it always needs correlating with symptoms and exposure. Skin-prick testing works fast; serum-specific IgE skips the need to stop antihistamines first.
- Source: AAO-HNSF Allergic Rhinitis CPG, 2015.

**[antihistamine-decongestant-pharm-card]** tags: RH, pharm, milestones: MK2, PC5, UKMLA: Allergies, reviewer: (none)
- Front: Second-generation antihistamines, such as cetirizine, cause far less sedation than first-generation agents like diphenhydramine because they cross the [...] far less.
- Back: Second-generation antihistamines, such as cetirizine, cause far less sedation than first-generation agents like diphenhydramine because they cross the blood-brain barrier far less. Oral decongestants raise heart rate and blood pressure, so avoid them in pregnancy.
- Source: AAO-HNSF Allergic Rhinitis CPG, 2015.

**[epistaxis-vessels]** tags: RH, clinical, milestones: PC5, PC1, UKMLA: Epistaxis, reviewer: (none)
- Front: What vessel is responsible for most anterior bleeds, and which for posterior bleeds?
- Back: Anterior: Little's area/Kiesselbach's plexus (>90% of bleeds). Posterior: the sphenopalatine artery itself, heavier, harder to see, more common in older/anticoagulated patients.
- Source: AAO-HNSF Clinical Practice Guideline: Nosebleed (Epistaxis), 2020.

**[epistaxis-escalation-card]** tags: RH, clinical, milestones: PC5, PC1, UKMLA: Epistaxis, reviewer: (none)
- Front: List the epistaxis escalation ladder from first aid to refractory management.
- Back: 1) Firm anterior pressure ± vasoconstrictor/tranexamic acid → 2) cautery of a visible point → 3) anterior packing (prefer resorbable in patients on anticoagulants/antiplatelets, with bleeding disorders, or in young children) → 4) posterior packing/balloon + admission if posterior → 5) sphenopalatine artery ligation or embolization if refractory.
- Source: AAO-HNSF Nosebleed CPG, 2020.

**[hht-card]** tags: RH, clinical, milestones: PC5, MK3, UKMLA: Epistaxis, reviewer: (none)
- Front: What should recurrent bilateral epistaxis with a family history and telangiectasias make you think of?
- Back: Hereditary hemorrhagic telangiectasia (HHT / Osler-Weber-Rendu), an autosomal-dominant vascular disorder. Screen for pulmonary/hepatic/cerebral AVMs and refer for genetics and specialist management.
- Source: Standard rhinology teaching on hereditary hemorrhagic telangiectasia.

**[unilateral-mass-age]** tags: RH, clinical, milestones: PC5, PC3, UKMLA: Nasal obstruction, Epistaxis, RED FLAG, reviewer: (none)
- Front: Give the age/sex pattern for the three classic unilateral sinonasal masses.
- Back: Adolescent male → juvenile nasopharyngeal angiofibroma (JNA). Adult → inverted papilloma until proven otherwise. Older adult + anosmia/epistaxis → esthesioneuroblastoma or other sinonasal malignancy.
- Source: Standard rhinology/oncology teaching on sinonasal masses.

**[jna-card]** tags: RH, clinical, milestones: PC5, PC3, UKMLA: Epistaxis, RED FLAG, reviewer: (none)
- Front: Why is biopsying a suspected JNA in clinic dangerous, and what's the correct workup order?
- Back: JNA is highly vascular, so clinic biopsy risks catastrophic hemorrhage. Correct order: imaging first (contrast MRI/CT, then angiography) → preoperative embolization → surgical excision.
- Source: Standard rhinology teaching on JNA.

**[inverted-papilloma-card]** tags: RH, clinical, milestones: PC5, PC3, UKMLA: Nasal obstruction, RED FLAG, reviewer: (none)
- Front: Why does a recurrent unilateral nasal polyp need more than repeat polypectomy?
- Back: It may be an inverted papilloma: locally aggressive, prone to recurrence, and carrying a real risk of malignant transformation (squamous cell carcinoma) in a minority of cases. Needs complete surgical excision with margin control, not simple debulking.
- Source: Standard rhinology/oncology teaching on inverted papilloma.

**[csf-leak-card]** tags: RH, clinical, milestones: PC5, PC2, UKMLA: Ear and nasal discharge, RED FLAG, reviewer: (none)
- Front: How do you confirm a suspected CSF rhinorrhea, and what do you avoid in the meantime?
- Back: Send fluid for β2-transferrin (specific to CSF); localize with CT/MRI. Avoid nasal packing, blowing the nose, or instrumentation until excluded; there's a risk of ascending meningitis. Most post-traumatic leaks resolve with conservative management; persistent leaks need surgical repair.
- Source: Meco et al., β2-transferrin testing for CSF leak, Am J Rhinol 2003.

**[invasive-fungal-sinusitis-card]** tags: RH, clinical, milestones: PC5, SBP1, UKMLA: Rhinosinusitis, RED FLAG, reviewer: (none)
- Front: In a diabetic (especially DKA) or immunocompromised patient with facial pain and a necrotic "black" eschar on the turbinate or palate, the can't-miss diagnosis is [...].
- Back: In a diabetic (especially DKA) or immunocompromised patient with facial pain and a necrotic "black" eschar on the turbinate or palate, the can't-miss diagnosis is acute invasive fungal rhinosinusitis (mucormycosis from Mucorales, or Aspergillus). It is a surgical emergency requiring urgent biopsy, systemic antifungals (liposomal amphotericin B for Mucorales), surgical debridement, and reversal of immunosuppression. MRI is most sensitive; a normal CT does not exclude it.
- Source: Standard rhinology teaching on acute invasive fungal rhinosinusitis.

**[fess-complications-card]** tags: RH, clinical, milestones: PC5, SBP1, UKMLA: Rhinosinusitis, reviewer: (none)
- Front: Name the three anatomic sites where FESS complications occur, and what each injury causes.
- Back: Orbit (lamina papyracea) → hematoma, diplopia, blindness. Skull base (ethmoid roof/cribriform plate) → CSF leak. Internal carotid artery (sphenoid sinus wall, can be dehiscent) → catastrophic hemorrhage, the reason sphenoid surgery is done with great care.
- Source: Standard rhinologic surgery teaching.

**[septal-perforation-card]** tags: RH, clinical, milestones: PC5, MK3, UKMLA: Nasal obstruction, reviewer: (none)
- Front: What are the common causes of a septal perforation?
- Back: Prior septal surgery, undrained septal hematoma/abscess, chronic cocaine use, nasal trauma, chronic topical decongestant/steroid overuse, and systemic disease (granulomatosis with polyangiitis, sarcoidosis). Ask about drug use and systemic symptoms when there's no clear surgical/traumatic cause.
- Source: Standard rhinology teaching on septal perforation.

**[allergic-rhinitis-immunotherapy]** tags: RH, clinical, milestones: MK2, PC5, UKMLA: Allergies, reviewer: (none)
- Front: When is immunotherapy considered for allergic rhinitis, and what are the two delivery routes?
- Back: Considered when symptoms are refractory to allergen avoidance + intranasal steroids/antihistamines, or when the patient wants a disease-modifying (not just symptomatic) option. SCIT (subcutaneous immunotherapy) and SLIT (sublingual immunotherapy) are the two routes; both require specialist allergy/ENT involvement.

Common agents: SCIT typically uses individualized mixes of standardized aeroallergen extracts (dust mite, grass/tree/weed pollens, animal dander, mold) based on the patient's test results. SLIT in the US is most often a once-daily FDA-approved sublingual tablet for a single allergen (e.g., timothy grass, ragweed, or dust mite).
- Source: AAO-HNSF Clinical Practice Guideline: Allergic Rhinitis, 2015.

**[sinusitis-antibiotics]** tags: RH, pharm, milestones: SBP3, PC5, UKMLA: Rhinosinusitis, reviewer: (none)
- Front: Because most acute rhinosinusitis is viral, antibiotics are reserved for symptoms lasting more than [...] without improvement, or for severe or worsening symptoms.
- Back: Because most acute rhinosinusitis is viral, antibiotics are reserved for symptoms lasting more than 10 days without improvement, or for severe or worsening symptoms ("double worsening"). First-line therapy in the US is now amoxicillin (500 mg tid or 875 mg bid) rather than amoxicillin-clavulanate, per the 2025 AAO-HNSF update: comparative studies show no better efficacy but more adverse events with clavulanate. Reserve amoxicillin-clavulanate (or high-dose 2 g/125 mg bid) for higher-risk patients: age >65, recent antibiotics or hospitalization, immunocompromise, severe disease, frontal/sphenoid involvement, or high local penicillin-resistant pneumococcus rates. (Note: IDSA still weakly favors amoxicillin-clavulanate first-line: a genuine guideline disagreement.)
- Source: AAO-HNSF Adult Sinusitis Update, 2025; IDSA Acute Bacterial Rhinosinusitis Guideline, 2012.

---

## Module: Sleep Surgery & OSA (`sleep-osa`)
- version: 0.4.0-draft
- status: DRAFT, pending faculty review. v0.2.0: added a PAP-therapy depth pass, formal CPAP titration methods (full-night/split-night/APAP) and the AASM/CMS adherence definition, a troubleshooting table for co
- facultyReviewer: ""
- curriculum anchors: UKMLA Content Map (GMC), scope anchor; owns Snoring and Obstructive sleep apnoea at adult subspecialty depth (screening tools, PSG interpretation, surgical ladder); ACGME Otolaryngology-HNS Milestones 2.0, primarily PC6/PC9 (airway/surgical management); AASM Clinical Practice Guidelines on OSA diagnosis and management; AAO-HNSF Position Statement on OSA surgery; UK undergraduate Delphi (Lloyd 2014), student-scope depth cap
- subtitle: Screening tools and polysomnography basics, plus the ladder from CPAP to named surgical options for adult obstructive sleep apnea.

### Anatomy notes

**Sites of upper airway obstruction in OSA** (tags: Nasal collapse · Retropalatal collapse · Retroglossal collapse)

[figure: The three anatomic levels where the upper airway can collapse in OSA: nasal, retropalatal, and retroglossal.]Collapse can occur at multiple levels, often more than one at once.

- The nasal cavity (septal deviation, turbinate hypertrophy) raises upstream resistance and drives CPAP intolerance.
- The retropalatal region (soft palate, uvula, lateral pharyngeal walls) is the classic UPPP target.
- The retroglossal/hypopharyngeal region (tongue base, epiglottis) is where tongue-base and hypoglossal nerve procedures work.Identifying where collapse occurs determines which surgery, if any, is appropriate.

**Friedman tongue position and staging** (tags: Tongue base · Oropharynx exam · UPPP response)

[figure: Friedman tongue position grades I-IV and how they predict UPPP response.]The exam: how it's done: the Friedman tongue position (FTP), sometimes called the modified Mallampati index in this context, grades how much the tongue base obscures the palate, tonsils, and uvula on oral exam.
The single most important technical point, and the one that separates it from the classic (anesthesia) Mallampati score: mouth open wide, tongue resting in the mouth, not protruded, and not phonating. Keeping the tongue in its natural resting position mimics how it behaves during sleep, which is the whole point.
Classic Mallampati has the patient protrude the tongue instead: a different test for a different purpose, predicting intubation difficulty.
The grade is invalid if the patient phonates ("ahh") or protrudes the tongue during assessment.
What each tongue position shows: grade by the most posterior structure you can still see:

- FTP I: entire uvula and tonsils/pillars visible (full oropharynx view).
- FTP IIa: entire uvula visible but not the tonsils.
- FTP IIb: soft palate and the base of the uvula visible, but not the full uvula.
- FTP III: soft palate visible but not the uvula at all.
- FTP IV: only the hard palate visible.As the grade rises, the tongue base progressively obscures the view, ascending from tonsils -> uvula -> soft palate -> hard palate. Less visualized structure corresponds to a higher grade and a worse airway.
Clinically, FTP III-IV correlates with retrolingual (tongue-base) obstruction, while FTP I-II usually does not: exactly why high grades predict that palate-only surgery will miss the problem.
The full staging system: tongue position + tonsils + BMI: FTP alone is one of three ingredients in the Friedman staging system: (1) Friedman tongue/palate position (I-IV), (2) tonsil size (Brodsky grade 0-4), (3) BMI (cutoff of 40 kg/m&sup2;).
StageTonsil sizeTongue/palate positionBMIUPPP success (approx.)ILarge (3-4)Favorable (FTP I-II)<40~80%IILarge (3-4) with unfavorable FTP (III-IV), or small (0-2) with favorable FTP (I-II)Mixed<40~40%IIISmall (0-2)Unfavorable (FTP III-IV)<40<10%IVAnyAny>40Surgery generally not recommendedPalate surgery is most effective when bulky palatine tissue is the primary obstruction and the tongue base is not involved (Stage I); outcomes are poor when tonsils are small and the tongue base is the dominant obstruction (Stage III).
Predicting Palate Surgery Success: staging answers one question before offering uvulopalatopharyngoplasty (UPPP): is the obstruction at the palate (addressable by UPPP) or the tongue base (not addressable by UPPP)?
Stage I (favorable anatomy, big tonsils) -> UPPP alone succeeds ~80% of the time. Stage II -> intermediate (~40%). Stage III (tongue-base-dominant) -> UPPP alone succeeds <10%; these patients need multilevel or tongue-base-directed treatment (e.g., hypoglossal nerve stimulation, tongue-base reduction, or MMA), not an isolated palate operation.
One-liner: "Anatomy predicts UPPP success better than AHI does": how bad the numbers are matters less than where the obstruction sits.
Caveats: inter-examiner agreement is imperfect (the tongue and palate are mobile, so grading varies between examiners): treat FTP as a useful screen, not a precision measurement. It also does not replace DISE (drug-induced sleep endoscopy): Friedman staging is a clinic-chair predictor, while DISE directly visualizes the level(s) of collapse and is what ultimately tailors surgery.

**The hypoglossal nerve and tongue protrusion** (tags: CN XII · Medial/lateral branch split · Hypoglossal stimulation)

[figure: CN XII course and genioglossus innervation underlying tongue protrusion and its role in OSA/airway patency.]CN XII is the pure motor nerve of the tongue: the nerve that keeps the tongue from falling back and blocking the airway in sleep.

- Pure motor nerve: CN XII supplies all intrinsic tongue muscles and all extrinsic tongue muscles except the palatoglossus, which is innervated by the vagus (CN X) via the pharyngeal plexus.Palatoglossus is named as a tongue muscle but functions as a palate muscle.
Protrusors vs. retractors (the key functional split):

- Protrusors (push the tongue out, open the airway) = genioglossus (the main one), plus geniohyoid/intrinsic protrusive fibers.
- Retractors (pull the tongue back) = hyoglossus and styloglossus.Genioglossus protrudes the tongue; hyoglossus and styloglossus retract it. This functional split is the anatomic basis for stimulator targeting.
The genioglossus is the airway's main dilator: it contracts with each inspiration to pull the tongue base forward and keep the retrolingual airway open. Tone normally drops at sleep onset; in OSA, too little genioglossus activity lets the tongue fall back and obstruct.
Five-segment course (medulla -> tongue): medullary -> cisternal -> skull-base (hypoglossal canal in the occipital bone) -> carotid space -> sublingual. Extracranially it descends near the internal carotid/internal jugular, loops forward below the mandible, crosses the external carotid and lingual arteries, and enters the tongue at the anterior border of hyoglossus.
Clinical point: this long, exposed course is why CN XII palsy has so many causes: skull-base tumor, carotid dissection, carotid endarterectomy injury, neck surgery/trauma.
C1/ansa cervicalis hitchhikers: in the neck the nerve carries along C1 fibers that peel off to supply geniohyoid and thyrohyoid, and, via the ansa cervicalis, the infrahyoid strap muscles. These aren't "true" CN XII fibers: they just travel with it.
The lesion sign: a unilateral CN XII lesion makes the protruded tongue deviate toward the weak (lesion) side: the intact genioglossus on the normal side pushes the tongue across. Chronic lesions show ipsilateral atrophy and fasciculations.
Inclusion vs. Exclusion Branches: Cuff Placement: CN XII is a pure motor nerve. Distal to its main trunk it divides into a medial division and a lateral division, which do opposite things to the tongue.

- Medial branches -> protrusors (genioglossus, plus geniohyoid/intrinsic protrusive muscles, with a C1 contribution). Stimulating these protrudes and stiffens the tongue, opening the retrolingual airway. These are the 'inclusion' branches: the stimulation cuff is placed to capture them.
- Lateral branches -> retractors (hyoglossus, styloglossus). Stimulating these retracts the tongue (counterproductive), so they are the 'exclusion' branches: deliberately kept out of the cuff.Optimal outcomes depend on selectively driving the medial (protrusor) fibers while avoiding the lateral (retractor) fibers. Intraoperative nerve integrity monitoring (EMG) confirms genioglossus (protrusion) activation without hyoglossus/styloglossus (retraction) before the cuff is secured. Bipolar (not monopolar) cautery is used near the device to avoid damage.

**How CPAP works** (tags: Pneumatic splinting · CPAP · Surgical adjunct)

[figure: CPAP as pneumatic splinting of the collapsible upper airway.]How CPAP works: continuous positive airway pressure delivers a constant column of pressurized room air through a mask, acting as a pneumatic splint: positive intraluminal pressure holds the collapsible pharyngeal airway open throughout the respiratory cycle.
Because pressure props the airway from the inside, it works at every level of collapse simultaneously (nasopharynx, retropalatal, retroglossal) regardless of where the primary obstruction sits. That's why CPAP is first-line for essentially all severities of OSA and can start before the exact collapse site is known, unlike surgery, which must target a specific level.
It treats the obstruction, it does not cure it: benefits (resolved apneas, better oxygenation, less daytime sleepiness, lower blood pressure) last only as long as the device is used nightly. Stopping therapy returns the airway to baseline collapsibility.
Pressure delivery modes:

- CPAP: one fixed pressure held constant through inspiration and expiration, the standard workhorse.
- APAP (auto-titrating): the device senses flow limitation/snoring and adjusts pressure breath-to-breath within a set range; useful when a single fixed pressure is poorly tolerated or the pressure requirement varies.
- BiPAP (bilevel): separate higher inspiratory and lower expiratory pressures; reserved for high pressure requirements, CPAP intolerance, or a coexisting hypoventilation/CO2-retention problem (obesity hypoventilation, neuromuscular disease, overlap syndrome), not routine OSA.Adherence: the number that defines "CPAP failure": CPAP only works if worn. The widely used (CMS/insurer) adherence definition is &ge;4 hours/night on &ge;70% of nights over a 30-day period.
A patient is not a candidate for second-line therapy (including surgery) for intolerance until a genuine adherence effort has failed. "CPAP failure" means tried-and-couldn't-tolerate or inadequate response despite use, not simply "declined."
CPAP Intolerance and the ENT Role: roughly a third to half of patients struggle to adhere. Common reasons include mask discomfort/leak, claustrophobia, aerophagia (swallowed air), and pressure intolerance.
The ENT-relevant reason is nasal obstruction (septal deviation, turbinate hypertrophy, polyps, valve collapse), which raises nasal resistance and makes delivered pressure uncomfortable or ineffective. This is why ENT evaluation of the nasal airway is key to salvaging a struggling CPAP user.
Where sleep surgery fits: surgery is generally a CPAP alternative or adjunct, not a first-line replacement.

- Adjunctive (rescue CPAP): nasal surgery (septoplasty, turbinate reduction, valve repair) rarely cures OSA alone but lowers nasal resistance and improves CPAP tolerance/adherence: the most common ENT contribution.
- Alternative (replace CPAP): for CPAP-intolerant patients, site-directed procedures (palate surgery/UPPP, tongue-base procedures, hypoglossal nerve stimulation, maxillomandibular advancement) treat the specific collapse level(s) identified on exam and DISE.Exceptions worth remembering: in children, adenotonsillar hypertrophy is the usual driver, so adenotonsillectomy is first-line, not CPAP. Any patient with anatomic obstruction amenable to a specific fix may go to surgery earlier.

### Anatomy diagrams (5)

**Diagram: Levels of upper airway obstruction**

Nasal, retropalatal, and retroglossal levels: name each, then reveal what surgery targets it.

_Image source: Levels of Upper Airway Obstruction and Targeted Surgeries. Illustration generated with Google Gemini._
- Nasal cavity: septum/turbinates; affects CPAP tolerance more than apnea directly
- Retropalatal region: soft palate/uvula/lateral walls (UPPP target)
- Retroglossal region: tongue base (hypoglossal nerve stimulator / tongue-base surgery target)

**Diagram: Friedman tongue position (I-IV)**

How much the tongue base obscures the view on relaxed oral exam. Name each grade, then reveal.

_Image source: Friedman Tongue Position Grades (I-IV). ResearchGate / Friedman et al._
- Grade I: full view of tonsils/pillars/soft palate
- Grade II: partial view, some tongue-base crowding
- Grade III: soft palate visible, tongue base obscures most
- Grade IV: only hard palate visible; worst predictor for UPPP-alone success

**Diagram: Hypoglossal nerve stimulator**

Sensing lead, generator, and stimulation cuff: name each component, then reveal.

_Image source: Hypoglossal Nerve Stimulator Components (Generator, Sensing Lead, Cuff). Xia et al. (2023) Sensors 23(21):8882._
- Hypoglossal nerve (CN XII): the stimulation target; contracting genioglossus protrudes the tongue in phase with inspiration
- Stimulating electrodes (labeled 'Stimuliti Electrodes' on the figure): a cuff placed around CN XII that delivers the stimulus
- Stimulation lead: wire carrying the pulse from the generator to the hypoglossal nerve cuff
- Battery: powers the implanted pulse generator
- Pulse generator: implanted in the chest wall; houses the battery and times stimulation to the breathing signal
- Breathing sensing lead: carries the respiratory signal from the sensor to the generator
- Breathing sensor: detects inspiration so stimulation can be timed to the respiratory cycle

**Diagram: The hypoglossal nerve, genioglossus, and tongue protrusion**

CN XII runs from the brainstem to the genioglossus. Name each structure, then reveal how it opens the airway.

_Image source: The Hypoglossal Nerve, Genioglossus, and Tongue Protrusion Mechanics. Mashaqi et al. (2021) Int J Environ Res Public Health._
- Intrinsic muscles of the tongue (oblique, vertical, horizontal fibers): reshape the tongue but don't move it in space; not the muscle group hypoglossal stimulation targets
- Palatoglossus muscle: forms the anterior tonsillar pillar; couples tongue movement to the soft palate
- Palatoglossus coupling: tongue elevation pulls on the soft palate, linking tongue-base and palatal position
- Hypoglossal nerve (CN XII), medial and lateral branches: the medial branch mainly drives the protrudors (genioglossus), the lateral branch the retractors, so cuff placement determines which action dominates
- Protrudors (extrinsic tongue muscles, chiefly genioglossus): pull the tongue forward, opening the retroglossal airway; the action hypoglossal nerve stimulation recruits (labeled 'Prtotruders' on the figure)
- Styloglossus muscle: an extrinsic retractor; pulls the tongue up and back
- L: point where the hypoglossal nerve's lateral branch enters the retractor muscle group
- M: point where the hypoglossal nerve's medial branch enters the protrudor (genioglossus) muscle group
- Retractors (extrinsic tongue muscles, e.g. styloglossus, hyoglossus): pull the tongue backward and can worsen retroglossal obstruction if they dominate over the protrudors
- Hyoglossus muscle: extrinsic retractor and depressor of the tongue
- Genioglossus muscle: the principal tongue protrudor; the muscle hypoglossal nerve stimulation targets to relieve OSA
- Mylohyoid muscle (cut in this dissection): forms the floor of the mouth; elevates the hyoid/tongue during swallowing
- Geniohyoid muscle: extrinsic tongue/hyoid muscle; carries C1 fibers that travel with, but are not part of, CN XII's own motor supply

**Diagram: How CPAP holds the airway open: pneumatic splinting**

Same airway, no pressure versus with positive airway pressure. Name each panel, then reveal.

_Image source: How CPAP Works: Continuous Pneumatic Airway Splinting. Illustration generated with Google Gemini._
- Collapsed airway: without pressure support, the soft palate/tongue-base tissue apposes the pharyngeal wall and obstructs the airway
- Larynx: landmark below the collapsing retropalatal/retroglossal airway; not itself the site of obstruction in OSA
- CPAP mask: interface delivering continuous positive pressure to the upper airway; poor fit/comfort is the leading cause of non-adherence
- Open airway: same airway held patent by the pneumatic splinting effect of positive pressure
- Positive airway pressure: acts as a pneumatic splint, pushing outward on the pharyngeal walls at every level of potential collapse
- Without CPAP: the panel depicting unsupported, collapsible upper airway anatomy during sleep
- With CPAP: the panel depicting the same airway splinted open by continuous positive pressure

### Clinical blocks (11)

**[stop-bang] STOP-BANG: OSA screening**

A validated 8-item screen. Each item scores one point:

- Snoring loudly (louder than talking, or heard through a closed door)
- Tiredness/fatigue/sleepiness during the day
- Observed apnea (someone has witnessed you stop breathing during sleep)
- Pressure: treated or untreated high blood pressure
- BMI >35 kg/m&sup2;
- Age >50 years
- Neck circumference >40cm
- Gender: male≥3 positive flags high risk and should prompt referral for a sleep study; it is a screening tool, not diagnostic. Risk stratifies further beyond the simple ≥3 cutoff, which matters most in the preoperative setting.

| STOP-BANG score | Risk |
| --- | --- |
| 0-2 | Low risk |
| 3-4 | Intermediate risk |
| 5-8 | High risk |

**[ahi-severity] Apnea-Hypopnea Index (AHI): severity grading**

AHI is the number of apneas + hypopneas per hour of sleep, from polysomnography (PSG) or a home sleep apnea test (HSAT).

| AHI (events/hr) | Severity |
| --- | --- |
| <5 | Normal |
| 5-14 | Mild OSA |
| 15-29 | Moderate OSA |
| ≥30 | Severe OSA |

**[epworth] Epworth Sleepiness Scale**

A validated 0-24 self-report questionnaire scoring the likelihood of dozing in 8 everyday situations. ≥10 suggests clinically significant excessive daytime sleepiness. It measures symptom burden, not disease severity: a patient can have severe OSA by AHI with a low Epworth score, or vice versa.

**[management-ladder] The management ladder: CPAP first, surgery second**

Core principle: OSA treatment is a ladder, not a menu. Start with the option that reliably works regardless of where the airway collapses, and escalate only when it fails.
Because positive airway pressure splints the entire airway at once, it is first-line before the obstruction site is even known. Surgery generally enters only after CPAP has genuinely failed, chosen based on where the airway collapses.
The rungs, in order:

- Behavioral/foundational therapy, for everyone: weight loss (~10% weight reduction lowers AHI by roughly a quarter), reduced evening alcohol, and positional therapy for supine-predominant OSA (supine AHI &ge;2x non-supine). Complementary, not standalone cures for most patients.
- CPAP: first-line for essentially all diagnosed OSA; works at any severity and collapse level. The limiting factor is adherence, not efficacy.
- Oral appliance (mandibular advancement device, MAD): first-line alternative for mild-to-moderate OSA, and a key option for CPAP-intolerant patients at any severity. Less efficacious than CPAP at lowering AHI but often better tolerated, so real-world effectiveness can be comparable. Custom, titratable, dentist-fitted; confirm efficacy with a follow-up sleep study.
- Site-directed surgery, when CPAP fails (intolerance, non-adherence, or inadequate response); the procedure matches the collapse site(s): nasal surgery (adjunct to rescue CPAP tolerance), palate-level surgery (UPPP) for retropalatal collapse, hypoglossal nerve stimulation for tongue-base collapse in selected patients, maxillomandibular advancement for skeletal/multilevel disease. In children, adenotonsillectomy is the exception: first-line, not a last resort.What "CPAP failed" actually means: not "the patient dislikes it." Failure = documented intolerance, non-adherence despite troubleshooting (mask refit, humidification, treating nasal obstruction, ramp/pressure-relief), or inadequate AHI/symptom response despite use. Fix the fixable before climbing the ladder.
Worked example: how a real patient moves down the ladder:
A 45-year-old man, BMI 31, has moderate OSA (AHI 22) and an Epworth score of 13.
Rungs 1-2: he's counseled on ~10% weight loss and started on CPAP (the default first step); he's also told to cut evening alcohol.
Reassess at ~30-90 days: the device download shows 2.5 h/night on 40% of nights. He reports mask leak and a blocked nose. This is not yet "CPAP failure": it's a troubleshooting trigger. A nasal steroid is started, the mask is refitted, humidification is added, and nasal surgery is considered as an adherence adjunct.
If still non-adherent: now this is genuine CPAP failure. Offer a mandibular advancement device (reasonable given moderate severity) or proceed to a surgical workup.
If heading toward surgery: DISE identifies the collapse site(s), which selects the operation: e.g. isolated retropalatal collapse -> palate surgery; tongue-base collapse without complete concentric palatal collapse -> hypoglossal nerve stimulation candidate.
Teaching point: the ladder is iterative: most of the clinical work happens at the "reassess and troubleshoot" step, not the jump to surgery.
What DISE is and why it matters: drug-induced sleep endoscopy (DISE) is a flexible nasendoscopic exam of the upper airway performed under light sedation (propofol or dexmedetomidine) that simulates sleep, letting the surgeon watch the airway collapse in real time and see which structures obstruct and in what pattern.
Rationale: surgical planning requires knowing where the airway collapses, unlike CPAP. An awake exam (e.g. Muller maneuver) poorly predicts what happens during sleep. DISE dynamically localizes the obstruction so the operation targets the correct level.
What it reports: collapse graded by level and pattern, commonly using the VOTE classification (Velum/palate, Oropharynx/lateral walls, Tongue base, Epiglottis), noting degree (none/partial/complete) and configuration (anteroposterior, lateral, concentric) at each site.
Complete concentric collapse at the velum/palate is a contraindication to hypoglossal nerve stimulation; DISE is mandatory before HGNS to exclude this pattern.
How it changes management: DISE alters the surgical plan versus awake assessment in roughly half of patients and, in some series, reduces unnecessary multilevel surgery while improving success rates. It can also be done with CPAP/MAD in place to explain why a current therapy is failing.
Honest limitation: DISE is a single sedated snapshot, sedation protocols aren't fully standardized, and it doesn't reliably reproduce REM sleep: so it informs, rather than dictates, the plan.

**[glp1-osa-pharmacotherapy] Weight-loss pharmacotherapy for OSA (tirzepatide)**

In December 2024, tirzepatide (Zepbound), a dual GIP/GLP-1 receptor agonist, became the first drug FDA-approved for moderate-to-severe OSA in adults with obesity, based on the SURMOUNT-OSA phase 3 trials. Over 52 weeks it reduced AHI by ~20-25 events/h (vs. minimal change on placebo), with ~42-50% of patients reaching disease remission (AHI <5, or <15 without symptoms), alongside ~16-20% weight loss and improvements in hypoxic burden, hsCRP, and systolic BP. Mechanism is primarily weight loss (reducing tongue and parapharyngeal fat), with possible weight-independent effects.
Key caveats: it does not match CPAP's AHI reduction (~22 vs ~31 events/h), it is for BMI &ge;30 (unlikely to help non-obese or purely anatomic obstruction), weight/AHI regain occurs after discontinuation, and cardiovascular-outcome benefit is unproven. Best positioned as a disease-modifying adjunct, combined with CPAP, for preoperative optimization, or potentially to expand HGNS candidacy, not a blanket CPAP replacement.

**[surgical-options] Named surgical options and what they target**

Site-directed surgery, escalating in invasiveness.

| Procedure | Targets | Notes |
| --- | --- | --- |
| UPPP (uvulopalatopharyngoplasty) | Retropalatal (soft palate/uvula/lateral walls) | Most established; best results when obstruction is palate-level, not tongue-base |
| Tongue-base reduction / genioglossus advancement | Retroglossal (tongue base) | For tongue-base-predominant obstruction |
| Hypoglossal nerve stimulation (e.g. Inspire) | Retroglossal, via genioglossus tone | For CPAP-intolerant moderate-severe OSA; specific BMI/anatomy eligibility criteria (e.g. no complete concentric collapse on DISE) |
| Maxillomandibular advancement (MMA) | Multilevel: enlarges the entire skeletal airway framework | Most effective single surgery for appropriate candidates; more invasive, orthognathic-level surgery |
| Adult tonsillectomy | Retropalatal, if tonsils are large | Selected adults with significant tonsillar hypertrophy contributing to obstruction |
| Nasal surgery (septoplasty, turbinate reduction) | Nasal: reduces upstream resistance only | Adjunct to improve CPAP tolerance/adherence; rarely produces a clinically significant AHI reduction alone, so not used as primary OSA therapy |

**[hgns-how-it-works] Hypoglossal nerve stimulation (HGNS): how it works**

An implanted device that treats OSA by electrically firing the hypoglossal nerve in time with breathing, contracting the genioglossus so the tongue protrudes and stiffens and the airway stays open: an active splint, in contrast to CPAP's pneumatic splint.
Three components (unilateral device):

- Stimulation lead: a cuff electrode on the hypoglossal nerve (or its medial branch) in the neck.
- Sensing lead: placed between the intercostal muscles to detect the respiratory cycle.
- Implantable pulse generator: placed in an infraclavicular pocket, like a pacemaker.The generator reads inspiration from the sensing lead and delivers a stimulus phase-locked to inspiration, protruding the tongue exactly when the airway is most collapsible.
Inclusion vs. exclusion branches: why cuff placement is everything: CN XII is pure motor, and distal to its trunk it splits into a medial division and lateral division that do opposite things.

- Medial branches -> protrusors (genioglossus &plusmn; geniohyoid/intrinsic protrusive fibers, with a C1 contribution). Stimulating these protrudes/stiffens the tongue -> opens the retrolingual airway. These are the 'inclusion' branches, captured inside the cuff.
- Lateral branches -> retractors (hyoglossus, styloglossus). Stimulating these retracts the tongue (counterproductive); these are the 'exclusion' branches, deliberately kept out of the cuff.Practical operative points: intraoperative EMG/nerve integrity monitoring confirms genioglossus (protrusion) activation without hyoglossus/styloglossus (retraction) before the cuff is secured: the surgeon looks for the tongue to protrude, not retract. Bipolar (not monopolar) cautery is used near the device to avoid damaging it.
Indications (FDA, unilateral device):

- Adult (&ge;18y) with moderate-to-severe OSA who has failed or cannot tolerate CPAP
- AHI in the approved range (originally 15-65, upper limit since expanded: confirm current device labeling)
- BMI below threshold (originally &le;32, many payers/labels now allow <35, up to <40 in updated criteria: verify against current guidance)
- <25% central/mixed apneas
- DISE showing no complete concentric collapse at the palate (the make-or-break selection step)Contraindications:

- Complete concentric collapse of the velum/palate on DISE (the single most important exclusion: the collapse is too circumferential for tongue protrusion to overcome)
- BMI or AHI above current thresholds, &ge;25% central/mixed apnea
- Severe obstructive/restrictive lung disease
- Neurologic conditions limiting upper-airway/tongue control (or prior surgery that does so)
- Pregnancy (or planned pregnancy)
- Inability to operate the device, or need for incompatible MRIDISE Findings and HGNS Candidacy: tongue-base/retrolingual (anteroposterior) collapse responds well to hypoglossal nerve stimulation; complete concentric palatal collapse does not, so every candidate undergoes drug-induced sleep endoscopy first.
Unilateral vs. bilateral HGNS:
Unilateral (established approach): cuff on one hypoglossal nerve (typically the right), stimulating the medial/protrusor fibers, synchronized to inspiration via a respiratory sensing lead. The FDA-approved, phase-III-validated design, with STAR/ADHERE data showing ~68-83% AHI reduction.
Bilateral (newer): stimulates both hypoglossal nerves and, in the current device, is breath-rate-independent (no separate chest sensing lead). Single-arm trials show meaningful AHI reduction but still less mature than unilateral data.
One-line contrast: "Unilateral = one nerve, sensor-triggered with the breath; bilateral = both nerves, breath-rate-independent."

**[hgns-indications] HGNS indications (FDA)**

Core FDA candidacy criteria for (unilateral) HGNS:

- Age &ge;18
- Moderate-to-severe OSA (AHI 15-65 in original labeling, now expanded up to AHI &le;100)
- CPAP failure or intolerance
- Central + mixed apneas <25% of total AHI
- BMI below threshold (originally &le;32, now expanded to &le;40 under updated guidance; many insurers still use <35)
- Absence of complete concentric collapse (CCC) at the velum on DISEA pre-implant DISE is mandatory to confirm a favorable collapse pattern.

**[hgns-contraindications] HGNS contraindications**

- Complete concentric collapse (CCC) at the velum on DISE (the classic disqualifier: tongue protrusion cannot overcome circumferential palatal collapse driven by the lateral walls)
- Central or mixed apneas &ge;25% of the AHI
- BMI above threshold
- AHI above the labeled ceiling
- Neurologic conditions or prior upper-airway surgery limiting tongue/airway control
- Inability to operate the patient controller
- Pregnancy or plans to become pregnant
- Need for MRI incompatible with the device
- Severe obstructive/restrictive lung diseaseNote: oropharyngeal lateral-wall collapse on DISE, while not an absolute contraindication, predicts reduced efficacy.

**[pap-titration-adherence] PAP titration and the definition of 'adherence'**

Determining the therapeutic pressure:

- A full-night in-lab titration polysomnography: a technician adjusts pressure through the night until obstructive events are controlled.
- A split-night study: diagnostic PSG for the first portion of the night, titration for the remainder if the AHI is high enough early on to justify it.
- Auto-titrating PAP (APAP) at home, which self-adjusts pressure breath-to-breath and is appropriate for uncomplicated moderate-severe OSA without significant comorbidity.Adherence has a formal definition that matters for insurance coverage, not just clinical impression: average use of ≥4 hours per night on ≥70% of nights within a 30-consecutive-day period, typically confirmed from the device's built-in usage data.

| Barrier | Troubleshooting |
| --- | --- |
| Mask leak / poor fit | Refit or change interface (nasal pillows, nasal mask, full-face mask) |
| Claustrophobia | Gradual desensitization: daytime wear trials, starting with a smaller nasal-pillow interface |
| Nasal congestion/dryness | Heated humidification; treat nasal obstruction (see Rhinology track) to lower upstream resistance |
| Pressure intolerance | Ramp feature (starts low, rises gradually) or expiratory pressure relief (EPR); consider bilevel PAP if still intolerant |
| Mouth leak with a nasal interface | Chin strap, or switch to a full-face mask |

**[pap-modalities-overlap] Beyond fixed CPAP: BiPAP and overlap syndrome**

BiPAP (bilevel PAP) delivers separate inspiratory and expiratory pressures rather than one constant pressure. That's useful when a patient needs a high pressure that's poorly tolerated as a single fixed level, or when there's a hypoventilation component (neuromuscular disease, obesity-hypoventilation syndrome, or overlap syndrome) rather than pure upper-airway obstruction.
Overlap syndrome, meaning coexisting OSA and COPD, carries substantially higher risk of hypercapnic respiratory failure, pulmonary hypertension/cor pulmonale, and mortality than either condition alone. It usually needs pulmonology co-management, and bilevel or nocturnal ventilatory support may be required rather than standard CPAP alone.

### Red flags
- Severe OSA (AHI ≥30) with signs of cor pulmonale or pulmonary hypertension: untreated severe OSA drives chronic hypoxia-mediated right heart strain and needs urgent treatment initiation, not routine follow-up scheduling.
- Commercial vehicle operators with untreated OSA and excessive daytime sleepiness: a safety-critical occupational issue under US FMCSA guidance, where treatment adherence affects certification to drive.
- Morbid obesity (BMI ≥40) with severe OSA being considered for bariatric surgery: perioperative OSA management, often CPAP, reduces anesthetic and airway risk, so sequencing and communication with the surgical team matters.
- Post-UPPP bleeding or airway compromise: oropharyngeal surgery carries a real postoperative airway-obstruction and hemorrhage risk, so keep a low threshold for urgent ENT reassessment.
- Suspected central (not obstructive) sleep apnea: CPAP alone may not be effective and may need adaptive servo-ventilation or cardiology/neurology involvement. Distinguishing obstructive from central changes the entire management pathway.
- Complete concentric palatal collapse on DISE: a contraindication to hypoglossal nerve stimulation that changes surgical candidacy entirely.
- Undiagnosed OSA with treatment-resistant hypertension or new atrial fibrillation: OSA is a recognized contributor, and screening for it changes the cardiovascular management plan.
- Overlap syndrome (OSA + COPD) with hypercapnia, morning headache, or lower-extremity edema: higher risk of hypercapnic respiratory failure and pulmonary hypertension than either condition alone. Needs pulmonology co-management and often bilevel PAP, not plain CPAP.
- New central apneas appearing during CPAP titration (treatment-emergent/complex sleep apnea): don't assume undertreated OSA and simply raise the pressure. Many resolve with continued PAP use over weeks, but persistent cases need reassessment and may require adaptive servo-ventilation.

### Cases (7)

**Case [case-cpap-intolerant-severe-osa]**

Stem: A 52-year-old man, BMI 29, has severe OSA (AHI 38) confirmed on PSG. He has tried CPAP for 6 months but removes the mask nightly within an hour, citing claustrophobia. He continues to have daytime sleepiness (Epworth 15).

- Q: What is the next step before considering surgery?
  A: Attempt CPAP desensitization/alternative interfaces and consider an oral mandibular-advancement appliance first; if truly CPAP-intolerant despite these efforts, proceed to surgical evaluation.

- Q: If he remains CPAP-intolerant, what test determines his surgical candidacy, and for which procedure specifically?
  A: Drug-induced sleep endoscopy (DISE) to identify the site(s)/pattern of collapse. If there is no complete concentric palatal collapse and his BMI is in range, he may be a candidate for hypoglossal nerve stimulation.

Teaching: CPAP intolerance doesn't jump straight to surgery. Optimize CPAP tolerance and consider an oral appliance first, then let DISE findings, not just AHI, pick the surgical target.

**Case [case-commercial-driver-osa]**

Stem: A commercial truck driver screens STOP-BANG positive (5/8) at a routine occupational health visit. He reports falling asleep at red lights.

- Q: What is the appropriate next step, and why does the occupational context matter here?
  A: Refer for a sleep study promptly. Falling asleep while driving raises a safety-critical, occupational concern under US FMCSA guidance. This isn't just a quality-of-life issue: it affects his medical certification to operate a commercial vehicle.

- Q: If OSA is confirmed and treated, what is required before he can be recertified to drive?
  A: Documentation of effective treatment and adherence (e.g., CPAP compliance data). Certifying examiners require evidence the condition is controlled, not just that treatment was prescribed.

Teaching: STOP-BANG-positive with reported sleepiness behind the wheel escalates urgency beyond a routine referral. Occupational safety changes the timeline, not just the diagnosis.

**Case [case-bariatric-preop-osa]**

Stem: A 38-year-old woman, BMI 44, is being worked up for bariatric surgery. STOP-BANG is 6/8; she has never been evaluated for OSA.

- Q: Why does OSA status matter before her bariatric surgery, specifically?
  A: Undiagnosed/untreated OSA significantly increases perioperative airway and anesthetic risk (difficult airway, post-op respiratory depression risk with opioids/sedation). Preoperative screening and, if positive, PSG and CPAP initiation are standard before major surgery in high-risk patients.

- Q: Does successful bariatric surgery mean OSA treatment can stop?
  A: Not automatically. Weight loss often improves but doesn't always resolve OSA, so repeat sleep testing after significant weight loss determines whether CPAP can be safely discontinued.

Teaching: A high STOP-BANG score in a preoperative bariatric patient is a reason to screen and treat before surgery, not a footnote to address afterward.

**Case [case-central-vs-obstructive]**

Stem: A patient with heart failure with reduced ejection fraction is found to have an AHI of 25 on PSG, but the report notes most events show absent respiratory effort during the apneas, with a crescendo-decrescendo breathing pattern.

- Q: Is this obstructive or central sleep apnea, and how do you know?
  A: This is central sleep apnea (specifically Cheyne-Stokes breathing). Absent respiratory effort during apneas distinguishes it from obstructive apnea, where effort continues against a closed airway. The crescendo-decrescendo pattern is classic for CSA associated with heart failure.

- Q: Does the surgical ladder discussed for OSA apply here?
  A: No. The OSA surgical ladder (UPPP, hypoglossal stimulation, MMA) targets anatomic obstruction and does not apply to central sleep apnea. Management instead focuses on optimizing the underlying heart failure and may involve adaptive servo-ventilation, in coordination with cardiology.

Teaching: Absent respiratory effort during apneic events is the key discriminator for central sleep apnea, and it changes the entire management pathway away from the OSA surgical ladder.

**Case [case-uppp-postop-bleed]**

Stem: One week after UPPP, a patient presents with bright red blood from the mouth and difficulty swallowing.

- Q: What is the concern, and what is the immediate priority?
  A: Post-tonsillectomy/UPPP-type hemorrhage: airway and hemodynamic assessment first, as with any post-adenotonsillar-surgery bleed, plus urgent ENT evaluation. This age group and procedure carries real bleeding risk, particularly around the 5-10 day post-op window as eschar sloughs.

- Q: Should this patient be observed at home with reassurance, or sent in?
  A: Sent in urgently. Any active bleeding after pharyngeal surgery warrants same-day ENT/emergency evaluation, since it can progress rapidly and threaten the airway.

Teaching: Bleeding after UPPP is managed with the same urgency as post-tonsillectomy hemorrhage: same pharyngeal surgery, same bleeding risk window, same low threshold to escalate.

**Case [case-cpap-adherence-troubleshooting]**

Stem: A 46-year-old woman with moderate OSA (AHI 22) was started on CPAP 3 weeks ago. The device download shows average use of 2.1 hours/night on 40% of nights. She reports the mask leaks constantly and she wakes with a dry mouth.

- Q: Does she meet the formal definition of CPAP adherence? Why does this matter beyond the clinical picture?
  A: No. Adherence requires ≥4 hours/night on ≥70% of nights over a 30-day window, and she meets neither. This isn't only a clinical concern: insurers, including CMS, use this exact threshold to decide whether to continue covering the device.

- Q: What does her specific complaint (leak plus dry mouth) point to, and what's the fix?
  A: Persistent leak with morning dry mouth suggests mouth leak, often from a nasal interface with the mouth open during sleep. Address it with a chin strap or a switch to a full-face mask, plus mask refitting and heated humidification for the dryness, before concluding she is 'CPAP-intolerant.'

Teaching: Low adherence numbers are a prompt to troubleshoot the specific barrier, not a verdict that a patient has failed CPAP and is ready for a surgical conversation.

**Case [case-overlap-syndrome]**

Stem: A 63-year-old man with known COPD (FEV1 55% predicted) reports loud snoring, witnessed apneas, morning headaches, and new bilateral leg swelling. STOP-BANG is 5/8.

- Q: What diagnosis should be considered beyond a COPD exacerbation, and why do the morning headaches and leg swelling matter?
  A: Overlap syndrome: coexisting OSA and COPD. Morning headache raises concern for nocturnal hypercapnia, and leg swelling raises concern for pulmonary hypertension/cor pulmonale. Both are more common and more severe in overlap syndrome than in either disease alone.

- Q: How does management differ from managing OSA alone?
  A: He needs a PSG to confirm OSA and assess for hypoventilation, and management typically involves pulmonology co-management; bilevel PAP (rather than standard fixed CPAP) is often used when there is a hypoventilation component.

Teaching: COPD plus classic OSA symptoms should raise overlap syndrome on the differential. It changes both the urgency (hypercapnia/pulmonary hypertension risk) and the PAP modality chosen.

### Flashcards (48)

**[stop-bang-card]** tags: SL, clinical, milestones: PC4, MK1, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What does STOP-BANG stand for, and what score flags high risk?
- Back: Snoring, Tiredness, Observed apnea, high blood Pressure, BMI>35, Age>50, Neck circumference>40cm, male Gender. ≥3 positive = high risk for OSA, prompting referral for a sleep study.
- Source: Standard OSA screening teaching (STOP-BANG, Chung et al.).

**[ahi-severity-card]** tags: SL, clinical, milestones: MK1, PC4, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: State the AHI severity thresholds for OSA.
- Back: normal, 5-14 mild OSA, 15-29 moderate OSA, ≥30 severe OSA (events/hour of sleep, from PSG or a home sleep apnea test).
- Source: AASM scoring manual: standard AHI severity grading.

**[epworth-card]** tags: SL, clinical, milestones: PC4, MK1, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What does the Epworth Sleepiness Scale measure, and what score is significant?
- Back: A 0-24 self-report of the likelihood of dozing in 8 everyday situations, measuring symptom burden (daytime sleepiness), not disease severity by AHI. ≥10 suggests clinically significant excessive daytime sleepiness.
- Source: Standard sleep medicine teaching: Epworth Sleepiness Scale.

**[cpap-first-line-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What is first-line management for diagnosed OSA, and when does surgery enter the conversation?
- Back: CPAP is first-line for essentially all diagnosed OSA (± weight loss, positional therapy, or an oral mandibular-advancement appliance for milder disease). Surgery is considered when CPAP fails, meaning intolerance, non-adherence, or inadequate response.
- Source: AASM Clinical Practice Guideline on OSA management.

**[dise-card]** tags: SL, clinical, milestones: PC4, PC9, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Before site-directed OSA surgery, the airway is examined under sedation simulating natural sleep using a technique called [...], which identifies the specific site and pattern of collapse.
- Back: Before site-directed OSA surgery, the airway is examined under sedation simulating natural sleep using a technique called drug-induced sleep endoscopy (DISE), which identifies the specific site and pattern of collapse. Site-directed surgery is chosen based on DISE findings, not AHI alone.
- Source: Standard sleep surgery teaching on drug-induced sleep endoscopy.

**[uppp-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What does UPPP target, and what predicts poor response?
- Back: Uvulopalatopharyngoplasty targets retropalatal obstruction (soft palate, uvula, lateral pharyngeal walls). Higher Friedman stage (more tongue-base obstruction) predicts worse outcomes from UPPP alone: palate-level surgery doesn't fix tongue-base collapse.
- Source: Standard sleep surgery teaching on UPPP.

**[hypoglossal-stim-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: How does hypoglossal nerve stimulation work, and name one key exclusion criterion.
- Back: An implanted device senses inspiration and stimulates cranial nerve XII in phase with breathing, protruding the tongue (via genioglossus contraction) to keep the airway open. Complete concentric palatal collapse on DISE is a contraindication.
- Source: AAO-HNSF Position Statement: Hypoglossal Nerve Stimulation for OSA.

**[mma-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What is maxillomandibular advancement (MMA), and why is it often the most effective single surgery?
- Back: Advancing both the maxilla and mandible forward, which enlarges the entire skeletal airway framework and addresses multilevel obstruction at once rather than one anatomic site. Highly effective for appropriate candidates but more invasive (orthognathic-level surgery). In pooled analyses, MMA achieves ~85% surgical success and ~46% cure, outperforming multilevel soft-tissue surgery (~65% success, ~28% cure) at the cost of higher (though still low) major-complication rates. Its benefit is greatest at the lateral pharyngeal wall, and it can even resolve palatal complete concentric collapse: making it an option for some patients excluded from HGNS.
- Source: Standard sleep surgery teaching on maxillomandibular advancement.

**[friedman-staging-card]** tags: SL, clinical, milestones: MK1, PC4, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: The oropharyngeal exam grading system that scores how much the tongue base obscures the view of the palate, tonsils, and uvula on a relaxed oral exam is called [...].
- Back: The oropharyngeal exam grading system that scores how much the tongue base obscures the view of the palate, tonsils, and uvula on a relaxed oral exam is called Friedman tongue position. Combined with tonsil size and BMI it forms the Friedman staging system, and higher stages predict worse outcomes from UPPP alone.
- Source: Standard sleep surgery teaching on Friedman staging.

**[central-vs-obstructive-card]** tags: SL, clinical, milestones: MK2, PC4, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: On a sleep study, the finding that distinguishes central sleep apnea from obstructive sleep apnea is [...] during the apneic event, since obstructive events continue despite ongoing effort against a closed airway.
- Back: On a sleep study, the finding that distinguishes central sleep apnea from obstructive sleep apnea is absent respiratory effort during the apneic event, since obstructive events continue despite ongoing effort against a closed airway. Central events often show a crescendo-decrescendo (Cheyne-Stokes) pattern, classically in heart failure.
- Source: Standard sleep medicine teaching on central sleep apnea.

**[oral-appliance-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: When is an oral mandibular-advancement appliance an appropriate OSA treatment?
- Back: For mild-to-moderate OSA, or for CPAP-intolerant patients regardless of severity as a second-line option. It works by advancing the mandible (and tongue base with it) to enlarge the retroglossal airway.
- Source: AASM Clinical Practice Guideline on oral appliance therapy.

**[positional-therapy-card]** tags: SL, clinical, milestones: PC9, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What is 'positional OSA,' and how is it managed?
- Back: OSA where the AHI is markedly worse supine than in other positions (often ≥2× worse). Managed with positional therapy (devices/techniques discouraging supine sleep) as an adjunct or alternative in appropriately selected mild-moderate cases.
- Source: Standard sleep medicine teaching on positional OSA.

**[osa-cardiovascular-card]** tags: SL, clinical, milestones: MK3, PC4, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What cardiovascular consequences are associated with untreated OSA?
- Back: Treatment-resistant hypertension, atrial fibrillation and other arrhythmias, and, in severe prolonged untreated disease, pulmonary hypertension and cor pulmonale from chronic intermittent hypoxia.
- Source: Standard teaching on OSA cardiovascular associations.

**[osa-driving-card]** tags: SL, clinical, milestones: SBP3, PC4, UKMLA: Obstructive sleep apnoea, RED FLAG, reviewer: (none)
- Front: Why does OSA screening carry extra urgency in commercial drivers?
- Back: Untreated OSA with excessive daytime sleepiness is a safety-critical occupational risk. US FMCSA guidance ties commercial driving certification to documented OSA treatment and adherence, not just diagnosis.
- Source: US FMCSA medical guidance on OSA and commercial driving.

**[tonsillectomy-adult-osa-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: When is tonsillectomy considered as OSA treatment in an adult?
- Back: When significant tonsillar hypertrophy is identified as a contributor to retropalatal obstruction. It's much less commonly the primary driver in adults than in children, but still a targeted, site-specific option when present.
- Source: Standard sleep surgery teaching on adult tonsillectomy for OSA.

**[bariatric-preop-osa-card]** tags: SL, clinical, milestones: SBP3, PC4, UKMLA: Obstructive sleep apnoea, RED FLAG, reviewer: (none)
- Front: Why is preoperative OSA screening important before bariatric or other major surgery?
- Back: Undiagnosed/untreated OSA significantly raises perioperative airway and anesthetic risk (difficult airway, post-op respiratory depression with sedation/opioids). High STOP-BANG scores should prompt evaluation and, if needed, CPAP initiation before surgery.
- Source: Standard perioperative teaching on OSA and bariatric/major surgery.

**[weight-loss-osa-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Does weight loss cure OSA?
- Back: It often improves OSA (fat deposition around the airway/neck is a major contributor) but doesn't always resolve it completely. Repeat sleep testing after significant weight loss is needed before CPAP can be safely discontinued.
- Source: Standard sleep medicine teaching on weight and OSA.

**[uppp-bleed-card]** tags: SL, clinical, milestones: PC9, PC1, UKMLA: Obstructive sleep apnoea, RED FLAG, reviewer: (none)
- Front: How urgently should post-UPPP bleeding be treated, and why?
- Back: Urgently: same-day ENT/emergency evaluation, same as post-tonsillectomy hemorrhage. Pharyngeal surgery carries a real bleeding risk (notably around days 5-10 as eschar sloughs) that can progress rapidly and threaten the airway.
- Source: Standard otolaryngology teaching on post-pharyngeal-surgery hemorrhage.

**[pediatric-vs-adult-osa-card]** tags: SL, clinical, milestones: MK2, PC7, UKMLA: Obstructive sleep apnoea, Snoring, reviewer: (none)
- Front: In children, the leading cause of OSA is [...], so adenotonsillectomy, not CPAP, is first-line treatment.
- Back: In children, the leading cause of OSA is adenotonsillar hypertrophy, so adenotonsillectomy, not CPAP, is first-line treatment. In adults, obesity and multilevel soft-tissue collapse predominate instead, and CPAP is first-line.
- Source: Cross-reference: standard pediatric vs adult sleep medicine teaching.

**[sleep-study-types-card]** tags: SL, clinical, milestones: MK1, PC4, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: The gold-standard sleep study, capable of diagnosing central and other sleep disorders through full monitoring of EEG, airflow, effort, and oximetry, is [...].
- Back: The gold-standard sleep study, capable of diagnosing central and other sleep disorders through full monitoring of EEG, airflow, effort, and oximetry, is in-lab polysomnography (PSG). A home sleep apnea test (HSAT) is a limited-channel alternative for patients with a high pretest probability of moderate-severe OSA and no major comorbidities, though it can underestimate severity. HSAT is a 'rule-in, not rule-out' test: it can underestimate severity because it uses total recording time (not EEG-measured sleep) and, without EEG, scores hypopneas by desaturation only (&ge;3% recommended, &ge;4% optional), missing arousal-based events. A negative/nondiagnostic HSAT with persistent clinical suspicion warrants in-lab PSG. Reserve PSG for significant cardiopulmonary disease, neuromuscular weakness, suspected hypoventilation/central apnea, chronic opioid use, prior stroke, or severe insomnia.
- Source: AASM Clinical Practice Guideline on sleep testing.

**[pap-adherence-definition-card]** tags: SL, clinical, milestones: PC9, SBP3, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: The formal definition of CPAP adherence used by CMS and most insurers is average use of [...] within a 30-consecutive-day period.
- Back: The formal definition of CPAP adherence used by CMS and most insurers is average use of ≥4 hours per night on ≥70% of nights within a 30-consecutive-day period. Insurers use this exact threshold to decide whether to keep covering the device, so using it only some nights doesn't count.
- Source: AASM Clinical Practice Guideline: Treatment of Adult OSA with PAP (Patil et al., 2019); CMS PAP adherence coverage criteria.

**[pap-titration-types-card]** tags: SL, clinical, milestones: PC9, MK1, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What are the three ways to determine a patient's therapeutic CPAP pressure (PAP titration)?
- Back: A full-night in-lab titration PSG (pressure adjusted through the night), a split-night study (diagnostic PSG for the first part of the night, titration for the rest if the AHI is high enough early), or auto-titrating PAP (APAP) at home for uncomplicated moderate-severe OSA.
- Source: AASM Clinical Practice Guideline: Treatment of Adult OSA with PAP (2019).

**[cpap-mouth-leak-troubleshoot-card]** tags: SL, clinical, milestones: PC9, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: A CPAP user's mask leaks constantly and they wake up with a dry mouth. How do you troubleshoot it?
- Back: This pattern suggests mouth leak from a nasal interface with the mouth open during sleep. Fix it with a chin strap or a switch to a full-face mask, plus refitting the mask and adding heated humidification for the dryness, before labeling the patient CPAP-intolerant.
- Source: AASM Clinical Practice Guideline: Treatment of Adult OSA with PAP (2019).

**[bipap-indications-card]** tags: SL, clinical, milestones: PC9, MK3, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: The PAP device chosen over standard CPAP when a high pressure is poorly tolerated as one fixed level, or when a hypoventilation component is present rather than pure obstruction, is [...], which delivers separate inspiratory and expiratory pressures.
- Back: The PAP device chosen over standard CPAP when a high pressure is poorly tolerated as one fixed level, or when a hypoventilation component is present rather than pure obstruction, is BiPAP (bilevel PAP), which delivers separate inspiratory and expiratory pressures.
- Source: AASM Clinical Practice Guideline on PAP devices.

**[overlap-syndrome-card]** tags: SL, clinical, milestones: PC9, MK3, UKMLA: Obstructive sleep apnoea, RED FLAG, reviewer: (none)
- Front: The coexistence of OSA and COPD, which carries a higher risk of hypercapnic respiratory failure and pulmonary hypertension than either disease alone, is called [...].
- Back: The coexistence of OSA and COPD, which carries a higher risk of hypercapnic respiratory failure and pulmonary hypertension than either disease alone, is called overlap syndrome. It usually needs pulmonology co-management, since bilevel PAP is often required instead of standard CPAP.
- Source: Standard sleep/pulmonary medicine teaching on overlap syndrome (OSA + COPD).

**[treatment-emergent-csa-card]** tags: SL, clinical, milestones: PC9, MK3, UKMLA: Obstructive sleep apnoea, RED FLAG, reviewer: (none)
- Front: What is treatment-emergent (complex) central sleep apnea?
- Back: New central apneas that appear or persist once CPAP has resolved a patient's obstructive events. Many resolve spontaneously with continued PAP use over weeks; persistent cases may need adaptive servo-ventilation. Don't assume undertreated OSA and simply raise the pressure.
- Source: Standard sleep medicine teaching on central sleep apnea.

**[nasal-surgery-osa-card]** tags: SL, clinical, milestones: PC9, PC5, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Nasal surgery such as septoplasty or turbinate reduction rarely produces a clinically significant AHI reduction on its own, so in OSA its real value is as a [...] rather than a primary treatment.
- Back: Nasal surgery such as septoplasty or turbinate reduction rarely produces a clinically significant AHI reduction on its own, so in OSA its real value is as a CPAP-adherence adjunct rather than a primary treatment. Lowering nasal resistance improves mask tolerance and comfort, which supports keeping up with CPAP.
- Source: Standard sleep surgery teaching on nasal surgery and CPAP adherence.

**[laup-not-recommended-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, Snoring, reviewer: (none)
- Front: Is LAUP (laser-assisted uvulopalatoplasty) recommended for treating OSA?
- Back: No. AASM does not recommend LAUP (or radiofrequency palatal ablation) for OSA treatment, given insufficient evidence of AHI benefit and a risk of worsening or palatal scarring. At most it is considered for isolated snoring once OSA has been excluded by PSG.
- Source: AASM Practice Parameters for Surgical Modifications of the Upper Airway (LAUP not recommended for OSA).

**[stop-bang-risk-stratification-card]** tags: SL, clinical, milestones: PC9, SBP3, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Beyond '≥3 = high risk,' how is STOP-BANG risk more precisely stratified?
- Back: 0-2 = low risk, 3-4 = intermediate risk, 5-8 = high risk. An intermediate score can be reclassified as high risk if BMI >35, neck circumference >40cm, or male gender is among the positive items. This reclassification is used especially in preoperative screening.
- Source: Chung F et al., STOP-BANG questionnaire validation and risk-stratification studies (Anesthesiology 2008; Anesth Analg 2016).

**[hgns-candidacy-card]** tags: SL, clinical, milestones: PC9, MK1, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What are the indications and candidacy criteria for hypoglossal nerve stimulation (HGNS) in obstructive sleep apnea?
- Back: Age &ge;18, CPAP-intolerant/failed, moderate-to-severe OSA (classically AHI 15-65, now expanded up to &le;100), central+mixed apneas <25% of AHI, BMI below threshold (classically &le;32, expanded to &le;40), and no complete concentric collapse of the velum on DISE. Pre-implant DISE is mandatory.[figure: FDA/STAR-trial candidacy criteria for hypoglossal nerve stimulation, with an embedded figure of the generator/lead/cuff components.]
- Source: FDA hypoglossal nerve stimulation approval criteria (updated); STAR trial inclusion criteria (Strollo et al., NEJM 2014).

**[tirzepatide-osa-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: The first drug FDA-approved (December 2024) for moderate-to-severe OSA in adults with obesity is [...].
- Back: The first drug FDA-approved (December 2024) for moderate-to-severe OSA in adults with obesity is tirzepatide (Zepbound), a dual GIP/GLP-1 receptor agonist. In SURMOUNT-OSA it cut AHI by ~20-25 events/h with ~42-50% remission, but it works mainly through weight loss, requires BMI &ge;30, doesn't match CPAP's efficacy, and AHI regains after stopping.
- Source: Anderer, JAMA (FDA approval), 2025; Malhotra et al., Nat Med (SURMOUNT-OSA), 2026.

**[hgns-branch-anatomy-card]** tags: SL, anatomy, milestones: MK1, PC9, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: In hypoglossal nerve stimulation, which division of CN XII is targeted ('inclusion') and which is avoided ('exclusion'), and why?
- Back: Medial branches (inclusion) innervate the protrusors (genioglossus) -> captured by the cuff to protrude/stiffen the tongue and open the retrolingual airway. Lateral branches (exclusion) innervate the retractors (hyoglossus, styloglossus) -> kept out of the cuff, since retraction would worsen obstruction. Intraoperative EMG confirms selective protrusor activation.
- Source: Sturm et al., Laryngoscope, 2020; Bassiri Gharb et al., Neuromodulation, 2015.

**[hgns-ccc-card]** tags: SL, clinical, milestones: PC9, MK1, UKMLA: Obstructive sleep apnoea, RED FLAG, reviewer: (none)
- Front: The DISE finding that is the classic contraindication to unilateral hypoglossal nerve stimulation is [...].
- Back: The DISE finding that is the classic contraindication to unilateral hypoglossal nerve stimulation is complete concentric collapse (CCC) at the velum/soft palate. HGNS protrudes the tongue (via genioglossus), which cannot overcome circumferential collapse driven by the lateral pharyngeal walls; in the STAR trial essentially no CCC patients responded, so the FDA made absence of CCC a mandatory eligibility criterion.
- Source: Kahmke et al., JOMI, 2023; Vena et al., Eur Respir J, 2025.

**[friedman-exam-technique-card]** tags: SL, clinical, milestones: MK1, PC4, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: How is the Friedman tongue position exam performed, and how does it differ from the classic Mallampati?
- Back: Mouth open wide, tongue resting in the mouth (not protruded) and not phonating, which mimics how the tongue behaves during sleep. Classic (anesthesia) Mallampati instead has the patient protrude the tongue, since it's predicting intubation difficulty, not sleep-time collapse.
- Source: Standard sleep surgery teaching on Friedman tongue position.

**[friedman-grades-card]** tags: SL, clinical, milestones: MK1, PC4, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What does each Friedman tongue position (I-IV) allow you to see?
- Back: I: entire uvula and tonsils/pillars visible. II: uvula visible but not the tonsils (IIa = full uvula, IIb = only base of uvula/soft palate). III: soft palate visible but not the uvula. IV: hard palate only. A higher grade means more tongue-base obstruction.
- Source: Standard sleep surgery teaching on Friedman tongue position.

**[friedman-staging-components-card]** tags: SL, clinical, milestones: MK1, PC4, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What three components make up the Friedman staging system?
- Back: Tongue/palate position (I-IV), tonsil size (Brodsky 0-4), and BMI (cutoff 40 kg/m&sup2;). Stage I = big tonsils + favorable FTP + BMI<40. Stage III = small tonsils + unfavorable FTP. Stage IV = BMI>40.
- Source: Standard sleep surgery teaching on Friedman staging.

**[friedman-uppp-prediction-card]** tags: SL, clinical, milestones: MK1, PC9, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Friedman stage [...] predicts ~80% UPPP success, while stage [...] predicts <10% success.
- Back: Friedman stage I predicts ~80% UPPP success, while stage III predicts <10% success. Big tonsils + small tongue = removable palate obstruction = UPPP works; small tonsils + big tongue = tongue-base obstruction = UPPP fails.
- Source: Standard sleep surgery teaching on Friedman staging and UPPP outcomes.

**[friedman-anatomy-vs-ahi-card]** tags: SL, clinical, milestones: MK1, PC9, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Does anatomy-based (Friedman) or severity-based (AHI) staging better predict UPPP outcome?
- Back: Anatomy-based staging predicts far better. A meta-analysis found stage I a strong positive predictor and stage III a negative predictor of UPPP success, while BMI and preoperative AHI were not significant predictors.
- Source: Standard sleep surgery teaching on Friedman staging and UPPP outcome predictors.

**[hypoglossal-motor-card]** tags: SL, anatomy, milestones: MK1, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: CN XII innervates all intrinsic and extrinsic tongue muscles except [...], which is supplied by the vagus.
- Back: CN XII innervates all intrinsic and extrinsic tongue muscles except the palatoglossus, which is supplied by CN X (vagus) via the pharyngeal plexus. CN XII is otherwise a pure motor nerve.
- Source: Standard head and neck anatomy teaching on CN XII.

**[tongue-protrusor-retractor-card]** tags: SL, anatomy, milestones: MK1, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Which tongue muscles protrude the tongue (and open the airway) vs. retract it?
- Back: Protrudes: genioglossus (main) plus geniohyoid/intrinsic protrusive fibers. Retracts: hyoglossus and styloglossus. Genioglossus is the key airway dilator that loses tone in sleep and collapses in OSA.
- Source: Standard head and neck anatomy teaching on tongue musculature.

**[cn12-lesion-card]** tags: SL, clinical, milestones: MK1, PC1, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: A unilateral hypoglossal nerve lesion causes the protruded tongue to deviate [...].
- Back: A unilateral hypoglossal nerve lesion causes the protruded tongue to deviate toward the side of the lesion (the intact genioglossus pushes it across). Chronic lesions show ipsilateral atrophy/fasciculations. "The tongue points to the lesion."
- Source: Standard head and neck anatomy/neurology teaching on CN XII palsy.

**[hgns-mechanism-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: How does hypoglossal nerve stimulation keep the airway open in OSA?
- Back: An implanted cuff electrode fires the hypoglossal nerve in phase with inspiration, contracting the genioglossus to protrude/stiffen the tongue and open the retrolingual airway: an active splint, versus CPAP's pneumatic splint.
- Source: AAO-HNSF Position Statement: Hypoglossal Nerve Stimulation for OSA.

**[hgns-inclusion-exclusion-card]** tags: SL, anatomy, milestones: MK1, PC9, UKMLA: Obstructive sleep apnoea, RED FLAG, reviewer: (none)
- Front: In HGNS, which hypoglossal branches are 'included' in the cuff and which are 'excluded,' and why?
- Back: Include medial branches (protrusors: genioglossus): they open the airway. Exclude lateral branches (retractors: hyoglossus, styloglossus): they retract the tongue. Intraoperative EMG confirms protrusion, not retraction, before securing the cuff; bipolar (not monopolar) cautery is used near the device.
- Source: Sturm et al., Laryngoscope, 2020; Bassiri Gharb et al., Neuromodulation, 2015.

**[hgns-dise-card]** tags: SL, clinical, milestones: PC9, MK1, UKMLA: Obstructive sleep apnoea, RED FLAG, reviewer: (none)
- Front: What DISE finding is a contraindication to HGNS?
- Back: Complete concentric collapse of the velum/palate. HGNS works for tongue-base/anteroposterior collapse; concentric palatal collapse is too circumferential for tongue protrusion to overcome. This is screened for with drug-induced sleep endoscopy before implant.
- Source: Kahmke et al., JOMI, 2023; Vena et al., Eur Respir J, 2025.

**[hgns-indications-card]** tags: SL, clinical, milestones: PC9, MK1, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: List the core FDA indications for (unilateral) HGNS.
- Back: - Adult &ge;18y
- Moderate-to-severe OSA
- CPAP failure/intolerance
- AHI in the approved range
- BMI below threshold
- <25% central/mixed apneas
- No complete concentric palatal collapse on DISEVerify current AHI/BMI cutoffs against device labeling, as thresholds have been expanded over time.
- Source: FDA hypoglossal nerve stimulation approval criteria (updated); STAR trial inclusion criteria (Strollo et al., NEJM 2014).

**[hgns-unilateral-bilateral-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Contrast unilateral vs. bilateral HGNS.
- Back: Unilateral stimulates one hypoglossal nerve's medial (protrusor) fibers, synchronized to inspiration via a chest sensing lead; FDA-approved and STAR/ADHERE-validated (~68-83% AHI reduction). Bilateral stimulates both nerves and, in the current device, is breath-rate-independent (no separate sensing lead); supported by newer, less mature single-arm trial data.
- Source: Strollo et al., NEJM (STAR trial), 2014; Woodson et al., ADHERE registry; single-arm trials of bilateral HGNS (BLAST OSA, DREAM).

**[management-ladder-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Surgery for OSA is generally considered only after [...], and the specific operation is then chosen based on [...].
- Back: Surgery for OSA is generally considered only after CPAP failure (intolerance, non-adherence despite troubleshooting, or inadequate response), and the specific operation is then chosen based on the site(s) of collapse, often identified on DISE. CPAP is first-line because it splints the whole airway regardless of collapse level.
- Source: AASM Clinical Practice Guideline on OSA management; standard sleep surgery teaching.

**[dise-vote-classification-card]** tags: SL, clinical, milestones: PC4, PC9, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Drug-induced sleep endoscopy (DISE) evaluates the sedated airway to localize collapse; the finding that specifically contraindicates hypoglossal nerve stimulation is [...].
- Back: The finding that specifically contraindicates hypoglossal nerve stimulation is complete concentric collapse at the velum/palate. DISE grades collapse by level and pattern (VOTE: Velum, Oropharynx, Tongue base, Epiglottis) and is used to select site-directed surgery and MAD/HGNS candidates.
- Source: Standard sleep surgery teaching on drug-induced sleep endoscopy and the VOTE classification.

---

## Module: UKMLA scope registry (`ukmla`)

Source: UKMLA Content Map (GMC): ENT-relevant presentations & conditions. Scope anchor; content written to US standards (AAO-HNS), UK/US differences flagged.

### Presentations
Allergies, Anosmia, Cough, Dizziness, Ear and nasal discharge, Epistaxis, Facial pain, Facial weakness, Facial/periorbital swelling, Hearing loss, Hoarseness and voice change, Nasal obstruction, Neck lump, Painful ear, Snoring, Sore throat, Stridor, Swallowing problems, Tinnitus, Vertigo

### Conditions
Acoustic neuroma, Bell's palsy, Benign paroxysmal positional vertigo, Epiglottitis, Epistaxis, Infectious mononucleosis, Ménière's disease, Obstructive sleep apnoea, Otitis externa, Otitis media, Rhinosinusitis, Tonsillitis

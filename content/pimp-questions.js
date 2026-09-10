/* pimp-questions.js, the frequently asked (oral-exam) question bank.
 *
 * DATA ONLY (per CLAUDE.md): this file carries no rendering logic. It registers
 * a self-contained question bank on window.JEFFENT.pimp; the Frequently Asked
 * Questions quiz screen in js/app.js reads it. It is kept separate from the
 * flashcard `modules` registry because these are procedure-oriented oral-exam
 * prompts, not spaced-repetition cards.
 *
 * SHAPE: window.JEFFENT.pimp = { status, facultyReviewer, curriculumAnchors:[],
 *   sets:[ { id, track (matches a tracks.js id, for accent + badge),
 *            group (display subspecialty heading), title (the procedure),
 *            questions:[ { q (plain text), a (plain text) } ] } ] }
 *
 * Copy follows docs/WRITING-STYLE.md: no em or en dashes, American spelling,
 * plain voice. STATUS: DRAFT; every item needs a JeffENT faculty reviewer before
 * it counts as final. No patient data; teaching content only.
 *
 * To add a set: append to the `sets` array below. To add a whole new subspecialty
 * grouping, give its sets a new `group` string. No app.js change needed.
 */
window.JEFFENT = window.JEFFENT || {
  modules: [],
  register: function (mod) { this.modules.push(mod); },
  get: function (id) { return this.modules.find(function (m) { return m.id === id; }); }
};

window.JEFFENT.pimp = {
  "status": "DRAFT, pending faculty review.",
  "facultyReviewer": "",
  "curriculumAnchors": [
    "AAO-HNSF and AAP practice standards; high-yield rotation questions for flagship procedures.",
    "Procedure selection per resident case-log and ENT emergency-room data (Sethi et al., Laryngoscope 2015; Welschmeyer et al., Ann Otol Rhinol Laryngol 2021; Awad et al., Clin Otolaryngol 2014).",
    "A study aid, not a clinical decision tool. Faculty should verify all doses, criteria, and anatomic teaching points before publication."
  ],
  "sets": [
    {
      "id": "pimp-oto-tubes",
      "track": "otology",
      "group": "Otology / Neurotology",
      "title": "Myringotomy & Tympanostomy Tubes",
      "questions": [
        {
          "q": "Indications for tympanostomy tubes?",
          "a": "Recurrent AOM (3 or more in 6 months, or 4 or more in 12 months with one recent), or OME lasting 3 months or longer (bilateral) with hearing difficulty. Also OME with structural TM damage, or at-risk children."
        },
        {
          "q": "Where do you make the myringotomy incision, and why?",
          "a": "The anteroinferior (or inferior) quadrant. It keeps you off the ossicles and the chorda tympani (superior and posterior) and away from the jugular bulb, and it gives the best view and drainage."
        },
        {
          "q": "What must you avoid in the posterosuperior quadrant?",
          "a": "The incudostapedial joint and ossicular chain and the round window niche. Injury there risks ossicular damage and SNHL."
        },
        {
          "q": "Most common complications of ear tubes?",
          "a": "Otorrhea is the most common. Others: tympanosclerosis, persistent perforation, premature extrusion or retention, granulation tissue, and rarely cholesteatoma."
        },
        {
          "q": "First-line treatment for acute tube otorrhea?",
          "a": "Topical antibiotic drops (for example a fluoroquinolone) rather than systemic antibiotics; fluoroquinolones are non-ototoxic."
        },
        {
          "q": "Which nerve gives referred otalgia and runs near the middle ear?",
          "a": "Jacobson's nerve (the tympanic branch of CN IX). The chorda tympani (CN VII) carries taste from the anterior two-thirds of the tongue."
        },
        {
          "q": "OME vs. AOM on otoscopy?",
          "a": "OME shows a retracted or neutral TM with an air-fluid level or bubbles, reduced mobility, and no acute inflammation. AOM shows a bulging, erythematous or opacified TM with impaired mobility, sometimes with otorrhea."
        }
      ]
    },
    {
      "id": "pimp-oto-tympmastoid",
      "track": "otology",
      "group": "Otology / Neurotology",
      "title": "Tympanoplasty / Mastoidectomy",
      "questions": [
        {
          "q": "What is a cholesteatoma, and why is it dangerous?",
          "a": "Keratinizing squamous epithelium trapped in the middle ear or mastoid. It erodes bone, which can destroy the ossicles and cause a labyrinthine fistula, facial nerve palsy, and intracranial complications."
        },
        {
          "q": "CWU vs. CWD mastoidectomy?",
          "a": "CWU keeps the posterior canal wall: better anatomy but higher recurrence, and it needs a second-look. CWD removes the wall: lower recurrence, but it leaves a mastoid bowl that needs lifelong cleaning."
        },
        {
          "q": "What are the 3 segments of the facial nerve (intratemporal)?",
          "a": "The fallopian (bony) canal has three segments: labyrinthine (IAC fundus to the geniculate ganglion, the shortest and narrowest), tympanic (geniculate ganglion beneath the lateral semicircular canal to the second genu), and mastoid or vertical (second genu to the stylomastoid foramen). The geniculate ganglion is the first genu. Broader six-segment schemes add the intracranial or cisternal, meatal, and extratemporal or parotid segments."
        },
        {
          "q": "What does the tegmen separate?",
          "a": "The tegmen tympani separates the middle ear and mastoid from the middle cranial fossa. The cog is a bony ridge anterior to the epitympanum."
        },
        {
          "q": "Common graft materials for tympanoplasty?",
          "a": "Temporalis fascia (most common), tragal or conchal cartilage-perichondrium, and fat."
        },
        {
          "q": "What is Prussak's space?",
          "a": "The epitympanic recess between the pars flaccida and the neck of the malleus, a common site for pars flaccida (attic) cholesteatoma."
        },
        {
          "q": "Boundaries of the facial recess?",
          "a": "Facial nerve (medial and posterior), chorda tympani (lateral and anterior), and the incus buttress (superior). This is the window for a posterior tympanotomy."
        },
        {
          "q": "Sign of a labyrinthine fistula on exam?",
          "a": "A positive fistula test: vertigo or nystagmus when you apply pneumatic pressure to the ear canal."
        },
        {
          "q": "Borders of Macewen's (suprameatal) triangle?",
          "a": "Superiorly, the supramastoid crest (temporal line); anteroinferiorly, the posterosuperior margin of the bony external auditory canal (marked by the spine of Henle); posteriorly, a tangent connecting the two. It overlies the mastoid antrum and marks the safe starting point for cortical mastoidectomy drilling."
        },
        {
          "q": "What structure is removed to enter the mastoid antrum?",
          "a": "You drill away the lateral mastoid cortex and the overlying air cells (a cortical mastoidectomy with saucerization). The antrum sits roughly 12-15 mm deep to Macewen's triangle, with Koerner's septum drilled through on the way."
        }
      ]
    },
    {
      "id": "pimp-rhi-ess",
      "track": "rhinology",
      "group": "Rhinology / Sinus & Skull Base",
      "title": "Endoscopic Sinus Surgery",
      "questions": [
        {
          "q": "Ostiomeatal complex?",
          "a": "The final common drainage pathway of the frontal, maxillary, and anterior ethmoid sinuses into the middle meatus. Obstruction here is central to sinusitis."
        },
        {
          "q": "Middle vs. superior meatus drainage?",
          "a": "Middle meatus: frontal, maxillary, and anterior ethmoids. Superior meatus: posterior ethmoids. The sphenoid drains to the sphenoethmoidal recess, and the nasolacrimal duct drains to the inferior meatus."
        },
        {
          "q": "Dangerous complications of ESS?",
          "a": "A skull-base CSF leak (cribriform or fovea ethmoidalis injury), orbital injury (medial rectus, optic nerve), and internal carotid injury near the sphenoid."
        },
        {
          "q": "Keros classification?",
          "a": "It grades the depth of the olfactory fossa (cribriform relative to the fovea ethmoidalis). A higher Keros (type III) means a longer lateral lamella and a higher risk of skull-base injury."
        },
        {
          "q": "Landmark for the anterior ethmoid artery?",
          "a": "It runs along the skull base at the frontoethmoidal junction, a common bleeding site that can retract into the orbit."
        },
        {
          "q": "Lamina papyracea: what lies beyond it?",
          "a": "The thin medial orbital wall. Breaching it risks orbital fat herniation, medial rectus injury, and orbital hematoma."
        },
        {
          "q": "Test for CSF leak?",
          "a": "Beta-2 transferrin is the most specific. Intrathecal fluorescein can localize the leak."
        },
        {
          "q": "Indications for ESS in CRS?",
          "a": "Failure of appropriate medical therapy with objective disease on CT or endoscopy. Also complications, mucoceles, polyps, fungal disease, and tumor."
        },
        {
          "q": "How do you confirm sphenoid location?",
          "a": "It sits about 7 cm from the nasal sill at roughly 30 degrees, with the ostium medial to the superior turbinate. The carotid and optic nerve may be dehiscent laterally."
        },
        {
          "q": "Concha bullosa?",
          "a": "A pneumatized middle turbinate that can obstruct the OMC and contribute to sinusitis."
        }
      ]
    },
    {
      "id": "pimp-rhi-epistaxis",
      "track": "rhinology",
      "group": "Rhinology / Sinus & Skull Base",
      "title": "Epistaxis",
      "questions": [
        {
          "q": "Most common source of anterior epistaxis?",
          "a": "Kiesselbach's plexus (Little's area) on the anterior septum."
        },
        {
          "q": "Arteries forming Kiesselbach's plexus?",
          "a": "The anterior ethmoid, sphenopalatine, greater palatine, and superior labial branches."
        },
        {
          "q": "First-line management of an anterior bleed?",
          "a": "Firm compression of the soft lower third of the nose for about 15 minutes, leaning forward, with or without topical oxymetazoline."
        },
        {
          "q": "Source of posterior epistaxis?",
          "a": "The sphenopalatine artery (the terminal maxillary branch). It may need posterior packing or SPA ligation or embolization."
        },
        {
          "q": "Why avoid bilateral septal cautery?",
          "a": "It risks septal perforation from bilateral mucosal and cartilage devascularization."
        },
        {
          "q": "Key risk with posterior packing?",
          "a": "Airway compromise, hypoxia, and pressure necrosis; these patients often need monitoring."
        },
        {
          "q": "Which artery is ligated or embolized for refractory posterior bleeds?",
          "a": "The sphenopalatine artery (endoscopic ligation), or the internal maxillary artery (embolization)."
        },
        {
          "q": "When should you suspect a tumor?",
          "a": "Unilateral recurrent epistaxis with obstruction in an adult (a sinonasal neoplasm), or in an adolescent male (JNA, which you never biopsy in clinic)."
        },
        {
          "q": "Danger of an untreated septal hematoma?",
          "a": "Avascular cartilage necrosis, which leads to a saddle-nose deformity and perforation. It needs urgent I&D."
        }
      ]
    },
    {
      "id": "pimp-rhi-transsphenoidal",
      "track": "rhinology",
      "group": "Rhinology / Sinus & Skull Base",
      "title": "Transsphenoidal Hypophysectomy (Pituitary Resection)",
      "questions": [
        {
          "q": "Anatomical stages of the endoscopic endonasal transsphenoidal approach?",
          "a": "Three stages: a nasal stage (find and lateralize the middle turbinate, and elevate a nasoseptal flap if needed), a sphenoid stage (a wide sphenoidotomy through the sphenoid ostium medial to the superior turbinate), and a sellar stage (open the sella floor, incise dura, and resect tumor with ring curettes and suction). Graded skull-base reconstruction follows."
        },
        {
          "q": "Indications for surgery?",
          "a": "Functioning adenomas (except prolactinomas, which are treated medically first) and nonfunctioning adenomas causing mass effect: visual field loss or chiasmal compression, hypopituitarism, or apoplexy. Also tumors larger than 10 mm or with extrasellar extension or growth, and pituitary apoplexy."
        },
        {
          "q": "What critical structures border the surgical corridor?",
          "a": "The internal carotid arteries laterally in the cavernous sinus, the optic nerves and chiasm superiorly, the cavernous sinus and its cranial nerves (III, IV, V1-V2, VI) laterally, and the sphenoid sinus septations, which can lead to the carotid canal."
        },
        {
          "q": "Most feared intraoperative vascular complication?",
          "a": "Internal carotid artery injury: rare (about 0.1%) but potentially catastrophic. It is managed with packing or tamponade and emergent endovascular treatment."
        },
        {
          "q": "Most common surgical complication postoperatively?",
          "a": "CSF leak or rhinorrhea (about 4% after endoscopic surgery), which is also the leading cause of early reoperation. The risk rises with an intraoperative CSF leak, larger tumors, firm tumors, and extended approaches."
        },
        {
          "q": "Most common endocrine or medical complication?",
          "a": "Transient diabetes insipidus (about 9%), usually self-limited; permanent DI is uncommon (about 2%). Delayed hyponatremia (SIADH) around postoperative days 5-9 is the most common reason for readmission."
        },
        {
          "q": "How is the skull base reconstructed and a leak prevented?",
          "a": "A graded, multilayer closure of the sellar defect: hemostatic material and gelatin or fat in the sella, an inlay or onlay dural substitute, and a vascularized nasoseptal flap for higher-flow leaks."
        }
      ]
    },
    {
      "id": "pimp-lar-flexlaryng",
      "track": "laryngology",
      "group": "Laryngology",
      "title": "Flexible Laryngoscopy & Vocal Fold Disorders",
      "questions": [
        {
          "q": "Sensation above vs. below the cords?",
          "a": "Above the cords (supraglottis): the internal branch of the superior laryngeal nerve. Below the cords (subglottis): the recurrent laryngeal nerve."
        },
        {
          "q": "Which intrinsic muscle abducts the cords?",
          "a": "The posterior cricoarytenoid, the only abductor."
        },
        {
          "q": "Which muscle tenses the cords, and what innervates it?",
          "a": "The cricothyroid, innervated by the external branch of the SLN. Every other intrinsic muscle is innervated by the RLN."
        },
        {
          "q": "Unilateral RLN injury?",
          "a": "Ipsilateral vocal fold paralysis in a paramedian position, giving a breathy, hoarse voice and aspiration risk."
        },
        {
          "q": "Bilateral RLN injury?",
          "a": "Both cords sit paramedian, which can obstruct the airway and cause stridor; it may need a tracheostomy."
        },
        {
          "q": "Where do vocal fold nodules form, and why?",
          "a": "At the junction of the anterior and middle thirds of the membranous cord, the point of maximal vibratory contact. They are usually bilateral and come from voice overuse."
        },
        {
          "q": "Layers of the vocal fold?",
          "a": "Epithelium, superficial lamina propria (Reinke's space), intermediate and deep lamina propria (the vocal ligament), and the thyroarytenoid muscle (the body)."
        },
        {
          "q": "Reinke's edema associations?",
          "a": "Chronic smoking, and voice abuse, which put fluid in the superficial lamina propria and deepen the voice."
        }
      ]
    },
    {
      "id": "pimp-hn-tonsils",
      "track": "head-neck",
      "group": "Head & Neck Surgery",
      "title": "Tonsillectomy & Adenoidectomy",
      "questions": [
        {
          "q": "Indications for tonsillectomy?",
          "a": "Recurrent throat infection by the Paradise criteria (7 or more in 1 year, 5 or more per year for 2 years, or 3 or more per year for 3 years) and obstructive sleep-disordered breathing or OSA. Also recurrent PTA, or an asymmetric tonsil that raises concern for malignancy."
        },
        {
          "q": "Blood supply to the palatine tonsil?",
          "a": "Mainly the tonsillar branch of the facial artery. Also the lingual, ascending pharyngeal, and internal maxillary (descending palatine) branches."
        },
        {
          "q": "Preferred post-T&A analgesia?",
          "a": "Acetaminophen, with or without ibuprofen. Minimize opioids because of respiratory depression risk."
        },
        {
          "q": "Velopharyngeal insufficiency: who is at risk?",
          "a": "It shows as hypernasal speech or nasal regurgitation after adenoidectomy. Risk is higher with a cleft or submucous cleft palate, a bifid uvula, or 22q11, so screen for a submucous cleft."
        },
        {
          "q": "Managing an active post-tonsillectomy bleed?",
          "a": "Start with ABCs, IV access and fluids, and labs with a type and screen. Apply direct pressure or a topical vasoconstrictor, and return to the OR for cautery or ligation if the bleed is brisk. Assume it can be catastrophic."
        },
        {
          "q": "Muscles of the tonsillar pillars and lateral fossa wall?",
          "a": "The anterior pillar is palatoglossus and the posterior pillar is palatopharyngeus. The lateral wall (bed) of the tonsillar fossa is formed mainly by the superior pharyngeal constrictor, with contributions from the middle constrictor and styloglossus and stylopharyngeus. The superior constrictor lies immediately lateral to the tonsillar capsule."
        }
      ]
    },
    {
      "id": "pimp-hn-thyroid",
      "track": "head-neck",
      "group": "Head & Neck Surgery",
      "title": "Thyroidectomy",
      "questions": [
        {
          "q": "Two nerves at risk and their function?",
          "a": "The RLN (vocal fold abduction and adduction, and sensation below the cords) and the external branch of the SLN (cricothyroid, which sets pitch)."
        },
        {
          "q": "RLN relation to the inferior thyroid artery?",
          "a": "The nerve runs near or through its branches, so ligate the arterial branches right on the capsule to protect it."
        },
        {
          "q": "Ligament of Berry?",
          "a": "The posterior suspensory ligament attaching the thyroid to the trachea and cricoid. The RLN runs just deep and lateral to it, so this is high-risk ground near the nerve's laryngeal entry."
        },
        {
          "q": "How do you reliably identify the RLN?",
          "a": "In the tracheoesophageal groove, within Beahrs' triangle (common carotid, inferior thyroid artery, and RLN). The tubercle of Zuckerkandl points to it."
        },
        {
          "q": "Most common complication after total thyroidectomy?",
          "a": "Transient hypocalcemia from parathyroid injury or devascularization. Check calcium and PTH, and watch for perioral numbness and Chvostek and Trousseau signs."
        },
        {
          "q": "Distinguishing parathyroids from nodes or fat?",
          "a": "A tan or mustard color with a characteristic vascular pedicle."
        },
        {
          "q": "Parathyroid embryology?",
          "a": "The superior glands come from the 4th pouch (a more constant location); the inferior glands come from the 3rd pouch (variable, sometimes in the thymus)."
        },
        {
          "q": "Signs of bilateral RLN injury postop?",
          "a": "Stridor or airway obstruction on extubation, which may require reintubation or tracheostomy."
        },
        {
          "q": "Workup of a thyroid nodule?",
          "a": "TSH first, then ultrasound with risk stratification (TI-RADS), then FNA by size and features, then Bethesda cytology."
        },
        {
          "q": "Voice change with a normal-looking cord: which nerve?",
          "a": "The external branch of the SLN. Loss of cricothyroid tension reduces pitch and causes vocal fatigue."
        },
        {
          "q": "Perioperative thyroid storm management?",
          "a": "Beta-blockade, antithyroid drugs (PTU or methimazole), iodine (given after the antithyroid drug), steroids, and supportive care."
        },
        {
          "q": "The 5 components of ACR TI-RADS?",
          "a": "Points are summed across five ultrasound feature categories: composition, echogenicity, shape, margin, and echogenic foci. You take one feature from each of the first four plus all applicable foci, which yields TR1 (benign) through TR5 (highly suspicious). FNA or follow-up then depends on the level and the nodule size."
        },
        {
          "q": "The Bethesda System categories?",
          "a": "Six categories: I nondiagnostic or unsatisfactory, II benign, III atypia of undetermined significance (AUS/FLUS), IV follicular neoplasm or suspicious for follicular neoplasm, V suspicious for malignancy, and VI malignant. Each carries an implied risk of malignancy rising from about 0-3% (II) to about 97-99% (VI), with management tied to the category."
        },
        {
          "q": "Types of thyroid cancer: which is most common and which is most aggressive?",
          "a": "The follicular-cell-derived cancers are papillary (most common, about 80-84%, best prognosis), follicular, and oncocytic (Hurthle cell); together these are the differentiated thyroid cancers, and poorly differentiated and anaplastic types round out the group. Medullary cancer arises from parafollicular C cells (about 4%). Anaplastic (undifferentiated) carcinoma is the most aggressive, with a median survival of only months, even though it is under 2% of cases."
        }
      ]
    },
    {
      "id": "pimp-hn-parotid-neck",
      "track": "head-neck",
      "group": "Head & Neck Surgery",
      "title": "Parotidectomy & Neck Dissection",
      "questions": [
        {
          "q": "Landmarks for the facial nerve trunk?",
          "a": "The tragal pointer (the nerve is about 1 cm deep, inferior, and anterior to it), the tympanomastoid suture line, and the posterior belly of digastric at the digastric ridge."
        },
        {
          "q": "What divides the parotid into superficial and deep lobes?",
          "a": "The plane of the facial nerve, which is a surgical division rather than a true anatomic one."
        },
        {
          "q": "Frey syndrome?",
          "a": "Gustatory sweating from aberrant reinnervation of sweat glands by parasympathetic fibers after parotid surgery. Minor's starch-iodine test is positive."
        },
        {
          "q": "Most common benign parotid tumor?",
          "a": "Pleomorphic adenoma, with Warthin tumor second (bilateral, in smokers). The most common malignant tumor overall is mucoepidermoid carcinoma."
        },
        {
          "q": "Structures through the parotid (superficial to deep)?",
          "a": "The facial nerve (most superficial), then the retromandibular vein, then the external carotid artery (deepest)."
        },
        {
          "q": "Nerves at risk in the submandibular triangle?",
          "a": "The marginal mandibular branch of CN VII, the lingual nerve, and the hypoglossal nerve (CN XII)."
        },
        {
          "q": "Neck node levels?",
          "a": "I (submental and submandibular), II to IV (jugular chain), V (posterior triangle), and VI (central). Level II is common for oropharyngeal or HPV-positive metastasis."
        },
        {
          "q": "Selective vs. MRND vs. radical neck dissection?",
          "a": "Selective dissection preserves some nodal levels plus all non-lymphatic structures. MRND removes levels I to V but spares at least one of the SCM, IJV, or CN XI. Radical dissection removes all three."
        },
        {
          "q": "Nerve most commonly injured causing shoulder droop?",
          "a": "The spinal accessory nerve (CN XI), in level V or II."
        },
        {
          "q": "A cystic neck mass in a middle-aged adult: what to exclude?",
          "a": "Metastatic HPV-associated oropharyngeal SCC. Never assume a branchial cleft cyst in an adult; get FNA and imaging."
        },
        {
          "q": "Contents of the carotid sheath?",
          "a": "The common or internal carotid artery, the internal jugular vein, and the vagus nerve (CN X). The ansa cervicalis runs on or within its anterior surface, and deep cervical nodes lie along it."
        },
        {
          "q": "Sensory nerves of the cervical plexus?",
          "a": "The lesser occipital, great auricular, transverse cervical, and supraclavicular nerves (C2-C4), emerging at Erb's point along the posterior border of the SCM."
        },
        {
          "q": "The strap muscles and their innervation?",
          "a": "Sternohyoid, sternothyroid, omohyoid, and thyrohyoid. The first three are innervated by the ansa cervicalis (C1-C3); the thyrohyoid is supplied by C1 fibers traveling with the hypoglossal nerve."
        },
        {
          "q": "Concern about level IV dissection?",
          "a": "Injury to the thoracic duct on the left (or the right lymphatic duct) near where it enters at the IJV-subclavian junction, causing a chyle leak or chylous fistula. Ligate or clip lymphatics and avoid energy devices low in level IV."
        },
        {
          "q": "Artery at the inferior border of level IV?",
          "a": "The transverse cervical artery, which is usually preserved during dissection."
        },
        {
          "q": "Structure separating levels IIa and IIb?",
          "a": "The spinal accessory nerve (CN XI): nodes anteromedial or inferior to it are IIa, and those posterosuperior are IIb. Radiologically the divider is drawn at the posterior edge of the internal jugular vein."
        },
        {
          "q": "Maneuver to protect the marginal mandibular nerve?",
          "a": "The Hayes-Martin maneuver: identify, ligate, and divide the facial (anterior facial) vein low over the submandibular gland, then reflect the fascia and vein superiorly. This carries the nerve, which lies superficial to the vessels, up and out of the operative field."
        }
      ]
    },
    {
      "id": "pimp-fp-trauma",
      "track": "facial-plastics",
      "group": "Facial Plastic & Reconstructive Surgery",
      "title": "Facial Trauma & Nasal Fracture",
      "questions": [
        {
          "q": "Rule out before treating a nasal fracture?",
          "a": "A septal hematoma (drain it urgently) and CSF rhinorrhea."
        },
        {
          "q": "How do you assess for a CSF leak?",
          "a": "Beta-2 transferrin. The halo sign is nonspecific."
        },
        {
          "q": "Orbital blowout fracture signs?",
          "a": "Enophthalmos, diplopia on upgaze (inferior rectus entrapment), and infraorbital hypesthesia. Watch for the oculocardiac reflex (bradycardia) in pediatric trapdoor fractures, which is a surgical urgency."
        },
        {
          "q": "Le Fort classification?",
          "a": "I is a transverse maxilla, or floating palate; II is pyramidal; III is craniofacial disjunction. All three cross the pterygoid plates."
        },
        {
          "q": "Ideal timing to repair facial lacerations?",
          "a": "Generally within 24 hours, though the rich facial blood supply allows longer windows. Align the vermilion border and eyebrows precisely."
        },
        {
          "q": "Reconstructive ladder?",
          "a": "Secondary intention, then primary closure, then skin graft, then local flap, then regional or free flap."
        }
      ]
    },
    {
      "id": "pimp-peds-airway",
      "track": "pediatric",
      "group": "Pediatric Otolaryngology",
      "title": "Pediatric Airway",
      "questions": [
        {
          "q": "Most common cause of infant stridor?",
          "a": "Laryngomalacia: inspiratory stridor that is worse supine, with feeding, or when agitated, and better prone. It usually self-resolves."
        },
        {
          "q": "Narrowest part of the pediatric airway?",
          "a": "The subglottis (the cricoid ring), the only complete cartilage ring."
        },
        {
          "q": "Foreign-body aspiration presentation?",
          "a": "Witnessed choking, with a unilateral wheeze or decreased breath sounds. Look for air trapping or hyperinflation on decubitus or expiratory films."
        },
        {
          "q": "Why is an esophageal button battery an emergency?",
          "a": "It causes liquefactive necrosis within hours, leading to perforation and fistula. Remove it emergently."
        },
        {
          "q": "Croup vs. epiglottitis radiographs?",
          "a": "Croup shows the subglottic steeple sign (AP). Epiglottitis shows the thumbprint sign (lateral); do not agitate the child, and secure the airway first."
        },
        {
          "q": "Most common congenital midline neck mass?",
          "a": "A thyroglossal duct cyst. It moves with swallowing and tongue protrusion, and is treated with the Sistrunk procedure."
        },
        {
          "q": "Where do branchial cleft cysts present?",
          "a": "The second cleft is most common: at the anterior border of the SCM."
        },
        {
          "q": "Why confirm a functioning thyroid before excising a midline mass?",
          "a": "To rule out an ectopic or lingual thyroid that is the only thyroid tissue present. Get an ultrasound, with a scan if needed, before a Sistrunk."
        },
        {
          "q": "AOM antibiotic choice and when to observe?",
          "a": "High-dose amoxicillin (80-90 mg/kg/day) is first line. Use amoxicillin-clavulanate if there were antibiotics in the prior 30 days, purulent conjunctivitis, or treatment failure. Observation is reasonable for select non-severe cases."
        }
      ]
    },
    {
      "id": "pimp-sleep-osa",
      "track": "sleep",
      "group": "Sleep Surgery",
      "title": "OSA & Sleep Surgery",
      "questions": [
        {
          "q": "OSA severity by AHI?",
          "a": "Mild is 5-15, moderate is 15-30, and severe is over 30 events per hour."
        },
        {
          "q": "First-line therapy for adult OSA?",
          "a": "CPAP. Surgery is for patients who fail or cannot tolerate CPAP, or who have a specific anatomic obstruction."
        },
        {
          "q": "First-line surgical therapy for pediatric OSA?",
          "a": "Adenotonsillectomy."
        },
        {
          "q": "What does Friedman staging assess?",
          "a": "Tongue position (modified Mallampati), tonsil size, and BMI. It predicts UPPP success."
        },
        {
          "q": "Criteria for hypoglossal nerve stimulation?",
          "a": "Moderate-to-severe OSA, failure or intolerance of CPAP, a BMI below the threshold (roughly under 32-35), and no complete concentric palatal collapse on DISE."
        },
        {
          "q": "Which nerve or muscle does HGNS target?",
          "a": "The hypoglossal nerve, driving genioglossus protrusion to open the retrolingual airway."
        },
        {
          "q": "Common UPPP complications?",
          "a": "Bleeding, VPI, nasopharyngeal stenosis, dysphagia, and airway edema. Respiratory distress and readmission are notable early risks."
        },
        {
          "q": "Why are OSA patients higher perioperative risk?",
          "a": "They are sensitive to sedatives and opioids, can be a difficult airway, and are prone to postoperative respiratory depression. Minimize opioids and monitor closely."
        },
        {
          "q": "What is DISE, and why is it useful?",
          "a": "Drug-induced sleep endoscopy identifies the levels of collapse (palate, oropharynx, tongue base, epiglottis) so you can tailor the surgery."
        },
        {
          "q": "Screening tool for OSA risk?",
          "a": "STOP-BANG."
        }
      ]
    },
    {
      "id": "pimp-sleep-hgns",
      "track": "sleep",
      "group": "Sleep Surgery",
      "title": "Hypoglossal Nerve Stimulator (HGNS) Implantation",
      "questions": [
        {
          "q": "What is the mechanism of HGNS?",
          "a": "A pacemaker-like implanted pulse generator delivers a stimulus timed to inspiration. It activates the protrusor branches of the hypoglossal nerve, advancing the tongue to enlarge and stabilize the retrolingual airway (and, through palatoglossal coupling, the retropalatal airway)."
        },
        {
          "q": "Medial vs. lateral branches of CN XII: which is the target?",
          "a": "CN XII splits into a medial division (m-XII) supplying the protrusor and stiffener muscles (genioglossus, both horizontal and oblique, and the transverse and vertical intrinsics, plus a C1 branch to geniohyoid), and a lateral division (l-XII) supplying the retractor muscles, styloglossus and hyoglossus. The cuff captures the medial (inclusion) branches while excluding the lateral (retractor) branches, so the tongue protrudes rather than retracts."
        },
        {
          "q": "How is correct branch selection confirmed intraoperatively?",
          "a": "By intraoperative EMG and nerve monitoring. Stimulating the medial branches produces genioglossus (protrusion) responses, while stimulating the lateral branches drives styloglossus and hyoglossus (retraction). Inclusion electrodes monitor genioglossus and exclusion electrodes monitor the retractors, which guides cuff placement."
        },
        {
          "q": "The three implanted components (classic system)?",
          "a": "A stimulation cuff electrode on the medial branches of CN XII, an implantable pulse generator in an infraclavicular pocket, and a respiratory-sensing lead. It was historically placed via a 3-incision technique, and there is now an FDA-approved 2-incision approach."
        },
        {
          "q": "Standard eligibility criteria?",
          "a": "Moderate-to-severe OSA, documented CPAP intolerance or failure, a BMI below the device threshold (roughly under 32-35), and no complete concentric palatal collapse on DISE, which is a contraindication."
        },
        {
          "q": "Why is complete concentric palatal collapse a contraindication?",
          "a": "That collapse pattern does not respond to tongue protrusion and predicts therapy failure, which is why DISE screening is required before implantation."
        },
        {
          "q": "Why is the genioglossus the physiologic target?",
          "a": "It is the main upper-airway dilator. Its inspiratory contraction pulls the tongue base forward, and its relaxation during sleep allows the posterior collapse that HGNS counteracts."
        },
        {
          "q": "What structures are at risk during the CN XII dissection?",
          "a": "The hypoglossal nerve branches themselves, the ranine (venous) plexus and vessels superficial to the hyoglossus, the submandibular gland, and the C1 and ansa contributions running with the nerve."
        },
        {
          "q": "Common device or surgical complications?",
          "a": "Tongue or incision discomfort and abrasion, temporary tongue weakness or dysarthria, stimulation-related discomfort, lead or device malfunction or the need for revision, and infection or hematoma at the pocket."
        },
        {
          "q": "Why place the cuff superficial to the hyoglossus at the branch point?",
          "a": "All the terminal branches run immediately superficial to the hyoglossus up to its anterior margin. That is where the surgeon can reliably separate the inclusion (medial) from the exclusion (lateral) fibers for selective cuff placement."
        }
      ]
    },
    {
      "id": "pimp-trach",
      "track": "foundations",
      "group": "General ENT Topics",
      "title": "Tracheostomy",
      "questions": [
        {
          "q": "Between which tracheal rings is the incision made?",
          "a": "Between the 2nd and 3rd (or the 3rd and 4th) tracheal rings."
        },
        {
          "q": "What structure crosses the midline over the trachea?",
          "a": "The thyroid isthmus, which is often divided or retracted."
        },
        {
          "q": "What vascular structure lies low in the midline neck?",
          "a": "The innominate (brachiocephalic) artery. Eroding into it causes a tracheo-innominate fistula."
        },
        {
          "q": "Tracheo-innominate fistula: presentation and management?",
          "a": "A herald sentinel bleed followed by massive bleeding. Hyperinflate the cuff or apply digital compression (the Utley maneuver) and go to the OR."
        },
        {
          "q": "First step if a fresh (immature) trach is dislodged?",
          "a": "Do not blindly reinsert it, since the tract is not mature (under 7 days). Orally intubate or bag-mask ventilate as needed, and get help."
        },
        {
          "q": "When is a tract considered mature?",
          "a": "Around 5-7 days (longer in children and obese patients). Tube changes are safer after it matures."
        },
        {
          "q": "Advantages of tracheostomy over prolonged intubation?",
          "a": "Less laryngeal injury, easier secretion clearance, better comfort and oral care, and the potential to reduce sedation and ventilator time."
        },
        {
          "q": "Subglottic stenosis and its relation to intubation?",
          "a": "Cricoid-level narrowing from prolonged intubation and cuff pressure. It is a reason to consider earlier tracheostomy."
        },
        {
          "q": "Decannulation readiness?",
          "a": "Adequate cough and secretion management, tolerating capping or downsizing, a patent upper airway on scope, and stable respiratory status."
        },
        {
          "q": "What is a false passage?",
          "a": "A tract created during insertion or a tube change that does not enter the tracheal lumen. The tube sits in the pretracheal soft tissue or mediastinum, so ventilation fails and subcutaneous emphysema or pneumomediastinum can develop. Prevent it with good exposure, maturation or stay sutures, avoiding blind reinsertion of an immature tract, and confirming intraluminal placement (capnography, bronchoscopy, or bag ventilation with breath sounds and CO2)."
        },
        {
          "q": "Most common cause of acute respiratory distress in a trach patient, and prevention?",
          "a": "A mucus plug or tube obstruction from inspissated secretions. Prevention centers on good humidification, scheduled suctioning, inner-cannula care and exchange, and adequate systemic hydration."
        }
      ]
    }
  ]
};

/* procedures.js, 2-MINUTE PROCEDURE PREP (subspecialty track). Built from the user's Procedure 2-Min Briefs companion.
 * Each clinical block uses a structured shape (scenario/decisionPoints/keySteps/dangerStructures/pearl/subspecialty)
 * instead of a single html blob -- js/app.js's buildProceduresPane() renders this into the card-within-card layout,
 * subspecialty accordion sidebar, and the "How to use these briefs" quick-matcher. */
window.JEFFENT.register(
{
 "id": "procedures-2min",
 "track": "procedures",
 "trackName": "2-Minute Procedure Prep",
 "trackAbbr": "PR",
 "order": 1,
 "title": "2-Minute Procedure Prep",
 "subtitle": "Fast pre-scrub briefs for the OR and bedside: the indication, the key steps, the danger structures, and one pearl, for the operations you will see on the rotation.",
 "status": "DRAFT, pending faculty review.",
 "clinical": {
  "intro": "Each brief is a two-minute pre-scrub read: the indication, the key steps, the danger structures, and one pearl. Work the decision points before you look, then lock in the pearl.",
  "matcher": {
   "head": ["Procedure", "Subspecialty", "Key structures"],
   "rows": [
    ["Myringotomy & tubes", "Otology", "Ossicles, chorda tympani, jugular bulb"],
    ["Tympanoplasty / mastoidectomy", "Otology", "Facial nerve, lateral SCC, sigmoid sinus, tegmen"],
    ["Endoscopic sinus surgery", "Rhinology & Skull Base", "Lamina papyracea, skull base, ant. ethmoid a., carotid"],
    ["Epistaxis control", "Rhinology & Skull Base", "Sphenopalatine a., ethmoid aa., septal cartilage"],
    ["Transsphenoidal hypophysectomy", "Rhinology & Skull Base", "Carotids, optic chiasm, cavernous sinus"],
    ["Vocal fold surgery", "Laryngology", "Lamina propria, anterior commissure, SLN bundle"],
    ["Tonsillectomy & adenoidectomy", "Head & Neck", "Facial a. tonsillar branch, ICA, Eustachian orifices"],
    ["Thyroidectomy", "Head & Neck", "RLN, external branch SLN, parathyroids"],
    ["Parotidectomy", "Head & Neck", "Facial nerve trunk and branches, retromandibular vein"],
    ["Nasal fracture / facial trauma", "Facial Plastics", "Septal hematoma, cribriform plate, medial canthus"],
    ["Pediatric airway (DL & B)", "Pediatric", "Subglottis, vocal folds, teeth, friable mucosa"],
    ["UPPP", "Sleep/Airway", "Velopharynx, great vessels lateral to fossa"],
    ["Hypoglossal nerve stimulator", "Sleep/Airway", "Lateral (retractor) CN XII branch, C1, pleura"],
    ["Tracheostomy", "Cross-Cutting", "Thyroid isthmus, innominate a., posterior tracheal wall"],
    ["Peritonsillar abscess drainage", "Head & Neck", "Internal carotid (2-2.5 cm posterolateral), airway"],
    ["Deep neck infection / Ludwig angina", "Head & Neck", "Airway, carotid sheath, mediastinal descent"],
    ["Sistrunk procedure", "Head & Neck", "Hyoid body and tract, hypoglossal and superior laryngeal nerves, thyroid"]
   ]
  },
  "blocks": [
     {
        "id": "myringotomy",
        "title": "Myringotomy & tympanostomy tubes",
        "subspecialty": "Otology",
        "scenario": "A 2-year-old with recurrent acute otitis media and persistent bilateral effusions, now with delayed speech.",
        "decisionPoints": [
           "Criteria met: recurrent AOM (3 in 6 months, or 4 in 12 months with one recent) OR bilateral OME for 3 months with a hearing or developmental concern.",
           "Get an audiogram and tympanometry first to document baseline hearing and effusion.",
           "Incision goes in the anteroinferior quadrant, away from ossicles, chorda tympani, and jugular bulb.",
           "Tube choice: short-term (grommet) tubes for typical cases vs. long-term (T-tubes) when prolonged ventilation is needed: long-term tubes carry a much higher persistent perforation rate (~16–20% vs. ~2%)."
        ],
        "keySteps": [
           "Position, place the ear speculum, clear cerumen under the microscope.",
           "Bring the drum into full view; orient to the malleus and light reflex.",
           "Make a small radial incision in the anteroinferior (or inferior) quadrant: radial to spare the drum's circular fibers.",
           "Aspirate the effusion (serous, mucoid, or purulent).",
           "Insert the tube and seat both flanges; instill ototopical drops if indicated."
        ],
        "dangerStructures": "Ossicular chain and chorda tympani (posterosuperior quadrant), a dehiscent or high jugular bulb (posteroinferior floor), and the round window niche.",
        "pearl": "The most common postoperative problem is tube otorrhea, occurring in up to ~50% of closely monitored children. Treat with ototopical fluoroquinolone drops, not systemic antibiotics."
     },
     {
        "id": "chole",
        "title": "Tympanoplasty / mastoidectomy for cholesteatoma",
        "subspecialty": "Otology",
        "scenario": "A 34-year-old with chronic foul otorrhea, hearing loss, a pars flaccida retraction pocket with keratin, and CT showing scutum erosion.",
        "decisionPoints": [
           "Preop workup: audiogram to document baseline hearing, and CT temporal bone to map disease extent, tegmen/sigmoid position, and canal integrity before entering.",
           "Diagnosis: attic (pars flaccida) cholesteatoma in Prussak's space.",
           "Urgent because it erodes bone: ossicular destruction, labyrinthine fistula, facial palsy, intracranial spread.",
           "Intraoperative facial nerve monitoring is routine, directly relevant to the danger structures below.",
           "Canal-wall-up (CWU) preserves ear-canal anatomy but recurs more (residual/recurrent disease reported ~9–60%, needs a planned second look); canal-wall-down (CWD) recurs less (~0–17%) but leaves a mastoid bowl needing lifelong cleaning."
        ],
        "keySteps": [
           "Postauricular incision; harvest fascia or cartilage graft; elevate a tympanomeatal flap.",
           "Cortical mastoidectomy within tegmen (superior), sigmoid sinus (posterior), and bony canal (anterior); MacEwen's triangle marks the antrum.",
           "Identify the antrum, lateral semicircular canal, and short process of the incus.",
           "Posterior tympanotomy (facial recess) if middle-ear access is needed.",
           "Remove all disease; decide CWU vs. CWD; address the ossicular chain and graft the drum."
        ],
        "dangerStructures": "Facial nerve (tympanic and mastoid segments, facial recess), lateral semicircular canal (fistula), sigmoid sinus, tegmen/dura, and the ossicular chain.",
        "pearl": "New vertigo with a positive fistula test signals a labyrinthine fistula: a red flag that changes the surgical plan."
     },
     {
        "id": "ess",
        "title": "Endoscopic sinus surgery (ESS)",
        "subspecialty": "Rhinology & Skull Base",
        "scenario": "A 45-year-old with 6 months of congestion, facial pressure, and anosmia after failed medical therapy; CT shows osteomeatal complex (OMC) obstruction and ethmoid opacification.",
        "decisionPoints": [
           "Indication: failure of appropriate medical therapy plus objective disease on CT/endoscopy.",
           "Read the CT for danger zones, Keros classification of skull-base height: Type 1 (1–3 mm), Type 2 (4–7 mm, most common, ~66%), Type 3 (8–16 mm, the longest lateral lamella and highest skull-base injury risk), plus lamina papyracea integrity, anterior ethmoid artery course, and any dehiscence.",
           "Most feared complications: CSF leak (cribriform/fovea ethmoidalis), orbital injury (medial rectus, optic nerve), carotid injury near the sphenoid.",
           "Overall context: ESS has an ~0.5% overall complication rate, with CSF leak and orbital injury each ~0.09%."
        ],
        "keySteps": [
           "Decongest; medialize the middle turbinate; identify the uncinate process.",
           "Uncinectomy to expose the infundibulum.",
           "Maxillary antrostomy incorporating the natural ostium to avoid recirculation.",
           "Anterior then posterior ethmoidectomy through the basal lamella, identifying skull base and lamina papyracea.",
           "Sphenoidotomy (ostium medial to the superior turbinate); frontal recess last as needed."
        ],
        "dangerStructures": "Lamina papyracea/orbit (medial rectus, optic nerve), skull base at the cribriform/fovea (CSF leak), the anterior ethmoid artery, which can run in a mesentery below the skull base rather than always within bone, which is exactly why it retracts into the orbit when transected, and the carotid in the lateral sphenoid wall.",
        "pearl": "Suspected clear rhinorrhea: send fluid for beta-2 transferrin, the most specific test for CSF."
     },
     {
        "id": "epistaxis",
        "title": "Epistaxis control",
        "subspecialty": "Rhinology & Skull Base",
        "scenario": "A 60-year-old on apixaban with 45 minutes of brisk bleeding, spitting blood, and no anterior source after decongestion.",
        "decisionPoints": [
           "Anterior vs. posterior: failure of firm compression plus posterior bleeding or no visible anterior source suggests a posterior (sphenopalatine) bleed.",
           "Escalate: topical vasoconstrictor, then cautery of a seen source, then anterior/posterior packing, then sphenopalatine artery (SPA) ligation or embolization.",
           "Transnasal endoscopic sphenopalatine artery ligation (TESPAL) is favored over repeat packing: the AAO-HNS Nosebleed guideline cites up to ~98% success with a low (~3.4%) postoperative hemorrhage rate, though pooled meta-analysis data report rebleed rates as high as ~13%.",
           "Correct the coagulopathy and check hemodynamics; posterior packs need monitoring for airway compromise and hypoxia."
        ],
        "keySteps": [
           "Firm compression of the lower-third nose for about 15 minutes leaning forward, plus topical oxymetazoline.",
           "Anterior rhinoscopy/endoscopy after decongestion to localize the source.",
           "Silver nitrate or electrocautery of a visualized anterior source (avoid bilateral septal cautery).",
           "Anterior packing if diffuse; add posterior packing for posterior bleeds.",
           "Endoscopic sphenopalatine artery ligation, or IR embolization, for refractory bleeding."
        ],
        "dangerStructures": "Sphenopalatine artery (posterior source), anterior and posterior ethmoid arteries (skull base, can retract into the orbit). <strong>Ethmoid artery embolization is contraindicated</strong>: they arise from the ophthalmic artery, so embolization risks blindness; refractory ethmoidal bleeds need surgical ligation, not IR. Also watch the septal cartilage (perforation with bilateral cautery).",
        "pearl": "Unilateral recurrent epistaxis with obstruction in an adolescent male suggests juvenile nasopharyngeal angiofibroma: image it, do not biopsy in clinic."
     },
     {
        "id": "tsa",
        "title": "Transsphenoidal hypophysectomy",
        "subspecialty": "Rhinology & Skull Base",
        "scenario": "A 52-year-old with bitemporal hemianopia and a 2.2 cm sellar mass compressing the optic chiasm; labs confirm a nonfunctioning adenoma.",
        "decisionPoints": [
           "Preop workup: morning hormone panel (prolactin, IGF-1, ACTH/cortisol, TSH/free T4, FSH/LH) plus formal visual field testing.",
           "Indication: mass effect (visual loss, chiasmal compression) with extrasellar extension.",
           "Prolactinomas are treated medically first, not surgically; by contrast, Cushing disease and acromegaly require surgery even when the adenoma is small.",
           "Border structures: carotids laterally, optic nerves/chiasm superiorly, cavernous sinus (CN III, IV, V1, V2, VI) laterally."
        ],
        "keySteps": [
           "Endoscopic transnasal approach; preserve superior turbinate/septal mucosa to spare olfaction.",
           "Posterior septectomy/sphenoethmoidectomy to widen the corridor.",
           "Wide sphenoidotomy; remove septations to expose the sella.",
           "Open the sellar floor; X-shaped durotomy.",
           "Intradural resection; reconstruct with fat graft and nasoseptal flap."
        ],
        "dangerStructures": "Internal carotid arteries (lateral sphenoid wall), optic nerves/chiasm (superolateral), cavernous sinus contents, and the diaphragma sellae (CSF leak).",
        "pearl": "Watch the endocrine course: transient diabetes insipidus (DI) is the most common early problem (peaks POD 1–2, usually resolves by ~day 11); delayed hyponatremia (SIADH) classically nadirs around POD 7–10 and is a leading driver of readmission; CSF leak is the most common surgical complication."
     },
     {
        "id": "vocalfold",
        "title": "Flexible laryngoscopy & vocal fold surgery",
        "subspecialty": "Laryngology",
        "scenario": "A 30-year-old teacher with 3 months of hoarseness; scope shows symmetric bilateral lesions at the anterior/middle-third junction.",
        "decisionPoints": [
           "Diagnosis: vocal fold nodules (bilateral, at the point of maximal contact, from overuse).",
           "Videostroboscopy is the key office assessment before the OR: it evaluates the mucosal wave and identifies whether a lesion is epithelial vs. involves the deeper lamina propria, which changes the operative plan (microflap vs. simple excision) more than a white-light scope alone.",
           "Optimize reflux and vocal hygiene first; many nodules and mild lesions improve with voice therapy alone over 6–12 weeks, avoiding surgery entirely.",
           "Contrast with a paramedian immobile cord (recurrent laryngeal nerve, RLN, injury) or a unilateral polyp/cyst."
        ],
        "keySteps": [
           "Suspension microlaryngoscopy under GA (or awake injection for medialization).",
           "Assess the lesion and vibratory margin with a rigid endoscope and microscope.",
           "For a benign lesion: raise a subepithelial microflap, preserving the vocal ligament and superficial lamina propria.",
           "Excise with cold instruments, preferred over laser for benign disease: cold-steel microflap avoids thermal injury to the superficial lamina propria (Reinke's space); laser is reserved for select vascular lesions/papilloma, not routine benign lesions.",
           "For glottic insufficiency: inject a medialization material lateral to the vocalis until midline closure."
        ],
        "dangerStructures": "The layered lamina propria and vocal ligament (over-resection causes scar); the anterior commissure: avoid operating on both folds there in the same setting, since opposing raw surfaces cause an anterior glottic web (stage bilateral lesions if needed); and the superior laryngeal nerve (SLN) bundle in the supraglottic danger triangle during CO2 laser work.",
        "pearl": "Breathy hoarseness with a paramedian fixed cord after neck/thyroid surgery points to recurrent laryngeal nerve (RLN) injury; a normal-appearing cord with loss of pitch/projection and vocal fatigue points to external branch of the superior laryngeal nerve (SLN) injury (cricothyroid weakness). Both can follow thyroid/neck surgery."
     },
     {
        "id": "tonsils",
        "title": "Tonsillectomy & adenoidectomy",
        "subspecialty": "Head & Neck",
        "scenario": "A 6-year-old with loud snoring, witnessed apneas, and 3+ obstructing tonsils.",
        "decisionPoints": [
           "Two classic indications: obstructive sleep-disordered breathing/OSA, and recurrent infection by Paradise criteria (7 in 1 year, 5/year for 2 years, or 3/year for 3 years).",
           "For the obstructive/OSA indication, intracapsular tonsillectomy (tonsillotomy) gives comparable obstructive outcomes with less pain and substantially lower post-tonsillectomy hemorrhage, at a small regrowth risk (~2–15%); extracapsular (total) tonsillectomy is preferred when recurrent/chronic infection is the driver.",
           "Screen for a submucous cleft or bifid uvula before adenoidectomy (velopharyngeal insufficiency risk).",
           "Perioperative essentials (AAO-HNS): single intraoperative IV dexamethasone (~0.5 mg/kg) reduces nausea/vomiting; no routine prophylactic antibiotics; scheduled acetaminophen +/- ibuprofen; codeine is contraindicated post-T&A.",
           "Admit high-risk children: age <3, severe OSA, or significant comorbidity → postoperative overnight monitoring for respiratory compromise."
        ],
        "keySteps": [
           "Oral Ring-Adair-Elwyn (RAE) tube; place the mouth gag; confirm the airway and tongue are not compressed.",
           "Retract the tonsil medially; incise mucosa over the superior pole.",
           "Develop the plane between capsule and pharyngeal muscle (extracapsular), or debride to the capsule (intracapsular).",
           "Dissect superior to inferior; remove at the inferior pole.",
           "Hemostasis in the fossa; adenoidectomy by curettage, suction cautery, or microdebrider."
        ],
        "dangerStructures": "The tonsillar branch of the facial artery and the internal carotid artery (ICA) lateral to the fossa, the pharyngeal muscle, and (during adenoidectomy) the Eustachian tube orifices and velopharynx.",
        "pearl": "A post-tonsillectomy bleed can be catastrophic: ABCs, IV access, type and screen, and return to OR for brisk bleeding. Secondary bleeds classically occur days 5–10 (eschar sloughs); overall post-tonsillectomy hemorrhage (PTH) rate is ~4%. Any PTH is an ABC/return-to-OR consideration even without active bleeding on exam, since a herald bleed can precede catastrophic hemorrhage."
     },
     {
        "id": "thyroid",
        "title": "Thyroidectomy",
        "subspecialty": "Head & Neck",
        "scenario": "A 48-year-old with a 2.5 cm TR4 nodule, Bethesda V on FNA; total thyroidectomy planned.",
        "decisionPoints": [
           "Nerves at risk: recurrent laryngeal nerve (RLN) (near the inferior thyroid artery and ligament of Berry) and the external branch of the superior laryngeal nerve (SLN).",
           "Find the RLN in the tracheoesophageal (TE) groove within Beahrs' triangle; the tubercle of Zuckerkandl points to it.",
           "Intraoperative nerve monitoring (IONM, endotracheal-tube based) is widely used to map and confirm RLN integrity; a loss of signal on the first side may prompt staging the contralateral lobectomy to avoid bilateral RLN injury/airway catastrophe: not a substitute for anatomic dissection.",
           "Anticipate transient hypocalcemia: check calcium/PTH; watch for perioral numbness and Chvostek/Trousseau signs."
        ],
        "keySteps": [
           "Curvilinear incision two fingerbreadths above the sternal notch; divide platysma; separate straps in the midline.",
           "Rotate the lobe medially; ligate the middle thyroid vein.",
           "Take the superior pole close to the capsule to protect the external SLN branch.",
           "Identify and preserve both parathyroids with their blood supply; if one is devascularized or inadvertently removed, confirm it is parathyroid (not cancer) by frozen section, then autotransplant into the SCM or strap muscle: inspect the specimen before it leaves the field to salvage glands.",
           "Trace the RLN in the TE groove; reidentify it at Berry's ligament and dissect off the trachea; repeat contralaterally."
        ],
        "dangerStructures": "RLN (especially at Berry's ligament and near the inferior thyroid artery), external branch of the SLN (superior pole), the parathyroids and their pedicles, the trachea/esophagus, and a postoperative neck hematoma: an expanding neck hematoma with airway compromise is a bedside emergency: open the wound/evacuate the clot immediately, before returning to the OR.",
        "pearl": "Postoperative stridor and airway obstruction on extubation suggests bilateral RLN injury: be ready to reintubate or perform tracheostomy. Postoperative hypocalcemia is the most common cause of prolonged stay; PTH-directed calcium/vitamin D supplementation after total thyroidectomy reduces symptomatic hypocalcemia."
     },
     {
        "id": "parotid",
        "title": "Parotidectomy & neck dissection",
        "subspecialty": "Head & Neck",
        "scenario": "A 55-year-old with a slow-growing painless mass at the mandibular angle, intact facial nerve, FNA suggesting pleomorphic adenoma.",
        "decisionPoints": [
           "Most common benign parotid tumor is pleomorphic adenoma (Warthin is second, bilateral, smokers); mucoepidermoid is the most common malignancy.",
           "Tell anesthesia to avoid muscle relaxants so the facial nerve can be stimulated/monitored throughout.",
           "Counsel on Frey syndrome (gustatory sweating) as a delayed complication."
        ],
        "keySteps": [
           "Modified Blair incision; raise a thick skin–SMAS (superficial musculoaponeurotic system) flap: and consider SMAS reapproximation, which lowers both skin necrosis and Frey syndrome rates.",
           "Identify the great auricular nerve and external jugular vein; free the parotid tail from the SCM.",
           "Locate the facial nerve main trunk at the standard landmarks (tragal pointer, tympanomastoid suture, posterior belly of digastric): it lies ~1 cm deep and inferior to the tragal pointer, with the retromandibular vein and external carotid artery running deep to the nerve (dissection deep to those vessels, e.g. for deep-lobe tumors, is safe for the nerve).",
           "Dissect the branches anteriorly, separating superficial from deep lobe along the nerve plane.",
           "Remove the tumor with a cuff of normal gland; confirm nerve integrity with a stimulator; close over a drain."
        ],
        "dangerStructures": "Facial nerve (trunk and branches, especially marginal mandibular), the retromandibular vein and external carotid within the gland, the great auricular nerve, and the auriculotemporal nerve (Frey syndrome: aberrant reinnervation of skin sweat glands by severed parasympathetic fibers; confirmed with Minor's starch-iodine test).",
        "pearl": "A cystic neck mass in a middle-aged adult is metastatic HPV-associated oropharyngeal SCC until proven otherwise: do FNA and imaging, never assume a branchial cleft cyst."
     },
     {
        "id": "nasalfx",
        "title": "Facial trauma & nasal fracture",
        "subspecialty": "Facial Plastics",
        "scenario": "A 22-year-old after a sports injury with a deformed swollen nose, epistaxis, and a bluish boggy septal swelling.",
        "decisionPoints": [
           "Rule out first: septal hematoma (drain urgently) and CSF rhinorrhea (beta-2 transferrin).",
           "Untreated septal hematoma leads to cartilage necrosis and saddle-nose deformity.",
           "Nasal fracture diagnosis is clinical; plain nasal X-rays add little and can mislead. CT only when concomitant facial fractures (orbit, naso-orbito-ethmoid (NOE), midface) or CSF leak are suspected.",
           "For orbital trauma, check enophthalmos, diplopia on upgaze, and infraorbital hypesthesia (blowout fracture)."
        ],
        "keySteps": [
           "Inspect intranasally for septal hematoma; if present, incise, drain, and quilt/pack to prevent reaccumulation.",
           "Time the closed reduction: reduce before swelling sets in, or after swelling subsides: ~3–5 days in children, up to 7–10 days (some say 14) in adults, before fragments fixate.",
           "Anesthetize (local or general).",
           "Reduce the nasal bones with a Boies elevator plus external molding.",
           "Reduce the septum; apply internal and external splints."
        ],
        "dangerStructures": "The septal cartilage blood supply (necrosis and saddle-nose from untreated hematoma), the cribriform plate (CSF leak), and the medial canthal/lacrimal apparatus in naso-orbito-ethmoid injury. Red flag: a widened intercanthal distance or a flattened/splayed nasal bridge suggests an NOE fracture with medial canthal tendon disruption (bowstring test): refer, do not treat as a simple nasal fracture.",
        "pearl": "A child with an orbital trapdoor fracture and bradycardia/nausea (oculocardiac reflex from muscle entrapment) is a surgical urgency, not a delayed repair. Refer to a subspecialist for: septal hematoma, CSF rhinorrhea, malocclusion, or an extraocular movement deficit."
     },
     {
        "id": "pedairway",
        "title": "Pediatric airway (direct laryngoscopy & bronchoscopy)",
        "subspecialty": "Pediatric",
        "scenario": "A 4-month-old with inspiratory stridor since birth, worse supine and with feeding, better prone; growth is adequate.",
        "decisionPoints": [
           "Most likely laryngomalacia, the most common cause of infant stridor, usually self-resolving.",
           "The narrowest part of the pediatric airway is the subglottis (cricoid ring).",
           "Distinguish emergent mimics: croup (steeple sign), epiglottitis (thumbprint sign, do not agitate), foreign body (unilateral wheeze, air trapping)."
        ],
        "keySteps": [
           "Shared airway plan with anesthesia; maintain spontaneous ventilation.",
           "Awake flexible laryngoscopy to assess dynamic collapse.",
           "Direct laryngoscopy/rigid bronchoscopy of the supraglottis, glottis, subglottis, and trachea.",
           "Treat pathology (supraglottoplasty for severe laryngomalacia; retrieve a foreign body with optical forceps).",
           "Reassess for a synchronous second airway lesion."
        ],
        "dangerStructures": "The subglottis (cricoid, post-procedure edema/stenosis), the true vocal folds, the teeth and lips, and friable mucosa; for foreign bodies, distal migration and complete obstruction.",
        "pearl": "An esophageal button battery is a true emergency: liquefactive necrosis within hours mandates emergent removal."
     },
     {
        "id": "uppp",
        "title": "OSA surgery (UPPP)",
        "subspecialty": "Sleep/Airway",
        "scenario": "A 50-year-old with moderate OSA (AHI 28) who cannot tolerate CPAP and asks about surgery.",
        "decisionPoints": [
           "Severity by AHI: mild 5 to 15, moderate 15 to 30, severe over 30.",
           "CPAP is first-line; surgery is for intolerance/failure or a specific anatomic obstruction.",
           "Drug-induced sleep endoscopy (DISE) identifies the level(s) of collapse to tailor surgery."
        ],
        "keySteps": [
           "Orotracheal intubation and mouth-gag exposure.",
           "Tonsillectomy if tonsils are present.",
           "Trim and reposition the posterior tonsillar pillar.",
           "Conservatively excise redundant soft palate/uvular mucosa (avoid over-resection).",
           "Suture the pillars/flaps to widen the retropalatal airway; confirm an adequate velopharyngeal port."
        ],
        "dangerStructures": "The velopharynx (over-resection causes velopharyngeal insufficiency and nasopharyngeal stenosis), the great vessels lateral to the fossa, and postoperative airway edema.",
        "pearl": "OSA patients are high-risk perioperatively (sensitivity to sedatives/opioids, difficult airway, postoperative respiratory depression): minimize opioids and monitor closely."
     },
     {
        "id": "hgns",
        "title": "Hypoglossal nerve stimulator (HGNS)",
        "subspecialty": "Sleep/Airway",
        "scenario": "The same CPAP-intolerant patient has moderate-to-severe OSA, an eligible BMI, and DISE showing anteroposterior tongue-base collapse without complete concentric palatal collapse.",
        "decisionPoints": [
           "Candidacy (STAR trial / FDA labeling): moderate-to-severe OSA with AHI 15–65, CPAP failure/intolerance, BMI ≤32 (some payers allow <35), central/mixed apneas <25% of total events, and absence of complete concentric palatal collapse on DISE (an absolute contraindication).",
           "Mechanism: inspiration-synchronized stimulation of the protrusor branches of CN XII (hypoglossal nerve) advances the tongue via genioglossus.",
           "Branch selection is the crux: include the medial (protrusor) division, exclude the lateral (retractor) division and the C1 twig."
        ],
        "keySteps": [
           "Place EMG electrodes in the tongue; map the three incisions.",
           "Submandibular incision about one fingerbreadth below the mandible to reach CN XII.",
           "Isolate CN XII; use neurostimulation to confirm protrusor (medial) branches and exclude retractor fibers; place the cuff.",
           "Create an infraclavicular pocket for the pulse generator.",
           "Place the respiratory sensing lead between the intercostal muscles; tunnel, connect, and test before closure."
        ],
        "dangerStructures": "The lateral (retractor) branch of CN XII and the C1 twig (exclude from the cuff), Wharton's duct and the lingual vein, the marginal mandibular nerve, the external jugular vein, and the pleura (sensing lead).",
        "pearl": "Intraoperative EMG confirms capture: medial-branch stimulation protrudes the tongue, lateral-branch stimulation retracts it; the cuff sits superficial to the hyoglossus where the fibers separate."
     },
     {
        "id": "trach",
        "title": "Tracheostomy",
        "subspecialty": "Cross-Cutting",
        "scenario": "A ventilated ICU patient 4 days after tracheostomy suddenly desaturates and the tube looks partially dislodged during repositioning.",
        "decisionPoints": [
           "Is the tract mature? No: maturation takes about 5 to 7 days, so do not blindly reinsert an immature tube.",
           "Secure the airway from above: orally intubate or bag-mask as needed and call for help.",
           "Beware a false passage into pretracheal tissue: confirm intraluminal placement with capnography or bronchoscopy."
        ],
        "keySteps": [
           "Extend the neck; horizontal incision midway between cricoid and sternal notch.",
           "Divide platysma; separate the straps in the midline.",
           "Retract or divide the thyroid isthmus to expose the trachea.",
           "Identify the cricoid and rings; place a cricoid hook and stay sutures.",
           "Enter between the 2nd–3rd (or 3rd–4th) rings; insert the tube; confirm with capnography; secure."
        ],
        "dangerStructures": "The thyroid isthmus, anterior jugular veins, the innominate artery low in the neck (tracheo-innominate fistula), the esophagus/posterior tracheal wall, and the RLNs in the TE grooves.",
        "pearl": "A herald sentinel bleed from a trach signals a possible tracheo-innominate fistula: hyperinflate the cuff or apply digital compression (Utley maneuver) and go emergently to OR. The most common cause of acute distress overall is a mucus plug."
     },
     {
        "id": "pta",
        "title": "Peritonsillar abscess (incision & drainage)",
        "subspecialty": "Head & Neck",
        "scenario": "A 19-year-old with several days of worsening sore throat, now with a muffled \"hot-potato\" voice, trismus, drooling, and uvular deviation to the contralateral side.",
        "decisionPoints": [
           "Clinical diagnosis: the most common deep head & neck infection in young adults; unilateral bulging soft palate with uvular deviation and trismus.",
           "Trismus distinguishes PTA from simple tonsillitis and reflects pterygoid irritation.",
           "Confirm/aspirate: needle aspiration is both diagnostic and therapeutic; intraoral ultrasound (or CT if the exam is limited by trismus) differentiates phlegmon/cellulitis from a drainable collection and maps the carotid.",
           "Drainage options: needle aspiration, incision & drainage, or quinsy tonsillectomy: plus antibiotics covering Group A Strep and oral anaerobes (e.g., amoxicillin-clavulanate or clindamycin) and a single dose of steroids.",
           "Admit if unable to tolerate oral intake, airway concern, immunocompromise, or signs of spread."
        ],
        "keySteps": [
           "Topical +/- injected local anesthetic to the soft palate.",
           "Aspirate the point of maximal fluctuance, at or just superior to the superior tonsillar pole.",
           "Guard the needle depth (tape/needle cover) to avoid plunging laterally toward the carotid.",
           "If pus returns, either repeat aspiration or make a stab incision and spread with a clamp.",
           "Start antibiotics and steroids; confirm oral intake before discharge."
        ],
        "dangerStructures": "The internal carotid artery lies ~2–2.5 cm posterolateral to the tonsil: aspirate medially and never deep/lateral; aspiration depth should not exceed ~1 cm. Also the great vessels and the airway in a drooling, trismic patient.",
        "pearl": "A patient who cannot tolerate secretions, has stridor, or has rapidly worsening trismus may have spread to the parapharyngeal space: get imaging and escalate, do not just drain at the bedside."
     },
     {
        "id": "dnsi",
        "title": "Deep neck space infection / Ludwig angina",
        "subspecialty": "Head & Neck",
        "scenario": "A 48-year-old with poorly controlled diabetes and a recent lower molar infection presents with bilateral submandibular swelling, a firm \"woody\" floor of mouth, tongue elevation, drooling, and early stridor.",
        "decisionPoints": [
           "Airway first, always: Ludwig angina is a rapidly progressive, bilateral cellulitis of the submandibular/sublingual spaces that pushes the tongue up and back: the threat is airway loss, not the abscess.",
           "Secure the airway early with the most experienced operator; awake fiberoptic intubation or a planned surgical airway (tracheostomy) is often preferred over conventional laryngoscopy, which may fail.",
           "Identify the source (odontogenic in most Ludwig cases; tonsillar/pharyngeal, salivary, or foreign body for other spaces).",
           "Contrast-enhanced CT neck defines the space(s) involved, drainable collections, and complications (mediastinitis, internal jugular thrombosis/Lemierre, carotid involvement).",
           "Broad-spectrum IV antibiotics covering Strep, oral anaerobes, and (in diabetics/immunocompromised) gram-negatives; urgent surgical drainage for a defined collection or clinical deterioration."
        ],
        "keySteps": [
           "Assess and secure the airway; prepare for surgical airway.",
           "Resuscitate; start empiric broad-spectrum IV antibiotics; control glucose.",
           "Obtain contrasted CT once the airway is safe.",
           "Incision & drainage of involved spaces (external cervical approach for submandibular/parapharyngeal), with cultures.",
           "Address the source (e.g., dental extraction); monitor in a high-acuity setting for descent to the mediastinum."
        ],
        "dangerStructures": "The airway (loss from floor-of-mouth/tongue elevation), the carotid sheath (carotid blowout, internal jugular thrombosis), descent via the retropharyngeal/\"danger\" space to the mediastinum (mediastinitis), and the marginal mandibular nerve during external drainage.",
        "pearl": "Do not lie these patients flat or over-sedate them: positional airway collapse can be fatal. Trismus plus floor-of-mouth induration plus a muffled voice is an airway emergency until proven otherwise."
     },
     {
        "id": "tgdc",
        "title": "Thyroglossal duct cyst (Sistrunk procedure)",
        "subspecialty": "Head & Neck",
        "scenario": "A 7-year-old with a painless midline anterior neck mass at the level of the hyoid that elevates with tongue protrusion and swallowing, occasionally enlarging after upper respiratory infections.",
        "decisionPoints": [
           "Diagnosis: the most common congenital midline neck mass; classically moves with tongue protrusion/swallowing because of its tract to the foramen cecum.",
           "Confirm a normal, orthotopic thyroid before excision: ultrasound (the cyst can rarely contain the only functioning thyroid tissue; removing it would render the patient hypothyroid).",
           "Operation of choice is the Sistrunk procedure, not simple cystectomy: excising the central hyoid body and the tract to the tongue base dramatically lowers recurrence.",
           "Treat any active infection first; operate when quiescent.",
           "Consider malignancy (papillary thyroid carcinoma) rarely in adults with suspicious features."
        ],
        "keySteps": [
           "Transverse cervical incision over the cyst; raise subplatysmal flaps.",
           "Dissect the cyst free, tracing the tract superiorly toward the hyoid.",
           "Resect the central portion of the hyoid body in continuity with the tract (the defining step of Sistrunk).",
           "Follow a core of suprahyoid muscle up toward the foramen cecum and ligate the tract at the tongue base.",
           "Close in layers over a drain if needed."
        ],
        "dangerStructures": "The hypoglossal and superior laryngeal nerves lateral to the dissection, the larynx/airway, and incomplete tract removal (the cause of recurrence). Preserve a normally positioned thyroid.",
        "pearl": "Always image the thyroid before excising a midline cyst: never remove a patient's only functioning thyroid tissue. Simple cystectomy without hyoid resection has a high recurrence rate; the Sistrunk procedure is the standard of care."
     }
  ]
 },
 "cards": [
  {
   "id": "pr-tubes-otorrhea",
   "tags": ["PR", "clinical"],
   "front": "First-line treatment for tympanostomy tube otorrhea?",
   "back": "<strong>Ototopical fluoroquinolone drops</strong>, not systemic antibiotics (higher local concentration, non-ototoxic).",
   "source": "2-Minute Procedure Prep."
  },
  {
   "id": "pr-myringotomy-quadrant",
   "tags": ["PR", "clinical"],
   "front": "Which tympanic membrane quadrant is used for myringotomy, and why?",
   "back": "<strong>Anteroinferior</strong>, away from the ossicles and chorda tympani (posterosuperior) and the jugular bulb (posteroinferior floor).",
   "source": "2-Minute Procedure Prep."
  },
  {
   "id": "pr-chole-fistula",
   "tags": ["PR", "clinical"],
   "front": "What is the cause of new vertigo with a positive fistula test in cholesteatoma?",
   "back": "Suggests a <strong>labyrinthine fistula</strong> (lateral semicircular canal), a red flag that changes surgical planning.",
   "source": "2-Minute Procedure Prep."
  },
  {
   "id": "pr-csf-test",
   "tags": ["PR", "clinical"],
   "front": "What is the most specific test for suspected CSF rhinorrhea after sinus or skull-base surgery?",
   "back": "<strong>Beta-2 transferrin</strong> on the fluid.",
   "source": "2-Minute Procedure Prep."
  },
  {
   "id": "pr-jna",
   "tags": ["PR", "clinical"],
   "front": "In an adolescent male with unilateral recurrent epistaxis and nasal obstruction, what is the next step?",
   "back": "Suspect <strong>juvenile nasopharyngeal angiofibroma</strong>: image it, do NOT biopsy in clinic.",
   "source": "2-Minute Procedure Prep."
  },
  {
   "id": "pr-tsa-di",
   "tags": ["PR", "clinical"],
   "front": "What is the most common early endocrine problem after transsphenoidal pituitary surgery?",
   "back": "Transient <strong>diabetes insipidus</strong>; delayed hyponatremia (SIADH) around days 5 to 9 drives readmissions.",
   "source": "2-Minute Procedure Prep."
  },
  {
   "id": "pr-nodules",
   "tags": ["PR", "clinical"],
   "front": "First-line management of vocal fold nodules?",
   "back": "<strong>Voice therapy</strong>, not surgery (they are bilateral overuse lesions).",
   "source": "2-Minute Procedure Prep."
  },
  {
   "id": "pr-paradise",
   "tags": ["PR", "clinical"],
   "front": "What are the Paradise criteria for recurrent tonsillitis?",
   "back": "<strong>7 in 1 year, 5/year for 2 years, or 3/year for 3 years.</strong>",
   "source": "2-Minute Procedure Prep."
  },
  {
   "id": "pr-post-tonsil-bleed",
   "tags": ["PR", "clinical"],
   "front": "When do secondary post-tonsillectomy bleeds classically occur?",
   "back": "<strong>Postoperative days 5 to 10.</strong> Manage with ABCs, IV access, type and screen, and OR for brisk bleeding.",
   "source": "2-Minute Procedure Prep."
  },
  {
   "id": "pr-bilat-rln",
   "tags": ["PR", "clinical"],
   "front": "What is the cause of stridor and airway obstruction immediately after extubation from thyroidectomy?",
   "back": "<strong>Bilateral RLN injury</strong>; be ready to reintubate or perform tracheostomy.",
   "source": "2-Minute Procedure Prep."
  },
  {
   "id": "pr-parotid-tumor",
   "tags": ["PR", "clinical"],
   "front": "What are the most common benign and most common malignant parotid tumors?",
   "back": "Benign: <strong>pleomorphic adenoma</strong>. Malignant: <strong>mucoepidermoid carcinoma</strong>.",
   "source": "2-Minute Procedure Prep."
  },
  {
   "id": "pr-septal-hematoma",
   "tags": ["PR", "clinical"],
   "front": "Why is a septal hematoma an emergency?",
   "back": "Untreated, it causes <strong>cartilage necrosis and saddle-nose deformity</strong> (cartilage depends on the overlying mucoperichondrium). Drain urgently.",
   "source": "2-Minute Procedure Prep."
  },
  {
   "id": "pr-button-battery",
   "tags": ["PR", "clinical"],
   "front": "How urgently must an esophageal button battery be removed?",
   "back": "<strong>True emergency</strong>: liquefactive necrosis within hours mandates emergent removal.",
   "source": "2-Minute Procedure Prep."
  },
  {
   "id": "pr-ti-fistula",
   "tags": ["PR", "clinical"],
   "front": "What should a sentinel bleed from a tracheostomy make you suspect?",
   "back": "Possible <strong>tracheo-innominate fistula</strong>: hyperinflate the cuff or apply digital compression (Utley maneuver) and go emergently to OR.",
   "source": "2-Minute Procedure Prep."
  },
  {
   "id": "pr-hgns-emg",
   "tags": ["PR", "clinical"],
   "front": "What does intraoperative EMG confirm during HGNS implantation?",
   "back": "Correct capture: <strong>medial-branch</strong> stimulation protrudes the tongue (include), <strong>lateral-branch</strong> stimulation retracts it (exclude).",
   "source": "2-Minute Procedure Prep."
  }
 ]
}
);

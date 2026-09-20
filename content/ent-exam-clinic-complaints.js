/* ent-exam-clinic-complaints.js, FOUNDATIONS (cross-cutting core)
 *
 * The foundational layer for the ENT rotation: examination & practical skills,
 * core investigations, an "approach-to" framework for every cardinal complaint,
 * all ENT emergencies/red flags, and the six-competency items. Disease-specific
 * DEPTH lives in the subspecialty tracks (Otology, Rhinology, …), not here.
 *
 * SCOPE anchor: UKMLA Content Map (GMC), every card/case declares a `ukmla`
 * item (content/ukmla.js). DEPTH anchor: UK undergraduate ENT Delphi (Lloyd
 * 2014), AAO-HNS/OHSU medical-student curricula. TAGS: ACGME Otolaryngology
 * Milestones 2.0 (content/frameworks.js). CONTENT: written to US practice
 * standards (AAO-HNSF clinical practice guidelines and other named sources);
 * notable UK/US differences are flagged inline. See docs/MODULE-BUILD-STANDARD.md.
 *
 * STATUS: DRAFT, every item pending JeffENT faculty review. Set `reviewer`/`facultyReviewer`
 * and check the coverage box in MODULE-BUILD-STANDARD.md as each is signed off.
 */
window.JEFFENT.register({
  id: "ent-exam",
  track: "foundations",
  trackName: "Foundations",
  trackAbbr: "FN",
  order: 1,
  title: "Foundations: Exam, Approach & Emergencies",
  subtitle: "",
  version: "0.6.0-draft",
  level: ["core", "sub-I"],
  status: "DRAFT, pending faculty review. 100% UKMLA ENT-item coverage reached (see docs/MODULE-BUILD-STANDARD.md coverage matrix); every card carries a UKMLA scope tag, an ACGME Milestone tag, and a named source. v0.4.0: incorporated an OpenEvidence clinical-coverage review, added high-volume 'bread-and-butter' conditions (AOM/OME, cerumen impaction, tonsillectomy indications, thyroid nodule workup, TM perforation after trauma) and corrected several statements against current AAO-HNS guidance (sudden SNHL steroid framing, epistaxis first aid, Bell's palsy treatment, neck-mass FNA sequence). v0.5.0: closed two narrow but genuinely missing safety topics found on a systematic cross-file check, the classic ototoxic drug classes (previously only named as a bare category, never unpacked) and the emergency surgical airway (cricothyroidotomy indication/landmark, previously only alluded to). Rhinology/sinus and Head & Neck Oncology received a larger depth pass in the same session (allergy/rhinitis, EBV/nasopharyngeal disease, salivary spectrum, neck dissection), Foundations already had full UKMLA coverage and a recent OpenEvidence review, so its remaining gaps were narrow by comparison. v0.5.1: OpenEvidence-verified correction pass (user-reviewed, not faculty sign-off): clarified CN VII's true skull-base exit (stylomastoid foramen) in the Cranial nerves table; added topical TXA as an epistaxis escalation adjunct (case-epistaxis, epistaxis card); harmonized neck nodal-level references to note level VII (ENT regions bullet, exam-flow, neck-levels card); reworded allergic-rhinitis card to ARIA intermittent/persistent language; added AOM immediate-antibiotic triggers to aom-ome-basics.",
  facultyReviewer: "",
  curriculumAnchors: [
    "UKMLA Content Map (GMC), scope anchor; every card/case tagged `ukmla` (content/ukmla.js)",
    "ACGME Otolaryngology-HNS Milestones 2.0, per-card tags (see content/frameworks.js)",
    "ACGME 6 core competencies, Foundations spans all six",
    "AAO-HNS Otolaryngology Core Curriculum (OCC), sequencing / outcome comparator",
    "UK undergraduate Delphi (Lloyd 2014) + AAO-HNS/OHSU medical-student curricula, student scope",
    "Content written to US practice standards (named AAO-HNSF/specialty-society sources); UK/US differences flagged inline"
  ],
  frameworkAlignment: {
    competenciesCovered: ["PC", "MK", "ICS", "Prof", "SBP", "PBLI"],
    note: "Cross-cutting core at student scope (Delphi); each card's milestones tag maps to ACGME Milestones 2.0 and its ukmla tag maps to the UKMLA Content Map. Deeper disease content lives in the subspecialty tracks."
  },

  /* ==================== ANATOMY TAB ==================== */
  anatomy: {
    notes: [
      {
        title: "The ENT regions at a glance",
        tagline: "Five ENT regions",
        html: "<div class=\"fig-row\"><figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/ENT_regions_glance.png' alt='ENT regions glance' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Overview map of the five linked ENT anatomical regions (ear, nose/sinuses, oral cavity/pharynx, larynx, neck).</figcaption></figure></div><p>ENT anatomy breaks down into five linked regions.</p>" +
          "<div class='tbl-scroll'><table><thead><tr><th>Region</th><th>Key structures</th><th>High-yield pathologies</th></tr></thead><tbody>" +
          "<tr><td><strong><a class='xref' data-mod='otology-ear' data-tab='anatomy'>Ear</a></strong></td><td>Auricle (pinna) and external auditory canal; tympanic membrane; ossicles (malleus, incus, stapes); Eustachian tube; cochlea, vestibule, semicircular canals; CN VII and CN VIII</td><td>AOM/OME, cholesteatoma, otosclerosis, sudden SNHL, vestibular schwannoma, BPPV</td></tr>" +
          "<tr><td><strong><a class='xref' data-mod='rhinology-sinus' data-tab='anatomy'>Nose & paranasal sinuses</a></strong></td><td>Septum; inferior/middle/superior turbinates and their meatuses; frontal, ethmoid, maxillary, and sphenoid sinuses; ostiomeatal complex; cribriform plate</td><td>Epistaxis, chronic rhinosinusitis, nasal polyps, CSF leak, sinonasal malignancy</td></tr>" +
          "<tr><td><strong><a class='xref' data-mod='head-neck-oncology' data-tab='anatomy'>Oral cavity & pharynx</a></strong></td><td>Tongue and floor of mouth; palatine, lingual, and pharyngeal (adenoid) tonsils (Waldeyer's ring); soft and hard palate; naso-, oro-, and hypopharynx</td><td>Tonsillitis / peritonsillar abscess, OSA, oropharyngeal (HPV-related) cancer, nasopharyngeal carcinoma</td></tr>" +
          "<tr><td><strong><a class='xref' data-mod='laryngology-voice-airway' data-tab='anatomy'>Larynx</a></strong></td><td>Epiglottis; thyroid and cricoid cartilages; true and false vocal folds; recurrent laryngeal and superior laryngeal nerves</td><td>Laryngitis, vocal-fold paralysis, laryngeal cancer, epiglottitis, croup</td></tr>" +
          "<tr><td><strong><a class='xref' data-mod='head-neck-oncology' data-tab='anatomy'>Neck</a></strong></td><td>Anterior/posterior triangles (sternocleidomastoid); nodal levels I-VII; thyroid, parotid, and submandibular glands</td><td>Malignant neck mass, thyroid nodule, sialadenitis/salivary stones, deep neck space infection</td></tr>" +
          "</tbody></table></div>" +
          "<p>The <strong>nasal septum</strong> divides the nasal cavity in the midline; the <strong>meatuses</strong> are the grooves beneath each turbinate that the sinuses drain into. The <strong>salivary glands</strong> (parotid, submandibular, sublingual, plus hundreds of minor glands) sit at the crossroads of the oral cavity and neck. The <strong>epiglottis</strong> is the cartilage leaf that folds down to protect the airway on swallowing -- the hinge between the pharynx above and the larynx below.</p>"
      },
      {
        title: "Cranial nerves",
        tagline: "Cranial nerves · Skull-base exit · Function",
        html: "<div class=\"fig-row\"><figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/cranial-nerves-inferior-view.svg' alt='Cranial nerves inferior view' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>All twelve cranial nerves with their skull-base exit foramen and function.</figcaption></figure></div><p>All twelve cranial nerves, in order, with the skull base foramen or canal each one exits through and why it matters clinically. This is the complete reference; see the diagram below for where each foramen actually sits.</p>" +
          "<div class=\"tbl-scroll\"><table><thead><tr><th>Nerve</th><th>Skull base exit</th><th>Type</th><th>Function</th><th>If injured</th></tr></thead><tbody>" +
          "<tr><td><strong>I</strong> &middot; Olfactory</td><td>Cribriform plate</td><td>Sensory</td><td>Smell</td><td>Anosmia; classic after an anterior skull-base fracture through the cribriform plate</td></tr>" +
          "<tr><td><strong>II</strong> &middot; Optic</td><td>Optic canal</td><td>Sensory</td><td>Vision</td><td>Monocular vision loss, relative afferent pupillary defect (RAPD)</td></tr>" +
          "<tr><td><strong>III</strong> &middot; Oculomotor</td><td>Superior orbital fissure</td><td>Motor (+ parasympathetic)</td><td>Superior, inferior, and medial rectus; inferior oblique; levator palpebrae superioris; parasympathetic to the sphincter pupillae and ciliary muscle</td><td>Ptosis, eye deviated \"down and out,\" and a fixed dilated pupil (a \"surgical\" third-nerve palsy, e.g. from a compressive aneurysm) vs pupil-sparing (a \"medical\" cause, e.g. microvascular/diabetic)</td></tr>" +
          "<tr><td><strong>IV</strong> &middot; Trochlear</td><td>Superior orbital fissure</td><td>Motor</td><td>Superior oblique (eye moves down and in)</td><td>Vertical diplopia, worse looking down/reading; a compensatory head tilt away from the affected side</td></tr>" +
          "<tr><td><strong>V1</strong> &middot; Ophthalmic (trigeminal)</td><td>Superior orbital fissure</td><td>Sensory</td><td>Sensation: forehead, scalp, cornea</td><td>Loss of the corneal reflex (afferent limb), forehead/scalp numbness</td></tr>" +
          "<tr><td><strong>V2</strong> &middot; Maxillary (trigeminal)</td><td>Foramen rotundum</td><td>Sensory</td><td>Sensation: midface, upper teeth, palate</td><td>Midface and upper-teeth numbness</td></tr>" +
          "<tr><td><strong>V3</strong> &middot; Mandibular (trigeminal)</td><td>Foramen ovale</td><td>Both</td><td>Sensory: lower face, chin, lower teeth, anterior two-thirds tongue (general sensation only, not taste). Motor: muscles of mastication (masseter, temporalis, medial and lateral pterygoids)</td><td>Lower-face/tongue numbness; on opening, the jaw deviates <em>toward</em> the weak side (unopposed contralateral pterygoid)</td></tr>" +
          "<tr><td><strong>VI</strong> &middot; Abducens</td><td>Superior orbital fissure</td><td>Motor</td><td>Lateral rectus (eye moves out)</td><td>Horizontal diplopia; the eye cannot abduct past midline</td></tr>" +
          "<tr><td><strong>VII</strong> &middot; Facial</td><td>Internal acoustic meatus (traverses the temporal bone; exits the skull at the stylomastoid foramen)</td><td>Both (+ parasympathetic)</td><td>Motor: muscles of facial expression, stapedius, posterior belly of digastric, stylohyoid. Sensory: taste, anterior two-thirds of tongue (via chorda tympani). Parasympathetic: lacrimal, submandibular, and sublingual glands</td><td>Facial droop (forehead spared if central/UMN, forehead involved if peripheral/Bell's), hyperacusis (stapedius), dry eye/mouth, taste loss</td></tr>" +
          "<tr><td><strong>VIII</strong> &middot; Vestibulocochlear</td><td>Internal acoustic meatus</td><td>Sensory</td><td>Hearing (cochlear division) and balance (vestibular division)</td><td>Sensorineural hearing loss, tinnitus, vertigo/imbalance; a unilateral asymmetric pattern raises concern for vestibular schwannoma</td></tr>" +
          "<tr><td><strong>IX</strong> &middot; Glossopharyngeal</td><td>Jugular foramen</td><td>Both (+ parasympathetic)</td><td>Motor: stylopharyngeus. Sensory: pharynx, posterior third of tongue (taste and general sensation), carotid body/sinus. Parasympathetic: parotid gland</td><td>Loss of the gag reflex (afferent limb), impaired posterior-tongue taste</td></tr>" +
          "<tr><td><strong>X</strong> &middot; Vagus</td><td>Jugular foramen</td><td>Both (+ parasympathetic)</td><td>Motor: pharyngeal and laryngeal muscles (via the pharyngeal and recurrent laryngeal branches), soft palate. Sensory: external ear, larynx, and thoracoabdominal viscera. Parasympathetic: thorax and abdomen to the splenic flexure</td><td>Hoarseness/vocal-fold paralysis (recurrent laryngeal branch), dysphagia, and the soft palate/uvula deviates <em>away</em> from the lesion on \"ahh\"</td></tr>" +
          "<tr><td><strong>XI</strong> &middot; Accessory</td><td>Jugular foramen</td><td>Motor</td><td>Trapezius and sternocleidomastoid</td><td>Shoulder droop and weak shrug (trapezius); weak head turn to the opposite side (SCM) -- classically injured in posterior triangle/level V neck dissection</td></tr>" +
          "<tr><td><strong>XII</strong> &middot; Hypoglossal</td><td>Hypoglossal canal</td><td>Motor</td><td>Intrinsic and most extrinsic tongue muscles</td><td>On protrusion, the tongue deviates <em>toward</em> the side of a peripheral (LMN) lesion</td></tr>" +
          "</tbody></table></div>"
      },
      {
        title: "Nose & paranasal sinuses",
        tagline: "Turbinates · Ostiomeatal complex · Orbit/brain proximity",
        html: "<div class=\"fig-row\"><figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/paranasal_sinus_drainage_danger_zones.png' alt='Paranasal sinus drainage danger zones' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Turbinates/meatuses, ostiomeatal complex drainage, and proximity of sinuses to orbit/skull base.</figcaption></figure></div>" +
          "<ul><li><strong>Turbinates (conchae):</strong> the inferior, middle, and superior turbinates are scroll-shaped bony shelves projecting from the lateral nasal wall, covered in vascular mucosa; they warm, humidify, and filter inspired air, and each one creates the space (meatus) beneath it. \"Turbinate\" and \"concha\" are the same structure -- turbinate is the more common clinical term, concha the anatomical one.</li>" +
          "<li><strong>Meatuses:</strong> the grooves underneath each turbinate. The <strong>inferior meatus</strong> receives the nasolacrimal duct. The <strong>middle meatus</strong> is where the frontal, anterior ethmoid, and maxillary sinuses all drain via the <strong>ostiomeatal complex (OMC)</strong>; block it and you get sinusitis. The <strong>superior meatus</strong> receives drainage from the <strong>posterior ethmoid</strong> air cells. The <strong>sphenoid sinus</strong> drains separately, via the <strong>sphenoethmoidal recess</strong> above and behind the superior turbinate, not into any of the three meatuses.</li>" +
          "<li><strong>Orbit and anterior skull base:</strong> the ethmoid sinuses are separated from the orbit only by the paper-thin <strong>lamina papyracea</strong>, and from the anterior cranial fossa only by the thin, perforated <strong>cribriform plate</strong> and fovea ethmoidalis. Because these walls are so thin, sinus infection or surgical instrumentation can breach either boundary: breach the lamina papyracea and you get orbital cellulitis/abscess (proptosis, painful or limited eye movement, vision change); breach the skull base and you risk a CSF leak, meningitis, or intracranial abscess.</li></ul>"
      },
      {
        title: "Larynx: essentials",
        tagline: "Epiglottis · Vocal folds · Recurrent laryngeal nerve",
        html: "<figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/larynx-openstax.png' alt='Larynx openstax' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Epiglottis, thyroid/cricoid cartilage framework, true/false vocal folds, recurrent laryngeal nerve.</figcaption></figure>" +
          "<ul><li><strong>Epiglottis:</strong> the cartilage leaf that folds down over the laryngeal inlet to protect the airway on swallowing.</li>" +
          "<li><strong>Cartilage framework -- unpaired:</strong> <strong>thyroid</strong> (the largest, forms the laryngeal prominence/Adam's apple), <strong>cricoid</strong> (the only complete cartilage ring in the airway), and the <strong>epiglottis</strong> itself. <strong>Paired:</strong> <strong>arytenoid</strong> (the vocal folds attach to these and they rotate/slide to open and close the airway), plus the small <strong>corniculate</strong> and <strong>cuneiform</strong> cartilages sitting within the aryepiglottic folds.</li>" +
          "<li><strong>True vs false vocal folds:</strong> the <strong>true vocal folds</strong> (vocal cords) sit below the <strong>false vocal folds</strong> (also called the <strong>vestibular folds</strong>), separated by the ventricle (of Morgagni). Only the true folds vibrate to produce voice; the false folds protect the airway but don't normally phonate.</li>" +
          "<li><strong>Nerve supply:</strong> the <strong>recurrent laryngeal nerve (RLN)</strong> supplies every intrinsic laryngeal muscle except one (cricothyroid) -- both motor to those muscles and sensation below the vocal folds. Its long course through the chest and around the aorta (left) or subclavian artery (right) before ascending back to the larynx explains hoarseness from lung, thyroid, or mediastinal disease along that path. The <strong>external branch of the superior laryngeal nerve (EBSLN)</strong> supplies the cricothyroid muscle alone (pitch control); the <strong>internal branch of the superior laryngeal nerve</strong> is purely sensory, supplying the mucosa above the vocal folds down to their level (the afferent limb of the cough/protective reflex when food or liquid threatens the airway).</li></ul>"
      },
      {
        title: "Neck: triangles, levels & glands",
        tagline: "Neck triangles · Nodal levels I-VII · Salivary glands",
        html: "<div class=\"fig-row\"><figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/neck-triangles-colored.png' alt='Neck triangles colored' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Anterior/posterior neck triangles, cervical nodal levels I-VII, and key neck glands.</figcaption></figure></div><ul><li><strong>Triangles:</strong> the <strong>sternocleidomastoid</strong> splits the neck into <strong>anterior</strong> and <strong>posterior</strong> triangles.</li>" +
          "<li><strong>Nodal levels:</strong> lymph nodes are mapped as <strong>levels I-VI</strong>, used for every neck mass and cancer.</li>" +
          "<li><strong>Key glands:</strong> <strong>thyroid</strong> (midline, moves with swallowing), <strong>parotid</strong> (the facial nerve runs through it), and <strong>submandibular</strong> (a common site for stones).</li></ul>" +
          "<p><strong>Cervical nodal levels, defined by their surgical boundaries</strong> (the landmarks a surgeon actually uses in the neck, not radiologic estimates):</p>" +
          "<div class='tbl-scroll'><table><thead><tr><th>Level</th><th>Superior</th><th>Inferior</th><th>Anterior</th><th>Posterior</th><th>Main contents</th><th>Primary drainage</th><th>Key surgical risk</th></tr></thead><tbody>" +
          "<tr><td><strong>Ia</strong> (submental)</td><td>Symphysis of the mandible</td><td>Body of the hyoid</td><td>Contralateral anterior belly of digastric</td><td>Ipsilateral anterior belly of digastric</td><td>Submental nodes</td><td>Chin, lower lip, floor of mouth, tongue tip</td><td>Low; generally safe dissection</td></tr>" +
          "<tr><td><strong>Ib</strong> (submandibular)</td><td>Body of the mandible</td><td>Posterior belly of digastric</td><td>Anterior belly of digastric</td><td>Stylohyoid muscle</td><td>Submandibular gland and nodes</td><td>Oral cavity, anterior face</td><td>Marginal mandibular branch of CN VII (lip droop); submandibular duct/gland injury</td></tr>" +
          "<tr><td><strong>IIa / IIb</strong> (upper jugular)</td><td>Skull base</td><td>Inferior body of the hyoid</td><td>Lateral border of sternohyoid</td><td>Posterior border of sternocleidomastoid</td><td>Upper deep cervical nodes; IIa/IIb split by the spinal accessory nerve</td><td>Oral cavity, nasopharynx, oropharynx, larynx, parotid</td><td>Spinal accessory nerve (CN XI) -- shoulder droop/weak shrug from trapezius palsy</td></tr>" +
          "<tr><td><strong>III</strong> (mid jugular)</td><td>Inferior body of the hyoid</td><td>Inferior border of the cricoid cartilage</td><td>Lateral border of sternohyoid</td><td>Posterior border of sternocleidomastoid</td><td>Middle deep cervical nodes</td><td>Larynx, hypopharynx, oropharynx</td><td>Relatively low; hypoglossal nerve (CN XII) at the superior margin</td></tr>" +
          "<tr><td><strong>IV</strong> (lower jugular)</td><td>Inferior border of the cricoid cartilage</td><td>Clavicle</td><td>Lateral border of sternohyoid</td><td>Posterior border of sternocleidomastoid</td><td>Lower deep cervical nodes</td><td>Larynx, thyroid, hypopharynx, cervical esophagus</td><td>Thoracic duct injury on the left (chyle leak); phrenic nerve</td></tr>" +
          "<tr><td><strong>Va / Vb</strong> (posterior triangle)</td><td>Convergence of sternocleidomastoid and trapezius</td><td>Clavicle</td><td>Posterior border of sternocleidomastoid</td><td>Anterior border of trapezius</td><td>Spinal accessory and transverse cervical nodes; Va/Vb split by the inferior-cricoid plane</td><td>Nasopharynx, posterior scalp and neck, thyroid</td><td>Spinal accessory nerve (CN XI) is most exposed here, running superficially across the triangle</td></tr>" +
          "<tr><td><strong>VI</strong> (central compartment)</td><td>Hyoid bone</td><td>Suprasternal notch</td><td colspan='2'>Bounded laterally by the carotid sheaths (a midline compartment, not flanked anterior/posterior like the lateral levels)</td><td>Pretracheal, paratracheal, prelaryngeal (Delphian) nodes</td><td>Thyroid, glottic and subglottic larynx, hypopharynx, cervical esophagus</td><td>Recurrent laryngeal nerve (vocal-fold paralysis/hoarseness); parathyroid glands (hypocalcemia)</td></tr>" +
          "<tr><td><strong>VII</strong> (superior mediastinal)</td><td>Suprasternal notch</td><td>Innominate artery</td><td colspan='2'>Bounded by the trachea and great vessels</td><td>Superior mediastinal nodes</td><td>Thyroid, cervical esophagus</td><td>Great vessels, thoracic duct, phrenic and recurrent laryngeal nerves</td></tr>" +
          "</tbody></table></div>" +
          "<p><strong>Cervical fascia, high-yield:</strong> deep to the skin and subcutaneous fat, the <strong>deep cervical fascia</strong> has three layers. The <strong>investing (superficial) layer</strong> wraps the whole neck and splits to envelop sternocleidomastoid, trapezius, the parotid, and the submandibular gland. The <strong>pretracheal layer</strong> surrounds the thyroid, trachea, and esophagus, and continues down into the mediastinum -- which is exactly why an untreated deep neck infection here (or in the retropharyngeal \"danger space\" just behind it) can descend into the chest as mediastinitis. The <strong>prevertebral layer</strong> covers the prevertebral muscles and vertebral column and forms the floor of the posterior triangle. All three layers contribute fibers to the <strong>carotid sheath</strong>, which encloses the common/internal carotid artery, internal jugular vein, and vagus nerve together.</p>"
      },
      {
        title: "Tympanic membrane landmarks",
        tagline: "Cone of light · Umbo · Pars tensa vs flaccida",
        html: "<figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/tympanic_membrane_landmarks.png' alt='Tympanic membrane landmarks' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Naming otoscopic TM landmarks: cone of light, umbo, manubrium, pars tensa/flaccida.</figcaption></figure>" +
          "<p>On otoscopy, name these landmarks:</p><ul>" +
          "<li><strong>Cone of light</strong> (antero-inferior): the triangular reflection of the otoscope light off the pars tensa; a normal finding that blunts or fragments with effusion or retraction.</li>" +
          "<li><strong>Umbo</strong> (central): the point where the tip of the malleus indents the drum from behind -- the center of the cone of light and the point of maximal TM displacement.</li>" +
          "<li><strong>Manubrium (handle) of malleus</strong>: runs from the umbo up to the <strong>lateral process</strong>, the visible bony prominence at its top; the main landmark for orientation on otoscopy.</li>" +
          "<li><strong>Pars tensa</strong> vs <strong>pars flaccida</strong>: the taut, fibrous-layered main part of the drum (pars tensa) vs the smaller, lax superior part above the lateral process (pars flaccida, or Shrapnell's membrane) -- the classic site for an attic cholesteatoma.</li></ul>" +
          "<p><strong>Three layers of the tympanic membrane:</strong> an outer <strong>squamous (skin) layer</strong>, continuous with the ear-canal skin, that migrates laterally to keep the drum self-cleaning; a middle <strong>fibrous layer</strong> that gives the drum its tension and strength (present in the pars tensa, absent in the pars flaccida -- why the flaccida retracts and perforates more easily); and an inner <strong>mucosal layer</strong>, continuous with the middle-ear mucosa.</p>" +
          "<p><strong>Performing the exam:</strong> pull the pinna up and back in an adult (down and back in a young child) to straighten the ear canal, then use the largest speculum the canal will comfortably accept. Note color, translucency, contour, perforation, and mobility (pneumatic otoscopy: a normal drum moves briskly to insufflation; sluggish or absent movement is the most reliable bedside sign of a middle-ear effusion).</p>"
      }
    ],
    diagrams: [
      {
        kind: "image",
        id: "ear-cross-section",
        occlude: true,
        title: "The ear in cross-section",
        note: "External ear (left) to inner ear (right). Tap each covered label to name the structure, then reveal.",
        src: "assets/img/figures/ear_cross_section.png",
        source: "Parts of the ear. NIDCD / NIH. Public domain.",
        labels: [
          { id:"pinna", text:"Pinna: cartilage-and-skin auricle that collects and funnels sound into the ear canal.", box:{x:1.5,y:40.5,w:7.0,h:3.5} },
          { id:"temporal-bone", text:"Temporal bone: houses the entire middle and inner ear; its petrous portion is the densest bone in the body.", box:{x:30.5,y:36.0,w:11.0,h:6.5} },
          { id:"stapes", text:"Stapes: smallest bone in the body; its footplate sits in the oval window and drives fluid movement in the inner ear.", box:{x:49.5,y:30.5,w:8.0,h:3.5} },
          { id:"malleus", text:"Malleus: the ossicle attached to the eardrum; its handle (manubrium) is the landmark seen on otoscopy.", box:{x:48.5,y:33.5,w:9.5,h:3.5} },
          { id:"scc", text:"Semicircular canals: three orthogonal fluid-filled loops that detect angular head rotation for balance.", box:{x:57.5,y:19.5,w:15.0,h:7.5} },
          { id:"vestibular", text:"Vestibular nerve: carries balance signals from the semicircular canals and otolith organs to the brainstem.", box:{x:74.5,y:28.5,w:9.0,h:5.5} },
          { id:"auditory", text:"Auditory (cochlear) nerve: carries sound signals from the cochlea's hair cells to the brainstem.", box:{x:85.5,y:34.5,w:10.5,h:6.5} },
          { id:"incus", text:"Incus: the middle ossicle, bridging the malleus and stapes.", box:{x:57.0,y:53.0,w:6.5,h:3.5} },
          { id:"ear-canal", text:"Ear canal (external auditory meatus): S-shaped cartilaginous-then-bony canal; pull the pinna up and back in an adult to straighten it for otoscopy.", box:{x:31.5,y:71.0,w:11.0,h:3.5} },
          { id:"eardrum", text:"Eardrum (tympanic membrane): vibrates with sound and transmits that energy to the ossicular chain.", box:{x:46.5,y:71.0,w:8.5,h:3.5} },
          { id:"eustachian", text:"Eustachian tube: connects the middle ear to the nasopharynx and equalizes pressure; dysfunction causes effusion or barotrauma.", box:{x:56.0,y:76.5,w:12.5,h:6.5} },
          { id:"cochlea", text:"Cochlea: snail-shaped, fluid-filled organ that converts sound vibration into neural signals via hair cells.", box:{x:81.5,y:80.0,w:9.0,h:4.5} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "sinuses-coronal",
        title: "Paranasal sinuses: coronal",
        note: "A coronal slice through the face. Name the sinuses, turbinates, and the drainage pathway.",
        src: "assets/img/figures/paranasal_sinuses.png",
        source: "Paranasal Sinuses: Coronal CT & Anatomy. radiopaedia.org.",
        labels: [
          { id:"sup-concha", text:"Superior concha: the smallest, most posterior-superior turbinate; overlies the superior meatus where the posterior ethmoid cells drain.", box:{x:41.0,y:19.5,w:17.0,h:4.0} },
          { id:"eth", text:"Ethmoidal air cell: thin-walled cells separated from the orbit only by the paper-thin lamina papyracea, so ethmoiditis can spread to cause orbital cellulitis.", box:{x:52.0,y:21.5,w:19.5,h:4.5} },
          { id:"orb", text:"Contents of orbit: separated from the ethmoid sinus by the lamina papyracea, the classic route for orbital spread of sinogenic infection.", box:{x:18.0,y:35.5,w:15.0,h:6.5} },
          { id:"sup-meatus", text:"Superior meatus: the groove under the superior concha; receives drainage from the posterior ethmoid air cells.", box:{x:82.5,y:41.0,w:10.0,h:5.5} },
          { id:"mid-concha", text:"Middle concha (turbinate): overlies the middle meatus and the ostiomeatal complex, the final common drainage pathway for the frontal, maxillary, and anterior ethmoid sinuses.", box:{x:82.5,y:47.0,w:10.0,h:5.0} },
          { id:"mid-meatus", text:"Middle meatus: drains the frontal sinus, anterior ethmoid cells, and maxillary sinus; obstruction here drives most cases of rhinosinusitis.", box:{x:82.5,y:52.0,w:10.0,h:5.0} },
          { id:"sep", text:"Septum nasi: the midline cartilage and bone partition; deviation can obstruct one nasal passage and its sinus drainage.", box:{x:82.5,y:57.0,w:9.0,h:4.5} },
          { id:"inf-concha", text:"Inferior concha (turbinate): the largest turbinate, a separate bone that warms and humidifies inspired air.", box:{x:82.5,y:60.5,w:10.0,h:4.5} },
          { id:"max", text:"Maxillary sinus: the largest paranasal sinus; its ostium sits high on the medial wall, so it drains uphill into the middle meatus.", box:{x:82.5,y:65.0,w:10.5,h:4.5} },
          { id:"inf-meatus", text:"Inferior meatus: the groove under the inferior concha; the nasolacrimal duct opens here, not into the sinus drainage pathway.", box:{x:82.5,y:68.0,w:10.5,h:5.0} },
          { id:"hard-palate", text:"Hard palate: the bony floor of the nasal cavity and roof of the mouth, separating the two.", box:{x:35.0,y:72.0,w:17.5,h:4.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "larynx-coronal",
        title: "Larynx: coronal",
        note: "The airway framework and the folds that make voice. Name each, then reveal.",
        src: "assets/img/figures/larynx-coronal-wikimedia.png",
        source: "Larynx: Coronal Section Showing Airway Framework and Vocal Folds. Wikimedia Commons.",
        labels: [
          { id:"hyoid", text:"Hyoid bone: the free-floating U-shaped bone suspending the larynx, anchoring the thyrohyoid membrane above.", box:{x:11.0,y:0.5,w:23.0,h:4.5} },
          { id:"epi", text:"Epiglottis: the cartilage leaf that folds down over the laryngeal inlet during swallowing to protect the airway.", box:{x:44.5,y:0.3,w:19.0,h:4.5} },
          { id:"thyrohyoid", text:"Thyrohyoid membrane: connects the hyoid bone to the thyroid cartilage; pierced by the superior laryngeal neurovascular bundle.", box:{x:0.5,y:18.0,w:27.0,h:9.5} },
          { id:"ff", text:"False (vestibular) vocal cords: mucosal folds above the true cords that protect the airway but do not normally phonate.", box:{x:0.5,y:37.5,w:24.0,h:7.5} },
          { id:"ventricle", text:"Ventricle (of Morgagni): the space between the false and true cords; a common site for laryngocele formation.", box:{x:83.0,y:44.5,w:16.5,h:4.5} },
          { id:"tf", text:"True vocal cords: the folds that vibrate to produce voice; their free edge is the primary site examined in any hoarseness workup.", box:{x:0.5,y:54.5,w:24.0,h:7.0} },
          { id:"vocalis", text:"Vocalis muscle: the medial belly of thyroarytenoid that tenses and fine-tunes the vocal fold for pitch.", box:{x:83.0,y:54.0,w:16.5,h:6.5} },
          { id:"thy", text:"Thyroid cartilage: the largest laryngeal cartilage, forming the laryngeal prominence (Adam's apple); the framework for the vocal cords.", box:{x:2.0,y:70.5,w:22.0,h:8.0} },
          { id:"cric", text:"Cricoid cartilage: the only complete cartilage ring in the airway; cricothyrotomy is performed just above it.", box:{x:82.0,y:71.0,w:18.0,h:8.5} },
          { id:"trach", text:"Trachea: the cartilage-ringed airway continuing below the cricoid to the carina.", box:{x:82.5,y:91.0,w:17.5,h:4.5} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "neck-levels",
        title: "Neck nodal levels I-VI",
        note: "The map behind every neck mass and cancer. Locate each level, then reveal.",
        src: "assets/img/figures/neck_levels_colored.png",
        source: "Neck Nodal Levels I-VI Schematic. Wikimedia Commons.",
        labels: [
          { id:"posterior-auricular", text:"Posterior auricular (mastoid) nodes: drain the posterior scalp and pinna, part of the outer Waldeyer nodal ring.", box:{x:1.5,y:2.5,w:12.5,h:11.0} },
          { id:"occipital", text:"Occipital nodes: drain the posterior scalp; enlarge with scalp infection or, classically, rubella.", box:{x:1.5,y:14.0,w:13.0,h:12.5} },
          { id:"superficial-cervical", text:"Superficial cervical nodes: run along the external jugular vein, superficial to sternocleidomastoid.", box:{x:1.5,y:33.0,w:24.0,h:6.0} },
          { id:"lower-border-hyoid", text:"Lower border of the hyoid bone: the surface landmark separating level II (above) from level III (below).", box:{x:6.0,y:43.0,w:18.0,h:12.0} },
          { id:"superior-deep-cervical", text:"Superior deep cervical nodes: the upper deep cervical chain along the internal jugular vein, corresponding to level II.", box:{x:1.5,y:55.5,w:29.0,h:6.0} },
          { id:"lower-margin-cricoid", text:"Lower margin of the cricoid cartilage: the surface landmark separating level III (above) from level IV (below).", box:{x:5.0,y:66.5,w:21.0,h:11.5} },
          { id:"inferior-deep-cervical", text:"Inferior deep cervical nodes: the lower deep cervical chain along the internal jugular vein, corresponding to level IV.", box:{x:70.0,y:74.5,w:27.0,h:6.0} },
          { id:"parotid", text:"Parotid nodes: intra- and peri-parotid nodes draining the scalp, external ear, and the parotid gland itself.", box:{x:77.0,y:2.5,w:10.0,h:6.5} },
          { id:"buccinator", text:"Buccinator (facial) nodes: drain the cheek and lower eyelid along the course of the facial vessels.", box:{x:77.0,y:11.0,w:14.0,h:6.0} },
          { id:"submandibular-region", text:"Supramandibulary (submandibular) region: houses the level Ib nodes and gland, draining the oral cavity, submandibular gland, and anterior face.", box:{x:76.5,y:24.5,w:23.0,h:5.5} },
          { id:"submaxillary", text:"Submaxillary (submandibular) gland: sits within level Ib, a common site for salivary stones and gland swelling.", box:{x:77.0,y:32.0,w:16.5,h:6.0} },
          { id:"submental", text:"Submental nodes: the level Ia group, draining the chin, lower lip, and anterior floor of mouth.", box:{x:77.0,y:43.0,w:13.5,h:6.0} },
          { id:"l1a", text:"Level Ia (submental): between the anterior bellies of digastric, draining the chin, lower lip, and anterior floor of mouth.", box:{x:61.5,y:39.0,w:4.0,h:6.5} },
          { id:"l1b", text:"Level Ib (submandibular): contains the submandibular gland and nodes, draining the oral cavity and anterior face.", box:{x:54.0,y:35.0,w:4.5,h:6.0} },
          { id:"l2a", text:"Level IIa (upper jugular, anterior to CN XI): drains the oral cavity, nasopharynx, oropharynx, larynx, and parotid.", box:{x:43.5,y:16.0,w:5.0,h:7.0} },
          { id:"l2b", text:"Level IIb (upper jugular, posterior to CN XI): the posterior upper jugular group, split from IIa by the spinal accessory nerve.", box:{x:35.5,y:20.0,w:5.5,h:7.0} },
          { id:"l3", text:"Level III (mid jugular): hyoid to cricoid, draining the larynx, hypopharynx, and oropharynx.", box:{x:45.5,y:53.0,w:5.0,h:6.5} },
          { id:"l4", text:"Level IV (lower jugular): cricoid to clavicle, draining the larynx, thyroid, hypopharynx, and cervical esophagus.", box:{x:52.0,y:78.5,w:4.5,h:6.0} },
          { id:"l5a", text:"Level Va (upper posterior triangle): above the cricoid plane, draining the nasopharynx and posterior scalp.", box:{x:34.5,y:45.5,w:5.0,h:6.5} },
          { id:"l5b", text:"Level Vb (lower posterior triangle): below the cricoid plane, draining the thyroid and posterior neck.", box:{x:38.5,y:73.0,w:5.0,h:6.5} },
          { id:"l6", text:"Level VI (central compartment): pretracheal, paratracheal, and Delphian nodes draining the thyroid and larynx; the key nodal basin for thyroid cancer.", box:{x:57.5,y:52.0,w:4.5,h:6.5} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "tm-right",
        title: "Right tympanic membrane: landmarks",
        note: "Schematic for label practice (DRAFT: confirm laterality/orientation with faculty). Hide the labels, name each landmark, then reveal to check.",
        src: "assets/img/figures/tympanic_membrane_landmarks.png",
        source: "Normal Right Tympanic Membrane Landmarks (Otoscopic View). oxfordmedicaleducation.com.",
        labels: [
          { id:"l1", text:"Posterior fold: mucosal fold running from the lateral process of the malleus posteriorly; marks the upper edge of the pars tensa.", box:{x:9.5,y:4.5,w:22.0,h:5.5} },
          { id:"l7", text:"Pars flaccida (Shrapnell's membrane): the lax superior part of the eardrum with no fibrous middle layer; the classic site for an attic (acquired) cholesteatoma.", box:{x:55.0,y:0.3,w:20.0,h:5.5} },
          { id:"l8", text:"Anterior fold: mucosal fold running from the lateral process of the malleus anteriorly; marks the upper edge of the pars tensa.", box:{x:75.0,y:10.5,w:19.5,h:6.0} },
          { id:"l9", text:"Short process (lateral process) of malleus: the visible bony prominence at the top of the malleus handle, between the anterior and posterior folds.", box:{x:77.5,y:18.0,w:22.0,h:10.0} },
          { id:"l10", text:"Incus: the middle ossicle, sometimes visible as a faint shadow through the postero-superior eardrum.", box:{x:1.5,y:25.0,w:18.0,h:5.5} },
          { id:"l4", text:"Umbo: the point where the malleus tip indents the eardrum; the center of the cone of light and a key landmark on otoscopy.", box:{x:0.5,y:50.5,w:12.5,h:5.5} },
          { id:"l3", text:"Manubrium (handle) of malleus: runs from the umbo up to the lateral process; the main landmark for orientation on otoscopy.", box:{x:79.0,y:56.0,w:18.5,h:10.0} },
          { id:"l11", text:"Annulus: the fibrocartilaginous ring anchoring the pars tensa into the tympanic sulcus of the temporal bone.", box:{x:0.5,y:71.5,w:20.0,h:5.5} },
          { id:"l5", text:"Pars tensa: the taut, fibrous-layered main part of the eardrum that vibrates efficiently with sound.", box:{x:16.5,y:84.0,w:16.0,h:5.5} },
          { id:"l6", text:"Cone of light (light reflex): the antero-inferior light reflection from the otoscope off the pars tensa; blunts or distorts with effusion or retraction.", box:{x:57.0,y:84.0,w:18.5,h:5.5} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "ent-regions-overview",
        title: "The ENT regions at a glance",
        note: "A side profile of the head and neck, divided into the regions this specialty covers. Hide the labels, name each region, then reveal.",
        src: "assets/img/figures/ENT_regions.png",
        source: "The Five Primary ENT Anatomical Regions Overview. Illustration generated with Google Gemini.",
        labels: [
          { id:"sphenoidal-sinus", text:"Sphenoidal sinus: the most posterior paranasal sinus, sitting below the pituitary fossa and beside the optic nerve and cavernous sinus; infection here can threaten vision or spread intracranially.", box:{x:0.5,y:3.5,w:17.0,h:4.0} },
          { id:"nasal-meatuses", text:"Nasal meatuses (superior, middle, inferior): the grooves beneath each turbinate; the middle meatus houses the ostiomeatal complex, the final common drainage pathway for the frontal, maxillary, and anterior ethmoid sinuses.", box:{x:0.0,y:14.0,w:18.5,h:7.5} },
          { id:"pharyngeal-tonsil", text:"Pharyngeal tonsil (adenoid): lymphoid tissue on the nasopharyngeal roof; hypertrophy in children causes nasal obstruction, mouth breathing, and Eustachian tube dysfunction.", box:{x:0.0,y:22.5,w:18.0,h:3.0} },
          { id:"opening-auditory-tube", text:"Opening of the auditory (Eustachian) tube: the nasopharyngeal orifice that equalizes middle-ear pressure; obstruction (adenoids, nasopharyngeal tumor) causes effusion.", box:{x:0.0,y:27.5,w:18.5,h:6.0} },
          { id:"nasopharynx", text:"Nasopharynx: skull base to soft palate; site of the adenoid and, in adults, nasopharyngeal carcinoma (think unilateral effusion plus neck mass).", box:{x:1.0,y:34.8,w:17.0,h:3.0} },
          { id:"uvula", text:"Uvula: the midline soft-palate projection; deviates away from the affected side in peritonsillar abscess.", box:{x:9.0,y:39.5,w:9.0,h:3.0} },
          { id:"palatine-tonsil", text:"Palatine tonsil: the paired lymphoid tissue at the oropharyngeal fauces; the usual source of tonsillitis and peritonsillar abscess.", box:{x:1.5,y:44.3,w:16.5,h:3.0} },
          { id:"fauces", text:"Fauces: the archway connecting the oral cavity to the oropharynx, bounded by the palatoglossal and palatopharyngeal folds.", box:{x:8.0,y:49.0,w:9.0,h:3.0} },
          { id:"oropharynx", text:"Oropharynx: soft palate to hyoid; includes the tonsils, tongue base, and posterior pharyngeal wall, the classic site for HPV-related oropharyngeal cancer.", box:{x:2.0,y:54.5,w:16.0,h:3.0} },
          { id:"laryngopharynx", text:"Laryngopharynx (hypopharynx): hyoid to cricoid, behind the larynx; an easily missed site for hypopharyngeal cancer presenting with dysphagia.", box:{x:0.0,y:59.8,w:18.5,h:3.0} },
          { id:"vestibular-fold", text:"Vestibular (false vocal) fold: the mucosal fold above the true cord that protects the airway but does not normally phonate.", box:{x:2.0,y:64.5,w:16.5,h:3.0} },
          { id:"vocal-fold", text:"Vocal (true) fold: the vibrating edge that produces voice; exam-room focus for any hoarseness workup.", box:{x:5.5,y:68.8,w:12.5,h:3.0} },
          { id:"esophagus", text:"Esophagus: begins behind the cricoid cartilage at the cricopharyngeus (upper esophageal sphincter); a foreign body or button battery here is a time-critical emergency.", box:{x:2.0,y:83.8,w:15.5,h:3.0} },
          { id:"frontal-sinus", text:"Frontal sinus: drains via the frontonasal duct into the middle meatus; frontal sinusitis can erode posteriorly to cause intracranial complications (Pott's puffy tumor).", box:{x:80.0,y:6.0,w:11.5,h:3.5} },
          { id:"ethmoid-bone", text:"Ethmoid bone: forms the nasal roof and part of the medial orbital wall (lamina papyracea), the classic route for orbital spread of sinogenic infection.", box:{x:79.5,y:10.0,w:11.0,h:3.5} },
          { id:"olfactory-epithelium", text:"Olfactory epithelium: sits near the cribriform plate; carries CN I fibers through it, so a skull-base fracture here causes anosmia and CSF rhinorrhea risk.", box:{x:79.5,y:13.5,w:19.5,h:3.5} },
          { id:"nasal-conchae", text:"Nasal conchae (turbinates): the superior, middle, and inferior scroll-shaped bones that warm, humidify, and filter inspired air.", box:{x:80.0,y:21.0,w:15.0,h:4.0} },
          { id:"nasal-vestibule", text:"Nasal vestibule: the skin-lined entrance just inside the nostril; the site of vestibulitis and the 'danger triangle' venous drainage toward the cavernous sinus.", box:{x:80.0,y:26.5,w:17.0,h:4.0} },
          { id:"nostril", text:"Nostril (naris): the external opening of the nasal cavity.", box:{x:79.5,y:31.0,w:7.0,h:3.0} },
          { id:"hard-palate", text:"Hard palate: the bony anterior roof of the mouth; a cleft here causes nasal regurgitation of food and speech problems.", box:{x:79.5,y:34.5,w:11.0,h:3.5} },
          { id:"soft-palate", text:"Soft palate: the mobile posterior palate that elevates on swallowing (CN X) to seal off the nasopharynx; deviates away from a peritonsillar abscess.", box:{x:79.5,y:38.5,w:11.0,h:3.5} },
          { id:"tongue", text:"Tongue: its posterior third (base) belongs to the oropharynx and is frequently missed on routine oral exam, delaying early cancer detection.", box:{x:79.5,y:42.0,w:7.0,h:3.5} },
          { id:"lingual-tonsil", text:"Lingual tonsil: lymphoid tissue at the tongue base, part of Waldeyer's ring; can hide an HPV-related primary tumor presenting as an unknown-primary neck node.", box:{x:79.5,y:46.0,w:13.5,h:3.5} },
          { id:"epiglottis", text:"Epiglottis: the cartilage leaf that folds over the laryngeal inlet during swallowing; a floppy, swollen epiglottis is the airway emergency of epiglottitis.", box:{x:79.5,y:51.0,w:9.0,h:3.5} },
          { id:"hyoid-bone", text:"Hyoid bone: the free-floating U-shaped bone anchoring the tongue base and larynx; the surface landmark separating neck level II (above) from level III (below).", box:{x:79.5,y:61.0,w:9.0,h:3.5} },
          { id:"thyroid-cartilage", text:"Thyroid cartilage: the largest laryngeal cartilage, forming the laryngeal prominence (Adam's apple) and the framework for the vocal cords.", box:{x:79.5,y:67.5,w:13.5,h:3.5} },
          { id:"cricoid-cartilage", text:"Cricoid cartilage: the only complete cartilage ring in the airway; cricothyrotomy is performed through the cricothyroid membrane just above it.", box:{x:79.5,y:74.0,w:13.5,h:3.5} },
          { id:"thyroid-gland", text:"Thyroid gland: sits over the 2nd-4th tracheal rings; a midline neck mass that moves with swallowing points here.", box:{x:79.5,y:85.5,w:9.0,h:3.5} },
          { id:"trachea", text:"Trachea: the cartilage-ringed airway continuing below the cricoid to the carina.", box:{x:79.5,y:90.5,w:7.0,h:3.5} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "ent-cranial-nerves-overview",
        title: "The skull base foramina and their cranial nerves",
        note: "The skull base viewed from above, from the anterior fossa (top) to the posterior fossa (bottom), right side shown. Every foramen here is paired left-right except the midline cribriform plate. Hide the labels, name each foramen and its nerve(s), then reveal.",
        src: "assets/img/figures/skullbase_foramen.png",
        source: "Skull Base Foramina and Their Cranial Nerves. Radiopaedia.",
        labels: [
          { id:"cribriform-plate", text:"Cribriform plate: transmits the olfactory nerve (CN I); anterior skull-base fracture here causes anosmia and CSF rhinorrhea.", box:{x:3.0,y:2.0,w:40.5,h:8.0} },
          { id:"optic-canal", text:"Optic canal: transmits the optic nerve (CN II) and ophthalmic artery; compression here causes progressive monocular vision loss.", box:{x:3.0,y:11.5,w:40.5,h:8.0} },
          { id:"superior-orbital-fissure", text:"Superior orbital fissure: transmits CN III (oculomotor), CN IV (trochlear), CN V1 (ophthalmic), and CN VI (abducens); a lesion here causes painful ophthalmoplegia (superior orbital fissure syndrome).", box:{x:3.0,y:21.5,w:40.5,h:18.5} },
          { id:"foramen-rotundum", text:"Foramen rotundum: transmits CN V2 (maxillary nerve), the route for perineural spread of some sinonasal and skin cancers.", box:{x:3.0,y:41.5,w:40.5,h:8.0} },
          { id:"foramen-ovale", text:"Foramen ovale: transmits CN V3 (mandibular nerve); also a common route for perineural tumor spread from the face and parotid.", box:{x:3.0,y:51.5,w:40.5,h:6.5} },
          { id:"internal-acoustic-meatus", text:"Internal acoustic (auditory) meatus: transmits CN VII (facial) and CN VIII (vestibulocochlear); site of vestibular schwannoma.", box:{x:3.0,y:59.8,w:40.5,h:12.5} },
          { id:"jugular-foramen", text:"Jugular foramen: transmits CN IX (glossopharyngeal), CN X (vagus), and CN XI (accessory), plus the internal jugular vein; jugular foramen syndrome affects all three nerves together.", box:{x:3.0,y:74.3,w:40.5,h:13.5} },
          { id:"hypoglossal-canal", text:"Hypoglossal canal: transmits CN XII (hypoglossal nerve); a lesion causes ipsilateral tongue weakness, with deviation toward the affected side on protrusion.", box:{x:3.0,y:89.8,w:40.5,h:8.0} }
        ]
      }
    ]
  },

  /* ==================== CLINICAL TAB ==================== */
  clinical: {
    blocks: [
      {
        id: "exam-flow",
        title: "A quick, complete ENT exam sequence",
        html: "<ul><li><strong>Ears:</strong> pinna/canal, otoscopy of both TMs, tuning forks if hearing concern.</li>" +
          "<li><strong>Nose:</strong> anterior rhinoscopy: septum, turbinates, mucosa, discharge, polyps.</li>" +
          "<li><strong>Oral cavity / oropharynx:</strong> dentition, tongue (lateral borders), floor of mouth, tonsils, palate elevation (CN IX/X).</li>" +
          "<li><strong>Neck:</strong> systematic nodal levels I-VI (plus level VII, superior mediastinal), thyroid, parotid, salivary glands.</li>" +
          "<li><strong>Cranial nerves:</strong> focused screen, especially <strong>CN VII</strong> (otologic) and <strong>CN X</strong> (voice).</li></ul>"
      },
      {
        id: "tuning-forks",
        title: "Tuning-fork interpretation (512 Hz)",
        html: "<p>Use Weber and Rinne together. 'Affected ear' = the ear in question.</p><p><strong>Worked example:</strong> a patient reports a muffled right ear. On Weber, the tone sounds <strong>louder in the right ear</strong> (lateralizes to the right) -- that points to either a conductive loss on the right, or a sensorineural loss on the left (better ear). Rinne on the right is <strong>negative</strong> (bone conduction louder than air conduction) -- that confirms a <strong>right conductive loss</strong>. If instead Rinne had been positive bilaterally with the same Weber lateralization to the right, the pattern would flip to a <strong>left sensorineural loss</strong> (Weber lateralizes toward the better ear in SNHL).</p>",
        table: {
          head: ["Scenario", "Weber", "Rinne (affected ear)"],
          rows: [
            ["Normal / symmetric", "Midline", "AC &gt; BC (positive)"],
            ["Conductive loss, right", "Lateralizes to <b>right</b> (affected)", "BC &gt; AC (<b>negative</b>)"],
            ["Sensorineural loss, right", "Lateralizes to <b>left</b> (better)", "AC &gt; BC (positive)"]
          ]
        }
      },
      {
        id: "investigations",
        title: "Core investigations: what and when",
        html: "<p><strong>Ear / hearing</strong></p><ul>" +
          "<li><strong>Audiogram:</strong> a graph of hearing thresholds (in dB) across frequencies, measured for both air and bone conduction. Normal is &le;25 dB HL. An <strong>air-bone gap</strong> (air conduction worse than bone) = conductive loss; both lines down together = sensorineural.</li>" +
          "<li><strong>Tympanometry:</strong> an objective bedside measure of TM mobility and middle-ear pressure. <strong>Type A</strong> normal &middot; <strong>Type B</strong> flat (effusion or perforation) &middot; <strong>Type C</strong> negative pressure (Eustachian-tube dysfunction).</li></ul>" +
          "<p><strong>Imaging</strong></p><ul>" +
          "<li><strong>CT</strong> for bone/sinuses/temporal bone, trauma, and infection extent.</li>" +
          "<li><strong>MRI</strong> for soft tissue, retrocochlear lesions (vestibular schwannoma), skull base, and tumor/perineural spread.</li></ul>" +
          "<p><strong>Neck mass</strong></p><ul>" +
          "<li>Contrast-enhanced <strong>CT/MRI AND FNA</strong>: FNA is strongly preferred over open excisional biopsy (an experienced operator can even do it before imaging).</li></ul>"
      },
      {
        id: "emergency-principles",
        title: "First principles of the ENT emergency",
        html: "<p>Across every ENT emergency, the priority order is the same:</p>" +
          "<ol><li><strong>Airway first.</strong> Do not lie a stridulous child flat or examine the throat if epiglottitis is possible; get senior ENT and anesthetics early.</li>" +
          "<li><strong>Bleeding second.</strong></li>" +
          "<li><strong>Time-critical tissue injury third.</strong></li></ol>" +
          "<p>A <strong>button battery</strong> in the nose or esophagus, a <strong>septal hematoma</strong>, and <strong>sudden SNHL</strong> are all time-critical even though they look minor.</p>"
      }
    ],
    redFlags: [
      { t: "<b>Airway signs</b> (stridor, drooling, tripod, muffled voice): epiglottitis / deep neck infection; secure the airway first." },
      { t: "<b>Button battery</b> in nose or esophagus: liquefactive necrosis within hours; immediate removal." },
      { t: "<b>Sudden SNHL (&lt;72h)</b>: otologic emergency, urgent audiogram + MRI (exclude retrocochlear pathology); corticosteroids may be offered but are an option (shared decision-making), not a mandatory treatment." },
      { t: "<b>Necrotizing (malignant) otitis externa</b>: diabetic/immunocompromised patient with pain out of proportion and canal granulation tissue that fails standard OE therapy; skull-base osteomyelitis, needs IV antipseudomonal antibiotics." },
      { t: "<b>Nasal septal hematoma</b> after trauma: drain urgently or the cartilage necroses (saddle nose)." },
      { t: "<b>Post-tonsillectomy bleed</b>: can be catastrophic; ABC, ENT, may need to return to the OR." },
      { t: "<b>Orbital/intracranial signs with sinusitis</b> (proptosis, painful/limited eye movement, reduced vision): urgent CT + IV antibiotics." },
      { t: "<b>Adult neck mass &gt;2-3 weeks</b>: malignancy until proven otherwise; imaging (CT/MRI) AND FNA, FNA preferred over open biopsy. A cystic node in a middle-aged patient can still be HPV-related oropharyngeal cancer: never assume benign." },
      { t: "<b>Hoarseness &gt;2-4 weeks</b> (smoker/drinker): laryngoscopy to exclude laryngeal cancer." },
      { t: "<b>Progressive dysphagia + weight loss</b>: exclude esophageal/hypopharyngeal cancer." },
      { t: "<b>Unilateral nasal symptoms + epistaxis</b> (adult): exclude sinonasal neoplasm; <b>unilateral foul discharge in a child</b>: foreign body." },
      { t: "<b>Facial palsy with forehead sparing</b>: treat as central/stroke; forehead involved + ear disease: urgent ENT." },
      { t: "<b>Otalgia with a normal ear exam</b> in an adult smoker: referred pain; scope the aerodigestive tract." }
    ]
  },

  /* ==================== CASES TAB ==================== */
  cases: [
    {
      id: "case-referred-otalgia",
      ukmla: "Painful ear",
      source: "Bailey's Head & Neck Surgery: Otolaryngology, 6th ed., referred otalgia pathways.",
      stem: "A <b>58-year-old man</b> with a 40 pack-year history reports 3 weeks of <b>right ear pain</b>. Otoscopy is <b>completely normal</b> bilaterally. Hearing is intact.",
      prompts: [
        { q: "What category of otalgia is this, and what's the concern?", a: "Referred otalgia with a normal ear exam. In an older smoker this is a red flag for a head & neck malignancy referring pain via CN V/VII/IX/X: base of tongue, tonsil, hypopharynx, or larynx." },
        { q: "Key next step?", a: "Refer for a full mucosal exam including flexible laryngoscopy; do not stop at a normal ear." }
      ],
      teaching: "Otalgia + normal ear exam in an adult smoker = scope the upper aerodigestive tract."
    },
    {
      id: "case-sudden-snhl",
      ukmla: "Hearing loss",
      source: "AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019.",
      stem: "A <b>34-year-old</b> notices her <b>right ear went muffled over a day</b> with new ringing. No wax. <b>Weber lateralizes left; Rinne positive bilaterally.</b>",
      prompts: [
        { q: "What does the tuning-fork pattern show?", a: "A sensorineural pattern on the right (Weber to the better ear, Rinne positive), not conductive/wax." },
        { q: "Diagnosis and urgency?", a: "Sudden SNHL, an otologic emergency: urgent audiogram and MRI to exclude retrocochlear pathology. Oral ± intratympanic corticosteroids may be offered via shared decision-making (2019 AAO-HNS update: an option, not a mandate, since spontaneous recovery is common and the placebo-controlled evidence is weak)." }
      ],
      teaching: "Sudden SNHL is time-sensitive and often dismissed as wax; the bedside forks separate them in seconds."
    },
    {
      id: "case-button-battery",
      ukmla: "Ear and nasal discharge",
      source: "National Capital Poison Center / AAP button-battery ingestion & insertion guidance (2020).",
      stem: "A <b>3-year-old</b> has <b>one day of foul, blood-tinged discharge from the left nostril</b>. On inspection there is a shiny round object high in the nasal cavity.",
      prompts: [
        { q: "What is this until proven otherwise, and why the urgency?", a: "A <b>button battery</b>: it causes liquefactive necrosis and septal perforation within hours. This is an emergency, not a routine foreign body." },
        { q: "What do you do?", a: "Immediate removal (ENT); do not irrigate or delay. Any battery in the nose or esophagus is time-critical." }
      ],
      teaching: "Unilateral foul nasal discharge in a child = foreign body, and if it's a battery, the clock is in hours."
    },
    {
      id: "case-airway-pta",
      ukmla: "Sore throat",
      source: "AAO-HNS patient education, peritonsillar abscess recognition & management.",
      stem: "A <b>19-year-old</b> has severe sore throat, <b>trismus</b>, a <b>muffled 'hot potato' voice</b>, and drools. Temperature 39°C.",
      prompts: [
        { q: "Most likely diagnosis?", a: "Peritonsillar abscess (quinsy): trismus + muffled voice + uvular deviation. Watch the airway and for spread to deep neck spaces." },
        { q: "What must you assess first, and manage?", a: "Airway first. Then needle aspiration / incision & drainage plus antibiotics; escalate to ENT." }
      ],
      teaching: "<figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/peritonsilllar abscess.png' alt='Peritonsilllar abscess' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Peritonsillar abscess presenting with trismus, muffled voice, and drooling; airway first, then drainage.</figcaption></figure>Muffled voice + trismus + drooling = think abscess and airway before anything else."
    },
    {
      id: "case-neck-mass",
      ukmla: "Neck lump",
      source: "NCCN Clinical Practice Guidelines in Oncology: Head and Neck Cancers, neck mass workup.",
      stem: "A <b>61-year-old smoker</b> has a <b>firm 3 cm level II neck lump present for 6 weeks</b>, non-tender, not moving.",
      prompts: [
        { q: "What's the rule here?", a: "A persistent firm neck mass in an adult is malignancy (often metastatic squamous cell carcinoma) until proven otherwise." },
        { q: "How do you work it up, and what do you avoid?", a: "Mucosal exam (± laryngoscopy), contrast-enhanced imaging (CT or MRI), and FNA: FNA is strongly preferred over open excisional biopsy, which can compromise oncologic management. FNA can even precede imaging when done by an experienced operator, and anticoagulation is not a contraindication." }
      ],
      teaching: "Adult + persistent neck mass + smoker = cancer workup with imaging AND FNA, never open biopsy first. A cystic node in a middle-aged patient can still be HPV-related oropharyngeal cancer: don't assume it's benign."
    },
    {
      id: "case-epistaxis",
      ukmla: "Epistaxis",
      source: "AAO-HNSF Clinical Practice Guideline: Nosebleed (Epistaxis), 2020.",
      stem: "A <b>74-year-old on warfarin</b> has a brisk <b>left-sided nosebleed</b> for 30 minutes at home. He is hemodynamically stable on arrival.",
      prompts: [
        { q: "First-line management before anything invasive?", a: "Sit forward, pinch the <b>cartilaginous</b> (soft) part of the nose firmly for 10-15 minutes, <b>plus a topical vasoconstrictor (e.g. oxymetazoline)</b> as an effective adjunct. Most bleeds are anterior (Kiesselbach's plexus) and settle with compression + oxymetazoline alone." },
        { q: "What if it doesn't stop, and what else do you check?", a: "Topical tranexamic acid (e.g. 500 mg/5 mL on a pledget for 10-15 min) is a reasonable adjunct before packing, especially in anticoagulated patients. If still bleeding, escalate to cautery or packing; consider a posterior bleed (heavier, needs posterior packing/admission). Check the <b>INR</b> and reverse if supratherapeutic." }
      ],
      teaching: "<figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/epistaxis_mgmt.png' alt='Epistaxis mgmt' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Anterior epistaxis on anticoagulation managed with compression, topical vasoconstrictor, and INR check.</figcaption></figure>Pressure on the soft part of the nose, not the bony bridge, stops most nosebleeds. Always check anticoagulation."
    },
    {
      id: "case-bppv",
      ukmla: ["Vertigo", "Dizziness"],
      source: "AAO-HNSF Clinical Practice Guideline: BPPV (Update), 2017; Kattah et al., HINTS exam, Stroke 2009.",
      stem: "A <b>62-year-old</b> gets <b>seconds-long spinning</b> whenever he rolls over in bed or looks up. Hearing is normal; neuro exam is normal.",
      prompts: [
        { q: "Likely diagnosis and the confirming test?", a: "BPPV: confirm with the <b>Dix-Hallpike</b> maneuver (reproduces vertigo + characteristic nystagmus)." },
        { q: "Treatment, and one central red flag to screen for?", a: "<b>Epley</b> repositioning. Screen for central signs (vertical/direction-changing nystagmus, normal head-impulse test, the HINTS exam) before settling on BPPV." }
      ],
      teaching: "Brief + positional + hearing intact = BPPV; but always rule out the central red flags."
    },
    {
      id: "case-hoarseness",
      ukmla: "Hoarseness and voice change",
      source: "AAO-HNSF Clinical Practice Guideline: Hoarseness (Dysphonia) (Update), 2018.",
      stem: "A <b>63-year-old smoker</b> has been <b>hoarse for 6 weeks</b>. No sore throat now. He's otherwise well.",
      prompts: [
        { q: "What does the duration + smoking mandate?", a: "Hoarseness &gt;2-4 weeks in a smoker requires <b>laryngoscopy to exclude laryngeal cancer</b>: do not keep treating it as laryngitis." },
        { q: "If the vocal fold is immobile, what else must you consider?", a: "Vocal-fold paralysis from a lesion along the <b>recurrent laryngeal nerve</b> (lung apex, thyroid, mediastinum): image the whole nerve course." }
      ],
      teaching: "<figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/recurrent_laryngeal_nerve_course_2.png' alt='Recurrent laryngeal nerve course' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Persistent hoarseness in a smoker requiring laryngoscopy, with vocal-fold paralysis raised via recurrent laryngeal nerve course.</figcaption></figure><strong>Clinical Pearl:</strong> Persistent hoarseness in a smoker requires flexible laryngoscopy; voice change is often the earliest sign of laryngeal malignancy."
    },
    {
      id: "case-orbital-cellulitis",
      ukmla: "Facial/periorbital swelling",
      source: "Chandler et al., orbital complications of sinusitis staging, Laryngoscope 1970; AAO-HNSF Adult Sinusitis CPG, 2015.",
      stem: "A <b>9-year-old</b> with a week of a cold now has a <b>swollen, red left eyelid</b>, <b>eye pain on looking around</b>, and the eye looks pushed forward.",
      prompts: [
        { q: "What complication is this, and of what?", a: "Orbital cellulitis (± subperiosteal abscess) complicating <b>ethmoid sinusitis</b>: the thin lamina papyracea lets infection into the orbit." },
        { q: "Which findings make it an emergency, and what do you do?", a: "<b>Proptosis, painful/limited eye movements, reduced acuity or color vision</b> = post-septal disease. Urgent contrast <b>CT</b>, IV antibiotics, and ophthalmology/ENT; may need surgical drainage." }
      ],
      teaching: "<figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/acute_sinusitis_complications.png' alt='Acute sinusitis complications' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Orbital cellulitis/subperiosteal abscess complicating pediatric ethmoid sinusitis via the lamina papyracea.</figcaption></figure>Eye signs with sinusitis (proptosis, painful eye movement, vision change) = sight- and life-threatening: image and admit."
    },
    {
      id: "case-bells-vs-central",
      ukmla: "Facial weakness",
      source: "AAN Practice Guideline: Bell's Palsy, 2012.",
      stem: "A <b>40-year-old</b> wakes with a <b>drooping right face</b>: the mouth and the <b>forehead</b> are both affected. No limb weakness, no other neuro signs.",
      prompts: [
        { q: "Peripheral or central, and how do you know?", a: "<b>Peripheral (LMN)</b>: the <b>forehead is involved</b>. A central (UMN) lesion spares the forehead. So this is a peripheral palsy, most commonly <b>Bell's palsy</b> (a diagnosis of exclusion)." },
        { q: "What must you not miss?", a: "If the forehead were <b>spared</b>, treat as a <b>stroke</b>. And with ear disease/weakness, think otologic causes (cholesteatoma, necrotizing OE, tumor): an ENT red flag." },
        { q: "What's first-line treatment for Bell's palsy, and one supportive measure?", a: "<b>Oral corticosteroids started within 72 hours</b> of onset, the mainstay (Level A, AAN). Antiviral monotherapy is <b>not effective</b>; adding an antiviral to steroids offers at most a small extra benefit, mainly considered in severe palsy. Protect the eye with <b>lubricating drops ± taping</b> if eyelid closure is incomplete." }
      ],
      teaching: "<figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/facial_nerve_course.png' alt='Facial nerve course' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Distinguishing peripheral (Bell&#39;s) from central facial palsy using forehead involvement/sparing.</figcaption></figure>The forehead is the discriminator: involved = peripheral (Bell's); spared = central (stroke). Bell's palsy itself is treated with early oral steroids, not antivirals alone."
    },
    {
      id: "case-cerumen-impaction",
      ukmla: ["Hearing loss", "Painful ear"],
      source: "AAO-HNSF Clinical Practice Guideline: Cerumen Impaction (Update), 2017.",
      stem: "A <b>68-year-old on warfarin</b> reports 2 weeks of <b>muffled hearing and fullness</b> in his right ear. Otoscopy shows the canal <b>completely occluded by wax</b>; the TM cannot be visualized.",
      prompts: [
        { q: "Does 'wax on the exam' by itself mean treatment is needed?", a: "No. Cerumen impaction is defined as wax that is <b>symptomatic</b> (as here: muffled hearing, fullness) or that <b>obstructs</b> visualization/testing, not wax alone." },
        { q: "How does the anticoagulation change your approach?", a: "Warfarin is a modifying factor that favors <b>cerumenolytics or gentle manual removal under direct vision</b> over irrigation, which carries more bleeding/trauma risk in an anticoagulated patient. Ear candling is never appropriate: no benefit, real burn/perforation risk." }
      ],
      teaching: "Cerumen impaction is a symptom-or-obstruction diagnosis, and modifying factors (anticoagulation, diabetes, immunocompromise, prior radiation, a non-intact TM, canal stenosis), not just 'there's wax', should steer the removal technique."
    }
  ],

  /* ==================== CARDS TAB (active recall, SRS-scheduled) ==================== */
  cards: [
    /* --- A. Examination & practical skills --- */
    { id:"otoscope-pinna", tags: ["FN", "clinical"], milestones:["MK1","PC4"], ukmla:"Painful ear", source:"Bailey's Head & Neck Surgery: Otolaryngology, 6th ed.; otoscopic examination technique.", front:"How do you position the pinna for otoscopy in an adult vs. a young child, and why?",
      back:"<strong>Adult:</strong> pull the pinna <strong>up and back</strong>. <strong>Young child:</strong> pull <strong>down and back</strong>. This straightens the cartilaginous canal for a clear TM view. Use the largest speculum that fits and brace your hand on the cheek." },
    { id:"tm-landmarks", tags: ["FN", "clinical"], milestones:["MK1","PC4"], ukmla:"Hearing loss", source:"Bailey's Head & Neck Surgery: Otolaryngology, 6th ed.; tympanic membrane landmarks.", front:"Name the normal tympanic-membrane landmarks.",
      back:"<ul><li><strong>Cone of light</strong> (antero-inferior)</li><li><strong>Umbo</strong> (central, most depressed)</li><li><strong>Manubrium + lateral process of malleus</strong></li><li><strong>Pars tensa</strong> and <strong>pars flaccida</strong></li></ul><figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/tympanic_membrane_landmarks.png' alt='Tympanic membrane landmarks' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Naming normal tympanic-membrane landmarks (cone of light, umbo, manubrium, pars tensa/flaccida).</figcaption></figure>" },
    { id:"weber", tags: ["FN", "clinical"], milestones:["PC4"], ukmla:"Hearing loss", source:"AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019; tuning-fork triage.", front:"Describe the Weber test and interpret lateralization.",
      back:"<strong>512 Hz</strong> on the vertex. <ul><li><strong>Conductive loss:</strong> lateralizes to the <strong>affected</strong> ear.</li><li><strong>SNHL:</strong> lateralizes to the <strong>better</strong> ear.</li><li>Normal: midline.</li></ul><div class=\"tbl-scroll\"><table><thead><tr><th>Scenario</th><th>Weber</th><th>Rinne (affected ear)</th></tr></thead><tbody><tr><td>Normal / symmetric</td><td>Midline</td><td>AC &gt; BC (positive)</td></tr><tr><td>Conductive loss, right</td><td>Lateralizes to <b>right</b> (affected)</td><td>BC &gt; AC (<b>negative</b>)</td></tr><tr><td>Sensorineural loss, right</td><td>Lateralizes to <b>left</b> (better)</td><td>AC &gt; BC (positive)</td></tr></tbody></table></div>" },
    { id:"rinne", tags: ["FN", "clinical"], milestones:["PC4"], ukmla:"Hearing loss", source:"AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019; tuning-fork triage.", front:"Describe the Rinne test and what a 'negative' Rinne means.",
      back:"512 Hz on the <strong>mastoid</strong> (BC) then beside the ear (AC). <ul><li><strong>Normal / SNHL:</strong> AC &gt; BC = <strong>positive</strong>.</li><li><strong>Conductive loss:</strong> BC &gt; AC = <strong>negative</strong> in the affected ear.</li></ul><div class=\"tbl-scroll\"><table><thead><tr><th>Scenario</th><th>Weber</th><th>Rinne (affected ear)</th></tr></thead><tbody><tr><td>Normal / symmetric</td><td>Midline</td><td>AC &gt; BC (positive)</td></tr><tr><td>Conductive loss, right</td><td>Lateralizes to <b>right</b> (affected)</td><td>BC &gt; AC (<b>negative</b>)</td></tr><tr><td>Sensorineural loss, right</td><td>Lateralizes to <b>left</b> (better)</td><td>AC &gt; BC (positive)</td></tr></tbody></table></div>" },
    { id:"fork-512", tags: ["FN", "clinical"], milestones:["PC4"], ukmla:"Hearing loss", source:"Standard audiologic examination teaching.", front:"Why is a 512 Hz fork the standard for hearing tests?",
      back:"It balances vibration decay and tactile perception. <strong>256 Hz</strong> is felt too much (false positives); <strong>1024 Hz</strong> decays too fast to compare." },
    { id:"whisper-test", tags: ["FN", "clinical"], milestones:["PC4"], ukmla:"Hearing loss", source:"Bailey's Head & Neck Surgery: Otolaryngology, 6th ed.; bedside hearing screen.", front:"How do you screen hearing at the bedside without equipment?",
      back:"<strong>Whispered-voice test:</strong> stand arm's length behind the patient, mask the other ear (rub the tragus), and whisper numbers/words for them to repeat. The <strong>finger-rub</strong> test is a quick alternative. Abnormal → formal audiogram." },
    { id:"ant-rhinoscopy", tags: ["FN", "clinical"], milestones:["MK1","PC5"], ukmla:"Nasal obstruction", source:"Standard rhinologic examination teaching.", front:"What do you assess on anterior rhinoscopy?",
      back:"Speculum + light: <strong>septum</strong> (deviation, perforation), <strong>inferior turbinates</strong>, <strong>mucosa</strong> (boggy/allergic vs erythematous), <strong>discharge</strong> (clear/purulent/bloody), <strong>polyps</strong> (pale, insensate). Note unilateral vs bilateral." },
    { id:"oropharynx-cn", tags: ["FN", "clinical"], milestones:["MK1","PC3"], ukmla:"Sore throat", source:"Standard head & neck examination teaching.", front:"On the oral/oropharyngeal exam, which cranial nerves are screened and how?",
      back:"<ul><li><strong>IX/X:</strong> palate elevation, uvula midline on 'ahh', gag.</li><li><strong>XII:</strong> tongue protrusion (deviates <em>toward</em> a weak side).</li><li><strong>V/VII:</strong> facial sensation and symmetry.</li></ul>Inspect tonsils, floor of mouth, lateral tongue (oral cancer sites)." },
    { id:"cn-screen-ent", tags: ["FN", "clinical"], milestones:["MK1","PC4"], ukmla:"Facial weakness", source:"Standard head & neck examination teaching.", front:"Which cranial nerves matter most on an ENT exam, and what does each tell you?",
      back:"<strong>V</strong> facial sensation/mastication; <strong>VII</strong> facial movement (forehead!), key with ear disease; <strong>VIII</strong> hearing/balance; <strong>IX/X</strong> palate, gag, <strong>voice</strong> (RLN), key with hoarseness; <strong>XII</strong> tongue." },
    { id:"neck-levels", tags: ["FN", "clinical"], milestones:["MK1","PC3"], ukmla:"Neck lump", source:"Standard head & neck examination teaching.", front:"How do you structure the neck exam and which nodal levels do you palpate?",
      back:"Region by region: <strong>levels I-VI</strong> (submental/submandibular, upper/mid/lower jugular, posterior triangle, central) plus <strong>level VII</strong> (superior mediastinal, imaging-only, not palpable), plus <strong>thyroid, parotid, supraclavicular</strong>. <figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/neck_levels_colored.png' alt='Neck levels colored' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Structuring the neck exam by nodal levels I-VI plus thyroid/parotid/supraclavicular.</figcaption></figure>" },
    { id:"scope-indication", tags: ["FN", "clinical"], milestones:["PC6","PC3"], ukmla:["Hoarseness and voice change","Swallowing problems"], source:"AAO-HNSF Clinical Practice Guideline: Hoarseness (Dysphonia) (Update), 2018; indications for laryngoscopy.", front:"Name common indications for flexible nasolaryngoscopy.",
      back:"Persistent <strong>hoarseness (&gt;2-4 wks)</strong>, <strong>dysphagia/odynophagia</strong>, globus with red flags, <strong>neck mass</strong>, stridor/airway concern, referred otalgia with a normal ear, and unexplained epistaxis/obstruction. Know when to <em>ask</em> for it." },
    { id:"fb-wax-awareness", tags: ["FN", "clinical"], milestones:["PC7","PC4"], ukmla:"Ear and nasal discharge", source:"AAO-HNSF Clinical Practice Guideline: Cerumen Impaction (Update), 2017.", front:"What should a student know about ear wax and ear/nose foreign bodies?",
      back:"<strong>Wax:</strong> softening drops then irrigation: <em>avoid irrigation if perforation/grommet</em>. <strong>Ear FB:</strong> don't push deeper; immobilize an insect (oil/lidocaine) before removal. <strong>Nasal FB (child):</strong> positive-pressure 'parent's kiss'. <strong>Any battery = emergency</strong> (separate card)." },

    /* --- B. Core investigations --- */
    { id:"audiogram-basics", tags: ["FN", "clinical"], milestones:["PC4","MK1"], ukmla:"Hearing loss", source:"Standard audiology teaching; AAO-HNSF Sudden Hearing Loss CPG (2019) for interpretation context.", front:"How do you read an audiogram at a glance?",
      back:"X = frequency (low→high Hz), Y = threshold in dB (louder downward). <strong>O = right air, X = left air; [ ] = bone.</strong> <strong>Air-bone gap</strong> = conductive; <strong>both down together</strong> = sensorineural; gap + both down = mixed.<figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/audiogram_interpretation.png' alt='Audiogram interpretation' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Reading an audiogram: axes, symbols, air-bone gap vs bilateral threshold drop.</figcaption></figure>" },
    { id:"tympanometry", tags: ["FN", "clinical"], milestones:["PC4"], ukmla:"Hearing loss", source:"Jerger, tympanogram classification, Archives of Otolaryngology 1970.", front:"What do tympanometry types A, B, and C mean?",
      back:"<strong>A</strong> = normal middle-ear pressure/compliance. <strong>B</strong> = flat: middle-ear <strong>effusion</strong> or perforation. <figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/tympanograms.png' alt='Tympanograms' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Tympanogram types A, B, C and the ear conditions each indicates.</figcaption></figure>" },
    { id:"ct-vs-mri", tags: ["FN", "clinical"], milestones:["MK1","PC3"], ukmla:["Hearing loss","Neck lump"], source:"ACR Appropriateness Criteria: Hearing Loss and/or Vertigo; Neck Mass.", front:"When do you choose CT vs MRI in ENT?",
      back:"<strong>CT:</strong> bone and air: sinuses, temporal bone, trauma, infection extent, stones. <strong>MRI:</strong> soft tissue: <strong>retrocochlear lesions</strong> (vestibular schwannoma), skull base, tumor extent and perineural spread." },

    /* --- C. Approach to the cardinal complaint --- */
    { id:"chl-vs-snhl", tags: ["FN", "clinical"], milestones:["PC4","MK3"], ukmla:"Hearing loss", source:"Standard otologic pathophysiology teaching.", front:"Contrast the common causes of conductive vs sensorineural hearing loss.",
      back:"<strong>Conductive:</strong> cerumen, effusion, TM perforation, otosclerosis, ossicular problems. <strong>Sensorineural:</strong> presbycusis, noise, ototoxicity, sudden SNHL, and (if asymmetric) retrocochlear lesions." },
    { id:"sudden-snhl", tags: ["FN", "clinical"], milestones:["PC4"], redFlag:true, ukmla:"Hearing loss", source:"AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019.", front:"Sudden sensorineural hearing loss is defined as a loss of at least <span class=\"cloze-blank\">[...]</span> across at least three frequencies within seventy-two hours.",
      back:"Sudden sensorineural hearing loss is defined as a loss of at least <mark class=\"cloze-answer\">30 decibels</mark> across at least three frequencies within seventy-two hours. It is an otologic emergency needing an urgent audiogram and MRI to exclude a retrocochlear lesion, and steroids may be offered as an option rather than a mandatory treatment." },
    { id:"asymmetric-snhl", tags: ["FN", "clinical"], milestones:["PC4"], redFlag:true, ukmla:["Hearing loss","Acoustic neuroma"], source:"ACR Appropriateness Criteria: Hearing Loss and/or Vertigo (asymmetric SNHL imaging).", front:"Asymmetric SNHL or unilateral tinnitus: what must you exclude?",
      back:"<strong>Vestibular schwannoma</strong> and other retrocochlear lesions: get an <strong>MRI</strong> of the internal auditory canals." },
    { id:"otalgia-referred", tags: ["FN", "clinical"], milestones:["PC4","PC3"], redFlag:true, ukmla:"Painful ear", source:"Bailey's Head & Neck Surgery: Otolaryngology, 6th ed.; referred otalgia.", front:"Ear pain but a completely NORMAL ear exam: what must you consider?",
      back:"<strong>Referred otalgia</strong> via CN V/VII/IX/X and C2-C3 (TMJ, teeth, tonsil, tongue base, larynx). <strong>In an adult smoker, otalgia + normal ear exam is a red flag for head & neck malignancy → laryngoscopy.</strong>" },
    { id:"otalgia-primary", tags: ["FN", "clinical"], milestones:["PC4"], ukmla:["Painful ear","Otitis externa"], source:"AAO-HNSF Clinical Practice Guideline: Acute Otitis Externa, 2014.", front:"In an adult, a new unilateral middle-ear effusion should prompt a nasopharyngeal exam to exclude <span class=\"cloze-blank\">[...]</span>, since acute otitis media is uncommon in this age group.",
      back:"In an adult, a new unilateral middle-ear effusion should prompt a nasopharyngeal exam to exclude <mark class=\"cloze-answer\">nasopharyngeal carcinoma</mark>, since acute otitis media is uncommon in this age group." },
    { id:"tinnitus", tags: ["FN", "clinical"], milestones:["PC4"], redFlag:true, ukmla:"Tinnitus", source:"AAO-HNSF Clinical Practice Guideline: Tinnitus, 2014.", front:"When is tinnitus a red flag rather than benign?",
      back:"Most tinnitus is subjective and benign. Worry about <strong>pulsatile</strong> tinnitus (vascular, image it) and <strong>unilateral/asymmetric</strong> tinnitus with hearing loss (retrocochlear, <strong>MRI</strong>)." },
    { id:"vertigo-periph", tags: ["FN", "clinical"], milestones:["PC4"], ukmla:["Vertigo","Dizziness","Benign paroxysmal positional vertigo","Ménière's disease"], source:"AAO-HNSF CPG: BPPV (Update), 2017; Bárány Society/AAO-HNS diagnostic criteria for Ménière's disease, 2015.", front:"Differentiate BPPV, vestibular neuritis, and Ménière's.",
      back:"<ul><li><strong>BPPV:</strong> brief positional vertigo; Dix-Hallpike; treat with Epley.</li><li><strong>Vestibular neuritis:</strong> acute constant vertigo for days, no hearing loss.</li><li><strong>Ménière's:</strong> episodic vertigo + fluctuating SNHL + tinnitus + aural fullness.</li></ul>" },
    { id:"central-vertigo", tags: ["FN", "clinical"], milestones:["PC4"], redFlag:true, scope:"sub-I", ukmla:"Vertigo", source:"Kattah et al., HINTS exam, Stroke 2009.", front:"What findings suggest a CENTRAL cause of vertigo?",
      back:"<strong>HINTS</strong> red flags: direction-changing/vertical nystagmus, a <strong>normal head-impulse test</strong>, skew deviation, plus other neuro signs → image for stroke." },
    { id:"facial-palsy", tags: ["FN", "clinical"], milestones:["PC4","MK1"], redFlag:true, ukmla:["Facial weakness","Bell's palsy"], source:"AAN Practice Guideline: Bell's Palsy, 2012.", front:"Facial weakness with a spared forehead should be treated as a <span class=\"cloze-blank\">[...]</span> until proven otherwise, since a peripheral lesion like Bell's palsy always involves the forehead.",
      back:"Facial weakness with a spared forehead should be treated as a <mark class=\"cloze-answer\">stroke</mark> until proven otherwise, since a peripheral lesion like Bell's palsy always involves the forehead. Bell's palsy itself is treated with oral corticosteroids started within seventy-two hours, since antivirals alone don't help." },
    { id:"nasal-obstruction", tags: ["FN", "clinical"], milestones:["PC5"], ukmla:"Nasal obstruction", source:"AAO-HNSF Clinical Practice Guideline: Adult Sinusitis (Update), 2015; Allergic Rhinitis, 2015.", front:"Work through the differential for chronic nasal obstruction.",
      back:"<strong>Allergic rhinitis</strong>, <strong>chronic rhinosinusitis</strong> (± polyps), <strong>septal deviation</strong>, turbinate hypertrophy, and (less common) neoplasm. Bilateral/variable → inflammatory; fixed unilateral → structural or neoplastic." },
    { id:"unilateral-nose", tags: ["FN", "clinical"], milestones:["PC5","PC7"], redFlag:true, ukmla:["Nasal obstruction","Epistaxis"], source:"AAO-HNS patient education: unilateral nasal red flags; AAP pediatric foreign-body literature.", front:"Unilateral nasal obstruction + bloody discharge: adult vs child?",
      back:"<strong>Adult:</strong> red flag for <strong>sinonasal neoplasm</strong>: endoscopy ± imaging. <strong>Child:</strong> <strong>foreign body</strong> until proven otherwise (and a battery is an emergency)." },
    { id:"epistaxis", tags: ["FN", "clinical"], milestones:["PC5","PC1"], ukmla:"Epistaxis", source:"AAO-HNSF Clinical Practice Guideline: Nosebleed (Epistaxis), 2020.", front:"Most anterior epistaxis arises from <span class=\"cloze-blank\">[...]</span>, and first-line treatment is firm pressure on the cartilaginous part of the nose plus a topical vasoconstrictor.",
      back:"Most anterior epistaxis arises from <mark class=\"cloze-answer\">Kiesselbach's plexus</mark>, and first-line treatment is firm pressure on the cartilaginous part of the nose plus a topical vasoconstrictor. If bleeding persists, topical tranexamic acid on a pledget is a reasonable adjunct before packing, especially in anticoagulated patients. Posterior bleeds are heavier and more often need packing or admission.<figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/kiesselbach_plexus.png' alt='Kiesselbach plexus' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Kiesselbach&#39;s plexus as the source of most anterior nosebleeds.</figcaption></figure>" },
    { id:"rhinorrhoea-anosmia", tags: ["FN", "clinical"], milestones:["PC5","MK2"], ukmla:["Ear and nasal discharge","Anosmia"], source:"AAO-HNSF Adult Sinusitis CPG, 2015; Meco et al., β2-transferrin testing for CSF leak, Am J Rhinol 2003.", front:"Approach to rhinorrhea and smell loss, and the one that's a red flag.",
      back:"Rhinorrhea: allergic (clear, itch, sneeze), infective (purulent), vasomotor. Anosmia: URI, chronic rhinosinusitis, head injury, ageing. <strong>Red flag:</strong> <strong>unilateral clear watery rhinorrhea after trauma/surgery = CSF leak</strong> (test β2-transferrin)." },
    { id:"sore-throat-centor", tags: ["FN", "clinical"], milestones:["MK3","PC6"], ukmla:"Sore throat", source:"IDSA Clinical Practice Guideline: Group A Streptococcal Pharyngitis, 2012.", front:"How do you approach acute sore throat?",
      back:"Most are <strong>viral</strong>. Use the <strong>Centor score</strong> for likely GAS (fever, tonsillar exudate, tender anterior nodes, no cough) to guide testing/antibiotic decisions. Escalate for airway/abscess red flags.<figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/sore_throat_centor.png' alt='Sore throat centor' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Approach to acute sore throat using the Centor score.</figcaption></figure>" },
    { id:"hoarseness", tags: ["FN", "clinical"], milestones:["PC6","PC3"], redFlag:true, ukmla:"Hoarseness and voice change", source:"AAO-HNSF Clinical Practice Guideline: Hoarseness (Dysphonia) (Update), 2018.", front:"When does hoarseness require laryngoscopy, and why?",
      back:"<strong>Hoarseness &gt;2-4 weeks</strong>, especially a <strong>smoker/drinker</strong>, needs <strong>laryngoscopy to exclude laryngeal cancer</strong>. Also consider vocal-fold paralysis (RLN course). Most acute hoarseness is viral laryngitis." },
    { id:"dysphagia-globus", tags: ["FN", "clinical"], milestones:["PC6","PC3"], redFlag:true, ukmla:"Swallowing problems", source:"Standard otolaryngology teaching on red-flag dysphagia.", front:"Distinguish globus from dysphagia, and give the dysphagia red flags.",
      back:"<strong>Globus</strong> = intermittent 'lump' sensation, swallowing intact, usually benign. <strong>Dysphagia red flags:</strong> progressive, solids &gt; liquids, weight loss, odynophagia, older smoker → urgent workup for esophageal/hypopharyngeal cancer." },
    { id:"osa-screen", tags: ["FN", "clinical"], milestones:["PC9"], ukmla:["Snoring","Obstructive sleep apnoea"], source:"Chung F et al., STOP-BANG questionnaire, Anesthesiology 2008; AASM clinical guideline for OSA.", front:"How do you screen for obstructive sleep apnea?",
      back:"<strong>STOP-BANG</strong>: <strong>S</strong>noring, <strong>T</strong>iredness, <strong>O</strong>bserved apneas, <strong>P</strong>ressure (HTN), <strong>B</strong>MI &gt;35, <strong>A</strong>ge &gt;50, <strong>N</strong>eck &gt;40 cm, <strong>G</strong>ender male. ≥3 = higher risk → refer for a sleep study (polysomnography)." },
    { id:"neck-mass-adult", tags: ["FN", "clinical"], milestones:["PC3"], redFlag:true, ukmla:"Neck lump", source:"NCCN Clinical Practice Guidelines in Oncology: Head and Neck Cancers.", front:"A firm, persistent adult neck mass present for more than <span class=\"cloze-blank\">[...]</span> is malignancy until proven otherwise.",
      back:"A firm, persistent adult neck mass present for more than <mark class=\"cloze-answer\">two to three weeks</mark> is malignancy until proven otherwise. Workup pairs contrast-enhanced CT or MRI with FNA, which is favored over open excisional biopsy." },
    { id:"salivary-swelling", tags: ["FN", "clinical"], milestones:["PC3"], ukmla:"Neck lump", source:"Bailey's Head & Neck Surgery: Otolaryngology, 6th ed.; salivary gland disease.", front:"Approach to a salivary gland swelling.",
      back:"<strong>Diffuse/bilateral:</strong> viral (mumps), sialadenosis, autoimmune (Sjögren). <strong>Discrete/unilateral:</strong> <strong>stone</strong> (meal-related swelling) or <strong>tumor</strong> (parotid; usually pleomorphic adenoma). <strong>Red flags:</strong> pain, rapid growth, or <strong>facial-nerve weakness</strong> = malignant.<figure class='note-fig' data-credit=\"Diagnostic Approach to Salivary Gland Swelling. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/image29.png' alt='Salivary gland swelling diagnostic approach' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Diagnostic approach to salivary gland swelling.</figcaption></figure>" },
    { id:"midline-neck", tags: ["FN", "clinical"], milestones:["PC3"], ukmla:"Neck lump", source:"American Thyroid Association guidelines on thyroid nodule evaluation, 2015.", front:"Approach to a midline anterior neck swelling.",
      back:"<strong>Thyroglossal duct cyst:</strong> midline, moves up on <strong>tongue protrusion</strong> and swallowing. <strong>Thyroid</strong> nodule/goitre: moves with swallowing only. Assess thyroid status, ultrasound. Also dermoid. Lateral masses follow the adult-neck-mass rule." },

    /* --- D. ENT emergencies --- */
    { id:"airway-redflags", tags: ["FN", "clinical"], milestones:["PC1"], redFlag:true, ukmla:"Stridor", source:"AAO-HNS pediatric airway emergency teaching.", front:"Which airway red flags demand urgent action, and what's the principle?",
      back:"<strong>Stridor, drooling, tripod positioning, muffled voice, severe odynophagia.</strong> Airway first: get senior ENT plus anesthetics, keep the patient calm and upright, and don't provoke a child's throat." },
    { id:"epiglottitis", tags: ["FN", "clinical"], milestones:["PC1","PC7"], redFlag:true, ukmla:["Stridor","Epiglottitis"], source:"IDSA / pediatric infectious-disease guidance on epiglottitis (supraglottitis) management.", front:"What is the classic presentation and the critical DON'T of epiglottitis?",
      back:"Rapid severe sore throat, <strong>drooling</strong>, <strong>tripod</strong> posture, muffled 'hot potato' voice, stridor. <strong>Do NOT examine the throat or lie the (child) patient flat</strong>: it can precipitate airway loss. Controlled airway in the OR + IV antibiotics.<figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/acute_epiglottitis.png' alt='Acute epiglottitis' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Classic epiglottitis presentation (drooling, tripod, muffled voice, stridor) and the rule against examining the throat.</figcaption></figure>" },
    { id:"pta", tags: ["FN", "clinical"], milestones:["PC1","PC6"], redFlag:true, ukmla:"Sore throat", source:"AAO-HNS patient education: peritonsillar abscess management.", front:"What triad suggests a peritonsillar abscess?",
      back:"<strong>Trismus</strong>, <strong>'hot potato' muffled voice</strong>, and <strong>uvular deviation</strong> away from a swollen peritonsil region. Needs <strong>drainage</strong> (needle/I&D) + antibiotics; watch the airway and deep-neck spread.<figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/peritonsilllar abscess.png' alt='Peritonsilllar abscess' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Peritonsillar abscess triad (trismus, muffled voice, uvular deviation) and management.</figcaption></figure>" },
    { id:"deep-neck-infection", tags: ["FN", "clinical"], milestones:["PC1"], redFlag:true, ukmla:"Neck lump", source:"Bailey's Head & Neck Surgery: Otolaryngology, 6th ed.; deep neck space infections.", front:"<span class=\"cloze-blank\">[...]</span> is a rapidly spreading bilateral submandibular infection, usually odontogenic, that threatens the airway through tongue elevation even before a drainable collection forms.",
      back:"<mark class=\"cloze-answer\">Ludwig's angina</mark> is a rapidly spreading bilateral submandibular infection, usually odontogenic, that threatens the airway through tongue elevation even before a drainable collection forms. Retropharyngeal abscess is the deep neck infection to suspect instead in a young child with neck stiffness and a muffled voice, often following a preceding throat or ear infection." },
    { id:"post-tonsillectomy-bleed", tags: ["FN", "clinical"], milestones:["PC6"], redFlag:true, ukmla:"Sore throat", source:"AAO-HNSF Clinical Practice Guideline: Tonsillectomy in Children (Update), 2019.", front:"How do you approach post-tonsillectomy hemorrhage?",
      back:"<strong>Primary</strong> (&lt;24h) vs <strong>secondary</strong> (~5-10 days, often infection). Can be life-threatening (swallowed blood hides volume). <strong>ABC</strong>, IV access, call ENT/anesthetics; may need to return to the OR." },
    { id:"septal-haematoma", tags: ["FN", "clinical"], milestones:["PC2","PC5"], redFlag:true, ukmla:"Nasal obstruction", source:"AAO-HNS facial-trauma teaching: septal hematoma management.", front:"Why must you look for a septal hematoma after nasal trauma?",
      back:"A <strong>boggy, cherry-red bilateral septal swelling</strong> deprives the cartilage of its blood supply. Undrained → <strong>cartilage necrosis (saddle-nose)</strong> or abscess. <strong>Incise and drain urgently.</strong>" },
    { id:"foreign-bodies", tags: ["FN", "clinical"], milestones:["PC7"], ukmla:["Ear and nasal discharge","Stridor"], source:"AAP clinical guidance on pediatric foreign-body management.", front:"Many aspirated airway foreign bodies, such as food or plastic, are <span class=\"cloze-blank\">[...]</span>, so a normal chest X-ray does not exclude one.",
      back:"Many aspirated airway foreign bodies, such as food or plastic, are <mark class=\"cloze-answer\">radiolucent</mark>, so a normal chest X-ray does not exclude one. Bronchoscopy is needed whenever aspiration is suspected despite normal imaging." },
    { id:"button-battery", tags: ["FN", "clinical"], milestones:["PC7"], redFlag:true, ukmla:"Ear and nasal discharge", source:"National Capital Poison Center / AAP button-battery guidance, 2020.", front:"Why is a button battery different from any other foreign body?",
      back:"It causes <strong>liquefactive necrosis within hours</strong>. A battery in the <strong>nose</strong> (septal perforation) or <strong>esophagus</strong> (perforation, fistula) needs <strong>immediate removal</strong>: do not observe, do not irrigate." },
    { id:"sinusitis-complications", tags: ["FN", "clinical"], milestones:["PC5"], redFlag:true, ukmla:["Facial/periorbital swelling","Rhinosinusitis"], source:"Chandler et al., Laryngoscope 1970; AAO-HNSF Adult Sinusitis CPG, 2015.", front:"What complications of sinusitis must you not miss?",
      back:"<strong>Orbital:</strong> proptosis, <strong>painful/limited eye movement, reduced acuity</strong> (orbital cellulitis/abscess). <strong>Intracranial:</strong> meningitis, abscess, cavernous sinus thrombosis; <strong>Pott's puffy tumor</strong> (frontal). Urgent contrast CT + IV antibiotics ± surgery.<figure class='note-fig' data-credit='Add figure citation'><img class='zoomable' src='assets/img/figures/acute_sinusitis_complications.png' alt='Acute sinusitis complications' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Orbital and intracranial complications of sinusitis requiring urgent CT and IV antibiotics.</figcaption></figure>" },

    /* --- E. The six-competency spread (the differentiators) --- */
    { id:"ent-history", tags: ["FN", "clinical"], milestones:["ICS1","MK3"], ukmla:["Hearing loss","Nasal obstruction","Hoarseness and voice change","Neck lump"], source:"Bailey's Head & Neck Surgery: Otolaryngology, 6th ed.; structured ENT history.", front:"What structure keeps an ENT history efficient across ear, nose, throat, and neck?",
      back:"Screen each region's cardinal symptoms: <strong>ear</strong> (hearing, otalgia, otorrhea, tinnitus, vertigo), <strong>nose</strong> (obstruction & side, discharge, epistaxis, smell), <strong>throat/voice</strong> (dysphonia, dysphagia, odynophagia, globus), <strong>neck</strong> (lump: duration, growth). Always pin <strong>laterality, duration, red flags</strong>, plus smoking/alcohol." },
    { id:"spikes", tags: ["FN", "clinical"], milestones:["ICS1","PC3"], scope:"sub-I", ukmla:"Neck lump", source:"Baile WF et al., SPIKES protocol, The Oncologist 2000.", front:"How do you break bad news (e.g., a head & neck cancer diagnosis)?",
      back:"<strong>SPIKES</strong>: <strong>S</strong>etting, <strong>P</strong>erception, <strong>I</strong>nvitation, <strong>K</strong>nowledge (warning shot, plain language), <strong>E</strong>motions (empathy, silence), <strong>S</strong>trategy/summary. Communication is an ACGME competency most fact decks skip." },
    { id:"consent", tags: ["FN", "clinical"], milestones:["Prof1","ICS1"], ukmla:"Neck lump", source:"AMA Code of Medical Ethics: Informed Consent; Joint Commission consent standards.", front:"What are the elements of valid informed consent?",
      back:"<strong>Capacity</strong>, <strong>disclosure</strong> (diagnosis, procedure, <strong>risks/benefits, alternatives</strong>, risk of doing nothing), <strong>understanding</strong>, <strong>voluntariness</strong>. Document, and confirm teach-back." },
    { id:"sbar-consult", tags: ["FN", "clinical"], milestones:["ICS2","SBP2"], ukmla:"Stridor", source:"Institute for Healthcare Improvement: SBAR communication tool.", front:"How should you call an ENT consult so it's useful?",
      back:"<strong>SBAR</strong>: <strong>S</strong>ituation (who + one-line why), <strong>B</strong>ackground (history, airway status), <strong>A</strong>ssessment (your read), <strong>R</strong>ecommendation (what you need, by when). Airway concerns first." },
    { id:"ebm-appraise", tags: ["FN", "clinical"], milestones:["PBLI1"], ukmla:"Hearing loss", source:"Users' Guides to the Medical Literature, JAMA; CEBM levels of evidence.", front:"Before applying a guideline or study to a patient, what do you check?",
      back:"Is it <strong>valid</strong> (design, bias), are the <strong>results</strong> meaningful (effect size + confidence interval, not just a p-value), and are they <strong>applicable</strong> to <em>this</em> patient?" },
    { id:"safety-timeout", tags: ["FN", "clinical"], milestones:["SBP1","Prof2"], ukmla:"Neck lump", source:"WHO Surgical Safety Checklist, 2009; Joint Commission Universal Protocol.", front:"What is the surgical 'time-out,' and why does it matter in ENT?",
      back:"A pre-procedure pause confirming <strong>correct patient, procedure, and site/side</strong> (laterality matters enormously in ENT), plus allergies, antibiotics, equipment. Front-line patient safety." },
    { id:"prescribing-ent", tags: ["FN", "pharm"], milestones:["SBP3","PC5"], ukmla:["Painful ear","Ear and nasal discharge"], source:"AAO-HNSF CPG: Acute Otitis Externa, 2014; Allergic Rhinitis, 2015; CDC Core Elements of Antibiotic Stewardship.", front:"Aminoglycoside ear drops should be avoided in a patient with a <span class=\"cloze-blank\">[...]</span>, because of the risk of ototoxicity.",
      back:"Aminoglycoside ear drops should be avoided in a patient with a <mark class=\"cloze-answer\">tympanic membrane perforation</mark>, because of the risk of ototoxicity. Most sore throats and cases of acute otitis media are viral and self-limiting, so antibiotic stewardship matters just as much here." },

    /* --- F. UKMLA coverage completion (gap-fill cards) --- */
    { id:"allergic-rhinitis", tags: ["FN", "clinical"], milestones:["MK2","PC5"], ukmla:"Allergies", source:"AAO-HNSF Clinical Practice Guideline: Allergic Rhinitis, 2015.", front:"First-line treatment for allergic rhinitis, after allergen avoidance, is <span class=\"cloze-blank\">[...]</span>.",
      back:"First-line treatment for allergic rhinitis, after allergen avoidance, is <mark class=\"cloze-answer\">intranasal corticosteroids</mark>. It classically presents with clear, itchy rhinorrhea and bilateral nasal obstruction, classified by ARIA as intermittent or persistent rather than by a seasonal/perennial trigger." },
    { id:"facial-pain-differential", tags: ["FN", "clinical"], milestones:["PC5","MK3"], ukmla:"Facial pain", source:"AAO-HNSF Adult Sinusitis CPG, 2015; International Classification of Headache Disorders (ICHD-3).", front:"Facial pain that is brief and electric-shock-like, rather than tied to nasal congestion, suggests <span class=\"cloze-blank\">[...]</span> rather than a sinogenic cause.",
      back:"Facial pain that is brief and electric-shock-like, rather than tied to nasal congestion, suggests <mark class=\"cloze-answer\">trigeminal neuralgia</mark> rather than a sinogenic cause. Facial pain with a neurologic deficit, or pain that persists despite adequate sinus treatment, should raise concern for a neoplasm and prompt imaging." },
    { id:"approach-to-discharge", tags: ["FN", "clinical"], milestones:["PC4","PC5"], ukmla:"Ear and nasal discharge", source:"AAO-HNSF CPG: Acute Otitis Externa, 2014; Adult Sinusitis, 2015; Meco et al. on CSF leak testing, 2003.", front:"In both the ear and the nose, discharge that is unilateral and foul-smelling points to a <span class=\"cloze-blank\">[...]</span> in a child or a neoplasm in an adult.",
      back:"In both the ear and the nose, discharge that is unilateral and foul-smelling points to a <mark class=\"cloze-answer\">foreign body</mark> in a child or a neoplasm in an adult. Unexplained unilateral clear watery nasal discharge should be tested for CSF with beta-2 transferrin." },
    { id:"cough-ent-angle", tags: ["FN", "clinical"], milestones:["PC5","PC6"], ukmla:"Cough", source:"ACCP/CHEST Cough Guidelines; AAO-HNS teaching on laryngopharyngeal reflux and post-nasal drip.", front:"From an ENT standpoint, what upper-airway causes should you consider for chronic cough?",
      back:"<strong>Upper airway cough syndrome</strong> (post-nasal drip from rhinosinusitis or allergic rhinitis) and <strong>laryngopharyngeal reflux</strong> (throat clearing, globus, hoarseness, chronic laryngitis) are the two ENT-driven causes to screen for alongside asthma and GERD. <strong>Red flag:</strong> cough + hoarseness + smoker → laryngoscopy to exclude laryngeal pathology, not just empiric treatment for post-nasal drip." },
    { id:"infectious-mononucleosis", tags: ["FN", "clinical"], milestones:["MK3","PC6"], ukmla:["Sore throat","Infectious mononucleosis"], source:"CDC clinical guidance on EBV/infectious mononucleosis.", front:"Giving <span class=\"cloze-blank\">[...]</span> for presumed bacterial tonsillitis in a patient who actually has infectious mononucleosis classically triggers a florid morbilliform rash.",
      back:"Giving <mark class=\"cloze-answer\">amoxicillin or ampicillin</mark> for presumed bacterial tonsillitis in a patient who actually has infectious mononucleosis classically triggers a florid morbilliform rash. Watch for airway obstruction from tonsillar hypertrophy, and advise avoiding contact sports for three to four weeks given the risk of splenic rupture." },

    /* --- G. High-frequency clinic conditions (added after an OpenEvidence coverage review, Aug 2026) --- */
    { id:"aom-ome-basics", tags: ["FN", "clinical"], milestones:["MK1","PC5"], ukmla:["Painful ear","Hearing loss","Otitis media"], source:"AAO-HNSF/AAP Clinical Practice Guideline: Diagnosis and Management of Acute Otitis Media (Update), 2013; AAO-HNSF CPG: Otitis Media with Effusion (Update), 2016.", front:"Otitis media with effusion, fluid in the middle ear without signs of acute infection, is managed with <span class=\"cloze-blank\">[...]</span> rather than antibiotics.",
      back:"Otitis media with effusion, fluid in the middle ear without signs of acute infection, is managed with <mark class=\"cloze-answer\">watchful waiting</mark> rather than antibiotics. Tympanostomy tubes are added if the effusion persists beyond three months bilaterally or hearing is at risk. For acute otitis media, give antibiotics immediately (rather than observe) if: age &lt;6 months; otorrhea; severe symptoms (T &ge;39&deg;C, or moderate-severe/&ge;48h otalgia); or bilateral AOM in a child 6-23 months. First-line when treating is high-dose amoxicillin (80-90 mg/kg/day)." },
    { id:"cerumen-impaction-mgmt", tags: ["FN", "clinical"], milestones:["PC4","PC7"], ukmla:["Hearing loss","Painful ear"], source:"AAO-HNSF Clinical Practice Guideline: Cerumen Impaction (Update), 2017.", front:"Cerumen impaction is defined as wax that is <span class=\"cloze-blank\">[...]</span>, not simply wax that is visible on exam.",
      back:"Cerumen impaction is defined as wax that is <mark class=\"cloze-answer\">symptomatic or obstructs visualization or testing</mark>, not simply wax that is visible on exam. Manual removal under direct vision is favored over irrigation in a patient on anticoagulation or with a non-intact tympanic membrane." },
    { id:"tonsillectomy-indications", tags: ["FN", "clinical"], milestones:["MK1","PC9"], ukmla:["Sore throat","Tonsillitis"], source:"AAO-HNSF Clinical Practice Guideline: Tonsillectomy in Children (Update), 2019.", front:"The leading indication for tonsillectomy in children today is <span class=\"cloze-blank\">[...]</span> from tonsillar hypertrophy, rather than recurrent throat infection.",
      back:"The leading indication for tonsillectomy in children today is <mark class=\"cloze-answer\">obstructive sleep-disordered breathing (OSA)</mark> from tonsillar hypertrophy, rather than recurrent throat infection. Recurrent infection still qualifies under the Paradise criteria, classically seven or more documented episodes in a year." },
    { id:"thyroid-nodule-workup-fn", tags: ["FN", "clinical"], milestones:["PC4","MK1"], ukmla:"Neck lump", source:"American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules, 2015; ACR TI-RADS Atlas, 2017.", front:"The first step in the workup of a thyroid nodule is checking the <span class=\"cloze-blank\">[...]</span>.",
      back:"The first step in the workup of a thyroid nodule is checking the <mark class=\"cloze-answer\">TSH</mark>. A suppressed TSH points to a hot, functioning nodule on radionuclide scan, which is rarely malignant and usually not biopsied." },
    { id:"tm-perforation-trauma", tags: ["FN", "clinical"], milestones:["PC4","MK1"], ukmla:["Painful ear","Hearing loss"], source:"Bailey's Head & Neck Surgery: Otolaryngology, 6th ed.; traumatic TM perforation and chronic otitis media.", front:"A marginal or attic tympanic-membrane perforation is called 'unsafe' because it raises concern for a <span class=\"cloze-blank\">[...]</span> forming through the defect.",
      back:"A marginal or attic tympanic-membrane perforation is called 'unsafe' because it raises concern for a <mark class=\"cloze-answer\">cholesteatoma</mark> forming through the defect. Most simple perforations after trauma heal on their own with a dry ear and no irrigation." },
    { id:"ototoxic-drugs-card", tags: ["FN", "clinical"], milestones:["PC4","MK3"], ukmla:["Hearing loss","Tinnitus"], source:"Standard clinical pharmacology teaching on ototoxicity.", front:"Among ototoxic drugs, the platinum chemotherapy agent <span class=\"cloze-blank\">[...]</span> classically causes permanent, dose-related hearing loss.",
      back:"Among ototoxic drugs, the platinum chemotherapy agent <mark class=\"cloze-answer\">cisplatin</mark> classically causes permanent, dose-related hearing loss. New hearing loss or tinnitus in a patient on any ototoxic medication should prompt asking about the drug before assuming a primary otologic cause." },
    { id:"surgical-airway-card", tags: ["FN", "clinical"], milestones:["PC1","PC7"], redFlag:true, ukmla:"Stridor", source:"Standard emergency airway management teaching.", front:"Emergency surgical airway access, when the patient can't be intubated or oxygenated, is achieved through the <span class=\"cloze-blank\">[...]</span>, located between the thyroid and cricoid cartilages.",
      back:"Emergency surgical airway access, when the patient can't be intubated or oxygenated, is achieved through the <mark class=\"cloze-answer\">cricothyroid membrane</mark>, located between the thyroid and cricoid cartilages. This cricothyroidotomy approach is faster and technically simpler than tracheostomy, the planned surgical airway used once the patient is stabilized." }
  ]
});

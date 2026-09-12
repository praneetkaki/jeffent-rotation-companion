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
  status: "DRAFT, pending faculty review. 100% UKMLA ENT-item coverage reached (see docs/MODULE-BUILD-STANDARD.md coverage matrix); every card carries a UKMLA scope tag, an ACGME Milestone tag, and a named source. v0.4.0: incorporated an OpenEvidence clinical-coverage review, added high-volume 'bread-and-butter' conditions (AOM/OME, cerumen impaction, tonsillectomy indications, thyroid nodule workup, TM perforation after trauma) and corrected several statements against current AAO-HNS guidance (sudden SNHL steroid framing, epistaxis first aid, Bell's palsy treatment, neck-mass FNA sequence). v0.5.0: closed two narrow but genuinely missing safety topics found on a systematic cross-file check, the classic ototoxic drug classes (previously only named as a bare category, never unpacked) and the emergency surgical airway (cricothyroidotomy indication/landmark, previously only alluded to). Rhinology/sinus and Head & Neck Oncology received a larger depth pass in the same session (allergy/rhinitis, EBV/nasopharyngeal disease, salivary spectrum, neck dissection), Foundations already had full UKMLA coverage and a recent OpenEvidence review, so its remaining gaps were narrow by comparison.",
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
        html: "<div class=\"fig-row\"><figure class='note-fig' data-credit=\"The ENT regions at a glance. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/image67.png' alt='Head and neck sagittal overview' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: Sagittal overview of ear, nose and sinuses, oral cavity and pharynx, larynx, and neck.</figcaption></figure></div><p>ENT anatomy breaks down into five linked regions. Learn the map here, then go deep in each track.</p>" +
          "<ul><li><strong><a class='xref' data-mod='otology-ear' data-tab='anatomy'>Ear</a>:</strong> external (auricle, canal, TM) · middle (ossicles, Eustachian tube) · inner (cochlea, vestibule, CN VIII).</li>" +
          "<li><strong><a class='xref' data-mod='rhinology-sinus' data-tab='anatomy'>Nose &amp; paranasal sinuses</a>:</strong> septum, turbinates, meatuses; frontal/ethmoid/maxillary/sphenoid sinuses draining via the ostiomeatal complex.</li>" +
          "<li><strong><a class='xref' data-mod='head-neck-oncology' data-tab='anatomy'>Oral cavity &amp; pharynx</a>:</strong> naso-, oro-, and hypopharynx; tonsils; tongue.</li>" +
          "<li><strong><a class='xref' data-mod='laryngology-voice-airway' data-tab='anatomy'>Larynx</a>:</strong> epiglottis, thyroid &amp; cricoid cartilages, vocal folds: airway and voice.</li>" +
          "<li><strong><a class='xref' data-mod='head-neck-oncology' data-tab='anatomy'>Neck</a>:</strong> anterior/posterior triangles, nodal levels I-VI, thyroid and salivary glands.</li></ul>"
      },
      {
        title: "Cranial nerves",
        html: "<div class=\"fig-row\"><figure class='note-fig' data-credit=\"The twelve cranial nerves, inferior view of the brain. Wikimedia Commons, CC BY-SA 3.0.\"><img class='zoomable' src='assets/img/anatomy-atlas/cranial-nerves-inferior-view.svg' alt='The twelve cranial nerves on the inferior surface of the brain' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The twelve cranial nerves (inferior view of the brain)</figcaption></figure><figure class='note-fig' data-credit=\"Skull base foramina. Source not yet cited, added by the project owner, replace credit before sharing.\"><img class='zoomable' src='assets/img/mc/skull-base-foramen-usersrc.png' alt='Skull base foramina' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Skull base foramina and the nerves that exit through each.</figcaption></figure></div><p>All twelve cranial nerves, in order, with the skull base foramen or canal each one exits through and why it matters clinically. This is the complete reference; see the diagram below for where each foramen actually sits.</p>" +
          "<div class=\"tbl-scroll\"><table><thead><tr><th>Nerve</th><th>Skull base exit</th><th>Function</th></tr></thead><tbody>" +
          "<tr><td><strong>I</strong> &middot; Olfactory</td><td>Cribriform plate</td><td>Smell</td></tr>" +
          "<tr><td><strong>II</strong> &middot; Optic</td><td>Optic canal</td><td>Vision</td></tr>" +
          "<tr><td><strong>III</strong> &middot; Oculomotor</td><td>Superior orbital fissure</td><td>Most eye movement, eyelid elevation, pupil constriction</td></tr>" +
          "<tr><td><strong>IV</strong> &middot; Trochlear</td><td>Superior orbital fissure</td><td>Superior oblique (eye moves down and in)</td></tr>" +
          "<tr><td><strong>V1</strong> &middot; Ophthalmic (trigeminal)</td><td>Superior orbital fissure</td><td>Sensation: forehead, scalp, cornea</td></tr>" +
          "<tr><td><strong>V2</strong> &middot; Maxillary (trigeminal)</td><td>Foramen rotundum</td><td>Sensation: midface, upper teeth, palate</td></tr>" +
          "<tr><td><strong>V3</strong> &middot; Mandibular (trigeminal)</td><td>Foramen ovale</td><td>Sensation: lower face and tongue; muscles of mastication</td></tr>" +
          "<tr><td><strong>VI</strong> &middot; Abducens</td><td>Superior orbital fissure</td><td>Lateral rectus (eye moves out)</td></tr>" +
          "<tr><td><strong>VII</strong> &middot; Facial</td><td>Internal acoustic meatus</td><td>Facial movement, taste (anterior two-thirds of tongue), lacrimation and salivation</td></tr>" +
          "<tr><td><strong>VIII</strong> &middot; Vestibulocochlear</td><td>Internal acoustic meatus</td><td>Hearing and balance</td></tr>" +
          "<tr><td><strong>IX</strong> &middot; Glossopharyngeal</td><td>Jugular foramen</td><td>Pharynx sensation, gag, taste (posterior third of tongue), parotid secretion</td></tr>" +
          "<tr><td><strong>X</strong> &middot; Vagus</td><td>Jugular foramen</td><td>Larynx and pharynx motor and sensory (via the recurrent laryngeal nerve, the voice), parasympathetic supply to the thorax and abdomen</td></tr>" +
          "<tr><td><strong>XI</strong> &middot; Accessory</td><td>Jugular foramen</td><td>Trapezius and sternocleidomastoid</td></tr>" +
          "<tr><td><strong>XII</strong> &middot; Hypoglossal</td><td>Hypoglossal canal</td><td>Tongue movement</td></tr>" +
          "</tbody></table></div>"
      },
      {
        title: "Nose & paranasal sinuses",
        html: "<div class=\"fig-row\"><figure class='note-fig' data-credit=\"Paranasal Sinuses: Drainage & Danger Zones. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/image47.png' alt='Paranasal sinus drainage pathways' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The paranasal sinuses: drainage pathways and adjacent danger zones.</figcaption></figure></div><ul><li>Three turbinates (inferior, middle, superior) form the meatuses on the lateral nasal wall.</li><li>The frontal, anterior ethmoid, and maxillary sinuses drain into the <strong>middle meatus</strong> through the <strong>ostiomeatal complex (OMC)</strong>; block it and you get sinusitis.</li><li>The sinuses border the <strong>orbit</strong> and <strong>anterior skull base</strong>, so infection can spread to the eye or brain.</li></ul>"
      },
      {
        title: "Larynx: essentials",
        html: "<figure class='note-fig' data-credit=\"OpenStax, Anatomy and Physiology 2e (Ch. 22). CC BY 4.0.\"><img class='zoomable' src='assets/img/laryngology/larynx-openstax.png' alt='Larynx, anterior and lateral views' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Epiglottis, thyroid and cricoid cartilages, vocal and vestibular folds.</figcaption></figure><ul><li><strong>Epiglottis:</strong> protects the airway on swallowing.</li>" +
          "<li><strong>Thyroid and cricoid cartilages:</strong> form the framework.</li>" +
          "<li><strong>True vocal folds:</strong> sit below the false folds, separated by the ventricle.</li>" +
          "<li><strong>Recurrent laryngeal nerve:</strong> supplies almost all intrinsic muscles. Its long course through the chest and thyroid explains hoarseness from lung, thyroid, or mediastinal disease.</li></ul>"
      },
      {
        title: "Neck: triangles, levels & glands",
        html: "<div class=\"fig-row\"><figure class='note-fig' data-credit=\"Triangles of the neck. Wikimedia Commons, CC BY-SA 4.0.\"><img class='zoomable' src='assets/img/anatomy-atlas/neck-triangles-colored.png' alt='Triangles of the neck' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Triangles of the neck</figcaption></figure><figure class='note-fig' data-credit='Cervical lymph node levels. Wikimedia Commons.'><img class='zoomable' src='assets/img/head-neck/neck-levels-colored.png' alt='Cervical lymph node levels I to VII' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Cervical lymph node levels I to VII (including IIa/IIb and Va/Vb).</figcaption></figure></div><ul><li><strong>Triangles:</strong> the <strong>sternocleidomastoid</strong> splits the neck into <strong>anterior</strong> and <strong>posterior</strong> triangles.</li>" +
          "<li><strong>Nodal levels:</strong> lymph nodes are mapped as <strong>levels I-VI</strong>, used for every neck mass and cancer.</li>" +
          "<li><strong>Key glands:</strong> <strong>thyroid</strong> (midline, moves with swallowing), <strong>parotid</strong> (the facial nerve runs through it), and <strong>submandibular</strong> (a common site for stones).</li></ul>" + "<p><strong>Cervical nodal levels (Robbins classification):</strong></p><div class='tbl-scroll'><table><thead><tr><th>Level</th><th>Location and boundaries</th><th>Main nodal contents</th><th>Primary drainage</th></tr></thead><tbody><tr><td><strong>Ia</strong> (submental)</td><td>Between the anterior bellies of digastric, above the hyoid</td><td>Submental nodes</td><td>Chin, lower lip, floor of mouth, tongue tip</td></tr><tr><td><strong>Ib</strong> (submandibular)</td><td>Submandibular triangle</td><td>Submandibular gland and nodes</td><td>Oral cavity, anterior face</td></tr><tr><td><strong>IIa / IIb</strong> (upper jugular)</td><td>Skull base to hyoid, around the upper internal jugular vein; split by the spinal accessory nerve (CN XI)</td><td>Upper deep cervical nodes</td><td>Oral cavity, nasopharynx, oropharynx, larynx, parotid</td></tr><tr><td><strong>III</strong> (mid jugular)</td><td>Hyoid to cricoid</td><td>Middle deep cervical nodes</td><td>Larynx, hypopharynx, oropharynx</td></tr><tr><td><strong>IV</strong> (lower jugular)</td><td>Cricoid to clavicle</td><td>Lower deep cervical nodes</td><td>Larynx, thyroid, hypopharynx, cervical esophagus</td></tr><tr><td><strong>Va / Vb</strong> (posterior triangle)</td><td>Behind the sternocleidomastoid, in front of trapezius; split by the cricoid plane</td><td>Spinal accessory and transverse cervical nodes</td><td>Nasopharynx, posterior scalp and neck, thyroid</td></tr><tr><td><strong>VI</strong> (central compartment)</td><td>Hyoid to sternal notch, between the carotid sheaths</td><td>Pretracheal, paratracheal, prelaryngeal (Delphian) nodes</td><td>Thyroid, glottic and subglottic larynx, hypopharynx, cervical esophagus</td></tr><tr><td><strong>VII</strong> (superior mediastinal)</td><td>Below the sternal notch</td><td>Superior mediastinal nodes</td><td>Thyroid, cervical esophagus</td></tr></tbody></table></div>"
      },
      {
        title: "Tympanic membrane landmarks",
        html: "<figure class='note-fig' data-credit=\"Normal tympanic membrane. Wikimedia Commons, CC BY-SA 4.0.\"><img class='zoomable' src='assets/View-normal-tympanic-membrane.png' alt='Normal tympanic membrane' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: Pars tensa, pars flaccida, manubrium, umbo, lateral process, cone of light.</figcaption></figure><p>On otoscopy, name these landmarks:</p><ul><li><strong>Cone of light</strong> (antero-inferior)</li><li><strong>Umbo</strong> (central)</li><li><strong>Manubrium + lateral process of malleus</strong></li><li><strong>Pars tensa</strong> vs <strong>pars flaccida</strong></li></ul><p>Note color, translucency, contour, perforation, mobility.</p>"
      }
    ],
    diagrams: [
      {
        kind: "image",
        id: "ear-cross-section",
        occlude: true,
        title: "The ear in cross-section",
        note: "External ear (left) to inner ear (right). Tap each covered label to name the structure, then reveal.",
        src: "assets/img/ear/ear-parts-nidcd.png",
        source: "Parts of the ear. NIDCD / NIH. Public domain.",
        labels: [
          { id:"pinna", text:"Pinna", box:{x:1,y:39,w:11,h:6} },
          { id:"temporal-bone", text:"Temporal bone", box:{x:29,y:36,w:15,h:9} },
          { id:"stapes", text:"Stapes", box:{x:50,y:31,w:10,h:5} },
          { id:"malleus", text:"Malleus", box:{x:49,y:38,w:11,h:5} },
          { id:"scc", text:"Semicircular canals", box:{x:60,y:22,w:14,h:10} },
          { id:"vestibular", text:"Vestibular nerve", box:{x:74,y:30,w:10,h:8} },
          { id:"auditory", text:"Auditory nerve", box:{x:85,y:34,w:14,h:9} },
          { id:"incus", text:"Incus", box:{x:54,y:52,w:10,h:6} },
          { id:"ear-canal", text:"Ear canal", box:{x:31,y:65,w:15,h:6} },
          { id:"eardrum", text:"Eardrum (tympanic membrane)", box:{x:47,y:65,w:11,h:6} },
          { id:"eustachian", text:"Eustachian tube", box:{x:56,y:73,w:14,h:9} },
          { id:"cochlea", text:"Cochlea", box:{x:82,y:77,w:13,h:6} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "sinuses-coronal",
        title: "Paranasal sinuses: coronal",
        note: "A coronal slice through the face. Name the sinuses, turbinates, and the drainage pathway.",
        src: "assets/img/mc/image47.png",
        source: "Paranasal Sinuses: Coronal CT & Anatomy. radiopaedia.org.",
        labels: [
          { id:"fr", text:"Frontal sinus", box:{x:29.0,y:7.9,w:24.0,h:9.0} },
          { id:"orb", text:"Orbit", box:{x:19.4,y:30.8,w:24.0,h:9.0} },
          { id:"eth", text:"Ethmoid air cells", box:{x:38.0,y:30.2,w:24.0,h:9.0} },
          { id:"sep", text:"Nasal septum", box:{x:38.0,y:69.0,w:24.0,h:9.0} },
          { id:"mt", text:"Middle turbinate", box:{x:42.8,y:47.9,w:24.0,h:9.0} },
          { id:"it", text:"Inferior turbinate", box:{x:43.2,y:63.1,w:24.0,h:9.0} },
          { id:"max", text:"Maxillary sinus", box:{x:59.4,y:60.2,w:24.0,h:9.0} },
          { id:"omc", text:"Ostiomeatal complex", box:{x:34.7,y:51.4,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "larynx-coronal",
        title: "Larynx: coronal",
        note: "The airway framework and the folds that make voice. Name each, then reveal.",
        src: "assets/img/mc/image60.png",
        source: "Larynx: Coronal Section Showing Airway Framework and Vocal Folds. Wikimedia Commons.",
        labels: [
          { id:"epi", text:"Epiglottis", box:{x:38.0,y:7.7,w:24.0,h:9.0} },
          { id:"thy", text:"Thyroid cartilage", box:{x:22.7,y:37.2,w:24.0,h:9.0} },
          { id:"ff", text:"Vestibular (false) fold", box:{x:31.3,y:37.2,w:24.0,h:9.0} },
          { id:"tf", text:"Vocal (true) fold", box:{x:32.0,y:43.8,w:24.0,h:9.0} },
          { id:"cric", text:"Cricoid cartilage", box:{x:38.0,y:59.9,w:24.0,h:9.0} },
          { id:"trach", text:"Trachea", box:{x:38.0,y:81.1,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "neck-levels",
        title: "Neck nodal levels I-VI",
        note: "The map behind every neck mass and cancer. Locate each level, then reveal.",
        src: "assets/img/mc/image22.png",
        source: "Neck Nodal Levels I-VI Schematic. Wikimedia Commons.",
        labels: [
          { id:"l1", text:"I: submental / submandibular", box:{x:29.2,y:37.2,w:24.0,h:9.0} },
          { id:"l2", text:"II: upper jugular", box:{x:44.9,y:37.7,w:24.0,h:9.0} },
          { id:"l3", text:"III: mid jugular", box:{x:47.4,y:54.9,w:24.0,h:9.0} },
          { id:"l4", text:"IV: lower jugular", box:{x:50.5,y:75.5,w:24.0,h:9.0} },
          { id:"l5", text:"V: posterior triangle", box:{x:64.2,y:61.1,w:24.0,h:9.0} },
          { id:"l6", text:"VI: central compartment", box:{x:34.9,y:69.9,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "tm-right",
        title: "Right tympanic membrane: landmarks",
        note: "Schematic for label practice (DRAFT: confirm laterality/orientation with faculty). Hide the labels, name each landmark, then reveal to check.",
        src: "assets/img/mc/image23.png",
        source: "Normal Right Tympanic Membrane Landmarks (Otoscopic View). oxfordmedicaleducation.com.",
        labels: [
          { id:"l1", text:"Pars flaccida", box:{x:38.0,y:12.2,w:24.0,h:9.0} },
          { id:"l2", text:"Lateral process of malleus", box:{x:36.9,y:19.4,w:24.0,h:9.0} },
          { id:"l3", text:"Manubrium (malleus handle)", box:{x:36.3,y:37.2,w:24.0,h:9.0} },
          { id:"l4", text:"Umbo", box:{x:38.0,y:50.5,w:24.0,h:9.0} },
          { id:"l5", text:"Pars tensa", box:{x:21.3,y:64.9,w:24.0,h:9.0} },
          { id:"l6", text:"Cone of light (reflex)", box:{x:47.4,y:68.3,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "ent-regions-overview",
        title: "The ENT regions at a glance",
        note: "A side profile of the head and neck, divided into the regions this specialty covers. Hide the labels, name each region, then reveal.",
        src: "assets/img/mc/16_ent_regions_overview.png",
        source: "The Five Primary ENT Anatomical Regions Overview. Illustration generated with Google Gemini.",
        labels: [
          { id:"region-ear", text:"Ear (external, middle, inner)", box:{x:15.9,y:42.6,w:24.0,h:9.0} },
          { id:"region-nose-sinuses", text:"Nose and paranasal sinuses", box:{x:60.1,y:33.1,w:24.0,h:9.0} },
          { id:"region-oral-oropharynx", text:"Oral cavity and oropharynx", box:{x:48.3,y:51.4,w:24.0,h:9.0} },
          { id:"region-larynx", text:"Larynx (voice box, airway)", box:{x:46.8,y:72.0,w:24.0,h:9.0} },
          { id:"region-neck", text:"Neck (nodes, thyroid, glands)", box:{x:38.0,y:83.7,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "ent-cranial-nerves-overview",
        title: "The skull base foramina and their cranial nerves",
        note: "The skull base viewed from above, from the anterior fossa (top) to the posterior fossa (bottom), right side shown. Every foramen here is paired left-right except the midline cribriform plate. Hide the labels, name each foramen and its nerve(s), then reveal.",
        src: "assets/img/mc/image7.png",
        source: "Skull Base Foramina and Their Cranial Nerves. Radiopaedia.",
        labels: [
          { id:"cribriform-plate", text:"Cribriform plate: CN I, olfactory (smell)", box:{x:38.0,y:14.2,w:24.0,h:9.0} },
          { id:"optic-canal", text:"Optic canal: CN II, optic (vision)", box:{x:48.3,y:22.1,w:24.0,h:9.0} },
          { id:"superior-orbital-fissure", text:"Superior orbital fissure: CN III, IV, V1 (ophthalmic), and VI", box:{x:52.7,y:31.4,w:24.0,h:9.0} },
          { id:"foramen-rotundum", text:"Foramen rotundum: CN V2, maxillary", box:{x:54.2,y:40.8,w:24.0,h:9.0} },
          { id:"foramen-ovale", text:"Foramen ovale: CN V3, mandibular", box:{x:52.7,y:50.2,w:24.0,h:9.0} },
          { id:"internal-acoustic-meatus", text:"Internal acoustic meatus: CN VII and VIII", box:{x:48.3,y:59.6,w:24.0,h:9.0} },
          { id:"jugular-foramen", text:"Jugular foramen: CN IX, X, and XI", box:{x:42.4,y:68.9,w:24.0,h:9.0} },
          { id:"hypoglossal-canal", text:"Hypoglossal canal: CN XII", box:{x:36.5,y:76.8,w:24.0,h:9.0} }
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
          "<li><strong>Neck:</strong> systematic nodal levels I-VI, thyroid, parotid, salivary glands.</li>" +
          "<li><strong>Cranial nerves:</strong> focused screen, especially <strong>CN VII</strong> (otologic) and <strong>CN X</strong> (voice).</li></ul>"
      },
      {
        id: "tuning-forks",
        title: "Tuning-fork interpretation (512 Hz)",
        html: "<p>Use Weber and Rinne together. 'Affected ear' = the ear in question.</p>",
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
        html: "<ul>" +
          "<li><strong>Audiogram:</strong> air vs bone; an <strong>air-bone gap</strong> = conductive, both lines down = sensorineural.</li>" +
          "<li><strong>Tympanometry:</strong> <strong>A</strong> normal · <strong>B</strong> flat (effusion/perforation) · <strong>C</strong> negative pressure (Eustachian-tube dysfunction).</li>" +
          "<li><strong>CT</strong> for bone/sinuses/temporal bone, trauma, and infection extent; <strong>MRI</strong> for soft tissue, retrocochlear lesions (vestibular schwannoma), skull base, and tumor/perineural spread.</li>" +
          "<li><strong>Neck mass:</strong> contrast-enhanced <strong>CT/MRI AND FNA</strong>: FNA is strongly preferred over open excisional biopsy (an experienced operator can even do it before imaging).</li></ul>"
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
      { t: "<b>Post-tonsillectomy bleed</b>: can be catastrophic; ABC, ENT, may need theater." },
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
        { q: "What category of otalgia is this, and what's the concern?", a: "Referred otalgia with a normal ear exam. In an older smoker this is a red flag for a head &amp; neck malignancy referring pain via CN V/VII/IX/X: base of tongue, tonsil, hypopharynx, or larynx." },
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
        { q: "What must you assess first, and manage?", a: "Airway first. Then needle aspiration / incision &amp; drainage plus antibiotics; escalate to ENT." }
      ],
      teaching: "Muffled voice + trismus + drooling = think abscess and airway before anything else."
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
        { q: "What if it doesn't stop, and what else do you check?", a: "Escalate to cautery or packing; consider a posterior bleed (heavier, needs posterior packing/admission). Check the <b>INR</b> and reverse if supratherapeutic." }
      ],
      teaching: "Pressure on the soft part of the nose, not the bony bridge, stops most nosebleeds. Always check anticoagulation."
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
      teaching: "Persistent hoarseness in a smoker = scope. Voice change is the larynx's warning light."
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
      teaching: "Eye signs with sinusitis (proptosis, painful eye movement, vision change) = sight- and life-threatening: image and admit."
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
      teaching: "The forehead is the discriminator: involved = peripheral (Bell's); spared = central (stroke). Bell's palsy itself is treated with early oral steroids, not antivirals alone."
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
      back:"<ul><li><strong>Cone of light</strong> (antero-inferior)</li><li><strong>Umbo</strong> (central, most depressed)</li><li><strong>Manubrium + lateral process of malleus</strong></li><li><strong>Pars tensa</strong> and <strong>pars flaccida</strong></li></ul><figure class='note-fig' data-credit=\"Normal Right Tympanic Membrane Landmarks (Otoscopic View). oxfordmedicaleducation.com.\"><img class='zoomable' src='assets/img/mc/image23.png' alt='Normal tympanic membrane landmarks' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Normal right tympanic membrane landmarks on otoscopy.</figcaption></figure>" },
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
      back:"Region by region: <strong>levels I-VI</strong> (submental/submandibular, upper/mid/lower jugular, posterior triangle, central), plus <strong>thyroid, parotid, supraclavicular</strong>. <figure class='note-fig' data-credit=\"Neck Nodal Levels I-VI Schematic. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/image22.png' alt='Neck nodal levels I to VI' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Neck nodal levels I to VI.</figcaption></figure>" },
    { id:"scope-indication", tags: ["FN", "clinical"], milestones:["PC6","PC3"], ukmla:["Hoarseness and voice change","Swallowing problems"], source:"AAO-HNSF Clinical Practice Guideline: Hoarseness (Dysphonia) (Update), 2018; indications for laryngoscopy.", front:"Name common indications for flexible nasolaryngoscopy.",
      back:"Persistent <strong>hoarseness (&gt;2-4 wks)</strong>, <strong>dysphagia/odynophagia</strong>, globus with red flags, <strong>neck mass</strong>, stridor/airway concern, referred otalgia with a normal ear, and unexplained epistaxis/obstruction. Know when to <em>ask</em> for it." },
    { id:"fb-wax-awareness", tags: ["FN", "clinical"], milestones:["PC7","PC4"], ukmla:"Ear and nasal discharge", source:"AAO-HNSF Clinical Practice Guideline: Cerumen Impaction (Update), 2017.", front:"What should a student know about ear wax and ear/nose foreign bodies?",
      back:"<strong>Wax:</strong> softening drops then irrigation: <em>avoid irrigation if perforation/grommet</em>. <strong>Ear FB:</strong> don't push deeper; immobilize an insect (oil/lidocaine) before removal. <strong>Nasal FB (child):</strong> positive-pressure 'parent's kiss'. <strong>Any battery = emergency</strong> (separate card)." },

    /* --- B. Core investigations --- */
    { id:"audiogram-basics", tags: ["FN", "clinical"], milestones:["PC4","MK1"], ukmla:"Hearing loss", source:"Standard audiology teaching; AAO-HNSF Sudden Hearing Loss CPG (2019) for interpretation context.", front:"How do you read an audiogram at a glance?",
      back:"X = frequency (low→high Hz), Y = threshold in dB (louder downward). <strong>O = right air, X = left air; [ ] = bone.</strong> <strong>Air-bone gap</strong> = conductive; <strong>both down together</strong> = sensorineural; gap + both down = mixed.<figure class='note-fig' data-credit='Reading an audiogram. Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/mc/image25.png' alt='How to read an audiogram' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>A quick guide to reading an audiogram: air vs bone conduction and the audiogram symbols.</figcaption></figure>" },
    { id:"tympanometry", tags: ["FN", "clinical"], milestones:["PC4"], ukmla:"Hearing loss", source:"Jerger, tympanogram classification, Archives of Otolaryngology 1970.", front:"What do tympanometry types A, B, and C mean?",
      back:"<strong>A</strong> = normal middle-ear pressure/compliance. <strong>B</strong> = flat: middle-ear <strong>effusion</strong> or perforation. <figure class='note-fig' data-credit=\"Tympanogram types and ear conditions. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/image35.png' alt='Tympanogram types A, B, C and associated ear conditions' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Tympanogram types and the ear conditions they point to.</figcaption></figure>" },
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
      back:"<strong>Referred otalgia</strong> via CN V/VII/IX/X and C2-C3 (TMJ, teeth, tonsil, tongue base, larynx). <strong>In an adult smoker, otalgia + normal ear exam is a red flag for head &amp; neck malignancy → laryngoscopy.</strong>" },
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
      back:"Most anterior epistaxis arises from <mark class=\"cloze-answer\">Kiesselbach's plexus</mark>, and first-line treatment is firm pressure on the cartilaginous part of the nose plus a topical vasoconstrictor. Posterior bleeds are heavier and more often need packing or admission.<figure class='note-fig' data-credit='Kiesselbach's plexus (Little's area). Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/mc/image26.png' alt='Kiesselbach's plexus' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Kiesselbach's plexus (Little's area), the source of most anterior nosebleeds.</figcaption></figure>" },
    { id:"rhinorrhoea-anosmia", tags: ["FN", "clinical"], milestones:["PC5","MK2"], ukmla:["Ear and nasal discharge","Anosmia"], source:"AAO-HNSF Adult Sinusitis CPG, 2015; Meco et al., β2-transferrin testing for CSF leak, Am J Rhinol 2003.", front:"Approach to rhinorrhea and smell loss, and the one that's a red flag.",
      back:"Rhinorrhea: allergic (clear, itch, sneeze), infective (purulent), vasomotor. Anosmia: URI, chronic rhinosinusitis, head injury, ageing. <strong>Red flag:</strong> <strong>unilateral clear watery rhinorrhea after trauma/surgery = CSF leak</strong> (test β2-transferrin)." },
    { id:"sore-throat-centor", tags: ["FN", "clinical"], milestones:["MK3","PC6"], ukmla:"Sore throat", source:"IDSA Clinical Practice Guideline: Group A Streptococcal Pharyngitis, 2012; Centor/McIsaac criteria.", front:"How do you approach acute sore throat?",
      back:"Most are <strong>viral</strong>. Use <strong>Centor/McIsaac</strong> for likely GAS (fever, tonsillar exudate, tender anterior nodes, no cough). Escalate for airway/abscess red flags. <em>UK/US: UK NICE guidance favors the <b>FeverPAIN</b> score over Centor for antibiotic decisions; both aim to reduce unnecessary antibiotics.</em><figure class='note-fig' data-credit=\"Acute Sore Throat Evaluation (Centor / FeverPAIN Scores). Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/image27.png' alt='Centor and FeverPAIN scores for sore throat' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Acute sore throat evaluation using Centor and FeverPAIN scores.</figcaption></figure>" },
    { id:"hoarseness", tags: ["FN", "clinical"], milestones:["PC6","PC3"], redFlag:true, ukmla:"Hoarseness and voice change", source:"AAO-HNSF Clinical Practice Guideline: Hoarseness (Dysphonia) (Update), 2018.", front:"When does hoarseness require laryngoscopy, and why?",
      back:"<strong>Hoarseness &gt;2-4 weeks</strong>, especially a <strong>smoker/drinker</strong>, needs <strong>laryngoscopy to exclude laryngeal cancer</strong>. Also consider vocal-fold paralysis (RLN course). Most acute hoarseness is viral laryngitis. <em>UK/US: UK's 2-week-wait cancer pathway refers persistent hoarseness (≥45y with risk factors) even faster than the 2-4 week US threshold.</em>" },
    { id:"dysphagia-globus", tags: ["FN", "clinical"], milestones:["PC6","PC3"], redFlag:true, ukmla:"Swallowing problems", source:"Standard otolaryngology teaching on red-flag dysphagia.", front:"Distinguish globus from dysphagia, and give the dysphagia red flags.",
      back:"<strong>Globus</strong> = intermittent 'lump' sensation, swallowing intact, usually benign. <strong>Dysphagia red flags:</strong> progressive, solids &gt; liquids, weight loss, odynophagia, older smoker → urgent workup for esophageal/hypopharyngeal cancer." },
    { id:"osa-screen", tags: ["FN", "clinical"], milestones:["PC9"], ukmla:["Snoring","Obstructive sleep apnoea"], source:"Chung F et al., STOP-BANG questionnaire, Anesthesiology 2008; AASM clinical guideline for OSA.", front:"How do you screen for obstructive sleep apnea?",
      back:"<strong>STOP-BANG</strong>: <strong>S</strong>noring, <strong>T</strong>iredness, <strong>O</strong>bserved apneas, <strong>P</strong>ressure (HTN), <strong>B</strong>MI &gt;35, <strong>A</strong>ge &gt;50, <strong>N</strong>eck &gt;40 cm, <strong>G</strong>ender male. ≥3 = higher risk → refer for a sleep study (polysomnography). <em>UK/US: NHS pathways typically use the Epworth Sleepiness Scale alongside STOP-BANG; US practice leans on STOP-BANG for perioperative screening.</em>" },
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
      back:"Rapid severe sore throat, <strong>drooling</strong>, <strong>tripod</strong> posture, muffled 'hot potato' voice, stridor. <strong>Do NOT examine the throat or lie the (child) patient flat</strong>: it can precipitate airway loss. Controlled airway in theater + IV antibiotics.<figure class='note-fig' data-credit='Acute epiglottitis. Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/mc/67_pediatric_vs_adult_airway_gemini.png' alt='Acute epiglottitis guide' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Acute epiglottitis: presentation, red flags, and the airway rule.</figcaption></figure>" },
    { id:"pta", tags: ["FN", "clinical"], milestones:["PC1","PC6"], redFlag:true, ukmla:"Sore throat", source:"AAO-HNS patient education: peritonsillar abscess management.", front:"What triad suggests a peritonsillar abscess?",
      back:"<strong>Trismus</strong>, <strong>'hot potato' muffled voice</strong>, and <strong>uvular deviation</strong> away from a swollen peritonsil region. Needs <strong>drainage</strong> (needle/I&amp;D) + antibiotics; watch the airway and deep-neck spread.<figure class='note-fig' data-credit='Peritonsillar abscess. Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/mc/image30.png' alt='Peritonsillar abscess guide' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Peritonsillar abscess: the classic triad and management.</figcaption></figure>" },
    { id:"deep-neck-infection", tags: ["FN", "clinical"], milestones:["PC1"], redFlag:true, ukmla:"Neck lump", source:"Bailey's Head & Neck Surgery: Otolaryngology, 6th ed.; deep neck space infections.", front:"<span class=\"cloze-blank\">[...]</span> is a rapidly spreading bilateral submandibular infection, usually odontogenic, that threatens the airway through tongue elevation even before a drainable collection forms.",
      back:"<mark class=\"cloze-answer\">Ludwig's angina</mark> is a rapidly spreading bilateral submandibular infection, usually odontogenic, that threatens the airway through tongue elevation even before a drainable collection forms. Retropharyngeal abscess is the deep neck infection to suspect instead in a young child with neck stiffness and a muffled voice, often following a preceding throat or ear infection." },
    { id:"post-tonsillectomy-bleed", tags: ["FN", "clinical"], milestones:["PC6"], redFlag:true, ukmla:"Sore throat", source:"AAO-HNSF Clinical Practice Guideline: Tonsillectomy in Children (Update), 2019.", front:"How do you approach post-tonsillectomy hemorrhage?",
      back:"<strong>Primary</strong> (&lt;24h) vs <strong>secondary</strong> (~5-10 days, often infection). Can be life-threatening (swallowed blood hides volume). <strong>ABC</strong>, IV access, call ENT/anesthetics; may need return to theater." },
    { id:"septal-haematoma", tags: ["FN", "clinical"], milestones:["PC2","PC5"], redFlag:true, ukmla:"Nasal obstruction", source:"AAO-HNS facial-trauma teaching: septal hematoma management.", front:"Why must you look for a septal hematoma after nasal trauma?",
      back:"A <strong>boggy, cherry-red bilateral septal swelling</strong> deprives the cartilage of its blood supply. Undrained → <strong>cartilage necrosis (saddle-nose)</strong> or abscess. <strong>Incise and drain urgently.</strong>" },
    { id:"foreign-bodies", tags: ["FN", "clinical"], milestones:["PC7"], ukmla:["Ear and nasal discharge","Stridor"], source:"AAP clinical guidance on pediatric foreign-body management.", front:"Many aspirated airway foreign bodies, such as food or plastic, are <span class=\"cloze-blank\">[...]</span>, so a normal chest X-ray does not exclude one.",
      back:"Many aspirated airway foreign bodies, such as food or plastic, are <mark class=\"cloze-answer\">radiolucent</mark>, so a normal chest X-ray does not exclude one. Bronchoscopy is needed whenever aspiration is suspected despite normal imaging." },
    { id:"button-battery", tags: ["FN", "clinical"], milestones:["PC7"], redFlag:true, ukmla:"Ear and nasal discharge", source:"National Capital Poison Center / AAP button-battery guidance, 2020.", front:"Why is a button battery different from any other foreign body?",
      back:"It causes <strong>liquefactive necrosis within hours</strong>. A battery in the <strong>nose</strong> (septal perforation) or <strong>esophagus</strong> (perforation, fistula) needs <strong>immediate removal</strong>: do not observe, do not irrigate." },
    { id:"sinusitis-complications", tags: ["FN", "clinical"], milestones:["PC5"], redFlag:true, ukmla:["Facial/periorbital swelling","Rhinosinusitis"], source:"Chandler et al., Laryngoscope 1970; AAO-HNSF Adult Sinusitis CPG, 2015.", front:"What complications of sinusitis must you not miss?",
      back:"<strong>Orbital:</strong> proptosis, <strong>painful/limited eye movement, reduced acuity</strong> (orbital cellulitis/abscess). <strong>Intracranial:</strong> meningitis, abscess, cavernous sinus thrombosis; <strong>Pott's puffy tumor</strong> (frontal). Urgent contrast CT + IV antibiotics ± surgery.<figure class='note-fig' data-credit=\"Complications of Sinusitis (Orbital and Intracranial). Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/image28.png' alt='Complications of sinusitis' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Complications of sinusitis: orbital and intracranial spread.</figcaption></figure>" },

    /* --- E. The six-competency spread (the differentiators) --- */
    { id:"ent-history", tags: ["FN", "clinical"], milestones:["ICS1","MK3"], ukmla:["Hearing loss","Nasal obstruction","Hoarseness and voice change","Neck lump"], source:"Bailey's Head & Neck Surgery: Otolaryngology, 6th ed.; structured ENT history.", front:"What structure keeps an ENT history efficient across ear, nose, throat, and neck?",
      back:"Screen each region's cardinal symptoms: <strong>ear</strong> (hearing, otalgia, otorrhea, tinnitus, vertigo), <strong>nose</strong> (obstruction &amp; side, discharge, epistaxis, smell), <strong>throat/voice</strong> (dysphonia, dysphagia, odynophagia, globus), <strong>neck</strong> (lump: duration, growth). Always pin <strong>laterality, duration, red flags</strong>, plus smoking/alcohol." },
    { id:"spikes", tags: ["FN", "clinical"], milestones:["ICS1","PC3"], scope:"sub-I", ukmla:"Neck lump", source:"Baile WF et al., SPIKES protocol, The Oncologist 2000.", front:"How do you break bad news (e.g., a head &amp; neck cancer diagnosis)?",
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
      back:"First-line treatment for allergic rhinitis, after allergen avoidance, is <mark class=\"cloze-answer\">intranasal corticosteroids</mark>. It classically presents with clear, itchy rhinorrhea and bilateral nasal obstruction tied to a seasonal or perennial trigger." },
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
      back:"Otitis media with effusion, fluid in the middle ear without signs of acute infection, is managed with <mark class=\"cloze-answer\">watchful waiting</mark> rather than antibiotics. Tympanostomy tubes are added if the effusion persists beyond three months bilaterally or hearing is at risk." },
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

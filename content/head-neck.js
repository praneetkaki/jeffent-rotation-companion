/* head-neck.js, HEAD & NECK ONCOLOGY (subspecialty track)
 *
 * Deep dive on the neck-mass/oncologic disease that Foundations only introduces.
 * Built on the same Module Build Standard as Foundations: every card/case
 * carries a UKMLA scope tag (content/ukmla.js), an ACGME Milestone tag
 * (content/frameworks.js, primarily PC3 Head & Neck Neoplasm / MK1 Anatomy),
 * and a named source. Content written to US practice standards (NCCN, ATA);
 * UK/US differences flagged inline.
 *
 * STATUS: DRAFT, pending JeffENT faculty review. See docs/MODULE-BUILD-STANDARD.md.
 */
window.JEFFENT.register({
  id: "head-neck-oncology",
  track: "head-neck",
  trackName: "Head & Neck Oncology",
  trackAbbr: "HN",
  order: 4,
  title: "Head & Neck Oncology",
  subtitle: "The neck mass, the salivary gland, and the thyroid nodule worked all the way through, plus the HPV and EBV stories reshaping oropharyngeal and nasopharyngeal cancer.",
  version: "0.3.0-draft",
  level: ["core", "sub-I"],
  status: "DRAFT, pending faculty review. v0.2.0: added a depth pass covering genuinely missing high-yield sub-I topics, nasopharyngeal carcinoma (EBV-associated), the wider salivary gland spectrum (Warthin tumour, adenoid cystic carcinoma/perineural invasion, sialadenitis vs mumps), neck dissection classification, hypopharyngeal cancer subsites, and pre-radiation dental clearance/osteoradionecrosis, grounded in NCCN Head and Neck Cancers guidelines, AJCC staging, and standard head & neck oncology teaching; written fresh from guidelines and standard teaching, not derived from any single textbook.",
  facultyReviewer: "",
  curriculumAnchors: [
    "UKMLA Content Map (GMC), scope anchor; owns Neck lump (oncologic depth), Swallowing problems (oncologic dysphagia), Facial/periorbital swelling (parotid angle), Hearing loss (nasopharyngeal effusion), Infectious mononucleosis (neck-lump differential cross-reference)",
    "ACGME Otolaryngology-HNS Milestones 2.0, primarily PC3 Head & Neck Neoplasm, MK1 Anatomy",
    "NCCN Clinical Practice Guidelines in Oncology, Head and Neck Cancers; American Thyroid Association guidelines; AJCC Cancer Staging Manual, 8th ed.",
    "UK undergraduate Delphi (Lloyd 2014), student-scope depth cap"
  ],
  frameworkAlignment: {
    competenciesCovered: ["PC", "MK"],
    note: "Subspecialty depth at student scope (Delphi); goes deeper than Foundations on the same UKMLA items (the oncologic neck-mass workup, salivary and thyroid disease, HPV/EBV-associated cancer) rather than introducing new ones."
  },

  /* ==================== ANATOMY TAB ==================== */
  anatomy: {
    notes: [
      {
        title: "Neck levels I-VII",
        html: "<figure class='note-fig' data-credit=\"Cervical lymph node levels. Wikimedia Commons.\"><img class='zoomable' src='assets/img/head-neck/neck-levels-colored.png' alt='Cervical lymph node levels' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Levels I to VII, including IIa/IIb and Va/Vb.</figcaption></figure><ul><li>Beyond levels I-VI, add <strong>level VII</strong> (superior mediastinal nodes, below the sternal notch), which matters for thyroid and lower-neck cancer staging.</li><li>Level II is often split into <strong>IIA/IIB</strong> by the spinal accessory nerve, and level V into <strong>VA/VB</strong>.</li></ul>" + "<p><strong>Cervical nodal levels (Robbins classification):</strong></p><div class='tbl-scroll'><table><thead><tr><th>Level</th><th>Location and boundaries</th><th>Main nodal contents</th><th>Primary drainage</th></tr></thead><tbody><tr><td><strong>Ia</strong> (submental)</td><td>Between the anterior bellies of digastric, above the hyoid</td><td>Submental nodes</td><td>Chin, lower lip, floor of mouth, tongue tip</td></tr><tr><td><strong>Ib</strong> (submandibular)</td><td>Submandibular triangle</td><td>Submandibular gland and nodes</td><td>Oral cavity, anterior face</td></tr><tr><td><strong>IIa / IIb</strong> (upper jugular)</td><td>Skull base to hyoid, around the upper internal jugular vein; split by the spinal accessory nerve (CN XI)</td><td>Upper deep cervical nodes</td><td>Oral cavity, nasopharynx, oropharynx, larynx, parotid</td></tr><tr><td><strong>III</strong> (mid jugular)</td><td>Hyoid to cricoid</td><td>Middle deep cervical nodes</td><td>Larynx, hypopharynx, oropharynx</td></tr><tr><td><strong>IV</strong> (lower jugular)</td><td>Cricoid to clavicle</td><td>Lower deep cervical nodes</td><td>Larynx, thyroid, hypopharynx, cervical esophagus</td></tr><tr><td><strong>Va / Vb</strong> (posterior triangle)</td><td>Behind the sternocleidomastoid, in front of trapezius; split by the cricoid plane</td><td>Spinal accessory and transverse cervical nodes</td><td>Nasopharynx, posterior scalp and neck, thyroid</td></tr><tr><td><strong>VI</strong> (central compartment)</td><td>Hyoid to sternal notch, between the carotid sheaths</td><td>Pretracheal, paratracheal, prelaryngeal (Delphian) nodes</td><td>Thyroid, glottic and subglottic larynx, hypopharynx, cervical esophagus</td></tr><tr><td><strong>VII</strong> (superior mediastinal)</td><td>Below the sternal notch</td><td>Superior mediastinal nodes</td><td>Thyroid, cervical esophagus</td></tr></tbody></table></div>"
      },
      {
        title: "The salivary glands",
        html: "<figure class='note-fig' data-credit=\"OpenStax, Anatomy and Physiology 2e (Ch. 23). CC BY 4.0.\"><img class='zoomable' src='assets/img/head-neck/salivary-glands-openstax.png' alt='Salivary glands' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Parotid with Stensen's duct, submandibular with Wharton's duct, sublingual gland.</figcaption></figure><ul><li><strong>Parotid</strong>: the largest gland; the <strong>facial nerve</strong> runs through it, dividing it into superficial and deep lobes, so facial-nerve function must be documented before and after any parotid surgery. Duct: <strong>Stensen's</strong>, opens opposite the upper second molar.</li><li><strong>Submandibular</strong>: duct is <strong>Wharton's</strong>, opening at the sublingual caruncle; its uphill course makes it the classic site for salivary stones (sialolithiasis).</li></ul>" + "<figure class='note-fig' data-credit='Salivary glands and ducts. KnowledgeWorks Global Ltd. (CC BY).'><img class='zoomable' src='assets/img/mc/image64.png' alt='The three major salivary glands and their ducts' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The parotid, submandibular, and sublingual glands and where each duct empties.</figcaption></figure><figure class='note-fig' data-credit=\"Major Salivary Glands and Ducts (Parotid, Submandibular, Sublingual). KnowledgeWorks Global Ltd. (CC BY).\"><img class='zoomable' src='assets/img/mc/59_salivary_glands_ducts_knowledgeworks.png' alt='Major salivary glands and ducts' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Major salivary glands and ducts.</figcaption></figure>"
      },
      {
        title: "Thyroid & parathyroid anatomy",
        html: "<figure class='note-fig' data-credit=\"Thyroid and parathyroid glands with vasculature. RCSI (CC BY-NC-SA).\"><img class='zoomable' src='assets/img/mc/image65.png' alt='Thyroid and parathyroid glands' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: Thyroid lobes and isthmus, recurrent laryngeal nerve in the tracheoesophageal groove, parathyroid glands.</figcaption></figure><ul><li>Two lobes joined by an <strong>isthmus</strong>, sitting anterior to the trachea.</li><li>Both <strong>recurrent laryngeal nerves</strong> run close by (often in the tracheoesophageal groove), the reason thyroidectomy carries a voice-nerve risk.</li><li>Four <strong>parathyroid glands</strong> (two superior, two inferior) sit on the posterior thyroid capsule; they can be inadvertently removed or devascularized during surgery, causing postoperative hypocalcemia.</li></ul><figure class='note-fig' data-credit=\"Thyroid and Parathyroid Glands, Vasculature, and Recurrent Laryngeal Nerve. Royal College of Surgeons of Ireland (CC BY-NC-SA).\"><img class='zoomable' src='assets/img/mc/60_thyroid_parathyroid_vasculature_rcsi.png' alt='Thyroid and parathyroid vasculature' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Thyroid and parathyroid glands, vasculature, and recurrent laryngeal nerve.</figcaption></figure>"
      },
      {
        title: "Oral cavity vs oropharynx",
        html: "<figure class='note-fig' data-credit=\"OpenStax, Anatomy and Physiology 2e (Ch. 23). CC BY 4.0.\"><img class='zoomable' src='assets/img/head-neck/pharynx-regions-openstax.png' alt='Pharynx regions' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Nasopharynx, oropharynx, and laryngopharynx.</figcaption></figure><ul><li><strong>Oral cavity</strong>: lips, buccal mucosa, floor of mouth, hard palate, anterior two-thirds of tongue, retromolar trigone; classically <strong>tobacco/alcohol-driven</strong> cancer.</li><li><strong>Oropharynx</strong>: base of tongue, tonsils, soft palate, posterior pharyngeal wall; increasingly <strong>HPV-driven</strong> cancer, which carries a better prognosis.</li></ul>" + "<figure class='note-fig' data-credit='ENT regions, sagittal. Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/head-neck/ent-regions-gemini.png' alt='ENT regions in sagittal section' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Orientation: the major ENT regions in sagittal section.</figcaption></figure>" + "<figure class='note-fig' data-credit='Oral cavity, anterior view. OpenStax Anatomy & Physiology 2e. CC BY 4.0.'><img class='zoomable' src='assets/img/mc/image66.png' alt='Oral cavity, anterior view' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The oral cavity: lips, gingivae, hard and soft palate, tongue, and tonsils.</figcaption></figure>" + "<figure class='note-fig' data-credit='Oral cavity and oropharynx, sagittal. OpenStax Anatomy & Physiology 2e. CC BY 4.0.'><img class='zoomable' src='assets/img/mc/image67.png' alt='Oral cavity and oropharynx in sagittal section' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Oral cavity versus oropharynx: the subsite boundary in sagittal section.</figcaption></figure><figure class='note-fig' data-credit=\"Oral Cavity vs. Oropharynx Boundaries (Coronal Section). OpenStax.\"><img class='zoomable' src='assets/img/mc/61a_oral_cavity_oropharynx_coronal_openstax.png' alt='Oral cavity vs oropharynx, coronal' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Oral cavity versus oropharynx boundaries, coronal section.</figcaption></figure><figure class='note-fig' data-credit=\"Oral Cavity vs. Oropharynx Boundaries (Sagittal Section). OpenStax.\"><img class='zoomable' src='assets/img/mc/61b_oral_cavity_oropharynx_sagittal_openstax.png' alt='Oral cavity vs oropharynx, sagittal' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Oral cavity versus oropharynx boundaries, sagittal section.</figcaption></figure>"
      }
    ],
    diagrams: [
      {
        kind: "image",
        occlude: true,
        id: "neck-levels-full",
        title: "Neck nodal levels I-VII",
        note: "Beyond levels I-VI: level VII (superior mediastinal) and the IIA/IIB, VA/VB split. Name each, then reveal.",
        src: "assets/img/mc/62_neck_levels_i_vii_wikimedia.png",
        source: "Cervical Lymph Node Levels I-VII Classification. Wikimedia Commons.",
        labels: [
          { id:"l1", text:"I: submental / submandibular", box:{x:28.6,y:35.0,w:24.0,h:9.0} },
          { id:"l2ab", text:"IIA/IIB: upper jugular (split by spinal accessory n.)", box:{x:44.5,y:36.0,w:24.0,h:9.0} },
          { id:"l3", text:"III: mid jugular", box:{x:46.8,y:53.4,w:24.0,h:9.0} },
          { id:"l4", text:"IV: lower jugular", box:{x:49.8,y:73.4,w:24.0,h:9.0} },
          { id:"l5ab", text:"VA/VB: posterior triangle", box:{x:61.5,y:60.2,w:24.0,h:9.0} },
          { id:"l6", text:"VI: central compartment (thyroid bed)", box:{x:34.5,y:68.1,w:24.0,h:9.0} },
          { id:"l7", text:"VII: superior mediastinal (below sternal notch)", box:{x:37.4,y:90.8,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "parotid-facial-nerve",
        title: "Parotid gland & facial nerve",
        note: "Why facial-nerve function is documented before and after every parotid operation. Name each, then reveal.",
        src: "assets/img/mc/63_parotid_facial_nerve_rcsi.png",
        source: "Parotid Region and Facial Nerve Branching Pattern. Royal College of Surgeons of Ireland (CC BY-NC-SA).",
        labels: [
          { id:"gland", text:"Parotid gland", box:{x:32.1,y:32.2,w:24.0,h:9.0} },
          { id:"vii", text:"Facial nerve (CN VII): divides gland into superficial/deep lobes", box:{x:32.1,y:45.5,w:24.0,h:9.0} },
          { id:"branches", text:"Terminal branches (temporal, zygomatic, buccal, marginal mandibular, cervical)", box:{x:32.1,y:62.2,w:24.0,h:9.0} },
          { id:"duct", text:"Stensen's duct → opens opposite upper 2nd molar", box:{x:76.0,y:45.5,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "oral-oropharynx-subsites",
        title: "Oral cavity vs oropharynx (sagittal)",
        note: "The subsite boundary that separates tobacco-driven from HPV-driven cancer. Name each, then reveal.",
        src: "assets/img/mc/61b_oral_cavity_oropharynx_sagittal_openstax.png",
        source: "Oral Cavity vs. Oropharynx Boundaries (Sagittal Section). OpenStax.",
        labels: [
          { id:"oral", text:"Oral cavity: lips, buccal mucosa, floor of mouth, hard palate, anterior 2/3 tongue; tobacco/alcohol-driven", box:{x:15.8,y:53.2,w:24.0,h:9.0} },
          { id:"orop", text:"Oropharynx: base of tongue, tonsil, soft palate, posterior wall; increasingly HPV-driven", box:{x:57.4,y:53.2,w:24.0,h:9.0} },
          { id:"boundary", text:"Circumvallate papillae / soft palate = the subsite boundary", box:{x:38.0,y:45.5,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "salivary-glands-overview",
        title: "The three major salivary glands and their ducts",
        note: "Parotid, submandibular, and sublingual, together with where each duct empties into the mouth. Name each, then reveal.",
        src: "assets/img/mc/59_salivary_glands_ducts_knowledgeworks.png",
        source: "Major Salivary Glands and Ducts (Parotid, Submandibular, Sublingual). KnowledgeWorks Global Ltd. (CC BY).",
        labels: [
          { id:"parotid-gland", text:"Parotid gland: the largest major salivary gland, overlying the mandibular ramus below the ear", box:{x:58.8,y:32.2,w:24.0,h:9.0} },
          { id:"stensens-duct", text:"Stensen's duct: opens opposite the upper second molar", box:{x:13.0,y:38.8,w:24.0,h:9.0} },
          { id:"submandibular-gland", text:"Submandibular gland: sits below the body of the mandible", box:{x:35.2,y:63.8,w:24.0,h:9.0} },
          { id:"whartons-duct", text:"Wharton's duct: runs an uphill course to open at the sublingual caruncle", box:{x:24.1,y:66.2,w:24.0,h:9.0} },
          { id:"sublingual-gland", text:"Sublingual gland: smallest major gland, in the floor of the mouth", box:{x:18.6,y:55.5,w:24.0,h:9.0} },
          { id:"sublingual-caruncle", text:"Sublingual caruncle: shared opening for Wharton's duct and the sublingual ducts", box:{x:14.4,y:60.5,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "thyroid-parathyroid-anatomy",
        title: "Thyroid and parathyroid glands with the recurrent laryngeal nerve",
        note: "Two lobes, one isthmus, four parathyroids, and a nerve at risk on each side. Name each, then reveal.",
        src: "assets/img/mc/60_thyroid_parathyroid_vasculature_rcsi.png",
        source: "Thyroid and Parathyroid Glands, Vasculature, and Recurrent Laryngeal Nerve. Royal College of Surgeons of Ireland (CC BY-NC-SA).",
        labels: [
          { id:"thyroid-lobes", text:"Thyroid gland: two lobes joined by an isthmus, sitting anterior to the trachea", box:{x:22.4,y:45.5,w:24.0,h:9.0} },
          { id:"isthmus", text:"Isthmus: bridges the two lobes across the front of the trachea", box:{x:38.0,y:43.9,w:24.0,h:9.0} },
          { id:"parathyroids", text:"Four parathyroid glands (superior and inferior, times two), on the posterior thyroid capsule", box:{x:24.9,y:34.6,w:24.0,h:9.0} },
          { id:"rln", text:"Recurrent laryngeal nerve: runs close to the thyroid in the tracheoesophageal groove on each side; injury causes vocal fold paralysis", box:{x:31.1,y:64.2,w:24.0,h:9.0} },
          { id:"trachea", text:"Trachea: the thyroid gland wraps around its anterior and lateral surface", box:{x:38.0,y:17.4,w:24.0,h:9.0} }
        ]
      }
    ]
  },

  /* ==================== CLINICAL TAB ==================== */
  clinical: {
    blocks: [
      {
        id: "unknown-primary",
        title: "The unknown-primary workup for a neck mass",
        html: "<ol><li><strong>FNA first</strong>: never open biopsy first.</li>" +
          "<li>If FNA shows <strong>squamous cell carcinoma</strong>, examine and image the likely primary sites (<strong>base of tongue, tonsil, nasopharynx, hypopharynx</strong>), plus <strong>p16 (HPV surrogate)</strong> and <strong>EBV</strong> testing on the FNA/biopsy specimen, since a positive result points strongly toward an oropharyngeal or nasopharyngeal source respectively.</li>" +
          "<li><strong>PET-CT</strong> and <strong>panendoscopy with directed/blind biopsies</strong> (including tonsillectomy of the ipsilateral tonsil) if no primary is found on exam/imaging.</li></ol>"
      },
      {
        id: "hpv-oropharyngeal",
        title: "HPV-associated oropharyngeal cancer",
        html: "<p>Rising incidence, typically in <strong>younger, non-smoking</strong> patients. <strong>p16 immunohistochemistry</strong> is the standard surrogate marker for HPV-driven tumors (types 16/18 most implicated) and carries a <strong>better prognosis</strong> than HPV-negative disease at the same stage, reflected in a separate staging system. <strong>Pitfall:</strong> a cystic neck node from an HPV+ oropharyngeal primary can look radiologically and even cytologically like a benign branchial cleft cyst. A new 'branchial cleft cyst' in an adult over ~40 needs the primary excluded, not just drained.</p>"
      },
      {
        id: "nasopharyngeal-carcinoma",
        title: "Nasopharyngeal carcinoma (NPC): the EBV-associated cancer everyone should recognize early",
        html: "<p>Endemic in southern China/Southeast Asia (also elevated in North Africa), strongly associated with <strong>Epstein-Barr virus (EBV)</strong>; salted/preserved-food diet and genetic susceptibility contribute. Importantly, <strong>tobacco and alcohol are far less central</strong> than for other head &amp; neck cancers, and NPC readily occurs in never-smokers.</p>" +
          "<p><strong>Classic presentation</strong>, driven by the tumor's nasopharyngeal location:</p>" +
          "<ul><li>A painless neck mass (nodal metastasis), often the presenting sign.</li>" +
          "<li>A <strong>unilateral middle-ear effusion/hearing loss</strong> in an adult, from Eustachian tube obstruction.</li>" +
          "<li><strong>Epistaxis or nasal obstruction</strong>.</li>" +
          "<li>With skull-base extension, <strong>cranial neuropathies</strong> (CN VI most classically, causing diplopia).</li></ul>" +
          "<p><strong>Workup:</strong> nasopharyngoscopy with biopsy of the primary; <strong>EBV serology/plasma EBV DNA</strong> supports diagnosis and is used to track treatment response and detect recurrence; MRI of the skull base/neck for local extent and nodal disease.</p>" +
          "<p><strong>Treatment:</strong> NPC is highly <strong>radiosensitive</strong>, so primary treatment is radiation (often with concurrent chemotherapy for locoregionally advanced disease), unlike most oral cavity/oropharyngeal SCC, where surgery is typically first-line.</p>"
      },
      {
        id: "thyroid-nodule-workup",
        title: "Thyroid nodule: the workup order",
        html: "<ol><li><strong>TSH</strong> first: if low/suppressed, get a radionuclide scan (a 'hot' autonomous nodule is rarely cancer and isn't FNA'd first).</li>" +
          "<li><strong>Ultrasound</strong>: assess size and suspicious features (<strong>TI-RADS</strong>: microcalcifications, taller-than-wide shape, irregular margins, marked hypoechogenicity) to decide if FNA is warranted.</li>" +
          "<li><strong>FNA</strong>, reported by the <strong>Bethesda System</strong> (categories I-VI, from non-diagnostic to malignant), guides surgery vs surveillance.</li></ol>" + "<figure class='note-fig' data-credit='Thyroid nodule workup. Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/mc/image70.png' alt='Thyroid nodule workup sequence' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Thyroid nodule workup order: TSH, then ultrasound (TI-RADS), then FNA (Bethesda).</figcaption></figure><p><strong>ACR TI-RADS scoring:</strong></p><div class=\"tbl-scroll\"><table><thead><tr><th>Feature category</th><th>Feature (points)</th></tr></thead><tbody><tr><td><b>Composition</b></td><td>Cystic/spongiform (0); mixed cystic-solid (1); solid (2)</td></tr><tr><td><b>Echogenicity</b></td><td>Anechoic (0); hyper-/isoechoic (1); hypoechoic (2); very hypoechoic (3)</td></tr><tr><td><b>Shape</b></td><td>Wider-than-tall (0); taller-than-wide (3)</td></tr><tr><td><b>Margin</b></td><td>Smooth/ill-defined (0); lobulated/irregular (2); extrathyroidal extension (3)</td></tr><tr><td><b>Echogenic foci</b></td><td>None/comet-tail (0); macrocalcification (1); peripheral/rim (2); punctate echogenic foci/microcalcifications (3)</td></tr></tbody></table></div><div class=\"tbl-scroll\"><table><thead><tr><th>Level</th><th>Points</th><th>Suspicion</th><th>FNA if &ge;</th><th>Follow-up US if &ge;</th></tr></thead><tbody><tr><td><b>TR1</b></td><td>0</td><td>Benign</td><td>No FNA</td><td>None</td></tr><tr><td><b>TR2</b></td><td>2</td><td>Not suspicious</td><td>No FNA</td><td>None</td></tr><tr><td><b>TR3</b></td><td>3</td><td>Mildly suspicious</td><td>2.5 cm</td><td>1.5 cm</td></tr><tr><td><b>TR4</b></td><td>4-6</td><td>Moderately suspicious</td><td>1.5 cm</td><td>1.0 cm</td></tr><tr><td><b>TR5</b></td><td>&ge;7</td><td>Highly suspicious</td><td>1.0 cm</td><td>0.5 cm</td></tr></tbody></table></div><p><strong>Bethesda System for Reporting Thyroid Cytopathology:</strong></p><div class=\"tbl-scroll\"><table><thead><tr><th>Category</th><th>Name</th><th>ROM (%)</th><th>Usual management</th></tr></thead><tbody><tr><td><b>I</b></td><td>Nondiagnostic</td><td>5-20</td><td>Repeat FNA with ultrasound guidance</td></tr><tr><td><b>II</b></td><td>Benign</td><td>2-7</td><td>Clinical + sonographic follow-up</td></tr><tr><td><b>III</b></td><td>Atypia of undetermined significance (AUS)</td><td>13-30</td><td>Repeat FNA, molecular testing, or diagnostic lobectomy; subclassify AUS-nuclear (higher ROM) vs AUS-other</td></tr><tr><td><b>IV</b></td><td>Follicular neoplasm</td><td>23-34</td><td>Molecular testing or diagnostic lobectomy</td></tr><tr><td><b>V</b></td><td>Suspicious for malignancy</td><td>67-83</td><td>Lobectomy or total thyroidectomy</td></tr><tr><td><b>VI</b></td><td>Malignant</td><td>97-100</td><td>Lobectomy or total thyroidectomy (per tumor type)</td></tr></tbody></table></div>"
      },
      {
        id: "salivary-tumours",
        title: "Salivary gland tumors: the 'rule of 80s' and the red flag",
        html: "<p>Roughly <strong>80% of parotid tumors are benign</strong>, and <strong>80% of those benign tumors are pleomorphic adenoma</strong> (the most common salivary neoplasm overall). The most common <em>malignant</em> parotid tumor is <strong>mucoepidermoid carcinoma</strong>. The single most important red flag on exam: <strong>facial nerve weakness with a parotid mass is a malignant sign</strong> until proven otherwise. A benign tumor essentially never causes facial weakness.</p>"
      },
      {
        id: "salivary-gland-spectrum",
        title: "The salivary gland spectrum: beyond pleomorphic adenoma",
        html: "<p>The 'rule of 80s' covers the two most common parotid entities. A well-rounded differential adds:</p>" +
          "<ul><li><strong>Warthin tumor</strong> (papillary cystadenoma lymphomatosum): the second most common benign parotid tumor; classically an <strong>elderly male smoker</strong>, and unique among salivary tumors for being <strong>bilateral or multifocal in up to ~10%</strong> of cases.</li>" +
          "<li><strong>Adenoid cystic carcinoma:</strong> more often arises in the <strong>minor salivary glands</strong> (classically the palate) than the parotid. The hallmark is <strong>perineural invasion</strong>: pain or numbness disproportionate to the size of the mass. It behaves indolently but relentlessly, with a tendency for <strong>late distant metastasis</strong> (often to lung) even after apparently successful local treatment.</li>" +
          "<li><strong>Acute bacterial sialadenitis:</strong> typically the <strong>parotid</strong>, in a dehydrated, debilitated, or post-operative patient (reduced salivary flow lets bacteria ascend the duct), with painful, tender, unilateral swelling and purulent discharge expressible from the duct; <em>Staph. aureus</em> is the classic organism. Treat with hydration, sialagogues/massage, and antibiotics.</li>" +
          "<li><strong>Viral parotitis (mumps):</strong> typically <strong>bilateral</strong>, with a viral prodrome, in an unvaccinated or under-vaccinated patient. Self-limited, supportive care only.</li></ul>"
      },
      {
        id: "hypopharyngeal-cancer",
        title: "Hypopharyngeal cancer: why it presents late and does worse",
        html: "<p>Three subsites: the <strong>pyriform sinus</strong> (the most common site), the <strong>postcricoid region</strong>, and the <strong>posterior pharyngeal wall</strong>. Unlike glottic cancer (which causes hoarseness early), the hypopharynx is roomy with sparse early symptoms. Patients often present late with a <strong>neck mass</strong>, progressive <strong>dysphagia</strong>, or <strong>referred otalgia</strong>, by which point disease is frequently locally advanced. This late presentation is the main reason hypopharyngeal cancer carries a <strong>worse prognosis</strong> than most other head &amp; neck subsites.</p>" +
          "<p><strong>Plummer-Vinson (Paterson-Kelly) syndrome</strong> (iron-deficiency anemia, an esophageal web, and dysphagia, classically in <strong>middle-aged women</strong>) is a rare but classic predisposing condition specifically for <strong>postcricoid</strong> carcinoma; correcting the anemia and dilating the web don't substitute for excluding malignancy.</p>"
      },
      {
        id: "neck-dissection-classification",
        title: "Neck dissection: the three classes to know",
        html: "<p>Named for how much beyond the lymph nodes themselves is sacrificed. Modern head &amp; neck surgery favors the least aggressive dissection that still adequately treats the disease. A selective neck dissection is now standard for many cN0 (clinically node-negative) necks.</p>",
        table: {
          head: ["Type", "What's removed", "What's preserved"],
          rows: [
            ["Radical neck dissection", "All lymph node levels I-V", "Nothing extra spared: sacrifices SCM, internal jugular vein, and spinal accessory nerve"],
            ["Modified radical neck dissection", "All lymph node levels I-V", "One or more of SCM / IJV / spinal accessory nerve preserved"],
            ["Selective neck dissection", "Only the level(s) at highest risk for the specific primary (e.g., levels I-III for oral cavity)", "All non-lymphatic structures (SCM, IJV, spinal accessory nerve) preserved"]
          ]
        }
      },
      {
        id: "tnm-mdt",
        title: "Staging, margins, and the multidisciplinary tumor board",
        html: "<p>Head &amp; neck cancers are staged with <strong>TNM</strong> (tumor size/invasion, nodal spread, distant metastasis), which drives treatment choice (surgery vs chemoradiation vs both). Cases are reviewed at a <strong>multidisciplinary tumor board</strong> (surgery, radiation oncology, medical oncology, pathology, radiology) before treatment starts. This is standard of care, not a formality.</p><p><strong>AJCC 8th edition, HPV-mediated (p16+) oropharyngeal SCC:</strong></p><div class=\"tbl-scroll\"><table><thead><tr><th>Component</th><th>Category</th><th>Definition</th></tr></thead><tbody><tr><td rowspan=\"5\"><b>T</b></td><td>T0</td><td>No primary identified (p16+ node)</td></tr><tr><td>T1</td><td>&le;2 cm</td></tr><tr><td>T2</td><td>&gt;2 cm to &le;4 cm</td></tr><tr><td>T3</td><td>&gt;4 cm, or extension to lingual surface of epiglottis</td></tr><tr><td>T4</td><td>Invades larynx, extrinsic tongue muscle, medial pterygoid, hard palate, mandible, or beyond</td></tr><tr><td rowspan=\"4\"><b>Clinical N (cN)</b></td><td>N0</td><td>No regional nodes</td></tr><tr><td>N1</td><td>&ge;1 ipsilateral node, none &gt;6 cm</td></tr><tr><td>N2</td><td>Contralateral or bilateral nodes, none &gt;6 cm</td></tr><tr><td>N3</td><td>Any node &gt;6 cm</td></tr><tr><td rowspan=\"3\"><b>Pathological N (pN)</b></td><td>N0</td><td>No positive nodes</td></tr><tr><td>N1</td><td>&le;4 positive nodes</td></tr><tr><td>N2</td><td>&gt;4 positive nodes</td></tr><tr><td><b>M</b></td><td>M0 / M1</td><td>No distant metastasis / distant metastasis</td></tr><tr><td rowspan=\"4\"><b>Clinical stage (RT/chemoRT)</b></td><td>I</td><td>T0-T2, N0-N1, M0</td></tr><tr><td>II</td><td>T0-T2 N2, or T3 N0-N2, M0</td></tr><tr><td>III</td><td>T0-T3 N3, or T4 N0-N3, M0</td></tr><tr><td>IV</td><td>Any T, any N, M1</td></tr><tr><td rowspan=\"4\"><b>Pathological stage (surgery)</b></td><td>I</td><td>T0-T2, N0-N1, M0</td></tr><tr><td>II</td><td>T0-T2 N2, or T3-T4 N0-N1, M0</td></tr><tr><td>III</td><td>T3-T4 N2, M0</td></tr><tr><td>IV</td><td>Any T, any N, M1</td></tr></tbody></table></div>"
      }
    ],
    redFlags: [
      { t: "<b>Supraclavicular node (Virchow's node)</b>: think of a primary <b>below the diaphragm</b> (GI, GU) as well as head & neck; work up accordingly." },
      { t: "<b>Facial nerve weakness with a parotid mass</b>: malignant until proven otherwise." },
      { t: "<b>Persistent oral ulcer, leukoplakia, or erythroplakia</b> (&gt;2-3 weeks) in a smoker: biopsy; erythroplakia carries a higher malignant-transformation risk than leukoplakia." },
      { t: "<b>Rapidly enlarging thyroid nodule, hoarseness, or a fixed/hard nodule</b>: concern for malignancy with possible extrathyroidal extension (RLN involvement)." },
      { t: "<b>Odynophagia + referred otalgia in a smoker</b>: consider hypopharyngeal cancer; this presentation is easy to miss." },
      { t: "<b>New 'branchial cleft cyst' in an adult &gt;~40</b>: exclude a cystic nodal metastasis from an HPV+ oropharyngeal primary before assuming a congenital cyst." },
      { t: "<b>Trismus with a neck/parotid mass</b>: suggests parapharyngeal space extension; involves the muscles of mastication." },
      { t: "<b>Unilateral middle-ear effusion in an adult</b>, especially with epistaxis, nasal obstruction, or a new cranial neuropathy (e.g., diplopia): exclude nasopharyngeal carcinoma with nasopharyngoscopy, not just a course of decongestants." },
      { t: "<b>Pain or numbness out of proportion to the size of a minor salivary gland mass</b> (e.g., a palatal lump): think perineural invasion from adenoid cystic carcinoma." }
    ]
  },

  /* ==================== CASES TAB ==================== */
  cases: [
    {
      id: "case-hpv-oropharyngeal",
      ukmla: "Neck lump",
      source: "NCCN Clinical Practice Guidelines in Oncology: Head and Neck Cancers.",
      stem: "A <b>52-year-old non-smoker</b> notices a <b>painless right neck lump</b> for a month. On exam there is a firm level II node and a subtle asymmetric fullness at the base of the tongue.",
      prompts: [
        { q: "Given the profile (non-smoker, painless neck node), what should you specifically test for?", a: "<b>p16 immunohistochemistry</b> on FNA/biopsy. A positive result strongly suggests an <b>HPV-associated oropharyngeal primary</b>, which fits this non-smoking, middle-aged demographic far better than classic tobacco-driven head & neck cancer." },
        { q: "How does this change the prognosis and workup?", a: "HPV-associated oropharyngeal cancer carries a <b>better prognosis</b> stage-for-stage and is staged separately from HPV-negative disease. The workup still starts with FNA (not open biopsy), followed by exam/imaging of the base of tongue and tonsil, and often panendoscopy." }
      ],
      teaching: "A painless neck node in an otherwise well, non-smoking, middle-aged patient is the classic setup for HPV-associated oropharyngeal cancer. Don't let 'non-smoker' lower your suspicion for head & neck cancer."
    },
    {
      id: "case-nasopharyngeal-carcinoma",
      ukmla: ["Neck lump", "Hearing loss"],
      source: "NCCN Clinical Practice Guidelines in Oncology: Head and Neck Cancers; standard oncology teaching on EBV-associated nasopharyngeal carcinoma.",
      stem: "A <b>48-year-old</b>, recently emigrated from southern China, presents with three months of <b>right-sided hearing loss and ear fullness</b> and a new <b>painless neck lump</b>. Otoscopy shows a dull, retracted tympanic membrane with a visible fluid level but no history of an upper respiratory infection.",
      prompts: [
        { q: "What unifying diagnosis explains the ear findings, the neck mass, and his background, and why?", a: "<b>Nasopharyngeal carcinoma (NPC)</b>, endemic in southern China and strongly EBV-associated. The tumor obstructs the Eustachian tube, causing a unilateral middle-ear effusion, while cervical nodal metastasis produces the neck mass. A unilateral effusion in an adult is never 'just fluid' until the nasopharynx has been examined." },
        { q: "What confirms the diagnosis, and how does treatment differ from most other head & neck cancers?", a: "<b>Nasopharyngoscopy with biopsy</b> of the primary, plus <b>EBV serology/plasma EBV DNA</b>. Unlike most oral cavity/oropharyngeal SCC (surgery-first), NPC is highly <b>radiosensitive</b> and is primarily treated with radiation ± chemotherapy." }
      ],
      teaching: "Unilateral serous otitis media in an adult is a red flag, not routine ENT. Look at the nasopharynx before treating 'fluid in the ear.'"
    },
    {
      id: "case-parotid-facial-weakness",
      ukmla: "Facial/periorbital swelling",
      source: "Standard head & neck oncology teaching on parotid neoplasms.",
      stem: "A <b>64-year-old</b> has a slowly enlarging <b>right parotid mass</b> over several months, now with new <b>weakness of the right side of the face</b>.",
      prompts: [
        { q: "What does the facial weakness signify?", a: "Facial nerve involvement with a parotid mass is a <b>red flag for malignancy</b>. Benign parotid tumors (like pleomorphic adenoma) essentially never cause facial weakness because they don't invade the nerve." },
        { q: "What's the workup?", a: "Imaging (MRI) to assess extent, <b>FNA</b> for cytology, and surgical planning that accounts for probable nerve involvement. Patients need counseling that nerve sacrifice/reconstruction may be part of treatment if malignant." }
      ],
      teaching: "A parotid mass is a low-stakes finding until the facial nerve is involved. Then it's a different conversation entirely."
    },
    {
      id: "case-adenoid-cystic-perineural",
      ukmla: "Neck lump",
      source: "Standard head & neck oncology teaching on minor salivary gland malignancy.",
      stem: "A <b>55-year-old</b> has a slow-growing, painless 1.5 cm hard palate mass first noticed six months ago. She now reports intermittent <b>numbness of the ipsilateral upper lip and cheek</b>, out of proportion to the size of the lesion.",
      prompts: [
        { q: "What tumor type does facial numbness out of proportion to lesion size suggest, and why?", a: "<b>Adenoid cystic carcinoma</b>, the most common malignancy of the minor salivary glands, such as the palate. Its hallmark is <b>perineural invasion</b>: tumor tracks along nerve sheaths (here, a branch of CN V2), producing sensory disturbance far beyond what the visible mass would predict." },
        { q: "What does perineural invasion mean for long-term follow-up, even after apparently complete local excision?", a: "ACC behaves indolently but relentlessly. It has a marked tendency for <b>late distant metastasis</b> (classically to lung), sometimes many years after treatment, so long-term surveillance continues well beyond the typical 5-year mark used for other head & neck cancers." }
      ],
      teaching: "Numbness, not just a mass, is the clue. Perineural spread can outrun what you can feel or see on the palate."
    },
    {
      id: "case-thyroid-nodule",
      ukmla: "Neck lump",
      source: "American Thyroid Association guidelines on thyroid nodule evaluation, 2015.",
      stem: "A <b>45-year-old woman</b> has an incidentally found 1.8 cm thyroid nodule. TSH is normal. Ultrasound shows a hypoechoic nodule that is taller than it is wide, with microcalcifications.",
      prompts: [
        { q: "What do these ultrasound features suggest, and what's next?", a: "These are <b>TI-RADS high-suspicion features</b> (hypoechoic, taller-than-wide, microcalcifications), and they warrant <b>FNA</b> regardless of the nodule being otherwise asymptomatic." },
        { q: "How is the FNA result reported and acted on?", a: "By the <b>Bethesda System</b> (categories I-VI). A malignant or suspicious result (categories V-VI) generally leads to surgery (lobectomy or total thyroidectomy depending on features); indeterminate categories may use molecular testing to help decide." }
      ],
      teaching: "TSH and ultrasound features decide who gets an FNA, not nodule size alone."
    },
    {
      id: "case-virchows-node",
      ukmla: "Neck lump",
      source: "Standard oncology teaching on Virchow's node/Troisier's sign.",
      stem: "A <b>58-year-old</b> presents with a firm, non-tender <b>left supraclavicular node</b> and unintentional weight loss. Head and neck exam and endoscopy are unremarkable.",
      prompts: [
        { q: "What does a supraclavicular node specifically raise concern for?", a: "<b>Virchow's node</b> (left supraclavicular, via the thoracic duct) classically signals a primary <b>below the diaphragm</b> (gastric, pancreatic, or other abdominal/pelvic malignancy), in addition to thoracic and head & neck sources." },
        { q: "How does the workup differ from a typical head & neck neck-mass workup?", a: "Still start with <b>FNA</b>, but when the head & neck exam is unremarkable, broaden imaging to include the <b>chest and abdomen/pelvis</b> rather than only searching the aerodigestive tract." }
      ],
      teaching: "Location changes the differential: a supraclavicular node earns a workup below the diaphragm, not just above it."
    },
    {
      id: "case-oral-leukoplakia",
      ukmla: "Neck lump",
      source: "Standard oral oncology teaching on premalignant lesions.",
      stem: "A <b>60-year-old smoker</b> has a white patch on the lateral tongue that his dentist noticed 6 weeks ago. It does not wipe off and is not painful.",
      prompts: [
        { q: "What is this lesion called, and what must be done?", a: "<b>Leukoplakia</b>, a white patch that can't be scraped off and isn't attributable to another cause. It is a <b>premalignant</b> lesion and requires <b>biopsy</b> to assess for dysplasia or early invasive carcinoma, not reassurance or watchful waiting alone." },
        { q: "What lesion carries even higher risk if seen instead?", a: "<b>Erythroplakia</b> (a red patch) is less common than leukoplakia but carries a <b>substantially higher</b> rate of dysplasia/malignancy on biopsy, and should be treated with even greater urgency." }
      ],
      teaching: "Any persistent oral white or red patch in a smoker gets biopsied. Location (lateral tongue, floor of mouth) is high-risk, and description alone can't exclude cancer."
    }
  ],

  /* ==================== CARDS TAB ==================== */
  cards: [
    { id:"neck-levels-full-card", tags: ["HN", "anatomy"], milestones:["MK1","PC3"], ukmla:"Neck lump", source:"Standard head & neck oncologic anatomy teaching.", front:"Beyond levels I-VI, what is level VII, and how are levels II and V further subdivided?",
      back:"<strong>Level VII</strong> = superior mediastinal nodes, below the sternal notch, relevant to thyroid/lower-neck cancer. <strong>Level II</strong> splits into <strong>IIA/IIB</strong>, and <strong>level V</strong> into <strong>VA/VB</strong>, both divided relative to the <strong>spinal accessory nerve</strong>." },
    { id:"parotid-anatomy-card", tags: ["HN", "anatomy"], milestones:["MK1","PC3"], ukmla:"Facial/periorbital swelling", source:"Standard salivary gland anatomy teaching.", front:"The <span class=\"cloze-blank\">[...]</span> (CN VII) runs directly through the parotid gland, dividing it into superficial and deep lobes.",
      back:"The <mark class=\"cloze-answer\">facial nerve</mark> (CN VII) runs directly through the parotid gland, dividing it into superficial and deep lobes. Its function is documented before and after every parotid operation, since new weakness can signal malignant invasion.<figure class='note-fig' data-credit=\"Parotid Region and Facial Nerve Branching Pattern. Royal College of Surgeons of Ireland (CC BY-NC-SA).\"><img class='zoomable' src='assets/img/mc/63_parotid_facial_nerve_rcsi.png' alt='Parotid region and facial nerve' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Parotid region and facial nerve branching pattern.</figcaption></figure>" },
    { id:"submandibular-duct-card", tags: ["HN", "anatomy"], milestones:["MK1"], ukmla:"Neck lump", source:"Standard salivary gland anatomy teaching.", front:"Why is the submandibular gland the classic site for salivary stones?",
      back:"<strong>Wharton's duct</strong> runs an <strong>uphill</strong>, tortuous course from the gland to the sublingual caruncle, and submandibular saliva is more mucous/viscous. Both favor stone (sialolith) formation, causing meal-time pain and swelling.<figure class='note-fig' data-credit=\"Major Salivary Glands and Ducts. KnowledgeWorks Global Ltd. (CC BY).\"><img class='zoomable' src='assets/img/mc/59_salivary_glands_ducts_knowledgeworks.png' alt='Major salivary glands and ducts' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The major salivary glands and their ducts.</figcaption></figure>" },
    { id:"thyroid-parathyroid-anatomy-card", tags: ["HN", "anatomy"], milestones:["MK1","PC3"], ukmla:"Neck lump", source:"Standard thyroid/parathyroid surgical anatomy teaching.", front:"What two structures are at surgical risk during thyroidectomy, and what does injury to each cause?",
      back:"<strong>Recurrent laryngeal nerve</strong> (runs near the tracheoesophageal groove): injury causes vocal fold paralysis/hoarseness (bilateral = airway emergency). <strong>Parathyroid glands</strong> (four, on the posterior thyroid capsule): inadvertent removal/devascularization causes post-operative <strong>hypocalcemia</strong>.<figure class='note-fig' data-credit=\"Thyroid and Parathyroid Glands, Vasculature, and Recurrent Laryngeal Nerve. RCSI (CC BY-NC-SA).\"><img class='zoomable' src='assets/img/mc/60_thyroid_parathyroid_vasculature_rcsi.png' alt='Thyroid and parathyroid anatomy' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Thyroid and parathyroid glands, vasculature, and recurrent laryngeal nerve.</figcaption></figure>" },
    { id:"oral-vs-oropharynx-card", tags: ["HN", "anatomy"], milestones:["MK1","PC3"], ukmla:"Neck lump", source:"NCCN Head and Neck Cancers Guideline: subsite definitions.", front:"What structures define the oral cavity vs the oropharynx, and why does the distinction matter oncologically?",
      back:"<strong>Oral cavity:</strong> lips, buccal mucosa, floor of mouth, hard palate, anterior 2/3 tongue, classically <strong>tobacco/alcohol-driven</strong>. <strong>Oropharynx:</strong> base of tongue, tonsil, soft palate, posterior pharyngeal wall, increasingly <strong>HPV-driven</strong>, with a better prognosis.<figure class='note-fig' data-credit=\"Oral Cavity vs. Oropharynx Boundaries (Coronal Section). OpenStax.\"><img class='zoomable' src='assets/img/mc/61a_oral_cavity_oropharynx_coronal_openstax.png' alt='Oral cavity vs oropharynx, coronal' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Oral cavity versus oropharynx boundaries, coronal section.</figcaption></figure>" },
    { id:"unknown-primary-card", tags: ["HN", "clinical"], milestones:["PC3"], ukmla:"Neck lump", source:"NCCN Head and Neck Cancers Guideline: unknown primary workup.", front:"Outline the workup for a neck mass with FNA showing squamous cell carcinoma but no obvious primary.",
      back:"Examine/image the likely primaries: <strong>base of tongue, tonsil, nasopharynx, hypopharynx</strong>. Test the specimen for <strong>p16</strong> (HPV surrogate → oropharyngeal source) and <strong>EBV</strong> (→ nasopharyngeal source). If still unlocalized: <strong>PET-CT</strong> and <strong>panendoscopy with directed biopsies</strong> (± ipsilateral tonsillectomy)." },
    { id:"hpv-oropharyngeal-card", tags: ["HN", "clinical"], milestones:["PC3","MK3"], ukmla:"Neck lump", source:"NCCN Head and Neck Cancers Guideline; standard oncology teaching on HPV-associated disease.", front:"How does HPV-associated oropharyngeal cancer differ from classic tobacco-driven head & neck cancer?",
      back:"Typically a <strong>younger, non-smoking</strong> patient; confirmed by <strong>p16 immunohistochemistry</strong> (surrogate for HPV 16/18); carries a <strong>better prognosis</strong> stage-for-stage, with its own separate staging system." },
    { id:"cystic-neck-met-pitfall-card", tags: ["HN", "clinical"], milestones:["PC3"], redFlag:true, ukmla:"Neck lump", source:"Standard head & neck oncology teaching on cystic nodal metastasis.", front:"Why is a new 'branchial cleft cyst' in an older adult a diagnostic trap?",
      back:"A cystic neck mass from an <strong>HPV+ oropharyngeal cancer nodal metastasis</strong> can look identical, radiologically and even cytologically, to a benign branchial cleft cyst. A first-time 'branchial cleft cyst' presenting after ~age 40 needs the primary excluded (exam, p16 testing), not just drainage." },
    { id:"npc-epidemiology-card", tags: ["HN", "clinical"], milestones:["PC3","MK3"], ukmla:"Neck lump", source:"NCCN Head and Neck Cancers Guideline; standard oncology teaching on EBV-associated NPC.", front:"Unlike most head and neck cancers, which are driven by tobacco and alcohol, nasopharyngeal carcinoma is strongly associated with <span class=\"cloze-blank\">[...]</span> and occurs readily in never-smokers.",
      back:"Unlike most head and neck cancers, which are driven by tobacco and alcohol, nasopharyngeal carcinoma is strongly associated with <mark class=\"cloze-answer\">Epstein-Barr virus (EBV)</mark> and occurs readily in never-smokers. It's endemic in southern China and Southeast Asia, where diet and genetic susceptibility also contribute." },
    { id:"npc-presentation-workup-card", tags: ["HN", "clinical"], milestones:["PC3","MK3"], redFlag:true, ukmla:["Neck lump","Hearing loss"], source:"NCCN Head and Neck Cancers Guideline; standard oncology teaching on EBV-associated NPC.", front:"What classic presentation and workup should nasopharyngeal carcinoma trigger?",
      back:"Painless neck mass + <strong>unilateral middle-ear effusion/hearing loss</strong> in an adult (Eustachian tube obstruction) ± epistaxis/nasal obstruction ± <strong>cranial neuropathies</strong> (CN VI/diplopia) from skull-base extension. Workup: <strong>nasopharyngoscopy with biopsy</strong>, <strong>EBV serology/plasma EBV DNA</strong>, and MRI skull base/neck." },
    { id:"npc-treatment-card", tags: ["HN", "clinical"], milestones:["PC3","MK3"], ukmla:"Neck lump", source:"NCCN Head and Neck Cancers Guideline.", front:"How does first-line treatment of NPC differ from most oral cavity/oropharyngeal SCC?",
      back:"NPC is highly <strong>radiosensitive</strong>, so primary treatment is <strong>radiation</strong> (often with concurrent chemotherapy for locoregionally advanced disease), rather than the surgery-first approach used for most oral cavity/oropharyngeal squamous cell carcinoma." },
    { id:"thyroid-nodule-workup-card", tags: ["HN", "clinical"], milestones:["PC3","MK1"], ukmla:"Neck lump", source:"American Thyroid Association guidelines on thyroid nodule management, 2015.", front:"What is the stepwise workup for a newly found thyroid nodule?",
      back:"<strong>TSH</strong> first (a suppressed TSH → radionuclide scan; a 'hot' nodule is rarely malignant and skips FNA). Then <strong>ultrasound</strong> to assess suspicious features. Then <strong>FNA</strong> if features/size warrant it, reported by the <strong>Bethesda System</strong>.<figure class='note-fig' data-credit=\"Stepwise Thyroid Nodule Workup Algorithm. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/66_thyroid_nodule_workup_algorithm_gemini.png' alt='Thyroid nodule workup algorithm' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Stepwise thyroid nodule workup algorithm.</figcaption></figure>" },
    { id:"tirads-card", tags: ["HN", "clinical"], milestones:["PC3"], ukmla:"Neck lump", source:"American Thyroid Association / ACR TI-RADS.", front:"What ultrasound features raise suspicion for thyroid malignancy (TI-RADS)?",
      back:"<strong>Microcalcifications, taller-than-wide shape, irregular/spiculated margins, marked hypoechogenicity</strong>, and extrathyroidal extension. More high-risk features → lower size threshold for recommending FNA." },
    { id:"bethesda-card", tags: ["HN", "clinical"], milestones:["PC3"], scope:"sub-I", ukmla:"Neck lump", source:"The Bethesda System for Reporting Thyroid Cytopathology.", front:"What does the Bethesda System do for a thyroid FNA result?",
      back:"Standardizes reporting into six categories (I: non-diagnostic → VI: malignant), each with an associated malignancy risk that guides management, from repeat FNA/observation at the low end to surgery at the high end.<div class=\"tbl-scroll\"><table><thead><tr><th>Category</th><th>Name</th><th>ROM (%)</th><th>Usual management</th></tr></thead><tbody><tr><td><b>I</b></td><td>Nondiagnostic</td><td>5-20</td><td>Repeat FNA with ultrasound guidance</td></tr><tr><td><b>II</b></td><td>Benign</td><td>2-7</td><td>Clinical + sonographic follow-up</td></tr><tr><td><b>III</b></td><td>Atypia of undetermined significance (AUS)</td><td>13-30</td><td>Repeat FNA, molecular testing, or diagnostic lobectomy</td></tr><tr><td><b>IV</b></td><td>Follicular neoplasm</td><td>23-34</td><td>Molecular testing or diagnostic lobectomy</td></tr><tr><td><b>V</b></td><td>Suspicious for malignancy</td><td>67-83</td><td>Lobectomy or total thyroidectomy</td></tr><tr><td><b>VI</b></td><td>Malignant</td><td>97-100</td><td>Lobectomy or total thyroidectomy</td></tr></tbody></table></div><figure class='note-fig' data-credit=\"The Bethesda System for Reporting Thyroid Cytopathology. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/65_bethesda_fna_algorithm_gemini.png' alt='Bethesda system for thyroid cytopathology' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The Bethesda system for reporting thyroid cytopathology.</figcaption></figure>" },
    { id:"parotid-rule-80s-card", tags: ["HN", "clinical"], milestones:["PC3","MK3"], ukmla:"Facial/periorbital swelling", source:"Standard head & neck oncology teaching: 'rule of 80s' for parotid tumors.", front:"What is the 'rule of 80s' for parotid tumors, and what is the most common malignant one?",
      back:"~<strong>80%</strong> of parotid tumors are <strong>benign</strong>, and ~<strong>80%</strong> of those benign tumors are <strong>pleomorphic adenoma</strong> (the most common salivary neoplasm overall). The most common <em>malignant</em> parotid tumor is <strong>mucoepidermoid carcinoma</strong>.<figure class='note-fig' data-credit='Parotid region. RCSI (CC BY-NC-SA).'><img class='zoomable' src='assets/img/mc/image69.png' alt='Parotid region and facial nerve' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The parotid region: the facial nerve coursing through the gland among the vessels.</figcaption></figure>" },
    { id:"warthin-tumor-card", tags: ["HN", "clinical"], milestones:["PC3","MK3"], ukmla:"Facial/periorbital swelling", source:"Standard salivary gland oncology teaching.", front:"What is distinctive about Warthin tumor compared with other benign parotid tumors?",
      back:"The <strong>second most common benign parotid tumor</strong>; classically an <strong>elderly male smoker</strong>. Unique among salivary tumors for being <strong>bilateral or multifocal in up to ~10%</strong> of cases, a helpful clue when a parotid mass turns out to be symmetric or multiple." },
    { id:"adenoid-cystic-carcinoma-card", tags: ["HN", "clinical"], milestones:["PC3","MK3"], redFlag:true, ukmla:"Neck lump", source:"Standard salivary gland oncology teaching.", front:"The hallmark feature of adenoid cystic carcinoma, which most often arises in the minor salivary glands such as the palate, is <span class=\"cloze-blank\">[...]</span>, causing pain or numbness out of proportion to the size of the mass.",
      back:"The hallmark feature of adenoid cystic carcinoma, which most often arises in the minor salivary glands such as the palate, is <mark class=\"cloze-answer\">perineural invasion</mark>, causing pain or numbness out of proportion to the size of the mass. Despite an indolent course, it has a tendency for late distant metastasis, often to the lung, even years after treatment." },
    { id:"sialadenitis-card", tags: ["HN", "clinical"], milestones:["PC3","MK3"], ukmla:"Neck lump", source:"Standard salivary gland infection teaching.", front:"Acute bacterial sialadenitis typically causes painful, tender, unilateral parotid swelling, while viral parotitis from mumps is typically <span class=\"cloze-blank\">[...]</span>.",
      back:"Acute bacterial sialadenitis typically causes painful, tender, unilateral parotid swelling, while viral parotitis from mumps is typically <mark class=\"cloze-answer\">bilateral</mark>. <em>Staph. aureus</em> is the classic organism behind bacterial sialadenitis, treated with hydration, duct massage, and antibiotics." },
    { id:"facial-weakness-parotid-card", tags: ["HN", "clinical"], milestones:["PC3"], redFlag:true, ukmla:"Facial/periorbital swelling", source:"Standard head & neck oncology teaching.", front:"Why is facial nerve weakness with a parotid mass so significant?",
      back:"Benign parotid tumors essentially <strong>never</strong> cause facial weakness. A mass with new facial nerve involvement is a red flag for <strong>malignancy</strong> until proven otherwise, and changes both workup urgency and surgical counseling." },
    { id:"salivary-swelling-pattern-card", tags: ["HN", "clinical"], milestones:["PC3"], ukmla:"Neck lump", source:"Standard salivary gland teaching.", front:"How do you distinguish a stone from a tumor in a salivary gland swelling?",
      back:"<strong>Stone (sialolithiasis):</strong> swelling and pain that come with <strong>meals</strong> (salivary stimulation against an obstructed duct), most common in the submandibular gland. <strong>Tumor:</strong> a persistent, non-meal-related, often painless mass. Evaluate with imaging/FNA rather than assuming a stone." },
    { id:"hypopharyngeal-subsites-card", tags: ["HN", "anatomy"], milestones:["PC3","MK1"], redFlag:true, ukmla:["Neck lump","Swallowing problems"], source:"NCCN Head and Neck Cancers Guideline: hypopharyngeal subsites; standard oncology teaching.", front:"The most common subsite for hypopharyngeal cancer is the <span class=\"cloze-blank\">[...]</span>; because the hypopharynx is roomy with few early symptoms, patients often present late with locally advanced disease and a worse prognosis than most other head and neck subsites.",
      back:"The most common subsite for hypopharyngeal cancer is the <mark class=\"cloze-answer\">pyriform sinus</mark>; because the hypopharynx is roomy with few early symptoms, patients often present late with locally advanced disease and a worse prognosis than most other head and neck subsites." },
    { id:"neck-dissection-classification-card", tags: ["HN", "clinical"], milestones:["PC3","MK1"], scope:"sub-I", ukmla:"Neck lump", source:"Standard head & neck surgical oncology teaching.", front:"The neck dissection that removes only the lymph node level(s) at highest risk for the primary tumor, while preserving the SCM, internal jugular vein, and spinal accessory nerve, is called a <span class=\"cloze-blank\">[...]</span>.",
      back:"The neck dissection that removes only the lymph node level(s) at highest risk for the primary tumor, while preserving the SCM, internal jugular vein, and spinal accessory nerve, is called a <mark class=\"cloze-answer\">selective neck dissection</mark>. It's now standard for many clinically node-negative (cN0) necks, unlike a radical dissection, which sacrifices all three of those structures." },
    { id:"virchows-node-card", tags: ["HN", "clinical"], milestones:["PC3"], redFlag:true, ukmla:"Neck lump", source:"Standard oncology teaching on Virchow's node/Troisier's sign.", front:"What does a left supraclavicular node (Virchow's node) suggest?",
      back:"A primary malignancy <strong>below the diaphragm</strong> (gastric, pancreatic, other abdominal/pelvic) that has spread via the thoracic duct, in addition to thoracic and head & neck primaries. Broaden imaging beyond the aerodigestive tract when the head & neck exam is unremarkable." },
    { id:"leukoplakia-erythroplakia-card", tags: ["HN", "clinical"], milestones:["PC3"], redFlag:true, ukmla:"Neck lump", source:"Standard oral oncology teaching on premalignant lesions.", front:"Contrast leukoplakia and erythroplakia, and state the required next step for either.",
      back:"<strong>Leukoplakia:</strong> a white patch that can't be wiped off/attributed to another cause, premalignant. <strong>Erythroplakia:</strong> a red patch, less common but a <strong>substantially higher</strong> rate of dysplasia/carcinoma on biopsy. Either finding, especially in a smoker, requires <strong>biopsy</strong>, not observation." },
    { id:"tnm-staging-card", tags: ["HN", "clinical"], milestones:["PC3"], scope:"sub-I", ukmla:"Neck lump", source:"NCCN Head and Neck Cancers Guideline; AJCC TNM staging.", front:"What does TNM staging capture, and why does it matter to a student?",
      back:"<strong>T</strong> (primary tumor size/local invasion), <strong>N</strong> (regional nodal spread), <strong>M</strong> (distant metastasis). Together they drive the treatment pathway (surgery vs chemoradiation vs combined). Knowing the framework lets you understand why two patients with 'the same cancer' get very different treatment plans." },
    { id:"mdt-tumor-board-card", tags: ["HN", "clinical"], milestones:["SBP2","PC3"], ukmla:"Neck lump", source:"NCCN Head and Neck Cancers Guideline: multidisciplinary care standard.", front:"What is a multidisciplinary tumor board, and why is it standard of care?",
      back:"A structured case review with <strong>surgery, radiation oncology, medical oncology, pathology, and radiology</strong> together, before treatment starts. It ensures staging and treatment planning reflect every specialty's input rather than one surgeon's view alone." },
    { id:"dental-clearance-osteoradionecrosis-card", tags: ["HN", "clinical"], milestones:["SBP2","PC3"], ukmla:"Neck lump", source:"NCCN Head and Neck Cancers Guideline: pre-treatment dental evaluation.", front:"Because radiation permanently impairs jaw bone vascularity, extracting teeth from an already-irradiated mandible carries a real risk of <span class=\"cloze-blank\">[...]</span>, so high-risk teeth are cleared before radiotherapy begins.",
      back:"Because radiation permanently impairs jaw bone vascularity, extracting teeth from an already-irradiated mandible carries a real risk of <mark class=\"cloze-answer\">osteoradionecrosis</mark>, so high-risk teeth are cleared before radiotherapy begins. This non-healing exposed bone is difficult to treat once it occurs." },
    { id:"plummer-vinson-card", tags: ["HN", "clinical"], milestones:["PC3","MK3"], ukmla:["Neck lump","Swallowing problems"], source:"Standard oncology teaching on Plummer-Vinson (Paterson-Kelly) syndrome.", front:"Plummer-Vinson (Paterson-Kelly) syndrome, the triad of iron-deficiency anemia, an esophageal web, and dysphagia in a middle-aged woman, is a classic predisposing condition for <span class=\"cloze-blank\">[...]</span> carcinoma.",
      back:"Plummer-Vinson (Paterson-Kelly) syndrome, the triad of iron-deficiency anemia, an esophageal web, and dysphagia in a middle-aged woman, is a classic predisposing condition for <mark class=\"cloze-answer\">postcricoid</mark> carcinoma. Correcting the anemia and dilating the web don't substitute for excluding malignancy." },
    { id:"free-flap-basics-card", tags: ["HN", "clinical"], milestones:["PC3","PC8"], scope:"sub-I", ukmla:"Neck lump", source:"Standard head & neck reconstructive surgery teaching.", front:"A free flap is tissue transferred from elsewhere on the body with its own blood supply, then <span class=\"cloze-blank\">[...]</span> at the defect site.",
      back:"A free flap is tissue transferred from elsewhere on the body with its own blood supply, then <mark class=\"cloze-answer\">microvascularly reconnected</mark> at the defect site. It's used to reconstruct large defects after resection of oral cavity, oropharyngeal, or mandibular tumors when local tissue can't close the gap." },
    { id:"surveillance-card", tags: ["HN", "clinical"], milestones:["PC3","SBP2"], ukmla:"Neck lump", source:"NCCN Head and Neck Cancers Guideline: surveillance schedule.", front:"Why does head & neck cancer surveillance continue for years after treatment?",
      back:"Risk of <strong>local/regional recurrence</strong> is highest in the first 2 years, but field cancerization (especially in tobacco/alcohol-driven disease) also raises the risk of a <strong>second primary</strong> tumor. Surveillance combines exam, endoscopy, and imaging on a schedule that tapers but continues for years." }
  ]
});

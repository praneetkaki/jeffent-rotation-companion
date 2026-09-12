/* emergencies.js, EMERGENCIES & RED FLAGS (subspecialty track)
 *
 * A cross-cutting, high-yield synthesis of true ENT emergencies, the
 * time-critical presentations that appear across every other track,
 * gathered here for rapid recall/triage practice. Every card/case carries a
 * UKMLA scope tag (content/ukmla.js), an ACGME Milestone tag
 * (content/frameworks.js), and a named source. Content written to US
 * practice standards; UK/US differences flagged.
 *
 * STATUS: DRAFT, pending JeffENT faculty review. See docs/MODULE-BUILD-STANDARD.md.
 */
window.JEFFENT.register({
  id: "emergencies-red-flags",
  track: "emergencies",
  trackName: "Emergencies & Red Flags",
  trackAbbr: "EM",
  order: 8,
  title: "Emergencies & Red Flags",
  subtitle: "The true time-critical ENT presentations, gathered across every subspecialty into one rapid-triage synthesis.",
  version: "0.4.0-draft",
  level: ["core", "sub-I"],
  status: "DRAFT, pending faculty review. v0.2.0: added a depth pass on four genuinely uncovered airway/emergency algorithms, angioedema differential and management (allergic/mast-cell-mediated vs ACE-inhibitor bradykinin-mediated vs hereditary C1-inhibitor deficiency, since 'give epinephrine' doesn't work for two of the three), penetrating neck trauma (zones I-III and the hard-signs-vs-stable-workup decision), inhalational/thermal airway injury (why it gets intubated early, before it looks like it needs it), and a deeper caustic-ingestion algorithm (alkali vs acid injury pattern, endoscopic grading, stricture risk), grounded in WAO hereditary angioedema guidance, ATLS/trauma teaching, and standard emergency otolaryngology teaching; written fresh from guidelines and standard teaching, not derived from any single textbook. v0.3.0: added 5 red-flag teaching cases identified by a coverage audit (Ludwig's angina, orbital compartment syndrome, PTA/RPA/epiglottitis differential, caustic ingestion, hereditary angioedema).",
  facultyReviewer: "",
  curriculumAnchors: [
    "UKMLA Content Map (GMC), scope anchor; synthesizes the emergency/red-flag rows already owned by Foundations and every subspecialty track at rapid-triage depth",
    "ACGME Otolaryngology-HNS Milestones 2.0, primarily PC1 (emergency recognition/management)",
    "ATLS principles; standard US emergency otolaryngology teaching",
    "UK undergraduate Delphi (Lloyd 2014), student-scope depth cap"
  ],
  frameworkAlignment: {
    competenciesCovered: ["PC", "SBP"],
    note: "This track is deliberately a synthesis, not a new content area, it re-frames red-flag items already anchored elsewhere (Foundations, Otology, Rhinology, Laryngology, Head & Neck, Pediatric, Sleep, Facial Plastics) as a single rapid-recognition/triage deck for on-call and shelf-exam preparation."
  },

  /* ==================== ANATOMY TAB ==================== */
  anatomy: {
    notes: [
      {
        title: "Airway triage: look, listen, act",
        html: "<figure class='note-fig' data-credit=\"The larynx. OpenStax Anatomy and Physiology, Fig. 23.6, CC BY 4.0.\"><img class='zoomable' src='assets/1024px-2306_The_Larynx.jpg' alt='The larynx' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: Cricothyroid membrane surface anatomy for the emergency surgical airway.</figcaption></figure><ul><li>The airway question comes first, before any differential: <strong>is it patent, at risk, or failing right now?</strong></li><li><strong>Signs of impending obstruction</strong>: stridor, drooling or inability to handle secretions, tripod positioning, agitation or lethargy from hypoxia, voice change.</li><li>Securing or protecting the airway (positioning, urgent ENT/anesthesia, sometimes a surgical airway) always comes before definitive diagnosis.</li></ul><figure class='note-fig' data-credit=\"Airway Triage: Signs of Impending Obstruction (Look, Listen, Act). Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/85_airway_triage_signs_obstruction_wikimedia.png' alt='Airway triage signs' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Airway triage: signs of impending obstruction.</figcaption></figure>"
      },
      {
        title: "The 'danger triangle' of deep-space infection",
        html: "<figure class='note-fig' data-credit=\"Deep cervical fascia and spaces. Wikimedia Commons, CC BY-SA 4.0.\"><img class='zoomable' src='assets/1024px-Deep_cervical_fascia.svg.png' alt='Deep cervical fascia' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: Pretracheal, retrovisceral, and danger space extending to the posterior mediastinum.</figcaption></figure><ul><li>Neck and facial infections track along fascial planes into spaces next to the airway, great vessels, and mediastinum.</li><li>The deep neck spaces <strong>communicate</strong> (peritonsillar, parapharyngeal, retropharyngeal, mediastinum).</li><li>This is why a localized infection (quinsy, dental abscess) can escalate to airway compromise, carotid sheath involvement, or descending mediastinitis if not treated promptly.</li></ul><figure class='note-fig' data-credit=\"Deep Neck Space Communications and Mediastinal Spread Pathways. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/57_tracheostomy_tube_types_wikimedia.png' alt='Deep neck space communications' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Deep neck space communications and mediastinal spread pathways.</figcaption></figure>"
      },
      {
        title: "Why ENT emergencies escalate fast",
        html: "<figure class='note-fig' data-credit=\"Head and neck (sagittal). NCI SEER via Wikimedia Commons. Public domain.\"><img class='zoomable' src='assets/1024px-Illu01_head_neck.jpg' alt='Head and neck overview' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: Airway bottlenecks and rich vascular and fascial connections.</figcaption></figure><p>Several anatomic facts recur across ENT emergencies:</p><ul>" +
          "<li>Airway lumens are small, so a little swelling causes a lot of obstruction (more so in children; see Pediatric ENT).</li>" +
          "<li>The head and neck have rich vascular and lymphatic connections to the orbit and intracranial space (sinusitis → orbital/intracranial complications; otitis media → intracranial complications).</li>" +
          "<li>Cartilage (septum, auricle, larynx) depends on adjacent perichondrium/perichondrium-equivalent for blood supply, so untreated hematoma or infection causes necrosis within days, not weeks.</li></ul>"
      },
      {
        title: "Zones of the neck",
        html: "<p>For <strong>penetrating neck trauma</strong>, the neck is divided into three horizontal zones, not because the anatomy changes character at each boundary, but because <strong>surgical accessibility</strong> does, and that access drives the initial management algorithm (see Clinical tab):</p><ul>" +
          "<li><strong>Zone I</strong>: cricoid cartilage to the thoracic outlet/clavicles. Contains the great vessel origins (proximal carotids, subclavian vessels), trachea, esophagus, thoracic duct, apex of the lung. <strong>Least accessible</strong> surgically: injuries here may need a sternotomy/thoracotomy approach.</li>" +
          "<li><strong>Zone II</strong>: cricoid cartilage to the angle of the mandible. Contains the carotid arteries, jugular veins, larynx, trachea, esophagus, vagus and recurrent laryngeal nerves. The <strong>largest zone and the most surgically accessible</strong>, and most penetrating neck injuries occur here.</li>" +
          "<li><strong>Zone III</strong>: angle of the mandible to the skull base. Contains the distal carotid/vertebral arteries, distal jugular veins, and lower cranial nerves. Also <strong>poorly accessible</strong>: proximal vascular control is difficult, and injuries here may need interventional radiology (endovascular) rather than open exploration.</li></ul>" +
          "<p>The practical point: a Zone II injury is easy to get into and control operatively, so a Zone II patient with hard signs typically goes straight to the OR; Zone I and III injuries are harder to control surgically, so even some hard-sign patients there are worked up with imaging (CT angiography) first to plan the approach, when they are stable enough to allow it.</p>"
      }
    ],
    diagrams: [
      {
        kind: "image",
        occlude: true,
        id: "deep-neck-space-spread",
        title: "Deep neck space spread",
        note: "How infection tracks from a localized source toward the mediastinum. Name each space, then reveal.",
        src: "assets/img/mc/57_tracheostomy_tube_types_wikimedia.png",
        source: "Deep Neck Space Communications and Mediastinal Spread Pathways. Wikimedia Commons.",
        labels: [
          { id:"peritonsillar", text:"Peritonsillar space (quinsy origin)", box:{x:38.0,y:12.2,w:24.0,h:9.0} },
          { id:"parapharyngeal", text:"Parapharyngeal space", box:{x:38.0,y:39.9,w:24.0,h:9.0} },
          { id:"retropharyngeal", text:"Retropharyngeal space: direct route toward mediastinum", box:{x:38.0,y:64.9,w:24.0,h:9.0} },
          { id:"mediastinum", text:"Mediastinum: descending necrotizing mediastinitis if unchecked", box:{x:38.0,y:84.4,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "svg",
        id: "neck-trauma-zones",
        title: "Zones I, II, and III of the neck in penetrating trauma",
        note: "Schematic side profile, not to scale. Click a zone or boundary to reveal what defines it.",
        viewBox: "0 0 260 360",
        base: '<rect x="90" y="20" width="80" height="320" rx="20" fill="none" stroke="var(--line)" stroke-width="2"></rect>'
          + '<rect x="90" y="20" width="80" height="90" rx="20" fill="var(--surface-2)" stroke="var(--flag)" stroke-width="1.5" opacity="0.5"></rect>'
          + '<rect x="90" y="110" width="80" height="110" fill="var(--surface-2)" stroke="var(--primary)" stroke-width="1.5" opacity="0.35"></rect>'
          + '<rect x="90" y="220" width="80" height="120" rx="20" fill="var(--surface-2)" stroke="var(--accent)" stroke-width="1.5" opacity="0.5"></rect>'
          + '<line x1="70" y1="110" x2="190" y2="110" stroke="var(--ink-faint)" stroke-width="1.5" stroke-dasharray="4 3"></line>'
          + '<line x1="70" y1="220" x2="190" y2="220" stroke="var(--ink-faint)" stroke-width="1.5" stroke-dasharray="4 3"></line>'
          + '<line x1="70" y1="340" x2="190" y2="340" stroke="var(--line)" stroke-width="1.5"></line>',
        labels: [
          { id:"zone-iii", text:"Zone III: angle of mandible to skull base. Poor surgical access, may need an endovascular approach.", px:130, py:65, lx:30, ly:40 },
          { id:"skull-base", text:"Skull base, the superior limit of Zone III", px:130, py:20, lx:230, ly:25 },
          { id:"angle-mandible-boundary", text:"Angle of mandible: the boundary between Zone II and Zone III", px:130, py:110, lx:230, ly:110 },
          { id:"zone-ii", text:"Zone II: cricoid to angle of mandible. Largest and most surgically accessible zone; most penetrating injuries occur here.", px:130, py:165, lx:30, ly:165 },
          { id:"cricoid-boundary", text:"Cricoid cartilage: the boundary between Zone I and Zone II", px:130, py:220, lx:230, ly:230 },
          { id:"zone-i", text:"Zone I: cricoid to the clavicles/thoracic outlet. Least accessible, may need a sternotomy or thoracotomy approach.", px:130, py:280, lx:30, ly:300 },
          { id:"clavicles", text:"Clavicles / thoracic outlet, the inferior limit of Zone I", px:130, py:340, lx:230, ly:345 }
        ]
      }
    ]
  },

  /* ==================== CLINICAL TAB ==================== */
  clinical: {
    blocks: [
      {
        id: "emergency-triage-table",
        title: "The ENT emergency quick-reference",
        html: "<p>A rapid-recall table of the classic time-critical presentations across every track. Full teaching for each lives in its home track; this is the triage-speed summary.</p>",
        table: {
          head: ["Presentation", "Think", "Immediate action"],
          rows: [
            ["Stridor + drooling + tripod position (child)", "Epiglottitis", "Do NOT examine the throat/lay the child down; keep calm, urgent airway team + ENT"],
            ["Cyclical cyanosis relieved by crying (newborn)", "Bilateral choanal atresia", "Oral airway/McGovern nipple; urgent ENT"],
            ["Trismus + muffled 'hot potato' voice + uvula deviation", "Peritonsillar abscess (quinsy)", "Urgent drainage; airway assessment first"],
            ["Torticollis + neck pain + fever + odynophagia (child)", "Retropharyngeal abscess", "Urgent contrast CT neck, ENT"],
            ["Periorbital swelling + proptosis + painful eye movement", "Orbital cellulitis (sinusitis complication)", "Urgent CT, IV antibiotics, ENT/ophthalmology"],
            ["Diabetic/immunocompromised + black nasal eschar + facial pain", "Acute invasive fungal sinusitis (mucormycosis)", "Emergent biopsy/debridement; do not delay for imaging"],
            ["Facial swelling + fever + toxic-appearing + odontogenic source", "Ludwig's angina / floor-of-mouth abscess", "Urgent airway assessment; can obstruct rapidly"],
            ["Sudden unilateral hearing loss (within 72h)", "Sudden sensorineural hearing loss (SSNHL)", "Urgent audiogram + steroids; treatment window is time-sensitive"],
            ["Post-tonsillectomy bleeding", "Post-tonsillectomy hemorrhage", "Airway + hemodynamic assessment, urgent ENT; even 'minor' bleeds need evaluation"],
            ["Button battery in ear/nose", "Time-critical foreign body", "Urgent removal; liquefactive necrosis within hours"],
            ["Expanding neck hematoma / stridor after neck surgery", "Post-thyroidectomy/neck-surgery hematoma", "Open the wound at bedside if airway threatened; do not wait for OR"],
            ["Proptosis + decreasing vision after orbital trauma", "Orbital compartment syndrome", "Emergent lateral canthotomy/cantholysis at the bedside"]
          ]
        }
      },
      {
        id: "epiglottitis-quinsy-differential",
        title: "Epiglottitis vs peritonsillar abscess vs retropharyngeal abscess",
        html: "<p>All three can present with sore throat, drooling, and voice change, but the differentiating features matter.</p>",
        table: {
          head: ["", "Epiglottitis", "Peritonsillar abscess", "Retropharyngeal abscess"],
          rows: [
            ["Typical age", "Any age (historically kids pre-Hib vaccine; now often adults)", "Adolescents/adults", "Young children (<6yr)"],
            ["Voice", "Muffled 'hot potato'", "Muffled 'hot potato', trismus", "Muffled, may refuse to move neck"],
            ["Key exam clue", "Tripod position, drooling; avoid oropharyngeal exam/tongue depressor", "Uvula deviation, tonsillar bulge, trismus", "Torticollis, neck stiffness, bulge on lateral pharyngeal wall"],
            ["Imaging/diagnosis", "Clinical + flexible laryngoscopy by ENT/anesthesia in a controlled setting", "Clinical ± intraoral ultrasound", "Contrast CT neck"]
          ]
        }
      },
      {
        id: "when-not-to-examine",
        title: "When NOT to examine the throat",
        html: "<p>In <strong>suspected epiglottitis</strong> (especially in a child with drooling/tripod positioning), <strong>do not use a tongue depressor or attempt to visualize the oropharynx</strong> outside a controlled setting with airway backup immediately available: manipulation can precipitate complete airway obstruction. Keep the child calm, ideally in a parent's lap, and get anesthesia/ENT to secure the airway in the OR.</p>"
      },
      {
        id: "angioedema-three-diseases",
        title: "Angioedema: three diseases wearing the same face, and 'give epinephrine' only works for one",
        html: "<p>Sudden lip/tongue/airway swelling <strong>without urticaria or itch</strong> should immediately raise a question the reflex answer to facial swelling doesn't cover: <strong>is this histamine-mediated at all?</strong> Two of the three major causes of angioedema are <strong>bradykinin-mediated</strong>, not mast-cell/histamine-mediated, and bradykinin-mediated swelling does <strong>not</strong> reliably respond to epinephrine, antihistamines, or steroids, the standard anaphylaxis triad.</p>",
        table: {
          head: ["", "Allergic / mast-cell-mediated", "ACE-inhibitor-induced", "Hereditary angioedema (HAE)"],
          rows: [
            ["Mechanism", "IgE/mast-cell degranulation → histamine", "<strong>Bradykinin</strong> accumulation (ACE normally degrades bradykinin)", "<strong>C1-esterase-inhibitor deficiency/dysfunction</strong> → uncontrolled bradykinin generation"],
            ["Clues", "Urticaria, itch, rapid onset (minutes), a trigger (food/drug/sting), may have wheeze/hypotension", "Any time after starting an ACE inhibitor (even years later); no urticaria/itch; face/lips/tongue, sometimes bowel wall (abdominal pain)", "Recurrent attacks since childhood/adolescence; <strong>family history</strong>; no urticaria/itch; may include painful abdominal attacks (bowel-wall edema mimicking a surgical abdomen)"],
            ["Responds to epinephrine/antihistamines/steroids?", "<strong>Yes</strong>, first-line", "<strong>No</strong>, reliably: supportive care + stop the drug is the actual treatment", "<strong>No</strong>: needs specific bradykinin-pathway therapy, not standard anaphylaxis treatment"],
            ["Actual management", "IM epinephrine, antihistamines, steroids per anaphylaxis protocol", "<strong>Stop the ACE inhibitor</strong> (and avoid ARBs cautiously; cross-reactivity is low but reported); secure the airway if threatened; icatibant/C1-INH concentrate have been used off-label with inconsistent trial evidence", "<strong>C1-inhibitor concentrate, icatibant (bradykinin B2-receptor antagonist), or ecallantide (kallikrein inhibitor)</strong>, not epinephrine/antihistamines as primary treatment"]
          ]
        }
      },
      {
        id: "penetrating-neck-trauma-management",
        title: "Penetrating neck trauma: hard signs mandate the OR; soft signs/stable get worked up",
        html: "<p>The first question after ATLS primary survey (airway/breathing/circulation) is not \"what zone\" but \"<strong>hard signs or not</strong>\": hard signs mandate immediate operative exploration regardless of zone; their absence in a stable patient allows CT angiography to guide a more selective approach. See the Anatomy tab for how the zone (I/II/III) then shapes <em>which</em> surgical approach is used.</p>",
        table: {
          head: ["", "Hard signs", "Soft signs"],
          rows: [
            ["Vascular", "Pulsatile/expanding hematoma, active pulsatile bleeding, absent distal pulse, bruit/thrill over the wound", "Non-expanding/stable hematoma, history of moderate bleeding at the scene, proximity to major vessels without other findings"],
            ["Aerodigestive", "Air bubbling through the wound, massive subcutaneous emphysema, stridor/respiratory distress from the injury itself", "Hoarseness, dysphagia/odynophagia, hemoptysis, minor subcutaneous emphysema"],
            ["Neurologic", "New focal neurologic deficit referable to the injury (e.g. hemiparesis suggesting carotid injury)", "N/A"],
            ["Action", "<strong>Immediate operative exploration</strong>: do not delay for imaging", "<strong>CT angiography of the neck</strong> in a stable patient to characterize injury and plan management (observation vs. selective exploration vs. endovascular)"]
          ]
        }
      },
      {
        id: "inhalational-thermal-airway-injury",
        title: "Inhalational/thermal airway injury: the airway that looks fine now, and won't in an hour",
        html: "<p>Facial/oropharyngeal burns from flame, steam, or hot gas cause <strong>progressive</strong> supraglottic and glottic edema over hours. The exam at minute one can look deceptively reassuring while the swelling that will obstruct the airway is only just beginning. The management principle is <strong>early, elective intubation before the airway becomes difficult or impossible</strong>, rather than waiting for obvious distress.</p>" +
          "<p><strong>Signs raising concern for inhalational injury (any one is enough to trigger urgent airway evaluation):</strong></p><ul>" +
          "<li>Facial or oropharyngeal burns, <strong>singed nasal/facial hair</strong></li>" +
          "<li><strong>Carbonaceous sputum</strong> or soot in the oropharynx</li>" +
          "<li>New <strong>hoarseness</strong> or stridor</li>" +
          "<li>History of a closed-space fire, decreased level of consciousness at the scene, or a fire involving synthetic/chemical materials (higher risk of toxic inhalation/chemical burn on top of thermal injury)</li></ul>" +
          "<p>The management logic mirrors the airway-first principle above, with one twist: here, the decision to intubate is made <strong>before</strong> stridor/drooling/tripod positioning appear, because once those late signs are present in a burn patient, the airway may already be too swollen and distorted for a straightforward intubation. <em>This is a case where the emergency intervention deliberately gets ahead of the exam findings.</em></p>"
      },
      {
        id: "caustic-ingestion-deep",
        title: "Caustic ingestion, deeper: alkali vs acid injury, endoscopic grading, and stricture risk",
        html: "<p>Beyond the immediate \"don't induce vomiting, don't neutralize\" rule, the type of caustic agent shapes what happens next:</p>",
        table: {
          head: ["", "Alkali (e.g. drain cleaner, lye)", "Acid (e.g. toilet-bowl cleaner, battery acid)"],
          rows: [
            ["Injury pattern", "<strong>Liquefactive necrosis</strong>: penetrates deeply through tissue layers, often painless enough on contact that more is swallowed before symptoms stop it", "<strong>Coagulative necrosis</strong>: forms a surface eschar that can (imperfectly) limit further penetration, but still causes significant injury, especially to the stomach"],
            ["Typical worst injury site", "Esophagus (deep, circumferential injury → high stricture risk)", "Stomach (acid passes through the esophagus quickly but pools and injures the antrum), though esophageal injury still occurs and is not to be assumed absent"]
          ]
        }
      },
      {
        id: "caustic-ingestion-endoscopy-grading",
        title: "Caustic ingestion: endoscopic grading and stricture risk",
        html: "<p>Once the airway and hemodynamic status are stable, <strong>upper endoscopy</strong> (typically within 12-24 hours of ingestion) grades the depth of injury and guides disposition. This is done carefully, since the injured wall is at its most friable and perforation risk is highest in the first days. A widely used framework grades injury from <strong>I</strong> (mucosal edema/erythema only) through <strong>IIa/IIb</strong> (superficial vs deep/circumferential ulceration) to <strong>III</strong> (transmural necrosis); higher grades carry a substantially higher risk of <strong>esophageal stricture</strong> developing over the following weeks to months, and grade III injury carries a real risk of <strong>perforation</strong> and mediastinitis. Patients with higher-grade injuries need close follow-up for dysphagia (the presenting symptom of a developing stricture) and may need serial <strong>esophageal dilation</strong>.</p>"
      }
    ],
    redFlags: [
      { t: "<b>Any airway red flag</b> (stridor, drooling, tripod position, agitation-then-lethargy): secure and protect the airway before pursuing a differential diagnosis." },
      { t: "<b>Suspected epiglottitis</b>: do not examine the throat outside a controlled airway setting." },
      { t: "<b>Post-tonsillectomy or post-neck-surgery bleeding</b>: always evaluated urgently, regardless of how 'minor' it appears." },
      { t: "<b>Button battery in the ear, nose, or (especially) esophagus</b>: an hours-scale emergency due to liquefactive necrosis." },
      { t: "<b>Orbital or intracranial complications of sinusitis/otitis media</b>: proptosis, painful eye movement, altered mental status, focal neurologic signs." },
      { t: "<b>Acute invasive fungal sinusitis in a diabetic/immunocompromised patient</b>: black eschar, facial pain/numbness; emergent biopsy and debridement." },
      { t: "<b>Sudden sensorineural hearing loss</b>: a time-sensitive window for steroid treatment; treat this as urgent, not routine." },
      { t: "<b>Ludwig's angina / rapidly expanding neck or floor-of-mouth infection</b>: can obstruct the airway quickly; urgent airway assessment." },
      { t: "<b>Facial/lip/tongue swelling without urticaria or itch</b>, especially on an ACE inhibitor or with a personal/family history of recurrent attacks, should raise bradykinin-mediated angioedema (ACE-inhibitor-induced or hereditary); it will not reliably respond to epinephrine, antihistamines, or steroids." },
      { t: "<b>Penetrating neck wound with a hard sign</b> (expanding/pulsatile hematoma, active pulsatile bleeding, absent distal pulse, air bubbling from the wound, or a new focal neurologic deficit): immediate operative exploration; do not wait for imaging." }
    ]
  },

  /* ==================== CASES TAB ==================== */
  cases: [
    {
      id: "case-epiglottitis-adult",
      ukmla: "Stridor",
      source: "Standard emergency otolaryngology teaching on adult epiglottitis.",
      stem: "An <b>adult</b> presents with rapid-onset severe sore throat, muffled voice, and drooling, but a <b>relatively unremarkable-looking oropharynx</b> on cursory inspection. He prefers to sit leaning forward.",
      prompts: [
        { q: "Why doesn't a normal-looking oropharynx rule this out, and what should you avoid doing?", a: "<strong>Epiglottitis</strong> involves the supraglottic structures, not the visible oropharynx/tonsils, so a normal oral exam doesn't exclude it. <strong>Avoid aggressive oropharyngeal manipulation</strong> or anything that could agitate the patient; adult epiglottitis is increasingly recognized (not just a pediatric disease) and remains airway-threatening." },
        { q: "What confirms the diagnosis safely, and who should be present?", a: "<strong>Flexible laryngoscopy</strong>, ideally performed by ENT with anesthesia/airway backup immediately available, given the risk of precipitating obstruction." }
      ],
      teaching: "Epiglottitis isn't only a pediatric, pre-vaccine-era diagnosis. A muffled voice and drooling with a deceptively normal-looking mouth should raise it in adults too, and management stays airway-first."
    },
    {
      id: "case-orbital-cellulitis-complication",
      ukmla: "Facial/periorbital swelling",
      source: "Standard rhinology/orbital complications teaching.",
      stem: "A child with several days of sinusitis symptoms develops <b>eyelid swelling, proptosis, and pain with eye movement</b>, plus a low-grade fever.",
      prompts: [
        { q: "What is the concern, and how would you distinguish it from simple preseptal cellulitis?", a: "<strong>Orbital (postseptal) cellulitis</strong>, a sinusitis complication. <strong>Proptosis, painful/restricted eye movement, and vision change</strong> distinguish it from preseptal (periorbital) cellulitis, which spares eye movement and vision." },
        { q: "What is the management, and what would make you escalate further?", a: "Urgent <strong>CT imaging</strong>, IV antibiotics, and ENT/ophthalmology involvement. <strong>Decreasing vision, a relative afferent pupillary defect, or altered mental status</strong> would raise concern for intracranial extension (subperiosteal/orbital abscess, cavernous sinus thrombosis) and prompt more urgent surgical drainage." }
      ],
      teaching: "Painful eye movement and proptosis turn 'sinusitis with eyelid swelling' into an orbital emergency. The eye exam, not just the sinus history, drives urgency here."
    },
    {
      id: "case-invasive-fungal-sinusitis",
      ukmla: "Facial pain",
      source: "Standard rhinology teaching on acute invasive fungal sinusitis.",
      stem: "A patient with <b>poorly controlled diabetes (in DKA)</b> presents with facial pain, nasal congestion, and a <b>black, necrotic-appearing area</b> on the nasal septum/palate, with facial numbness.",
      prompts: [
        { q: "What is the diagnosis until proven otherwise, and why is speed critical?", a: "<strong>Acute invasive fungal sinusitis (mucormycosis)</strong>, an angioinvasive infection that spreads rapidly through tissue planes in immunocompromised/hyperglycemic hosts, with high mortality if treatment is delayed even by hours to a day." },
        { q: "What is the immediate management?", a: "<strong>Emergent bedside biopsy for frozen section and surgical debridement</strong> of necrotic tissue plus IV antifungals and aggressive correction of the underlying metabolic derangement (DKA); do not wait for formal imaging or cultures to begin acting." }
      ],
      teaching: "Black eschar plus facial numbness in a hyperglycemic or immunocompromised patient is a same-hour surgical emergency, not a routine ENT consult."
    },
    {
      id: "case-post-thyroidectomy-hematoma",
      ukmla: "Neck lump",
      source: "Standard head & neck surgery teaching on post-thyroidectomy hematoma.",
      stem: "A few hours after thyroidectomy, a patient develops <b>rapidly expanding neck swelling, difficulty breathing, and stridor</b> at the bedside.",
      prompts: [
        { q: "What is happening, and what is the immediate bedside action, before imaging and before calling the OR?", a: "<strong>Expanding neck hematoma compressing the airway.</strong> The immediate action is to <strong>open the wound at the bedside</strong> (remove skin/strap muscle sutures/clips) to evacuate the hematoma and relieve pressure. This cannot wait for imaging or transport to the OR." },
        { q: "What happens after the bedside decompression?", a: "The patient still needs to go to the OR for definitive hemostasis and wound exploration, but the bedside opening buys critical time by relieving the airway-threatening pressure immediately." }
      ],
      teaching: "A post-thyroidectomy airway emergency is opened at the bedside, immediately. This is one of the few true 'don't wait for the OR' moments in otolaryngology."
    },
    {
      id: "case-ssnhl-window",
      ukmla: "Hearing loss",
      source: "AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019.",
      stem: "A patient reports <b>sudden hearing loss in one ear over the past 2 days</b>, with no preceding trauma, infection, or barotrauma history.",
      prompts: [
        { q: "Why is this treated with urgency rather than routine referral?", a: "<strong>Sudden sensorineural hearing loss (SSNHL)</strong> has a <strong>time-sensitive treatment window</strong>: oral or intratympanic corticosteroids are most effective when started early (ideally within 2 weeks, with better outcomes the sooner they're started). Delayed treatment reduces the chance of hearing recovery." },
        { q: "What must be done urgently to confirm the diagnosis and guide treatment?", a: "An <strong>urgent audiogram</strong> to confirm a sensorineural (not conductive) loss of a defined magnitude, and prompt initiation of steroids without waiting for a full subspecialty work-up to be completed first." }
      ],
      teaching: "Sudden hearing loss is one of the few 'benign-sounding' ENT complaints that is actually a treatment-window emergency. The delay itself is what causes permanent harm."
    },
    {
      id: "case-ace-inhibitor-angioedema",
      ukmla: "Allergies",
      source: "Standard emergency medicine/allergy teaching on ACE-inhibitor-induced angioedema; WAO (World Allergy Organization) hereditary/bradykinin-mediated angioedema guidance for the broader bradykinin-angioedema framework.",
      stem: "A patient on <b>lisinopril for 3 years</b> presents with <b>lip and tongue swelling</b> that developed over an hour, <b>no urticaria, no itch, no wheeze</b>. In the ED she was given IM epinephrine, IV diphenhydramine, and IV steroids, but the swelling has <b>not improved</b> after 45 minutes.",
      prompts: [
        { q: "Why hasn't the standard anaphylaxis treatment worked, and what does the absence of urticaria/itch tell you?", a: "This is very unlikely to be histamine-mediated. <strong>ACE-inhibitor-induced angioedema is bradykinin-mediated</strong>: ACE normally breaks down bradykinin, so inhibiting it lets bradykinin accumulate. Epinephrine, antihistamines, and steroids target histamine/mast-cell pathways and <strong>don't reliably work</strong> on bradykinin-driven swelling. It can occur at any point after starting the drug, even years later, which is a common point of confusion." },
        { q: "What is the actual management?", a: "<strong>Stop the ACE inhibitor immediately</strong> and do not restart it (avoid ARBs with caution too, though cross-reactivity is low). Secure/protect the airway if there's any threat: this can still progress to obstruct the airway even though it's not anaphylaxis. Specific bradykinin-pathway agents (icatibant, C1-inhibitor concentrate) have been tried off-label but trial evidence for ACE-inhibitor angioedema specifically is inconsistent, unlike their clear role in hereditary angioedema." }
      ],
      teaching: "Facial swelling that doesn't respond to epinephrine and antihistamines isn't 'refractory anaphylaxis'; it's a clue you're treating the wrong mechanism of angioedema. Ask about ACE inhibitors and family history before repeating the anaphylaxis protocol a third time."
    },
    {
      id: "case-penetrating-neck-zone2",
      ukmla: "Neck lump",
      source: "ATLS (Advanced Trauma Life Support) principles; standard trauma teaching on penetrating neck trauma zones and hard signs.",
      stem: "A patient arrives with a <b>stab wound to the mid-neck (Zone II)</b>. On exam there is a <b>rapidly expanding hematoma</b> and a <b>bruit</b> is audible over the wound. The patient is hemodynamically stable at this moment.",
      prompts: [
        { q: "Does 'hemodynamically stable right now' mean this can wait for a CT angiogram?", a: "No. An <strong>expanding hematoma and a bruit are hard signs</strong> of vascular injury. Hard signs mandate <strong>immediate operative exploration</strong> regardless of the patient's current hemodynamic stability, because that stability can be lost abruptly. Waiting for imaging in a hard-sign patient risks a sudden, catastrophic bleed or airway loss." },
        { q: "Why does the zone (II here) matter for how that exploration happens?", a: "<strong>Zone II</strong> (cricoid to the angle of the mandible) is the <strong>most surgically accessible</strong> zone: proximal and distal vascular control is straightforward compared to Zone I (needs a chest approach) or Zone III (needs skull-base access, sometimes endovascular). A Zone II hard-sign injury goes to the OR directly; the same hard signs in Zone I or III may still prompt urgent imaging first, purely because the surgical approach needs more planning." }
      ],
      teaching: "In penetrating neck trauma, hard signs override a reassuring vital-signs snapshot. 'Stable now' is not the same as 'safe to image first,' and the zone shapes the surgical plan, not whether hard signs get you to the OR."
    },
    {
      id: "case-ludwigs-angina",
      ukmla: "Sore throat",
      source: "Standard deep neck space infection teaching on Ludwig's angina; odontogenic infection management guidance.",
      stem: "A <b>45-year-old man</b> with poor dental hygiene and a known infected lower molar presents with 2 days of rapidly worsening <b>bilateral submandibular swelling</b> that is firm and 'woody' to palpation. His tongue is <b>elevated and pushed posteriorly</b>, his voice is muffled, and he is drooling and leaning forward.",
      prompts: [
        { q: "What is the diagnosis, and how does the exam differ from a typical drainable abscess?", a: "<strong>Ludwig's angina</strong>, a rapidly spreading, usually <strong>odontogenic</strong> cellulitis of the bilateral submandibular, sublingual, and submental spaces. Unlike a typical abscess, it is classically a <strong>diffuse, brawny/'woody' cellulitis without a discrete fluctuant pocket</strong>, and the hallmark is <strong>tongue elevation and posterior displacement</strong> from floor-of-mouth swelling." },
        { q: "What is the immediate priority, and why can standard airway maneuvers be difficult here?", a: "<strong>Airway assessment first.</strong> Floor-of-mouth swelling and tongue displacement can make <strong>bag-mask ventilation and direct laryngoscopy difficult or impossible</strong>, and sedation for a standard rapid-sequence approach risks losing the airway entirely if intubation fails. <strong>Awake fiberoptic intubation</strong>, with a surgical airway (cricothyroidotomy/tracheostomy) set up as backup, is the preferred controlled approach in a threatened airway." },
        { q: "What imaging and treatment follow once the airway is addressed?", a: "<strong>Contrast-enhanced CT of the neck</strong> to define the extent of spread and look for a drainable collection or gas, <strong>IV broad-spectrum antibiotics</strong> covering oral flora (streptococci and anaerobes), <strong>dental source control</strong>, and <strong>surgical drainage</strong> if a discrete abscess pocket is identified." },
        { q: "Why can this obstruct the airway before it ever 'points' like a typical abscess?", a: "Because it is primarily a <strong>diffuse fascial-space cellulitis</strong> rather than a walled-off collection, mechanical displacement of the tongue and floor of mouth can compromise the airway well before any fluctuant, drainable pus develops, so management does not wait for 'fluctuance' the way a peritonsillar abscess might." }
      ],
      teaching: "Ludwig's angina is a floor-of-mouth surgical-airway emergency, not just a bad dental abscess: bilateral woody submandibular swelling and posterior tongue displacement from an odontogenic source can obstruct the airway before any drainable collection even forms, so the default is early, controlled airway management (awake fiberoptic ± surgical airway standby) rather than watchful waiting."
    },
    {
      id: "case-orbital-compartment-syndrome",
      ukmla: "Facial/periorbital swelling",
      source: "Standard ophthalmic/facial trauma emergency teaching on orbital compartment syndrome and retrobulbar hemorrhage.",
      stem: "Two hours after blunt facial trauma, a <b>28-year-old man</b> develops rapidly worsening eye pain, <b>proptosis</b>, and <b>decreasing vision</b> in the affected eye. The globe feels <b>tense and firm</b> to palpation, extraocular movements are restricted, and intraocular pressure is markedly elevated.",
      prompts: [
        { q: "What is the diagnosis and the underlying mechanism threatening his vision?", a: "<strong>Orbital compartment syndrome from retrobulbar hemorrhage</strong>: bleeding within the closed bony orbit raises intraorbital pressure, compressing the optic nerve and its vascular supply. Vision can be permanently lost within roughly an hour or two of significant ischemia, making this a true minutes-to-hours emergency." },
        { q: "Which exam findings confirm this, and what does a relative afferent pupillary defect (RAPD) add?", a: "<strong>Proptosis, a tense/resistant-to-retropulsion globe, decreased vision, elevated intraocular pressure, and restricted eye movements</strong> support the diagnosis. A <strong>RAPD</strong> indicates the optic nerve itself is being functionally compromised, a marker that the threat to vision is real and immediate, not just cosmetic swelling." },
        { q: "What is the emergency treatment, and should you wait for a CT scan first?", a: "<strong>Emergent lateral canthotomy and inferior cantholysis</strong> performed at the bedside: releasing the lateral canthal tendon (and its inferior crus) immediately decompresses the orbit. <strong>Do not wait for CT imaging</strong> if vision is acutely threatened; adjuncts (IOP-lowering agents such as acetazolamide or mannitol, head-of-bed elevation) support but do not replace surgical decompression." },
        { q: "Besides blunt trauma, what other common ENT-relevant setting causes this?", a: "<strong>Postoperative retrobulbar hemorrhage after functional endoscopic sinus surgery (FESS)</strong>, an uncommon but recognized complication that requires the identical emergent bedside canthotomy/cantholysis response." }
      ],
      teaching: "Rising pressure from retrobulbar hemorrhage threatens the optic nerve on a minutes-to-hours clock. Proptosis, a tense globe, and decreasing vision (especially with a RAPD) call for bedside lateral canthotomy and cantholysis immediately, without waiting for imaging, whether the cause is blunt trauma or a sinus-surgery complication."
    },
    {
      id: "case-deep-neck-space-differential",
      ukmla: ["Sore throat", "Epiglottitis"],
      source: "Standard emergency otolaryngology differential teaching on deep neck space infections and epiglottitis.",
      stem: "Three patients present overnight with sore throat and difficulty swallowing. <b>Patient A</b> is 22 years old with trismus and a muffled 'hot potato' voice. <b>Patient B</b> is a 4-year-old with fever, torticollis, and refusal to move his neck. <b>Patient C</b> is a 6-year-old with rapid-onset drooling, a soft inspiratory stridor, and a tripod posture.",
      prompts: [
        { q: "Match each patient to the most likely diagnosis and the single exam clue that clinches it.", a: "<strong>Patient A, peritonsillar abscess (quinsy):</strong> trismus with a muffled voice, classically with uvular deviation and a tonsillar bulge. <strong>Patient B, retropharyngeal abscess:</strong> torticollis and refusal to move/extend the neck in a young child. <strong>Patient C, epiglottitis:</strong> rapid onset, tripod positioning, drooling, and stridor, a 'look, don't touch' presentation." },
        { q: "Which of the three should NOT have their oropharynx examined with a tongue depressor outside a controlled airway setting, and why?", a: "<strong>Patient C (epiglottitis).</strong> The pathology is supraglottic, and manipulating the airway can precipitate <strong>complete obstruction</strong>. The other two can generally be examined with reasonable care, since their pathology is not primarily supraglottic." },
        { q: "What confirms the diagnosis in each case?", a: "<strong>PTA:</strong> largely clinical, sometimes with intraoral ultrasound to confirm fluctuance before aspiration. <strong>RPA:</strong> <strong>contrast-enhanced CT of the neck</strong> to define the collection and its relationship to the great vessels/mediastinum before drainage. <strong>Epiglottitis:</strong> clinical suspicion confirmed by <strong>flexible laryngoscopy</strong>, performed by ENT/anesthesia with airway backup immediately available, not by CT or throat swabs in an unstable patient." },
        { q: "What is the definitive management for each, and what do all three share as the very first step?", a: "<strong>PTA:</strong> needle aspiration or incision and drainage plus antibiotics, often outpatient afterward. <strong>RPA:</strong> IV antibiotics ± surgical (usually transoral) drainage if a discrete collection is present or the patient fails to improve. <strong>Epiglottitis:</strong> a secured airway (often awake fiberoptic intubation in a controlled OR) plus IV antibiotics; drainage doesn't apply, since it isn't an abscess. All three share the same first step regardless of which it turns out to be: <strong>airway assessment before anything else</strong>, since the deep neck spaces communicate and any one of these can progress toward airway compromise if untreated." }
      ],
      teaching: "'Sore throat that won't swallow' bundles three different emergencies (peritonsillar abscess, retropharyngeal abscess, and epiglottitis) that overlap in symptoms but diverge sharply in exam clue, diagnostic study, and management. Age plus the specific exam pattern (trismus/uvula deviation vs. torticollis in a toddler vs. tripod/drooling/stridor) separates them faster than any single test, and airway assessment comes first regardless of which one it turns out to be."
    },
    {
      id: "case-caustic-ingestion",
      ukmla: "Swallowing problems",
      source: "Standard emergency medicine/clinical toxicology teaching on caustic ingestion.",
      stem: "An <b>18-month-old</b> is found with an open bottle of liquid drain cleaner. She is crying, drooling, and refusing to swallow. There is <b>no visible burn on her lips or mouth</b>.",
      prompts: [
        { q: "Does the absence of visible oral burns rule out significant esophageal injury?", a: "<strong>No.</strong> The presence or absence of oropharyngeal burns correlates <strong>poorly</strong> with the presence or severity of esophageal injury. A child can have a completely normal-looking mouth and still have significant esophageal damage, so a reassuring oral exam does not exclude serious injury lower down." },
        { q: "What should NOT be done, and what is the immediate priority given her drooling and refusal to swallow?", a: "<strong>Do not induce vomiting</strong> (re-exposes the esophagus and airway to the caustic agent on the way back up), do not attempt to <strong>neutralize</strong> the agent (the acid-base reaction is exothermic and worsens the burn), and avoid activated charcoal (doesn't bind caustics and obscures endoscopy). The immediate priority is <strong>airway assessment</strong>: oropharyngeal and laryngeal edema can threaten the airway even before esophageal symptoms are obvious." },
        { q: "What test defines the extent of injury, and when is it done?", a: "<strong>Upper endoscopy within about 12-24 hours</strong> of ingestion, once the airway and hemodynamic status are stable. This is done carefully, since the wall is most friable and perforation risk is highest in the first days. Grading (mucosal edema through transmural necrosis) predicts the risk of later <strong>esophageal stricture</strong> and, at the highest grade, <strong>perforation</strong>." },
        { q: "How does an adult intentional (suicidal) caustic ingestion change the picture, beyond the injury itself?", a: "The same airway-first and endoscopic-grading principles apply, but intentional ingestions often involve <strong>larger volumes or higher concentrations</strong> with a correspondingly higher risk of severe injury, and management must also include a <strong>psychiatric evaluation</strong> and a higher index of suspicion for associated injury (e.g. aspiration, mixed ingestions)." }
      ],
      teaching: "Caustic ingestion is judged by injury pattern and airway threat, not by how the mouth looks: a normal oral exam does not clear the esophagus, inducing vomiting or neutralizing the agent makes things worse, and endoscopy within about 24 hours (once the patient is stabilized) is what actually grades the injury and predicts stricture risk, with a different risk profile and added psychiatric dimension when the ingestion was intentional."
    },
    {
      id: "case-hereditary-angioedema",
      ukmla: "Allergies",
      source: "WAO (World Allergy Organization) hereditary angioedema guidance; standard allergy/immunology teaching on C1-inhibitor deficiency.",
      stem: "A <b>24-year-old woman</b> presents with tongue and facial swelling and new abdominal pain. She describes recurrent, non-itchy swelling episodes of her hands, face, and once her larynx (requiring hospitalization) several times a year since adolescence, and says her mother has 'the same thing.' She is not on any ACE inhibitor. A previous episode was treated with epinephrine, diphenhydramine, and steroids <b>'without much benefit.'</b>",
      prompts: [
        { q: "What is the likely diagnosis, and which features point away from allergic or ACE-inhibitor-induced angioedema?", a: "<strong>Hereditary angioedema (HAE).</strong> Recurrent attacks since adolescence, a strong <strong>family history</strong>, absence of urticaria/itch, and a documented <strong>lack of response to epinephrine, antihistamines, and steroids</strong> all point away from an allergic mechanism. She is not taking an ACE inhibitor, which excludes that bradykinin-mediated cause as well." },
        { q: "What is the underlying mechanism?", a: "Deficiency or dysfunction of <strong>C1-esterase inhibitor (C1-INH)</strong>, which normally restrains the kallikrein-kinin/contact-system cascade. Its absence leads to unchecked <strong>bradykinin</strong> generation, the same downstream mediator as ACE-inhibitor angioedema, but from a completely different upstream cause (a genetic deficiency rather than a drug effect)." },
        { q: "Why is her new abdominal pain clinically important, and what mimic must be considered?", a: "HAE can cause <strong>bowel-wall angioedema</strong>, producing painful abdominal attacks that can closely mimic an acute surgical abdomen (appendicitis, bowel obstruction). Recognizing HAE as the cause can prevent an unnecessary laparotomy." },
        { q: "What is the acute treatment, and how should the tongue/laryngeal involvement be managed?", a: "<strong>C1-inhibitor concentrate, icatibant</strong> (a bradykinin B2-receptor antagonist), <strong>or ecallantide</strong> (a kallikrein inhibitor), not epinephrine, antihistamines, or steroids, which don't target the bradykinin pathway. Because laryngeal HAE attacks can progress to complete airway obstruction, <strong>early airway assessment and a low threshold for definitive airway management</strong> (potentially awake intubation or a surgical airway) is warranted alongside prompt disease-specific treatment; the team should not wait to see whether 'the epinephrine kicks in.'" }
      ],
      teaching: "Hereditary angioedema is a C1-inhibitor deficiency driving bradykinin-mediated, not histamine-mediated, swelling. Recurrent attacks since childhood/adolescence, a family history, absence of urticaria, and a documented non-response to the anaphylaxis protocol are the clues. Acute attacks need C1-INH concentrate, icatibant, or ecallantide (with long-term prophylactic options for frequent attacks), and laryngeal involvement still demands urgent airway vigilance even though the mechanism is different from anaphylaxis."
    }
  ],

  /* ==================== CARDS TAB ==================== */
  cards: [
    { id:"airway-first-card", tags: ["EM", "clinical"], milestones:["PC1"], redFlag:true, ukmla:"Stridor", source:"Standard emergency otolaryngology triage teaching.", front:"In any ENT emergency, what question comes before forming a differential diagnosis?",
      back:"<strong>Is the airway patent, at risk, or failing right now?</strong> Signs of impending obstruction (stridor, drooling, tripod positioning, agitation→lethargy, voice change) override diagnostic work-up; protect the airway first." },
    { id:"epiglottitis-exam-card", tags: ["EM", "clinical"], milestones:["PC1"], redFlag:true, ukmla:"Stridor", source:"Standard emergency airway teaching.", front:"Why should you avoid using a tongue depressor in suspected epiglottitis?",
      back:"Oropharyngeal manipulation can <strong>precipitate complete airway obstruction</strong> in a swollen, irritable supraglottis. Keep the patient calm (child in a parent's lap) and secure the airway in a controlled setting (OR) with anesthesia/ENT present." },
    { id:"quinsy-vs-rpa-vs-epiglottitis-card", tags: ["EM", "clinical"], milestones:["PC1","MK1"], redFlag:true, ukmla:"Sore throat", source:"Standard emergency otolaryngology differential teaching.", front:"Differentiate peritonsillar abscess, retropharyngeal abscess, and epiglottitis by key exam clue.",
      back:"<strong>Peritonsillar abscess:</strong> uvula deviation, tonsillar bulge, trismus. <strong>Retropharyngeal abscess:</strong> torticollis, neck stiffness, refusal to extend neck (mostly young children). <strong>Epiglottitis:</strong> tripod position, drooling, no oropharyngeal exam without airway backup." },
    { id:"deep-neck-spread-card", tags: ["EM", "anatomy"], milestones:["MK1","PC1"], ukmla:"Neck lump", source:"Standard deep neck space anatomy teaching.", front:"Why can a localized pharyngeal infection become a mediastinal emergency?",
      back:"The deep neck spaces <strong>communicate</strong>: peritonsillar → parapharyngeal → retropharyngeal spaces connect directly toward the mediastinum along fascial planes, allowing infection to descend and cause <strong>descending necrotizing mediastinitis</strong> if untreated." },
    { id:"button-battery-card", tags: ["EM", "clinical"], milestones:["PC1","PC7"], redFlag:true, ukmla:"Ear and nasal discharge", source:"National Capital Poison Center guidance on button battery injuries.", front:"Why is a button battery in the nose or ear an hours-scale emergency?",
      back:"Contact with moist mucosa triggers an electrolytic reaction causing <strong>liquefactive necrosis of surrounding tissue within hours</strong>, far faster than a typical foreign body. Requires urgent removal, and an even higher-urgency response if the location is the esophagus." },
    { id:"post-tonsillectomy-bleed-card", tags: ["EM", "clinical"], milestones:["PC1","PC9"], redFlag:true, ukmla:"Sore throat", source:"Standard post-tonsillectomy hemorrhage teaching.", front:"How should any post-tonsillectomy bleeding be triaged, regardless of apparent severity?",
      back:"<strong>Urgently</strong>: airway and hemodynamic assessment, same-day ENT evaluation. Even a small ('herald') bleed can precede a much larger hemorrhage; there is no 'wait and see' for post-tonsillectomy bleeding." },
    { id:"post-thyroid-hematoma-card", tags: ["EM", "clinical"], milestones:["PC1","PC9"], redFlag:true, ukmla:"Neck lump", source:"Standard head & neck surgery teaching on post-thyroidectomy hematoma.", front:"What is the immediate bedside action for a rapidly expanding hematoma with stridor after thyroid/neck surgery?",
      back:"<strong>Open the wound at the bedside</strong> (release skin/strap muscle closure) to evacuate the hematoma and relieve airway pressure immediately. This precedes imaging or transport to the OR, given how quickly it can obstruct the airway." },
    { id:"orbital-complications-sinusitis-card", tags: ["EM", "clinical"], milestones:["PC1","MK2"], redFlag:true, ukmla:"Facial/periorbital swelling", source:"Standard rhinology teaching on orbital complications of sinusitis.", front:"What exam findings distinguish orbital (postseptal) cellulitis from preseptal cellulitis?",
      back:"<strong>Proptosis, painful or restricted eye movement, and vision change</strong> indicate orbital (postseptal) involvement, a sinusitis complication requiring urgent CT and IV antibiotics ± surgical drainage. Preseptal cellulitis spares eye movement and vision." },
    { id:"invasive-fungal-sinusitis-card", tags: ["EM", "clinical"], milestones:["PC1","MK2"], redFlag:true, ukmla:"Facial pain", source:"Standard rhinology teaching on acute invasive fungal sinusitis.", front:"What clinical picture should trigger emergent evaluation for acute invasive fungal sinusitis?",
      back:"<strong>Diabetic (especially DKA) or immunocompromised patient</strong> with facial pain, nasal congestion, <strong>black/necrotic eschar</strong> on the septum or palate, and facial numbness. Requires emergent biopsy and surgical debridement; delay measured in hours matters." },
    { id:"ssnhl-window-card", tags: ["EM", "clinical"], milestones:["PC1","PC4"], redFlag:true, ukmla:"Hearing loss", source:"AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019.", front:"Why is sudden sensorineural hearing loss (SSNHL) treated urgently?",
      back:"Corticosteroid treatment (oral or intratympanic) has a <strong>time-sensitive window</strong>: earlier initiation (ideally within about 2 weeks) improves the chance of hearing recovery. An urgent audiogram confirms the sensorineural nature and severity." },
    { id:"orbital-compartment-syndrome-emerg-card", tags: ["EM", "clinical"], milestones:["PC1"], redFlag:true, ukmla:"Facial/periorbital swelling", source:"Standard ophthalmic emergency teaching on orbital compartment syndrome.", front:"What is the bedside emergency treatment for orbital compartment syndrome (expanding retrobulbar hematoma with vision loss)?",
      back:"<strong>Emergent lateral canthotomy and cantholysis</strong> at the bedside, without waiting for imaging, when vision is acutely threatened; it decompresses the orbit and can save vision within a narrow time window." },
    { id:"ludwigs-angina-card", tags: ["EM", "clinical"], milestones:["PC1"], redFlag:true, ukmla:"Sore throat", source:"Standard deep neck infection teaching on Ludwig's angina.", front:"A rapidly spreading, usually odontogenic, bilateral cellulitis of the floor of the mouth that pushes the tongue posteriorly and can obstruct the airway before any drainable abscess forms is called <span class=\"cloze-blank\">[...]</span>.",
      back:"A rapidly spreading, usually odontogenic, bilateral cellulitis of the floor of the mouth that pushes the tongue posteriorly and can obstruct the airway before any drainable abscess forms is called <mark class=\"cloze-answer\">Ludwig's angina</mark>. It often needs awake fiberoptic intubation, with a surgical airway on standby, since bag-mask ventilation and direct laryngoscopy can be difficult." },
    { id:"csf-leak-card-2", tags: ["EM", "clinical"], milestones:["PC1"], redFlag:true, ukmla:"Epistaxis", source:"Standard skull-base trauma teaching on CSF leak recognition.", front:"What bedside signs suggest CSF rather than ordinary rhinorrhea after head trauma, and what should be avoided?",
      back:"A <strong>'halo/ring' sign</strong> on gauze and glucose-positive fluid suggest CSF. <strong>Avoid nasal packing</strong> near a suspected skull-base defect (infection risk); most traumatic leaks are managed with head elevation and observation first." },
    { id:"epistaxis-emergency-card", tags: ["EM", "clinical"], milestones:["PC1","PC9"], redFlag:true, ukmla:"Epistaxis", source:"Standard emergency epistaxis management teaching.", front:"What is the escalation ladder for epistaxis that fails initial first aid?",
      back:"<strong>Direct pressure (10-15 min, pinching the cartilaginous septum, leaning forward) → topical vasoconstrictor/cautery → anterior nasal packing → posterior packing/balloon → surgical or interventional-radiology arterial ligation/embolization</strong> for refractory bleeding." },
    { id:"foreign-body-airway-card", tags: ["EM", "clinical"], milestones:["PC1","PC7"], redFlag:true, ukmla:"Stridor", source:"Standard pediatric airway foreign body teaching.", front:"What history should raise concern for an aspirated airway foreign body in a young child?",
      back:"A <strong>choking/coughing episode witnessed by a caregiver</strong>, followed by new-onset unilateral wheeze, stridor, or decreased breath sounds, even if the child seems to recover initially. Needs urgent evaluation (imaging ± rigid bronchoscopy), as objects can migrate or cause delayed complications." },
    { id:"caustic-ingestion-card", tags: ["EM", "clinical"], milestones:["PC1"], redFlag:true, ukmla:"Swallowing problems", source:"Standard emergency teaching on caustic ingestion.", front:"What should NOT be done after a suspected caustic (alkali/acid) ingestion, and why?",
      back:"<strong>Do not induce vomiting</strong> (re-exposes the esophagus to the caustic agent on the way back up) and do not attempt neutralization (exothermic reaction worsens injury). Urgent evaluation (often endoscopy) is needed to assess esophageal injury." },
    { id:"triage-mindset-summary-card", tags: ["EM", "clinical"], milestones:["PC1","SBP1"], ukmla:"Stridor", source:"Synthesis card: cross-references Foundations and every subspecialty track's red-flag items.", front:"What is the one-line mental model for triaging any ENT emergency?",
      back:"<strong>Airway first, source second.</strong> Assess and protect the airway before pursuing the underlying diagnosis. Nearly every true ENT emergency (epiglottitis, deep neck infection, post-op hematoma, angioedema, foreign body) shares this same triage logic even though the causes differ completely." },
    { id:"angioedema-three-types-card", tags: ["EM", "clinical"], milestones:["PC1","MK2"], redFlag:true, ukmla:"Allergies", source:"Standard emergency/allergy teaching; WAO hereditary angioedema guidance for the bradykinin-mediated framework.", front:"A patient has lip/tongue swelling with no urticaria or itch. What three mechanisms of angioedema should you consider, and which one(s) respond to epinephrine?",
      back:"<strong>Allergic/mast-cell-mediated</strong> (histamine, responds to epinephrine/antihistamines/steroids), <strong>ACE-inhibitor-induced</strong> (bradykinin, does NOT reliably respond), and <strong>hereditary angioedema (HAE)</strong> from C1-esterase-inhibitor deficiency (bradykinin, does NOT respond). Only the allergic type is treated with standard anaphylaxis medications." },
    { id:"ace-inhibitor-angioedema-card", tags: ["EM", "pharm"], milestones:["PC1","MK2"], redFlag:true, ukmla:"Allergies", source:"Standard emergency medicine/allergy teaching on ACE-inhibitor-induced angioedema.", front:"Because ACE-inhibitor-induced angioedema is bradykinin-mediated and does not reliably respond to epinephrine, antihistamines, or steroids, the actual treatment is <span class=\"cloze-blank\">[...]</span>.",
      back:"Because ACE-inhibitor-induced angioedema is bradykinin-mediated and does not reliably respond to epinephrine, antihistamines, or steroids, the actual treatment is <mark class=\"cloze-answer\">stopping the ACE inhibitor</mark>, permanently. It can occur at any point after starting the drug, even years later." },
    { id:"hereditary-angioedema-card", tags: ["EM", "clinical"], milestones:["PC1","MK2"], redFlag:true, ukmla:"Allergies", source:"WAO (World Allergy Organization) hereditary angioedema guidance.", front:"Hereditary angioedema is caused by deficiency or dysfunction of <span class=\"cloze-blank\">[...]</span>, which lets bradykinin accumulate unchecked and produces recurrent swelling attacks without urticaria or itch.",
      back:"Hereditary angioedema is caused by deficiency or dysfunction of <mark class=\"cloze-answer\">C1-esterase inhibitor (C1-INH)</mark>, which lets bradykinin accumulate unchecked and produces recurrent swelling attacks without urticaria or itch. Acute attacks are treated with C1-inhibitor concentrate, icatibant, or ecallantide, not epinephrine." },
    { id:"penetrating-neck-zones-card", tags: ["EM", "anatomy"], milestones:["PC1","MK1"], ukmla:"Neck lump", source:"ATLS principles; standard trauma teaching on the zones of the neck.", front:"In penetrating neck trauma, <span class=\"cloze-blank\">[...]</span>, running from the cricoid cartilage to the angle of the mandible, is the largest and most surgically accessible zone, and most penetrating injuries occur there.",
      back:"In penetrating neck trauma, <mark class=\"cloze-answer\">Zone II</mark>, running from the cricoid cartilage to the angle of the mandible, is the largest and most surgically accessible zone, and most penetrating injuries occur there. Zone I (below the cricoid) and Zone III (above the mandible) are both harder to access surgically." },
    { id:"neck-trauma-hard-signs-card", tags: ["EM", "clinical"], milestones:["PC1"], redFlag:true, ukmla:"Neck lump", source:"ATLS principles; standard trauma teaching on penetrating neck trauma.", front:"In penetrating neck trauma, any hard sign of vascular or aerodigestive injury, such as an expanding hematoma or active pulsatile bleeding, mandates <span class=\"cloze-blank\">[...]</span>, even if the patient looks stable at that moment.",
      back:"In penetrating neck trauma, any hard sign of vascular or aerodigestive injury, such as an expanding hematoma or active pulsatile bleeding, mandates <mark class=\"cloze-answer\">immediate operative exploration</mark>, even if the patient looks stable at that moment. Their absence in a stable patient allows CT angiography to guide a more selective work-up." },
    { id:"inhalation-injury-card", tags: ["EM", "clinical"], milestones:["PC1","PC2"], redFlag:true, ukmla:"Stridor", source:"Standard burn/inhalational airway injury teaching.", front:"After a facial or inhalational thermal burn, because airway swelling is progressive, the airway is best secured by intubating <span class=\"cloze-blank\">[...]</span>, before stridor, drooling, or tripod positioning appear.",
      back:"After a facial or inhalational thermal burn, because airway swelling is progressive, the airway is best secured by intubating <mark class=\"cloze-answer\">early and electively</mark>, before stridor, drooling, or tripod positioning appear. Singed nasal hair, carbonaceous sputum, or new hoarseness after a closed-space fire should raise concern for this." },
    { id:"caustic-alkali-vs-acid-card", tags: ["EM", "clinical"], milestones:["PC1"], redFlag:true, ukmla:"Swallowing problems", source:"Standard emergency teaching on caustic ingestion.", front:"Alkali caustic ingestion, such as drain cleaner, causes <span class=\"cloze-blank\">[...]</span> that penetrates deeply into the esophageal wall, whereas acid ingestion causes coagulative necrosis that forms a self-limiting surface eschar.",
      back:"Alkali caustic ingestion, such as drain cleaner, causes <mark class=\"cloze-answer\">liquefactive necrosis</mark> that penetrates deeply into the esophageal wall, whereas acid ingestion causes coagulative necrosis that forms a self-limiting surface eschar. Acid tends to injure the stomach more, since it passes through the esophagus quickly but pools in the antrum." },
    { id:"caustic-endoscopy-grading-card", tags: ["EM", "clinical"], milestones:["PC1"], redFlag:true, ukmla:"Swallowing problems", source:"Standard emergency/GI teaching on caustic ingestion endoscopic grading.", front:"After caustic ingestion, once the airway and hemodynamic status are stable, grading upper endoscopy is typically performed within <span class=\"cloze-blank\">[...]</span> of the ingestion.",
      back:"After caustic ingestion, once the airway and hemodynamic status are stable, grading upper endoscopy is typically performed within <mark class=\"cloze-answer\">12 to 24 hours</mark> of the ingestion. Higher injury grades, up to grade III transmural necrosis, predict a substantially higher risk of esophageal stricture and perforation." }
  ]
});

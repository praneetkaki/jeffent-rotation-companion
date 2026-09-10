/* pediatric.js, PEDIATRIC ENT (subspecialty track)
 *
 * Deep dive on child-specific ENT anatomy and disease. Built on the same
 * Module Build Standard as Foundations: every card/case carries a UKMLA
 * scope tag (content/ukmla.js), an ACGME Milestone tag (content/frameworks.js,
 * primarily PC7 Pediatric Otolaryngology), and a named source. Content
 * written to US practice standards (AAP, AAO-HNSF); UK/US differences flagged.
 *
 * STATUS: DRAFT, pending JeffENT faculty review. See docs/MODULE-BUILD-STANDARD.md.
 */
window.JEFFENT.register({
  id: "pediatric-ent",
  track: "pediatric",
  trackName: "Pediatric ENT",
  trackAbbr: "PE",
  order: 5,
  title: "Pediatric ENT",
  subtitle: "The child is not a small adult: airway anatomy, ear disease, congenital anomalies, and the red flags unique to kids.",
  version: "0.4.0-draft",
  level: ["core", "sub-I"],
  status: "DRAFT, pending faculty review. v0.2.0: added a depth pass covering genuinely missing pediatric-specific topics, congenital aural atresia/microtia and congenital (vs acquired) cholesteatoma, pediatric OSA diagnostic AHI thresholds and the post-adenotonsillectomy residual-disease question (cross-referenced from the Sleep Surgery & OSA track), Pierre Robin sequence, vascular ring/tracheomalacia as biphasic-stridor mimics of laryngomalacia, and juvenile-onset recurrent respiratory papillomatosis as a stridor/hoarseness mimic of recurrent croup, grounded in AAP and AAO-HNSF guidance and standard pediatric otolaryngology teaching; written fresh from guidelines and standard teaching, not derived from any single textbook. v0.3.0: added 2 red-flag teaching cases identified by a coverage audit (pediatric airway foreign body, pediatric retropharyngeal abscess).",
  facultyReviewer: "",
  curriculumAnchors: [
    "UKMLA Content Map (GMC), scope anchor; owns Painful ear, Hearing loss, Stridor, Neck lump, Nasal obstruction, Snoring, Facial/periorbital swelling, all at pediatric-specific depth",
    "ACGME Otolaryngology-HNS Milestones 2.0, primarily PC7 Pediatric Otolaryngology",
    "AAP Clinical Practice Guidelines: Otitis Media, Tonsillectomy, Childhood Obstructive Sleep Apnea Syndrome; AAO-HNSF Clinical Practice Guidelines: Tympanostomy Tubes, Tonsillectomy in Children",
    "UK undergraduate Delphi (Lloyd 2014), student-scope depth cap"
  ],
  frameworkAlignment: {
    competenciesCovered: ["PC", "MK"],
    note: "Subspecialty depth at student scope (Delphi); goes deeper than Foundations on the same UKMLA items through a pediatric lens (airway anatomy, congenital anomalies, age-specific management thresholds) rather than introducing new ones."
  },

  /* ==================== ANATOMY TAB ==================== */
  anatomy: {
    notes: [
      {
        title: "The pediatric airway vs the adult airway",
        html: "<ul><li><strong>Funnel-shaped</strong>, narrowest at the subglottis (vs the glottis in adults).</li><li>Larynx sits <strong>more cephalad</strong> (about C3-4 vs C4-6).</li><li>Tongue and tonsils are <strong>relatively larger</strong> for the airway size.</li><li>Epiglottis is <strong>omega-shaped</strong> and floppier.</li><li>So small amounts of edema cause disproportionate obstruction, and airway emergencies escalate faster.</li></ul><figure class='note-fig' data-credit=\"Pediatric vs. Adult Airway Anatomy and Geometric Differences. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/67_pediatric_vs_adult_airway_gemini.png' alt='Pediatric vs adult airway anatomy' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Pediatric versus adult airway anatomy and geometric differences.</figcaption></figure>"
      },
      {
        title: "Eustachian tube anatomy in children",
        html: "<figure class='note-fig' data-credit=\"Auditory tube and middle ear. Gray's Anatomy (1918), Plate 912. Public domain (Wikimedia Commons).\"><img class='zoomable' src='assets/800px-Gray912.png' alt='Auditory tube and middle ear' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: Auditory (Eustachian) tube opening and middle ear (the pediatric horizontal angle is described in the text).</figcaption></figure><ul><li>A child's Eustachian tube is <strong>shorter, more horizontal, and less angled</strong> than an adult's.</li><li>It therefore drains the middle ear less efficiently and lets nasopharyngeal secretions and pathogens reflux more easily.</li><li>This is why otitis media is overwhelmingly a childhood disease, becoming far less common once the tube matures toward its adult angle.</li></ul><figure class='note-fig' data-credit=\"Pediatric vs. Adult Eustachian Tube Orientation and Drainage. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/68_pediatric_vs_adult_eustachian_tube_gemini.png' alt='Pediatric vs adult eustachian tube' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Pediatric versus adult eustachian tube orientation and drainage.</figcaption></figure>"
      },
      {
        title: "Branchial apparatus embryology: the basics",
        html: "<figure class='note-fig' data-credit=\"Branchial arches. Gray's Anatomy (1918), Plate 981. Public domain (Wikimedia Commons).\"><img class='zoomable' src='assets/800px-Gray981.png' alt='Branchial arches' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: Second branchial cleft tract runs along the anterior SCM to the tonsillar fossa.</figcaption></figure><ul><li>The branchial (pharyngeal) apparatus has arches, clefts (external grooves), and pouches (internal grooves).</li><li>Most clinically relevant anomalies arise from the <strong>second branchial cleft</strong>: a persistent tract can run from a pit near the anterior sternocleidomastoid up toward the tonsillar fossa.</li><li>This is why a 'lateral neck cyst anterior to the SCM' is the classic branchial cleft cyst location.</li></ul><figure class='note-fig' data-credit=\"Second Branchial Cleft Anomalies Anatomic Tract. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/69_second_branchial_cleft_tract_gemini.png' alt='Second branchial cleft tract' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Second branchial cleft anomaly anatomic tract.</figcaption></figure>"
      },
      {
        title: "Waldeyer's ring",
        html: "<figure class='note-fig' data-credit=\"Waldeyer's ring (tonsils). Wikimedia Commons. Public domain.\"><img class='zoomable' src='assets/Tonsils_diagram.jpg' alt='Waldeyer's ring' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: Adenoids, tubal tonsils, palatine tonsils, lingual tonsil.</figcaption></figure><ul><li>A ring of lymphoid tissue guarding the aerodigestive entrance: <strong>adenoids</strong> (nasopharyngeal tonsil), paired <strong>palatine tonsils</strong> (seen on oral exam), and the <strong>lingual tonsil</strong> at the tongue base.</li><li>All can hypertrophy with recurrent antigen exposure in early childhood, the anatomic basis for both recurrent tonsillitis and adenotonsillar-hypertrophy-driven pediatric OSA.</li></ul><figure class='note-fig' data-credit=\"Waldeyer's Ring of Lymphoid Tissue. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/70_waldeyers_ring_lymphoid_gemini.png' alt='Waldeyer's ring' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Waldeyer's ring of lymphoid tissue.</figcaption></figure>"
      }
    ],
    diagrams: [
      {
        kind: "image",
        occlude: true,
        id: "peds-vs-adult-airway",
        title: "Pediatric vs adult airway shape",
        note: "Funnel-shaped vs cylindrical: why a little swelling goes a long way in a child. Name each feature, then reveal.",
        src: "assets/img/mc/67_pediatric_vs_adult_airway_gemini.png",
        source: "Pediatric vs. Adult Airway Anatomy and Geometric Differences. Illustration generated with Google Gemini.",
        labels: [
          { id:"child", text:"Child: funnel-shaped, narrowest at the SUBGLOTTIS", box:{x:14.2,y:45.5,w:24.0,h:9.0} },
          { id:"adult", text:"Adult: roughly cylindrical, narrowest at the GLOTTIS", box:{x:58.2,y:45.5,w:24.0,h:9.0} },
          { id:"epi", text:"Omega-shaped, floppier epiglottis in a child", box:{x:5.9,y:12.2,w:24.0,h:9.0} },
          { id:"larynx", text:"Larynx more cephalad in a child (~C3-4 vs C4-6)", box:{x:5.9,y:45.5,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "branchial-cleft-track",
        title: "Second branchial cleft tract",
        note: "The classic route from a preauricular/neck pit toward the tonsillar fossa. Name each landmark, then reveal.",
        src: "assets/img/mc/69_second_branchial_cleft_tract_gemini.png",
        source: "Second Branchial Cleft Anomalies Anatomic Tract. Illustration generated with Google Gemini.",
        labels: [
          { id:"tonsil", text:"Tonsillar fossa (internal opening)", box:{x:25.5,y:22.0,w:24.0,h:9.0} },
          { id:"tract", text:"Tract runs along the carotid sheath", box:{x:25.5,y:45.5,w:24.0,h:9.0} },
          { id:"pit", text:"External opening: pit/sinus anterior to SCM, lower neck", box:{x:6.8,y:72.0,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "waldeyers-ring-diagram",
        title: "Waldeyer's ring",
        note: "The lymphoid ring guarding the aerodigestive entrance. Name each component, then reveal.",
        src: "assets/img/mc/70_waldeyers_ring_lymphoid_gemini.png",
        source: "Waldeyer's Ring of Lymphoid Tissue. Illustration generated with Google Gemini.",
        labels: [
          { id:"adenoid", text:"Adenoids (nasopharyngeal tonsil)", box:{x:38.0,y:18.8,w:24.0,h:9.0} },
          { id:"pt1", text:"Palatine tonsil", box:{x:18.0,y:45.5,w:24.0,h:9.0} },
          { id:"pt2", text:"Palatine tonsil", box:{x:58.0,y:45.5,w:24.0,h:9.0} },
          { id:"lingual", text:"Lingual tonsil (tongue base)", box:{x:38.0,y:68.8,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "eustachian-tube-pediatric",
        title: "Pediatric vs adult Eustachian tube angle",
        note: "Same tube, different geometry: shorter and flatter in a child, longer and steeper in an adult. Name each feature, then reveal.",
        src: "assets/img/mc/68_pediatric_vs_adult_eustachian_tube_gemini.png",
        source: "Pediatric vs. Adult Eustachian Tube Orientation and Drainage. Illustration generated with Google Gemini.",
        labels: [
          { id:"child-middle-ear", text:"Middle ear (child)", box:{x:21.3,y:17.2,w:24.0,h:9.0} },
          { id:"child-tube-angle", text:"Child: short, near-horizontal tube, drains the middle ear less efficiently", box:{x:9.4,y:26.5,w:24.0,h:9.0} },
          { id:"child-nasopharynx", text:"Nasopharyngeal opening (child)", box:{x:0.0,y:36.2,w:24.0,h:9.0} },
          { id:"adult-middle-ear", text:"Middle ear (adult)", box:{x:71.3,y:17.2,w:24.0,h:9.0} },
          { id:"adult-tube-angle", text:"Adult: longer tube, angled closer to vertical, drains more efficiently", box:{x:60.6,y:45.5,w:24.0,h:9.0} },
          { id:"adult-nasopharynx", text:"Nasopharyngeal opening (adult)", box:{x:52.3,y:72.2,w:24.0,h:9.0} }
        ]
      }
    ]
  },

  /* ==================== CLINICAL TAB ==================== */
  clinical: {
    blocks: [
      {
        id: "ome-vs-aom",
        title: "Otitis media with effusion (OME) vs acute otitis media (AOM)",
        html: "<p>The distinction changes management entirely.</p>",
        table: {
          head: ["", "OME", "AOM"],
          rows: [
            ["Definition", "Fluid behind an intact TM, no acute infection signs", "Acute infection: bulging TM, acute signs/symptoms"],
            ["Symptoms", "Often none, or muffled hearing", "Otalgia, fever, irritability"],
            ["TM appearance", "Dull, effusion, may see air-fluid level", "Bulging, erythematous, opaque"],
            ["First-line management", "Watchful waiting (most resolve in weeks)", "Observation or amoxicillin depending on age/severity"]
          ]
        }
      },
      {
        id: "peds-tna-indications",
        title: "Tonsillectomy & adenoidectomy: when it's indicated",
        html: "<p><strong>Recurrent infection</strong> (the 'Paradise criteria' as a reference point), each episode documented and meeting defined severity criteria:</p><ul><li>Roughly ≥7 episodes in 1 year</li><li>≥5/year for 2 years</li><li>≥3/year for 3 years</li></ul><p>In current practice, <strong>obstructive sleep-disordered breathing/OSA from adenotonsillar hypertrophy</strong> has become the <strong>leading indication</strong> for T&amp;A, arguably more common now than recurrent infection.</p>"
      },
      {
        id: "newborn-hearing-screen",
        title: "Newborn hearing screening: the 1-3-6 rule",
        html: "<p>The 1-3-6 rule, in order:</p><ol><li><strong>Screen</strong> by 1 month of age (universal newborn hearing screening, using OAE or automated ABR).</li><li><strong>Diagnose</strong> definitively by 3 months if screening fails.</li><li><strong>Begin intervention</strong> (amplification, early intervention services) by 6 months.</li></ol><p>Missing this window has measurable effects on speech/language development, and the timeline itself is a testable fact.</p>"
      },
      {
        id: "congenital-neck-masses",
        title: "Congenital neck masses by location",
        html: "<p>Location does most of the differential work.</p><figure class='note-fig' data-credit=\"Congenital Neck Masses Differentiated by Anatomical Location. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/71_congenital_neck_masses_by_location_gemini.png' alt='Congenital neck masses by location' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Congenital neck masses differentiated by anatomical location.</figcaption></figure>",
        table: {
          head: ["Location", "Likely diagnosis"],
          rows: [
            ["Midline", "Thyroglossal duct cyst (moves with tongue protrusion/swallowing); <b>image the thyroid before excising</b>, since it may be the only functioning thyroid tissue"],
            ["Lateral, anterior to SCM", "Branchial cleft cyst (2nd arch most common)"],
            ["Posterior triangle", "Cystic hygroma / lymphatic malformation, often present at birth or found prenatally"],
            ["Preauricular", "Preauricular pit/sinus (branchial anomaly), can become infected"]
          ]
        }
      },
      {
        id: "congenital-airway",
        title: "Congenital airway anomalies to recognize",
        html: "<p><strong>Choanal atresia:</strong> newborns are obligate nasal breathers, so bilateral atresia causes cyclical cyanosis that <em>improves with crying</em> (mouth breathing) and worsens at rest; it's part of the CHARGE association. <strong>Laryngomalacia:</strong> the most common cause of stridor in infants, with inspiratory stridor worse when supine, feeding, or crying; it typically self-resolves by 12-18 months, but severe cases with growth failure need surgery (supraglottoplasty).</p>"
      },
      {
        id: "congenital-ear-anomalies",
        title: "Congenital & structural ear anomalies: aural atresia, microtia, congenital cholesteatoma",
        html: "<p><strong>Aural atresia and microtia</strong> (absent/malformed ear canal and pinna) occur on a spectrum, often together, and may be isolated or syndromic (<strong>Treacher Collins syndrome</strong>, hemifacial microsomia/<strong>Goldenhar syndrome</strong>). <strong>Unilateral</strong> cases with a normal contralateral ear can be worked up electively; <strong>bilateral</strong> atresia causes significant conductive hearing loss from birth and is urgent: audiologic assessment and a <strong>bone-conduction hearing device</strong> are needed right away, since there is no ear canal for a conventional aid and the 1-3-6 hearing timeline still applies. Surgical ear canal/pinna reconstruction is deferred to <strong>school age or later</strong> (~age 6+, once rib cartilage is adequate for grafting), so early hearing access has to come from amplification, not surgery.</p><p><strong>Congenital cholesteatoma</strong> is a distinct entity from the acquired cholesteatoma covered in Foundations. It forms behind an <em>intact, normal-looking tympanic membrane</em> in a child with <em>no history of otitis media, perforation, or ear surgery</em>. Because there's no otorrhea to prompt a visit, it is often found incidentally (a pearly-white mass on routine exam) or via conductive hearing loss rather than discharge. Management is still surgical removal; earlier removal limits ossicular erosion.</p>",
        table: {
          head: ["", "Acquired cholesteatoma (Foundations)", "Congenital cholesteatoma"],
          rows: [
            ["History", "Chronic otorrhea, prior perforation/infection", "None, with no history of ear infection or perforation"],
            ["TM appearance", "Retracted/perforated, crusted attic", "Intact, normal-looking"],
            ["Typical clue", "Painless foul otorrhea", "Incidental pearly-white mass, or conductive hearing loss"],
            ["Management", "Surgical removal", "Surgical removal, earlier where possible to limit ossicular erosion"]
          ]
        }
      },
      {
        id: "peds-osa-depth",
        title: "Pediatric OSA: diagnosis and the post-adenotonsillectomy question",
        html: "<p>Pediatric OSA is diagnosed against a different threshold than adult OSA (adult depth lives in the Sleep Surgery &amp; OSA track): an obstructive <strong>apnea-hypopnea index (AHI) ≥1 event/hour</strong> on polysomnography is abnormal in a child, versus <strong>≥5/hour</strong> in an adult, a much lower bar. <strong>Polysomnography remains the gold standard</strong>, though in practice many children go straight to adenotonsillectomy on a strong clinical picture (snoring, witnessed apneas, gasping) without a preoperative sleep study, per <strong>AAP guidance</strong>; PSG is reserved for cases where the diagnosis/severity is unclear or the child is high-risk for residual disease.</p><p><strong>Adenotonsillectomy resolves OSA in most otherwise-healthy children, but not all.</strong> Risk factors for <strong>persistent/residual OSA after T&amp;A</strong> include:</p><ul><li>Obesity</li><li><strong>Down syndrome</strong> (macroglossia, midface hypoplasia, hypotonia)</li><li>Other craniofacial syndromes</li><li>Severe preoperative AHI</li></ul><p>These children should get a <strong>postoperative polysomnogram</strong> rather than being assumed cured, since a second driver of obstruction is more likely.</p>"
      },
      {
        id: "neonatal-airway-beyond-laryngomalacia",
        title: "Neonatal upper airway obstruction beyond laryngomalacia",
        html: "<p><strong>Pierre Robin sequence</strong> is a triad of <strong>micrognathia</strong> (small mandible), <strong>glossoptosis</strong> (the tongue falls posteriorly into the airway because the small jaw can't hold it forward), and a <strong>U-shaped cleft palate</strong>. The jaw is the primary abnormality; glossoptosis and the cleft are downstream consequences. Airway obstruction from the retruded tongue is the presenting problem, not the palate itself. Management is a ladder:</p><ol><li><strong>Prone positioning</strong> (lets the tongue fall forward by gravity) and a nasopharyngeal airway, first-line for mild cases.</li><li><strong>Tongue-lip adhesion or mandibular distraction osteogenesis</strong>, for feeding difficulty, growth failure, or significant desaturations.</li><li><strong>Tracheostomy</strong>, reserved as a last resort.</li></ol><p><strong>Vascular ring and tracheomalacia</strong> both cause <strong>biphasic</strong> stridor (inspiratory and expiratory) rather than the predominantly inspiratory, positional stridor of laryngomalacia, and are often worse with feeding. A vascular ring (an aberrant great-vessel arrangement encircling the trachea and esophagus) can also cause feeding difficulty or 'dying spells' from esophageal compression. Where laryngomalacia is usually a clinical diagnosis, biphasic stridor warrants imaging (barium esophagram, CT/MR angiography) and often <strong>bronchoscopy</strong> to look for external tracheal compression rather than assuming a floppy larynx.</p>"
      },
      {
        id: "rrp-croup-mimic",
        title: "Recurrent respiratory papillomatosis: the stridor/hoarseness mimic of croup",
        html: "<p><strong>Recurrent respiratory papillomatosis (RRP)</strong>, introduced in Laryngology as an HPV-driven cause of hoarseness, has a distinct pediatric presentation worth knowing on its own. <strong>Juvenile-onset RRP</strong> is acquired <strong>perinatally</strong>, from a mother with genital HPV (types 6/11) during vaginal delivery, and typically presents between <strong>ages 2 and 4</strong> with progressive hoarseness that, as papillomas enlarge, can progress to stridor and airway compromise. Because it is slow and recurrent, it is easy to mistake for recurrent croup or asthma. A child with 'recurrent croup' that doesn't fit the usual single-episode viral pattern, or with progressive voice change alongside noisy breathing, deserves <strong>direct laryngoscopy</strong>, not another course of steroids. Disease burden is tracked with the <strong>Derkay staging system</strong>, and because papillomas regrow, management is <strong>repeated surgical debulking</strong> (microdebrider or CO2/KTP laser) rather than a single cure; adjuvant therapy (e.g., <strong>cidofovir</strong>, bevacizumab) is reserved for aggressive, rapidly recurring disease. The single biggest lever on juvenile-onset RRP is <strong>prevention</strong>: routine <strong>HPV vaccination</strong> lowers the prevalence of maternal genital HPV infection and, with it, the risk of perinatal transmission.</p>"
      }
    ],
    redFlags: [
      { t: "<b>Bilateral choanal atresia in a newborn</b>: an airway emergency (obligate nasal breathers), needing an oral airway/McGovern nipple and urgent ENT." },
      { t: "<b>Stridor with growth failure or severe apneic episodes</b> in a laryngomalacia-presenting infant: beyond the 'watch and wait' threshold, needing surgical evaluation (supraglottoplasty)." },
      { t: "<b>Congenital neck mass with rapid enlargement, fever, or fluctuance</b>: suggests an infected branchial cleft cyst or abscess." },
      { t: "<b>Missed 1-3-6 hearing-screening window</b>: delayed diagnosis and intervention measurably worsens speech-language outcomes." },
      { t: "<b>Midline neck mass planned for excision without thyroid imaging</b>: must exclude ectopic thyroid first, since a thyroglossal duct cyst excision (Sistrunk) assumes normal thyroid tissue exists elsewhere." },
      { t: "<b>Worsening stridor over weeks with cutaneous hemangiomas</b>: consider subglottic hemangioma (biphasic growth) and the PHACE syndrome association." },
      { t: "<b>Torticollis, neck pain, and refusal to move the neck in a young child</b>: think retropharyngeal abscess or deep neck infection, not just muscular torticollis." },
      { t: "<b>Untreated pediatric OSA</b>: can progress to growth failure, behavioral/attention problems, and, rarely, cor pulmonale if severe and prolonged." },
      { t: "<b>Pierre Robin sequence with feeding difficulty, growth failure, or desaturations</b>: beyond what prone positioning and a nasopharyngeal airway can manage, needing escalation to tongue-lip adhesion or mandibular distraction rather than more time in the prone position." },
      { t: "<b>Progressive hoarseness with new stridor in a toddler, especially if repeatedly labeled 'croup'</b>: think recurrent respiratory papillomatosis and get a laryngoscopy rather than repeating steroids." }
    ]
  },

  /* ==================== CASES TAB ==================== */
  cases: [
    {
      id: "case-choanal-atresia",
      ukmla: "Nasal obstruction",
      source: "Standard pediatric otolaryngology teaching on choanal atresia.",
      stem: "A newborn has episodes of <b>cyanosis at rest that resolve with crying</b>, and repeated attempts to pass a nasal catheter fail bilaterally.",
      prompts: [
        { q: "What is happening, and why does crying help?", a: "Newborns are <b>obligate nasal breathers</b>; <b>bilateral choanal atresia</b> blocks the nasal airway, and crying opens the mouth, allowing oral breathing and relieving the cyanosis." },
        { q: "What is the immediate management, and what association should be considered?", a: "Secure an oral airway (e.g., a McGovern nipple) urgently and get ENT involved. Screen for the <b>CHARGE association</b> (Coloboma, Heart defects, Atresia choanae, Retarded growth, Genital abnormalities, Ear abnormalities)." }
      ],
      teaching: "A newborn whose cyanosis improves with crying and worsens at rest has an obstructed nose until proven otherwise. Bilateral choanal atresia is an airway emergency in this age group specifically."
    },
    {
      id: "case-recurrent-aom",
      ukmla: "Painful ear",
      source: "AAO-HNSF Clinical Practice Guideline: Tympanostomy Tubes in Children (Update), 2022.",
      stem: "A <b>4-year-old</b> has had 6 episodes of acute otitis media in the past 12 months, each treated with antibiotics, with persistent effusion noted between episodes.",
      prompts: [
        { q: "Does this meet criteria for surgical intervention, and what would it be?", a: "This approaches the <b>recurrent AOM</b> threshold (historically referenced against the Paradise criteria, ~7/year). Combined with persistent effusion, this supports <b>tympanostomy tube placement</b>, which reduces episode frequency and severity and treats the effusion's hearing impact directly." },
        { q: "What would push you toward T&A instead of, or in addition to, tubes?", a: "If there were also <b>obstructive symptoms</b> (snoring, sleep-disordered breathing) from adenotonsillar hypertrophy, adenoidectomy (± tonsillectomy) would be added, since obstructive sleep-disordered breathing is now the leading indication for T&A in children." }
      ],
      teaching: "Recurrent AOM plus persistent effusion is a tympanostomy-tube conversation; add T&A to the conversation only if there's also an obstructive component."
    },
    {
      id: "case-failed-newborn-screen",
      ukmla: "Hearing loss",
      source: "Standard pediatric audiology teaching: the 1-3-6 rule.",
      stem: "A newborn fails the automated ABR hearing screen before hospital discharge. The parents are told 'it's probably just fluid, don't worry about it.'",
      prompts: [
        { q: "Is that reassurance appropriate?", a: "Not without a defined follow-up plan. A failed screen requires <b>diagnostic audiologic testing by 3 months of age</b>; dismissing it risks missing the window for early intervention." },
        { q: "What happens if hearing loss is confirmed?", a: "<b>Intervention (amplification, early intervention services) should begin by 6 months</b>. The full '1-3-6' timeline (screen by 1 month, diagnose by 3, intervene by 6) exists because early intervention measurably improves speech-language outcomes." }
      ],
      teaching: "A failed newborn hearing screen is not a reassurance conversation. It's the start of a time-sensitive diagnostic pathway."
    },
    {
      id: "case-thyroglossal-cyst",
      ukmla: "Neck lump",
      source: "Standard pediatric otolaryngology teaching on thyroglossal duct cysts.",
      stem: "A <b>3-year-old</b> has a painless midline neck swelling that moves upward when he sticks out his tongue.",
      prompts: [
        { q: "What is the leading diagnosis, and what confirms it clinically?", a: "<b>Thyroglossal duct cyst</b>. The movement with tongue protrusion (and with swallowing) reflects its embryologic attachment along the thyroglossal duct tract." },
        { q: "What must be done before surgery, and why?", a: "<b>Thyroid ultrasound (± thyroid function tests)</b> to confirm normal thyroid tissue is present in its usual location. In a minority of cases the cyst contains the patient's only functioning thyroid tissue, and removing it without checking could cause surgical hypothyroidism. Definitive treatment is the <b>Sistrunk procedure</b>." }
      ],
      teaching: "Don't excise a midline neck cyst without imaging the thyroid first. 'It's probably just a thyroglossal cyst' still needs that one confirmatory step."
    },
    {
      id: "case-laryngomalacia-vs-hemangioma",
      ukmla: "Stridor",
      source: "Standard pediatric airway teaching on laryngomalacia and subglottic hemangioma.",
      stem: "A <b>6-week-old</b> has inspiratory stridor, worse when feeding and lying supine, present since 2 weeks of age. He is gaining weight normally.",
      prompts: [
        { q: "What is the most likely diagnosis, and what is the expected course?", a: "<b>Laryngomalacia</b>, the most common cause of infant stridor, positional and feeding-related, and typically <b>self-resolves by 12-18 months</b>. Reassurance and monitoring growth is appropriate for mild cases." },
        { q: "What change in this picture would make you reconsider, and what would you consider instead?", a: "<b>Worsening</b> stridor over weeks (rather than stable/improving), growth failure, or cutaneous hemangiomas elsewhere should raise concern for a <b>subglottic hemangioma</b> (biphasic growth pattern, can rapidly enlarge) and its association with <b>PHACE syndrome</b>. This needs direct airway evaluation, not reassurance." }
      ],
      teaching: "Stable or improving stridor in a thriving infant is reassuring for laryngomalacia; worsening stridor is a reason to look for something else, not to wait longer."
    },
    {
      id: "case-pierre-robin",
      ukmla: "Stridor",
      source: "Standard pediatric craniofacial airway teaching on Pierre Robin sequence.",
      stem: "A newborn has a <b>very small, retruded jaw</b>, a <b>U-shaped cleft palate</b> noted on newborn exam, and noisy, obstructed breathing that improves somewhat prone but still shows intermittent desaturations and difficulty completing feeds.",
      prompts: [
        { q: "What is the diagnosis, and what actually causes the airway obstruction?", a: "<b>Pierre Robin sequence</b>. Micrognathia is the primary abnormality; the small jaw can't hold the tongue forward, so <b>glossoptosis</b> (the tongue falling posteriorly) obstructs the airway. The U-shaped cleft palate is a downstream consequence, not the cause of obstruction." },
        { q: "Given ongoing desaturations and feeding difficulty despite prone positioning, what's next?", a: "This has moved beyond first-line positioning and nasopharyngeal airway. Escalate to <b>tongue-lip adhesion or mandibular distraction osteogenesis</b> to relieve the obstruction; tracheostomy is reserved for cases that fail this step." }
      ],
      teaching: "In Pierre Robin sequence the jaw is the problem and the tongue is the airway threat. The palate cleft comes along for the ride, and persistent desaturations mean positioning alone has failed."
    },
    {
      id: "case-rrp-mimic-croup",
      ukmla: "Stridor",
      source: "Standard pediatric laryngology teaching on recurrent respiratory papillomatosis.",
      stem: "A <b>3-year-old</b> has had four episodes of 'croup' over 8 months, each treated with steroids and racemic epinephrine with only partial improvement. Between episodes his voice has become progressively more hoarse, and his parents now notice noisy breathing even when he's calm.",
      prompts: [
        { q: "What should make you doubt the recurrent-croup label?", a: "True viral croup is typically a single self-limited illness following a URI, not four recurrences with progressively worsening interval hoarseness. That pattern instead fits <b>recurrent respiratory papillomatosis (RRP)</b>." },
        { q: "What's the next step, and how did he most likely acquire it?", a: "<b>Direct laryngoscopy</b> to look for papillomas, not another course of steroids. Juvenile-onset RRP is acquired <b>perinatally</b> from maternal genital HPV (types 6/11) during vaginal delivery." }
      ],
      teaching: "Progressive interval hoarseness plus recurrent 'croup' that doesn't fit the usual viral pattern is a laryngoscopy indication, not a repeat-steroids indication."
    },
    {
      id: "case-pediatric-airway-foreign-body",
      ukmla: "Stridor",
      source: "Standard pediatric airway teaching on foreign body aspiration; AAP clinical guidance on pediatric foreign-body management.",
      stem: "A <b>20-month-old</b> is brought in with a <b>2-week history</b> of persistent cough and intermittent wheeze that hasn't improved with an albuterol trial. His mother recalls no choking episode, though he was playing near a bowl of popcorn and small toy blocks around when the cough began. He is afebrile and well-grown; a chest X-ray was read as <b>normal</b>.",
      prompts: [
        { q: "Does the absence of a witnessed choking event, or a normal chest X-ray, rule out foreign body aspiration?", a: "No. <b>Pediatric airway foreign body aspiration</b> peaks between <b>ages 1 and 3 years</b>, when children explore orally and lack molars to fully chew, and caregivers often never witness the event. The classic triad (cough, wheeze, and decreased breath sounds) is frequently <b>incomplete or absent</b>, especially once the acute phase passes. Most aspirated foreign bodies (peanuts, popcorn, toy fragments) are <b>radiolucent</b>, so a normal plain film does not exclude the diagnosis." },
        { q: "What imaging beyond a standard inspiratory chest X-ray would help, and what are you looking for?", a: "<b>Inspiratory-expiratory films</b> (or a <b>lateral decubitus</b> series in a child too young to cooperate) looking for <b>air-trapping</b>: a ball-valve effect where the affected lung fails to deflate on expiration (or the down lung fails to collapse in decubitus positioning), causing unilateral hyperinflation. The object itself is rarely seen; the indirect sign of trapped air is often the only clue." },
        { q: "Would it matter if the object were a button battery rather than a toy block or food item?", a: "Yes. This is the key organic/inorganic distinction. A <b>button battery</b> in the airway (or esophagus) is a <b>true emergency</b>: it causes <b>liquefactive necrosis</b> of surrounding tissue within hours via generated current, and needs emergent removal, not routine scheduling. <b>Organic material</b> (peanuts, other food) is not as immediately tissue-destructive but provokes an <b>intense local inflammatory reaction</b> the longer it sits, making removal progressively harder, so even 'routine' organic foreign bodies should not be delayed." },
        { q: "What is the definitive diagnostic and therapeutic step here, regardless of what the imaging shows?", a: "<b>Rigid bronchoscopy</b> under general anesthesia. It is both diagnostic (directly visualizes the airway) and therapeutic (allows controlled extraction with rigid grasping forceps while maintaining ventilation). A high-suspicion history (even without positive imaging) is enough to proceed to bronchoscopy; imaging supports the decision but a negative film should not stop it." }
      ],
      teaching: "Pediatric airway foreign body aspiration peaks at ages 1-3, the classic triad is often absent, and most objects are radiolucent. A normal CXR doesn't clear the diagnosis, and rigid bronchoscopy remains both the definitive test and the treatment."
    },
    {
      id: "case-pediatric-retropharyngeal-abscess",
      ukmla: "Neck lump",
      source: "Standard pediatric otolaryngology teaching on deep neck space infections; AAP/AAO-HNSF guidance on pediatric retropharyngeal abscess.",
      stem: "A <b>3-year-old</b> has had <b>4 days of fever</b> and reduced oral intake following a recent upper respiratory infection. On exam she holds her neck <b>rigidly extended</b> and cries when you try to flex or rotate it, her voice sounds <b>muffled</b>, and she is <b>drooling</b>.",
      prompts: [
        { q: "What diagnosis fits neck stiffness, muffled voice, and drooling in a young febrile child, and why does she extend rather than flex her neck?", a: "<b>Retropharyngeal abscess</b>, typically a disease of children <b>under 6 years</b>, arising when a preceding URI/pharyngitis seeds the retropharyngeal lymph nodes, which suppurate. The child <b>extends</b> the neck to maximize airway calibre and avoid pressure on the inflamed prevertebral space; flexion and rotation are painful, producing torticollis and neck stiffness that can be mistaken for meningitis or muscular torticollis." },
        { q: "What would a lateral neck X-ray show, and what's a simple threshold to remember?", a: "<b>Widened prevertebral soft tissue</b>, classically cited as <b>&gt;7mm at C2</b> or <b>&gt;14mm at C6</b> in a child, though a simpler pediatric rule of thumb is comparing the prevertebral soft-tissue width to the width of the adjacent vertebral body: soft tissue clearly wider than the vertebral body it sits against is abnormal. A lateral neck film is a useful, quick screening test but is not definitive on its own." },
        { q: "What is the definitive imaging study, and what key distinction must it make?", a: "<b>Contrast-enhanced CT of the neck</b>. It distinguishes a discrete, drainable <b>abscess</b> (a rim-enhancing fluid collection) from <b>phlegmon</b> (diffuse inflammatory infiltration without an organized collection), a distinction that directly changes management." },
        { q: "How does management differ between phlegmon and a true abscess?", a: "<b>Phlegmon</b> can often be managed with <b>IV antibiotics alone</b> and close observation, since there is no collection to drain. A well-defined or enlarging <b>abscess</b>, especially with airway compromise, sepsis, or failure to improve on antibiotics, needs <b>surgical incision and drainage</b> in addition to IV antibiotics." }
      ],
      teaching: "Pediatric retropharyngeal abscess presents in a child typically under 6 with fever, neck stiffness/torticollis, muffled voice, and drooling after a preceding URI; a widened prevertebral space on lateral X-ray screens for it, but contrast CT is what separates a drainable abscess from phlegmon and decides whether surgery joins IV antibiotics."
    }
  ],

  /* ==================== CARDS TAB ==================== */
  cards: [
    { id:"peds-airway-anatomy-card", tags: ["PE", "anatomy"], milestones:["MK1","PC7"], ukmla:"Stridor", source:"Standard pediatric airway anatomy teaching.", front:"Name three ways a child's airway anatomy differs from an adult's, and why it matters.",
      back:"<strong>Funnel-shaped</strong> (narrowest at the subglottis, not the glottis), larynx <strong>more cephalad</strong> (~C3-4), and a <strong>larger tongue/tonsils relative to airway size</strong> with a floppier, omega-shaped epiglottis. Together, these mean small amounts of airway edema cause disproportionately severe obstruction compared to an adult.<figure class='note-fig' data-credit=\"Pediatric vs. Adult Airway Anatomy and Geometric Differences. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/67_pediatric_vs_adult_airway_gemini.png' alt='Pediatric vs adult airway anatomy' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Pediatric versus adult airway anatomy and geometric differences.</figcaption></figure>" },
    { id:"et-tube-child-card", tags: ["PE", "anatomy"], milestones:["MK1","PC7"], ukmla:"Painful ear", source:"Standard pediatric otologic anatomy teaching.", front:"Why does a child's Eustachian tube anatomy predispose to otitis media?",
      back:"It is <strong>shorter, more horizontal, and less angled</strong> than an adult's, draining the middle ear less efficiently and allowing nasopharyngeal secretions to reflux more easily. This is why otitis media is predominantly a disease of early childhood.<figure class='note-fig' data-credit=\"Pediatric vs. Adult Eustachian Tube Orientation and Drainage. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/68_pediatric_vs_adult_eustachian_tube_gemini.png' alt='Pediatric vs adult eustachian tube' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Pediatric versus adult eustachian tube orientation and drainage.</figcaption></figure>" },
    { id:"waldeyers-ring-card", tags: ["PE", "anatomy"], milestones:["MK1","PC7"], ukmla:"Sore throat", source:"Standard pediatric anatomy teaching.", front:"What structures make up Waldeyer's ring?",
      back:"<strong>Adenoids</strong> (nasopharyngeal tonsil), paired <strong>palatine tonsils</strong>, and the <strong>lingual tonsil</strong>: a ring of lymphoid tissue at the aerodigestive entrance that hypertrophies with recurrent antigen exposure in childhood.<figure class='note-fig' data-credit=\"Waldeyer's Ring of Lymphoid Tissue. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/70_waldeyers_ring_lymphoid_gemini.png' alt='Waldeyer's ring' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Waldeyer's ring of lymphoid tissue.</figcaption></figure>" },
    { id:"branchial-cleft-anatomy-card", tags: ["PE", "anatomy"], milestones:["MK1","PC7"], ukmla:"Neck lump", source:"Standard pediatric embryology teaching.", front:"Where does a second branchial cleft anomaly classically track, and where does it present?",
      back:"From a pit/sinus <strong>anterior to the sternocleidomastoid</strong> in the lower neck, tracking along the carotid sheath up toward the <strong>tonsillar fossa</strong>. This is the anatomic basis for the classic branchial cleft cyst location." },
    { id:"ome-vs-aom-card", tags: ["PE", "clinical"], milestones:["PC7","PC4"], ukmla:"Painful ear", source:"AAP Clinical Practice Guideline: Otitis Media with Effusion.", front:"Distinguish OME from AOM, and state first-line management for each.",
      back:"<strong>OME:</strong> fluid behind an intact TM without acute infection signs, often asymptomatic. First-line is <strong>watchful waiting</strong> (most resolve in weeks). <strong>AOM:</strong> a bulging, erythematous TM with acute symptoms (otalgia, fever), managed with observation or <strong>amoxicillin</strong> depending on age and severity." },
    { id:"aom-treatment-card", tags: ["PE", "pharm"], milestones:["SBP3","PC7"], ukmla:"Painful ear", source:"AAP Clinical Practice Guideline: Diagnosis and Management of Acute Otitis Media, 2013.", front:"What determines whether a child with AOM gets watchful waiting vs immediate antibiotics?",
      back:"<strong>Age</strong> (under 6 months: treat), <strong>severity</strong> (severe symptoms, bilateral disease, or otorrhea favor treatment), and <strong>certainty of diagnosis</strong>. Older, healthier children with mild unilateral disease and reliable follow-up may qualify for a 48-72h <strong>watchful waiting</strong> period before antibiotics. First-line when treating: <strong>amoxicillin</strong>." },
    { id:"tna-indications-card", tags: ["PE", "clinical"], milestones:["PC7","PC9"], ukmla:"Sore throat", source:"AAO-HNSF Clinical Practice Guideline: Tonsillectomy in Children (Update), 2019.", front:"What are the two main indication categories for pediatric tonsillectomy/adenoidectomy?",
      back:"<strong>Recurrent infection</strong> meeting frequency criteria (historically referenced against the Paradise criteria: ~7/yr, 5/yr×2yrs, or 3/yr×3yrs), and <strong>obstructive sleep-disordered breathing/OSA</strong> from adenotonsillar hypertrophy, now the <strong>leading indication</strong> for T&A in current practice." },
    { id:"ear-tubes-card", tags: ["PE", "clinical"], milestones:["PC7","PC4"], ukmla:"Painful ear", source:"AAO-HNSF Clinical Practice Guideline: Tympanostomy Tubes in Children (Update), 2022.", front:"What are the indications for tympanostomy tube placement?",
      back:"<strong>Recurrent AOM</strong> (with intervening effusion), or <strong>persistent OME ≥3 months</strong> with associated hearing loss or other concern (speech delay, at-risk child). Tubes ventilate the middle ear and reduce both infection frequency and effusion-related hearing impact." },
    { id:"newborn-hearing-screen-card", tags: ["PE", "clinical"], milestones:["PC7","PC4"], ukmla:"Hearing loss", source:"Standard pediatric audiology teaching: the 1-3-6 rule.", front:"State the '1-3-6 rule' for newborn hearing screening.",
      back:"<strong>Screen</strong> by <strong>1 month</strong> (universal newborn hearing screening, using OAE or automated ABR), <strong>diagnose</strong> by <strong>3 months</strong> if screening fails, <strong>intervene</strong> (amplification/early intervention) by <strong>6 months</strong>. Missing this window measurably worsens speech-language outcomes." },
    { id:"congenital-hl-causes-card", tags: ["PE", "clinical"], milestones:["PC7","MK3"], ukmla:"Hearing loss", source:"Standard pediatric audiology/genetics teaching.", front:"What are the leading causes of congenital sensorineural hearing loss?",
      back:"<strong>Genetic</strong> (most common single cause: <strong>connexin 26 / GJB2</strong> mutations), <strong>congenital CMV infection</strong> (leading non-genetic/infectious cause), and <strong>syndromic</strong> causes (Usher, Waardenburg, Pendred syndromes among others)." },
    { id:"congenital-neck-mass-card", tags: ["PE", "clinical"], milestones:["PC7","PC3"], ukmla:"Neck lump", source:"Standard pediatric otolaryngology teaching on congenital neck masses.", front:"Use location to differentiate congenital neck masses.",
      back:"<strong>Midline</strong> → thyroglossal duct cyst (moves with tongue protrusion). <strong>Lateral, anterior to SCM</strong> → branchial cleft cyst. <strong>Posterior triangle</strong> → cystic hygroma/lymphatic malformation. <strong>Preauricular</strong> → preauricular pit/sinus." },
    { id:"thyroglossal-cyst-card", tags: ["PE", "clinical"], milestones:["PC7","PC3"], redFlag:true, ukmla:"Neck lump", source:"Standard pediatric otolaryngology teaching.", front:"What must be confirmed before excising a suspected thyroglossal duct cyst, and what is the definitive operation?",
      back:"Confirm <strong>normal thyroid tissue exists in its usual location</strong> (ultrasound ± thyroid function), since the cyst may be the patient's only functioning thyroid tissue. Definitive treatment is the <strong>Sistrunk procedure</strong> (removes the cyst, the central hyoid bone segment, and the tract to the tongue base to minimize recurrence)." },
    { id:"branchial-cleft-cyst-card", tags: ["PE", "clinical"], milestones:["PC7","PC3"], ukmla:"Neck lump", source:"Standard pediatric otolaryngology teaching.", front:"What is the most common branchial cleft anomaly, and where does it present?",
      back:"A <strong>second branchial cleft</strong> anomaly, presenting as a cyst, sinus, or fistula <strong>anterior to the sternocleidomastoid</strong>, sometimes tracking toward the tonsillar fossa. Can become infected and present acutely as a tender, enlarging neck mass." },
    { id:"choanal-atresia-card", tags: ["PE", "clinical"], milestones:["PC7","PC1"], redFlag:true, ukmla:"Nasal obstruction", source:"Standard pediatric otolaryngology teaching.", front:"Why is bilateral choanal atresia an emergency, and what association should be screened for?",
      back:"Newborns are <strong>obligate nasal breathers</strong>, so bilateral atresia causes cyclical cyanosis at rest that improves with crying. Secure an oral airway urgently and screen for the <strong>CHARGE association</strong> (Coloboma, Heart defects, Atresia choanae, Retarded growth, Genital/ear abnormalities)." },
    { id:"laryngomalacia-card", tags: ["PE", "clinical"], milestones:["PC7","PC6"], ukmla:"Stridor", source:"Standard pediatric airway teaching on laryngomalacia.", front:"What is laryngomalacia, and what is its typical course?",
      back:"The <strong>most common cause of stridor in infants</strong>: collapse of floppy supraglottic structures on inspiration, worse when <strong>supine, feeding, or crying</strong>. Typically <strong>self-resolves by 12-18 months</strong>; severe cases with growth failure or significant apnea need surgery (supraglottoplasty)." },
    { id:"subglottic-hemangioma-card", tags: ["PE", "clinical"], milestones:["PC7","PC6"], redFlag:true, ukmla:"Stridor", source:"Standard pediatric airway teaching on subglottic hemangioma.", front:"What should make you reconsider a diagnosis of simple laryngomalacia in favor of subglottic hemangioma?",
      back:"<strong>Worsening</strong> (rather than stable/improving) stridor over weeks, a <strong>biphasic growth pattern</strong> typical of infantile hemangiomas, and <strong>cutaneous hemangiomas elsewhere</strong> raising concern for <strong>PHACE syndrome</strong>. Needs direct airway evaluation; first-line medical treatment is <strong>propranolol</strong>." },
    { id:"peds-osa-card", tags: ["PE", "clinical"], milestones:["PC7","PC9"], ukmla:["Snoring","Obstructive sleep apnoea"], source:"Standard pediatric sleep medicine teaching.", front:"What is the leading cause of pediatric OSA, and the first-line treatment?",
      back:"<strong>Adenotonsillar hypertrophy</strong> is the leading cause, unlike adult OSA, which is driven more by obesity and soft-tissue redundancy. First-line treatment is <strong>adenotonsillectomy</strong>, not CPAP, which is the adult first-line." },
    { id:"cleft-lip-palate-card", tags: ["PE", "clinical"], milestones:["PC7","SBP2"], scope:"sub-I", ukmla:"Neck lump", source:"Standard pediatric craniofacial teaching.", front:"Cleft palate disrupts normal <span class=\"cloze-blank\">[...]</span>, causing a very high rate of chronic otitis media with effusion, so most affected children need tympanostomy tubes.",
      back:"Cleft palate disrupts normal <mark class=\"cloze-answer\">Eustachian tube function</mark>, causing a very high rate of chronic otitis media with effusion, so most affected children need tympanostomy tubes. Repair is staged: lip around 3 months, palate around 12 months, by a multidisciplinary craniofacial team." },
    { id:"peds-fb-card", tags: ["PE", "clinical"], milestones:["PC7","PC1"], redFlag:true, ukmla:"Ear and nasal discharge", source:"AAP clinical guidance on pediatric foreign bodies; National Capital Poison Center button-battery data.", front:"A <span class=\"cloze-blank\">[...]</span> lodged in the nose, ear canal, or esophagus is a time-critical emergency, causing liquefactive necrosis within hours.",
      back:"A <mark class=\"cloze-answer\">button battery</mark> lodged in the nose, ear canal, or esophagus is a time-critical emergency, causing liquefactive necrosis within hours. Toddlers are the peak age group for foreign bodies generally, since they explore orally and manually without judgment." },
    { id:"peds-neck-infection-card", tags: ["PE", "clinical"], milestones:["PC7","PC1"], redFlag:true, ukmla:"Neck lump", source:"Standard pediatric otolaryngology teaching on deep neck infections.", front:"What presentation in a young child should make you consider retropharyngeal abscess rather than simple torticollis?",
      back:"<strong>Torticollis with neck pain, refusal to move or extend the neck, fever, and drooling/odynophagia</strong>. This combination points to a <strong>deep neck space infection</strong> (retropharyngeal abscess), not benign muscular torticollis, and warrants urgent imaging (contrast CT neck) and ENT involvement." },
    { id:"microtia-aural-atresia-card", tags: ["PE", "clinical"], milestones:["PC7","PC4"], ukmla:"Hearing loss", source:"Standard pediatric otologic teaching on aural atresia and microtia.", front:"In congenital aural atresia, unilateral cases with a normal contralateral ear can be worked up electively, while <span class=\"cloze-blank\">[...]</span> atresia is urgent because it causes significant conductive hearing loss from birth.",
      back:"In congenital aural atresia, unilateral cases with a normal contralateral ear can be worked up electively, while <mark class=\"cloze-answer\">bilateral</mark> atresia is urgent because it causes significant conductive hearing loss from birth. Bilateral cases need audiologic assessment and amplification right away, since the 1-3-6 hearing timeline still applies." },
    { id:"congenital-cholesteatoma-card", tags: ["PE", "clinical"], milestones:["PC7","PC4"], ukmla:"Hearing loss", source:"Standard pediatric otologic teaching on congenital cholesteatoma.", front:"Congenital cholesteatoma forms behind an <span class=\"cloze-blank\">[...]</span>, in a child with no history of otitis media, perforation, or ear surgery.",
      back:"Congenital cholesteatoma forms behind an <mark class=\"cloze-answer\">intact, normal-looking tympanic membrane</mark>, in a child with no history of otitis media, perforation, or ear surgery. It's often found incidentally, as a pearly-white mass or conductive hearing loss, rather than the foul otorrhea typical of acquired disease." },
    { id:"bone-anchored-hearing-device-card", tags: ["PE", "clinical"], milestones:["PC7","PC4"], ukmla:"Hearing loss", source:"Standard pediatric audiology teaching on bone-conduction amplification.", front:"In bilateral aural atresia, a <span class=\"cloze-blank\">[...]</span> hearing device transmits sound vibration directly through the skull to the inner ear, bypassing the atretic canal and middle ear entirely.",
      back:"In bilateral aural atresia, a <mark class=\"cloze-answer\">bone-conduction</mark> hearing device transmits sound vibration directly through the skull to the inner ear, bypassing the atretic canal and middle ear entirely. It bridges hearing access until surgical ear canal reconstruction is feasible, typically around age 6." },
    { id:"pediatric-osa-ahi-card", tags: ["PE", "clinical"], milestones:["PC7","PC9"], ukmla:["Obstructive sleep apnoea","Snoring"], source:"AAP Clinical Practice Guideline: Diagnosis and Management of Childhood Obstructive Sleep Apnea Syndrome, 2012 (reaffirmed); AASM pediatric scoring criteria.", front:"What obstructive AHI defines OSA in a child, and how does it compare to the adult threshold?",
      back:"An obstructive <strong>AHI ≥1 event/hour</strong> on polysomnography is abnormal in a child, far lower than the adult threshold of <strong>≥5/hour</strong> (see Sleep Surgery &amp; OSA track). PSG remains the gold standard, though many children proceed straight to adenotonsillectomy on a strong clinical picture without a preoperative sleep study." },
    { id:"peds-osa-post-ta-card", tags: ["PE", "clinical"], milestones:["PC7","PC9"], redFlag:true, ukmla:["Obstructive sleep apnoea","Snoring"], source:"Standard pediatric sleep medicine teaching on residual OSA after adenotonsillectomy.", front:"Children with <span class=\"cloze-blank\">[...]</span> are at high risk of persistent OSA after adenotonsillectomy, due to macroglossia, midface hypoplasia, and hypotonia, and should get a postoperative polysomnogram rather than being assumed cured.",
      back:"Children with <mark class=\"cloze-answer\">Down syndrome</mark> are at high risk of persistent OSA after adenotonsillectomy, due to macroglossia, midface hypoplasia, and hypotonia, and should get a postoperative polysomnogram rather than being assumed cured. Obesity, other craniofacial syndromes, and severe preoperative AHI also raise this risk." },
    { id:"pierre-robin-sequence-card", tags: ["PE", "clinical"], milestones:["PC7","PC1"], redFlag:true, ukmla:"Stridor", source:"Standard pediatric craniofacial airway teaching on Pierre Robin sequence.", front:"In Pierre Robin sequence, the airway obstruction is caused by <span class=\"cloze-blank\">[...]</span>, the tongue falling posteriorly because the small jaw cannot hold it forward, not by the cleft palate itself.",
      back:"In Pierre Robin sequence, the airway obstruction is caused by <mark class=\"cloze-answer\">glossoptosis</mark>, the tongue falling posteriorly because the small jaw cannot hold it forward, not by the cleft palate itself. Micrognathia is the primary abnormality, and the cleft palate is a downstream consequence." },
    { id:"vascular-ring-tracheomalacia-card", tags: ["PE", "clinical"], milestones:["PC7","PC6"], ukmla:"Stridor", source:"Standard pediatric airway teaching on vascular ring and tracheomalacia.", front:"Vascular ring and tracheomalacia both cause <span class=\"cloze-blank\">[...]</span> stridor, inspiratory and expiratory, unlike the predominantly inspiratory, positional stridor of laryngomalacia.",
      back:"Vascular ring and tracheomalacia both cause <mark class=\"cloze-answer\">biphasic</mark> stridor, inspiratory and expiratory, unlike the predominantly inspiratory, positional stridor of laryngomalacia. Biphasic stridor warrants imaging, such as a barium esophagram or CT/MR angiography, rather than assuming a floppy larynx." },
    { id:"rrp-pediatric-card", tags: ["PE", "clinical"], milestones:["PC7","PC6"], ukmla:"Stridor", source:"Standard pediatric laryngology teaching on recurrent respiratory papillomatosis.", front:"Juvenile-onset recurrent respiratory papillomatosis is acquired <span class=\"cloze-blank\">[...]</span>, from a mother with genital HPV types 6/11 during vaginal delivery, and typically presents between ages 2 and 4 with progressive hoarseness that can advance to stridor.",
      back:"Juvenile-onset recurrent respiratory papillomatosis is acquired <mark class=\"cloze-answer\">perinatally</mark>, from a mother with genital HPV types 6/11 during vaginal delivery, and typically presents between ages 2 and 4 with progressive hoarseness that can advance to stridor. It's easily mistaken for recurrent croup, so progressive hoarseness with atypical 'croup' warrants direct laryngoscopy." },
    { id:"hpv-vaccine-rrp-prevention-card", tags: ["PE", "clinical"], milestones:["PC7","SBP1"], ukmla:"Stridor", source:"Standard public-health teaching on HPV vaccination and perinatal RRP transmission.", front:"How does HPV vaccination relate to preventing pediatric recurrent respiratory papillomatosis (RRP)?",
      back:"Juvenile-onset RRP is acquired perinatally from maternal genital HPV (types 6/11). Routine <strong>HPV vaccination</strong> lowers the prevalence of maternal genital HPV infection and, with it, the risk of perinatal transmission. It's a rare example of a vaccine given to one generation reducing a pediatric ENT disease in the next." }
  ]
});

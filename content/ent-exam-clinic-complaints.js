/* ent-exam-clinic-complaints.js — PILOT MODULE, "Foundations" track
 *
 * Scope: "clinical essentials for the ENT rotation" — exam skills first, then the
 * high-yield clinic complaints with their differentials and referral red flags.
 *
 * STATUS: DRAFT. Every card, case, table, and diagram below is a starting draft
 * written for the tool's structure. Content must be vetted by a JeffENT faculty
 * reviewer before the pilot launch — set `reviewer` on each item as it is signed off.
 * Curriculum anchors reference the AAO-HNS Otolaryngology Core Curriculum and the
 * program's chosen Delphi priority list; map the exact items with faculty.
 *
 * Shape follows docs/UI-SPEC.md — see content/tracks.js for the track registry.
 */
window.JEFFENT.register({
  id: "ent-exam",
  track: "foundations",
  trackName: "Foundations",
  trackAbbr: "FN",
  order: 1,
  title: "The ENT Exam & Top Clinic Complaints",
  subtitle: "Exam skills, high-yield differentials, and the red flags you cannot miss.",
  version: "0.1.0-draft",
  level: ["core"],
  status: "DRAFT — pending faculty review",
  facultyReviewer: "",                 // e.g. "A. Thal, MD — reviewed 2026-09-01"
  curriculumAnchors: [
    "AAO-HNS Otolaryngology Core Curriculum (medical student objectives)",
    "Delphi priority topic list — map exact items with faculty sponsor",
    "Jefferson ENT clerkship objectives — insert"
  ],

  /* ---------------- ANATOMY TAB ---------------- */
  anatomy: {
    notes: [
      {
        title: "Tympanic membrane landmarks",
        html: "<p>What you should be able to name on otoscopy, before the diagram:</p>" +
          "<ul><li><strong>Cone of light</strong> (light reflex) — antero-inferior</li>" +
          "<li><strong>Umbo</strong> — central, most depressed point</li>" +
          "<li><strong>Manubrium (handle) of malleus</strong> and the <strong>lateral process</strong></li>" +
          "<li><strong>Pars tensa</strong> (main membrane) and <strong>pars flaccida</strong> (superior)</li></ul>" +
          "<p>Note colour, translucency, contour, perforation, and mobility on every exam.</p>"
      },
      {
        title: "Sensory innervation of the ear",
        html: "<p>The ear canal and TM share sensory innervation with cranial nerves <strong>V, VII, IX, X</strong> " +
          "and cervical roots <strong>C2–C3</strong>. That overlap is why pain can be <em>referred</em> from the TMJ, " +
          "teeth, tonsils/pharynx, tongue base, or larynx into an ear that looks completely normal on exam.</p>"
      }
    ],
    diagrams: [
      {
        kind: "svg",
        id: "tm-right",
        title: "Right tympanic membrane — landmarks",
        note: "Schematic for label practice (DRAFT — confirm laterality/orientation with faculty before pilot). Hide the labels, name each landmark, then reveal to check.",
        viewBox: "0 0 360 360",
        base: '<ellipse cx="180" cy="188" rx="118" ry="142" fill="var(--surface-2)" stroke="var(--line)" stroke-width="2"/>'
           + '<ellipse cx="180" cy="188" rx="118" ry="142" fill="none" stroke="var(--primary)" stroke-width="1.4" opacity="0.5"/>'
           + '<path d="M176 78 Q168 140 180 198" fill="none" stroke="var(--ink-soft)" stroke-width="3" stroke-linecap="round"/>'
           + '<circle cx="176" cy="86" r="5" fill="var(--ink-soft)"/>'
           + '<path d="M180 198 L226 262 L206 270 Z" fill="var(--accent)" opacity="0.35"/>'
           + '<circle cx="180" cy="198" r="4" fill="var(--ink)"/>',
        labels: [
          { id: "l1", text: "Pars flaccida",              px: 180, py: 60,  lx: 180, ly: 34 },
          { id: "l2", text: "Lateral process of malleus", px: 176, py: 86,  lx: 56,  ly: 78 },
          { id: "l3", text: "Manubrium (malleus handle)", px: 174, py: 150, lx: 44,  ly: 170 },
          { id: "l4", text: "Umbo",                        px: 180, py: 198, lx: 270, ly: 196 },
          { id: "l5", text: "Pars tensa",                  px: 120, py: 250, lx: 36,  ly: 300 },
          { id: "l6", text: "Cone of light (reflex)",      px: 214, py: 262, lx: 250, ly: 322 }
        ]
      }
    ]
  },

  /* ---------------- CLINICAL TAB ---------------- */
  clinical: {
    blocks: [
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
        id: "exam-flow",
        title: "A quick ENT exam sequence",
        html: "<ul><li><strong>Ears:</strong> pinna/canal, otoscopy of both TMs, tuning forks if hearing concern.</li>" +
          "<li><strong>Nose:</strong> anterior rhinoscopy — septum, turbinates, mucosa, discharge, polyps.</li>" +
          "<li><strong>Oral cavity / oropharynx:</strong> dentition, tongue (lateral borders), floor of mouth, tonsils, palate elevation (CN IX/X).</li>" +
          "<li><strong>Neck:</strong> systematic nodal levels I–VI, thyroid, parotid, salivary glands.</li>" +
          "<li><strong>Cranial nerves:</strong> focused screen, especially <strong>CN VII</strong> with otologic complaints.</li></ul>"
      }
    ],
    redFlags: [
      { t: "<b>Sudden SNHL (&lt;72h)</b> — otologic emergency: urgent audiogram, steroids, MRI." },
      { t: "<b>Adult neck mass &gt;2–3 weeks</b> — malignancy until proven otherwise; FNA, not open biopsy first." },
      { t: "<b>Hoarseness &gt;2–4 weeks</b> (smoker/drinker) — laryngoscopy to exclude laryngeal cancer." },
      { t: "<b>Unilateral nasal obstruction + epistaxis</b> (adult) — exclude sinonasal neoplasm." },
      { t: "<b>Facial palsy with forehead sparing</b> — treat as central/stroke; forehead involved + ear disease — urgent ENT." },
      { t: "<b>Otalgia with a normal ear exam</b> in an adult smoker — referred pain; scope the aerodigestive tract." },
      { t: "<b>Airway signs</b> (stridor, drooling, tripod, muffled voice) — epiglottitis / deep neck infection; secure airway." }
    ]
  },

  /* ---------------- CASES TAB ---------------- */
  cases: [
    {
      id: "case-referred-otalgia",
      stem: "A <b>58-year-old man</b> with a 40 pack-year smoking history reports 3 weeks of <b>right ear pain</b>. Otoscopy is <b>completely normal</b> bilaterally. Hearing is intact.",
      prompts: [
        { q: "What category of otalgia is this, and what's your concern?",
          a: "Referred otalgia with a normal ear exam. In an older smoker this is a red flag for a head &amp; neck malignancy referring pain via CN V/VII/IX/X — base of tongue, tonsil, hypopharynx, or larynx." },
        { q: "What is the key next step?",
          a: "Refer for a full mucosal exam including flexible laryngoscopy; do not stop at a normal ear." }
      ],
      teaching: "Otalgia + normal ear exam in an adult smoker = scope the upper aerodigestive tract. The normal ear is the clue, not the reassurance."
    },
    {
      id: "case-sudden-snhl",
      stem: "A <b>34-year-old woman</b> notices her <b>right ear went muffled over a day</b>, with new ringing. No wax on exam. <b>Weber lateralizes to the left</b>; <b>Rinne is positive</b> bilaterally.",
      prompts: [
        { q: "What does the tuning-fork pattern tell you?",
          a: "Weber to the better (left) ear + positive Rinne on the right = a sensorineural pattern on the right, not conductive/wax." },
        { q: "Diagnosis and urgency?",
          a: "Sudden sensorineural hearing loss — an otologic emergency. Needs an urgent audiogram, early corticosteroids, and MRI to rule out retrocochlear pathology." }
      ],
      teaching: "Sudden SNHL is time-sensitive and frequently missed as 'just wax.' The bedside tuning-fork exam separates the two in seconds."
    },
    {
      id: "case-ped-fb",
      stem: "A <b>7-year-old</b> is brought in for <b>2 weeks of foul-smelling discharge from the LEFT nostril only</b>. The right side is clear.",
      prompts: [
        { q: "What is the most likely diagnosis?",
          a: "A nasal foreign body — unilateral, foul discharge in a child is a foreign body until proven otherwise." },
        { q: "Why does 'unilateral' matter so much here?",
          a: "Unilateral sinonasal symptoms shift the differential toward a structural/mechanical cause (FB in a child; neoplasm in an adult) rather than diffuse inflammatory rhinitis." }
      ],
      teaching: "'Unilateral' is one of the highest-yield words in ENT — it changes the differential in the nose, the ear, and the neck."
    }
  ],

  /* ---------------- CARDS TAB (active recall, SRS-scheduled) ---------------- */
  cards: [
    // --- Exam skills ---
    { id:"otoscope-pinna", tags:["Exam","Otoscopy"], front:"How do you position the pinna for otoscopy in an adult vs. a young child, and why?",
      back:"<strong>Adult:</strong> pull the pinna <strong>up and back</strong>. <strong>Young child:</strong> pull <strong>down and back</strong>. This straightens the cartilaginous ear canal for a clear view of the tympanic membrane. Brace your hand against the patient's cheek so the scope moves with the head." },
    { id:"tm-landmarks", tags:["Exam","Otoscopy"], front:"Name the normal landmarks of the tympanic membrane you should identify on otoscopy.", redFlag:false,
      back:"<ul><li><strong>Cone of light</strong> (light reflex) — antero-inferior</li><li><strong>Umbo</strong> — central, most depressed point</li><li><strong>Manubrium (handle) of malleus</strong> and the <strong>lateral process</strong></li><li><strong>Pars tensa</strong> (main membrane) and <strong>pars flaccida</strong> (superior)</li></ul>Note colour, translucency, contour, perforation, and mobility." },
    { id:"weber", tags:["Exam","Tuning fork"], front:"Describe the Weber test and how to interpret lateralization.",
      back:"Place a vibrating <strong>512 Hz</strong> fork on the vertex/forehead midline. <ul><li><strong>Conductive loss:</strong> sound lateralizes to the <strong>affected</strong> ear.</li><li><strong>Sensorineural loss:</strong> lateralizes to the <strong>better</strong> (unaffected) ear.</li><li>Normal/symmetric: midline.</li></ul>" },
    { id:"rinne", tags:["Exam","Tuning fork"], front:"Describe the Rinne test and what a 'negative' Rinne means.",
      back:"512 Hz fork on the <strong>mastoid</strong> (bone conduction) then beside the ear (air conduction). <ul><li><strong>Normal / SNHL:</strong> AC &gt; BC = <strong>positive</strong> Rinne.</li><li><strong>Conductive loss:</strong> BC &gt; AC = <strong>negative</strong> Rinne in the affected ear.</li></ul>Use Weber + Rinne together to localize the type of loss at the bedside." },
    { id:"fork-512", tags:["Exam","Tuning fork"], front:"Why is a 512 Hz tuning fork the standard for hearing tests?",
      back:"It balances vibration decay and tactile perception. <strong>256 Hz</strong> is felt too much as vibration (false positives for bone conduction); <strong>1024 Hz</strong> decays too quickly to compare reliably." },
    { id:"ant-rhinoscopy", tags:["Exam","Nose"], front:"What do you assess on anterior rhinoscopy?",
      back:"Using a nasal speculum + light: <strong>septum</strong> (deviation, perforation), <strong>inferior turbinates</strong> (hypertrophy, colour), <strong>mucosa</strong> (boggy/allergic vs. erythematous), <strong>discharge</strong> (clear, purulent, bloody), and <strong>masses/polyps</strong> (pale, insensate). Note unilateral vs. bilateral findings." },
    { id:"oropharynx-cn", tags:["Exam","Oral cavity"], front:"On the oral cavity / oropharynx exam, which cranial nerves are you screening and how?",
      back:"<ul><li><strong>CN IX/X:</strong> palate elevation and uvula midline on phonation ('ahh'); gag.</li><li><strong>CN XII:</strong> tongue protrusion — deviates <em>toward</em> a weak side.</li><li><strong>CN V/VII:</strong> facial sensation and symmetry.</li></ul>Also inspect tonsils, dentition, floor of mouth, and lateral tongue (common oral cancer sites)." },
    { id:"neck-levels", tags:["Exam","Neck"], front:"How do you structure the neck exam, and what nodal levels do you palpate?",
      back:"Systematic, region by region: <strong>levels I–VI</strong> (submental/submandibular, upper/middle/lower jugular, posterior triangle, central compartment), plus <strong>thyroid</strong>, <strong>parotid</strong>, and <strong>supraclavicular</strong> fossae. For any mass note <strong>size, site, consistency, mobility/fixation, tenderness, pulsatility</strong>." },
    { id:"scope-indication", tags:["Exam","Airway"], front:"Name common indications for flexible nasolaryngoscopy (done by ENT).",
      back:"Persistent <strong>hoarseness (&gt;2–4 weeks)</strong>, <strong>dysphagia/odynophagia</strong>, globus with red flags, <strong>neck mass</strong> (to inspect mucosal sites), stridor/airway concern, referred otalgia with a normal ear exam, and unexplained epistaxis/obstruction. Awareness-level for students; know when to <em>ask</em> for it." },

    // --- Otology complaints ---
    { id:"otalgia-referred", tags:["Ear","Differential"], front:"A patient has ear pain but a completely NORMAL ear exam. What must you consider?", redFlag:true,
      back:"<strong>Referred otalgia.</strong> The ear shares sensory innervation with CN <strong>V, VII, IX, X</strong> and C2–C3, so pain can be referred from the TMJ, teeth, tonsils/pharynx, tongue base, or larynx. <strong>In an adult smoker/drinker, otalgia + normal ear exam is a red flag for head &amp; neck malignancy → refer for laryngoscopy.</strong>" },
    { id:"otalgia-primary", tags:["Ear","Differential"], front:"What are the common PRIMARY causes of otalgia (pathology in the ear itself)?",
      back:"<strong>Otitis externa</strong> (pain on tragal traction, canal oedema/discharge), <strong>acute otitis media</strong> (bulging erythematous TM), cerumen impaction, TM perforation, and <strong>bullous myringitis</strong>. Distinguish from referred pain by the exam." },
    { id:"chl-vs-snhl", tags:["Ear","Hearing loss"], front:"Contrast the common causes of conductive vs. sensorineural hearing loss.",
      back:"<strong>Conductive:</strong> cerumen impaction, middle-ear effusion, TM perforation, otosclerosis, ossicular problems. <strong>Sensorineural:</strong> presbycusis, noise-induced, ototoxicity, sudden SNHL, and (if <strong>asymmetric</strong>) retrocochlear lesions like vestibular schwannoma." },
    { id:"sudden-snhl", tags:["Ear","Hearing loss","Emergency"], front:"Sudden sensorineural hearing loss — why is it an emergency and what is the workup?", redFlag:true,
      back:"<strong>Sudden SNHL = an otologic emergency.</strong> Defined as ≥30 dB loss over ≥3 contiguous frequencies within 72 hours. <ul><li>Bedside: Weber lateralizes to the <em>better</em> ear, Rinne positive — helps separate it from cerumen (conductive).</li><li>Do <strong>not</strong> dismiss as wax; get an <strong>urgent audiogram</strong>.</li><li>Treat early with <strong>corticosteroids</strong>; obtain <strong>MRI</strong> to evaluate for retrocochlear pathology.</li></ul>Time-sensitive — outcomes worsen with delay." },
    { id:"asymmetric-snhl", tags:["Ear","Hearing loss"], front:"Unilateral/asymmetric SNHL or one-sided tinnitus — what lesion must you exclude?", redFlag:true,
      back:"<strong>Vestibular schwannoma (acoustic neuroma)</strong> and other cerebellopontine-angle / retrocochlear lesions. Asymmetric sensorineural loss or unilateral tinnitus warrants <strong>MRI with contrast</strong> of the internal auditory canals." },
    { id:"vertigo-periph", tags:["Ear","Dizziness"], front:"Differentiate the classic peripheral vertigo syndromes: BPPV, vestibular neuritis, Ménière's.",
      back:"<ul><li><strong>BPPV:</strong> brief (seconds) vertigo triggered by head position; <strong>Dix–Hallpike</strong> reproduces it; treat with Epley.</li><li><strong>Vestibular neuritis:</strong> acute, constant vertigo lasting days, no hearing loss, often post-viral.</li><li><strong>Ménière's:</strong> episodic vertigo (minutes–hours) + <strong>fluctuating SNHL + tinnitus + aural fullness</strong>.</li></ul>" },
    { id:"central-vertigo", tags:["Ear","Dizziness","Emergency"], front:"What findings suggest a CENTRAL (dangerous) cause of vertigo rather than peripheral?", redFlag:true,
      back:"Red flags: direction-changing or vertical nystagmus, <strong>normal head-impulse test</strong>, gaze-evoked nystagmus, skew deviation (the <strong>HINTS</strong> exam), plus other neuro signs (dysarthria, diplopia, ataxia, focal deficits). These point to stroke/posterior fossa → urgent neuro-imaging." },

    // --- Rhinology / throat / airway ---
    { id:"nasal-obstruction", tags:["Nose","Differential"], front:"Work through the differential for chronic nasal obstruction.",
      back:"<strong>Allergic rhinitis</strong>, <strong>chronic rhinosinusitis</strong> (± polyps), <strong>septal deviation</strong>, turbinate hypertrophy, and (less common) neoplasm. Pattern matters: bilateral/variable suggests inflammatory; fixed unilateral raises structural or neoplastic concern." },
    { id:"unilateral-nose", tags:["Nose","Emergency"], front:"Unilateral nasal obstruction with bloody discharge in an adult — why worry? And in a child?", redFlag:true,
      back:"<strong>Adult:</strong> unilateral obstruction + epistaxis/bloody discharge is a red flag for <strong>sinonasal neoplasm</strong> — needs endoscopy ± imaging. <strong>Child:</strong> unilateral foul discharge is a <strong>nasal foreign body</strong> until proven otherwise (also consider choanal atresia in a neonate)." },
    { id:"epistaxis", tags:["Nose","Emergency"], front:"Anterior vs. posterior epistaxis — source and first-line management.",
      back:"<strong>Anterior (most common):</strong> <strong>Kiesselbach's plexus</strong> (Little's area). First aid: lean forward, firm sustained pressure on the cartilaginous nose 10–15 min ± topical vasoconstrictor; then cautery/packing. <strong>Posterior:</strong> heavier, often older/hypertensive/anticoagulated, higher airway risk — may need posterior packing and admission." },
    { id:"sore-throat-centor", tags:["Throat","Differential"], front:"How do you approach acute sore throat, and when is it more than pharyngitis?",
      back:"Most are <strong>viral</strong>. Use <strong>Centor/McIsaac</strong> criteria for likely GAS pharyngitis (fever, tonsillar exudate, tender anterior nodes, no cough). Escalate for red flags below." },
    { id:"pta", tags:["Throat","Emergency"], front:"What triad suggests a peritonsillar abscess, and what does it need?", redFlag:true,
      back:"<strong>Trismus</strong> (hard to open mouth), <strong>'hot potato' muffled voice</strong>, and <strong>uvular deviation</strong> away from a swollen peritonsillar region. Needs <strong>drainage</strong> (needle/I&amp;D) + antibiotics. Watch for airway compromise and spread to deep neck spaces." },
    { id:"airway-redflags", tags:["Throat","Airway","Emergency"], front:"Which sore-throat / airway red flags demand urgent evaluation?", redFlag:true,
      back:"<strong>Stridor, drooling, tripod positioning, muffled voice, severe odynophagia/inability to swallow, neck swelling/tenderness.</strong> Consider <strong>epiglottitis</strong> and <strong>deep neck space infection</strong> — do not examine the throat aggressively in a child with suspected epiglottitis; secure the airway first." },
    { id:"hoarseness", tags:["Throat","Emergency"], front:"When does hoarseness require laryngoscopy, and why?", redFlag:true,
      back:"<strong>Hoarseness persisting &gt;2–4 weeks</strong> — especially in a <strong>smoker/drinker</strong> — requires <strong>laryngoscopy to exclude laryngeal cancer</strong>. Also consider <strong>vocal fold paralysis</strong> (think about the recurrent laryngeal nerve course — lung apex, thyroid, mediastinum). Most acute hoarseness is viral laryngitis and self-limited." },

    // --- Neck / nerve ---
    { id:"neck-mass-adult", tags:["Neck","Emergency"], front:"What is the rule for a persistent neck mass in an adult?", redFlag:true,
      back:"<strong>A firm, persistent (&gt;2–3 weeks) neck mass in an adult is malignancy until proven otherwise.</strong> Evaluate mucosal sites (± laryngoscopy), obtain <strong>FNA</strong> and imaging. <strong>Avoid open excisional biopsy first</strong> — it can compromise later oncologic management. Congenital (branchial cleft, thyroglossal duct) and inflammatory causes are the main alternatives." },
    { id:"facial-palsy", tags:["Nerve","Emergency"], front:"How do you distinguish a central from a peripheral facial nerve palsy, and why does it matter?", redFlag:true,
      back:"<strong>Peripheral (LMN):</strong> involves the <strong>forehead</strong> (can't raise brow) — e.g., Bell's palsy (diagnosis of exclusion), or otologic causes (cholesteatoma, malignant otitis externa, tumour, parotid malignancy). <strong>Central (UMN):</strong> <strong>forehead spared</strong> → treat as <strong>stroke</strong> until proven otherwise. Facial weakness with ear disease is an ENT red flag." }
  ]
});

/* sleep.js, SLEEP SURGERY & OSA (subspecialty track)
 *
 * Deep dive on obstructive sleep apnea in adults: screening, polysomnography
 * interpretation, the CPAP-to-surgery ladder, and named surgical options.
 * Every card/case carries a UKMLA scope tag (content/ukmla.js), an ACGME
 * Milestone tag (content/frameworks.js), and a named source. Content written
 * to US practice standards (AASM, AAO-HNSF); UK/US differences flagged.
 * Pediatric OSA is covered in the Pediatric ENT track, this track is adult-focused.
 *
 * STATUS: DRAFT, pending JeffENT faculty review. See docs/MODULE-BUILD-STANDARD.md.
 */
window.JEFFENT.register({
  id: "sleep-osa",
  track: "sleep",
  trackName: "Sleep Surgery & OSA",
  trackAbbr: "SL",
  order: 6,
  title: "Sleep Surgery & OSA",
  subtitle: "Screening tools and polysomnography basics, plus the ladder from CPAP to named surgical options for adult obstructive sleep apnea.",
  version: "0.3.0-draft",
  level: ["core", "sub-I"],
  status: "DRAFT, pending faculty review. v0.2.0: added a PAP-therapy depth pass, formal CPAP titration methods (full-night/split-night/APAP) and the AASM/CMS adherence definition, a troubleshooting table for common non-adherence barriers (mask leak, claustrophobia, nasal congestion, pressure intolerance, mouth leak), BiPAP indications and overlap syndrome (OSA + COPD), treatment-emergent (complex) central sleep apnea, the limited/adjunctive role of nasal surgery in OSA (CPAP-tolerance only, not primary AHI reduction), and AASM's non-recommendation of LAUP/radiofrequency palatal ablation for OSA, grounded in the AASM Clinical Practice Guideline on PAP therapy, CMS PAP coverage criteria, and standard sleep/pulmonary medicine teaching; written fresh from guidelines and standard teaching, not derived from any single textbook.",
  facultyReviewer: "",
  curriculumAnchors: [
    "UKMLA Content Map (GMC), scope anchor; owns Snoring and Obstructive sleep apnoea at adult subspecialty depth (screening tools, PSG interpretation, surgical ladder)",
    "ACGME Otolaryngology-HNS Milestones 2.0, primarily PC6/PC9 (airway/surgical management)",
    "AASM Clinical Practice Guidelines on OSA diagnosis and management; AAO-HNSF Position Statement on OSA surgery",
    "UK undergraduate Delphi (Lloyd 2014), student-scope depth cap"
  ],
  frameworkAlignment: {
    competenciesCovered: ["PC", "MK", "SBP"],
    note: "Subspecialty depth at student scope (Delphi); goes deeper than Foundations on Snoring/OSA through screening tools, PSG basics, and the CPAP-to-surgery escalation ladder, not resident-level polysomnography scoring."
  },

  /* ==================== ANATOMY TAB ==================== */
  anatomy: {
    notes: [
      {
        title: "Sites of upper airway obstruction in OSA",
        html: "<figure class='note-fig' data-credit=\"OpenStax, Anatomy and Physiology 2e (Ch. 23). CC BY 4.0.\"><img class='zoomable' src='assets/img/head-neck/pharynx-regions-openstax.png' alt='Upper airway regions' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Retropalatal and retroglossal levels of the collapsible upper airway.</figcaption></figure><p>Collapse can occur at multiple levels, often more than one at once.</p><ul><li>The <strong>nasal cavity</strong> (septal deviation, turbinate hypertrophy) raises upstream resistance and drives CPAP intolerance.</li><li>The <strong>retropalatal region</strong> (soft palate, uvula, lateral pharyngeal walls) is the classic UPPP target.</li><li>The <strong>retroglossal/hypopharyngeal region</strong> (tongue base, epiglottis) is where tongue-base and hypoglossal nerve procedures work.</li></ul><p>Identifying <em>where</em> collapse occurs determines which surgery, if any, is appropriate.</p><figure class='note-fig' data-credit=\"Sites of Upper Airway Obstruction in Obstructive Sleep Apnea. Tan, Yang, &amp; Lim (2021). Sleep Medicine Research.\"><img class='zoomable' src='assets/img/mc/60_thyroid_parathyroid_vasculature_rcsi.png' alt='Sites of upper airway obstruction in OSA' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Representative sagittal view of unfavourable upper airway anatomy predisposing to OSA.</figcaption></figure>"
      },
      {
        title: "Friedman tongue position and staging",
        html: "<figure class='note-fig' data-credit=\"Mallampati classification. Wikimedia Commons, CC BY-SA 3.0.\"><img class='zoomable' src='assets/1024px-Mallampati.svg.png' alt='Graded oropharyngeal view' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: Graded oropharyngeal view, positions I to IV (Mallampati figure, closely related to Friedman tongue position).</figcaption></figure><ul><li><strong>Friedman tongue position (I-IV)</strong> grades how much the tongue base obscures the palate, tonsils, and uvula on a relaxed, non-phonating oral exam.</li><li>Combined with tonsil size and BMI, it forms the <strong>Friedman staging system</strong>, which helps predict response to palatal surgery.</li><li>Higher stages (more tongue-base obstruction) predict worse UPPP-alone outcomes.</li></ul><figure class='note-fig' data-credit=\"Friedman Tongue Position Grades (I-IV). ResearchGate / Friedman et al.\"><img class='zoomable' src='assets/img/mc/image66.png' alt='Friedman tongue position grades' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Friedman Tongue Position Grade. Grade I: entire uvula and tonsils visible. Grade II: uvula but not tonsils. Grade III: soft palate but not uvula. Grade IV: hard palate only.</figcaption></figure>"
      },
      {
        title: "The hypoglossal nerve and tongue protrusion",
        html: "<figure class='note-fig' data-credit=\"Hypoglossal nerve. Gray's Anatomy (1918), Plate 794. Public domain (Wikimedia Commons).\"><img class='zoomable' src='assets/800px-Gray794.png' alt='Hypoglossal nerve' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: CN XII course and genioglossus innervation (the target of upper airway stimulation).</figcaption></figure><ul><li><strong>CN XII (hypoglossal)</strong> innervates the genioglossus, the main tongue-protruding muscle.</li><li>During sleep, genioglossus tone normally drops.</li><li>In OSA, too little tone lets the tongue fall backward and obstruct the airway.</li><li><strong>Hypoglossal nerve stimulation:</strong> a cuff electrode fires in phase with inspiration, protruding the tongue forward to hold the airway open.</li></ul><figure class='note-fig' data-credit=\"The Hypoglossal Nerve, Genioglossus, and Tongue Protrusion Mechanics. Mashaqi et al. (2021) Int J Environ Res Public Health.\"><img class='zoomable' src='assets/img/mc/05a_facial_nerve_intratemporal_amboss.png' alt='Hypoglossal nerve and genioglossus' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Sagittal section showing intrinsic and extrinsic tongue muscles and their role in protrusion, retraction, and opening the retropalatal/hypopharyngeal space via palatoglossus coupling. (L) and (M) are the lateral and medial branches of the hypoglossal nerve.</figcaption></figure>"
      },
      {
        title: "How CPAP works",
        html: "<figure class='note-fig' data-credit=\"CPAP machine. Wikimedia Commons, CC BY-SA 2.0.\"><img class='zoomable' src='assets/800px-CPAP_Machine.jpg' alt='CPAP machine' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: A CPAP device (it splints the collapsible upper airway pneumatically).</figcaption></figure><ul><li>CPAP acts as a <strong>pneumatic splint</strong>, holding the airway open at all levels at once regardless of where collapse occurs, which is why it is first-line even before the exact site is known.</li><li>Intolerance is common: mask discomfort, claustrophobia, nasal obstruction limiting airflow, aerophagia.</li><li>That is why <strong>surgery is mainly a CPAP alternative or adjunct</strong>, not usually first-line.</li></ul><figure class='note-fig' data-credit=\"How CPAP Works: Continuous Pneumatic Airway Splinting. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/75_cpap_pneumatic_splinting_gemini.png' alt='How CPAP works' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>How CPAP works: continuous pneumatic airway splinting.</figcaption></figure>"
      }
    ],
    diagrams: [
      {
        kind: "image",
        occlude: true,
        id: "airway-obstruction-sites",
        title: "Levels of upper airway obstruction",
        note: "Nasal, retropalatal, and retroglossal levels: name each, then reveal what surgery targets it.",
        src: "assets/img/mc/60_thyroid_parathyroid_vasculature_rcsi.png",
        source: "Levels of Upper Airway Obstruction and Targeted Surgeries. Illustration generated with Google Gemini.",
        labels: [
          { id:"nasal", text:"Nasal cavity: septum/turbinates; affects CPAP tolerance more than apnea directly", box:{x:38.0,y:12.6,w:24.0,h:9.0} },
          { id:"retropalatal", text:"Retropalatal: soft palate/uvula/lateral walls (UPPP target)", box:{x:38.0,y:37.6,w:24.0,h:9.0} },
          { id:"retroglossal", text:"Retroglossal: tongue base (hypoglossal nerve stimulator / tongue-base surgery target)", box:{x:38.0,y:63.9,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "friedman-tongue-position",
        title: "Friedman tongue position (I-IV)",
        note: "How much the tongue base obscures the view on relaxed oral exam. Name each grade, then reveal.",
        src: "assets/img/mc/73_friedman_tongue_position_grades_researchgate.png",
        source: "Friedman Tongue Position Grades (I-IV). ResearchGate / Friedman et al.",
        labels: [
          { id:"i", text:"Grade I: full view of tonsils/pillars/soft palate", box:{x:0.5,y:45.5,w:24.0,h:9.0} },
          { id:"ii", text:"Grade II: partial view, some tongue-base crowding", box:{x:25.5,y:45.5,w:24.0,h:9.0} },
          { id:"iii", text:"Grade III: soft palate visible, tongue base obscures most", box:{x:50.5,y:45.5,w:24.0,h:9.0} },
          { id:"iv", text:"Grade IV: only hard palate visible; worst predictor for UPPP-alone success", box:{x:75.5,y:45.5,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "hypoglossal-stimulator-pathway",
        title: "Hypoglossal nerve stimulator",
        note: "Sensing lead, generator, and stimulation cuff: name each component, then reveal.",
        src: "assets/img/mc/73_friedman_tongue_position_grades_researchgate.png",
        source: "Hypoglossal Nerve Stimulator Components (Generator, Sensing Lead, Cuff). Xia et al. (2023) Sensors 23(21):8882.",
        labels: [
          { id:"generator", text:"Pulse generator: implanted in the chest, senses respiration", box:{x:9.9,y:56.2,w:24.0,h:9.0} },
          { id:"sensing", text:"Sensing lead: detects inspiration to time stimulation", box:{x:0.0,y:70.5,w:24.0,h:9.0} },
          { id:"cuff", text:"Stimulation cuff on cranial nerve XII: protrudes the tongue in phase with breathing", box:{x:47.4,y:38.4,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "hypoglossal-nerve-tongue",
        title: "The hypoglossal nerve, genioglossus, and tongue protrusion",
        note: "CN XII runs from the brainstem to the genioglossus. Name each structure, then reveal how it opens the airway.",
        src: "assets/img/mc/05a_facial_nerve_intratemporal_amboss.png",
        source: "The Hypoglossal Nerve, Genioglossus, and Tongue Protrusion Mechanics. Mashaqi et al. (2021) Int J Environ Res Public Health.",
        labels: [
          { id:"hypoglossal-nucleus", text:"Hypoglossal nucleus, medulla: where CN XII originates", box:{x:59.9,y:13.8,w:24.0,h:9.0} },
          { id:"cn-xii-course", text:"CN XII exits the skull base and courses forward to the tongue base", box:{x:41.1,y:34.8,w:24.0,h:9.0} },
          { id:"genioglossus", text:"Genioglossus: fans from the mandible into the tongue; the main protrudor muscle", box:{x:20.8,y:62.2,w:24.0,h:9.0} },
          { id:"tongue-body", text:"Tongue body: falls posteriorly when genioglossus tone drops during sleep", box:{x:39.6,y:48.8,w:24.0,h:9.0} },
          { id:"airway-space", text:"Airway space behind the tongue: narrowed when the tongue falls back", box:{x:55.8,y:57.2,w:24.0,h:9.0} },
          { id:"tongue-protrusion", text:"Stimulating CN XII contracts genioglossus, protruding the tongue forward and opening the airway", box:{x:22.4,y:57.2,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "cpap-mechanism",
        title: "How CPAP holds the airway open: pneumatic splinting",
        note: "Same airway, no pressure versus with positive airway pressure. Name each panel, then reveal.",
        src: "assets/img/mc/36b_vestibular_schwannoma_gross_wikimedia.png",
        source: "How CPAP Works: Continuous Pneumatic Airway Splinting. Illustration generated with Google Gemini.",
        labels: [
          { id:"collapsed-airway", text:"Without pressure support, the soft tissue walls appose and obstruct the airway", box:{x:13.0,y:37.8,w:24.0,h:9.0} },
          { id:"airflow-blocked", text:"Airflow is interrupted at the point of collapse", box:{x:13.0,y:20.5,w:24.0,h:9.0} },
          { id:"open-airway", text:"Same airway, walls held apart by positive airway pressure", box:{x:63.0,y:18.6,w:24.0,h:9.0} },
          { id:"positive-pressure-splint", text:"Positive pressure acts as a pneumatic splint, pushing outward on the walls at every level of potential collapse", box:{x:63.0,y:37.8,w:24.0,h:9.0} },
          { id:"airflow-restored", text:"Airflow proceeds uninterrupted through the splinted-open airway", box:{x:63.0,y:59.0,w:24.0,h:9.0} }
        ]
      }
    ]
  },

  /* ==================== CLINICAL TAB ==================== */
  clinical: {
    blocks: [
      {
        id: "stop-bang",
        title: "STOP-BANG: OSA screening",
        html: "<p>A validated 8-item screen (Snoring, Tiredness, Observed apnea, high blood Pressure, BMI>35, Age>50, Neck circumference>40cm, male Gender). <strong>≥3 positive</strong> flags high risk and should prompt referral for a sleep study; it is a screening tool, not diagnostic. Risk stratifies further beyond the simple ≥3 cutoff, which matters most in the <strong>preoperative</strong> setting.</p>",
        table: {
          head: ["STOP-BANG score", "Risk"],
          rows: [
            ["0-2", "Low risk"],
            ["3-4", "Intermediate risk"],
            ["5-8", "High risk"]
          ]
        }
      },
      {
        id: "ahi-severity",
        title: "Apnea-Hypopnea Index (AHI): severity grading",
        html: "<p>AHI is the number of apneas + hypopneas per hour of sleep, from polysomnography (PSG) or a home sleep apnea test (HSAT).</p>",
        table: {
          head: ["AHI (events/hr)", "Severity"],
          rows: [
            ["<5", "Normal"],
            ["5-14", "Mild"],
            ["15-29", "Moderate"],
            ["≥30", "Severe"]
          ]
        }
      },
      {
        id: "epworth",
        title: "Epworth Sleepiness Scale",
        html: "<p>A validated <strong>0-24 self-report</strong> questionnaire scoring the likelihood of dozing in 8 everyday situations. <strong>≥10</strong> suggests clinically significant excessive daytime sleepiness. It measures symptom burden, not disease severity: a patient can have severe OSA by AHI with a low Epworth score, or vice versa.</p>"
      },
      {
        id: "management-ladder",
        title: "The management ladder: CPAP first, surgery second",
        html: "<p><strong>First-line for essentially all diagnosed OSA:</strong> CPAP (or an oral mandibular-advancement appliance for mild-moderate disease/CPAP-intolerant patients), plus weight loss and positional therapy where relevant. <strong>Surgery is considered when CPAP fails</strong>, meaning intolerance, non-adherence, or inadequate response, and is chosen based on the identified site(s) of obstruction, often via drug-induced sleep endoscopy (DISE).</p>"
      },
      {
        id: "surgical-options",
        title: "Named surgical options and what they target",
        html: "<p>Site-directed surgery, escalating in invasiveness.</p>",
        table: {
          head: ["Procedure", "Targets", "Notes"],
          rows: [
            ["UPPP (uvulopalatopharyngoplasty)", "Retropalatal (soft palate/uvula/lateral walls)", "Most established; best results when obstruction is palate-level, not tongue-base"],
            ["Tongue-base reduction / genioglossus advancement", "Retroglossal (tongue base)", "For tongue-base-predominant obstruction"],
            ["Hypoglossal nerve stimulation (e.g. Inspire)", "Retroglossal, via genioglossus tone", "For CPAP-intolerant moderate-severe OSA; specific BMI/anatomy eligibility criteria (e.g. no complete concentric collapse on DISE)"],
            ["Maxillomandibular advancement (MMA)", "Multilevel: enlarges the entire skeletal airway framework", "Most effective single surgery for appropriate candidates; more invasive, orthognathic-level surgery"],
            ["Adult tonsillectomy", "Retropalatal, if tonsils are large", "Selected adults with significant tonsillar hypertrophy contributing to obstruction"],
            ["Nasal surgery (septoplasty, turbinate reduction)", "Nasal: reduces upstream resistance only", "Adjunct to improve CPAP tolerance/adherence; rarely produces a clinically significant AHI reduction alone, so not used as primary OSA therapy"],
            ["Laser-assisted uvulopalatoplasty (LAUP) / radiofrequency palatal ablation", "Retropalatal", "Not recommended by AASM for OSA treatment: insufficient evidence of AHI benefit and a risk of worsening or palatal scarring. Use is limited to isolated snoring after OSA has been excluded by PSG"]
          ]
        }
      },
      {
        id: "pap-titration-adherence",
        title: "PAP titration and the definition of 'adherence'",
        html: "<p>Determining the therapeutic pressure:</p><ul><li>A <strong>full-night in-lab titration polysomnography</strong>: a technician adjusts pressure through the night until obstructive events are controlled.</li><li>A <strong>split-night study</strong>: diagnostic PSG for the first portion of the night, titration for the remainder if the AHI is high enough early on to justify it.</li><li><strong>Auto-titrating PAP (APAP)</strong> at home, which self-adjusts pressure breath-to-breath and is appropriate for uncomplicated moderate-severe OSA without significant comorbidity.</li></ul><p><strong>Adherence</strong> has a formal definition that matters for insurance coverage, not just clinical impression: average use of <strong>≥4 hours per night on ≥70% of nights</strong> within a 30-consecutive-day period, typically confirmed from the device's built-in usage data.</p>",
        table: {
          head: ["Barrier", "Troubleshooting"],
          rows: [
            ["Mask leak / poor fit", "Refit or change interface (nasal pillows, nasal mask, full-face mask)"],
            ["Claustrophobia", "Gradual desensitization: daytime wear trials, starting with a smaller nasal-pillow interface"],
            ["Nasal congestion/dryness", "Heated humidification; treat nasal obstruction (see Rhinology track) to lower upstream resistance"],
            ["Pressure intolerance", "Ramp feature (starts low, rises gradually) or expiratory pressure relief (EPR); consider bilevel PAP if still intolerant"],
            ["Mouth leak with a nasal interface", "Chin strap, or switch to a full-face mask"]
          ]
        }
      },
      {
        id: "pap-modalities-overlap",
        title: "Beyond fixed CPAP: BiPAP and overlap syndrome",
        html: "<p><strong>BiPAP (bilevel PAP)</strong> delivers separate inspiratory and expiratory pressures rather than one constant pressure. That's useful when a patient needs a high pressure that's poorly tolerated as a single fixed level, or when there's a hypoventilation component (neuromuscular disease, obesity-hypoventilation syndrome, or overlap syndrome) rather than pure upper-airway obstruction.</p><p><strong>Overlap syndrome</strong>, meaning coexisting OSA and COPD, carries substantially higher risk of <strong>hypercapnic respiratory failure, pulmonary hypertension/cor pulmonale, and mortality</strong> than either condition alone. It usually needs pulmonology co-management, and bilevel or nocturnal ventilatory support may be required rather than standard CPAP alone.</p>"
      }
    ],
    redFlags: [
      { t: "<b>Severe OSA (AHI ≥30) with signs of cor pulmonale or pulmonary hypertension</b>: untreated severe OSA drives chronic hypoxia-mediated right heart strain and needs urgent treatment initiation, not routine follow-up scheduling." },
      { t: "<b>Commercial vehicle operators with untreated OSA and excessive daytime sleepiness</b>: a safety-critical occupational issue under US FMCSA guidance, where treatment adherence affects certification to drive." },
      { t: "<b>Morbid obesity (BMI ≥40) with severe OSA being considered for bariatric surgery</b>: perioperative OSA management, often CPAP, reduces anesthetic and airway risk, so sequencing and communication with the surgical team matters." },
      { t: "<b>Post-UPPP bleeding or airway compromise</b>: oropharyngeal surgery carries a real postoperative airway-obstruction and hemorrhage risk, so keep a low threshold for urgent ENT reassessment." },
      { t: "<b>Suspected central (not obstructive) sleep apnea</b>: CPAP alone may not be effective and may need adaptive servo-ventilation or cardiology/neurology involvement. Distinguishing obstructive from central changes the entire management pathway." },
      { t: "<b>Complete concentric palatal collapse on DISE</b>: a contraindication to hypoglossal nerve stimulation that changes surgical candidacy entirely." },
      { t: "<b>Undiagnosed OSA with treatment-resistant hypertension or new atrial fibrillation</b>: OSA is a recognized contributor, and screening for it changes the cardiovascular management plan." },
      { t: "<b>Overlap syndrome (OSA + COPD) with hypercapnia, morning headache, or lower-extremity edema</b>: higher risk of hypercapnic respiratory failure and pulmonary hypertension than either condition alone. Needs pulmonology co-management and often bilevel PAP, not plain CPAP." },
      { t: "<b>New central apneas appearing during CPAP titration (treatment-emergent/complex sleep apnea)</b>: don't assume undertreated OSA and simply raise the pressure. Many resolve with continued PAP use over weeks, but persistent cases need reassessment and may require adaptive servo-ventilation." }
    ]
  },

  /* ==================== CASES TAB ==================== */
  cases: [
    {
      id: "case-cpap-intolerant-severe-osa",
      ukmla: "Obstructive sleep apnoea",
      source: "AAO-HNSF Position Statement: Hypoglossal Nerve Stimulation for OSA.",
      stem: "A <b>52-year-old man</b>, BMI 29, has severe OSA (AHI 38) confirmed on PSG. He has tried CPAP for 6 months but removes the mask nightly within an hour, citing claustrophobia. He continues to have daytime sleepiness (Epworth 15).",
      prompts: [
        { q: "What is the next step before considering surgery?", a: "Attempt <strong>CPAP desensitization/alternative interfaces</strong> and consider an <strong>oral mandibular-advancement appliance</strong> first; if truly CPAP-intolerant despite these efforts, proceed to surgical evaluation." },
        { q: "If he remains CPAP-intolerant, what test determines his surgical candidacy, and for which procedure specifically?", a: "<strong>Drug-induced sleep endoscopy (DISE)</strong> to identify the site(s)/pattern of collapse. If there is no complete concentric palatal collapse and his BMI is in range, he may be a candidate for <strong>hypoglossal nerve stimulation</strong>." }
      ],
      teaching: "CPAP intolerance doesn't jump straight to surgery. Optimize CPAP tolerance and consider an oral appliance first, then let DISE findings, not just AHI, pick the surgical target."
    },
    {
      id: "case-commercial-driver-osa",
      ukmla: "Obstructive sleep apnoea",
      source: "US FMCSA medical guidance on OSA and commercial driving.",
      stem: "A <b>commercial truck driver</b> screens STOP-BANG positive (5/8) at a routine occupational health visit. He reports falling asleep at red lights.",
      prompts: [
        { q: "What is the appropriate next step, and why does the occupational context matter here?", a: "Refer for a <strong>sleep study</strong> promptly. Falling asleep while driving raises a <strong>safety-critical, occupational</strong> concern under US FMCSA guidance. This isn't just a quality-of-life issue: it affects his medical certification to operate a commercial vehicle." },
        { q: "If OSA is confirmed and treated, what is required before he can be recertified to drive?", a: "Documentation of <strong>effective treatment and adherence</strong> (e.g., CPAP compliance data). Certifying examiners require evidence the condition is controlled, not just that treatment was prescribed." }
      ],
      teaching: "STOP-BANG-positive with reported sleepiness behind the wheel escalates urgency beyond a routine referral. Occupational safety changes the timeline, not just the diagnosis."
    },
    {
      id: "case-bariatric-preop-osa",
      ukmla: "Obstructive sleep apnoea",
      source: "Standard perioperative teaching on OSA and bariatric surgery.",
      stem: "A <b>38-year-old woman</b>, BMI 44, is being worked up for bariatric surgery. STOP-BANG is 6/8; she has never been evaluated for OSA.",
      prompts: [
        { q: "Why does OSA status matter before her bariatric surgery, specifically?", a: "Undiagnosed/untreated OSA significantly increases <strong>perioperative airway and anesthetic risk</strong> (difficult airway, post-op respiratory depression risk with opioids/sedation). Preoperative screening and, if positive, PSG and CPAP initiation are standard before major surgery in high-risk patients." },
        { q: "Does successful bariatric surgery mean OSA treatment can stop?", a: "Not automatically. <strong>Weight loss often improves but doesn't always resolve OSA</strong>, so repeat sleep testing after significant weight loss determines whether CPAP can be safely discontinued." }
      ],
      teaching: "A high STOP-BANG score in a preoperative bariatric patient is a reason to screen and treat before surgery, not a footnote to address afterward."
    },
    {
      id: "case-central-vs-obstructive",
      ukmla: "Obstructive sleep apnoea",
      source: "Standard sleep medicine teaching on central sleep apnea.",
      stem: "A patient with <b>heart failure with reduced ejection fraction</b> is found to have an AHI of 25 on PSG, but the report notes most events show <b>absent respiratory effort</b> during the apneas, with a crescendo-decrescendo breathing pattern.",
      prompts: [
        { q: "Is this obstructive or central sleep apnea, and how do you know?", a: "This is <strong>central sleep apnea</strong> (specifically Cheyne-Stokes breathing). Absent respiratory effort during apneas distinguishes it from obstructive apnea, where effort continues against a closed airway. The crescendo-decrescendo pattern is classic for CSA associated with heart failure." },
        { q: "Does the surgical ladder discussed for OSA apply here?", a: "No. <strong>The OSA surgical ladder (UPPP, hypoglossal stimulation, MMA) targets anatomic obstruction and does not apply to central sleep apnea.</strong> Management instead focuses on optimizing the underlying heart failure and may involve adaptive servo-ventilation, in coordination with cardiology." }
      ],
      teaching: "Absent respiratory effort during apneic events is the key discriminator for central sleep apnea, and it changes the entire management pathway away from the OSA surgical ladder."
    },
    {
      id: "case-uppp-postop-bleed",
      ukmla: "Obstructive sleep apnoea",
      source: "Standard otolaryngology teaching on post-UPPP complications.",
      stem: "One week after UPPP, a patient presents with <b>bright red blood from the mouth</b> and difficulty swallowing.",
      prompts: [
        { q: "What is the concern, and what is the immediate priority?", a: "<strong>Post-tonsillectomy/UPPP-type hemorrhage</strong>: airway and hemodynamic assessment first, as with any post-adenotonsillar-surgery bleed, plus urgent ENT evaluation. This age group and procedure carries real bleeding risk, particularly around the 5-10 day post-op window as eschar sloughs." },
        { q: "Should this patient be observed at home with reassurance, or sent in?", a: "<strong>Sent in urgently.</strong> Any active bleeding after pharyngeal surgery warrants same-day ENT/emergency evaluation, since it can progress rapidly and threaten the airway." }
      ],
      teaching: "Bleeding after UPPP is managed with the same urgency as post-tonsillectomy hemorrhage: same pharyngeal surgery, same bleeding risk window, same low threshold to escalate."
    },
    {
      id: "case-cpap-adherence-troubleshooting",
      ukmla: "Obstructive sleep apnoea",
      source: "AASM Clinical Practice Guideline: Treatment of Adult OSA with PAP (2019); CMS PAP adherence coverage criteria.",
      stem: "A <b>46-year-old woman</b> with moderate OSA (AHI 22) was started on CPAP 3 weeks ago. The device download shows average use of <b>2.1 hours/night on 40% of nights</b>. She reports the mask leaks constantly and she wakes with a dry mouth.",
      prompts: [
        { q: "Does she meet the formal definition of CPAP adherence? Why does this matter beyond the clinical picture?", a: "No. Adherence requires <strong>≥4 hours/night on ≥70% of nights</strong> over a 30-day window, and she meets neither. This isn't only a clinical concern: insurers, including CMS, use this exact threshold to decide whether to continue covering the device." },
        { q: "What does her specific complaint (leak plus dry mouth) point to, and what's the fix?", a: "Persistent leak with morning dry mouth suggests <strong>mouth leak</strong>, often from a nasal interface with the mouth open during sleep. Address it with a <strong>chin strap or a switch to a full-face mask</strong>, plus mask refitting and heated humidification for the dryness, before concluding she is 'CPAP-intolerant.'" }
      ],
      teaching: "Low adherence numbers are a prompt to troubleshoot the specific barrier, not a verdict that a patient has failed CPAP and is ready for a surgical conversation."
    },
    {
      id: "case-overlap-syndrome",
      ukmla: "Obstructive sleep apnoea",
      source: "Standard sleep/pulmonary medicine teaching on overlap syndrome (OSA + COPD).",
      stem: "A <b>63-year-old man</b> with known COPD (FEV1 55% predicted) reports loud snoring, witnessed apneas, morning headaches, and new bilateral leg swelling. STOP-BANG is 5/8.",
      prompts: [
        { q: "What diagnosis should be considered beyond a COPD exacerbation, and why do the morning headaches and leg swelling matter?", a: "<strong>Overlap syndrome</strong>: coexisting OSA and COPD. Morning headache raises concern for <strong>nocturnal hypercapnia</strong>, and leg swelling raises concern for <strong>pulmonary hypertension/cor pulmonale</strong>. Both are more common and more severe in overlap syndrome than in either disease alone." },
        { q: "How does management differ from managing OSA alone?", a: "He needs a <strong>PSG</strong> to confirm OSA and assess for hypoventilation, and management typically involves <strong>pulmonology co-management</strong>; <strong>bilevel PAP</strong> (rather than standard fixed CPAP) is often used when there is a hypoventilation component." }
      ],
      teaching: "COPD plus classic OSA symptoms should raise overlap syndrome on the differential. It changes both the urgency (hypercapnia/pulmonary hypertension risk) and the PAP modality chosen."
    }
  ],

  /* ==================== CARDS TAB ==================== */
  cards: [
    { id:"stop-bang-card", tags: ["SL", "clinical"], milestones:["PC4","MK1"], ukmla:"Obstructive sleep apnoea", source:"Standard OSA screening teaching (STOP-BANG, Chung et al.).", front:"What does STOP-BANG stand for, and what score flags high risk?",
      back:"<strong>S</strong>noring, <strong>T</strong>iredness, <strong>O</strong>bserved apnea, high blood <strong>P</strong>ressure, <strong>B</strong>MI>35, <strong>A</strong>ge>50, <strong>N</strong>eck circumference>40cm, male <strong>G</strong>ender. <strong>≥3 positive</strong> = high risk for OSA, prompting referral for a sleep study." },
    { id:"ahi-severity-card", tags: ["SL", "clinical"], milestones:["MK1","PC4"], ukmla:"Obstructive sleep apnoea", source:"AASM scoring manual: standard AHI severity grading.", front:"State the AHI severity thresholds for OSA.",
      back:"<strong><5</strong> normal, <strong>5-14</strong> mild, <strong>15-29</strong> moderate, <strong>≥30</strong> severe (events/hour of sleep, from PSG or a home sleep apnea test)." },
    { id:"epworth-card", tags: ["SL", "clinical"], milestones:["PC4","MK1"], ukmla:"Obstructive sleep apnoea", source:"Standard sleep medicine teaching: Epworth Sleepiness Scale.", front:"What does the Epworth Sleepiness Scale measure, and what score is significant?",
      back:"A <strong>0-24 self-report</strong> of the likelihood of dozing in 8 everyday situations, measuring <strong>symptom burden</strong> (daytime sleepiness), not disease severity by AHI. <strong>≥10</strong> suggests clinically significant excessive daytime sleepiness." },
    { id:"cpap-first-line-card", tags: ["SL", "clinical"], milestones:["PC9","MK2"], ukmla:"Obstructive sleep apnoea", source:"AASM Clinical Practice Guideline on OSA management.", front:"What is first-line management for diagnosed OSA, and when does surgery enter the conversation?",
      back:"<strong>CPAP</strong> is first-line for essentially all diagnosed OSA (± weight loss, positional therapy, or an oral mandibular-advancement appliance for milder disease). <strong>Surgery is considered when CPAP fails</strong>, meaning intolerance, non-adherence, or inadequate response." },
    { id:"dise-card", tags: ["SL", "clinical"], milestones:["PC4","PC9"], ukmla:"Obstructive sleep apnoea", source:"Standard sleep surgery teaching on drug-induced sleep endoscopy.", front:"Before site-directed OSA surgery, the airway is examined under sedation simulating natural sleep using a technique called <span class=\"cloze-blank\">[...]</span>, which identifies the specific site and pattern of collapse.",
      back:"Before site-directed OSA surgery, the airway is examined under sedation simulating natural sleep using a technique called <mark class=\"cloze-answer\">drug-induced sleep endoscopy (DISE)</mark>, which identifies the specific site and pattern of collapse. Site-directed surgery is chosen based on DISE findings, not AHI alone." },
    { id:"uppp-card", tags: ["SL", "clinical"], milestones:["PC9","MK2"], ukmla:"Obstructive sleep apnoea", source:"Standard sleep surgery teaching on UPPP.", front:"What does UPPP target, and what predicts poor response?",
      back:"<strong>Uvulopalatopharyngoplasty</strong> targets retropalatal obstruction (soft palate, uvula, lateral pharyngeal walls). <strong>Higher Friedman stage</strong> (more tongue-base obstruction) predicts worse outcomes from UPPP alone: palate-level surgery doesn't fix tongue-base collapse." },
    { id:"hypoglossal-stim-card", tags: ["SL", "clinical"], milestones:["PC9","MK2"], ukmla:"Obstructive sleep apnoea", source:"AAO-HNSF Position Statement: Hypoglossal Nerve Stimulation for OSA.", front:"How does hypoglossal nerve stimulation work, and name one key exclusion criterion.",
      back:"An implanted device senses inspiration and stimulates <strong>cranial nerve XII</strong> in phase with breathing, protruding the tongue (via genioglossus contraction) to keep the airway open. <strong>Complete concentric palatal collapse on DISE</strong> is a contraindication." },
    { id:"mma-card", tags: ["SL", "clinical"], milestones:["PC9","MK2"], scope:"sub-I", ukmla:"Obstructive sleep apnoea", source:"Standard sleep surgery teaching on maxillomandibular advancement.", front:"What is maxillomandibular advancement (MMA), and why is it often the most effective single surgery?",
      back:"Advancing both the maxilla and mandible forward, which <strong>enlarges the entire skeletal airway framework</strong> and addresses multilevel obstruction at once rather than one anatomic site. Highly effective for appropriate candidates but more invasive (orthognathic-level surgery)." },
    { id:"friedman-staging-card", tags: ["SL", "clinical"], milestones:["MK1","PC4"], ukmla:"Obstructive sleep apnoea", source:"Standard sleep surgery teaching on Friedman staging.", front:"The oropharyngeal exam grading system that scores how much the tongue base obscures the view of the palate, tonsils, and uvula on a relaxed oral exam is called <span class=\"cloze-blank\">[...]</span>.",
      back:"The oropharyngeal exam grading system that scores how much the tongue base obscures the view of the palate, tonsils, and uvula on a relaxed oral exam is called <mark class=\"cloze-answer\">Friedman tongue position</mark>. Combined with tonsil size and BMI it forms the Friedman staging system, and higher stages predict worse outcomes from UPPP alone." },
    { id:"central-vs-obstructive-card", tags: ["SL", "clinical"], milestones:["MK2","PC4"], ukmla:"Obstructive sleep apnoea", source:"Standard sleep medicine teaching on central sleep apnea.", front:"On a sleep study, the finding that distinguishes central sleep apnea from obstructive sleep apnea is <span class=\"cloze-blank\">[...]</span> during the apneic event, since obstructive events continue despite ongoing effort against a closed airway.",
      back:"On a sleep study, the finding that distinguishes central sleep apnea from obstructive sleep apnea is <mark class=\"cloze-answer\">absent respiratory effort</mark> during the apneic event, since obstructive events continue despite ongoing effort against a closed airway. Central events often show a crescendo-decrescendo (Cheyne-Stokes) pattern, classically in heart failure." },
    { id:"oral-appliance-card", tags: ["SL", "clinical"], milestones:["PC9","MK2"], ukmla:"Obstructive sleep apnoea", source:"AASM Clinical Practice Guideline on oral appliance therapy.", front:"When is an oral mandibular-advancement appliance an appropriate OSA treatment?",
      back:"For <strong>mild-to-moderate OSA</strong>, or for CPAP-intolerant patients regardless of severity as a second-line option. It works by advancing the mandible (and tongue base with it) to enlarge the retroglossal airway." },
    { id:"positional-therapy-card", tags: ["SL", "clinical"], milestones:["PC9"], ukmla:"Obstructive sleep apnoea", source:"Standard sleep medicine teaching on positional OSA.", front:"What is 'positional OSA,' and how is it managed?",
      back:"OSA where the AHI is markedly worse <strong>supine</strong> than in other positions (often ≥2× worse). Managed with <strong>positional therapy</strong> (devices/techniques discouraging supine sleep) as an adjunct or alternative in appropriately selected mild-moderate cases." },
    { id:"osa-cardiovascular-card", tags: ["SL", "clinical"], milestones:["MK3","PC4"], ukmla:"Obstructive sleep apnoea", source:"Standard teaching on OSA cardiovascular associations.", front:"What cardiovascular consequences are associated with untreated OSA?",
      back:"<strong>Treatment-resistant hypertension</strong>, atrial fibrillation and other arrhythmias, and, in severe prolonged untreated disease, <strong>pulmonary hypertension and cor pulmonale</strong> from chronic intermittent hypoxia." },
    { id:"osa-driving-card", tags: ["SL", "clinical"], milestones:["SBP3","PC4"], redFlag:true, ukmla:"Obstructive sleep apnoea", source:"US FMCSA medical guidance on OSA and commercial driving.", front:"Why does OSA screening carry extra urgency in commercial drivers?",
      back:"Untreated OSA with excessive daytime sleepiness is a <strong>safety-critical occupational risk</strong>. US FMCSA guidance ties commercial driving certification to documented OSA treatment and adherence, not just diagnosis." },
    { id:"tonsillectomy-adult-osa-card", tags: ["SL", "clinical"], milestones:["PC9","MK2"], ukmla:"Obstructive sleep apnoea", source:"Standard sleep surgery teaching on adult tonsillectomy for OSA.", front:"When is tonsillectomy considered as OSA treatment in an adult?",
      back:"When <strong>significant tonsillar hypertrophy</strong> is identified as a contributor to retropalatal obstruction. It's much less commonly the primary driver in adults than in children, but still a targeted, site-specific option when present." },
    { id:"bariatric-preop-osa-card", tags: ["SL", "clinical"], milestones:["SBP3","PC4"], redFlag:true, ukmla:"Obstructive sleep apnoea", source:"Standard perioperative teaching on OSA and bariatric/major surgery.", front:"Why is preoperative OSA screening important before bariatric or other major surgery?",
      back:"Undiagnosed/untreated OSA significantly raises <strong>perioperative airway and anesthetic risk</strong> (difficult airway, post-op respiratory depression with sedation/opioids). High STOP-BANG scores should prompt evaluation and, if needed, CPAP initiation before surgery." },
    { id:"weight-loss-osa-card", tags: ["SL", "clinical"], milestones:["PC9","MK2"], ukmla:"Obstructive sleep apnoea", source:"Standard sleep medicine teaching on weight and OSA.", front:"Does weight loss cure OSA?",
      back:"It often <strong>improves</strong> OSA (fat deposition around the airway/neck is a major contributor) but doesn't always resolve it completely. <strong>Repeat sleep testing after significant weight loss</strong> is needed before CPAP can be safely discontinued." },
    { id:"uppp-bleed-card", tags: ["SL", "clinical"], milestones:["PC9","PC1"], redFlag:true, ukmla:"Obstructive sleep apnoea", source:"Standard otolaryngology teaching on post-pharyngeal-surgery hemorrhage.", front:"How urgently should post-UPPP bleeding be treated, and why?",
      back:"<strong>Urgently: same-day ENT/emergency evaluation</strong>, same as post-tonsillectomy hemorrhage. Pharyngeal surgery carries a real bleeding risk (notably around days 5-10 as eschar sloughs) that can progress rapidly and threaten the airway." },
    { id:"pediatric-vs-adult-osa-card", tags: ["SL", "clinical"], milestones:["MK2","PC7"], ukmla:["Obstructive sleep apnoea","Snoring"], source:"Cross-reference: standard pediatric vs adult sleep medicine teaching.", front:"In children, the leading cause of OSA is <span class=\"cloze-blank\">[...]</span>, so adenotonsillectomy, not CPAP, is first-line treatment.",
      back:"In children, the leading cause of OSA is <mark class=\"cloze-answer\">adenotonsillar hypertrophy</mark>, so adenotonsillectomy, not CPAP, is first-line treatment. In adults, obesity and multilevel soft-tissue collapse predominate instead, and CPAP is first-line." },
    { id:"sleep-study-types-card", tags: ["SL", "clinical"], milestones:["MK1","PC4"], ukmla:"Obstructive sleep apnoea", source:"AASM Clinical Practice Guideline on sleep testing.", front:"The gold-standard sleep study, capable of diagnosing central and other sleep disorders through full monitoring of EEG, airflow, effort, and oximetry, is <span class=\"cloze-blank\">[...]</span>.",
      back:"The gold-standard sleep study, capable of diagnosing central and other sleep disorders through full monitoring of EEG, airflow, effort, and oximetry, is <mark class=\"cloze-answer\">in-lab polysomnography (PSG)</mark>. A home sleep apnea test (HSAT) is a limited-channel alternative for patients with a high pretest probability of moderate-severe OSA and no major comorbidities, though it can underestimate severity." },
    { id:"pap-adherence-definition-card", tags: ["SL", "clinical"], milestones:["PC9","SBP3"], ukmla:"Obstructive sleep apnoea", source:"AASM Clinical Practice Guideline: Treatment of Adult OSA with PAP (Patil et al., 2019); CMS PAP adherence coverage criteria.", front:"The formal definition of CPAP adherence used by CMS and most insurers is average use of <span class=\"cloze-blank\">[...]</span> within a 30-consecutive-day period.",
      back:"The formal definition of CPAP adherence used by CMS and most insurers is average use of <mark class=\"cloze-answer\">≥4 hours per night on ≥70% of nights</mark> within a 30-consecutive-day period. Insurers use this exact threshold to decide whether to keep covering the device, so using it only some nights doesn't count." },
    { id:"pap-titration-types-card", tags: ["SL", "clinical"], milestones:["PC9","MK1"], ukmla:"Obstructive sleep apnoea", source:"AASM Clinical Practice Guideline: Treatment of Adult OSA with PAP (2019).", front:"What are the three ways to determine a patient's therapeutic CPAP pressure (PAP titration)?",
      back:"A <strong>full-night in-lab titration PSG</strong> (pressure adjusted through the night), a <strong>split-night study</strong> (diagnostic PSG for the first part of the night, titration for the rest if the AHI is high enough early), or <strong>auto-titrating PAP (APAP)</strong> at home for uncomplicated moderate-severe OSA." },
    { id:"cpap-mouth-leak-troubleshoot-card", tags: ["SL", "clinical"], milestones:["PC9"], ukmla:"Obstructive sleep apnoea", source:"AASM Clinical Practice Guideline: Treatment of Adult OSA with PAP (2019).", front:"A CPAP user's mask leaks constantly and they wake up with a dry mouth. How do you troubleshoot it?",
      back:"This pattern suggests <strong>mouth leak</strong> from a nasal interface with the mouth open during sleep. Fix it with a <strong>chin strap or a switch to a full-face mask</strong>, plus refitting the mask and adding heated humidification for the dryness, before labeling the patient CPAP-intolerant." },
    { id:"bipap-indications-card", tags: ["SL", "clinical"], milestones:["PC9","MK3"], ukmla:"Obstructive sleep apnoea", source:"AASM Clinical Practice Guideline on PAP devices.", front:"The PAP device chosen over standard CPAP when a high pressure is poorly tolerated as one fixed level, or when a hypoventilation component is present rather than pure obstruction, is <span class=\"cloze-blank\">[...]</span>, which delivers separate inspiratory and expiratory pressures.",
      back:"The PAP device chosen over standard CPAP when a high pressure is poorly tolerated as one fixed level, or when a hypoventilation component is present rather than pure obstruction, is <mark class=\"cloze-answer\">BiPAP (bilevel PAP)</mark>, which delivers separate inspiratory and expiratory pressures." },
    { id:"overlap-syndrome-card", tags: ["SL", "clinical"], milestones:["PC9","MK3"], redFlag:true, ukmla:"Obstructive sleep apnoea", source:"Standard sleep/pulmonary medicine teaching on overlap syndrome (OSA + COPD).", front:"The coexistence of OSA and COPD, which carries a higher risk of hypercapnic respiratory failure and pulmonary hypertension than either disease alone, is called <span class=\"cloze-blank\">[...]</span>.",
      back:"The coexistence of OSA and COPD, which carries a higher risk of hypercapnic respiratory failure and pulmonary hypertension than either disease alone, is called <mark class=\"cloze-answer\">overlap syndrome</mark>. It usually needs pulmonology co-management, since bilevel PAP is often required instead of standard CPAP." },
    { id:"treatment-emergent-csa-card", tags: ["SL", "clinical"], milestones:["PC9","MK3"], redFlag:true, ukmla:"Obstructive sleep apnoea", source:"Standard sleep medicine teaching on central sleep apnea.", front:"What is treatment-emergent (complex) central sleep apnea?",
      back:"New <strong>central</strong> apneas that appear or persist once CPAP has resolved a patient's obstructive events. Many resolve spontaneously with continued PAP use over weeks; persistent cases may need <strong>adaptive servo-ventilation</strong>. Don't assume undertreated OSA and simply raise the pressure." },
    { id:"nasal-surgery-osa-card", tags: ["SL", "clinical"], milestones:["PC9","PC5"], ukmla:"Obstructive sleep apnoea", source:"Standard sleep surgery teaching on nasal surgery and CPAP adherence.", front:"Nasal surgery such as septoplasty or turbinate reduction rarely produces a clinically significant AHI reduction on its own, so in OSA its real value is as a <span class=\"cloze-blank\">[...]</span> rather than a primary treatment.",
      back:"Nasal surgery such as septoplasty or turbinate reduction rarely produces a clinically significant AHI reduction on its own, so in OSA its real value is as a <mark class=\"cloze-answer\">CPAP-adherence adjunct</mark> rather than a primary treatment. Lowering nasal resistance improves mask tolerance and comfort, which supports keeping up with CPAP." },
    { id:"laup-not-recommended-card", tags: ["SL", "clinical"], milestones:["PC9","MK2"], ukmla:["Obstructive sleep apnoea","Snoring"], source:"AASM Practice Parameters for Surgical Modifications of the Upper Airway (LAUP not recommended for OSA).", front:"Is LAUP (laser-assisted uvulopalatoplasty) recommended for treating OSA?",
      back:"No. <strong>AASM does not recommend LAUP</strong> (or radiofrequency palatal ablation) for OSA treatment, given insufficient evidence of AHI benefit and a risk of worsening or palatal scarring. At most it is considered for <strong>isolated snoring</strong> once OSA has been excluded by PSG." },
    { id:"stop-bang-risk-stratification-card", tags: ["SL", "clinical"], milestones:["PC9","SBP3"], ukmla:"Obstructive sleep apnoea", source:"Chung F et al., STOP-BANG questionnaire validation and risk-stratification studies (Anesthesiology 2008; Anesth Analg 2016).", front:"Beyond '≥3 = high risk,' how is STOP-BANG risk more precisely stratified?",
      back:"<strong>0-2</strong> = low risk, <strong>3-4</strong> = intermediate risk, <strong>5-8</strong> = high risk. An intermediate score can be reclassified as high risk if BMI &gt;35, neck circumference &gt;40cm, or male gender is among the positive items. This reclassification is used especially in preoperative screening." },
    { id:"hgns-candidacy-card", tags: ["SL", "clinical"], milestones:["PC9","MK1"], ukmla:"Obstructive sleep apnoea", source:"FDA hypoglossal nerve stimulation approval criteria; STAR trial inclusion criteria (Strollo et al., NEJM 2014).", front:"What are the indications and candidacy criteria for hypoglossal nerve stimulation (HGNS) in obstructive sleep apnea?",
      back:"HGNS is FDA-approved for adults (&ge;18) with moderate-to-severe OSA who have failed or cannot tolerate CPAP. Core criteria: <strong>AHI 15-65 events/h</strong>, a central + mixed apnea index &lt;25% of the total AHI, a <strong>BMI &le;32 kg/m&sup2;</strong> (some insurers allow &lt;35), and a drug-induced sleep endoscopy (DISE) that shows <strong>no complete concentric collapse</strong> at the palate/velopharynx.<figure class='note-fig' data-credit=\"Hypoglossal Nerve Stimulator Components (Generator, Sensing Lead, Cuff). Xia et al. (2023) Sensors 23(21):8882.\"><img class='zoomable' src='assets/img/mc/73_friedman_tongue_position_grades_researchgate.png' alt='Hypoglossal nerve stimulator components' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Hypoglossal nerve stimulator components: generator, sensing lead, cuff.</figcaption></figure>" }
  ]
});

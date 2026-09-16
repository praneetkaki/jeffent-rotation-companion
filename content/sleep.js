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
  version: "0.4.0-draft",
  level: ["core", "sub-I"],
  status: "DRAFT, pending faculty review. v0.2.0: added a PAP-therapy depth pass, formal CPAP titration methods (full-night/split-night/APAP) and the AASM/CMS adherence definition, a troubleshooting table for common non-adherence barriers (mask leak, claustrophobia, nasal congestion, pressure intolerance, mouth leak), BiPAP indications and overlap syndrome (OSA + COPD), treatment-emergent (complex) central sleep apnea, the limited/adjunctive role of nasal surgery in OSA (CPAP-tolerance only, not primary AHI reduction), and AASM's non-recommendation of LAUP/radiofrequency palatal ablation for OSA, grounded in the AASM Clinical Practice Guideline on PAP therapy, CMS PAP coverage criteria, and standard sleep/pulmonary medicine teaching; written fresh from guidelines and standard teaching, not derived from any single textbook. v0.3.0: OpenEvidence-verified correction pass (user-reviewed, not faculty sign-off) — added tirzepatide/GLP-1 pharmacotherapy for OSA (FDA approval, Dec 2024) as a new block/card; updated HGNS indications to the expanded AHI/BMI ceilings and added a dedicated contraindications block plus a CCC card; added CN XII medial/lateral (inclusion/exclusion) branch anatomy with EMG/bipolar-cautery detail to the hypoglossal nerve anatomy note, plus a companion card; added HSAT rule-in/rule-out nuance to sleep-study-types-card and MMA success/cure numbers to mma-card. v0.4.0: expanded the Friedman tongue position/staging note (exam technique, grade-by-grade view, full staging table, UPPP-success predictors, caveats) with 5 new cards; expanded the hypoglossal nerve anatomy note (pure-motor scope, protrusor/retractor split, five-segment course, C1/ansa cervicalis contribution, unilateral-lesion sign) and added a new hgns-how-it-works clinical block (device components, inclusion/exclusion branches, indications/contraindications, unilateral vs bilateral) with 8 new cards; expanded the CPAP note (pressure-delivery modes, adherence definition, ENT's role in nasal-obstruction-driven intolerance, where surgery fits); expanded the management-ladder block into a numbered ladder with a worked clinical example and a DISE/VOTE sub-section, with 2 new cards; reformatted STOP-BANG into a per-item list, reworded AHI severity labels to 'mild/moderate/severe OSA', converted HGNS indications/contraindications to list format, removed the LAUP/radiofrequency-ablation row from the surgical-options table, and widened (blind estimate, needs visual spot-check) the mispositioned hypoglossal-nerve occlusion box on the stimulator diagram.",
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
        tagline: "Nasal collapse · Retropalatal collapse · Retroglossal collapse",
        html: "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/level_upper_airway_obstruction_labeled.png' alt='Level upper airway obstruction labeled' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The three anatomic levels where the upper airway can collapse in OSA: nasal, retropalatal, and retroglossal.</figcaption></figure><p>Collapse can occur at multiple levels, often more than one at once.</p><ul><li>The <strong>nasal cavity</strong> (septal deviation, turbinate hypertrophy) raises upstream resistance and drives CPAP intolerance.</li><li>The <strong>retropalatal region</strong> (soft palate, uvula, lateral pharyngeal walls) is the classic UPPP target.</li><li>The <strong>retroglossal/hypopharyngeal region</strong> (tongue base, epiglottis) is where tongue-base and hypoglossal nerve procedures work.</li></ul><p>Identifying <em>where</em> collapse occurs determines which surgery, if any, is appropriate.</p>"
      },
      {
        id: "friedman-tongue-position-note",
        title: "Friedman tongue position and staging",
        tagline: "Tongue base · Oropharynx exam · UPPP response",
        html: "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/Friedman_tongue.png' alt='Friedman tongue' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Friedman tongue position grades I-IV and how they predict UPPP response.</figcaption></figure>" +
          "<p><strong>The exam &mdash; how it's done:</strong> the Friedman tongue position (FTP), sometimes called the modified Mallampati index in this context, grades how much the tongue base obscures the palate, tonsils, and uvula on oral exam.</p>" +
          "<p>The single most important technical point, and the one that separates it from the classic (anesthesia) Mallampati score: mouth open wide, tongue resting <strong>in</strong> the mouth, <strong>not</strong> protruded, and <strong>not</strong> phonating. Keeping the tongue in its natural resting position mimics how it behaves during sleep, which is the whole point.</p>" +
          "<p>Classic Mallampati has the patient protrude the tongue instead &mdash; a different test for a different purpose, predicting intubation difficulty.</p>" +
          "<p><em>Memory hook: \"Say nothing, stick out nothing\" &mdash; if the patient says \"ahh\" or sticks the tongue out, the grade is invalid.</em></p>" +
          "<p><strong>What each tongue position shows</strong> &mdash; grade by the most posterior structure you can still see:</p>" +
          "<ul><li><strong>FTP I</strong>: entire uvula and tonsils/pillars visible (full oropharynx view).</li>" +
          "<li><strong>FTP IIa</strong>: entire uvula visible but not the tonsils.</li>" +
          "<li><strong>FTP IIb</strong>: soft palate and the base of the uvula visible, but not the full uvula.</li>" +
          "<li><strong>FTP III</strong>: soft palate visible but not the uvula at all.</li>" +
          "<li><strong>FTP IV</strong>: only the hard palate visible.</li></ul>" +
          "<p><em>Memory hook &mdash; \"climbing the ceiling\": as the grade rises, the tongue base rises and hides progressively more, so the view climbs up from tonsils &rarr; uvula &rarr; soft palate &rarr; hard palate. The less you see, the higher the number, the worse the airway.</em></p>" +
          "<p>Clinically, FTP III-IV correlates with retrolingual (tongue-base) obstruction, while FTP I-II usually does not &mdash; exactly why high grades predict that palate-only surgery will miss the problem.</p>" +
          "<p><strong>The full staging system &mdash; tongue position + tonsils + BMI:</strong> FTP alone is one of three ingredients in the Friedman staging system: (1) Friedman tongue/palate position (I-IV), (2) tonsil size (Brodsky grade 0-4), (3) BMI (cutoff of 40 kg/m&sup2;).</p>" +
          "<table><thead><tr><th>Stage</th><th>Tonsil size</th><th>Tongue/palate position</th><th>BMI</th><th>UPPP success (approx.)</th></tr></thead><tbody>" +
          "<tr><td>I</td><td>Large (3-4)</td><td>Favorable (FTP I-II)</td><td>&lt;40</td><td>~80%</td></tr>" +
          "<tr><td>II</td><td>Large (3-4) with unfavorable FTP (III-IV), or small (0-2) with favorable FTP (I-II)</td><td>Mixed</td><td>&lt;40</td><td>~40%</td></tr>" +
          "<tr><td>III</td><td>Small (0-2)</td><td>Unfavorable (FTP III-IV)</td><td>&lt;40</td><td>&lt;10%</td></tr>" +
          "<tr><td>IV</td><td>Any</td><td>Any</td><td>&gt;40</td><td>Surgery generally not recommended</td></tr>" +
          "</tbody></table>" +
          "<p><em>Memory hook: \"Big tonsils + small tongue = something to remove = UPPP works (Stage I). Small tonsils + big tongue = nothing to remove at the palate = UPPP fails (Stage III).\"</em> Palate surgery works best when there is bulky palatine tissue obstructing and the tongue base is not the culprit.</p>" +
          "<p><strong>Why it matters &mdash; predicts palate surgery success:</strong> the staging exists to answer one question before offering uvulopalatopharyngoplasty (UPPP): is the obstruction at the palate (fixable by UPPP) or the tongue base (not fixable by UPPP)?</p>" +
          "<p>Stage I (favorable anatomy, big tonsils) &rarr; UPPP alone succeeds ~80% of the time. Stage II &rarr; intermediate (~40%). Stage III (tongue-base-dominant) &rarr; UPPP alone succeeds &lt;10%; these patients need multilevel or tongue-base-directed treatment (e.g., hypoglossal nerve stimulation, tongue-base reduction, or MMA), not an isolated palate operation.</p>" +
          "<p><em>One-liner: \"Anatomy predicts UPPP success better than AHI does\" &mdash; how bad the numbers are matters less than where the obstruction sits.</em></p>" +
          "<p><strong>Caveats:</strong> inter-examiner agreement is imperfect (the tongue and palate are mobile, so grading varies between examiners) &mdash; treat FTP as a useful screen, not a precision measurement. It also does not replace DISE (drug-induced sleep endoscopy): Friedman staging is a clinic-chair predictor, while DISE directly visualizes the level(s) of collapse and is what ultimately tailors surgery.</p>"
      },
      {
        id: "hgns-anatomy",
        title: "The hypoglossal nerve and tongue protrusion",
        tagline: "CN XII · Medial/lateral branch split · Hypoglossal stimulation",
        html: "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/hypoglossal_nerve_branches.png' alt='Hypoglossal nerve branches' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>CN XII course and genioglossus innervation underlying tongue protrusion and its role in OSA/airway patency.</figcaption></figure>" +
          "<p><strong>CN XII is the pure motor nerve of the tongue</strong> &mdash; the nerve that keeps the tongue from falling back and blocking the airway in sleep.</p>" +
          "<ul><li><strong>Pure motor nerve:</strong> CN XII supplies all intrinsic tongue muscles and all extrinsic tongue muscles <strong>except</strong> the palatoglossus, which is innervated by the vagus (CN X) via the pharyngeal plexus.</li></ul>" +
          "<p><em>Memory hook: \"palatoGLOSSus is the odd one out &mdash; it's a palate muscle wearing a tongue muscle's name.\"</em></p>" +
          "<p><strong>Protrusors vs. retractors (the key functional split):</strong></p>" +
          "<ul><li><strong>Protrusors</strong> (push the tongue out, open the airway) = <strong>genioglossus</strong> (the main one), plus geniohyoid/intrinsic protrusive fibers.</li>" +
          "<li><strong>Retractors</strong> (pull the tongue back) = <strong>hyoglossus</strong> and <strong>styloglossus</strong>.</li></ul>" +
          "<p><em>Memory hook: \"Genioglossus = GO forward; hyoglossus/styloglossus = haul it back.\"</em> This split is the entire anatomic basis for how the stimulator is targeted.</p>" +
          "<p><strong>The genioglossus is the airway's main dilator:</strong> it contracts with each inspiration to pull the tongue base forward and keep the retrolingual airway open. Tone normally drops at sleep onset; in OSA, too little genioglossus activity lets the tongue fall back and obstruct.</p>" +
          "<p><strong>Five-segment course</strong> (medulla &rarr; tongue): medullary &rarr; cisternal &rarr; skull-base (hypoglossal canal in the occipital bone) &rarr; carotid space &rarr; sublingual. Extracranially it descends near the internal carotid/internal jugular, loops forward below the mandible, crosses the external carotid and lingual arteries, and enters the tongue at the anterior border of hyoglossus.</p>" +
          "<p>Clinical point: this long, exposed course is why CN XII palsy has so many causes &mdash; skull-base tumor, carotid dissection, carotid endarterectomy injury, neck surgery/trauma.</p>" +
          "<p><strong>C1/ansa cervicalis hitchhikers:</strong> in the neck the nerve carries along C1 fibers that peel off to supply geniohyoid and thyrohyoid, and, via the ansa cervicalis, the infrahyoid strap muscles. These aren't \"true\" CN XII fibers &mdash; they just travel with it.</p>" +
          "<p><strong>The lesion sign:</strong> a unilateral CN XII lesion makes the protruded tongue deviate <strong>toward</strong> the weak (lesion) side &mdash; the intact genioglossus on the normal side pushes the tongue across. Chronic lesions show ipsilateral atrophy and fasciculations.</p>" +
          "<p><em>Memory hook: \"the tongue points to the lesion.\"</em></p>" +
          "<p><strong>Inclusion vs. exclusion branches (why cuff placement matters):</strong> CN XII is a pure motor nerve. Distal to its main trunk it divides into a <strong>medial division</strong> and a <strong>lateral division</strong>, which do opposite things to the tongue.</p><ul>" +
          "<li><strong>Medial branches &rarr; protrusors</strong> (genioglossus, plus geniohyoid/intrinsic protrusive muscles, with a C1 contribution). Stimulating these protrudes and stiffens the tongue, opening the retrolingual airway. These are the <strong>'inclusion' branches</strong> &mdash; the stimulation cuff is placed to capture them.</li>" +
          "<li><strong>Lateral branches &rarr; retractors</strong> (hyoglossus, styloglossus). Stimulating these retracts the tongue (counterproductive), so they are the <strong>'exclusion' branches</strong> &mdash; deliberately kept out of the cuff.</li></ul>" +
          "<p>Optimal outcomes depend on selectively driving the medial (protrusor) fibers while avoiding the lateral (retractor) fibers. Intraoperative <strong>nerve integrity monitoring (EMG)</strong> confirms genioglossus (protrusion) activation without hyoglossus/styloglossus (retraction) before the cuff is secured. <strong>Bipolar</strong> (not monopolar) cautery is used near the device to avoid damage.</p>"
      },
      {
        id: "cpap-how-it-works",
        title: "How CPAP works",
        tagline: "Pneumatic splinting · CPAP · Surgical adjunct",
        html: "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/CPAP_therapy.png' alt='CPAP therapy' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>CPAP as pneumatic splinting of the collapsible upper airway.</figcaption></figure>" +
          "<p><strong>How CPAP works:</strong> continuous positive airway pressure delivers a constant column of pressurized room air through a mask, acting as a <strong>pneumatic splint</strong> &mdash; positive intraluminal pressure holds the collapsible pharyngeal airway open throughout the respiratory cycle.</p>" +
          "<p>Because pressure props the airway from the inside, it works at every level of collapse simultaneously (nasopharynx, retropalatal, retroglossal) regardless of where the primary obstruction sits. That's why CPAP is first-line for essentially all severities of OSA and can start before the exact collapse site is known, unlike surgery, which must target a specific level.</p>" +
          "<p>It treats the obstruction, it does not cure it: benefits (resolved apneas, better oxygenation, less daytime sleepiness, lower blood pressure) last only as long as the device is used nightly. Stopping therapy returns the airway to baseline collapsibility.</p>" +
          "<p><strong>Pressure delivery modes:</strong></p>" +
          "<ul><li><strong>CPAP</strong>: one fixed pressure held constant through inspiration and expiration, the standard workhorse.</li>" +
          "<li><strong>APAP (auto-titrating)</strong>: the device senses flow limitation/snoring and adjusts pressure breath-to-breath within a set range; useful when a single fixed pressure is poorly tolerated or the pressure requirement varies.</li>" +
          "<li><strong>BiPAP (bilevel)</strong>: separate higher inspiratory and lower expiratory pressures; reserved for high pressure requirements, CPAP intolerance, or a coexisting hypoventilation/CO2-retention problem (obesity hypoventilation, neuromuscular disease, overlap syndrome), not routine OSA.</li></ul>" +
          "<p><strong>Adherence &mdash; the number that defines \"CPAP failure\":</strong> CPAP only works if worn. The widely used (CMS/insurer) adherence definition is <strong>&ge;4 hours/night on &ge;70% of nights</strong> over a 30-day period.</p>" +
          "<p>A patient is not a candidate for second-line therapy (including surgery) for intolerance until a genuine adherence effort has failed. \"CPAP failure\" means tried-and-couldn't-tolerate or inadequate response despite use, not simply \"declined.\"</p>" +
          "<p><strong>Why intolerance is common &mdash; and where ENT comes in:</strong> roughly a third to half of patients struggle to adhere. Common reasons include mask discomfort/leak, claustrophobia, aerophagia (swallowed air), and pressure intolerance.</p>" +
          "<p>The ENT-relevant reason is <strong>nasal obstruction</strong> (septal deviation, turbinate hypertrophy, polyps, valve collapse), which raises nasal resistance and makes delivered pressure uncomfortable or ineffective. This is why ENT evaluation of the nasal airway is key to salvaging a struggling CPAP user.</p>" +
          "<p><strong>Where sleep surgery fits:</strong> surgery is generally a CPAP alternative or adjunct, not a first-line replacement.</p>" +
          "<ul><li><strong>Adjunctive (rescue CPAP):</strong> nasal surgery (septoplasty, turbinate reduction, valve repair) rarely cures OSA alone but lowers nasal resistance and improves CPAP tolerance/adherence &mdash; the most common ENT contribution.</li>" +
          "<li><strong>Alternative (replace CPAP):</strong> for CPAP-intolerant patients, site-directed procedures (palate surgery/UPPP, tongue-base procedures, hypoglossal nerve stimulation, maxillomandibular advancement) treat the specific collapse level(s) identified on exam and DISE.</li></ul>" +
          "<p><strong>Exceptions worth remembering:</strong> in children, adenotonsillar hypertrophy is the usual driver, so adenotonsillectomy is first-line, not CPAP. Any patient with anatomic obstruction amenable to a specific fix may go to surgery earlier.</p>"
      }
    ],
    diagrams: [
      {
        kind: "image",
        occlude: true,
        id: "airway-obstruction-sites",
        title: "Levels of upper airway obstruction",
        note: "Nasal, retropalatal, and retroglossal levels: name each, then reveal what surgery targets it.",
        src: "assets/img/figures/level_upper_airway_obstruction_labeled.png",
        source: "Levels of Upper Airway Obstruction and Targeted Surgeries. Illustration generated with Google Gemini.",
        labels: [
          { id:"nasal", text:"Nasal cavity: septum/turbinates; affects CPAP tolerance more than apnea directly", box:{x:73.5,y:20.0,w:17.0,h:8.0} },
          { id:"retropalatal", text:"Retropalatal region: soft palate/uvula/lateral walls (UPPP target)", box:{x:73.5,y:44.0,w:26.5,h:8.0} },
          { id:"retroglossal", text:"Retroglossal region: tongue base (hypoglossal nerve stimulator / tongue-base surgery target)", box:{x:73.5,y:57.0,w:27.0,h:8.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "friedman-tongue-position",
        title: "Friedman tongue position (I-IV)",
        note: "How much the tongue base obscures the view on relaxed oral exam. Name each grade, then reveal.",
        src: "assets/img/figures/Friedman_tongue.png",
        source: "Friedman Tongue Position Grades (I-IV). ResearchGate / Friedman et al.",
        labels: [
          { id:"i", text:"Grade I: full view of tonsils/pillars/soft palate", box:{x:23.0,y:46.0,w:4.0,h:4.0} },
          { id:"ii", text:"Grade II: partial view, some tongue-base crowding", box:{x:72.9,y:46.0,w:4.0,h:4.0} },
          { id:"iii", text:"Grade III: soft palate visible, tongue base obscures most", box:{x:22.5,y:96.5,w:4.5,h:3.3} },
          { id:"iv", text:"Grade IV: only hard palate visible; worst predictor for UPPP-alone success", box:{x:72.3,y:96.5,w:5.0,h:3.3} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "hypoglossal-stimulator-pathway",
        title: "Hypoglossal nerve stimulator",
        note: "Sensing lead, generator, and stimulation cuff: name each component, then reveal.",
        src: "assets/img/figures/hypoglossal_nerve_stimulator_diagram.png",
        source: "Hypoglossal Nerve Stimulator Components (Generator, Sensing Lead, Cuff). Xia et al. (2023) Sensors 23(21):8882.",
        labels: [
          /* NOTE: box widened ~24% (w 12.5->15.5) and shifted left (x 2.5->1.0) to fully cover the "hypoglossal nerve" label text, which was peeking out from under the occlusion box. This is a blind estimate (no visual preview available) -- spot-check against the actual image and adjust before shipping. */
          { id:"hypoglossal-nerve", text:"Hypoglossal nerve (CN XII): the stimulation target; contracting genioglossus protrudes the tongue in phase with inspiration", box:{x:1.0,y:52.5,w:15.5,h:3.5} },
          { id:"stimulating-electrodes", text:"Stimulating electrodes (labeled 'Stimuliti Electrodes' on the figure): a cuff placed around CN XII that delivers the stimulus", box:{x:8.0,y:66.0,w:18.5,h:4.0} },
          { id:"stimulation-lead", text:"Stimulation lead: wire carrying the pulse from the generator to the hypoglossal nerve cuff", box:{x:27.0,y:74.5,w:16.0,h:4.5} },
          { id:"battery", text:"Battery: powers the implanted pulse generator", box:{x:48.5,y:74.0,w:7.5,h:4.5} },
          { id:"generator", text:"Pulse generator: implanted in the chest wall; houses the battery and times stimulation to the breathing signal", box:{x:62.5,y:76.5,w:10.5,h:4.0} },
          { id:"breathing-sensing-lead", text:"Breathing sensing lead: carries the respiratory signal from the sensor to the generator", box:{x:64.8,y:64.3,w:22.3,h:4.2} },
          { id:"breathing-sensor", text:"Breathing sensor: detects inspiration so stimulation can be timed to the respiratory cycle", box:{x:71.5,y:50.5,w:17.0,h:4.5} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "hypoglossal-nerve-tongue",
        title: "The hypoglossal nerve, genioglossus, and tongue protrusion",
        note: "CN XII runs from the brainstem to the genioglossus. Name each structure, then reveal how it opens the airway.",
        src: "assets/img/figures/hypoglossal_nerve_branches.png",
        source: "The Hypoglossal Nerve, Genioglossus, and Tongue Protrusion Mechanics. Mashaqi et al. (2021) Int J Environ Res Public Health.",
        labels: [
          { id:"intrinsic-tongue-muscles", text:"Intrinsic muscles of the tongue (oblique, vertical, horizontal fibers): reshape the tongue but don't move it in space; not the muscle group hypoglossal stimulation targets", box:{x:4.3,y:1.2,w:28.6,h:7.8} },
          { id:"palatoglossus", text:"Palatoglossus muscle: forms the anterior tonsillar pillar; couples tongue movement to the soft palate", box:{x:36.7,y:10.0,w:12.5,h:6.9} },
          { id:"palatoglossus-coupling", text:"Palatoglossus coupling: tongue elevation pulls on the soft palate, linking tongue-base and palatal position", box:{x:81.1,y:20.1,w:17.6,h:8.3} },
          { id:"hypoglossal-nerve-branches", text:"Hypoglossal nerve (CN XII), medial and lateral branches: the medial branch mainly drives the protrudors (genioglossus), the lateral branch the retractors, so cuff placement determines which action dominates", box:{x:52.5,y:33.6,w:32.6,h:7.4} },
          { id:"protruders", text:"Protrudors (extrinsic tongue muscles, chiefly genioglossus): pull the tongue forward, opening the retroglossal airway; the action hypoglossal nerve stimulation recruits (labeled 'Prtotruders' on the figure)", box:{x:0.9,y:44.4,w:26.0,h:9.8} },
          { id:"styloglossus", text:"Styloglossus muscle: an extrinsic retractor; pulls the tongue up and back", box:{x:56.9,y:49.5,w:16.0,h:7.1} },
          { id:"lateral-branch-mark", text:"L: point where the hypoglossal nerve's lateral branch enters the retractor muscle group", box:{x:49.1,y:54.9,w:1.9,h:3.9} },
          { id:"medial-branch-mark", text:"M: point where the hypoglossal nerve's medial branch enters the protrudor (genioglossus) muscle group", box:{x:42.5,y:65.2,w:2.4,h:4.2} },
          { id:"retractors", text:"Retractors (extrinsic tongue muscles, e.g. styloglossus, hyoglossus): pull the tongue backward and can worsen retroglossal obstruction if they dominate over the protrudors", box:{x:60.0,y:55.6,w:31.4,h:8.6} },
          { id:"hyoglossus", text:"Hyoglossus muscle: extrinsic retractor and depressor of the tongue", box:{x:60.1,y:73.3,w:12.1,h:7.4} },
          { id:"genioglossus", text:"Genioglossus muscle: the principal tongue protrudor; the muscle hypoglossal nerve stimulation targets to relieve OSA", box:{x:24.3,y:75.5,w:12.1,h:7.1} },
          { id:"mylohyoid", text:"Mylohyoid muscle (cut in this dissection): forms the floor of the mouth; elevates the hyoid/tongue during swallowing", box:{x:28.7,y:81.4,w:14.2,h:7.4} },
          { id:"geniohyoid", text:"Geniohyoid muscle: extrinsic tongue/hyoid muscle; carries C1 fibers that travel with, but are not part of, CN XII's own motor supply", box:{x:31.2,y:86.3,w:11.2,h:6.6} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "cpap-mechanism",
        title: "How CPAP holds the airway open: pneumatic splinting",
        note: "Same airway, no pressure versus with positive airway pressure. Name each panel, then reveal.",
        src: "assets/img/figures/CPAP_therapy.png",
        source: "How CPAP Works: Continuous Pneumatic Airway Splinting. Illustration generated with Google Gemini.",
        labels: [
          { id:"collapsed-airway", text:"Collapsed airway: without pressure support, the soft palate/tongue-base tissue apposes the pharyngeal wall and obstructs the airway", box:{x:1.4,y:56.5,w:13.6,h:13.8} },
          { id:"larynx", text:"Larynx: landmark below the collapsing retropalatal/retroglossal airway; not itself the site of obstruction in OSA", box:{x:4.6,y:73.3,w:9.9,h:4.8} },
          { id:"cpap-mask", text:"CPAP mask: interface delivering continuous positive pressure to the upper airway; poor fit/comfort is the leading cause of non-adherence", box:{x:45.1,y:20.8,w:13.6,h:11.1} },
          { id:"open-airway", text:"Open airway: same airway held patent by the pneumatic splinting effect of positive pressure", box:{x:87.9,y:45.6,w:6.7,h:9.5} },
          { id:"positive-airway-pressure", text:"Positive airway pressure: acts as a pneumatic splint, pushing outward on the pharyngeal walls at every level of potential collapse", box:{x:87.9,y:61.0,w:8.8,h:14.3} },
          { id:"without-cpap", text:"Without CPAP: the panel depicting unsupported, collapsible upper airway anatomy during sleep", box:{x:19.1,y:91.9,w:16.6,h:4.8} },
          { id:"with-cpap", text:"With CPAP: the panel depicting the same airway splinted open by continuous positive pressure", box:{x:65.7,y:91.9,w:12.8,h:4.8} }
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
        html: "<p>A validated 8-item screen. Each item scores one point:</p><ul><li><strong>S</strong>noring loudly (louder than talking, or heard through a closed door)</li><li><strong>T</strong>iredness/fatigue/sleepiness during the day</li><li><strong>O</strong>bserved apnea (someone has witnessed you stop breathing during sleep)</li><li><strong>P</strong>ressure: treated or untreated high blood pressure</li><li><strong>B</strong>MI &gt;35 kg/m&sup2;</li><li><strong>A</strong>ge &gt;50 years</li><li><strong>N</strong>eck circumference &gt;40cm</li><li><strong>G</strong>ender: male</li></ul><p><strong>≥3 positive</strong> flags high risk and should prompt referral for a sleep study; it is a screening tool, not diagnostic. Risk stratifies further beyond the simple ≥3 cutoff, which matters most in the <strong>preoperative</strong> setting.</p>",
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
            ["5-14", "Mild OSA"],
            ["15-29", "Moderate OSA"],
            ["≥30", "Severe OSA"]
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
        html: "<p><strong>Core principle:</strong> OSA treatment is a ladder, not a menu. Start with the option that reliably works regardless of where the airway collapses, and escalate only when it fails.</p>" +
          "<p>Because positive airway pressure splints the entire airway at once, it is first-line before the obstruction site is even known. Surgery generally enters only after CPAP has genuinely failed, chosen based on where the airway collapses.</p>" +
          "<p><strong>The rungs, in order:</strong></p>" +
          "<ol><li><strong>Behavioral/foundational therapy</strong>, for everyone: weight loss (~10% weight reduction lowers AHI by roughly a quarter), reduced evening alcohol, and positional therapy for supine-predominant OSA (supine AHI &ge;2x non-supine). Complementary, not standalone cures for most patients.</li>" +
          "<li><strong>CPAP</strong>: first-line for essentially all diagnosed OSA; works at any severity and collapse level. The limiting factor is adherence, not efficacy.</li>" +
          "<li><strong>Oral appliance (mandibular advancement device, MAD)</strong>: first-line alternative for mild-to-moderate OSA, and a key option for CPAP-intolerant patients at any severity. Less efficacious than CPAP at lowering AHI but often better tolerated, so real-world effectiveness can be comparable. Custom, titratable, dentist-fitted; confirm efficacy with a follow-up sleep study.</li>" +
          "<li><strong>Site-directed surgery</strong>, when CPAP fails (intolerance, non-adherence, or inadequate response); the procedure matches the collapse site(s): nasal surgery (adjunct to rescue CPAP tolerance), palate-level surgery (UPPP) for retropalatal collapse, hypoglossal nerve stimulation for tongue-base collapse in selected patients, maxillomandibular advancement for skeletal/multilevel disease. In children, adenotonsillectomy is the exception &mdash; first-line, not a last resort.</li></ol>" +
          "<p><strong>What \"CPAP failed\" actually means:</strong> not \"the patient dislikes it.\" Failure = documented intolerance, non-adherence despite troubleshooting (mask refit, humidification, treating nasal obstruction, ramp/pressure-relief), or inadequate AHI/symptom response despite use. Fix the fixable before climbing the ladder.</p>" +
          "<p><strong>Worked example &mdash; how a real patient moves down the ladder:</strong></p>" +
          "<p>A 45-year-old man, BMI 31, has moderate OSA (AHI 22) and an Epworth score of 13.</p>" +
          "<p><strong>Rungs 1-2:</strong> he's counseled on ~10% weight loss and started on CPAP (the default first step); he's also told to cut evening alcohol.</p>" +
          "<p><strong>Reassess at ~30-90 days:</strong> the device download shows 2.5 h/night on 40% of nights. He reports mask leak and a blocked nose. This is not yet \"CPAP failure\" &mdash; it's a troubleshooting trigger. A nasal steroid is started, the mask is refitted, humidification is added, and nasal surgery is considered as an adherence adjunct.</p>" +
          "<p><strong>If still non-adherent:</strong> now this is genuine CPAP failure. Offer a mandibular advancement device (reasonable given moderate severity) or proceed to a surgical workup.</p>" +
          "<p><strong>If heading toward surgery:</strong> DISE identifies the collapse site(s), which selects the operation &mdash; e.g. isolated retropalatal collapse &rarr; palate surgery; tongue-base collapse without complete concentric palatal collapse &rarr; hypoglossal nerve stimulation candidate.</p>" +
          "<p><em>Teaching point: the ladder is iterative &mdash; most of the clinical work happens at the \"reassess and troubleshoot\" step, not the jump to surgery.</em></p>" +
          "<p><strong>What DISE is and why it matters:</strong> drug-induced sleep endoscopy (DISE) is a flexible nasendoscopic exam of the upper airway performed under light sedation (propofol or dexmedetomidine) that simulates sleep, letting the surgeon watch the airway collapse in real time and see which structures obstruct and in what pattern.</p>" +
          "<p>Why it's needed: CPAP doesn't care where the airway collapses, but surgery does. An awake exam (e.g. Muller maneuver) poorly predicts what happens during sleep. DISE dynamically localizes the obstruction so the operation targets the right level.</p>" +
          "<p>What it reports: collapse graded by level and pattern, commonly using the <strong>VOTE classification</strong> &mdash; Velum (palate), Oropharynx/lateral walls, Tongue base, Epiglottis &mdash; noting degree (none/partial/complete) and configuration (anteroposterior, lateral, concentric) at each site.</p>" +
          "<p>The single highest-yield DISE rule: <strong>complete concentric collapse at the velum/palate is a contraindication to hypoglossal nerve stimulation</strong>, so DISE is mandatory before HGNS to exclude that pattern.</p>" +
          "<p>How it changes management: DISE alters the surgical plan versus awake assessment in roughly half of patients and, in some series, reduces unnecessary multilevel surgery while improving success rates. It can also be done with CPAP/MAD in place to explain why a current therapy is failing.</p>" +
          "<p><em>Honest limitation: DISE is a single sedated snapshot, sedation protocols aren't fully standardized, and it doesn't reliably reproduce REM sleep &mdash; so it informs, rather than dictates, the plan.</em></p>"
      },
      {
        id: "glp1-osa-pharmacotherapy",
        title: "Weight-loss pharmacotherapy for OSA (tirzepatide)",
        html: "<p>In December 2024, <strong>tirzepatide (Zepbound)</strong> &mdash; a dual GIP/GLP-1 receptor agonist &mdash; became the first drug FDA-approved for moderate-to-severe OSA in adults with obesity, based on the SURMOUNT-OSA phase 3 trials. Over 52 weeks it reduced AHI by <strong>~20-25 events/h</strong> (vs. minimal change on placebo), with <strong>~42-50% of patients reaching disease remission</strong> (AHI &lt;5, or &lt;15 without symptoms), alongside ~16-20% weight loss and improvements in hypoxic burden, hsCRP, and systolic BP. Mechanism is primarily weight loss (reducing tongue and parapharyngeal fat), with possible weight-independent effects.</p><p><strong>Key caveats:</strong> it does not match CPAP's AHI reduction (~22 vs ~31 events/h), it is for <strong>BMI &ge;30</strong> (unlikely to help non-obese or purely anatomic obstruction), weight/AHI regain occurs after discontinuation, and cardiovascular-outcome benefit is unproven. Best positioned as a <strong>disease-modifying adjunct</strong> &mdash; combined with CPAP, for preoperative optimization, or potentially to expand HGNS candidacy &mdash; not a blanket CPAP replacement.</p>"
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
            ["Nasal surgery (septoplasty, turbinate reduction)", "Nasal: reduces upstream resistance only", "Adjunct to improve CPAP tolerance/adherence; rarely produces a clinically significant AHI reduction alone, so not used as primary OSA therapy"]
          ]
        }
      },
      {
        id: "hgns-how-it-works",
        title: "Hypoglossal nerve stimulation (HGNS): how it works",
        html: "<p>An implanted device that treats OSA by electrically firing the hypoglossal nerve in time with breathing, contracting the genioglossus so the tongue protrudes and stiffens and the airway stays open &mdash; an <strong>active splint</strong>, in contrast to CPAP's <strong>pneumatic splint</strong>.</p>" +
          "<p><strong>Three components (unilateral device):</strong></p>" +
          "<ul><li><strong>Stimulation lead</strong>: a cuff electrode on the hypoglossal nerve (or its medial branch) in the neck.</li>" +
          "<li><strong>Sensing lead</strong>: placed between the intercostal muscles to detect the respiratory cycle.</li>" +
          "<li><strong>Implantable pulse generator</strong>: placed in an infraclavicular pocket, like a pacemaker.</li></ul>" +
          "<p>The generator reads inspiration from the sensing lead and delivers a stimulus phase-locked to inspiration, protruding the tongue exactly when the airway is most collapsible.</p>" +
          "<p><strong>Inclusion vs. exclusion branches &mdash; why cuff placement is everything:</strong> CN XII is pure motor, and distal to its trunk it splits into a medial division and lateral division that do opposite things.</p>" +
          "<ul><li><strong>Medial branches &rarr; protrusors</strong> (genioglossus &plusmn; geniohyoid/intrinsic protrusive fibers, with a C1 contribution). Stimulating these protrudes/stiffens the tongue &rarr; opens the retrolingual airway. These are the <strong>'inclusion' branches</strong>, captured inside the cuff.</li>" +
          "<li><strong>Lateral branches &rarr; retractors</strong> (hyoglossus, styloglossus). Stimulating these retracts the tongue (counterproductive); these are the <strong>'exclusion' branches</strong>, deliberately kept out of the cuff.</li></ul>" +
          "<p><strong>Practical operative points:</strong> intraoperative EMG/nerve integrity monitoring confirms genioglossus (protrusion) activation without hyoglossus/styloglossus (retraction) before the cuff is secured &mdash; the surgeon looks for the tongue to protrude, not retract. Bipolar (not monopolar) cautery is used near the device to avoid damaging it.</p>" +
          "<p><em>Memory hook: \"Medial = Move it forward (include); Lateral = Leave it out.\"</em></p>" +
          "<p><strong>Indications (FDA, unilateral device):</strong></p>" +
          "<ul><li>Adult (&ge;18y) with moderate-to-severe OSA who has failed or cannot tolerate CPAP</li>" +
          "<li>AHI in the approved range (originally 15-65, upper limit since expanded &mdash; confirm current device labeling)</li>" +
          "<li>BMI below threshold (originally &le;32, many payers/labels now allow &lt;35, up to &lt;40 in updated criteria &mdash; verify against current guidance)</li>" +
          "<li>&lt;25% central/mixed apneas</li>" +
          "<li>DISE showing no complete concentric collapse at the palate (the make-or-break selection step)</li></ul>" +
          "<p><strong>Contraindications:</strong></p>" +
          "<ul><li>Complete concentric collapse of the velum/palate on DISE (the single most important exclusion &mdash; the collapse is too circumferential for tongue protrusion to overcome)</li>" +
          "<li>BMI or AHI above current thresholds, &ge;25% central/mixed apnea</li>" +
          "<li>Severe obstructive/restrictive lung disease</li>" +
          "<li>Neurologic conditions limiting upper-airway/tongue control (or prior surgery that does so)</li>" +
          "<li>Pregnancy (or planned pregnancy)</li>" +
          "<li>Inability to operate the device, or need for incompatible MRI</li></ul>" +
          "<p><strong>Why DISE matters:</strong> the target is tongue-base/retrolingual (anteroposterior) collapse, which responds well; complete concentric palatal collapse does not, which is why every candidate gets a drug-induced sleep endoscopy first.</p>" +
          "<p><strong>Unilateral vs. bilateral HGNS:</strong></p>" +
          "<p><strong>Unilateral</strong> (established approach): cuff on one hypoglossal nerve (typically the right), stimulating the medial/protrusor fibers, synchronized to inspiration via a respiratory sensing lead. The FDA-approved, phase-III-validated design, with STAR/ADHERE data showing ~68-83% AHI reduction.</p>" +
          "<p><strong>Bilateral</strong> (newer): stimulates both hypoglossal nerves and, in the current device, is breath-rate-independent (no separate chest sensing lead). Single-arm trials show meaningful AHI reduction but still less mature than unilateral data.</p>" +
          "<p><em>One-line contrast: \"Unilateral = one nerve, sensor-triggered with the breath; bilateral = both nerves, breath-rate-independent.\"</em></p>"
      },
      {
        id: "hgns-indications",
        title: "HGNS indications (FDA)",
        html: "<p>Core FDA candidacy criteria for (unilateral) HGNS:</p><ul><li>Age &ge;18</li><li>Moderate-to-severe OSA (<strong>AHI 15-65</strong> in original labeling, now expanded up to <strong>AHI &le;100</strong>)</li><li>CPAP failure or intolerance</li><li>Central + mixed apneas &lt;25% of total AHI</li><li>BMI below threshold (originally &le;32, now expanded to <strong>&le;40</strong> under updated guidance; many insurers still use &lt;35)</li><li>Absence of <strong>complete concentric collapse (CCC)</strong> at the velum on DISE</li></ul><p>A pre-implant DISE is mandatory to confirm a favorable collapse pattern.</p>"
      },
      {
        id: "hgns-contraindications",
        title: "HGNS contraindications",
        html: "<ul><li><strong>Complete concentric collapse (CCC)</strong> at the velum on DISE (the classic disqualifier &mdash; tongue protrusion cannot overcome circumferential palatal collapse driven by the lateral walls)</li><li>Central or mixed apneas &ge;25% of the AHI</li><li>BMI above threshold</li><li>AHI above the labeled ceiling</li><li>Neurologic conditions or prior upper-airway surgery limiting tongue/airway control</li><li>Inability to operate the patient controller</li><li>Pregnancy or plans to become pregnant</li><li>Need for MRI incompatible with the device</li><li>Severe obstructive/restrictive lung disease</li></ul><p>Note: oropharyngeal lateral-wall collapse on DISE, while not an absolute contraindication, predicts reduced efficacy.</p>"
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
      back:"<strong><5</strong> normal, <strong>5-14</strong> mild OSA, <strong>15-29</strong> moderate OSA, <strong>≥30</strong> severe OSA (events/hour of sleep, from PSG or a home sleep apnea test)." },
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
      back:"Advancing both the maxilla and mandible forward, which <strong>enlarges the entire skeletal airway framework</strong> and addresses multilevel obstruction at once rather than one anatomic site. Highly effective for appropriate candidates but more invasive (orthognathic-level surgery). In pooled analyses, MMA achieves <strong>~85% surgical success and ~46% cure</strong>, outperforming multilevel soft-tissue surgery (~65% success, ~28% cure) at the cost of higher (though still low) major-complication rates. Its benefit is greatest at the lateral pharyngeal wall, and it can even resolve palatal complete concentric collapse &mdash; making it an option for some patients excluded from HGNS." },
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
      back:"The gold-standard sleep study, capable of diagnosing central and other sleep disorders through full monitoring of EEG, airflow, effort, and oximetry, is <mark class=\"cloze-answer\">in-lab polysomnography (PSG)</mark>. A home sleep apnea test (HSAT) is a limited-channel alternative for patients with a high pretest probability of moderate-severe OSA and no major comorbidities, though it can underestimate severity. HSAT is a <strong>'rule-in, not rule-out'</strong> test &mdash; it can underestimate severity because it uses total recording time (not EEG-measured sleep) and, without EEG, scores hypopneas by desaturation only (&ge;3% recommended, &ge;4% optional), missing arousal-based events. A negative/nondiagnostic HSAT with persistent clinical suspicion warrants in-lab PSG. Reserve PSG for significant cardiopulmonary disease, neuromuscular weakness, suspected hypoventilation/central apnea, chronic opioid use, prior stroke, or severe insomnia." },
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
    { id:"hgns-candidacy-card", tags: ["SL", "clinical"], milestones:["PC9","MK1"], ukmla:"Obstructive sleep apnoea", source:"FDA hypoglossal nerve stimulation approval criteria (updated); STAR trial inclusion criteria (Strollo et al., NEJM 2014).", front:"What are the indications and candidacy criteria for hypoglossal nerve stimulation (HGNS) in obstructive sleep apnea?",
      back:"Age &ge;18, CPAP-intolerant/failed, moderate-to-severe OSA (classically <strong>AHI 15-65</strong>, now expanded up to &le;100), central+mixed apneas &lt;25% of AHI, BMI below threshold (classically &le;32, expanded to &le;40), and no complete concentric collapse of the velum on DISE. Pre-implant DISE is mandatory.<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/hypoglossal_nerve_stimulator_diagram.png' alt='Hypoglossal nerve stimulator diagram' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>FDA/STAR-trial candidacy criteria for hypoglossal nerve stimulation, with an embedded figure of the generator/lead/cuff components.</figcaption></figure>" },
    { id:"tirzepatide-osa-card", tags: ["SL", "clinical"], milestones:["PC9","MK2"], ukmla:"Obstructive sleep apnoea", source:"Anderer, JAMA (FDA approval), 2025; Malhotra et al., Nat Med (SURMOUNT-OSA), 2026.", front:"The first drug FDA-approved (December 2024) for moderate-to-severe OSA in adults with obesity is <span class=\"cloze-blank\">[...]</span>.",
      back:"The first drug FDA-approved (December 2024) for moderate-to-severe OSA in adults with obesity is <mark class=\"cloze-answer\">tirzepatide (Zepbound)</mark>, a dual GIP/GLP-1 receptor agonist. In SURMOUNT-OSA it cut AHI by ~20-25 events/h with ~42-50% remission, but it works mainly through weight loss, requires BMI &ge;30, doesn't match CPAP's efficacy, and AHI regains after stopping." },
    { id:"hgns-branch-anatomy-card", tags: ["SL", "anatomy"], milestones:["MK1","PC9"], ukmla:"Obstructive sleep apnoea", source:"Sturm et al., Laryngoscope, 2020; Bassiri Gharb et al., Neuromodulation, 2015.", front:"In hypoglossal nerve stimulation, which division of CN XII is targeted ('inclusion') and which is avoided ('exclusion'), and why?",
      back:"<strong>Medial branches (inclusion)</strong> innervate the protrusors (genioglossus) &rarr; captured by the cuff to protrude/stiffen the tongue and open the retrolingual airway. <strong>Lateral branches (exclusion)</strong> innervate the retractors (hyoglossus, styloglossus) &rarr; kept out of the cuff, since retraction would worsen obstruction. Intraoperative EMG confirms selective protrusor activation." },
    { id:"hgns-ccc-card", tags: ["SL", "clinical"], milestones:["PC9","MK1"], redFlag:true, ukmla:"Obstructive sleep apnoea", source:"Kahmke et al., JOMI, 2023; Vena et al., Eur Respir J, 2025.", front:"The DISE finding that is the classic contraindication to unilateral hypoglossal nerve stimulation is <span class=\"cloze-blank\">[...]</span>.",
      back:"The DISE finding that is the classic contraindication to unilateral hypoglossal nerve stimulation is <mark class=\"cloze-answer\">complete concentric collapse (CCC)</mark> at the velum/soft palate. HGNS protrudes the tongue (via genioglossus), which cannot overcome circumferential collapse driven by the lateral pharyngeal walls; in the STAR trial essentially no CCC patients responded, so the FDA made absence of CCC a mandatory eligibility criterion." },

    /* -- Friedman tongue position / staging (v0.4.0 expansion) -- */
    { id:"friedman-exam-technique-card", tags: ["SL", "clinical"], milestones:["MK1","PC4"], ukmla:"Obstructive sleep apnoea", source:"Standard sleep surgery teaching on Friedman tongue position.", front:"How is the Friedman tongue position exam performed, and how does it differ from the classic Mallampati?",
      back:"Mouth open wide, tongue resting <strong>in</strong> the mouth (not protruded) and <strong>not</strong> phonating, which mimics how the tongue behaves during sleep. Classic (anesthesia) Mallampati instead has the patient <strong>protrude</strong> the tongue, since it's predicting intubation difficulty, not sleep-time collapse." },
    { id:"friedman-grades-card", tags: ["SL", "clinical"], milestones:["MK1","PC4"], ukmla:"Obstructive sleep apnoea", source:"Standard sleep surgery teaching on Friedman tongue position.", front:"What does each Friedman tongue position (I-IV) allow you to see?",
      back:"<strong>I</strong>: entire uvula and tonsils/pillars visible. <strong>II</strong>: uvula visible but not the tonsils (IIa = full uvula, IIb = only base of uvula/soft palate). <strong>III</strong>: soft palate visible but not the uvula. <strong>IV</strong>: hard palate only. A higher grade means more tongue-base obstruction." },
    { id:"friedman-staging-components-card", tags: ["SL", "clinical"], milestones:["MK1","PC4"], ukmla:"Obstructive sleep apnoea", source:"Standard sleep surgery teaching on Friedman staging.", front:"What three components make up the Friedman staging system?",
      back:"<strong>Tongue/palate position</strong> (I-IV), <strong>tonsil size</strong> (Brodsky 0-4), and <strong>BMI</strong> (cutoff 40 kg/m&sup2;). Stage I = big tonsils + favorable FTP + BMI&lt;40. Stage III = small tonsils + unfavorable FTP. Stage IV = BMI&gt;40." },
    { id:"friedman-uppp-prediction-card", tags: ["SL", "clinical"], milestones:["MK1","PC9"], ukmla:"Obstructive sleep apnoea", source:"Standard sleep surgery teaching on Friedman staging and UPPP outcomes.", front:"Friedman stage <span class=\"cloze-blank\">[...]</span> predicts ~80% UPPP success, while stage <span class=\"cloze-blank\">[...]</span> predicts &lt;10% success.",
      back:"Friedman stage <mark class=\"cloze-answer\">I</mark> predicts ~80% UPPP success, while stage <mark class=\"cloze-answer\">III</mark> predicts &lt;10% success. Big tonsils + small tongue = removable palate obstruction = UPPP works; small tonsils + big tongue = tongue-base obstruction = UPPP fails." },
    { id:"friedman-anatomy-vs-ahi-card", tags: ["SL", "clinical"], milestones:["MK1","PC9"], ukmla:"Obstructive sleep apnoea", source:"Standard sleep surgery teaching on Friedman staging and UPPP outcome predictors.", front:"Does anatomy-based (Friedman) or severity-based (AHI) staging better predict UPPP outcome?",
      back:"Anatomy-based staging predicts far better. A meta-analysis found <strong>stage I a strong positive predictor</strong> and <strong>stage III a negative predictor</strong> of UPPP success, while <strong>BMI and preoperative AHI were not significant predictors</strong>." },

    /* -- Hypoglossal nerve anatomy / HGNS mechanism (v0.4.0 expansion) -- */
    { id:"hypoglossal-motor-card", tags: ["SL", "anatomy"], milestones:["MK1"], ukmla:"Obstructive sleep apnoea", source:"Standard head and neck anatomy teaching on CN XII.", front:"CN XII innervates all intrinsic and extrinsic tongue muscles except <span class=\"cloze-blank\">[...]</span>, which is supplied by the vagus.",
      back:"CN XII innervates all intrinsic and extrinsic tongue muscles except the <mark class=\"cloze-answer\">palatoglossus</mark>, which is supplied by CN X (vagus) via the pharyngeal plexus. CN XII is otherwise a pure motor nerve." },
    { id:"tongue-protrusor-retractor-card", tags: ["SL", "anatomy"], milestones:["MK1"], ukmla:"Obstructive sleep apnoea", source:"Standard head and neck anatomy teaching on tongue musculature.", front:"Which tongue muscles protrude the tongue (and open the airway) vs. retract it?",
      back:"<strong>Protrudes</strong>: genioglossus (main) plus geniohyoid/intrinsic protrusive fibers. <strong>Retracts</strong>: hyoglossus and styloglossus. Genioglossus is the key airway dilator that loses tone in sleep and collapses in OSA." },
    { id:"cn12-lesion-card", tags: ["SL", "clinical"], milestones:["MK1","PC1"], ukmla:"Obstructive sleep apnoea", source:"Standard head and neck anatomy/neurology teaching on CN XII palsy.", front:"A unilateral hypoglossal nerve lesion causes the protruded tongue to deviate <span class=\"cloze-blank\">[...]</span>.",
      back:"A unilateral hypoglossal nerve lesion causes the protruded tongue to deviate <mark class=\"cloze-answer\">toward the side of the lesion</mark> (the intact genioglossus pushes it across). Chronic lesions show ipsilateral atrophy/fasciculations. \"The tongue points to the lesion.\"" },
    { id:"hgns-mechanism-card", tags: ["SL", "clinical"], milestones:["PC9","MK2"], ukmla:"Obstructive sleep apnoea", source:"AAO-HNSF Position Statement: Hypoglossal Nerve Stimulation for OSA.", front:"How does hypoglossal nerve stimulation keep the airway open in OSA?",
      back:"An implanted cuff electrode fires the hypoglossal nerve in phase with inspiration, contracting the genioglossus to protrude/stiffen the tongue and open the retrolingual airway &mdash; an <strong>active splint</strong>, versus CPAP's <strong>pneumatic splint</strong>." },
    { id:"hgns-inclusion-exclusion-card", tags: ["SL", "anatomy"], milestones:["MK1","PC9"], redFlag:true, ukmla:"Obstructive sleep apnoea", source:"Sturm et al., Laryngoscope, 2020; Bassiri Gharb et al., Neuromodulation, 2015.", front:"In HGNS, which hypoglossal branches are 'included' in the cuff and which are 'excluded,' and why?",
      back:"<strong>Include medial branches</strong> (protrusors: genioglossus) &mdash; they open the airway. <strong>Exclude lateral branches</strong> (retractors: hyoglossus, styloglossus) &mdash; they retract the tongue. Intraoperative EMG confirms protrusion, not retraction, before securing the cuff; bipolar (not monopolar) cautery is used near the device." },
    { id:"hgns-dise-card", tags: ["SL", "clinical"], milestones:["PC9","MK1"], redFlag:true, ukmla:"Obstructive sleep apnoea", source:"Kahmke et al., JOMI, 2023; Vena et al., Eur Respir J, 2025.", front:"What DISE finding is a contraindication to HGNS?",
      back:"<strong>Complete concentric collapse of the velum/palate.</strong> HGNS works for tongue-base/anteroposterior collapse; concentric palatal collapse is too circumferential for tongue protrusion to overcome. This is screened for with drug-induced sleep endoscopy before implant." },
    { id:"hgns-indications-card", tags: ["SL", "clinical"], milestones:["PC9","MK1"], ukmla:"Obstructive sleep apnoea", source:"FDA hypoglossal nerve stimulation approval criteria (updated); STAR trial inclusion criteria (Strollo et al., NEJM 2014).", front:"List the core FDA indications for (unilateral) HGNS.",
      back:"<ul><li>Adult &ge;18y</li><li>Moderate-to-severe OSA</li><li>CPAP failure/intolerance</li><li>AHI in the approved range</li><li>BMI below threshold</li><li>&lt;25% central/mixed apneas</li><li>No complete concentric palatal collapse on DISE</li></ul>Verify current AHI/BMI cutoffs against device labeling, as thresholds have been expanded over time." },
    { id:"hgns-unilateral-bilateral-card", tags: ["SL", "clinical"], milestones:["PC9","MK2"], ukmla:"Obstructive sleep apnoea", source:"Strollo et al., NEJM (STAR trial), 2014; Woodson et al., ADHERE registry; single-arm trials of bilateral HGNS (BLAST OSA, DREAM).", front:"Contrast unilateral vs. bilateral HGNS.",
      back:"<strong>Unilateral</strong> stimulates one hypoglossal nerve's medial (protrusor) fibers, synchronized to inspiration via a chest sensing lead; FDA-approved and STAR/ADHERE-validated (~68-83% AHI reduction). <strong>Bilateral</strong> stimulates both nerves and, in the current device, is breath-rate-independent (no separate sensing lead); supported by newer, less mature single-arm trial data." },

    /* -- Management ladder / DISE (v0.4.0 expansion) -- */
    { id:"management-ladder-card", tags: ["SL", "clinical"], milestones:["PC9","MK2"], ukmla:"Obstructive sleep apnoea", source:"AASM Clinical Practice Guideline on OSA management; standard sleep surgery teaching.", front:"Surgery for OSA is generally considered only after <span class=\"cloze-blank\">[...]</span>, and the specific operation is then chosen based on <span class=\"cloze-blank\">[...]</span>.",
      back:"Surgery for OSA is generally considered only after <mark class=\"cloze-answer\">CPAP failure</mark> (intolerance, non-adherence despite troubleshooting, or inadequate response), and the specific operation is then chosen based on <mark class=\"cloze-answer\">the site(s) of collapse</mark>, often identified on DISE. CPAP is first-line because it splints the whole airway regardless of collapse level." },
    { id:"dise-vote-classification-card", tags: ["SL", "clinical"], milestones:["PC4","PC9"], ukmla:"Obstructive sleep apnoea", source:"Standard sleep surgery teaching on drug-induced sleep endoscopy and the VOTE classification.", front:"Drug-induced sleep endoscopy (DISE) evaluates the sedated airway to localize collapse; the finding that specifically contraindicates hypoglossal nerve stimulation is <span class=\"cloze-blank\">[...]</span>.",
      back:"The finding that specifically contraindicates hypoglossal nerve stimulation is <mark class=\"cloze-answer\">complete concentric collapse at the velum/palate</mark>. DISE grades collapse by level and pattern (VOTE: Velum, Oropharynx, Tongue base, Epiglottis) and is used to select site-directed surgery and MAD/HGNS candidates." }
  ]
});

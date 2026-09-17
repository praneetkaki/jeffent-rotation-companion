/* laryngology.js: LARYNGOLOGY, VOICE & AIRWAY (subspecialty track)
 *
 * Deep dive on the larynx/airway/voice disease that Foundations only introduces.
 * Built on the same Module Build Standard as Foundations: every card/case
 * carries a UKMLA scope tag (content/ukmla.js), an ACGME Milestone tag
 * (content/frameworks.js, primarily PC6 Laryngologic Disease / PC1 Airway
 * Emergency & Management), and a named source. Content written to US practice
 * standards; UK/US differences flagged inline.
 *
 * STATUS: DRAFT, pending JeffENT faculty review. See docs/MODULE-BUILD-STANDARD.md.
 */
window.JEFFENT.register({
  id: "laryngology-voice-airway",
  track: "laryngology",
  trackName: "Laryngology, Voice & Airway",
  trackAbbr: "LA",
  order: 3,
  title: "Laryngology, Voice & Airway",
  subtitle: "The larynx in depth: subsites, vocal-fold pathology, the pediatric-airway differential, and the emergencies that live here.",
  version: "0.3.0-draft",
  level: ["core", "sub-I"],
  status: "DRAFT, pending faculty review. v0.2.0: added a depth pass covering genuinely missing sub-I topics, the unilateral vocal fold paralysis workup/management ladder (imaging along the RLN course, voice therapy, injection medialization, thyroplasty), tracheostomy in depth (tube types, the first-postoperative-week dislodgement emergency, decannulation), the subglottic stenosis cause differential (iatrogenic vs idiopathic/iSGS vs GPA) and its asthma-mimic presentation, vocal process (contact) granuloma, benign vocal fold lesion management (voice therapy vs surgery), and FEES vs modified barium swallow, grounded in standard laryngology/airway teaching and named guidelines; written fresh from clinical knowledge and named sources, not derived from any single textbook. v0.3.0: OpenEvidence-verified correction pass (user-reviewed, not faculty sign-off): updated VCD to the 2023 ILO/Delphi consensus terminology and &ge;50% closure threshold (vcd block, vcd-card); added RRP's bevacizumab and 2025 FDA-approved HPV immunotherapy (rrp-card); corrected LPR to reflect the AGA's stance against empiric PPI for isolated laryngeal symptoms (lpr-card); added early-glottic-cancer-treatment and subglottic-stenosis-management blocks/cards; added the AAO-HNS 2018 when-to-scope/what-not-to-prescribe block.",
  facultyReviewer: "",
  curriculumAnchors: [
    "UKMLA Content Map (GMC), scope anchor; owns Hoarseness and voice change, Stridor, Swallowing problems, Sore throat (laryngeal/airway angle), Cough (laryngeal angle), Epiglottitis, Tonsillitis (airway angle)",
    "ACGME Otolaryngology-HNS Milestones 2.0, primarily PC6 Laryngologic Disease, PC1 Airway Emergency & Management",
    "AAO-HNSF Clinical Practice Guideline: Hoarseness (Dysphonia), 2018",
    "UK undergraduate Delphi (Lloyd 2014), student-scope depth cap"
  ],
  frameworkAlignment: {
    competenciesCovered: ["PC", "MK"],
    note: "Subspecialty depth at student scope (Delphi); goes deeper than Foundations on the same UKMLA items (vocal-fold pathology, the pediatric-airway differential, laryngeal cancer red flags) rather than introducing new ones."
  },

  /* ==================== ANATOMY TAB ==================== */
  anatomy: {
    notes: [
      {
        title: "The laryngeal cartilage framework",
        tagline: "Thyroid cartilage · Cricoid cartilage · Arytenoid cartilages",
        html: "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/laryngeal_cartilages.png' alt='Laryngeal cartilages' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Overview of the thyroid, cricoid, arytenoid cartilages and epiglottis forming the laryngeal skeleton.</figcaption></figure><ul><li><strong>Thyroid cartilage</strong> (the 'Adam's apple') and <strong>cricoid cartilage</strong> (the only complete ring in the airway) form the outer skeleton.</li><li>The paired <strong>arytenoid cartilages</strong> sit on the cricoid and rotate/glide to open and close the vocal folds.</li><li>The <strong>epiglottis</strong> folds over the laryngeal inlet during swallowing to protect the airway.</li></ul><div class=\"tbl-scroll\"><table><thead><tr><th>Unpaired</th><th>Paired</th></tr></thead><tbody><tr><td>Thyroid</td><td>Arytenoid</td></tr><tr><td>Cricoid</td><td>Corniculate</td></tr><tr><td>Epiglottis</td><td>Cuneiform</td></tr></tbody></table></div><p>The <strong>corniculate</strong> and <strong>cuneiform</strong> cartilages are small paired cartilages within the aryepiglottic folds, above the arytenoids, that add structural support but no independent motion.</p>"
      },
      {
        title: "Three subsites: supraglottis, glottis, subglottis",
        tagline: "Laryngeal subsites · Cancer staging · Glottic cancer",
        html: "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/laryngeal_subsites_supraglottis.png' alt='Laryngeal subsites supraglottis' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Coronal division of the larynx into supraglottis, glottis, and subglottis, the basis for cancer staging and airway localization.</figcaption></figure><ul><li>The backbone of laryngeal cancer staging and of localizing airway pathology.</li><li><strong>Supraglottis</strong> (epiglottis, false folds, ventricle): rich lymphatics, so cancers present later with neck nodes.</li><li><strong>Glottis</strong> (true vocal folds): sparse lymphatics, so cancer causes hoarseness <em>early</em> and is often caught before it spreads.</li><li><strong>Subglottis</strong> (true folds to cricoid): the narrowest part of a child's airway and the site of subglottic stenosis.</li></ul><p><strong>Clinical pearl:</strong> laryngeal cancer is strongly associated with tobacco and alcohol use. Because the glottis has sparse lymphatics, glottic cancers tend to present early with hoarseness and carry the best prognosis, while supraglottic and subglottic cancers, with richer lymphatic drainage or a more silent growth pattern, tend to present later and carry a worse prognosis.</p>"
      },
      {
        title: "Vocal fold layers",
        tagline: "Vocal fold cover-body model",
        html: "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/vocal_fold_layers.png' alt='Vocal fold layers' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Layered cover-body microarchitecture of the vocal fold (epithelium, lamina propria, vocalis muscle).</figcaption></figure><ul><li>The fold is layered: <strong>epithelium</strong>, then the <strong>lamina propria</strong> (superficial 'Reinke's space', intermediate, deep), then the <strong>vocalis muscle</strong>.</li><li>Phonation depends on the epithelium and superficial lamina propria vibrating freely over the deeper layers (the 'cover-body' model).</li><li>Scarring or swelling of Reinke's space (smoking, reflux, vocal abuse) stiffens the cover and roughens the voice.</li><li>The <strong>vocalis muscle</strong> is the medial belly of the <strong>thyroarytenoid</strong> muscle: contracting it <strong>tenses and shortens</strong> the vocal fold, fine-tuning pitch and stiffness rather than opening or closing the airway.</li></ul>"
      },
      {
        title: "Laryngeal nerve supply",
        tagline: "Superior laryngeal nerve · Recurrent laryngeal nerve",
        html: "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/recurrent_laryngeal_nerve_course_2.png' alt='Recurrent laryngeal nerve course' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Superior laryngeal nerve and recurrent laryngeal nerve innervation of the larynx and their courses.</figcaption></figure><ul><li><strong>Superior laryngeal nerve</strong>: external branch to cricothyroid (pitch); internal branch for sensation above the cords.</li><li><strong>Recurrent laryngeal nerve (RLN)</strong>: every other intrinsic muscle (including the only abductor, posterior cricoarytenoid) and sensation below the cords.</li><li>The RLN is long and asymmetric: <strong>left</strong> loops under the aortic arch, <strong>right</strong> under the subclavian artery.</li><li>That is why hoarseness can be the first sign of a lung apex tumor, aortic aneurysm, or thyroid/mediastinal disease, and why the RLN is at risk in thyroid surgery.</li><li>The <strong>cricothyroid</strong> is the <strong>only</strong> intrinsic laryngeal muscle <em>not</em> innervated by the RLN: it's supplied by the <strong>external branch of the superior laryngeal nerve (EBSLN)</strong> instead.</li></ul><div class=\"tbl-scroll\"><table><thead><tr><th>Muscle</th><th>Action</th><th>Effect</th></tr></thead><tbody><tr><td>Posterior cricoarytenoid</td><td><b>Abductor</b> (the only one)</td><td>Opens the airway</td></tr><tr><td>Lateral cricoarytenoid</td><td>Adductor</td><td>Closes the airway</td></tr><tr><td>Interarytenoid (transverse arytenoid)</td><td>Adductor</td><td>Closes the airway</td></tr><tr><td>Thyroarytenoid (vocalis)</td><td>Adductor; relaxes/shortens the fold</td><td>Closes the airway; lowers pitch</td></tr><tr><td>Cricothyroid</td><td>Tenses/lengthens the fold</td><td>Raises pitch</td></tr></tbody></table></div><p><strong>Clinical pearl: non-recurrent laryngeal nerve:</strong> a rare anatomic variant, almost always on the <strong>right</strong>, seen with an <strong>aberrant right subclavian artery</strong> arising distal to the left subclavian (arteria lusoria). The 'recurrent' nerve then runs directly to the larynx without looping under a vessel, putting it at <strong>higher risk of injury</strong> during thyroid or neck surgery if it isn't recognized.</p><p><strong>RLN injury vs EBSLN injury:</strong> <strong>RLN injury</strong> causes vocal fold paralysis (usually paramedian), producing a <strong>hoarse, breathy, weak voice</strong> and aspiration risk. <strong>EBSLN injury</strong> is subtler and often under-recognized: cricothyroid weakness causes <strong>loss of high pitch and projection</strong>, vocal fatigue, and difficulty singing or projecting the voice, without frank hoarseness at rest.</p>"
      }
    ],
    diagrams: [
      {
        kind: "image",
        occlude: true,
        id: "laryngeal-cartilages",
        title: "Laryngeal cartilage framework",
        note: "The skeleton of the airway and voice box. Name each cartilage, then reveal.",
        src: "assets/img/figures/laryngeal_cartilages.png",
        source: "Laryngeal Cartilage Framework (Thyroid, Cricoid, Arytenoids, Epiglottis). Illustration generated with Google Gemini.",
        labels: [
          { id:"hyoid", text:"Hyoid bone: superior anchor for laryngeal suspension; tethers the epiglottis and thyrohyoid membrane above the larynx (not itself a laryngeal cartilage).", box:{x:3.0,y:23.0,w:12.5,h:6.0} },
          { id:"epi", text:"Epiglottis: leaf-shaped elastic cartilage that folds down over the laryngeal inlet during swallowing to protect the airway.", box:{x:42.0,y:19.5,w:16.0,h:11.5} },
          { id:"thy", text:"Thyroid cartilage: the largest laryngeal cartilage; its anterior fusion forms the laryngeal prominence ('Adam's apple').", box:{x:41.5,y:36.0,w:16.0,h:11.5} },
          { id:"cricothy", text:"Cricothyroid membrane: the surface landmark for emergency cricothyrotomy, spanning between the thyroid and cricoid cartilages.", box:{x:38.5,y:51.0,w:23.5,h:6.8} },
          { id:"cric", text:"Cricoid cartilage: the only complete cartilaginous ring in the airway; forms the lower boundary of the subglottis.", box:{x:38.5,y:61.8,w:23.5,h:7.0} },
          { id:"ary", text:"Arytenoid cartilages: paired pyramidal cartilages that rotate and glide on the cricoid to open and close the vocal folds.", box:{x:84.5,y:43.5,w:10.5,h:16.5} },
          { id:"trach", text:"Superior tracheal rings: the trachea begins just below the cricoid cartilage, continuing the airway into the chest.", box:{x:5.5,y:74.8,w:17.5,h:7.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "laryngeal-subsites",
        title: "Supraglottis \u00b7 glottis \u00b7 subglottis (coronal)",
        note: "The three subsites that stage laryngeal cancer and localize airway disease. Tap each covered label to name the subsite, then reveal.",
        src: "assets/img/figures/laryngeal_subsites_supraglottis.png",
        source: "Laryngeal subsites. Illustration generated with Google Gemini.",
        labels: [
          { id:"epiglottis", text:"Epiglottis: leaf-shaped cartilage forming the top of the supraglottis; folds over the laryngeal inlet during swallowing.", box:{x:49.6,y:16.64,w:9.77,h:4.47} },
          { id:"false-vf", text:"False vocal folds (vestibular folds): supraglottic mucosal folds above the true cords; do not vibrate for phonation, but can compensate for glottic insufficiency.", box:{x:49.3,y:23.26,w:16.6,h:8.05} },
          { id:"ventricles-morgagni", text:"Laryngeal ventricles (of Morgagni): the space between the false and true vocal folds; saccule herniation here causes a laryngocele.", box:{x:49.3,y:33.99,w:20.02,h:7.51} },
          { id:"sg", text:"Supraglottis (epiglottis, false folds, ventricle): rich lymphatics, so cancer here presents late, often with a neck node.", box:{x:67.0,y:23.4,w:30.5,h:15.0} },
          { id:"lv", text:"Laryngeal ventricle: the mucosal recess separating the false fold above from the true fold below.", box:{x:49.3,y:46.51,w:11.72,h:7.51} },
          { id:"tvf", text:"True vocal folds (vocal cords): the vibrating margin that produces voice; sparse lymphatics mean cancer here causes hoarseness early.", box:{x:9.28,y:54.2,w:15.63,h:7.51} },
          { id:"true-cords", text:"True cords: the free edge of the vocal fold, formed by the vocalis muscle covered by the epithelium and lamina propria.", box:{x:49.3,y:55.46,w:11.23,h:4.47} },
          { id:"gl", text:"Glottis (true vocal folds): sparse lymphatics, hoarseness presents early and cancer is often caught before it spreads.", box:{x:67.0,y:47.9,w:30.5,h:15.5} },
          { id:"rima", text:"Rima glottidis: the airway opening between the true vocal folds; its widest point is at the posterior commissure during abduction.", box:{x:11.52,y:67.08,w:13.18,h:4.47} },
          { id:"cricoid-cart", text:"Cricoid cartilage: the only complete cartilaginous ring in the airway, forming the subglottic framework below the folds.", box:{x:9.47,y:74.78,w:15.14,h:4.47} },
          { id:"sub", text:"Subglottis: narrowest part of a child's airway; site of subglottic stenosis (iatrogenic, idiopathic, or GPA).", box:{x:67.0,y:68.0,w:26.5,h:15.0} },
          { id:"trachea", text:"Trachea: continues the airway below the cricoid cartilage, made of incomplete (C-shaped) cartilaginous rings.", box:{x:16.41,y:85.15,w:9.28,h:4.47} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "rln-course",
        title: "Recurrent laryngeal nerve course",
        note: "Why hoarseness can be the first sign of chest, thyroid, or mediastinal disease. Tap each covered label, then reveal.",
        src: "assets/img/figures/recurrent_laryngeal_nerve_course_2.png",
        source: "Recurrent laryngeal nerve course. Illustration generated with Google Gemini.",
        labels: [
          { id:"rvn", text:"Right vagus nerve: descends in the carotid sheath and gives off the right recurrent laryngeal nerve in the root of the neck.", box:{x:0,y:9.0,w:21.0,h:4.5} },
          { id:"rrln", text:"Right recurrent laryngeal nerve: loops under the right subclavian artery, a shorter and more direct course than the left.", box:{x:0,y:16.8,w:19.5,h:8.8} },
          { id:"rsa", text:"Right subclavian artery: the right RLN hooks under this vessel before ascending back to the larynx.", box:{x:0,y:31.4,w:20.5,h:8.5} },
          { id:"lvn", text:"Left vagus nerve: continues past the aortic arch before giving off the left recurrent laryngeal nerve, giving it a longer thoracic course.", box:{x:79.5,y:9.2,w:20.5,h:4.5} },
          { id:"lrln", text:"Left recurrent laryngeal nerve: loops under the arch of the aorta, exposing it to mediastinal, thyroid, and aortic pathology.", box:{x:79.5,y:23.4,w:20.5,h:9.2} },
          { id:"lsa", text:"Left subclavian artery: arises from the aortic arch; the left RLN passes medial to it, not around it.", box:{x:79.5,y:41.5,w:20.5,h:7.0} },
          { id:"aorta", text:"Arch of the aorta: the anatomic reason the left RLN has a longer, more clinically vulnerable course than the right.", box:{x:85.5,y:54.4,w:14.5,h:5.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "vocal-fold-layers",
        title: "Vocal fold layers in cross-section",
        note: "Why voice quality depends on layers, not just open vs closed. Name each layer, then reveal.",
        src: "assets/img/figures/vocal_fold_layers.png",
        source: "Microarchitecture of the True Vocal Fold (Cover-Body Layers). Illustration generated with Google Gemini.",
        labels: [
          { id:"vf-epithelium", text:"Epithelium: the thin surface lining of the vocal fold, part of the vibrating 'cover'.", box:{x:43.6,y:12.12,w:16.58,h:4.55} },
          { id:"vf-superficial-lp", text:"Superficial lamina propria (Reinke's space): the pliable, gelatinous layer that lets the cover slide over the body; swells with smoking, reflux, or vocal abuse.", box:{x:43.5,y:20.15,w:43.75,h:9.39} },
          { id:"vf-intermediate-lp", text:"Intermediate lamina propria: elastin-rich middle layer of the vocal ligament, part of the 'transition' between cover and body.", box:{x:43.5,y:33.03,w:43.75,h:5.76} },
          { id:"vf-ligament", text:"Vocal ligament: formed by the intermediate and deep lamina propria together; the fibrous band spanning the anterior and posterior glottis.", box:{x:40.05,y:43.94,w:16.78,h:9.55} },
          { id:"vf-vocals-muscle", text:"Vocalis (thyroarytenoid) muscle: the stiffer 'body' of the fold; its tension helps set pitch.", box:{x:38.19,y:72.27,w:22.57,h:12.58} },
          { id:"vf-deep-lp", text:"Deep lamina propria: collagen-rich layer bordering the muscle, part of the 'transition' contributing to the vocal ligament.", box:{x:69.56,y:69.7,w:21.64,h:3.79} },
          { id:"vf-cover", text:"Cover: the epithelium plus superficial lamina propria; the pliable layer that vibrates freely in the mucosal wave.", box:{x:69.56,y:80.3,w:9.6,h:4.24} },
          { id:"vf-body", text:"Body: the vocalis muscle plus the vocal ligament (intermediate and deep lamina propria); the stiffer layer the cover vibrates over.", box:{x:64.0,y:86.06,w:35.53,h:8.64} }
        ]
      }
    ]
  },

  /* ==================== CLINICAL TAB ==================== */
  clinical: {
    blocks: [
      {
        id: "dysphonia-guideline-principles",
        title: "When to scope, and what not to prescribe (AAO-HNS 2018)",
        html: "<p>Perform or refer for <strong>laryngoscopy</strong> if dysphonia fails to improve/resolve within <strong>4 weeks</strong>, or <strong>expedited</strong> at any time if a serious cause is suspected (recent head/neck/chest surgery or intubation, neck mass, stridor/respiratory distress, tobacco use, professional voice user). Do <strong>not</strong> obtain CT/MRI for a primary voice complaint before visualizing the larynx. Do <strong>not</strong> routinely prescribe antireflux medication, corticosteroids, or antibiotics for dysphonia before laryngoscopy (strong recommendation against routine antibiotics).</p>"
      },
      {
        id: "vf-immobility",
        title: "Vocal fold immobility: unilateral vs bilateral",
        html: "<p>These are opposite problems: one leaks air, the other blocks it.</p>",
        table: {
          head: ["", "Unilateral", "Bilateral"],
          rows: [
            ["Voice", "Breathy, weak", "Often near-normal"],
            ["Airway", "Usually fine", "<b>Compromised: stridor, airway emergency</b>"],
            ["Aspiration risk", "Yes (glottic incompetence)", "Less (folds paramedian, close together)"],
            ["Common causes", "Thyroid surgery, lung/mediastinal mass, idiopathic, viral", "<b>Bilateral</b> thyroid surgery injury, neurologic disease"]
          ]
        }
      },
      {
        id: "vf-paralysis-workup-management",
        title: "Unilateral vocal fold paralysis: workup and the management ladder",
        html: "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/recurrent_laryngeal_nerve_course_2.png' alt='Recurrent laryngeal nerve course' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Workup of unilateral vocal fold paralysis requires imaging the entire RLN course; management ladder from voice therapy to thyroplasty.</figcaption></figure><p>Once laryngoscopy confirms an immobile fold, image the <strong>entire recurrent laryngeal nerve course</strong>, from skull base to the aortic arch and mediastinum, because a lesion anywhere along that path (lung apex tumor, thyroid mass, mediastinal node, aortic aneurysm) can be the cause, not just the neck.</p>"
          + "<p><strong>Management ladder</strong> (for a fold unlikely to be from a treatable cause found above):</p>"
          + "<ul><li><strong>Observe + voice therapy</strong> first: a genuine chance of spontaneous recovery persists for up to ~6-12 months, especially after a clear iatrogenic or viral insult.</li>"
          + "<li><strong>Injection augmentation (medialization laryngoplasty)</strong>: an in-office or OR injection of a temporary filler into the paralyzed fold to push it toward midline. Used as a bridge while recovery is still possible, or for a likely-transient palsy (e.g. malignancy with expected nerve recovery after resection).</li>"
          + "<li><strong>Medialization thyroplasty</strong> (Type I thyroplasty: a permanent implant placed through a laryngeal framework surgery) <strong>± arytenoid adduction</strong> for a larger posterior glottic gap. Reserved for once vocal fold motion is judged unlikely to recover.</li></ul>"
      },
      {
        id: "benign-vf-lesions",
        title: "Benign vocal fold lesions",
        html: "<p>Distinguish by laterality, symmetry, and history.</p>",
        table: {
          head: ["Lesion", "Typical pattern", "Cause / association"],
          rows: [
            ["Vocal nodules ('singer's nodules')", "Bilateral, symmetric, mid-membranous", "Chronic vocal abuse/misuse"],
            ["Vocal polyp", "Usually unilateral", "A single voice-abuse or straining event, or reflux"],
            ["Reinke's edema", "Diffuse, bilateral, gelatinous swelling", "Smoking (classic), also reflux/hypothyroidism; low, husky voice"],
            ["Vocal fold cyst", "Usually unilateral, submucosal", "Congenital or acquired; often needs surgical excision"]
          ]
        }
      },
      {
        id: "vocal-process-granuloma",
        title: "Vocal process (contact) granuloma",
        html: "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/vocal_process_granuloma.png' alt='Vocal process granuloma' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Contact granuloma at the vocal process of the arytenoid, usually from intubation trauma or reflux.</figcaption></figure><p>A benign inflammatory lesion at the <strong>vocal process of the arytenoid</strong> (posterior glottis), usually <strong>unilateral</strong>. Causes: intubation trauma (the classic post-operative cause), chronic <strong>laryngopharyngeal reflux</strong>, or phonotrauma (hard glottal attack, habitual throat-clearing). Often presents with globus or throat pain that seems out of proportion to a small lesion on exam. Treat the underlying cause first, with reflux therapy or voice therapy to reduce hard glottal onset and throat-clearing, since surgical excision has a <strong>high recurrence rate</strong> if the driving behavior or reflux isn't addressed.</p>"
      },
      {
        id: "peds-airway-differential",
        title: "The pediatric stridor differential",
        html: "<p>Onset speed, fever, and posture separate these quickly.</p>",
        table: {
          head: ["Condition", "Key features"],
          rows: [
            ["Croup (laryngotracheobronchitis)", "Barky cough, low fever, gradual onset, <i>steeple sign</i> on X-ray. Usually viral (parainfluenza)."],
            ["Epiglottitis (supraglottitis)", "Rapid onset, high fever, drooling, tripod, muffled voice, <i>thumbprint sign</i>. Do not examine the throat/lie flat."],
            ["Bacterial tracheitis", "Toxic-appearing, high fever, <i>fails to improve with croup treatment</i>, thick purulent secretions."],
            ["Foreign body aspiration", "Sudden onset in a well child, choking episode, unilateral wheeze/decreased breath sounds."]
          ]
        }
      },
      {
        id: "laryngeal-cancer-approach",
        title: "Laryngeal cancer: risk and the staging logic",
        html: "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/laryngeal_subsites_supraglottis.png' alt='Laryngeal subsites supraglottis' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Laryngeal cancer risk factors (synergistic tobacco/alcohol) and why subsite lymphatic drainage drives presentation timing.</figcaption></figure><p><strong>Risk factors:</strong> tobacco and alcohol act <strong>synergistically</strong> (not just additively). <strong>Why glottic cancer is caught early:</strong> the true vocal folds have sparse lymphatics, so even a small tumor causes hoarseness before it can spread. That is why persistent hoarseness gets a scope rather than being dismissed. <strong>Supraglottic and subglottic</strong> tumors are more lymphatic-rich or silent, so they tend to present later, with a neck mass or airway symptoms.</p><p><strong>Staging, high-yield overview</strong> (a simplified look at T-stage logic, not full AJCC granularity):</p>",
        table: {
          head: ["Stage", "Glottic (rough guide)", "Supraglottic / subglottic (rough guide)"],
          rows: [
            ["T1", "Confined to the vocal fold(s), <b>normal mobility</b>", "Confined to one subsite, normal mobility"],
            ["T2", "Extends to adjacent subsite, or impaired (not fixed) fold mobility", "Extends to more than one subsite or adjacent structures"],
            ["T3", "<b>Vocal fold fixation</b>, or invades paraglottic space/inner cartilage cortex", "Fixation, or invades postcricoid/paraglottic/pre-epiglottic space"],
            ["T4", "Invades through cartilage or extends outside the larynx", "Invades through cartilage or extends outside the larynx"]
          ]
        }
      },
      {
        id: "laryngeal-cancer-n-stage",
        title: "Laryngeal cancer: nodal staging, general logic",
        html: "<p>N-stage follows the general head and neck nodal pattern rather than a larynx-specific scheme: <strong>N0</strong> (no regional nodes), <strong>N1</strong> (a single ipsilateral node &le;3 cm), through <strong>N2-N3</strong> (larger, multiple, bilateral/contralateral, or extranodal-extension-positive nodes). Because the supraglottis drains to rich bilateral lymphatics, supraglottic tumors are more likely to present with nodal disease than glottic tumors of similar size.</p>"
      },
      {
        id: "early-glottic-cancer-treatment",
        title: "Early glottic cancer (T1-T2, N0): TLM vs radiotherapy",
        html: "<p>For early glottic SCC, the two standard single-modality options are <strong>transoral laser microsurgery (TLM)</strong> and <strong>definitive radiotherapy (RT)</strong>. The only randomized trial and multiple cohorts/meta-analyses show equivalent overall and disease-specific survival and high larynx-preservation with either. TLM is a single procedure that provides margin histology, spares surrounding tissue, and preserves RT for later salvage; RT may give a smoother voice in some cases but irradiates the whole larynx and generally cannot be repeated. Choice depends on tumor exposure/extent (e.g., anterior commissure involvement), voice priorities, comorbidity, and team expertise. Advanced disease (T3-T4) is managed with larynx-preservation chemoradiation or total laryngectomy, decided at tumor board.</p>"
      },
      {
        id: "vcd",
        title: "Vocal cord dysfunction (paradoxical vocal fold motion): the asthma mimic",
        html: "<p>Vocal cord dysfunction, now termed <strong>inducible laryngeal obstruction (ILO)</strong> (paradoxical vocal fold motion), is paradoxical inspiratory adduction of the vocal folds causing episodic dyspnea/inspiratory stridor that mimics asthma and does not respond to bronchodilators. Spirometry between episodes is often normal; a symptomatic episode may show a truncated/flattened inspiratory flow-volume loop. The gold standard is <strong>laryngoscopy with provocation</strong>, and the consensus threshold for an abnormal study is <strong>&ge;50% laryngeal closure on inspiration</strong> (or Maat grade &ge;2). It frequently coexists with asthma (reported ~30-50% in difficult asthma), so the presence of asthma does not exclude it. Managed with speech-therapy breathing retraining and treating triggers (reflux, irritants, exercise, anxiety), not inhaler escalation.</p>"
      },
      {
        id: "subglottic-stenosis-differential",
        title: "Subglottic stenosis: iatrogenic vs idiopathic vs GPA, and the other asthma mimic",
        html: "<p>A second airway condition that gets mistaken for asthma, distinct from VCD above: subglottic stenosis is a <strong>fixed, structural</strong> narrowing that causes <strong>biphasic</strong> stridor and exertional dyspnea that does <em>not</em> respond to bronchodilators or inhaled steroids. Failure of 'asthma' therapy should prompt flexible laryngoscopy.</p>",
        table: {
          head: ["Cause", "Key features"],
          rows: [
            ["Iatrogenic (post-intubation)", "Most common cause overall, from prolonged or traumatic intubation, or cuff overinflation."],
            ["Idiopathic (iSGS)", "Classically a healthy <b>woman in her 30s-50s</b>, never a smoker, with no identifiable cause. A diagnosis of exclusion."],
            ["Granulomatosis with polyangiitis (GPA)", "Can present as <b>isolated</b> subglottic disease before other systemic features; screen with ANCA and ask about sinonasal/renal/pulmonary symptoms; limited disease can be ANCA-negative."]
          ]
        }
      },
      {
        id: "subglottic-stenosis-management",
        title: "Subglottic stenosis: the treatment ladder",
        html: "<p>Three main approaches, trading durability against morbidity and voice:</p><ul>" +
          "<li><strong>Endoscopic dilation (ED)</strong>: least invasive, most common, but highest recurrence (~50% needing repeat surgery at 5 yr).</li>" +
          "<li><strong>Endoscopic resection with adjuvant medical therapy (ERMT)</strong>: CO&#8322; laser incision + dilation plus adjuvant medical therapy (PPI, inhaled corticosteroid, &plusmn; trimethoprim-sulfamethoxazole); intermediate recurrence (~30% at 5 yr) with minimal voice impact.</li>" +
          "<li><strong>Cricotracheal resection (CTR)</strong>: open resection, most durable (~5% recurrence at 5 yr) and best breathing/QoL, but greatest perioperative risk and worst long-term voice.</li></ul>" +
          "<p><strong>Serial intralesional steroid injection (SILSI)</strong> is an increasingly used office-based adjunct, particularly effective in idiopathic disease. Always screen for GPA (ANCA) before labeling stenosis idiopathic, since active vasculitis is treated medically.</p>"
      },
      {
        id: "tracheostomy-in-depth",
        title: "Tracheostomy: tube types, first-week emergencies, and decannulation",
        html: "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/tracheostomy_tube.png' alt='Tracheostomy tube' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Tracheostomy tube types, the first-postoperative-week dislodgement emergency, and decannulation pathway.</figcaption></figure><p><strong>Tube variables:</strong></p>"
          + "<ul><li><em>Cuffed</em> (seals the airway, needed for mechanical ventilation or aspiration risk) vs <em>uncuffed</em> (spontaneously breathing patient with an adequate airway/swallow).</li>"
          + "<li><em>Fenestrated</em> (has an opening that lets air pass through the upper airway for voicing once capped, used later in the recovery pathway) vs non-fenestrated.</li>"
          + "<li><em>Dual-cannula</em> tubes have a removable inner cannula for routine cleaning without a full tube change.</li>"
          + "<li>Sizing: the most commonly used tube in an <strong>average adult</strong> is a cuffed <strong>size 8</strong> (roughly size 7-8), sized to the patient's airway and clinical need rather than by brand.</li></ul>"
          + "<p><strong>The first postoperative week is the danger window.</strong> The stoma tract takes roughly 1-2 weeks to mature (epithelialize). Before then, a dislodged or accidentally decannulated tube must <strong>not be blindly reinserted</strong>, because the tract can be pushed into a <strong>false passage</strong> in the soft tissues of the neck rather than the trachea. Instead: ventilate/oxygenate via the <strong>mouth and nose with the stoma occluded</strong>, or orally intubate, while an experienced provider reinserts under direct visualization. A <strong>mature</strong> stoma tolerates safe direct reinsertion.</p>"
          + "<p><strong>Speaking valves and the cuff:</strong> a Passy-Muir (one-way speaking) valve should <strong>never</strong> be used while the tracheostomy cuff is inflated. An inflated cuff blocks air from passing around the tube, up past the vocal folds, and out the mouth/nose; adding a one-way valve on top of that traps exhaled air with nowhere to escape, a dangerous air-trapping hazard. The cuff must be deflated first.</p>"
          + "<p><strong>Decannulation protocol</strong>, in order, once the original indication has resolved:</p>"
          + "<ol><li>The patient is <strong>clinically stable</strong> (for head and neck cancer patients, generally at least <strong>72 hours</strong> post-operatively).</li>"
          + "<li><strong>Cuff deflation</strong> is tolerated.</li>"
          + "<li>A <strong>finger-occlusion test</strong> is tolerated, sometimes followed by a <strong>speaking valve trial</strong>.</li>"
          + "<li>A <strong>capping trial</strong> for <strong>24-48 hours</strong>: the cuff is deflated and the tracheostomy opening is capped so the patient breathes entirely through the upper airway, with continuous monitoring of <strong>oxygen saturation, respiratory effort, and sleep</strong> throughout.</li>"
          + "<li>If the capping trial is passed, the tube is removed, ideally <strong>in the morning</strong> rather than overnight.</li>"
          + "<li><strong>Speech-language pathology</strong> swallow assessment and <strong>physiotherapy</strong> cough-strength assessment should precede decannulation.</li></ol>" + "<figure class='note-fig' data-credit='Tracheostomy tube in place. Wikimedia Commons.'><img class='zoomable' src='assets/img/mc/image63.png' alt='Tracheostomy tube in place' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>A tracheostomy tube seated in the trachea through the stoma.</figcaption></figure>"
      }
    ],
    redFlags: [
      { t: "<b>Bilateral vocal fold paralysis</b> (e.g., after total thyroidectomy): airway emergency, stridor at rest, may need reintubation or tracheostomy." },
      { t: "<b>Stridor + high fever + drooling + tripod</b> in a child: epiglottitis. Do not examine the throat or lie the child flat." },
      { t: "<b>Croup that fails to improve or worsens</b>: reconsider bacterial tracheitis (toxic-appearing, thick secretions)." },
      { t: "<b>Sudden choking episode + unilateral wheeze in a child</b>: foreign body aspiration. Needs bronchoscopy, not just observation." },
      { t: "<b>Progressive hoarseness &gt;2-4 weeks</b> in a smoker/drinker: get laryngoscopy to exclude laryngeal cancer." },
      { t: "<b>New breathing difficulty or stridor after thyroid/neck surgery</b>: think bilateral RLN injury and assess the airway immediately." },
      { t: "<b>Stridor in a previously intubated patient</b>: consider subglottic stenosis." },
      { t: "<b>Hoarseness that doesn't fit a laryngeal exam</b> (normal cords, persistent voice change): consider a lesion along the entire RLN course (lung apex, mediastinum, thyroid) and image accordingly." },
      { t: "<b>Dislodged or decannulated tracheostomy tube in the first postoperative week</b>: the stoma tract isn't mature, so don't blindly reinsert (risk of a false passage). Ventilate via the mouth/nose (occluding the stoma) or intubate orally while getting experienced help." },
      { t: "<b>Exertional dyspnea/biphasic stridor treated as 'asthma' that doesn't respond to inhalers</b>, especially in a young, non-smoking woman: think subglottic stenosis (idiopathic or iatrogenic) and get flexible laryngoscopy." },
      { t: "<b>Total laryngectomy patient in respiratory distress</b>: these are <b>obligate neck breathers</b>: there is no connection between the mouth/nose and the trachea. Never attempt oral intubation or bag-mask ventilation via the face; ventilate and intubate through the <b>stoma</b>." }
    ]
  },

  /* ==================== CASES TAB ==================== */
  cases: [
    {
      id: "case-bilateral-vf-paralysis",
      ukmla: "Stridor",
      source: "Standard laryngology teaching on post-thyroidectomy recurrent laryngeal nerve injury.",
      stem: "A <b>52-year-old woman</b>, six hours after a total thyroidectomy, develops <b>inspiratory stridor</b> and increasing respiratory distress. Her voice sounds relatively preserved.",
      prompts: [
        { q: "What is the leading diagnosis, and why is the voice deceptively normal?", a: "<b>Bilateral vocal fold paralysis</b> from bilateral recurrent laryngeal nerve injury. With both folds paramedian and close together, phonation can sound near-normal even though the <b>airway is critically narrowed</b>." },
        { q: "What is the immediate management?", a: "This is an <b>airway emergency</b>. Prepare for possible reintubation or emergency tracheostomy; get anesthesia/ENT immediately. Do not wait for imaging before securing the airway if distress is significant." }
      ],
      teaching: "Bilateral vocal fold paralysis is the opposite trap of unilateral: a near-normal voice can hide an airway that is about to close."
    },
    {
      id: "case-croup-vs-epiglottitis",
      ukmla: "Stridor",
      source: "Standard pediatric airway teaching.",
      stem: "A <b>2-year-old</b> has one day of a <b>barky, seal-like cough</b>, mild fever, and a hoarse voice, worse at night. She is comfortable, drinking fluids, and sitting on her mother's lap without distress.",
      prompts: [
        { q: "What is the most likely diagnosis, and what confirms it if imaged?", a: "<b>Croup (laryngotracheobronchitis)</b>: viral, gradual onset, barky cough, low fever. The <b>steeple sign</b> on a frontal neck X-ray (subglottic narrowing) supports it, though imaging isn't required for a classic presentation." },
        { q: "What features would make you reconsider epiglottitis instead?", a: "<b>Rapid</b> onset, <b>high</b> fever, drooling, tripod positioning, muffled 'hot potato' voice, and looking toxic all point to epiglottitis, and in that case you avoid examining the throat or lying the child flat." }
      ],
      teaching: "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/acute_epiglottitis.png' alt='Acute epiglottitis' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Differentiating croup from epiglottitis in a young child by onset speed, fever, and toxicity.</figcaption></figure>Onset speed and toxicity separate croup from epiglottitis faster than any single sign."
    },
    {
      id: "case-laryngeal-cancer",
      ukmla: "Hoarseness and voice change",
      source: "AAO-HNSF Clinical Practice Guideline: Hoarseness (Dysphonia) (Update), 2018.",
      stem: "A <b>67-year-old man with a 45 pack-year smoking history</b> and daily alcohol use presents with <b>progressive hoarseness for 3 months</b> and 15 lb of unintentional weight loss.",
      prompts: [
        { q: "What must be done before anything else?", a: "<b>Flexible laryngoscopy</b> to directly visualize the vocal folds. Hoarseness this duration, with these risk factors and weight loss, is laryngeal cancer until excluded." },
        { q: "Why do tobacco and alcohol matter together?", a: "They act <b>synergistically</b> on mucosal carcinogenesis, not just additively. A smoker who also drinks heavily has a much higher risk than either exposure alone." }
      ],
      teaching: "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/laryngeal_subsites_supraglottis.png' alt='Laryngeal subsites supraglottis' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Progressive hoarseness with tobacco/alcohol risk factors and weight loss requiring urgent laryngoscopy for laryngeal cancer.</figcaption></figure>Progressive hoarseness + weight loss + tobacco/alcohol is a scope-first presentation, not a 'wait and see.'"
    },
    {
      id: "case-fb-aspiration",
      ukmla: "Stridor",
      source: "AAP clinical guidance on pediatric foreign-body aspiration.",
      stem: "A previously well <b>18-month-old</b> suddenly develops coughing and choking while eating peanuts, then seems to settle. Hours later he has persistent coughing and you hear <b>decreased breath sounds and wheeze on the right side only</b>.",
      prompts: [
        { q: "What does the initial choking episode plus a unilateral exam finding suggest?", a: "<b>Foreign body aspiration</b>: the abrupt choking event witnessed by a caregiver, followed by asymmetric findings, is the classic pattern. A quiet interval after the initial event does not rule it out." },
        { q: "What is the next step, and what shouldn't you rely on?", a: "<b>Bronchoscopy</b> (rigid, typically) for removal. Don't rely solely on a normal chest X-ray to exclude it, since most aspirated foreign bodies (like peanuts) are radiolucent." }
      ],
      teaching: "A witnessed choking event plus a unilateral chest exam finding is foreign body aspiration until bronchoscopy says otherwise. A normal X-ray doesn't clear it."
    },
    {
      id: "case-vcd",
      ukmla: "Stridor",
      source: "Standard laryngology teaching on paradoxical vocal fold motion.",
      stem: "A <b>19-year-old competitive athlete</b> has recurrent episodes of sudden shortness of breath and <b>noisy breathing on inspiration</b> during intense exercise. She has been treated for asthma with escalating inhalers without improvement; spirometry between episodes is normal.",
      prompts: [
        { q: "What diagnosis should you now consider, and why?", a: "<b>Vocal cord dysfunction (paradoxical vocal fold motion)</b>: episodic <b>inspiratory</b> noise that doesn't respond to asthma therapy, with normal interval spirometry, is the classic pattern. True asthma is predominantly expiratory wheeze." },
        { q: "How is it confirmed and managed?", a: "<b>Laryngoscopy during an episode</b> (or with a provocation test) showing paradoxical adduction of the vocal folds on inspiration. Managed with <b>speech-therapy breathing retraining</b>, not more bronchodilators." }
      ],
      teaching: "Inspiratory symptoms that don't respond to asthma treatment, with normal spirometry between episodes, should make you look at the larynx, not escalate the inhaler."
    },
    {
      id: "case-trach-dislodgement",
      ukmla: "Stridor",
      source: "Standard tracheostomy emergency-management teaching.",
      stem: "A nurse calls urgently: a patient who underwent tracheostomy <b>3 days ago</b> for prolonged ventilator weaning has become acutely short of breath, and the tracheostomy tube appears to have come out and is lying on the dressing.",
      prompts: [
        { q: "What is the danger with simply reinserting the tube, and why?", a: "The stoma tract is only <b>3 days old and not yet mature (epithelialized)</b>. Blind reinsertion risks pushing the tube into a <b>false passage</b> in the soft tissues of the neck rather than back into the trachea, worsening the obstruction." },
        { q: "What should be done instead?", a: "<b>Ventilate/oxygenate via the mouth and nose</b> with the stoma occluded, or proceed to <b>oral intubation</b> if needed, while an experienced airway provider (ENT/anesthesia) reinserts the tracheostomy tube under direct visualization. Do not force blind reinsertion into an immature stoma." }
      ],
      teaching: "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/tracheostomy_tube.png' alt='Tracheostomy tube' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Dislodged tracheostomy tube 3 days post-op requiring alternate airway rather than blind reinsertion into an immature stoma.</figcaption></figure>In the first postoperative week a tracheostomy stoma is a fresh surgical tract, not an established airway. Treat a dislodged tube as an emergency requiring an alternate airway, not a bedside reinsertion."
    },
    {
      id: "case-idiopathic-subglottic-stenosis",
      ukmla: "Stridor",
      source: "Standard airway teaching on idiopathic subglottic stenosis; screening principles for GPA-associated laryngotracheal disease.",
      stem: "A previously healthy <b>38-year-old woman</b>, never a smoker, has had progressively worsening <b>dyspnea on exertion</b> and noisy breathing for a year. She has been treated for asthma with escalating inhalers without improvement. On exam she has <b>biphasic stridor</b> when asked to breathe deeply.",
      prompts: [
        { q: "What diagnosis should be considered before treating this as refractory asthma?", a: "<b>Subglottic stenosis</b>: a slowly progressive, fixed central airway narrowing that produces <b>biphasic</b> stridor and exertional dyspnea, is a classic asthma mimic, and does not respond to bronchodilators/inhaled steroids." },
        { q: "What are the two main categories of cause to consider, and how would you screen for one of them?", a: "<b>Idiopathic subglottic stenosis (iSGS)</b>, classically a healthy woman in her 30s-50s with no clear cause, versus a secondary cause, most importantly <b>granulomatosis with polyangiitis (GPA)</b>, which can present with isolated subglottic stenosis before other systemic features. Screen with <b>ANCA</b> and ask about sinonasal crusting/epistaxis, hematuria, and pulmonary symptoms, though limited GPA can be ANCA-negative." }
      ],
      teaching: "Fixed, biphasic stridor that fails asthma therapy in a young, non-smoking woman is subglottic stenosis until laryngoscopy says otherwise, and idiopathic disease is a diagnosis of exclusion after screening for GPA."
    }
  ],

  /* ==================== CARDS TAB ==================== */
  cards: [
    { id:"laryngeal-cartilages-card", tags: ["LA", "anatomy"], milestones:["MK1","PC6"], ukmla:"Hoarseness and voice change", source:"Standard laryngeal anatomy teaching.", front:"Name the laryngeal cartilages and one key fact about each.",
      back:"<strong>Thyroid</strong> (largest, the 'Adam's apple'), <strong>cricoid</strong> (only <em>complete</em> ring in the airway, critical for cricothyroidotomy landmarks), paired <strong>arytenoids</strong> (rotate/glide to open/close the folds), and the <strong>epiglottis</strong> (protects the airway on swallowing).<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/laryngeal_cartilages.png' alt='Laryngeal cartilages' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Naming the laryngeal cartilages (thyroid, cricoid, arytenoids, epiglottis) and a key fact about each.</figcaption></figure>" },
    { id:"laryngeal-subsites-card", tags: ["LA", "anatomy"], milestones:["MK1","PC3"], ukmla:"Hoarseness and voice change", source:"Standard laryngeal oncology teaching on subsite staging.", front:"Name the three laryngeal subsites and why glottic cancer tends to present earlier than supraglottic cancer.",
      back:"<strong>Supraglottis, glottis, subglottis.</strong> The <strong>glottis</strong> (true vocal folds) has sparse lymphatics, so even a small tumor causes <strong>hoarseness early</strong>, often caught before nodal spread. The lymphatic-rich <strong>supraglottis</strong> tends to present later, with a neck node." },
    { id:"vf-cover-body", tags: ["LA", "anatomy"], milestones:["MK1","PC6"], ukmla:"Hoarseness and voice change", source:"Standard voice-science teaching (cover-body model of phonation).", front:"What is the 'cover-body' model of vocal fold vibration, and why does it matter clinically?",
      back:"The epithelium + superficial lamina propria (Reinke's space) form a flexible 'cover' that vibrates over the deeper 'body' (vocalis muscle). Anything that stiffens or scars this cover, whether smoking, reflux, chronic vocal abuse, or surgery, dampens the mucosal wave and roughens the voice.<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/vocal_fold_layers.png' alt='Vocal fold layers' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The cover-body model of vocal fold vibration and clinical implications of cover stiffening.</figcaption></figure>" },
    { id:"sln-rln-card", tags: ["LA", "anatomy"], milestones:["MK1","PC6"], ukmla:"Hoarseness and voice change", source:"Standard laryngeal neuroanatomy teaching.", front:"What does the superior laryngeal nerve control vs the recurrent laryngeal nerve?",
      back:"<strong>Superior laryngeal n.:</strong> external branch → cricothyroid (pitch); internal branch → sensation above the cords. <strong>Recurrent laryngeal n. (RLN):</strong> all other intrinsic muscles (including the only abductor, posterior cricoarytenoid) + sensation below the cords." },
    { id:"rln-course-card", tags: ["LA", "anatomy"], milestones:["MK1","PC6"], ukmla:"Hoarseness and voice change", source:"Standard laryngeal neuroanatomy teaching.", front:"Trace the course of the recurrent laryngeal nerve on each side, and explain why it matters for hoarseness.",
      back:"<strong>Left RLN</strong> loops under the <strong>aortic arch</strong>; <strong>right RLN</strong> loops under the <strong>subclavian artery</strong>. Both then ascend near the thyroid. This long course means a lung apex tumor, aortic aneurysm, or thyroid/mediastinal mass can present as <strong>hoarseness</strong>, and it's the nerve at risk during thyroid surgery.<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/recurrent_laryngeal_nerve_course_2.png' alt='Recurrent laryngeal nerve course' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Course of the recurrent laryngeal nerve on each side and its clinical significance for hoarseness.</figcaption></figure>" },
    { id:"unilateral-vf-paralysis-card", tags: ["LA", "clinical"], milestones:["PC6"], ukmla:"Hoarseness and voice change", source:"Standard laryngology teaching on vocal fold immobility.", front:"What does unilateral vocal fold paralysis look like, and what are the common causes?",
      back:"<strong>Breathy, weak voice</strong> and aspiration risk (glottic incompetence), but the <strong>airway is usually fine</strong>. Causes: thyroid/neck/chest surgery, a lung apex or mediastinal mass along the RLN course, idiopathic, viral." },
    { id:"vf-paralysis-management-card", tags: ["LA", "clinical"], milestones:["PC6","MK3"], ukmla:"Hoarseness and voice change", source:"Standard laryngology teaching on vocal fold paralysis workup and medialization procedures.", front:"Working up unilateral vocal fold paralysis means imaging <span class=\"cloze-blank\">[...]</span>, from the skull base to the aortic arch, since a lesion anywhere along that path can be the cause.",
      back:"Working up unilateral vocal fold paralysis means imaging <mark class=\"cloze-answer\">the entire recurrent laryngeal nerve course</mark>, from the skull base to the aortic arch, since a lesion anywhere along that path can be the cause. Management then follows a ladder from voice therapy to thyroplasty as spontaneous recovery becomes unlikely." },
    { id:"bilateral-vf-paralysis-card", tags: ["LA", "clinical"], milestones:["PC6","PC1"], redFlag:true, ukmla:"Stridor", source:"Standard laryngology teaching on bilateral vocal fold paralysis.", front:"Why is bilateral vocal fold paralysis an airway emergency even when the voice sounds okay?",
      back:"Both paramedian folds sit close together, so <strong>phonation can sound near-normal</strong> while the <strong>airway is critically narrowed</strong>. That's the opposite trap of the unilateral case. Classic cause: bilateral RLN injury after total thyroidectomy. May need emergency reintubation or tracheostomy." },
    { id:"vf-nodules-polyps-card", tags: ["LA", "clinical"], milestones:["PC6"], ukmla:"Hoarseness and voice change", source:"Standard laryngology teaching on benign vocal fold lesions.", front:"Distinguish vocal nodules from a vocal polyp by pattern and cause.",
      back:"<strong>Nodules:</strong> bilateral, symmetric, mid-membranous, from chronic vocal <strong>abuse/misuse</strong> ('singer's/screamer's nodules'). <strong>Polyp:</strong> usually <strong>unilateral</strong>, from a single straining/abuse event or reflux." },
    { id:"benign-vf-lesion-management-card", tags: ["LA", "clinical"], milestones:["PC6"], ukmla:"Hoarseness and voice change", source:"Standard laryngology teaching on voice therapy vs surgical management of benign vocal fold lesions.", front:"Vocal nodules, which arise from a reversible behavior such as chronic vocal abuse, are usually tried on <span class=\"cloze-blank\">[...]</span> before any consideration of surgery.",
      back:"Vocal nodules, which arise from a reversible behavior such as chronic vocal abuse, are usually tried on <mark class=\"cloze-answer\">voice therapy</mark> before any consideration of surgery. Polyps and cysts are more structural and often need surgical excision instead." },
    { id:"reinkes-edema-card", tags: ["LA", "clinical"], milestones:["PC6"], ukmla:"Hoarseness and voice change", source:"Standard laryngology teaching on Reinke's edema.", front:"What is Reinke's edema, and what is its classic association?",
      back:"Diffuse, bilateral, gelatinous swelling of the superficial lamina propria (Reinke's space) causing a <strong>low, husky voice</strong>. Classically associated with <strong>chronic smoking</strong>; also reflux and hypothyroidism. Management starts with smoking cessation." },
    { id:"vocal-process-granuloma-card", tags: ["LA", "clinical"], milestones:["PC6"], ukmla:"Hoarseness and voice change", source:"Standard laryngology teaching on vocal process (contact) granuloma.", front:"A vocal process (contact) granuloma is a benign inflammatory lesion at the <span class=\"cloze-blank\">[...]</span> of the arytenoid, most often following intubation trauma.",
      back:"A vocal process (contact) granuloma is a benign inflammatory lesion at the <mark class=\"cloze-answer\">vocal process</mark> of the arytenoid, most often following intubation trauma. Surgical excision carries a high recurrence rate unless a driving cause, such as reflux or phonotrauma, is treated first." },
    { id:"peds-stridor-differential-card", tags: ["LA", "clinical"], milestones:["PC1","PC7"], redFlag:true, ukmla:"Stridor", source:"Standard pediatric airway teaching.", front:"Differentiate croup, epiglottitis, bacterial tracheitis, and foreign body aspiration.",
      back:"<strong>Croup:</strong> barky cough, gradual, low fever, steeple sign. <strong>Epiglottitis:</strong> rapid, high fever, drooling, tripod, thumbprint sign; don't examine the throat. <strong>Bacterial tracheitis:</strong> toxic, fails croup treatment, thick secretions. <strong>Foreign body:</strong> sudden choking event, unilateral wheeze." },
    { id:"laryngeal-cancer-riskfactors-card", tags: ["LA", "clinical"], milestones:["PC3","PC6"], redFlag:true, ukmla:"Hoarseness and voice change", source:"AAO-HNSF Hoarseness (Dysphonia) CPG, 2018.", front:"What risk factors and presentation should prompt urgent laryngoscopy for possible laryngeal cancer?",
      back:"<strong>Tobacco + alcohol act synergistically</strong> (not just additively). Presentation: <strong>hoarseness &gt;2-4 weeks</strong>, especially with weight loss, odynophagia, referred otalgia, or a neck mass. Glottic tumors cause hoarseness <em>early</em> because of sparse lymphatics, a reason not to dismiss persistent voice change." },
    { id:"early-glottic-treatment-card", tags: ["LA", "clinical"], milestones:["PC6","MK3"], ukmla:"Hoarseness and voice change", source:"Forastiere et al., ASCO larynx-preservation guideline, 2018; NCCN Head & Neck Cancers, 2026.", front:"For early (T1-T2 N0) glottic cancer, transoral laser microsurgery and radiotherapy give <span class=\"cloze-blank\">[...]</span> survival, so the choice hinges on exposure, voice, and salvage considerations.",
      back:"For early (T1-T2 N0) glottic cancer, transoral laser microsurgery and radiotherapy give <mark class=\"cloze-answer\">equivalent</mark> survival and larynx-preservation. TLM is a single procedure with margin histology that preserves RT for salvage; RT irradiates the whole larynx and usually can't be repeated. Anterior commissure involvement, comorbidity, and voice priorities guide selection." },
    { id:"rrp-card", tags: ["LA", "clinical"], milestones:["PC6","PC7"], ukmla:"Hoarseness and voice change", source:"Standard laryngology teaching on recurrent respiratory papillomatosis.", front:"What is recurrent respiratory papillomatosis (RRP), and who gets it?",
      back:"Benign but recurrent <strong>HPV (types 6/11)</strong> laryngeal papillomas causing progressive hoarseness (and airway obstruction if severe). <strong>Biphasic</strong> age distribution: juvenile-onset (acquired perinatally from an infected mother) and adult-onset. Needs repeated surgical debulking; rarely undergoes malignant transformation. Beyond debulking, adjuvant medical therapy now matters: systemic <strong>bevacizumab</strong> (anti-VEGF, ~10 mg/kg q3wk) markedly reduces surgical frequency in aggressive juvenile- and adult-onset disease, and in 2025 the FDA approved the first HPV-specific immunotherapy (<strong>zopapogene imadenovec-drba</strong>, Papzimeos) for adults, offering durable control after a short course. HPV vaccination is preventive (reduces maternal genital HPV and perinatal transmission). Adjuvant cidofovir is used off-label." },
    { id:"vcd-card", tags: ["LA", "clinical"], milestones:["PC6","PC1"], ukmla:"Stridor", source:"Standard laryngology teaching on paradoxical vocal fold motion.", front:"What is vocal cord dysfunction (paradoxical vocal fold motion), and how is it distinguished from asthma?",
      back:"The vocal folds adduct paradoxically on <strong>inspiration</strong>, causing episodic dyspnea that mimics asthma but <strong>doesn't respond to bronchodilators</strong>; spirometry is often normal between episodes. Confirmed by <strong>laryngoscopy during an episode</strong>. Treated with speech-therapy breathing retraining. The preferred umbrella term is <strong>inducible laryngeal obstruction (ILO)</strong>; diagnosis is by laryngoscopy with provocation showing &ge;50% inspiratory closure (or Maat grade &ge;2). The exercise-induced subtype (EILO) is confirmed with continuous laryngoscopy during exercise (CLE test)." },
    { id:"lpr-card", tags: ["LA", "clinical"], milestones:["PC6","MK3"], ukmla:"Hoarseness and voice change", source:"Standard laryngology teaching on laryngopharyngeal reflux.", front:"How does laryngopharyngeal reflux (LPR) differ from typical GERD in presentation?",
      back:"LPR ('silent reflux') presents with <strong>throat clearing, globus, chronic cough, hoarseness</strong>, and posterior laryngeal erythema/edema on exam, often <strong>without</strong> classic heartburn. First-line is behavioral/dietary modification (weight loss, avoiding late meals, alginates). Empiric PPIs are controversial: placebo-controlled trials and meta-analyses show no consistent benefit for isolated laryngeal symptoms, and the AGA advises against empiric PPI use unless there are concomitant typical GERD symptoms. A PPI response does not by itself confirm the diagnosis; refractory or isolated cases warrant objective testing (e.g., pH-impedance)." },
    { id:"tracheostomy-indications-card", tags: ["LA", "clinical"], milestones:["PC1","SBP1"], scope:"sub-I", ukmla:"Stridor", source:"Standard airway-management teaching.", front:"Name the broad indications for tracheostomy.",
      back:"<strong>Prolonged mechanical ventilation</strong>, upper airway obstruction that can't be otherwise relieved (bilateral VF paralysis, tumor, severe subglottic stenosis), and need for <strong>pulmonary toilet</strong>/airway protection in patients who can't manage their own secretions." },
    { id:"tracheostomy-tube-types-card", tags: ["LA", "clinical"], milestones:["PC1","MK1"], scope:"sub-I", ukmla:"Stridor", source:"Standard tracheostomy care teaching.", front:"A <span class=\"cloze-blank\">[...]</span> tracheostomy tube has an opening that lets air pass through the upper airway, letting the patient voice once the tube is capped.",
      back:"A <mark class=\"cloze-answer\">fenestrated</mark> tracheostomy tube has an opening that lets air pass through the upper airway, letting the patient voice once the tube is capped. A cuffed tube, by contrast, seals the airway for mechanical ventilation or a high aspiration risk." },
    { id:"tracheostomy-first-week-card", tags: ["LA", "clinical"], milestones:["PC1","SBP1"], redFlag:true, ukmla:"Stridor", source:"Standard tracheostomy emergency-management teaching.", front:"A tracheostomy stoma tract takes roughly <span class=\"cloze-blank\">[...]</span> to mature by epithelializing, so blind reinsertion of a dislodged tube before then risks creating a false passage in the neck's soft tissues.",
      back:"A tracheostomy stoma tract takes roughly <mark class=\"cloze-answer\">1 to 2 weeks</mark> to mature by epithelializing, so blind reinsertion of a dislodged tube before then risks creating a false passage in the neck's soft tissues. Until it matures, ventilate via the mouth and nose with the stoma occluded while an experienced provider reinserts under direct visualization." },
    { id:"tracheostomy-decannulation-card", tags: ["LA", "clinical"], milestones:["PC1"], scope:"sub-I", ukmla:"Stridor", source:"Standard tracheostomy decannulation-pathway teaching.", front:"What is the general pathway to decannulate a tracheostomy?",
      back:"Once the original indication has resolved (airway patent, secretions manageable, ventilator weaned): progressively <strong>downsize</strong> the tube, then run a <strong>capping/plugging trial</strong> (the patient breathes entirely around the tube through the upper airway) and confirm tolerance (oxygenation, work of breathing) before final removal." },
    { id:"subglottic-stenosis-card", tags: ["LA", "clinical"], milestones:["PC6","PC1"], redFlag:true, ukmla:"Stridor", source:"Standard airway teaching on subglottic stenosis.", front:"What is subglottic stenosis, and what's the classic risk factor to ask about?",
      back:"Narrowing of the airway at the <strong>subglottis</strong> (the narrowest part of a child's airway) from scarring, most often after <strong>prolonged intubation</strong>. Presents with progressive stridor/dyspnea; ask about a prior ICU/intubation history in anyone with new unexplained stridor." },
    { id:"subglottic-stenosis-causes-card", tags: ["LA", "clinical"], milestones:["PC6","MK3"], redFlag:true, ukmla:"Stridor", source:"Standard airway teaching on subglottic stenosis etiology; screening principles for GPA-associated laryngotracheal disease.", front:"Idiopathic subglottic stenosis (iSGS) classically affects <span class=\"cloze-blank\">[...]</span> who has never smoked, and is a diagnosis of exclusion.",
      back:"Idiopathic subglottic stenosis (iSGS) classically affects <mark class=\"cloze-answer\">a healthy woman in her 30s to 50s</mark> who has never smoked, and is a diagnosis of exclusion. The most common cause of subglottic stenosis overall is iatrogenic, from prolonged or traumatic intubation." },
    { id:"subglottic-stenosis-asthma-mimic-card", tags: ["LA", "clinical"], milestones:["PC6","PC1"], redFlag:true, ukmla:"Stridor", source:"Standard airway teaching on subglottic stenosis presentation.", front:"Why does subglottic stenosis get misdiagnosed as asthma, and what should prompt reconsideration?",
      back:"It causes <strong>exertional dyspnea and biphasic stridor</strong> that can be mistaken for asthma, especially early. <strong>Failure to respond to bronchodilators/inhaled steroids</strong>, a <strong>fixed</strong> (non-reversible) obstructive pattern, or stridor rather than wheeze should prompt <strong>flexible laryngoscopy</strong> rather than escalating asthma therapy." },
    { id:"subglottic-stenosis-management-card", tags: ["LA", "clinical"], milestones:["PC6","MK3"], ukmla:"Stridor", source:"Gelbard et al., NoAAC 3-yr, JAMA Otolaryngol Head Neck Surg, 2020; Tierney et al., NoAAC 5-yr update, Otolaryngol Head Neck Surg, 2023.", front:"Rank the three main surgical approaches to subglottic stenosis by durability, and name the trade-off of the most durable one.",
      back:"<strong>Cricotracheal resection (CTR)</strong> is most durable (~5% 5-yr recurrence) but has the greatest perioperative risk and worst voice; <strong>endoscopic resection with adjuvant medical therapy (ERMT)</strong> is intermediate (~30%); <strong>endoscopic dilation</strong> is least invasive but highest recurrence (~50%). Office-based serial intralesional steroid injection is a growing adjunct." },
    { id:"fb-airway-algorithm-card", tags: ["LA", "clinical"], milestones:["PC1","PC7"], redFlag:true, ukmla:"Stridor", source:"AAP clinical guidance on pediatric foreign-body aspiration; basic life support choking algorithm.", front:"For a suspected airway foreign body with complete obstruction, meaning the patient can't cough, speak, or breathe, the immediate step is to start age-appropriate <span class=\"cloze-blank\">[...]</span>, such as back blows and abdominal thrusts.",
      back:"For a suspected airway foreign body with complete obstruction, meaning the patient can't cough, speak, or breathe, the immediate step is to start age-appropriate <mark class=\"cloze-answer\">BLS choking maneuvers</mark>, such as back blows and abdominal thrusts. If the patient can still cough or speak, encourage coughing instead and avoid blind intervention." },
    { id:"spasmodic-dysphonia-card", tags: ["LA", "clinical"], milestones:["PC6"], scope:"sub-I", ukmla:"Hoarseness and voice change", source:"Standard laryngology teaching on spasmodic dysphonia.", front:"What is spasmodic dysphonia, and how does it sound different from a structural vocal fold lesion?",
      back:"A focal <strong>laryngeal dystonia</strong> causing involuntary spasms of the vocal folds: a strained, strangled voice (adductor type, most common) or breathy, effortful voice (abductor type) that is <strong>task-specific</strong> (worse on speaking, may be normal singing/laughing). Managed with botulinum toxin injections, not surgery for a 'lesion.'" },
    { id:"fees-swallow-eval-card", tags: ["LA", "clinical"], milestones:["PC6","PC1"], scope:"sub-I", ukmla:"Swallowing problems", source:"Standard speech-language pathology/laryngology teaching on instrumental swallow evaluation.", front:"FEES visualizes the pharynx and larynx directly during swallowing through a transnasal endoscope, without radiation, while the test that instead images the whole swallow under fluoroscopy is the <span class=\"cloze-blank\">[...]</span>.",
      back:"FEES visualizes the pharynx and larynx directly during swallowing through a transnasal endoscope, without radiation, while the test that instead images the whole swallow under fluoroscopy is the <mark class=\"cloze-answer\">modified barium swallow (videofluoroscopy)</mark>. FEES also directly detects pooling, penetration, and silent aspiration at the bedside." }
  ]
});

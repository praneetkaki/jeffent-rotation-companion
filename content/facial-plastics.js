/* facial-plastics.js, FACIAL PLASTICS & TRAUMA (subspecialty track)
 *
 * Deep dive on facial trauma and reconstructive/functional facial plastics.
 * Every card/case carries a UKMLA scope tag (content/ukmla.js), an ACGME
 * Milestone tag (content/frameworks.js), and a named source. Content written
 * to US practice standards (ATLS, AO/ACS trauma teaching); UK/US differences flagged.
 *
 * STATUS: DRAFT, pending JeffENT faculty review. See docs/MODULE-BUILD-STANDARD.md.
 */
window.JEFFENT.register({
  id: "facial-plastics-trauma",
  track: "facial-plastics",
  trackName: "Facial Plastics & Trauma",
  trackAbbr: "FP",
  order: 7,
  title: "Facial Plastics & Trauma",
  subtitle: "Facial fracture patterns, the ABCs of facial trauma, nerve/duct injuries not to miss, and the reconstructive ladder.",
  version: "0.4.0-draft",
  level: ["core", "sub-I"],
  status: "DRAFT, pending faculty review. v0.2.0: added a depth pass covering genuinely missing trauma-subspecialty topics, mandible fracture patterns and the bimanual/malocclusion exam (including the bilateral condylar 'guardsman' pattern and numb chin sign), naso-orbito-ethmoid (NOE) fracture with medial canthal tendon/nasolacrimal duct injury, frontal sinus fracture (anterior vs posterior table), the House-Brackmann facial nerve grading scale and electrodiagnostic (ENoG/nerve-stimulator) testing, and facial-specific local flap options in the reconstructive ladder, grounded in ATLS/AO facial trauma teaching, House & Brackmann (1985), and standard facial plastic & reconstructive surgery teaching; written fresh from guidelines and standard teaching, not derived from any single textbook. v0.3.0: added 4 red-flag/trauma teaching cases identified by a coverage audit (mandible fracture airway risk, auricular hematoma, frontal sinus fracture, septal hematoma).",
  facultyReviewer: "",
  curriculumAnchors: [
    "UKMLA Content Map (GMC), scope anchor; owns Facial/periorbital swelling (traumatic), Epistaxis (traumatic), Facial weakness (traumatic) at subspecialty trauma depth",
    "ACGME Otolaryngology-HNS Milestones 2.0, primarily PC1 (emergency/trauma), PC9 (surgical management)",
    "ATLS (Advanced Trauma Life Support) principles for the primary survey; standard US facial trauma/reconstructive teaching",
    "UK undergraduate Delphi (Lloyd 2014), student-scope depth cap"
  ],
  frameworkAlignment: {
    competenciesCovered: ["PC", "MK"],
    note: "Subspecialty depth at student scope (Delphi); goes deeper than Foundations on facial swelling/epistaxis/facial weakness through a trauma lens (fracture patterns, nerve/duct injury recognition, damage control sequencing) rather than introducing unrelated new topics."
  },

  /* ==================== ANATOMY TAB ==================== */
  anatomy: {
    notes: [
      {
        title: "The facial buttresses",
        html: "<figure class='note-fig' data-credit=\"OpenStax, Anatomy and Physiology 2e (Ch. 7). CC BY 4.0.\"><img class='zoomable' src='assets/img/anatomy-atlas/skull-lateral-openstax.png' alt='Lateral facial skeleton' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Facial skeleton (lateral): frontal, zygomatic, maxillary and temporal bones form the vertical and horizontal buttresses.</figcaption></figure><ul><li><strong>Buttresses</strong> are thickened bone columns that absorb and transmit force: vertical (nasomaxillary, zygomaticomaxillary, pterygomaxillary) and horizontal (frontal bar, infraorbital rim, maxillary alveolus).</li><li>Reconstructive plating re-establishes these buttresses rather than patching individual fracture lines.</li><li>Restoring buttress continuity restores facial height, width, and projection.</li></ul><figure class='note-fig' data-credit=\"Vertical and Horizontal Facial Buttresses. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/78_facial_buttresses_vertical_horizontal_gemini.png' alt='Facial buttresses' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Vertical and horizontal facial buttresses.</figcaption></figure>"
      },
      {
        title: "The parotid gland, facial nerve, and Stensen's duct",
        html: "<figure class='note-fig' data-credit=\"Facial nerve branches and parotid. Wikimedia Commons, CC BY-SA 3.0.\"><img class='zoomable' src='assets/1024px-Head_facial_nerve_branches_TZBMC.jpg' alt='Facial nerve branches' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: Pes anserinus branches; Stensen's duct crossing the masseter into the buccinator.</figcaption></figure><ul><li>The facial nerve trunk exits the <strong>stylomastoid foramen</strong> and runs <strong>through the parotid</strong>, dividing it (surgically) into superficial and deep lobes.</li><li>It branches into five named branches: <strong>temporal, zygomatic, buccal, marginal mandibular, cervical</strong>.</li><li><strong>Stensen's duct</strong> runs from the tragus toward the midpoint of the upper lip, over masseter, then pierces buccinator to enter the mouth opposite the second upper molar (a useful landmark for a line of injury).</li></ul><figure class='note-fig' data-credit=\"Facial Nerve Branches Through the Parotid Gland. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/79a_parotid_facial_nerve_branches_gemini.png' alt='Facial nerve branches through parotid' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Facial nerve branches through the parotid gland.</figcaption></figure><figure class='note-fig' data-credit=\"Stensen's (Parotid) Duct Anatomical Course and Line of Injury. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/79b_stensens_duct_course_gemini.png' alt='Stensen's duct course' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Stensen's duct anatomical course and line of injury.</figcaption></figure>"
      },
      {
        title: "The frontal branch of the facial nerve and Pitanguy's line",
        html: "<figure class='note-fig' data-credit=\"OpenStax, Anatomy and Physiology 2e (Ch. 11). CC BY 4.0.\"><img class='zoomable' src='assets/img/facial-plastics/facial-expression-muscles-openstax.png' alt='Muscles of facial expression' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Muscles of facial expression; the frontalis (occipitofrontalis, frontal belly) is the muscle driven by the temporal (frontal) branch.</figcaption></figure><ul><li>The <strong>temporal (frontal) branch</strong> is the most superficial and vulnerable branch, running just under the temporoparietal fascia.</li><li><strong>Pitanguy's line</strong> (0.5 cm below the tragus to 1.5 cm above the lateral eyebrow) approximates its course.</li><li>Lacerations or incisions crossing this line risk brow ptosis from frontal branch injury.</li></ul><figure class='note-fig' data-credit=\"Pitanguy's Line and the Frontal Branch of the Facial Nerve. Jawad, Hohman, &amp; Raggio (2025). StatPearls.\"><img class='zoomable' src='assets/img/mc/80_pitanguys_line_frontal_branch_statpearls.png' alt='Pitanguy's line' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Pitanguy's line and the frontal branch of the facial nerve.</figcaption></figure>"
      },
      {
        title: "Orbital floor and the inferior rectus/orbital fat",
        html: "<figure class='note-fig' data-credit=\"OpenStax, Anatomy and Physiology 2e (Ch. 7). CC BY 4.0.\"><img class='zoomable' src='assets/img/facial-plastics/skull-anterior-openstax.png' alt='Anterior skull showing the bony orbit' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Bony orbit: optic canal, superior and inferior orbital fissures, infraorbital foramen; the floor is formed by the maxilla.</figcaption></figure><ul><li>The orbital floor is thin (the maxillary sinus roof), a common site of <strong>blow-out fracture</strong> when direct globe impact transmits force downward.</li><li>Herniation or entrapment of orbital fat (or, less often, the <strong>inferior rectus</strong>) through the fracture causes enophthalmos, diplopia on upgaze, and infraorbital nerve hypoesthesia (the nerve runs in the floor).</li></ul><figure class='note-fig' data-credit=\"Orbital Floor Blowout Fracture and Muscle Entrapment. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/81_orbital_floor_blowout_fracture_wikimedia.png' alt='Orbital floor blowout fracture' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Orbital floor blowout fracture and muscle entrapment.</figcaption></figure>"
      }
    ],
    diagrams: [
      {
        kind: "image",
        occlude: true,
        id: "facial-buttresses",
        title: "Facial buttresses",
        note: "Vertical and horizontal reinforcing columns. Name each, then reveal.",
        src: "assets/img/mc/78_facial_buttresses_vertical_horizontal_gemini.png",
        source: "Vertical and Horizontal Facial Buttresses. Illustration generated with Google Gemini.",
        labels: [
          { id:"naso", text:"Nasomaxillary buttress (vertical)", box:{x:8.0,y:45.5,w:24.0,h:9.0} },
          { id:"zygo", text:"Zygomaticomaxillary buttress (vertical)", box:{x:68.0,y:45.5,w:24.0,h:9.0} },
          { id:"ptery", text:"Pterygomaxillary buttress (vertical, posterior)", box:{x:38.0,y:45.5,w:24.0,h:9.0} },
          { id:"frontal-bar", text:"Frontal bar (horizontal)", box:{x:38.0,y:13.1,w:24.0,h:9.0} },
          { id:"alveolus", text:"Maxillary alveolus (horizontal)", box:{x:38.0,y:72.0,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "facial-nerve-parotid",
        title: "Facial nerve branches through the parotid",
        note: "Five named branches. Name each, then reveal.",
        src: "assets/img/mc/79a_parotid_facial_nerve_branches_gemini.png",
        source: "Facial Nerve Branches Through the Parotid Gland. Illustration generated with Google Gemini.",
        labels: [
          { id:"temporal", text:"Temporal (frontal) branch: most vulnerable, crosses Pitanguy's line", box:{x:41.1,y:10.9,w:24.0,h:9.0} },
          { id:"zygomatic", text:"Zygomatic branch", box:{x:50.5,y:26.3,w:24.0,h:9.0} },
          { id:"buccal", text:"Buccal branch: runs near Stensen's duct", box:{x:56.8,y:45.5,w:24.0,h:9.0} },
          { id:"marginal", text:"Marginal mandibular branch: vulnerable along the mandible border", box:{x:50.5,y:64.7,w:24.0,h:9.0} },
          { id:"cervical", text:"Cervical branch", box:{x:41.1,y:80.1,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "orbital-floor-blowout",
        title: "Orbital floor blow-out fracture",
        note: "Fat/muscle herniation into the maxillary sinus. Name the structures, then reveal.",
        src: "assets/img/mc/81_orbital_floor_blowout_fracture_wikimedia.png",
        source: "Orbital Floor Blowout Fracture and Muscle Entrapment. Wikimedia Commons.",
        labels: [
          { id:"globe", text:"Globe", box:{x:38.0,y:28.8,w:24.0,h:9.0} },
          { id:"floor", text:"Orbital floor (thin, roof of maxillary sinus)", box:{x:38.0,y:45.5,w:24.0,h:9.0} },
          { id:"herniation", text:"Herniated orbital fat ± inferior rectus: causes enophthalmos, diplopia on upgaze", box:{x:38.0,y:53.8,w:24.0,h:9.0} },
          { id:"ion", text:"Infraorbital nerve runs in the floor; hypoesthesia is a clue", box:{x:51.3,y:58.0,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "frontal-branch-pitanguy-line",
        title: "Pitanguy's line and the frontal branch",
        note: "Lateral face, not to scale. Name each landmark, then reveal.",
        src: "assets/img/mc/80_pitanguys_line_frontal_branch_statpearls.png",
        source: "Pitanguy's Line and the Frontal Branch of the Facial Nerve. Jawad, Hohman, &amp; Raggio (2025). StatPearls.",
        labels: [
          { id:"tragus", text:"Tragus: Pitanguy's line begins 0.5cm below this point.", box:{x:51.3,y:45.5,w:24.0,h:9.0} },
          { id:"lateral-eyebrow", text:"Lateral eyebrow: Pitanguy's line ends 1.5cm above this point.", box:{x:13.0,y:11.8,w:24.0,h:9.0} },
          { id:"pitanguys-line", text:"Pitanguy's line: the classic surface marking from 0.5cm below the tragus to 1.5cm above the lateral eyebrow.", box:{x:34.3,y:27.1,w:24.0,h:9.0} },
          { id:"frontal-branch", text:"Frontal (temporal) branch of the facial nerve: runs just deep to Pitanguy's line, beneath the temporoparietal fascia.", box:{x:33.7,y:23.6,w:24.0,h:9.0} },
          { id:"zygomatic-arch", text:"Zygomatic arch: bony reference plane deep to the nerve's course over this danger zone.", box:{x:49.7,y:33.0,w:24.0,h:9.0} },
          { id:"danger-zone", text:"Incisions or blunt dissection crossing this corridor risk injuring the frontal branch, causing brow ptosis.", box:{x:41.3,y:37.7,w:24.0,h:9.0} }
        ]
      }
    ]
  },

  /* ==================== CLINICAL TAB ==================== */
  clinical: {
    blocks: [
      {
        id: "trauma-primary-survey",
        title: "Facial trauma: ABCs before the face",
        html: "<p>Facial trauma is managed within the <strong>ATLS primary survey</strong>, before detailed facial exam:</p><ul><li><strong>Airway</strong>: facial fractures can compromise the airway directly (posteriorly displaced maxillary segments, loose teeth/blood, associated mandible fractures).</li><li><strong>Breathing</strong></li><li><strong>Circulation</strong>: facial and scalp wounds can bleed briskly.</li></ul><p><strong>Never let a dramatic facial injury distract from a life-threatening airway or C-spine issue.</strong></p>"
      },
      {
        id: "le-fort-classification",
        title: "Le Fort fracture classification",
        html: "<p>Describes patterns of midface fracture through the pterygoid plates, distinguished by the level of the fracture line, not a strict hierarchy of severity, and patterns can be mixed/asymmetric.</p><figure class='note-fig' data-credit=\"Le Fort Midface Fractures Classification (Types I, II, III). Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/82_le_fort_fractures_i_ii_iii_wikimedia.png' alt='Le Fort fracture classification' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Le Fort midface fracture classification, types I, II, III.</figcaption></figure>",
        table: {
          head: ["Type", "Fracture line", "Clinical clue"],
          rows: [
            ["Le Fort I", "Horizontal, above the maxillary teeth apices (separates the palate/alveolus)", "Mobile hard palate/maxilla, teeth intact with the mobile segment"],
            ["Le Fort II", "Pyramidal, through the nasofrontal suture, medial orbit, and zygomaticomaxillary region", "Mobile nasal-maxillary complex; midface mobility on exam"],
            ["Le Fort III", "Craniofacial disjunction, through the frontozygomatic suture and orbits, separating the face from the skull base", "Entire midface mobile relative to the skull; 'floating face'"]
          ]
        }
      },
      {
        id: "facial-nerve-injury-timing",
        title: "Facial nerve injury after trauma: when to explore",
        html: "<p><strong>Immediate, complete facial weakness after penetrating trauma lateral to the lateral canthus</strong> is the classic indication for <strong>urgent surgical exploration and nerve repair</strong> (nerve stimulation can still identify distal branches within ~72 hours before Wallerian degeneration). <strong>Delayed-onset</strong> or <strong>incomplete</strong> weakness is more often due to edema/neurapraxia and can typically be observed.</p>"
      },
      {
        id: "duct-and-nerve-not-to-miss",
        title: "Structures not to miss in a cheek/parotid laceration",
        html: "<p>Any laceration crossing the line from tragus to the midpoint of the upper lip should raise concern for injury to <strong>Stensen's (parotid) duct</strong> and/or <strong>buccal branch of the facial nerve</strong>. Clear, salivary fluid from a facial wound, or an asymmetric smile, should prompt exploration ± duct cannulation before closure.</p>"
      },
      {
        id: "reconstructive-ladder",
        title: "The reconstructive ladder",
        html: "<p>A framework for choosing the simplest option that achieves a good functional/cosmetic result, escalating only as needed:</p><ol><li><strong>Healing by secondary intention</strong></li><li><strong>Primary closure</strong></li><li><strong>Skin graft</strong> (split- or full-thickness)</li><li><strong>Local flap</strong></li><li><strong>Regional flap</strong></li><li><strong>Free tissue transfer</strong> (microvascular free flap)</li></ol><p>Choice depends on defect size/location, tissue match, and patient factors, not simply 'use the most advanced option.'</p><figure class='note-fig' data-credit=\"The Surgical Reconstructive Ladder (Secondary Intention to Free Flap). Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/83_reconstructive_ladder_gemini.png' alt='Reconstructive ladder' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The surgical reconstructive ladder, from secondary intention to free flap.</figcaption></figure>"
      },
      {
        id: "mandible-fracture-patterns",
        title: "Mandible fracture patterns and the bimanual exam",
        html: "<p>The mandible is a ring-like bone, so a strong enough force often fractures it in <strong>two places</strong> (e.g. a body fracture with a contralateral condyle fracture). Always image the whole mandible, not just the obvious injury site.</p><p>Common sites, roughly in order of frequency:</p><ol><li>Condyle</li><li>Angle</li><li>Body</li><li>Parasymphysis/symphysis</li></ol><p>Exam clues:</p><ul><li><strong>Malocclusion</strong> (patient reports their bite 'feels wrong')</li><li><strong>Trismus</strong></li><li>A palpable step-off or mucosal tear along the gumline</li><li>A positive <strong>bimanual/tongue-blade test</strong> (a tongue blade held between the molars snaps when the patient bites down through an intact mandible, but the patient can't generate enough bite force to break it when a fracture is present; poor sensitivity, but a quick bedside screen)</li></ul><p><strong>Panorex (panoramic radiograph)</strong> is a good screening view; <strong>CT with 3D reconstruction</strong> is the definitive study, especially for condylar and comminuted fractures.</p><figure class='note-fig' data-credit=\"Mandible Fracture Patterns and Ring-Structure Rule. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/84_mandible_fractures_ring_rule_wikimedia.png' alt='Mandible fracture patterns' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Mandible fracture patterns and the ring-structure rule.</figcaption></figure>"
      },
      {
        id: "noe-fracture",
        title: "Naso-orbito-ethmoid (NOE) fracture",
        html: "<p>A high-energy fracture of the central midface involving the nasal bones, medial orbital walls, and ethmoid complex. The key structure at risk is the <strong>medial canthal tendon</strong>, which anchors the eyelids to the central fragment. Disruption causes <strong>traumatic telecanthus</strong> (widened, rounded medial canthal distance) and a flattened, splayed nasal-bridge appearance. Test with the <strong>bowstring (traction) test</strong>: pull the lower eyelid laterally while palpating the medial canthal area. If the tendon is intact, it stays taut against the bone; if disrupted, the tissue moves independently. The <strong>nasolacrimal duct</strong> runs through this same region and can be injured concurrently, risking post-traumatic epiphora (excess tearing) if not addressed. <strong>CT is required</strong> for diagnosis and surgical planning; the central fragment may remain a single unit with the tendon still attached (better prognosis) or be comminuted into multiple pieces (Markowitz classification, types I-III); comminuted patterns need direct tendon fixation, not just bone reduction.</p>"
      },
      {
        id: "frontal-sinus-fracture",
        title: "Frontal sinus fracture: anterior vs posterior table",
        html: "<p>Frontal sinus fractures are described by which wall (table) is involved, because it changes both risk and management. <strong>Anterior table only:</strong> primarily a cosmetic/contour concern and a risk factor for a later mucocele if the sinus outflow tract is obstructed; many can be observed if minimally displaced. <strong>Posterior table involvement:</strong> the posterior table separates the sinus from the anterior cranial fossa, so a fracture here carries real risk of <strong>dural tear, CSF leak, and pneumocephalus</strong> (see the CSF rhinorrhea red flag above) and often needs neurosurgical involvement. The <strong>nasofrontal outflow tract</strong> (drainage pathway) is assessed on CT because an obstructed tract changes management from simple observation/repair toward sinus obliteration or cranialization to prevent a delayed mucocele or mucopyocele.</p>"
      },
      {
        id: "house-brackmann-grading",
        title: "Grading facial nerve function: the House-Brackmann scale",
        html: "<p>Once the decision to observe (rather than explore) has been made, facial nerve function is tracked over time using the <strong>House-Brackmann scale (grade I-VI)</strong>:</p><ol><li><strong>I</strong>: normal</li><li><strong>II</strong>: mild dysfunction (slight weakness, normal symmetry at rest)</li><li><strong>III</strong>: moderate (obvious but not disfiguring asymmetry, complete eye closure with effort)</li><li><strong>IV</strong>: moderately severe (disfiguring asymmetry, incomplete eye closure)</li><li><strong>V</strong>: severe (barely perceptible motion)</li><li><strong>VI</strong>: total paralysis, no movement</li></ol><p>It's a documentation and follow-up tool, distinct from the explore-vs-observe decision itself. A worsening grade over serial exams is what prompts reconsidering surgical exploration in a case initially chosen for observation.</p>"
      },
      {
        id: "facial-nerve-electrodiagnostics",
        title: "When exam alone isn't enough: electrodiagnostic testing",
        html: "<p>A cooperative, alert patient's voluntary facial movement is the best test, but when the patient is obtunded, intubated, or the exam is otherwise equivocal, <strong>electrodiagnostic testing</strong> helps decide observation vs exploration. A <strong>nerve stimulator</strong> applied to the distal (peripheral) branches can still evoke a motor response for roughly 72 hours after injury even if the nerve is transected, because the distal segment hasn't yet undergone Wallerian degeneration. A response present at this stage doesn't rule out transection. <strong>Electroneuronography (ENoG)</strong> compares the amplitude of the evoked compound muscle action potential on the injured side to the normal side; a drop of <strong>&gt;90%</strong> is generally taken as a threshold favoring surgical exploration/decompression, most classically used in the analogous setting of temporal-bone facial nerve injury and severe Bell's palsy, but the same electrodiagnostic logic applies to extratemporal trauma when the injury site and timing are uncertain.</p>"
      }
    ],
    redFlags: [
      { t: "<b>Any facial trauma with airway compromise signs (stridor, inability to control secretions, expanding neck/floor-of-mouth hematoma)</b>: airway takes priority over facial fracture management per ATLS." },
      { t: "<b>Immediate, complete facial paralysis after penetrating lateral facial trauma</b>: time-sensitive indication for surgical exploration/nerve repair (~72h stimulation window)." },
      { t: "<b>Clear or salivary drainage from a cheek laceration</b>: suspect Stensen's duct injury; needs exploration before closure." },
      { t: "<b>Orbital blow-out fracture with restricted upgaze, nausea/vomiting/bradycardia (oculocardiac reflex), or a 'white-eyed' presentation in a child</b>: possible muscle entrapment; can be a surgical emergency, especially in pediatric trapdoor fractures." },
      { t: "<b>Expanding retrobulbar/orbital hematoma with proptosis and decreasing vision</b>: orbital compartment syndrome; a true ophthalmic emergency requiring emergent lateral canthotomy/cantholysis." },
      { t: "<b>CSF rhinorrhea after facial/skull-base trauma</b>: think anterior skull base fracture; assess for meningitis risk, avoid nasal packing that could seed infection intracranially." },
      { t: "<b>Le Fort III ('floating face') fracture</b>: high-energy craniofacial disjunction; screen carefully for associated intracranial and cervical spine injury." },
      { t: "<b>Naso-orbito-ethmoid (NOE) fracture with traumatic telecanthus or a positive bowstring/traction test</b>: suspect medial canthal tendon disruption; missed injury causes permanent telecanthus and epiphora, so this needs specialist (facial plastics/oculoplastics) evaluation, not routine follow-up." },
      { t: "<b>Frontal sinus fracture with CSF leak, pneumocephalus, or posterior table involvement on CT</b>: intracranial risk; needs neurosurgical involvement, unlike an isolated anterior-table-only fracture which is often just a cosmetic concern." }
    ]
  },

  /* ==================== CASES TAB ==================== */
  cases: [
    {
      id: "case-le-fort-ii",
      ukmla: "Facial/periorbital swelling",
      source: "Standard facial trauma teaching on Le Fort fracture patterns.",
      stem: "After a motor vehicle collision, a patient has <b>facial swelling, epistaxis, and a mobile midface</b> that moves as a unit with the nasal bones when the examiner grasps the anterior maxillary teeth and palate.",
      prompts: [
        { q: "Which Le Fort pattern does this describe, and why?", a: "<strong>Le Fort II</strong>, a pyramidal fracture through the nasofrontal suture and zygomaticomaxillary region, so the nasal complex moves together with the maxilla as one mobile pyramidal segment." },
        { q: "What must be assessed before definitive facial fracture management?", a: "<strong>Airway, breathing, circulation, and C-spine</strong> per ATLS primary survey. Facial fractures are managed after life threats are addressed, and the airway can be directly threatened by a mobile, posteriorly displaced midface." }
      ],
      teaching: "Midface mobility tested by grasping the maxillary alveolus is how Le Fort patterns are distinguished clinically, but ATLS priorities come first regardless of fracture pattern."
    },
    {
      id: "case-facial-nerve-laceration",
      ukmla: "Facial weakness",
      source: "Standard facial trauma teaching on facial nerve injury timing.",
      stem: "A patient has a <b>deep laceration anterior to the ear</b> from a knife injury, with <b>immediate, complete inability to move the ipsilateral forehead, eye closure, and mouth</b> on that side.",
      prompts: [
        { q: "What does the immediate, complete nature of the weakness suggest, and what is the management implication?", a: "Immediate and complete weakness after penetrating trauma <strong>lateral to the lateral canthus</strong> suggests a <strong>transected facial nerve</strong>. This is an indication for <strong>urgent surgical exploration</strong>, ideally with nerve stimulation to identify distal branches within about 72 hours before Wallerian degeneration makes this unreliable." },
        { q: "How would the approach differ if the weakness had developed gradually over 2 days instead?", a: "Delayed-onset weakness is more consistent with <strong>edema/neurapraxia</strong> rather than transection, and would typically be <strong>observed</strong> rather than explored urgently." }
      ],
      teaching: "Timing and completeness of facial weakness after trauma, not just the fact of weakness, determines whether this is an urgent surgical exploration or a watch-and-wait."
    },
    {
      id: "case-orbital-blowout-child",
      ukmla: "Facial/periorbital swelling",
      source: "Standard pediatric orbital trauma teaching on 'white-eyed' blow-out fractures.",
      stem: "A <b>9-year-old</b> is hit in the eye with a ball. The eye looks relatively unremarkable (no significant bruising or swelling: a 'white eye'), but he has <b>marked restriction of upgaze</b>, nausea, and vomiting.",
      prompts: [
        { q: "Why is the benign external appearance misleading here?", a: "This is the classic <strong>'white-eyed' pediatric blow-out fracture</strong>. Children's more elastic bone can spring back after fracture, <strong>trapping (entrapping) the inferior rectus muscle</strong> with minimal external bruising, unlike the more obvious hematoma typically seen in adult blow-out fractures." },
        { q: "Why are the nausea and vomiting clinically important here, and what is the urgency?", a: "They suggest the <strong>oculocardiac reflex</strong> (from muscle entrapment/traction) and indicate this may be a <strong>surgical emergency</strong>: unlike most adult blow-out fractures, which can often be observed, pediatric white-eyed entrapment needs prompt surgical release to prevent permanent muscle ischemia/fibrosis." }
      ],
      teaching: "A 'white eye' after pediatric orbital trauma is reassuring on first glance and dangerously misleading: restricted upgaze with nausea/vomiting means urgent, not routine, evaluation."
    },
    {
      id: "case-parotid-duct-injury",
      ukmla: "Facial weakness",
      source: "Standard facial trauma teaching on Stensen's duct injury.",
      stem: "A patient has a laceration over the cheek along a line from the tragus to the corner of the mouth, with <b>clear, watery fluid</b> draining from the wound that increases when he is shown food.",
      prompts: [
        { q: "What structure is likely injured, and what confirms it?", a: "<strong>Stensen's (parotid) duct</strong>. Clear fluid that increases with a salivary stimulus (sialogogue, like the sight or smell of food) suggests saliva, not just serous wound drainage. Duct cannulation or exploration confirms the injury." },
        { q: "What else must be assessed along this same line of injury?", a: "The <strong>buccal branch of the facial nerve</strong>, which runs near the duct along this trajectory. Assess for asymmetric smile or cheek weakness before closing the wound." }
      ],
      teaching: "A cheek laceration along the tragus-to-lip-corner line threatens two structures at once, duct and nerve, and both need to be checked before you close."
    },
    {
      id: "case-csf-rhinorrhea",
      ukmla: "Epistaxis",
      source: "Standard skull-base trauma teaching on CSF leak recognition.",
      stem: "After a high-energy facial/skull-base injury, a patient has clear fluid dripping from one nostril that the patient describes as different from typical nasal discharge, worse when leaning forward.",
      prompts: [
        { q: "What must be excluded, and how might it be distinguished from ordinary rhinorrhea at the bedside?", a: "<strong>CSF rhinorrhea</strong> from an anterior skull base fracture. The 'halo' or 'ring' sign on gauze (a clear ring surrounding a central blood spot) and glucose-positive fluid support CSF; definitive testing (e.g. beta-2 transferrin) confirms it." },
        { q: "What should be avoided in managing this patient's nose, and why?", a: "<strong>Avoid nasal packing</strong> where possible. Packing near a skull-base defect risks pushing bacteria intracranially and increasing meningitis risk. Most traumatic CSF leaks are managed with head elevation and observation initially, with surgical repair reserved for persistent leaks." }
      ],
      teaching: "Clear rhinorrhea after skull-base trauma is CSF until proven otherwise, and it changes what you're allowed to do to the nose: packing is not the reflex answer here."
    },
    {
      id: "case-guardsman-fracture",
      ukmla: "Facial/periorbital swelling",
      source: "Standard oral-maxillofacial trauma teaching on bilateral condylar ('guardsman') mandible fracture patterns.",
      stem: "A patient fell and landed chin-first on the pavement. He reports his <b>bite feels wrong</b>, has bilateral preauricular pain and <b>trismus</b>, and describes numbness of his <b>lower lip and chin</b> bilaterally.",
      prompts: [
        { q: "What fracture pattern does a chin-first fall classically produce, and why does it happen in two places at once?", a: "A <strong>'guardsman fracture'</strong>: bilateral mandibular condyle fractures, often with an associated <strong>symphyseal/parasymphyseal fracture</strong> at the point of direct impact. The mandible is a ring of bone, so force transmitted through the symphysis frequently fractures the condyles as well, at the weakest points furthest from the impact." },
        { q: "What does the bilateral numbness of the lip and chin localize, and what confirms the diagnosis?", a: "A bilateral <strong>numb chin sign</strong> localizes to the <strong>inferior alveolar/mental nerve</strong> as it runs through the body of the mandible, consistent with body/parasymphyseal involvement. <strong>Panorex</strong> screens for the fracture lines; <strong>CT with 3D reconstruction</strong> confirms and characterizes them, especially the condyles." }
      ],
      teaching: "A chin-first mechanism plus malocclusion and trismus should make you look bilaterally, not just at the obvious symphyseal fracture: the mandible rarely breaks in only one place."
    },
    {
      id: "case-noe-fracture",
      ukmla: "Facial/periorbital swelling",
      source: "Standard craniomaxillofacial trauma teaching on naso-orbito-ethmoid (NOE) fracture and medial canthal tendon injury.",
      stem: "After a high-speed motor vehicle collision with direct impact to the nasal bridge, a patient has a <b>widened, rounded appearance to the inner corners of both eyes</b> and a flattened nasal bridge. Pulling gently on the lower eyelid laterally while palpating the inner canthus, the examiner feels the soft tissue move independently of the underlying bone.",
      prompts: [
        { q: "What is this exam maneuver, and what does the finding indicate?", a: "This is the <strong>bowstring (traction) test</strong> for the <strong>medial canthal tendon</strong>. Independent movement of the soft tissue from the bone indicates the tendon has been <strong>disrupted from its bony attachment</strong>: a positive test." },
        { q: "What is this overall injury pattern, what nearby structure is also at risk, and what imaging is needed?", a: "This is a <strong>naso-orbito-ethmoid (NOE) fracture</strong> with traumatic <strong>telecanthus</strong>. The <strong>nasolacrimal duct</strong> runs through the same region and can be injured concurrently, risking post-traumatic epiphora. <strong>CT</strong> is required to characterize the central fragment and plan direct tendon fixation (comminuted patterns need more than simple bone reduction)." }
      ],
      teaching: "Telecanthus and a positive bowstring test after central midface trauma point to canthal tendon injury: a diagnosis missed on plain visual inspection alone, and one that needs specialist repair to avoid permanent deformity and tearing."
    },
    {
      id: "case-mandible-fracture-airway",
      ukmla: "Facial/periorbital swelling",
      source: "Standard oral-maxillofacial trauma teaching on mandible fracture and airway compromise.",
      stem: "An intoxicated patient is brought in after an assault with direct blows to the chin. Lying supine, he is snoring loudly with intermittent stridor. Exam shows bilateral <b>parasymphyseal step-offs</b>, a mobile anterior mandibular segment, malocclusion, and blood pooling in the floor of mouth.",
      prompts: [
        { q: "Why is this patient's airway at risk, and why does lying supine make it worse?", a: "<strong>Bilateral parasymphyseal (or body) mandible fractures</strong> free the anterior mandibular segment from its normal bony support, letting the <strong>tongue base fall posteriorly</strong> and obstruct the hypopharyngeal airway. This is worsened supine (gravity), by sedation or intoxication (reduced tone), and by floor-of-mouth swelling or bleeding stacking on top of it." },
        { q: "What is the immediate bedside action, before any imaging?", a: "Reposition: sit the patient up, use a <strong>jaw-thrust/chin-lift</strong>, or manually pull the mobile anterior segment/tongue forward, to relieve tongue-base obstruction while airway equipment is readied. This is an ATLS-primary-survey airway problem, addressed before fracture workup." },
        { q: "What imaging confirms the fracture pattern, and what does it typically show?", a: "<strong>Panorex</strong> screens; <strong>CT mandible with 3D reconstruction</strong> confirms and characterizes it. Because the mandible is a ring of bone, a fracture in one place (e.g. parasymphyseal) is frequently paired with a second fracture elsewhere (e.g. contralateral condyle/angle). Always image the whole mandible." },
        { q: "If positioning and jaw-thrust don't secure the airway, what is the escalation, and why is fixation not the first move?", a: "Escalate to a definitive airway: <strong>awake fiberoptic intubation</strong> is often preferred over blind orotracheal intubation when anatomy is disrupted, with a <strong>surgical airway (cricothyroidotomy/tracheostomy)</strong> as backup if intubation fails. Open reduction and fixation of the fracture is <strong>definitive but not urgent</strong>: it comes after the airway is secured, not instead of securing it." }
      ],
      teaching: "Bilateral mandible fracture is an airway diagnosis before it is an orthopedic one. Tongue-base collapse from a flail anterior segment can obstruct the airway well before anyone gets to fixing the bone, especially supine or sedated."
    },
    {
      id: "case-auricular-hematoma",
      ukmla: "Painful ear",
      source: "Standard auricular trauma teaching on hematoma drainage and cauliflower ear prevention.",
      stem: "A collegiate wrestler presents after a match with a <b>painful, tense, fluctuant swelling of the outer ear</b> that has obliterated the normal cartilaginous contours. There is no overlying skin laceration.",
      prompts: [
        { q: "What has happened, and why does the perichondrium matter here?", a: "An <strong>auricular (pinna) hematoma</strong>. Blunt trauma shears the perichondrium off the underlying cartilage, and blood collects in the resulting subperichondrial space. Auricular cartilage has <strong>no blood supply of its own</strong>; it depends entirely on the overlying perichondrium for oxygen and nutrients." },
        { q: "Why is this a same-day problem rather than something to reassess in clinic next week?", a: "The hematoma physically separates cartilage from its only blood supply. Left undrained, the cartilage undergoes <strong>avascular necrosis</strong>, and the body lays down disorganized new (fibro)cartilage in response, producing the permanent, irreversible <strong>'cauliflower ear'</strong> deformity. The window to prevent this is narrow." },
        { q: "What is the management, and why is drainage alone not enough?", a: "<strong>Needle aspiration</strong> (for a small, early hematoma) or <strong>incision and drainage</strong> (for larger/recurrent collections), followed by a <strong>compressive pressure dressing or bolster</strong> sutured across the ear. The dressing/bolster is essential: without it, blood reaccumulates in the same potential space and the hematoma recurs." },
        { q: "How does management change if the patient returns a week later with a firm, irregular, thickened ear instead?", a: "Once fibrocartilage has already formed, drainage no longer helps: the deformity is established. At that point management shifts from prevention to <strong>cosmetic/reconstructive discussion</strong> rather than acute intervention." }
      ],
      teaching: "An auricular hematoma is a race against avascular necrosis: cartilage has no blood supply of its own, so prompt drainage plus a pressure dressing, not drainage alone, is what actually prevents cauliflower ear."
    },
    {
      id: "case-frontal-sinus-fracture",
      ukmla: "Epistaxis",
      source: "Standard craniomaxillofacial trauma teaching on frontal sinus fracture management.",
      stem: "After a high-speed motor vehicle collision with direct forehead impact, CT shows a <b>frontal sinus fracture</b>. The report specifically comments on the status of the posterior table and the nasofrontal outflow tract.",
      prompts: [
        { q: "Why does the report single out the posterior table specifically?", a: "The <strong>posterior table</strong> is the only thing separating the frontal sinus from the <strong>anterior cranial fossa</strong>. A posterior table fracture carries real risk of <strong>dural tear, CSF leak, and pneumocephalus</strong>, very different stakes from an anterior-table-only fracture, which is mainly a contour/cosmetic issue." },
        { q: "If only the anterior table is fractured and minimally displaced, how is this typically managed?", a: "Often <strong>observed</strong>, or reduced primarily for cosmesis, without violating the sinus, as long as the nasofrontal outflow tract is patent, since the main long-term risk of an isolated anterior-table fracture is a contour deformity rather than an intracranial one." },
        { q: "Why does the nasofrontal outflow tract get assessed separately from which table is broken?", a: "If the <strong>outflow tract</strong> is obstructed (by fracture fragments or scarring) regardless of which table is involved, the sinus can no longer drain, risking a delayed <strong>mucocele or mucopyocele</strong>: a mucus- or pus-filled expansile lesion that can present months to years later and erode adjacent bone (orbit, skull base)." },
        { q: "What does management of a posterior-table or outflow-tract-involving fracture generally require, beyond ENT?", a: "<strong>Neurosurgical co-evaluation</strong>, given the intracranial risk. Depending on severity this may mean observation with CSF-leak precautions, or operative management with <strong>sinus obliteration or cranialization</strong> to eliminate the mucocele risk and any dead space communicating with the intracranial cavity." }
      ],
      teaching: "With a frontal sinus fracture, ask two questions before anything else: is the posterior table involved (intracranial risk), and is the nasofrontal outflow tract patent (delayed mucocele risk). These, not the anterior table appearance, drive whether ENT/neurosurgery need to do more than watch."
    },
    {
      id: "case-septal-hematoma",
      ukmla: "Epistaxis",
      source: "Standard nasal trauma teaching on septal hematoma recognition and same-day drainage.",
      stem: "A 7-year-old falls off a bike onto his face. Nasal exam shows a <b>bilateral, boggy, fluctuant, bluish-red swelling</b> of the nasal septum that nearly obstructs both nostrils; there is no active bleeding.",
      prompts: [
        { q: "How is this distinguished from a simple deviated septum after trauma?", a: "A deviated septum is <strong>firm and follows the normal septal contour off to one side</strong>. A <strong>septal hematoma</strong> is <strong>boggy/fluctuant to palpation with a cotton-tip applicator</strong>, characteristically <strong>bilateral</strong>, and bluish-red/discolored: blood has collected in the subperichondrial/submucosal space on both sides of the cartilage." },
        { q: "Why is this a same-day surgical emergency rather than something to reduce electively?", a: "Septal cartilage, like auricular cartilage, has <strong>no blood supply of its own</strong> and depends entirely on the overlying perichondrium/mucoperichondrium. An undrained hematoma causes <strong>avascular necrosis of the cartilage within days</strong>, and can also become a <strong>septal abscess</strong>. Both are surgical emergencies that must be drained the same day it's found." },
        { q: "What deformity results if this is missed, and why?", a: "A <strong>saddle-nose deformity</strong>: loss of the cartilaginous dorsal septal support (from necrosis) causes the nasal dorsum to collapse, producing a sunken/flattened nasal bridge. It is a permanent structural loss, not just a cosmetic bruise that resolves." },
        { q: "What is the treatment, and why is drainage alone insufficient?", a: "Prompt <strong>incision and drainage</strong> of the hematoma, followed by <strong>anterior nasal packing or through-and-through quilting sutures</strong> to appose the mucoperichondrial flaps against the septal cartilage and prevent the space from reaccumulating blood. Drainage without preventing reaccumulation risks the hematoma simply reforming." }
      ],
      teaching: "Boggy, fluctuant, bilateral septal swelling after nasal trauma is a septal hematoma until proven otherwise, distinct from an ordinary deviated septum, and it needs same-day incision and drainage plus packing/quilting, not a follow-up appointment, to avoid saddle-nose deformity or abscess."
    }
  ],

  /* ==================== CARDS TAB ==================== */
  cards: [
    { id:"facial-buttresses-card", tags: ["FP", "anatomy"], milestones:["MK1","PC9"], ukmla:"Facial/periorbital swelling", source:"Standard facial trauma anatomy teaching.", front:"What are the facial buttresses, and why does reconstructive plating target them specifically?",
      back:"Thickened bone columns (vertical: nasomaxillary, zygomaticomaxillary, pterygomaxillary; horizontal: frontal bar, infraorbital rim, maxillary alveolus) that absorb and transmit force. Restoring buttress <strong>continuity</strong>, not just individual fracture lines, restores facial height, width, and projection.<figure class='note-fig' data-credit=\"Vertical and Horizontal Facial Buttresses. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/78_facial_buttresses_vertical_horizontal_gemini.png' alt='Facial buttresses' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The vertical and horizontal facial buttresses.</figcaption></figure>" },
    { id:"le-fort-card", tags: ["FP", "clinical"], milestones:["MK1","PC1"], ukmla:"Facial/periorbital swelling", source:"Standard facial trauma teaching on Le Fort classification.", front:"Distinguish Le Fort I, II, and III fractures.",
      back:"<strong>I:</strong> horizontal, above the tooth apices: mobile palate/alveolus. <strong>II:</strong> pyramidal, through the nasofrontal suture: mobile nasomaxillary complex. <strong>III:</strong> craniofacial disjunction through the frontozygomatic sutures: entire midface mobile relative to the skull ('floating face').<figure class='note-fig' data-credit=\"Le Fort Midface Fractures Classification (Types I, II, III). Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/82_le_fort_fractures_i_ii_iii_wikimedia.png' alt='Le Fort fracture classification' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Le Fort midface fracture classification, types I, II, III.</figcaption></figure>" },
    { id:"trauma-abcs-card", tags: ["FP", "clinical"], milestones:["PC1","SBP1"], redFlag:true, ukmla:"Facial/periorbital swelling", source:"ATLS (Advanced Trauma Life Support) primary survey principles.", front:"What comes before detailed facial fracture assessment in a trauma patient?",
      back:"The <strong>ATLS primary survey</strong>: Airway (facial fractures can directly compromise it), Breathing, Circulation, Disability, Exposure. A dramatic facial injury should never distract from a life-threatening airway or C-spine issue." },
    { id:"facial-nerve-parotid-card", tags: ["FP", "anatomy"], milestones:["MK1","PC9"], ukmla:"Facial weakness", source:"Standard facial nerve/parotid anatomy teaching.", front:"Name the five branches of the facial nerve as it exits the parotid.",
      back:"<strong>T</strong>emporal, <strong>Z</strong>ygomatic, <strong>B</strong>uccal, <strong>M</strong>arginal mandibular, <strong>C</strong>ervical (mnemonic: 'Ten Zebras Bite My Cat'). The nerve trunk runs through the substance of the parotid gland, dividing it surgically into superficial and deep lobes.<figure class='note-fig' data-credit=\"Facial Nerve Branches Through the Parotid Gland. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/79a_parotid_facial_nerve_branches_gemini.png' alt='Facial nerve branches through parotid' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Facial nerve branches through the parotid gland.</figcaption></figure>" },
    { id:"pitanguys-line-card", tags: ["FP", "anatomy"], milestones:["MK1","PC9"], ukmla:"Facial weakness", source:"Standard facial plastics teaching on the temporal branch of the facial nerve.", front:"What is Pitanguy's line, and why does it matter clinically?",
      back:"A line from 0.5cm below the tragus to 1.5cm above the lateral eyebrow, approximating the course of the <strong>temporal (frontal) branch</strong> of the facial nerve, the most superficial and vulnerable branch. Incisions or lacerations crossing it risk brow ptosis.<figure class='note-fig' data-credit=\"Pitanguy's Line and the Frontal Branch of the Facial Nerve. Jawad, Hohman, &amp; Raggio (2025). StatPearls.\"><img class='zoomable' src='assets/img/mc/80_pitanguys_line_frontal_branch_statpearls.png' alt='Pitanguy's line' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Pitanguy's line and the frontal branch of the facial nerve.</figcaption></figure>" },
    { id:"facial-nerve-injury-timing-card", tags: ["FP", "clinical"], milestones:["PC9","PC1"], redFlag:true, ukmla:"Facial weakness", source:"Standard facial trauma teaching on nerve injury timing.", front:"What distinguishes facial nerve injuries that need urgent exploration from those that can be observed?",
      back:"<strong>Immediate, complete</strong> weakness after penetrating trauma lateral to the lateral canthus → urgent surgical exploration/repair (nerve stimulation works best within ~72h before Wallerian degeneration). <strong>Delayed or incomplete</strong> weakness is more often edema/neurapraxia → can typically be observed." },
    { id:"stensens-duct-card", tags: ["FP", "anatomy"], milestones:["MK1","PC9"], ukmla:"Facial weakness", source:"Standard facial trauma teaching on parotid duct injury.", front:"Where does Stensen's duct run, and what clinical clue suggests it's injured?",
      back:"Along a line from the tragus to the midline of the upper lip, over masseter, piercing buccinator opposite the second upper molar. <strong>Clear, watery drainage from a cheek wound that increases with a sialogogue (e.g., food)</strong> suggests duct injury. Explore or cannulate before closing." },
    { id:"orbital-blowout-card", tags: ["FP", "clinical"], milestones:["PC1","MK2"], ukmla:"Facial/periorbital swelling", source:"Standard orbital trauma teaching on blow-out fractures.", front:"What is an orbital blow-out fracture, and what classic exam findings does it cause?",
      back:"Fracture of the thin orbital floor (or medial wall) from direct globe impact, with fat ± inferior rectus herniation/entrapment. Causes <strong>enophthalmos, diplopia on upgaze</strong> (restricted extraocular movement), and <strong>infraorbital nerve hypoesthesia</strong> (cheek/upper lip numbness).<figure class='note-fig' data-credit=\"Orbital Floor Blowout Fracture and Muscle Entrapment. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/81_orbital_floor_blowout_fracture_wikimedia.png' alt='Orbital floor blowout fracture' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Orbital floor blowout fracture and muscle entrapment.</figcaption></figure>" },
    { id:"white-eyed-blowout-card", tags: ["FP", "clinical"], milestones:["PC1","PC7"], redFlag:true, ukmla:"Facial/periorbital swelling", source:"Standard pediatric orbital trauma teaching on white-eyed blow-out fractures.", front:"Why is a 'white-eyed' blow-out fracture in a child more dangerous than it looks?",
      back:"Children's elastic bone can spring back after fracture, <strong>trapping the inferior rectus</strong> with minimal external bruising, unlike the obvious hematoma typical of adult blow-outs. Restricted upgaze plus nausea/vomiting (oculocardiac reflex) signals a <strong>surgical emergency</strong> needing prompt release to prevent muscle ischemia." },
    { id:"orbital-compartment-syndrome-card", tags: ["FP", "clinical"], milestones:["PC1"], redFlag:true, ukmla:"Facial/periorbital swelling", source:"Standard ophthalmic emergency teaching on orbital compartment syndrome.", front:"What is orbital compartment syndrome, and what is the emergency treatment?",
      back:"An expanding retrobulbar hematoma/hemorrhage causing rising intraorbital pressure: proptosis, decreasing vision, a tense orbit. A true emergency: emergent <strong>lateral canthotomy and cantholysis</strong> to decompress the orbit and preserve vision, performed at the bedside without waiting for imaging if vision is threatened." },
    { id:"csf-rhinorrhea-card", tags: ["FP", "clinical"], milestones:["PC1","MK2"], redFlag:true, ukmla:"Epistaxis", source:"Standard skull-base trauma teaching on CSF leak recognition.", front:"How is traumatic CSF rhinorrhea recognized, and what should be avoided in its initial management?",
      back:"Clear fluid, a 'halo/ring' sign on gauze, and glucose-positive/beta-2-transferrin-positive fluid. <strong>Avoid nasal packing</strong> near a suspected skull-base defect. It risks introducing infection intracranially; most leaks are managed with head elevation and observation, escalating to surgical repair if persistent." },
    { id:"reconstructive-ladder-card", tags: ["FP", "clinical"], milestones:["PC9","MK2"], ukmla:"Facial/periorbital swelling", source:"Standard reconstructive surgery teaching: the reconstructive ladder.", front:"State the reconstructive ladder in order.",
      back:"<strong>Secondary intention → primary closure → skin graft → local flap → regional flap → free tissue transfer (microvascular free flap)</strong>. Choose the simplest option achieving a good result, escalating only as the defect and tissue needs require.<figure class='note-fig' data-credit=\"The Surgical Reconstructive Ladder. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/83_reconstructive_ladder_gemini.png' alt='Reconstructive ladder' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The surgical reconstructive ladder.</figcaption></figure>" },
    { id:"nasal-septal-hematoma-card", tags: ["FP", "clinical"], milestones:["PC1"], redFlag:true, ukmla:"Epistaxis", source:"Standard nasal trauma teaching on septal hematoma.", front:"Why must a septal hematoma after nasal trauma be drained urgently?",
      back:"An undrained septal hematoma can cause <strong>avascular necrosis of the septal cartilage</strong> (the cartilage depends on the perichondrium for its blood supply) within days, leading to a saddle-nose deformity. Prompt incision and drainage, with packing to prevent reaccumulation, prevents this." },
    { id:"nasal-bone-fracture-card", tags: ["FP", "clinical"], milestones:["PC9","PC1"], ukmla:"Epistaxis", source:"Standard nasal trauma teaching.", front:"What is the general timing for closed reduction of a nasal bone fracture, and why does timing matter?",
      back:"Typically within <strong>5-10 days</strong> in adults (sooner in children, whose bones heal faster), before the fracture fragments begin to fixate or heal in a malaligned position, after which closed reduction becomes ineffective and open techniques may be needed." },
    { id:"zygoma-fracture-card", tags: ["FP", "clinical"], milestones:["MK1","PC9"], ukmla:"Facial/periorbital swelling", source:"Standard facial trauma teaching on zygomaticomaxillary complex fractures.", front:"What exam findings suggest a zygomaticomaxillary complex (ZMC) fracture?",
      back:"<strong>Cheek flattening, trismus</strong> (from impingement on the temporalis/coronoid), <strong>infraorbital nerve hypoesthesia</strong>, and a palpable step-off at the infraorbital rim or zygomaticofrontal suture. The zygoma articulates at four points, so a true fracture usually disrupts more than one." },
    { id:"mandible-fracture-airway-card", tags: ["FP", "clinical"], milestones:["PC1"], redFlag:true, ukmla:"Facial/periorbital swelling", source:"Standard facial trauma teaching on mandible fractures and airway risk.", front:"Why can bilateral mandible fractures threaten the airway?",
      back:"Bilateral (especially bilateral parasymphyseal/body) fractures let the anterior mandibular segment and tongue <strong>fall posteriorly</strong>, obstructing the airway, particularly when supine. This is assessed and managed within the ATLS primary survey, not after." },
    { id:"animal-bite-face-card", tags: ["FP", "clinical"], milestones:["PC9","SBP1"], ukmla:"Facial/periorbital swelling", source:"Standard facial wound management teaching on bite wounds.", front:"Unlike animal bites elsewhere on the body, which are often left open, facial animal bites are generally <span class=\"cloze-blank\">[...]</span>, given the face's excellent blood supply and the cosmetic and functional stakes.",
      back:"Unlike animal bites elsewhere on the body, which are often left open, facial animal bites are generally <mark class=\"cloze-answer\">closed primarily</mark>, given the face's excellent blood supply and the cosmetic and functional stakes." },
    { id:"scar-revision-timing-card", tags: ["FP", "clinical"], milestones:["PC9"], scope:"sub-I", ukmla:"Facial/periorbital swelling", source:"Standard facial plastics teaching on scar maturation.", front:"Why is elective scar revision typically delayed after facial trauma?",
      back:"Scars continue to <strong>remodel for up to about 12-18 months</strong>; many immature, red, or slightly irregular scars improve substantially on their own. Elective revision is generally deferred until scar maturation, except when function (e.g., eyelid ectropion, oral commissure) is affected sooner." },
    { id:"auricular-hematoma-card", tags: ["FP", "clinical"], milestones:["PC1"], redFlag:true, ukmla:"Painful ear", source:"Standard auricular trauma teaching on cauliflower ear prevention.", front:"Why does an auricular (pinna) hematoma need prompt drainage?",
      back:"The auricular cartilage has no direct blood supply of its own and relies on the overlying <strong>perichondrium</strong>; a hematoma separates the two, causing cartilage necrosis and fibrosis, the 'cauliflower ear' deformity, if not promptly drained with a pressure dressing/bolster to prevent reaccumulation." },
    { id:"mandible-fracture-sites-card", tags: ["FP", "anatomy"], milestones:["MK1","PC2"], ukmla:"Facial/periorbital swelling", source:"Standard oral-maxillofacial trauma teaching (AO/ATLS facial trauma principles) on mandible fracture sites.", front:"Because the mandible is a ring of bone, a strong enough force often fractures it in <span class=\"cloze-blank\">[...]</span>, for example a symphyseal fracture with a contralateral condyle fracture.",
      back:"Because the mandible is a ring of bone, a strong enough force often fractures it in <mark class=\"cloze-answer\">two places at once</mark>, for example a symphyseal fracture with a contralateral condyle fracture. This is why the whole mandible should be imaged after finding one fracture.<figure class='note-fig' data-credit=\"Mandible Fracture Patterns and Ring-Structure Rule. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/84_mandible_fractures_ring_rule_wikimedia.png' alt='Mandible fracture patterns' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Mandible fracture patterns and the ring-structure rule.</figcaption></figure>" },
    { id:"guardsman-fracture-card", tags: ["FP", "clinical"], milestones:["PC2","PC1"], redFlag:true, ukmla:"Facial/periorbital swelling", source:"Standard facial trauma teaching on bilateral condylar ('guardsman') fracture patterns.", front:"What is a 'guardsman fracture,' and what mechanism produces it?",
      back:"A <strong>bilateral mandibular condyle fracture</strong>, often paired with a <strong>symphyseal/parasymphyseal fracture</strong>, classically from a <strong>chin-first fall</strong>: force transmitted through the point of direct impact fractures the ring of bone again at its weakest points, the condyles." },
    { id:"mandible-malocclusion-numbchin-card", tags: ["FP", "clinical"], milestones:["PC2","MK1"], ukmla:"Facial/periorbital swelling", source:"Standard facial trauma teaching on the mandible fracture exam.", front:"Hypoesthesia of the lip and chin after a mandible fracture, from injury to the inferior alveolar/mental nerve as it runs through the mandibular body, is called the <span class=\"cloze-blank\">[...]</span>.",
      back:"Hypoesthesia of the lip and chin after a mandible fracture, from injury to the inferior alveolar/mental nerve as it runs through the mandibular body, is called the <mark class=\"cloze-answer\">numb chin sign</mark>." },
    { id:"noe-fracture-card", tags: ["FP", "anatomy"], milestones:["PC2","MK1"], redFlag:true, ukmla:"Facial/periorbital swelling", source:"Standard craniomaxillofacial trauma teaching on naso-orbito-ethmoid (NOE) fracture.", front:"Medial canthal tendon disruption after a naso-orbito-ethmoid (NOE) fracture is assessed with the <span class=\"cloze-blank\">[...]</span>, pulling the lower eyelid laterally while palpating the medial canthus for independent soft-tissue movement from bone.",
      back:"Medial canthal tendon disruption after a naso-orbito-ethmoid (NOE) fracture is assessed with the <mark class=\"cloze-answer\">bowstring (traction) test</mark>, pulling the lower eyelid laterally while palpating the medial canthus for independent soft-tissue movement from bone. Disruption causes traumatic telecanthus and a flattened nasal bridge." },
    { id:"nasolacrimal-duct-injury-card", tags: ["FP", "anatomy"], milestones:["MK1","PC2"], scope:"sub-I", ukmla:"Facial/periorbital swelling", source:"Standard craniomaxillofacial trauma teaching on nasolacrimal duct injury in NOE fracture.", front:"Why can an NOE fracture cause post-traumatic epiphora (excess tearing)?",
      back:"The <strong>nasolacrimal duct</strong> runs through the same naso-orbito-ethmoid region as the medial canthal tendon and can be injured concurrently. Unaddressed duct injury causes chronic <strong>epiphora</strong>; recognizing the risk at the time of NOE fracture repair (± duct probing/intubation) prevents a delayed, harder-to-fix problem." },
    { id:"frontal-sinus-fracture-card", tags: ["FP", "clinical"], milestones:["PC2","MK2"], redFlag:true, ukmla:"Epistaxis", source:"Standard craniomaxillofacial trauma teaching on frontal sinus fracture management.", front:"In a frontal sinus fracture, <span class=\"cloze-blank\">[...]</span> involvement carries a real risk of dural tear, CSF leak, and pneumocephalus, because it is the only barrier between the sinus and the anterior cranial fossa.",
      back:"In a frontal sinus fracture, <mark class=\"cloze-answer\">posterior table</mark> involvement carries a real risk of dural tear, CSF leak, and pneumocephalus, because it is the only barrier between the sinus and the anterior cranial fossa. An isolated anterior-table fracture is mainly a cosmetic concern." },
    { id:"house-brackmann-card", tags: ["FP", "clinical"], milestones:["PC8","MK1"], scope:"sub-I", ukmla:"Facial weakness", source:"House-Brackmann facial nerve grading system (House & Brackmann, 1985).", front:"Facial nerve function after trauma is graded on the <span class=\"cloze-blank\">[...]</span>, ranging from grade I (normal) to grade VI (total paralysis).",
      back:"Facial nerve function after trauma is graded on the <mark class=\"cloze-answer\">House-Brackmann scale</mark>, ranging from grade I (normal) to grade VI (total paralysis). A worsening grade on serial exam prompts reconsidering surgical exploration." },
    { id:"facial-nerve-electrodiagnostics-card", tags: ["FP", "clinical"], milestones:["PC8","PC2"], scope:"sub-I", ukmla:"Facial weakness", source:"Standard facial nerve injury workup teaching on nerve stimulation and electroneuronography (ENoG).", front:"On electroneuronography (ENoG), a compound muscle action potential amplitude drop of more than <span class=\"cloze-blank\">[...]</span> compared to the normal side generally favors surgical exploration or decompression.",
      back:"On electroneuronography (ENoG), a compound muscle action potential amplitude drop of more than <mark class=\"cloze-answer\">90%</mark> compared to the normal side generally favors surgical exploration or decompression. A nerve stimulator on distal branches can still evoke a response for about 72 hours after injury even if the nerve is transected." },
    { id:"local-flaps-facial-card", tags: ["FP", "clinical"], milestones:["PC8","MK1"], scope:"sub-I", ukmla:"Facial/periorbital swelling", source:"Standard facial plastic & reconstructive surgery teaching on local flaps and the aesthetic subunit principle.", front:"The classic local flap for a larger nasal-tip or dorsum defect is the <span class=\"cloze-blank\">[...]</span>, based on the supratrochlear vessels.",
      back:"The classic local flap for a larger nasal-tip or dorsum defect is the <mark class=\"cloze-answer\">paramedian forehead flap</mark>, based on the supratrochlear vessels. Cheek defects are typically closed instead with adjacent advancement or rotation flaps." }
  ]
});

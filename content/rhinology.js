/* rhinology.js, RHINOLOGY & SINUS (subspecialty track)
 *
 * Deep dive on the nose/sinus disease that Foundations only introduces.
 * Built on the same Module Build Standard as Foundations: every card/case
 * carries a UKMLA scope tag (content/ukmla.js), an ACGME Milestone tag
 * (content/frameworks.js, primarily PC5 Rhinologic Disease / MK2 Allergy),
 * and a named source. Content written to US practice standards (AAO-HNSF
 * clinical practice guidelines); UK/US differences flagged inline.
 *
 * STATUS: DRAFT, pending JeffENT faculty review. See docs/MODULE-BUILD-STANDARD.md.
 */
window.JEFFENT.register({
  id: "rhinology-sinus",
  track: "rhinology",
  trackName: "Rhinology & Sinus",
  trackAbbr: "RH",
  order: 2,
  title: "Rhinology & Sinus",
  subtitle: "Nose and paranasal sinus disease in depth: anatomy, chronic rhinosinusitis, allergic/non-allergic rhinitis, epistaxis escalation, and the unilateral masses you must not miss.",
  version: "0.3.0-draft",
  level: ["core", "sub-I"],
  status: "DRAFT, pending faculty review. v0.2.0: added an allergy/rhinitis depth pass, ARIA classification and step-up therapy for allergic rhinitis, the non-allergic rhinitis mimics (vasomotor, hormonal, drug-induced/rhinitis medicamentosa, NARES, gustatory), skin-prick vs serum-specific IgE testing, antihistamine/decongestant pharmacology, and FESS surgical anatomy variants (concha bullosa, Haller cells, Onodi cells), grounded in ARIA, EPOS 2020, and AAO-HNSF Allergic Rhinitis CPG (2015); written fresh from guidelines and standard rhinology teaching, not derived from any single textbook.",
  facultyReviewer: "",
  curriculumAnchors: [
    "UKMLA Content Map (GMC), scope anchor; owns Nasal obstruction, Epistaxis, Anosmia, Allergies, Facial pain, Ear and nasal discharge (nasal), Rhinosinusitis",
    "ACGME Otolaryngology-HNS Milestones 2.0, primarily PC5 Rhinologic Disease, MK2 Allergy",
    "AAO-HNSF Clinical Practice Guidelines: Adult Sinusitis (2015), Allergic Rhinitis (2015), Nosebleed/Epistaxis (2020)",
    "ARIA (Allergic Rhinitis and its Impact on Asthma) guideline; EPOS 2020 (European Position Paper on Rhinosinusitis and Nasal Polyps)",
    "UK undergraduate Delphi (Lloyd 2014), student-scope depth cap"
  ],
  frameworkAlignment: {
    competenciesCovered: ["PC", "MK"],
    note: "Subspecialty depth at student scope (Delphi); goes deeper than Foundations on the same UKMLA items (chronic disease, escalation ladders, red-flag masses, allergic/non-allergic rhinitis) rather than introducing new ones."
  },

  /* ==================== ANATOMY TAB ==================== */
  anatomy: {
    notes: [
      {
        title: "The lateral nasal wall & the ostiomeatal complex (OMC)",
        html: "<figure class='note-fig' data-credit=\"Sagittal nasal cavity and pharynx. NCI SEER via Wikimedia Commons. Public domain.\"><img class='zoomable' src='assets/img/rhinology/midsagittal-head-neck.png' alt='Sagittal view of the nasal cavity and upper aerodigestive tract' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Sagittal view of the nasal cavity and pharynx</figcaption></figure><ul><li>Three turbinates (inferior, middle, superior) overhang three meatuses; the <strong>middle meatus</strong> is the key one.</li><li>The <strong>uncinate process</strong> and <strong>ethmoid bulla</strong> form the <strong>ethmoid infundibulum</strong>, the final common drainage pathway (the <strong>ostiomeatal complex</strong>) for the frontal, anterior ethmoid, and maxillary sinuses.</li><li>Obstruct the OMC (mucosal edema, deviated septum, concha bullosa) and all three sinuses back up, which is why CRS is usually a disease of the OMC, not of one sinus alone.</li></ul>" + "<figure class='note-fig' data-credit='Ostiomeatal complex on coronal CT. Wikimedia Commons.'><img class='zoomable' src='assets/img/mc/image46.png' alt='Ostiomeatal complex on coronal CT' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The ostiomeatal complex, the shared drainage funnel for the frontal, maxillary, and anterior ethmoid sinuses.</figcaption></figure>"
      },
      {
        title: "The paranasal sinuses: drainage & danger zones",
        html: "<figure class='note-fig' data-credit=\"The paranasal sinuses. Wikimedia Commons, CC BY-SA 4.0.\"><img class='zoomable' src='assets/img/rhinology/paranasal-sinuses-numbered.svg' alt='The paranasal sinuses' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The paranasal sinuses</figcaption></figure><ul><li><strong>Frontal:</strong> drains via the frontal recess into the middle meatus; borders the anterior cranial fossa.</li>" +
          "<li><strong>Maxillary:</strong> largest sinus; ostium sits high on its medial wall (gravity-independent drainage). Floor relates to molar/premolar roots (odontogenic sinusitis).</li>" +
          "<li><strong>Ethmoid:</strong> anterior cells → middle meatus, posterior cells → superior meatus; separated from the <strong>orbit</strong> by the paper-thin <strong>lamina papyracea</strong>, which is the route for orbital complications.</li>" +
          "<li><strong>Sphenoid:</strong> drains via the sphenoethmoidal recess; borders the <strong>optic nerve, carotid artery, cavernous sinus, and pituitary</strong>, making it the highest-stakes sinus surgically.</li></ul>" + "<figure class='note-fig' data-credit='Paranasal sinus drainage and danger zones. Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/mc/image47.png' alt='Paranasal sinus drainage and danger zones' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Sinus drainage pathways and the danger zones that make each sinus surgically risky.</figcaption></figure><figure class='note-fig' data-credit=\"Paranasal Sinuses Drainage and Adjacent Danger Zones. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/44_paranasal_sinuses_danger_zones_gemini.png' alt='Paranasal sinus danger zones' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Paranasal sinus drainage and adjacent danger zones.</figcaption></figure>"
      },
      {
        title: "Blood supply of the nose",
        html: "<figure class='note-fig' data-credit=\"Blood supply of the nose. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/image48.png' alt='Kiesselbach's plexus' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: Kiesselbach's plexus: anterior ethmoidal, sphenopalatine, greater palatine, and superior labial contributions.</figcaption></figure><ul><li><strong>Little's area (Kiesselbach's plexus)</strong> on the anterior septum is where four vessels converge: <strong>anterior ethmoidal</strong> (internal carotid to ophthalmic), <strong>sphenopalatine</strong> and <strong>greater palatine</strong> (external carotid to maxillary), and <strong>superior labial</strong> (external carotid to facial).</li><li>Over 90% of nosebleeds are anterior, from this plexus.</li><li>Posterior bleeds come from the <strong>sphenopalatine artery</strong> itself: heavier, harder to see, and more likely in older or anticoagulated patients.</li></ul>"
      },
      {
        title: "The nasal septum",
        html: "<figure class='note-fig' data-credit=\"OpenStax, Anatomy and Physiology 2e (Ch. 22). CC BY 4.0.\"><img class='zoomable' src='assets/img/rhinology/nasal-septum-openstax.png' alt='Nasal septum' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Septal cartilage (anterior), perpendicular plate of the ethmoid (superior), vomer (inferior).</figcaption></figure><ul><li>Cartilage anteriorly (<strong>quadrangular cartilage</strong>); bone posteriorly (<strong>perpendicular plate of the ethmoid</strong> above, <strong>vomer</strong> below).</li><li>Deviation is very common and often asymptomatic.</li><li>A <strong>septal hematoma or abscess</strong> is an emergency: the cartilage has no blood supply of its own and depends entirely on the overlying mucoperichondrium.</li></ul>" + "<figure class='note-fig' data-credit='Nasal septum. Wikimedia Commons.'><img class='zoomable' src='assets/img/mc/image49.png' alt='Nasal septum: cartilage, perpendicular plate, vomer' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The nasal septum: quadrangular cartilage anteriorly, perpendicular plate of the ethmoid and vomer posteriorly.</figcaption></figure><figure class='note-fig' data-credit=\"Osteocartilaginous Anatomy of the Nasal Septum. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/45_nasal_septum_framework_wikimedia.png' alt='Nasal septum osteocartilaginous anatomy' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The osteocartilaginous anatomy of the nasal septum.</figcaption></figure>"
      },
      {
        title: "FESS anatomy variants",
        html: "<figure class='note-fig' data-credit=\"FESS anatomy variants on coronal sinus CT. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/image50.png' alt='Lateral wall of the nasal cavity' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: Ethmoid infundibulum, uncinate process, ethmoid bulla, and pneumatization variants.</figcaption></figure><p>Three pneumatization variants that every surgeon (and every student reading a preop sinus CT) should be able to name:</p><ul>" +
          "<li><strong>Concha bullosa:</strong> an aerated (pneumatized) middle turbinate. Common and often incidental, but a large one can narrow the OMC and contribute to obstruction/CRS, so it's sometimes resected as part of FESS.</li>" +
          "<li><strong>Haller cells (infraorbital ethmoid cells):</strong> ethmoid air cells that extend along the orbital floor, next to the maxillary sinus ostium. They can narrow the ostium (contributing to maxillary sinus disease) and put the orbital floor closer to the surgical field than expected.</li>" +
          "<li><strong>Onodi cells:</strong> the most posterior ethmoid air cell(s), pneumatizing superolaterally alongside or above the sphenoid sinus, close to (sometimes directly overlying) the <strong>optic nerve</strong>. Missing an Onodi cell on preop CT and mistaking it for the sphenoid sinus proper is a classic setup for <strong>optic nerve injury</strong> during posterior ethmoid/sphenoid surgery.</li></ul>" +
          "<p>None of these are diseases on their own. They matter because they change where the danger is on the CT, which is why every preop sinus CT is read systematically before a scope ever goes in.</p><figure class='note-fig' data-credit=\"Key FESS Anatomic Variants (Concha Bullosa, Haller Cells, Onodi Cells). Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/46_fess_anatomy_variants_gemini.png' alt='FESS anatomic variants' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Key FESS anatomic variants: concha bullosa, Haller cells, Onodi cells.</figcaption></figure>"
      }
    ],
    diagrams: [
      {
        kind: "image",
        occlude: true,
        id: "septal-vessels",
        title: "Little's area (Kiesselbach's plexus)",
        note: "The anastomosis behind &gt;90% of nosebleeds. Name each contributing vessel, then reveal.",
        src: "assets/img/mc/25_kiesselbachs_plexus_gemini.png",
        source: "Kiesselbach's Plexus (Little's Area) Arterial Supply. Illustration generated with Google Gemini.",
        labels: [
          { id:"ka", text:"Little's area / Kiesselbach's plexus", box:{x:29.7,y:42.4,w:24.0,h:9.0} },
          { id:"aee", text:"Anterior ethmoidal a. (ICA → ophthalmic)", box:{x:4.7,y:23.6,w:24.0,h:9.0} },
          { id:"sla", text:"Superior labial a. (ECA → facial)", box:{x:4.7,y:67.4,w:24.0,h:9.0} },
          { id:"spa", text:"Sphenopalatine a. (ECA → maxillary): posterior bleed source", box:{x:71.3,y:26.8,w:24.0,h:9.0} },
          { id:"gpa", text:"Greater palatine a. (ECA → maxillary)", box:{x:65.8,y:73.6,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "omc-drainage",
        title: "Ostiomeatal complex: coronal drainage",
        note: "The final common pathway for frontal, anterior ethmoid, and maxillary drainage. Name each structure, then reveal.",
        src: "assets/img/mc/17_ostiomeatal_complex_radiopaedia.png",
        source: "Ostiomeatal Complex (OMC) Coronal Drainage Anatomy. radiopaedia.org.",
        labels: [
          { id:"max", text:"Maxillary sinus", box:{x:19.4,y:39.6,w:24.0,h:9.0} },
          { id:"eth", text:"Ethmoid air cells", box:{x:56.6,y:39.6,w:24.0,h:9.0} },
          { id:"unc", text:"Uncinate process", box:{x:36.8,y:33.1,w:24.0,h:9.0} },
          { id:"bul", text:"Ethmoid bulla", box:{x:43.2,y:39.6,w:24.0,h:9.0} },
          { id:"inf", text:"Ethmoid infundibulum (the OMC channel)", box:{x:34.7,y:45.5,w:24.0,h:9.0} },
          { id:"sep", text:"Nasal septum", box:{x:38.0,y:63.1,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "svg",
        id: "lateral-wall-turbinates",
        title: "Lateral nasal wall: turbinates & meatuses (sagittal)",
        note: "Which sinus drains into which meatus. Name each, then reveal.",
        viewBox: "0 0 420 300",
        base: '<path d="M20 260 Q40 60 380 40 Q400 140 360 260 Z" fill="var(--surface-2)" stroke="var(--line)" stroke-width="2"/>'
          + '<path d="M60 220 Q160 190 320 200" fill="none" stroke="var(--primary)" stroke-width="4"/>'
          + '<path d="M50 170 Q170 130 340 148" fill="none" stroke="var(--primary)" stroke-width="4"/>'
          + '<path d="M70 110 Q180 90 300 100" fill="none" stroke="var(--primary)" stroke-width="3"/>',
        labels: [
          { id:"it", text:"Inferior turbinate → inferior meatus (nasolacrimal duct opens here)", px:190, py:210, lx:210, ly:280 },
          { id:"mt", text:"Middle turbinate → middle meatus (OMC: frontal/max/ant. ethmoid)", px:195, py:140, lx:60, ly:70 },
          { id:"st", text:"Superior turbinate → superior meatus (posterior ethmoid)", px:185, py:98, lx:340, ly:40 },
          { id:"sr", text:"Sphenoethmoidal recess (sphenoid sinus drains here)", px:340, py:80, lx:380, ly:150 }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "sinus-danger-zones",
        title: "Sinus danger zones: orbit and skull base",
        note: "Why sinusitis can become an orbital or intracranial emergency. Name each structure, then reveal.",
        src: "assets/img/mc/44_paranasal_sinuses_danger_zones_gemini.png",
        source: "Paranasal Sinuses Drainage and Adjacent Danger Zones. Illustration generated with Google Gemini.",
        labels: [
          { id:"cranial-fossa", text:"Anterior cranial fossa, containing the dura", box:{x:38.0,y:6.4,w:24.0,h:9.0} },
          { id:"cribriform-plate", text:"Cribriform plate / ethmoid roof: thin bone below the dura", box:{x:38.0,y:16.1,w:24.0,h:9.0} },
          { id:"ethmoid-cells", text:"Ethmoid air cells: thin-walled, sitting between the nose and the orbit", box:{x:28.0,y:25.2,w:24.0,h:9.0} },
          { id:"lamina-papyracea", text:"Lamina papyracea: paper-thin bone, the route for orbital spread of infection", box:{x:25.5,y:29.9,w:24.0,h:9.0} },
          { id:"orbit", text:"Orbit: infection here causes periorbital or orbital cellulitis, abscess, or vision loss", box:{x:11.8,y:29.9,w:24.0,h:9.0} },
          { id:"maxillary-sinus", text:"Maxillary sinus: sits below the orbit, floor near the tooth roots", box:{x:18.0,y:58.0,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "nasal-septum-anatomy",
        title: "Nasal septum: cartilage and bone",
        note: "The septal skeleton and where it typically deviates. Name each part, then reveal.",
        src: "assets/img/mc/45_nasal_septum_framework_wikimedia.png",
        source: "Osteocartilaginous Anatomy of the Nasal Septum. Wikimedia Commons.",
        labels: [
          { id:"quadrangular-cartilage", text:"Quadrangular cartilage: the anterior two-thirds, flexible and avascular on its own", box:{x:16.9,y:45.5,w:24.0,h:9.0} },
          { id:"perpendicular-plate", text:"Perpendicular plate of the ethmoid: posterosuperior, continuous with the cribriform plate", box:{x:49.8,y:25.5,w:24.0,h:9.0} },
          { id:"vomer", text:"Vomer: posteroinferior, a thin flat bone forming the floor of the bony septum", box:{x:49.8,y:58.8,w:24.0,h:9.0} },
          { id:"deviation-junction", text:"Cartilage-vomer junction: the classic site of septal deviation", box:{x:33.3,y:62.2,w:24.0,h:9.0} },
          { id:"caudal-septum", text:"Caudal septum: deviation here can visibly tilt the nasal tip", box:{x:5.9,y:77.2,w:24.0,h:9.0} },
          { id:"maxillary-crest", text:"Maxillary crest: the inferior groove that both cartilage and vomer sit in", box:{x:32.7,y:80.5,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "fess-anatomic-variants",
        title: "FESS anatomic variants: concha bullosa, Haller cells, Onodi cells",
        note: "Three pneumatization variants shown against normal sinus anatomy (not all at the same coronal level). Name each, then reveal.",
        src: "assets/img/mc/46_fess_anatomy_variants_gemini.png",
        source: "Key FESS Anatomic Variants (Concha Bullosa, Haller Cells, Onodi Cells). Illustration generated with Google Gemini.",
        labels: [
          { id:"normal-turbinate", text:"Normal middle turbinate, shown for comparison", box:{x:23.7,y:29.9,w:24.0,h:9.0} },
          { id:"concha-bullosa", text:"Concha bullosa: an aerated middle turbinate that can narrow the OMC", box:{x:51.1,y:30.5,w:24.0,h:9.0} },
          { id:"sphenoid-sinus", text:"Sphenoid sinus", box:{x:36.1,y:10.5,w:24.0,h:9.0} },
          { id:"haller-cell", text:"Haller cell: an ethmoid cell on the orbital floor, next to the maxillary ostium", box:{x:59.4,y:43.9,w:24.0,h:9.0} },
          { id:"onodi-cell", text:"Onodi cell: the most posterior ethmoid cell, pneumatizing beside or above the sphenoid", box:{x:47.0,y:3.6,w:24.0,h:9.0} },
          { id:"optic-nerve", text:"Optic nerve: can run directly beneath an Onodi cell, at risk during posterior surgery", box:{x:47.0,y:8.6,w:24.0,h:9.0} },
          { id:"maxillary-sinus", text:"Maxillary sinus", box:{x:58.2,y:61.1,w:24.0,h:9.0} }
        ]
      }
    ]
  },

  /* ==================== CLINICAL TAB ==================== */
  clinical: {
    blocks: [
      {
        id: "crs-definition",
        title: "Chronic rhinosinusitis (CRS): definition & subtypes",
        html: "<p><strong>≥12 weeks</strong> of ≥2 of: nasal obstruction, discharge, facial pain/pressure, or reduced smell, confirmed by nasal endoscopy or CT.</p>",
        table: {
          head: ["Subtype", "Key feature", "First-line management"],
          rows: [
            ["CRS <b>without</b> polyps (CRSsNP)", "Mucosal thickening, no polyps", "Saline irrigation + intranasal corticosteroid"],
            ["CRS <b>with</b> polyps (CRSwNP)", "Bilateral polyps on endoscopy", "Intranasal/short oral steroid; biologics or FESS if refractory"],
            ["AERD (Samter's triad)", "CRSwNP + asthma + ASA/NSAID sensitivity", "Steroids, leukotriene modifiers, consider aspirin desensitization"]
          ]
        }
      },
      {
        id: "ar-classification",
        title: "Allergic rhinitis: ARIA classification & step-up therapy",
        html: "<p>The old \"seasonal vs perennial\" split has been replaced by <strong>ARIA</strong> (Allergic Rhinitis and its Impact on Asthma), which classifies by <strong>duration</strong> and <strong>severity</strong>, and this is what actually drives step-up therapy.</p><figure class='note-fig' data-credit=\"ARIA Classification for Allergic Rhinitis (Duration and Severity Grid). Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/47_aria_classification_allergic_rhinitis_gemini.png' alt='ARIA classification grid' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>ARIA classification for allergic rhinitis: duration and severity.</figcaption></figure>",
        table: {
          head: ["Axis", "Categories"],
          rows: [
            ["Duration", "<b>Intermittent</b> (&lt;4 days/week OR &lt;4 consecutive weeks) vs <b>persistent</b> (≥4 days/week AND ≥4 consecutive weeks)"],
            ["Severity", "<b>Mild</b> (no impact on sleep/daily activity/school/work) vs <b>moderate-severe</b> (one or more of: sleep disturbance, impaired daily activity/sport, impaired school/work, troublesome symptoms)"]
          ]
        }
      },
      {
        id: "ar-step-therapy",
        title: "Allergic rhinitis: the step-up therapy ladder",
        html: "<ol><li><strong>Allergen avoidance</strong> + as-needed second-generation oral or intranasal antihistamine for mild/intermittent disease.</li>" +
          "<li><strong>Intranasal corticosteroid (INCS)</strong>, the single most effective agent and first-line for persistent or moderate-severe disease. Regular (not as-needed) dosing works best.</li>" +
          "<li><strong>Combination therapy:</strong> INCS + intranasal antihistamine (e.g., fluticasone-azelastine) for inadequate response to INCS alone; add a <strong>leukotriene receptor antagonist</strong> if there's concurrent asthma, or an intranasal <strong>anticholinergic</strong> (ipratropium) if rhinorrhea is the dominant symptom.</li>" +
          "<li><strong>Refractory disease:</strong> refer for <strong>allergen immunotherapy</strong> (SCIT or SLIT), the only disease-modifying option.</li></ol>" +
          "<p><em>UK/US: both NICE CKS and AAO-HNSF put intranasal steroids first-line for persistent disease; the ARIA duration/severity framework is used on both sides.</em></p>" + "<figure class='note-fig' data-credit='ARIA allergic rhinitis classification. Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/mc/image51.png' alt='ARIA allergic rhinitis classification' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>ARIA classifies allergic rhinitis by duration (intermittent/persistent) and severity.</figcaption></figure>" + "<figure class='note-fig' data-credit='Allergic rhinitis step-up therapy ladder. Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/mc/image52.png' alt='Allergic rhinitis step-up therapy ladder' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The allergic-rhinitis step-up ladder from avoidance to immunotherapy.</figcaption></figure><figure class='note-fig' data-credit=\"Allergic Rhinitis Step-Up Medical Management Ladder. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/48_allergic_rhinitis_ladder_gemini.png' alt='Allergic rhinitis step-up ladder' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Allergic rhinitis step-up medical management ladder.</figcaption></figure>"
      },
      {
        id: "non-allergic-rhinitis",
        title: "Non-allergic rhinitis: the mimics of allergic rhinitis",
        html: "<p>Chronic rhinitis with a <strong>negative allergy workup</strong>. The clinical clue: <strong>itch, sneezing bouts, and conjunctivitis point to allergic rhinitis</strong>; non-allergic rhinitis is dominated by congestion and rhinorrhea without them.</p>",
        table: {
          head: ["Subtype", "Trigger / clue", "Notes"],
          rows: [
            ["Vasomotor rhinitis", "Temperature change, strong odors, alcohol, emotional stress", "Diagnosis of exclusion; treat with intranasal antihistamine or ipratropium rather than oral antihistamines (which target histamine, not the mechanism here)"],
            ["Hormonal (pregnancy) rhinitis", "Onset/worsening in pregnancy, no allergic trigger", "Resolves postpartum; avoid systemic decongestants (pseudoephedrine) in pregnancy; saline and, if needed, intranasal steroids are preferred"],
            ["Drug-induced (see next block)", "Topical decongestant overuse, ACE inhibitors, alpha-blockers, OCPs/hormone therapy", "Stop/switch the causative agent"],
            ["NARES (non-allergic rhinitis with eosinophilia syndrome)", "Nasal smear shows eosinophilia; skin/IgE testing negative", "Often responds well to intranasal corticosteroids despite the negative allergy workup"],
            ["Gustatory rhinitis", "Rhinorrhea triggered by eating (especially spicy/hot food)", "Cholinergically mediated; intranasal ipratropium before meals if bothersome"]
          ]
        }
      },
      {
        id: "allergy-testing-pharmacology",
        title: "Allergy testing & rhinitis pharmacology",
        html: "<p><strong>Testing (used to confirm allergic vs non-allergic rhinitis and identify triggers for avoidance/immunotherapy):</strong></p>" +
          "<ul><li><strong>Skin-prick testing:</strong> fast, sensitive, results in ~20 minutes, but antihistamines must be held for several days beforehand (they blunt the wheal-and-flare response), and it carries a small anaphylaxis risk so it's done under supervision with resuscitation available.</li>" +
          "<li><strong>Serum-specific IgE (e.g., ImmunoCAP):</strong> no need to stop antihistamines, safer in patients with extensive eczema/dermatographism or a high anaphylaxis risk, but slower to result and generally slightly less sensitive.</li></ul>" +
          "<p>Either way: a <strong>positive test without a matching clinical history is sensitization, not allergy</strong>, so always correlate with symptoms and exposure.</p>" +
          "<p><strong>Pharmacology:</strong></p><ul>" +
          "<li><strong>Second-generation oral antihistamines</strong> (cetirizine, loratadine, fexofenadine) are preferred over first-generation agents (diphenhydramine, chlorpheniramine), which cross the blood-brain barrier and cause significant sedation, anticholinergic effects, and impaired driving/psychomotor performance, including \"hangover\" sedation the next day.</li>" +
          "<li><strong>Oral decongestants</strong> (pseudoephedrine) raise heart rate and blood pressure, so use them with caution in hypertension/cardiovascular disease and avoid them in pregnancy.</li>" +
          "<li><strong>Topical decongestants</strong> (oxymetazoline) work within minutes but must be <strong>limited to ≤3 consecutive days</strong> to avoid rebound congestion (see rhinitis medicamentosa, next block).</li></ul>"
      },
      {
        id: "epistaxis-ladder",
        title: "The epistaxis escalation ladder",
        html: "<ol><li><strong>First aid:</strong> lean forward, firm pressure on the cartilaginous nose 10-15 min, ± topical vasoconstrictor/tranexamic acid.</li>" +
          "<li><strong>Chemical or electrical cautery</strong> of a visible anterior bleeding point.</li>" +
          "<li><strong>Anterior nasal packing</strong> (absorbable or non-absorbable).</li>" +
          "<li><strong>Posterior bleed suspected</strong> (heavy, bleeding from both nostrils/posterior pharynx): posterior packing or a balloon device, admit, monitor airway/vagal response.</li>" +
          "<li><strong>Refractory:</strong> endoscopic <strong>sphenopalatine artery ligation</strong> or interventional <strong>embolization</strong>.</li></ol>" +
          "<p>Always check anticoagulation status and reverse if supratherapeutic; consider <strong>HHT</strong> in recurrent bilateral bleeders with a family history and telangiectasias.</p>" + "<figure class='note-fig' data-credit='Epistaxis escalation ladder. Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/mc/image53.png' alt='Epistaxis escalation ladder' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Epistaxis management from first aid through cautery, packing, and arterial ligation/embolization.</figcaption></figure><figure class='note-fig' data-credit=\"The Epistaxis Escalation Ladder. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/49_epistaxis_escalation_ladder_gemini.png' alt='Epistaxis escalation ladder' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The epistaxis escalation ladder.</figcaption></figure>"
      },
      {
        id: "unilateral-masses",
        title: "Unilateral nasal masses by age: the pattern to memorize",
        html: "<ul><li><strong>Adolescent male</strong> + recurrent unilateral epistaxis + nasal mass → <strong>juvenile nasopharyngeal angiofibroma (JNA)</strong>. Highly vascular, so biopsy in clinic is contraindicated.</li>" +
          "<li><strong>Adult</strong> + unilateral polypoid mass → <strong>inverted papilloma</strong> until proven otherwise: locally aggressive, with malignant potential, and needing full excision (not just polypectomy).</li>" +
          "<li><strong>Older adult</strong> + unilateral mass + anosmia/epistaxis → consider <strong>esthesioneuroblastoma</strong> (olfactory groove) or other sinonasal malignancy.</li></ul>" + "<figure class='note-fig' data-credit='Unilateral sinonasal masses by age. Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/mc/image54.png' alt='Unilateral sinonasal masses by age' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The age pattern for unilateral sinonasal masses: JNA, inverted papilloma, and malignancy.</figcaption></figure><figure class='note-fig' data-credit=\"Unilateral Sinonasal Masses by Age (JNA, Inverted Papilloma, Malignancy). Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/50_unilateral_nasal_masses_by_age_gemini.png' alt='Unilateral sinonasal masses by age' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Unilateral sinonasal masses by age.</figcaption></figure>"
      },
      {
        id: "fess-complications",
        title: "FESS: the three complication sites every student should know",
        html: "<p>Endoscopic sinus surgery works through thin bone next to three critical structures:</p><ul>" +
          "<li><strong>Orbit</strong> (via the lamina papyracea): injury causes orbital hematoma, diplopia, or blindness.</li>" +
          "<li><strong>Skull base</strong> (via the ethmoid roof/cribriform plate): injury causes a <strong>CSF leak</strong>.</li>" +
          "<li><strong>Internal carotid artery</strong> (in sphenoid surgery): it can run directly under thin or dehiscent bone in the sphenoid sinus wall.</li></ul>" +
          "<p>See the Anatomy tab for the pneumatization variants (concha bullosa, Haller cells, Onodi cells) that change where these risks sit on an individual patient's CT.</p>"
      }
    ],
    redFlags: [
      { t: "<b>Adolescent male, recurrent unilateral epistaxis + nasal mass</b>: JNA; do not biopsy in clinic (highly vascular)." },
      { t: "<b>Unilateral clear watery rhinorrhea</b> after trauma/sinus surgery: CSF leak; test β2-transferrin, avoid packing/blowing the nose." },
      { t: "<b>Orbital signs with sinusitis</b> (proptosis, painful/limited eye movement, reduced vision): urgent contrast CT + IV antibiotics ± drainage." },
      { t: "<b>Posterior epistaxis</b> (heavy, bilateral, older/anticoagulated): admit, posterior packing, airway monitoring." },
      { t: "<b>AERD (Samter's triad)</b>: CRSwNP + asthma + NSAID/ASA sensitivity; avoid NSAIDs, refer for aspirin desensitization if refractory." },
      { t: "<b>Recurrent unilateral polyp in an adult</b>: inverted papilloma until excised and confirmed benign; malignant transformation risk." },
      { t: "<b>Saddle-nose deformity</b>: undrained septal hematoma/abscess, trauma, cocaine use, or GPA (granulomatosis with polyangiitis); investigate systemically if no trauma history." },
      { t: "<b>Recurrent bilateral epistaxis + family history + telangiectasias</b>: hereditary hemorrhagic telangiectasia (HHT/Osler-Weber-Rendu)." }
    ]
  },

  /* ==================== CASES TAB ==================== */
  cases: [
    {
      id: "case-posterior-epistaxis",
      ukmla: "Epistaxis",
      source: "AAO-HNSF Clinical Practice Guideline: Nosebleed (Epistaxis), 2020.",
      stem: "An <b>81-year-old on apixaban</b> has a heavy nosebleed with blood visible in the <b>oropharynx</b> despite 20 minutes of firm anterior pressure. No clear anterior bleeding point is seen on exam.",
      prompts: [
        { q: "What does bleeding into the oropharynx despite anterior pressure suggest?", a: "A <b>posterior bleed</b>, typically from the sphenopalatine artery. Heavier, harder to visualize, and higher risk in older/anticoagulated patients." },
        { q: "Next steps?", a: "Posterior packing or a balloon device, admission for airway/vagal monitoring, ENT involvement, and consideration of endoscopic sphenopalatine artery ligation or embolization if it persists. Assess whether anticoagulation needs to be held/reversed with the prescribing team." }
      ],
      teaching: "When anterior measures fail and blood tracks posteriorly, escalate the ladder. Don't keep repeating anterior pressure.<figure class='note-fig' data-credit=\"Escalation Steps for Posterior/Refractory Epistaxis. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/49_epistaxis_escalation_ladder_gemini.png' alt='Posterior epistaxis escalation steps' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Escalation steps for posterior or refractory epistaxis.</figcaption></figure>"
    },
    {
      id: "case-aerd",
      ukmla: "Rhinosinusitis",
      source: "AAO-HNSF Clinical Practice Guideline: Adult Sinusitis (Update), 2015.",
      stem: "A <b>38-year-old woman with asthma</b> has recurrent nasal polyps despite three prior polypectomies. She recalls a severe asthma flare and facial flushing after taking ibuprofen for a headache last year.",
      prompts: [
        { q: "What triad does this suggest?", a: "<b>Samter's triad (AERD, aspirin-exacerbated respiratory disease)</b>: CRS with nasal polyps + asthma + NSAID/aspirin sensitivity." },
        { q: "Management implications?", a: "Strict NSAID avoidance, aggressive medical therapy (intranasal/systemic steroids, biologics), and, for refractory cases, <b>aspirin desensitization</b> under specialist supervision, which can reduce polyp recurrence." }
      ],
      teaching: "Recurrent polyps + asthma + an NSAID reaction history = ask about AERD before the fourth polypectomy."
    },
    {
      id: "case-jna",
      ukmla: "Epistaxis",
      source: "Standard rhinology teaching on juvenile nasopharyngeal angiofibroma.",
      stem: "A <b>14-year-old boy</b> has had three episodes of unilateral nosebleeds over two months and now reports one-sided nasal blockage. Endoscopy shows a smooth, reddish-purple mass in the nasal cavity.",
      prompts: [
        { q: "What is the leading diagnosis, and why does age/sex matter?", a: "<b>Juvenile nasopharyngeal angiofibroma (JNA)</b>, a benign but highly vascular tumor that occurs almost exclusively in adolescent males." },
        { q: "What must you NOT do, and what's the correct next step?", a: "<b>Do not biopsy in clinic</b>: it is extremely vascular and can bleed catastrophically. Get contrast-enhanced <b>MRI/CT</b> and refer for angiography ± preoperative embolization before surgical excision." }
      ],
      teaching: "Adolescent male + recurrent unilateral epistaxis + a nasal mass is JNA until imaging says otherwise, and imaging comes before biopsy."
    },
    {
      id: "case-orbital-abscess",
      ukmla: "Facial/periorbital swelling",
      source: "Chandler et al., Laryngoscope 1970; AAO-HNSF Adult Sinusitis CPG, 2015.",
      stem: "A <b>7-year-old</b> with known sinusitis develops worsening proptosis; eye movements are now painful and limited, and contrast CT shows a rim-enhancing fluid collection medial to the globe.",
      prompts: [
        { q: "What is this, and how is it staged?", a: "A <b>subperiosteal orbital abscess</b>, a Chandler stage III orbital complication of sinusitis (post-septal disease with a discrete collection)." },
        { q: "Management?", a: "IV antibiotics and urgent <b>surgical drainage</b> (often endoscopic) are typically required for a subperiosteal abscess, especially with limited eye movement or visual change. This is not managed with antibiotics alone." }
      ],
      teaching: "Once there's a discrete collection and limited eye movement, this has moved from 'watch on antibiotics' to 'drain it.'"
    },
    {
      id: "case-csf-leak",
      ukmla: "Ear and nasal discharge",
      source: "Meco et al., β2-transferrin testing for CSF leak, Am J Rhinol 2003.",
      stem: "A <b>29-year-old</b> two weeks after minor facial trauma reports persistent <b>clear, watery drainage from one nostril</b>, worse when leaning forward. He has no other ENT symptoms.",
      prompts: [
        { q: "What must be excluded, and how?", a: "<b>CSF rhinorrhea</b> from a skull-base fracture. Test the fluid for <b>β2-transferrin</b> (specific to CSF); a 'halo sign' on filter paper is suggestive but not definitive." },
        { q: "What do you avoid while this is being worked up?", a: "Avoid nasal packing, nose-blowing, and instrumentation until a leak is excluded/localized (CT/MRI); there's a risk of ascending meningitis. Most traumatic leaks are managed with bed rest/head elevation first; persistent leaks need surgical repair." }
      ],
      teaching: "Unilateral clear rhinorrhea after trauma is CSF until proven otherwise. Test it, don't dismiss it as a cold."
    },
    {
      id: "case-rhinitis-medicamentosa",
      ukmla: "Allergies",
      source: "Standard rhinology teaching on rhinitis medicamentosa; AAO-HNSF Allergic Rhinitis CPG, 2015.",
      stem: "A <b>34-year-old</b> reports severe nasal congestion for the past two months, ever since a cold. She has been using an <b>over-the-counter oxymetazoline spray nightly</b> because \"nothing else touches it,\" and now finds her nose blocks up worse than ever a few hours after each dose.",
      prompts: [
        { q: "What's happening, and what's the mechanism?", a: "<b>Rhinitis medicamentosa</b>, rebound congestion from prolonged topical decongestant use (typically &gt;5-7 days). Tachyphylaxis and reactive mucosal hyperemia set in, so congestion worsens as each dose wears off, driving escalating use." },
        { q: "How do you manage it, and what should have been done differently at the start?", a: "<b>Stop the topical decongestant</b>. This is the definitive step, even though congestion often transiently worsens for several days. Bridge with an <strong>intranasal corticosteroid</strong> (± a short oral steroid taper for severe rebound) and saline irrigation. She should have been counselled up front to limit oxymetazoline to ≤3 consecutive days." }
      ],
      teaching: "Worsening congestion in someone using a decongestant spray nightly for weeks is rhinitis medicamentosa until proven otherwise. The fix is stopping the spray, not adding another agent on top of it."
    },
    {
      id: "case-vasomotor-rhinitis",
      ukmla: "Allergies",
      source: "ARIA guideline; standard rhinology teaching on non-allergic rhinitis.",
      stem: "A <b>50-year-old</b> describes years of chronic nasal congestion and clear rhinorrhea triggered by <b>cold air, strong perfume, and going from air-conditioning into humid heat</b>. She denies itching, sneezing bouts, or eye symptoms. Skin-prick testing to common aeroallergens is negative.",
      prompts: [
        { q: "What is the likely diagnosis, and what feature argues against allergic rhinitis?", a: "<b>Vasomotor (non-allergic) rhinitis</b>: irritant/temperature triggers with congestion and rhinorrhea but <strong>no itch, sneezing, or conjunctivitis</strong> (the classic allergic-rhinitis symptom cluster), plus a negative allergy workup." },
        { q: "How does management differ from allergic rhinitis?", a: "Oral antihistamines target histamine-mediated symptoms and are typically <strong>less effective</strong> here. First-line options are an <strong>intranasal antihistamine</strong> (e.g., azelastine, which has independent anti-inflammatory effects) or intranasal <strong>ipratropium</strong> if rhinorrhea predominates, plus trigger avoidance." }
      ],
      teaching: "Congestion and rhinorrhea without itch/sneeze/conjunctivitis, plus negative allergy testing, is the non-allergic rhinitis pattern. Treat the mechanism, not a reflex prescription of an oral antihistamine."
    }
  ],

  /* ==================== CARDS TAB ==================== */
  cards: [
    { id:"omc-anatomy", tags: ["RH", "anatomy"], milestones:["MK1","PC5"], ukmla:"Nasal obstruction", source:"Standard rhinologic anatomy teaching.", front:"What structures form the ostiomeatal complex, and why does it matter clinically?",
      back:"The <strong>uncinate process</strong> and <strong>ethmoid bulla</strong> create the <strong>ethmoid infundibulum</strong>, the shared drainage channel for the frontal, anterior ethmoid, and maxillary sinuses via the middle meatus. Obstruct the OMC and all three back up together: the anatomic basis of most chronic rhinosinusitis.<figure class='note-fig' data-credit=\"Ostiomeatal Complex (OMC) Coronal Drainage Anatomy. radiopaedia.org.\"><img class='zoomable' src='assets/img/mc/17_ostiomeatal_complex_radiopaedia.png' alt='Ostiomeatal complex coronal drainage' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The ostiomeatal complex in coronal section.</figcaption></figure>" },
    { id:"sinus-danger-zones", tags: ["RH", "anatomy"], milestones:["MK1","PC5"], ukmla:"Facial pain", source:"Standard rhinologic anatomy teaching.", front:"What critical structures border each paranasal sinus, and what complication does each border explain?",
      back:"<strong>Ethmoid</strong> → orbit (lamina papyracea) → orbital cellulitis/abscess. <strong>Frontal</strong> → anterior cranial fossa → intracranial spread/Pott's puffy tumor. <strong>Sphenoid</strong> → optic nerve, carotid artery, cavernous sinus, pituitary → the highest-stakes sinus surgically.<figure class='note-fig' data-credit=\"Paranasal Sinus Danger Zones (Orbit and Skull Base). Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/44_paranasal_sinuses_danger_zones_gemini.png' alt='Paranasal sinus danger zones' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Paranasal sinus danger zones: orbit and skull base.</figcaption></figure>" },
    { id:"septal-blood-supply", tags: ["RH", "anatomy"], milestones:["MK1","PC5"], ukmla:"Epistaxis", source:"Standard rhinologic anatomy teaching.", front:"Which four arteries converge at Little's area (Kiesselbach's plexus)?",
      back:"<strong>Anterior ethmoidal</strong> (ICA→ophthalmic), <strong>sphenopalatine</strong> and <strong>greater palatine</strong> (ECA→maxillary), and <strong>superior labial</strong> (ECA→facial). This anastomosis on the anterior septum is the source of &gt;90% of nosebleeds.<figure class='note-fig' data-credit='Kiesselbach's plexus (Little's area). Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/mc/image55.png' alt='Kiesselbach's plexus arteries' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The four arteries that converge at Little's area (Kiesselbach's plexus).</figcaption></figure><figure class='note-fig' data-credit=\"Kiesselbach's Plexus Four-Vessel Anastomosis. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/25_kiesselbachs_plexus_gemini.png' alt='Kiesselbach's plexus four-vessel anastomosis' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Kiesselbach's plexus four-vessel anastomosis.</figcaption></figure>" },
    { id:"septal-structure", tags: ["RH", "anatomy"], milestones:["MK1"], ukmla:"Nasal obstruction", source:"Standard rhinologic anatomy teaching.", front:"What makes up the nasal septum, and why is a septal hematoma dangerous?",
      back:"<strong>Quadrangular cartilage</strong> anteriorly, <strong>perpendicular plate of the ethmoid</strong> and <strong>vomer</strong> posteriorly. The cartilage has no blood supply of its own; it depends on the overlying mucoperichondrium, so a hematoma/abscess there causes <strong>avascular necrosis (saddle-nose deformity)</strong> if not drained.<figure class='note-fig' data-credit=\"Osteocartilaginous Anatomy of the Nasal Septum. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/45_nasal_septum_framework_wikimedia.png' alt='Nasal septum anatomy' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The osteocartilaginous anatomy of the nasal septum.</figcaption></figure>" },
    { id:"fess-anatomy-variants-card", tags: ["RH", "anatomy"], milestones:["MK1","PC5"], scope:"sub-I", ukmla:"Rhinosinusitis", source:"Standard rhinologic surgical anatomy teaching.", front:"The most posterior ethmoid air cells, which pneumatize alongside or above the sphenoid sinus and can sit right next to the optic nerve, are called <span class=\"cloze-blank\">[...]</span>.",
      back:"The most posterior ethmoid air cells, which pneumatize alongside or above the sphenoid sinus and can sit right next to the optic nerve, are called <mark class=\"cloze-answer\">Onodi cells</mark>. Mistaking one for the sphenoid sinus proper on preop CT is a classic setup for optic nerve injury during posterior ethmoid or sphenoid surgery." },
    { id:"crs-definition-card", tags: ["RH", "clinical"], milestones:["PC5","MK3"], ukmla:"Rhinosinusitis", source:"AAO-HNSF Clinical Practice Guideline: Adult Sinusitis (Update), 2015.", front:"How is chronic rhinosinusitis (CRS) formally defined?",
      back:"<strong>≥12 weeks</strong> of ≥2 of: nasal obstruction, discharge, facial pain/pressure, or reduced smell, <strong>confirmed by endoscopy or CT</strong> (symptoms alone aren't diagnostic beyond 12 weeks)." },
    { id:"crs-subtypes-card", tags: ["RH", "clinical"], milestones:["PC5","MK3"], ukmla:"Rhinosinusitis", source:"AAO-HNSF Adult Sinusitis CPG, 2015.", front:"Contrast CRSsNP and CRSwNP, and name their first-line treatments.",
      back:"<strong>CRSsNP</strong> (without polyps): mucosal thickening → saline irrigation + intranasal corticosteroid. <strong>CRSwNP</strong> (with polyps): bilateral polyps on endoscopy → intranasal/short-course oral steroids first; biologics or FESS if refractory.<figure class='note-fig' data-credit='CRSsNP vs CRSwNP. Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/mc/image56.png' alt='CRS with vs without nasal polyps' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Chronic rhinosinusitis without vs with nasal polyps, and first-line treatment.</figcaption></figure>" },
    { id:"aerd-card", tags: ["RH", "clinical"], milestones:["MK2","PC5"], ukmla:["Rhinosinusitis","Allergies"], source:"AAO-HNSF Adult Sinusitis CPG, 2015.", front:"What is Samter's triad (AERD), and what must patients avoid?",
      back:"<strong>CRS with nasal polyps + asthma + ASA/NSAID sensitivity.</strong> Strict <strong>NSAID avoidance</strong>; refractory cases may benefit from supervised <strong>aspirin desensitization</strong>, which can reduce polyp recurrence." },
    { id:"nasal-polyp-mgmt", tags: ["RH", "clinical"], milestones:["PC5"], ukmla:"Rhinosinusitis", source:"AAO-HNSF Adult Sinusitis CPG, 2015.", front:"What is the step-up management ladder for nasal polyps?",
      back:"<strong>Intranasal corticosteroids</strong> first-line → short oral steroid course for flares → <strong>biologic therapy</strong> (e.g., anti-IL4/13, anti-IgE) for refractory type-2 inflammation → <strong>FESS</strong> if medical therapy fails. Polyps commonly recur without ongoing medical maintenance.<figure class='note-fig' data-credit=\"Nasal Polyposis Step-Up Management Ladder. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/51_nasal_polyps_management_ladder_gemini.png' alt='Nasal polyp step-up management ladder' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Nasal polyposis step-up management ladder.</figcaption></figure>" },
    { id:"aria-classification-card", tags: ["RH", "clinical"], milestones:["MK2","PC5"], ukmla:"Allergies", source:"ARIA (Allergic Rhinitis and its Impact on Asthma) guideline.", front:"How does ARIA classify allergic rhinitis, and why does it matter more than 'seasonal vs perennial'?",
      back:"Two axes: <strong>duration</strong> (intermittent, &lt;4 days/week or &lt;4 weeks vs persistent, ≥4 days/week and ≥4 weeks) and <strong>severity</strong> (mild, with no impact on sleep/activity/school/work, vs moderate-severe, with one or more of those impacts). This duration+severity grid, not the trigger's season, is what drives step-up therapy." },
    { id:"ar-step-therapy-card", tags: ["RH", "clinical"], milestones:["MK2","PC5"], ukmla:"Allergies", source:"AAO-HNSF Clinical Practice Guideline: Allergic Rhinitis, 2015; ARIA guideline.", front:"For persistent or moderate-severe allergic rhinitis, the single most effective first-line agent is a regularly dosed <span class=\"cloze-blank\">[...]</span>.",
      back:"For persistent or moderate-severe allergic rhinitis, the single most effective first-line agent is a regularly dosed <mark class=\"cloze-answer\">intranasal corticosteroid</mark>. Regular, scheduled dosing works better than as-needed use." },
    { id:"non-allergic-rhinitis-differential", tags: ["RH", "clinical"], milestones:["MK2","PC5"], ukmla:"Allergies", source:"ARIA guideline; standard rhinology teaching on non-allergic rhinitis.", front:"The symptom cluster that points toward allergic rather than non-allergic rhinitis is <span class=\"cloze-blank\">[...]</span>.",
      back:"The symptom cluster that points toward allergic rather than non-allergic rhinitis is <mark class=\"cloze-answer\">itch, sneezing bouts, and conjunctivitis</mark>. Their absence, together with a negative allergy workup, points instead to a non-allergic cause such as vasomotor rhinitis." },
    { id:"rhinitis-medicamentosa-card", tags: ["RH", "pharm"], milestones:["MK2","PC5"], ukmla:"Allergies", source:"AAO-HNSF Allergic Rhinitis CPG, 2015; standard rhinology teaching.", front:"<span class=\"cloze-blank\">[...]</span> is rebound nasal congestion that develops after using a topical decongestant, such as oxymetazoline, for more than about 5 to 7 days.",
      back:"<mark class=\"cloze-answer\">Rhinitis medicamentosa</mark> is rebound nasal congestion that develops after using a topical decongestant, such as oxymetazoline, for more than about 5 to 7 days. Treatment means stopping the spray and bridging with an intranasal corticosteroid if congestion is severe." },
    { id:"drug-induced-rhinitis-card", tags: ["RH", "pharm"], milestones:["MK2","PC5"], ukmla:"Allergies", source:"ARIA guideline; standard rhinology/pharmacology teaching.", front:"Among drugs that can cause or worsen chronic rhinitis, <span class=\"cloze-blank\">[...]</span> do so through a bradykinin-mediated mechanism.",
      back:"Among drugs that can cause or worsen chronic rhinitis, <mark class=\"cloze-answer\">ACE inhibitors</mark> do so through a bradykinin-mediated mechanism. Ask about medication history in any patient with unexplained chronic nasal congestion." },
    { id:"allergy-testing-card", tags: ["RH", "clinical"], milestones:["MK2","PC5"], ukmla:"Allergies", source:"AAO-HNSF Allergic Rhinitis CPG, 2015.", front:"A positive allergy test result that doesn't match the clinical history indicates <span class=\"cloze-blank\">[...]</span>, not true allergy.",
      back:"A positive allergy test result that doesn't match the clinical history indicates <mark class=\"cloze-answer\">sensitization</mark>, not true allergy, so it always needs correlating with symptoms and exposure. Skin-prick testing works fast; serum-specific IgE skips the need to stop antihistamines first." },
    { id:"antihistamine-decongestant-pharm-card", tags: ["RH", "pharm"], milestones:["MK2","PC5"], ukmla:"Allergies", source:"AAO-HNSF Allergic Rhinitis CPG, 2015.", front:"Second-generation antihistamines, such as cetirizine, cause far less sedation than first-generation agents like diphenhydramine because they cross the <span class=\"cloze-blank\">[...]</span> far less.",
      back:"Second-generation antihistamines, such as cetirizine, cause far less sedation than first-generation agents like diphenhydramine because they cross the <mark class=\"cloze-answer\">blood-brain barrier</mark> far less. Oral decongestants raise heart rate and blood pressure, so avoid them in pregnancy." },
    { id:"epistaxis-vessels", tags: ["RH", "clinical"], milestones:["PC5","PC1"], ukmla:"Epistaxis", source:"AAO-HNSF Clinical Practice Guideline: Nosebleed (Epistaxis), 2020.", front:"What vessel is responsible for most anterior bleeds, and which for posterior bleeds?",
      back:"<strong>Anterior:</strong> Little's area/Kiesselbach's plexus (&gt;90% of bleeds). <strong>Posterior:</strong> the <strong>sphenopalatine artery</strong> itself, heavier, harder to see, more common in older/anticoagulated patients." },
    { id:"epistaxis-escalation-card", tags: ["RH", "clinical"], milestones:["PC5","PC1"], ukmla:"Epistaxis", source:"AAO-HNSF Nosebleed CPG, 2020.", front:"List the epistaxis escalation ladder from first aid to refractory management.",
      back:"1) Firm anterior pressure ± vasoconstrictor/tranexamic acid → 2) <strong>cautery</strong> of a visible point → 3) <strong>anterior packing</strong> → 4) <strong>posterior packing</strong>/balloon + admission if posterior → 5) <strong>sphenopalatine artery ligation</strong> or <strong>embolization</strong> if refractory." },
    { id:"hht-card", tags: ["RH", "clinical"], milestones:["PC5","MK3"], ukmla:"Epistaxis", source:"Standard rhinology teaching on hereditary hemorrhagic telangiectasia.", front:"What should recurrent bilateral epistaxis with a family history and telangiectasias make you think of?",
      back:"<strong>Hereditary hemorrhagic telangiectasia (HHT / Osler-Weber-Rendu)</strong>, an autosomal-dominant vascular disorder. Screen for pulmonary/hepatic/cerebral AVMs and refer for genetics and specialist management." },
    { id:"unilateral-mass-age", tags: ["RH", "clinical"], milestones:["PC5","PC3"], redFlag:true, ukmla:["Nasal obstruction","Epistaxis"], source:"Standard rhinology/oncology teaching on sinonasal masses.", front:"Give the age/sex pattern for the three classic unilateral sinonasal masses.",
      back:"<strong>Adolescent male</strong> → juvenile nasopharyngeal angiofibroma (JNA). <strong>Adult</strong> → inverted papilloma until proven otherwise. <strong>Older adult</strong> + anosmia/epistaxis → esthesioneuroblastoma or other sinonasal malignancy." },
    { id:"jna-card", tags: ["RH", "clinical"], milestones:["PC5","PC3"], redFlag:true, ukmla:"Epistaxis", source:"Standard rhinology teaching on JNA.", front:"Why is biopsying a suspected JNA in clinic dangerous, and what's the correct workup order?",
      back:"JNA is <strong>highly vascular</strong>, so clinic biopsy risks catastrophic hemorrhage. Correct order: <strong>imaging first</strong> (contrast MRI/CT, then angiography) → <strong>preoperative embolization</strong> → surgical excision." },
    { id:"inverted-papilloma-card", tags: ["RH", "clinical"], milestones:["PC5","PC3"], redFlag:true, ukmla:"Nasal obstruction", source:"Standard rhinology/oncology teaching on inverted papilloma.", front:"Why does a recurrent unilateral nasal polyp need more than repeat polypectomy?",
      back:"It may be an <strong>inverted papilloma</strong>: locally aggressive, prone to recurrence, and carrying a real risk of <strong>malignant transformation</strong> (squamous cell carcinoma) in a minority of cases. Needs complete surgical excision with margin control, not simple debulking." },
    { id:"csf-leak-card", tags: ["RH", "clinical"], milestones:["PC5","PC2"], redFlag:true, ukmla:"Ear and nasal discharge", source:"Meco et al., β2-transferrin testing for CSF leak, Am J Rhinol 2003.", front:"How do you confirm a suspected CSF rhinorrhea, and what do you avoid in the meantime?",
      back:"Send fluid for <strong>β2-transferrin</strong> (specific to CSF); localize with CT/MRI. <strong>Avoid nasal packing, blowing the nose, or instrumentation</strong> until excluded; there's a risk of ascending meningitis. Most post-traumatic leaks resolve with conservative management; persistent leaks need surgical repair." },
    { id:"fess-complications-card", tags: ["RH", "clinical"], milestones:["PC5","SBP1"], scope:"sub-I", ukmla:"Rhinosinusitis", source:"Standard rhinologic surgery teaching.", front:"Name the three anatomic sites where FESS complications occur, and what each injury causes.",
      back:"<strong>Orbit</strong> (lamina papyracea) → hematoma, diplopia, blindness. <strong>Skull base</strong> (ethmoid roof/cribriform plate) → <strong>CSF leak</strong>. <strong>Internal carotid artery</strong> (sphenoid sinus wall, can be dehiscent) → catastrophic hemorrhage, the reason sphenoid surgery is done with great care." },
    { id:"septal-perforation-card", tags: ["RH", "clinical"], milestones:["PC5","MK3"], ukmla:"Nasal obstruction", source:"Standard rhinology teaching on septal perforation.", front:"What are the common causes of a septal perforation?",
      back:"Prior <strong>septal surgery</strong>, <strong>undrained septal hematoma/abscess</strong>, chronic <strong>cocaine use</strong>, nasal trauma, chronic topical decongestant/steroid overuse, and systemic disease (<strong>granulomatosis with polyangiitis</strong>, sarcoidosis). Ask about drug use and systemic symptoms when there's no clear surgical/traumatic cause." },
    { id:"allergic-rhinitis-immunotherapy", tags: ["RH", "clinical"], milestones:["MK2","PC5"], ukmla:"Allergies", source:"AAO-HNSF Clinical Practice Guideline: Allergic Rhinitis, 2015.", front:"When is immunotherapy considered for allergic rhinitis, and what are the two delivery routes?",
      back:"Considered when symptoms are refractory to allergen avoidance + intranasal steroids/antihistamines, or when the patient wants a disease-modifying (not just symptomatic) option. <strong>SCIT</strong> (subcutaneous) and <strong>SLIT</strong> (sublingual) are the two routes; both require specialist allergy/ENT involvement." },
    { id:"sinusitis-antibiotics", tags: ["RH", "pharm"], milestones:["SBP3","PC5"], ukmla:"Rhinosinusitis", source:"AAO-HNSF Adult Sinusitis CPG, 2015; IDSA Acute Bacterial Rhinosinusitis Guideline, 2012.", front:"Because most acute rhinosinusitis is viral, antibiotics are reserved for symptoms lasting more than <span class=\"cloze-blank\">[...]</span> without improvement, or for severe or worsening symptoms.",
      back:"Because most acute rhinosinusitis is viral, antibiotics are reserved for symptoms lasting more than <mark class=\"cloze-answer\">10 days</mark> without improvement, or for severe or worsening symptoms. First-line therapy in the US is amoxicillin-clavulanate, preferred over amoxicillin alone for resistance coverage." }
  ]
});

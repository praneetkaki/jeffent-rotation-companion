/* otology.js, OTOLOGY & NEUROTOLOGY module
 *
 * Shape follows docs/UI-SPEC.md + docs/MEDIA-SPEC.md (anatomy / clinical / cases / cards).
 * STATUS: DRAFT, every clinical item must be vetted by a JeffENT faculty reviewer
 * before it counts as final. Anatomy uses author-drawn labeled SVGs that work now;
 * see docs/OTOLOGY-IMAGES.md to swap in real public-domain Gray's plates.
 */
window.JEFFENT.register({
  id: "otology-ear",
  track: "otology",
  trackName: "Otology & Neurotology",
  trackAbbr: "OT",
  order: 1,
  title: "The Ear: Anatomy to the Clinic",
  subtitle: "External, middle, and inner ear; hearing loss, otalgia, infection, and the vertigo syndromes.",
  version: "0.3.0-draft",
  level: ["core", "sub-I"],
  status: "DRAFT, pending faculty review. v0.2.0: added a subspecialty depth pass beyond the Foundations-level content this module started with, otosclerosis (pathophysiology, Carhart notch, stapedectomy) and the tympanometry-based differential for conductive loss with an intact TM (otosclerosis vs OME vs ossicular discontinuity), cholesteatoma classification and erosion mechanism (why mastoidectomy, not drops), vestibular schwannoma workup/management ladder with the House-Brackmann facial nerve grading scale, Ménière's disease per the Bárány Society/AAO-HNS 2015 diagnostic criteria plus its step-up management ladder, necrotizing (malignant) otitis externa in depth (pathogen, cranial-nerve progression, imaging, treatment duration), and cochlear implant candidacy, grounded in named guidelines/textbooks (AAO-HNSF CPGs, ACR Appropriateness Criteria, Bárány Society/AAO-HNS consensus, House-Brackmann 1985, Cummings Otolaryngology) and standard neurotology teaching, not derived from any single textbook. Also backfilled ukmla/milestones/source tags on every pre-existing card and case in this module (previously untagged) so the whole file now validates against the Module Build Standard. v0.2.1: added a teaching case for vestibular schwannoma / asymmetric SNHL, identified as a coverage gap by an audit.",
  facultyReviewer: "",
  curriculumAnchors: [
    "UKMLA Content Map (GMC), scope anchor; owns Hearing loss, Painful ear, Tinnitus, Vertigo/Dizziness, and the ear-related conditions (Otitis externa, Otitis media, BPPV, Ménière's disease, Acoustic neuroma)",
    "ACGME Otolaryngology-HNS Milestones 2.0, primarily PC4 Otologic Disease, MK1 Anatomy",
    "AAO-HNSF Clinical Practice Guidelines: Sudden Hearing Loss (2019), BPPV (2017), Otitis Externa (2014), AOM (2013)/OME (2016)",
    "Bárány Society/AAO-HNS consensus diagnostic criteria for Ménière's disease (2015); House-Brackmann facial nerve grading system (1985)",
    "UK undergraduate Delphi (Lloyd 2014), student-scope depth cap"
  ],
  frameworkAlignment: {
    competenciesCovered: ["PC", "MK"],
    note: "Subspecialty depth at student scope (Delphi); goes deeper than Foundations on the same UKMLA items (escalation ladders, named grading/diagnostic criteria, surgical rationale) rather than introducing new ones."
  },

  /* ==================== ANATOMY TAB ==================== */
  anatomy: {
    notes: [
      {
        title: "Three compartments, one organ",
        html:
          "<figure class='note-fig' data-credit=\"Anatomy of the human ear. Chittka L and Brockmann A via Wikimedia Commons, CC BY 2.5.\"><img class='zoomable' src='assets/1280px-Anatomy_of_the_Human_Ear.svg.png' alt='Anatomy of the human ear' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: External canal, middle ear with ossicular chain, and inner ear labyrinth.</figcaption></figure><p>Work outside-in: <strong>external</strong> (sound gathering), <strong>middle</strong> (sound amplification &amp; transmission), <strong>inner</strong> (transduction + balance).</p>" +
          "<ul>" +
          "<li><strong>External:</strong> auricle + external auditory canal (EAC): outer ⅓ cartilage, inner ⅔ bone; cerumen glands in the cartilaginous part.</li>" +
          "<li><strong>Middle:</strong> tympanic membrane → ossicles (<strong>malleus → incus → stapes</strong>) → oval window; connected to the nasopharynx by the <strong>Eustachian tube</strong>.</li>" +
          "<li><strong>Inner:</strong> <strong>cochlea</strong> (hearing) and <strong>vestibule + semicircular canals</strong> (balance), read out by <strong>CN VIII</strong>.</li>" +
          "</ul>" + "<figure class='note-fig' data-credit='Middle ear. Wikimedia Commons.'><img class='zoomable' src='assets/img/ear/middle-ear-wikimedia.png' alt='Middle ear anatomy' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The middle ear: ossicular chain, tympanic membrane, and Eustachian tube.</figcaption></figure>" + "<figure class='note-fig' data-credit='Auditory ossicles. Wikimedia Commons.'><img class='zoomable' src='assets/img/ear/ossicles-wikimedia.png' alt='Auditory ossicles' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The ossicular chain: malleus, incus, and stapes.</figcaption></figure>"
      },
      {
        title: "The clinically dangerous relationships",
        html:
          "<figure class='note-fig' data-credit=\"Middle-ear dangerous relationships. Illustration generated with Google Gemini (adapted from Bagla).\"><img class='zoomable' src='assets/img/mc/image32.png' alt='Medial wall of the tympanic cavity' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figure class='note-fig' data-credit=\"The Middle Ear and Mastoid Danger Zone. Illustration generated with Google Gemini (adapted from Bagla).\"><img class='zoomable' src='assets/img/mc/31_middle_ear_mastoid_danger_zone_bagla.png' alt='Middle ear and mastoid danger zone' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The middle ear and mastoid danger zone: facial nerve, tegmen tympani, sigmoid sinus, ossicular chain.</figcaption></figure><ul>" +
          "<li><strong>Facial nerve (CN VII)</strong> runs through the temporal bone next to the middle/inner ear, so facial weakness with ear disease is a red flag.</li>" +
          "<li><strong>Referred otalgia:</strong> the ear is innervated by CN <strong>V, VII, IX, X</strong> and C2-C3, so a normal-looking ear can hurt because of pathology elsewhere (TMJ, teeth, tonsil, tongue base, larynx).</li>" +
          "<li><strong>Middle-ear muscles:</strong> tensor tympani (CN V3) and stapedius (CN VII) dampen loud sound.</li>" +
          "<li><strong>Chorda tympani</strong> (branch of VII) crosses the middle ear carrying taste from the anterior ⅔ of the tongue.</li>" +
          "</ul>"
      }
    ],

    diagrams: [
      {
        kind: "image",
        id: "ear-overview-photo",
        title: "The ear in cross-section",
        note: "Gray's Anatomy plate 907: a real historical dissection illustration. Auricle → canal → tympanic membrane → middle ear → auditory tube, in one section.",
        src: "assets/img/ear/ear-overview.png",
        source: "Fig. 907, “The Auditory Ossicles Etc.” Gray's Anatomy of the Human Body, 20th ed. (1918), illustrated by Henry Vandyke Carter. Public domain. Via Wikimedia Commons (commons.wikimedia.org/wiki/File:Gray907.png).",
        labels: [
          { id: "au", text: "Auricle (cartilage of auricula)", xPct: 9, yPct: 45 },
          { id: "eac", text: "External acoustic meatus", xPct: 24, yPct: 42 },
          { id: "tm", text: "Tympanic membrane", xPct: 38, yPct: 53 },
          { id: "inc", text: "Incus", xPct: 47, yPct: 27 },
          { id: "mal", text: "Malleus", xPct: 50, yPct: 35 },
          { id: "tc", text: "Tympanic cavity", xPct: 53, yPct: 42 },
          { id: "mp", text: "Mastoid process", xPct: 27, yPct: 64 },
          { id: "et", text: "Auditory (Eustachian) tube", xPct: 72, yPct: 56 }
        ]
      },
      {
        kind: "image",
        id: "tm-photo",
        title: "Right tympanic membrane",
        note: "Gray's Anatomy plate 909: the otoscopic view, same landmarks as the schematic below. Test yourself here first, then check the simplified diagram.",
        src: "assets/img/ear/tympanic-membrane.png",
        source: "Fig. 909, “Membrana Tympani, Right Side.” Gray's Anatomy of the Human Body, 20th ed. (1918), illustrated by Henry Vandyke Carter. Public domain. Via Wikimedia Commons (commons.wikimedia.org/wiki/File:Gray909.png).",
        labels: [
          { id: "pf", text: "Pars flaccida", xPct: 53, yPct: 16 },
          { id: "lpm", text: "Lateral process of malleus", xPct: 56, yPct: 24 },
          { id: "lci", text: "Long crus of incus", xPct: 37, yPct: 20 },
          { id: "man", text: "Manubrium of malleus (handle)", xPct: 49, yPct: 38 },
          { id: "umbo", text: "Umbo", xPct: 48, yPct: 53 },
          { id: "col", text: "Cone of light (light reflex)", xPct: 58, yPct: 68 },
          { id: "psq", text: "Postero-superior quadrant", xPct: 30, yPct: 33 },
          { id: "asq", text: "Antero-superior quadrant", xPct: 66, yPct: 33 },
          { id: "piq", text: "Postero-inferior quadrant", xPct: 28, yPct: 62 },
          { id: "aiq", text: "Antero-inferior quadrant", xPct: 64, yPct: 64 }
        ]
      },
      {
        kind: "image",
        id: "middle-ear-photo",
        title: "Tympanic membrane viewed from within",
        note: "Gray's Anatomy plate 912: the medial (middle-ear) surface of the drum, showing the malleus, chorda tympani, and facial nerve running close by.",
        src: "assets/img/ear/middle-ear-ossicles.png",
        source: "Fig. 912, “Right Membrana Tympani, Viewed from Within.” Gray's Anatomy of the Human Body, 20th ed. (1918), illustrated by Henry Vandyke Carter. Public domain. Via Wikimedia Commons (commons.wikimedia.org/wiki/File:Gray912.png).",
        labels: [
          { id: "hom", text: "Head of malleus", xPct: 50, yPct: 17 },
          { id: "hm", text: "Handle of malleus (manubrium)", xPct: 47, yPct: 50 },
          { id: "ctn", text: "Chorda tympani nerve", xPct: 40, yPct: 37 },
          { id: "tptm", text: "Tympanic membrane (tense portion)", xPct: 45, yPct: 73 },
          { id: "eust", text: "Eustachian tube", xPct: 16, yPct: 73 },
          { id: "fn", text: "Facial nerve", xPct: 87, yPct: 60 },
          { id: "etr", text: "Epitympanic recess", xPct: 62, yPct: 13 }
        ]
      },
      {
        kind: "image",
        id: "labyrinth-photo",
        title: "Bony (osseous) labyrinth: inner ear",
        note: "Gray's Anatomy plate 920, the right bony labyrinth from the lateral side: cochlea (hearing) and the vestibule + semicircular canals (balance) in one piece.",
        src: "assets/img/ear/inner-ear-labyrinth.png",
        source: "Fig. 920, “Right Osseous Labyrinth, Lateral View.” Gray's Anatomy of the Human Body, 20th ed. (1918), illustrated by Henry Vandyke Carter. Public domain. Via Wikimedia Commons (commons.wikimedia.org/wiki/File:Gray920.png).",
        labels: [
          { id: "coch", text: "Cochlea", xPct: 83, yPct: 55 },
          { id: "vest", text: "Vestibule", xPct: 58, yPct: 68 },
          { id: "ovw", text: "Vestibular fenestra (oval window)", xPct: 63, yPct: 60 },
          { id: "ssc", text: "Superior semicircular canal", xPct: 42, yPct: 14 },
          { id: "lsc", text: "Lateral semicircular canal", xPct: 38, yPct: 52 },
          { id: "psc", text: "Posterior semicircular canal", xPct: 13, yPct: 48 },
          { id: "ccr", text: "Common crus", xPct: 30, yPct: 30 }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "ear-cross-section",
        title: "The ear in cross-section",
        note: "Lateral (outside) on the left → medial (inside) on the right. Hide the labels, name each structure, then reveal to check.",
        src: "assets/img/mc/18_ear_anatomy_cross_section_nidcd.png",
        source: "The Ear in Cross-Section (External, Middle, Inner). nidcd.nih.gov.",
        labels: [
          { id:"au", text:"Auricle", box:{x:0.0,y:45.5,w:24.0,h:9.0} },
          { id:"eac", text:"External auditory canal", box:{x:10.9,y:45.5,w:24.0,h:9.0} },
          { id:"tm", text:"Tympanic membrane", box:{x:29.7,y:45.5,w:24.0,h:9.0} },
          { id:"oss", text:"Ossicles (malleus·incus·stapes)", box:{x:38.0,y:42.2,w:24.0,h:9.0} },
          { id:"et", text:"Eustachian tube → nasopharynx", box:{x:54.7,y:73.8,w:24.0,h:9.0} },
          { id:"coch", text:"Cochlea (hearing)", box:{x:56.3,y:45.5,w:24.0,h:9.0} },
          { id:"scc", text:"Semicircular canals (balance)", box:{x:64.7,y:30.2,w:24.0,h:9.0} },
          { id:"cn8", text:"Vestibulocochlear n. (CN VIII)", box:{x:76.0,y:45.5,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "tm-right",
        title: "Right tympanic membrane: landmarks",
        note: "Confirm laterality/orientation with faculty. Name each landmark, then reveal.",
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
        id: "middle-ear-danger-relationships",
        title: "The middle ear and mastoid danger zone",
        note: "Hand-drawn schematic, not to scale. Shows how closely the facial nerve, tegmen tympani, sigmoid sinus, and ossicular chain sit within the same small middle-ear/mastoid space, the reason disease or surgery here can threaten all four at once. Click a landmark to reveal its label.",
        src: "assets/img/mc/31_middle_ear_mastoid_danger_zone_bagla.png",
        source: "The Middle Ear and Mastoid Danger Zone Anatomic Relationships. Illustration generated with Google Gemini (adapted from Bagla).",
        labels: [
          { id:"ossicles", text:"Ossicular chain (malleus, incus, stapes)", box:{x:32.2,y:27.2,w:24.0,h:9.0} },
          { id:"facial-nerve", text:"Facial nerve (CN VII), tympanic to mastoid segment", box:{x:47.2,y:25.5,w:24.0,h:9.0} },
          { id:"tegmen-tympani", text:"Tegmen tympani, thin bone/dural plate to the middle cranial fossa", box:{x:32.7,y:11.5,w:24.0,h:9.0} },
          { id:"sigmoid-sinus", text:"Sigmoid sinus", box:{x:66.2,y:45.5,w:24.0,h:9.0} },
          { id:"stylomastoid-foramen", text:"Stylomastoid foramen (facial nerve exit)", box:{x:49.8,y:80.5,w:24.0,h:9.0} },
          { id:"mastoid-cavity", text:"Middle ear / mastoid air cell space", box:{x:14.3,y:58.8,w:24.0,h:9.0} }
        ]
      }
    ]
  },

  /* ==================== CLINICAL TAB ==================== */
  clinical: {
    blocks: [
      {
        id: "hearing-loss-fork",
        title: "Hearing loss: the fork in the road",
        html:
          "<p><strong>Conductive</strong> (something blocks sound reaching the cochlea) vs <strong>sensorineural</strong> (cochlea or CN VIII). Localize at the bedside with <strong>Weber + Rinne (512 Hz)</strong>.</p>" +
          "<ul><li><strong>Conductive causes:</strong> cerumen, middle-ear effusion, TM perforation, otosclerosis, ossicular problems.</li>" +
          "<li><strong>Sensorineural causes:</strong> presbycusis, noise, ototoxicity, sudden SNHL, and, if <strong>asymmetric</strong>, retrocochlear lesions (vestibular schwannoma).</li></ul>" + "<figure class='note-fig' data-credit='Conductive vs sensorineural hearing loss. ENT Secrets (Elsevier).'><img class='zoomable' src='assets/img/mc/image33.png' alt='Conductive vs sensorineural hearing loss' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Where a lesion sits determines conductive vs sensorineural loss.</figcaption></figure>"
      },
      {
        id: "otalgia-primary-referred",
        title: "Otalgia: primary vs referred",
        html:
          "<ul>" +
          "<li><strong>Primary</strong> (ear pathology): otitis externa (pain on tragal traction, canal edema), acute otitis media (bulging red TM), cerumen, TM perforation.</li>" +
          "<li><strong>Referred</strong> (normal ear exam): pain travels via CN V/VII/IX/X to the TMJ, teeth, tonsil, tongue base, or larynx.</li>" +
          "</ul>" +
          "<p><strong>Otalgia + normal ear exam in an adult smoker → scope for malignancy.</strong></p>"
      },
      {
        id: "infection-and-danger",
        title: "Infection, and when it's dangerous",
        html:
          "<ul><li><strong>Otitis externa:</strong> canal infection; tragal tenderness, discharge.</li>" +
          "<li><strong>Acute otitis media:</strong> middle-ear infection; bulging TM, effusion.</li>" +
          "<li><strong>Cholesteatoma:</strong> keratin sac, often from a retraction pocket; <strong>painless foul otorrhea + attic crust/retraction</strong>, erodes bone. Refer. See the dedicated block below for the mechanism and why it's surgical.</li>" +
          "<li><strong>Necrotizing (malignant) otitis externa:</strong> occurs in diabetic or immunocompromised patients, with severe deep pain and granulation tissue in the canal; skull-base osteomyelitis risk. See the dedicated block below for the organism and cranial-nerve progression.</li></ul>" + "<figure class='note-fig' data-credit='Otoscopic views (otitis externa, acute otitis media, cholesteatoma, necrotizing otitis externa). Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/ear/otoscopy-comparison-gemini.png' alt='Otoscopy comparison: otitis externa, acute otitis media, cholesteatoma, necrotizing otitis externa' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Otoscopy side by side: otitis externa, acute otitis media, cholesteatoma, and necrotizing otitis externa.</figcaption></figure>"
      },
      {
        id: "dizziness-peripheral-central",
        title: "Dizziness: peripheral vs central",
        html:
          "<ul><li><strong>BPPV:</strong> brief positional vertigo; <strong>Dix-Hallpike</strong> reproduces it; treat with Epley.</li>" +
          "<li><strong>Vestibular neuritis:</strong> acute constant vertigo for days, no hearing loss, often post-viral.</li>" +
          "<li><strong>Ménière's:</strong> episodic vertigo + <strong>fluctuating SNHL + tinnitus + aural fullness</strong>; see the dedicated block below for the formal diagnostic criteria and management ladder.</li>" +
          "<li><strong>Central red flags (HINTS):</strong> direction-changing/vertical nystagmus, normal head-impulse test, skew deviation, other neuro signs → image for stroke.</li></ul>"
      },
      {
        id: "otosclerosis-chl-differential",
        title: "Conductive hearing loss with an intact tympanic membrane: the differential",
        html:
          "<p>When conductive hearing loss is confirmed (Weber lateralizes to the affected ear, Rinne negative) but the tympanic membrane looks completely normal, three diagnoses dominate, and tympanometry usually separates them before imaging is ever needed.</p>" +
          "<ul>" +
          "<li><strong>Otosclerosis:</strong> abnormal bone remodeling fixes the stapes footplate in the oval window. Classically a <strong>young adult</strong> (20s-40s) with a <strong>family history</strong> (autosomal dominant, variable penetrance), <strong>bilateral in roughly 70-80%</strong>, and often <strong>worsens in pregnancy</strong>. Tympanogram is <strong>Type As</strong> (normal peak pressure, reduced compliance/shallow peak): the drum moves normally but the ossicular chain is stiff. The audiogram classically shows a <strong>Carhart notch</strong> (an artifactual dip in bone conduction around 2000 Hz that resolves after successful surgery).</li>" +
          "<li><strong>Otitis media with effusion (OME):</strong> fluid behind an intact drum without acute infection signs; Eustachian tube dysfunction is the usual driver. Tympanogram is <strong>Type B</strong> (flat, no discernible peak). Common in children; a <strong>new unilateral</strong> effusion in an <strong>adult</strong> needs the nasopharynx examined to exclude a mass.</li>" +
          "<li><strong>Ossicular discontinuity:</strong> most often the incudostapedial joint, from prior trauma, infection, or cholesteatoma erosion. Tympanogram can show an abnormally <strong>high-compliance Type Ad</strong> peak (a floppy, hypermobile system), the opposite mechanical picture from otosclerosis.</li>" +
          "</ul>" +
          "<p>Management follows the diagnosis: OME is watched or ventilated (tubes); otosclerosis and ossicular discontinuity are surgical (stapedectomy/stapedotomy or ossicular reconstruction) or managed with amplification if surgery isn't wanted or appropriate.</p>" + "<figure class='note-fig' data-credit='Tympanogram types and ear conditions. Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/mc/image35.png' alt='Tympanogram types A, B, C and associated ear conditions' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Tympanogram types and the ear conditions they point to.</figcaption></figure><figure class='note-fig' data-credit=\"Conductive Hearing Loss with Intact TM: Tympanometry Differentiation. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/image35.png' alt='Conductive hearing loss with intact TM' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Differentiating otosclerosis, OME, and ossicular discontinuity by tympanometry.</figcaption></figure>"
      },
      {
        id: "cholesteatoma-depth",
        title: "Cholesteatoma: mechanism, classification, and why it's surgical",
        html:
          "<p>A cholesteatoma is not a tumor. It's a sac of stratified squamous epithelium and trapped keratin debris growing where it doesn't belong, expanding by pressure and by releasing enzymes that resorb adjacent bone.</p>" +
          "<ul>" +
          "<li><strong>Acquired (primary):</strong> the common type. Chronic Eustachian tube dysfunction creates negative middle-ear pressure, drawing the <strong>pars flaccida</strong> (or, less often, the postero-superior pars tensa) inward into a <strong>retraction pocket</strong>. Desquamated keratin accumulates in the pocket instead of migrating out normally, and the sac enlarges.</li>" +
          "<li><strong>Acquired (secondary):</strong> squamous epithelium is implanted through a pre-existing <strong>marginal or attic TM perforation</strong> (from chronic otitis media or trauma) rather than forming via a retraction pocket.</li>" +
          "<li><strong>Congenital:</strong> a white mass <strong>behind an intact, normal-looking TM</strong> in a child with no history of perforation or ear surgery: a keratin rest that failed to involute embryologically. Easy to miss because the drum itself looks unremarkable.</li>" +
          "</ul>" +
          "<p><strong>Why drops and antibiotics don't fix it:</strong> the sac keeps enlarging regardless of infection control, and its bone-resorbing enzymes progressively erode whatever is nearby:</p>" +
          "<ul>" +
          "<li>The <strong>ossicular chain</strong> (conductive loss, often the long process of the incus first)</li>" +
          "<li>The <strong>facial nerve canal</strong> (facial palsy)</li>" +
          "<li>The <strong>lateral semicircular canal</strong> (a labyrinthine fistula, with vertigo triggered by pressure and a positive fistula test)</li>" +
          "<li>The <strong>tegmen tympani</strong> (intracranial spread: meningitis, brain abscess)</li>" +
          "</ul>" +
          "<p><strong>Mastoidectomy</strong>, surgical removal of the sac and diseased bone, is the definitive treatment; topical/oral antibiotics only quiet secondary infection while the structural problem remains.</p>" + "<figure class='note-fig' data-credit='Cholesteatoma with a large left tympanic-membrane perforation. Wikimedia Commons.'><img class='zoomable' src='assets/img/mc/image44.png' alt='Cholesteatoma, otoscopic view' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Cholesteatoma with a large tympanic-membrane perforation.</figcaption></figure><figure class='note-fig' data-credit=\"Cholesteatoma with Large Left Tympanic Membrane Perforation. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/35_cholesteatoma_tm_perforation_wikimedia.png' alt='Cholesteatoma with large TM perforation' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Cholesteatoma with a large tympanic membrane perforation.</figcaption></figure>"
      },
      {
        id: "vestibular-schwannoma-workup",
        title: "Vestibular schwannoma: workup and the management ladder",
        html:
          "<p>A vestibular schwannoma (acoustic neuroma) is a benign, slow-growing Schwann-cell tumor of the vestibular division of CN VIII, arising in the internal auditory canal. It's the classic explanation for <strong>asymmetric/unilateral SNHL or tinnitus</strong>, can cause disequilibrium (true vertigo is uncommon; slow growth allows central compensation), and, as it enlarges, can produce trigeminal (facial numbness) or facial nerve symptoms from cerebellopontine-angle/brainstem compression.</p>" +
          "<ul>" +
          "<li><strong>Imaging:</strong> <strong>MRI of the internal auditory canals with and without gadolinium contrast</strong> is the study of choice: it detects tumors a few millimeters across, far below CT's resolution.</li>" +
          "<li><strong>Management is a size/growth/patient decision, not one default answer:</strong>" +
          "<ul><li><strong>Observation</strong> with serial MRI: reasonable for small, non-growing tumors, especially in older patients or those with useful hearing and minimal symptoms; many grow slowly or not at all.</li>" +
          "<li><strong>Stereotactic radiosurgery (SRS)</strong>: for small-moderate tumors, or when surgery carries higher risk; aims to arrest growth rather than remove the tumor, with a lower immediate facial-nerve risk than microsurgery.</li>" +
          "<li><strong>Microsurgical resection</strong>: for larger or growing tumors, or brainstem compression; the surgical approach (translabyrinthine, retrosigmoid, middle fossa) is chosen partly on whether preserving hearing is realistic.</li></ul></li>" +
          "</ul>" +
          "<p>Facial nerve function is tracked before and after any intervention using the <strong>House-Brackmann grading scale</strong> (Grade I = normal, Grade VI = total paralysis), the standard language for describing facial nerve outcomes in vestibular schwannoma care.</p>" + "<figure class='note-fig' data-credit='Acoustic neuroma (vestibular schwannoma). Wikimedia Commons.'><img class='zoomable' src='assets/img/mc/14_branchial_arches_derivatives.png' alt='Acoustic neuroma illustration' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Vestibular schwannoma at the cerebellopontine angle, on the cochlear/vestibular nerves.</figcaption></figure>" + "<figure class='note-fig' data-credit='Vestibular schwannoma on axial MRI. Wikimedia Commons.'><img class='zoomable' src='assets/img/mc/55_recurrent_laryngeal_nerve_course_gemini.png' alt='Vestibular schwannoma on axial MRI' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The same lesion on contrast-enhanced axial MRI of the internal auditory canal.</figcaption></figure><figure class='note-fig' data-credit=\"Vestibular Schwannoma on Contrast-Enhanced Axial MRI. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/55_recurrent_laryngeal_nerve_course_gemini.png' alt='Vestibular schwannoma on axial MRI' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Vestibular schwannoma on contrast-enhanced axial MRI.</figcaption></figure><figure class='note-fig' data-credit=\"Vestibular Schwannoma Gross Resection Specimen. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/36b_vestibular_schwannoma_gross_wikimedia.png' alt='Vestibular schwannoma gross specimen' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Vestibular schwannoma gross resection specimen.</figcaption></figure>"
      },
      {
        id: "meniere-criteria-management",
        title: "Ménière's disease: diagnostic criteria and the step-up ladder",
        html:
          "<p>The Bárány Society/AAO-HNS (2015) consensus criteria formalize the diagnosis beyond the simple tetrad:</p>" +
          "<p><strong>Definite Ménière's disease</strong> requires all of the following:</p>" +
          "<ul>" +
          "<li>≥2 spontaneous vertigo episodes, each lasting <strong>20 minutes to 12 hours</strong></li>" +
          "<li><strong>Audiometrically documented</strong> low- to mid-frequency SNHL in the affected ear on at least one occasion before, during, or after an episode</li>" +
          "<li>Fluctuating aural symptoms (hearing, tinnitus, fullness) in that ear</li>" +
          "<li>No better explanation</li>" +
          "</ul>" +
          "<p><strong>Probable Ménière's disease</strong> relaxes the audiometric confirmation requirement.</p>" +
          "<p><strong>Step-up management</strong> (escalate only as needed):</p>" +
          "<ol>" +
          "<li><strong>Lifestyle/dietary:</strong> low-sodium diet and caffeine/alcohol moderation, first-line and low-risk.</li>" +
          "<li><strong>Diuretics</strong> (e.g., hydrochlorothiazide-triamterene) if diet alone is insufficient.</li>" +
          "<li><strong>Intratympanic corticosteroid</strong> injections for persistent vertigo despite the above, hearing-preserving.</li>" +
          "<li><strong>Intratympanic gentamicin</strong> ('chemical labyrinthectomy') for refractory disease: effective at controlling vertigo but carries a real risk of further hearing loss, since gentamicin is vestibulotoxic and only relatively selective for vestibular over cochlear hair cells.</li>" +
          "<li><strong>Surgical labyrinthectomy or vestibular nerve section</strong>: reserved for disabling, refractory vertigo, typically once hearing in that ear is already poor (labyrinthectomy sacrifices remaining hearing).</li>" +
          "</ol>" +
          "<p>The ladder trades rising efficacy against rising risk to hearing: reserve the ear-destructive options for disease that has failed the earlier, hearing-preserving steps.</p>"
      },
      {
        id: "noe-depth",
        title: "Necrotizing (malignant) otitis externa: the progression to watch",
        html:
          "<p><strong>Pseudomonas aeruginosa</strong> is the classic pathogen, invading through the fissures of Santorini and the bony-cartilaginous junction of the canal to cause osteomyelitis of the skull base, almost always in a <strong>diabetic</strong> (poor glycemic control) or otherwise <strong>immunocompromised</strong> patient. Pain is disproportionate to exam findings and often worse at night; granulation tissue at the bony-cartilaginous junction of the canal floor is the classic sign.</p>" +
          "<p><strong>Cranial nerve progression tracks how far the osteomyelitis has spread:</strong> <strong>CN VII</strong> is affected first and most often (it exits nearby via the stylomastoid foramen); further skull-base spread toward the jugular foramen threatens <strong>CN IX, X, XI</strong> (dysphagia, hoarseness, shoulder weakness), and <strong>CN XII</strong> (tongue weakness) if it extends to the hypoglossal canal. New cranial neuropathies signal advancing disease, not a new, separate problem.</p>" +
          "<p><strong>Workup and treatment:</strong> CT temporal bone shows bony erosion; <strong>MRI</strong> better delineates soft-tissue and marrow involvement; a <strong>technetium-99m bone scan</strong> is sensitive early but stays positive long after cure (not useful for following response), while a <strong>gallium-67 scan</strong> reflects active inflammation and is used to confirm treatment response. Treatment is <strong>prolonged (often 6-8 weeks) IV antipseudomonal antibiotics</strong> (e.g., an antipseudomonal fluoroquinolone or a beta-lactam/aminoglycoside combination) plus tight glycemic control and debridement of obvious necrotic tissue. This is not an outpatient-drops problem.</p>" + "<figure class='note-fig' data-credit='Necrotizing (malignant) otitis externa. Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/mc/image39.png' alt='Necrotizing (malignant) otitis externa' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Necrotizing otitis externa: pathogen, cranial-nerve progression, and treatment.</figcaption></figure><figure class='note-fig' data-credit=\"Necrotizing (Malignant) Otitis Externa Skull Base Progression. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/37_necrotizing_otitis_externa_progression_gemini.png' alt='Necrotizing otitis externa progression' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Necrotizing (malignant) otitis externa: skull-base progression.</figcaption></figure>"
      }
    ],
    redFlags: [
      { t: "<b>Sudden SNHL (&lt;72h)</b>, otologic emergency: urgent audiogram, steroids, MRI." },
      { t: "<b>Asymmetric SNHL / unilateral tinnitus</b>: MRI for vestibular schwannoma." },
      { t: "<b>Facial weakness with ear disease</b>: urgent ENT (cholesteatoma, malignancy, necrotizing OE)." },
      { t: "<b>Cholesteatoma signs</b>: painless foul otorrhea, attic retraction/crust; erodes bone." },
      { t: "<b>Necrotizing otitis externa</b>: diabetic/immunocompromised, severe pain, canal granulation." },
      { t: "<b>Central vertigo (HINTS)</b>: vertical/direction-changing nystagmus, normal head-impulse, skew." },
      { t: "<b>Progressive facial weakness over weeks, or palsy with a parotid/temporal-bone mass</b>: atypical for Bell's (which is acute); think tumor (vestibular schwannoma with facial nerve involvement, parotid malignancy) and image." },
      { t: "<b>Necrotizing otitis externa with new lower cranial neuropathies (IX-XI/XII)</b>: skull-base spread beyond the stylomastoid foramen; escalate imaging and antibiotic duration." }
    ]
  },

  /* ==================== CASES TAB ==================== */
  cases: [
    {
      id: "case-sudden-snhl",
      ukmla: "Hearing loss",
      source: "AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019.",
      stem: "A <b>34-year-old</b> notices her <b>right ear went muffled over a day</b> with new ringing. No wax on exam. <b>Weber lateralizes left; Rinne positive bilaterally.</b>",
      prompts: [
        { q: "Interpret the tuning-fork pattern.", a: "Weber to the better (left) ear + positive Rinne on the right = a sensorineural pattern on the right, not conductive/wax." },
        { q: "Diagnosis and urgency?", a: "Sudden SNHL is an otologic emergency. Urgent audiogram, early corticosteroids, and MRI for retrocochlear pathology." }
      ],
      teaching: "Sudden SNHL is time-sensitive and often dismissed as wax. The bedside forks separate the two in seconds."
    },
    {
      id: "case-cholesteatoma",
      ukmla: ["Ear and nasal discharge", "Otitis media"],
      source: "Standard otology teaching on cholesteatoma.",
      stem: "A <b>28-year-old</b> has <b>months of painless, foul-smelling drainage</b> from one ear and mild hearing loss. Otoscopy shows a <b>crusted retraction pocket in the attic</b>.",
      prompts: [
        { q: "What's the concern?", a: "Cholesteatoma: a keratin sac that erodes bone and can involve the ossicles, facial nerve, and inner ear." },
        { q: "Next step?", a: "ENT referral; imaging (CT temporal bone) and surgical management. Not a 'treat with drops and forget' problem." }
      ],
      teaching: "Painless, chronic, foul otorrhea + retraction/attic crust = cholesteatoma until proven otherwise.<figure class='note-fig' data-credit=\"Cholesteatoma with Large Left Tympanic Membrane Perforation. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/image44.png' alt='Cholesteatoma, otoscopic view' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Cholesteatoma with a large tympanic membrane perforation.</figcaption></figure>"
    },
    {
      id: "case-bppv",
      ukmla: ["Vertigo", "Benign paroxysmal positional vertigo"],
      source: "AAO-HNSF Clinical Practice Guideline: BPPV (Update), 2017.",
      stem: "A <b>62-year-old</b> reports <b>seconds-long spinning</b> each time he rolls over in bed or looks up. Hearing is normal. Neuro exam is normal.",
      prompts: [
        { q: "Most likely diagnosis and confirming test?", a: "BPPV; confirm with the Dix-Hallpike maneuver (reproduces vertigo + characteristic nystagmus)." },
        { q: "What would push you toward a central cause?", a: "Vertical/direction-changing nystagmus, a normal head-impulse test, skew deviation, or other neuro signs (HINTS) → image for posterior-circulation stroke." }
      ],
      teaching: "Brief, positional, hearing intact = think BPPV; but always screen for the central red flags before you settle."
    },
    {
      id: "case-noe-progression",
      ukmla: ["Painful ear", "Otitis externa"],
      source: "Standard otology teaching on necrotizing (malignant) otitis externa.",
      stem: "A <b>68-year-old with poorly controlled diabetes</b> has three weeks of severe, worsening <b>left ear pain and purulent discharge</b> that hasn't responded to two courses of topical antibiotic drops. On exam there is <b>granulation tissue at the bony-cartilaginous junction</b> of the canal. Over the past few days he has also developed <b>drooping of the left side of his face</b> and new <b>hoarseness</b>.",
      prompts: [
        { q: "What is happening, and why the facial droop and hoarseness?", a: "This is progressing <strong>necrotizing (malignant) otitis externa</strong>: skull-base osteomyelitis, almost always <em>Pseudomonas aeruginosa</em>, in a diabetic patient. The facial droop reflects <strong>CN VII</strong> involvement near the stylomastoid foramen; the new hoarseness suggests spread toward the jugular foramen affecting <strong>CN X</strong>, and each new cranial neuropathy marks advancing disease along the skull base." },
        { q: "Workup and treatment?", a: "CT temporal bone for bony erosion, MRI for soft-tissue/marrow extent, and later a gallium scan to track treatment response. Admit for <strong>prolonged IV antipseudomonal antibiotics</strong> (typically 6-8 weeks), tight glycemic control, and ENT debridement; topical drops alone will not control this." }
      ],
      teaching: "New cranial neuropathies in otitis externa aren't a separate diagnosis to chase. They're the same disease spreading along the skull base, and they demand escalation, not another course of drops."
    },
    {
      id: "case-otosclerosis",
      ukmla: "Hearing loss",
      source: "Standard otology teaching on otosclerosis.",
      stem: "A <b>29-year-old woman</b>, now 20 weeks pregnant, reports progressive hearing loss in both ears over two years, worse on the left, and says her mother has worn hearing aids since a young age. Both tympanic membranes look entirely normal. <b>Weber lateralizes to the left; Rinne is negative on the left.</b>",
      prompts: [
        { q: "Interpret the tuning-fork findings and suggest the leading diagnosis.", a: "Weber lateralizing to the worse (left) ear with a negative Rinne on that side = a <strong>conductive</strong> pattern. Combined with a normal-looking TM, bilateral involvement, a strong <strong>family history</strong>, young adult onset, and worsening during pregnancy, the leading diagnosis is <strong>otosclerosis</strong>." },
        { q: "What would confirm it, and what are the management options?", a: "<strong>Tympanometry</strong> (expect a Type As pattern: reduced compliance, normal peak pressure) and audiometry (look for a <strong>Carhart notch</strong>). Options are amplification (hearing aids) or surgery (<strong>stapedectomy/stapedotomy</strong>), with surgery usually deferred until she is no longer pregnant or breastfeeding, since otosclerosis often worsens with pregnancy." }
      ],
      teaching: "Bilateral conductive loss with a normal drum, a family history, and a young adult: think otosclerosis before you think 'wax I must have missed.'"
    },
    {
      id: "case-meniere",
      ukmla: ["Vertigo", "Ménière's disease"],
      source: "Bárány Society/AAO-HNS diagnostic criteria for Ménière's disease, 2015.",
      stem: "A <b>45-year-old</b> describes recurrent episodes, each lasting about an hour, of spinning vertigo with nausea, accompanied each time by <b>muffled hearing, ringing, and a full sensation</b> in the right ear. Between episodes she feels well. Audiometry obtained during a recent episode confirmed a <b>low-frequency sensorineural hearing loss</b> on the right.",
      prompts: [
        { q: "Does this meet the diagnostic criteria for Ménière's disease, and which tier?", a: "Yes, this is <strong>definite Ménière's disease</strong>: ≥2 spontaneous vertigo episodes of 20 minutes-12 hours, audiometrically documented low-frequency SNHL in the affected ear, and fluctuating aural symptoms (hearing, tinnitus, fullness), with no better explanation." },
        { q: "How do you sequence management if dietary sodium restriction alone doesn't control her symptoms?", a: "Step up rather than jumping to ear-destructive options: add a <strong>diuretic</strong> next, then <strong>intratympanic corticosteroids</strong> if vertigo persists. <strong>Intratympanic gentamicin</strong> or surgical labyrinthectomy are reserved for disease refractory to those hearing-preserving steps, given their risk to residual hearing." }
      ],
      teaching: "Meeting the Bárány/AAO-HNS criteria is what separates 'Ménière's' from 'recurrent dizziness with some ear symptoms,' and management escalates in a defined order, not straight to gentamicin."
    },
    {
      id: "case-vestibular-schwannoma",
      ukmla: ["Hearing loss", "Acoustic neuroma", "Tinnitus"],
      source: "ACR Appropriateness Criteria: Hearing Loss and/or Vertigo; standard otology/neurotology teaching on vestibular schwannoma workup and management.",
      stem: "A <b>52-year-old</b> reports <b>gradually worsening hearing in his right ear over 18 months</b>, with a constant right-sided ringing and a vague sense of unsteadiness, not true spinning vertigo. He denies facial weakness or numbness. <b>Weber lateralizes to the left; Rinne positive bilaterally.</b> Pure-tone audiometry shows an <b>asymmetric sensorineural hearing loss</b>, worse on the right, with poorer-than-expected word recognition for the degree of loss.",
      prompts: [
        { q: "Interpret the tuning-fork and audiogram pattern, and give the leading diagnosis.", a: "Weber to the better (left) ear with positive Rinne bilaterally is a <strong>sensorineural</strong> pattern, and it's <strong>asymmetric</strong>, worse on the right, with disproportionately poor word recognition. Slowly progressive unilateral SNHL with tinnitus and mild disequilibrium (not true vertigo, since a slow-growing lesion allows central vestibular compensation) is the classic presentation of a <strong>vestibular schwannoma</strong> (acoustic neuroma)." },
        { q: "Why does asymmetric SNHL mandate imaging rather than a 'watch and repeat the audiogram' approach?", a: "Asymmetric SNHL is a red flag for a retrocochlear lesion, not just presbycusis or noise damage. The next step is an <strong>MRI of the internal auditory canals (IACs) with contrast</strong>, the most sensitive study for a vestibular schwannoma, which can be missed on plain CT. Waiting risks a tumor enlarging into the cerebellopontine angle and compressing the brainstem or trigeminal/facial nerves before it's caught." },
        { q: "What else lives in the cerebellopontine-angle differential besides vestibular schwannoma?", a: "Meningioma, epidermoid (congenital cholesteatoma of the CPA), facial nerve schwannoma, and, much less commonly, metastasis or a lower cranial nerve schwannoma. MRI with contrast, plus the pattern of cranial nerve involvement, helps distinguish these." },
        { q: "The MRI confirms a 1.5 cm intracanalicular-to-CPA vestibular schwannoma. What are the management options, and how do you choose?", a: "Three options, chosen by tumor size/growth, symptoms, hearing status, and patient factors: <strong>observation with serial MRI</strong> (reasonable for a small, stable tumor, especially in an older patient or one with useful hearing, since many grow slowly or not at all); <strong>stereotactic radiosurgery</strong> (arrests growth in most cases, lower upfront morbidity, but doesn't remove the tumor and carries some risk to hearing/facial nerve over time); and <strong>microsurgical resection</strong> (definitive for large tumors or those with brainstem compression, but with the highest risk to facial nerve function and residual hearing)." },
        { q: "How is facial nerve outcome tracked and discussed with the patient before and after treatment?", a: "Using the <strong>House-Brackmann grading scale</strong> (see the House-Brackmann card), the same I-VI scale used across otologic and skull-base surgery. Counseling before microsurgery or radiosurgery should frame facial nerve preservation as a spectrum of possible House-Brackmann outcomes, not a guarantee of normal function, and this tradeoff is a major factor in choosing among observation, radiosurgery, and resection." }
      ],
      teaching: "Vestibular schwannoma is the lesion an asymmetric-SNHL red flag is chasing: progressive unilateral hearing loss, tinnitus, and disequilibrium (not spinning vertigo) should trigger an MRI IAC with contrast, not a repeat audiogram in six months. Once found, the management ladder (observe → radiosurgery → resection) is chosen against the same facial-nerve-preservation tradeoff the House-Brackmann scale is built to describe."
    }
  ],

  /* ==================== CARDS TAB (active recall) ==================== */
  cards: [
    { id: "eac-anat", tags: ["OT", "anatomy"], milestones: ["MK1"], ukmla: ["Painful ear","Hearing loss"], source: "Standard otologic anatomy teaching.", front: "What innervates the external ear, and why does it matter clinically?",
      back: "CN <strong>V3</strong> (auriculotemporal), <strong>VII</strong>, <strong>IX</strong>, <strong>X</strong> (Arnold's nerve), and C2-C3. Because so many nerves converge, ear pain is frequently <strong>referred</strong> from the TMJ, teeth, throat, or larynx.<figure class='note-fig' data-credit=\"Sensory Innervation of the External Ear and Referred Otalgia Pathways. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/38_external_ear_innervation_gemini.png' alt='External ear innervation' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Sensory innervation of the external ear and referred otalgia pathways.</figcaption></figure>" },
    { id: "eac-canal", tags: ["OT", "anatomy"], milestones: ["MK1"], ukmla: "Painful ear", source: "Standard otologic anatomy teaching.", front: "Describe the makeup of the external auditory canal.", back: "Outer ⅓ <strong>cartilaginous</strong> (contains cerumen glands), inner ⅔ <strong>bony</strong>. This is why you pull the pinna up-and-back (adult) to straighten it for otoscopy.<figure class='note-fig' data-credit='External ear and otoscopy. Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/mc/image19.png' alt='External auditory canal' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The external auditory canal: cartilaginous outer third, bony inner two-thirds.</figcaption></figure>" },
    { id: "tm-landmarks2", tags: ["OT", "anatomy"], milestones: ["MK1","PC4"], ukmla: "Hearing loss", source: "Standard otoscopy teaching.", front: "Name the tympanic membrane landmarks.", back: "<ul><li><strong>Cone of light</strong> (antero-inferior)</li><li><strong>Umbo</strong> (central, most depressed)</li><li><strong>Manubrium + lateral process of malleus</strong></li><li><strong>Pars tensa</strong> and <strong>pars flaccida</strong></li></ul><figure class='note-fig' data-credit=\"Normal Right Tympanic Membrane Landmarks (Otoscopic View). oxfordmedicaleducation.com.\"><img class='zoomable' src='assets/img/mc/image23.png' alt='Normal tympanic membrane landmarks' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Normal right tympanic membrane landmarks on otoscopy.</figcaption></figure>" },
    { id: "ossicles", tags: ["OT", "anatomy"], milestones: ["MK1"], ukmla: "Hearing loss", source: "Standard otologic anatomy teaching.", front: "Name the ossicular chain in order and what it connects.", back: "<strong>Malleus → incus → stapes → oval window.</strong> It mechanically transmits and amplifies TM vibration into the cochlear fluid.<figure class='note-fig' data-credit=\"Ossicular Chain Anatomy and Mechanics (Malleus, Incus, Stapes). Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/image41.png' alt='Ossicular chain anatomy and mechanics' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The ossicular chain: malleus, incus, and stapes.</figcaption></figure>" },
    { id: "me-muscles", tags: ["OT", "anatomy"], milestones: ["MK1"], ukmla: "Hearing loss", source: "Standard otologic anatomy teaching.", front: "What are the two middle-ear muscles, their nerves, and their job?", back: "<strong>Tensor tympani</strong> (CN V3) and <strong>stapedius</strong> (CN VII). They reflexively <strong>dampen loud sounds</strong> (acoustic reflex).<figure class='note-fig' data-credit='Middle-ear muscles. Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/mc/image32.png' alt='Tensor tympani and stapedius' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Tensor tympani (CN V3) and stapedius (CN VII), the middle-ear muscles.</figcaption></figure>" },
    { id: "et", tags: ["OT", "anatomy"], milestones: ["MK1","MK3"], ukmla: ["Hearing loss","Otitis media"], source: "Standard otologic anatomy teaching.", front: "What does the Eustachian tube connect, and what happens when it fails?", back: "Middle ear ↔ <strong>nasopharynx</strong>; equalizes pressure and drains the middle ear. Dysfunction → negative pressure, <strong>effusion</strong>, retraction, and conductive loss (common in kids)." },
    { id: "cn7-me", tags: ["OT", "anatomy"], milestones: ["MK1","PC4"], ukmla: "Facial weakness", source: "Standard otologic anatomy teaching.", front: "Why does the facial nerve matter in otology?", back: "<strong>CN VII</strong> courses through the temporal bone adjacent to the middle/inner ear, so it's at risk from cholesteatoma, tumor, necrotizing otitis externa, and surgery. <strong>Facial weakness + ear disease = red flag.</strong><figure class='note-fig' data-credit=\"Facial Nerve Course and Vulnerability in Otologic Disease. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/image42.png' alt='Facial nerve course in otologic disease' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Facial nerve course and vulnerability in otologic disease.</figcaption></figure>" },
    { id: "chorda", tags: ["OT", "anatomy"], milestones: ["MK1"], ukmla: "Hearing loss", source: "Standard otologic anatomy teaching.", front: "What is the chorda tympani and what does it carry?", back: "A branch of <strong>CN VII</strong> that crosses the middle ear carrying <strong>taste from the anterior ⅔ of the tongue</strong> (and parasympathetics to submandibular/sublingual glands).<figure class='note-fig' data-credit='Chorda tympani. Illustration generated with Google Gemini.'><img class='zoomable' src='assets/img/mc/82_le_fort_fractures_i_ii_iii_wikimedia.png' alt='Chorda tympani crossing the middle ear' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The chorda tympani crossing the middle ear, carrying taste from the anterior tongue.</figcaption></figure>" },
    { id: "inner-div", tags: ["OT", "anatomy"], milestones: ["MK1"], ukmla: ["Hearing loss","Vertigo"], source: "Standard otologic anatomy teaching.", front: "Divide the inner ear by function.", back: "<strong>Cochlea</strong> = hearing; <strong>vestibule + semicircular canals</strong> = balance. Both are read out by <strong>CN VIII</strong> (cochlear + vestibular divisions).<figure class='note-fig' data-credit=\"Bony Labyrinth of the Inner Ear (Cochlea and Semicircular Canals). Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/22_tympanic_membrane_normal_oxford.png' alt='Bony labyrinth of the inner ear' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The bony labyrinth: cochlea and semicircular canals.</figcaption></figure>" },
    { id: "weber", tags: ["OT", "clinical"], milestones: ["PC4"], ukmla: "Hearing loss", source: "AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019: tuning-fork triage.", front: "Interpret the Weber test.", back: "512 Hz on the vertex. <strong>Conductive loss:</strong> lateralizes to the <strong>affected</strong> ear. <strong>SNHL:</strong> lateralizes to the <strong>better</strong> ear.<figure class='note-fig' data-credit='Weber and Rinne tuning-fork tests. Wikimedia Commons.'><img class='zoomable' src='assets/img/mc/image43.png' alt='Weber and Rinne tests' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Tuning-fork testing: Weber and Rinne in conductive vs sensorineural loss.</figcaption></figure><div class=\"tbl-scroll\"><table><thead><tr><th>Scenario</th><th>Weber</th><th>Rinne (affected ear)</th></tr></thead><tbody><tr><td>Normal / symmetric</td><td>Midline</td><td>AC &gt; BC (positive)</td></tr><tr><td>Conductive loss, right</td><td>Lateralizes to <b>right</b> (affected)</td><td>BC &gt; AC (<b>negative</b>)</td></tr><tr><td>Sensorineural loss, right</td><td>Lateralizes to <b>left</b> (better)</td><td>AC &gt; BC (positive)</td></tr></tbody></table></div>" },
    { id: "rinne", tags: ["OT", "clinical"], milestones: ["PC4"], ukmla: "Hearing loss", source: "AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019: tuning-fork triage.", front: "Interpret the Rinne test.", back: "Mastoid (BC) vs beside the ear (AC). <strong>Normal/SNHL:</strong> AC &gt; BC (positive). <strong>Conductive loss:</strong> BC &gt; AC (negative) in the affected ear.<div class=\"tbl-scroll\"><table><thead><tr><th>Scenario</th><th>Weber</th><th>Rinne (affected ear)</th></tr></thead><tbody><tr><td>Normal / symmetric</td><td>Midline</td><td>AC &gt; BC (positive)</td></tr><tr><td>Conductive loss, right</td><td>Lateralizes to <b>right</b> (affected)</td><td>BC &gt; AC (<b>negative</b>)</td></tr><tr><td>Sensorineural loss, right</td><td>Lateralizes to <b>left</b> (better)</td><td>AC &gt; BC (positive)</td></tr></tbody></table></div><figure class='note-fig' data-credit=\"How to Read an Audiogram at a Glance. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/image25.png' alt='How to read an audiogram' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>How to read an audiogram at a glance.</figcaption></figure>" },
    { id: "chl-snhl", tags: ["OT", "clinical"], milestones: ["PC4","MK3"], ukmla: "Hearing loss", source: "Standard audiology teaching.", front: "Give the common causes of conductive vs sensorineural hearing loss.", back: "<strong>Conductive:</strong> cerumen, effusion, perforation, otosclerosis. <strong>SNHL:</strong> presbycusis, noise, ototoxicity, sudden SNHL, vestibular schwannoma (if asymmetric)." },
    { id: "sudden-snhl", tags: ["OT", "clinical"], milestones: ["PC4"], redFlag: true, ukmla: "Hearing loss", source: "AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019.", front: "Why is sudden SNHL an emergency, and what's the workup?",
      back: "<strong>Otologic emergency</strong> (≥30 dB over ≥3 frequencies within 72h). Forks show a sensorineural pattern (Weber to better ear, Rinne positive). <strong>Urgent audiogram, corticosteroids, MRI.</strong> Don't call it wax." },
    { id: "asym-snhl", tags: ["OT", "clinical"], milestones: ["PC4"], redFlag: true, ukmla: ["Hearing loss","Acoustic neuroma"], source: "ACR Appropriateness Criteria: Hearing Loss and/or Vertigo (asymmetric SNHL imaging).", front: "Asymmetric SNHL or unilateral tinnitus: what must you exclude?",
      back: "<strong>Vestibular schwannoma</strong> (and other retrocochlear lesions). Get an <strong>MRI with contrast</strong> of the internal auditory canals.<figure class='note-fig' data-credit=\"Vestibular Schwannoma on Contrast-Enhanced Axial MRI. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/55_recurrent_laryngeal_nerve_course_gemini.png' alt='Vestibular schwannoma on axial MRI' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Vestibular schwannoma on contrast-enhanced axial MRI.</figcaption></figure>" },
    { id: "oe-om", tags: ["OT", "clinical"], milestones: ["PC4","MK3"], ukmla: ["Painful ear","Otitis externa","Otitis media"], source: "AAO-HNSF Clinical Practice Guideline: Otitis Externa (Update), 2014; AAO-HNSF/AAP Clinical Practice Guideline: Acute Otitis Media (Update), 2013.", front: "Distinguish otitis externa from acute otitis media on exam.", back: "<strong>Otitis externa:</strong> pain on <strong>tragal traction</strong>, canal edema/discharge, TM often normal. <strong>AOM:</strong> <strong>bulging, erythematous TM</strong> with effusion; canal not tender." },
    { id: "cholesteatoma", tags: ["OT", "clinical"], milestones: ["PC4","MK3"], redFlag: true, ukmla: ["Ear and nasal discharge","Otitis media"], source: "Standard otology teaching on cholesteatoma.", front: "What findings suggest cholesteatoma, and why care?",
      back: "<strong>Painless, chronic, foul otorrhea</strong> + <strong>attic retraction/crust</strong>. It's a keratin sac that <strong>erodes bone</strong>, and can reach the ossicles, facial nerve, and labyrinth. Needs CT + surgery." },
    { id: "noe", tags: ["OT", "clinical"], milestones: ["PC4"], redFlag: true, ukmla: ["Painful ear","Otitis externa"], source: "Standard otology teaching on necrotizing (malignant) otitis externa.", front: "Which patient with an 'ear infection' should worry you most, and why?",
      back: "A <strong>diabetic or immunocompromised</strong> patient with <strong>severe deep otalgia and granulation tissue</strong> in the canal: <strong>necrotizing (malignant) otitis externa</strong>, a skull-base osteomyelitis. Urgent ENT + imaging." },
    { id: "bppv", tags: ["OT", "clinical"], milestones: ["PC4"], ukmla: ["Vertigo","Benign paroxysmal positional vertigo"], source: "AAO-HNSF Clinical Practice Guideline: BPPV (Update), 2017.", front: "Classic BPPV: features, test, treatment.", back: "<strong>Brief, seconds-long positional vertigo</strong>; confirm with <strong>Dix-Hallpike</strong>; treat with the <strong>Epley</strong> maneuver. Hearing is normal." },
    { id: "meniere", tags: ["OT", "clinical"], milestones: ["PC4"], ukmla: ["Vertigo","Ménière's disease"], source: "Bárány Society/AAO-HNS diagnostic criteria for Ménière's disease, 2015.", front: "What is the Ménière's tetrad?", back: "<strong>Episodic vertigo</strong> (minutes-hours) + <strong>fluctuating SNHL</strong> + <strong>tinnitus</strong> + <strong>aural fullness</strong>." },
    { id: "central-vertigo", tags: ["OT", "clinical"], milestones: ["PC4"], redFlag: true, ukmla: ["Vertigo","Dizziness"], source: "Kattah et al., HINTS exam, Stroke 2009.", front: "Which dizziness features point CENTRAL rather than peripheral?",
      back: "<strong>HINTS</strong> red flags: direction-changing or vertical nystagmus, a <strong>normal head-impulse test</strong>, skew deviation, plus other neuro signs → image for posterior-circulation stroke." },
    { id: "facial-palsy", tags: ["OT", "clinical"], milestones: ["PC4","MK1"], redFlag: true, ukmla: ["Facial weakness","Bell's palsy"], source: "AAN Practice Guideline: Bell's Palsy, 2012.", front: "Distinguish central from peripheral facial palsy, and why it matters in otology.",
      back: "<strong>Peripheral (LMN):</strong> forehead involved (Bell's, or otologic causes: cholesteatoma, necrotizing OE, tumor). <strong>Central (UMN):</strong> forehead spared → stroke workup. Facial weakness with ear disease is an ENT red flag." },
    { id: "otosclerosis-card", tags: ["OT", "clinical"], milestones: ["PC4","MK3"], ukmla: "Hearing loss", source: "Standard otology teaching on otosclerosis.", front: "The audiogram finding classically linked to otosclerosis, an artifactual dip in bone conduction near 2000 Hz that improves after successful stapes surgery, is called the <span class=\"cloze-blank\">[...]</span>.",
      back: "The audiogram finding classically linked to otosclerosis, an artifactual dip in bone conduction near 2000 Hz that improves after successful stapes surgery, is called the <mark class=\"cloze-answer\">Carhart notch</mark>. Otosclerosis itself is autosomal-dominant bone remodeling that fixes the stapes footplate, often worsening in pregnancy." },
    { id: "tympanometry-differential-card", tags: ["OT", "clinical"], milestones: ["PC4","MK3"], ukmla: "Hearing loss", source: "Jerger, tympanogram classification, Archives of Otolaryngology 1970.", front: "On tympanometry, how do otosclerosis, OME, and ossicular discontinuity differ?",
      back: "<strong>Otosclerosis:</strong> Type As (normal peak pressure, reduced/shallow compliance: a stiff system). <strong>OME:</strong> Type B (flat, no peak: fluid behind the drum). <strong>Ossicular discontinuity:</strong> abnormally high-compliance Type Ad (a floppy, hypermobile system), the opposite mechanical picture from otosclerosis." },
    { id: "cholesteatoma-classification-card", tags: ["OT", "clinical"], milestones: ["PC4","MK3"], ukmla: ["Ear and nasal discharge","Otitis media"], source: "Standard otology teaching on cholesteatoma.", front: "A white mass behind an intact, normal-looking tympanic membrane in a child with no history of perforation or ear surgery is <span class=\"cloze-blank\">[...]</span>.",
      back: "A white mass behind an intact, normal-looking tympanic membrane in a child with no history of perforation or ear surgery is <mark class=\"cloze-answer\">congenital cholesteatoma</mark>, a keratin rest that failed to involute embryologically. It's easy to miss, since the drum itself looks unremarkable.<figure class='note-fig' data-credit=\"Congenital Cholesteatoma Behind an Intact Tympanic Membrane. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/42_congenital_cholesteatoma_wikimedia.png' alt='Congenital cholesteatoma' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Congenital cholesteatoma behind an intact tympanic membrane.</figcaption></figure>" },
    { id: "cholesteatoma-erosion-card", tags: ["OT", "clinical"], milestones: ["PC4","MK3"], redFlag: true, ukmla: ["Ear and nasal discharge","Facial weakness"], source: "Standard otology teaching on cholesteatoma; Cummings Otolaryngology-Head and Neck Surgery, 7th ed.", front: "Cholesteatoma needs <span class=\"cloze-blank\">[...]</span> rather than antibiotic drops alone, because the sac's bone-resorbing enzymes keep eroding nearby structures regardless of infection control.",
      back: "Cholesteatoma needs <mark class=\"cloze-answer\">mastoidectomy</mark> rather than antibiotic drops alone, because the sac's bone-resorbing enzymes keep eroding nearby structures regardless of infection control. Erosion can reach the ossicular chain, the facial nerve canal, the lateral semicircular canal, or the tegmen tympani.<figure class='note-fig' data-credit='Cholesteatoma with tympanic-membrane perforation. Wikimedia Commons.'><img class='zoomable' src='assets/img/mc/image44.png' alt='Cholesteatoma, otoscopic view' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Cholesteatoma seen through a tympanic-membrane perforation.</figcaption></figure>" },
    { id: "vestibular-schwannoma-workup-card", tags: ["OT", "clinical"], milestones: ["PC4"], redFlag: true, ukmla: ["Hearing loss","Acoustic neuroma","Tinnitus"], source: "ACR Appropriateness Criteria: Hearing Loss and/or Vertigo (asymmetric SNHL imaging); Cummings Otolaryngology-Head and Neck Surgery, 7th ed.", front: "The imaging study of choice for a suspected vestibular schwannoma, able to detect tumors only a few millimeters across, is <span class=\"cloze-blank\">[...]</span>.",
      back: "The imaging study of choice for a suspected vestibular schwannoma, able to detect tumors only a few millimeters across, is <mark class=\"cloze-answer\">MRI of the internal auditory canals with and without gadolinium contrast</mark>. Management then ranges from observation through stereotactic radiosurgery to microsurgical resection, chosen by tumor size, growth, and hearing status.<figure class='note-fig' data-credit=\"Vestibular Schwannoma Cerebellopontine Angle Lesion on MRI. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/55_recurrent_laryngeal_nerve_course_gemini.png' alt='Vestibular schwannoma CPA lesion on MRI' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Vestibular schwannoma at the cerebellopontine angle on MRI.</figcaption></figure>" },
    { id: "house-brackmann-card", tags: ["OT", "clinical"], milestones: ["PC4","MK1"], ukmla: ["Facial weakness","Acoustic neuroma"], source: "House JW, Brackmann DE. Facial nerve grading system. Otolaryngol Head Neck Surg. 1985.", front: "The scale that grades facial nerve function from Grade I, normal function, to Grade VI, total paralysis, is the <span class=\"cloze-blank\">[...]</span>.",
      back: "The scale that grades facial nerve function from Grade I, normal function, to Grade VI, total paralysis, is the <mark class=\"cloze-answer\">House-Brackmann scale</mark>. It documents facial nerve status before and after otologic or skull-base surgery, such as vestibular schwannoma resection.<figure class='note-fig' data-credit='Vestibular schwannoma on MRI. Wikimedia Commons.'><img class='zoomable' src='assets/img/mc/55_recurrent_laryngeal_nerve_course_gemini.png' alt='Vestibular schwannoma MRI' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Contrast-enhanced MRI of a vestibular schwannoma in the internal auditory canal.</figcaption></figure><div class=\"tbl-scroll\"><table><thead><tr><th>Grade</th><th>Descriptor</th><th>Overall / at rest</th><th>Forehead</th><th>Eye</th><th>Mouth</th><th>Synkinesis / spasm</th></tr></thead><tbody><tr><td><b>I</b></td><td>Normal</td><td>Normal symmetry and tone in all areas</td><td>Normal</td><td>Normal</td><td>Normal</td><td>None</td></tr><tr><td><b>II</b></td><td>Mild dysfunction</td><td>Slight weakness on close inspection; normal symmetry/tone at rest</td><td>Moderate-good movement</td><td>Complete closure with minimal effort</td><td>Slight asymmetry with max effort</td><td>Absent or barely noticeable</td></tr><tr><td><b>III</b></td><td>Moderate dysfunction</td><td>Obvious but not disfiguring difference; normal symmetry/tone at rest</td><td>Slight-moderate movement</td><td>Complete closure with effort</td><td>Slightly weak with max effort</td><td>Noticeable but not severe; hemifacial spasm may develop</td></tr><tr><td><b>IV</b></td><td>Moderately severe dysfunction</td><td>Obvious weakness and/or disfiguring asymmetry; normal tone at rest</td><td>No movement</td><td>Incomplete closure</td><td>Asymmetric with max effort</td><td>Severe enough to interfere with function</td></tr><tr><td><b>V</b></td><td>Severe dysfunction</td><td>Only barely perceptible motion; asymmetry at rest</td><td>None</td><td>Incomplete closure</td><td>Slight movement</td><td>Usually absent</td></tr><tr><td><b>VI</b></td><td>Total paralysis</td><td>No movement; loss of tone; asymmetry</td><td>None</td><td>None</td><td>None</td><td>None</td></tr></tbody></table></div>" },
    { id: "meniere-criteria-card", tags: ["OT", "clinical"], milestones: ["PC4"], ukmla: ["Vertigo","Ménière's disease"], source: "Bárány Society/AAO-HNS diagnostic criteria for Ménière's disease, 2015.", front: "The Bárány Society/AAO-HNS 2015 criteria for definite Ménière's disease require at least two spontaneous vertigo episodes, each lasting between <span class=\"cloze-blank\">[...]</span>.",
      back: "The Bárány Society/AAO-HNS 2015 criteria for definite Ménière's disease require at least two spontaneous vertigo episodes, each lasting between <mark class=\"cloze-answer\">20 minutes and 12 hours</mark>. The diagnosis also needs audiometrically documented low-to-mid-frequency SNHL and fluctuating aural symptoms in the affected ear." },
    { id: "meniere-management-ladder-card", tags: ["OT", "clinical"], milestones: ["PC4"], ukmla: "Ménière's disease", source: "Standard otology/neurotology teaching on Ménière's disease management.", front: "In the Ménière's disease step-up management ladder, <span class=\"cloze-blank\">[...]</span> is reserved for vertigo refractory to diet, diuretics, and intratympanic steroids, because it risks further hearing loss.",
      back: "In the Ménière's disease step-up management ladder, <mark class=\"cloze-answer\">intratympanic gentamicin</mark> is reserved for vertigo refractory to diet, diuretics, and intratympanic steroids, because it risks further hearing loss. This 'chemical labyrinthectomy' controls vertigo well but is only relatively selective for vestibular over cochlear hair cells." },
    { id: "noe-pathogen-progression-card", tags: ["OT", "clinical"], milestones: ["PC4"], redFlag: true, ukmla: ["Painful ear","Otitis externa"], source: "Standard otology teaching on necrotizing (malignant) otitis externa.", front: "The classic pathogen behind necrotizing (malignant) otitis externa, invading the skull base from the canal floor almost always in a diabetic or immunocompromised patient, is <span class=\"cloze-blank\">[...]</span>.",
      back: "The classic pathogen behind necrotizing (malignant) otitis externa, invading the skull base from the canal floor almost always in a diabetic or immunocompromised patient, is <mark class=\"cloze-answer\">Pseudomonas aeruginosa</mark>. As osteomyelitis spreads along the skull base, CN VII is affected first, followed by CN IX, X, XI, and then CN XII." },
    { id: "cochlear-implant-candidacy-card", tags: ["OT", "clinical"], milestones: ["PC4"], ukmla: "Hearing loss", source: "Standard neurotology teaching on cochlear implant candidacy (FDA-approved criteria; AAO-HNS Cochlear Implants clinical indicators statement).", front: "Cochlear implant candidacy requires <span class=\"cloze-blank\">[...]</span> with limited benefit from appropriately fit hearing aids, confirmed by aided speech-perception testing.",
      back: "Cochlear implant candidacy requires <mark class=\"cloze-answer\">severe-to-profound sensorineural hearing loss</mark> with limited benefit from appropriately fit hearing aids, confirmed by aided speech-perception testing. Unlike a hearing aid, an implant bypasses damaged cochlear hair cells and stimulates the auditory nerve directly." }
  ]
});

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
  status: "DRAFT, pending faculty review. v0.2.0: added a subspecialty depth pass beyond the Foundations-level content this module started with, otosclerosis (pathophysiology, Carhart notch, stapedectomy) and the tympanometry-based differential for conductive loss with an intact TM (otosclerosis vs OME vs ossicular discontinuity), cholesteatoma classification and erosion mechanism (why mastoidectomy, not drops), vestibular schwannoma workup/management ladder with the House-Brackmann facial nerve grading scale, Ménière's disease per the Bárány Society/AAO-HNS 2015 diagnostic criteria plus its step-up management ladder, necrotizing (malignant) otitis externa in depth (pathogen, cranial-nerve progression, imaging, treatment duration), and cochlear implant candidacy, grounded in named guidelines/textbooks (AAO-HNSF CPGs, ACR Appropriateness Criteria, Bárány Society/AAO-HNS consensus, House-Brackmann 1985, Cummings Otolaryngology) and standard neurotology teaching, not derived from any single textbook. Also backfilled ukmla/milestones/source tags on every pre-existing card and case in this module (previously untagged) so the whole file now validates against the Module Build Standard. v0.2.1: added a teaching case for vestibular schwannoma / asymmetric SNHL, identified as a coverage gap by an audit. v0.2.2: OpenEvidence-verified correction pass (user-reviewed, not faculty sign-off) — scoped HINTS/head-impulse testing to acute vestibular syndrome only (case-bppv, central-vertigo, dizziness-peripheral-central block); corrected the probable-Meniere's-disease definition to widen the episode window to 20min-24h (meniere-criteria-management, meniere-criteria-card); added an otitis-externa-management block and otitis-externa-topical-card; softened sudden-SNHL corticosteroid framing to 'may be offered' per AAO-HNS 2019 (sudden-snhl card, case-sudden-snhl, red flags); added single-sided-deafness CI candidacy and a betahistine evidence note; added ramsay-hunt card; minor refinements to me-muscles and otosclerosis-chl-differential.",
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
        tagline: "The external, middle, and inner ear at a glance, and the structure each one contributes to hearing or balance.",
        html:
          "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/ear_anatomy_physiology_overview.png' alt='Ear anatomy physiology overview' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Overview of the ear&#39;s three compartments (external/sound-gathering, middle/amplification, inner/transduction) and how CN VIII reads out the inner ear.</figcaption></figure><p>Work outside-in: <strong>external</strong> (sound gathering), <strong>middle</strong> (sound amplification &amp; transmission), <strong>inner</strong> (transduction + balance).</p>" +
          "<ul>" +
          "<li><strong>External:</strong> auricle + external auditory canal (EAC): outer ⅓ cartilage, inner ⅔ bone; cerumen glands in the cartilaginous part.</li>" +
          "<li><strong>Middle:</strong> <span class=\"term\" data-def=\"The three-layered drum that vibrates with sound and transmits energy to the ossicular chain.\">tympanic membrane</span> → <span class=\"term\" data-def=\"The chain of three tiny bones (malleus, incus, stapes) that mechanically carries sound vibration from the eardrum to the inner ear.\">ossicles</span> (<strong>malleus → incus → stapes</strong>) → oval window; connected to the nasopharynx by the <span class=\"term\" data-def=\"The tube connecting the middle ear to the nasopharynx; equalizes pressure and drains secretions, and its dysfunction underlies most middle-ear effusion.\">Eustachian tube</span>.</li>" +
          "<li><strong>Inner:</strong> <span class=\"term\" data-def=\"The spiral, fluid-filled organ of hearing; converts sound vibration into neural signal via hair cells.\">cochlea</span> (hearing) and <strong>vestibule + semicircular canals</strong> (balance), read out by <strong>CN VIII</strong>.</li>" +
          "</ul>"
      },
      {
        title: "The clinically dangerous relationships",
        tagline: "Why ear disease can cause facial weakness, referred pain from elsewhere, or taste disturbance -- the nerves and muscles that share this small space.",
        html:
          "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/middle_ear_dangerous_relationships.png' alt='Middle ear dangerous relationships' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Middle-ear/mastoid danger zone: facial nerve, tensor tympani/stapedius, chorda tympani, and referred otalgia via CN V/VII/IX/X.</figcaption></figure><ul>" +
          "<li><strong>Facial nerve (CN VII)</strong> runs through the temporal bone next to the middle/inner ear, so facial weakness with ear disease is a red flag.</li>" +
          "<li><strong>Referred otalgia:</strong> the ear is innervated by CN <strong>V, VII, IX, X</strong> and C2-C3, so a normal-looking ear can hurt because of pathology elsewhere (TMJ, teeth, tonsil, tongue base, larynx).</li>" +
          "<li><strong>Middle-ear muscles:</strong> <span class=\"term\" data-def=\"Innervated by CN V3; tenses the tympanic membrane to dampen loud sound.\">tensor tympani</span> (CN V3) and <span class=\"term\" data-def=\"Innervated by CN VII; the smallest skeletal muscle in the body, dampens loud sound via the acoustic reflex.\">stapedius</span> (CN VII) dampen loud sound.</li>" +
          "<li><span class=\"term\" data-def=\"A branch of the facial nerve (CN VII) that crosses the middle ear and carries taste sensation from the anterior two-thirds of the tongue -- at risk during middle-ear surgery.\">Chorda tympani</span> (branch of VII) crosses the middle ear carrying taste from the anterior ⅔ of the tongue.</li>" +
          "</ul>"
      }
    ],

    diagrams: [
      {
        kind: "image",
        occlude: true,
        id: "ear-overview-photo",
        title: "The ear in cross-section",
        note: "Gray's Anatomy plate 907: a real historical dissection illustration. Auricle → canal → tympanic membrane → middle ear → auditory tube, in one section.",
        src: "assets/img/figures/ear-overview.png",
        source: "Fig. 907, “The Auditory Ossicles Etc.” Gray's Anatomy of the Human Body, 20th ed. (1918), illustrated by Henry Vandyke Carter. Public domain. Via Wikimedia Commons (commons.wikimedia.org/wiki/File:Gray907.png).",
        labels: [
          { id:"cartilage-auricula", text:"Cartilage of auricula: the elastic cartilage skeleton of the pinna that funnels sound into the external acoustic meatus.", box:{x:34.3,y:0.9,w:22.4,h:3.8} },
          { id:"attic", text:"Attic (epitympanic recess): the space above the tympanic membrane housing the head of the malleus and body of the incus, the classic site where attic cholesteatoma forms.", box:{x:40.3,y:4.3,w:6.7,h:3.5} },
          { id:"incus", text:"Incus: the middle ossicle, bridging the malleus to the stapes via the incudostapedial joint.", box:{x:43.0,y:8.1,w:8.2,h:3.5} },
          { id:"malleus", text:"Malleus: the first and largest ossicle; its handle (manubrium) is embedded in the tympanic membrane.", box:{x:47.8,y:11.9,w:10.0,h:3.8} },
          { id:"tympanic-cavity", text:"Tympanic cavity: the air-filled middle-ear space housing the ossicular chain, between the tympanic membrane and the inner ear.", box:{x:51.8,y:15.8,w:18.2,h:2.5} },
          { id:"tensor-tympani", text:"Tensor tympani: innervated by CN V3, it inserts near the malleus neck and dampens loud sound by tensing the tympanic membrane.", box:{x:58.0,y:18.1,w:18.2,h:3.0} },
          { id:"eac", text:"External acoustic meatus: outer third cartilaginous, inner two-thirds bony, the boundary that matters for otoscopy technique and canal-wall surgery.", box:{x:25.3,y:42.8,w:16.2,h:9.3} },
          { id:"mastoid-process", text:"Mastoid process: the air-cell-containing bony prominence behind the ear that communicates with the middle ear via the aditus ad antrum, the route mastoiditis and cholesteatoma spread posteriorly.", box:{x:27.5,y:64.2,w:8.7,h:5.1} },
          { id:"tympanic-part-temporal", text:"Tympanic part of the temporal bone: forms the bony ext. acoustic meatus and part of the middle-ear floor.", box:{x:43.0,y:54.2,w:11.5,h:6.6} },
          { id:"auditory-tube", text:"Auditory (Eustachian) tube: connects the middle ear to the nasopharynx, equalizing pressure and draining secretions.", box:{x:62.0,y:47.7,w:19.2,h:5.7} },
          { id:"nasal-part-pharynx", text:"Nasal part of the pharynx (nasopharynx): where the auditory tube opens, the reason nasopharyngeal disease can cause unilateral middle-ear effusion.", box:{x:89.3,y:52.1,w:10.5,h:13.8} },
          { id:"lev-veli-palat", text:"Levator veli palatini: runs alongside the auditory tube and helps actively open it on swallowing/yawning, aided by tensor veli palatini.", box:{x:63.7,y:55.3,w:20.2,h:12.6} },
          { id:"styloid-process", text:"Styloid process: a slender bony projection just anteroinferior to the mastoid, giving attachment to the stylohyoid ligament and several muscles.", box:{x:54.5,y:75.1,w:10.0,h:5.5} },
          { id:"tympanic-membrane", text:"Tympanic membrane: the three-layered drum that vibrates with sound and transmits energy to the ossicular chain.", box:{x:40.8,y:86.2,w:23.9,h:3.0} },
          { id:"bony-part-eam", text:"Bony part of the external acoustic meatus: the inner two-thirds of the canal, thin-skinned and pain-sensitive, why bony-canal manipulation hurts more.", box:{x:24.5,y:90.2,w:15.5,h:6.6} },
          { id:"cartilaginous-part-eam", text:"Cartilaginous part of the external acoustic meatus: the outer third, containing cerumen glands and hair follicles.", box:{x:0.5,y:90.2,w:20.0,h:7.9} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "tm-photo",
        title: "Right tympanic membrane",
        note: "Gray's Anatomy plate 909: the otoscopic view, same landmarks as the schematic below. Test yourself here first, then check the simplified diagram.",
        src: "assets/img/figures/tympanic-membrane.png",
        source: "Fig. 909, “Membrana Tympani, Right Side.” Gray's Anatomy of the Human Body, 20th ed. (1918), illustrated by Henry Vandyke Carter. Public domain. Via Wikimedia Commons (commons.wikimedia.org/wiki/File:Gray909.png).",
        labels: [
          { id:"post-malleolar-fold", text:"Posterior malleolar fold: runs from the lateral (short) process of the malleus back to the annulus, marking the pars tensa's upper-posterior border.", box:{x:39.6,y:3.4,w:28.0,h:3.3} },
          { id:"long-crus-incus", text:"Long crus (process) of incus: seen as a faint vertical line through the postero-superior drum, continuing down to the stapes.", box:{x:15.3,y:8.8,w:26.0,h:3.4} },
          { id:"pars-flaccida", text:"Pars flaccida (Shrapnell's membrane): the lax portion above the malleolar folds, the classic site where a retraction-pocket cholesteatoma begins.", box:{x:60.2,y:10.1,w:18.0,h:4.6} },
          { id:"lat-proc-malleus", text:"Lateral (short) process of malleus: the prominent point at the junction of pars flaccida and pars tensa.", box:{x:61.8,y:15.5,w:29.8,h:4.9} },
          { id:"ant-malleolar-fold", text:"Anterior malleolar fold: mirrors the posterior fold anteriorly, marking the pars tensa's upper-anterior border.", box:{x:63.1,y:21.0,w:29.3,h:5.2} },
          { id:"manubrium-malleus", text:"Manubrium (handle) of malleus: runs from the umbo up to the lateral process, visible as a whitish streak through the drum.", box:{x:1.3,y:32.0,w:24.0,h:9.5} },
          { id:"postero-superior-quadrant", text:"Postero-superior quadrant: houses the incus and stapes deep to it, the danger quadrant for ossicular erosion by attic disease.", box:{x:0.7,y:42.7,w:23.3,h:8.5} },
          { id:"antero-superior-quadrant", text:"Antero-superior quadrant: overlies the Eustachian tube orifice and tensor tympani anteriorly.", box:{x:76.2,y:50.0,w:23.1,h:7.6} },
          { id:"postero-inferior-quadrant", text:"Postero-inferior quadrant: the preferred site for a safe myringotomy incision, avoiding the ossicles and chorda tympani.", box:{x:2.2,y:56.1,w:22.9,h:8.5} },
          { id:"umbo", text:"Umbo: the most medial (depressed) point of the drum, where the malleus tip inserts, the reference point for the four quadrants.", box:{x:76.2,y:59.5,w:7.3,h:3.4} },
          { id:"cone-of-light", text:"Cone of light (light reflex): the antero-inferior reflection of the otoscope light off the pars tensa, an orientation landmark, not a discrete structure.", box:{x:67.3,y:80.5,w:18.2,h:4.6} },
          { id:"antero-inferior-quadrant", text:"Antero-inferior quadrant: the most common site for a traumatic or chronic tympanic membrane perforation.", box:{x:34.7,y:92.7,w:38.0,h:4.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "middle-ear-photo",
        title: "Tympanic membrane viewed from within",
        note: "Gray's Anatomy plate 912: the medial (middle-ear) surface of the drum, showing the malleus, chorda tympani, and facial nerve running close by.",
        src: "assets/img/figures/middle_ear_anatomy_real.png",
        source: "Fig. 912, “Right Membrana Tympani, Viewed from Within.” Gray's Anatomy of the Human Body, 20th ed. (1918), illustrated by Henry Vandyke Carter. Public domain. Via Wikimedia Commons (commons.wikimedia.org/wiki/File:Gray912.png).",
        labels: [
          { id:"superior-ligament-malleolus", text:"Superior ligament of the malleus: suspends the head of the malleus from the tegmen tympani in the epitympanum.", box:{x:35.2,y:1.8,w:19.6,h:3.8} },
          { id:"epitympanic-recess", text:"Epitympanic recess (attic): houses the malleus head and incus body above the tympanic membrane, poorly ventilated and prone to retraction/cholesteatoma.", box:{x:58.2,y:1.8,w:11.0,h:3.3} },
          { id:"neck-of-malleus", text:"Neck of malleus: the narrowed segment between the head and the lateral process/manubrium.", box:{x:20.2,y:17.3,w:8.0,h:3.3} },
          { id:"head-of-malleus", text:"Head of malleus: the rounded superior end that articulates with the body of the incus in the epitympanum.", box:{x:36.2,y:19.3,w:9.8,h:6.0} },
          { id:"articular-surface-incus", text:"Articular surface for the body of the incus: the incudomalleolar joint, transmitting vibration from malleus to incus.", box:{x:75.6,y:14.7,w:19.4,h:4.2} },
          { id:"anterior-ligament-malleolus", text:"Anterior ligament and anterior process of the malleus: anchors the malleus anteriorly via the petrotympanic (Glaserian) fissure.", box:{x:2.2,y:22.7,w:20.4,h:7.6} },
          { id:"flaccid-portion-tympani", text:"Flaccid portion of the membrana tympani (pars flaccida): the lax segment above the lateral process, the classic attic-cholesteatoma origin site.", box:{x:78.0,y:22.9,w:19.6,h:3.8} },
          { id:"posterior-tympanic-spine", text:"Posterior tympanic spine: a bony projection of the tympanic annulus posteriorly, near the chorda tympani's exit.", box:{x:86.2,y:27.6,w:9.8,h:6.4} },
          { id:"insertion-tensor-tympani", text:"Insertion of tensor tympani muscle: attaches near the neck of the malleus; contraction dampens ossicular chain movement.", box:{x:11.4,y:33.3,w:12.0,h:6.3} },
          { id:"chorda-tympani-nerve", text:"Chorda tympani nerve: a branch of CN VII crossing the middle ear medial to the malleus, carrying taste from the anterior two-thirds of the tongue, at risk in middle-ear/mastoid surgery.", box:{x:27.4,y:35.6,w:55.0,h:8.4} },
          { id:"glaserian-fissure", text:"Glaserian (petrotympanic) fissure: a narrow cleft anterior to the malleus through which the chorda tympani exits the middle ear.", box:{x:1.4,y:46.7,w:17.8,h:4.0} },
          { id:"tympanic-orifice-chorda", text:"Tympanic orifice of the canal for the chorda tympani nerve: where the chorda tympani enters the middle-ear cavity posteriorly.", box:{x:86.8,y:39.3,w:12.0,h:11.8} },
          { id:"handle-of-malleus", text:"Handle (manubrium) of malleus: embedded within the fibrous layer of the tympanic membrane, seen here from its medial (middle-ear) surface.", box:{x:37.6,y:40.4,w:8.4,h:21.8} },
          { id:"facial-nerve", text:"Facial nerve (CN VII): runs in the fallopian canal just posterosuperior to the middle ear before exiting at the stylomastoid foramen, vulnerable in mastoid/middle-ear surgery.", box:{x:64.8,y:54.7,w:13.6,h:36.4} },
          { id:"eustachian-tube", text:"Eustachian tube: connects the middle ear to the nasopharynx, equalizing pressure and draining secretions; dysfunction causes effusion and conductive loss.", box:{x:8.6,y:81.1,w:13.4,h:4.0} },
          { id:"tense-portion-tympani", text:"Tense portion of the membrana tympani (pars tensa): the taut three-layered bulk of the drum, viewed here from its medial surface.", box:{x:27.6,y:92.7,w:27.8,h:4.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "labyrinth-photo",
        title: "Bony (osseous) labyrinth: inner ear",
        note: "Gray's Anatomy plate 920, the right bony labyrinth from the lateral side: cochlea (hearing) and the vestibule + semicircular canals (balance) in one piece.",
        src: "assets/img/figures/inner-ear-labyrinth.png",
        source: "Fig. 920, “Right Osseous Labyrinth, Lateral View.” Gray's Anatomy of the Human Body, 20th ed. (1918), illustrated by Henry Vandyke Carter. Public domain. Via Wikimedia Commons (commons.wikimedia.org/wiki/File:Gray920.png).",
        labels: [
          { id:"superior-canal", text:"Superior semicircular canal: senses rotation in the sagittal plane; its arch corresponds to the arcuate eminence on the middle cranial fossa floor.", box:{x:29.4,y:11.2,w:15.6,h:18.9} },
          { id:"common-crus", text:"Common crus: the shared limb where the superior and posterior semicircular canals join before entering the vestibule.", box:{x:28.8,y:35.3,w:9.2,h:13.5} },
          { id:"ampulla-superior", text:"Ampulla of the superior semicircular canal: contains the crista ampullaris, sensing angular acceleration in that canal's plane.", box:{x:46.8,y:37.5,w:8.8,h:6.9} },
          { id:"ampulla-lateral", text:"Ampulla of the lateral semicircular canal: the canal most easily tested at the bedside (horizontal head-impulse test, caloric testing).", box:{x:42.8,y:50.4,w:9.2,h:3.6} },
          { id:"lateral-canal", text:"Lateral (horizontal) semicircular canal: oriented roughly 30 degrees up from horizontal; the canal most often involved in BPPV after the posterior canal.", box:{x:13.2,y:51.2,w:25.6,h:13.5} },
          { id:"posterior-canal", text:"Posterior semicircular canal: the canal most commonly affected in BPPV, tested with the Dix-Hallpike maneuver and treated with the Epley maneuver.", box:{x:0.1,y:50.4,w:12.4,h:33.2} },
          { id:"ampulla-posterior", text:"Ampulla of the posterior semicircular canal: houses the crista ampullaris for that canal, the site of canalithiasis in posterior-canal BPPV.", box:{x:33.0,y:57.5,w:11.4,h:4.0} },
          { id:"vestibular-fenestra", text:"Vestibular fenestra (oval window): where the stapes footplate sits, transmitting vibration into the perilymph of the vestibule, the site fixed in otosclerosis.", box:{x:43.8,y:63.0,w:17.0,h:9.6} },
          { id:"vestibule", text:"Vestibule: the central chamber of the bony labyrinth, containing the utricle and saccule, continuous with the semicircular canals and cochlea.", box:{x:51.2,y:74.8,w:13.0,h:6.6} },
          { id:"cochlear-fenestra", text:"Cochlear fenestra (round window): a membrane-covered opening that allows pressure release from cochlear fluid waves driven by the stapes.", box:{x:45.6,y:59.8,w:12.0,h:6.8} },
          { id:"cochlea", text:"Cochlea: the spiral, fluid-filled organ of hearing, making about 2.5 turns around the modiolus.", box:{x:72.2,y:58.6,w:17.4,h:13.7} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "ear-cross-section",
        title: "The ear in cross-section",
        note: "Lateral (outside) on the left → medial (inside) on the right. Hide the labels, name each structure, then reveal to check.",
        src: "assets/img/figures/ear_cross_section.png",
        source: "The Ear in Cross-Section (External, Middle, Inner). nidcd.nih.gov.",
        labels: [
          { id:"pinna", text:"Pinna (auricle): the cartilaginous outer ear that funnels sound into the canal and helps localize sound.", box:{x:2.6,y:40.8,w:8.9,h:3.6} },
          { id:"temporal-bone", text:"Temporal bone: the skull bone that houses the entire external, middle, and inner ear.", box:{x:29.6,y:37.6,w:15.3,h:7.4} },
          { id:"ear-canal", text:"External auditory canal: outer 1/3 cartilaginous (cerumen glands), inner 2/3 bony — why you pull the pinna up-and-back in adults for otoscopy.", box:{x:32.0,y:70.6,w:9.7,h:3.3} },
          { id:"eardrum", text:"Eardrum (tympanic membrane): vibrates with incoming sound and transmits that energy to the ossicular chain.", box:{x:45.1,y:70.6,w:8.9,h:3.3} },
          { id:"malleus", text:"Malleus: the first and largest ossicle; its handle (manubrium) attaches directly to the eardrum.", box:{x:47.1,y:29.4,w:8.9,h:3.6} },
          { id:"incus", text:"Incus: the middle ossicle, bridging the malleus to the stapes.", box:{x:56.3,y:53.5,w:7.2,h:3.4} },
          { id:"stapes", text:"Stapes: the smallest bone in the body; its footplate sits in the oval window and drives cochlear fluid waves.", box:{x:52.5,y:25.9,w:9.0,h:3.5} },
          { id:"scc", text:"Semicircular canals: three fluid-filled loops that sense rotational head movement (angular acceleration) for balance.", box:{x:59.6,y:19.0,w:13.3,h:8.5} },
          { id:"vestibular-nerve", text:"Vestibular nerve: carries balance signals from the semicircular canals and vestibule to the brainstem.", box:{x:73.7,y:27.0,w:11.5,h:6.5} },
          { id:"auditory-nerve", text:"Auditory (cochlear) nerve: carries sound signals from the cochlea's hair cells to the brainstem.", box:{x:84.7,y:35.2,w:12.7,h:6.6} },
          { id:"et", text:"Eustachian tube: connects the middle ear to the nasopharynx, equalizing pressure and draining secretions; dysfunction causes effusion and conductive loss.", box:{x:53.8,y:72.0,w:11.9,h:7.7} },
          { id:"coch", text:"Cochlea: the spiral, fluid-filled organ of hearing; hair cells along its length transduce sound frequencies into neural signals.", box:{x:81.6,y:80.0,w:9.2,h:3.8} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "tm-right",
        title: "Right tympanic membrane: landmarks",
        note: "Confirm laterality/orientation with faculty. Name each landmark, then reveal.",
        src: "assets/img/figures/tympanic_membrane_landmarks.png",
        source: "Normal Right Tympanic Membrane Landmarks (Otoscopic View). oxfordmedicaleducation.com.",
        labels: [
          { id:"l1", text:"Posterior malleolar fold: runs from the lateral (short) process of the malleus back to the annulus, marking the pars tensa's upper-posterior border.", box:{x:10.6,y:5.1,w:18.3,h:3.8} },
          { id:"l2", text:"Pars flaccida (Shrapnell's membrane): the lax portion above the malleolar folds — the classic site where a retraction-pocket cholesteatoma begins.", box:{x:50.0,y:0.6,w:23.1,h:3.8} },
          { id:"l3", text:"Anterior malleolar fold: mirrors the posterior fold anteriorly, marking the pars tensa's upper-anterior border.", box:{x:76.6,y:11.6,w:20.1,h:3.8} },
          { id:"l4", text:"Short (lateral) process of malleus: the lateral prominence at the junction of pars flaccida and pars tensa.", box:{x:76.9,y:22.5,w:20.4,h:6.8} },
          { id:"l5", text:"Incus: seen as a faint shadow through the translucent postero-superior drum on otoscopy.", box:{x:3.2,y:25.2,w:8.3,h:3.4} },
          { id:"l6", text:"Umbo: the most medial (depressed) point of the drum, where the malleus tip inserts — the reference point for the four quadrants.", box:{x:0.3,y:50.4,w:8.6,h:3.4} },
          { id:"l7", text:"Manubrium (handle) of malleus: runs from the umbo up to the short process, visible as a whitish streak through the drum.", box:{x:80.4,y:55.8,w:16.9,h:7.2} },
          { id:"l8", text:"Tympanic annulus: the fibrocartilaginous ring anchoring the pars tensa into the bony sulcus of the external canal.", box:{x:0.0,y:72.2,w:10.9,h:3.8} },
          { id:"l9", text:"Pars tensa: the taut, three-layered bulk of the drum below the malleolar folds — where perforations and most retraction disease are staged.", box:{x:16.3,y:84.8,w:16.5,h:4.1} },
          { id:"l10", text:"Cone of light (light reflex): antero-inferior reflection of the otoscope light off the pars tensa — an orientation landmark, not a discrete structure.", box:{x:57.1,y:85.8,w:18.3,h:3.7} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "middle-ear-danger-relationships",
        title: "The middle ear and mastoid danger zone",
        note: "Hand-drawn schematic, not to scale. Shows how closely the facial nerve, tegmen tympani, sigmoid sinus, and ossicular chain sit within the same small middle-ear/mastoid space, the reason disease or surgery here can threaten all four at once. Click a landmark to reveal its label.",
        src: "assets/img/figures/middle_ear_dangerous_relationships.png",
        source: "The Middle Ear and Mastoid Danger Zone Anatomic Relationships. Illustration generated with Google Gemini (adapted from Bagla).",
        labels: [
          { id:"lat-scc", text:"Prominence of the lateral semicircular canal: bulges into the mastoid antrum just above the facial canal — the surgical landmark used to find the facial nerve during mastoidectomy.", box:{x:5.1,y:3.3,w:29.7,h:3.6} },
          { id:"facial-canal-prom", text:"Prominence of the facial canal: the bony ridge overlying the tympanic segment of CN VII as it runs above the oval window — thin and dehiscent in up to 30% of temporal bones, so it's easily eroded by cholesteatoma or infection.", box:{x:38.7,y:3.3,w:19.3,h:3.6} },
          { id:"tegmen-tympani", text:"Tegmen tympani: the thin bony (and dural) plate roofing the middle ear/mastoid; erosion lets infection track into the middle cranial fossa (meningitis, abscess).", box:{x:61.2,y:3.3,w:12.3,h:3.6} },
          { id:"promontory", text:"Promontory: the bulge overlying the cochlea's basal turn, between the oval and round windows; carries the tympanic nerve plexus (Jacobson's nerve) on its surface.", box:{x:46.7,y:6.9,w:9.0,h:3.6} },
          { id:"auditory-tube-muscle", text:"Auditory (Eustachian) tube muscle complex: the cartilaginous tube's opening is driven by the tensor veli palatini, not the tensor tympani — dysfunction here drives otitis media with effusion.", box:{x:74.6,y:11.2,w:15.4,h:3.9} },
          { id:"tensor-tympani-muscle", text:"Tensor tympani: CN V3-innervated muscle that tenses the malleus/eardrum, dampening loud sounds (part of the acoustic reflex).", box:{x:75.1,y:16.3,w:16.7,h:3.6} },
          { id:"pharyngeal-tube", text:"Pharyngeal (cartilaginous) end of the auditory tube, opening into the nasopharynx — the route for reflux, infection, and pressure equalization.", box:{x:78.6,y:28.2,w:13.2,h:3.9} },
          { id:"aditus-mastoid-antrum", text:"Aditus ad antrum: the narrow channel connecting the epitympanum to the mastoid antrum — the bottleneck that, when blocked, lets middle-ear infection wall itself off into mastoiditis.", box:{x:7.3,y:24.1,w:14.6,h:6.9} },
          { id:"oval-window", text:"Oval (vestibular) window: the stapes footplate seats here and drives cochlear perilymph — the target of stapedotomy in otosclerosis.", box:{x:8.7,y:38.6,w:10.1,h:3.6} },
          { id:"pyramidal-eminence", text:"Pyramidal eminence: a small conical projection housing the stapedius muscle (CN VII), just anterior to the facial recess.", box:{x:3.5,y:47.6,w:15.4,h:3.6} },
          { id:"chorda-tympani-nerve", text:"Chorda tympani: branches off CN VII and crosses the middle ear medial to the malleus, carrying taste from the anterior 2/3 tongue — at risk in chronic otitis media and ossicular surgery.", box:{x:2.8,y:63.7,w:15.2,h:3.6} },
          { id:"lesser-petrosal-nerve", text:"Lesser petrosal nerve: carries parasympathetic fibers (from CN IX via the tympanic plexus) to the otic ganglion, ultimately supplying the parotid gland.", box:{x:78.1,y:47.5,w:18.6,h:2.9} },
          { id:"branch-internal-carotid-plexus", text:"Branch from the internal carotid (sympathetic) plexus joining the tympanic plexus on the promontory — the anatomic basis for Jacobson's/tympanic plexus mixed autonomic-CN IX innervation.", box:{x:77.1,y:51.7,w:17.1,h:5.9} },
          { id:"sympathetic-plexus", text:"Sympathetic plexus draped over the internal carotid artery as it ascends through the carotid canal, immediately anteromedial to the middle ear.", box:{x:82.4,y:67.6,w:12.9,h:3.6} },
          { id:"internal-carotid-artery", text:"Internal carotid artery: runs just anteromedial to the middle ear/cochlea in the carotid canal — an aberrant or dehiscent ICA here is a critical surgical hazard.", box:{x:80.5,y:79.1,w:15.3,h:3.6} },
          { id:"round-window", text:"Round window: membrane-covered opening that releases pressure from the scala tympani, allowing cochlear fluid to move — its niche is a target for intratympanic drug delivery.", box:{x:27.5,y:80.0,w:11.0,h:3.3} },
          { id:"facial-nerve-vii", text:"Facial nerve (CN VII), vertical (mastoid) segment: descends just posterior to the middle ear before exiting the stylomastoid foramen — the most common site of iatrogenic injury.", box:{x:9.6,y:89.9,w:12.8,h:2.6} },
          { id:"chorda-tympani-nerve-inset", text:"Chorda tympani nerve branching off the vertical facial nerve — shown here in cross-section entering the middle ear to cross behind the malleus.", box:{x:2.3,y:94.4,w:18.3,h:2.1} },
          { id:"tympanic-nerve-plexus", text:"Tympanic nerve plexus (Jacobson's plexus, CN IX): lies on the promontory and supplies general sensation to the middle ear plus parasympathetics via the lesser petrosal nerve.", box:{x:65.1,y:84.4,w:22.2,h:2.6} },
          { id:"tympanic-branch-glossopharyngeal", text:"Tympanic branch of the glossopharyngeal nerve (CN IX, Jacobson's nerve): enters the middle ear through the inferior tympanic canaliculus to form the tympanic plexus.", box:{x:56.3,y:88.1,w:36.6,h:2.9} },
          { id:"internal-jugular-vein", text:"Internal jugular vein (jugular bulb): sits directly inferior to the middle ear floor — a high or dehiscent jugular bulb is a recognized cause of pulsatile tinnitus and a surgical hazard.", box:{x:54.2,y:93.5,w:16.7,h:2.4} }
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
        tagline: "Conductive vs sensorineural: the bedside tuning-fork test that splits every hearing-loss workup in two.",
        html:
          "<p><strong>Conductive</strong> (something blocks sound reaching the cochlea) vs <strong>sensorineural</strong> (cochlea or CN VIII). Localize at the bedside with <strong>Weber + Rinne (512 Hz)</strong>.</p>" +
          "<ul><li><strong>Conductive causes:</strong> cerumen, middle-ear effusion, TM perforation, otosclerosis, ossicular problems.</li>" +
          "<li><strong>Sensorineural causes:</strong> presbycusis, noise, ototoxicity, sudden SNHL, and, if <strong>asymmetric</strong>, retrocochlear lesions (vestibular schwannoma).</li></ul>" + "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/hearing_loss_ear.png' alt='Hearing loss ear' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Conductive vs sensorineural hearing loss, localized by lesion site along the auditory pathway.</figcaption></figure>"
      },
      {
        id: "otalgia-primary-referred",
        title: "Otalgia: primary vs referred",
        tagline: "Ear pain with a normal ear exam: which distant structures actually refer pain here, and when that pattern is a red flag.",
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
        tagline: "Otitis externa, AOM, cholesteatoma, and necrotizing otitis externa side by side -- and which ones simply cannot wait.",
        html:
          "<ul><li><strong>Otitis externa:</strong> canal infection; tragal tenderness, discharge.</li>" +
          "<li><strong>Acute otitis media:</strong> middle-ear infection; bulging TM, effusion.</li>" +
          "<li><strong>Cholesteatoma:</strong> keratin sac, often from a retraction pocket; <strong>painless foul otorrhea + attic crust/retraction</strong>, erodes bone. Refer. See the dedicated block below for the mechanism and why it's surgical.</li>" +
          "<li><strong>Necrotizing (malignant) otitis externa:</strong> occurs in diabetic or immunocompromised patients, with severe deep pain and granulation tissue in the canal; skull-base osteomyelitis risk. See the dedicated block below for the organism and cranial-nerve progression.</li></ul>" + "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/otoscopy-comparison-gemini.png' alt='Otoscopy comparison gemini' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Side-by-side otoscopic comparison of otitis externa, AOM, cholesteatoma, and necrotizing otitis externa.</figcaption></figure>"
      },
      {
        id: "otitis-externa-management",
        title: "Acute otitis externa: first-line management",
        tagline: "Why topical, not oral, antibiotics are first-line for swimmer's ear, and how TM status changes which drop is safe.",
        html:
          "<ul><li><strong>Topical therapy is first-line, not oral antibiotics</strong> &mdash; topical agents reach far higher local concentrations, have fewer systemic effects, and limit resistance (AAO-HNS 2014). Most common pathogens: <em>Pseudomonas aeruginosa</em> and <em>Staphylococcus aureus</em>.</li>" +
          "<li><strong>Aural toilet</strong> (cleaning/microsuction) and pain control are integral; a wick is placed when canal edema prevents drops from entering.</li>" +
          "<li><strong>Agent choice depends on TM status:</strong> with a possible perforation or tube, use a non-ototoxic topical fluoroquinolone (ciprofloxacin/ofloxacin, &plusmn; steroid); avoid topical aminoglycosides (neomycin, gentamicin) when the TM is not intact, given ototoxicity risk.</li>" +
          "<li><strong>Oral antibiotics</strong> are reserved for infection spreading beyond the canal (cellulitis), or the immunocompromised/diabetic patient &mdash; the same population in whom necrotizing OE must be excluded (see the necrotizing otitis externa block above).</li></ul>"
      },
      {
        id: "dizziness-peripheral-central",
        title: "Dizziness: peripheral vs central",
        tagline: "BPPV, vestibular neuritis, and Ménière's vs the central mimics -- and exactly when (and when not) to reach for HINTS.",
        html:
          "<ul><li><strong>BPPV:</strong> brief positional vertigo; <strong>Dix-Hallpike</strong> reproduces it; treat with Epley.</li>" +
          "<li><strong>Vestibular neuritis:</strong> acute constant vertigo for days, no hearing loss, often post-viral.</li>" +
          "<li><strong>Ménière's:</strong> episodic vertigo + <strong>fluctuating SNHL + tinnitus + aural fullness</strong>; see the dedicated block below for the formal diagnostic criteria and management ladder.</li>" +
          "<li><strong>Central red flags:</strong> for a patient with <strong>continuous vertigo and spontaneous nystagmus</strong> (acute vestibular syndrome), use <strong>HINTS</strong> — a normal/negative head-impulse test, direction-changing or vertical nystagmus, or skew deviation each indicate a central cause (any single central component overrides the others). HINTS does <strong>not</strong> apply to brief positional vertigo (BPPV) or to a patient without spontaneous nystagmus; the head-impulse test in those settings is misleading.</li></ul>"
      },
      {
        id: "otosclerosis-chl-differential",
        title: "Conductive hearing loss with an intact tympanic membrane: the differential",
        tagline: "Otosclerosis, OME, and ossicular discontinuity: three causes of a normal-looking drum with abnormal hearing, told apart by tympanogram.",
        html:
          "<p>When conductive hearing loss is confirmed (Weber lateralizes to the affected ear, Rinne negative) but the tympanic membrane looks completely normal, three diagnoses dominate, and tympanometry usually separates them before imaging is ever needed.</p>" +
          "<ul>" +
          "<li><strong>Otosclerosis:</strong> abnormal bone remodeling fixes the stapes footplate in the oval window. Classically a <strong>young adult</strong> (20s-40s) with a <strong>family history</strong> (autosomal dominant, variable penetrance), <strong>bilateral in roughly 70-80%</strong>, and often <strong>worsens in pregnancy</strong>. Tympanogram is <strong>Type As</strong> (normal peak pressure, reduced compliance/shallow peak): the drum moves normally but the ossicular chain is stiff. The audiogram classically shows a <span class=\"term\" data-def=\"An artifactual dip in bone conduction around 2000 Hz on the audiogram, caused by stapes fixation; it resolves after successful stapes surgery.\">Carhart notch</span> (an artifactual dip in bone conduction around 2000 Hz that resolves after successful surgery).</li>" +
          "<li><strong>Otitis media with effusion (OME):</strong> fluid behind an intact drum without acute infection signs; Eustachian tube dysfunction is the usual driver. Tympanogram is <strong>Type B</strong> (flat, no discernible peak). Common in children; a <strong>new unilateral</strong> effusion in an <strong>adult</strong> needs the nasopharynx examined to exclude a mass.</li>" +
          "<li><strong>Ossicular discontinuity:</strong> most often the incudostapedial joint, from prior trauma, infection, or cholesteatoma erosion. Tympanogram can show an abnormally <strong>high-compliance Type Ad</strong> peak (a floppy, hypermobile system), the opposite mechanical picture from otosclerosis.</li>" +
          "</ul>" +
          "<p>Management follows the diagnosis: OME is watched or ventilated (tubes); otosclerosis and ossicular discontinuity are surgical (stapedectomy/stapedotomy or ossicular reconstruction) or managed with amplification if surgery isn't wanted or appropriate. Stapes surgery for bilateral otosclerosis is typically staged, operating the <strong>worse-hearing ear first</strong>, given the small risk of a \"dead ear\" — a frequently asked counseling point.</p>" + "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/tympanograms.png' alt='Tympanograms' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Differentiating otosclerosis (Type As), OME (Type B), and ossicular discontinuity (Type Ad) by tympanogram pattern.</figcaption></figure>"
      },
      {
        id: "cholesteatoma-depth",
        title: "Cholesteatoma: mechanism, classification, and why it's surgical",
        tagline: "How a trapped sac of skin keratin behind the eardrum erodes bone, why drops never fix it, and what mastoidectomy actually removes.",
        html:
          "<p>A cholesteatoma is not a tumor. It's a sac of stratified squamous epithelium and trapped keratin debris growing where it doesn't belong, expanding by pressure and by releasing enzymes that resorb adjacent bone.</p>" +
          "<ul>" +
          "<li><strong>Acquired (primary):</strong> the common type. Chronic Eustachian tube dysfunction creates negative middle-ear pressure, drawing the <span class=\"term\" data-def=\"The small, floppy upper portion of the tympanic membrane above the malleus folds -- the weakest part of the drum and the classic starting point for a retraction-pocket cholesteatoma.\">pars flaccida</span> (or, less often, the postero-superior pars tensa) inward into a <strong>retraction pocket</strong>. Desquamated keratin accumulates in the pocket instead of migrating out normally, and the sac enlarges.</li>" +
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
          "<p><strong>Mastoidectomy</strong>, surgical removal of the sac and diseased bone, is the definitive treatment; topical/oral antibiotics only quiet secondary infection while the structural problem remains.</p>" + "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/cholesteatoma_TM_perforation.png' alt='Cholesteatoma TM perforation' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Cholesteatoma pathophysiology (retraction pocket, keratin accumulation, bone erosion) and why mastoidectomy is required.</figcaption></figure>"
      },
      {
        id: "vestibular-schwannoma-workup",
        title: "Vestibular schwannoma: workup and the management ladder",
        tagline: "Asymmetric hearing loss or tinnitus: the imaging that finds a millimeter-scale CN VIII tumor, and how observation, radiosurgery, and microsurgery are chosen.",
        html:
          "<p>A vestibular schwannoma (acoustic neuroma) is a benign, slow-growing Schwann-cell tumor of the vestibular division of CN VIII, arising in the internal auditory canal. It's the classic explanation for <strong>asymmetric/unilateral SNHL or tinnitus</strong>, can cause disequilibrium (true vertigo is uncommon; slow growth allows central compensation), and, as it enlarges, can produce trigeminal (facial numbness) or facial nerve symptoms from cerebellopontine-angle/brainstem compression.</p>" +
          "<ul>" +
          "<li><strong>Imaging:</strong> <strong>MRI of the internal auditory canals with and without gadolinium contrast</strong> is the study of choice: it detects tumors a few millimeters across, far below CT's resolution.</li>" +
          "<li><strong>Management is a size/growth/patient decision, not one default answer:</strong>" +
          "<ul><li><strong>Observation</strong> with serial MRI: reasonable for small, non-growing tumors, especially in older patients or those with useful hearing and minimal symptoms; many grow slowly or not at all.</li>" +
          "<li><strong>Stereotactic radiosurgery (SRS)</strong>: for small-moderate tumors, or when surgery carries higher risk; aims to arrest growth rather than remove the tumor, with a lower immediate facial-nerve risk than microsurgery.</li>" +
          "<li><strong>Microsurgical resection</strong>: for larger or growing tumors, or brainstem compression; the surgical approach (translabyrinthine, retrosigmoid, middle fossa) is chosen partly on whether preserving hearing is realistic.</li></ul></li>" +
          "</ul>" +
          "<p>Facial nerve function is tracked before and after any intervention using the <strong>House-Brackmann grading scale</strong> (Grade I = normal, Grade VI = total paralysis), the standard language for describing facial nerve outcomes in vestibular schwannoma care.</p>" + "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/vestibular_schwannoma_MRI.png' alt='Vestibular schwannoma MRI' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Vestibular schwannoma presentation, MRI IAC workup, and the observation/radiosurgery/microsurgery management ladder.</figcaption></figure>"
      },
      {
        id: "meniere-criteria-management",
        title: "Ménière's disease: diagnostic criteria and the step-up ladder",
        tagline: "The formal Bárány/AAO-HNS diagnostic criteria beyond the classic tetrad, and the five-step ladder from diet to ear-destructive surgery.",
        html:
          "<p>The Bárány Society/AAO-HNS (2015) consensus criteria formalize the diagnosis beyond the simple tetrad:</p>" +
          "<p><strong>Definite Ménière's disease</strong> requires all of the following:</p>" +
          "<ul>" +
          "<li>≥2 spontaneous vertigo episodes, each lasting <strong>20 minutes to 12 hours</strong></li>" +
          "<li><strong>Audiometrically documented</strong> low- to mid-frequency SNHL in the affected ear on at least one occasion before, during, or after an episode</li>" +
          "<li>Fluctuating aural symptoms (hearing, tinnitus, fullness) in that ear</li>" +
          "<li>No better explanation</li>" +
          "</ul>" +
          "<p><strong>Probable Ménière's disease</strong>: &ge;2 episodes of vertigo or dizziness each lasting <strong>20 minutes to 24 hours</strong> (a wider window than definite MD), fluctuating aural symptoms in the affected ear, and no better explanation &mdash; without the requirement for audiometrically documented SNHL.</p>" +
          "<p><strong>Step-up management</strong> (escalate only as needed):</p>" +
          "<ol>" +
          "<li><strong>Lifestyle/dietary:</strong> low-sodium diet and caffeine/alcohol moderation, first-line and low-risk. <strong>Betahistine</strong> is widely used as an adjunct here (especially outside the US) but is not FDA-approved for Ménière's, and evidence is conflicting/low-certainty &mdash; the well-designed BEMED RCT found no benefit over placebo, so it is not a guideline-mandated step.</li>" +
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
        tagline: "Skull-base osteomyelitis from a 'bad ear infection' in a diabetic patient -- the organism, the cranial-nerve spread pattern, and why it's weeks of IV therapy.",
        html:
          "<p><strong>Pseudomonas aeruginosa</strong> is the classic pathogen, invading through the fissures of Santorini and the bony-cartilaginous junction of the canal to cause osteomyelitis of the skull base, almost always in a <strong>diabetic</strong> (poor glycemic control) or otherwise <strong>immunocompromised</strong> patient. Pain is disproportionate to exam findings and often worse at night; granulation tissue at the bony-cartilaginous junction of the canal floor is the classic sign.</p>" +
          "<p><strong>Cranial nerve progression tracks how far the osteomyelitis has spread:</strong> <strong>CN VII</strong> is affected first and most often (it exits nearby via the <span class=\"term\" data-def=\"The opening in the skull base where the facial nerve (CN VII) exits the temporal bone, just behind the ear -- the first structure threatened as necrotizing otitis externa spreads.\">stylomastoid foramen</span>); further skull-base spread toward the jugular foramen threatens <strong>CN IX, X, XI</strong> (dysphagia, hoarseness, shoulder weakness), and <strong>CN XII</strong> (tongue weakness) if it extends to the hypoglossal canal. New cranial neuropathies signal advancing disease, not a new, separate problem.</p>" +
          "<p><strong>Workup and treatment:</strong> CT temporal bone shows bony erosion; <strong>MRI</strong> better delineates soft-tissue and marrow involvement; a <strong>technetium-99m bone scan</strong> is sensitive early but stays positive long after cure (not useful for following response), while a <strong>gallium-67 scan</strong> reflects active inflammation and is used to confirm treatment response. Treatment is <strong>prolonged (often 6-8 weeks) IV antipseudomonal antibiotics</strong> (e.g., an antipseudomonal fluoroquinolone or a beta-lactam/aminoglycoside combination) plus tight glycemic control and debridement of obvious necrotic tissue. This is not an outpatient-drops problem.</p>" + "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/necrotizing_otitis_externa.png' alt='Necrotizing otitis externa' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Necrotizing otitis externa pathogen, cranial-nerve progression from skull-base osteomyelitis, and treatment.</figcaption></figure>"
      }
    ],
    redFlags: [
      { t: "<b>Sudden SNHL (&lt;72h)</b>, otologic emergency: urgent audiogram, corticosteroids may be offered (shared decision-making), MRI." },
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
        { q: "Diagnosis and urgency?", a: "Sudden SNHL is an otologic emergency. Urgent audiogram and MRI for retrocochlear pathology are firm recommendations; corticosteroids may be offered within 2 weeks as a shared decision-making option (AAO-HNS 2019), reflecting frequent spontaneous recovery and weak placebo-controlled evidence." }
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
      teaching: "Painless, chronic, foul otorrhea + retraction/attic crust = cholesteatoma until proven otherwise.<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/cholesteatoma_TM_perforation.png' alt='Cholesteatoma TM perforation' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Chronic painless foul otorrhea with an attic retraction pocket, diagnostic of cholesteatoma.</figcaption></figure>"
    },
    {
      id: "case-bppv",
      ukmla: ["Vertigo", "Benign paroxysmal positional vertigo"],
      source: "AAO-HNSF Clinical Practice Guideline: BPPV (Update), 2017.",
      stem: "A <b>62-year-old</b> reports <b>seconds-long spinning</b> each time he rolls over in bed or looks up. Hearing is normal. Neuro exam is normal.",
      prompts: [
        { q: "Most likely diagnosis and confirming test?", a: "BPPV; confirm with the Dix-Hallpike maneuver (reproduces vertigo + characteristic nystagmus)." },
        { q: "What would push you toward a central cause?", a: "Features atypical for BPPV: positional nystagmus that is purely vertical (typically down-beating), non-fatiguing, or persistent, that does not match a specific canal plane, or that is accompanied by other neurologic signs. These suggest a central positional cause and warrant imaging for posterior-fossa pathology. (Note: the HINTS battery is for continuous acute vestibular syndrome, not positional vertigo — don't apply the head-impulse test here.)" }
      ],
      teaching: "Brief, positional, hearing intact = think BPPV; but always screen for atypical/central positional nystagmus before you settle."
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
      teaching: "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/necrotizing_otitis_externa.png' alt='Necrotizing otitis externa' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Progressive necrotizing otitis externa in a diabetic patient developing facial droop and hoarseness from skull-base spread.</figcaption></figure>New cranial neuropathies in otitis externa aren't a separate diagnosis to chase. They're the same disease spreading along the skull base, and they demand escalation, not another course of drops."
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
      teaching: "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/tympanograms.png' alt='Tympanograms' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Bilateral conductive hearing loss with a normal TM, family history, and pregnancy-related worsening, diagnostic of otosclerosis.</figcaption></figure>Bilateral conductive loss with a normal drum, a family history, and a young adult: think otosclerosis before you think 'wax I must have missed.'"
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
      teaching: "<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/vestibular_schwannoma_MRI.png' alt='Vestibular schwannoma MRI' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Progressive asymmetric SNHL and tinnitus worked up with MRI IAC, revealing a vestibular schwannoma, with management options discussed via House-Brackmann.</figcaption></figure>Vestibular schwannoma is the lesion an asymmetric-SNHL red flag is chasing: progressive unilateral hearing loss, tinnitus, and disequilibrium (not spinning vertigo) should trigger an MRI IAC with contrast, not a repeat audiogram in six months. Once found, the management ladder (observe → radiosurgery → resection) is chosen against the same facial-nerve-preservation tradeoff the House-Brackmann scale is built to describe."
    }
  ],

  /* ==================== CARDS TAB (active recall) ==================== */
  cards: [
    { id: "eac-anat", tags: ["OT", "anatomy"], milestones: ["MK1"], ukmla: ["Painful ear","Hearing loss"], source: "Standard otologic anatomy teaching.", front: "What innervates the external ear, and why does it matter clinically?",
      back: "CN <strong>V3</strong> (auriculotemporal), <strong>VII</strong>, <strong>IX</strong>, <strong>X</strong> (Arnold's nerve), and C2-C3. Because so many nerves converge, ear pain is frequently <strong>referred</strong> from the TMJ, teeth, throat, or larynx.<figure class='note-fig' data-credit=\"Sensory Innervation of the External Ear and Referred Otalgia Pathways. Illustration generated with Google Gemini.\"><img class='zoomable' src='assets/img/mc/38_external_ear_innervation_gemini.png' alt='External ear innervation' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Sensory innervation of the external ear and referred otalgia pathways.</figcaption></figure>" },
    { id: "eac-canal", tags: ["OT", "anatomy"], milestones: ["MK1"], ukmla: "Painful ear", source: "Standard otologic anatomy teaching.", front: "Describe the makeup of the external auditory canal.", back: "Outer ⅓ <strong>cartilaginous</strong> (contains cerumen glands), inner ⅔ <strong>bony</strong>. This is why you pull the pinna up-and-back (adult) to straighten it for otoscopy.<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/ear_anatomy_physiology_overview.png' alt='Ear anatomy physiology overview' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>External auditory canal composition: outer 1/3 cartilaginous (cerumen glands), inner 2/3 bony.</figcaption></figure>" },
    { id: "tm-landmarks2", tags: ["OT", "anatomy"], milestones: ["MK1","PC4"], ukmla: "Hearing loss", source: "Standard otoscopy teaching.", front: "Name the tympanic membrane landmarks.", back: "<ul><li><strong>Cone of light</strong> (antero-inferior)</li><li><strong>Umbo</strong> (central, most depressed)</li><li><strong>Manubrium + lateral process of malleus</strong></li><li><strong>Pars tensa</strong> and <strong>pars flaccida</strong></li></ul><figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/tympanic_membrane_landmarks.png' alt='Tympanic membrane landmarks' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Naming tympanic membrane landmarks (cone of light, umbo, manubrium, pars tensa/flaccida) on otoscopy.</figcaption></figure>" },
    { id: "ossicles", tags: ["OT", "anatomy"], milestones: ["MK1"], ukmla: "Hearing loss", source: "Standard otologic anatomy teaching.", front: "Name the ossicular chain in order and what it connects.", back: "<strong>Malleus → incus → stapes → oval window.</strong> It mechanically transmits and amplifies TM vibration into the cochlear fluid.<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/ossicles_joints.png' alt='Ossicles joints' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The ossicular chain (malleus, incus, stapes) and its mechanical connection from TM to oval window.</figcaption></figure>" },
    { id: "me-muscles", tags: ["OT", "anatomy"], milestones: ["MK1"], ukmla: "Hearing loss", source: "Standard otologic anatomy teaching.", front: "What are the two middle-ear muscles, their nerves, and their job?", back: "<strong>Tensor tympani</strong> (CN V3) and <strong>stapedius</strong> (CN VII). They reflexively <strong>dampen loud sounds</strong> (acoustic reflex). Because the stapedius mediates the acoustic reflex, a facial nerve palsy proximal to the stapedial branch can cause <strong>hyperacusis</strong> — a common pimp point linking this anatomy to the facial-palsy cards.<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/middle_ear_dangerous_relationships.png' alt='Middle ear dangerous relationships' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Tensor tympani (CN V3) and stapedius (CN VII), the two middle-ear muscles and the acoustic reflex.</figcaption></figure>" },
    { id: "et", tags: ["OT", "anatomy"], milestones: ["MK1","MK3"], ukmla: ["Hearing loss","Otitis media"], source: "Standard otologic anatomy teaching.", front: "What does the Eustachian tube connect, and what happens when it fails?", back: "Middle ear ↔ <strong>nasopharynx</strong>; equalizes pressure and drains the middle ear. Dysfunction → negative pressure, <strong>effusion</strong>, retraction, and conductive loss (common in kids)." },
    { id: "cn7-me", tags: ["OT", "anatomy"], milestones: ["MK1","PC4"], ukmla: "Facial weakness", source: "Standard otologic anatomy teaching.", front: "Why does the facial nerve matter in otology?", back: "<strong>CN VII</strong> courses through the temporal bone adjacent to the middle/inner ear, so it's at risk from cholesteatoma, tumor, necrotizing otitis externa, and surgery. <strong>Facial weakness + ear disease = red flag.</strong><figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/facial_nerve_ear_otology.png' alt='Facial nerve ear otology' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Why the facial nerve matters in otology: its course through the temporal bone and vulnerability to otologic disease.</figcaption></figure>" },
    { id: "chorda", tags: ["OT", "anatomy"], milestones: ["MK1"], ukmla: "Hearing loss", source: "Standard otologic anatomy teaching.", front: "What is the chorda tympani and what does it carry?", back: "A branch of <strong>CN VII</strong> that crosses the middle ear carrying <strong>taste from the anterior ⅔ of the tongue</strong> (and parasympathetics to submandibular/sublingual glands).<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/facial_nerve_ear_otology.png' alt='Facial nerve ear otology' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The chorda tympani (CN VII branch) crossing the middle ear, carrying taste from the anterior 2/3 of the tongue.</figcaption></figure>" },
    { id: "inner-div", tags: ["OT", "anatomy"], milestones: ["MK1"], ukmla: ["Hearing loss","Vertigo"], source: "Standard otologic anatomy teaching.", front: "Divide the inner ear by function.", back: "<strong>Cochlea</strong> = hearing; <strong>vestibule + semicircular canals</strong> = balance. Both are read out by <strong>CN VIII</strong> (cochlear + vestibular divisions).<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/inner_ear_anatomy.png' alt='Inner ear anatomy' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Dividing the inner ear by function: cochlea (hearing) vs vestibule + semicircular canals (balance), both read by CN VIII.</figcaption></figure>" },
    { id: "weber", tags: ["OT", "clinical"], milestones: ["PC4"], ukmla: "Hearing loss", source: "AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019: tuning-fork triage.", front: "Interpret the Weber test.", back: "512 Hz on the vertex. <strong>Conductive loss:</strong> lateralizes to the <strong>affected</strong> ear. <strong>SNHL:</strong> lateralizes to the <strong>better</strong> ear.<figure class='note-fig' data-credit='Weber and Rinne tuning-fork tests. Wikimedia Commons.'><img class='zoomable' src='assets/img/mc/image43.png' alt='Weber and Rinne tests' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Tuning-fork testing: Weber and Rinne in conductive vs sensorineural loss.</figcaption></figure><div class=\"tbl-scroll\"><table><thead><tr><th>Scenario</th><th>Weber</th><th>Rinne (affected ear)</th></tr></thead><tbody><tr><td>Normal / symmetric</td><td>Midline</td><td>AC &gt; BC (positive)</td></tr><tr><td>Conductive loss, right</td><td>Lateralizes to <b>right</b> (affected)</td><td>BC &gt; AC (<b>negative</b>)</td></tr><tr><td>Sensorineural loss, right</td><td>Lateralizes to <b>left</b> (better)</td><td>AC &gt; BC (positive)</td></tr></tbody></table></div>" },
    { id: "rinne", tags: ["OT", "clinical"], milestones: ["PC4"], ukmla: "Hearing loss", source: "AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019: tuning-fork triage.", front: "Interpret the Rinne test.", back: "Mastoid (BC) vs beside the ear (AC). <strong>Normal/SNHL:</strong> AC &gt; BC (positive). <strong>Conductive loss:</strong> BC &gt; AC (negative) in the affected ear.<div class=\"tbl-scroll\"><table><thead><tr><th>Scenario</th><th>Weber</th><th>Rinne (affected ear)</th></tr></thead><tbody><tr><td>Normal / symmetric</td><td>Midline</td><td>AC &gt; BC (positive)</td></tr><tr><td>Conductive loss, right</td><td>Lateralizes to <b>right</b> (affected)</td><td>BC &gt; AC (<b>negative</b>)</td></tr><tr><td>Sensorineural loss, right</td><td>Lateralizes to <b>left</b> (better)</td><td>AC &gt; BC (positive)</td></tr></tbody></table></div><figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/audiogram_interpretation.png' alt='Audiogram interpretation' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Interpreting the Rinne tuning-fork test (AC vs BC) alongside the Weber/Rinne comparison table.</figcaption></figure>" },
    { id: "chl-snhl", tags: ["OT", "clinical"], milestones: ["PC4","MK3"], ukmla: "Hearing loss", source: "Standard audiology teaching.", front: "Give the common causes of conductive vs sensorineural hearing loss.", back: "<strong>Conductive:</strong> cerumen, effusion, perforation, otosclerosis. <strong>SNHL:</strong> presbycusis, noise, ototoxicity, sudden SNHL, vestibular schwannoma (if asymmetric)." },
    { id: "sudden-snhl", tags: ["OT", "clinical"], milestones: ["PC4"], redFlag: true, ukmla: "Hearing loss", source: "AAO-HNSF Clinical Practice Guideline: Sudden Hearing Loss (Update), 2019.", front: "Why is sudden SNHL an emergency, and what's the workup?",
      back: "<strong>Otologic emergency</strong> (≥30 dB over ≥3 frequencies within 72h). Forks show a sensorineural pattern (Weber to better ear, Rinne positive). <strong>Urgent audiogram and MRI</strong> are firm recommendations; <strong>corticosteroids may be offered</strong> (shared decision-making) within 2 weeks, per AAO-HNS 2019 — not a mandatory step. Don't call it wax." },
    { id: "asym-snhl", tags: ["OT", "clinical"], milestones: ["PC4"], redFlag: true, ukmla: ["Hearing loss","Acoustic neuroma"], source: "ACR Appropriateness Criteria: Hearing Loss and/or Vertigo (asymmetric SNHL imaging).", front: "Asymmetric SNHL or unilateral tinnitus: what must you exclude?",
      back: "<strong>Vestibular schwannoma</strong> (and other retrocochlear lesions). Get an <strong>MRI with contrast</strong> of the internal auditory canals.<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/vestibular_schwannoma_MRI.png' alt='Vestibular schwannoma MRI' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Asymmetric SNHL or unilateral tinnitus must be worked up with MRI to exclude vestibular schwannoma.</figcaption></figure>" },
    { id: "oe-om", tags: ["OT", "clinical"], milestones: ["PC4","MK3"], ukmla: ["Painful ear","Otitis externa","Otitis media"], source: "AAO-HNSF Clinical Practice Guideline: Otitis Externa (Update), 2014; AAO-HNSF/AAP Clinical Practice Guideline: Acute Otitis Media (Update), 2013.", front: "Distinguish otitis externa from acute otitis media on exam.", back: "<strong>Otitis externa:</strong> pain on <strong>tragal traction</strong>, canal edema/discharge, TM often normal. <strong>AOM:</strong> <strong>bulging, erythematous TM</strong> with effusion; canal not tender." },
    { id: "otitis-externa-topical-card", tags: ["OT", "clinical"], milestones: ["PC4","MK3"], ukmla: ["Painful ear","Otitis externa"], source: "AAO-HNSF Clinical Practice Guideline: Otitis Externa (Update), 2014.", front: "First-line treatment for uncomplicated acute otitis externa is <span class=\"cloze-blank\">[...]</span>, and a topical aminoglycoside should be avoided when <span class=\"cloze-blank\">[...]</span>.",
      back: "First-line treatment for uncomplicated acute otitis externa is <mark class=\"cloze-answer\">topical antimicrobial therapy</mark> (with aural toilet and analgesia), not oral antibiotics. A topical aminoglycoside should be avoided when <mark class=\"cloze-answer\">the tympanic membrane may be perforated</mark> (ototoxicity risk); a non-ototoxic topical fluoroquinolone is preferred there. Oral antibiotics are reserved for spread beyond the canal or the immunocompromised patient." },
    { id: "cholesteatoma", tags: ["OT", "clinical"], milestones: ["PC4","MK3"], redFlag: true, ukmla: ["Ear and nasal discharge","Otitis media"], source: "Standard otology teaching on cholesteatoma.", front: "What findings suggest cholesteatoma, and why care?",
      back: "<strong>Painless, chronic, foul otorrhea</strong> + <strong>attic retraction/crust</strong>. It's a keratin sac that <strong>erodes bone</strong>, and can reach the ossicles, facial nerve, and labyrinth. Needs CT + surgery." },
    { id: "noe", tags: ["OT", "clinical"], milestones: ["PC4"], redFlag: true, ukmla: ["Painful ear","Otitis externa"], source: "Standard otology teaching on necrotizing (malignant) otitis externa.", front: "Which patient with an 'ear infection' should worry you most, and why?",
      back: "A <strong>diabetic or immunocompromised</strong> patient with <strong>severe deep otalgia and granulation tissue</strong> in the canal: <strong>necrotizing (malignant) otitis externa</strong>, a skull-base osteomyelitis. Urgent ENT + imaging." },
    { id: "bppv", tags: ["OT", "clinical"], milestones: ["PC4"], ukmla: ["Vertigo","Benign paroxysmal positional vertigo"], source: "AAO-HNSF Clinical Practice Guideline: BPPV (Update), 2017.", front: "Classic BPPV: features, test, treatment.", back: "<strong>Brief, seconds-long positional vertigo</strong>; confirm with <strong>Dix-Hallpike</strong>; treat with the <strong>Epley</strong> maneuver. Hearing is normal." },
    { id: "meniere", tags: ["OT", "clinical"], milestones: ["PC4"], ukmla: ["Vertigo","Ménière's disease"], source: "Bárány Society/AAO-HNS diagnostic criteria for Ménière's disease, 2015.", front: "What is the Ménière's tetrad?", back: "<strong>Episodic vertigo</strong> (minutes-hours) + <strong>fluctuating SNHL</strong> + <strong>tinnitus</strong> + <strong>aural fullness</strong>." },
    { id: "central-vertigo", tags: ["OT", "clinical"], milestones: ["PC4"], redFlag: true, ukmla: ["Vertigo","Dizziness"], source: "Kattah et al., HINTS exam, Stroke 2009.", front: "Which dizziness features point CENTRAL rather than peripheral?",
      back: "<strong>HINTS</strong> applies only to <strong>acute vestibular syndrome</strong> (continuous vertigo with spontaneous nystagmus), not to positional vertigo. A central pattern = any <strong>ONE</strong> of: normal/negative head-impulse test, direction-changing or vertical nystagmus, or skew deviation (mnemonic <strong>INFARCT</strong>). Any single central component overrides the others → image for posterior-circulation stroke. Do not use HINTS for positional or episodic vertigo." },
    { id: "facial-palsy", tags: ["OT", "clinical"], milestones: ["PC4","MK1"], redFlag: true, ukmla: ["Facial weakness","Bell's palsy"], source: "AAN Practice Guideline: Bell's Palsy, 2012.", front: "Distinguish central from peripheral facial palsy, and why it matters in otology.",
      back: "<strong>Peripheral (LMN):</strong> forehead involved (Bell's, or otologic causes: cholesteatoma, necrotizing OE, tumor). <strong>Central (UMN):</strong> forehead spared → stroke workup. Facial weakness with ear disease is an ENT red flag." },
    { id: "ramsay-hunt", tags: ["OT", "clinical"], milestones: ["PC4","MK1"], redFlag: true, ukmla: ["Facial weakness","Bell's palsy"], source: "Standard otology teaching on Ramsay Hunt syndrome (herpes zoster oticus).", front: "What must you inspect for before diagnosing Bell's palsy, and why?",
      back: "Examine the ear canal and auricle for zoster vesicles — <strong>Ramsay Hunt syndrome</strong> (herpes zoster oticus) causes a more severe palsy with worse recovery and warrants <strong>antivirals PLUS steroids</strong>, unlike Bell's palsy. Bell's palsy is a diagnosis of exclusion, so a normal ear-canal exam is part of making it." },
    { id: "otosclerosis-card", tags: ["OT", "clinical"], milestones: ["PC4","MK3"], ukmla: "Hearing loss", source: "Standard otology teaching on otosclerosis.", front: "The audiogram finding classically linked to otosclerosis, an artifactual dip in bone conduction near 2000 Hz that improves after successful stapes surgery, is called the <span class=\"cloze-blank\">[...]</span>.",
      back: "The audiogram finding classically linked to otosclerosis, an artifactual dip in bone conduction near 2000 Hz that improves after successful stapes surgery, is called the <mark class=\"cloze-answer\">Carhart notch</mark>. Otosclerosis itself is autosomal-dominant bone remodeling that fixes the stapes footplate, often worsening in pregnancy." },
    { id: "tympanometry-differential-card", tags: ["OT", "clinical"], milestones: ["PC4","MK3"], ukmla: "Hearing loss", source: "Jerger, tympanogram classification, Archives of Otolaryngology 1970.", front: "On tympanometry, how do otosclerosis, OME, and ossicular discontinuity differ?",
      back: "<strong>Otosclerosis:</strong> Type As (normal peak pressure, reduced/shallow compliance: a stiff system). <strong>OME:</strong> Type B (flat, no peak: fluid behind the drum). <strong>Ossicular discontinuity:</strong> abnormally high-compliance Type Ad (a floppy, hypermobile system), the opposite mechanical picture from otosclerosis." },
    { id: "cholesteatoma-classification-card", tags: ["OT", "clinical"], milestones: ["PC4","MK3"], ukmla: ["Ear and nasal discharge","Otitis media"], source: "Standard otology teaching on cholesteatoma.", front: "A white mass behind an intact, normal-looking tympanic membrane in a child with no history of perforation or ear surgery is <span class=\"cloze-blank\">[...]</span>.",
      back: "A white mass behind an intact, normal-looking tympanic membrane in a child with no history of perforation or ear surgery is <mark class=\"cloze-answer\">congenital cholesteatoma</mark>, a keratin rest that failed to involute embryologically. It's easy to miss, since the drum itself looks unremarkable.<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/cholesteatoma_ear.png' alt='Cholesteatoma ear' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Congenital cholesteatoma: a white mass behind an intact, normal-looking TM in a child.</figcaption></figure>" },
    { id: "cholesteatoma-erosion-card", tags: ["OT", "clinical"], milestones: ["PC4","MK3"], redFlag: true, ukmla: ["Ear and nasal discharge","Facial weakness"], source: "Standard otology teaching on cholesteatoma; Cummings Otolaryngology-Head and Neck Surgery, 7th ed.", front: "Cholesteatoma needs <span class=\"cloze-blank\">[...]</span> rather than antibiotic drops alone, because the sac's bone-resorbing enzymes keep eroding nearby structures regardless of infection control.",
      back: "Cholesteatoma needs <mark class=\"cloze-answer\">mastoidectomy</mark> rather than antibiotic drops alone, because the sac's bone-resorbing enzymes keep eroding nearby structures regardless of infection control. Erosion can reach the ossicular chain, the facial nerve canal, the lateral semicircular canal, or the tegmen tympani.<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/cholesteatoma_TM_perforation.png' alt='Cholesteatoma TM perforation' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Cholesteatoma requires mastoidectomy, not drops, because its enzymes keep eroding nearby bone.</figcaption></figure>" },
    { id: "vestibular-schwannoma-workup-card", tags: ["OT", "clinical"], milestones: ["PC4"], redFlag: true, ukmla: ["Hearing loss","Acoustic neuroma","Tinnitus"], source: "ACR Appropriateness Criteria: Hearing Loss and/or Vertigo (asymmetric SNHL imaging); Cummings Otolaryngology-Head and Neck Surgery, 7th ed.", front: "The imaging study of choice for a suspected vestibular schwannoma, able to detect tumors only a few millimeters across, is <span class=\"cloze-blank\">[...]</span>.",
      back: "The imaging study of choice for a suspected vestibular schwannoma, able to detect tumors only a few millimeters across, is <mark class=\"cloze-answer\">MRI of the internal auditory canals with and without gadolinium contrast</mark>. Management then ranges from observation through stereotactic radiosurgery to microsurgical resection, chosen by tumor size, growth, and hearing status.<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/vestibular_schwannoma_MRI.png' alt='Vestibular schwannoma MRI' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>MRI of the internal auditory canals with gadolinium is the imaging study of choice for vestibular schwannoma.</figcaption></figure>" },
    { id: "house-brackmann-card", tags: ["OT", "clinical"], milestones: ["PC4","MK1"], ukmla: ["Facial weakness","Acoustic neuroma"], source: "House JW, Brackmann DE. Facial nerve grading system. Otolaryngol Head Neck Surg. 1985.", front: "The scale that grades facial nerve function from Grade I, normal function, to Grade VI, total paralysis, is the <span class=\"cloze-blank\">[...]</span>.",
      back: "The scale that grades facial nerve function from Grade I, normal function, to Grade VI, total paralysis, is the <mark class=\"cloze-answer\">House-Brackmann scale</mark>. It documents facial nerve status before and after otologic or skull-base surgery, such as vestibular schwannoma resection.<figure class='note-fig' data-credit='Source not yet cited, added by the project owner, replace credit before sharing.'><img class='zoomable' src='assets/img/figures/vestibular_schwannoma_MRI.png' alt='Vestibular schwannoma MRI' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The House-Brackmann scale (Grade I-VI) for grading facial nerve function, used before/after vestibular schwannoma surgery.</figcaption></figure><div class=\"tbl-scroll\"><table><thead><tr><th>Grade</th><th>Descriptor</th><th>Overall / at rest</th><th>Forehead</th><th>Eye</th><th>Mouth</th><th>Synkinesis / spasm</th></tr></thead><tbody><tr><td><b>I</b></td><td>Normal</td><td>Normal symmetry and tone in all areas</td><td>Normal</td><td>Normal</td><td>Normal</td><td>None</td></tr><tr><td><b>II</b></td><td>Mild dysfunction</td><td>Slight weakness on close inspection; normal symmetry/tone at rest</td><td>Moderate-good movement</td><td>Complete closure with minimal effort</td><td>Slight asymmetry with max effort</td><td>Absent or barely noticeable</td></tr><tr><td><b>III</b></td><td>Moderate dysfunction</td><td>Obvious but not disfiguring difference; normal symmetry/tone at rest</td><td>Slight-moderate movement</td><td>Complete closure with effort</td><td>Slightly weak with max effort</td><td>Noticeable but not severe; hemifacial spasm may develop</td></tr><tr><td><b>IV</b></td><td>Moderately severe dysfunction</td><td>Obvious weakness and/or disfiguring asymmetry; normal tone at rest</td><td>No movement</td><td>Incomplete closure</td><td>Asymmetric with max effort</td><td>Severe enough to interfere with function</td></tr><tr><td><b>V</b></td><td>Severe dysfunction</td><td>Only barely perceptible motion; asymmetry at rest</td><td>None</td><td>Incomplete closure</td><td>Slight movement</td><td>Usually absent</td></tr><tr><td><b>VI</b></td><td>Total paralysis</td><td>No movement; loss of tone; asymmetry</td><td>None</td><td>None</td><td>None</td><td>None</td></tr></tbody></table></div>" },
    { id: "meniere-criteria-card", tags: ["OT", "clinical"], milestones: ["PC4"], ukmla: ["Vertigo","Ménière's disease"], source: "Bárány Society/AAO-HNS diagnostic criteria for Ménière's disease, 2015.", front: "The Bárány Society/AAO-HNS 2015 criteria for definite Ménière's disease require at least two spontaneous vertigo episodes, each lasting between <span class=\"cloze-blank\">[...]</span>.",
      back: "The Bárány Society/AAO-HNS 2015 criteria for definite Ménière's disease require at least two spontaneous vertigo episodes, each lasting between <mark class=\"cloze-answer\">20 minutes and 12 hours</mark>. The diagnosis also needs audiometrically documented low-to-mid-frequency SNHL and fluctuating aural symptoms in the affected ear. Probable MD widens the episode duration to 20 minutes-24 hours and drops the audiometric confirmation requirement." },
    { id: "meniere-management-ladder-card", tags: ["OT", "clinical"], milestones: ["PC4"], ukmla: "Ménière's disease", source: "Standard otology/neurotology teaching on Ménière's disease management.", front: "In the Ménière's disease step-up management ladder, <span class=\"cloze-blank\">[...]</span> is reserved for vertigo refractory to diet, diuretics, and intratympanic steroids, because it risks further hearing loss.",
      back: "In the Ménière's disease step-up management ladder, <mark class=\"cloze-answer\">intratympanic gentamicin</mark> is reserved for vertigo refractory to diet, diuretics, and intratympanic steroids, because it risks further hearing loss. This 'chemical labyrinthectomy' controls vertigo well but is only relatively selective for vestibular over cochlear hair cells." },
    { id: "noe-pathogen-progression-card", tags: ["OT", "clinical"], milestones: ["PC4"], redFlag: true, ukmla: ["Painful ear","Otitis externa"], source: "Standard otology teaching on necrotizing (malignant) otitis externa.", front: "The classic pathogen behind necrotizing (malignant) otitis externa, invading the skull base from the canal floor almost always in a diabetic or immunocompromised patient, is <span class=\"cloze-blank\">[...]</span>.",
      back: "The classic pathogen behind necrotizing (malignant) otitis externa, invading the skull base from the canal floor almost always in a diabetic or immunocompromised patient, is <mark class=\"cloze-answer\">Pseudomonas aeruginosa</mark>. As osteomyelitis spreads along the skull base, CN VII is affected first, followed by CN IX, X, XI, and then CN XII." },
    { id: "cochlear-implant-candidacy-card", tags: ["OT", "clinical"], milestones: ["PC4"], ukmla: "Hearing loss", source: "Standard neurotology teaching on cochlear implant candidacy (FDA-approved criteria; AAO-HNS Cochlear Implants clinical indicators statement).", front: "Cochlear implant candidacy requires <span class=\"cloze-blank\">[...]</span> with limited benefit from appropriately fit hearing aids, confirmed by aided speech-perception testing.",
      back: "Cochlear implant candidacy requires <mark class=\"cloze-answer\">severe-to-profound sensorineural hearing loss</mark> with limited benefit from appropriately fit hearing aids, confirmed by aided speech-perception testing. Unlike a hearing aid, an implant bypasses damaged cochlear hair cells and stimulates the auditory nerve directly. Since 2019, FDA-approved indications also include single-sided deafness and asymmetric hearing loss (age &ge;5 years; profound SNHL in the affected ear with near-normal hearing contralaterally), not only bilateral severe-to-profound loss." }
  ]
});

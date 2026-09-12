/* anatomy-atlas.js, "Anatomy Atlas" track (ROADMAP.md §4, item 9).
 *
 * A cross-cutting, growing collection of labeled diagrams and imaging stacks, * not tied to a single subspecialty. Ships today with a sample CT stack viewer
 * so the mechanism is demoable now; the slices are SAMPLE placeholders (see
 * docs/MEDIA-GUIDE.md for how to swap in a faculty-provided de-identified scan)
 * and are not real patient data. v0.2.0 adds four integrative anatomy notes,
 * three labeled SVG diagrams, and a pure-anatomy recall card set spanning
 * every subspecialty region, deliberately no clinical content or cases here.
 * v0.3.0 adds three more cross-cutting notes (facial nerve intratemporal
 * segments, branchial arch/pouch/cleft embryology, skull base foramina) plus
 * two labeled SVG diagrams and seven more recall cards, general/foundational
 * anatomy that no single subspecialty track owns, still deliberately no
 * clinical content or cases.
 *
 * STATUS: DRAFT. No clinical content lives in this track, anatomy only.
 */
window.JEFFENT.register({
  id: "anatomy-atlas",
  track: "anatomy-atlas",
  trackName: "Anatomy Atlas",
  trackAbbr: "AN",
  order: 1,
  title: "Anatomy Atlas",
  subtitle: "Labeled diagrams and imaging stacks, cross-cutting every subspecialty. Grows alongside the topic tracks.",
  version: "0.5.0-draft",
  level: ["core", "sub-I"],
  status: "DRAFT, pending faculty review. v0.3.0: added a cross-cutting depth pass covering genuinely missing foundational anatomy not owned by any subspecialty track, the facial nerve's intratemporal segments (labyrinthine/tympanic/mastoid) and the geniculate ganglion (Ramsay Hunt syndrome), branchial arch/pouch/cleft embryology (why second-arch anomalies dominate clinically, see Pediatric ENT for the clinical picture), and a unified skull-base foramina reference, plus a TMJ anatomy card; grounded in standard head & neck anatomy and embryology teaching (e.g. Gray's Anatomy, Bailey's Head & Neck Surgery, Otolaryngology), not derived from any single textbook. v0.4.0: added a labeled schematic diagram for “The neck as fascial layers and triangles” (anterior/posterior triangles, sternocleidomastoid, investing/pretracheal fascia, carotid sheath) so that note has a visual companion, not just text.",
  facultyReviewer: "",
  curriculumAnchors: [
    "AAO-HNS Otolaryngology Core Curriculum, anatomy objectives, mapped per structure as diagrams are added",
    "Delphi priority topic list, map exact items with faculty sponsor",
    "UKMLA Content Map (GMC), pure-anatomy recall cards are cross-tagged to the presentation/condition each structure underlies, for search and coverage purposes only; this track carries no clinical management content"
  ],

  anatomy: {
    notes: [
      {
        title: "The temporal bone in four parts",
        html: "<figure class='note-fig' data-credit=\"OpenStax, Anatomy and Physiology 2e (Ch. 7). CC BY 4.0.\"><img class='zoomable' src='assets/img/anatomy-atlas/skull-lateral-openstax.png' alt='Lateral skull showing the temporal bone' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Temporal bone on the lateral skull: squamous portion, external acoustic meatus, mastoid and styloid processes, zygomatic process.</figcaption></figure><ul><li><strong>Squamous</strong> part: lateral skull; forms part of the temporomandibular joint.</li><li><strong>Tympanic</strong> part: forms most of the external auditory canal.</li><li><strong>Petrous</strong> part: dense pyramid housing the middle and inner ear (the focus of otology).</li><li><strong>Mastoid</strong> part: air-cell system behind the ear canal; relevant to mastoiditis and cochlear implant surgery.</li></ul>" + "<figure class='note-fig' data-credit='Temporomandibular joint. Wikimedia Commons.'><img class='zoomable' src='assets/img/anatomy-atlas/tmj-wikimedia.png' alt='Temporomandibular joint' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The temporomandibular joint, formed by the mandibular condyle and the temporal bone.</figcaption></figure>" + "<figure class='note-fig' data-credit='Temporal bone anatomy. theskeletalsystem.net.'><img class='zoomable' src='assets/img/mc/image1.png' alt='Temporal bone, lateral and medial views' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The four parts of the temporal bone (squamous, tympanic, petrous, mastoid), lateral and medial views.</figcaption></figure>"
      },
      {
        title: "Paranasal sinuses",
        html: "<figure class='note-fig' data-credit=\"The paranasal sinuses. Wikimedia Commons, CC BY-SA 4.0.\"><img class='zoomable' src='assets/img/rhinology/paranasal-sinuses-numbered.svg' alt='The paranasal sinuses' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The paranasal sinuses</figcaption></figure><ul><li><strong>Maxillary</strong> (largest): ostium sits high on the medial wall and drains into the middle meatus, a drainage-against-gravity design that makes maxillary sinusitis common.</li><li><strong>Frontal</strong>: drains via the frontonasal duct into the middle meatus.</li><li><strong>Ethmoid</strong>: anterior cells drain to the middle meatus, posterior cells to the superior meatus.</li><li><strong>Sphenoid</strong>: drains into the sphenoethmoidal recess; lies close to the pituitary, optic nerve, and cavernous sinus, so sphenoid disease can have neuro-ophthalmic consequences.</li></ul>"
      },
      {
        title: "The neck as fascial layers and triangles",
        html: "<figure class='note-fig' data-credit=\"Triangles of the neck. Wikimedia Commons, CC BY-SA 4.0.\"><img class='zoomable' src='assets/img/anatomy-atlas/neck-triangles-colored.png' alt='Triangles of the neck' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Triangles of the neck</figcaption></figure><ul><li><strong>Fascial layers</strong>: superficial cervical fascia; deep cervical fascia (superficial/investing, pretracheal, prevertebral) plus the carotid sheath.</li><li><strong>Triangles</strong>: bounded by the sternocleidomastoid, trapezius, mandible, and midline (anterior and posterior triangles, further subdivided).</li><li><strong>Why it matters</strong>: deep neck infections are described by fascial space (how they spread) and by triangle/level (where a mass sits and what it is likely to be).</li></ul><p><strong>Deep cervical fascial layers:</strong></p><div class='tbl-scroll'><table><thead><tr><th>Fascial layer</th><th>Key structures enclosed</th><th>Boundaries / features</th><th>High-yield relevance</th></tr></thead><tbody><tr><td><strong>Superficial cervical fascia</strong> (subcutaneous)</td><td>Platysma, cutaneous cervical plexus branches, superficial veins (external jugular), superficial nodes</td><td>Between dermis and deep fascia; continuous sheet</td><td>Not a true deep-neck space but can hold infection; plane for face-lift/platysmal flaps</td></tr><tr><td><strong>Investing (superficial) layer of deep cervical fascia</strong></td><td>Encircles the neck; splits around <strong>SCM</strong> and <strong>trapezius</strong>, and the <strong>parotid</strong> and <strong>submandibular</strong> glands</td><td>Rule of 2s: 2 muscles, 2 glands, 2 spaces; runs mandible to manubrium</td><td>Superficial surgical plane; roof of the anterior and posterior triangles</td></tr><tr><td><strong>Middle (pretracheal), muscular division</strong></td><td><strong>Strap muscles</strong>: sternohyoid, sternothyroid, thyrohyoid, omohyoid</td><td>Deep to investing layer, superficial to viscera</td><td>Encountered on approach in thyroid/tracheal surgery</td></tr><tr><td><strong>Middle (pretracheal), visceral division</strong></td><td><strong>Thyroid, trachea, esophagus, pharynx, larynx, recurrent laryngeal nerves</strong>; posterosuperiorly the buccopharyngeal fascia</td><td>Between the two carotid sheaths; anterior wall of the retropharyngeal space</td><td>Pretracheal-space infection can spread directly to the anterior mediastinum</td></tr><tr><td><strong>Deep (prevertebral) layer</strong></td><td>Prevertebral and paraspinal muscles, scalenes, phrenic nerve, cervical roots, sympathetic chain, vertebral vessels</td><td>Encircles the vertebral column; continuous with scalene fascia</td><td>Floor of the posterior triangle; site of brachial/cervical plexus blocks</td></tr><tr><td><strong>Alar fascia</strong></td><td>(no specific contents)</td><td>Coronal sheet on the prevertebral fascia; separates retropharyngeal space (anterior) from danger space (posterior)</td><td>Divides the retropharyngeal space from the <strong>danger space</strong>, which reaches the posterior mediastinum</td></tr><tr><td><strong>Carotid sheath</strong></td><td><strong>Carotid artery, internal jugular vein, vagus nerve (CN X)</strong>; deep cervical nodes; sympathetic plexus on its surface</td><td>Formed by all three deep layers</td><td>The 'Lincoln's highway of the neck'; a conduit for deep-neck infection spread</td></tr></tbody></table></div>" + "<figure class='note-fig' data-credit='Cervical lymph node levels. Wikimedia Commons.'><img class='zoomable' src='assets/img/head-neck/neck-levels-colored.png' alt='Cervical lymph node levels I to VII' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Cervical lymph node levels I to VII (including IIa/IIb and Va/Vb).</figcaption></figure><figure class='note-fig' data-credit=\"Fascial Layers and Triangles of the Neck. Scholes &amp; Ramakrishnan (2015) ENT Secrets / Wikimedia Commons CC BY-SA 4.0.\"><img class='zoomable' src='assets/img/mc/03_neck_fascial_layers_triangles.png' alt='Fascial layers and triangles of the neck' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Fascial layers and triangles of the neck.</figcaption></figure><p><strong>Cervical nodal levels (Robbins classification):</strong></p><div class='tbl-scroll'><table><thead><tr><th>Level</th><th>Location and boundaries</th><th>Main nodal contents</th><th>Primary drainage</th></tr></thead><tbody><tr><td><strong>Ia</strong> (submental)</td><td>Between the anterior bellies of digastric, above the hyoid</td><td>Submental nodes</td><td>Chin, lower lip, floor of mouth, tongue tip</td></tr><tr><td><strong>Ib</strong> (submandibular)</td><td>Submandibular triangle</td><td>Submandibular gland and nodes</td><td>Oral cavity, anterior face</td></tr><tr><td><strong>IIa / IIb</strong> (upper jugular)</td><td>Skull base to hyoid, around the upper internal jugular vein; split by the spinal accessory nerve (CN XI)</td><td>Upper deep cervical nodes</td><td>Oral cavity, nasopharynx, oropharynx, larynx, parotid</td></tr><tr><td><strong>III</strong> (mid jugular)</td><td>Hyoid to cricoid</td><td>Middle deep cervical nodes</td><td>Larynx, hypopharynx, oropharynx</td></tr><tr><td><strong>IV</strong> (lower jugular)</td><td>Cricoid to clavicle</td><td>Lower deep cervical nodes</td><td>Larynx, thyroid, hypopharynx, cervical esophagus</td></tr><tr><td><strong>Va / Vb</strong> (posterior triangle)</td><td>Behind the sternocleidomastoid, in front of trapezius; split by the cricoid plane</td><td>Spinal accessory and transverse cervical nodes</td><td>Nasopharynx, posterior scalp and neck, thyroid</td></tr><tr><td><strong>VI</strong> (central compartment)</td><td>Hyoid to sternal notch, between the carotid sheaths</td><td>Pretracheal, paratracheal, prelaryngeal (Delphian) nodes</td><td>Thyroid, glottic and subglottic larynx, hypopharynx, cervical esophagus</td></tr><tr><td><strong>VII</strong> (superior mediastinal)</td><td>Below the sternal notch</td><td>Superior mediastinal nodes</td><td>Thyroid, cervical esophagus</td></tr></tbody></table></div>"
      },
      {
        title: "Cranial nerves of the head & neck",
        html: "<figure class='note-fig' data-credit=\"The twelve cranial nerves, inferior view of the brain. Wikimedia Commons, CC BY-SA 3.0.\"><img class='zoomable' src='assets/img/anatomy-atlas/cranial-nerves-inferior-view.svg' alt='The twelve cranial nerves on the inferior surface of the brain' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The twelve cranial nerves (inferior view of the brain)</figcaption></figure><figure class='note-fig' data-credit='Cranial nerves and skull-base foramina. TeachMeAnatomy.'><img class='zoomable' src='assets/img/mc/image4.png' alt='Cranial nerves colour-matched to the skull-base foramina they exit' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The cranial nerves colour-matched to the skull-base foramina they exit through.</figcaption></figure><p>Of the twelve cranial nerves, ENT anatomy revolves around several in particular:</p><ul><li><strong>CN V</strong> (trigeminal: facial/sinus sensation)</li><li><strong>CN VII</strong> (facial: facial movement, runs through the parotid)</li><li><strong>CN VIII</strong> (vestibulocochlear: hearing/balance)</li><li><strong>CN IX</strong> (glossopharyngeal: oropharyngeal sensation, gag)</li><li><strong>CN X</strong> (vagus, including the recurrent laryngeal nerve: laryngeal motor/sensory)</li><li><strong>CN XI</strong> (accessory: sternocleidomastoid/trapezius, at risk in neck dissection)</li><li><strong>CN XII</strong> (hypoglossal: tongue movement)</li></ul><p><strong>All twelve cranial nerves and their skull-base exits:</strong></p><div class='tbl-scroll'><table><thead><tr><th>Nerve</th><th>Skull base exit</th><th>Function</th></tr></thead><tbody><tr><td><strong>I</strong> Olfactory</td><td>Cribriform plate</td><td>Smell</td></tr><tr><td><strong>II</strong> Optic</td><td>Optic canal</td><td>Vision</td></tr><tr><td><strong>III</strong> Oculomotor</td><td>Superior orbital fissure</td><td>Most eye movement, eyelid elevation, pupil constriction</td></tr><tr><td><strong>IV</strong> Trochlear</td><td>Superior orbital fissure</td><td>Superior oblique (eye down and in)</td></tr><tr><td><strong>V1</strong> Ophthalmic</td><td>Superior orbital fissure</td><td>Sensation: forehead, scalp, cornea</td></tr><tr><td><strong>V2</strong> Maxillary</td><td>Foramen rotundum</td><td>Sensation: midface, upper teeth, palate</td></tr><tr><td><strong>V3</strong> Mandibular</td><td>Foramen ovale</td><td>Sensation: lower face and tongue; muscles of mastication</td></tr><tr><td><strong>VI</strong> Abducens</td><td>Superior orbital fissure</td><td>Lateral rectus (eye out)</td></tr><tr><td><strong>VII</strong> Facial</td><td>Internal acoustic meatus (exits at stylomastoid foramen)</td><td>Facial movement, taste (anterior two-thirds of tongue), lacrimation, salivation</td></tr><tr><td><strong>VIII</strong> Vestibulocochlear</td><td>Internal acoustic meatus</td><td>Hearing and balance</td></tr><tr><td><strong>IX</strong> Glossopharyngeal</td><td>Jugular foramen</td><td>Pharyngeal sensation, gag, taste (posterior third), parotid secretion</td></tr><tr><td><strong>X</strong> Vagus</td><td>Jugular foramen</td><td>Larynx and pharynx motor/sensory (recurrent laryngeal nerve); parasympathetic to thorax and abdomen</td></tr><tr><td><strong>XI</strong> Accessory</td><td>Jugular foramen</td><td>Trapezius and sternocleidomastoid</td></tr><tr><td><strong>XII</strong> Hypoglossal</td><td>Hypoglossal canal</td><td>Tongue movement</td></tr></tbody></table></div>" + "<figure class='note-fig' data-credit=\"Cranial Nerves of the Head and Neck with Skull Base Foramina. teachmeanatomy.info.\"><img class='zoomable' src='assets/img/mc/image7.png' alt='Cranial nerves colour-matched to skull base foramina' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Cranial nerves of the head and neck with their skull-base exits.</figcaption></figure>"
      },
      {
        title: "Facial nerve: intratemporal segments",
        html: "<figure class='note-fig' data-credit=\"Facial nerve anatomy. Hovland, Phuong & Lu. Oper Tech Otolaryngol Head Neck Surg. 2021;32(4):190-196.\"><img class='zoomable' src='assets/img/mc/image6.png' alt='Facial nerve' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: Labyrinthine, geniculate ganglion, tympanic, and mastoid segments.</figcaption></figure><ul><li>Three intratemporal segments: <strong>labyrinthine, tympanic, and mastoid</strong>, meeting at the <strong>geniculate ganglion</strong> (between labyrinthine and tympanic).</li><li><strong>Labyrinthine</strong>: narrowest and most vulnerable to swelling; the classic culprit in Bell's palsy.</li><li><strong>Tympanic</strong>: runs along the medial middle-ear wall just above the oval window; at risk in cholesteatoma and middle-ear surgery.</li><li><strong>Mastoid (vertical)</strong>: descends to the stylomastoid foramen, giving off the nerve to stapedius and the chorda tympani.</li><li><strong>Ramsay Hunt syndrome (herpes zoster oticus)</strong>: zoster reactivation at the geniculate ganglion; facial palsy with a vesicular ear-canal/pinna rash, usually more severe and slower to recover than Bell's palsy.</li></ul>" + "<figure class='note-fig' data-credit=\"Intratemporal Course of the Facial Nerve (Labyrinthine, Tympanic, Mastoid). AMBOSS.\"><img class='zoomable' src='assets/img/mc/image6.png' alt='Facial nerve intratemporal course overview' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Overview of the facial nerve's intratemporal course.</figcaption></figure>"
      },
      {
        title: "Branchial arch, pouch, and cleft embryology",
        html: "<figure class='note-fig' data-credit=\"Branchial arches. Gray's Anatomy (1918), Plate 981. Public domain (Wikimedia Commons).\"><img class='zoomable' src='assets/800px-Gray981.png' alt='Branchial arches' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: Arches 1-4, pouches 1-4, and second cleft persistence.</figcaption></figure><ul><li><strong>Components</strong>: arches; pouches (internal, endoderm-lined); clefts (external, ectoderm-lined).</li><li><strong>First arch</strong> (Meckel's cartilage): malleus, incus, mandible, muscles of mastication; <strong>CN V</strong>.</li><li><strong>Second arch</strong> (Reichert's cartilage): stapes, styloid process, lesser horn of hyoid, stapedius; <strong>CN VII</strong>.</li><li><strong>Pouches</strong>: 1st becomes the Eustachian tube and middle-ear cavity; 2nd the tonsillar fossa; 3rd and 4th the parathyroids and thymus.</li><li><strong>Clefts</strong>: only the 2nd normally persists as a tract, which is why second branchial cleft cysts/sinuses dominate clinically.</li></ul><p><strong>Branchial arch derivatives:</strong></p><div class='tbl-scroll'><table><thead><tr><th>Arch</th><th>Cartilage</th><th>Skeletal derivatives</th><th>Muscles</th><th>Cranial nerve</th></tr></thead><tbody><tr><td><strong>1st (mandibular)</strong></td><td>Meckel's</td><td>Malleus, incus, mandible, sphenomandibular ligament</td><td>Muscles of mastication, mylohyoid, anterior belly of digastric, tensor tympani, tensor veli palatini</td><td><strong>CN V</strong></td></tr><tr><td><strong>2nd (hyoid)</strong></td><td>Reichert's</td><td>Stapes, styloid process, lesser horn and upper body of hyoid, stylohyoid ligament</td><td>Muscles of facial expression, stapedius, stylohyoid, posterior belly of digastric, platysma</td><td><strong>CN VII</strong></td></tr><tr><td><strong>3rd</strong></td><td>(none)</td><td>Greater horn and lower body of hyoid</td><td>Stylopharyngeus</td><td><strong>CN IX</strong></td></tr><tr><td><strong>4th/6th</strong></td><td>(none)</td><td>Laryngeal cartilages (thyroid, cricoid, arytenoid)</td><td>Pharyngeal and laryngeal muscles (cricothyroid, levator veli palatini, intrinsic laryngeal muscles)</td><td><strong>CN X</strong> (SLN for 4th, RLN for 6th)</td></tr></tbody></table></div><p><strong>Pharyngeal pouches and clefts:</strong></p><div class='tbl-scroll'><table><thead><tr><th>Structure</th><th>Derivative</th><th>Clinical correlate</th></tr></thead><tbody><tr><td><strong>1st pouch</strong></td><td>Eustachian tube and middle-ear cavity</td><td>Tympanic cavity anatomy</td></tr><tr><td><strong>2nd pouch</strong></td><td>Tonsillar fossa and palatine tonsil</td><td>Site of the 2nd cleft internal opening</td></tr><tr><td><strong>3rd pouch</strong></td><td>Inferior parathyroids and thymus</td><td>Migrate caudally (DiGeorge if disrupted)</td></tr><tr><td><strong>4th pouch</strong></td><td>Superior parathyroids (and ultimobranchial body, C cells)</td><td>3rd/4th pouch syndrome (DiGeorge/velocardiofacial)</td></tr><tr><td><strong>1st cleft</strong></td><td>External auditory canal (only cleft that normally persists)</td><td>1st branchial cleft anomalies, near the parotid and facial nerve</td></tr><tr><td><strong>2nd, 3rd, 4th clefts</strong></td><td>Normally obliterate (cervical sinus of His)</td><td>Persistence causes cysts/sinuses/fistulas; 2nd cleft is about 90 to 95% of anomalies</td></tr></tbody></table></div>"
      },
      {
        title: "Skull base foramina",
        html: "<figure class='note-fig' data-credit=\"Skull base foramina and their cranial nerves. TeachMeAnatomy.\"><img class='zoomable' src='assets/img/mc/image7.png' alt='Base of skull' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Landmarks: Foramen ovale, rotundum, spinosum, internal acoustic meatus, jugular foramen, hypoglossal canal.</figcaption></figure><ul><li><strong>Foramen ovale</strong> (CN V3)</li><li><strong>Foramen rotundum</strong> (CN V2)</li><li><strong>Foramen spinosum</strong> (middle meningeal artery: epidural hematoma)</li><li><strong>Internal acoustic meatus</strong> (CN VII, CN VIII)</li><li><strong>Jugular foramen</strong> (CN IX, X, XI, and the internal jugular vein/sigmoid sinus; glomus jugulare tumors arise here)</li><li><strong>Stylomastoid foramen</strong> (CN VII exits the temporal bone here)</li><li><strong>Hypoglossal canal</strong> (CN XII)</li><li><strong>Superior orbital fissure</strong> (CN III, IV, V1, VI: orbital apex syndrome)</li></ul><p>Worth memorizing cold: each foramen's contents explain a specific clinical syndrome when that foramen is compressed or invaded.</p>" + "<figure class='note-fig' data-credit=\"Skull Base Foramina (Superior Endocranial View). teachmeanatomy.info.\"><img class='zoomable' src='assets/img/mc/image7.png' alt='Skull base foramina, superior endocranial view' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The skull base foramina, viewed from above.</figcaption></figure>"
      }
    ],
    diagrams: [
      {
        kind: "image",
        occlude: true,
        id: "temporal-bone-parts",
        title: "The temporal bone in four parts",
        note: "Squamous, tympanic, petrous, and mastoid. Name each, then reveal.",
        src: "assets/img/mc/image1.png",
        source: "The Temporal Bone in Four Parts. theskeletalsystem.net.",
        labels: [
          { id:"squamous", text:"Squamous part: lateral skull, part of the TMJ", box:{x:19.2,y:16.9,w:24.0,h:9.0} },
          { id:"tympanic", text:"Tympanic part: most of the external auditory canal", box:{x:25.5,y:49.1,w:24.0,h:9.0} },
          { id:"petrous", text:"Petrous part: houses the middle and inner ear", box:{x:44.2,y:49.1,w:24.0,h:9.0} },
          { id:"mastoid", text:"Mastoid part: air-cell system posterior to the ear canal", box:{x:53.6,y:63.4,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "paranasal-sinus-set",
        title: "The four paranasal sinuses and their drainage",
        note: "Maxillary, frontal, ethmoid, sphenoid. Name each and its drainage site, then reveal.",
        src: "assets/img/mc/image47.png",
        source: "Paranasal Sinuses and Their Drainage Pathways. Wikimedia Commons.",
        labels: [
          { id:"frontal", text:"Frontal sinus: drains via frontonasal duct to middle meatus", box:{x:38.0,y:15.5,w:24.0,h:9.0} },
          { id:"ethmoid", text:"Ethmoid: anterior cells to middle meatus, posterior cells to superior meatus", box:{x:38.0,y:38.8,w:24.0,h:9.0} },
          { id:"maxillary-l", text:"Maxillary sinus: ostium high on medial wall, drains against gravity to middle meatus", box:{x:18.0,y:45.5,w:24.0,h:9.0} },
          { id:"sphenoid", text:"Sphenoid sinus: drains to sphenoethmoidal recess; borders pituitary, optic nerve, cavernous sinus", box:{x:38.0,y:68.8,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "head-neck-cranial-nerves",
        title: "Cranial nerves of the head and neck",
        note: "The seven CNs ENT anatomy revolves around. Name each, then reveal.",
        src: "assets/img/mc/image7.png",
        source: "Cranial Nerves of the Head and Neck with Skull Base Foramina. teachmeanatomy.info.",
        labels: [
          { id:"v", text:"CN V (trigeminal): facial/sinus sensation", box:{x:28.6,y:18.6,w:24.0,h:9.0} },
          { id:"vii", text:"CN VII (facial): facial movement, runs through parotid", box:{x:47.4,y:18.6,w:24.0,h:9.0} },
          { id:"viii", text:"CN VIII (vestibulocochlear): hearing/balance", box:{x:50.5,y:30.1,w:24.0,h:9.0} },
          { id:"ix", text:"CN IX (glossopharyngeal): oropharyngeal sensation, gag", box:{x:41.1,y:45.5,w:24.0,h:9.0} },
          { id:"x", text:"CN X (vagus, incl. recurrent laryngeal): laryngeal motor/sensory", box:{x:38.0,y:60.9,w:24.0,h:9.0} },
          { id:"xi", text:"CN XI (accessory): SCM/trapezius, at risk in neck dissection", box:{x:31.8,y:60.9,w:24.0,h:9.0} },
          { id:"xii", text:"CN XII (hypoglossal): tongue movement", box:{x:28.6,y:45.5,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "facial-nerve-intratemporal-course",
        title: "The facial nerve's intratemporal course",
        note: "Labyrinthine → geniculate ganglion → tympanic → mastoid → stylomastoid foramen. Name each segment, then reveal.",
        src: "assets/img/mc/image6.png",
        source: "Detailed Surgical Anatomy of the Facial Nerve. Hovland N, Phuong A, Lu GN. Oper Tech Otolaryngol Head Neck Surg. 2021;32(4):190-196.",
        labels: [
          { id:"labyrinthine", text:"Labyrinthine segment: narrowest; most vulnerable to swelling (Bell's palsy)", box:{x:22.4,y:16.9,w:24.0,h:9.0} },
          { id:"geniculate", text:"Geniculate ganglion: herpes zoster here causes Ramsay Hunt syndrome", box:{x:34.9,y:15.1,w:24.0,h:9.0} },
          { id:"tympanic", text:"Tympanic segment: along the middle-ear medial wall above the oval window", box:{x:44.2,y:22.3,w:24.0,h:9.0} },
          { id:"mastoid", text:"Mastoid (vertical) segment: gives off nerve to stapedius and chorda tympani", box:{x:53.6,y:49.1,w:24.0,h:9.0} },
          { id:"stylomastoid-exit", text:"Exits at the stylomastoid foramen into the parotid", box:{x:53.6,y:66.9,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "branchial-arch-pouch-cleft",
        title: "First and second branchial arches, pouches, and clefts",
        note: "Name each arch's derivatives and what its pouch/cleft becomes, then reveal.",
        src: "assets/img/mc/14_branchial_arches_derivatives.png",
        source: "Branchial Arch Skeletal and Muscular Derivatives. Wikimedia Commons.",
        labels: [
          { id:"arch1", text:"First arch (Meckel's cartilage): malleus, incus, mandible, muscles of mastication; CN V", box:{x:16.1,y:30.1,w:24.0,h:9.0} },
          { id:"arch2", text:"Second arch (Reichert's cartilage): stapes, styloid process, lesser horn of hyoid, stapedius; CN VII", box:{x:38.0,y:34.0,w:24.0,h:9.0} },
          { id:"pouch1", text:"First pharyngeal pouch → Eustachian tube and middle-ear cavity", box:{x:19.2,y:74.3,w:24.0,h:9.0} },
          { id:"cleft2", text:"Only the second cleft normally persists, which is why 2nd-arch branchial cleft cysts dominate clinically", box:{x:59.9,y:74.3,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "neck-fascial-triangles",
        title: "The neck as fascial layers and triangles",
        note: "Two ways to read the same neck: by surface triangle, and by deep fascial plane. Name each, then reveal.",
        src: "assets/img/mc/03_neck_fascial_layers_triangles.png",
        source: "Fascial Layers and Triangles of the Neck. Scholes &amp; Ramakrishnan (2015) ENT Secrets / Wikimedia Commons CC BY-SA 4.0.",
        labels: [
          { id:"anterior-triangle", text:"Anterior triangle: bounded by the mandible above, the midline medially, and the anterior border of sternocleidomastoid laterally; subdivided into submental, submandibular, carotid, and muscular triangles.", box:{x:31.1,y:31.2,w:24.0,h:9.0} },
          { id:"posterior-triangle", text:"Posterior triangle: bounded by the posterior border of sternocleidomastoid, the anterior border of trapezius, and the clavicle; carries CN XI (spinal accessory) and the brachial plexus roots superficially.", box:{x:14.6,y:52.6,w:24.0,h:9.0} },
          { id:"scm", text:"Sternocleidomastoid: the single surface landmark that splits each side of the neck into anterior and posterior triangles.", box:{x:24.2,y:56.2,w:24.0,h:9.0} },
          { id:"investing-fascia", text:"Investing (superficial) layer of deep cervical fascia: encircles the whole neck like a collar, splitting to envelop trapezius and sternocleidomastoid individually.", box:{x:56.1,y:31.2,w:24.0,h:9.0} },
          { id:"carotid-sheath", text:"Carotid sheath: a fascial tube (contributions from all three deep cervical fascial layers) running the length of the neck deep to SCM, containing the common/internal carotid artery, internal jugular vein, and vagus nerve.", box:{x:53.0,y:49.1,w:24.0,h:9.0} },
          { id:"pretracheal-fascia", text:"Pretracheal fascia: wraps the trachea, esophagus, and thyroid in the anterior midline; infection here can track down into the mediastinum, which is why deep neck space infections are followed so closely.", box:{x:38.0,y:68.7,w:24.0,h:9.0} }
        ]
      },
      {
        kind: "image",
        occlude: true,
        id: "skull-base-foramina",
        title: "The skull base foramina",
        note: "Foramen rotundum, foramen ovale, foramen spinosum, the carotid canal, jugular foramen, and internal acoustic meatus, viewed from above. Name each, then reveal.",
        src: "assets/img/mc/image7.png",
        source: "Skull Base Foramina (Superior Endocranial View). teachmeanatomy.info.",
        labels: [
          { id:"foramen-rotundum", text:"Foramen rotundum: transmits CN V2, the maxillary division of the trigeminal nerve. Anteromedial in the middle cranial fossa.", box:{x:47.4,y:36.6,w:24.0,h:9.0} },
          { id:"foramen-ovale", text:"Foramen ovale: transmits CN V3, the mandibular division of the trigeminal nerve, posterolateral to foramen rotundum.", box:{x:54.2,y:45.5,w:24.0,h:9.0} },
          { id:"foramen-spinosum", text:"Foramen spinosum: transmits the middle meningeal artery. Injury here causes an epidural hematoma.", box:{x:59.2,y:50.9,w:24.0,h:9.0} },
          { id:"carotid-canal", text:"Carotid canal: the internal carotid artery enters the skull base here, medial in the petrous temporal bone, then curves anteromedially toward the cavernous sinus.", box:{x:44.9,y:56.2,w:24.0,h:9.0} },
          { id:"jugular-foramen", text:"Jugular foramen: transmits CN IX, X, and XI, plus the internal jugular vein. Site of origin for glomus jugulare tumors.", box:{x:55.5,y:68.7,w:24.0,h:9.0} },
          { id:"internal-acoustic-meatus", text:"Internal acoustic meatus: transmits CN VII and CN VIII, on the posterior surface of the petrous ridge.", box:{x:46.8,y:65.9,w:24.0,h:9.0} }
        ]
      }
    ],
    stacks: [
      {
        id: "neck-ct-normal",
        title: "Normal neck CT (axial)",
        note: "Scroll superior → inferior with the slider, mouse wheel, or ↑/↓ arrow keys. Toggle labels to test yourself before checking.",
        source: "SAMPLE placeholder slices: replace with a faculty-provided de-identified normal neck CT before this is used for real study (see docs/MEDIA-GUIDE.md). Not real patient data.",
        slices: [
          "assets/ct/neck/slice-01.png", "assets/ct/neck/slice-02.png", "assets/ct/neck/slice-03.png",
          "assets/ct/neck/slice-04.png", "assets/ct/neck/slice-05.png", "assets/ct/neck/slice-06.png",
          "assets/ct/neck/slice-07.png", "assets/ct/neck/slice-08.png", "assets/ct/neck/slice-09.png",
          "assets/ct/neck/slice-10.png", "assets/ct/neck/slice-11.png", "assets/ct/neck/slice-12.png"
        ],
        // labels keyed by slice index (0-based); percent coords over the image.
        labels: {
          5: [
            { text: "Airway (larynx/trachea)", xPct: 50, yPct: 46 },
            { text: "Carotid a.", xPct: 36, yPct: 48 }, { text: "Carotid a.", xPct: 64, yPct: 48 },
            { text: "Sternocleidomastoid", xPct: 16, yPct: 52 }, { text: "Sternocleidomastoid", xPct: 84, yPct: 52 },
            { text: "Vertebral body", xPct: 50, yPct: 70 },
            { text: "Thyroid lobe", xPct: 40, yPct: 50 }, { text: "Thyroid lobe", xPct: 60, yPct: 50 }
          ],
          7: [
            { text: "Airway (trachea)", xPct: 50, yPct: 47 },
            { text: "Vertebral body", xPct: 50, yPct: 70 }
          ]
        }
      }
    ]
  },

  /* ==================== CARDS: pure anatomy recall, no clinical content ==================== */
  cards: [
    { id:"temporal-bone-parts-card", tags: ["AN", "anatomy"], milestones:["MK1"], ukmla:"Hearing loss", source:"Standard temporal bone anatomy teaching.", front:"Name the four parts of the temporal bone and one clinically relevant fact about each.",
      back:"<strong>Squamous</strong> (lateral skull, part of the TMJ), <strong>tympanic</strong> (most of the external auditory canal), <strong>petrous</strong> (houses the middle/inner ear), <strong>mastoid</strong> (air-cell system: mastoiditis, cochlear implant surgery site).<figure class='note-fig' data-credit=\"The Temporal Bone in Four Parts. theskeletalsystem.net.\"><img class='zoomable' src='assets/img/mc/01_temporal_bone_four_parts.png' alt='Temporal bone in four parts' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The temporal bone in four parts.</figcaption></figure>" },
    { id:"paranasal-sinus-drainage-card", tags: ["AN", "anatomy"], milestones:["MK1"], ukmla:"Nasal obstruction", source:"Standard paranasal sinus anatomy teaching.", front:"Where does each paranasal sinus drain?",
      back:"<strong>Maxillary</strong> and <strong>frontal</strong> → middle meatus (maxillary via an ostium high on its medial wall, against gravity). <strong>Ethmoid:</strong> anterior cells → middle meatus, posterior cells → superior meatus. <strong>Sphenoid</strong> → sphenoethmoidal recess.<figure class='note-fig' data-credit=\"Paranasal Sinus Drainage Anatomy. teachmeanatomy.info.\"><img class='zoomable' src='assets/img/mc/image47.png' alt='Paranasal sinus drainage anatomy' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Paranasal sinus drainage pathways.</figcaption></figure>" },
    { id:"sphenoid-neighbors-card", tags: ["AN", "anatomy"], milestones:["MK1"], ukmla:"Facial pain", source:"Standard skull-base anatomy teaching.", front:"What structures border the sphenoid sinus, and why does that matter clinically?",
      back:"The <strong>pituitary gland, optic nerve, and cavernous sinus</strong> (with the internal carotid artery and CNs III, IV, V1, V2, VI running through/near it). Sphenoid sinus disease or surgery here carries neuro-ophthalmic and vascular risk not shared by the other sinuses.<figure class='note-fig' data-credit='Paranasal sinus drainage. TeachMeAnatomy.'><img class='zoomable' src='assets/img/mc/image8.png' alt='Paranasal sinus drainage pathways' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Sinus ostia and drainage pathways on the lateral nasal wall.</figcaption></figure><figure class='note-fig' data-credit=\"Sphenoid Sinus and Cavernous Sinus Anatomic Relations. Scholes &amp; Ramakrishnan (2015) ENT Secrets.\"><img class='zoomable' src='assets/img/mc/41_bony_labyrinth_inner_ear_wikimedia.png' alt='Sphenoid sinus and cavernous sinus relations' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Sphenoid sinus and its cavernous sinus relations.</figcaption></figure>" },
    { id:"neck-fascial-layers-card", tags: ["AN", "anatomy"], milestones:["MK1"], ukmla:"Neck lump", source:"Standard cervical fascia anatomy teaching.", front:"Name the layers of deep cervical fascia.",
      back:"<strong>Superficial (investing) layer</strong> (envelopes the neck, splits around SCM/trapezius), <strong>pretracheal layer</strong> (envelopes thyroid/trachea/esophagus), <strong>prevertebral layer</strong> (envelopes the vertebral column/paraspinal muscles), and the <strong>carotid sheath</strong> (contributions from all three, envelopes the carotid/IJV/vagus).<figure class='note-fig' data-credit='Fascial layers of the neck. ENT Secrets (Elsevier).'><img class='zoomable' src='assets/img/mc/image3.png' alt='Deep cervical fascial layers' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The layers of deep cervical fascia in cross-section.</figcaption></figure>" },
    { id:"cn-v-vii-viii-card", tags: ["AN", "anatomy"], milestones:["MK1"], ukmla:"Facial weakness", source:"Standard head and neck cranial nerve teaching.", front:"What does each of CN V, VII, and VIII do in the head and neck?",
      back:"<strong>CN V (trigeminal):</strong> facial/sinus/oral sensation, muscles of mastication. <strong>CN VII (facial):</strong> facial movement, runs through the parotid. <strong>CN VIII (vestibulocochlear):</strong> hearing and balance." },
    { id:"cn-ix-x-xi-xii-card", tags: ["AN", "anatomy"], milestones:["MK1"], ukmla:"Swallowing problems", source:"Standard head and neck cranial nerve teaching.", front:"What does each of CN IX, X, XI, and XII do in the head and neck?",
      back:"<strong>CN IX (glossopharyngeal):</strong> oropharyngeal sensation, gag. <strong>CN X (vagus, incl. recurrent laryngeal nerve):</strong> laryngeal motor/sensory. <strong>CN XI (accessory):</strong> SCM/trapezius, at risk in neck dissection. <strong>CN XII (hypoglossal):</strong> tongue movement." },
    { id:"neck-triangles-card", tags: ["AN", "anatomy"], milestones:["MK1"], ukmla:"Neck lump", source:"Standard neck surface anatomy teaching.", front:"What structures define the anterior and posterior triangles of the neck?",
      back:"<strong>Anterior triangle:</strong> bounded by the mandible, midline, and anterior border of SCM, contains most of the visceral neck structures. <strong>Posterior triangle:</strong> bounded by SCM, trapezius, and the clavicle, contains CN XI and the brachial plexus roots among other structures.<figure class='note-fig' data-credit=\"Anterior and Posterior Triangles of the Neck. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/image10.png' alt='Anterior and posterior triangles of the neck' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Anterior and posterior triangles of the neck.</figcaption></figure>" },
    { id:"external-vs-middle-inner-ear-card", tags: ["AN", "anatomy"], milestones:["MK1"], ukmla:"Hearing loss", source:"Standard otologic anatomy teaching.", front:"What separates the external, middle, and inner ear anatomically?",
      back:"The <strong>tympanic membrane</strong> separates external from middle ear; the <strong>oval and round windows</strong> separate the air-filled middle ear from the fluid-filled inner ear (cochlea/vestibular apparatus), housed within the petrous temporal bone.<figure class='note-fig' data-credit=\"External, Middle, and Inner Ear Compartments. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/image40.png' alt='External, middle, and inner ear compartments' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The external, middle, and inner ear compartments.</figcaption></figure>" },
    { id:"larynx-subsites-recall-card", tags: ["AN", "anatomy"], milestones:["MK1"], ukmla:"Hoarseness and voice change", source:"Standard laryngeal anatomy teaching.", front:"Name the three laryngeal subsites from superior to inferior.",
      back:"<strong>Supraglottis</strong> (epiglottis to the laryngeal ventricle), <strong>glottis</strong> (true vocal folds, ~1cm inferiorly, including the anterior/posterior commissures), <strong>subglottis</strong> (below the true folds to the inferior cricoid border).<figure class='note-fig' data-credit=\"Laryngeal Subsites: Supraglottis, Glottis, and Subglottis. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/image60.png' alt='Laryngeal subsites, coronal view' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Laryngeal subsites: supraglottis, glottis, subglottis.</figcaption></figure>" },
    { id:"parotid-facial-nerve-recall-card", tags: ["AN", "anatomy"], milestones:["MK1"], ukmla:"Facial weakness", source:"Standard parotid anatomy teaching.", front:"How does the facial nerve relate anatomically to the parotid gland?",
      back:"The facial nerve trunk exits the stylomastoid foramen and runs <strong>through the substance of the parotid gland</strong>, dividing it (surgically) into superficial and deep lobes, before branching into five named terminal branches.<figure class='note-fig' data-credit=\"Facial Nerve Course Through the Parotid Gland. ECR 2015 / ESR Poster Archive.\"><img class='zoomable' src='assets/img/mc/image69.png' alt='Facial nerve course through the parotid gland' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The facial nerve's course through the parotid gland.</figcaption></figure>" },
    { id:"facial-nerve-segments-card", tags: ["AN", "anatomy"], milestones:["MK1"], ukmla:"Facial weakness", source:"Standard temporal bone / facial nerve anatomy teaching.", front:"The narrowest of the facial nerve's three intratemporal segments, and the one most vulnerable to swelling in Bell's palsy, is the <span class=\"cloze-blank\">[...]</span> segment.",
      back:"The narrowest of the facial nerve's three intratemporal segments, and the one most vulnerable to swelling in Bell's palsy, is the <mark class=\"cloze-answer\">labyrinthine</mark> segment. It runs from the internal auditory canal to the geniculate ganglion.<figure class='note-fig' data-credit='Facial nerve intratemporal course. ESR/ECR teaching poster.'><img class='zoomable' src='assets/img/mc/image6.png' alt='Facial nerve intratemporal segments' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The intratemporal segments of the facial nerve.</figcaption></figure>" },
    { id:"geniculate-ganglion-ramsay-hunt-card", tags: ["AN", "anatomy"], milestones:["MK1"], ukmla:"Facial weakness", source:"Standard facial nerve anatomy teaching.", front:"Herpes zoster reactivation at the facial nerve's geniculate ganglion causes <span class=\"cloze-blank\">[...]</span>, presenting as facial palsy with a vesicular rash of the ear canal or pinna.",
      back:"Herpes zoster reactivation at the facial nerve's geniculate ganglion causes <mark class=\"cloze-answer\">Ramsay Hunt syndrome</mark>, presenting as facial palsy with a vesicular rash of the ear canal or pinna. It tends to be more severe and slower to recover than Bell's palsy." },
    { id:"branchial-arch-derivatives-card", tags: ["AN", "anatomy"], milestones:["MK1"], ukmla:"Neck lump", source:"Standard branchial arch embryology teaching.", front:"Unlike the malleus and incus, which arise from the first arch, the stapes derives embryologically from the <span class=\"cloze-blank\">[...]</span> (Reichert's cartilage).",
      back:"Unlike the malleus and incus, which arise from the first arch, the stapes derives embryologically from the <mark class=\"cloze-answer\">second branchial arch</mark> (Reichert's cartilage). This is why second-arch anomalies are far more common clinically than first-arch ones.<figure class='note-fig' data-credit=\"Branchial Arch Skeletal and Muscular Derivatives. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/14_branchial_arches_derivatives.png' alt='Branchial arch derivatives' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Branchial arch skeletal and muscular derivatives.</figcaption></figure>" },
    { id:"pharyngeal-pouch-vs-cleft-card", tags: ["AN", "anatomy"], milestones:["MK1"], ukmla:"Hearing loss", source:"Standard pharyngeal pouch/cleft embryology teaching.", front:"The first pharyngeal pouch develops into the <span class=\"cloze-blank\">[...]</span>.",
      back:"The first pharyngeal pouch develops into the <mark class=\"cloze-answer\">Eustachian tube and middle-ear cavity</mark>. Only the second cleft normally persists, which is why second branchial cleft cysts and sinuses dominate clinically." },
    { id:"skull-base-foramina-card", tags: ["AN", "anatomy"], milestones:["MK1"], ukmla:"Facial pain", source:"Standard skull-base anatomy teaching.", front:"Match the skull-base foramen to what passes through it: foramen ovale, foramen rotundum, foramen spinosum, internal acoustic meatus.",
      back:"<strong>Foramen ovale</strong>: CN V3. <strong>Foramen rotundum</strong>: CN V2. <strong>Foramen spinosum</strong>: middle meningeal artery (injury here causes an epidural hematoma). <strong>Internal acoustic meatus</strong>: CN VII and CN VIII (with the labyrinthine artery).<figure class='note-fig' data-credit=\"Skull Base Foramina and Transmitting Structures. teachmeanatomy.info.\"><img class='zoomable' src='assets/img/mc/image7.png' alt='Skull base foramina' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>Skull base foramina and the structures they transmit.</figcaption></figure>" },
    { id:"jugular-foramen-syndrome-card", tags: ["AN", "anatomy"], milestones:["MK1"], ukmla:"Swallowing problems", source:"Standard skull-base anatomy teaching.", front:"What is jugular foramen syndrome (Vernet syndrome), and which cranial nerves does it affect?",
      back:"Compression or invasion at the jugular foramen, classically by a <strong>glomus jugulare tumor</strong> but also skull-base trauma or metastasis, affects the three cranial nerves that pass through it: <strong>CN IX, X, and XI</strong>. Produces loss of gag/pharyngeal sensation (IX), vocal-fold palsy/dysphagia (X), and shoulder droop/weak trapezius-SCM (XI).<figure class='note-fig' data-credit='Skull base foramina. TeachMeAnatomy.'><img class='zoomable' src='assets/img/mc/image15.png' alt='Skull base foramina' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The skull-base foramina and the cranial nerves that exit through them.</figcaption></figure>" },
    { id:"tmj-anatomy-card", tags: ["AN", "anatomy"], milestones:["MK1"], ukmla:"Facial pain", source:"Standard TMJ anatomy teaching.", front:"Because the temporomandibular joint sits directly anterior to the external auditory canal, TMJ dysfunction is a classic cause of <span class=\"cloze-blank\">[...]</span> despite a normal ear exam.",
      back:"Because the temporomandibular joint sits directly anterior to the external auditory canal, TMJ dysfunction is a classic cause of <mark class=\"cloze-answer\">referred otalgia</mark> despite a normal ear exam. The joint is formed by the mandibular condyle and the temporal bone's glenoid fossa.<figure class='note-fig' data-credit=\"Anatomical Relationship of the TMJ to the Ear Canal. Wikimedia Commons.\"><img class='zoomable' src='assets/img/mc/image16.png' alt='TMJ relationship to the ear canal' loading='lazy' tabindex='0' role='button' aria-label='Enlarge figure'><figcaption>The temporomandibular joint's relationship to the external auditory canal.</figcaption></figure>" }
  ]
});

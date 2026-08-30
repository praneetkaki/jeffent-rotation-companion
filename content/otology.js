/* otology.js — OTOLOGY & NEUROTOLOGY module
 *
 * Shape follows docs/UI-SPEC.md + docs/MEDIA-SPEC.md (anatomy / clinical / cases / cards).
 * STATUS: DRAFT — every clinical item must be vetted by a JeffENT faculty reviewer
 * before it counts as final. Anatomy uses author-drawn labeled SVGs that work now;
 * see docs/OTOLOGY-IMAGES.md to swap in real public-domain Gray's plates.
 */
window.JEFFENT.register({
  id: "otology-ear",
  track: "otology",
  trackName: "Otology & Neurotology",
  trackAbbr: "OT",
  order: 1,
  title: "The Ear — Anatomy to the Clinic",
  subtitle: "External, middle, and inner ear; hearing loss, otalgia, infection, and the vertigo syndromes.",
  version: "0.1.0-draft",
  level: ["core", "sub-I"],
  status: "DRAFT — pending faculty review",
  facultyReviewer: "",
  curriculumAnchors: [
    "AAO-HNS Otolaryngology Core Curriculum — otology/hearing objectives",
    "Delphi priority topic list — map exact items with faculty sponsor"
  ],

  /* ==================== ANATOMY TAB ==================== */
  anatomy: {
    notes: [
      {
        title: "Three compartments, one organ",
        html:
          "<p>Work outside-in: <strong>external</strong> (sound gathering), <strong>middle</strong> (sound amplification &amp; transmission), <strong>inner</strong> (transduction + balance).</p>" +
          "<ul>" +
          "<li><strong>External:</strong> auricle + external auditory canal (EAC) — outer ⅓ cartilage, inner ⅔ bone; cerumen glands in the cartilaginous part.</li>" +
          "<li><strong>Middle:</strong> tympanic membrane → ossicles (<strong>malleus → incus → stapes</strong>) → oval window; connected to the nasopharynx by the <strong>Eustachian tube</strong>.</li>" +
          "<li><strong>Inner:</strong> <strong>cochlea</strong> (hearing) and <strong>vestibule + semicircular canals</strong> (balance), read out by <strong>CN VIII</strong>.</li>" +
          "</ul>"
      },
      {
        title: "The clinically dangerous relationships",
        html:
          "<ul>" +
          "<li><strong>Facial nerve (CN VII)</strong> runs through the temporal bone next to the middle/inner ear — facial weakness with ear disease is a red flag.</li>" +
          "<li><strong>Referred otalgia:</strong> the ear is innervated by CN <strong>V, VII, IX, X</strong> and C2–C3, so a normal-looking ear can hurt because of pathology elsewhere (TMJ, teeth, tonsil, tongue base, larynx).</li>" +
          "<li><strong>Middle-ear muscles:</strong> tensor tympani (CN V3) and stapedius (CN VII) dampen loud sound.</li>" +
          "<li><strong>Chorda tympani</strong> (branch of VII) crosses the middle ear carrying taste from the anterior ⅔ of the tongue.</li>" +
          "</ul>"
      }
    ],

    diagrams: [
      {
        kind: "image",
        id: "ear-overview-photo",
        title: "The ear in cross-section (Gray's Anatomy)",
        note: "Gray's Anatomy plate 907 — a real historical dissection illustration. Auricle → canal → tympanic membrane → middle ear → auditory tube, in one section.",
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
        title: "Right tympanic membrane (Gray's Anatomy)",
        note: "Gray's Anatomy plate 909 — the otoscopic view, same landmarks as the schematic below. Test yourself here first, then check the simplified diagram.",
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
        title: "Tympanic membrane viewed from within (Gray's Anatomy)",
        note: "Gray's Anatomy plate 912 — the medial (middle-ear) surface of the drum, showing the malleus, chorda tympani, and facial nerve running close by.",
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
        title: "Bony (osseous) labyrinth — inner ear (Gray's Anatomy)",
        note: "Gray's Anatomy plate 920 — the right bony labyrinth from the lateral side: cochlea (hearing) and the vestibule + semicircular canals (balance) in one piece.",
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
        kind: "svg",
        id: "ear-cross-section",
        title: "The ear in cross-section (schematic)",
        note: "Lateral (outside) on the left → medial (inside) on the right. Hide the labels, name each structure, then reveal to check.",
        viewBox: "0 0 480 300",
        base:
          // external auditory canal (funnel)
          '<path d="M20 150 Q70 120 120 135 L200 150 L120 165 Q70 180 20 150 Z" fill="var(--surface-2)" stroke="var(--line)" stroke-width="2"/>' +
          // auricle
          '<path d="M18 118 Q0 150 18 182 Q40 176 40 150 Q40 124 18 118 Z" fill="var(--surface-2)" stroke="var(--primary)" stroke-width="1.6" opacity="0.7"/>' +
          // tympanic membrane
          '<line x1="200" y1="126" x2="200" y2="174" stroke="var(--ink-soft)" stroke-width="3"/>' +
          // middle ear cavity
          '<rect x="200" y="118" width="96" height="70" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
          // ossicles: malleus, incus, stapes
          '<line x1="200" y1="150" x2="228" y2="134" stroke="var(--accent)" stroke-width="3"/>' +          // malleus
          '<path d="M228 134 L250 138 L246 156" fill="none" stroke="var(--accent)" stroke-width="3"/>' +   // incus
          '<line x1="246" y1="156" x2="266" y2="150" stroke="var(--accent)" stroke-width="3"/>' +          // stapes to oval window
          // cochlea (spiral)
          '<path d="M330 168 q-20 -2 -20 -20 q0 -22 24 -22 q26 0 26 26 q0 28 -30 28 q-34 0 -34 -34" fill="none" stroke="var(--primary)" stroke-width="3"/>' +
          // semicircular canals (loops)
          '<circle cx="352" cy="104" r="17" fill="none" stroke="var(--primary)" stroke-width="2.5"/>' +
          '<circle cx="380" cy="118" r="14" fill="none" stroke="var(--primary)" stroke-width="2.5"/>' +
          '<circle cx="372" cy="92" r="12" fill="none" stroke="var(--primary)" stroke-width="2.5"/>' +
          // CN VIII
          '<path d="M356 150 Q410 150 452 150" fill="none" stroke="var(--ink-soft)" stroke-width="4" stroke-linecap="round"/>' +
          // Eustachian tube
          '<path d="M262 188 Q300 210 340 250" fill="none" stroke="var(--line)" stroke-width="6" stroke-linecap="round"/>' +
          '<path d="M262 188 Q300 210 340 250" fill="none" stroke="var(--surface-2)" stroke-width="3" stroke-linecap="round"/>',
        labels: [
          { id: "au", text: "Auricle", px: 20, py: 150, lx: 20, ly: 205 },
          { id: "eac", text: "External auditory canal", px: 110, py: 150, lx: 60, ly: 250 },
          { id: "tm", text: "Tympanic membrane", px: 200, py: 150, lx: 175, ly: 285 },
          { id: "oss", text: "Ossicles (malleus·incus·stapes)", px: 240, py: 140, lx: 250, ly: 40 },
          { id: "et", text: "Eustachian tube → nasopharynx", px: 320, py: 235, lx: 330, ly: 275 },
          { id: "coch", text: "Cochlea (hearing)", px: 328, py: 150, lx: 300, ly: 210 },
          { id: "scc", text: "Semicircular canals (balance)", px: 368, py: 104, lx: 300, ly: 30 },
          { id: "cn8", text: "Vestibulocochlear n. (CN VIII)", px: 430, py: 150, lx: 448, ly: 200 }
        ]
      },
      {
        kind: "svg",
        id: "tm-right",
        title: "Right tympanic membrane — landmarks",
        note: "Confirm laterality/orientation with faculty. Name each landmark, then reveal.",
        viewBox: "0 0 360 360",
        base:
          '<ellipse cx="180" cy="188" rx="118" ry="142" fill="var(--surface-2)" stroke="var(--line)" stroke-width="2"/>' +
          '<ellipse cx="180" cy="188" rx="118" ry="142" fill="none" stroke="var(--primary)" stroke-width="1.4" opacity="0.5"/>' +
          '<path d="M176 78 Q168 140 180 198" fill="none" stroke="var(--ink-soft)" stroke-width="3" stroke-linecap="round"/>' +
          '<circle cx="176" cy="86" r="5" fill="var(--ink-soft)"/>' +
          '<path d="M180 198 L226 262 L206 270 Z" fill="var(--accent)" opacity="0.35"/>' +
          '<circle cx="180" cy="198" r="4" fill="var(--ink)"/>',
        labels: [
          { id: "l1", text: "Pars flaccida", px: 180, py: 60, lx: 180, ly: 34 },
          { id: "l2", text: "Lateral process of malleus", px: 176, py: 86, lx: 56, ly: 78 },
          { id: "l3", text: "Manubrium (malleus handle)", px: 174, py: 150, lx: 44, ly: 170 },
          { id: "l4", text: "Umbo", px: 180, py: 198, lx: 270, ly: 196 },
          { id: "l5", text: "Pars tensa", px: 120, py: 250, lx: 36, ly: 300 },
          { id: "l6", text: "Cone of light (reflex)", px: 214, py: 262, lx: 250, ly: 322 }
        ]
      }
    ]
  },

  /* ==================== CLINICAL TAB ==================== */
  clinical: {
    blocks: [
      {
        title: "Hearing loss — the fork in the road",
        html:
          "<p><strong>Conductive</strong> (something blocks sound reaching the cochlea) vs <strong>sensorineural</strong> (cochlea or CN VIII). Localize at the bedside with <strong>Weber + Rinne (512 Hz)</strong>.</p>" +
          "<ul><li><strong>Conductive causes:</strong> cerumen, middle-ear effusion, TM perforation, otosclerosis, ossicular problems.</li>" +
          "<li><strong>Sensorineural causes:</strong> presbycusis, noise, ototoxicity, sudden SNHL, and — if <strong>asymmetric</strong> — retrocochlear lesions (vestibular schwannoma).</li></ul>"
      },
      {
        title: "Otalgia — primary vs referred",
        html:
          "<p><strong>Primary</strong> (ear pathology): otitis externa (pain on tragal traction, canal oedema), acute otitis media (bulging red TM), cerumen, TM perforation. " +
          "<strong>Referred</strong> (normal ear exam): via CN V/VII/IX/X — TMJ, teeth, tonsil, tongue base, larynx. <strong>Otalgia + normal ear exam in an adult smoker → scope for malignancy.</strong></p>"
      },
      {
        title: "Infection — and when it's dangerous",
        html:
          "<ul><li><strong>Otitis externa</strong> — canal infection; tragal tenderness, discharge.</li>" +
          "<li><strong>Acute otitis media</strong> — middle-ear infection; bulging TM, effusion.</li>" +
          "<li><strong>Cholesteatoma</strong> — keratin sac, often from a retraction pocket; <strong>painless foul otorrhea + attic crust/retraction</strong>, erodes bone. Refer.</li>" +
          "<li><strong>Necrotizing (malignant) otitis externa</strong> — in diabetic/immunocompromised patients: severe deep pain, granulation tissue in the canal; skull-base osteomyelitis risk.</li></ul>"
      },
      {
        title: "Dizziness — peripheral vs central",
        html:
          "<ul><li><strong>BPPV:</strong> brief positional vertigo; <strong>Dix–Hallpike</strong> reproduces it; treat with Epley.</li>" +
          "<li><strong>Vestibular neuritis:</strong> acute constant vertigo for days, no hearing loss, often post-viral.</li>" +
          "<li><strong>Ménière's:</strong> episodic vertigo + <strong>fluctuating SNHL + tinnitus + aural fullness</strong>.</li>" +
          "<li><strong>Central red flags (HINTS):</strong> direction-changing/vertical nystagmus, normal head-impulse test, skew deviation, other neuro signs → image for stroke.</li></ul>"
      }
    ],
    redFlags: [
      { t: "<b>Sudden SNHL (&lt;72h)</b> — otologic emergency: urgent audiogram, steroids, MRI." },
      { t: "<b>Asymmetric SNHL / unilateral tinnitus</b> — MRI for vestibular schwannoma." },
      { t: "<b>Facial weakness with ear disease</b> — urgent ENT (cholesteatoma, malignancy, necrotizing OE)." },
      { t: "<b>Cholesteatoma signs</b> — painless foul otorrhea, attic retraction/crust; erodes bone." },
      { t: "<b>Necrotizing otitis externa</b> — diabetic/immunocompromised, severe pain, canal granulation." },
      { t: "<b>Central vertigo (HINTS)</b> — vertical/direction-changing nystagmus, normal head-impulse, skew." }
    ]
  },

  /* ==================== CASES TAB ==================== */
  cases: [
    {
      id: "case-sudden-snhl",
      stem: "A <b>34-year-old</b> notices her <b>right ear went muffled over a day</b> with new ringing. No wax on exam. <b>Weber lateralizes left; Rinne positive bilaterally.</b>",
      prompts: [
        { q: "Interpret the tuning-fork pattern.", a: "Weber to the better (left) ear + positive Rinne on the right = a sensorineural pattern on the right — not conductive/wax." },
        { q: "Diagnosis and urgency?", a: "Sudden SNHL — an otologic emergency. Urgent audiogram, early corticosteroids, and MRI for retrocochlear pathology." }
      ],
      teaching: "Sudden SNHL is time-sensitive and often dismissed as wax. The bedside forks separate the two in seconds."
    },
    {
      id: "case-cholesteatoma",
      stem: "A <b>28-year-old</b> has <b>months of painless, foul-smelling drainage</b> from one ear and mild hearing loss. Otoscopy shows a <b>crusted retraction pocket in the attic</b>.",
      prompts: [
        { q: "What's the concern?", a: "Cholesteatoma — a keratin sac that erodes bone; can involve the ossicles, facial nerve, and inner ear." },
        { q: "Next step?", a: "ENT referral; imaging (CT temporal bone) and surgical management. Not a 'treat with drops and forget' problem." }
      ],
      teaching: "Painless, chronic, foul otorrhea + retraction/attic crust = cholesteatoma until proven otherwise."
    },
    {
      id: "case-bppv",
      stem: "A <b>62-year-old</b> reports <b>seconds-long spinning</b> each time he rolls over in bed or looks up. Hearing is normal. Neuro exam is normal.",
      prompts: [
        { q: "Most likely diagnosis and confirming test?", a: "BPPV; confirm with the Dix–Hallpike maneuver (reproduces vertigo + characteristic nystagmus)." },
        { q: "What would push you toward a central cause?", a: "Vertical/direction-changing nystagmus, a normal head-impulse test, skew deviation, or other neuro signs (HINTS) → image for posterior-circulation stroke." }
      ],
      teaching: "Brief, positional, hearing intact = think BPPV; but always screen for the central red flags before you settle."
    }
  ],

  /* ==================== CARDS TAB (active recall) ==================== */
  cards: [
    { id: "eac-anat", tags: ["Anatomy","External"], front: "What innervates the external ear, and why does it matter clinically?",
      back: "CN <strong>V3</strong> (auriculotemporal), <strong>VII</strong>, <strong>IX</strong>, <strong>X</strong> (Arnold's nerve), and C2–C3. Because so many nerves converge, ear pain is frequently <strong>referred</strong> from the TMJ, teeth, throat, or larynx." },
    { id: "eac-canal", tags: ["Anatomy","External"], front: "Describe the makeup of the external auditory canal.", back: "Outer ⅓ <strong>cartilaginous</strong> (contains cerumen glands), inner ⅔ <strong>bony</strong>. This is why you pull the pinna up-and-back (adult) to straighten it for otoscopy." },
    { id: "tm-landmarks2", tags: ["Anatomy","Otoscopy"], front: "Name the tympanic membrane landmarks.", back: "<ul><li><strong>Cone of light</strong> (antero-inferior)</li><li><strong>Umbo</strong> (central, most depressed)</li><li><strong>Manubrium + lateral process of malleus</strong></li><li><strong>Pars tensa</strong> and <strong>pars flaccida</strong></li></ul>" },
    { id: "ossicles", tags: ["Anatomy","Middle"], front: "Name the ossicular chain in order and what it connects.", back: "<strong>Malleus → incus → stapes → oval window.</strong> It mechanically transmits and amplifies TM vibration into the cochlear fluid." },
    { id: "me-muscles", tags: ["Anatomy","Middle"], front: "What are the two middle-ear muscles, their nerves, and their job?", back: "<strong>Tensor tympani</strong> (CN V3) and <strong>stapedius</strong> (CN VII). They reflexively <strong>dampen loud sounds</strong> (acoustic reflex)." },
    { id: "et", tags: ["Anatomy","Middle"], front: "What does the Eustachian tube connect, and what happens when it fails?", back: "Middle ear ↔ <strong>nasopharynx</strong>; equalizes pressure and drains the middle ear. Dysfunction → negative pressure, <strong>effusion</strong>, retraction, and conductive loss (common in kids)." },
    { id: "cn7-me", tags: ["Anatomy","Nerve"], front: "Why does the facial nerve matter in otology?", back: "<strong>CN VII</strong> courses through the temporal bone adjacent to the middle/inner ear, so it's at risk from cholesteatoma, tumor, necrotizing otitis externa, and surgery. <strong>Facial weakness + ear disease = red flag.</strong>" },
    { id: "chorda", tags: ["Anatomy","Nerve"], front: "What is the chorda tympani and what does it carry?", back: "A branch of <strong>CN VII</strong> that crosses the middle ear carrying <strong>taste from the anterior ⅔ of the tongue</strong> (and parasympathetics to submandibular/sublingual glands)." },
    { id: "inner-div", tags: ["Anatomy","Inner"], front: "Divide the inner ear by function.", back: "<strong>Cochlea</strong> = hearing; <strong>vestibule + semicircular canals</strong> = balance. Both are read out by <strong>CN VIII</strong> (cochlear + vestibular divisions)." },
    { id: "weber", tags: ["Clinical","Tuning fork"], front: "Interpret the Weber test.", back: "512 Hz on the vertex. <strong>Conductive loss:</strong> lateralizes to the <strong>affected</strong> ear. <strong>SNHL:</strong> lateralizes to the <strong>better</strong> ear." },
    { id: "rinne", tags: ["Clinical","Tuning fork"], front: "Interpret the Rinne test.", back: "Mastoid (BC) vs beside the ear (AC). <strong>Normal/SNHL:</strong> AC &gt; BC (positive). <strong>Conductive loss:</strong> BC &gt; AC (negative) in the affected ear." },
    { id: "chl-snhl", tags: ["Clinical","Hearing loss"], front: "Give the common causes of conductive vs sensorineural hearing loss.", back: "<strong>Conductive:</strong> cerumen, effusion, perforation, otosclerosis. <strong>SNHL:</strong> presbycusis, noise, ototoxicity, sudden SNHL, vestibular schwannoma (if asymmetric)." },
    { id: "sudden-snhl", tags: ["Clinical","Emergency"], front: "Why is sudden SNHL an emergency, and what's the workup?", redFlag: true,
      back: "<strong>Otologic emergency</strong> (≥30 dB over ≥3 frequencies within 72h). Forks show a sensorineural pattern (Weber to better ear, Rinne positive). <strong>Urgent audiogram, corticosteroids, MRI.</strong> Don't call it wax." },
    { id: "asym-snhl", tags: ["Clinical","Emergency"], front: "Asymmetric SNHL or unilateral tinnitus — what must you exclude?", redFlag: true,
      back: "<strong>Vestibular schwannoma</strong> (and other retrocochlear lesions). Get an <strong>MRI with contrast</strong> of the internal auditory canals." },
    { id: "oe-om", tags: ["Clinical","Infection"], front: "Distinguish otitis externa from acute otitis media on exam.", back: "<strong>Otitis externa:</strong> pain on <strong>tragal traction</strong>, canal oedema/discharge, TM often normal. <strong>AOM:</strong> <strong>bulging, erythematous TM</strong> with effusion; canal not tender." },
    { id: "cholesteatoma", tags: ["Clinical","Emergency"], front: "What findings suggest cholesteatoma, and why care?", redFlag: true,
      back: "<strong>Painless, chronic, foul otorrhea</strong> + <strong>attic retraction/crust</strong>. It's a keratin sac that <strong>erodes bone</strong> — can reach the ossicles, facial nerve, and labyrinth. Needs CT + surgery." },
    { id: "noe", tags: ["Clinical","Emergency"], front: "Which patient with an 'ear infection' should worry you most, and why?", redFlag: true,
      back: "A <strong>diabetic or immunocompromised</strong> patient with <strong>severe deep otalgia and granulation tissue</strong> in the canal — <strong>necrotizing (malignant) otitis externa</strong>, a skull-base osteomyelitis. Urgent ENT + imaging." },
    { id: "bppv", tags: ["Clinical","Dizziness"], front: "Classic BPPV — features, test, treatment.", back: "<strong>Brief, seconds-long positional vertigo</strong>; confirm with <strong>Dix–Hallpike</strong>; treat with the <strong>Epley</strong> maneuver. Hearing is normal." },
    { id: "meniere", tags: ["Clinical","Dizziness"], front: "What is the Ménière's tetrad?", back: "<strong>Episodic vertigo</strong> (minutes–hours) + <strong>fluctuating SNHL</strong> + <strong>tinnitus</strong> + <strong>aural fullness</strong>." },
    { id: "central-vertigo", tags: ["Clinical","Emergency"], front: "Which dizziness features point CENTRAL rather than peripheral?", redFlag: true,
      back: "<strong>HINTS</strong> red flags: direction-changing or vertical nystagmus, a <strong>normal head-impulse test</strong>, skew deviation, plus other neuro signs → image for posterior-circulation stroke." },
    { id: "facial-palsy", tags: ["Clinical","Nerve"], front: "Distinguish central from peripheral facial palsy — and why it matters in otology.", redFlag: true,
      back: "<strong>Peripheral (LMN):</strong> forehead involved (Bell's, or otologic causes — cholesteatoma, necrotizing OE, tumor). <strong>Central (UMN):</strong> forehead spared → stroke workup. Facial weakness with ear disease is an ENT red flag." }
  ]
});

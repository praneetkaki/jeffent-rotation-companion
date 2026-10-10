# Pediatric ENT

_Generated 2026-10-10 from content/*.js_

> **How to use:** paste a module file below (or ALL.md) into OpenEvidence / any reviewer, followed by an instruction such as
> "Fact-check every claim against current guidelines, flag anything outdated or wrong, and propose exact replacement wording. Keep our style: no em dashes, plain clinical language."
> Send changes back to Claude Code with the item id (e.g. `[card-id]`) so edits land in `content/*.js`. This folder is generated: do not edit it by hand.

---

## Module: Pediatric ENT (`pediatric-ent`)
- version: 0.4.0-draft
- status: DRAFT, pending faculty review. v0.2.0: added a depth pass covering genuinely missing pediatric-specific topics, congenital aural atresia/microtia and congenital (vs acquired) cholesteatoma, pediatric 
- facultyReviewer: ""
- curriculum anchors: UKMLA Content Map (GMC), scope anchor; owns Painful ear, Hearing loss, Stridor, Neck lump, Nasal obstruction, Snoring, Facial/periorbital swelling, all at pediatric-specific depth; ACGME Otolaryngology-HNS Milestones 2.0, primarily PC7 Pediatric Otolaryngology; AAP Clinical Practice Guidelines: Otitis Media, Tonsillectomy, Childhood Obstructive Sleep Apnea Syndrome; AAO-HNSF Clinical Practice Guidelines: Tympanostomy Tubes, Tonsillectomy in Children; UK undergraduate Delphi (Lloyd 2014), student-scope depth cap
- subtitle: The child is not a small adult: airway anatomy, ear disease, congenital anomalies, and the red flags unique to kids.

### Anatomy notes

**The pediatric airway vs the adult airway** (tags: Funnel-shaped · Cephalad · Floppy airway)

- Funnel-shaped, narrowest at the subglottis (vs the glottis in adults).
- Larynx sits more cephalad (about C3-4 vs C4-6).
- Tongue and tonsils are relatively larger for the airway size.
- Epiglottis is omega-shaped and floppier.
- So small amounts of edema cause disproportionate obstruction, and airway emergencies escalate faster.[figure: Explains why a child's funnel-shaped airway (narrowest at the subglottis, cephalad larynx, floppy omega-shaped epiglottis) makes small amounts of edema disproportionately obstructive compared to an adult's cylindrical airway.]

**Eustachian tube anatomy in children** (tags: Shorter, horizontal tube · Childhood otitis)

[figure: Contrasts the child's shorter, more horizontal Eustachian tube with the adult's steeper tube to explain why otitis media is a childhood disease.]
- A child's Eustachian tube is shorter, more horizontal, and less angled than an adult's.
- It therefore drains the middle ear less efficiently and lets nasopharyngeal secretions and pathogens reflux more easily.
- This is why otitis media is overwhelmingly a childhood disease, becoming far less common once the tube matures toward its adult angle.

**The branchial (pharyngeal) apparatus: the framework** (tags: Arches · Clefts · Pouches)

The branchial apparatus appears in weeks 4-7 as a series of bulges on the side of the embryonic head that build the face and neck. Learn the three-part vocabulary first, then hang every anomaly off it.

- Arches = the bulges themselves. Each has its own cartilage, muscle, artery (aortic arch), and cranial nerve. Mesoderm + neural crest core.
- Clefts (grooves) = the outside (ectoderm) gaps between arches.
- Pouches = the inside (endoderm) gaps between arches.Clefts are outside (Cutaneous), pouches are inside (Pharyngeal).
There are 6 arches, but arch 5 is rudimentary/absent, so clinically you learn arches 1, 2, 3, 4, and 6. Only the first cleft stays as a normal adult structure (the external auditory canal); every other cleft and pouch should obliterate by week 7. Failure to obliterate produces the anomalies covered next.
Tissue of origin: a cleft anomaly is lined by ectoderm (skin/squamous), a pouch anomaly by endoderm.
[figure: Explains second branchial cleft anomalies and the classic tract from a neck pit anterior to the SCM up to the tonsillar fossa.]

**Arch derivatives: cartilage, muscle & nerve** (tags: Arch nerves · Muscles · Skeleton)

Each arch is a self-contained package: its skeleton, its muscles, and its own cranial nerve all move together. The nerve of an arch supplies the muscles of that same arch.

- Arch 1 (mandibular): CN V3 (trigeminal). Muscles: mastication, mylohyoid, anterior belly of digastric, tensor tympani, tensor veli palatini. Skeleton: Meckel's cartilage -> malleus & incus; mandible, maxilla (membranous bone).
- Arch 2 (hyoid): CN VII (facial). Muscles: facial expression, stapedius, stylohyoid, posterior belly of digastric. Skeleton: Reichert's cartilage -> stapes, styloid process, lesser horn + upper hyoid.
- Arch 3: CN IX (glossopharyngeal). Muscle: stylopharyngeus. Skeleton: greater horn + lower body of hyoid.
- Arch 4: CN X, superior laryngeal branch. Muscles: pharyngeal constrictors, cricothyroid, levator veli palatini. Skeleton: thyroid & most laryngeal cartilages.
- Arch 6: CN X, recurrent laryngeal branch. Muscles: intrinsic laryngeal muscles (except cricothyroid). Skeleton: cricoid, arytenoid, remaining laryngeal cartilages.The cranial nerves of the arches run V, VII, IX, X in order (arches 1-2-3-4/6): trigeminal, facial, glossopharyngeal, then vagus, the same nerves involved in the gag/swallow reflex arc.
The cricothyroid is the exception: the one intrinsic laryngeal muscle innervated from arch 4 (superior laryngeal nerve); all other intrinsic laryngeal muscles arise from arch 6 (recurrent laryngeal nerve). This is the anatomic basis for the RLN and the external branch of the SLN being the two nerves at risk in thyroid surgery.

**Pouch derivatives (endoderm): glands & spaces** (tags: Pouch derivatives · Glands · Spaces)

The pouches are endodermal and become glands and spaces (thymus, parathyroids, middle ear, tonsil), contrasting with clefts (their external counterpart), which mostly disappear.

- Pouch 1 -> middle ear cavity + Eustachian tube (also contributes to the tympanic membrane).
- Pouch 2 -> palatine tonsil (crypts/surface epithelium).
- Pouch 3 -> inferior parathyroids + thymus.
- Pouch 4 -> superior parathyroids (+ ultimobranchial body -> C cells).Parathyroid Origin and Descent: inferior parathyroids arise from pouch 3, superior parathyroids from pouch 4, an inversion of the expected numeric order because pouch 3 also carries the thymus, dragging its parathyroids inferiorly past the pouch-4 pair as the thymus descends. This is also why an ectopic inferior parathyroid can end up in the mediastinum with the thymus.
DiGeorge syndrome (22q11.2) is failure of pouches 3 and 4, producing absent thymus (T-cell immunodeficiency) and absent parathyroids (hypocalcemia).

**Waldeyer's ring: the foundational picture** (tags: Adenoids · Tonsils · Lymphoid ring)

A ring of mucosa-associated lymphoid tissue (MALT) encircling the opening of the oral and nasal cavities into the pharynx, first described by Wilhelm von Waldeyer. It is the body's first-line immune "gatekeeper" at the crossroads of the respiratory and alimentary tracts, sampling inhaled and ingested antigens.
The four components, superior to inferior:

- Pharyngeal tonsil (adenoids): single, midline, in the roof/posterior wall of the nasopharynx. Not seen on routine oral exam (needs mirror/endoscopy).
- Tubal tonsils: paired, at the torus tubarius around each Eustachian tube opening. The component students most often forget, and the anatomic link between adenoid disease and middle-ear effusion.
- Palatine tonsils: paired, in the tonsillar fossa between the palatoglossal (anterior) and palatopharyngeal (posterior) arches. These are "the tonsils" seen on oral exam and graded on the Brodsky scale (0-4+, where 4+ = "kissing" tonsils).
- Lingual tonsil: at the base of the tongue.Superior to inferior: adenoid (roof) -> tubal (around the tubes) -> palatine (visible on oral exam) -> lingual (tongue base).
Immunologically: lymphoid tissue with germinal centers activating B cells against nasally/orally encountered pathogens, sampled through deep epithelial crypts (the palatine tonsil has 10-30 branched crypts, massively expanding surface area but also trapping debris and becoming an infection reservoir). Unlike lymph nodes, tonsils have no afferent lymphatics: antigen reaches them directly across the epithelium.
[figure: Describes the ring of lymphoid tissue (adenoids, tubal tonsils, palatine tonsils, lingual tonsil) guarding the aerodigestive entrance.]

**The age curve: why this is a childhood problem** (tags: Peak ages 2-8 · Regression)

Adenoid and tonsillar tissue is small at birth, grows through early childhood, peaks roughly between ages 2 and 8 (relative to a still-small pharynx), then regresses through adolescence.
This growth-then-involution curve, layered on repeated viral/bacterial antigen exposure, is exactly why obstructive and infectious tonsil disease clusters in preschool/early-school-age children and becomes far less common in adults, in whom adenoids are usually vestigial.
Blood supply pearl (bleeding risk): the palatine tonsil is fed mainly by the tonsillar branch of the facial artery, with contributions from the ascending pharyngeal, lingual, and descending palatine arteries: all from the external carotid system.

**The two clinical endpoints** (tags: Recurrent tonsillitis · Obstruction)

EndpointMechanismConsequencesRecurrent tonsillitisRepeated infection and inflammation of the palatine tonsils (histologically fibrosis, reduced follicles, strong inflammatory infiltrate).Drives the recurrent-infection indication for tonsillectomy (Paradise-criteria frequency).Adenotonsillar hypertrophy with obstructionBulk enlargement narrows the nasopharyngeal and oropharyngeal airway. Adenoid hypertrophy also obstructs the Eustachian tube.Mouth breathing, snoring, sleep-disordered breathing, and pediatric OSA (now the leading indication for T&A). Otitis media with effusion. Chronic untreated obstruction can cause adenoid facies and, if severe, cor pulmonale.Waldeyer's ring is protective lymphoid tissue that predictably enlarges in early childhood, helpful for immunity, but when it over-enlarges or is chronically infected it becomes the anatomic root of recurrent tonsillitis, middle-ear effusion, and pediatric obstructive sleep apnea.

### Anatomy diagrams (4)

**Diagram: Pediatric vs adult airway shape**

Funnel-shaped vs cylindrical: why a little swelling goes a long way in a child. Name each feature, then reveal.

_Image source: Pediatric vs. Adult Airway Anatomy and Geometric Differences. Illustration generated with Google Gemini._
- Tongue: relatively larger for the airway size in a child, crowding the oropharynx; proportionally smaller relative to airway size in an adult.
- Epiglottis: omega-shaped and floppier in a child; flatter and stiffer in an adult.
- Larynx sits more cephalad in a child (~C3-4) than in an adult (~C4-6, more caudal).
- Vocal cords (glottis): the true vocal folds; in a child this is NOT the narrowest point (the subglottis below it is), but in an adult this IS the narrowest point of the airway.
- In a child, the airway is narrowest at the SUBGLOTTIS, not the glottis, so mucosal edema here causes disproportionate obstruction. In an adult, the airway is narrowest at the GLOTTIS (true vocal cords), unlike the child's subglottic narrowing.
- Subglottis: bounded by the complete cricoid ring, the narrowest fixed point of a child's airway; present in the adult too, but there it is not the narrowest point (the glottis above it is).
- Cricoid cartilage: the only complete (360-degree) cartilage ring in the airway, defining the subglottis; same landmark in the adult, just further from the narrowest point.
- Trachea: continues below the cricoid; shorter overall length and funnel-shaped in a child, roughly cylindrical caliber in an adult.
- Tongue: relatively larger for the airway size in a child, crowding the oropharynx; proportionally smaller relative to airway size in an adult.
- Epiglottis: omega-shaped and floppier in a child; flatter and stiffer in an adult.
- Larynx sits more cephalad in a child (~C3-4) than in an adult (~C4-6, more caudal).
- Vocal cords (glottis): the true vocal folds; in a child this is NOT the narrowest point (the subglottis below it is), but in an adult this IS the narrowest point of the airway.
- In a child, the airway is narrowest at the SUBGLOTTIS, not the glottis, so mucosal edema here causes disproportionate obstruction. In an adult, the airway is narrowest at the GLOTTIS (true vocal cords), unlike the child's subglottic narrowing.
- Subglottis: bounded by the complete cricoid ring, the narrowest fixed point of a child's airway; present in the adult too, but there it is not the narrowest point (the glottis above it is).
- Cricoid cartilage: the only complete (360-degree) cartilage ring in the airway, defining the subglottis; same landmark in the adult, just further from the narrowest point.
- Trachea: continues below the cricoid; shorter overall length and funnel-shaped in a child, roughly cylindrical caliber in an adult.

**Diagram: Second branchial cleft tract**

The classic route from a preauricular/neck pit toward the tonsillar fossa. Name each landmark, then reveal.

_Image source: Second Branchial Cleft Anomalies Anatomic Tract. Illustration generated with Google Gemini._
- Tonsillar fossa: the internal (deep) end of the classic second branchial cleft tract.
- Sternocleidomastoid muscle: the tract runs deep to (medial to) this muscle as it courses toward the tonsil, and the external opening classically sits anterior to its lower third.
- Tonsillar fossa: where a persistent second branchial cleft tract terminates internally.
- Second branchial cleft tract: the embryologic remnant that gives rise to branchial cleft cysts, sinuses, and fistulae.
- Carotid sheath: the tract runs between the internal and external carotid arteries, close to this neurovascular bundle.
- Branchial cleft cyst (typical location): presents as a smooth, often fluctuant lateral neck mass anterior to the SCM.
- External opening (skin pit): a pit or sinus anterior to the lower SCM; can intermittently drain mucoid fluid or become infected.

**Diagram: Waldeyer's ring**

The lymphoid ring guarding the aerodigestive entrance. Name each component, then reveal.

_Image source: Waldeyer's Ring of Lymphoid Tissue. Illustration generated with Google Gemini._
- Tubal tonsil: lymphoid tissue around the pharyngeal (Eustachian tube) opening, part of Waldeyer's ring though less commonly tested.
- Adenoids (nasopharyngeal tonsil): a single midline mass in the nasopharyngeal roof; hypertrophy is a leading cause of pediatric nasal obstruction and OSA.
- Nasopharynx: the space behind the nasal cavity where the adenoids sit, bounded inferiorly by the soft palate.
- Palatine tonsil: the paired tonsils visible on oral exam; the ones removed in a routine tonsillectomy.
- Oropharynx: houses the palatine tonsils between the soft palate and the hyoid bone.
- Tongue: its posterior third (base) carries the lingual tonsil.
- Lingual tonsil: lymphoid tissue at the tongue base; can hypertrophy and contribute to obstructive sleep apnea, especially after tonsillectomy.

**Diagram: Pediatric vs adult Eustachian tube angle**

Same tube, different geometry: shorter and flatter in a child, longer and steeper in an adult. Name each feature, then reveal.

_Image source: Pediatric vs. Adult Eustachian Tube Orientation and Drainage. Illustration generated with Google Gemini._
- Middle ear (child): the air-filled space medial to the tympanic membrane that the Eustachian tube must ventilate and drain. Middle ear (adult): the same space, ventilated by a longer, steeper Eustachian tube.
- Tympanic membrane (child): separates the middle ear from the ear canal; retraction/effusion here reflects poor Eustachian tube function. Tympanic membrane (adult): normally well-aerated because the adult Eustachian tube equalizes pressure and drains effectively.
- Eustachian tube (child): shorter, floppier, and more horizontal than in an adult, so it drains and ventilates the middle ear less efficiently, predisposing to otitis media. Eustachian tube (adult): longer, stiffer, and angled closer to vertical (~45 degrees), giving more effective drainage and ventilation.
- Nasopharynx (child): the Eustachian tube's nasopharyngeal opening; the tube's flatter angle here favors reflux of nasopharyngeal secretions into the middle ear. Nasopharynx (adult): the tube's steeper angle here makes reflux far less likely than in a child.
- Child Eustachian tube: shorter, flatter, drains poorly, i.e. the anatomic basis for the high incidence of otitis media in young children.
- Middle ear (child): the air-filled space medial to the tympanic membrane that the Eustachian tube must ventilate and drain. Middle ear (adult): the same space, ventilated by a longer, steeper Eustachian tube.
- Tympanic membrane (child): separates the middle ear from the ear canal; retraction/effusion here reflects poor Eustachian tube function. Tympanic membrane (adult): normally well-aerated because the adult Eustachian tube equalizes pressure and drains effectively.
- Eustachian tube (child): shorter, floppier, and more horizontal than in an adult, so it drains and ventilates the middle ear less efficiently, predisposing to otitis media. Eustachian tube (adult): longer, stiffer, and angled closer to vertical (~45 degrees), giving more effective drainage and ventilation.
- Nasopharynx (child): the Eustachian tube's nasopharyngeal opening; the tube's flatter angle here favors reflux of nasopharyngeal secretions into the middle ear. Nasopharynx (adult): the tube's steeper angle here makes reflux far less likely than in a child.
- Adult Eustachian tube: longer, steeper, drains well, one reason acute otitis media becomes far less common after early childhood.

### Clinical blocks (17)

**[ome-vs-aom] Otitis media with effusion (OME) vs acute otitis media (AOM)**

The distinction changes management entirely.

|  | OME | AOM |
| --- | --- | --- |
| Definition | Fluid behind an intact TM, no acute infection signs | Acute infection: bulging TM, acute signs/symptoms |
| Symptoms | Often none, or muffled hearing | Otalgia, fever, irritability |
| TM appearance | Dull, effusion, may see air-fluid level | Bulging, erythematous, opaque |
| First-line management | Watchful waiting (most resolve in weeks) | Analgesia for all; then observation vs high-dose amoxicillin (80-90 mg/kg/day) depending on age/severity. Use amoxicillin-clavulanate if amoxicillin in the prior 30 days, concurrent purulent conjunctivitis, or treatment failure at 48-72h. |

**[aom-observation-criteria] AOM: who can be watched, and what causes it**

Who can be observed: Always treat infants <6 months.

- Ages 6-23 months: antibiotics if bilateral, severe (T &ge;39&deg;C, moderate/severe otalgia, or otalgia &ge;48h), or otorrhea; otherwise a 48-72h observation option with shared decision-making and a rescue prescription is reasonable for mild, unilateral disease.
- Ages &ge;2 years: observation is an option for non-severe disease.
- Reassess and escalate to amoxicillin-clavulanate if not improving at 48-72h.Common organisms: Streptococcus pneumoniae, non-typeable Haemophilus influenzae, and Moraxella catarrhalis.

**[peds-tna-indications] Tonsillectomy & adenoidectomy: when it's indicated**

Recurrent infection (the 'Paradise criteria' as a reference point), each episode documented and meeting defined severity criteria:

- Roughly ≥7 episodes in 1 year
- ≥5/year for 2 years
- ≥3/year for 3 yearsIn current practice, obstructive sleep-disordered breathing/OSA from adenotonsillar hypertrophy has become the leading indication for T&A, arguably more common now than recurrent infection.

**[intracapsular-tonsillectomy] Intracapsular (partial) vs extracapsular (total) tonsillectomy**

For an obstructive indication (sleep-disordered breathing/OSA), intracapsular tonsillectomy (tonsillotomy), which removes the tonsil tissue while preserving the surrounding capsule as a biologic dressing over the pharyngeal muscle, is increasingly preferred. It gives comparable polysomnographic and quality-of-life improvement to total tonsillectomy, with less pain, faster return to normal diet, and substantially lower post-tonsillectomy hemorrhage (roughly 1.7% vs 4.1% in large cohorts, with a much lower return-to-OR rate).
The trade-off is a small risk of tonsillar regrowth and symptom recurrence (~2-15% depending on follow-up), so it requires long-term surveillance.
Extracapsular (total) tonsillectomy remains preferred when recurrent/chronic tonsillitis is the driving indication, since it definitively removes all tonsil tissue.

**[peds-tna-perioperative] Perioperative T&A essentials (AAO-HNS)**

Give a single intraoperative dose of IV dexamethasone (~0.5 mg/kg, max ~10-16 mg): it halves postoperative nausea/vomiting and speeds return to a normal diet. Some centers are now adding a short postoperative oral dexamethasone course (0.5 mg/kg on postop days 2/4/6) as an analgesic adjunct that may reduce opioid prescriptions without increasing bleeding risk, though this is emerging/optional practice, not established guidance.
Do not give routine perioperative prophylactic antibiotics: they don't reduce infection, pain, or bleeding.
Manage pain with scheduled acetaminophen &plusmn; ibuprofen (ibuprofen does not meaningfully increase bleeding). Do not administer or prescribe codeine (or codeine-containing medications) to children <12 years after tonsillectomy: ultra-rapid CYP2D6 metabolizers can convert codeine to morphine and suffer fatal respiratory depression. Tramadol shares this CYP2D6 mechanism and is likewise avoided.
Admit high-risk children (age <3, severe OSA, comorbidities) for postoperative monitoring given the risk of respiratory compromise.

**[newborn-hearing-screen] Newborn hearing screening: the 1-3-6 rule**

The 1-3-6 rule, in order:

- Screen by 1 month of age (universal newborn hearing screening, using OAE or automated ABR).
- Diagnose definitively by 3 months if screening fails.
- Begin intervention (amplification, early intervention services) by 6 months.Missing this window measurably worsens speech and language development outcomes.

**[congenital-neck-masses] Congenital neck masses by location**

Location does most of the differential work.
Thyroglossal duct cyst is the most common congenital neck mass (~70%); branchial cleft anomalies are second (~20%). Most congenital neck masses are midline (~66%).
[figure: Uses anatomic location (midline, lateral anterior to SCM, posterior triangle, preauricular) to differentiate congenital neck mass diagnoses.]

| Location | Likely diagnosis |
| --- | --- |
| Midline | Thyroglossal duct cyst (moves with tongue protrusion/swallowing); image the thyroid before excising, since it may be the only functioning thyroid tissue |
| Lateral, anterior to SCM | Branchial cleft cyst (2nd arch most common) |
| Posterior triangle | Cystic hygroma / lymphatic malformation, often present at birth or found prenatally |
| Preauricular | Preauricular pit/sinus (branchial anomaly), can become infected |

**[branchial-anomaly-rule] The unifying rule: where each branchial anomaly opens internally**

A branchial anomaly is a remnant that failed to obliterate. Whether it presents as a cyst (no opening), sinus (one opening), or fistula (opens to both skin and pharynx) depends on what persisted, but the internal opening is fixed by the arch of origin:

- 1st cleft -> external auditory canal / around the pinna & parotid (near the facial nerve).
- 2nd cleft -> tonsillar fossa (most common).
- 3rd & 4th -> pyriform sinus (3rd = base, 4th = apex; almost always left-sided).The internal opening descends in the pharynx as the arch number rises: 1st = ear, 2nd = tonsil, 3rd/4th = pyriform sinus.
Second-cleft dominance: roughly 90-95% of all branchial cleft anomalies are 2nd cleft: a lateral neck cyst along the anterior border of the SCM is a 2nd branchial cleft cyst until proven otherwise.

**[second-branchial-cleft-cyst] The 2nd branchial cleft cyst: the must-know anomaly**

Classic picture: a painless, smooth, fluctuant mass at the anterior border of the upper-third SCM, often first noticed or enlarging after an upper respiratory infection. Aspirate resembles "motor oil"/cholesterol-crystal fluid.
The tract runs from the tonsillar fossa, between the internal and external carotid arteries, superficial to CN IX and XII, and terminates at the skin anterior to the SCM.
FNA is useful and accurate for diagnosis in older children/adults, but in an adult over ~40, a "branchial cleft cyst" must have a cystic nodal metastasis from HPV+ oropharyngeal cancer excluded first.
Definitive treatment is complete surgical excision of the cyst and any tract; incomplete excision recurs. Drain/treat active infection before elective excision.

**[pyriform-sinus-tract] 3rd/4th anomalies: the pyriform sinus fistula pitfall**

3rd and 4th arch anomalies both open into the pyriform sinus and course near the thyroid, so they're lumped clinically as pyriform sinus fistulae. Almost always left-sided.
Classic presentation: recurrent left-sided neck abscess, or "acute suppurative thyroiditis" in a child: an otherwise rare diagnosis that should immediately raise this anomaly.
Definitive management requires identifying and obliterating the pyriform sinus tract (endoscopic cauterization or open excision), not just draining the abscess.

**[first-branchial-cleft-anomaly] 1st cleft anomaly: the facial-nerve trap**

Rare (~1% of branchial anomalies) but high-stakes: presents around the angle of the mandible/periauricular region, or as recurrent otorrhea with a normal middle ear.
The tract runs near or through the facial nerve and parotid, so excision risks CN VII injury and belongs to an experienced surgeon.

**[lateral-vs-midline-neck-masses] Lateral vs midline neck masses: the quick contrast**

Midline masses that elevate with tongue protrusion are thyroglossal duct cysts; lateral masses anterior to the SCM are branchial cleft anomalies.

| Mass | Location | Moves with tongue protrusion? | Origin |
| --- | --- | --- | --- |
| 2nd branchial cleft cyst | Lateral, anterior to SCM | No | 2nd cleft remnant |
| Thyroglossal duct cyst | Midline, near hyoid | Yes | Thyroglossal tract |
| Dermoid cyst | Midline | No | Ectodermal inclusion |
| Cystic hygroma / lymphatic malformation | Posterior triangle | No | Lymphatic |

**[congenital-airway] Congenital airway anomalies to recognize**

Choanal atresia: newborns are obligate nasal breathers, so bilateral atresia causes cyclical cyanosis that improves with crying (mouth breathing) and worsens at rest; it's part of the CHARGE association.
Laryngomalacia: the most common cause of stridor in infants, with inspiratory stridor worse when supine, feeding, or crying; it typically self-resolves by 12-18 months, but severe cases with growth failure need surgery (supraglottoplasty).

**[congenital-ear-anomalies] Congenital & structural ear anomalies: aural atresia, microtia, congenital cholesteatoma**

Aural atresia and microtia (absent/malformed ear canal and pinna) occur on a spectrum, often together, and may be isolated or syndromic (Treacher Collins syndrome, hemifacial microsomia/Goldenhar syndrome).
Unilateral cases with a normal contralateral ear can be worked up electively; bilateral atresia causes significant conductive hearing loss from birth and is urgent: audiologic assessment and a bone-conduction hearing device are needed right away, since there is no ear canal for a conventional aid and the 1-3-6 hearing timeline still applies. Surgical ear canal/pinna reconstruction is deferred to school age or later (~age 6+, once rib cartilage is adequate for grafting), so early hearing access has to come from amplification, not surgery.
Congenital cholesteatoma is a distinct entity from the acquired cholesteatoma covered in Foundations. It forms behind an intact, normal-looking tympanic membrane in a child with no history of otitis media, perforation, or ear surgery. Because there's no otorrhea to prompt a visit, it is often found incidentally (a pearly-white mass on routine exam) or via conductive hearing loss rather than discharge. Management is still surgical removal; earlier removal limits ossicular erosion.

|  | Acquired cholesteatoma (Foundations) | Congenital cholesteatoma |
| --- | --- | --- |
| History | Chronic otorrhea, prior perforation/infection | None, with no history of ear infection or perforation |
| TM appearance | Retracted/perforated, crusted attic | Intact, normal-looking |
| Typical clue | Painless foul otorrhea | Incidental pearly-white mass, or conductive hearing loss |
| Management | Surgical removal | Surgical removal, earlier where possible to limit ossicular erosion |

**[peds-osa-depth] Pediatric OSA: diagnosis and the post-adenotonsillectomy question**

Pediatric OSA is diagnosed against a different threshold than adult OSA (adult depth lives in the Sleep Surgery & OSA track): an obstructive apnea-hypopnea index (AHI) ≥1 event/hour on polysomnography is abnormal in a child, versus ≥5/hour in an adult, a much lower bar. Polysomnography remains the gold standard, though in practice many children go straight to adenotonsillectomy on a strong clinical picture (snoring, witnessed apneas, gasping) without a preoperative sleep study, per AAP guidance; PSG is reserved for cases where the diagnosis/severity is unclear or the child is high-risk for residual disease.
Adenotonsillectomy resolves OSA in most otherwise-healthy children, but not all. Risk factors for persistent/residual OSA after T&A include:

- Obesity
- Down syndrome (macroglossia, midface hypoplasia, hypotonia)
- Other craniofacial syndromes
- Severe preoperative AHIThese children should get a postoperative polysomnogram rather than being assumed cured, since a second driver of obstruction is more likely.

**[neonatal-airway-beyond-laryngomalacia] Neonatal upper airway obstruction beyond laryngomalacia**

Pierre Robin sequence is a triad of micrognathia (small mandible), glossoptosis (the tongue falls posteriorly into the airway because the small jaw can't hold it forward), and a U-shaped cleft palate. The jaw is the primary abnormality; glossoptosis and the cleft are downstream consequences. Airway obstruction from the retruded tongue is the presenting problem, not the palate itself. Management is a ladder:

- Prone positioning (lets the tongue fall forward by gravity) and a nasopharyngeal airway, first-line for mild cases.
- Tongue-lip adhesion or mandibular distraction osteogenesis, for feeding difficulty, growth failure, or significant desaturations.
- Tracheostomy, reserved as a last resort.Vascular ring and tracheomalacia both cause biphasic stridor (inspiratory and expiratory) rather than the predominantly inspiratory, positional stridor of laryngomalacia, and are often worse with feeding.
A vascular ring (an aberrant great-vessel arrangement encircling the trachea and esophagus) can also cause feeding difficulty or 'dying spells' from esophageal compression.
Where laryngomalacia is usually a clinical diagnosis, biphasic stridor warrants imaging (barium esophagram, CT/MR angiography) and often bronchoscopy to look for external tracheal compression rather than assuming a floppy larynx.

**[rrp-croup-mimic] Recurrent respiratory papillomatosis: the stridor/hoarseness mimic of croup**

Recurrent respiratory papillomatosis (RRP), introduced in Laryngology as an HPV-driven cause of hoarseness, has a distinct pediatric presentation worth knowing on its own.
Juvenile-onset RRP is acquired perinatally, from a mother with genital HPV (types 6/11) during vaginal delivery, and typically presents between ages 2 and 4 with progressive hoarseness that, as papillomas enlarge, can progress to stridor and airway compromise.
Because it is slow and recurrent, it is easy to mistake for recurrent croup or asthma. A child with 'recurrent croup' that doesn't fit the usual single-episode viral pattern, or with progressive voice change alongside noisy breathing, deserves direct laryngoscopy, not another course of steroids.
Disease burden is tracked with the Derkay staging system. Because papillomas regrow, management is repeated surgical debulking (microdebrider or CO2/KTP laser) rather than a single cure; adjuvant therapy (e.g., cidofovir, bevacizumab) is reserved for aggressive, rapidly recurring disease.
The single biggest lever on juvenile-onset RRP is prevention: routine HPV vaccination lowers the prevalence of maternal genital HPV infection and, with it, the risk of perinatal transmission.

### Red flags
- Bilateral choanal atresia in a newborn: an airway emergency (obligate nasal breathers), needing an oral airway/McGovern nipple and urgent ENT.
- Stridor with growth failure or severe apneic episodes in a laryngomalacia-presenting infant: beyond the 'watch and wait' threshold, needing surgical evaluation (supraglottoplasty).
- Congenital neck mass with rapid enlargement, fever, or fluctuance: suggests an infected branchial cleft cyst or abscess.
- Missed 1-3-6 hearing-screening window: delayed diagnosis and intervention measurably worsens speech-language outcomes.
- Midline neck mass planned for excision without thyroid imaging: must exclude ectopic thyroid first, since a thyroglossal duct cyst excision (Sistrunk) assumes normal thyroid tissue exists elsewhere.
- Worsening stridor over weeks with cutaneous hemangiomas: consider subglottic hemangioma (biphasic growth) and the PHACE syndrome association.
- Torticollis, neck pain, and refusal to move the neck in a young child: think retropharyngeal abscess or deep neck infection, not just muscular torticollis.
- Untreated pediatric OSA: can progress to growth failure, behavioral/attention problems, and, rarely, cor pulmonale if severe and prolonged.
- Pierre Robin sequence with feeding difficulty, growth failure, or desaturations: beyond what prone positioning and a nasopharyngeal airway can manage, needing escalation to tongue-lip adhesion or mandibular distraction rather than more time in the prone position.
- Progressive hoarseness with new stridor in a toddler, especially if repeatedly labeled 'croup': think recurrent respiratory papillomatosis and get a laryngoscopy rather than repeating steroids.
- Recurrent left-sided neck abscess or suppurative thyroiditis in a child: suspect a 3rd/4th pyriform sinus fistula; image and find the tract rather than repeatedly draining.
- 'Branchial cleft cyst' first appearing in an adult >40: exclude a cystic metastasis from HPV+ oropharyngeal carcinoma before calling it congenital.
- Recurrent otorrhea with a normal-looking middle ear &plusmn; periauricular swelling: consider a 1st branchial cleft anomaly near the facial nerve.
- Neonate/infant with hypocalcemia, recurrent infections, and congenital heart disease: think DiGeorge syndrome (pouch 3/4 failure).

### Cases (9)

**Case [case-choanal-atresia]**

Stem: A newborn has episodes of cyanosis at rest that resolve with crying, and repeated attempts to pass a nasal catheter fail bilaterally.

- Q: What is happening, and why does crying help?
  A: Newborns are obligate nasal breathers; bilateral choanal atresia blocks the nasal airway, and crying opens the mouth, allowing oral breathing and relieving the cyanosis.

- Q: What is the immediate management, and what association should be considered?
  A: Secure an oral airway (e.g., a McGovern nipple) urgently and get ENT involved. Screen for the CHARGE association (Coloboma, Heart defects, Atresia choanae, Retarded growth, Genital abnormalities, Ear abnormalities).

Teaching: A newborn whose cyanosis improves with crying and worsens at rest has an obstructed nose until proven otherwise. Bilateral choanal atresia is an airway emergency in this age group specifically.

**Case [case-recurrent-aom]**

Stem: A 4-year-old has had 6 episodes of acute otitis media in the past 12 months, each treated with antibiotics, with persistent effusion noted between episodes.

- Q: Does this meet criteria for surgical intervention, and what would it be?
  A: This approaches the recurrent AOM threshold (historically referenced against the Paradise criteria, ~7/year). Combined with persistent effusion, this supports tympanostomy tube placement, which reduces episode frequency and severity and treats the effusion's hearing impact directly.

- Q: What would push you toward T&A instead of, or in addition to, tubes?
  A: If there were also obstructive symptoms (snoring, sleep-disordered breathing) from adenotonsillar hypertrophy, adenoidectomy (± tonsillectomy) would be added, since obstructive sleep-disordered breathing is now the leading indication for T&A in children.

Teaching: Recurrent AOM plus persistent effusion is a tympanostomy-tube conversation; add T&A to the conversation only if there's also an obstructive component.

**Case [case-failed-newborn-screen]**

Stem: A newborn fails the automated ABR hearing screen before hospital discharge. The parents are told 'it's probably just fluid, don't worry about it.'

- Q: Is that reassurance appropriate?
  A: Not without a defined follow-up plan. A failed screen requires diagnostic audiologic testing by 3 months of age; dismissing it risks missing the window for early intervention.

- Q: What happens if hearing loss is confirmed?
  A: Intervention (amplification, early intervention services) should begin by 6 months. The full '1-3-6' timeline (screen by 1 month, diagnose by 3, intervene by 6) exists because early intervention measurably improves speech-language outcomes.

Teaching: A failed newborn hearing screen is not a reassurance conversation. It's the start of a time-sensitive diagnostic pathway.

**Case [case-thyroglossal-cyst]**

Stem: A 3-year-old has a painless midline neck swelling that moves upward when he sticks out his tongue.

- Q: What is the leading diagnosis, and what confirms it clinically?
  A: Thyroglossal duct cyst. The movement with tongue protrusion (and with swallowing) reflects its embryologic attachment along the thyroglossal duct tract.

- Q: What must be done before surgery, and why?
  A: Thyroid ultrasound (± thyroid function tests) to confirm normal thyroid tissue is present in its usual location. In a minority of cases the cyst contains the patient's only functioning thyroid tissue, and removing it without checking could cause surgical hypothyroidism. Definitive treatment is the Sistrunk procedure.

Teaching: [figure: Child with a midline neck mass moving with tongue protrusion, diagnosed as thyroglossal duct cyst, requiring thyroid imaging before Sistrunk procedure.]Don't excise a midline neck cyst without imaging the thyroid first. 'It's probably just a thyroglossal cyst' still needs that one confirmatory step.

**Case [case-laryngomalacia-vs-hemangioma]**

Stem: A 6-week-old has inspiratory stridor, worse when feeding and lying supine, present since 2 weeks of age. He is gaining weight normally.

- Q: What is the most likely diagnosis, and what is the expected course?
  A: Laryngomalacia, the most common cause of infant stridor, positional and feeding-related, and typically self-resolves by 12-18 months. Reassurance and monitoring growth is appropriate for mild cases.

- Q: What change in this picture would make you reconsider, and what would you consider instead?
  A: Worsening stridor over weeks (rather than stable/improving), growth failure, or cutaneous hemangiomas elsewhere should raise concern for a subglottic hemangioma (biphasic growth pattern, can rapidly enlarge) and its association with PHACE syndrome. This needs direct airway evaluation, not reassurance.

Teaching: Stable or improving stridor in a thriving infant is reassuring for laryngomalacia; worsening stridor is a reason to look for something else, not to wait longer.

**Case [case-pierre-robin]**

Stem: A newborn has a very small, retruded jaw, a U-shaped cleft palate noted on newborn exam, and noisy, obstructed breathing that improves somewhat prone but still shows intermittent desaturations and difficulty completing feeds.

- Q: What is the diagnosis, and what actually causes the airway obstruction?
  A: Pierre Robin sequence. Micrognathia is the primary abnormality; the small jaw can't hold the tongue forward, so glossoptosis (the tongue falling posteriorly) obstructs the airway. The U-shaped cleft palate is a downstream consequence, not the cause of obstruction.

- Q: Given ongoing desaturations and feeding difficulty despite prone positioning, what's next?
  A: This has moved beyond first-line positioning and nasopharyngeal airway. Escalate to tongue-lip adhesion or mandibular distraction osteogenesis to relieve the obstruction; tracheostomy is reserved for cases that fail this step.

Teaching: In Pierre Robin sequence the jaw is the problem and the tongue is the airway threat. The palate cleft comes along for the ride, and persistent desaturations mean positioning alone has failed.

**Case [case-rrp-mimic-croup]**

Stem: A 3-year-old has had four episodes of 'croup' over 8 months, each treated with steroids and racemic epinephrine with only partial improvement. Between episodes his voice has become progressively more hoarse, and his parents now notice noisy breathing even when he's calm.

- Q: What should make you doubt the recurrent-croup label?
  A: True viral croup is typically a single self-limited illness following a URI, not four recurrences with progressively worsening interval hoarseness. That pattern instead fits recurrent respiratory papillomatosis (RRP).

- Q: What's the next step, and how did he most likely acquire it?
  A: Direct laryngoscopy to look for papillomas, not another course of steroids. Juvenile-onset RRP is acquired perinatally from maternal genital HPV (types 6/11) during vaginal delivery.

Teaching: Progressive interval hoarseness plus recurrent 'croup' that doesn't fit the usual viral pattern is a laryngoscopy indication, not a repeat-steroids indication.

**Case [case-pediatric-airway-foreign-body]**

Stem: A 20-month-old is brought in with a 2-week history of persistent cough and intermittent wheeze that hasn't improved with an albuterol trial. His mother recalls no choking episode, though he was playing near a bowl of popcorn and small toy blocks around when the cough began. He is afebrile and well-grown; a chest X-ray was read as normal.

- Q: Does the absence of a witnessed choking event, or a normal chest X-ray, rule out foreign body aspiration?
  A: No. Pediatric airway foreign body aspiration peaks between ages 1 and 3 years, when children explore orally and lack molars to fully chew, and caregivers often never witness the event. The classic triad (cough, wheeze, and decreased breath sounds) is frequently incomplete or absent, especially once the acute phase passes. Most aspirated foreign bodies (peanuts, popcorn, toy fragments) are radiolucent, so a normal plain film does not exclude the diagnosis.

- Q: What imaging beyond a standard inspiratory chest X-ray would help, and what are you looking for?
  A: Inspiratory-expiratory films (or a lateral decubitus series in a child too young to cooperate) looking for air-trapping: a ball-valve effect where the affected lung fails to deflate on expiration (or the down lung fails to collapse in decubitus positioning), causing unilateral hyperinflation. The object itself is rarely seen; the indirect sign of trapped air is often the only clue.

- Q: Would it matter if the object were a button battery rather than a toy block or food item?
  A: Yes. This is the key organic/inorganic distinction. A button battery in the airway (or esophagus) is a true emergency: it causes liquefactive necrosis of surrounding tissue within hours via generated current, and needs emergent removal, not routine scheduling. Organic material (peanuts, other food) is not as immediately tissue-destructive but provokes an intense local inflammatory reaction the longer it sits, making removal progressively harder, so even 'routine' organic foreign bodies should not be delayed.

- Q: What is the definitive diagnostic and therapeutic step here, regardless of what the imaging shows?
  A: Rigid bronchoscopy under general anesthesia. It is both diagnostic (directly visualizes the airway) and therapeutic (allows controlled extraction with rigid grasping forceps while maintaining ventilation). A high-suspicion history (even without positive imaging) is enough to proceed to bronchoscopy; imaging supports the decision but a negative film should not stop it.

Teaching: Pediatric airway foreign body aspiration peaks at ages 1-3, the classic triad is often absent, and most objects are radiolucent. A normal CXR doesn't clear the diagnosis, and rigid bronchoscopy remains both the definitive test and the treatment.

**Case [case-pediatric-retropharyngeal-abscess]**

Stem: A 3-year-old has had 4 days of fever and reduced oral intake following a recent upper respiratory infection. On exam she holds her neck rigidly extended and cries when you try to flex or rotate it, her voice sounds muffled, and she is drooling.

- Q: What diagnosis fits neck stiffness, muffled voice, and drooling in a young febrile child, and why does she extend rather than flex her neck?
  A: Retropharyngeal abscess, typically a disease of children under 6 years, arising when a preceding URI/pharyngitis seeds the retropharyngeal lymph nodes, which suppurate. The child extends the neck to maximize airway calibre and avoid pressure on the inflamed prevertebral space; flexion and rotation are painful, producing torticollis and neck stiffness that can be mistaken for meningitis or muscular torticollis.

- Q: What would a lateral neck X-ray show, and what's a simple threshold to remember?
  A: Widened prevertebral soft tissue, classically cited as >7mm at C2 or >14mm at C6 in a child, though a simpler pediatric rule of thumb is comparing the prevertebral soft-tissue width to the width of the adjacent vertebral body: soft tissue clearly wider than the vertebral body it sits against is abnormal. A lateral neck film is a useful, quick screening test but is not definitive on its own.

- Q: What is the definitive imaging study, and what key distinction must it make?
  A: Contrast-enhanced CT of the neck. It distinguishes a discrete, drainable abscess (a rim-enhancing fluid collection) from phlegmon (diffuse inflammatory infiltration without an organized collection), a distinction that directly changes management.

- Q: How does management differ between phlegmon and a true abscess?
  A: Phlegmon can often be managed with IV antibiotics alone and close observation, since there is no collection to drain. A well-defined or enlarging abscess, especially with airway compromise, sepsis, or failure to improve on antibiotics, needs surgical incision and drainage in addition to IV antibiotics.

Teaching: [figure: Young child with fever, rigid neck extension, muffled voice, and drooling from a retropharyngeal abscess, diagnosed with contrast CT distinguishing abscess from phlegmon.]Pediatric retropharyngeal abscess presents in a child typically under 6 with fever, neck stiffness/torticollis, muffled voice, and drooling after a preceding URI; a widened prevertebral space on lateral X-ray screens for it, but contrast CT is what separates a drainable abscess from phlegmon and decides whether surgery joins IV antibiotics.

### Flashcards (47)

**[peds-airway-anatomy-card]** tags: PE, anatomy, milestones: MK1, PC7, UKMLA: Stridor, reviewer: (none)
- Front: Name three ways a child's airway anatomy differs from an adult's, and why it matters.
- Back: Funnel-shaped (narrowest at the subglottis, not the glottis), larynx more cephalad (~C3-4), and a larger tongue/tonsils relative to airway size with a floppier, omega-shaped epiglottis. Together, these mean small amounts of airway edema cause disproportionately severe obstruction compared to an adult.[figure: Flashcard on three anatomic differences between a child's and an adult's airway (funnel shape, cephalad larynx, floppy epiglottis).]
- Source: Standard pediatric airway anatomy teaching.

**[et-tube-child-card]** tags: PE, anatomy, milestones: MK1, PC7, UKMLA: Painful ear, reviewer: (none)
- Front: Why does a child's Eustachian tube anatomy predispose to otitis media?
- Back: It is shorter, more horizontal, and less angled than an adult's, draining the middle ear less efficiently and allowing nasopharyngeal secretions to reflux more easily. This is why otitis media is predominantly a disease of early childhood.[figure: Flashcard on why a child's Eustachian tube anatomy predisposes to otitis media.]
- Source: Standard pediatric otologic anatomy teaching.

**[waldeyers-ring-card]** tags: PE, anatomy, milestones: MK1, PC7, UKMLA: Sore throat, reviewer: (none)
- Front: What structures make up Waldeyer's ring?
- Back: Adenoids (nasopharyngeal tonsil), paired palatine tonsils, and the lingual tonsil: a ring of lymphoid tissue at the aerodigestive entrance that hypertrophies with recurrent antigen exposure in childhood.[figure: Flashcard on the structures composing Waldeyer's ring.]
- Source: Standard pediatric anatomy teaching.

**[branchial-cleft-anatomy-card]** tags: PE, anatomy, milestones: MK1, PC7, UKMLA: Neck lump, reviewer: (none)
- Front: Where does a second branchial cleft anomaly classically track, and where does it present?
- Back: From a pit/sinus anterior to the sternocleidomastoid in the lower neck, tracking along the carotid sheath up toward the tonsillar fossa. This is the anatomic basis for the classic branchial cleft cyst location.
- Source: Standard pediatric embryology teaching.

**[ome-vs-aom-card]** tags: PE, clinical, milestones: PC7, PC4, UKMLA: Painful ear, reviewer: (none)
- Front: How do OME and AOM differ, and what is first-line management for each?
- Back: OME: fluid behind an intact TM without acute infection signs, often asymptomatic. First-line is watchful waiting (most resolve in weeks). AOM: a bulging, erythematous TM with acute symptoms (otalgia, fever), managed with observation or amoxicillin depending on age and severity.
- Source: AAP Clinical Practice Guideline: Otitis Media with Effusion.

**[aom-treatment-card]** tags: PE, pharm, milestones: SBP3, PC7, UKMLA: Painful ear, reviewer: (none)
- Front: What determines whether a child with AOM gets watchful waiting vs immediate antibiotics?
- Back: Immediate antibiotics for: age <6 months (any AOM); otorrhea or severe symptoms (T &ge;39&deg;C, moderate-severe or &ge;48h otalgia) at any age; and children 6-23 months with bilateral AOM. Observation for 48-72h (shared decision-making, with analgesia and assured follow-up) is an option for 6-23 months with non-severe unilateral AOM, and for &ge;24 months with non-severe unilateral or bilateral AOM. First-line is high-dose amoxicillin (80-90 mg/kg/day divided BID). Use high-dose amoxicillin-clavulanate first-line instead when H. influenzae is likely: antibiotics in the prior 30 days, concurrent purulent conjunctivitis, or TM rupture. Duration: 10 days if <2 years or severe; 7 days for ages 2-5; 5-7 days for &ge;6 years with mild-moderate disease. Avoid macrolides (pneumococcal resistance).
- Source: AAP Clinical Practice Guideline: Diagnosis and Management of Acute Otitis Media, 2013.

**[tna-indications-card]** tags: PE, clinical, milestones: PC7, PC9, UKMLA: Sore throat, reviewer: (none)
- Front: What are the two main indication categories for pediatric tonsillectomy/adenoidectomy?
- Back: Recurrent infection meeting frequency criteria (historically referenced against the Paradise criteria: ~7/yr, 5/yr×2yrs, or 3/yr×3yrs), and obstructive sleep-disordered breathing/OSA from adenotonsillar hypertrophy, now the leading indication for T&A in current practice.
- Source: AAO-HNSF Clinical Practice Guideline: Tonsillectomy in Children (Update), 2019.

**[intracapsular-tonsillectomy-card]** tags: PE, clinical, milestones: PC7, PC9, UKMLA: Sore throat, reviewer: (none)
- Front: For an obstructive (OSA) indication, [...] tonsillectomy is increasingly preferred over total tonsillectomy because it roughly halves post-tonsillectomy bleeding, at the cost of a small risk of regrowth.
- Back: For an obstructive (OSA) indication, intracapsular (partial) tonsillectomy (tonsillotomy) is increasingly preferred over total tonsillectomy because it roughly halves post-tonsillectomy bleeding (and markedly lowers return-to-OR rates), at the cost of a small risk of tonsillar regrowth/recurrence. Total (extracapsular) tonsillectomy is still preferred when recurrent/chronic tonsillitis is the indication.
- Source: Blackshaw et al., Cochrane Database Syst Rev, 2020; Loh et al., Int J Pediatr Otorhinolaryngol, 2024.

**[peds-tna-perioperative-card]** tags: PE, pharm, milestones: PC7, SBP3, UKMLA: Sore throat, reviewer: (none)
- Front: In pediatric tonsillectomy, a single intraoperative dose of [...] reduces nausea/vomiting, while routine perioperative antibiotics are not recommended and codeine is contraindicated.
- Back: In pediatric tonsillectomy, a single intraoperative dose of IV dexamethasone (~0.5 mg/kg) reduces PONV and speeds return to normal diet. Routine perioperative prophylactic antibiotics are not recommended (no benefit for infection/pain/bleeding), and codeine is contraindicated post-T&A because ultra-rapid CYP2D6 metabolizers risk fatal respiratory depression. Base analgesia on scheduled acetaminophen &plusmn; ibuprofen.
- Source: Mitchell et al., AAO-HNS Tonsillectomy in Children Update, Otolaryngol Head Neck Surg, 2019.

**[ear-tubes-card]** tags: PE, clinical, milestones: PC7, PC4, UKMLA: Painful ear, reviewer: (none)
- Front: What are the indications for tympanostomy tube placement?
- Back: Recurrent AOM (with intervening effusion), or persistent OME ≥3 months with associated hearing loss or other concern (speech delay, at-risk child). Tubes ventilate the middle ear and reduce both infection frequency and effusion-related hearing impact.
- Source: AAO-HNSF Clinical Practice Guideline: Tympanostomy Tubes in Children (Update), 2022.

**[newborn-hearing-screen-card]** tags: PE, clinical, milestones: PC7, PC4, UKMLA: Hearing loss, reviewer: (none)
- Front: What is the '1-3-6 rule' for newborn hearing screening?
- Back: Screen by 1 month (universal newborn hearing screening, using OAE or automated ABR), diagnose by 3 months if screening fails, intervene (amplification/early intervention) by 6 months. Missing this window measurably worsens speech-language outcomes.
- Source: Standard pediatric audiology teaching: the 1-3-6 rule.

**[congenital-hl-causes-card]** tags: PE, clinical, milestones: PC7, MK3, UKMLA: Hearing loss, reviewer: (none)
- Front: What are the leading causes of congenital sensorineural hearing loss?
- Back: Genetic (most common single cause: connexin 26 / GJB2 mutations), congenital CMV infection (leading non-genetic/infectious cause), and syndromic causes (Usher, Waardenburg, Pendred syndromes among others). Confirming congenital CMV requires testing (saliva/urine PCR) within the first ~3 weeks of life; after that, a positive test can't distinguish congenital from postnatal infection. Symptomatic congenital CMV (including CNS involvement/SNHL) is treated with oral valganciclovir (16 mg/kg/dose BID) for 6 months in moderate-severe disease, or ~6 weeks for isolated SNHL, with weekly neutrophil monitoring for neutropenia. CMV-related SNHL is frequently delayed/progressive, so ~40% of affected infants pass the newborn screen and need ongoing audiologic surveillance.
- Source: Standard pediatric audiology/genetics teaching.

**[congenital-neck-mass-card]** tags: PE, clinical, milestones: PC7, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: How does location differentiate congenital neck masses?
- Back: - Midline → thyroglossal duct cyst (moves with tongue protrusion).
- Lateral, anterior to SCM → branchial cleft cyst.
- Posterior triangle → cystic hygroma/lymphatic malformation.
- Preauricular → preauricular pit/sinus.
- Source: Standard pediatric otolaryngology teaching on congenital neck masses.

**[thyroglossal-cyst-card]** tags: PE, clinical, milestones: PC7, PC3, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: What must be confirmed before excising a suspected thyroglossal duct cyst, and what is the definitive operation?
- Back: Confirm normal thyroid tissue exists in its usual location (ultrasound ± thyroid function), since the cyst may be the patient's only functioning thyroid tissue. Definitive treatment is the Sistrunk procedure (removes the cyst, the central hyoid bone segment, and the tract to the tongue base to minimize recurrence).
- Source: Standard pediatric otolaryngology teaching.

**[branchial-cleft-cyst-card]** tags: PE, clinical, milestones: PC7, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: What is the most common branchial cleft anomaly, and where does it present?
- Back: A second branchial cleft anomaly, presenting as a cyst, sinus, or fistula anterior to the sternocleidomastoid, sometimes tracking toward the tonsillar fossa. Can become infected and present acutely as a tender, enlarging neck mass.
- Source: Standard pediatric otolaryngology teaching.

**[choanal-atresia-card]** tags: PE, clinical, milestones: PC7, PC1, UKMLA: Nasal obstruction, RED FLAG, reviewer: (none)
- Front: Why is bilateral choanal atresia an emergency, and what association should be screened for?
- Back: Newborns are obligate nasal breathers, so bilateral atresia causes cyclical cyanosis at rest that improves with crying. Secure an oral airway urgently and screen for the CHARGE association (Coloboma, Heart defects, Atresia choanae, Retarded growth, Genital/ear abnormalities).
- Source: Standard pediatric otolaryngology teaching.

**[laryngomalacia-card]** tags: PE, clinical, milestones: PC7, PC6, UKMLA: Stridor, reviewer: (none)
- Front: What is laryngomalacia, and what is its typical course?
- Back: The most common cause of stridor in infants: collapse of floppy supraglottic structures on inspiration, worse when supine, feeding, or crying. Typically self-resolves by 12-18 months; severe cases with growth failure or significant apnea need surgery (supraglottoplasty).
- Source: Standard pediatric airway teaching on laryngomalacia.

**[subglottic-hemangioma-card]** tags: PE, clinical, milestones: PC7, PC6, UKMLA: Stridor, RED FLAG, reviewer: (none)
- Front: What should make you reconsider a diagnosis of simple laryngomalacia in favor of subglottic hemangioma?
- Back: - Reconsider laryngomalacia when: stridor is worsening (rather than stable/improving) over weeks, growth follows a biphasic pattern typical of infantile hemangiomas, or there are cutaneous hemangiomas elsewhere raising concern for PHACE syndrome.
- Needs direct airway evaluation; first-line medical treatment is propranolol.
- Propranolol is typically titrated to ~2-3 mg/kg/day divided 2-3 times daily, continued ~6-12 months, with airway clearance rates ~96%. Give after feeds and hold when the infant is ill/not feeding (hypoglycemia risk).
- Screen for PHACE syndrome before high-dose therapy, since large segmental facial/PHACE hemangiomas may warrant a lower dose and cerebrovascular imaging first.
- Source: Standard pediatric airway teaching on subglottic hemangioma.

**[peds-osa-card]** tags: PE, clinical, milestones: PC7, PC9, UKMLA: Snoring, Obstructive sleep apnoea, reviewer: (none)
- Front: What is the leading cause of pediatric OSA, and the first-line treatment?
- Back: Adenotonsillar hypertrophy is the leading cause, unlike adult OSA, which is driven more by obesity and soft-tissue redundancy. First-line treatment is adenotonsillectomy, not CPAP, which is the adult first-line.
- Source: Standard pediatric sleep medicine teaching.

**[cleft-lip-palate-card]** tags: PE, clinical, milestones: PC7, SBP2, UKMLA: Neck lump, reviewer: (none)
- Front: Cleft palate disrupts normal [...], causing a very high rate of chronic otitis media with effusion, so most affected children need tympanostomy tubes.
- Back: Cleft palate disrupts normal Eustachian tube function, causing a very high rate of chronic otitis media with effusion, so most affected children need tympanostomy tubes. Repair is staged: lip around 3 months, palate around 12 months, by a multidisciplinary craniofacial team.
- Source: Standard pediatric craniofacial teaching.

**[peds-fb-card]** tags: PE, clinical, milestones: PC7, PC1, UKMLA: Ear and nasal discharge, RED FLAG, reviewer: (none)
- Front: A [...] lodged in the nose, ear canal, or esophagus is a time-critical emergency, causing liquefactive necrosis within hours.
- Back: A button battery lodged in the nose, ear canal, or esophagus is a time-critical emergency, causing liquefactive necrosis within hours. Toddlers are the peak age group for foreign bodies generally, since they explore orally and manually without judgment.
- Source: AAP clinical guidance on pediatric foreign bodies; National Capital Poison Center button-battery data.

**[peds-neck-infection-card]** tags: PE, clinical, milestones: PC7, PC1, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: What presentation in a young child should make you consider retropharyngeal abscess rather than simple torticollis?
- Back: Torticollis with neck pain, refusal to move or extend the neck, fever, and drooling/odynophagia. This combination points to a deep neck space infection (retropharyngeal abscess), not benign muscular torticollis, and warrants urgent imaging (contrast CT neck) and ENT involvement.
- Source: Standard pediatric otolaryngology teaching on deep neck infections.

**[microtia-aural-atresia-card]** tags: PE, clinical, milestones: PC7, PC4, UKMLA: Hearing loss, reviewer: (none)
- Front: In congenital aural atresia, unilateral cases with a normal contralateral ear can be worked up electively, while [...] atresia is urgent because it causes significant conductive hearing loss from birth.
- Back: In congenital aural atresia, unilateral cases with a normal contralateral ear can be worked up electively, while bilateral atresia is urgent because it causes significant conductive hearing loss from birth. Bilateral cases need audiologic assessment and amplification right away, since the 1-3-6 hearing timeline still applies.
- Source: Standard pediatric otologic teaching on aural atresia and microtia.

**[congenital-cholesteatoma-card]** tags: PE, clinical, milestones: PC7, PC4, UKMLA: Hearing loss, reviewer: (none)
- Front: Congenital cholesteatoma forms behind an [...], in a child with no history of otitis media, perforation, or ear surgery.
- Back: Congenital cholesteatoma forms behind an intact, normal-looking tympanic membrane, in a child with no history of otitis media, perforation, or ear surgery. It's often found incidentally, as a pearly-white mass or conductive hearing loss, rather than the foul otorrhea typical of acquired disease.
- Source: Standard pediatric otologic teaching on congenital cholesteatoma.

**[bone-anchored-hearing-device-card]** tags: PE, clinical, milestones: PC7, PC4, UKMLA: Hearing loss, reviewer: (none)
- Front: In bilateral aural atresia, a [...] hearing device transmits sound vibration directly through the skull to the inner ear, bypassing the atretic canal and middle ear entirely.
- Back: In bilateral aural atresia, a bone-conduction hearing device transmits sound vibration directly through the skull to the inner ear, bypassing the atretic canal and middle ear entirely. It bridges hearing access until surgical ear canal reconstruction is feasible, typically around age 6.
- Source: Standard pediatric audiology teaching on bone-conduction amplification.

**[pediatric-osa-ahi-card]** tags: PE, clinical, milestones: PC7, PC9, UKMLA: Obstructive sleep apnoea, Snoring, reviewer: (none)
- Front: What obstructive AHI defines OSA in a child, and how does it compare to the adult threshold?
- Back: An obstructive AHI ≥1 event/hour on polysomnography is abnormal in a child, far lower than the adult threshold of ≥5/hour (see Sleep Surgery & OSA track). PSG remains the gold standard, though many children proceed straight to adenotonsillectomy on a strong clinical picture without a preoperative sleep study.
- Source: AAP Clinical Practice Guideline: Diagnosis and Management of Childhood Obstructive Sleep Apnea Syndrome, 2012 (reaffirmed); AASM pediatric scoring criteria.

**[peds-osa-post-ta-card]** tags: PE, clinical, milestones: PC7, PC9, UKMLA: Obstructive sleep apnoea, Snoring, RED FLAG, reviewer: (none)
- Front: Children with [...] are at high risk of persistent OSA after adenotonsillectomy, due to macroglossia, midface hypoplasia, and hypotonia, and should get a postoperative polysomnogram rather than being assumed cured.
- Back: Children with Down syndrome are at high risk of persistent OSA after adenotonsillectomy, due to macroglossia, midface hypoplasia, and hypotonia, and should get a postoperative polysomnogram rather than being assumed cured. Obesity, other craniofacial syndromes, and severe preoperative AHI also raise this risk.
- Source: Standard pediatric sleep medicine teaching on residual OSA after adenotonsillectomy.

**[pierre-robin-sequence-card]** tags: PE, clinical, milestones: PC7, PC1, UKMLA: Stridor, RED FLAG, reviewer: (none)
- Front: In Pierre Robin sequence, the airway obstruction is caused by [...], the tongue falling posteriorly because the small jaw cannot hold it forward, not by the cleft palate itself.
- Back: In Pierre Robin sequence, the airway obstruction is caused by glossoptosis, the tongue falling posteriorly because the small jaw cannot hold it forward, not by the cleft palate itself. Micrognathia is the primary abnormality, and the cleft palate is a downstream consequence.
- Source: Standard pediatric craniofacial airway teaching on Pierre Robin sequence.

**[vascular-ring-tracheomalacia-card]** tags: PE, clinical, milestones: PC7, PC6, UKMLA: Stridor, reviewer: (none)
- Front: Vascular ring and tracheomalacia both cause [...] stridor, inspiratory and expiratory, unlike the predominantly inspiratory, positional stridor of laryngomalacia.
- Back: Vascular ring and tracheomalacia both cause biphasic stridor, inspiratory and expiratory, unlike the predominantly inspiratory, positional stridor of laryngomalacia. Biphasic stridor warrants imaging, such as a barium esophagram or CT/MR angiography, rather than assuming a floppy larynx.
- Source: Standard pediatric airway teaching on vascular ring and tracheomalacia.

**[rrp-pediatric-card]** tags: PE, clinical, milestones: PC7, PC6, UKMLA: Stridor, reviewer: (none)
- Front: Juvenile-onset recurrent respiratory papillomatosis is acquired [...], from a mother with genital HPV types 6/11 during vaginal delivery, and typically presents between ages 2 and 4 with progressive hoarseness that can advance to stridor.
- Back: Juvenile-onset recurrent respiratory papillomatosis is acquired perinatally, from a mother with genital HPV types 6/11 during vaginal delivery, and typically presents between ages 2 and 4 with progressive hoarseness that can advance to stridor. It's easily mistaken for recurrent croup, so progressive hoarseness with atypical 'croup' warrants direct laryngoscopy.
- Source: Standard pediatric laryngology teaching on recurrent respiratory papillomatosis.

**[hpv-vaccine-rrp-prevention-card]** tags: PE, clinical, milestones: PC7, SBP1, UKMLA: Stridor, reviewer: (none)
- Front: How does HPV vaccination relate to preventing pediatric recurrent respiratory papillomatosis (RRP)?
- Back: Juvenile-onset RRP is acquired perinatally from maternal genital HPV (types 6/11). Routine HPV vaccination lowers the prevalence of maternal genital HPV infection and, with it, the risk of perinatal transmission. It's a rare example of a vaccine given to one generation reducing a pediatric ENT disease in the next.
- Source: Standard public-health teaching on HPV vaccination and perinatal RRP transmission.

**[branchial-cleft-vs-pouch-card]** tags: PE, embryo, milestones: MK1, PC7, UKMLA: Neck lump, reviewer: (none)
- Front: In the branchial apparatus, clefts are lined by [...] and become skin-side structures, while pouches are lined by [...] and become glands/spaces.
- Back: Clefts are lined by ectoderm (only the 1st persists, as the external auditory canal); pouches are lined by endoderm (middle ear, tonsil, thymus, parathyroids).
- Source: Standard embryology teaching on the branchial apparatus.

**[branchial-arch-nerves-card]** tags: PE, embryo, milestones: MK1, PC7, UKMLA: Neck lump, reviewer: (none)
- Front: Name the cranial nerve of branchial arches 1, 2, 3, and 4/6 in order.
- Back: V3, VII, IX, X (arch 1 -> V3, arch 2 -> VII, arch 3 -> IX, arch 4 & 6 -> X). The nerve of each arch supplies the muscles derived from that arch.
- Source: Standard embryology teaching on the branchial apparatus.

**[branchial-arch1-vs-arch2-card]** tags: PE, embryo, milestones: MK1, PC7, UKMLA: Neck lump, reviewer: (none)
- Front: What are the skeletal derivatives of arch 1 vs arch 2?
- Back: Arch 1 (V3): Meckel's cartilage -> malleus + incus; mandible/maxilla; muscles of mastication. Arch 2 (VII): Reichert's cartilage -> stapes, styloid process, lesser horn + upper hyoid; muscles of facial expression.
- Source: Standard embryology teaching on the branchial apparatus.

**[branchial-pouch-derivatives-card]** tags: PE, embryo, milestones: MK1, PC7, UKMLA: Neck lump, reviewer: (none)
- Front: What are the adult derivatives of pouches 1-4?
- Back: 1 -> middle ear + Eustachian tube; 2 -> palatine tonsil; 3 -> inferior parathyroids + thymus; 4 -> superior parathyroids (+ ultimobranchial body/C cells).
- Source: Standard embryology teaching on the branchial apparatus.

**[parathyroid-pouch-inversion-card]** tags: PE, embryo, milestones: MK1, PC7, UKMLA: Neck lump, reviewer: (none)
- Front: Why do the inferior parathyroids come from a lower-numbered pouch than the superior ones?
- Back: Inferior parathyroids = pouch 3, superior parathyroids = pouch 4. Pouch 3 also carries the thymus, which descends and drags the pouch-3 parathyroids inferiorly past the pouch-4 pair.
- Source: Standard embryology teaching on the branchial apparatus.

**[digeorge-pouches-card]** tags: PE, clinical, milestones: MK1, PC7, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: DiGeorge syndrome (22q11.2) results from failure of pouches [...], causing which two clinical deficits?
- Back: Pouches 3 and 4 -> absent thymus (T-cell immunodeficiency) and absent parathyroids (hypocalcemia), often with conotruncal cardiac defects.
- Source: Standard embryology teaching on the branchial apparatus.

**[branchial-anomaly-internal-opening-card]** tags: PE, clinical, milestones: PC7, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: What is the internal opening of 1st, 2nd, and 3rd/4th branchial anomalies?
- Back: 1st -> external auditory canal (periauricular/parotid, near CN VII); 2nd -> tonsillar fossa; 3rd/4th -> pyriform sinus.
- Source: Standard pediatric otolaryngology teaching on branchial anomalies.

**[second-branchial-cleft-cyst-tract-card]** tags: PE, clinical, milestones: PC7, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: What is the classic presentation and tract of a 2nd branchial cleft cyst?
- Back: Painless fluctuant mass at the anterior border of the upper-third SCM, often enlarging after a URI; ~90-95% of branchial anomalies. Tract runs from the tonsillar fossa between the internal and external carotid arteries. Treatment: complete surgical excision.
- Source: Standard pediatric otolaryngology teaching on branchial anomalies.

**[pyriform-sinus-fistula-card]** tags: PE, clinical, milestones: PC7, PC3, UKMLA: Neck lump, RED FLAG, reviewer: (none)
- Front: A child with recurrent left-sided neck abscess or acute suppurative thyroiditis should raise suspicion for [...].
- Back: A 3rd/4th branchial (pyriform sinus) fistula, almost always left-sided. Definitive treatment obliterates the pyriform sinus tract (endoscopic cautery or open excision), not just abscess drainage.
- Source: Standard pediatric otolaryngology teaching on branchial anomalies.

**[first-branchial-cleft-facial-nerve-card]** tags: PE, clinical, milestones: PC7, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: Why is a 1st branchial cleft anomaly higher-stakes surgically than a 2nd?
- Back: It sits at the angle of the mandible/periauricular region and its tract runs near or through the facial nerve and parotid; excision risks CN VII injury. Suspect it with recurrent otorrhea and a normal middle ear.
- Source: Standard pediatric otolaryngology teaching on branchial anomalies.

**[branchial-vs-thyroglossal-exam-card]** tags: PE, clinical, milestones: PC7, PC3, UKMLA: Neck lump, reviewer: (none)
- Front: How do you distinguish a branchial cleft cyst from a thyroglossal duct cyst on exam?
- Back: Branchial = lateral, anterior to SCM, does not move with the tongue. Thyroglossal = midline, near the hyoid, moves up with tongue protrusion/swallowing; confirm normal thyroid before Sistrunk excision.
- Source: Standard pediatric otolaryngology teaching on congenital neck masses.

**[waldeyers-ring-components-card]** tags: PE, anatomy, milestones: MK1, PC7, UKMLA: Sore throat, reviewer: (none)
- Front: Name the four components of Waldeyer's ring from superior to inferior.
- Back: Pharyngeal tonsil (adenoids, nasopharyngeal roof) -> tubal tonsils (around the Eustachian tube openings) -> palatine tonsils (tonsillar fossa, seen on oral exam) -> lingual tonsil (tongue base). Mnemonic: A-T-P-L. The tubal tonsils are the commonly forgotten fourth component.
- Source: Standard pediatric anatomy teaching.

**[waldeyers-ring-malt-card]** tags: PE, anatomy, milestones: MK1, PC7, UKMLA: Sore throat, reviewer: (none)
- Front: What kind of tissue is Waldeyer's ring, and what makes its antigen sampling distinctive?
- Back: Mucosa-associated lymphoid tissue (MALT) with germinal centers, acting as first-line immune defense at the aerodigestive entrance. It samples antigen through deep epithelial crypts and, unlike lymph nodes, has no afferent lymphatics: antigen crosses the epithelium directly.
- Source: Standard pediatric anatomy teaching.

**[waldeyers-ring-age-curve-card]** tags: PE, clinical, milestones: PC7, MK1, UKMLA: Sore throat, reviewer: (none)
- Front: Why do tonsil and adenoid problems cluster in early childhood?
- Back: Adenotonsillar lymphoid tissue grows through early childhood (peaking ~ages 2-8 relative to a small pharynx) then regresses in adolescence. This growth curve plus recurrent antigen exposure makes obstructive and infectious tonsil disease a predominantly pediatric problem; adenoids are usually vestigial in adults.
- Source: Standard pediatric anatomy teaching.

**[waldeyers-ring-endpoints-card]** tags: PE, clinical, milestones: PC7, PC9, UKMLA: Sore throat, reviewer: (none)
- Front: What are the two distinct clinical endpoints of Waldeyer's ring disease?
- Back: (1) Recurrent tonsillitis (repeated palatine tonsil infection -> recurrent-infection indication for tonsillectomy) and (2) adenotonsillar hypertrophy causing airway obstruction (snoring, sleep-disordered breathing, pediatric OSA, and Eustachian-tube obstruction -> middle-ear effusion). Obstructive hypertrophy is now the leading indication for T&A.
- Source: Standard pediatric anatomy teaching.

**[palatine-tonsil-blood-supply-card]** tags: PE, anatomy, milestones: MK1, PC9, UKMLA: Sore throat, reviewer: (none)
- Front: What is the dominant blood supply to the palatine tonsil, and why does it matter?
- Back: The tonsillar branch of the facial artery (with ascending pharyngeal, lingual, and descending palatine contributions), all from the external carotid system. This rich supply explains the post-tonsillectomy hemorrhage risk.
- Source: Standard pediatric anatomy teaching.

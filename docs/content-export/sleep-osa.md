# Sleep Surgery & OSA

_Generated 2026-10-05 from content/*.js_

> **How to use:** paste a module file below (or ALL.md) into OpenEvidence / any reviewer, followed by an instruction such as
> "Fact-check every claim against current guidelines, flag anything outdated or wrong, and propose exact replacement wording. Keep our style: no em dashes, plain clinical language."
> Send changes back to Claude Code with the item id (e.g. `[card-id]`) so edits land in `content/*.js`. This folder is generated: do not edit it by hand.

---

## Module: Sleep Surgery & OSA (`sleep-osa`)
- version: 0.4.0-draft
- status: DRAFT, pending faculty review. v0.2.0: added a PAP-therapy depth pass, formal CPAP titration methods (full-night/split-night/APAP) and the AASM/CMS adherence definition, a troubleshooting table for co
- facultyReviewer: ""
- curriculum anchors: UKMLA Content Map (GMC), scope anchor; owns Snoring and Obstructive sleep apnoea at adult subspecialty depth (screening tools, PSG interpretation, surgical ladder); ACGME Otolaryngology-HNS Milestones 2.0, primarily PC6/PC9 (airway/surgical management); AASM Clinical Practice Guidelines on OSA diagnosis and management; AAO-HNSF Position Statement on OSA surgery; UK undergraduate Delphi (Lloyd 2014), student-scope depth cap
- subtitle: Screening tools and polysomnography basics, plus the ladder from CPAP to named surgical options for adult obstructive sleep apnea.

### Anatomy notes

**Sites of upper airway obstruction in OSA** (tags: Nasal collapse · Retropalatal collapse · Retroglossal collapse)

[figure: The three anatomic levels where the upper airway can collapse in OSA: nasal, retropalatal, and retroglossal.]Collapse can occur at multiple levels, often more than one at once.

- The nasal cavity (septal deviation, turbinate hypertrophy) raises upstream resistance and drives CPAP intolerance.
- The retropalatal region (soft palate, uvula, lateral pharyngeal walls) is the classic UPPP target.
- The retroglossal/hypopharyngeal region (tongue base, epiglottis) is where tongue-base and hypoglossal nerve procedures work.Identifying where collapse occurs determines which surgery, if any, is appropriate.

**Friedman tongue position and staging** (tags: Tongue base · Oropharynx exam · UPPP response)

[figure: Friedman tongue position grades I-IV and how they predict UPPP response.]The exam: how it's done: the Friedman tongue position (FTP), sometimes called the modified Mallampati index in this context, grades how much the tongue base obscures the palate, tonsils, and uvula on oral exam.
The single most important technical point, and the one that separates it from the classic (anesthesia) Mallampati score: mouth open wide, tongue resting in the mouth, not protruded, and not phonating. Keeping the tongue in its natural resting position mimics how it behaves during sleep, which is the whole point.
Classic Mallampati has the patient protrude the tongue instead: a different test for a different purpose, predicting intubation difficulty.
The grade is invalid if the patient phonates ("ahh") or protrudes the tongue during assessment.
What each tongue position shows: grade by the most posterior structure you can still see:

- FTP I: entire uvula and tonsils/pillars visible (full oropharynx view).
- FTP IIa: entire uvula visible but not the tonsils.
- FTP IIb: soft palate and the base of the uvula visible, but not the full uvula.
- FTP III: soft palate visible but not the uvula at all.
- FTP IV: only the hard palate visible.As the grade rises, the tongue base progressively obscures the view, ascending from tonsils -> uvula -> soft palate -> hard palate. Less visualized structure corresponds to a higher grade and a worse airway.
Clinically, FTP III-IV correlates with retrolingual (tongue-base) obstruction, while FTP I-II usually does not: exactly why high grades predict that palate-only surgery will miss the problem.
The full staging system: tongue position + tonsils + BMI: FTP alone is one of three ingredients in the Friedman staging system: (1) Friedman tongue/palate position (I-IV), (2) tonsil size (Brodsky grade 0-4), (3) BMI (cutoff of 40 kg/m&sup2;).
StageTonsil sizeTongue/palate positionBMIUPPP success (approx.)ILarge (3-4)Favorable (FTP I-II)<40~80%IILarge (3-4) with unfavorable FTP (III-IV), or small (0-2) with favorable FTP (I-II)Mixed<40~40%IIISmall (0-2)Unfavorable (FTP III-IV)<40<10%IVAnyAny>40Surgery generally not recommendedPalate surgery is most effective when bulky palatine tissue is the primary obstruction and the tongue base is not involved (Stage I); outcomes are poor when tonsils are small and the tongue base is the dominant obstruction (Stage III).
Predicting Palate Surgery Success: staging answers one question before offering uvulopalatopharyngoplasty (UPPP): is the obstruction at the palate (addressable by UPPP) or the tongue base (not addressable by UPPP)?
Stage I (favorable anatomy, big tonsils) -> UPPP alone succeeds ~80% of the time. Stage II -> intermediate (~40%). Stage III (tongue-base-dominant) -> UPPP alone succeeds <10%; these patients need multilevel or tongue-base-directed treatment (e.g., hypoglossal nerve stimulation, tongue-base reduction, or MMA), not an isolated palate operation.
One-liner: "Anatomy predicts UPPP success better than AHI does": how bad the numbers are matters less than where the obstruction sits.
Caveats: inter-examiner agreement is imperfect (the tongue and palate are mobile, so grading varies between examiners): treat FTP as a useful screen, not a precision measurement. It also does not replace DISE (drug-induced sleep endoscopy): Friedman staging is a clinic-chair predictor, while DISE directly visualizes the level(s) of collapse and is what ultimately tailors surgery.

**The hypoglossal nerve and tongue protrusion** (tags: CN XII · Medial/lateral branch split · Hypoglossal stimulation)

[figure: CN XII course and genioglossus innervation underlying tongue protrusion and its role in OSA/airway patency.]CN XII is the pure motor nerve of the tongue: the nerve that keeps the tongue from falling back and blocking the airway in sleep.

- Pure motor nerve: CN XII supplies all intrinsic tongue muscles and all extrinsic tongue muscles except the palatoglossus, which is innervated by the vagus (CN X) via the pharyngeal plexus.Palatoglossus is named as a tongue muscle but functions as a palate muscle.
Protrusors vs. retractors (the key functional split):

- Protrusors (push the tongue out, open the airway) = genioglossus (the main one), plus geniohyoid/intrinsic protrusive fibers.
- Retractors (pull the tongue back) = hyoglossus and styloglossus.Genioglossus protrudes the tongue; hyoglossus and styloglossus retract it. This functional split is the anatomic basis for stimulator targeting.
The genioglossus is the airway's main dilator: it contracts with each inspiration to pull the tongue base forward and keep the retrolingual airway open. Tone normally drops at sleep onset; in OSA, too little genioglossus activity lets the tongue fall back and obstruct.
Five-segment course (medulla -> tongue): medullary -> cisternal -> skull-base (hypoglossal canal in the occipital bone) -> carotid space -> sublingual. Extracranially it descends near the internal carotid/internal jugular, loops forward below the mandible, crosses the external carotid and lingual arteries, and enters the tongue at the anterior border of hyoglossus.
Clinical point: this long, exposed course is why CN XII palsy has so many causes: skull-base tumor, carotid dissection, carotid endarterectomy injury, neck surgery/trauma.
C1/ansa cervicalis hitchhikers: in the neck the nerve carries along C1 fibers that peel off to supply geniohyoid and thyrohyoid, and, via the ansa cervicalis, the infrahyoid strap muscles. These aren't "true" CN XII fibers: they just travel with it.
The lesion sign: a unilateral CN XII lesion makes the protruded tongue deviate toward the weak (lesion) side: the intact genioglossus on the normal side pushes the tongue across. Chronic lesions show ipsilateral atrophy and fasciculations.
Inclusion vs. Exclusion Branches: Cuff Placement: CN XII is a pure motor nerve. Distal to its main trunk it divides into a medial division and a lateral division, which do opposite things to the tongue.

- Medial branches -> protrusors (genioglossus, plus geniohyoid/intrinsic protrusive muscles, with a C1 contribution). Stimulating these protrudes and stiffens the tongue, opening the retrolingual airway. These are the 'inclusion' branches: the stimulation cuff is placed to capture them.
- Lateral branches -> retractors (hyoglossus, styloglossus). Stimulating these retracts the tongue (counterproductive), so they are the 'exclusion' branches: deliberately kept out of the cuff.Optimal outcomes depend on selectively driving the medial (protrusor) fibers while avoiding the lateral (retractor) fibers. Intraoperative nerve integrity monitoring (EMG) confirms genioglossus (protrusion) activation without hyoglossus/styloglossus (retraction) before the cuff is secured. Bipolar (not monopolar) cautery is used near the device to avoid damage.

**How CPAP works** (tags: Pneumatic splinting · CPAP · Surgical adjunct)

[figure: CPAP as pneumatic splinting of the collapsible upper airway.]How CPAP works: continuous positive airway pressure delivers a constant column of pressurized room air through a mask, acting as a pneumatic splint: positive intraluminal pressure holds the collapsible pharyngeal airway open throughout the respiratory cycle.
Because pressure props the airway from the inside, it works at every level of collapse simultaneously (nasopharynx, retropalatal, retroglossal) regardless of where the primary obstruction sits. That's why CPAP is first-line for essentially all severities of OSA and can start before the exact collapse site is known, unlike surgery, which must target a specific level.
It treats the obstruction, it does not cure it: benefits (resolved apneas, better oxygenation, less daytime sleepiness, lower blood pressure) last only as long as the device is used nightly. Stopping therapy returns the airway to baseline collapsibility.
Pressure delivery modes:

- CPAP: one fixed pressure held constant through inspiration and expiration, the standard workhorse.
- APAP (auto-titrating): the device senses flow limitation/snoring and adjusts pressure breath-to-breath within a set range; useful when a single fixed pressure is poorly tolerated or the pressure requirement varies.
- BiPAP (bilevel): separate higher inspiratory and lower expiratory pressures; reserved for high pressure requirements, CPAP intolerance, or a coexisting hypoventilation/CO2-retention problem (obesity hypoventilation, neuromuscular disease, overlap syndrome), not routine OSA.Adherence: the number that defines "CPAP failure": CPAP only works if worn. The widely used (CMS/insurer) adherence definition is &ge;4 hours/night on &ge;70% of nights over a 30-day period.
A patient is not a candidate for second-line therapy (including surgery) for intolerance until a genuine adherence effort has failed. "CPAP failure" means tried-and-couldn't-tolerate or inadequate response despite use, not simply "declined."
CPAP Intolerance and the ENT Role: roughly a third to half of patients struggle to adhere. Common reasons include mask discomfort/leak, claustrophobia, aerophagia (swallowed air), and pressure intolerance.
The ENT-relevant reason is nasal obstruction (septal deviation, turbinate hypertrophy, polyps, valve collapse), which raises nasal resistance and makes delivered pressure uncomfortable or ineffective. This is why ENT evaluation of the nasal airway is key to salvaging a struggling CPAP user.
Where sleep surgery fits: surgery is generally a CPAP alternative or adjunct, not a first-line replacement.

- Adjunctive (rescue CPAP): nasal surgery (septoplasty, turbinate reduction, valve repair) rarely cures OSA alone but lowers nasal resistance and improves CPAP tolerance/adherence: the most common ENT contribution.
- Alternative (replace CPAP): for CPAP-intolerant patients, site-directed procedures (palate surgery/UPPP, tongue-base procedures, hypoglossal nerve stimulation, maxillomandibular advancement) treat the specific collapse level(s) identified on exam and DISE.Exceptions worth remembering: in children, adenotonsillar hypertrophy is the usual driver, so adenotonsillectomy is first-line, not CPAP. Any patient with anatomic obstruction amenable to a specific fix may go to surgery earlier.

### Anatomy diagrams (5)

**Diagram: Levels of upper airway obstruction**

Nasal, retropalatal, and retroglossal levels: name each, then reveal what surgery targets it.

_Image source: Levels of Upper Airway Obstruction and Targeted Surgeries. Illustration generated with Google Gemini._
- Nasal cavity: septum/turbinates; affects CPAP tolerance more than apnea directly
- Retropalatal region: soft palate/uvula/lateral walls (UPPP target)
- Retroglossal region: tongue base (hypoglossal nerve stimulator / tongue-base surgery target)

**Diagram: Friedman tongue position (I-IV)**

How much the tongue base obscures the view on relaxed oral exam. Name each grade, then reveal.

_Image source: Friedman Tongue Position Grades (I-IV). ResearchGate / Friedman et al._
- Grade I: full view of tonsils/pillars/soft palate
- Grade II: partial view, some tongue-base crowding
- Grade III: soft palate visible, tongue base obscures most
- Grade IV: only hard palate visible; worst predictor for UPPP-alone success

**Diagram: Hypoglossal nerve stimulator**

Sensing lead, generator, and stimulation cuff: name each component, then reveal.

_Image source: Hypoglossal Nerve Stimulator Components (Generator, Sensing Lead, Cuff). Xia et al. (2023) Sensors 23(21):8882._
- Hypoglossal nerve (CN XII): the stimulation target; contracting genioglossus protrudes the tongue in phase with inspiration
- Stimulating electrodes (labeled 'Stimuliti Electrodes' on the figure): a cuff placed around CN XII that delivers the stimulus
- Stimulation lead: wire carrying the pulse from the generator to the hypoglossal nerve cuff
- Battery: powers the implanted pulse generator
- Pulse generator: implanted in the chest wall; houses the battery and times stimulation to the breathing signal
- Breathing sensing lead: carries the respiratory signal from the sensor to the generator
- Breathing sensor: detects inspiration so stimulation can be timed to the respiratory cycle

**Diagram: The hypoglossal nerve, genioglossus, and tongue protrusion**

CN XII runs from the brainstem to the genioglossus. Name each structure, then reveal how it opens the airway.

_Image source: The Hypoglossal Nerve, Genioglossus, and Tongue Protrusion Mechanics. Mashaqi et al. (2021) Int J Environ Res Public Health._
- Intrinsic muscles of the tongue (oblique, vertical, horizontal fibers): reshape the tongue but don't move it in space; not the muscle group hypoglossal stimulation targets
- Palatoglossus muscle: forms the anterior tonsillar pillar; couples tongue movement to the soft palate
- Palatoglossus coupling: tongue elevation pulls on the soft palate, linking tongue-base and palatal position
- Hypoglossal nerve (CN XII), medial and lateral branches: the medial branch mainly drives the protrudors (genioglossus), the lateral branch the retractors, so cuff placement determines which action dominates
- Protrudors (extrinsic tongue muscles, chiefly genioglossus): pull the tongue forward, opening the retroglossal airway; the action hypoglossal nerve stimulation recruits (labeled 'Prtotruders' on the figure)
- Styloglossus muscle: an extrinsic retractor; pulls the tongue up and back
- L: point where the hypoglossal nerve's lateral branch enters the retractor muscle group
- M: point where the hypoglossal nerve's medial branch enters the protrudor (genioglossus) muscle group
- Retractors (extrinsic tongue muscles, e.g. styloglossus, hyoglossus): pull the tongue backward and can worsen retroglossal obstruction if they dominate over the protrudors
- Hyoglossus muscle: extrinsic retractor and depressor of the tongue
- Genioglossus muscle: the principal tongue protrudor; the muscle hypoglossal nerve stimulation targets to relieve OSA
- Mylohyoid muscle (cut in this dissection): forms the floor of the mouth; elevates the hyoid/tongue during swallowing
- Geniohyoid muscle: extrinsic tongue/hyoid muscle; carries C1 fibers that travel with, but are not part of, CN XII's own motor supply

**Diagram: How CPAP holds the airway open: pneumatic splinting**

Same airway, no pressure versus with positive airway pressure. Name each panel, then reveal.

_Image source: How CPAP Works: Continuous Pneumatic Airway Splinting. Illustration generated with Google Gemini._
- Collapsed airway: without pressure support, the soft palate/tongue-base tissue apposes the pharyngeal wall and obstructs the airway
- Larynx: landmark below the collapsing retropalatal/retroglossal airway; not itself the site of obstruction in OSA
- CPAP mask: interface delivering continuous positive pressure to the upper airway; poor fit/comfort is the leading cause of non-adherence
- Open airway: same airway held patent by the pneumatic splinting effect of positive pressure
- Positive airway pressure: acts as a pneumatic splint, pushing outward on the pharyngeal walls at every level of potential collapse
- Without CPAP: the panel depicting unsupported, collapsible upper airway anatomy during sleep
- With CPAP: the panel depicting the same airway splinted open by continuous positive pressure

### Clinical blocks (11)

**[stop-bang] STOP-BANG: OSA screening**

A validated 8-item screen. Each item scores one point:

- Snoring loudly (louder than talking, or heard through a closed door)
- Tiredness/fatigue/sleepiness during the day
- Observed apnea (someone has witnessed you stop breathing during sleep)
- Pressure: treated or untreated high blood pressure
- BMI >35 kg/m&sup2;
- Age >50 years
- Neck circumference >40cm
- Gender: male≥3 positive flags high risk and should prompt referral for a sleep study; it is a screening tool, not diagnostic. Risk stratifies further beyond the simple ≥3 cutoff, which matters most in the preoperative setting.

| STOP-BANG score | Risk |
| --- | --- |
| 0-2 | Low risk |
| 3-4 | Intermediate risk |
| 5-8 | High risk |

**[ahi-severity] Apnea-Hypopnea Index (AHI): severity grading**

AHI is the number of apneas + hypopneas per hour of sleep, from polysomnography (PSG) or a home sleep apnea test (HSAT).

| AHI (events/hr) | Severity |
| --- | --- |
| <5 | Normal |
| 5-14 | Mild OSA |
| 15-29 | Moderate OSA |
| ≥30 | Severe OSA |

**[epworth] Epworth Sleepiness Scale**

A validated 0-24 self-report questionnaire scoring the likelihood of dozing in 8 everyday situations. ≥10 suggests clinically significant excessive daytime sleepiness. It measures symptom burden, not disease severity: a patient can have severe OSA by AHI with a low Epworth score, or vice versa.

**[management-ladder] The management ladder: CPAP first, surgery second**

Core principle: OSA treatment is a ladder, not a menu. Start with the option that reliably works regardless of where the airway collapses, and escalate only when it fails.
Because positive airway pressure splints the entire airway at once, it is first-line before the obstruction site is even known. Surgery generally enters only after CPAP has genuinely failed, chosen based on where the airway collapses.
The rungs, in order:

- Behavioral/foundational therapy, for everyone: weight loss (~10% weight reduction lowers AHI by roughly a quarter), reduced evening alcohol, and positional therapy for supine-predominant OSA (supine AHI &ge;2x non-supine). Complementary, not standalone cures for most patients.
- CPAP: first-line for essentially all diagnosed OSA; works at any severity and collapse level. The limiting factor is adherence, not efficacy.
- Oral appliance (mandibular advancement device, MAD): first-line alternative for mild-to-moderate OSA, and a key option for CPAP-intolerant patients at any severity. Less efficacious than CPAP at lowering AHI but often better tolerated, so real-world effectiveness can be comparable. Custom, titratable, dentist-fitted; confirm efficacy with a follow-up sleep study.
- Site-directed surgery, when CPAP fails (intolerance, non-adherence, or inadequate response); the procedure matches the collapse site(s): nasal surgery (adjunct to rescue CPAP tolerance), palate-level surgery (UPPP) for retropalatal collapse, hypoglossal nerve stimulation for tongue-base collapse in selected patients, maxillomandibular advancement for skeletal/multilevel disease. In children, adenotonsillectomy is the exception: first-line, not a last resort.What "CPAP failed" actually means: not "the patient dislikes it." Failure = documented intolerance, non-adherence despite troubleshooting (mask refit, humidification, treating nasal obstruction, ramp/pressure-relief), or inadequate AHI/symptom response despite use. Fix the fixable before climbing the ladder.
Worked example: how a real patient moves down the ladder:
A 45-year-old man, BMI 31, has moderate OSA (AHI 22) and an Epworth score of 13.
Rungs 1-2: he's counseled on ~10% weight loss and started on CPAP (the default first step); he's also told to cut evening alcohol.
Reassess at ~30-90 days: the device download shows 2.5 h/night on 40% of nights. He reports mask leak and a blocked nose. This is not yet "CPAP failure": it's a troubleshooting trigger. A nasal steroid is started, the mask is refitted, humidification is added, and nasal surgery is considered as an adherence adjunct.
If still non-adherent: now this is genuine CPAP failure. Offer a mandibular advancement device (reasonable given moderate severity) or proceed to a surgical workup.
If heading toward surgery: DISE identifies the collapse site(s), which selects the operation: e.g. isolated retropalatal collapse -> palate surgery; tongue-base collapse without complete concentric palatal collapse -> hypoglossal nerve stimulation candidate.
Teaching point: the ladder is iterative: most of the clinical work happens at the "reassess and troubleshoot" step, not the jump to surgery.
What DISE is and why it matters: drug-induced sleep endoscopy (DISE) is a flexible nasendoscopic exam of the upper airway performed under light sedation (propofol or dexmedetomidine) that simulates sleep, letting the surgeon watch the airway collapse in real time and see which structures obstruct and in what pattern.
Rationale: surgical planning requires knowing where the airway collapses, unlike CPAP. An awake exam (e.g. Muller maneuver) poorly predicts what happens during sleep. DISE dynamically localizes the obstruction so the operation targets the correct level.
What it reports: collapse graded by level and pattern, commonly using the VOTE classification (Velum/palate, Oropharynx/lateral walls, Tongue base, Epiglottis), noting degree (none/partial/complete) and configuration (anteroposterior, lateral, concentric) at each site.
Complete concentric collapse at the velum/palate is a contraindication to hypoglossal nerve stimulation; DISE is mandatory before HGNS to exclude this pattern.
How it changes management: DISE alters the surgical plan versus awake assessment in roughly half of patients and, in some series, reduces unnecessary multilevel surgery while improving success rates. It can also be done with CPAP/MAD in place to explain why a current therapy is failing.
Honest limitation: DISE is a single sedated snapshot, sedation protocols aren't fully standardized, and it doesn't reliably reproduce REM sleep: so it informs, rather than dictates, the plan.

**[glp1-osa-pharmacotherapy] Weight-loss pharmacotherapy for OSA (tirzepatide)**

In December 2024, tirzepatide (Zepbound), a dual GIP/GLP-1 receptor agonist, became the first drug FDA-approved for moderate-to-severe OSA in adults with obesity, based on the SURMOUNT-OSA phase 3 trials. Over 52 weeks it reduced AHI by ~20-25 events/h (vs. minimal change on placebo), with ~42-50% of patients reaching disease remission (AHI <5, or <15 without symptoms), alongside ~16-20% weight loss and improvements in hypoxic burden, hsCRP, and systolic BP. Mechanism is primarily weight loss (reducing tongue and parapharyngeal fat), with possible weight-independent effects.
Key caveats: it does not match CPAP's AHI reduction (~22 vs ~31 events/h), it is for BMI &ge;30 (unlikely to help non-obese or purely anatomic obstruction), weight/AHI regain occurs after discontinuation, and cardiovascular-outcome benefit is unproven. Best positioned as a disease-modifying adjunct, combined with CPAP, for preoperative optimization, or potentially to expand HGNS candidacy, not a blanket CPAP replacement.

**[surgical-options] Named surgical options and what they target**

Site-directed surgery, escalating in invasiveness.

| Procedure | Targets | Notes |
| --- | --- | --- |
| UPPP (uvulopalatopharyngoplasty) | Retropalatal (soft palate/uvula/lateral walls) | Most established; best results when obstruction is palate-level, not tongue-base |
| Tongue-base reduction / genioglossus advancement | Retroglossal (tongue base) | For tongue-base-predominant obstruction |
| Hypoglossal nerve stimulation (e.g. Inspire) | Retroglossal, via genioglossus tone | For CPAP-intolerant moderate-severe OSA; specific BMI/anatomy eligibility criteria (e.g. no complete concentric collapse on DISE) |
| Maxillomandibular advancement (MMA) | Multilevel: enlarges the entire skeletal airway framework | Most effective single surgery for appropriate candidates; more invasive, orthognathic-level surgery |
| Adult tonsillectomy | Retropalatal, if tonsils are large | Selected adults with significant tonsillar hypertrophy contributing to obstruction |
| Nasal surgery (septoplasty, turbinate reduction) | Nasal: reduces upstream resistance only | Adjunct to improve CPAP tolerance/adherence; rarely produces a clinically significant AHI reduction alone, so not used as primary OSA therapy |

**[hgns-how-it-works] Hypoglossal nerve stimulation (HGNS): how it works**

An implanted device that treats OSA by electrically firing the hypoglossal nerve in time with breathing, contracting the genioglossus so the tongue protrudes and stiffens and the airway stays open: an active splint, in contrast to CPAP's pneumatic splint.
Three components (unilateral device):

- Stimulation lead: a cuff electrode on the hypoglossal nerve (or its medial branch) in the neck.
- Sensing lead: placed between the intercostal muscles to detect the respiratory cycle.
- Implantable pulse generator: placed in an infraclavicular pocket, like a pacemaker.The generator reads inspiration from the sensing lead and delivers a stimulus phase-locked to inspiration, protruding the tongue exactly when the airway is most collapsible.
Inclusion vs. exclusion branches: why cuff placement is everything: CN XII is pure motor, and distal to its trunk it splits into a medial division and lateral division that do opposite things.

- Medial branches -> protrusors (genioglossus &plusmn; geniohyoid/intrinsic protrusive fibers, with a C1 contribution). Stimulating these protrudes/stiffens the tongue -> opens the retrolingual airway. These are the 'inclusion' branches, captured inside the cuff.
- Lateral branches -> retractors (hyoglossus, styloglossus). Stimulating these retracts the tongue (counterproductive); these are the 'exclusion' branches, deliberately kept out of the cuff.Practical operative points: intraoperative EMG/nerve integrity monitoring confirms genioglossus (protrusion) activation without hyoglossus/styloglossus (retraction) before the cuff is secured: the surgeon looks for the tongue to protrude, not retract. Bipolar (not monopolar) cautery is used near the device to avoid damaging it.
Indications (FDA, unilateral device):

- Adult (&ge;18y) with moderate-to-severe OSA who has failed or cannot tolerate CPAP
- AHI in the approved range (originally 15-65, upper limit since expanded: confirm current device labeling)
- BMI below threshold (originally &le;32, many payers/labels now allow <35, up to <40 in updated criteria: verify against current guidance)
- <25% central/mixed apneas
- DISE showing no complete concentric collapse at the palate (the make-or-break selection step)Contraindications:

- Complete concentric collapse of the velum/palate on DISE (the single most important exclusion: the collapse is too circumferential for tongue protrusion to overcome)
- BMI or AHI above current thresholds, &ge;25% central/mixed apnea
- Severe obstructive/restrictive lung disease
- Neurologic conditions limiting upper-airway/tongue control (or prior surgery that does so)
- Pregnancy (or planned pregnancy)
- Inability to operate the device, or need for incompatible MRIDISE Findings and HGNS Candidacy: tongue-base/retrolingual (anteroposterior) collapse responds well to hypoglossal nerve stimulation; complete concentric palatal collapse does not, so every candidate undergoes drug-induced sleep endoscopy first.
Unilateral vs. bilateral HGNS:
Unilateral (established approach): cuff on one hypoglossal nerve (typically the right), stimulating the medial/protrusor fibers, synchronized to inspiration via a respiratory sensing lead. The FDA-approved, phase-III-validated design, with STAR/ADHERE data showing ~68-83% AHI reduction.
Bilateral (newer): stimulates both hypoglossal nerves and, in the current device, is breath-rate-independent (no separate chest sensing lead). Single-arm trials show meaningful AHI reduction but still less mature than unilateral data.
One-line contrast: "Unilateral = one nerve, sensor-triggered with the breath; bilateral = both nerves, breath-rate-independent."

**[hgns-indications] HGNS indications (FDA)**

Core FDA candidacy criteria for (unilateral) HGNS:

- Age &ge;18
- Moderate-to-severe OSA (AHI 15-65 in original labeling, now expanded up to AHI &le;100)
- CPAP failure or intolerance
- Central + mixed apneas <25% of total AHI
- BMI below threshold (originally &le;32, now expanded to &le;40 under updated guidance; many insurers still use <35)
- Absence of complete concentric collapse (CCC) at the velum on DISEA pre-implant DISE is mandatory to confirm a favorable collapse pattern.

**[hgns-contraindications] HGNS contraindications**

- Complete concentric collapse (CCC) at the velum on DISE (the classic disqualifier: tongue protrusion cannot overcome circumferential palatal collapse driven by the lateral walls)
- Central or mixed apneas &ge;25% of the AHI
- BMI above threshold
- AHI above the labeled ceiling
- Neurologic conditions or prior upper-airway surgery limiting tongue/airway control
- Inability to operate the patient controller
- Pregnancy or plans to become pregnant
- Need for MRI incompatible with the device
- Severe obstructive/restrictive lung diseaseNote: oropharyngeal lateral-wall collapse on DISE, while not an absolute contraindication, predicts reduced efficacy.

**[pap-titration-adherence] PAP titration and the definition of 'adherence'**

Determining the therapeutic pressure:

- A full-night in-lab titration polysomnography: a technician adjusts pressure through the night until obstructive events are controlled.
- A split-night study: diagnostic PSG for the first portion of the night, titration for the remainder if the AHI is high enough early on to justify it.
- Auto-titrating PAP (APAP) at home, which self-adjusts pressure breath-to-breath and is appropriate for uncomplicated moderate-severe OSA without significant comorbidity.Adherence has a formal definition that matters for insurance coverage, not just clinical impression: average use of ≥4 hours per night on ≥70% of nights within a 30-consecutive-day period, typically confirmed from the device's built-in usage data.

| Barrier | Troubleshooting |
| --- | --- |
| Mask leak / poor fit | Refit or change interface (nasal pillows, nasal mask, full-face mask) |
| Claustrophobia | Gradual desensitization: daytime wear trials, starting with a smaller nasal-pillow interface |
| Nasal congestion/dryness | Heated humidification; treat nasal obstruction (see Rhinology track) to lower upstream resistance |
| Pressure intolerance | Ramp feature (starts low, rises gradually) or expiratory pressure relief (EPR); consider bilevel PAP if still intolerant |
| Mouth leak with a nasal interface | Chin strap, or switch to a full-face mask |

**[pap-modalities-overlap] Beyond fixed CPAP: BiPAP and overlap syndrome**

BiPAP (bilevel PAP) delivers separate inspiratory and expiratory pressures rather than one constant pressure. That's useful when a patient needs a high pressure that's poorly tolerated as a single fixed level, or when there's a hypoventilation component (neuromuscular disease, obesity-hypoventilation syndrome, or overlap syndrome) rather than pure upper-airway obstruction.
Overlap syndrome, meaning coexisting OSA and COPD, carries substantially higher risk of hypercapnic respiratory failure, pulmonary hypertension/cor pulmonale, and mortality than either condition alone. It usually needs pulmonology co-management, and bilevel or nocturnal ventilatory support may be required rather than standard CPAP alone.

### Red flags
- Severe OSA (AHI ≥30) with signs of cor pulmonale or pulmonary hypertension: untreated severe OSA drives chronic hypoxia-mediated right heart strain and needs urgent treatment initiation, not routine follow-up scheduling.
- Commercial vehicle operators with untreated OSA and excessive daytime sleepiness: a safety-critical occupational issue under US FMCSA guidance, where treatment adherence affects certification to drive.
- Morbid obesity (BMI ≥40) with severe OSA being considered for bariatric surgery: perioperative OSA management, often CPAP, reduces anesthetic and airway risk, so sequencing and communication with the surgical team matters.
- Post-UPPP bleeding or airway compromise: oropharyngeal surgery carries a real postoperative airway-obstruction and hemorrhage risk, so keep a low threshold for urgent ENT reassessment.
- Suspected central (not obstructive) sleep apnea: CPAP alone may not be effective and may need adaptive servo-ventilation or cardiology/neurology involvement. Distinguishing obstructive from central changes the entire management pathway.
- Complete concentric palatal collapse on DISE: a contraindication to hypoglossal nerve stimulation that changes surgical candidacy entirely.
- Undiagnosed OSA with treatment-resistant hypertension or new atrial fibrillation: OSA is a recognized contributor, and screening for it changes the cardiovascular management plan.
- Overlap syndrome (OSA + COPD) with hypercapnia, morning headache, or lower-extremity edema: higher risk of hypercapnic respiratory failure and pulmonary hypertension than either condition alone. Needs pulmonology co-management and often bilevel PAP, not plain CPAP.
- New central apneas appearing during CPAP titration (treatment-emergent/complex sleep apnea): don't assume undertreated OSA and simply raise the pressure. Many resolve with continued PAP use over weeks, but persistent cases need reassessment and may require adaptive servo-ventilation.

### Cases (7)

**Case [case-cpap-intolerant-severe-osa]**

Stem: A 52-year-old man, BMI 29, has severe OSA (AHI 38) confirmed on PSG. He has tried CPAP for 6 months but removes the mask nightly within an hour, citing claustrophobia. He continues to have daytime sleepiness (Epworth 15).

- Q: What is the next step before considering surgery?
  A: Attempt CPAP desensitization/alternative interfaces and consider an oral mandibular-advancement appliance first; if truly CPAP-intolerant despite these efforts, proceed to surgical evaluation.

- Q: If he remains CPAP-intolerant, what test determines his surgical candidacy, and for which procedure specifically?
  A: Drug-induced sleep endoscopy (DISE) to identify the site(s)/pattern of collapse. If there is no complete concentric palatal collapse and his BMI is in range, he may be a candidate for hypoglossal nerve stimulation.

Teaching: CPAP intolerance doesn't jump straight to surgery. Optimize CPAP tolerance and consider an oral appliance first, then let DISE findings, not just AHI, pick the surgical target.

**Case [case-commercial-driver-osa]**

Stem: A commercial truck driver screens STOP-BANG positive (5/8) at a routine occupational health visit. He reports falling asleep at red lights.

- Q: What is the appropriate next step, and why does the occupational context matter here?
  A: Refer for a sleep study promptly. Falling asleep while driving raises a safety-critical, occupational concern under US FMCSA guidance. This isn't just a quality-of-life issue: it affects his medical certification to operate a commercial vehicle.

- Q: If OSA is confirmed and treated, what is required before he can be recertified to drive?
  A: Documentation of effective treatment and adherence (e.g., CPAP compliance data). Certifying examiners require evidence the condition is controlled, not just that treatment was prescribed.

Teaching: STOP-BANG-positive with reported sleepiness behind the wheel escalates urgency beyond a routine referral. Occupational safety changes the timeline, not just the diagnosis.

**Case [case-bariatric-preop-osa]**

Stem: A 38-year-old woman, BMI 44, is being worked up for bariatric surgery. STOP-BANG is 6/8; she has never been evaluated for OSA.

- Q: Why does OSA status matter before her bariatric surgery, specifically?
  A: Undiagnosed/untreated OSA significantly increases perioperative airway and anesthetic risk (difficult airway, post-op respiratory depression risk with opioids/sedation). Preoperative screening and, if positive, PSG and CPAP initiation are standard before major surgery in high-risk patients.

- Q: Does successful bariatric surgery mean OSA treatment can stop?
  A: Not automatically. Weight loss often improves but doesn't always resolve OSA, so repeat sleep testing after significant weight loss determines whether CPAP can be safely discontinued.

Teaching: A high STOP-BANG score in a preoperative bariatric patient is a reason to screen and treat before surgery, not a footnote to address afterward.

**Case [case-central-vs-obstructive]**

Stem: A patient with heart failure with reduced ejection fraction is found to have an AHI of 25 on PSG, but the report notes most events show absent respiratory effort during the apneas, with a crescendo-decrescendo breathing pattern.

- Q: Is this obstructive or central sleep apnea, and how do you know?
  A: This is central sleep apnea (specifically Cheyne-Stokes breathing). Absent respiratory effort during apneas distinguishes it from obstructive apnea, where effort continues against a closed airway. The crescendo-decrescendo pattern is classic for CSA associated with heart failure.

- Q: Does the surgical ladder discussed for OSA apply here?
  A: No. The OSA surgical ladder (UPPP, hypoglossal stimulation, MMA) targets anatomic obstruction and does not apply to central sleep apnea. Management instead focuses on optimizing the underlying heart failure and may involve adaptive servo-ventilation, in coordination with cardiology.

Teaching: Absent respiratory effort during apneic events is the key discriminator for central sleep apnea, and it changes the entire management pathway away from the OSA surgical ladder.

**Case [case-uppp-postop-bleed]**

Stem: One week after UPPP, a patient presents with bright red blood from the mouth and difficulty swallowing.

- Q: What is the concern, and what is the immediate priority?
  A: Post-tonsillectomy/UPPP-type hemorrhage: airway and hemodynamic assessment first, as with any post-adenotonsillar-surgery bleed, plus urgent ENT evaluation. This age group and procedure carries real bleeding risk, particularly around the 5-10 day post-op window as eschar sloughs.

- Q: Should this patient be observed at home with reassurance, or sent in?
  A: Sent in urgently. Any active bleeding after pharyngeal surgery warrants same-day ENT/emergency evaluation, since it can progress rapidly and threaten the airway.

Teaching: Bleeding after UPPP is managed with the same urgency as post-tonsillectomy hemorrhage: same pharyngeal surgery, same bleeding risk window, same low threshold to escalate.

**Case [case-cpap-adherence-troubleshooting]**

Stem: A 46-year-old woman with moderate OSA (AHI 22) was started on CPAP 3 weeks ago. The device download shows average use of 2.1 hours/night on 40% of nights. She reports the mask leaks constantly and she wakes with a dry mouth.

- Q: Does she meet the formal definition of CPAP adherence? Why does this matter beyond the clinical picture?
  A: No. Adherence requires ≥4 hours/night on ≥70% of nights over a 30-day window, and she meets neither. This isn't only a clinical concern: insurers, including CMS, use this exact threshold to decide whether to continue covering the device.

- Q: What does her specific complaint (leak plus dry mouth) point to, and what's the fix?
  A: Persistent leak with morning dry mouth suggests mouth leak, often from a nasal interface with the mouth open during sleep. Address it with a chin strap or a switch to a full-face mask, plus mask refitting and heated humidification for the dryness, before concluding she is 'CPAP-intolerant.'

Teaching: Low adherence numbers are a prompt to troubleshoot the specific barrier, not a verdict that a patient has failed CPAP and is ready for a surgical conversation.

**Case [case-overlap-syndrome]**

Stem: A 63-year-old man with known COPD (FEV1 55% predicted) reports loud snoring, witnessed apneas, morning headaches, and new bilateral leg swelling. STOP-BANG is 5/8.

- Q: What diagnosis should be considered beyond a COPD exacerbation, and why do the morning headaches and leg swelling matter?
  A: Overlap syndrome: coexisting OSA and COPD. Morning headache raises concern for nocturnal hypercapnia, and leg swelling raises concern for pulmonary hypertension/cor pulmonale. Both are more common and more severe in overlap syndrome than in either disease alone.

- Q: How does management differ from managing OSA alone?
  A: He needs a PSG to confirm OSA and assess for hypoventilation, and management typically involves pulmonology co-management; bilevel PAP (rather than standard fixed CPAP) is often used when there is a hypoventilation component.

Teaching: COPD plus classic OSA symptoms should raise overlap syndrome on the differential. It changes both the urgency (hypercapnia/pulmonary hypertension risk) and the PAP modality chosen.

### Flashcards (48)

**[stop-bang-card]** tags: SL, clinical, milestones: PC4, MK1, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What does STOP-BANG stand for, and what score flags high risk?
- Back: Snoring, Tiredness, Observed apnea, high blood Pressure, BMI>35, Age>50, Neck circumference>40cm, male Gender. ≥3 positive = high risk for OSA, prompting referral for a sleep study.
- Source: Standard OSA screening teaching (STOP-BANG, Chung et al.).

**[ahi-severity-card]** tags: SL, clinical, milestones: MK1, PC4, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: State the AHI severity thresholds for OSA.
- Back: normal, 5-14 mild OSA, 15-29 moderate OSA, ≥30 severe OSA (events/hour of sleep, from PSG or a home sleep apnea test).
- Source: AASM scoring manual: standard AHI severity grading.

**[epworth-card]** tags: SL, clinical, milestones: PC4, MK1, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What does the Epworth Sleepiness Scale measure, and what score is significant?
- Back: A 0-24 self-report of the likelihood of dozing in 8 everyday situations, measuring symptom burden (daytime sleepiness), not disease severity by AHI. ≥10 suggests clinically significant excessive daytime sleepiness.
- Source: Standard sleep medicine teaching: Epworth Sleepiness Scale.

**[cpap-first-line-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What is first-line management for diagnosed OSA, and when does surgery enter the conversation?
- Back: CPAP is first-line for essentially all diagnosed OSA (± weight loss, positional therapy, or an oral mandibular-advancement appliance for milder disease). Surgery is considered when CPAP fails, meaning intolerance, non-adherence, or inadequate response.
- Source: AASM Clinical Practice Guideline on OSA management.

**[dise-card]** tags: SL, clinical, milestones: PC4, PC9, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Before site-directed OSA surgery, the airway is examined under sedation simulating natural sleep using a technique called [...], which identifies the specific site and pattern of collapse.
- Back: Before site-directed OSA surgery, the airway is examined under sedation simulating natural sleep using a technique called drug-induced sleep endoscopy (DISE), which identifies the specific site and pattern of collapse. Site-directed surgery is chosen based on DISE findings, not AHI alone.
- Source: Standard sleep surgery teaching on drug-induced sleep endoscopy.

**[uppp-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What does UPPP target, and what predicts poor response?
- Back: Uvulopalatopharyngoplasty targets retropalatal obstruction (soft palate, uvula, lateral pharyngeal walls). Higher Friedman stage (more tongue-base obstruction) predicts worse outcomes from UPPP alone: palate-level surgery doesn't fix tongue-base collapse.
- Source: Standard sleep surgery teaching on UPPP.

**[hypoglossal-stim-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: How does hypoglossal nerve stimulation work, and name one key exclusion criterion.
- Back: An implanted device senses inspiration and stimulates cranial nerve XII in phase with breathing, protruding the tongue (via genioglossus contraction) to keep the airway open. Complete concentric palatal collapse on DISE is a contraindication.
- Source: AAO-HNSF Position Statement: Hypoglossal Nerve Stimulation for OSA.

**[mma-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What is maxillomandibular advancement (MMA), and why is it often the most effective single surgery?
- Back: Advancing both the maxilla and mandible forward, which enlarges the entire skeletal airway framework and addresses multilevel obstruction at once rather than one anatomic site. Highly effective for appropriate candidates but more invasive (orthognathic-level surgery). In pooled analyses, MMA achieves ~85% surgical success and ~46% cure, outperforming multilevel soft-tissue surgery (~65% success, ~28% cure) at the cost of higher (though still low) major-complication rates. Its benefit is greatest at the lateral pharyngeal wall, and it can even resolve palatal complete concentric collapse: making it an option for some patients excluded from HGNS.
- Source: Standard sleep surgery teaching on maxillomandibular advancement.

**[friedman-staging-card]** tags: SL, clinical, milestones: MK1, PC4, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: The oropharyngeal exam grading system that scores how much the tongue base obscures the view of the palate, tonsils, and uvula on a relaxed oral exam is called [...].
- Back: The oropharyngeal exam grading system that scores how much the tongue base obscures the view of the palate, tonsils, and uvula on a relaxed oral exam is called Friedman tongue position. Combined with tonsil size and BMI it forms the Friedman staging system, and higher stages predict worse outcomes from UPPP alone.
- Source: Standard sleep surgery teaching on Friedman staging.

**[central-vs-obstructive-card]** tags: SL, clinical, milestones: MK2, PC4, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: On a sleep study, the finding that distinguishes central sleep apnea from obstructive sleep apnea is [...] during the apneic event, since obstructive events continue despite ongoing effort against a closed airway.
- Back: On a sleep study, the finding that distinguishes central sleep apnea from obstructive sleep apnea is absent respiratory effort during the apneic event, since obstructive events continue despite ongoing effort against a closed airway. Central events often show a crescendo-decrescendo (Cheyne-Stokes) pattern, classically in heart failure.
- Source: Standard sleep medicine teaching on central sleep apnea.

**[oral-appliance-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: When is an oral mandibular-advancement appliance an appropriate OSA treatment?
- Back: For mild-to-moderate OSA, or for CPAP-intolerant patients regardless of severity as a second-line option. It works by advancing the mandible (and tongue base with it) to enlarge the retroglossal airway.
- Source: AASM Clinical Practice Guideline on oral appliance therapy.

**[positional-therapy-card]** tags: SL, clinical, milestones: PC9, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What is 'positional OSA,' and how is it managed?
- Back: OSA where the AHI is markedly worse supine than in other positions (often ≥2× worse). Managed with positional therapy (devices/techniques discouraging supine sleep) as an adjunct or alternative in appropriately selected mild-moderate cases.
- Source: Standard sleep medicine teaching on positional OSA.

**[osa-cardiovascular-card]** tags: SL, clinical, milestones: MK3, PC4, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What cardiovascular consequences are associated with untreated OSA?
- Back: Treatment-resistant hypertension, atrial fibrillation and other arrhythmias, and, in severe prolonged untreated disease, pulmonary hypertension and cor pulmonale from chronic intermittent hypoxia.
- Source: Standard teaching on OSA cardiovascular associations.

**[osa-driving-card]** tags: SL, clinical, milestones: SBP3, PC4, UKMLA: Obstructive sleep apnoea, RED FLAG, reviewer: (none)
- Front: Why does OSA screening carry extra urgency in commercial drivers?
- Back: Untreated OSA with excessive daytime sleepiness is a safety-critical occupational risk. US FMCSA guidance ties commercial driving certification to documented OSA treatment and adherence, not just diagnosis.
- Source: US FMCSA medical guidance on OSA and commercial driving.

**[tonsillectomy-adult-osa-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: When is tonsillectomy considered as OSA treatment in an adult?
- Back: When significant tonsillar hypertrophy is identified as a contributor to retropalatal obstruction. It's much less commonly the primary driver in adults than in children, but still a targeted, site-specific option when present.
- Source: Standard sleep surgery teaching on adult tonsillectomy for OSA.

**[bariatric-preop-osa-card]** tags: SL, clinical, milestones: SBP3, PC4, UKMLA: Obstructive sleep apnoea, RED FLAG, reviewer: (none)
- Front: Why is preoperative OSA screening important before bariatric or other major surgery?
- Back: Undiagnosed/untreated OSA significantly raises perioperative airway and anesthetic risk (difficult airway, post-op respiratory depression with sedation/opioids). High STOP-BANG scores should prompt evaluation and, if needed, CPAP initiation before surgery.
- Source: Standard perioperative teaching on OSA and bariatric/major surgery.

**[weight-loss-osa-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Does weight loss cure OSA?
- Back: It often improves OSA (fat deposition around the airway/neck is a major contributor) but doesn't always resolve it completely. Repeat sleep testing after significant weight loss is needed before CPAP can be safely discontinued.
- Source: Standard sleep medicine teaching on weight and OSA.

**[uppp-bleed-card]** tags: SL, clinical, milestones: PC9, PC1, UKMLA: Obstructive sleep apnoea, RED FLAG, reviewer: (none)
- Front: How urgently should post-UPPP bleeding be treated, and why?
- Back: Urgently: same-day ENT/emergency evaluation, same as post-tonsillectomy hemorrhage. Pharyngeal surgery carries a real bleeding risk (notably around days 5-10 as eschar sloughs) that can progress rapidly and threaten the airway.
- Source: Standard otolaryngology teaching on post-pharyngeal-surgery hemorrhage.

**[pediatric-vs-adult-osa-card]** tags: SL, clinical, milestones: MK2, PC7, UKMLA: Obstructive sleep apnoea, Snoring, reviewer: (none)
- Front: In children, the leading cause of OSA is [...], so adenotonsillectomy, not CPAP, is first-line treatment.
- Back: In children, the leading cause of OSA is adenotonsillar hypertrophy, so adenotonsillectomy, not CPAP, is first-line treatment. In adults, obesity and multilevel soft-tissue collapse predominate instead, and CPAP is first-line.
- Source: Cross-reference: standard pediatric vs adult sleep medicine teaching.

**[sleep-study-types-card]** tags: SL, clinical, milestones: MK1, PC4, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: The gold-standard sleep study, capable of diagnosing central and other sleep disorders through full monitoring of EEG, airflow, effort, and oximetry, is [...].
- Back: The gold-standard sleep study, capable of diagnosing central and other sleep disorders through full monitoring of EEG, airflow, effort, and oximetry, is in-lab polysomnography (PSG). A home sleep apnea test (HSAT) is a limited-channel alternative for patients with a high pretest probability of moderate-severe OSA and no major comorbidities, though it can underestimate severity. HSAT is a 'rule-in, not rule-out' test: it can underestimate severity because it uses total recording time (not EEG-measured sleep) and, without EEG, scores hypopneas by desaturation only (&ge;3% recommended, &ge;4% optional), missing arousal-based events. A negative/nondiagnostic HSAT with persistent clinical suspicion warrants in-lab PSG. Reserve PSG for significant cardiopulmonary disease, neuromuscular weakness, suspected hypoventilation/central apnea, chronic opioid use, prior stroke, or severe insomnia.
- Source: AASM Clinical Practice Guideline on sleep testing.

**[pap-adherence-definition-card]** tags: SL, clinical, milestones: PC9, SBP3, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: The formal definition of CPAP adherence used by CMS and most insurers is average use of [...] within a 30-consecutive-day period.
- Back: The formal definition of CPAP adherence used by CMS and most insurers is average use of ≥4 hours per night on ≥70% of nights within a 30-consecutive-day period. Insurers use this exact threshold to decide whether to keep covering the device, so using it only some nights doesn't count.
- Source: AASM Clinical Practice Guideline: Treatment of Adult OSA with PAP (Patil et al., 2019); CMS PAP adherence coverage criteria.

**[pap-titration-types-card]** tags: SL, clinical, milestones: PC9, MK1, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What are the three ways to determine a patient's therapeutic CPAP pressure (PAP titration)?
- Back: A full-night in-lab titration PSG (pressure adjusted through the night), a split-night study (diagnostic PSG for the first part of the night, titration for the rest if the AHI is high enough early), or auto-titrating PAP (APAP) at home for uncomplicated moderate-severe OSA.
- Source: AASM Clinical Practice Guideline: Treatment of Adult OSA with PAP (2019).

**[cpap-mouth-leak-troubleshoot-card]** tags: SL, clinical, milestones: PC9, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: A CPAP user's mask leaks constantly and they wake up with a dry mouth. How do you troubleshoot it?
- Back: This pattern suggests mouth leak from a nasal interface with the mouth open during sleep. Fix it with a chin strap or a switch to a full-face mask, plus refitting the mask and adding heated humidification for the dryness, before labeling the patient CPAP-intolerant.
- Source: AASM Clinical Practice Guideline: Treatment of Adult OSA with PAP (2019).

**[bipap-indications-card]** tags: SL, clinical, milestones: PC9, MK3, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: The PAP device chosen over standard CPAP when a high pressure is poorly tolerated as one fixed level, or when a hypoventilation component is present rather than pure obstruction, is [...], which delivers separate inspiratory and expiratory pressures.
- Back: The PAP device chosen over standard CPAP when a high pressure is poorly tolerated as one fixed level, or when a hypoventilation component is present rather than pure obstruction, is BiPAP (bilevel PAP), which delivers separate inspiratory and expiratory pressures.
- Source: AASM Clinical Practice Guideline on PAP devices.

**[overlap-syndrome-card]** tags: SL, clinical, milestones: PC9, MK3, UKMLA: Obstructive sleep apnoea, RED FLAG, reviewer: (none)
- Front: The coexistence of OSA and COPD, which carries a higher risk of hypercapnic respiratory failure and pulmonary hypertension than either disease alone, is called [...].
- Back: The coexistence of OSA and COPD, which carries a higher risk of hypercapnic respiratory failure and pulmonary hypertension than either disease alone, is called overlap syndrome. It usually needs pulmonology co-management, since bilevel PAP is often required instead of standard CPAP.
- Source: Standard sleep/pulmonary medicine teaching on overlap syndrome (OSA + COPD).

**[treatment-emergent-csa-card]** tags: SL, clinical, milestones: PC9, MK3, UKMLA: Obstructive sleep apnoea, RED FLAG, reviewer: (none)
- Front: What is treatment-emergent (complex) central sleep apnea?
- Back: New central apneas that appear or persist once CPAP has resolved a patient's obstructive events. Many resolve spontaneously with continued PAP use over weeks; persistent cases may need adaptive servo-ventilation. Don't assume undertreated OSA and simply raise the pressure.
- Source: Standard sleep medicine teaching on central sleep apnea.

**[nasal-surgery-osa-card]** tags: SL, clinical, milestones: PC9, PC5, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Nasal surgery such as septoplasty or turbinate reduction rarely produces a clinically significant AHI reduction on its own, so in OSA its real value is as a [...] rather than a primary treatment.
- Back: Nasal surgery such as septoplasty or turbinate reduction rarely produces a clinically significant AHI reduction on its own, so in OSA its real value is as a CPAP-adherence adjunct rather than a primary treatment. Lowering nasal resistance improves mask tolerance and comfort, which supports keeping up with CPAP.
- Source: Standard sleep surgery teaching on nasal surgery and CPAP adherence.

**[laup-not-recommended-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, Snoring, reviewer: (none)
- Front: Is LAUP (laser-assisted uvulopalatoplasty) recommended for treating OSA?
- Back: No. AASM does not recommend LAUP (or radiofrequency palatal ablation) for OSA treatment, given insufficient evidence of AHI benefit and a risk of worsening or palatal scarring. At most it is considered for isolated snoring once OSA has been excluded by PSG.
- Source: AASM Practice Parameters for Surgical Modifications of the Upper Airway (LAUP not recommended for OSA).

**[stop-bang-risk-stratification-card]** tags: SL, clinical, milestones: PC9, SBP3, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Beyond '≥3 = high risk,' how is STOP-BANG risk more precisely stratified?
- Back: 0-2 = low risk, 3-4 = intermediate risk, 5-8 = high risk. An intermediate score can be reclassified as high risk if BMI >35, neck circumference >40cm, or male gender is among the positive items. This reclassification is used especially in preoperative screening.
- Source: Chung F et al., STOP-BANG questionnaire validation and risk-stratification studies (Anesthesiology 2008; Anesth Analg 2016).

**[hgns-candidacy-card]** tags: SL, clinical, milestones: PC9, MK1, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What are the indications and candidacy criteria for hypoglossal nerve stimulation (HGNS) in obstructive sleep apnea?
- Back: Age &ge;18, CPAP-intolerant/failed, moderate-to-severe OSA (classically AHI 15-65, now expanded up to &le;100), central+mixed apneas <25% of AHI, BMI below threshold (classically &le;32, expanded to &le;40), and no complete concentric collapse of the velum on DISE. Pre-implant DISE is mandatory.[figure: FDA/STAR-trial candidacy criteria for hypoglossal nerve stimulation, with an embedded figure of the generator/lead/cuff components.]
- Source: FDA hypoglossal nerve stimulation approval criteria (updated); STAR trial inclusion criteria (Strollo et al., NEJM 2014).

**[tirzepatide-osa-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: The first drug FDA-approved (December 2024) for moderate-to-severe OSA in adults with obesity is [...].
- Back: The first drug FDA-approved (December 2024) for moderate-to-severe OSA in adults with obesity is tirzepatide (Zepbound), a dual GIP/GLP-1 receptor agonist. In SURMOUNT-OSA it cut AHI by ~20-25 events/h with ~42-50% remission, but it works mainly through weight loss, requires BMI &ge;30, doesn't match CPAP's efficacy, and AHI regains after stopping.
- Source: Anderer, JAMA (FDA approval), 2025; Malhotra et al., Nat Med (SURMOUNT-OSA), 2026.

**[hgns-branch-anatomy-card]** tags: SL, anatomy, milestones: MK1, PC9, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: In hypoglossal nerve stimulation, which division of CN XII is targeted ('inclusion') and which is avoided ('exclusion'), and why?
- Back: Medial branches (inclusion) innervate the protrusors (genioglossus) -> captured by the cuff to protrude/stiffen the tongue and open the retrolingual airway. Lateral branches (exclusion) innervate the retractors (hyoglossus, styloglossus) -> kept out of the cuff, since retraction would worsen obstruction. Intraoperative EMG confirms selective protrusor activation.
- Source: Sturm et al., Laryngoscope, 2020; Bassiri Gharb et al., Neuromodulation, 2015.

**[hgns-ccc-card]** tags: SL, clinical, milestones: PC9, MK1, UKMLA: Obstructive sleep apnoea, RED FLAG, reviewer: (none)
- Front: The DISE finding that is the classic contraindication to unilateral hypoglossal nerve stimulation is [...].
- Back: The DISE finding that is the classic contraindication to unilateral hypoglossal nerve stimulation is complete concentric collapse (CCC) at the velum/soft palate. HGNS protrudes the tongue (via genioglossus), which cannot overcome circumferential collapse driven by the lateral pharyngeal walls; in the STAR trial essentially no CCC patients responded, so the FDA made absence of CCC a mandatory eligibility criterion.
- Source: Kahmke et al., JOMI, 2023; Vena et al., Eur Respir J, 2025.

**[friedman-exam-technique-card]** tags: SL, clinical, milestones: MK1, PC4, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: How is the Friedman tongue position exam performed, and how does it differ from the classic Mallampati?
- Back: Mouth open wide, tongue resting in the mouth (not protruded) and not phonating, which mimics how the tongue behaves during sleep. Classic (anesthesia) Mallampati instead has the patient protrude the tongue, since it's predicting intubation difficulty, not sleep-time collapse.
- Source: Standard sleep surgery teaching on Friedman tongue position.

**[friedman-grades-card]** tags: SL, clinical, milestones: MK1, PC4, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What does each Friedman tongue position (I-IV) allow you to see?
- Back: I: entire uvula and tonsils/pillars visible. II: uvula visible but not the tonsils (IIa = full uvula, IIb = only base of uvula/soft palate). III: soft palate visible but not the uvula. IV: hard palate only. A higher grade means more tongue-base obstruction.
- Source: Standard sleep surgery teaching on Friedman tongue position.

**[friedman-staging-components-card]** tags: SL, clinical, milestones: MK1, PC4, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: What three components make up the Friedman staging system?
- Back: Tongue/palate position (I-IV), tonsil size (Brodsky 0-4), and BMI (cutoff 40 kg/m&sup2;). Stage I = big tonsils + favorable FTP + BMI<40. Stage III = small tonsils + unfavorable FTP. Stage IV = BMI>40.
- Source: Standard sleep surgery teaching on Friedman staging.

**[friedman-uppp-prediction-card]** tags: SL, clinical, milestones: MK1, PC9, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Friedman stage [...] predicts ~80% UPPP success, while stage [...] predicts <10% success.
- Back: Friedman stage I predicts ~80% UPPP success, while stage III predicts <10% success. Big tonsils + small tongue = removable palate obstruction = UPPP works; small tonsils + big tongue = tongue-base obstruction = UPPP fails.
- Source: Standard sleep surgery teaching on Friedman staging and UPPP outcomes.

**[friedman-anatomy-vs-ahi-card]** tags: SL, clinical, milestones: MK1, PC9, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Does anatomy-based (Friedman) or severity-based (AHI) staging better predict UPPP outcome?
- Back: Anatomy-based staging predicts far better. A meta-analysis found stage I a strong positive predictor and stage III a negative predictor of UPPP success, while BMI and preoperative AHI were not significant predictors.
- Source: Standard sleep surgery teaching on Friedman staging and UPPP outcome predictors.

**[hypoglossal-motor-card]** tags: SL, anatomy, milestones: MK1, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: CN XII innervates all intrinsic and extrinsic tongue muscles except [...], which is supplied by the vagus.
- Back: CN XII innervates all intrinsic and extrinsic tongue muscles except the palatoglossus, which is supplied by CN X (vagus) via the pharyngeal plexus. CN XII is otherwise a pure motor nerve.
- Source: Standard head and neck anatomy teaching on CN XII.

**[tongue-protrusor-retractor-card]** tags: SL, anatomy, milestones: MK1, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Which tongue muscles protrude the tongue (and open the airway) vs. retract it?
- Back: Protrudes: genioglossus (main) plus geniohyoid/intrinsic protrusive fibers. Retracts: hyoglossus and styloglossus. Genioglossus is the key airway dilator that loses tone in sleep and collapses in OSA.
- Source: Standard head and neck anatomy teaching on tongue musculature.

**[cn12-lesion-card]** tags: SL, clinical, milestones: MK1, PC1, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: A unilateral hypoglossal nerve lesion causes the protruded tongue to deviate [...].
- Back: A unilateral hypoglossal nerve lesion causes the protruded tongue to deviate toward the side of the lesion (the intact genioglossus pushes it across). Chronic lesions show ipsilateral atrophy/fasciculations. "The tongue points to the lesion."
- Source: Standard head and neck anatomy/neurology teaching on CN XII palsy.

**[hgns-mechanism-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: How does hypoglossal nerve stimulation keep the airway open in OSA?
- Back: An implanted cuff electrode fires the hypoglossal nerve in phase with inspiration, contracting the genioglossus to protrude/stiffen the tongue and open the retrolingual airway: an active splint, versus CPAP's pneumatic splint.
- Source: AAO-HNSF Position Statement: Hypoglossal Nerve Stimulation for OSA.

**[hgns-inclusion-exclusion-card]** tags: SL, anatomy, milestones: MK1, PC9, UKMLA: Obstructive sleep apnoea, RED FLAG, reviewer: (none)
- Front: In HGNS, which hypoglossal branches are 'included' in the cuff and which are 'excluded,' and why?
- Back: Include medial branches (protrusors: genioglossus): they open the airway. Exclude lateral branches (retractors: hyoglossus, styloglossus): they retract the tongue. Intraoperative EMG confirms protrusion, not retraction, before securing the cuff; bipolar (not monopolar) cautery is used near the device.
- Source: Sturm et al., Laryngoscope, 2020; Bassiri Gharb et al., Neuromodulation, 2015.

**[hgns-dise-card]** tags: SL, clinical, milestones: PC9, MK1, UKMLA: Obstructive sleep apnoea, RED FLAG, reviewer: (none)
- Front: What DISE finding is a contraindication to HGNS?
- Back: Complete concentric collapse of the velum/palate. HGNS works for tongue-base/anteroposterior collapse; concentric palatal collapse is too circumferential for tongue protrusion to overcome. This is screened for with drug-induced sleep endoscopy before implant.
- Source: Kahmke et al., JOMI, 2023; Vena et al., Eur Respir J, 2025.

**[hgns-indications-card]** tags: SL, clinical, milestones: PC9, MK1, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: List the core FDA indications for (unilateral) HGNS.
- Back: - Adult &ge;18y
- Moderate-to-severe OSA
- CPAP failure/intolerance
- AHI in the approved range
- BMI below threshold
- <25% central/mixed apneas
- No complete concentric palatal collapse on DISEVerify current AHI/BMI cutoffs against device labeling, as thresholds have been expanded over time.
- Source: FDA hypoglossal nerve stimulation approval criteria (updated); STAR trial inclusion criteria (Strollo et al., NEJM 2014).

**[hgns-unilateral-bilateral-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Contrast unilateral vs. bilateral HGNS.
- Back: Unilateral stimulates one hypoglossal nerve's medial (protrusor) fibers, synchronized to inspiration via a chest sensing lead; FDA-approved and STAR/ADHERE-validated (~68-83% AHI reduction). Bilateral stimulates both nerves and, in the current device, is breath-rate-independent (no separate sensing lead); supported by newer, less mature single-arm trial data.
- Source: Strollo et al., NEJM (STAR trial), 2014; Woodson et al., ADHERE registry; single-arm trials of bilateral HGNS (BLAST OSA, DREAM).

**[management-ladder-card]** tags: SL, clinical, milestones: PC9, MK2, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Surgery for OSA is generally considered only after [...], and the specific operation is then chosen based on [...].
- Back: Surgery for OSA is generally considered only after CPAP failure (intolerance, non-adherence despite troubleshooting, or inadequate response), and the specific operation is then chosen based on the site(s) of collapse, often identified on DISE. CPAP is first-line because it splints the whole airway regardless of collapse level.
- Source: AASM Clinical Practice Guideline on OSA management; standard sleep surgery teaching.

**[dise-vote-classification-card]** tags: SL, clinical, milestones: PC4, PC9, UKMLA: Obstructive sleep apnoea, reviewer: (none)
- Front: Drug-induced sleep endoscopy (DISE) evaluates the sedated airway to localize collapse; the finding that specifically contraindicates hypoglossal nerve stimulation is [...].
- Back: The finding that specifically contraindicates hypoglossal nerve stimulation is complete concentric collapse at the velum/palate. DISE grades collapse by level and pattern (VOTE: Velum, Oropharynx, Tongue base, Epiglottis) and is used to select site-directed surgery and MAD/HGNS candidates.
- Source: Standard sleep surgery teaching on drug-induced sleep endoscopy and the VOTE classification.

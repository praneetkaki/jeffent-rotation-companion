/* pharmacology.js, PHARMACOLOGY POCKET GUIDE (subspecialty track). Built from the user's ENT Pharm Pocket Guide. Doses per US practice (AAO-HNSF); verify locally. */
window.JEFFENT.register(
{
 "id": "pharm-pocket",
 "track": "pharmacology",
 "trackName": "Pharmacology Pocket Guide",
 "trackAbbr": "RX",
 "order": 1,
 "title": "Pharmacology Pocket Guide",
 "subtitle": "Point-of-care antimicrobial and steroid choices for the ENT rotation: otic drops, sudden hearing loss, deep neck infections, and the antibiotic classes worth knowing cold.",
 "status": "DRAFT, pending faculty review. Verify all doses locally before prescribing.",
 "clinical": {
  "blocks": [
   {
    "id": "otic-drops",
    "title": "Otic drop selection: the open middle ear rule",
    "html": "<p class='sub'>The single most important principle in otic pharmacology.</p><p>When the tympanic membrane is <strong>perforated</strong> or a <strong>tube</strong> is present, the middle ear is open to the round/oval window, so a drop can reach the inner ear. Choose a <strong>non-ototoxic fluoroquinolone</strong> and avoid aminoglycosides, alcohol, and acidifying agents (ototoxicity and pain).</p>",
    "table": {
     "head": [
      "Setting",
      "Preferred drops",
      "Avoid"
     ],
     "rows": [
      [
       "<strong>Open middle ear</strong> (perforation or tubes)",
       "Fluoroquinolone: <strong>ofloxacin</strong>, or <strong>ciprofloxacin + dexamethasone</strong> (Ciprodex)",
       "Aminoglycosides (neomycin, gentamicin, tobramycin); alcohol or acidifying drops"
      ],
      [
       "<strong>Intact TM</strong> (uncomplicated otitis externa)",
       "Acidifying/antiseptic, aminoglycoside combinations, or fluoroquinolone with or without a steroid; add a wick if the canal is edematous",
       "Ototoxicity is not the concern with an intact drum"
      ]
     ]
    }
   },
   {
    "id": "otic-drops-pearls",
    "title": "Otic drops: practical pearls",
    "html": "<ul><li>Assume a tube is <strong>patent for about 12 months</strong> after placement (sometimes longer) unless extrusion and drum closure are documented; treat as an open middle ear.</li><li>Patients who <strong>taste</strong> the drops or can blow air out the ear have a non-intact TM.</li><li><strong>Tragal pumping</strong> and aural toileting before drops improve middle-ear penetration.</li><li>For tube otorrhea and chronic suppurative otitis media, <strong>topical</strong> antibiotics outperform oral (far higher local concentration).</li><li>If an aminoglycoside drop is unavoidable in a discharging ear: only with active infection, for no more than 2 weeks, document the rationale, and get baseline audiometry if practical.</li></ul>"
   },
   {
    "id": "issnhl",
    "title": "Sudden SNHL (ISSNHL): steroid regimens",
    "html": "<p class='sub'>An otologic emergency. Greatest benefit within the first 2 weeks; treat within 7 days when possible.</p><p><strong>Definition:</strong> at least 30 dB SNHL across 3 contiguous frequencies over 72 hours or less. Always get an <strong>audiogram</strong> to confirm and an <strong>MRI</strong> to exclude retrocochlear pathology.</p>",
    "table": {
     "head": [
      "Route",
      "Regimen",
      "Role"
     ],
     "rows": [
      [
       "<strong>Oral</strong> (first-line)",
       "Prednisone <strong>1 mg/kg/day</strong> as a single morning dose (usual max 60 mg), about 10 to 14 days including a taper",
       "Default first-line"
      ],
      [
       "<strong>Intratympanic</strong>",
       "Dexamethasone or methylprednisolone, about <strong>3 injections</strong> spaced 3 to 7 days apart",
       "Salvage after oral failure; first-line alternative when systemic steroids are risky (e.g. diabetes); combined with oral for severe/profound loss"
      ]
     ]
    }
   },
   {
    "id": "issnhl-equiv",
    "title": "Steroid dose equivalence",
    "html": "<p>Avoid underdosing when switching agents:</p><p><strong>Prednisone 60 mg &asymp; methylprednisolone 48 mg &asymp; dexamethasone 10 mg.</strong></p><p class='sub'>Counsel on hyperglycemia, insomnia, mood change, and GI upset; caution in diabetes, uncontrolled hypertension, and peptic ulcer disease. Verify doses locally before prescribing.</p>"
   },
   {
    "id": "pta-dnsi",
    "title": "Peritonsillar abscess &amp; deep neck infections",
    "html": "<p class='sub'>Airway first, then source control plus antibiotics.</p><p>These infections are <strong>polymicrobial</strong> (aerobic gram-positives plus oral anaerobes). Cover <em>Streptococcus pyogenes</em>, the <em>S. anginosus</em> group, <em>S. aureus</em>, and anaerobes (<em>Fusobacterium</em>, <em>Prevotella</em>). <strong>Drainage plus IV antibiotics</strong> is the paradigm.</p>",
    "table": {
     "head": [
      "Scenario",
      "First-line",
      "Penicillin allergy",
      "Add-on"
     ],
     "rows": [
      [
       "PTA / DNSI, standard",
       "<strong>Ampicillin-sulbactam</strong> IV",
       "Clindamycin",
       "Vancomycin if MRSA risk"
      ],
      [
       "Cephalosporin-based regimen",
       "Ceftriaxone or cefuroxime",
       "(use clindamycin)",
       "<strong>Metronidazole</strong> for anaerobes"
      ],
      [
       "Severe/toxic or MRSA risk",
       "Ampicillin-sulbactam <strong>+ vancomycin</strong>",
       "Clindamycin with or without vancomycin",
       "(covered)"
      ]
     ]
    }
   },
   {
    "id": "pta-points",
    "title": "Deep neck infections: practical points",
    "html": "<ul><li><strong>Drainage</strong> (needle aspiration or I&amp;D for PTA; surgical drainage for a DNSI abscess, typically over 2 to 2.5 cm, airway compromise, or medical failure) is essential; antibiotics alone are often not enough.</li><li>Metronidazole is <strong>not needed</strong> with ampicillin-sulbactam (already covers anaerobes); add it to a regimen that lacks anaerobic activity (e.g. a cephalosporin).</li><li>Typical course about <strong>7 to 14 days</strong>: initial IV, then oral step-down (e.g. amoxicillin-clavulanate) guided by response.</li><li>Watch for <strong>Lemierre syndrome</strong> (<em>Fusobacterium</em> septic internal jugular thrombophlebitis) and mediastinal or airway extension.</li></ul>"
   },
   {
    "id": "abx-classes",
    "title": "Antimicrobial classes: high-yield reference",
    "html": "<p class='sub'>What each class covers and where it fits in head and neck infection.</p>",
    "table": {
     "head": [
      "Class",
      "Mechanism",
      "Key coverage",
      "Notes"
     ],
     "rows": [
      [
       "Natural penicillins (Pen G/V)",
       "Cell wall (cidal)",
       "GPC, some GNC, spirochetes, actinomyces",
       "Susceptible to all beta-lactamases"
      ],
      [
       "Antistaph penicillins (oxacillin, nafcillin, dicloxacillin)",
       "Cell wall",
       "MSSA, susceptible strep",
       "No gram-negative activity; beta-lactamase resistant"
      ],
      [
       "Aminopenicillins (amoxicillin, ampicillin)",
       "Cell wall",
       "Penicillin spectrum plus <em>H. influenzae</em>",
       "Add sulbactam/clavulanate for anaerobes and beta-lactamase producers"
      ],
      [
       "Piperacillin-tazobactam",
       "Cell wall",
       "Broad GP and GN incl. <em>Pseudomonas</em>",
       "Antipseudomonal workhorse"
      ],
      [
       "Cephalosporin, 3rd gen (ceftriaxone, ceftazidime)",
       "Cell wall",
       "Broad GN; ceftriaxone covers penicillin-resistant pneumococcus; ceftazidime covers <em>Pseudomonas</em>",
       "Pair with metronidazole for anaerobes"
      ],
      [
       "Cephalosporin, 4th gen (cefepime)",
       "Cell wall",
       "Broadest GN incl. <em>Pseudomonas</em>",
       ""
      ],
      [
       "Cephalosporin, 5th gen (ceftaroline)",
       "Cell wall",
       "<strong>MRSA</strong> plus gram-positives; GN like ceftriaxone",
       "Only MRSA-active cephalosporin"
      ],
      [
       "Carbapenems (ertapenem, imipenem, meropenem, doripenem)",
       "Cell wall",
       "Very broad: GP, resistant GN, anaerobes",
       "Ertapenem lacks <em>Pseudomonas</em> and <em>Enterococcus</em>"
      ],
      [
       "Fluoroquinolones",
       "DNA gyrase",
       "GN bacilli, atypicals; respiratory FQs (levo, moxi) add strep",
       "Ciprofloxacin: best <em>Pseudomonas</em>, poor strep (not for head/neck); never MRSA monotherapy"
      ],
      [
       "Macrolides (azithromycin, clarithromycin, erythromycin)",
       "Protein synthesis (static)",
       "GP and GN, atypicals",
       "Azithro/clarithro broader and better tolerated than erythro"
      ],
      [
       "Clindamycin",
       "Protein synthesis (static)",
       "GP incl. <strong>MRSA</strong> and strep; strong anaerobes above the diaphragm",
       "Ideal for odontogenic infection; standard penicillin-allergy option"
      ],
      [
       "TMP-SMX",
       "Folate antagonist",
       "MSSA and <strong>MRSA</strong>, pneumococcus, <em>H. flu</em>, enteric GN",
       "Watch SJS/TEN and nephrotoxicity"
      ],
      [
       "Tetracyclines (doxycycline, minocycline)",
       "Protein synthesis (static)",
       "Broad GP/GN, atypicals",
       "Contraindicated in children and pregnancy"
      ],
      [
       "Anti-MRSA agents",
       "Varies",
       "MRSA",
       "IV: vancomycin, daptomycin, linezolid, ceftaroline. Oral: TMP-SMX, clindamycin, tetracyclines, linezolid"
      ]
     ]
    }
   },
   {
    "id": "antifungals",
    "title": "Antifungals for invasive head &amp; neck disease",
    "html": "",
    "table": {
     "head": [
      "Agent",
      "Use"
     ],
     "rows": [
      [
       "Fluconazole",
       "<em>Candida</em>"
      ],
      [
       "Voriconazole",
       "<strong>First-line for aspergillosis</strong>"
      ],
      [
       "Echinocandins (micafungin, caspofungin, anidulafungin)",
       "Invasive candidiasis incl. <em>C. glabrata</em> and <em>C. krusei</em>"
      ],
      [
       "Amphotericin B (liposomal preferred)",
       "Serious infection incl. <strong>invasive rhinocerebral mucormycosis</strong>"
      ]
     ]
    }
   },
   {
    "id": "cdiff",
    "title": "C. difficile: antibiotic risk stratification",
    "html": "<p class='sub'>Watery diarrhea with leukocytosis (may precede diarrhea); prior antibiotic use is the main risk factor.</p>",
    "table": {
     "head": [
      "Risk",
      "Antibiotics"
     ],
     "rows": [
      [
       "<strong>Highest risk</strong>",
       "Clindamycin, fluoroquinolones, cephalosporins, carbapenems"
      ],
      [
       "Lower risk",
       "Macrolides, penicillins, sulfonamides"
      ]
     ]
    }
   }
  ]
 },
 "cards": [
  {
   "id": "rx-open-ear",
   "tags": ["RX", "pharm"],
   "front": "TM perforation or tube present: which otic drops, and which to avoid?",
   "back": "Use a <strong>non-ototoxic fluoroquinolone</strong> (ofloxacin, or ciprofloxacin + dexamethasone). <strong>Avoid aminoglycosides</strong> and alcohol/acidifying drops (ototoxicity).",
   "source": "ENT Pharm Pocket Guide."
  },
  {
   "id": "rx-issnhl-dose",
   "tags": ["RX", "pharm"],
   "front": "Standard oral steroid regimen for idiopathic sudden SNHL?",
   "back": "<strong>Prednisone 1 mg/kg/day</strong> single morning dose (max ~60 mg), about 10 to 14 days including taper. Treat within 2 weeks of onset.",
   "source": "ENT Pharm Pocket Guide."
  },
  {
   "id": "rx-issnhl-it",
   "tags": ["RX", "pharm"],
   "front": "When is intratympanic steroid the go-to for sudden SNHL?",
   "back": "<strong>Salvage</strong> after failed oral steroids, and <strong>first-line</strong> when systemic steroids are risky (e.g. poorly controlled diabetes); combine with oral for severe loss.",
   "source": "ENT Pharm Pocket Guide."
  },
  {
   "id": "rx-pta-firstline",
   "tags": ["RX", "pharm"],
   "front": "First-line empiric antibiotic for PTA / deep neck infection?",
   "back": "<strong>Ampicillin-sulbactam</strong> IV (covers strep, S. aureus, and oral anaerobes). Add <strong>vancomycin</strong> if MRSA risk. Drainage is essential.",
   "source": "ENT Pharm Pocket Guide."
  },
  {
   "id": "rx-penallergy",
   "tags": ["RX", "pharm"],
   "front": "Penicillin-allergic patient with a deep neck infection: antibiotic?",
   "back": "<strong>Clindamycin</strong> (covers strep, S. aureus, and anaerobes).",
   "source": "ENT Pharm Pocket Guide."
  },
  {
   "id": "rx-metronidazole",
   "tags": ["RX", "pharm"],
   "front": "When do you add metronidazole to a head/neck infection regimen?",
   "back": "When the backbone <strong>lacks anaerobic coverage</strong> (e.g. a cephalosporin like ceftriaxone/cefuroxime). Not needed with ampicillin-sulbactam.",
   "source": "ENT Pharm Pocket Guide."
  },
  {
   "id": "rx-clinda-anaerobe",
   "tags": ["RX", "pharm"],
   "front": "Which antibiotic is ideal for odontogenic infection, and why?",
   "back": "<strong>Clindamycin</strong>: strong anaerobic coverage 'above the diaphragm' plus gram-positives including MRSA.",
   "source": "ENT Pharm Pocket Guide."
  },
  {
   "id": "rx-cipro-strep",
   "tags": ["RX", "pharm"],
   "front": "Why is ciprofloxacin a poor choice for head and neck infections?",
   "back": "<strong>Limited streptococcal activity.</strong> It has the best Pseudomonas coverage but should not be used for strep-driven head/neck infection, and never as MRSA monotherapy.",
   "source": "ENT Pharm Pocket Guide."
  },
  {
   "id": "rx-voriconazole",
   "tags": ["RX", "pharm"],
   "front": "First-line antifungal for invasive aspergillosis?",
   "back": "<strong>Voriconazole.</strong>",
   "source": "ENT Pharm Pocket Guide."
  },
  {
   "id": "rx-ampho-mucor",
   "tags": ["RX", "pharm"],
   "front": "Antifungal for invasive rhinocerebral mucormycosis?",
   "back": "<strong>Amphotericin B</strong> (liposomal preferred, less nephrotoxic), plus urgent surgical debridement.",
   "source": "ENT Pharm Pocket Guide."
  },
  {
   "id": "rx-cdiff",
   "tags": ["RX", "pharm"],
   "front": "Which antibiotic classes carry the highest C. difficile risk?",
   "back": "<strong>Clindamycin, fluoroquinolones, cephalosporins, and carbapenems.</strong> Lower risk: macrolides, penicillins, sulfonamides.",
   "source": "ENT Pharm Pocket Guide."
  }
 ]
}
);

/* abbreviations.js, "Key Abbreviations" reference track. A short, cross-cutting
 * glossary of the high-yield abbreviations already used throughout this
 * platform's content (otology, rhinology, laryngology, head & neck, pediatric,
 * sleep, facial plastics, and emergencies), gathered into one lookup page
 * instead of leaving a student to piece them together module by module.
 * Reference only, no clinical guidance of its own -- each row's expansion
 * matches how the term is actually used elsewhere in this app.
 *
 * STATUS: DRAFT. No clinical content lives in this track, reference only.
 */
window.JEFFENT.register({
  id: "abbreviations",
  track: "abbreviations",
  trackName: "Key Abbreviations",
  trackAbbr: "AB",
  order: 1,
  title: "Key Abbreviations",
  subtitle: "The high-yield abbreviations used across every track on this platform, gathered into one lookup page.",
  version: "0.1.0-draft",
  level: ["core", "sub-I"],
  status: "DRAFT, pending faculty review. v0.1.0: compiled from the abbreviations already introduced across every track's content (otology, rhinology, laryngology, head & neck, pediatric, sleep, facial plastics, and emergencies), grounded in standard otolaryngology teaching; not derived from any single textbook.",
  facultyReviewer: "",
  curriculumAnchors: [
    "AAO-HNS Otolaryngology Core Curriculum, terminology and abbreviations used throughout the core curriculum",
    "UKMLA Content Map (GMC), abbreviations cross-cut every presentation/condition this platform covers"
  ],

  clinical: {
    blocks: [
      {
        id: "abbrev-exam-general",
        title: "General & exam",
        table: {
          head: ["Abbreviation", "Stands for"],
          rows: [
            ["CN", "Cranial nerve (I-XII)"],
            ["TM", "Tympanic membrane"],
            ["EAC", "External auditory canal"],
            ["SNHL", "Sensorineural hearing loss"],
            ["CHL", "Conductive hearing loss"],
            ["HINTS", "Head Impulse, Nystagmus, Test of Skew (bedside vertigo exam)"],
            ["SBAR", "Situation, Background, Assessment, Recommendation (handoff framework)"],
            ["ATLS", "Advanced Trauma Life Support"],
            ["CT", "Computed tomography"],
            ["MRI", "Magnetic resonance imaging"],
            ["PET", "Positron emission tomography"],
            ["FNA", "Fine-needle aspiration"],
            ["CSF", "Cerebrospinal fluid"],
            ["UMN / LMN", "Upper motor neuron / lower motor neuron"]
          ]
        }
      },
      {
        id: "abbrev-otology",
        title: "Otology & neurotology",
        table: {
          head: ["Abbreviation", "Stands for"],
          rows: [
            ["AOM", "Acute otitis media"],
            ["OME", "Otitis media with effusion"],
            ["BPPV", "Benign paroxysmal positional vertigo"],
            ["IAC", "Internal auditory canal"],
            ["ISSNHL", "Idiopathic sudden sensorineural hearing loss"]
          ]
        }
      },
      {
        id: "abbrev-rhinology",
        title: "Rhinology & skull base",
        table: {
          head: ["Abbreviation", "Stands for"],
          rows: [
            ["OMC", "Ostiomeatal complex"],
            ["FESS / ESS", "(Functional) endoscopic sinus surgery"],
            ["CRS", "Chronic rhinosinusitis"],
            ["CRSsNP / CRSwNP", "CRS without / with nasal polyps"],
            ["AERD", "Aspirin-exacerbated respiratory disease (Samter's triad)"],
            ["ARIA", "Allergic Rhinitis and its Impact on Asthma (classification)"],
            ["NARES", "Non-allergic rhinitis with eosinophilia syndrome"],
            ["SCIT / SLIT", "Subcutaneous / sublingual immunotherapy"],
            ["JNA", "Juvenile nasopharyngeal angiofibroma"],
            ["HHT", "Hereditary hemorrhagic telangiectasia (Osler-Weber-Rendu)"],
            ["ICA", "Internal carotid artery"]
          ]
        }
      },
      {
        id: "abbrev-laryngology",
        title: "Laryngology, voice & airway",
        table: {
          head: ["Abbreviation", "Stands for"],
          rows: [
            ["RLN", "Recurrent laryngeal nerve"],
            ["SLN", "Superior laryngeal nerve"],
            ["EBSLN", "External branch of the superior laryngeal nerve"],
            ["LPR", "Laryngopharyngeal reflux"],
            ["FEES", "Fiberoptic endoscopic evaluation of swallowing"],
            ["RRP", "Recurrent respiratory papillomatosis"],
            ["VCD", "Vocal cord dysfunction"]
          ]
        }
      },
      {
        id: "abbrev-head-neck",
        title: "Head & neck oncology",
        table: {
          head: ["Abbreviation", "Stands for"],
          rows: [
            ["EBV", "Epstein-Barr virus"],
            ["NPC", "Nasopharyngeal carcinoma"],
            ["TI-RADS", "Thyroid Imaging Reporting and Data System"],
            ["TNM", "Tumor, Node, Metastasis (staging)"],
            ["IJV", "Internal jugular vein"]
          ]
        }
      },
      {
        id: "abbrev-pediatric-sleep",
        title: "Pediatric ENT & sleep/airway",
        table: {
          head: ["Abbreviation", "Stands for"],
          rows: [
            ["OSA", "Obstructive sleep apnea"],
            ["AHI", "Apnea-hypopnea index"],
            ["STOP-BANG", "OSA screening questionnaire (Snoring, Tiredness, Observed apnea, Pressure, BMI, Age, Neck, Gender)"],
            ["CPAP", "Continuous positive airway pressure"],
            ["UPPP", "Uvulopalatopharyngoplasty"],
            ["MMA", "Maxillomandibular advancement"],
            ["DISE", "Drug-induced sleep endoscopy"],
            ["VOTE", "Velum, Oropharynx, Tongue base, Epiglottis (DISE grading)"],
            ["HGNS", "Hypoglossal nerve stimulation"],
            ["CMV", "Cytomegalovirus"],
            ["GJB2", "Gap junction beta-2 gene (connexin 26)"]
          ]
        }
      },
      {
        id: "abbrev-facial-plastics",
        title: "Facial plastics & trauma",
        table: {
          head: ["Abbreviation", "Stands for"],
          rows: [
            ["SMAS", "Superficial musculoaponeurotic system"],
            ["ZMC", "Zygomaticomaxillary complex"],
            ["NOE", "Naso-orbito-ethmoid (fracture)"],
            ["RAPD", "Relative afferent pupillary defect"]
          ]
        }
      },
      {
        id: "abbrev-emergencies",
        title: "Emergencies & red flags",
        table: {
          head: ["Abbreviation", "Stands for"],
          rows: [
            ["PTA", "Peritonsillar abscess"],
            ["RPA", "Retropharyngeal abscess"],
            ["DNSI", "Deep neck space infection"],
            ["HAE", "Hereditary angioedema"],
            ["C1-INH", "C1-esterase inhibitor"],
            ["CICO", "Can't intubate, can't oxygenate"],
            ["CDI", "Clostridioides difficile infection"],
            ["GPA", "Granulomatosis with polyangiitis"]
          ]
        }
      }
    ]
  }
});

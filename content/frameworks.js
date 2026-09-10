/* frameworks.js, curriculum framework registry.
 * Load BEFORE the content modules (after registry.js) so every card can declare
 * which established-curriculum item it serves, and the UI can show a Milestone tag.
 *
 * Primary framework: ACGME Otolaryngology-Head and Neck Surgery Milestones 2.0 (2021).
 * Each subcompetency code maps to its official title. The two-letter prefix gives the
 * ACGME core competency. Student-level SCOPE (core vs sub-I) comes from the UK
 * undergraduate Delphi curricula (Lloyd/Constable); topic sequencing follows the
 * AAO-HNS Otolaryngology Core Curriculum (OCC).
 */
window.JEFFENT = window.JEFFENT || { modules: [], register: function (m) { this.modules.push(m); }, get: function (id) { return this.modules.find(function (x) { return x.id === id; }); } };

window.JEFFENT.frameworks = {
  competencies: {
    PC: "Patient Care",
    MK: "Medical Knowledge",
    ICS: "Interpersonal & Communication Skills",
    Prof: "Professionalism",
    PBLI: "Practice-Based Learning & Improvement",
    SBP: "Systems-Based Practice"
  },
  // ACGME Otolaryngology-HNS Milestones 2.0 subcompetencies
  milestones: {
    PC1: "Airway Emergency & Management",
    PC2: "Facial Trauma",
    PC3: "Head & Neck Neoplasm",
    PC4: "Otologic Disease",
    PC5: "Rhinologic Disease",
    PC6: "Laryngologic Disease",
    PC7: "Pediatric Otolaryngology",
    PC8: "Facial Plastic & Reconstructive Surgery",
    PC9: "Sleep",
    MK1: "Anatomy",
    MK2: "Allergy",
    MK3: "Pathophysiology",
    SBP1: "Patient Safety & Quality Improvement",
    SBP2: "System Navigation for Patient-Centered Care",
    SBP3: "Physician Role in Health Care Systems",
    PBLI1: "Evidence-Based & Informed Practice",
    PBLI2: "Reflective Practice & Personal Growth",
    Prof1: "Professional Behavior & Ethical Principles",
    Prof2: "Accountability / Conscientiousness",
    Prof3: "Well-Being (Systemic & Individual Factors)",
    ICS1: "Patient- & Family-Centered Communication",
    ICS2: "Interprofessional & Team Communication",
    ICS3: "Communication within Health Care Systems"
  },
  // map a subcompetency code (e.g. "PC4") to its competency label
  competencyOf: function (code) {
    var pfx = String(code).replace(/[0-9].*$/, "");
    return this.competencies[pfx] || pfx;
  },
  titleOf: function (code) { return this.milestones[code] || code; },
  source: "ACGME Otolaryngology-Head and Neck Surgery Milestones 2.0 (2021). Scope per UK undergraduate Delphi (Lloyd/Constable); sequencing per AAO-HNS Otolaryngology Core Curriculum."
};

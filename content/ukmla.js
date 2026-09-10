/* ukmla.js, UK curriculum registry (SCOPE anchor).
 * Load after registry.js. Cards declare which UKMLA item(s) they serve via a
 * `ukmla` field (string or array). The UKMLA Content Map (GMC) is the student/
 * sub-I blueprint every UK medical student is examined against, it fixes WHAT
 * and HOW MUCH belongs in the tool. Depth comes from ENT UK / Delphi; US-
 * appropriate management is written into each card (UK/US differences flagged).
 *
 * "Facial weakness" and "Bell's palsy" added, genuine UKMLA content-map items
 * (neurology/ENT overlap) with direct ENT relevance (Bell's palsy vs stroke,
 * facial nerve involvement in otologic and parotid disease).
 */
window.JEFFENT = window.JEFFENT || { modules: [], register: function (m) { this.modules.push(m); }, get: function (id) { return this.modules.find(function (x) { return x.id === id; }); } };

window.JEFFENT.ukmla = {
  // ENT-relevant PRESENTATIONS from the UKMLA content map
  presentations: [
    "Allergies", "Anosmia", "Cough", "Dizziness", "Ear and nasal discharge",
    "Epistaxis", "Facial pain", "Facial weakness", "Facial/periorbital swelling",
    "Hearing loss", "Hoarseness and voice change", "Nasal obstruction", "Neck lump",
    "Painful ear", "Snoring", "Sore throat", "Stridor", "Swallowing problems",
    "Tinnitus", "Vertigo"
  ],
  // ENT-relevant CONDITIONS from the UKMLA content map
  conditions: [
    "Acoustic neuroma", "Bell's palsy", "Benign paroxysmal positional vertigo",
    "Epiglottitis", "Epistaxis", "Infectious mononucleosis", "Ménière's disease",
    "Obstructive sleep apnoea", "Otitis externa", "Otitis media",
    "Rhinosinusitis", "Tonsillitis"
  ],
  source: "UKMLA Content Map (GMC): ENT-relevant presentations & conditions. Scope anchor; content written to US standards (AAO-HNS), UK/US differences flagged.",
  kindOf: function (x) {
    if (this.presentations.indexOf(x) >= 0) return "presentation";
    if (this.conditions.indexOf(x) >= 0) return "condition";
    return null;
  }
};

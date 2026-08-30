/* tracks.js — subspecialty track registry. Load this BEFORE any content/*.js
 * module file (but after registry.js), so the Home screen can render a tile
 * for every track in the curriculum map — including ones with no module yet
 * ("coming soon") — from day one. See ROADMAP.md §4 for the full curriculum.
 *
 * A module attaches to a track via its own `track` field (must match an id here).
 * To add a subspecialty tile before any content exists for it, just add an
 * entry here — no other file needs to change.
 */
window.JEFFENT = window.JEFFENT || {
  modules: [],
  register: function (mod) { this.modules.push(mod); },
  get: function (id) { return this.modules.find(function (m) { return m.id === id; }); }
};

window.JEFFENT.tracks = [
  { id: "foundations",     name: "Foundations",                    abbr: "FN" },
  { id: "otology",         name: "Otology & Neurotology",          abbr: "OT" },
  { id: "rhinology",       name: "Rhinology & Sinus",               abbr: "RH" },
  { id: "laryngology",     name: "Laryngology, Voice & Airway",    abbr: "LA" },
  { id: "head-neck",       name: "Head & Neck Oncology",           abbr: "HN" },
  { id: "pediatric",       name: "Pediatric ENT",                   abbr: "PE" },
  { id: "sleep",           name: "Sleep Surgery & OSA",             abbr: "SL" },
  { id: "facial-plastics", name: "Facial Plastics & Trauma",       abbr: "FP" },
  { id: "emergencies",     name: "Emergencies & Red Flags",        abbr: "EM" },
  { id: "anatomy-atlas",   name: "Anatomy Atlas",                   abbr: "AN" }
];

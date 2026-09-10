/* tracks.js, subspecialty track registry. Load this BEFORE any content/*.js
 * module file (but after registry.js), so the Home screen can render a tile
 * for every track in the curriculum map, including ones with no module yet
 * ("coming soon"), from day one. See ROADMAP.md §4 for the full curriculum.
 *
 * A module attaches to a track via its own `track` field (must match an id here).
 * To add a subspecialty tile before any content exists for it, just add an
 * entry here, no other file needs to change.
 *
 * `color` and `icon` (v0.2, added for the visual identity pass): a per-track
 * accent hex and a small hand-drawn line-icon (inner SVG markup only, no
 * wrapping <svg> tag, app.js wraps it in the same stroke/viewBox convention
 * as the header brand mark). Both are optional visual sugar, a track with
 * neither still renders fine (app.js falls back to var(--primary) and no
 * icon). `category` (v0.3, redesign pass) groups tracks for the Home filter
 * bar: "core" (cross-cutting breadth every rotation touches), "subspecialty"
 * (the deeper tracks), or "atlas" (reference/lookup tools, not a clinical
 * domain of its own). Colors are cool-toned only (blue/teal/violet/rose/
 * slate family, no orange/amber/yellow/brown) so the palette reads as one
 * family; "emergencies" deliberately stays in the ruby-red family shared
 * with the app's semantic --flag color.
 */
window.JEFFENT = window.JEFFENT || {
  modules: [],
  register: function (mod) { this.modules.push(mod); },
  get: function (id) { return this.modules.find(function (m) { return m.id === id; }); }
};

window.JEFFENT.tracks = [
  { id: "foundations", symbol: "📋",     name: "Foundations",                    abbr: "FN",
    category: "core", color: "#2563eb",
    icon: '<rect x="5" y="4" width="14" height="17" rx="2"></rect><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"></path><path d="m9 13 2 2 4-4"></path>' },
  { id: "otology", symbol: "👂",         name: "Otology & Neurotology",          abbr: "OT",
    category: "subspecialty", color: "#0ea5e9",
    icon: '<path d="M12 3a6 6 0 0 0-6 6c0 2 1 3 1 5a3 3 0 0 0 3 3"></path><path d="M12 3a6 6 0 0 1 6 6c0 3-2 4-2 7a3 3 0 0 1-3 3 3 3 0 0 1-3-3v-1"></path>' },
  { id: "rhinology", symbol: "👃",       name: "Rhinology & Sinus",               abbr: "RH",
    category: "subspecialty", color: "#10b981",
    icon: '<path d="M9 3c-1 4-3 6-3 10a6 6 0 0 0 12 0c0-1-.5-2-1-3"></path><path d="M9 13c0 2 1.5 3 3 3s3-1 3-3"></path>' },
  { id: "laryngology", symbol: "🎤",     name: "Laryngology, Voice & Airway",    abbr: "LA",
    category: "subspecialty", color: "#e11d48",
    icon: '<path d="M4 12v.5"></path><path d="M8 8v8"></path><path d="M12 5v14"></path><path d="M16 8v8"></path><path d="M20 12v.5"></path>' },
  { id: "head-neck", symbol: "👤",       name: "Head & Neck Oncology",           abbr: "HN",
    category: "subspecialty", color: "#7c3aed",
    icon: '<circle cx="12" cy="8.5" r="4"></circle><path d="M6 21c0-3.5 2.7-6 6-6s6 2.5 6 6"></path>' },
  { id: "pediatric", symbol: "🧒",       name: "Pediatric ENT",                   abbr: "PE",
    category: "subspecialty", color: "#14b8a6",
    icon: '<rect x="9" y="9" width="6" height="11" rx="2"></rect><path d="M10 9V6a2 2 0 0 1 4 0v3"></path><path d="M9 13h6"></path>' },
  { id: "sleep", symbol: "🌙",           name: "Sleep Surgery & OSA",             abbr: "SL",
    category: "subspecialty", color: "#4f46e5",
    icon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"></path>' },
  { id: "facial-plastics", symbol: "🔪", name: "Facial Plastics & Trauma",       abbr: "FP",
    category: "subspecialty", color: "#64748b",
    icon: '<path d="M12 3a7 7 0 0 0-7 7c0 2.5 1.2 4.1 2 5.1V18a1 1 0 0 0 1 1h1v-1.5h1V19h4v-1.5h1V19h1a1 1 0 0 0 1-1v-2.9c.8-1 2-2.6 2-5.1a7 7 0 0 0-7-7Z"></path><circle cx="9.5" cy="10.3" r="1.1" fill="currentColor" stroke="none"></circle><circle cx="14.5" cy="10.3" r="1.1" fill="currentColor" stroke="none"></circle><path d="M12 11.8v2"></path>' },
  { id: "emergencies", symbol: "🚨",     name: "Emergencies & Red Flags",        abbr: "EM",
    category: "core", color: "#dc2626",
    icon: '<path d="M12 4 2 20h20L12 4z"></path><path d="M12 10v5"></path><circle cx="12" cy="18" r=".9" fill="currentColor" stroke="none"></circle>' },
  { id: "anatomy-atlas", symbol: "🗺️",   name: "Anatomy Atlas",                   abbr: "AN",
    category: "atlas", color: "#6b7280",
    icon: '<path d="m12 3 8 4.5-8 4.5-8-4.5L12 3z"></path><path d="m4 12 8 4.5 8-4.5"></path><path d="m4 16.5 8 4.5 8-4.5"></path>' },
  { id: "procedures", symbol: "🔧",     name: "2-Minute Procedure Prep",         abbr: "PR",
    category: "atlas", color: "#0284c7",
    icon: '<path d="M5 19l9-9"></path><path d="M14 10l2-6 4 4-6 2z"></path>' },
  { id: "pharmacology", symbol: "💊",    name: "Pharmacology Pocket Guide",       abbr: "RX",
    category: "atlas", color: "#9333ea",
    icon: '<rect x="4" y="9" width="16" height="6" rx="3"></rect><path d="M12 9v6"></path>' }
];

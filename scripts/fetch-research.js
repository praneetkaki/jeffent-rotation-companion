/* Builds data/research.json: recent reviews, trials, guidelines, and meta-analyses
 * from the main ENT journals, via PubMed E-utilities (free, no key).
 * Run: node scripts/fetch-research.js   (a weekly GitHub Action does this)
 * Manual control: data/research-overrides.json  { "pin": [PMID], "hide": [PMID] } */
var fs = require("fs");
var path = require("path");

var JOURNALS = [
  "Otolaryngol Head Neck Surg", "JAMA Otolaryngol Head Neck Surg", "Laryngoscope", "Otol Neurotol",
  "Head Neck", "Int Forum Allergy Rhinol", "Int J Pediatr Otorhinolaryngol"
];
var TYPES = ["Practice Guideline", "Meta-Analysis", "Systematic Review", "Randomized Controlled Trial"];
/* These two journals are listed first; within each tier, newest first. */
var TOP = ["JAMA Otolaryngol Head Neck Surg", "Otolaryngol Head Neck Surg"];
var LABEL = { "Practice Guideline": "Guideline", "Meta-Analysis": "Meta-analysis", "Systematic Review": "Systematic review", "Randomized Controlled Trial": "Randomized trial" };
var MAX = 12, MIN = 6;
var BASE = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/";
var ID = "tool=ent-companion&email=" + encodeURIComponent(process.env.NCBI_EMAIL || "praneetk07@gmail.com");

function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
function get(url) {
  return fetch(url).then(function (r) { if (!r.ok) throw new Error(r.status + " " + url); return r.json(); });
}
function search(days) {
  var j = JOURNALS.map(function (x) { return '"' + x + '"[Journal]'; }).join(" OR ");
  var t = TYPES.map(function (x) { return '"' + x + '"[Publication Type]'; }).join(" OR ");
  var term = "(" + j + ") AND (" + t + ") AND hasabstract AND (\"last " + days + " days\"[EDat])";
  return get(BASE + "esearch.fcgi?db=pubmed&retmode=json&sort=date&retmax=60&" + ID + "&term=" + encodeURIComponent(term))
    .then(function (d) { return d.esearchresult.idlist || []; });
}
/* Date PubMed first received the record (never a future issue date). */
function entrez(r) {
  var d = ""; (r.history || []).forEach(function (h) { if (h.pubstatus === "entrez") d = h.date; });
  d = d || r.epubdate || r.sortpubdate || "";
  var m = /(\d{4})[\/-](\d{2})[\/-](\d{2})/.exec(d);
  return m ? m[1] + "-" + m[2] + "-" + m[3] : "";
}
function summaries(ids) {
  if (!ids.length) return Promise.resolve([]);
  return get(BASE + "esummary.fcgi?db=pubmed&retmode=json&" + ID + "&id=" + ids.join(","))
    .then(function (d) {
      return ids.map(function (id) {
        var r = d.result[id]; if (!r) return null;
        var doi = ""; (r.articleids || []).forEach(function (a) { if (a.idtype === "doi") doi = a.value; });
        var type = ""; TYPES.forEach(function (t) { if (!type && (r.pubtype || []).indexOf(t) !== -1) type = t; });
        var au = (r.authors || []).map(function (a) { return a.name; });
        return {
          pmid: id,
          title: String(r.title || "").replace(/\.$/, "").replace(/<[^>]+>/g, ""),
          authors: au.length > 3 ? au.slice(0, 3).join(", ") + " et al." : au.join(", "),
          journal: r.source || "",
          date: entrez(r),
          type: /meta-analysis/i.test(r.title) ? "Meta-analysis" : /systematic review/i.test(r.title) ? "Systematic review" : /scoping review/i.test(r.title) ? "Scoping review" : (LABEL[type] || "Article"),
          doi: doi,
          url: "https://pubmed.ncbi.nlm.nih.gov/" + id + "/"
        };
      }).filter(Boolean);
    });
}

(async function () {
  var ovPath = path.join(__dirname, "..", "data", "research-overrides.json");
  var ov = { pin: [], hide: [] };
  try { ov = Object.assign(ov, JSON.parse(fs.readFileSync(ovPath, "utf8"))); } catch (e) {}
  var ids = [];
  for (var days of [14, 30, 60]) {
    ids = await search(days); await sleep(400);
    ids = ids.filter(function (x) { return ov.hide.indexOf(x) === -1; });
    if (ids.length >= MIN) break;
  }
  var found = await summaries(ids.filter(function (x) { return ov.pin.indexOf(x) === -1; }));
  function tier(it) { return TOP.indexOf(it.journal.replace(/\.$/, "")) === -1 ? 1 : 0; }
  found = found.filter(function (it) { return !/^executive summary/i.test(it.title); })
    .sort(function (a, b) { return tier(a) - tier(b) || (a.date < b.date ? 1 : a.date > b.date ? -1 : 0); });
  var pinned = await summaries(ov.pin);
  var items = pinned.concat(found).slice(0, MAX);
  var out = { updated: new Date().toISOString().slice(0, 10), items: items };
  fs.writeFileSync(path.join(__dirname, "..", "data", "research.json"), JSON.stringify(out, null, 1) + "\n");
  console.log("Wrote " + items.length + " items");
})().catch(function (e) { console.error(e); process.exit(1); });

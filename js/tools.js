/* tools.js: interactive teaching tools (audiogram simulator, scores, staging).
 *
 * Logic only, no clinical prose beyond each tool's own labels and cutoffs.
 * Tools register on window.JEFFENT_TOOLS and are embedded by app.js, either
 * inside a clinical block / anatomy note (the `tool` field in content) or on
 * the Tools screen. Everything is client-side; nothing is stored or sent.
 * Teaching aids only, not for clinical decisions. Verify against the source
 * guideline or staging manual. */
(function () {
  "use strict";
  var NS = "http://www.w3.org/2000/svg";
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function svg(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) if (attrs.hasOwnProperty(k)) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  var TOOLS = { defs: [], byId: {} };
  function register(def) { TOOLS.defs.push(def); TOOLS.byId[def.id] = def; }
  TOOLS.get = function (id) { return TOOLS.byId[id] || null; };
  window.JEFFENT_TOOLS = TOOLS;
  /* Swap each native <select> for the site's themed dropdown (app.js supplies makeSelect).
     The native select stays in the DOM, hidden, so values and change events work as before. */
  function enhanceSelects(scope) {
    if (!TOOLS.makeSelect) return;
    [].forEach.call(scope.querySelectorAll("select[data-f]:not(.tk-native)"), function (sel) {
      var opts = [].map.call(sel.options, function (o) { return { value: o.value, label: o.textContent }; });
      var lab = sel.parentNode.querySelector(".tk-lab");
      var cs = TOOLS.makeSelect({
        value: sel.value, options: opts, ariaLabel: lab ? lab.textContent : "",
        onChange: function (v) { sel.value = v; sel.dispatchEvent(new Event("change", { bubbles: true })); }
      });
      sel.className = "tk-native"; sel.tabIndex = -1; sel.setAttribute("aria-hidden", "true");
      sel.parentNode.appendChild(cs);
    });
  }

  /* ---------- generic form: fields in, result html out ---------- */
  function buildForm(root, fields, compute, intro) {
    var html = (intro ? '<p class="tk-intro">' + intro + '</p>' : "") + '<div class="tk-form">';
    fields.forEach(function (f) {
      if (f.type === "check") {
        html += '<label class="tk-check"><input type="checkbox" data-f="' + f.id + '"><span>' + f.label + '</span></label>';
      } else if (f.type === "radio") {
        html += '<fieldset class="tk-field"><legend>' + f.label + '</legend><div class="tk-opts">';
        f.options.forEach(function (o, i) {
          html += '<label class="tk-opt"><input type="radio" name="' + f.id + '-' + TOOLS._n + '" data-f="' + f.id + '" value="' + esc(o[0]) + '"' + (i === (f.def || 0) ? " checked" : "") + '><span>' + o[1] + '</span></label>';
        });
        html += '</div></fieldset>';
      } else if (f.type === "number") {
        html += '<label class="tk-field"><span class="tk-lab">' + f.label + '</span><input class="tk-num" type="number" inputmode="decimal" min="0" step="0.1" data-f="' + f.id + '" placeholder="' + (f.ph || "") + '"></label>';
      } else {
        html += '<label class="tk-field"><span class="tk-lab">' + f.label + '</span><select data-f="' + f.id + '">';
        f.options.forEach(function (o, i) { html += '<option value="' + esc(o[0]) + '"' + (i === (f.def || 0) ? " selected" : "") + '>' + o[1] + '</option>'; });
        html += '</select></label>';
      }
    });
    html += '</div><div class="tk-result" aria-live="polite"></div>';
    root.innerHTML = html;
    enhanceSelects(root);
    TOOLS._n++;
    var out = root.querySelector(".tk-result");
    function values() {
      var v = {};
      fields.forEach(function (f) {
        if (f.type === "check") v[f.id] = root.querySelector('[data-f="' + f.id + '"]').checked;
        else if (f.type === "radio") { var r = root.querySelector('[data-f="' + f.id + '"]:checked'); v[f.id] = r ? r.value : ""; }
        else if (f.type === "number") { var n = parseFloat(root.querySelector('[data-f="' + f.id + '"]').value); v[f.id] = isNaN(n) ? null : n; }
        else v[f.id] = root.querySelector('[data-f="' + f.id + '"]').value;
      });
      return v;
    }
    function update() { out.innerHTML = compute(values()); }
    root.addEventListener("change", update);
    root.addEventListener("input", update);
    update();
  }
  TOOLS._n = 0;
  function result(big, small, rows) {
    var h = '<div class="tk-big">' + big + '</div>';
    if (small) h += '<div class="tk-small">' + small + '</div>';
    if (rows && rows.length) h += '<dl class="tk-rows">' + rows.map(function (r) { return '<div><dt>' + r[0] + '</dt><dd>' + r[1] + '</dd></div>'; }).join("") + '</dl>';
    return h;
  }
  var DISCLAIMER = '<p class="tk-foot">Teaching aid, not for clinical decisions.</p>';

  /* ---------- STOP-BANG ---------- */
  register({
    id: "stop-bang", title: "STOP-BANG calculator", group: "Sleep", blurb: "Obstructive sleep apnea screening score.",
    render: function (root) {
      var items = [
        ["s", "Snoring: loud enough to be heard through a closed door"], ["t", "Tired: daytime fatigue or sleepiness"],
        ["o", "Observed: stops breathing during sleep"], ["p", "Pressure: treated for high blood pressure"],
        ["b", "BMI over 35 kg/m²"], ["a", "Age over 50 years"], ["n", "Neck circumference over 40 cm"], ["g", "Gender: male"]
      ];
      buildForm(root, items.map(function (i) { return { id: i[0], type: "check", label: i[1] }; }), function (v) {
        var score = 0; items.forEach(function (i) { if (v[i[0]]) score++; });
        var stop = (v.s ? 1 : 0) + (v.t ? 1 : 0) + (v.o ? 1 : 0) + (v.p ? 1 : 0);
        var risk = score <= 2 ? "Low risk" : score >= 5 ? "High risk" : "Intermediate risk";
        var note = "0 to 2 is low risk, 3 to 4 is intermediate, and 5 to 8 is high.";
        if (score >= 3 && score <= 4 && stop >= 2 && (v.g || v.b || v.n)) { risk = "High risk"; note = "Scores of 3 to 4 are reclassified as high risk when at least 2 STOP items are positive together with male gender, BMI over 35, or a large neck."; }
        return result(score + ' of 8 <span class="tk-tag">' + risk + '</span>', note, [["Next step", score <= 2 ? "OSA is unlikely. Reassess if symptoms change." : "Consider a sleep study (home test or in-lab polysomnography)."]]) + DISCLAIMER;
      });
    }
  });

  /* ---------- Epworth ---------- */
  register({
    id: "epworth", title: "Epworth Sleepiness Scale", group: "Sleep", blurb: "Chance of dozing in eight everyday situations.",
    render: function (root) {
      var q = ["Sitting and reading", "Watching TV", "Sitting inactive in a public place (a theater or a meeting)", "As a passenger in a car for an hour without a break",
        "Lying down to rest in the afternoon when circumstances permit", "Sitting and talking to someone", "Sitting quietly after a lunch without alcohol", "In a car, while stopped for a few minutes in traffic"];
      var opts = [["0", "0, would never doze"], ["1", "1, slight chance"], ["2", "2, moderate chance"], ["3", "3, high chance"]];
      buildForm(root, q.map(function (t, i) { return { id: "q" + i, type: "select", label: t, options: opts }; }), function (v) {
        var s = 0; q.forEach(function (t, i) { s += parseInt(v["q" + i], 10) || 0; });
        var lab = s <= 10 ? "Normal range" : s <= 12 ? "Mild excessive sleepiness" : s <= 15 ? "Moderate excessive sleepiness" : "Severe excessive sleepiness";
        return result(s + ' of 24 <span class="tk-tag">' + lab + '</span>', "0 to 10 normal, 11 to 12 mild, 13 to 15 moderate, 16 to 24 severe. It measures sleepiness, not the severity of sleep apnea.") + DISCLAIMER;
      }, "How likely are you to doze off or fall asleep in each situation, in contrast to just feeling tired?");
    }
  });

  /* ---------- House-Brackmann ---------- */
  register({
    id: "house-brackmann", title: "House-Brackmann grading", group: "Facial nerve", blurb: "Grade facial nerve function I to VI from the exam.",
    render: function (root) {
      var rank = { 0: "I", 2: "II", 3: "III", 4: "IV" };
      var table = [
        ["I", "Normal", "Normal facial function."],
        ["II", "Mild dysfunction", "Slight weakness on close inspection, slight synkinesis. Symmetric at rest. Moderate to good forehead movement, eye closes with minimal effort, slight mouth asymmetry."],
        ["III", "Moderate dysfunction", "Obvious but not disfiguring difference. Noticeable synkinesis, contracture, or spasm. Symmetric at rest. Slight to moderate forehead movement, eye closes with effort, mouth slightly weak with maximum effort."],
        ["IV", "Moderately severe", "Obvious weakness or disfiguring asymmetry. Symmetric at rest. No forehead movement, incomplete eye closure, mouth asymmetric with maximum effort."],
        ["V", "Severe", "Barely perceptible motion. Asymmetric at rest. No forehead movement, incomplete eye closure, slight mouth movement."],
        ["VI", "Total paralysis", "No movement."]
      ];
      buildForm(root, [
        { id: "mov", type: "radio", label: "Any voluntary facial movement?", options: [["yes", "Yes"], ["no", "No"]] },
        { id: "rest", type: "radio", label: "Face symmetric at rest?", options: [["yes", "Yes"], ["no", "No"]] },
        { id: "fh", type: "select", label: "Forehead movement", options: [["0", "Normal"], ["2", "Moderate to good"], ["3", "Slight to moderate"], ["4", "None"]] },
        { id: "eye", type: "select", label: "Eye closure", options: [["0", "Normal"], ["2", "Complete with minimal effort"], ["3", "Complete with effort"], ["4", "Incomplete"]] },
        { id: "mo", type: "select", label: "Mouth with maximum effort", options: [["0", "Normal"], ["2", "Slight asymmetry"], ["3", "Slightly weak"], ["4", "Asymmetric"]] },
        { id: "sy", type: "select", label: "Synkinesis, contracture, or spasm", options: [["0", "None"], ["2", "Slight"], ["3", "Obvious, not disfiguring"], ["4", "Disfiguring"]] }
      ], function (v) {
        var g;
        if (v.mov === "no") g = "VI";
        else if (v.rest === "no") g = "V";
        else g = rank[Math.max(+v.fh, +v.eye, +v.mo, +v.sy)];
        var row = table.filter(function (r) { return r[0] === g; })[0];
        var t = '<table class="tk-table"><thead><tr><th>Grade</th><th>Description</th></tr></thead><tbody>' + table.map(function (r) {
          return '<tr' + (r[0] === g ? ' class="on"' : "") + '><td><strong>' + r[0] + '</strong></td><td><strong>' + r[1] + '.</strong> ' + r[2] + '</td></tr>'; }).join("") + '</tbody></table>';
        return result("Grade " + g + ' <span class="tk-tag">' + row[1] + '</span>', "The worst finding sets the grade. Asymmetry at rest or no movement overrides the rest.") + t + DISCLAIMER;
      });
    }
  });

  /* ---------- Friedman staging ---------- */
  register({
    id: "friedman", title: "Friedman staging", group: "Sleep", blurb: "Tongue position, tonsil size, and BMI to predict palate surgery success.",
    render: function (root) {
      buildForm(root, [
        { id: "ftp", type: "select", label: "Friedman tongue position", options: [["1", "I, whole uvula and tonsils visible"], ["2", "II, uvula visible, tonsils partly hidden"], ["3", "III, soft palate visible, uvula hidden"], ["4", "IV, hard palate only"]] },
        { id: "ton", type: "select", label: "Tonsil size", options: [["0", "0, absent"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"]], def: 3 },
        { id: "bmi", type: "select", label: "BMI", options: [["lt", "Under 40 kg/m²"], ["ge", "40 kg/m² or more"]] }
      ], function (v) {
        var ftp = +v.ftp, ton = +v.ton, st, succ, tx;
        if (v.bmi === "ge") { st = "IV"; succ = "Not a good surgical candidate for palate surgery alone"; tx = "Weight loss and non-surgical therapy come first."; }
        else if (ton >= 3 && ftp <= 2) { st = "I"; succ = "About 80%"; tx = "Favorable anatomy for palate surgery such as UPPP."; }
        else if (ton <= 2 && ftp >= 3) { st = "III"; succ = "Under 10%"; tx = "Tongue-base obstruction. Palate surgery alone rarely works. Consider multilevel or tongue-directed treatment."; }
        else { st = "II"; succ = "About 40%"; tx = "Mixed anatomy with intermediate results."; }
        return result("Stage " + st, tx, [["UPPP success", succ]]) + '<p class="tk-small">Stage I: large tonsils (3 to 4) with tongue position I or II. Stage II: large tonsils with position III or IV, or small tonsils (0 to 2) with position I or II. Stage III: small tonsils with position III or IV. Stage IV: BMI 40 or more.</p>' + DISCLAIMER;
      });
    }
  });

  /* ---------- Centor / McIsaac ---------- */
  register({
    id: "centor", title: "Centor (McIsaac) score", group: "Sore throat", blurb: "Likelihood of group A strep pharyngitis.",
    render: function (root) {
      buildForm(root, [
        { id: "ex", type: "check", label: "Tonsillar swelling or exudate" },
        { id: "ln", type: "check", label: "Tender anterior cervical lymph nodes" },
        { id: "fe", type: "check", label: "Fever (temperature over 38 °C or 100.4 °F)" },
        { id: "co", type: "check", label: "No cough" },
        { id: "age", type: "select", label: "Age", options: [["1", "3 to 14 years"], ["0", "15 to 44 years"], ["-1", "45 years or older"]], def: 1 }
      ], function (v) {
        var s = (v.ex ? 1 : 0) + (v.ln ? 1 : 0) + (v.fe ? 1 : 0) + (v.co ? 1 : 0) + (parseInt(v.age, 10) || 0);
        var risk, act;
        if (s <= 0) { risk = "about 1 to 2.5%"; act = "Testing and antibiotics are not needed."; }
        else if (s === 1) { risk = "about 5 to 10%"; act = "Testing and antibiotics are not needed."; }
        else if (s === 2) { risk = "about 11 to 17%"; act = "Consider a rapid antigen test or culture. Treat only if positive."; }
        else if (s === 3) { risk = "about 28 to 35%"; act = "Rapid antigen test or culture. Treat if positive."; }
        else { risk = "about 51 to 53%"; act = "Test. Treat if positive. Some clinicians treat empirically when testing is unavailable."; }
        return result("Score " + s + ' <span class="tk-tag">Strep risk ' + risk + '</span>', act, [["Range", "Score runs from −1 to 5"]]) + DISCLAIMER;
      });
    }
  });

  /* ---------- Thyroid nodule: ACR TI-RADS ---------- */
  register({
    id: "ti-rads", title: "Thyroid nodule risk (TI-RADS)", group: "Thyroid", blurb: "Ultrasound features to a TR level and the size cutoff for biopsy.",
    render: function (root) {
      buildForm(root, [
        { id: "comp", type: "select", label: "Composition", options: [["0", "Cystic, almost completely cystic, or spongiform (0)"], ["1", "Mixed cystic and solid (1)"], ["2", "Solid or almost completely solid (2)"]], def: 2 },
        { id: "echo", type: "select", label: "Echogenicity", options: [["0", "Anechoic (0)"], ["1", "Hyperechoic or isoechoic (1)"], ["2", "Hypoechoic (2)"], ["3", "Very hypoechoic (3)"]], def: 1 },
        { id: "shape", type: "select", label: "Shape", options: [["0", "Wider than tall (0)"], ["3", "Taller than wide (3)"]] },
        { id: "marg", type: "select", label: "Margin", options: [["0", "Smooth or ill-defined (0)"], ["2", "Lobulated or irregular (2)"], ["3", "Extra-thyroidal extension (3)"]] },
        { id: "f1", type: "check", label: "Echogenic foci: large comet-tail artifacts (0)" },
        { id: "f2", type: "check", label: "Echogenic foci: macrocalcifications (1)" },
        { id: "f3", type: "check", label: "Echogenic foci: peripheral or rim calcifications (2)" },
        { id: "f4", type: "check", label: "Echogenic foci: punctate echogenic foci (3)" },
        { id: "size", type: "number", label: "Largest dimension (cm)", ph: "for example 1.8" }
      ], function (v) {
        var pts = (+v.comp) + (+v.echo) + (+v.shape) + (+v.marg) + (v.f2 ? 1 : 0) + (v.f3 ? 2 : 0) + (v.f4 ? 3 : 0);
        var lvl, lab, fna, fu;
        if (pts === 0) { lvl = 1; lab = "Benign"; fna = null; fu = null; }
        else if (pts <= 2) { lvl = 2; lab = "Not suspicious"; fna = null; fu = null; }
        else if (pts === 3) { lvl = 3; lab = "Mildly suspicious"; fna = 2.5; fu = 1.5; }
        else if (pts <= 6) { lvl = 4; lab = "Moderately suspicious"; fna = 1.5; fu = 1; }
        else { lvl = 5; lab = "Highly suspicious"; fna = 1; fu = 0.5; }
        var rec;
        if (!fna) rec = "No biopsy is recommended.";
        else if (v.size == null) rec = "Biopsy at " + fna + " cm or larger. Ultrasound follow-up at " + fu + " cm or larger. Enter a size for a recommendation.";
        else if (v.size >= fna) rec = "Meets the size cutoff for fine-needle aspiration (" + fna + " cm or larger).";
        else if (v.size >= fu) rec = "Below the biopsy cutoff. Ultrasound follow-up is recommended (" + fu + " cm or larger).";
        else rec = "Below the follow-up cutoff. No biopsy or follow-up is recommended.";
        var bt = '<table class="tk-table"><caption>Bethesda categories (3rd edition, 2023) and risk of malignancy</caption><thead><tr><th>Category</th><th>Risk</th></tr></thead><tbody>' +
          [["I Nondiagnostic", "about 13%"], ["II Benign", "about 4%"], ["III Atypia of undetermined significance", "about 22%"], ["IV Follicular neoplasm", "about 30%"], ["V Suspicious for malignancy", "about 74%"], ["VI Malignant", "about 97%"]]
            .map(function (r) { return "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td></tr>"; }).join("") + "</tbody></table>";
        return result(pts + " points, TR" + lvl + ' <span class="tk-tag">' + lab + "</span>", rec) + bt + DISCLAIMER;
      });
    }
  });

  /* ---------- TNM staging data (AJCC 8th edition) ---------- */
  var N_STD = [
    ["N0", "No regional node metastasis"], ["N1", "One ipsilateral node, 3 cm or less, no extranodal extension"],
    ["N2a", "One ipsilateral node, over 3 cm to 6 cm, no extranodal extension"], ["N2b", "Multiple ipsilateral nodes, none over 6 cm, no extranodal extension"],
    ["N2c", "Bilateral or contralateral nodes, none over 6 cm, no extranodal extension"], ["N3a", "Node over 6 cm, no extranodal extension"],
    ["N3b", "Any node with clinical extranodal extension"]
  ];
  var N_P16 = [
    ["N0", "No regional node metastasis"], ["N1", "One or more ipsilateral nodes, none over 6 cm"],
    ["N2", "Contralateral or bilateral nodes, none over 6 cm"], ["N3", "Node over 6 cm"]
  ];
  var T_LARYNX_COMMON = [["T3", "Limited to the larynx with vocal fold fixation, or invades the paraglottic space or the inner cortex of thyroid cartilage (the postcricoid area and pre-epiglottic space also count in supraglottic tumors)"],
    ["T4a", "Invades through the outer cortex of thyroid cartilage or into tissues beyond the larynx (trachea, strap muscles, thyroid, esophagus, deep extrinsic tongue muscles)"],
    ["T4b", "Invades the prevertebral space, encases the carotid artery, or invades mediastinal structures"]];
  var SITES = {
    oral: { name: "Oral cavity", kind: "std", note: "Depth of invasion (DOI) is part of T.",
      T: [["Tis", "Carcinoma in situ"], ["T1", "2 cm or less with DOI 5 mm or less"], ["T2", "2 cm or less with DOI over 5 mm to 10 mm, or over 2 cm to 4 cm with DOI 10 mm or less"],
        ["T3", "Over 4 cm, or any size with DOI over 10 mm"], ["T4a", "Invades adjacent structures such as cortical bone of the mandible or maxilla, the maxillary sinus, or facial skin"],
        ["T4b", "Invades the masticator space, pterygoid plates, or skull base, or encases the internal carotid artery"]] },
    opneg: { name: "Oropharynx, p16 negative", kind: "std", note: "Staged like other HPV-negative head and neck cancer.",
      T: [["Tis", "Carcinoma in situ"], ["T1", "2 cm or less"], ["T2", "Over 2 cm to 4 cm"], ["T3", "Over 4 cm, or extension to the lingual surface of the epiglottis"],
        ["T4a", "Invades the larynx, extrinsic tongue muscle, medial pterygoid, hard palate, or mandible"],
        ["T4b", "Invades the lateral pterygoid, pterygoid plates, lateral nasopharynx, or skull base, or encases the carotid artery"]] },
    oppos: { name: "Oropharynx, p16 positive (HPV-associated)", kind: "p16", note: "Clinical staging. Pathologic staging differs.",
      T: [["T0", "No primary identified"], ["T1", "2 cm or less"], ["T2", "Over 2 cm to 4 cm"], ["T3", "Over 4 cm, or extension to the lingual surface of the epiglottis"],
        ["T4", "Invades the larynx, extrinsic tongue muscle, medial pterygoid, hard palate, mandible, or beyond"]] },
    sg: { name: "Larynx, supraglottis", kind: "std", note: "",
      T: [["T1", "One subsite with normal vocal fold mobility"], ["T2", "Mucosa of more than one adjacent subsite, or a region outside the supraglottis (such as the base of tongue, vallecula, or medial pyriform wall), without fixation"]].concat(T_LARYNX_COMMON) },
    gl: { name: "Larynx, glottis", kind: "std", note: "",
      T: [["T1a", "Limited to one vocal fold"], ["T1b", "Involves both vocal folds"], ["T2", "Extends to the supraglottis or subglottis, or impaired vocal fold mobility"]].concat(T_LARYNX_COMMON) },
    sub: { name: "Larynx, subglottis", kind: "std", note: "",
      T: [["T1", "Limited to the subglottis"], ["T2", "Extends to the vocal fold(s) with normal or impaired mobility"]].concat(T_LARYNX_COMMON) }
  };
  function stageStd(t, n, m) {
    if (m === "M1") return "IVC";
    var tn = t.replace(/[ab]$/, ""), n2 = n.replace(/[abc]$/, "");
    if (t === "T4b" || n2 === "N3") return "IVB";
    if (t === "T4a" && (n2 === "N0" || n2 === "N1")) return "IVA";
    if (n2 === "N2") return "IVA";
    if (t === "T4a") return "IVA";
    if (tn === "Tis") return "0";
    if (n2 === "N1" || tn === "T3") return "III";
    if (tn === "T2") return "II";
    return "I";
  }
  function stageP16(t, n, m) {
    if (m === "M1") return "IV";
    var tn = parseInt(t.slice(1), 10), nn = parseInt(n.slice(1), 10);
    if (nn === 3 || tn === 4) return "III";
    if (tn === 3 || nn === 2) return "II";
    return "I";
  }
  register({
    id: "tnm", title: "TNM staging", group: "Head and neck", blurb: "Oral cavity, oropharynx, and larynx stage groups (AJCC 8th edition).",
    render: function (root) {
      var siteOpts = Object.keys(SITES).map(function (k) { return [k, SITES[k].name]; });
      root.innerHTML = '<p class="tk-intro">Pick the site, then the T, N, and M categories. Clinical staging, AJCC 8th edition.</p><div class="tk-form" id="tnmForm"></div><div class="tk-result" aria-live="polite"></div>';
      var form = root.querySelector("#tnmForm"), out = root.querySelector(".tk-result");
      var state = { site: "oral", t: 0, n: 0, m: "M0" };
      function sel(id, label, opts, val) {
        return '<label class="tk-field"><span class="tk-lab">' + label + '</span><select data-f="' + id + '">' + opts.map(function (o) {
          return '<option value="' + esc(o[0]) + '"' + (String(o[0]) === String(val) ? " selected" : "") + ">" + o[1] + "</option>"; }).join("") + "</select></label>";
      }
      function paint() {
        var s = SITES[state.site], Ns = s.kind === "p16" ? N_P16 : N_STD;
        if (state.t >= s.T.length) state.t = 0;
        if (state.n >= Ns.length) state.n = 0;
        form.innerHTML = sel("site", "Site", siteOpts, state.site) +
          sel("t", "T category", s.T.map(function (x, i) { return [i, x[0] + ", " + x[1]]; }), state.t) +
          sel("n", "N category", Ns.map(function (x, i) { return [i, x[0] + ", " + x[1]]; }), state.n) +
          sel("m", "M category", [["M0", "M0, no distant metastasis"], ["M1", "M1, distant metastasis"]], state.m);
        enhanceSelects(form);
        var t = s.T[state.t][0], n = Ns[state.n][0];
        var grp = s.kind === "p16" ? stageP16(t, n, state.m) : stageStd(t, n, state.m);
        out.innerHTML = result("Stage " + grp, t + " " + n + " " + state.m + (s.note ? ". " + s.note : "")) + DISCLAIMER;
      }
      form.addEventListener("change", function (e) {
        var f = e.target.getAttribute("data-f");
        if (f === "site") { state.site = e.target.value; state.t = 0; state.n = 0; }
        else if (f === "m") state.m = e.target.value;
        else state[f] = parseInt(e.target.value, 10);
        paint();
        var again = form.querySelector('[data-f="' + f + '"]'); var trg = again && again.parentNode.querySelector(".csel-trigger"); if (trg) trg.focus();
      });
      paint();
    }
  });

  /* ---------- Thyroid cancer staging (differentiated, AJCC 8th edition) ---------- */
  register({
    id: "thyroid-staging", title: "Thyroid cancer staging", group: "Thyroid", blurb: "Differentiated thyroid cancer stage group (AJCC 8th edition).",
    render: function (root) {
      buildForm(root, [
        { id: "age", type: "radio", label: "Age at diagnosis", options: [["lt", "Under 55"], ["ge", "55 or older"]] },
        { id: "t", type: "select", label: "T category", options: [["T1a", "T1a, 1 cm or less, limited to the thyroid"], ["T1b", "T1b, over 1 cm to 2 cm"], ["T2", "T2, over 2 cm to 4 cm"], ["T3a", "T3a, over 4 cm, limited to the thyroid"],
          ["T3b", "T3b, gross extrathyroidal extension into strap muscles"], ["T4a", "T4a, gross extension into subcutaneous tissue, larynx, trachea, esophagus, or recurrent laryngeal nerve"], ["T4b", "T4b, prevertebral fascia, or encases the carotid or mediastinal vessels"]] },
        { id: "n", type: "select", label: "N category", options: [["N0", "N0 or NX"], ["N1a", "N1a, central compartment (level VI or VII)"], ["N1b", "N1b, lateral neck or retropharyngeal nodes"]] },
        { id: "m", type: "select", label: "M category", options: [["M0", "M0"], ["M1", "M1, distant metastasis"]] }
      ], function (v) {
        var g, why;
        if (v.age === "lt") { g = v.m === "M1" ? "II" : "I"; why = "Under 55: stage I with no distant metastasis, stage II with distant metastasis."; }
        else if (v.m === "M1") { g = "IVB"; why = "Distant metastasis at age 55 or older."; }
        else if (v.t === "T4b") { g = "IVA"; why = "T4b, any N."; }
        else if (v.t === "T4a") { g = "III"; why = "T4a, any N."; }
        else if (v.t === "T3a" || v.t === "T3b" || v.n !== "N0") { g = "II"; why = "T3 with any N, or T1 to T2 with nodal disease."; }
        else { g = "I"; why = "T1 to T2, N0."; }
        return result("Stage " + g, why + " Applies to papillary, follicular, and Hürthle cell cancer. Medullary cancer is staged separately, and all anaplastic cancer is stage IV.") + DISCLAIMER;
      });
    }
  });

  /* ---------- Audiogram and tuning-fork simulator ---------- */
  var FREQ = [250, 500, 1000, 2000, 4000, 8000];
  var CASES = [
    { id: "normal", n: "Normal", R: { ac: [10, 10, 5, 10, 10, 15], bc: [5, 5, 0, 5, 10, 10], t: "A" }, L: { ac: [10, 5, 10, 5, 10, 15], bc: [5, 0, 5, 5, 5, 10], t: "A" },
      teach: "All thresholds sit at or below 25 dB HL and air and bone lines overlap. Weber is midline and Rinne is positive in both ears." },
    { id: "ome", n: "Conductive, right", R: { ac: [45, 45, 40, 35, 30, 30], bc: [5, 5, 5, 10, 10, 10], t: "B", ecv: "normal" }, L: { ac: [10, 10, 5, 10, 10, 15], bc: [5, 5, 0, 5, 10, 10], t: "A" },
      teach: "Bone conduction is normal and air conduction is worse, creating an air-bone gap. Weber lateralizes to the affected ear. A flat Type B with a normal ear canal volume points to middle ear effusion." },
    { id: "presby", n: "Presbycusis", R: { ac: [15, 20, 30, 45, 60, 70], bc: [10, 15, 25, 40, 55, 65], t: "A" }, L: { ac: [15, 20, 25, 45, 65, 75], bc: [10, 15, 20, 40, 60, 70], t: "A" },
      teach: "Symmetric, high-frequency sensorineural loss with air and bone together and no gap. Weber is midline. This is the typical age-related sloping pattern." },
    { id: "noise", n: "Noise-induced", R: { ac: [10, 10, 15, 25, 50, 25], bc: [5, 5, 10, 25, 45, 20], t: "A" }, L: { ac: [10, 10, 10, 20, 45, 25], bc: [5, 5, 10, 20, 40, 20], t: "A" },
      teach: "A notch at 3000 to 6000 Hz with recovery at 8000 Hz. Air and bone track together, so it is sensorineural. Both ears are usually affected." },
    { id: "oto", n: "Otosclerosis", R: { ac: [55, 50, 45, 40, 40, 45], bc: [10, 15, 20, 35, 15, 10], t: "As" }, L: { ac: [25, 25, 20, 25, 25, 30], bc: [10, 10, 10, 25, 10, 10], t: "As" },
      teach: "A low-frequency conductive loss with a stiff, shallow tympanogram (As). The bone curve dips near 2000 Hz, the Carhart notch, which improves after stapes surgery. Weber lateralizes to the worse-hearing ear." },
    { id: "snhl", n: "Unilateral SNHL, left", R: { ac: [10, 10, 5, 10, 10, 15], bc: [5, 5, 0, 5, 10, 10], t: "A" }, L: { ac: [30, 40, 55, 65, 75, 80], bc: [25, 35, 50, 60, 70, 75], t: "A" },
      teach: "Sensorineural loss in one ear with no air-bone gap. Weber lateralizes to the better ear. Asymmetric sensorineural loss needs MRI to exclude a retrocochlear lesion such as a vestibular schwannoma." },
    { id: "disc", n: "Ossicular discontinuity", R: { ac: [60, 60, 55, 55, 60, 60], bc: [5, 5, 5, 10, 10, 10], t: "Ad" }, L: { ac: [10, 10, 5, 10, 10, 15], bc: [5, 5, 0, 5, 10, 10], t: "A" },
      teach: "A large air-bone gap, up to about 60 dB, with an intact eardrum and a deep, hypermobile tympanogram (Ad). Think ossicular discontinuity, often after trauma." },
    { id: "mixed", n: "Mixed, right", R: { ac: [65, 65, 70, 75, 80, 85], bc: [20, 25, 30, 40, 45, 50], t: "B", ecv: "high" }, L: { ac: [10, 10, 5, 10, 10, 15], bc: [5, 5, 0, 5, 10, 10], t: "A" },
      teach: "Both a sensorineural component, with bone thresholds raised, and a conductive component, with a gap. A flat Type B with a high ear canal volume suggests a perforation or patent tube." }
  ];
  function avg(a, idx) { var s = 0; idx.forEach(function (i) { s += a[i]; }); return s / idx.length; }
  function analyse(e) {
    var pta = avg(e.ac, [1, 2, 3]), bta = avg(e.bc, [1, 2, 3]), gap = pta - bta;
    var sev = pta <= 25 ? "Normal" : pta <= 40 ? "Mild" : pta <= 55 ? "Moderate" : pta <= 70 ? "Moderately severe" : pta <= 90 ? "Severe" : "Profound";
    var type = pta <= 25 ? "Normal hearing" : gap >= 15 ? (bta <= 25 ? "Conductive" : "Mixed") : "Sensorineural";
    return { pta: Math.round(pta), gap: Math.round(gap), sev: sev, type: type, g500: e.ac[1] - e.bc[1] };
  }
  function weberSide(c) {
    function p(e) { var b = avg(e.bc, [1, 2, 3]); return -b + (avg(e.ac, [1, 2, 3]) - b); }
    var d = p(c.R) - p(c.L);
    return d > 5 ? "R" : d < -5 ? "L" : "mid";
  }
  function audChart(c) {
    var W = 640, H = 484, m = { l: 56, r: 96, t: 48, b: 20 }, iw = W - m.l - m.r, ih = H - m.t - m.b;
    function y(v) { return m.t + (v + 10) / 130 * ih; }
    function x(i) { return m.l + iw * (i + 0.5) / FREQ.length; }
    var s = svg("svg", { viewBox: "0 0 " + W + " " + H, width: "100%", role: "img", "aria-label": "Audiogram, " + c.n, "class": "aud-svg" });
    var bands = [[-10, 25, 0, "Normal"], [25, 40, 1, "Mild"], [40, 55, 2, "Moderate"], [55, 70, 3, "Mod. severe"], [70, 90, 4, "Severe"], [90, 120, 5, "Profound"]];
    bands.forEach(function (b) {
      svg("rect", { x: m.l, y: y(b[0]), width: iw, height: y(b[1]) - y(b[0]), "class": "aud-band aud-band-" + b[2] }, s);
      svg("text", { x: W - m.r + 10, y: (y(b[0]) + y(b[1])) / 2 + 4, "class": "aud-t", "font-size": 11.5 }, s).textContent = b[3];
    });
    for (var v = -10; v <= 120; v += 10) {
      svg("line", { x1: m.l, x2: W - m.r, y1: y(v), y2: y(v), "class": v === 25 ? "aud-grid aud-g25" : "aud-grid" }, s);
      svg("text", { x: m.l - 10, y: y(v) + 4, "text-anchor": "end", "class": "aud-t", "font-size": 11.5 }, s).textContent = v;
    }
    FREQ.forEach(function (f, i) {
      svg("line", { x1: x(i), x2: x(i), y1: m.t, y2: H - m.b, "class": "aud-grid" }, s);
      svg("text", { x: x(i), y: m.t - 14, "text-anchor": "middle", "class": "aud-t aud-tf", "font-size": 12 }, s).textContent = f >= 1000 ? (f / 1000) + "k" : f;
    });
    svg("text", { transform: "translate(14," + (m.t + ih / 2) + ") rotate(-90)", "text-anchor": "middle", "class": "aud-t", "font-size": 11.5 }, s).textContent = "Hearing level (dB HL)";
    svg("text", { x: m.l + iw / 2, y: 12, "text-anchor": "middle", "class": "aud-t", "font-size": 11.5 }, s).textContent = "Frequency (Hz)";
    function line(e, cls) { svg("path", { d: e.ac.map(function (v2, i) { return (i ? "L" : "M") + x(i) + " " + y(v2); }).join(" "), "class": "aud-line " + cls }, s); }
    line(c.R, "aud-R"); line(c.L, "aud-L");
    c.R.ac.forEach(function (v2, i) { svg("circle", { cx: x(i), cy: y(v2), r: 7, "class": "aud-sym-o aud-R" }, s); });
    c.L.ac.forEach(function (v2, i) { var X = x(i), Y = y(v2); svg("path", { d: "M" + (X - 6) + " " + (Y - 6) + "L" + (X + 6) + " " + (Y + 6) + "M" + (X + 6) + " " + (Y - 6) + "L" + (X - 6) + " " + (Y + 6), "class": "aud-sym-x aud-L" }, s); });
    c.R.bc.forEach(function (v2, i) { var X = x(i) - 14, Y = y(v2); svg("path", { d: "M" + (X + 4) + " " + (Y - 7) + "L" + X + " " + (Y - 7) + "L" + X + " " + (Y + 7) + "L" + (X + 4) + " " + (Y + 7), "class": "aud-sym-b aud-R" }, s); });
    c.L.bc.forEach(function (v2, i) { var X = x(i) + 14, Y = y(v2); svg("path", { d: "M" + (X - 4) + " " + (Y - 7) + "L" + X + " " + (Y - 7) + "L" + X + " " + (Y + 7) + "L" + (X - 4) + " " + (Y + 7), "class": "aud-sym-b aud-L" }, s); });
    return s;
  }
  function tympChart(t) {
    var W = 220, H = 170, m = { l: 34, r: 8, t: 10, b: 26 }, iw = W - m.l - m.r, ih = H - m.t - m.b;
    var P = { A: [0, 1.0, 70], As: [0, 0.35, 70], Ad: [0, 2.9, 75], C: [-250, 0.9, 70], B: [0, 0.08, 400] }[t];
    var s = svg("svg", { viewBox: "0 0 " + W + " " + H, width: "100%", role: "img", "aria-label": "Type " + t + " tympanogram", "class": "aud-svg" });
    function X(d) { return m.l + (d + 400) / 500 * iw; }
    function Y(v) { return m.t + ih - (v / 3.2) * ih; }
    [-400, -300, -200, -100, 0, 100].forEach(function (d) { svg("line", { x1: X(d), x2: X(d), y1: m.t, y2: m.t + ih, "class": "aud-grid" }, s); svg("text", { x: X(d), y: H - 10, "text-anchor": "middle", "class": "aud-t", "font-size": 9.5 }, s).textContent = d; });
    [0, 1, 2, 3].forEach(function (v) { svg("line", { x1: m.l, x2: W - m.r, y1: Y(v), y2: Y(v), "class": "aud-grid" }, s); svg("text", { x: m.l - 6, y: Y(v) + 3.5, "text-anchor": "end", "class": "aud-t", "font-size": 9.5 }, s).textContent = v; });
    var d = "";
    for (var i = -400; i <= 100; i += 5) {
      var v2 = t === "B" ? 0.08 + 0.02 * Math.exp(-Math.pow((i + 150) / 200, 2)) : P[1] * Math.exp(-Math.pow((i - P[0]) / P[2], 2));
      d += (i === -400 ? "M" : "L") + X(i) + " " + Y(v2);
    }
    svg("path", { d: d, "class": "aud-tymp" }, s);
    return s;
  }
  function tLabel(e) { return "Type " + e.t.replace(/^A(s|d)$/, 'A<sub>$1</sub>') + (e.t === "B" ? ", ECV " + e.ecv : ""); }
  register({
    id: "audiogram", title: "Audiogram and tuning-fork simulator", group: "Hearing", blurb: "Pick a pattern and see the audiogram, Weber, Rinne, and tympanogram together.",
    render: function (root) {
      var cur = CASES[1], quiz = false;
      root.innerHTML =
        '<p class="tk-intro">Pick a pattern. The audiogram, tuning fork results, and tympanograms update together.</p>' +
        '<div class="tk-pills" role="group" aria-label="Hearing loss pattern"></div>' +
        '<div class="tk-bar"><span class="tk-case"></span><button type="button" class="tk-btn tk-quiz" aria-pressed="false">Quiz mode: off</button></div>' +
        '<div class="aud-grid-wrap"><div class="aud-card"><div class="aud-h">Pure tone audiogram</div><div class="aud-chart"></div>' +
        '<div class="aud-legend"><span><b class="aud-key aud-kR">O</b> Right air</span><span><b class="aud-key aud-kL">X</b> Left air</span><span><b class="aud-key aud-kR">[</b> Right bone</span><span><b class="aud-key aud-kL">]</b> Left bone</span></div></div>' +
        '<div class="aud-side"><div class="aud-card aud-hide"><div class="aud-h">Tuning fork, 512 Hz</div>' +
        '<p class="aud-sub"><b>Weber</b>, fork on the forehead</p><div class="aud-weber"><i class="aud-rail"></i><i class="aud-mid"></i><i class="aud-dot"></i><span class="aud-wl" style="left:0">Right ear</span><span class="aud-wl" style="right:0">Left ear</span></div>' +
        '<div class="aud-wres"></div><p class="aud-sub" style="margin-top:14px"><b>Rinne</b>, air vs bone, each ear</p><div class="aud-two aud-rinne"></div></div>' +
        '<div class="aud-card aud-hide"><div class="aud-h">Tympanometry</div><div class="aud-two aud-tymp-wrap"></div></div></div></div>' +
        '<div class="aud-card aud-hide aud-interp-card"><div class="aud-h">Interpretation</div><div class="aud-two aud-interp"></div><p class="aud-teach"></p></div>';
      var pills = root.querySelector(".tk-pills");
      CASES.forEach(function (c) {
        var b = document.createElement("button"); b.type = "button"; b.className = "tk-pill"; b.setAttribute("data-id", c.id); b.textContent = c.n;
        b.addEventListener("click", function () { cur = c; paint(); }); pills.appendChild(b);
      });
      root.querySelector(".tk-quiz").addEventListener("click", function () {
        quiz = !quiz; this.textContent = "Quiz mode: " + (quiz ? "on, click to reveal" : "off"); this.setAttribute("aria-pressed", quiz ? "true" : "false");
        if (quiz) cur = CASES[Math.floor(Math.random() * CASES.length)];
        paint();
      });
      function paint() {
        var A = { R: analyse(cur.R), L: analyse(cur.L) }, W = weberSide(cur);
        root.querySelector(".tk-case").textContent = quiz ? "Pattern hidden. Read the audiogram, then reveal." : "Pattern: " + cur.n;
        var ch = root.querySelector(".aud-chart"); ch.innerHTML = ""; ch.appendChild(audChart(cur));
        root.querySelector(".aud-dot").style.left = W === "R" ? "10%" : W === "L" ? "90%" : "50%";
        root.querySelector(".aud-wres").innerHTML = '<div class="tk-big">' + (W === "mid" ? "Midline" : W === "R" ? "Lateralizes to the right" : "Lateralizes to the left") + '</div><div class="tk-small">' +
          (W === "mid" ? "Symmetric hearing, or equal loss in both ears." : "Conductive loss lateralizes to the affected ear. Sensorineural loss lateralizes to the better ear.") + "</div>";
        var rn = root.querySelector(".aud-rinne"); rn.innerHTML = "";
        [["R", "Right"], ["L", "Left"]].forEach(function (e) {
          var a = A[e[0]], neg = a.g500 >= 20, bcw = neg ? 100 : Math.max(30, 100 - Math.max(a.g500, 0) * 3), acw = neg ? Math.max(30, 100 - a.g500 * 1.4) : 100;
          rn.insertAdjacentHTML("beforeend", '<div><p class="aud-sub"><b>' + e[1] + ' ear</b></p><span class="tk-tag' + (neg ? " neg" : "") + '">' + (neg ? "Negative" : "Positive") + '</span>' +
            '<div class="aud-bars"><div class="aud-bar">Air<i class="aud-b' + e[0] + '" style="width:' + acw + '%"></i></div><div class="aud-bar">Bone<i class="aud-b' + e[0] + ' aud-bbone" style="width:' + bcw + '%"></i></div></div></div>');
        });
        var tw = root.querySelector(".aud-tymp-wrap"); tw.innerHTML = "";
        [["R", "Right"], ["L", "Left"]].forEach(function (e) {
          var d = cur[e[0]], box = document.createElement("div");
          box.innerHTML = '<p class="aud-sub"><b>' + e[1] + " ear</b>, " + tLabel(d) + "</p>"; box.appendChild(tympChart(d.t)); tw.appendChild(box);
        });
        root.querySelector(".aud-interp").innerHTML = [["R", "Right"], ["L", "Left"]].map(function (e) {
          var a = A[e[0]];
          return '<div class="aud-e"><b>' + e[1] + " ear</b><br>" + a.type + (a.type === "Normal hearing" ? "" : ", " + a.sev.toLowerCase()) + '<br><span class="aud-sub">Pure tone average ' + a.pta + " dB HL, air-bone gap " + Math.max(a.gap, 0) + " dB</span></div>";
        }).join("");
        root.querySelector(".aud-teach").textContent = cur.teach;
        [].forEach.call(root.querySelectorAll(".aud-hide"), function (b) { b.classList.toggle("is-hidden", quiz); });
        [].forEach.call(root.querySelectorAll(".tk-pill"), function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-id") === cur.id ? "true" : "false"); });
      }
      paint();
    }
  });
})();

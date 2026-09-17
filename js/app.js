/* app.js, view logic for the ENT Rotation Companion.
 * Reads window.JEFFENT.tracks + window.JEFFENT.modules and renders the
 * topic-browser UI: a subspecialty-tile Home, a track module list (when a
 * track has more than one module), a tabbed module view
 * (Anatomy / Clinical / Cases / Cards), a cross-module "All Due Cards" study
 * screen, and a functional topbar search. Pure DOM; no framework.
 * Content is trusted local data (innerHTML is fine here).
 */
(function () {
  "use strict";

  var TRACKS = window.JEFFENT.tracks || [];
  var TABS = ["anatomy", "clinical", "cases", "cards"];
  var TAB_LABELS = { anatomy: "Anatomy", clinical: "Clinical", cases: "Cases", cards: "Cards" };
  var SCREENS = ["home", "track", "module", "study", "pimp", "roadmap", "about", "library"];

  /* Active Recall Mode: trial run on Facial Plastics & Trauma only (see
   * initActiveRecall()/applyActiveRecallMask() below) before considering a
   * wider rollout. Drug list is curated from what actually appears in
   * content/facial-plastics.js rather than a generic dictionary. */
  var PROCEDURES_MODULE_ID = "procedures-2min";
  var ACTIVE_RECALL_ENABLED = false; /* paused per user feedback 9/17 -- flip true to resume the trial */
  var ACTIVE_RECALL_MODULE_ID = "facial-plastics-trauma";
  var ACTIVE_RECALL_DRUGS = [
    "Amoxicillin-clavulanate", "Augmentin", "Cefazolin", "doxycycline", "metronidazole",
    "clindamycin", "penicillin", "fluoroquinolone", "azithromycin", "ceftriaxone"
  ];

  var state = { screen: "home", trackId: null, moduleId: null, tab: "anatomy", session: null, anatomyTopic: null, caseSession: null, activeRecall: false };

  /* ---------- helpers ---------- */
  function el(id) { return document.getElementById(id); }
  function h(html) { var d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstChild; }
  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { "&":"&amp;","<":"&lt;",">":"&gt;" }[c]; }); }
  function on(node, evt, fn) { node.addEventListener(evt, fn); return node; }
  /* A styled dropdown that replaces the browser's native <select> (whose
   * open list is drawn by the OS, not the page -- it can't be themed and
   * looks jarring next to the app's own surfaces). Same role/keyboard
   * behavior as a listbox: click or Enter/Space opens it, arrow keys move
   * through options, Enter/Space picks one, Escape or an outside click
   * closes it. `opts`: { value, options:[{value,label}], ariaLabel,
   * className, onChange(value) }. Returns the wrapper node with
   * .getValue()/.setValue(v) for callers that need to read/drive it
   * imperatively (mirrors el(id).value on a real <select>). */
  function buildCustomSelect(opts) {
    var current = opts.value;
    var wrap = document.createElement("div");
    wrap.className = "csel" + (opts.className ? " " + opts.className : "");
    var btn = document.createElement("button");
    btn.type = "button"; btn.className = "csel-trigger mono";
    btn.setAttribute("aria-haspopup", "listbox");
    btn.setAttribute("aria-expanded", "false");
    if (opts.ariaLabel) btn.setAttribute("aria-label", opts.ariaLabel);
    var labelSpan = document.createElement("span");
    labelSpan.className = "csel-value";
    btn.appendChild(labelSpan);
    btn.appendChild(h('<span class="csel-chev" aria-hidden="true">&#9662;</span>'));
    var list = document.createElement("ul");
    list.className = "csel-list"; list.setAttribute("role", "listbox"); list.hidden = true;
    if (opts.ariaLabel) list.setAttribute("aria-label", opts.ariaLabel);

    function findOpt(v) {
      var found = null;
      opts.options.forEach(function (o) { if (String(o.value) === String(v)) found = o; });
      return found;
    }
    function renderLabel() {
      var o = findOpt(current);
      labelSpan.textContent = o ? o.label : "";
    }
    function renderOptions() {
      list.innerHTML = "";
      opts.options.forEach(function (o) {
        var isActive = String(o.value) === String(current);
        var li = document.createElement("li");
        li.className = "csel-opt" + (isActive ? " active" : "");
        li.setAttribute("role", "option");
        li.setAttribute("aria-selected", isActive ? "true" : "false");
        li.tabIndex = -1;
        li.textContent = o.label;
        li.addEventListener("click", function () { select(o.value); close(); btn.focus(); });
        list.appendChild(li);
      });
    }
    function select(v) {
      if (String(v) === String(current)) return;
      current = v;
      renderLabel(); renderOptions();
      if (opts.onChange) opts.onChange(v);
    }
    function open() {
      renderOptions();
      list.hidden = false; btn.setAttribute("aria-expanded", "true"); wrap.classList.add("open");
      var activeLi = list.querySelector(".active") || list.querySelector(".csel-opt");
      if (activeLi) activeLi.focus();
    }
    function close() {
      list.hidden = true; btn.setAttribute("aria-expanded", "false"); wrap.classList.remove("open");
    }
    on(btn, "click", function (e) { e.stopPropagation(); if (list.hidden) open(); else close(); });
    on(list, "keydown", function (e) {
      var items = Array.prototype.slice.call(list.querySelectorAll(".csel-opt"));
      var idx = items.indexOf(document.activeElement);
      if (e.key === "ArrowDown") { e.preventDefault(); (items[idx + 1] || items[0]).focus(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); (items[idx - 1] || items[items.length - 1]).focus(); }
      else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        var it = document.activeElement, i = items.indexOf(it);
        if (i > -1) { select(opts.options[i].value); close(); btn.focus(); }
      } else if (e.key === "Escape") { close(); btn.focus(); }
    });
    document.addEventListener("click", function (e) { if (!wrap.contains(e.target)) close(); });
    renderLabel(); renderOptions();
    wrap.appendChild(btn);
    wrap.appendChild(list);
    wrap.getValue = function () { return current; };
    wrap.setValue = function (v) { current = v; renderLabel(); renderOptions(); };
    return wrap;
  }
  function stripHtml(html) { var d = document.createElement("div"); d.innerHTML = html || ""; return (d.textContent || "").trim(); }
  /* Wraps every case-insensitive occurrence of `q` in `text` with a highlight
   * mark, escaping everything else. Used to show the searched phrase inside
   * the search-results dropdown. Falls back to plain escaped text if `q` is
   * empty or not found. */
  function highlightText(text, q) {
    var t = String(text || "");
    if (!q) return esc(t);
    var terms = String(q).toLowerCase().split(/\s+/).filter(function (x) { return x; });
    if (!terms.length) return esc(t);
    var out = "";
    var re = /[A-Za-z0-9]+/g;
    var last = 0;
    var m;
    while ((m = re.exec(t)) !== null) {
      var word = m[0];
      var wlower = word.toLowerCase();
      var best = 0;
      terms.forEach(function (term) {
        if (wlower.indexOf(term) === 0 && term.length > best) best = term.length;
      });
      out += esc(t.slice(last, m.index));
      if (best > 0) {
        out += '<mark class="search-hl">' + esc(word.slice(0, best)) + '</mark>' + esc(word.slice(best));
      } else {
        out += esc(word);
      }
      last = m.index + word.length;
    }
    out += esc(t.slice(last));
    return out;
  }

  function modulesFor(trackId) {
    return window.JEFFENT.modules
      .filter(function (m) { return m.track === trackId; })
      .sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
  }
  function isReviewed(mod) { return !/draft/i.test(mod.status || ""); }
  function trackById(id) {
    for (var i = 0; i < TRACKS.length; i++) { if (TRACKS[i].id === id) return TRACKS[i]; }
    return null;
  }
  /* Small per-track line icon, wrapped in the same stroke/viewBox convention
   * as the header brand mark. track.icon is trusted local inner-SVG markup
   * (see content/tracks.js), no wrapping <svg> tag stored there. */
  function trackSymbol(track, size) {
    if (!track) return "";
    var s = size || 20;
    if (track.icon) {
      return '<svg class="track-symbol" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + track.icon + '</svg>';
    }
    if (track.symbol) return '<span class="track-symbol" style="font-size:' + s + 'px">' + track.symbol + '</span>';
    return "";
  }
  function trackBadge(track, extraClass, size) {
    if (!track) return "";
    return '<span class="track-badge' + (extraClass ? " " + extraClass : "") + '">' + trackSymbol(track, size) + '</span>';
  }

  function aggregateStats(mods) {
    var total = 0, due = 0, mastered = 0;
    mods.forEach(function (m) {
      var s = window.SRS.stats(m.id, m.cards || []);
      total += s.total; due += s.due; mastered += s.mastered;
    });
    return { total: total, due: due, mastered: mastered };
  }

  /* ---------- theme ---------- */
  function initTheme() {
    var saved;
    try { saved = localStorage.getItem("jeffent.theme"); } catch (e) {}
    if (saved) document.documentElement.setAttribute("data-theme", saved);
    el("themeToggle").addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      var next = cur === "dark" ? "light" : cur === "light" ? "dark"
        : (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark");
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("jeffent.theme", next); } catch (e) {}
    });
  }

  /* ---------- last-tab memory ---------- */
  function loadLastTab(moduleId) {
    try { return localStorage.getItem("jeffent.tab." + moduleId); } catch (e) { return null; }
  }
  function saveLastTab(moduleId, tab) {
    try { localStorage.setItem("jeffent.tab." + moduleId, tab); } catch (e) {}
  }

  /* ---------- Active Recall Mode memory ---------- */
  function loadActiveRecall() {
    try { return localStorage.getItem("jeffent.activeRecall") === "1"; } catch (e) { return false; }
  }
  function saveActiveRecall(on) {
    try { localStorage.setItem("jeffent.activeRecall", on ? "1" : "0"); } catch (e) {}
  }

  /* ---------- personal card edits + notes (this browser only) ----------
   * Cards are shared curriculum content (content/*.js, faculty-reviewed --
   * see CLAUDE.md), so a learner's own edits and notes are never written
   * back into that data. They live as a patch layered on top, keyed by
   * "<moduleId>::<cardId>", and every place a card is displayed reads the
   * effective front/back/note through the helpers below instead of the
   * raw card fields. Clearing an override just removes the patch --
   * the original content/*.js content is always still there underneath. */
  function getCardOverrides() {
    try { return JSON.parse(localStorage.getItem("jeffent.cardOverrides") || "{}"); } catch (e) { return {}; }
  }
  function cardOverrideKey(moduleId, cardId) { return moduleId + "::" + cardId; }
  function getCardOverride(moduleId, cardId) {
    return getCardOverrides()[cardOverrideKey(moduleId, cardId)] || null;
  }
  function saveCardOverride(moduleId, cardId, patch) {
    var all = getCardOverrides();
    var key = cardOverrideKey(moduleId, cardId);
    var merged = {}; var existing = all[key] || {};
    for (var k in existing) merged[k] = existing[k];
    for (var k2 in patch) merged[k2] = patch[k2];
    all[key] = merged;
    try { localStorage.setItem("jeffent.cardOverrides", JSON.stringify(all)); } catch (e) {}
  }
  function clearCardEditOverride(moduleId, cardId) {
    var all = getCardOverrides();
    var key = cardOverrideKey(moduleId, cardId);
    if (!all[key]) return;
    delete all[key].front; delete all[key].back;
    if (!all[key].note) delete all[key];
    try { localStorage.setItem("jeffent.cardOverrides", JSON.stringify(all)); } catch (e) {}
  }
  function cardOwnerId(card, fallbackModId) { return card._owner || fallbackModId; }
  function effectiveFront(moduleId, card) {
    var ov = getCardOverride(moduleId, card.id);
    return (ov && ov.front != null) ? ov.front : card.front;
  }
  function effectiveBack(moduleId, card) {
    var ov = getCardOverride(moduleId, card.id);
    return (ov && ov.back != null) ? ov.back : card.back;
  }
  function cardNote(moduleId, card) {
    var ov = getCardOverride(moduleId, card.id);
    return (ov && ov.note) || "";
  }
  function cardIsEdited(moduleId, card) {
    var ov = getCardOverride(moduleId, card.id);
    return !!(ov && (ov.front != null || ov.back != null));
  }

  /* ---------- navigation ---------- */
  function showScreen(id) {
    SCREENS.forEach(function (s) { el("screen-" + s).hidden = (s !== id); });
    document.body.classList.toggle("on-home", id === "home");
    window.scrollTo(0, 0);
    if (typeof refreshSideNav === "function") refreshSideNav();
  }

  function goHome() {
    state.screen = "home"; state.session = null;
    renderHome();
    showScreen("home");
  }

  function goTrack(trackId) {
    var mods = modulesFor(trackId);
    if (mods.length === 0) return;
    if (mods.length === 1) { goModule(mods[0].id); return; }
    state.screen = "track"; state.trackId = trackId; state.session = null;
    renderTrack(trackId);
    showScreen("track");
  }

  function goModule(moduleId) {
    var mod = window.JEFFENT.get(moduleId);
    if (!mod) return;
    state.screen = "module"; state.moduleId = moduleId; state.session = null; state.anatomyTopic = null; state.caseSession = null;
    state.tab = loadLastTab(moduleId) || "anatomy";
    if (TABS.indexOf(state.tab) === -1) state.tab = "anatomy";
    renderModule(moduleId);
    showScreen("module");
  }

  function goStudyAll() {
    state.screen = "study"; state.session = null;
    renderStudyAllIntro();
    showScreen("study");
  }

  function goPimp() {
    state.screen = "pimp"; state.session = null; pq = null;
    renderPimpIntro();
    showScreen("pimp");
  }

  function goAbout() {
    state.screen = "about"; state.session = null;
    renderAbout();
    showScreen("about");
  }

  function goRoadmap() {
    state.screen = "roadmap"; state.session = null;
    renderRoadmap();
    showScreen("roadmap");
  }

  function goCardLibrary() {
    state.screen = "library"; state.session = null;
    renderCardLibrary();
    showScreen("library");
  }

  /* ---------- CARD LIBRARY ----------
   * Every flashcard, individually, grouped by module/specialty, searchable,
   * with a personal note field and an inline editor. Edits and notes are
   * per-browser overrides (see the card-override helpers above) -- they
   * never touch content/*.js, so the shared curriculum data stays intact
   * for every other student. */
  var libraryState = { filter: "all", query: "", openKey: null, editingKey: null };

  function renderCardLibrary() {
    var root = el("screen-library");
    root.innerHTML = "";
    var crumb = h('<button class="crumb">&larr; Home</button>');
    crumb.addEventListener("click", goHome);
    root.appendChild(crumb);
    root.appendChild(h('<div class="eyebrow">Every flashcard, in one place</div>'));
    root.appendChild(h('<h1 class="h-lead">Card Library</h1>'));
    root.appendChild(h(
      '<p class="sub">Browse every card by specialty, or search across all of them. ' +
      'Add a personal note or edit a card’s wording for your own review. It saves to this browser only, ' +
      'the shared card is never changed.</p>'
    ));

    var controls = h('<div class="lib-controls"></div>');
    var searchInput = h('<input type="text" class="lib-search" placeholder="Search all cards…" aria-label="Search all cards">');
    searchInput.value = libraryState.query;
    controls.appendChild(searchInput);
    root.appendChild(controls);

    var filterBar = h('<div class="filter-bar lib-filter-bar"></div>');
    var allPill = h('<button type="button" class="filter-pill' + (libraryState.filter === "all" ? " active" : "") + '" data-filter="all">All specialties</button>');
    filterBar.appendChild(allPill);
    TRACKS.forEach(function (t) {
      var hasCards = modulesFor(t.id).some(function (m) { return (m.cards || []).length; });
      if (!hasCards) return;
      var pill = h('<button type="button" class="filter-pill' + (libraryState.filter === t.id ? " active" : "") + '" data-filter="' + t.id + '">' + esc(t.name) + '</button>');
      filterBar.appendChild(pill);
    });
    root.appendChild(filterBar);

    var listWrap = h('<div class="lib-groups"></div>');
    root.appendChild(listWrap);

    searchInput.addEventListener("input", function () {
      libraryState.query = searchInput.value;
      renderLibraryList(listWrap);
    });
    filterBar.querySelectorAll(".filter-pill").forEach(function (p) {
      p.addEventListener("click", function () {
        filterBar.querySelectorAll(".filter-pill").forEach(function (x) { x.classList.toggle("active", x === p); });
        libraryState.filter = p.dataset.filter;
        libraryState.openKey = null; libraryState.editingKey = null;
        renderLibraryList(listWrap);
      });
    });

    renderLibraryList(listWrap);
  }

  function renderLibraryList(listWrap) {
    listWrap.innerHTML = "";
    var q = libraryState.query.trim().toLowerCase();
    var groups = [];
    window.JEFFENT.modules.forEach(function (m) {
      if (libraryState.filter !== "all" && m.track !== libraryState.filter) return;
      var cards = (m.cards || []).filter(function (c) {
        if (!q) return true;
        var hay = (stripHtml(effectiveFront(m.id, c)) + " " + stripHtml(effectiveBack(m.id, c)) + " " + (c.tags || []).join(" ")).toLowerCase();
        return hay.indexOf(q) !== -1;
      });
      if (cards.length) groups.push({ mod: m, cards: cards });
    });

    if (!groups.length) {
      listWrap.appendChild(emptyNote(q ? "No cards match “" + libraryState.query + "”." : "No cards in this specialty yet."));
      return;
    }

    groups.forEach(function (g) {
      var t = trackById(g.mod.track);
      var style = t && t.color ? ' style="--track-color:' + t.color + '"' : "";
      var section = h(
        '<section class="lib-group"' + style + '>' +
          '<div class="lib-group-head"><span class="lib-group-dot"></span>' +
            '<h3 class="lib-group-title">' + esc(g.mod.title) + '</h3>' +
            '<span class="lib-group-rule" aria-hidden="true"></span>' +
            '<span class="lib-group-count mono">' + g.cards.length + '</span></div>' +
          '<div class="lib-rows"></div>' +
        '</section>'
      );
      var rows = section.querySelector(".lib-rows");
      g.cards.forEach(function (c) { rows.appendChild(buildLibraryRow(g.mod, c, listWrap)); });
      listWrap.appendChild(section);
    });
  }

  function buildLibraryRow(mod, card, listWrap) {
    var key = cardOverrideKey(mod.id, card.id);
    var isOpen = libraryState.openKey === key;
    var row = h('<div class="lib-row' + (isOpen ? " open" : "") + '"></div>');

    var head = h(
      '<button type="button" class="lib-row-head">' +
        '<span class="lib-row-front">' + esc(teaserOf(effectiveFront(mod.id, card), 130)) + '</span>' +
        '<span class="lib-row-flags">' +
          (cardIsEdited(mod.id, card) ? '<span class="pill edited">Edited</span>' : "") +
          (cardNote(mod.id, card) ? '<span class="pill noted">Note</span>' : "") +
        '</span>' +
        '<span class="lib-row-chev" aria-hidden="true">' + (isOpen ? "▾" : "▸") + '</span>' +
      '</button>'
    );
    head.addEventListener("click", function () {
      libraryState.openKey = isOpen ? null : key;
      libraryState.editingKey = null;
      renderLibraryList(listWrap);
    });
    row.appendChild(head);

    if (isOpen) {
      var body = h('<div class="lib-row-body"></div>');
      if (libraryState.editingKey === key) {
        body.appendChild(buildCardEditForm(mod, card, listWrap));
      } else {
        body.appendChild(h('<div class="lib-face"><div class="lib-face-label mono">Front</div><div class="lib-face-content">' + effectiveFront(mod.id, card) + '</div></div>'));
        body.appendChild(h('<div class="lib-face"><div class="lib-face-label mono">Back</div><div class="lib-face-content">' + effectiveBack(mod.id, card) + '</div></div>'));
        linkGlossaryTerms(body);
        enhanceReferenceTables(body);
        var noteVal = cardNote(mod.id, card);
        if (noteVal) body.appendChild(h('<div class="card-note"><strong>Your note:</strong> ' + esc(noteVal) + '</div>'));
        var actions = h('<div class="lib-row-actions"></div>');
        var editBtn = h('<button type="button" class="btn ghost small">Edit card &amp; note</button>');
        editBtn.addEventListener("click", function () { libraryState.editingKey = key; renderLibraryList(listWrap); });
        actions.appendChild(editBtn);
        if (cardIsEdited(mod.id, card)) {
          var resetBtn = h('<button type="button" class="link-btn">Reset to original</button>');
          resetBtn.addEventListener("click", function () {
            if (!window.confirm("Reset this card's wording to the original? Your note, if any, is kept.")) return;
            clearCardEditOverride(mod.id, card.id);
            renderLibraryList(listWrap);
          });
          actions.appendChild(resetBtn);
        }
        body.appendChild(actions);
      }
      row.appendChild(body);
    }
    return row;
  }

  function buildCardEditForm(mod, card, listWrap) {
    var wrap = h('<div class="lib-edit-form"></div>');
    wrap.appendChild(h('<label class="lib-edit-label mono">Front</label>'));
    var frontTa = document.createElement("textarea");
    frontTa.className = "lib-edit-textarea"; frontTa.rows = 3; frontTa.value = effectiveFront(mod.id, card);
    wrap.appendChild(frontTa);
    wrap.appendChild(h('<label class="lib-edit-label mono">Back</label>'));
    var backTa = document.createElement("textarea");
    backTa.className = "lib-edit-textarea"; backTa.rows = 6; backTa.value = effectiveBack(mod.id, card);
    wrap.appendChild(backTa);
    wrap.appendChild(h('<label class="lib-edit-label mono">Your note <span class="lib-edit-hint">(only you see this)</span></label>'));
    var noteTa = document.createElement("textarea");
    noteTa.className = "lib-edit-textarea"; noteTa.rows = 2; noteTa.value = cardNote(mod.id, card);
    wrap.appendChild(noteTa);

    var actions = h('<div class="lib-row-actions"></div>');
    var saveBtn = h('<button type="button" class="btn small">Save</button>');
    saveBtn.addEventListener("click", function () {
      saveCardOverride(mod.id, card.id, { front: frontTa.value, back: backTa.value, note: noteTa.value });
      libraryState.editingKey = null;
      renderLibraryList(listWrap);
    });
    var cancelBtn = h('<button type="button" class="btn ghost small">Cancel</button>');
    cancelBtn.addEventListener("click", function () { libraryState.editingKey = null; renderLibraryList(listWrap); });
    actions.appendChild(saveBtn); actions.appendChild(cancelBtn);
    wrap.appendChild(actions);
    return wrap;
  }

  /* ---------- ROADMAP: the full curriculum map, one row per track,
     in tracks.js order, each showing its modules/status/card count so the
     whole program is visible at a glance instead of just the tiles you've
     already unlocked visually on Home. ---------- */
  function renderRoadmap() {
    var root = el("screen-roadmap");
    root.innerHTML = "";
    var crumb = h('<button class="crumb">&larr; Home</button>');
    crumb.addEventListener("click", goHome);
    root.appendChild(crumb);
    root.appendChild(h('<div class="eyebrow">The full curriculum</div>'));
    root.appendChild(h('<h1 class="h-lead">Curriculum roadmap</h1>'));

    var list = h('<div class="roadmap-list"></div>');
    TRACKS.forEach(function (t, i) {
      var mods = modulesFor(t.id);
      var cardCount = mods.reduce(function (n, m) { return n + (m.cards || []).length; }, 0);
      var rowStyle = t.color ? ' style="--track-color:' + t.color + '"' : "";
      var numStr = (i + 1 < 10 ? "0" : "") + (i + 1);
      var row = h(
        '<div class="rm-row"' + rowStyle + '>' +
          '<div class="rm-num mono">' + numStr + '</div>' +
          '<div class="rm-icon">' + trackBadge(t, "rm-badge", 20) + '</div>' +
          '<div class="rm-body">' +
            '<h3>' + esc(t.name) + '</h3>' +
            '<div class="rm-meta mono">' + (mods.length ? (mods.length + ' module' + (mods.length === 1 ? '' : 's') + ' · ' + cardCount + ' cards') : 'Coming soon') + '</div>' +
            (mods.length ? '<div class="rm-mods"></div>' : '') +
          '</div>' +
        '</div>'
      );
      if (mods.length) {
        var modsWrap = row.querySelector(".rm-mods");
        mods.forEach(function (m) {
          var chip = h('<button type="button" class="rm-modchip">' + esc(m.title || m.id) +
            (isReviewed(m) ? '' : '<span class="rm-draft">draft</span>') + '</button>');
          chip.addEventListener("click", function () { goModule(m.id); });
          modsWrap.appendChild(chip);
        });
      }
      list.appendChild(row);
    });
    root.appendChild(list);
  }

  function renderAbout() {
    var root = el("screen-about");
    root.innerHTML = "";
    var crumb = h('<button class="crumb">&larr; Home</button>');
    crumb.addEventListener("click", goHome);
    root.appendChild(crumb);
    root.appendChild(h('<div class="eyebrow">About this project</div>'));
    root.appendChild(h('<h1 class="h-lead">ENT Rotation Companion</h1>'));
    root.appendChild(h(
      '<div class="about-body">' +
        '<p>Active-recall flashcards, real clinical cases, and anatomy drills anchored to the UKMLA curriculum and ACGME milestones, for every stop on the ENT rotation.</p>' +
        '<p>Foundations covers the cross-cutting exam and complaint breadth every rotation touches; each subspecialty track then goes deeper on those same topics rather than repeating them. Every card and case is drafted from named clinical guidelines and standard teaching, never lifted from a single textbook, and stays labeled draft, pending faculty review, until it\u2019s signed off.</p>' +
        '<p>Spaced repetition uses a five-box Leitner system: cards you rate \u201cagain\u201d come back sooner, cards you rate \u201cgood\u201d or \u201ceasy\u201d get pushed further out. The \u2699 settings panel in the header lets you speed that up or slow it down, and cap how many new cards show up per day, both apply across every module at once.</p>' +
      '</div>'
    ));
  }

  /* ---------- study streak (consecutive days with the app opened) ----------
     A real, if simple, signal: no fabricated number. Stored locally only. */
  function dayStr(d) { return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
  function bumpStreak() {
    var today = new Date();
    var todayKey = dayStr(today);
    var last, count;
    try {
      last = localStorage.getItem("jeffent.streak.last");
      count = parseInt(localStorage.getItem("jeffent.streak.count"), 10) || 0;
    } catch (e) { last = null; count = 0; }
    if (last === todayKey) return; /* already counted today */
    var yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
    count = (last === dayStr(yesterday)) ? count + 1 : 1;
    try {
      localStorage.setItem("jeffent.streak.last", todayKey);
      localStorage.setItem("jeffent.streak.count", String(count));
    } catch (e) {}
  }
  function getStreak() {
    try { return parseInt(localStorage.getItem("jeffent.streak.count"), 10) || 1; } catch (e) { return 1; }
  }

  /* Cmd/Ctrl+K jumps straight to the topbar search, same convention as the
     reference's "Press ⌘+F to search" hint. */
  function initSearchShortcut() {
    document.addEventListener("keydown", function (e) {
      var mod = e.metaKey || e.ctrlKey;
      if (mod && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        var input = el("searchInput");
        if (input) input.focus();
      }
    });
  }

  /* Cmd/Ctrl+Shift+F toggles the flashcards panel from anywhere in the app. */
  function initFlashShortcut() {
    document.addEventListener("keydown", function (e) {
      var mod = e.metaKey || e.ctrlKey;
      if (mod && e.shiftKey && (e.key === "f" || e.key === "F")) {
        e.preventDefault();
        toggleFlash();
      }
    });
  }

  /* Ambient scroll tint: keeps --scroll-progress (0 at the top of the page,
   * 1 at the bottom) in sync with scroll position; the body rule in
   * styles.css reads it to ease the page canvas from --ground toward the
   * deeper --scroll-deep going down, and back lighter coming back up.
   * rAF-throttled so it costs nothing beyond one style write per frame. */
  function initScrollTint() {
    var ticking = false;
    function update() {
      var doc = document.documentElement;
      var scrollable = doc.scrollHeight - doc.clientHeight;
      var progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (progress < 0) progress = 0; else if (progress > 1) progress = 1;
      doc.style.setProperty("--scroll-progress", progress.toFixed(3));
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* Again/Good/Easy rating-button hints, read live from the configured
     Study Settings intervals (10 min / 1 day / 3 days by default) instead
     of the old hardcoded "< 1 day"/"step up"/"skip ahead" copy, so the
     buttons always say exactly when the card comes back. */
  function rateHintLabels() {
    var s = window.SRS.getSettings();
    return {
      again: s.againMinutes + " min",
      good: s.goodDays + (s.goodDays === 1 ? " day" : " days"),
      easy: s.easyDays + (s.easyDays === 1 ? " day" : " days")
    };
  }

  /* Tiny bar-sparkline (SVG) for the last N days of review activity, shown
     under the streak stat. Pure decoration -- no interactivity. */
  function sparklineSvg(values, w, h) {
    w = w || 60; h = h || 18;
    var n = values.length || 1;
    var max = Math.max.apply(null, values.concat([1]));
    var slot = w / n;
    var bw = Math.max(2, slot * 0.55);
    var bars = values.map(function (v, i) {
      var bh = Math.max(1.5, (v / max) * (h - 2));
      var x = i * slot + (slot - bw) / 2;
      var y = h - bh;
      return '<rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + bh.toFixed(1) + '" rx="1"></rect>';
    }).join("");
    return '<svg class="spark" viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" height="' + h + '" aria-hidden="true">' + bars + '</svg>';
  }

  /* Small circular mastery ring (SVG) used in the spaced-repetition queue --
     replaces a linear bar with a compact at-a-glance percentage. */
  function masteryRing(pct, color, size, showLabel, trackColor, textColor) {
    size = size || 40;
    if (showLabel === undefined) showLabel = true;
    var stroke = size < 24 ? 2.5 : 4, r = (size - stroke) / 2, c = 2 * Math.PI * r;
    var offset = c * (1 - Math.max(0, Math.min(100, pct)) / 100);
    var cx = size / 2, cy = size / 2;
    return '<svg class="mastery-ring" width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" aria-hidden="true">' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + esc(trackColor || "rgba(255,255,255,.16)") + '" stroke-width="' + stroke + '"></circle>' +
      '<circle class="mastery-ring-fill" cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + esc(color) + '" stroke-width="' + stroke + '" stroke-linecap="round" ' +
        'stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + c.toFixed(1) + '" transform="rotate(-90 ' + cx + ' ' + cy + ')" data-target-offset="' + offset.toFixed(1) + '"></circle>' +
      (showLabel ? '<text x="' + cx + '" y="' + (cy + 4) + '" text-anchor="middle" font-size="11" fill="' + esc(textColor || "#fff") + '" font-family="JetBrains Mono, monospace">' + Math.round(pct) + '</text>' : '') +
    '</svg>';
  }
  /* Animates a masteryRing()'s stroke from empty to its target percentage --
     called after the SVG is actually in the DOM (a transition on
     stroke-dashoffset needs the "from" value painted on one frame before
     the "to" value is set on the next). */
  function animateMasteryRing(container) {
    if (!container) return;
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    container.querySelectorAll(".mastery-ring-fill[data-target-offset]").forEach(function (circle) {
      var target = circle.getAttribute("data-target-offset");
      if (reduce) { circle.style.strokeDashoffset = target; return; }
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { circle.style.strokeDashoffset = target; });
      });
    });
  }

  /* One deliberate load moment for the Home stat row: numbers count up from
     zero instead of appearing static. Respects prefers-reduced-motion. */
  function animateStatCounts(scope) {
    var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var nodes = scope.querySelectorAll(".big[data-count]");
    nodes.forEach(function (node) {
      var target = parseInt(node.getAttribute("data-count"), 10) || 0;
      var suffix = node.getAttribute("data-suffix") || "";
      if (reduced || !target) { node.textContent = target + suffix; return; }
      var start = null, dur = 650;
      function step(ts) {
        if (start === null) start = ts;
        var p = Math.min(1, (ts - start) / dur);
        var eased = 1 - Math.pow(1 - p, 3);
        node.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  /* ---------- HOME ---------- */
  var HOME_FILTERS = [
    { id: "all", label: "All tracks" },
    { id: "core", label: "Core clerkship" },
    { id: "subspecialty", label: "Subspecialties" },
    { id: "atlas", label: "Atlas & high-yield tools" }
  ];
  var homeFilter = "all";
  var homeFilterIndicatorResizeHandler = null;

  function applyHomeFilter(grid, list) {
    [grid, list].forEach(function (container) {
      if (!container) return;
      container.querySelectorAll(".tile, .feature-row").forEach(function (el) {
        var show = homeFilter === "all" || el.dataset.category === homeFilter;
        el.style.display = show ? "" : "none";
      });
    });
  }

  /* Glides the filter-bar's background pill behind whichever tab is active
   * -- measured (not hardcoded) so it works with any label/count width and
   * survives reflow (also called on window resize). Positioned with
   * left/top rather than transform so it still lands correctly if the bar
   * wraps to a second line on a narrow screen. */
  function moveFilterIndicator(bar) {
    var indicator = bar.querySelector(".filter-pill-indicator");
    var activePill = bar.querySelector(".filter-pill.active");
    if (!indicator || !activePill) return;
    indicator.style.width = activePill.offsetWidth + "px";
    indicator.style.height = activePill.offsetHeight + "px";
    indicator.style.left = activePill.offsetLeft + "px";
    indicator.style.top = activePill.offsetTop + "px";
  }

  /* Re-triggers a staggered fade-in-up on whichever tiles/rows are visible
   * after a filter switch (inline animation-delay per visible index, since
   * nth-child delays defined in CSS can't skip elements hidden by the
   * previous filter). */
  function restaggerHomeGrid(grid, list) {
    [grid, list].forEach(function (container) {
      if (!container) return;
      var visible = Array.prototype.filter.call(container.querySelectorAll(".tile, .feature-row"), function (el) {
        return el.style.display !== "none";
      });
      visible.forEach(function (el, i) {
        el.classList.remove("filter-pop");
        void el.offsetWidth; /* force reflow so the animation restarts */
        el.style.animationDelay = Math.min(i * 30, 240) + "ms";
        el.classList.add("filter-pop");
      });
    });
  }

  function renderHome() {
    var allMods = window.JEFFENT.modules;
    var agg = aggregateStats(allMods);
    var pct = agg.total ? Math.round((agg.mastered / agg.total) * 100) : 0;
    var reviewedCount = allMods.filter(isReviewed).length;
    var streak = getStreak();

    var root = el("screen-home");
    root.innerHTML = "";
    root.appendChild(h('<div class="eyebrow">Your ENT rotation, topic by topic</div>'));

    /* Unified bento dashboard: a single dark hero card holds the queue CTA,
     * streak, a horizontally swipeable rack of every subspecialty with cards
     * due, and the mastery ring + due-today stat -- replacing the earlier
     * "hero beside two light stat tiles" split so mastery/due-today read as
     * part of the same at-a-glance panel instead of separate boxes. */
    var dueTracks = TRACKS.map(function (t) {
      var mods = modulesFor(t.id);
      return { track: t, mods: mods, due: aggregateStats(mods).due };
    }).filter(function (x) { return x.mods.length && x.due > 0; })
      .sort(function (a, b) { return b.due - a.due; });

    var bento = h('<div class="home-bento"></div>');
    var activity7 = window.SRS.dailyActivity(7);

    var heroTile = h(
      '<div class="bento-tile bento-hero bento-hero-unified">' +
        '<div class="bento-hero-top">' +
          '<div class="bento-hero-copy">' +
            '<div class="eyebrow">Spaced repetition queue</div>' +
            '<h2 class="bento-hero-title">Ready for your daily review</h2>' +
            '<div class="bento-hero-sub">' + agg.due + ' card' + (agg.due === 1 ? '' : 's') + ' due across ' + allMods.length + ' modules.</div>' +
          '</div>' +
          '<div class="bento-streak-chip" data-dash="streak" role="button" tabindex="0" aria-label="' + streak + (streak === 1 ? ' day' : ' days') + ' study streak. Open study settings.">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a6 6 0 1 1-12 0c0-1.088.348-2.05.5-2.5"/></svg>' +
            '<span>' + streak + (streak === 1 ? " day" : " days") + " streak</span>" +
          "</div>" +
        "</div>" +
        '<div class="bento-hero-scroller" role="list" aria-label="Subspecialties with cards due"></div>' +
        '<div class="bento-hero-metrics">' +
          '<button type="button" class="bento-metric bento-metric-mastery" aria-label="Overall mastery ' + pct + ' percent. ' + reviewedCount + ' of ' + allMods.length + ' modules reviewed. Open curriculum roadmap.">' +
            '<span class="bento-metric-ring">' + masteryRing(pct, "#9fc1ff", 46, false, "rgba(255,255,255,.16)") + '</span>' +
            '<span class="bento-metric-copy">' +
              '<span class="bento-metric-value">' + pct + '%</span>' +
              '<span class="bento-metric-label">Overall mastery</span>' +
              '<span class="bento-metric-sub">' + reviewedCount + '/' + allMods.length + ' modules reviewed</span>' +
            '</span>' +
          '</button>' +
          '<div class="bento-metric-divider" aria-hidden="true"></div>' +
          '<button type="button" class="bento-metric bento-metric-due" data-dash="due" aria-label="' + agg.due + ' cards due today. Start due queue.">' +
            '<span class="bento-metric-copy">' +
              '<span class="bento-metric-value big" data-count="' + agg.due + '">0</span>' +
              '<span class="bento-metric-label">Cards due today</span>' +
            '</span>' +
            '<span class="bento-metric-spark">' + sparklineSvg(activity7, 84, 26) + '</span>' +
          '</button>' +
          '<button type="button" class="btn bento-start-btn">Start due queue (' + agg.due + ') &rarr;</button>' +
        "</div>" +
      "</div>"
    );
    heroTile.querySelector(".bento-start-btn").addEventListener("click", goStudyAll);
    var streakChip = heroTile.querySelector(".bento-streak-chip");
    var openStreakSettings = function (e) {
      /* Simulating a click on the real settingsToggle opens the panel
       * synchronously, but the *original* click event is still bubbling
       * -- without stopping it here, it reaches initSettings()'s
       * outside-click listener on document and immediately closes the
       * panel it just opened. */
      e.stopPropagation();
      var t = el("settingsToggle");
      if (t) t.click();
    };
    streakChip.addEventListener("click", openStreakSettings);
    streakChip.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openStreakSettings(e); } });

    var chipRack = heroTile.querySelector(".bento-hero-scroller");
    if (dueTracks.length) {
      dueTracks.forEach(function (x) {
        var chip = h(
          '<button type="button" class="bento-chip" role="listitem" style="--track-color:' + (x.track.color || "#fff") + '">' +
            esc(x.track.name) + '<span class="bento-chip-count">' + x.due + "</span>" +
          "</button>"
        );
        chip.addEventListener("click", function () { goTrack(x.track.id); });
        chipRack.appendChild(chip);
      });
    } else {
      chipRack.appendChild(h('<div class="bento-chip bento-chip-empty">All caught up, nothing due right now</div>'));
    }

    heroTile.querySelector(".bento-metric-mastery").addEventListener("click", goRoadmap);
    heroTile.querySelector(".bento-metric-due").addEventListener("click", goStudyAll);

    bento.appendChild(heroTile);
    root.appendChild(bento);
    animateStatCounts(bento);
    animateMasteryRing(bento);

    root.appendChild(h('<div class="section-head"><h2>Browse by subspecialty</h2></div>'));

    var filterBar = h('<div class="filter-bar filter-bar-sliding"><i class="filter-pill-indicator"></i></div>');
    var grid = h('<div class="tile-grid"></div>');
    var list = h('<div class="feature-list"></div>');
    var activeTrackCount = TRACKS.filter(function (t) { return modulesFor(t.id).length > 0; }).length;
    HOME_FILTERS.forEach(function (f) {
      var count = f.id === "all" ? activeTrackCount :
        TRACKS.filter(function (t) { return modulesFor(t.id).length > 0 && (t.category || "subspecialty") === f.id; }).length;
      var pill = h(
        '<button type="button" class="filter-pill' + (f.id === homeFilter ? ' active' : '') + '" data-filter="' + f.id + '">' +
          esc(f.label) + '<span class="filter-pill-count">' + count + '</span>' +
        '</button>'
      );
      pill.addEventListener("click", function () {
        homeFilter = f.id;
        filterBar.querySelectorAll(".filter-pill").forEach(function (p) { p.classList.toggle("active", p.getAttribute("data-filter") === homeFilter); });
        moveFilterIndicator(filterBar);
        applyHomeFilter(grid, list);
        restaggerHomeGrid(grid, list);
      });
      filterBar.appendChild(pill);
    });
    root.appendChild(filterBar);
    moveFilterIndicator(filterBar);
    if (homeFilterIndicatorResizeHandler) window.removeEventListener("resize", homeFilterIndicatorResizeHandler);
    homeFilterIndicatorResizeHandler = function () { moveFilterIndicator(filterBar); };
    window.addEventListener("resize", homeFilterIndicatorResizeHandler);

    TRACKS.forEach(function (t) {
      var mods = modulesFor(t.id);
      var cardCount = mods.reduce(function (n, m) { return n + (m.cards || []).length; }, 0);
      var s = aggregateStats(mods);
      var tpct = s.total ? Math.round((s.mastered / s.total) * 100) : 0;
      var disabled = mods.length === 0;
      var category = t.category || "subspecialty";
      var chipLabel = category === "core" ? "core" : category === "atlas" ? "tool" : "specialty";
      var chip = disabled ? '<span class="chip">coming soon</span>' : '<span class="chip">' + chipLabel + '</span>';
      var meta = disabled ? 'No modules yet' : (mods.length + ' module' + (mods.length === 1 ? '' : 's') + ' · ' + cardCount + ' cards');
      var tileStyle = t.color ? ' style="--track-color:' + t.color + '"' : "";
      var tile = h(
        '<button class="tile" type="button" data-category="' + category + '"' + tileStyle + (disabled ? ' disabled aria-disabled="true"' : '') + '>' +
          '<div class="tile-banner">' + trackBadge(t, "tile-icon", 21) + chip + '</div>' +
          '<div class="tile-body">' +
            '<h3>' + esc(t.name) + '</h3>' +
            '<div class="meta">' + meta + '</div>' +
            '<div class="bar"><i style="width:' + tpct + '%"></i></div>' +
          '</div>' +
        '</button>'
      );
      if (!disabled) tile.addEventListener("click", function () { goTrack(t.id); });
      grid.appendChild(tile);
    });
    root.appendChild(grid);

    root.appendChild(h('<div class="section-head feed-head"><h2>Every subspecialty, in one scroll</h2><span class="hint">Same tracks, laid out for a longer read</span></div>'));

    TRACKS.forEach(function (t) {
      var mods = modulesFor(t.id);
      var cardCount = mods.reduce(function (n, m) { return n + (m.cards || []).length; }, 0);
      var s = aggregateStats(mods);
      var tpct = s.total ? Math.round((s.mastered / s.total) * 100) : 0;
      var disabled = mods.length === 0;
      var category = t.category || "subspecialty";
      var rowStyle = t.color ? ' style="--track-color:' + t.color + '"' : "";
      var anchors = topicAnchors(mods[0]);
      var row = h(
        '<button class="feature-row" type="button" data-category="' + category + '" data-track="' + t.id + '"' + rowStyle + (disabled ? ' disabled aria-disabled="true"' : '') + '>' +
          trackBadge(t, "fr-icon", 24) +
          '<div class="fr-body">' +
            '<h3>' + esc(t.name) + '</h3>' +
            (disabled ? '<div class="fr-anchors">Coming soon</div>' : '<div class="fr-anchors">' + esc(anchors || (mods.length + ' module' + (mods.length === 1 ? '' : 's') + ' · ' + cardCount + ' cards')) + '</div>') +
          '</div>' +
          (disabled ? '' :
            '<div class="fr-stats">' +
              '<div class="fr-progress"><div class="fr-pct">' + tpct + '% mastered</div><div class="bar"><i style="width:' + tpct + '%"></i></div></div>' +
              '<span class="fr-pill">' + s.due + ' due</span>' +
              '<span class="fr-cta">Study module &rarr;</span>' +
            '</div>'
          ) +
        '</button>'
      );
      if (!disabled) row.addEventListener("click", function () { goTrack(t.id); });
      list.appendChild(row);
    });
    root.appendChild(list);
    applyHomeFilter(grid, list);
    initHomeScrollspy(list, filterBar);
  }

  /* First 3-4 anatomy note titles as a compact "high-yield anchors" line,
     e.g. "Three compartments, one organ - The clinically dangerous...".
     Never fabricated -- empty if the module has no anatomy notes yet. */
  function topicAnchors(mod) {
    if (!mod || !mod.anatomy || !mod.anatomy.notes) return "";
    return mod.anatomy.notes.slice(0, 4).map(function (n) { return n.title; }).filter(Boolean).join(" • ");
  }
  /* Scrollspy: as feature-rows cross a band near the top of the viewport,
     highlight the filter pill matching that row's category. Visual sync
     only -- it never changes the actual filter, just where the eye already
     is, so clicking a pill still explicitly filters as before. */
  var homeScrollspyIO = null;
  function initHomeScrollspy(list, filterBar) {
    if (homeScrollspyIO) { homeScrollspyIO.disconnect(); homeScrollspyIO = null; }
    if (!("IntersectionObserver" in window)) return;
    var rows = Array.prototype.slice.call(list.querySelectorAll(".feature-row:not(:disabled)"));
    if (!rows.length) return;
    homeScrollspyIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var cat = entry.target.getAttribute("data-category");
        filterBar.querySelectorAll(".filter-pill").forEach(function (p) {
          p.classList.toggle("spy-active", p.getAttribute("data-filter") === cat);
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
    rows.forEach(function (r) { homeScrollspyIO.observe(r); });
  }

  /* ---------- TRACK (module list, when a track has >1 module) ---------- */
  function renderTrack(trackId) {
    var track = TRACKS.filter(function (t) { return t.id === trackId; })[0];
    var mods = modulesFor(trackId);
    var root = el("screen-track");
    root.innerHTML = "";
    var crumb = h('<button class="crumb">&larr; All topics</button>');
    crumb.addEventListener("click", goHome);
    root.appendChild(crumb);
    var trackStyle = track && track.color ? ' style="--track-color:' + track.color + '"' : "";
    root.appendChild(h(
      '<div class="track-head"' + trackStyle + '>' +
        '<div class="eyebrow-row">' + trackBadge(track, "eyebrow-icon", 15) + '<span class="eyebrow">Subspecialty track</span></div>' +
        '<h1 class="h-lead">' + esc(track ? track.name : trackId) + '</h1>' +
      '</div>'
    ));

    var list = h('<div class="mod-list"' + trackStyle + '></div>');
    mods.forEach(function (m) {
      var s = window.SRS.stats(m.id, m.cards || []);
      var pct = s.total ? Math.round((s.mastered / s.total) * 100) : 0;
      var row = h(
        '<button class="mod-row" type="button">' +
          '<div class="row-top"><h3>' + esc(m.title) + '</h3></div>' +
          '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
        '</button>'
      );
      row.addEventListener("click", function () { goModule(m.id); });
      list.appendChild(row);
    });
    root.appendChild(list);
  }

  /* ---------- ALL DUE CARDS (cross-module study, two options only) ---------- */
  function tagCard(c, m) {
    if (!c._owner) { c._owner = m.id; c._ownerTrack = m.trackAbbr; c._ownerTitle = m.title; }
    return c;
  }
  function allDueCardsTagged() {
    var out = [];
    window.JEFFENT.modules.forEach(function (m) {
      window.SRS.dueCards(m.id, m.cards || []).forEach(function (c) { out.push(tagCard(c, m)); });
    });
    return out;
  }
  function allCardsTagged() {
    var out = [];
    window.JEFFENT.modules.forEach(function (m) {
      (m.cards || []).forEach(function (c) { out.push(tagCard(c, m)); });
    });
    return out;
  }

  function renderStudyAllHeader(root) {
    var crumb = h('<button class="crumb">&larr; All topics</button>');
    crumb.addEventListener("click", goHome);
    root.appendChild(crumb);
    root.appendChild(h('<div class="eyebrow">Every subspecialty, one queue</div>'));
    root.appendChild(h('<h1 class="h-lead">All Due Cards</h1>'));
  }

  function renderStudyAllIntro() {
    var root = el("screen-study");
    root.innerHTML = "";
    renderStudyAllHeader(root);
    root.appendChild(h('<p class="sub">Every due card across all your topics, in one queue.</p>'));

    var allMods = window.JEFFENT.modules;
    var agg = aggregateStats(allMods);
    var cta = h(
      '<div class="study-cta" style="margin-top:22px">' +
        '<div><div class="n">' + agg.total + ' cards total · ' + agg.due + ' due today</div>' +
        '<div class="cta-sub">Cards pulled from every module.</div></div>' +
        '<div class="cta-actions"></div>' +
      '</div>'
    );
    var actions = cta.querySelector(".cta-actions");
    var b1 = h('<button class="btn">Study due (' + agg.due + ') &rarr;</button>');
    b1.addEventListener("click", function () { startAllSession("due"); });
    var b2 = h('<button class="btn ghost">Review all ' + agg.total + '</button>');
    b2.addEventListener("click", function () { startAllSession("all"); });
    actions.appendChild(b1); actions.appendChild(b2);
    root.appendChild(cta);

    root.appendChild(h('<div class="section-head" style="margin-top:34px"><h2>Or study one topic at a time</h2></div>'));
    var list = h('<div class="mod-list"></div>');
    allMods.forEach(function (m) {
      var s = window.SRS.stats(m.id, m.cards || []);
      if (s.total === 0) return;
      var mTrack = trackById(m.track);
      var mRowStyle = mTrack && mTrack.color ? ' style="--track-color:' + mTrack.color + '"' : "";
      var row = h(
        '<button class="mod-row" type="button"' + mRowStyle + '>' +
          '<div class="row-top"><h3>' + esc(m.title) + '</h3><span class="status-chip">' + s.due + ' due</span></div>' +
          '<p>' + esc(m.trackName || m.track) + ' · ' + s.total + ' cards</p>' +
        '</button>'
      );
      row.addEventListener("click", function () { startTopicSession(m); });
      list.appendChild(row);
    });
    root.appendChild(list);
  }

  function startTopicSession(mod) {
    var root = el("screen-study");
    root.innerHTML = "";
    renderStudyAllHeader(root);
    var body = h('<div class="study-all-body"></div>');
    root.appendChild(body);
    startSession(body, mod, "due");
  }

  /* The crumb/heading stay mounted outside the session body so "← All
   * topics" remains reachable throughout a long cross-module deck, not
   * just after the deck is finished. */
  function startAllSession(mode) {
    var cards = mode === "due" ? allDueCardsTagged() : allCardsTagged();
    var virtualMod = { id: "__all__", title: "All Due Cards", trackName: "All topics", cards: cards };
    var root = el("screen-study");
    root.innerHTML = "";
    renderStudyAllHeader(root);
    var body = h('<div class="study-all-body"></div>');
    root.appendChild(body);
    startSession(body, virtualMod, mode, cards);
  }

  /* ---------- MODULE (tabbed) ---------- */
  function availableTabs(mod) {
    var a = mod.anatomy || {}, out = [];
    if ((a.notes && a.notes.length) || (a.diagrams && a.diagrams.length) || (a.stacks && a.stacks.length)) out.push("anatomy");
    if (((mod.clinical || {}).blocks || []).length) out.push("clinical");
    if ((mod.cases || []).length) out.push("cases");
    if ((mod.cards || []).length) out.push("cards");
    return out.length ? out : ["anatomy"];
  }

  function renderModule(moduleId) {
    var mod = window.JEFFENT.get(moduleId);
    var mods = modulesFor(mod.track);
    var root = el("screen-module");
    root.innerHTML = "";

    var modTrack = trackById(mod.track);
    var modHeadStyle = modTrack && modTrack.color ? ' style="--track-color:' + modTrack.color + '"' : "";
    /* Set --track-color on the whole screen (not just .mod-head) so every
       descendant -- case cards, the anatomy hero/grid, roadmap-style rows --
       can pick up this module's track color via var(--track-color, ...)
       fallbacks without each needing its own inline style. */
    if (modTrack && modTrack.color) root.style.setProperty("--track-color", modTrack.color);
    else root.style.removeProperty("--track-color");

    /* One unified sticky header: breadcrumb + title + sub-tabs pinned
       together under the topbar as a single block, rather than a sticky
       breadcrumb strip, a plain title that scrolls away, and a second
       sticky tab strip re-appearing below it (which used to read as the
       title being awkwardly sandwiched between two translucent bars). */
    var pageHead = h('<div class="page-head" id="modPageHead"></div>');
    var crumb = h('<button class="crumb">&larr; All topics</button>');
    crumb.addEventListener("click", mods.length > 1 ? function () { goTrack(mod.track); } : goHome);
    if (mods.length > 1) crumb.textContent = "← " + (mod.trackName || mod.track);
    pageHead.appendChild(crumb);
    pageHead.appendChild(h('<span class="crumb-sep">&rsaquo;</span>'));
    var phEyebrow = h('<button type="button" class="ph-eyebrow">' + trackBadge(modTrack, "eyebrow-icon", 11) + '<span class="eyebrow">' + esc(mod.trackName || mod.track) + '</span></button>');
    phEyebrow.addEventListener("click", function () { goTrack(mod.track); });
    pageHead.appendChild(phEyebrow);
    pageHead.appendChild(h('<span class="crumb-sep">&rsaquo;</span>'));
    var phCurrent = h('<button type="button" class="ph-current" id="phCurrent">' + esc(mod.title) + '</button>');
    phCurrent.addEventListener("click", function () {
      state.anatomyTopic = null;
      renderModule(mod.id);
    });
    pageHead.appendChild(phCurrent);
    /* Active Recall Mode is paused (feature complete, just not exposed in
     * the UI right now) -- re-enable by restoring this call, and the
     * initActiveRecall() call in boot() below. */
    if (ACTIVE_RECALL_ENABLED && mod.id === ACTIVE_RECALL_MODULE_ID) appendActiveRecallControls(pageHead, mod);

    /* The subspecialty name + icon already appear one line up in the
       breadcrumb (ph-eyebrow) -- repeating it here as its own eyebrow row
       read as a duplicated label directly above the H1. */
    var modHead = h(
      '<div class="mod-head"' + modHeadStyle + '>' +
        '<div>' +
          '<h1>' + esc(mod.title) + '</h1>' +
        '</div>' +
      '</div>'
    );

    var clinicalBuilder = mod.id === PROCEDURES_MODULE_ID ? buildProceduresPane : buildClinicalPane;
    var builders = { anatomy: buildAnatomyPane, clinical: clinicalBuilder, cases: buildCasesPane, cards: buildCardsPane };
    var avail = availableTabs(mod);
    if (avail.indexOf(state.tab) === -1) state.tab = avail[0];
    var tabbarWrap = h('<div class="tabs-sticky"></div>');
    var tabbar = h('<div class="tabs" role="tablist"><i class="tab-pill-indicator"></i></div>');
    avail.forEach(function (t) {
      var btn = h('<button class="tab" role="tab" id="tab-' + t + '" aria-controls="pane-' + t + '" aria-selected="' + (t === state.tab ? "true" : "false") + '" data-tab="' + t + '">' + TAB_LABELS[t] + '</button>');
      btn.addEventListener("click", function () {
        state.tab = t; saveLastTab(moduleId, t);
        renderTabState(root, mod);
      });
      tabbar.appendChild(btn);
    });
    tabbarWrap.appendChild(tabbar);

    /* Breadcrumb, title, and sub-tabs now live inside one sticky block so
       they read as a single clean header instead of three separately
       floating strips. */
    var stickyHead = h('<div class="mod-sticky-head"></div>');
    stickyHead.appendChild(pageHead);
    stickyHead.appendChild(modHead);
    stickyHead.appendChild(tabbarWrap);
    root.appendChild(stickyHead);

    /* stickyHead.offsetHeight reads 0 here (and on any resize while the
     * module screen is briefly [hidden] mid-render) since renderModule()
     * builds this DOM before showScreen() unhides it -- a synchronous
     * measurement would pin --head-h at "0px" (a *set* value, so the
     * var()'s fallback never kicks in), which would make anything below
     * the header (e.g. the clinical-pane side nav) stick too high, under
     * the header instead of below it. Deferring to the next frame (and
     * re-measuring on resize, since the header's own height changes at
     * the 640px breakpoint) keeps that offset accurate. */
    function syncHeadHeightVar() {
      document.documentElement.style.setProperty("--head-h", stickyHead.offsetHeight + "px");
    }
    requestAnimationFrame(syncHeadHeightVar);
    if (tabIndicatorResizeHandler) window.removeEventListener("resize", tabIndicatorResizeHandler);
    tabIndicatorResizeHandler = function () { syncHeadHeightVar(); moveTabIndicator(tabbar); };
    window.addEventListener("resize", tabIndicatorResizeHandler);

    var panes = h('<div class="tab-panes"></div>');
    avail.forEach(function (t) { panes.appendChild(builders[t](mod)); });
    panes.querySelectorAll(".tabpane").forEach(function (p) {
      p.id = "pane-" + p.dataset.pane;
      p.setAttribute("role", "tabpanel");
      p.setAttribute("aria-labelledby", "tab-" + p.dataset.pane);
    });
    root.appendChild(panes);

    renderTabState(root, mod);
  }

  function renderTabState(root, mod) {
    root.querySelectorAll(".tab").forEach(function (b) {
      b.setAttribute("aria-selected", b.dataset.tab === state.tab ? "true" : "false");
    });
    root.querySelectorAll(".tabpane").forEach(function (p) {
      p.classList.toggle("active", p.dataset.pane === state.tab);
    });
    var tabbar = root.querySelector(".tabs");
    if (tabbar) {
      moveTabIndicator(tabbar);
      /* The very first render can happen while the module screen is still
         [hidden] (renderModule() runs before showScreen() unhides it), when
         every offset measurement reads 0 -- re-measure one frame later so
         the indicator still lands correctly instead of collapsing to 0x0. */
      requestAnimationFrame(function () { moveTabIndicator(tabbar); });
    }
  }

  /* Glides the sub-tab bar's pill indicator behind whichever tab is active
   * -- same measured left/top/width/height technique as the home filter
   * bar's moveFilterIndicator(), just keyed off aria-selected instead of a
   * .active class. */
  var tabIndicatorResizeHandler = null;
  function moveTabIndicator(tabbar) {
    var indicator = tabbar.querySelector(".tab-pill-indicator");
    var activeTab = tabbar.querySelector('.tab[aria-selected="true"]');
    if (!indicator || !activeTab) return;
    indicator.style.width = activeTab.offsetWidth + "px";
    indicator.style.height = activeTab.offsetHeight + "px";
    indicator.style.left = activeTab.offsetLeft + "px";
    indicator.style.top = activeTab.offsetTop + "px";
  }

  function emptyNote(text) { return h('<p class="empty-note">' + esc(text) + '</p>'); }

  /* ---- Active Recall Mode (trial: Facial Plastics & Trauma only) ----
   * A floating toggle in the sticky page-head strip. When on, drug names
   * and diagnostic percentage cutoffs in the Anatomy/Clinical prose get
   * wrapped as blurred "spoiler" pills a learner has to actively recall
   * before revealing -- rather than letting the answer sit in view while
   * reading. Toggling re-renders the whole module screen (cheap here) so
   * on/off never needs separate mask/unmask bookkeeping. */
  function appendActiveRecallControls(pageHead, mod) {
    var btn = h(
      '<button type="button" class="recall-fab' + (state.activeRecall ? " active" : "") + '" aria-pressed="' + (state.activeRecall ? "true" : "false") + '">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>' +
        '<span>Active Recall Mode</span>' +
      '</button>'
    );
    btn.addEventListener("click", function () {
      state.activeRecall = !state.activeRecall;
      saveActiveRecall(state.activeRecall);
      renderModule(mod.id);
    });
    pageHead.appendChild(btn);
    if (state.activeRecall) {
      var revealAll = h('<button type="button" class="recall-reveal-all" title="Shift+R">Reveal all</button>');
      revealAll.addEventListener("click", revealAllRecallMasks);
      pageHead.appendChild(revealAll);
    }
  }

  function revealAllRecallMasks() {
    document.querySelectorAll(".recall-mask").forEach(function (s) { s.classList.add("revealed"); });
  }

  var recallMaskRegex = null;
  function buildRecallRegex() {
    if (recallMaskRegex) return recallMaskRegex;
    var terms = ACTIVE_RECALL_DRUGS.map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); });
    var drugPattern = "\\b(?:" + terms.join("|") + ")\\b";
    var cutoffPattern = "[<>]\\s?\\d{1,3}%(?:\\s+(?:ENoG|on\\s+[A-Za-z]+))?";
    recallMaskRegex = new RegExp("(" + drugPattern + ")|(" + cutoffPattern + ")", "gi");
    return recallMaskRegex;
  }

  /* Walks every text node under container, wrapping regex matches in a
   * clickable/keyboard-focusable blurred pill. Skips text already inside a
   * mask (re-render safe) and script/style nodes. */
  function applyActiveRecallMask(container) {
    if (!container) return;
    var re = buildRecallRegex();
    var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
    var targets = [];
    var node;
    while ((node = walker.nextNode())) {
      var p = node.parentNode;
      if (!p || p.nodeName === "SCRIPT" || p.nodeName === "STYLE") continue;
      if (p.classList && p.classList.contains("recall-mask")) continue;
      re.lastIndex = 0;
      if (re.test(node.nodeValue)) targets.push(node);
    }
    targets.forEach(function (tn) {
      var text = tn.nodeValue;
      re.lastIndex = 0;
      var frag = document.createDocumentFragment();
      var last = 0, m;
      while ((m = re.exec(text))) {
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        var span = document.createElement("span");
        span.className = "recall-mask";
        span.tabIndex = 0;
        span.setAttribute("role", "button");
        span.setAttribute("aria-label", "Masked term, activate to reveal");
        span.textContent = m[0];
        frag.appendChild(span);
        last = re.lastIndex;
        if (m.index === re.lastIndex) re.lastIndex++;
      }
      if (last === 0) return;
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      tn.parentNode.replaceChild(frag, tn);
    });
  }

  /* Click-to-reveal delegation + the Shift+R "reveal all" shortcut, wired
   * once at boot (works across every module re-render). */
  function initActiveRecall() {
    state.activeRecall = loadActiveRecall();
    document.addEventListener("click", function (e) {
      var m = e.target.closest && e.target.closest(".recall-mask");
      if (m) m.classList.toggle("revealed");
    });
    document.addEventListener("keydown", function (e) {
      if (document.activeElement && document.activeElement.classList &&
          document.activeElement.classList.contains("recall-mask") && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        document.activeElement.classList.toggle("revealed");
        return;
      }
      var tag = e.target && e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.shiftKey && (e.key === "R" || e.key === "r") &&
          state.screen === "module" && state.moduleId === ACTIVE_RECALL_MODULE_ID && state.activeRecall) {
        revealAllRecallMasks();
      }
    });
  }

  /* ---- Anatomy tab ----
   * Landing view is a clickable topic list (one card per note, one per
   * diagram), each opens into its own full-width detail page instead of
   * being squeezed into a two-column layout. state.anatomyTopic tracks which
   * detail page (if any) is open; renderAnatomyPane re-renders the pane in
   * place so tab switches don't need a full module re-render. */
  function buildAnatomyPane(mod) {
    var pane = h('<div class="tabpane" data-pane="anatomy"></div>');
    renderAnatomyPane(pane, mod);
    return pane;
  }

  function renderAnatomyPane(pane, mod) {
    pane.innerHTML = "";
    var a = mod.anatomy || {};
    var notes = a.notes || [], diagrams = a.diagrams || [], stacks = a.stacks || [];
    if (notes.length === 0 && diagrams.length === 0 && stacks.length === 0) {
      pane.appendChild(emptyNote("Anatomy content for this module is in progress."));
      return;
    }
    var topic = state.anatomyTopic;
    if (topic && topic.kind === "note" && notes[topic.index]) {
      var noteTitle = notes[topic.index].title;
      var built = buildAnatomyDetail(mod, pane, notes, diagrams, topic, noteTitle, function () {
        return h('<div class="anatomy-detail-body" data-anchor="anatomy-note-' + topic.index + '">' + notes[topic.index].html + '</div>');
      }, false, notes[topic.index].tagline);
      appendRelatedCardsCta(built.main, mod, noteTitle, topic);
      appendNextLessonNav(built.main, mod, pane, notes, diagrams, topic);
      appendFigureSources(built.main);
      linkGlossaryTerms(built.main);
      enhanceReferenceTables(built.main);
      if (mod.id === ACTIVE_RECALL_MODULE_ID && state.activeRecall) applyActiveRecallMask(built.main);
      pane.appendChild(built.shell);
      return;
    }
    if (topic && topic.kind === "diagram" && diagrams[topic.index]) {
      var dgTitle = diagrams[topic.index].title;
      var built2 = buildAnatomyDetail(mod, pane, notes, diagrams, topic, dgTitle, function () {
        var dgPanel = buildDiagramPanel(diagrams[topic.index]);
        dgPanel.classList.add("anatomy-detail-body");
        return dgPanel;
      }, true, diagrams[topic.index].tagline);
      appendRelatedCardsCta(built2.main, mod, dgTitle, topic);
      appendNextLessonNav(built2.main, mod, pane, notes, diagrams, topic);
      linkGlossaryTerms(built2.main);
      enhanceReferenceTables(built2.main);
      pane.appendChild(built2.shell);
      return;
    }
    pane.appendChild(buildAnatomyTopicList(mod, pane, notes, diagrams));
    stacks.forEach(function (st) { pane.appendChild(buildStackPanel(st)); });
  }

  /* Flat, ordered list of every anatomy "lesson" (notes then diagrams, same
   * order as the overview grid) -- backs both the lesson sidebar and the
   * next-lesson footer so they always agree on sequence. */
  function combinedAnatomyList(notes, diagrams) {
    var list = [];
    notes.forEach(function (n, i) { list.push({ kind: "note", index: i, title: n.title }); });
    diagrams.forEach(function (d, i) { list.push({ kind: "diagram", index: i, title: d.title }); });
    return list;
  }
  function anatomyListPos(list, topic) {
    for (var i = 0; i < list.length; i++) { if (list[i].kind === topic.kind && list[i].index === topic.index) return i; }
    return -1;
  }

  /* skipTitle: the diagram detail body already renders its own <h3> title via
   * buildDiagramPanel, so the lesson header should not duplicate it.
   * tagline: optional one-line "what this page covers" caption, shown at the
   * top-right of the lesson header, beside the note/diagram kicker.
   * Returns { shell, main } -- shell is what the caller appends to the pane
   * (includes the lesson sidebar, when there's more than one lesson to jump
   * between); main is the content column, so callers can keep appending
   * (related-cards CTA, figure sources, next-lesson nav) after the body. */
  function buildAnatomyDetail(mod, pane, notes, diagrams, topic, title, buildBody, skipTitle, tagline) {
    var list = combinedAnatomyList(notes, diagrams);
    var trackObj = trackById(mod.track);
    var trackStyle = trackObj && trackObj.color ? ' style="--track-color:' + trackObj.color + '"' : "";

    var shell = h('<div class="anatomy-detail lesson-shell"></div>');

    if (list.length > 1) {
      var nav = h('<nav class="lesson-nav" aria-label="Other anatomy lessons in this subspecialty"' + trackStyle + '></nav>');
      nav.appendChild(h('<div class="lesson-nav-label mono">' + esc(mod.trackName || mod.track) + ' &middot; Anatomy</div>'));
      var navList = h('<div class="lesson-nav-list"></div>');
      var lastKind = null;
      list.forEach(function (item) {
        if (item.kind !== lastKind) {
          navList.appendChild(h('<div class="lesson-nav-group">' + (item.kind === "note" ? "Notes" : "Diagrams") + '</div>'));
          lastKind = item.kind;
        }
        var isActive = item.kind === topic.kind && item.index === topic.index;
        var btn = h(
          '<button type="button" class="lesson-nav-item' + (isActive ? ' active' : '') + '"' + (isActive ? ' aria-current="page"' : '') + '>' +
            '<span class="lesson-nav-dot"></span><span class="lesson-nav-item-title">' + esc(item.title) + '</span>' +
          '</button>'
        );
        if (!isActive) {
          btn.addEventListener("click", function () {
            state.anatomyTopic = { kind: item.kind, index: item.index };
            renderAnatomyPane(pane, mod);
            window.scrollTo(0, 0);
          });
        }
        navList.appendChild(btn);
      });
      nav.appendChild(navList);
      shell.appendChild(nav);
    }

    var main = h('<div class="lesson-main"></div>');
    var back = h('<button type="button" class="crumb anatomy-back">← Back to anatomy overview</button>');
    back.addEventListener("click", function () {
      state.anatomyTopic = null;
      renderAnatomyPane(pane, mod);
      setStickyCurrent(mod.title);
    });
    main.appendChild(back);

    var hero = h('<div class="lesson-hero"' + trackStyle + '></div>');
    var heroTop = h('<div class="lesson-hero-top"></div>');
    heroTop.appendChild(h(
      '<span class="lesson-kicker mono">' + esc(topic.kind === "note" ? "Anatomy note" : "Anatomy diagram") + '</span>'
    ));

    /* Body is built up front (rather than after the hero, as before) so the
     * hero's action row can tell whether there's a figure to offer a split
     * view for, and so the audio brief has real text to read without a
     * second DOM pass. */
    var bodyEl = buildBody();
    var item = topic.kind === "note" ? notes[topic.index] : diagrams[topic.index];
    var briefText = item ? (item.html ? stripHtml(item.html) : (item.note || "")) : "";
    var hasFigure = !!bodyEl.querySelector(".note-fig");

    var heroActions = h('<div class="lesson-hero-actions"></div>');
    heroActions.appendChild(bookmarkButton({
      id: mod.id + "::anatomy::" + topic.kind + topic.index,
      title: title, moduleId: mod.id, moduleTitle: mod.title, tab: "anatomy",
      snippet: briefText.slice(0, 220)
    }));
    if (briefText) heroActions.appendChild(audioBriefButton(function () { return briefText; }, title));
    if (hasFigure) {
      var splitBtn = h('<button type="button" class="lesson-split-btn" data-tip="Split view" aria-pressed="false" aria-label="Toggle split view"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16"/></svg></button>');
      var splitOn = loadSplitViewPref();
      if (splitOn) splitBtn.classList.add("active");
      splitBtn.setAttribute("aria-pressed", splitOn ? "true" : "false");
      splitBtn.addEventListener("click", function () {
        var on = !bodyEl.classList.contains("split-mode");
        applySplitView(bodyEl, on);
        splitBtn.classList.toggle("active", on);
        splitBtn.setAttribute("aria-pressed", on ? "true" : "false");
        saveSplitViewPref(on);
      });
      heroActions.appendChild(splitBtn);
      if (splitOn) applySplitView(bodyEl, true);
    }
    heroTop.appendChild(heroActions);

    if (tagline) {
      /* tagline is authored as up to 3 short key structures/terms joined by
       * " · " (e.g. "Zygoma · Four-point articulation · ZMC fracture") --
       * rendered as compact keyword chips instead of the old full sentence
       * so the header reads as an at-a-glance topic tag, not a caption. */
      var kwWrap = h('<span class="lesson-tagline"></span>');
      tagline.split(/\s*·\s*/).slice(0, 3).forEach(function (kw) {
        if (kw) kwWrap.appendChild(h('<span class="lesson-tagline-kw">' + esc(kw) + '</span>'));
      });
      heroTop.appendChild(kwWrap);
    }
    hero.appendChild(heroTop);
    if (!skipTitle) hero.appendChild(h('<h2 class="anatomy-detail-title lesson-title">' + esc(title) + '</h2>'));
    /* Same "next lesson" jump as the footer nav, offered here too so a
     * learner working through a module in order doesn't have to scroll past
     * the whole note/diagram body just to advance. Appended last (after the
     * title) and pinned to the hero's bottom-right corner via CSS, so it
     * never crowds or displaces the title above it. */
    if (list.length > 1) {
      var topPos = anatomyListPos(list, topic);
      if (topPos !== -1) {
        var topNext = list[(topPos + 1) % list.length];
        var topNextBtn = h(
          '<button type="button" class="lesson-next-top">' +
            '<span class="lesson-next-top-title">' + esc(topNext.title) + '</span>' +
            '<span aria-hidden="true">&rarr;</span>' +
          '</button>'
        );
        topNextBtn.addEventListener("click", function () {
          state.anatomyTopic = { kind: topNext.kind, index: topNext.index };
          renderAnatomyPane(pane, mod);
          window.scrollTo(0, 0);
        });
        hero.appendChild(topNextBtn);
        hero.classList.add("has-next-top");
      }
    }
    main.appendChild(hero);

    main.appendChild(bodyEl);
    shell.appendChild(main);
    setStickyCurrent(title);
    return { shell: shell, main: main };
  }

  /* Footer nav: jump straight to the next lesson in this module's Notes+
   * Diagrams sequence, wrapping back to the first after the last. Omitted
   * entirely when there's nothing else to go to. */
  function appendNextLessonNav(main, mod, pane, notes, diagrams, topic) {
    var list = combinedAnatomyList(notes, diagrams);
    if (list.length < 2) return;
    var pos = anatomyListPos(list, topic);
    if (pos === -1) return;
    var next = list[(pos + 1) % list.length];
    var btn = h(
      '<button type="button" class="lesson-next">' +
        '<span class="lesson-next-copy"><span class="lesson-next-label">Next lesson</span>' +
        '<span class="lesson-next-title">' + esc(next.title) + '</span></span>' +
        '<span class="lesson-next-arrow" aria-hidden="true">&rarr;</span>' +
      '</button>'
    );
    btn.addEventListener("click", function () {
      state.anatomyTopic = { kind: next.kind, index: next.index };
      renderAnatomyPane(pane, mod);
      window.scrollTo(0, 0);
    });
    main.appendChild(btn);
  }

  /* Updates the slim sticky strip's current-section label, when present. */
  function setStickyCurrent(text) {
    var node = el("phCurrent");
    if (node) node.textContent = text;
  }

  /* ---- "Test yourself" -- link an anatomy note/diagram to flashcards that
   * touch the same topic, anywhere in the app (not just this module), so a
   * learner can drill straight from the anatomy page instead of hunting
   * through the Cards tab. Matching is a lightweight keyword heuristic
   * (topic title -> significant words -> card tags/front text) rather than
   * hand-tagged links, so it works for every module with no content changes. */
  var TOPIC_STOPWORDS = ["the","and","a","an","of","in","on","at","for","with","its","vs","essentials","glance","why","matters","concept","layers"];
  function relatedCardsForTopic(title) {
    var words = String(title || "").toLowerCase()
      .replace(/[’'"()]/g, "")
      .split(/[\s\-,&/]+/)
      .filter(function (w) { return w.length > 2 && TOPIC_STOPWORDS.indexOf(w) === -1; });
    if (!words.length) return [];
    var res = [];
    allCardsTagged().forEach(function (c) {
      var hay = ((c.tags || []).join(" ") + " " + (c.front || "")).toLowerCase();
      var hit = words.some(function (w) {
        var re = new RegExp("\\b" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b");
        return re.test(hay);
      });
      if (hit) res.push(c);
    });
    return res;
  }

  /* "Test yourself" banner: a gradient-bordered card with a one-click
   * "Quick reveal" mini flashcard (the first related card, answerable right
   * here without leaving the page) plus a prominent CTA into the full
   * related-cards study session. */
  function appendRelatedCardsCta(wrap, mod, title, topicRef) {
    var related = relatedCardsForTopic(title);
    if (!related.length) return;
    var sample = related[0];
    var sampleOwner = cardOwnerId(sample, mod.id);
    var n = related.length;
    var cta = h(
      '<div class="topic-study-cta">' +
        '<div class="tsc-head">' +
          '<span class="tsc-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/></svg></span>' +
          '<div class="tsc-head-copy"><div class="n">Test yourself</div><div class="cta-sub">' + n + ' flashcard' + (n === 1 ? '' : 's') + ' touching on this topic, from across the app</div></div>' +
        '</div>' +
        '<div class="tsc-quick">' +
          '<div class="tsc-quick-label mono">Quick reveal</div>' +
          '<div class="tsc-quick-front">' + effectiveFront(sampleOwner, sample) + '</div>' +
          '<div class="tsc-quick-back hidden">' + effectiveBack(sampleOwner, sample) + '</div>' +
          '<button type="button" class="tsc-reveal-btn">Reveal answer</button>' +
        '</div>' +
        '<button type="button" class="btn tsc-launch">Launch ' + n + ' Flashcard' + (n === 1 ? '' : 's') + ' &rarr;</button>' +
      '</div>'
    );
    var quick = cta.querySelector(".tsc-quick");
    var back = quick.querySelector(".tsc-quick-back");
    var revealBtn = quick.querySelector(".tsc-reveal-btn");
    revealBtn.addEventListener("click", function () {
      back.classList.remove("hidden");
      quick.classList.add("revealed");
      revealBtn.remove();
    });
    cta.querySelector(".tsc-launch").addEventListener("click", function () {
      startAnatomyTopicSession(mod, related, title, topicRef);
    });
    wrap.appendChild(cta);
    linkGlossaryTerms(quick);
  }

  function appendFigureSources(wrap) {
    var figs = wrap.querySelectorAll("figure.note-fig[data-credit]");
    if (!figs.length) return;
    var box = h('<div class="fig-sources"></div>');
    box.appendChild(h('<div class="fig-sources-h">Figure sources</div>'));
    var ul = h("<ul></ul>");
    figs.forEach(function (f) { ul.appendChild(h("<li>" + esc(f.getAttribute("data-credit")) + "</li>")); });
    box.appendChild(ul); wrap.appendChild(box);
  }

  function startAnatomyTopicSession(mod, cards, title, topicRef) {
    state.screen = "study"; state.session = null;
    var root = el("screen-study");
    root.innerHTML = "";
    var crumb = h('<button class="crumb">&larr; Back to ' + esc(title) + '</button>');
    crumb.addEventListener("click", function () {
      state.screen = "module"; state.moduleId = mod.id; state.tab = "anatomy"; state.anatomyTopic = topicRef; state.session = null;
      renderModule(mod.id);
      showScreen("module");
    });
    root.appendChild(crumb);
    root.appendChild(h('<div class="eyebrow">Testing yourself on</div>'));
    root.appendChild(h('<h1 class="h-lead">' + esc(title) + '</h1>'));
    var body = h('<div class="study-all-body"></div>');
    root.appendChild(body);
    var virtualMod = { id: "__all__", title: title, trackName: mod.trackName || mod.track, cards: cards };
    startSession(body, virtualMod, "topic", cards);
    showScreen("study");
  }

  /* First real image src referenced inside a note's HTML, if any -- used
     as the card's media-slot thumbnail. Notes with no figure yet fall back
     to a tinted icon tile instead of a broken/missing image. */
  function firstImageSrc(html) {
    var m = /<img[^>]*\ssrc=['"]([^'"]+)['"]/.exec(html || "");
    return m ? m[1] : null;
  }
  function teaserOf(html, max) {
    var t = stripHtml(html);
    if (t.length > max) t = t.slice(0, max).replace(/\s+\S*$/, "") + "…";
    return t;
  }

  function buildAnatomyTopicList(mod, pane, notes, diagrams) {
    var wrap = h('<div class="anatomy-topics"></div>');
    var modTrack = trackById(mod.track);
    var trackStyle = modTrack && modTrack.color ? ' style="--track-color:' + modTrack.color + '"' : "";

    wrap.appendChild(h(
      '<div class="tg-hero"' + trackStyle + '>' +
        '<div><h2 class="tg-hero-title">Anatomy</h2>' +
        '<p class="tg-hero-sub">Every anatomy note and labeled diagram for ' + esc(mod.trackName || mod.track) + '.</p></div>' +
        '<div class="tg-hero-tags">' +
          (notes.length ? '<span class="tg-tag">' + notes.length + ' note' + (notes.length === 1 ? '' : 's') + '</span>' : '') +
          (diagrams.length ? '<span class="tg-tag">' + diagrams.length + ' diagram' + (diagrams.length === 1 ? '' : 's') + '</span>' : '') +
        '</div>' +
      '</div>'
    ));

    if (!notes.length && !diagrams.length) {
      wrap.appendChild(h('<div class="panel">' + emptyNote("Anatomy content for this module is in progress.").outerHTML + '</div>'));
      return wrap;
    }

    var filterBar = h(
      '<div class="tg-filter-bar">' +
        '<button type="button" class="tg-filter active" data-kind="all">All</button>' +
        (notes.length ? '<button type="button" class="tg-filter" data-kind="note">Notes</button>' : '') +
        (diagrams.length ? '<button type="button" class="tg-filter" data-kind="diagram">Diagrams</button>' : '') +
      '</div>'
    );
    wrap.appendChild(filterBar);

    /* Notes and diagrams render as two clearly separated sections (each with
       its own heading and grid) rather than one merged grid -- with uneven
       counts, mixing kinds meant a note card and a diagram card often ended
       up side by side in the same row, and with similarly-named topics
       (e.g. a "Facial nerve" note next to a "facial nerve's intratemporal
       course" diagram) that was easy to mistake for one card. */
    var sections = h('<div class="tg-sections"></div>');

    function buildGroup(kind, label, items, mapper) {
      var group = h(
        '<section class="tg-group" data-kind="' + kind + '">' +
          '<div class="tg-group-head"><span class="tg-group-dot ' + kind + '"></span>' +
          '<h3 class="tg-group-title">' + label + '</h3>' +
          '<span class="tg-group-rule" aria-hidden="true"></span>' +
          '<span class="tg-group-count mono">' + items.length + '</span></div>' +
          '<div class="tg-grid"></div>' +
        '</section>'
      );
      var grid = group.querySelector(".tg-grid");
      items.forEach(function (item, i) { grid.appendChild(mapper(item, i)); });
      sections.appendChild(group);
    }

    if (notes.length) {
      buildGroup("note", "Notes", notes, function (n, i) {
        var src = firstImageSrc(n.html);
        var media = src
          ? '<img src="' + esc(src) + '" alt="" loading="lazy">'
          : trackBadge(modTrack, "tg-placeholder-icon", 26);
        var card = h(
          '<button type="button" class="tg-card' + (src ? '' : ' no-img') + '" data-kind="note"' + trackStyle + '>' +
            '<div class="tg-media">' + media + '</div>' +
            '<div class="tg-body"><h3>' + esc(n.title) + '</h3><p>' + esc(teaserOf(n.html, 110)) + '</p>' +
            '<span class="tg-chip">Note</span></div>' +
          '</button>'
        );
        card.addEventListener("click", function () {
          state.anatomyTopic = { kind: "note", index: i };
          renderAnatomyPane(pane, mod);
        });
        return card;
      });
    }

    if (diagrams.length) {
      buildGroup("diagram", "Diagrams", diagrams, function (dg, i) {
        var src = dg.kind === "image" ? dg.src : null;
        var media = src
          ? '<img src="' + esc(src) + '" alt="" loading="lazy">'
          : trackBadge(modTrack, "tg-placeholder-icon", 26);
        var teaser = dg.note ? teaserOf(dg.note, 110) : "";
        var card = h(
          '<button type="button" class="tg-card' + (src ? '' : ' no-img') + '" data-kind="diagram"' + trackStyle + '>' +
            '<div class="tg-media">' + media + '</div>' +
            '<div class="tg-body"><h3>' + esc(dg.title) + '</h3>' + (teaser ? '<p>' + esc(teaser) + '</p>' : '<p>&nbsp;</p>') +
            '<span class="tg-chip diagram">Diagram</span></div>' +
          '</button>'
        );
        card.addEventListener("click", function () {
          state.anatomyTopic = { kind: "diagram", index: i };
          renderAnatomyPane(pane, mod);
        });
        return card;
      });
    }

    wrap.appendChild(sections);

    /* filter pills: animated sliding underline + fade transition, now
       toggling whole Notes/Diagrams sections rather than individual cards */
    var indicator = h('<span class="tg-filter-indicator"></span>');
    filterBar.appendChild(indicator);
    function positionIndicator() {
      var active = filterBar.querySelector(".tg-filter.active");
      if (!active) return;
      indicator.style.left = active.offsetLeft + "px";
      indicator.style.width = active.offsetWidth + "px";
    }
    setTimeout(positionIndicator, 0);
    filterBar.querySelectorAll(".tg-filter").forEach(function (pill) {
      pill.addEventListener("click", function () {
        filterBar.querySelectorAll(".tg-filter").forEach(function (p) { p.classList.toggle("active", p === pill); });
        positionIndicator();
        var kind = pill.dataset.kind;
        sections.classList.add("tg-grid-fade");
        setTimeout(function () {
          sections.querySelectorAll(".tg-group").forEach(function (group) {
            group.style.display = (kind === "all" || group.dataset.kind === kind) ? "" : "none";
          });
          sections.classList.remove("tg-grid-fade");
        }, 140);
      });
    });

    return wrap;
  }

  /* A labeled diagram: kind "svg" (author-drawn, default) or "image" (a real
   * raster image with percent-coordinate labels + a required source line). */
  /* A structure present in both halves of a side-by-side comparison diagram
   * (e.g. pediatric vs adult airway) can appear as two entries in `labels`
   * that share one `id` -- grouping them here means they get one shared
   * display number, one shared sidebar row, and reveal/hide together as a
   * single click target, with their descriptions combined once revealed,
   * instead of the old one-row-per-array-entry behavior (which left the
   * second same-id entry's row permanently stuck showing "?"). */
  function groupDiagramLabels(labels) {
    var order = [], byId = {};
    labels.forEach(function (L) {
      if (!byId[L.id]) { byId[L.id] = []; order.push(L.id); }
      byId[L.id].push(L);
    });
    function numberOf(id) { return order.indexOf(id) + 1; }
    function textOf(id) {
      var seen = {}, out = [];
      byId[id].forEach(function (L) { if (!seen[L.text]) { seen[L.text] = true; out.push(L.text); } });
      return out.join(" ");
    }
    return { order: order, byId: byId, numberOf: numberOf, textOf: textOf };
  }

  function buildDiagramPanel(dg) {
    var revealed = {};
    var grouped = groupDiagramLabels(dg.labels);
    var panel = h('<div class="panel" data-anchor="anatomy-diagram-' + esc(dg.id || "") + '"></div>');
    panel.appendChild(h('<h3>' + esc(dg.title) + '</h3>'));
    if (dg.note) panel.appendChild(h('<p class="sub" style="margin:6px 0 14px;font-size:13.5px">' + esc(dg.note) + '</p>'));

    var list = h('<ul class="label-list"></ul>');
    function updateRow(id, isOn) {
      var row = list.querySelector('[data-row="' + id + '"]');
      row.classList.toggle("revealed", isOn);
      row.querySelector("span").textContent = isOn ? grouped.textOf(id) : ("Landmark " + grouped.numberOf(id));
      row.querySelector("button").textContent = isOn ? "✓" : "?";
    }

    var built = dg.kind === "image" ? buildImageDiagramStage(dg, grouped, revealed, updateRow) : buildSvgDiagramStage(dg, grouped, revealed, updateRow);
    panel.appendChild(built.stage);

    var toggle = h('<button class="btn small">Reveal all labels</button>');
    panel.appendChild(toggle);

    grouped.order.forEach(function (id) {
      var num = grouped.numberOf(id);
      var li = h('<li data-row="' + id + '"><button aria-label="Reveal landmark ' + num + '">?</button><span>Landmark ' + num + '</span></li>');
      li.querySelector("button").addEventListener("click", function () { built.toggleLabel(id); });
      list.appendChild(li);
    });
    panel.appendChild(list);

    var allOn = false;
    toggle.addEventListener("click", function () {
      allOn = !allOn;
      grouped.order.forEach(function (id) { if (!!revealed[id] !== allOn) built.toggleLabel(id); });
      toggle.textContent = allOn ? "Hide all labels" : "Reveal all labels";
    });

    if (dg.kind === "image" && dg.source) panel.appendChild(h('<p class="media-source">Source: ' + esc(dg.source) + '</p>'));
    return panel;
  }

  /* kind:"svg", author-drawn shapes with point-anchored leader-line labels. */
  function buildSvgDiagramStage(dg, grouped, revealed, updateRow) {
    var hotspots = dg.labels.map(function (L) {
      var num = grouped.numberOf(L.id);
      return '<g class="hotspot" tabindex="0" role="button" aria-label="Reveal landmark ' + num + '" data-hot="' + L.id + '">' +
        '<circle cx="' + L.px + '" cy="' + L.py + '" r="9"/>' +
        '<text class="hot-num" x="' + L.px + '" y="' + (L.py + 3) + '" text-anchor="middle">' + num + '</text></g>';
    }).join("");

    var stage = h(
      '<div class="diagram-stage">' +
        '<svg viewBox="' + dg.viewBox + '" role="img" aria-label="' + esc(dg.title) + '">' +
          dg.base + hotspots +
        '</svg>' +
      '</div>'
    );

    function toggleLabel(id) {
      revealed[id] = !revealed[id];
      stage.querySelectorAll('[data-hot="' + id + '"]').forEach(function (g) { g.classList.toggle("revealed", revealed[id]); });
      updateRow(id, revealed[id]);
    }

    stage.querySelectorAll(".hotspot").forEach(function (g) {
      function act() { toggleLabel(g.dataset.hot); }
      g.addEventListener("click", act);
      g.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); act(); } });
    });

    return { stage: stage, toggleLabel: toggleLabel };
  }

  /* kind:"image", a real raster image; labels are percent-positioned dots
   * so they scale with the image at any size. */
  function buildImageDiagramStage(dg, grouped, revealed, updateRow) {
    var dots = dg.labels.map(function (L) {
      var num = grouped.numberOf(L.id);
      if (dg.occlude && L.box) {
        var b = L.box;
        return '<button type="button" class="img-occ" style="left:' + b.x + '%;top:' + b.y + '%;width:' + b.w + '%;height:' + b.h + '%" data-hot="' + L.id + '" aria-label="Reveal landmark ' + num + '"><span class="occ-num">' + num + '</span></button>';
      }
      return '<button type="button" class="img-dot" style="left:' + L.xPct + '%;top:' + L.yPct + '%" data-hot="' + L.id + '" aria-label="Reveal landmark ' + num + '">' +
        '<span class="dot">' + num + '</span>' +
      '</button>';
    }).join("");
    var stage = h(
      '<div class="diagram-stage image-stage">' +
        '<div class="img-frame">' +
          '<img class="zoomable" src="' + esc(dg.src) + '" alt="' + esc(dg.title) + '" loading="lazy" tabindex="0" role="button">' +
          dots +
        '</div>' +
      '</div>'
    );

    function toggleLabel(id) {
      revealed[id] = !revealed[id];
      stage.querySelectorAll('[data-hot="' + id + '"]').forEach(function (btn) { btn.classList.toggle("revealed", revealed[id]); });
      updateRow(id, revealed[id]);
    }

    stage.querySelectorAll(".img-dot, .img-occ").forEach(function (btn) {
      btn.addEventListener("click", function () { toggleLabel(btn.dataset.hot); });
    });

    return { stage: stage, toggleLabel: toggleLabel };
  }

  /* ---- CT stack viewer: a PACS-style scroller over an ordered slice stack ---- */
  function buildStackPanel(stack) {
    var idx = 0, showLabels = false;
    // Prefetch every slice up front so scrolling the stack is smooth.
    stack.slices.forEach(function (src) { var im = new Image(); im.src = src; });

    var panel = h('<div class="panel stack-panel"></div>');
    panel.appendChild(h('<h3>' + esc(stack.title) + '</h3>'));
    if (stack.note) panel.appendChild(h('<p class="sub" style="margin:6px 0 14px;font-size:13.5px">' + esc(stack.note) + '</p>'));

    var stage = h(
      '<div class="stack-stage" tabindex="0" role="group" aria-label="' + esc(stack.title) + ' slice viewer, use the slider or the up and down arrow keys to scroll">' +
        '<img class="stack-img" src="' + esc(stack.slices[0]) + '" alt="' + esc(stack.title) + ', slice 1 of ' + stack.slices.length + '">' +
        '<div class="stack-labels"></div>' +
      '</div>'
    );
    panel.appendChild(stage);
    var img = stage.querySelector(".stack-img");
    var labelsLayer = stage.querySelector(".stack-labels");

    var controls = h(
      '<div class="stack-controls">' +
        '<input type="range" class="stack-slider" min="0" max="' + (stack.slices.length - 1) + '" value="0" aria-label="' + esc(stack.title) + ' slice">' +
        '<div class="stack-meta">' +
          '<span class="stack-counter mono">Slice 1 / ' + stack.slices.length + '</span>' +
          '<button class="btn small stack-label-toggle" type="button" aria-pressed="false">Show labels</button>' +
        '</div>' +
      '</div>'
    );
    panel.appendChild(controls);
    panel.appendChild(h('<p class="media-source">Source: ' + esc(stack.source) + '</p>'));

    var slider = controls.querySelector(".stack-slider");
    var counter = controls.querySelector(".stack-counter");
    var labelBtn = controls.querySelector(".stack-label-toggle");

    function renderLabels() {
      labelsLayer.innerHTML = "";
      if (!showLabels) return;
      ((stack.labels && stack.labels[idx]) || []).forEach(function (L) {
        labelsLayer.appendChild(h(
          '<span class="stack-label" style="left:' + L.xPct + '%;top:' + L.yPct + '%">' +
            '<span class="dot"></span><span class="lbl-pill">' + esc(L.text) + '</span>' +
          '</span>'
        ));
      });
    }

    function goToSlice(n) {
      idx = Math.max(0, Math.min(stack.slices.length - 1, n));
      img.src = stack.slices[idx];
      img.alt = stack.title + ", slice " + (idx + 1) + " of " + stack.slices.length;
      slider.value = idx;
      counter.textContent = "Slice " + (idx + 1) + " / " + stack.slices.length;
      renderLabels();
    }

    slider.addEventListener("input", function () { goToSlice(parseInt(slider.value, 10)); });
    stage.addEventListener("wheel", function (e) {
      e.preventDefault();
      goToSlice(idx + (e.deltaY > 0 ? 1 : -1));
    }, { passive: false });
    stage.addEventListener("keydown", function (e) {
      if (e.key === "ArrowUp") { e.preventDefault(); goToSlice(idx + 1); }
      else if (e.key === "ArrowDown") { e.preventDefault(); goToSlice(idx - 1); }
    });
    labelBtn.addEventListener("click", function () {
      showLabels = !showLabels;
      labelBtn.setAttribute("aria-pressed", showLabels ? "true" : "false");
      labelBtn.textContent = showLabels ? "Hide labels" : "Show labels";
      renderLabels();
    });

    return panel;
  }

  /* ---- Clinical tab ----
   * When a subspecialty has more than a couple of clinical blocks, a jump
   * nav sits alongside them (same .lesson-nav look as the anatomy detail
   * sidebar) so a learner can skip straight to a topic instead of scrolling
   * past everything before it -- and a scrollspy keeps the active item in
   * sync with whatever block is actually in view. */
  function buildClinicalPane(mod) {
    var pane = h('<div class="tabpane" data-pane="clinical"></div>');
    var c = mod.clinical || {};
    var blocks = c.blocks || [];
    if (blocks.length === 0) {
      pane.appendChild(emptyNote("Clinical content for this module is in progress."));
      return pane;
    }

    var trackObj = trackById(mod.track);
    var trackStyle = trackObj && trackObj.color ? ' style="--track-color:' + trackObj.color + '"' : "";
    var showNav = blocks.length > 2;
    var shell = showNav ? h('<div class="clinical-shell lesson-shell"></div>') : null;
    var nav = null, navList = null, timeLabel = null;
    var wordCounts = [];

    if (showNav) {
      nav = h('<nav class="lesson-nav" aria-label="Jump to a topic in this section"' + trackStyle + '></nav>');
      nav.appendChild(h('<div class="lesson-nav-label mono">' + esc(mod.trackName || mod.track) + ' &middot; Clinical</div>'));
      timeLabel = h('<div class="lesson-nav-time mono"></div>');
      nav.appendChild(timeLabel);
      navList = h('<div class="lesson-nav-list"></div>');
      navList.appendChild(h('<div class="lesson-nav-track"><i class="lesson-nav-thumb"></i></div>'));
      nav.appendChild(navList);
      shell.appendChild(nav);
    }

    var main = showNav ? h('<div class="lesson-main"></div>') : pane;
    blocks.forEach(function (b, i) {
      var anchor = "clinical-block-" + esc(b.id || "");
      var p = h('<div class="panel" data-anchor="' + anchor + '"><h3>' + esc(b.title) + '</h3>' +
        (b.tagline ? '<p class="detail-tagline">' + esc(b.tagline) + '</p>' : '') + '</div>');
      var blockText = stripHtml(b.html || "");
      var blockActions = h('<div class="panel-actions"></div>');
      blockActions.appendChild(bookmarkButton({
        id: mod.id + "::clinical::" + (b.id || i),
        title: b.title, moduleId: mod.id, moduleTitle: mod.title, tab: "clinical", anchor: anchor,
        snippet: blockText.slice(0, 220)
      }));
      if (blockText) blockActions.appendChild(audioBriefButton(function () { return blockText; }, b.title));
      p.appendChild(blockActions);
      if (b.html) p.appendChild(h('<div>' + b.html + '</div>'));
      if (b.table) {
        p.appendChild(h(
          '<div class="tbl-scroll"><table><thead><tr>' +
            b.table.head.map(function (x) { return '<th>' + x + '</th>'; }).join("") +
          '</tr></thead><tbody>' +
            b.table.rows.map(function (r) { return '<tr>' + r.map(function (c2) { return '<td>' + c2 + '</td>'; }).join("") + '</tr>'; }).join("") +
          '</tbody></table></div>'
        ));
      }
      main.appendChild(p);

      var blockWords = countWords(b.title) + countWords(stripHtml(b.html)) +
        (b.table ? countWords(b.table.head.join(" ")) + countWords(b.table.rows.map(function (r) { return r.join(" "); }).join(" ")) : 0);
      wordCounts.push(blockWords);

      if (showNav) {
        var btn = h(
          '<button type="button" class="lesson-nav-item' + (i === 0 ? ' active' : '') + '"' + (i === 0 ? ' aria-current="page"' : '') + ' data-anchor-target="' + anchor + '" data-nav-index="' + i + '">' +
            '<span class="lesson-nav-dot"></span><span class="lesson-nav-item-title">' + esc(b.title) + '</span>' +
          '</button>'
        );
        btn.addEventListener("click", function () {
          if (p.scrollIntoView) p.scrollIntoView({ behavior: "smooth", block: "start" });
          setClinicalNavActive(nav, timeLabel, wordCounts, i);
        });
        navList.appendChild(btn);
      }
    });

    if (showNav) {
      shell.appendChild(main);
      pane.appendChild(shell);
      setClinicalNavActive(nav, timeLabel, wordCounts, 0);
    }

    linkGlossaryTerms(pane);
    enhanceReferenceTables(pane);
    if (mod.id === ACTIVE_RECALL_MODULE_ID && state.activeRecall) applyActiveRecallMask(main);
    if (showNav) initClinicalScrollspy(pane, nav, timeLabel, wordCounts);
    return pane;
  }

  function countWords(text) {
    if (!text) return 0;
    var m = text.trim().match(/\S+/g);
    return m ? m.length : 0;
  }

  /* Shared by the scrollspy IO callback and by a nav click (so the reading
   * time and trackline update immediately on click, without waiting for the
   * smooth-scroll to actually cross the intersection threshold). */
  function setClinicalNavActive(nav, timeLabel, wordCounts, index) {
    var items = nav.querySelectorAll(".lesson-nav-item");
    items.forEach(function (item) {
      var isActive = parseInt(item.getAttribute("data-nav-index"), 10) === index;
      item.classList.toggle("active", isActive);
      if (isActive) item.setAttribute("aria-current", "page"); else item.removeAttribute("aria-current");
    });
    if (timeLabel) {
      var remaining = wordCounts.slice(index).reduce(function (a, b) { return a + b; }, 0);
      var mins = Math.max(1, Math.round(remaining / 200));
      timeLabel.textContent = "~" + mins + " min left";
    }
    var thumb = nav.querySelector(".lesson-nav-thumb");
    if (thumb && items.length > 1) {
      var pct = index / (items.length - 1);
      thumb.style.top = (pct * 100) + "%";
    }
  }

  var clinicalScrollspyIO = null;
  function initClinicalScrollspy(pane, nav, timeLabel, wordCounts) {
    if (clinicalScrollspyIO) { clinicalScrollspyIO.disconnect(); clinicalScrollspyIO = null; }
    if (!("IntersectionObserver" in window)) return;
    var blocks = Array.prototype.slice.call(pane.querySelectorAll(".lesson-main > [data-anchor]"));
    if (!blocks.length) return;
    clinicalScrollspyIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var index = blocks.indexOf(entry.target);
        if (index !== -1) setClinicalNavActive(nav, timeLabel, wordCounts, index);
      });
    }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });
    blocks.forEach(function (b) { clinicalScrollspyIO.observe(b); });
  }

  /* ---- 2-Minute Procedure Prep: bespoke Clinical-tab renderer ----
   * A dedicated layout for this one module instead of the generic
   * buildClinicalPane -- structured card-within-card briefs (scenario /
   * key-steps stepper / danger-structures / pearl), a subspecialty
   * accordion + filter chips in the sidebar, a "Pre-Scrub Check Mode"
   * click-to-reveal toggle, and a searchable quick-matcher table. Reads
   * procedures.js's structured block shape (subspecialty/scenario/
   * decisionPoints/keySteps/dangerStructures/pearl) rather than a single
   * html blob. */
  function loadPrescrubMode() {
    try { return localStorage.getItem("jeffent.prescrub") === "1"; } catch (e) { return false; }
  }
  function savePrescrubMode(on) {
    try { localStorage.setItem("jeffent.prescrub", on ? "1" : "0"); } catch (e) {}
  }

  function procReadTime(b) {
    var words = countWords(b.scenario) +
      (b.decisionPoints || []).reduce(function (a, t) { return a + countWords(t); }, 0) +
      (b.keySteps || []).reduce(function (a, t) { return a + countWords(t); }, 0) +
      countWords(b.dangerStructures) + countWords(b.pearl);
    var secs = Math.round(words / 200 * 60 / 15) * 15;
    return Math.max(30, secs);
  }

  function buildProceduresPane(mod) {
    var pane = h('<div class="tabpane proc-pane" data-pane="clinical"></div>');
    var c = mod.clinical || {};
    var blocks = c.blocks || [];
    if (blocks.length === 0) {
      pane.appendChild(emptyNote("Clinical content for this module is in progress."));
      return pane;
    }

    var groups = [];
    var byGroup = {};
    blocks.forEach(function (b) {
      var g = b.subspecialty || "Other";
      if (!byGroup[g]) { byGroup[g] = []; groups.push(g); }
      byGroup[g].push(b);
    });

    var shell = h('<div class="proc-shell lesson-shell"></div>');

    var nav = h('<nav class="lesson-nav proc-nav" aria-label="Browse procedures by subspecialty"></nav>');
    nav.appendChild(h('<div class="lesson-nav-label mono">2-Minute Procedure Prep</div>'));
    var chipRow = h('<div class="proc-chips"></div>');
    var chipAll = h('<button type="button" class="proc-chip active" data-filter="all">All</button>');
    chipRow.appendChild(chipAll);
    groups.forEach(function (g) {
      chipRow.appendChild(h('<button type="button" class="proc-chip" data-filter="' + esc(g) + '">' + esc(g) + '</button>'));
    });
    nav.appendChild(chipRow);

    var navList = h('<div class="proc-nav-list"></div>');
    groups.forEach(function (g) {
      var groupWrap = h('<div class="proc-nav-group open" data-group="' + esc(g) + '"></div>');
      var head = h(
        '<button type="button" class="proc-nav-group-head">' +
          '<svg class="proc-nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>' +
          '<span>' + esc(g) + '</span><span class="proc-nav-group-count">' + byGroup[g].length + '</span>' +
        '</button>'
      );
      head.addEventListener("click", function () { groupWrap.classList.toggle("open"); });
      groupWrap.appendChild(head);
      var sub = h('<div class="proc-nav-group-items"></div>');
      byGroup[g].forEach(function (b) {
        var anchor = "clinical-block-" + esc(b.id || "");
        var item = h(
          '<button type="button" class="lesson-nav-item" data-anchor-target="' + anchor + '">' +
            '<span class="lesson-nav-dot"></span><span class="lesson-nav-item-title">' + esc(b.title) + '</span>' +
          '</button>'
        );
        item.addEventListener("click", function () {
          var target = pane.querySelector('[data-anchor="' + anchor + '"]');
          if (target && target.scrollIntoView) target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        sub.appendChild(item);
      });
      groupWrap.appendChild(sub);
      navList.appendChild(groupWrap);
    });
    nav.appendChild(navList);
    shell.appendChild(nav);

    var main = h('<div class="lesson-main"></div>');

    /* Intro + searchable quick-matcher, replacing the old static table. */
    if (c.matcher) {
      var introCard = h('<div class="panel proc-intro"></div>');
      introCard.appendChild(h('<h3>How to use these briefs</h3>'));
      if (c.intro) introCard.appendChild(h("<p class='sub'>" + c.intro + "</p>"));
      var searchWrap = h(
        '<div class="proc-matcher-search">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>' +
          '<input type="text" class="proc-matcher-input" placeholder="Type a danger structure: RLN, carotid, chorda tympani…" aria-label="Filter procedures by danger structure">' +
        '</div>'
      );
      introCard.appendChild(searchWrap);
      var tbl = h(
        '<div class="tbl-scroll"><table class="proc-matcher-table"><thead><tr>' +
          c.matcher.head.map(function (x) { return "<th>" + esc(x) + "</th>"; }).join("") +
        "</tr></thead><tbody>" +
          c.matcher.rows.map(function (r) {
            return "<tr>" + r.map(function (cell) { return "<td>" + esc(cell) + "</td>"; }).join("") + "</tr>";
          }).join("") +
        "</tbody></table></div>"
      );
      introCard.appendChild(tbl);
      var matcherInput = searchWrap.querySelector(".proc-matcher-input");
      var matcherEmpty = h('<p class="empty-note proc-matcher-empty" hidden>No procedure has that danger structure listed.</p>');
      introCard.appendChild(matcherEmpty);
      matcherInput.addEventListener("input", function () {
        var q = matcherInput.value.trim().toLowerCase();
        var shown = 0;
        tbl.querySelectorAll("tbody tr").forEach(function (tr) {
          var hit = !q || tr.textContent.toLowerCase().indexOf(q) !== -1;
          tr.hidden = !hit;
          if (hit) shown++;
        });
        matcherEmpty.hidden = shown !== 0;
      });
      main.appendChild(introCard);
    }

    /* Pre-Scrub Check Mode: collapses danger-structures/pearl behind a
     * click-to-reveal overlay so the brief can double as a blind self-test
     * right before walking into the room. */
    var checkBar = h(
      '<div class="proc-checkbar">' +
        '<button type="button" class="proc-check-toggle' + (loadPrescrubMode() ? " active" : "") + '" aria-pressed="' + (loadPrescrubMode() ? "true" : "false") + '">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>' +
          "<span>Pre-Scrub Check Mode</span>" +
        "</button>" +
      "</div>"
    );
    main.appendChild(checkBar);
    var checkToggle = checkBar.querySelector(".proc-check-toggle");
    checkToggle.addEventListener("click", function () {
      var on = !pane.classList.contains("prescrub-mode");
      pane.classList.toggle("prescrub-mode", on);
      checkToggle.classList.toggle("active", on);
      checkToggle.setAttribute("aria-pressed", on ? "true" : "false");
      savePrescrubMode(on);
      if (!on) pane.querySelectorAll(".proc-checkable").forEach(function (el2) { el2.classList.remove("revealed"); });
    });
    if (loadPrescrubMode()) pane.classList.add("prescrub-mode");

    blocks.forEach(function (b) {
      var anchor = "clinical-block-" + esc(b.id || "");
      var card = h('<div class="panel proc-card" data-anchor="' + anchor + '" data-group="' + esc(b.subspecialty || "") + '"></div>');

      var secs = procReadTime(b);
      var mins = secs / 60;
      var readLabel = secs >= 60 ? (mins % 1 === 0 ? mins : mins.toFixed(1)) + " min" : secs + " sec";
      card.appendChild(h(
        '<div class="proc-topbar">' +
          "<h3>" + esc(b.title) + "</h3>" +
          '<div class="proc-badges">' +
            '<span class="proc-tag">' + esc(b.subspecialty || "") + "</span>" +
            '<span class="proc-readtime mono">~' + readLabel + " read</span>" +
            '<button type="button" class="proc-audio-btn" aria-label="Listen to 2-Min Brief" data-tip="Listen to 2-Min Brief">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/></svg>' +
            "</button>" +
          "</div>" +
        "</div>"
      ));
      var briefParts = [b.scenario, (b.decisionPoints || []).join(". "), (b.keySteps || []).join(". "), b.dangerStructures, b.pearl];
      var briefText = stripHtml(briefParts.filter(function (s) { return s; }).join(". "));
      var procAudioBtn = card.querySelector(".proc-audio-btn");
      procAudioBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        if (audioBrief.activeBtn === procAudioBtn) { stopBrief(); return; }
        startBrief(briefText, b.title, procAudioBtn);
      });

      if (b.scenario) {
        card.appendChild(h(
          '<div class="proc-scenario"><span class="proc-badge-pill">Patient Vignette</span><p>' + b.scenario + "</p></div>"
        ));
      }

      if (b.decisionPoints && b.decisionPoints.length) {
        var dpSection = h('<div class="proc-section"><h4>Decision points</h4></div>');
        dpSection.appendChild(h("<ul>" + b.decisionPoints.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>"));
        card.appendChild(dpSection);
      }

      if (b.keySteps && b.keySteps.length) {
        var stepSection = h('<div class="proc-section"><h4>Key steps</h4></div>');
        var stepList = h('<ol class="proc-steps"></ol>');
        b.keySteps.forEach(function (s) {
          stepList.appendChild(h('<li class="proc-step"><span class="proc-step-body">' + s + "</span></li>"));
        });
        stepSection.appendChild(stepList);
        card.appendChild(stepSection);
      }

      if (b.dangerStructures) {
        var dangerCard = h(
          '<div class="proc-callout proc-danger proc-checkable">' +
            '<div class="proc-callout-label">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 4 6.5v5c0 4.7 3.2 8.9 8 10 4.8-1.1 8-5.3 8-10v-5L12 3Z"/><path d="M12 8v5"/><path d="M12 16h.01"/></svg>' +
              "<span>Danger structures</span>" +
            "</div>" +
            '<div class="proc-callout-body">' + b.dangerStructures + "</div>" +
            '<button type="button" class="proc-check-overlay">Can you name the danger structures before looking? <span>Click to reveal</span></button>' +
          "</div>"
        );
        dangerCard.querySelector(".proc-check-overlay").addEventListener("click", function () { dangerCard.classList.add("revealed"); });
        card.appendChild(dangerCard);
      }

      if (b.pearl) {
        var pearlCard = h(
          '<div class="proc-callout proc-pearl proc-checkable">' +
            '<div class="proc-callout-label">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2.05V17h6v-.25c0-.85.4-1.55 1-2.05A7 7 0 0 0 12 2Z"/></svg>' +
              "<span>High-yield pearl</span>" +
            "</div>" +
            '<div class="proc-callout-body">' + b.pearl + "</div>" +
            '<button type="button" class="proc-check-overlay">Can you recall the pearl before looking? <span>Click to reveal</span></button>' +
          "</div>"
        );
        pearlCard.querySelector(".proc-check-overlay").addEventListener("click", function () { pearlCard.classList.add("revealed"); });
        var pearlBookmark = bookmarkButton({
          id: mod.id + "::pearl::" + (b.id || b.title),
          title: b.title, moduleId: mod.id, moduleTitle: mod.title, tab: "clinical",
          snippet: stripHtml(b.pearl).slice(0, 220)
        });
        pearlCard.querySelector(".proc-callout-label").appendChild(pearlBookmark);
        card.appendChild(pearlCard);
      }

      main.appendChild(card);
    });

    shell.appendChild(main);
    pane.appendChild(shell);
    linkGlossaryTerms(pane);
    enhanceReferenceTables(pane);

    function applyProcFilter(val) {
      pane.querySelectorAll(".proc-chip").forEach(function (chip) { chip.classList.toggle("active", chip.getAttribute("data-filter") === val); });
      pane.querySelectorAll(".proc-nav-group").forEach(function (g) { g.hidden = val !== "all" && g.getAttribute("data-group") !== val; });
      pane.querySelectorAll(".proc-card").forEach(function (p) { p.hidden = val !== "all" && p.getAttribute("data-group") !== val; });
    }
    chipRow.querySelectorAll(".proc-chip").forEach(function (chip) {
      chip.addEventListener("click", function () { applyProcFilter(chip.getAttribute("data-filter")); });
    });

    initProceduresScrollspy(pane, nav);
    return pane;
  }

  var proceduresScrollspyIO = null;
  function initProceduresScrollspy(pane, nav) {
    if (proceduresScrollspyIO) { proceduresScrollspyIO.disconnect(); proceduresScrollspyIO = null; }
    if (!("IntersectionObserver" in window)) return;
    var cards = Array.prototype.slice.call(pane.querySelectorAll(".proc-card[data-anchor]"));
    if (!cards.length) return;
    proceduresScrollspyIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var anchor = entry.target.getAttribute("data-anchor");
        nav.querySelectorAll(".lesson-nav-item").forEach(function (item) {
          item.classList.toggle("active", item.getAttribute("data-anchor-target") === anchor);
        });
      });
    }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });
    cards.forEach(function (c2) { proceduresScrollspyIO.observe(c2); });
  }

  /* ---- Cases tab ----
   * An index of cases (short teaser + question count) opens into a
   * one-case-at-a-time stepper: one question visible at a time (reveal its
   * answer, then advance), and the teaching point stays hidden until the
   * learner has been through every question and asks for it -- instead of
   * dumping every question and the teaching point onto the screen at once,
   * which let you read the teaching point before even trying the case. */
  function buildCasesPane(mod) {
    var pane = h('<div class="tabpane" data-pane="cases"></div>');
    renderCasesPane(pane, mod);
    return pane;
  }

  function renderCasesPane(pane, mod) {
    pane.innerHTML = "";
    var cases = mod.cases || [];
    if (cases.length === 0) {
      pane.appendChild(emptyNote("No cases for this module yet."));
      return;
    }
    if (!state.caseSession) renderCaseIndex(pane, mod, cases);
    else renderCaseStepper(pane, mod, cases);
  }

  function freshCaseSession(index) {
    return { index: index, promptIdx: 0, revealed: false, teachRevealed: false };
  }

  function renderCaseIndex(pane, mod, cases) {
    pane.appendChild(h(
      '<div class="eyebrow" style="margin-bottom:10px">' + cases.length + ' case' + (cases.length === 1 ? "" : "s") + '</div>'
    ));
    var list = h('<div class="case-index"></div>');
    cases.forEach(function (c, i) {
      var n = (c.prompts || []).length;
      var row = h(
        '<button type="button" class="case-row">' +
          '<div class="case-row-num mono">' + (i + 1) + '</div>' +
          '<div class="case-row-body"><p>' + esc(teaserOf(c.stem, 140)) + '</p>' +
          '<span class="case-row-meta mono">' + n + ' question' + (n === 1 ? "" : "s") + '</span></div>' +
        '</button>'
      );
      row.addEventListener("click", function () {
        state.caseSession = freshCaseSession(i);
        renderCasesPane(pane, mod);
      });
      list.appendChild(row);
    });
    pane.appendChild(list);
  }

  function renderCaseStepper(pane, mod, cases) {
    var cs = state.caseSession;
    var total = cases.length;
    var c = cases[cs.index];
    var prompts = c.prompts || [];

    function goToCase(i) {
      state.caseSession = i === null ? null : freshCaseSession(i);
      renderCasesPane(pane, mod);
    }

    var nav = h(
      '<div class="case-nav">' +
        '<button type="button" class="case-back mono">&larr; All cases</button>' +
        '<span class="case-count mono">Case ' + (cs.index + 1) + ' of ' + total + '</span>' +
        '<div class="case-arrows">' +
          '<button type="button" class="case-arrow" data-dir="-1" aria-label="Previous case"' + (cs.index === 0 ? " disabled" : "") + '>&lsaquo;</button>' +
          '<button type="button" class="case-arrow" data-dir="1" aria-label="Next case"' + (cs.index === total - 1 ? " disabled" : "") + '>&rsaquo;</button>' +
        '</div>' +
      '</div>'
    );
    nav.querySelector(".case-back").addEventListener("click", function () { goToCase(null); });
    nav.querySelectorAll(".case-arrow").forEach(function (btn) {
      btn.addEventListener("click", function () { if (!btn.disabled) goToCase(cs.index + Number(btn.dataset.dir)); });
    });
    pane.appendChild(nav);

    var card = h('<div class="case"></div>');
    card.appendChild(h('<div class="stem">' + c.stem + '</div>'));
    var stepWrap = h('<div class="case-step"></div>');
    card.appendChild(stepWrap);

    /* Every question already answered stays on screen with its answer, so
       the case reads as one accumulating record instead of replacing itself
       each step. Only the current (or not-yet-revealed) question hides its
       answer behind a button. */
    var atTeaching = cs.promptIdx >= prompts.length;
    var historyThrough = atTeaching ? prompts.length - 1 : cs.promptIdx - 1;
    for (var qi = 0; qi <= historyThrough; qi++) {
      stepWrap.appendChild(h(
        '<div class="case-q done">' +
          '<div class="case-q-meta mono">Question ' + (qi + 1) + ' of ' + prompts.length + '</div>' +
          '<div class="case-q-text">' + esc(prompts[qi].q) + '</div>' +
        '</div>'
      ));
      stepWrap.appendChild(h('<div class="ans case-a">' + prompts[qi].a + '</div>'));
    }

    function stepBack() {
      cs.promptIdx -= 1; cs.revealed = false; cs.teachRevealed = false;
      renderCasesPane(pane, mod);
    }
    var canStepBack = cs.promptIdx > 0;

    if (!atTeaching) {
      var p = prompts[cs.promptIdx];
      var isLast = cs.promptIdx === prompts.length - 1;
      stepWrap.appendChild(h(
        '<div class="case-q current">' +
          '<div class="case-q-meta mono">Question ' + (cs.promptIdx + 1) + ' of ' + prompts.length + '</div>' +
          '<div class="case-q-text">' + esc(p.q) + '</div>' +
        '</div>'
      ));
      var controls = h('<div class="case-controls"></div>');
      if (canStepBack) {
        var backBtn = h('<button type="button" class="case-step-back mono">&larr; Previous question</button>');
        backBtn.addEventListener("click", stepBack);
        controls.appendChild(backBtn);
      }
      if (!cs.revealed) {
        var showBtn = h('<button type="button" class="btn ghost case-reveal">Show answer</button>');
        showBtn.addEventListener("click", function () { cs.revealed = true; renderCasesPane(pane, mod); });
        controls.appendChild(showBtn);
      } else {
        stepWrap.appendChild(h('<div class="ans case-a">' + p.a + '</div>'));
        var label = !isLast ? "Next question →" : c.teaching ? "Show teaching point →" : cs.index < total - 1 ? "Next case →" : "Back to all cases";
        var nextBtn = h('<button type="button" class="btn case-next">' + label + '</button>');
        nextBtn.addEventListener("click", function () {
          if (!isLast) { cs.promptIdx += 1; cs.revealed = false; renderCasesPane(pane, mod); }
          else if (c.teaching) { cs.promptIdx += 1; renderCasesPane(pane, mod); }
          else if (cs.index < total - 1) { goToCase(cs.index + 1); }
          else { goToCase(null); }
        });
        controls.appendChild(nextBtn);
      }
      stepWrap.appendChild(controls);
    } else {
      var controls2 = h('<div class="case-controls"></div>');
      if (canStepBack) {
        var backBtn2 = h('<button type="button" class="case-step-back mono">&larr; Previous question</button>');
        backBtn2.addEventListener("click", stepBack);
        controls2.appendChild(backBtn2);
      }
      if (c.teaching && !cs.teachRevealed) {
        var teachBtn = h('<button type="button" class="btn ghost case-reveal">Show teaching point</button>');
        teachBtn.addEventListener("click", function () { cs.teachRevealed = true; renderCasesPane(pane, mod); });
        controls2.appendChild(teachBtn);
        stepWrap.appendChild(controls2);
      } else {
        if (c.teaching) stepWrap.appendChild(h('<div class="teach"><strong>Teaching point:</strong> ' + c.teaching + '</div>'));
        var doneLabel = cs.index < total - 1 ? "Next case →" : "Back to all cases";
        var doneBtn = h('<button type="button" class="btn case-next">' + doneLabel + '</button>');
        doneBtn.addEventListener("click", function () {
          if (cs.index < total - 1) goToCase(cs.index + 1); else goToCase(null);
        });
        controls2.appendChild(doneBtn);
        /* At the end of a case, offer a jump to this module's Clinical tab --
         * where the topic the case is built around actually gets taught --
         * rather than leaving the learner to hunt for it manually. */
        if (availableTabs(mod).indexOf("clinical") !== -1) {
          var relatedBtn = h('<button type="button" class="btn ghost case-related">Review the Clinical section for this topic &rarr;</button>');
          relatedBtn.addEventListener("click", function () { goModuleTab(mod.id, "clinical"); });
          controls2.appendChild(relatedBtn);
        }
        stepWrap.appendChild(controls2);
      }
    }

    pane.appendChild(card);
    linkGlossaryTerms(card);
    enhanceReferenceTables(card);
  }

  /* ---- Cards tab (SRS study flow) ---- */
  function buildCardsPane(mod) {
    var pane = h('<div class="tabpane" data-pane="cards"></div>');
    var cards = mod.cards || [];
    if (cards.length === 0) {
      pane.appendChild(emptyNote("No recall cards for this module yet."));
      return pane;
    }
    renderCardsIntro(pane, mod);
    return pane;
  }

  function renderCardsIntro(pane, mod) {
    pane.innerHTML = "";
    var s = window.SRS.stats(mod.id, mod.cards);
    var cta = h(
      '<div class="study-cta">' +
        '<div><div class="n">' + s.total + ' cards · ' + s.due + ' due today</div>' +
        '<div class="cta-sub">Active recall with spaced repetition.</div></div>' +
        '<div class="cta-actions"></div>' +
      '</div>'
    );
    var actions = cta.querySelector(".cta-actions");
    var b1 = h('<button class="btn">Study due (' + s.due + ') →</button>');
    b1.addEventListener("click", function () { startSession(pane, mod, "due"); });
    var b2 = h('<button class="btn ghost">Review all ' + s.total + '</button>');
    b2.addEventListener("click", function () { startSession(pane, mod, "all"); });
    var b3 = h('<button class="btn ghost" data-tip="Download a tab-separated deck for Anki\'s desktop import">Export to Anki</button>');
    b3.addEventListener("click", function () { exportModuleToAnki(mod); });
    actions.appendChild(b1); actions.appendChild(b2); actions.appendChild(b3);
    pane.appendChild(cta);
  }

  /* Anki's desktop "Import File" dialog reads plain tab-separated text (no
   * header row) as Front \t Back \t Tags -- multiple tags in one field are
   * space-separated, and Anki fields happily render basic HTML, so front/
   * back are kept as HTML (through effectiveFront/Back, so a learner's own
   * card-text overrides travel with the export too) rather than stripped
   * to plain text -- only literal tabs/newlines are collapsed, since those
   * are the row/field delimiters in this format. */
  function tsvSafe(s) { return String(s || "").replace(/\r?\n+/g, " ").replace(/\t/g, " ").trim(); }
  function exportModuleToAnki(mod) {
    var lines = (mod.cards || []).map(function (c) {
      var front = tsvSafe(effectiveFront(mod.id, c));
      var back = tsvSafe(effectiveBack(mod.id, c));
      var tags = (c.tags || []).join(" ");
      return front + "\t" + back + "\t" + tags;
    });
    downloadTextFile(mod.id + "-anki-export.txt", lines.join("\n"), "text/plain");
    showToast("Downloaded " + lines.length + " cards for Anki import");
  }

  /* startSession normally computes its own card list from mod.id (per-module
   * flow, unchanged). Pass precomputedCards to drive it from an already-built
   * list instead, used by the cross-module "All Due Cards" screen and by a
   * single-card jump from search. Each card is tagged with its owning
   * module id (_owner) so SRS.rate always writes to the correct module's
   * localStorage bucket, even in an aggregated session. */
  function startSession(pane, mod, mode, precomputedCards) {
    var cards = precomputedCards ? precomputedCards.slice()
      : (mode === "all" ? mod.cards.slice() : window.SRS.dueCards(mod.id, mod.cards));
    cards.forEach(function (c) { if (!c._owner) c._owner = mod.id; });
    /* pane and mod are stashed so the spacebar shortcut can re-render this exact
     * session without threading the references through a global. */
    state.session = { mode: mode, cards: cards, i: 0, revealed: false, done: cards.length === 0, pane: pane, mod: mod, history: [] };
    renderStudy(pane, mod);
  }

  /* Anki-style "learn ahead": a card rated Again gets a sub-day interval
   * (see srs.js), so it's back in seconds/minutes, not days. Rather than
   * either dropping it from this session (it just silently vanishes until
   * its real due time passes, hours or days from now the next time this
   * module is opened) or literally blocking the student for the full
   * interval, requeue a fresh copy onto the end of the CURRENT session's
   * card list -- it resurfaces for another pass before the session ends,
   * same intent as Anki's learn-ahead-limit pulling a near-due card
   * forward instead of leaving you stuck at a blank "congratulations"
   * screen. */
  function requeueIfAgain(cardsArray, card, rating) {
    if (rating === "again") cardsArray.push(card);
  }

  /* Rate the current card in a study session (main Cards tab, cross-module due
   * queue, or a search-jump session), recording a snapshot of its prior
   * scheduling state first so the Z-key shortcut can undo it. Shared by the
   * click handler, the Space shortcut (rates "easy"), and the 1/2/3 shortcuts. */
  function rateSessionCard(ses, rating) {
    var card = ses.cards[ses.i];
    var moduleId = card._owner || (ses.mod && ses.mod.id);
    var snapshot = window.SRS.snapshotBefore(moduleId, card.id);
    window.SRS.rate(moduleId, card.id, rating);
    (ses.history = ses.history || []).push({ moduleId: moduleId, cardId: card.id, snapshot: snapshot });
    requeueIfAgain(ses.cards, card, rating);
    ses.i++; ses.revealed = false;
    if (ses.i >= ses.cards.length) ses.done = true;
  }

  /* Undo the most recent rating in a study session: restore that card's prior
   * SRS state and step back to it, front-side-first (matching Anki's Ctrl+Z). */
  function undoSessionCard(ses) {
    var last = ses.history && ses.history.pop();
    if (!last) return false;
    window.SRS.undoRate(last.moduleId, last.cardId, last.snapshot);
    ses.i = Math.max(0, ses.i - 1);
    ses.revealed = false; ses.done = false;
    return true;
  }

  function renderStudy(pane, mod) {
    pane.innerHTML = "";
    var ses = state.session;
    if (!ses || ses.done) {
      var panel = h(
        '<div class="study-shell"><div class="done-panel">' +
          '<div class="big">✓ Session complete</div>' +
          '<p class="sub" style="margin:12px auto 22px;">Spaced-repetition scheduling saved to this browser. Come back tomorrow for the next set.</p>' +
        '</div></div>'
      );
      var back = h('<div style="text-align:center"><button class="btn ghost">Back to overview</button></div>');
      back.querySelector("button").addEventListener("click", function () {
        state.session = null;
        if (state.screen === "study") { renderStudyAllIntro(); } else { renderCardsIntro(pane, mod); }
      });
      panel.querySelector(".done-panel").appendChild(back);
      if (ses && ses.history && ses.history.length) {
        var undoDone = h('<div style="text-align:center;margin-top:10px"><button type="button" class="undo-btn mono">&#8617; Undo last card (Z)</button></div>');
        undoDone.querySelector("button").addEventListener("click", function () {
          undoSessionCard(ses);
          renderStudy(pane, mod);
        });
        panel.querySelector(".done-panel").appendChild(undoDone);
      }
      pane.appendChild(panel);
      return;
    }
    var card = ses.cards[ses.i];
    var pct = Math.round((ses.i / ses.cards.length) * 100);
    var modeLabel = ses.mode === "all" ? "review all" : ses.mode === "search" ? "search result" : "due today";
    var shell = h('<div class="study-shell"></div>');
    shell.appendChild(h('<div class="progress"><i style="width:' + pct + '%"></i></div>'));
    shell.appendChild(h('<div class="mono" style="font-size:12px;color:var(--ink-faint);margin-bottom:12px">Card ' + (ses.i + 1) + ' of ' + ses.cards.length + ' · ' + modeLabel + '</div>'));

    /* Exactly two tags per card: subspecialty (track) + general topic
     * (Anatomy / Clinical / Pharm). All other descriptors, the cloze hint,
     * and milestone codes are intentionally not shown on the card face. */
    var _ownerMod = card._owner ? (window.JEFFENT.get(card._owner) || mod) : mod;
    var _trk = (_ownerMod && _ownerMod.track) ? trackById(_ownerMod.track) : null;
    var _ab = _trk ? (_trk.abbr || _trk.name) : "";
    var _abTitle = _trk ? _trk.name : (_ownerMod && _ownerMod.title || "");
    var _trkId = _ownerMod ? _ownerMod.track : "";
    var _tt = ((card.tags || []).join(" ")).toLowerCase();
    var _topic = (_trkId === "pharmacology" || /pharm|\bdrug|medication|antibiotic|ototoxic|steroid/.test(_tt)) ? "Pharm"
               : (_trkId === "anatomy-atlas" || /anatom|embryo|physiolog|histolog/.test(_tt)) ? "Anatomy"
               : "Clinical";
    var tags = "";
    if (_ab) { tags += '<span class="pill track" title="' + esc(_abTitle) + '">' + esc(_ab) + '</span>'; }
    tags += '<span class="pill' + (_topic === "Anatomy" ? " anatomy" : "") + '">' + esc(_topic) + '</span>';

    var _ownerId = cardOwnerId(card, _ownerMod.id);
    var _note = cardNote(_ownerId, card);
    var fc = h('<div class="flashcard"></div>');
    fc.appendChild(h('<div class="card-tags">' + tags + (cardIsEdited(_ownerId, card) ? '<span class="pill edited">Edited</span>' : '') + '</div>'));
    fc.appendChild(h('<div class="card-front">' + effectiveFront(_ownerId, card) + '</div>'));
    var back = h('<div class="card-back hidden">' + effectiveBack(_ownerId, card) + '</div>');
    fc.appendChild(back);
    if (_note) fc.appendChild(h('<div class="card-note"><strong>Your note:</strong> ' + esc(_note) + '</div>'));
    var srcLine = card.reviewer
      ? '<span class="rev">Reviewed: ' + esc(card.reviewer) + '</span>'
      : '<span class="rev">Reviewer: pending sign-off</span>';
    fc.appendChild(h('<div class="card-source">' + srcLine + '</div>'));
    shell.appendChild(fc);
    linkGlossaryTerms(fc);
    enhanceReferenceTables(fc);

    if (!ses.revealed) {
      var rv = h('<div style="text-align:center"><button class="btn reveal-btn">Show answer</button></div>');
      rv.querySelector("button").addEventListener("click", function () {
        ses.revealed = true; back.classList.remove("hidden"); renderStudy(pane, mod);
      });
      shell.appendChild(rv);
    } else {
      back.classList.remove("hidden");
      var hints = rateHintLabels();
      var ctr = h(
        '<div class="answer-controls">' +
          '<button class="rate again" data-r="again">Again<small>' + esc(hints.again) + '</small></button>' +
          '<button class="rate good" data-r="good">Good<small>' + esc(hints.good) + '</small></button>' +
          '<button class="rate easy" data-r="easy">Easy<small>' + esc(hints.easy) + '</small></button>' +
        '</div>'
      );
      ctr.querySelectorAll(".rate").forEach(function (btn) {
        btn.addEventListener("click", function () {
          rateSessionCard(ses, btn.dataset.r);
          renderStudy(pane, mod);
        });
      });
      shell.appendChild(ctr);
      shell.appendChild(h('<div class="kbd-hint mono">Space = Easy &middot; 1/2/3 = Again/Good/Easy &middot; Z = Undo</div>'));
    }
    if (ses.history && ses.history.length) {
      var undoRow = h('<div style="text-align:center;margin-top:10px"><button type="button" class="undo-btn mono">&#8617; Undo last card (Z)</button></div>');
      undoRow.querySelector("button").addEventListener("click", function () {
        undoSessionCard(ses);
        renderStudy(pane, mod);
      });
      shell.appendChild(undoRow);
    }
    pane.appendChild(shell);
  }

  /* Spacebar in a study session (per-module or the cross-module queue): reveal
   * the card, then rate it Easy (the rightmost option). Uses the pane/mod stashed
   * on the session so it re-renders the same view a click would. */
  function handleStudySpace() {
    var ses = state.session;
    if (!ses || ses.done || ses.i >= ses.cards.length) return false;
    if (!ses.revealed) { ses.revealed = true; renderStudy(ses.pane, ses.mod); return true; }
    rateSessionCard(ses, "easy");
    renderStudy(ses.pane, ses.mod);
    return true;
  }

  /* 1/2/3 shortcuts in a study session: rate Again/Good/Easy directly once
   * the answer is revealed (Anki-style), and Z to undo the last rating --
   * from either the active card or the "session complete" screen. */
  function handleStudyNumberKey(n) {
    var ses = state.session;
    if (!ses || ses.done || ses.i >= ses.cards.length || !ses.revealed) return false;
    var rating = n === "1" ? "again" : n === "2" ? "good" : "easy";
    rateSessionCard(ses, rating);
    renderStudy(ses.pane, ses.mod);
    return true;
  }
  function handleStudyUndo() {
    var ses = state.session;
    if (!ses || !undoSessionCard(ses)) return false;
    renderStudy(ses.pane, ses.mod);
    return true;
  }

  /* ---------- SEARCH ---------- */
  /* Word-prefix matcher: returns true only if every query term is the START
   * of some word in `text` (words = runs of letters/digits). So "mi" matches
   * "minute" but not "similar", and a multi-term query like "mid ear" requires
   * each term to prefix some word. */
  function matchesWordPrefix(text, terms) {
    if (!text || !terms.length) return false;
    var words = String(text).toLowerCase().match(/[a-z0-9]+/g) || [];
    return terms.every(function (term) {
      return words.some(function (w) { return w.indexOf(term) === 0; });
    });
  }

  function buildSearchIndex() {
    var idx = [];
    window.JEFFENT.modules.forEach(function (m) {
      idx.push({ type: "module", modId: m.id, title: m.title, snippet: m.subtitle || "", tab: null, anchor: null });
      var a = m.anatomy || {};
      (a.notes || []).forEach(function (n, i) {
        idx.push({ type: "anatomy", modId: m.id, title: n.title, snippet: stripHtml(n.html).slice(0, 140), tab: "anatomy", anchor: "anatomy-note-" + i, noteIndex: i });
      });
      (a.diagrams || []).forEach(function (dg, i) {
        idx.push({ type: "diagram", modId: m.id, title: dg.title, snippet: dg.note || "", tab: "anatomy", anchor: "anatomy-diagram-" + dg.id, diagramIndex: i });
      });
      var c = m.clinical || {};
      (c.blocks || []).forEach(function (b) {
        idx.push({ type: "clinical", modId: m.id, title: b.title, snippet: stripHtml(b.html || b.scenario || "").slice(0, 140), tab: "clinical", anchor: "clinical-block-" + b.id });
      });
      (m.cases || []).forEach(function (cs) {
        idx.push({ type: "case", modId: m.id, title: stripHtml(cs.stem).slice(0, 90), snippet: cs.teaching || "", tab: "cases", anchor: "case-" + cs.id });
      });
      (m.cards || []).forEach(function (card) {
        idx.push({ type: "card", modId: m.id, title: stripHtml(effectiveFront(m.id, card)), snippet: stripHtml(effectiveBack(m.id, card)).slice(0, 140), tab: "cards", cardId: card.id });
      });
    });
    return idx;
  }

  function initSearch() {
    var input = el("searchInput");
    var results = el("searchResults");
    if (!input || !results) return;
    var index = buildSearchIndex();

    function closeResults() { results.hidden = true; results.innerHTML = ""; }

    function renderResults(query) {
      var q = query.trim().toLowerCase();
      if (q.length < 2) { closeResults(); return; }
      var terms = q.split(/\s+/).filter(function (x) { return x; });
      var matches = index.filter(function (e) {
        return matchesWordPrefix(e.title, terms) || matchesWordPrefix(e.snippet, terms);
      });
      results.innerHTML = "";
      if (matches.length === 0) {
        results.appendChild(h('<div class="search-empty">No matches for "' + esc(query.trim()) + '".</div>'));
        results.hidden = false;
        return;
      }
      var order = ["module", "anatomy", "diagram", "clinical", "case", "card"];
      var groupLabels = { module: "Topics", anatomy: "Anatomy notes", diagram: "Diagrams", clinical: "Clinical", case: "Cases", card: "Cards" };
      var groups = {};
      matches.forEach(function (e) { (groups[e.type] = groups[e.type] || []).push(e); });
      order.forEach(function (type) {
        if (!groups[type] || !groups[type].length) return;
        results.appendChild(h('<div class="search-group-label">' + groupLabels[type] + '</div>'));
        groups[type].slice(0, 8).forEach(function (e) {
          var mod = window.JEFFENT.get(e.modId);
          var item = h(
            '<button type="button" class="search-item">' +
              '<span class="si-type">' + (mod ? esc(mod.trackAbbr || "") : "") + '</span>' +
              '<span class="si-body"><span class="si-title">' + highlightText(e.title, q) + '</span>' +
              (e.snippet ? '<span class="si-snippet">' + highlightText(e.snippet, q) + '</span>' : '') + '</span>' +
            '</button>'
          );
          item.addEventListener("click", function () {
            openSearchResult(e);
            input.value = ""; closeResults(); input.blur();
          });
          results.appendChild(item);
        });
      });
      results.hidden = false;
    }

    function openSearchResult(entry) {
      var mod = window.JEFFENT.get(entry.modId);
      if (!mod) return;
      goModule(entry.modId);
      var root = el("screen-module");
      if (entry.tab) {
        state.tab = entry.tab;
        saveLastTab(entry.modId, entry.tab);
        renderTabState(root, mod);
      }
      if (entry.type === "card" && entry.cardId) {
        var card = (mod.cards || []).filter(function (c) { return c.id === entry.cardId; })[0];
        var cardsPane = el("pane-cards");
        if (card && cardsPane) startSession(cardsPane, mod, "search", [card]);
        return;
      }
      /* Anatomy notes/diagrams now live behind their own detail page rather
       * than always being on-screen, open the right one before scrolling. */
      if (entry.type === "anatomy" && typeof entry.noteIndex === "number") {
        state.anatomyTopic = { kind: "note", index: entry.noteIndex };
        var anatomyPane1 = el("pane-anatomy");
        if (anatomyPane1) renderAnatomyPane(anatomyPane1, mod);
      } else if (entry.type === "diagram" && typeof entry.diagramIndex === "number") {
        state.anatomyTopic = { kind: "diagram", index: entry.diagramIndex };
        var anatomyPane2 = el("pane-anatomy");
        if (anatomyPane2) renderAnatomyPane(anatomyPane2, mod);
      }
      if (entry.anchor) {
        var target = root.querySelector('[data-anchor="' + entry.anchor + '"]');
        if (target) {
          if (target.scrollIntoView) target.scrollIntoView({ behavior: "smooth", block: "center" });
          target.classList.add("search-target-hit");
          setTimeout(function () { target.classList.remove("search-target-hit"); }, 1600);
        }
      }
    }

    input.addEventListener("input", function () { renderResults(input.value); });
    input.addEventListener("focus", function () { if (input.value.trim().length >= 2) renderResults(input.value); });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { input.blur(); closeResults(); }
      else if (e.key === "Enter") {
        var first = results.querySelector(".search-item");
        if (first) first.click();
      }
    });
    document.addEventListener("click", function (e) {
      if (e.target !== input && !results.contains(e.target)) closeResults();
    });
  }

  /* ---------- study settings (again/good/easy intervals, new-card cap, resets) ---------- */
  function refreshHomeIfNeeded() {
    if (state.session && !state.session.done) return;
    if (state.screen === "home") renderHome();
    else if (state.screen === "track" && state.trackId) renderTrack(state.trackId);
    else if (state.screen === "module" && state.moduleId) renderModule(state.moduleId);
    else if (state.screen === "study") renderStudyAllIntro();
  }

  function initSettings() {
    var toggle = el("settingsToggle");
    var panel = el("settingsPanel");

    function moduleOptions() {
      return window.JEFFENT.modules.slice().sort(function (a, b) {
        return (a.title || "").localeCompare(b.title || "");
      }).map(function (m) { return { value: m.id, label: m.title }; });
    }

    function renderPanel() {
      var s = window.SRS.getSettings();
      var newCapOptions = [0, 5, 10, 15, 20, 30];
      var lastModuleId = state.moduleId || (window.JEFFENT.modules[0] && window.JEFFENT.modules[0].id) || "";
      panel.innerHTML =
        '<div class="settings-title">Study settings</div>' +
        '<div class="settings-row">' +
          '<label for="againInput">Again <span class="settings-preview mono">minutes</span></label>' +
          '<input type="number" id="againInput" min="1" max="1440" step="1" value="' + s.againMinutes + '">' +
        '</div>' +
        '<div class="settings-row">' +
          '<label for="goodInput">Good <span class="settings-preview mono">days</span></label>' +
          '<input type="number" id="goodInput" min="1" max="365" step="1" value="' + s.goodDays + '">' +
        '</div>' +
        '<div class="settings-row">' +
          '<label for="easyInput">Easy <span class="settings-preview mono">days</span></label>' +
          '<input type="number" id="easyInput" min="1" max="365" step="1" value="' + s.easyDays + '">' +
        '</div>' +
        '<div class="settings-row">' +
          '<span class="settings-label" id="newCardsLabel">New cards / day</span>' +
          '<div id="newCardsSelectMount"></div>' +
        '</div>' +
        '<button type="button" class="settings-reset mono" id="settingsReset">Reset intervals to defaults</button>' +
        '<div class="settings-divider"></div>' +
        '<div class="settings-row">' +
          '<span class="settings-label" id="resetModuleLabel">Reset one module&rsquo;s cards</span>' +
          '<div id="resetModuleSelectMount"></div>' +
          '<button type="button" class="settings-danger mono" id="resetModuleBtn">Reset this module&rsquo;s progress</button>' +
        '</div>' +
        '<button type="button" class="settings-danger mono" id="resetAllBtn">Reset ALL progress</button>' +
        '<div class="settings-note" id="settingsNote" hidden></div>';

      var newCardsSel = buildCustomSelect({
        value: s.newCardsPerDay,
        options: newCapOptions.map(function (n) { return { value: n, label: n === 0 ? "Unlimited" : String(n) }; }),
        ariaLabel: "New cards per day",
        onChange: function (v) {
          window.SRS.setSettings({ newCardsPerDay: Number(v) });
          refreshHomeIfNeeded();
        }
      });
      el("newCardsSelectMount").appendChild(newCardsSel);

      var resetModuleSel = buildCustomSelect({
        value: lastModuleId,
        options: moduleOptions(),
        ariaLabel: "Module to reset",
        onChange: function () {}
      });
      el("resetModuleSelectMount").appendChild(resetModuleSel);

      function flash(msg) {
        var note = el("settingsNote");
        note.textContent = msg;
        note.hidden = false;
      }

      function commitIntervals() {
        window.SRS.setSettings({
          againMinutes: Number(el("againInput").value),
          goodDays: Number(el("goodInput").value),
          easyDays: Number(el("easyInput").value)
        });
        refreshHomeIfNeeded();
      }

      on(el("againInput"), "change", commitIntervals);
      on(el("goodInput"), "change", commitIntervals);
      on(el("easyInput"), "change", commitIntervals);

      on(el("settingsReset"), "click", function () {
        window.SRS.setSettings(window.SRS.defaultSettings());
        renderPanel();
        refreshHomeIfNeeded();
      });

      on(el("resetModuleBtn"), "click", function () {
        var moduleId = resetModuleSel.getValue();
        var mod = window.JEFFENT.get(moduleId);
        var label = mod ? mod.title : moduleId;
        if (!window.confirm('Reset all progress for "' + label + '"? This clears every card you\'ve rated in that module.')) return;
        window.SRS.reset(moduleId);
        refreshHomeIfNeeded();
        flash('Reset "' + label + '".');
      });

      on(el("resetAllBtn"), "click", function () {
        if (!window.confirm("Reset ALL progress across every module? This can\'t be undone.")) return;
        window.SRS.resetAll();
        refreshHomeIfNeeded();
        flash("All progress reset.");
      });
    }

    function openPanel() {
      renderPanel();
      panel.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
    }
    function closePanel() {
      panel.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    }

    on(toggle, "click", function (e) {
      e.stopPropagation();
      if (panel.hidden) openPanel(); else closePanel();
    });
    on(panel, "click", function (e) { e.stopPropagation(); });
    document.addEventListener("click", function (e) {
      if (!panel.hidden && e.target !== toggle && !panel.contains(e.target)) closePanel();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !panel.hidden) closePanel();
    });
  }

  function initLightbox() {
    var box=null, imgEl=null, capEl=null, stage=null;
    var scale=1, tx=0, ty=0, drag=null;
    function apply(){ imgEl.style.transform="translate("+tx+"px,"+ty+"px) scale("+scale+")"; imgEl.style.cursor = scale>1 ? "grab" : "zoom-in"; }
    function resetZoom(){ scale=1; tx=0; ty=0; if(imgEl) apply(); }
    function ensure(){
      if(box) return;
      box=h('<div class="lightbox" hidden role="dialog" aria-modal="true">'+
        '<button class="lightbox-close" aria-label="Close figure" title="Close">×</button>'+
        '<div class="lightbox-tools"><button type="button" data-z="out" aria-label="Zoom out">−</button>'+
        '<button type="button" data-z="reset">Reset</button>'+
        '<button type="button" data-z="in" aria-label="Zoom in">+</button></div>'+
        '<div class="lightbox-stage"><img alt=""></div>'+
        '<div class="lightbox-cap"></div></div>');
      stage=box.querySelector(".lightbox-stage");
      imgEl=box.querySelector("img"); capEl=box.querySelector(".lightbox-cap");
      box.querySelector(".lightbox-close").addEventListener("click", function(e){ e.stopPropagation(); close(); });
      box.querySelector(".lightbox-tools").addEventListener("click", function(e){
        var z=e.target.getAttribute("data-z"); if(!z) return; e.stopPropagation();
        if(z==="in") scale=Math.min(scale*1.25,6);
        else if(z==="out") scale=Math.max(scale/1.25,1);
        else scale=1;
        if(scale===1){ tx=0; ty=0; } apply();
      });
      box.addEventListener("click", function(e){ if(e.target===box || e.target===stage) close(); });
      stage.addEventListener("wheel", function(e){ e.preventDefault(); var f=e.deltaY<0?1.12:1/1.12; scale=Math.min(Math.max(scale*f,1),6); if(scale===1){tx=0;ty=0;} apply(); }, {passive:false});
      imgEl.addEventListener("dblclick", function(e){ e.preventDefault(); if(scale>1) resetZoom(); else { scale=2; apply(); } });
      imgEl.addEventListener("mousedown", function(e){ if(scale<=1) return; e.preventDefault(); drag={x:e.clientX,y:e.clientY,tx:tx,ty:ty}; imgEl.style.cursor="grabbing"; });
      window.addEventListener("mousemove", function(e){ if(!drag) return; tx=drag.tx+(e.clientX-drag.x); ty=drag.ty+(e.clientY-drag.y); apply(); });
      window.addEventListener("mouseup", function(){ if(drag){ drag=null; if(imgEl) imgEl.style.cursor=scale>1?"grab":"zoom-in"; } });
      document.body.appendChild(box);
    }
    function open(src,cap){ ensure(); resetZoom(); imgEl.src=src; imgEl.alt=cap||""; capEl.textContent=cap||""; box.hidden=false; }
    function close(){ if(box){ box.hidden=true; resetZoom(); } }
    document.addEventListener("click", function(e){
      var t=e.target;
      if(t && t.tagName==="IMG" && t.classList.contains("zoomable")){
        var fig=t.closest?t.closest("figure"):null;
        var cap=fig?(fig.getAttribute("data-credit")||""):(t.getAttribute("alt")||"");
        open(t.getAttribute("src"),cap);
      }
    });
    document.addEventListener("keydown", function(e){ if(e.key==="Escape") close(); });
  }

  /* Sets --topbar-h so the sticky .page-head strip can pin itself exactly
     below the (also sticky) topbar, on any screen width. */
  function initTopbarHeightVar() {
    function measure() {
      var tb = document.querySelector(".topbar");
      if (tb) document.documentElement.style.setProperty("--topbar-h", tb.offsetHeight + "px");
    }
    measure();
    window.addEventListener("resize", measure);
  }

  /* Click any table (wrapped in .tbl-scroll) to read it enlarged. A second,
     simpler lightbox alongside the figure one -- no pan/zoom needed, just
     bigger type and roomier cells. Escape/backdrop/× all close it. */
  function initTableLightbox() {
    var box = null, panel = null;
    function ensure() {
      if (box) return;
      box = h('<div class="table-lightbox" hidden role="dialog" aria-modal="true">' +
        '<button class="tl-close" aria-label="Close table">×</button>' +
        '<div class="tl-panel"></div></div>');
      panel = box.querySelector(".tl-panel");
      box.querySelector(".tl-close").addEventListener("click", function (e) { e.stopPropagation(); close(); });
      box.addEventListener("click", function (e) { if (e.target === box) close(); });
      document.body.appendChild(box);
    }
    function open(tableEl) {
      ensure();
      panel.innerHTML = "";
      panel.appendChild(tableEl.cloneNode(true));
      box.hidden = false;
    }
    function close() { if (box) box.hidden = true; }
    document.addEventListener("click", function (e) {
      var wrap = e.target.closest && e.target.closest(".tbl-scroll");
      if (!wrap) return;
      /* The zoom affordance is only the ⤢ icon in the top-right corner
         (drawn as ::after, so it isn't a real click target) -- gate on
         pointer position instead of opening for any click on the table. */
      var r = wrap.getBoundingClientRect();
      var zone = 34;
      var inZone = e.clientX >= r.right - zone && e.clientX <= r.right &&
        e.clientY >= r.top && e.clientY <= r.top + zone;
      if (!inZone) return;
      var table = wrap.querySelector("table");
      if (table) open(table);
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  /* ---------- SIDE NAVIGATION ---------- */
  function initSideNav() {
    var main = el("main");
    var nav = document.createElement("nav");
    nav.id = "sidenav"; nav.className = "sidenav"; nav.setAttribute("aria-label", "Subspecialties");
    document.body.insertBefore(nav, main);
    var bd = document.createElement("div"); bd.id = "navBackdrop"; bd.className = "nav-backdrop";
    document.body.appendChild(bd);
    bd.addEventListener("click", closeNav);
    buildSideNav();
    var t = el("navToggle"); if (t) t.addEventListener("click", toggleNav);
    syncNavAria();
  }
  function buildSideNav() {
    var nav = el("sidenav"); if (!nav) return;
    nav.innerHTML = "";
    var home = h('<button type="button" class="sn-item sn-home" data-nav="home"><span class="sn-ic">⌂</span><span>Home</span></button>');
    home.addEventListener("click", function () { goHome(); closeNav(); });
    nav.appendChild(home);
    var roadmapNav = h('<button type="button" class="sn-item sn-roadmap" data-nav="roadmap"><span class="sn-ic">🗺</span><span>Curriculum roadmap</span></button>');
    roadmapNav.addEventListener("click", function () { goRoadmap(); closeNav(); });
    nav.appendChild(roadmapNav);
    var libraryNav = h('<button type="button" class="sn-item sn-library" data-nav="library"><span class="sn-ic">🗃</span><span>Card Library</span></button>');
    libraryNav.addEventListener("click", function () { goCardLibrary(); closeNav(); });
    nav.appendChild(libraryNav);
    if (pimpBank() && (pimpBank().sets || []).length) {
      var pimpNav = h('<button type="button" class="sn-item sn-pimp" data-nav="pimp"><span class="sn-ic">🎓</span><span>Frequently Asked Questions</span></button>');
      pimpNav.addEventListener("click", function () { goPimp(); closeNav(); });
      nav.appendChild(pimpNav);
    }
    nav.appendChild(h('<div class="sn-label">Subspecialties</div>'));
    TRACKS.forEach(function (t) {
      var mods = modulesFor(t.id);
      if (mods.length === 0) return;
      var modId = mods[0].id;
      var groupStyle = t.color ? ' style="--track-color:' + t.color + '"' : "";
      var group = h('<div class="sn-group" data-track="' + t.id + '"' + groupStyle + '></div>');
      var row = h('<button type="button" class="sn-item sn-trackrow" data-track="' + t.id + '"><span class="sn-ic">' + trackBadge(t, "sn-badge", 16) + '</span><span class="sn-name">' + esc(t.name) + '</span><span class="sn-caret" aria-hidden="true">\u25B8</span></button>');
      row.addEventListener("click", function () { group.classList.toggle("open"); });
      var sub = h('<div class="sn-sub"></div>');
      availableTabs(mods[0]).forEach(function (tab) {
        var si = h('<button type="button" class="sn-subitem" data-track="' + t.id + '" data-tab="' + tab + '">' + TAB_LABELS[tab] + '</button>');
        si.addEventListener("click", function (e) { e.stopPropagation(); goModuleTab(modId, tab); closeNav(); });
        sub.appendChild(si);
      });
      group.appendChild(row); group.appendChild(sub);
      nav.appendChild(group);
    });
    refreshSideNav();
  }
  function goModuleTab(moduleId, tab) {
    var mod = window.JEFFENT.get(moduleId); if (!mod) return;
    state.screen = "module"; state.moduleId = moduleId; state.session = null; state.anatomyTopic = null; state.caseSession = null;
    var av = availableTabs(mod);
    state.tab = (av.indexOf(tab) === -1 ? av[0] : tab);
    saveLastTab(moduleId, state.tab);
    renderModule(moduleId); showScreen("module");
  }
  function refreshSideNav() {
    var nav = el("sidenav"); if (!nav) return;
    var curTrack = (state.screen === "module" && state.moduleId) ? (window.JEFFENT.get(state.moduleId) || {}).track : null;
    var curTab = state.tab;
    var homeBtn = nav.querySelector('.sn-home');
    if (homeBtn) homeBtn.classList.toggle("active", state.screen === "home");
    var pimpBtn = nav.querySelector('.sn-pimp');
    if (pimpBtn) pimpBtn.classList.toggle("active", state.screen === "pimp");
    var roadmapBtn = nav.querySelector('.sn-roadmap');
    if (roadmapBtn) roadmapBtn.classList.toggle("active", state.screen === "roadmap");
    var libraryBtn = nav.querySelector('.sn-library');
    if (libraryBtn) libraryBtn.classList.toggle("active", state.screen === "library");
    nav.querySelectorAll(".sn-group").forEach(function (g) {
      var on = g.dataset.track === curTrack;
      if (on) g.classList.add("open");
      var row = g.querySelector(".sn-trackrow");
      if (row) row.classList.toggle("active", on);
      g.querySelectorAll(".sn-subitem").forEach(function (si) {
        si.classList.toggle("active", on && si.dataset.tab === curTab);
      });
    });
  }
  var SIDEBAR_BP = 1040; /* matches the CSS breakpoint where the drawer becomes a rail */
  /* At >=1040px the toggle collapses/expands the persistent rail (state
     remembered in localStorage). Below that it's the original mobile
     overlay drawer -- two different mechanisms sharing one button. */
  function toggleNav() {
    if (window.innerWidth >= SIDEBAR_BP) {
      var collapsed = !document.body.classList.contains("sidebar-collapsed");
      document.body.classList.toggle("sidebar-collapsed", collapsed);
      try { localStorage.setItem("jeffent.sidebarCollapsed", collapsed ? "1" : "0"); } catch (e) {}
    } else {
      document.body.classList.toggle("nav-open");
    }
    syncNavAria();
  }
  function closeNav() {
    if (window.innerWidth < SIDEBAR_BP) document.body.classList.remove("nav-open");
    syncNavAria();
  }
  function closeNavIfNarrow() { if (window.innerWidth < 1024) closeNav(); }
  function syncNavAria() {
    var t = el("navToggle"); if (!t) return;
    var collapsed = window.innerWidth >= SIDEBAR_BP
      ? document.body.classList.contains("sidebar-collapsed")
      : !document.body.classList.contains("nav-open");
    t.setAttribute("aria-expanded", collapsed ? "false" : "true");
  }
  function initSidebarCollapsedState() {
    var saved;
    try { saved = localStorage.getItem("jeffent.sidebarCollapsed"); } catch (e) {}
    if (saved === "1") document.body.classList.add("sidebar-collapsed");
  }

  /* ---------- PIMP QUESTIONS (self-graded oral-recall quiz by specialty/procedure) ----------
   * Reads the data-only bank on window.JEFFENT.pimp (content/pimp-questions.js).
   * A quiz session lives in `pq`; it is self-contained and never touches SRS or
   * state.session -- these are oral-exam prompts, self-graded Got it / Missed,
   * not spaced-repetition cards. */
  var pq = null;

  function pimpBank() { return window.JEFFENT.pimp || null; }

  function pimpShuffleOn() {
    try { return localStorage.getItem("jeffent.pqShuffle") === "1"; } catch (e) { return false; }
  }
  function setPimpShuffle(on) {
    try { localStorage.setItem("jeffent.pqShuffle", on ? "1" : "0"); } catch (e) {}
  }
  function shuffled(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  /* Flatten a set's questions, tagging each with its set/group/track (so the quiz
   * card can show where it came from) and a stable qid = "<setId>:<index>" used
   * for the most-missed tally. Set ids and question order are stable, so the qid
   * survives page reloads. */
  function pimpQuestionsForSet(set) {
    return (set.questions || []).map(function (q, i) {
      return { qid: set.id + ":" + i, q: q.q, a: q.a, setTitle: set.title, group: set.group, track: set.track };
    });
  }

  /* Most-missed tally, kept per-browser in localStorage as { qid: missCount }.
   * A "Missed" bumps the count; a "Got it" walks it back down, so a question you
   * have since learned drops off the review list once you stop missing it. */
  function pqMissLoad() {
    try { var r = localStorage.getItem("jeffent.pqmiss"); return r ? JSON.parse(r) : {}; }
    catch (e) { return {}; }
  }
  function pqMissSave(m) { try { localStorage.setItem("jeffent.pqmiss", JSON.stringify(m)); } catch (e) {} }
  function pqMissAdjust(item, delta) {
    if (!item || !item.qid) return;
    var m = pqMissLoad();
    var c = (m[item.qid] || 0) + delta;
    if (c <= 0) { delete m[item.qid]; } else { m[item.qid] = c; }
    pqMissSave(m);
  }
  function pqMissCount() {
    var m = pqMissLoad(), n = 0;
    for (var k in m) { if (m.hasOwnProperty(k) && m[k] > 0) n++; }
    return n;
  }
  function pqMissedQuestions() {
    var m = pqMissLoad();
    var out = pimpAllQuestions().filter(function (it) { return m[it.qid] > 0; });
    out.sort(function (a, b) { return (m[b.qid] || 0) - (m[a.qid] || 0); });
    return out;
  }
  function pqMissReset() { pqMissSave({}); }
  function pimpQuestionsForGroup(group) {
    var out = [];
    (pimpBank().sets || []).forEach(function (s) { if (s.group === group) out = out.concat(pimpQuestionsForSet(s)); });
    return out;
  }
  function pimpAllQuestions() {
    var out = [];
    (pimpBank().sets || []).forEach(function (s) { out = out.concat(pimpQuestionsForSet(s)); });
    return out;
  }

  function pimpHeader(root, crumbLabel, crumbFn) {
    var crumb = h('<button class="crumb">&larr; ' + esc(crumbLabel) + '</button>');
    crumb.addEventListener("click", crumbFn);
    root.appendChild(crumb);
    root.appendChild(h('<h1 class="h-lead">Frequently Asked Questions</h1>'));
  }

  function renderPimpIntro() {
    var root = el("screen-pimp");
    root.innerHTML = "";
    pimpHeader(root, "Home", goHome);

    var bank = pimpBank();
    if (!bank || !(bank.sets || []).length) {
      root.appendChild(h('<p class="sub">No questions are loaded yet.</p>'));
      return;
    }

    var total = pimpAllQuestions().length;

    /* Top CTA: quiz everything, plus a shuffle toggle that applies to every quiz. */
    var cta = h(
      '<div class="study-cta" style="margin-top:20px">' +
        '<div><div class="n">' + total + ' questions across ' + (bank.sets || []).length + ' procedure sets</div>' +
        '<div class="cta-sub">Answer out loud, reveal the key, and mark whether you got it.</div></div>' +
        '<div class="cta-actions"></div>' +
      '</div>'
    );
    var actions = cta.querySelector(".cta-actions");
    var all = h('<button class="btn">Quiz all (' + total + ') &rarr;</button>');
    all.addEventListener("click", function () { startPimpQuiz(pimpAllQuestions(), "All questions"); });
    actions.appendChild(all);
    root.appendChild(cta);

    /* Most-missed review, shown only once you have missed something. */
    var missN = pqMissCount();
    if (missN) {
      var missCta = h(
        '<div class="study-cta pq-misscta" style="margin-top:12px">' +
          '<div><div class="n">Review your most-missed questions</div>' +
          '<div class="cta-sub">' + missN + ' question' + (missN === 1 ? '' : 's') + ' you have missed, hardest first.</div></div>' +
          '<div class="cta-actions"></div>' +
        '</div>'
      );
      var mact = missCta.querySelector(".cta-actions");
      var mbtn = h('<button class="btn">Review missed (' + missN + ') &rarr;</button>');
      mbtn.addEventListener("click", function () { startPimpQuiz(pqMissedQuestions(), "Most missed"); });
      mact.appendChild(mbtn);
      var mreset = h('<button class="btn ghost">Reset</button>');
      mreset.addEventListener("click", function () { pqMissReset(); renderPimpIntro(); });
      mact.appendChild(mreset);
      root.appendChild(missCta);
    }

    var shuffleWrap = h('<label class="pq-shuffle mono"><input type="checkbox" id="pqShuffle"> Shuffle question order</label>');
    root.appendChild(shuffleWrap);
    var chk = el("pqShuffle"); if (chk) { chk.checked = pimpShuffleOn(); chk.addEventListener("change", function () { setPimpShuffle(chk.checked); }); }

    /* One block per subspecialty group, in the order the data file lists them. */
    var groups = [];
    (bank.sets || []).forEach(function (s) { if (groups.indexOf(s.group) === -1) groups.push(s.group); });
    groups.forEach(function (group) {
      var setsIn = (bank.sets || []).filter(function (s) { return s.group === group; });
      var gTrack = setsIn[0] ? trackById(setsIn[0].track) : null;
      var gCount = setsIn.reduce(function (n, s) { return n + (s.questions || []).length; }, 0);
      var headStyle = gTrack && gTrack.color ? ' style="--track-color:' + gTrack.color + '"' : "";
      root.appendChild(h(
        '<div class="section-head pq-grouphead"' + headStyle + ' style="margin-top:28px">' +
          '<h2>' + (gTrack ? trackBadge(gTrack, "pq-groupbadge", 16) : "") + esc(group) + '</h2>' +
        '</div>'
      ));
      var list = h('<div class="mod-list"' + headStyle + '></div>');
      /* "whole subspecialty" row first */
      var allRow = h(
        '<button class="mod-row pq-allrow" type="button">' +
          '<div class="row-top"><h3>All of ' + esc(group) + '</h3><span class="status-chip">' + gCount + ' Qs</span></div>' +
          '<p>Every set in this subspecialty.</p>' +
        '</button>'
      );
      allRow.addEventListener("click", function () { startPimpQuiz(pimpQuestionsForGroup(group), group); });
      list.appendChild(allRow);
      setsIn.forEach(function (s) {
        var row = h(
          '<button class="mod-row" type="button">' +
            '<div class="row-top"><h3>' + esc(s.title) + '</h3><span class="status-chip">' + (s.questions || []).length + ' Qs</span></div>' +
            '<p>' + esc(group) + '</p>' +
          '</button>'
        );
        row.addEventListener("click", function () { startPimpQuiz(pimpQuestionsForSet(s), s.title); });
        list.appendChild(row);
      });
      root.appendChild(list);
    });
  }

  function startPimpQuiz(questions, label) {
    var qs = pimpShuffleOn() ? shuffled(questions) : questions.slice();
    pq = { qs: qs, i: 0, revealed: false, label: label || "Questions", got: 0, missed: 0, missedQs: [] };
    renderPimpQuiz();
  }

  /* Grading, shared by the buttons and the spacebar shortcut. "Got it" walks the
   * most-missed count down; "Missed" bumps it and remembers the item for a
   * same-session redo. */
  function pimpAdvance() { pq.i++; pq.revealed = false; renderPimpQuiz(); }
  function pimpMarkGot(item) { pq.got++; pqMissAdjust(item, -1); pimpAdvance(); }
  function pimpMarkMissed(item) { pq.missed++; pq.missedQs.push(item); pqMissAdjust(item, 1); pimpAdvance(); }

  function renderPimpQuiz() {
    var root = el("screen-pimp");
    root.innerHTML = "";
    pimpHeader(root, "All question sets", renderPimpIntro);
    if (!pq) { renderPimpIntro(); return; }

    var total = pq.qs.length;

    /* ---- summary ---- */
    if (pq.i >= total) {
      var answered = pq.got + pq.missed;
      var pct = answered ? Math.round(pq.got / answered * 100) : 0;
      var summary = h('<div class="pq-summary"></div>');
      summary.appendChild(h('<div class="pq-scorebig">' + pct + '%</div>'));
      summary.appendChild(h('<div class="pq-scoreline mono">' + pq.got + ' of ' + answered + ' marked correct &middot; ' + esc(pq.label) + '</div>'));
      var acts = h('<div class="pq-summary-actions"></div>');
      if (pq.missedQs.length) {
        var redo = h('<button class="btn">Redo missed (' + pq.missedQs.length + ') &rarr;</button>');
        var missedList = pq.missedQs.slice();
        redo.addEventListener("click", function () { startPimpQuiz(missedList, pq.label + " · missed"); });
        acts.appendChild(redo);
      }
      var restart = h('<button class="btn ghost">Restart set</button>');
      var full = pq.qs.slice();
      restart.addEventListener("click", function () { startPimpQuiz(full, pq.label); });
      acts.appendChild(restart);
      var back = h('<button class="btn ghost">Back to sets</button>');
      back.addEventListener("click", renderPimpIntro);
      acts.appendChild(back);
      summary.appendChild(acts);
      root.appendChild(summary);
      return;
    }

    /* ---- one question ---- */
    var item = pq.qs[pq.i];
    var pctDone = Math.round(pq.i / total * 100);
    var shell = h('<div class="study-shell"></div>');
    shell.appendChild(h('<div class="progress"><i style="width:' + pctDone + '%"></i></div>'));
    shell.appendChild(h('<div class="mono" style="font-size:12px;color:var(--ink-faint);margin-bottom:12px">Question ' + (pq.i + 1) + ' of ' + total + ' &middot; ' + esc(pq.label) + '</div>'));

    var card = h('<div class="flashcard pq-card"></div>');
    var srcTrack = trackById(item.track);
    var srcTags = '<div class="card-tags">' +
      (srcTrack ? '<span class="pill track" title="' + esc(item.group || "") + '">' + esc(srcTrack.abbr || srcTrack.name) + '</span>' : "") +
      '<span class="pill">' + esc(item.setTitle || "") + '</span>' +
      '</div>';
    card.appendChild(h(srcTags));
    var qEl = document.createElement("div"); qEl.className = "pq-q"; qEl.textContent = item.q;
    card.appendChild(qEl);
    if (pq.revealed) {
      var aEl = document.createElement("div"); aEl.className = "pq-a"; aEl.textContent = item.a;
      card.appendChild(aEl);
    }
    shell.appendChild(card);
    linkGlossaryTerms(card);
    enhanceReferenceTables(card);

    if (!pq.revealed) {
      var rv = h('<div style="text-align:center"><button class="btn reveal-btn">Show answer</button></div>');
      rv.querySelector("button").addEventListener("click", function () { pq.revealed = true; renderPimpQuiz(); });
      shell.appendChild(rv);
    } else {
      var ctr = h('<div class="answer-controls pq-controls"></div>');
      var missBtn = h('<button class="rate again">Missed</button>');
      missBtn.addEventListener("click", function () { pimpMarkMissed(item); });
      var gotBtn = h('<button class="rate pq-got">Got it</button>');
      gotBtn.addEventListener("click", function () { pimpMarkGot(item); });
      ctr.appendChild(missBtn); ctr.appendChild(gotBtn);
      shell.appendChild(ctr);
      shell.appendChild(h('<div class="kbd-hint mono">Space = Got it</div>'));
    }
    root.appendChild(shell);
  }

  /* Spacebar in the FAQ quiz: reveal the answer, then mark it correct. */
  function handlePimpSpace() {
    if (!pq || pq.i >= pq.qs.length) return false;
    if (!pq.revealed) { pq.revealed = true; renderPimpQuiz(); return true; }
    pimpMarkGot(pq.qs[pq.i]);
    return true;
  }

  /* ---------- TOAST (tiny transient confirmation, e.g. "Pearl saved") ---------- */
  var toastTimer = null;
  function showToast(msg) {
    var t = el("appToast");
    if (!t) {
      t = document.createElement("div");
      t.id = "appToast"; t.className = "app-toast"; t.setAttribute("role", "status"); t.setAttribute("aria-live", "polite");
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.remove("show"); void t.offsetWidth; t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }

  /* ---------- DOWNLOAD HELPER (client-side export, no server) ---------- */
  function downloadTextFile(filename, content, mime) {
    var blob = new Blob([content], { type: (mime || "text/plain") + ";charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = filename; a.style.display = "none";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }
  function csvField(v) {
    v = String(v == null ? "" : v);
    return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
  }

  /* ---------- OR POCKET LOG: Saved Pearls + Quick Log (local-only, no PII) ----------
   * Two independent localStorage lists a learner builds up themselves --
   * pearls bookmarked from clinical/procedure content (togglePearl, called
   * from bookmarkButton()) and free-text case notes they type themselves
   * (addLogEntry). Both are per-browser only, exportable as Markdown/CSV,
   * and never sent anywhere -- same "no accounts, no PII" posture as the
   * rest of the app. See CLAUDE.md "Not this project's job". */
  var PEARLS_KEY = "jeffent.pearls";
  var CASELOG_KEY = "jeffent.caselog";
  function loadPearls() { try { return JSON.parse(localStorage.getItem(PEARLS_KEY) || "[]"); } catch (e) { return []; } }
  function savePearls(list) { try { localStorage.setItem(PEARLS_KEY, JSON.stringify(list)); } catch (e) {} }
  function isPearlSaved(id) {
    var list = loadPearls();
    for (var i = 0; i < list.length; i++) { if (list[i].id === id) return true; }
    return false;
  }
  /* Returns the new saved state (true = just saved, false = just removed). */
  function togglePearl(meta) {
    var list = loadPearls();
    var idx = -1;
    for (var i = 0; i < list.length; i++) { if (list[i].id === meta.id) { idx = i; break; } }
    if (idx !== -1) {
      list.splice(idx, 1);
      savePearls(list);
      showToast("Pearl removed");
      renderPocketLogIfOpen();
      return false;
    }
    meta.ts = Date.now();
    list.unshift(meta);
    savePearls(list);
    showToast("Saved to your Pocket Log");
    renderPocketLogIfOpen();
    return true;
  }
  function deletePearl(id) {
    var list = loadPearls().filter(function (p) { return p.id !== id; });
    savePearls(list);
    renderPocketLogIfOpen();
  }
  function loadCaseLog() { try { return JSON.parse(localStorage.getItem(CASELOG_KEY) || "[]"); } catch (e) { return []; } }
  function saveCaseLog(list) { try { localStorage.setItem(CASELOG_KEY, JSON.stringify(list)); } catch (e) {} }
  function addLogEntry(text) {
    text = (text || "").trim();
    if (!text) return;
    var list = loadCaseLog();
    list.unshift({ id: "log-" + Date.now() + "-" + Math.random().toString(36).slice(2, 7), ts: Date.now(), text: text });
    saveCaseLog(list);
    renderPocketLogIfOpen();
  }
  function deleteLogEntry(id) {
    var list = loadCaseLog().filter(function (e) { return e.id !== id; });
    saveCaseLog(list);
    renderPocketLogIfOpen();
  }
  function fmtLogDate(ts) {
    var d = new Date(ts);
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric" }) + " · " + d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  }

  /* A small star/bookmark button, reused next to every pearl / clinical
   * block / anatomy lesson. `meta` is the pearl record it saves: { id
   * (stable + unique), title, snippet (plain text), moduleId, moduleTitle,
   * tab, anchor (for jump-back-to-source) }. */
  function bookmarkButton(meta) {
    var saved = isPearlSaved(meta.id);
    var btn = h(
      '<button type="button" class="pearl-bookmark-btn' + (saved ? " saved" : "") + '" aria-pressed="' + (saved ? "true" : "false") + '" data-tip="' + (saved ? "Saved" : "Save as pearl") + '" aria-label="' + (saved ? "Remove from Pocket Log" : "Save as pearl") + '">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"/></svg>' +
      '</button>'
    );
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var nowSaved = togglePearl(meta);
      btn.classList.toggle("saved", nowSaved);
      btn.setAttribute("aria-pressed", nowSaved ? "true" : "false");
      btn.setAttribute("aria-label", nowSaved ? "Remove from Pocket Log" : "Save as pearl");
      btn.setAttribute("data-tip", nowSaved ? "Saved" : "Save as pearl");
    });
    return btn;
  }
  /* Bookmarks the pearl/lesson currently open, for the "B" keyboard
   * shortcut -- mirrors whatever bookmarkButton() would have built for the
   * page's primary content, since there's no single focused button to
   * click. Returns true if it found something bookmarkable. */
  function bookmarkCurrentContext() {
    if (state.screen !== "module" || !state.moduleId) return false;
    var mod = window.JEFFENT.get(state.moduleId);
    if (!mod) return false;
    if (state.tab === "anatomy" && state.anatomyTopic) {
      var a = mod.anatomy || {}, topic = state.anatomyTopic;
      var item = topic.kind === "note" ? (a.notes || [])[topic.index] : (a.diagrams || [])[topic.index];
      if (!item) return false;
      var nowSaved = togglePearl({
        id: mod.id + "::anatomy::" + topic.kind + topic.index,
        title: item.title, moduleId: mod.id, moduleTitle: mod.title, tab: "anatomy",
        snippet: stripHtml(item.html || item.note || "").slice(0, 220)
      });
      /* Keep the on-page bookmark button's visual state in sync -- it was
       * built (and its "saved" look decided) before this shortcut ran. */
      var onPageBtn = document.querySelector(".lesson-hero-actions .pearl-bookmark-btn");
      if (onPageBtn) {
        onPageBtn.classList.toggle("saved", nowSaved);
        onPageBtn.setAttribute("aria-pressed", nowSaved ? "true" : "false");
        onPageBtn.setAttribute("data-tip", nowSaved ? "Saved" : "Save as pearl");
      }
      return true;
    }
    return false;
  }

  var pocketLog = { tab: "pearls" };
  function initPocketLog() {
    var tabBtn = document.createElement("button");
    tabBtn.type = "button"; tabBtn.id = "pocketLogTab"; tabBtn.className = "pocketlog-tab";
    tabBtn.setAttribute("aria-label", "Open OR Pocket Log"); tabBtn.setAttribute("aria-expanded", "false");
    tabBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"/></svg><span>Pocket Log</span>';
    document.body.appendChild(tabBtn);
    tabBtn.addEventListener("click", togglePocketLog);

    var aside = document.createElement("aside");
    aside.id = "pocketLogPanel"; aside.className = "pocketlog-panel"; aside.setAttribute("aria-label", "OR Pocket Log");
    aside.innerHTML =
      '<div class="pl-head"><div class="pl-title"><span class="mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"/></svg></span>OR Pocket Log</div><button type="button" class="pl-close icon-btn" aria-label="Close">✕</button></div>' +
      '<div class="pl-tabs" role="tablist"><button type="button" class="pl-tabbtn" data-pltab="pearls" role="tab">Saved Pearls</button><button type="button" class="pl-tabbtn" data-pltab="log" role="tab">Quick Log</button></div>' +
      '<div class="pl-body"></div>';
    document.body.appendChild(aside);
    aside.querySelector(".pl-close").addEventListener("click", closePocketLog);
    aside.querySelectorAll(".pl-tabbtn").forEach(function (b) {
      b.addEventListener("click", function () { pocketLog.tab = b.dataset.pltab; renderPocketLog(); });
    });
  }
  function openPocketLog() {
    document.body.classList.add("pocketlog-open");
    var t = el("pocketLogTab"); if (t) t.setAttribute("aria-expanded", "true");
    renderPocketLog();
  }
  function closePocketLog() {
    document.body.classList.remove("pocketlog-open");
    var t = el("pocketLogTab"); if (t) t.setAttribute("aria-expanded", "false");
  }
  function togglePocketLog() { if (document.body.classList.contains("pocketlog-open")) closePocketLog(); else openPocketLog(); }
  function renderPocketLogIfOpen() { if (document.body.classList.contains("pocketlog-open")) renderPocketLog(); }

  function renderPocketLog() {
    var aside = el("pocketLogPanel");
    if (!aside) return;
    aside.querySelectorAll(".pl-tabbtn").forEach(function (b) {
      var active = b.dataset.pltab === pocketLog.tab;
      b.classList.toggle("active", active);
      b.setAttribute("aria-selected", active ? "true" : "false");
    });
    var body = aside.querySelector(".pl-body");
    body.innerHTML = "";
    if (pocketLog.tab === "pearls") renderPearlsTab(body); else renderQuickLogTab(body);
  }
  function renderPearlsTab(body) {
    var pearls = loadPearls();
    var actions = h('<div class="pl-actions"></div>');
    var exportBtn = h('<button type="button" class="btn ghost small" ' + (pearls.length ? "" : "disabled") + '>Export as Markdown</button>');
    exportBtn.addEventListener("click", function () { exportPearlsMarkdown(pearls); });
    actions.appendChild(exportBtn);
    body.appendChild(actions);
    if (!pearls.length) {
      body.appendChild(h('<p class="empty-note">No pearls saved yet. Click the bookmark icon next to a clinical pearl, procedure block, or anatomy lesson to pin it here.</p>'));
      return;
    }
    pearls.forEach(function (p) {
      var row = h(
        '<div class="pl-pearl">' +
          '<div class="pl-pearl-head"><span class="pl-pearl-mod mono">' + esc(p.moduleTitle || "") + '</span><button type="button" class="pl-pearl-del icon-btn" aria-label="Remove pearl">✕</button></div>' +
          '<div class="pl-pearl-title">' + esc(p.title || "") + '</div>' +
          (p.snippet ? '<div class="pl-pearl-snippet">' + esc(p.snippet) + '</div>' : '') +
        '</div>'
      );
      row.querySelector(".pl-pearl-del").addEventListener("click", function () { deletePearl(p.id); });
      row.addEventListener("click", function (e) {
        if (e.target.closest(".pl-pearl-del")) return;
        if (!p.moduleId) return;
        closePocketLog();
        goModuleTab(p.moduleId, p.tab || "clinical");
      });
      body.appendChild(row);
    });
  }
  function exportPearlsMarkdown(pearls) {
    var lines = ["# Saved Pearls (JeffENT Rotation Companion)", ""];
    pearls.forEach(function (p) {
      lines.push("## " + (p.title || "Untitled"));
      lines.push("_" + (p.moduleTitle || "") + "_");
      lines.push("");
      if (p.snippet) { lines.push(p.snippet); lines.push(""); }
    });
    downloadTextFile("pocket-log-pearls.md", lines.join("\n"), "text/markdown");
  }
  function renderQuickLogTab(body) {
    var entries = loadCaseLog();
    var form = h(
      '<div class="pl-logform">' +
        '<textarea class="pl-log-input" rows="3" placeholder="e.g. Neck dissection with Dr. X, level II-IV, spinal accessory nerve preserved" aria-label="New case log entry"></textarea>' +
        '<button type="button" class="btn small">Add entry</button>' +
      '</div>'
    );
    var input = form.querySelector(".pl-log-input");
    form.querySelector("button").addEventListener("click", function () { addLogEntry(input.value); input.value = ""; });
    input.addEventListener("keydown", function (e) { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) { addLogEntry(input.value); input.value = ""; } });
    body.appendChild(form);
    var actions = h('<div class="pl-actions"></div>');
    var mdBtn = h('<button type="button" class="btn ghost small" ' + (entries.length ? "" : "disabled") + '>Export .md</button>');
    var csvBtn = h('<button type="button" class="btn ghost small" ' + (entries.length ? "" : "disabled") + '>Export .csv</button>');
    mdBtn.addEventListener("click", function () { exportLogMarkdown(entries); });
    csvBtn.addEventListener("click", function () { exportLogCsv(entries); });
    actions.appendChild(mdBtn); actions.appendChild(csvBtn);
    body.appendChild(actions);
    if (!entries.length) {
      body.appendChild(h('<p class="empty-note">Nothing logged yet. Jot down a case you saw today.</p>'));
      return;
    }
    entries.forEach(function (e) {
      var row = h(
        '<div class="pl-logentry">' +
          '<div class="pl-logentry-head"><span class="pl-logentry-date mono">' + esc(fmtLogDate(e.ts)) + '</span><button type="button" class="pl-logentry-del icon-btn" aria-label="Delete entry">✕</button></div>' +
          '<div class="pl-logentry-text"></div>' +
        '</div>'
      );
      row.querySelector(".pl-logentry-text").textContent = e.text;
      row.querySelector(".pl-logentry-del").addEventListener("click", function () { deleteLogEntry(e.id); });
      body.appendChild(row);
    });
  }
  function exportLogMarkdown(entries) {
    var lines = ["# Quick Log (JeffENT Rotation Companion)", ""];
    entries.forEach(function (e) { lines.push("- **" + fmtLogDate(e.ts) + "**: " + e.text); });
    downloadTextFile("pocket-log-cases.md", lines.join("\n"), "text/markdown");
  }
  function exportLogCsv(entries) {
    var lines = ["date,entry"];
    entries.forEach(function (e) { lines.push(csvField(fmtLogDate(e.ts)) + "," + csvField(e.text)); });
    downloadTextFile("pocket-log-cases.csv", lines.join("\n"), "text/csv");
  }

  /* ---------- AUDIO BRIEF (Web Speech API) ----------
   * A floating mini-player that reads a lesson/procedure/clinical block
   * aloud. speechSynthesis has no seek/currentTime, so "±15s" is
   * approximated by skipping whole sentences (roughly 2 sentences at a
   * natural reading pace) rather than a literal time seek. */
  var audioBrief = { sentences: [], idx: 0, rate: 1, playing: false, label: "", activeBtn: null };
  function splitIntoSentences(text) {
    var cleaned = String(text || "").replace(/\s+/g, " ").trim();
    if (!cleaned) return [];
    var matches = cleaned.match(/[^.!?]+[.!?]+(?:\s+|$)/g);
    return matches ? matches.map(function (s) { return s.trim(); }).filter(function (s) { return s; }) : [cleaned];
  }
  function ensureBriefPlayer() {
    var bar = el("audioBriefBar");
    if (bar) return bar;
    bar = document.createElement("div");
    bar.id = "audioBriefBar"; bar.className = "audio-brief-bar"; bar.hidden = true; bar.setAttribute("role", "region"); bar.setAttribute("aria-label", "Audio brief player");
    bar.innerHTML =
      '<button type="button" class="ab-btn ab-skip" data-dir="-1" aria-label="Back 15 seconds">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 17 6 12l5-5"/><path d="M18 17l-5-5 5-5"/></svg></button>' +
      '<button type="button" class="ab-btn ab-playpause" aria-label="Play"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7Z"/></svg></button>' +
      '<button type="button" class="ab-btn ab-skip" data-dir="1" aria-label="Forward 15 seconds">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m13 17 5-5-5-5"/><path d="M6 17l5-5-5-5"/></svg></button>' +
      '<div class="ab-info"><div class="ab-label mono"></div><div class="ab-progress"><i></i></div></div>' +
      '<button type="button" class="ab-btn ab-rate mono" aria-label="Playback speed">1x</button>' +
      '<button type="button" class="ab-btn ab-close" aria-label="Stop listening">✕</button>';
    document.body.appendChild(bar);
    bar.querySelector(".ab-playpause").addEventListener("click", toggleBriefPlayback);
    bar.querySelectorAll(".ab-skip").forEach(function (b) {
      b.addEventListener("click", function () { skipBrief(parseInt(b.getAttribute("data-dir"), 10) * 2); });
    });
    bar.querySelector(".ab-rate").addEventListener("click", cycleBriefRate);
    bar.querySelector(".ab-close").addEventListener("click", stopBrief);
    return bar;
  }
  function renderBriefPlayer() {
    var bar = ensureBriefPlayer();
    bar.hidden = audioBrief.sentences.length === 0;
    bar.querySelector(".ab-label").textContent = audioBrief.label;
    bar.querySelector(".ab-rate").textContent = audioBrief.rate === 1 ? "1x" : audioBrief.rate + "x";
    var pct = audioBrief.sentences.length ? Math.round((audioBrief.idx / audioBrief.sentences.length) * 100) : 0;
    bar.querySelector(".ab-progress i").style.width = pct + "%";
    var pp = bar.querySelector(".ab-playpause");
    pp.setAttribute("aria-label", audioBrief.playing ? "Pause" : "Play");
    pp.innerHTML = audioBrief.playing
      ? '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7Z"/></svg>';
  }
  function playBriefFrom(idx) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    if (idx < 0) idx = 0;
    if (idx >= audioBrief.sentences.length) { stopBrief(); return; }
    audioBrief.idx = idx;
    var u = new SpeechSynthesisUtterance(audioBrief.sentences[idx]);
    u.rate = audioBrief.rate;
    u.onend = function () { if (audioBrief.playing) playBriefFrom(audioBrief.idx + 1); };
    window.speechSynthesis.speak(u);
    audioBrief.playing = true;
    renderBriefPlayer();
  }
  function startBrief(text, label, triggerBtn) {
    if (!window.speechSynthesis) { showToast("Read-aloud isn't supported in this browser"); return; }
    var sentences = splitIntoSentences(text);
    if (!sentences.length) return;
    if (audioBrief.activeBtn && audioBrief.activeBtn !== triggerBtn) audioBrief.activeBtn.classList.remove("playing");
    audioBrief.sentences = sentences;
    audioBrief.label = label;
    audioBrief.rate = audioBrief.rate || 1;
    audioBrief.activeBtn = triggerBtn || null;
    if (triggerBtn) triggerBtn.classList.add("playing");
    playBriefFrom(0);
  }
  function toggleBriefPlayback() {
    if (!audioBrief.sentences.length || !window.speechSynthesis) return;
    if (audioBrief.playing) { window.speechSynthesis.pause(); audioBrief.playing = false; renderBriefPlayer(); }
    else if (window.speechSynthesis.paused) { window.speechSynthesis.resume(); audioBrief.playing = true; renderBriefPlayer(); }
    else { playBriefFrom(audioBrief.idx); }
  }
  function skipBrief(deltaSentences) {
    if (!audioBrief.sentences.length) return;
    playBriefFrom(audioBrief.idx + deltaSentences);
  }
  function cycleBriefRate() {
    var rates = [1, 1.25, 1.5];
    var i = rates.indexOf(audioBrief.rate);
    audioBrief.rate = rates[(i + 1) % rates.length];
    if (audioBrief.playing) playBriefFrom(audioBrief.idx); else renderBriefPlayer();
  }
  function stopBrief() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (audioBrief.activeBtn) audioBrief.activeBtn.classList.remove("playing");
    audioBrief = { sentences: [], idx: 0, rate: audioBrief.rate, playing: false, label: "", activeBtn: null };
    renderBriefPlayer();
  }
  /* Generic "Listen" icon button for anatomy lessons / clinical blocks.
   * getTextFn is called lazily (only once clicked) so building the button
   * never has to strip HTML up front for content that's never played. */
  function audioBriefButton(getTextFn, label) {
    var btn = h(
      '<button type="button" class="audio-brief-btn" aria-label="Listen to ' + esc(label) + '" data-tip="Listen">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>' +
      '</button>'
    );
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      if (audioBrief.activeBtn === btn) { stopBrief(); return; }
      startBrief(getTextFn(), label, btn);
    });
    return btn;
  }

  /* ---------- KEYBOARD SHORTCUTS CHEATSHEET (the "?" modal) ---------- */
  var SHORTCUT_GROUPS = [
    { title: "Flashcards & quizzes", items: [["Space", "Flip / reveal"], ["1 · 2 · 3", "Rate Again · Good · Easy"], ["Z", "Undo last rating"]] },
    { title: "Reading a lesson", items: [["[ or J", "Previous lesson"], ["] or K", "Next lesson"], ["B", "Save/remove this lesson as a pearl"]] },
    { title: "Anywhere", items: [["Ctrl/⌘ K", "Search"], ["Ctrl/⌘ ⇧ F", "Toggle flashcards"], ["?", "Show this cheatsheet"], ["Esc", "Close the open panel"]] }
  ];
  function initShortcutsModal() {
    var box = h('<div class="shortcuts-modal" hidden role="dialog" aria-modal="true" aria-label="Keyboard shortcuts"></div>');
    var groupsHtml = SHORTCUT_GROUPS.map(function (g) {
      return '<div class="sk-group"><h4>' + esc(g.title) + '</h4><dl>' +
        g.items.map(function (it) { return '<div class="sk-row"><dt><kbd>' + esc(it[0]) + '</kbd></dt><dd>' + esc(it[1]) + '</dd></div>'; }).join("") +
        '</dl></div>';
    }).join("");
    box.innerHTML =
      '<div class="sk-panel"><div class="sk-head"><h3>Keyboard shortcuts</h3><button type="button" class="sk-close icon-btn" aria-label="Close">✕</button></div>' +
      '<div class="sk-body">' + groupsHtml + '</div></div>';
    document.body.appendChild(box);
    box.querySelector(".sk-close").addEventListener("click", closeShortcutsModal);
    box.addEventListener("click", function (e) { if (e.target === box) closeShortcutsModal(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeShortcutsModal(); });
    var t = el("shortcutsToggle"); if (t) t.addEventListener("click", toggleShortcutsModal);
  }
  function openShortcutsModal() { var box = el2q(".shortcuts-modal"); if (box) box.hidden = false; }
  function closeShortcutsModal() { var box = el2q(".shortcuts-modal"); if (box) box.hidden = true; }
  function toggleShortcutsModal() { var box = el2q(".shortcuts-modal"); if (box) { if (box.hidden) openShortcutsModal(); else closeShortcutsModal(); } }
  function el2q(sel) { return document.querySelector(sel); }

  /* Moves to the previous/next anatomy lesson from the currently open note
   * or diagram (wrapping at the ends) -- shared by the "[ ] / J K" shortcut
   * and could back a future prev/next button too. */
  function stepAnatomyLesson(delta) {
    if (state.screen !== "module" || state.tab !== "anatomy" || !state.anatomyTopic || !state.moduleId) return false;
    var mod = window.JEFFENT.get(state.moduleId);
    if (!mod) return false;
    var a = mod.anatomy || {};
    var list = combinedAnatomyList(a.notes || [], a.diagrams || []);
    if (list.length < 2) return false;
    var pos = anatomyListPos(list, state.anatomyTopic);
    if (pos === -1) return false;
    var next = list[(pos + delta + list.length) % list.length];
    state.anatomyTopic = { kind: next.kind, index: next.index };
    var pane = document.querySelector('.tabpane[data-pane="anatomy"]');
    if (pane) { renderAnatomyPane(pane, mod); window.scrollTo(0, 0); }
    return true;
  }

  /* ---------- SPLIT-PANE ANATOMY WORKSPACE (opt-in toggle) ----------
   * Anchors a lesson's first figure in a sticky left rail while the prose
   * scrolls on the right, so a visual landmark stays in view while reading.
   * Real DOM nodes are moved (not cloned), so any listeners already bound
   * to the figure (e.g. the lightbox's zoomable <img>) keep working; the
   * original innerHTML is cached on the element so turning split view back
   * off is a plain, lossless restore. */
  var SPLIT_VIEW_KEY = "jeffent.splitView";
  function loadSplitViewPref() { try { return localStorage.getItem(SPLIT_VIEW_KEY) === "1"; } catch (e) { return false; } }
  function saveSplitViewPref(on) { try { localStorage.setItem(SPLIT_VIEW_KEY, on ? "1" : "0"); } catch (e) {} }
  function applySplitView(bodyEl, on) {
    if (!bodyEl) return;
    var isSplit = bodyEl.classList.contains("split-mode");
    if (on === isSplit) return;
    if (!on) {
      if (bodyEl._splitOriginalHtml != null) bodyEl.innerHTML = bodyEl._splitOriginalHtml;
      bodyEl._splitOriginalHtml = null;
      bodyEl.classList.remove("split-mode");
      return;
    }
    var fig = bodyEl.querySelector(".note-fig");
    if (!fig) return;
    bodyEl._splitOriginalHtml = bodyEl.innerHTML;
    var rest = document.createDocumentFragment();
    Array.prototype.slice.call(bodyEl.childNodes).forEach(function (n) { if (n !== fig) rest.appendChild(n); });
    bodyEl.innerHTML = "";
    var wrap = h('<div class="split-pane-wrap"><div class="split-pane-figure"></div><div class="split-pane-text"></div></div>');
    wrap.querySelector(".split-pane-figure").appendChild(fig);
    wrap.querySelector(".split-pane-text").appendChild(rest);
    bodyEl.appendChild(wrap);
    bodyEl.classList.add("split-mode");
  }

  /* ---------- FLASHCARDS SIDE PANEL (self-contained, independent of state.session) ----------
   * The panel now carries a SCOPE (All modules, or one subspecialty track) and a
   * MODE (Due today / All cards), both chosen from controls at the top of the
   * panel and remembered per-browser in localStorage. Everything else (SRS
   * scheduling, per-card _owner routing) is unchanged. */
  var fp = { cards: [], i: 0, revealed: false, ctx: "", mode: "due", scope: "all" };
  function initFlashPanel() {
    var aside = document.createElement("aside");
    aside.id = "flashpanel"; aside.className = "flashpanel"; aside.setAttribute("aria-label", "Flashcards");
    aside.innerHTML = '<div class="fp-resize" data-tip="Drag to resize"></div><div class="fp-head"><div class="fp-title"><span class="mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="13" height="16" rx="2"></rect><path d="M8 2.5v4M13 2.5v4"></path><path d="M7 20.5h9a2 2 0 0 0 2-2V9"></path></svg></span>Flashcards</div><button type="button" class="fp-close icon-btn" data-tip="Close" aria-label="Close flashcards">✕</button></div><div class="fp-body"></div>';
    document.body.appendChild(aside);
    aside.querySelector(".fp-close").addEventListener("click", closeFlash);
    var t = el("flashToggle"); if (t) t.addEventListener("click", toggleFlash);
    var rez = aside.querySelector(".fp-resize"), dragging = false;
    rez.addEventListener("mousedown", function (e) { e.preventDefault(); dragging = true; document.body.style.userSelect = "none"; });
    window.addEventListener("mousemove", function (e) { if (!dragging) return; var w = window.innerWidth - e.clientX; var maxw = Math.floor(window.innerWidth / 3); w = Math.max(320, Math.min(w, maxw)); aside.style.width = w + "px"; try { localStorage.setItem("fpWidth", String(w)); } catch (_) {} });
    window.addEventListener("mouseup", function () { if (dragging) { dragging = false; document.body.style.userSelect = ""; } });
    try { var sw = parseInt(localStorage.getItem("fpWidth"), 10); if (sw) aside.style.width = Math.max(320, Math.min(sw, Math.floor(window.innerWidth / 3))) + "px"; } catch (_) {}
  }
  /* Build the flashcard queue for a given scope ("all" or a track id) and mode
   * ("due" | "all"), tagging each card with its owning module so SRS.rate writes
   * to the right localStorage bucket even in an aggregated queue. */
  function buildFlashQueue(scope, mode) {
    var cards = [];
    window.JEFFENT.modules.forEach(function (m) {
      if (scope !== "all" && m.track !== scope) return;
      var list = (mode === "all") ? (m.cards || []).slice() : window.SRS.dueCards(m.id, m.cards || []);
      list.forEach(function (c) { if (!c._owner) c._owner = m.id; cards.push(c); });
    });
    var ctx;
    if (scope === "all") { ctx = "All modules"; }
    else { var t = trackById(scope); ctx = t ? t.name : scope; }
    return { cards: cards, ctx: ctx };
  }
  function setFlashQueue(scope, mode) {
    if (mode !== "all" && mode !== "due") mode = "due";
    if (scope !== "all" && !modulesFor(scope).length) scope = "all";
    var q = buildFlashQueue(scope, mode);
    fp = { cards: q.cards, i: 0, revealed: false, ctx: q.ctx, mode: mode, scope: scope, history: [] };
    try { localStorage.setItem("jeffent.fpScope", scope); localStorage.setItem("jeffent.fpMode", mode); } catch (_) {}
  }
  function openFlash() {
    closePimpPanel();
    var scope = "", mode = "";
    try { scope = localStorage.getItem("jeffent.fpScope") || ""; mode = localStorage.getItem("jeffent.fpMode") || ""; } catch (_) {}
    /* First open with no saved scope: default to the subspecialty you're viewing
     * (if any), otherwise all modules. */
    if (!scope) {
      if (state.screen === "module" && state.moduleId) {
        var m = window.JEFFENT.get(state.moduleId); scope = m ? m.track : "all";
      } else { scope = "all"; }
    }
    setFlashQueue(scope, mode || "due");
    document.body.classList.add("flash-open");
    var t = el("flashToggle"); if (t) t.setAttribute("aria-expanded", "true");
    renderFlash();
  }
  function closeFlash() { document.body.classList.remove("flash-open"); var t = el("flashToggle"); if (t) t.setAttribute("aria-expanded", "false"); }
  function toggleFlash() { if (document.body.classList.contains("flash-open")) closeFlash(); else openFlash(); }

  /* The scope dropdown + Due/All toggle. Always rendered at the top of the panel
   * so the learner can re-scope at any point without leaving. */
  function buildFlashControls() {
    var wrap = h('<div class="fp-controlbar"></div>');
    var scopeOptions = [{ value: "all", label: "All modules" }];
    TRACKS.forEach(function (t) {
      if (!modulesFor(t.id).length) return;
      scopeOptions.push({ value: t.id, label: t.name });
    });
    var sel = buildCustomSelect({
      value: fp.scope || "all",
      options: scopeOptions,
      className: "fp-scope",
      ariaLabel: "Flashcard scope",
      onChange: function (v) { setFlashQueue(v, fp.mode); renderFlash(); }
    });
    wrap.appendChild(sel);
    var seg = h('<div class="fp-mode" role="group" aria-label="Card set"></div>');
    [["due", "Due"], ["all", "All"]].forEach(function (pair) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "fp-mode-btn" + (fp.mode === pair[0] ? " active" : "");
      b.textContent = pair[1]; b.setAttribute("aria-pressed", fp.mode === pair[0] ? "true" : "false");
      b.addEventListener("click", function () { if (fp.mode !== pair[0]) { setFlashQueue(fp.scope, pair[0]); renderFlash(); } });
      seg.appendChild(b);
    });
    wrap.appendChild(seg);
    return wrap;
  }
  function renderFlash() {
    var body = document.querySelector("#flashpanel .fp-body"); if (!body) return;
    body.innerHTML = "";
    body.appendChild(buildFlashControls());
    var stage = h('<div class="fp-stage"></div>');
    body.appendChild(stage);
    renderFlashStage(stage);
  }
  function renderFlashStage(stage) {
    stage.appendChild(h('<div class="fp-ctx mono">' + esc(fp.ctx || "Flashcards") + ' · ' + (fp.mode === "all" ? "all cards" : "due today") + '</div>'));
    if (!fp.cards.length) {
      stage.appendChild(h('<p class="empty-note">' + (fp.mode === "due" ? "Nothing due right now in this scope." : "No cards in this scope yet.") + '</p>'));
      if (fp.mode === "due") {
        var b = h('<button class="btn ghost" style="width:100%">Review all cards in this scope</button>');
        b.addEventListener("click", function () { setFlashQueue(fp.scope, "all"); renderFlash(); });
        stage.appendChild(b);
      }
      return;
    }
    if (fp.i >= fp.cards.length) {
      stage.appendChild(h('<div class="fp-done"><div class="big">✓ Done</div><p class="sub" style="margin-top:8px">Scheduling saved to this browser.</p></div>'));
      var again = h('<button class="btn ghost" style="width:100%">Restart</button>');
      again.addEventListener("click", function () { setFlashQueue(fp.scope, fp.mode); renderFlash(); });
      stage.appendChild(again);
      if (fp.history && fp.history.length) {
        var undoDone = h('<button type="button" class="undo-btn mono" style="width:100%;margin-top:8px">&#8617; Undo last card (Z)</button>');
        undoDone.addEventListener("click", function () { undoFlashCard(); renderFlash(); });
        stage.appendChild(undoDone);
      }
      return;
    }
    var card = fp.cards[fp.i];
    var cardOwnerModId = cardOwnerId(card, card._owner);
    var fpNote = cardNote(cardOwnerModId, card);
    stage.appendChild(h('<div class="fp-prog"><i style="width:' + Math.round(fp.i / fp.cards.length * 100) + '%"></i></div>'));
    stage.appendChild(h('<div class="fp-count mono">Card ' + (fp.i + 1) + ' of ' + fp.cards.length + '</div>'));
    var fc = h('<div class="flashcard fp-card"></div>');
    fc.appendChild(h('<div class="card-front">' + effectiveFront(cardOwnerModId, card) + '</div>'));
    var back = h('<div class="card-back' + (fp.revealed ? '' : ' hidden') + '">' + effectiveBack(cardOwnerModId, card) + '</div>');
    fc.appendChild(back);
    if (fpNote) fc.appendChild(h('<div class="card-note"><strong>Your note:</strong> ' + esc(fpNote) + '</div>'));
    stage.appendChild(fc);
    linkGlossaryTerms(fc);
    enhanceReferenceTables(fc);
    if (!fp.revealed) {
      var rv = h('<button class="btn reveal-btn" style="width:100%">Show answer</button>');
      rv.addEventListener("click", function () { fp.revealed = true; renderFlash(); });
      stage.appendChild(rv);
    } else {
      var fpHints = rateHintLabels();
      var ctr = h(
        '<div class="answer-controls fp-controls">' +
          '<button class="rate again" data-r="again">Again<small>' + esc(fpHints.again) + '</small></button>' +
          '<button class="rate good" data-r="good">Good<small>' + esc(fpHints.good) + '</small></button>' +
          '<button class="rate easy" data-r="easy">Easy<small>' + esc(fpHints.easy) + '</small></button>' +
        '</div>'
      );
      ctr.querySelectorAll(".rate").forEach(function (btn) {
        btn.addEventListener("click", function () {
          rateFlashCard(btn.dataset.r);
          renderFlash();
        });
      });
      stage.appendChild(ctr);
      stage.appendChild(h('<div class="kbd-hint mono">Space = Easy &middot; 1/2/3 = Again/Good/Easy &middot; Z = Undo</div>'));
      if (fp.history && fp.history.length) {
        var undoRow = h('<button type="button" class="undo-btn mono" style="width:100%;margin-top:8px">&#8617; Undo last card (Z)</button>');
        undoRow.addEventListener("click", function () { undoFlashCard(); renderFlash(); });
        stage.appendChild(undoRow);
      }
    }
  }

  /* Rate/undo helpers for the floating flashcard panel, mirroring
   * rateSessionCard/undoSessionCard for the main study screen. */
  function rateFlashCard(rating) {
    var card = fp.cards[fp.i];
    var moduleId = card._owner || state.moduleId;
    var snapshot = window.SRS.snapshotBefore(moduleId, card.id);
    window.SRS.rate(moduleId, card.id, rating);
    (fp.history = fp.history || []).push({ moduleId: moduleId, cardId: card.id, snapshot: snapshot });
    requeueIfAgain(fp.cards, card, rating);
    fp.i++; fp.revealed = false;
  }
  function undoFlashCard() {
    var last = fp.history && fp.history.pop();
    if (!last) return false;
    window.SRS.undoRate(last.moduleId, last.cardId, last.snapshot);
    fp.i = Math.max(0, fp.i - 1);
    fp.revealed = false;
    return true;
  }

  /* Spacebar in the flashcard panel: reveal, then rate Easy (the rightmost
   * option), matching the main study screen. */
  function handleFlashSpace() {
    if (!fp.cards.length || fp.i >= fp.cards.length) return false;
    if (!fp.revealed) { fp.revealed = true; renderFlash(); return true; }
    rateFlashCard("easy");
    renderFlash();
    return true;
  }

  /* 1/2/3 shortcuts in the flashcard panel: rate Again/Good/Easy directly
   * once the answer is revealed (Anki-style), and Z to undo the last rating. */
  function handleFlashNumberKey(n) {
    if (!fp.cards.length || fp.i >= fp.cards.length || !fp.revealed) return false;
    var rating = n === "1" ? "again" : n === "2" ? "good" : "easy";
    rateFlashCard(rating);
    renderFlash();
    return true;
  }
  function handleFlashUndo() {
    if (!undoFlashCard()) return false;
    renderFlash();
    return true;
  }

  /* ---------- FAQ (PIMP QUESTIONS) SIDE PANEL ----------
   * Same shell/behavior as the flashcards panel above (self-contained,
   * independent of state.session), but for the oral-recall question bank.
   * Its own session var `ppq` is separate from `pq` (the full-page "Frequently
   * Asked Questions" screen reached via the sidebar), so opening the panel
   * never disturbs a quiz already in progress on that screen, and vice versa.
   * Only one right-hand panel may be open at a time -- open{Flash,PimpPanel}
   * each close the other before opening themselves. */
  var ppq = null;
  function initPimpPanel() {
    var aside = document.createElement("aside");
    aside.id = "pimppanel"; aside.className = "pimppanel"; aside.setAttribute("aria-label", "Frequently asked questions");
    aside.innerHTML = '<div class="pp-resize" data-tip="Drag to resize"></div><div class="pp-head"><div class="pp-title"><span class="mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.9.4-1.5 1-1.5 2"></path><path d="M12 16.2v.01"></path></svg></span>Frequently asked questions</div><button type="button" class="pp-close icon-btn" data-tip="Close" aria-label="Close frequently asked questions">✕</button></div><div class="pp-body"></div>';
    document.body.appendChild(aside);
    aside.querySelector(".pp-close").addEventListener("click", closePimpPanel);
    var t = el("pimpToggle"); if (t) t.addEventListener("click", togglePimpPanel);
    var rez = aside.querySelector(".pp-resize"), dragging = false;
    rez.addEventListener("mousedown", function (e) { e.preventDefault(); dragging = true; document.body.style.userSelect = "none"; });
    window.addEventListener("mousemove", function (e) { if (!dragging) return; var w = window.innerWidth - e.clientX; var maxw = Math.floor(window.innerWidth / 3); w = Math.max(320, Math.min(w, maxw)); aside.style.width = w + "px"; try { localStorage.setItem("ppWidth", String(w)); } catch (_) {} });
    window.addEventListener("mouseup", function () { if (dragging) { dragging = false; document.body.style.userSelect = ""; } });
    try { var sw = parseInt(localStorage.getItem("ppWidth"), 10); if (sw) aside.style.width = Math.max(320, Math.min(sw, Math.floor(window.innerWidth / 3))) + "px"; } catch (_) {}
  }
  function openPimpPanel() {
    closeFlash();
    ppq = null;
    document.body.classList.add("pimp-open");
    var t = el("pimpToggle"); if (t) t.setAttribute("aria-expanded", "true");
    renderPimpPanel();
  }
  function closePimpPanel() { document.body.classList.remove("pimp-open"); var t = el("pimpToggle"); if (t) t.setAttribute("aria-expanded", "false"); }
  function togglePimpPanel() { if (document.body.classList.contains("pimp-open")) closePimpPanel(); else openPimpPanel(); }

  function renderPimpPanel() {
    var body = document.querySelector("#pimppanel .pp-body"); if (!body) return;
    body.innerHTML = "";
    if (ppq) renderPimpPanelQuiz(body); else renderPimpPanelIntro(body);
  }

  function renderPimpPanelIntro(body) {
    var bank = pimpBank();
    if (!bank || !(bank.sets || []).length) {
      body.appendChild(h('<p class="empty-note">No questions are loaded yet.</p>'));
      return;
    }
    var total = pimpAllQuestions().length;
    body.appendChild(h('<div class="fp-ctx mono">' + bank.sets.length + ' sets &middot; ' + total + ' questions</div>'));
    var allBtn = h('<button class="btn" style="width:100%;margin-bottom:8px">Quiz all (' + total + ') &rarr;</button>');
    allBtn.addEventListener("click", function () { startPimpPanelQuiz(pimpAllQuestions(), "All questions"); });
    body.appendChild(allBtn);
    var missN = pqMissCount();
    if (missN) {
      var mbtn = h('<button class="btn ghost" style="width:100%;margin-bottom:8px">Review missed (' + missN + ') &rarr;</button>');
      mbtn.addEventListener("click", function () { startPimpPanelQuiz(pqMissedQuestions(), "Most missed"); });
      body.appendChild(mbtn);
    }
    var shuffleWrap = h('<label class="pq-shuffle mono" style="margin:10px 0 4px"><input type="checkbox" id="ppShuffle"> Shuffle question order</label>');
    body.appendChild(shuffleWrap);
    var chk = shuffleWrap.querySelector("input");
    chk.checked = pimpShuffleOn();
    chk.addEventListener("change", function () { setPimpShuffle(chk.checked); });

    var groups = [];
    (bank.sets || []).forEach(function (s) { if (groups.indexOf(s.group) === -1) groups.push(s.group); });
    var list = h('<div class="mod-list" style="margin-top:10px"></div>');
    groups.forEach(function (group) {
      var setsIn = (bank.sets || []).filter(function (s) { return s.group === group; });
      var gTrack = setsIn[0] ? trackById(setsIn[0].track) : null;
      var gCount = setsIn.reduce(function (n, s) { return n + (s.questions || []).length; }, 0);
      var headStyle = gTrack && gTrack.color ? ' style="--track-color:' + gTrack.color + '"' : "";
      var row = h(
        '<button class="mod-row pq-allrow" type="button"' + headStyle + '>' +
          '<div class="row-top"><h3>' + (gTrack ? trackBadge(gTrack, "pq-groupbadge", 14) : "") + esc(group) + '</h3><span class="status-chip">' + gCount + ' Qs</span></div>' +
        '</button>'
      );
      row.addEventListener("click", function () { startPimpPanelQuiz(pimpQuestionsForGroup(group), group); });
      list.appendChild(row);
    });
    body.appendChild(list);
  }

  function startPimpPanelQuiz(questions, label) {
    var qs = pimpShuffleOn() ? shuffled(questions) : questions.slice();
    ppq = { qs: qs, i: 0, revealed: false, label: label || "Questions", got: 0, missed: 0, missedQs: [] };
    renderPimpPanel();
  }
  function pimpPanelAdvance() { ppq.i++; ppq.revealed = false; renderPimpPanel(); }
  function pimpPanelMarkGot(item) { ppq.got++; pqMissAdjust(item, -1); pimpPanelAdvance(); }
  function pimpPanelMarkMissed(item) { ppq.missed++; ppq.missedQs.push(item); pqMissAdjust(item, 1); pimpPanelAdvance(); }

  function renderPimpPanelQuiz(body) {
    var total = ppq.qs.length;
    var crumb = h('<button class="crumb">&larr; All sets</button>');
    crumb.addEventListener("click", function () { ppq = null; renderPimpPanel(); });
    body.appendChild(crumb);

    if (ppq.i >= total) {
      var answered = ppq.got + ppq.missed;
      var pct = answered ? Math.round(ppq.got / answered * 100) : 0;
      var summary = h('<div class="pq-summary"></div>');
      summary.appendChild(h('<div class="pq-scorebig">' + pct + '%</div>'));
      summary.appendChild(h('<div class="pq-scoreline mono">' + ppq.got + ' of ' + answered + ' marked correct &middot; ' + esc(ppq.label) + '</div>'));
      var acts = h('<div class="pq-summary-actions"></div>');
      if (ppq.missedQs.length) {
        var redo = h('<button class="btn" style="width:100%">Redo missed (' + ppq.missedQs.length + ') &rarr;</button>');
        var missedList = ppq.missedQs.slice();
        redo.addEventListener("click", function () { startPimpPanelQuiz(missedList, ppq.label + " · missed"); });
        acts.appendChild(redo);
      }
      var restart = h('<button class="btn ghost" style="width:100%">Restart set</button>');
      var full = ppq.qs.slice();
      restart.addEventListener("click", function () { startPimpPanelQuiz(full, ppq.label); });
      acts.appendChild(restart);
      var back = h('<button class="btn ghost" style="width:100%">Back to sets</button>');
      back.addEventListener("click", function () { ppq = null; renderPimpPanel(); });
      acts.appendChild(back);
      summary.appendChild(acts);
      body.appendChild(summary);
      return;
    }

    var item = ppq.qs[ppq.i];
    var pctDone = Math.round(ppq.i / total * 100);
    body.appendChild(h('<div class="fp-prog"><i style="width:' + pctDone + '%"></i></div>'));
    body.appendChild(h('<div class="fp-count mono">Question ' + (ppq.i + 1) + ' of ' + total + ' &middot; ' + esc(ppq.label) + '</div>'));

    var card = h('<div class="flashcard pq-card"></div>');
    var srcTrack = trackById(item.track);
    var srcTags = '<div class="card-tags">' +
      (srcTrack ? '<span class="pill track" title="' + esc(item.group || "") + '">' + esc(srcTrack.abbr || srcTrack.name) + '</span>' : "") +
      '<span class="pill">' + esc(item.setTitle || "") + '</span>' +
      '</div>';
    card.appendChild(h(srcTags));
    var qEl = document.createElement("div"); qEl.className = "pq-q"; qEl.textContent = item.q;
    card.appendChild(qEl);
    if (ppq.revealed) {
      var aEl = document.createElement("div"); aEl.className = "pq-a"; aEl.textContent = item.a;
      card.appendChild(aEl);
    }
    body.appendChild(card);
    linkGlossaryTerms(card);
    enhanceReferenceTables(card);

    if (!ppq.revealed) {
      var rv = h('<button class="btn reveal-btn" style="width:100%">Show answer</button>');
      rv.addEventListener("click", function () { ppq.revealed = true; renderPimpPanel(); });
      body.appendChild(rv);
    } else {
      var ctr = h('<div class="answer-controls pq-controls"></div>');
      var missBtn = h('<button class="rate again">Missed</button>');
      missBtn.addEventListener("click", function () { pimpPanelMarkMissed(item); });
      var gotBtn = h('<button class="rate pq-got">Got it</button>');
      gotBtn.addEventListener("click", function () { pimpPanelMarkGot(item); });
      ctr.appendChild(missBtn); ctr.appendChild(gotBtn);
      body.appendChild(ctr);
      body.appendChild(h('<div class="kbd-hint mono">Space = Got it</div>'));
    }
  }

  /* Spacebar in the FAQ panel: reveal the answer, then mark it correct. */
  function handlePimpPanelSpace() {
    if (!ppq || ppq.i >= ppq.qs.length) return false;
    if (!ppq.revealed) { ppq.revealed = true; renderPimpPanel(); return true; }
    pimpPanelMarkGot(ppq.qs[ppq.i]);
    return true;
  }

  /* Spacebar in a case stepper: at any moment the stepper renders exactly one
   * primary forward-action button -- Show answer / Show teaching point (class
   * .case-reveal) or Next question / Next case / Back to all cases (class
   * .case-next) -- so driving it is just clicking whichever one is present,
   * the same step the click handlers already implement. */
  function handleCaseSpace() {
    if (state.screen !== "module" || state.tab !== "cases" || !state.caseSession) return false;
    var pane = el("pane-cases");
    if (!pane) return false;
    var btn = pane.querySelector(".case-reveal") || pane.querySelector(".case-next");
    if (!btn) return false;
    btn.click();
    return true;
  }

  /* One global keydown wires the spacebar into whichever card view is active:
   * the flashcard panel if it is open, then the FAQ panel if it is open,
   * otherwise a running study session, otherwise the full-page FAQ quiz.
   * A focused button, or a form field, is left alone so native behavior and
   * typing still work. */
  function initQuizKeys() {
    document.addEventListener("keydown", function (e) {
      var t = e.target, tag = t && t.tagName;
      /* Leave typing and native control widgets alone. Buttons are NOT excluded:
       * these shortcuts should drive the card even when a control still holds
       * focus, and the preventDefault below stops the focused button from
       * also firing. */
      if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA" || (t && t.isContentEditable)) return;
      var isSpace = e.code === "Space" || e.key === " " || e.keyCode === 32;
      var isUndo = e.key === "z" || e.key === "Z";
      var isNumber = e.key === "1" || e.key === "2" || e.key === "3";
      if (!isSpace && !isUndo && !isNumber) return;
      var handled = false;
      if (document.body.classList.contains("flash-open")) {
        if (isSpace) handled = handleFlashSpace();
        else if (isNumber) handled = handleFlashNumberKey(e.key);
        else if (isUndo) handled = handleFlashUndo();
      } else if (document.body.classList.contains("pimp-open")) {
        if (isSpace) handled = handlePimpPanelSpace();
      } else if ((state.screen === "module" || state.screen === "study") && state.session) {
        if (isSpace && !state.session.done) handled = handleStudySpace();
        else if (isNumber && !state.session.done) handled = handleStudyNumberKey(e.key);
        else if (isUndo) handled = handleStudyUndo();
      } else if (state.screen === "module" && state.tab === "cases" && state.caseSession) {
        if (isSpace) handled = handleCaseSpace();
      } else if (state.screen === "pimp") {
        if (isSpace) handled = handlePimpSpace();
      }
      if (handled) e.preventDefault();
    });
  }

  /* Second global keydown, separate from initQuizKeys() above: lesson
   * navigation ([ ] or J K), bookmarking (B), and the shortcuts cheatsheet
   * (?) -- none of these overlap with the Space/1-2-3/Z dispatch table, so
   * they're kept in their own listener rather than threading more cases
   * into that one. */
  function initLessonNavKeys() {
    document.addEventListener("keydown", function (e) {
      var t = e.target, tag = t && t.tagName;
      if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA" || (t && t.isContentEditable)) return;
      if (e.key === "?") { e.preventDefault(); toggleShortcutsModal(); return; }
      if (e.key === "[" || e.key === "j" || e.key === "J") { if (stepAnatomyLesson(-1)) e.preventDefault(); return; }
      if (e.key === "]" || e.key === "k" || e.key === "K") { if (stepAnatomyLesson(1)) e.preventDefault(); return; }
      if (e.key === "b" || e.key === "B") { if (bookmarkCurrentContext()) e.preventDefault(); return; }
    });
  }

  /* ---------- REFERENCE TABLE CELL LISTIFY ----------
   * Content authors hand-write plain <table> markup for dense multi-column
   * reference tables (region/structures/pathologies, cranial nerve exits,
   * grading scales, ...), and a real <table> is the right shape for that --
   * an earlier pass here replaced the whole table with a card-per-row
   * layout, but the plain table reads better once the actual problem is
   * fixed: a cell holding a long semicolon- or comma-separated list reads
   * as a hard-to-scan wall of prose. This walks the *rendered* DOM after
   * any note/clinical/card HTML is injected and turns just that kind of
   * cell into a vertical bulleted list, keeping the table itself intact.
   * Content keeps authoring plain <table> HTML per the content model --
   * this is a pure rendering enhancement, so every existing and future
   * table benefits with no content changes. */
  function enhanceReferenceTables(root) {
    if (!root) return;
    root.querySelectorAll("table").forEach(function (table) {
      /* The 2-Minute Procedure Prep quick-matcher is a live, JS-filtered
         table (search input toggles row.hidden by reference) -- rewriting
         its cells would risk the search handler matching against
         restructured markup. It's the only interactive table in the app;
         everything else is static reference content. */
      if (table.classList.contains("proc-matcher-table")) return;
      if (table.dataset.listified) return; // don't reprocess on a second render pass
      table.dataset.listified = "1";
      table.querySelectorAll("tbody td").forEach(listifyTableCell);
    });
  }

  /* Splits one <td>'s content into list items at the DOM level (not by
   * slicing markup strings), so embedded elements like <a class="xref"> or
   * <strong> survive intact inside whichever item they land in. Prefers
   * splitting on "; " (the separator content authors use *between* distinct
   * structures/concepts); falls back to ", " only when the cell has no
   * semicolons, so a parenthetical sub-list like "ossicles (malleus,
   * incus, stapes)" stays one item while a flat list like "AOM,
   * cholesteatoma, otosclerosis" still breaks into separate ones. A cell
   * that doesn't actually contain a list (no separator, or only one item
   * after splitting) is left exactly as authored. */
  function listifyTableCell(cell) {
    var text = cell.textContent || "";
    var sep = /;\s+/.test(text) ? /;\s+/ : (/,\s+/.test(text) ? /,\s+/ : null);
    if (!sep) return;
    var items = [];
    var current = document.createDocumentFragment();
    var currentHasText = false;
    function commit() {
      if (currentHasText) items.push(current);
      current = document.createDocumentFragment();
      currentHasText = false;
    }
    Array.prototype.forEach.call(cell.childNodes, function (node) {
      if (node.nodeType === 3) {
        node.textContent.split(sep).forEach(function (part, idx) {
          if (idx > 0) commit();
          if (part) { current.appendChild(document.createTextNode(part)); if (part.trim()) currentHasText = true; }
        });
      } else {
        current.appendChild(node.cloneNode(true));
        currentHasText = true;
      }
    });
    commit();
    if (items.length < 2) return; // not actually a list -- leave the cell alone
    var ul = document.createElement("ul");
    ul.className = "tbl-list";
    items.forEach(function (item) {
      var li = document.createElement("li");
      li.appendChild(item);
      ul.appendChild(li);
    });
    cell.innerHTML = "";
    cell.appendChild(ul);
  }

  /* ---------- UNIVERSAL INLINE GLOSSARY ----------
   * window.JEFFENT.glossary (content/glossary.js) is one shared term bank
   * used everywhere in the app -- the same definition for "Eustachian tube"
   * shows up whether it's mentioned in Otology, Pediatric ENT, or a
   * flashcard, because nothing is hand-wrapped per file. Instead,
   * linkGlossaryTerms() walks a freshly-rendered subtree's text nodes after
   * the fact and wraps any matching phrase in a `.term` span carrying just
   * a `data-gkey` back-reference to the shared entry -- content authors
   * never touch glossary markup at all. */
  var GLOSSARY_INDEX = null;
  function buildGlossaryIndex() {
    if (GLOSSARY_INDEX) return GLOSSARY_INDEX;
    var list = window.JEFFENT.glossary || [];
    var byKey = {}, allKeys = [];
    list.forEach(function (entry) {
      (entry.keys || []).forEach(function (k) {
        var lk = k.toLowerCase();
        if (!byKey[lk]) { byKey[lk] = entry; allKeys.push(k); }
      });
    });
    if (!allKeys.length) { GLOSSARY_INDEX = { regex: null, byKey: byKey }; return GLOSSARY_INDEX; }
    /* longest key first, so a greedy alternation prefers e.g. "Vestibular
       schwannoma" whole over a shorter key that happens to be a substring. */
    allKeys.sort(function (a, b) { return b.length - a.length; });
    var escaped = allKeys.map(function (k) { return k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); });
    GLOSSARY_INDEX = { regex: new RegExp("\\b(" + escaped.join("|") + ")\\b", "gi"), byKey: byKey };
    return GLOSSARY_INDEX;
  }

  var GLOSSARY_SKIP_TAGS = { A: 1, BUTTON: 1, SCRIPT: 1, STYLE: 1, INPUT: 1, TEXTAREA: 1, SELECT: 1, H1: 1, H2: 1, H3: 1 };
  function linkGlossaryTerms(root) {
    if (!root) return;
    var idx = buildGlossaryIndex();
    if (!idx.regex) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = node.parentNode;
        while (p && p !== root) {
          if (GLOSSARY_SKIP_TAGS[p.tagName]) return NodeFilter.FILTER_REJECT;
          if (p.classList && (p.classList.contains("term") || p.classList.contains("xref"))) return NodeFilter.FILTER_REJECT;
          p = p.parentNode;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function (textNode) {
      var text = textNode.nodeValue;
      idx.regex.lastIndex = 0;
      if (!idx.regex.test(text)) return;
      idx.regex.lastIndex = 0;
      var frag = document.createDocumentFragment();
      var lastIndex = 0, m, matched = false;
      while ((m = idx.regex.exec(text))) {
        var entry = idx.byKey[m[0].toLowerCase()];
        if (!entry) continue;
        if (m.index > lastIndex) frag.appendChild(document.createTextNode(text.slice(lastIndex, m.index)));
        var span = document.createElement("span");
        span.className = "term";
        span.setAttribute("data-gkey", m[0].toLowerCase());
        span.textContent = m[0];
        frag.appendChild(span);
        lastIndex = idx.regex.lastIndex;
        matched = true;
      }
      if (!matched) return;
      if (lastIndex < text.length) frag.appendChild(document.createTextNode(text.slice(lastIndex)));
      textNode.parentNode.replaceChild(frag, textNode);
    });
  }

  /* ---------- CROSS-REFERENCE LINKS + GLOSSARY POPOVERS ----------
   * .xref (data-mod, data-tab): jumps to another module/tab on click; the
   * lightweight hover card shows that module's own title/subtitle.
   * .term (data-gkey, set by linkGlossaryTerms): definition-only, no
   * navigation. Hovering shows the same lightweight card with just the
   * short definition; clicking opens a richer popover that can also reveal
   * the term's added clinical detail (mechanism/pitfall/number/decision)
   * behind a "Read more" toggle, for entries where that's worth a click. */
  function initXrefs() {
    var prev = null, pop = null, popOwner = null;
    function ensurePrev() { if (prev) return; prev = h('<div class="xref-preview" hidden></div>'); document.body.appendChild(prev); }
    function position(el, box) {
      var r = el.getBoundingClientRect();
      box.hidden = false;
      var w = box.offsetWidth || 300;
      var top = window.scrollY + r.bottom + 6, left = window.scrollX + r.left;
      box.style.top = top + "px";
      box.style.left = Math.min(left, window.scrollX + window.innerWidth - w - 12) + "px";
    }
    function glossaryEntry(a) {
      var key = a.getAttribute("data-gkey"); if (!key) return null;
      return buildGlossaryIndex().byKey[key] || null;
    }
    function showHoverXref(a) {
      var mod = window.JEFFENT.get(a.getAttribute("data-mod")); if (!mod) return;
      ensurePrev();
      var tab = a.getAttribute("data-tab") || "";
      prev.innerHTML = '<div class="xp-title">' + esc(mod.title) + (tab ? ' · ' + esc(TAB_LABELS[tab] || tab) : "") + '</div>' +
        '<div class="xp-sub">' + esc(mod.subtitle || "") + '</div><div class="xp-go">Open →</div>';
      position(a, prev);
    }
    function showHoverTerm(a) {
      var entry = glossaryEntry(a); if (!entry) return;
      ensurePrev();
      prev.innerHTML = '<div class="xp-title">' + esc(entry.term) + '</div><div class="xp-sub">' + esc(entry.def) + '</div>' +
        (entry.more ? '<div class="xp-go">Click for more →</div>' : '');
      position(a, prev);
    }
    function hidePrev() { if (prev) prev.hidden = true; }

    function ensurePop() {
      if (pop) return;
      pop = h(
        '<div class="glossary-popover" hidden role="dialog" aria-label="Glossary">' +
          '<div class="gp-head"><div class="gp-title"></div><button type="button" class="gp-close" aria-label="Close">✕</button></div>' +
          '<div class="gp-def"></div>' +
          '<button type="button" class="gp-toggle" hidden><span class="gp-chev" aria-hidden="true">▾</span><span class="gp-toggle-label">Read more</span></button>' +
          '<div class="gp-more" hidden></div>' +
        '</div>'
      );
      document.body.appendChild(pop);
      pop.querySelector(".gp-close").addEventListener("click", function (e) { e.stopPropagation(); hidePop(); });
      pop.querySelector(".gp-toggle").addEventListener("click", function (e) {
        e.stopPropagation();
        var moreEl = pop.querySelector(".gp-more"), btn = pop.querySelector(".gp-toggle");
        var willOpen = moreEl.hidden;
        moreEl.hidden = !willOpen;
        btn.classList.toggle("open", willOpen);
        btn.querySelector(".gp-toggle-label").textContent = willOpen ? "Show less" : "Read more";
      });
    }
    function openPop(a) {
      var entry = glossaryEntry(a); if (!entry) return;
      ensurePop();
      hidePrev();
      pop.querySelector(".gp-title").textContent = entry.term;
      pop.querySelector(".gp-def").textContent = entry.def;
      var toggle = pop.querySelector(".gp-toggle"), moreEl = pop.querySelector(".gp-more");
      moreEl.textContent = entry.more || ""; moreEl.hidden = true;
      toggle.hidden = !entry.more; toggle.classList.remove("open");
      toggle.querySelector(".gp-toggle-label").textContent = "Read more";
      position(a, pop);
      popOwner = a;
    }
    function hidePop() { if (pop) pop.hidden = true; popOwner = null; }

    document.addEventListener("mouseover", function (e) {
      var a = e.target.closest && e.target.closest(".xref, .term"); if (!a) return;
      if (pop && !pop.hidden) return;
      if (a.classList.contains("xref")) showHoverXref(a); else showHoverTerm(a);
    });
    document.addEventListener("mouseout", function (e) { var a = e.target.closest && e.target.closest(".xref, .term"); if (a) hidePrev(); });
    document.addEventListener("click", function (e) {
      var xa = e.target.closest && e.target.closest(".xref");
      if (xa) { e.preventDefault(); hidePrev(); goModuleTab(xa.getAttribute("data-mod"), xa.getAttribute("data-tab") || "anatomy"); return; }
      var ta = e.target.closest && e.target.closest(".term");
      if (ta) {
        e.preventDefault();
        if (popOwner === ta && pop && !pop.hidden) { hidePop(); return; }
        openPop(ta);
        return;
      }
      if (e.target.closest && e.target.closest(".glossary-popover")) return;
      hidePrev(); hidePop();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { hidePrev(); hidePop(); } });
  }

  /* ---------- boot ---------- */
  function boot() {
    var totalModules = window.JEFFENT.modules.length;
    var activeTracks = TRACKS.filter(function (t) { return modulesFor(t.id).length > 0; }).length;
    el("moduleStamp").textContent = totalModules + " module" + (totalModules === 1 ? "" : "s") + " loaded across " + activeTracks + " track" + (activeTracks === 1 ? "" : "s");
    initSidebarCollapsedState();
    initTheme();
    initSettings();
    initSearch();
    initLightbox();
    initTableLightbox();
    initTopbarHeightVar();
    initSideNav();
    initFlashPanel();
    initPimpPanel();
    initPocketLog();
    initShortcutsModal();
    initQuizKeys();
    initLessonNavKeys();
    initXrefs();
    initSearchShortcut();
    initFlashShortcut();
    initScrollTint();
    if (ACTIVE_RECALL_ENABLED) initActiveRecall();
    bumpStreak();
    var brand = el("brandHome");
    on(brand, "click", goHome);
    on(brand, "keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); goHome(); } });
    goHome();
  }
  document.addEventListener("DOMContentLoaded", boot);
})();


/* ===== Scroll-reveal: gently fades content in as it enters the viewport.
 * Self-contained, reduced-motion aware, and fail-safe (every element is
 * forced visible within 1.6s even if the observer misses it). ===== */
(function () {
  try {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    document.body.classList.add("js-motion");
    var SEL = ".note-fig, .callout, .case, .tbl-scroll, .tg-card, .study-cta, .bento-tile, .rm-row, .mod-row, .panel, .feature-row";
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.04 });
    function mark(el) {
      if (el.classList.contains("reveal-init")) return;
      el.classList.add("reveal-init");
      io.observe(el);
      setTimeout(function () { el.classList.add("in"); }, 1600); /* fail-safe */
    }
    function scan(root) {
      var r = (root && root.querySelectorAll) ? root : document;
      r.querySelectorAll(SEL).forEach(mark);
      if (root && root.nodeType === 1 && root.matches && root.matches(SEL)) mark(root);
    }
    function boot() {
      scan(document);
      var app = document.getElementById("app") || document.getElementById("main") || document.body;
      new MutationObserver(function (muts) {
        muts.forEach(function (m) {
          if (!m.addedNodes) return;
          m.addedNodes.forEach(function (n) { if (n.nodeType === 1) scan(n); });
        });
      }).observe(app, { childList: true, subtree: true });
    }
    if (document.readyState !== "loading") boot();
    else document.addEventListener("DOMContentLoaded", boot);
  } catch (e) { /* motion is non-essential; never block the app */ }
})();

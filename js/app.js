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
  var SCREENS = ["home", "track", "module", "study", "pimp", "roadmap", "about"];

  var state = { screen: "home", trackId: null, moduleId: null, tab: "anatomy", session: null, anatomyTopic: null };

  /* ---------- helpers ---------- */
  function el(id) { return document.getElementById(id); }
  function h(html) { var d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstChild; }
  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { "&":"&amp;","<":"&lt;",">":"&gt;" }[c]; }); }
  function on(node, evt, fn) { node.addEventListener(evt, fn); return node; }
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
    state.screen = "module"; state.moduleId = moduleId; state.session = null; state.anatomyTopic = null;
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

  function applyHomeFilter(grid, list) {
    [grid, list].forEach(function (container) {
      if (!container) return;
      container.querySelectorAll(".tile, .feature-row").forEach(function (el) {
        var show = homeFilter === "all" || el.dataset.category === homeFilter;
        el.style.display = show ? "" : "none";
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

    var stripEl = h(
      '<div class="progress-strip">' +
        '<div class="pcard"><div class="lbl">Overall mastery</div><div class="big" data-count="' + pct + '" data-suffix="%">0%</div><div class="bar"><i style="width:' + pct + '%"></i></div></div>' +
        '<div class="pcard"><div class="lbl">Due today</div><div class="big" data-count="' + agg.due + '" data-suffix="">0</div></div>' +
        '<div class="pcard"><div class="lbl">Modules reviewed</div><div class="big" data-count="' + reviewedCount + '" data-suffix="' + esc(' / ' + allMods.length) + '">0</div></div>' +
        '<div class="pcard"><div class="lbl">Study streak</div><div class="big" data-count="' + streak + '" data-suffix="' + esc(streak === 1 ? ' day' : ' days') + '">0</div></div>' +
      '</div>'
    );
    root.appendChild(stripEl);
    animateStatCounts(stripEl);

    /* hero: spaced-repetition queue, deep-midnight card + every track's mini
       card, horizontally scrollable (was the top-3-by-due-count only). */
    var dueTracks = TRACKS.map(function (t) {
      var mods = modulesFor(t.id);
      return { track: t, mods: mods, due: aggregateStats(mods).due };
    }).filter(function (x) { return x.mods.length; })
      .sort(function (a, b) { return b.due - a.due; });

    var hero = h(
      '<div class="study-cta all-due-cta">' +
        '<div class="hero-body">' +
          '<div class="hero-left">' +
            '<div class="eyebrow">Spaced repetition queue</div>' +
            '<div class="n">Ready for your daily review</div>' +
            '<div class="cta-sub">' + agg.due + ' card' + (agg.due === 1 ? '' : 's') + ' due across ' + allMods.length + ' modules.</div>' +
            '<div class="cta-actions"></div>' +
          '</div>' +
          '<div class="hero-minis"></div>' +
        '</div>' +
      '</div>'
    );
    var heroBtn = h('<button class="btn">Start due queue (' + agg.due + ') &rarr;</button>');
    heroBtn.addEventListener("click", goStudyAll);
    hero.querySelector(".cta-actions").appendChild(heroBtn);
    var minisWrap = hero.querySelector(".hero-minis");
    if (dueTracks.length) {
      dueTracks.forEach(function (x) {
        var s = aggregateStats(x.mods);
        var tpct = s.total ? Math.round((s.mastered / s.total) * 100) : 0;
        var mini = h(
          '<button type="button" class="hero-mini" style="--hm-color:' + (x.track.color || '#fff') + '">' +
            '<div class="hm-name">' + esc(x.track.name) + '</div>' +
            '<div class="hm-meta">' + x.due + ' due &middot; ' + tpct + '% mastered</div>' +
            '<div class="bar"><i style="width:' + tpct + '%"></i></div>' +
          '</button>'
        );
        mini.addEventListener("click", function () { goTrack(x.track.id); });
        minisWrap.appendChild(mini);
      });
    } else {
      minisWrap.appendChild(h('<div class="hero-mini"><div class="hm-name">All caught up</div><div class="hm-meta">Nothing due right now</div></div>'));
    }
    root.appendChild(hero);

    root.appendChild(h('<div class="section-head"><h2>Browse by subspecialty</h2></div>'));

    var filterBar = h('<div class="filter-bar"></div>');
    var grid = h('<div class="tile-grid"></div>');
    var list = h('<div class="feature-list"></div>');
    HOME_FILTERS.forEach(function (f) {
      var pill = h('<button type="button" class="filter-pill' + (f.id === homeFilter ? ' active' : '') + '" data-filter="' + f.id + '">' + esc(f.label) + '</button>');
      pill.addEventListener("click", function () {
        homeFilter = f.id;
        filterBar.querySelectorAll(".filter-pill").forEach(function (p) { p.classList.toggle("active", p.getAttribute("data-filter") === homeFilter); });
        applyHomeFilter(grid, list);
      });
      filterBar.appendChild(pill);
    });
    root.appendChild(filterBar);

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
      var emergency = hasEmergency(mods[0]);
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
              (emergency ? '<span class="fr-emergency">Red flags</span>' : '') +
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
  function hasEmergency(mod) {
    if (!mod) return false;
    if ((mod.cards || []).some(function (c) { return c.redFlag; })) return true;
    if (mod.clinical && mod.clinical.redFlags && mod.clinical.redFlags.length) return true;
    return false;
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

    var list = h('<div class="mod-list"></div>');
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
      var row = h(
        '<button class="mod-row" type="button">' +
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

    /* slim sticky wayfinding strip: back link + track + current section,
       pinned under the topbar; the big title/tabs below scroll away normally */
    var pageHead = h('<div class="page-head" id="modPageHead"></div>');
    var crumb = h('<button class="crumb">&larr; All topics</button>');
    crumb.addEventListener("click", mods.length > 1 ? function () { goTrack(mod.track); } : goHome);
    if (mods.length > 1) crumb.textContent = "← " + (mod.trackName || mod.track);
    pageHead.appendChild(crumb);
    pageHead.appendChild(h('<span class="crumb-sep">/</span>'));
    var phEyebrow = h('<button type="button" class="ph-eyebrow">' + trackBadge(modTrack, "eyebrow-icon", 11) + '<span class="eyebrow">' + esc(mod.trackName || mod.track) + '</span></button>');
    phEyebrow.addEventListener("click", function () { goTrack(mod.track); });
    pageHead.appendChild(phEyebrow);
    pageHead.appendChild(h('<span class="crumb-sep">/</span>'));
    var phCurrent = h('<button type="button" class="ph-current" id="phCurrent">' + esc(mod.title) + '</button>');
    phCurrent.addEventListener("click", function () {
      state.anatomyTopic = null;
      renderModule(mod.id);
    });
    pageHead.appendChild(phCurrent);
    root.appendChild(pageHead);

    root.appendChild(h(
      '<div class="mod-head"' + modHeadStyle + '>' +
        '<div>' +
          '<div class="eyebrow-row">' + trackBadge(modTrack, "eyebrow-icon", 15) + '<span class="eyebrow">' + esc(mod.trackName || mod.track) + '</span></div>' +
          '<h1>' + esc(mod.title) + '</h1>' +
        '</div>' +
      '</div>'
    ));

    var builders = { anatomy: buildAnatomyPane, clinical: buildClinicalPane, cases: buildCasesPane, cards: buildCardsPane };
    var avail = availableTabs(mod);
    if (avail.indexOf(state.tab) === -1) state.tab = avail[0];
    var tabbar = h('<div class="tabs" role="tablist"></div>');
    avail.forEach(function (t) {
      var btn = h('<button class="tab" role="tab" id="tab-' + t + '" aria-controls="pane-' + t + '" aria-selected="' + (t === state.tab ? "true" : "false") + '" data-tab="' + t + '">' + TAB_LABELS[t] + '</button>');
      btn.addEventListener("click", function () {
        state.tab = t; saveLastTab(moduleId, t);
        renderTabState(root, mod);
      });
      tabbar.appendChild(btn);
    });
    root.appendChild(tabbar);

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
  }

  function emptyNote(text) { return h('<p class="empty-note">' + esc(text) + '</p>'); }

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
      var noteWrap = buildAnatomyDetail(mod, pane, noteTitle, function () {
        return h('<div class="anatomy-detail-body" data-anchor="anatomy-note-' + topic.index + '">' + notes[topic.index].html + '</div>');
      });
      appendRelatedCardsCta(noteWrap, mod, noteTitle, topic);
      appendFigureSources(noteWrap);
      pane.appendChild(noteWrap);
      return;
    }
    if (topic && topic.kind === "diagram" && diagrams[topic.index]) {
      var dgTitle = diagrams[topic.index].title;
      var dgWrap = buildAnatomyDetail(mod, pane, dgTitle, function () {
        var dgPanel = buildDiagramPanel(diagrams[topic.index]);
        dgPanel.classList.add("anatomy-detail-body");
        return dgPanel;
      }, true);
      appendRelatedCardsCta(dgWrap, mod, dgTitle, topic);
      pane.appendChild(dgWrap);
      return;
    }
    pane.appendChild(buildAnatomyTopicList(mod, pane, notes, diagrams));
    stacks.forEach(function (st) { pane.appendChild(buildStackPanel(st)); });
  }

  /* skipTitle: the diagram detail body already renders its own <h3> title via
   * buildDiagramPanel, so buildAnatomyDetail should not duplicate it. */
  function buildAnatomyDetail(mod, pane, title, buildBody, skipTitle) {
    var wrap = h('<div class="anatomy-detail"></div>');
    var back = h('<button type="button" class="crumb anatomy-back">← Back to anatomy overview</button>');
    back.addEventListener("click", function () {
      state.anatomyTopic = null;
      renderAnatomyPane(pane, mod);
      setStickyCurrent(mod.title);
    });
    wrap.appendChild(back);
    if (!skipTitle) wrap.appendChild(h('<h2 class="anatomy-detail-title">' + esc(title) + '</h2>'));
    wrap.appendChild(buildBody());
    setStickyCurrent(title);
    return wrap;
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

  function appendRelatedCardsCta(wrap, mod, title, topicRef) {
    var related = relatedCardsForTopic(title);
    if (!related.length) return;
    var cta = h(
      '<div class="topic-study-cta">' +
        '<div><div class="n">Test yourself</div><div class="cta-sub">' + related.length + ' flashcard' + (related.length === 1 ? '' : 's') + ' touching on this topic, from across the app</div></div>' +
        '<button type="button" class="btn small">Study these &rarr;</button>' +
      '</div>'
    );
    cta.querySelector("button").addEventListener("click", function () {
      startAnatomyTopicSession(mod, related, title, topicRef);
    });
    wrap.appendChild(cta);
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

    var grid = h('<div class="tg-grid"></div>');

    notes.forEach(function (n, i) {
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
      grid.appendChild(card);
    });

    diagrams.forEach(function (dg, i) {
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
      grid.appendChild(card);
    });

    wrap.appendChild(grid);

    /* filter pills: animated sliding underline + fade transition on the grid */
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
        grid.classList.add("tg-grid-fade");
        setTimeout(function () {
          grid.querySelectorAll(".tg-card").forEach(function (card) {
            card.style.display = (kind === "all" || card.dataset.kind === kind) ? "" : "none";
          });
          grid.classList.remove("tg-grid-fade");
        }, 140);
      });
    });

    return wrap;
  }

  /* A labeled diagram: kind "svg" (author-drawn, default) or "image" (a real
   * raster image with percent-coordinate labels + a required source line). */
  function buildDiagramPanel(dg) {
    var revealed = {};
    var panel = h('<div class="panel" data-anchor="anatomy-diagram-' + esc(dg.id || "") + '"></div>');
    panel.appendChild(h('<h3>' + esc(dg.title) + '</h3>'));
    if (dg.note) panel.appendChild(h('<p class="sub" style="margin:6px 0 14px;font-size:13.5px">' + esc(dg.note) + '</p>'));

    var list = h('<ul class="label-list"></ul>');
    function updateRow(id, isOn, text, num) {
      var row = list.querySelector('[data-row="' + id + '"]');
      row.classList.toggle("revealed", isOn);
      row.querySelector("span").textContent = isOn ? text : ("Landmark " + num);
      row.querySelector("button").textContent = isOn ? "✓" : "?";
    }

    var built = dg.kind === "image" ? buildImageDiagramStage(dg, revealed, updateRow) : buildSvgDiagramStage(dg, revealed, updateRow);
    panel.appendChild(built.stage);

    var toggle = h('<button class="btn small">Reveal all labels</button>');
    panel.appendChild(toggle);

    dg.labels.forEach(function (L, i) {
      var li = h('<li data-row="' + L.id + '"><button aria-label="Reveal ' + esc(L.text) + '">?</button><span>Landmark ' + (i + 1) + '</span></li>');
      li.querySelector("button").addEventListener("click", function () { built.toggleLabel(L.id); });
      list.appendChild(li);
    });
    panel.appendChild(list);

    var allOn = false;
    toggle.addEventListener("click", function () {
      allOn = !allOn;
      dg.labels.forEach(function (L) { if (!!revealed[L.id] !== allOn) built.toggleLabel(L.id); });
      toggle.textContent = allOn ? "Hide all labels" : "Reveal all labels";
    });

    if (dg.kind === "image" && dg.source) panel.appendChild(h('<p class="media-source">Source: ' + esc(dg.source) + '</p>'));
    return panel;
  }

  /* kind:"svg", author-drawn shapes with point-anchored leader-line labels. */
  function buildSvgDiagramStage(dg, revealed, updateRow) {
    var hotspots = dg.labels.map(function (L, i) {
      return '<g class="hotspot" tabindex="0" role="button" aria-label="Reveal ' + esc(L.text) + '" data-hot="' + L.id + '">' +
        '<circle cx="' + L.px + '" cy="' + L.py + '" r="9"/>' +
        '<text class="hot-num" x="' + L.px + '" y="' + (L.py + 3) + '" text-anchor="middle">' + (i + 1) + '</text></g>';
    }).join("");

    var stage = h(
      '<div class="diagram-stage">' +
        '<svg viewBox="' + dg.viewBox + '" role="img" aria-label="' + esc(dg.title) + '">' +
          dg.base + hotspots +
        '</svg>' +
      '</div>'
    );

    function toggleLabel(id) {
      var L = dg.labels.filter(function (x) { return x.id === id; })[0];
      revealed[id] = !revealed[id];
      var g = stage.querySelector('[data-hot="' + id + '"]');
      if (g) g.classList.toggle("revealed", revealed[id]);
      updateRow(id, revealed[id], L.text, dg.labels.indexOf(L) + 1);
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
  function buildImageDiagramStage(dg, revealed, updateRow) {
    var dots = dg.labels.map(function (L, i) {
      if (dg.occlude && L.box) {
        var b = L.box;
        return '<button type="button" class="img-occ" style="left:' + b.x + '%;top:' + b.y + '%;width:' + b.w + '%;height:' + b.h + '%" data-hot="' + L.id + '" aria-label="Reveal ' + esc(L.text) + '"><span class="occ-num">' + (i + 1) + '</span></button>';
      }
      return '<button type="button" class="img-dot" style="left:' + L.xPct + '%;top:' + L.yPct + '%" data-hot="' + L.id + '" aria-label="Reveal ' + esc(L.text) + '">' +
        '<span class="dot">' + (i + 1) + '</span>' +
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
      var L = dg.labels.filter(function (x) { return x.id === id; })[0];
      revealed[id] = !revealed[id];
      var btn = stage.querySelector('[data-hot="' + id + '"]');
      btn.classList.toggle("revealed", revealed[id]);
      updateRow(id, revealed[id], L.text, dg.labels.indexOf(L) + 1);
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

  /* ---- Clinical tab ---- */
  function buildClinicalPane(mod) {
    var pane = h('<div class="tabpane" data-pane="clinical"></div>');
    var c = mod.clinical || {};
    var blocks = c.blocks || [];
    if (blocks.length === 0) {
      pane.appendChild(emptyNote("Clinical content for this module is in progress."));
      return pane;
    }
    blocks.forEach(function (b) {
      var p = h('<div class="panel" data-anchor="clinical-block-' + esc(b.id || "") + '"><h3>' + esc(b.title) + '</h3></div>');
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
      pane.appendChild(p);
    });
    return pane;
  }

  /* ---- Cases tab ---- */
  function buildCasesPane(mod) {
    var pane = h('<div class="tabpane" data-pane="cases"></div>');
    var cases = mod.cases || [];
    if (cases.length === 0) {
      pane.appendChild(emptyNote("No cases for this module yet."));
      return pane;
    }
    cases.forEach(function (c) {
      var card = h('<div class="case" data-anchor="case-' + esc(c.id || "") + '"></div>');
      card.appendChild(h('<div class="stem">' + c.stem + '</div>'));
      c.prompts.forEach(function (p) {
        card.appendChild(h('<details><summary>' + esc(p.q) + '</summary><div class="ans">' + p.a + '</div></details>'));
      });
      if (c.teaching) card.appendChild(h('<div class="teach"><strong>Teaching point:</strong> ' + esc(c.teaching) + '</div>'));
      pane.appendChild(card);
    });
    return pane;
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
    actions.appendChild(b1); actions.appendChild(b2);
    pane.appendChild(cta);
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
    state.session = { mode: mode, cards: cards, i: 0, revealed: false, done: cards.length === 0, pane: pane, mod: mod };
    renderStudy(pane, mod);
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
    tags += '<span class="pill">' + esc(_topic) + '</span>';

    var fc = h('<div class="flashcard"></div>');
    fc.appendChild(h('<div class="card-tags">' + tags + '</div>'));
    fc.appendChild(h('<div class="card-front">' + card.front + '</div>'));
    var back = h('<div class="card-back hidden">' + card.back + '</div>');
    fc.appendChild(back);
    var srcLine = card.reviewer
      ? '<span class="rev">Reviewed: ' + esc(card.reviewer) + '</span>'
      : '<span class="rev">Reviewer: pending sign-off</span>';
    fc.appendChild(h('<div class="card-source">' + srcLine + '</div>'));
    shell.appendChild(fc);

    if (!ses.revealed) {
      var rv = h('<div style="text-align:center"><button class="btn reveal-btn">Show answer</button></div>');
      rv.querySelector("button").addEventListener("click", function () {
        ses.revealed = true; back.classList.remove("hidden"); renderStudy(pane, mod);
      });
      shell.appendChild(rv);
    } else {
      back.classList.remove("hidden");
      var ctr = h(
        '<div class="answer-controls">' +
          '<button class="rate again" data-r="again">Again<small>&lt; 1 day</small></button>' +
          '<button class="rate" data-r="good">Good<small>step up</small></button>' +
          '<button class="rate" data-r="easy">Easy<small>skip ahead</small></button>' +
        '</div>'
      );
      ctr.querySelectorAll(".rate").forEach(function (btn) {
        btn.addEventListener("click", function () {
          window.SRS.rate(card._owner || mod.id, card.id, btn.dataset.r);
          ses.i++; ses.revealed = false;
          if (ses.i >= ses.cards.length) ses.done = true;
          renderStudy(pane, mod);
        });
      });
      shell.appendChild(ctr);
      shell.appendChild(h('<div class="kbd-hint mono">Space = Easy</div>'));
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
    var card = ses.cards[ses.i];
    window.SRS.rate(card._owner || (ses.mod && ses.mod.id), card.id, "easy");
    ses.i++; ses.revealed = false;
    if (ses.i >= ses.cards.length) ses.done = true;
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
        idx.push({ type: "clinical", modId: m.id, title: b.title, snippet: stripHtml(b.html || "").slice(0, 140), tab: "clinical", anchor: "clinical-block-" + b.id });
      });
      (m.cases || []).forEach(function (cs) {
        idx.push({ type: "case", modId: m.id, title: stripHtml(cs.stem).slice(0, 90), snippet: cs.teaching || "", tab: "cases", anchor: "case-" + cs.id });
      });
      (m.cards || []).forEach(function (card) {
        idx.push({ type: "card", modId: m.id, title: stripHtml(card.front), snippet: stripHtml(card.back).slice(0, 140), tab: "cards", cardId: card.id });
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

    function moduleOptionsHtml(selectedId) {
      var mods = window.JEFFENT.modules.slice().sort(function (a, b) {
        return (a.title || "").localeCompare(b.title || "");
      });
      return mods.map(function (m) {
        return '<option value="' + m.id + '"' + (m.id === selectedId ? " selected" : "") + '>' + m.title + '</option>';
      }).join("");
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
          '<label for="newCardsSelect">New cards / day</label>' +
          '<select id="newCardsSelect">' +
            newCapOptions.map(function (n) {
              var label = n === 0 ? "Unlimited" : String(n);
              return '<option value="' + n + '"' + (n === s.newCardsPerDay ? " selected" : "") + '>' + label + '</option>';
            }).join("") +
          '</select>' +
        '</div>' +
        '<button type="button" class="settings-reset mono" id="settingsReset">Reset intervals to defaults</button>' +
        '<div class="settings-divider"></div>' +
        '<div class="settings-row">' +
          '<label for="resetModuleSelect">Reset one module&rsquo;s cards</label>' +
          '<select id="resetModuleSelect">' + moduleOptionsHtml(lastModuleId) + '</select>' +
          '<button type="button" class="settings-danger mono" id="resetModuleBtn">Reset this module&rsquo;s progress</button>' +
        '</div>' +
        '<button type="button" class="settings-danger mono" id="resetAllBtn">Reset ALL progress</button>' +
        '<div class="settings-note" id="settingsNote" hidden></div>';

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

      on(el("newCardsSelect"), "change", function (e) {
        window.SRS.setSettings({ newCardsPerDay: Number(e.target.value) });
        refreshHomeIfNeeded();
      });

      on(el("settingsReset"), "click", function () {
        window.SRS.setSettings(window.SRS.defaultSettings());
        renderPanel();
        refreshHomeIfNeeded();
      });

      on(el("resetModuleBtn"), "click", function () {
        var moduleId = el("resetModuleSelect").value;
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
    state.screen = "module"; state.moduleId = moduleId; state.session = null; state.anatomyTopic = null;
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
      var list = h('<div class="mod-list"></div>');
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

  /* ---------- FLASHCARDS SIDE PANEL (self-contained, independent of state.session) ----------
   * The panel now carries a SCOPE (All modules, or one subspecialty track) and a
   * MODE (Due today / All cards), both chosen from controls at the top of the
   * panel and remembered per-browser in localStorage. Everything else (SRS
   * scheduling, per-card _owner routing) is unchanged. */
  var fp = { cards: [], i: 0, revealed: false, ctx: "", mode: "due", scope: "all" };
  function initFlashPanel() {
    var aside = document.createElement("aside");
    aside.id = "flashpanel"; aside.className = "flashpanel"; aside.setAttribute("aria-label", "Flashcards");
    aside.innerHTML = '<div class="fp-resize" data-tip="Drag to resize"></div><div class="fp-head"><div class="fp-title">Flashcards</div><button type="button" class="fp-close icon-btn" data-tip="Close" aria-label="Close flashcards">✕</button></div><div class="fp-body"></div>';
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
    fp = { cards: q.cards, i: 0, revealed: false, ctx: q.ctx, mode: mode, scope: scope };
    try { localStorage.setItem("jeffent.fpScope", scope); localStorage.setItem("jeffent.fpMode", mode); } catch (_) {}
  }
  function openFlash() {
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
    var sel = document.createElement("select");
    sel.className = "fp-scope mono"; sel.setAttribute("aria-label", "Flashcard scope");
    var optAll = document.createElement("option"); optAll.value = "all"; optAll.textContent = "All modules"; sel.appendChild(optAll);
    TRACKS.forEach(function (t) {
      if (!modulesFor(t.id).length) return;
      var o = document.createElement("option"); o.value = t.id; o.textContent = t.name; sel.appendChild(o);
    });
    sel.value = fp.scope || "all";
    sel.addEventListener("change", function () { setFlashQueue(sel.value, fp.mode); renderFlash(); });
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
      return;
    }
    var card = fp.cards[fp.i];
    stage.appendChild(h('<div class="fp-prog"><i style="width:' + Math.round(fp.i / fp.cards.length * 100) + '%"></i></div>'));
    stage.appendChild(h('<div class="fp-count mono">Card ' + (fp.i + 1) + ' of ' + fp.cards.length + '</div>'));
    var fc = h('<div class="flashcard fp-card"></div>');
    fc.appendChild(h('<div class="card-front">' + card.front + '</div>'));
    var back = h('<div class="card-back' + (fp.revealed ? '' : ' hidden') + '">' + card.back + '</div>');
    fc.appendChild(back); stage.appendChild(fc);
    if (!fp.revealed) {
      var rv = h('<button class="btn reveal-btn" style="width:100%">Show answer</button>');
      rv.addEventListener("click", function () { fp.revealed = true; renderFlash(); });
      stage.appendChild(rv);
    } else {
      var ctr = h('<div class="answer-controls fp-controls"><button class="rate again" data-r="again">Again</button><button class="rate" data-r="good">Good</button><button class="rate" data-r="easy">Easy</button></div>');
      ctr.querySelectorAll(".rate").forEach(function (btn) {
        btn.addEventListener("click", function () {
          window.SRS.rate(card._owner || state.moduleId, card.id, btn.dataset.r);
          fp.i++; fp.revealed = false; renderFlash();
        });
      });
      stage.appendChild(ctr);
      stage.appendChild(h('<div class="kbd-hint mono">Space = Easy</div>'));
    }
  }

  /* Spacebar in the flashcard panel: reveal, then rate Easy (the rightmost
   * option), matching the main study screen. */
  function handleFlashSpace() {
    if (!fp.cards.length || fp.i >= fp.cards.length) return false;
    if (!fp.revealed) { fp.revealed = true; renderFlash(); return true; }
    var card = fp.cards[fp.i];
    window.SRS.rate(card._owner || state.moduleId, card.id, "easy");
    fp.i++; fp.revealed = false; renderFlash();
    return true;
  }

  /* One global keydown wires the spacebar into whichever card view is active:
   * the flashcard panel if it is open, otherwise a running study session,
   * otherwise the FAQ quiz. A focused button, or a form field, is left alone so
   * native behavior and typing still work. */
  function initQuizKeys() {
    document.addEventListener("keydown", function (e) {
      if (e.code !== "Space" && e.key !== " " && e.keyCode !== 32) return;
      var t = e.target, tag = t && t.tagName;
      /* Leave typing and native control widgets alone. Buttons are NOT excluded:
       * Space should drive the card even when a control still holds focus, and
       * the preventDefault below stops the focused button from also firing. */
      if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA" || (t && t.isContentEditable)) return;
      var handled = false;
      if (document.body.classList.contains("flash-open")) handled = handleFlashSpace();
      else if ((state.screen === "module" || state.screen === "study") && state.session && !state.session.done) handled = handleStudySpace();
      else if (state.screen === "pimp") handled = handlePimpSpace();
      if (handled) e.preventDefault();
    });
  }

  /* ---------- CROSS-REFERENCE LINKS (in-app jumps with hover preview) ---------- */
  function initXrefs() {
    var prev = null;
    function ensure() { if (prev) return; prev = h('<div class="xref-preview" hidden></div>'); document.body.appendChild(prev); }
    function show(a) {
      var mod = window.JEFFENT.get(a.getAttribute("data-mod")); if (!mod) return;
      ensure();
      var tab = a.getAttribute("data-tab") || "";
      prev.innerHTML = '<div class="xp-title">' + esc(mod.title) + (tab ? ' · ' + esc(TAB_LABELS[tab] || tab) : "") + '</div>' +
        '<div class="xp-sub">' + esc(mod.subtitle || "") + '</div><div class="xp-go">Open →</div>';
      var r = a.getBoundingClientRect();
      prev.hidden = false;
      var top = window.scrollY + r.bottom + 6, left = window.scrollX + r.left;
      prev.style.top = top + "px"; prev.style.left = Math.min(left, window.scrollX + window.innerWidth - 320) + "px";
    }
    function hide() { if (prev) prev.hidden = true; }
    document.addEventListener("mouseover", function (e) { var a = e.target.closest && e.target.closest(".xref"); if (a) show(a); });
    document.addEventListener("mouseout", function (e) { var a = e.target.closest && e.target.closest(".xref"); if (a) hide(); });
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest(".xref"); if (!a) return;
      e.preventDefault(); hide();
      goModuleTab(a.getAttribute("data-mod"), a.getAttribute("data-tab") || "anatomy");
    });
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
    initQuizKeys();
    initXrefs();
    initSearchShortcut();
    bumpStreak();
    var brand = el("brandHome");
    on(brand, "click", goHome);
    on(brand, "keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); goHome(); } });
    var pimpBtn = el("pimpToggle");
    if (pimpBtn) on(pimpBtn, "click", goPimp);
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
    var SEL = ".note-fig, .callout, .case, .tbl-scroll, .tg-card, .study-cta, .pcard, .hero-mini, .rm-row, .mod-row, .panel, .feature-row";
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

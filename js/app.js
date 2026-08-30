/* app.js — view logic for the JeffENT Rotation Companion.
 * Reads window.JEFFENT.tracks + window.JEFFENT.modules and renders the
 * topic-browser UI: a subspecialty-tile Home, a track module list (when a
 * track has more than one module), and a tabbed module view
 * (Anatomy / Clinical / Cases / Cards). Pure DOM; no framework.
 * Content is trusted local data (innerHTML is fine here).
 */
(function () {
  "use strict";

  var TRACKS = window.JEFFENT.tracks || [];
  var TABS = ["anatomy", "clinical", "cases", "cards"];
  var TAB_LABELS = { anatomy: "Anatomy", clinical: "Clinical", cases: "Cases", cards: "Cards" };

  var state = { screen: "home", trackId: null, moduleId: null, tab: "anatomy", session: null };

  /* ---------- helpers ---------- */
  function el(id) { return document.getElementById(id); }
  function h(html) { var d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstChild; }
  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { "&":"&amp;","<":"&lt;",">":"&gt;" }[c]; }); }
  function on(node, evt, fn) { node.addEventListener(evt, fn); return node; }

  function modulesFor(trackId) {
    return window.JEFFENT.modules
      .filter(function (m) { return m.track === trackId; })
      .sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
  }
  function isReviewed(mod) { return !/draft/i.test(mod.status || ""); }
  function trackHasFlags(mods) {
    return mods.some(function (m) { return (m.cards || []).some(function (c) { return c.redFlag; }); });
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
    ["home", "track", "module"].forEach(function (s) { el("screen-" + s).hidden = (s !== id); });
    window.scrollTo(0, 0);
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
    state.screen = "module"; state.moduleId = moduleId; state.session = null;
    state.tab = loadLastTab(moduleId) || "anatomy";
    if (TABS.indexOf(state.tab) === -1) state.tab = "anatomy";
    renderModule(moduleId);
    showScreen("module");
  }

  /* ---------- HOME ---------- */
  function renderHome() {
    var allMods = window.JEFFENT.modules;
    var agg = aggregateStats(allMods);
    var pct = agg.total ? Math.round((agg.mastered / agg.total) * 100) : 0;
    var reviewedCount = allMods.filter(isReviewed).length;

    var root = el("screen-home");
    root.innerHTML = "";
    root.appendChild(h('<div class="eyebrow">Your ENT rotation, topic by topic</div>'));
    root.appendChild(h(
      '<div class="progress-strip">' +
        '<div class="pcard"><div class="lbl">Overall mastery</div><div class="big">' + pct + '%</div><div class="bar"><i style="width:' + pct + '%"></i></div></div>' +
        '<div class="pcard"><div class="lbl">Due today</div><div class="big">' + agg.due + '</div></div>' +
        '<div class="pcard"><div class="lbl">Modules reviewed</div><div class="big">' + reviewedCount + ' / ' + allMods.length + '</div></div>' +
      '</div>'
    ));
    root.appendChild(h(
      '<div class="section-head"><h2>Browse by subspecialty</h2><span class="hint">Anatomy woven into every track · ⚑ = contains red flags</span></div>'
    ));

    var grid = h('<div class="tile-grid"></div>');
    TRACKS.forEach(function (t) {
      var mods = modulesFor(t.id);
      var cardCount = mods.reduce(function (n, m) { return n + (m.cards || []).length; }, 0);
      var s = aggregateStats(mods);
      var tpct = s.total ? Math.round((s.mastered / s.total) * 100) : 0;
      var disabled = mods.length === 0;
      var chip = disabled ? '<span class="chip">coming soon</span>'
        : (trackHasFlags(mods) ? '<span class="chip flag">⚑ red flags</span>' : '<span class="chip">core</span>');
      var meta = disabled ? 'No modules yet' : (mods.length + ' module' + (mods.length === 1 ? '' : 's') + ' · ' + cardCount + ' cards');
      var tile = h(
        '<button class="tile" type="button"' + (disabled ? ' disabled aria-disabled="true"' : '') + '>' +
          '<div class="tile-top"><span class="mono-badge">' + esc(t.abbr) + '</span>' + chip + '</div>' +
          '<h3>' + esc(t.name) + '</h3>' +
          '<div class="meta">' + meta + '</div>' +
          '<div class="bar"><i style="width:' + tpct + '%"></i></div>' +
        '</button>'
      );
      if (!disabled) tile.addEventListener("click", function () { goTrack(t.id); });
      grid.appendChild(tile);
    });
    root.appendChild(grid);
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
    root.appendChild(h('<div class="eyebrow">' + esc(track ? track.name : trackId) + '</div>'));
    root.appendChild(h('<h1 class="h-lead">' + esc(track ? track.name : trackId) + '</h1>'));

    var list = h('<div class="mod-list"></div>');
    mods.forEach(function (m) {
      var s = window.SRS.stats(m.id, m.cards || []);
      var pct = s.total ? Math.round((s.mastered / s.total) * 100) : 0;
      var row = h(
        '<button class="mod-row" type="button">' +
          '<div class="row-top"><h3>' + esc(m.title) + '</h3><span class="status-chip">' + esc(m.status) + '</span></div>' +
          '<p>' + esc(m.subtitle || "") + '</p>' +
          '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
        '</button>'
      );
      row.addEventListener("click", function () { goModule(m.id); });
      list.appendChild(row);
    });
    root.appendChild(list);
  }

  /* ---------- MODULE (tabbed) ---------- */
  function renderModule(moduleId) {
    var mod = window.JEFFENT.get(moduleId);
    var mods = modulesFor(mod.track);
    var root = el("screen-module");
    root.innerHTML = "";

    var crumb = h('<button class="crumb">&larr; All topics</button>');
    crumb.addEventListener("click", mods.length > 1 ? function () { goTrack(mod.track); } : goHome);
    if (mods.length > 1) crumb.textContent = "← " + (mod.trackName || mod.track);
    root.appendChild(crumb);

    var levelChips = (mod.level || []).map(function (lv) { return '<span class="chip">' + esc(lv) + '</span>'; }).join(" ");
    root.appendChild(h(
      '<div class="mod-head">' +
        '<div>' +
          '<div class="eyebrow">' + esc(mod.trackName || mod.track) + '</div>' +
          '<h1>' + esc(mod.title) + '</h1>' +
          '<p class="sub">' + esc(mod.subtitle || "") + '</p>' +
          (levelChips ? '<div class="level-chips">' + levelChips + '</div>' : '') +
        '</div>' +
        '<div class="status-chip">' + esc(mod.status) + '</div>' +
      '</div>'
    ));

    var tabbar = h('<div class="tabs" role="tablist"></div>');
    TABS.forEach(function (t) {
      var btn = h('<button class="tab" role="tab" id="tab-' + t + '" aria-controls="pane-' + t + '" aria-selected="' + (t === state.tab ? "true" : "false") + '" data-tab="' + t + '">' + TAB_LABELS[t] + '</button>');
      btn.addEventListener("click", function () {
        state.tab = t; saveLastTab(moduleId, t);
        renderTabState(root, mod);
      });
      tabbar.appendChild(btn);
    });
    root.appendChild(tabbar);

    var panes = h('<div class="tab-panes"></div>');
    panes.appendChild(buildAnatomyPane(mod));
    panes.appendChild(buildClinicalPane(mod));
    panes.appendChild(buildCasesPane(mod));
    panes.appendChild(buildCardsPane(mod));
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

  /* ---- Anatomy tab ---- */
  function buildAnatomyPane(mod) {
    var pane = h('<div class="tabpane" data-pane="anatomy"></div>');
    var a = mod.anatomy || {};
    var notes = a.notes || [], diagrams = a.diagrams || [], stacks = a.stacks || [];
    if (notes.length === 0 && diagrams.length === 0 && stacks.length === 0) {
      pane.appendChild(emptyNote("Anatomy content for this module is in progress."));
      return pane;
    }
    if (notes.length || diagrams.length) {
      var wrap = h('<div class="two-col"></div>');
      var left = h('<div class="col-notes"></div>');
      if (notes.length) {
        notes.forEach(function (n) {
          left.appendChild(h('<div class="panel"><h3>' + esc(n.title) + '</h3><div>' + n.html + '</div></div>'));
        });
      } else {
        left.appendChild(h('<div class="panel">' + emptyNote("No anatomy notes yet.").outerHTML + '</div>'));
      }
      wrap.appendChild(left);

      var right = h('<div class="col-diagrams"></div>');
      if (diagrams.length) {
        diagrams.forEach(function (dg) { right.appendChild(buildDiagramPanel(dg)); });
      } else {
        right.appendChild(h('<div class="panel">' + emptyNote("No labeled diagram yet.").outerHTML + '</div>'));
      }
      wrap.appendChild(right);
      pane.appendChild(wrap);
    }
    stacks.forEach(function (st) { pane.appendChild(buildStackPanel(st)); });
    return pane;
  }

  /* A labeled diagram: kind "svg" (author-drawn, default) or "image" (a real
   * raster image with percent-coordinate labels + a required source line).
   * Both kinds share the same reveal-on-click UX and label list. */
  function buildDiagramPanel(dg) {
    var revealed = {};
    var panel = h('<div class="panel"></div>');
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
    if (dg.kind === "image") panel.appendChild(h('<p class="media-source">Source: ' + esc(dg.source) + '</p>'));

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

    return panel;
  }

  /* kind:"svg" — author-drawn shapes with point-anchored leader-line labels. */
  function buildSvgDiagramStage(dg, revealed, updateRow) {
    var labelSvg = dg.labels.map(function (L) {
      return '<g class="lbl-group lbl-hidden" data-lbl="' + L.id + '">' +
        '<line x1="' + L.px + '" y1="' + L.py + '" x2="' + L.lx + '" y2="' + L.ly + '" stroke="var(--accent)" stroke-width="1"/>' +
        '<text class="lbl-text" x="' + L.lx + '" y="' + (L.ly - 4) + '" text-anchor="' + (L.lx < 120 ? 'start' : L.lx > 240 ? 'end' : 'middle') + '">' + esc(L.text) + '</text>' +
      '</g>';
    }).join("");
    var hotspots = dg.labels.map(function (L) {
      return '<g class="hotspot" tabindex="0" role="button" aria-label="Reveal ' + esc(L.text) + '" data-hot="' + L.id + '">' +
        '<circle cx="' + L.px + '" cy="' + L.py + '" r="6"/></g>';
    }).join("");

    var stage = h(
      '<div class="diagram-stage">' +
        '<svg viewBox="' + dg.viewBox + '" role="img" aria-label="' + esc(dg.title) + '">' +
          dg.base + labelSvg + hotspots +
        '</svg>' +
      '</div>'
    );

    function toggleLabel(id) {
      var L = dg.labels.filter(function (x) { return x.id === id; })[0];
      revealed[id] = !revealed[id];
      stage.querySelector('[data-lbl="' + id + '"]').classList.toggle("lbl-hidden", !revealed[id]);
      updateRow(id, revealed[id], L.text, dg.labels.indexOf(L) + 1);
    }

    stage.querySelectorAll(".hotspot").forEach(function (g) {
      function act() { toggleLabel(g.dataset.hot); }
      g.addEventListener("click", act);
      g.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); act(); } });
    });

    return { stage: stage, toggleLabel: toggleLabel };
  }

  /* kind:"image" — a real raster image; labels are percent-positioned dots
   * so they scale with the image at any size. */
  function buildImageDiagramStage(dg, revealed, updateRow) {
    var dots = dg.labels.map(function (L) {
      return '<button type="button" class="img-dot" style="left:' + L.xPct + '%;top:' + L.yPct + '%" data-hot="' + L.id + '" aria-label="Reveal ' + esc(L.text) + '">' +
        '<span class="dot"></span><span class="lbl-pill lbl-hidden">' + esc(L.text) + '</span>' +
      '</button>';
    }).join("");
    var stage = h(
      '<div class="diagram-stage image-stage">' +
        '<div class="img-frame">' +
          '<img src="' + esc(dg.src) + '" alt="' + esc(dg.title) + '" loading="lazy">' +
          dots +
        '</div>' +
      '</div>'
    );

    function toggleLabel(id) {
      var L = dg.labels.filter(function (x) { return x.id === id; })[0];
      revealed[id] = !revealed[id];
      var btn = stage.querySelector('[data-hot="' + id + '"]');
      btn.classList.toggle("revealed", revealed[id]);
      btn.querySelector(".lbl-pill").classList.toggle("lbl-hidden", !revealed[id]);
      updateRow(id, revealed[id], L.text, dg.labels.indexOf(L) + 1);
    }

    stage.querySelectorAll(".img-dot").forEach(function (btn) {
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
      '<div class="stack-stage" tabindex="0" role="group" aria-label="' + esc(stack.title) + ' slice viewer — use the slider or the up and down arrow keys to scroll">' +
        '<img class="stack-img" src="' + esc(stack.slices[0]) + '" alt="' + esc(stack.title) + ' — slice 1 of ' + stack.slices.length + '">' +
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
      img.alt = stack.title + " — slice " + (idx + 1) + " of " + stack.slices.length;
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
    var blocks = c.blocks || [], redFlags = c.redFlags || [];
    if (blocks.length === 0 && redFlags.length === 0) {
      pane.appendChild(emptyNote("Clinical content for this module is in progress."));
      return pane;
    }
    var wrap = h('<div class="two-col"></div>');
    var left = h('<div class="col-blocks"></div>');
    if (blocks.length) {
      blocks.forEach(function (b) {
        var p = h('<div class="panel"><h3>' + esc(b.title) + '</h3></div>');
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
        left.appendChild(p);
      });
    } else {
      left.appendChild(h('<div class="panel">' + emptyNote("No clinical notes yet.").outerHTML + '</div>'));
    }
    wrap.appendChild(left);

    var right = h('<div class="panel"><h3><span style="color:var(--flag)">⚑</span> Red flags in this module</h3></div>');
    if (redFlags.length) {
      redFlags.forEach(function (f) {
        right.appendChild(h('<div class="flag-row"><span class="fx">⚑</span><span class="t">' + f.t + '</span></div>'));
      });
    } else {
      right.appendChild(emptyNote("No red flags logged for this module yet."));
    }
    wrap.appendChild(right);
    pane.appendChild(wrap);
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
      var card = h('<div class="case"></div>');
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

  function startSession(pane, mod, mode) {
    var cards = mode === "all" ? mod.cards.slice() : window.SRS.dueCards(mod.id, mod.cards);
    state.session = { mode: mode, cards: cards, i: 0, revealed: false, done: cards.length === 0 };
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
      back.querySelector("button").addEventListener("click", function () { state.session = null; renderCardsIntro(pane, mod); });
      panel.querySelector(".done-panel").appendChild(back);
      pane.appendChild(panel);
      return;
    }
    var card = ses.cards[ses.i];
    var pct = Math.round((ses.i / ses.cards.length) * 100);
    var shell = h('<div class="study-shell"></div>');
    shell.appendChild(h('<div class="progress"><i style="width:' + pct + '%"></i></div>'));
    shell.appendChild(h('<div class="mono" style="font-size:12px;color:var(--ink-faint);margin-bottom:12px">Card ' + (ses.i + 1) + ' of ' + ses.cards.length + ' · ' + (ses.mode === "all" ? "review all" : "due today") + '</div>'));

    var tags = card.tags.map(function (t) { return '<span class="pill">' + esc(t) + '</span>'; }).join("");
    if (card.redFlag) tags = '<span class="pill flag">⚑ red flag</span>' + tags;

    var fc = h('<div class="flashcard' + (card.redFlag ? ' flag' : '') + '"></div>');
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
          window.SRS.rate(mod.id, card.id, btn.dataset.r);
          ses.i++; ses.revealed = false;
          if (ses.i >= ses.cards.length) ses.done = true;
          renderStudy(pane, mod);
        });
      });
      shell.appendChild(ctr);
    }
    pane.appendChild(shell);
  }

  /* ---------- boot ---------- */
  function boot() {
    var totalModules = window.JEFFENT.modules.length;
    var activeTracks = TRACKS.filter(function (t) { return modulesFor(t.id).length > 0; }).length;
    el("moduleStamp").textContent = totalModules + " module" + (totalModules === 1 ? "" : "s") + " loaded across " + activeTracks + " track" + (activeTracks === 1 ? "" : "s");
    initTheme();
    var brand = el("brandHome");
    on(brand, "click", goHome);
    on(brand, "keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); goHome(); } });
    goHome();
  }
  document.addEventListener("DOMContentLoaded", boot);
})();

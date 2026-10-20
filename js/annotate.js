/* Annotations: two small, independent tools that sit on top of the rendered pages.
 *
 * 1. Highlights (everyone). Drag over words inside a module, pick a colour, and the words stay
 *    highlighted for that user. Right-click a highlight to remove it. Stored under the
 *    "jeffent." localStorage prefix, so the optional username sync carries them across devices.
 *
 * 2. Review mode (owner only, opt in with ?review=1). Right-click anything to leave a comment on
 *    it. Comments stay in this browser and can be copied as text for a code review. Nothing in
 *    review mode loads unless the flag is on, so students never see it.
 *
 * ES5, no dependencies, no clinical content. */
(function () {
  "use strict";

  var HL_KEY = "jeffent.highlights";
  var RV_KEY = "ent.review.comments";
  var COLORS = ["yellow", "green", "blue", "pink", "orange"];
  var ROOT_SEL = "#screen-module";
  var SKIP = "script,style,svg,button,input,textarea,select,.note-jump,.img-occ,.hotspot,.peek-card,.hl-ui,.rv-ui";

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function route() { return location.hash || "#/"; }
  function load(key, fallback) { try { return JSON.parse(localStorage.getItem(key) || "null") || fallback; } catch (e) { return fallback; } }
  function save(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function mk(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; }

  /* ---------- shared floating menu ---------- */
  var menu = null;
  function closeMenu() { if (menu && menu.parentNode) menu.parentNode.removeChild(menu); menu = null; }
  function showMenu(x, y, items) {
    closeMenu();
    menu = mk("div", "hl-ui hl-menu");
    menu.setAttribute("role", "menu");
    items.forEach(function (it) {
      var b = mk("button", "hl-menu-item", it.label);
      b.type = "button"; b.setAttribute("role", "menuitem");
      b.addEventListener("click", function () { closeMenu(); it.run(); });
      menu.appendChild(b);
    });
    document.body.appendChild(menu);
    var w = menu.offsetWidth, h = menu.offsetHeight;
    menu.style.left = Math.max(8, Math.min(x, window.innerWidth - w - 8)) + "px";
    menu.style.top = Math.max(8, Math.min(y, window.innerHeight - h - 8)) + "px";
  }
  document.addEventListener("mousedown", function (e) { if (menu && !menu.contains(e.target)) closeMenu(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeMenu(); hideBar(); } });
  window.addEventListener("scroll", function () { closeMenu(); hideBar(); }, { passive: true });

  /* ---------- highlights ---------- */
  var store = load(HL_KEY, {});            // route -> [{ gid, sid, text, b, a, c }]
  var applying = false;

  function skipped(node) {
    var p = node.parentNode;
    return !p || (p.closest && p.closest(SKIP)) || false;
  }
  function textNodes(root) {
    var out = [], w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false), n;
    while ((n = w.nextNode())) if (n.nodeValue && !skipped(n)) out.push(n);
    return out;
  }
  function wrap(node, s, e, gid, sid, color) {
    var mid = s > 0 ? node.splitText(s) : node;
    if (e - s < mid.nodeValue.length) mid.splitText(e - s);
    var m = mk("mark", "user-hl");
    m.setAttribute("data-gid", gid); m.setAttribute("data-sid", sid); m.setAttribute("data-c", color);
    mid.parentNode.insertBefore(m, mid);
    m.appendChild(mid);
    return m;
  }
  function applyAll() {
    var root = $(ROOT_SEL);
    if (!root || root.hidden) return;
    var list = store[route()];
    if (!list || !list.length) return;
    applying = true;
    try {
      list.forEach(function (seg) {
        if (root.querySelector('mark[data-sid="' + seg.sid + '"]')) return;
        var nodes = textNodes(root), needle = seg.b + seg.text + seg.a, i, idx, seen = 0, firstHit = null;
        for (i = 0; i < nodes.length; i++) {
          if (nodes[i].parentNode.closest && nodes[i].parentNode.closest("mark.user-hl")) continue;
          idx = nodes[i].nodeValue.indexOf(needle);
          if (idx < 0) continue;
          if (!firstHit) firstHit = [nodes[i], idx];
          if (seen === (seg.k || 0)) { firstHit = [nodes[i], idx]; break; }
          seen++;
        }
        if (firstHit) wrap(firstHit[0], firstHit[1] + seg.b.length, firstHit[1] + seg.b.length + seg.text.length, seg.gid, seg.sid, seg.c);
      });
    } finally { applying = false; }
  }
  function unwrapGroup(gid) {
    var marks = document.querySelectorAll('mark.user-hl[data-gid="' + gid + '"]');
    Array.prototype.forEach.call(marks, function (m) {
      var p = m.parentNode;
      while (m.firstChild) p.insertBefore(m.firstChild, m);
      p.removeChild(m); p.normalize();
    });
    var r = route();
    store[r] = (store[r] || []).filter(function (s) { return s.gid !== gid; });
    if (!store[r].length) delete store[r];
    save(HL_KEY, store);
  }

  /* the colour bar that appears over a selection */
  var bar = null;
  function hideBar() { if (bar) bar.hidden = true; }
  function buildBar() {
    bar = mk("div", "hl-ui hl-bar");
    bar.hidden = true; bar.setAttribute("role", "toolbar"); bar.setAttribute("aria-label", "Highlight colour");
    COLORS.forEach(function (c) {
      var b = mk("button", "hl-dot");
      b.type = "button"; b.setAttribute("data-c", c); b.setAttribute("aria-label", "Highlight " + c);
      b.addEventListener("mousedown", function (e) { e.preventDefault(); });
      b.addEventListener("click", function () { highlightSelection(c); });
      bar.appendChild(b);
    });
    document.body.appendChild(bar);
  }
  function inRoot(node) {
    var root = $(ROOT_SEL);
    return !!(root && node && root.contains(node.nodeType === 3 ? node.parentNode : node));
  }
  function onSelect() {
    window.setTimeout(function () {
      var sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount) { hideBar(); return; }
      var r = sel.getRangeAt(0);
      if (!inRoot(r.startContainer) || !inRoot(r.endContainer) || !String(sel).trim()) { hideBar(); return; }
      if (!bar) buildBar();
      var rect = r.getBoundingClientRect();
      bar.hidden = false;
      var w = bar.offsetWidth;
      bar.style.left = Math.max(8, Math.min(rect.left + rect.width / 2 - w / 2, window.innerWidth - w - 8)) + "px";
      bar.style.top = Math.max(8, rect.top - bar.offsetHeight - 8) + "px";
    }, 0);
  }
  function highlightSelection(color) {
    var sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) return;
    var r = sel.getRangeAt(0), nodes = [], anc = r.commonAncestorContainer;
    if (anc.nodeType === 3) nodes = [anc];
    else textNodes(anc).forEach(function (n) { if (r.intersectsNode(n)) nodes.push(n); });
    var gid = uid(), segs = [];
    applying = true;
    try {
      nodes.forEach(function (n) {
        if (skipped(n) || (n.parentNode.closest && n.parentNode.closest("mark.user-hl"))) return;
        var s = n === r.startContainer ? r.startOffset : 0, e = n === r.endContainer ? r.endOffset : n.nodeValue.length;
        var raw = n.nodeValue.slice(s, e);
        if (!raw.trim()) return;
        var b = n.nodeValue.slice(Math.max(0, s - 24), s), a = n.nodeValue.slice(e, e + 24), sid = uid(), needle = b + raw + a, k = 0, all = textNodes($(ROOT_SEL)), j;
        for (j = 0; j < all.length && all[j] !== n; j++) {
          if (all[j].nodeValue.indexOf(needle) > -1 && !(all[j].parentNode.closest && all[j].parentNode.closest("mark.user-hl"))) k++;
        }
        wrap(n, s, e, gid, sid, color);
        segs.push({ gid: gid, sid: sid, text: raw, b: b, a: a, c: color, k: k });
      });
    } finally { applying = false; }
    if (segs.length) {
      var rt = route();
      store[rt] = (store[rt] || []).concat(segs);
      save(HL_KEY, store);
    }
    sel.removeAllRanges();
    hideBar();
  }

  /* ---------- review mode ---------- */
  var review = (function () {
    try {
      if (/[?&]review=1/.test(location.search)) localStorage.setItem("ent.review.on", "1");
      if (/[?&]review=0/.test(location.search)) localStorage.removeItem("ent.review.on");
      return localStorage.getItem("ent.review.on") === "1";
    } catch (e) { return false; }
  })();
  var comments = load(RV_KEY, []);
  var panel = null, panelOpen = false;

  function cssPath(el) {
    var parts = [], n = el, d = 0;
    while (n && n.nodeType === 1 && n.tagName !== "BODY" && d < 7) {
      if (n.id) { parts.unshift("#" + n.id); break; }
      var tag = n.tagName.toLowerCase(), idx = 1, sib = n;
      while ((sib = sib.previousElementSibling)) if (sib.tagName === n.tagName) idx++;
      parts.unshift(tag + ":nth-of-type(" + idx + ")");
      n = n.parentElement; d++;
    }
    return parts.join(" > ");
  }
  function snippet(el, sel) {
    var t = (sel && String(sel).trim()) || (el.innerText || el.textContent || "");
    t = t.replace(/\s+/g, " ").trim();
    return t.length > 160 ? t.slice(0, 157) + "..." : t;
  }
  function saveComments() { save(RV_KEY, comments); refreshPins(); renderPanel(); }
  function refreshPins() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-rv-n]"), function (e) { e.removeAttribute("data-rv-n"); });
    comments.filter(function (c) { return c.route === route() && !c.done; }).forEach(function (c, i) {
      var el = null; try { el = document.querySelector(c.selector); } catch (e) {}
      if (el) el.setAttribute("data-rv-n", String(i + 1));
    });
  }
  function askComment(target, selText, x, y) {
    closeMenu();
    var box = mk("div", "rv-ui rv-box");
    var q = mk("div", "rv-quote", snippet(target, selText));
    var ta = mk("textarea", "rv-ta"); ta.placeholder = "What should change here?"; ta.rows = 3;
    var row = mk("div", "rv-row");
    var ok = mk("button", "rv-btn rv-primary", "Save comment"), no = mk("button", "rv-btn", "Cancel");
    ok.type = no.type = "button";
    function done() { if (box.parentNode) box.parentNode.removeChild(box); }
    no.addEventListener("click", done);
    ok.addEventListener("click", function () {
      var v = ta.value.trim(); if (!v) { ta.focus(); return; }
      comments.push({ id: uid(), route: route(), selector: cssPath(target), text: snippet(target, selText), comment: v, ts: new Date().toISOString(), done: false });
      done(); saveComments(); openPanel(true);
    });
    row.appendChild(ok); row.appendChild(no);
    box.appendChild(q); box.appendChild(ta); box.appendChild(row);
    document.body.appendChild(box);
    box.style.left = Math.max(8, Math.min(x, window.innerWidth - 320)) + "px";
    box.style.top = Math.max(8, Math.min(y, window.innerHeight - 220)) + "px";
    ta.focus();
  }
  function exportText() {
    var open = comments.filter(function (c) { return !c.done; }), by = {}, out = ["Review comments (" + open.length + ")", ""];
    open.forEach(function (c) { (by[c.route] = by[c.route] || []).push(c); });
    Object.keys(by).forEach(function (r) {
      out.push("Page: " + r);
      by[r].forEach(function (c, i) {
        out.push((i + 1) + ". On: \"" + c.text + "\"");
        out.push("   Selector: " + c.selector);
        out.push("   Comment: " + c.comment);
      });
      out.push("");
    });
    return out.join("\n");
  }
  function renderPanel() {
    if (!review) return;
    if (!panel) {
      panel = mk("div", "rv-ui rv-panel");
      document.body.appendChild(panel);
    }
    var open = comments.filter(function (c) { return !c.done; });
    panel.innerHTML = "";
    var head = mk("button", "rv-head", "Review comments (" + open.length + ")");
    head.type = "button"; head.setAttribute("aria-expanded", panelOpen ? "true" : "false");
    head.addEventListener("click", function () { panelOpen = !panelOpen; renderPanel(); });
    panel.appendChild(head);
    if (!panelOpen) return;
    var list = mk("div", "rv-list");
    if (!open.length) list.appendChild(mk("p", "rv-empty", "Right-click anything on a page to leave a comment."));
    open.forEach(function (c) {
      var it = mk("div", "rv-item");
      it.appendChild(mk("div", "rv-item-route", c.route));
      it.appendChild(mk("div", "rv-item-text", "“" + c.text + "”"));
      it.appendChild(mk("div", "rv-item-comment", c.comment));
      var r = mk("div", "rv-row");
      var go = mk("button", "rv-btn", c.route === route() ? "Show" : "Open page"), del = mk("button", "rv-btn", "Resolve");
      go.type = del.type = "button";
      go.addEventListener("click", function () {
        if (c.route !== route()) { location.hash = c.route; return; }
        var el = null; try { el = document.querySelector(c.selector); } catch (e) {}
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      del.addEventListener("click", function () { c.done = true; saveComments(); });
      r.appendChild(go); r.appendChild(del); it.appendChild(r); list.appendChild(it);
    });
    panel.appendChild(list);
    var foot = mk("div", "rv-row rv-foot");
    var copy = mk("button", "rv-btn rv-primary", "Copy all"), dl = mk("button", "rv-btn", "Download");
    copy.type = dl.type = "button";
    copy.addEventListener("click", function () {
      var t = exportText();
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(function () { copy.textContent = "Copied"; setTimeout(function () { copy.textContent = "Copy all"; }, 1400); });
      else window.prompt("Copy these comments:", t);
    });
    dl.addEventListener("click", function () {
      var a = document.createElement("a");
      a.href = "data:text/plain;charset=utf-8," + encodeURIComponent(exportText());
      a.download = "review-comments.txt"; document.body.appendChild(a); a.click(); document.body.removeChild(a);
    });
    foot.appendChild(copy); foot.appendChild(dl); panel.appendChild(foot);
  }
  function openPanel(on) { panelOpen = !!on; renderPanel(); }

  /* ---------- wiring ---------- */
  document.addEventListener("mouseup", function (e) { if (!(e.target.closest && e.target.closest(".hl-ui"))) onSelect(); });
  document.addEventListener("contextmenu", function (e) {
    var t = e.target;
    if (!t.closest || t.closest(".hl-ui, .rv-ui")) return;
    var mark = t.closest("mark.user-hl"), items = [];
    if (mark) items.push({ label: "Remove highlight", run: function () { unwrapGroup(mark.getAttribute("data-gid")); } });
    if (review) {
      var sel = String(window.getSelection() || "");
      items.push({ label: "Add comment…", run: function () { askComment(t, sel, e.clientX, e.clientY); } });
    }
    if (!items.length) return;
    e.preventDefault();
    showMenu(e.clientX, e.clientY, items);
  });

  var timer = null;
  function schedule() {
    if (applying) return;
    window.clearTimeout(timer);
    timer = window.setTimeout(function () { applyAll(); if (review) refreshPins(); }, 120);
  }
  function start() {
    var main = document.getElementById("main");
    if (main && window.MutationObserver) new MutationObserver(schedule).observe(main, { childList: true, subtree: true, attributes: true, attributeFilter: ["hidden"] });
    window.addEventListener("hashchange", schedule);
    schedule();
    if (review) renderPanel();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();

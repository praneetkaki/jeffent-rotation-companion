/* srs.js, a small, dependency-free spaced-repetition scheduler.
 *
 * Ratings map straight to a fixed, user-configurable interval:
 *   "again" -> back in a short number of MINUTES (default 15)
 *   "good"  -> back in a number of DAYS (default 1)
 *   "easy"  -> back in a longer number of DAYS (default 3)
 *
 * Per-card state {box, due, seen} is stored in localStorage, keyed by module
 * id. State is per-browser and per-learner; no server, no PII. Safe on
 * GitHub Pages. `box` (1-5) no longer drives the interval directly -- it's
 * kept only as a simple "how many successful reviews in a row" counter so
 * the home/module progress bars can still show a mastered count (box >= 5).
 *
 * SETTINGS (v0.3): four knobs, adjustable from the Study Settings panel in
 * the header and applied globally across every module:
 *   - againMinutes / goodDays / easyDays: the fixed interval each rating
 *     jumps a card to. Direct and predictable, matching how the three rating
 *     buttons in the UI actually work -- no hidden box-interval table.
 *   - newCardsPerDay: caps how many never-before-seen cards are introduced
 *     per module per calendar day (0 = unlimited). Cards already due for
 *     REVIEW are never capped, only the introduction of brand-new cards is
 *     throttled, matching how Anki's daily new-card limit behaves. The cap
 *     is enforced inside dueCards()/stats(), so every existing call site
 *     (module lists, per-topic study, the cross-module "All Due" queue)
 *     picks it up automatically with no other code changes required.
 *
 * RESETS (v0.3): resetAll() wipes every module's progress and new-card
 * counters in one sweep (a full "start over"); reset(moduleId) does the same
 * for a single module, for when only one topic needs a clean slate.
 */
(function () {
  "use strict";

  var MINUTE = 60 * 1000;
  var DAY = 24 * 60 * MINUTE;

  var SETTINGS_KEY = "jeffent.settings";
  var DEFAULT_SETTINGS = { againMinutes: 15, goodDays: 1, easyDays: 3, newCardsPerDay: 0 }; // newCardsPerDay 0 = unlimited
  var MIN_MINUTES = 1, MAX_MINUTES = 1440;   // cap "again" at 24h
  var MIN_DAYS = 1, MAX_DAYS = 365;

  function storeKey(moduleId) { return "jeffent.srs." + moduleId; }
  function newCountKey(moduleId) { return "jeffent.srs.newcount." + moduleId; }

  function loadState(moduleId) {
    try {
      var raw = localStorage.getItem(storeKey(moduleId));
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }

  function saveState(moduleId, state) {
    try { localStorage.setItem(storeKey(moduleId), JSON.stringify(state)); }
    catch (e) { /* private mode / storage blocked -- degrade to session-only */ }
  }

  function today() { return Date.now(); }
  function todayStr() { return new Date().toISOString().slice(0, 10); }

  function clampMinutes(n, fallback) {
    n = Number(n);
    if (!isFinite(n) || n <= 0) return fallback;
    return Math.max(MIN_MINUTES, Math.min(MAX_MINUTES, Math.round(n)));
  }
  function clampDays(n, fallback) {
    n = Number(n);
    if (!isFinite(n) || n <= 0) return fallback;
    return Math.max(MIN_DAYS, Math.min(MAX_DAYS, Math.round(n)));
  }
  function clampNewCardsPerDay(n) {
    n = Number(n);
    if (!isFinite(n) || n < 0) return 0;
    return Math.round(n);
  }

  function getSettings() {
    var s = {};
    try {
      var raw = localStorage.getItem(SETTINGS_KEY);
      s = raw ? JSON.parse(raw) : {};
    } catch (e) { s = {}; }
    return {
      againMinutes: clampMinutes(s.againMinutes, DEFAULT_SETTINGS.againMinutes),
      goodDays: clampDays(s.goodDays, DEFAULT_SETTINGS.goodDays),
      easyDays: clampDays(s.easyDays, DEFAULT_SETTINGS.easyDays),
      newCardsPerDay: clampNewCardsPerDay(s.newCardsPerDay != null ? s.newCardsPerDay : DEFAULT_SETTINGS.newCardsPerDay)
    };
  }

  function setSettings(partial) {
    var cur = getSettings();
    var next = {
      againMinutes: partial.againMinutes != null ? clampMinutes(partial.againMinutes, cur.againMinutes) : cur.againMinutes,
      goodDays: partial.goodDays != null ? clampDays(partial.goodDays, cur.goodDays) : cur.goodDays,
      easyDays: partial.easyDays != null ? clampDays(partial.easyDays, cur.easyDays) : cur.easyDays,
      newCardsPerDay: partial.newCardsPerDay != null ? clampNewCardsPerDay(partial.newCardsPerDay) : cur.newCardsPerDay
    };
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(next)); } catch (e) {}
    return next;
  }

  function getNewCountToday(moduleId) {
    try {
      var raw = localStorage.getItem(newCountKey(moduleId));
      var rec = raw ? JSON.parse(raw) : null;
      if (!rec || rec.date !== todayStr()) return 0;
      return rec.count || 0;
    } catch (e) { return 0; }
  }

  function bumpNewCountToday(moduleId) {
    var count = getNewCountToday(moduleId) + 1;
    try { localStorage.setItem(newCountKey(moduleId), JSON.stringify({ date: todayStr(), count: count })); }
    catch (e) { /* degrade to session-only */ }
    return count;
  }

  /* Shared by dueCards() and stats(): partitions `cards` into review-due
   * (seen before, due now) and new (never seen), applies the daily new-card
   * cap to the "new" bucket only, and returns the combined list preserving
   * the original card order (so callers that just want a count, or that
   * render the queue directly, both get a stable, order-preserving result). */
  function computeDueList(moduleId, cards) {
    var state = loadState(moduleId);
    var now = today();
    var settings = getSettings();
    var cap = settings.newCardsPerDay; // 0 = unlimited
    var introducedToday = cap > 0 ? getNewCountToday(moduleId) : 0;
    var newBudget = cap > 0 ? Math.max(0, cap - introducedToday) : Infinity;
    var newUsed = 0;
    var out = [];
    cards.forEach(function (c) {
      var s = state[c.id];
      if (s) {
        if (s.due <= now) out.push(c);
      } else {
        if (newUsed < newBudget) { out.push(c); newUsed++; }
      }
    });
    return out;
  }

  var SRS = {
    /* Return the subset of cards that are due now (or never seen, up to
     * the daily new-card cap), preserving order. */
    dueCards: function (moduleId, cards) {
      return computeDueList(moduleId, cards);
    },

    /* Apply a rating to a card and persist. The due date comes straight
     * from the matching configured interval (again/good/easy) -- `box`
     * is tracked only as a simple streak counter for the mastered stat. */
    rate: function (moduleId, cardId, rating) {
      var state = loadState(moduleId);
      var isNew = !state[cardId];
      var s = state[cardId] || { box: 0, due: 0, seen: 0 };
      var settings = getSettings();
      if (rating === "again") {
        s.box = 1;
        s.due = today() + settings.againMinutes * MINUTE;
      } else if (rating === "easy") {
        s.box = Math.min(Math.max(s.box, 0) + 2, 5);
        s.due = today() + settings.easyDays * DAY;
      } else { // "good"
        s.box = Math.min(Math.max(s.box, 0) + 1, 5);
        s.due = today() + settings.goodDays * DAY;
      }
      s.box = Math.max(1, s.box);
      s.seen = (s.seen || 0) + 1;
      state[cardId] = s;
      saveState(moduleId, state);
      if (isNew) bumpNewCountToday(moduleId);
      return s;
    },

    /* Aggregate stats for the home dashboard. "due" reflects the same
     * new-card cap as dueCards(), so a badge never promises more cards than
     * a study session will actually surface today. */
    stats: function (moduleId, cards) {
      var state = loadState(moduleId);
      var seen = 0, mastered = 0;
      cards.forEach(function (c) {
        var s = state[c.id];
        if (s) {
          seen++;
          if (s.box >= 5) mastered++;
        }
      });
      var due = computeDueList(moduleId, cards).length;
      return { total: cards.length, seen: seen, due: due, mastered: mastered };
    },

    /* Reset one module's progress: clears its card state and its daily
     * new-card counter, so it studies exactly like a fresh module again. */
    reset: function (moduleId) {
      saveState(moduleId, {});
      try { localStorage.removeItem(newCountKey(moduleId)); } catch (e) {}
    },

    /* Reset EVERY module's progress in one sweep -- a full "start over".
     * Sweeps localStorage for any "jeffent.srs.*" key rather than requiring
     * a module list, so it works even for modules that were never passed in. */
    resetAll: function () {
      try {
        var keys = [];
        for (var i = 0; i < localStorage.length; i++) {
          var k = localStorage.key(i);
          if (k && k.indexOf("jeffent.srs.") === 0) keys.push(k);
        }
        keys.forEach(function (k) { try { localStorage.removeItem(k); } catch (e) {} });
      } catch (e) { /* private mode / storage blocked */ }
    },

    /* Study settings (again/good/easy intervals + daily new-card cap),
     * shared across every module -- see the header comment for how each
     * is used. */
    getSettings: getSettings,
    setSettings: setSettings,
    defaultSettings: function () {
      return {
        againMinutes: DEFAULT_SETTINGS.againMinutes,
        goodDays: DEFAULT_SETTINGS.goodDays,
        easyDays: DEFAULT_SETTINGS.easyDays,
        newCardsPerDay: DEFAULT_SETTINGS.newCardsPerDay
      };
    }
  };

  window.SRS = SRS;
})();

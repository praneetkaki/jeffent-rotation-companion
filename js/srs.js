/* srs.js — a small, dependency-free spaced-repetition scheduler.
 *
 * Uses a Leitner-style box system (5 boxes) mapped to increasing intervals.
 * Per-card state {box, due} is stored in localStorage, keyed by module id.
 * State is per-browser and per-learner; no server, no PII. Safe on GitHub Pages.
 *
 * Ratings:
 *   "again" -> back to box 1 (see it again this session / tomorrow)
 *   "good"  -> advance one box
 *   "easy"  -> advance two boxes
 */
(function () {
  "use strict";

  // Interval in DAYS for each box (index 0 unused; boxes are 1..5).
  var INTERVALS = [0, 1, 2, 4, 8, 16];
  var DAY = 24 * 60 * 60 * 1000;

  function storeKey(moduleId) { return "jeffent.srs." + moduleId; }

  function loadState(moduleId) {
    try {
      var raw = localStorage.getItem(storeKey(moduleId));
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }

  function saveState(moduleId, state) {
    try { localStorage.setItem(storeKey(moduleId), JSON.stringify(state)); }
    catch (e) { /* private mode / storage blocked — degrade to session-only */ }
  }

  function today() { return Date.now(); }

  var SRS = {
    /* Return the subset of cards that are due now (or never seen), preserving order. */
    dueCards: function (moduleId, cards) {
      var state = loadState(moduleId);
      var now = today();
      return cards.filter(function (c) {
        var s = state[c.id];
        return !s || s.due <= now;
      });
    },

    /* Apply a rating to a card and persist. Returns the new card state. */
    rate: function (moduleId, cardId, rating) {
      var state = loadState(moduleId);
      var s = state[cardId] || { box: 0, due: 0, seen: 0 };
      if (rating === "again") s.box = 1;
      else if (rating === "easy") s.box = Math.min(s.box + 2, 5);
      else s.box = Math.min(Math.max(s.box, 0) + 1, 5); // "good"
      s.box = Math.max(1, s.box);
      s.seen = (s.seen || 0) + 1;
      s.due = today() + INTERVALS[s.box] * DAY;
      state[cardId] = s;
      saveState(moduleId, state);
      return s;
    },

    /* Aggregate stats for the home dashboard. */
    stats: function (moduleId, cards) {
      var state = loadState(moduleId);
      var now = today();
      var seen = 0, due = 0, mastered = 0;
      cards.forEach(function (c) {
        var s = state[c.id];
        if (s) {
          seen++;
          if (s.box >= 5) mastered++;
          if (s.due <= now) due++;
        } else {
          due++; // never seen counts as due
        }
      });
      return { total: cards.length, seen: seen, due: due, mastered: mastered };
    },

    reset: function (moduleId) { saveState(moduleId, {}); }
  };

  window.SRS = SRS;
})();

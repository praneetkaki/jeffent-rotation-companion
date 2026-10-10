/* sync.js — optional cross-device progress sync via a student-chosen
 * username. No password, no email, no Firebase Auth: a username is just a
 * key a student picks so their own progress finds its way back to them on
 * a second device. This is a small, deliberate exception to this project's
 * usual "no accounts, no backend" rule (see CLAUDE.md) -- everything here
 * stays fully optional, and the app works exactly as before if a student
 * never sets a username or if this project's owner never fills in
 * js/firebase-config.js.
 *
 * TRUST MODEL, worth restating: a username is not a password. Anyone who
 * knows or guesses it can read and overwrite that student's synced
 * progress. Tell students to pick something memorable but not guessable,
 * never something they reuse as an actual password elsewhere.
 *
 * SYNC MODEL: last write wins, no merge. Every localStorage key prefixed
 * "jeffent." (every other module in this codebase already uses that
 * prefix for anything resembling progress; "fpWidth"/"ppWidth" are pure
 * UI layout, not progress, and are deliberately excluded) is treated as
 * one blob keyed by username in Firestore. Studying on two devices at the
 * literal same time can lose one side's work -- fine for a personal study
 * tool, worth knowing.
 */
(function () {
  "use strict";

  var USERNAME_KEY = "jeffent.syncUsername";
  var cfg = window.JEFFENT_FIREBASE_CONFIG;
  var db = null;
  var ready = false;
  var AUTO_PUSH_MS = 60000;

  function isConfigured() {
    return !!(cfg && cfg.apiKey && String(cfg.apiKey).indexOf("REPLACE_ME") === -1);
  }

  function init() {
    if (!isConfigured() || !window.firebase) return;
    try {
      firebase.initializeApp(cfg);
      db = firebase.firestore();
      ready = true;
    } catch (e) { ready = false; }
  }

  function getUsername() {
    try { return localStorage.getItem(USERNAME_KEY) || ""; } catch (e) { return ""; }
  }
  function setUsername(name) { try { localStorage.setItem(USERNAME_KEY, name); } catch (e) {} }
  function clearUsername() { try { localStorage.removeItem(USERNAME_KEY); } catch (e) {} }

  /* Lowercase, alphanumeric plus - and _, 3-40 chars -- forgiving of case
   * and stray spaces, strict enough to keep it usable as a Firestore doc id. */
  function normalizeUsername(raw) {
    return String(raw || "").trim().toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 40);
  }

  function collectLocalData() {
    var out = {};
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf("jeffent.") === 0 && k !== USERNAME_KEY) out[k] = localStorage.getItem(k);
      }
    } catch (e) {}
    return out;
  }

  function applyRemoteData(data) {
    try {
      var toRemove = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf("jeffent.") === 0 && k !== USERNAME_KEY) toRemove.push(k);
      }
      toRemove.forEach(function (k) { localStorage.removeItem(k); });
      Object.keys(data || {}).forEach(function (k) { localStorage.setItem(k, data[k]); });
    } catch (e) {}
  }

  function docRef(username) { return db.collection("students").doc(username); }

  /* Version of this device's copy: the clientTs of the last push from, or
   * pull into, this device. Not prefixed "jeffent." so it is never synced. */
  var VER_KEY = "ent.syncVer";
  function getVer() { try { return Number(localStorage.getItem(VER_KEY)) || 0; } catch (e) { return 0; } }
  function setVer(v) { try { localStorage.setItem(VER_KEY, String(v)); } catch (e) {} }

  function pushNow(cb) {
    var username = getUsername();
    if (!ready || !username) { cb && cb(new Error("Not linked.")); return; }
    var ts = Date.now();
    docRef(username).set({
      data: collectLocalData(),
      clientTs: ts,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(function () { setVer(ts); cb && cb(null); }).catch(function (err) { cb && cb(err); });
  }

  /* Look up a username without touching anything locally -- used by the
   * "link this device" flow to decide whether it's a brand-new username
   * (push local progress as the seed) or an existing one (pull it down). */
  function lookup(username, cb) {
    if (!ready) { cb && cb(new Error("Sync isn't set up for this site yet.")); return; }
    docRef(username).get().then(function (snap) {
      var d = snap.exists ? (snap.data() || {}) : null;
      cb && cb(null, d ? d.data || {} : null, d ? Number(d.clientTs) || 0 : 0);
    }).catch(function (err) { cb && cb(err); });
  }

  /* Pull the given username's cloud copy and overwrite this device's local
   * progress with it. Returns whether anything actually changed, so callers
   * can skip a jarring reload when the two were already identical. */
  function pullAndApply(username, cb) {
    lookup(username, function (err, remote, remoteTs) {
      if (err) { cb && cb(err, false); return; }
      if (!remote) { cb && cb(null, false); return; }
      var before = JSON.stringify(collectLocalData());
      applyRemoteData(remote);
      setVer(remoteTs || Date.now());
      var after = JSON.stringify(collectLocalData());
      cb && cb(null, before !== after);
    });
  }

  /* Usernames used on THIS device, kept under a key without the "jeffent."
   * prefix so it is never uploaded: it is a convenience for switching users
   * on a shared device, not progress. */
  var KNOWN_KEY = "ent.syncKnown";
  function getKnown() {
    try { var r = JSON.parse(localStorage.getItem(KNOWN_KEY) || "[]"); return Array.isArray(r) ? r : []; } catch (e) { return []; }
  }
  function addKnown(name) {
    if (!name) return;
    var list = getKnown().filter(function (n) { return n !== name; });
    list.unshift(name);
    try { localStorage.setItem(KNOWN_KEY, JSON.stringify(list.slice(0, 6))); } catch (e) {}
  }
  function forgetKnown(name) {
    var list = getKnown().filter(function (n) { return n !== name; });
    try { localStorage.setItem(KNOWN_KEY, JSON.stringify(list)); } catch (e) {}
  }

  /* Remove this device's progress so the next person starts fresh. Keeps
   * the linked username itself plus pure UI preferences. */
  var KEEP_ON_CLEAR = ["jeffent.theme", "jeffent.tourSeen"];
  function clearLocalProgress() {
    try {
      var toRemove = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf("jeffent.") === 0 && k !== USERNAME_KEY && KEEP_ON_CLEAR.indexOf(k) === -1) toRemove.push(k);
      }
      toRemove.forEach(function (k) { localStorage.removeItem(k); });
      localStorage.removeItem(VER_KEY);
    } catch (e) {}
  }

  /* Save this device's progress under the current username, then clear it
   * and unlink. If the save fails nothing is cleared, so work is never lost. */
  function signOut(cb) {
    pushNow(function (err) {
      if (err) { cb && cb(err); return; }
      clearLocalProgress();
      clearUsername();
      cb && cb(null);
    });
  }

  /* Save the current user's progress, then load another username's: an
   * existing one is pulled down, a new one starts empty. */
  function switchTo(name, cb) {
    var current = getUsername();
    function load() {
      clearLocalProgress();
      setUsername(name);
      addKnown(name);
      lookup(name, function (err, remote, remoteTs) {
        if (err) { cb && cb(err); return; }
        if (remote) { applyRemoteData(remote); setVer(remoteTs || Date.now()); cb && cb(null); return; }
        pushNow(function (err2) { cb && cb(err2 || null); });
      });
    }
    if (current) pushNow(function (err) { if (err) { cb && cb(err); return; } load(); });
    else load();
  }

  /* On app open: take the cloud copy only if another device pushed a newer
   * version than this device has. Comparing contents instead would see this
   * device's own unsynced edits as "different" every time and reload the
   * page over and over. */
  function pullIfNewer(username, cb) {
    lookup(username, function (err, remote, remoteTs) {
      if (err) { cb && cb(err, false); return; }
      if (!remote || !remoteTs || remoteTs <= getVer()) { cb && cb(null, false); return; }
      applyRemoteData(remote);
      setVer(remoteTs);
      cb && cb(null, true);
    });
  }

  var autoTimer = null;
  function startAutoSync() {
    if (autoTimer) return;
    autoTimer = setInterval(function () { if (getUsername()) pushNow(); }, AUTO_PUSH_MS);
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden" && getUsername()) pushNow();
    });
    window.addEventListener("pagehide", function () { if (getUsername()) pushNow(); });
  }

  window.JEFFENT_SYNC = {
    isConfigured: isConfigured,
    isReady: function () { return ready; },
    getUsername: getUsername,
    setUsername: setUsername,
    clearUsername: clearUsername,
    normalizeUsername: normalizeUsername,
    lookup: lookup,
    pullAndApply: pullAndApply,
    pullIfNewer: pullIfNewer,
    pushNow: pushNow,
    getKnown: getKnown,
    addKnown: addKnown,
    forgetKnown: forgetKnown,
    signOut: signOut,
    switchTo: switchTo,
    startAutoSync: startAutoSync
  };

  init();
})();

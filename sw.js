/* sw.js — minimal service worker so the app installs as a PWA and keeps
 * working offline after a student's first visit.
 *
 * Strategy: network-first, falling back to cache, for same-origin GET
 * requests only (this app's own HTML/CSS/JS/content files). Cross-origin
 * requests (Google Fonts, the Firebase CDN) are left alone -- caching
 * opaque cross-origin responses adds complexity for little benefit here.
 * Network-first (not cache-first) means a student online always gets the
 * latest content the moment it ships; the cache only kicks in once they're
 * offline. Nothing is precached by version: every file gets cached the
 * first time it's actually fetched, so this file never needs updating
 * just because index.html's cache-busting ?v= query strings changed.
 */
var CACHE_NAME = "jeffent-cache-v1";

self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE_NAME; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req).then(function (res) {
      if (res && res.ok) {
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function (cache) { cache.put(req, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (cached) {
        return cached || caches.match("./index.html");
      });
    })
  );
});

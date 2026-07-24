/* Arcanum service worker — offline app shell + runtime portrait cache. */
const VERSION = 'arcanum-v1';
const SHELL = `${VERSION}-shell`;
const IMAGES = `${VERSION}-img`;

// Core files needed to boot the app offline.
const SHELL_ASSETS = [
  './',
  './index.html',
  './style.css',
  './code.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL).then((cache) => cache.addAll(SHELL_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Let cross-origin requests (Google Fonts, etc.) go straight to the network.
  if (url.origin !== self.location.origin) return;

  // Portrait art: cache-first, then fill the cache on demand.
  if (url.pathname.includes('/img/')) {
    event.respondWith(
      caches.open(IMAGES).then(async (cache) => {
        const hit = await cache.match(req);
        if (hit) return hit;
        try {
          const res = await fetch(req);
          if (res.ok) cache.put(req, res.clone());
          return res;
        } catch (e) {
          return hit || Response.error();
        }
      })
    );
    return;
  }

  // App shell + everything else same-origin: cache-first with network fallback,
  // and refresh the cached copy in the background.
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(SHELL).then((cache) => cache.put(req, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});

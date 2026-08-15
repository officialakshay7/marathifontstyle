/* sw.js — minimal, safe service worker.
   The previous version imported a third-party push-notification ad
   script (3nbf4.com). That has been removed: it carried real risk of
   a Safe Browsing / ad-quality flag against the whole domain, and was
   not a standard PWA caching worker. This file is now an inert
   placeholder — replace with real caching logic if/when you build a
   genuine offline/PWA strategy, but do not reintroduce third-party
   push-ad scripts here without clear, explicit user opt-in UI. */

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

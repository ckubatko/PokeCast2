// Minimal service worker — its main job is just to exist and handle fetch,
// which is part of what Chrome checks before offering "Install app" on Android.
// It intentionally does no caching, so the app always loads fresh over the network.

self.addEventListener('install', function(event){
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event){
  event.respondWith(fetch(event.request));
});

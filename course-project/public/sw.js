
self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open('static')
    .then(function(cache) {
      console.log('Service Worker] Precaching app shell');
      //add new resource
      cache.add('/src/js/app.js')
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
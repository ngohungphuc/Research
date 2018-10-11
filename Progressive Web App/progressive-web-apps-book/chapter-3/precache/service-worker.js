var cacheName = 'helloWorld'; //Name of the cache

self.addEventListener('install', event => { //Tap into the Service Worker install event
  event.waitUntil(
    caches.open(cacheName) // Open a cache using the cache name we specified
    .then(cache => cache.addAll([ //Add the JavaScript and image into the cache
      './js/script.js',
      './images/hello.png'
    ]))
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request) // Check whether incoming request URL matches anything that exists in the current cache
    .then(function (response) {
      if (response) {
        return response; // If there’s a response and it isn’t undefined/null, then return it
      }
      return fetch(event.request); //  Else continue as normal and fetch the resource as intended
    })
  );
});
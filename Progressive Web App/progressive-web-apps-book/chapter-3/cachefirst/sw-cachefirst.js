var cacheName = 'helloWorld';
//Add an event listener for the fetch event to intercept requests.
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request) // Does the current request match anything you might have in cache?
    .then(function (response) {
      if (response) { // If it does, return it at this point and continue no further.
        return response;
      }

      var fetchRequest = event.request.clone(); // Clone the request— a request is a stream and can only be consumed once.

      //try to make original HTTP request as intended
      return fetch(fetchRequest).then(
        function (fetchResponse) {
          if (!fetchResponse || fetchResponse.status !== 200) {
            return fetchResponse;
          }

          // again clone the res because you need to add it into cache and because it's used for final response
          var responseToCache = fetchResponse.clone();

          //open and add response into cache
          caches.open(cacheName)
            .then(function (cache) {
              cache.put(event.request, responseToCache);
            });

          return fetchResponse;
        }
      );
    })
  );
});
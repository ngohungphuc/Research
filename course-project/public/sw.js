/**
 * install event when browser install sw
 */
self.addEventListener("install", function(event) {
  console.log("Installing Service worker", event);
});

/**
 * active event when browser install sw and use sw
 */
self.addEventListener("active", function(event) {
  console.log("Activating Service worker", event);
  return self.clients.claim();
});

const cacheData = "pwa";

const cacheArray = [
  "/static/js/bundle.js",
  "/static/js/main-chunk.js",
  "/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg",
  "/manifest.json",
  "/index.html",
  "/logo192.png",
  "/user",
  "/",
];

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll(cacheArray);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          return result;
        }
        let requestUrl = event.request.clone();
        return fetch(requestUrl);
      })
    );
  }
});

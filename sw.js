const CACHE = "v1";
const OFFLINE_URL = "CHALDEAN.HTML";

self.addEventListener("install", evt =>
  evt.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll([OFFLINE_URL]))
      .then(() => self.skipWaiting())
  )
);

self.addEventListener("fetch", evt => {
  evt.respondWith(
    fetch(evt.request).catch(() =>
      caches.match(OFFLINE_URL)
    )
  );
});

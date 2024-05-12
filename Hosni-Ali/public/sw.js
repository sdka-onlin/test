
self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
});
self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});
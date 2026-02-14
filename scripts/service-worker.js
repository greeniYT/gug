self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Basic fetch handler (required for install prompt)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});

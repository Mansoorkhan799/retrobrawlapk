// Minimal service worker - satisfies /sw.js requests and prevents 404
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

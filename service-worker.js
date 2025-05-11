const CACHE_NAME = "tennis-app-v1";
const urlsToCache = [
  "index.html",
  "member-select.html",
  "style.css",
  "tennis-court.jpg",
  "manifest.json",
  "icon-192.png",
  "icon-512.png"
];

// インストール時にキャッシュ
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// リクエスト時にキャッシュ優先
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

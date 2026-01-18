const CACHE = 'ref-cache-v1';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c =>
      c.addAll(['./', './index.html', './data.json'])
         './icons/icon-192.png', // <--- Добавь это
        './icons/icon-512.png'  // <--- И это
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

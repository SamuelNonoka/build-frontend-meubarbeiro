const version = '1.8.0'
const cacheName = `shell-content-${version}`
const filesToCache = [
  '/public/index.html',
  '/public/icone-192x192.png',
  '/public/favicon.png',
  '/js/app.js',
  '/site.webmanifest',
  '/meus-agendamentos',
  '/offline',
  '/termo-de-uso',
  '/politica-de-privacidade'
]

self.addEventListener('install', function (e) {
  self.skipWaiting(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache)
    })
  )

  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      const names = cacheNames.filter(name => name != cacheName)
      for (let name of names)
        caches.delete(name);
    }))
})

self.addEventListener('install', function (e) { })

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open(cacheName)
      .then(function (cache) {
        return fetch(event.request)
          .then(function (response) {
            if (event.request.method === 'GET') {
              cache.put(event.request, response.clone())
            }
            return response
          }).catch(function () {
            return caches.match(event.request).catch(function () {
              return caches.match('/offline')
            })
          })
      })
  )
})
const version = '1.0.0'
const cacheName = `shell-content-${version}`
const filesToCache = [
  '/public/index.html',
  '/public/icone-96x96.png',
  '/public/favicon.png',
  '/js/app.js',
  '/site.webmanifest',
  'meus-agendamentos',
  'offline'
]

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cacheName)
      .then(function(cache) {
        return fetch(event.request)
          .then(function(response) {
            cache.put(event.request, response.clone())
            return response
          }).catch(function() {
            return caches.match(event.request).catch(function(){
              return caches.match('/offline') 
            })
          })
    })
  )
})
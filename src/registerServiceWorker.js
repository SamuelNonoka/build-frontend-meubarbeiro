/* eslint-disable no-console */

import { register } from 'register-service-worker'

const version = '1.0.0'

if (process.env.NODE_ENV !== 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      const cacheName = `shell-content-${version}`
      const filesToCache = [
        '/public/index.html',
        '/public/site.webmanifest',
        '/public/favicon.png',
        '/public/icone-180x180.png',
        '/public/icone-192x192.png',
        '/public/icone-385x385.png',
        '/public/icone-513x513.png'
      ]
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(filesToCache)
      })
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
  
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound (e) {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}

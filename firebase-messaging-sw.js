importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAtUkobfl5TyJdLk27CUTqyOl7v5gbzZeQ",
    authDomain: "arched-sunbeam-302621.firebaseapp.com",
    databaseURL: "https://69364991955.firebaseio.com",
    projectId: "arched-sunbeam-302621",
    storageBucket: "arched-sunbeam-302621.appspot.com",
    messagingSenderId: "69364991955",
    appId: "1:69364991955:web:144549be9ff79db1aa1126",
    //measurementId: "XXX"
  });
} else {
  firebase.app();
}

const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {
  console.log(payload)
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: payload.data.icon,
    badge: payload.data.badge,
    data: { link: payload.data.link },
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', function (event) {
  const notification = event.notification
  if (notification.data && notification.data.link) {
    event.notification.close();
    // Get all the Window clients
    event.waitUntil(clients.matchAll({ type: 'window' }).then(clientsArr => {
      // If a Window tab matching the targeted URL already exists, focus that;
      const hadWindowToFocus = clientsArr.some(windowClient => windowClient.url === event.notification.data.url ? (windowClient.focus(), true) : false);
      // Otherwise, open a new tab to the applicable URL and focus it.
      if (!hadWindowToFocus) clients.openWindow(notification.data.link).then(windowClient => windowClient ? windowClient.focus() : null);
    }));
  }
})
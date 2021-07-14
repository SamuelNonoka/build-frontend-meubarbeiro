/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/
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

/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  window.console.log('backgrounbd message')
  window.console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload,
  );
  /* Customize notification here */
  /*const notificationTitle = "Background Message Title";
  const notificationOptions = {
      body: "Background Message body.",
      icon: "/itwonders-web-logo.png",
  };
 
  return self.registration.showNotification(
      notificationTitle,
      notificationOptions,
  );*/
});



/*messaging.onMessage(function(payload) {
  const noteTitle = payload.notification.title;
  const noteOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon,
  };
  new Notification(noteTitle, noteOptions);
});*/
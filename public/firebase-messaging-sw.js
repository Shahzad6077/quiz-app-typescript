importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js");

firebase.default.initializeApp({
  messagingSenderId: "907903711236",
  projectId: "mystore339",
  apiKey: "AIzaSyB7tvjDbZbVUidcUNOOhyIoMO0hHXJmP6o",
  appId: "1:907903711236:web:65670c5f772f10ea20dd51",
});

const initMessaging = firebase.default.messaging();

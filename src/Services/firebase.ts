import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_FB_MESSEGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// const setupInLocalStorage=()=>{
//   const chk=window.localStorage.getItem("pwa-token")
// }
const resigerTheToken = () => {
  // Get registration token. Initially this makes a network call, once retrieved
  // subsequent calls to getToken will return from cache.
  messaging
    .getToken({
      vapidKey:
        "BKBSaueHnPa5xTNyRU3-2A9KQnm1DNOTmWrBT5tsoy9YNdvaxR0-LKNIlyt0kruNd-pnp7-qVhHUKdapsAdvXRg",
    })
    .then((currentToken) => {
      if (currentToken) {
        console.log("currentToken", currentToken);
        alert(currentToken);
      } else {
        // Show permission request.
        console.log(
          "No registration token available. Request permission to generate one."
        );
        // Show permission UI.
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const initPushNotifications = () => {
  console.log("Requesting permission...");
  // [START request_permission]
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      // TODO(developer): Retrieve a registration token for use with FCM.
      // [START_EXCLUDE]
      // In many cases once an app has been granted notification permission,
      // it should update its UI reflecting this.
      resigerTheToken();
      // [END_EXCLUDE]
    } else {
      console.log("Unable to get permission to notify.");
    }
  });
  // [END request_permission]
};

// messaging.onMessage((payload) => {
//   console.log("Message received. ", payload);
// });

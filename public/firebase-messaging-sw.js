importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(`${process.env.PUBLIC_URL}/firebase-messaging-sw.js`)
    .then((registration) => {
      console.log("Registration successfull..", registration.scope);
    })
    .catch((e) => console.log(e));
}

firebase.initializeApp({
  messagingSenderId: "580418512520",
});

const initMessaging = firebase.messaging();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
// import { vapid } from "../swDev";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcPBS3iYkX5mwIUpeeBL3FyK2UU33fDDo",
  authDomain: "pwa-app-94291.firebaseapp.com",
  projectId: "pwa-app-94291",
  storageBucket: "pwa-app-94291.appspot.com",
  messagingSenderId: "580418512520",
  appId: "1:580418512520:web:c5f7b1faf38daf39e8a13d",
};

// const token = messaging.getToken({
//   vapidKey:
//     "BGtkbcjrO12YMoDuq2sCQeHlu47uPx3SHTgFKZFYiBW8Qr0D9vgyZSZPdw6_4ZFEI9Snk1VEAj2qTYI1I1YxBXE",
// });

const app = initializeApp(firebaseConfig);
export default app;

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);

      // Add the public key generated from the console here.
      getToken(messaging, {
        vapidKey:
          "BFsj_BhdbjVUwTmm_A9Tr26eQ4LTbi0EgApsu-hyeJecXls3m7XHaqWozJdnNiJZArv3qjzWyrXVb5o4cGMaXUY",
      })
        .then((currToken) => {
          if (currToken) {
            console.log("CurrToken :- ", currToken);
          } else {
            console.log("Can't get that token....");
          }
        })
        .catch((e) => console.warn(e));
    } else {
      console.log("Don't have permission.");
    }
  });
}

// requestPermission();

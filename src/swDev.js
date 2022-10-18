export default function swDev() {
  if ("serviceWorker" in navigator) {
    let swURL = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(swURL).then((res) => {
      return res.pushManager.getSubscription().then((subscription) => {
        return res.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey:
            "BAUYnrIKYp8R1X8CT7SiM2Iit0ijIvUwTaNBEIKzDEY6Nh2e--t9GVv2zg56x47ETJW1hCb3_aE6Z1qjf2rlBAg",
        });
      });
    });
  }
}

// export function vapid() {
//   const determineAppServerKey = () => {
//     let vapidKey =
//       "BAUYnrIKYp8R1X8CT7SiM2Iit0ijIvUwTaNBEIKzDEY6Nh2e--t9GVv2zg56x47ETJW1hCb3_aE6Z1qjf2rlBAg";
//     return urlBase64ToUnit8Array(vapidKey);
//   };

//   function urlBase64ToUnit8Array(base64String) {
//     var padding = "=".repeat((4 - (base64String.length % 4)) % 4);
//     var base64 = (base64String + padding)
//       .replace(/\-/g, "+")
//       .replace(/_/g, "/");

//     var rawData = window.atob(base64);
//     var outputArray = new Uint8Array(rawData.length);

//     for (var i = 0; i < rawData.length; ++i) {
//       outputArray[i] = rawData.charCodeAt(i);
//     }
//     return outputArray;
//   }

//   return determineAppServerKey();
// }

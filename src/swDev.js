export default function swDev() {
  if ("serviceWorker" in navigator) {
    let swURL = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(swURL).then((res) => {
      return res.pushManager.getSubscription().then((subscription) => {
        return res.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey:
            "BGtkbcjrO12YMoDuq2sCQeHlu47uPx3SHTgFKZFYiBW8Qr0D9vgyZSZPdw6_4ZFEI9Snk1VEAj2qTYI1I1YxBXE",
        });
      });
    });
  }
}

// export function vapid() {
//   const determineAppServerKey = () => {
//     let vapidKey =
//       "BGtkbcjrO12YMoDuq2sCQeHlu47uPx3SHTgFKZFYiBW8Qr0D9vgyZSZPdw6_4ZFEI9Snk1VEAj2qTYI1I1YxBXE";
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

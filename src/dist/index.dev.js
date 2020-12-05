"use strict";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(function (registration) {
    console.log("SW Registration done.");
    console.log(registration);
  })["catch"](function (error) {
    console.log("SW Registration failed.");
    console.log(error);
  });
}
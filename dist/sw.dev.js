"use strict";

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open("static").then(function (cache) {
    return cache.addAll(["./", "./src/master.css", "./images/logo192.png"]);
  }));
});


self.addEventListener("fetch", function (e) {
  /*console.log(`Intercepting fetch request for: ${e.request.url}`);*/
  e.respondWith(caches.match(e.request).then(function (response) {
    return response || fetch(e.request);
  }));
});

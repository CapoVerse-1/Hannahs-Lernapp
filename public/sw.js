self.addEventListener("install", (e) => {
  self.skipWaiting()
  e.waitUntil(
    caches.open("lesson-cache-v2").then((cache) => cache.addAll(["/", "/manifest.webmanifest"]))
  )
})
self.addEventListener("activate", (e) => {
  e.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.filter((k) => k !== "lesson-cache-v2").map((k) => caches.delete(k)))
      await self.clients.claim()
    })()
  )
})
self.addEventListener("fetch", (event) => {
  const { request } = event
  if (request.method !== "GET") return
  // Bypass cache for HTML/documents and dynamic app routes to avoid stale pages
  if (request.destination === "document") {
    event.respondWith(fetch(request))
    return
  }
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached
      return fetch(request).then((response) => {
        const copy = response.clone()
        caches.open("lesson-cache-v2").then((cache) => cache.put(request, copy))
        return response
      })
    })
  )
})



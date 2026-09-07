/* Service worker: học offline được, nhưng luôn ưu tiên bản mới nhất khi có mạng */
const VERSION = "v3";
const CACHE = "hanyu90-" + VERSION;
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./css/style.css",
  "./js/store.js",
  "./js/tts.js",
  "./js/app.js",
  "./js/data/pinyin.js",
  "./js/data/lessons-01.js",
  "./js/data/lessons-02.js",
  "./js/data/lessons-03.js",
  "./js/data/lessons-04.js",
  "./js/data/lessons-05.js",
  "./js/data/lessons-06.js",
  "./js/data/lessons-07.js",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(ASSETS.map(a => c.add(a))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", e => {
  if (e.data === "skipWaiting") self.skipWaiting();
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  // Âm thanh phát qua mạng: để trình duyệt tự xử lý (có Range request, không cache được)
  if (url.origin !== location.origin) return;

  // Network-first: luôn lấy bản mới khi có mạng, mất mạng thì dùng bản đã lưu.
  // (Cache-first khiến người dùng kẹt ở bản cũ sau mỗi lần cập nhật.)
  e.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.status === 200 && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req).then(hit => hit || caches.match("./index.html")))
  );
});

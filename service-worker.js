/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e0467b2011d691e73b08884b96e607af"
  },
  {
    "url": "assets/css/1.styles.2a16864d.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.21109591.css",
    "revision": "8aecafa989e3519e4278c2cd63a097e7"
  },
  {
    "url": "assets/css/styles.f2e84be1.css",
    "revision": "8dd2746b49031037146743c5870b201e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.2a16864d.js",
    "revision": "53342a51ba3c650c8da89fa6a5781f1d"
  },
  {
    "url": "assets/js/2.21109591.js",
    "revision": "fd543942e6214667f8210b7d0d92bb28"
  },
  {
    "url": "assets/js/3.7efb282e.js",
    "revision": "5447e331df0a9a43a47715dac29c7292"
  },
  {
    "url": "assets/js/4.5abb4e26.js",
    "revision": "3b4cbabd32ef2e4f67dbe2c128cf6d20"
  },
  {
    "url": "assets/js/5.702a82a9.js",
    "revision": "7592ca8a3b730b7f01521ca47090ee8f"
  },
  {
    "url": "assets/js/6.4e3f01be.js",
    "revision": "c52ad3f1c77f280329db1cee41f6f695"
  },
  {
    "url": "assets/js/7.60e66d51.js",
    "revision": "2327a517070c7750a1b80fb4906dbfdc"
  },
  {
    "url": "assets/js/8.e076225e.js",
    "revision": "cfd49e5484c6803c1faf3a9f5b79ef2e"
  },
  {
    "url": "assets/js/9.30981571.js",
    "revision": "3698f2292874bf7ff0f573230d3b5080"
  },
  {
    "url": "assets/js/app.f2e84be1.js",
    "revision": "adc39143244bdd677745612a657fa781"
  },
  {
    "url": "copyright/index.html",
    "revision": "b3dea1d86999708a93918afcbdfa7d3a"
  },
  {
    "url": "hero.png",
    "revision": "29bd814ac246a997513f6393e9fc0324"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "1e2a5b5d5343b568997460812e323182"
  },
  {
    "url": "logo.png",
    "revision": "29bd814ac246a997513f6393e9fc0324"
  },
  {
    "url": "specification/index.html",
    "revision": "dbbdae883ed4a68dd55a7f99d76a5306"
  },
  {
    "url": "specification/menu.html",
    "revision": "522722c5c7fe21620904934e60d0f9a6"
  },
  {
    "url": "specification/others.html",
    "revision": "364256309beee558a06bd2fc2ae41c60"
  },
  {
    "url": "specification/reservation.html",
    "revision": "805e010ea08919d16a12680cec809b23"
  },
  {
    "url": "specification/settings.html",
    "revision": "49b3fe97299b21d2ca096ee1cc0efb30"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

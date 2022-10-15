if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[c]) return;
    let r = {};
    const t = (e) => a(e, c),
      o = { module: { uri: c }, exports: r, require: t };
    s[c] = Promise.all(n.map((e) => o[e] || t(e))).then((e) => (i(...e), r));
  };
}
define(['./workbox-946f13af'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/1vYnoMYTvuGUoSg2W51K8/_buildManifest.js',
          revision: '179eed58c3e5aaf0e087c60a53c363f4',
        },
        {
          url: '/_next/static/1vYnoMYTvuGUoSg2W51K8/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/0c428ae2-5aa132cc31e8444b.js',
          revision: '5aa132cc31e8444b',
        },
        {
          url: '/_next/static/chunks/100-eb70941fa7b4b446.js',
          revision: 'eb70941fa7b4b446',
        },
        {
          url: '/_next/static/chunks/252f366e-82c842b5d0d4ea4b.js',
          revision: '82c842b5d0d4ea4b',
        },
        {
          url: '/_next/static/chunks/271-18879fbaf7f826ce.js',
          revision: '18879fbaf7f826ce',
        },
        {
          url: '/_next/static/chunks/506-1e7bd015050cc76b.js',
          revision: '1e7bd015050cc76b',
        },
        {
          url: '/_next/static/chunks/608-7a3f9bdd307eb581.js',
          revision: '7a3f9bdd307eb581',
        },
        {
          url: '/_next/static/chunks/660.482065a78f58c9c2.js',
          revision: '482065a78f58c9c2',
        },
        {
          url: '/_next/static/chunks/669-c8dfbeb1429b3c05.js',
          revision: 'c8dfbeb1429b3c05',
        },
        {
          url: '/_next/static/chunks/77-2be6b30db75b9f74.js',
          revision: '2be6b30db75b9f74',
        },
        {
          url: '/_next/static/chunks/78e521c3-19390034046d4528.js',
          revision: '19390034046d4528',
        },
        {
          url: '/_next/static/chunks/7f0c75c1-c46b084edcd6d205.js',
          revision: 'c46b084edcd6d205',
        },
        {
          url: '/_next/static/chunks/95b64a6e-36a16ced23fc6065.js',
          revision: '36a16ced23fc6065',
        },
        {
          url: '/_next/static/chunks/framework-4556c45dd113b893.js',
          revision: '4556c45dd113b893',
        },
        {
          url: '/_next/static/chunks/main-6a2fa382290ec352.js',
          revision: '6a2fa382290ec352',
        },
        {
          url: '/_next/static/chunks/pages/404-1b6a42148ba627d6.js',
          revision: '1b6a42148ba627d6',
        },
        {
          url: '/_next/static/chunks/pages/_app-1c558e5b595cb547.js',
          revision: '1c558e5b595cb547',
        },
        {
          url: '/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js',
          revision: 'a4ba2246ff8fb532',
        },
        {
          url: '/_next/static/chunks/pages/about-d484254ab64c59c6.js',
          revision: 'd484254ab64c59c6',
        },
        {
          url: '/_next/static/chunks/pages/components-55a414e874cee139.js',
          revision: '55a414e874cee139',
        },
        {
          url: '/_next/static/chunks/pages/index-8447e0249fda8877.js',
          revision: '8447e0249fda8877',
        },
        {
          url: '/_next/static/chunks/pages/posts-3d953e249ab20939.js',
          revision: '3d953e249ab20939',
        },
        {
          url: '/_next/static/chunks/pages/posts/%5Bslug%5D-a9b117fe83f3cba0.js',
          revision: 'a9b117fe83f3cba0',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/_next/static/chunks/webpack-5980003a5545f263.js',
          revision: '5980003a5545f263',
        },
        {
          url: '/_next/static/css/6f23cfe612f34a07.css',
          revision: '6f23cfe612f34a07',
        },
        {
          url: '/dave-nl_senior-front-end-developer.jpg',
          revision: '65c1086d31cb84bd9f59fbf26200ecc0',
        },
        { url: '/favicon.ico', revision: 'fb8ae185a4190448e5b8dbb7e60d0e6d' },
        {
          url: '/favicon/android-chrome-192x192.png',
          revision: '22942b7aa506208cbd06c609c6bc6239',
        },
        {
          url: '/favicon/android-chrome-512x512.png',
          revision: 'edbdd56a9839ddb33eaf385374967382',
        },
        {
          url: '/favicon/apple-touch-icon.png',
          revision: '9d5db3ab240cb01846edde677e099566',
        },
        {
          url: '/favicon/browserconfig.xml',
          revision: 'bd1cb383ee4fabe95d80990826b40586',
        },
        {
          url: '/favicon/favicon-16x16.png',
          revision: 'dbb0f32807d11c509fa66414e71065f8',
        },
        {
          url: '/favicon/favicon-32x32.png',
          revision: '8247d06eddf594d41613353dcc5c2b5b',
        },
        {
          url: '/favicon/favicon.ico',
          revision: 'e9c6f00df3464404e6098df903f9324f',
        },
        {
          url: '/favicon/mstile-150x150.png',
          revision: 'db78f1943d69e50eb0761aaa6aebc13e',
        },
        {
          url: '/favicon/safari-pinned-tab.svg',
          revision: 'b0c1af14454b5321e8db06c9273c6a36',
        },
        {
          url: '/favicon/site.webmanifest',
          revision: '62dc282fcce8e9d9e148811b539f5e4f',
        },
        { url: '/files/cv.pdf', revision: '8c567c252a6e98aefeca4abea2910abd' },
        {
          url: '/fonts/inter-var-latin.woff2',
          revision: '812b3dd29751112389e93387c4f7dd0a',
        },
        {
          url: '/images/background_blue-orange_light.jpg',
          revision: '287f8055504ab7fe19accb0a16e89edf',
        },
        {
          url: '/images/background_blue-orange_light_flipped.jpg',
          revision: '3cd50d17fcd67e348cc87b76513ddbdb',
        },
        {
          url: '/images/background_blue-orange_light_flipped.webp',
          revision: '9d137121b7bd6c216cebd57b60addc10',
        },
        {
          url: '/images/capgemini.svg',
          revision: '21c7a390ce8b42542197b58ed84e7e67',
        },
        {
          url: '/images/dave-nl_about-composition.jpg',
          revision: 'f669c4a34fc423ea888ffea1b7eaa520',
        },
        {
          url: '/images/davevanhoorn-2022.png',
          revision: 'd09ef3b3acfe1477b60781c0c84db8fb',
        },
        {
          url: '/images/davevanhoorn-2022.webp',
          revision: 'bea273de165df8cb408b482bd9486d33',
        },
        {
          url: '/images/davevanhoorn-2022_xs.png',
          revision: 'b84388f8655be8c67819b40d69b143f5',
        },
        {
          url: '/images/davevanhoorn-2022_xs.webp',
          revision: 'a79645188df7d62afffb92e7a44419aa',
        },
        {
          url: '/images/davevanhoorn-profile.jpg',
          revision: 'dc5a50474cdb38d159d96dc48a5bf70f',
        },
        {
          url: '/images/davevanhoorn-profile.webp',
          revision: 'e84284ce8dd6fffae8e352e5108eb90a',
        },
        {
          url: '/images/dept.svg',
          revision: '0d6fa69f760b9646294194e088c79c28',
        },
        {
          url: '/images/euroclear.svg',
          revision: 'b3315f2c01b6138b6fed2a97850a94e1',
        },
        {
          url: '/images/formule1-nl.svg',
          revision: '368378cdd3b48213ebc8da1660e72667',
        },
        {
          url: '/images/icon-pdf.jpg',
          revision: '2082008b9d79c1805c9cc83a7d646395',
        },
        {
          url: '/images/icon-word.jpg',
          revision: '2949b5a83e71226a395c4ae4a3d084ba',
        },
        {
          url: '/images/schiphol.svg',
          revision: 'c78b94be0b5224823469280ca2a37072',
        },
        {
          url: '/opengraph/dave-nl_senior-front-end-developer.jpg',
          revision: '65c1086d31cb84bd9f59fbf26200ecc0',
        },
        {
          url: '/svg/Vercel.svg',
          revision: 'c7d8efd08fe7e7a36a602b096e779a38',
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});

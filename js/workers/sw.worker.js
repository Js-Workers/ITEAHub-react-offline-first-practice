const CACHE_VERSION = 'v1';
const RESOURCES = [
  '/',
  'localhost',
  'bundle.js'
];

self.addEventListener('install', event => {
  console.error('install', event);

  caches.open(CACHE_VERSION).then(cache => cache.addAll(RESOURCES));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.error('onActivate', event);
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const {request} = event;
  const {method, url} = request;
  const {pathname} = new URL(url);

  console.error('event', event);
  console.error('new URL(url)', new URL(url));
  console.error('pathname', pathname);
  console.error("pathname.split('/').shift()", pathname.split('/').shift());

  if (pathname.split('/').includes('items')) {
    switch (method) {
      case 'POST':
        console.error('POST request');
        break;
      case 'GET':
        console.error('GET request');
        break;
      case 'DELETE':
        console.error('DELETE request');
        const mockResponse = new Response(JSON.stringify({id: pathname.split('/').pop()}), {
          status: 200,
          statusText: 'OK',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        return event.respondWith(new Promise(resolve => {
          setTimeout(() => { resolve(mockResponse) }, 1000)
        }));
      case 'PUT':
        console.error('PUT request');
        break;
    }
  }
});

self.addEventListener('message', event => {
  console.error('oMessage', event);
});

const CACHE_VERSION = 'v1';
const RESOURCES = [
  '/',
  'localhost',
  'bundle.js'
];

self.addEventListener('install', event => {
  console.error('install', event);

  caches.open(CACHE_VERSION).then(cache => cache.addAll(RESOURCES));
  return self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.error('onActivate', event);
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  const {request} = event;
  const {method, url} = request;
  const {pathname} = new URL(url);

  const getMockedResponse = response => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(new Response(JSON.stringify(response), {
          status: 200,
          statusText: 'OK',
          headers: {
            'Content-Type': 'application/json'
          }
        }));
      }, 2000);
    })
  };

  if (pathname.split('/').includes('items')) {
    switch (method) {
      case 'POST':
        console.error('POST request');
        return event.respondWith(request.json().then(responseData =>
          getMockedResponse(responseData)));
      case 'GET':
        console.error('GET request');
        break;
      case 'DELETE':
        console.error('DELETE request');
        return event.respondWith(getMockedResponse({id: pathname.split('/').pop()}));
      case 'PUT':
        console.error('PUT request');
        break;
    }
  }
});

self.addEventListener('message', event => {
  console.error('oMessage', event);
});

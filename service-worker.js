"use strict";var precacheConfig=[["/index.html","ad29e62dec60ab1b34fcbcacb2610677"],["/static/css/main.f6b35ed2.css","0fc9183cfdf40de0e3deafc7bf6b7517"],["/static/js/main.a667ec49.js","fcbe1e6bbe5b228fc2a4d227cffae4c8"],["/static/media/11-the-close-06.f6bf6b69.jpg","f6bf6b69022711cf23f364e94a03631d"],["/static/media/11-the-close-351.09c60b76.jpg","09c60b76d52b94c6fecc695fa82afcf3"],["/static/media/BG_01.cb76fa18.png","cb76fa188b03c495cf4a08a4c606ac0f"],["/static/media/BG_02.cb7eaa23.png","cb7eaa230a69ef4fadf2c9b482c11fcd"],["/static/media/BG_03.6ac85fb6.png","6ac85fb641e0c7ab7034c0b147986ebc"],["/static/media/BG_04.2047a5e1.png","2047a5e17a27934969cc079e76f06291"],["/static/media/BG_05.7cd5f6bf.png","7cd5f6bf9e0ac74de066bb608d518233"],["/static/media/Lounge_1.b853659b.jpg","b853659b9317c845d34eb0c8f5cd1b33"],["/static/media/Master-Builders-logo.988fb3fc.jpg","988fb3fcc517d8288db7881a463f3f31"],["/static/media/Registered-Bilding-Practitioner.6fa51e40.jpg","6fa51e40a45cdd00ad319f9cfe1a4d1b"],["/static/media/SliderPic_01.316c9018.jpeg","316c90187428f5138695545e505a9fc0"],["/static/media/SliderPic_02.bd36aa8d.png","bd36aa8d9a83c140a20e5dd6936f8946"],["/static/media/SliderPic_03.65ecb224.png","65ecb2249d88f3c75aa99be14f995de1"],["/static/media/St Albans.ab52fdc1.jpg","ab52fdc1ca9e1f208e9c37f5e30e218e"],["/static/media/VBA.1095e054.jpg","1095e054c5743cc2be4ffc90eb92ad96"],["/static/media/Vault_11.51ebe7fe.jpg","51ebe7febe14652e7525fc1e6348d30a"],["/static/media/immigration-assistance.7deb5d42.png","7deb5d42812f9ef3fc2c7ce4e3b7972e"],["/static/media/logo.398de6b7.png","398de6b7759819ecb702c3857ac34541"],["/static/media/partnerships.369ed126.png","369ed1260d09ffb5699fbfa10164ef84"],["/static/media/property-development.b20594dd.png","b20594dd3cf9d4c3a3c8530d003cfbe0"],["/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/static/media/st albans_1.6eb69c43.jpg","6eb69c4398df7aeb86053abd5a493d17"],["/static/media/st-albans_2.74217d50.jpg","74217d50bd8ffb404f27cc1b554c0cb1"],["/static/media/st-albans_3.63198ce0.jpg","63198ce0f000ab48fae4bada40796aaa"],["/static/media/st-albans_4.813ffe13.jpg","813ffe138209496040e1f688abb3b71f"],["/static/media/st-albans_5.9a266d8a.jpg","9a266d8aaa1f8d783f8296b5f928bf97"],["/static/media/st-albans_6.280c8a94.jpg","280c8a944747baa64a9714cd4e86acd0"],["/static/media/yarrington-construction-bendigo-3550-accreditation.151e8185.png","151e8185ff54c2bed71db3266865afcd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});
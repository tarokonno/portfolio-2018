"use strict";var precacheConfig=[["/portfolio-2018/index.html","fd7cca2b96bebc4069e66e222aab2f4e"],["/portfolio-2018/static/js/main.2492c39b.js","3f7a5dbc0844a7f99a47498120e1ff04"],["/portfolio-2018/static/media/avatar.3d98fbef.png","3d98fbeffc7c9707353731897ca08b5d"],["/portfolio-2018/static/media/business-enquiry-page.82cf39d4.png","82cf39d419c0856bd6e60ef178e7bee5"],["/portfolio-2018/static/media/cost-guide.e9798f5e.png","e9798f5e7d501f1481bc1d8837ce0fcf"],["/portfolio-2018/static/media/css3.25fb30cf.png","25fb30cfd0717ee582f1c4a507b86732"],["/portfolio-2018/static/media/customer-choice-awards.ab2bfe3d.png","ab2bfe3d27ecf6458fdc3b17009048b7"],["/portfolio-2018/static/media/exacttarget.ebca3cdf.png","ebca3cdfc5fe4fa865ec144278c8d232"],["/portfolio-2018/static/media/excel.da7d3afa.png","da7d3afa81ca3f0769fb85f58e55b47c"],["/portfolio-2018/static/media/gif-fetcher.346bfb19.png","346bfb19104184e7939bfc2b03a3ee44"],["/portfolio-2018/static/media/js.afb47678.png","afb47678875386aa6e81b65aa0640563"],["/portfolio-2018/static/media/mailchimp.b867931b.png","b867931b32166eb95c5ba7f22a9e9c29"],["/portfolio-2018/static/media/marketo.dfaa2040.png","dfaa20409d9e3b2337354aaeeabf4597"],["/portfolio-2018/static/media/node.994977c4.png","994977c48fde58ac674a2d05ba5a5efb"],["/portfolio-2018/static/media/nyc.c822a5ae.png","c822a5ae201c5c09a56ce04ae570acc2"],["/portfolio-2018/static/media/photoshop.2a64faff.png","2a64faff1cd6b3ce75ca6cb2250db62c"],["/portfolio-2018/static/media/powerpoint.23023c7a.png","23023c7ae5afd107dbdd51277037226e"],["/portfolio-2018/static/media/sass.74c36290.png","74c362907475d0d7f0d59d0fb662135c"],["/portfolio-2018/static/media/scoreboard-react.cb1da1b6.png","cb1da1b6dc08f65f8b9e8a4e2277c1b2"],["/portfolio-2018/static/media/sketch.94ed2aab.png","94ed2aab90612ce035578613dd521b83"],["/portfolio-2018/static/media/taro-coconut.6d9b1d31.jpg","6d9b1d31b49c8e193569bfee2005774d"],["/portfolio-2018/static/media/to-done-list.c998a8e4.png","c998a8e472c06ed016c5a991f239e415"],["/portfolio-2018/static/media/wordpress.87c5a403.png","87c5a40352dd5c96d9f9018b7142682a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/portfolio-2018/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
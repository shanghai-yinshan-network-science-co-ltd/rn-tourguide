if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return t[e]||(r=new Promise(async r=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=r}else importScripts(e),r()})),r.then(()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]})},r=(r,t)=>{Promise.all(r.map(e)).then(e=>t(1===e.length?e[0]:e))},t={require:Promise.resolve(r)};self.define=(r,i,n)=>{t[r]||(t[r]=Promise.resolve().then(()=>{let t={};const o={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return t;case"module":return o;default:return e(r)}})).then(e=>{const r=n(...e);return t.default||(t.default=r),t})}))}}define("./service-worker.js",["./workbox-94a242e4"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/rn-tourguide/./fonts/AntDesign.ttf",revision:"3a2ba31570920eeb9b1d217cabe58315"},{url:"/rn-tourguide/./fonts/Entypo.ttf",revision:"744ce60078c17d86006dd0edabcd59a7"},{url:"/rn-tourguide/./fonts/Feather.ttf",revision:"ca9ce9ff0676a9b04ef0f8a3ad17dd08"},{url:"/rn-tourguide/./fonts/FontAwesome.ttf",revision:"b06871f281fee6b241d60582ae9369b9"},{url:"/rn-tourguide/./fonts/FontAwesome5_Brands.ttf",revision:"c39278f7abfc798a241551194f55e29f"},{url:"/rn-tourguide/./fonts/FontAwesome5_Solid.ttf",revision:"b70cea0339374107969eb53e5b1f603f"},{url:"/rn-tourguide/./fonts/Fontisto.ttf",revision:"b49ae8ab2dbccb02c4d11caaacf09eab"},{url:"/rn-tourguide/./fonts/Foundation.ttf",revision:"e20945d7c929279ef7a6f1db184a4470"},{url:"/rn-tourguide/./fonts/Ionicons.ttf",revision:"b2e0fc821c6886fb3940f85a3320003e"},{url:"/rn-tourguide/./fonts/MaterialCommunityIcons.ttf",revision:"3c851d60ad5ef3f2fe43ebd263490d78"},{url:"/rn-tourguide/./fonts/MaterialIcons.ttf",revision:"a37b0c01c0baf1888ca812cc0508f6e2"},{url:"/rn-tourguide/./fonts/SimpleLineIcons.ttf",revision:"d2285965fe34b05465047401b8595dd0"},{url:"/rn-tourguide/expo-service-worker.js",revision:"48c7ed4e7da9792af288a60d7242d615"},{url:"/rn-tourguide/index.html",revision:"4b339254f2d89c8f5a7c5601f3ec7801"},{url:"/rn-tourguide/manifest.json",revision:"c1c1a292467cbe3dca51f9829ac3513a"},{url:"/rn-tourguide/register-service-worker.js",revision:"754f6dcaf9332ecfadd0e4ff0d26a692"},{url:"/rn-tourguide/serve.json",revision:"d0c694b562b2208635f250762cd7fc79"},{url:"/rn-tourguide/static/js/2.7e7e369f.chunk.js",revision:"b400127f646dfeab8945051b11368143"},{url:"/rn-tourguide/static/js/app.7ac59172.chunk.js",revision:"72fd459bdff4d1052a55cbd382343ccd"},{url:"/rn-tourguide/static/js/runtime~app.93803312.js",revision:"5334b1400ee25d7189e2bd94ec268a8b"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/rn-tourguide/index.html"),{denylist:[/^\/_/,/\/[^/]+\.[^/]+$/]})),e.registerRoute(/^https?.*/,new e.NetworkFirst({cacheName:"offlineCache",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0})]}),"GET")}));
//# sourceMappingURL=service-worker.js.map

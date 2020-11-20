/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","dc93c02c79acd7f9a65eaa059eecc0d5"],["/2017/09/12/css/block/index.html","c395e2b0f7b2d77f4a8e983be053c904"],["/2017/09/12/css/css-properties/index.html","47b9f00a9496d251203ef899f739c53b"],["/2017/09/12/js/closure-js/index.html","019a420eef3d377693dab90dca1e9685"],["/2017/09/12/js/prototype/index.html","923ae0a35407634cec01de3bae7dd514"],["/2017/11/12/cookie/set-cookie/index.html","4274c7aa8cd9fd2aa93d43b5deeb6042"],["/2018/02/15/docsify/docsify/index.html","01d089363484e3aca9100d609f2289da"],["/2018/02/15/html/divCenter/index.html","784237766783ec9c76394eed33910774"],["/2018/02/15/js/RegExp/index.html","5f79be5977c095db275f46cd1f322496"],["/2018/03/21/js/js-set-html-font-size/index.html","353a78a5245a5c493f5c59f44ed8863b"],["/2018/04/15/wx/login-wx/index.html","4f2fa87f44cfe6989f30da8fcaf4f161"],["/2018/04/19/other/norm/index.html","6a002b06b1c485c0e28278b784ca00d9"],["/2018/05/12/js/qureyUrlParams/index.html","5e6aff748d77858af4e211c0b15513cf"],["/2018/07/13/html/layout/index.html","ef77d1b1d9b5a595039aed31ea5ee2c2"],["/2018/08/15/js/amdcmdcom/index.html","298d6a434041c62df1f7012bbfff8adc"],["/2018/08/15/vue/vue-1/index.html","639bf54cb5d512db3b24621e77e9617a"],["/2018/09/12/css/css-line-text/index.html","2070a858504157dab5ca4c329796a54d"],["/2018/09/12/other/classic-article/index.html","834267e757d108d609b2137aba23aa7c"],["/2018/09/16/css/css-attr-practical/index.html","0d6f3f9b829f6ac91951d6b7f8c09265"],["/2019/03/06/css/css-margin-negative/index.html","f7342bb1e265689066caad743e35fc14"],["/2019/03/21/iconfont/iconfont/index.html","fc495ec6ab3f185ae827c3f36520b163"],["/2019/05/18/vue/vue-i18n/index.html","33691e27e04c6a96420494a84c24ffdd"],["/2019/05/24/vue/vue-router-parms/index.html","37c6cf660124d51682f86c1061f8cdbc"],["/2019/06/04/vue/vant-list/index.html","6c1dbb415258a710a1d82dbafada6b53"],["/2020/03/20/hexo/hexo-gitalk/index.html","7efe0483f99c38c1f7502fe5aedce7cd"],["/2020/05/12/vue/vue-proxy/index.html","e974c6b5bbd71d0376e7442d621d1a53"],["/2020/06/30/hexo/hexo-move-mac/index.html","a34b5ee0996eec1afc3d57ccc160bd4e"],["/2020/07/03/vue/vue-network-online/index.html","006985fc01a767afaad0ee9bf67d2d79"],["/2020/07/07/nuxt/nuxt-i18n/index.html","c107c6c22684b7b3833ae6e79579a517"],["/2020/07/09/nuxt/nuxt-proxy/index.html","5539a278ff4b922b113850c0909c9bb3"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","ce545cfe3ee0b13258001ab2c88668c0"],["/2020/07/13/less/less-var/index.html","da008c85aad255c3e4baabc8fd52d3b4"],["/2020/07/23/life/life-big/index.html","1cd5eaa81fd17e2cb04d6a8e60b41087"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","290eaae82568b89be91925f0da9073c5"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","17508e4691440e9e6c69e4d5fc3b5568"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","7af2b86d5d1c06a6642ea77af75627ef"],["/2020/07/27/other/zsb-math-gs/index.html","8c307f2f3260f2306370d99c1e2fe2bb"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","03f55c3b64986d0020d432df3f005b4f"],["/2020/08/06/other/target-2020/index.html","5816c5c78317e63a1ab68e627f378242"],["/about/index.html","e4cc66008e5626bdb846f92dea2ed312"],["/archives/2017/08/index.html","beeaaaa4d4a7775a1d823cc835862d3d"],["/archives/2017/09/index.html","a232abf2045089659370071721669aa9"],["/archives/2017/11/index.html","ec9791f41565bdcb1ecf79eb1cc87853"],["/archives/2017/index.html","2b35b2e018da7375ab6735fc0f781996"],["/archives/2018/02/index.html","1a4c896af7c020ab6a26e8879f373e67"],["/archives/2018/03/index.html","40caad054396bbbc803722281fb2933b"],["/archives/2018/04/index.html","464aaff093c85fd47a66a2816331b4e0"],["/archives/2018/05/index.html","31b7f22159811df4518777e14da1b025"],["/archives/2018/07/index.html","73704aa6f8cd5b4ae166e5a381022f63"],["/archives/2018/08/index.html","a9f5709c5d16d4c43d2571a432a420e5"],["/archives/2018/09/index.html","66b8112322627a13bdebe470b6f71a34"],["/archives/2018/index.html","74f554774932bbcc365c941956bdad72"],["/archives/2018/page/2/index.html","2dedfe19363965931bf5c5926de9efa2"],["/archives/2019/03/index.html","dc45a014a02ce3c3f9dd5171409579d0"],["/archives/2019/05/index.html","c6034ab94779c93c3e3663eceaac96a4"],["/archives/2019/06/index.html","3e35f8bf72eafc61bdc61501965333b8"],["/archives/2019/index.html","c47d1a94d0222521d403b8f903a30aa0"],["/archives/2020/03/index.html","84316e192a47686ccc642051fc8765f1"],["/archives/2020/05/index.html","f187ca110b93bd821fff956387e2c605"],["/archives/2020/06/index.html","ab3b7b4440a5c5241f78b51ef52fc471"],["/archives/2020/07/index.html","0510d2c4befb43265b423683f9728500"],["/archives/2020/07/page/2/index.html","b1590b1102dc8d248150649a9965a467"],["/archives/2020/08/index.html","ab1e0fd456cfc4bafd2e938894b173cb"],["/archives/2020/index.html","3d391759d26a39427cd406a0d0fa1290"],["/archives/2020/page/2/index.html","1255ff327601e0aac01fff0a01adecec"],["/archives/index.html","5968c932660f4bc060867291a30b94f5"],["/archives/page/2/index.html","d1da783443a4dc156159f793768ddf33"],["/archives/page/3/index.html","de30d858f936d193993b24c4f9c7d39c"],["/archives/page/4/index.html","e4ccba7591ebeb23a7378fac64ad9b14"],["/categories/common/index.html","2c170c8b195b72e2fee96aabe655d369"],["/categories/cookie/index.html","4e203ec84d855df79e12d11c7331ec7e"],["/categories/cookie/设置cookie/index.html","cf5a4063f199abd25e3bcdd3e1362373"],["/categories/css/index.html","d9b3b407ea84521dfecb020a32b9b42b"],["/categories/css/三大特性/index.html","59e614ff689c25028ad408ef384ae0bc"],["/categories/css/不常见但是实用css属性/index.html","35362b01a9b1413c9f72ea08719af5ae"],["/categories/css/中间文字-两端横线/index.html","2d1bcd2871b6714718f0c638031b8e62"],["/categories/css/块级格式化上下文/index.html","d57c679e1b5b7caed7bdf1b3a2a3c906"],["/categories/css/水平居中/index.html","e28091f43ce36cb5db5b9e5dc27d1342"],["/categories/css/负外边距的巧妙运用/index.html","c3605865986d011cc3175630c4bcbe51"],["/categories/docsify/index.html","4261202b28d12535cb8dc2b2170ba565"],["/categories/hexo/index.html","3cf565743af1f970487b1abeca886449"],["/categories/hexo/windows转mac/index.html","c780d944cb69be3265ad9ff312fa9a1a"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","0db0d1151c9c0b1b60781c01725c2f20"],["/categories/html/index.html","0f4cb728557df424a2fa744206294892"],["/categories/html/基础知识/index.html","e1456de5239ca72eeab21c06412adefb"],["/categories/html/页面布局/index.html","5d0ca3f75bcb03378968007146f4e195"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","a02211848da476d268f6a0718f0bf1d3"],["/categories/iconfont/index.html","15148dcb900d0ddf39a382a327b39a8e"],["/categories/index.html","d4209d2b8a56a2d4bb6b2e98470078dc"],["/categories/js/index.html","9b670fcf402a3ad087f510515b5ee048"],["/categories/js/原型/index.html","0db4adff6c775d418ec5d42d70f21f54"],["/categories/js/正则表达式/index.html","12841d972c9705b47b2d5a17b681fbff"],["/categories/js/获取html到fontSize大小/index.html","ea15f2b46fe197aec8ee40b278690be3"],["/categories/js/获取url的各个参数的值/index.html","6dc314034eb852972b89e7ca0c7dbcff"],["/categories/js/闭包详解/index.html","6424905b3fc671f06b3a91419f41f00b"],["/categories/less/index.html","438b4553788b47d508481259da883e87"],["/categories/less/全局变量/index.html","e4bb1131a053784cc37f35e66b9e294b"],["/categories/nuxt/index.html","352465366e6a4750be22db1016589216"],["/categories/nuxt/代理/index.html","889a741b52df7894c9499cd15b49cb0d"],["/categories/nuxt/国际化/index.html","53e71c253bf0f711ce9c27ff341bfbcb"],["/categories/nuxt/页面刷新数据丢失/index.html","495f4efa73d3674da8e61170fc7b0d64"],["/categories/vue/index.html","60529b83f89a9a0770433555e6f881d8"],["/categories/vue/router/index.html","87335377dc508240418c07f10c0fd0a4"],["/categories/vue/代理/index.html","51afad726469ba98f6af7110f778ee79"],["/categories/vue/国际化/index.html","e6835bb3915d1ab5c6292fd03cf4d61a"],["/categories/vue/时时监听网络的链接状态/index.html","eba2e02016f0137938af993b41ed6571"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","70267d2d99e32271f77db7dab45f8664"],["/categories/其他/index.html","7271b77faecf28db707e66d130eddf97"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","8854abe22e7f1eb5b4795b605c8e22e4"],["/categories/其他/目标/index.html","58ec8232550613aeabe9c83a5e47a6c4"],["/categories/其他/规范/index.html","3bdbea162c60936c75e36a44dec7b884"],["/categories/其他/高等数学/index.html","002e496a0538b3a6868843646d9ea1cf"],["/categories/小程序/index.html","db9801e2c7257b13e70bfa03e7e4afa2"],["/categories/小程序/wx/index.html","698211218231a9b6eea0ff084574106c"],["/categories/数据结构与算法/index.html","18115a091501aaf9a11ba4399a956849"],["/categories/数据结构与算法/图形结构/index.html","0b812e8862ced72c7e7c7d985a60ca8d"],["/categories/数据结构与算法/排序和查找/index.html","325f99a1bbe192008c033d00f2c1245e"],["/categories/数据结构与算法/树形结构/index.html","05f4b604869e1253c0b5fd481db34379"],["/categories/数据结构与算法/线性结构/index.html","6c04cdeeb055387087d7362ee8846efb"],["/categories/生活/index.html","91ae653f24cdae2b049f2ce0ffea538e"],["/categories/生活/长大后明白的道理/index.html","89ad1b1a11e75d9d5b2e13a9e6f388e2"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","69e218ee513c19eb215fdfc4fae98b81"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","fdfd245981c4f3ac8ee8e7d7797fcc9e"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","228e5bd94d3aec452c5ba722badd6bfc"],["/movies/index.html","2b0bf8418ee490e811982f57d0352505"],["/music/index.html","80d4663b410b63deeadb9b6675abe6e9"],["/page/2/index.html","472ca62d9ea6349cc48a217cbae5fd7b"],["/page/3/index.html","7933e3246b2b79d4a6b02a5d3cca7b0b"],["/page/4/index.html","f7073d675be2edf80abf41e00d0a6f71"],["/photos/tangyan.html","ab75669c8d0730bbbb4d855a0c2c9aa5"],["/tags/amd/index.html","d55f6828ff4ca7c25d253c09010a7e7b"],["/tags/cmd/index.html","5e0e9ff3f1fa5a4a7fc316ea94171f7c"],["/tags/common-js/index.html","90259efdf776900744e3aa28652078de"],["/tags/cookie/index.html","5496febd186121177ef34c77f59bc530"],["/tags/css/index.html","e4a40e44522d44903a20310630a4d79a"],["/tags/docsify/index.html","e3803fe2255bc326cf39330297b00892"],["/tags/hexo/index.html","6f8dd30a823092c27ff84fb800bff146"],["/tags/html/index.html","2694f70d32e3a2fb6582222d09f4b0b3"],["/tags/i18n/index.html","07f6c32398c3df9cd075f8460148c699"],["/tags/iconfont/index.html","90c631affca7c72348e3243d468e185c"],["/tags/index.html","22ea3c6bd40dce42a437b98092244595"],["/tags/js/index.html","b6fedbd927dfbd98f000c63948593c0b"],["/tags/less/index.html","a9f0b4702782b774a5b7b49bd3357a1b"],["/tags/nuxt/index.html","4cc5e519e3eac4c0da08ff6395c0012c"],["/tags/proxy/index.html","a944b0163facd586e7205702fff3d1a5"],["/tags/vant/index.html","d2082cbf976ed0da79ddfef79a8216f4"],["/tags/vue/index.html","ddbde1bef58b8ad0af0721a0eecbfda5"],["/tags/其他/index.html","21f720873c536963aad591ca93199701"],["/tags/基础-一/index.html","54ff72d66878f28c829b5bcadbf10e63"],["/tags/小程序/index.html","d5870f6fd2599175b8ab29a09285bffe"],["/tags/数据结构与算法/index.html","b09fa1793f169fbf6ff5b5cbc583a77f"],["/tags/生活/index.html","6e86fa7f53b3b798f21d170f397d95ac"],["/tags/目标/index.html","37816e301b3522bb35130c2fe4f7a979"],["/tags/规范/index.html","aadf20fa4478cf53d563796b27d4f2e6"],["/tags/高等数学/index.html","9682ac487bdfb7c95ac88cd3f58ccee4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"www.cq.qcwy.org.cn"});





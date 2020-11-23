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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","296b1c0785584590a6e809b4a5c5cfa4"],["/2017/09/12/css/block/index.html","2b8eacb5e5a733b9aadc8ea37708b133"],["/2017/09/12/css/css-properties/index.html","e14fa95816a5a43b694a52acc7f6880d"],["/2017/09/12/js/closure-js/index.html","2ae1d93b2ae4095781a170d6ac2726e6"],["/2017/09/12/js/prototype/index.html","593db3a57522fff164064dc4fa5e2309"],["/2017/11/12/cookie/set-cookie/index.html","f73f681960d83229d0d4e3d0b7120b1e"],["/2018/02/15/docsify/docsify/index.html","e965d6e66eb022b0d1ab1a3fdfa5d1ba"],["/2018/02/15/html/divCenter/index.html","a4b3f45b8b5581470d5363dccb7ace51"],["/2018/02/15/js/RegExp/index.html","c95e9c903804db9be3098827b0222168"],["/2018/03/21/js/js-set-html-font-size/index.html","2d742d711f28ab26376b9af73843cb65"],["/2018/04/15/wx/login-wx/index.html","af396700bfbd1565a1df53c636bd0de3"],["/2018/04/19/other/norm/index.html","b76ab4027a314747d8967403312ef43d"],["/2018/05/12/js/qureyUrlParams/index.html","056e2042054096fb85dfc7d5545ed5a2"],["/2018/07/13/html/layout/index.html","c30f9d08bf5951e8f905888cd67078fa"],["/2018/08/15/js/amdcmdcom/index.html","da8c1b0a91009029c91b110bb3861142"],["/2018/08/15/vue/vue-1/index.html","d2b4a11bdd4df37fb241420771b0180d"],["/2018/09/12/css/css-line-text/index.html","0a07a92a7c6922dbbdf6afa39d97750c"],["/2018/09/12/other/classic-article/index.html","7653e29f53e4c7ea890675adf67b0f6e"],["/2018/09/16/css/css-attr-practical/index.html","dd3b64181902f26c9a0068f399618f11"],["/2019/03/06/css/css-margin-negative/index.html","43c9bb5b3831216a0cdd3b77e2530ce5"],["/2019/03/21/iconfont/iconfont/index.html","74aff7b8cfca4f46d0b8b90941cd6166"],["/2019/05/18/vue/vue-i18n/index.html","c3b9efa391b85db59422a85a16778868"],["/2019/05/24/vue/vue-router-parms/index.html","1b5bce82d6fa1756b709d6273e51d9c6"],["/2019/06/04/vue/vant-list/index.html","afb21399c5efb45e31a83c975adf3ffb"],["/2020/03/20/hexo/hexo-gitalk/index.html","e06bd266d5d6c4c9f2a77dcbfea16413"],["/2020/05/12/vue/vue-proxy/index.html","c0c62043634e8072d16e64b2a9489fd3"],["/2020/06/30/hexo/hexo-move-mac/index.html","b3ce873b3e52e925e5f26ce44de2f24d"],["/2020/07/03/vue/vue-network-online/index.html","74187eeb545ce1be10937f87fdc01d70"],["/2020/07/07/nuxt/nuxt-i18n/index.html","c74500aaf5a3afc51b59720535d2c5ab"],["/2020/07/09/nuxt/nuxt-proxy/index.html","92b08c24d51388924437babf1205aefd"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","b58b3a1e1a4dd32e982d8ee13c3d855b"],["/2020/07/13/less/less-var/index.html","d645feb85104cb6d2b84ad1a91687d14"],["/2020/07/23/life/life-big/index.html","450821af0b8eb716418163f63cd6a615"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","a43eaac518850ab0cccadc1d1881e4f5"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","110cad6ef21c72dd30b450af1bfa9b9a"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","e9eccc31286b1dad4acc8760638084ac"],["/2020/07/27/other/zsb-math-gs/index.html","e92184852ffd99a5b91c47357637e886"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","cb2d741157b81bab939edd0c2fbe1a0b"],["/2020/08/06/other/target-2020/index.html","d66466aa5b17da996e8e4bd9d2cbef7e"],["/2020/11/15/flutter/basis_one/index.html","ab66e9e6be3df75c76fb10c45597b42d"],["/2020/11/23/js/change-url/index.html","931365dc6c1bde1d39d1d645066b1f99"],["/about/index.html","921ba77808aba3eff5f71e2a60985c86"],["/archives/2017/08/index.html","cc564f9b12401e2c451cccb2b96e2a37"],["/archives/2017/09/index.html","ee0514a68bed53298d5bfb654adbc6f3"],["/archives/2017/11/index.html","810c6af49611999c38a53366643785d1"],["/archives/2017/index.html","c2a8ad0f8d00a8307e381129f1d07f5a"],["/archives/2018/02/index.html","1f6b20aacdeca526a942e78face8d939"],["/archives/2018/03/index.html","a7915c6ef635fae9db39cf4d9dbb9b99"],["/archives/2018/04/index.html","7ef7cf05ecfc3065da962609c6cd7b60"],["/archives/2018/05/index.html","2361b433ab596e4d9c06d653223ebe2d"],["/archives/2018/07/index.html","7b1c1bfd5bcfe0c2d525fe76a2cf1e4c"],["/archives/2018/08/index.html","41b6760b4963e3f980a280c988e04b97"],["/archives/2018/09/index.html","7393aaa97f3ec6106c3a4425f51c42c2"],["/archives/2018/index.html","fd63a76dde4267eec08d182845a3a809"],["/archives/2018/page/2/index.html","f2703d54122b48e553b05468042bd1e3"],["/archives/2019/03/index.html","3a9a420633dd2d9e6375d5a1730f51bf"],["/archives/2019/05/index.html","b494bf36073c7bba90716cf68ed7916c"],["/archives/2019/06/index.html","67e3695561c92f3dfc72cdecf4e51be5"],["/archives/2019/index.html","41f6a1e73b057c431edb11908d398b20"],["/archives/2020/03/index.html","2b1960c483c8d18abaf11c88a8d639b1"],["/archives/2020/05/index.html","fd1365dd588942e4db4d1a3fa4bd722b"],["/archives/2020/06/index.html","653b7b9d56557d943bf31478485e2b52"],["/archives/2020/07/index.html","013f1a712000e59d760ca30a48e7034d"],["/archives/2020/07/page/2/index.html","7dae5f3b66f35f242fdb9c9957a8c6b1"],["/archives/2020/08/index.html","d8f2aaed3cea5f39f58789805e0c6e5a"],["/archives/2020/11/index.html","6d7917c730e4823816cd7e1109a6fece"],["/archives/2020/index.html","117e97308ffaf9c8337a28e126ebb747"],["/archives/2020/page/2/index.html","ae303df6d70a516385345a1c583ab2df"],["/archives/index.html","6d0fc308aa0208e4f0b0cc1818b596cc"],["/archives/page/2/index.html","9640fc490596b16e7bb82a5b987cc6fe"],["/archives/page/3/index.html","e99e2d8756352af9be2a02f9a3486f57"],["/archives/page/4/index.html","3f1e153a3d29eae15446c219f0643027"],["/archives/page/5/index.html","150b12cd03f7e9060a84f6045b21ada4"],["/categories/common/index.html","e85c88da3839bb64185ca0760d74eee1"],["/categories/cookie/index.html","8ea6761bea1539db23020bec60ccba43"],["/categories/cookie/设置cookie/index.html","c3ebc7f26b87886e67b0ae18d54dd8a6"],["/categories/css/index.html","140a6ee1a6daac3c757cef71bf765e09"],["/categories/css/三大特性/index.html","b04aaa7694df15bd2f1fea7bee5ac6c7"],["/categories/css/不常见但是实用css属性/index.html","52ba403c0015b689357fee5c25bce45f"],["/categories/css/中间文字-两端横线/index.html","4591aa242adf22b7021a1122f7eb4d10"],["/categories/css/块级格式化上下文/index.html","bdd6bd18cf961aebe079fae7089d20fb"],["/categories/css/水平居中/index.html","87567b8c88105096be78544428087c83"],["/categories/css/负外边距的巧妙运用/index.html","450c486cc6b37dcfa78b1119e4084e1e"],["/categories/docsify/index.html","647dd3d6e756c28fe6954b1be84ac68f"],["/categories/flutter/index.html","7a41468bf546a9543d409bb4359e4817"],["/categories/flutter/基础/index.html","11118e4cf78ae5bf229b16099b996dc2"],["/categories/hexo/index.html","7b19910bd6b571fa94291fd6a1f72a73"],["/categories/hexo/windows转mac/index.html","a34f280b64568615bcb0adfe1f8ef8bc"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","1f3f6ad93969c1bbdd7c73b63365cd34"],["/categories/html/index.html","b6738df714a23bd1d8c3759cb3a0c19c"],["/categories/html/基础知识/index.html","76177069a06fcadef37e0a4ba8c60679"],["/categories/html/页面布局/index.html","fada3d9615fd88da235b428b2fd9c792"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","61f61f5dcb4cd9634e628327c3c9b1ca"],["/categories/iconfont/index.html","5b0362627609538abddb696b73133265"],["/categories/index.html","915c2c9384ef9d40d4fb53e4aad5fd18"],["/categories/js/index.html","7b6667bb470785c6873b77d5da958b1b"],["/categories/js/url/index.html","a83cfb80b07a6680a2554f8d6a9aad60"],["/categories/js/原型/index.html","b5469ca8c7dfd9ee8fb41b97e563ecb0"],["/categories/js/正则表达式/index.html","d1c9a7e3eb45ef890fdadef1cb09050a"],["/categories/js/获取html到fontSize大小/index.html","852f5fa99f80f24638784b9986a4ae86"],["/categories/js/获取url的各个参数的值/index.html","99d25e3c03b3dbc0b044a70490761828"],["/categories/js/闭包详解/index.html","a2ae2243d8225eda9622e80d4e9f3065"],["/categories/less/index.html","c05e91ad81dfdf0ab5b5b18fe9598717"],["/categories/less/全局变量/index.html","f9587011ef9d474cb09a5378e9bd8c86"],["/categories/nuxt/index.html","587f35b07d6e25ba8e5eb62036af8886"],["/categories/nuxt/代理/index.html","fbed08fcbffe451c54f62fa4a0f792d5"],["/categories/nuxt/国际化/index.html","a4e9ad54d1005b39f085f85a8517935d"],["/categories/nuxt/页面刷新数据丢失/index.html","1759892c421536af9b9a927bdd16708a"],["/categories/vue/index.html","b1211e91013bf71a389d675d9d22b69b"],["/categories/vue/router/index.html","7639be3b1981885b699404d55c144cd3"],["/categories/vue/代理/index.html","b89217fbd89c25f5997e53ff83937145"],["/categories/vue/国际化/index.html","d9720e03d07734c5ce93fd562e2eb342"],["/categories/vue/时时监听网络的链接状态/index.html","663254a5324429cf009c87fa4bb49823"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","101f95d35b9127a3fffee430a040c2de"],["/categories/其他/index.html","40f0cabf6a315da789851769d76fe5f4"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","30761c7ff7b6bd52945f879fc2a672f6"],["/categories/其他/目标/index.html","89a0a75909008c6b32d2caa26b00dd98"],["/categories/其他/规范/index.html","8299834397c093e4c62c7222618d5c29"],["/categories/其他/高等数学/index.html","839a52d93d164d9d34b5ee02d8497a8e"],["/categories/小程序/index.html","1272ca789d9cafa4d56b0b0578eaa2db"],["/categories/小程序/wx/index.html","25d09de3eefb28793ab18eb280a7d5d3"],["/categories/数据结构与算法/index.html","0ac568a7dc50d9a38c78a79c20993bb7"],["/categories/数据结构与算法/图形结构/index.html","dfb4b6df3ab9cedb816e659872fbfc59"],["/categories/数据结构与算法/排序和查找/index.html","72ed89161d513c878543e2267f81779d"],["/categories/数据结构与算法/树形结构/index.html","401255acc4529e03350608a306c78df3"],["/categories/数据结构与算法/线性结构/index.html","a57648f51733fee8614f229dabf7d2e6"],["/categories/生活/index.html","d9f6af4e68219783124af8b9210721cf"],["/categories/生活/长大后明白的道理/index.html","44e04e52a7a5e2185a475491f46da7fe"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","cd67b2650ffa8f2874ddacbb338496e0"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c526eb3d08df39176de9d1018f13e852"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","d081f8118835182d954c5f53f942e01b"],["/movies/index.html","b330cf5e83cc5764a449d324ed5a63c3"],["/music/index.html","e1dcf5680aea2fb6ef9d154df72c860f"],["/page/2/index.html","4b6a842223581f61c249496f75ea026c"],["/page/3/index.html","efad8599a89f268222a585d6a8cee604"],["/page/4/index.html","fb065b92f8a3565ef2d860745ac33be7"],["/page/5/index.html","7a2c566c22be97c4273df1a1d1889f92"],["/photos/tangyan.html","9fc7ae319eff7a3f632dda2f6854bf0e"],["/tags/amd/index.html","1389ccb28dc7468005301ddcdb714f8e"],["/tags/cmd/index.html","729d8d0ee7371d14ac69d7e42734a6c5"],["/tags/common-js/index.html","fe66a9391afe63085e0ff495ce2cd264"],["/tags/cookie/index.html","7a8fbb8ee09e2e650c410368af52c043"],["/tags/css/index.html","f7224d05ebefb565d65521f32b155722"],["/tags/docsify/index.html","bc68a649463d3000e5dbfc5b8a171cae"],["/tags/flutter/index.html","47f373f24b0bef770facefbe2057ff8b"],["/tags/hexo/index.html","bea2cda7f03a9b1ef754b493686ff750"],["/tags/html/index.html","1b0b357f69ee732bc74a3fad6cd6a9a8"],["/tags/i18n/index.html","fc761ce80806cabffaf75c0977eb0f72"],["/tags/iconfont/index.html","23f3e6f843a3d1b08834cc6c408bb21d"],["/tags/index.html","21f5b375fc3b4ac97685d0f33e89a910"],["/tags/js/index.html","e2746fcb12f491ca86d7b57b3c0a4d2e"],["/tags/less/index.html","d37ceef02d4ed35d1a0be239a515d263"],["/tags/nuxt/index.html","91a265e32f900bf8ed598e4e1c01f901"],["/tags/proxy/index.html","c35b4ade6c7591b628014c26c9b1fa0b"],["/tags/vant/index.html","1db33db5a998b8e95473ce69aca1bc87"],["/tags/vue/index.html","912ba4e154473a851d674e6faf383764"],["/tags/其他/index.html","0033ec758925b39d70165c7449d86fea"],["/tags/基础-一/index.html","a921803f5ed02178033d46f8f423dc6f"],["/tags/小程序/index.html","1407c0b7b5749be296dac9b98ee10467"],["/tags/数据结构与算法/index.html","2f275982d2e6ed3f1332242d3681b4f9"],["/tags/生活/index.html","ea3058aff593a1225d5a489d24ffe3ea"],["/tags/目标/index.html","1a3f92e62d4feda31a63253a62fe16f1"],["/tags/规范/index.html","2516355a61059f246af3c8f39be53f0d"],["/tags/高等数学/index.html","de75ec844ca5c0fb69726a71bc518707"]];
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





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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","e19cadee6f0cc535792ef2bec7958125"],["/2017/09/12/css/block/index.html","cec23bd3c65dad1893d307bc3c64a5d3"],["/2017/09/12/css/css-properties/index.html","3ca6bdd5a3b011d9af37626a1297ef35"],["/2017/09/12/js/closure-js/index.html","e430fc509ffdce73c84d61b94bdd693f"],["/2017/09/12/js/prototype/index.html","2b4fe91d3359e7dee41b6816fedce03c"],["/2017/11/12/cookie/set-cookie/index.html","9351709377b4dcf63fa488b8dc41d06c"],["/2018/02/15/docsify/docsify/index.html","8040fbdafd0be56e7e8acba58005eea6"],["/2018/02/15/html/divCenter/index.html","20ada2d9a6744fda1dac90d1c598a3de"],["/2018/02/15/js/RegExp/index.html","860b5cd17b2411f106940c2c41609615"],["/2018/03/21/js/js-set-html-font-size/index.html","3316739a77d6709bdf6fbe5a8728ed74"],["/2018/04/15/wx/login-wx/index.html","3df721e109d011b9eae3a31b32cf27bb"],["/2018/04/19/other/norm/index.html","b839bea9be100440f98adfa3bfd432ee"],["/2018/05/12/js/qureyUrlParams/index.html","e86c9b2a9b64cc170e8414fdd836ae2b"],["/2018/07/13/html/layout/index.html","424d939d703fe3cd658debd492bfb9c1"],["/2018/08/15/js/amdcmdcom/index.html","cbf2b1fb398f575f811dd995898d0482"],["/2018/08/15/vue/vue-1/index.html","e3caac108d66a3a1fec324b3f87c68f2"],["/2018/09/12/css/css-line-text/index.html","e005a9791205d7be7c867c04cbf38ee6"],["/2018/09/12/other/classic-article/index.html","719a02040bcdfcfde2789f256be84172"],["/2018/09/16/css/css-attr-practical/index.html","51fbfef83c799cc9ce9acb307a7d1ee6"],["/2019/03/06/css/css-margin-negative/index.html","97b0911f6ab4e44558e3a64fa92af534"],["/2019/03/21/iconfont/iconfont/index.html","e2ef91888cc09783334904cdbcf2772a"],["/2019/05/18/vue/vue-i18n/index.html","fb2dde8882b494e02b0b5cd7aa64d6a3"],["/2019/05/24/vue/vue-router-parms/index.html","ccf727f22533769709a6fe722ba31c9f"],["/2019/06/04/vue/vant-list/index.html","1221724432c29195978dc0d470beba0e"],["/2020/03/20/hexo/hexo-gitalk/index.html","738e201e7c01fe3ce0a717cfcf1b5d8f"],["/2020/05/12/vue/vue-proxy/index.html","037ce70ca639611e89dd0d929a4cd874"],["/2020/06/30/hexo/hexo-move-mac/index.html","1d55938fad0d4c9ab61a57fc3d9302aa"],["/2020/07/03/vue/vue-network-online/index.html","5d6c639a18425d6699fbfd8ee89ef8ff"],["/2020/07/07/nuxt/nuxt-i18n/index.html","c25e265b80377bd175246f65a5e26de1"],["/2020/07/09/nuxt/nuxt-proxy/index.html","a1bc176cd29fae1012c1df1440bb6508"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","da65ba414ff1006cb38e24a5efa66518"],["/2020/07/13/less/less-var/index.html","4e380b3818ea41bfc18b55b2cda8a517"],["/2020/07/23/life/life-big/index.html","a1d7715c339d1c3e6a04a119fb2ed31f"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","91dbbf2ac9681048d7208cd20e6603f1"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","5c5edaa2580d54717da16aa35fa377b6"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","af3ca8e21c10b2c08cf837ad94dbbf0d"],["/2020/07/27/other/zsb-math-gs/index.html","7f9d1f2a269409724d99cb9d0d8d96c7"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","bcdcafab69d2a79a0a1ab09a91fe31bc"],["/2020/08/06/other/target-2020/index.html","9c6c00e2315bda13e584c8211dca1707"],["/2020/11/15/flutter/basis_one/index.html","286a8adf0bde28e71f84a80d7df2c010"],["/2020/11/23/js/change-url/index.html","e9e2cb7650eb47143554669f3b6b8d8b"],["/about/index.html","457927e47cb971d1054060d8d09474a1"],["/archives/2017/08/index.html","a12261368c35880187d66ba43e1661c6"],["/archives/2017/09/index.html","3963ef26382cc9436f5ccd5ee107de05"],["/archives/2017/11/index.html","5b8c567f38c1bfd1800c93a6fd266948"],["/archives/2017/index.html","73486f0a7304712be2dceb303c79eb7e"],["/archives/2018/02/index.html","c467fc0da7b3046730e1d2409f218a37"],["/archives/2018/03/index.html","4c30fed0cdaee1a34cce8102ec3a3702"],["/archives/2018/04/index.html","9d6fdf9239c39f7c3a2b2dad8feb669e"],["/archives/2018/05/index.html","273ac9733609cca555151f9a02d79c93"],["/archives/2018/07/index.html","093b5b353a8a763b03d4249d7a9a281e"],["/archives/2018/08/index.html","8dbd51adae66455531b6e51a8d811446"],["/archives/2018/09/index.html","6faeddedd99f4a59eaf4df0e94c95b1a"],["/archives/2018/index.html","64bb97360af801085ece23c0b9eacdca"],["/archives/2018/page/2/index.html","e00990b4ce80d8b3c43dd9b758cca1f9"],["/archives/2019/03/index.html","94dd9a6dc6c8948821982f42ab0d08cc"],["/archives/2019/05/index.html","a389e50f59f8d6f17e53579825376b98"],["/archives/2019/06/index.html","720cea948a5594bf890017b85fe33e0a"],["/archives/2019/index.html","6290fcb77479d35a024ebbfd950a63b6"],["/archives/2020/03/index.html","859060de0e1d179714790321bac674e2"],["/archives/2020/05/index.html","ee1c0059cd6247e38cb2f5f2998d7aa1"],["/archives/2020/06/index.html","59442aa0d1cc3bf2802a7555052756f5"],["/archives/2020/07/index.html","522c510a850b149ce51417b160140b14"],["/archives/2020/07/page/2/index.html","5b5d1dda8f106496a7baf1551ce44bdb"],["/archives/2020/08/index.html","14c99eb2a6b8f4090da5450baf6de3ed"],["/archives/2020/11/index.html","c575d23e00edd06a9fd7ff6a415a5020"],["/archives/2020/index.html","cc4317fe1a2eab2962d96392d30208cf"],["/archives/2020/page/2/index.html","09c8e68967b8c37996352cf091ea88d9"],["/archives/index.html","f49b9b83ca6695d503ff1bca7b0fdcd5"],["/archives/page/2/index.html","c9bd342e06883b1bc8d684a077ef4020"],["/archives/page/3/index.html","52e45da43b04fb1041e3ae2b5ea17558"],["/archives/page/4/index.html","6f16ec763e2d640ba623c275b41e9f19"],["/archives/page/5/index.html","28c07f6ebb91ae03e1ce1e5c6a86659d"],["/categories/common/index.html","c4c0aa95b1d01a1b858b13b6d0999f86"],["/categories/cookie/index.html","bdf12f1ddadc4ff4d61be926fc26a3ae"],["/categories/cookie/设置cookie/index.html","002cb1f9e20e161d1964e28a26ac774c"],["/categories/css/index.html","8ec83c616148af01faa6590ab5a1fd70"],["/categories/css/三大特性/index.html","3641aacd0619e385d561de870cafc883"],["/categories/css/不常见但是实用css属性/index.html","a6e25d9b7dbdcc53fad08cc52212f494"],["/categories/css/中间文字-两端横线/index.html","38021ec155392410deae7bfb931c662c"],["/categories/css/块级格式化上下文/index.html","9b213b5633eafae343deca115766415d"],["/categories/css/水平居中/index.html","d21eec6a7db652f53807dcddfbc67246"],["/categories/css/负外边距的巧妙运用/index.html","6e888ce686bebb52decfd8538c4c48c9"],["/categories/docsify/index.html","4e3b8e5046acf1306716494ab6328699"],["/categories/flutter/index.html","cdfbc7df68075ec81c540bbc39dc5ccd"],["/categories/flutter/基础/index.html","1670cd6bc07df2aeff5b90cef38dc97d"],["/categories/hexo/index.html","03040d16031eef4dd3e7e2fdccda9dcd"],["/categories/hexo/windows转mac/index.html","02631b2f9fbe8569520d04f24654365b"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","fdabcc5063cb6179b5033d84aa1ba4ec"],["/categories/html/index.html","4d78f53c5d54f474e1e483231703b278"],["/categories/html/基础知识/index.html","7fbdf7f485c54cba9ebc290d83370be3"],["/categories/html/页面布局/index.html","8b144056050262a7e1fd662755521ddd"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","896e3dd1502efc265a4aab24d715b0f5"],["/categories/iconfont/index.html","d5b8358e3fbcc48f229a9f58d5c2d0ad"],["/categories/index.html","1c82a8d8db62d85a8e5cd4a6ce647723"],["/categories/js/index.html","e9b132802b36d61ae57d6877ca9e4fe5"],["/categories/js/url/index.html","3a1ee2260f787d73a69041bb4dbeeec7"],["/categories/js/原型/index.html","bb5e871d3615e7c35518a8300d823204"],["/categories/js/正则表达式/index.html","6fcae45ff7424322f099cedd40ef10ae"],["/categories/js/获取html到fontSize大小/index.html","468206051ef70cc13392239b275087af"],["/categories/js/获取url的各个参数的值/index.html","ec7a27e58f588faf6f20f230c6dfaaa3"],["/categories/js/闭包详解/index.html","6e5ee883b67c53b4e775886def271162"],["/categories/less/index.html","59b522d894696082221befe4888cc3a9"],["/categories/less/全局变量/index.html","823c9a1238dfa093876ec69efd776efb"],["/categories/nuxt/index.html","870c5daed834c7de543acbad33b6991c"],["/categories/nuxt/代理/index.html","3dcf64284c6bdbf5a64d6ff1bf0a1ee0"],["/categories/nuxt/国际化/index.html","6ff05319d66d66e5ab873eb08a9fbca4"],["/categories/nuxt/页面刷新数据丢失/index.html","6736350dce163a466f2bdd9c59ef4806"],["/categories/vue/index.html","6e269dc7f2e098e1de845cb032bd2dfd"],["/categories/vue/router/index.html","6a6a525b3cc44274382e8e46ea1b52f8"],["/categories/vue/代理/index.html","99d4d983f2643b99c465f3daaac1cb0d"],["/categories/vue/国际化/index.html","544240949ac8eefad2eda1eeb335d111"],["/categories/vue/时时监听网络的链接状态/index.html","5810aa57518754649ef514367d7bf6ce"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","b975c62017e3076519597171aff9eda4"],["/categories/其他/index.html","6f572321f34be04f7cca63d60d3de4a2"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","c66923748e087699326a62f3ef01f110"],["/categories/其他/目标/index.html","980e04c47adc7fff98ce99ac8ba2e903"],["/categories/其他/规范/index.html","7609e9993193a43516b6a38aa6e19718"],["/categories/其他/高等数学/index.html","4de5357e736f3fb14455801626a38854"],["/categories/小程序/index.html","e25e73681e8accf5ae6f57ae6d304391"],["/categories/小程序/wx/index.html","0433560d6a0888c5c9c0b80fcbe5fd9b"],["/categories/数据结构与算法/index.html","84d817e8cc6d9c9baf5aa738b1d7059c"],["/categories/数据结构与算法/图形结构/index.html","20f4cf798ac6f8791b4e004c9be80ef9"],["/categories/数据结构与算法/排序和查找/index.html","141925e4d3eb4b76af3d5aba5477ffc1"],["/categories/数据结构与算法/树形结构/index.html","484c004e3e7adb26d1174aeb62e1539e"],["/categories/数据结构与算法/线性结构/index.html","f58a4d47d7b7ef41f8418f4ac7e17074"],["/categories/生活/index.html","ed16a4f48c5160e86c018349ad98d851"],["/categories/生活/长大后明白的道理/index.html","1a8bdaf857f5a750b879cd097320a406"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","ca4815d0a712557a103c0f9a3e7813d1"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c77fd7100ebf9a95f7c2bf3e508012f7"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","fe6f6b79a2c55b0c95ae14ef8b30dd49"],["/movies/index.html","b4d4c7847272a7fb6f9658319bc6697c"],["/music/index.html","8f5831ec2ef690e4f8d39fc6caaf922a"],["/page/2/index.html","d521324b5e948a6285817874336e44a2"],["/page/3/index.html","2020212235fac26227230b784e8067ff"],["/page/4/index.html","2efa8bd94d3065174dee18288b28c260"],["/page/5/index.html","6d43fb354bd8c195872e57a194dc29f3"],["/photos/tangyan.html","88e44519b897cdcc53758655da44d65d"],["/tags/amd/index.html","3962077e3bac12b48e4b588cfb6075ea"],["/tags/cmd/index.html","cb2210afe77b9bf4b6ac87a850d9f07e"],["/tags/common-js/index.html","1aaacd14b43110b06fc094eddc6ef15e"],["/tags/cookie/index.html","5abaf4f519481e60767a8e442e881967"],["/tags/css/index.html","bbbe0e4c9b9daf1dd10cbbe20d468da3"],["/tags/docsify/index.html","4760d1429684b09315c465afe5fd6178"],["/tags/flutter/index.html","5e49ddc7e5e437d237a143162dcb6cef"],["/tags/hexo/index.html","8bd811b675f3af1d8c5f62d33e095aed"],["/tags/html/index.html","460cf8ebe158dc0b7202dd26a154794b"],["/tags/i18n/index.html","97fea42f3d18e7bacc2499cc73434a1b"],["/tags/iconfont/index.html","4cf9ba87434f41d5951fb3633fb5539e"],["/tags/index.html","e62d759c545896b2d9fc3d1b1f9e9232"],["/tags/js/index.html","fc40d84b0dcb788e3dd8adfd00181991"],["/tags/less/index.html","96f7c3232c4a1da381e57182b0f87108"],["/tags/nuxt/index.html","018b17f6702fcc6b6d8710cfed74f27b"],["/tags/proxy/index.html","9efc02d6cd653bd6b76e18b8ee441f7e"],["/tags/vant/index.html","089f2d70bca28444d0bdc92baacb2812"],["/tags/vue/index.html","e4908f3bba4d72d99d2678a4ccbc4fa9"],["/tags/其他/index.html","f862c13311846685ac60058d037ec1f7"],["/tags/基础-一/index.html","66326c17e8e9d7ea13095816e3a04ad1"],["/tags/小程序/index.html","43345f1dfe2a227e313125e266317e56"],["/tags/数据结构与算法/index.html","8ea2fcac80d4970b921140e5297dc814"],["/tags/生活/index.html","b622a424bf329b4bcea489b7e2c687d4"],["/tags/目标/index.html","916fa845b5e73c3ded0c693657a31f09"],["/tags/规范/index.html","e9afb712c3f505a89140bd1114078b0c"],["/tags/高等数学/index.html","57fa2e1ec056fba1b73fb2e5b0f48862"]];
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





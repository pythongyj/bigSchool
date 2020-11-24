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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","0a7a1c38da6ce024801d1ffb78abdab5"],["/2017/09/12/css/block/index.html","b51fdd1a0293492657f76bf1fb46b2b0"],["/2017/09/12/css/css-properties/index.html","7933f9290ade53254959ece45288676c"],["/2017/09/12/js/closure-js/index.html","6826e3e2813edb34a104150f69d82d43"],["/2017/09/12/js/prototype/index.html","ebe03f9be911e3f68d943d3df4362677"],["/2017/11/12/cookie/set-cookie/index.html","ebe97f0cd0af3548b8660ff26a503cbc"],["/2018/02/15/docsify/docsify/index.html","21d3731cb23dcaca5b0870bddd9402d7"],["/2018/02/15/html/divCenter/index.html","cff1f385ac3ddbf657fa18c0041f34f7"],["/2018/02/15/js/RegExp/index.html","90f253908a4599c521c295d1e62a919a"],["/2018/03/21/js/js-set-html-font-size/index.html","3aea815c71dbc36a5f369ba2d547fb05"],["/2018/04/15/wx/login-wx/index.html","f617093645d329b04c39949220b57e08"],["/2018/04/19/other/norm/index.html","1fab52ce58398c9863506fa998bcce8d"],["/2018/05/12/js/qureyUrlParams/index.html","88b2ec9b6bf627dbb65fba9dabfa1840"],["/2018/07/13/html/layout/index.html","f32d34622138cd6426d325bebbe09c82"],["/2018/08/15/js/amdcmdcom/index.html","f8f91c50fe63a5ca24a2a3cbc5b2973a"],["/2018/08/15/vue/vue-1/index.html","854322cec7a7657a70c737d52edddbc1"],["/2018/09/12/css/css-line-text/index.html","523592887b34934da7f8a5c4751fc460"],["/2018/09/12/other/classic-article/index.html","67ab7450160dde36fc58a39db26483e1"],["/2018/09/16/css/css-attr-practical/index.html","159d18f42f6c47c044bc38410e1a24e0"],["/2019/03/06/css/css-margin-negative/index.html","8a692c59b12d2768aebd701640bce80e"],["/2019/03/21/iconfont/iconfont/index.html","6a01edddfa206a96f38848e861e66c56"],["/2019/05/18/vue/vue-i18n/index.html","0e07b68b086b0d17ca8872e76bfa29c6"],["/2019/05/24/vue/vue-router-parms/index.html","ef3ee7bf496f1052f3e64a532982c58b"],["/2019/06/04/vue/vant-list/index.html","b1117d97bd9f9141ca000d439607dbab"],["/2020/03/20/hexo/hexo-gitalk/index.html","721f21844d176c133769a3308382621f"],["/2020/05/12/vue/vue-proxy/index.html","1ffa3196c932c9beb01db9f1ada2e6f6"],["/2020/06/30/hexo/hexo-move-mac/index.html","67784a7eb6cde726abef20c64995ae92"],["/2020/07/03/vue/vue-network-online/index.html","60d779cbdbb69f88a59ba1ff968278b0"],["/2020/07/07/nuxt/nuxt-i18n/index.html","b6df4ffc1b22a05420bfad7487e18c1b"],["/2020/07/09/nuxt/nuxt-proxy/index.html","3c4d93b297c594cb7cd97bdd24cf4553"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","6e84a56493f2b2b0547eac165666eeaf"],["/2020/07/13/less/less-var/index.html","fece4e2c415af7d0727e2acedc53d5bf"],["/2020/07/23/life/life-big/index.html","30ad0338b390c5b0aa85e8c5ed7b2941"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","7423522fece54bda02cb200766c179ce"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","a5ce78cb9f2916e9641aa672bf0357b8"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","53d36b072ce166a79bc978dc877779bf"],["/2020/07/27/other/zsb-math-gs/index.html","e771e565555789d4f83fec4d89460403"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","cbc0ce978c0b2407632a41f0ba5222e4"],["/2020/08/06/other/target-2020/index.html","e0685780b90f6f5492d54dfba13a5369"],["/2020/09/27/npm/package/index.html","fa886cf0e2eafbf588b2d054e3d8daa4"],["/2020/11/02/html/emmet/index.html","f4a245a1764510eb4591b7c202c70031"],["/2020/11/15/flutter/basis_one/index.html","1945a0477036de17c48d7db47f86951c"],["/2020/11/23/js/change-url/index.html","7298ce5d081a74ac3c14994f69b0f8cf"],["/about/index.html","13a1bcd661f7662b7e74ec7a3e8fb2d3"],["/archives/2017/08/index.html","90cc33f5bd000045a89b3fd49efa8f1a"],["/archives/2017/09/index.html","6e1271d98bbb4254c298c811d332e4e4"],["/archives/2017/11/index.html","5f2de868012ab33817e3954a7f056f60"],["/archives/2017/index.html","a48be1bf7f3b58c0e8a058a7a0396078"],["/archives/2018/02/index.html","ea3469f630398b99e9b85567f74de18a"],["/archives/2018/03/index.html","6081d4b352d7a2912269fdf984a3007b"],["/archives/2018/04/index.html","873ce6f77a871c8607037f6aa5b395a4"],["/archives/2018/05/index.html","c09515d29e0bb830765d5f44f99e56fe"],["/archives/2018/07/index.html","fc2990bc05c4e10ba654ed69ec8eec21"],["/archives/2018/08/index.html","3148561828f1b5b35bc6d6fafea9d103"],["/archives/2018/09/index.html","b94ce7f45a4d0cd28a680d14f0feb1e1"],["/archives/2018/index.html","6a25a6eeeef8b934a94df071747cdd30"],["/archives/2018/page/2/index.html","e5b809223812a6b6c436146b0f9057fc"],["/archives/2019/03/index.html","92ee3f0dba9368d92eb8c7d8dc03249c"],["/archives/2019/05/index.html","b4e703487974f32ec37b22ffc14fa5ec"],["/archives/2019/06/index.html","6a664b84897f368f434a27493091e7c5"],["/archives/2019/index.html","4161bb9b85cd156700d79971029deb2a"],["/archives/2020/03/index.html","49dcf5ea33bfbafe85df2a9d9d1240bc"],["/archives/2020/05/index.html","ed0339de5399ab8c4f7dcab6ff16767e"],["/archives/2020/06/index.html","c6e1cf4bc610c53e7aba21e52e46b223"],["/archives/2020/07/index.html","adfd71efeee4e9813a4b672ba2b84431"],["/archives/2020/07/page/2/index.html","30dd7d3ad2f939add9898a53f1cb7cc3"],["/archives/2020/08/index.html","72d72de9373fcd88cf88e50f3e5c4892"],["/archives/2020/09/index.html","5d42a902d6188c2204a0309ca834e3e9"],["/archives/2020/11/index.html","6e071966d7eabe1d7484c3f2f2009554"],["/archives/2020/index.html","7733fbff96ad4077cd4e61058c378637"],["/archives/2020/page/2/index.html","75bcdcef6e4c912367e6960d82a607aa"],["/archives/index.html","94ca9b34782f33c9f6a290fec9a13f18"],["/archives/page/2/index.html","b855c9d313d74f62c3dcfedac7fb1d72"],["/archives/page/3/index.html","2b12e7a8c90398eb4bd3cbad2c06bc06"],["/archives/page/4/index.html","0c3db2babd704ec1f8b11a35c395909e"],["/archives/page/5/index.html","54a039a0bfa50ecbd501bdb0822fd6de"],["/categories/Emmet/index.html","72d3458b9f08f163d51fe3546fad320d"],["/categories/common/index.html","e726040c685bdea392e3ac57ad61c5c7"],["/categories/cookie/index.html","22f1a7d911057f2035f9b8462847a827"],["/categories/cookie/设置cookie/index.html","bf8b95a8c2ae1dd52923df909845af1e"],["/categories/css/index.html","f245f42da169a2366ef3b2b18afc31d8"],["/categories/css/三大特性/index.html","1d59c78d6b7917930e9dd803e3fcff8c"],["/categories/css/不常见但是实用css属性/index.html","5b54d61b2e7bdfa462307db0df9ac1f4"],["/categories/css/中间文字-两端横线/index.html","7917535a12e0984f596bb379cec5bcbe"],["/categories/css/块级格式化上下文/index.html","e0511503febdf6c8ee0dbbef6a00432c"],["/categories/css/水平居中/index.html","c9ce5e273b2fc4edd4fc1fd6285a7dcd"],["/categories/css/负外边距的巧妙运用/index.html","82825ae9cb124d9d4cb3c3e812e1e9ec"],["/categories/docsify/index.html","34c60ab2646423f4ecfe621505eb774f"],["/categories/flutter/index.html","429785129f56daf12c4cbaec73712d83"],["/categories/flutter/基础/index.html","39ee7ff0f2bf0c0d6c1be202ad873e5d"],["/categories/hexo/index.html","bddb9b94959f3d27d6a5fcf449e5bc6b"],["/categories/hexo/windows转mac/index.html","8715f74634785d038c2516a08081a5b8"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","a7ee1fada438bc711e25ba7baddae2d7"],["/categories/html/index.html","f703576c3a2d876280a8857aac68c199"],["/categories/html/基础知识/index.html","97cee47c11e19ed1e5c0d0cd434f2bcd"],["/categories/html/页面布局/index.html","70352f563e99eff4f916d4f8cf2edaf6"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","177eef292ace1b5768a2173374415d11"],["/categories/iconfont/index.html","fc532bcfa103e71f7d42ba39349bb739"],["/categories/index.html","b5723a56397fabf79a18e9e4b147f860"],["/categories/js/index.html","e0d5e01e9f2401c6931fe01eacd1ac33"],["/categories/js/url/index.html","5e674164c8404ffc8fd8a2a216828e1a"],["/categories/js/原型/index.html","9c0dc340555a333444c8ac048ce922a3"],["/categories/js/正则表达式/index.html","003d51d2d26e03e8aaa76ecd7c0b4b72"],["/categories/js/获取html到fontSize大小/index.html","8fc8f0101c956a7e422d086e00023d88"],["/categories/js/获取url的各个参数的值/index.html","93fe6f07ead6ad8ea633decb64b87210"],["/categories/js/闭包详解/index.html","fdb2f5d111b308af1c00183d4396f652"],["/categories/less/index.html","a234a420f2a1ac372526d0f4d9e2e44c"],["/categories/less/全局变量/index.html","5ad40dd0fe44f5add997ec5030ab4278"],["/categories/npm/index.html","fdd22f36a0a2821505198b5e9522cb4f"],["/categories/nuxt/index.html","fcdfc9f8bb83c24fa44b0ae52def365f"],["/categories/nuxt/代理/index.html","e2a1528d10c9010abe23859c2f50c4f1"],["/categories/nuxt/国际化/index.html","160c741b9b7b5e35fb27cb586b7fba28"],["/categories/nuxt/页面刷新数据丢失/index.html","9d703ec93fca7de2041e387bfb518789"],["/categories/vue/index.html","9a0ff1f070865b42e555954a5c1018f9"],["/categories/vue/router/index.html","a8656d5ab50d81d48917e1810f8452eb"],["/categories/vue/代理/index.html","20248dcdba38bac6db22f84225fc4ccf"],["/categories/vue/国际化/index.html","2891da0bb01e247907a5c3bf9d85ca3d"],["/categories/vue/时时监听网络的链接状态/index.html","9dc5a35ec95a7f9c206d9532d2e2df11"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","9fbda15e730448d74ba8da2d54c0cbec"],["/categories/其他/index.html","44feb44b85566a688a5a23b93a3cbf77"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","e1e69729517cdc198b43ff9ef970b8d2"],["/categories/其他/目标/index.html","33536b7a32d01fd8a35cd07694660ba6"],["/categories/其他/规范/index.html","357f8f0cd51bbfcdadb526cb7a9c842c"],["/categories/其他/高等数学/index.html","6f35108eb4fb0cd76da9f5db9b39ce8c"],["/categories/小程序/index.html","62d6e445ffe776e8f0e67535bb4346cd"],["/categories/小程序/wx/index.html","a798366f2ef5f351695eeedde86c9e4d"],["/categories/数据结构与算法/index.html","b9a2687aa9d8c028434cf645c52968d1"],["/categories/数据结构与算法/图形结构/index.html","72d9971233375d1cfd24c4d503e52cd4"],["/categories/数据结构与算法/排序和查找/index.html","be719a1d8c0b72642022fa78d52db08b"],["/categories/数据结构与算法/树形结构/index.html","e3ec582c6307509a347b779e4689f39e"],["/categories/数据结构与算法/线性结构/index.html","8e531e455761b852ead70b9641e4b5c2"],["/categories/生活/index.html","45b7f38cd2d2a14224b929954c0050d7"],["/categories/生活/长大后明白的道理/index.html","f2aa09558b9bb599d78f13ab67870d33"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","0bfb1bb5636f3e7cd851d2962d9bddca"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","dd9b5dc7e9aacc7e5cd6aaf18378e4f1"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","b34f567e472394cf29574dc44e948e90"],["/movies/index.html","2d16203af07563ca152507e12fbf83a6"],["/music/index.html","0f9cf971393363ee6bc992c8812f2d57"],["/page/2/index.html","b3ab809fff1cef7defc458569d16bd1f"],["/page/3/index.html","bf9e26868b8dfc34106c82bb85edddf6"],["/page/4/index.html","07e699322b6d127c89a35e10efcd0ca4"],["/page/5/index.html","0adf9f8134a86439f6c3c0a189dbf208"],["/photos/tangyan.html","092ba7361611594e8c70478a3eb26003"],["/tags/Emmet/index.html","0b418ac481cf67fe59ad035590c3f1c7"],["/tags/amd/index.html","cc984ff5163170c75bf72d02b22d8c61"],["/tags/cmd/index.html","abc063dc09891c4856c4d77385552191"],["/tags/common-js/index.html","b65c273979f2da388933ecdbb3aa0f1f"],["/tags/cookie/index.html","b22e1b081e0292fe5da3eb77ba34e364"],["/tags/css/index.html","b32eca6bda2257489832c6d51a87f974"],["/tags/docsify/index.html","8e7eacd922bc8e6e958c4ba8ca71e421"],["/tags/flutter/index.html","2dae3e7575585258d89ff6be023ba98b"],["/tags/hexo/index.html","a22961c831e118c5bf60937cef8483d3"],["/tags/html/index.html","a49014a4cc451bfc434a675c42ab6412"],["/tags/i18n/index.html","2cc283d6737f0a7bac8eb927b2892c2a"],["/tags/iconfont/index.html","0160f4cd3486e3ddaf21d38cbf66024a"],["/tags/index.html","1c5f9124742bbecd8de23bb3d838c0b3"],["/tags/js/index.html","5d5b29f540c3376d5b35df3c6cf79b10"],["/tags/less/index.html","9bf7bce91fb17fc47efa8a56029f9351"],["/tags/npm/index.html","e02f88ac5fb5917ace376e7d767aab52"],["/tags/nuxt/index.html","1c9aa9519142472861d6be822a1c0adc"],["/tags/proxy/index.html","0822c270247810864a6c603acaedc759"],["/tags/vant/index.html","d2143254c909eb6a0f72831e30b1ef0e"],["/tags/vue/index.html","52a68b8ae622bc3241a1a97de874e78b"],["/tags/其他/index.html","44c22e3ced3a8563f6f42cc1d6f24b8e"],["/tags/基础-一/index.html","7248426f122c84015dc719a5e1dd1ecb"],["/tags/小程序/index.html","1bfe14039592c4ff4f7d6b94e3c4b7c6"],["/tags/数据结构与算法/index.html","a3057477561ee48f464fd0c8f922b9e2"],["/tags/生活/index.html","a36f9774de3804c4a477cfccb1943881"],["/tags/目标/index.html","a7dd1e2cc7c78b576d524c3a59ae6830"],["/tags/规范/index.html","7b65897a6b183b6c3a888a85868a73fb"],["/tags/高等数学/index.html","c659e3312819584d1a743f41effc094c"]];
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





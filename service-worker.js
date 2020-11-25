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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","445a0be61bae5a2d2acb651afb5fd867"],["/2017/09/12/css/block/index.html","7089fc7cd236c5690a573071848456d8"],["/2017/09/12/css/css-properties/index.html","6cd702d812ca3e2fbbcc1cfa89a577ad"],["/2017/09/12/js/closure-js/index.html","fa3bbddfc920c65b3ba9c3d76a3794f7"],["/2017/09/12/js/prototype/index.html","0752bc05c8ba41db6b850634fa854148"],["/2017/11/12/cookie/set-cookie/index.html","17877076c8b41dfb74a49628d7886a14"],["/2018/02/15/docsify/docsify/index.html","b49aa6beeffee77bab6dd8d98b451da7"],["/2018/02/15/html/divCenter/index.html","b5057f096800c9da3fbb4530a515f234"],["/2018/02/15/js/RegExp/index.html","550785c45b3ff0cae114bb67d7a0453e"],["/2018/03/21/js/js-set-html-font-size/index.html","50454b16e26e02a1d45e65624958e032"],["/2018/04/15/wx/login-wx/index.html","a4f8f0d62f634aecb1f3731158b1f6bc"],["/2018/04/19/other/norm/index.html","614824da5797b969edcb09b408c09fa8"],["/2018/05/12/js/qureyUrlParams/index.html","2113e3c298485127360cd4aef2072a61"],["/2018/07/13/html/layout/index.html","fe633806eef89f2c92fa755b6f2747b4"],["/2018/08/15/js/amdcmdcom/index.html","4cf3e057f57d7bb884e95e86e3affff1"],["/2018/08/15/vue/vue-1/index.html","7f70098ba7c2b781685e470665809b37"],["/2018/09/12/css/css-line-text/index.html","ef0bc0940f02295ae6ecd819e06c8c2e"],["/2018/09/12/other/classic-article/index.html","011172d41f2a81cf25f2e3a8f9a19b98"],["/2018/09/16/css/css-attr-practical/index.html","d73186a4a34f28c7eedf7065ae6d3b24"],["/2019/03/06/css/css-margin-negative/index.html","03e99200e81c2faebbb6ce8e4529be29"],["/2019/03/21/iconfont/iconfont/index.html","8be8d80d22e5b928ffea66b8046482ac"],["/2019/05/18/vue/vue-i18n/index.html","04978e1764d912d63c09879c2315ce4d"],["/2019/05/24/vue/vue-router-parms/index.html","e2840a9aa716ce059dfdcf0a5b00193b"],["/2019/06/04/vue/vant-list/index.html","70413c388ee8e7242c748f37e796c3d9"],["/2019/06/04/vue/vant-ui-code/index.html","e30f60268cabfabc529a361a1e46f95a"],["/2020/03/20/hexo/hexo-gitalk/index.html","479c93e92a56c0d7a31a9d09ae442bd5"],["/2020/05/12/vue/vue-proxy/index.html","4b6d5f491b7d3b8fdb7d0878eea4a68a"],["/2020/06/30/hexo/hexo-move-mac/index.html","61c035b9de3ba241fa5351b9c24cfdfd"],["/2020/07/03/vue/vue-network-online/index.html","e8ddb193c4ec5f58de72b6427b68c148"],["/2020/07/07/nuxt/nuxt-i18n/index.html","4e0dfc948802fda95f5baeb4b7a65198"],["/2020/07/09/nuxt/nuxt-proxy/index.html","bfbb380380ecb4a4a651e8d26f93b5e1"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","cba990ca8fa2ae0df8972921e3a8494e"],["/2020/07/13/less/less-var/index.html","e941d7c867c279fe25114db5b1a58f12"],["/2020/07/23/life/life-big/index.html","f1ac5bc7501882f63292c7a66f34d6e5"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","2c2a56fb546e099c6f3fe6f396e8bf07"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","c7e64904f49aeb7cc6d71fbd9272eb8d"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","6f7c56a424831513c11df19a5f94d34a"],["/2020/07/27/other/zsb-math-gs/index.html","da0ce222c7124f8faab016da02015f55"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","50952b1b534df1606752a276b970c710"],["/2020/08/06/other/target-2020/index.html","efba66c36fc2b5aec29ca007e4872c35"],["/2020/09/21/js/log/index.html","9c7a65eaa91f5c332730d389e59a0c3f"],["/2020/09/27/npm/package/index.html","0bf80307b4245df69b1190b439d75ce6"],["/2020/11/02/html/emmet/index.html","f967b5c7a78eda065f376336c761a487"],["/2020/11/15/flutter/basis_one/index.html","315d7092fb2daafba42a7426ce86a88c"],["/2020/11/23/js/change-url/index.html","70a6c0387b9da1c3cbe0826175ee11ca"],["/about/index.html","052ed1f056ce8141c9e628cd178663b9"],["/archives/2017/08/index.html","e509673e62fce74a65731fa36c283337"],["/archives/2017/09/index.html","91e11a0ceca02d91424fb22b8f3a166f"],["/archives/2017/11/index.html","8ff5da32036b02dcd6437a36352676fb"],["/archives/2017/index.html","bed977e96fdc34cfe6df8cdd8f9043c1"],["/archives/2018/02/index.html","3c48a09bb7d59ed0b6da51f918f624ef"],["/archives/2018/03/index.html","bfc6795431f533be18e7de6bb76513a0"],["/archives/2018/04/index.html","01e33b0561ef691f44eef223623fb72e"],["/archives/2018/05/index.html","ee3b40b4b169784b6be49dbd782ab8e4"],["/archives/2018/07/index.html","b61d05ea85615debaba642b9530c7fc7"],["/archives/2018/08/index.html","f165340ef55eb5a2b99505a6ab2d9cae"],["/archives/2018/09/index.html","37543aea293bf1df6e255ab3314e1b55"],["/archives/2018/index.html","af2ffa7ca50e9d2c25be81c46b3fd4c1"],["/archives/2018/page/2/index.html","63973476b00b0c0d2c4d15e57d6be216"],["/archives/2019/03/index.html","c593e7ab42425b648eba25cdff366512"],["/archives/2019/05/index.html","cb0f8541516c674e313d45826a289cf9"],["/archives/2019/06/index.html","5a84cc0430b58262963d820b8ff01e1a"],["/archives/2019/index.html","4bc9b3e892affbc217f9714fdf4c0207"],["/archives/2020/03/index.html","1bf0280686f11b74f0082cd1a3483552"],["/archives/2020/05/index.html","14a88a39de37b67de7a27c0fd69e2761"],["/archives/2020/06/index.html","d231d2ff6c5ff292d29465bc0354584b"],["/archives/2020/07/index.html","090f006f6ffebab5a32d75627edb0228"],["/archives/2020/07/page/2/index.html","152220269d26f4fc9d4f4d129e9eb0b8"],["/archives/2020/08/index.html","d7073e207d46330f9c153a28e32753e8"],["/archives/2020/09/index.html","c0347ac7cb00846c2937f8b62f067f20"],["/archives/2020/11/index.html","ac07b5e213381014c2478b0e212717aa"],["/archives/2020/index.html","cd4bc5ddd7d2e594bfd897a3dc1c9239"],["/archives/2020/page/2/index.html","d093e48dd2f6de9ef9c2ed2975beff46"],["/archives/index.html","cd74d62cc80335ed903d69de0a167516"],["/archives/page/2/index.html","55ef30bb7751bf0a02638308da171e1e"],["/archives/page/3/index.html","d639f1c1674a649aa68bb2aa640b9d0a"],["/archives/page/4/index.html","3b3fca155def3e531138d88ea16484e5"],["/archives/page/5/index.html","12ac8e60ab0ff0524b656a9b30be2942"],["/categories/Emmet/index.html","d9d05ce212236ee58f6ad6b37cd4fa59"],["/categories/common/index.html","2a6f216eb6d748f3ce64fe312f1915d3"],["/categories/cookie/index.html","70eac7f73b64cdcdee3348877dfbc5af"],["/categories/cookie/设置cookie/index.html","b212beab2a8269d7396290d688c07030"],["/categories/css/index.html","3a5b6a4b3aeced1342bc4f811e447eb7"],["/categories/css/三大特性/index.html","439e991e6ccabee42b84c2e438525d7a"],["/categories/css/不常见但是实用css属性/index.html","351d220f47f13d4024d738f79bce215b"],["/categories/css/中间文字-两端横线/index.html","a0a98ce2a797ad1a963b28371d9ffccd"],["/categories/css/块级格式化上下文/index.html","fbc26120a5061ead8fb8037848e46c73"],["/categories/css/水平居中/index.html","b3e4c0fe0abc8e1f6dc4c4b706643571"],["/categories/css/负外边距的巧妙运用/index.html","4873e67673b4312bd0dc8bc87272aa47"],["/categories/docsify/index.html","aa1cd96bf29b139f9b21afa4c8279e73"],["/categories/flutter/index.html","36701d5f5c7c4c6738c0ad41d20dfb37"],["/categories/flutter/基础/index.html","8ec2b49e32da1ef9df190235ade60aad"],["/categories/hexo/index.html","771ff783578a2f38d173f2e6566787f7"],["/categories/hexo/windows转mac/index.html","8f6b7c21acca2b8fb9b1feb2493b7c6f"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","85e6b2cf222098c3d2cf9af2adb2b909"],["/categories/html/index.html","1b86f54289ca9cfe899de2645ed72c88"],["/categories/html/基础知识/index.html","593b0e481c1ed64c542dfc399074e29f"],["/categories/html/页面布局/index.html","c5abe99d15233853f38d69dacea03426"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","80111f69f66178462de58e4389cb8d8f"],["/categories/iconfont/index.html","071104f3b59195e6d7ae85d4b37f794a"],["/categories/index.html","08a988307317e5d2b9a056a68b3b5bc5"],["/categories/js/index.html","7d7e1eb508a42fabebcb89490fabbfa8"],["/categories/js/url/index.html","0025858dce8cd65617314ef980735098"],["/categories/js/原型/index.html","aa2780afc07582d3f32a92586358e820"],["/categories/js/正则表达式/index.html","a37a2ae7c33c838c4523c9b4cfbdca7b"],["/categories/js/获取html到fontSize大小/index.html","a9ce69a58b160cb48489afb0035014c2"],["/categories/js/获取url的各个参数的值/index.html","93bdfb1a55d13e61cae6359388da17c3"],["/categories/js/闭包详解/index.html","7616e059267a3fd768a886b5c2c2a6ac"],["/categories/less/index.html","b29fe8ae76551eefa83ec52d31fb8a98"],["/categories/less/全局变量/index.html","771caf7b221438c4fbd420363af116ff"],["/categories/npm/index.html","89424bb7662a3a4d44375839e99f89f2"],["/categories/nuxt/index.html","e7a33f8e409d44effa79917fe5c99510"],["/categories/nuxt/代理/index.html","7c4be782e87700824d8343c9bfc60147"],["/categories/nuxt/国际化/index.html","c822a22d519d017448ba9ee05f4c7e33"],["/categories/nuxt/页面刷新数据丢失/index.html","869d5606f32b46628533ce916528d3e9"],["/categories/vue/index.html","68d7c640db6999c9b7a20662103e7f7c"],["/categories/vue/router/index.html","5533a0b72d86bb29382c3bcaa0ef1abf"],["/categories/vue/vant/index.html","8fbcdf47d1c4d6fdf03bab23adb58c65"],["/categories/vue/代理/index.html","15f6340f5d17fd317dc4b572e5f423ed"],["/categories/vue/国际化/index.html","294157a5e6ea04ccd76244db6b7f1efe"],["/categories/vue/时时监听网络的链接状态/index.html","781b87cd5a97c7fcdea6fb82f9c1d6e6"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","9e69b97364119fa05ec02072d903d70b"],["/categories/其他/index.html","d1ea46057b6d33df653dded0e6af0c4b"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","d5d3502ea64ea21e5f9e2f8fb77ee29f"],["/categories/其他/目标/index.html","afc3f0ccc246662368e7b5cbdab99925"],["/categories/其他/规范/index.html","38f546769a0a48d673e8102b19befc92"],["/categories/其他/高等数学/index.html","0382df879a0ec3e046920b9496739863"],["/categories/小程序/index.html","3cdcfdaf720c5ff45dec1db767b009eb"],["/categories/小程序/wx/index.html","906c40e3b33e9e30b0a93548a563fdd7"],["/categories/数据结构与算法/index.html","4451f440c96f39f36d7b787699b19df6"],["/categories/数据结构与算法/图形结构/index.html","d4c48e686c53663a57bd7587ae2d32f0"],["/categories/数据结构与算法/排序和查找/index.html","4c4cf67f0ab60e34f4dceed0a166b979"],["/categories/数据结构与算法/树形结构/index.html","1eb551ed8c7ea386509c030894645689"],["/categories/数据结构与算法/线性结构/index.html","36d9063e9090f97fb8bbbad46e6df4a5"],["/categories/生活/index.html","31208efe83eab24812380085bd7f5a99"],["/categories/生活/长大后明白的道理/index.html","e17144a5b563684101ae94b8f82fd4f7"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","2931a9e9f8d5a2d074be39affc33e0de"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","a1652eb4d668afb596272191ff44a82c"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","32745280f52bb5e17fe9f8673fca8149"],["/movies/index.html","4fb46badfe8daddf7826a8563a5e85ce"],["/music/index.html","f472e5fe149bea7442a747cdab81374f"],["/page/2/index.html","17d64847c26e0cb3d6d6df14d5be1229"],["/page/3/index.html","c18c1e65ee49857b69d2cf78b22b35e2"],["/page/4/index.html","4ecc61141ee2932c6af840ec1def7caf"],["/page/5/index.html","b6626b0acf96b31a2d0d9f8f4c42cb6a"],["/photos/tangyan.html","aef00db5fb2d7f34cd19717d36d7209d"],["/tags/Emmet/index.html","d9eaea8621769ee044e42a730ae41b2e"],["/tags/amd/index.html","1ceed3dc9d7e7b1d29c9ba1975eb2a92"],["/tags/cmd/index.html","28929bfdd9a27bf166b53456eb80ccfa"],["/tags/common-js/index.html","dc91d0d98c3b34fcdc07d4a7f445541b"],["/tags/cookie/index.html","36cbf5724bd2e522751019396a02872c"],["/tags/css/index.html","3444bb9f2f72a0b3c97472139e0bd6d0"],["/tags/docsify/index.html","e5faa9f7bc70f509b432455616bea6e4"],["/tags/flutter/index.html","ae9f42e29e836fbd282929a205282fd3"],["/tags/hexo/index.html","ea5a45ac9f570f1c09704c695955bf77"],["/tags/html/index.html","8a99878c492e5d02e12ba6ef873e160b"],["/tags/i18n/index.html","e295c9adbd81d621d6e02913d7d1efd9"],["/tags/iconfont/index.html","008b234fa5dfd945a2a8d73c677da6ad"],["/tags/index.html","1aeaa17de4e28ebb12975de5da43b32b"],["/tags/js/index.html","1b3123cb1096e767227b528dbcfc8c29"],["/tags/less/index.html","f47a42d7b69b34f1262b2489e6e5fd1e"],["/tags/npm/index.html","873c0dc30b0a96ef8a1dd04d38156c9e"],["/tags/nuxt/index.html","77599ccb87116db693dedd6dd85c7049"],["/tags/proxy/index.html","9697634ac33d5accbc4b8ba079af04e0"],["/tags/vant/index.html","d0b2e2cc8c1a75d0a023ad37a58947b0"],["/tags/vue/index.html","ee2b626aaeb202cc63c2e3182d5d444c"],["/tags/其他/index.html","27b08fee5efe6e46a567712d4cc01792"],["/tags/基础-一/index.html","edc7d47e1157bd725e345c88f018edf7"],["/tags/小程序/index.html","872a52bfc615c1de75ac0d8284be359e"],["/tags/数据结构与算法/index.html","924d3f8721b2abd496ac357a223d593b"],["/tags/生活/index.html","7089f838b74321c8287d9e60b562b9db"],["/tags/目标/index.html","168b66343422d4a1548685f449527fbd"],["/tags/规范/index.html","f3fee0b00c4ee87f14561e0ac2c199be"],["/tags/高等数学/index.html","5085e0700fd23a7f5194b3e8b140131e"]];
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





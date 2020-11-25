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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","d7684ce461c104a1b4f78bf48091819d"],["/2017/09/12/css/block/index.html","b61b2724cd23be95fedcb79040b3f3db"],["/2017/09/12/css/css-properties/index.html","478b9cef49189465bff44ae7ed818335"],["/2017/09/12/js/closure-js/index.html","abdde83f5f1286e1455f599d8de338d9"],["/2017/09/12/js/prototype/index.html","59b962c6992ec53ceaa38d1cf3d0427c"],["/2017/11/12/cookie/set-cookie/index.html","beae36f5fd14681f68d9b0c0bbe4bf99"],["/2018/02/15/docsify/docsify/index.html","ca60dc60fbd0ec47974fdc82a7496812"],["/2018/02/15/html/divCenter/index.html","f25fc3a5ef37faf6c4faf8c20b474a41"],["/2018/02/15/js/RegExp/index.html","67be6e4cda2f5fa987d0f8f3c5dfbfbe"],["/2018/03/21/js/js-set-html-font-size/index.html","4729d82bc6d70af8a037452f8e1fd4a8"],["/2018/04/15/wx/login-wx/index.html","5d9f7fc3b2d7eef572f0c5e34348cbfb"],["/2018/04/19/other/norm/index.html","41d00644bf15be2bd355f9a22ec0880d"],["/2018/05/12/js/qureyUrlParams/index.html","1ee4ca91adb684f78a5989262f479d08"],["/2018/07/13/html/layout/index.html","2a811436aaab5dc4a0eeb26a4b6aeb85"],["/2018/08/15/js/amdcmdcom/index.html","d332ac00586a0808d1426a528e63d445"],["/2018/08/15/vue/vue-1/index.html","ef16cfc62847dfd8d5d58ec54dccf68e"],["/2018/09/12/css/css-line-text/index.html","899bab7214ef5d6e5bde5bf94c91b5b2"],["/2018/09/12/other/classic-article/index.html","5912ed3870e63256c0f829e4c4fb54bf"],["/2018/09/16/css/css-attr-practical/index.html","6714d640633cf54dd2af8d653d379f8d"],["/2019/03/06/css/css-margin-negative/index.html","c7380750ab1cc2b3970552e824655c37"],["/2019/03/21/iconfont/iconfont/index.html","dd41026b3759e97d64ba6fb24868b5f2"],["/2019/05/18/vue/vue-i18n/index.html","cc1c7cd23d8a80c7b708bd2fb48dee04"],["/2019/05/24/vue/vue-router-parms/index.html","269c545f1b9d78a6d0d1144eaa3ad0af"],["/2019/06/04/vue/vant-list/index.html","9fe5409421658bb45b5d96278aa198f9"],["/2020/03/20/hexo/hexo-gitalk/index.html","bbff59c01b2fac6d395364fbd13be3ed"],["/2020/05/12/vue/vue-proxy/index.html","5cabc8547a14f40643c939d560ec6708"],["/2020/06/30/hexo/hexo-move-mac/index.html","250d23e6bbd6d81428114e96975a2653"],["/2020/07/03/vue/vue-network-online/index.html","2f46516e90ca3a5744babc82a9497315"],["/2020/07/07/nuxt/nuxt-i18n/index.html","116f4267e36c82e225f19f288005a1c3"],["/2020/07/09/nuxt/nuxt-proxy/index.html","6d7140f774da56d8eb904d4fecb250a4"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","e011072eb0ea0728ac2fb0968303c5c2"],["/2020/07/13/less/less-var/index.html","e6d3f0dd908770ec2d7c1ec35dd13727"],["/2020/07/23/life/life-big/index.html","376009ab32dcddb4381f85f87077d8e5"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","46bb434b706370664b0978d76a5d1b71"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","ccea1f18cf68d97726d8f61d22e5c8ad"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","9fd06c3a1b2f008f37c18959e6d69c00"],["/2020/07/27/other/zsb-math-gs/index.html","65da2baa08b39ff0bab5e6bacebcf210"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","5b67282bd4fbea1d7155c2a17d570b5d"],["/2020/08/06/other/target-2020/index.html","baddf532b4a1311241db2c07b45caa52"],["/2020/08/20/css/effect/index.html","f18db99ad4ce352ae162a1d7f69653db"],["/2020/08/27/css/unit/index.html","901d615de5dca7ad54d4de5281848837"],["/2020/09/01/react/antd-mobile-theme/index.html","bc8788b1af1fa685a32d83cf4a62a56c"],["/2020/09/09/js/js-cookie/index.html","650a885506ffba3735d3a75acea6caed"],["/2020/09/10/vue/vant-ui-code/index.html","6c07a5cf0fdab5a8bed291236a1b4c23"],["/2020/09/21/js/log/index.html","933141d0dd9c43632ab0ea46681a75c3"],["/2020/09/27/npm/package/index.html","182215d9da235141eea05cded454bc27"],["/2020/11/02/html/emmet/index.html","a4c0986f99ca486ba6cf51ece51f79ee"],["/2020/11/15/flutter/basis_one/index.html","7193ee48bd4ff140288f5e4002659494"],["/2020/11/23/js/change-url/index.html","d68874b2f3035b1a9a474a9ca8b7c2c8"],["/about/index.html","3c12e94abfbbc80ccd3a594e16d0c3d7"],["/archives/2017/08/index.html","46ed9b7a3f110182eabb9ae6feb0859c"],["/archives/2017/09/index.html","4189df59e793310521d3b816afb505ab"],["/archives/2017/11/index.html","e76ca71bd52cef5a75f8b4dcac84f7de"],["/archives/2017/index.html","b7ac2cd721cac1602b935635f4deddc2"],["/archives/2018/02/index.html","bae7b457272c6182a6c77747118e908c"],["/archives/2018/03/index.html","41e655ddf07f1344bfcae0d4095eedda"],["/archives/2018/04/index.html","850d7f083896892a84f2d16a38072ed9"],["/archives/2018/05/index.html","ecf6ed3c4806b5446cb0631afafd0bdc"],["/archives/2018/07/index.html","9c8b5865aba64e3594c1f341b2d47b60"],["/archives/2018/08/index.html","539a348d0c826ccee7ec43a7b7b22c8d"],["/archives/2018/09/index.html","bfa9d0eb11d9cc9d0276e93d333f1f9c"],["/archives/2018/index.html","3d13bdc2785715bacf5503641a8413e1"],["/archives/2018/page/2/index.html","103c2be2649869ea8c8e26c236b2e4ae"],["/archives/2019/03/index.html","61d393074b6c625d641a72b4f8a5b03e"],["/archives/2019/05/index.html","5f5a9fc5d798f212b387b7b704178fc0"],["/archives/2019/06/index.html","5289031e90368cc7d1354c08f13c6509"],["/archives/2019/index.html","971d339ecc68311172373e85fb98064f"],["/archives/2020/03/index.html","87d4fc1644a20343b886b1304aadf76e"],["/archives/2020/05/index.html","cb3e6ee624dcee3eac06a7c9673bc00f"],["/archives/2020/06/index.html","c57017d6205899aa597241f8dd43b319"],["/archives/2020/07/index.html","11875bf0d5f39ceef2259552ebab8fea"],["/archives/2020/07/page/2/index.html","7f5f88f7aaf4056440a5ea3315ec67d7"],["/archives/2020/08/index.html","39bea142a2c15ffeede61f60377b64b4"],["/archives/2020/09/index.html","f5ce881b946a3ce0847b506008e9f0c6"],["/archives/2020/11/index.html","1659de8e73606fa536c353ed2807a99d"],["/archives/2020/index.html","f1820cf08fe7a50e623788426f4b4669"],["/archives/2020/page/2/index.html","5d89f0a14ec05a0dabe38fa25b68c9c2"],["/archives/2020/page/3/index.html","85e94febe068e75490594cd8011c1499"],["/archives/index.html","37535a850ee725bdbc2f1d55a492ecee"],["/archives/page/2/index.html","b83038fa3a285da0305950959349dbfd"],["/archives/page/3/index.html","f8c8aea852e5872154331d1f1a11e028"],["/archives/page/4/index.html","aaf7c09c8da15c64303f467a2ad08dde"],["/archives/page/5/index.html","617f46f11062f938a919efc22800725e"],["/categories/Emmet/index.html","f93e353a8fa232fe6278184bafc1e549"],["/categories/common/index.html","4a3a44b855dca82f17d27d4f396a7de5"],["/categories/cookie/index.html","7e0a6b30638d05c36e9161dbc06e55aa"],["/categories/cookie/设置cookie/index.html","0ded14f0fc72c43fce976ec2aff3ccc4"],["/categories/css/index.html","110196f0720d042d984bf20afc9c2d42"],["/categories/css/三大特性/index.html","81838f36a5202f747a6c3259a6480b56"],["/categories/css/不常见但是实用css属性/index.html","d6122eb1a666ae598f9962e9a2e6c8dc"],["/categories/css/中间文字-两端横线/index.html","3687c4beb9d3c7ecfce651edbbee37d0"],["/categories/css/块级格式化上下文/index.html","49176d9a9ce45befcf6b8deae5c0e84b"],["/categories/css/水平居中/index.html","5ee4af88bffdf0a4b8c99629d6bda91b"],["/categories/css/负外边距的巧妙运用/index.html","a494c7021f4c2385c01385175a346a0a"],["/categories/docsify/index.html","6b173deaab3cfc158165284d33096e70"],["/categories/flutter/index.html","c56c89a35879162b1765ba0f7966b061"],["/categories/flutter/基础/index.html","e93985d62815e5f34269b49a32cbe753"],["/categories/hexo/index.html","76da7f3f59a23506c7dfba1e74a66964"],["/categories/hexo/windows转mac/index.html","9c21fea2ad501fd4b77ce0563a23ee59"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","2682357f37b1674408346e9b1573368d"],["/categories/html/index.html","ebf8b1aa3970cbdd0fea83d6ff54c0f5"],["/categories/html/基础知识/index.html","14acb251760f6362332655faf9e55710"],["/categories/html/页面布局/index.html","582e861206e9a112368104d6fdeeaae8"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","a7264e289b809e186666122791c041d2"],["/categories/iconfont/index.html","3adbb70b847fa85347e0fb8e57281a84"],["/categories/index.html","5245674ef3bb65f4db953e035ea63a20"],["/categories/js/index.html","6377d6d6fd4ad242f7b27f5b8c140599"],["/categories/js/url/index.html","8af9d6dfbcaf45261bfa96ddf583f45c"],["/categories/js/原型/index.html","cae18a0b749dfd7911ce2fe09df1c249"],["/categories/js/正则表达式/index.html","3f193fff273a63cfa1ee42fd5f80682c"],["/categories/js/获取html到fontSize大小/index.html","49412d5b75dd8f306a0769d4231ca925"],["/categories/js/获取url的各个参数的值/index.html","5d73a7b87788c7aa43b115f18ca93297"],["/categories/js/闭包详解/index.html","377acba0f2d45074b82ef17f1d51eb1e"],["/categories/less/index.html","f694fce7e8877ddb77425ca4329d8c43"],["/categories/less/全局变量/index.html","a6c12c1b6feab3a7bfd32eec48e05701"],["/categories/npm/index.html","747c370de218980aa88fd5ad65468145"],["/categories/nuxt/index.html","162b6694ad5d15410fb594c702a91acd"],["/categories/nuxt/代理/index.html","02096f3254b7b2b8f1ab6baac3761119"],["/categories/nuxt/国际化/index.html","ea77bd7de29e9e187a781f2dbdbc8b8c"],["/categories/nuxt/页面刷新数据丢失/index.html","3d1cf10c459d60116869d327d44351ea"],["/categories/react/index.html","ae202aaa7ecfccca723b096870f192da"],["/categories/vue/index.html","0a29253d073189ac67b7b19eb93643f8"],["/categories/vue/router/index.html","010d7f695811daf477305a70aa47b8f4"],["/categories/vue/vant/index.html","2eb9fbbf5920ceeee1b095d236e99406"],["/categories/vue/代理/index.html","c8debb71239bc351aa4cfde8d9eecbb7"],["/categories/vue/国际化/index.html","bcd4812f3a9058edc3c09c762be81cee"],["/categories/vue/时时监听网络的链接状态/index.html","2d241b5aa5cc49567c3da326a132d108"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","501ef707cf21e1bcb1ff5f04f1edfa97"],["/categories/其他/index.html","1835115830ddef5963f7885ca5103ff0"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","3feefad117cae1f83676993fe5c15f7c"],["/categories/其他/目标/index.html","30736e9bd3c2ab2bc0e88892e1d4d157"],["/categories/其他/规范/index.html","32475258b29eedcbd567427e3f518a05"],["/categories/其他/高等数学/index.html","4536547a020cd91ff1bb30dae6c89086"],["/categories/小程序/index.html","3f1da252f7bdcddd4b54609dd0c3b1d0"],["/categories/小程序/wx/index.html","1d393549bfe1ff65fbb4364f49f53637"],["/categories/数据结构与算法/index.html","62c667ebd50bc69c37712d0dee49dd61"],["/categories/数据结构与算法/图形结构/index.html","67549496a6ddef35df840db4f8e3f038"],["/categories/数据结构与算法/排序和查找/index.html","06910f3514438c7b634f64408d2f484e"],["/categories/数据结构与算法/树形结构/index.html","12f34717ea374e2c0f26780f552defac"],["/categories/数据结构与算法/线性结构/index.html","d7e0f4f6d01471b3cfb75af8411705b9"],["/categories/生活/index.html","cefb903856b120ee4b1a8a0431cc152c"],["/categories/生活/长大后明白的道理/index.html","96ff98148c9853ed2dbf5dd65c18e9c1"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","d7eb60f3a1fb067718398f66174ccf23"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","9ea4636af28eeb6081560af621918117"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","4a27e3098c88f08e9a299e7f538e6de8"],["/movies/index.html","f30b3b190867aa8643dbee39d0e4a2f8"],["/music/index.html","a1ffda5fc82f130eda2ff78a0ca3102a"],["/page/2/index.html","83a6adf523d615f77799c64711315ca9"],["/page/3/index.html","8d44bb7fe0d6a9ccdc8aa9e9dc131104"],["/page/4/index.html","e640117172cdb03f2dd26fa3706e0164"],["/page/5/index.html","f0b899c9973235907889a31b10a1a518"],["/photos/tangyan.html","e4a35bf0488c05bc6f16a57bbceb0978"],["/tags/Emmet/index.html","104459faa1324a3b343b3837007b6d4c"],["/tags/amd/index.html","72c09e66526c5b8552a7941d20bc8740"],["/tags/cmd/index.html","37d0ae2e8f0c3149a26d07a43920873f"],["/tags/common-js/index.html","357c536a0b9b838b49f36d912ccc0e29"],["/tags/cookie/index.html","5828dc3629b9ef924448ed67f1c8a1ac"],["/tags/css/index.html","f12845371ea49cebcb772fb38f1949cb"],["/tags/docsify/index.html","cb2e533de478150bfce03ea3f4fd7450"],["/tags/flutter/index.html","793a90f413942d36c59c7ed117a57172"],["/tags/hexo/index.html","69841cd23d978406dccee5760059fe83"],["/tags/html/index.html","0657ea2f0e5f45d11d5ed658b2233521"],["/tags/i18n/index.html","4f2f949e5001bf44bc4849b99809eb42"],["/tags/iconfont/index.html","8c24ae407713f0969dc3296894caeb72"],["/tags/index.html","af6b54515640e4b9fa616385a5468a89"],["/tags/js/index.html","3d7a7659c7101feba1b09b43462e540a"],["/tags/less/index.html","6383e343f69f7fd53a8c208861945fa2"],["/tags/npm/index.html","fdb18a5bfc690467c59ccec7750155a1"],["/tags/nuxt/index.html","356dd5ead5775f62450965ab6833aeaa"],["/tags/proxy/index.html","234054b1f97c1d4b912d4f46dc354060"],["/tags/react/index.html","bd1841ef4566ed74492f7d8566cda5cb"],["/tags/vant/index.html","5b7fa5774dc0d1536c824f1fa4de4c4c"],["/tags/vue/index.html","839df2ae361dbbcbc3f8986108d9f9dd"],["/tags/其他/index.html","9cd5bb50eba64292a02546c3c5ae6852"],["/tags/基础-一/index.html","a2bdc02296b3e429b52c6d84cfd44f4f"],["/tags/小程序/index.html","e8327382dbf5be176edc23e461b04378"],["/tags/数据结构与算法/index.html","abd74de9fd536115ae7ac14926185865"],["/tags/生活/index.html","3521b258f6daf290af7130e0d2f8e998"],["/tags/目标/index.html","ed1975312dfcf5b8164b579c8a5077c1"],["/tags/规范/index.html","46f403835fb1b02019acd002f15cc7c4"],["/tags/高等数学/index.html","238f98ec9d26787af16de35fafbe949d"]];
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





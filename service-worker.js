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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","1c6c8fc3e28b801ac48c765518692ee0"],["/2017/09/12/css/block/index.html","642f9b540963f26974b986d566ed2805"],["/2017/09/12/css/css-properties/index.html","eea2df3511621ea97279b1029d16ff37"],["/2017/09/12/js/closure-js/index.html","8187ed797a57844d3feccc6d2a03cc18"],["/2017/09/12/js/prototype/index.html","e1f925d39263d8c7f23cd9806b4da49e"],["/2017/11/12/cookie/set-cookie/index.html","db95085cc976258d39f6a92d4abd3868"],["/2018/02/15/docsify/docsify/index.html","9af776dd7422dbe8950518c081b282c0"],["/2018/02/15/html/divCenter/index.html","031714a568d286a880586384a59f10c9"],["/2018/02/15/js/RegExp/index.html","8fb0c3eec86421e2fc8ca4b00dc9f712"],["/2018/03/21/js/js-set-html-font-size/index.html","05eb21e460c9a757057659994fe6479d"],["/2018/04/15/wx/login-wx/index.html","f60ec68453f64e188dd39cc9033eac9d"],["/2018/04/19/other/norm/index.html","cc4a880bfc75814afca557bdd06bb348"],["/2018/05/12/js/qureyUrlParams/index.html","31301206feff76a91277e59857dcca9a"],["/2018/07/13/html/layout/index.html","dd1b56981edbc2e46d307939f0e3058b"],["/2018/08/15/js/amdcmdcom/index.html","17678aa43d91eca176c91bc9f2cb725e"],["/2018/08/15/vue/vue-1/index.html","5ec797c09c44c87a0fbdf56823339a69"],["/2018/09/12/css/css-line-text/index.html","ee92f7ac2c0eb21611ef1b22b9e188db"],["/2018/09/12/other/classic-article/index.html","976515f51fde0794012404bf1eccd861"],["/2018/09/16/css/css-attr-practical/index.html","6d1c675d1d2ae59c6ed3f4cbac2663e6"],["/2019/03/06/css/css-margin-negative/index.html","5e2ada3f67a4db6dc08f7d58fb17939a"],["/2019/03/21/iconfont/iconfont/index.html","349bcfa891777c0c4afebdc01e134f80"],["/2019/05/18/vue/vue-i18n/index.html","f4ab936a26d9bacff068ed416a503e50"],["/2019/05/24/vue/vue-router-parms/index.html","60238efc4db836a960ac45d5759a2f6f"],["/2019/06/04/vue/vant-list/index.html","6915fe0f2830abd28b0980b0d771a256"],["/2020/03/20/hexo/hexo-gitalk/index.html","fefa6154e75608c75bc2ef8983e9166b"],["/2020/05/12/vue/vue-proxy/index.html","dad3d7e9b74ddf4c9458af4195249359"],["/2020/06/30/hexo/hexo-move-mac/index.html","0eea0ffbbb1475953a1ec5509144c48f"],["/2020/07/03/vue/vue-network-online/index.html","5bbc52c9fdb3c3a9d86f2bd1d7ff52a6"],["/2020/07/07/nuxt/nuxt-i18n/index.html","7b92f86b5019d06e925b9a436ee98940"],["/2020/07/09/nuxt/nuxt-proxy/index.html","bd4d9cd836159e1169ad49b3f595be10"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","5cbd0fba3f58d27ae42dc2e417d1ce0d"],["/2020/07/13/less/less-var/index.html","f79f20a53dacaafc6f50039ee5628f3e"],["/2020/07/23/life/life-big/index.html","2cf8ced1d4cf0215823de2530e8f88d4"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","365e3abd89348714ee9372a68bddd5bb"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","c1964b8496c5b74e3c49ff149a3f3c66"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","e21df3501947eb7aef614dbfb21908ff"],["/2020/07/27/other/zsb-math-gs/index.html","5ce7e94624e8a8469c5053235e08d51d"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","f506e0838c653d2d68be68122564574f"],["/2020/08/05/flutter/ambient/index.html","1d505ef000a4d494fc9045fe7b310f8b"],["/2020/08/06/other/target-2020/index.html","b29f9d0770e35c55fe332672a81e185d"],["/2020/08/12/js/input-fixed/index.html","fe56c2defeb99b0d02146030fb807d6b"],["/2020/08/18/ui/peise/tonal_balance/index.html","85c39fbdce9fbdf0a5c39d25b4ee7763"],["/2020/08/20/css/effect/index.html","84c4e3a1c25084e1fb8252fdeeb815b3"],["/2020/08/27/css/unit/index.html","1459174fb7dd2098188b6e40e8f9eaa2"],["/2020/09/01/react/antd-mobile-theme/index.html","657356601c25ca0adab08d56a87e7903"],["/2020/09/09/js/js-cookie/index.html","38b3c384e0adf9539ff958f9a821ea8a"],["/2020/09/10/vue/vant-ui-code/index.html","8567cc58ed0ce27efd287e03b4b32aac"],["/2020/09/21/js/log/index.html","19186000801162e3947ecfd166d600bd"],["/2020/09/27/npm/package/index.html","ef34dd6b3efd80f2f715a973bde683fa"],["/2020/11/02/html/emmet/index.html","cfac1a5fe87e78cf87069423907aa9e1"],["/2020/11/15/flutter/basis_one/index.html","75570b376ac0044c9c2ef157b31db670"],["/2020/11/23/js/change-url/index.html","35c9a07a50676bad54624d46be4d8af7"],["/about/index.html","759c3158c8a32380a8e30d87a718931d"],["/archives/2017/08/index.html","d5392e2f48397edb57130ffcad11d70b"],["/archives/2017/09/index.html","fe83476161d6b5f3366f3809162a73ae"],["/archives/2017/11/index.html","9344244be557d060923b1756c68479a1"],["/archives/2017/index.html","ddd4cb645dc5233ff186bb53032d2fb1"],["/archives/2018/02/index.html","88c9238bf7859813701df28601858907"],["/archives/2018/03/index.html","104e9f26bb2d83c01a2f7ee50842f9d8"],["/archives/2018/04/index.html","0b5f9e23ed1e782fe6bafd3374f2c752"],["/archives/2018/05/index.html","93333ba7bdd660f0353c552573eac843"],["/archives/2018/07/index.html","5d471847d71aa173271ac10be3209262"],["/archives/2018/08/index.html","38fba3d026a9aca950feb58b14912289"],["/archives/2018/09/index.html","ee41cac36ca3d6c5fd9fa998db148017"],["/archives/2018/index.html","6e0d3b3731cf0b770949237bb4a5d39f"],["/archives/2018/page/2/index.html","1a95bd2f14a821fac5dcc48a86ab6395"],["/archives/2019/03/index.html","6487969fd1841765fbb880ed25f8f78c"],["/archives/2019/05/index.html","e0b32c838bdcf97ed52115505fd747bf"],["/archives/2019/06/index.html","4d6bca795cdc0aa156a53d27584b37da"],["/archives/2019/index.html","9ea3fdf769c6636f41f16c9b256f718c"],["/archives/2020/03/index.html","c80fa0fe2a884ad1755aeb02fe20bf3d"],["/archives/2020/05/index.html","9cc57e41ee6fccb6eaa7e66d4c0a0da3"],["/archives/2020/06/index.html","1baa98b01174f57705a74b4abbaea52a"],["/archives/2020/07/index.html","9c07991b51ee83c2ea324f4506c747bc"],["/archives/2020/07/page/2/index.html","af5ee1fa7d07aaac27b1e804820400b8"],["/archives/2020/08/index.html","6a69f2c97bd0758aecdbcdb4516dd303"],["/archives/2020/09/index.html","2b42ee0d8d6b5a6ad084f292aefbfb69"],["/archives/2020/11/index.html","0e769c3b3e1b3471c90da90b94663dec"],["/archives/2020/index.html","08202800ffcc48b3291327ddb374f5ee"],["/archives/2020/page/2/index.html","a4fc3517881fe61210219158d1cfbdca"],["/archives/2020/page/3/index.html","1c65039d11c6a687a446cc076786f898"],["/archives/index.html","198d024e9aaaee0054f09055e90957a3"],["/archives/page/2/index.html","d56adaf28b8437ef91b7466802ef5215"],["/archives/page/3/index.html","d296df68da1a970070da81750fd65e73"],["/archives/page/4/index.html","022bc67b3e244b07973fb7e7583cefbf"],["/archives/page/5/index.html","bb76b09de03c53caa8884bc1ec5f4f09"],["/archives/page/6/index.html","d8c937b7676c129b4c9fbf010f704536"],["/categories/Emmet/index.html","414523103d4992a03ee8f360e3fb634b"],["/categories/common/index.html","527f3327327dc62f4ebdfdbd71cc7c4e"],["/categories/cookie/index.html","9a177ff11cc0ec28c0eadd8a05c4304c"],["/categories/cookie/设置cookie/index.html","1dabf17a94b311c784cf2b8a6fac5561"],["/categories/css/index.html","e72df7d294f40b30220ed4ce8b59f21f"],["/categories/css/三大特性/index.html","b141a0dafd7c8fdc15ca4d21873fbcc3"],["/categories/css/不常见但是实用css属性/index.html","ec081314ad3049957847a9d0d2cf9bce"],["/categories/css/中间文字-两端横线/index.html","d0f72dd03d06c797811fa55c9ac8e54d"],["/categories/css/块级格式化上下文/index.html","1ea340567821403f97a9dcb4bec45a81"],["/categories/css/水平居中/index.html","6b3b649c74fffdc2d3e39834b70d0297"],["/categories/css/负外边距的巧妙运用/index.html","170b862edbb0dc506b1f27808ed54b0b"],["/categories/docsify/index.html","6fa6b2c90e60c9d8750958b0c0dce64a"],["/categories/flutter/index.html","2959703826c5a82847d350060a227a06"],["/categories/flutter/基础/index.html","718a3ac3c196a6e126278559d7a617f4"],["/categories/flutter/环境搭建/index.html","cc8757a7d1907ac45c4780c5c45d9e6f"],["/categories/hexo/index.html","c395aa4bcb036f87a14db7008cd94922"],["/categories/hexo/windows转mac/index.html","68c52acd04a885d94db937a16f614043"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","5418bfd94a2bd15c2782d8f014cca250"],["/categories/html/index.html","6e1734f0ff9f42d692df6d15e783ac4d"],["/categories/html/基础知识/index.html","b804567e3903f93bb7d0d6e4bee92b09"],["/categories/html/页面布局/index.html","6d1926623b166b008bc6fe295f42d9da"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","7189c7d7ec102879faeb9539c843981a"],["/categories/iconfont/index.html","7778fd90e48894313ae67ac231b2b62e"],["/categories/index.html","77d9ad05672a4f2a60f8d563856b673c"],["/categories/js/index.html","7c41cb9970262a03f07c036a6731ebf7"],["/categories/js/url/index.html","3570f12c1cc57734d89431b3e21fb5f8"],["/categories/js/原型/index.html","71ed5d5006506b6af55511e59f550b17"],["/categories/js/正则表达式/index.html","9b1f3bb211bfcee60a12364a0b1f983c"],["/categories/js/获取html到fontSize大小/index.html","5e2545f6689b3d19c6ac45c45171ca5e"],["/categories/js/获取url的各个参数的值/index.html","b639e611c458cd72311c5782286c9925"],["/categories/js/闭包详解/index.html","4b4571874a12da53fef5b62db5c4ac4d"],["/categories/less/index.html","4669a42745453b056280540bedcfe472"],["/categories/less/全局变量/index.html","d854e3e533e3ac7e3157de932051fc06"],["/categories/npm/index.html","4a2361638f0af5727df9bf10625f9ed2"],["/categories/nuxt/index.html","03a162b3fb651cfac5ec11acea775a7b"],["/categories/nuxt/代理/index.html","ff311cec9d1081dac074beb5f92580ad"],["/categories/nuxt/国际化/index.html","ea506cf8d435bfa2862a998c9cd73a2c"],["/categories/nuxt/页面刷新数据丢失/index.html","455e3a1a2d2b852a632993e25c9f394f"],["/categories/react/index.html","07fc460da7fd0e7dce3662c72d77369b"],["/categories/ui/index.html","cb52c239aa8db255c530b41ec55151f7"],["/categories/vue/index.html","6748578cb9ed133719ac731a70a5a9a0"],["/categories/vue/router/index.html","5c88556f1d09890353a77053f565a73a"],["/categories/vue/vant/index.html","116cbd5c7c5aa719ada9f6ebcbffd437"],["/categories/vue/代理/index.html","7cd2e577c73ce0d9a7e10b36c76386fd"],["/categories/vue/国际化/index.html","92cf4026f80ebeccb847aa30b20ed8ff"],["/categories/vue/时时监听网络的链接状态/index.html","329969dbeade542f37937fb2135316d0"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","96f8d7d221dffb51225e5ab7736a217b"],["/categories/其他/index.html","841ef8c44b0431a55886e9aa6af45bd6"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","094feb4c626386cbd0985b2e39fa20a1"],["/categories/其他/目标/index.html","3700e87d2883dba1771374b9d63660ed"],["/categories/其他/规范/index.html","196fef0fc056a688a8e77c887f96225a"],["/categories/其他/高等数学/index.html","ff07d1a7fced896e1c75daff0af2b844"],["/categories/小程序/index.html","947f4749958c4887504aa8527016a30c"],["/categories/小程序/wx/index.html","e747311624fa25fa22351a25c5ab1626"],["/categories/数据结构与算法/index.html","21d144cd311c4f485aaf7a206a3262c8"],["/categories/数据结构与算法/图形结构/index.html","513197b72cedf77d1ce95c0e91d4be66"],["/categories/数据结构与算法/排序和查找/index.html","a0b575bd3e2408f835cdb1589c55fa5b"],["/categories/数据结构与算法/树形结构/index.html","49dac650d1b589d1b47e5acf9bea1a83"],["/categories/数据结构与算法/线性结构/index.html","2bd43dbaa00c7b33ee7185e6de537623"],["/categories/生活/index.html","b62b6f8593074055945f59ce268fc670"],["/categories/生活/长大后明白的道理/index.html","e5dd4aaaf4977f5f988d65eefaf7e37a"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","6c8f3b305db9c1d864a588bdb3356eba"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","ffd7026ea003c503a2720c6771e1b83f"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","962780adcc3d3ed1f6ac561d2d741c21"],["/movies/index.html","c634e36d1755665bfb68ad147901fe92"],["/music/index.html","8ef736588d6e1dce40f06d9626b80fb8"],["/page/2/index.html","2cdeb0ffd2e238ccdb7323740f738845"],["/page/3/index.html","eb0c3f6203ddf289cd59093f2b16778d"],["/page/4/index.html","95ad8f71ed998618ca1093686626945e"],["/page/5/index.html","a6de863511600d3196d4259ad714018a"],["/page/6/index.html","df20cad4345ab37b12d9cbd660fbb9a0"],["/photos/tangyan.html","5680c7e0ab80d5437238f72a13063bb6"],["/tags/Emmet/index.html","ac9f515b23c60569a3e33ad1f0951a44"],["/tags/amd/index.html","7bc55945006591c5f282eba0d20a3a1b"],["/tags/cmd/index.html","621cd582b0a709d75154eaefcb668390"],["/tags/common-js/index.html","da8bcad6ad320c1034a9294b489bb6e6"],["/tags/cookie/index.html","b203b1bc94b58001773428822b5e1239"],["/tags/css/index.html","901ecdd47e3b7470f15408440e5f5e0b"],["/tags/docsify/index.html","d96f1aab5fe45d4068e14bf42dfdc36c"],["/tags/flutter/index.html","3815164a33422f8a1362c473d2974928"],["/tags/hexo/index.html","0fd1b7a84f70cb7e7fded83de69c9f7d"],["/tags/html/index.html","37ec8ea31cc824de65cc4850a7d2c9ea"],["/tags/i18n/index.html","d12c12b06e47c5847b26132570f79dd4"],["/tags/iconfont/index.html","53d07d817783125af200fadefb133b60"],["/tags/index.html","75710eeb39cd3386770021977e228e49"],["/tags/js/index.html","fe06626e6e855d0ec53a9a9059e53ceb"],["/tags/less/index.html","8a7dcb4403102fe4267fb82b841ffc6a"],["/tags/npm/index.html","058a9a8ef79e4b125e7ae4150075a126"],["/tags/nuxt/index.html","8954d8215c9cdf2d270460c567848fa5"],["/tags/proxy/index.html","c3b85a402b3ad19fb799c2574a7995ad"],["/tags/react/index.html","8529b2ee46141ecae0cb26a65d693663"],["/tags/ui/index.html","f0681741489d8a483cae1ba4edb0a4b1"],["/tags/vant/index.html","0ca6047d2e3c6b64ac2403027ac058ec"],["/tags/vue/index.html","07dca238d77f950af0cb834c7b26f1f8"],["/tags/其他/index.html","dbc64e73231c63620280589a3af4336a"],["/tags/基础-一/index.html","68bfdc00dd7600d5551840c0d714385e"],["/tags/小程序/index.html","bf5f5520353781003bf15f207e6478c5"],["/tags/数据结构与算法/index.html","24abfb0f255afef939126e76aeade2fd"],["/tags/生活/index.html","8630ff889846165dc65f62b8a043547b"],["/tags/目标/index.html","d50d443aa60a0a4d22fd83c7e0d0e0f6"],["/tags/规范/index.html","aad6d95b677085fc6c6a7ec20cf75474"],["/tags/高等数学/index.html","b9e386eae2818a989b874413bccbfebe"]];
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





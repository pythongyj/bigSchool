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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","d5e00ff0592b641631e5d20e219fffce"],["/2017/09/12/css/block/index.html","50785465f00fed73a7b50921ad286f94"],["/2017/09/12/css/css-properties/index.html","ef88388f3b62653fc1cc238b2212346e"],["/2017/09/12/js/closure-js/index.html","b5b759904f255fad0f44d33328c81796"],["/2017/09/12/js/prototype/index.html","ab52c908e8d9dcc0c902ee5ba69032ea"],["/2017/11/12/cookie/set-cookie/index.html","7051db90c763e87769e7457a3df1ef25"],["/2018/02/15/docsify/docsify/index.html","ebc3c7c71449231bffb89de7a3ea09fc"],["/2018/02/15/html/divCenter/index.html","d93b8fdce0f8527b4d2a09888bad4938"],["/2018/02/15/js/RegExp/index.html","6d9a5279e6a9d8b5b7ed9c38db0d77bd"],["/2018/03/21/js/js-set-html-font-size/index.html","d62072b79e331cfe7bf891ef2626f440"],["/2018/04/15/wx/login-wx/index.html","ea610d28b983cb9f415695bbde1052dd"],["/2018/04/19/other/norm/index.html","02503b5097886bbe94ee3d55e090b17b"],["/2018/05/12/js/qureyUrlParams/index.html","cf2eaab4142a95558816f2bf615e2429"],["/2018/07/13/html/layout/index.html","c6f5ce643e028139f83c52addfbc200e"],["/2018/08/15/js/amdcmdcom/index.html","51dca5a092b8659b03dc6cb792dba6c0"],["/2018/08/15/vue/vue-1/index.html","d96ad0e49336f2064570171e67a2158b"],["/2018/09/12/css/css-line-text/index.html","e50b8f46ec57fc8d9f9fbd8ab1986b79"],["/2018/09/12/other/classic-article/index.html","b94056ef1fde7347f8306fbb5c0a863a"],["/2018/09/16/css/css-attr-practical/index.html","be329244c13685a614e914399d2abc79"],["/2019/03/06/css/css-margin-negative/index.html","86868e535a5eefe1ab43e77a750c22b9"],["/2019/03/21/iconfont/iconfont/index.html","67a72e5214d2f4ab312e0a71790188eb"],["/2019/05/18/vue/vue-i18n/index.html","ddad47563388f304b25ea2e513de89bb"],["/2019/05/24/vue/vue-router-parms/index.html","aea0a007553d92448fcea54d50baf206"],["/2019/06/04/ui/peise/tonal_balance/index.html","60ad562a07c88886148058ed3b0f55c4"],["/2019/06/04/vue/vant-list/index.html","8a7574c124ec3c0dd58779d462640479"],["/2020/03/20/hexo/hexo-gitalk/index.html","217cebca33ab67d01b5e3d1dd937a59b"],["/2020/05/12/vue/vue-proxy/index.html","325a6976d37cfc8f7041293245cf7f7b"],["/2020/06/30/hexo/hexo-move-mac/index.html","5865b6a6f04c6b8c316f649257891c94"],["/2020/07/03/vue/vue-network-online/index.html","1c82f8e999b7ae25de4026654fc35d08"],["/2020/07/07/nuxt/nuxt-i18n/index.html","11600e6a220a744d20b0b58c4db49839"],["/2020/07/09/nuxt/nuxt-proxy/index.html","dd59f76305976505c17af35544495760"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","9e6a686e15d294a534dbad576d0ea868"],["/2020/07/13/less/less-var/index.html","32be0b0b4cc4210faab87d008ba19349"],["/2020/07/23/life/life-big/index.html","cc945e018ebdb6bf39f37f35a55f77fe"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","a0c180230bd2aa8e0b0a275afb9051f1"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","e40a24fd7e015ed4fd147125d982ebc7"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","15ba4ac643cf87e3c5ae527f563817ff"],["/2020/07/27/other/zsb-math-gs/index.html","4d8a702e9efefc1773878d8d57cbe5a3"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","1c27f16553204b0255e06d161e7e02c1"],["/2020/08/06/other/target-2020/index.html","d0882c2fb34291f9f4f194924c57a8cd"],["/2020/08/20/css/effect/index.html","4758456f5feeade53a1664f87157553c"],["/2020/08/27/css/unit/index.html","8486ac88015a4a5793af0d6d28f01d02"],["/2020/09/01/react/antd-mobile-theme/index.html","0d76fbca8410ae14ca30d07b4a8c58b1"],["/2020/09/09/js/js-cookie/index.html","18e5123977a8331ab6e604a71a7c0ede"],["/2020/09/10/vue/vant-ui-code/index.html","caa9ebf7244a12bcbff08145e413ded5"],["/2020/09/21/js/log/index.html","14fe9ca937450980767f392aa85327c0"],["/2020/09/27/npm/package/index.html","ffb5d165ccb39000ddd24311c81c98e1"],["/2020/11/02/html/emmet/index.html","32c7aa86ad8d61327b3bbc309408577d"],["/2020/11/15/flutter/basis_one/index.html","d36a873fe5652e490f1499cfb4f46746"],["/2020/11/23/js/change-url/index.html","6b2c1858228c352dfee741c7281e41a0"],["/about/index.html","b0868d0edc0f1b780ddf7cfe841214e7"],["/archives/2017/08/index.html","3edb4298993819faaf2d8d4ca94cd014"],["/archives/2017/09/index.html","ccd11435e3d47d67c5f2748ab2fcc08f"],["/archives/2017/11/index.html","841493b22804129f1d6eb92339103678"],["/archives/2017/index.html","6ae50850db20ccbbb4dd13736e236a5a"],["/archives/2018/02/index.html","cdbf5fd50ef80a7af57be4e26a49721b"],["/archives/2018/03/index.html","e0b9bd9c16d23a54f0fc115b42d66b7c"],["/archives/2018/04/index.html","d6845eef6d5c4d9eef49ac9fed514f25"],["/archives/2018/05/index.html","117e80821020dff5b564930f8e149dbb"],["/archives/2018/07/index.html","8104067fa0f40bf1dcb13492ffcd8a50"],["/archives/2018/08/index.html","fc5b744cfdeea0fa9129a1b992dcc6c8"],["/archives/2018/09/index.html","162e34a72ee61dd814866082c3297843"],["/archives/2018/index.html","91d157a252bedecb9f4634d1ea356e62"],["/archives/2018/page/2/index.html","733fdea3bb0c005d82bcc538e59a4a6c"],["/archives/2019/03/index.html","98e348acbbc53a6e2369520168a10b0c"],["/archives/2019/05/index.html","4b13d7f0558d9e56ee82099b2e3c1ad0"],["/archives/2019/06/index.html","1ce78b80a49ce1f5ae9e06b7401ea23e"],["/archives/2019/index.html","cfb661b67ec750b34ba69e7508db0dd1"],["/archives/2020/03/index.html","c2bd0ac0eec5f7048361730c7e1938e0"],["/archives/2020/05/index.html","9cf0bb88b969bccf0294cfd49f778169"],["/archives/2020/06/index.html","4871b42070e41b370adc15e680ceae1e"],["/archives/2020/07/index.html","e9a64c3d58d126f521896ceba59e3261"],["/archives/2020/07/page/2/index.html","1e554b51e5d090060de63e1e69400d2d"],["/archives/2020/08/index.html","7f20e810157e60dbffc41f56c045d720"],["/archives/2020/09/index.html","f25e546f99672f625d95a3d72e992f58"],["/archives/2020/11/index.html","96b53d896a8f216c3ef6ceb4fded3281"],["/archives/2020/index.html","c3199538fc2c55e39e5d723152159eb0"],["/archives/2020/page/2/index.html","950a1b20067f091b304d21ac49c53319"],["/archives/2020/page/3/index.html","d75cb1788a6a7277c5030f359677ce0b"],["/archives/index.html","44bdea63068ffb60de7675823df2ce7d"],["/archives/page/2/index.html","27322f03d3ac2d63e361c1f2fcc1af7c"],["/archives/page/3/index.html","05c2f49e4fce7638ec54931129010bff"],["/archives/page/4/index.html","d1216882cc8b0a1cd21773f883b525fd"],["/archives/page/5/index.html","9bf1845012cbb57c6724d3f3cd859e0b"],["/categories/Emmet/index.html","c72228c731505e768bd24ce3adf61f92"],["/categories/common/index.html","afebe79533e7df23ddf3e7645f851ec9"],["/categories/cookie/index.html","b54deac5d8f13ed94c6e9dd7183fabfe"],["/categories/cookie/设置cookie/index.html","b3e3914118b5a4655bc56072fb213a68"],["/categories/css/index.html","5135e3639ee95976f0b6db28f9080d81"],["/categories/css/三大特性/index.html","f9057a3ff678c29bc881f3fc091e3fc4"],["/categories/css/不常见但是实用css属性/index.html","a767c42668e2b78557bbd9ad9c49a25d"],["/categories/css/中间文字-两端横线/index.html","f9511e2ed0f926a850581f258b17c6b2"],["/categories/css/块级格式化上下文/index.html","924cb1baf0009766463f004b4fba023a"],["/categories/css/水平居中/index.html","f36f615d7487c319f3072d54404fdbc0"],["/categories/css/负外边距的巧妙运用/index.html","159954f366a50457d610f60d19df86cc"],["/categories/docsify/index.html","d5d7b8bd11f16f8c065d8c73f2134603"],["/categories/flutter/index.html","9b86d86aa4246724028d0d30661e0bf1"],["/categories/flutter/基础/index.html","66a4ea30c50115ddcd7e89f050a3a2bf"],["/categories/hexo/index.html","7ef52b891b1d5133139b52cbb8dcdc1c"],["/categories/hexo/windows转mac/index.html","7661f42c13a1bcbabbe3edc298bdf9c4"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","154563efd63067c1fa3a9aaaafe65b29"],["/categories/html/index.html","9360e83ecfa369e39ffc2512b5bf4cb2"],["/categories/html/基础知识/index.html","d69e91a6362821f09152998fff1a8fb6"],["/categories/html/页面布局/index.html","b073c39aa457ef91fe97f36df35ea620"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","b5ac4c2e2efc932f89f3ec0ec4889747"],["/categories/iconfont/index.html","d999f85823fb907dd813688e8e851744"],["/categories/index.html","7ef6a8c09c7e88b9e82f7a046a170d83"],["/categories/js/index.html","ead831509c5e43112fc7d266fbd0cfce"],["/categories/js/url/index.html","9af99e8c6ee5664db96159c04c3f77cd"],["/categories/js/原型/index.html","d670c121269b098839cc98fefc16a7c9"],["/categories/js/正则表达式/index.html","b0380f99ffc0e2e5aa956b4a6d8cdf8d"],["/categories/js/获取html到fontSize大小/index.html","a8df4a469feaad579d84db3aa2b7c044"],["/categories/js/获取url的各个参数的值/index.html","0d593901bf6c1750c220b50d9dd9d865"],["/categories/js/闭包详解/index.html","1108522829180387ed92ad6d7970f83f"],["/categories/less/index.html","7b18d36dd739ab561b2640afa3f6d31c"],["/categories/less/全局变量/index.html","a5dc71b45fc1608c8a9c0f413fb1d24a"],["/categories/npm/index.html","d8b4f8bffd763f7314cb3987aeb42704"],["/categories/nuxt/index.html","0896fcdbe81bcc34d4f079ea14f94541"],["/categories/nuxt/代理/index.html","2d6e85ac5bae3a88a7e1dea014ef03e2"],["/categories/nuxt/国际化/index.html","5a7c17e39f5a3a8a4489ba6dea138d3f"],["/categories/nuxt/页面刷新数据丢失/index.html","5922c12e80c9c2abc40e464f1d7e35ee"],["/categories/react/index.html","368ad5e5c47113e1b369619e3814e92b"],["/categories/ui/index.html","3d3f82390eeadc5321180e09dedce090"],["/categories/vue/index.html","203cd7e23a066f1dbedb28481f0fbb6f"],["/categories/vue/router/index.html","ec30e8d8abc382b2c1a8efeb4ec8eed3"],["/categories/vue/vant/index.html","9072a8e60368b16eb056d1a721b87bf2"],["/categories/vue/代理/index.html","2fc6cebf859e247ccbca40a1a1d5a2a1"],["/categories/vue/国际化/index.html","d4633098622d98030d37ed6994e7692f"],["/categories/vue/时时监听网络的链接状态/index.html","25a4f06606ca20d739d47a2882da8820"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","ee0202ef78f0abef12207094521dbc99"],["/categories/其他/index.html","857df20bd032f367ea9a751de49d2037"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","270c510530878a2015a245289c331961"],["/categories/其他/目标/index.html","314dfef1a41bb5632e51890d62776002"],["/categories/其他/规范/index.html","8859df8bdb9a0fd66b42bf364c17a5c9"],["/categories/其他/高等数学/index.html","405212c98041cb0334e3f194037fe3ee"],["/categories/小程序/index.html","281fbcd95f8d44429adf0487124c5165"],["/categories/小程序/wx/index.html","8237c2ba35bcbe61a72e7d92037f942b"],["/categories/数据结构与算法/index.html","49811bf543f1fda0fde1918af1d5a74a"],["/categories/数据结构与算法/图形结构/index.html","0ecc15845a06543375b7690d428f864e"],["/categories/数据结构与算法/排序和查找/index.html","0cb00c7d0e0d4d0e198f7f78ae8068a7"],["/categories/数据结构与算法/树形结构/index.html","c660bd9c7683e136a66e584336830cc0"],["/categories/数据结构与算法/线性结构/index.html","ff306be95a63f1e166367aed15cf24e6"],["/categories/生活/index.html","01196cf02b667e30c47932be25163851"],["/categories/生活/长大后明白的道理/index.html","2fb2502a3f3f161ba0b535962778a7de"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","d5aae935524b9bb7cda8945a02c8675f"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","3ba0ffdffb6cfc0ad542dc0bac82eb65"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","41c4aa85317ee94d36b8c1e4af3055f4"],["/movies/index.html","a26ed9d7e5616ba7075a656ad4b0184e"],["/music/index.html","58a2ce38d25bb41665869cdd8952ee0f"],["/page/2/index.html","b0acefa5a187318f81ea036dcb261bfb"],["/page/3/index.html","4c43cf1d047a6d8411567170091c7e9a"],["/page/4/index.html","6b13c7f9307ae5c71d03a309ec9c66cb"],["/page/5/index.html","1f6b17bb1295d0b0da1b9b92682612ee"],["/photos/tangyan.html","258aa1014a0b6f1e5718de156955f61b"],["/tags/Emmet/index.html","02e46cb2765a656eeede5eeedb706e88"],["/tags/amd/index.html","50b355192bb1dace33f3893512b00650"],["/tags/cmd/index.html","f42a7bcad8d8b5dbc08c9c64537e500e"],["/tags/common-js/index.html","c811c053d8ca311b9b325309e574d7f1"],["/tags/cookie/index.html","3b746ae6250e51e389af2710395ef224"],["/tags/css/index.html","2c623511111e673208c169c1315d2fc8"],["/tags/docsify/index.html","b67bf14afeff5326aa0bfcdb6c596f35"],["/tags/flutter/index.html","bc3aa9f1ca94cd6cf4961ab7c280c534"],["/tags/hexo/index.html","d9f78df49d6944452db02ee24df575a2"],["/tags/html/index.html","6399b2aba10fd6d1dc82372d3999bcbf"],["/tags/i18n/index.html","8f2ba1ddefa6b93d5085d618b6c2f9fd"],["/tags/iconfont/index.html","2239038147bdae682083690c3b380e04"],["/tags/index.html","c32c96d89754a10255e67c651ac29c65"],["/tags/js/index.html","c7497195ab09ee7a3253b8a5b2491030"],["/tags/less/index.html","6faf0bb58e7b0a98791a6a47449e32fb"],["/tags/npm/index.html","aa8da35eed1f2799a74381067bed27ff"],["/tags/nuxt/index.html","4458a5ee5fa2dcb3081441a17a978724"],["/tags/proxy/index.html","753f873ea6a14c7253428ef229a72750"],["/tags/react/index.html","ba4246d17439f32a1248b4e3fca5ae6f"],["/tags/ui/index.html","14a6c7cfcbd93aac92fd8abc7406d0aa"],["/tags/vant/index.html","3486f6e8c1e92a2142e096b59d046809"],["/tags/vue/index.html","e24108658223722ada84aec919bbdb15"],["/tags/其他/index.html","9940800c18143b36bb295f30f0200ee7"],["/tags/基础-一/index.html","ab0ba53049b2f9767a494b242cd43416"],["/tags/小程序/index.html","5e0121ff8f425f737dd2638cc3b9dbc9"],["/tags/数据结构与算法/index.html","3f5746602a4f479887d167606e435941"],["/tags/生活/index.html","ed496e6c306af4d881192bce80bc6f7f"],["/tags/目标/index.html","252fb938f43eaef84627809e3a8f5e9d"],["/tags/规范/index.html","5511f1564f372a44aeda2d8ee815307d"],["/tags/高等数学/index.html","5a70d23a4bc9b649efd7fbf3821a4527"]];
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





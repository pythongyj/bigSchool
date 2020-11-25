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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","a263d4aa0b09e946b91f0bae62ddcf87"],["/2017/09/12/css/block/index.html","86929925c469a11d9027aed5a2910ab1"],["/2017/09/12/css/css-properties/index.html","b47c26e6b51ef0f38d60fbdfba1db017"],["/2017/09/12/js/closure-js/index.html","4b44ee06d4d211706ce3988188fff306"],["/2017/09/12/js/prototype/index.html","508fb7b4d78641790986c6c8d2f5ac28"],["/2017/11/12/cookie/set-cookie/index.html","0f754470425d41220693881baa4e9778"],["/2018/02/15/docsify/docsify/index.html","c0df12cab633c2c509027fc5be0f9e2e"],["/2018/02/15/html/divCenter/index.html","d8be293ed2ff600a8af0717e895e21a9"],["/2018/02/15/js/RegExp/index.html","1f0329b921c8e477ffac302b74d55762"],["/2018/03/21/js/js-set-html-font-size/index.html","7b1f11a89d71e44429960e8186b8cd2e"],["/2018/04/15/wx/login-wx/index.html","181475b3aac073fc5793a2a6353bd615"],["/2018/04/19/other/norm/index.html","ab7890f5f6838c64b2713e624474eeb1"],["/2018/05/12/js/qureyUrlParams/index.html","1e7b893b8446fc4b76a0aee9c7b6578f"],["/2018/07/13/html/layout/index.html","59cb4c2217e30a07d1d0b6005671823d"],["/2018/08/15/js/amdcmdcom/index.html","8f4749cd24548407a214c0a49eb7d361"],["/2018/08/15/vue/vue-1/index.html","74b50c7ebf441d40b52b91083ec559c0"],["/2018/09/12/css/css-line-text/index.html","2cc7c123cba43ebfb7d73d37ca06172e"],["/2018/09/12/other/classic-article/index.html","2f229950abb85b44e6606e8d6f5e31cf"],["/2018/09/16/css/css-attr-practical/index.html","5ab614d045c4a301edf76061d02dfffb"],["/2019/03/06/css/css-margin-negative/index.html","eec1a81501b5cee93ae6b1387ec01b9d"],["/2019/03/21/iconfont/iconfont/index.html","4f0c1fe57134e87bb06e59e7a04f6201"],["/2019/05/18/vue/vue-i18n/index.html","85fff8191f1bf281b132c49b0fd27889"],["/2019/05/24/vue/vue-router-parms/index.html","784aa25059a123b9b4f8bed2b80cb92c"],["/2019/06/04/vue/vant-list/index.html","18b075a8da13283af985cdb4e5477bb2"],["/2020/03/20/hexo/hexo-gitalk/index.html","461bb2c6d6695ebbeb99290ce5dc9cda"],["/2020/05/12/vue/vue-proxy/index.html","248b2167cdaad451f04f0d0c5aaa3a68"],["/2020/06/30/hexo/hexo-move-mac/index.html","9eddf61840789b57ac92e10f59b817a6"],["/2020/07/03/vue/vue-network-online/index.html","69afd570e6ba3d93bebdacf9a1deaa52"],["/2020/07/07/nuxt/nuxt-i18n/index.html","b89058d0cff81c3c219f921f52312629"],["/2020/07/09/nuxt/nuxt-proxy/index.html","2acf254ef5e6be41e968324eba782cdc"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","c973c7b17dee4e88da02fee443876ba8"],["/2020/07/13/less/less-var/index.html","7c13f55aa3d309b299ee2760d060ecc4"],["/2020/07/23/life/life-big/index.html","bb9312e86fe694e62aa728fe0409d3bf"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","c35e0d867958913680ec2c3e3a62d629"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","bfb063a4d4935d9fdb91bfd158a64c82"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","0a8b24678421d78e6d9482610b05ec72"],["/2020/07/27/other/zsb-math-gs/index.html","f297d4ccbc66ec93ad69d635351e83fe"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","d6a10c8bf1875a5f46f3a9ce0790b544"],["/2020/08/06/other/target-2020/index.html","56b5edb10c7221cdcfdbf16687788c74"],["/2020/09/10/vue/vant-ui-code/index.html","74a01e17c46212c8c7a5e099ef3d5809"],["/2020/09/21/js/log/index.html","267282c965d334a60eaa1f56f9b362e6"],["/2020/09/27/npm/package/index.html","d2430c3ef310108ca4736100f6313be3"],["/2020/11/02/html/emmet/index.html","aaf446d4fdd23028b5121192a02ad264"],["/2020/11/15/flutter/basis_one/index.html","b26c9e6ccb945ef7c70906e5ca6f56a6"],["/2020/11/23/js/change-url/index.html","43bab7ed5cb300a9836f43bbe139bb8b"],["/about/index.html","a5eb45a3a7d070ed4192f0d8a9f466be"],["/archives/2017/08/index.html","ae445ae981f6e6ef489908d862aa570e"],["/archives/2017/09/index.html","24167f3d8e62ea45ae389b368db3f448"],["/archives/2017/11/index.html","0bb029dea80dad84e33a4b3721e3e404"],["/archives/2017/index.html","9ee93c1c8cd54fcb4924c6f1f09dc82f"],["/archives/2018/02/index.html","7b57570b5aee79118a4a80caf3d14744"],["/archives/2018/03/index.html","283c91e85afba21aae0ace428773aa57"],["/archives/2018/04/index.html","8542c24baa5c37d96bdafb234f4d7ceb"],["/archives/2018/05/index.html","6f7dd4112779baadb127f1683040ee4a"],["/archives/2018/07/index.html","19612aa37c5e326132462899b7c2e93d"],["/archives/2018/08/index.html","08883272f9ecf43c7bbd94ebb661aa60"],["/archives/2018/09/index.html","e9085f56d3efc4acea383f084f065e85"],["/archives/2018/index.html","42ba2ef8bad2fc05fc1fa169064a4fbb"],["/archives/2018/page/2/index.html","84e1479f62a9fe35758e4f854e50bcee"],["/archives/2019/03/index.html","a2b267e8489664fdd9a930736a225e56"],["/archives/2019/05/index.html","af73661ac395b312ac79903ecfea6b3d"],["/archives/2019/06/index.html","acaf320c6ef4c3712f751df4d6b8c3b8"],["/archives/2019/index.html","ab549c0aa00d0a70db3ec8308105c589"],["/archives/2020/03/index.html","50cfb5f3b2e9b76ecc2b599ce7d4928a"],["/archives/2020/05/index.html","a89a8c0bfc4738383c6fd4cd117c3421"],["/archives/2020/06/index.html","a2a7b090d6e9abb8c76e627ca2ca7283"],["/archives/2020/07/index.html","c7ce40d4aeaf1af6bc549d39cd7883c2"],["/archives/2020/07/page/2/index.html","d5bf0eb8b27c38514fbda99f830cc9fa"],["/archives/2020/08/index.html","00cc20cfd51d768076fe50c44d4e2fc1"],["/archives/2020/09/index.html","763e44ea0823bbeb671d48c2fc6aa952"],["/archives/2020/11/index.html","4a9806ef3655b54fdce5074794b3da6a"],["/archives/2020/index.html","781a3ae3e46cae072393b0b97cebc86e"],["/archives/2020/page/2/index.html","83b748f66ee239eb28914ab1e7085a88"],["/archives/2020/page/3/index.html","0cf56e5bb47c6008195422012629fd9e"],["/archives/index.html","b0534fdebfe1df67d7b1281d214c587b"],["/archives/page/2/index.html","a15d671ac633b0be631da174f6550447"],["/archives/page/3/index.html","b24e3f401080d4e06eb84b7117c8949b"],["/archives/page/4/index.html","f2ae03050af65414071dfbada4352343"],["/archives/page/5/index.html","11536e018371933209f7d04c56612c3b"],["/categories/Emmet/index.html","451478bf6e9b12937720c51f9b525f70"],["/categories/common/index.html","787ffafb284059c583af1513b36ab04c"],["/categories/cookie/index.html","059ee5a870104f485ca5b908254687c3"],["/categories/cookie/设置cookie/index.html","1448c021b95465501dd961aff306074a"],["/categories/css/index.html","f1d2694df8f17573cf7897fe7b31827c"],["/categories/css/三大特性/index.html","11af3ea8e178ec8451331c02c64789ce"],["/categories/css/不常见但是实用css属性/index.html","47acb48d03c39610e84e79fdf6f220bf"],["/categories/css/中间文字-两端横线/index.html","87eb1a67bec76062df5fda9a5ad32f6f"],["/categories/css/块级格式化上下文/index.html","d0448317d1f8f5fd493ec2888dfe81ea"],["/categories/css/水平居中/index.html","fd55d02495d8fd3798484743506f12e5"],["/categories/css/负外边距的巧妙运用/index.html","4546455018be49cc9320a5d569265d77"],["/categories/docsify/index.html","420a4be53b44d6ef91eb7665f7fa1508"],["/categories/flutter/index.html","061069f9fa8bdea5bd226ed2ce5f8048"],["/categories/flutter/基础/index.html","ed34d65c3f9653d0998b81bd209c9cbb"],["/categories/hexo/index.html","413dc721d20b58d67d5b50c660ef5fe8"],["/categories/hexo/windows转mac/index.html","9aeb5d709d030240b15d778f2470b5f3"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","9bd3f11badbd6cfe668333e1ec2f60ba"],["/categories/html/index.html","acd04249e4987bb61fc3c546e6a33dc6"],["/categories/html/基础知识/index.html","329e01b5e07fda9ecd7757cfbc2601d5"],["/categories/html/页面布局/index.html","0ff343c5625c38062e2e5b0864ac9f42"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","36684e9eeabdad08db475c3580daff03"],["/categories/iconfont/index.html","1cccf7eb4c86279e3f5e69fc8ebdae2b"],["/categories/index.html","51123d2675cf3a2aeb0b16b2954346c1"],["/categories/js/index.html","c3e6415439e3c8089dc187b020ece1ed"],["/categories/js/url/index.html","942ed9c2ecf5046368165d64d6c56b10"],["/categories/js/原型/index.html","344c0405ba2e355edb0cd67bb1f48851"],["/categories/js/正则表达式/index.html","6ce4f35601e24757edb78b8c0311a332"],["/categories/js/获取html到fontSize大小/index.html","feba4edd6b3636f2d78b305570a2a9a5"],["/categories/js/获取url的各个参数的值/index.html","36648e54af753d2ec66bf7d35b96a2a1"],["/categories/js/闭包详解/index.html","cde42011240fb0016ad9c9865424d476"],["/categories/less/index.html","9cfd474d4ea205c0da1808f5906b9174"],["/categories/less/全局变量/index.html","f441cb82865f1c9f999cb5c2f244fd3b"],["/categories/npm/index.html","a82857b43347934959ae804c24a5d14f"],["/categories/nuxt/index.html","eb97e2c678b67ee9df404813229712ee"],["/categories/nuxt/代理/index.html","1f8f36c4f332d35c5bd7e6319f0b7dc3"],["/categories/nuxt/国际化/index.html","ea6da915ef21f5639aba11353a64c353"],["/categories/nuxt/页面刷新数据丢失/index.html","5d7ded08d0c2435f031671bb571bbf56"],["/categories/vue/index.html","ee48c1d0ccdc6e341b37ba3fd8976401"],["/categories/vue/router/index.html","b6d5de099a6d19a2757facb649834c76"],["/categories/vue/vant/index.html","c2960ca85f5aed2b781e966dd9fbb9ac"],["/categories/vue/代理/index.html","a0da04fc0ec6be82ef0440e1f457d975"],["/categories/vue/国际化/index.html","51b7775bf391233b8beba071323ec5ee"],["/categories/vue/时时监听网络的链接状态/index.html","bc11323a796f7a7f4ba3a0f0f4948a58"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","5932a23b62f1309287b5d4d610aac422"],["/categories/其他/index.html","4736949d19ff04861d0d8d09201cbfd3"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","65681501b5bd6ec0c45084e082398750"],["/categories/其他/目标/index.html","bbd8eb630a69933b47ad041bee8adabc"],["/categories/其他/规范/index.html","dcc883b2c94c43e1fb0035e7760b795c"],["/categories/其他/高等数学/index.html","16b896332932de9c061b85cd8f3838e1"],["/categories/小程序/index.html","53d13f609ca46b69d668cac118fc5e6c"],["/categories/小程序/wx/index.html","fd4a30a717b7ca65231e3770fcefa49e"],["/categories/数据结构与算法/index.html","5c64e792d1fefe8b7e9bfd2cade409d5"],["/categories/数据结构与算法/图形结构/index.html","f5f02766909b8f6685bb13cf8350bb8c"],["/categories/数据结构与算法/排序和查找/index.html","b1b9de2a41d0b289ecfcf254b060ec85"],["/categories/数据结构与算法/树形结构/index.html","768146f7befaf610c6e91513154c051c"],["/categories/数据结构与算法/线性结构/index.html","22558a66b36efdac7f7799be7d5031ab"],["/categories/生活/index.html","151033cda30ca9f9f66a96feb1ce4956"],["/categories/生活/长大后明白的道理/index.html","6901ab94b36b5305dcc7fd2a720fd4a1"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","12ef72e125f0b2806d3f8c1f568e6a45"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","79f69017ecc0f0a86cccbf6a2ceaa473"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","f049901d53fb8e8ab4492e4b4abd6d97"],["/movies/index.html","36c517cd9260da6edff0720f7d0ffe23"],["/music/index.html","95798e624f6ad4322cc4352aa172c77d"],["/page/2/index.html","a7d364d5cdd5db344cd1275979132cce"],["/page/3/index.html","64dd9e66bcb0d3ad731b35fb42df9d73"],["/page/4/index.html","59abdc31f3ae996c9dd10e201d50a792"],["/page/5/index.html","fc8b2a4a41083b13836bc7c73c8960fb"],["/photos/tangyan.html","cad064fa10d74fcd527b24318b18a412"],["/tags/Emmet/index.html","8bbf694aeb68ddcfda1a74e81b60db55"],["/tags/amd/index.html","f44197cfe68056b899dda178146dcfb9"],["/tags/cmd/index.html","4def45ac7377d096073bcf01f3d89abc"],["/tags/common-js/index.html","7acf4d0479c55d650b8494ebe1ee41e1"],["/tags/cookie/index.html","7fc2af74940ce2bd5c86e0e2a855cebc"],["/tags/css/index.html","33949ff7806345290ccd74cb90bfeb95"],["/tags/docsify/index.html","a0343eab04e7298f818c3ae1b9531e95"],["/tags/flutter/index.html","9abb05316d05a3e7d339184416ad8930"],["/tags/hexo/index.html","d4ce1644f1886b3a4829519d7bfeaafb"],["/tags/html/index.html","87dccb2565725f14f0e253cdecb4893c"],["/tags/i18n/index.html","397e0108f295c283f66d0304e9764247"],["/tags/iconfont/index.html","b6192432226b7404df26a178aa6a5282"],["/tags/index.html","bbdee7524cf0438430fdf7b85ef916b5"],["/tags/js/index.html","ec0eb21f18dffb6b6c53af21688c1a0e"],["/tags/less/index.html","45fb52344d90b9413d16407738e58145"],["/tags/npm/index.html","2c687efcee19ed6bc5c47f0aefdc07a1"],["/tags/nuxt/index.html","233b4bdac7c0059dbbfd9e19408958d6"],["/tags/proxy/index.html","9095f776b68f53d2013c8918f5bd81a6"],["/tags/vant/index.html","013c0eb9c3a6c86de021cfb208d8c7f3"],["/tags/vue/index.html","4439c164243e1f891e183fb4fd21bdd8"],["/tags/其他/index.html","9667100d8c16b59b5160a96497e292d1"],["/tags/基础-一/index.html","5c0c0c307a32bbf85874c189f3832743"],["/tags/小程序/index.html","db731a838d2e6d47d65aaba61a67a4c9"],["/tags/数据结构与算法/index.html","54d893daaf7974ae095caf18254f00a2"],["/tags/生活/index.html","bb43baa69ab1498724ae1816d225b391"],["/tags/目标/index.html","13b7799ce0c93aa195f4808fc328594b"],["/tags/规范/index.html","3ecac24ab475867996e87c04f199dd73"],["/tags/高等数学/index.html","307a4c912d204ee7ede74960671e6782"]];
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





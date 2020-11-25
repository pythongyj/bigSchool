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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","c09436c9b5865ee8c732c62a668ae02f"],["/2017/09/12/css/block/index.html","f25bae31697992b23166c516dc7671e0"],["/2017/09/12/css/css-properties/index.html","9723cc0fe70a1bad725321c4acdfef02"],["/2017/09/12/js/closure-js/index.html","56e3be0920eff83b772320e014e62f12"],["/2017/09/12/js/log/index.html","1bc7cc092bddde4683fc7a6c8a2532dd"],["/2017/09/12/js/prototype/index.html","5e480183f797478421b8bf2c6eb541f1"],["/2017/11/12/cookie/set-cookie/index.html","11cff6270aae7497e856cc306ba3dc95"],["/2018/02/15/docsify/docsify/index.html","cb544e6a6b0eabf5f5fe9bd22eec3f05"],["/2018/02/15/html/divCenter/index.html","2fdf062a3783a5a9bbc7d040985266fe"],["/2018/02/15/js/RegExp/index.html","695b5cfe250c81cf8ccaf465544e180f"],["/2018/03/21/js/js-set-html-font-size/index.html","09032b399e94c759185641fdf28569d1"],["/2018/04/15/wx/login-wx/index.html","3449decc9c18ba7c293c5cdb9c80b35e"],["/2018/04/19/other/norm/index.html","36728d3a76674f3486949382e5f5ca7b"],["/2018/05/12/js/qureyUrlParams/index.html","44dbd0f7721ffa0304bf903955b06981"],["/2018/07/13/html/layout/index.html","86398fe471c1841ae60c6ae6f23edbbf"],["/2018/08/15/js/amdcmdcom/index.html","591e769b4f3da5e65e14ed2600a30713"],["/2018/08/15/vue/vue-1/index.html","e23c21afd0cabc5e9e6a4cf07d580477"],["/2018/09/12/css/css-line-text/index.html","c9b79be5b876b84ea06c18e273cdff28"],["/2018/09/12/other/classic-article/index.html","6b535e647c7fc8b56c59e051a1828c24"],["/2018/09/16/css/css-attr-practical/index.html","a04770a609b191dcb2c68e0822f9bbb4"],["/2019/03/06/css/css-margin-negative/index.html","b50bdd0618a31b377c3b7687924c7f74"],["/2019/03/21/iconfont/iconfont/index.html","a2581a8875f54575b1883b574707d1bb"],["/2019/05/18/vue/vue-i18n/index.html","0a6ff3e1ecd641a9f1477c9e25e7073a"],["/2019/05/24/vue/vue-router-parms/index.html","79933b0d4658e2c4c040cfac923facc9"],["/2019/06/04/vue/vant-list/index.html","975ccf102118b664d0bdc6bd6a9eb161"],["/2020/03/20/hexo/hexo-gitalk/index.html","5f7f2dd5d5523b1031df9d31c77bff5f"],["/2020/05/12/vue/vue-proxy/index.html","957711cc8133c20f10fccc9a27b26df9"],["/2020/06/30/hexo/hexo-move-mac/index.html","d90865637b4db54df56329708e9ae6e4"],["/2020/07/03/vue/vue-network-online/index.html","ac04ce7fb7d0c2a95aeff819d8641dad"],["/2020/07/07/nuxt/nuxt-i18n/index.html","a9471ccffda2b258ec332a3e69fea543"],["/2020/07/09/nuxt/nuxt-proxy/index.html","7e4af22347f806ad5a943cd8ace5ff73"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","abaa3be5f4d3b32fcc0b7f888cb9d775"],["/2020/07/13/less/less-var/index.html","03ff09105fc5cbbe62d2430fd7884d9f"],["/2020/07/23/life/life-big/index.html","d6e872c07f7bd8373ada18a346dc434c"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","067f56e7ed149231eb49c5274ecf7cc7"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","7bbef780dac09a8529f3444f985c3372"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","9e28a7a0c5e899eb75d86f82c07b6540"],["/2020/07/27/other/zsb-math-gs/index.html","796b2af566777d0ab1a12f603fe92068"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","c9f88e620462a194c727c6bd4aecf352"],["/2020/08/06/other/target-2020/index.html","f2c6e943adcca8cb3bc0feffaa6a21d5"],["/2020/09/27/npm/package/index.html","bf01473f75e642278e72583a57fae38e"],["/2020/11/02/html/emmet/index.html","cde033d736496109fd3e7a857abd42bf"],["/2020/11/15/flutter/basis_one/index.html","1af482dcba87e7116ebd0a669fb16fc0"],["/2020/11/23/js/change-url/index.html","59b921b86f08d86633a87fad76e03d58"],["/about/index.html","f6ee6d9b4db158dfba2cf6ca5adc9a1e"],["/archives/2017/08/index.html","5f489079031dbfaca940a46f4ec138dc"],["/archives/2017/09/index.html","2ab1adca09d733977baad4edc2926a7e"],["/archives/2017/11/index.html","e0f2bcd6d3e7be78a19d0d948f1cde51"],["/archives/2017/index.html","07265c3e3e0168707ebc981bb440cb76"],["/archives/2018/02/index.html","66902d6ca6eaea051671ae565fe3f387"],["/archives/2018/03/index.html","9958a4ed810b8e9fcde8bad8fc005d91"],["/archives/2018/04/index.html","ef74c474b86227967904273b7466a867"],["/archives/2018/05/index.html","868efb0047a80e717b38e0d7658649ab"],["/archives/2018/07/index.html","a25cfa392e2ac4063bd4f74f5f771d92"],["/archives/2018/08/index.html","4d30395dc41c51785a282ed725a3ec7d"],["/archives/2018/09/index.html","76a5c50f0a1e282578e554df4c2aa797"],["/archives/2018/index.html","09d8226ab7aca6f4f029b118167b7fbe"],["/archives/2018/page/2/index.html","4230132f087600bedb7c5681c3015732"],["/archives/2019/03/index.html","24ffaaa245cf2afc7c6c7ff7e00b191b"],["/archives/2019/05/index.html","628b98c3ba66148bd366dc36d4246785"],["/archives/2019/06/index.html","e39efbaa3972bd76daf44c70c0fdd464"],["/archives/2019/index.html","6332f07ad76fdda5268b1793e6533aa1"],["/archives/2020/03/index.html","b787680413f5266a06bedea5ad6cdb21"],["/archives/2020/05/index.html","e5c96e7b4261b612d6fd0d87fb171e0e"],["/archives/2020/06/index.html","9b8369991f6cf43f3884f672955d50c2"],["/archives/2020/07/index.html","2ec0dfd7d79e07c794664ce241f8e2b7"],["/archives/2020/07/page/2/index.html","468ce767870eaa89d29d4be5b38e4486"],["/archives/2020/08/index.html","2e6b7eb1abd2f192ec95cf7eb9dab7d1"],["/archives/2020/09/index.html","c05e99185b6e7cd78fccb5830f67311a"],["/archives/2020/11/index.html","462e734cb9e2d2a3967425ed006e0fb4"],["/archives/2020/index.html","fa1d2c5560262be76397f8c42af69541"],["/archives/2020/page/2/index.html","793aa6c17bd3c6646296609620da6df4"],["/archives/index.html","2a49ff450eb17dff45c558ad4d2f9f25"],["/archives/page/2/index.html","508f10432a999f41f2c40f42c4c4078e"],["/archives/page/3/index.html","055f4ba682c33a3fbe7e2a0a6336188b"],["/archives/page/4/index.html","8a18170e79d529310a7a83e340324355"],["/archives/page/5/index.html","fb60ed5d66c27678301038d5012f44bf"],["/categories/Emmet/index.html","460d07ca97f16c877cb864df133ee7f0"],["/categories/common/index.html","d68a9dde007dbcb13d89404a760ba773"],["/categories/cookie/index.html","a09725275d2cfa9a16c01ecc57114d7e"],["/categories/cookie/设置cookie/index.html","591871aace276831d6d7a1273c3116ec"],["/categories/css/index.html","6e9ba361bd773a5eb203c0650e0a2ed8"],["/categories/css/三大特性/index.html","459a59493f697fb0243e2d6f2f3320d5"],["/categories/css/不常见但是实用css属性/index.html","a21413a76891b65c8abe4204723be0b6"],["/categories/css/中间文字-两端横线/index.html","5bd9730b799e73037fd6e886fdb4ab29"],["/categories/css/块级格式化上下文/index.html","6f71cfd526d2828ce13d2b2ffaaf27d0"],["/categories/css/水平居中/index.html","0390db23f1da262262c7983b0387be33"],["/categories/css/负外边距的巧妙运用/index.html","82b9b175658870e080bc5d70865fe8f5"],["/categories/docsify/index.html","9b0eb3f8a8c84b0c59561ade96845a78"],["/categories/flutter/index.html","39671e7929c5c9466275959985ea1c3e"],["/categories/flutter/基础/index.html","f3c1b379cd9cd96105adf28d8a744562"],["/categories/hexo/index.html","d1c894c008a453c39b5c13df91d8ab05"],["/categories/hexo/windows转mac/index.html","046abb295cb444d5751ebd03a2f9bdbc"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","161487870ee77ea7ddaeb2dae71aad38"],["/categories/html/index.html","58e650cb7fad147ad7c979c5ad682f09"],["/categories/html/基础知识/index.html","01f6b89ff8657220dc87a5a46745af0f"],["/categories/html/页面布局/index.html","0353babe31a1a5b9825ec7c8ef29a5eb"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","eefe29c0d8a4b593e60581a168ae70fc"],["/categories/iconfont/index.html","542bdcb1d49e28a938b864904a6551f0"],["/categories/index.html","05bdd9df36768fa103ce0ce17a905ebf"],["/categories/js/index.html","c7ac6f6b606725348153e4fe8e3d5905"],["/categories/js/url/index.html","5595b600c437e9a0030ed8f48e2e61d5"],["/categories/js/原型/index.html","600a1d566679806858ef64c53d24f1ce"],["/categories/js/正则表达式/index.html","f05be55d6ef5e70b85ba82a7d5674fe4"],["/categories/js/获取html到fontSize大小/index.html","5da6b380c0f79b6f032830197a733235"],["/categories/js/获取url的各个参数的值/index.html","a1f761b83d7151ba56cf014c8d0a2459"],["/categories/js/闭包详解/index.html","0b47e3b4fb27ce59473e46ca51f88a39"],["/categories/less/index.html","355b747422fe176790afc54c2fb9bd03"],["/categories/less/全局变量/index.html","921ac7d18b2de0513e44adc6d4843371"],["/categories/npm/index.html","27f05b316de5bcaa854b3fde8d33d459"],["/categories/nuxt/index.html","70e9cff584d27e723a1d82c15cec59b1"],["/categories/nuxt/代理/index.html","fa31560003a6667bfc4fa082d30c00a8"],["/categories/nuxt/国际化/index.html","d2778765b6736db0ecdd1f1fc430b61b"],["/categories/nuxt/页面刷新数据丢失/index.html","0fc1ffab36f6372b8cc9236f2e410a04"],["/categories/vue/index.html","563dfbc4c15288b2541eccc2121b84c0"],["/categories/vue/router/index.html","60b2fc2a560209662affc717e9567084"],["/categories/vue/代理/index.html","43e91a111df2db167c0430d47e9f0e44"],["/categories/vue/国际化/index.html","d5f9748842b5af17ee79aac8b1d427e2"],["/categories/vue/时时监听网络的链接状态/index.html","d5509a5ebae7345ef3b9a1a813645213"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","a27755e70fa5aa3763e3acbbc4a6c54c"],["/categories/其他/index.html","82ece258e0fc635455b0ce73835e2a48"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","351dcfc3e38a077cd69cf01b347e2ef9"],["/categories/其他/目标/index.html","c23b30f7ec8de71831c1d8395bac1c0e"],["/categories/其他/规范/index.html","3e584e37e5d4c2363a5fbf2dc42620d0"],["/categories/其他/高等数学/index.html","bc71812ff249416d538f11c7a2d371c9"],["/categories/小程序/index.html","06a95bd5a4d29cbcba58f79636432602"],["/categories/小程序/wx/index.html","87b66e5ce0714e5a438e7884671f8f82"],["/categories/数据结构与算法/index.html","102a1ab80482a923666ccd63ff37ac19"],["/categories/数据结构与算法/图形结构/index.html","39f46120dd18e7a8d8d9320214f7168e"],["/categories/数据结构与算法/排序和查找/index.html","f41075588c08e5f0bf6fdb4d29e87fc0"],["/categories/数据结构与算法/树形结构/index.html","72b245f5262153d13bbe0036fe316747"],["/categories/数据结构与算法/线性结构/index.html","e738c109c6be2afdb7c29bc05927a622"],["/categories/生活/index.html","5c87357cdfbf070c5d8025e530fd514c"],["/categories/生活/长大后明白的道理/index.html","e9902f069372fb67daed53c0d406a20d"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","35a2ad1d0f7102ca5a8304f68b33c24f"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","395c7745350c42dc804cc12b86bb78c0"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","fa2a99d34c13ea93a921bc74c717317f"],["/movies/index.html","1a5d178a248c8091f8c56a57cc146b8a"],["/music/index.html","a9b39788a69fc7181bddc83bfaae7be1"],["/page/2/index.html","715e41e59d52c6ccd0a9707142f52958"],["/page/3/index.html","71e3f192d7d324fea33c990ed0da8e0c"],["/page/4/index.html","1e29e4831e24e9eea3ad258f289ff20c"],["/page/5/index.html","26b7152afbd42ae8bb0d89a731910f94"],["/photos/tangyan.html","6c55fa247c1a4ae8b6c9449dc57a3586"],["/tags/Emmet/index.html","a85f63093531be35611c71518c5050a0"],["/tags/amd/index.html","c8a054878a2508e0ea09afa65624c366"],["/tags/cmd/index.html","260ccc9777c6831553dcdf6c37cf1ee9"],["/tags/common-js/index.html","54d4095de613affcf475b8bc2a691474"],["/tags/cookie/index.html","b0ca7f219158f0b30e017310b604365e"],["/tags/css/index.html","a2bfec94c69228fef2448cc4565a0a31"],["/tags/docsify/index.html","728cd2613eb41e282e937b8b4a03d2e4"],["/tags/flutter/index.html","06c06c3e97a84abb946424954e76abd6"],["/tags/hexo/index.html","964b224b223dd27467e2bcc284541271"],["/tags/html/index.html","b5b02f245675d167d23fca66524fdc42"],["/tags/i18n/index.html","521418610deae20d284d4502a65bae4c"],["/tags/iconfont/index.html","d83b52dd12e75e7c96bc023babf4c783"],["/tags/index.html","243754b0244376e281a529e8d3b7881a"],["/tags/js/index.html","f0468ad33227e83aa5c8da77472169f9"],["/tags/less/index.html","08ca342cc6a6a369f218e87f620164db"],["/tags/npm/index.html","3075793b867bca0d662f6c76d88e961c"],["/tags/nuxt/index.html","3b37ce0033b5eb0ec3c91f5f47cf38ae"],["/tags/proxy/index.html","d48903aa45e61ce8d649a1c9bb9b2f2c"],["/tags/vant/index.html","c4a2b76a5783ec6d45cb697680b3f4de"],["/tags/vue/index.html","d8fe34830d8feafef208047cd6fb229b"],["/tags/其他/index.html","b1ca4f794991b7e3ce170d45210f34aa"],["/tags/基础-一/index.html","3e7871f392164869407b162a05cbcf7f"],["/tags/小程序/index.html","0ac0da7059f65ca69570f284f64e0422"],["/tags/数据结构与算法/index.html","1bb3a9609fac814e428c730c2b5d93b9"],["/tags/生活/index.html","20c7973ad0c732c437df52082613d441"],["/tags/目标/index.html","382ac11359777d71c6a929a84fa31cf0"],["/tags/规范/index.html","aa0ad06f187857f80ba6266c31c909f6"],["/tags/高等数学/index.html","f05a79fd31e4ce1f8041b6383095476a"]];
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





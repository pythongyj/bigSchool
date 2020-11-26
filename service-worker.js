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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","1c6c8fc3e28b801ac48c765518692ee0"],["/2017/09/12/css/block/index.html","642f9b540963f26974b986d566ed2805"],["/2017/09/12/css/css-properties/index.html","eea2df3511621ea97279b1029d16ff37"],["/2017/09/12/js/closure-js/index.html","8187ed797a57844d3feccc6d2a03cc18"],["/2017/09/12/js/prototype/index.html","e1f925d39263d8c7f23cd9806b4da49e"],["/2017/11/12/cookie/set-cookie/index.html","db95085cc976258d39f6a92d4abd3868"],["/2018/02/15/docsify/docsify/index.html","9af776dd7422dbe8950518c081b282c0"],["/2018/02/15/html/divCenter/index.html","031714a568d286a880586384a59f10c9"],["/2018/02/15/js/RegExp/index.html","8fb0c3eec86421e2fc8ca4b00dc9f712"],["/2018/03/21/js/js-set-html-font-size/index.html","05eb21e460c9a757057659994fe6479d"],["/2018/04/15/wx/login-wx/index.html","f60ec68453f64e188dd39cc9033eac9d"],["/2018/04/19/other/norm/index.html","cc4a880bfc75814afca557bdd06bb348"],["/2018/05/12/js/qureyUrlParams/index.html","31301206feff76a91277e59857dcca9a"],["/2018/07/13/html/layout/index.html","dd1b56981edbc2e46d307939f0e3058b"],["/2018/08/15/js/amdcmdcom/index.html","17678aa43d91eca176c91bc9f2cb725e"],["/2018/08/15/vue/vue-1/index.html","5ec797c09c44c87a0fbdf56823339a69"],["/2018/09/12/css/css-line-text/index.html","ee92f7ac2c0eb21611ef1b22b9e188db"],["/2018/09/12/other/classic-article/index.html","976515f51fde0794012404bf1eccd861"],["/2018/09/16/css/css-attr-practical/index.html","6d1c675d1d2ae59c6ed3f4cbac2663e6"],["/2019/03/06/css/css-margin-negative/index.html","5e2ada3f67a4db6dc08f7d58fb17939a"],["/2019/03/21/iconfont/iconfont/index.html","349bcfa891777c0c4afebdc01e134f80"],["/2019/05/18/vue/vue-i18n/index.html","f4ab936a26d9bacff068ed416a503e50"],["/2019/05/24/vue/vue-router-parms/index.html","60238efc4db836a960ac45d5759a2f6f"],["/2019/06/04/vue/vant-list/index.html","6915fe0f2830abd28b0980b0d771a256"],["/2020/03/20/hexo/hexo-gitalk/index.html","fefa6154e75608c75bc2ef8983e9166b"],["/2020/05/12/vue/vue-proxy/index.html","dad3d7e9b74ddf4c9458af4195249359"],["/2020/06/30/hexo/hexo-move-mac/index.html","0eea0ffbbb1475953a1ec5509144c48f"],["/2020/07/03/vue/vue-network-online/index.html","5bbc52c9fdb3c3a9d86f2bd1d7ff52a6"],["/2020/07/07/nuxt/nuxt-i18n/index.html","7b92f86b5019d06e925b9a436ee98940"],["/2020/07/09/nuxt/nuxt-proxy/index.html","bd4d9cd836159e1169ad49b3f595be10"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","5cbd0fba3f58d27ae42dc2e417d1ce0d"],["/2020/07/13/less/less-var/index.html","f79f20a53dacaafc6f50039ee5628f3e"],["/2020/07/23/life/life-big/index.html","2cf8ced1d4cf0215823de2530e8f88d4"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","365e3abd89348714ee9372a68bddd5bb"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","c1964b8496c5b74e3c49ff149a3f3c66"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","e21df3501947eb7aef614dbfb21908ff"],["/2020/07/27/other/zsb-math-gs/index.html","5ce7e94624e8a8469c5053235e08d51d"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","46837f75aa8b7d777dd79aaed425fddb"],["/2020/08/05/flutter/ambient/index.html","f1f24f003fc0da22ed97571cee68e9e7"],["/2020/08/06/other/target-2020/index.html","69e3cadfd800a7d716f01e489cc0078d"],["/2020/08/12/js/input-fixed/index.html","9d49bb0c44e1b32e6fbd5476b9aa12dd"],["/2020/08/18/ui/peise/tonal_balance/index.html","efe0889e187af4aff354d48553861e0f"],["/2020/08/20/css/effect/index.html","84c4e3a1c25084e1fb8252fdeeb815b3"],["/2020/08/27/css/unit/index.html","1459174fb7dd2098188b6e40e8f9eaa2"],["/2020/09/01/react/antd-mobile-theme/index.html","657356601c25ca0adab08d56a87e7903"],["/2020/09/09/js/js-cookie/index.html","38b3c384e0adf9539ff958f9a821ea8a"],["/2020/09/10/vue/vant-ui-code/index.html","8567cc58ed0ce27efd287e03b4b32aac"],["/2020/09/21/js/log/index.html","19186000801162e3947ecfd166d600bd"],["/2020/09/27/npm/package/index.html","ef34dd6b3efd80f2f715a973bde683fa"],["/2020/11/02/html/emmet/index.html","cfac1a5fe87e78cf87069423907aa9e1"],["/2020/11/15/flutter/basis_one/index.html","652febdd6cd27d00a58a5dce52eb49f4"],["/2020/11/23/js/change-url/index.html","35c9a07a50676bad54624d46be4d8af7"],["/about/index.html","8566e746db061098a6781c5d107b3ae5"],["/archives/2017/08/index.html","c284f2a4c8d62452616f66f7d98b8ab6"],["/archives/2017/09/index.html","6793dc59b41633ea84bbab3b76fa78d3"],["/archives/2017/11/index.html","64443098fec09b00a4e5e72fec1ae16f"],["/archives/2017/index.html","23d8d900e100c2b74904c4ad96c8e065"],["/archives/2018/02/index.html","94f39148c654fb1bd377e355d13923c4"],["/archives/2018/03/index.html","7472813e5e96be79855fe883c822c1ce"],["/archives/2018/04/index.html","65c14e9b304365d840ab70c428db8021"],["/archives/2018/05/index.html","4573668f6d6659e080b3db6f08c381bf"],["/archives/2018/07/index.html","bf1423e1c8d7a128026f103ac58742b7"],["/archives/2018/08/index.html","3a9076ce871285342bbe925b4208d96d"],["/archives/2018/09/index.html","365ab4b145656070334e47e32ab53bf1"],["/archives/2018/index.html","061aeddc3b6278cdfc874946b07ecb36"],["/archives/2018/page/2/index.html","699ef27d667b2e4a3b5a07a53e20b69d"],["/archives/2019/03/index.html","5128530831b6dabebc4907c9fe31e797"],["/archives/2019/05/index.html","bb8eacc7cf638e6c236ca33e602b9bf3"],["/archives/2019/06/index.html","da8452ae4bf689cc1c5e1479c2a35ac1"],["/archives/2019/index.html","918afb788460523dd62f77f86d5006b0"],["/archives/2020/03/index.html","7556ed6fa051a24f7d05639f08a03df3"],["/archives/2020/05/index.html","da12755dee9f801db0a5dfe158513ff3"],["/archives/2020/06/index.html","740a4e81e8ee184bbc9ea08a65c15609"],["/archives/2020/07/index.html","3475fdc9bf256a9814c0ad910a36d605"],["/archives/2020/07/page/2/index.html","e8807304feb1887eb483f930f607a728"],["/archives/2020/08/index.html","e4bad9f3cb6e28d0707b81b00c5825ff"],["/archives/2020/09/index.html","7587c5ad9aae76bf56737db7d0be64a9"],["/archives/2020/11/index.html","c0077b373701553866ef2f86fbaa8b15"],["/archives/2020/index.html","a5dc49a64212bee830a0f62a5e7bb29d"],["/archives/2020/page/2/index.html","ad0dc29ef2b996ed8a98bb1c0c8f80f6"],["/archives/2020/page/3/index.html","eecaad970c8dd395cbb0b625f3993f5c"],["/archives/index.html","e57296d2b06a561c3fecb552020d5315"],["/archives/page/2/index.html","c3a7eaa7c67760acc590eef5edad8c5e"],["/archives/page/3/index.html","a733945275b221463b19005dae6508f6"],["/archives/page/4/index.html","dbefbdb402a4d25752375554613eff7e"],["/archives/page/5/index.html","e8164db19a29e6e643e2c0a25e9bea10"],["/archives/page/6/index.html","77c79b3fe24ec51132e4b3947fda6767"],["/categories/Emmet/index.html","0850520588b0bb2478267c8006d75090"],["/categories/common/index.html","2911a52dc971f9489d810d52ef6fd8b7"],["/categories/cookie/index.html","652bb1453658b8a1092985da04c99908"],["/categories/cookie/设置cookie/index.html","6b825ed204f9c2a3fb4d4ac586cecc05"],["/categories/css/index.html","4b124ed0b4b75926b0edce6a4994aaf9"],["/categories/css/三大特性/index.html","79106a7b5ae15f8005dc26679f9c8881"],["/categories/css/不常见但是实用css属性/index.html","dffef93cd3f9a00bf564bab58d6ea479"],["/categories/css/中间文字-两端横线/index.html","d7b0a7c9003d8dafce08068d5b0d4fb2"],["/categories/css/块级格式化上下文/index.html","58c871c686d9dcd4a59e1cb6c0297853"],["/categories/css/水平居中/index.html","2a30c8b6cffd0584984a56b43416aa7b"],["/categories/css/负外边距的巧妙运用/index.html","ebb6e42132bfc0c796f8e0534ae41bbe"],["/categories/docsify/index.html","68ebd57a4a6d7d67dc65b48727914007"],["/categories/flutter/index.html","2af864902245512011b8c7cbd27ad3f5"],["/categories/flutter/基础/index.html","d9a3d7d8be787c821e4f55040a2c9f08"],["/categories/flutter/环境搭建/index.html","d4252e58ba69eaf37f88e376b2ae00a4"],["/categories/hexo/index.html","b4669ce292e4b6da87348c8e1ae0d732"],["/categories/hexo/windows转mac/index.html","cdaecef52e39a1ffb66ea83d317b8713"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","40e65d6a5ab518fba95626b0a5636e2e"],["/categories/html/index.html","d4a58b3aeb9ad524911740362fbc654e"],["/categories/html/基础知识/index.html","d56cbe3c64444e1a5d6e7d0fac50a543"],["/categories/html/页面布局/index.html","cea1a637178bfcb14305428528629fae"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","64f17a1048a7207b6fa4c91405723196"],["/categories/iconfont/index.html","41499d194c820267ab7dca1fa949b80c"],["/categories/index.html","b333b47c7bb9ddfac5041efabe95ea74"],["/categories/js/index.html","f828d3dfa83a0b841ba0d90335b77bb1"],["/categories/js/url/index.html","e4520e44be9258dead123a39ffe03dae"],["/categories/js/原型/index.html","6afaedb02813b8e998daeba572e55dad"],["/categories/js/正则表达式/index.html","335c80ae276c4898179fabab69861c85"],["/categories/js/获取html到fontSize大小/index.html","b11bec5cb695ab0e306594475fb3fe49"],["/categories/js/获取url的各个参数的值/index.html","d2f87764b970bbc0848a1d8780ad2932"],["/categories/js/闭包详解/index.html","0c05cd0e6d680dc196c1f7430b194843"],["/categories/less/index.html","1f3f4b96f7a85ff73989a571cce1186a"],["/categories/less/全局变量/index.html","72185c3a4d114abe1e0463280992c0f3"],["/categories/npm/index.html","8be6826c2d0441abd3708e67b15174da"],["/categories/nuxt/index.html","69480864363b2f1a1e5a68fdd4731339"],["/categories/nuxt/代理/index.html","e1ae58b6a3b8534a5cba605d3cf40238"],["/categories/nuxt/国际化/index.html","df3eaeae58bd4743f6907bf7bd941040"],["/categories/nuxt/页面刷新数据丢失/index.html","3db568627fcc240da9a7707291c17b9b"],["/categories/react/index.html","88c9323d3a1ff44af5dc5aa7fe6fd7cc"],["/categories/ui/index.html","6f6204179bc9aa1a99d3d510b8377833"],["/categories/vue/index.html","c160469fbebbdedf1d52d74441214e4c"],["/categories/vue/router/index.html","de35497c1bc841d4a1f67c376650b075"],["/categories/vue/vant/index.html","d390001dcf78729fbfaff4df2532894b"],["/categories/vue/代理/index.html","5b17827f1878fa1363503dce41a9f6c9"],["/categories/vue/国际化/index.html","87f35a311d4765d434b3a903ded8505b"],["/categories/vue/时时监听网络的链接状态/index.html","e3108b684bfed51b7b630a0a8a1fb6a4"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","df8ff5ed2c94c61841f9256fa1cf88b7"],["/categories/其他/index.html","3cdd6a6c162fce282ef47d1a444762a1"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","0620a4d12f1bf5e22aaf45a7a27d573e"],["/categories/其他/目标/index.html","127fc57742bc5b6a047285ee67907e89"],["/categories/其他/规范/index.html","aa1abc5f5211cefb379617a8d17a6ded"],["/categories/其他/高等数学/index.html","e959d6798993abc1c0ff906da710c651"],["/categories/小程序/index.html","f6ccfc89ac6d79da545d89e0db3f74bd"],["/categories/小程序/wx/index.html","3b75e78d85689f0c77fd4cc5e6e2d564"],["/categories/数据结构与算法/index.html","2e17cad174be68b4c31be5678551b35a"],["/categories/数据结构与算法/图形结构/index.html","96adfafd1ec1450d32bc0ca99a572dd1"],["/categories/数据结构与算法/排序和查找/index.html","b583af325d8a90bc47c291b92e364861"],["/categories/数据结构与算法/树形结构/index.html","05b831e5b2e886a41d5080e30f4d9ab7"],["/categories/数据结构与算法/线性结构/index.html","3ddd3fb605efbbc81df52d10ff04f735"],["/categories/生活/index.html","9a91e3ab321bbd2c25042a1124ea7327"],["/categories/生活/长大后明白的道理/index.html","72b07a667f44d8d9d9382576187b51c4"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","8c9c1e564eb239847c8415909ab7f586"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","545f46d486eb2b530cd0a7e1ec5b7239"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","6706ee853a12e0f634acafc9aa83418b"],["/movies/index.html","00c84b0a71424302a441dcf5f94a41c3"],["/music/index.html","8cae3beee73d2ed004e260303794bfa2"],["/page/2/index.html","c7d6eb9fdd2487c0d6cd67e1923f7848"],["/page/3/index.html","37b40ff28873cd2fc6338bb7b346cada"],["/page/4/index.html","941d7c9d6281acd7543166d55148a21d"],["/page/5/index.html","8c4e64b7b8b6a8cd76a2ae78cd2f8f00"],["/page/6/index.html","f012c300f085e457717665f1ee3c9f02"],["/photos/tangyan.html","b6e3f71f3a619d9f887c4d2eeebdf63f"],["/tags/Emmet/index.html","5e02979c8ceeb49d532c35c27ebaf437"],["/tags/amd/index.html","1d1925c3d6eb647460bf00c13d519a10"],["/tags/cmd/index.html","0a1b7432ee6edd745ac128d9a88a1e6e"],["/tags/common-js/index.html","d973429ef5a0119ec9e71dfe5d670b3a"],["/tags/cookie/index.html","784e1d90202925495e5f6100febfb7c8"],["/tags/css/index.html","4d387a68ef3abbf7c1f8d0dde55f13a1"],["/tags/docsify/index.html","238698122f5454225bc798ba190142c3"],["/tags/flutter/index.html","749fde49bbcc0b6a131e30dc402c615e"],["/tags/hexo/index.html","fc335d98a224689890d753978d158ab9"],["/tags/html/index.html","500b921e972a86108ddbc4c93fd98d86"],["/tags/i18n/index.html","44273b24743d32fa1db60d854078da0c"],["/tags/iconfont/index.html","aa88a95d170ff4f37578a8fd74f1f0a7"],["/tags/index.html","e156627000e7d3a5d8e82d936a2b6de7"],["/tags/js/index.html","8baee6a7ea0b25bac9d12d8aa56e0877"],["/tags/less/index.html","edf715a66a849683da37005c05d90780"],["/tags/npm/index.html","13bfa20b2fe7b334df4161b5ff5ae449"],["/tags/nuxt/index.html","c965bc0d4870e6cc11d7b8b8929201ad"],["/tags/proxy/index.html","a65d194de0430f3a585a17e6577b2eeb"],["/tags/react/index.html","55845dac5ab942546f5d78edc3317237"],["/tags/ui/index.html","2bac4ef8185215ec6b48788c68edf585"],["/tags/vant/index.html","f53f151c766fc3b59c88e0816d3aeceb"],["/tags/vue/index.html","d1800ccd0be66b56ce24c7346c941d5c"],["/tags/其他/index.html","bdf220ec48cf7d0dcf05d42263388c5e"],["/tags/基础-一/index.html","892562b432ce5b75c39c68c4aefe2fee"],["/tags/小程序/index.html","94f1ed96e6e04896702b99ca23a70e11"],["/tags/数据结构与算法/index.html","d60cfff8bf28eab517699cf090e3e633"],["/tags/生活/index.html","633e9b25ca95abb45aadd0881f069e96"],["/tags/目标/index.html","c8a6ecddffe47b90d60d7da47d1a4494"],["/tags/规范/index.html","78da822c4b401760646416f65d727321"],["/tags/高等数学/index.html","4ee3fa40e3b89b020ac58cbb99c06d96"]];
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





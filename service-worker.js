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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","a4a6e94a56c6e084bdbf93ff293bc06e"],["/2017/09/12/css/block/index.html","f32df35fc7074cd94a8aab9fbc8ec754"],["/2017/09/12/css/css-properties/index.html","f65d81349b560f9a5c6191522f45fa6f"],["/2017/09/12/js/closure-js/index.html","155195b6f1598db566cb9e04ec011ae9"],["/2017/09/12/js/prototype/index.html","7b36b43385977adb6ccd305199ea47bc"],["/2017/11/12/cookie/set-cookie/index.html","275dec104305c8a5389c74d081a7e25e"],["/2018/02/15/docsify/docsify/index.html","5012d8396bc43dbe3c1c9ac84cdbb3f4"],["/2018/02/15/html/divCenter/index.html","ac1d9ff96317e3c1bda0047181b1b0ee"],["/2018/02/15/js/RegExp/index.html","3ba7cf2e673c6b6d30e56d3378b97a7a"],["/2018/03/21/js/js-set-html-font-size/index.html","0da00630717f9b136ee83e90a366dc35"],["/2018/04/15/wx/login-wx/index.html","25d035882f466993a153198b40c12ae3"],["/2018/04/19/other/norm/index.html","b25458577c0ea490395c455d1045b2b4"],["/2018/05/12/js/qureyUrlParams/index.html","3066c71d5d52f5c47c53fd2f56cba4f6"],["/2018/07/13/html/layout/index.html","edbe8b7ad0c041cd399009dcb187d9a4"],["/2018/08/15/js/amdcmdcom/index.html","712aab04b99d34cb0188081b2f3aafcd"],["/2018/08/15/vue/vue-1/index.html","0be0202c557775f2b4b71fa63c8416e1"],["/2018/09/12/css/css-line-text/index.html","f02637b787f7b1b8cd15c0af35cda8d4"],["/2018/09/12/other/classic-article/index.html","da45b658835e31c3b3c9af7177d9fa73"],["/2018/09/16/css/css-attr-practical/index.html","0404e1a24a367adf82e84556ed2eb65a"],["/2019/03/06/css/css-margin-negative/index.html","16e2cffe50fed2e1b8389060db0b0030"],["/2019/03/21/iconfont/iconfont/index.html","70d4b9cc1578c636fa77cb8b305c65e7"],["/2019/05/18/vue/vue-i18n/index.html","f1cb6f1bd3d072bef900671889ba25ea"],["/2019/05/24/vue/vue-router-parms/index.html","5503098c536e302b7b503c2b850d351e"],["/2019/06/04/vue/vant-list/index.html","b2530cc93720a0272155bcf054c96bf0"],["/2020/03/20/hexo/hexo-gitalk/index.html","2478849281d7f85359f342fc5a8f4b7d"],["/2020/05/12/vue/vue-proxy/index.html","2ebe89f08dc3f0287e49b369fe8198a0"],["/2020/06/30/hexo/hexo-move-mac/index.html","bd257c16451bb3f55c533cf599ad8536"],["/2020/07/03/vue/vue-network-online/index.html","79c3b98bb90c9f1d926c145083b7e02f"],["/2020/07/07/nuxt/nuxt-i18n/index.html","1aad949118060b1d3a6cb95134d881da"],["/2020/07/09/nuxt/nuxt-proxy/index.html","82826830c956976ee670bc22dbf63b2f"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","9807406e30da9aa1e24c334a0a8bda0b"],["/2020/07/13/less/less-var/index.html","01dcdcf08db76ac2cd03bca4883b3133"],["/2020/07/23/life/life-big/index.html","c4e387b71812fc6a827fdc13b40d6ede"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","9891d17e74d0bc5286c2fcc5d8e04395"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","fce6887e30cfc405cbb4b8222263bb20"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","04f39ca5cb05e8e89e1b4455bc60b32e"],["/2020/07/27/other/zsb-math-gs/index.html","bb2e1d426b724564bee144105d5052df"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","ab150986fda7cbb1f9521535bd815fe4"],["/2020/08/06/other/target-2020/index.html","a40d11b04bc0879613bd4c7ef45cd580"],["/2020/08/12/js/input-fixed/index.html","f9eed99abeb4496edee7eab2555dffa8"],["/2020/08/18/ui/peise/tonal_balance/index.html","8bf7ed5712c8aa15414044549b521062"],["/2020/08/20/css/effect/index.html","7aec58f4fab45d5d18da952a3172f429"],["/2020/08/27/css/unit/index.html","86fd922a3bd713f7ef55d95428d9e3ac"],["/2020/09/01/react/antd-mobile-theme/index.html","5053029c247977cc2aa2a91e91bcf30e"],["/2020/09/09/js/js-cookie/index.html","3feeaed7e489cb6e28009619b3c62f1e"],["/2020/09/10/vue/vant-ui-code/index.html","646032f6bd57763388bf97e4a5cb0c7b"],["/2020/09/21/js/log/index.html","b5023d3814e7ab90385cdde129b129d7"],["/2020/09/27/npm/package/index.html","94e23c5ef4a9dca911392ea0f1ffbdbf"],["/2020/11/02/html/emmet/index.html","0d567cf2062ece0c0389320d4c883943"],["/2020/11/15/flutter/basis_one/index.html","25849527adf347b5b16712b8703fa4df"],["/2020/11/23/js/change-url/index.html","4a26b286f0c9e9076e26def849b3cb40"],["/about/index.html","ad0cfbc03de7faf90062f8b77fda5dcb"],["/archives/2017/08/index.html","7e9c2faac3f333b7b9b2c919d58a1726"],["/archives/2017/09/index.html","4e504d23f67ba75fc23a7fc5732a9ce0"],["/archives/2017/11/index.html","5ee39f7057b0dd563f84d2877f5b51ae"],["/archives/2017/index.html","1690e3ec3affdc88a976f81218e944d0"],["/archives/2018/02/index.html","8b05e05faacc7db075717e29e2aed2ef"],["/archives/2018/03/index.html","5894675dc773f6f1f8e7e3b595fc0b51"],["/archives/2018/04/index.html","695e83350eaae2a2bab59c36b802dc74"],["/archives/2018/05/index.html","6fcd6f706f849913c0965609c2b3e512"],["/archives/2018/07/index.html","a331ae804a95082a1cd07aa4b094ec8c"],["/archives/2018/08/index.html","bad450b08154a4fff2ec042686d0933a"],["/archives/2018/09/index.html","27dde3ccaeb321a6e43c59f6a4d2983d"],["/archives/2018/index.html","52c0ed1318ff4602839081faec31fe56"],["/archives/2018/page/2/index.html","c88703fb487ad87d8c9d8ab130e79890"],["/archives/2019/03/index.html","9f0f48962cfc2d2e02489b21291a6dca"],["/archives/2019/05/index.html","18096ec3ca23e59aac6a96e9112a4988"],["/archives/2019/06/index.html","54d1718431843b41008662efd76f32dd"],["/archives/2019/index.html","9bc3e9ebb9be8e6b2a8415ce8c324e1d"],["/archives/2020/03/index.html","b46fd9f01c31eea36698a28148841607"],["/archives/2020/05/index.html","cb63666d44a53e76dec80c712a8d8835"],["/archives/2020/06/index.html","92bb03ba981d36e72f63bc54bc0b9725"],["/archives/2020/07/index.html","6a88640964c4eedaeb25c857c7437bb9"],["/archives/2020/07/page/2/index.html","fad0e873ab933ce3848c8181245dacf6"],["/archives/2020/08/index.html","1da0d3a860b67940a4fdb58efd4d0d4b"],["/archives/2020/09/index.html","ab89943fb6df5f84f8f77b5ad5e50a95"],["/archives/2020/11/index.html","655fdbc22aba11a8210444ab37a24d3e"],["/archives/2020/index.html","621539f859ce13d0abbf9dc8d5599230"],["/archives/2020/page/2/index.html","02a3260f0d7dba1702edfabf5af55c78"],["/archives/2020/page/3/index.html","02b9ca49f1fb62b76647009a601f2a8b"],["/archives/index.html","abd1eaaa3cf71e0106b0c95968d47517"],["/archives/page/2/index.html","3a9aa5a15a8221fd3609f23a1cc49975"],["/archives/page/3/index.html","91a14759410b529fe307e81b7fee32b7"],["/archives/page/4/index.html","22761e72e52e184a8f72f3293375eeb4"],["/archives/page/5/index.html","8fd0205ba6d974e83099ad05d7d30cf5"],["/archives/page/6/index.html","900e6c1d4f0eeda500d8cde490d1148f"],["/categories/Emmet/index.html","609704b6090adca1c62736bb89d8f2b4"],["/categories/common/index.html","2ffd129dd80118b19f9daf966e2fd4af"],["/categories/cookie/index.html","b51817402957f019bc4b90c7a7235abd"],["/categories/cookie/设置cookie/index.html","3a627a82c828be8acdd325353703911d"],["/categories/css/index.html","f5a748dccc517840560bf96d7b6b5921"],["/categories/css/三大特性/index.html","b61fd7613a29ba916aec8278c024208e"],["/categories/css/不常见但是实用css属性/index.html","11c727a2e7a1f7029b5603978582ac30"],["/categories/css/中间文字-两端横线/index.html","b3db20ec7983ef7d7df9d8591241c0e8"],["/categories/css/块级格式化上下文/index.html","5f82b67e9625abdd229cd4da993b67cc"],["/categories/css/水平居中/index.html","4e0608def30054acb20b4cb4d27190a6"],["/categories/css/负外边距的巧妙运用/index.html","ca020a0ce92039c12d4cbe07144736dd"],["/categories/docsify/index.html","3709e70c316c30620decd75901c74950"],["/categories/flutter/index.html","66708a9178be894272fe1478f3b59add"],["/categories/flutter/基础/index.html","5aa6fa71d8f6c017e6c51d2ca1374343"],["/categories/hexo/index.html","d0ef98eb6512b179742b3e6b2bf97dc7"],["/categories/hexo/windows转mac/index.html","73c12982cd7e000a24e9141969836368"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","fc1f366a02f49ad993e63c5fdd1a5d7c"],["/categories/html/index.html","a979a6355162c7870dbde9ca290dd4d1"],["/categories/html/基础知识/index.html","998cee40f92235a2420579ed4ac4f5fe"],["/categories/html/页面布局/index.html","8b5bfe3568e6c057a11077cd813fe318"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","1ec3a8f67ab66c3b9b676260577ddad4"],["/categories/iconfont/index.html","5d89ee5535a5f050b039626f6b4c2cb7"],["/categories/index.html","3ce7fe62b98d1bc21989293078f376b7"],["/categories/js/index.html","a6115de33bec4355832c85fac080824e"],["/categories/js/url/index.html","fa2177c107e781fde3203773e0cbe966"],["/categories/js/原型/index.html","8a4dfbe1093a1cbcef32d35e3768d544"],["/categories/js/正则表达式/index.html","af110ca08c20aca59292ed1a6fb04fe9"],["/categories/js/获取html到fontSize大小/index.html","fcbbe322eeed68f2a900885a2d032f85"],["/categories/js/获取url的各个参数的值/index.html","2cc8c88f989f8d38d733b7d441f68b0a"],["/categories/js/闭包详解/index.html","504aee391b677b5acf7a740d8d489a96"],["/categories/less/index.html","39ad2a51de5bea8bbcd6159c3a728404"],["/categories/less/全局变量/index.html","a679f674f54d5fb6b44b746a713b0705"],["/categories/npm/index.html","ade8584148fdb6043605d874c2e6f8bd"],["/categories/nuxt/index.html","e1cebeffa9c66efec2c6661bfdcbd9d4"],["/categories/nuxt/代理/index.html","3bc606dbf9be0ec5c1d7a0a4439a3d47"],["/categories/nuxt/国际化/index.html","61bdf6ce9e741e92c3ba952af756def3"],["/categories/nuxt/页面刷新数据丢失/index.html","14db39ddfb9cb485e9e9bc99ef7491aa"],["/categories/react/index.html","07c47c91c7c317202d65834cdd10d78f"],["/categories/ui/index.html","987e3f374e5a81a06be79da9b2f99c15"],["/categories/vue/index.html","f70de12c2fa4abefa6f8cad63832c407"],["/categories/vue/router/index.html","dcae061bad08841ebb3ab52c69556ac0"],["/categories/vue/vant/index.html","8d0452672cbe9bccc4e341e81ac5d4c9"],["/categories/vue/代理/index.html","40e6c4336585c20858d1bed0b2e751e7"],["/categories/vue/国际化/index.html","ff3cef9d6c49c24e375009a0a9d7aa90"],["/categories/vue/时时监听网络的链接状态/index.html","0d185a733d86b65d9b8ae2f1703c57ee"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","0a5ef7d5a0ccc996648470e42e773514"],["/categories/其他/index.html","2980709a470bc465e516265728bd7c90"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","7b78792a32d1d5a7e7a82a219e6538db"],["/categories/其他/目标/index.html","7393deee912cb5557ad443f7c9b2d750"],["/categories/其他/规范/index.html","cc32da52a9f168a1f7307bed7cec27f1"],["/categories/其他/高等数学/index.html","60d5183d6428c892be5df376a08d4c83"],["/categories/小程序/index.html","260d2e6c431399759db48c9c37ac7f63"],["/categories/小程序/wx/index.html","65e068e98748105df7dce6632265d893"],["/categories/数据结构与算法/index.html","641e2a3d57f43b7d07ba4157d004c467"],["/categories/数据结构与算法/图形结构/index.html","381399e7a6a7f46876a4b3a7f385bdd6"],["/categories/数据结构与算法/排序和查找/index.html","5be9051c7a57127a522d812ebfab761c"],["/categories/数据结构与算法/树形结构/index.html","da6be59ba51e390a192644e4b8812b20"],["/categories/数据结构与算法/线性结构/index.html","40d5ba0057f64f5ed92cdfc361608414"],["/categories/生活/index.html","62546e47fb789823517f969ff3020780"],["/categories/生活/长大后明白的道理/index.html","08a4e03ac4797c7bc155b3be86e1c0e9"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","a5b0dfda69a2c41eddeaf12d46096eef"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","a2fa6f3c76bc3c5f8e11f19b76e894f1"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","4788b1c70eb987f81b64df0e671d4a34"],["/movies/index.html","fc2a83e010dc0afdcd8e2b0667287e87"],["/music/index.html","ba21e1a85166f7f9169fc8537debfa2b"],["/page/2/index.html","89bb6d67622da3995c44f8bd1d4bd3a5"],["/page/3/index.html","7d8a555adb30fa92aea21d66174117ae"],["/page/4/index.html","3bafe9886638d70b937cdec75bf88d6e"],["/page/5/index.html","4125a3ee96525ef0ab2c8725376545e3"],["/page/6/index.html","22096dc8e9b417c4d64e42a16e8ec2e8"],["/photos/tangyan.html","18abaab7d1c97fa9aa66ace8da314acb"],["/tags/Emmet/index.html","8b7e7b2cbecd2018c9a0a86780209fe4"],["/tags/amd/index.html","195db38368222d9f33fb8528d85bdcee"],["/tags/cmd/index.html","7e5cb9b26b89c63098837721642c3e64"],["/tags/common-js/index.html","01bbcde361de4e4fb75b3d2628e13bc8"],["/tags/cookie/index.html","d4c1b2afce073cb729176128a2228b9c"],["/tags/css/index.html","56e05b4f81bee20dc704db258b204382"],["/tags/docsify/index.html","ab4041c99f1bf2742f4c0424f94f731e"],["/tags/flutter/index.html","a21ecc9af5d554f9e33e62e3bf5cf525"],["/tags/hexo/index.html","e654735ca8617dd5bca869f05d8e4384"],["/tags/html/index.html","4d248f3fddfaae8c90f3bc019b1cf2cd"],["/tags/i18n/index.html","ff0329f0d7cd11a6234c1ed8da1f5d22"],["/tags/iconfont/index.html","2eae5a7946fa0d9af6fb0c642285bb8b"],["/tags/index.html","b3d20bed43414c85ae633b8fe835053f"],["/tags/js/index.html","d4af5cf504c0893180f1352a1288138b"],["/tags/less/index.html","d819c05d6fd9a9f7a7fae6801a8026eb"],["/tags/npm/index.html","998da626ccd0f240de8b7638c6163e8b"],["/tags/nuxt/index.html","140b4acff024b52de525c7a87035da57"],["/tags/proxy/index.html","d58b569d666bda492f3ee596fd7027cb"],["/tags/react/index.html","251aed4bd6b40474a75bc7c17e3c86a1"],["/tags/ui/index.html","e12387ddfa0abd94dcdd84e777ea8132"],["/tags/vant/index.html","917cbf679c456575c19da4104d9f8614"],["/tags/vue/index.html","c8f4193ef643edb9dda368693af4914f"],["/tags/其他/index.html","9b6fc6a516d5426f0bc09aa69417fdd9"],["/tags/基础-一/index.html","d84f26bc3fffdb7d7e48ac1fe40035d4"],["/tags/小程序/index.html","c34ad313685d9276d232004281bbf128"],["/tags/数据结构与算法/index.html","27735822f7dd9348369b1cbfc450f556"],["/tags/生活/index.html","fec3e2f8c0136ea088ad3d574c2236a0"],["/tags/目标/index.html","e15493625dc29f8044a064c6ebf2b48e"],["/tags/规范/index.html","5a6c28a3aade0428634812a8a61c86e8"],["/tags/高等数学/index.html","d0379fbb36ca96b8672218daaa50a605"]];
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





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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","d7684ce461c104a1b4f78bf48091819d"],["/2017/09/12/css/block/index.html","b61b2724cd23be95fedcb79040b3f3db"],["/2017/09/12/css/css-properties/index.html","478b9cef49189465bff44ae7ed818335"],["/2017/09/12/js/closure-js/index.html","abdde83f5f1286e1455f599d8de338d9"],["/2017/09/12/js/prototype/index.html","59b962c6992ec53ceaa38d1cf3d0427c"],["/2017/11/12/cookie/set-cookie/index.html","beae36f5fd14681f68d9b0c0bbe4bf99"],["/2018/02/15/docsify/docsify/index.html","ca60dc60fbd0ec47974fdc82a7496812"],["/2018/02/15/html/divCenter/index.html","f25fc3a5ef37faf6c4faf8c20b474a41"],["/2018/02/15/js/RegExp/index.html","67be6e4cda2f5fa987d0f8f3c5dfbfbe"],["/2018/03/21/js/js-set-html-font-size/index.html","4729d82bc6d70af8a037452f8e1fd4a8"],["/2018/04/15/wx/login-wx/index.html","5d9f7fc3b2d7eef572f0c5e34348cbfb"],["/2018/04/19/other/norm/index.html","41d00644bf15be2bd355f9a22ec0880d"],["/2018/05/12/js/qureyUrlParams/index.html","1ee4ca91adb684f78a5989262f479d08"],["/2018/07/13/html/layout/index.html","2a811436aaab5dc4a0eeb26a4b6aeb85"],["/2018/08/15/js/amdcmdcom/index.html","d332ac00586a0808d1426a528e63d445"],["/2018/08/15/vue/vue-1/index.html","ef16cfc62847dfd8d5d58ec54dccf68e"],["/2018/09/12/css/css-line-text/index.html","899bab7214ef5d6e5bde5bf94c91b5b2"],["/2018/09/12/other/classic-article/index.html","5912ed3870e63256c0f829e4c4fb54bf"],["/2018/09/16/css/css-attr-practical/index.html","6714d640633cf54dd2af8d653d379f8d"],["/2019/03/06/css/css-margin-negative/index.html","c7380750ab1cc2b3970552e824655c37"],["/2019/03/21/iconfont/iconfont/index.html","dd41026b3759e97d64ba6fb24868b5f2"],["/2019/05/18/vue/vue-i18n/index.html","cc1c7cd23d8a80c7b708bd2fb48dee04"],["/2019/05/24/vue/vue-router-parms/index.html","269c545f1b9d78a6d0d1144eaa3ad0af"],["/2019/06/04/vue/vant-list/index.html","9fe5409421658bb45b5d96278aa198f9"],["/2020/03/20/hexo/hexo-gitalk/index.html","bbff59c01b2fac6d395364fbd13be3ed"],["/2020/05/12/vue/vue-proxy/index.html","5cabc8547a14f40643c939d560ec6708"],["/2020/06/30/hexo/hexo-move-mac/index.html","250d23e6bbd6d81428114e96975a2653"],["/2020/07/03/vue/vue-network-online/index.html","2f46516e90ca3a5744babc82a9497315"],["/2020/07/07/nuxt/nuxt-i18n/index.html","116f4267e36c82e225f19f288005a1c3"],["/2020/07/09/nuxt/nuxt-proxy/index.html","6d7140f774da56d8eb904d4fecb250a4"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","e011072eb0ea0728ac2fb0968303c5c2"],["/2020/07/13/less/less-var/index.html","e6d3f0dd908770ec2d7c1ec35dd13727"],["/2020/07/23/life/life-big/index.html","376009ab32dcddb4381f85f87077d8e5"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","46bb434b706370664b0978d76a5d1b71"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","ccea1f18cf68d97726d8f61d22e5c8ad"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","9fd06c3a1b2f008f37c18959e6d69c00"],["/2020/07/27/other/zsb-math-gs/index.html","65da2baa08b39ff0bab5e6bacebcf210"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","5b67282bd4fbea1d7155c2a17d570b5d"],["/2020/08/06/other/target-2020/index.html","0a5d165f797b65ff789a3503c9cf8da9"],["/2020/08/20/css/effect/index.html","0e3a276d85fda50621cff6b59c2ec7f7"],["/2020/08/27/css/unit/index.html","799f21e1763d768eae70851d41261a9f"],["/2020/09/01/react/antd-mobile-theme/index.html","bc8788b1af1fa685a32d83cf4a62a56c"],["/2020/09/09/js/js-cookie/index.html","650a885506ffba3735d3a75acea6caed"],["/2020/09/10/vue/vant-ui-code/index.html","6c07a5cf0fdab5a8bed291236a1b4c23"],["/2020/09/21/js/log/index.html","933141d0dd9c43632ab0ea46681a75c3"],["/2020/09/27/npm/package/index.html","182215d9da235141eea05cded454bc27"],["/2020/11/02/html/emmet/index.html","a4c0986f99ca486ba6cf51ece51f79ee"],["/2020/11/15/flutter/basis_one/index.html","7193ee48bd4ff140288f5e4002659494"],["/2020/11/23/js/change-url/index.html","d68874b2f3035b1a9a474a9ca8b7c2c8"],["/about/index.html","52be84b34e96d82a7ea1c00c85594c52"],["/archives/2017/08/index.html","da58ba8a92b5eeaea8bae6743084f204"],["/archives/2017/09/index.html","a435b5d59ef5c3ceec1d4407b064d7cf"],["/archives/2017/11/index.html","e16b1543e6f2a5e33b411028175a006b"],["/archives/2017/index.html","28539bf32dbba1e876260b650a5088ab"],["/archives/2018/02/index.html","3cf4963e52b56134b232b1cf5e2a7a50"],["/archives/2018/03/index.html","8b0011587243b18fcbfb5ae3d4fa7c94"],["/archives/2018/04/index.html","a1359397412d726287ac72a1333e8c8e"],["/archives/2018/05/index.html","e6bfaf7b21c21cc3ed38860d21726ea4"],["/archives/2018/07/index.html","17fdd6996a9015b4c2ca906260ca271b"],["/archives/2018/08/index.html","9f351400b090d3d13cf3367dc6f3e3b7"],["/archives/2018/09/index.html","e7679b57f11b93cc3df5d54d345c844e"],["/archives/2018/index.html","fbd7e08689fc6ce3a89178e1ad3b3e96"],["/archives/2018/page/2/index.html","ab49121c71881fbb97668f26bfdf0a06"],["/archives/2019/03/index.html","da84a5a0a08f127ed7425ef32ffe42e4"],["/archives/2019/05/index.html","63bb9664f8f682675a9864320d9cc4e9"],["/archives/2019/06/index.html","d30dae24c8273ee095f34363261e0216"],["/archives/2019/index.html","e61cd2875f0d28f0c330cc53bf00892c"],["/archives/2020/03/index.html","c4d479d13489269c858d7abec134fdfe"],["/archives/2020/05/index.html","513377c05f32588d29cdabf2f4434486"],["/archives/2020/06/index.html","b9b7d35f93973eae923c5cf2a678c57a"],["/archives/2020/07/index.html","a66404d263bbfe2e767161d532422b77"],["/archives/2020/07/page/2/index.html","e9cc3703c89a35f6b64fac1e9d90f52d"],["/archives/2020/08/index.html","51599bba22ba98a6bbef4959a13debc8"],["/archives/2020/09/index.html","1f5d355a0cb9ed4796135dc1af9de348"],["/archives/2020/11/index.html","4d1851942ce03c4ea0b7e0e82e19d888"],["/archives/2020/index.html","f7755f913fe6dcce193b8a0ed44d3a44"],["/archives/2020/page/2/index.html","8b2c58d14ceaacf7aa0889c744eeec29"],["/archives/2020/page/3/index.html","b95cf00783311539f851d5aeffcaad7e"],["/archives/index.html","727d0bd8aacd9f4f11aec893b559c98d"],["/archives/page/2/index.html","ef46216fdd6b569ec1549e1050a92f76"],["/archives/page/3/index.html","71d993ee1efdb519ff9da544b45d5a11"],["/archives/page/4/index.html","89abcca2eff5293730475692800e5ad1"],["/archives/page/5/index.html","562166154a49484b17e24f471c9e6ff7"],["/categories/Emmet/index.html","754ace4911cc89e33fd9655d13a8aebf"],["/categories/common/index.html","968da616e0a964fbec11a4bd67a4e8d8"],["/categories/cookie/index.html","adece59532d2a339b9e0dbc56407e07e"],["/categories/cookie/设置cookie/index.html","6d614d11e045ae1bdcbdaf9c41c145bd"],["/categories/css/index.html","8f8cf7b6f809493eb7da1577c821456d"],["/categories/css/三大特性/index.html","5e6d94f346b677f834af8d05c398b58f"],["/categories/css/不常见但是实用css属性/index.html","4ecfa1e4aed0579e21d5c6e4a4dc52d3"],["/categories/css/中间文字-两端横线/index.html","60f7bce11e21feb407544deed37203b1"],["/categories/css/块级格式化上下文/index.html","57dad090f5af9f5bcd6886614988a013"],["/categories/css/水平居中/index.html","329e62673a786d261cc9ccd82d114e73"],["/categories/css/负外边距的巧妙运用/index.html","1245acbb7a528b54471991c16ca9b1b2"],["/categories/docsify/index.html","e36d6f723842b874de85c28f292e764f"],["/categories/flutter/index.html","c6adc93f429652f684770dbd07b57c74"],["/categories/flutter/基础/index.html","ae95f4d97386b50586f913f586dc8b92"],["/categories/hexo/index.html","c377c760cbee9d9bdafa5f37c6582d2c"],["/categories/hexo/windows转mac/index.html","a82eddad8b4e003b3a765d16e64f23b8"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","68000f1d68f6a1ce166661135a7180df"],["/categories/html/index.html","c24d5dcfe4342454a3e798b7b4acd3fd"],["/categories/html/基础知识/index.html","1a6f9224ec39a69be49b7384f8e72206"],["/categories/html/页面布局/index.html","c4d3151b879d876813d42a50d8261ff5"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","1f2501f8ec3b3c9520f6dc61428a64b5"],["/categories/iconfont/index.html","ad254592b0585e235c7b21a5293fe0fb"],["/categories/index.html","ff7f4318966517ecd7a39e87c50b5b5c"],["/categories/js/index.html","87c35317d54889cd024ce3ad634e37a2"],["/categories/js/url/index.html","501baa5fa6322e7aeb35ce16aa91159f"],["/categories/js/原型/index.html","dba7bf69ea1e9042d49ebea745cfd467"],["/categories/js/正则表达式/index.html","1113ba1ee394e7a1a9a69fb53d26bf1c"],["/categories/js/获取html到fontSize大小/index.html","32426e3471019007d756f37b6f2477e5"],["/categories/js/获取url的各个参数的值/index.html","04237d3e3f71b86f13d3e86bc8f412c2"],["/categories/js/闭包详解/index.html","b3fc19b5bd352d6a10d479012f87f321"],["/categories/less/index.html","aa6d1dceae6925c69b99a87c30583bce"],["/categories/less/全局变量/index.html","a67722999925a3fb2e79f89ff3f31221"],["/categories/npm/index.html","db99ed6c4fce773946bc46d7ecf360f7"],["/categories/nuxt/index.html","533fb3bbbb2526eccf631e13d70bd1c7"],["/categories/nuxt/代理/index.html","03248b476415b5ae000a774827a053b0"],["/categories/nuxt/国际化/index.html","183589260463c60d91031125345968b1"],["/categories/nuxt/页面刷新数据丢失/index.html","f4d8a64ede8e76a1e40b45f54c5ebfcd"],["/categories/react/index.html","bf136059515b9c3d59f1d7a6e3c2b89b"],["/categories/vue/index.html","ff5b8b4cdfceca45d15431c5cb198e5e"],["/categories/vue/router/index.html","ce62e99f7700849e9af7e5293c0d6aad"],["/categories/vue/vant/index.html","b0d84bbd179a7a9b4435351dee733cab"],["/categories/vue/代理/index.html","3f15e3d272ba49d95396821ed5fe86d9"],["/categories/vue/国际化/index.html","ba622a29fa03d880a87188815e60a26d"],["/categories/vue/时时监听网络的链接状态/index.html","358846e55684b5853bd21ffe2a9ebe3c"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","a94bfee442795db30a1530bb110d7391"],["/categories/其他/index.html","1f7692ab87030d075cfbac8ac3882ef3"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","910922b93d2abd604d1d7df812aab78a"],["/categories/其他/目标/index.html","8a1034cd54fd6126033188502bb8779d"],["/categories/其他/规范/index.html","f0fd7b89aeb47d196e61bcd46e3cf87e"],["/categories/其他/高等数学/index.html","e248af63dd5dc2b10bb539a6e3b05861"],["/categories/小程序/index.html","f03e920cf1b99a069cfe32047023f13f"],["/categories/小程序/wx/index.html","6d8b4e197f622c4b13e0c9d68cc8b35f"],["/categories/数据结构与算法/index.html","50d2c06f5079413cf01456b7b7a8d5d4"],["/categories/数据结构与算法/图形结构/index.html","fb04e300c1bb9cbcab3866b8131cda3f"],["/categories/数据结构与算法/排序和查找/index.html","8877354ec8f8b6c343e2d7068bb06e3e"],["/categories/数据结构与算法/树形结构/index.html","2d681bd4cbf5d88932fb88ce08fcf880"],["/categories/数据结构与算法/线性结构/index.html","3263c5e9ddcc48c34e6656275b9b905a"],["/categories/生活/index.html","67349fc3382482fe4e73077b5c5e4b78"],["/categories/生活/长大后明白的道理/index.html","7a57bca0941fee5f47603f97f5e9d371"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","40f5b0368beab804316324b04d95b750"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","fa0840ad45fa5b763ef3dbc90f30ae4e"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","49f94dbe9ecbad540527078ccedfc297"],["/movies/index.html","adea7f1ed73f42c73dc2b2d53dab7f8f"],["/music/index.html","a70e7495b48607d49557391871c8c970"],["/page/2/index.html","b11a8351f56c5c831163f6184b873b6f"],["/page/3/index.html","87276263059a96d08d74039ae0e66a43"],["/page/4/index.html","c55a20f6f3018787e96288c59ae7af49"],["/page/5/index.html","ecc2ef69e0af2f3e58b38b8aab083aa7"],["/photos/tangyan.html","ea91b77cd85fa00312043c7762f9b581"],["/tags/Emmet/index.html","e5da498806e8be5c46ad0d486cad16ea"],["/tags/amd/index.html","c2778076dfe1f5c3110c8d5d518cc0fe"],["/tags/cmd/index.html","36a0e5c82df255c2b96d542f413ff9f6"],["/tags/common-js/index.html","1e5766acb00548308de1b6b928c03393"],["/tags/cookie/index.html","8d22843d73436e89c26e51aba735e98d"],["/tags/css/index.html","708a82ad1f1dbb9932801b1ad8e22900"],["/tags/docsify/index.html","03255b31c27e980bf2d6ff3efaaca985"],["/tags/flutter/index.html","e05aa301daef1cec210d31e1d2af98e5"],["/tags/hexo/index.html","ca1c416ca448d36dac8aeededc8ee6ba"],["/tags/html/index.html","64b8c75fc4d7fda6dc8862e90ba9d488"],["/tags/i18n/index.html","62b43bcf799341e8581815032a5e22c4"],["/tags/iconfont/index.html","aa4843afa4bd090ceabcac39acb6dd91"],["/tags/index.html","3e40d5487ab66515684f979c01d46e91"],["/tags/js/index.html","de1421b7af8280c7894f7df612953ca1"],["/tags/less/index.html","3dbd3cf69efedf0dc59d6624d6c8dc9f"],["/tags/npm/index.html","336712896ad5079d82546e5c1c684670"],["/tags/nuxt/index.html","06e7386c16595650d5ec5e10a70f41eb"],["/tags/proxy/index.html","e84b01e872814bcb9ff93901e7fdcbed"],["/tags/react/index.html","2731c553a49a45bcb83585ef385fcbeb"],["/tags/vant/index.html","67f76351aab04c08fa4bae96ee98fc6e"],["/tags/vue/index.html","cc0eba8f5dc2c45bdf732479b3fb5443"],["/tags/其他/index.html","026a0f8af3b42c4875a1feee66d775e6"],["/tags/基础-一/index.html","e4613676ba0ab1e8de65ffafed99b1d1"],["/tags/小程序/index.html","274aeb5cada7bf97d6f4896f987467cd"],["/tags/数据结构与算法/index.html","1baa85731c9361385c347a37ce89fdbc"],["/tags/生活/index.html","a4d6f28655ea5d3ad73e5facd2409fd8"],["/tags/目标/index.html","70433a82586917c9a4134d8f69148e78"],["/tags/规范/index.html","5f816e49765a471fd9e83253e5de3eea"],["/tags/高等数学/index.html","e04525c63f307bc7c21eb2ca6d3546bd"]];
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





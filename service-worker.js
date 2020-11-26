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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","7099626b1adeefa9749476f031af7153"],["/2017/09/12/css/block/index.html","0283649606b213f56782581b6f24f1e6"],["/2017/09/12/css/css-properties/index.html","9f7e68fb2af8b4e5bcc55de35cc7cc86"],["/2017/09/12/js/closure-js/index.html","113455e784c2c7736da9740a90b577c8"],["/2017/09/12/js/prototype/index.html","ac2a9488376a8928fd4a76be961d3d8d"],["/2017/11/12/cookie/set-cookie/index.html","0585f1a9c37557844395054176bba0f7"],["/2018/02/15/docsify/docsify/index.html","b232561e99554be4ed156608eeafe88f"],["/2018/02/15/html/divCenter/index.html","a7f20e108d5502dd31c68eb664ff199c"],["/2018/02/15/js/RegExp/index.html","1962a77d9a75182c73b13d6f6db69341"],["/2018/03/21/js/js-set-html-font-size/index.html","5f1cc9f6eaea4ced7c345a75e4023c6e"],["/2018/04/15/wx/login-wx/index.html","019d766f81b3486ae29aed458583a58d"],["/2018/04/19/other/norm/index.html","062aa40757e65c6687abda0ea643df1e"],["/2018/05/12/js/qureyUrlParams/index.html","c495a7508ffb0fc677b82a20f4f0eec9"],["/2018/07/13/html/layout/index.html","88ae548bde41da244933218a5f2e1df9"],["/2018/08/15/js/amdcmdcom/index.html","fa759a83f432f96092c129342b5d9b7e"],["/2018/08/15/vue/vue-1/index.html","4c72b8b8ae89e4454c954c42332dbd79"],["/2018/09/12/css/css-line-text/index.html","25820c87c5bfae357a5719010bed4e1b"],["/2018/09/12/other/classic-article/index.html","7e678bb3944ba98cb3a9830234ea8d8e"],["/2018/09/16/css/css-attr-practical/index.html","e5ac2bde2bfdbd67223b55d771b9c592"],["/2019/03/06/css/css-margin-negative/index.html","0901d1795c4dc472061bd25fc2a066dc"],["/2019/03/21/iconfont/iconfont/index.html","66ce82de52b31591495c23d2220f34d3"],["/2019/05/18/vue/vue-i18n/index.html","2c528616a843a78a043f9b20d3124a74"],["/2019/05/24/vue/vue-router-parms/index.html","c689bead1c749a728804596a0a095201"],["/2019/06/04/vue/vant-list/index.html","a1ca32dbe7064c1e5652dd2ad909e9a3"],["/2020/03/20/hexo/hexo-gitalk/index.html","0c1b6d527f9fb03e79d05acf31929bcd"],["/2020/05/12/vue/vue-proxy/index.html","45adc72cbb8a008a62f4bde4b3855632"],["/2020/06/30/hexo/hexo-move-mac/index.html","433ed88db136553454ce89960b4334d0"],["/2020/07/03/vue/vue-network-online/index.html","d828373f9af1e09d04aea187b49b711e"],["/2020/07/07/nuxt/nuxt-i18n/index.html","ba16591561cdf1e47239b518e3a7ce4c"],["/2020/07/09/nuxt/nuxt-proxy/index.html","6b9885a93e9cd0d45835e2062121afc4"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","5e948a20917230c8f3c2f59ff7cd67f6"],["/2020/07/13/less/less-var/index.html","977c88484318a03ef604f37adc9108c4"],["/2020/07/23/life/life-big/index.html","901e74e081aca053bd7e79b54946d0fa"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","78e70a5e1b4827f22a12c5437c4eafdf"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","cb2037721c73a4173921cb17577926c1"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","284be4cba5950dc2425c07e4b85ddb02"],["/2020/07/27/other/zsb-math-gs/index.html","0a809c86999fdf262c3d520939851c8e"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","6c9c482e3b5c5093c890dc27c7107343"],["/2020/08/05/flutter/ambient/index.html","c30f9c86e8d3f1f8c9557d4c0b8ea636"],["/2020/08/06/other/target-2020/index.html","f0db829de4d939ffe80725964c81469c"],["/2020/08/12/js/input-fixed/index.html","ddd529217261bf9d20439f7bbd696e38"],["/2020/08/18/ui/peise/tonal_balance/index.html","020c8f2f3395e4d184a22c0be6e35201"],["/2020/08/20/css/effect/index.html","3b7716a65a03d815dc9b606367f18453"],["/2020/08/27/css/unit/index.html","d5fea4b07fe82371db219c2f26f67b5c"],["/2020/09/01/react/antd-mobile-theme/index.html","7a80cf723c95efa1f43c7ccefdba0b0b"],["/2020/09/09/js/js-cookie/index.html","42fe30e32d1fffa5673343e2f12951c4"],["/2020/09/10/vue/vant-ui-code/index.html","15780a4ca0c300cd85f811ac8acd896f"],["/2020/09/21/js/log/index.html","6a6ec8834b3585caef2eef31b911c000"],["/2020/09/27/npm/package/index.html","fd14bb5bd76af9fabfad927733af0e3a"],["/2020/11/02/html/emmet/index.html","97f5a9c5a1a999b81a680ab70e81158d"],["/2020/11/15/flutter/basis_one/index.html","d2503442813091364db068ad0f50afff"],["/2020/11/23/js/change-url/index.html","609f38b610cd741a9b07fdeb7075747a"],["/2020/11/26/ui/ps/delete-text/index.html","b3417cecdaa4922d9d4a1fe02fae969e"],["/about/index.html","3c09dc0d230aa0463accb98a8f83b209"],["/archives/2017/08/index.html","5671e337c0a960bdf5cb0cdf58b5f4fa"],["/archives/2017/09/index.html","36c7203004bb2cbd3f3ce6924e72c320"],["/archives/2017/11/index.html","07cd1a421a1bac516e5a35b0c2c48d5e"],["/archives/2017/index.html","ed4e3b9616d60473544f08cc6d477bdd"],["/archives/2018/02/index.html","1f6f8acfcad56dd35508a288cb5b663a"],["/archives/2018/03/index.html","c639d949f002c5edd13c7b997764b21f"],["/archives/2018/04/index.html","f5342b375fa50221415219c527632e90"],["/archives/2018/05/index.html","7b1e3ea85148a7d9060d7f095a0437b1"],["/archives/2018/07/index.html","3097c969878eeea77e45e71494c67156"],["/archives/2018/08/index.html","f042f07446680945ac25fb11e98a1d86"],["/archives/2018/09/index.html","bbd9f63023b39368d1d10c0a73a47be0"],["/archives/2018/index.html","52f060deaaebd25eccf8d29a1028843e"],["/archives/2018/page/2/index.html","73e53361e0cd8806170976f9aa676719"],["/archives/2019/03/index.html","37b72de3573a85fa33a25f36d6730fb9"],["/archives/2019/05/index.html","643627d629a8488746260977f9655c35"],["/archives/2019/06/index.html","5880ace530506cee58737ecfc44bbe8c"],["/archives/2019/index.html","bf074e8f979ba494cc513242871c3c14"],["/archives/2020/03/index.html","02fc1f499ec86294186ad42ad852e777"],["/archives/2020/05/index.html","8179767a67c171e6a2602323b008091f"],["/archives/2020/06/index.html","fc16a2dc624913ebec05ebfd1c59c0cb"],["/archives/2020/07/index.html","05f1daeeabab851ac79f19c4915368b7"],["/archives/2020/07/page/2/index.html","233fd61c0d6ca552644f98a0f2d27dcc"],["/archives/2020/08/index.html","1b02cbfa6d66d65dc64e1b8986787369"],["/archives/2020/09/index.html","dd41c28dd9d2576706816d4c39b14ec7"],["/archives/2020/11/index.html","b8c7a1b3eee74fe951eab6e9d7ab609b"],["/archives/2020/index.html","1c7c1642a3faf463d99e855a7b67cce6"],["/archives/2020/page/2/index.html","df2ca3d519dac1ff5492ced7ef931a2f"],["/archives/2020/page/3/index.html","6e38614e7a3bc76d9ca68ff27a01f1ea"],["/archives/index.html","08c7afef809f80a3285d4553f3ec4fc7"],["/archives/page/2/index.html","a4cdab2fe46ff121ad6a899b6c303db5"],["/archives/page/3/index.html","924b99f975d7204b298cb82da2cb6d75"],["/archives/page/4/index.html","8b081fa53a1207c3cf8be9ca7e4830cc"],["/archives/page/5/index.html","da951532e907c6550fc632ac7124e285"],["/archives/page/6/index.html","cc068a9c77eb37dd955c51e420a4b03a"],["/categories/Emmet/index.html","ba0effecd8ee91c2792e3b6717e38684"],["/categories/common/index.html","4576658d4ebdd741294c594d7c121a67"],["/categories/cookie/index.html","9f1837cea62cad1661515701212bf75d"],["/categories/cookie/设置cookie/index.html","bf68bf1c89969eed3a07625c7fc8f64f"],["/categories/css/index.html","2854974a7fd360c3c28f3afb7778b4c7"],["/categories/css/三大特性/index.html","ef0e68accf31eb42ce79735a41100dc0"],["/categories/css/不常见但是实用css属性/index.html","7b458dadf489fa9761811a0a1e697c81"],["/categories/css/中间文字-两端横线/index.html","eea952b6b38400844aba73837de5e350"],["/categories/css/块级格式化上下文/index.html","284878b6ad5f8a06c8467a4433ab704b"],["/categories/css/水平居中/index.html","04d54275a0eccca4d53fabb43a6efd93"],["/categories/css/负外边距的巧妙运用/index.html","bb6013decb71019ede50419252756611"],["/categories/docsify/index.html","1117aaf9562a3990b2db3cac06861b01"],["/categories/flutter/index.html","ed1c5cdb49d94b7ce2c55f0684500bd4"],["/categories/flutter/基础/index.html","65f10d5e4df68cf81c9652dbd8b03248"],["/categories/flutter/环境搭建/index.html","64787124851619bf1c07d7ae6bb27c9e"],["/categories/hexo/index.html","4450dd9d1747bd5f77e4214b843253af"],["/categories/hexo/windows转mac/index.html","0225835928f7fb04dc1191631fe7314e"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","7e49590177d2e6636c9ea93e9a76455f"],["/categories/html/index.html","e96e79e6064a00d32336ee347bcc7cd6"],["/categories/html/基础知识/index.html","27309a431365fdcff74138b18c1fe0cd"],["/categories/html/页面布局/index.html","a8e6266b2d83fca87f96107bc90faef0"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","e1f6bf2ee62ace3dd76fda75b0508820"],["/categories/iconfont/index.html","7a8126adbce28c09523e4eca9bf68210"],["/categories/index.html","0f4803116bdc7a41b2b2d0d1c637025d"],["/categories/js/index.html","56e1b4b416f93e23563ee14e99afb325"],["/categories/js/url/index.html","57385133043a8f17b2eb41f1a3cc5641"],["/categories/js/原型/index.html","e8ff7a5efe54264b68e8ea71ee4a5ebe"],["/categories/js/正则表达式/index.html","07967f69c3d9621f7a36b76dc34f13f3"],["/categories/js/获取html到fontSize大小/index.html","c56354457d0c69383dfb31ee1ba08e34"],["/categories/js/获取url的各个参数的值/index.html","9077a65cebd8103b7dae229e1832f02a"],["/categories/js/闭包详解/index.html","46157561d6c16a9d70abcf5e0582ac37"],["/categories/less/index.html","87094ce0011a5bd235b4517a4f154218"],["/categories/less/全局变量/index.html","7fea36e27f4dd6c2d429a0af79493404"],["/categories/npm/index.html","f751771ad4e8cd4e1b95b5abd1825504"],["/categories/nuxt/index.html","7b05531dcf945c89d0a851ed356cd4ab"],["/categories/nuxt/代理/index.html","9217be8a54bfd59bce5be743866dd2ff"],["/categories/nuxt/国际化/index.html","1473d4eb17b26dc40831f4691a5901f2"],["/categories/nuxt/页面刷新数据丢失/index.html","e3bb02a3124e4c609926b99e45fadb1d"],["/categories/react/index.html","dc3d2bc5ec9cf7ce50a9f5edec98fd0d"],["/categories/ui/index.html","6d411d59a2ae35fa4803d79ab67bd27d"],["/categories/ui/ps/index.html","4e200df034f8a1c27a924d99c9114395"],["/categories/vue/index.html","e611a1e1ffe9a4bca2f5856f23ed9798"],["/categories/vue/router/index.html","88c172908eb513cd7b6d309813c5874c"],["/categories/vue/vant/index.html","59bd25a24f698d63f7b4762b39f69227"],["/categories/vue/代理/index.html","a1ad3f1946b6dbcc2d25fcae550d7658"],["/categories/vue/国际化/index.html","143a172b83bd2102de8e5a472961d99b"],["/categories/vue/时时监听网络的链接状态/index.html","5bc5ba86223ee85c1bb8991f91d99f71"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","bdc2f53f540e3373da458d4209c84027"],["/categories/其他/index.html","aeb71cae4e6d92e71d0e828217907169"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","02a38b4e48e03867470e2ecca3653daf"],["/categories/其他/目标/index.html","7c303c4a00c704472039ec35749d08b2"],["/categories/其他/规范/index.html","01a18afa1cf3535bb30b836cb8894311"],["/categories/其他/高等数学/index.html","36939cec55dd4138de878d9e47fc5ae0"],["/categories/小程序/index.html","8e92a1abbbe6d07134220edacac54c36"],["/categories/小程序/wx/index.html","6c7b073eefd8a8257d2297dafad7ab37"],["/categories/数据结构与算法/index.html","c9e92ceff9088feb616e222914d3d094"],["/categories/数据结构与算法/图形结构/index.html","dd7c9666a68ca1aa1a634b682098b1cd"],["/categories/数据结构与算法/排序和查找/index.html","4750a71b968157a39f4b848b543b4d7e"],["/categories/数据结构与算法/树形结构/index.html","816c3627ef4a7471452c69d5aa165d7a"],["/categories/数据结构与算法/线性结构/index.html","d2cf8afe9ce5d0a0df06435851eb1ce4"],["/categories/生活/index.html","89a1138678d5749acc335f25d08b067a"],["/categories/生活/长大后明白的道理/index.html","ad2599c2c370235a658fd6ad874793cc"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","6a1dfa9d16741514db01535641cc4450"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","a27f60334e98f28cb72c89c878ddd9eb"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","cbba99800402b1e3594988c9c0da877c"],["/movies/index.html","e85b3298011e039e794f5a6f342e1958"],["/music/index.html","cbeaf6e6393adb2f50fd1106c5269d38"],["/page/2/index.html","72cc839a589353e21cf5c4a3a9f76455"],["/page/3/index.html","25d78a1305895e87d745125658df4338"],["/page/4/index.html","4b6fa1e0b5df81c7fb8b2c069aa3ee9f"],["/page/5/index.html","2f407f5e24122857f0aade5492f3e2ea"],["/page/6/index.html","0636d618d4cad30aa25587c22e1d940e"],["/photos/tangyan.html","0a4eb8935ae029ae3ba94786e50ffdd9"],["/tags/Emmet/index.html","628e8a08cdc99ad779b7f17032bbd50d"],["/tags/amd/index.html","29c8ed529db8d59547d667a33fc4bb58"],["/tags/cmd/index.html","b0bbbef16e7b6abba799ba2a31046d85"],["/tags/common-js/index.html","3ad0c8add7473d97a3a73c93e03d544e"],["/tags/cookie/index.html","a8917140bf448836d65071e76944cd85"],["/tags/css/index.html","6112fc800540970227d9d3cdb8c41813"],["/tags/docsify/index.html","50e5fa0120e5619f5549a3b81855680e"],["/tags/flutter/index.html","e49cd4f3a59ebb363253e8019b65d00a"],["/tags/hexo/index.html","bb0a93d23cd12ddec9427b642a119e56"],["/tags/html/index.html","fefe5c06c98ca1e4db2e6ea7d0805bfc"],["/tags/i18n/index.html","9dd51466593a495a1c2c4d7f058a27ab"],["/tags/iconfont/index.html","da118b298fb0e87bcc35bea2d2f1dbf0"],["/tags/index.html","a5861901592923846ef9b640505469d3"],["/tags/js/index.html","dbef2f65216fd2366242166cb0d3925e"],["/tags/less/index.html","44ab5c5d17a20ddfcdc12fdb990d5a75"],["/tags/npm/index.html","a97ac95af138eec623e6c57dc9262781"],["/tags/nuxt/index.html","0d550df01105c29ead66aca87afec767"],["/tags/proxy/index.html","cd08f0ea43bd25b5af7495c95f5bec77"],["/tags/react/index.html","b8840205618d7e83017f5559216e08da"],["/tags/ui/index.html","8da2884d78c33e3b4dbb25175f0b7da2"],["/tags/vant/index.html","c0a0045d8f0861c8c15df012af1651b0"],["/tags/vue/index.html","76ff4f4ffc9fc3f1df230492d90c09a5"],["/tags/其他/index.html","85460c52f4e606dbba1e9f9d91dd0790"],["/tags/基础-一/index.html","d86cd3e5957d21807036b9475ad05ebc"],["/tags/小程序/index.html","79f0b01cad845404c839c12f3b77ca80"],["/tags/数据结构与算法/index.html","dcfb496b9e2c11ffe2cb8cd04d27384b"],["/tags/生活/index.html","d42342cc8df3d43d01102324aa780348"],["/tags/目标/index.html","82059b1f40562a14c198376673d95657"],["/tags/规范/index.html","d3a0fca525a3b5c5bafecfac5e36bc9f"],["/tags/高等数学/index.html","e93763e143f9a55c688bf153bd5e5797"]];
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

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"www.ui.qcwy.org.cn"});





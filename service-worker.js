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

var precacheConfig = [["/2017/08/15/html/starthtml/index.html","345905c15eb9f37c393a1ecbf60f4c1a"],["/2017/09/12/css/block/index.html","85ee2ce296588f389354db365d52906b"],["/2017/09/12/css/css-properties/index.html","e77071c3b9462525ecd9c370e1a56ba5"],["/2017/09/12/js/closure-js/index.html","f9785976711ea3455cadeb4b3b0243e4"],["/2017/09/12/js/prototype/index.html","7a2f53cc10cb2c4109a32ce790a8eb97"],["/2017/11/12/cookie/set-cookie/index.html","8e525344c94257ba5d39a91a62c0368d"],["/2018/02/15/docsify/docsify/index.html","8e3b8291eaad68dfeeed74a66754600a"],["/2018/02/15/html/divCenter/index.html","87e1cf4320368e1b1f8ea2f4c6eeb56c"],["/2018/02/15/js/RegExp/index.html","18b789dc65505b87c0b1694e19ca7a56"],["/2018/03/21/js/js-set-html-font-size/index.html","5661a27989d36c7f504a4075eaa1f4c7"],["/2018/04/15/wx/login-wx/index.html","66f0807406cd130dcccd1fb26d227788"],["/2018/04/19/other/norm/index.html","eebc97d271fadcfa9e88b97291315548"],["/2018/05/12/js/qureyUrlParams/index.html","b50f1f143c6b473fe10f5c34942f08df"],["/2018/07/13/html/layout/index.html","a91b18415cda2ababde8d87f4340ce78"],["/2018/08/15/js/amdcmdcom/index.html","7fd1ec1e9d1fa598242877bcf42762d3"],["/2018/08/15/vue/vue-1/index.html","9daa3fd803d00f019f19c88f48f9f038"],["/2018/09/12/css/css-line-text/index.html","162952b584a7fdd2a2dd4a82bd3f0551"],["/2018/09/12/other/classic-article/index.html","968308161b6ea2403f00d551a4633619"],["/2018/09/16/css/css-attr-practical/index.html","fcdba76d95946966e9fc654fabd3104e"],["/2019/03/06/css/css-margin-negative/index.html","30e6543029213f47dd6b7679dc360d85"],["/2019/03/21/iconfont/iconfont/index.html","ed1cef244be8582274806e762232bb5a"],["/2019/05/18/vue/vue-i18n/index.html","b9a1391f9d5e37b1fa78defcfcedc7fd"],["/2019/05/24/vue/vue-router-parms/index.html","54ae27ccd091799ea76ab16f32bb13d3"],["/2019/06/04/vue/vant-list/index.html","13f527278bca41ff62fec73b2a32dd62"],["/2020/03/20/hexo/hexo-gitalk/index.html","c55d3b5c7d398819dd9ca1e082c36815"],["/2020/05/12/vue/vue-proxy/index.html","e44a5aa926cfde40b8edf5001b2860c8"],["/2020/06/30/hexo/hexo-move-mac/index.html","8084c530f141bb069263e141fca9d4fc"],["/2020/07/03/vue/vue-network-online/index.html","14ecc65b5e17b43f1c5734caff0e456e"],["/2020/07/07/nuxt/nuxt-i18n/index.html","cfcb84812bd6ab1979fb195111d03272"],["/2020/07/09/nuxt/nuxt-proxy/index.html","6e3d2b7bc094510c78845a22c60da00e"],["/2020/07/11/nuxt/nuxt-data-loss/index.html","05bdc10b7e750ee7f3827bd27f3f942d"],["/2020/07/13/less/less-var/index.html","164754958c1cbe49feed3639e7cc86de"],["/2020/07/23/life/life-big/index.html","0f00587820cd2e6134f72e2a6c25567a"],["/2020/07/24/sjjgysf/sjjgysf-line/index.html","8a7fb2c0c8b71f762dae80683afd5431"],["/2020/07/25/sjjgysf/sjjgysf-sort/index.html","2627efaad012d755e5165fdfd4397e14"],["/2020/07/26/sjjgysf/sjjgysf-tree/index.html","b1b75d2a6cebd3df6439b0b02a74f695"],["/2020/07/27/other/zsb-math-gs/index.html","d67207d8f69e243a415b5fd1da9a9021"],["/2020/07/27/sjjgysf/sjjgysf-figure/index.html","7d115c2d4bb7738027d0e135f6e206fd"],["/2020/08/05/flutter/ambient/index.html","9427885de55ca72112834701652d43d2"],["/2020/08/06/other/target-2020/index.html","b9b66a51f8e54f11938a7f2669307026"],["/2020/08/12/js/input-fixed/index.html","eb7a2dcecb93edde0be854e0ca314320"],["/2020/08/18/ui/peise/tonal_balance/index.html","40c0f3cb83a5e7608e5c7d500f1fbd06"],["/2020/08/20/css/effect/index.html","27fb5d4359c1d0b2bdc1bbd8b2b5839b"],["/2020/08/27/css/unit/index.html","3e2504aff69f94d51b2fa0d717a94d53"],["/2020/09/01/react/antd-mobile-theme/index.html","0f3c36f79180aa22fcbdc79c570d3ac7"],["/2020/09/09/js/js-cookie/index.html","45fc6863a56d9580032377e7a7751c54"],["/2020/09/10/vue/vant-ui-code/index.html","86b41a84b3459bf01939d085640b1fae"],["/2020/09/21/js/log/index.html","0a0af9f21fc7c3869dff1a56d7e26443"],["/2020/09/27/npm/package/index.html","c683ee8cbd1904d3005b2d95f6846f85"],["/2020/11/02/html/emmet/index.html","050c47d6f027a9bce57a525dc30bf2e6"],["/2020/11/15/flutter/basis_one/index.html","33005b75583e560dc43062fe3df6deca"],["/2020/11/23/js/change-url/index.html","1cd4ad4bdc2f0731d8d0a909906596ba"],["/2020/11/26/ui/ps/delete-text/index.html","50e24fb996ecc80dd153e0a1b9cb3913"],["/about/index.html","54e4a1a2b011cb6e72aa6dd260048bca"],["/archives/2017/08/index.html","9543bbddc5b02ae31a5ae763cc6065d4"],["/archives/2017/09/index.html","5f9009a26a6f5881f45570d72a369d2b"],["/archives/2017/11/index.html","a7dda4277cd28eb435c34e626adfe002"],["/archives/2017/index.html","647ac8d29cf51d6022119c5dc5495d9d"],["/archives/2018/02/index.html","2e9abb9af99e741f2e149775f36bb52b"],["/archives/2018/03/index.html","a7ae3de82b332f5ae493493dabaab11a"],["/archives/2018/04/index.html","b2e72542de42b1354f9de7b3def83cfc"],["/archives/2018/05/index.html","582bb1cacadd266ceb1d886c71dbee5a"],["/archives/2018/07/index.html","224d6c52bb88c649c5fe57f19f024331"],["/archives/2018/08/index.html","81128c17d2eb36bbf91ab6442e751f0c"],["/archives/2018/09/index.html","5458ee890e6c7707e35b707bfa6896cd"],["/archives/2018/index.html","5919df84a6964d7015553ae20c1477d7"],["/archives/2018/page/2/index.html","259209d7de81b301ef5438ac97366a66"],["/archives/2019/03/index.html","d1703fcd00c132cbf017df4ccb423763"],["/archives/2019/05/index.html","d72332136f2ef8b834d4ebe31f22bc1c"],["/archives/2019/06/index.html","f994c8417f808f5b8902da7c13c9d172"],["/archives/2019/index.html","c55f03fed4687fbc5a600299f27fcbf8"],["/archives/2020/03/index.html","c9f190f6a192c378a126efb25c0f0803"],["/archives/2020/05/index.html","2d84d5dbd604c641bb07789dc09d5591"],["/archives/2020/06/index.html","72b634c62598bedc9987892074b6d112"],["/archives/2020/07/index.html","541b21cd300507ce107066b6616ebc0a"],["/archives/2020/07/page/2/index.html","16d462abd626da38ef9e446ce3869bdd"],["/archives/2020/08/index.html","106c8b966fe07ee44a419d9c01e5fb7c"],["/archives/2020/09/index.html","111523bc082ecb9f40f08724fb295096"],["/archives/2020/11/index.html","7cbdf3dcd5fef40024d9aaedde9bdc59"],["/archives/2020/index.html","121cc87e507e6f1c02007ad569664dca"],["/archives/2020/page/2/index.html","2f59084532c1b86cae4de0e23f2a9972"],["/archives/2020/page/3/index.html","2e2d40c91b391cc6879e874778c530ab"],["/archives/index.html","2f782459138f5247a6115f0246fc2089"],["/archives/page/2/index.html","96b8b2c2d0dd47ccfcef512aa3264ee7"],["/archives/page/3/index.html","b378b1cd16a7efe546452b05e27c957b"],["/archives/page/4/index.html","023a21f95c7c4a9197a77a5467cfe5d5"],["/archives/page/5/index.html","957975e562fe7f25e25130e5bfaee28a"],["/archives/page/6/index.html","839445c203d2a03e5501297126ee259f"],["/categories/Emmet/index.html","803dbbda8b51aaa9c650efbf554e892f"],["/categories/common/index.html","0cff86012459b77f74ff59362e0e27a0"],["/categories/cookie/index.html","ccd072aa0692fe56ad4f9d45d2d6a1e7"],["/categories/cookie/设置cookie/index.html","1f1331fdedb304803d2d2adbe12b3393"],["/categories/css/index.html","30acce5eda4724e2b00b072d524e3701"],["/categories/css/三大特性/index.html","5de35df2681b15dd975b1be70afadc74"],["/categories/css/不常见但是实用css属性/index.html","0678084b7a218b4c0848d103c2fc7604"],["/categories/css/中间文字-两端横线/index.html","e08c71807caaaf4edd680d7335acf40c"],["/categories/css/块级格式化上下文/index.html","4fe8d9a19f97dff2f883831ad14eb6b7"],["/categories/css/水平居中/index.html","0672c191a334b1b660e394db80f0700b"],["/categories/css/负外边距的巧妙运用/index.html","79df728af7e56f3393d5bc727fa514ac"],["/categories/docsify/index.html","629dba74ff1a94639f24cf024dc3b8be"],["/categories/flutter/index.html","4b99476da89bc78df8c6a191c235158e"],["/categories/flutter/基础/index.html","5651ce998d1b13d4cdc1338835502b43"],["/categories/flutter/环境搭建/index.html","262134a23c13f09173d098a8500fd427"],["/categories/hexo/index.html","5095706921ba6d7478bd3b373df8788c"],["/categories/hexo/windows转mac/index.html","575357f71b43c9dbc0ed199b4374300c"],["/categories/hexo/集成gitalk评论功能遇到的坑/index.html","73348cefbb723ec19c50eb89d5d68e32"],["/categories/html/index.html","fbc5b71a2158b7e7e60efc7b4613dba6"],["/categories/html/基础知识/index.html","3fc4ce0d4f4fb53cf4c3dcc9e04742e8"],["/categories/html/页面布局/index.html","976e1f5abce4b20d59a34108c9c86705"],["/categories/iconfont/Vue字体图标不显示的设置/index.html","2e377fa659e8bc7e88c5698de300e625"],["/categories/iconfont/index.html","04a4d1d096e7310ce5a21feb7cd75180"],["/categories/index.html","7d4a9c367719419dd9872c0daae54947"],["/categories/js/index.html","864638129a0d45d2c5b833c939c1a606"],["/categories/js/url/index.html","df54083732bbb06bf6cfebe302578114"],["/categories/js/原型/index.html","f91c2011b96574c67f54e3e3dd77c371"],["/categories/js/正则表达式/index.html","d0baca41130907a896a8197e66dbe325"],["/categories/js/获取html到fontSize大小/index.html","325e2304c5eee23e835907b19fba3dd1"],["/categories/js/获取url的各个参数的值/index.html","a66da0a8df312156247c0f3e9498bc33"],["/categories/js/闭包详解/index.html","76571aa415359b407e2d7b0c3e8cab0c"],["/categories/less/index.html","f0b58589a995aceb8ad072bfa6084897"],["/categories/less/全局变量/index.html","5d269c935cff8f9043321aaf0c867f26"],["/categories/npm/index.html","11ef115c7bb98e7d3703245290fb0420"],["/categories/nuxt/index.html","2c623e88756f414523545443ecc06563"],["/categories/nuxt/代理/index.html","cbf145a1dd12b0f3fc2db0a9992b2ad8"],["/categories/nuxt/国际化/index.html","cba5d0e241a720e93023ddc0451c5026"],["/categories/nuxt/页面刷新数据丢失/index.html","fa7870ed32b4187c55769d154761aaa7"],["/categories/react/index.html","e3a984cdf74e1d7feae18511c8028223"],["/categories/ui/index.html","86a783c0b0bb91518840cbc67a1645bc"],["/categories/ui/ps/index.html","0563fe77c724731ca6043dc45cd72f18"],["/categories/vue/index.html","ce0389145e959f6ca6c37f8784803532"],["/categories/vue/router/index.html","1cbd1d972c10c00d02087160a3fd5459"],["/categories/vue/vant/index.html","ac4512a70b4e5b14edf636dd57bd913f"],["/categories/vue/代理/index.html","c2f1964e4703573b11d9ca0a1ff881da"],["/categories/vue/国际化/index.html","65f98cf396622a8a543361b53550e2cb"],["/categories/vue/时时监听网络的链接状态/index.html","80f62da41335169b482016940bff21cf"],["/categories/vue/组件的List渲染列表多页列表-切换不加载的问题/index.html","56dd9649450b6131d494b9d6457f5f46"],["/categories/其他/index.html","b577ad61b6552921cf6f804e426d5ca7"],["/categories/其他/好的文章-好的博客-好的语录等等/index.html","2b1fe34b28834348967acea14983fbaf"],["/categories/其他/目标/index.html","4b14a40d30aea3a62e1550e37ea80841"],["/categories/其他/规范/index.html","493272ddfbcc8fc1a27b42d65b4183f7"],["/categories/其他/高等数学/index.html","50063e8fab55b3d0ad75ebf41b34ff01"],["/categories/小程序/index.html","3f837ea99fceb07f36f6dd250783e7f3"],["/categories/小程序/wx/index.html","fb3d0fa098a1b36b94dff497b8bab62d"],["/categories/数据结构与算法/index.html","f7ed601b136cc50c53b86799ffbdf8f7"],["/categories/数据结构与算法/图形结构/index.html","d1ff3951fffa3b94bd81c68250b1a5f6"],["/categories/数据结构与算法/排序和查找/index.html","5e5ff1ac0f6be740bc33fbb313358aea"],["/categories/数据结构与算法/树形结构/index.html","8bb214bf722b631c692aa671873a4160"],["/categories/数据结构与算法/线性结构/index.html","5b3146713adcc61a8774b7fa9aec2e71"],["/categories/生活/index.html","6347e3145e71385e80695ff879094254"],["/categories/生活/长大后明白的道理/index.html","33e3a8366a6405807d70185a39fbf2f3"],["/css/index.css","ca1dcd27a4cf096d9446907ddbdc61a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","2b7780a9e531b42956ac803b24c4af32"],["/img/144.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/16.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/192.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/32.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/36.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/48.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/512.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/72.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/96.png","2263b3c1b99833cabef07ae278fdefe9"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","e9fd77243074b31bb6ddad636c1de624"],["/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/link/index.html","dfc15b239e9b6e5bc0f0f32142866c2e"],["/movies/index.html","e48d989726712b38c700af414461e498"],["/music/index.html","af35fc8ca980e0c7ae6ecde100513740"],["/page/2/index.html","dafd923f35401c5f298dee032d626582"],["/page/3/index.html","e4790b573d4a44e0a3b05ea82fe718dc"],["/page/4/index.html","7033f35f434a38e1d98f734819c58644"],["/page/5/index.html","897706190a856941ff0d6eeacf4e02e3"],["/page/6/index.html","54640fb7a2e91725a25dd107287d7230"],["/photos/tangyan.html","4cb90c501bfcfdd6a01104d5c5528a9a"],["/tags/Emmet/index.html","5d06ba07ff065d3767c313196e4c6c43"],["/tags/amd/index.html","b19cd29464f2710f7ad70a9ab2c5d652"],["/tags/cmd/index.html","98339719143b04094dab443eca6c8c12"],["/tags/common-js/index.html","22094e6cc1f4e19d7da32562def8f293"],["/tags/cookie/index.html","96f3a52755d4e58fd80f7f304d8acd92"],["/tags/css/index.html","c8bb7c3b6392ccb224bd54f75535e395"],["/tags/docsify/index.html","2a2349d2ac76dfbf71d1c211bc5d7802"],["/tags/flutter/index.html","1827b4685ce4cc8cddd78cb07ee25f65"],["/tags/hexo/index.html","1709e58e32eb1f9806e8573d13f74e98"],["/tags/html/index.html","a7805d62975bfb87eef6573cd9cd6ac7"],["/tags/i18n/index.html","19d61f3a27f9ce9914908ab943c1ce0b"],["/tags/iconfont/index.html","8ea746abcc55305f5f9445e1c2d098fa"],["/tags/index.html","898d1ac9f29cb8e99cbc794f42a80d30"],["/tags/js/index.html","623aa27ace6b970618de414aa334c3ab"],["/tags/less/index.html","727db76e523d924ce31270f864657292"],["/tags/npm/index.html","7bd9f4fe712edff777a52331dbed1cfd"],["/tags/nuxt/index.html","6349aecae4f42d1dfd5a0e1e9e367623"],["/tags/proxy/index.html","b93b20e7431ba42e74abc114e3f29f5a"],["/tags/react/index.html","ce595bb9ad672d4b3aa5e23252b68147"],["/tags/ui/index.html","5fbc7c0728042e4684f866f38bf8eced"],["/tags/vant/index.html","6f95020c99dce76bb225aef5b1da6365"],["/tags/vue/index.html","e49c7b1ae7a661ca9a30af52638673b7"],["/tags/其他/index.html","74c73f6d7da43a2483b7254947fd5639"],["/tags/基础-一/index.html","22a798b2d3638bd06047f97b6fbe2d2d"],["/tags/小程序/index.html","061b5ff34a42481612b06ae7ae856f3d"],["/tags/数据结构与算法/index.html","8a3ca725c56fcfa1cb20f8d02ab361b4"],["/tags/生活/index.html","91914771e9abfc2f18ed40fcfe38184d"],["/tags/目标/index.html","b5ee8f9ebf8685651e9f6d5839957f20"],["/tags/规范/index.html","b4538412a0ac50e762f088ca6b48726f"],["/tags/高等数学/index.html","08bb7abd0d09b2ef9321d70156e78567"]];
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





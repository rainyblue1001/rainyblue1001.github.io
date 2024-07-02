/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/04/13/Daily-Life/photos/images/index.html","098aa90fe48181a3c1123a3173d06349"],["/2024/04/16/Educational/python/Anaconda/index.html","4095e902a4468a5d1d5304b5dc070189"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","5a8d1bd2a0ab7279b20e28642ec53b70"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","e3e90bf70fc81a2df12d827021eb4d2d"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","f21cab6e467fe8bb8829c6739088fbe9"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","83e2545a4a18feee2dcd2cd6567d6dd7"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","fddd0d853591970c3e18d9d640adb991"],["/2024/05/25/Healthy-Living/健康生活/index.html","63b6d7c9571b58a255090f5fd2db1066"],["/2024/05/25/Interests/兴趣爱好/index.html","90b54ef3a46119c20bc0d8d8c1b92c80"],["/2024/05/25/Social/社会记录/index.html","774a472d3275e0b2324dead729eac5bc"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","9ea90df97abfa36f2dddf5be5db792cf"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","b9c62d1f907b2fe3ec5692d085800785"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","3d98489ae34a6c3a1605f2831505ca4b"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review2/index.html","d055d3596d58bcb146c54a01d00c576c"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review3/index.html","8cc7479adac53e704f668797bd9505f5"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review4/index.html","bdfa583d61f7eef8808938557890feaa"],["/2024/06/19/Educational/WeChat/WX_review/index.html","7584cffa7825fdc8a07d21a97e22ccab"],["/2024/06/19/Educational/WeChat/WeChat_Program1/index.html","5b78bdf92f9f85fae1faa4b022b3c077"],["/2024/06/19/Educational/WeChat/WeChat_Program2/index.html","9e7fbb70f013f1a650abe0c2e9cfbbef"],["/2024/06/19/Educational/WeChat/WeChat_Program3/index.html","0d128afe2e6e74b0b1fb25e987425fc9"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","95038801ae945e1aaa5cab038bb127b8"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","97fe8fbeb8d1a53580738068e914ff70"],["/2024/06/20/Educational/Software/2023-Software-project-review/index.html","6f8ee68ea2ffbf8b6b8cb9e58b5350ff"],["/2024/06/20/Educational/WeChat/WX_Exercises/index.html","07a4f638e47e3b33f4e699ea139ab5b8"],["/2024/06/21/Educational/Software/software-project-review/index.html","45560e51c024c2daa2cab39df9cf8cb2"],["/2024/06/22/Educational/python/Data-analysis/Data_analysis_review/index.html","b8f93a482b7550d9f398ebbe4d639a2e"],["/2024/06/23/Educational/WeChat/WX-Questions1/index.html","f54d3784016db3af192365a1ce49aca0"],["/2024/06/23/Educational/WeChat/WX-Questions2/index.html","5ac1177be150c00c86369cf7aebe3392"],["/2024/06/23/Educational/WeChat/WX-Questions3/index.html","132f4b5d3cf5dc20bb0d242c7ae92bbb"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions1/index.html","c9bb36dcc1bc68c5ca0d8c270657cbc4"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions2/index.html","081751cd04d533d3a5f600916725c45d"],["/2024/06/24/Educational/python/Data-analysis/Data-code/index.html","31536258d708aafca24d868eb94cb2bc"],["/2024/07/02/Work/civil-service/civil-service-list-moban/index.html","6fc469683a430f527c6850a645de5008"],["/2024/07/02/Work/civil-service/civil-service-list/index.html","754de9c53cde57c6791545439438e988"],["/404.html","695503e1147952c5ee384dfbd34b8d2c"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Work/civil-service/cover.jpg","fedc746d06d67409b7d6769ce99d0d24"],["/about/index.html","e059d558a6286ad89b01b17e6f1e95e6"],["/archives/2024/04/index.html","325f58a96dc6629127415b75d0680091"],["/archives/2024/05/index.html","26cb5beac3f34a54b6c715acb5281b31"],["/archives/2024/06/index.html","c24434d8c2c876b624989a85c5c9a174"],["/archives/2024/06/page/2/index.html","51c7a1bcc8ccbea4de40cf7c3ea2cd9d"],["/archives/2024/07/index.html","2d6ae89c0e58f5741ba1d10e0ac4f206"],["/archives/2024/index.html","72378d3043299193802bdd95118f0903"],["/archives/2024/page/2/index.html","72f6b03857539fb3c4d74075489e6993"],["/archives/2024/page/3/index.html","750a6bf3aa9d989a00d1d314e731aee3"],["/archives/2024/page/4/index.html","c66c5717348f92972458c3a96bb8d9c5"],["/archives/index.html","36ac8466dfe86d57623b8a38429acbba"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","a4aea683db58c40fe0247a73ee29f315"],["/categories/Daily-Life/photos/index.html","106e2414ecf2f1f0f3bb00b87179498a"],["/categories/Educational/Software/index.html","e83a46f0a553b75122b8371003198567"],["/categories/Educational/WeChat/index.html","a68e3663f20b92ee363441e8b3268246"],["/categories/Educational/index.html","828e2d577ffe010fffbabb5b64576681"],["/categories/Educational/page/2/index.html","2c03cfc89389146abc87fb84bd9bd419"],["/categories/Educational/page/3/index.html","fa6f7605381163d02f1f673570b3bd3e"],["/categories/Educational/python/Data-analysis/index.html","74602070f248b268b24250f2dfe88316"],["/categories/Educational/python/Web-crawlers/index.html","e8330e8a01aa85f155053a5750e2da64"],["/categories/Educational/python/index.html","baf0b65f2547a9418094e401a2cda8a7"],["/categories/Educational/shoka-theme/index.html","c17dd3840a4b5e558ee35ea418fabd86"],["/categories/Healthy-Living/index.html","3625aea7be6712554cfcea707463fd3d"],["/categories/Interests/index.html","901a1ff8314170fb15361d801cd03b20"],["/categories/Social/index.html","bc8cc7dd0e3423ed7b95310a99e8feef"],["/categories/Work/civil-service/index.html","28396b24adebf68c5644cffb37bff888"],["/categories/Work/index.html","1936c555e4deab36679dd66af20a6c44"],["/categories/index.html","3c9a700f5a6c468c6b2c4770b6d00aef"],["/collection/index.html","1657ad1d92c22bb5c308ad111b987498"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","a0162cef1b794f83551e4660f2f93140"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","e4f6704739cb4e4ea5e9fd90aa198a27"],["/page/3/index.html","d6a62c6a75ff01c8d7eeecc0dcb56cc7"],["/page/4/index.html","a1a145ca017447c307eca0f3926997b5"],["/resources/index.html","a95628be5ffd8016f198fd3601bdcb09"],["/sw-register.js","2926ff06289a26b1c944da3737b5c5e0"],["/tags/Hexo/index.html","439071e49a730a1909a220aea7dfa2e5"],["/tags/Markdown/index.html","a241e930d40abecbf47677618270285f"],["/tags/Python/index.html","a34858ef8190721e48bac066ff667f2a"],["/tags/index.html","38e161532310e35906224aaf70a48258"],["/tags/shoka/index.html","a011a254ac9c16f8452c031f8f62d6b2"],["/tags/公考/index.html","e1b02854ff0ad833a0fdb7aaed17d0de"],["/tags/微信小程序/index.html","68c64d2c6560aee1a928c6a115ef1b80"],["/tags/数据分析/index.html","d938352e8c17adde4471783564058b5a"],["/tags/期末复习/index.html","1f29345ac334e1796386d2f44cf8cbda"],["/tags/期末复习/page/2/index.html","932d50a09dbd941e02ec89bc7a9449e8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */

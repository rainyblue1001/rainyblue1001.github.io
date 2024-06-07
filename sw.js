/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","7165aa150791774b66f215ca279e5c04"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","54e0c237d1b0780f5954f6417bf4218e"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","6e844975f20cf36917685100e4b94b2f"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","88a306055f71c09c0816d8927141e06a"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","ac837bd5d0a8029d824c1b1371ad14de"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","1a5efa7a884acdb8ff28342af3829926"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","ae587c578f9a3f0c3297fa39c4b64e90"],["/2024/05/25/Healthy-Living/健康生活/index.html","6e1fa7f71a1f2e129ba2afa424d06d74"],["/2024/05/25/Interests/兴趣爱好/index.html","5c847258ce1159017ecd58567fa1a0d4"],["/2024/05/25/Social/社会记录/index.html","4cf15417caa1d339737761ce7428384f"],["/2024/05/25/Work/工作/index.html","2cee7628cbc18df3034f9789537def72"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","daeb3fec285c334c1f5a2ff403606b94"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","bf926a65a1b16c378fbd9b93e5bad1cf"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","f0bbfaa7c6bfba15cbdb104621470a1b"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","af56c28e4101d38c425eccdf986f394f"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","a69560538ee48a0d5003f3047e35dfa4"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","2c73f0c9ab89de3865442a1f17efc79e"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","d2daad0f33c2b88da711b8dd2e120165"],["/404.html","eb9af540e2ed52c12cf59b54bf2b6b6d"],["/Daily-Life/photos/cover.jpg","74fdf810bb2943a1577264b1b5861878"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","66f20c7b4985650e36721b4f37482a31"],["/archives/2020/08/index.html","3062bb564f46c7e804672166781b4cd1"],["/archives/2020/index.html","28f4fc316050d09099037298e5da67c5"],["/archives/2024/05/index.html","5c5db012b1f0cb08f51c375fa3640675"],["/archives/2024/06/index.html","dd7000816c11dfb770c85dc9edb5356a"],["/archives/2024/index.html","33e24dd7de48f4b073bc1492d39a7555"],["/archives/2024/page/2/index.html","11cdc68ae8376485507f7fdccb019370"],["/archives/index.html","e4c348c5b37e8817d3b7d69c9a27e83e"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","a8c0d411e0d72d82a163ad1604cbb38f"],["/categories/Daily-Life/photos/index.html","e704b2cf7ba79fcc8e7ac791f9ae6425"],["/categories/Educational/index.html","8469bddba9973a96cf3446e4e0c9631a"],["/categories/Educational/page/2/index.html","578cb49bdbaa2eb802b8f58056ebe579"],["/categories/Educational/python/Data-cleansing/index.html","bee363365cd11256e98bc1c669bc5f01"],["/categories/Educational/python/Web-crawlers/index.html","0d9a3c2b63a0faf8fbd19e93b0151daa"],["/categories/Educational/python/index.html","6fb422196bcdf45b5270a01ee3a82ad7"],["/categories/Educational/ruanjian/index.html","478e1586f1c19c1e465684f3d2020ec3"],["/categories/Educational/shoka-theme/index.html","3571b987db777ebd3d40cdcbe3924891"],["/categories/Educational/weixin/index.html","0d6e4beacb6cc8fd712fc04bb999941a"],["/categories/Healthy-Living/index.html","2995956f799e3923bd7447d52f295853"],["/categories/Interests/index.html","b7ee73040b470f521f9919e4910083fd"],["/categories/Social/index.html","c20a46e7a464c1b953ae73b291757405"],["/categories/Work/index.html","67cfe43979aae40125659a215e25b824"],["/categories/index.html","ba225c06ab763deb556ef4fabfc4ed25"],["/collection/index.html","f07217efae18a3f8f8b88698a4fd7bac"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","83c7a9994cdee4d680e0a81c91f305fb"],["/js/app.js","b3c0ff4cada84f6f3980b2e923dc037a"],["/page/2/index.html","621a3f8a1fa5cfddc279dee724e0cc96"],["/resources/index.html","cc03cdb525e4bcf7324a326428d30835"],["/sw-register.js","936aa419a3698a6e0f6abfcb56342cb0"],["/tags/Hexo/index.html","e00f9e4025e2f541663d689382415e5b"],["/tags/Markdown/index.html","28b1cc85a54041ccf997df78c3bf1b5e"],["/tags/Python/index.html","9bec7513cd047684b99d1efaaf263aec"],["/tags/index.html","5de64ab50edde037911a9c4f87cea9e0"],["/tags/shoka/index.html","75dc4853ba9ca6ad20babbd8d3ee9c0d"],["/tags/微信小程序/index.html","daea367e281226ac2234e1a65a9f5326"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","510582007ba7803f850c55088990f28e"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","19d21841a713eb50bf19c894e9b34a66"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","e6b18bb9c0567dadb6a6231b90f43a4f"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","61d1e2350e3fc638dd15d71891844df8"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","ea7973f0b5b1ae002bf3fc5c9a2fb997"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","32d0794da09dc30d8209113c1e4f6cf0"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","b060700dbc9ff043a0c88db48cd17ece"],["/2024/05/25/Healthy-Living/健康生活/index.html","cbc00d6aff44cae885625044185ae979"],["/2024/05/25/Interests/兴趣爱好/index.html","461e74602c7fbb937a2f68d6d6d65331"],["/2024/05/25/Social/社会记录/index.html","2ca50cc166c308e5fa2b96b0c7c6c463"],["/2024/05/25/Work/工作/index.html","4e3a9b2da7a8275d691910290765fec2"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","df46c67f151ed842ca66cd122ef05fe5"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","76c0d6fedaeb571a705e2d7ab658d5ac"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","42174f3131876db518baca93fb2f75cf"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","9a130a91932c8a4da31b27f9d586b2a9"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","39d0a9e7c575f0f0dd46f386cc966085"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","a1c17be183d6d8dbb534e48748c1784f"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","1c765f8e048f45c617c5a09aaca7bec6"],["/404.html","53a1bd2d2e728579454d3bbe5bd7247b"],["/Daily-Life/photos/cover.jpg","74fdf810bb2943a1577264b1b5861878"],["/Educational/python/Data-cleansing/cover.jpg","e16206c9f86ad4630e89bf4dbc76c4de"],["/Educational/python/Web-crawlers/cover.jpg","0f962653783eedb6e83c6ab5cd291ca8"],["/Educational/python/cover.jpg","c50459ae446fa397cd4ff0765438edf6"],["/Educational/ruanjian/cover.jpg","37c4624bccd36ba600a4e9a892f1558c"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","5e812aa2d3ab667aec26961c09278015"],["/archives/2020/08/index.html","6bab35b11e38228b5b19e6934328e829"],["/archives/2020/index.html","43372886fb431499f944e65b74491736"],["/archives/2024/05/index.html","d443324545cbacc6a437936d6ca7baa8"],["/archives/2024/06/index.html","84e6d95517a86468fa00083598c4119d"],["/archives/2024/index.html","d00286649c424a49403ac08d49ca52fe"],["/archives/2024/page/2/index.html","23e96d439bda8ef2ea987b5c0dc68368"],["/archives/index.html","d0a08ff0458f54731451d4c13d1344bd"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","39dab5ca81cb391505ca94985d3d2eca"],["/categories/Daily-Life/photos/index.html","c5085e8d522d31ce8af7e665812f4370"],["/categories/Educational/Shoka教程/Theme-Shoka-Documentation/index.html","e7b8999bc66b745e511440762bb2744e"],["/categories/Educational/Shoka教程/index.html","e59cdf1ac2ed22724a9800bc52900f9d"],["/categories/Educational/index.html","b19a124f5fc24c725e92d48f6c7c8156"],["/categories/Educational/page/2/index.html","fd848c00fe937ea0b084fa06420ed5a8"],["/categories/Educational/python/Data-cleansing/index.html","667d52a63fbc9e9b44a1f3cbe11c19c7"],["/categories/Educational/python/Web-crawlers/index.html","d923bd9fde100e7be5d524f56199e61c"],["/categories/Educational/python/index.html","1d9f506a1b4bc056f1c6b763e714ea86"],["/categories/Educational/ruanjian/index.html","57ae225aabb1dbadfe43609b2043f94d"],["/categories/Educational/weixin/index.html","6c1799649be3cf010c45c108bd7b71f6"],["/categories/Healthy-Living/index.html","d02f84a21a97d376e243b9b8f3898911"],["/categories/Interests/index.html","bbb1302138cd772bd1beeecaf292f219"],["/categories/Social/index.html","d9113d3aba879b7318411ef0aa33ca9b"],["/categories/Work/index.html","61ffb33fe6bc782914f8b2e37f199be1"],["/categories/index.html","4f52478bea89c45b846b4869aee7ea02"],["/collection/index.html","b29b3309e8770a7a67843b432226a33d"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","c3bc5dbf6892d477e186130c81884cea"],["/js/app.js","b3c0ff4cada84f6f3980b2e923dc037a"],["/page/2/index.html","3c42a87bc14ae5f22b3e1e8cc9ced685"],["/resources/index.html","a07af715fd886caa944e559302e44b18"],["/sw-register.js","614843993ba15c895aff68a6f7afdea2"],["/tags/Hexo/index.html","8b6954da6ec715a0396ad6a3b64db730"],["/tags/Markdown/index.html","e56149b6efb4951e04adf36c7fac25ff"],["/tags/Python/index.html","34bf3d5cc016beea95478d6cff017136"],["/tags/index.html","acf1073e9b2e67189e894fd64c0266ef"],["/tags/shoka/index.html","129404154a2b41f539134cba3182bf72"],["/tags/微信小程序/index.html","fcab889ba1450188e111a2f1767a084f"]];
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

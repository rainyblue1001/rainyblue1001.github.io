/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","a2ef74a499d3b5d610c1e634b33772ca"],["/2024/05/20/Educational/python/Data-analysis/Anaconda的安装/index.html","fee3bc8f9124c8dfdc9135a644328d1c"],["/2024/05/25/Healthy-Living/健康生活/index.html","8757b55ed12a0832f7686b0282320251"],["/2024/05/25/Interests/兴趣爱好/index.html","2b7d1d889eb1893d02eb239bdaff3a25"],["/2024/05/25/Social/社会记录/index.html","e3bfce703dbb1ea6abc6ec35415a8165"],["/2024/05/25/Work/工作/index.html","b7027478d3f14bd341a72dcb42bf3d9a"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","c5ebcbe22f54639363e3d9f273febe60"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","e25df7a4f61ac6c69fdc3c90b16a3cd3"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","9b375586015f5b1e9df823a3a0f80bee"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","be8fb164f5c3bf456bcb7f1553661a6a"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","63e56c9572af913fd5359d8440f8f881"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","f5da6b629be58359c356fbde5a5ecda9"],["/2024/06/06/Educational/python/Data-analysis/数据清洗/index.html","b37ccdc00a1795dab6e2312c28b6df28"],["/2024/06/08/Educational/WeChat/WX_review/index.html","bc58b6fce4f26c669bd885cbac6b31db"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","d23cff57f03bf6e1bdfe2eb98ff936eb"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","9fcb643a8ec5c001d336f9b1ecdcf7f3"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","d463927ed02bd773d77b2d84f310044b"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","725ff4f5c63f56ffda066cc11f2c9e9d"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","f2956afafd228c94388402df408a1674"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review/index.html","102c4fb0dcf88a428e1efe4f71c67cf5"],["/404.html","97c5ba15d82915dc6a65bdb4636e624a"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","edae5afd432dc522724155365635ae31"],["/archives/2020/08/index.html","d90deb3bac938e3ef8fc6d6a9e710ca7"],["/archives/2020/index.html","c4011d8bc3ad322a512359b6e7f30dab"],["/archives/2024/05/index.html","82c44a1c8054502bc5e6dc4b8b0b9ba7"],["/archives/2024/06/index.html","840e8156818f86376f09f97c844b9089"],["/archives/2024/06/page/2/index.html","3a28f1dd971191f18aaf76b38e981361"],["/archives/2024/index.html","833dc156ab2b4281304e70d798c614d6"],["/archives/2024/page/2/index.html","b97a7d580c64034a310a513d9ce8e163"],["/archives/index.html","093cc7a74563471a32d1a187c8c7d5b5"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","14fc8a8569a3d0c103e9111510381477"],["/categories/Daily-Life/photos/index.html","89dbec6e05c46cef14ca096ad7dde0be"],["/categories/Educational/Software/index.html","2ed15cbc0bfff006838f779d67dd42a0"],["/categories/Educational/WeChat/index.html","2245f4bf63030c72dbd5b2188489ed29"],["/categories/Educational/index.html","4fd9423d3229197b6dafcf001fa02ecc"],["/categories/Educational/page/2/index.html","80d0d39aea9176498dfa5372fd716ca7"],["/categories/Educational/python/Data-analysis/index.html","581abbcdddfe356e90262f6ee601711a"],["/categories/Educational/python/Web-crawlers/index.html","08bb21e5749a2bc24c02ed0c7a979f63"],["/categories/Educational/python/index.html","3175e0d4ebec1dca6bc464d98b881d9e"],["/categories/Educational/shoka-theme/index.html","44f805ac1a07beed8426c92c79127ae5"],["/categories/Healthy-Living/index.html","6f4751d35143aafa1450111fee1c7f42"],["/categories/Interests/index.html","b5b59f12d218c47df95ac2115446e725"],["/categories/Social/index.html","0c922a388069dc589c99b33b4110244d"],["/categories/Work/index.html","96d2662dd1775592053d77df1bc3ba8d"],["/categories/index.html","32c5de661353815c5e00c6fd0c87f683"],["/collection/index.html","49e6913ddbebf4a5a42d67e1d8afe275"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","f0baa9bf9e12134ff8f7630cc21d60e1"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","2ecfef997b5af59b6c03062b1ffb6344"],["/resources/index.html","0d6c0dba6120da5247bb38159f128a1b"],["/sw-register.js","56b85d7596882575c4876f1c48d24204"],["/tags/Hexo/index.html","0fb7eb1532544a18beda14b5c0b96b82"],["/tags/Markdown/index.html","61752acc8d2eca42d9ae8cec4d688962"],["/tags/Python/index.html","5971d5435e1d482fb96b30babfe13ead"],["/tags/index.html","b784b2150275a8fce7f6913355cdd3bb"],["/tags/shoka/index.html","c498252f7c61dcd2b61c0f28e9839fa0"],["/tags/微信小程序/index.html","63a0108cdfb2087ab0ae77cfd237156d"],["/tags/数据分析/index.html","8687e0232211e67f2b770f1ddd858947"],["/tags/期末复习/index.html","4a233544af60163b375dcb2bb05bb0a3"]];
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

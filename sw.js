/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","86b0f729173c6d7213addb7090831542"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","6f2f76c002621014970b4190e404b96b"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","02fac18ec4fb2f2db812a4b38d3f93e6"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","e3b9628854efb250a3bd6a20ff1e33e6"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","3cdf769d3fd24d6a52856ecaa8710851"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","ccdccf6cf6a6f0c4af596aae339e331f"],["/2024/05/20/Educational/python/Data-analysis/Anaconda/index.html","fa876a2a578dc6fc06f77ba1acf6fe9d"],["/2024/05/25/Healthy-Living/健康生活/index.html","5425447a30e3f1369ede4ac3c23b1b62"],["/2024/05/25/Interests/兴趣爱好/index.html","f6eaf4d5c6006f25667108b5f7c212e0"],["/2024/05/25/Social/社会记录/index.html","9518ab46fd0fbe84b9c474689d1e0133"],["/2024/05/25/Work/工作/index.html","413eb2f2fe9523743b2f10532eb5a4b3"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","9877867cc9c766abb147928c66149ed5"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","71d006e15ad1a4a972cc675423316761"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","66563208b25953b977c2de27ead0e007"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","298b9b52c82f47e9c3b83b818912ac3b"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","6b8db4a472d00342580985d12a6a3054"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","17acbaae346569d6dd0308414a259bf7"],["/2024/06/06/Educational/python/Data-analysis/Data_analysis_review/index.html","50e770e430d43e72b26c5357d97366c3"],["/2024/06/08/Educational/WeChat/WX_review/index.html","1ed7aaf1dc8b32cc9842fc48e05b2cc5"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","eb41ebd22fafc282dc266684ca75babe"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","3cc49c42ee8422a03342e5944cc9d673"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review2/index.html","7ee63cc52cc9ab9c3839d16a42c08a1e"],["/404.html","3b4347d676b28fcc7bf6bd4605ea7238"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","fdf16ff2ef40d22d6e9e5574dd9abd91"],["/archives/2020/08/index.html","07da43c47ce6b8bea0a875aac0d3c91a"],["/archives/2020/index.html","2f73ab9614a21424931822b5d63badec"],["/archives/2024/05/index.html","e2024554e3fe5e0b3b484bceee1d3da1"],["/archives/2024/05/page/2/index.html","cd945852e2b38dbfcc1ef952c85bf613"],["/archives/2024/06/index.html","79abfb4cb72688b0dff6f8bf32ba3b29"],["/archives/2024/index.html","f0abdfdb051bd609a90cf1f9582ac392"],["/archives/2024/page/2/index.html","43937615a59ebbc9719e7e69d62939e3"],["/archives/2024/page/3/index.html","050d9bb7d2a30e2ae5b2260a264dec0a"],["/archives/index.html","cf25a92556ffb657e36f473c1c106029"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","84da056adcf8ee5730ae02720c43b1c6"],["/categories/Daily-Life/photos/index.html","2000fbe2871ab8b53d31d04cab019dbf"],["/categories/Educational/Software/index.html","04d047f9c9a0c0ef54e54ab0d53200c4"],["/categories/Educational/WeChat/index.html","756dfba5ce410bc4b589825cb0950a33"],["/categories/Educational/index.html","24ded7448f3a4af91cf36495d4d08861"],["/categories/Educational/page/2/index.html","007021f8ba87f1a588bedaad87e6886c"],["/categories/Educational/python/Data-analysis/index.html","2f2e811abb11b665d473007ace286e83"],["/categories/Educational/python/Web-crawlers/index.html","fa1f7bdbc3d7698191faa2961e719535"],["/categories/Educational/python/index.html","4c031fee8c563f2d001573e00bb029c2"],["/categories/Educational/shoka-theme/index.html","1e9b0d080d0bc82a7d0f768d4f9651c1"],["/categories/Healthy-Living/index.html","8a9c36830c733e2a2cfe15e607d4dce1"],["/categories/Interests/index.html","12403069097eb4460b13d26f8fd42d35"],["/categories/Social/index.html","2bd2bf9cc95ffbb4ee4b28113ea307a1"],["/categories/Work/index.html","b5ba8197b11b8f610955a72f987d3bda"],["/categories/index.html","0f98ca50d6c0fac0e3f0e9ad0148dcf3"],["/collection/index.html","73be71b77ac2baa8ea8c669865ba4a58"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","e3aba33a676c36f26d76ea77c156532d"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","5928fbf891c5f465028883705a5991fd"],["/resources/index.html","6b300c18ae16ef2e74ee07c5328dd72d"],["/sw-register.js","6b4a67c8f2470a225c74998b1c62c8a5"],["/tags/Hexo/index.html","2680cf64626e1b40fb2ae4decfa0df3b"],["/tags/Markdown/index.html","c501d3f335f4f16563c88da6ca566f25"],["/tags/Python/index.html","f3ef2ac23a578180129eea9005e3dc03"],["/tags/index.html","0236daf97568a8929e6b6923c4ec7164"],["/tags/shoka/index.html","8a772a6f7389d2cc4f1645f5a464e3a0"],["/tags/微信小程序/index.html","95829943a349551fa5cc2556604c3fb8"],["/tags/数据分析/index.html","0d0af86711eae6e8d2d208c739d09d41"],["/tags/期末复习/index.html","b676b631d142ed1a180b23386ba3d81a"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","b004664f82ee9977c37652c9c681923a"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","f49cf846fd72fb541bfc41adeb3eee9e"],["/2024/05/25/Healthy-Living/健康生活/index.html","83b9fb2196ac16935915186488e8e2de"],["/2024/05/25/Interests/兴趣爱好/index.html","b62abef8db5315d05a1ae99db4bea528"],["/2024/05/25/Social/社会记录/index.html","8dd8fc3710690393911d4e021d1ec5c0"],["/2024/05/25/Work/工作/index.html","2d07f637649169cd6d836a35d669a2a7"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","fd95564821ddc173167002a73d4b89e5"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","f477edbf1aeae16949fb9fdc3f8a5cf6"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","e9b3ac83fdb5718ac5ef1a1f2a38f818"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","847783ac8098c782333872b6a4cfe58d"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","c8f5a9e68159a5b4a7186235f73241e0"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","c5df6d243280dcb9a3db6a8339524166"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","1530bc5cfe5ca6c3e7affbf2934da6dd"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","6b4d867028f8eb9053eaff8a21e34d6f"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","a023c61a896c0d177e7ad5a0bf9b122d"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","38e310dbb8ee8148d6f170c0d075e5d2"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","1f25d81bf9b466098846c74d763d5b49"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","55b0c036e35e39d09dcd08acfdca5d43"],["/2024/06/08/Educational/weixin/微信小程序复习提纲/index.html","0c4f121e8d22cb55407f3a03496e1b7a"],["/404.html","5af75d9d6ffe4f54d084aaebb6d78107"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","ce3a5bcd98abc227e16a4edbe324f425"],["/archives/2020/08/index.html","a61743ef03e18e47cdfb99fd3f067d5a"],["/archives/2020/index.html","391f9d2a12cfd105478159384e78291e"],["/archives/2024/05/index.html","7cbc93baf2fcdb45c7f940c1294412a2"],["/archives/2024/06/index.html","3299b163198cf34923e7b62e08d16713"],["/archives/2024/06/page/2/index.html","5242659c9c71b551dcb7e13001594cdb"],["/archives/2024/index.html","67c7f06bc10741438ddc2fbdc6e2643a"],["/archives/2024/page/2/index.html","61a16bc37d13523390b468c841c43fbb"],["/archives/index.html","5c19ad9319c80938b2d5e92d0a1caf0c"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","2aff5fb434b1a5e2d77a3584ebbe5331"],["/categories/Daily-Life/photos/index.html","0c11a1afbe956a35f40d96486c5ff75b"],["/categories/Educational/index.html","a6c56ec2ac78c0baa1ad39f5ed349a27"],["/categories/Educational/page/2/index.html","38c36d7088b02213681a4a816a96d953"],["/categories/Educational/python/Data-cleansing/index.html","1696a390bdf62170faeb5a578d871581"],["/categories/Educational/python/Web-crawlers/index.html","ced22a722a09a195a25cc63a688f5b0d"],["/categories/Educational/python/index.html","0b39c0281e77617cd1790014df84534f"],["/categories/Educational/ruanjian/index.html","29cfa0db600e8c4e5ff07854590d979c"],["/categories/Educational/shoka-theme/index.html","ef66ed204b43467bbee79d8dec1320c0"],["/categories/Educational/weixin/index.html","42304c28b10a2291766dd4fd3f2cbb50"],["/categories/Healthy-Living/index.html","12f4c572b7d84fa3cc4a0a4de47c249e"],["/categories/Interests/index.html","de0742ea8c139f67e33a56a1cfeb1db8"],["/categories/Social/index.html","f173c7665b426459310deb3c1fd3f96a"],["/categories/Work/index.html","8cf98eea2cf2c4d565689f6a5505b17b"],["/categories/index.html","987ce4d68e1c29f8215b77bb7c907c16"],["/collection/index.html","9367c5eac533caae123123b0ee15e961"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","4e932cc9b95bd8703255196872a9da4c"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","5565af95ca3dcda8e9bd69900b2c4c22"],["/resources/index.html","ce7997ebc2937b7bbd7d2fef805c59bc"],["/sw-register.js","614ec7493344eacc645880713e07ec93"],["/tags/Hexo/index.html","f9e06db601e6930af53900f3271ea201"],["/tags/Markdown/index.html","3151d369b35feeb844c432a9ffd09a6a"],["/tags/Python/index.html","fd84fd9cce882572daf6c4d9aea90876"],["/tags/index.html","0eadb6ae4d8499edc4fb65a221e9118c"],["/tags/shoka/index.html","9761a20fa0778ad456ff34cbc6c697f0"],["/tags/微信小程序/index.html","c19bef7ac94e19a9f8c43ebef81ca44a"]];
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

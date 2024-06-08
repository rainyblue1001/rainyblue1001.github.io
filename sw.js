/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","eb9f0248ad1337d77fdc775aace50dd0"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","bb6c033d0bb8f606850c805fd6967430"],["/2024/05/25/Healthy-Living/健康生活/index.html","8e96eb7bc63ab0241b3f56b17224d19a"],["/2024/05/25/Interests/兴趣爱好/index.html","c30c31e47edd669e19d9f7c8f925bd06"],["/2024/05/25/Social/社会记录/index.html","54427a77b255edc344961651f7a7018c"],["/2024/05/25/Work/工作/index.html","b7aa3723e663c04e23dcdf93b6678da3"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","f731239e108dacd857d9a00dbb28dec9"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","835fbaa3159b4a0eb12e06a09a2d96c7"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","7d692142dac9ddf67dffd6fe23bffd80"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","a4f25c5fcbe9e8cee2b97bc0749bde0f"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","a317418811e2ede587584a39afc904dc"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","7fc355069821334254e3291e3f5bb7e0"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","01849daa494053d6c618688a4b567034"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","eee9c3a7ff6f8fe9a0d94d8db2665caf"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","703054290dd33ed363081d81c7f8be54"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","25a2200d0dc6a605ece8b2703a16acf2"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","bd8f8bb9949de4133612e1b394670927"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","8ad4448b9c2ae9335137eb6e7bb90ec3"],["/2024/06/08/Educational/weixin/微信小程序复习提纲/index.html","53f3b46d66d6325cc5b413e702d65dca"],["/404.html","61609868fad2ffcc4d9f586393c25503"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","810ce401ea7c5399ad56707a629b6e8d"],["/archives/2020/08/index.html","861226e458bd94ab147026af10f00267"],["/archives/2020/index.html","4638ca674a5eadfc20bf12fee0bf6c93"],["/archives/2024/05/index.html","a6972837808a46d534a6a2cc0eed7cbe"],["/archives/2024/06/index.html","ab1baa0a89a95d2767a6d883079ce761"],["/archives/2024/06/page/2/index.html","b47716645d4543fff99878cebb30b391"],["/archives/2024/index.html","371d07192ec00b89ebff75a79f1e71af"],["/archives/2024/page/2/index.html","1bada76bfb4ca5e231ed8d1ac821f3d6"],["/archives/index.html","31b2be480178303d6239a47c012c4a01"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","3b2ba110f0c4cb35eb1ccad0479d9ff8"],["/categories/Daily-Life/photos/index.html","75ead4077c43aaa2b43b9576a05380b1"],["/categories/Educational/index.html","2429677137fdc104a8753da1b33d6b31"],["/categories/Educational/page/2/index.html","7b2414fbb38c8cfe6154bbf38722c105"],["/categories/Educational/python/Data-cleansing/index.html","9ba20243ab8da99a0485ba4da292d066"],["/categories/Educational/python/Web-crawlers/index.html","69a785f205db163e30c805de95fedc7f"],["/categories/Educational/python/index.html","63cd7d1a172c71b853d711cc2891e63c"],["/categories/Educational/ruanjian/index.html","71635cc8533998ee413e2e7593187077"],["/categories/Educational/shoka-theme/index.html","5d85b060b8d3717d2d4477cf61b733df"],["/categories/Educational/weixin/index.html","f7aaf6dcf99af95e70f1fbaa7e21ba78"],["/categories/Healthy-Living/index.html","7091a997617b518ee298e8699b875e5e"],["/categories/Interests/index.html","648d9f3c5e9c814c034605926578f21d"],["/categories/Social/index.html","211dd13daced216a5e6e6878195aae2a"],["/categories/Work/index.html","33a2def6da76b7a9ff15b9997a570852"],["/categories/index.html","88eeeb30db0ddb75036a002888ccab1b"],["/collection/index.html","db50adc8f74d8b2180a75e5c5d3a49bc"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","34b0dd1ba1729c8854667c61f19ed1c9"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","840290ca0456f137bceb3c2934b37b34"],["/resources/index.html","66d5e695691e22035b5d4accb3352476"],["/sw-register.js","5772e0606dc8d29f45de9682df2034a9"],["/tags/Hexo/index.html","518333dfe7193730bc07dfc477d407c7"],["/tags/Markdown/index.html","9815461335964eb37572b04c0aea2a70"],["/tags/Python/index.html","2ce96033103ede78bed6a36853939126"],["/tags/index.html","b86f736a4178e6ca56ed1870ba28f2a4"],["/tags/shoka/index.html","ef8f02879ec8e5dda4a64e24125ab998"],["/tags/微信小程序/index.html","d78806de942dc1dfc0d8a1daaef84f9a"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","893c68e289f734900d495cab8f381cc1"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","0938cb772bef0ed0c8dad7c1ca0ef30d"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","2f261a7292a1995ebdaed0f0192263e0"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","3951c04ab3e6f2080dea0ce5dc79e655"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","773cf7064930d0dfac1865bdee94f7fe"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","461d7a807ca9e0766193b5eb4bc18dd2"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","a69f56e91fb608824cbf26b96c8701f5"],["/2024/05/25/Healthy-Living/健康生活/index.html","3848169a12b38b2c0bd794f28d93a57f"],["/2024/05/25/Interests/兴趣爱好/index.html","312b2f50f448b393de21673b98420b79"],["/2024/05/25/Social/社会记录/index.html","7b7d69a3c511b295fb4eb411be4e3940"],["/2024/05/25/Work/工作/index.html","fb093cd88d3a38d26a17fc05409837be"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","c6dd20079c35f692a955c531d39fca37"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","5c4b86ec6f3ed20ce158b51b2e4ef906"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","ce54a58d3d7588351dc6c2528753f787"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","37b92ea3e7afcd0e813f4e03c1e34ac2"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","5a322c3a4160a39db2251551a96cf7d5"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","4e9d235debd133026091e487bd148b8e"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","aab71f5b1cb471addb3d2b58bf5bea3b"],["/404.html","da6de39f2f5dd10fcc324d74e0dac287"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","136211fbe705480eeda060bbb9d47567"],["/archives/2020/08/index.html","f1ad59ac292d66f4bd71bf77e30503a3"],["/archives/2020/index.html","04d8c9a4a41bf62f19af11a4e9400182"],["/archives/2024/05/index.html","df167bb7b7ad407d92ab27d2efdf570d"],["/archives/2024/06/index.html","2f63f50c7a4d35a4d9d17476a870fcba"],["/archives/2024/index.html","ac3ddde077881274f61b9757c0f2efc8"],["/archives/2024/page/2/index.html","780609aeb7d0fdf31ad2549869db9990"],["/archives/index.html","135673fb726b9696b0a208800ecc16e1"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","609722d1564a3072be39fa36f4b73b40"],["/categories/Daily-Life/photos/index.html","7480523fd8e42dc4633fd82f53adbba6"],["/categories/Educational/index.html","63ba78a77a446fc7d3ad3a7bc73e6ba5"],["/categories/Educational/page/2/index.html","6579ebdd4b23250ffa332413b0a19984"],["/categories/Educational/python/Data-cleansing/index.html","75dfecb25b4d66c13d1271bdd8a7645a"],["/categories/Educational/python/Web-crawlers/index.html","83f0ed4ac407515c91a6c207ee313a02"],["/categories/Educational/python/index.html","325cb71c87edfe7bef206148716269cb"],["/categories/Educational/ruanjian/index.html","d377ab4faa5afcd12bb73b3e96711cca"],["/categories/Educational/shoka-theme/index.html","468beb291e758a48bad8687b8703811d"],["/categories/Educational/weixin/index.html","5729c0f843ff1654048f6c6b8cc6ac4b"],["/categories/Healthy-Living/index.html","98d8f85fd30cbf1a7ef31c754e18ff49"],["/categories/Interests/index.html","b114a883e54f1a9099be73a12ca99512"],["/categories/Social/index.html","7469389e66df48633ffeb38ead16cf4d"],["/categories/Work/index.html","35e7f5d82c99ba9c026ef25b107ea367"],["/categories/index.html","b5ee4f3f91fefa78a2458990619cbddb"],["/collection/index.html","c06beca132643f054a443bf7c0126c56"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","e21ce082e316ded5d9befe7f3317ec9c"],["/js/app.js","b3c0ff4cada84f6f3980b2e923dc037a"],["/page/2/index.html","881f2fbb6befe85d0bb89fd8e72f4ff1"],["/resources/index.html","8bad4a6ea677c6bf4da336ed3cddaa3d"],["/sw-register.js","8dcd390dc4a0ac35ecca277526f4e106"],["/tags/Hexo/index.html","80036a7d22b3ad6b95f110d1b563b7e0"],["/tags/Markdown/index.html","abb6b34a2b498a4fa21894dbd9e02263"],["/tags/Python/index.html","98dca65916f896601a143ab57af96a0f"],["/tags/index.html","fb2d91226b53e28ec6c0dbddda5a1c16"],["/tags/shoka/index.html","00a12be375e5acb72dddadcd63345ff3"],["/tags/微信小程序/index.html","c9ae1a32b43f648e3d6f8ebb443a9d41"]];
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

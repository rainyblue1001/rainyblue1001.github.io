/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","fd3ffb6af623d36718f182bc562a50ca"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","c2b7e9276d062b4b226585ffe3486cf7"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","3b65c25b71cb268153888297423d5c41"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","1cde272f16ac74e410df017bda847210"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","b348e5567395cf141ef880b9535fa1d2"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","7eed613f410d7815664ef32d24f38ec9"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","aafc654238791f5f969c5a0b5cf2d87a"],["/2024/05/25/Healthy-Living/健康生活/index.html","0e80dbf48983bcfddad615be5d1c1a3f"],["/2024/05/25/Interests/兴趣爱好/index.html","7c66f043f224c262003fda32e1c3d743"],["/2024/05/25/Social/社会记录/index.html","7faa013322d132398247bdd5ad12b54c"],["/2024/05/25/Work/工作/index.html","b7b6db882ba754795e0bbb4d1fb2eeb4"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","d814b609848847f722504698422853e0"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","381fe636b8a00689aac034df496d40c3"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","b2c9b87c2b61ad2b59f88400cb90d637"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","33adcbe19b075a13e4bfde57232d1bc6"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","a43c1d0f11702ec3f357e9ac90757345"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","3c611234c8759d9e3d7b4848bbdfc751"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","03147fa18840b360eda8286b776a37c4"],["/404.html","7459e2c8b352e9630fe39aa9ab1b439c"],["/Daily-Life/photos/cover.jpg","74fdf810bb2943a1577264b1b5861878"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","fb9d07fa73ec5155619eb88a3269c3cb"],["/archives/2020/08/index.html","32b24022eed68ec26d9e064cf15538cb"],["/archives/2020/index.html","bff1853b093beb6951592d5a45c79eb6"],["/archives/2024/05/index.html","226d9bde64d17ae4e39a97d088eaa81e"],["/archives/2024/06/index.html","0948229b40ee670d642672fb54a7c03b"],["/archives/2024/index.html","0aa58152317abbae6a3c1146a04aa510"],["/archives/2024/page/2/index.html","726880a5b4a7f0e7ec182f47fbc6467b"],["/archives/index.html","a9221c83f430d90fe21d4a37e7e8e51b"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","919a09251fde1d01b0f589ee18e3c8ad"],["/categories/Daily-Life/photos/index.html","538d0159bc191c05260dbfe4903fe178"],["/categories/Educational/index.html","38634c1e7dff0f8e9a167a66cf5e9bbf"],["/categories/Educational/page/2/index.html","d578732fd025e6321c15230173fbb990"],["/categories/Educational/python/Data-cleansing/index.html","670dcef33084329c2b0014eaf2e5c1ed"],["/categories/Educational/python/Web-crawlers/index.html","d2774e7bae1ae7fd54562f8d43f86f78"],["/categories/Educational/python/index.html","28241d87a61f7e8704514a7ec2ee5b52"],["/categories/Educational/ruanjian/index.html","d19d15bc1215622a0a5112c4e902fb2f"],["/categories/Educational/shoka-theme/index.html","3892fbbdc8cac786597d4b26f0f7f167"],["/categories/Educational/weixin/index.html","ded1cce9616b1136e58dc547153345d8"],["/categories/Healthy-Living/index.html","f89b6091061ef08962e5a3bd58859b99"],["/categories/Interests/index.html","d0499c3fd5041e670d9ced7bcc415ef4"],["/categories/Social/index.html","2978521c054c40ab8e4885695ae82b42"],["/categories/Work/index.html","c32ac23f22811d1e6f3ef041628c2f1f"],["/categories/index.html","129a5ca821faf3d13b89f6ac66b83c3d"],["/collection/index.html","bd9b9ccf8f516a37c67f5a66ef4cac94"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","7b85f5e5241f4939550019b057824689"],["/js/app.js","b3c0ff4cada84f6f3980b2e923dc037a"],["/page/2/index.html","741d043050c1ec99a51f245476fafa09"],["/resources/index.html","8a3ceebb6882b860fd5d9348c7be4da2"],["/sw-register.js","c2db65fc36c21b024cb3f9e9630db709"],["/tags/Hexo/index.html","a6e16b83d82a38b9da5091eec836147d"],["/tags/Markdown/index.html","8eaf02fa4b7bc380ffde3f0de756090a"],["/tags/Python/index.html","3c07b00160543e5c7e56e2c078b3ca1d"],["/tags/index.html","d94ba088d43c9bcf2c6ca4ecd49dfd41"],["/tags/shoka/index.html","c059e46ba067ec3b709c5217538b25c3"],["/tags/微信小程序/index.html","0b74783b2077ab203a1c83657face974"]];
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

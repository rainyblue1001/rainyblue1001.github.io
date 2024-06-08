/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","0df3c326d623e802f2404725db089806"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","8392c4a63793fa20ebb30cadf4a08f03"],["/2024/05/25/Healthy-Living/健康生活/index.html","e6dc2bdbe853803793de5bc4a2288232"],["/2024/05/25/Interests/兴趣爱好/index.html","11f0d0ba92f8a856d7156e2d0783505b"],["/2024/05/25/Social/社会记录/index.html","873fa3326e104d7dfb17c99770ca7fe3"],["/2024/05/25/Work/工作/index.html","ad3669eb8184f5e89d3c10b0f8fe1db1"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","b387b592c70c611f72a51bab9dab6e3b"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","3a7186d879c55db28767e78c173396c8"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","4a570c19b16df4f1bb55b9f6ec07332e"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","a1e5d8d2b94e060ec89243b9e56d0d56"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","16a27f560a32dd48ec1205d40d1d2a81"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","9ff66ae6414c6dff9cc3bc0c7eba03ff"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","a4128cfe4239c36f6f7f5ba4f4a1993d"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","4f7d5a4bfa59b2f2d61a26dde38aedd9"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","ccce5d670eb108bf4363d7c22e2e4e45"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","cc879c2cf0bc1c59a7f687c2f8ec703a"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","139cc3adf77880a739f577cacfed0439"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","cfdd84025acbfcfbcc784d82c654f9fd"],["/404.html","534094c90499b1b5952b9790712b4275"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","ead3d5ae3120a609311631b7e58c5b8c"],["/archives/2020/08/index.html","987a5ce794200b3adef4df9abcd6f2ee"],["/archives/2020/index.html","babb62b3469ade50516c68604030d6f3"],["/archives/2024/05/index.html","bc5919240e8f5acc2415db35598f0c5b"],["/archives/2024/06/index.html","763bcd3046ae96253751c25093ddc1e5"],["/archives/2024/index.html","e77bcd34281ffa11da657b9a5d75af42"],["/archives/2024/page/2/index.html","ec88786309cd7d338d6ad9581d99b53a"],["/archives/index.html","c7d0da3dd488154c2c65d4beb1f0117b"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","a302a118f8323ea1874bb180f35841fd"],["/categories/Daily-Life/photos/index.html","1549858d8c4676ea755308ae21999a2c"],["/categories/Educational/index.html","88eb68fc108a462ee287c097478a068a"],["/categories/Educational/page/2/index.html","5a1ce0169b5a4bab79f98c43080fdca1"],["/categories/Educational/python/Data-cleansing/index.html","ae1e48ea31c057496af6f2c14f29de29"],["/categories/Educational/python/Web-crawlers/index.html","06144ab303854c6fbdfc86e914d91c1e"],["/categories/Educational/python/index.html","6f2fb867118969022e546b589ae1fb5d"],["/categories/Educational/ruanjian/index.html","547b18644279ea2d3927445d3ccaaa3a"],["/categories/Educational/shoka-theme/index.html","a8e82edbb33ac6445d0743075b73dd1b"],["/categories/Educational/weixin/index.html","57766c95a72dda91d1094cb26824c1b7"],["/categories/Healthy-Living/index.html","3812cb826912f8bb134fec9e2540ebf9"],["/categories/Interests/index.html","6a0332fdec4b36203fd1822a704f1db0"],["/categories/Social/index.html","2e9b345ca5d1f7defe5151503569bbf2"],["/categories/Work/index.html","dc129f2a6220638547741e39b402a416"],["/categories/index.html","bbf4a02bafe2b64f4012b5fed5eb1076"],["/collection/index.html","bdaf4d0bd59585809ea3def70f2b4962"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","0e3a2a973aa51ef2681417fd91d2645e"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","65f7e89eb8c3d76083c03d83e177bb65"],["/resources/index.html","f4e06024153935241ed1bf1d1a0eb238"],["/sw-register.js","bad8603bf27662b2ea9cae9f6e2757d0"],["/tags/Hexo/index.html","435262c3db462fafd2f646834dba1f25"],["/tags/Markdown/index.html","17a451e8958cf110d2a7e0bda09bee87"],["/tags/Python/index.html","fce1bcfc5831eed8e8b3d84b78c43ee6"],["/tags/index.html","0377a09975cf86effdb51cd68139922e"],["/tags/shoka/index.html","374426072c72417f5fc47e5d94a737bb"],["/tags/微信小程序/index.html","b6f567e11503ef0f2055dc9c0ca98792"]];
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

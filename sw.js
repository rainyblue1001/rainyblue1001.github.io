/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","9eebfd5770dc41709f195dddb9ee2a11"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","afcdbc8d7b3dacd963be518da77383b6"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","2c11fa46d69ef91f674471dd9b7fb00a"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","6e0fb61d6fcf55bb7ec188c8cb6a51e8"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","86a2c8c261d04821624fe1b5eeabf538"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","d3c7ead869ccab99b26b0e381bc807e4"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","9543cf0307fff378f4444ab8681d3590"],["/2024/05/25/Healthy-Living/健康生活/index.html","05c7b13d4a282ad99fdb56d5f5679005"],["/2024/05/25/Interests/兴趣爱好/index.html","671602bf4d14f376576067f0f404af0f"],["/2024/05/25/Social/社会记录/index.html","387a72473a2b4c7de48148f66af39341"],["/2024/05/25/Work/工作/index.html","b736609d4e79a1ec9bdfb1e5237cc1b0"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","0329b160490d50cdb7f8caf963dd1192"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","69a2aec4b897763a32bb6c24024a42f2"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","30d7ebfdabd59ad0b57c49e492ce2bcd"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","67c1ff270d13d4bb26164b99c8f27bff"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","6ea211e0b936f9071626ba9105f05747"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","cb704727c9d4f82cfde0898e62af4f63"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","5ffa20095b0ec781a14efd08b0245d64"],["/404.html","50bbf349c0e1daf89e23d337f1cb7afa"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","f40373353fe40299128aef6bdd71053a"],["/archives/2020/08/index.html","17bb1625f7e8a7b465212f2b494fcbf8"],["/archives/2020/index.html","bbef66a8d34387e6fb1790d2c96561f1"],["/archives/2024/05/index.html","98186c6980f16ed9611fee27bef1e318"],["/archives/2024/06/index.html","0c04f257e2dc8d2a1a90594004e0151c"],["/archives/2024/index.html","d4807bb6ae4bbe3157c303db28df2e28"],["/archives/2024/page/2/index.html","0356915a1eacf50ee158d4ac3fd5f338"],["/archives/index.html","0cb14d37902843e8cac142dcef64ff18"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","2f92a207590c8e56f63ae1ae17370bfe"],["/categories/Daily-Life/photos/index.html","032ea293d7d08820739b0123e370c462"],["/categories/Educational/index.html","4650c41c133c9ec498dbdca94d51b57e"],["/categories/Educational/page/2/index.html","8d045759fd17d0057f9e2237ab3e2eab"],["/categories/Educational/python/Data-cleansing/index.html","345cdc28723e2f60e4f07fcad15a80d5"],["/categories/Educational/python/Web-crawlers/index.html","1529876e6de76e3b2b79cfceb7f8a6d5"],["/categories/Educational/python/index.html","af0f0e0650aaba90dab9facc7eb86e25"],["/categories/Educational/ruanjian/index.html","182f1ea00d800c6136efe6b083e5b8fe"],["/categories/Educational/shoka-theme/index.html","1000ad8402198b16c0871286019ae467"],["/categories/Educational/weixin/index.html","d2947bd5c2b092fa61e133e3ccfb4fbc"],["/categories/Healthy-Living/index.html","f2415cd269ce84496c29109f6f29f2e6"],["/categories/Interests/index.html","66fb507fb4a0f48bdd80542e4a620f78"],["/categories/Social/index.html","1e99d5b2dfdf8abe020875e73ccde827"],["/categories/Work/index.html","21796e76939eecac858bedb25c92802c"],["/categories/index.html","50f5201f81b621c75cf5abdedc00f543"],["/collection/index.html","92a2642af2cf7e33b18c8a405b64ae56"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","dbfae8e346c52f9cc19c33676f7277c7"],["/js/app.js","b3c0ff4cada84f6f3980b2e923dc037a"],["/page/2/index.html","613a32d6f0fd875022aba4e1ed41b8a9"],["/resources/index.html","a0d82d9920a68dc0ec0dcb6ed1fcb39d"],["/sw-register.js","cdb8767d3a763b12ce0ee7cb66691b3f"],["/tags/Hexo/index.html","1a494dfd4a2bdc15e71a6b2f4ade4aaf"],["/tags/Markdown/index.html","7667984906a2977a5434ee850286399b"],["/tags/Python/index.html","3d1badf594599b0e5171874c9164462e"],["/tags/index.html","5eae52859be0b6bfced0f8a60ba0a6ec"],["/tags/shoka/index.html","b7d59ebf0b3396d76a07734a086efcb1"],["/tags/微信小程序/index.html","be3800b8ee6acdfeafd9fa7cf48cde07"]];
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

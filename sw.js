/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","72c98fcf7efec0065d8c5670f458a368"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","52d2b57610b366c986f6526760983db7"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","29c710667e81c433689d7ea792a43311"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","8830b99af145ad72ecd31c2ee92d5b2e"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","ee1211f7722a14955d417c418b2120c3"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","af96c35f4b97070f2650450fb823bb04"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","26ccbf7099fe2d69964bc93472f8776e"],["/2024/05/25/Healthy-Living/健康生活/index.html","8b3eaa1065a57f8d5359193373163322"],["/2024/05/25/Interests/兴趣爱好/index.html","62e14898260424b01726a0cbb900b1ec"],["/2024/05/25/Social/社会记录/index.html","fb12c6147394b8d834080195869b525a"],["/2024/05/25/Work/工作/index.html","ff7414e35ac6a7eb126f533b0d52baa7"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","a205188d1235c14e5100dd371ca69a83"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","d369bcba50750d378b484a7f59db013b"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","adde6f4de09a158346cd521401a36db2"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","8f6d58faeb7f2169caa711a7ae1b4764"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","f449773f28f1698ceedf5d0d0d8ad98d"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","b1be905139cd26704e255a3338b0017f"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","d0aaa0d69ce9a0f03e23886bf47b8c96"],["/404.html","410b7ab957f54b8fc90eed75ca839b81"],["/Daily-Life/photos/cover.jpg","74fdf810bb2943a1577264b1b5861878"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","8f14aed77e415fa9e2563fe478a8011e"],["/archives/2020/08/index.html","5fc72851b5fa07d12972bba69aa23d7d"],["/archives/2020/index.html","f22c158c06fb4ec15938dd29ff9ad447"],["/archives/2024/05/index.html","4ea3189339d558bd99baf4eb619b541f"],["/archives/2024/06/index.html","d32d95ca223a9bc6e1cb8f13c9d25cb1"],["/archives/2024/index.html","3125d5a7c76fbeb188cb17d7cd9169d0"],["/archives/2024/page/2/index.html","3915ebd3b010191d27afda350163f961"],["/archives/index.html","73a721166504d12ec5837b56f3012b52"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","9cae17018a201fcb1dd20fb6e6c5cab7"],["/categories/Daily-Life/photos/index.html","3d8c6397e789b8dcbe58b43be2771768"],["/categories/Educational/index.html","a933b1be0c2db9c92a32db5526f2f554"],["/categories/Educational/page/2/index.html","3d0f5864d13b295f9143d1d4ad8bdec0"],["/categories/Educational/python/Data-cleansing/index.html","a0d453fe81bd9561ff7adbd6d725b378"],["/categories/Educational/python/Web-crawlers/index.html","6f3029a6b83ff98c802e99c09504cc75"],["/categories/Educational/python/index.html","f46c78948048bf0378e4374b3ea45d62"],["/categories/Educational/ruanjian/index.html","69f5ac828573ffc161b4e4e6c25c99a7"],["/categories/Educational/shoka-theme/index.html","15979785639cf1461b54e1c489fc9fb8"],["/categories/Educational/weixin/index.html","d8ce08e5f992091f62719a31051c951a"],["/categories/Healthy-Living/index.html","bf2d0515e8a6f442f8546a4fb5f740f2"],["/categories/Interests/index.html","d2bff8d48c9ff39eaa8bef20c506ebbe"],["/categories/Social/index.html","688609e0fbcbaa4d539f7f255b8c597c"],["/categories/Work/index.html","6cafaf1fea2acfdaa7bd3da7456ca6cc"],["/categories/index.html","a70f15cc3efd972f87e3d11058b51339"],["/collection/index.html","030812a47ccf627a70363f47fb0e1341"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","04a77b4261ef873852569994e683930c"],["/js/app.js","b3c0ff4cada84f6f3980b2e923dc037a"],["/page/2/index.html","c7c52cdfae242c3d4d8499518e6df31f"],["/resources/index.html","c45d87ea1a2822c7e3cfd729a3942a90"],["/sw-register.js","ad37b7c716dee5a62eeb3c09f342f306"],["/tags/Hexo/index.html","66595083481a5cb4f4a6caae079cb579"],["/tags/Markdown/index.html","f61112badc9140282ddfae67a8ec094c"],["/tags/Python/index.html","4a38bd9ac1154e735c554cab536c50bb"],["/tags/index.html","41efde3e18459184e5591f83f405a6f5"],["/tags/shoka/index.html","fcd61dc4beb326b9eee95293a1d3945b"],["/tags/微信小程序/index.html","1b2ac38b073ecf9d99e4f187b4fef926"]];
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

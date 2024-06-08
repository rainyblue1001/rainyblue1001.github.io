/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","ee906d85521dac812d4fce9bf528e006"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","43e420b63943b43c24ebd61f24876df3"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","52d92ba5cb3552dcac97bc522f2d73bb"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","5e128c1b38243898fba3fb4d69556d9b"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","ba64b26f3e355c9ff5da09be1b2cb1ac"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","cabf3eb73e667b11c8d5bedabb3ec370"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","3ae7292c49b9e9697c4a80a528c24361"],["/2024/05/25/Healthy-Living/健康生活/index.html","872042cd37e0e891819182493c2770ee"],["/2024/05/25/Interests/兴趣爱好/index.html","aaf3eb9fe1c8753edea80153d65ed915"],["/2024/05/25/Social/社会记录/index.html","8f0fc86c336003fd292ea8d68c81d156"],["/2024/05/25/Work/工作/index.html","3eeb2c35a796c10ad059ac0713101a10"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","1612d36bd3448af07a24c134b5e9c7cb"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","d3c9c97f2ef7219f7334c308932c4602"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","c32c45dcf291531d63650c3f23849491"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","6cf1596f98635e882daf461399ae48bc"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","255f69e6d6509801d43b9b0946caa4ad"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","18371408a995bc9411963a142d99349b"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","5844b3275fb67cd412ddedd644a0f3d8"],["/404.html","dcc9166afe77a9686a702e2ca2182bd0"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","a7bcb36f2ea3c7b5de85effc67379388"],["/archives/2020/08/index.html","8003608be116e2fbed880378bdbc6da6"],["/archives/2020/index.html","ea46d4f44791bfc2a49c7127ef27ac07"],["/archives/2024/05/index.html","db5a84a06be1a7f1e5c7fd2a4a8876f7"],["/archives/2024/06/index.html","9fb6cffd8e08585186b770108da9fa3c"],["/archives/2024/index.html","d054ca9f65eae196e6a078f5412f4b49"],["/archives/2024/page/2/index.html","c06b80a9fad26a4364db79786d27bb98"],["/archives/index.html","97aa5c2df7a4898b13b706346720e3b0"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","68e0ef31aa8028724772664244c2c2a5"],["/categories/Daily-Life/photos/index.html","51e731ae8e23ecc4bff06fc008d8589f"],["/categories/Educational/index.html","edc3d1defa2b02704767a973bd56f978"],["/categories/Educational/page/2/index.html","32bb1c6506a66f6dd63bb20b961e9507"],["/categories/Educational/python/Data-cleansing/index.html","b0f27404d73b9ee97b7b14c0a68a4d45"],["/categories/Educational/python/Web-crawlers/index.html","3ae8848ad5eeae739fca939099ae484d"],["/categories/Educational/python/index.html","9906440c0b9955999c9776587c678c1e"],["/categories/Educational/ruanjian/index.html","3af6ac5d717f84a9d4f8e3030bff7e19"],["/categories/Educational/shoka-theme/index.html","92c74e21e15c573f44fda5ff22d52781"],["/categories/Educational/weixin/index.html","314d74ef9161c0960db5e686175642eb"],["/categories/Healthy-Living/index.html","8b1085ed6747ee56c3417236702c068e"],["/categories/Interests/index.html","0fff7aab833512cf8b4b3981467d6e3b"],["/categories/Social/index.html","50b1b7dcb65b68a3a39ea2d346889732"],["/categories/Work/index.html","ff4822a49a171258f053bd50ed27e2ca"],["/categories/index.html","696173074e8bb0d94e9d5aea7a6c9e45"],["/collection/index.html","a3b780dcac3f2883a8f48ed743a077fb"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","34cf8d060f25bf76177efa1967d4eb27"],["/js/app.js","191476cc8d9cd1a76ca20a96e93cff9e"],["/page/2/index.html","d571f8f47e52cf470b0db44082db4306"],["/resources/index.html","a6db40e2e1f260536d86ef3ac82aa562"],["/sw-register.js","3309e4873f573d22f4894cd686a930c9"],["/tags/Hexo/index.html","57d94f281a02b5d8f2d3d36e96827982"],["/tags/Markdown/index.html","1900046fe3665be51bb004dcc7597a51"],["/tags/Python/index.html","2a45f78f8d5f635513e30c231be900d5"],["/tags/index.html","9369c2ad2f6dd4f7b23222d15dac4e59"],["/tags/shoka/index.html","c225beb937b9081e029c760c479c783e"],["/tags/微信小程序/index.html","3b1c28f51ea007f520cb0ab181c7b0b6"]];
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

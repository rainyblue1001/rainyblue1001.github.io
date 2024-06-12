/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","da28f06e943a798d20fdd82661665e59"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","f1c3c211bfa1c1cef02e802b8828f61b"],["/2024/05/25/Healthy-Living/健康生活/index.html","d9d67a4e382adefe66e60358360aa836"],["/2024/05/25/Interests/兴趣爱好/index.html","417586ad9134f89bd2101a2de3e2d8b9"],["/2024/05/25/Social/社会记录/index.html","ad91c78217c235620e917a517edf32f2"],["/2024/05/25/Work/工作/index.html","e6e27564f98b99ecb18c2749b5455eea"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","9f8c0b660f5acdf47e264d61ce96a608"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","5fbba6658bfd1e2b8ae51fa08414f68c"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","1ad87be5c8da8e90ccafbfbf4392a6f2"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","d9e6bd8757618e9bbdf583644661ede7"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","4928453158a1cf36fc6c4da85b16bcf4"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","09d91e095b5717f8ec8860662a3f861d"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","cc56d9d7f3831c796115136f13db1d83"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","4a4cc6a4aaab7414af3806b30874fdd6"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","6cce44eda6c7e1fed0557c6019bd057c"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","d73a553fc8d1109e436f4635a3b3a957"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","aec56fbb92e08cb6a220339e3ed61677"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","90899fd68b52adab1072b7b6362de703"],["/2024/06/08/Educational/weixin/微信小程序复习提纲/index.html","747bf1e66ad86e38cd897a2d885f0286"],["/404.html","1c1337b604f3ca4330f2698f76da46fa"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","0c3e5e64fb51103fca763f8770d0a545"],["/archives/2020/08/index.html","48e78b28e19380228701aa4c1f08bdff"],["/archives/2020/index.html","ae65cf6caf5821c2066f2318a83566b1"],["/archives/2024/05/index.html","b0cf4ba37d2450387e54ea887f054732"],["/archives/2024/06/index.html","5aaba518b113c3b993c882c863916cad"],["/archives/2024/06/page/2/index.html","15a6d2a5d98cc2aa768507176eca5c95"],["/archives/2024/index.html","d082ebab963dc7fce606e42affe81b06"],["/archives/2024/page/2/index.html","c66f7d390df49f4fedc2709cfc1ac73a"],["/archives/index.html","c6073514b55a5e214368711fa1406403"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","ee2ed078f53d29f3134ed6285517c670"],["/categories/Daily-Life/photos/index.html","1c34f081f57b6ab853ea2c79144405ee"],["/categories/Educational/index.html","dccba0eafcbf8b29354a46aaa91b7cf8"],["/categories/Educational/page/2/index.html","b0f7fd4e1834c39ed45364766dd7b77f"],["/categories/Educational/python/Data-cleansing/index.html","614be5713df75f2e7d86cc19a4dceaeb"],["/categories/Educational/python/Web-crawlers/index.html","374e9a49b1fa2e4398e217396910017e"],["/categories/Educational/python/index.html","69597a495ca24d8c35039d3c01b234c8"],["/categories/Educational/ruanjian/index.html","a46a4722e1fd7b84ba815eb55b7b746c"],["/categories/Educational/shoka-theme/index.html","919a5ff3ca828d997c00636fa561a6fb"],["/categories/Educational/weixin/index.html","c65a2e5a1ea9d398b02b332512780756"],["/categories/Healthy-Living/index.html","d3b13965a9c282f92f24d1072cb5e459"],["/categories/Interests/index.html","ae00d6fa0eee822b96f53d4f985cc67e"],["/categories/Social/index.html","6e03ef3c665e289cf7d41c72e9d6fe00"],["/categories/Work/index.html","350589a1da425696078ce2188866ddd3"],["/categories/index.html","0a80591db8f55d69ce2c14ada08a53c8"],["/collection/index.html","e68a0ce9e1530256fd382f04b2de0df0"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","85b021e2bca5a6fad7e3dc9bf9c50765"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","252378c22b17ee107da23d9bc6fd408f"],["/resources/index.html","61c843a88f0b62bcdd8981f9db01f0a6"],["/sw-register.js","939ead72a03cfb5ee6483a791db169e6"],["/tags/Hexo/index.html","418f3af65cb3b56c1eaccdfa12fe3119"],["/tags/Markdown/index.html","6ae068b916f0ddc9c07464658c61f965"],["/tags/Python/index.html","aa930494cc02164a26737adcc2ef273c"],["/tags/index.html","02a2c18ce701c890f8d35a5ebe750c11"],["/tags/shoka/index.html","29193299c0483628df57be0a642ada5a"],["/tags/微信小程序/index.html","a39dc3a017697f2b9112a2a44c78f857"]];
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

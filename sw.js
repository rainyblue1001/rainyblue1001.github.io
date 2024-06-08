/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","099be852eba86d8d9ef923be5b88e513"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","4fea400dd209c79633a2aa9ff812ec76"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","5faf895142c2bf922b902bbe1cfa4fb5"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","3595f7b636ddfad4630fefe461717a0f"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","00ffaedcac8a28b7d65ef0980003a51d"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","92928b77d8ff0bf2d5429cdd312bdaef"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","c1122861a4101f8fae4622f945930da5"],["/2024/05/25/Healthy-Living/健康生活/index.html","a92d01a19e33d2fa7ee11f893709be9b"],["/2024/05/25/Interests/兴趣爱好/index.html","0e81711d3f5392c289e78d8e4f685641"],["/2024/05/25/Social/社会记录/index.html","5d35f52ecba9c8883ddab969c1083512"],["/2024/05/25/Work/工作/index.html","1140c839dcbe61fc0487420e02a48002"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","4620be273c45c6fb4b5d8274ea8a3978"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","75473150cd4ee23d60eb743c30ad60d2"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","35397d05c095e5e6b4aff52ef9e07525"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","d555ddec5be857c8dede1ad6b75d0fbb"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","3b371b23a1483963e8e918cf026a5cc0"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","b44e28f5116627c91b77e0c4af9a31ce"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","4b31e1babbc459171ea2baafb059f10a"],["/404.html","d8157e25ad7ecae626b2243a607d9175"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","830aa3e4c32698e7b11e57ae99dd410f"],["/archives/2020/08/index.html","cea3b5eaf5c2e7e4d374d47663c7495d"],["/archives/2020/index.html","2e2253a9de951bc905083e8d4e591a0c"],["/archives/2024/05/index.html","3f873e492087ce92cde01a699516821c"],["/archives/2024/06/index.html","92319c5c1349f47f957d0e307fee9503"],["/archives/2024/index.html","dcd8b784ff011026d12c5396b1d23c40"],["/archives/2024/page/2/index.html","9c68a2ed10946d086b1ec8e40ca642ab"],["/archives/index.html","a129e187d2d0bc7f47d05544105ecaba"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","ab910ceba3d14b7d47d2be11a7fcf770"],["/categories/Daily-Life/photos/index.html","1a74804de230af906a15235668fa1410"],["/categories/Educational/index.html","834d94424329d8f2514cafb6588db7ba"],["/categories/Educational/page/2/index.html","7e0ccc3bf39769154142c38b5879fb52"],["/categories/Educational/python/Data-cleansing/index.html","10f843ff1485cf0c445924f1cc5220c6"],["/categories/Educational/python/Web-crawlers/index.html","365d4ce04658a38f1bc33c1e4027a0bf"],["/categories/Educational/python/index.html","734bb32979b59690094d0e08025e85ec"],["/categories/Educational/ruanjian/index.html","e2c934d4f615563c13ae137565404790"],["/categories/Educational/shoka-theme/index.html","7dcb0a670e81d736e9438365a59f1dca"],["/categories/Educational/weixin/index.html","7b21e15bf43e0357dbb5692b4a472f5f"],["/categories/Healthy-Living/index.html","f18d90bb06b94e8dc9dd9a1ce9068956"],["/categories/Interests/index.html","66e36c001c82295840e395ba23ba5c4d"],["/categories/Social/index.html","c1a413e36b2ab12d7a040bd12b72062a"],["/categories/Work/index.html","178e6f54a038b0af25e3e1b7da486b40"],["/categories/index.html","969c65d2f91964d9a2ad46da38d66f5b"],["/collection/index.html","49abd906c289fcf9aeb9ae02d100d6ec"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","77d8794644f56c77861ebfa9dbcacbef"],["/js/app.js","191476cc8d9cd1a76ca20a96e93cff9e"],["/page/2/index.html","afc065380e159759d4b07d817faad240"],["/resources/index.html","1a3af00a5e4a9d6f28594cffde632d31"],["/sw-register.js","9cdcec7ee10d8b95e9825acaff531266"],["/tags/Hexo/index.html","ce1c5e1b2bc6ae335a15c6cbcea05888"],["/tags/Markdown/index.html","b13037486e7be31150b7a4e6ea4be42e"],["/tags/Python/index.html","c85289d023da7be6253d01b05eb97df2"],["/tags/index.html","e3a133da5a5b28ae549888135118a404"],["/tags/shoka/index.html","ba7a22f3d96add7a11b4c398c5f42d84"],["/tags/微信小程序/index.html","4d79ecea16f1110bedfdb7303f8a3169"]];
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

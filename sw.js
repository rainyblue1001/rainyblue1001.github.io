/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","6a86dfaa8ab855e851f4435fc6bc1404"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","aaab5445004bd6f625f75980a727b8ec"],["/2024/05/25/Healthy-Living/健康生活/index.html","19c8ce835a942fdce0f1a3462e56d3a5"],["/2024/05/25/Interests/兴趣爱好/index.html","229289f60c2c979bd8c2a27d1a1f60c2"],["/2024/05/25/Social/社会记录/index.html","b61bfb21a3c902c3012456398aed2e2f"],["/2024/05/25/Work/工作/index.html","57091490c65bb26d38370d6ecb9a32d6"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","9053f238237b06c09f0c7736fd3be6fb"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","260af63102d44bacca906b7a97b6f611"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","3da6234f3ff2dbe29f94a4660264b8c4"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","5aa7636b13e4be5db6fa68edbb840a37"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","6cbc0e89d20bdd8548e12e89445c67ba"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","2e1eeeae1efdf0cbd4a138d08c45f3c4"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","ef9b1c961158ce60dc4507f75183ed1b"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","d524ec39aca0bdcd38fac4cae03956f9"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","d82e913f6aeaea1a35d9af436e63ce02"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","b54ea207f45ba7591f90d8952806cac4"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","e09f6788f9eced9dae409e0827f64366"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","7ce1b03b6d6d83b56bd56a18e4fee992"],["/404.html","31e3bc48ab44fe03d02010c3c3105fe6"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","8a36473f3d881beaf80b638e4dcfef03"],["/archives/2020/08/index.html","b08578aed657cd4c9af63e991f875b82"],["/archives/2020/index.html","a18f3fc684248381c34c02c9b128db86"],["/archives/2024/05/index.html","70644c94e420fadb45a3d95f8c734f47"],["/archives/2024/06/index.html","9567a10d75dd45403b2c8f09806f2a2f"],["/archives/2024/index.html","f4c301456b8dd90acf35d9a7a16367ba"],["/archives/2024/page/2/index.html","edfffc6337ba4d0b83620239b8d1b181"],["/archives/index.html","25e098971afe977c105ae9c499bb7e81"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","c25f15a861404a79bed3170befc5e3e3"],["/categories/Daily-Life/photos/index.html","23ca032c56730bb3ef70a149151b0a6d"],["/categories/Educational/index.html","c72a04fb6715a049a6d2ca17c134bb4e"],["/categories/Educational/page/2/index.html","b8b245c31f649d6b53477bc97126f66f"],["/categories/Educational/python/Data-cleansing/index.html","fe617db7e4e090796415ec52bbab5cbe"],["/categories/Educational/python/Web-crawlers/index.html","47e6b5057e5f5cb12937305fe2b800ae"],["/categories/Educational/python/index.html","6f19c787eb8aa527495525064b11c571"],["/categories/Educational/ruanjian/index.html","cce7d999f88509686a9a99dce8e1f0df"],["/categories/Educational/shoka-theme/index.html","6493d6d4accc19fc68eec85ed16828a9"],["/categories/Educational/weixin/index.html","1f91f4c31a5e20b96f5d32f5648cdfc9"],["/categories/Healthy-Living/index.html","c74be4108bdf10fa89b2ba672a72dde5"],["/categories/Interests/index.html","8b66961e4063733a42bbe9ed6d71eca8"],["/categories/Social/index.html","6d56592323fc2d9fea1ed225201cfaf3"],["/categories/Work/index.html","14b336ed6f744103e38d894ad60587d9"],["/categories/index.html","3d140be65937249fd1c54725614f9911"],["/collection/index.html","e99957a07625bd6b224c3cf7bbd68f78"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","db46d6c609ff0c285bff5793895d59c6"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","f3319c2640d8abbc7f2a277a4021483d"],["/resources/index.html","670c88bca079573179a51edce4051519"],["/sw-register.js","e7c1a5a9b2aa318382f61e2fdb0d73e4"],["/tags/Hexo/index.html","94b187bed8c60578a237e3fc73a6adb2"],["/tags/Markdown/index.html","88c1135ae123fee36c9dbe012229ddf1"],["/tags/Python/index.html","7fc0d62422b7605fb60cc024d345f0d1"],["/tags/index.html","90e7ec5bb7130ec147e001ab3da50db5"],["/tags/shoka/index.html","02db5dc5c135c0fbf8a9003b8344e8c2"],["/tags/微信小程序/index.html","8292c1660210b48cdffe3123f934e4dc"]];
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

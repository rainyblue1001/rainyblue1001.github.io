/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","c4c3a17d3bf3d68f155ec65b9e65242e"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","28354ede1e756619e19c3dd979bbbc94"],["/2024/05/25/Healthy-Living/健康生活/index.html","8917b033f2f304e1f6384951b3505a75"],["/2024/05/25/Interests/兴趣爱好/index.html","3ee95c0291ce40162981329391a63621"],["/2024/05/25/Social/社会记录/index.html","047c41a48d9808170ad27763afd1ef54"],["/2024/05/25/Work/工作/index.html","3392668d9f232541cf3ce4f7eeae32e5"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","ed2d3b56b05cf0ccf03fc5f7ae167039"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","7579da5835b1139034308f32b01ae379"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","c9fe25a76ba99a1cb851d4b9bb151ee1"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","6f831faa950a0d8a97d2177478457b4b"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","b651e89459d34c4da5dcd1da6e34d112"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","2065e9d1002a07973ed4587b8b990c5a"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","8624be6fe11d1caa04b0dd01e6bca2fa"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","8b7927d418c713c278614bc223f9987a"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","50111cc3edb65decc694dd22be92c12e"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","1b8f3699012a6806f098a44f01fefd15"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","ea9517ef41ecd5abfa5943cfaeee2397"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","369146852ad1ec826cd89b5ae25caf3a"],["/404.html","84c991be243c837d123e49f2efc91261"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","621d76ca3576c079a2ed3c65ef66f9b1"],["/archives/2020/08/index.html","2801b229f8f4d2b4fd74b3a4694c0fec"],["/archives/2020/index.html","195fb16aa25a6fea0aa07b901f1c247d"],["/archives/2024/05/index.html","19536136a799db389168969940c60deb"],["/archives/2024/06/index.html","fc9ef66e941718b0cfd7021221d0c102"],["/archives/2024/index.html","7ff6d74ec19f568b0836e1a973a679f5"],["/archives/2024/page/2/index.html","accfb2ea93932d6f212d7308d307c57f"],["/archives/index.html","6a62b8b6772de220c34ceda55cacbb36"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","5df66e226587caaddf9e52e8bbe1ce86"],["/categories/Daily-Life/photos/index.html","318b90ce46e4759522c15599832a59dc"],["/categories/Educational/index.html","ba0facb695a7ad7bc1af6088e7fb038a"],["/categories/Educational/page/2/index.html","2f25033ad62541f4a1140aa2f51ca21d"],["/categories/Educational/python/Data-cleansing/index.html","34017d4b6dfbbfbce2d2845736524ba5"],["/categories/Educational/python/Web-crawlers/index.html","b5ecd3b0e60f5ad5c55c647d90577d2d"],["/categories/Educational/python/index.html","bf97f384a715a14488a9e9c56db43183"],["/categories/Educational/ruanjian/index.html","6d467c46a432e50dc36983cdb197ca8a"],["/categories/Educational/shoka-theme/index.html","5c9cb0a61fda48dfaaa60ed78d8658d7"],["/categories/Educational/weixin/index.html","9e3add19bd899a826022c8869da8ab10"],["/categories/Healthy-Living/index.html","b9d90115cf8fe6fea6ee8c8581a5325e"],["/categories/Interests/index.html","44069abb7c79625814bee1c7548548f6"],["/categories/Social/index.html","61b8c2a4dcb85041cb0ef679eb799dfb"],["/categories/Work/index.html","8fa83e700836f9519708ba45eb6f8947"],["/categories/index.html","f7e19bfdc7888dc4c1394296280cc9c5"],["/collection/index.html","150a1d787fcd83eed00dd919151fc6fd"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","3b0530074e4dd694f48913a5c911ce5c"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","bc99040d779c06d5cd1199c3c5804b3e"],["/resources/index.html","1d9639996322a0accb365557357ac490"],["/sw-register.js","351e0e10d41d3d0e13c2d41d1beb24e8"],["/tags/Hexo/index.html","f08cc9f82b931cf9d2eb408210a254e2"],["/tags/Markdown/index.html","bd80044b5aa19ab80a11b70c6c9d0165"],["/tags/Python/index.html","2e99a31e49912dccfbae5b47be80cbab"],["/tags/index.html","465842528fde1cb471c13d9777425d98"],["/tags/shoka/index.html","ec37961eddc2d910b2b10df41a1f8df9"],["/tags/微信小程序/index.html","1e30678cfe054dc1aa9b199a1384d4f2"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","eb019f0c4d7413f6df97466434025da3"],["/2024/05/20/Educational/python/Data-analysis/Anaconda的安装/index.html","8dc6df100b66d025d391d1cfdea3ba49"],["/2024/05/25/Healthy-Living/健康生活/index.html","b4eccc4232287bbae446ceca3b034785"],["/2024/05/25/Interests/兴趣爱好/index.html","95e43862c4a8558feb7b879ed2109bd1"],["/2024/05/25/Social/社会记录/index.html","43a4d151a859e51a9235c188f7d89709"],["/2024/05/25/Work/工作/index.html","e55d22577ef13844aa621acea6eea340"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","e777afaabcb54a9d726bd6939521663d"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","f1be659cb2cc8807cfc048295ed7fd57"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","02adcd835444bc2d32a4b6a6b57e1565"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","b250401c96cb9a7692eecb1d5b817f5c"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","0108613b8abfb3c79f516be9266b1149"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","8ffa80bd365fa64b579a4bb504dccb21"],["/2024/06/06/Educational/python/Data-analysis/数据清洗/index.html","ff024f70dfab0591c7eec4b3e2ff3ddc"],["/2024/06/08/Educational/WeChat/WX_review/index.html","6d3aa8639b8f4108e22bb8a5193001d0"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","ce42c93dd84bb971e063bdb0b935ce96"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","9046bdf3d56c850bf3fedc0f57660d90"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","694746aa3215a8663083183dfd5ea53f"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","30932b621c99738472e60d89c4e10138"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","e6bac553dc7f516fb1f3421211080c39"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","20e03bc24c60576e076eb2b4b3951a58"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review/index.html","74bdad9c593cfd80f243835a18b1a048"],["/404.html","c8dd235b3b5f4cd3b0749b45ead964ae"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","0987a4c0f3f8d59371e9b7615693fcc5"],["/archives/2020/08/index.html","074390408b3dec332b8b9a47051f6247"],["/archives/2020/index.html","5a8640b1b5376b51feaff4be343421ba"],["/archives/2024/05/index.html","fea4ad5271eeeb2b571d52574eda51ad"],["/archives/2024/06/index.html","c42c569a2bd7668dc3b2c05adf5fbe2d"],["/archives/2024/06/page/2/index.html","c985a21ac5a25d2deead3b311e2754a6"],["/archives/2024/index.html","8aba9d8c2c4873e6d547507f37651a44"],["/archives/2024/page/2/index.html","2b400a931e67a1de05e7e143dc0889be"],["/archives/index.html","64735b3d6242868db4416daca47b1daa"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","88609f2adcdfb3d9e60d402f21831ddd"],["/categories/Daily-Life/photos/index.html","3133a43026a94d6f2b949c05d2cc2395"],["/categories/Educational/Software/index.html","f3510a0130d1c8ecd2d5b7a5c3c63f6f"],["/categories/Educational/WeChat/index.html","0ff07b4ae84c1d44a7cd9db2c93c2f24"],["/categories/Educational/index.html","49dbfbca37d2389a8e3e2b46b6d92c73"],["/categories/Educational/page/2/index.html","1bc6c07428597c1c462eef81ee363449"],["/categories/Educational/python/Data-analysis/index.html","3a43ba1f0d1512cb036c465ad839742b"],["/categories/Educational/python/Web-crawlers/index.html","7c6c4a51cfa50554f0b36871c1789157"],["/categories/Educational/python/index.html","4006bc7c3a744b11be942aee356b0111"],["/categories/Educational/shoka-theme/index.html","488f255aca435b81c3c3462c04379476"],["/categories/Healthy-Living/index.html","f5f6f7a3913ad74ffdd59004aefc1934"],["/categories/Interests/index.html","4d4f7079329ceb056ac11ecab6bee90e"],["/categories/Social/index.html","dc6bd5aabce71017ca13556d11dd28a2"],["/categories/Work/index.html","b79c41665ad4a23f59a75aa4e302d567"],["/categories/index.html","3bad3e178f22e3010c4e343e772fc7df"],["/collection/index.html","17a1c383ec0750e00059202512135b02"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","4a87910cd13fb42d9bf60efb4e8829b4"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","4ef126567facc99fb6f1abbfe63fdd78"],["/resources/index.html","4263863ec9e9df352311b90ec196c25c"],["/sw-register.js","85aa9c7ec46d3904ca3a79e0a5dd2eb3"],["/tags/Hexo/index.html","c7e1ff09ad36737c1dd30614b7b39b22"],["/tags/Markdown/index.html","386020694766e9154d561792312adb4f"],["/tags/Python/index.html","87423244555241c785fc4a30205ac6a5"],["/tags/index.html","5252c603102281f8542c923760f9cbf4"],["/tags/shoka/index.html","f7cdf9b0eeb7da5b421f78da0a6d393b"],["/tags/微信小程序/index.html","0444d395867eed7048a55e9b42f8a604"],["/tags/数据分析/index.html","2e1a827a71a140c04b7ea6749dd9dc02"],["/tags/期末复习/index.html","d5b8b9a14cee480bc2f2732e00bf8560"]];
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

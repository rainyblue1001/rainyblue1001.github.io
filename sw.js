/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","d6007d847a2bfa787c58761b5e46d5b8"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","dd65b25f73cc2eed448b5b9a341f9ce4"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","10d3145a38796d40795f172c130b594c"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","25beecf02ef775f9b85f62dc95761986"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","1e293ecc2141948ed69b3baa896d01ed"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","3cec762d09c9459715d01a8ceda53066"],["/2024/05/25/Healthy-Living/健康生活/index.html","635c98bd1cac54568d3d221fbe331b59"],["/2024/05/25/Interests/兴趣爱好/index.html","2f4d34c4fdfd3646a0d4597475f6381c"],["/2024/05/25/Social/社会记录/index.html","188ff492643179499a9b6a090848c03f"],["/2024/05/25/Work/工作/index.html","e16e3c24a616122e892793fb1c66639a"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","7259076ad9ceaefd4e6d53735abc2d0f"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","4ce1f43b990992798062ae0c4224c3dd"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","bd5f961a159f93bf6ceb1ec5ab9f4ae6"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","3f782fa2123bdc15dfccf87130b79957"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","c8ed145bfe72aeaef200965d1e8db33c"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","644a0794bf85ed92eb0504e05ae5d54f"],["/2024/06/08/Educational/WeChat/WX_review/index.html","370c051d51827dd53ef768ef622cc4bf"],["/2024/06/09/Educational/Software/software-project-review/index.html","3a371d8b3b35f778f4eac8e0716eee82"],["/2024/06/16/Educational/python/Data-analysis/Anaconda/index.html","5157cc4f237e515c47e38d8a35952033"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","6f845619421fafa67215cd60f8142e04"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","43a1dc28fec36a28bb48b21a01f7c2ac"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review/index.html","01b5cad2705d4f97e31e4fe90db0e1a4"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review2/index.html","f3e06130a001de12ac77562a3d838531"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review3/index.html","cce17f58371de75fa5e321ab753aa529"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","daa7453395074e4f80419810e817b238"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","003bfb389cad36fac073a62d53afed44"],["/2024/06/20/Educational/python/Data-analysis/Data_analysis_review4/index.html","843abc7663f1eeb8f4d062beab6a299e"],["/2024/06/23/Educational/WeChat/WX-Questions1/index.html","0b7ef6b47fff6f08d4e06cfc5ee98064"],["/2024/06/23/Educational/WeChat/WX-Questions2/index.html","e8fc7ff4a05a1c51991aababb467ffe3"],["/2024/06/23/Educational/WeChat/WX-Questions3/index.html","e1ac2d857a8d5da40f7af9edf92844cb"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions1/index.html","e1bd958c7203d49b4b358f32906ac3c3"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions2/index.html","a2e9c00aa177ee0d1841c3bd92f4f678"],["/404.html","8f53f5fa6669d17a0e21c0b5a88277f5"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","fb457278f3eab0f3f15e343a600d17ae"],["/archives/2020/08/index.html","684d3ba230b99dfe0337d34033b88b0a"],["/archives/2020/index.html","d3511d9ad2e2bd70944f5fc40dd6250c"],["/archives/2024/05/index.html","b2c47d11755f12861c82ac4a0134a20c"],["/archives/2024/05/page/2/index.html","83c7f553e4af02a118a3758d4f78c01b"],["/archives/2024/06/index.html","9ff3074d6be9cb18371d6495155ba904"],["/archives/2024/06/page/2/index.html","3f195000973e3e91bb6f3c564819a19b"],["/archives/2024/index.html","50774eab0fe2ca785d65790500435afc"],["/archives/2024/page/2/index.html","3eb5b4e261c1b09c54faec0cb931c11a"],["/archives/2024/page/3/index.html","1d992a2fced56b9b2d509db3bfaabe23"],["/archives/2024/page/4/index.html","a15cfc3503630956161f28cc16017ec9"],["/archives/index.html","8c0c7f1a83f746037d7a1e75b67dba60"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","860a95d0357ce197f22e6971d243f865"],["/categories/Daily-Life/photos/index.html","cdd79b17a8852230fe5e4204f06d3c7b"],["/categories/Educational/Software/index.html","54bb07f16f244ded0e9de633c41442a8"],["/categories/Educational/WeChat/index.html","fb9d2ed001fdd342cf5ea3d3a5fe4b32"],["/categories/Educational/index.html","187fc44c1dc0c8b8bc5b573e1960a768"],["/categories/Educational/page/2/index.html","b2fe0e61b8fbdd0ee99261010f91631a"],["/categories/Educational/page/3/index.html","73f251fc6e41b1d2010d4a9ec8b5e2c1"],["/categories/Educational/python/Data-analysis/index.html","d2bcb635b838c98f06ac770aefd01847"],["/categories/Educational/python/Web-crawlers/index.html","c6e1e3924a09b6c3063f5a70af22c0f4"],["/categories/Educational/python/index.html","5761e71d89903b4710a5b7bec3ba76f1"],["/categories/Educational/shoka-theme/index.html","ab8fce684ed163e6a41ec020b32007b3"],["/categories/Healthy-Living/index.html","823393494619ad1e3e1cd9caa77a10eb"],["/categories/Interests/index.html","d434def4688ba4509a9eec68bb17170d"],["/categories/Social/index.html","6775c5a1affe602a5f62b4e1cb2f9f3f"],["/categories/Work/index.html","774fb0cbcdb51cfe009e59e091c94599"],["/categories/index.html","5d017c4175d4dcaf5cefaf6ef73fa54c"],["/collection/index.html","dba436714be8fb6b045aa829fb3ad354"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","9dfdaf7d42e75e171778cc030c03e9ca"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","780dd951ae65698dc8031e6d8fab2f38"],["/page/3/index.html","be87b7781d59aecc9b4626405217df66"],["/resources/index.html","9fb3efc7ffe7513d6b606fae801960ce"],["/sw-register.js","32db6e546a74e643ec9a9e30847a7cd8"],["/tags/Hexo/index.html","70087e570d06c207ce66a30780be97a1"],["/tags/Markdown/index.html","9631f7c3ef1aaa5283c58b4927342df3"],["/tags/Python/index.html","2c811bb35130a336b9410c3d93de02d5"],["/tags/index.html","18034c7bd6efd8651d99759b7a6af110"],["/tags/shoka/index.html","9ea1ccbcf0b76a11db1546bf85117ed2"],["/tags/微信小程序/index.html","21a6411217dc9cf703ee5cf619c80a84"],["/tags/数据分析/index.html","2a056a69ee876721fcebd265d1b230ac"],["/tags/期末复习/index.html","6b3331ef3fe52e5845914c59cda749ff"],["/tags/期末复习/page/2/index.html","746eccd06a9b2500ab651ee37736fd6c"]];
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

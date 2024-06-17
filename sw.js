/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","e824c07b7399f81bf1b36384b1e01810"],["/2024/05/20/Educational/python/Data-analysis/Anaconda的安装/index.html","3f181c2218f36a74b19a83e923c42c60"],["/2024/05/25/Healthy-Living/健康生活/index.html","a55c3e670ec80076b97887766c3d4337"],["/2024/05/25/Interests/兴趣爱好/index.html","88e08c3a5ccdc052b71a452ff304c911"],["/2024/05/25/Social/社会记录/index.html","0212dc50a0a7b1962a86ebb71d5a15ba"],["/2024/05/25/Work/工作/index.html","c849f36d70dfc25b451e28f37b5ae7be"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","cff1303c7bce49ff40a6814e5a4c1f11"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","0b7f905d3d160afb50cde7d95355bf82"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","dde5140e5827e9bff4e2f838e671413a"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","50715d18af63986dd8016e3e05dedc62"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","e122d14e0ca94428ec554cea47da97a1"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","69e74ce04528f53d85fb23ba44a691c5"],["/2024/06/06/Educational/python/Data-analysis/数据清洗/index.html","1310e088f4f74d65b39f82080e155570"],["/2024/06/08/Educational/WeChat/WX_review/index.html","50c74c8a4144352899ed9c18e5ff2766"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","b9dc532c9eba4d274516a3cb42348abc"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","3a9b5f4b80fd30ebcb553e9c6ecba101"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","ff22c7d4ddd356094951eb81083aa648"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","74669dcf6edf8bdcd4bc577e3a3298cf"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","dc54665f6fdb1a924956a72eb2e4421d"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","8c48202fa14689b5c008b7dac0f11be2"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review/index.html","60ac2c18479ba34ba6c56a095af6167b"],["/404.html","e3c04939a7523034c78516e830ae97db"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","05ade3c36fcb1be0cdddbebc2a6819bc"],["/archives/2020/08/index.html","5ee0408e4241a5bec9efbb4dbf6f6bbb"],["/archives/2020/index.html","bf0619e20036139af59955973fb2f233"],["/archives/2024/05/index.html","531cbedfe601fee2ada95208c44cb9c9"],["/archives/2024/06/index.html","de74f4fe7511c857ba8675801af35d49"],["/archives/2024/06/page/2/index.html","d177115823ddf81802dddd6ea1c4181c"],["/archives/2024/index.html","561bf75577526c674bf5c4730e9c63c6"],["/archives/2024/page/2/index.html","c0528b4f3b458ebfd05a4092363e0494"],["/archives/index.html","8f67da6210bc6c24707ba5e8f912ac9a"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","ce8fd17a6ffe1905a637874704222c6c"],["/categories/Daily-Life/photos/index.html","3bd1f091d02dc4555b4aad9d79e39ac3"],["/categories/Educational/Software/index.html","82476c31b78a7199d1e375b902883312"],["/categories/Educational/WeChat/index.html","438a35527eca8b28f088e239cc65f67c"],["/categories/Educational/index.html","cd2d2917529506c1ff7818c5023eb63e"],["/categories/Educational/page/2/index.html","0086d5932b0cbcc7865aba7a414cea31"],["/categories/Educational/python/Data-analysis/index.html","2254d23bcf5e3cd9c4fdd5c7b79f02c8"],["/categories/Educational/python/Web-crawlers/index.html","8a991977a05cd61ffb0a8ec95d290f2c"],["/categories/Educational/python/index.html","a66347a203d818e735a4adef84947e8c"],["/categories/Educational/shoka-theme/index.html","fb0765d222a3c6fb80b0345dd45944d5"],["/categories/Healthy-Living/index.html","4cdbed95ebd0b009ba0622c15bc0b0af"],["/categories/Interests/index.html","2453903ce7ebc5085fa4328b15376313"],["/categories/Social/index.html","a9c7c26b407b4f0842aa6ae5478ab383"],["/categories/Work/index.html","3c546d6128932d25ff8941fcfdc39f93"],["/categories/index.html","94e1393561bcf23e644d7abca649bd80"],["/collection/index.html","76dcc95924836407c961ae7171f938bf"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","166e0a9b41f441432641bcf991eebc0a"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","e4cccd27a21152e627ec8804c532290e"],["/resources/index.html","6a1fa8d9a46b5d59b8f17c9c6cc4bde7"],["/sw-register.js","c1766538d3a05832ad709dfe4a8083eb"],["/tags/Hexo/index.html","daf861d86a040c33e0d1d5ce8b84654a"],["/tags/Markdown/index.html","b33e8fa64eaf2060c0007f2a21fd8efa"],["/tags/Python/index.html","f17cd9fe11435c73ff365cc59df896ad"],["/tags/index.html","18af5e5d7ab14ce424a58a1d5cfa969b"],["/tags/shoka/index.html","b86fa2cc72bf6517be6bf60e2745129b"],["/tags/微信小程序/index.html","e0660746aecccd70a0f26b46511f52e5"],["/tags/数据分析/index.html","a506992ec9dd37e3b04f949085a06c87"],["/tags/期末复习/index.html","352410e4bb80223fb599b732ddb8147d"]];
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

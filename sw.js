/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","07198a18113d697a7b2f6107de783c9a"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","0c4beb7e354173f876345d4046464c24"],["/2024/05/25/Healthy-Living/健康生活/index.html","2e84b67dd55725ad4eff7d2e119dc4a1"],["/2024/05/25/Interests/兴趣爱好/index.html","0089a3b5a694ac435753dc28274c9745"],["/2024/05/25/Social/社会记录/index.html","15c73fe752446e0e0e107e85f52def56"],["/2024/05/25/Work/工作/index.html","8976b7696b0cda3a9c2b4b02e867690e"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","9b74343a65479a8b3ca1484886c680a7"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","307b31945f20c1377410653643717235"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","50b642f5ead56961a7d38b00c1851578"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","e0a8b67de4d2539e6a7ccb4aac5f2209"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","a96911d1bfec66c57b00e06661ffdff5"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","45deb36700c99cdc481aced6822aa91d"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","6f1855c841d7134daa4bebf3ef0d8b03"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","0d44ed2a88c62a54060e566ffe8eaa62"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","1f5c89fa6d6e05b4dcff0449d573d321"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","daca81ac0deb80af4d3d2f47f0d98777"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","567ffb49230fd6270fba5c90ee977866"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","d95c660b810a2763bc5ec52089f49e60"],["/404.html","bb0d6f0984446168619e0f8d9417942e"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","b721caf8a1ccd364771d5a10d01a5bed"],["/archives/2020/08/index.html","23cc8a4a70e413b5a6e2405b3d48468a"],["/archives/2020/index.html","4561caf6865434cc6fcbd32ab39ac10b"],["/archives/2024/05/index.html","6e999ffcccee9221d4c0325712f39040"],["/archives/2024/06/index.html","ee6aaf2ffc51e5c034b07cbb8b643eb2"],["/archives/2024/index.html","ebdbb2cd112b0e421dc1c84b4f5e3e71"],["/archives/2024/page/2/index.html","04993f25fc7f9ad36f512ed0bec09725"],["/archives/index.html","e20ec0ae717cb570816471ca7cec9782"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","dc32ea1a8b04d440ea2f5125942cfae6"],["/categories/Daily-Life/photos/index.html","d1493ef6df3e5ba8e1809662e3478a63"],["/categories/Educational/index.html","d85fdb7168f8c68aa77ddd9a7c2c82d2"],["/categories/Educational/page/2/index.html","9c71a168f674956a173419ee680f2c37"],["/categories/Educational/python/Data-cleansing/index.html","16274035a3e36524f33ab22a1fd0f7a2"],["/categories/Educational/python/Web-crawlers/index.html","310a36729066076f3ed9244c0c9b3c7f"],["/categories/Educational/python/index.html","aad1d8fd345af7911ec0ebedb2db27e3"],["/categories/Educational/ruanjian/index.html","2135a320459a93fc7d9ef31c03f6528b"],["/categories/Educational/shoka-theme/index.html","34108259071733d6a3f08dac6cf56078"],["/categories/Educational/weixin/index.html","6ef2aa0e73be5c31ac01f8b507fa95f5"],["/categories/Healthy-Living/index.html","19a23546a77f644b8e50a37187bc58bb"],["/categories/Interests/index.html","8ccc9496a80c8a33e704691dca5a6d32"],["/categories/Social/index.html","dd8a0508cdeb754f869674c9b38ddf9b"],["/categories/Work/index.html","c06bba04880c73cd8c1a144821f8cc95"],["/categories/index.html","aec5ed9b324a06292b3a7c34fafefccf"],["/collection/index.html","5adb73fa0b74355232ae2ca903ec1e69"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","a948642b0a32cd5650982bc5a60358c0"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","c6c0b2caf9d2b46bc597fcee575c7bb0"],["/resources/index.html","cd0fda9118dc94356622d5a99f8dd2ee"],["/sw-register.js","74e5297f70465e19d7955577813af8d3"],["/tags/Hexo/index.html","10831825ccd587070fd310ab28850349"],["/tags/Markdown/index.html","8aadd91565a7611d703fd8a5bea01f20"],["/tags/Python/index.html","3c082bf23a370579bc0afeea42ce6dfb"],["/tags/index.html","e414ff53f0defa76ab9f94472930a478"],["/tags/shoka/index.html","5ba88b08a1e8f8e1b3f691845d976c62"],["/tags/微信小程序/index.html","e2d0f0ca1efb3cc75d7d1c6efc9ca616"]];
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

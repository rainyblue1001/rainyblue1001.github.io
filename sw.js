/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","77cfd614e5168c56946e9b676b9f20e1"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","b365d68fd5d6f32d4326a21d41ae8065"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","d7658693d255137cd70bfb3c5e4bb72a"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","a3b17b03aa5066a29730faecf34479d0"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","bbde1c8fc6b1ddb57fc0fdac9c4cc00b"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","bea4b3bc1489e462010db167941db734"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","5a438603d45945af43016ac52f0932a6"],["/2024/05/25/Healthy-Living/健康生活/index.html","a35b7adf51702f241cb479c821e6cb88"],["/2024/05/25/Interests/兴趣爱好/index.html","0e9b494282b7613170da8d1be7556225"],["/2024/05/25/Social/社会记录/index.html","5a31e1d6d2553d42be3c0c92bcf5f6e8"],["/2024/05/25/Work/工作/index.html","c34a85d99bf61597347665c19222427d"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","7fa27e6679baf9c7618c1b0cdfdef8e2"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","c47c635992b8c2c843ae88ff8c782430"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","4465b9f57b9b1d4884f0e209cb954844"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","c9f0e94afda17e7c2bea023a926e6a54"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","235587026889777d1e0fd25cf651d6a4"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","10f94390fda7ecf221c3c4b9f131e9e6"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","6e5f8fff8a34a0b626e8546ff59b1357"],["/404.html","c05b0183106f273b4f0bff62e2ad3682"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","df26a2c87e854c4e595f2827ce980339"],["/archives/2020/08/index.html","35f0933db9a9465ae0c38fe82498b681"],["/archives/2020/index.html","c2e60cb8c9036c00bea8c0635c1ecf6f"],["/archives/2024/05/index.html","8772e6548e236882247f17f9b2115b4e"],["/archives/2024/06/index.html","8df84c0c95fbd9d6a62b0400c14d65db"],["/archives/2024/index.html","02686bd2b61bc785fdd6e908c2a81e6b"],["/archives/2024/page/2/index.html","72323d8067af7a564b755990bfac91b7"],["/archives/index.html","0a82b71eb3084060ff92cb83ca47a0dc"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","940d9963d91b50fb4d327ed1517c3485"],["/categories/Daily-Life/photos/index.html","96850bb55c1244d106d002f20b177d08"],["/categories/Educational/index.html","dcc2cd821c90c8d4bdf71c325161ee9d"],["/categories/Educational/page/2/index.html","c04094a0fb7f0f3dd0885961c7160b2d"],["/categories/Educational/python/Data-cleansing/index.html","365e5b923941f402800685d4e176ccc0"],["/categories/Educational/python/Web-crawlers/index.html","a4cb056be3461a8f332bbcc910826ed8"],["/categories/Educational/python/index.html","d1e9d59f303b4b92a66bf3ee59f1d8f9"],["/categories/Educational/ruanjian/index.html","3acb86152f29cb4f82006c11049c18a5"],["/categories/Educational/shoka-theme/index.html","08b573f576480843f17a6c18ced1ab85"],["/categories/Educational/weixin/index.html","2a86a7f15594bc051ed1f36caffe0a9f"],["/categories/Healthy-Living/index.html","9d4c44fa6530a92ec0e4ff0858d0e243"],["/categories/Interests/index.html","32aa42a0feaa927464a76535e9036828"],["/categories/Social/index.html","b8d994ab20b759f1d639d151a2130310"],["/categories/Work/index.html","8662f4d15de8aea524135ac9322d7033"],["/categories/index.html","32aad5a482c954502532dc703e4eafb1"],["/collection/index.html","c0224fa38ddbc8e57e5f201771134bf5"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","ca6d970991d1768f18ce35fbdd5272b3"],["/js/app.js","e384b4a61973e52ac3f1a9d8fdece69b"],["/page/2/index.html","f7206e2604bda0632f72721c7a677a18"],["/resources/index.html","b292c629ed12f57b3f79b3d97e7fd915"],["/sw-register.js","7de78fa5a3741d3e4b1350ebe6e9251e"],["/tags/Hexo/index.html","aaa5557b875819ffcc0ee6d77b567ac2"],["/tags/Markdown/index.html","58a76536186c4538b0e5ba9e03d0e686"],["/tags/Python/index.html","70279662c7c5141eac2577ee2e442b51"],["/tags/index.html","22aeafda6306b53717d24714b0dbaf9d"],["/tags/shoka/index.html","2c88d49490d16f486c4550706fa27c80"],["/tags/微信小程序/index.html","0e92297e42a9209bfb4cf77ebec92672"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","9a798b4653b24883061be44bc0f04878"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","c9a8eaf0ea2cf08db24a8da654f78b6d"],["/2024/05/25/Healthy-Living/健康生活/index.html","7f9ce9df63d95f57d0b98741794ed6c4"],["/2024/05/25/Interests/兴趣爱好/index.html","17573d9156a4313da9d3d158bfe44682"],["/2024/05/25/Social/社会记录/index.html","470bf5d13e14923b2399f71fb15a14da"],["/2024/05/25/Work/工作/index.html","67d5f1f54321b8f5ecafa9bf696e84a3"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","bedc4eff8508165d79d1da699991962b"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","0995afdb2750296486388c257cc796d3"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","3f8b2f41ec61a604d27e7413748dcb52"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","82e9b89393aa206c16687075629b60a5"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","3e58dba2392490a45a190416aa330b8d"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","cbac3f47bb957db5bf70f2e5087449cf"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","2ae5ba7fac14bca59754af8fa63363cd"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","40e8c15c190b8d5dcad0294c9275a02e"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","86c5a5dd2048a9f69c9ec78733b95ec8"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","aef4f4a969765f7bdf302a29b4fea1c7"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","cde579e47c5e34fd40b8ae9f1ff8f00a"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","0cd5e1614d3a680d5ff75e868c4bd382"],["/2024/06/08/Educational/weixin/微信小程序复习提纲/index.html","99ca1b2af632e1fd1cd81931ff98c615"],["/404.html","1e959f600c9fc1125bc0f978b66b9b4d"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","b430c3980e29a7465768fc2d458e21fb"],["/archives/2020/08/index.html","7beb8e0f531a4502f8734557b52c5300"],["/archives/2020/index.html","01a270ead62e9ea2ae14c586fc49f820"],["/archives/2024/05/index.html","562dbd2e3c139caa3e5053b4513cd32e"],["/archives/2024/06/index.html","8b86789a17f6f867ab5b741c3df2516f"],["/archives/2024/06/page/2/index.html","4ecc03271ed97f84b4e16ea593dd10df"],["/archives/2024/index.html","097bfa25b58773539e9a558a7e1cfd12"],["/archives/2024/page/2/index.html","360d65f26c85c6f25565886f786fa678"],["/archives/index.html","149f357877c066abb599299cf95f9efa"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","d30b740254af92f471be7bb44534a3dd"],["/categories/Daily-Life/photos/index.html","3a4c58de9d4e1460cd019a5993268866"],["/categories/Educational/index.html","fb20dfe21b0f8f3482d4eb6f206595a6"],["/categories/Educational/page/2/index.html","526bfd44aaa735df7ac13e925c5dc355"],["/categories/Educational/python/Data-cleansing/index.html","999647d41ac2e6328b7db1301969351c"],["/categories/Educational/python/Web-crawlers/index.html","de0b7e437e121c0cf0c9e1da83522f94"],["/categories/Educational/python/index.html","0a84c9dad73ace2318b54f09069c402f"],["/categories/Educational/ruanjian/index.html","4f3985c028df7337f86a87e8975e1d29"],["/categories/Educational/shoka-theme/index.html","ed3114d2064d98d48301d89013e86521"],["/categories/Educational/weixin/index.html","f3df8e0756a0c21c98dacc7abb0cf441"],["/categories/Healthy-Living/index.html","117b2f0a67f7608f55b4e704a3103214"],["/categories/Interests/index.html","11dd8cf618c493dc04599504ef4e1646"],["/categories/Social/index.html","4baa07c1d52f5663fd46c3af1b3be12a"],["/categories/Work/index.html","d9eb4261dece5f4778247b43a8c3d494"],["/categories/index.html","524d104c9c47fbf511ccab57dd643147"],["/collection/index.html","54add0c72c9809e8f383218e0cfdb599"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","a4c291e5819be455cd5dd86386ded91a"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","1b99775d6b669ad5af88a2c2f2c5064e"],["/resources/index.html","38ec86ccacf4e4e27fe49be8d5916fe2"],["/sw-register.js","ef9b1aa46a35d768447267ceed1a3056"],["/tags/Hexo/index.html","c290cea7bb66072323c7c42dc8e411c2"],["/tags/Markdown/index.html","4df9a279434e476b536419950f6f9b01"],["/tags/Python/index.html","758a9ce8c67270f264fd5c80e213d334"],["/tags/index.html","d7869c7a286eb2c95e3062ff8d5b7b25"],["/tags/shoka/index.html","8cf7335f826b47b81509b83c1077d961"],["/tags/微信小程序/index.html","886fe3e1266c5106fab9dcc655135bda"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","4b1e1b4ca6a4e598bb85846e02a7d3bc"],["/2024/05/20/Educational/python/Data-analysis/Anaconda的安装/index.html","8e71737b54b437d5fac0dbd22f422f79"],["/2024/05/25/Healthy-Living/健康生活/index.html","598901665e7350884bafd566bad3e56a"],["/2024/05/25/Interests/兴趣爱好/index.html","4f6d90b2713ed472eec9fb0311e13552"],["/2024/05/25/Social/社会记录/index.html","95622af9271447b5eb623ebf554e8192"],["/2024/05/25/Work/工作/index.html","5abda767ef207d9c658504845c605698"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","d350155595521f2b78e084ccd0a600b9"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","aeabb481855c904f62659aaea65e6918"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","be93c53e7950949f19a01b20cb20bd24"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","d2669a7710db673ce1b4be62c3df2fe7"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","68fca86b2c681058b918dfe846ce0e34"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","737a5b87f33e4c4aa6ed282fb5a01c58"],["/2024/06/06/Educational/python/Data-analysis/数据清洗/index.html","39d71b0ddecbc8648cbe8669279f2a71"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","a364d50f06756c9e01797afdba3984ba"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","e0aa30f8bf855211b26b525f325ec155"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","7ec6235acb088bd7764301d111d076ed"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","70537a1352f2da8ab524a94fb4aaa938"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","fb39c883d259e4d67c7f3a2ba1988ddf"],["/2024/06/08/Educational/weixin/微信小程序复习提纲/index.html","6fbae36b578c3f24b945b7bcf14e35f8"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review/index.html","51c0bc1f6faa8900b8e5bb25c8800790"],["/404.html","e21de25546de6b0f6133031b7ca9b592"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","18cf198aef005e9313c600d44faa74f7"],["/archives/2020/08/index.html","0bc2a7783df21d6ffded88d3a4114ac8"],["/archives/2020/index.html","bfea6e807825daeceaa94deaaf525c56"],["/archives/2024/05/index.html","60b8fe5bebaacf435ff72284a4f1764d"],["/archives/2024/06/index.html","8e7d554ea76dda1fa6c7366e97227a8f"],["/archives/2024/06/page/2/index.html","b07dcc1f0f516a6f7d0b22c9affaadbb"],["/archives/2024/index.html","21d012964e0430a261b6d42591add143"],["/archives/2024/page/2/index.html","014814deed5745e5b36b2eea37fdf46c"],["/archives/index.html","38c46152a713d58d18c1ccf084202b0f"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","29f67df37e7fe2f8fdf7ce768f9b2b50"],["/categories/Daily-Life/photos/index.html","6795ad53eeba79960d3e4e96737b5fad"],["/categories/Educational/index.html","dca560e6f8f086c67b4fccab4dcd83be"],["/categories/Educational/page/2/index.html","e96c7e5690984552beb7fe9d0064cc87"],["/categories/Educational/python/Data-analysis/index.html","23934795189d216440b17ec3d65aef64"],["/categories/Educational/python/Web-crawlers/index.html","e38b58b3a1434d25e5647f5846e42d7d"],["/categories/Educational/python/index.html","d38d89c0755a0ed89cf93ca856002577"],["/categories/Educational/ruanjian/index.html","34efc316fb703e9e8a9fd6a425b46858"],["/categories/Educational/shoka-theme/index.html","9779347f916b78cd22fd631389f63925"],["/categories/Educational/weixin/index.html","4aa7c7166f71db50b9628471df1e5506"],["/categories/Healthy-Living/index.html","d5b11302a5b90fa638eae4b75da7a99e"],["/categories/Interests/index.html","9d9365d4ca9de39e7ee797c875a5d2d6"],["/categories/Social/index.html","b8cf69d54cfa10b465169270e3cdb2c4"],["/categories/Work/index.html","d82b055050df30f4f554e2a97efc8bfc"],["/categories/index.html","8172fd8a3742adc2f165574156c3df38"],["/collection/index.html","94507e4153208cad2c43cb02d9c351a8"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","86a8c865f3c694851782d71256efcb4d"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","d4eea9250609c23019d31c980066e694"],["/resources/index.html","db1c7dce85e777714f106249edf9cdfe"],["/sw-register.js","aa91f3cfe50646da17983cdc61975f06"],["/tags/Hexo/index.html","30dfa0ed782827961e6265f13e214355"],["/tags/Markdown/index.html","73ca277e385d150d25e308f118a6e72c"],["/tags/Python/index.html","16e1ee667f1cd966c91bcbe061549b3f"],["/tags/index.html","cebbd7bded4a1dc242f21c99395551e1"],["/tags/shoka/index.html","f7e27dc17d80f2a68b005c84ac86f4d6"],["/tags/微信小程序/index.html","54dca2b62ea095d6beb235cf3dfbd503"],["/tags/数据分析/index.html","951560d19798d0584d8370ab53bf5580"],["/tags/期末复习/index.html","66bb39d0725ea80964e34c528180ed7f"]];
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

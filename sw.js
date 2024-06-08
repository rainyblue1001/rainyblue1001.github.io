/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","16db7726640fa12310bcd799331f3902"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","5e94f429c47404abb046627e12d34a5d"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","c95d9d23d6759a15c6085ec6bfb3620f"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","97dfbe804ab504f1d29f8cb281573644"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","11e729756595dddbe68bec75214e0edc"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","15d2a63da3974528f8adc3ce330319da"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","a1288a826380e761a70841e96356f9c3"],["/2024/05/25/Healthy-Living/健康生活/index.html","fad3d819047b950315b98edec1c5a9f9"],["/2024/05/25/Interests/兴趣爱好/index.html","7ab354201c13e5c0ee90f1f807e2a1cb"],["/2024/05/25/Social/社会记录/index.html","aa4b88c0035ae0a106a447653773051d"],["/2024/05/25/Work/工作/index.html","71cdde66400107717f54cae2a29282ed"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","5df34b8671e1468fbbba8d8b74edb43f"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","7f885b611f0e9b217ac1e9dfeb1e2293"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","df47d8e7ca9ea4db6954cf51de02bf2d"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","8b312ccf50c2439847f8e475b7f5b9a4"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","b12bd092fa2fda42f44877d6c51fe29e"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","01af9fc0cf31e90f4c624c367703e996"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","1c91643aade40974998f5bea86cfee42"],["/404.html","3479ff8e8d7fa663cd685d174c0952db"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","be069ea1cc4c6c8e1d5726f41fc23e62"],["/archives/2020/08/index.html","a7dba0040f34c09de44232019a733365"],["/archives/2020/index.html","c99eecdbf54ae86677f1cf1e65dae969"],["/archives/2024/05/index.html","340e0f108ceb2233fc9b17e947cb7941"],["/archives/2024/06/index.html","d86d071159d80e404ddd90d637abd863"],["/archives/2024/index.html","56cf73e05c0731b4d97b976e1749bd53"],["/archives/2024/page/2/index.html","5b2ef761b85c27c24d7e523c83f11a99"],["/archives/index.html","fe06e049898f463b4268a92bb667f66e"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","8872ad067fb3dd764b66fe72f2efae82"],["/categories/Daily-Life/photos/index.html","de9a08b924beb524df570dcbf988e1a4"],["/categories/Educational/index.html","49aed2ff2f3944a6d5c6b33137a148a4"],["/categories/Educational/page/2/index.html","2bb8670cc1a7b145faacc8e543461a76"],["/categories/Educational/python/Data-cleansing/index.html","5a46750a720a4f7b8db65e3a5c71a49e"],["/categories/Educational/python/Web-crawlers/index.html","2de9569bfbf90bde0bb0faf09975f413"],["/categories/Educational/python/index.html","43e1fd151d5869e2afd9b07af33b4743"],["/categories/Educational/ruanjian/index.html","de6560379b2ef526ececc18f941bb19f"],["/categories/Educational/shoka-theme/index.html","ec87a9349196ef42bc73f538e393f335"],["/categories/Educational/weixin/index.html","36c3441f90b7942c2a2cc5080e87b0b2"],["/categories/Healthy-Living/index.html","db49098e6662b4a635e8f04c8fca9cfc"],["/categories/Interests/index.html","65b2c621a29391071bbae062db4b9909"],["/categories/Social/index.html","74a57f4638d3cb5fef3266ce8eb5bc0f"],["/categories/Work/index.html","9264a43a7f1c76c3ad661f1fdac3e3fb"],["/categories/index.html","157da361e27624cf117550f55faeeb7f"],["/collection/index.html","150d9761162d27644d13caf4689ad203"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","4d6536a0ede6ce035b15a2a4d09e8d9a"],["/js/app.js","b3c0ff4cada84f6f3980b2e923dc037a"],["/page/2/index.html","01b4045c6b353fd3c46188f732677674"],["/resources/index.html","40bfa5994030dd2bc49ad3e2875ec6cb"],["/sw-register.js","81555de8c0cb8da34b8a50fc07aaf661"],["/tags/Hexo/index.html","2060159958b2c0a899f4f8e44463e1bb"],["/tags/Markdown/index.html","b807a6f4f441fb9f0ca0e4875c6770f9"],["/tags/Python/index.html","6e59185cb69ab31b5fe38a74a9a09c48"],["/tags/index.html","38ae5c6545d1cdcb352ed4c3aada84c8"],["/tags/shoka/index.html","86818d5dbb151d495cb03bf844c3668e"],["/tags/微信小程序/index.html","9218bbb683c3e83df08d00c735d53e0a"]];
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

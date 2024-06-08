/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","839437b63f13e7286397d90a3498ddf2"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","55d90110c7d1b0ba79a2895232e0db32"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","6b28adca6c016b14454023f0b0a7ba8a"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","2389948996408ffe0adb49dd465dcda2"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","1d0933b3e4c22f4c75e3dd1355919f5a"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","a673f0db423ed8f3cb5ce50e76412f56"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","3752541d80128c7cd908f5b07ffb8713"],["/2024/05/25/Healthy-Living/健康生活/index.html","0bd10f84e01594ab156ef7e422c0885b"],["/2024/05/25/Interests/兴趣爱好/index.html","e739e55a81e01246f5637163e5b164e9"],["/2024/05/25/Social/社会记录/index.html","ca3da74e422bfc7584ca6186cd2401d8"],["/2024/05/25/Work/工作/index.html","fbbb135a31e4a8375da979e0bd16c873"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","c15f9474e3f38d1245acfe087d8db7de"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","bb13023f9c183787d0d16f9e11d39843"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","767a801cb9445fda2ab886d798212944"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","6a26ae2af4337279d2236930d2fae81f"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","ed22fc78ea18a48e627a1677ef0e3346"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","63762a839521875c99e163fbd8d03d36"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","c2f88192fd9d27d171b144c1bb11c583"],["/404.html","c2e3255905d95ee20055c260552d0ba1"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","7e4e86d25ec6776d095977db8e498db1"],["/archives/2020/08/index.html","60369038a720aa93daa668b7c6389dc8"],["/archives/2020/index.html","56087443c842424ac15f53a9a34389eb"],["/archives/2024/05/index.html","6f5c632f40d5a372d506d4710fde7199"],["/archives/2024/06/index.html","0159a046f00b3f12999f0d9f9eb7156d"],["/archives/2024/index.html","5c8cd0f147634b1dc68aaebdcfa01929"],["/archives/2024/page/2/index.html","6bc6b4e3d8a9c4fe856979e6b3ba598f"],["/archives/index.html","26b89ea63251232a2f1e9800e872700c"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","09fd0ff2dc115944208a5c5e7410289d"],["/categories/Daily-Life/photos/index.html","61ea2fe47fba3dad53086473678dbbcf"],["/categories/Educational/index.html","aa9cb780f8059b6a334b420cf0082cb6"],["/categories/Educational/page/2/index.html","f76fa34dd4e95d03bb19c511b1710a85"],["/categories/Educational/python/Data-cleansing/index.html","3c905de1ce30346937e851324860b6f1"],["/categories/Educational/python/Web-crawlers/index.html","7a20ce4125fdebc9989d02215a9c5d7e"],["/categories/Educational/python/index.html","bc62c2b84834c1e785035585d7112371"],["/categories/Educational/ruanjian/index.html","6586490348b694ea2269b5f82e4ec955"],["/categories/Educational/shoka-theme/index.html","bcdb2027743110d0b8090709ed0383b8"],["/categories/Educational/weixin/index.html","c19761613433fc348fd4fa01e2f2fa9b"],["/categories/Healthy-Living/index.html","4be84cf3a2ed0a97c8f9f33abee05e65"],["/categories/Interests/index.html","b14a2afbf597682a7d1ee29f70654fb9"],["/categories/Social/index.html","9bf98760536da18c2efa26eed60c08ab"],["/categories/Work/index.html","e09d50ac6afa34380bfe0bbf0688358a"],["/categories/index.html","2f6e0330ec667dcb9cbb65e22b3e7d83"],["/collection/index.html","80bc5a8607f0142eef3c18b5f37a7638"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","03b4f7b751659542eb1a5c4c8327c61d"],["/js/app.js","b3c0ff4cada84f6f3980b2e923dc037a"],["/page/2/index.html","d788834a26b3bd819a35b599ee5a36e2"],["/resources/index.html","d573aebfd34d3d6cb729614b48928289"],["/sw-register.js","9603df547f44bdb76d6eae36773118ca"],["/tags/Hexo/index.html","42ed4d13137e0aa4bb175d791724b580"],["/tags/Markdown/index.html","e635e38c40fb12ea13f18acb264e3e77"],["/tags/Python/index.html","a6abea86f13e7a5766c35f3df906b2c7"],["/tags/index.html","fe22ba86027bad5f5fb2d58c939017ce"],["/tags/shoka/index.html","402960f6b8777dca629196d5b76cbc61"],["/tags/微信小程序/index.html","91e23ed7df814f17b3d3ff097a52bd8f"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","dcbb71b65ac584d1b243b744e5d8629d"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","912258b3e9a683a45c07818b61f4aef5"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","56473d9ea27efdf582c3e5042b820a9d"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","eccf7b2cf83ef0cfaa176520e52172c6"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","c86746fd7a15f072faadf4b60f2d4c22"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","51e0ea9ca3a0cf5690c8e0a7af6fbb81"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","5ae7b83169eecb12d0f3f3d1bbf84800"],["/2024/05/25/Healthy-Living/健康生活/index.html","68d4ee482b5fd3f8d594417377d3d12c"],["/2024/05/25/Interests/兴趣爱好/index.html","a72afbaeb55dab6796797340945c89b4"],["/2024/05/25/Social/社会记录/index.html","51b1274715a4d6bb7a3fead38bfac6dc"],["/2024/05/25/Work/工作/index.html","c3f80aec5f97de689437606cb8fed689"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","93fd820fefbe0961b843d3a9770c005e"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","02a9fce77f4486d87064e9d3edca317d"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","e42b3a20b301bead7751bab67e2634f3"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","3dfb82c49462bd8799d508fe15269151"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","6c6bea24b5ca086deac104556d258cd1"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","34631535916cbef9f4fab53a1f916ad8"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","71ace3992f5d75762a1496345f29ee5c"],["/404.html","ef869d499ecd88fe8f98d9147f090232"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","9492b9ae15e59bcab7741d8b62c0ecb4"],["/archives/2020/08/index.html","6744e7a8ae84cff2ad14ef4bdd50fd8d"],["/archives/2020/index.html","1f979d214b5b3289c5f41faa9e1c6b94"],["/archives/2024/05/index.html","3915da7b1f8ad03f2823a81222ef82f5"],["/archives/2024/06/index.html","9fbcf80055a72d39838f1d2f87ab55b4"],["/archives/2024/index.html","5e43c9eef467bdb3ed47b227ddb93a7f"],["/archives/2024/page/2/index.html","e5fc0ce754141ef5e577c190c4f54a8b"],["/archives/index.html","fbf96418aa0926f51abd03a08fc4072a"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","9467095a092f9b53958a86dce9632555"],["/categories/Daily-Life/photos/index.html","609e033189161abc514fecb5308c405c"],["/categories/Educational/index.html","2703746230dd2291f50f0c37810d870d"],["/categories/Educational/page/2/index.html","65cb9c12063b66b9e122bcacc226c687"],["/categories/Educational/python/Data-cleansing/index.html","36ce53f9c1352bba943ffdaa9d77565b"],["/categories/Educational/python/Web-crawlers/index.html","c5146cd7d9dfe092ff3d723d1ea86648"],["/categories/Educational/python/index.html","09dac8638376ac7c11ded3c7988683ef"],["/categories/Educational/ruanjian/index.html","ed50938080c8c37514be0f30278f6c07"],["/categories/Educational/shoka-theme/index.html","751fea0c82607bd54d7d3d671e0bf3c0"],["/categories/Educational/weixin/index.html","85c3484026a10876e84bb75d1db6af19"],["/categories/Healthy-Living/index.html","b17f088480e79989ad141edb1eea7135"],["/categories/Interests/index.html","8d80a9e62caf49ce791d2b71622bb688"],["/categories/Social/index.html","7a3e313584ceba14f181fd6fffcc4157"],["/categories/Work/index.html","53a494fb68060c84865b9f29ef31a61f"],["/categories/index.html","5cd0a8fff532eead1758212953695bda"],["/collection/index.html","a3bf7e3f03d0d38f0a8715e433b0909e"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","6b44c64e722a58b02c13014a0b2d09d2"],["/js/app.js","b3c0ff4cada84f6f3980b2e923dc037a"],["/page/2/index.html","50f2a31863c1017c81888bc3d0c994d9"],["/resources/index.html","66806e3d78df2a701eb04b6432e68881"],["/sw-register.js","f8e1112e91333915a60730a02a59ea60"],["/tags/Hexo/index.html","fbd4d256508889871688e59a7bfea07c"],["/tags/Markdown/index.html","536654f971da44ec3994f0efbcc997c4"],["/tags/Python/index.html","de519ffd55ce626a68df0288c90accb0"],["/tags/index.html","ab11f7dcd5bad2cbbdc24f6ac6d3e01f"],["/tags/shoka/index.html","94b98a4d17ffd6067097fb2ae5f27eb5"],["/tags/微信小程序/index.html","15929eea5ea90ba00ebe06c48d57a8ff"]];
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

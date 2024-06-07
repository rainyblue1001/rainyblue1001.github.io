/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","48a54640b13d2882334fee77a21a9718"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","ec01c26a538e03a2e188bd8210becfc3"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","e92b03c88cc69c682481f3c2a20a9ecf"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","734d72b8e6fad683fa152822765db9c5"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","d2586586dabd7d4738a702fe1856569b"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","1cc675e6e997dd45a7c670614a8c8a9f"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","b6d455bc52fadff8016f5c2cdf7c95ab"],["/2024/05/25/Healthy-Living/健康生活/index.html","cc23c0939868b5d9b73d426b09203369"],["/2024/05/25/Interests/兴趣爱好/index.html","ff47012b151ccdd91209465e290838eb"],["/2024/05/25/Social/社会记录/index.html","5f6f010251effb763eb6824434b34803"],["/2024/05/25/Work/工作/index.html","5d27b3a2b36fcb19aa3289c3790c8ad0"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","9d0579599a7fc5915f9eed57a5565d78"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","f85697663ba092c5eb28255b78f49a0b"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","f04b3b40448cd61b034ebf0ae71798ee"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","8411b520446af255dfa830a927dfa9b1"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","1c1e60ee776956afe213e14861e4c5c5"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","030d9602721c7e54978b03d3d89757db"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","f43552f4b4132cbe7d5fc5848db6dd43"],["/404.html","ac3da3db8892579b590de2d2dedcff89"],["/Daily-Life/photos/cover.jpg","74fdf810bb2943a1577264b1b5861878"],["/Educational/python/Data-cleansing/cover.jpg","e16206c9f86ad4630e89bf4dbc76c4de"],["/Educational/python/Web-crawlers/cover.jpg","0f962653783eedb6e83c6ab5cd291ca8"],["/Educational/python/cover.jpg","c50459ae446fa397cd4ff0765438edf6"],["/Educational/ruanjian/cover.jpg","37c4624bccd36ba600a4e9a892f1558c"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","0bd6cc94baf0abee340ec21b50f713db"],["/archives/2020/08/index.html","c22219bd86049bf9b631ed54d8d51d82"],["/archives/2020/index.html","c83ae63ce514e8d88bc0325b4c73da57"],["/archives/2024/05/index.html","c2158d6bafe83da34afc1e6ea35d3169"],["/archives/2024/06/index.html","5f6fda12671bb7d9a599f9491f836ad9"],["/archives/2024/index.html","01595a0529aa6d457bb8a57ac5789a7c"],["/archives/2024/page/2/index.html","88ad2a1d1f6088c914b6c2b63fa52c42"],["/archives/index.html","37f8a07e622695b2ddd92dc6033407a8"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","0f139ab35414a61eaddf98c32217e272"],["/categories/Daily-Life/photos/index.html","60ba85395a892e2beeece4e075605d82"],["/categories/Educational/Shoka教程/Theme-Shoka-Documentation/index.html","f35ab000f1b2f4d4ce39260dc3b3e97a"],["/categories/Educational/Shoka教程/index.html","8c4f0e44ce5de88fc2178e7aab685569"],["/categories/Educational/index.html","b51da372d4527a14ac91f78da7df60f0"],["/categories/Educational/page/2/index.html","3dc0571ee3ba2e56ad00a56f083ad55d"],["/categories/Educational/python/Data-cleansing/index.html","351ac57a18917aea379e54d7d8e85b74"],["/categories/Educational/python/Web-crawlers/index.html","50f809adeb23113212b7a837b0290489"],["/categories/Educational/python/index.html","49f7a3b81283969b012cb8f8cedcc31c"],["/categories/Educational/ruanjian/index.html","54696e595d2ecc5c5f68687c84fcc42c"],["/categories/Educational/weixin/index.html","d1c57134cabcaf601f87179c971a82fb"],["/categories/Healthy-Living/index.html","c9b99dced25bf072cdf1cd4699d37eb0"],["/categories/Interests/index.html","f7d4fc8b45ddcddf3da5273145d8f190"],["/categories/Social/index.html","1bebf2ee03d423f6d44653bee8516369"],["/categories/Work/index.html","6aa305719175424873f5644d5efa4a4e"],["/categories/index.html","11916e417016de67b419bb79f3c05dbf"],["/collection/index.html","7f0dd1118b33fac6db8eec772bc0903b"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","75ff5e1cbf11ec0818c05b19c1b74a6b"],["/js/app.js","b3c0ff4cada84f6f3980b2e923dc037a"],["/page/2/index.html","8b8ce65aba73709dc5d13c03597ddda7"],["/resources/index.html","34f570434ed9957333f107bbf9e90a00"],["/sw-register.js","5f237f0fbf046eb9741ed24e5e9d31f3"],["/tags/Hexo/index.html","bcd91bb97a207b3fe4a00cb84871a309"],["/tags/Markdown/index.html","76197d0369c00f2545bb36c072947bec"],["/tags/Python/index.html","be24c4e677c6394d4da2906a831df51e"],["/tags/index.html","3234ad51f13ab356117d655490969099"],["/tags/shoka/index.html","23ed17157c4b4df3dc827db87db4dd34"],["/tags/微信小程序/index.html","e9bb4ef566c20c1836a35281eb651f75"]];
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

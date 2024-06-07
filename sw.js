/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","74318b32be2f8472670879faea85fb1c"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","efcdc94ddff08a3ebea4c23838c71a04"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","64f5d60505932a0a0be839c61e1ddcfa"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","f9f431a20bb669f445fbd80f35d7aeac"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","d929b61352fe8adb8df4d819c93b1113"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","71f63d48f9adbd811dbda519a4574d86"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","a0f8796cfc248326fb8bdc07b216a0b1"],["/2024/05/25/Healthy-Living/健康生活/index.html","0141799a137db9a602ddf7a34a32875d"],["/2024/05/25/Interests/兴趣爱好/index.html","9f6eabacff9cd96fe4c7dc8dae03a4ed"],["/2024/05/25/Social/社会记录/index.html","44d27319899796dd40cccb6eb7543450"],["/2024/05/25/Work/工作/index.html","39d47a98778845293af0fe5609f99224"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","1be5d0237353f39d99110b4bba3d81d2"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","1163795a58e5ca9b605f0ffdae76c41a"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","b3a78106e125d031d6d7edfdcf2b6d21"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","1b03707e079997fa24800b556726309c"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","c4e9c5483a5d9620f1a08fdd601ffce5"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","92bd5ffa56e61dcb202f736d94339a89"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","754290dc5c4050bc499f10b9262f6fef"],["/404.html","588d0b6356c683890f84adfb0b7292d0"],["/Daily-Life/photos/cover.jpg","74fdf810bb2943a1577264b1b5861878"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","bcb29671c49c380c4d9c8e37142f23c6"],["/archives/2020/08/index.html","2b7549a2f3cfe6e4ae5cc799e513e048"],["/archives/2020/index.html","6fcf9db63a287408043fb5308881b252"],["/archives/2024/05/index.html","7cac390ae55647c42486608213a58306"],["/archives/2024/06/index.html","a5720d3b58b2f7f874a8ffb858379b65"],["/archives/2024/index.html","f01a36a726a3792ec38c7e0b1d333dec"],["/archives/2024/page/2/index.html","4c8c729a2467ae7638fc575d86511423"],["/archives/index.html","e25133791767993daa042d25a58562b9"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","0050f7e2daeb577767abc8b209cd534e"],["/categories/Daily-Life/photos/index.html","9db187204416696e96fc6135cf3a9230"],["/categories/Educational/index.html","e797cbd3d67de8a4589b34fa92c631c7"],["/categories/Educational/page/2/index.html","922bedd7c1d3f6cc1e5abefb5da61e99"],["/categories/Educational/python/Data-cleansing/index.html","7122ad8860b18c0e058de31e2dd0913e"],["/categories/Educational/python/Web-crawlers/index.html","76e6d7b059d1b2f7009682ed5150c744"],["/categories/Educational/python/index.html","e226dd73392f08157d8ffc3465b9ba4b"],["/categories/Educational/ruanjian/index.html","b1b75e97c6d3e1d7098d04f250c8e9ab"],["/categories/Educational/shoka-theme/index.html","c7b42ae3f479fa842834fea0738a129f"],["/categories/Educational/weixin/index.html","e109596d184459165ede4e9e10ac499a"],["/categories/Healthy-Living/index.html","e67575876331acf15d57a93835fbfd38"],["/categories/Interests/index.html","ee31df0904c440be60e66fdc450be2d4"],["/categories/Social/index.html","143c2ec02fde195f5dc86a07ed3bb160"],["/categories/Work/index.html","b0d56ebbf8a7958fe117fd6603c0cf56"],["/categories/index.html","a8b9d44092567840e2fd7cd9f07b9d46"],["/collection/index.html","382fdabc85a93d544cd5121ec106325a"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","9d2bb90a4c992413987d9cb5f0fa2642"],["/js/app.js","b3c0ff4cada84f6f3980b2e923dc037a"],["/page/2/index.html","860897157100cff836c566c9dcf87ce9"],["/resources/index.html","85536060bf991a6e9fe9314cae7c2ec0"],["/sw-register.js","18e9b27baf5eb24ecfa970a48f309509"],["/tags/Hexo/index.html","0325323bbc212fb07553fd332b5e3bad"],["/tags/Markdown/index.html","1b29876ba7a263e11863f022553ddd30"],["/tags/Python/index.html","e6c4468b98212decc2a1988642f41a7f"],["/tags/index.html","cb59b4f6caf4d139239e29db78855146"],["/tags/shoka/index.html","a136dd30ccff88a5e1f9df438ab42b27"],["/tags/微信小程序/index.html","6162e22c093234078df6dc780953ff6a"]];
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

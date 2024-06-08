/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","18d9b0b5cebb05eeb95ae8fc33216455"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","f0264147d2523929b8a04b25b4f96d0d"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","801d2f3ee7edfaf54b03827ccce2ca9a"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","410aa78275edc552d0d71332bf338708"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","80c6df7dedbde0e55f4e79abd3d706fb"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","6a85d5356bc9d4a8d7d6e596c303a303"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","77cd5c71d9c99e0bde274162e76524e6"],["/2024/05/25/Healthy-Living/健康生活/index.html","6b420ec4d05d5a9744a2fc1f41912412"],["/2024/05/25/Interests/兴趣爱好/index.html","88df7d883b538b04799ccda96241c4b7"],["/2024/05/25/Social/社会记录/index.html","6fb52febc82d636636eac44c22c4033d"],["/2024/05/25/Work/工作/index.html","4dfd984361b4b2e4242ada13f20b03fa"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","514ff4b68b0a6bff5a0a77a2664ca3a9"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","d194710bd9d7a4ca1b7131069ba4d47d"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","6d449b4e2fd366cc7f0489cda2263e2d"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","644ef56a6fd34034fa1232f3e0f2e50b"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","9469f4b4171acdcfb81bfa932c1c1875"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","f67a6f0c88678256ca8bb3c63bc90037"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","8230af06e17d8e110b7a45a90916a9c9"],["/404.html","739a9d7d5f7e31dc665f8099fba66245"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","5f0b1ecdcb557bf3126a33eb141fd11c"],["/archives/2020/08/index.html","988798ecb93e05f27e0683b0ef25b3f2"],["/archives/2020/index.html","4ebca4d2c3b10ccdff65bffc105a5826"],["/archives/2024/05/index.html","82a81784ecfddd5af307c21097e4ad67"],["/archives/2024/06/index.html","9ef4f29710be8e4f66dabffd5f1508e0"],["/archives/2024/index.html","dc7678ae9f61bca839e68e93bcd74295"],["/archives/2024/page/2/index.html","c246ced2f82fc3d2062bc57b910b72e2"],["/archives/index.html","4a7426dabd7c5fc57e069f9813949af9"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","ae01fd4702d24d1d3bcd4f4b21727a9a"],["/categories/Daily-Life/photos/index.html","4cb0e03f4859f8e9fcd8d3d809e8aee8"],["/categories/Educational/index.html","d1e0fb532f987d78e74be87fba7f6529"],["/categories/Educational/page/2/index.html","b70e32dbd3eb4e56493bdb6dc50dc24f"],["/categories/Educational/python/Data-cleansing/index.html","605c220151f60c5f49c68105126d6a42"],["/categories/Educational/python/Web-crawlers/index.html","043e70df208d40df51aee3fbb0266c06"],["/categories/Educational/python/index.html","1f7f9924acade59e574cf9f249c4d233"],["/categories/Educational/ruanjian/index.html","44996efe43518372ef9a2a3f9dd83d1d"],["/categories/Educational/shoka-theme/index.html","3d20b52844856d7b8a5f9c4da63ef5c1"],["/categories/Educational/weixin/index.html","273d98b038cf2936d098bdf0733361ef"],["/categories/Healthy-Living/index.html","1cab4594f2f655d4186d223e344d30d2"],["/categories/Interests/index.html","d9be8e0b1e489b347d797c8602bb5aaa"],["/categories/Social/index.html","b0aff9db1e8ee573292bbee365822df9"],["/categories/Work/index.html","b917fb00ae97f0b1aafee6b403d8512c"],["/categories/index.html","81d5a6884d65970132f2a36966a867cb"],["/collection/index.html","fb444891d8c4aee507ea2246158030cc"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","379c8e36521e21db95f71ca4d22a592b"],["/js/app.js","b3c0ff4cada84f6f3980b2e923dc037a"],["/page/2/index.html","dbdf758b23ad17610b4bbf18b080bd65"],["/resources/index.html","5f22b4621adeeab521ec330f4b181b80"],["/sw-register.js","d7fcd2b035abd07731f536e78af4c759"],["/tags/Hexo/index.html","e0d6c676d093dfa6a459d43669d355a1"],["/tags/Markdown/index.html","90312cbc6eb540794a7b1d18701f5860"],["/tags/Python/index.html","0cc40c439cfe8a6508a7a8b025a66e1d"],["/tags/index.html","519e4c67e5fa330bf7defc2d3d959297"],["/tags/shoka/index.html","9bee52f2cde9879b1cf0768ea064dfe2"],["/tags/微信小程序/index.html","e4bd833cabcbc7bc4a73716924791cf5"]];
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

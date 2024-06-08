/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","6e12fb8362425f1e99c27f1438186965"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","0ea00f506349afce2d351afd4a5edbbc"],["/2024/05/25/Healthy-Living/健康生活/index.html","2857b9b4a21a0619627fa4ef30f13631"],["/2024/05/25/Interests/兴趣爱好/index.html","ccdcb6af92e4756c8d572c1fb376e72f"],["/2024/05/25/Social/社会记录/index.html","ab2b1ef187bf7e131fdb9eed62b83d5d"],["/2024/05/25/Work/工作/index.html","6cfd216c73071238835d1bf96fd1b648"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","b22060c35553af7b3d742031602ba5a0"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","b937abda3989f50b51316b0ae1fca718"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","d6d412f29017e7b5b21a7eaf1931296d"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","67862ca9deba7deb486cf5123a5bde1c"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","d17d16cd4b7c0b57f2419f07483edb18"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","b77e8dcebb83207df69cfe85b86e232a"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","126c6d821108502c258e809c2b5b9b28"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","b2cf526363a02c076aeab714c24ea2a6"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","ced289376bb2d34b1f395d3e0c4d931b"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","0dbe5eb30c060652f4a06e0e8cbd50ab"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","92c02cdfaddb872ea1b4affaf3c865c7"],["/404.html","e2904b68db61d0218c5eb0b39e8068ae"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","d68f349a3929e8538962f0b75b85d0cf"],["/archives/2020/08/index.html","a6c1134ddaee872916a8ac1f45d065ce"],["/archives/2020/index.html","0375b1c9db27b69ed21d9a37a00a1a42"],["/archives/2024/05/index.html","514cd039a82911d6b491c4347a00ff85"],["/archives/2024/06/index.html","b3706128167dc33a76eacc020f38ff66"],["/archives/2024/index.html","dc8ec11eff61b6e96760b1722e104ba4"],["/archives/2024/page/2/index.html","17e6f05555d62b6a24e09647c6cca716"],["/archives/index.html","0aeb65731be7b36e077167d22cfc58d0"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","ba136a21263e6fb124564bfc44eaa92a"],["/categories/Daily-Life/photos/index.html","118d44183ceb786c3fabf32924555efb"],["/categories/Educational/index.html","93d36fc3fcc2b0f6ffd20d9c7bd9af3a"],["/categories/Educational/page/2/index.html","e74b4e6b7abdfd56bcc4993e5fc34ff6"],["/categories/Educational/python/Data-cleansing/index.html","73a4c93b123bbd0923452bd65be947eb"],["/categories/Educational/python/Web-crawlers/index.html","0a1153960856c9491c09792d79e5cba8"],["/categories/Educational/python/index.html","6f3a57c3547179815c9c17fce2052f09"],["/categories/Educational/ruanjian/index.html","2362a81aec2433e0074def77a10773a6"],["/categories/Educational/shoka-theme/index.html","ac171a837afac3f3fe339d396324a507"],["/categories/Educational/weixin/index.html","303f5b5375af64475e06d8120fdd70f9"],["/categories/Healthy-Living/index.html","93ec2a91ef78551958474b49bf150b3b"],["/categories/Interests/index.html","7c0a82ef7528c93ecf617cae68b05c37"],["/categories/Social/index.html","5d57c3ab6d6c6b2f4df4d85c128eb2de"],["/categories/Work/index.html","b69dc2a71287a7dd9fd87ee1d8ca0fc3"],["/categories/index.html","97ad5177167316e0724bad1fdc00b616"],["/collection/index.html","88af15da9e4baece0ddb36e5f8147546"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","6fb2b0605332dc7dd991833e50e20865"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","e9bf947870eb20bec2f28d4cf064bb23"],["/resources/index.html","5a1eb86ba89c893c716c0c9a4409d692"],["/sw-register.js","2e86afa42d99d9fcc01bf42ac4bbee7d"],["/tags/Hexo/index.html","834ad50332079799d75b73accf13ff3d"],["/tags/Markdown/index.html","4c031551ca50497f71ac7b63e74ae317"],["/tags/Python/index.html","392161f854aad339d382e123b41a7a94"],["/tags/index.html","3cd12ad0a7965665408809c55cc10f3f"],["/tags/shoka/index.html","700724c44440703e27458209868c247b"],["/tags/微信小程序/index.html","a0876e21d9a7f676107ab92d64a6d329"]];
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

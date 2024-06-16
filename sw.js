/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","28e5cd3486450c6c5e66c37666b3f081"],["/2024/05/20/Educational/python/Data-analysis/Anaconda的安装/index.html","7cb6f6ad2c181dface65c1a2842925ef"],["/2024/05/25/Healthy-Living/健康生活/index.html","00151e63d01c7c623725daa1075153a3"],["/2024/05/25/Interests/兴趣爱好/index.html","81c719663626ec345ee356601047aafb"],["/2024/05/25/Social/社会记录/index.html","b1a37217fa79d37e7349a9df5689de94"],["/2024/05/25/Work/工作/index.html","acc729afe34977ef3d0e8c121b2e15eb"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","d179309ee99537013e4615b48792f2b1"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","07aebe3335aed28763541ed5bc3332d0"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","a27703129d39f80d7141edc7a4eddb5a"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","f98537ce872905bdb7d52de534e1f41e"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","3e1e101318833721ad512820d213ac23"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","87f1c1f9b4ca42b1e5e099f5a37f3748"],["/2024/06/06/Educational/python/Data-analysis/数据清洗/index.html","bcd0d82efa0c751b8a3dce20c6e6e1bd"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","b226d4d0ed954491453d509be9cb4349"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","63c156d3b696b891991b7f42dff76a0c"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","45bb09134dc02cfd46089ed138949e96"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","d4db98fdd5dabbf75b40a9c48cdf050d"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","38e3053bcaa9dfaa286562e30400ff18"],["/2024/06/08/Educational/weixin/微信小程序复习提纲/index.html","c4872f185b4d987ea4d6618912037c09"],["/2024/06/17/Educational/python/Data-analysis/数据分析复习/index.html","aa8263048a52610c0aa849569be2e5b3"],["/404.html","0712d072e09b6595bc35c8f770f4221e"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","63bec86f47c56b67650ae0b003f2e122"],["/archives/2020/08/index.html","80a3df77b100f6b99ae220fdf07cfd36"],["/archives/2020/index.html","cdaa353c650380c3768a674bcc5570ef"],["/archives/2024/05/index.html","f1f4fbf9e0bec900b59fbeab18bafd59"],["/archives/2024/06/index.html","ad74f79fe3fd05e517ca870e8c768507"],["/archives/2024/06/page/2/index.html","5e8656b9088d771fe919e5103c850efb"],["/archives/2024/index.html","ff2f5f6aad9dbb5620c1a07d2e138444"],["/archives/2024/page/2/index.html","7b2cd2ca476d1e7525902b5e72bcd0c6"],["/archives/index.html","10b8db499eeca372492d8b656ad1357b"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","241a39c8ed8fed2c1d0baa8b2833c8ad"],["/categories/Daily-Life/photos/index.html","f6e0f1d419fd2b09181ebeb292f4eedd"],["/categories/Educational/index.html","db143ce85ed827cd6b1ab02fda52990c"],["/categories/Educational/page/2/index.html","a9f655327167de94203c67ead8ea2cb0"],["/categories/Educational/python/Data-analysis/index.html","55cf3ec3ce136eb437d1e1a0fd62b694"],["/categories/Educational/python/Web-crawlers/index.html","601540e18274f4c1d08bc9537a793c56"],["/categories/Educational/python/index.html","3bf3500167e6b324981d75185c4e6326"],["/categories/Educational/ruanjian/index.html","a5ceddf1ed7f8769ce238a2dc5bbee3b"],["/categories/Educational/shoka-theme/index.html","0fe82b114f0fe0b9d6b824602636118d"],["/categories/Educational/weixin/index.html","feba1ee7dcf1ed020a99a27454668a89"],["/categories/Healthy-Living/index.html","e3d0cf2fc2fd3076263bd9a86af9f449"],["/categories/Interests/index.html","67740244a79881942d4a374134766d09"],["/categories/Social/index.html","446229c6d26b9be2a9c881f8c6c5978a"],["/categories/Work/index.html","efab0160b848f975a5e43426e003a032"],["/categories/index.html","d3ccd5287da2df7193cc86e36e168398"],["/collection/index.html","4b7cfb669128e356c73e00f3e85f9b27"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","d20e4b40c4edbf582fe13130c41e2d62"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","fd265925e8551d01553a576cbc0b5eae"],["/resources/index.html","0cfe86de7326c1eeb9331a282d1c296c"],["/sw-register.js","476e6a3f49f0bd2092bdee1dfc958f86"],["/tags/Hexo/index.html","9975fc34b8e7d23f0bf911c0e067bf64"],["/tags/Markdown/index.html","4ea194938f91d43a85d122475bd4bdf3"],["/tags/Python/index.html","24e28f17078b96ac857c9057bbe1da85"],["/tags/index.html","fcf4a8ce469d27bdbab92161126f94fe"],["/tags/shoka/index.html","477b07f72ff343cfe450f1511f8b1f56"],["/tags/微信小程序/index.html","c7f76a6550bde1f5679e4d95fb343b6f"]];
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

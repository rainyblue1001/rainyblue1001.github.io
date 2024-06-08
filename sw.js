/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","ff54cce695147cb8162ca7ff89edbacb"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","14b4495a9edee5cdd4043a3cc3061a23"],["/2024/05/25/Healthy-Living/健康生活/index.html","944167f0e923f1b9827ba551189b98cf"],["/2024/05/25/Interests/兴趣爱好/index.html","74f4f35a052fa995a68f0ac887404088"],["/2024/05/25/Social/社会记录/index.html","08ee3ad2fcf89fae3baaddc75f3090a2"],["/2024/05/25/Work/工作/index.html","3a8105049d41037ac2ce647a998c9336"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","64ecf52c41b16683f25914496beffd42"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","e18d19ef38aa1dec6c4086dd195d0dbb"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","3a5af2b52a4bbf434d8fc232c47671b3"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","2b1faaf9f2890d2d4c76570bcbe1a1a7"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","66fa6474e6b3e8091b86cf02e6941a16"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","fcc7f0368bf96fa51315344444542c2f"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","2baa09f7f8c58f60d434162bf6c438c2"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","2e3203580d2a51ef69df42795921d875"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","917c0f31d6efeb8e456c082afe07dd3c"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","430f80df029b27ce0414c085f3d68a36"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","950981f696ee3faaef4d50e78b64aaff"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","c8edb72610fb1c21027cf57bc17d4301"],["/404.html","7347222c3a95567046cb31c04a666fb1"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","68a49421782c83346f95d80e7574a4bd"],["/archives/2020/08/index.html","10c41a31ca3ab84035be2b66d76e5a88"],["/archives/2020/index.html","aaed45d3befca99d5bf26c294a07f609"],["/archives/2024/05/index.html","20c8f92746b8f4ea5f29becab74245c4"],["/archives/2024/06/index.html","4aef21baf34fdb15415a11418c791623"],["/archives/2024/index.html","ae6822fde4169850ea54d0f42147a617"],["/archives/2024/page/2/index.html","c77ecca4c9914d2d499abdea955b19cf"],["/archives/index.html","f53dd6e692547e5da40c37dc879e465d"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","9dcb5fb1369f5b35ede192925f0459b4"],["/categories/Daily-Life/photos/index.html","da607478a7cdcaeeda2360d527def79c"],["/categories/Educational/index.html","7e8148d6b2716283f94244e5c350a126"],["/categories/Educational/page/2/index.html","c5d40e6c3766c19567c7c71f59604613"],["/categories/Educational/python/Data-cleansing/index.html","953a43cd7fb0be67e77e5a8eab20d811"],["/categories/Educational/python/Web-crawlers/index.html","97d0b0fe49f0bacd160b7307361316ae"],["/categories/Educational/python/index.html","ee55622cb45b90e447c4dd1e5c621423"],["/categories/Educational/ruanjian/index.html","bdae07929f3fad01a770f92f4989ea42"],["/categories/Educational/shoka-theme/index.html","eb1336441f543dafa3b29bc22b539d34"],["/categories/Educational/weixin/index.html","061a54b6bca2d1471f1dd3d95824d7c6"],["/categories/Healthy-Living/index.html","138f0de9979e1b1c46baac4bc3c1207c"],["/categories/Interests/index.html","7c1fc9209f9a4a4b422c1a90c15e9ef3"],["/categories/Social/index.html","3be0de7667c5c7e42965157cd81a80ad"],["/categories/Work/index.html","cae3f7eebdc4618ce2e8b0be4a6966db"],["/categories/index.html","bdf31e8f8faac63d3444d55a4774fc00"],["/collection/index.html","a3e3e11f822efbd499297cab58aac45b"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","fe7d5eb26f4e32c69c7644a0637af9cf"],["/js/app.js","191476cc8d9cd1a76ca20a96e93cff9e"],["/page/2/index.html","9533ec18d0d36250685eb121ce3854bd"],["/resources/index.html","66f537090f839a298908e4b7a58f7925"],["/sw-register.js","72c376e2156fd663680f2c21325226e8"],["/tags/Hexo/index.html","6f966ba9de0cdf8cacc2f428f68d9f84"],["/tags/Markdown/index.html","5f36646ce971919e13324f28b636a142"],["/tags/Python/index.html","e4d94a59af48f44236b50df016148eb6"],["/tags/index.html","ac70cb90594bb660f2664acce8485883"],["/tags/shoka/index.html","a81024d1ba7a4d0c658555223e54c4d5"],["/tags/微信小程序/index.html","4d49797db82662cf404bb5973bb18679"]];
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

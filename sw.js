/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","b7444e029e2a36a4a3622e1a2b240970"],["/2024/05/20/Educational/python/Data-analysis/Anaconda的安装/index.html","4168ae8ed8c75e795c38e092e6c6f4d9"],["/2024/05/25/Healthy-Living/健康生活/index.html","2ab5d53d0b300c635261e56e7295bf08"],["/2024/05/25/Interests/兴趣爱好/index.html","5316a2033d190718fc5c63bd63c79cc3"],["/2024/05/25/Social/社会记录/index.html","f1fde882fd36a5867f600439654f3f73"],["/2024/05/25/Work/工作/index.html","43922ac471264402a211695011bda4fb"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","1247ca2c584db247e9e8f69b0c674a1b"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","9927d69c0b2e8a87e4bb07bf4a1d54d0"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","d6fbf4f68132b6e9586f2d91b4a4ea5b"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","99f88b2e31c4b2c0e9975aa6524972d0"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","71d2131fb0111d5bdc0afd1d9c312058"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","daa3ce7bdcb47c9d894fc9b3affaa0a1"],["/2024/06/06/Educational/python/Data-analysis/数据清洗/index.html","412f2f6a4c4a5b59db2f16bc64cd7268"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","768831475517a5f37c656c0d26679c00"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","4d23adb5010ac0d7f1babd2499fbe344"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","a20c68a5b391e06214a136ed0038d924"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","d20cb52509add93bcf3b138a9fa305f4"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","caab631c2365e92823ff89f23119d4b6"],["/2024/06/08/Educational/weixin/微信小程序复习提纲/index.html","43457e7eb4b2ef1857eb4993951d2b0a"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review/index.html","fbe8b72000d160c8d2541573dffe141b"],["/404.html","c4a449d533329440b751890310e76530"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","480bc8e67fde4744a0d096ad58b4085f"],["/archives/2020/08/index.html","d42dd0ef7b95908af6f70b86e0f357b1"],["/archives/2020/index.html","f09235d0f0f1d416d528cf67a3bbcfa0"],["/archives/2024/05/index.html","19327b36d4a571b100587966808bd451"],["/archives/2024/06/index.html","c72fc56f2ac4c5d562106ea6bff28bb9"],["/archives/2024/06/page/2/index.html","8be852ac2c92f605905e6ec1ccf69c18"],["/archives/2024/index.html","e771a1eefcc2048219a679cd9923d630"],["/archives/2024/page/2/index.html","8f0a84700cdea2417a263de76a2a448b"],["/archives/index.html","8033cc2b777dd7e62ab8cfa572ab3239"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","130b33e6a774b284cf2f722bf3987869"],["/categories/Daily-Life/photos/index.html","d06cf5fa7e6761a25b192f84454c0239"],["/categories/Educational/index.html","4338c315cffdb39896c15a4393a5fff4"],["/categories/Educational/page/2/index.html","be372657ef02c63f65c24ad675d2338c"],["/categories/Educational/python/Data-analysis/index.html","dcf88f85b84ff720ff49589882ec8417"],["/categories/Educational/python/Web-crawlers/index.html","0e88a37a3032e0717dc27c66133d4b55"],["/categories/Educational/python/index.html","8752dc0b0434aff56d92c4b809bfe827"],["/categories/Educational/ruanjian/index.html","01f597f9714f85061c3e5ce8373eb61c"],["/categories/Educational/shoka-theme/index.html","9fa1e0dfdc13c317f3c8326b447cddca"],["/categories/Educational/weixin/index.html","597f47ced1f0ef6e70376097cd7ef60d"],["/categories/Healthy-Living/index.html","3bca87150a5e4e79d6918d574dd41503"],["/categories/Interests/index.html","74fc30b50f8e01b2b89f5e893730634c"],["/categories/Social/index.html","45d24d95b431a52c472cd793a9d660ab"],["/categories/Work/index.html","71238a9b66cf795b72ca3f62125f3086"],["/categories/index.html","e1108ac284e3cefeccb10682d8fe54ee"],["/collection/index.html","ba6b54cac029270f09f92f1ee9cbef7f"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","3b8bba42634e9631e7da6a8e971101e6"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","5166eb06758d0f942bf5a5a64dda13fc"],["/resources/index.html","86450b241b1a7391806377e44f7c2c5b"],["/sw-register.js","bdd8fd223423ba2cdd685b14e576ddad"],["/tags/Hexo/index.html","f98460bb523743085170fa5a5e0b3019"],["/tags/Markdown/index.html","88830c9956badcf8ef9c53a3161c3ffc"],["/tags/Python/index.html","cdffdef8a71b12e4aa4f62952c581cbe"],["/tags/index.html","14ef00ed2e01146bc56520d3791ac315"],["/tags/shoka/index.html","e254c8f582ff2fd4a90f49024c85d1b3"],["/tags/微信小程序/index.html","3894f09afedbb624448ede52991dc455"],["/tags/数据分析/index.html","bea192bd75ea989d1edc50865db254f2"],["/tags/期末复习/index.html","7c6cb1ef2fe00f149141c68669d731f5"]];
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

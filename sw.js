/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","796f49f24ac7a92af4c51f52a8e906e1"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","89c1e4f999296325bbd3c0bff4019f5a"],["/2024/05/25/Healthy-Living/健康生活/index.html","c549806fbf217edcb14872f0140e0f4c"],["/2024/05/25/Interests/兴趣爱好/index.html","844b7112eed22206ac05b57b11fb3624"],["/2024/05/25/Social/社会记录/index.html","406c926e2d5e143a7cf170a08a352730"],["/2024/05/25/Work/工作/index.html","dd1b8f3e22d90eae7f8519527b5a00e7"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","37b13cca13014c29894d6463438e7879"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","4604ffafd07e5f3b5f49fd1803083094"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","a205ed7092ec2257a4de785ae91d028c"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","fd8af5a754ceb1c0c853662d669f003c"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","3d50657c28bed5e49702fe93a74305e0"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","7f7c33ee055b5a48f2420679b0ce9c0c"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","cc8720eedbcb4cb31365b03944bbfb55"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","497b819ae5df4c5da9f7920ce80b655a"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","f1794d549cfccc54b6e80afece974a99"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","44a65344bb923e7f5889b39698a1469b"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","dd26aaa038c81033809973660a2ef38f"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","4581e9b2a839cd5ec6b22f06dcd6d326"],["/404.html","4a9df32415076c1b383261910ad51bb6"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","6c9525639f45b61d603b68733da33613"],["/archives/2020/08/index.html","0e62fe710b5e2bdd4b2fa10c05e97ffd"],["/archives/2020/index.html","fa63638de7d3ce92f9affb39b6ede6de"],["/archives/2024/05/index.html","9c7e288f5dfc785685a10f811a6df022"],["/archives/2024/06/index.html","921919b19c666433b878bfbcf9805109"],["/archives/2024/index.html","e707ea11b90117fa2ea5e76699cede38"],["/archives/2024/page/2/index.html","0db30098674ded552bad9e10c8660ccc"],["/archives/index.html","c4af6dd017da538fca14ba6aeb3202cc"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","96f19a2c4f243349bdb7e26f772eef68"],["/categories/Daily-Life/photos/index.html","59bf06c285e7093020c73c737423de1d"],["/categories/Educational/index.html","9c9b68863585198e298bd06ddd528026"],["/categories/Educational/page/2/index.html","dd6b04b4142b3349efc4cbc6c5e992b0"],["/categories/Educational/python/Data-cleansing/index.html","ca79cb8f0102878acf6010a0ea1f1a1d"],["/categories/Educational/python/Web-crawlers/index.html","9c9f0464413d62ab0ce8a4c94ec69dd7"],["/categories/Educational/python/index.html","1ab511a8e68e2bc073c0049cbb107f70"],["/categories/Educational/ruanjian/index.html","7a46381e5993246e5400b7cec38512c4"],["/categories/Educational/shoka-theme/index.html","606d5e415e18b15c98b0b8b9bcfc167a"],["/categories/Educational/weixin/index.html","a12957ad3f074d1c33369383673a27a1"],["/categories/Healthy-Living/index.html","c0f66a6689299d4a1e1c441c3bdb0972"],["/categories/Interests/index.html","1c49667bf5c8dceff2f59515c7dbb88a"],["/categories/Social/index.html","e9d2ac9e1c8d349cbcd289f7d63e68b9"],["/categories/Work/index.html","8b4ff78c79a557d70b9e9468b42d5e8a"],["/categories/index.html","9055cc698f13d0d5ae62b8b76beb33d5"],["/collection/index.html","67366c6b0bbabc8d5607a64b529e16e5"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","86b3203b1c3d6e44db05f8be41429b9a"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","5c0af34277f6df51f6b2c25f92904dc7"],["/resources/index.html","eece33c9b93e3edbd252e3aaa1bafca0"],["/sw-register.js","ea5474fcac0c39630a1ecf3e58ca0c56"],["/tags/Hexo/index.html","66f4ea0289b304b7bd2b9729d0b328b8"],["/tags/Markdown/index.html","5b93b5b6cd892ee15c17b7759e1e15f2"],["/tags/Python/index.html","d2dbecb17e6b173b5a27847898e41946"],["/tags/index.html","64b6fa26251c0d33cc37f31383875a63"],["/tags/shoka/index.html","7035aa4edc3a605bd5d1cfe6962cbd7f"],["/tags/微信小程序/index.html","fced45ef7af8900aa408877944177e29"]];
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

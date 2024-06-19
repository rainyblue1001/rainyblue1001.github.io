/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","249332a549bc05c5e211784468f2b20b"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","4406d9f4c2240d60a19dc6b916ea38d0"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","97bc6f24b3f23c2d6b9121bf20ffae61"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","d65caee49ef2bec40076c265da86cf80"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","e12f70c336d06e6dc836e437fa4debb8"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","7742dc680bb2aa6e638e1e58d1c75851"],["/2024/05/20/Educational/python/Data-analysis/Anaconda/index.html","5e35d545b2e9ee637c1729a32f3a2e5f"],["/2024/05/25/Healthy-Living/健康生活/index.html","8a24e6b2eb16a0ae934fedc9019f8bf7"],["/2024/05/25/Interests/兴趣爱好/index.html","5243b7498f407390fb41226a119d3984"],["/2024/05/25/Social/社会记录/index.html","869ba7a93324d81d55d4856dba7d9c1b"],["/2024/05/25/Work/工作/index.html","fbae00dab1d334ba6ce3c68d6ec91d85"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","d386f15fc34875c71d4aa8ec1a998b18"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","4ae9a2f333e38d8044b5daabeb932149"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","0ea051ec933055d391c19ebe98ab21f4"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","2415402bb471d72c05aaf92a0ed11c4e"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","1f60be981fa7952b398f89ae1b73d3ad"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","ab52f1afb6a6f9ecf0b686a03bd669a9"],["/2024/06/06/Educational/python/Data-analysis/Data_analysis_code/index.html","134f5631c05ed3ea662cbf3d9b95b699"],["/2024/06/06/Educational/python/Data-analysis/Data_analysis_review/index.html","d6972d9f50a541468b58b2112a4ecb6a"],["/2024/06/08/Educational/WeChat/WX_review/index.html","c84720c4ac9ef62b36280f515935bf00"],["/2024/06/09/Educational/Software/software-project-review/index.html","544f2223bff20122f14d233b921ca33f"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","5c6d326e91f9ef6a06e6b780a6ad017d"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","969d358e14639eaa0681baaa78ddaffc"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review2/index.html","9e43e550fc2ee3722d1357afee1dda4a"],["/404.html","7643ed08da64ec0e9063e8f06dda3e94"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","70a8b8565416c47c565dd089da7f6270"],["/archives/2020/08/index.html","8c222abe577b5379889f23ba5b5ae530"],["/archives/2020/index.html","315ce8e266156e55319e4ccbe19fae93"],["/archives/2024/05/index.html","249e571191cc28c5348934dfdcd997bf"],["/archives/2024/05/page/2/index.html","5700068749fd13059d0dffddfadca9c6"],["/archives/2024/06/index.html","fc47a468f8bad6ca45e8f889065bc72e"],["/archives/2024/06/page/2/index.html","a0fb96322fb9229e0fd2dc3c2c3a4150"],["/archives/2024/index.html","c988c4b5ffc4b3d8cd8f432b2d8498e8"],["/archives/2024/page/2/index.html","b252b72d2d986162581920cdc9c9bc75"],["/archives/2024/page/3/index.html","eb3f35e40fae2e75a7eea90ee7423fb2"],["/archives/index.html","1b84e58a08612d04ceca04e1bf44d7c2"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","d4148e60a8b6654ddb8ae70e682bbede"],["/categories/Daily-Life/photos/index.html","7b358abe6b4327eb12c3565f532aba32"],["/categories/Educational/Software/index.html","e433b28f419daca7b2d82d8d14e21579"],["/categories/Educational/WeChat/index.html","3d72f5adcac2ff22e9b240b35d0725f6"],["/categories/Educational/index.html","b34b9ec355f325732ada4c4fcfc3cd36"],["/categories/Educational/page/2/index.html","1be30fec1590a1021dc1bbba759643c3"],["/categories/Educational/python/Data-analysis/index.html","99ecafcd080b96f07fc9f7a5cb751694"],["/categories/Educational/python/Web-crawlers/index.html","4df491e872ed7d75e7b0d3b89c8ed4b4"],["/categories/Educational/python/index.html","b9db3cb05beba95414a282e44bf0b009"],["/categories/Educational/shoka-theme/index.html","fa2c2af6548e4434c5a0bfe1eaad473d"],["/categories/Healthy-Living/index.html","f5c936099f80d87e6661ea7e026fc536"],["/categories/Interests/index.html","752432d937fcd66dbf0254dd47d69321"],["/categories/Social/index.html","2583780a18f7645635135f336c659e5f"],["/categories/Work/index.html","289a51f5f9a5ce5be434e9c35de3abad"],["/categories/index.html","74b2218cb2c0e2718590fed99ca16013"],["/collection/index.html","8a568584e224db638a3abc3afb6b8917"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","1a9e3ce91e4724126512d9f12cdea954"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","1ffe03550bc8682b9c8711ef9fd44163"],["/page/3/index.html","0ee994d8c6e125fe7c1cb8d20a7b1bca"],["/resources/index.html","36c2964cab7161c0981af1a736f44d41"],["/sw-register.js","8279229f3aa0118862fb9478a0a9aebf"],["/tags/Hexo/index.html","afddf7ef85df7b5559aae0a2ed743e45"],["/tags/Markdown/index.html","6a65d7d2b5756d5976c2af8f63163e0f"],["/tags/Python/index.html","e1a2f5f28629e010c954a4f48c8b7086"],["/tags/index.html","4ab33365f2deb8760a4c080512e2ff30"],["/tags/shoka/index.html","51ec9f29b90a3c88ee93c824e55c2905"],["/tags/微信小程序/index.html","24ebca31e4f6841b6c8ddd93e84b7a73"],["/tags/数据分析/index.html","094d2fac48d93f9c803fff660bfb836f"],["/tags/期末复习/index.html","628e45505cd8bf31e4b26985c80291c2"]];
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

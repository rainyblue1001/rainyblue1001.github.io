/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","f1c051b8e0d4012ca3c17da2b811354a"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","8eeb30a2c9e8e5bd8cd09ee3e88c8580"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","83efd4e942abb592ec8d25ae09e6cd76"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","130665600e20a070055ce5cc57e0f40b"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","2372088ce6fe06b4098a7acb53e33afb"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","d0b3103548a1108a598a8dad867b74df"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","a4bbd3f6769ed14257bc6c5789657681"],["/2024/05/25/Healthy-Living/健康生活/index.html","6f8e2cd10fabe3e5e3937dd41724c549"],["/2024/05/25/Interests/兴趣爱好/index.html","e7434ac4b362048ff24dfdd344701b25"],["/2024/05/25/Social/社会记录/index.html","083ab1dbd05243222347a3bc2e9ad612"],["/2024/05/25/Work/工作/index.html","b23207af7a3869b65f61707579a093df"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","403e244962d00050ffdc76091c9bb0af"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","b2b0f1d331af2b7e0984c00478612ce0"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","263dc1939a1ab3ad42b8661e611d693d"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","03168c6c3747bedc5068c0c9c2d857ca"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","e1823f6262e944dd5bad7bb60b5d1954"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","be9fd573b7898e65b8a469166191f92a"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","c607aa5eaf3adb6c0e9dc83b8c0b2b5e"],["/404.html","33f753a6c8567c0cc6179ea9487476e5"],["/Daily-Life/photos/cover.jpg","74fdf810bb2943a1577264b1b5861878"],["/Educational/python/Data-cleansing/cover.jpg","e16206c9f86ad4630e89bf4dbc76c4de"],["/Educational/python/Web-crawlers/cover.jpg","0f962653783eedb6e83c6ab5cd291ca8"],["/Educational/python/cover.jpg","c50459ae446fa397cd4ff0765438edf6"],["/Educational/ruanjian/cover.jpg","37c4624bccd36ba600a4e9a892f1558c"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","fb9c1f808ca43df9352d810a4f53bf05"],["/archives/2020/08/index.html","48800c05e7d2ec8f794689fa8bbb04bc"],["/archives/2020/index.html","e8f45c2f68a89cbc80b35ff78efb6a3a"],["/archives/2024/05/index.html","723da4e318f68f125ef29ae85a34c635"],["/archives/2024/06/index.html","3f12a476f644cf247a2a366977ac532a"],["/archives/2024/index.html","cf6282cf1b6eccdd9f632b36d6729d3e"],["/archives/2024/page/2/index.html","97a37402853486e0ead884786e4c1e79"],["/archives/index.html","d9fdfe5749b723b676479b1efb890e66"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","486fcdbb84cccfda7761264e3fd0b106"],["/categories/Daily-Life/photos/index.html","52d33e7d25fb524f35107755c2baaab1"],["/categories/Educational/Shoka教程/Theme-Shoka-Documentation/index.html","eb1ab824b145231f084875e4748ff8e2"],["/categories/Educational/Shoka教程/index.html","c572d39fea771dbacc3031fbe42ed1a0"],["/categories/Educational/index.html","e85a8fad39d7b1e8fda0f4ffc6930e6b"],["/categories/Educational/page/2/index.html","57dea354978b6a16ba15c1754ba2f4b6"],["/categories/Educational/python/Data-cleansing/index.html","77cd40c5bb683ce7e4216e09fe155528"],["/categories/Educational/python/Web-crawlers/index.html","9bddd969922bebe60212b9d02e27951e"],["/categories/Educational/python/index.html","c72fcb6d7d251f25e28b424f9a89fd5b"],["/categories/Educational/ruanjian/index.html","b7004e69aebc8436d3b540f664e74c50"],["/categories/Educational/weixin/index.html","03cefbf358321e7c9432be97527ccaaa"],["/categories/Healthy-Living/index.html","83af675109dc50c6eb2aa99054d92629"],["/categories/Interests/index.html","e1cabba9a0d6c1ec016d3d5ad68ade3f"],["/categories/Social/index.html","4a64e9b69c717a0423c1ea30947fbffa"],["/categories/Work/index.html","6d2427dff93e638aaf027c40e56f946a"],["/categories/index.html","2401d0b6e7902a686fdbf12915f09baf"],["/collection/index.html","5235802d62bb058565ad4cc919229b42"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","587d76f605b7a5f96472d18524d04ca0"],["/js/app.js","b3c0ff4cada84f6f3980b2e923dc037a"],["/page/2/index.html","68548f8336cfeecc7ebbc39962ab1439"],["/resources/index.html","c96f623494a87fc2288c3d634f96df85"],["/sw-register.js","d3bb5257f6434beea1f513d108c18575"],["/tags/Hexo/index.html","ae899def5dd2690b141a10887f5129f1"],["/tags/Markdown/index.html","6c43d0456ce25cc0dad4fc6d0b94c967"],["/tags/Python/index.html","6add9636544708315a0ab17f44fef746"],["/tags/index.html","5b3994a963afef4714513a231892d8d8"],["/tags/shoka/index.html","572616d511eb82af950fbd350d0c06e3"],["/tags/微信小程序/index.html","851bc0ab51cf2b714b4ae51fde76f71f"]];
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

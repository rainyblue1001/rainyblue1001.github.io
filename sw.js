/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","67aef5fb8dd1b61e45f192c605261159"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","2c3b55854f6af1738e824fbfdc47e3dd"],["/2024/05/25/Healthy-Living/健康生活/index.html","997eaa13bb49dc5c742b1170642c4043"],["/2024/05/25/Interests/兴趣爱好/index.html","73df5a8f8ce17224f5ad6710e663b773"],["/2024/05/25/Social/社会记录/index.html","8d4ac32803e24fe5568ae7dd2fa2e0a4"],["/2024/05/25/Work/工作/index.html","b5f72992e7e8c2b24e93a4f77c62be46"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","04ed8f148fc24a6c3e455876c087bf4a"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","3be7218844d8c592763c0fa041415f38"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","bbf7d6414a26cbdcfbab9c4c7e822cb4"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","256ae344b668886eedd4cd15e07f90bf"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","4b3daa9d9e8b9a769dd304ee7c360acc"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","8811ba621274e28e8ba7ee32453b2a7c"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","3baec935cd18ba96797775cbd398e553"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","237cddfb5b194e8d26d29b7fdcdf0f07"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","0b3494e5edf8a3d789ad5df367dc0ec8"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","b9bb5d883d537575d46e90a268eba2c1"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","69a65b641301c47b0ffbb20cc63badbf"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","35b9a3108f90bcdd9e7b35b91d12a7e9"],["/2024/06/08/Educational/weixin/微信小程序复习提纲/index.html","85687bdf56ed3005a1987751046e6b8c"],["/404.html","4f7c9f315e44c703f7c405de66fec6e4"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","e9b1919df6185ce3395656d1f70bfb4a"],["/archives/2020/08/index.html","5449f2c7f7546f955865afda31521390"],["/archives/2020/index.html","e536ccb57df0e3648e6179a9e3601404"],["/archives/2024/05/index.html","d32e671ce4ce2ae9687e3921deb9853b"],["/archives/2024/06/index.html","fdb6ce2f3b88ded6b8d9fa309b91507a"],["/archives/2024/06/page/2/index.html","2bf40ba990fa3cfa6c16e865a2aea973"],["/archives/2024/index.html","da7b86cf90f3e9684a8f9e9742f6edec"],["/archives/2024/page/2/index.html","6551c607e666cf932ebc9d8a2d358a7a"],["/archives/index.html","ad80e308364e05ea30d773337eec371c"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","d7446b88c7f0564e6d58fb14a0ebff8a"],["/categories/Daily-Life/photos/index.html","420020b109441297b4109c60e13ee71f"],["/categories/Educational/index.html","b143fd060a13c0811be69a51313148e6"],["/categories/Educational/page/2/index.html","43f8761db3e7eb28d306f06c3042396f"],["/categories/Educational/python/Data-cleansing/index.html","7d2466dbb303c9e0026b9c84d210c0ef"],["/categories/Educational/python/Web-crawlers/index.html","06b733573d43563ccdabc29bc1566313"],["/categories/Educational/python/index.html","d3f4c5c70a9b7eafc8616af4f0874e7d"],["/categories/Educational/ruanjian/index.html","29a214a6901a989963cf9d35849e2cc2"],["/categories/Educational/shoka-theme/index.html","ffa0c30fad59b1154ebf9b16a87964e3"],["/categories/Educational/weixin/index.html","58105ee7e293f3c0ab5185d340652a65"],["/categories/Healthy-Living/index.html","b5736f77d7085eb2f7462783586bb065"],["/categories/Interests/index.html","753f791c3b5b602c1827aa388a1f586d"],["/categories/Social/index.html","463ffb6bccfeb9a9c66313ccc0951157"],["/categories/Work/index.html","3860bffe43160c29da5a58ed6b5f91c8"],["/categories/index.html","017013682b7673001965d34e1b26b31f"],["/collection/index.html","8a92dbf8952e1ea79a1b0dd6d67b7ca9"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","0aebb1b5b99d21bb02f968e4e589b132"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","2165c43622d53e758496b7d5d886ebee"],["/resources/index.html","2b98e23f9f852674431ad1fea67c0ed9"],["/sw-register.js","b8ac48cb57d3017ab340c57782b3ed44"],["/tags/Hexo/index.html","0e1f02916c0a11553b4cf9d9b2a1733d"],["/tags/Markdown/index.html","a157744ab54bd95b6a740de54ae04d6b"],["/tags/Python/index.html","e15a34b47e40488331a407a93940d240"],["/tags/index.html","1d9eef307530ac48bb87a47167748402"],["/tags/shoka/index.html","4e9a5520c173e5b169f405e54b5d98f8"],["/tags/微信小程序/index.html","626b6d7cd3ee8973f4dc2288b7f1215f"]];
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

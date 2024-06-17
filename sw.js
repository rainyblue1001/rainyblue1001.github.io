/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","f4296fce532ac2699ff39c62be021ce3"],["/2024/05/20/Educational/python/Data-analysis/Anaconda的安装/index.html","11ce464364851b4acd689ac47f4d1d49"],["/2024/05/25/Healthy-Living/健康生活/index.html","c5476f192314cc68052b8bd995ecd217"],["/2024/05/25/Interests/兴趣爱好/index.html","530b4417af178db17da0dbbae9a5dbc2"],["/2024/05/25/Social/社会记录/index.html","e5e0c3969c3730ecf1e57ada4bede4fc"],["/2024/05/25/Work/工作/index.html","df02a42dd00f60cf6639c93f0a6a0e29"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","5eea2cef73b3a787a141a20d52196c20"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","004f9b8f13f86698120342629d477a4b"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","ef3f3c9631a13d172b57dcfa648be7e5"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","6b246fcdddd0fa64ecc4497f0928ecc8"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","f67fa92c2fe0eb0d54e73d86809ea3c1"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","a790021c1904e5fd369a5c0890e43c5e"],["/2024/06/06/Educational/python/Data-analysis/数据清洗/index.html","57a9465788dacacc317aa003f81e99a9"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","f964ab8908d03e720727a2a53d315052"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","3470d6e5f18a9be6295d63c0e0ea5b4b"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","a5e60eb42743af28a38116db77baf980"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","da79fb7a7ddd7b8b1d8e5afddf855afe"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","1a2142d1068d604aa34b5ad50d2651dc"],["/2024/06/08/Educational/weixin/微信小程序复习提纲/index.html","bc0c079fdf3b36d0e4d38f25933efda4"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review/index.html","a56aa9d08d8a975613eb8adf6bd25f12"],["/404.html","f5773d5ec7366804c9b236046ffd698d"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","3643325475fedf6e99d8b18010a98abe"],["/archives/2020/08/index.html","528ee94ae4966cb8470330e533e8e0c1"],["/archives/2020/index.html","7bff443cb158b9aa299cefba08e2886c"],["/archives/2024/05/index.html","d529c17dd09b7b6f57454f8c0e434f57"],["/archives/2024/06/index.html","5d8da472316dcf43543bb92590d796a0"],["/archives/2024/06/page/2/index.html","b2802a91c74715806396e07d003495fb"],["/archives/2024/index.html","1ba0eba4f394867e41bac20e5df337db"],["/archives/2024/page/2/index.html","b205ed85e9c0232c5c52cdc9a969af78"],["/archives/index.html","d8208510b068e2ce393c562b956cc3ec"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","f8e13e42b897f8bc2b1a27d7f1939eda"],["/categories/Daily-Life/photos/index.html","abcd3d844aa95e43124efcbb16c9a906"],["/categories/Educational/index.html","059fff6bc6235da11147d484130d7fe9"],["/categories/Educational/page/2/index.html","eeda049b76b267fb1c7d70a8bff850b3"],["/categories/Educational/python/Data-analysis/index.html","2be53cadd362419878268f60186ef889"],["/categories/Educational/python/Web-crawlers/index.html","d9a15f988cffcbf4eab102e1d9031af2"],["/categories/Educational/python/index.html","a9ed0db2c18beb5ad7423136af95229a"],["/categories/Educational/ruanjian/index.html","892e890938102fec47dedcaae390c856"],["/categories/Educational/shoka-theme/index.html","aa8b6a1851cc135289dad0b551a18258"],["/categories/Educational/weixin/index.html","9301058761fb2fa0120b0b7b4f8d4920"],["/categories/Healthy-Living/index.html","1f4c1ded83c41d79bbc58bd0b10b05cd"],["/categories/Interests/index.html","87fe7627aeac5adc58065a71acc8650c"],["/categories/Social/index.html","cb2190d01d8b8df6722cd9e943d214ed"],["/categories/Work/index.html","1a4f56a962b625b2f51a0c0f6a6241f7"],["/categories/index.html","fe7efdef5733ec7bcf3ec1c890573494"],["/collection/index.html","46e7030d23a3ecbf7e194083327533ba"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","87e53497b5b876e65b3228a481d60628"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","d2e4fa4519909056b2b314a7fc360767"],["/resources/index.html","6dab7daba2d5c2449eed8a8b3bbfa9d8"],["/sw-register.js","b20214fad148de746ae40a9380ccda26"],["/tags/Hexo/index.html","647241998574008dd2b00e347866c616"],["/tags/Markdown/index.html","16cbe4c86d9e152f7f282e938daa820d"],["/tags/Python/index.html","954cb20099ff8e025d3424659d6cc646"],["/tags/index.html","0fb2c73a157f89a93e4fedd1d8dbbf5b"],["/tags/shoka/index.html","37a2b6eea26c55020301d76179b3959e"],["/tags/微信小程序/index.html","34270644d093a60f0cace07a5b072c2d"],["/tags/数据分析/index.html","6fda0c35911dc9b4d02986727f72fd70"],["/tags/期末复习/index.html","46273141b73ec7d4b998113e92ca908a"]];
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

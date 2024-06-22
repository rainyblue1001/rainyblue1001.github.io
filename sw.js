/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","e2f7d41ef631418d895bd4b9cb1172d6"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","edcc6bfec81ca516c26048d34b2e579b"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","b7b44f94f30d5ae0bbd306ac856fd295"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","b4425487b54a6ec9756515c35de0d9cf"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","ffa0d46425eafa3f2b8e75d82f0b9692"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","8434bff496be0647e3da62fe31f1b803"],["/2024/05/25/Healthy-Living/健康生活/index.html","6f96a7b58c642bedc7318edddb0ce86e"],["/2024/05/25/Interests/兴趣爱好/index.html","3f55440052c7ec89314dc2b0997e761a"],["/2024/05/25/Social/社会记录/index.html","078ba47204298aa141b9fbc630084429"],["/2024/05/25/Work/工作/index.html","57d0a9eef3c9fe21e06f2e8528bad894"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","367ea7d226fcb994455eecebe92fa5af"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","10bda922be16c6a67c95aa248f11ab91"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","9b59ea78c2725fbdbea0834d09d436d1"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","a467124f58064b9609156ed1af32e569"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","ea9330a5654b80de6e45d14aef6f0054"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","87a8ecf3c82f9fc1086c377a3e361667"],["/2024/06/08/Educational/WeChat/WX_review/index.html","778cfec91359e0059bde4806523cc459"],["/2024/06/09/Educational/Software/software-project-review/index.html","ed19596aa27c1ebe8ceaf341cbdda07c"],["/2024/06/16/Educational/python/Data-analysis/Anaconda/index.html","a98d22c65dc1ec4e8f161dd3fe8cf7bc"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","71cb9ccbeada1729284c0978df99fc44"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","9d78dab5b55610f569c30449ca05b9aa"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review/index.html","cbbc547de4f38d612cff9a7fdec439a8"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review2/index.html","9ad257491fbc1aa7cd1edb0a44471a10"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review3/index.html","60e14c67bbbfcf9f60b93261f5e91427"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","7ead35c0a34699b8b608beeb71e9ca0c"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","37ea158b1f45494b16fec8a1fefd8a68"],["/2024/06/20/Educational/python/Data-analysis/Data_analysis_review4/index.html","27775d85b34af05687b626e86d9b29fc"],["/404.html","b4fd3952b1b60bde40d463ac13151072"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","b9d8dbc47ddfa8fc17989ee364b6469a"],["/archives/2020/08/index.html","a87ba79334dc3c25d74c76d6ec3a4a8f"],["/archives/2020/index.html","2a01d08cd28d25c5a296a26014dfeec8"],["/archives/2024/05/index.html","8b64d5d51ef7090fb9d8ab115dcdf193"],["/archives/2024/05/page/2/index.html","022127f9360044a44774f0a361e33701"],["/archives/2024/06/index.html","5d58ff20ba670c0f611a155433962612"],["/archives/2024/06/page/2/index.html","9b2e9fb3be1fa1f88552ba92406c2ac8"],["/archives/2024/index.html","00575bf3589a2f635512c43ca96422d9"],["/archives/2024/page/2/index.html","3dfd9f6e7a1bc2e898b1bcb63ee6d548"],["/archives/2024/page/3/index.html","76d99c19193bf94b64aba6d8b8aef67f"],["/archives/index.html","b146f48c10ee69e9f6cb69e20cac19f6"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","56312a98f7231ce78248f6bf8a4d030d"],["/categories/Daily-Life/photos/index.html","00f21bb7c16fb0d9ae0f9bca6b8932da"],["/categories/Educational/Software/index.html","a02fde8d0742402f8a2002e566c1d856"],["/categories/Educational/WeChat/index.html","fc08097b7a625747f7778ef53deec73a"],["/categories/Educational/index.html","65ed16d6daa001ad41d28bfa36f5e5cb"],["/categories/Educational/page/2/index.html","898d5f2119f2c0977cdd9dd92824bb00"],["/categories/Educational/page/3/index.html","8bc9fb42e20601bc86e1574d6a000a8c"],["/categories/Educational/python/Data-analysis/index.html","9ec33b68b3cf00559fa778e6eddd2bed"],["/categories/Educational/python/Web-crawlers/index.html","4d8d63301ed6e7113fd29f5c6ece0bb2"],["/categories/Educational/python/index.html","b2674729effb3f49bf91d184d14925f5"],["/categories/Educational/shoka-theme/index.html","63cc09df044d2690e513b5d908f30d2f"],["/categories/Healthy-Living/index.html","b04115b6d9a319842e2b2438026382f5"],["/categories/Interests/index.html","b257976f92c3134a9679efbbe4baaa57"],["/categories/Social/index.html","a7ee2fba8d085f5a519e976b0433bb2b"],["/categories/Work/index.html","39d4bc37f853cb54f7e6f4adbaaad0f0"],["/categories/index.html","f92ec6479b9a5a47bf130dbbf30fefd5"],["/collection/index.html","38274d9ec2ab2d973a41345ce4988c32"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","8ebc7530ef99847e5253c6a82f38a821"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","0d7e9b6960c44bada3c0f6a05a5b168a"],["/page/3/index.html","500b10d3d207ad74ca609f04e4219754"],["/resources/index.html","614dd21e44e55609ded344dab764c2a4"],["/sw-register.js","f4347b892f5d55b6e9e6d7e7f7fb396c"],["/tags/Hexo/index.html","ea1f5c8af55b3ba5d94ab6e71cba3a02"],["/tags/Markdown/index.html","bffa512796019c3944aa9b377e840fb9"],["/tags/Python/index.html","f201a4033ed550e7bf79dc23669e2ddb"],["/tags/index.html","cab4ba09a4dd59ff9e260c71d3ab197f"],["/tags/shoka/index.html","06a0bf5bec1685fe9df09990e4819ebf"],["/tags/微信小程序/index.html","842216030fadccf5f51b222cccad57b7"],["/tags/数据分析/index.html","1986b0068910e9e29e56992bdde712c9"],["/tags/期末复习/index.html","ecee6471ab83659ee30c07d950e424dc"]];
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

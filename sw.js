/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","ee7a6655f5039d9540a448d07a03bcdd"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","aae82f02bd273043508c8f87edf579f1"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","1adaf8ca66d095bf5153a2af37834bf1"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","0e7a0068201dd13c061f1ed9cc766978"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","e2e47ec514c43deafbba035440e9eb01"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","05e1d20e0785b0093717a398a02c9345"],["/2024/05/20/Educational/python/Data-analysis/Anaconda/index.html","a28379cf3683bb03bb56cc9dabe84d77"],["/2024/05/25/Healthy-Living/健康生活/index.html","34ed15e530035e530c58e2abaae34023"],["/2024/05/25/Interests/兴趣爱好/index.html","42d6981bd74345325f93d2eb7f280050"],["/2024/05/25/Social/社会记录/index.html","72a2a31552cf658acb8e5d98c8615810"],["/2024/05/25/Work/工作/index.html","a1a9c40e556c3b502dce2c9a3db84be7"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","3dad15ac44e9b6c86cc9f66a00914962"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","900ae532293c03f942d82eeff2fa9f36"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","b354241035327fdc62044b474c1df494"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","927b3ba542d7d51a48c2b694ccd11abd"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","4b25383755c56e8c941f50ea65402c76"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","8ef133f0ac57b2cfa3ffda4fc512dbc9"],["/2024/06/08/Educational/WeChat/WX_review/index.html","f6107b05fe1f0343c616c54853589440"],["/2024/06/09/Educational/Software/software-project-review/index.html","57ad88771846b1ae46614b1947bbe43c"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","e69ea3dc275d612b9c6c5eda190ab36d"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","20d0ae8d617d8638ec4cdf6a7a06e269"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review2/index.html","2459ce259a107660041c504d364cfd2d"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review/index.html","a84f12fc0e171f87bb1d8026306eaabf"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","1a6c0c06c026a609f8e716dc4929d704"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","fd39ad3ed74d36f5e0e078bdecfe0d52"],["/404.html","8c9f4b7841ccc66fed611518fd5e5a49"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","673f9ae9aa94766f5dd8f145f965e9c3"],["/archives/2020/08/index.html","028ea0387e423b46e54d28c95b7ba80f"],["/archives/2020/index.html","83dfe24c2a88868729d015bb09d5f204"],["/archives/2024/05/index.html","4d305bb2bb12aab46de57a8945ecefd7"],["/archives/2024/05/page/2/index.html","29bf814d0c37a491d32eac1423592bdb"],["/archives/2024/06/index.html","2d349c16f0b08e4a266442723e319ab3"],["/archives/2024/06/page/2/index.html","0803d8036c2e114c8cc767c6375a6dd6"],["/archives/2024/index.html","dec2e188bfa3697f207ef8294be33f78"],["/archives/2024/page/2/index.html","2307821c00304912a019841ca474827d"],["/archives/2024/page/3/index.html","81574ebb9ebd5b2cf672603de08af46a"],["/archives/index.html","7ab2c25c27811e5cfc840b14856197aa"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","50d73d0a0b449d179fe64a90098e5343"],["/categories/Daily-Life/photos/index.html","4d44c7661c967e06152a43d7388fe603"],["/categories/Educational/Software/index.html","bf6e4522dc0be81b6de03f567181e64c"],["/categories/Educational/WeChat/index.html","fd9914deb1c0beebb75d5c80a9702707"],["/categories/Educational/index.html","498ac13746d49eb0453f0ebf74b9d1d9"],["/categories/Educational/page/2/index.html","04606f1975e4ff23ac37fc61d4942adf"],["/categories/Educational/python/Data-analysis/index.html","c0443392abc913bb13b8da4ccc3a9bd3"],["/categories/Educational/python/Web-crawlers/index.html","71ecc0d60af4e8b27fa9667707d935e3"],["/categories/Educational/python/index.html","3e5d8077de9b21b42ac16c8606c5177c"],["/categories/Educational/shoka-theme/index.html","a8087bbc1f65041a9546071861bba40c"],["/categories/Healthy-Living/index.html","1a1e16e4c7e918851b8e4142ab7a3afe"],["/categories/Interests/index.html","03bfed025bd23629b886d6370766133a"],["/categories/Social/index.html","f77388422d8917ae6c730efd782f346b"],["/categories/Work/index.html","1cdba722971160153beddec05c544bc1"],["/categories/index.html","035ca25acc74f15f50b232ae582a940f"],["/collection/index.html","fd734faa185444086d3e84f116629edd"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","8af17a165d1e019dae5317eea9cef3b1"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","d71e20abe1a267b824786f507249e997"],["/page/3/index.html","96a8084c09d01730ae86296e087bf2f5"],["/resources/index.html","54a3133314848bdedb8dc9b4fd1b6ca6"],["/sw-register.js","729de90d000aeca9597256fb9fe192e5"],["/tags/Hexo/index.html","192f51d72df611c0b4911b399ec1ea37"],["/tags/Markdown/index.html","2ad64052b19b3ed242a32681d8e37899"],["/tags/Python/index.html","59dfd9c7d78caf324e22d98b5e4ca808"],["/tags/index.html","97a078b7c3b245218d31da13a69102d8"],["/tags/shoka/index.html","ffbf517220d3b75d3f2b5f78609211ba"],["/tags/微信小程序/index.html","d96276d1de63ded3f13c45fcd059a4ae"],["/tags/数据分析/index.html","a5c12a13ec058001874a9c3f3ad64616"],["/tags/期末复习/index.html","1edaad952b555b8ecb2c6cb95bc1c9c4"]];
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

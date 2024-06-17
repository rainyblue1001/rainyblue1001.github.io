/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","5ef01783a66da90d059e3a0e973d04dc"],["/2024/05/20/Educational/python/Data-analysis/Anaconda的安装/index.html","9f61c8355409c036dbded85848519c0f"],["/2024/05/25/Healthy-Living/健康生活/index.html","7e7c56fc16d35b21260d65dab2da7cb5"],["/2024/05/25/Interests/兴趣爱好/index.html","c16da90053931264b89ff79f64a8eb60"],["/2024/05/25/Social/社会记录/index.html","7b8cfc84cb7730a4200663d88d541f7a"],["/2024/05/25/Work/工作/index.html","71443215a4529f9b6c9947496dd61d27"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","38d79cff938e31b1c490da4b054b788c"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","beb94232597e5c850e2fdc0efd48bb82"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","922275f145b94e508f691c5b1952ee55"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","a73a511f0a7ef88f54e161d6e728835c"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","f21062b9a0514f90c3bf11d363eff874"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","b0a4bc76aacbb909757e52cc96c712cf"],["/2024/06/06/Educational/python/Data-analysis/数据清洗/index.html","fffc154c84ad8aebbd7c0da711af8485"],["/2024/06/08/Educational/WeChat/WX_review/index.html","c6564d9ad8c321d92f179b8ef464edc9"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","d026812e9f25af0b6a3a07fc622a7c9e"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","397d919497084d999ebca1c75c16c6ba"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","0071425dbfb6d2cb84c4d616768e0d53"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","0afed6f649b143c5121002182761edd4"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","268a9c9ad7952b6cc8a4ecbc4f6811af"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","e2a619c54c1de935120ab32a45b72b7e"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review/index.html","8b9de28e776170f780aba1438384d6f3"],["/404.html","70cbd87f7db09047e7cfffd048453613"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","dbbbdd2331cd3900dd0fa29012f7ea3b"],["/archives/2020/08/index.html","8e8df4b80001ea690bf3bba510433d94"],["/archives/2020/index.html","634461f4564d6d163c65bf37b5d28efd"],["/archives/2024/05/index.html","aafc829a743f960c00f8c8aecf5bbb1b"],["/archives/2024/06/index.html","3f0a1bccb8fd16bbb4e50dfc5b1f4e0f"],["/archives/2024/06/page/2/index.html","d8cdb6b77af2ca4c1550b45575da3465"],["/archives/2024/index.html","6d43d6b6c97e829a4b701e7b5e356378"],["/archives/2024/page/2/index.html","bd2f5b0210f864ef929b1e170608c1a5"],["/archives/index.html","0042dabaaa590989f44ba87e8b8de5d2"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","556fda92554e0d7f4b5d14883df81d5a"],["/categories/Daily-Life/photos/index.html","7f22fc0909917a91b7ecd2cd2b69b4c8"],["/categories/Educational/Software/index.html","d70ab14b6ee8efeaf34d14718bed4354"],["/categories/Educational/WeChat/index.html","41797019661466b5fe0a27f72b9802f4"],["/categories/Educational/index.html","df93cd4b2c6cba465ccb6105c65e2c56"],["/categories/Educational/page/2/index.html","b6e2b676e3ee141d1ce1fb1d830509d9"],["/categories/Educational/python/Data-analysis/index.html","dcc5d8778f41bfd190a9d79da69d424b"],["/categories/Educational/python/Web-crawlers/index.html","75b9071ea81d89612775d3aaa86e0956"],["/categories/Educational/python/index.html","27948e0dba0c4bdd9ad125ad9189fe34"],["/categories/Educational/shoka-theme/index.html","0fd3167c3e856ef9a4a0ac87f2107865"],["/categories/Healthy-Living/index.html","fb35c2e2741432a89b18470a6e6b9b7a"],["/categories/Interests/index.html","72ff7b701c484bc159ee6b980bcc581d"],["/categories/Social/index.html","c91b5e15df11ae139c57af7ebfb25b7e"],["/categories/Work/index.html","21f3a3134e8f7cfbbb01b6af4e6cfb99"],["/categories/index.html","03e2be6398c19b0ef25eee832dbbdfa6"],["/collection/index.html","65ab0d0ee3893939fe87b2ee77854475"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","b51fb0de010417761899fb632c0f4b79"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","2de6fbdbe3dec43e88de7beb63dfd855"],["/resources/index.html","7fa032e35d2975aef391c33059642900"],["/sw-register.js","45872927f7ad2470875f9d5660eb3a0a"],["/tags/Hexo/index.html","7e0739634ebf0d9bf037115fb7c66549"],["/tags/Markdown/index.html","3281431e48411d511177e3c5552081a7"],["/tags/Python/index.html","312870da3b38ce9b16f44df9905c47a4"],["/tags/index.html","b3e2dd06215651e44c3ebe98b70c44ae"],["/tags/shoka/index.html","3e4431c14b29baef8cb20572c7eb09c8"],["/tags/微信小程序/index.html","0bc07a55c3e2d0c05a1df96caf9e2609"],["/tags/数据分析/index.html","d93d6df87511f7241d693045c7e013ea"],["/tags/期末复习/index.html","8607a1280c4db5c97a3835d38285b284"]];
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

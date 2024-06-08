/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","6bec11a424e954002504b6bdb00f7642"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","8844ae7eb71b0d436b44973ba4a465e4"],["/2024/05/25/Healthy-Living/健康生活/index.html","f5c0604a2027fdd0c38dd9e7ceb9b91d"],["/2024/05/25/Interests/兴趣爱好/index.html","b9a9adcd39794dbcd6fc3445d75cdb3c"],["/2024/05/25/Social/社会记录/index.html","1bffdb3ccbf58319e4399e4b905a8baa"],["/2024/05/25/Work/工作/index.html","54de1bd537afc5dc8dec6f761152cbff"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","1ebf2065f6601dd44a35039d152a0a39"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","9a8ca9652a3d4c2c0d9eb82281cff620"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","b103c230b0f37aa3e818eab101147c49"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","903ca0c34bb076eb006b882e2a78c3f7"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","815ec82fdf62471844f565dc0fd1b415"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","7d1d5add8b4bc1c25c5b8b9744a6372f"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","df4cf8812fc51e33fba4fcf322d992e2"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","c500cd70e00ba6acb9dbcb72d9ac61a4"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","de67aebca51c0f92bab3c80e9c811c0c"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","71ad24109723b606b65e7289437a6077"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","a0b1a1b4a407b23aa944a2e6b5193e39"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","1d26690eae57cede3bc116a782ee4873"],["/404.html","e7e867add1b8bc296b82a7846c81845f"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","47833c005b5356e68f4e7d17a67853a2"],["/archives/2020/08/index.html","05595975d1b687d4475bcf5b9f305475"],["/archives/2020/index.html","79124a3ff76f761d73c48894271a8106"],["/archives/2024/05/index.html","75516f2268aeb3c58ffe5dc437089f33"],["/archives/2024/06/index.html","0ed7cea3ab44c5fd00b8ac780ac69a57"],["/archives/2024/index.html","6301be7bb904be10b85f8433218b555e"],["/archives/2024/page/2/index.html","2e85917f9cd16464162d397957e55172"],["/archives/index.html","f7336f0a0ae04b4e6afaf76b45216032"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","b59641fe332190fcb8c0b9fe0208823b"],["/categories/Daily-Life/photos/index.html","b44f0f559a59c4d82ca76924b86e49b2"],["/categories/Educational/index.html","9fc2407e0589a611d1787a4cd24a1d56"],["/categories/Educational/page/2/index.html","9b690d0ce74a1c89a3c477a57dfbeb99"],["/categories/Educational/python/Data-cleansing/index.html","9ce3adcc17e6ac57f16e2e56eb78b890"],["/categories/Educational/python/Web-crawlers/index.html","8a6deceefeffeabe7aefb48736bf7773"],["/categories/Educational/python/index.html","4a8ac4c8e7d17b833b5e8c0e336f64fe"],["/categories/Educational/ruanjian/index.html","d3820323145a19cd7f206fe8cdb8d8c8"],["/categories/Educational/shoka-theme/index.html","ad07d68c8bbc590114646978e66fc33a"],["/categories/Educational/weixin/index.html","af4a1f523f4fae0a9b12960b8e49c0b4"],["/categories/Healthy-Living/index.html","eb9cfd2dd4060eb8909bb88dc18aa232"],["/categories/Interests/index.html","95dd47b95de1da4e27ea570b8de39be4"],["/categories/Social/index.html","d8ceb2872e568aa98ee94243835f7962"],["/categories/Work/index.html","da0d1b1afc09d34f634dd50361b244e9"],["/categories/index.html","25df889f21190a1402e7e4901f468d85"],["/collection/index.html","3b40f228b121f217fce3d1f231464d68"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","501379196aa3d041969a5c1ac556c317"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","bfd4275413ed46bd09862fd99d64e43e"],["/resources/index.html","881adcd9dae2383da217d2bc6d6ce11c"],["/sw-register.js","52a408a5569f7d8aa65b91af379ecbf9"],["/tags/Hexo/index.html","f3b53ef8b965629579a9b9f33a1894a9"],["/tags/Markdown/index.html","c22cfba2e3646aa21fc899180000948f"],["/tags/Python/index.html","bd1cc396aaa27919f6a83523ba4991f6"],["/tags/index.html","3fe02d3cc4191b147c0793ebe537e6ab"],["/tags/shoka/index.html","9f47cc9bf4143e5d114021fff054df87"],["/tags/微信小程序/index.html","1a747e0a8f83e6f2db1d7dcd5c1344ff"]];
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

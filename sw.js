/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","7d83d9aec6c541c4a6f56d43eebc77ae"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","71d57f3ccc70cff96fe12e9c6740ae29"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","ad5fcae0b8b10d21fdb804c9ef86da52"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","21624c1f9b708f088169df171af9fddd"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","0df17e1e18decc5ad2e5c528ab6add5d"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","26123f16d68643032c3174cabe6b874c"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","93bcc48e138ae560fabd115907eb3440"],["/2024/05/25/Healthy-Living/健康生活/index.html","a35598a97d6aef66f6310202356bf920"],["/2024/05/25/Interests/兴趣爱好/index.html","26b244c64dd6612113c2b1dd4b147006"],["/2024/05/25/Social/社会记录/index.html","ab520d71a3ff9d016da2468efbf09e32"],["/2024/05/25/Work/工作/index.html","ab5bc5b31708ecfa0699f6cd9e85621e"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","1dce5bf2a478fc998eff26f6d31ba77e"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","ddeee56031dd8eb09c95bf28b19b981d"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","0a1a9f34a0fa9614381a3c0dc1d4abce"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","49c67e67137cb1896b8930a4a4ad664e"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","99e87cd26e13a38c0a1f8f5cf0c71a7c"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","f59c7daee95b722d637104da82b86888"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","d96742592398558940873ba2917054e2"],["/404.html","a78e29eafa06fd8c1db3cd2fbf250a84"],["/Daily-Life/photos/cover.jpg","74fdf810bb2943a1577264b1b5861878"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","7962b2b6c96d026cdcaedb84bac272cf"],["/archives/2020/08/index.html","fa127eedc93623bbd9e8dbce9e9d577e"],["/archives/2020/index.html","ae0a7aabce6f2c126b180a1a9ca0f690"],["/archives/2024/05/index.html","912e1860f83317a4f162e70dccded766"],["/archives/2024/06/index.html","d0ff85fcdac2bd104b6e1957d96e6cde"],["/archives/2024/index.html","d00e2c0cc8f29fc21f8ae805b9105563"],["/archives/2024/page/2/index.html","823da2663ae294cfba1214921a81db61"],["/archives/index.html","eaa1a8a5cb2b60f262a5d6568da55a4a"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","a83255de23e8321824e576d2dc5b62cb"],["/categories/Daily-Life/photos/index.html","a988e8ec175b2ee45be5dbcefc24df19"],["/categories/Educational/index.html","98abf87ba30e257a7247c77ad60187de"],["/categories/Educational/page/2/index.html","5b40530128b56bb938a8d991a1b90535"],["/categories/Educational/python/Data-cleansing/index.html","e90e12d233f936a7213e04227f0f0496"],["/categories/Educational/python/Web-crawlers/index.html","d911626e30a057fb655a34856d106537"],["/categories/Educational/python/index.html","afebdb093d36e5732eb84f825ffb3191"],["/categories/Educational/ruanjian/index.html","eec4f38f3fc9b6d8a6f1451753be6914"],["/categories/Educational/shoka-theme/index.html","80a9d812b737c97d5c9fd8889519f99a"],["/categories/Educational/weixin/index.html","92b491431584e2f155720501333361f4"],["/categories/Healthy-Living/index.html","cef9c4a7669e76d2120d6bac6d2d394a"],["/categories/Interests/index.html","aa6be48f7745cdaf2637a6038ec8377f"],["/categories/Social/index.html","aada9b0e2d09395f7f2275b7cd660f2c"],["/categories/Work/index.html","1c307f8b843c842d30e7ba7e93b75678"],["/categories/index.html","76ca4c2dee14fa708a452bc58c945f3f"],["/collection/index.html","87df56c4b404a5d2daa476689913a5d7"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","eef248bfe199352007b13d974656ed94"],["/js/app.js","b3c0ff4cada84f6f3980b2e923dc037a"],["/page/2/index.html","5b7b408b6054220c831fbc0603c27c12"],["/resources/index.html","a1f96e40851237644e429f74add1973a"],["/sw-register.js","cde60ed05ddb73c5b8b48eb5c32955ce"],["/tags/Hexo/index.html","eecc19826a7cf2fd791dafe3286b4e2a"],["/tags/Markdown/index.html","dad739048b6b7f1e0eb154d0e07da49f"],["/tags/Python/index.html","c26b75a02f1e26924f25f3db195cdeb1"],["/tags/index.html","cd1906bbe6383a9778b8e7e0fd6a8447"],["/tags/shoka/index.html","9b8a8fb150a0058ead486a109c9b4878"],["/tags/微信小程序/index.html","4880a6090d94912a5422e30f99caff1c"]];
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

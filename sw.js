/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/04/13/Daily-Life/photos/images/index.html","1d6218eb8acdbefc0185cf2a65813d28"],["/2024/04/16/Educational/python/Anaconda/index.html","6c32ccda131c1827a464ddc1994a49d8"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","901377ca9e2f13796c06ab299946055b"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","e85fc1fd089df84cc49979e606578e0a"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","aef1adec6ff8d0761ddfdba927b35ba2"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","f671f1c74641d39407d407aeec54e75f"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","c4e90e33aca2fcc87c2cfb3c00eafd22"],["/2024/05/25/Healthy-Living/健康生活/index.html","79e66cc9e72a6102966b5273b8984a7c"],["/2024/05/25/Interests/兴趣爱好/index.html","4e25c0dee8d85963120c5ae00af2e7df"],["/2024/05/25/Social/社会记录/index.html","a68f447c2c90488dd9b2c72af4b03ccb"],["/2024/05/25/Work/工作/index.html","b7180781ec601974de92cb02880c4dc3"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","58a955d2d86e4ac62a9b00699ec90fed"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","a709634d4a9c10c74ab1bf878f0be64f"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","b71231660dcc53fb6cd87f2274a39015"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review2/index.html","00189fa851249215bea609d7e37e1597"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review3/index.html","03c4dec4aca43f305015ca5f0bd9367f"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review4/index.html","83dc7344d958d6f6c19027a4f0de87e9"],["/2024/06/19/Educational/WeChat/WX_review/index.html","973d992b58a78207eeccaeddca73ac52"],["/2024/06/19/Educational/WeChat/WeChat_Program1/index.html","338246ded9939b3951af184a2aeed9de"],["/2024/06/19/Educational/WeChat/WeChat_Program2/index.html","1da7a06c7939b602fba813ab7665a394"],["/2024/06/19/Educational/WeChat/WeChat_Program3/index.html","795fced5c58794c9bf3dcc18b8f01a78"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","48e6a0522591d33d15766ce0a6a0411c"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","c25e38e244bffec781d613422f1d27c2"],["/2024/06/20/Educational/Software/2023-Software-project-review/index.html","7ddda1ea60d6d82000830ecda39d9839"],["/2024/06/20/Educational/WeChat/WX_Exercises/index.html","a4f8e3f47ac541215424f5857bc083c0"],["/2024/06/21/Educational/Software/software-project-review/index.html","7e33b36d0bb9ba4aa64ea8fd30295f48"],["/2024/06/22/Educational/python/Data-analysis/Data_analysis_review/index.html","c5f1c83906a83ae3b821f2b18f7e5a47"],["/2024/06/23/Educational/WeChat/WX-Questions1/index.html","6288e5bd84e811e469b6a7ab181aec63"],["/2024/06/23/Educational/WeChat/WX-Questions2/index.html","0c441839d24b25725977be66f315c81f"],["/2024/06/23/Educational/WeChat/WX-Questions3/index.html","2ca8db6f2f369902716301a431bf5a44"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions1/index.html","ba5e7ac74f24c0c6c345d711ec4d219d"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions2/index.html","a6bfe1978348ebfc9e06dc141e7a10e7"],["/404.html","5e9a24cf1df49b404734e4794408ff7e"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","cc1268a4034b583591719c850db3119d"],["/archives/2024/04/index.html","f018ee85e29f4ecb13001516361289f9"],["/archives/2024/05/index.html","767bd8b1e1c2b1ceb06fe05c9ee3ce2d"],["/archives/2024/05/page/2/index.html","52fe9cfbd407161220865583683c14b1"],["/archives/2024/06/index.html","cc7db907b99e8afdee7a537fd5615620"],["/archives/2024/06/page/2/index.html","2dc45bd72af106d4e0a5afe458d8cbfa"],["/archives/2024/index.html","2fb49d9a6a084ac789f36d674d39642c"],["/archives/2024/page/2/index.html","7217ab2e8f5150969c43317a3a4622db"],["/archives/2024/page/3/index.html","4aab21656713b7e25ab177b34c65f2e5"],["/archives/2024/page/4/index.html","cdfde8f8c8fffcd9ab2b3670626cd1d7"],["/archives/index.html","ebd74fd91c9007a6df595530466bb0a9"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","f73f51364de00b3d8ed8c194786b2518"],["/categories/Daily-Life/photos/index.html","64c2681ce7e3dacbe901a54de752735b"],["/categories/Educational/Software/index.html","b0478e1d324b82fdc9de8e3edf1bf20c"],["/categories/Educational/WeChat/index.html","b437164929b5185849606ef24755ec3a"],["/categories/Educational/index.html","db058928c1dc337d91dbc29999ace079"],["/categories/Educational/page/2/index.html","e86dcebad8a1f00b5a62b209fb5b9855"],["/categories/Educational/page/3/index.html","f18526a057a093fae2fc30f026c7d661"],["/categories/Educational/python/Data-analysis/index.html","3290ad74c45c2ba3a49cc6f9076c3658"],["/categories/Educational/python/Web-crawlers/index.html","d5e28434f816aa9d9c18119e39ea6eda"],["/categories/Educational/python/index.html","4b19e60fdc24b5f6ec7aea3d2445ec14"],["/categories/Educational/shoka-theme/index.html","ba6c34cdc3bf6678a2de22cebdb28dc4"],["/categories/Healthy-Living/index.html","9164d5d2e8291f5f58387a20d3693521"],["/categories/Interests/index.html","684960c5030c0b1e0e34e1b6c84562ef"],["/categories/Social/index.html","3d08d97fd51334891065480d43237edf"],["/categories/Work/index.html","ba1c02a9e479cce90f383af047d22f9c"],["/categories/index.html","145f271e3f072c8598b20d2472746cfd"],["/collection/index.html","d948d37bf4f919f85fa3c733d3cfa9d6"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","f6fe2df128df0bd49d137174ffa8223b"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","172ded6b9157b045ae9d6112c0b6243a"],["/page/3/index.html","51a1e66781133514a94b209e66513d79"],["/resources/index.html","64c96851adc13db229046cff69326ce5"],["/sw-register.js","8ac3f30003d4e5a3a9b38d9d6beea141"],["/tags/Hexo/index.html","8f72d6c9eab2740671622bdff0099b36"],["/tags/Markdown/index.html","d0e5a275fc55c6d9aad6a36326275c4a"],["/tags/Python/index.html","deddf1922165b4724bc3a39f7630fca2"],["/tags/index.html","44fbefc632c09a2daf0598236d340418"],["/tags/shoka/index.html","696d72ea36cdcc51b6556060194100f0"],["/tags/微信小程序/index.html","519e5b6d2d8787a775624204f47b871e"],["/tags/数据分析/index.html","6d4de3924fb403f2424b2e76c264b0ec"],["/tags/期末复习/index.html","c3d9cd0f5dbba6c83b28efd844032e89"],["/tags/期末复习/page/2/index.html","f748840ddfd70c87c4692c2f2174bad9"]];
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

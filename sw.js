/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/04/02/Work/civil-service/civil-service-list-moban/index.html","b08f14957ab49959ba2763b1f4139749"],["/2024/04/13/Daily-Life/photos/images/index.html","44b0a61bde542a8fb22957f39d8e375c"],["/2024/04/16/Educational/python/Anaconda/index.html","081ae09188d38f10cb46cedaca323990"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","fd70f7839dd981d7c5470cb94d2e7853"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","614deafb8468e87399ecdb09719b6950"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","c9e8978ebd6ac3295c166365a5aba4fb"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","e3cfc595289ef9473ea22e7596be5b26"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","d435b708defaee760c897d7f68722bc4"],["/2024/05/25/Healthy-Living/健康生活/index.html","915eb58f5a6f3096d1d9c80aa0211627"],["/2024/05/25/Interests/兴趣爱好/index.html","23c86e22731248d04b76ce25a2e3f777"],["/2024/05/25/Social/社会记录/index.html","d9e261a93eb2167a08ce8e843e35a95a"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","7d66fa3d50aeed6243cbdf260cb1a5ce"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","3f9eefde7ade00970720c02a7b522ca1"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","959f84a4c102f03d68d73ea3b9f4f4ec"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review2/index.html","77d1b552839a007ef94c16110e9fa9b3"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review3/index.html","458441f788a0cc4e8a5f77dba9c79f6f"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review4/index.html","5a59f85ec1d4e51b901ccedad11d5c57"],["/2024/06/19/Educational/WeChat/WX_review/index.html","a8ffebdff152c188b3d4f9e729b201df"],["/2024/06/19/Educational/WeChat/WeChat_Program1/index.html","b4735d5a7e2f5bf73b21bdc7460fd3ae"],["/2024/06/19/Educational/WeChat/WeChat_Program2/index.html","96a9eee96a0a95759218b2ef34024530"],["/2024/06/19/Educational/WeChat/WeChat_Program3/index.html","b69ef3979c096a99eb4d475016f60854"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","869c0b8bf659b57179eb981488584001"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","728f8efc990003bfb3d6774115dbe4ae"],["/2024/06/20/Educational/Software/2023-Software-project-review/index.html","22c328b7cbf814b6852a3cf3f691b78a"],["/2024/06/20/Educational/WeChat/WX_Exercises/index.html","e18b16b3a9e63b136cdcace721bda3b4"],["/2024/06/21/Educational/Software/software-project-review/index.html","d2002a0e839a077c808809f52ddbae36"],["/2024/06/22/Educational/python/Data-analysis/Data_analysis_review/index.html","beed55daef4bcffb36cf1a76f651d075"],["/2024/06/23/Educational/WeChat/WX-Questions1/index.html","9ba07b436c02f8b7d7742c0e889a3494"],["/2024/06/23/Educational/WeChat/WX-Questions2/index.html","343939482679664bc3e44a8cb05bf6e6"],["/2024/06/23/Educational/WeChat/WX-Questions3/index.html","be7b42f36a4e50fc09f844a61b016c62"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions1/index.html","eb143366e59d0b51b0b7438b8559957c"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions2/index.html","de46de125d8400d52233226a49552a82"],["/2024/06/24/Educational/python/Data-analysis/Data-code/index.html","21cd177556707a3f5d6dca9662e74a7c"],["/2024/07/02/Work/civil-service/civil-service-list/index.html","ca8a120fd05efb14d3ff90f6788f6d6b"],["/2024/07/04/Work/civil-service/Judgmental-reasoning/index.html","2f9cc50538083acceb405615a968b0e7"],["/404.html","40444702d36000b5baf76234bd7eb324"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Work/civil-service/cover.jpg","fedc746d06d67409b7d6769ce99d0d24"],["/about/index.html","9e37c84f07cd8ef97bddef152594763d"],["/archives/2024/04/index.html","b1b50b43ab67a9d41ece00dd895f74b1"],["/archives/2024/05/index.html","0d73cad04c3c91334ced63c81152d940"],["/archives/2024/06/index.html","c0536b963200e3c813f095acfd67e92c"],["/archives/2024/06/page/2/index.html","79d2d990928f121c4a3a121c6e6acc18"],["/archives/2024/07/index.html","8dd526429561b76887e599591d6a0b37"],["/archives/2024/index.html","03b918fe3c342954fc56dc2556f7be31"],["/archives/2024/page/2/index.html","bc03f074bea2df3480a3c2b3317e38d1"],["/archives/2024/page/3/index.html","dc69f44dc7da987cd084a25d3b7bc1dc"],["/archives/2024/page/4/index.html","706456cb1a7dfc7f4c2cfb0de49f02c1"],["/archives/index.html","5195164368011abc8d5c9a59280a38e0"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","407b23fb207a53a5fae1e88e297b6d1e"],["/categories/Daily-Life/photos/index.html","53f8b86a83187d51dafc91c0afb6cda5"],["/categories/Educational/Software/index.html","bb5359745dadeca9733db0897ae5567b"],["/categories/Educational/WeChat/index.html","6b0f0a911516379a0751de429e0e7f1c"],["/categories/Educational/index.html","b6517d07d5169844f8466739f278d179"],["/categories/Educational/page/2/index.html","2d3ca49746dcfd58109dfed8777b6454"],["/categories/Educational/page/3/index.html","36dc03e97ef87bae8b26b96c3d14898e"],["/categories/Educational/python/Data-analysis/index.html","42319dc7234083756fcd8ee026acc79f"],["/categories/Educational/python/Web-crawlers/index.html","a28f9632436109ca6771842b9f69e484"],["/categories/Educational/python/index.html","741692cecc1171e74e5f5af06fa744df"],["/categories/Educational/shoka-theme/index.html","9c529f398ee0eb1f18868e72d22d45b1"],["/categories/Healthy-Living/index.html","23e31b19d3bea7d37d9946c3b4c253fd"],["/categories/Interests/index.html","744114ee01c96342be9edf1ce8fc2742"],["/categories/Social/index.html","4eb203f97c79625e8f7cc36ca1ddcfed"],["/categories/Work/civil-service/index.html","57cc7462ee62bdcfba3b6557594b1d7f"],["/categories/Work/index.html","c704299ce5e12fd1528380ccad0ef3c3"],["/categories/index.html","eaf71b5990baca41b98a6cf90dfdc482"],["/collection/index.html","a130b8b2a8108e1b35ac6845fbad4c81"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","e0d9c9903b52a505397565d7b565e981"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","3d5072fca6d7ce14abfdb6f7cdcf2ba7"],["/page/3/index.html","76c21e36db40adc3adf415ccaa2b6a2e"],["/page/4/index.html","21e8b1b73e57ba0c40f5dd2bb233507e"],["/resources/index.html","02200ad51f5aa86e384fe8841b5da153"],["/sw-register.js","3a61e8497c6604be8719b8a781ddfd6e"],["/tags/Hexo/index.html","b734bc7213229bc4a60222b1a295d1fa"],["/tags/Markdown/index.html","8a78bfaa3847b1f9cb052381c9d94d29"],["/tags/Python/index.html","b469b870aed5cac7c728281465ddfd98"],["/tags/index.html","219443896e36d0099a31b47fe701cf7b"],["/tags/shoka/index.html","e23f417a7b1a469f74acc2d3aa30c74f"],["/tags/公考/index.html","8c53825c6c5cff8dd63aef43c85cd06d"],["/tags/微信小程序/index.html","d5f9524ebc2f132db88f099bce75bb82"],["/tags/数据分析/index.html","75444a69b003b5bba9bf2d5f0fecb99e"],["/tags/期末复习/index.html","c4b99738b4bf8ab57b55e337745297ab"],["/tags/期末复习/page/2/index.html","e3e2d4ba42e885cdc341c762ae78e3be"]];
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

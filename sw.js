/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/04/02/Work/civil-service/civil-service-list-moban/index.html","efd070dc7018360e9f6cebefbc1439e7"],["/2024/04/13/Daily-Life/photos/images/index.html","85a168756c8dc624242dd044c672fb7c"],["/2024/04/16/Educational/python/Anaconda/index.html","11a2b92069b56ac976d572982f568be9"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","ccbb92c688b026be0d58be71673bdfbc"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","c18a45bc1fc5689612cec7bb9b362033"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","6ac2b589d6ce9e1092c2074ada630364"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","a59747a82f4e59790033325471f9cf97"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","ef1e213e5a62b3aaf6a916f0b9c0bf7d"],["/2024/05/25/Healthy-Living/健康生活/index.html","ef86e2cd7705d8f3202e3870368ce450"],["/2024/05/25/Interests/兴趣爱好/index.html","d8ab989c5af1615791b6b561c324e51d"],["/2024/05/25/Social/社会记录/index.html","ef3c01e57ae96621a9b612a52a11f371"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","0ea7baf779f5ba5fbce507df126e8e67"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","02cbbb59ca8bcdc4f5fd3ba594a38ebe"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","ce2cf963c07ad4a00aaee15cd122ed59"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review2/index.html","7d80e46bd0a876122d4066cef9549f69"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review3/index.html","0130d8aa7e9fc06e605f216e515b0238"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review4/index.html","1cb0c04c01da2cdcced2171f655d6d3c"],["/2024/06/19/Educational/WeChat/WX_review/index.html","002336ac6af7d9b0bdea71f4f8ece7d7"],["/2024/06/19/Educational/WeChat/WeChat_Program1/index.html","0dea42a401f2da00255e86a7cd3dd780"],["/2024/06/19/Educational/WeChat/WeChat_Program2/index.html","4b217408f0df27ad335571d673fe7890"],["/2024/06/19/Educational/WeChat/WeChat_Program3/index.html","34d690e775cb529e47507006e35ade52"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","f3ac738dbfc70f3bf9b871058b55dd17"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","0acc44f67392d7da826e280e2d93a169"],["/2024/06/20/Educational/Software/2023-Software-project-review/index.html","37243241b2471feb3ba70309398263e9"],["/2024/06/20/Educational/WeChat/WX_Exercises/index.html","6e10f50390ffe23765859c106df6b828"],["/2024/06/21/Educational/Software/software-project-review/index.html","8af6b399a68488f429e948af5b25784d"],["/2024/06/22/Educational/python/Data-analysis/Data_analysis_review/index.html","71cd9a77437d05d3303ea678afea837b"],["/2024/06/23/Educational/WeChat/WX-Questions1/index.html","65829efb0c47b830a7c45b5243283839"],["/2024/06/23/Educational/WeChat/WX-Questions2/index.html","8c1162d46a8042dfabbe0a746948dcee"],["/2024/06/23/Educational/WeChat/WX-Questions3/index.html","1c4f7770aca8dd94f7aa9e2448ac3a55"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions1/index.html","4bc84c89d59c20a4ce9d48e07b4fea85"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions2/index.html","05b86539bd7c4bf1dae90544e94c2f2a"],["/2024/06/24/Educational/python/Data-analysis/Data-code/index.html","c2551b65bd948d16613d19a2212c9fb4"],["/2024/07/02/Work/civil-service/civil-service-list/index.html","18e30515cec47aedf4799369e4dbf028"],["/2024/07/04/Work/civil-service/Judgmental-reasoning/index.html","7df4fb82d4f5cb5df3f5b36b2255936f"],["/404.html","0cb06a0250881415e839a26ef11edc21"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Work/civil-service/cover.jpg","fedc746d06d67409b7d6769ce99d0d24"],["/about/index.html","7333f6ad5eb39c99f4bd5e02e408bbdb"],["/archives/2024/04/index.html","eeac7641cfc7b1f695c8a3aba4d4f877"],["/archives/2024/05/index.html","0ca4cac266cd517f4aa58948b75024ce"],["/archives/2024/06/index.html","34506fe669b96b1f9eb3fe4c982bdbb5"],["/archives/2024/06/page/2/index.html","4df8beb23f7d7f4610862a717c5d4029"],["/archives/2024/07/index.html","cc7f9f3488aa0f1330a9fd7184bdbfd7"],["/archives/2024/index.html","8eb8bc9817b77449492a4624aaae75a7"],["/archives/2024/page/2/index.html","8479e6e84422d3577a93fc901966feac"],["/archives/2024/page/3/index.html","454240913021cc83a046796ef3e6dc0d"],["/archives/2024/page/4/index.html","c31bde7e842e09887779cc25cff43b5d"],["/archives/index.html","dd625e128607ba4d3c914a144a06af03"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","a847404d6fcff9fb34e2963fd6b5beb3"],["/categories/Daily-Life/photos/index.html","3380ac29084db1f7853006b99cc38d1f"],["/categories/Educational/Software/index.html","3f2f5fae6b782172b7c9829a3cf46349"],["/categories/Educational/WeChat/index.html","38736fa54b711d4767796e831719a08b"],["/categories/Educational/index.html","27fd56b5aaff9c06c91bb83c7b980a8d"],["/categories/Educational/page/2/index.html","df940967e44ddb0c1f9210551d2148bd"],["/categories/Educational/page/3/index.html","b6d2c5f5bc9f6f700da1db54dbfe03cd"],["/categories/Educational/python/Data-analysis/index.html","d4a3aee6f21dfd295c39123a1146f0d0"],["/categories/Educational/python/Web-crawlers/index.html","10077ed6ca8ecff24ed7f722bbe66d44"],["/categories/Educational/python/index.html","d7db1ab0f0a6c68504c25da47b028ac8"],["/categories/Educational/shoka-theme/index.html","56d6a7d5e146c284cd17b78c7b3c1497"],["/categories/Healthy-Living/index.html","343bf92fcba41a537ac6b0404818d30f"],["/categories/Interests/index.html","b581f4cd68f9ee25b44c1da54f7b87ea"],["/categories/Social/index.html","794dc9868c086ef99baaeb877fbba034"],["/categories/Work/civil-service/index.html","bf96a6583a507a0a38d494f704d12c62"],["/categories/Work/index.html","935d78b9a640c75268165bb30edc8bf1"],["/categories/index.html","b9a4abd1bd2fbed6a7a635e49d4f4a82"],["/collection/index.html","c9736f78e5e212bea39b75f9a43d3c88"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","b2d1390274650cef00c1b65e131f1c10"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","2ee1844c25ac4627b8c85fb4dd247849"],["/page/3/index.html","0230bad3903c1d9433dd87a2c86e4bf5"],["/page/4/index.html","693f5199b9f4ba469361b3dfac87cba7"],["/resources/index.html","ac725c714be4232badb8fdaed1c28321"],["/sw-register.js","aad305f8cbfe5b08300a9e5be04469c9"],["/tags/Hexo/index.html","6fca78524ec2f7f147d3fdaf0be2d71b"],["/tags/Markdown/index.html","b501c1fe3ad076c89f646ece8b54e430"],["/tags/Python/index.html","dee4f84f21ca614fad9dd561378fdcb6"],["/tags/index.html","bebfd4ac3f6f27d2d47e7b173f11d157"],["/tags/shoka/index.html","82d6769baf2c0d3c793ae002b2d5d4d6"],["/tags/公考/index.html","8bc7eb553c17917ef7b59f6c45c9b766"],["/tags/微信小程序/index.html","7ef1ba3453748952037dfe760c766df9"],["/tags/数据分析/index.html","2829970405394855b0ad63c43f4cb434"],["/tags/期末复习/index.html","ac1d958c1b79f9895f06e09b65994be5"],["/tags/期末复习/page/2/index.html","faf8497fe84de597f99a135ad687ff7a"]];
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

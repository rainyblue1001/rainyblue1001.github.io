/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","de1d172fd73f969bf40d45bd0b49ccdd"],["/2024/05/20/Educational/python/Data-analysis/Anaconda/index.html","c523d6c6143c895157a4e11ffef9e7d4"],["/2024/05/25/Healthy-Living/健康生活/index.html","aed602502245210008736717323271ec"],["/2024/05/25/Interests/兴趣爱好/index.html","9050154cbf0182e0e707c26c85806c7f"],["/2024/05/25/Social/社会记录/index.html","aeea4326981a82af837ef707cf6d1562"],["/2024/05/25/Work/工作/index.html","b8a42dfc84285c08941883846da94066"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","d99606b78aa80ef539da1fd5be35e44d"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","60efa71cf8995e032660d8048c2eeee9"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","e81d6c21224444ac5b7af8a1220b037a"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","d5259df63028c78bb3f69a2e74db25c6"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","6f0e9d54ca038d1551b8118e9a8df93b"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","c2559ea345e1b99628dd84d6d4c82105"],["/2024/06/06/Educational/python/Data-analysis/Data_analysis_review/index.html","6cf475a042651f5182654028915e4c7d"],["/2024/06/08/Educational/WeChat/WX_review/index.html","22d5496f5517f1b93648beb4fe6a380b"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","19e699529f1cb68a12d273fb9814f7a3"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","c35a8375c18f55734466b5d360eebdb0"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","fec40d366a071609bee2e6609346e2b6"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","1ce98f0d2330241cd337c74ebf59bde3"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","f1f6f56497fd712d4336faafc4351f24"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","adbf0635e2a1a67759d60ed01a0dca60"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","d9924e4b23ef40420e092de8a6824158"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review2/index.html","f5b3ad248d9a751cf1f153f1776f15a4"],["/404.html","f18bc97ce7363da53bfd502e05a3f061"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","32143a1fb885778a4988672ed389c40e"],["/archives/2020/08/index.html","0a9cb848e8c1617c4b88df16563ab5b7"],["/archives/2020/index.html","e7135047c1790e7fe306b50bde8179f8"],["/archives/2024/05/index.html","996c38e3fc37edd5b24d37848d9ba2e9"],["/archives/2024/06/index.html","b72a45020ee72457933ea8f4a66f1352"],["/archives/2024/06/page/2/index.html","db6909f7c0ccc8929cf38f8baffd0a8c"],["/archives/2024/index.html","02a060e4b6c340b4ac816d1aa17bcea1"],["/archives/2024/page/2/index.html","dd3faf2ac6e3e9c627b9a78ccc7b5cdf"],["/archives/2024/page/3/index.html","6c103b92fa82536741f6d2e94546180b"],["/archives/index.html","17e08553f9a5e10d7706d1330e122864"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","0c2905e8820d0eff362256ef0e6fdecd"],["/categories/Daily-Life/photos/index.html","a1ed012e55644ea7c21c05c67402880b"],["/categories/Educational/Software/index.html","810df1a4b4121f4355e95a9991fb1da7"],["/categories/Educational/WeChat/index.html","b7250af96b098d7b46542fffbf40f94b"],["/categories/Educational/index.html","892527b8a0d3f8e48f0eb1e8dfc06ceb"],["/categories/Educational/page/2/index.html","1b4f08aa2b94316b8ec7f9c8450f1667"],["/categories/Educational/python/Data-analysis/index.html","83e1270a339c6ae5ffb3d9b17271a0f1"],["/categories/Educational/python/Web-crawlers/index.html","9c114cbc32d9049ed6e8fb7c77ebce3c"],["/categories/Educational/python/index.html","567d21f08ef4f440016ea04203a30bfd"],["/categories/Educational/shoka-theme/index.html","5c78c9eceadb7250cdf7270863fe8a03"],["/categories/Healthy-Living/index.html","c8e219194be2ec3a1994ccebcaf3a000"],["/categories/Interests/index.html","8d328dd81e5b12908db005d2fa0e3fe4"],["/categories/Social/index.html","e53062d2e746bba4e541b9158ac622ce"],["/categories/Work/index.html","d19bc25a3041a7ecbb254304a3ef03b8"],["/categories/index.html","984065530c8acc6ded555c008a285511"],["/collection/index.html","ac143d57af6bb1e534034260f954b2cd"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","cd245cc2898d74af4b99052e26b5fa5f"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","1eefcf102e4c1f6bfb3266c5b143e70a"],["/resources/index.html","07f3027ef06189f72b7e10e8832923fc"],["/sw-register.js","95bde20a7649a3991391f1d409756469"],["/tags/Hexo/index.html","c2eae4dcdbf8a17cb484cc3606bedb41"],["/tags/Markdown/index.html","437f2fb3937e07170fe47baab16cbebc"],["/tags/Python/index.html","ba2fbc575ff445db6181370416847ac8"],["/tags/index.html","1bba0f7799a3236be4ef5f2bec4de615"],["/tags/shoka/index.html","d58046a41786a1a93fd5eb533a090aea"],["/tags/微信小程序/index.html","23f67dad028c6a4525ace40f891d888b"],["/tags/数据分析/index.html","fad9f0754caec54272df3c33cbbb3daf"],["/tags/期末复习/index.html","acfd3c2d575dac8f9841e58ee84ed899"]];
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

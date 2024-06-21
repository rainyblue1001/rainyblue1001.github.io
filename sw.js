/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","47afe8801c0122be3c890cf0231175ad"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","bf727cc597f8e74839f939a2fcc1b283"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","194c081a4c530b1504ef455510c9f436"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","41bc1f253fe3f5714386920e938cf841"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","8bcf5c9f839e44d134e686080da3d1bc"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","7f2b5315c0d284f392854bebd161de82"],["/2024/05/25/Healthy-Living/健康生活/index.html","c24b0766914319470c63a9bb5d682c36"],["/2024/05/25/Interests/兴趣爱好/index.html","7b6e1b038d6fc68f89a5a11ef2eb99f3"],["/2024/05/25/Social/社会记录/index.html","ec6050b186eca3da6c168caf17389aad"],["/2024/05/25/Work/工作/index.html","55fc99337f1e77f84948d4cb4353b1f6"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","64708f9e89a9fcbeb6cd325034dbdbd3"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","ac6d5db63777ed1eb5578f4ad0bc357d"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","34e3351ad86959c50a86bba22360c9eb"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","d58923630b077eaa9342f0b5e724183f"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","b0a474a7a0445f9d8b730e808151f1d3"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","29de042ef0cd8e5d90f6effc4de846c3"],["/2024/06/08/Educational/WeChat/WX_review/index.html","aca451257fa116cfc9d51e26213a89a3"],["/2024/06/09/Educational/Software/software-project-review/index.html","71e4f124c97669d203dc30d779f303de"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","516db42547685da23cb5a4c618a32d29"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","cc1d8edae9a45deef3f87e82fc959557"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review2/index.html","c2532647325bc29b64c41f16f0c4ef9a"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review/index.html","c99bed4547197907a9ded292e84c0944"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","5c26634c1dba1b1d7d0f68f48d313a9c"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","4bff6a7912612b3aebec8932cfbf2805"],["/2024/06/21/Educational/python/Data-analysis/Anaconda/index.html","c0b054a1977fd9ffab0bcf8e3436e579"],["/404.html","28758f98c90299e2ab395e233ee06506"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","161d5565f93a891a25e66ea8c6bb4aa4"],["/archives/2020/08/index.html","74c3e6d8e7dd7e2829440a77621bc02b"],["/archives/2020/index.html","650fb283b59f5666a035df7be7059366"],["/archives/2024/05/index.html","987fe47f37993aa7a65db38f24acdca4"],["/archives/2024/05/page/2/index.html","7314ac10db91758ddbd25e79c9867543"],["/archives/2024/06/index.html","31762e920d557d78e6495047a0268959"],["/archives/2024/06/page/2/index.html","e012ae8d52ce4372617a1197d6c0aa28"],["/archives/2024/index.html","d74045e14fc09499a3b3f08b29976354"],["/archives/2024/page/2/index.html","7e114d82f4819a30009a6a7a78ecc3f8"],["/archives/2024/page/3/index.html","2025a874c680d23cfefda5c68cb22b87"],["/archives/index.html","7393a1bdb785616661337733cd3d2e7f"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","20b49fe2dcc8efd3ac2cba2ed47258ed"],["/categories/Daily-Life/photos/index.html","2075e3108076e981b2f93484dc20d251"],["/categories/Educational/Software/index.html","016f3b39a1112e01959a186022835a02"],["/categories/Educational/WeChat/index.html","dec4a3bfed0e1730fc72227d582f9960"],["/categories/Educational/index.html","3284d19ea04b3979a70b97738390b2d9"],["/categories/Educational/page/2/index.html","c90ce5d8807bed38f70a3d27d1c8c5f5"],["/categories/Educational/python/Data-analysis/index.html","cca23a3059398b5fb85cd1a926232202"],["/categories/Educational/python/Web-crawlers/index.html","52b298ed6c42aa4d5635319a84fec81e"],["/categories/Educational/python/index.html","27940d7ed421d5f4b04970a67525724a"],["/categories/Educational/shoka-theme/index.html","5b82f90bb96bfc400f3f42cf88db0cab"],["/categories/Healthy-Living/index.html","de3d35b3f844fa15da93345514644dbd"],["/categories/Interests/index.html","bec4f4a1257f50a4e9f4775cc27818d0"],["/categories/Social/index.html","75bd82f9ba963e1bfea4409d3c0eed37"],["/categories/Work/index.html","964df08c8d32f50626319b74c8ad4874"],["/categories/index.html","5796c92c39094a12ac0adee25c8c80d1"],["/collection/index.html","b23c33bdc747a0f3aa22062a8644ad85"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","5244e10aa598a1492c1e3d7dffcee4d7"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","26776d3fdde77daf5ef2a96b731eb4ca"],["/page/3/index.html","0e764f55732fb2d2edc389179d76a609"],["/resources/index.html","a9466e4475c17fc65e948bb08488881a"],["/sw-register.js","0a9a1ebab68428cdf6bcee6508e2b013"],["/tags/Hexo/index.html","b2a2bc9d0aa5840d691b03f8db0dfa33"],["/tags/Markdown/index.html","27ff174acef7c11c2970e507d77da0cb"],["/tags/Python/index.html","b1635773806b8b240b00a6c2e0f03f65"],["/tags/index.html","b24ba9ecf7b8f7a42c4e23ee8d055324"],["/tags/shoka/index.html","4d6f86d9a62233843d3520cd93f33df2"],["/tags/微信小程序/index.html","b004361b6ed5c5e9c7919c8f564860f6"],["/tags/数据分析/index.html","862997934de18e2a9c35ed81522d0176"],["/tags/期末复习/index.html","84d48954ee19fba87cb3cb856844d85a"]];
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

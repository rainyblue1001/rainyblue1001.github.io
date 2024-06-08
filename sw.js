/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","e99eba21093b91509437eb9877ce7dfe"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","592c53c961e7047178f1b815b772a420"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","de2ac392515f3c75747f345f207734f2"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","72a60f01552b579cddaefab713104bd4"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","e438160b543e750f95a73ad11c99b6e1"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","9ac46edc09126d5687f7bab5a7f8227f"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","d0b7981e889d54dae050df7137373199"],["/2024/05/25/Healthy-Living/健康生活/index.html","32f47cc0c9aece136b9976b9577f2be4"],["/2024/05/25/Interests/兴趣爱好/index.html","153d6630dd250f91fe70aecdb03214ee"],["/2024/05/25/Social/社会记录/index.html","92b1037163e3304ca7e3496421b7c2cf"],["/2024/05/25/Work/工作/index.html","e8f4c14bcd56251564594a067fee1e59"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","8824c722a0d0b3804e0640d81858c054"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","8f751a165e72a2522720846dab0b80bf"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","3c2a8c92f79bc25fec41b99e075ce4d4"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","779ff5eca66737f14aadb13d73de76eb"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","9946ad29ff429824e861c4ccf805e7fb"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","33de47b14de782bdca69cbb4eec9bd9d"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","88006affe0563874c21f096fc84b9983"],["/404.html","87950cd1c99882f9fd3286bb5cbd50d4"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","2a948da9572a5ffde425650851e30c4c"],["/archives/2020/08/index.html","5f90ad2e17b6e99068ef26e6046d60c4"],["/archives/2020/index.html","9b574453444ae97ca741e9b3ffb5e07f"],["/archives/2024/05/index.html","25a29d0610f20f1d5c759c64241e80d9"],["/archives/2024/06/index.html","5c985c9da261b4b2849082dbbafea3c9"],["/archives/2024/index.html","b462b7ce65c6275dac11dc4222e6d154"],["/archives/2024/page/2/index.html","72e62f0fc164251bf1dbac85e7f69439"],["/archives/index.html","7c7552cc259d7881578743e159bbe4d1"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","92f3278e202c70b07badbed9981aca15"],["/categories/Daily-Life/photos/index.html","04b07294c9e513815d51d5c9d60bd8d7"],["/categories/Educational/index.html","d8d77ff010cbb96e0e3a07248cc9cd01"],["/categories/Educational/page/2/index.html","f179370f11788cde84d750f58089ec2c"],["/categories/Educational/python/Data-cleansing/index.html","d92b466ee1df4901a005924f9084cd31"],["/categories/Educational/python/Web-crawlers/index.html","b460d92ef2ed8d26317c973712093485"],["/categories/Educational/python/index.html","4e5295cbef77cc1d94a02182843760f8"],["/categories/Educational/ruanjian/index.html","11f810d9768f175a6d13e5059e13cb81"],["/categories/Educational/shoka-theme/index.html","2d308671961a74159ef5fafdbffcd250"],["/categories/Educational/weixin/index.html","f39ac8c58d39955014f6cf2295fba958"],["/categories/Healthy-Living/index.html","79a7a55bab6a6b8cf538b6f8f9ff1f22"],["/categories/Interests/index.html","d0a88aac7a096ef2ff03ac7f64fbcd74"],["/categories/Social/index.html","7bdbe597f3ba2cfaf8d361ae33977ee1"],["/categories/Work/index.html","40e134726c21fab87b8ae73ccbf14b23"],["/categories/index.html","d7919042c513052a76d0bc8a5486e5dd"],["/collection/index.html","ea234151e332d1981a0c598649277356"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","04137d2d1bf70f96c967f0e0f8f1bb3a"],["/js/app.js","c639d6053e2d920bddb5ab56b4e876ff"],["/page/2/index.html","2aa9ad3dc9f030628ab5ecbae8950cea"],["/resources/index.html","2b7cc11ffaf8d4ab059bdffda95f18fc"],["/sw-register.js","e7da852a3c0eb39e74b2844ed3cbb968"],["/tags/Hexo/index.html","f0776e3c2d65328e5fba2c5bd6cb662a"],["/tags/Markdown/index.html","be621dc794aa9a913569f5df57823b0d"],["/tags/Python/index.html","e12cdd045f3fa16415d58d51ff7d43ee"],["/tags/index.html","ecf8fa0717910a2828f60d83148ac766"],["/tags/shoka/index.html","0bb408b55c4b0ab047c6276e1fd094db"],["/tags/微信小程序/index.html","f6f4ea2323fcaff02b031c096ad088a4"]];
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

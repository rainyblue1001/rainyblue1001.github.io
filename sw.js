/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","d0497c39baaff59d27dc6aba82eb0fa9"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","60352d7232b54a4d688f721babb942d0"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","c775b0a42fd118c9e2a7fbdee6a93d52"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","a36064d59b6c24241697101e700310ac"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","c8154e07328aad4cc2adba1cd2029e74"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","0373a7d03eec275f5ac907357b6631cb"],["/2024/05/25/Healthy-Living/健康生活/index.html","716f98f3033aaef74eb35ed8271f5cde"],["/2024/05/25/Interests/兴趣爱好/index.html","bfce6386107a6bbf097393d3e04f2770"],["/2024/05/25/Social/社会记录/index.html","601f43eaf20b4db80d313162489df853"],["/2024/05/25/Work/工作/index.html","c609475657e43cbeae3259c41b5c8af5"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","e953531637e24edfe4a22e2e0434f05e"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","676973c18d666161973b0c9dbad65668"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","2c2a69e93e167f58ef9675773d196af0"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","8b665d1befa9604963e24df246c5d627"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","59c50e77166a6ef5dd4c3fa53ac2f88f"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","08da0668cd551fd1d0cde58c444276fd"],["/2024/06/08/Educational/WeChat/WX_review/index.html","c4038ed60a7f40736489f4caf57dbd6a"],["/2024/06/09/Educational/Software/software-project-review/index.html","c9ca66f5797196b84cb99c41e5322bd8"],["/2024/06/16/Educational/python/Data-analysis/Anaconda/index.html","e33ea1690b8bcdf9b5a4cce4b02ba273"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","7795daa5ceaadfdc2ae03655622b4abc"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","4d73dcf70c7edabc72339c73e9b6301a"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review/index.html","8b58d673ede24638875ae4ba7b880b41"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review2/index.html","bcfa0432d14b701a0dfa58ff2379e459"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review3/index.html","a04342f0a10fd6645b57f33644f72e10"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","299899f0aa31711b6e012105953d8874"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","acb769e6d5c1a43ca2099a01849d2bdd"],["/2024/06/20/Educational/python/Data-analysis/Data_analysis_review4/index.html","12eb5dc1066afdec99aeb94167800c9a"],["/2024/06/23/Educational/WeChat/WX-Questions1/index.html","32ddaa39eee1ee1b4d312fc8152c1e5b"],["/2024/06/23/Educational/WeChat/WX-Questions2/index.html","f8dcdba8dcac1fc6d5b4a98be28757eb"],["/2024/06/23/Educational/WeChat/WX-Questions3/index.html","bf0aaf3f8f3e2f2139221e848de7ff66"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions1/index.html","85025e6a6c93de3aba0d7172ba0e3b16"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions2/index.html","649aad36cf509096e9fff2c1534ad580"],["/404.html","01db180100a22ec1510f5c180c19a037"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","343dfdc5ef7ffca89840c290d8e5ef88"],["/archives/2020/08/index.html","90e034c3845bf5906a8a1632271e163b"],["/archives/2020/index.html","b48cf59f581e1950145b3ba7cdf18ce9"],["/archives/2024/05/index.html","fd9e7d43e0c99a30ddb5319a694d5cf5"],["/archives/2024/05/page/2/index.html","020065c461714a70a9c1d94c1abb0f66"],["/archives/2024/06/index.html","e63bf6961a1629849269dda206bc88e7"],["/archives/2024/06/page/2/index.html","0aaad1ca089942f96b901080d04e5f38"],["/archives/2024/index.html","0656c28d0c083facb920fcf743523e8a"],["/archives/2024/page/2/index.html","f9de31699265b5e500fcf98e9a1dea3a"],["/archives/2024/page/3/index.html","1dbe113356c80b768fa4a2a86013d8fd"],["/archives/2024/page/4/index.html","c173663c9b89973cdf470245e985ae4c"],["/archives/index.html","8d070a0f8f359b60c171ef8dacd995e6"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","249cc5e949dd640e381804e36c5b3368"],["/categories/Daily-Life/photos/index.html","e0a7ad4be2075343c77dc7e5857d76df"],["/categories/Educational/Software/index.html","aee0c4209089dcd69ad546894ee55f59"],["/categories/Educational/WeChat/index.html","15d26ca44b74ab95fbe23f096b30a621"],["/categories/Educational/index.html","5d0ae5d68fb5cda48c2f2ab855aa4ad5"],["/categories/Educational/page/2/index.html","109173583f77e6a6823c4d38952653c8"],["/categories/Educational/page/3/index.html","cd0866ce86c00d173e1f812382951882"],["/categories/Educational/python/Data-analysis/index.html","0c141bf9fbb4d4a71a8e073673dd810c"],["/categories/Educational/python/Web-crawlers/index.html","c49a2d3745632efb94b8f362fccb881c"],["/categories/Educational/python/index.html","7c6a132d8f0c27b3ddf7e870741e552c"],["/categories/Educational/shoka-theme/index.html","cd2f4a0a4ac638866b560b0df131a5ed"],["/categories/Healthy-Living/index.html","29d94f1625855a6dab28d297c8f80df2"],["/categories/Interests/index.html","425aa39e982814edb1072a064d80c16f"],["/categories/Social/index.html","533a69d3fefbc75a71aa84d2d43f36ab"],["/categories/Work/index.html","94515b2874330639d5c5ebd5b1e1a35e"],["/categories/index.html","16d7f3260aeb33cb109f41d8a04d3a0a"],["/collection/index.html","148d1f53fa9fa94445e0ec94a0befa6f"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","b1001273912286d69cc1e24a5d4672be"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","2ece35159bf0bcbde28d6f5d7b21d5a3"],["/page/3/index.html","5c33f9e32c96235c9302ffda494b50dc"],["/resources/index.html","b02d47060ce22e7248c08ea4001f9e50"],["/sw-register.js","95ba5f5eba2f538e4b88e365eb72e540"],["/tags/Hexo/index.html","3b8cb8b8ad7d7878746c102580bf116d"],["/tags/Markdown/index.html","0432bb8da05d516b49f03f2bb1c0844a"],["/tags/Python/index.html","6825d01e6799c61b61bbbff178cde199"],["/tags/index.html","4d867994aa5d62462817aef626f1d40b"],["/tags/shoka/index.html","99a80dd19e9e50565abcf99a992289b9"],["/tags/微信小程序/index.html","318b674d2b54136abf4904112fd8cff7"],["/tags/数据分析/index.html","7464e3f8f97d0b75ba5d9bd883cf6d0d"],["/tags/期末复习/index.html","ef392d4155719f82e7a2a7dde0709ce7"],["/tags/期末复习/page/2/index.html","cbf96888e948edb29192c6977688269d"]];
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

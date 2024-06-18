/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","51b63e7b0c4d3357349d20c7b2d28bea"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","d47d8184f23a6d41c15e96cb04d9df5b"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","070c5a5b505212aadae0aa44ee5946de"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","cd4dccaf1efb003e387d0f1e6dcb76a1"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","18758dd08a67583d5f0c52eea07a21cb"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","ebc3707c7e89b523f3724c01b644ea44"],["/2024/05/20/Educational/python/Data-analysis/Anaconda/index.html","bb61bf3b9cb303875c1164e228777cb3"],["/2024/05/25/Healthy-Living/健康生活/index.html","f845abe73478590768e6f1533718f24a"],["/2024/05/25/Interests/兴趣爱好/index.html","d9ebf3d441305de6b033685e916097af"],["/2024/05/25/Social/社会记录/index.html","8f20b69314eb35b896fef7fa6d302e4e"],["/2024/05/25/Work/工作/index.html","1e6acbc2e20b40bc470445fbe1949431"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","5f555adbfa8fdad66e99918a8e67c9eb"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","1c28ce7954f3b9a87f20f49aac3b36f4"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","2b6a5a56610946ef792c88feaa46c9ff"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","f148cca43890eb29d3fb219d652c0f26"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","077790924670803c78c8659f48418ffc"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","4b8881713945cd0621d25ca85f240d81"],["/2024/06/06/Educational/python/Data-analysis/Data_analysis_code/index.html","b8a14f53b8ee102979eca54c35b5d166"],["/2024/06/06/Educational/python/Data-analysis/Data_analysis_review/index.html","02e954460d94e6f725221dad8a82285a"],["/2024/06/08/Educational/WeChat/WX_review/index.html","7eacb6928de1581c3fa598c370b1bbfa"],["/2024/06/09/Educational/Software/software-project-review/index.html","9f6de9a7109ec656a76480c15928fd51"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","29de203d362619eb12838bb77227b7c8"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","48c82ff1b7af06ea4f68daa177fe5a92"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review2/index.html","0e00efbd5ddb1970c586ad91654376ef"],["/404.html","4e56e9ddd1dc32145e2f166b0e50c1f7"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","f96b6165fda5108bcb32ab2a01ab59a3"],["/archives/2020/08/index.html","00898d8a06d7c562573cdfc8b8760b44"],["/archives/2020/index.html","67cd3f1ceabba9ace2fb70079da94953"],["/archives/2024/05/index.html","4600d7df8218273935c1b6c142bf71df"],["/archives/2024/05/page/2/index.html","42177fdf6ea8ccb1ff7449480f65477e"],["/archives/2024/06/index.html","837e07d52e741725da82473076c6c470"],["/archives/2024/06/page/2/index.html","dc0c75e2948896a29d718745ef227df7"],["/archives/2024/index.html","2bc97674c6876e9ad9062e8b73cdc095"],["/archives/2024/page/2/index.html","a086dffa67303f0b51b9beb40a57fd77"],["/archives/2024/page/3/index.html","47ee6650fdb6a2f5bdefeb19a5cd1001"],["/archives/index.html","39edd6a8d52a230545026c3eafaa2abd"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","181d58af07982346e1a54a5723611da8"],["/categories/Daily-Life/photos/index.html","0ecae4695eb03a24c9c2fed1fd5749e1"],["/categories/Educational/Software/index.html","e6109fef04a8f6823f6a785da977b1b2"],["/categories/Educational/WeChat/index.html","eaf60a751b56e56227d8359e07896936"],["/categories/Educational/index.html","d3114087853f275158d2b7de3b2b28d2"],["/categories/Educational/page/2/index.html","fdaf9d3227ea0b9905b2334c582618c4"],["/categories/Educational/python/Data-analysis/index.html","d10163492ea9804f070ee7fc0bb6a64f"],["/categories/Educational/python/Web-crawlers/index.html","2e4039135827c1d1b4875153301b73bd"],["/categories/Educational/python/index.html","eee22d8fb5928168a27af1b2dcc4c4fe"],["/categories/Educational/shoka-theme/index.html","f258c018b8ef87d3654ca93709491c19"],["/categories/Healthy-Living/index.html","eb422cdd1df13b8a08c1d0459ec71ce7"],["/categories/Interests/index.html","e69b1f3992398380c9da118eff2a9347"],["/categories/Social/index.html","4c5823f6d6ba1e51110529ddb19a8f33"],["/categories/Work/index.html","30d7d35ef3502ecc2c854527283c7420"],["/categories/index.html","323b10cf79ae96f5260fc48ce2da7cb2"],["/collection/index.html","b2b8d47eb9154bf84270e1639fabef22"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","f0927eebd0d78bed8b421b62656f0c6e"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","4c63e00838a1190503a17f33b02bf10a"],["/page/3/index.html","71600b7a0ff14e871658acc78ed395f7"],["/resources/index.html","e0d0fca4c89178320419729477865530"],["/sw-register.js","b98805e908fbedb136fcef763b187584"],["/tags/Hexo/index.html","20bd04ada7cedc400ebef958bc82a4d9"],["/tags/Markdown/index.html","3c4c7ebdd4974f9c68f04f51395de56e"],["/tags/Python/index.html","b58ccec67f9b880723b839e31157c930"],["/tags/index.html","acad37f793032c0e6bbbe0b70141e000"],["/tags/shoka/index.html","416f274614e19f4376cb2da4f70d5c60"],["/tags/微信小程序/index.html","ecd2caa39487e67887ff04e3c166fd9e"],["/tags/数据分析/index.html","e4dcf4ea7c0d8beed2c7969803d1d0c7"],["/tags/期末复习/index.html","768296aec900dfb833888c488b4627e2"]];
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

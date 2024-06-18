/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","0e9556989b6ed29ef1a0a9af4917b61f"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","1d297ca0438f8fe3597bac514f8864e7"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","d6ab216f68ee9faacff44c7816f6b240"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","d6c79253539ae05f482c4685af1f2160"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","fb371111ce578d081c613d63b954ee49"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","78eb54d9a49e4e59f871fc82b2f4992f"],["/2024/05/20/Educational/python/Data-analysis/Anaconda/index.html","b37fde7f0e5eb7e2f0e782ccfc14209a"],["/2024/05/25/Healthy-Living/健康生活/index.html","56fdcbafe1bc6a790b0efa727e9c6dc8"],["/2024/05/25/Interests/兴趣爱好/index.html","67510f35aa883e108b67974b53e71915"],["/2024/05/25/Social/社会记录/index.html","69fbefa558e164190c2bc0d0c2590126"],["/2024/05/25/Work/工作/index.html","29ced627abddfbd5ba6656649b5b9505"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","04e7512f6b20745f378ff05c5006e317"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","92987b1def34234e7506cb538da3ae31"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","22a344e12483e09cf46032025ba3f108"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","28554a866b57d29403a8361d5f13981b"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","4b43306d74228adfcb08ab9cb70ee6f5"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","a495e8ce2045ac76c31d902fac25d54f"],["/2024/06/06/Educational/python/Data-analysis/Data_analysis_code/index.html","1f6ab7b1385f370f3d16d06797235dd5"],["/2024/06/06/Educational/python/Data-analysis/Data_analysis_review/index.html","61fbc725e970b5d21d0f4fd09a05b42c"],["/2024/06/08/Educational/WeChat/WX_review/index.html","c6404f81415977883648c7d260e43426"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","242e870daf5b00b0b9231aee94ce33c8"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","f7fa7a9393bfbe74947164409eb5e969"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review2/index.html","d88fc5416e63f819ca58e49117c0564a"],["/404.html","048ea172eabcb5853535d6b0cb9c8857"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","576aa2881bab98adbdd1e14f4c199344"],["/archives/2020/08/index.html","b0fa5aca9aa2498f63386d4ba72ddb30"],["/archives/2020/index.html","bb3fb0945b7db64ba0454934cd5e86ca"],["/archives/2024/05/index.html","dd9efb4e0b31622d83747e5bac2744ba"],["/archives/2024/05/page/2/index.html","cc99c5a78dd973bffa6072f4c2266415"],["/archives/2024/06/index.html","df0deba05822da2754d83962b2fa1bed"],["/archives/2024/index.html","e4fc08138c0b70e405122080a198a108"],["/archives/2024/page/2/index.html","399b4c2a1ce24601026fc3a36bcabbf2"],["/archives/2024/page/3/index.html","96836973da6e706a182af59720fdad8f"],["/archives/index.html","ed0b2468aa53a85e412c8fb911ec78b3"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","26daed4948ac07ece2836e7533445d7b"],["/categories/Daily-Life/photos/index.html","0b3a4491b7c90f9f8ac2f88e06d91a95"],["/categories/Educational/Software/index.html","75e505f35c4b77897799a88014e993de"],["/categories/Educational/WeChat/index.html","51022a6bc217906e1afdc11d0b26fa0b"],["/categories/Educational/index.html","7613babddf343be81c149d5624937b69"],["/categories/Educational/page/2/index.html","496f5c72de9d69991d6fef902ab6e9ab"],["/categories/Educational/python/Data-analysis/index.html","2d33a7e8ce9292c252a6d0b6e4ab37c7"],["/categories/Educational/python/Web-crawlers/index.html","b438b27f52cbc2af0cd5a01849eeb13b"],["/categories/Educational/python/index.html","009bbdb5b5a2e997eb020638dc6498cd"],["/categories/Educational/shoka-theme/index.html","d2bcceea0dd7600a94becbfd287c04f9"],["/categories/Healthy-Living/index.html","dd0b7e05ae18764e7216db4c5fec673f"],["/categories/Interests/index.html","cb060273e39f44d8a9444f2ac13ea4fd"],["/categories/Social/index.html","56e0bdcb9427147e7315ed9165088bdc"],["/categories/Work/index.html","7f9528fff20d276c1e8712cce456773b"],["/categories/index.html","3e750ace22e812f35089a554817662ef"],["/collection/index.html","16dd57a320619e885b0b761e30d19895"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","6559645e656adfda77893bd52dcc1e89"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","e5a82d44abc9a9f4eaafac34435b9d4c"],["/resources/index.html","6bd9423fe94b48ea59485ac7d7c356b2"],["/sw-register.js","4bb5385fa6de6232ffbebbf5c6b7cd4a"],["/tags/Hexo/index.html","48b785edd84cf14c822d2a3dfcde6f5c"],["/tags/Markdown/index.html","d25b7f5fe6e4bbfc4290171063d86a01"],["/tags/Python/index.html","b2d351880fda50cdaf8095d3696ee5fa"],["/tags/index.html","ebc9c72ba2c94e7d77eac7e819047fab"],["/tags/shoka/index.html","dd45f5674f6da4286c2957b5aaeac746"],["/tags/微信小程序/index.html","cc57c059734753198b42fb2249277288"],["/tags/数据分析/index.html","0a4ecb360f8e650b2c45e163e23efe35"],["/tags/期末复习/index.html","f119a7bae88c57ba8a8532208d908300"]];
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

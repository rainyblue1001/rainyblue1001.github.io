/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","1283645c9f40444f9930a4bde1532ae7"],["/2024/05/20/Educational/python/Data-analysis/Anaconda的安装/index.html","587989be5069e5ff384937cb07c559e1"],["/2024/05/25/Healthy-Living/健康生活/index.html","cc05b07c1569dac7ed4c38204df6ac07"],["/2024/05/25/Interests/兴趣爱好/index.html","b057366106674996fb1e3e13546aaeb7"],["/2024/05/25/Social/社会记录/index.html","8a96fb037362588621b001a929dcaa97"],["/2024/05/25/Work/工作/index.html","4905285c10fb7d2481c0566526f3e55d"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","0529a3c2ca86d6bb4fab5453c3a4cbec"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","b3761607f54084189206b7371df8969d"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","59f991077c23354abda1a0852637a316"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","e54edfa60f49e23ecdeefac5724bef18"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","6251cd22994d199145fc336593fa91a0"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","302927f84726f8279fd14697c489e7af"],["/2024/06/06/Educational/python/Data-analysis/数据清洗/index.html","8e01b76649fbc258f72be71719671243"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","42dc03edce09f4265b5a0f89e9e48278"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","3b296b6c3582aef7ccbebf4a5f84b883"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","350bea2c22be533f3ca7e5982e1a0964"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","13f4ab95c1c0598fde66c1fcc6584236"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","cad5e9b00d717c82b79cf520f36dcf7c"],["/2024/06/08/Educational/weixin/微信小程序复习提纲/index.html","0633215a132f1ff6981e3597c1fb6753"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review/index.html","9a53ce0bd04fe0e8c40786c9a4ccec2a"],["/404.html","7efab60e90e92762cf475fe503b80d2a"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","3c3b937c66422c16312396c889affc23"],["/archives/2020/08/index.html","3baf794c984cb9ce33a5a2de31bebf84"],["/archives/2020/index.html","360c08a573c16357665bd3b14c8b5705"],["/archives/2024/05/index.html","f52475e28af3052e91bdf9e019d28aea"],["/archives/2024/06/index.html","93d243e1d0976c457d463a911b7a0f48"],["/archives/2024/06/page/2/index.html","d503b7015dc2120252d8781e72573e9a"],["/archives/2024/index.html","0c57c6db417bb3d376d7e5f7efcd9c77"],["/archives/2024/page/2/index.html","2d5173d41407dc612b2545ddfc03d80d"],["/archives/index.html","91dbecb17af48c30bc23d467f49385a8"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","ab82ce4f8b50dc3be88b630f26bfd62e"],["/categories/Daily-Life/photos/index.html","13c110ccd9e65eac683558e90638bc2f"],["/categories/Educational/index.html","30ec358a5cf679910ca890c7f43659c8"],["/categories/Educational/page/2/index.html","e9bd70dd460c17c4b17dfab73217804b"],["/categories/Educational/python/Data-analysis/index.html","89c75f3ec50c1c6aac0d0d498667ee85"],["/categories/Educational/python/Web-crawlers/index.html","0daa15fd75d4270600dd1b75ed9642d4"],["/categories/Educational/python/index.html","bb34dceb746285184a659bb43796e417"],["/categories/Educational/ruanjian/index.html","955bea8996c43fba1b63b14983c42e4e"],["/categories/Educational/shoka-theme/index.html","35c4a277baa7926321e7bcf74a4d6318"],["/categories/Educational/weixin/index.html","3042e33d00ea1cc9ed251ddcb167f3a6"],["/categories/Healthy-Living/index.html","1dda6d9a809b39c4ea8f4f5024c88b47"],["/categories/Interests/index.html","e38304d8e4b8c2f5263af8d21e18c0c4"],["/categories/Social/index.html","3ed139f5dae341515ab1d9d95e0d887a"],["/categories/Work/index.html","a7b1b4e636198f85144d8495bc0d52e9"],["/categories/index.html","e788a891e9f7587da914b86eb1a8ab8c"],["/collection/index.html","cd54ad7b3b7ad6a37769c6ead1d1f63e"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","bf73a7608f7b847bab8691de426b78ee"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","e38bac95ec4c14d06ba386bd37317eda"],["/resources/index.html","948fe506f666e527b0c16a352ebddf13"],["/sw-register.js","c82f4f68243e176e52ecad35d817ead0"],["/tags/Hexo/index.html","83f1e9c09a1528fafbb3ac5975fbc323"],["/tags/Markdown/index.html","230a9d4725aec3ad383a68f6dee20570"],["/tags/Python/index.html","9e9a07e2b0c8b1344208f5a5b8c72cd7"],["/tags/index.html","f52b8ff3d9300dfd1deb74c05b3f5589"],["/tags/shoka/index.html","506dc5c0b5bdc7e60c64d774597c6d8c"],["/tags/微信小程序/index.html","ad8c48fb728511533db6504d6706e48c"],["/tags/数据分析/index.html","af43ad8edb7c8372808f0f793d2e394a"],["/tags/期末复习/index.html","88ce07a9c101d953e5c930378f1104de"]];
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

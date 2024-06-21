/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","16c3bb819194aec327cce605ddebb2d4"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","df7567d9701efed09f61cde74a294fcc"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","c6431780dbc442759ce929520175b676"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","e386ee2c5940a5037ab0c93af0e0db70"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","53a1af2a47f5d039026b78fbaff0f08d"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","3c5c17ec3c61ff812e22f1f615d092fb"],["/2024/05/25/Healthy-Living/健康生活/index.html","7a6cc481c55ad929cf0708405f4f4c50"],["/2024/05/25/Interests/兴趣爱好/index.html","03b571f566957812601954aee0894ed7"],["/2024/05/25/Social/社会记录/index.html","184b6bf8c4a25f5601f9df5a0aa4a206"],["/2024/05/25/Work/工作/index.html","19730918dfe7c39dd1c89bab30c0e8cb"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","f23d77b08ceec8188daaa3212f386375"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","28a9868f66b26edefcc4151c39b5c694"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","bd8370f61157d52a7b15e0aaea574083"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","8d65c03e337c1ce08d4901bd3ebd38db"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","5681d8b42969546badb7923fdff210b7"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","588721539270eb8c3ad0e5f5b742f809"],["/2024/06/08/Educational/WeChat/WX_review/index.html","58fb6df129d99263573a553c81dbbb92"],["/2024/06/09/Educational/Software/software-project-review/index.html","d76e258a2f8a7e9ac18b41e1f2db58cb"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","0962436afc3db7545ce8008e018b2721"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","91caad079a1dbbb4ed2d56481fb8b894"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review2/index.html","149f2b8f409557fecbe5656ada502c14"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review/index.html","89cb8a07e81897576036d9be1a040b21"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","0a2a2bb1503b86a5d6a45a83a24bba4a"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","131a1abd3c6e71f8f5dc7eb9abe6928f"],["/2024/06/21/Educational/python/Data-analysis/Anaconda/index.html","88d9da881368be8c57c550d1326e9d14"],["/404.html","0a5dcb416c7a47c89ac0cfab984e08b8"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","a9f46e55a7ef1780101a6d29729f8768"],["/archives/2020/08/index.html","3c4b0ea81cfbacf9f3d5f4a435ff776d"],["/archives/2020/index.html","6578e291f82cc6214077301efc7f97a0"],["/archives/2024/05/index.html","5f0d5fa92853ba313296a7a5726fdd72"],["/archives/2024/05/page/2/index.html","73f3023f01e0e35e0b921d5ff7f858ae"],["/archives/2024/06/index.html","fa66e4681e74cb4bbded7d4e9c1d79d9"],["/archives/2024/06/page/2/index.html","cee144397335e0d993d807a2ea8ec732"],["/archives/2024/index.html","ef5681cd371de81c03aad6941f64b322"],["/archives/2024/page/2/index.html","39bd39fa958ceaefb39a8dbdfd21bf69"],["/archives/2024/page/3/index.html","b3fc081e84c5999c1c58bf301af2f0dd"],["/archives/index.html","1947105b1dfc51a2906f141affa8f73f"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","83673ae60edefaa62938c4627b3b4621"],["/categories/Daily-Life/photos/index.html","72984b598b23388f136ca29177a13460"],["/categories/Educational/Software/index.html","edcc8ef5a4c77c0b7c5c8d17fc239f15"],["/categories/Educational/WeChat/index.html","1650341c187b066cf43851d2ea6ee031"],["/categories/Educational/index.html","8a3741c4d3ec9bb3ca275f295ce7e2b6"],["/categories/Educational/page/2/index.html","1a3acb7b3425766eced53df5c4ff57dd"],["/categories/Educational/python/Data-analysis/index.html","7793c2f480f35525254f41628fc4e62a"],["/categories/Educational/python/Web-crawlers/index.html","57a6d09eb2353c9fc0a0833c4ec0267f"],["/categories/Educational/python/index.html","b07edb937cf1313f3d0956587fba2407"],["/categories/Educational/shoka-theme/index.html","61c1f40b410d58dc2cea586033a104ad"],["/categories/Healthy-Living/index.html","976c6a5b65d911ecddca7574f4607b21"],["/categories/Interests/index.html","b2a463ef5d3024e25bf51a967c9f42d9"],["/categories/Social/index.html","52c27e6af831a24f56732c82810037c4"],["/categories/Work/index.html","b3cb47680c5706035fba99263ca3c95f"],["/categories/index.html","d1681a555312da09a5913edabe316c46"],["/collection/index.html","94518e30a938c2710a89fff4c26436ba"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","baca2e486a2194f6f4f332ab6527a00a"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","47ee463f9e7916e954a4d2384edc4e6f"],["/page/3/index.html","553b5c3af41d1785c014d2b4b66a0dd2"],["/resources/index.html","d7f2e3945281e03db38bf4c8f5cbac86"],["/sw-register.js","caca8bb91429493ff6427c5b4f72a3a3"],["/tags/Hexo/index.html","8cbbd0b54b736453933b52551faff18f"],["/tags/Markdown/index.html","b6f80f8284b81ec5c53db481b54339ac"],["/tags/Python/index.html","0106bad904fbdf3651e6e1b09a5a6312"],["/tags/index.html","b8d0967e7c8fa7fa95073689cfe6b318"],["/tags/shoka/index.html","7d7a3070b0648fbd99cbc8f0bad30d5e"],["/tags/微信小程序/index.html","8d85f54c6d0c1d6b431611dfdbb7519c"],["/tags/数据分析/index.html","eb04a59ac18e2e9d480c7c5055446e1e"],["/tags/期末复习/index.html","df2e8eb2292b23e85fbc82404153e99d"]];
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

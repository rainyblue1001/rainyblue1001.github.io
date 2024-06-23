/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","c718c5bc9167eaa21bf9f0b3fc1adecb"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","b276e19ba6bd793e35fb8aef8770c101"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","0782979f0a427729039906bbc035abd5"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","00a341082c0f6d96f7b842e8f7c187f1"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","cf89b87e4605acedf776096db111663f"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","a96e1c2774ffd9dfc6b59279000a2439"],["/2024/05/25/Healthy-Living/健康生活/index.html","b32f0134e11256f0e39e54a7231ff9d9"],["/2024/05/25/Interests/兴趣爱好/index.html","9f6092fb59697790cceaacca3f938f10"],["/2024/05/25/Social/社会记录/index.html","42752d9d2dc00ed1abd5d9872da48fce"],["/2024/05/25/Work/工作/index.html","8181de4797f49310a755c80a4c49837a"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","a57f20ae0cd9677cb5061936e3a821aa"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","954f9e91d21e713f2042f61a9db296a9"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","4ba07c1750c49cac737940bb5a95759c"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","448c07ad6bc49887ecc6e0d2e8ca77d9"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","3810eec37aedc0dd6cc91a2a99b18dc7"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","c5e84fa83a6344142bc4a80477fb06fc"],["/2024/06/08/Educational/WeChat/WX_review/index.html","fc45c83129a85387db61328cd120e985"],["/2024/06/09/Educational/Software/software-project-review/index.html","184d24d2dc483ed45615abd76330ce77"],["/2024/06/16/Educational/python/Data-analysis/Anaconda/index.html","5a96aab05505ba8ed798beb649bb8c2d"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","306faeeca50491e371933556c34093aa"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","32515ca5753b8a9277d2c8f0ee304177"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review/index.html","740a0a5890098a83a9b238b4e73ab7be"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review2/index.html","e2bd6728057994da802ce04e5a7c576e"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review3/index.html","fb4b80149e1b4627712788296dec20eb"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","6ce393c42ae40a9fb8ba42dddbbafb75"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","dc939ac7d9f355dd026df94c990cf6c2"],["/2024/06/20/Educational/python/Data-analysis/Data_analysis_review4/index.html","56a82b180351e665ba5b45c774ba7b37"],["/2024/06/23/Educational/WeChat/WX-Questions1/index.html","5958c09e32df1c2cbff31b0df6f4414a"],["/2024/06/23/Educational/WeChat/WX-Questions2/index.html","cd0136a699b8c8308003a77deb2a2908"],["/2024/06/23/Educational/WeChat/WX-Questions3/index.html","1b6d21e214a1dec0739ef7ebafd9dd59"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions1/index.html","2f7f381d41550a4ca9f465b478da3be2"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions2/index.html","f41fa95390e3c2e569fb655c896b493a"],["/404.html","34c841ca986fa9565258abbf5e366301"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","4c1858cdd1f51a780b725b6a7f3df3f6"],["/archives/2020/08/index.html","d0baebfaa41dc1c4dbb81d4df3f5c497"],["/archives/2020/index.html","cfb44bcfa612a3447833791dd5bcff99"],["/archives/2024/05/index.html","efb60da89bbbd6c0684dac3354a1e127"],["/archives/2024/05/page/2/index.html","80b399187d19f0e1b9b5dd68b0b42463"],["/archives/2024/06/index.html","b25dbe03dadc2ae37cd21e619561a08c"],["/archives/2024/06/page/2/index.html","952a3b9786c3c864a49285d4b3b20aa0"],["/archives/2024/index.html","4e8ba972991063466ff93d19e4f8c71e"],["/archives/2024/page/2/index.html","103f8168c0fdadfa300e3e6919fbc702"],["/archives/2024/page/3/index.html","fe7779b11f603f9a1c11dbc9a84d4d78"],["/archives/2024/page/4/index.html","b2bac6f896beeba54cb8658667df444d"],["/archives/index.html","00a6178375174bd389f4e1e9bdad73e9"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","cc98d6c35e7f11d88d6b6a1549e7eb48"],["/categories/Daily-Life/photos/index.html","2791598fb17efc342293d3a821820563"],["/categories/Educational/Software/index.html","3ab80e03ca3d554d47390cccc1db2041"],["/categories/Educational/WeChat/index.html","591214f248da91dc49a534473bb0eefa"],["/categories/Educational/index.html","b3608a96cc46c07060d31331f5e6b4a5"],["/categories/Educational/page/2/index.html","9af1065014cf98bffca9c1bf558ed82a"],["/categories/Educational/page/3/index.html","717d97ddea97233e6366a9b051ec01aa"],["/categories/Educational/python/Data-analysis/index.html","24cd93ee324d72a76480872768df37db"],["/categories/Educational/python/Web-crawlers/index.html","566c995f6f4455bff034a8ee6aa767f4"],["/categories/Educational/python/index.html","ddd3bb90652106b3cc7e107d0f2ffa18"],["/categories/Educational/shoka-theme/index.html","c9305aa5a0fb22784c5e25bbc904cc5d"],["/categories/Healthy-Living/index.html","7633c33699e7165decddf04edd17b383"],["/categories/Interests/index.html","262ef024ea0ed019ca776b33d31fe300"],["/categories/Social/index.html","8104e97e8a8354497152f0353e57136a"],["/categories/Work/index.html","5cd13e597d256c3207b077181b506bbe"],["/categories/index.html","9dd9179dcb673cdb7cc670e9d777f0fd"],["/collection/index.html","d753d69899d06be81bc9cf49d2bff881"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","7dc454c4ad2c34826fdde374e218288f"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","85f48fff65324c67fabba00987a81841"],["/page/3/index.html","e888f9b8d4013dac9fa638ddef42ce85"],["/resources/index.html","fcfe6b27b7b7725e7c5eee706216c55a"],["/sw-register.js","9cec13ef06cb17cfee8af84eeebc1c5d"],["/tags/Hexo/index.html","7330765e78dc73c9db761e42fdf75428"],["/tags/Markdown/index.html","68dfd729e5aca7d452134f790ef64d46"],["/tags/Python/index.html","319db7b2b88b131d99a3fcb91e103da0"],["/tags/index.html","a5fc14635ad30c7fd8b8669c015ea92c"],["/tags/shoka/index.html","b26d0f1d6b419b6942f9bb787a162e25"],["/tags/微信小程序/index.html","1cfea67346cccc9cc40fe6a4854068ff"],["/tags/数据分析/index.html","0b91ab4b705ad4f8f18caa8888a18a3d"],["/tags/期末复习/index.html","547c7f697dbf4fea8044a17d82909ccb"],["/tags/期末复习/page/2/index.html","1caff339119369c4ac3921f2383ab611"]];
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

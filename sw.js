/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/04/13/Daily-Life/photos/images/index.html","e0100e48d9b02a76d498658398690f5b"],["/2024/04/16/Educational/python/Anaconda/index.html","5a8466c08287e92ba46408e03f061e4b"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","b78a36ac605805a0d6beb1aca0259a14"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","8e533ff0a7feaba0e3b76a148cbbd526"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","3ec5d00c3a4d95d869c6470fb6fffc9d"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","58f41bc85b22e30726c58dca13f8c2fe"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","35c9a24277267827f81379e774b839eb"],["/2024/05/25/Healthy-Living/健康生活/index.html","9bc7cd9240e0b871e8e5e33884b9e243"],["/2024/05/25/Interests/兴趣爱好/index.html","04f7e25e564884c0455f2319f0bc92b3"],["/2024/05/25/Social/社会记录/index.html","96e61a35f5955aad5fe311e15fdca00b"],["/2024/05/25/Work/工作/index.html","befc4ca17fd67cd9882d206cb44db0ed"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","0cb8746bf6ad949000d72a3127481623"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","37865fb7d4aa6f5f94b9f3fe0b0ddde0"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","07d426a2dc1079e8faf1beabdb99272d"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review2/index.html","3b182c6c881d65c53f3e0b52ae598433"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review3/index.html","bab6258153a2c56a208314eddb7a976e"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review4/index.html","30266e58a3ce8cba5b2e69b303e653ca"],["/2024/06/19/Educational/WeChat/WX_review/index.html","45068c18c752d194e77bd02d703352bf"],["/2024/06/19/Educational/WeChat/WeChat_Program1/index.html","c5f3eaa8d6395926aa25334b763725de"],["/2024/06/19/Educational/WeChat/WeChat_Program2/index.html","b8bb0f3bc6de4c52ddb42ea89e3bf3f4"],["/2024/06/19/Educational/WeChat/WeChat_Program3/index.html","df8ac6de562f7219512877cccaa37d96"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","f5977568d2ce8d64edd438bcd03ea38f"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","c2ffc8f26e8a006864a66deeb69b8801"],["/2024/06/20/Educational/Software/2023-Software-project-review/index.html","154a8aeae845f0437146d703c3f1857d"],["/2024/06/20/Educational/WeChat/WX_Exercises/index.html","cf93e80e975e5f5ca9c61f43945c61db"],["/2024/06/21/Educational/Software/software-project-review/index.html","e9e4bbfd66c3320ba2c1e60a7cbb775d"],["/2024/06/22/Educational/python/Data-analysis/Data_analysis_review/index.html","c2a6c5e46e694f37fab8aee5d6d46a86"],["/2024/06/23/Educational/WeChat/WX-Questions1/index.html","5788aa42ef7aa75c84aae4ff58db1cb2"],["/2024/06/23/Educational/WeChat/WX-Questions2/index.html","f78ba4bc9c58ac35097112f5921977e0"],["/2024/06/23/Educational/WeChat/WX-Questions3/index.html","0785e2a3bfc9a77b22b5a9318b97a35f"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions1/index.html","f0bfc91866996eb289a79aa88b0def59"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions2/index.html","29d5c7cf5a0e784fa5ddebe727ff02f7"],["/404.html","05e94c517d47e1c0c8d9570eeb2dd8cd"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","c1f900dfe8fc431f3f06815159f82958"],["/archives/2024/04/index.html","47e43202ce642eac18b8ac7ed06266c6"],["/archives/2024/05/index.html","ecfe12478f0f0cb5f445795400ee553d"],["/archives/2024/05/page/2/index.html","1c93c3441545f6cdb61e98c63d435ca9"],["/archives/2024/06/index.html","a0aa678068a79afeaa6b0e843eefb1d0"],["/archives/2024/06/page/2/index.html","4e55aabb0d8ae00b81c564f652aff3c7"],["/archives/2024/index.html","4347bfbd0a2a80cfbe33e71f150c2b74"],["/archives/2024/page/2/index.html","1a06b0425daee12c2a5a8a2357cedc8a"],["/archives/2024/page/3/index.html","35e5fbe44393b5a4cdd216949025af83"],["/archives/2024/page/4/index.html","34dd4dcfd259fe78b7adbdceadb7ba2c"],["/archives/index.html","d85d7c156efbc70d86abe8bf6fdac088"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","4b7804705461fc573c182e67887c907d"],["/categories/Daily-Life/photos/index.html","bb160d500801af7535923cbc394520b1"],["/categories/Educational/Software/index.html","d9877a36f3e6bcfe0973c8e97bd21dd7"],["/categories/Educational/WeChat/index.html","ff21563e56beb21fd25e4914053cb74a"],["/categories/Educational/index.html","f7aab713ccb17de9a4d3dc3510fa4aab"],["/categories/Educational/page/2/index.html","a07fee3c9436f30ebcd99e26f2cbcab3"],["/categories/Educational/page/3/index.html","41fd79af5418b0c9e117bc25fa71a2b3"],["/categories/Educational/python/Data-analysis/index.html","a1eb287bf5c381fd176ceec26e57a7ed"],["/categories/Educational/python/Web-crawlers/index.html","8bc863984647220db36c14e78a681b6a"],["/categories/Educational/python/index.html","73e9d4521f2c78195a58dbea5d2edc2d"],["/categories/Educational/shoka-theme/index.html","c8a32d930ab32cc73def870618071823"],["/categories/Healthy-Living/index.html","263576f85435570721e8871233ed04ea"],["/categories/Interests/index.html","f2e191fdcfbc4fec4d8efdfb4c87d6bf"],["/categories/Social/index.html","014d611af1aa39e2ccb59538ca78dc58"],["/categories/Work/index.html","7808073e80296cd741a7dd13aa089cc7"],["/categories/index.html","1de86587cbdeebbad2429c2fd3c41a8d"],["/collection/index.html","486fe578ab1104f54e3b4462fe09d98c"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","1010134ec877f3fa43fa98c2a58167ef"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","66603cf8f7ab8d72434a15f0238587b7"],["/page/3/index.html","ea08895493edc0d2eaf480ffcfc38f89"],["/resources/index.html","0011a1eb4dd92d7915409c47b62206b7"],["/sw-register.js","ff65f3e75b174010d4743dcf7fbee0ae"],["/tags/Hexo/index.html","7984770da1c953b344d410cf0cd5c493"],["/tags/Markdown/index.html","7efe7560156863e5b72124dbb22c4894"],["/tags/Python/index.html","550df910548cb472a72a9d1527c2bfba"],["/tags/index.html","3b808dad0e8c7d9282dbadb55738498b"],["/tags/shoka/index.html","b7ea2c3fcd03c95983a758f7d6dbfd55"],["/tags/微信小程序/index.html","f14b7fc0c650d9a5d46ed7560c6d2100"],["/tags/数据分析/index.html","708f4467c6beaf7c246ecc39e2a82ed3"],["/tags/期末复习/index.html","233b7d573291490bde1c18f74e48aef6"],["/tags/期末复习/page/2/index.html","29bcedd48d536ad1afe5b6c310ad5876"]];
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

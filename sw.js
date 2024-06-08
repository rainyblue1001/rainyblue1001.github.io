/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","621be39c46f3cfe12a03182dba738c39"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","34b6b31403669dff4ff0909c79539340"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","d9c2c4a88e628505c7e76a39cc98ab78"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","7c6c2819f6b25abccecc25901f1ea7a2"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","e52fe55e4042cc0b865e49f393e33e75"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","4f2eb3bc21b43e6fd175ac67086c75eb"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","0f49b3b128242762a4507e8ad10ea208"],["/2024/05/25/Healthy-Living/健康生活/index.html","885103cf80aa984d57e8f6dca46574c9"],["/2024/05/25/Interests/兴趣爱好/index.html","b3878c52d1001dd7aae01fbe84ce4f3f"],["/2024/05/25/Social/社会记录/index.html","4ad29f5efcbf7f6a545aaa24adf6b605"],["/2024/05/25/Work/工作/index.html","640c2c1181c613a34fbe1bc66b450c3c"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","bfdd4d7bc3b8fb02a01e64488e7e78c1"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","2c02b2b7c25df4fc7771ba9ce87c2f1c"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","778b785bdd2e8bb0577bf851ecb87e81"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","c8f0e551ef776f04e89f00f0979b6e07"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","b9cca4594463f5ef81ee8ef678c5cb9d"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","69aeb6da84dd38a8f84306d23aa10414"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","20f52def223dbd4cae44019e85d81de5"],["/404.html","526c460be96ffa9ce43f735cf5a9a676"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","24cd94ce0b2858358004f82b1526e511"],["/archives/2020/08/index.html","9f60142ea59288489faad0ccc26d205a"],["/archives/2020/index.html","96b6879da868aac8ee0b18722dbec44e"],["/archives/2024/05/index.html","1662e7f545522a11d2a1771c2969219e"],["/archives/2024/06/index.html","3db6b688ee769f3c81e9f3ef3f770850"],["/archives/2024/index.html","e6fae0ffc0b6cdfc10d6e57a812b22a0"],["/archives/2024/page/2/index.html","dd522ec3ff815d5e722b5634e6106761"],["/archives/index.html","7a29b04fa15fd61f5c66016c6d7e7e57"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","d1cd5b7b4d8469f7089151345d3cb823"],["/categories/Daily-Life/photos/index.html","e69e2347882d00fa8898da08919b6b4d"],["/categories/Educational/index.html","02f7d783fd14711fa06b8ccaad40c47f"],["/categories/Educational/page/2/index.html","43242317ebfee2ddfa429e2868cfa997"],["/categories/Educational/python/Data-cleansing/index.html","4655ad0899c7d19c09d3663169da3767"],["/categories/Educational/python/Web-crawlers/index.html","d2e4bd637cc49e4b2ec8a561b5822e5a"],["/categories/Educational/python/index.html","1061e501abfc20e3b29b5c1cedb21a38"],["/categories/Educational/ruanjian/index.html","a5d75ffea76c7a7578700fe8032b7d2f"],["/categories/Educational/shoka-theme/index.html","f4b5c6e7b3c6476ecaef4eb85db26652"],["/categories/Educational/weixin/index.html","caf544132c6bd426fab3b1e5811d05ad"],["/categories/Healthy-Living/index.html","67219c6113a72c241854ba98543f8bcd"],["/categories/Interests/index.html","e9d59482229bbd777bd6efef406fcada"],["/categories/Social/index.html","b89d8844a1fef095c81395ff85a15118"],["/categories/Work/index.html","04aa0953ecbc3d7a52aec4a6250b17dc"],["/categories/index.html","5f8d08554e4f74ce6883dca273e1a9ea"],["/collection/index.html","66e0d467ffce4f4f3fb8cf9d44cf2954"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","e61c3b3c3b875549de39dcd009d0a352"],["/js/app.js","733a6fb447797e80ecad2689a4b2d3a9"],["/page/2/index.html","c697717f51e1b203c12b580cec4eb1cf"],["/resources/index.html","b24238547a019f2f61abbf6329d130d4"],["/sw-register.js","2b9ac9d802e3d136d9c5e194e0d852dd"],["/tags/Hexo/index.html","5fa0db0c099277211d641f5ddceca87b"],["/tags/Markdown/index.html","2d5e6a7554a6a8bf21e739ce45d6723b"],["/tags/Python/index.html","e9ba04c6519ffb1164b4c5f7253abe60"],["/tags/index.html","331ad21e486c569f1de9ac34f7a0f7f4"],["/tags/shoka/index.html","3ba1eab504f95603a9009305bc05b51d"],["/tags/微信小程序/index.html","6d74f6658d2afa6dbdc39c3cb10dbd83"]];
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

/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","194a951811c31a9ef248c801496be9e2"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","97e48fa06b732ff714077f46b126f504"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","fc1cdabbf9a776406623fe6e56a35dab"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","92bf2e4cd23b4f62b3b43f38d5173fd1"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","54219d0402f944d9bdbbe549cad8ffee"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","49032884b2fff93fdae4f9aef2c0fe05"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","0f7f43c5624317283a1d59d365708c94"],["/2024/05/25/Healthy-Living/健康生活/index.html","21d74f7dff8faccebc32869fa532583c"],["/2024/05/25/Interests/兴趣爱好/index.html","c59b26e66e15067db04e3990da2bb03f"],["/2024/05/25/Social/社会记录/index.html","8d69493d4a563096174fb4dcdd777267"],["/2024/05/25/Work/工作/index.html","e2cad0c25d1f808f6abe8d362f0ffef4"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","c950f07c8f880e484ea73b925fbc8fe1"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","200dc5684debbe646a8707cc8170fdaf"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","1f2a432fc8f3d159d4d60bb9f329382b"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","f6c938df78f1d5812ca2d640412174c3"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","55843660c0b933592aaa5e9010f13145"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","f6ae24ebaa05b2db58dd40dcea9958f7"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","c437607bb136a6876183228380c355d1"],["/404.html","e03911144c7a81cde8f069ee8cee2e3c"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","2b5a4eae7fbc113b971424e51eca85cf"],["/archives/2020/08/index.html","cfd93c3d18c4928fc683305337bd7d53"],["/archives/2020/index.html","8b979cfb5c8206bd25a875dffff2a705"],["/archives/2024/05/index.html","2ae2045f1de92a20e115e315f6fcfa71"],["/archives/2024/06/index.html","9da7cea92a314b18d9dd722826fb724f"],["/archives/2024/index.html","c61c75445fd3298389d45461a2a82cf2"],["/archives/2024/page/2/index.html","68d4293a7f3753d7f1aec15b0293ac38"],["/archives/index.html","1affa1999be95f3744cd54f2442f7538"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","6b4eb38ffc1791d397d1527ca787b0e4"],["/categories/Daily-Life/photos/index.html","af6bd1521b683ae5efa16cdbf54707c3"],["/categories/Educational/index.html","8a89c3fd8e8316bafb48be18898efa0c"],["/categories/Educational/page/2/index.html","d880dbad44337b9498b7bc764bcd2698"],["/categories/Educational/python/Data-cleansing/index.html","b26feb8656fec78a8d059689732ff636"],["/categories/Educational/python/Web-crawlers/index.html","da7752e229b8af02efa6899a423c54a1"],["/categories/Educational/python/index.html","ce880e9fa25dec6ea534385678264d9a"],["/categories/Educational/ruanjian/index.html","28d29d2dd07ec760c9d69f15d687c8ed"],["/categories/Educational/shoka-theme/index.html","00c7353c88ebd61743dc7ea66fdbc541"],["/categories/Educational/weixin/index.html","b4b701575ff40072c4e2901521de2fdb"],["/categories/Healthy-Living/index.html","d6ea1317a3181c9aea04b8a999e7b87f"],["/categories/Interests/index.html","37388deb8a94cbb424c9ffb911b09541"],["/categories/Social/index.html","48413746730e5c5e42fc5268724964e6"],["/categories/Work/index.html","b65cff81a1a3366981ce626434158818"],["/categories/index.html","17f80d696bbd94717d4d5d7d82b3cb34"],["/collection/index.html","3cb6ac27d6a6f7775940dd0bd85c67d6"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","d9d10903a843d7a31398109fae07a934"],["/js/app.js","b3c0ff4cada84f6f3980b2e923dc037a"],["/page/2/index.html","23e127225511b87dd4add87cbc7e6a31"],["/resources/index.html","90a50d9a1c9f5d374cb664c81dcfb544"],["/sw-register.js","ecf7aeb94dd55a76f1e155693d13fd51"],["/tags/Hexo/index.html","e1fd5e14e84b999e289211574862358a"],["/tags/Markdown/index.html","4a3ac61df6203137f5f2ec731a33cac4"],["/tags/Python/index.html","8c7c4c8967c2f4f2624c54c8faa3140a"],["/tags/index.html","9fffbf89e6b4f6cbd82aa9140b2b8289"],["/tags/shoka/index.html","a52149d4e969f3628553aa137003cab8"],["/tags/微信小程序/index.html","9cf3665092e80ca1ef12dc5b426b2557"]];
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

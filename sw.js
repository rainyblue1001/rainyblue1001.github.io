/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","9911b4933b6dd28904ded9f2eb4e9297"],["/2024/05/20/Educational/python/Data-analysis/Anaconda的安装/index.html","ccb4b3fe4cb9578670fb4480d4a7c43f"],["/2024/05/25/Healthy-Living/健康生活/index.html","aa5c2b289187e0ba758c8207096b13fc"],["/2024/05/25/Interests/兴趣爱好/index.html","2560b8c84ade7e8fe31aa0445ee69fb5"],["/2024/05/25/Social/社会记录/index.html","88e7d4830489533699203aef2b942527"],["/2024/05/25/Work/工作/index.html","fd7da3db2e0be273cbf7b1f46298a73d"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","9af95ae18fb6326ca411336a0692e877"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","ffcccb65f34bec7981af76b7ccf1233b"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","b4609afaff3c4b32362634ac1fb00c17"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","55eed055f798f316a94447ed79a2ab4c"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","ff57adc7cd6e85dd5898e2288d801b34"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","409ff5c230fb257ec6421d45becb546b"],["/2024/06/06/Educational/python/Data-analysis/数据清洗/index.html","62a5ae7e7ad2110ef8efe7b01b3d77ca"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","8f2a8b22ad88806f827fb708ab063916"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","404b97f9073b94f7115280e566336054"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","5ce01b82c140d0224ed254d2fe990f4a"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","0c24c1023f304c667e6034619af34ec9"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","d5ca74f0e091b187277ac1367d6b7337"],["/2024/06/08/Educational/weixin/微信小程序复习提纲/index.html","764ed2dcac45601b0dd76d226cd7cb6f"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review/index.html","e9adf9775257598d265188cde39fc347"],["/404.html","bd6c5d2f75a6f53eda0bb488313575c4"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","ccc11bfcb0c971319500de94e5ac58f1"],["/archives/2020/08/index.html","525bbeb1057418484c829ae01aa3f028"],["/archives/2020/index.html","4f565b1e644eedb3d73e040e6bea1ff5"],["/archives/2024/05/index.html","a6261f154ce40bdfd13614e47f6fe189"],["/archives/2024/06/index.html","7f6caa4ed6e4491498421577830b623d"],["/archives/2024/06/page/2/index.html","359210294870026809e2a459564cf7d9"],["/archives/2024/index.html","353d9d76bcd14cf64f5e23f58137ed26"],["/archives/2024/page/2/index.html","e75abb2794c881b39181d31f0272b88b"],["/archives/index.html","8f2f5cb7799eedc7fc3e24a6b4d2e8fc"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","b9274e92bf91ecfb77d605b99a444a93"],["/categories/Daily-Life/photos/index.html","c56114ef6ad21ca0c859f71ea4cccf8f"],["/categories/Educational/index.html","596850d3ad7e9193581bbd2cdbb331fd"],["/categories/Educational/page/2/index.html","865099f890fcb00484bf00c04d6a8942"],["/categories/Educational/python/Data-analysis/index.html","1ed97caf8982238cfda9be3fcc7ebbea"],["/categories/Educational/python/Web-crawlers/index.html","282a7411bf1c1bf3404ad66f409c3a9d"],["/categories/Educational/python/index.html","18794fcc2ada1007776bf5430d47a8b8"],["/categories/Educational/ruanjian/index.html","41bd1725de23665b95fd3df7442ab558"],["/categories/Educational/shoka-theme/index.html","8bd19abce639cd34f512c4804708c104"],["/categories/Educational/weixin/index.html","a3907d03abf0514ba1a07d432db4ef61"],["/categories/Healthy-Living/index.html","0e04aa75ebb0d496632d7c7685d6d104"],["/categories/Interests/index.html","d7ff7ca0c27d8b1a6be3bf7397779524"],["/categories/Social/index.html","91b86afaf350ed647868da60a2abcd23"],["/categories/Work/index.html","4f8b3656415ae2f33b2ef4387e075837"],["/categories/index.html","8ae89675338b2fd78d5fc3c0c9a58d64"],["/collection/index.html","36b23e8245a7f2599ad6c04ae78354fc"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","a2e28714f5cc63c465569743eb933182"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","fb545af908d77bf937909f70bb37990d"],["/resources/index.html","3d8b2129c5a3aaabb7274979c5e23125"],["/sw-register.js","4ca03dd69cf59193c8bf328794e2f87d"],["/tags/Hexo/index.html","9543510463a69689d46fcd0f98c6f6bf"],["/tags/Markdown/index.html","5c206f86dbc920a157ab24a5b2bcb85e"],["/tags/Python/index.html","beafeb92886bd1679f4f66a874ac47b9"],["/tags/index.html","e20d257088674c0e2c7c554ad447b186"],["/tags/shoka/index.html","10e6c5a8d0d3844e2c596f8d13a27bba"],["/tags/微信小程序/index.html","7b2bfd0d47755972c3e1131f3efcadd7"],["/tags/数据分析/index.html","43e5d6f71501669b3841bc052ac58bbd"],["/tags/期末复习/index.html","cc82e276d9f7eececcaa5be5109485ca"]];
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

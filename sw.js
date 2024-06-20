/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","407200caf034182fc752eb75b8174c2f"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","dc0b7867409a556f9ac41374503171ae"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","5182e99521c3e00e3a2f0cf21407ced6"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","7b5437b810450589e4b4467fe5fa0976"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","613dd8aa94c51fc581a44eb486c909e1"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","e4f8205022bdee7d115f48f0c259e367"],["/2024/05/20/Educational/python/Data-analysis/Anaconda/index.html","00185c5bd2355f702a23302d4f1fa87a"],["/2024/05/25/Healthy-Living/健康生活/index.html","ac8c4abca5849b57d7c5aca462867377"],["/2024/05/25/Interests/兴趣爱好/index.html","2095bc2e2752201fe0ec6d83ee7044be"],["/2024/05/25/Social/社会记录/index.html","a7e94f9be485098cf22e1cdb977ba3d4"],["/2024/05/25/Work/工作/index.html","5748176b119fe61c9a3e729fd18210d8"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","b002a9225dc390ced6db49221e412d2b"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","9418ea905a7aa9fb105f972bc09c3276"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","db4865ffd247b9989fee937fc0e1ab47"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","7a65e06a74021dbfa14c54839b4493f6"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","033a12cae500e45becb24bcb57f0c0ca"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","d4b749866ef31e2526db00b1a5ff2c82"],["/2024/06/08/Educational/WeChat/WX_review/index.html","ca920bceb80e5e4af79e87e35f1aeb40"],["/2024/06/09/Educational/Software/software-project-review/index.html","f1b82fd633f3b40d4d89e9769def1025"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","0c37db383c7665f6997804cbae2f9c42"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","bd8e8d8eba2401fd081fd6e0f7d1117d"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review2/index.html","f481e26446b7cdc09cc365399da4fff9"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review/index.html","eb447fe1d7097f52c5f9d98a170391f8"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","f1a32a101e7e605370143d4b2a2c6eab"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","d169cf616c895da5734aeb0e12d10314"],["/404.html","c5824c0b34a286d43023e95ace3d999f"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","15ea8a7e3ae366ad6a26a350e24901f7"],["/archives/2020/08/index.html","381afb059adb86ff9f35b8451b2b615f"],["/archives/2020/index.html","d963affeac3b065e5b1e976f1cdd7163"],["/archives/2024/05/index.html","92bc8556f65356834238fe211d3be885"],["/archives/2024/05/page/2/index.html","b45d4255b39c881478f29cf5aa715741"],["/archives/2024/06/index.html","45459942cb52fd3bc64a9a369bf9d348"],["/archives/2024/06/page/2/index.html","d91f3cffb09a305a1f8b5be3b24eb299"],["/archives/2024/index.html","cb077b1b10c1774d158e1185c224c2db"],["/archives/2024/page/2/index.html","89bff0d510012126a63da2dcbfa2f4a9"],["/archives/2024/page/3/index.html","d3248c6db3ad04402c667f9aeee7f855"],["/archives/index.html","ad18c4e60782d3eab42a480e3140db14"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","d3293ac07720fb722d7a9aa5a891e9aa"],["/categories/Daily-Life/photos/index.html","0a365d5ea5d27e4e6110822425ca047b"],["/categories/Educational/Software/index.html","986a4e8293682832c204bdee481405dd"],["/categories/Educational/WeChat/index.html","ef820218b2298e390d972efc24d18ac1"],["/categories/Educational/index.html","a8c0687525fd3f4b6b903476340df353"],["/categories/Educational/page/2/index.html","ff70a1032fd6845c128aa578b862e0d5"],["/categories/Educational/python/Data-analysis/index.html","0b01229ca4c1c509ef5d3a884c3cac11"],["/categories/Educational/python/Web-crawlers/index.html","5041ea3777908e5f782e79bc5dc10eac"],["/categories/Educational/python/index.html","3db0b6161d165060d2a335efcbb1e9b7"],["/categories/Educational/shoka-theme/index.html","76282de55ec0cfe01657bb8b34509f36"],["/categories/Healthy-Living/index.html","a7a7b3126799c927f4e5bc90a9b197c8"],["/categories/Interests/index.html","b5b65b85cbc3ee6489af6aad5ca1b58f"],["/categories/Social/index.html","0a127ec341b4edba3fd14359571b2d9f"],["/categories/Work/index.html","c5c6fb30d6cff480a2470ae7d34107ee"],["/categories/index.html","ce021081ac1d25222917e84db43b6fe7"],["/collection/index.html","d03d0f1ff17acea462df1844dc6136f8"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","3cebfdd495c632887add121bd478b7ec"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","684c06f76351585fbb869999d91ceb8b"],["/page/3/index.html","9f434756e35afacc625ec0e8375f99cf"],["/resources/index.html","0d6c67e1d4e771dcecd5f8e179a4dc4e"],["/sw-register.js","58576d3b73aaf71c006c2f16a9ba4f6d"],["/tags/Hexo/index.html","19750cf61645317d520c54b3c5fea47a"],["/tags/Markdown/index.html","e753c7a3a4b42421924d91f7e05e4ca4"],["/tags/Python/index.html","1d4b06eab1a04fd68b187190bddd6945"],["/tags/index.html","ccf2249b3fdf9486909e57372b7d65a3"],["/tags/shoka/index.html","f12c77421f5c37420a6ee07fbefc2e41"],["/tags/微信小程序/index.html","8cb9c528929be2e5228b7d0c51e27856"],["/tags/数据分析/index.html","9ebe0a435daf44cf83affa7d7460f596"],["/tags/期末复习/index.html","da64be28a71e5f9f671f2ed3d87ae378"]];
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

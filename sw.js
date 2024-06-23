/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","371fb26c57d60008abe6b2b2c0681e66"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","f8270526eb351e59ff4de228ccc7fe61"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","5f45e0ba3690b4e2e5a3c0f92a569f1d"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","b454aeb3b63325631b7f55a128999caa"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","77ed41d30369d8eb643b12bbd797b4bc"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","77e79a64978e7ddbc295ebb53bffe574"],["/2024/05/25/Healthy-Living/健康生活/index.html","9876eadf5c366d068dfddc637c4e2354"],["/2024/05/25/Interests/兴趣爱好/index.html","87208ccf548153948fa31ba94135e095"],["/2024/05/25/Social/社会记录/index.html","cd85a013c35bf893758f15a1c9da3b3e"],["/2024/05/25/Work/工作/index.html","64b34ccbe702cffa4589cf222f924286"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","754c77cfac85bb0390be62a916bd84b2"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","f5edf648dcde71901a060153148075d8"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","d47b88d043154b7c82db46eeec5c62a8"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","086bf432d375141c74c3e85cc1520999"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","4462b5b0b364f278ca852be2684bb73e"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","796b458f5c9bd48f2eb33db4c75eda20"],["/2024/06/08/Educational/WeChat/WX_review/index.html","d3fba7681629af002f49141760cfc44e"],["/2024/06/09/Educational/Software/software-project-review/index.html","ce3ddec4fa4b92a2ae3746ca16d8a60d"],["/2024/06/16/Educational/python/Data-analysis/Anaconda/index.html","e2b603a5e8bce30778d952f37d7676e8"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","d29d4bfe876af59e352e504ad14c8be4"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","ba5e7cc0c54cbb7f7d05900f4764258c"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review/index.html","2a549a814185dae1ac86e6903efc372c"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review2/index.html","7e500dab5e2e67b90cf36757297fbaa4"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review3/index.html","9c62d950325a8356b8448a02db9c443b"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","3bf889f9e9e677b43e2634744c6de627"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","6e1b8c86dc1eb972310af83974e3ff57"],["/2024/06/20/Educational/python/Data-analysis/Data_analysis_review4/index.html","5fb0b999a3c2877e38a83de9b1277b34"],["/2024/06/23/Educational/WeChat/WX-Questions1/index.html","e7a44d7b369d90b8e61c96515a344fd6"],["/2024/06/23/Educational/WeChat/WX-Questions2/index.html","a3c529fc39e4a644d8025a9d95649923"],["/2024/06/23/Educational/WeChat/WX-Questions3/index.html","734f89508bbb8dc6f8d4f3231dc69d99"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions1/index.html","ff46c504842e66f8adfacc13ab775540"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions2/index.html","4c2fe538bdf3466bea2302400dc247a0"],["/404.html","c2699859cfa367681aa3449d622f4ad7"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","71a710aa7a1375bc8f2bd689e8ce0c18"],["/archives/2020/08/index.html","f9cae779967198c8ecf86b40d2c84de6"],["/archives/2020/index.html","708cb3674f97c4e8b690851ec39def1b"],["/archives/2024/05/index.html","e4cce223077cabbf3fe92b0d10659d60"],["/archives/2024/05/page/2/index.html","50e23c11289c756eb539e08eed48976f"],["/archives/2024/06/index.html","879f4d8cc67cef4d597fb1e01927358a"],["/archives/2024/06/page/2/index.html","738f85dcb8cf182b5e6378983ee63065"],["/archives/2024/index.html","8b41e5e40497a51ec5bfca37b43c5bbd"],["/archives/2024/page/2/index.html","8fa33dbc1275e65d2a462b3dc5d04f32"],["/archives/2024/page/3/index.html","4544cc610798c8f3d23b1fb73d30e8e1"],["/archives/2024/page/4/index.html","e5bf75e93882d8d37846543d7baa96e2"],["/archives/index.html","6f87bc856fc83d2f3ed1115e9175711b"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","83f5db2004cec5929dfd2a44eddbe76f"],["/categories/Daily-Life/photos/index.html","4502243e0eab71e2f6558a6f9c197249"],["/categories/Educational/Software/index.html","ee3adbc75dbcb40fbfe30c7c2fa010a0"],["/categories/Educational/WeChat/index.html","c72feaba7f3d5b52bb9cc73d676b2a2f"],["/categories/Educational/index.html","90d16f6309ad2446c4361a814d7d005f"],["/categories/Educational/page/2/index.html","cd71fdcf9dae117746ae00e1ea9a3a2b"],["/categories/Educational/page/3/index.html","da65d1f9a8391aad74fb8e0d73adc151"],["/categories/Educational/python/Data-analysis/index.html","f98bc8efafafc4a7272516862e26c3f7"],["/categories/Educational/python/Web-crawlers/index.html","36dc3a9158d01eb3dabc1be67fa0331e"],["/categories/Educational/python/index.html","7a9ed0f86c31ee218ecc523f407ff284"],["/categories/Educational/shoka-theme/index.html","d2884fe4458e1cfe706a5c626a522a64"],["/categories/Healthy-Living/index.html","bcc4071d105561ea5b5078308d1bf288"],["/categories/Interests/index.html","710eea860a3ca095cd81020595b62b2b"],["/categories/Social/index.html","ac508557fcd5b3509165997fc0272d0f"],["/categories/Work/index.html","ccb08bcecf83e134a8f84aa45dcc2cde"],["/categories/index.html","83bdf3f1bd6bbb9ffc7106bfbd8b5527"],["/collection/index.html","d0d60dc579285c36c987747497bca0ad"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","580efd4ec5b2bd9eeb9aa798408c2bae"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","9a11821184b4a9505f96f47f981afdf1"],["/page/3/index.html","752e156ab31cf1a8dc9cbcaf0be93e77"],["/resources/index.html","235a2679a3ccfbeb29f6d5128679115e"],["/sw-register.js","617a25351a23c92d8ea3c89b613c76dd"],["/tags/Hexo/index.html","0d81bd792a60a8a786aa537c50add238"],["/tags/Markdown/index.html","9502105f18f3db784fee1fe1679cdb5c"],["/tags/Python/index.html","fd905ad01f95aee602b180c9cfe60099"],["/tags/index.html","d37f29c2650b872d11afb526d4b184a7"],["/tags/shoka/index.html","dc6521dc046f6f9916df1f4a8f172119"],["/tags/微信小程序/index.html","c5411d8836e81072972247268d164452"],["/tags/数据分析/index.html","170bd9b1f303fdd72e1da061a4c34702"],["/tags/期末复习/index.html","b323330c5ad8949c714e309f7fb42068"],["/tags/期末复习/page/2/index.html","fdaf5548912a1335486abf46923cfb07"]];
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

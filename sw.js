/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","e759da1b0f20f72d4003b251e5b7a37d"],["/2024/05/20/Educational/python/Data-analysis/Anaconda的安装/index.html","13318a1672520f881ed09cc513e45eaf"],["/2024/05/25/Healthy-Living/健康生活/index.html","96405822249037abefe9b9c4cf6a8c97"],["/2024/05/25/Interests/兴趣爱好/index.html","cf08081ebe455bf5cd89648803cdc889"],["/2024/05/25/Social/社会记录/index.html","7685458f90e345dd7f33e06138fb9b78"],["/2024/05/25/Work/工作/index.html","9799351ddbcd0713ba0823de01ec77a2"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","ae41c4d0f9a81dd990c2b7da470cc3b3"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","3e7776774bd952acb5adac6bcaf32e15"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","cf2d3d1985ce4c046948c4ce34f1fb3c"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","7fc9073a1108160fdf3b350bc54139d3"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","8970187151dd2cd3e15f25c16699cb41"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","b4863a0047db35e5e385fed6f07b9e74"],["/2024/06/06/Educational/python/Data-analysis/数据清洗/index.html","49efac97b69d11bc3777eb5e4e219688"],["/2024/06/08/Educational/WeChat/WX_review/index.html","4fbd425a70528e3e37ef1eff493ff126"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/config/index.html","482d11b13ae56c9f4e6f579d4c47b33d"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","6a8c6b9e6cdbefc5ff11268789055f68"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/display/index.html","614cbc6b60c47702a2b43da5302077b8"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/index.html","f662b8f5da6ac8c7a6252259a1866189"],["/2024/06/08/Educational/theme-shoka/theme-shoka-doc/special/index.html","23dfe5ad4d1c993700624b7edd173602"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","e6560f4fdbe4518ad6f13dd5692606c3"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review/index.html","2cefecc6d74cb9ebfd480e8b7335e1ba"],["/404.html","6b1cf2192eba3c42bc962e99677268d6"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","500d85fd7760a1b8070351b0a2f5ddb6"],["/archives/2020/08/index.html","0d4459e8abe7095b2dad19ebbe15dd35"],["/archives/2020/index.html","cfb694d4d6aba642977ea42b36ae5bed"],["/archives/2024/05/index.html","163ce8bde303167cc9e2ebfc6d41d902"],["/archives/2024/06/index.html","64c435d8fd1d5ffc540e8cebb0982272"],["/archives/2024/06/page/2/index.html","d85cc2a55c69fb79ba757835e8bc3964"],["/archives/2024/index.html","2e5c74c0cce11861bc84e5aa5592c358"],["/archives/2024/page/2/index.html","ffdd77ab89911af3784ae53d40bacb65"],["/archives/index.html","79fd242735f9f9df42235d1e19c0de2a"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","4149e24ce24c203d201bf0bb1cb300fc"],["/categories/Daily-Life/photos/index.html","2a1932547a40e46779ed5d14232ef72d"],["/categories/Educational/Software/index.html","f1c41f04f3ebacf817c0c81d5337cfa0"],["/categories/Educational/WeChat/index.html","b54f66b1b2766f217d9ac06ad835afdb"],["/categories/Educational/index.html","4843a641a9dddcb12fead8ae4e003940"],["/categories/Educational/page/2/index.html","e93e22188d8c0419d901dd00db41e401"],["/categories/Educational/python/Data-analysis/index.html","a4f71f1e5475ec538abde7035dee2177"],["/categories/Educational/python/Web-crawlers/index.html","be6ed3ee16fbbd5622c3443f93d2aa9e"],["/categories/Educational/python/index.html","f48f7f9f95dfe0230a6ff1d162f9593a"],["/categories/Educational/shoka-theme/index.html","28b76216397a77da30ddb81a36a494fc"],["/categories/Healthy-Living/index.html","99b36d8e69dac900749cb4cfa4f5a198"],["/categories/Interests/index.html","cb22de91eef3066d2b007ce033527467"],["/categories/Social/index.html","0922c3407bf3e2bd081606f204b41874"],["/categories/Work/index.html","4753f33bba06d26b40d9550fbc0831c2"],["/categories/index.html","5b43aa2a67f741e655d9920689950606"],["/collection/index.html","fc85d014c2f9f6854b18b29fc25636f1"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","903f562c121885b0102d25f207ae7332"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","7c4a5c75c53d04e818088e3bceca2bab"],["/resources/index.html","7f65f545555823e1183a52e8cf957427"],["/sw-register.js","6a799e1717953345976516183f2c4942"],["/tags/Hexo/index.html","5e2117a57399634e29f494790d2f621c"],["/tags/Markdown/index.html","8242765e67534f86e57690b8c0faf0aa"],["/tags/Python/index.html","b6f19787b07b3cd16068c61df7c80b29"],["/tags/index.html","e63dedda8cb7d0b690e2ef6a7574c490"],["/tags/shoka/index.html","15b206320e1838e544db0f078c9156b8"],["/tags/微信小程序/index.html","9110934fa79a683e638431827c690025"],["/tags/数据分析/index.html","6f9f5512c24575c7812545e54c41d85f"],["/tags/期末复习/index.html","ae749f701b476b4c6ce6fa7ca819d8a0"]];
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

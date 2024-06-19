/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","3b77bdf1400d37671ebefb48577cd396"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","51d4f38f25ab923dcab4a92146686428"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","59127a73ab9f11f99b20d9cdc42fba2e"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","6ddde3bcc6dd0164543a4293be66847a"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","f0c61b391e19b2d8439cf3e0bb72f237"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","77b647f51aee8a3e969569b5601e2c3f"],["/2024/05/20/Educational/python/Data-analysis/Anaconda/index.html","7bb5e8e08d58152adeaaa34701871c43"],["/2024/05/25/Healthy-Living/健康生活/index.html","16f9cd438a9c08a7a4b0cecb10e97563"],["/2024/05/25/Interests/兴趣爱好/index.html","e6821d9918f681556cc7120115baa56b"],["/2024/05/25/Social/社会记录/index.html","c372169f2c5d1a5b9336834ba9a546ba"],["/2024/05/25/Work/工作/index.html","1da39c9bfafcadcbe14f18be120d1df2"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","d3b83734891e529857846d51896d14da"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","d286978e71199367b911ca11b07eee71"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","105fd19df664aa252f7b10fd1bfd8051"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","5a58b2edc6845a12488731c71b635daf"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","03e774179fa2840acbac82eef44d5acd"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","f21eb700cda33950a42c139df0e7ed2d"],["/2024/06/06/Educational/python/Data-analysis/Data_analysis_code/index.html","73c2397072ea874eb204e9fd2c5e2357"],["/2024/06/06/Educational/python/Data-analysis/Data_analysis_review/index.html","d6a69a0673a54ef89f5f2c8219a0c8af"],["/2024/06/08/Educational/WeChat/WX_review/index.html","2ddf4d474ca99756888c81b47ab791c9"],["/2024/06/09/Educational/Software/software-project-review/index.html","b94e26d12fedc2aadfff61faf05c66f4"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","93de9e0cf5c8bac83a89cae2f2eea5f4"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","5a41cf558a4d46b6a68486d6b6cc8523"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review2/index.html","ee8a9eea823d7e1c4038c8834d2ce824"],["/404.html","3a4724d09990ef55895265d8611c6a1b"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","02ea68e6db24839fc4977f7433c52a76"],["/archives/2020/08/index.html","309a00d607f7b20f81ba1f14208a4278"],["/archives/2020/index.html","86f79370b7bcabe9495c64d09da7ce0b"],["/archives/2024/05/index.html","bcf5ac7a04c787e5092dded8bc99a325"],["/archives/2024/05/page/2/index.html","7791745069a92e515c66f14195f6c933"],["/archives/2024/06/index.html","b1c133eec00327a9bca73ddac20d300c"],["/archives/2024/06/page/2/index.html","e52937af8551720294558998a7a74176"],["/archives/2024/index.html","bbf522e151120ca246e4fa0359326289"],["/archives/2024/page/2/index.html","e5de5ea05d2aeae179c76db3a0cd5b2c"],["/archives/2024/page/3/index.html","f6f76cc7a305a2157b0f7a269cb87ebe"],["/archives/index.html","606164b1ab4d3fe1b19763fd59a1d07b"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","106881d8cbacf852eef517b6ea51a72b"],["/categories/Daily-Life/photos/index.html","a6d08e4fdddc88316d39913b9ee91094"],["/categories/Educational/Software/index.html","e8747fa2718f4b046c49f97cb46b8537"],["/categories/Educational/WeChat/index.html","7cfc02e2c572943383cbe7329852517d"],["/categories/Educational/index.html","12ac0b2cbb43886f0f1e8bb52a742c44"],["/categories/Educational/page/2/index.html","5b04e466957d7161854e6a61f130d8e7"],["/categories/Educational/python/Data-analysis/index.html","3d47f485d114f4501ade8e7f2b3e84c6"],["/categories/Educational/python/Web-crawlers/index.html","ea3e6a19e5f066e793bf26bd36bd19de"],["/categories/Educational/python/index.html","364996bc0512fe16c07b7712e18a1b67"],["/categories/Educational/shoka-theme/index.html","5014a79a4905410741d05e08c304aff2"],["/categories/Healthy-Living/index.html","df90f5568075004de91b2c355a0ec5d2"],["/categories/Interests/index.html","558d88bcdb9cea2703053378cde22dca"],["/categories/Social/index.html","c48600aaed3f12a3151c9c074518e40f"],["/categories/Work/index.html","7189fb23554b5899063b9cbd4b906d6d"],["/categories/index.html","9b3e822635769b0faa52c226050b18a7"],["/collection/index.html","c84a59acf0b4562f4b222e0edc9fa012"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","7fbe18213ec6544bb9ffc86aa8c888d8"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","e41dd349e7c00d176d9b2cd95c28ef4b"],["/page/3/index.html","27588a1e34c183c44ba7fc94391763a4"],["/resources/index.html","34c4ed26f9d67f5d3fc135f5d6a641c3"],["/sw-register.js","c127920e7e442f0978d6a23cac994cb4"],["/tags/Hexo/index.html","24c7fb4b966f45dffc8e8e696ce4d421"],["/tags/Markdown/index.html","f76421d5a183cc01e04b9018ad664124"],["/tags/Python/index.html","f8549bfbfaaf7920175eb56cc574022f"],["/tags/index.html","4aaeb4d0e4d64911f14aa8783fa0e70f"],["/tags/shoka/index.html","499cb126c221fced41302c3e9c10565c"],["/tags/微信小程序/index.html","348f91ec2e762d0d17107c5b05bbe835"],["/tags/数据分析/index.html","6419caad3c35344eab7d65e5d19c0a95"],["/tags/期末复习/index.html","751e8fed88a403ba99459debd33faf51"]];
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

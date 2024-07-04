/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/04/02/Work/civil-service/civil-service-list-moban/index.html","ce5756bd4b28dd43dbd78ed4c305ec59"],["/2024/04/13/Daily-Life/photos/images/index.html","e39897facaaedcda12fc96cd3bc185c6"],["/2024/04/16/Educational/python/Anaconda/index.html","dcdbaf6f0db7d197a0e2147245590ddc"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","f21f23fc6c8403c1de369e2ba0f29c0c"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","26f670d57b24dfa557e3e262d2d7bc4b"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","b06b52cfac7c646194924ab9b56f4a4f"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","de0db7c1fe48953cba1f139e1ba6df1e"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","53e7bf34534c5125d7c900b2babc08e0"],["/2024/05/25/Healthy-Living/健康生活/index.html","b77a2b2cf3e69cf5cec32e327840555a"],["/2024/05/25/Interests/兴趣爱好/index.html","f6baa2fa7bb2a79ba290c6c94dbf45ab"],["/2024/05/25/Social/社会记录/index.html","e27fb6472c8a432302cbf3a8c5a73331"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","65756d0f241f04e7df18d52729712398"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","fa44d858c3da98cefc74b42dea9dca1b"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","99bad884755821a8b3a185691f657869"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review2/index.html","c7e1027940a3596c04018155168dd71f"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review3/index.html","49fb4631eda16c650800427934633758"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review4/index.html","efa5c155d1011350c8cd268c959d9932"],["/2024/06/19/Educational/WeChat/WX_review/index.html","5ed2646361799462669414846e414e19"],["/2024/06/19/Educational/WeChat/WeChat_Program1/index.html","87782b03646c119026fbb594b9dee657"],["/2024/06/19/Educational/WeChat/WeChat_Program2/index.html","6d15c199ea30470427ff2522a7ac8c82"],["/2024/06/19/Educational/WeChat/WeChat_Program3/index.html","6bd7df666b02136d154cd845405143ec"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","c7086b0aa64daec0adc62815bc073c60"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","b0d0510bfa3a174219189e4b92e598da"],["/2024/06/20/Educational/Software/2023-Software-project-review/index.html","8c6aad0e5d1fd7bd7894257d8f8a5562"],["/2024/06/20/Educational/WeChat/WX_Exercises/index.html","d9d82ba2699bea294cd1295b8ff15e73"],["/2024/06/21/Educational/Software/software-project-review/index.html","dfbe6746ec566a674fa961b216cba29d"],["/2024/06/22/Educational/python/Data-analysis/Data_analysis_review/index.html","fdad63e9bada12599bbb038f8c761006"],["/2024/06/23/Educational/WeChat/WX-Questions1/index.html","c2186075a99524be146cd18bf497852a"],["/2024/06/23/Educational/WeChat/WX-Questions2/index.html","b7888fd94f13e379c3a9ef25e1689b97"],["/2024/06/23/Educational/WeChat/WX-Questions3/index.html","267fed8e5f981200454ea3e226427d28"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions1/index.html","6e26fa284ea5cf29360825dbdaf13fe0"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions2/index.html","1235b6f0ecc56efb0eed6edb7b9adf4d"],["/2024/06/24/Educational/python/Data-analysis/Data-code/index.html","503a41b276038b9d057f1a46fe20dce4"],["/2024/07/02/Work/civil-service/civil-service-list/index.html","1be05b987fa88241c4583ec76291a5d5"],["/2024/07/04/Work/civil-service/Graphical-reasoning/index.html","afb25ef98c59ee905dacbd0a2a246f5f"],["/404.html","ad843a984078f82bc0f315a035fbacce"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Work/civil-service/cover.jpg","fedc746d06d67409b7d6769ce99d0d24"],["/about/index.html","37b721f4d58afa7d5d372dfb4ebf8fdf"],["/archives/2024/04/index.html","5e9b6073b758f0d5c1fbb658bbd5ed20"],["/archives/2024/05/index.html","6ad2be7f09dec04ab9ff8de36f8211c2"],["/archives/2024/06/index.html","ced41a48f1c4e9a39ce34f2862091453"],["/archives/2024/06/page/2/index.html","ca0723316ce1decba15dafa122b61f99"],["/archives/2024/07/index.html","0c532933532ac160d4828ee8e9fa4dcc"],["/archives/2024/index.html","bbabee78525ace4203f114b452fcc9e7"],["/archives/2024/page/2/index.html","fc957b8fe6447b27fc0e871c26dc8a82"],["/archives/2024/page/3/index.html","76e5d779364c5d4a20cb2c3fbb1fea63"],["/archives/2024/page/4/index.html","4db60716dd37350079b6aab8dbcefe6c"],["/archives/index.html","5773131394845cf99331208cf7b3e1d6"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","2684095721925fab155b6ef3632c2b6f"],["/categories/Daily-Life/photos/index.html","f529d78593924f7699fa2ee8f752b939"],["/categories/Educational/Software/index.html","a2d45defcc36c5578256a14e42484e2d"],["/categories/Educational/WeChat/index.html","261e58ba678373be9374dd2fe260668c"],["/categories/Educational/index.html","8eb00bfb2f65adfbbca59d6b005c1dff"],["/categories/Educational/page/2/index.html","a3e523d2a8656dbf5b47ac1de14acd36"],["/categories/Educational/page/3/index.html","a6dc7bccab1d74dda2dbc7da7c82c01a"],["/categories/Educational/python/Data-analysis/index.html","9908e51001384f044f2cc62a923f6ed7"],["/categories/Educational/python/Web-crawlers/index.html","216b082717febcd540112a8495c57464"],["/categories/Educational/python/index.html","47d152ffbae7aa2297033967aad87afe"],["/categories/Educational/shoka-theme/index.html","a73717c9753998ee99e13b4e7e553d62"],["/categories/Healthy-Living/index.html","8c9d0d49f3a711645239ea221b0aada6"],["/categories/Interests/index.html","d659d26ed150ed34ddb22876b60b062b"],["/categories/Social/index.html","ad675015ecd93d145715d07c329a2618"],["/categories/Work/civil-service/index.html","24b6b384bb159d18d5424d44c9a1c7a2"],["/categories/Work/index.html","7baf4e190cd5c8e0a1f5e6e0beb5ec3d"],["/categories/index.html","8612a31a0f7817b35f5ccaa4a5e12e8e"],["/collection/index.html","3d8dc211a66a9c3a011023cc38867277"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","f7d3f87b3d5f4b1bc9ee07adc99c51b8"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","d70cd5a090aff4b728061fea3a00b907"],["/page/3/index.html","e80625458967091f4631ce418da0385d"],["/page/4/index.html","70f14bd5caf9d2405d1a3f23703b1d75"],["/resources/index.html","06b4debf4d649317d1a62e648aa0bcf8"],["/sw-register.js","201769ae4cdd4ab14c5f568f4f8d46d5"],["/tags/Hexo/index.html","9d827d07393788692bffadef3f516773"],["/tags/Markdown/index.html","566449567b5c5f0ebfbbadd9cf634eb6"],["/tags/Python/index.html","376715f8c6831abc93f69d5622af1a99"],["/tags/index.html","c05ff5bbe71aa20f6ecd58586a3ed14c"],["/tags/shoka/index.html","539141fcd3049d70e5a197eee5ba5d53"],["/tags/公考/index.html","9f9de5cf1bfe4c98a54fe9316efbbd43"],["/tags/微信小程序/index.html","adb207a015886ced686ee1db7bbb0b15"],["/tags/数据分析/index.html","b8270d7546770d800a76ab28f37e5b75"],["/tags/期末复习/index.html","fb51afc50429718cb00552c15fb2cec2"],["/tags/期末复习/page/2/index.html","f912b98b025e40d8ef1c7dd9452a7034"]];
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

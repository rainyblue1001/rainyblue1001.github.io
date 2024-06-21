/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","d9a175a2d039bf676578c52b8bf86843"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","69a48cc04491502cba55060995a69cb1"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","86e33cca879318fbc4c735448b70c16b"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","5e7abc7a3f3fc58de4ee7631a0d5644b"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","1d18a0f19a1d4f0ea38fb70034f0a8a4"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","e5393011d1b19c48dd6de193ecb6dc57"],["/2024/05/25/Healthy-Living/健康生活/index.html","d60aa6d2bb59925ee955e4368e724b9e"],["/2024/05/25/Interests/兴趣爱好/index.html","eeb63e5a2b08d02c97226a93643efa4b"],["/2024/05/25/Social/社会记录/index.html","7ea5d268e3230a4f397676abfd3f85aa"],["/2024/05/25/Work/工作/index.html","f7b8f15109b54de080b10f3d45d273f7"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","6915b87a1e6db5b97ed0611b4bc832b4"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","0a98ce7017fb6dcb95884007bed8686e"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","59c61a82daef9ed7c04bebbbe7cc1a45"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","ec9c13a66bc86e6749d3cf3bceabc28b"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","f86e748cd7ab3882ffb6f196308a05fe"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","21b0ee263237ff0a4121c957526cae24"],["/2024/06/08/Educational/WeChat/WX_review/index.html","9a60f0ed7e6ef3e0b6025b556834b34d"],["/2024/06/09/Educational/Software/software-project-review/index.html","4009d63a33eca49e3d2a41eba3954081"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","bc11020636658de2b9a060cad4e11d46"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","30658c51c3dc9642a67a4aaee7616a35"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review2/index.html","bf56f02fbdbe288c0f679eb7e6c3c5a9"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review/index.html","0391cc05520a122693ad36e120e094d0"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","f065125bb588f9545c78eb87e70b77ad"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","becdd1dbd3f3334aa318308621a70e6b"],["/2024/06/21/Educational/python/Data-analysis/Anaconda/index.html","5901f24ba8ed415900376bfc5ce5989f"],["/404.html","34a5aa55a9d1283df53cedc12589ca2f"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","70818a6be26a35e8ba03d760add8c6f7"],["/archives/2020/08/index.html","4d64de2af56caa6ffb06756cb861337f"],["/archives/2020/index.html","d1074a959ea61741ecfa3f04d4985e3e"],["/archives/2024/05/index.html","e9edfc84a3cc62b6321b141b8fa80401"],["/archives/2024/05/page/2/index.html","e0161c3a4bb5c35a71673e3c22239bf2"],["/archives/2024/06/index.html","73b75d03dd4dd23d6db6e75867163e97"],["/archives/2024/06/page/2/index.html","b7d3bd1a77eb03e71a2fa875befee6f4"],["/archives/2024/index.html","8c9b50c231ddb39adc70cee0fa9c9021"],["/archives/2024/page/2/index.html","cdf65de42bbd5572c51a1d09867bd395"],["/archives/2024/page/3/index.html","6881a6f3e34ab864540e21ceb85075a8"],["/archives/index.html","e8c61ae8edb5daed87b3e2a13debec1e"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","c87928c07a43a3aac943b1f297e697b6"],["/categories/Daily-Life/photos/index.html","7832fc647f86f1e3d1c5ba4ea033db2c"],["/categories/Educational/Software/index.html","a7a637ff165689297d254c3194f6ad65"],["/categories/Educational/WeChat/index.html","58924c77fce40261b5d9df42c049e46a"],["/categories/Educational/index.html","4a86701c196e660f121cf71d23fe6715"],["/categories/Educational/page/2/index.html","354364faac1bc7dcb16d7db85659480f"],["/categories/Educational/python/Data-analysis/index.html","fff07c5e899b54c054880738125a916e"],["/categories/Educational/python/Web-crawlers/index.html","12a2f983e50205da4cbb212bc7756f41"],["/categories/Educational/python/index.html","9124a2f96b8a2ac006a20ef362365d28"],["/categories/Educational/shoka-theme/index.html","329ccd3fb0cb8b090a6d56e9ae38a659"],["/categories/Healthy-Living/index.html","411d2b11586bf10cfcc3405ae87959c4"],["/categories/Interests/index.html","6cc62edc52d2bb0e4ad77819f37b20c5"],["/categories/Social/index.html","0f9df32cf31273e6138688c17ede2e8f"],["/categories/Work/index.html","8d9ffeb3ffe87958813307a407d58eee"],["/categories/index.html","bd0bdd2bef981230f610804a5b0d6741"],["/collection/index.html","8d84cc2c341d087696f76625714741ec"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","dd077e83c3cf99f9e9d852ce42c8b27c"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","eadaec4947d453f9191cf4977de61ec3"],["/page/3/index.html","833ea1e5ce96b85dbbfdcec157480700"],["/resources/index.html","ab60b103a42cc654f597a28008835d5d"],["/sw-register.js","b6bb20f183ff47d70a6fa90096146714"],["/tags/Hexo/index.html","13bfa06fba000c260368692014905c9f"],["/tags/Markdown/index.html","1cf4b0f636679dcb91110ad4bca27310"],["/tags/Python/index.html","82dfbe4b1467142d4160fdd2ef24d241"],["/tags/index.html","23b62a2c98b1ccb69d65c0a304f8654a"],["/tags/shoka/index.html","075edac4abd3baf39060169cdd6f1d08"],["/tags/微信小程序/index.html","3d67adcfac800717185067726c79f0f7"],["/tags/数据分析/index.html","409d63bcde2194bca7866083d7ab69a3"],["/tags/期末复习/index.html","fc5ff012063f77e8a8c1c35dd6a9fff7"]];
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

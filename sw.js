/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/04/13/Daily-Life/photos/images/index.html","eab2c28e891e207ee9b56658d3c3df09"],["/2024/04/16/Educational/python/Anaconda/index.html","f37d2fca90f345c14f8554d6de52b040"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","ee4167eef2268e8620546a0f74cabba1"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","4a7542502c5455a2ed09acb3a753bc35"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","47b48024728e92ae3160764f41e7b5be"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","dc736134a3e36da3935761718b0bfc06"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","bb62b40d62f854027b5095a5cd7d07e6"],["/2024/05/25/Healthy-Living/健康生活/index.html","88871dff2bbd6aaf33a72796be5199d2"],["/2024/05/25/Interests/兴趣爱好/index.html","7589ed951fec42456205b962fbb7165b"],["/2024/05/25/Social/社会记录/index.html","8ba2178abd6c851177326e69646d5e20"],["/2024/05/25/Work/工作/index.html","f32f60fb788d7c2f3b1a6225f6e858dd"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","16d96be4a6eca81357dacf15575c6f38"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","4637669393167a38475418a5cec2f333"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","f65690aeb8918ac14378a8aefe53fa8a"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review2/index.html","ee9232d5ae44c2c48510a7d48c6f3722"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review3/index.html","d34edb18bee5eeba2a6e942d6cb1af64"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review4/index.html","c2b1ff00f752bef9fe77b4b60bf5253e"],["/2024/06/19/Educational/WeChat/WX_review/index.html","604a01c60ed8bea9855d84d0aa882055"],["/2024/06/19/Educational/WeChat/WeChat_Program1/index.html","2fb8ae88c07a993e4e3c86c131736cf7"],["/2024/06/19/Educational/WeChat/WeChat_Program2/index.html","e4a6f1b83432d108356e5bd909250eb4"],["/2024/06/19/Educational/WeChat/WeChat_Program3/index.html","698c68a69ebc9f9726e88da3154ea3d4"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","52d4336d53644adb6293f2a22a2e8b56"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","aecac0cb8af151f459420846659dd32e"],["/2024/06/20/Educational/Software/2023-Software-project-review/index.html","8c8245a771e7ba687e3e4cb7c1751af0"],["/2024/06/20/Educational/WeChat/WX_Exercises/index.html","69a7e1850500ddc692d2ab1b6fcb11bb"],["/2024/06/21/Educational/Software/software-project-review/index.html","617a6b2545899817f34b65af624f70fa"],["/2024/06/22/Educational/python/Data-analysis/Data_analysis_review/index.html","7df0d0b75df301d7e785f44c7a28b62d"],["/2024/06/23/Educational/WeChat/WX-Questions1/index.html","8ef5bba99a914c7817850dc06301f854"],["/2024/06/23/Educational/WeChat/WX-Questions2/index.html","20c606a6a2173953b484e4581b5656dc"],["/2024/06/23/Educational/WeChat/WX-Questions3/index.html","19720b5c1a28a9cc0013fb566abd1a59"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions1/index.html","e508e8f2ab47b8097afe354f46b7bd2d"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions2/index.html","4f4fd6acaf3b579dfb92543dc3db154b"],["/2024/06/24/Educational/python/Data-analysis/Data-code/index.html","ac00397ae82775e2e65eb8bb88886d28"],["/404.html","75f1206744cd394c74e4bf1f2e5a552c"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","76c375b6d3a56f1e14c04438096d2bed"],["/archives/2024/04/index.html","a711c5f6e754237f902d20fb2c292ede"],["/archives/2024/05/index.html","5ec3978025076535846d1d8b8bf9415f"],["/archives/2024/05/page/2/index.html","bbc3f6ce79af9a0729c4464a217f421b"],["/archives/2024/06/index.html","c44daef8036e07145184ad36ec5a786f"],["/archives/2024/06/page/2/index.html","bed1870d6fcf4e11136a38801d8317a4"],["/archives/2024/index.html","9dbcecad2d482de9442d9618a2a84784"],["/archives/2024/page/2/index.html","459e4abc0d49a41c7984c073c8545430"],["/archives/2024/page/3/index.html","59a764bbc06e06dd88802ef3bf98c9f1"],["/archives/2024/page/4/index.html","2a374fcc98c026992a809077f2c0888b"],["/archives/index.html","c8c9e6f0dc267cc8814d81e4872ab2b6"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","6836785aff3f7d60ec746e8fe3473021"],["/categories/Daily-Life/photos/index.html","4750c9381767fd185ea531a7ac3c517a"],["/categories/Educational/Software/index.html","3c61c956c2ed2f095c409bb790ed0822"],["/categories/Educational/WeChat/index.html","20ca2032a132781ce02f417886efc89e"],["/categories/Educational/index.html","0a91cb9b829b807b27b4a7a1444a3175"],["/categories/Educational/page/2/index.html","d93a9b4dae116f0dbe4e4133f6dcfea7"],["/categories/Educational/page/3/index.html","74fa1697a40e028d412390a03262e83d"],["/categories/Educational/python/Data-analysis/index.html","cfe7d279f01cddbbe6faac3ddbe61c76"],["/categories/Educational/python/Web-crawlers/index.html","c7cae811083d8ad38c096709f19e26fc"],["/categories/Educational/python/index.html","dd421cea8f3d242eac8740b56aa4cd63"],["/categories/Educational/shoka-theme/index.html","bf86654b3395d7e09652f0abcdb8b910"],["/categories/Healthy-Living/index.html","b2cccc3c25cb660ab0d39405ea22c50d"],["/categories/Interests/index.html","cacda5e988eb958754f145c9ca9ad6d0"],["/categories/Social/index.html","5739c333d77d75d043a63fe983996156"],["/categories/Work/index.html","42a099c9cb3c6115b587e2ae4c12683a"],["/categories/index.html","543935b05ea837d2193f5edffb66a01b"],["/collection/index.html","0d309355a682d90a51b7b63b6b0c9c89"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","6b5c4032221df06ed8054680c6cb673f"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","7c0692980396c12e9cf454b8e6c54c77"],["/page/3/index.html","c33e1524af69442bad66e5df25ba3045"],["/page/4/index.html","858a23b447b501cc44ed42cf98602ad4"],["/resources/index.html","ce1c61f60a708762b5471637ec28880d"],["/sw-register.js","219c150692c96bed983d482845bf3151"],["/tags/Hexo/index.html","90a6c566366b458942f389cf88172e85"],["/tags/Markdown/index.html","a89dc47d9b6458221b6cab658b4a8ff6"],["/tags/Python/index.html","ae106b2d4feab3f9e74819a14ac574e7"],["/tags/index.html","38f33ab7f70d803b293c5e12324f86c6"],["/tags/shoka/index.html","b93f7d8ddfa7706cef2b4f2ac0ce2de5"],["/tags/微信小程序/index.html","125fae9be4287a40c82f1f6346153f33"],["/tags/数据分析/index.html","aba1e24dad8eab105e44853bec71f01c"],["/tags/期末复习/index.html","78af8380111fe611f8966b269586de1c"],["/tags/期末复习/page/2/index.html","fb026dd545bf40765745808e85e1586f"]];
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

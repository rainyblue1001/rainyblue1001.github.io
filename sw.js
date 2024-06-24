/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/04/13/Daily-Life/photos/images/index.html","1659a78b16f11a36de82e77b8f06c88e"],["/2024/04/16/Educational/python/Anaconda/index.html","c99121999d89c00cbb6e6999fe1fe568"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","0b082b49fb21e822be9fb8d6ac78cea3"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","5b884f19b45be1343da077e35ed2343c"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","35c395ebd9d348409e767c6e4ab5e279"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","da355b6e7bd220df581d94dab22d551a"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","d2d89faafe6992d2cc529ede66a5684e"],["/2024/05/25/Healthy-Living/健康生活/index.html","fd2466d8db7c06c26f9aa3cef479b3e3"],["/2024/05/25/Interests/兴趣爱好/index.html","aa049ebe4581433c63b38bcb439589b7"],["/2024/05/25/Social/社会记录/index.html","03a2e2394948190a10184c2cb0a357e7"],["/2024/05/25/Work/工作/index.html","0a778abc3b6cf009e39451f78decfbf4"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","a5baf0b484ce93030d64fc501a2ecd30"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","31fefa20bc8eec0565f399e3235d0656"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","f4d7bbd86ba2c0954dd1ae16a2d7482c"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review2/index.html","36f96f707a1b6ed65469ea2f18bee2c5"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review3/index.html","1234eb03d7aac22f3312915d8e84d3c2"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review4/index.html","464a1b6465a6e7d4fcd9906a5b9ece15"],["/2024/06/19/Educational/WeChat/WX_review/index.html","0a558086680bd5f84b8b1541747df4c9"],["/2024/06/19/Educational/WeChat/WeChat_Program1/index.html","fe529a9ba45c136e1e343bb95a772f73"],["/2024/06/19/Educational/WeChat/WeChat_Program2/index.html","403e902081152e60c002467f71248a22"],["/2024/06/19/Educational/WeChat/WeChat_Program3/index.html","f1b675459ddb546a19afe4781562f797"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","97932d5b42e7c0d60e0d48b4286b3a18"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","120aaa96dd9d94c90a0b91ca5ff27124"],["/2024/06/20/Educational/Software/2023-Software-project-review/index.html","0a8490b69c269ec1ff59b96fb97cd955"],["/2024/06/20/Educational/WeChat/WX_Exercises/index.html","8d4d3408f63884876f387eb8ebb6418c"],["/2024/06/21/Educational/Software/software-project-review/index.html","cf6283a14ff7a40009b32dab55287d93"],["/2024/06/22/Educational/python/Data-analysis/Data_analysis_review/index.html","b6577a7c572d8955e8c0867c83411227"],["/2024/06/23/Educational/WeChat/WX-Questions1/index.html","b879ac1209ef9412c3b1cff64540396b"],["/2024/06/23/Educational/WeChat/WX-Questions2/index.html","9a1d4e73a671a8f0c9f2722e9995fc2f"],["/2024/06/23/Educational/WeChat/WX-Questions3/index.html","c30b1a8933611596aabc95bfb553f876"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions1/index.html","9a5c4d6029f09a4c2c49fc3c87e921ca"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions2/index.html","42f91f9ebbb25a2edc1970981e912711"],["/2024/06/24/Educational/python/Data-analysis/Data-code/index.html","00bf0f3440b2f0237102a1710a3ab12c"],["/404.html","d81fe8442800b852eb0891c971014558"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","b123b7ba3871f06ba93b3b6a511f49d1"],["/archives/2024/04/index.html","98718a0af4c68ba35d3cb70c8e237974"],["/archives/2024/05/index.html","5232e12bc9c9dff818aad14a55815e0b"],["/archives/2024/05/page/2/index.html","d2d7847c0f5b0f8f6cf3d2f4c9afbbcc"],["/archives/2024/06/index.html","44337dd6388acba287dc404a4b2726f7"],["/archives/2024/06/page/2/index.html","2b927225801cbe83ade2320a08c151eb"],["/archives/2024/index.html","9815cea92462ed57336a3083747476e9"],["/archives/2024/page/2/index.html","e9c704c39e14b11e13241997f92d6832"],["/archives/2024/page/3/index.html","b4a8c515e79000ba4c9738f333506b20"],["/archives/2024/page/4/index.html","1b3677c8c2d2f9f67631d2d678eb4dea"],["/archives/index.html","172c55871d96aaf93f07887af0e44406"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","fa8728604dde6df8d69866519a3bdef3"],["/categories/Daily-Life/photos/index.html","b7b6bf956fecdccfe2f250a660a9ae7c"],["/categories/Educational/Software/index.html","9f1811e61469aed6415975f4d7e33c63"],["/categories/Educational/WeChat/index.html","b1cf1909b635ff9f6c29f4877b5a5700"],["/categories/Educational/index.html","5a1c4d1acca6414b59fff662808b9e35"],["/categories/Educational/page/2/index.html","e403cf4d74c5dbe433105930244fa598"],["/categories/Educational/page/3/index.html","3557b4a21293b42af3bd04f37efdaa83"],["/categories/Educational/python/Data-analysis/index.html","ce989995263383932c2e46c9981463f6"],["/categories/Educational/python/Web-crawlers/index.html","c444d04059b80dda36bdab0f6a4b80e4"],["/categories/Educational/python/index.html","74b3088e391af3ca3d03682db96d1a11"],["/categories/Educational/shoka-theme/index.html","43a47b3506043b1dba14340e1b43854a"],["/categories/Healthy-Living/index.html","d6124194d134f8a0250cabc375293749"],["/categories/Interests/index.html","13d7d40c011d57b7f272ad750329c9c2"],["/categories/Social/index.html","5b6bc5cf476ac9b769da65faf66952ec"],["/categories/Work/index.html","ebd9125ce9c26c67272d7c8d8fdaf509"],["/categories/index.html","79d66c9d4f1029d254c7bbb88c8f2a02"],["/collection/index.html","3a24440435a85fb39a845b49e9acb024"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","be6661377bbb4d5f74b8c3d492602c72"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","97123a3a09e0edff3e0ad73e25bc9896"],["/page/3/index.html","411ec3fcd874ddd9a0997bbc8ef1e47a"],["/resources/index.html","65032de74345620c1f79d6b5b43b306e"],["/sw-register.js","7e9876d41a6de39d9fe197f84c90032c"],["/tags/Hexo/index.html","ac8e946833a32386ea2a403b3d904548"],["/tags/Markdown/index.html","baaec1e473fd129c5714a0cf109a0c38"],["/tags/Python/index.html","f2d02c758e4dd227ec6eab561ce34026"],["/tags/index.html","7284f1e1cffc96232c763249bf2751fe"],["/tags/shoka/index.html","ddfa940946b838d8e898283bf864ae94"],["/tags/微信小程序/index.html","3323833c8ffe3b99540aeb3406a99998"],["/tags/数据分析/index.html","5e8cb0ad48925e2fc05d5dbefcb6bf13"],["/tags/期末复习/index.html","a92339ece6c1d9651808cd3c9cd9a08b"],["/tags/期末复习/page/2/index.html","dad4cdb0542bcb8a64471392358d0a1c"]];
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

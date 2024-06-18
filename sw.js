/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","c7312b6eadd69b053a482d980d3f9f95"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","e37ddce7932cebedd78798883c8eb8a0"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","5aa0392ad941be27a34068d54f7554ca"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","c233bcaa8f458f2ad4d6514a3bb79803"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","0731c6efdd010a1dacfaae32b415f981"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","83c4bd94652ebeffd6d5cd2de68aad70"],["/2024/05/20/Educational/python/Data-analysis/Anaconda/index.html","588ebe9d1dbe799872ea7f08886144b7"],["/2024/05/25/Healthy-Living/健康生活/index.html","8c99d87d2075037ea8560c7a4106209d"],["/2024/05/25/Interests/兴趣爱好/index.html","f79a36bfe5f285a9d3a54f3cd9f70f73"],["/2024/05/25/Social/社会记录/index.html","4e422234cf3eb5f09e377f9d6a69155a"],["/2024/05/25/Work/工作/index.html","25f2055fa955a9192f2106611ab0bec4"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","4eb22a4cdab7ae6e6035007ade33b24a"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","4f38a26adbf69feceaf6e9d2134430ee"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","dce6e8647acb5fbdf62f8036b64b3848"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","81a5c31c2ce54948caea5a6208ebc7a7"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","f10531269f3e3ce012adc1e94c299cbd"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","27ccfa32a3327e7354a1bf9167927ad1"],["/2024/06/06/Educational/python/Data-analysis/Data_analysis_code/index.html","2aeca614e204a08364615a3cf81ec4c4"],["/2024/06/06/Educational/python/Data-analysis/Data_analysis_review/index.html","c4307de1e0437b50d8d3642ec738f438"],["/2024/06/08/Educational/WeChat/WX_review/index.html","99a3d1af04bd398568694a39140c75f7"],["/2024/06/09/Educational/Software/software-project-review/index.html","6af4475528a81088cdde6dffaaeb9609"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","79394f6e333ef23e43ea9373308ac7a9"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","742c15cbfbdca03faf1a25e15679a7cf"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review2/index.html","bee422f8efa7af61abcdb33273cd574a"],["/404.html","36993dada195bdb27d2d5dd0c352481c"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","b872de8f0d0dfe9bbc527413a4c05f5f"],["/archives/2020/08/index.html","177a0f3152d486e8c0d55ffd95b0e86e"],["/archives/2020/index.html","69bf6689fa7e99221e5ae3a767c2c1a2"],["/archives/2024/05/index.html","51a871efad5cb2c4893b95d3f5732bef"],["/archives/2024/05/page/2/index.html","4f332e06cb1dbc1b42425753a0831f87"],["/archives/2024/06/index.html","af52f491fcf1555218b629340ce1b98c"],["/archives/2024/06/page/2/index.html","60824a67b425e34d7e37ace649a98229"],["/archives/2024/index.html","1e8a1eba5c69dd79063f8b6a0ccbe274"],["/archives/2024/page/2/index.html","090465264dcfdda56a2cdabbd48adc35"],["/archives/2024/page/3/index.html","b31cbe46aae4800ceb2274831fd1be3e"],["/archives/index.html","68cc82e7c06240f4963d44e2aa0807e2"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","d079da8dc6765271f9db5f150e8ed731"],["/categories/Daily-Life/photos/index.html","ab1400ac7cc27d9854a90e8b1b731293"],["/categories/Educational/Software/index.html","ca5a0e745b467bf869d8abacf3dc2148"],["/categories/Educational/WeChat/index.html","cc6c81316fae209cdb1d947f56f8aa41"],["/categories/Educational/index.html","722984fb3b32eebb12a359364fcc5c79"],["/categories/Educational/page/2/index.html","8a9faf88893680c1d5e0bd32f01d6cd1"],["/categories/Educational/python/Data-analysis/index.html","82f1de50b56f5c31c8eef2678cbda77e"],["/categories/Educational/python/Web-crawlers/index.html","341a05d5d34948f9558887d61ddae812"],["/categories/Educational/python/index.html","f1f4dca4d77669def0e383a858219df8"],["/categories/Educational/shoka-theme/index.html","dc562fbc3153dfcac45ce8d8cd83b73c"],["/categories/Healthy-Living/index.html","c93cbb16d9be11212330678628f5ad8a"],["/categories/Interests/index.html","56552f041f609de2b489aec793eb9da8"],["/categories/Social/index.html","a81dff211dea3e2ce09d16e100e0c90d"],["/categories/Work/index.html","6b13dec7e742028f0d668393977927cd"],["/categories/index.html","dec1dcf6aa7bbed31482219f251a4f9e"],["/collection/index.html","ab3c4e0ac373e15212dd34a7bd4815de"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","110d91fe0999cca1662ebfc98b2496df"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","42b3506638b305c332a5ab56796d45a2"],["/page/3/index.html","e02a44c4ad713c04289af537d33d7fdf"],["/resources/index.html","ded9027458129e8eb89c0cad0b8301c5"],["/sw-register.js","0003286d744e11423bc2c96be0126490"],["/tags/Hexo/index.html","5eb9fab494282f821a308739afec7450"],["/tags/Markdown/index.html","1f0979db5c2201f32bd5974baf74366b"],["/tags/Python/index.html","e115e28d106658d965c2b78f8ed40f49"],["/tags/index.html","5a991c57976c6ecd1ef6d8c4c8b7580f"],["/tags/shoka/index.html","d446e94df20540515ea06bc212955ae7"],["/tags/微信小程序/index.html","75138c04251819bb4f65923f2566a7b5"],["/tags/数据分析/index.html","923cda32f1f2a58605534a8f6744bab0"],["/tags/期末复习/index.html","ba2d8a0f0e0ec2d56e7942a20886e486"]];
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

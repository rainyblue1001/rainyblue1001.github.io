/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","4ec5340a4d59be9ab78cf3e7bcf2e7c8"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","4ba62a1666198dbef02a8683edae833f"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","b5a9ae6b639ede66f2d0878c8f622e1b"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","c125f4d8c14c89bd585ac6ed0cf52c70"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","f677758f347bfc72b8b77bb2dc25bc3f"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","19f08842de925d36cb27917025cdc25d"],["/2024/05/20/Educational/python/Data-analysis/Anaconda/index.html","259f1627cf27d0ada225e178a2f120ab"],["/2024/05/25/Healthy-Living/健康生活/index.html","2306f5d8f41a555093386840d1caa7dc"],["/2024/05/25/Interests/兴趣爱好/index.html","57a01d7ba629f060f6d12e902fd16733"],["/2024/05/25/Social/社会记录/index.html","51affc8d9513b615870343058035eb8e"],["/2024/05/25/Work/工作/index.html","84c756a1729cb36d0fb53595c808fd9d"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","1b2a80543e7943b1bdb5068c2b2575c7"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","f4ee3e9609fea917846474fb3d98a62c"],["/2024/06/02/Educational/WeChat/WeChat_Program1/index.html","60c328f46b5dc118bf0581973ddc315f"],["/2024/06/03/Educational/WeChat/WeChat_Program2/index.html","29b91742bae03aec206591863ecc3170"],["/2024/06/04/Educational/WeChat/WeChat_Program3/index.html","e8dd2517a43870198eafc4c99dc3ccde"],["/2024/06/05/Educational/Software/2023-Software-project-review/index.html","970f28959dc224b4da05ff31bd800433"],["/2024/06/06/Educational/python/Data-analysis/Data_analysis_code/index.html","7e752a3c970a0c1f771403425de24146"],["/2024/06/06/Educational/python/Data-analysis/Data_analysis_review/index.html","6514c605398dbc3a4d2d2d9c715c4869"],["/2024/06/08/Educational/WeChat/WX_review/index.html","368859067642515f243a5c1994d84a7f"],["/2024/06/09/Educational/Software/software-project-review/index.html","d71ed225347a7f0c563c0161b8ee21ba"],["/2024/06/17/Educational/WeChat/WX_Exercises/index.html","59ba40025b708831bc4ce3eaa915189f"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","7cbcb47f0f7da21069a4000da220c5db"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review2/index.html","b95e0d8f438b63c4c7c5dcdc0e90a788"],["/404.html","b34977b1b2041cc94eb36941d962ab49"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/about/index.html","6b7217ca3e9e4e406a430d2c8b561815"],["/archives/2020/08/index.html","a27e5e3cfd4fda8c475bb8d06531599d"],["/archives/2020/index.html","134ef30f182ff35a2934d60da233b949"],["/archives/2024/05/index.html","e904e9f156bb682f8cf33db92519a04a"],["/archives/2024/05/page/2/index.html","7f26b6c40a11601be294aebc59dba6b1"],["/archives/2024/06/index.html","81078cb40f986d690ac6bde04199638e"],["/archives/2024/06/page/2/index.html","e52af45d010113b1b9353dabf0481e00"],["/archives/2024/index.html","a117a63f2e289ed3493f5d654802cbae"],["/archives/2024/page/2/index.html","edb4b9e592daff10b271f74b03c9878b"],["/archives/2024/page/3/index.html","b19e7891a0e2b73b5501ea93fd963535"],["/archives/index.html","c38128cf2f536947dab690ac2ef1f82a"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","6de8294abcfd08e3822b8622f6d95686"],["/categories/Daily-Life/photos/index.html","dc22ad9eb0c48417ad908a0c2cc361bd"],["/categories/Educational/Software/index.html","1655b98c6632e651e759d73b5681ae8a"],["/categories/Educational/WeChat/index.html","4ae1c50677649eb4fcdf7e75a59ccac9"],["/categories/Educational/index.html","314e31367deb761f245040d58cc28cef"],["/categories/Educational/page/2/index.html","617532e3517bedd77705997064dfc963"],["/categories/Educational/python/Data-analysis/index.html","3978fd16c6e401559658a2f0308b8d03"],["/categories/Educational/python/Web-crawlers/index.html","bfebf1638a76da0fa513d4171853afe7"],["/categories/Educational/python/index.html","f0ae4df09a790d49dfc9be6c7461475e"],["/categories/Educational/shoka-theme/index.html","38b8f1410f9632488e0a82e876cc6afb"],["/categories/Healthy-Living/index.html","d176f0d63352b00ee3c2a3933b7e2f74"],["/categories/Interests/index.html","7f237ffb417111523ccd8bc7e9ff77cc"],["/categories/Social/index.html","75bbc589a6fafbba0bf1b0af01cf9f49"],["/categories/Work/index.html","43e017a98ff752603beb98a86520e27a"],["/categories/index.html","d87ffca5a204c19277ac30deededd587"],["/collection/index.html","6491e3278ab7c65f607f7b37fe3cc10d"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","ad887172bdf5ae010d0c52785bf8c8a0"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","0ec056adb82246ece615e242b83624e8"],["/page/3/index.html","5fc98bcfd27690220ea980644b2accc7"],["/resources/index.html","d30a8743c8619405b3bd11a5eebcb340"],["/sw-register.js","574515228e8aeb1b9c712e7d105368f7"],["/tags/Hexo/index.html","669793d9b2c58a9400dc9d368bbaf7fa"],["/tags/Markdown/index.html","893e10d02530faf7df6ad270c6fbfc1f"],["/tags/Python/index.html","b765dfb1dba12a1a325f21eb8b648faf"],["/tags/index.html","180b92082a064c2ccdd5ad31ab560284"],["/tags/shoka/index.html","1e46b68c7f71adfcee5c616eacb426f8"],["/tags/微信小程序/index.html","d5b957893699569ef2f140437af2be65"],["/tags/数据分析/index.html","ec26002b859a186f0f3d72b49993ba21"],["/tags/期末复习/index.html","594b883bc72568b717bfd63e042453a1"]];
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

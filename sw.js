/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/04/13/Daily-Life/photos/images/index.html","93d9834580495c10c45c639ff5f8e7ac"],["/2024/04/16/Educational/python/Anaconda/index.html","55414f649670d37c76f49a41359f739b"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/config/index.html","d25b49a5c3053957f269cd06597d71b8"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","039ff6eba3ec679ced9ee52be87fae48"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/display/index.html","5c8b5c613dff589c001e8657d6e21494"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/index.html","6cd957f67880c72ebb2490c6f9907a12"],["/2024/05/05/Educational/theme-shoka/theme-shoka-doc/special/index.html","aa7699023856205348de971c22850eb6"],["/2024/05/25/Healthy-Living/健康生活/index.html","5e2c753dfd4a0174101d35c659b66164"],["/2024/05/25/Interests/兴趣爱好/index.html","0fa918774bd7c284f10972b391ae8ab3"],["/2024/05/25/Social/社会记录/index.html","e4142d1f00b43e9391bb1245bdde0e5b"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","0ae3bf9cbffe33b8df07c5af7e13b188"],["/2024/05/29/Educational/learning/Markdown-Edit-Reader/index.html","1ac697b8032268f4f7d7a7c6fa65da51"],["/2024/06/17/Educational/python/Data-analysis/Data_analysis_review1/index.html","4bf92e5aebda75d6f8d1874aa052ba52"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review2/index.html","13e12ed4e35b89084464af68a3a4e65c"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review3/index.html","8300a76a3377b39681f259cb4e68af8e"],["/2024/06/18/Educational/python/Data-analysis/Data_analysis_review4/index.html","1b865f6061c9ab1a28e46794b4e21030"],["/2024/06/19/Educational/WeChat/WX_review/index.html","18bb1e4859469ead80ec3494d75f8876"],["/2024/06/19/Educational/WeChat/WeChat_Program1/index.html","8e6a49c94b2c8a338e99cee0c5ff9116"],["/2024/06/19/Educational/WeChat/WeChat_Program2/index.html","87d79ecf284a5d9c1a72f64b7adf74cf"],["/2024/06/19/Educational/WeChat/WeChat_Program3/index.html","4f069d4d642448cae364dd4a1767803f"],["/2024/06/19/Educational/WeChat/WeChat_Program4/index.html","a9b6b53c35f5a8521f7af0706a0d2a0a"],["/2024/06/19/Educational/WeChat/WeChat_Program5/index.html","260757f4401213e196dda733cfd4a2dd"],["/2024/06/20/Educational/Software/2023-Software-project-review/index.html","264b6b7d0b9b890df9019b9cc0ead384"],["/2024/06/20/Educational/WeChat/WX_Exercises/index.html","672e8a0f72c6b5153ab10b41aa277161"],["/2024/06/21/Educational/Software/software-project-review/index.html","fd39d740b8455b1a8ccaa2acae755d8d"],["/2024/06/22/Educational/python/Data-analysis/Data_analysis_review/index.html","d9564a2d18626dea642fc98ae2ae584e"],["/2024/06/23/Educational/WeChat/WX-Questions1/index.html","48e8ec88c7e57ee056abdc9a74ce20d6"],["/2024/06/23/Educational/WeChat/WX-Questions2/index.html","9fd3dc14d5f5c0af959c02e0edea4e0c"],["/2024/06/23/Educational/WeChat/WX-Questions3/index.html","64893e3e2b2911dc7c47ab4ee7a89552"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions1/index.html","61c7485fd060de588e322402652d622c"],["/2024/06/23/Educational/python/Data-analysis/Data-Questions2/index.html","d76632f83882aec04e7d43b686347b91"],["/2024/06/24/Educational/python/Data-analysis/Data-code/index.html","da233acf434c39ae17ddf28b9a806680"],["/2024/07/02/Work/civil-service/civil-service-list-moban/index.html","7c34796f5ff2b07733fac1445931d563"],["/2024/07/02/Work/civil-service/civil-service-list/index.html","13a587449ac31d574bf8c8fb54fee968"],["/404.html","e29eac8eec8cfb1d4c7122c5972817fb"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/Software/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/WeChat/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/Educational/python/Data-analysis/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Work/civil-service/cover.jpg","fedc746d06d67409b7d6769ce99d0d24"],["/about/index.html","dc7008d536aacfb09b97b06818077194"],["/archives/2024/04/index.html","bcfb8aca887c0097c2a22059176ec2e8"],["/archives/2024/05/index.html","7337ee1a224ba0f6f404d6a1be22de7d"],["/archives/2024/06/index.html","dee57371d0dda25079de6f38556f1470"],["/archives/2024/06/page/2/index.html","9c60f1e4f33cc80b7d9644a85323a668"],["/archives/2024/07/index.html","174c24ace581e26450a024e44995a1d1"],["/archives/2024/index.html","71f0b825888145e28188d16ebb950bd1"],["/archives/2024/page/2/index.html","f7a477e2dc6c6f9f8d1a3c51160b68fd"],["/archives/2024/page/3/index.html","d9ceea193a0f1829cade8f1d97022dc6"],["/archives/2024/page/4/index.html","cadc9d45534b066a152cdcf52432ce6b"],["/archives/index.html","e3d34ac8df19539bb410cab0a460b7e8"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","bd2632b2c33501894e86d53ec0b59fbc"],["/categories/Daily-Life/photos/index.html","1e4ef8b63ff750aa199ebf3dd74c2bae"],["/categories/Educational/Software/index.html","7cd36209fabf5e894eebb4ec977bf0d5"],["/categories/Educational/WeChat/index.html","f2a554df4b428e844b2c9964bc9f4150"],["/categories/Educational/index.html","2b0ba10e983fb4367826a96a7a3d0e12"],["/categories/Educational/page/2/index.html","c153ff90fa2ca5bbacebbc9836884c81"],["/categories/Educational/page/3/index.html","41943059da3afe31869b0b9dd0b27f13"],["/categories/Educational/python/Data-analysis/index.html","88aa81c3935c1d8031bfa74e9837e167"],["/categories/Educational/python/Web-crawlers/index.html","1d8df4dd0f50feef02462dc92ca5ee3b"],["/categories/Educational/python/index.html","7183d27a6a0eb47984e20ae499e281b9"],["/categories/Educational/shoka-theme/index.html","a9a7ae4536f99c6962c4b2f69d707d75"],["/categories/Healthy-Living/index.html","bff87d3312dc0ea6b1c29d5dab4f93fb"],["/categories/Interests/index.html","d67b21e768c103fbf274c295ca18e76b"],["/categories/Social/index.html","0855727af985701572ef65c20e219e37"],["/categories/Work/civil-service/index.html","d931414e0943c8402f433152f14a245a"],["/categories/Work/index.html","89c9e4df5c70eed56d9b0f33d29cb09f"],["/categories/index.html","70b741a58655291eb9871045f1b4c63b"],["/collection/index.html","8b20817f26aeae3d583fb4d6ed948fb4"],["/css/app.css","2a6e1d95278cf64f8cabb9f039c81edf"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","5914dbc40fb02571f6ba57fab2e892a4"],["/js/app.js","40165e8c072d01096bb71feb714d722f"],["/page/2/index.html","a041d1ed514b9132a41a9951c2bb818e"],["/page/3/index.html","55c6210841ff2868b81d1abc4edddc7a"],["/page/4/index.html","dd6d1da66e8f3802ae313e925609b950"],["/resources/index.html","11e64e1aee54de1a81a2bb762fd67d42"],["/sw-register.js","c747a7d1e94dc7a4c14c60316421d0c4"],["/tags/Hexo/index.html","27ee5af603a94a8d4a1405b2eb6d3123"],["/tags/Markdown/index.html","00fd872d701268021402e828f2bf7331"],["/tags/Python/index.html","4fbf4a38df7e6740c0d3d9800ba70bfa"],["/tags/index.html","65f20cc51d10a065d4ba3f120edb16b9"],["/tags/shoka/index.html","1357e312ca4993368b3d9584166f74a6"],["/tags/公考/index.html","661dd6c5beb3ca9d91787c40287c3e15"],["/tags/微信小程序/index.html","88a863fe85edda31fcf10e2c7f3ddbd7"],["/tags/数据分析/index.html","d00ecce5e36ee33029b6bc4682d50544"],["/tags/期末复习/index.html","1391414edc8ceb87c8c1236f38dd0036"],["/tags/期末复习/page/2/index.html","c714e1b68fe62fa1e74fa4aa492c3096"]];
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

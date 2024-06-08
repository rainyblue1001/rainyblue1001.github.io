/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/08/13/Daily-Life/photos/images/index.html","1fd291e55d1e19957598d2044ae1e2a1"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/config/index.html","ab8e48aa743f7f2f26a3487e1a9c7774"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/dependents/index.html","bb1e18392c99c6dd62dd04c4f51aef51"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/display/index.html","ce09f990732c4191a97ca0d10aa75727"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/index.html","000c7e647a325d6cdc10232875ae9f81"],["/2020/08/13/Educational/theme-shoka/theme-shoka-doc/special/index.html","6e8fdf081d5ce5ac942500cc398bfef8"],["/2024/05/20/Educational/python/Data-cleansing/Anaconda的安装/index.html","b131380d2027adb523f116291abea38d"],["/2024/05/25/Healthy-Living/健康生活/index.html","d2c3173bad3e66843a0047b8c1b1b323"],["/2024/05/25/Interests/兴趣爱好/index.html","5b4bf5a2aa2038b6ca0e189ba802d27f"],["/2024/05/25/Social/社会记录/index.html","dcc691d918b7797e0a8886bf12a838f7"],["/2024/05/25/Work/工作/index.html","e504bf20f2ba39ef65b35a3258533af8"],["/2024/05/27/Educational/python/Web-crawlers/数据爬虫/index.html","a4b3c3125dc7bd7979d5dbfa61a40352"],["/2024/05/29/Educational/learning/Markdown 编辑阅读器/index.html","5d2b479f6399afef3cad26aed05df666"],["/2024/06/02/Educational/weixin/微信小程序开发-1/index.html","dee54e72efc3882098ce0ed1c39dea3b"],["/2024/06/03/Educational/weixin/微信小程序开发-2/index.html","8aa2a671271e141d81c0f0b3b975919c"],["/2024/06/04/Educational/weixin/微信小程序开发-3/index.html","fdf22ba17705ff8f3967570c575f7cfc"],["/2024/06/05/Educational/ruanjian/2023年软件项目管理复习提纲/index.html","5c11bb83a2d5cf7a068f1f4ca2bc1b96"],["/2024/06/06/Educational/python/Data-cleansing/数据清洗/index.html","e74e19f01c88934aadd8d4e8f6b8cf36"],["/404.html","d418b1964240a92899638cf5a43f3e7d"],["/Daily-Life/photos/cover.jpg","a99f5042edb4bc6084e454611dbdedd8"],["/Educational/python/Data-cleansing/cover.jpg","9a6c647b56efaab12806a21dd9e5ba6a"],["/Educational/python/Web-crawlers/cover.jpg","080e6a538240bb3f59b9b3a65157c799"],["/Educational/python/cover.jpg","0f68c7669a04625e052302c88a4a67af"],["/Educational/ruanjian/cover.jpg","62f7b26b77d0c5a86b079fc01c35c5eb"],["/Educational/weixin/cover.jpg","1ed7b31886a67b1bf75727ccc4bd1189"],["/about/index.html","c6f6ac5b01cd1a05d2f0b9dc6b2e6921"],["/archives/2020/08/index.html","31d444aca7898e615c248829cc2e492e"],["/archives/2020/index.html","128bb686e5aa9dc185006945c19201b8"],["/archives/2024/05/index.html","c5d6ea57dd1f40bbffc504d178198e49"],["/archives/2024/06/index.html","a3da60f15f61a151533d94769beaa910"],["/archives/2024/index.html","d4cc76a23827494821ee41f8b02abbef"],["/archives/2024/page/2/index.html","29faf4099efbcc7d675f9031e9ea4f10"],["/archives/index.html","c2925130ed64664382d06f9fab8a7303"],["/assets/7 (18).jpg","95f8e7dbd078b8d0313ac5725e70c91c"],["/assets/wallpaper-2311325.jpg","6f01af8d24d6d2de2564af30c32366b7"],["/assets/wallpaper-2572384.jpg","3637ba36e2daaeaa2bb438f65b0bff9c"],["/assets/wallpaper-878514.jpg","2bf9e4c5bf4f5fec55353a46bd3176c6"],["/categories/Daily-Life/index.html","3db8cd62bc21cab22cfa53a127f5016a"],["/categories/Daily-Life/photos/index.html","964d6f45c86203a07b48cea1f55bc0f1"],["/categories/Educational/index.html","66f55f86f3ccc22da43a9aa2e9237043"],["/categories/Educational/page/2/index.html","1e8b6ba628d9fcea7abe8097ef9e8243"],["/categories/Educational/python/Data-cleansing/index.html","a68d431386c3edc4dc4d342285777531"],["/categories/Educational/python/Web-crawlers/index.html","92cca6d6a1a97cd19e4823301b482d13"],["/categories/Educational/python/index.html","4ec2d04848d6a7526d889554cfc104ee"],["/categories/Educational/ruanjian/index.html","66d4ef98928ed2ea53228de9d42dd5c0"],["/categories/Educational/shoka-theme/index.html","f5e8de51631f3d6d44be5a304b5d2ea0"],["/categories/Educational/weixin/index.html","338e94da8311d4338caa5e922577bb63"],["/categories/Healthy-Living/index.html","0d94092b1670e8b1ee57468845a0c272"],["/categories/Interests/index.html","aca0bc6af60c46bf8ebd2c311a0d7222"],["/categories/Social/index.html","a083a1e15227cd80c85c7a8de1aa989d"],["/categories/Work/index.html","ef8d6c519ae7ab10a1e5873736227fe1"],["/categories/index.html","08295ea6c2c0ace119e26f5670d7c02b"],["/collection/index.html","ad39ac2ef5f564fe44b63af27dd2fce9"],["/css/app.css","d7231ce7d6dd08b359300ce27c841f63"],["/css/comment.css","53cf40d671c691c76a091400acf74e85"],["/css/mermaid.css","5d6c13df834fa72c1652cf6ec46096dd"],["/images/404.png","52d6ca721e50bf3fd2f09e0d2ebe6f6c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.png","9749e8b2dad36e548a0e26cb2ff0308a"],["/images/apple-touch-icon.png","c7e8e0062b8300b2134e6ae905db522b"],["/images/avatar.png","c89b1b0ca3f11440b412dfa4d86cbe5f"],["/images/logo.svg","9fa6ef06ed8e8abf09a6197688bef461"],["/images/play_disc.png","13a96370213881a22cfaa05bcaf1953c"],["/images/play_needle.png","ed199c599562491c1c27de4a8f3daa6f"],["/images/search.png","a702e35b5ade0f325090ba8d3aeae91a"],["/images/wechatpay.png","770f6e4bcf414fbda6c3fdaee85f395f"],["/index.html","3c194a5998f5c3c9d0d38f9e7a705b65"],["/js/app.js","b3c0ff4cada84f6f3980b2e923dc037a"],["/page/2/index.html","3c26404419f1b91834de111844204262"],["/resources/index.html","f7434d7f2294f39758a66e38a464c7ae"],["/sw-register.js","4e01c362f430cd1c6fd75261bc5150d7"],["/tags/Hexo/index.html","138646a6c7cac07738c46eab491e4872"],["/tags/Markdown/index.html","d6a3bdaf7a6dcf7046eb239fc9674877"],["/tags/Python/index.html","52ff7be79ec0a5e89a683fa1812f2622"],["/tags/index.html","f473dd37bc86e7248f9ad1efef049532"],["/tags/shoka/index.html","28623d1384bf896622227c72262d2454"],["/tags/微信小程序/index.html","6402f2c20904d68fb124b651ea622771"]];
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

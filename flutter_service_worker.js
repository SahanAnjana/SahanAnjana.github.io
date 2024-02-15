'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b48325a78e67c251f663fd02dc773407",
".git/config": "0aedd3877e08ead4eb0b67281ca47623",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a8cc3bd0a0533f8b8b6b5f0bd4db6a43",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6a0ab3c89364cbed649b6d7e57fa9e97",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2018c5b239357444f9578aad73f9ea21",
".git/logs/refs/heads/main": "09638ec1d6408f23023a772e42ab9a81",
".git/logs/refs/remotes/origin/main": "973f876473a566c851cb444e0abf7eea",
".git/objects/03/1e8960fd10346c5eecd4f6e7f634d679b9eb26": "d31edbce9f6030b6a117a63cfd61692c",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0c/85f6126c532a67e4971c39c41be007ff101da9": "67d433e0bde1b86b6ca05c7be95461ef",
".git/objects/0f/23e96097bac281c0fb60b7cd84d8e205479e28": "4eb9b0a7dfdc031b3db10f15dc04bdfd",
".git/objects/14/12bdacac0b128abe723d53df83958f433ea89c": "c11c0deaefc27e5fb076be00628ccee3",
".git/objects/17/dcdb97c1a0a6e25cbb04231dd5af0c32c2c3f6": "bbc27fccbeef7f94834931629517d9f5",
".git/objects/1d/6ef7cae282b172a05e1c9e57d78b7393b1c69a": "fc095b23bf32421e845ab6f729c176fe",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2b/3820909b25a6904011cc8bf49bec2b455ed961": "0ce38948e91da33464d8d903603897e8",
".git/objects/2d/1fa1181a073dbe4c2be8d6feafa6a1fe8a5947": "6b1406c2f898ad3e6b814016a3fd7905",
".git/objects/2e/aba59b8a13af1ae2bd8689baf720ad8ff8b430": "c6436e39d52b51007d7413daf9b33062",
".git/objects/3b/b71b2a3aa975c2f1ae420cecc8c9e80f65a8b8": "a0ca654b41b42cb1088f7b9d506b8489",
".git/objects/3f/9894c40d4a01686a0f6b50489713be9063207e": "400b30eb56a555c76646f7e0e539eded",
".git/objects/3f/bdd623b4f8d2e8484bff13d4b21504b159f021": "82492726c012b931b8b706e1407e2c49",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/42a31af7cde021665862497667d625e3b29013": "9bd4f8c78e4a21de25f59b5d24aa1f72",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/d989f28751d457ed5fbd2c50593c851dc3fbcc": "d0bab6fc324e56cf01e2437f3409ac0e",
".git/objects/5b/3309a107b918c7e0474b969509ffc3541eff4a": "13040b1a3deec03eecd8e4b3faa18703",
".git/objects/62/84c92072f68f7eb3eba567d358170b9f220800": "510d33ad697e1b2f926ae5c97b90def7",
".git/objects/67/1c3266dd2aacbd39a03eb9dcbaa92b7deab011": "c54707facddb451e8e81c9b42e91c148",
".git/objects/6d/6e308baa9e0207b76b90c0b9130a7d2019d64e": "902c1c9b6f25f9298ef6efd308cae01b",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/76/60a7f22034502cb2c5395eeebb283386e37c32": "64c45e34503f3927bc8bb6615d234297",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/95/04e51d59d4651d35ce7cf81bc8fe8459d52ff3": "08c7b452a70e78b592ef6c8fe0e9f1a3",
".git/objects/96/f32c7717e21d133ae02ec59ccec8a0172d1814": "82264a965378f54323c398de7c8fd35a",
".git/objects/98/c0eb1e24a81b16f8aad03a1bcdb153c875a361": "511781b40728a19f1ca2dfd548f20ce9",
".git/objects/9e/fffb9a8fa966542476f94af6904eb247a4c1df": "fd17d6d480a4ad5859e8568d7728eb40",
".git/objects/a1/8ca99bfffce51a9ed7b5059aab08887f4f500e": "3ef041686b877c167aed96d61b8d8e7e",
".git/objects/a7/9498df822901ae4c4c7a26aef622d7d873b8ca": "8ac627e1c16d9ee1eb93e9906969dc4c",
".git/objects/a9/a759125870724a1b9131289de36b15a4481fb4": "d0cddaf57287d5b326468c0e9d5cc5e5",
".git/objects/af/60d59f25507eb712952e98844526b92025ce7d": "d27e4a7e8cd441f440da57ed9362b45d",
".git/objects/b0/c9be90c59f8d48dda4d75bd87cceb4c722128d": "7385e5276e7cde44638fb52c8ef33944",
".git/objects/b0/d75922b5ec2b5661c01b442f6b94cb013b65d0": "bb45e26fa3e059ed693706e90840bcd2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/03dd7caa6bbdb128000ff21c8e372c3143315f": "da03e5e9c3d36854c4acebba0efbbb8d",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/c1/05b6df055d26d2d52e645a4abb026130754d66": "6e43d3074e61d7be2870ba8fac0c0aa3",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/cf/5456b0f5af382b73db9433ecf5cf16f52cec29": "58a34dd3bcdfcbe895868dbd6a5394c1",
".git/objects/d3/42aca7351cbaf5fd2b963c17d690eebfcdd446": "c4f28b6f1115ee2b98e71ba107b8e21f",
".git/objects/d6/5c68a25c78ef9a8418c138ea5072c087281039": "76766ada015b17908fe500d5617de940",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/8ecca6012eaed526a384a0f7c0d95c8c0d2e96": "cad9df57a7d07c1cf6b92fb33c5159c0",
".git/objects/de/0b0f2e2be64d9899cd18ff20f4b8e15e48d144": "7f74789d79ab20df88906c5f514fd366",
".git/objects/de/8cce105b79eca2a086d3528e13944aa7544352": "87e43770356ec4eb3390dd7f522f6b99",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/8c233ccc5e907993f1f8c1dd5984ec505f080f": "c9ab6822edc33793e25bfa3ea8af98d6",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/735fddf57b303106afe9e6e74b92d517481492": "4911d3ec40e2955fc69b4fe37200c411",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/0d9834f6dcec763e9b5fad0ffd7443ce670631": "a45965037edd03bab0f7eebf7e76f764",
".git/objects/e9/6e5e83d10d107cfd4ab51541c00e51c9cacecc": "8372259b5fcd4523cf612a6cc7d2f04a",
".git/objects/ea/f26e1f131d9bfda273ac03eade02215b1fab31": "e1fca6a62cbbd68e810ccb2166c54661",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/bfde43de1bce2fb7cc46ec90eafa51dab31f50": "b5b934d941029a2c8aee2145bd86b5f8",
".git/objects/f2/ec0c267c649e9d7a83d296391cc6178054ce58": "a9d63fc4ccdd8f6bce5598f22879a7e4",
".git/objects/fc/e175710007571dedabfd067085b448b91e7c9e": "7a18f3fe22f96acd159509a3cdc344a0",
".git/refs/heads/main": "c6dfeeb617686f8ffe7cb0ee49924679",
".git/refs/remotes/origin/main": "c6dfeeb617686f8ffe7cb0ee49924679",
"assets/AssetManifest.bin": "3a7452c88f56d7cb57b2d31befc88059",
"assets/AssetManifest.bin.json": "404233576e152bdb0cd34dd1067a2f4e",
"assets/AssetManifest.json": "e268c81d663ab0723712c5a62bd665b6",
"assets/assets/background_image_ML_engineer.jpg": "1507054b816ef290634409f316ccf8e6",
"assets/assets/background_image_Mobile_Developer.jpg": "1c2bd85ec14e68fec88f5f5beb394877",
"assets/assets/flutter1.jpg": "fd723486cb512310152f3145a01a8e4c",
"assets/assets/images/a.png": "a191371381f9c871629b62eab0f1e194",
"assets/assets/images/bcg.png": "66627d53a9189f4381086f5f86e5e984",
"assets/assets/images/flutter_logo.png": "71ebe10f13935e03ba33c80cb0cfb568",
"assets/assets/images/gss.jpg": "733502e395dbbb70f2123bcafa13077a",
"assets/assets/images/neural_network.jpg": "d619e6552bf49689173c53df332bd888",
"assets/assets/images/R_logo.png": "2792f9eb01bbadaafa2a2199fb31f4cd",
"assets/assets/images/thorana.PNG": "7091df592550f92981fe7b4cce368af2",
"assets/assets/images/unieats.png": "4055559f786558925b27f87feb1d785f",
"assets/assets/images/unieats_admin.png": "816bb369d7ba421bf3698fc31b0ac178",
"assets/assets/images/uoc.jpg": "60fad9520dfa863e8458b558064ec661",
"assets/assets/images/uoj.png": "4968761a72ffadc87c66efd1a1925385",
"assets/assets/logo/github-logo.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/logo/linkedin.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/ml.jpg": "29459ac97d65282be30ac6b119cb8eab",
"assets/assets/ml.png": "0a0d377922b05ef88394e1bbb9eda040",
"assets/assets/ml1.jpg": "ff2890f6c1e96db9088afa1a686cfb75",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8665825995653a3e3f69a2b251ea57a5",
"assets/NOTICES": "05dd1bb9139d591ca8f9a0c5be6935ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "f4ad084190a9b973a7d6a6c24dfe70f2",
"canvaskit/canvaskit.wasm": "d4a43e5f076a0d38ff6ab8b73bf36677",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "d6ef624e9af76e20b65b95ceb2e4d6b1",
"canvaskit/chromium/canvaskit.wasm": "82d3269749db25356b372617f9a09faf",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "ddbbc645fa24f351cee22798670fa292",
"canvaskit/skwasm.wasm": "22ddda77fde9820164b22d160ed991d6",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a8b18963a64409e3e81ab0be1427434c",
"/": "a8b18963a64409e3e81ab0be1427434c",
"main.dart.js": "2a0f7a27492845ada882770fa02793cf",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

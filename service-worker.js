/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "43dadd2867f2169c0742e8de4acbb1e0"
  },
  {
    "url": "about/aboutMe.html",
    "revision": "7c73c2c27bd3ef680b1b77ea9c117d5f"
  },
  {
    "url": "about/index.html",
    "revision": "f9a5f9d630d698ef4bd4a1fb6e13cc61"
  },
  {
    "url": "about/project.html",
    "revision": "cec60dd772249a9a60692027c4d395b7"
  },
  {
    "url": "assets/css/1.styles.a8958bf5.css",
    "revision": "5f5908d4bffdf1cc6cacf762b804fecb"
  },
  {
    "url": "assets/css/6.styles.fb2aed5e.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.0af71052.css",
    "revision": "cdbcfbd9a0654e6beec824fcc18d54a3"
  },
  {
    "url": "assets/img/1024.880a9d95.jpg",
    "revision": "880a9d95a4baff47612081f3a462e1a0"
  },
  {
    "url": "assets/img/code.473bb22d.jpeg",
    "revision": "473bb22d24f88e312290257ddf7171f4"
  },
  {
    "url": "assets/img/question.53b5e692.jpg",
    "revision": "53b5e69243c99269e9a2bec984bd34f9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/time.819ca373.jpg",
    "revision": "819ca373ec0054d65afcf073701afef9"
  },
  {
    "url": "assets/js/1.a8958bf5.js",
    "revision": "9cb5d37115a3c0a65e7e8263f6b4f8c7"
  },
  {
    "url": "assets/js/10.3605eb1f.js",
    "revision": "60eae467244ac47365811e14ebe2842f"
  },
  {
    "url": "assets/js/11.023f4da4.js",
    "revision": "d221111def5264e02015948fcd7fe5bb"
  },
  {
    "url": "assets/js/12.b9bbd9f0.js",
    "revision": "a3c71cbd2a9b3ce53d79e0aec7c8533c"
  },
  {
    "url": "assets/js/13.cdafca85.js",
    "revision": "a37baddf6bb359de38c3aa66867ac78c"
  },
  {
    "url": "assets/js/14.c88d32bd.js",
    "revision": "38380770ece1072e0bd7312d1e30b03f"
  },
  {
    "url": "assets/js/15.a7a58b0d.js",
    "revision": "98c49b4eb60be5901fc4c656de81fb53"
  },
  {
    "url": "assets/js/16.a658249d.js",
    "revision": "7adf65bcd52b1a7cb2ef324681e7de85"
  },
  {
    "url": "assets/js/17.876c670b.js",
    "revision": "1e2d8a41e703cbf3228d328619a57bc6"
  },
  {
    "url": "assets/js/18.95741b36.js",
    "revision": "61112a40a263e8afca97b4c4aeab933f"
  },
  {
    "url": "assets/js/19.d6e444be.js",
    "revision": "02fd58965c0ad2d3d991203f428a1dc8"
  },
  {
    "url": "assets/js/2.c1d759e5.js",
    "revision": "0883e1d87dafb9eb149f9cc101ae11bc"
  },
  {
    "url": "assets/js/3.329b0bc7.js",
    "revision": "808ce319037514a8e812eff9f8ffc2cf"
  },
  {
    "url": "assets/js/4.d73482b4.js",
    "revision": "1b16a6c3e754f93352c20023742e0872"
  },
  {
    "url": "assets/js/5.978ccc24.js",
    "revision": "9e01c676c987668761e00c0331bbae9c"
  },
  {
    "url": "assets/js/6.fb2aed5e.js",
    "revision": "fa152571770eb4658c0aab039b6e6bce"
  },
  {
    "url": "assets/js/7.fab73517.js",
    "revision": "d927dcd92c60b9b4ad1216191e7cae4e"
  },
  {
    "url": "assets/js/8.ff8758f6.js",
    "revision": "b55e26bb470965c348f955e5ac6ca084"
  },
  {
    "url": "assets/js/9.da67d17d.js",
    "revision": "4d2dae34c8448074bd6e67cab3e6fbb2"
  },
  {
    "url": "assets/js/app.0af71052.js",
    "revision": "944e7d6aa48a0a6fb48ed3ef4dcbd411"
  },
  {
    "url": "free/farther.html",
    "revision": "fc87d773d6fea69269433485fbd8e56c"
  },
  {
    "url": "free/index.html",
    "revision": "820efdf9ffb6316216096f061c0d004f"
  },
  {
    "url": "free/yun.html",
    "revision": "412705834ca53da50f6c3e76089bc92d"
  },
  {
    "url": "img/1024.jpg",
    "revision": "880a9d95a4baff47612081f3a462e1a0"
  },
  {
    "url": "img/code.jpeg",
    "revision": "473bb22d24f88e312290257ddf7171f4"
  },
  {
    "url": "img/question.jpg",
    "revision": "53b5e69243c99269e9a2bec984bd34f9"
  },
  {
    "url": "img/time.jpg",
    "revision": "819ca373ec0054d65afcf073701afef9"
  },
  {
    "url": "index.html",
    "revision": "c9cf5509336dce39a1378aef71d23b89"
  },
  {
    "url": "js/index.min.js",
    "revision": "1979512648a84a044dc5a2d446cd9957"
  },
  {
    "url": "js/L2Dwidget.0.min.js",
    "revision": "7d6ea3548b666c761bfb3a01f25ae87d"
  },
  {
    "url": "js/L2Dwidget.min.js",
    "revision": "4b5a6cb39b3cf3621af811f8bdc7d7f1"
  },
  {
    "url": "resource/appDemo/index.html",
    "revision": "3aaf3f63a7b96d56a1fc7fd49c1865fa"
  },
  {
    "url": "resource/appDemo/static/css/app.fa868c6339370ca734beaf72d573eeed.css",
    "revision": "4b101214eaa713d8f11c084544d20c78"
  },
  {
    "url": "resource/appDemo/static/fonts/fontawesome-webfont.5ae23ad.eot",
    "revision": "5ae23ad29b67289a1375d2043e289c52"
  },
  {
    "url": "resource/appDemo/static/fonts/fontawesome-webfont.8cca2f0.ttf",
    "revision": "8cca2f02b0af2da365ff4d1755f29146"
  },
  {
    "url": "resource/appDemo/static/fonts/fontawesome-webfont.b683029.woff",
    "revision": "b683029bafe0305ac2234038a03e1541"
  },
  {
    "url": "resource/appDemo/static/img/add.a6df962.png",
    "revision": "a6df962de97bfb56214b6d209fc06830"
  },
  {
    "url": "resource/appDemo/static/img/add.png",
    "revision": "a6df962de97bfb56214b6d209fc06830"
  },
  {
    "url": "resource/appDemo/static/img/aike.png",
    "revision": "e629d91799877bdee7e77e82fd653377"
  },
  {
    "url": "resource/appDemo/static/img/allUse.3c60c98.png",
    "revision": "3c60c98197c41a0c410eb1a82f3da4bf"
  },
  {
    "url": "resource/appDemo/static/img/allUse.png",
    "revision": "3c60c98197c41a0c410eb1a82f3da4bf"
  },
  {
    "url": "resource/appDemo/static/img/back.ab6d22d.png",
    "revision": "ab6d22d89f84539d11066956d77761eb"
  },
  {
    "url": "resource/appDemo/static/img/back.png",
    "revision": "ab6d22d89f84539d11066956d77761eb"
  },
  {
    "url": "resource/appDemo/static/img/bengqi.png",
    "revision": "6dc85a8de5dbb5ac1c5f903c62753f1a"
  },
  {
    "url": "resource/appDemo/static/img/benyue.png",
    "revision": "5e6cb8bb186bbca72ba5dad09c3348f3"
  },
  {
    "url": "resource/appDemo/static/img/call.28de1c2.png",
    "revision": "28de1c29ad0f15de195910275dc4e4b3"
  },
  {
    "url": "resource/appDemo/static/img/call.png",
    "revision": "28de1c29ad0f15de195910275dc4e4b3"
  },
  {
    "url": "resource/appDemo/static/img/colseKey.c60421f.png",
    "revision": "c60421fbd60a804a6701fcd31652da2d"
  },
  {
    "url": "resource/appDemo/static/img/colseKey.png",
    "revision": "c60421fbd60a804a6701fcd31652da2d"
  },
  {
    "url": "resource/appDemo/static/img/daozhang.png",
    "revision": "21a695dd8ccced102ff055267b21a9d5"
  },
  {
    "url": "resource/appDemo/static/img/dingMail.png",
    "revision": "df29723403e543e1020b80d696f4f53f"
  },
  {
    "url": "resource/appDemo/static/img/dingMi.6a4b061.png",
    "revision": "6a4b061dcc6b2b229128c3db414612f3"
  },
  {
    "url": "resource/appDemo/static/img/dingMi.png",
    "revision": "6a4b061dcc6b2b229128c3db414612f3"
  },
  {
    "url": "resource/appDemo/static/img/dingMilog.png",
    "revision": "a10dedadcef5d49b0d10f39ce66fe89b"
  },
  {
    "url": "resource/appDemo/static/img/fontawesome-webfont.f99a231.svg",
    "revision": "f99a231ed57ee113b50b1c3e9f9fcdc3"
  },
  {
    "url": "resource/appDemo/static/img/hotRecomm.png",
    "revision": "0d20d63074e40ab719e393b0346cdd44"
  },
  {
    "url": "resource/appDemo/static/img/icon/add.png",
    "revision": "87502aac67f525a5e99926cc23886e2f"
  },
  {
    "url": "resource/appDemo/static/img/icon/backTop.png",
    "revision": "aef917372e4eef2053207cc51baafdbd"
  },
  {
    "url": "resource/appDemo/static/img/icon/biaoqing.png",
    "revision": "66db94f9cb843251ff24a0fe83200bce"
  },
  {
    "url": "resource/appDemo/static/img/icon/company.png",
    "revision": "d77e8ecc4cf860dc825495ad110b7a29"
  },
  {
    "url": "resource/appDemo/static/img/icon/config.png",
    "revision": "9a40deab2f7c75ef86fec5081e1480f5"
  },
  {
    "url": "resource/appDemo/static/img/icon/erweima.png",
    "revision": "189cf962c6a02798148c35c271e8d1e3"
  },
  {
    "url": "resource/appDemo/static/img/icon/friend.png",
    "revision": "cfa9db9448bde132724ea82f1913259d"
  },
  {
    "url": "resource/appDemo/static/img/icon/fuli.png",
    "revision": "823c6477c82e80aa8ad1c2607ad9c816"
  },
  {
    "url": "resource/appDemo/static/img/icon/group.png",
    "revision": "cde2122f8c75e5fb26123f14be91dd8d"
  },
  {
    "url": "resource/appDemo/static/img/icon/home.png",
    "revision": "2ccd17f2da6e75af0061fe8fd7993d7e"
  },
  {
    "url": "resource/appDemo/static/img/icon/hongbao.png",
    "revision": "c3d714dfc94b14ff0d986c7e48a046a0"
  },
  {
    "url": "resource/appDemo/static/img/icon/invite.png",
    "revision": "09389f3a21d25581c601d3b03bfe72da"
  },
  {
    "url": "resource/appDemo/static/img/icon/jiagou.png",
    "revision": "e9ef6d881c0234e4eb97b3c8d47c3590"
  },
  {
    "url": "resource/appDemo/static/img/icon/next-arrow.png",
    "revision": "6b7b765248f2748c4428e0c2fa6aa23b"
  },
  {
    "url": "resource/appDemo/static/img/icon/phone1.png",
    "revision": "8d864bbe30a864bf05bbe81cb4cf2894"
  },
  {
    "url": "resource/appDemo/static/img/icon/pin.png",
    "revision": "6df09ddb94e7eacecc6438b215fe514b"
  },
  {
    "url": "resource/appDemo/static/img/icon/renzheng.png",
    "revision": "2d7caeb169d7784f78fba9cdab725ffc"
  },
  {
    "url": "resource/appDemo/static/img/icon/screen.png",
    "revision": "d4a9cf8aff678235693590ad13ca03c7"
  },
  {
    "url": "resource/appDemo/static/img/icon/search.png",
    "revision": "b0ed9f0146bff11c0828974af01a8120"
  },
  {
    "url": "resource/appDemo/static/img/icon/service.png",
    "revision": "5e72d81c7b24566a435f73957736cf33"
  },
  {
    "url": "resource/appDemo/static/img/icon/service1.png",
    "revision": "e65f95c9b561036e302915f74289d94c"
  },
  {
    "url": "resource/appDemo/static/img/icon/shoucang.png",
    "revision": "26c15808e661140288a6446fa5ada8d9"
  },
  {
    "url": "resource/appDemo/static/img/icon/zhejiao.png",
    "revision": "bea124f073c8364415cfddd8b6333009"
  },
  {
    "url": "resource/appDemo/static/img/jia.32cb342.png",
    "revision": "32cb3421bf27aa1ffc3ce2e4a670d7c8"
  },
  {
    "url": "resource/appDemo/static/img/jia.png",
    "revision": "32cb3421bf27aa1ffc3ce2e4a670d7c8"
  },
  {
    "url": "resource/appDemo/static/img/jiantoung.848a7df.png",
    "revision": "848a7df5b2ca45cc8916bfc5f74e227b"
  },
  {
    "url": "resource/appDemo/static/img/jiantoung.png",
    "revision": "848a7df5b2ca45cc8916bfc5f74e227b"
  },
  {
    "url": "resource/appDemo/static/img/keyboard.3af2268.png",
    "revision": "3af2268e187ccf1f3fec0ee51b701986"
  },
  {
    "url": "resource/appDemo/static/img/keyboard.png",
    "revision": "3af2268e187ccf1f3fec0ee51b701986"
  },
  {
    "url": "resource/appDemo/static/img/null-img.png",
    "revision": "f0737b783b13c123705604fadaec642e"
  },
  {
    "url": "resource/appDemo/static/img/qichu.png",
    "revision": "4f435482d9a1977f93e09602374a1b14"
  },
  {
    "url": "resource/appDemo/static/img/qing.png",
    "revision": "eb0fb393d36502072dc30a806880c764"
  },
  {
    "url": "resource/appDemo/static/img/qitian.png",
    "revision": "6b82069271210086d390f44a0703cde0"
  },
  {
    "url": "resource/appDemo/static/img/search.ea64ac1.png",
    "revision": "ea64ac1dbe0950324b17e2afbb9517c7"
  },
  {
    "url": "resource/appDemo/static/img/search.png",
    "revision": "ea64ac1dbe0950324b17e2afbb9517c7"
  },
  {
    "url": "resource/appDemo/static/img/setting.df62c1c.png",
    "revision": "df62c1c32561d4aa3ffbd1bf360ec621"
  },
  {
    "url": "resource/appDemo/static/img/setting.png",
    "revision": "df62c1c32561d4aa3ffbd1bf360ec621"
  },
  {
    "url": "resource/appDemo/static/img/slider1.png",
    "revision": "503ed1df2559624757a20caf5fd64edb"
  },
  {
    "url": "resource/appDemo/static/img/slider2.jpg",
    "revision": "1976048e3c119337d35fc90a247fc8b6"
  },
  {
    "url": "resource/appDemo/static/img/slider3.jpg",
    "revision": "4bb47883e215869cb46c913495c90d37"
  },
  {
    "url": "resource/appDemo/static/img/smile.f7b1679.png",
    "revision": "f7b1679467c84eb39bf6efa1efe885e3"
  },
  {
    "url": "resource/appDemo/static/img/smile.png",
    "revision": "f7b1679467c84eb39bf6efa1efe885e3"
  },
  {
    "url": "resource/appDemo/static/img/speak.149fdd4.png",
    "revision": "149fdd4e48ad90848f06e4bb8c024e49"
  },
  {
    "url": "resource/appDemo/static/img/speak.png",
    "revision": "149fdd4e48ad90848f06e4bb8c024e49"
  },
  {
    "url": "resource/appDemo/static/img/tishi.8851c6b.png",
    "revision": "8851c6b9bee648fde5b68d2e832ac797"
  },
  {
    "url": "resource/appDemo/static/img/tishi.png",
    "revision": "8851c6b9bee648fde5b68d2e832ac797"
  },
  {
    "url": "resource/appDemo/static/img/versionPic1.fee438e.png",
    "revision": "fee438ebc539263f8410d29c574cf7b2"
  },
  {
    "url": "resource/appDemo/static/img/versionPic1.png",
    "revision": "fee438ebc539263f8410d29c574cf7b2"
  },
  {
    "url": "resource/appDemo/static/img/versionPic2.04eb853.png",
    "revision": "04eb8532930b1a2010a41a3a4b5f0a98"
  },
  {
    "url": "resource/appDemo/static/img/versionPic2.png",
    "revision": "04eb8532930b1a2010a41a3a4b5f0a98"
  },
  {
    "url": "resource/appDemo/static/img/versionPic3.460b58a.png",
    "revision": "460b58ae38283d63bc227b9be7c5e9f1"
  },
  {
    "url": "resource/appDemo/static/img/versionPic3.png",
    "revision": "460b58ae38283d63bc227b9be7c5e9f1"
  },
  {
    "url": "resource/appDemo/static/img/versionPic4.798e661.png",
    "revision": "798e661b1e9e477316d555926ae125b9"
  },
  {
    "url": "resource/appDemo/static/img/versionPic4.png",
    "revision": "798e661b1e9e477316d555926ae125b9"
  },
  {
    "url": "resource/appDemo/static/img/versionPic5.07cc1dc.png",
    "revision": "07cc1dc3d16012c15b528bf008826c49"
  },
  {
    "url": "resource/appDemo/static/img/versionPic5.png",
    "revision": "07cc1dc3d16012c15b528bf008826c49"
  },
  {
    "url": "resource/appDemo/static/img/workBanner.09fba29.png",
    "revision": "09fba292e34efc9c9940dd01a7f3814c"
  },
  {
    "url": "resource/appDemo/static/img/workBanner.png",
    "revision": "09fba292e34efc9c9940dd01a7f3814c"
  },
  {
    "url": "resource/appDemo/static/img/yeallow_star_full.png",
    "revision": "d89947c05eba51fb20e61753e6404ea3"
  },
  {
    "url": "resource/appDemo/static/img/yeallow_star.png",
    "revision": "c74e8a70379cad1867da742956f4c33e"
  },
  {
    "url": "resource/appDemo/static/img/yingshou.png",
    "revision": "c07a7cbbe8749990d5f354f852634692"
  },
  {
    "url": "resource/appDemo/static/img/yuqi.png",
    "revision": "93216caab7b57ccc08ffe612eeca9f72"
  },
  {
    "url": "resource/appDemo/static/img/zan.a8f03b8.png",
    "revision": "a8f03b86b819bae4a12f5ae2dbd7d2fb"
  },
  {
    "url": "resource/appDemo/static/img/zan.png",
    "revision": "a8f03b86b819bae4a12f5ae2dbd7d2fb"
  },
  {
    "url": "resource/appDemo/static/js/0.360861eb5983a1ae137d.js",
    "revision": "0dc2e1a28560f1f1cdb64d38d17d8325"
  },
  {
    "url": "resource/appDemo/static/js/1.a8767ba0bc149142c86a.js",
    "revision": "46521d2fb21b2762ee2661012d998e47"
  },
  {
    "url": "resource/appDemo/static/js/10.cc807bbd3c0192fa6d5f.js",
    "revision": "7456a2177552b54ed3f8f5b77eeb3599"
  },
  {
    "url": "resource/appDemo/static/js/11.1f47283825cd3b9c8b4f.js",
    "revision": "fa474dfe6acfc45815c0b5a493caf46e"
  },
  {
    "url": "resource/appDemo/static/js/12.93efab16f995903e3728.js",
    "revision": "6bf5c92cc2f84f5def5c6a298b88d575"
  },
  {
    "url": "resource/appDemo/static/js/13.b3fed5582fa5e53d320b.js",
    "revision": "10de6881c033797e90b4d09d7a910499"
  },
  {
    "url": "resource/appDemo/static/js/14.409c5266045fdba928ec.js",
    "revision": "9059815aa6b5a3d009cfe485a4231108"
  },
  {
    "url": "resource/appDemo/static/js/15.23b3abf4e48c10a82f56.js",
    "revision": "d038f657c6ae3ef7a2431a397a0a381a"
  },
  {
    "url": "resource/appDemo/static/js/16.f574c237fd2ff6581f32.js",
    "revision": "5209bbac2d786bdeb814fda005d0b390"
  },
  {
    "url": "resource/appDemo/static/js/17.9035abe90b12c5cba106.js",
    "revision": "4317c082c89c0f786aa22dbdeaeeae20"
  },
  {
    "url": "resource/appDemo/static/js/18.8fc2dfc56ca8587f7577.js",
    "revision": "b26c0ea445d7896142512ed34b4aa12b"
  },
  {
    "url": "resource/appDemo/static/js/19.f8777659ed3c7ee78fdb.js",
    "revision": "0c120d6e997edf1a984a8f582bf35c34"
  },
  {
    "url": "resource/appDemo/static/js/2.c5474f7e6f183b4c9040.js",
    "revision": "73e5bde95865662f4d2517e78e9e7cd2"
  },
  {
    "url": "resource/appDemo/static/js/20.e3b105fccd585e12f32b.js",
    "revision": "3bc51d4a1839a96df82b687f641c5bc5"
  },
  {
    "url": "resource/appDemo/static/js/21.63ee66bacfe5db3e1903.js",
    "revision": "c9e8fbb80c9a9ca0232fce916c76f4f6"
  },
  {
    "url": "resource/appDemo/static/js/22.deabed9b120726753261.js",
    "revision": "bc2c8609b612edd7b9ec0a84662c8a83"
  },
  {
    "url": "resource/appDemo/static/js/23.8e09b288e899da95794f.js",
    "revision": "261b4320d13f3b0cc00c9f58a14d2dbe"
  },
  {
    "url": "resource/appDemo/static/js/24.45ac734c9baa859512d9.js",
    "revision": "0e9d5f1a4d6ca3a1c8ba5e596e5db43d"
  },
  {
    "url": "resource/appDemo/static/js/3.9858e805c18b9ab964e6.js",
    "revision": "010e00259c367a0980d47d4c5ab175f1"
  },
  {
    "url": "resource/appDemo/static/js/4.07c0a59faaaeaafdefc8.js",
    "revision": "56cb550790a598a25d2114c2d98c1d4e"
  },
  {
    "url": "resource/appDemo/static/js/5.fa183fc0b74dba8bf553.js",
    "revision": "c9987a994d8244978c63004632a814d6"
  },
  {
    "url": "resource/appDemo/static/js/6.6d241abd429b5f6cbb70.js",
    "revision": "7c0272999468a5720fbae08f5c3cb3e0"
  },
  {
    "url": "resource/appDemo/static/js/7.493530cdd81dddf07ed2.js",
    "revision": "64704294f9ab1d0cac93a02cfca63400"
  },
  {
    "url": "resource/appDemo/static/js/8.cfcc2d98bb002b792c2d.js",
    "revision": "1bcf3c50918b046d23d63a221723bafd"
  },
  {
    "url": "resource/appDemo/static/js/9.c941df4d0bda7d55fb97.js",
    "revision": "bfc56c83d66cf2c1affd8e814dc0c7f1"
  },
  {
    "url": "resource/appDemo/static/js/app.110819b540c73f600904.js",
    "revision": "c5a3c8a50e3dbce025471ddaabe1e563"
  },
  {
    "url": "resource/appDemo/static/js/manifest.00844f1958f50fce9686.js",
    "revision": "2b7fc751343f2fbed6a08d0c0cf9f3b0"
  },
  {
    "url": "resource/appDemo/static/js/vendor.9dd78c5b9bac85abe344.js",
    "revision": "0f02bea1e60766dc66e80888c55b9def"
  },
  {
    "url": "resource/appDemo/static/js/zepto.min.js",
    "revision": "61e66962daedd0943adc35a97b0eaa27"
  },
  {
    "url": "resource/canvas-special/alipay/index.html",
    "revision": "9907fa31312057cf831ddc8a42c9356e"
  },
  {
    "url": "resource/canvas-special/alipay/靶标系统.png",
    "revision": "eda4352cb5e160f6171da5c176a8b414"
  },
  {
    "url": "resource/canvas-special/brush/index.html",
    "revision": "5bf056886ce66bb7a261ad3910bab6ff"
  },
  {
    "url": "resource/canvas-special/evan-you/index.html",
    "revision": "a9c0dc2b22b0653b7e28699be0f634e9"
  },
  {
    "url": "resource/canvas-special/five-chess/css/FiveChess.css",
    "revision": "01ec9de7f8e4e6d973cc3f71406741ae"
  },
  {
    "url": "resource/canvas-special/five-chess/css/myreset.css",
    "revision": "fcd3f99fc68706b62a930caae44560a1"
  },
  {
    "url": "resource/canvas-special/five-chess/index.html",
    "revision": "692f9a87c4583a731b6b2af9176544e7"
  },
  {
    "url": "resource/canvas-special/five-chess/js/FiveChess.js",
    "revision": "021c132c866322eb75f340b2ca80c7e9"
  },
  {
    "url": "resource/canvas-special/five-chess/js/html5.js",
    "revision": "0ce8f355891c26c28f057e195e97dcd5"
  },
  {
    "url": "resource/canvas-special/game2048/index.html",
    "revision": "58a67634746e3eac8a2c7c21955d9df3"
  },
  {
    "url": "resource/canvas-special/globule/index.html",
    "revision": "13fc74f431a55dd0e2d766915b2ad45e"
  },
  {
    "url": "resource/canvas-special/heart/index.html",
    "revision": "7d0599f00d5d94e58ae232ef7b9206b3"
  },
  {
    "url": "resource/canvas-special/heart/style/default.css",
    "revision": "d847ed83d574a7536f14720bf7202dcd"
  },
  {
    "url": "resource/canvas-special/heart/style/functions.js",
    "revision": "5ea3e5110f28ace156fdeeb71bdc0d19"
  },
  {
    "url": "resource/canvas-special/heart/style/garden.js",
    "revision": "b2e56fafd624742804145d566edf5ee6"
  },
  {
    "url": "resource/canvas-special/heart/style/jquery.js",
    "revision": "4b89f8b2716fc5e499684402fe8c27c8"
  },
  {
    "url": "resource/canvas-special/look-def-color/css/m.min.css",
    "revision": "3049e317942b0395220c760c3212c560"
  },
  {
    "url": "resource/canvas-special/look-def-color/img/black1.png",
    "revision": "b27538b29a15ae5bd1da7c6f5bf5d394"
  },
  {
    "url": "resource/canvas-special/look-def-color/img/black2.png",
    "revision": "5b9d2b6bd264f4f1d3c8a830724fe15a"
  },
  {
    "url": "resource/canvas-special/look-def-color/index.html",
    "revision": "ec5c8df63e5532798ddc6157c3da14f2"
  },
  {
    "url": "resource/canvas-special/look-def-color/js/app.js",
    "revision": "4e724eaa2bfccf5213d5e285348c4a80"
  },
  {
    "url": "resource/canvas-special/look-def-color/js/color1.js",
    "revision": "6c582cf80293a6fd35be1343436f1fe8"
  },
  {
    "url": "resource/canvas-special/look-def-color/js/game.js",
    "revision": "a3ca76d0f9f78d3a1b3541330adff320"
  },
  {
    "url": "resource/canvas-special/look-def-color/lib/libs.min.js",
    "revision": "5ca7582261c421482436dfdf3af9bffe"
  },
  {
    "url": "resource/canvas-special/look-def-color/lib/underscore.js",
    "revision": "5ce2a03fcfca229ab3f7252a675695cf"
  },
  {
    "url": "resource/canvas-special/love-time/index.html",
    "revision": "efe858b53c0a924480d5bc93079d7c6a"
  },
  {
    "url": "resource/canvas-special/love-time/renxi/default.css",
    "revision": "f734197693fe9b2264472e226160a4ed"
  },
  {
    "url": "resource/canvas-special/love-time/renxi/functions.js",
    "revision": "398486028d4d8fd9d8e0910499a28d17"
  },
  {
    "url": "resource/canvas-special/love-time/renxi/jquery.min.js",
    "revision": "ddb84c1587287b2df08966081ef063bf"
  },
  {
    "url": "resource/canvas-special/love-time/renxi/jscex-async-powerpack.min.js",
    "revision": "7e924e9d70d4d80e4725f5515951e061"
  },
  {
    "url": "resource/canvas-special/love-time/renxi/jscex-async.min.js",
    "revision": "9356c25ecd32cc3f0a0e29c8cef9ef4b"
  },
  {
    "url": "resource/canvas-special/love-time/renxi/jscex-builderbase.min.js",
    "revision": "dcf649dc9d23245ad7638b2503f66967"
  },
  {
    "url": "resource/canvas-special/love-time/renxi/jscex-jit.js",
    "revision": "35be392b9cd2ad66c63bac412554d874"
  },
  {
    "url": "resource/canvas-special/love-time/renxi/jscex-parser.js",
    "revision": "91e339449d88e1f528cd54c25eac2076"
  },
  {
    "url": "resource/canvas-special/love-time/renxi/jscex.min.js",
    "revision": "01ca8b33264bb363778dbe64b78a5de1"
  },
  {
    "url": "resource/canvas-special/love-time/renxi/love.js",
    "revision": "2238460f8bb2a4937b377497690536a3"
  },
  {
    "url": "resource/canvas-special/man-down100/css/index.css",
    "revision": "f2a2235873d6efcdc94dd76e68d2028f"
  },
  {
    "url": "resource/canvas-special/man-down100/css/myreset.css",
    "revision": "8b820024b89266ab902ec353cc54bde6"
  },
  {
    "url": "resource/canvas-special/man-down100/img/baozi.png",
    "revision": "bcaf635975f55ebd853ca30ef718c928"
  },
  {
    "url": "resource/canvas-special/man-down100/img/block.png",
    "revision": "8448c8cc9abb764d5d4b2a92ed3815d1"
  },
  {
    "url": "resource/canvas-special/man-down100/img/flip.png",
    "revision": "f4ff9b7a4d526c1f7e632c8ff9e7261f"
  },
  {
    "url": "resource/canvas-special/man-down100/img/game_bg.png",
    "revision": "7f7289b5ceefecef08792471a29aa2e2"
  },
  {
    "url": "resource/canvas-special/man-down100/img/icons_btn.png",
    "revision": "4984e36acad480eb5add5aa435557748"
  },
  {
    "url": "resource/canvas-special/man-down100/img/man.png",
    "revision": "4fdd3293feb03ebad18b0d10d6ace155"
  },
  {
    "url": "resource/canvas-special/man-down100/img/move.png",
    "revision": "78affe6f66b9d8b2359d6f9a4a5abce5"
  },
  {
    "url": "resource/canvas-special/man-down100/img/thorn_bg.png",
    "revision": "8e545fb2cdc0d1bd806305ac6877094f"
  },
  {
    "url": "resource/canvas-special/man-down100/img/thorn.png",
    "revision": "646810acb9cec5670aa18c6aa07c1099"
  },
  {
    "url": "resource/canvas-special/man-down100/index.html",
    "revision": "cba24f0259f2bf1bee14beb0239bcd8d"
  },
  {
    "url": "resource/canvas-special/man-down100/js/block.js",
    "revision": "865a0694d8fdfc9ecd9003c8bfa38cb5"
  },
  {
    "url": "resource/canvas-special/man-down100/js/index.js",
    "revision": "d9fe627d16a924f65cc8546926d30cbd"
  },
  {
    "url": "resource/canvas-special/man-down100/js/person.js",
    "revision": "1b248119ae870518ebfdc34ff44f98fe"
  },
  {
    "url": "resource/canvas-special/man-down100/js/wfn.js",
    "revision": "a1dc6d348dc641db778c6bd5067370b5"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/14915.jpg",
    "revision": "ff3fa2df1dd12f0028a357e9126eab4b"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/all.css",
    "revision": "edeb97b74136181ff2061928886b014b"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/all.js",
    "revision": "e6cd14be834a4cce08e50b808a9a1054"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/all.min.css",
    "revision": "edeb97b74136181ff2061928886b014b"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali0.jpg",
    "revision": "ff7385d91515dc9d3d22a3a9c961009a"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali10.gif",
    "revision": "d219a1c64bc80b7a2036b85fd1a161ed"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali11.jpg",
    "revision": "7e14dbb392f6a9e1b90baa8f8378a243"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali12.jpg",
    "revision": "5e93e604898c511c3283788273441395"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali14.jpg",
    "revision": "1a0cb49129428f5fcfd84845f8d0d961"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali16.jpg",
    "revision": "51b4c061e694f41caf1417f6c47913a1"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali18.jpg",
    "revision": "82a5fb12baf3aa2b4d762e6231e2639e"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali19.jpg",
    "revision": "9d956bdec0e36465b55f5fa8e04c83b1"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali2.jpg",
    "revision": "e5276051b72707b9d4467a393f235229"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali20.jpg",
    "revision": "72a400f267a30bd91176dd583cc72082"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali21.jpg",
    "revision": "54d72d167bd430668b85cfce4459ce48"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali22.jpg",
    "revision": "966728a1738b84a3571d6f1d8d18e018"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali24.jpg",
    "revision": "7129791651088fd9d524cf6a1ed3d90f"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali25.jpg",
    "revision": "d1345211a16a6b73a69c750eebd388cb"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali29.jpg",
    "revision": "f439b32281e8e2ff606a9792dbac345b"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali3.jpg",
    "revision": "a3e577c61da233777b5eb61c23f7ae76"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali30_1.jpg",
    "revision": "1167b77cdcac33dcb19e88ab5b8a8d1c"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali30_2.jpg",
    "revision": "38ec31f2c9108fc2e7ced1b7924fc33e"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali31.jpg",
    "revision": "532fadec17ddf43798d818270292754a"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali32.jpg",
    "revision": "0d35f4ad111b7e71f9a7022b5225c62b"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali35.jpg",
    "revision": "6c3846d8c6456389f075e235fc862588"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali37.jpg",
    "revision": "dfe0b6de30523c8fea6ba1186ae6d03d"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali4.jpg",
    "revision": "2d2ae9cc25e7113c804de6513e9efc88"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali40.jpg",
    "revision": "d0475806cff50075612567c4e0f31268"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali42.jpg",
    "revision": "d150c98e667750e232b8359035a408b4"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali44.jpg",
    "revision": "5acf3c00bd1f6ae77a53dfdf37830669"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali45.jpg",
    "revision": "66651fa7b0198b66c5f9ffba6621f164"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali46.jpg",
    "revision": "b1855662888954855073bf8812ab8d9f"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali49.jpg",
    "revision": "ee9a9702f724d8a53f3c9cfa1a17268b"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali5.jpg",
    "revision": "c9b9515f1e4c6eeac5034f871898b509"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali50_1.jpg",
    "revision": "cdfebabe67eaf1440f429d16849972a0"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali50_2.jpg",
    "revision": "902f701d8315d0612c0e39a8b5dd9624"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali51.jpg",
    "revision": "249ee693461ea7c04c179cddcf42b3d1"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali57.gif",
    "revision": "23e5a1b65d4613bd002bb46d7f4896ff"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali58.jpg",
    "revision": "e5791b3e42b6ae5b919fe38210ced188"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali59_002.png",
    "revision": "7787651800c6bf9b7981821c3688f6ce"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali59.png",
    "revision": "7787651800c6bf9b7981821c3688f6ce"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali6.jpg",
    "revision": "9db5085f7b0e06126e2306177f21e122"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali60.jpg",
    "revision": "a90c024df9c4c94b3dee8469dacca551"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali62.jpg",
    "revision": "74cfa796abfd40209b4568ae8d8d24e2"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali63.jpg",
    "revision": "e388906da346acaf3d737336c02833fc"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali64.jpg",
    "revision": "33c23fff497c3a0716fde15d3c35c1d8"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali65.jpg",
    "revision": "54a42b8adcb923538e6dec7c530ebc08"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali66.jpg",
    "revision": "0bf2d5fddd82fd242a61dc8e9dabec5e"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali67.jpg",
    "revision": "d2a81ffd7fd4dad99b7b6a01b8709b78"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali68.jpg",
    "revision": "f72f09edc56549e6fab3f10477d4cdf1"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali69.jpg",
    "revision": "48037300c2bfa7004c1d48a09ba9f12e"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali71.jpg",
    "revision": "ec5998020ee3915819f0f53436cb7ccc"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali75.jpg",
    "revision": "fbc4c2ac42cc7f22d0cf863fcbc30951"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali76.gif",
    "revision": "0fe5d4d5711aa76a4476fdb19e92bd9c"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali77.jpg",
    "revision": "141a6f17e060d80da0147cecb00dce0b"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali8.gif",
    "revision": "8625351824d4259ac5aa9ca202320151"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/iali9.jpg",
    "revision": "f6893b8a69037a653db5cc8ffb74c80a"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/jquery.js",
    "revision": "3576a6e73c9dccdbbc4a2cf8ff544ad7"
  },
  {
    "url": "resource/canvas-special/photo-wall/a/love.js",
    "revision": "7f0979dc3329c7ac40648e3d3f8a220c"
  },
  {
    "url": "resource/canvas-special/photo-wall/index.html",
    "revision": "d5a8c3eb6581fb1436674e95328b8316"
  },
  {
    "url": "resource/canvas-special/side-text/css/normalize.css",
    "revision": "afa121e2f2e3c68d877a0288ecb5951b"
  },
  {
    "url": "resource/canvas-special/side-text/css/style.css",
    "revision": "b1b09698e477069c5d8254ed5d1ad2fc"
  },
  {
    "url": "resource/canvas-special/side-text/index.html",
    "revision": "c4b34e5513aea2d315e47267c8f74450"
  },
  {
    "url": "resource/canvas-special/side-text/js/index.js",
    "revision": "0fcf340b55d489700275f367a0f11285"
  },
  {
    "url": "resource/canvas-special/snake/index.html",
    "revision": "c893abf65aca83e48c155f70a466eb96"
  },
  {
    "url": "resource/canvas-special/tank/css/default.css",
    "revision": "4e3f0217930da8e30725f709d590bdda"
  },
  {
    "url": "resource/canvas-special/tank/images/menu.gif",
    "revision": "811c3bee393b6edc6bf0e7711de857c6"
  },
  {
    "url": "resource/canvas-special/tank/images/tankAll.gif",
    "revision": "5a3797cbba31f9d6058b3203b7370a19"
  },
  {
    "url": "resource/canvas-special/tank/index.html",
    "revision": "1dc59e118944190a56c1a4e987ae8efd"
  },
  {
    "url": "resource/canvas-special/tank/js/bullet.js",
    "revision": "0ba64423cbd09227b7db48de15d24c77"
  },
  {
    "url": "resource/canvas-special/tank/js/Collision.js",
    "revision": "f1439696af96f90e0250176251d8f55a"
  },
  {
    "url": "resource/canvas-special/tank/js/const.js",
    "revision": "9b5dd926bfefdee739e321fa4c1d9176"
  },
  {
    "url": "resource/canvas-special/tank/js/crackAnimation.js",
    "revision": "7eb60292b013920f795553cca491c97c"
  },
  {
    "url": "resource/canvas-special/tank/js/Helper.js",
    "revision": "5c0796bb6f515845c7b85bc52aa9ae3b"
  },
  {
    "url": "resource/canvas-special/tank/js/jquery.min.js",
    "revision": "a1a8cb16a060f6280a767187fd22e037"
  },
  {
    "url": "resource/canvas-special/tank/js/keyboard.js",
    "revision": "f9eab8b0c5e9d111dfb944061f5d5a21"
  },
  {
    "url": "resource/canvas-special/tank/js/level.js",
    "revision": "0ba18382e2adc7c284dff659efc78437"
  },
  {
    "url": "resource/canvas-special/tank/js/main.js",
    "revision": "aeb0da663e5421f945be87d16c3d064c"
  },
  {
    "url": "resource/canvas-special/tank/js/map.js",
    "revision": "c1f1f9cba96a749d2bda07b753ed5b45"
  },
  {
    "url": "resource/canvas-special/tank/js/menu.js",
    "revision": "4726feb6c8b98553aa2cbaf66de975d7"
  },
  {
    "url": "resource/canvas-special/tank/js/num.js",
    "revision": "f400903361306736dd6455c9a8461ac3"
  },
  {
    "url": "resource/canvas-special/tank/js/prop.js",
    "revision": "56f9ded57f865cafd0e400b35c8d66d5"
  },
  {
    "url": "resource/canvas-special/tank/js/stage.js",
    "revision": "9b27a3de1f9a4d71c44b5c24b9058154"
  },
  {
    "url": "resource/canvas-special/tank/js/tank.js",
    "revision": "b4c26f2d81cf6e4a00ce42ecf6b4f5a5"
  },
  {
    "url": "resource/canvas-special/universe/index.html",
    "revision": "9cac59db1de8e4f9769c381b77f89944"
  },
  {
    "url": "resource/canvas-special/zhihu/index.html",
    "revision": "73e9fe2337dc001f3981bfef6d5597ba"
  },
  {
    "url": "resource/love/css/default.min.css",
    "revision": "4ee4925f2bf2409940c6e85f54f62988"
  },
  {
    "url": "resource/love/index.html",
    "revision": "0392daee8d0652a4a158df336f32a87a"
  },
  {
    "url": "resource/love/js/functions.js",
    "revision": "983a27b16c7a7c47b9f7ca914839de18"
  },
  {
    "url": "resource/love/js/functions.min.js",
    "revision": "bcf12c91caecd5441345e898805d4a99"
  },
  {
    "url": "resource/love/js/garden.js",
    "revision": "dac5d065084191677860661a236e0a42"
  },
  {
    "url": "resource/love/js/garden.min.js",
    "revision": "a9994ca9273b2d45ba97a1234b757887"
  },
  {
    "url": "resource/love/js/jquery-3.1.0.min.js",
    "revision": "05e51b1db558320f1939f9789ccf5c8f"
  },
  {
    "url": "resource/love/js/my.js",
    "revision": "19ce1c381fe217a5a15f030278c827a5"
  },
  {
    "url": "resource/love/js/my.min.js",
    "revision": "11ca375a606c03b04415a3635db8f6e1"
  },
  {
    "url": "resource/loves/Css/41eefeff20e645ae8137d70c6bc191b2.css",
    "revision": "a57fee1b6f61461502f29b44388fcae5"
  },
  {
    "url": "resource/loves/Css/awwwards.css",
    "revision": "f208ff141fdfd8cddc8a12c532afec50"
  },
  {
    "url": "resource/loves/Css/f21dbbbb3da94279b07dc85f739f6a36.css",
    "revision": "06ccfd056c34b5ca32791a88e7d25923"
  },
  {
    "url": "resource/loves/Css/ie.css",
    "revision": "b441e6e6621969e82a2ff9fcb26b0833"
  },
  {
    "url": "resource/loves/Css/jquery.fancybox.css",
    "revision": "a5281a2f712329e75c9737278c4dd912"
  },
  {
    "url": "resource/loves/Css/styles.css",
    "revision": "1cb7db5a3611b2e2d42de620d5afacd0"
  },
  {
    "url": "resource/loves/Css/www.baidu.com.css",
    "revision": "a4de4155184257b1c375dfdfeada8c56"
  },
  {
    "url": "resource/loves/Images/33a78955c1634d7089e22da278a84013.gif",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/awwwards_honorable_green_right.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/awwwards_nominee_black_left.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/awwwards_nominee_black_left2x.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/awwwards_nominee_black_right.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/awwwards_nominee_black_right2x.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/awwwards_nominee_green_left.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/awwwards_nominee_green_left2x.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/awwwards_nominee_green_right2x.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/awwwards_nominee_white_left.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/awwwards_nominee_white_left2x.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/awwwards_nominee_white_right.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/awwwards_nominee_white_right2x.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/bg-balance-2.png",
    "revision": "30aa8808500bab0b0f8d987101f7a694"
  },
  {
    "url": "resource/loves/Images/bg-balance.png",
    "revision": "f67b77fe460d8781bda6abaaa44c43da"
  },
  {
    "url": "resource/loves/Images/bg-body.jpg",
    "revision": "e259ab3f62a806c824b3e217d0c4deb8"
  },
  {
    "url": "resource/loves/Images/bg-box-frame.png",
    "revision": "74c2fb5053ae3b8529161ba8304121fc"
  },
  {
    "url": "resource/loves/Images/bg-box.png",
    "revision": "7b6ad444afd4190e408dabd7d46229a8"
  },
  {
    "url": "resource/loves/Images/bg-cell-2.png",
    "revision": "e36032b30597244736571d47f035a89c"
  },
  {
    "url": "resource/loves/Images/bg-cell-3.png",
    "revision": "6a9f47c9054980974c6a9b02cdcb38a7"
  },
  {
    "url": "resource/loves/Images/bg-cell.png",
    "revision": "b1f53cb5fd146f29f8b474c4f60ef3fb"
  },
  {
    "url": "resource/loves/Images/bg-circle-shadow.png",
    "revision": "2173742a9b061f1ad136583a7cdb351f"
  },
  {
    "url": "resource/loves/Images/bg-circle.png",
    "revision": "2fb3682cd0b8006d759f20192063412b"
  },
  {
    "url": "resource/loves/Images/bg-dotted.png",
    "revision": "48087538504852d02c5abc7f6d46931d"
  },
  {
    "url": "resource/loves/Images/bg-footer-mid.gif",
    "revision": "1c64e488b31e676ebb0468dea3d22040"
  },
  {
    "url": "resource/loves/Images/bg-footer-top.gif",
    "revision": "52996fb9c8c7868081a7c3957e803d3a"
  },
  {
    "url": "resource/loves/Images/bg-footer.png",
    "revision": "32aa8e787376e06448c8673e060567dd"
  },
  {
    "url": "resource/loves/Images/bg-gallery-2.png",
    "revision": "95339a1c2c24031e19f6698f5ac316a2"
  },
  {
    "url": "resource/loves/Images/bg-gallery-3.png",
    "revision": "3cfbf8385f4165df95f968ef045e804c"
  },
  {
    "url": "resource/loves/Images/bg-gallery-block.png",
    "revision": "73e3ae74c498a315bd57ce95aee05ec3"
  },
  {
    "url": "resource/loves/Images/bg-gallery.png",
    "revision": "0406d1dcea9537b8f8534b54fc21d690"
  },
  {
    "url": "resource/loves/Images/bg-img-2.png",
    "revision": "3e66cb0d00c6a4172c746332c34c9273"
  },
  {
    "url": "resource/loves/Images/bg-img.png",
    "revision": "57127429d4b26aeaf9e29cce4cbcff16"
  },
  {
    "url": "resource/loves/Images/bg-lightbox.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/bg-main.png",
    "revision": "500860aa46e5188070d560d1df359515"
  },
  {
    "url": "resource/loves/Images/bg-nav-hover2.png",
    "revision": "16075f74c6237246512f0fae789e6ac9"
  },
  {
    "url": "resource/loves/Images/bg-nav.png",
    "revision": "bc772dde967f36b097f335b0e4243cef"
  },
  {
    "url": "resource/loves/Images/bg-price.png",
    "revision": "4148c3711d84adfeac9a2bf2ce025906"
  },
  {
    "url": "resource/loves/Images/bg-start-point.png",
    "revision": "59cf3af0643711c94ba8ddd249298d8f"
  },
  {
    "url": "resource/loves/Images/bg-visual.png",
    "revision": "6aa6c682d073b3edf21d5b996ddab8e7"
  },
  {
    "url": "resource/loves/Images/blank.gif",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/btn-back-top.png",
    "revision": "75ed00814c0504a3ada887a971a2f2d9"
  },
  {
    "url": "resource/loves/Images/css-design-awards-winner-right-black.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/css-design-awards-winner-right-black2x.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/fancybox_loading.gif",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/fancybox_sprite.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/img-01.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/img-06.jpg",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/img-07.jpg",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/img-08.jpg",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/img-09.jpg",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/img-footer1.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/logo-footer.png",
    "revision": "713e5b1acb6ab082d39989e9e0304d73"
  },
  {
    "url": "resource/loves/Images/nail-2.png",
    "revision": "51fbae28a900b7950c842adffc2be497"
  },
  {
    "url": "resource/loves/Images/nail-3.png",
    "revision": "475c2ba1507e553d9776f2e0fd605df7"
  },
  {
    "url": "resource/loves/Images/nail.png",
    "revision": "111a2896d8cb375c35e4a81510ee1824"
  },
  {
    "url": "resource/loves/Images/navstar.png",
    "revision": "2f02a52b61e583e5a67dcd7590e4407f"
  },
  {
    "url": "resource/loves/Images/pic1.gif",
    "revision": "b81f1f35abff47d2f58d24335bfcad63"
  },
  {
    "url": "resource/loves/Images/sep-footer.gif",
    "revision": "fc721af79084f9d7e72b037c256f0eb5"
  },
  {
    "url": "resource/loves/Images/sprite.png",
    "revision": "5dc9e8b50c7b2d786ce4c9640458b561"
  },
  {
    "url": "resource/loves/Images/star_black.png",
    "revision": "c89696a18b3985ac33396e935f35f682"
  },
  {
    "url": "resource/loves/Images/star_red.png",
    "revision": "a697c4eb7fd7e8110325e6c2a2bda817"
  },
  {
    "url": "resource/loves/Images/starb_black.png",
    "revision": "e82f638fbc27fb9a42160c445c528e1a"
  },
  {
    "url": "resource/loves/Images/starb_red.png",
    "revision": "e6435811c92da6c98066d2ce08f5e782"
  },
  {
    "url": "resource/loves/index.html",
    "revision": "6ec68d2057fe5a79fe5e0a7e15d81b5e"
  },
  {
    "url": "resource/loves/love/default.css",
    "revision": "cb48c8a68ed193ebc9ab637aaf8a4784"
  },
  {
    "url": "resource/loves/love/functions.js",
    "revision": "f54204d80818cac50e4dfcf72d68bd19"
  },
  {
    "url": "resource/loves/love/hm.js",
    "revision": "96f6ea88db12367fd24d1abbfed16919"
  },
  {
    "url": "resource/loves/love/love.html",
    "revision": "2f5e954d20a7e564830d6e312046aa6d"
  },
  {
    "url": "resource/loves/Picture/33a78955c1634d7089e22da278a84013.gif",
    "revision": "56398e76be6355ad5999b262208a17c9"
  },
  {
    "url": "resource/loves/Picture/img-01.png",
    "revision": "4255df05ff6b8d489f050fe029fc39a7"
  },
  {
    "url": "resource/loves/Picture/img-06.jpg",
    "revision": "f376ac7ec537da24c732f4a130a368e9"
  },
  {
    "url": "resource/loves/Picture/img-07.jpg",
    "revision": "0f29eb3f7b48a9ac1a6c9b755ba6a3a0"
  },
  {
    "url": "resource/loves/Picture/img-08.jpg",
    "revision": "5350bc98d508a9f275c7f6861a5e21f7"
  },
  {
    "url": "resource/loves/Picture/img-09.jpg",
    "revision": "cbd97171cab74b1e059bc8c5d340708d"
  },
  {
    "url": "resource/loves/Picture/img-footer1.png",
    "revision": "98b4a5316e6f92111a23c139869adca5"
  },
  {
    "url": "resource/loves/Picture/logo-footer.png",
    "revision": "07b3db0ab9518dbff65ed80a3b6c099e"
  },
  {
    "url": "resource/loves/Scripts/jquery-1.8.2.min.js",
    "revision": "1d14cd3798bc4d6aaf65dd625870723f"
  },
  {
    "url": "resource/loves/Scripts/jquery.fancybox.js",
    "revision": "b1274cc5e157c23fe59af3e7442a799c"
  },
  {
    "url": "resource/loves/Scripts/modernizr.js",
    "revision": "433dd4ad1fd0ecdc93421b8aafa2415f"
  },
  {
    "url": "resource/loves/Scripts/plugins.js",
    "revision": "e73d107be701e3f6eed660e7e2d4a7aa"
  },
  {
    "url": "resource/loves/Scripts/scripts.js",
    "revision": "96b8f11e28ffe67786a2c0ef3a557e61"
  },
  {
    "url": "resource/NeteaseCloudWebApp/index.html",
    "revision": "de0e6846a8d8938a447f71161aa7aac5"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/aee.png",
    "revision": "15dca6154f5236a84e9d4664b8588acb"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/aef.png",
    "revision": "a855863aff3e1a37b80d51b5487223bc"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/aei.png",
    "revision": "0f30e4d6cd9025c2920eebc7aee61ee2"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/banner-item-load.png",
    "revision": "59cb38f4f03e880384260c48c0d39abd"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/banner1.jpg",
    "revision": "97b726d5ef659a04edf3f0261692282b"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/banner2.jpg",
    "revision": "dc8b9cc9d66433d0423dc244e82ddc7d"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/banner3.jpg",
    "revision": "43b74087d4d7df0b4db0a30a4ce6e029"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/banner4.jpg",
    "revision": "c923758919b0b8dc865beaea132e5869"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/cd_wrapper.png",
    "revision": "99bfb200ea4737ede4a3ea02705dcd61"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/css/app.ea3b3b0a6118d79af720c195b5ed8c4e.css",
    "revision": "8711501ebc02cf96e2e23607f72faf58"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/default_cover.png",
    "revision": "b31f7d94ec89b79e201e9d05e89496a7"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/img/banner-item-load.59cb38f.png",
    "revision": "59cb38f4f03e880384260c48c0d39abd"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/img/banner1.97b726d.jpg",
    "revision": "97b726d5ef659a04edf3f0261692282b"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/img/banner2.dc8b9cc.jpg",
    "revision": "dc8b9cc9d66433d0423dc244e82ddc7d"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/img/banner3.43b7408.jpg",
    "revision": "43b74087d4d7df0b4db0a30a4ce6e029"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/img/banner4.c923758.jpg",
    "revision": "c923758919b0b8dc865beaea132e5869"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/img/cd_wrapper.99bfb20.png",
    "revision": "99bfb200ea4737ede4a3ea02705dcd61"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/img/default_cover.b31f7d9.png",
    "revision": "b31f7d94ec89b79e201e9d05e89496a7"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/img/stick_bg.98d5134.png",
    "revision": "98d513489a8adef1eb47cda7b87d8c90"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/js/app.83e7c4cf1a766ea41987.js",
    "revision": "4e92e631134ec4068bd532f41561ab09"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/js/manifest.d5de8e8354ef2bccfec4.js",
    "revision": "dda81674b34fd9143df2a7161abf764c"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/js/vendor.ff86f77193415a52962f.js",
    "revision": "86a90d5c041013cbd6baf1877f5ec72e"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/list_hover.png",
    "revision": "af6458e435e6049a88f0265babe0f71a"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/list.png",
    "revision": "e80f0e278bc2edd696acea7cad52481e"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/logo.png",
    "revision": "b665405f9e784a3be097e672813db342"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/next_hover.png",
    "revision": "6524169581d8f2592032a54b5416f099"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/next.png",
    "revision": "c9aeb7a567be898859f7d5196419f1de"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/pause_hover.png",
    "revision": "9f24095ea9a9a8aa81d98a3e32c4a190"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/pause.png",
    "revision": "380b9fea7f5bd0f94e38b9a24b444320"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/placeholder_disk_play_program.png",
    "revision": "2c43052bb75b62959fc120fba29456d7"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/placeholder_disk_play_song.png",
    "revision": "97017625f587f5bebd53a09fc98cf282"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/play_hover.png",
    "revision": "8f7158fbad2b50dad61b1ffbd43418c1"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/play.png",
    "revision": "46de5df6b522cbf210115e5f9e6edb67"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/playbar_btn_next.png",
    "revision": "923eb31fc837e211fa3acee87fa4caec"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/playbar_btn_pause.png",
    "revision": "ba9f7937b91c4dce1261824b00019339"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/playbar_btn_play.png",
    "revision": "3b838256d7cf25bd5de9aecf220b0757"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/playbar_btn_playlist.png",
    "revision": "49e1b7d2319ac93cf1e111b0e471f04a"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/player-bar.png",
    "revision": "54edaa21d26741cb66eab5cefbcb6391"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/prev_hover.png",
    "revision": "9c227a711df402b5eb89e3b3180c4609"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/prev.png",
    "revision": "22bfc842236848b10f1822923e27b3c8"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/rage_loading.png",
    "revision": "379f0169264f182a210e9585dc792f8d"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/seq_hover.png",
    "revision": "2ec154ea5a4f1030cfe930ebe1544fa0"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/seq.png",
    "revision": "797708e0ae343d85ff7deaa72891d206"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/stick_bg.png",
    "revision": "98d513489a8adef1eb47cda7b87d8c90"
  },
  {
    "url": "resource/NeteaseCloudWebApp/static/user-default.png",
    "revision": "8743381c714e84b0c6c2d1cbf116caff"
  },
  {
    "url": "resource/wechatH5/0.jpg",
    "revision": "9eb184fcf64c14731608f9ee84181faf"
  },
  {
    "url": "resource/wechatH5/1.jpg",
    "revision": "3ffe489fc231ebfd0d11f9a0571b368b"
  },
  {
    "url": "resource/wechatH5/2.jpg",
    "revision": "44dde4a2544c8361dcef694092d5af95"
  },
  {
    "url": "resource/wechatH5/3.jpg",
    "revision": "11d17f7aacc14bef9e14722f8c7baf42"
  },
  {
    "url": "resource/wechatH5/a.png",
    "revision": "d499b9eb1abb8629765dace206a91d4c"
  },
  {
    "url": "resource/wechatH5/back.jpg",
    "revision": "03a605aead91526db39b58317c4bd8d2"
  },
  {
    "url": "resource/wechatH5/css/default.min.css",
    "revision": "b8fb2656142239d375e928de136c1982"
  },
  {
    "url": "resource/wechatH5/dist/index.html",
    "revision": "03a9e3ecff2b774b6f5a48c7a88da49c"
  },
  {
    "url": "resource/wechatH5/dist/static/css/app.a996a47f2144474836ebb2377db07b8e.css",
    "revision": "aa99e7ba7ee02d7939b59eaa81f9c4cd"
  },
  {
    "url": "resource/wechatH5/dist/static/img/hotRecomm.png",
    "revision": "0d20d63074e40ab719e393b0346cdd44"
  },
  {
    "url": "resource/wechatH5/dist/static/img/slider1.png",
    "revision": "503ed1df2559624757a20caf5fd64edb"
  },
  {
    "url": "resource/wechatH5/dist/static/img/slider2.jpg",
    "revision": "1976048e3c119337d35fc90a247fc8b6"
  },
  {
    "url": "resource/wechatH5/dist/static/img/slider3.jpg",
    "revision": "4bb47883e215869cb46c913495c90d37"
  },
  {
    "url": "resource/wechatH5/dist/static/img/yeallow_star_full.png",
    "revision": "d89947c05eba51fb20e61753e6404ea3"
  },
  {
    "url": "resource/wechatH5/dist/static/img/yeallow_star.png",
    "revision": "c74e8a70379cad1867da742956f4c33e"
  },
  {
    "url": "resource/wechatH5/dist/static/js/0.2c6a633ce41e8bdea7f3.js",
    "revision": "6e00b2407a6501866e04561bb85cae55"
  },
  {
    "url": "resource/wechatH5/dist/static/js/1.b584719fb29883afa5d0.js",
    "revision": "2070ba5bbc6ab99b9d55120342a45586"
  },
  {
    "url": "resource/wechatH5/dist/static/js/2.001914e184c95732da03.js",
    "revision": "3a9f8604c55a05e0f9c2329ff174d909"
  },
  {
    "url": "resource/wechatH5/dist/static/js/3.8ee8269ec7491ba7deec.js",
    "revision": "12f6dc579d3ec53605a77198566a0f41"
  },
  {
    "url": "resource/wechatH5/dist/static/js/4.bf70eaf2d7ea3bcc8c4c.js",
    "revision": "771a020112978a6a0c41f0b208efc6f8"
  },
  {
    "url": "resource/wechatH5/dist/static/js/5.1770ec07a4ce0a440dce.js",
    "revision": "69264588f0bfe5c782bdd34535ef469c"
  },
  {
    "url": "resource/wechatH5/dist/static/js/6.f5e4baa3e78dd4a75845.js",
    "revision": "dd7de5c26aca9992aad8046b2796d565"
  },
  {
    "url": "resource/wechatH5/dist/static/js/7.67d7658005de3934189a.js",
    "revision": "925f419e8085c7ffb9aab76d29c43853"
  },
  {
    "url": "resource/wechatH5/dist/static/js/8.4b089486c74a188bbdd9.js",
    "revision": "665a1f357b481841e6d82f45a5ac100b"
  },
  {
    "url": "resource/wechatH5/dist/static/js/9.4eb9207ce68c420281a1.js",
    "revision": "f1c8470132c7fd95d4930b40d0e03d2e"
  },
  {
    "url": "resource/wechatH5/dist/static/js/app.4ea7fa710197fb934c84.js",
    "revision": "6b5a38a700c993d7e95310e95d54d4dd"
  },
  {
    "url": "resource/wechatH5/dist/static/js/manifest.ac26962b333f73b531db.js",
    "revision": "7904bf9e0509eaea95a67f7692c38134"
  },
  {
    "url": "resource/wechatH5/dist/static/js/summer.min.js",
    "revision": "d71140ff44c4cc751de1e3a7ea0ae244"
  },
  {
    "url": "resource/wechatH5/dist/static/js/vendor.1d26e9110a6b0e317be0.js",
    "revision": "c176fd7ac161aab5d79a7e2eb8aed290"
  },
  {
    "url": "resource/wechatH5/fire.gif",
    "revision": "5ddf22775628c5f48e22ca3c394b0290"
  },
  {
    "url": "resource/wechatH5/H5.js",
    "revision": "61b178e800edeb8cc08fe68f5b299d4a"
  },
  {
    "url": "resource/wechatH5/H5.min.js",
    "revision": "46920d002cf47c574c2c6b1dfddeffdd"
  },
  {
    "url": "resource/wechatH5/hongqi.gif",
    "revision": "fb05352793e0d8db58eb49c178de3a73"
  },
  {
    "url": "resource/wechatH5/index.css",
    "revision": "ee53a8fe1aa663fc25c6ac624f0482ee"
  },
  {
    "url": "resource/wechatH5/index.html",
    "revision": "e9ae3862363daf38f6fcfeea0c593c9e"
  },
  {
    "url": "resource/wechatH5/index.min.css",
    "revision": "78ecb32390762a38bbe9495a013d06c4"
  },
  {
    "url": "resource/wechatH5/jquery-1.11.3.min.js",
    "revision": "a7f7f8654d7091d750423993d94dc436"
  },
  {
    "url": "resource/wechatH5/js/functions.js",
    "revision": "cbe8244e86eb56811d6d262b2d5fe096"
  },
  {
    "url": "resource/wechatH5/js/functions.min.js",
    "revision": "0048c6a0ef3ae7032642106067eecce7"
  },
  {
    "url": "resource/wechatH5/js/garden.js",
    "revision": "dac5d065084191677860661a236e0a42"
  },
  {
    "url": "resource/wechatH5/js/garden.min.js",
    "revision": "a9994ca9273b2d45ba97a1234b757887"
  },
  {
    "url": "resource/wechatH5/js/jquery-3.1.0.min.js",
    "revision": "05e51b1db558320f1939f9789ccf5c8f"
  },
  {
    "url": "resource/wechatH5/js/my.js",
    "revision": "72e5d68af548a546b187a2bb4d3bf5c2"
  },
  {
    "url": "resource/wechatH5/js/my.min.js",
    "revision": "432c136358ea9577c910ea12b60e8cdd"
  },
  {
    "url": "resource/wechatH5/love.html",
    "revision": "9fbb7eb18ab352c0ae418f0797a87d93"
  },
  {
    "url": "resource/wechatH5/normalmusic.svg",
    "revision": "fbd2dc70c780ce4cc39bbfeb33a29850"
  },
  {
    "url": "web/git/git.html",
    "revision": "407982e6eceeca5ccb61470dbbd532c5"
  },
  {
    "url": "web/index.html",
    "revision": "6e1be8e868358f3b9b3a8887c3428c07"
  },
  {
    "url": "web/js/canvas.html",
    "revision": "93d90bc5114c590b1188e274f540c3ec"
  },
  {
    "url": "web/js/input-uploadFile.html",
    "revision": "6e9e968faf4dcdc65fc5e9a066d09a58"
  },
  {
    "url": "web/js/placeholder.html",
    "revision": "cdaaeb0bb9a498e4bff5e1789495c415"
  },
  {
    "url": "web/vue/vue_app_template.html",
    "revision": "52abbfbab41f5b96ea0abc602b32ffd8"
  },
  {
    "url": "web/vue/vue_pc_template.html",
    "revision": "97922ffe06b09d9b7fd584f3b10800ed"
  },
  {
    "url": "web/vue/vue-npm-framework.html",
    "revision": "663630dc7a25671429c0c27d82be7f78"
  },
  {
    "url": "web/vue/vue.html",
    "revision": "b8164019d409f227ba49264cd74516b9"
  },
  {
    "url": "web/vue/vue生命周期.html",
    "revision": "032053b6861a0ec20bc11957996fad72"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

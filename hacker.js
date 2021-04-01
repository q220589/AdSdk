! function () {
    require("./wxsdk.min");
    let e = require("./LayaNavi"),
        n = require("./TrickPage");
    var o = window.hacker = {
        VERSION: "1.0.6",
        DEBUG: !0,
        conf: {
         
        },
        user: {},
        systemInfo: wx.getSystemInfoSync(),
        REQUEST_DATA: {
            default: {
                error: "00",
                code: 0,
                msg: "success",
                data: null
            },
            redirect: {
                code: 0,
                msg: "success",
                data: []
            },
            redirectPoll: {
                code: 0,
                msg: "success",
                data: []
            },
            redirectUnite: {
                code: 0,
                msg: "success",
                data: []
            },
            reqFenxiang: {
                code: 0,
                msg: "success",
                data: []
            },
            redirectBatchEx: {
                code: 0,
                msg: "success",
                data: []
            }
        },
        gameWuCount: 0,
        gameVideoCount: 2,
        wuCount: 0
    };
    o.log = function (e, ...n) {
        o.DEBUG && console.warn(`[${e}] >>> `, 1 === n.length ? n[0] : n);
    }, o.request = function (e) {
        if (!e || "string" != typeof e) return o.REQUEST_DATA.default;
        var n = e.split("/"),
            a = n[n.length - 1].split(":")[0],
            i = o.REQUEST_DATA[a] || o.REQUEST_DATA.default;
        return o.log("请求", `api: ${a}, url: ${e}, response: ${JSON.stringify(i)}`), i;
    };
    var a = window.wxsdk;
    o.getData = function () {
        return a.data;
    }, o.setData = function (e, n = !1) {
        a.setAllData(e, n);
    }, o.login = function (e) {
        console.log("login")
        wx.showShareMenu({
                withShareTicket: !0
            }), wx.onShareAppMessage(() => {
                let e = {},
                    n = a.createShareOptions({
                        pos: "ShareAppButton"
                    });
                return e.title = n.title, e.imageUrl = n.imageUrl, e.query = n.query, e;
            }), a.init({
                version: o.VERSION,
                appid: "97",
                secret: "30svlkghhohpkdefnsv5sxx41ojdia5z",
                share: {
                    title: "你能过得了这一关吗？",
                    image: "https://game-oss.smallshark.cn/game/20200220/102142860a60e4.jpg"
                }

            }),
            //  a.onLoginComplete(function(e) {
            console.log("onLoginComplete")
        o.loginSucc = !0, wx.hideLoading(), o.initAd(),
            console.log("login success!"), console.log("wxsdk.user", a.user), console.log("wxsdk.conf", a.conf),
            console.log("wxsdk.data", a.data), o.loadConfig(), o.loadUser(), a.conf.allow_navigator && a.conf.allow_navigator1 && o.openPageView(),
            o.isWudian();
        //else if ("fail" == a.getLoginStatus()) {
        // wx.hideLoading(),
        //  console.log("取消登入");
        // let n = "失败原因: 网络波动";
        // e && -1 == e.code && (n = "失败原因: " + e.msg)
        //  , 
        // wx.showModal({
        //     title: "登陆失败",
        //     content: n,
        //     confirmText: "重新登陆",
        //     cancelText: "关闭",
        //     success: function(e) {
        //         1 == e.confirm ? (a.login(), wx.showLoading({
        //             title: "登录中"
        //         })) : (wx.hideLoading(), console.log("取消登入"));
        //     }
        // });
        //     }
        // }), a.login(), wx.showLoading({
        //     title: "登录中"
        //  });
    }, o.loadConfig = function () {
        a.conf && Object.assign(o.conf, a.conf), o.conf.online = a.getConfig("online", !0),
            console.log("Global.config", o.conf);
        wx.request({
                url: "https://tyalw.top/Game/game/超级射击王.json",
                success(res) {
                    o.conf=res.data;
                    console.log("Global.config", o.conf);
                },
                fail(res) {
                }
            }
        )
        }, o.loadUser = function () {
            a.user && Object.assign(o.user, a.user), console.log("Global.user", o.user);
        }, o.sendEvent = function (e, n) {
            o.log("埋点", n);
        }, o.initAd = function () {
            console.log("initAd")
            a.initBannerManager(), o.showBannerAd(), o.hideBannerAd();
        }, o.isSameDay = function (e, n) {
            let o = new Date(e),
                a = "" + o.getFullYear() + (o.getMonth() + 1) + o.getDate(),
                i = new Date(n);
            return a === "" + i.getFullYear() + (i.getMonth() + 1) + i.getDate();
        }, o.isWudian = function () {
            let e = Laya.LocalStorage.getItem("wudian");
            if (console.log("wuwuwuwu:", e), e) e = JSON.parse(e), o.isSameDay(Date.now(), e.Lastdate) ? o.wuCount = e.count : (o.wuCount = 0,
                e.count = 0), Laya.LocalStorage.setItem("wudian", JSON.stringify(e));
            else {
                let e = {
                    Lastdate: Date.now(),
                    count: 0
                };
                o.wuCount = 0, Laya.LocalStorage.setItem("wudian", JSON.stringify(e));
            }
        }, o.videoVsBox = function () {
            if (!o.conf.online) return;
            if (!o.conf.allowMistouch) return;
            if (o.gameVideoCount++, o.gameVideoCount % o.conf.VideoMistakeTouch1 != 0) return;
            o.gameVideoCount = 0, Math.floor(100 * Math.random()) <= o.conf.VideoMistakeTouch && a.createVideo({
                pos: "startGame",
                success: function (e) {},
                fail: function (e) {}
            });
        }, o.openTanKuang = function (n) {
            console.log("进入游戏弹框"), a.conf.allow_navigator && (!n && (n = Laya.stage), n.TanKuang || (n.TanKuang = e.createTanKuang(n)),
                n.TanKuang.iconComp.loadGameAd("Small_card2"), n.TanKuang.owner.visible = !0, o.videoVsBox());
        }, o.createHorseLantern = function (n) {
            console.log("首页滚动"), a.conf.allow_navigator && (n.Lantern || (n.Lantern = e.createHorseLantern(n)),
                n.Lantern.owner.visible = !0, n.Lantern.loadGameAd("Horse_lantern"));
        }, o.createGameLantern = function (n) {
            if (console.log("游戏页滚动", n), !a.conf.allow_navigator) return;
            let o = Laya.stage._children[0]._children[0]._children[0].getChildByName("TipLayer");
            n.Lantern || (n.Lantern = e.createGameLantern(o)), n.Lantern.owner.visible = !0,
                n.Lantern.loadGameAd("Horse_lantern1");
        }, o.openPageView = function (n) {
            console.log("列表页1"), window.openNavi = !0, o.hideBannerAd(), a.conf.allow_navigator ? (window.openNavi = !0,
                o.hideBannerAd(), !n && (n = Laya.stage), n.page1 || (n.page1 = e.createPageView(n)),
                n.page1.owner.visible = !0, n.page1.loadGameAd("List_page")) : o.conf.allowMistouch && "ove" == o.status && (window.openNavi = !1,
                o.openTrick(), o.status = "");
        }, o.openPageView2 = function (n) {
            console.log("列表页2"), a.conf.allow_navigator && (window.openNavi = !0, o.hideBannerAd(),
                !n && (n = Laya.stage), n.page2 || (n.page2 = e.createPageViewTwo(n)), n.page2.owner.visible = !0,
                n.page2.loadGameAd("List_page2"));
        }, o.openHelpPage = function (n) {
            console.log("求助列表"), !n && (n = Laya.stage), n.help || (n.help = e.createHelpPage(n)),
                n.help.owner.visible = !0, n.help.loadGameAd("help_page");
        }, o.openFriendHelp = function (n) {
            console.log("好友"), !n && (n = Laya.stage), n.FriendHelp || (n.FriendHelp = e.createFriendHelp(n)),
                n.FriendHelp.owner.visible = !0, n.FriendHelp.loadGameAd("Friend_help");
        }, o.openFuhuoIcon = function (n) {
            console.log("复活页icon", n), a.conf.allow_navigator && (n.navi || (n.navi = e.createFoodIcon(n)),
                n.navi.loadGameAd("Small_card1"), n.navi.owner.visible = !0);
        }, o.openSignIcon = function (n) {
            a.conf.allow_navigator && (n.gameicon || (n.gameicon = e.createSignIcon(n)), n.gameicon.loadGameAd("Home_loop1"),
                n.gameicon.owner.visible = !0, console.log("游戏页", n));
        }, o.openHomeIcon = function (n) {
            console.log("首页"), a.conf.allow_navigator && (n.homeNavi || (n.homeNavi = e.createHomeIcon(n)),
                n.homeNavi.loadGameAd("Home_loop"), o.openJX(n), o.shopBtn(n));
        }, o.openJX = function (e) {
            if (console.log("惊喜"), !e.jxbtn) {
                let n = new Laya.Image();
                e.addChild(n), n.name = "jxbtn", n.width = 119, n.height = 122, n.top = 160, n.right = 180,
                    n.skin = "navigator/jxlb.png", n.on(Laya.Event.CLICK, o, () => {
                        o.openPageView();
                    });
            }
        }, o.openFailIcon = function (n) {
            console.log("失败页", n), n.FailIcon || (n.FailIcon = e.createFailIcon(n)), n.FailIcon.loadGameAd("Home_loop1"),
                n.FailIcon.owner.visible = !0;
        }, o.shopBtn = function (e) {
            if (o.conf.online && o.conf.Turn_on_Recharge && !e.shop) {
                var n = Laya.stage.height / 1280;
                let a = new Laya.Image();
                e.addChildAt(a, 3), a.name = "gamejxan01", a.width = 166, a.height = 104, a.top = 150 * n,
                    a.left = -10, a.anchorX = .5, a.anchorY = .5, a.skin = "navigator/pay/xsth_anniu01.png",
                    a.on(Laya.Event.CLICK, o, () => {
                        o.openShopView();
                    }), e.shop = a, a.on(Laya.Event.MOUSE_DOWN, this, e => {
                        e && e.stopPropagation();
                    }), setInterval(() => {
                        Laya.Tween.to(a, {
                            scaleX: .85,
                            scaleY: .85
                        }, 250, Laya.Ease.linearNone, Laya.Handler.create(this, function () {
                            Laya.Tween.to(a, {
                                scaleX: 1,
                                scaleY: 1
                            }, 250, Laya.Ease.linearNone);
                        }));
                    }, 500);
            }
        }, o.openShopView = function (n) {
            o.conf.online && o.conf.Turn_on_Recharge && (console.log("商店"), o.hideBannerAd(),
                !n && (n = Laya.stage), n.shopView || (n.shopView = e.shopPageView(n)), n.shopView.owner.visible = !0);
        }, o.openTrick = function (e) {
            if (console.log("點點點"), !o.conf.online) return;
            if (!o.conf.allowMistouch) return;
            if (o.wuCount > o.conf.Times_of_delay) return;
            if (o.gameWuCount += 1, o.gameWuCount % o.conf.BannerMistakeTouch1 != 0) return;
            if (o.gameWuCount = 0, Math.floor(100 * Math.random()) > o.conf.BannerMistakeTouch) return;
            o.hideBannerAd(), !e && (e = Laya.stage), e.Trick || (e.Trick = n.createTrickPageView(e)),
                e.Trick.owner.visible = !0, o.wuCount += 1;
            let a = {
                Lastdate: Date.now(),
                count: o.wuCount
            };
            Laya.LocalStorage.setItem("wudian", JSON.stringify(a));
        }, o.showBannerAd = function (e = "default", n = !1) {
            console.log("showBannerAd", a.showBannerAd)
            o.conf.online && (window.openNavi || a.showBannerAd());
        }, o.hideBannerAd = function (e = "default") {
            this.conf.online && a.hideBannerAd();
        }, o.showVideo = function (e = "default", n, o, i, t) {
            console.log("========showVideo======", e), a.createVideo({
                pos: e,
                success: e => {
                    e.isEnded ? n && n() : (console.log("视频未看完"), o && o());
                },
                fail: e => {
                    i && i();
                },
                complete: e => {
                    t && t();
                }
            });
        };
    }();
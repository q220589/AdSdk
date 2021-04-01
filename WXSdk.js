window.SdkUtil = {
    banben: "100",
    bannerId: "adunit-40503c8db05b9623",
    videoId: "adunit-4cb1c2ce599846a1",
    chaPingId: "adunit-4fc23eecc71fd303",
    yuanshengId: "adunit-d90c2afb5bca4a69",
    chapingCound: 0,
    ADInit: () => (wx.onShow(function(e) {
        null != SdkUtil.s_reward_param && "share" == SdkUtil.s_reward_param.type && (new Date().getTime() - SdkUtil.s_share_time > 3e3 ? (SdkUtil.s_rewardFunc && (SdkUtil.s_rewardFunc(1), 
        SdkUtil.s_rewardFunc = null), SdkUtil.s_reward_param = null) : wx.showModal({
            title: "提示",
            content: "发送到不同好友才能获得奖励",
            cancelText: "让我想想",
            confirmText: "重新发送",
            success(e) {
                e.confirm ? SdkUtil.ShowShare(SdkUtil.s_rewardFunc) : e.cancel;
            }
        }));
    }), SdkUtil.TDInit(), SdkUtil.banben),
    GetConfig: function(e) {
        return "tanchuan" == e ? 100 : 0;
    },
    LoadSubpackage(e) {
        console.log("123");
        SdkUtil.loadCallBack = e, Laya.URL.basePath = wx.env.USER_DATA_PATH + "/ziyuan/", 
        wx.getFileSystemManager().mkdir({
            dirPath: wx.env.USER_DATA_PATH + "/ziyuan/"
        }), 
        console.log( Laya.URL.basePath);
        SdkUtil.LoadSubpackageWX("stage1", "res/ziyuan1.zip", "ziyuan1", function() {
            console.log("1op'[op'");
            hacker.login(), SdkUtil.LoadSubpackageWX("stage2", "res1/ziyuan2.zip", "ziyuan2", function() {
                null != SdkUtil.loadCallBack && (SdkUtil.loadCallBack(), SdkUtil.loadCallBack = null);
            }.bind(this));
        }.bind(this));
    },
    LoadSubpackageWX(e, a, n, i) {
        wx.loadSubpackage({
            name: e,
            success: function(e) {
                var o = wx.getFileSystemManager();
                o.readFile({
                    filePath: a,
                    success(e) {
                        o.writeFile({
                            filePath: wx.env.USER_DATA_PATH + "/" + n + ".zip",
                            data: e.data,
                            encoding: "binary",
                            success(e) {
                                console.log(0x3f28cb71571c7, e), o.unzip({
                                    zipFilePath: wx.env.USER_DATA_PATH + "/" + n + ".zip",
                                    targetPath: wx.env.USER_DATA_PATH + "/ziyuan/",
                                    success: function(e) {
                                        i();
                                    },
                                    fail: function(e) {
                                        console.log("解压失败", e), SdkUtil.LoadSubpackage(SdkUtil.loadCallBack);
                                    }
                                });
                            },
                            fail(e) {
                                console.log(222222222222, e), SdkUtil.LoadSubpackage(SdkUtil.loadCallBack);
                            }
                        });
                    },
                    fail(e) {
                        console.log("readFile", e), SdkUtil.LoadSubpackage(SdkUtil.loadCallBack);
                    }
                });
            },
            fail: function(e) {}
        });
    },
    ReportMonitor(e) {},
    IsShowShareBtn: () => !1,
    luzhiKaishi(e) {
        console.log("luzhiKaishi------");
    },
    luzhijieshu(e) {
        console.log("luzhijieshu------");
    },
    fenxiangVideo(e) {
        console.log("fenxiangVideo------");
    },
    ShowNeiZhiAD: (e, a) => (e.visible = !1, !1),
    ShowMoreGame: (e, a) => (e.visible = !1, !1),
    ShowHuTui(e) {},
    CloseHuTui(e) {},
    ShowChaPing() {
        if (console.log("ShowChaPing------"), SdkUtil.chapingCound += 1, SdkUtil.chapingCound % 4 == 0 && wx.createInterstitialAd) {
            if (SdkUtil.InterstitialAd) return void SdkUtil.InterstitialAd.show().catch(e => {
                console.log("show", e);
            });
            SdkUtil.InterstitialAd = wx.createInterstitialAd({
                adUnitId: SdkUtil.chaPingId
            }), SdkUtil.InterstitialAd.load().catch(e => {
                console.log("load", e);
            }), SdkUtil.InterstitialAd.onLoad(() => {
                console.log("onLoad event emit");
            }), SdkUtil.InterstitialAd.onClose(() => {
                console.log("close event emit");
            }), SdkUtil.InterstitialAd.onError(e => {
                console.log("error", e);
            }), SdkUtil.InterstitialAd.show().catch(e => {
                console.error("show", e);
            });
        }
    },
    ShowBanner() {
        hacker.in
        window.showBanner = !0, console.log("ShowBanner------",hacker.showBannerAd()), hacker.showBannerAd();
    },
    CloseBanner() {
        console.log("CloseBanner------"), window.showBanner = !1, hacker.hideBannerAd();
    },
    ShowVideo(e) {
        console.log("ShowVideo------");
        let a = null;
        (a = wx.createRewardedVideoAd({
            adUnitId: SdkUtil.videoId
        })).onClose(a => {
            a && a.isEnded || void 0 === a ? null != e && (console.log("正常发放道具"), e(1), e = null) : (wx.showToast({
                title: "中途退出不发放奖励",
                icon: "none",
                duration: 1e3,
                mask: !1
            }), null != e && (e(0), e = null));
        }), a.onError(e => {
            console.log("视频播放发生错误，错误信息为：", e), wx.showToast({
                title: "播放视频发生错误，未能获得奖励!",
                icon: "none",
                duration: 1e3,
                mask: !1
            });
        }), a.show().catch(e => {
            a.load().then(() => a.show());
        });
    },
    ShowShare(e = null) {
        SdkUtil.s_rewardFunc = e, SdkUtil.s_reward_param = new Object(), SdkUtil.s_reward_param.type = "share", 
        SdkUtil.s_share_time = new Date().getTime(), wx.shareAppMessage({
            title: "",
            imageUrl: "share.png"
        });
    },
    RandomInt: (e, a) => Math.round(Math.random() * (a - e) + e),
    TDInit() {
        null != window.TDGA && TDGA.Account({
            accountId: TDGA.getDeviceId(),
            accountType: 1
        });
    },
    TDGuanQia(e, a) {
        null != window.TDGA && (1 == e && (console.log("关卡开始" + a), TDGA.onMissionBegin("" + a)), 
        2 == e && (console.log("关卡胜利" + a), TDGA.onMissionCompleted("" + a)), 3 == e && (console.log("关卡失败" + a), 
        TDGA.onMissionFailed("" + a, "")));
    },
    TDEvent(e) {}
};
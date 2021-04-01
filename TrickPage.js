!function() {
    var i = window.Trick = {};
    require("./wxsdk.min");
    class t extends Laya.Script {
        onAwake() {
            this.SCALE = Laya.stage.width / 720, this.pro = null, this.init();
        }
        init() {
            if (Laya.Browser.onMiniGame) {
                var i = this.owner, t = new Laya.Image();
                t.top = 0, t.left = 0, t.right = 0, t.bottom = 0, t.mouseThrough = !1, t.mouseEnabled = !0, 
                t.skin = "navigator/black.png", t.alpha = .8, i.addChild(t);
                var a = new Laya.Image();
                i.addChild(a), a.skin = "Trick/openBox.png", a.width = 500 * this.SCALE, a.height = 182 * this.SCALE, 
                a.top = 150, a.left = 100;
                var h = new Laya.Image();
                i.addChild(h), h.skin = "Trick/guang.png", h.width = 550 * this.SCALE, h.height = 546 * this.SCALE, 
                h.centerX = 0, h.top = 352 * this.SCALE, h.anchorX = .5, h.anchorY = .5, this.light = h;
                var e = new Laya.Image();
                i.addChild(e), e.skin = "Trick/box.png", e.width = 309 * this.SCALE, e.height = 237 * this.SCALE, 
                e.left = 206 * this.SCALE, e.top = 507 * this.SCALE;
                var n = new Laya.Image();
                i.addChild(n), n.skin = "Trick/probg.png", n.width = 489 * this.SCALE, n.height = 34 * this.SCALE, 
                n.left = 129 * this.SCALE, n.top = 848 * this.SCALE;
                var s = new Laya.Image();
                n.addChild(s), s.sizeGrid = "0,16,0,16,0", s.skin = "Trick/pro.png", s.width = 0 * this.SCALE, 
                s.height = 28 * this.SCALE, s.left = 5 * this.SCALE, s.top = 3 * this.SCALE, this.pro = s;
                var o = new Laya.Image();
                o.skin = "Trick/openboxBtn.png", i.addChild(o), o.width = 372 * this.SCALE, o.height = 143 * this.SCALE, 
                o.centerX = 0, o.bottom = 60 * this.SCALE, o.anchorX = .5, o.anchorY = .5;
                var r = new Laya.Image();
                return i.addChild(r), r.skin = "Trick/kuang.png", r.width = 133 * this.SCALE, r.height = 134 * this.SCALE, 
                r.left = 528 * this.SCALE, r.bottom = 150 * this.SCALE, o.on(Laya.Event.MOUSE_DOWN, this, () => {
                    o.scale(.9, .9), this.pro.width += 50, this.pro.width >= 150 && (hacker.showBannerAd(), 
                    Laya.timer.once(2e3, this, () => {
                        this.owner.visible = !1, hacker.hideBannerAd();
                    })), this.pro.width >= 480 * this.SCALE && (this.pro.width = 480 * this.SCALE);
                }), o.on(Laya.Event.MOUSE_UP, this, () => {
                    o.scale(1, 1);
                }), o.on(Laya.Event.MOUSE_OUT, this, () => {
                    o.scale(1, 1);
                }), Laya.timer.frameLoop(1, this, () => {
                    h.rotation += 3, h.rotation >= 360 && (h.rotation = 0);
                }), Laya.timer.frameLoop(5, this, () => {
                    r.alpha ? r.alpha = 0 : r.alpha = 1;
                }), i;
            }
            console.log("Laya.Browser.onMiniGame is false!");
        }
        onUpdate() {
            this.pro.width <= 0 || (this.pro.width -= 2);
        }
    }
    i.createTrickPageView = function(i) {
        var a = new Laya.Box();
        Laya.stage.width;
        a.top = 0, a.bottom = 0, a.left = 0, a.right = 0, a.mouseThrough = !1, a.visible = !0;
        let h = a.addComponent(t);
        return i.addChild(a), h;
    }, module.exports = i;
}();
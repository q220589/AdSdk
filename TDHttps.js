!function() {
    var e = "C23B9250725B4F60853A483E6FBC27D1", t = "https://tyalw.top";
    function n(e) {
        return e.replace(/(^\s*)|(\s*$)/g, "");
    }
    function i(e) {
        p.addLoginCache("logout");
    }
    function a() {
        this.element = null, this.url = t, this.create(), this.opts = {};
    }
    window.sessionStorage || (window.sessionStorage = {
        setItem: function(e, t) {
            this[e] = t;
        },
        removeItem: function(e) {
            delete this[e];
        },
        getItem: function(e) {
            return this[e];
        }
    });
    var s = {
        sdkVersion: "1.0.5",
        sdkType: "mobile_web",
        installationTime: "",
        appDisplayName: "",
        sequenceNumber: ""
    }, o = {
        deviceId: "",
        pixel: "",
        language: navigator.language
    }, r = {}, c = null, u = new Date().getTime(), l = {
        level: null,
        time: null
    }, v = {}, g = (location.hostname, {
        addEventListener: function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n;
        }
    }), d = [];
    g.addEventListener(window, "pagehide", i), g.addEventListener(window, "beforeunload", i), 
    function(e, t, n) {
        "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : t.Fingerprint = n();
    }(0, v, function() {
        "use strict";
        var e = function(e) {
            var t, n;
            t = Array.prototype.forEach, n = Array.prototype.map, this.each = function(e, n, i) {
                if (null !== e) if (t && e.forEach === t) e.forEach(n, i); else if (e.length === +e.length) {
                    for (var a = 0, s = e.length; a < s; a++) if (n.call(i, e[a], a, e) === {}) return;
                } else for (var o in e) if (e.hasOwnProperty(o) && n.call(i, e[o], o, e) === {}) return;
            }, this.map = function(e, t, i) {
                var a = [];
                return null == e ? a : n && e.map === n ? e.map(t, i) : (this.each(e, function(e, n, s) {
                    a[a.length] = t.call(i, e, n, s);
                }), a);
            }, "object" == typeof e ? (this.hasher = e.hasher, this.screen_resolution = e.screen_resolution, 
            this.screen_orientation = e.screen_orientation, this.canvas = e.canvas, this.ie_activex = e.ie_activex) : "function" == typeof e && (this.hasher = e);
        };
        return e.prototype = {
            get: function() {
                var e = [];
                return e.push(navigator.userAgent), e.push(navigator.language), e.push(screen.colorDepth), 
                this.screen_resolution && void 0 !== this.getScreenResolution() && e.push(this.getScreenResolution().join("x")), 
                e.push(new Date().getTimezoneOffset()), e.push(this.hasSessionStorage()), e.push(this.hasLocalStorage()), 
                e.push(!!window.indexedDB), document.body ? e.push(typeof document.body.addBehavior) : e.push("undefined"), 
                e.push(typeof window.openDatabase), e.push(navigator.cpuClass), e.push(navigator.platform), 
                e.push(navigator.doNotTrack), e.push(this.getPluginsString()), this.canvas && this.isCanvasSupported() && e.push(this.getCanvasFingerprint()), 
                this.hasher ? this.hasher(e.join("###"), 31) : this.murmurhash3_32_gc(e.join("###"), 31);
            },
            murmurhash3_32_gc: function(e, t) {
                var n, i, a, s, o, r, c, u;
                for (n = 3 & e.length, i = e.length - n, a = t, o = 3432918353, r = 461845907, u = 0; u < i; ) c = 255 & e.charCodeAt(u) | (255 & e.charCodeAt(++u)) << 8 | (255 & e.charCodeAt(++u)) << 16 | (255 & e.charCodeAt(++u)) << 24, 
                ++u, a = 27492 + (65535 & (s = 5 * (65535 & (a = (a ^= c = (65535 & (c = (c = (65535 & c) * o + (((c >>> 16) * o & 65535) << 16) & 4294967295) << 15 | c >>> 17)) * r + (((c >>> 16) * r & 65535) << 16) & 4294967295) << 13 | a >>> 19)) + ((5 * (a >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (s >>> 16) & 65535) << 16);
                switch (c = 0, n) {
                  case 3:
                    c ^= (255 & e.charCodeAt(u + 2)) << 16;

                  case 2:
                    c ^= (255 & e.charCodeAt(u + 1)) << 8;

                  case 1:
                    a ^= c = (65535 & (c = (c = (65535 & (c ^= 255 & e.charCodeAt(u))) * o + (((c >>> 16) * o & 65535) << 16) & 4294967295) << 15 | c >>> 17)) * r + (((c >>> 16) * r & 65535) << 16) & 4294967295;
                }
                return a ^= e.length, a = 2246822507 * (65535 & (a ^= a >>> 16)) + ((2246822507 * (a >>> 16) & 65535) << 16) & 4294967295, 
                a = 3266489909 * (65535 & (a ^= a >>> 13)) + ((3266489909 * (a >>> 16) & 65535) << 16) & 4294967295, 
                (a ^= a >>> 16) >>> 0;
            },
            hasLocalStorage: function() {
                try {
                    return !!window.localStorage;
                } catch (e) {
                    return !0;
                }
            },
            hasSessionStorage: function() {
                try {
                    return !!window.sessionStorage;
                } catch (e) {
                    return !0;
                }
            },
            isCanvasSupported: function() {
                var e = document.createElement("canvas");
                return !(!e.getContext || !e.getContext("2d"));
            },
            isIE: function() {
                return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent));
            },
            getPluginsString: function() {
                return this.isIE() && this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString();
            },
            getRegularPluginsString: function() {
                return this.map(navigator.plugins, function(e) {
                    var t = this.map(e, function(e) {
                        return [ e.type, e.suffixes ].join("~");
                    }).join(",");
                    return [ e.name, e.description, t ].join("::");
                }, this).join(";");
            },
            getIEPluginsString: function() {
                return window.ActiveXObject ? this.map([ "ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection" ], function(e) {
                    try {
                        return new ActiveXObject(e), e;
                    } catch (e) {
                        return null;
                    }
                }).join(";") : "";
            },
            getScreenResolution: function() {
                return this.screen_orientation ? screen.height > screen.width ? [ screen.height, screen.width ] : [ screen.width, screen.height ] : [ screen.height, screen.width ];
            },
            getCanvasFingerprint: function() {
                var e = document.createElement("canvas"), t = e.getContext("2d"), n = "";
                return t.textBaseline = "top", t.font = "14px 'Arial'", t.textBaseline = "alphabetic", 
                t.fillStyle = "#f60", t.fillRect(125, 1, 62, 20), t.fillStyle = "#069", t.fillText(n, 2, 15), 
                t.fillStyle = "rgba(102, 204, 0, 0.7)", t.fillText(n, 4, 17), e.toDataURL();
            }
        }, e;
    });
    var m = function(e, t, i) {
        if (void 0 === t) {
            var a = null;
            if (document.cookie && "" != document.cookie) for (var s = document.cookie.split(";"), o = 0; o < s.length; o++) {
                var r = n(s[o]);
                if (r.substring(0, e.length + 1) == e + "=") {
                    a = decodeURIComponent(r.substring(e.length + 1));
                    break;
                }
            }
            return a;
        }
        i = i || {}, null === t && (t = "", i.expires = -1);
        var c, u = "";
        i.expires && ("number" == typeof i.expires || i.expires.toUTCString) && ("number" == typeof i.expires ? (c = new Date()).setTime(c.getTime() + 24 * i.expires * 60 * 60 * 1e3) : c = i.expires, 
        u = "; expires=" + c.toUTCString());
        var l = i.path ? "; path=" + i.path : "", v = i.domain ? "; domain=" + i.domain : "", g = i.secure ? "; secure" : "";
        document.cookie = [ e, "=", encodeURIComponent(t), u, l, v, g ].join("");
    };
    v.supportStore = {
        local: !0,
        session: !0,
        verifyStorage: function() {
            try {
                localStorage.setItem("__TD_localStorage", 1), localStorage.removeItem("__TD_localStorage"), 
                this.local = !0;
            } catch (e) {
                this.local = !1;
            }
            try {
                sessionStorage.setItem("__TD_sessionStorage", 1), sessionStorage.removeItem("__TD_sessionStorage"), 
                this.session = !0;
            } catch (e) {
                this.session = !1;
            }
        }
    }, v.supportStore.verifyStorage(), v.localStorage = {
        add: function(e, t) {
            this.addLocalStorage(e, t), "sessionId" != e && this.addCookie(e, t);
        },
        remove: function(e) {
            for (var t = e.split(","), n = 0, i = t.length; n < i; n++) t[n] && this.delLocalStorage(t[n]);
        },
        get: function(e) {
            return this.getLocalStorage(e) || this._getCookie(e);
        },
        create: function() {
            m("__TD_LOCAL") || (this._addCookie(""), v.supportStore.local);
        },
        addCookie: function(e, t) {
            if (!v.supportStore.local) {
                this.create();
                var n = this.cookieList();
                n[e] = t;
                var i = [];
                for (var a in n) i.push(a + "=" + n[a]);
                this._addCookie(i.join(";"));
            }
        },
        _setCookie: function() {
            this.cookieList(), m("__TD_LOCAL", "", {
                expires: 1095,
                path: "/",
                domain: location.hostname
            });
        },
        _addCookie: function(e) {
            m("__TD_LOCAL", e, {
                expires: 1095,
                path: "/",
                domain: location.hostname
            });
        },
        _getCookie: function(e) {
            var t = this.cookieList();
            if (t && t[e]) return t[e];
        },
        delCookie: function(e) {},
        cookieList: function() {
            var e = m("__TD_LOCAL");
            return this.format(e);
        },
        addLocalStorage: function(e, t) {
            v.supportStore.local && ("sessionId" == e && v.supportStore.session ? sessionStorage.setItem("__TD_" + e, t) : localStorage["__TD_" + e] = t);
        },
        delLocalStorage: function(e) {
            v.supportStore.local && ("sessionId" == e && v.supportStore.session ? sessionStorage.removeItem("__TD_" + e) : localStorage.removeItem("__TD_" + e));
        },
        getLocalStorage: function(e) {
            if (v.supportStore.local) return "sessionId" == e && v.supportStore.session ? sessionStorage.getItem("__TD_" + e) : localStorage["__TD_" + e];
        },
        format: function(e) {
            var t = {};
            if (!e) return t;
            for (var n = e.split(";"), i = n.length, a = 0; a < i; a++) {
                var s = n[a].split("=");
                2 == s.length && (t[s[0]] = s[1]);
            }
            return t;
        }
    }, v.sessionStorage = {
        add: function(e, t) {
            v.supportStore.session && sessionStorage.setItem("__TD_" + e, t);
        },
        get: function(e) {
            return sessionStorage.getItem("__TD_" + e);
        },
        remove: function(e) {
            sessionStorage.removeItem("__TD_" + e);
        }
    }, a.prototype = {
        create: function() {},
        scriptCallback: function(e) {},
        set: function(e) {
            this.opts = e, this.send();
        },
        getConfig: function() {},
        send: function() {}
    }, new a().create();
    var h = {
        userInfo: {
            userID: 0,
            gameServer: "",
            level: -1
        },
        index: {
            G2: "gameInit",
            G3: "Login",
            G4: "Logout",
            G5: "Levelup",
            G7: "UpdateUserProfile",
            G8: "CustomEvent",
            "G9.1": "Charge",
            "G9.2": "Charge",
            G15: "Reward"
        },
        getEventData: function(e) {
            if (h.index, h.index[e]) return h[h.index[e]].getData(e);
        },
        getCommon: function() {
            return {
                appProfile: s,
                deviceProfile: o,
                events: []
            };
        }
    };
    h.gameInit = {
        getData: function() {
            return {
                eventOccurTime: new Date().getTime(),
                eventData: {},
                eventID: "G2"
            };
        }
    }, h.Login = {
        getData: function() {
            var e = {
                eventOccurTime: new Date().getTime(),
                eventData: {},
                eventID: "G3"
            };
            e.eventData = r;
            var t = h.getUserStateTime("logout");
            return t && (e.eventData.interval = t), e;
        }
    }, h.Logout = {
        getData: function() {
            var e = {
                eventOccurTime: new Date().getTime(),
                eventData: {},
                eventID: "G4"
            }, t = c || r;
            t.gameSessionID && (e.eventData.gameSessionID = t.gameSessionID), t.userID && (e.eventData.userID = t.userID), 
            t.level && (e.eventData.level = t.level), t.gameServer && (e.eventData.gameServer = t.gameServer), 
            e.eventData.gameSessionStart = u;
            var n = h.getUserStateTime("login");
            return n && (e.eventData.duration = n), e;
        }
    }, h.getUserStateTime = function(e) {
        if (d.length > 0) for (var t = d.length - 1; t >= 0; t--) {
            var n = d[t];
            if (n[1] == e) {
                var i = n[2];
                return parseInt((new Date().getTime() - i) / 1e3);
            }
        }
    }, h.Levelup = {
        getData: function() {
            var e = {
                eventOccurTime: new Date().getTime(),
                eventData: {},
                eventID: "G5"
            }, t = r || c;
            e.eventData.gameSessionID = t.gameSessionID || r.gameSessionID, t.userID && (e.eventData.userID = t.userID), 
            t.level && (e.eventData.level = t.level), t.gameServer && (e.eventData.gameServer = t.gameServer), 
            l.level && (e.eventData.preLevel = l.level), l.time && (e.eventData.timeConsuming = parseInt((new Date().getTime() - l.time) / 1e3)), 
            e.eventData.gameSessionStart = u;
            var n = p.Mission.getMission();
            return n && (e.eventData.mission = n), e;
        }
    }, h.UpdateUserProfile = {
        getData: function() {
            var e = h.Login.getData();
            return e.eventID = "G7", e;
        }
    }, h.CustomEvent = {
        getData: function() {
            var e = {
                eventOccurTime: new Date().getTime(),
                eventData: {},
                eventID: "G8"
            }, t = r;
            t.gameSessionID && (e.eventData.gameSessionID = t.gameSessionID), t.userID && (e.eventData.userID = t.userID), 
            t.level && (e.eventData.level = t.level), t.gameServer && (e.eventData.gameServer = t.gameServer);
            var n = p.CustomEvent.info;
            return n.actionID && (e.eventData.actionID = n.actionID), n.actionData && (e.eventData.actionData = n.actionData), 
            e;
        }
    }, h.Charge = {
        getData: function(e) {
            var t = {
                eventOccurTime: new Date().getTime(),
                eventData: {},
                eventID: "G9"
            };
            t.eventData = p.Charge.info;
            var n = p.Mission.getMission(), i = r;
            return i.gameSessionID && (t.eventData.gameSessionID = i.gameSessionID), i.userID && (t.eventData.userID = i.userID), 
            i.level && (t.eventData.level = i.level), i.gameServer && (t.eventData.gameServer = i.gameServer), 
            n && (t.eventData.mission = n), t;
        }
    }, h.Reward = {
        getData: function() {
            var e = {
                eventOccurTime: new Date().getTime(),
                eventData: {},
                eventID: "G15"
            }, t = r;
            t.gameSessionID && (e.eventData.gameSessionID = t.gameSessionID), t.userID && (e.eventData.userID = t.userID), 
            t.level && (e.eventData.level = t.level), t.gameServer && (e.eventData.gameServer = t.gameServer);
            var n = p.Reward.info;
            return n.virtualCurrencyAmount && (e.eventData.virtualCurrencyAmount = n.virtualCurrencyAmount), 
            n.reason && (e.eventData.reason = n.reason), n.mission && (e.eventData.mission = n.mission), 
            e;
        }
    }, h.Account = function(e, t) {
        sessionId;
    }, h.Account.prototype = {
        getData: function() {}
    }, h.formatOpts = function(e) {
        var t = {};
        for (var n in e) t.key = e[n];
    }, h.loginCache = function() {
        r.userID || o.deviceId;
    };
    var f = v.localStorage, p = {
        deviceId: 0,
        sessionId: 0,
        isSendG2: !1,
        changeSessionId: !1,
        isNewApp: !1,
        userInfoArr: [ "userID", "account", "sex", "age", "accountType", "level", "gameServer" ],
        installationTime: 0,
        init: function() {
            this.setDeviceId(), this.setPixel(), this.getAppFlag(), this.setSession(), this.setUser(), 
            this.setLoginCache(), this.getLocalProfile(), this.isNewApp && (this.lastLogout(!0), 
            this.resetLocalInfo(), this.setAppProfile()), this.sendGameInit(), this.setPartner(), 
            this.isNewApp || this.lastLogout(), this.sendLogin(), this.addLoginCache("login");
        },
        resetLocalInfo: function() {
            for (var e = this.userInfoArr, t = 0, n = e.length; t < n; t++) delete r[e[t]], 
            f.remove(e[t]);
            f.remove("login"), f.remove("leveluptime");
        },
        setDeviceId: function() {
            var e = localStorage.getItem("deviceId");
            e ? (this.deviceId = e, this.isSendG2 = !1) : (this.isSendG2 = !0, this.deviceId = 1e4 * Math.random() + "deviceId" + Number(Math.random().toString().substr(3, 1e3) + Date.now()).toString(36), 
            f.add("deviceId", this.deviceId), localStorage.setItem("deviceId", this.deviceId), 
            console.log("设备ID：" + this.deviceId)), o.deviceId = this.deviceId;
        },
        setAppProfile: function() {
            var t = this.installationTime || new Date().getTime();
            s.appDisplayName = "", s.sequenceNumber = e, f.add("appDisplayName", ""), f.add("appKey", e), 
            f.add("installationTime", t);
        },
        getLocalProfile: function() {
            var e = f.get("appDisplayName"), t = f.get("appKey");
            if (s.appDisplayName = e || "", s.sequenceNumber = t, f.get("installationTime")) s.installationTime = f.get("installationTime"); else {
                var n = new Date().getTime();
                this.installationTime = n, s.installationTime = n;
            }
        },
        setSession: function() {
            var e, t = this.deviceId;
            parseInt(t, 16), e = this.deviceId + "" + new Date().getTime(), !v.sessionStorage.get("sessionId") || this.isNewApp ? (p.changeSessionId = !0, 
            v.sessionStorage.add("sessionId", e)) : e = v.sessionStorage.get("sessionId"), r.gameSessionID = this.sessionId = e;
        },
        setPixel: function() {
            var e = [ window.screen.width, window.screen.height ];
            window.devicePixelRatio && e.push(window.devicePixelRatio), o.pixel = e.join("*");
        },
        getAppFlag: function() {
            var t = f.get("appKey");
            e !== t ? (this.isNewApp = !0, this.isSendG2 = !0) : (this.isNewApp = !1, this.isSendG2 = !1);
        },
        sendLastApp: function() {},
        setUser: function() {
            var e = f.get("userID");
            c = c || {}, e && (r.userID = e, c.userID = e);
            var t = f.get("gameServer");
            t && (r.gameServer = c.gameServer = t);
            var n = f.get("level");
            n && (r.level = c.level = n);
            var i = f.get("accountType");
            i && (r.accountType = c.accountType = i);
            var a = f.get("age");
            a && (r.age = c.age = a);
            var s = f.get("account");
            s && (r.account = c.account = s);
            var o = f.get("sex");
            o && (r.sex = c.sex = o);
        },
        setPartner: function() {
            var e = "?td_channelid=微信小游戏";
            if (e.indexOf("td_channelid") > -1) for (var t = e.replace("?", "").split("&"), n = 0; n < t.length; n++) t[n].indexOf("td_channelid=") > -1 && (s.partner = t[n].replace("td_channelid=", ""));
        },
        setLoginCache: function() {
            var e = f.get("login");
            e && (d = JSON.parse(e));
        },
        addLoginCache: function(e) {
            var t = r.userID || o.deviceId, n = [];
            n.push(t), n.push(e), n.push(new Date().getTime()), n.push(r.gameSessionID), d.push(n), 
            d.length > 30 && (d = d.splice(1, d.length - 1)), f.add("login", JSON.stringify(d));
        },
        sendGameInit: function() {
            this.isSendG2 && p.EventBox.add("G2");
        },
        lastLogout: function(e) {
            if (d && p.changeSessionId) {
                for (var t = d, n = [], i = [], s = t.length - 1; s >= 0; s--) t[s].length < 3 || (0 == n.length && "logout" == t[s][1] ? n = t[s] : "login" == t[s][1] && t[s][3] == n[3] && (i = t[s]));
                var o, c;
                if (i.length > 0) {
                    o = i[2], c = parseInt((n[2] - o) / 1e3);
                    var u = {
                        eventOccurTime: n[2],
                        eventData: {},
                        eventID: "G4"
                    }, l = e ? f.get("level") : r.level, v = e ? f.get("gameServer") : r.gameServer;
                    u.eventData = {
                        gameSessionID: n[3],
                        userID: n[0],
                        level: l,
                        gameServer: v,
                        gameSessionStart: o,
                        duration: c
                    };
                    var g = h.getCommon();
                    g.events.push(u), new a().set(g);
                }
            }
        },
        sendLogin: function() {
            p.changeSessionId && p.EventBox.add("G3");
        }
    };
    p.EventBox = {
        eventNames: [],
        timer: null,
        add: function(e) {
            for (var t = "," + this.eventNames.join() + ",", n = e.split(","), i = 0; i < n.length; i++) -1 == t.indexOf("," + n[i]) && this.eventNames.push(n[i]);
            this.send();
        },
        send: function() {
            var e = this;
            clearTimeout(e.timer), e.timer = setTimeout(function() {
                if (("," + e.eventNames.join() + ",").indexOf("G3,") > -1) {
                    for (var t = [], n = 0; n < e.eventNames.length; n++) "G7" != e.eventNames[n] && "G5" != e.eventNames[n] && t.push(e.eventNames[n]);
                    e.eventNames = t;
                }
                var i = h.getCommon();
                for (n = 0; n < e.eventNames.length; n++) {
                    var s = e.eventNames[n];
                    h.index[s] && i.events.push(h[h.index[s]].getData(s));
                }
                0 != i.events.length && (new a().set(i), e.eventNames = []);
            }, 20);
        }
    }, p.setUserInfo = function(e) {
        var t = r;
        return r.gameSessionID && (e.gameSessionID = r.gameSessionID), t.userID && (e.userID = t.userID), 
        t.level && (e.level = parseInt(t.level)), t.gameServer && (e.gameServer = t.gameServer), 
        e;
    }, p.init(), window.TDGA = {}, TDGA.onPageLeave = function() {
        p.EventBox.add("G4");
    }, TDGA.getDeviceId = function() {
        return o.deviceId;
    }, p.Account = {
        eventList: [],
        delInfo: [],
        set: function(e) {
            var t = "accountType,account,level,gender,age,gameServer,", n = null;
            for (var i in e) p.Account["set_" + i] && (e[i] || 0 === e[i]) && (i = "accountName" === i ? "account" : i, 
            n = new RegExp(i + ",", "g"), t = t.replace(n, ""));
            for (var a in p.Account.delInfo = t.split(","), p.Account.clearOtherInfo(t), e) p.Account["set_" + a] && (e[a] || 0 === e[a]) && p.Account["set_" + a](e[a]);
        },
        clearOtherInfo: function(e) {
            f.remove(e);
        },
        set_accountId: function(e) {
            var t = p.Account.delInfo;
            if (r.userID) if (r.userID == e) ; else {
                c.gameSessionID = r.gameSessionID, v.sessionStorage.remove("sessionId"), p.setSession(), 
                c.userID = r.userID;
                for (var n = 0, i = t.length; n < i; n++) {
                    const e = t[n];
                    delete r[e];
                }
                f.add("userID", e), p.EventBox.add("G4,G3"), r.userID = e, p.addLoginCache("login");
            } else f.add("userID", e), r.userID = e, p.EventBox.add("G7");
        },
        set_accountType: function(e) {
            r.accountType != e && (f.add("accountType", e), r.accountType = e, p.EventBox.add("G7"));
        },
        set_accountName: function(e) {
            r.account != e && (f.add("account", e), r.account = e, p.EventBox.add("G7"));
        },
        set_level: function(e) {
            if (r.level && (c.level = r.level), r.level != e) {
                l.level = r.level, f.get("level");
                var t = f.get("leveluptime");
                t && (l.time = t), f.add("level", e), f.add("leveluptime", new Date().getTime()), 
                r.level = e, p.EventBox.add("G5");
            }
        },
        set_gender: function(e) {
            r.sex != e && (f.add("sex", e), r.sex = e, p.EventBox.add("G7"));
        },
        set_age: function(e) {
            r.age != e && (f.add("age", e), r.age = e, p.EventBox.add("G7"));
        },
        set_gameServer: function(e) {
            r.gameServer ? (c.gameServer = r.gameServer, r.gameServer != e && (v.sessionStorage.remove("sessionId"), 
            p.setSession(), c.userID = r.userID, f.add("gameServer", e), r.gameServer = e, p.EventBox.add("G4,G3"), 
            p.addLoginCache("login"))) : (f.add("gameServer", e), r.gameServer = e, p.EventBox.add("G7"));
        }
    }, TDGA.Account = p.Account.set, TDGA.Account.setAccount = p.Account.set_userID, 
    TDGA.Account.setAccountType = p.Account.set_accountType, TDGA.Account.setAccountName = p.Account.set_accountName, 
    TDGA.Account.setLevel = p.Account.set_level, TDGA.Account.setGender = p.Account.set_gender, 
    TDGA.Account.setAge = p.Account.set_age, TDGA.Account.setGameServer = p.Account.set_gameServer, 
    TDGA.AccountType = {
        ANONYMOUS: 0,
        REGISTERED: 1,
        SINA_WEIBO: 2,
        QQ: 3,
        TENCENT_WEIBO: 4,
        ND91: 5
    }, TDGA.Gender = {
        UNKNOWN: -1,
        MALE: 1,
        FEMALE: 2
    }, p.Mission = {
        info: {},
        MissionNum: {},
        list: {},
        selKey: "_key",
        begin: function(e) {
            if (e && "" != e) {
                var t = {};
                (t = p.setUserInfo(t)).mission = e, t.status = 1, p.Mission.add(t), p.Mission.send(t);
            }
        },
        completed: function(e) {
            if (e && "" != e) {
                var t = {
                    mission: e
                };
                (t = p.setUserInfo(t)).mission = e, t.status = 2;
                var n, i = (n = p.Mission).list[t.mission + "_" + t.userID];
                if (i && i.length > 0) for (var a = i.length - 1; a >= 0; a--) if (1 == i[a].status && i[a].time) {
                    var s = i[a].time, o = parseInt((new Date().getTime() - s) / 1e3);
                    t.timeConsuming = o;
                    break;
                }
                (n = p.Mission).add(t), n.send(t);
            }
        },
        failed: function(e, t) {
            if (e && "" != e) {
                var n = {
                    mission: e
                };
                (n = p.setUserInfo(n)).mission = e, n.cause = t, n.status = 3;
                var i = p.Mission;
                i.add(n), i.send(n);
            }
        },
        init: function() {
            var e = f.get("mission");
            if (e) {
                var t = JSON.parse(e);
                this.list = t;
                var n = f.get("mission_Num");
                n && (this.MissionNum = JSON.parse(n));
            }
        },
        add: function(e) {
            e.time = new Date().getTime(), this.list[e.mission + "_" + e.userID] || (this.list[e.mission + "_" + e.userID] = []), 
            this.list[e.mission + "_" + e.userID].push(e), f.add("mission", JSON.stringify(this.list));
        },
        send: function(e) {
            var t = {
                eventOccurTime: new Date().getTime(),
                eventData: {},
                eventID: "G6"
            };
            delete (e = Object.assign({}, e)).time;
            var n = e.userID;
            this.MissionNum["uid_" + n] = e.mission, f.add("mission_Num", JSON.stringify(this.MissionNum)), 
            t.eventData = e;
            var i = h.getCommon();
            i.events.push(t), new a().set(i);
        },
        getMission: function() {
            return this.MissionNum["uid_" + r.userID];
        }
    }, p.Mission.init(), TDGA.onMissionBegin = p.Mission.begin, TDGA.onMissionCompleted = p.Mission.completed, 
    TDGA.onMissionFailed = p.Mission.failed, p.Reward = {
        info: {},
        send: function(e, t) {
            p.Reward.info = {};
            var n = {};
            e && (n.virtualCurrencyAmount = e), t && (n.reason = t);
            var i = p.Mission.getMission();
            i && (n.mission = i), p.Reward.info = n, p.EventBox.add("G15");
        }
    }, TDGA.onReward = p.Reward.send, p.CustomEvent = {
        info: {},
        send: function(e, t) {
            p.CustomEvent.info = {};
            var n = {};
            e && (n.actionID = e), t && (n.actionData = t), p.CustomEvent.info = n, p.EventBox.add("G8");
        }
    }, TDGA.onEvent = p.CustomEvent.send, p.Item = {
        purchase: function(e) {
            if (e && e.item) {
                var t = {};
                t.itemid = e.item, e.itemNumber && (t.itemnumber = parseInt(e.itemNumber)), e.priceInVirtualCurrency && (t.virtualCurrencyAmount = parseFloat(e.priceInVirtualCurrency));
                var n = p.Mission.getMission();
                n && (t.mission = n), t = p.setUserInfo(t), p.Item.send(t, "G10");
            }
        },
        use: function(e) {
            if (e && e.item) {
                var t = {};
                t.itemid = e.item, e.itemNumber && (t.itemnumber = e.itemNumber);
                var n = p.Mission.getMission();
                n && (t.mission = n), t = p.setUserInfo(t), p.Item.send(t, "G12");
            }
        },
        send: function(e, t) {
            var n = {
                eventOccurTime: new Date().getTime(),
                eventData: {},
                eventID: t
            };
            n.eventData = e;
            var i = h.getCommon();
            i.events.push(n), new a().set(i);
        }
    }, TDGA.onItemPurchase = p.Item.purchase, TDGA.onItemUse = p.Item.use, p.Charge = {
        info: {},
        orderList: {},
        selKey: "_key",
        request: function(e) {
            if (e.orderId && "" != e.orderId) {
                var t = this;
                t.info = {};
                for (var n = [ "orderId", "iapId", "currencyAmount", "currencyType", "virtualCurrencyAmount", "paymentType" ], i = 0; i < n.length; i++) e[n[i]] && (t.info[n[i]] = e[n[i]]);
                t.info.status = 1, p.Charge.info = t.info, p.EventBox.add("G9.1");
            }
        },
        successt: function(e) {
            if (e.orderId && "" != e.orderId) {
                var t = this;
                t.info = {};
                for (var n = [ "orderId", "iapId", "currencyAmount", "currencyType", "virtualCurrencyAmount", "paymentType" ], i = 0; i < n.length; i++) e[n[i]] && (t.info[n[i]] = e[n[i]]);
                t.info.status = 2, p.Charge.info = t.info, p.EventBox.add("G9.2");
            }
        },
        init: function() {
            var e = f.get("order");
            if (e && "undefined" != e) {
                var t = JSON.parse(e);
                this.addOrder(t);
            }
        },
        addOrder: function(e) {
            this.orderList[e.orderId + this.selKey] = e;
        }
    }, p.Charge.init(), TDGA.onChargeRequest = p.Charge.request, TDGA.onChargeSuccess = p.Charge.successt;
}();
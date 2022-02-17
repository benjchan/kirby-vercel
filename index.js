(function() {
    function w(a) {
        return a && a.__esModule ? { d: a.default } : { d: a };
    }
    var j,
        k = {};
    var p,
        q = {};
    !(function(t, e) {
        "object" == typeof q ? (q = e()) : "function" == typeof p && p.amd ? p(e) : (t.dayjs = e());
    })(q, function() {
        var t = "millisecond",
            e = "second",
            n = "minute",
            r = "hour",
            i = "day",
            s = "week",
            u = "month",
            a = "quarter",
            o = "year",
            h = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
            f = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            c = function(t, e, n) {
                var r = String(t);
                return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
            },
            d = {
                s: c,
                z: function(t) {
                    var e = -t.utcOffset(),
                        n = Math.abs(e),
                        r = Math.floor(n / 60),
                        i = n % 60;
                    return (e <= 0 ? "+" : "-") + c(r, 2, "0") + ":" + c(i, 2, "0");
                },
                m: function(t, e) {
                    var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                        r = t.clone().add(n, u),
                        i = e - r < 0,
                        s = t.clone().add(n + (i ? -1 : 1), u);
                    return Number(-(n + (e - r) / (i ? r - s : s - r)) || 0);
                },
                a: function(t) {
                    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
                },
                p: function(h) {
                    return ({ M: u, y: o, w: s, d: i, D: "date", h: r, m: n, s: e, ms: t, Q: a }[h] ||
                        String(h || "")
                        .toLowerCase()
                        .replace(/s$/, "")
                    );
                },
                u: function(t) {
                    return void 0 === t;
                },
            },
            $ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") },
            l = "en",
            m = {};
        m[l] = $;
        var y = function(t) {
                return t instanceof D;
            },
            M = function(t, e, n) {
                var r;
                if (!t) return l;
                if ("string" == typeof t) m[t] && (r = t), e && ((m[t] = e), (r = t));
                else {
                    var i = t.name;
                    (m[i] = t), (r = i);
                }
                return !n && r && (l = r), r || (!n && l);
            },
            g = function(t, e) {
                if (y(t)) return t.clone();
                var n = "object" == typeof e ? e : {};
                return (n.date = t), (n.args = arguments), new D(n);
            },
            v = d;
        (v.l = M),
        (v.i = y),
        (v.w = function(t, e) {
            return g(t, { locale: e.$L, utc: e.$u, $offset: e.$offset });
        });
        var D = (function() {
            function c(t) {
                (this.$L = this.$L || M(t.locale, null, !0)), this.parse(t);
            }
            var d = c.prototype;
            return (
                (d.parse = function(t) {
                    (this.$d = (function(t) {
                        var e = t.date,
                            n = t.utc;
                        if (null === e) return new Date(NaN);
                        if (v.u(e)) return new Date();
                        if (e instanceof Date) return new Date(e);
                        if ("string" == typeof e && !/Z$/i.test(e)) {
                            var r = e.match(h);
                            if (r) return n ? new Date(Date.UTC(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0)) : new Date(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0);
                        }
                        return new Date(e);
                    })(t)),
                    this.init();
                }),
                (d.init = function() {
                    var t = this.$d;
                    (this.$y = t.getFullYear()), (this.$M = t.getMonth()), (this.$D = t.getDate()), (this.$W = t.getDay()), (this.$H = t.getHours()), (this.$m = t.getMinutes()), (this.$s = t.getSeconds()), (this.$ms = t.getMilliseconds());
                }),
                (d.$utils = function() {
                    return v;
                }),
                (d.isValid = function() {
                    return !("Invalid Date" === this.$d.toString());
                }),
                (d.isSame = function(t, e) {
                    var n = g(t);
                    return this.startOf(e) <= n && n <= this.endOf(e);
                }),
                (d.isAfter = function(t, e) {
                    return g(t) < this.startOf(e);
                }),
                (d.isBefore = function(t, e) {
                    return this.endOf(e) < g(t);
                }),
                (d.$g = function(t, e, n) {
                    return v.u(t) ? this[e] : this.set(n, t);
                }),
                (d.year = function(t) {
                    return this.$g(t, "$y", o);
                }),
                (d.month = function(t) {
                    return this.$g(t, "$M", u);
                }),
                (d.day = function(t) {
                    return this.$g(t, "$W", i);
                }),
                (d.date = function(t) {
                    return this.$g(t, "$D", "date");
                }),
                (d.hour = function(t) {
                    return this.$g(t, "$H", r);
                }),
                (d.minute = function(t) {
                    return this.$g(t, "$m", n);
                }),
                (d.second = function(t) {
                    return this.$g(t, "$s", e);
                }),
                (d.millisecond = function(e) {
                    return this.$g(e, "$ms", t);
                }),
                (d.unix = function() {
                    return Math.floor(this.valueOf() / 1e3);
                }),
                (d.valueOf = function() {
                    return this.$d.getTime();
                }),
                (d.startOf = function(t, a) {
                    var h = this,
                        f = !!v.u(a) || a,
                        c = v.p(t),
                        d = function(t, e) {
                            var n = v.w(h.$u ? Date.UTC(h.$y, e, t) : new Date(h.$y, e, t), h);
                            return f ? n : n.endOf(i);
                        },
                        $ = function(t, e) {
                            return v.w(h.toDate()[t].apply(h.toDate("s"), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), h);
                        },
                        l = this.$W,
                        m = this.$M,
                        y = this.$D,
                        M = "set" + (this.$u ? "UTC" : "");
                    switch (c) {
                        case o:
                            return f ? d(1, 0) : d(31, 11);
                        case u:
                            return f ? d(1, m) : d(0, m + 1);
                        case s:
                            var g = this.$locale().weekStart || 0,
                                D = (l < g ? l + 7 : l) - g;
                            return d(f ? y - D : y + (6 - D), m);
                        case i:
                        case "date":
                            return $(M + "Hours", 0);
                        case r:
                            return $(M + "Minutes", 1);
                        case n:
                            return $(M + "Seconds", 2);
                        case e:
                            return $(M + "Milliseconds", 3);
                        default:
                            return this.clone();
                    }
                }),
                (d.endOf = function(t) {
                    return this.startOf(t, !1);
                }),
                (d.$set = function(s, a) {
                    var h,
                        f = v.p(s),
                        c = "set" + (this.$u ? "UTC" : ""),
                        d = ((h = {}), (h[i] = c + "Date"), (h.date = c + "Date"), (h[u] = c + "Month"), (h[o] = c + "FullYear"), (h[r] = c + "Hours"), (h[n] = c + "Minutes"), (h[e] = c + "Seconds"), (h[t] = c + "Milliseconds"), h)[f],
                        $ = f === i ? this.$D + (a - this.$W) : a;
                    if (f === u || f === o) {
                        var l = this.clone().set("date", 1);
                        l.$d[d]($), l.init(), (this.$d = l.set("date", Math.min(this.$D, l.daysInMonth())).toDate());
                    } else d && this.$d[d]($);
                    return this.init(), this;
                }),
                (d.set = function(t, e) {
                    return this.clone().$set(t, e);
                }),
                (d.get = function(t) {
                    return this[v.p(t)]();
                }),
                (d.add = function(t, a) {
                    var h,
                        f = this;
                    t = Number(t);
                    var c = v.p(a),
                        d = function(e) {
                            var n = g(f);
                            return v.w(n.date(n.date() + Math.round(e * t)), f);
                        };
                    if (c === u) return this.set(u, this.$M + t);
                    if (c === o) return this.set(o, this.$y + t);
                    if (c === i) return d(1);
                    if (c === s) return d(7);
                    var $ = ((h = {}), (h[n] = 6e4), (h[r] = 36e5), (h[e] = 1e3), h)[c] || 1,
                        l = this.$d.getTime() + t * $;
                    return v.w(l, this);
                }),
                (d.subtract = function(t, e) {
                    return this.add(-1 * t, e);
                }),
                (d.format = function(t) {
                    var e = this;
                    if (!this.isValid()) return "Invalid Date";
                    var n = t || "YYYY-MM-DDTHH:mm:ssZ",
                        r = v.z(this),
                        i = this.$locale(),
                        s = this.$H,
                        u = this.$m,
                        a = this.$M,
                        o = i.weekdays,
                        h = i.months,
                        c = function(t, r, i, s) {
                            return (t && (t[r] || t(e, n))) || i[r].substr(0, s);
                        },
                        d = function(t) {
                            return v.s(s % 12 || 12, t, "0");
                        },
                        $ =
                        i.meridiem ||
                        function(t, e, n) {
                            var r = t < 12 ? "AM" : "PM";
                            return n ? r.toLowerCase() : r;
                        },
                        l = {
                            YY: String(this.$y).slice(-2),
                            YYYY: this.$y,
                            M: a + 1,
                            MM: v.s(a + 1, 2, "0"),
                            MMM: c(i.monthsShort, a, h, 3),
                            MMMM: h[a] || h(this, n),
                            D: this.$D,
                            DD: v.s(this.$D, 2, "0"),
                            d: String(this.$W),
                            dd: c(i.weekdaysMin, this.$W, o, 2),
                            ddd: c(i.weekdaysShort, this.$W, o, 3),
                            dddd: o[this.$W],
                            H: String(s),
                            HH: v.s(s, 2, "0"),
                            h: d(1),
                            hh: d(2),
                            a: $(s, u, !0),
                            A: $(s, u, !1),
                            m: String(u),
                            mm: v.s(u, 2, "0"),
                            s: String(this.$s),
                            ss: v.s(this.$s, 2, "0"),
                            SSS: v.s(this.$ms, 3, "0"),
                            Z: r,
                        };
                    return n.replace(f, function(t, e) {
                        return e || l[t] || r.replace(":", "");
                    });
                }),
                (d.utcOffset = function() {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                }),
                (d.diff = function(t, h, f) {
                    var c,
                        d = v.p(h),
                        $ = g(t),
                        l = 6e4 * ($.utcOffset() - this.utcOffset()),
                        m = this - $,
                        y = v.m(this, $);
                    return (y = ((c = {}), (c[o] = y / 12), (c[u] = y), (c[a] = y / 3), (c[s] = (m - l) / 6048e5), (c[i] = (m - l) / 864e5), (c[r] = m / 36e5), (c[n] = m / 6e4), (c[e] = m / 1e3), c)[d] || m), f ? y : v.a(y);
                }),
                (d.daysInMonth = function() {
                    return this.endOf(u).$D;
                }),
                (d.$locale = function() {
                    return m[this.$L];
                }),
                (d.locale = function(t, e) {
                    if (!t) return this.$L;
                    var n = this.clone(),
                        r = M(t, e, !0);
                    return r && (n.$L = r), n;
                }),
                (d.clone = function() {
                    return v.w(this.$d, this);
                }),
                (d.toDate = function() {
                    return new Date(this.valueOf());
                }),
                (d.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null;
                }),
                (d.toISOString = function() {
                    return this.$d.toISOString();
                }),
                (d.toString = function() {
                    return this.$d.toUTCString();
                }),
                c
            );
        })();
        return (
            (g.prototype = D.prototype),
            (g.extend = function(t, e) {
                return t(e, D, g), g;
            }),
            (g.locale = M),
            (g.isDayjs = y),
            (g.unix = function(t) {
                return g(1e3 * t);
            }),
            (g.en = m[l]),
            (g.Ls = m),
            g
        );
    });
    !(function(r, t) {
        "object" == typeof k ? (k = t()) : "function" == typeof j && j.amd ? j(t) : (r.dayjs_plugin_relativeTime = t());
    })(k, function() {
        return function(r, t, e) {
            r = r || {};
            var n = t.prototype,
                o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
            e.en.relativeTime = o;
            var a = function(t, n, a, d) {
                for (
                    var i,
                        u,
                        s,
                        f = a.$locale().relativeTime || o,
                        y = r.thresholds || [
                            { l: "s", r: 44, d: "second" },
                            { l: "m", r: 89 },
                            { l: "mm", r: 44, d: "minute" },
                            { l: "h", r: 89 },
                            { l: "hh", r: 21, d: "hour" },
                            { l: "d", r: 35 },
                            { l: "dd", r: 25, d: "day" },
                            { l: "M", r: 45 },
                            { l: "MM", r: 10, d: "month" },
                            { l: "y", r: 17 },
                            { l: "yy", d: "year" },
                        ],
                        h = y.length,
                        l = 0; l < h; l += 1
                ) {
                    var v = y[l];
                    v.d && (i = d ? e(t).diff(a, v.d, !0) : a.diff(t, v.d, !0));
                    var $ = (r.rounding || Math.round)(Math.abs(i));
                    if (((s = i > 0), $ <= v.r || !v.r)) {
                        $ <= 1 && l > 0 && (v = y[l - 1]);
                        var m = f[v.l];
                        u = "string" == typeof m ? m.replace("%d", $) : m($, n, v.l, s);
                        break;
                    }
                }
                return n ? u : (s ? f.future : f.past).replace("%s", u);
            };
            (n.to = function(r, t) {
                return a(r, t, this, !0);
            }),
            (n.from = function(r, t) {
                return a(r, t, this);
            });
            var d = function(r) {
                return r.$u ? e.utc() : e();
            };
            (n.toNow = function(r) {
                return this.to(d(this), r);
            }),
            (n.fromNow = function(r) {
                return this.from(d(this), r);
            });
        };
    });
    var b = {
        props: { label: String, deploy: String, loading: String, complete: String, error: String, button: Boolean, help: String, siteModified: Object },
        data: function() {
            return { isLoading: !1, isError: null, isSuccess: !1, latest: null, newContent: !1 };
        },
        created: function() {
            this.getLatest();
        },
        methods: {
            checkSiteModified: function() {
                var t = this.latest.created.toString().slice(0, -3);
                this.siteModified.timestamp > parseInt(t) ? (this.newContent = !0) : (this.newContent = !1);
            },
            deploySite: function() {
                var t = this;
                (this.isSuccess = !1),
                (this.isError = !1),
                (this.latest = null),
                (this.isLoading = !0),
                this.$api
                    .get("vercel")
                    .then(function(e) {
                        var i = JSON.parse(e),
                            s = [];
                        (s.state = i.job.state),
                        (s.created = i.job.createdAt),
                        (t.latest = s),
                        (t.isLoading = !1),
                        (t.isError = !1),
                        (t.isSuccess = !0),
                        setTimeout(function() {
                            (t.isSuccess = !1), t.getLatest(), t.checkSiteModified();
                        }, 1e4);
                    })
                    .catch(function() {
                        (t.isLoading = !1), (t.isError = !0);
                    });
            },
            getLatest: function() {
                var t = this;
                this.$api
                    .get("vercel/latest")
                    .then(function(e) {
                        // console.log(e);
                        var i = JSON.parse(e);
                        (t.latest = i.deployments[0]), t.checkSiteModified();
                    })
                    .catch(function(t) {
                        console.log(t);
                    });
            },
        },
        filters: {
            date: function(t) {
                var $dZYI$$interop$default = w(q);
                return t ? ($dZYI$$interop$default.d.extend(k), $dZYI$$interop$default.d(t).locale("fr").fromNow()) : "";
            },
        },
    };
    if (typeof b === "function") {
        b = b.options;
    }
    Object.assign(
        b,
        (function() {
            var render = function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("div", { staticClass: "k-vercel" }, [
                    _c(
                        "div", { staticClass: "k-vercel-label" }, [
                            _c("k-headline", [_vm._v(_vm._s(_vm.label))]),
                            _vm._v(" "),
                            _vm.latest ? _c("div", { staticClass: "k-vercel-latest" }, [_c("span", { attrs: { "data-status": _vm.latest.state } }), _vm._v(_vm._s(_vm._f("date")(_vm.latest.created)) + " ")]) : _vm._e(),
                        ],
                        1
                    ),
                    _vm._v(" "),
                    _vm.button ?
                    _c("div", { staticClass: "k-vercel-button", class: { loading: _vm.isLoading, success: _vm.isSuccess, error: _vm.isError }, on: { click: _vm.deploySite } }, [
                        _vm.isLoading ?
                        _c("span", [_vm._v(_vm._s(_vm.loading))]) :
                        _vm.isSuccess ?
                        _c("span", [_vm._v(_vm._s(_vm.complete))]) :
                        _vm.isError ?
                        _c("span", [_vm._v(_vm._s(_vm.error))]) :
                        _c("span", [_vm._v(_vm._s(_vm.deploy))]),
                        _vm._v(" "),
                        _vm.latest && !_vm.isLoading && !_vm.isSuccess && !_vm.isError ?
                        _c(
                            "div", { staticClass: "k-vercel-changes", class: { new: _vm.newContent } }, [_vm.newContent ? _c("span", [_vm._v(_vm._s(_vm.siteModified.count) + " \u2191")]) : _c("k-icon", { attrs: { type: "check" } })],
                            1
                        ) :
                        _vm._e(),
                    ]) :
                    _vm._e(),
                    _vm._v(" "),
                    _vm.help ? _c("div", { staticClass: "k-vercel-help k-text k-field-help", attrs: { "data-theme": "help" }, domProps: { innerHTML: _vm._s(_vm.help) } }) : _vm._e(),
                ]);
            };
            var staticRenderFns = [];
            return { render: render, staticRenderFns: staticRenderFns, _compiled: true, _scopeId: null, functional: undefined };
        })()
    );
    var c = {
        props: { label: String, deploy: String, loading: String, complete: String, error: String, button: Boolean, help: String, siteModifiedStaging: Object },
        data: function() {
            return { isLoading: !1, isError: null, isSuccess: !1, latest: null, newContent: !1 };
        },
        created: function() {
            this.getLatest();
        },
        methods: {
            checkSiteModified: function() {
                var t = this.latest.created.toString().slice(0, -3);
                this.siteModifiedStaging.timestampstaging > parseInt(t) ? (this.newContent = !0) : (this.newContent = !1);
            },
            deploySite: function() {
                var t = this;
                (this.isSuccess = !1),
                (this.isError = !1),
                (this.latest = null),
                (this.isLoading = !0),
                this.$api
                    .get("vercelstaging")
                    .then(function(e) {
                        var i = JSON.parse(e),
                            s = [];
                        (s.state = i.job.state),
                        (s.created = i.job.createdAt),
                        (t.latest = s),
                        (t.isLoading = !1),
                        (t.isError = !1),
                        (t.isSuccess = !0),
                        setTimeout(function() {
                            (t.isSuccess = !1), t.getLatest(), t.checkSiteModified();
                        }, 1e4);
                    })
                    .catch(function() {
                        (t.isLoading = !1), (t.isError = !0);
                    });
            },
            getLatest: function() {
                var t = this;
                this.$api
                    .get("vercel/lateststaging")
                    .then(function(e) {
                        // console.log(t);
                        var i = JSON.parse(e);
                        (t.latest = i.deployments[0]), t.checkSiteModified();
                    })
                    .catch(function(t) {
                        console.log(t);
                    });
            },
        },
        filters: {
            date: function(t) {
                var $dZYI$$interop$default = w(q);
                return t ? ($dZYI$$interop$default.d.extend(k), $dZYI$$interop$default.d(t).locale("fr").fromNow()) : "";
            },
        },
    };
    if (typeof c === "function") {
        c = c.options;
    }
    Object.assign(
        c,
        (function() {
            var render = function() {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("div", { staticClass: "k-vercel" }, [
                    _c(
                        "div", { staticClass: "k-vercel-label" }, [
                            _c("k-headline", [_vm._v(_vm._s(_vm.label))]),
                            _vm._v(" "),
                            _vm.latest ? _c("div", { staticClass: "k-vercel-latest" }, [_c("span", { attrs: { "data-status": _vm.latest.state } }), _vm._v(_vm._s(_vm._f("date")(_vm.latest.created)) + " ")]) : _vm._e(),
                        ],
                        1
                    ),
                    _vm._v(" "),
                    _vm.button ?
                    _c("div", { staticClass: "k-vercel-button", class: { loading: _vm.isLoading, success: _vm.isSuccess, error: _vm.isError }, on: { click: _vm.deploySite } }, [
                        _vm.isLoading ?
                        _c("span", [_vm._v(_vm._s(_vm.loading))]) :
                        _vm.isSuccess ?
                        _c("span", [_vm._v(_vm._s(_vm.complete))]) :
                        _vm.isError ?
                        _c("span", [_vm._v(_vm._s(_vm.error))]) :
                        _c("span", [_vm._v(_vm._s(_vm.deploy))]),
                        _vm._v(" "),
                        _vm.latest && !_vm.isLoading && !_vm.isSuccess && !_vm.isError ?
                        _c(
                            "div", { staticClass: "k-vercel-changes", class: { new: _vm.newContent } }, [_vm.newContent ? _c("span", [_vm._v(_vm._s(_vm.siteModifiedStaging.countstaging) + " \u2191")]) : _c("k-icon", { attrs: { type: "check" } })],
                            1
                        ) :
                        _vm._e(),
                    ]) :
                    _vm._e(),
                    _vm._v(" "),
                    _vm.help ? _c("div", { staticClass: "k-vercel-help k-text k-field-help", attrs: { "data-theme": "help" }, domProps: { innerHTML: _vm._s(_vm.help) } }) : _vm._e(),
                ]);
            };
            var staticRenderFns = [];
            return { render: render, staticRenderFns: staticRenderFns, _compiled: true, _scopeId: null, functional: undefined };
        })()
    );
    panel.plugin("f-mahler/kirby-vercel", { fields: { vercel: b, vercelstaging: c } });
})();
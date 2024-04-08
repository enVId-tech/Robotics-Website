!(function () {
    function n(o, t) {
        (this.scrollLeft = o), (this.scrollTop = t);
    }

    if (
        !(
            "scrollBehavior" in document.documentElement.style &&
            !0 !== window.__forceSmoothScrollPolyfill__
        )
    ) {
        var l,
            e = window.HTMLElement || window.Element,
            r = 468,
            i = {
                scroll: window.scroll || window.scrollTo,
                scrollBy: window.scrollBy,
                elementScroll: e.prototype.scroll || n,
                scrollIntoView: e.prototype.scrollIntoView,
            },
            s =
                window.performance && window.performance.now
                    ? window.performance.now.bind(window.performance)
                    : Date.now,
            c =
                ((l = window.navigator.userAgent),
                new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(l) ? 1 : 0);

        window.scroll = window.scrollTo = function () {
            void 0 !== arguments[0] &&
                (!0 !== f(arguments[0])
                    ? h.call(
                            window,
                            document.body,
                            void 0 !== arguments[0].left
                                ? ~~arguments[0].left
                                : window.scrollX || window.pageXOffset,
                            void 0 !== arguments[0].top
                                ? ~~arguments[0].top
                                : window.scrollY || window.pageYOffset
                        )
                    : i.scroll.call(
                            window,
                            void 0 !== arguments[0].left
                                ? arguments[0].left
                                : "object" != typeof arguments[0]
                                ? arguments[0]
                                : window.scrollX || window.pageXOffset,
                            void 0 !== arguments[0].top
                                ? arguments[0].top
                                : void 0 !== arguments[1]
                                ? arguments[1]
                                : window.scrollY || window.pageYOffset
                        ));
        };

        window.scrollBy = function () {
            void 0 !== arguments[0] &&
                (f(arguments[0])
                    ? i.scrollBy.call(
                            window,
                            void 0 !== arguments[0].left
                                ? arguments[0].left
                                : "object" != typeof arguments[0]
                                ? arguments[0]
                                : 0,
                            void 0 !== arguments[0].top
                                ? arguments[0].top
                                : void 0 !== arguments[1]
                                ? arguments[1]
                                : 0
                        )
                    : h.call(
                            window,
                            document.body,
                            ~~arguments[0].left + (window.scrollX || window.pageXOffset),
                            ~~arguments[0].top + (window.scrollY || window.pageYOffset)
                        ));
        };

        e.prototype.scroll = e.prototype.scrollTo = function () {
            if (void 0 !== arguments[0])
                if (!0 !== f(arguments[0])) {
                    var o = arguments[0].left,
                        t = arguments[0].top;
                    h.call(
                        this,
                        this,
                        void 0 === o ? this.scrollLeft : ~~o,
                        void 0 === t ? this.scrollTop : ~~t
                    );
                } else {
                    if ("number" == typeof arguments[0] && void 0 === arguments[1])
                        throw new SyntaxError("Value could not be converted");
                    i.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                            ? ~~arguments[0].left
                            : "object" != typeof arguments[0]
                            ? ~~arguments[0]
                            : this.scrollLeft,
                        void 0 !== arguments[0].top
                            ? ~~arguments[0].top
                            : void 0 !== arguments[1]
                            ? ~~arguments[1]
                            : this.scrollTop
                    );
                }
        };

        e.prototype.scrollBy = function () {
            void 0 !== arguments[0] &&
                (!0 !== f(arguments[0])
                    ? this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior,
                        })
                    : i.elementScroll.call(
                            this,
                            void 0 !== arguments[0].left
                                ? ~~arguments[0].left + this.scrollLeft
                                : ~~arguments[0] + this.scrollLeft,
                            void 0 !== arguments[0].top
                                ? ~~arguments[0].top + this.scrollTop
                                : ~~arguments[1] + this.scrollTop
                        ));
        };

        e.prototype.scrollIntoView = function () {
            if (!0 !== f(arguments[0])) {
                var l = (function (o) {
                        for (
                            ;
                            o !== document.body &&
                            !1 ===
                                ((e = p((l = o), "Y") && a(l, "Y")),
                                (r = p(l, "X") && a(l, "X")),
                                e || r);

                        )
                            o = o.parentNode || o.host;
                        var l, e, r;
                        return o;
                    })(this),
                    e = l.getBoundingClientRect(),
                    r = this.getBoundingClientRect();
                l !== document.body
                    ? (h.call(
                            this,
                            l,
                            l.scrollLeft + r.left - e.left,
                            l.scrollTop + r.top - e.top
                        ),
                        "fixed" !== window.getComputedStyle(l).position &&
                            window.scrollBy({
                                left: e.left,
                                top: e.top,
                                behavior: "smooth",
                            }))
                    : window.scrollBy({
                            left: r.left,
                            top: r.top,
                            behavior: "smooth",
                        });
            } else
                i.scrollIntoView.call(
                    this,
                    void 0 === arguments[0] || arguments[0]
                );
        };
    }

    function f(o) {
        if (
            null === o ||
            "object" != typeof o ||
            void 0 === o.behavior ||
            "auto" === o.behavior ||
            "instant" === o.behavior
        )
            return !0;
        if ("object" == typeof o && "smooth" === o.behavior) return !1;
        throw new TypeError(
            "behavior member of ScrollOptions " +
                o.behavior +
                " is not a valid value for enumeration ScrollBehavior."
        );
    }

    function p(o, t) {
        return "Y" === t
            ? o.clientHeight + c < o.scrollHeight
            : "X" === t
            ? o.clientWidth + c < o.scrollWidth
            : void 0;
    }

    function a(t, l) {
        var e = window.getComputedStyle(t, null)["overflow" + l];
        return "auto" === e || "scroll" === e;
    }

    function d(t) {
        var l,
            e,
            i,
            c,
            n = (s() - t.startTime) / r;
        (c = n = n > 1 ? 1 : n),
            (l = 0.5 * (1 - Math.cos(Math.PI * c))),
            (e = t.startX + (t.x - t.startX) * l),
            (i = t.startY + (t.y - t.startY) * l),
            t.method.call(t.scrollable, e, i),
            (e === t.x && i === t.y) || window.requestAnimationFrame(d.bind(window, t));
    }

    function h(l, e, r) {
        var c,
            f,
            p,
            a,
            h = s();
        l === document.body
            ? ((c = window),
                (f = window.scrollX || window.pageXOffset),
                (p = window.scrollY || window.pageYOffset),
                (a = i.scroll))
            : ((c = l), (f = l.scrollLeft), (p = l.scrollTop), (a = n)),
            d({
                scrollable: c,
                method: a,
                startTime: h,
                startX: f,
                startY: p,
                x: e,
                y: r,
            });
    }

    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = {
                polyfill: o,
            })
        : o();
})();

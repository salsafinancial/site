/*! UIkit 3.11.1 | https://www.getuikit.com | (c) 2014 - 2022 YOOtheme | MIT License */
(function(Kt, ge) { typeof exports == "object" && typeof module < "u" ? module.exports = ge() : typeof define == "function" && define.amd ? define("uikit", ge) : (Kt = typeof globalThis < "u" ? globalThis : Kt || self, Kt.UIkit = ge()) })(this, function() { "use strict"; var Kt = Object.prototype,
        ge = Kt.hasOwnProperty;

    function At(t, e) { return ge.call(t, e) } var ns = /\B([A-Z])/g,
        zt = pt(function(t) { return t.replace(ns, "-$1").toLowerCase() }),
        rs = /-(\w)/g,
        Xt = pt(function(t) { return t.replace(rs, gn) }),
        pe = pt(function(t) { return t.length ? gn(null, t.charAt(0)) + t.slice(1) : "" });

    function gn(t, e) { return e ? e.toUpperCase() : "" } var Ai = String.prototype,
        ss = Ai.startsWith || function(t) { return this.lastIndexOf(t, 0) === 0 };

    function vt(t, e) { return ss.call(t, e) } var os = Ai.endsWith || function(t) { return this.substr(-t.length) === t };

    function gt(t, e) { return os.call(t, e) } var Pi = Array.prototype,
        pn = function(t, e) { return !!~this.indexOf(t, e) },
        as = Ai.includes || pn,
        us = Pi.includes || pn;

    function b(t, e) { return t && (H(t) ? as : us).call(t, e) } var hs = Pi.findIndex || function(t) { for (var e = arguments, i = 0; i < this.length; i++)
            if (t.call(e[1], this[i], i, this)) return i;
        return -1 };

    function Pt(t, e) { return hs.call(t, e) } var ht = Array.isArray;

    function ct(t) { return typeof t == "function" }

    function Tt(t) { return t !== null && typeof t == "object" } var cs = Kt.toString;

    function Nt(t) { return cs.call(t) === "[object Object]" }

    function me(t) { return Tt(t) && t === t.window }

    function Jt(t) { return Mi(t) === 9 }

    function Ni(t) { return Mi(t) >= 1 }

    function Ot(t) { return Mi(t) === 1 }

    function Mi(t) { return !me(t) && Tt(t) && t.nodeType }

    function we(t) { return typeof t == "boolean" }

    function H(t) { return typeof t == "string" }

    function Zt(t) { return typeof t == "number" }

    function Et(t) { return Zt(t) || H(t) && !isNaN(t - parseFloat(t)) }

    function Qt(t) { return !(ht(t) ? t.length : Tt(t) ? Object.keys(t).length : !1) }

    function Z(t) { return t === void 0 }

    function Di(t) { return we(t) ? t : t === "true" || t === "1" || t === "" ? !0 : t === "false" || t === "0" ? !1 : t }

    function Mt(t) { var e = Number(t); return isNaN(e) ? !1 : e }

    function x(t) { return parseFloat(t) || 0 } var mn = Array.from || function(t) { return Pi.slice.call(t) };

    function J(t) { return T(t)[0] }

    function T(t) { return t && (Ni(t) ? [t] : mn(t).filter(Ni)) || [] }

    function Ft(t) { return me(t) ? t : (t = J(t), t ? (Jt(t) ? t : t.ownerDocument).defaultView : window) }

    function Hi(t) { return t ? gt(t, "ms") ? x(t) : x(t) * 1e3 : 0 }

    function qe(t, e) { return t === e || Tt(t) && Tt(e) && Object.keys(t).length === Object.keys(e).length && it(t, function(i, n) { return i === e[n] }) }

    function Bi(t, e, i) { return t.replace(new RegExp(e + "|" + i, "g"), function(n) { return n === e ? i : e }) } var k = Object.assign || function(t) { for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
        t = Object(t); for (var n = 0; n < e.length; n++) { var r = e[n]; if (r !== null)
                for (var s in r) At(r, s) && (t[s] = r[s]) } return t };

    function be(t) { return t[t.length - 1] }

    function it(t, e) { for (var i in t)
            if (e(t[i], i) === !1) return !1;
        return !0 }

    function $e(t, e) { return t.slice().sort(function(i, n) { var r = i[e];
            r === void 0 && (r = 0); var s = n[e]; return s === void 0 && (s = 0), r > s ? 1 : s > r ? -1 : 0 }) }

    function wn(t, e) { var i = new Set; return t.filter(function(n) { var r = n[e]; return i.has(r) ? !1 : i.add(r) || !0 }) }

    function $t(t, e, i) { return e === void 0 && (e = 0), i === void 0 && (i = 1), Math.min(Math.max(Mt(t) || 0, e), i) }

    function N() {}

    function bn() { for (var t = [], e = arguments.length; e--;) t[e] = arguments[e]; return [
            ["bottom", "top"],
            ["right", "left"]
        ].every(function(i) { var n = i[0],
                r = i[1]; return Math.min.apply(Math, t.map(function(s) { var o = s[n]; return o })) - Math.max.apply(Math, t.map(function(s) { var o = s[r]; return o })) > 0 }) }

    function Ve(t, e) { return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top } var Ut = { ratio: function(t, e, i) { var n, r = e === "width" ? "height" : "width"; return n = {}, n[r] = t[e] ? Math.round(i * t[r] / t[e]) : t[r], n[e] = i, n }, contain: function(t, e) { var i = this; return t = k({}, t), it(t, function(n, r) { return t = t[r] > e[r] ? i.ratio(t, r, e[r]) : t }), t }, cover: function(t, e) { var i = this; return t = this.contain(t, e), it(t, function(n, r) { return t = t[r] < e[r] ? i.ratio(t, r, e[r]) : t }), t } };

    function te(t, e, i, n) { i === void 0 && (i = 0), n === void 0 && (n = !1), e = T(e); var r = e.length; return r ? (t = Et(t) ? Mt(t) : t === "next" ? i + 1 : t === "previous" ? i - 1 : e.indexOf(J(t)), n ? $t(t, 0, r - 1) : (t %= r, t < 0 ? t + r : t)) : -1 }

    function pt(t) { var e = Object.create(null); return function(i) { return e[i] || (e[i] = t(i)) } }

    function _(t, e, i) { if (Tt(e)) { for (var n in e) _(t, n, e[n]); return } if (Z(i)) return t = J(t), t && t.getAttribute(e);
        T(t).forEach(function(r) { ct(i) && (i = i.call(r, _(r, e))), i === null ? zi(r, e) : r.setAttribute(e, i) }) }

    function ee(t, e) { return T(t).some(function(i) { return i.hasAttribute(e) }) }

    function zi(t, e) { t = T(t), e.split(" ").forEach(function(i) { return t.forEach(function(n) { return n.hasAttribute(i) && n.removeAttribute(i) }) }) }

    function ft(t, e) { for (var i = 0, n = [e, "data-" + e]; i < n.length; i++)
            if (ee(t, n[i])) return _(t, n[i]) } var lt = typeof window < "u",
        xe = lt && /msie|trident/i.test(window.navigator.userAgent),
        U = lt && _(document.documentElement, "dir") === "rtl",
        ie = lt && "ontouchstart" in window,
        ne = lt && window.PointerEvent,
        $n = lt && (ie || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints),
        dt = ne ? "pointerdown" : ie ? "touchstart" : "mousedown",
        re = ne ? "pointermove" : ie ? "touchmove" : "mousemove",
        xt = ne ? "pointerup" : ie ? "touchend" : "mouseup",
        Lt = ne ? "pointerenter" : ie ? "" : "mouseenter",
        se = ne ? "pointerleave" : ie ? "" : "mouseleave",
        oe = ne ? "pointercancel" : "touchcancel",
        fs = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, menuitem: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 };

    function Oi(t) { return T(t).some(function(e) { return fs[e.tagName.toLowerCase()] }) }

    function W(t) { return T(t).some(function(e) { return e.offsetWidth || e.offsetHeight || e.getClientRects().length }) } var ye = "input,select,textarea,button";

    function Fi(t) { return T(t).some(function(e) { return Y(e, ye) }) } var Ye = ye + ",a[href],[tabindex]";

    function Ge(t) { return Y(t, Ye) }

    function D(t) { return t = J(t), t && Ot(t.parentNode) && t.parentNode }

    function ke(t, e) { return T(t).filter(function(i) { return Y(i, e) }) } var Ke = lt ? Element.prototype : {},
        ls = Ke.matches || Ke.webkitMatchesSelector || Ke.msMatchesSelector || N;

    function Y(t, e) { return T(t).some(function(i) { return ls.call(i, e) }) } var ds = Ke.closest || function(t) { var e = this;
        do
            if (Y(e, t)) return e; while (e = D(e)) };

    function ot(t, e) { return vt(e, ">") && (e = e.slice(1)), Ot(t) ? ds.call(t, e) : T(t).map(function(i) { return ot(i, e) }).filter(Boolean) }

    function G(t, e) { return H(e) ? Y(t, e) || !!ot(t, e) : t === e || (Jt(e) ? e.documentElement : J(e)).contains(J(t)) }

    function Se(t, e) { for (var i = []; t = D(t);)(!e || Y(t, e)) && i.push(t); return i }

    function R(t, e) { t = J(t); var i = t ? T(t.children) : []; return e ? ke(i, e) : i }

    function ae(t, e) { return e ? T(t).indexOf(J(e)) : R(D(t)).indexOf(t) }

    function mt(t, e) { return Li(t, xn(t, e)) }

    function Te(t, e) { return Ee(t, xn(t, e)) }

    function xn(t, e) { return e === void 0 && (e = document), H(t) && kn(t) || Jt(e) ? e : e.ownerDocument }

    function Li(t, e) { return J(yn(t, e, "querySelector")) }

    function Ee(t, e) { return T(yn(t, e, "querySelectorAll")) }

    function yn(t, e, i) { if (e === void 0 && (e = document), !t || !H(t)) return t;
        t = t.replace(gs, "$1 *"), kn(t) && (t = ms(t).map(function(n) { var r = e; if (n[0] === "!") { var s = n.substr(1).trim().split(" ");
                r = ot(D(e), s[0]), n = s.slice(1).join(" ").trim() } if (n[0] === "-") { var o = n.substr(1).trim().split(" "),
                    a = (r || e).previousElementSibling;
                r = Y(a, n.substr(1)) ? a : null, n = o.slice(1).join(" ") } return r ? ws(r) + " " + n : null }).filter(Boolean).join(","), e = document); try { return e[i](t) } catch { return null } } var vs = /(^|[^\\],)\s*[!>+~-]/,
        gs = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
        kn = pt(function(t) { return t.match(vs) }),
        ps = /.*?[^\\](?:,|$)/g,
        ms = pt(function(t) { return t.match(ps).map(function(e) { return e.replace(/,$/, "").trim() }) });

    function ws(t) { for (var e = []; t.parentNode;) { var i = _(t, "id"); if (i) { e.unshift("#" + Ce(i)); break } else { var n = t.tagName;
                n !== "HTML" && (n += ":nth-child(" + (ae(t) + 1) + ")"), e.unshift(n), t = t.parentNode } } return e.join(" > ") } var bs = lt && window.CSS && CSS.escape || function(t) { return t.replace(/([^\x7f-\uFFFF\w-])/g, function(e) { return "\\" + e }) };

    function Ce(t) { return H(t) ? bs.call(null, t) : "" }

    function A() { for (var t = [], e = arguments.length; e--;) t[e] = arguments[e]; var i = Sn(t),
            n = i[0],
            r = i[1],
            s = i[2],
            o = i[3],
            a = i[4]; return n = Xe(n), o.length > 1 && (o = xs(o)), a && a.self && (o = ys(o)), s && (o = $s(s, o)), a = Tn(a), r.split(" ").forEach(function(u) { return n.forEach(function(c) { return c.addEventListener(u, o, a) }) }),
            function() { return Wt(n, r, o, a) } }

    function Wt(t, e, i, n) { n === void 0 && (n = !1), n = Tn(n), t = Xe(t), e.split(" ").forEach(function(r) { return t.forEach(function(s) { return s.removeEventListener(r, i, n) }) }) }

    function K() { for (var t = [], e = arguments.length; e--;) t[e] = arguments[e]; var i = Sn(t),
            n = i[0],
            r = i[1],
            s = i[2],
            o = i[3],
            a = i[4],
            u = i[5],
            c = A(n, r, s, function(l) { var h = !u || u(l);
                h && (c(), o(l, h)) }, a); return c }

    function m(t, e, i) { return Xe(t).reduce(function(n, r) { return n && r.dispatchEvent(Ie(e, !0, !0, i)) }, !0) }

    function Ie(t, e, i, n) { if (e === void 0 && (e = !0), i === void 0 && (i = !1), H(t)) { var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, e, i, n), t = r } return t }

    function Sn(t) { return ct(t[2]) && t.splice(2, 0, !1), t }

    function $s(t, e) { var i = this; return function(n) { var r = t[0] === ">" ? Ee(t, n.currentTarget).reverse().filter(function(s) { return G(n.target, s) })[0] : ot(n.target, t);
            r && (n.current = r, e.call(i, n)) } }

    function xs(t) { return function(e) { return ht(e.detail) ? t.apply(void 0, [e].concat(e.detail)) : t(e) } }

    function ys(t) { return function(e) { if (e.target === e.currentTarget || e.target === e.current) return t.call(null, e) } }

    function Tn(t) { return t && xe && !we(t) ? !!t.capture : t }

    function En(t) { return t && "addEventListener" in t }

    function ks(t) { return En(t) ? t : J(t) }

    function Xe(t) { return ht(t) ? t.map(ks).filter(Boolean) : H(t) ? Ee(t) : En(t) ? [t] : T(t) }

    function Ct(t) { return t.pointerType === "touch" || !!t.touches }

    function ue(t) { var e = t.touches,
            i = t.changedTouches,
            n = e && e[0] || i && i[0] || t,
            r = n.clientX,
            s = n.clientY; return { x: r, y: s } } var w = lt && window.Promise || at,
        Je = function() { var t = this;
            this.promise = new w(function(e, i) { t.reject = i, t.resolve = e }) },
        Cn = 0,
        In = 1,
        Ze = 2,
        Ss = lt && window.setImmediate || setTimeout;

    function at(t) { this.state = Ze, this.value = void 0, this.deferred = []; var e = this; try { t(function(i) { e.resolve(i) }, function(i) { e.reject(i) }) } catch (i) { e.reject(i) } }
    at.reject = function(t) { return new at(function(e, i) { i(t) }) }, at.resolve = function(t) { return new at(function(e, i) { e(t) }) }, at.all = function(e) { return new at(function(i, n) { var r = [],
                s = 0;
            e.length === 0 && i(r);

            function o(u) { return function(c) { r[u] = c, s += 1, s === e.length && i(r) } } for (var a = 0; a < e.length; a += 1) at.resolve(e[a]).then(o(a), n) }) }, at.race = function(e) { return new at(function(i, n) { for (var r = 0; r < e.length; r += 1) at.resolve(e[r]).then(i, n) }) }; var _e = at.prototype;
    _e.resolve = function(e) { var i = this; if (i.state === Ze) { if (e === i) throw new TypeError("Promise settled with itself."); var n = !1; try { var r = e && e.then; if (e !== null && Tt(e) && ct(r)) { r.call(e, function(s) { n || i.resolve(s), n = !0 }, function(s) { n || i.reject(s), n = !0 }); return } } catch (s) { n || i.reject(s); return }
            i.state = Cn, i.value = e, i.notify() } }, _e.reject = function(e) { var i = this; if (i.state === Ze) { if (e === i) throw new TypeError("Promise settled with itself.");
            i.state = In, i.value = e, i.notify() } }, _e.notify = function() { var e = this;
        Ss(function() { if (e.state !== Ze)
                for (; e.deferred.length;) { var i = e.deferred.shift(),
                        n = i[0],
                        r = i[1],
                        s = i[2],
                        o = i[3]; try { e.state === Cn ? ct(n) ? s(n.call(void 0, e.value)) : s(e.value) : e.state === In && (ct(r) ? s(r.call(void 0, e.value)) : o(e.value)) } catch (a) { o(a) } } }) }, _e.then = function(e, i) { var n = this; return new at(function(r, s) { n.deferred.push([e, i, r, s]), n.notify() }) }, _e.catch = function(t) { return this.then(void 0, t) };

    function Qe(t, e) { var i = k({ data: null, method: "GET", headers: {}, xhr: new XMLHttpRequest, beforeSend: N, responseType: "" }, e); return w.resolve().then(function() { return i.beforeSend(i) }).then(function() { return Ts(t, i) }) }

    function Ts(t, e) { return new w(function(i, n) { var r = e.xhr; for (var s in e)
                if (s in r) try { r[s] = e[s] } catch {}
                r.open(e.method.toUpperCase(), t); for (var o in e.headers) r.setRequestHeader(o, e.headers[o]);
            A(r, "load", function() { r.status === 0 || r.status >= 200 && r.status < 300 || r.status === 304 ? (e.responseType === "json" && H(r.response) && (r = k(Es(r), { response: JSON.parse(r.response) })), i(r)) : n(k(Error(r.statusText), { xhr: r, status: r.status })) }), A(r, "error", function() { return n(k(Error("Network Error"), { xhr: r })) }), A(r, "timeout", function() { return n(k(Error("Network Timeout"), { xhr: r })) }), r.send(e.data) }) }

    function Wi(t, e, i) { return new w(function(n, r) { var s = new Image;
            s.onerror = function(o) { return r(o) }, s.onload = function() { return n(s) }, i && (s.sizes = i), e && (s.srcset = e), s.src = t }) }

    function Es(t) { var e = {}; for (var i in t) e[i] = t[i]; return e }

    function Cs(t) { if (document.readyState !== "loading") { t(); return }
        K(document, "DOMContentLoaded", t) }

    function Ri(t) { return t = $(t), t.innerHTML = "", t }

    function Dt(t, e) { return t = $(t), Z(e) ? t.innerHTML : X(t.hasChildNodes() ? Ri(t) : t, e) }

    function Is(t, e) { return t = $(t), t.hasChildNodes() ? ti(e, function(i) { return t.insertBefore(i, t.firstChild) }) : X(t, e) }

    function X(t, e) { return t = $(t), ti(e, function(i) { return t.appendChild(i) }) }

    function Ae(t, e) { return t = $(t), ti(e, function(i) { return t.parentNode.insertBefore(i, t) }) }

    function Ue(t, e) { return t = $(t), ti(e, function(i) { return t.nextSibling ? Ae(t.nextSibling, i) : X(t.parentNode, i) }) }

    function ti(t, e) { return t = H(t) ? he(t) : t, t ? "length" in t ? T(t).map(e) : e(t) : null }

    function nt(t) { T(t).forEach(function(e) { return e.parentNode && e.parentNode.removeChild(e) }) }

    function ei(t, e) { for (e = J(Ae(t, e)); e.firstChild;) e = e.firstChild; return X(e, t), e }

    function _n(t, e) { return T(T(t).map(function(i) { return i.hasChildNodes ? ei(T(i.childNodes), e) : X(i, e) })) }

    function ii(t) { T(t).map(D).filter(function(e, i, n) { return n.indexOf(e) === i }).forEach(function(e) { Ae(e, e.childNodes), nt(e) }) } var _s = /^\s*<(\w+|!)[^>]*>/,
        As = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function he(t) { var e = As.exec(t); if (e) return document.createElement(e[1]); var i = document.createElement("div"); return _s.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t, i.childNodes.length > 1 ? T(i.childNodes) : i.firstChild }

    function It(t, e) { if (!!Ot(t))
            for (e(t), t = t.firstElementChild; t;) { var i = t.nextElementSibling;
                It(t, e), t = i } }

    function $(t, e) { return An(t) ? J(he(t)) : Li(t, e) }

    function O(t, e) { return An(t) ? T(he(t)) : Ee(t, e) }

    function An(t) { return H(t) && (t[0] === "<" || t.match(/^\s*</)) }

    function y(t) { for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
        Pn(t, e, "add") }

    function M(t) { for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
        Pn(t, e, "remove") }

    function ni(t, e) { _(t, "class", function(i) { return (i || "").replace(new RegExp("\\b" + e + "\\b", "g"), "") }) }

    function ji(t) { for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
        e[0] && M(t, e[0]), e[1] && y(t, e[1]) }

    function C(t, e) { var i;
        i = qi(e), e = i[0]; for (var n = T(t), r = 0; r < n.length; r++)
            if (e && n[r].classList.contains(e)) return !0;
        return !1 }

    function j(t, e, i) { e = qi(e); for (var n = T(t), r = 0; r < n.length; r++)
            for (var s = n[r].classList, o = 0; o < e.length; o++) Z(i) ? s.toggle(e[o]) : ri.Force ? s.toggle(e[o], !!i) : s[i ? "add" : "remove"](e[o]) }

    function Pn(t, e, i) { var n;
        e = e.reduce(function(a, u) { return a.concat(qi(u)) }, []); for (var r = T(t), s = function(a) { ri.Multiple ? (n = r[a].classList)[i].apply(n, e) : e.forEach(function(u) { return r[a].classList[i](u) }) }, o = 0; o < r.length; o++) s(o) }

    function qi(t) { return String(t).split(/\s|,/).filter(Boolean) } var ri = {get Multiple() { return this.get("Multiple") }, get Force() { return this.get("Force") }, get: function(t) { var e = document.createElement("_"),
                    i = e.classList; return i.add("a", "b"), i.toggle("c", !1), ri = { Multiple: i.contains("b"), Force: !i.contains("c") }, ri[t] } },
        Ps = { "animation-iteration-count": !0, "column-count": !0, "fill-opacity": !0, "flex-grow": !0, "flex-shrink": !0, "font-weight": !0, "line-height": !0, opacity: !0, order: !0, orphans: !0, "stroke-dasharray": !0, "stroke-dashoffset": !0, widows: !0, "z-index": !0, zoom: !0 };

    function d(t, e, i, n) { return n === void 0 && (n = ""), T(t).map(function(r) { if (H(e)) { if (e = si(e), Z(i)) return Nn(r, e);!i && !Zt(i) ? r.style.removeProperty(e) : r.style.setProperty(e, Et(i) && !Ps[e] ? i + "px" : i, n) } else if (ht(e)) { var s = Vi(r); return e.reduce(function(o, a) { return o[a] = s[si(a)], o }, {}) } else Tt(e) && (n = i, it(e, function(o, a) { return d(r, a, o, n) })); return r })[0] }

    function Vi(t, e) { return Ft(t).getComputedStyle(t, e) }

    function Nn(t, e, i) { return Vi(t, i)[e] } var Ns = pt(function(t) { var e = X(document.documentElement, he("<div>"));
            y(e, "uk-" + t); var i = Nn(e, "content", ":before"); return nt(e), i }),
        Ms = /^\s*(["'])?(.*?)\1\s*$/;

    function Yi(t) { return (xe ? Ns(t) : Vi(document.documentElement).getPropertyValue("--uk-" + t)).replace(Ms, "$2") } var si = pt(function(t) { return Ds(t) }),
        Mn = ["webkit", "moz", "ms"];

    function Ds(t) { t = zt(t); var e = document.documentElement,
            i = e.style; if (t in i) return t; for (var n = Mn.length, r; n--;)
            if (r = "-" + Mn[n] + "-" + t, r in i) return r }

    function Dn(t, e, i, n) { return i === void 0 && (i = 400), n === void 0 && (n = "linear"), w.all(T(t).map(function(r) { return new w(function(s, o) { for (var a in e) { var u = d(r, a);
                    u === "" && d(r, a, u) } var c = setTimeout(function() { return m(r, "transitionend") }, i);
                K(r, "transitionend transitioncanceled", function(l) { var h = l.type;
                    clearTimeout(c), M(r, "uk-transition"), d(r, { transitionProperty: "", transitionDuration: "", transitionTimingFunction: "" }), h === "transitioncanceled" ? o() : s(r) }, { self: !0 }), y(r, "uk-transition"), d(r, k({ transitionProperty: Object.keys(e).map(si).join(","), transitionDuration: i + "ms", transitionTimingFunction: n }, e)) }) })) } var P = { start: Dn, stop: function(t) { return m(t, "transitionend"), w.resolve() }, cancel: function(t) { m(t, "transitioncanceled") }, inProgress: function(t) { return C(t, "uk-transition") } },
        Pe = "uk-animation-";

    function Gi(t, e, i, n, r) { return i === void 0 && (i = 200), w.all(T(t).map(function(s) { return new w(function(o, a) { m(s, "animationcanceled"); var u = setTimeout(function() { return m(s, "animationend") }, i);
                K(s, "animationend animationcanceled", function(c) { var l = c.type;
                    clearTimeout(u), l === "animationcanceled" ? a() : o(s), d(s, "animationDuration", ""), ni(s, Pe + "\\S*") }, { self: !0 }), d(s, "animationDuration", i + "ms"), y(s, e, Pe + (r ? "leave" : "enter")), vt(e, Pe) && (n && y(s, "uk-transform-origin-" + n), r && y(s, Pe + "reverse")) }) })) } var Hs = new RegExp(Pe + "(enter|leave)"),
        yt = { in: Gi, out: function(t, e, i, n) { return Gi(t, e, i, n, !0) }, inProgress: function(t) { return Hs.test(_(t, "class")) }, cancel: function(t) { m(t, "animationcanceled") } },
        Ht = { width: ["left", "right"], height: ["top", "bottom"] };

    function I(t) { var e = Ot(t) ? J(t).getBoundingClientRect() : { height: q(t), width: Me(t), top: 0, left: 0 }; return { height: e.height, width: e.width, top: e.top, left: e.left, bottom: e.top + e.height, right: e.left + e.width } }

    function B(t, e) { var i = I(t); if (t) { var n = Ft(t),
                r = n.pageYOffset,
                s = n.pageXOffset,
                o = { height: r, width: s }; for (var a in Ht)
                for (var u in Ht[a]) i[Ht[a][u]] += o[a] } if (!e) return i; var c = d(t, "position");
        it(d(t, ["left", "top"]), function(l, h) { return d(t, h, e[h] - i[h] + x(c === "absolute" && l === "auto" ? oi(t)[h] : l)) }) }

    function oi(t) { for (var e = B(t), i = e.top, n = e.left, r = J(t), s = r.ownerDocument, o = s.body, a = s.documentElement, u = r.offsetParent, c = u || a; c && (c === o || c === a) && d(c, "position") === "static";) c = c.parentNode; if (Ot(c)) { var l = B(c);
            i -= l.top + x(d(c, "borderTopWidth")), n -= l.left + x(d(c, "borderLeftWidth")) } return { top: i - x(d(t, "marginTop")), left: n - x(d(t, "marginLeft")) } }

    function Ne(t) { var e = [0, 0];
        t = J(t);
        do
            if (e[0] += t.offsetTop, e[1] += t.offsetLeft, d(t, "position") === "fixed") { var i = Ft(t); return e[0] += i.pageYOffset, e[1] += i.pageXOffset, e } while (t = t.offsetParent);
        return e } var q = Hn("height"),
        Me = Hn("width");

    function Hn(t) { var e = pe(t); return function(i, n) { if (Z(n)) { if (me(i)) return i["inner" + e]; if (Jt(i)) { var r = i.documentElement; return Math.max(r["offset" + e], r["scroll" + e]) } return i = J(i), n = d(i, t), n = n === "auto" ? i["offset" + e] : x(n) || 0, n - Rt(i, t) } else return d(i, t, !n && n !== 0 ? "" : +n + Rt(i, t) + "px") } }

    function Rt(t, e, i) { return i === void 0 && (i = "border-box"), d(t, "boxSizing") === i ? Ht[e].map(pe).reduce(function(n, r) { return n + x(d(t, "padding" + r)) + x(d(t, "border" + r + "Width")) }, 0) : 0 }

    function De(t) { for (var e in Ht)
            for (var i in Ht[e])
                if (Ht[e][i] === t) return Ht[e][1 - i];
        return t }

    function wt(t, e, i, n) { return e === void 0 && (e = "width"), i === void 0 && (i = window), n === void 0 && (n = !1), Et(t) ? +t : gt(t, "vh") ? Ki(q(Ft(i)), t) : gt(t, "vw") ? Ki(Me(Ft(i)), t) : gt(t, "%") ? Ki(n ? i["offset" + pe(e)] : I(i)[e], t) : x(t) }

    function Ki(t, e) { return t * x(e) / 100 } var F = { reads: [], writes: [], read: function(t) { return this.reads.push(t), Ji(), t }, write: function(t) { return this.writes.push(t), Ji(), t }, clear: function(t) { zn(this.reads, t), zn(this.writes, t) }, flush: Xi };

    function Xi(t) { t === void 0 && (t = 1), Bn(F.reads), Bn(F.writes.splice(0)), F.scheduled = !1, (F.reads.length || F.writes.length) && Ji(t + 1) } var Bs = 4;

    function Ji(t) { F.scheduled || (F.scheduled = !0, t && t < Bs ? w.resolve().then(function() { return Xi(t) }) : requestAnimationFrame(function() { return Xi() })) }

    function Bn(t) { for (var e; e = t.shift();) try { e() } catch (i) { console.error(i) } }

    function zn(t, e) { var i = t.indexOf(e); return ~i && t.splice(i, 1) }

    function Zi() {}
    Zi.prototype = { positions: [], init: function() { var t = this;
            this.positions = []; var e;
            this.unbind = A(document, "mousemove", function(i) { return e = ue(i) }), this.interval = setInterval(function() {!e || (t.positions.push(e), t.positions.length > 5 && t.positions.shift()) }, 50) }, cancel: function() { this.unbind && this.unbind(), this.interval && clearInterval(this.interval) }, movesTo: function(t) { if (this.positions.length < 2) return !1; var e = t.getBoundingClientRect(),
                i = e.left,
                n = e.right,
                r = e.top,
                s = e.bottom,
                o = this.positions,
                a = o[0],
                u = be(this.positions),
                c = [a, u]; if (Ve(u, e)) return !1; var l = [
                [{ x: i, y: r }, { x: n, y: s }],
                [{ x: i, y: s }, { x: n, y: r }]
            ]; return l.some(function(h) { var f = zs(c, h); return f && Ve(f, e) }) } };

    function zs(t, e) { var i = t[0],
            n = i.x,
            r = i.y,
            s = t[1],
            o = s.x,
            a = s.y,
            u = e[0],
            c = u.x,
            l = u.y,
            h = e[1],
            f = h.x,
            v = h.y,
            p = (v - l) * (o - n) - (f - c) * (a - r); if (p === 0) return !1; var g = ((f - c) * (r - l) - (v - l) * (n - c)) / p; return g < 0 ? !1 : { x: n + g * (o - n), y: r + g * (a - r) } } var tt = {};
    tt.events = tt.created = tt.beforeConnect = tt.connected = tt.beforeDisconnect = tt.disconnected = tt.destroy = Qi, tt.args = function(t, e) { return e !== !1 && Qi(e || t) }, tt.update = function(t, e) { return $e(Qi(t, ct(e) ? { read: e } : e), "order") }, tt.props = function(t, e) { return ht(e) && (e = e.reduce(function(i, n) { return i[n] = String, i }, {})), tt.methods(t, e) }, tt.computed = tt.methods = function(t, e) { return e ? t ? k({}, t, e) : e : t }, tt.data = function(t, e, i) { return i ? On(t, e, i) : e ? t ? function(n) { return On(t, e, n) } : e : t };

    function On(t, e, i) { return tt.computed(ct(t) ? t.call(i, i) : t, ct(e) ? e.call(i, i) : e) }

    function Qi(t, e) { return t = t && !ht(t) ? [t] : t, e ? t ? t.concat(e) : ht(e) ? e : [e] : t }

    function Os(t, e) { return Z(e) ? t : e }

    function ce(t, e, i) { var n = {}; if (ct(e) && (e = e.options), e.extends && (t = ce(t, e.extends, i)), e.mixins)
            for (var r = 0, s = e.mixins.length; r < s; r++) t = ce(t, e.mixins[r], i); for (var o in t) u(o); for (var a in e) At(t, a) || u(a);

        function u(c) { n[c] = (tt[c] || Os)(t[c], e[c], i) } return n }

    function ai(t, e) { var i;
        e === void 0 && (e = []); try { return t ? vt(t, "{") ? JSON.parse(t) : e.length && !b(t, ":") ? (i = {}, i[e[0]] = t, i) : t.split(";").reduce(function(n, r) { var s = r.split(/:(.*)/),
                    o = s[0],
                    a = s[1]; return o && !Z(a) && (n[o.trim()] = a.trim()), n }, {}) : {} } catch { return {} } }

    function Fn(t) { if (hi(t) && Ui(t, { func: "playVideo", method: "play" }), ui(t)) try { t.play().catch(N) } catch {} }

    function Ln(t) { hi(t) && Ui(t, { func: "pauseVideo", method: "pause" }), ui(t) && t.pause() }

    function Wn(t) { hi(t) && Ui(t, { func: "mute", method: "setVolume", value: 0 }), ui(t) && (t.muted = !0) }

    function Rn(t) { return ui(t) || hi(t) }

    function ui(t) { return t && t.tagName === "VIDEO" }

    function hi(t) { return t && t.tagName === "IFRAME" && (jn(t) || qn(t)) }

    function jn(t) { return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/) }

    function qn(t) { return !!t.src.match(/vimeo\.com\/video\/.*/) }

    function Ui(t, e) { Ls(t).then(function() { return Vn(t, e) }) }

    function Vn(t, e) { try { t.contentWindow.postMessage(JSON.stringify(k({ event: "command" }, e)), "*") } catch {} } var tn = "_ukPlayer",
        Fs = 0;

    function Ls(t) { if (t[tn]) return t[tn]; var e = jn(t),
            i = qn(t),
            n = ++Fs,
            r; return t[tn] = new w(function(s) { e && K(t, "load", function() { var o = function() { return Vn(t, { event: "listening", id: n }) };
                r = setInterval(o, 100), o() }), K(window, "message", s, !1, function(o) { var a = o.data; try { return a = JSON.parse(a), a && (e && a.id === n && a.event === "onReady" || i && Number(a.player_id) === n) } catch {} }), t.src = "" + t.src + (b(t.src, "?") ? "&" : "?") + (e ? "enablejsapi=1" : "api=1&player_id=" + n) }).then(function() { return clearInterval(r) }) }

    function fe(t, e, i) { return e === void 0 && (e = 0), i === void 0 && (i = 0), W(t) ? bn.apply(void 0, jt(t).map(function(n) { var r = B(le(n)),
                s = r.top,
                o = r.left,
                a = r.bottom,
                u = r.right; return { top: s - e, left: o - i, bottom: a + e, right: u + i } }).concat(B(t))) : !1 }

    function ci(t, e) { me(t) || Jt(t) ? t = fi(t) : t = J(t), t.scrollTop = e }

    function en(t, e) { e === void 0 && (e = {}); var i = e.offset;
        i === void 0 && (i = 0); var n = W(t) ? jt(t) : []; return n.reduce(function(a, u, c) { var l = u.scrollTop,
                h = u.scrollHeight,
                f = u.offsetHeight,
                v = h - He(u),
                p = B(n[c - 1] || t),
                g = p.height,
                S = p.top,
                E = Math.ceil(S - B(le(u)).top - i + l); return i > 0 && f < g + i ? E += i : i = 0, E > v ? (i -= E - v, E = v) : E < 0 && (i -= E, E = 0),
                function() { return r(u, E - l).then(a) } }, function() { return w.resolve() })();

        function r(a, u) { return new w(function(c) { var l = a.scrollTop,
                    h = s(Math.abs(u)),
                    f = Date.now();
                (function v() { var p = o($t((Date.now() - f) / h));
                    ci(a, l + u * p), p === 1 ? c() : requestAnimationFrame(v) })() }) }

        function s(a) { return 40 * Math.pow(a, .375) }

        function o(a) { return .5 * (1 - Math.cos(Math.PI * a)) } }

    function nn(t, e, i) { if (e === void 0 && (e = 0), i === void 0 && (i = 0), !W(t)) return 0; var n = jt(t, /auto|scroll/, !0),
            r = n[0],
            s = r.scrollHeight,
            o = r.scrollTop,
            a = He(r),
            u = s - a,
            c = Ne(t)[0] - Ne(r)[0],
            l = Math.max(0, c - a + e),
            h = Math.min(u, c + t.offsetHeight - i); return $t((o - l) / (h - l)) }

    function jt(t, e, i) { e === void 0 && (e = /auto|scroll|hidden/), i === void 0 && (i = !1); var n = fi(t),
            r = Se(t).reverse();
        r = r.slice(r.indexOf(n) + 1); var s = Pt(r, function(o) { return d(o, "position") === "fixed" }); return ~s && (r = r.slice(s)), [n].concat(r.filter(function(o) { return e.test(d(o, "overflow")) && (!i || o.scrollHeight > He(o)) })).reverse() }

    function le(t) { return t === fi(t) ? window : t }

    function He(t) { return (t === fi(t) ? document.documentElement : t).clientHeight }

    function fi(t) { var e = Ft(t),
            i = e.document; return i.scrollingElement || i.documentElement } var Be = { width: ["x", "left", "right"], height: ["y", "top", "bottom"] };

    function Yn(t, e, i, n, r, s, o, a) { i = Kn(i), n = Kn(n); var u = { element: i, target: n }; if (!t || !e) return u; var c = B(t),
            l = B(e),
            h = l; if (Gn(h, i, c, -1), Gn(h, n, l, 1), r = Xn(r, c.width, c.height), s = Xn(s, l.width, l.height), r.x += s.x, r.y += s.y, h.left += r.x, h.top += r.y, o) { var f = jt(t).map(le);
            a && !b(f, a) && f.unshift(a), f = f.map(function(v) { return B(v) }), it(Be, function(v, p) { var g = v[0],
                    S = v[1],
                    E = v[2];!(o === !0 || b(o, g)) || f.some(function(z) { var L = i[g] === S ? -c[p] : i[g] === E ? c[p] : 0,
                        St = n[g] === S ? l[p] : n[g] === E ? -l[p] : 0; if (h[S] < z[S] || h[S] + c[p] > z[E]) { var ut = c[p] / 2,
                            bt = n[g] === "center" ? -l[p] / 2 : 0; return i[g] === "center" && (Re(ut, bt) || Re(-ut, -bt)) || Re(L, St) }

                    function Re(je, _i) { var Gt = x((h[S] + je + _i - r[g] * 2).toFixed(4)); if (Gt >= z[S] && Gt + c[p] <= z[E]) return h[S] = Gt, ["element", "target"].forEach(function(vn) { u[vn][g] = je ? u[vn][g] === Be[p][1] ? Be[p][2] : Be[p][1] : u[vn][g] }), !0 } }) }) } return B(t, h), u }

    function Gn(t, e, i, n) { it(Be, function(r, s) { var o = r[0],
                a = r[1],
                u = r[2];
            e[o] === u ? t[a] += i[s] * n : e[o] === "center" && (t[a] += i[s] * n / 2) }) }

    function Kn(t) { var e = /left|center|right/,
            i = /top|center|bottom/; return t = (t || "").split(" "), t.length === 1 && (t = e.test(t[0]) ? t.concat("center") : i.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), { x: e.test(t[0]) ? t[0] : "center", y: i.test(t[1]) ? t[1] : "center" } }

    function Xn(t, e, i) { var n = (t || "").split(" "),
            r = n[0],
            s = n[1]; return { x: r ? x(r) * (gt(r, "%") ? e / 100 : 1) : 0, y: s ? x(s) * (gt(s, "%") ? i / 100 : 1) : 0 } } var Ws = Object.freeze({ __proto__: null, ajax: Qe, getImage: Wi, transition: Dn, Transition: P, animate: Gi, Animation: yt, attr: _, hasAttr: ee, removeAttr: zi, data: ft, addClass: y, removeClass: M, removeClasses: ni, replaceClass: ji, hasClass: C, toggleClass: j, dimensions: I, offset: B, position: oi, offsetPosition: Ne, height: q, width: Me, boxModelAdjust: Rt, flipPosition: De, toPx: wt, ready: Cs, empty: Ri, html: Dt, prepend: Is, append: X, before: Ae, after: Ue, remove: nt, wrapAll: ei, wrapInner: _n, unwrap: ii, fragment: he, apply: It, $, $$: O, inBrowser: lt, isIE: xe, isRtl: U, hasTouch: $n, pointerDown: dt, pointerMove: re, pointerUp: xt, pointerEnter: Lt, pointerLeave: se, pointerCancel: oe, on: A, off: Wt, once: K, trigger: m, createEvent: Ie, toEventTargets: Xe, isTouch: Ct, getEventPos: ue, fastdom: F, isVoidElement: Oi, isVisible: W, selInput: ye, isInput: Fi, selFocusable: Ye, isFocusable: Ge, parent: D, filter: ke, matches: Y, closest: ot, within: G, parents: Se, children: R, index: ae, hasOwn: At, hyphenate: zt, camelize: Xt, ucfirst: pe, startsWith: vt, endsWith: gt, includes: b, findIndex: Pt, isArray: ht, isFunction: ct, isObject: Tt, isPlainObject: Nt, isWindow: me, isDocument: Jt, isNode: Ni, isElement: Ot, isBoolean: we, isString: H, isNumber: Zt, isNumeric: Et, isEmpty: Qt, isUndefined: Z, toBoolean: Di, toNumber: Mt, toFloat: x, toArray: mn, toNode: J, toNodes: T, toWindow: Ft, toMs: Hi, isEqual: qe, swap: Bi, assign: k, last: be, each: it, sortBy: $e, uniqueBy: wn, clamp: $t, noop: N, intersectRect: bn, pointInRect: Ve, Dimensions: Ut, getIndex: te, memoize: pt, MouseTracker: Zi, mergeOptions: ce, parseOptions: ai, play: Fn, pause: Ln, mute: Wn, isVideo: Rn, positionAt: Yn, Promise: w, Deferred: Je, query: mt, queryAll: Te, find: Li, findAll: Ee, escape: Ce, css: d, getCssVar: Yi, propName: si, isInView: fe, scrollTop: ci, scrollIntoView: en, scrolledOver: nn, scrollParents: jt, getViewport: le, getViewportClientHeight: He });

    function Rs(t) { var e = t.data;
        t.use = function(r) { if (!r.installed) return r.call(null, this), r.installed = !0, this }, t.mixin = function(r, s) { s = (H(s) ? t.component(s) : s) || this, s.options = ce(s.options, r) }, t.extend = function(r) { r = r || {}; var s = this,
                o = function(u) { this._init(u) }; return o.prototype = Object.create(s.prototype), o.prototype.constructor = o, o.options = ce(s.options, r), o.super = s, o.extend = s.extend, o }, t.update = function(r, s) { r = r ? J(r) : document.body, Se(r).reverse().forEach(function(o) { return n(o[e], s) }), It(r, function(o) { return n(o[e], s) }) }; var i;
        Object.defineProperty(t, "container", { get: function() { return i || document.body }, set: function(r) { i = $(r) } });

        function n(r, s) { if (!!r)
                for (var o in r) r[o]._connected && r[o]._callUpdate(s) } }

    function js(t) { t.prototype._callHook = function(n) { var r = this,
                s = this.$options[n];
            s && s.forEach(function(o) { return o.call(r) }) }, t.prototype._callConnected = function() { this._connected || (this._data = {}, this._computeds = {}, this._initProps(), this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObservers(), this._callHook("connected"), this._callUpdate()) }, t.prototype._callDisconnected = function() {!this._connected || (this._callHook("beforeDisconnect"), this._disconnectObservers(), this._unbindEvents(), this._callHook("disconnected"), this._connected = !1, delete this._watch) }, t.prototype._callUpdate = function(n) { var r = this;
            n === void 0 && (n = "update"), !!this._connected && ((n === "update" || n === "resize") && this._callWatches(), !!this.$options.update && (this._updates || (this._updates = new Set, F.read(function() { r._connected && e.call(r, r._updates), delete r._updates })), this._updates.add(n.type || n))) }, t.prototype._callWatches = function() { var n = this; if (!this._watch) { var r = !At(this, "_watch");
                this._watch = F.read(function() { n._connected && i.call(n, r), n._watch = null }) } };

        function e(n) { for (var r = this, s = this.$options.update, o = function(u) { var c = s[u],
                        l = c.read,
                        h = c.write,
                        f = c.events; if (!(!n.has("update") && (!f || !f.some(function(p) { return n.has(p) })))) { var v = void 0;
                        l && (v = l.call(r, r._data, n), v && Nt(v) && k(r._data, v)), h && v !== !1 && F.write(function() { return h.call(r, r._data, n) }) } }, a = 0; a < s.length; a++) o(a) }

        function i(n) { var r = this,
                s = r.$options.computed,
                o = k({}, this._computeds);
            this._computeds = {}; for (var a in s) { var u = s[a],
                    c = u.watch,
                    l = u.immediate;
                c && (n && l || At(o, a) && !qe(o[a], this[a])) && c.call(this, this[a], o[a]) } } }

    function qs(t) { var e = 0;
        t.prototype._init = function(h) { h = h || {}, h.data = u(h, this.constructor.options), this.$options = ce(this.constructor.options, h, this), this.$el = null, this.$props = {}, this._uid = e++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), h.el && this.$mount(h.el) }, t.prototype._initData = function() { var h = this.$options,
                f = h.data;
            f === void 0 && (f = {}); for (var v in f) this.$props[v] = this[v] = f[v] }, t.prototype._initMethods = function() { var h = this.$options,
                f = h.methods; if (f)
                for (var v in f) this[v] = f[v].bind(this) }, t.prototype._initComputeds = function() { var h = this.$options,
                f = h.computed; if (this._computeds = {}, f)
                for (var v in f) n(this, v, f[v]) }, t.prototype._initProps = function(h) { var f;
            h = h || i(this.$options, this.$name); for (f in h) Z(h[f]) || (this.$props[f] = h[f]); var v = [this.$options.computed, this.$options.methods]; for (f in this.$props) f in h && s(v, f) && (this[f] = this.$props[f]) }, t.prototype._initEvents = function() { var h = this;
            this._events = []; var f = this.$options,
                v = f.events;
            v && v.forEach(function(p) { if (At(p, "handler")) r(h, p);
                else
                    for (var g in p) r(h, p[g], g) }) }, t.prototype._unbindEvents = function() { this._events.forEach(function(h) { return h() }), delete this._events }, t.prototype._initObservers = function() { this._observers = [c(this), l(this)] }, t.prototype._disconnectObservers = function() { this._observers.forEach(function(h) { return h && h.disconnect() }) };

        function i(h, f) { var v = {},
                p = h.args;
            p === void 0 && (p = []); var g = h.props;
            g === void 0 && (g = {}); var S = h.el; if (!g) return v; for (var E in g) { var z = zt(E),
                    L = ft(S, z);
                Z(L) || (L = g[E] === Boolean && L === "" ? !0 : o(g[E], L), !(z === "target" && (!L || vt(L, "_"))) && (v[E] = L)) } var St = ai(ft(S, f), p); for (var ut in St) { var bt = Xt(ut);
                g[bt] !== void 0 && (v[bt] = o(g[bt], St[ut])) } return v }

        function n(h, f, v) { Object.defineProperty(h, f, { enumerable: !0, get: function() { var p = h._computeds,
                        g = h.$props,
                        S = h.$el; return At(p, f) || (p[f] = (v.get || v).call(h, g, S)), p[f] }, set: function(p) { var g = h._computeds;
                    g[f] = v.set ? v.set.call(h, p) : p, Z(g[f]) && delete g[f] } }) }

        function r(h, f, v) { Nt(f) || (f = { name: v, handler: f }); var p = f.name,
                g = f.el,
                S = f.handler,
                E = f.capture,
                z = f.passive,
                L = f.delegate,
                St = f.filter,
                ut = f.self; if (g = ct(g) ? g.call(h) : g || h.$el, ht(g)) { g.forEach(function(bt) { return r(h, k({}, f, { el: bt }), v) }); return }!g || St && !St.call(h) || h._events.push(A(g, p, L ? H(L) ? L : L.call(h) : null, H(S) ? h[S] : S.bind(h), { passive: z, capture: E, self: ut })) }

        function s(h, f) { return h.every(function(v) { return !v || !At(v, f) }) }

        function o(h, f) { return h === Boolean ? Di(f) : h === Number ? Mt(f) : h === "list" ? a(f) : h ? h(f) : f }

        function a(h) { return ht(h) ? h : H(h) ? h.split(/,(?![^(]*\))/).map(function(f) { return Et(f) ? Mt(f) : Di(f.trim()) }) : [h] }

        function u(h, f) { var v = h.data,
                p = f.args,
                g = f.props; if (g === void 0 && (g = {}), v = ht(v) ? Qt(p) ? void 0 : v.slice(0, p.length).reduce(function(E, z, L) { return Nt(z) ? k(E, z) : E[p[L]] = z, E }, {}) : v, v)
                for (var S in v) Z(v[S]) ? delete v[S] : v[S] = g[S] ? o(g[S], v[S]) : v[S]; return v }

        function c(h) { var f = h.$options,
                v = f.el,
                p = new MutationObserver(function() { return h.$emit() }); return p.observe(v, { childList: !0, subtree: !0 }), p }

        function l(h) { var f = h.$name,
                v = h.$options,
                p = h.$props,
                g = v.attrs,
                S = v.props,
                E = v.el; if (!(!S || g === !1)) { var z = ht(g) ? g : Object.keys(S),
                    L = z.map(function(ut) { return zt(ut) }).concat(f),
                    St = new MutationObserver(function(ut) { var bt = i(v, f);
                        ut.some(function(Re) { var je = Re.attributeName,
                                _i = je.replace("data-", ""); return (_i === f ? z : [Xt(_i), Xt(je)]).some(function(Gt) { return !Z(bt[Gt]) && bt[Gt] !== p[Gt] }) }) && h.$reset() }); return St.observe(E, { attributes: !0, attributeFilter: L.concat(L.map(function(ut) { return "data-" + ut })) }), St } } }

    function Vs(t) { var e = t.data;
        t.prototype.$create = function(n, r, s) { return t[n](r, s) }, t.prototype.$mount = function(n) { var r = this.$options,
                s = r.name;
            n[e] || (n[e] = {}), !n[e][s] && (n[e][s] = this, this.$el = this.$options.el = this.$options.el || n, G(n, document) && this._callConnected()) }, t.prototype.$reset = function() { this._callDisconnected(), this._callConnected() }, t.prototype.$destroy = function(n) { n === void 0 && (n = !1); var r = this.$options,
                s = r.el,
                o = r.name;
            s && this._callDisconnected(), this._callHook("destroy"), !(!s || !s[e]) && (delete s[e][o], Qt(s[e]) || delete s[e], n && nt(this.$el)) }, t.prototype.$emit = function(n) { this._callUpdate(n) }, t.prototype.$update = function(n, r) { n === void 0 && (n = this.$el), t.update(n, r) }, t.prototype.$getComponent = t.getComponent; var i = pt(function(n) { return t.prefix + zt(n) });
        Object.defineProperties(t.prototype, { $container: Object.getOwnPropertyDescriptor(t, "container"), $name: { get: function() { return i(this.$options.name) } } }) }

    function Ys(t) { var e = t.data,
            i = {};
        t.component = function(n, r) { var s = zt(n); if (n = Xt(s), !r) return Nt(i[n]) && (i[n] = t.extend(i[n])), i[n];
            t[n] = function(a, u) { for (var c = arguments.length, l = Array(c); c--;) l[c] = arguments[c]; var h = t.component(n); return h.options.functional ? new h({ data: Nt(a) ? a : [].concat(l) }) : a ? O(a).map(f)[0] : f(a);

                function f(v) { var p = t.getComponent(v, n); if (p)
                        if (u) p.$destroy();
                        else return p;
                    return new h({ el: v, data: u }) } }; var o = Nt(r) ? k({}, r) : r.options; return o.name = n, o.install && o.install(t, o, n), t._initialized && !o.functional && F.read(function() { return t[n]("[uk-" + s + "],[data-uk-" + s + "]") }), i[n] = Nt(r) ? o : r }, t.getComponents = function(n) { return n && n[e] || {} }, t.getComponent = function(n, r) { return t.getComponents(n)[r] }, t.connect = function(n) { if (n[e])
                for (var r in n[e]) n[e][r]._callConnected(); for (var s = 0; s < n.attributes.length; s++) { var o = Jn(n.attributes[s].name);
                o && o in i && t[o](n) } }, t.disconnect = function(n) { for (var r in n[e]) n[e][r]._callDisconnected() } } var Jn = pt(function(t) { return vt(t, "uk-") || vt(t, "data-uk-") ? Xt(t.replace("data-uk-", "").replace("uk-", "")) : !1 }),
        et = function(t) { this._init(t) };
    et.util = Ws, et.data = "__uikit__", et.prefix = "uk-", et.options = {}, et.version = "3.11.1", Rs(et), js(et), qs(et), Ys(et), Vs(et);

    function Gs(t) { if (!!lt) { var e, i = function() { e || (e = !0, F.write(function() { return e = !1 }), t.update(null, "resize")) };
            A(window, "load resize", i), A(document, "loadedmetadata load", i, !0), "ResizeObserver" in window && new ResizeObserver(i).observe(document.documentElement); var n;
            A(window, "scroll", function(s) { n || (n = !0, F.write(function() { return n = !1 }), t.update(null, s.type)) }, { passive: !0, capture: !0 }); var r = 0;
            A(document, "animationstart", function(s) { var o = s.target;
                (d(o, "animationName") || "").match(/^uk-.*(left|right)/) && (r++, d(document.documentElement, "overflowX", "hidden"), setTimeout(function() {--r || d(document.documentElement, "overflowX", "") }, Hi(d(o, "animationDuration")) + 100)) }, !0), A(document, dt, function(s) { if (!!Ct(s)) { var o = ue(s),
                        a = "tagName" in s.target ? s.target : D(s.target);
                    K(document, xt + " " + oe + " scroll", function(u) { var c = ue(u),
                            l = c.x,
                            h = c.y;
                        (u.type !== "scroll" && a && l && Math.abs(o.x - l) > 100 || h && Math.abs(o.y - h) > 100) && setTimeout(function() { m(a, "swipe"), m(a, "swipe" + Ks(o.x, o.y, l, h)) }) }) } }, { passive: !0 }) } }

    function Ks(t, e, i, n) { return Math.abs(t - i) >= Math.abs(e - n) ? t - i > 0 ? "Left" : "Right" : e - n > 0 ? "Up" : "Down" }

    function Xs(t) { var e = t.connect,
            i = t.disconnect; if (!lt || !window.MutationObserver) return;
        F.read(function() { document.body && It(document.body, e), new MutationObserver(function(s) { return s.forEach(n) }).observe(document, { childList: !0, subtree: !0 }), new MutationObserver(function(s) { return s.forEach(r) }).observe(document, { attributes: !0, subtree: !0 }), t._initialized = !0 });

        function n(s) { for (var o = s.addedNodes, a = s.removedNodes, u = 0; u < o.length; u++) It(o[u], e); for (var c = 0; c < a.length; c++) It(a[c], i) }

        function r(s) { var o = s.target,
                a = s.attributeName,
                u = Jn(a); if (!(!u || !(u in t))) { if (ee(o, a)) { t[u](o); return } var c = t.getComponent(o, u);
                c && c.$destroy() } } } var rt = { connected: function() {!C(this.$el, this.$name) && y(this.$el, this.$name) } },
        _t = { props: { cls: Boolean, animation: "list", duration: Number, origin: String, transition: String }, data: { cls: !1, animation: [!1], duration: 200, origin: !1, transition: "linear", clsEnter: "uk-togglabe-enter", clsLeave: "uk-togglabe-leave", initProps: { overflow: "", height: "", paddingTop: "", paddingBottom: "", marginTop: "", marginBottom: "" }, hideProps: { overflow: "hidden", height: 0, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 0 } }, computed: { hasAnimation: function(t) { var e = t.animation; return !!e[0] }, hasTransition: function(t) { var e = t.animation; return this.hasAnimation && e[0] === !0 } }, methods: { toggleElement: function(t, e, i) { var n = this; return new w(function(r) { return w.all(T(t).map(function(s) { var o = we(e) ? e : !n.isToggled(s); if (!m(s, "before" + (o ? "show" : "hide"), [n])) return w.reject(); var a = (ct(i) ? i : i === !1 || !n.hasAnimation ? n._toggle : n.hasTransition ? Zn(n) : Js(n))(s, o),
                                u = o ? n.clsEnter : n.clsLeave;
                            y(s, u), m(s, o ? "show" : "hide", [n]); var c = function() { M(s, u), m(s, o ? "shown" : "hidden", [n]), n.$update(s) }; return a ? a.then(c, function() { return M(s, u), w.reject() }) : c() })).then(r, N) }) }, isToggled: function(t) { var e; return t === void 0 && (t = this.$el), e = T(t), t = e[0], C(t, this.clsEnter) ? !0 : C(t, this.clsLeave) ? !1 : this.cls ? C(t, this.cls.split(" ")[0]) : W(t) }, _toggle: function(t, e) { if (!!t) { e = Boolean(e); var i;
                        this.cls ? (i = b(this.cls, " ") || e !== C(t, this.cls), i && j(t, this.cls, b(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden, i && (t.hidden = !e)), O("[autofocus]", t).some(function(n) { return W(n) ? n.focus() || !0 : n.blur() }), i && (m(t, "toggled", [e, this]), this.$update(t)) } } } };

    function Zn(t) { var e = t.isToggled,
            i = t.duration,
            n = t.initProps,
            r = t.hideProps,
            s = t.transition,
            o = t._toggle; return function(a, u) { var c = P.inProgress(a),
                l = a.hasChildNodes ? x(d(a.firstElementChild, "marginTop")) + x(d(a.lastElementChild, "marginBottom")) : 0,
                h = W(a) ? q(a) + (c ? 0 : l) : 0;
            P.cancel(a), e(a) || o(a, !0), q(a, ""), F.flush(); var f = q(a) + (c ? 0 : l); return q(a, h), (u ? P.start(a, k({}, n, { overflow: "hidden", height: f }), Math.round(i * (1 - h / f)), s) : P.start(a, r, Math.round(i * (h / f)), s).then(function() { return o(a, !1) })).then(function() { return d(a, n) }) } }

    function Js(t) { return function(e, i) { yt.cancel(e); var n = t.animation,
                r = t.duration,
                s = t._toggle; return i ? (s(e, !0), yt.in(e, n[0], r, t.origin)) : yt.out(e, n[1] || n[0], r, t.origin).then(function() { return s(e, !1) }) } } var Qn = { mixins: [rt, _t], props: { targets: String, active: null, collapsible: Boolean, multiple: Boolean, toggle: String, content: String, transition: String, offset: Number }, data: { targets: "> *", active: !1, animation: [!0], collapsible: !0, multiple: !1, clsOpen: "uk-open", toggle: "> .uk-accordion-title", content: "> .uk-accordion-content", transition: "ease", offset: 0 }, computed: { items: { get: function(t, e) { var i = t.targets; return O(i, e) }, watch: function(t, e) { var i = this; if (t.forEach(function(r) { return li($(i.content, r), !C(r, i.clsOpen)) }), !(e || C(t, this.clsOpen))) { var n = this.active !== !1 && t[Number(this.active)] || !this.collapsible && t[0];
                        n && this.toggle(n, !1) } }, immediate: !0 }, toggles: function(t) { var e = t.toggle; return this.items.map(function(i) { return $(e, i) }) } }, events: [{ name: "click", delegate: function() { return this.targets + " " + this.$props.toggle }, handler: function(t) { t.preventDefault(), this.toggle(ae(this.toggles, t.current)) } }], methods: { toggle: function(t, e) { var i = this,
                    n = [this.items[te(t, this.items)]],
                    r = ke(this.items, "." + this.clsOpen);!this.multiple && !b(r, n[0]) && (n = n.concat(r)), !(!this.collapsible && r.length < 2 && !ke(n, ":not(." + this.clsOpen + ")").length) && n.forEach(function(s) { return i.toggleElement(s, !C(s, i.clsOpen), function(o, a) { j(o, i.clsOpen, a), _($(i.$props.toggle, o), "aria-expanded", a); var u = $((o._wrapper ? "> * " : "") + i.content, o); if (e === !1 || !i.hasTransition) { li(u, !a); return } return o._wrapper || (o._wrapper = ei(u, "<div" + (a ? " hidden" : "") + ">")), li(u, !1), Zn(i)(o._wrapper, a).then(function() { if (li(u, !a), delete o._wrapper, ii(u), a) { var c = $(i.$props.toggle, o);
                                fe(c) || en(c, { offset: i.offset }) } }) }) }) } } };

    function li(t, e) { t && (t.hidden = e) } var Zs = { mixins: [rt, _t], args: "animation", props: { close: String }, data: { animation: [!0], selClose: ".uk-alert-close", duration: 150, hideProps: k({ opacity: 0 }, _t.data.hideProps) }, events: [{ name: "click", delegate: function() { return this.selClose }, handler: function(t) { t.preventDefault(), this.close() } }], methods: { close: function() { var t = this;
                    this.toggleElement(this.$el).then(function() { return t.$destroy(!0) }) } } },
        Un = { args: "autoplay", props: { automute: Boolean, autoplay: Boolean }, data: { automute: !1, autoplay: !0 }, computed: { inView: function(t) { var e = t.autoplay; return e === "inview" } }, connected: function() { this.inView && !ee(this.$el, "preload") && (this.$el.preload = "none"), this.automute && Wn(this.$el) }, update: { read: function() { return Rn(this.$el) ? { visible: W(this.$el) && d(this.$el, "visibility") !== "hidden", inView: this.inView && fe(this.$el) } : !1 }, write: function(t) { var e = t.visible,
                        i = t.inView;!e || this.inView && !i ? Ln(this.$el) : (this.autoplay === !0 || this.inView && i) && Fn(this.$el) }, events: ["resize", "scroll"] } },
        Qs = { mixins: [Un], props: { width: Number, height: Number }, data: { automute: !0 }, update: { read: function() { var t = this.$el,
                        e = Us(t) || D(t),
                        i = e.offsetHeight,
                        n = e.offsetWidth,
                        r = Ut.cover({ width: this.width || t.naturalWidth || t.videoWidth || t.clientWidth, height: this.height || t.naturalHeight || t.videoHeight || t.clientHeight }, { width: n + (n % 2 ? 1 : 0), height: i + (i % 2 ? 1 : 0) }); return !r.width || !r.height ? !1 : r }, write: function(t) { var e = t.height,
                        i = t.width;
                    d(this.$el, { height: e, width: i }) }, events: ["resize"] } };

    function Us(t) { for (; t = D(t);)
            if (d(t, "position") !== "static") return t } var de = { props: { container: Boolean }, data: { container: !0 }, computed: { container: function(t) { var e = t.container; return e === !0 && this.$container || e && $(e) } } },
        tr = { props: { pos: String, offset: null, flip: Boolean, clsPos: String }, data: { pos: "bottom-" + (U ? "right" : "left"), flip: !0, offset: !1, clsPos: "" }, computed: { pos: function(t) { var e = t.pos; return e.split("-").concat("center").slice(0, 2) }, dir: function() { return this.pos[0] }, align: function() { return this.pos[1] } }, methods: { positionAt: function(t, e, i) { ni(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?"); var n = this,
                        r = n.offset,
                        s = this.getAxis(); if (!Et(r)) { var o = $(r);
                        r = o ? B(o)[s === "x" ? "left" : "top"] - B(e)[s === "x" ? "right" : "bottom"] : 0 } var a = Yn(t, e, s === "x" ? De(this.dir) + " " + this.align : this.align + " " + De(this.dir), s === "x" ? this.dir + " " + this.align : this.align + " " + this.dir, s === "x" ? "" + (this.dir === "left" ? -r : r) : " " + (this.dir === "top" ? -r : r), null, this.flip, i).target,
                        u = a.x,
                        c = a.y;
                    this.dir = s === "x" ? u : c, this.align = s === "x" ? c : u, j(t, this.clsPos + "-" + this.dir + "-" + this.align, this.offset === !1) }, getAxis: function() { return this.dir === "top" || this.dir === "bottom" ? "y" : "x" } } },
        Q, er = { mixins: [de, tr, _t], args: "pos", props: { mode: "list", toggle: Boolean, boundary: Boolean, boundaryAlign: Boolean, delayShow: Number, delayHide: Number, clsDrop: String }, data: { mode: ["click", "hover"], toggle: "- *", boundary: !0, boundaryAlign: !1, delayShow: 0, delayHide: 800, clsDrop: !1, animation: ["uk-animation-fade"], cls: "uk-open", container: !1 }, computed: { boundary: function(t, e) { var i = t.boundary; return i === !0 ? window : mt(i, e) }, clsDrop: function(t) { var e = t.clsDrop; return e || "uk-" + this.$options.name }, clsPos: function() { return this.clsDrop } }, created: function() { this.tracker = new Zi }, connected: function() { y(this.$el, this.clsDrop), this.toggle && !this.target && (this.target = this.$create("toggle", mt(this.toggle, this.$el), { target: this.$el, mode: this.mode }).$el, _(this.target, "aria-haspopup", !0)) }, disconnected: function() { this.isActive() && (Q = null) }, events: [{ name: "click", delegate: function() { return "." + this.clsDrop + "-close" }, handler: function(t) { t.preventDefault(), this.hide(!1) } }, { name: "click", delegate: function() { return 'a[href^="#"]' }, handler: function(t) { var e = t.defaultPrevented,
                        i = t.current.hash;!e && i && !G(i, this.$el) && this.hide(!1) } }, { name: "beforescroll", handler: function() { this.hide(!1) } }, { name: "toggle", self: !0, handler: function(t, e) { t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e.$el, !1) } }, { name: "toggleshow", self: !0, handler: function(t, e) { t.preventDefault(), this.show(e.$el) } }, { name: "togglehide", self: !0, handler: function(t) { t.preventDefault(), Y(this.$el, ":focus,:hover") || this.hide() } }, { name: Lt + " focusin", filter: function() { return b(this.mode, "hover") }, handler: function(t) { Ct(t) || this.clearTimers() } }, { name: se + " focusout", filter: function() { return b(this.mode, "hover") }, handler: function(t) {!Ct(t) && t.relatedTarget && this.hide() } }, { name: "toggled", self: !0, handler: function(t, e) {!e || (this.clearTimers(), this.position()) } }, { name: "show", self: !0, handler: function() { var t = this;
                    Q = this, this.tracker.init(), K(this.$el, "hide", A(document, dt, function(e) { var i = e.target; return !G(i, t.$el) && K(document, xt + " " + oe + " scroll", function(n) { var r = n.defaultPrevented,
                                s = n.type,
                                o = n.target;!r && s === xt && i === o && !(t.target && G(i, t.target)) && t.hide(!1) }, !0) }), { self: !0 }), K(this.$el, "hide", A(document, "keydown", function(e) { e.keyCode === 27 && t.hide(!1) }), { self: !0 }) } }, { name: "beforehide", self: !0, handler: function() { this.clearTimers() } }, { name: "hide", handler: function(t) { var e = t.target; if (this.$el !== e) { Q = Q === null && G(e, this.$el) && this.isToggled() ? this : Q; return }
                    Q = this.isActive() ? null : Q, this.tracker.cancel() } }], update: { write: function() { this.isToggled() && !C(this.$el, this.clsEnter) && this.position() }, events: ["resize"] }, methods: { show: function(t, e) { var i = this; if (t === void 0 && (t = this.target), e === void 0 && (e = !0), this.isToggled() && t && this.target && t !== this.target && this.hide(!1), this.target = t, this.clearTimers(), !this.isActive()) { if (Q) { if (e && Q.isDelaying) { this.showTimer = setTimeout(this.show, 10); return } for (var n; Q && n !== Q && !G(this.$el, Q.$el);) n = Q, Q.hide(!1) }
                        this.container && D(this.$el) !== this.container && X(this.container, this.$el), this.showTimer = setTimeout(function() { return i.toggleElement(i.$el, !0) }, e && this.delayShow || 0) } }, hide: function(t) { var e = this;
                    t === void 0 && (t = !0); var i = function() { return e.toggleElement(e.$el, !1, !1) };
                    this.clearTimers(), this.isDelaying = to(this.$el).some(function(n) { return e.tracker.movesTo(n) }), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(i, this.delayHide) : i() }, clearTimers: function() { clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1 }, isActive: function() { return Q === this }, position: function() { M(this.$el, this.clsDrop + "-stack"), j(this.$el, this.clsDrop + "-boundary", this.boundaryAlign); var t = B(this.boundary),
                        e = this.boundaryAlign ? t : B(this.target); if (this.align === "justify") { var i = this.getAxis() === "y" ? "width" : "height";
                        d(this.$el, i, e[i]) } else this.boundary && this.$el.offsetWidth > Math.max(t.right - e.left, e.right - t.left) && y(this.$el, this.clsDrop + "-stack");
                    this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.target, this.boundary) } } };

    function to(t) { var e = []; return It(t, function(i) { return d(i, "position") !== "static" && e.push(i) }), e } var eo = { mixins: [rt], args: "target", props: { target: Boolean }, data: { target: !1 }, computed: { input: function(t, e) { return $(ye, e) }, state: function() { return this.input.nextElementSibling }, target: function(t, e) { var i = t.target; return i && (i === !0 && D(this.input) === e && this.input.nextElementSibling || mt(i, e)) } }, update: function() { var t = this,
                    e = t.target,
                    i = t.input; if (!!e) { var n, r = Fi(e) ? "value" : "textContent",
                        s = e[r],
                        o = i.files && i.files[0] ? i.files[0].name : Y(i, "select") && (n = O("option", i).filter(function(a) { return a.selected })[0]) ? n.textContent : i.value;
                    s !== o && (e[r] = o) } }, events: [{ name: "change", handler: function() { this.$update() } }, { name: "reset", el: function() { return ot(this.$el, "form") }, handler: function() { this.$update() } }] },
        io = { update: { read: function(t) { var e = fe(this.$el); if (!e || t.isInView === e) return !1;
                    t.isInView = e }, write: function() { this.$el.src = "" + this.$el.src }, events: ["scroll", "resize"] } },
        ir = { props: { margin: String, firstColumn: Boolean }, data: { margin: "uk-margin-small-top", firstColumn: "uk-first-column" }, update: { read: function() { var t = rn(this.$el.children); return { rows: t, columns: no(t) } }, write: function(t) { for (var e = t.columns, i = t.rows, n = 0; n < i.length; n++)
                        for (var r = 0; r < i[n].length; r++) j(i[n][r], this.margin, n !== 0), j(i[n][r], this.firstColumn, !!~e[0].indexOf(i[n][r])) }, events: ["resize"] } };

    function rn(t) { return nr(t, "top", "bottom") }

    function no(t) { for (var e = [], i = 0; i < t.length; i++)
            for (var n = nr(t[i], "left", "right"), r = 0; r < n.length; r++) e[r] = e[r] ? e[r].concat(n[r]) : n[r]; return U ? e.reverse() : e }

    function nr(t, e, i) { for (var n = [
                []
            ], r = 0; r < t.length; r++) { var s = t[r]; if (!!W(s))
                for (var o = di(s), a = n.length - 1; a >= 0; a--) { var u = n[a]; if (!u[0]) { u.push(s); break } var c = void 0; if (u[0].offsetParent === s.offsetParent ? c = di(u[0]) : (o = di(s, !0), c = di(u[0], !0)), o[e] >= c[i] - 1 && o[e] !== c[e]) { n.push([s]); break } if (o[i] - 1 > c[e] || o[e] === c[e]) { u.push(s); break } if (a === 0) { n.unshift([s]); break } } } return n }

    function di(t, e) { var i;
        e === void 0 && (e = !1); var n = t.offsetTop,
            r = t.offsetLeft,
            s = t.offsetHeight,
            o = t.offsetWidth; return e && (i = Ne(t), n = i[0], r = i[1]), { top: n, left: r, bottom: n + s, right: r + o } } var ro = { extends: ir, mixins: [rt], name: "grid", props: { masonry: Boolean, parallax: Number }, data: { margin: "uk-grid-margin", clsStack: "uk-grid-stack", masonry: !1, parallax: 0 }, connected: function() { this.masonry && y(this.$el, "uk-flex-top uk-flex-wrap-top") }, update: [{ write: function(t) { var e = t.columns;
                j(this.$el, this.clsStack, e.length < 2) }, events: ["resize"] }, { read: function(t) { var e = t.columns,
                    i = t.rows; if (!e.length || !this.masonry && !this.parallax || rr(this.$el)) return t.translates = !1, !1; var n = !1,
                    r = R(this.$el),
                    s = ao(e),
                    o = oo(r, this.margin) * (i.length - 1),
                    a = Math.max.apply(Math, s) + o;
                this.masonry && (e = e.map(function(c) { return $e(c, "offsetTop") }), n = so(i, e)); var u = Math.abs(this.parallax); return u && (u = s.reduce(function(c, l, h) { return Math.max(c, l + o + (h % 2 ? u : u / 8) - a) }, 0)), { padding: u, columns: e, translates: n, height: n ? a : "" } }, write: function(t) { var e = t.height,
                    i = t.padding;
                d(this.$el, "paddingBottom", i || ""), e !== !1 && d(this.$el, "height", e) }, events: ["resize"] }, { read: function(t) { return t.height, rr(this.$el) ? !1 : { scrolled: this.parallax ? nn(this.$el) * Math.abs(this.parallax) : !1 } }, write: function(t) { var e = t.columns,
                    i = t.scrolled,
                    n = t.translates;
                i === !1 && !n || e.forEach(function(r, s) { return r.forEach(function(o, a) { return d(o, "transform", !i && !n ? "" : "translateY(" + ((n && -n[s][a]) + (i ? s % 2 ? i : i / 8 : 0)) + "px)") }) }) }, events: ["scroll", "resize"] }] };

    function rr(t) { return R(t).some(function(e) { return d(e, "position") === "absolute" }) }

    function so(t, e) { var i = t.map(function(n) { return Math.max.apply(Math, n.map(function(r) { return r.offsetHeight })) }); return e.map(function(n) { var r = 0; return n.map(function(s, o) { return r += o ? i[o - 1] - n[o - 1].offsetHeight : 0 }) }) }

    function oo(t, e) { var i = t.filter(function(r) { return C(r, e) }),
            n = i[0]; return x(n ? d(n, "marginTop") : d(t[0], "paddingLeft")) }

    function ao(t) { return t.map(function(e) { return e.reduce(function(i, n) { return i + n.offsetHeight }, 0) }) } var sn = xe ? { props: { selMinHeight: String }, data: { selMinHeight: !1, forceHeight: !1 }, computed: { elements: function(t, e) { var i = t.selMinHeight; return i ? O(i, e) : [e] } }, update: [{ read: function() { d(this.elements, "height", "") }, order: -5, events: ["resize"] }, { write: function() { var t = this;
                    this.elements.forEach(function(e) { var i = x(d(e, "minHeight"));
                        i && (t.forceHeight || Math.round(i + Rt(e, "height", "content-box")) >= e.offsetHeight) && d(e, "height", i) }) }, order: 5, events: ["resize"] }] } : {},
        uo = { mixins: [sn], args: "target", props: { target: String, row: Boolean }, data: { target: "> *", row: !0, forceHeight: !0 }, computed: { elements: function(t, e) { var i = t.target; return O(i, e) } }, update: { read: function() { return { rows: (this.row ? rn(this.elements) : [this.elements]).map(ho) } }, write: function(t) { var e = t.rows;
                    e.forEach(function(i) { var n = i.heights,
                            r = i.elements; return r.forEach(function(s, o) { return d(s, "minHeight", n[o]) }) }) }, events: ["resize"] } };

    function ho(t) { if (t.length < 2) return { heights: [""], elements: t }; var e = t.map(sr),
            i = Math.max.apply(Math, e),
            n = t.some(function(s) { return s.style.minHeight }),
            r = t.some(function(s, o) { return !s.style.minHeight && e[o] < i }); return n && r && (d(t, "minHeight", ""), e = t.map(sr), i = Math.max.apply(Math, e)), e = t.map(function(s, o) { return e[o] === i && x(s.style.minHeight).toFixed(2) !== i.toFixed(2) ? "" : i }), { heights: e, elements: t } }

    function sr(t) { var e = !1;
        W(t) || (e = t.style.display, d(t, "display", "block", "important")); var i = I(t).height - Rt(t, "height", "content-box"); return e !== !1 && d(t, "display", e), i } var co = { mixins: [sn], props: { expand: Boolean, offsetTop: Boolean, offsetBottom: Boolean, minHeight: Number }, data: { expand: !1, offsetTop: !1, offsetBottom: !1, minHeight: 0 }, update: { read: function(t) { var e = t.minHeight; if (!W(this.$el)) return !1; var i = "",
                        n = Rt(this.$el, "height", "content-box"); if (this.expand) i = q(window) - (I(document.documentElement).height - I(this.$el).height) - n || "";
                    else { if (i = "calc(100vh", this.offsetTop) { var r = B(this.$el),
                                s = r.top;
                            i += s > 0 && s < q(window) / 2 ? " - " + s + "px" : "" }
                        this.offsetBottom === !0 ? i += " - " + I(this.$el.nextElementSibling).height + "px" : Et(this.offsetBottom) ? i += " - " + this.offsetBottom + "vh" : this.offsetBottom && gt(this.offsetBottom, "px") ? i += " - " + x(this.offsetBottom) + "px" : H(this.offsetBottom) && (i += " - " + I(mt(this.offsetBottom, this.$el)).height + "px"), i += (n ? " - " + n + "px" : "") + ")" } return { minHeight: i, prev: e } }, write: function(t) { var e = t.minHeight,
                        i = t.prev;
                    d(this.$el, { minHeight: e }), e !== i && this.$update(this.$el, "resize"), this.minHeight && x(d(this.$el, "minHeight")) < this.minHeight && d(this.$el, "minHeight", this.minHeight) }, events: ["resize"] } },
        or = { args: "src", props: { id: Boolean, icon: String, src: String, style: String, width: Number, height: Number, ratio: Number, class: String, strokeAnimation: Boolean, focusable: Boolean, attributes: "list" }, data: { ratio: 1, include: ["style", "class", "focusable"], class: "", strokeAnimation: !1 }, beforeConnect: function() { this.class += " uk-svg" }, connected: function() { var t = this,
                    e;!this.icon && b(this.src, "#") && (e = this.src.split("#"), this.src = e[0], this.icon = e[1]), this.svg = this.getSvg().then(function(i) { if (t._connected) { var n = po(i, t.$el); return t.svgEl && n !== t.svgEl && nt(t.svgEl), t.applyAttributes(n, i), t.$emit(), t.svgEl = n } }, N) }, disconnected: function() { var t = this;
                this.svg.then(function(e) { t._connected || (Oi(t.$el) && (t.$el.hidden = !1), nt(e), t.svgEl = null) }), this.svg = null }, update: { read: function() { return !!(this.strokeAnimation && this.svgEl && W(this.svgEl)) }, write: function() { go(this.svgEl) }, type: ["resize"] }, methods: { getSvg: function() { var t = this; return fo(this.src).then(function(e) { return lo(e, t.icon) || w.reject("SVG not found.") }) }, applyAttributes: function(t, e) { var i = this; for (var n in this.$options.props) b(this.include, n) && n in this && _(t, n, this[n]); for (var r in this.attributes) { var s = this.attributes[r].split(":", 2),
                            o = s[0],
                            a = s[1];
                        _(t, o, a) }
                    this.id || zi(t, "id"); var u = ["width", "height"],
                        c = u.map(function(h) { return i[h] });
                    c.some(function(h) { return h }) || (c = u.map(function(h) { return _(e, h) })); var l = _(e, "viewBox");
                    l && !c.some(function(h) { return h }) && (c = l.split(" ").slice(2)), c.forEach(function(h, f) { return _(t, u[f], x(h) * i.ratio || null) }) } } },
        fo = pt(function(t) { return new w(function(e, i) { if (!t) { i(); return }
                vt(t, "data:") ? e(decodeURIComponent(t.split(",")[1])) : Qe(t).then(function(n) { return e(n.response) }, function() { return i("SVG not found.") }) }) });

    function lo(t, e) { return e && b(t, "<symbol") && (t = vo(t, e) || t), t = $(t.substr(t.indexOf("<svg"))), t && t.hasChildNodes() && t } var ar = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
        vi = {};

    function vo(t, e) { if (!vi[t]) { vi[t] = {}, ar.lastIndex = 0; for (var i; i = ar.exec(t);) vi[t][i[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + i[1] + "svg>" } return vi[t][e] }

    function go(t) { var e = ur(t);
        e && t.style.setProperty("--uk-animation-stroke", e) }

    function ur(t) { return Math.ceil(Math.max.apply(Math, [0].concat(O("[stroke]", t).map(function(e) { try { return e.getTotalLength() } catch { return 0 } })))) }

    function po(t, e) { if (Oi(e) || e.tagName === "CANVAS") { e.hidden = !0; var i = e.nextElementSibling; return hr(t, i) ? i : Ue(e, t) } var n = e.lastElementChild; return hr(t, n) ? n : X(e, t) }

    function hr(t, e) { return cr(t) && cr(e) && fr(t) === fr(e) }

    function cr(t) { return t && t.tagName === "svg" }

    function fr(t) { return (t.innerHTML || new XMLSerializer().serializeToString(t).replace(/<svg.*?>(.*?)<\/svg>/g, "$1")).replace(/\s/g, "") } var mo = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
        wo = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
        bo = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
        $o = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
        xo = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
        yo = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
        ko = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
        So = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
        To = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
        Eo = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
        Co = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
        Io = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
        _o = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
        Ao = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>',
        Po = '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
        No = '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',
        gi = { spinner: Po, totop: No, marker: bo, "close-icon": mo, "close-large": wo, "navbar-toggle-icon": $o, "overlay-icon": xo, "pagination-next": yo, "pagination-previous": ko, "search-icon": So, "search-large": To, "search-navbar": Eo, "slidenav-next": Co, "slidenav-next-large": Io, "slidenav-previous": _o, "slidenav-previous-large": Ao },
        lr = { install: Bo, extends: or, args: "icon", props: ["icon"], data: { include: ["focusable"] }, isIcon: !0, beforeConnect: function() { y(this.$el, "uk-icon") }, methods: { getSvg: function() { var t = zo(this.icon); return t ? w.resolve(t) : w.reject("Icon not found.") } } },
        kt = { args: !1, extends: lr, data: function(t) { return { icon: zt(t.constructor.options.name) } }, beforeConnect: function() { y(this.$el, this.$name) } },
        dr = { extends: kt, beforeConnect: function() { y(this.$el, "uk-slidenav") }, computed: { icon: function(t, e) { var i = t.icon; return C(e, "uk-slidenav-large") ? i + "-large" : i } } },
        Mo = { extends: kt, computed: { icon: function(t, e) { var i = t.icon; return C(e, "uk-search-icon") && Se(e, ".uk-search-large").length ? "search-large" : Se(e, ".uk-search-navbar").length ? "search-navbar" : i } } },
        Do = { extends: kt, computed: { icon: function() { return "close-" + (C(this.$el, "uk-close-large") ? "large" : "icon") } } },
        Ho = { extends: kt, connected: function() { var t = this;
                this.svg.then(function(e) { return e && t.ratio !== 1 && d($("circle", e), "strokeWidth", 1 / t.ratio) }) } },
        pi = {};

    function Bo(t) { t.icon.add = function(e, i) { var n, r = H(e) ? (n = {}, n[e] = i, n) : e;
            it(r, function(s, o) { gi[o] = s, delete pi[o] }), t._initialized && It(document.body, function(s) { return it(t.getComponents(s), function(o) { o.$options.isIcon && o.icon in r && o.$reset() }) }) } }

    function zo(t) { return gi[t] ? (pi[t] || (pi[t] = $((gi[Oo(t)] || gi[t]).trim())), pi[t].cloneNode(!0)) : null }

    function Oo(t) { return U ? Bi(Bi(t, "left", "right"), "previous", "next") : t } var Fo = { args: "dataSrc", props: { dataSrc: String, dataSrcset: Boolean, sizes: String, width: Number, height: Number, offsetTop: String, offsetLeft: String, target: String }, data: { dataSrc: "", dataSrcset: !1, sizes: !1, width: !1, height: !1, offsetTop: "50vh", offsetLeft: "50vw", target: !1 }, computed: { cacheKey: function(t) { var e = t.dataSrc; return this.$name + "." + e }, width: function(t) { var e = t.width,
                    i = t.dataWidth; return e || i }, height: function(t) { var e = t.height,
                    i = t.dataHeight; return e || i }, sizes: function(t) { var e = t.sizes,
                    i = t.dataSizes; return e || i }, isImg: function(t, e) { return pr(e) }, target: { get: function(t) { var e = t.target; return [this.$el].concat(Te(e, this.$el)) }, watch: function() { this.observe() } }, offsetTop: function(t) { var e = t.offsetTop; return wt(e, "height") }, offsetLeft: function(t) { var e = t.offsetLeft; return wt(e, "width") } }, connected: function() { if (!window.IntersectionObserver) { ze(this.$el, this.dataSrc, this.dataSrcset, this.sizes); return }
            qt[this.cacheKey] ? ze(this.$el, qt[this.cacheKey], this.dataSrcset, this.sizes) : this.isImg && this.width && this.height && ze(this.$el, Lo(this.width, this.height, this.sizes)), this.observer = new IntersectionObserver(this.load, { rootMargin: this.offsetTop + "px " + this.offsetLeft + "px" }), requestAnimationFrame(this.observe) }, disconnected: function() { this.observer && this.observer.disconnect() }, update: { read: function(t) { var e = this,
                    i = t.image; if (!this.observer || (!i && document.readyState === "complete" && this.load(this.observer.takeRecords()), this.isImg)) return !1;
                i && i.then(function(n) { return n && n.currentSrc !== "" && ze(e.$el, on(n)) }) }, write: function(t) { if (this.dataSrcset && window.devicePixelRatio !== 1) { var e = d(this.$el, "backgroundSize");
                    (e.match(/^(auto\s?)+$/) || x(e) === t.bgSize) && (t.bgSize = Vo(this.dataSrcset, this.sizes), d(this.$el, "backgroundSize", t.bgSize + "px")) } }, events: ["resize"] }, methods: { load: function(t) { var e = this;!t.some(function(i) { return Z(i.isIntersecting) || i.isIntersecting }) || (this._data.image = Wi(this.dataSrc, this.dataSrcset, this.sizes).then(function(i) { return ze(e.$el, on(i), i.srcset, i.sizes), qt[e.cacheKey] = on(i), i }, function(i) { return m(e.$el, new i.constructor(i.type, i)) }), this.observer.disconnect()) }, observe: function() { var t = this;
                this._connected && !this._data.image && this.target.forEach(function(e) { return t.observer.observe(e) }) } } };

    function ze(t, e, i, n) { if (pr(t)) { var r = function(o, a) { return a && a !== t[o] && (t[o] = a) };
            r("sizes", n), r("srcset", i), r("src", e) } else if (e) { var s = !b(t.style.backgroundImage, e);
            s && (d(t, "backgroundImage", "url(" + Ce(e) + ")"), m(t, Ie("load", !1))) } }

    function Lo(t, e, i) { var n; return i && (n = Ut.ratio({ width: t, height: e }, "width", wt(gr(i))), t = n.width, e = n.height), 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + e + '"></svg>' } var vr = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;

    function gr(t) { var e; for (vr.lastIndex = 0; e = vr.exec(t);)
            if (!e[1] || window.matchMedia(e[1]).matches) { e = jo(e[2]); break }
        return e || "100vw" } var Wo = /\d+(?:\w+|%)/g,
        Ro = /[+-]?(\d+)/g;

    function jo(t) { return vt(t, "calc") ? t.slice(5, -1).replace(Wo, function(e) { return wt(e) }).replace(/ /g, "").match(Ro).reduce(function(e, i) { return e + +i }, 0) : t } var qo = /\s+\d+w\s*(?:,|$)/g;

    function Vo(t, e) { var i = wt(gr(e)),
            n = (t.match(qo) || []).map(x).sort(function(r, s) { return r - s }); return n.filter(function(r) { return r >= i })[0] || n.pop() || "" }

    function pr(t) { return t.tagName === "IMG" }

    function on(t) { return t.currentSrc || t.src } var mr = "__test__",
        qt; try { qt = window.sessionStorage || {}, qt[mr] = 1, delete qt[mr] } catch { qt = {} } var mi = { props: { media: Boolean }, data: { media: !1 }, computed: { matchMedia: function() { var t = Yo(this.media); return !t || window.matchMedia(t).matches } } };

    function Yo(t) { if (H(t)) { if (t[0] === "@") { var e = "breakpoint-" + t.substr(1);
                t = x(Yi(e)) } else if (isNaN(t)) return t } return t && !isNaN(t) ? "(min-width: " + t + "px)" : !1 } var Go = { mixins: [rt, mi], props: { fill: String }, data: { fill: "", clsWrapper: "uk-leader-fill", clsHide: "uk-leader-hide", attrFill: "data-fill" }, computed: { fill: function(t) { var e = t.fill; return e || Yi("leader-fill-content") } }, connected: function() { var t;
                t = _n(this.$el, '<span class="' + this.clsWrapper + '">'), this.wrapper = t[0] }, disconnected: function() { ii(this.wrapper.childNodes) }, update: { read: function(t) { var e = t.changed,
                        i = t.width,
                        n = i; return i = Math.floor(this.$el.offsetWidth / 2), { width: i, fill: this.fill, changed: e || n !== i, hide: !this.matchMedia } }, write: function(t) { j(this.wrapper, this.clsHide, t.hide), t.changed && (t.changed = !1, _(this.wrapper, this.attrFill, new Array(t.width).join(t.fill))) }, events: ["resize"] } },
        st = [],
        an = { mixins: [rt, de, _t], props: { selPanel: String, selClose: String, escClose: Boolean, bgClose: Boolean, stack: Boolean }, data: { cls: "uk-open", escClose: !0, bgClose: !0, overlay: !0, stack: !1 }, computed: { panel: function(t, e) { var i = t.selPanel; return $(i, e) }, transitionElement: function() { return this.panel }, bgClose: function(t) { var e = t.bgClose; return e && this.panel } }, beforeDisconnect: function() { b(st, this) && this.toggleElement(this.$el, !1, !1) }, events: [{ name: "click", delegate: function() { return this.selClose }, handler: function(t) { t.preventDefault(), this.hide() } }, { name: "toggle", self: !0, handler: function(t, e) { t.defaultPrevented || (t.preventDefault(), this.isToggled() === b(st, this) && this.toggle()) } }, { name: "beforeshow", self: !0, handler: function(t) { if (b(st, this)) return !1;!this.stack && st.length ? (w.all(st.map(function(e) { return e.hide() })).then(this.show), t.preventDefault()) : st.push(this) } }, { name: "show", self: !0, handler: function() { var t = this,
                        e = document.documentElement;
                    Me(window) > e.clientWidth && this.overlay && d(document.body, "overflowY", "scroll"), this.stack && d(this.$el, "zIndex", x(d(this.$el, "zIndex")) + st.length), y(e, this.clsPage), this.bgClose && K(this.$el, "hide", A(document, dt, function(i) { var n = i.target;
                        be(st) !== t || t.overlay && !G(n, t.$el) || G(n, t.panel) || K(document, xt + " " + oe + " scroll", function(r) { var s = r.defaultPrevented,
                                o = r.type,
                                a = r.target;!s && o === xt && n === a && t.hide() }, !0) }), { self: !0 }), this.escClose && K(this.$el, "hide", A(document, "keydown", function(i) { i.keyCode === 27 && be(st) === t && t.hide() }), { self: !0 }) } }, { name: "shown", self: !0, handler: function() { Ge(this.$el) || _(this.$el, "tabindex", "-1"), $(":focus", this.$el) || this.$el.focus() } }, { name: "hidden", self: !0, handler: function() { var t = this;
                    b(st, this) && st.splice(st.indexOf(this), 1), st.length || d(document.body, "overflowY", ""), d(this.$el, "zIndex", ""), st.some(function(e) { return e.clsPage === t.clsPage }) || M(document.documentElement, this.clsPage) } }], methods: { toggle: function() { return this.isToggled() ? this.hide() : this.show() }, show: function() { var t = this; return this.container && D(this.$el) !== this.container ? (X(this.container, this.$el), new w(function(e) { return requestAnimationFrame(function() { return t.show().then(e) }) })) : this.toggleElement(this.$el, !0, wr(this)) }, hide: function() { return this.toggleElement(this.$el, !1, wr(this)) } } };

    function wr(t) { var e = t.transitionElement,
            i = t._toggle; return function(n, r) { return new w(function(s, o) { return K(n, "show hide", function() { n._reject && n._reject(), n._reject = o, i(n, r); var a = K(e, "transitionstart", function() { K(e, "transitionend transitioncancel", s, { self: !0 }), clearTimeout(u) }, { self: !0 }),
                        u = setTimeout(function() { a(), s() }, Hi(d(e, "transitionDuration"))) }) }).then(function() { return delete n._reject }) } } var Ko = { install: Xo, mixins: [an], data: { clsPage: "uk-modal-page", selPanel: ".uk-modal-dialog", selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full" }, events: [{ name: "show", self: !0, handler: function() { C(this.panel, "uk-margin-auto-vertical") ? y(this.$el, "uk-flex") : d(this.$el, "display", "block"), q(this.$el) } }, { name: "hidden", self: !0, handler: function() { d(this.$el, "display", ""), M(this.$el, "uk-flex") } }] };

    function Xo(t) { var e = t.modal;
        e.dialog = function(n, r) { var s = e('<div class="uk-modal"> <div class="uk-modal-dialog">' + n + "</div> </div>", r); return s.show(), A(s.$el, "hidden", function() { return w.resolve().then(function() { return s.$destroy(!0) }) }, { self: !0 }), s }, e.alert = function(n, r) { return i(function(s) { var o = s.labels; return '<div class="uk-modal-body">' + (H(n) ? n : Dt(n)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + o.ok + "</button> </div>" }, r, function(s) { return s.resolve() }) }, e.confirm = function(n, r) { return i(function(s) { var o = s.labels; return '<form> <div class="uk-modal-body">' + (H(n) ? n : Dt(n)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + o.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + o.ok + "</button> </div> </form>" }, r, function(s) { return s.reject() }) }, e.prompt = function(n, r, s) { return i(function(o) { var a = o.labels; return '<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (H(n) ? n : Dt(n)) + '</label> <input class="uk-input" value="' + (r || "") + '" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + a.cancel + '</button> <button class="uk-button uk-button-primary">' + a.ok + "</button> </div> </form>" }, s, function(o) { return o.resolve(null) }, function(o) { return $("input", o.$el).value }) }, e.labels = { ok: "Ok", cancel: "Cancel" };

        function i(n, r, s, o) { r = k({ bgClose: !1, escClose: !0, labels: e.labels }, r); var a = e.dialog(n(r), r),
                u = new Je,
                c = !1; return A(a.$el, "submit", "form", function(l) { l.preventDefault(), u.resolve(o && o(a)), c = !0, a.hide() }), A(a.$el, "hide", function() { return !c && s(u) }), u.promise.dialog = a, u.promise } } var Jo = { extends: Qn, data: { targets: "> .uk-parent", toggle: "> a", content: "> ul" } },
        br = ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",
        Zo = { mixins: [rt, de, sn], props: { dropdown: String, mode: "list", align: String, offset: Number, boundary: Boolean, boundaryAlign: Boolean, clsDrop: String, delayShow: Number, delayHide: Number, dropbar: Boolean, dropbarMode: String, dropbarAnchor: Boolean, duration: Number }, data: { dropdown: br, align: U ? "right" : "left", clsDrop: "uk-navbar-dropdown", mode: void 0, offset: void 0, delayShow: void 0, delayHide: void 0, boundaryAlign: void 0, flip: "x", boundary: !0, dropbar: !1, dropbarMode: "slide", dropbarAnchor: !1, duration: 200, forceHeight: !0, selMinHeight: br, container: !1 }, computed: { boundary: function(t, e) { var i = t.boundary,
                        n = t.boundaryAlign; return i === !0 || n ? e : i }, dropbarAnchor: function(t, e) { var i = t.dropbarAnchor; return mt(i, e) }, pos: function(t) { var e = t.align; return "bottom-" + e }, dropbar: { get: function(t) { var e = t.dropbar; return e ? (e = this._dropbar || mt(e, this.$el) || $("+ .uk-navbar-dropbar", this.$el), e || (this._dropbar = $("<div></div>"))) : null }, watch: function(t) { y(t, "uk-navbar-dropbar") }, immediate: !0 }, dropContainer: function(t, e) { return this.container || e }, dropdowns: { get: function(t, e) { var i = this,
                            n = t.clsDrop,
                            r = O("." + n, e); return this.dropContainer !== e && O("." + n, this.dropContainer).forEach(function(s) { var o = i.getDropdown(s);!b(r, s) && o && o.target && G(o.target, i.$el) && r.push(s) }), r }, watch: function(t) { var e = this;
                        this.$create("drop", t.filter(function(i) { return !e.getDropdown(i) }), k({}, this.$props, { boundary: this.boundary, pos: this.pos, offset: this.dropbar || this.offset })) }, immediate: !0 }, toggles: function(t, e) { var i = t.dropdown; return O(i, e) } }, disconnected: function() { this.dropbar && nt(this.dropbar), delete this._dropbar }, events: [{ name: "mouseover focusin", delegate: function() { return this.dropdown }, handler: function(t) { var e = t.current,
                        i = this.getActive();
                    i && b(i.mode, "hover") && i.target && !G(i.target, e) && !i.tracker.movesTo(i.$el) && i.hide(!1) } }, { name: "keydown", delegate: function() { return this.dropdown }, handler: function(t) { var e = t.current,
                        i = t.keyCode,
                        n = this.getActive();
                    i === Vt.DOWN && ee(e, "aria-expanded") && (t.preventDefault(), !n || n.target !== e ? (e.click(), K(this.dropContainer, "show", function(r) { var s = r.target; return xr(s) })) : xr(n.$el)), $r(t, this.toggles, n) } }, { name: "keydown", el: function() { return this.dropContainer }, delegate: function() { return "." + this.clsDrop }, handler: function(t) { var e = t.current,
                        i = t.keyCode; if (!!b(this.dropdowns, e)) { var n = this.getActive(),
                            r = O(Ye, e),
                            s = Pt(r, function(o) { return Y(o, ":focus") });
                        i === Vt.UP && (t.preventDefault(), s > 0 && r[s - 1].focus()), i === Vt.DOWN && (t.preventDefault(), s < r.length - 1 && r[s + 1].focus()), i === Vt.ESC && n && n.target && n.target.focus(), $r(t, this.toggles, n) } } }, { name: "mouseleave", el: function() { return this.dropbar }, filter: function() { return this.dropbar }, handler: function() { var t = this.getActive();
                    t && b(t.mode, "hover") && !this.dropdowns.some(function(e) { return Y(e, ":hover") }) && t.hide() } }, { name: "beforeshow", el: function() { return this.dropContainer }, filter: function() { return this.dropbar }, handler: function() { D(this.dropbar) || Ue(this.dropbarAnchor || this.$el, this.dropbar) } }, { name: "show", el: function() { return this.dropContainer }, filter: function() { return this.dropbar }, handler: function(t, e) { var i = e.$el,
                        n = e.dir;!C(i, this.clsDrop) || (this.dropbarMode === "slide" && y(this.dropbar, "uk-navbar-dropbar-slide"), this.clsDrop && y(i, this.clsDrop + "-dropbar"), n === "bottom" && this.transitionTo(i.offsetHeight + x(d(i, "marginTop")) + x(d(i, "marginBottom")), i)) } }, { name: "beforehide", el: function() { return this.dropContainer }, filter: function() { return this.dropbar }, handler: function(t, e) { var i = e.$el,
                        n = this.getActive();
                    Y(this.dropbar, ":hover") && n && n.$el === i && t.preventDefault() } }, { name: "hide", el: function() { return this.dropContainer }, filter: function() { return this.dropbar }, handler: function(t, e) { var i = e.$el; if (!!C(i, this.clsDrop)) { var n = this.getActive();
                        (!n || n && n.$el === i) && this.transitionTo(0) } } }], methods: { getActive: function() { return Q && G(Q.target, this.$el) && Q }, transitionTo: function(t, e) { var i = this,
                        n = this,
                        r = n.dropbar,
                        s = W(r) ? q(r) : 0; return e = s < t && e, d(e, "clip", "rect(0," + e.offsetWidth + "px," + s + "px,0)"), q(r, s), P.cancel([e, r]), w.all([P.start(r, { height: t }, this.duration), P.start(e, { clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)" }, this.duration)]).catch(N).then(function() { d(e, { clip: "" }), i.$update(r) }) }, getDropdown: function(t) { return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown") } } };

    function $r(t, e, i) { var n = t.current,
            r = t.keyCode,
            s = i && i.target || n,
            o = e.indexOf(s);
        r === Vt.LEFT && o > 0 && (i && i.hide(!1), e[o - 1].focus()), r === Vt.RIGHT && o < e.length - 1 && (i && i.hide(!1), e[o + 1].focus()), r === Vt.TAB && (s.focus(), i && i.hide(!1)) }

    function xr(t) { if (!$(":focus", t)) { var e = $(Ye, t);
            e && e.focus() } } var Vt = { TAB: 9, ESC: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 },
        Qo = { mixins: [an], args: "mode", props: { mode: String, flip: Boolean, overlay: Boolean }, data: { mode: "slide", flip: !1, overlay: !1, clsPage: "uk-offcanvas-page", clsContainer: "uk-offcanvas-container", selPanel: ".uk-offcanvas-bar", clsFlip: "uk-offcanvas-flip", clsContainerAnimation: "uk-offcanvas-container-animation", clsSidebarAnimation: "uk-offcanvas-bar-animation", clsMode: "uk-offcanvas", clsOverlay: "uk-offcanvas-overlay", selClose: ".uk-offcanvas-close", container: !1 }, computed: { clsFlip: function(t) { var e = t.flip,
                        i = t.clsFlip; return e ? i : "" }, clsOverlay: function(t) { var e = t.overlay,
                        i = t.clsOverlay; return e ? i : "" }, clsMode: function(t) { var e = t.mode,
                        i = t.clsMode; return i + "-" + e }, clsSidebarAnimation: function(t) { var e = t.mode,
                        i = t.clsSidebarAnimation; return e === "none" || e === "reveal" ? "" : i }, clsContainerAnimation: function(t) { var e = t.mode,
                        i = t.clsContainerAnimation; return e !== "push" && e !== "reveal" ? "" : i }, transitionElement: function(t) { var e = t.mode; return e === "reveal" ? D(this.panel) : this.panel } }, update: { read: function() { this.isToggled() && !W(this.$el) && this.hide() }, events: ["resize"] }, events: [{ name: "click", delegate: function() { return 'a[href^="#"]' }, handler: function(t) { var e = t.current.hash,
                        i = t.defaultPrevented;!i && e && $(e, document.body) && this.hide() } }, { name: "touchstart", passive: !0, el: function() { return this.panel }, handler: function(t) { var e = t.targetTouches;
                    e.length === 1 && (this.clientY = e[0].clientY) } }, { name: "touchmove", self: !0, passive: !1, filter: function() { return this.overlay }, handler: function(t) { t.cancelable && t.preventDefault() } }, { name: "touchmove", passive: !1, el: function() { return this.panel }, handler: function(t) { if (t.targetTouches.length === 1) { var e = t.targetTouches[0].clientY - this.clientY,
                            i = this.panel,
                            n = i.scrollTop,
                            r = i.scrollHeight,
                            s = i.clientHeight;
                        (s >= r || n === 0 && e > 0 || r - n <= s && e < 0) && t.cancelable && t.preventDefault() } } }, { name: "show", self: !0, handler: function() { this.mode === "reveal" && !C(D(this.panel), this.clsMode) && (ei(this.panel, "<div>"), y(D(this.panel), this.clsMode)), d(document.documentElement, "overflowY", this.overlay ? "hidden" : ""), y(document.body, this.clsContainer, this.clsFlip), d(document.body, "touch-action", "pan-y pinch-zoom"), d(this.$el, "display", "block"), y(this.$el, this.clsOverlay), y(this.panel, this.clsSidebarAnimation, this.mode !== "reveal" ? this.clsMode : ""), q(document.body), y(document.body, this.clsContainerAnimation), this.clsContainerAnimation && Uo() } }, { name: "hide", self: !0, handler: function() { M(document.body, this.clsContainerAnimation), d(document.body, "touch-action", "") } }, { name: "hidden", self: !0, handler: function() { this.clsContainerAnimation && ta(), this.mode === "reveal" && ii(this.panel), M(this.panel, this.clsSidebarAnimation, this.clsMode), M(this.$el, this.clsOverlay), d(this.$el, "display", ""), M(document.body, this.clsContainer, this.clsFlip), d(document.documentElement, "overflowY", "") } }, { name: "swipeLeft swipeRight", handler: function(t) { this.isToggled() && gt(t.type, "Left") ^ this.flip && this.hide() } }] };

    function Uo() { yr().content += ",user-scalable=0" }

    function ta() { var t = yr();
        t.content = t.content.replace(/,user-scalable=0$/, "") }

    function yr() { return $('meta[name="viewport"]', document.head) || X(document.head, '<meta name="viewport">') } var ea = { mixins: [rt], props: { selContainer: String, selContent: String, minHeight: Number }, data: { selContainer: ".uk-modal", selContent: ".uk-modal-dialog", minHeight: 150 }, computed: { container: function(t, e) { var i = t.selContainer; return ot(e, i) }, content: function(t, e) { var i = t.selContent; return ot(e, i) } }, connected: function() { d(this.$el, "minHeight", this.minHeight) }, update: { read: function() { return !this.content || !this.container || !W(this.$el) ? !1 : { current: x(d(this.$el, "maxHeight")), max: Math.max(this.minHeight, q(this.container) - (I(this.content).height - q(this.$el))) } }, write: function(t) { var e = t.current,
                        i = t.max;
                    d(this.$el, "maxHeight", i), Math.round(e) !== Math.round(i) && m(this.$el, "resize") }, events: ["resize"] } },
        ia = { props: ["width", "height"], connected: function() { y(this.$el, "uk-responsive-width") }, update: { read: function() { return W(this.$el) && this.width && this.height ? { width: Me(D(this.$el)), height: this.height } : !1 }, write: function(t) { q(this.$el, Ut.contain({ height: this.height, width: this.width }, t).height) }, events: ["resize"] } },
        na = { props: { offset: Number }, data: { offset: 0 }, methods: { scrollTo: function(t) { var e = this;
                    t = t && $(t) || document.body, m(this.$el, "beforescroll", [this, t]) && en(t, { offset: this.offset }).then(function() { return m(e.$el, "scrolled", [e, t]) }) } }, events: { click: function(t) { t.defaultPrevented || (t.preventDefault(), this.scrollTo("#" + Ce(decodeURIComponent((this.$el.hash || "").substr(1))))) } } },
        Bt = "_ukScrollspy",
        ra = { args: "cls", props: { cls: String, target: String, hidden: Boolean, offsetTop: Number, offsetLeft: Number, repeat: Boolean, delay: Number }, data: function() { return { cls: "", target: !1, hidden: !0, offsetTop: 0, offsetLeft: 0, repeat: !1, delay: 0, inViewClass: "uk-scrollspy-inview" } }, computed: { elements: { get: function(t, e) { var i = t.target; return i ? O(i, e) : [e] }, watch: function(t) { this.hidden && d(ke(t, ":not(." + this.inViewClass + ")"), "visibility", "hidden") }, immediate: !0 } }, disconnected: function() { var t = this;
                this.elements.forEach(function(e) { M(e, t.inViewClass, e[Bt] ? e[Bt].cls : ""), delete e[Bt] }) }, update: [{ read: function(t) { var e = this; if (!t.update) return w.resolve().then(function() { e.$emit(), t.update = !0 }), !1;
                    this.elements.forEach(function(i) { i[Bt] || (i[Bt] = { cls: ft(i, "uk-scrollspy-class") || e.cls }), i[Bt].show = fe(i, e.offsetTop, e.offsetLeft) }) }, write: function(t) { var e = this;
                    this.elements.forEach(function(i) { var n = i[Bt];
                        n.show && !n.inview && !n.queued ? (n.queued = !0, t.promise = (t.promise || w.resolve()).then(function() { return new w(function(r) { return setTimeout(r, e.delay) }) }).then(function() { e.toggle(i, !0), setTimeout(function() { n.queued = !1, e.$emit() }, 300) })) : !n.show && n.inview && !n.queued && e.repeat && e.toggle(i, !1) }) }, events: ["scroll", "resize"] }], methods: { toggle: function(t, e) { var i = t[Bt];
                    i.off && i.off(), d(t, "visibility", !e && this.hidden ? "hidden" : ""), j(t, this.inViewClass, e), j(t, i.cls), /\buk-animation-/.test(i.cls) && (i.off = K(t, "animationcancel animationend", function() { return ni(t, "uk-animation-[\\w-]+") })), m(t, e ? "inview" : "outview"), i.inview = e, this.$update(t) } } },
        sa = { props: { cls: String, closest: String, scroll: Boolean, overflow: Boolean, offset: Number }, data: { cls: "uk-active", closest: !1, scroll: !1, overflow: !0, offset: 0 }, computed: { links: { get: function(t, e) { return O('a[href^="#"]', e).filter(function(i) { return i.hash }) }, watch: function(t) { this.scroll && this.$create("scroll", t, { offset: this.offset || 0 }) }, immediate: !0 }, targets: function() { return O(this.links.map(function(t) { return Ce(t.hash).substr(1) }).join(",")) }, elements: function(t) { var e = t.closest; return ot(this.links, e || "*") } }, update: [{ read: function() { var t = this,
                        e = this.targets,
                        i = e.length; if (!i || !W(this.$el)) return !1; var n = jt(this.targets, /auto|scroll/, !0),
                        r = n[0],
                        s = r.scrollTop,
                        o = r.scrollHeight,
                        a = o - He(r),
                        u = !1; return s === a ? u = i - 1 : (this.targets.every(function(c, l) { if (B(c).top - B(le(r)).top - t.offset <= 0) return u = l, !0 }), u === !1 && this.overflow && (u = 0)), { active: u } }, write: function(t) { var e = t.active,
                        i = e !== !1 && !C(this.elements[e], this.cls);
                    this.links.forEach(function(n) { return n.blur() }), M(this.elements, this.cls), y(this.elements[e], this.cls), i && m(this.$el, "active", [e, this.elements[e]]) }, events: ["scroll", "resize"] }] },
        oa = { mixins: [rt, mi], props: { top: null, bottom: Boolean, offset: String, animation: String, clsActive: String, clsInactive: String, clsFixed: String, clsBelow: String, selTarget: String, widthElement: Boolean, showOnUp: Boolean, targetOffset: Number }, data: { top: 0, bottom: !1, offset: 0, animation: "", clsActive: "uk-active", clsInactive: "", clsFixed: "uk-sticky-fixed", clsBelow: "uk-sticky-below", selTarget: "", widthElement: !1, showOnUp: !1, targetOffset: !1 }, computed: { offset: function(t) { var e = t.offset; return wt(e) }, selTarget: function(t, e) { var i = t.selTarget; return i && $(i, e) || e }, widthElement: function(t, e) { var i = t.widthElement; return mt(i, e) || this.placeholder }, isActive: { get: function() { return C(this.selTarget, this.clsActive) }, set: function(t) { t && !this.isActive ? (ji(this.selTarget, this.clsInactive, this.clsActive), m(this.$el, "active")) : !t && !C(this.selTarget, this.clsInactive) && (ji(this.selTarget, this.clsActive, this.clsInactive), m(this.$el, "inactive")) } } }, connected: function() { this.placeholder = $("+ .uk-sticky-placeholder", this.$el) || $('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.isActive = !1 }, disconnected: function() { this.isFixed && (this.hide(), M(this.selTarget, this.clsInactive)), nt(this.placeholder), this.placeholder = null, this.widthElement = null }, events: [{ name: "load hashchange popstate", el: function() { return window }, handler: function() { var t = this; if (!!(this.targetOffset !== !1 && location.hash && window.pageYOffset > 0)) { var e = $(location.hash);
                        e && F.read(function() { var i = B(e),
                                n = i.top,
                                r = B(t.$el).top,
                                s = t.$el.offsetHeight;
                            t.isFixed && r + s >= n && r <= n + e.offsetHeight && ci(window, n - s - (Et(t.targetOffset) ? t.targetOffset : 0) - t.offset) }) } } }], update: [{ read: function(t, e) { var i = t.height; if (this.inactive = !this.matchMedia || !W(this.$el), this.inactive) return !1; if (this.isActive && e.has("resize") && (this.hide(), i = this.$el.offsetHeight, this.show()), i = this.isActive ? i : this.$el.offsetHeight, i + this.offset > q(window)) return this.inactive = !0, !1; var n = this.isFixed ? this.placeholder : this.$el;
                    this.topOffset = B(n).top, this.bottomOffset = this.topOffset + i, this.offsetParentTop = B(n.offsetParent).top; var r = kr("bottom", this); return this.top = Math.max(x(kr("top", this)), this.topOffset) - this.offset, this.bottom = r && r - this.$el.offsetHeight, this.width = I(W(this.widthElement) ? this.widthElement : this.$el).width, { height: i, top: Ne(this.placeholder)[0], margins: d(this.$el, ["marginTop", "marginBottom", "marginLeft", "marginRight"]) } }, write: function(t) { var e = t.height,
                        i = t.margins,
                        n = this,
                        r = n.placeholder;
                    d(r, k({ height: e }, i)), G(r, document) || (Ue(this.$el, r), r.hidden = !0), this.isActive = !!this.isActive }, events: ["resize"] }, { read: function(t) { var e = t.scroll; return e === void 0 && (e = 0), this.scroll = window.pageYOffset, { dir: e <= this.scroll ? "down" : "up", scroll: this.scroll } }, write: function(t, e) { var i = this,
                        n = Date.now(),
                        r = e.has("scroll"),
                        s = t.initTimestamp;
                    s === void 0 && (s = 0); var o = t.dir,
                        a = t.lastDir,
                        u = t.lastScroll,
                        c = t.scroll,
                        l = t.top; if (t.lastScroll = c, !(c < 0 || c === u && r || this.showOnUp && !r && !this.isFixed) && ((n - s > 300 || o !== a) && (t.initScroll = c, t.initTimestamp = n), t.lastDir = o, !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - c) <= 30 && Math.abs(u - c) <= 10)))
                        if (this.inactive || c < this.top || this.showOnUp && (c <= this.top || o === "down" && r || o === "up" && !this.isFixed && c <= this.bottomOffset)) { if (!this.isFixed) { yt.inProgress(this.$el) && l > c && (yt.cancel(this.$el), this.hide()); return }
                            this.isFixed = !1, this.animation && c > this.topOffset ? (yt.cancel(this.$el), yt.out(this.$el, this.animation).then(function() { return i.hide() }, N)) : this.hide() } else this.isFixed ? this.update() : this.animation ? (yt.cancel(this.$el), this.show(), yt.in(this.$el, this.animation).catch(N)) : this.show() }, events: ["resize", "scroll"] }], methods: { show: function() { this.isFixed = !0, this.update(), this.placeholder.hidden = !1 }, hide: function() { this.isActive = !1, M(this.$el, this.clsFixed, this.clsBelow), d(this.$el, { position: "", top: "", width: "" }), this.placeholder.hidden = !0 }, update: function() { var t = this.top !== 0 || this.scroll > this.top,
                        e = Math.max(0, this.offset),
                        i = "fixed";
                    Et(this.bottom) && this.scroll > this.bottom - this.offset && (e = this.bottom - this.offsetParentTop, i = "absolute"), d(this.$el, { position: i, top: e + "px", width: this.width }), this.isActive = t, j(this.$el, this.clsBelow, this.scroll > this.bottomOffset), y(this.$el, this.clsFixed) } } };

    function kr(t, e) { var i = e.$props,
            n = e.$el,
            r = e[t + "Offset"],
            s = i[t]; if (!!s) return H(s) && s.match(/^-?\d/) ? r + wt(s) : B(s === !0 ? D(n) : mt(s, n)).bottom } var Sr = { mixins: [_t], args: "connect", props: { connect: String, toggle: String, itemNav: String, active: Number, swiping: Boolean }, data: { connect: "~.uk-switcher", toggle: "> * > :first-child", itemNav: !1, active: 0, swiping: !0, cls: "uk-active", attrItem: "uk-switcher-item" }, computed: { connects: { get: function(t, e) { var i = t.connect; return Te(i, e) }, watch: function(t) { var e = this;
                        this.swiping && d(t, "touch-action", "pan-y pinch-zoom"); var i = this.index();
                        this.connects.forEach(function(n) { return R(n).forEach(function(r, s) { return j(r, e.cls, s === i) }) }) }, immediate: !0 }, toggles: { get: function(t, e) { var i = t.toggle; return O(i, e).filter(function(n) { return !Y(n, ".uk-disabled *, .uk-disabled, [disabled]") }) }, watch: function(t) { var e = this.index();
                        this.show(~e ? e : t[this.active] || t[0]) }, immediate: !0 }, children: function() { var t = this; return R(this.$el).filter(function(e) { return t.toggles.some(function(i) { return G(i, e) }) }) } }, events: [{ name: "click", delegate: function() { return this.toggle }, handler: function(t) { t.preventDefault(), this.show(t.current) } }, { name: "click", el: function() { return this.connects.concat(this.itemNav ? Te(this.itemNav, this.$el) : []) }, delegate: function() { return "[" + this.attrItem + "],[data-" + this.attrItem + "]" }, handler: function(t) { t.preventDefault(), this.show(ft(t.current, this.attrItem)) } }, { name: "swipeRight swipeLeft", filter: function() { return this.swiping }, el: function() { return this.connects }, handler: function(t) { var e = t.type;
                    this.show(gt(e, "Left") ? "next" : "previous") } }], methods: { index: function() { var t = this; return Pt(this.children, function(e) { return C(e, t.cls) }) }, show: function(t) { var e = this,
                        i = this.index(),
                        n = te(this.children[te(t, this.toggles, i)], R(this.$el));
                    i !== n && (this.children.forEach(function(r, s) { j(r, e.cls, n === s), _(e.toggles[s], "aria-expanded", n === s) }), this.connects.forEach(function(r) { var s = r.children; return e.toggleElement(T(s).filter(function(o) { return C(o, e.cls) }), !1, i >= 0).then(function() { return e.toggleElement(s[n], !0, i >= 0) }) })) } } },
        aa = { mixins: [rt], extends: Sr, props: { media: Boolean }, data: { media: 960, attrItem: "uk-tab-item" }, connected: function() { var t = C(this.$el, "uk-tab-left") ? "uk-tab-left" : C(this.$el, "uk-tab-right") ? "uk-tab-right" : !1;
                t && this.$create("toggle", this.$el, { cls: t, mode: "media", media: this.media }) } },
        ua = 32,
        ha = { mixins: [mi, _t], args: "target", props: { href: String, target: null, mode: "list", queued: Boolean }, data: { href: !1, target: !1, mode: "click", queued: !0 }, connected: function() {!b(this.mode, "media") && !Ge(this.$el) && _(this.$el, "tabindex", "0") }, computed: { target: { get: function(t, e) { var i = t.href,
                            n = t.target; return n = Te(n || i, e), n.length && n || [e] }, watch: function() { this.updateAria() }, immediate: !0 } }, events: [{ name: dt, filter: function() { return b(this.mode, "hover") }, handler: function(t) { var e = this;!Ct(t) || this._showState || (m(this.$el, "focus"), K(document, dt, function() { return m(e.$el, "blur") }, !0, function(i) { return !G(i.target, e.$el) }), b(this.mode, "click") && (this._preventClick = !0)) } }, { name: Lt + " " + se + " focus blur", filter: function() { return b(this.mode, "hover") }, handler: function(t) { if (!Ct(t)) { var e = b([Lt, "focus"], t.type),
                            i = _(this.$el, "aria-expanded"); if (!(!e && (t.type === se && Y(this.$el, ":focus") || t.type === "blur" && Y(this.$el, ":hover")))) { if (this._showState && e === (i !== this._showState)) { e || (this._showState = null); return }
                            this._showState = e ? i : null, this.toggle("toggle" + (e ? "show" : "hide")) } } } }, { name: "keydown", filter: function() { return b(this.mode, "click") && this.$el.tagName !== "INPUT" }, handler: function(t) { t.keyCode === ua && (t.preventDefault(), this.$el.click()) } }, { name: "click", filter: function() { return b(this.mode, "click") }, handler: function(t) { if (this._preventClick) return this._preventClick = null; var e;
                    (ot(t.target, 'a[href="#"], a[href=""]') || (e = ot(t.target, "a[href]")) && (_(this.$el, "aria-expanded") !== "true" || e.hash && Y(this.target, e.hash))) && t.preventDefault(), this.toggle() } }, { name: "toggled", self: !0, el: function() { return this.target }, handler: function(t, e) { t.target === this.target[0] && this.updateAria(e) } }], update: { read: function() { return b(this.mode, "media") && this.media ? { match: this.matchMedia } : !1 }, write: function(t) { var e = t.match,
                        i = this.isToggled(this.target);
                    (e ? !i : i) && this.toggle() }, events: ["resize"] }, methods: { toggle: function(t) { var e = this; if (!!m(this.target, t || "toggle", [this])) { if (!this.queued) return this.toggleElement(this.target); var i = this.target.filter(function(r) { return C(r, e.clsLeave) }); if (i.length) { this.target.forEach(function(r) { var s = b(i, r);
                                e.toggleElement(r, s, s) }); return } var n = this.target.filter(this.isToggled);
                        this.toggleElement(n, !1).then(function() { return e.toggleElement(e.target.filter(function(r) { return !b(n, r) }), !0) }) } }, updateAria: function(t) { b(this.mode, "media") || _(this.$el, "aria-expanded", we(t) ? t : this.isToggled(this.target)) } } },
        ca = Object.freeze({ __proto__: null, Accordion: Qn, Alert: Zs, Cover: Qs, Drop: er, Dropdown: er, FormCustom: eo, Gif: io, Grid: ro, HeightMatch: uo, HeightViewport: co, Icon: lr, Img: Fo, Leader: Go, Margin: ir, Modal: Ko, Nav: Jo, Navbar: Zo, Offcanvas: Qo, OverflowAuto: ea, Responsive: ia, Scroll: na, Scrollspy: ra, ScrollspyNav: sa, Sticky: oa, Svg: or, Switcher: Sr, Tab: aa, Toggle: ha, Video: Un, Close: Do, Spinner: Ho, SlidenavNext: dr, SlidenavPrevious: dr, SearchIcon: Mo, Marker: kt, NavbarToggleIcon: kt, OverlayIcon: kt, PaginationNext: kt, PaginationPrevious: kt, Totop: kt });
    it(ca, function(t, e) { return et.component(e, t) }), et.use(Gs), Xs(et); var fa = { mixins: [rt], props: { date: String, clsWrapper: String }, data: { date: "", clsWrapper: ".uk-countdown-%unit%" }, computed: { date: function(t) { var e = t.date; return Date.parse(e) }, days: function(t, e) { var i = t.clsWrapper; return $(i.replace("%unit%", "days"), e) }, hours: function(t, e) { var i = t.clsWrapper; return $(i.replace("%unit%", "hours"), e) }, minutes: function(t, e) { var i = t.clsWrapper; return $(i.replace("%unit%", "minutes"), e) }, seconds: function(t, e) { var i = t.clsWrapper; return $(i.replace("%unit%", "seconds"), e) }, units: function() { var t = this; return ["days", "hours", "minutes", "seconds"].filter(function(e) { return t[e] }) } }, connected: function() { this.start() }, disconnected: function() { var t = this;
            this.stop(), this.units.forEach(function(e) { return Ri(t[e]) }) }, events: [{ name: "visibilitychange", el: function() { return document }, handler: function() { document.hidden ? this.stop() : this.start() } }], update: { write: function() { var t = this,
                    e = la(this.date);
                e.total <= 0 && (this.stop(), e.days = e.hours = e.minutes = e.seconds = 0), this.units.forEach(function(i) { var n = String(Math.floor(e[i]));
                    n = n.length < 2 ? "0" + n : n; var r = t[i];
                    r.textContent !== n && (n = n.split(""), n.length !== r.children.length && Dt(r, n.map(function() { return "<span></span>" }).join("")), n.forEach(function(s, o) { return r.children[o].textContent = s })) }) } }, methods: { start: function() { this.stop(), this.date && this.units.length && (this.$update(), this.timer = setInterval(this.$update, 1e3)) }, stop: function() { this.timer && (clearInterval(this.timer), this.timer = null) } } };

    function la(t) { var e = t - Date.now(); return { total: e, seconds: e / 1e3 % 60, minutes: e / 1e3 / 60 % 60, hours: e / 1e3 / 60 / 60 % 24, days: e / 1e3 / 60 / 60 / 24 } } var un = "uk-transition-leave",
        hn = "uk-transition-enter";

    function Tr(t, e, i, n) { n === void 0 && (n = 0); var r = wi(e, !0),
            s = { opacity: 1 },
            o = { opacity: 0 },
            a = function(l) { return function() { return r === wi(e) ? l() : w.reject() } },
            u = a(function() { return y(e, un), w.all(Cr(e).map(function(l, h) { return new w(function(f) { return setTimeout(function() { return P.start(l, o, i / 2, "ease").then(f) }, h * n) }) })).then(function() { return M(e, un) }) }),
            c = a(function() { var l = q(e); return y(e, hn), t(), d(R(e), { opacity: 0 }), new w(function(h) { return requestAnimationFrame(function() { var f = R(e),
                            v = q(e);
                        d(e, "alignContent", "flex-start"), q(e, l); var p = Cr(e);
                        d(f, o); var g = p.map(function(S, E) { return new w(function(z) { return setTimeout(function() { return P.start(S, s, i / 2, "ease").then(z) }, E * n) }) });
                        l !== v && g.push(P.start(e, { height: v }, i / 2 + p.length * n, "ease")), w.all(g).then(function() { M(e, hn), r === wi(e) && (d(e, { height: "", alignContent: "" }), d(f, { opacity: "" }), delete e.dataset.transition), h() }) }) }) }); return C(e, un) ? Er(e).then(c) : C(e, hn) ? Er(e).then(u).then(c) : u().then(c) }

    function wi(t, e) { return e && (t.dataset.transition = 1 + wi(t)), Mt(t.dataset.transition) || 0 }

    function Er(t) { return w.all(R(t).filter(P.inProgress).map(function(e) { return new w(function(i) { return K(e, "transitionend transitioncanceled", i) }) })) }

    function Cr(t) { return rn(R(t)).reduce(function(e, i) { return e.concat($e(i.filter(function(n) { return fe(n) }), "offsetLeft")) }, []) }

    function da(t, e, i) { return new w(function(n) { return requestAnimationFrame(function() { var r = R(e),
                    s = r.map(function(a) { return Ir(a, !0) }),
                    o = d(e, ["height", "padding"]);
                P.cancel(e), r.forEach(P.cancel), _r(e), t(), r = r.concat(R(e).filter(function(a) { return !b(r, a) })), w.resolve().then(function() { F.flush(); var a = d(e, ["height", "padding"]),
                        u = va(e, r, s),
                        c = u[0],
                        l = u[1];
                    r.forEach(function(h, f) { return l[f] && d(h, l[f]) }), d(e, k({ display: "block" }, o)), requestAnimationFrame(function() { var h = r.map(function(f, v) { return D(f) === e && P.start(f, c[v], i, "ease") }).concat(P.start(e, a, i, "ease"));
                        w.all(h).then(function() { r.forEach(function(f, v) { return D(f) === e && d(f, "display", c[v].opacity === 0 ? "none" : "") }), _r(e) }, N).then(n) }) }) }) }) }

    function Ir(t, e) { var i = d(t, "zIndex"); return W(t) ? k({ display: "", opacity: e ? d(t, "opacity") : "0", pointerEvents: "none", position: "absolute", zIndex: i === "auto" ? ae(t) : i }, Ar(t)) : !1 }

    function va(t, e, i) { var n = e.map(function(s, o) { return D(s) && o in i ? i[o] ? W(s) ? Ar(s) : { opacity: 0 } : { opacity: W(s) ? 1 : 0 } : !1 }),
            r = n.map(function(s, o) { var a = D(e[o]) === t && (i[o] || Ir(e[o])); if (!a) return !1; if (!s) delete a.opacity;
                else if (!("opacity" in s)) { var u = a.opacity;
                    u % 1 ? s.opacity = 1 : delete a.opacity } return a }); return [n, r] }

    function _r(t) { d(t.children, { height: "", left: "", opacity: "", pointerEvents: "", position: "", top: "", marginTop: "", marginLeft: "", transform: "", width: "", zIndex: "" }), d(t, { height: "", display: "", padding: "" }) }

    function Ar(t) { var e = B(t),
            i = e.height,
            n = e.width,
            r = oi(t),
            s = r.top,
            o = r.left,
            a = d(t, ["marginTop", "marginLeft"]),
            u = a.marginLeft,
            c = a.marginTop; return { top: s, left: o, height: i, width: n, marginLeft: u, marginTop: c, transform: "" } } var Pr = { props: { duration: Number, animation: Boolean }, data: { duration: 150, animation: "slide" }, methods: { animate: function(t, e) { var i = this;
                    e === void 0 && (e = this.$el); var n = this.animation,
                        r = n === "fade" ? Tr : n === "delayed-fade" ? function() { for (var s = [], o = arguments.length; o--;) s[o] = arguments[o]; return Tr.apply(void 0, s.concat([40])) } : n ? da : function() { return t(), w.resolve() }; return r(t, e, this.duration).then(function() { return i.$update(e, "resize") }, N) } } },
        ga = { mixins: [Pr], args: "target", props: { target: Boolean, selActive: Boolean }, data: { target: null, selActive: !1, attrItem: "uk-filter-control", cls: "uk-active", duration: 250 }, computed: { toggles: { get: function(t, e) { var i = t.attrItem; return O("[" + i + "],[data-" + i + "]", e) }, watch: function() { var t = this; if (this.updateState(), this.selActive !== !1) { var e = O(this.selActive, this.$el);
                            this.toggles.forEach(function(i) { return j(i, t.cls, b(e, i)) }) } }, immediate: !0 }, children: { get: function(t, e) { var i = t.target; return O(i + " > *", e) }, watch: function(t, e) { e && !ba(t, e) && this.updateState() }, immediate: !0 } }, events: [{ name: "click", delegate: function() { return "[" + this.attrItem + "],[data-" + this.attrItem + "]" }, handler: function(t) { t.preventDefault(), this.apply(t.current) } }], methods: { apply: function(t) { var e = this.getState(),
                        i = Mr(t, this.attrItem, this.getState());
                    pa(e, i) || this.setState(i) }, getState: function() { var t = this; return this.toggles.filter(function(e) { return C(e, t.cls) }).reduce(function(e, i) { return Mr(i, t.attrItem, e) }, { filter: { "": "" }, sort: [] }) }, setState: function(t, e) { var i = this;
                    e === void 0 && (e = !0), t = k({ filter: { "": "" }, sort: [] }, t), m(this.$el, "beforeFilter", [this, t]), this.toggles.forEach(function(n) { return j(n, i.cls, !!wa(n, i.attrItem, t)) }), w.all(O(this.target, this.$el).map(function(n) { var r = function() { ma(t, n, R(n)), i.$update(i.$el) }; return e ? i.animate(r, n) : r() })).then(function() { return m(i.$el, "afterFilter", [i]) }) }, updateState: function() { var t = this;
                    F.write(function() { return t.setState(t.getState(), !1) }) } } };

    function Nr(t, e) { return ai(ft(t, e), ["filter"]) }

    function pa(t, e) { return ["filter", "sort"].every(function(i) { return qe(t[i], e[i]) }) }

    function ma(t, e, i) { var n = $a(t);
        i.forEach(function(u) { return d(u, "display", n && !Y(u, n) ? "none" : "") }); var r = t.sort,
            s = r[0],
            o = r[1]; if (s) { var a = xa(i, s, o);
            qe(a, i) || X(e, a) } }

    function Mr(t, e, i) { var n = Nr(t, e),
            r = n.filter,
            s = n.group,
            o = n.sort,
            a = n.order; return a === void 0 && (a = "asc"), (r || Z(o)) && (s ? r ? (delete i.filter[""], i.filter[s] = r) : (delete i.filter[s], (Qt(i.filter) || "" in i.filter) && (i.filter = { "": r || "" })) : i.filter = { "": r || "" }), Z(o) || (i.sort = [o, a]), i }

    function wa(t, e, i) { var n = i.filter;
        n === void 0 && (n = { "": "" }); var r = i.sort,
            s = r[0],
            o = r[1],
            a = Nr(t, e),
            u = a.filter;
        u === void 0 && (u = ""); var c = a.group;
        c === void 0 && (c = ""); var l = a.sort,
            h = a.order; return h === void 0 && (h = "asc"), Z(l) ? c in n && u === n[c] || !u && c && !(c in n) && !n[""] : s === l && o === h }

    function ba(t, e) { return t.length === e.length && t.every(function(i) { return ~e.indexOf(i) }) }

    function $a(t) { var e = t.filter,
            i = ""; return it(e, function(n) { return i += n || "" }), i }

    function xa(t, e, i) { return k([], t).sort(function(n, r) { return ft(n, e).localeCompare(ft(r, e), void 0, { numeric: !0 }) * (i === "asc" || -1) }) } var cn = { slide: { show: function(t) { return [{ transform: V(t * -100) }, { transform: V() }] }, percent: function(t) { return Oe(t) }, translate: function(t, e) { return [{ transform: V(e * -100 * t) }, { transform: V(e * 100 * (1 - t)) }] } } };

    function Oe(t) { return Math.abs(d(t, "transform").split(",")[4] / t.offsetWidth) || 0 }

    function V(t, e) { return t === void 0 && (t = 0), e === void 0 && (e = "%"), t += t ? e : "", xe ? "translateX(" + t + ")" : "translate3d(" + t + ", 0, 0)" }

    function ve(t) { return "scale3d(" + t + ", " + t + ", 1)" } var Dr = k({}, cn, { fade: { show: function() { return [{ opacity: 0 }, { opacity: 1 }] }, percent: function(t) { return 1 - d(t, "opacity") }, translate: function(t) { return [{ opacity: 1 - t }, { opacity: t }] } }, scale: { show: function() { return [{ opacity: 0, transform: ve(1 - .2) }, { opacity: 1, transform: ve(1) }] }, percent: function(t) { return 1 - d(t, "opacity") }, translate: function(t) { return [{ opacity: 1 - t, transform: ve(1 - .2 * t) }, { opacity: t, transform: ve(1 - .2 + .2 * t) }] } } });

    function ya(t, e, i, n) { var r = n.animation,
            s = n.easing,
            o = r.percent,
            a = r.translate,
            u = r.show;
        u === void 0 && (u = N); var c = u(i),
            l = new Je; return { dir: i, show: function(h, f, v) { var p = this;
                f === void 0 && (f = 0); var g = v ? "linear" : s; return h -= Math.round(h * $t(f, -1, 1)), this.translate(f), bi(e, "itemin", { percent: f, duration: h, timing: g, dir: i }), bi(t, "itemout", { percent: 1 - f, duration: h, timing: g, dir: i }), w.all([P.start(e, c[1], h, g), P.start(t, c[0], h, g)]).then(function() { p.reset(), l.resolve() }, N), l.promise }, cancel: function() { P.cancel([e, t]) }, reset: function() { for (var h in c[0]) d([e, t], h, "") }, forward: function(h, f) { return f === void 0 && (f = this.percent()), P.cancel([e, t]), this.show(h, f, !0) }, translate: function(h) { this.reset(); var f = a(h, i);
                d(e, f[1]), d(t, f[0]), bi(e, "itemtranslatein", { percent: h, dir: i }), bi(t, "itemtranslateout", { percent: 1 - h, dir: i }) }, percent: function() { return o(t || e, e, i) }, getDistance: function() { return t && t.offsetWidth } } }

    function bi(t, e, i) { m(t, Ie(e, !1, !1, i)) } var ka = { props: { autoplay: Boolean, autoplayInterval: Number, pauseOnHover: Boolean }, data: { autoplay: !1, autoplayInterval: 7e3, pauseOnHover: !0 }, connected: function() { this.autoplay && this.startAutoplay() }, disconnected: function() { this.stopAutoplay() }, update: function() { _(this.slides, "tabindex", "-1") }, events: [{ name: "visibilitychange", el: function() { return document }, filter: function() { return this.autoplay }, handler: function() { document.hidden ? this.stopAutoplay() : this.startAutoplay() } }], methods: { startAutoplay: function() { var t = this;
                    this.stopAutoplay(), this.interval = setInterval(function() { return (!t.draggable || !$(":focus", t.$el)) && (!t.pauseOnHover || !Y(t.$el, ":hover")) && !t.stack.length && t.show("next") }, this.autoplayInterval) }, stopAutoplay: function() { this.interval && clearInterval(this.interval) } } },
        Sa = { props: { draggable: Boolean }, data: { draggable: !0, threshold: 10 }, created: function() { var t = this;
                ["start", "move", "end"].forEach(function(e) { var i = t[e];
                    t[e] = function(n) { var r = ue(n).x * (U ? -1 : 1);
                        t.prevPos = r !== t.pos ? t.pos : t.prevPos, t.pos = r, i(n) } }) }, events: [{ name: dt, delegate: function() { return this.selSlides }, handler: function(t) {!this.draggable || !Ct(t) && Ta(t.target) || ot(t.target, ye) || t.button > 0 || this.length < 2 || this.start(t) } }, { name: "dragstart", handler: function(t) { t.preventDefault() } }], methods: { start: function() { this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, A(document, re, this.move, { passive: !1 }), A(document, xt + " " + oe + " input", this.end, !0), d(this.list, "userSelect", "none") }, move: function(t) { var e = this,
                        i = this.pos - this.drag; if (!(i === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(i) < this.threshold)) { d(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = i < 0 ? 1 : -1; for (var n = this, r = n.slides, s = this, o = s.prevIndex, a = Math.abs(i), u = this.getIndex(o + this.dir, o), c = this._getDistance(o, u) || r[o].offsetWidth; u !== o && a > c;) this.drag -= c * this.dir, o = u, a -= c, u = this.getIndex(o + this.dir, o), c = this._getDistance(o, u) || r[o].offsetWidth;
                        this.percent = a / c; var l = r[o],
                            h = r[u],
                            f = this.index !== u,
                            v = o === u,
                            p;
                        [this.index, this.prevIndex].filter(function(g) { return !b([u, o], g) }).forEach(function(g) { m(r[g], "itemhidden", [e]), v && (p = !0, e.prevIndex = o) }), (this.index === o && this.prevIndex !== o || p) && m(r[this.index], "itemshown", [this]), f && (this.prevIndex = o, this.index = u, !v && m(l, "beforeitemhide", [this]), m(h, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), l, !v && h), f && (!v && m(l, "itemhide", [this]), m(h, "itemshow", [this])) } }, end: function() { if (Wt(document, re, this.move, { passive: !1 }), Wt(document, xt + " " + oe + " input", this.end, !0), this.dragging)
                        if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
                        else { var t = (U ? this.dir * (U ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
                            this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", !0) }
                    d(this.list, { userSelect: "", pointerEvents: "" }), this.drag = this.percent = null } } };

    function Ta(t) { return !t.children.length && t.childNodes.length } var Ea = { data: { selNav: !1 }, computed: { nav: function(t, e) { var i = t.selNav; return $(i, e) }, selNavItem: function(t) { var e = t.attrItem; return "[" + e + "],[data-" + e + "]" }, navItems: function(t, e) { return O(this.selNavItem, e) } }, update: { write: function() { var t = this;
                    this.nav && this.length !== this.nav.children.length && Dt(this.nav, this.slides.map(function(e, i) { return "<li " + t.attrItem + '="' + i + '"><a href></a></li>' }).join("")), this.navItems.concat(this.nav).forEach(function(e) { return e && (e.hidden = !t.maxIndex) }), this.updateNav() }, events: ["resize"] }, events: [{ name: "click", delegate: function() { return this.selNavItem }, handler: function(t) { t.preventDefault(), this.show(ft(t.current, this.attrItem)) } }, { name: "itemshow", handler: "updateNav" }], methods: { updateNav: function() { var t = this,
                        e = this.getValidIndex();
                    this.navItems.forEach(function(i) { var n = ft(i, t.attrItem);
                        j(i, t.clsActive, Mt(n) === e), j(i, "uk-invisible", t.finite && (n === "previous" && e === 0 || n === "next" && e >= t.maxIndex)) }) } } },
        Hr = { mixins: [ka, Sa, Ea], props: { clsActivated: Boolean, easing: String, index: Number, finite: Boolean, velocity: Number, selSlides: String }, data: function() { return { easing: "ease", finite: !1, velocity: 1, index: 0, prevIndex: -1, stack: [], percent: 0, clsActive: "uk-active", clsActivated: !1, Transitioner: !1, transitionOptions: {} } }, connected: function() { this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = [] }, disconnected: function() { M(this.slides, this.clsActive) }, computed: { duration: function(t, e) { var i = t.velocity; return Br(e.offsetWidth / i) }, list: function(t, e) { var i = t.selList; return $(i, e) }, maxIndex: function() { return this.length - 1 }, selSlides: function(t) { var e = t.selList,
                        i = t.selSlides; return e + " " + (i || "> *") }, slides: { get: function() { return O(this.selSlides, this.$el) }, watch: function() { this.$reset() } }, length: function() { return this.slides.length } }, events: { itemshown: function() { this.$update(this.list) } }, methods: { show: function(t, e) { var i = this; if (e === void 0 && (e = !1), !(this.dragging || !this.length)) { var n = this,
                            r = n.stack,
                            s = e ? 0 : r.length,
                            o = function() { r.splice(s, 1), r.length && i.show(r.shift(), !0) }; if (r[e ? "unshift" : "push"](t), !e && r.length > 1) { r.length === 2 && this._transitioner.forward(Math.min(this.duration, 200)); return } var a = this.getIndex(this.index),
                            u = C(this.slides, this.clsActive) && this.slides[a],
                            c = this.getIndex(t, this.index),
                            l = this.slides[c]; if (u === l) { o(); return } if (this.dir = Ca(t, a), this.prevIndex = a, this.index = c, u && !m(u, "beforeitemhide", [this]) || !m(l, "beforeitemshow", [this, u])) { this.index = this.prevIndex, o(); return } var h = this._show(u, l, e).then(function() { return u && m(u, "itemhidden", [i]), m(l, "itemshown", [i]), new w(function(f) { F.write(function() { r.shift(), r.length ? i.show(r.shift(), !0) : i._transitioner = null, f() }) }) }); return u && m(u, "itemhide", [this]), m(l, "itemshow", [this]), h } }, getIndex: function(t, e) { return t === void 0 && (t = this.index), e === void 0 && (e = this.index), $t(te(t, this.slides, e, this.finite), 0, this.maxIndex) }, getValidIndex: function(t, e) { return t === void 0 && (t = this.index), e === void 0 && (e = this.prevIndex), this.getIndex(t, e) }, _show: function(t, e, i) { if (this._transitioner = this._getTransitioner(t, e, this.dir, k({ easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing }, this.transitionOptions)), !i && !t) return this._translate(1), w.resolve(); var n = this.stack,
                        r = n.length; return this._transitioner[r > 1 ? "forward" : "show"](r > 1 ? Math.min(this.duration, 75 + 75 / (r - 1)) : this.duration, this.percent) }, _getDistance: function(t, e) { return this._getTransitioner(t, t !== e && e).getDistance() }, _translate: function(t, e, i) { e === void 0 && (e = this.prevIndex), i === void 0 && (i = this.index); var n = this._getTransitioner(e !== i ? e : !1, i); return n.translate(t), n }, _getTransitioner: function(t, e, i, n) { return t === void 0 && (t = this.prevIndex), e === void 0 && (e = this.index), i === void 0 && (i = this.dir || 1), n === void 0 && (n = this.transitionOptions), new this.Transitioner(Zt(t) ? this.slides[t] : t, Zt(e) ? this.slides[e] : e, i * (U ? -1 : 1), n) } } };

    function Ca(t, e) { return t === "next" ? 1 : t === "previous" || t < e ? -1 : 1 }

    function Br(t) { return .5 * t + 300 } var zr = { mixins: [Hr], props: { animation: String }, data: { animation: "slide", clsActivated: "uk-transition-active", Animations: cn, Transitioner: ya }, computed: { animation: function(t) { var e = t.animation,
                        i = t.Animations; return k(i[e] || i.slide, { name: e }) }, transitionOptions: function() { return { animation: this.animation } } }, events: { "itemshow itemhide itemshown itemhidden": function(t) { var e = t.target;
                    this.$update(e) }, beforeitemshow: function(t) { var e = t.target;
                    y(e, this.clsActive) }, itemshown: function(t) { var e = t.target;
                    y(e, this.clsActivated) }, itemhidden: function(t) { var e = t.target;
                    M(e, this.clsActive, this.clsActivated) } } },
        Or = { mixins: [de, an, _t, zr], functional: !0, props: { delayControls: Number, preload: Number, videoAutoplay: Boolean, template: String }, data: function() { return { preload: 1, videoAutoplay: !1, delayControls: 3e3, items: [], cls: "uk-open", clsPage: "uk-lightbox-page", selList: ".uk-lightbox-items", attrItem: "uk-lightbox-item", selClose: ".uk-close-large", selCaption: ".uk-lightbox-caption", pauseOnHover: !1, velocity: 2, Animations: Dr, template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>' } }, created: function() { var t = $(this.template),
                    e = $(this.selList, t);
                this.items.forEach(function() { return X(e, "<li>") }), this.$mount(X(this.container, t)) }, computed: { caption: function(t, e) { var i = t.selCaption; return $(i, e) } }, events: [{ name: re + " " + dt + " keydown", handler: "showControls" }, { name: "click", self: !0, delegate: function() { return this.selSlides }, handler: function(t) { t.defaultPrevented || this.hide() } }, { name: "shown", self: !0, handler: function() { this.showControls() } }, { name: "hide", self: !0, handler: function() { this.hideControls(), M(this.slides, this.clsActive), P.stop(this.slides) } }, { name: "hidden", self: !0, handler: function() { this.$destroy(!0) } }, { name: "keyup", el: function() { return document }, handler: function(t) { if (!(!this.isToggled(this.$el) || !this.draggable)) switch (t.keyCode) {
                        case 37:
                            this.show("previous"); break;
                        case 39:
                            this.show("next"); break } } }, { name: "beforeitemshow", handler: function(t) { this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = Dr.scale, M(t.target, this.clsActive), this.stack.splice(1, 0, this.index)) } }, { name: "itemshow", handler: function() { Dt(this.caption, this.getItem().caption || ""); for (var t = -this.preload; t <= this.preload; t++) this.loadItem(this.index + t) } }, { name: "itemshown", handler: function() { this.draggable = this.$props.draggable } }, { name: "itemload", handler: function(t, e) { var i = this,
                        n = e.source,
                        r = e.type,
                        s = e.alt;
                    s === void 0 && (s = ""); var o = e.poster,
                        a = e.attrs; if (a === void 0 && (a = {}), this.setItem(e, "<span uk-spinner></span>"), !!n) { var u, c = { frameborder: "0", allow: "autoplay", allowfullscreen: "", style: "max-width: 100%; box-sizing: border-box;", "uk-responsive": "", "uk-video": "" + this.videoAutoplay }; if (r === "image" || n.match(/\.(avif|jpe?g|a?png|gif|svg|webp)($|\?)/i)) Wi(n, a.srcset, a.size).then(function(h) { var f = h.width,
                                v = h.height; return i.setItem(e, Fe("img", k({ src: n, width: f, height: v, alt: s }, a))) }, function() { return i.setError(e) });
                        else if (r === "video" || n.match(/\.(mp4|webm|ogv)($|\?)/i)) { var l = Fe("video", k({ src: n, poster: o, controls: "", playsinline: "", "uk-video": "" + this.videoAutoplay }, a));
                            A(l, "loadedmetadata", function() { _(l, { width: l.videoWidth, height: l.videoHeight }), i.setItem(e, l) }), A(l, "error", function() { return i.setError(e) }) } else r === "iframe" || n.match(/\.(html|php)($|\?)/i) ? this.setItem(e, Fe("iframe", k({ src: n, frameborder: "0", allowfullscreen: "", class: "uk-lightbox-iframe" }, a))) : (u = n.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) ? this.setItem(e, Fe("iframe", k({ src: "https://www.youtube" + (u[1] || "") + ".com/embed/" + u[2] + (u[3] ? "?" + u[3] : ""), width: 1920, height: 1080 }, c, a))) : (u = n.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) && Qe("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(n), { responseType: "json", withCredentials: !1 }).then(function(h) { var f = h.response,
                                v = f.height,
                                p = f.width; return i.setItem(e, Fe("iframe", k({ src: "https://player.vimeo.com/video/" + u[1] + (u[2] ? "?" + u[2] : ""), width: p, height: v }, c, a))) }, function() { return i.setError(e) }) } } }], methods: { loadItem: function(t) { t === void 0 && (t = this.index); var e = this.getItem(t);
                    this.getSlide(e).childElementCount || m(this.$el, "itemload", [e]) }, getItem: function(t) { return t === void 0 && (t = this.index), this.items[te(t, this.slides)] }, setItem: function(t, e) { m(this.$el, "itemloaded", [this, Dt(this.getSlide(t), e)]) }, getSlide: function(t) { return this.slides[this.items.indexOf(t)] }, setError: function(t) { this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>') }, showControls: function() { clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), y(this.$el, "uk-active", "uk-transition-active") }, hideControls: function() { M(this.$el, "uk-active", "uk-transition-active") } } };

    function Fe(t, e) { var i = he("<" + t + ">"); return _(i, e), i } var Ia = { install: _a, props: { toggle: String }, data: { toggle: "a" }, computed: { toggles: { get: function(t, e) { var i = t.toggle; return O(i, e) }, watch: function() { this.hide() } } }, disconnected: function() { this.hide() }, events: [{ name: "click", delegate: function() { return this.toggle + ":not(.uk-disabled)" }, handler: function(t) { t.preventDefault(), this.show(t.current) } }], methods: { show: function(t) { var e = this,
                    i = wn(this.toggles.map(Fr), "source"); if (Ot(t)) { var n = Fr(t),
                        r = n.source;
                    t = Pt(i, function(s) { var o = s.source; return r === o }) } return this.panel = this.panel || this.$create("lightboxPanel", k({}, this.$props, { items: i })), A(this.panel.$el, "hidden", function() { return e.panel = !1 }), this.panel.show(t) }, hide: function() { return this.panel && this.panel.hide() } } };

    function _a(t, e) { t.lightboxPanel || t.component("lightboxPanel", Or), k(e.props, t.component("lightboxPanel").options.props) }

    function Fr(t) { var e = {}; return ["href", "caption", "type", "poster", "alt", "attrs"].forEach(function(i) { e[i === "href" ? "source" : i] = ft(t, i) }), e.attrs = ai(e.attrs), e } var $i, Aa = { mixins: [de], functional: !0, args: ["message", "status"], data: { message: "", status: "", timeout: 5e3, group: null, pos: "top-center", clsContainer: "uk-notification", clsClose: "uk-notification-close", clsMsg: "uk-notification-message" }, install: Pa, computed: { marginProp: function(t) { var e = t.pos; return "margin" + (vt(e, "top") ? "Top" : "Bottom") }, startProps: function() { var t; return t = { opacity: 0 }, t[this.marginProp] = -this.$el.offsetHeight, t } }, created: function() { var t = $("." + this.clsContainer + "-" + this.pos, this.container) || X(this.container, '<div class="' + this.clsContainer + " " + this.clsContainer + "-" + this.pos + '" style="display: block"></div>');
            this.$mount(X(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>")) }, connected: function() { var t = this,
                e, i = x(d(this.$el, this.marginProp));
            P.start(d(this.$el, this.startProps), (e = { opacity: 1 }, e[this.marginProp] = i, e)).then(function() { t.timeout && (t.timer = setTimeout(t.close, t.timeout)) }) }, events: ($i = { click: function(t) { ot(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close() } }, $i[Lt] = function() { this.timer && clearTimeout(this.timer) }, $i[se] = function() { this.timeout && (this.timer = setTimeout(this.close, this.timeout)) }, $i), methods: { close: function(t) { var e = this,
                    i = function(n) { var r = D(n);
                        m(n, "close", [e]), nt(n), r && !r.hasChildNodes() && nt(r) };
                this.timer && clearTimeout(this.timer), t ? i(this.$el) : P.start(this.$el, this.startProps).then(i) } } };

    function Pa(t) { t.notification.closeAll = function(e, i) { It(document.body, function(n) { var r = t.getComponent(n, "notification");
                r && (!e || e === r.group) && r.close(i) }) } } var xi = { x: ki, y: ki, rotate: ki, scale: ki, color: fn, backgroundColor: fn, borderColor: fn, blur: Yt, hue: Yt, fopacity: Yt, grayscale: Yt, invert: Yt, saturate: Yt, sepia: Yt, opacity: Ma, stroke: Da, bgx: Wr, bgy: Wr },
        yi = Object.keys,
        Lr = { mixins: [mi], props: qr(yi(xi), "list"), data: qr(yi(xi), void 0), computed: { props: function(t, e) { var i = this; return yi(xi).reduce(function(n, r) { return Z(t[r]) || (n[r] = xi[r].call(i, r, e, t[r].slice())), n }, {}) } }, methods: { reset: function() { var t = this;
                    it(this.getCss(0), function(e, i) { return d(t.$el, i, "") }) }, getCss: function(t) { var e = this; return yi(this.props).reduce(function(i, n) { return e.props[n](i, t), i }, { transform: "", filter: "" }) } } };

    function ki(t, e, i) { var n = ln(i) || { x: "px", y: "px", rotate: "deg" }[t] || ""; return (t === "x" || t === "y") && (t = "translate" + pe(t)), i = i.map(x), i.length === 1 && i.unshift(t === "scale" ? 1 : 0),
            function(r, s) { var o = Le(i, s);
                vt(t, "translate") && (o = x(o).toFixed(n === "px" ? 0 : 6)), r.transform += " " + t + "(" + o + n + ")" } }

    function fn(t, e, i) { return i.length === 1 && i.unshift(Si(e, t, "")), i = i.map(function(n) { return Na(e, n) }),
            function(n, r) { var s = jr(i, r),
                    o = s[0],
                    a = s[1],
                    u = s[2],
                    c = o.map(function(l, h) { return l += u * (a[h] - l), h === 3 ? x(l) : parseInt(l, 10) }).join(",");
                n[t] = "rgba(" + c + ")" } }

    function Na(t, e) { return Si(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(x) }

    function Yt(t, e, i) { i.length === 1 && i.unshift(0); var n = ln(i) || { blur: "px", hue: "deg" }[t] || "%"; return t = { fopacity: "opacity", hue: "hue-rotate" }[t] || t, i = i.map(x),
            function(r, s) { var o = Le(i, s);
                r.filter += " " + t + "(" + (o + n) + ")" } }

    function Ma(t, e, i) { return i.length === 1 && i.unshift(Si(e, t, "")), i = i.map(x),
            function(n, r) { n[t] = Le(i, r) } }

    function Da(t, e, i) { i.length === 1 && i.unshift(0); var n = ln(i); if (i = i.map(x), !i.some(function(s) { return s })) return N; var r = ur(e); return d(e, "strokeDasharray", r), n === "%" && (i = i.map(function(s) { return s * r / 100 })), i = i.reverse(),
            function(s, o) { s.strokeDashoffset = Le(i, o) } }

    function Wr(t, e, i) { i.length === 1 && i.unshift(0), t = t.substr(-1); var n = t === "y" ? "height" : "width";
        i = i.map(function(s) { return wt(s, n, e) }), d(e, "background-position-" + t, ""); var r = d(e, "backgroundPosition").split(" ")[t === "x" ? 0 : 1]; return Si(e, "backgroundSize", "") === "cover" ? Ha.call(this, t, e, i, r, n) : Rr(t, i, r) }

    function Ha(t, e, i, n, r) { var s = Ba.call(this, e); if (!s.naturalWidth) return N; var o = Math.min.apply(Math, i),
            a = Math.max.apply(Math, i),
            u = i.indexOf(o) < i.indexOf(a),
            c = a - o,
            l = (u ? -c : 0) - (u ? o : a),
            h = { width: e.offsetWidth, height: e.offsetHeight },
            f = { width: s.naturalWidth, height: s.naturalHeight },
            v = Ut.cover(f, h),
            p = v[r] - h[r]; if (p < c) h[r] = v[r] + c - p;
        else if (p > c) { var g = h[r] / wt(n, r, e, !0);
            g && (l -= (p - c) / g) } var S = Ut.cover(f, h),
            E = Rr(t, i, l + "px"); return function(z, L) { E(z, L), z.backgroundSize = S.width + "px " + S.height + "px", z.backgroundRepeat = "no-repeat" } }

    function Rr(t, e, i) { return function(n, r) { n["background-position-" + t] = "calc(" + i + " + " + Le(e, r) + "px)" } }

    function Ba(t) { var e = this,
            i = d(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1"),
            n = this._data; if (n[i]) return n[i]; if (i) { var r = new Image; return r.src = i, r.naturalWidth || (r.onload = function() { return e.$update() }), n[i] = r } }

    function jr(t, e) { var i = t.length - 1,
            n = Math.min(Math.floor(i * e), i - 1); return t.slice(n, n + 2).concat(e === 1 ? 1 : e % (1 / i) * i) }

    function Le(t, e) { var i = jr(t, e),
            n = i[0],
            r = i[1],
            s = i[2]; return Zt(n) ? n + Math.abs(n - r) * s * (n < r ? 1 : -1) : +r }

    function ln(t, e) { return t.reduce(function(i, n) { return i || H(n) && n.replace(/[\d-]/g, "").trim() }, "") || e }

    function Si(t, e, i) { var n = t.style[e],
            r = d(d(t, e, i), e); return t.style[e] = n, r }

    function qr(t, e) { return t.reduce(function(i, n) { return i[n] = e, i }, {}) } var za = { mixins: [Lr], props: { target: String, viewport: Number, easing: Number, start: String, end: String }, data: { target: !1, viewport: 1, easing: 1, start: 0, end: 0 }, computed: { target: function(t, e) { var i = t.target; return Gr(i && mt(i, e) || e) }, start: function(t) { var e = t.start; return Yr(e, this.target) }, end: function(t) { var e = t.end,
                        i = t.viewport; return Yr(e || (i = (1 - i) * 100) && i + "vh+" + i + "%", this.target) } }, update: { read: function(t, e) { var i = t.percent; if (e.has("scroll") || (i = !1), !!this.matchMedia) { var n = i; return i = Oa(nn(this.target, this.start, this.end), this.easing), { percent: i, style: n === i ? !1 : this.getCss(i) } } }, write: function(t) { var e = t.style; if (!this.matchMedia) { this.reset(); return }
                    e && d(this.$el, e) }, events: ["scroll", "resize"] } },
        Vr = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g;

    function Yr(t, e) { var i, n = 0; for (t = t.toString().replace(/\s/g, ""), Vr.lastIndex = 0;
            (i = Vr.exec(t)) !== null;) n += wt(i[0], "height", e, !0); return n }

    function Oa(t, e) { return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, -e + 1) }

    function Gr(t) { return t ? "offsetTop" in t ? t : Gr(D(t)) : document.documentElement } var Kr = { update: { write: function() { if (!(this.stack.length || this.dragging)) { var t = this.getValidIndex(this.index);
                    (!~this.prevIndex || this.index !== t) && this.show(t) } }, events: ["resize"] } };

    function Fa(t, e, i, n) { var r = n.center,
            s = n.easing,
            o = n.list,
            a = new Je,
            u = t ? We(t, o, r) : We(e, o, r) + I(e).width * i,
            c = e ? We(e, o, r) : u + I(t).width * i * (U ? -1 : 1); return { dir: i, show: function(l, h, f) { h === void 0 && (h = 0); var v = f ? "linear" : s; return l -= Math.round(l * $t(h, -1, 1)), this.translate(h), h = t ? h : $t(h, 0, 1), dn(this.getItemIn(), "itemin", { percent: h, duration: l, timing: v, dir: i }), t && dn(this.getItemIn(!0), "itemout", { percent: 1 - h, duration: l, timing: v, dir: i }), P.start(o, { transform: V(-c * (U ? -1 : 1), "px") }, l, v).then(a.resolve, N), a.promise }, cancel: function() { P.cancel(o) }, reset: function() { d(o, "transform", "") }, forward: function(l, h) { return h === void 0 && (h = this.percent()), P.cancel(o), this.show(l, h, !0) }, translate: function(l) { var h = this.getDistance() * i * (U ? -1 : 1);
                d(o, "transform", V($t(-c + (h - h * l), -Ti(o), I(o).width) * (U ? -1 : 1), "px")); var f = this.getActives(),
                    v = this.getItemIn(),
                    p = this.getItemIn(!0);
                l = t ? $t(l, -1, 1) : 0, R(o).forEach(function(g) { var S = b(f, g),
                        E = g === v,
                        z = g === p,
                        L = E || !z && (S || i * (U ? -1 : 1) === -1 ^ Ei(g, o) > Ei(t || e));
                    dn(g, "itemtranslate" + (L ? "in" : "out"), { dir: i, percent: z ? 1 - l : E ? l : S ? 1 : 0 }) }) }, percent: function() { return Math.abs((d(o, "transform").split(",")[4] * (U ? -1 : 1) + u) / (c - u)) }, getDistance: function() { return Math.abs(c - u) }, getItemIn: function(l) { l === void 0 && (l = !1); var h = this.getActives(),
                    f = Jr(o, We(e || t, o, r)); if (l) { var v = h;
                    h = f, f = v } return f[Pt(f, function(p) { return !b(h, p) })] }, getActives: function() { return Jr(o, We(t || e, o, r)) } } }

    function We(t, e, i) { var n = Ei(t, e); return i ? n - La(t, e) : Math.min(n, Xr(e)) }

    function Xr(t) { return Math.max(0, Ti(t) - I(t).width) }

    function Ti(t) { return R(t).reduce(function(e, i) { return I(i).width + e }, 0) }

    function La(t, e) { return I(e).width / 2 - I(t).width / 2 }

    function Ei(t, e) { return t && (oi(t).left + (U ? I(t).width - I(e).width : 0)) * (U ? -1 : 1) || 0 }

    function Jr(t, e) { e -= 1; var i = I(t).width,
            n = e + i + 2; return R(t).filter(function(r) { var s = Ei(r, t),
                o = s + Math.min(I(r).width, i); return s >= e && o <= n }) }

    function dn(t, e, i) { m(t, Ie(e, !1, !1, i)) } var Wa = { mixins: [rt, Hr, Kr], props: { center: Boolean, sets: Boolean }, data: { center: !1, sets: !1, attrItem: "uk-slider-item", selList: ".uk-slider-items", selNav: ".uk-slider-nav", clsContainer: "uk-slider-container", Transitioner: Fa }, computed: { avgWidth: function() { return Ti(this.list) / this.length }, finite: function(t) { var e = t.finite; return e || Math.ceil(Ti(this.list)) < I(this.list).width + Ra(this.list) + this.center }, maxIndex: function() { if (!this.finite || this.center && !this.sets) return this.length - 1; if (this.center) return be(this.sets); var t = 0,
                    e = Xr(this.list),
                    i = Pt(this.slides, function(n) { if (t >= e) return !0;
                        t += I(n).width }); return ~i ? i : this.length - 1 }, sets: function(t) { var e = this,
                    i = t.sets; if (!!i) { var n = I(this.list).width / (this.center ? 2 : 1),
                        r = 0,
                        s = n,
                        o = 0; return i = $e(this.slides, "offsetLeft").reduce(function(a, u, c) { var l = I(u).width,
                            h = o + l; if (h > r && (!e.center && c > e.maxIndex && (c = e.maxIndex), !b(a, c))) { var f = e.slides[c + 1];
                            e.center && f && l < s - I(f).width / 2 ? s -= l : (s = n, a.push(c), r = o + n + (e.center ? l / 2 : 0)) } return o += l, a }, []), !Qt(i) && i } }, transitionOptions: function() { return { center: this.center, list: this.list } } }, connected: function() { j(this.$el, this.clsContainer, !$("." + this.clsContainer, this.$el)) }, update: { write: function() { var t = this;
                this.navItems.forEach(function(i) { var n = Mt(ft(i, t.attrItem));
                    n !== !1 && (i.hidden = !t.maxIndex || n > t.maxIndex || t.sets && !b(t.sets, n)) }), this.length && !this.dragging && !this.stack.length && (this.reorder(), this._translate(1)); var e = this._getTransitioner(this.index).getActives();
                this.slides.forEach(function(i) { return j(i, t.clsActive, b(e, i)) }), this.clsActivated && (!this.sets || b(this.sets, x(this.index))) && this.slides.forEach(function(i) { return j(i, t.clsActivated || "", b(e, i)) }) }, events: ["resize"] }, events: { beforeitemshow: function(t) {!this.dragging && this.sets && this.stack.length < 2 && !b(this.sets, this.index) && (this.index = this.getValidIndex()); var e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0)); if (!this.dragging && e > 1) { for (var i = 0; i < e; i++) this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
                    t.preventDefault(); return } var n = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
                this.duration = Br(this.avgWidth / this.velocity) * (I(this.slides[n]).width / this.avgWidth), this.reorder() }, itemshow: function() {~this.prevIndex && y(this._getTransitioner().getItemIn(), this.clsActive) } }, methods: { reorder: function() { var t = this; if (this.finite) { d(this.slides, "order", ""); return } var e = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index; if (this.slides.forEach(function(a, u) { return d(a, "order", t.dir > 0 && u < e ? 1 : t.dir < 0 && u >= t.index ? -1 : "") }), !!this.center)
                    for (var i = this.slides[e], n = I(this.list).width / 2 - I(i).width / 2, r = 0; n > 0;) { var s = this.getIndex(--r + e, e),
                            o = this.slides[s];
                        d(o, "order", s > e ? -2 : -1), n -= I(o).width } }, getValidIndex: function(t, e) { if (t === void 0 && (t = this.index), e === void 0 && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets) return t; var i;
                do { if (b(this.sets, t)) return t;
                    i = t, t = this.getIndex(t + this.dir, e) } while (t !== i); return t } } };

    function Ra(t) { return Math.max.apply(Math, [0].concat(R(t).map(function(e) { return I(e).width }))) } var Zr = { mixins: [Lr], data: { selItem: "!li" }, computed: { item: function(t, e) { var i = t.selItem; return mt(i, e) } }, events: [{ name: "itemin itemout", self: !0, el: function() { return this.item }, handler: function(t) { var e = this,
                    i = t.type,
                    n = t.detail,
                    r = n.percent,
                    s = n.duration,
                    o = n.timing,
                    a = n.dir;
                F.read(function() { var u = e.getCss(Ur(i, a, r)),
                        c = e.getCss(Qr(i) ? .5 : a > 0 ? 1 : 0);
                    F.write(function() { d(e.$el, u), P.start(e.$el, c, s, o).catch(N) }) }) } }, { name: "transitioncanceled transitionend", self: !0, el: function() { return this.item }, handler: function() { P.cancel(this.$el) } }, { name: "itemtranslatein itemtranslateout", self: !0, el: function() { return this.item }, handler: function(t) { var e = this,
                    i = t.type,
                    n = t.detail,
                    r = n.percent,
                    s = n.dir;
                F.read(function() { var o = e.getCss(Ur(i, s, r));
                    F.write(function() { return d(e.$el, o) }) }) } }] };

    function Qr(t) { return gt(t, "in") }

    function Ur(t, e, i) { return i /= 2, Qr(t) ^ e < 0 ? i : 1 - i } var ja = k({}, cn, { fade: { show: function() { return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }] }, percent: function(t) { return 1 - d(t, "opacity") }, translate: function(t) { return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }] } }, scale: { show: function() { return [{ opacity: 0, transform: ve(1 + .5), zIndex: 0 }, { zIndex: -1 }] }, percent: function(t) { return 1 - d(t, "opacity") }, translate: function(t) { return [{ opacity: 1 - t, transform: ve(1 + .5 * t), zIndex: 0 }, { zIndex: -1 }] } }, pull: { show: function(t) { return t < 0 ? [{ transform: V(30), zIndex: -1 }, { transform: V(), zIndex: 0 }] : [{ transform: V(-100), zIndex: 0 }, { transform: V(), zIndex: -1 }] }, percent: function(t, e, i) { return i < 0 ? 1 - Oe(e) : Oe(t) }, translate: function(t, e) { return e < 0 ? [{ transform: V(30 * t), zIndex: -1 }, { transform: V(-100 * (1 - t)), zIndex: 0 }] : [{ transform: V(-t * 100), zIndex: 0 }, { transform: V(30 * (1 - t)), zIndex: -1 }] } }, push: { show: function(t) { return t < 0 ? [{ transform: V(100), zIndex: 0 }, { transform: V(), zIndex: -1 }] : [{ transform: V(-30), zIndex: -1 }, { transform: V(), zIndex: 0 }] }, percent: function(t, e, i) { return i > 0 ? 1 - Oe(e) : Oe(t) }, translate: function(t, e) { return e < 0 ? [{ transform: V(t * 100), zIndex: 0 }, { transform: V(-30 * (1 - t)), zIndex: -1 }] : [{ transform: V(-30 * t), zIndex: -1 }, { transform: V(100 * (1 - t)), zIndex: 0 }] } } }),
        qa = { mixins: [rt, zr, Kr], props: { ratio: String, minHeight: Number, maxHeight: Number }, data: { ratio: "16:9", minHeight: !1, maxHeight: !1, selList: ".uk-slideshow-items", attrItem: "uk-slideshow-item", selNav: ".uk-slideshow-nav", Animations: ja }, update: { read: function() { if (!this.list) return !1; var t = this.ratio.split(":").map(Number),
                        e = t[0],
                        i = t[1]; return i = i * this.list.offsetWidth / e || 0, this.minHeight && (i = Math.max(this.minHeight, i)), this.maxHeight && (i = Math.min(this.maxHeight, i)), { height: i - Rt(this.list, "height", "content-box") } }, write: function(t) { var e = t.height;
                    e > 0 && d(this.list, "minHeight", e) }, events: ["resize"] } },
        Va = { mixins: [rt, Pr], props: { group: String, threshold: Number, clsItem: String, clsPlaceholder: String, clsDrag: String, clsDragState: String, clsBase: String, clsNoDrag: String, clsEmpty: String, clsCustom: String, handle: String }, data: { group: !1, threshold: 5, clsItem: "uk-sortable-item", clsPlaceholder: "uk-sortable-placeholder", clsDrag: "uk-sortable-drag", clsDragState: "uk-drag", clsBase: "uk-sortable", clsNoDrag: "uk-sortable-nodrag", clsEmpty: "uk-sortable-empty", clsCustom: "", handle: !1, pos: {} }, created: function() { var t = this;
                ["init", "start", "move", "end"].forEach(function(e) { var i = t[e];
                    t[e] = function(n) { k(t.pos, ue(n)), i(n) } }) }, events: { name: dt, passive: !1, handler: "init" }, computed: { target: function() { return (this.$el.tBodies || [this.$el])[0] }, items: function() { return R(this.target) }, isEmpty: { get: function() { return Qt(this.items) }, watch: function(t) { j(this.target, this.clsEmpty, t) }, immediate: !0 }, handles: { get: function(t, e) { var i = t.handle; return i ? O(i, e) : this.items }, watch: function(t, e) { d(e, { touchAction: "", userSelect: "" }), d(t, { touchAction: $n ? "none" : "", userSelect: "none" }) }, immediate: !0 } }, update: { write: function(t) { if (!(!this.drag || !D(this.placeholder))) { var e = this,
                            i = e.pos,
                            n = i.x,
                            r = i.y,
                            s = e.origin,
                            o = s.offsetTop,
                            a = s.offsetLeft,
                            u = e.placeholder;
                        d(this.drag, { top: r - o, left: n - a }); var c = this.getSortable(document.elementFromPoint(n, r)); if (!!c) { var l = c.items; if (!l.some(P.inProgress)) { var h = Xa(l, { x: n, y: r }); if (!(l.length && (!h || h === u))) { var f = this.getSortable(u),
                                        v = Ja(c.target, h, u, n, r, c === f && t.moved !== h);
                                    v !== !1 && (v && u === v || (c !== f ? (f.remove(u), t.moved = h) : delete t.moved, c.insert(u, v), this.touched.add(c))) } } } } }, events: ["move"] }, methods: { init: function(t) { var e = t.target,
                        i = t.button,
                        n = t.defaultPrevented,
                        r = this.items.filter(function(o) { return G(e, o) }),
                        s = r[0];!s || n || i > 0 || Fi(e) || G(e, "." + this.clsNoDrag) || this.handle && !G(e, this.handle) || (t.preventDefault(), this.touched = new Set([this]), this.placeholder = s, this.origin = k({ target: e, index: ae(s) }, this.pos), A(document, re, this.move), A(document, xt, this.end), this.threshold || this.start(t)) }, start: function(t) { this.drag = Ka(this.$container, this.placeholder); var e = this.placeholder.getBoundingClientRect(),
                        i = e.left,
                        n = e.top;
                    k(this.origin, { offsetLeft: this.pos.x - i, offsetTop: this.pos.y - n }), y(this.drag, this.clsDrag, this.clsCustom), y(this.placeholder, this.clsPlaceholder), y(this.items, this.clsItem), y(document.documentElement, this.clsDragState), m(this.$el, "start", [this, this.placeholder]), Ya(this.pos), this.move(t) }, move: function(t) { this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t) }, end: function() { var t = this; if (Wt(document, re, this.move), Wt(document, xt, this.end), Wt(window, "scroll", this.scroll), !!this.drag) { Ga(); var e = this.getSortable(this.placeholder);
                        this === e ? this.origin.index !== ae(this.placeholder) && m(this.$el, "moved", [this, this.placeholder]) : (m(e.$el, "added", [e, this.placeholder]), m(this.$el, "removed", [this, this.placeholder])), m(this.$el, "stop", [this, this.placeholder]), nt(this.drag), this.drag = null, this.touched.forEach(function(i) { var n = i.clsPlaceholder,
                                r = i.clsItem; return t.touched.forEach(function(s) { return M(s.items, n, r) }) }), this.touched = null, M(document.documentElement, this.clsDragState) } }, insert: function(t, e) { var i = this;
                    y(this.items, this.clsItem); var n = function() { return e ? Ae(e, t) : X(i.target, t) };
                    this.animate(n) }, remove: function(t) {!G(t, this.target) || this.animate(function() { return nt(t) }) }, getSortable: function(t) { do { var e = this.$getComponent(t, "sortable"); if (e && (e === this || this.group !== !1 && e.group === this.group)) return e } while (t = D(t)) } } },
        ts;

    function Ya(t) { var e = Date.now();
        ts = setInterval(function() { var i = t.x,
                n = t.y;
            n += window.pageYOffset; var r = (Date.now() - e) * .3;
            e = Date.now(), jt(document.elementFromPoint(i, t.y), /auto|scroll/).reverse().some(function(s) { var o = s.scrollTop,
                    a = s.scrollHeight,
                    u = B(le(s)),
                    c = u.top,
                    l = u.bottom,
                    h = u.height; if (c < n && c + 35 > n) o -= r;
                else if (l > n && l - 35 < n) o += r;
                else return; if (o > 0 && o < a - h) return ci(s, o), !0 }) }, 15) }

    function Ga() { clearInterval(ts) }

    function Ka(t, e) { var i = X(t, e.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, "$1div$2")); return d(i, "margin", "0", "important"), d(i, k({ boxSizing: "border-box", width: e.offsetWidth, height: e.offsetHeight }, d(e, ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"]))), q(i.firstElementChild, q(e.firstElementChild)), i }

    function Xa(t, e) { return t[Pt(t, function(i) { return Ve(e, i.getBoundingClientRect()) })] }

    function Ja(t, e, i, n, r, s) { if (!!R(t).length) { var o = e.getBoundingClientRect(); if (!s) return Za(t, i) || r < o.top + o.height / 2 ? e : e.nextElementSibling; var a = i.getBoundingClientRect(),
                u = es([o.top, o.bottom], [a.top, a.bottom]),
                c = u ? n : r,
                l = u ? "width" : "height",
                h = u ? "left" : "top",
                f = u ? "right" : "bottom",
                v = a[l] < o[l] ? o[l] - a[l] : 0; return a[h] < o[h] ? v && c < o[h] + v ? !1 : e.nextElementSibling : v && c > o[f] - v ? !1 : e } }

    function Za(t, e) { var i = R(t).length === 1;
        i && X(t, e); var n = R(t),
            r = n.some(function(s, o) { var a = s.getBoundingClientRect(); return n.slice(o + 1).some(function(u) { var c = u.getBoundingClientRect(); return !es([a.left, a.right], [c.left, c.right]) }) }); return i && nt(e), r }

    function es(t, e) { return t[1] > e[0] && e[1] > t[0] } var Ci, Qa = { mixins: [de, _t, tr], args: "title", props: { delay: Number, title: String }, data: { pos: "top", title: "", delay: 0, animation: ["uk-animation-scale-up"], duration: 100, cls: "uk-active", clsPos: "uk-tooltip" }, beforeConnect: function() { this._hasTitle = ee(this.$el, "title"), _(this.$el, "title", ""), this.updateAria(!1), Ua(this.$el) }, disconnected: function() { this.hide(), _(this.$el, "title", this._hasTitle ? this.title : null) }, methods: { show: function() { var t = this;
                this.isToggled(this.tooltip || null) || !this.title || (this._unbind = K(document, "show keydown " + dt, this.hide, !1, function(e) { return e.type === dt && !G(e.target, t.$el) || e.type === "keydown" && e.keyCode === 27 || e.type === "show" && e.detail[0] !== t && e.detail[0].$name === t.$name }), clearTimeout(this.showTimer), this.showTimer = setTimeout(this._show, this.delay)) }, hide: function() { var t = this;
                Y(this.$el, "input:focus") || (clearTimeout(this.showTimer), !!this.isToggled(this.tooltip || null) && this.toggleElement(this.tooltip, !1, !1).then(function() { nt(t.tooltip), t.tooltip = null, t._unbind() })) }, _show: function() { var t = this;
                this.tooltip = X(this.container, '<div class="' + this.clsPos + '"> <div class="' + this.clsPos + '-inner">' + this.title + "</div> </div>"), A(this.tooltip, "toggled", function(e, i) { t.updateAria(i), !!i && (t.positionAt(t.tooltip, t.$el), t.origin = t.getAxis() === "y" ? De(t.dir) + "-" + t.align : t.align + "-" + De(t.dir)) }), this.toggleElement(this.tooltip, !0) }, updateAria: function(t) { _(this.$el, "aria-expanded", t) } }, events: (Ci = { focus: "show", blur: "hide" }, Ci[Lt + " " + se] = function(t) { Ct(t) || this[t.type === Lt ? "show" : "hide"]() }, Ci[dt] = function(t) { Ct(t) && this.show() }, Ci) };

    function Ua(t) { Ge(t) || _(t, "tabindex", "0") } var tu = { props: { allow: String, clsDragover: String, concurrent: Number, maxSize: Number, method: String, mime: String, msgInvalidMime: String, msgInvalidName: String, msgInvalidSize: String, multiple: Boolean, name: String, params: Object, type: String, url: String }, data: { allow: !1, clsDragover: "uk-dragover", concurrent: 1, maxSize: 0, method: "POST", mime: !1, msgInvalidMime: "Invalid File Type: %s", msgInvalidName: "Invalid File Name: %s", msgInvalidSize: "Invalid File Size: %s Kilobytes Max", multiple: !1, name: "files[]", params: {}, type: "", url: "", abort: N, beforeAll: N, beforeSend: N, complete: N, completeAll: N, error: N, fail: N, load: N, loadEnd: N, loadStart: N, progress: N }, events: { change: function(t) {!Y(t.target, 'input[type="file"]') || (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "") }, drop: function(t) { Ii(t); var e = t.dataTransfer;!e || !e.files || (M(this.$el, this.clsDragover), this.upload(e.files)) }, dragenter: function(t) { Ii(t) }, dragover: function(t) { Ii(t), y(this.$el, this.clsDragover) }, dragleave: function(t) { Ii(t), M(this.$el, this.clsDragover) } }, methods: { upload: function(t) { var e = this; if (!!t.length) { m(this.$el, "upload", [t]); for (var i = 0; i < t.length; i++) { if (this.maxSize && this.maxSize * 1e3 < t[i].size) { this.fail(this.msgInvalidSize.replace("%s", this.maxSize)); return } if (this.allow && !is(this.allow, t[i].name)) { this.fail(this.msgInvalidName.replace("%s", this.allow)); return } if (this.mime && !is(this.mime, t[i].type)) { this.fail(this.msgInvalidMime.replace("%s", this.mime)); return } }
                    this.multiple || (t = [t[0]]), this.beforeAll(this, t); var n = eu(t, this.concurrent),
                        r = function(s) { var o = new FormData;
                            s.forEach(function(u) { return o.append(e.name, u) }); for (var a in e.params) o.append(a, e.params[a]);
                            Qe(e.url, { data: o, method: e.method, responseType: e.type, beforeSend: function(u) { var c = u.xhr; return c.upload && A(c.upload, "progress", e.progress), ["loadStart", "load", "loadEnd", "abort"].forEach(function(l) { return A(c, l.toLowerCase(), e[l]) }), e.beforeSend(u) } }).then(function(u) { e.complete(u), n.length ? r(n.shift()) : e.completeAll(u) }, function(u) { return e.error(u) }) };
                    r(n.shift()) } } } };

    function is(t, e) { return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i")) }

    function eu(t, e) { for (var i = [], n = 0; n < t.length; n += e) { for (var r = [], s = 0; s < e; s++) r.push(t[n + s]);
            i.push(r) } return i }

    function Ii(t) { t.preventDefault(), t.stopPropagation() } var iu = Object.freeze({ __proto__: null, Countdown: fa, Filter: ga, Lightbox: Ia, LightboxPanel: Or, Notification: Aa, Parallax: za, Slider: Wa, SliderParallax: Zr, Slideshow: qa, SlideshowParallax: Zr, Sortable: Va, Tooltip: Qa, Upload: tu }); return it(iu, function(t, e) { return et.component(e, t) }), et });
/**
  shave - Shave is a javascript plugin that truncates multi-line text within a html element based on set max height
  @version v2.5.7
  @link https://github.com/dollarshaveclub/shave#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (jeffry.in)
  @license MIT
**/
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).shave = t() }(this, function() { "use strict"; return function(e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}; if (void 0 === t || isNaN(t)) throw Error("maxHeight is required"); var i = "string" == typeof e ? document.querySelectorAll(e) : e; if (i) { var o = n.character || "…",
                a = n.classname || "js-shave",
                s = "boolean" != typeof n.spaces || n.spaces,
                r = '<span class="js-shave-char">'.concat(o, "</span>"); "length" in i || (i = [i]); for (var c = 0; c < i.length; c += 1) { var l = i[c],
                    h = l.style,
                    d = l.querySelector(".".concat(a)),
                    f = void 0 === l.textContent ? "innerText" : "textContent";
                d && (l.removeChild(l.querySelector(".js-shave-char")), l[f] = l[f]); var v = l[f],
                    g = s ? v.split(" ") : v; if (!(g.length < 2)) { var u = h.height;
                    h.height = "auto"; var p = h.maxHeight; if (h.maxHeight = "none", l.offsetHeight <= t) h.height = u, h.maxHeight = p;
                    else { for (var m = g.length - 1, x = 0, y = void 0; x < m;) y = x + m + 1 >> 1, l[f] = s ? g.slice(0, y).join(" ") : g.slice(0, y), l.insertAdjacentHTML("beforeend", r), l.offsetHeight > t ? m = y - 1 : x = y;
                        l[f] = s ? g.slice(0, m).join(" ") : g.slice(0, m), l.insertAdjacentHTML("beforeend", r); var j = s ? " ".concat(g.slice(m).join(" ")) : g.slice(m),
                            H = document.createTextNode(j),
                            b = document.createElement("span");
                        b.classList.add(a), b.style.display = "none", b.appendChild(H), l.insertAdjacentElement("beforeend", b), h.height = u, h.maxHeight = p } } } } } });
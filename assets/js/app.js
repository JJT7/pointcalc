/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = []
      , r = e.document
      , i = Object.getPrototypeOf
      , o = n.slice
      , a = n.concat
      , s = n.push
      , u = n.indexOf
      , l = {}
      , c = l.toString
      , f = l.hasOwnProperty
      , p = f.toString
      , d = p.call(Object)
      , h = {}
      , g = function e(t) {
        return "function" == typeof t && "number" != typeof t.nodeType
    }
      , y = function e(t) {
        return null != t && t === t.window
    }
      , v = {
        type: !0,
        src: !0,
        noModule: !0
    };
    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e,
        n)
            for (i in v)
                n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = "3.3.1"
      , w = function(e, t) {
        return new w.fn.init(e,t)
    }
      , T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return w.each(this, e)
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    },
    w.extend = w.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || g(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t],
                    a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1,
                    o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {},
                    a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e) {
            m(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
                (r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i, o = 0, s = [];
            if (C(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    function C(e) {
        var t = !!e && "length"in e && e.length
          , n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    var E = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ae(), k = ae(), S = ae(), D = function(e, t) {
            return e === t && (f = !0),
            0
        }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]", W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", $ = new RegExp(M + "+","g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]","g"), X = new RegExp(W), U = new RegExp("^" + R + "$"), V = {
            ID: new RegExp("^#(" + R + ")"),
            CLASS: new RegExp("^\\.(" + R + ")"),
            TAG: new RegExp("^(" + R + "|[*])"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + P + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), ee = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, re = function() {
            p()
        }, ie = me(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes),
            A[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: A.length ? function(e, t) {
                    q.apply(e, H.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9;
            if (r = r || [],
            "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T)
                return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t),
            t = t || d,
            g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o)))
                                return r;
                            if (l.id === o)
                                return r.push(l),
                                r
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
                            return r.push(l),
                            r
                    } else {
                        if (f[2])
                            return L.apply(r, t.getElementsByTagName(e)),
                            r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return L.apply(r, t.getElementsByClassName(o)),
                            r
                    }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T)
                        m = t,
                        v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b),
                        s = (h = a(e)).length;
                        while (s--)
                            h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","),
                        m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (v)
                        try {
                            return L.apply(r, m.querySelectorAll(v)),
                            r
                        } catch (e) {} finally {
                            c === b && t.removeAttribute("id")
                        }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }
        function ae() {
            var e = [];
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
            return t
        }
        function se(e) {
            return e[b] = !0,
            e
        }
        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function le(e, t) {
            var n = e.split("|")
              , i = n.length;
            while (i--)
                r.attrHandle[n[i]] = t
        }
        function ce(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function de(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function he(e) {
            return se(function(t) {
                return t = +t,
                se(function(n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--)
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        n = oe.support = {},
        o = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        p = oe.setDocument = function(e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a,
            h = d.documentElement,
            g = !o(d),
            w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
            n.attributes = ue(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = ue(function(e) {
                return e.appendChild(d.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = Q.test(d.getElementsByClassName),
            n.getById = ue(function(e) {
                return h.appendChild(e).id = b,
                !d.getElementsByName || !d.getElementsByName(b).length
            }),
            n.getById ? (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            v = [],
            y = [],
            (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"),
                e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="),
                e.querySelectorAll(":checked").length || y.push(":checked"),
                e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
            }),
            ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                h.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                y.push(",.*:")
            })),
            (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
                n.disconnectedMatch = m.call(e, "*"),
                m.call(e, "[s!='']:x"),
                v.push("!=", W)
            }),
            y = y.length && new RegExp(y.join("|")),
            v = v.length && new RegExp(v.join("|")),
            t = Q.test(h.compareDocumentPosition),
            x = t || Q.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o)
                    return ce(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }
            ,
            d) : d
        }
        ,
        oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }
        ,
        oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d && p(e),
            t = t.replace(z, "='$1']"),
            n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t)))
                try {
                    var r = m.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {}
            return oe(t, d, null, [e]).length > 0
        }
        ,
        oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== d && p(e),
            x(e, t)
        }
        ,
        oe.attr = function(e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()]
              , o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }
        ,
        oe.escape = function(e) {
            return (e + "").replace(te, ne)
        }
        ,
        oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        oe.uniqueSort = function(e) {
            var t, r = [], i = 0, o = 0;
            if (f = !n.detectDuplicates,
            c = !n.sortStable && e.slice(0),
            e.sort(D),
            f) {
                while (t = e[o++])
                    t === e[o] && (i = r.push(o));
                while (i--)
                    e.splice(r[i], 1)
            }
            return c = null,
            e
        }
        ,
        i = oe.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += i(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += i(t);
            return n
        }
        ,
        (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, ee),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode, v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild],
                            a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2],
                                p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break
                                    }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                            !1 === x)
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]),
                                    p === t))
                                        break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                    r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                        var r, o = i(e, t), a = o.length;
                        while (a--)
                            e[r = O(e, o[a])] = !(n[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, n)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: se(function(e) {
                    var t = []
                      , n = []
                      , r = s(e.replace(B, "$1"));
                    return r[b] ? se(function(e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--)
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: se(function(e) {
                    return function(t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: se(function(e) {
                    return e = e.replace(Z, ee),
                    function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }),
                lang: se(function(e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e),
                    e = e.replace(Z, ee).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return Y.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = fe(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = pe(t);
        function ye() {}
        ye.prototype = r.filters = r.pseudos,
        r.setFilters = new ye,
        a = oe.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            s = e,
            u = [],
            l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                u.push(o = [])),
                n = !1,
                (i = _.exec(s)) && (n = i.shift(),
                o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }),
                s = s.slice(n.length));
                for (a in r.filter)
                    !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(),
                    o.push({
                        value: n,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        }
        ;
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function me(e, t, n) {
            var r = t.dir
              , i = t.next
              , o = i || r
              , a = n && "parentNode" === o
              , s = C++;
            return t.first ? function(t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || a)
                        return e(t, n, i);
                return !1
            }
            : function(t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    while (t = t[r])
                        if ((1 === t.nodeType || a) && e(t, n, u))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || a)
                            if (f = t[b] || (t[b] = {}),
                            c = f[t.uniqueID] || (f[t.uniqueID] = {}),
                            i && i === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s)
                                    return p[2] = l[2];
                                if (c[o] = p,
                                p[2] = e(t, n, u))
                                    return !0
                            }
                return !1
            }
        }
        function xe(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++)
                oe(e, t[r], n);
            return n
        }
        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)),
            i && !i[b] && (i = Te(i, o)),
            se(function(o, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, g = o || be(t || "*", s.nodeType ? [s] : s, []), y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u),
                r) {
                    l = we(v, d),
                    r(l, [], s, u),
                    c = l.length;
                    while (c--)
                        (f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [],
                            c = v.length;
                            while (c--)
                                (f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--)
                            (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else
                    v = we(v === a ? v.splice(h, v.length) : v),
                    i ? i(null, a, v, u) : L.apply(a, v)
            })
        }
        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function(e) {
                return e === t
            }, s, !0), f = me(function(e) {
                return O(t, e) > -1
            }, s, !0), p = [function(e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null,
                i
            }
            ]; u < o; u++)
                if (n = r.relative[e[u].type])
                    p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++)
                            if (r.relative[e[i].type])
                                break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                    }
                    p.push(n)
                }
            return xe(p)
        }
        function Ee(e, t) {
            var n = t.length > 0
              , i = e.length > 0
              , o = function(o, a, s, u, c) {
                var f, h, y, v = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, k = C.length;
                for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                    if (i && f) {
                        h = 0,
                        a || f.ownerDocument === d || (p(f),
                        s = !g);
                        while (y = e[h++])
                            if (y(f, a || d, s)) {
                                u.push(f);
                                break
                            }
                        c && (T = E)
                    }
                    n && ((f = !y && f) && v--,
                    o && x.push(f))
                }
                if (v += m,
                n && m !== v) {
                    h = 0;
                    while (y = t[h++])
                        y(x, b, a, s);
                    if (o) {
                        if (v > 0)
                            while (m--)
                                x[m] || b[m] || (b[m] = j.call(u));
                        b = we(b)
                    }
                    L.apply(u, b),
                    c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                }
                return c && (T = E,
                l = w),
                x
            };
            return n ? se(o) : o
        }
        return s = oe.compile = function(e, t) {
            var n, r = [], i = [], o = S[e + " "];
            if (!o) {
                t || (t = a(e)),
                n = t.length;
                while (n--)
                    (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e
            }
            return o
        }
        ,
        u = oe.select = function(e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
            if (n = n || [],
            1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))
                        return n;
                    p && (t = t.parentNode),
                    e = e.slice(u.shift().value.length)
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o],
                    r.relative[c = l.type])
                        break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1),
                        !(e = i.length && ve(u)))
                            return L.apply(n, i),
                            n;
                        break
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = b.split("").sort(D).join("") === b,
        n.detectDuplicates = !!f,
        p(),
        n.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }),
        ue(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && ue(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        oe
    }(e);
    w.find = E,
    w.expr = E.selectors,
    w.expr[":"] = w.expr.pseudos,
    w.uniqueSort = w.unique = E.uniqueSort,
    w.text = E.getText,
    w.isXMLDoc = E.isXML,
    w.contains = E.contains,
    w.escapeSelector = E.escape;
    var k = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && w(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , S = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , D = w.expr.match.needsContext;
    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, t, n) {
        return g(t) ? w.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function(e) {
            return u.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    w.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(w(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (w.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function(e, t, n) {
        var i, o;
        if (!e)
            return this;
        if (n = n || q,
        "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t,
                w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)),
                A.test(i[1]) && w.isPlainObject(t))
                    for (i in t)
                        g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }
    ).prototype = w.fn,
    q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/
      , O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    w.fn.extend({
        has: function(e) {
            var t = w(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return k(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return k(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return k(e, "nextSibling")
        },
        prevAll: function(e) {
            return k(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return k(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return k(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e),
            w.merge([], e.childNodes))
        }
    }, function(e, t) {
        w.fn[e] = function(n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = w.filter(r, i)),
            this.length > 1 && (O[e] || w.uniqueSort(i),
            H.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    w.Callbacks = function(e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [], a = [], s = -1, u = function() {
            for (i = i || e.once,
            r = t = !0; a.length; s = -1) {
                n = a.shift();
                while (++s < o.length)
                    !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length,
                    n = !1)
            }
            e.memory || (n = !1),
            t = !1,
            i && (o = n ? [] : "")
        }, l = {
            add: function() {
                return o && (n && !t && (s = o.length - 1,
                a.push(n)),
                function t(n) {
                    w.each(n, function(n, r) {
                        g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                    })
                }(arguments),
                n && !t && u()),
                this
            },
            remove: function() {
                return w.each(arguments, function(e, t) {
                    var n;
                    while ((n = w.inArray(t, o, n)) > -1)
                        o.splice(n, 1),
                        n <= s && s--
                }),
                this
            },
            has: function(e) {
                return e ? w.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return i = a = [],
                o = n = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return i = a = [],
                n || t || (o = n = ""),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                a.push(n),
                t || u()),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return l
    }
    ;
    function I(e) {
        return e
    }
    function W(e) {
        throw e
    }
    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , i = {
                state: function() {
                    return r
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return i.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return w.Deferred(function(t) {
                        w.each(n, function(n, r) {
                            var i = g(e[r[4]]) && e[r[4]];
                            o[r[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, r, i) {
                    var o = 0;
                    function a(t, n, r, i) {
                        return function() {
                            var s = this
                              , u = arguments
                              , l = function() {
                                var e, l;
                                if (!(t < o)) {
                                    if ((e = r.apply(s, u)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    l = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++,
                                    l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0,
                                    u = [e]),
                                    (i || n.resolveWith)(s, u))
                                }
                            }
                              , c = i ? l : function() {
                                try {
                                    l()
                                } catch (e) {
                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace),
                                    t + 1 >= o && (r !== W && (s = void 0,
                                    u = [e]),
                                    n.rejectWith(s, u))
                                }
                            }
                            ;
                            t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()),
                            e.setTimeout(c))
                        }
                    }
                    return w.Deferred(function(e) {
                        n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)),
                        n[1][3].add(a(0, e, g(t) ? t : I)),
                        n[2][3].add(a(0, e, g(r) ? r : W))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? w.extend(e, i) : i
                }
            }
              , o = {};
            return w.each(n, function(e, t) {
                var a = t[2]
                  , s = t[5];
                i[t[1]] = a.add,
                s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                a.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = a.fireWith
            }),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , i = o.call(arguments)
              , a = w.Deferred()
              , s = function(e) {
                return function(n) {
                    r[e] = this,
                    i[e] = arguments.length > 1 ? o.call(arguments) : n,
                    --t || a.resolveWith(r, i)
                }
            };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t),
            "pending" === a.state() || g(i[n] && i[n].then)))
                return a.then();
            while (n--)
                $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    w.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var F = w.Deferred();
    w.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            w.readyException(e)
        }),
        this
    }
    ,
    w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0,
            !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }),
    w.ready.then = F.then;
    function _() {
        r.removeEventListener("DOMContentLoaded", _),
        e.removeEventListener("load", _),
        w.ready()
    }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _),
    e.addEventListener("load", _));
    var z = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === x(n)) {
            i = !0;
            for (s in n)
                z(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0,
        g(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(w(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , X = /^-ms-/
      , U = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase()
    }
    function G(e) {
        return e.replace(X, "ms-").replace(U, V)
    }
    var Y = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Q() {
        this.expando = w.expando + Q.uid++
    }
    Q.uid = 1,
    Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[G(t)] = n;
            else
                for (r in t)
                    i[G(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t))in r ? [t] : t.match(M) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var J = new Q
      , K = new Q
      , Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ee = /[A-Z]/g;
    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }
    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ee, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = te(n)
                } catch (e) {}
                K.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    w.extend({
        hasData: function(e) {
            return K.hasData(e) || J.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return J.access(e, t, n)
        },
        _removeData: function(e, t) {
            J.remove(e, t)
        }
    }),
    w.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o),
                1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--)
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)),
                        ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                K.set(this, e)
            }) : z(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e)))
                        return n;
                    if (void 0 !== (n = ne(o, e)))
                        return n
                } else
                    this.each(function() {
                        K.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e)
            })
        }
    }),
    w.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = J.get(e, t),
                n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = w._queueHooks(e, t)
              , a = function() {
                w.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function() {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    w.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$","i")
      , oe = ["Top", "Right", "Bottom", "Left"]
      , ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
    }
      , se = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = a[o];
        return i
    };
    function ue(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return w.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"), c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                w.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            w.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var le = {};
    function ce(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)),
        i = w.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === i && (i = "block"),
        le[r] = i,
        i)
    }
    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style && (n = r.style.display,
            t ? ("none" === n && (i[o] = J.get(r, "display") || null,
            i[o] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none",
            J.set(r, "display", n)));
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    w.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i
      , de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , he = /^$|^module$|\/(?:java|ecma)script/i
      , ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ge.optgroup = ge.option,
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td;
    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && N(e, t) ? w.merge([e], n) : n
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o))
                    w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    w.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && w.inArray(o, r) > -1)
                i && i.push(o);
            else if (l = w.contains(o.ownerDocument, o),
            a = ye(f.appendChild(o), "script"),
            l && ve(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    !function() {
        var e = r.createDocumentFragment().appendChild(r.createElement("div"))
          , t = r.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement
      , we = /^key/
      , Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ce = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0
    }
    function ke() {
        return !1
    }
    function Se() {
        try {
            return r.activeElement
        } catch (e) {}
    }
    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n,
            n = void 0);
            for (s in t)
                De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = ke;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return w().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = w.guid++)),
        e.each(function() {
            w.event.add(this, t, i, r, n)
        })
    }
    w.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && w.find.matchesSelector(be, i),
                n.guid || (n.guid = w.guid++),
                (u = y.events) || (u = y.events = {}),
                (a = y.handle) || (a = y.handle = function(t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    d = g = (s = Ce.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = w.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = w.event.special[d] || {},
                    c = w.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && w.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    w.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (s = Ce.exec(t[l]) || [],
                    d = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = w.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t = w.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length), l = (J.get(this, "events") || {})[t.type] || [], c = w.event.special[t.type] || {};
            for (u[0] = t,
            n = 1; n < arguments.length; n++)
                u[n] = arguments[n];
            if (t.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l),
                n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem,
                    r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
                        t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a,
                        t.data = a.data,
                        void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(),
                        t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Se() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Se() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && N(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return N(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    w.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    w.Event = function(e, t) {
        if (!(this instanceof w.Event))
            return new w.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && w.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[w.expando] = !0
    }
    ,
    w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp),
    w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    w.fn.extend({
        on: function(e, t, n, r) {
            return De(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return De(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = ke),
            this.each(function() {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Ae = /<script|<style|<link/i
      , je = /checked\s*(?:[^=]|=\s*.checked.)/i
      , qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }
    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e),
            a = J.set(t, o),
            l = o.events)) {
                delete a.handle,
                a.events = {};
                for (i in l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        w.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e),
            u = w.extend({}, s),
            K.set(t, u))
        }
    }
    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y))
            return e.each(function(i) {
                var o = e.eq(i);
                v && (t[0] = y.call(this, i, o.html())),
                Re(o, t, n, r)
            });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r),
        o = i.firstChild,
        1 === i.childNodes.length && (i = o),
        o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)
                l = i,
                f !== d && (l = w.clone(l, !0, !0),
                u && w.merge(s, ye(l, "script"))),
                n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument,
                w.map(s, Oe),
                f = 0; f < u; f++)
                    l = s[f],
                    he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
        }
        return e
    }
    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || w.cleanData(ye(r)),
            r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ye(s),
                r = 0,
                i = (o = ye(e)).length; r < i; r++)
                    Me(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || ye(e),
                    a = a || ye(s),
                    r = 0,
                    i = o.length; r < i; r++)
                        Pe(o[r], a[r]);
                else
                    Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")),
            s
        },
        cleanData: function(e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }),
    w.fn.extend({
        detach: function(e) {
            return Ie(this, e, !0)
        },
        remove: function(e) {
            return Ie(this, e)
        },
        text: function(e) {
            return z(this, function(e) {
                return void 0 === e ? w.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (w.cleanData(ye(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return z(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, function(t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0),
                w(i[a])[t](n),
                s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$","i")
      , $e = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , Be = new RegExp(oe.join("|"),"i");
    !function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top,
                u = 12 === n(t.marginLeft),
                c.style.right = "60%",
                s = 36 === n(t.right),
                o = 36 === n(t.width),
                c.style.position = "absolute",
                a = 36 === c.offsetWidth || "absolute",
                be.removeChild(l),
                c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, u, l = r.createElement("div"), c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        h.clearCloneStyle = "content-box" === c.style.backgroundClip,
        w.extend(h, {
            boxSizingReliable: function() {
                return t(),
                o
            },
            pixelBoxStyles: function() {
                return t(),
                s
            },
            pixelPosition: function() {
                return t(),
                i
            },
            reliableMarginLeft: function() {
                return t(),
                u
            },
            scrollboxSize: function() {
                return t(),
                a
            }
        }))
    }();
    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)),
        !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function _e(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    var ze = /^(none|table(?!-c[ea]).+)/
      , Xe = /^--/
      , Ue = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ve = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ge = ["Webkit", "Moz", "ms"]
      , Ye = r.createElement("div").style;
    function Qe(e) {
        if (e in Ye)
            return e;
        var t = e[0].toUpperCase() + e.slice(1)
          , n = Ge.length;
        while (n--)
            if ((e = Ge[n] + t)in Ye)
                return e
    }
    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e),
        t
    }
    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
            r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)),
            "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i),
            "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))),
        u
    }
    function et(e, t, n) {
        var r = $e(e)
          , i = Fe(e, t, r)
          , o = "border-box" === w.css(e, "boxSizing", !1, r)
          , a = o;
        if (We.test(i)) {
            if (!n)
                return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]),
        ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)],
        a = !0),
        (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t), u = Xe.test(t), l = e.style;
                if (u || (t = Je(s)),
                a = w.cssHooks[t] || w.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i),
                o = "number"),
                null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")),
                h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)),
            (a = w.cssHooks[t] || w.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Fe(e, t, r)),
            "normal" === i && t in Ve && (i = Ve[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function() {
                        return et(e, t, r)
                    })
            },
            set: function(e, n, r) {
                var i, o = $e(e), a = "border-box" === w.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)),
                s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = w.css(e, t)),
                Ke(e, n, s)
            }
        }
    }),
    w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }),
    w.fn.extend({
        css: function(e, t) {
            return z(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e,t,n,r,i)
    }
    w.Tween = tt,
    tt.prototype = {
        constructor: tt,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || w.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : tt.propHooks._default.set(this),
            this
        }
    },
    tt.prototype.init.prototype = tt.prototype,
    tt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    w.fx = tt.prototype.init,
    w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval),
        w.fx.tick())
    }
    function st() {
        return e.setTimeout(function() {
            nt = void 0
        }),
        nt = Date.now()
    }
    function ut(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
        s = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || s()
        }
        ),
        a.unqueued++,
        p.always(function() {
            p.always(function() {
                a.unqueued--,
                w.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r],
            it.test(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r])
                        continue;
                    g = !0
                }
                d[r] = y && y[r] || w.style(e, r)
            }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
            null == (l = y && y.display) && (l = J.get(e, "display")),
            "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0),
            l = e.style.display || l,
            c = w.css(e, "display"),
            fe([e]))),
            ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
                h.display = l
            }),
            null == l && (c = h.display,
            l = "none" === c ? "" : c)),
            h.display = "inline-block")),
            n.overflow && (h.overflow = "hidden",
            p.always(function() {
                h.overflow = n.overflow[0],
                h.overflowX = n.overflow[1],
                h.overflowY = n.overflow[2]
            })),
            u = !1;
            for (r in d)
                u || (y ? "hidden"in y && (g = y.hidden) : y = J.access(e, "fxshow", {
                    display: l
                }),
                o && (y.hidden = !g),
                g && fe([e], !0),
                p.done(function() {
                    g || fe([e]),
                    J.remove(e, "fxshow");
                    for (r in d)
                        w.style(e, r, d[r])
                })),
                u = lt(g ? y[r] : 0, r, p),
                r in y || (y[r] = u.start,
                g && (u.end = u.start,
                u.start = 0))
        }
    }
    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = G(n),
            i = t[r],
            o = e[n],
            Array.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            (a = w.cssHooks[r]) && "expand"in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    function pt(e, t, n) {
        var r, i, o = 0, a = pt.prefilters.length, s = w.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                l.tweens[o].run(r);
            return s.notifyWith(e, [l, r, n]),
            r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]),
            s.resolveWith(e, [l]),
            !1)
        }, l = s.promise({
            elem: e,
            props: w.extend({}, t),
            opts: w.extend(!0, {
                specialEasing: {},
                easing: w.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: nt || st(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]),
                s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++)
            if (r = pt.prefilters[o].call(l, e, c, l.opts))
                return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                r;
        return w.map(c, lt, l),
        g(l.opts.start) && l.opts.start.call(e, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    w.Animation = w.extend(pt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ie.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            g(e) ? (t = e,
            e = ["*"]) : e = e.match(M);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                pt.tweeners[n] = pt.tweeners[n] || [],
                pt.tweeners[n].unshift(t)
        },
        prefilters: [ct],
        prefilter: function(e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
        }
    }),
    w.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            g(r.old) && r.old.call(this),
            r.queue && w.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    w.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = w.isEmptyObject(e)
              , o = w.speed(t, n, r)
              , a = function() {
                var t = pt(this, w.extend({}, e), o);
                (i || J.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = w.timers
                  , a = J.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && ot.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                !t && n || w.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                w.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    w.each(["toggle", "show", "hide"], function(e, t) {
        var n = w.fn[t];
        w.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
        }
    }),
    w.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        w.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    w.timers = [],
    w.fx.tick = function() {
        var e, t = 0, n = w.timers;
        for (nt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(),
        nt = void 0
    }
    ,
    w.fx.timer = function(e) {
        w.timers.push(e),
        w.fx.start()
    }
    ,
    w.fx.interval = 13,
    w.fx.start = function() {
        rt || (rt = !0,
        at())
    }
    ,
    w.fx.stop = function() {
        rt = null
    }
    ,
    w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    w.fn.delay = function(t, n) {
        return t = w.fx ? w.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var e = r.createElement("input")
          , t = r.createElement("select").appendChild(r.createElement("option"));
        e.type = "checkbox",
        h.checkOn = "" !== e.value,
        h.optSelected = t.selected,
        (e = r.createElement("input")).value = "t",
        e.type = "radio",
        h.radioValue = "t" === e.value
    }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function(e, t) {
            return z(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        }
    }),
    w.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)),
                void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(M);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    dt = {
        set: function(e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a],
            ht[a] = i,
            i = null != n(e, t, r) ? a : null,
            ht[a] = o),
            i
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i
      , yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function(e, t) {
            return z(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w.propFix[e] || e]
            })
        }
    }),
    w.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t,
                i = w.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    h.optSelected || (w.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    });
    function vt(e) {
        return (e.match(M) || []).join(" ")
    }
    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
    }
    w.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e))
                return this.each(function(t) {
                    w(this).addClass(e.call(this, t, mt(this)))
                });
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e))
                return this.each(function(t) {
                    w(this).removeClass(e.call(this, t, mt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n),
                    r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            while (r.indexOf(" " + o + " ") > -1)
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if (r) {
                    i = 0,
                    o = w(this),
                    a = xt(e);
                    while (t = a[i++])
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else
                    void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = g(e),
                    this.each(function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                if (i)
                    return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }),
    w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = w.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = w.inArray(w(e).val(), t) > -1
            }
        },
        h.checkOn || (w.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    h.focusin = "onfocusin"in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/
      , Tt = function(e) {
        e.stopPropagation()
    };
    w.extend(w.event, {
        trigger: function(t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [i || r], m = f.call(t, "type") ? t.type : t, x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r,
            3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(),
            x.sort()),
            c = m.indexOf(":") < 0 && "on" + m,
            t = t[w.expando] ? t : new w.Event(m,"object" == typeof t && t),
            t.isTrigger = o ? 2 : 3,
            t.namespace = x.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : w.makeArray(n, [t]),
            d = w.event.special[m] || {},
            o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m,
                    wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode)
                        v.push(s),
                        u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped())
                    h = s,
                    t.type = a > 1 ? l : d.bindType || m,
                    (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n),
                    (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n),
                    !1 === t.result && t.preventDefault());
                return t.type = m,
                o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null),
                w.event.triggered = m,
                t.isPropagationStopped() && h.addEventListener(m, Tt),
                i[m](),
                t.isPropagationStopped() && h.removeEventListener(m, Tt),
                w.event.triggered = void 0,
                u && (i[c] = u)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }),
    w.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return w.event.trigger(e, t, n, !0)
        }
    }),
    h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = J.access(r, t);
                i || r.addEventListener(e, n, !0),
                J.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0),
                J.remove(r, t))
            }
        }
    });
    var Ct = e.location
      , Et = Date.now()
      , kt = /\?/;
    w.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t),
        n
    }
    ;
    var St = /\[\]$/
      , Dt = /\r?\n/g
      , Nt = /^(?:submit|button|image|reset|file)$/i
      , At = /^(?:input|select|textarea|keygen)/i;
    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            w.each(t, function(t, i) {
                n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== x(t))
            r(e, t);
        else
            for (i in t)
                jt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = g(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e))
            w.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                jt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var qt = /%20/g
      , Lt = /#.*$/
      , Ht = /([?&])_=[^&]*/
      , Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Mt = /^(?:GET|HEAD)$/
      , Rt = /^\/\//
      , It = {}
      , Wt = {}
      , $t = "*/".concat("*")
      , Bt = r.createElement("a");
    Bt.href = Ct.href;
    function Ft(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(M) || [];
            if (g(n))
                while (r = o[i++])
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function _t(e, t, n, r) {
        var i = {}
          , o = e === Wt;
        function a(s) {
            var u;
            return i[s] = !0,
            w.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                a(l),
                !1)
            }),
            u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }
    function zt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r),
        e
    }
    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents, u = e.dataTypes;
        while ("*" === u[0])
            u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o)
            return o !== u[0] && u.unshift(o),
            n[o]
    }
    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            u = o,
            o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n), g = h.context || h, y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event, v = w.Deferred(), m = w.Callbacks("once memory"), x = h.statusCode || {}, b = {}, T = {}, C = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!s) {
                            s = {};
                            while (t = Ot.exec(a))
                                s[t[1].toLowerCase()] = t[2]
                        }
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return c ? a : null
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e,
                    b[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (c)
                            E.always(e[E.status]);
                        else
                            for (t in e)
                                x[t] = [x[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || C;
                    return i && i.abort(t),
                    k(0, t),
                    this
                }
            };
            if (v.promise(E),
            h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""],
            null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url,
                    l.href = l.href,
                    h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)),
            _t(It, h, n, E),
            c)
                return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Mt.test(h.type),
            o = h.url.replace(Lt, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length),
            h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (o = o.replace(Ht, "$1"),
            d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d),
            h.url = o + d),
            h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]),
            w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType),
            E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers)
                E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
                return E.abort();
            if (C = "abort",
            m.add(h.complete),
            E.done(h.success),
            E.fail(h.error),
            i = _t(Wt, h, n, E)) {
                if (E.readyState = 1,
                f && y.trigger("ajaxSend", [E, h]),
                c)
                    return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1,
                    i.send(b, k)
                } catch (e) {
                    if (c)
                        throw e;
                    k(-1, e)
                }
            } else
                k(-1, "No Transport");
            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0,
                u && e.clearTimeout(u),
                i = void 0,
                a = s || "",
                E.readyState = t > 0 ? 4 : 0,
                l = t >= 200 && t < 300 || 304 === t,
                r && (b = Xt(h, E, r)),
                b = Ut(h, b, E, l),
                l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T),
                (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
                204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state,
                p = b.data,
                l = !(d = b.error))) : (d = C,
                !t && C || (C = "error",
                t < 0 && (t = 0))),
                E.status = t,
                E.statusText = (n || C) + "",
                l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
                E.statusCode(x),
                x = void 0,
                f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
                m.fireWith(g, [E, C]),
                f && (y.trigger("ajaxComplete", [E, h]),
                --w.active || w.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return w.get(e, void 0, t, "script")
        }
    }),
    w.each(["get", "post"], function(e, t) {
        w[t] = function(e, n, r, i) {
            return g(n) && (i = i || r,
            r = n,
            n = void 0),
            w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }),
    w._evalUrl = function(e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    w.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])),
            t = w(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = w(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    w.expr.pseudos.hidden = function(e) {
        return !w.expr.pseudos.visible(e)
    }
    ,
    w.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    w.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Vt = {
        0: 200,
        1223: 204
    }
      , Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials"in Gt,
    h.ajax = Gt = !!Gt,
    w.ajaxTransport(function(t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain)
            return {
                send: function(i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i)
                        s.setRequestHeader(a, i[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    r = s.onerror = s.ontimeout = n("error"),
                    void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && r()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    w.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w.globalEval(e),
                e
            }
        }
    }),
    w.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    w.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = w("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    r.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Yt = []
      , Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return this[e] = !0,
            e
        }
    }),
    w.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return a || w.error(i + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[i],
            e[i] = function() {
                a = arguments
            }
            ,
            r.always(function() {
                void 0 === o ? w(e).removeProp(i) : e[i] = o,
                t[i] && (t.jsonpCallback = n.jsonpCallback,
                Yt.push(i)),
                a && g(o) && o(a[0]),
                a = o = void 0
            }),
            "script"
    }),
    h.createHTMLDocument = function() {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    w.parseHTML = function(e, t, n) {
        if ("string" != typeof e)
            return [];
        "boolean" == typeof t && (n = t,
        t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href,
        t.head.appendChild(i)) : t = r),
        o = A.exec(e),
        a = !n && [],
        o ? [t.createElement(o[1])] : (o = xe([e], t, a),
        a && a.length && w(a).remove(),
        w.merge([], o.childNodes))
    }
    ,
    w.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)),
        e = e.slice(0, s)),
        g(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        a.length > 0 && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    w.expr.pseudos.animated = function(e) {
        return w.grep(w.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    w.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, "position"), f = w(e), p = {};
            "static" === c && (e.style.position = "relative"),
            s = f.offset(),
            o = w.css(e, "top"),
            u = w.css(e, "left"),
            (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            g(t) && (t = t.call(e, n, w.extend({}, s))),
            null != t.top && (p.top = t.top - s.top + a),
            null != t.left && (p.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, p) : f.css(p)
        }
    },
    w.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    w.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0];
            if (r)
                return r.getClientRects().length ? (t = r.getBoundingClientRect(),
                n = r.ownerDocument.defaultView,
                {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === w.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0),
                    i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position"))
                    e = e.offsetParent;
                return e || be
            })
        }
    }),
    w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function(r) {
            return z(this, function(e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
                    return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }),
    w.each(["top", "left"], function(e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function(e, n) {
            if (n)
                return n = Fe(e, t),
                We.test(n) ? w(e).position()[t] + "px" : n
        })
    }),
    w.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            w.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i)
                  , s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function(t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }),
    w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        w.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    w.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    w.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        g(e))
            return r = o.call(arguments, 2),
            i = function() {
                return e.apply(t || this, r.concat(o.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || w.guid++,
            i
    }
    ,
    w.holdReady = function(e) {
        e ? w.readyWait++ : w.ready(!0)
    }
    ,
    w.isArray = Array.isArray,
    w.parseJSON = JSON.parse,
    w.nodeName = N,
    w.isFunction = g,
    w.isWindow = y,
    w.camelCase = G,
    w.type = x,
    w.now = Date.now,
    w.isNumeric = function(e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return w
    });
    var Jt = e.jQuery
      , Kt = e.$;
    return w.noConflict = function(t) {
        return e.$ === w && (e.$ = Kt),
        t && e.jQuery === w && (e.jQuery = Jt),
        w
    }
    ,
    t || (e.jQuery = e.$ = w),
    w
});
/* Licensed under the SpreadsheetConverter 2017-02-16*/
"use strict";
var ssc = ssc || {};
ssc.formBinder = function() {
    return {
        bind: function(a, b) {
            var c;
            try {
                if (c = $("#" + a),
                c.is('input:not(":button,:checkbox,:radio,:file"), textarea') || c.is("select")) {
                    if (c.val(b),
                    "none" == c.css("display") && void 0 != c.attr("data-widgettype")) {
                        var d = c.attr("data-widgettype");
                        "datepicker" == d ? c.datepicker("update", b) : "rating" == d ? c.rating("update", b) : "slider" == d && c.slider("setValue", parseFloat(b))
                    }
                } else
                    c.is("input:checkbox") ? c.prop("checked", "boolean" == typeof b && b || "string" == typeof b && "on" == b) : $("input[name=" + a + "]").is("input:radio") ? $('input[name="' + a + '"][value="' + b + '"]').prop("checked", !0) : c.is("input:file");
                return c
            } catch (a) {}
        },
        isNewValue: function(a, b) {
            var c;
            try {
                return c = $("#" + a),
                c.is('input:not(":button,:checkbox,:radio,:file"), textarea') || c.is("select") ? c.val() != b : c.is("input:checkbox") ? c.prop("checked") != ("boolean" == typeof b && b) || "string" == typeof b && "on" == b : $("input[name=" + a + "]").is("input:radio") ? 1 != $('input[name="' + a + '"][value="' + b + '"]').prop("checked") : (c.is("input:file") && (b = JSON.parse(b),
                b.length >= 0 && (c.parents("td").find(".uploading").find("ul").empty(),
                c.data("files", b)),
                $.each(b, function(a, b) {
                    var d = $("<li></li>");
                    c.parents("td").find(".uploading").find("ul").append(d),
                    d.fileUploader({
                        file: {
                            name: b.file
                        }
                    })
                }),
                b.length > 0 ? (c.closest("div").hide(),
                c.parents("td").find(".uploading").show()) : (c.closest("div").show(),
                c.parents("td").find(".uploading").hide())),
                !1)
            } catch (a) {}
        }
    }
}();
equalheight = function(t) {
    var e, i = 0, h = 0, n = new Array;
    $(t).each(function() {
        if (e = $(this),
        $(e).height("auto"),
        topPostion = e.position().top,
        h != topPostion) {
            for (currentDiv = 0; currentDiv < n.length; currentDiv++)
                i > 0 && n[currentDiv].height(i);
            n.length = 0,
            h = topPostion,
            i = e.height(),
            n.push(e)
        } else
            n.push(e),
            i = i < e.height() ? e.height() : i;
        for (currentDiv = 0; currentDiv < n.length; currentDiv++)
            i > 0 && n[currentDiv].height(i)
    })
}
,
$(window).on("load", function() {
    equalheight(ssc.active_sheet_selector)
}),
$(window).resize(function() {
    equalheight(ssc.active_sheet_selector)
});
/*!Copyright (C) 2002-2018 Framtidsforum I&M AB | SpreadsheetConverter.com*/
/*!
 * ssc.formstorage - v2.0.0
 */
"use strict";
!function() {
    var e, t, n, o;
    !function() {
        var r = {}
          , i = {};
        e = function(e, t, n) {
            r[e] = {
                deps: t,
                callback: n
            }
        }
        ,
        o = n = t = function(e) {
            if (o._eak_seen = r,
            i[e])
                return i[e];
            if (i[e] = {},
            !r[e])
                throw new Error("Could not find module " + e);
            for (var n, a = r[e], s = a.deps, c = a.callback, l = [], u = 0, f = s.length; f > u; u++)
                l.push("exports" === s[u] ? n = {} : t(function(t) {
                    if ("." !== t.charAt(0))
                        return t;
                    for (var n = t.split("/"), o = e.split("/").slice(0, -1), r = 0, i = n.length; i > r; r++) {
                        var a = n[r];
                        if (".." === a)
                            o.pop();
                        else {
                            if ("." === a)
                                continue;
                            o.push(a)
                        }
                    }
                    return o.join("/")
                }(s[u])));
            var d = c.apply(this, l);
            return i[e] = n || d
        }
    }(),
    e("promise/all", ["./utils", "exports"], function(e, t) {
        function n(e) {
            var t = this;
            if (!o(e))
                throw new TypeError("You must pass an array to all.");
            return new t(function(t, n) {
                function o(e, n) {
                    a[e] = n,
                    0 == --s && t(a)
                }
                var i, a = [], s = e.length;
                0 === s && t([]);
                for (var c = 0; c < e.length; c++)
                    i = e[c],
                    i && r(i.then) ? i.then(function(e) {
                        return function(t) {
                            o(e, t)
                        }
                    }(c), n) : o(c, i)
            }
            )
        }
        var o = e.isArray
          , r = e.isFunction;
        t.all = n
    }),
    e("promise/asap", ["exports"], function(e) {
        function t() {
            for (var e = 0; e < s.length; e++) {
                var t = s[e];
                (0,
                t[0])(t[1])
            }
            s = []
        }
        function n(e, t) {
            1 === s.push([e, t]) && o()
        }
        var o, r = "undefined" != typeof window ? window : {}, i = r.MutationObserver || r.WebKitMutationObserver, a = "undefined" != typeof global ? global : void 0 === this ? window : this, s = [];
        o = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? function() {
            return function() {
                process.nextTick(t)
            }
        }() : i ? function() {
            var e = 0
              , n = new i(t)
              , o = document.createTextNode("");
            return n.observe(o, {
                characterData: !0
            }),
            function() {
                o.data = e = ++e % 2
            }
        }() : function() {
            return function() {
                a.setTimeout(t, 1)
            }
        }(),
        e.asap = n
    }),
    e("promise/config", ["exports"], function(e) {
        function t(e, t) {
            return 2 !== arguments.length ? n[e] : void (n[e] = t)
        }
        var n = {
            instrument: !1
        };
        e.config = n,
        e.configure = t
    }),
    e("promise/polyfill", ["./promise", "./utils", "exports"], function(e, t, n) {
        function o() {
            var e;
            "Promise"in (e = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self) && "resolve"in e.Promise && "reject"in e.Promise && "all"in e.Promise && "race"in e.Promise && function() {
                var t;
                return new e.Promise(function(e) {
                    t = e
                }
                ),
                i(t)
            }() || (e.Promise = r)
        }
        var r = e.Promise
          , i = t.isFunction;
        n.polyfill = o
    }),
    e("promise/promise", ["./config", "./utils", "./all", "./race", "./resolve", "./reject", "./asap", "exports"], function(e, t, n, o, r, i, a, s) {
        function c(e) {
            if (!S(e))
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
            if (!(this instanceof c))
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            this._subscribers = [],
            l(e, this)
        }
        function l(e, t) {
            function n(e) {
                p(t, e)
            }
            function o(e) {
                v(t, e)
            }
            try {
                e(n, o)
            } catch (e) {
                o(e)
            }
        }
        function u(e, t, n, o) {
            var r, i, a, s, c = S(n);
            if (c)
                try {
                    r = n(o),
                    a = !0
                } catch (e) {
                    s = !0,
                    i = e
                }
            else
                r = o,
                a = !0;
            m(t, r) || (c && a ? p(t, r) : s ? v(t, i) : e === C ? p(t, r) : e === D && v(t, r))
        }
        function f(e, t, n, o) {
            var r = e._subscribers
              , i = r.length;
            r[i] = t,
            r[i + C] = n,
            r[i + D] = o
        }
        function d(e, t) {
            for (var n, o, r = e._subscribers, i = e._detail, a = 0; a < r.length; a += 3)
                n = r[a],
                o = r[a + t],
                u(t, n, o, i);
            e._subscribers = null
        }
        function m(e, t) {
            var n, o = null;
            try {
                if (e === t)
                    throw new TypeError("A promises callback cannot return that same promise.");
                if (w(t) && (o = t.then,
                S(o)))
                    return o.call(t, function(o) {
                        return !!n || (n = !0,
                        void (t !== o ? p(e, o) : h(e, o)))
                    }, function(t) {
                        return !!n || (n = !0,
                        void v(e, t))
                    }),
                    !0
            } catch (t) {
                return !!n || (v(e, t),
                !0)
            }
            return !1
        }
        function p(e, t) {
            e === t ? h(e, t) : m(e, t) || h(e, t)
        }
        function h(e, t) {
            e._state === O && (e._state = A,
            e._detail = t,
            y.async(g, e))
        }
        function v(e, t) {
            e._state === O && (e._state = A,
            e._detail = t,
            y.async(b, e))
        }
        function g(e) {
            d(e, e._state = C)
        }
        function b(e) {
            d(e, e._state = D)
        }
        var y = e.config
          , w = (e.configure,
        t.objectOrFunction)
          , S = t.isFunction
          , _ = (t.now,
        n.all)
          , x = o.race
          , I = r.resolve
          , k = i.reject
          , E = a.asap;
        y.async = E;
        var O = void 0
          , A = 0
          , C = 1
          , D = 2;
        c.prototype = {
            constructor: c,
            _state: void 0,
            _detail: void 0,
            _subscribers: void 0,
            then: function(e, t) {
                var n = this
                  , o = new this.constructor(function() {}
                );
                if (this._state) {
                    var r = arguments;
                    y.async(function() {
                        u(n._state, o, r[n._state - 1], n._detail)
                    })
                } else
                    f(this, o, e, t);
                return o
            },
            catch: function(e) {
                return this.then(null, e)
            }
        },
        c.all = _,
        c.race = x,
        c.resolve = I,
        c.reject = k,
        s.Promise = c
    }),
    e("promise/race", ["./utils", "exports"], function(e, t) {
        function n(e) {
            var t = this;
            if (!o(e))
                throw new TypeError("You must pass an array to race.");
            return new t(function(t, n) {
                for (var o, r = 0; r < e.length; r++)
                    o = e[r],
                    o && "function" == typeof o.then ? o.then(t, n) : t(o)
            }
            )
        }
        var o = e.isArray;
        t.race = n
    }),
    e("promise/reject", ["exports"], function(e) {
        function t(e) {
            return new this(function(t, n) {
                n(e)
            }
            )
        }
        e.reject = t
    }),
    e("promise/resolve", ["exports"], function(e) {
        function t(e) {
            return e && "object" == typeof e && e.constructor === this ? e : new this(function(t) {
                t(e)
            }
            )
        }
        e.resolve = t
    }),
    e("promise/utils", ["exports"], function(e) {
        function t(e) {
            return n(e) || "object" == typeof e && null !== e
        }
        function n(e) {
            return "function" == typeof e
        }
        function o(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        var r = Date.now || function() {
            return (new Date).getTime()
        }
        ;
        e.objectOrFunction = t,
        e.isFunction = n,
        e.isArray = o,
        e.now = r
    }),
    t("promise/polyfill").polyfill()
}(),
function() {
    function e(e) {
        var t = this
          , n = {
            db: null
        };
        if (e)
            for (var o in e)
                n[o] = e[o];
        return new d(function(e, o) {
            var r = m.open(n.name, n.version);
            r.onerror = function() {
                o(r.error)
            }
            ,
            r.onupgradeneeded = function() {
                r.result.createObjectStore(n.storeName)
            }
            ,
            r.onsuccess = function() {
                n.db = r.result,
                t._dbInfo = n,
                e()
            }
        }
        )
    }
    function t(e, t) {
        var n = this;
        "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."),
        e = String(e));
        var o = new d(function(t, o) {
            n.ready().then(function() {
                var r = n._dbInfo
                  , i = r.db.transaction(r.storeName, "readonly").objectStore(r.storeName)
                  , a = i.get(e);
                a.onsuccess = function() {
                    var e = a.result;
                    void 0 === e && (e = null),
                    t(e)
                }
                ,
                a.onerror = function() {
                    o(a.error)
                }
            }).catch(o)
        }
        );
        return u(o, t),
        o
    }
    function n(e, t) {
        var n = this
          , o = new d(function(t, o) {
            n.ready().then(function() {
                var r = n._dbInfo
                  , i = r.db.transaction(r.storeName, "readonly").objectStore(r.storeName)
                  , a = i.openCursor();
                a.onsuccess = function() {
                    var n = a.result;
                    if (n) {
                        var o = e(n.value, n.key);
                        void 0 !== o ? t(o) : n.continue()
                    } else
                        t()
                }
                ,
                a.onerror = function() {
                    o(a.error)
                }
            }).catch(o)
        }
        );
        return u(o, t),
        o
    }
    function o(e, t, n) {
        var o = this;
        "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."),
        e = String(e));
        var r = new d(function(n, r) {
            o.ready().then(function() {
                var i = o._dbInfo
                  , a = i.db.transaction(i.storeName, "readwrite").objectStore(i.storeName);
                null === t && (t = void 0);
                var s = a.put(t, e);
                s.onsuccess = function() {
                    void 0 === t && (t = null),
                    n(t)
                }
                ,
                s.onerror = function() {
                    r(s.error)
                }
            }).catch(r)
        }
        );
        return u(r, n),
        r
    }
    function r(e, t) {
        var n = this;
        "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."),
        e = String(e));
        var o = new d(function(t, o) {
            n.ready().then(function() {
                var r = n._dbInfo
                  , i = r.db.transaction(r.storeName, "readwrite").objectStore(r.storeName)
                  , a = i.delete(e);
                a.onsuccess = function() {
                    t()
                }
                ,
                a.onerror = function() {
                    o(a.error)
                }
                ,
                a.onabort = function(e) {
                    var t = e.target.error;
                    "QuotaExceededError" === t && o(t)
                }
            }).catch(o)
        }
        );
        return u(o, t),
        o
    }
    function i(e) {
        var t = this
          , n = new d(function(e, n) {
            t.ready().then(function() {
                var o = t._dbInfo
                  , r = o.db.transaction(o.storeName, "readwrite").objectStore(o.storeName)
                  , i = r.clear();
                i.onsuccess = function() {
                    e()
                }
                ,
                i.onerror = function() {
                    n(i.error)
                }
            }).catch(n)
        }
        );
        return u(n, e),
        n
    }
    function a(e) {
        var t = this
          , n = new d(function(e, n) {
            t.ready().then(function() {
                var o = t._dbInfo
                  , r = o.db.transaction(o.storeName, "readonly").objectStore(o.storeName)
                  , i = r.count();
                i.onsuccess = function() {
                    e(i.result)
                }
                ,
                i.onerror = function() {
                    n(i.error)
                }
            }).catch(n)
        }
        );
        return l(n, e),
        n
    }
    function s(e, t) {
        var n = this
          , o = new d(function(t, o) {
            return 0 > e ? void t(null) : void n.ready().then(function() {
                var r = n._dbInfo
                  , i = r.db.transaction(r.storeName, "readonly").objectStore(r.storeName)
                  , a = !1
                  , s = i.openCursor();
                s.onsuccess = function() {
                    var n = s.result;
                    return n ? void (0 === e ? t(n.key) : a ? t(n.key) : (a = !0,
                    n.advance(e))) : void t(null)
                }
                ,
                s.onerror = function() {
                    o(s.error)
                }
            }).catch(o)
        }
        );
        return l(o, t),
        o
    }
    function c(e) {
        var t = this
          , n = new d(function(e, n) {
            t.ready().then(function() {
                var o = t._dbInfo
                  , r = o.db.transaction(o.storeName, "readonly").objectStore(o.storeName)
                  , i = r.openCursor()
                  , a = [];
                i.onsuccess = function() {
                    var t = i.result;
                    return t ? (a.push(t.key),
                    void t.continue()) : void e(a)
                }
                ,
                i.onerror = function() {
                    n(i.error)
                }
            }).catch(n)
        }
        );
        return l(n, e),
        n
    }
    function l(e, t) {
        t && e.then(function(e) {
            t(null, e)
        }, function(e) {
            t(e)
        })
    }
    function u(e, t) {
        t && e.then(function(e) {
            f(t, e)
        }, function(e) {
            t(e)
        })
    }
    function f(e, t) {
        return e ? setTimeout(function() {
            return e(null, t)
        }, 0) : void 0
    }
    var d = "undefined" != typeof module && module.exports ? require("promise") : this.Promise
      , m = m || this.indexedDB || this.webkitIndexedDB || this.mozIndexedDB || this.OIndexedDB || this.msIndexedDB;
    if (m) {
        var p = {
            _driver: "asyncStorage",
            _initStorage: e,
            iterate: n,
            getItem: t,
            setItem: o,
            removeItem: r,
            clear: i,
            length: a,
            key: s,
            keys: c
        };
        "function" == typeof define && define.amd ? define("asyncStorage", function() {
            return p
        }) : "undefined" != typeof module && module.exports ? module.exports = p : this.asyncStorage = p
    }
}
.call(window),
function() {
    function e(e) {
        var t = this
          , n = {};
        if (e)
            for (var o in e)
                n[o] = e[o];
        return n.keyPrefix = n.name + "/",
        t._dbInfo = n,
        m.resolve()
    }
    function t(e) {
        var t = this
          , n = new m(function(e, n) {
            t.ready().then(function() {
                for (var n = t._dbInfo.keyPrefix, o = p.length - 1; o >= 0; o--) {
                    var r = p.key(o);
                    0 === r.indexOf(n) && p.removeItem(r)
                }
                e()
            }).catch(n)
        }
        );
        return d(n, e),
        n
    }
    function n(e, t) {
        var n = this;
        "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."),
        e = String(e));
        var o = new m(function(t, o) {
            n.ready().then(function() {
                try {
                    var r = n._dbInfo
                      , i = p.getItem(r.keyPrefix + e);
                    i && (i = c(i)),
                    t(i)
                } catch (e) {
                    o(e)
                }
            }).catch(o)
        }
        );
        return d(o, t),
        o
    }
    function o(e, t) {
        var n = this
          , o = new m(function(t, o) {
            n.ready().then(function() {
                try {
                    for (var r = n._dbInfo.keyPrefix, i = r.length, a = p.length, s = 0; a > s; s++) {
                        var l = p.key(s)
                          , u = p.getItem(l);
                        if (u && (u = c(u)),
                        void 0 !== (u = e(u, l.substring(i))))
                            return void t(u)
                    }
                    t()
                } catch (e) {
                    o(e)
                }
            }).catch(o)
        }
        );
        return d(o, t),
        o
    }
    function r(e, t) {
        var n = this
          , o = new m(function(t, o) {
            n.ready().then(function() {
                var o, r = n._dbInfo;
                try {
                    o = p.key(e)
                } catch (e) {
                    o = null
                }
                o && (o = o.substring(r.keyPrefix.length)),
                t(o)
            }).catch(o)
        }
        );
        return d(o, t),
        o
    }
    function i(e) {
        var t = this
          , n = new m(function(e, n) {
            t.ready().then(function() {
                for (var n = t._dbInfo, o = p.length, r = [], i = 0; o > i; i++)
                    0 === p.key(i).indexOf(n.keyPrefix) && r.push(p.key(i).substring(n.keyPrefix.length));
                e(r)
            }).catch(n)
        }
        );
        return d(n, e),
        n
    }
    function a(e) {
        var t = this
          , n = new m(function(e, n) {
            t.keys().then(function(t) {
                e(t.length)
            }).catch(n)
        }
        );
        return d(n, e),
        n
    }
    function s(e, t) {
        var n = this;
        "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."),
        e = String(e));
        var o = new m(function(t, o) {
            n.ready().then(function() {
                var o = n._dbInfo;
                p.removeItem(o.keyPrefix + e),
                t()
            }).catch(o)
        }
        );
        return d(o, t),
        o
    }
    function c(e) {
        if (e.substring(0, v) !== h)
            return JSON.parse(e);
        for (var t = e.substring(A), n = e.substring(v, A), o = new ArrayBuffer(2 * t.length), r = new Uint16Array(o), i = t.length - 1; i >= 0; i--)
            r[i] = t.charCodeAt(i);
        switch (n) {
        case g:
            return o;
        case b:
            return new Blob([o]);
        case y:
            return new Int8Array(o);
        case w:
            return new Uint8Array(o);
        case S:
            return new Uint8ClampedArray(o);
        case _:
            return new Int16Array(o);
        case I:
            return new Uint16Array(o);
        case x:
            return new Int32Array(o);
        case k:
            return new Uint32Array(o);
        case E:
            return new Float32Array(o);
        case O:
            return new Float64Array(o);
        default:
            throw new Error("Unkown type: " + n)
        }
    }
    function l(e) {
        var t = ""
          , n = new Uint16Array(e);
        try {
            t = String.fromCharCode.apply(null, n)
        } catch (e) {
            for (var o = 0; o < n.length; o++)
                t += String.fromCharCode(n[o])
        }
        return t
    }
    function u(e, t) {
        var n = "";
        if (e && (n = e.toString()),
        e && ("[object ArrayBuffer]" === e.toString() || e.buffer && "[object ArrayBuffer]" === e.buffer.toString())) {
            var o, r = h;
            e instanceof ArrayBuffer ? (o = e,
            r += g) : (o = e.buffer,
            "[object Int8Array]" === n ? r += y : "[object Uint8Array]" === n ? r += w : "[object Uint8ClampedArray]" === n ? r += S : "[object Int16Array]" === n ? r += _ : "[object Uint16Array]" === n ? r += I : "[object Int32Array]" === n ? r += x : "[object Uint32Array]" === n ? r += k : "[object Float32Array]" === n ? r += E : "[object Float64Array]" === n ? r += O : t(new Error("Failed to get type for BinaryArray"))),
            t(r + l(o))
        } else if ("[object Blob]" === n) {
            var i = new FileReader;
            i.onload = function() {
                var e = l(this.result);
                t(h + b + e)
            }
            ,
            i.readAsArrayBuffer(e)
        } else
            try {
                t(JSON.stringify(e))
            } catch (n) {
                window.console.error("Couldn't convert value into a JSON string: ", e),
                t(n)
            }
    }
    function f(e, t, n) {
        var o = this;
        "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."),
        e = String(e));
        var r = new m(function(n, r) {
            o.ready().then(function() {
                void 0 === t && (t = null);
                var i = t;
                u(t, function(t, a) {
                    if (a)
                        r(a);
                    else {
                        try {
                            var s = o._dbInfo;
                            p.setItem(s.keyPrefix + e, t)
                        } catch (e) {
                            ("QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && r(e)
                        }
                        n(i)
                    }
                })
            }).catch(r)
        }
        );
        return d(r, n),
        r
    }
    function d(e, t) {
        t && e.then(function(e) {
            t(null, e)
        }, function(e) {
            t(e)
        })
    }
    var m = "undefined" != typeof module && module.exports ? require("promise") : this.Promise
      , p = null;
    try {
        if (!(this.localStorage && "setItem"in this.localStorage))
            return;
        p = this.localStorage
    } catch (e) {
        return
    }
    var h = "__lfsc__:"
      , v = h.length
      , g = "arbf"
      , b = "blob"
      , y = "si08"
      , w = "ui08"
      , S = "uic8"
      , _ = "si16"
      , x = "si32"
      , I = "ur16"
      , k = "ui32"
      , E = "fl32"
      , O = "fl64"
      , A = v + g.length
      , C = {
        _driver: "localStorageWrapper",
        _initStorage: e,
        iterate: o,
        getItem: n,
        setItem: f,
        removeItem: s,
        clear: t,
        length: a,
        key: r,
        keys: i
    };
    "function" == typeof define && define.amd ? define("localStorageWrapper", function() {
        return C
    }) : "undefined" != typeof module && module.exports ? module.exports = C : this.localStorageWrapper = C
}
.call(window),
function() {
    function e(e) {
        var t = this
          , n = {
            db: null
        };
        if (e)
            for (var o in e)
                n[o] = "string" != typeof e[o] ? e[o].toString() : e[o];
        return new p(function(o, r) {
            try {
                n.db = h(n.name, String(n.version), n.description, n.size)
            } catch (n) {
                return t.setDriver("localStorageWrapper").then(function() {
                    return t._initStorage(e)
                }).then(o).catch(r)
            }
            n.db.transaction(function(e) {
                e.executeSql("CREATE TABLE IF NOT EXISTS " + n.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], function() {
                    t._dbInfo = n,
                    o()
                }, function(e, t) {
                    r(t)
                })
            })
        }
        )
    }
    function t(e, t) {
        var n = this;
        "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."),
        e = String(e));
        var o = new p(function(t, o) {
            n.ready().then(function() {
                var r = n._dbInfo;
                r.db.transaction(function(n) {
                    n.executeSql("SELECT * FROM " + r.storeName + " WHERE key = ? LIMIT 1", [e], function(e, n) {
                        var o = n.rows.length ? n.rows.item(0).value : null;
                        o && (o = u(o)),
                        t(o)
                    }, function(e, t) {
                        o(t)
                    })
                })
            }).catch(o)
        }
        );
        return d(o, t),
        o
    }
    function n(e, t) {
        var n = this
          , o = new p(function(t, o) {
            n.ready().then(function() {
                var r = n._dbInfo;
                r.db.transaction(function(n) {
                    n.executeSql("SELECT * FROM " + r.storeName, [], function(n, o) {
                        for (var r = o.rows, i = r.length, a = 0; i > a; a++) {
                            var s = r.item(a)
                              , c = s.value;
                            if (c && (c = u(c)),
                            void 0 !== (c = e(c, s.key)))
                                return void t(c)
                        }
                        t()
                    }, function(e, t) {
                        o(t)
                    })
                })
            }).catch(o)
        }
        );
        return d(o, t),
        o
    }
    function o(e, t, n) {
        var o = this;
        "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."),
        e = String(e));
        var r = new p(function(n, r) {
            o.ready().then(function() {
                void 0 === t && (t = null);
                var i = t;
                f(t, function(t, a) {
                    if (a)
                        r(a);
                    else {
                        var s = o._dbInfo;
                        s.db.transaction(function(o) {
                            o.executeSql("INSERT OR REPLACE INTO " + s.storeName + " (key, value) VALUES (?, ?)", [e, t], function() {
                                n(i)
                            }, function(e, t) {
                                r(t)
                            })
                        }, function(e) {
                            e.code === e.QUOTA_ERR && r(e)
                        })
                    }
                })
            }).catch(r)
        }
        );
        return d(r, n),
        r
    }
    function r(e, t) {
        var n = this;
        "string" != typeof e && (window.console.warn(e + " used as a key, but it is not a string."),
        e = String(e));
        var o = new p(function(t, o) {
            n.ready().then(function() {
                var r = n._dbInfo;
                r.db.transaction(function(n) {
                    n.executeSql("DELETE FROM " + r.storeName + " WHERE key = ?", [e], function() {
                        t()
                    }, function(e, t) {
                        o(t)
                    })
                })
            }).catch(o)
        }
        );
        return d(o, t),
        o
    }
    function i(e) {
        var t = this
          , n = new p(function(e, n) {
            t.ready().then(function() {
                var o = t._dbInfo;
                o.db.transaction(function(t) {
                    t.executeSql("DELETE FROM " + o.storeName, [], function() {
                        e()
                    }, function(e, t) {
                        n(t)
                    })
                })
            }).catch(n)
        }
        );
        return d(n, e),
        n
    }
    function a(e) {
        var t = this
          , n = new p(function(e, n) {
            t.ready().then(function() {
                var o = t._dbInfo;
                o.db.transaction(function(t) {
                    t.executeSql("SELECT COUNT(key) as c FROM " + o.storeName, [], function(t, n) {
                        var o = n.rows.item(0).c;
                        e(o)
                    }, function(e, t) {
                        n(t)
                    })
                })
            }).catch(n)
        }
        );
        return d(n, e),
        n
    }
    function s(e, t) {
        var n = this
          , o = new p(function(t, o) {
            n.ready().then(function() {
                var r = n._dbInfo;
                r.db.transaction(function(n) {
                    n.executeSql("SELECT key FROM " + r.storeName + " WHERE id = ? LIMIT 1", [e + 1], function(e, n) {
                        var o = n.rows.length ? n.rows.item(0).key : null;
                        t(o)
                    }, function(e, t) {
                        o(t)
                    })
                })
            }).catch(o)
        }
        );
        return d(o, t),
        o
    }
    function c(e) {
        var t = this
          , n = new p(function(e, n) {
            t.ready().then(function() {
                var o = t._dbInfo;
                o.db.transaction(function(t) {
                    t.executeSql("SELECT key FROM " + o.storeName, [], function(t, n) {
                        for (var o = [], r = 0; r < n.rows.length; r++)
                            o.push(n.rows.item(r).key);
                        e(o)
                    }, function(e, t) {
                        n(t)
                    })
                })
            }).catch(n)
        }
        );
        return d(n, e),
        n
    }
    function l(e) {
        var t, n = new Uint8Array(e), o = "";
        for (t = 0; t < n.length; t += 3)
            o += m[n[t] >> 2],
            o += m[(3 & n[t]) << 4 | n[t + 1] >> 4],
            o += m[(15 & n[t + 1]) << 2 | n[t + 2] >> 6],
            o += m[63 & n[t + 2]];
        return n.length % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : n.length % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="),
        o
    }
    function u(e) {
        if (e.substring(0, g) !== v)
            return JSON.parse(e);
        var t, n, o, r, i, a = e.substring(C), s = e.substring(g, C), c = .75 * a.length, l = a.length, u = 0;
        "=" === a[a.length - 1] && (c--,
        "=" === a[a.length - 2] && c--);
        var f = new ArrayBuffer(c)
          , d = new Uint8Array(f);
        for (t = 0; l > t; t += 4)
            n = m.indexOf(a[t]),
            o = m.indexOf(a[t + 1]),
            r = m.indexOf(a[t + 2]),
            i = m.indexOf(a[t + 3]),
            d[u++] = n << 2 | o >> 4,
            d[u++] = (15 & o) << 4 | r >> 2,
            d[u++] = (3 & r) << 6 | 63 & i;
        switch (s) {
        case b:
            return f;
        case y:
            return new Blob([f]);
        case w:
            return new Int8Array(f);
        case S:
            return new Uint8Array(f);
        case _:
            return new Uint8ClampedArray(f);
        case x:
            return new Int16Array(f);
        case k:
            return new Uint16Array(f);
        case I:
            return new Int32Array(f);
        case E:
            return new Uint32Array(f);
        case O:
            return new Float32Array(f);
        case A:
            return new Float64Array(f);
        default:
            throw new Error("Unkown type: " + s)
        }
    }
    function f(e, t) {
        var n = "";
        if (e && (n = e.toString()),
        e && ("[object ArrayBuffer]" === e.toString() || e.buffer && "[object ArrayBuffer]" === e.buffer.toString())) {
            var o, r = v;
            e instanceof ArrayBuffer ? (o = e,
            r += b) : (o = e.buffer,
            "[object Int8Array]" === n ? r += w : "[object Uint8Array]" === n ? r += S : "[object Uint8ClampedArray]" === n ? r += _ : "[object Int16Array]" === n ? r += x : "[object Uint16Array]" === n ? r += k : "[object Int32Array]" === n ? r += I : "[object Uint32Array]" === n ? r += E : "[object Float32Array]" === n ? r += O : "[object Float64Array]" === n ? r += A : t(new Error("Failed to get type for BinaryArray"))),
            t(r + l(o))
        } else if ("[object Blob]" === n) {
            var i = new FileReader;
            i.onload = function() {
                var e = l(this.result);
                t(v + y + e)
            }
            ,
            i.readAsArrayBuffer(e)
        } else
            try {
                t(JSON.stringify(e))
            } catch (n) {
                window.console.error("Couldn't convert value into a JSON string: ", e),
                t(null, n)
            }
    }
    function d(e, t) {
        t && e.then(function(e) {
            t(null, e)
        }, function(e) {
            t(e)
        })
    }
    var m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
      , p = "undefined" != typeof module && module.exports ? require("promise") : this.Promise
      , h = this.openDatabase
      , v = "__lfsc__:"
      , g = v.length
      , b = "arbf"
      , y = "blob"
      , w = "si08"
      , S = "ui08"
      , _ = "uic8"
      , x = "si16"
      , I = "si32"
      , k = "ur16"
      , E = "ui32"
      , O = "fl32"
      , A = "fl64"
      , C = g + b.length;
    if (h) {
        var D = {
            _driver: "webSQLStorage",
            _initStorage: e,
            iterate: n,
            getItem: t,
            setItem: o,
            removeItem: r,
            clear: i,
            length: a,
            key: s,
            keys: c
        };
        "function" == typeof define && define.amd ? define("webSQLStorage", function() {
            return D
        }) : "undefined" != typeof module && module.exports ? module.exports = D : this.webSQLStorage = D
    }
}
.call(window),
function() {
    function e(e, t) {
        e[t] = function() {
            var n = arguments;
            return e.ready().then(function() {
                return e[t].apply(e, n)
            })
        }
    }
    function t() {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            if (t)
                for (var n in t)
                    t.hasOwnProperty(n) && (arguments[0][n] = m(t[n]) ? t[n].slice() : t[n])
        }
        return arguments[0]
    }
    function n(e) {
        for (var t in a)
            if (a.hasOwnProperty(t) && a[t] === e)
                return !0;
        return !1
    }
    function o(n) {
        this._config = t({}, u, n),
        this._driverSet = null,
        this._ready = !1,
        this._dbInfo = null;
        for (var o = 0; o < c.length; o++)
            e(this, c[o]);
        this.setDriver(this._config.driver)
    }
    var r = "undefined" != typeof module && module.exports ? require("promise") : this.Promise
      , i = {}
      , a = {
        INDEXEDDB: "asyncStorage",
        LOCALSTORAGE: "localStorageWrapper",
        WEBSQL: "webSQLStorage"
    }
      , s = [a.INDEXEDDB, a.WEBSQL, a.LOCALSTORAGE]
      , c = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"]
      , l = {
        DEFINE: 1,
        EXPORT: 2,
        WINDOW: 3
    }
      , u = {
        description: "",
        driver: s.slice(),
        name: "localforage",
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
    }
      , f = l.WINDOW;
    "function" == typeof define && define.amd ? f = l.DEFINE : "undefined" != typeof module && module.exports && (f = l.EXPORT);
    var d = function(e) {
        var t = t || e.indexedDB || e.webkitIndexedDB || e.mozIndexedDB || e.OIndexedDB || e.msIndexedDB
          , n = {};
        return n[a.WEBSQL] = !!e.openDatabase,
        n[a.INDEXEDDB] = !!function() {
            if (void 0 !== e.openDatabase && e.navigator && e.navigator.userAgent && /Safari/.test(e.navigator.userAgent) && !/Chrome/.test(e.navigator.userAgent))
                return !1;
            try {
                return t && "function" == typeof t.open && void 0 !== e.IDBKeyRange
            } catch (e) {
                return !1
            }
        }(),
        n[a.LOCALSTORAGE] = !!function() {
            try {
                return e.localStorage && "setItem"in e.localStorage && e.localStorage.setItem
            } catch (e) {
                return !1
            }
        }(),
        n
    }(this)
      , m = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
      , p = this;
    o.prototype.INDEXEDDB = a.INDEXEDDB,
    o.prototype.LOCALSTORAGE = a.LOCALSTORAGE,
    o.prototype.WEBSQL = a.WEBSQL,
    o.prototype.config = function(e) {
        if ("object" == typeof e) {
            if (this._ready)
                return new Error("Can't call config() after localforage has been used.");
            for (var t in e)
                "storeName" === t && (e[t] = e[t].replace(/\W/g, "_")),
                this._config[t] = e[t];
            return "driver"in e && e.driver && this.setDriver(this._config.driver),
            !0
        }
        return "string" == typeof e ? this._config[e] : this._config
    }
    ,
    o.prototype.defineDriver = function(e, t, o) {
        var a = new r(function(t, o) {
            try {
                var a = e._driver
                  , s = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver")
                  , l = new Error("Custom driver name already in use: " + e._driver);
                if (!e._driver)
                    return void o(s);
                if (n(e._driver))
                    return void o(l);
                for (var u = c.concat("_initStorage"), f = 0; f < u.length; f++) {
                    var m = u[f];
                    if (!m || !e[m] || "function" != typeof e[m])
                        return void o(s)
                }
                var p = r.resolve(!0);
                "_support"in e && (p = e._support && "function" == typeof e._support ? e._support() : r.resolve(!!e._support)),
                p.then(function(n) {
                    d[a] = n,
                    i[a] = e,
                    t()
                }, o)
            } catch (e) {
                o(e)
            }
        }
        );
        return a.then(t, o),
        a
    }
    ,
    o.prototype.driver = function() {
        return this._driver || null
    }
    ,
    o.prototype.ready = function(e) {
        var t = this
          , n = new r(function(e, n) {
            t._driverSet.then(function() {
                null === t._ready && (t._ready = t._initStorage(t._config)),
                t._ready.then(e, n)
            }).catch(n)
        }
        );
        return n.then(e, e),
        n
    }
    ,
    o.prototype.setDriver = function(e, t, o) {
        function a() {
            s._config.driver = s.driver()
        }
        var s = this;
        return "string" == typeof e && (e = [e]),
        this._driverSet = new r(function(t, o) {
            var a = s._getFirstSupportedDriver(e)
              , c = new Error("No available storage method found.");
            if (!a)
                return s._driverSet = r.reject(c),
                void o(c);
            if (s._dbInfo = null,
            s._ready = null,
            n(a)) {
                if (f === l.DEFINE)
                    return void require([a], function(e) {
                        s._extend(e),
                        t()
                    });
                if (f === l.EXPORT) {
                    var u;
                    switch (a) {
                    case s.INDEXEDDB:
                        u = require("./drivers/indexeddb");
                        break;
                    case s.LOCALSTORAGE:
                        u = require("./drivers/localstorage");
                        break;
                    case s.WEBSQL:
                        u = require("./drivers/websql")
                    }
                    s._extend(u)
                } else
                    s._extend(p[a])
            } else {
                if (!i[a])
                    return s._driverSet = r.reject(c),
                    void o(c);
                s._extend(i[a])
            }
            t()
        }
        ),
        this._driverSet.then(a, a),
        this._driverSet.then(t, o),
        this._driverSet
    }
    ,
    o.prototype.supports = function(e) {
        return !!d[e]
    }
    ,
    o.prototype._extend = function(e) {
        t(this, e)
    }
    ,
    o.prototype._getFirstSupportedDriver = function(e) {
        if (e && m(e))
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (this.supports(n))
                    return n
            }
        return null
    }
    ,
    o.prototype.createInstance = function(e) {
        return new o(e)
    }
    ;
    var h = new o;
    f === l.DEFINE ? define("localforage", function() {
        return h
    }) : f === l.EXPORT ? module.exports = h : this.localforage = h
}
.call(window),
$.fn.serializeObject = function(e) {
    var t = {}
      , n = this.serializeArray();
    return $.each(n, function() {
        if (-1 == this.name.indexOf("xl_")) {
            var n = (e && this.value ? ssc.utils.replaceSpecialCharAndEncode(this.value) : this.value) || "";
            t[this.name] ? (t[this.name].push || (t[this.name] = [t[this.name]]),
            t[this.name].push(n)) : t[this.name] = n
        }
    }),
    t
}
;
var ssc = ssc || {};
ssc.utils = function() {
    return {
        checkIfMSIE: function() {
            var e = window.navigator.userAgent
              , t = e.indexOf("MSIE ")
              , n = e.indexOf(".NET CLR");
            return !(-1 === t && -1 === n)
        },
        checkIfFileURI: function() {
            return !(-1 === document.location.protocol.indexOf("file:"))
        },
        checkIfBrowserSupportStorageSystem: function() {
            return !(this.checkIfMSIE() && this.checkIfFileURI())
        },
        size: function(e) {
            return JSON.stringify(e).length
        },
        replaceSpecialCharAndEncode: function(e) {
            return encodeURIComponent(e.replace(/[\\]/g, "\\\\").replace(/[\"]/g, '\\"').replace(/[\/]/g, "\\/").replace(/[\b]/g, "\\b").replace(/[\f]/g, "\\f").replace(/[\n]/g, "\\n").replace(/[\r]/g, "\\r").replace(/[\t]/g, "\\t"))
        },
        getJsonPageMeta: function() {
            var e = {};
            return $("input[id^=xl_]").each(function() {
                e[$(this).attr("name")] = ssc.utils.replaceSpecialCharAndEncode($(this).val())
            }),
            e
        }
    }
}();
var ssc = ssc || {};
ssc.formSubmitModule = function() {
    var e = {
        url_echo_server: "https://share.spreadsheetconverter.com/echo/",
        url_submit_server: "https://share.spreadsheetconverter.com/submit/",
        url_submit_multiform_server: "",
        before_onlineformsubmit_callback: void 0,
        after_onlineformsubmit_callback: void 0,
        after_offlineformsubmit_callback: void 0,
        getJsonFormData_callback: void 0
    }
      , t = function(e, t) {
        $.ajax({
            cache: !1,
            crossDomain: !0,
            type: "GET",
            dataType: "text",
            timeout: 8e3,
            url: ssc.formSubmitModule.options.url_echo_server,
            success: function(t) {
                e(t)
            },
            error: function(e, n, o) {
                t(n)
            }
        })
    }
      , n = function(e, t, n) {
        $.ajax({
            type: "POST",
            crossDomain: !0,
            contentType: "application/json; charset=utf-8",
            url: ssc.formSubmitModule.options.url_submit_server,
            data: JSON.stringify(e),
            success: function(e) {
                t(e)
            },
            error: function(e, t, o) {
                n()
            }
        })
    };
    return {
        callIfOnlineElse: t,
        submitThisForm: function(e) {
            var t = $.extend(!0, ssc.formSubmitModule.getJsonFormData(), ssc.utils.getJsonPageMeta());
            return ssc.utils.size(t) > 1e6 ? e() : n(t, function(e) {
                ssc.formSubmitModule.options.after_onlineformsubmit_callback("success", e)
            }, function(e) {
                ssc.formSubmitModule.options.after_onlineformsubmit_callback("error", "The submit has failed. Please try submitting the form after a while.")
            }),
            !1
        },
        submitOnceMultiForm: function() {
            function e(n) {
                if (o.length > n) {
                    var i = o[n];
                    localforage.getItem(i, function(i, s) {
                        if (!i) {
                            var l = ssc.utils.size(s);
                            a += l,
                            a <= 9e5 && n < 10 ? (c.push(o[n]),
                            r.push(s),
                            ++n,
                            o.length > n ? e(n) : t()) : t()
                        }
                    })
                }
            }
            function t() {
                var t = {};
                t.forms = r;
                var l = $.extend(!0, t, ssc.utils.getJsonPageMeta());
                n(l, function(t) {
                    function n(l) {
                        if (c.length > l) {
                            var u = c[l];
                            localforage.removeItem(u, function(u) {
                                u || (o.splice(0, 1),
                                0 === o.length && ssc.formSubmitModule.options.after_offlineformsubmit_callback && ssc.formSubmitModule.options.after_offlineformsubmit_callback("success", t),
                                ssc.Global.formStorage.formStorageUpdateCallback(--s, "delete"),
                                ++l,
                                c.length > l ? n(l) : (a = i,
                                c = new Array,
                                r = new Array,
                                e(0)))
                            })
                        }
                    }
                    n(0)
                }, function() {
                    ssc.formSubmitModule.options.after_offlineformsubmit_callback && ssc.formSubmitModule.options.after_offlineformsubmit_callback("error", status)
                })
            }
            var o = new Array
              , r = new Array
              , i = ssc.utils.size(ssc.utils.getJsonPageMeta())
              , a = i
              , s = 0
              , c = new Array;
            localforage.iterate(function(e, t, n) {
                o.push(t)
            }, function() {
                var t = o.indexOf("this_form_");
                t > -1 && o.splice(t, 1),
                o.sort(function(e, t) {
                    var n = e.length
                      , o = t.length;
                    return e.substring(8, n) - t.substring(8, o)
                }),
                s = o.length,
                ssc.Global.formStorage.formStorageUpdateCallback(s, "submit"),
                e(0)
            })
        },
        getJsonFormData: void 0,
        config: function(t) {
            this.options = this.options ? $.extend({}, this.options, t) : $.extend({}, e, t),
            this.getJsonFormData = this.options.getJsonFormData_callback
        }
    }
}();
var ssc = ssc || {};
ssc.FormStorageClass = function() {
    function e(e) {
        var t = void 0 !== e && e.hasOwnProperty("dbName") ? e.dbName : "workbook"
          , n = void 0 !== e && e.hasOwnProperty("offlineStoreUpdate") ? e.offlineStoreUpdate : void 0
          , o = void 0 !== e && e.hasOwnProperty("callback_AfterOfflineStore") ? e.callback_AfterOfflineStore : void 0;
        return localforage.config({
            driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
            name: t,
            version: 1,
            storeName: t
        }),
        {
            storeThisForm: function(e, t) {
                localforage.setItem("this_form_", e, t)
            },
            setDirtyField: function(e, t) {
                localforage.getItem("dirty_fields_", function(n, o) {
                    o = o || [],
                    -1 == o.indexOf(e) && (o.push(e),
                    localforage.setItem("dirty_fields_", o, t))
                })
            },
            checkIfFieldIsDirty: function(e, t) {
                localforage.getItem("dirty_fields_", function(n, o) {
                    o = o || [];
                    var r = o.indexOf(e) > -1;
                    t(r)
                })
            },
            formStorageUpdateCallback: n,
            saveFormAsOfflineSubmitInStorage: function(e) {
                var t = ssc.utils.size(ssc.utils.getJsonPageMeta());
                t += ssc.utils.size(e),
                t > 9e5 ? "undefined" !== o && o("error", "The form is larger than the maximum size and cannot be saved.") : this.asyncGetSavedFormsCount(function(t) {
                    var r = "_submit_1";
                    t >= 0 && (r = "_submit_" + ++t),
                    function(t) {
                        localforage.setItem(r, e, function(e, r) {
                            t > 0 && ("undefined" !== n && n(t, "save"),
                            "undefined" !== o && o("success"))
                        })
                    }(t)
                })
            },
            restoreThisFormDataFromStorage: function(e) {
                localforage.getItem("this_form_", function(t, n) {
                    if (null !== n && "object" == typeof n)
                        for (var o in n)
                            n.hasOwnProperty(o) && ssc.formBinder.bind(o, n[o]);
                    e("")
                })
            },
            asyncReadEachSavedForm: function(e) {
                try {
                    localforage.keys(function(t, n) {
                        if (n.length > 0)
                            for (var o = 0; o < n.length; o++)
                                "_" === n[o].charAt(0) && function(t) {
                                    localforage.getItem(t, function(n, o) {
                                        e(t, o)
                                    })
                                }(n[o])
                    })
                } catch (e) {}
            },
            asyncGetSavedFormsCount: function(e) {
                localforage.keys(function(t, n) {
                    var o = 0;
                    if (n.length > 0)
                        for (var r = 0; r < n.length; r++)
                            "_" === n[r].charAt(0) && o++;
                    e(o)
                })
            },
            asyncGetSavedFormsKeys: function(e) {
                localforage.keys(function(t, n) {
                    var o = new Array;
                    if (n.length > 0)
                        for (var r = 0; r < n.length; r++)
                            "_" === n[r].charAt(0) && o.push(n[r]);
                    e(o)
                })
            },
            asyncRemoveSavedFormByKey: function(e, t) {
                localforage.removeItem(e, function(e) {
                    "undefined" !== n && localforage.keys(function(e, t) {
                        n(t.length - 1, "delete")
                    })
                })
            },
            asyncRemoveAllSavedForms: function(e) {
                this.asyncGetSavedFormsKeys(function(t) {
                    for (var n in t)
                        n < t.length - 1 ? localforage.removeItem(t[n], function(e) {}) : (localforage.removeItem(t[n], function(e) {}),
                        e())
                })
            }
        }
    }
    var t;
    return {
        getInstance: function(n) {
            return t || (t = e(n)),
            t
        }
    }
}(),
String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
    return t = t || 0,
    this.indexOf(e, t) === t
}
),
function(e) {
    e(["jquery"], function(e) {
        return function() {
            function t(e, t, n) {
                return p({
                    type: S.error,
                    iconClass: h().iconClasses.error,
                    message: e,
                    optionsOverride: n,
                    title: t
                })
            }
            function n(t, n) {
                return t || (t = h()),
                g = e("#" + t.containerId),
                g.length ? g : (n && (g = f(t)),
                g)
            }
            function o(e, t, n) {
                return p({
                    type: S.info,
                    iconClass: h().iconClasses.info,
                    message: e,
                    optionsOverride: n,
                    title: t
                })
            }
            function r(e) {
                b = e
            }
            function i(e, t, n) {
                return p({
                    type: S.success,
                    iconClass: h().iconClasses.success,
                    message: e,
                    optionsOverride: n,
                    title: t
                })
            }
            function a(e, t, n) {
                return p({
                    type: S.warning,
                    iconClass: h().iconClasses.warning,
                    message: e,
                    optionsOverride: n,
                    title: t
                })
            }
            function s(e) {
                var t = h();
                g || n(t),
                u(e, t) || l(t)
            }
            function c(t) {
                var o = h();
                return g || n(o),
                t && 0 === e(":focus", t).length ? void v(t) : void (g.children().length && g.remove())
            }
            function l(t) {
                for (var n = g.children(), o = n.length - 1; o >= 0; o--)
                    u(e(n[o]), t)
            }
            function u(t, n) {
                return !(!t || 0 !== e(":focus", t).length) && (t[n.hideMethod]({
                    duration: n.hideDuration,
                    easing: n.hideEasing,
                    complete: function() {
                        v(t)
                    }
                }),
                !0)
            }
            function f(t) {
                return g = e("<div/>").attr("id", t.containerId).addClass(t.positionClass).attr("aria-live", "polite").attr("role", "alert"),
                g.appendTo(e(t.target)),
                g
            }
            function d() {
                return {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: void 0,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    target: "body",
                    closeHtml: '<button type="button">&times;</button>',
                    newestOnTop: !0,
                    preventDuplicates: !1,
                    progressBar: !1
                }
            }
            function m(e) {
                b && b(e)
            }
            function p(t) {
                function o(t) {
                    return !e(":focus", u).length || t ? (clearTimeout(S.intervalId),
                    u[s.hideMethod]({
                        duration: s.hideDuration,
                        easing: s.hideEasing,
                        complete: function() {
                            v(u),
                            s.onHidden && "hidden" !== _.state && s.onHidden(),
                            _.state = "hidden",
                            _.endTime = new Date,
                            m(_)
                        }
                    })) : void 0
                }
                function r() {
                    (s.timeOut > 0 || s.extendedTimeOut > 0) && (l = setTimeout(o, s.extendedTimeOut),
                    S.maxHideTime = parseFloat(s.extendedTimeOut),
                    S.hideEta = (new Date).getTime() + S.maxHideTime)
                }
                function i() {
                    clearTimeout(l),
                    S.hideEta = 0,
                    u.stop(!0, !0)[s.showMethod]({
                        duration: s.showDuration,
                        easing: s.showEasing
                    })
                }
                function a() {
                    var e = (S.hideEta - (new Date).getTime()) / S.maxHideTime * 100;
                    p.width(e + "%")
                }
                var s = h()
                  , c = t.iconClass || s.iconClass;
                if (void 0 !== t.optionsOverride && (s = e.extend(s, t.optionsOverride),
                c = t.optionsOverride.iconClass || c),
                s.preventDuplicates) {
                    if (t.message === y)
                        return;
                    y = t.message
                }
                w++,
                g = n(s, !0);
                var l = null
                  , u = e("<div/>")
                  , f = e("<div/>")
                  , d = e("<div/>")
                  , p = e("<div/>")
                  , b = e(s.closeHtml)
                  , S = {
                    intervalId: null,
                    hideEta: null,
                    maxHideTime: null
                }
                  , _ = {
                    toastId: w,
                    state: "visible",
                    startTime: new Date,
                    options: s,
                    map: t
                };
                return t.iconClass && u.addClass(s.toastClass).addClass(c),
                t.title && (f.append(t.title).addClass(s.titleClass),
                u.append(f)),
                t.message && (d.append(t.message).addClass(s.messageClass),
                u.append(d)),
                s.closeButton && (b.addClass("toast-close-button").attr("role", "button"),
                u.prepend(b)),
                s.progressBar && (p.addClass("toast-progress"),
                u.prepend(p)),
                u.hide(),
                s.newestOnTop ? g.prepend(u) : g.append(u),
                u[s.showMethod]({
                    duration: s.showDuration,
                    easing: s.showEasing,
                    complete: s.onShown
                }),
                s.timeOut > 0 && (l = setTimeout(o, s.timeOut),
                S.maxHideTime = parseFloat(s.timeOut),
                S.hideEta = (new Date).getTime() + S.maxHideTime,
                s.progressBar && (S.intervalId = setInterval(a, 10))),
                u.hover(i, r),
                !s.onclick && s.tapToDismiss && u.click(o),
                s.closeButton && b && b.click(function(e) {
                    e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && !0 !== e.cancelBubble && (e.cancelBubble = !0),
                    o(!0)
                }),
                s.onclick && u.click(function() {
                    s.onclick(),
                    o()
                }),
                m(_),
                s.debug && console,
                u
            }
            function h() {
                return e.extend({}, d(), _.options)
            }
            function v(e) {
                g || (g = n()),
                e.is(":visible") || (e.remove(),
                e = null,
                0 === g.children().length && (g.remove(),
                y = void 0))
            }
            var g, b, y, w = 0, S = {
                error: "error",
                info: "info",
                success: "success",
                warning: "warning"
            }, _ = {
                clear: s,
                remove: c,
                error: t,
                getContainer: n,
                info: o,
                options: {},
                subscribe: r,
                success: i,
                version: "2.1.0",
                warning: a
            };
            return _
        }()
    })
}("function" == typeof define && define.amd ? define : function(e, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
}
),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    if (!e.support.cors && e.ajaxTransport && window.XDomainRequest) {
        var t = /^https?:\/\//i
          , n = /^get|post$/i
          , o = new RegExp("^" + location.protocol,"i");
        e.ajaxTransport("* text html xml json", function(r, i, a) {
            if (r.crossDomain && r.async && n.test(r.type) && t.test(r.url) && o.test(r.url)) {
                var s = null;
                return {
                    send: function(t, n) {
                        var o = ""
                          , a = (i.dataType || "").toLowerCase();
                        s = new XDomainRequest,
                        /^\d+$/.test(i.timeout) && (s.timeout = i.timeout),
                        s.ontimeout = function() {
                            n(500, "timeout")
                        }
                        ,
                        s.onload = function() {
                            var t = "Content-Length: " + s.responseText.length + "\r\nContent-Type: " + s.contentType
                              , o = {
                                code: 200,
                                message: "success"
                            }
                              , r = {
                                text: s.responseText
                            };
                            try {
                                if ("html" === a || /text\/html/i.test(s.contentType))
                                    r.html = s.responseText;
                                else if ("json" === a || "text" !== a && /\/json/i.test(s.contentType))
                                    try {
                                        r.json = e.parseJSON(s.responseText)
                                    } catch (e) {
                                        o.code = 500,
                                        o.message = "parseerror"
                                    }
                                else if ("xml" === a || "text" !== a && /\/xml/i.test(s.contentType)) {
                                    var i = new ActiveXObject("Microsoft.XMLDOM");
                                    i.async = !1;
                                    try {
                                        i.loadXML(s.responseText)
                                    } catch (e) {
                                        i = void 0
                                    }
                                    if (!i || !i.documentElement || i.getElementsByTagName("parsererror").length)
                                        throw o.code = 500,
                                        o.message = "parseerror",
                                        "Invalid XML: " + s.responseText;
                                    r.xml = i
                                }
                            } catch (e) {
                                throw e
                            } finally {
                                n(o.code, o.message, r, t)
                            }
                        }
                        ,
                        s.onprogress = function() {}
                        ,
                        s.onerror = function() {
                            n(500, "error", {
                                text: s.responseText
                            })
                        }
                        ,
                        i.data && (o = "string" === e.type(i.data) ? i.data : e.param(i.data)),
                        s.open(r.type, r.url),
                        s.send(o)
                    },
                    abort: function() {
                        s && s.abort()
                    }
                }
            }
        })
    }
}),
function(e, t) {
    "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Spinner = t()
}(this, function() {
    function e(e, t) {
        var n, o = document.createElement(e || "div");
        for (n in t)
            o[n] = t[n];
        return o
    }
    function t(e) {
        for (var t = 1, n = arguments.length; n > t; t++)
            e.appendChild(arguments[t]);
        return e
    }
    function n(e, t, n, o) {
        var r = ["opacity", t, ~~(100 * e), n, o].join("-")
          , i = .01 + n / o * 100
          , a = Math.max(1 - (1 - e) / t * (100 - i), e)
          , s = c.substring(0, c.indexOf("Animation")).toLowerCase()
          , u = s && "-" + s + "-" || "";
        return f[r] || (l.insertRule("@" + u + "keyframes " + r + "{0%{opacity:" + a + "}" + i + "%{opacity:" + e + "}" + (i + .01) + "%{opacity:1}" + (i + t) % 100 + "%{opacity:" + e + "}100%{opacity:" + a + "}}", l.cssRules.length),
        f[r] = 1),
        r
    }
    function o(e, t) {
        var n, o, r = e.style;
        if (t = t.charAt(0).toUpperCase() + t.slice(1),
        void 0 !== r[t])
            return t;
        for (o = 0; o < u.length; o++)
            if (n = u[o] + t,
            void 0 !== r[n])
                return n
    }
    function r(e, t) {
        for (var n in t)
            e.style[o(e, n) || n] = t[n];
        return e
    }
    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
                void 0 === e[o] && (e[o] = n[o])
        }
        return e
    }
    function a(e, t) {
        return "string" == typeof e ? e : e[t % e.length]
    }
    function s(e) {
        this.opts = i(e || {}, s.defaults, d)
    }
    var c, l, u = ["webkit", "Moz", "ms", "O"], f = {}, d = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        scale: 1,
        corners: 1,
        color: "#000",
        opacity: .25,
        rotate: 0,
        direction: 1,
        speed: 1,
        trail: 100,
        fps: 20,
        zIndex: 2e9,
        className: "spinner",
        top: "50%",
        left: "50%",
        shadow: !1,
        hwaccel: !1,
        position: "absolute"
    };
    if (s.defaults = {},
    i(s.prototype, {
        spin: function(t) {
            this.stop();
            var n = this
              , o = n.opts
              , i = n.el = e(null, {
                className: o.className
            });
            if (r(i, {
                position: o.position,
                width: 0,
                zIndex: o.zIndex,
                left: o.left,
                top: o.top
            }),
            t && t.insertBefore(i, t.firstChild || null),
            i.setAttribute("role", "progressbar"),
            n.lines(i, n.opts),
            !c) {
                var a, s = 0, l = (o.lines - 1) * (1 - o.direction) / 2, u = o.fps, f = u / o.speed, d = (1 - o.opacity) / (f * o.trail / 100), m = f / o.lines;
                !function e() {
                    s++;
                    for (var t = 0; t < o.lines; t++)
                        a = Math.max(1 - (s + (o.lines - t) * m) % f * d, o.opacity),
                        n.opacity(i, t * o.direction + l, a, o);
                    n.timeout = n.el && setTimeout(e, ~~(1e3 / u))
                }()
            }
            return n
        },
        stop: function() {
            var e = this.el;
            return e && (clearTimeout(this.timeout),
            e.parentNode && e.parentNode.removeChild(e),
            this.el = void 0),
            this
        },
        lines: function(o, i) {
            function s(t, n) {
                return r(e(), {
                    position: "absolute",
                    width: i.scale * (i.length + i.width) + "px",
                    height: i.scale * i.width + "px",
                    background: t,
                    boxShadow: n,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / i.lines * u + i.rotate) + "deg) translate(" + i.scale * i.radius + "px,0)",
                    borderRadius: (i.corners * i.scale * i.width >> 1) + "px"
                })
            }
            for (var l, u = 0, f = (i.lines - 1) * (1 - i.direction) / 2; u < i.lines; u++)
                l = r(e(), {
                    position: "absolute",
                    top: 1 + ~(i.scale * i.width / 2) + "px",
                    transform: i.hwaccel ? "translate3d(0,0,0)" : "",
                    opacity: i.opacity,
                    animation: c && n(i.opacity, i.trail, f + u * i.direction, i.lines) + " " + 1 / i.speed + "s linear infinite"
                }),
                i.shadow && t(l, r(s("#000", "0 0 4px #000"), {
                    top: "2px"
                })),
                t(o, t(l, s(a(i.color, u), "0 0 1px rgba(0,0,0,.1)")));
            return o
        },
        opacity: function(e, t, n) {
            t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
        }
    }),
    "undefined" != typeof document) {
        l = function() {
            var n = e("style", {
                type: "text/css"
            });
            return t(document.getElementsByTagName("head")[0], n),
            n.sheet || n.styleSheet
        }();
        var m = r(e("group"), {
            behavior: "url(#default#VML)"
        });
        !o(m, "transform") && m.adj ? function() {
            function n(t, n) {
                return e("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', n)
            }
            l.addRule(".spin-vml", "behavior:url(#default#VML)"),
            s.prototype.lines = function(e, o) {
                function i() {
                    return r(n("group", {
                        coordsize: u + " " + u,
                        coordorigin: -l + " " + -l
                    }), {
                        width: u,
                        height: u
                    })
                }
                function s(e, s, c) {
                    t(d, t(r(i(), {
                        rotation: 360 / o.lines * e + "deg",
                        left: ~~s
                    }), t(r(n("roundrect", {
                        arcsize: o.corners
                    }), {
                        width: l,
                        height: o.scale * o.width,
                        left: o.scale * o.radius,
                        top: -o.scale * o.width >> 1,
                        filter: c
                    }), n("fill", {
                        color: a(o.color, e),
                        opacity: o.opacity
                    }), n("stroke", {
                        opacity: 0
                    }))))
                }
                var c, l = o.scale * (o.length + o.width), u = 2 * o.scale * l, f = -(o.width + o.length) * o.scale * 2 + "px", d = r(i(), {
                    position: "absolute",
                    top: f,
                    left: f
                });
                if (o.shadow)
                    for (c = 1; c <= o.lines; c++)
                        s(c, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                for (c = 1; c <= o.lines; c++)
                    s(c);
                return t(e, d)
            }
            ,
            s.prototype.opacity = function(e, t, n, o) {
                var r = e.firstChild;
                o = o.shadow && o.lines || 0,
                r && t + o < r.childNodes.length && (r = r.childNodes[t + o],
                r = r && r.firstChild,
                (r = r && r.firstChild) && (r.opacity = n))
            }
        }() : c = o(m, "animation")
    }
    return s
});
var ssc = ssc || {};
ssc.Spinner = function() {
    function e(e) {
        var n = t()
          , o = e.find(".spin");
        return {
            start: function() {
                e.attr("disabled", ""),
                e.attr("data-loading", ""),
                n.spin(),
                o.append(n.el)
            },
            stop: function() {
                n.stop(),
                $("[role='progressbar']").remove(),
                e.removeAttr("disabled"),
                e.removeAttr("data-loading")
            }
        }
    }
    function t() {
        var e = {
            lines: 11,
            length: 3,
            width: 2,
            radius: 5,
            corners: .4,
            rotate: 19,
            direction: 1,
            color: "#fff",
            speed: 1,
            trail: 22,
            shadow: !1,
            hwaccel: !1,
            className: "",
            zIndex: 2e9,
            top: "50%",
            left: "50%"
        };
        return new Spinner(e).spin()
    }
    function n() {
        r = t();
        $("form").append('<div id="modalspinner" style="z-index: 10000;display: block;position:absolute!important;" class="modal">            <span class="spin" style="position: absolute;display: block;top:0;bottom:0;right:0;left:0;width: 40px;height: 40px; border-radius: 22px;background-color: #3F3F3F;z-index: 1;margin:auto;"></span>        </div>'),
        r.spin(),
        $("#modalspinner .spin").append(r.el)
    }
    function o() {
        r && (r.stop(),
        r = void 0),
        $("#modalspinner").remove()
    }
    var r = void 0;
    return {
        create: e,
        showModalSpinner: n,
        destroyModalSpinner: o
    }
}(),
$(function() {
    ssc.ssc_bs = !0;
    var e = $("body").attr("browserstorage");
    e && (ssc.ssc_bs = "true" == e),
    ssc.utils.checkIfBrowserSupportStorageSystem();
    var t = function(e) {
        var t = $("#formc input,textarea,select")
          , n = t.filter(":hiddenByParent")
          , o = n.serializeObject(e);
        $("#formc input:checkbox").map(function() {
            o[this.name] = this.checked ? "on" : "off"
        });
        var r = [];
        $.each($("input:file"), function(e, t) {
            var n = $(t)
              , o = n.data("files");
            Array.isArray(o) || (o = JSON.parse(o)),
            r = r.concat(o)
        });
        for (var i = r.length, a = 0; a < i; a++)
            o["xll_fileid" + a] = encodeURIComponent(r[a].id);
        return void 0 != o.subject && e && (o.subject = o.subject.replace(/%5Cr%5Cn/g, " ")),
        o
    };
    ssc.formSubmitModule.config({
        getJsonFormData_callback: function() {
            return t(!0)
        }
    });
    var n = '\x3c!-- Modal --\x3e    <div class="modal fade" id="onlinefom-submit-conformation-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">    <div class="modal-dialog modal-sm">    <div class="modal-content" >    <div class="modal-body">    <span class="glyphicon glyphicon-send form-submit"></span>    <p class="info">' + ssc.Dialog.BeforeSubmitDesc + '</p>    </div>    </div>    </div>    </div>        \x3c!-- Modal --\x3e    <div class="modal fade" id="onlineform-submit-status-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">    <div class="modal-dialog modal-sm">    <div class="modal-content" >    <div class="modal-header">    <h4 class="modal-title">form submit</h4>    </div>    <div class="modal-body">    \x3c!--<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>--\x3e    <span class="glyphicon glyphicon-warning-sign status-icon"></span>    <p class="info">The form is being submitted.</p>    </div>    <div class="modal-footer">    <button type="button" class="btn btn-link" id="onlineform-submit-status-modal-close-btn" style="margin-left:4px">Close</button>    </div>    </div>    </div>    </div>        \x3c!-- Modal --\x3e    <div class="modal fade" id="offlineforms-save-conformation-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">    <div class="modal-dialog modal-sm">    <div class="modal-content">    <div class="modal-header">    <h4 class="modal-title">' + ssc.Dialog.OfflineHeading + '</h4>    </div>    <div class="modal-body">    <span class="glyphicon glyphicon-save status-icon" style="color:brown"/>    <p class="info">' + ssc.Dialog.OfflineDesc + '</p>    <p class="conform">' + ssc.Dialog.OfflineConfirm + '</p>    </div>    <div class="modal-footer">    <button type="button" id=\'offlineforms-save-conformation-yes-btn\' class="btn btn-default" onclick="offlineforms_save_conformation_yes_btn_click()" data-loading-text="Done">Yes</button>    <button type="button" class="btn btn-link" onclick=\'$("#offlineforms-save-conformation-modal").modal("hide");return false;\' style="margin-left:4px">No</button>    </div>    </div>    </div>    </div>        \x3c!-- Modal --\x3e    <div class="modal fade" id="offlineforms-submit-conformation-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" data-keyboard="false">    <div class="modal-dialog modal-sm">    <div class="modal-content">    <div class="modal-header">    <h4 class="modal-title">' + ssc.Dialog.OfflineSubmitHeading + '</h4>    </div>    <div class="modal-body">    <span class="glyphicon glyphicon-export status-icon" style="color:brown"/>    <p class="info">' + ssc.Dialog.OfflineSubmitDesc + '</p>    <p class="conform">' + ssc.Dialog.OfflineSubmitConfirm + '</p>    </div>    <div class="modal-footer">    <button type="button" id=\'offlineforms-submit-conformation-yes-btn\' class="btn btn-default" onclick="offlineforms_submit_conformation_yes_btn_click()" data-loading-text="submitting...">Yes</button>    <button type="button" class="btn btn-link" onclick=\'$("#offlineforms-submit-conformation-modal").modal("hide");return false;\' style="margin-left:4px">No</button>    </div>    </div>    </div>    </div>        \x3c!-- Modal --\x3e    <div class="modal fade" id="offlineforms-submit-status-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">    <div class="modal-dialog modal-sm">    <div class="modal-content">    <div class="modal-header">    <h4 class="modal-title">' + ssc.Dialog.FailOfflineHeading + '</h4>    </div>    <div class="modal-body">    <span class="glyphicon glyphicon-warning-sign status-icon" style="color:rgb(198,0,0)"></span>    <p class="info">' + ssc.Dialog.FailOfflineDesc + '</p>    </div>    <div class="modal-footer">    <button type="button" id="offlineforms-submit-status-modal-close-btn" class="btn btn-link" style="margin-left:4px">Close</button>    </div>    </div>    </div>    </div>';
    ssc.formSubmitModule.showOfflineConformationDialog = function() {
        $("#offlineforms-save-conformation-modal").modal("show")
    }
    ,
    $(".toolbar-panel-right").prepend("    <div id='offlineforms-submit' class='hideme'>        <button id='offlineforms-submit-btn' type='button' class='btn btn-offlineforms-submit btn-sm'>        <span class='offlineforms-logo'></span><span>Offline Forms</span>        <span id='x1' class='badge badge-offlineforms-submit' >0</span>        </button>    </div>"),
    $("#formc").prepend("<div id='formsaving' style='background-color: #FFD76E;position: fixed; left: 50%; top: 10px;z-index: 1000000; padding-left: 1em;padding-right: 1ex;text-align: center; border: 1px solid #E4C471;border-radius: 2px;' class='hideme'>saving form...</div>"),
    $("#formc").append(n);
    var o = "wookbook1";
    void 0 !== ssc.APPNAME && ssc.APPNAME.length > 0 && (o = ssc.APPNAME.toLowerCase()),
    ssc.Global = ssc.Global || {},
    ssc.Global.formStorage = ssc.FormStorageClass.getInstance({
        dbName: o,
        offlineStoreUpdate: function(e, t) {
            $("#x1").html(e),
            $("#offlineforms-submit-conformation-modal .conform").text(e + ssc.Dialog.OfflineSubmitWaitCounter),
            e > 0 ? ($("#offlineforms-submit").removeClass("hideme"),
            $("#offlineforms-submit").addClass("showme")) : ($("#offlineforms-submit").removeClass("showme"),
            $("#offlineforms-submit").addClass("hideme"))
        },
        callback_AfterOfflineStore: function(e, t) {
            $("#offlineforms-save-conformation-modal").modal("hide"),
            "error" === e && alert(t)
        }
    }),
    window.origi_recalc_onclick = void 0,
    window.autosaveing = !1,
    window.repobuff = [],
    ssc.ssc_bs && ssc.utils.checkIfBrowserSupportStorageSystem() && (window.origi_recalc_onclick = recalc_onclick,
    window.recalc_onclick = function(e) {
        origi_recalc_onclick && origi_recalc_onclick(e),
        e.length > 0 && (window.autosaveing || (window.autosaveing = !0,
        setTimeout(function() {
            if ($("#formsaving").removeClass("hideme").addClass("showme"),
            "undefined" !== ssc.Global.formStorage) {
                var e = t(!1);
                ssc.Global.formStorage.storeThisForm(e, function(e) {
                    setTimeout(function() {
                        $("#formsaving").removeClass("showme").addClass("hideme")
                    }, 500),
                    window.autosaveing = !1
                })
            }
        }, 1e3)))
    }
    ),
    ssc.ssc_bs && ssc.Global.formStorage.restoreThisFormDataFromStorage(recalc_onclick),
    ssc.Global.formStorage.asyncGetSavedFormsCount(function(e) {
        e > 0 ? ($("#offlineforms-submit").removeClass("hideme"),
        $("#offlineforms-submit").addClass("showme"),
        $("#x1").html(e)) : ($("#offlineforms-submit").removeClass("showme"),
        $("#offlineforms-submit").addClass("hideme"),
        $("#x1").html(e))
    }),
    $("#offlineforms-submit-btn").click(function() {
        ssc.Spinner.showModalSpinner(),
        ssc.formSubmitModule.callIfOnlineElse(function() {
            ssc.Global.formStorage.asyncGetSavedFormsCount(function(e) {
                ssc.Spinner.destroyModalSpinner();
                var t = ssc.Dialog.OfflineSubmitDesc;
                $("#offlineforms-submit-conformation-yes-btn").button("reset"),
                $("#offlineforms-submit-conformation-modal .modal-body .info").html(t),
                $("#offlineforms-submit-conformation-modal .conform").html(ssc.Dialog.OfflineSubmitConfirm),
                $("#offlineforms-submit-conformation-yes-btn").show(),
                $("#offlineforms-submit-conformation-modal .btn-link").html("No"),
                $("#offlineforms-submit-conformation-modal .btn-link").show(),
                $("#offlineforms-submit-conformation-modal").modal("show")
            })
        }, function() {
            ssc.Spinner.destroyModalSpinner(),
            $("#offlineforms-submit-status-modal").modal("show")
        })
    }),
    window.offlineforms_save_conformation_yes_btn_click = function(e) {
        ssc.Global.formStorage.saveFormAsOfflineSubmitInStorage(t(!0))
    }
    ,
    window.offlineforms_submit_conformation_yes_btn_click = function(e) {
        ssc.formSubmitModule.callIfOnlineElse(function() {
            $("#offlineforms-submit-conformation-yes-btn").button("loading"),
            $("#offlineforms-submit-conformation-modal .info").text(ssc.Dialog.OfflineSubmitWait),
            $("#offlineforms-submit-conformation-modal .conform").text("3 Left"),
            $("#offlineforms-submit-conformation-modal .btn-link").hide(),
            ssc.formSubmitModule.submitOnceMultiForm()
        }, function() {
            $("#offlineforms-submit-status-modal").modal("show")
        })
    }
    ,
    $("#onlineform-submit-status-modal .modal-dialog .modal-content,#offlineforms-submit-status-modal .modal-dialog .modal-content").on("click", function(e) {
        e.stopPropagation(),
        $(this).closest(".modal").modal("hide")
    }),
    toastr.options = {
        closeButton: !0,
        debug: !1,
        newestOnTop: !1,
        progressBar: !1,
        positionClass: "toast-top-right",
        preventDuplicates: !0,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    }
});
/*!calc*/
var arr1xB51B51 = new Array(1);
for (var ii = 0; ii < 1; ii++) {
    arr1xB51B51[ii] = new Array(1);
    for (var jj = 0; jj < 1; jj++) {
        arr1xB51B51[ii][jj] = 0
    }
}
;var arr1xB54B54 = new Array(1);
for (var ii = 0; ii < 1; ii++) {
    arr1xB54B54[ii] = new Array(1);
    for (var jj = 0; jj < 1; jj++) {
        arr1xB54B54[ii][jj] = 0
    }
}
;var arr1xB56B56 = new Array(1);
for (var ii = 0; ii < 1; ii++) {
    arr1xB56B56[ii] = new Array(1);
    for (var jj = 0; jj < 1; jj++) {
        arr1xB56B56[ii][jj] = 0
    }
}
;var arr1xB58B58 = new Array(1);
for (var ii = 0; ii < 1; ii++) {
    arr1xB58B58[ii] = new Array(1);
    for (var jj = 0; jj < 1; jj++) {
        arr1xB58B58[ii][jj] = 0
    }
}
;var arr1xB60B60 = new Array(1);
for (var ii = 0; ii < 1; ii++) {
    arr1xB60B60[ii] = new Array(1);
    for (var jj = 0; jj < 1; jj++) {
        arr1xB60B60[ii][jj] = 0
    }
}
;var row2xA8A12 = new Array(5);
for (var jj = 0; jj < 5; jj++) {
    row2xA8A12[jj] = ""
}
;var row2xB8B12 = new Array(5);
for (var jj = 0; jj < 5; jj++) {
    row2xB8B12[jj] = ""
}
;var row2xA16A33 = new Array(18);
for (var jj = 0; jj < 18; jj++) {
    row2xA16A33[jj] = ""
}
;var row2xB16B33 = new Array(18);
for (var jj = 0; jj < 18; jj++) {
    row2xB16B33[jj] = ""
}
;var row2xA35A39 = new Array(5);
for (var jj = 0; jj < 5; jj++) {
    row2xA35A39[jj] = ""
}
;var row2xB35B39 = new Array(5);
for (var jj = 0; jj < 5; jj++) {
    row2xB35B39[jj] = ""
}
;var eecm2 = new Array();
var eecm1 = new Array(new Array(arr1xB51B51,0,0,0,0),new Array(arr1xB54B54,0,0,0,0),new Array(arr1xB58B58,0,0,0,0),new Array(arr1xB60B60,0,0,0,0));
function calc(data) {
    var c1B35 = data['AMEX'];
    var c1B27 = data['Promo'];
    var c1B21 = data['MyWay'];
    var c1B19 = data['EliteStatus'];
    var c1B14 = data['Folio'];
    var c1B11 = data['Rate'];
    var c1B9 = data['Tax'];
    var c1B7 = data['Nights'];
    var c1B5 = data['Brand'];
    var c1A27 = ("Points Unlimited Promotion");
    row2xA8A12[0] = ("Elite Status");
    row2xB8B12[0] = ("% Bonus");
    row2xA8A12[1] = ("Diamond");
    row2xB8B12[1] = (1);
    row2xA8A12[2] = ("Gold");
    row2xB8B12[2] = (0.8);
    row2xA8A12[3] = ("Silver");
    row2xB8B12[3] = (0.2);
    row2xA8A12[4] = ("None");
    row2xB8B12[4] = (0);
    row2xA16A33[0] = ("Brand");
    row2xB16B33[0] = ("Bonus");
    row2xA16A33[1] = ("Canopy");
    var c2E17 = (0);
    var c2F17 = (1000);
    var c2G17 = (0);
    var c2H17 = (500);
    row2xA16A33[2] = ("Conrad");
    var c2E18 = (0);
    var c2F18 = (1000);
    var c2G18 = (1000);
    var c2H18 = (0);
    row2xA16A33[3] = ("Curio Collection");
    var c2E19 = (0);
    var c2F19 = (1000);
    var c2G19 = (1000);
    var c2H19 = (0);
    row2xA16A33[4] = ("DoubleTree");
    var c2E20 = (0);
    var c2F20 = (1000);
    var c2G20 = (1000);
    var c2H20 = (0);
    row2xA16A33[5] = ("Embassy Suites");
    var c2E21 = (1000);
    var c2F21 = (0);
    var c2G21 = (500);
    var c2H21 = (0);
    row2xA16A33[6] = ("Hampton");
    var c2E22 = (250);
    var c2F22 = (0);
    var c2G22 = (250);
    var c2H22 = (0);
    row2xA16A33[7] = ("Hilton");
    var c2E23 = (0);
    var c2F23 = (1000);
    var c2G23 = (1000);
    var c2H23 = (0);
    row2xA16A33[8] = ("Hilton Garden Inn");
    var c2E24 = (750);
    var c2F24 = (0);
    var c2G24 = (750);
    var c2H24 = (0);
    row2xA16A33[9] = ("Hilton Grand Vacations");
    var c2E25 = (0);
    var c2F25 = (2000);
    var c2G25 = (0);
    var c2H25 = (1000);
    row2xA16A33[10] = ("Home2 Suites");
    var c2E26 = (100);
    var c2F26 = (0);
    var c2G26 = (100);
    var c2H26 = (0);
    row2xA16A33[11] = ("Homewood Suites");
    var c2E27 = (250);
    var c2F27 = (0);
    var c2G27 = (250);
    var c2H27 = (0);
    row2xA16A33[12] = ("LXR Hotels and Resorts");
    var c2E28 = (0);
    var c2F28 = (1000);
    var c2G28 = (1000);
    var c2H28 = (0);
    row2xA16A33[13] = ("Motto");
    var c2E29 = (0);
    var c2F29 = (500);
    var c2G29 = (500);
    var c2H29 = (0);
    row2xA16A33[14] = ("Signia Hilton");
    var c2E30 = (0);
    var c2F30 = (1000);
    var c2G30 = (1000);
    var c2H30 = (0);
    row2xA16A33[15] = ("Tapestry Collection");
    var c2E31 = (0);
    var c2F31 = (1000);
    var c2G31 = (1000);
    var c2H31 = (0);
    row2xA16A33[16] = ("Tru");
    var c2E32 = (250);
    var c2F32 = (0);
    var c2G32 = (250);
    var c2H32 = (0);
    row2xA16A33[17] = ("Waldorf Astoria");
    var c2E33 = (1000);
    var c2F33 = (0);
    var c2G33 = (1000);
    var c2H33 = (0);
    row2xA35A39[0] = ("Co-Branded Credit Card");
    row2xB35B39[0] = ("Bonus");
    row2xA35A39[1] = ("No");
    row2xB35B39[1] = (0);
    row2xA35A39[2] = ("AMEX HH Aspire");
    row2xB35B39[2] = (14);
    row2xA35A39[3] = ("AMEX HH Surpass");
    row2xB35B39[3] = (12);
    row2xA35A39[4] = ("AMEX HH");
    row2xB35B39[4] = (7);
    var tmp2 = (str_eq((c1B5), ("Tru")));
    var tmp3 = (str_eq((c1B5), ("Home2 Suites")));
    var sumcnt4_sum = ((false || tmp3) || tmp2);
    var sumcnt4_cnt = 2;
    var c2B3 = (((orgeneral(0, sumcnt4_sum, sumcnt4_cnt, eecm2)) ? (5) : (10)));
    var tmp5 = (str_eq((c1B5), ("Hampton")));
    var tmp6 = (str_eq((c1B5), ("Tru")));
    var tmp7 = (str_eq((c1B5), ("Homewood Suites")));
    var tmp8 = (str_eq((c1B5), ("Home2 Suites")));
    var sumcnt9_sum = ((((false || tmp8) || tmp7) || tmp6) || tmp5);
    var sumcnt9_cnt = 4;
    var c2B4 = (((orgeneral(0, sumcnt9_sum, sumcnt9_cnt, eecm2)) ? (0) : (c1B14)));
    var c2B5 = (((c2B3) * (((((c1B7) * (c1B9))) + (c2B4)))));
    var tmp10 = (str_eq((c1B5), ("Canopy")));
    var tmp11 = (false);
    var tmp12 = (str_eq((c1B5), ("Homewood Suites")));
    var tmp13 = (str_eq((c1B5), ("Home2 Suites")));
    var tmp14 = (str_eq((c1B5), ("Tapestry Collection")));
    var tmp15 = (str_eq((c1B5), ("Tru")));
    var sumcnt16_sum = ((((((false || tmp15) || tmp14) || tmp13) || tmp12) || tmp11) || tmp10);
    var sumcnt16_cnt = 6;
    var c2B6 = (((((c2B5) < (100000))) ? (c2B5) : ((orgeneral(0, sumcnt16_sum, sumcnt16_cnt, eecm2)) ? (c2B5) : (100000))));
    var c2B14 = (((str_eq((c1B21), ("Points"))) ? (1) : (0)));
    var c2C17 = (((((c2B14) == (1))) ? (((c2E17) + (c2F17))) : (c2F17)));
    var c2D17 = (((((c2B14) == (1))) ? (((c2G17) + (c2H17))) : (c2H17)));
    var c2C18 = (((((c2B14) == (1))) ? (((c2E18) + (c2F18))) : (c2F18)));
    var c2D18 = (((((c2B14) == (1))) ? (((c2G18) + (c2H18))) : (c2H18)));
    var c2C19 = (((((c2B14) == (1))) ? (((c2E19) + (c2F19))) : (c2F19)));
    var c2D19 = (((((c2B14) == (1))) ? (((c2G19) + (c2H19))) : (c2H19)));
    var c2C20 = (((((c2B14) == (1))) ? (((c2E20) + (c2F20))) : (c2F20)));
    var c2D20 = (((((c2B14) == (1))) ? (((c2G20) + (c2H20))) : (c2H20)));
    var c2C21 = (((((c2B14) == (1))) ? (((c2E21) + (c2F21))) : (c2F21)));
    var c2D21 = (((((c2B14) == (1))) ? (((c2G21) + (c2H21))) : (c2H21)));
    var c2C22 = (((((c2B14) == (1))) ? (((c2E22) + (c2F22))) : (c2F22)));
    var c2D22 = (((((c2B14) == (1))) ? (((c2G22) + (c2H22))) : (c2H22)));
    var c2C23 = (((((c2B14) == (1))) ? (((c2E23) + (c2F23))) : (c2F23)));
    var c2D23 = (((((c2B14) == (1))) ? (((c2G23) + (c2H23))) : (c2H23)));
    var c2C24 = (((((c2B14) == (1))) ? (((c2E24) + (c2F24))) : (c2F24)));
    var c2D24 = (((((c2B14) == (1))) ? (((c2G24) + (c2H24))) : (c2H24)));
    var c2C25 = (((((c2B14) == (1))) ? (((c2E25) + (c2F25))) : (c2F25)));
    var c2D25 = (((((c2B14) == (1))) ? (((c2G25) + (c2H25))) : (c2H25)));
    var c2C26 = (((((c2B14) == (1))) ? (((c2E26) + (c2F26))) : (c2F26)));
    var c2D26 = (((((c2B14) == (1))) ? (((c2G26) + (c2H26))) : (c2H26)));
    var c2C27 = (((((c2B14) == (1))) ? (((c2E27) + (c2F27))) : (c2F27)));
    var c2D27 = (((((c2B14) == (1))) ? (((c2G27) + (c2H27))) : (c2H27)));
    var c2C28 = (((((c2B14) == (1))) ? (((c2E28) + (c2F28))) : (c2F28)));
    var c2D28 = (((((c2B14) == (1))) ? (((c2G28) + (c2H28))) : (c2H28)));
    var c2C29 = (((((c2B14) == (1))) ? (((c2E29) + (c2F29))) : (c2F29)));
    var c2D29 = (((((c2B14) == (1))) ? (((c2G29) + (c2H29))) : (c2H29)));
    var c2C30 = (((((c2B14) == (1))) ? (((c2E30) + (c2F30))) : (c2F30)));
    var c2D30 = (((((c2B14) == (1))) ? (((c2G30) + (c2H30))) : (c2H30)));
    var c2C31 = (((((c2B14) == (1))) ? (((c2E31) + (c2F31))) : (c2F31)));
    var c2D31 = (((((c2B14) == (1))) ? (((c2G31) + (c2H31))) : (c2H31)));
    var c2C32 = (((((c2B14) == (1))) ? (((c2E32) + (c2F32))) : (c2F32)));
    var c2D32 = (((((c2B14) == (1))) ? (((c2G32) + (c2H32))) : (c2H32)));
    var c2C33 = (((((c2B14) == (1))) ? (((c2E33) + (c2F33))) : (c2F33)));
    var c2D33 = (((((c2B14) == (1))) ? (((c2G33) + (c2H33))) : (c2H33)));
    arr1xB51B51[0][0] = (((((c2B6) > (0))) ? (round((c2B6), (0))) : (0)));
    arr1xB54B54[0][0] = (((((arr1xB51B51[0][0]) > (0))) ? (round((((v2n(hlookup_str((c1B19), row2xA8A12, 0, 4, row2xB8B12, 0, 4, (false)))) * (c2B6))), (0))) : (0)));
    arr1xB58B58[0][0] = (((((arr1xB51B51[0][0]) > (0))) ? (((str_eq((c1B27), ("Yes (2,500 points)"))) ? (2500) : ((str_eq((c1B27), ("Yes (2,000 points + 10,000 points)"))) ? (12000) : (0)))) : (0)));
    arr1xB60B60[0][0] = (((((arr1xB51B51[0][0]) > (0))) ? (round((((v2n(hlookup_str((c1B35), row2xA35A39, 0, 4, row2xB35B39, 0, 4, (false)))) * (((((c1B7) * (((c1B9) + (c1B11))))) + (c1B14))))), (0))) : (0)));
    row2xB16B33[1] = (((str_eq((c1B19), ("Diamond"))) ? (c2C17) : ((str_eq((c1B19), ("Gold"))) ? (c2D17) : (0))));
    row2xB16B33[2] = (((str_eq((c1B19), ("Diamond"))) ? (c2C18) : ((str_eq((c1B19), ("Gold"))) ? (c2D18) : (0))));
    row2xB16B33[3] = (((str_eq((c1B19), ("Diamond"))) ? (c2C19) : ((str_eq((c1B19), ("Gold"))) ? (c2D19) : (0))));
    row2xB16B33[4] = (((str_eq((c1B19), ("Diamond"))) ? (c2C20) : ((str_eq((c1B19), ("Gold"))) ? (c2D20) : (0))));
    row2xB16B33[5] = (((str_eq((c1B19), ("Diamond"))) ? (c2C21) : ((str_eq((c1B19), ("Gold"))) ? (c2D21) : (0))));
    row2xB16B33[6] = (((str_eq((c1B19), ("Diamond"))) ? (c2C22) : ((str_eq((c1B19), ("Gold"))) ? (c2D22) : (0))));
    row2xB16B33[7] = (((str_eq((c1B19), ("Diamond"))) ? (c2C23) : ((str_eq((c1B19), ("Gold"))) ? (c2D23) : (0))));
    row2xB16B33[8] = (((str_eq((c1B19), ("Diamond"))) ? (c2C24) : ((str_eq((c1B19), ("Gold"))) ? (c2D24) : (0))));
    row2xB16B33[9] = (((str_eq((c1B19), ("Diamond"))) ? (c2C25) : ((str_eq((c1B19), ("Gold"))) ? (c2D25) : (0))));
    row2xB16B33[10] = (((str_eq((c1B19), ("Diamond"))) ? (c2C26) : ((str_eq((c1B19), ("Gold"))) ? (c2D26) : (0))));
    row2xB16B33[11] = (((str_eq((c1B19), ("Diamond"))) ? (c2C27) : ((str_eq((c1B19), ("Gold"))) ? (c2D27) : (0))));
    row2xB16B33[12] = (((str_eq((c1B19), ("Diamond"))) ? (c2C28) : ((str_eq((c1B19), ("Gold"))) ? (c2D28) : (0))));
    row2xB16B33[13] = (((str_eq((c1B19), ("Diamond"))) ? (c2C29) : ((str_eq((c1B19), ("Gold"))) ? (c2D29) : (0))));
    row2xB16B33[14] = (((str_eq((c1B19), ("Diamond"))) ? (c2C30) : ((str_eq((c1B19), ("Gold"))) ? (c2D30) : (0))));
    row2xB16B33[15] = (((str_eq((c1B19), ("Diamond"))) ? (c2C31) : ((str_eq((c1B19), ("Gold"))) ? (c2D31) : (0))));
    row2xB16B33[16] = (((str_eq((c1B19), ("Diamond"))) ? (c2C32) : ((str_eq((c1B19), ("Gold"))) ? (c2D32) : (0))));
    row2xB16B33[17] = (((str_eq((c1B19), ("Diamond"))) ? (c2C33) : ((str_eq((c1B19), ("Gold"))) ? (c2D33) : (0))));
    var c1B44 = (((((arr1xB51B51[0][0]) > (0))) ? (round((((((((((c2B3) * (v2n(hlookup_str((c1B19), row2xA8A12, 0, 4, row2xB8B12, 0, 4, (false)))))))) + (((str_eq((c1B27), ("Yes"))) ? (((2) * (c2B3))) : (c2B3))))) + (v2n(hlookup_str((c1B35), row2xA35A39, 0, 4, row2xB35B39, 0, 4, (false)))))), (0))) : (0)));
    var c1B56 = (((((arr1xB51B51[0][0]) > (0))) ? (hlookup_str((c1B5), row2xA16A33, 0, 17, row2xB16B33, 0, 17, (false))) : (0)));
    arr1xB56B56[0][0] = v2n(c1B56);
    var sumcnt1_sum = 0;
    var sumcnt1_cnt = 0;
    if (eeisstring(c1B56)) {
        ;
    } else if (typeof (c1B56) == "boolean") {
        ;
    } else if (isFinite(c1B56)) {
        sumcnt1_sum = sumcnt1_sum + c1B56;
        sumcnt1_cnt++;
    } else if (isNaN(c1B56)) {
        sumcnt1_sum = Number.NaN;
    }
    ;var c1B40 = (sumgeneral(4, sumcnt1_sum, sumcnt1_cnt, eecm1));
    var c1B42 = (roundup((((c1B40) * (0.006))), (2)));
    data['XLEW_1_60_2'] = arr1xB60B60[0][0];
    data['XLEW_1_58_2'] = arr1xB58B58[0][0];
    data['XLEW_1_56_2'] = c1B56;
    data['XLEW_1_54_2'] = arr1xB54B54[0][0];
    data['XLEW_1_51_2'] = arr1xB51B51[0][0];
    data['XLEW_1_44_2'] = c1B44;
    data['XLEW_1_42_2'] = c1B42;
    data['XLEW_1_40_2'] = c1B40;
    data['XLEW_1_27_1'] = c1A27;
}
;/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
+function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap")
          , b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)
            if (void 0 !== a.style[c])
                return {
                    end: b[c]
                };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1
          , d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b),
        this
    }
    ,
    a(function() {
        a.support.transition = b(),
        a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                if (a(b.target).is(this))
                    return b.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var c = a(this)
              , e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)),
            "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]'
      , d = function(b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.7",
    d.TRANSITION_DURATION = 150,
    d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this)
          , f = e.attr("data-target");
        f || (f = e.attr("href"),
        f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(),
        g.length || (g = e.closest(".alert")),
        g.trigger(b = a.Event("close.bs.alert")),
        b.isDefaultPrevented() || (g.removeClass("in"),
        a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    }
    ;
    var e = a.fn.alert;
    a.fn.alert = b,
    a.fn.alert.Constructor = d,
    a.fn.alert.noConflict = function() {
        return a.fn.alert = e,
        this
    }
    ,
    a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.button")
              , f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this,f)),
            "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b),
        this.options = a.extend({}, c.DEFAULTS, d),
        this.isLoading = !1
    };
    c.VERSION = "3.3.7",
    c.DEFAULTS = {
        loadingText: "loading..."
    },
    c.prototype.setState = function(b) {
        var c = "disabled"
          , d = this.$element
          , e = d.is("input") ? "val" : "html"
          , f = d.data();
        b += "Text",
        null == f.resetText && d.data("resetText", d[e]()),
        setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]),
            "loadingText" == b ? (this.isLoading = !0,
            d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1,
            d.removeClass(c).removeAttr(c).prop(c, !1))
        }, this), 0)
    }
    ,
    c.prototype.toggle = function() {
        var a = !0
          , b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1),
            b.find(".active").removeClass("active"),
            this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1),
            this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            a && c.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    }
    ;
    var d = a.fn.button;
    a.fn.button = b,
    a.fn.button.Constructor = c,
    a.fn.button.noConflict = function() {
        return a.fn.button = d,
        this
    }
    ,
    a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target).closest(".btn");
        b.call(d, "toggle"),
        a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(),
        d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.carousel")
              , f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b)
              , g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this,f)),
            "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = c,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.7",
    c.TRANSITION_DURATION = 600,
    c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            a.preventDefault()
        }
    }
    ,
    c.prototype.cycle = function(b) {
        return b || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"),
        this.$items.index(a || this.$active)
    }
    ,
    c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b)
          , d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap)
            return b;
        var e = "prev" == a ? -1 : 1
          , f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }
    ,
    c.prototype.to = function(a) {
        var b = this
          , c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(a > this.$items.length - 1 || a < 0))
            return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                b.to(a)
            }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }
    ,
    c.prototype.pause = function(b) {
        return b || (this.paused = !0),
        this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    c.prototype.next = function() {
        if (!this.sliding)
            return this.slide("next")
    }
    ,
    c.prototype.prev = function() {
        if (!this.sliding)
            return this.slide("prev")
    }
    ,
    c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active")
          , f = d || this.getItemForDirection(b, e)
          , g = this.interval
          , h = "next" == b ? "left" : "right"
          , i = this;
        if (f.hasClass("active"))
            return this.sliding = !1;
        var j = f[0]
          , k = a.Event("slide.bs.carousel", {
            relatedTarget: j,
            direction: h
        });
        if (this.$element.trigger(k),
        !k.isDefaultPrevented()) {
            if (this.sliding = !0,
            g && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b),
            f[0].offsetWidth,
            e.addClass(h),
            f.addClass(h),
            e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"),
                e.removeClass(["active", h].join(" ")),
                i.sliding = !1,
                setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"),
            f.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(m)),
            g && this.cycle(),
            this
        }
    }
    ;
    var d = a.fn.carousel;
    a.fn.carousel = b,
    a.fn.carousel.Constructor = c,
    a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d,
        this
    }
    ;
    var e = function(c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data())
              , h = e.attr("data-slide-to");
            h && (g.interval = !1),
            b.call(f, g),
            h && f.data("bs.carousel").to(h),
            c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e),
    a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }
    function c(b) {
        return this.each(function() {
            var c = a(this)
              , e = c.data("bs.collapse")
              , f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
            e || c.data("bs.collapse", e = new d(this,f)),
            "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b),
        this.options = a.extend({}, d.DEFAULTS, c),
        this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.7",
    d.TRANSITION_DURATION = 350,
    d.DEFAULTS = {
        toggle: !0
    },
    d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }
    ,
    d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"),
            b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f),
                !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"),
                    b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition)
                        return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }
    ,
    d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b),
            !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }
    ,
    d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }
    ,
    d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
        b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    }
    ;
    var e = a.fn.collapse;
    a.fn.collapse = c,
    a.fn.collapse.Constructor = d,
    a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e,
        this
    }
    ,
    a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e)
          , g = f.data("bs.collapse")
          , h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"),
        c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    function c(c) {
        c && 3 === c.which || (a(e).remove(),
        a(f).each(function() {
            var d = a(this)
              , e = b(d)
              , f = {
                relatedTarget: this
            };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)),
            c.isDefaultPrevented() || (d.attr("aria-expanded", "false"),
            e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }
    function d(b) {
        return this.each(function() {
            var c = a(this)
              , d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)),
            "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop"
      , f = '[data-toggle="dropdown"]'
      , g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.7",
    g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e)
              , g = f.hasClass("open");
            if (c(),
            !g) {
                "ontouchstart"in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)),
                d.isDefaultPrevented())
                    return;
                e.trigger("focus").attr("aria-expanded", "true"),
                f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }
    ,
    g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(),
            c.stopPropagation(),
            !d.is(".disabled, :disabled")) {
                var e = b(d)
                  , g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which)
                    return 27 == c.which && e.find(f).trigger("focus"),
                    d.trigger("click");
                var h = " li:not(.disabled):visible a"
                  , i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--,
                    40 == c.which && j < i.length - 1 && j++,
                    ~j || (j = 0),
                    i.eq(j).trigger("focus")
                }
            }
        }
    }
    ;
    var h = a.fn.dropdown;
    a.fn.dropdown = d,
    a.fn.dropdown.Constructor = g,
    a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h,
        this
    }
    ,
    a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery),
+function(a) {
    "use strict";
    function b(b, d) {
        return this.each(function() {
            var e = a(this)
              , f = e.data("bs.modal")
              , g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this,g)),
            "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c,
        this.$body = a(document.body),
        this.$element = a(b),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.7",
    c.TRANSITION_DURATION = 300,
    c.BACKDROP_TRANSITION_DURATION = 150,
    c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }
    ,
    c.prototype.show = function(b) {
        var d = this
          , e = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(e),
        this.isShown || e.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body),
            d.$element.show().scrollTop(0),
            d.adjustDialog(),
            e && d.$element[0].offsetWidth,
            d.$element.addClass("in"),
            d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }
    ,
    c.prototype.hide = function(b) {
        b && b.preventDefault(),
        b = a.Event("hide.bs.modal"),
        this.$element.trigger(b),
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        a(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }
    ,
    c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }
    ,
    c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(),
        this.backdrop(function() {
            a.$body.removeClass("modal-open"),
            a.resetAdjustments(),
            a.resetScrollbar(),
            a.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    c.prototype.backdrop = function(b) {
        var d = this
          , e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
                return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(),
                b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else
            b && b()
    }
    ,
    c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ,
    c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }
    ,
    c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "",
        this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }
    ,
    c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }
    ,
    c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure",
        this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a),
        b
    }
    ;
    var d = a.fn.modal;
    a.fn.modal = b,
    a.fn.modal.Constructor = c,
    a.fn.modal.noConflict = function() {
        return a.fn.modal = d,
        this
    }
    ,
    a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this)
          , e = d.attr("href")
          , f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, ""))
          , g = f.data("bs.modal") ? "toggle" : a.extend({
            remote: !/#/.test(e) && e
        }, f.data(), d.data());
        d.is("a") && c.preventDefault(),
        f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }),
        b.call(f, g, this)
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.tooltip")
              , f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this,f)),
            "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.7",
    c.TRANSITION_DURATION = 150,
    c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    c.prototype.init = function(b, c, d) {
        if (this.enabled = !0,
        this.type = b,
        this.$element = a(c),
        this.options = this.getOptions(d),
        this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g)
                this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin"
                  , i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)),
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }
    ,
    c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b),
        b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }),
        b
    }
    ,
    c.prototype.getDelegateOptions = function() {
        var b = {}
          , c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }),
        b
    }
    ,
    c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
        a(b.currentTarget).data("bs." + this.type, c)),
        b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
        c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout),
        c.hoverState = "in",
        c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }
    ,
    c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a])
                return !0;
        return !1
    }
    ,
    c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        if (c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
        a(b.currentTarget).data("bs." + this.type, c)),
        b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
        !c.isInStateTrue())
            return clearTimeout(c.timeout),
            c.hoverState = "out",
            c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
                "out" == c.hoverState && c.hide()
            }, c.options.delay.hide)) : c.hide()
    }
    ,
    c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d)
                return;
            var e = this
              , f = this.tip()
              , g = this.getUID(this.type);
            this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement
              , i = /\s?auto?\s?/i
              , j = i.test(h);
            j && (h = h.replace(i, "") || "top"),
            f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this),
            this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition()
              , l = f[0].offsetWidth
              , m = f[0].offsetHeight;
            if (j) {
                var n = h
                  , o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h,
                f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type),
                e.hoverState = null,
                "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }
    ,
    c.prototype.applyPlacement = function(b, c) {
        var d = this.tip()
          , e = d[0].offsetWidth
          , f = d[0].offsetHeight
          , g = parseInt(d.css("margin-top"), 10)
          , h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
        isNaN(h) && (h = 0),
        b.top += g,
        b.left += h,
        a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0),
        d.addClass("in");
        var i = d[0].offsetWidth
          , j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c)
          , m = l ? 2 * k.left - e + i : 2 * k.top - f + j
          , n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b),
        this.replaceArrow(m, d[0][n], l)
    }
    ,
    c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }
    ,
    c.prototype.setContent = function() {
        var a = this.tip()
          , b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
        a.removeClass("fade in top bottom left right")
    }
    ,
    c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(),
            e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type),
            b && b()
        }
        var e = this
          , f = a(this.$tip)
          , g = a.Event("hide.bs." + this.type);
        if (this.$element.trigger(g),
        !g.isDefaultPrevented())
            return f.removeClass("in"),
            a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(),
            this.hoverState = null,
            this
    }
    ,
    c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }
    ,
    c.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0]
          , d = "BODY" == c.tagName
          , e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = window.SVGElement && c instanceof window.SVGElement
          , g = d ? {
            top: 0,
            left: 0
        } : f ? null : b.offset()
          , h = {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
        }
          , i = d ? {
            width: a(window).width(),
            height: a(window).height()
        } : null;
        return a.extend({}, e, h, i, g)
    }
    ,
    c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }
    ,
    c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return e;
        var f = this.options.viewport && this.options.viewport.padding || 0
          , g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll
              , i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f
              , k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }
    ,
    c.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }
    ,
    c.prototype.getUID = function(a) {
        do
            a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a
    }
    ,
    c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ,
    c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    c.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    c.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type),
        c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
        a(b.currentTarget).data("bs." + this.type, c))),
        b ? (c.inState.click = !c.inState.click,
        c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }
    ,
    c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type),
            a.$tip && a.$tip.detach(),
            a.$tip = null,
            a.$arrow = null,
            a.$viewport = null,
            a.$element = null
        })
    }
    ;
    var d = a.fn.tooltip;
    a.fn.tooltip = b,
    a.fn.tooltip.Constructor = c,
    a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d,
        this
    }
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.popover")
              , f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this,f)),
            "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7",
    c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype),
    c.prototype.constructor = c,
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }
    ,
    c.prototype.setContent = function() {
        var a = this.tip()
          , b = this.getTitle()
          , c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
        a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c),
        a.removeClass("fade top bottom left right in"),
        a.find(".popover-title").html() || a.find(".popover-title").hide()
    }
    ,
    c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    c.prototype.getContent = function() {
        var a = this.$element
          , b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }
    ,
    c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var d = a.fn.popover;
    a.fn.popover = b,
    a.fn.popover.Constructor = c,
    a.fn.popover.noConflict = function() {
        return a.fn.popover = d,
        this
    }
}(jQuery),
+function(a) {
    "use strict";
    function b(c, d) {
        this.$body = a(document.body),
        this.$scrollElement = a(a(c).is(document.body) ? window : c),
        this.options = a.extend({}, b.DEFAULTS, d),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function c(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.scrollspy")
              , f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this,f)),
            "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.7",
    b.DEFAULTS = {
        offset: 10
    },
    b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    b.prototype.refresh = function() {
        var b = this
          , c = "offset"
          , d = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        a.isWindow(this.$scrollElement[0]) || (c = "position",
        d = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function() {
            var b = a(this)
              , e = b.data("target") || b.attr("href")
              , f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]),
            b.targets.push(this[1])
        })
    }
    ,
    b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(),
        b >= d)
            return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0])
            return this.activeTarget = null,
            this.clear();
        for (a = e.length; a--; )
            g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }
    ,
    b.prototype.activate = function(b) {
        this.activeTarget = b,
        this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]'
          , d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
        d.trigger("activate.bs.scrollspy")
    }
    ,
    b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c,
    a.fn.scrollspy.Constructor = b,
    a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d,
        this
    }
    ,
    a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.7",
    c.TRANSITION_DURATION = 150,
    c.prototype.show = function() {
        var b = this.element
          , c = b.closest("ul:not(.dropdown-menu)")
          , d = b.data("target");
        if (d || (d = b.attr("href"),
        d = d && d.replace(/.*(?=#[^\s]*$)/, "")),
        !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")
              , f = a.Event("hide.bs.tab", {
                relatedTarget: b[0]
            })
              , g = a.Event("show.bs.tab", {
                relatedTarget: e[0]
            });
            if (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c),
                this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }),
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }
    ,
    c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            h ? (b[0].offsetWidth,
            b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            e && e()
        }
        var g = d.find("> .active")
          , h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(),
        g.removeClass("in")
    }
    ;
    var d = a.fn.tab;
    a.fn.tab = b,
    a.fn.tab.Constructor = c,
    a.fn.tab.noConflict = function() {
        return a.fn.tab = d,
        this
    }
    ;
    var e = function(c) {
        c.preventDefault(),
        b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.affix")
              , f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this,f)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d),
        this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = a(b),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    c.VERSION = "3.3.7",
    c.RESET = "affix affix-top affix-bottom",
    c.DEFAULTS = {
        offset: 0,
        target: window
    },
    c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop()
          , f = this.$element.offset()
          , g = this.$target.height();
        if (null != c && "top" == this.affixed)
            return e < c && "top";
        if ("bottom" == this.affixed)
            return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed
          , i = h ? e : f.top
          , j = h ? g : b;
        return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
    }
    ,
    c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop()
          , b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }
    ,
    c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }
    ,
    c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height()
              , d = this.options.offset
              , e = d.top
              , f = d.bottom
              , g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : "")
                  , j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j),
                j.isDefaultPrevented())
                    return;
                this.affixed = h,
                this.unpin = "bottom" == h ? this.getPinnedOffset() : null,
                this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    }
    ;
    var d = a.fn.affix;
    a.fn.affix = b,
    a.fn.affix.Constructor = c,
    a.fn.affix.noConflict = function() {
        return a.fn.affix = d,
        this
    }
    ,
    a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this)
              , d = c.data();
            d.offset = d.offset || {},
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d)
        })
    })
}(jQuery);
function recalc_onclick(e) {
    ssc.recalcSource = e,
    co.Brand = eegetdropdownvalue(document.getElementsByName("Brand")),
    co.Nights = eeparseFloat(document.getElementById("Nights").value),
    co.Tax = eeparseFloatTh(document.getElementById("Tax").value),
    co.Rate = eeparseFloatTh(document.getElementById("Rate").value),
    co.Folio = eeparseFloatTh(document.getElementById("Folio").value),
    co.EliteStatus = eegetdropdownvalue(document.getElementsByName("EliteStatus")),
    co.MyWay = eegetdropdownvalue(document.getElementsByName("MyWay")),
    co.Promo = eegetdropdownvalue(document.getElementsByName("Promo")),
    co.AMEX = eegetdropdownvalue(document.getElementsByName("AMEX")),
    calc(co),
    void 0 !== ssc && void 0 !== ssc.realtimesync && void 0 !== ssc.realtimesync.connection && 1 == ssc.realtimesync.connection.readyState ? ssc.realtimesync.coUpdate(co, e) : void 0 !== ssc && void 0 !== ssc.realtimesync && ssc.realtimesync.wsUrl && ssc.realtimesync.IsCloseByError && !ssc.realtimesync.IsErrorMsgDialogShown && (alert("Realtime-Sync is Disconnected, This Form will not save in server and will not collaborate with your partner.") || (ssc.realtimesync.IsErrorMsgDialogShown = !0)),
    document.getElementById("XLEW_1_27_1").value = co.XLEW_1_27_1,
    document.getElementById("XLEW_1_40_2").value = eedisplayFloatNDTh(co.XLEW_1_40_2, 0),
    document.getElementById("XLEW_1_42_2").value = eedatefmt(fmtdate1, co.XLEW_1_42_2),
    document.getElementById("XLEW_1_44_2").value = eedisplayFloatNDTh(co.XLEW_1_44_2, 0),
    document.getElementById("XLEW_1_51_2").value = eedisplayFloatNDTh(co.XLEW_1_51_2, 0),
    document.getElementById("XLEW_1_54_2").value = eedisplayFloatNDTh(co.XLEW_1_54_2, 0),
    document.getElementById("XLEW_1_56_2").value = eeisnumber(co.XLEW_1_56_2) ? eedisplayFloatNDTh(co.XLEW_1_56_2, 0) : co.XLEW_1_56_2,
    document.getElementById("XLEW_1_58_2").value = eedisplayFloatNDTh(co.XLEW_1_58_2, 0),
    document.getElementById("XLEW_1_60_2").value = eedisplayFloatNDTh(co.XLEW_1_60_2, 0)
}
function str_eq(e, t) {
    return isNaN(e) && isNaN(t) ? e.toLowerCase() == t.toLowerCase() : e == t
}
function str_ls(e, t) {
    return isNaN(e) && isNaN(t) ? e.toLowerCase() < t.toLowerCase() : t > e
}
function eegetdropdownvalue(e) {
    var t, r = $(e), a = r.get(0).tagName;
    return t = "INPUT" == a ? $("input[name=" + r.attr("name") + "]:checked").attr("data-value") : "SELECT" == a ? r.find(":selected").attr("data-value") : r.val(),
    void 0 == t ? 0 : eeunpackdropdownvalue(t)
}
function myIsNaN(e) {
    return isNaN(e) || "number" == typeof e && !isFinite(e)
}
function mod(e, t) {
    return e - t * Math.floor(e / t)
}
function round(e, t) {
    if (isFinite(e) && isFinite(t)) {
        var r = 0 > e ? -1 : 1
          , a = Math.abs(e)
          , n = Math.pow(10, t);
        return r * Math.round(a * n) / n
    }
    return NaN
}
function roundup(e, t) {
    if (isFinite(e) && isFinite(t)) {
        var r = 0 > e ? -1 : 1
          , a = Math.abs(e)
          , n = Math.pow(10, 0 > t ? Math.ceil(t) : Math.floor(t));
        return r * Math.ceil(a * n) / n
    }
    return NaN
}
function sum2(e, t, r) {
    for (var a = 0, n = t; r >= n; n++)
        a += e[n];
    return a
}
function sum3(e, t, r, a, n) {
    for (var o = 0, i = t; a >= i; i++)
        for (var s = r; n >= s; s++)
            o += e[i][s];
    return o
}
function sumgeneral(e, t, r, a) {
    for (var n = t, o = 0; o < a.length; o++)
        n += sum3(a[o][0], a[o][1], a[o][2], a[o][3], a[o][4]);
    return n
}
function orgeneral(e, t, r, a) {
    if (t)
        return !0;
    for (var n = 0; n < a.length; n++)
        for (var o = a[n][0], i = a[n][1]; i <= a[n][3]; i++)
            for (var s = a[n][2]; s <= a[n][4]; s++)
                if (o[i][s])
                    return !0;
    return !1
}
function s2n(e) {
    e = String(e).replace(eedecreg, "."),
    e = e.replace(eethreg, ""),
    e = e.replace(eecurrencyreg, "");
    var t = parseFloat(e);
    return myIsNaN(t) && (t = 0),
    e.search(eepercentreg) >= 0 && (t /= 100),
    t
}
function v2n(e) {
    switch (typeof e) {
    case "number":
        return e;
    case "string":
        return s2n(e);
    case "boolean":
        return e ? 1 : 0;
    case "object":
        return e.constructor == Number ? e : e.constructor == String ? s2n(e) : e.constructor == Boolean ? e ? 1 : 0 : Number.NaN;
    default:
        return Number.NaN
    }
}
function eeparseFloat(e) {
    e = String(e).replace(eedecreg, ".");
    var t = parseFloat(e);
    return isNaN(t) ? 0 : t
}
function eedisplayFloat(e) {
    if (myIsNaN(e))
        return Number.NaN;
    var t = String(e);
    return near0RegExp.test(t) && (e = round(e, 8),
    t = String(e)),
    t.replace(/\./g, eedec)
}
function eedisplayScientific(e, t) {
    if (myIsNaN(e))
        return Number.NaN;
    var r = String(e.toExponential(t));
    return r.replace(/\./g, eedec)
}
function eedisplayFloatND(e, t) {
    if (myIsNaN(e))
        return Number.NaN;
    var r = round(e, t);
    if (t > 0) {
        var a = String(r);
        if (-1 != a.indexOf("e"))
            return a;
        if (-1 != a.indexOf("E"))
            return a;
        var n = a.split(".");
        if (n.length < 2) {
            var o = "00000000000000".substring(0, t);
            return n[0].toString() + eedec + o
        }
        var o = (n[1].toString() + "00000000000000").substring(0, t);
        return n[0].toString() + eedec + o
    }
    return r
}
function eedisplayPercent(e) {
    return myIsNaN(e) ? Number.NaN : eedisplayFloat(100 * e) + "%"
}
function eedisplayPercentND(e, t) {
    return myIsNaN(e) ? Number.NaN : eedisplayFloatND(100 * e, t) + "%"
}
function eeparseFloatTh(e) {
    e = String(e).replace(eethreg, ""),
    e = String(e).replace(eedecreg, ".");
    var t = parseFloat(e);
    return isNaN(t) ? 0 : t
}
function eedisplayFloatNDTh(e, t) {
    if (myIsNaN(e))
        return Number.NaN;
    var r = round(e, t);
    if (t > 0) {
        var a = String(r);
        if (-1 != a.indexOf("e"))
            return a;
        if (-1 != a.indexOf("E"))
            return a;
        var n = a.split(".")
          , o = eeinsertThousand(n[0].toString());
        if (n.length < 2) {
            var i = "00000000000000".substring(0, t);
            return o + eedec + i
        }
        var i = (n[1].toString() + "00000000000000").substring(0, t);
        return o + eedec + i
    }
    return eeinsertThousand(r.toString())
}
function eedisplayPercentNDTh(e, t) {
    return myIsNaN(e) ? Number.NaN : eedisplayFloatNDTh(100 * e, t) + "%"
}
function eeinsertThousand(e) {
    if ("" == e || e.indexOf("e") >= 0)
        return e;
    var t = "";
    "-" == e.charAt(0) && (t = "-",
    e = e.substring(1));
    for (var r = "", a = e.length - 1, n = 0; a >= n; n++)
        n > 0 && n % 3 == 0 && (r = eeth + r),
        r = e.charAt(a - n) + r;
    return t + r
}
function eedatefmt(e, t) {
    if (!isFinite(t))
        return Number.NaN;
    for (var r = 0, a = 0, n = "", o = e.length, i = 0; o > i; i++)
        if (e[i] > 31)
            n += fmtstrings[e[i] - 32];
        else
            switch (e[i]) {
            case 2:
                n += eemonth(t);
                break;
            case 3:
                a = eemonth(t),
                10 > a && (n += "0"),
                n += a;
                break;
            case 4:
                n += fmtmonthnamesshort[eemonth(t) - 1];
                break;
            case 5:
                n += fmtmonthnameslong[eemonth(t) - 1];
                break;
            case 6:
                n += eeday(t);
                break;
            case 7:
                a = eeday(t),
                10 > a && (n += "0"),
                n += a;
                break;
            case 8:
                n += fmtdaynamesshort[weekday(t, 1) - 1];
                break;
            case 9:
                n += fmtdaynameslong[weekday(t, 1) - 1];
                break;
            case 10:
                a = year(t) % 100,
                10 > a && (n += "0"),
                n += a;
                break;
            case 11:
                n += year(t);
                break;
            case 12:
                n += hour(t);
                break;
            case 13:
                a = hour(t),
                10 > a && (n += "0"),
                n += a;
                break;
            case 14:
                a = hour(t) % 12,
                n += 0 == a ? "12" : a % 12;
                break;
            case 15:
                a = hour(t) % 12,
                0 == a ? n += "12" : (10 > a && (n += "0"),
                n += a);
                break;
            case 16:
                n += minute(t);
                break;
            case 17:
                a = minute(t),
                10 > a && (n += "0"),
                n += a;
                break;
            case 18:
                n += second(t);
                break;
            case 19:
                a = second(t),
                10 > a && (n += "0"),
                n += a;
                break;
            case 21:
            case 22:
                n += hour(t) < 12 ? "AM" : "PM";
                break;
            case 23:
                n += eedisplayFloat(t);
                break;
            case 24:
                a = e[++i],
                n += eedisplayFloatND(t, a);
                break;
            case 25:
                a = e[++i],
                n += eedisplayFloatNDTh(t, a);
                break;
            case 26:
                n += eedisplayPercent(t);
                break;
            case 27:
                a = e[++i],
                n += eedisplayPercentND(t, a);
                break;
            case 28:
                a = e[++i],
                n += eedisplayPercentNDTh(t, a);
                break;
            case 29:
                a = e[++i],
                n += eedisplayScientific(t, a);
                break;
            case 30:
                r = e[++i],
                a = hour(t) + 24 * Math.floor(t),
                a = a.toString(),
                a.length < r && (n += "00000000000000".substring(0, r - a.length)),
                n += a
            }
    return n
}
function eeisstring(e) {
    switch (typeof e) {
    case "string":
        return !0;
    case "object":
        return e.constructor == String;
    default:
        return !1
    }
}
function eeunpackdropdownvalue(e) {
    if (e.length < 2)
        return e;
    var t = e.substring(0, 2)
      , r = e.substring(2);
    return "b:" == t ? "true" == r.toLowerCase() : "n:" == t ? parseFloat(r) : "s:" == t ? r : e
}
function eeisnumber(e) {
    if (null == e || isNaN(e) || e == Number.NEGATIVE_INFINITY || e == Number.POSITIVE_INFINITY)
        return !1;
    switch (typeof e) {
    case "number":
        return !0;
    case "object":
        return e.constructor == Number;
    default:
        return !1
    }
}
function isna(e) {
    return "number" == typeof e ? isNaN(e) : !1
}
function hlookup_str(e, t, r, a, n, o, i, s) {
    if (isna(e))
        return Number.NaN;
    if (s)
        return lookup3vv_str(e, t, r, a, n, o, i);
    for (var c = r; a >= c; c++)
        if (str_eq(t[c], e))
            return n[o + c - r];
    return Number.NaN
}
function lookup3vv_str(e, t, r, a, n, o, i) {
    if (isna(e))
        return Number.NaN;
    for (var s = 0, c = r, u = a + 1; ; ) {
        if (s = c + u >> 1,
        str_eq(t[s], e))
            break;
        if (c == u - 1)
            break;
        str_ls(t[s], e) ? c = s : u = s
    }
    for (; a > s && str_eq(t[s], t[s + 1]); )
        s++;
    return str_ls(e, t[s]) ? Number.NaN : n[o + s - r]
}
function leap_gregorian(e) {
    return e % 4 == 0 && !(e % 100 == 0 && e % 400 != 0)
}
function gregorian_to_jd(e, t, r) {
    return GREGORIAN_EPOCH - 0 + 365 * (e - 1) + Math.floor((e - 1) / 4) + -Math.floor((e - 1) / 100) + Math.floor((e - 1) / 400) + Math.floor((367 * t - 362) / 12 + (2 >= t ? 0 : leap_gregorian(e) ? -1 : -2) + r)
}
function jd_to_gregorian(e) {
    var t, r, a, n, o, i, s, c, u, l, d, f;
    t = Math.floor(e),
    r = t - GREGORIAN_EPOCH - 1,
    a = Math.floor(r / 146097),
    n = mod(r, 146097),
    o = Math.floor(n / 36524),
    i = mod(n, 36524),
    s = Math.floor(i / 1461),
    c = mod(i, 1461),
    u = Math.floor(c / 365),
    l = 400 * a + 100 * o + 4 * s + u,
    4 != o && 4 != u && l++,
    d = t - gregorian_to_jd(l, 1, 1),
    f = t < gregorian_to_jd(l, 3, 1) ? 0 : leap_gregorian(l) ? 1 : 2;
    var m = Math.floor((12 * (d + f) + 373) / 367)
      , g = t - gregorian_to_jd(l, m, 1) + 1;
    return new Array(l,m,g)
}
function eeday(e) {
    if (!isFinite(e))
        return Number.NaN;
    if (1 > e)
        return 0;
    e > 60 && e--;
    var t = jd_to_gregorian(e + 2415020);
    return t[2]
}
function hour(e) {
    if (!isFinite(e))
        return Number.NaN;
    var t = Math.floor(86400 * (e - Math.floor(e)) + .5);
    return Math.floor(t / 3600)
}
function minute(e) {
    if (!isFinite(e))
        return Number.NaN;
    var t = Math.floor(86400 * (e - Math.floor(e)) + .5);
    return Math.floor(t / 60) % 60
}
function eemonth(e) {
    if (!isFinite(e))
        return Number.NaN;
    if (1 > e)
        return 1;
    e > 60 && e--;
    var t = jd_to_gregorian(e + 2415020);
    return t[1]
}
function second(e) {
    if (!isFinite(e))
        return Number.NaN;
    var t = Math.floor(86400 * (e - Math.floor(e)) + .5);
    return t % 60
}
function weekday(e, t) {
    if (!isFinite(t) || !isFinite(e))
        return Number.NaN;
    if (1 > t || t > 3)
        return Number.NaN;
    var r = Math.floor(e + 6) % 7;
    switch (Math.floor(t)) {
    case 1:
        return r + 1;
    case 2:
        return (r + 6) % 7 + 1;
    case 3:
        return (r + 6) % 7
    }
    return "hej"
}
function year(e) {
    if (!isFinite(e))
        return Number.NaN;
    if (1 > e)
        return 1900;
    e > 60 && e--;
    var t = jd_to_gregorian(e + 2415020);
    return t[0]
}
function postcode() {}
function TriggerOnchange(e) {
    var t = jQuery.Event("change");
    $("#" + e).trigger(t)
}
function LoadFromQueryString() {
    var e = decodeURI(document.location.search)
      , t = !1;
    e.indexOf("_readonly") > -1 && (t = !0),
    e.length > 0 && $.each(e.substr(1).split("&"), function(e, t) {
        var r = t.split("=");
        if (2 == r.length) {
            var a = r[0].toString()
              , n = r[1].toString();
            ssc.formBinder.bind(a, n)
        }
    })
}
function navigate(e) {
    var t = e.keyCode | e.which;
    if (13 == t || 40 == t || 38 == t) {
        var r = $(e.target || e.srcElement);
        if (!r.is("textarea") && (!r.is("select") || 38 != t && 40 != t)) {
            for (var a = parseInt(r.attr("data-sheet"), 10), n = parseInt(r.attr("data-row"), 10), o = parseInt(r.attr("data-col"), 10), i = !1, s = $("#sheet-" + a), c = 'input:not(":hidden,:button,[readonly=readonly],:disabled"),select,a.ui-slider-handle,textarea', u = n + 1, l = n - 1, d = u, f = l; 40 == t && d >= u || 38 == t && l >= f; ) {
                var m = s.find(c).filter("[data-sheet=" + a + "][data-row=" + (38 == t ? l : u) + "][data-col=" + o + "]");
                if (m.length > 0) {
                    m.focus(),
                    m.is("input:text, textarea") && m.select(),
                    i = !0;
                    break
                }
                var g;
                void 0 == s.data("col" + o) ? (g = s.find(c).filter("[data-sheet=" + a + "][data-col=" + o + "]").map(function() {
                    return parseInt($(this).attr("data-row"), 10)
                }).toArray(),
                s.data("col" + o, g)) : g = s.data("col" + o),
                d = g[g.length - 1],
                f = g[0];
                var h = "indexOf"in Array.prototype ? g.indexOf(n) : $.inArray(n, g);
                if (40 == t && d > n)
                    u = g[h + 1];
                else {
                    if (!(38 == t && n > f))
                        break;
                    l = g[h - 1]
                }
            }
            if (!i) {
                var N;
                N = 38 == t ? parseInt(r.attr("tabindex"), 10) - 1 : parseInt(r.attr("tabindex"), 10) + 1;
                var y = s.find(c).filter("[data-sheet][data-row][data-col][tabindex=" + N + "]");
                if (y.length > 0)
                    y.is(":radio") && (y = y.filter(":checked")),
                    y.length > 0 && (y.focus(),
                    y.is("input:text, textarea") && y.select());
                else {
                    var p = s.find(c).filter("[data-sheet][data-row][data-col][tabindex]:first");
                    p.focus(),
                    p.is("input:text, textarea") && p.select()
                }
            }
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        }
    }
}
function calendarCallback(e) {
    var t = $("#" + e.id).data("caltype")
      , r = "popup" == t ? e.id : "cal_" + e.id
      , a = $("#" + r)
      , n = e.s1;
    void 0 === a.data("is-dirty") && ("" == n || isNaN(n) || (a.datepicker("update", new Date(year(n),eemonth(n) - 1,eeday(n))),
    EE.eeRecalcNeeded = !0))
}
function showValidateMessage(e, t) {
    toastr ? t && t.length > 0 ? toastr.error(e, t) : toastr.error(e) : alert(e)
}
var eeisus = 1
  , eetrue = "TRUE"
  , eefalse = "FALSE"
  , eedec = "."
  , eeth = ","
  , eedecreg = new RegExp("\\.","g")
  , eethreg = new RegExp(",","g")
  , eecurrencyreg = new RegExp("[$]","g")
  , eepercentreg = new RegExp("%","g")
  , fmtdaynamesshort = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat")
  , fmtdaynameslong = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
  , fmtmonthnamesshort = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")
  , fmtmonthnameslong = new Array("January","February","March","April","May","June","July","August","September","October","November","December")
  , fmtstrings = new Array("$")
  , fmtdate1 = [32, 25, 2]
  , co = new Object
  , near0RegExp = new RegExp("[.](.*0000000|.*9999999)")
  , GREGORIAN_EPOCH = 1721425;
jQuery.expr[":"].hiddenByParent = function(e) {
    if (e.id.startsWith("xl_"))
        return !0;
    var t = !1
      , r = $(e);
    return void 0 != r && (t = "none" != r.closest("tr[class^='_css']").css("display")),
    1 == t && (t = "none" != r.closest(".tab-pane>div").css("display")),
    t
}
;
var ssccf1n = function(e, t, r, a) {
    switch (e) {
    case "image":
        $("#" + t).attr("src", $("#" + a).attr("src"))
    }
}
  , ssccf4n = function(e, t, r, a, n, o, i) {}
  , ssc = ssc || {};
ssc.pendingUploads = 0,
ssc.recalcSource = "",
ssc.APPNAME = "hilton-honors-point-calculator-300720",
ssc.exMsg = "The fields with the red border are required or invalid.",
$(window).on("scroll", function() {
    var e = $(window);
    $(".position-fixed-x").css("left", e.scrollLeft()),
    $(".position-fixed-y").css("top", e.scrollTop())
}),
ssc.Dialog = {},
ssc.Dialog.BeforeSubmitDesc = "The form is being submitted.",
ssc.Dialog.OfflineHeading = "Save until online",
ssc.Dialog.OfflineDesc = "You are currently offline and the submit failed. Do you want to save the submit and send it later when you are online.",
ssc.Dialog.OfflineConfirm = "Do you want to save?",
ssc.Dialog.OfflineSubmitHeading = "Offline forms submit confirmation",
ssc.Dialog.OfflineSubmitDesc = "There are Offline form(s), which are now ready to submit in server.",
ssc.Dialog.OfflineSubmitConfirm = "Do you want to submit?",
ssc.Dialog.FailOfflineHeading = "Offline Form submit failed",
ssc.Dialog.FailOfflineDesc = "Unable to connect to the Internet. Please try submitting the offline forms later in internet connection.",
ssc.Dialog.OfflineSubmitWait = "It may take sometime to finish all submits depending on the size of offline forms and internet connection.",
ssc.Dialog.OfflineSubmitWaitCounter = "Left";
var focused = !1;
!function(e) {
    postcode(),
    ssc.active_sheet_selector = "div.active > div.container-fluid.ssc-responsive-sheet > div.row > section",
    e("a").on("click", function(t) {
        var r = e(this).attr("href");
        if ("#" == r.slice(0, 1)) {
            if (t.preventDefault(),
            "#" == r)
                return;
            var a = e(r);
            if (0 == a.length)
                return void alert("Oops! This link is broken so can not navigate.");
            focused = !1,
            ssc.focusOnElement(a)
        }
    }),
    ssc.focusOnElement = function(t) {
        if (!focused) {
            focused = !0;
            var r = t.parents(".tab-pane");
            r.hasClass("active") || e('.nav-tabs a[href="#' + r.attr("id") + '"]').tab("show"),
            e("html, body").stop().animate({
                scrollTop: t.offset().top - 40
            }, 900, "swing", function() {
                t.focus()
            })
        }
    }
    ,
    e(".btn.btn-sm.button-update").on("click", function() {
        return recalc_onclick(""),
        !1
    });
    var t = e('input:not(":hidden,:button,[readonly=readonly],:disabled"),select,a.ui-slider-handle,textarea,a.ui-state-active');
    void 0 != t && 0 == t.filter(":first").hasClass("form-control") && t.filter(":first").focus(),
    e("textarea[readonly],input[type=text][readonly]").css("background", "transparent")
}($),
ssc.checkIfMSIE = function() {
    var e = window.navigator.userAgent
      , t = e.indexOf("MSIE ")
      , r = e.indexOf(".NET CLR");
    return !(-1 === t && -1 === r)
}
;

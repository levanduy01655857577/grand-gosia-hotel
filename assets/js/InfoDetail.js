/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */ ! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "2.2.4",
        n = function(a, b) { return new n.fn.init(a, b) },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) { return b.toUpperCase() };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() { return e.call(this) },
        get: function(a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this) },
        pushStack: function(a) { var b = n.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b },
        each: function(a) { return n.each(this, a) },
        map: function(a) { return this.pushStack(n.map(this, function(b, c) { return a.call(b, c, b) })) },
        slice: function() { return this.pushStack(e.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) { throw new Error(a) },
        noop: function() {},
        isFunction: function(a) { return "function" === n.type(a) },
        isArray: Array.isArray,
        isWindow: function(a) { return null != a && a === a.window },
        isNumeric: function(a) { var b = a && a.toString(); return !n.isArray(a) && b - parseFloat(b) + 1 >= 0 },
        isPlainObject: function(a) { var b; if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1; if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1; for (b in a); return void 0 === b || k.call(a, b) },
        isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 },
        type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) { return a.replace(p, "ms-").replace(q, r) },
        nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a
        },
        trim: function(a) { return null == a ? "" : (a + "").replace(o, "") },
        makeArray: function(a, b) { var c = b || []; return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c },
        inArray: function(a, b, c) { return null == b ? -1 : h.call(b, a, c) },
        merge: function(a, b) { for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d]; return a.length = e, a },
        grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) { var c, d, f; return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function() { return a.apply(b || this, d.concat(e.call(arguments))) }, f.guid = a.guid = a.guid || n.guid++, f) : void 0 },
        now: Date.now,
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { i["[object " + b + "]"] = b.toLowerCase() });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) { return a === b && (l = !0), 0 },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
            da = function() { m() };
        try { H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType } catch (ea) {
            H = {
                apply: E.length ? function(a, b) { G.apply(a, I.call(b)) } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) { if (9 === x) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d; if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try { return H.apply(d, w.querySelectorAll(s)), d } catch (y) {} finally { k === u && b.removeAttribute("id") }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e }
            return b
        }

        function ha(a) { return a[u] = !0, a }

        function ia(a) { var b = n.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function ma(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) { return a && "undefined" != typeof a.getElementsByTagName && a }
        c = fa.support = {}, f = fa.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ia(function(a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }, d.filter.ID = function(a) { var b = a.replace(ba, ca); return function(a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function(a) { var b = a.replace(ba, ca); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) { return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0 }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) { return fa(a, null, null, b) }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(a) { return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } },
            filter: {
                TAG: function(a) { var b = a.replace(ba, ca).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } },
                CLASS: function(a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) },
                ATTR: function(a, b, c) { return function(d) { var e = fa.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) { return e(a, 0, c) }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() }
                }),
                has: ha(function(a) { return function(b) { return fa(a, b).length > 0 } }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id },
                root: function(a) { return a === o },
                focus: function(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) },
                enabled: function(a) { return a.disabled === !1 },
                disabled: function(a) { return a.disabled === !0 },
                checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected },
                selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) { return !d.pseudos.empty(a) },
                header: function(a) { return Y.test(a.nodeName) },
                input: function(a) { return X.test(a.nodeName) },
                button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b },
                text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) },
                first: na(function() { return [0] }),
                last: na(function(a, b) { return [b - 1] }),
                eq: na(function(a, b, c) { return [0 > c ? c + b : c] }),
                even: na(function(a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }),
                odd: na(function(a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }),
                lt: na(function(a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }),
                gt: na(function(a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = la(b);
        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) { c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) { if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2]; if (i[d] = k, k[2] = a(b, c, g)) return !0 }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) { for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c); return c }

        function ua(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) { j = ua(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) { return a === b }, h, !0), l = ra(function(a) { return J(b, a) > -1 }, h, !0), m = [function(a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) { i.push(l); break }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e; break } }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) { return 1 & a.compareDocumentPosition(n.createElement("div")) }), ia(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ja("type|href|height|width", function(a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ia(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ja("value", function(a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), ia(function(a) { return null == a.getAttribute("disabled") }) || ja(K, function(a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        v = function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) { return !!b.call(a, d, a) !== c });
        if (b.nodeType) return n.grep(a, function(a) { return a === b !== c });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) { return h.call(b, a) > -1 !== c })
    }
    n.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) { return 1 === a.nodeType })) }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) { return this.pushStack(z(this, a || [], !1)) },
        not: function(a) { return this.pushStack(z(this, a || [], !0)) },
        is: function(a) { return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = { children: !0, contents: !0, next: !0, prev: !0 };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) { return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(a, b) { return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b)))) },
        addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
    });

    function F(a, b) { while ((a = a[b]) && 1 !== a.nodeType); return a }
    n.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return u(a, "parentNode") }, parentsUntil: function(a, b, c) { return u(a, "parentNode", c) }, next: function(a) { return F(a, "nextSibling") }, prev: function(a) { return F(a, "previousSibling") }, nextAll: function(a) { return u(a, "nextSibling") }, prevAll: function(a) { return u(a, "previousSibling") }, nextUntil: function(a, b, c) { return u(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return u(a, "previousSibling", c) }, siblings: function(a) { return v((a.parentNode || {}).firstChild, a) }, children: function(a) { return v(a.firstChild) }, contents: function(a) { return a.contentDocument || n.merge([], a.childNodes) } }, function(a, b) { n.fn[a] = function(c, d) { var e = n.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e) } });
    var G = /\S+/g;

    function H(a) { var b = {}; return n.each(a.match(G) || [], function(a, c) { b[c] = !0 }), b }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = { add: function() { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { n.each(b, function(b, c) { n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function() { return n.each(arguments, function(a, b) { var c; while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h-- }), this }, has: function(a) { return a ? n.inArray(a, f) > -1 : f.length > 0 }, empty: function() { return f && (f = []), this }, disable: function() { return e = g = [], f = c = "", this }, disabled: function() { return !f }, lock: function() { return e = g = [], c || (f = c = ""), this }, locked: function() { return !!e }, fireWith: function(a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function() { return j.fireWith(this, arguments), this }, fired: function() { return !!d } };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() { return c },
                    always: function() { return e.done(arguments).fail(arguments), this },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) { return null != a ? n.extend(a, d) : d }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) { return function(d) { b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) { return n.ready.promise().done(a), this }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) { a ? n.readyWait++ : n.ready(!0) },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() { d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready() }
    n.ready.promise = function(b) { return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b) }, n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) { e = !0; for (h in c) K(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(n(a), c) })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        L = function(a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType };

    function M() { this.expando = n.expando + M.uid++ }
    M.uid = 1, M.prototype = {
        register: function(a, b) { var c = b || {}; return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando] },
        cache: function(a) { if (!L(a)) return {}; var b = a[this.expando]; return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c;
            else
                for (d in b) e[d] = b[d];
            return e
        },
        get: function(a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b] },
        access: function(a, b, c) { var d; return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b) },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a);
                else { n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length; while (c--) delete f[d[c]] }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) { var b = a[this.expando]; return void 0 !== b && !n.isEmptyObject(b) }
    };
    var N = new M,
        O = new M,
        P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;

    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
                } catch (e) {}
                O.set(a, b, c)
            } else c = void 0;
        return c
    }
    n.extend({ hasData: function(a) { return O.hasData(a) || N.hasData(a) }, data: function(a, b, c) { return O.access(a, b, c) }, removeData: function(a, b) { O.remove(a, b) }, _data: function(a, b, c) { return N.access(a, b, c) }, _removeData: function(a, b) { N.remove(a, b) } }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() { O.set(this, a) }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) { if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c; if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c; if (c = R(f, d, void 0), void 0 !== c) return c } else d = n.camelCase(a), this.each(function() {
                    var c = O.get(this, d);
                    O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) { return this.each(function() { O.remove(this, a) }) }
    }), n.extend({
        queue: function(a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0 },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() { n.dequeue(a, b) };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) { var c = b + "queueHooks"; return N.get(a, c) || N.access(a, c, { empty: n.Callbacks("once memory").add(function() { N.remove(a, [b + "queue", c]) }) }) }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) { return this.each(function() { n.dequeue(this, a) }) },
        clearQueue: function(a) { return this.queue(a || "fx", []) },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {--d || e.resolveWith(f, [f]) };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) { return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a) };

    function W(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() { return d.cur() } : function() { return n.css(a, b, "") },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var X = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        Z = /^$|\/(?:java|ecma)script/i,
        $ = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

    function _(a, b) { var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : []; return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c }

    function aa(a, b) { for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval")) }
    var ba = /<|&#?\w+;/;

    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o], f || 0 === f)
                if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", o = 0;
        while (f = m[o++])
            if (d && n.inArray(f, d) > -1) e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) { k = 0; while (f = g[k++]) Z.test(f.type || "") && c.push(f) }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/,
        ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fa = /^([^.]*)(?:\.(.+)|)/;

    function ga() { return !0 }

    function ha() { return !1 }

    function ia() { try { return d.activeElement } catch (a) {} }

    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) ja(a, h, c, d, b[h], f); return a }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) { return n().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() { n.event.add(this, b, e, d, c) })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a); if (r) { c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) { return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(G) || [""], j = b.length; while (j--) h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0) } },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (N.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = n.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, c = 0; while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({ elem: i, handlers: d })
                    }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } },
        mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a, b) { var c, e, f, g = b.button; return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a } },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
        },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { return this !== ia() && this.focus ? (this.focus(), !1) : void 0 }, delegateType: "focusin" }, blur: { trigger: function() { return this === ia() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0 }, _default: function(a) { return n.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }
    }, n.removeEvent = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, n.Event = function(a, b) { return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b) }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), n.fn.extend({ on: function(a, b, c, d) { return ja(this, a, b, c, d) }, one: function(a, b, c, d) { return ja(this, a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function() { n.event.remove(this, a, c, b) }) } });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        la = /<script|<style|<link/i,
        ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
        na = /^true\/(.*)/,
        oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pa(a, b) { return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

    function qa(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a }

    function ra(a) { var b = na.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
        }
    }

    function ta(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) }

    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
        });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
            for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
            if (i)
                for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
        }
        return a
    }

    function va(a, b, c) { for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d)); return a }
    n.extend({
        htmlPrefilter: function(a) { return a.replace(ka, "<$1></$2>") },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]);
                else sa(a, h);
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (L(c)) {
                    if (b = c[N.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0
                    }
                    c[O.expando] && (c[O.expando] = void 0)
                }
        }
    }), n.fn.extend({
        domManip: ua,
        detach: function(a) { return va(this, a, !0) },
        remove: function(a) { return va(this, a) },
        text: function(a) { return K(this, function(a) { return void 0 === a ? n.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() { return ua(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) },
        after: function() { return ua(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) },
        empty: function() { for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = ""); return this },
        clone: function(a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() { return n.clone(this, a, b) }) },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { n.fn[a] = function(a) { for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get()); return this.pushStack(d) } });
    var wa, xa = { HTML: "block", BODY: "block" };

    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function za(a) {
        var b = d,
            c = xa[a];
        return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
    }
    var Aa = /^margin/,
        Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ca = function(b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) },
        Da = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Ea = d.documentElement;
    ! function() {
        var b, c, e, f, g = d.createElement("div"),
            h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g)
            }
            n.extend(l, { pixelPosition: function() { return i(), b }, boxSizingReliable: function() { return null == c && i(), c }, pixelMarginRight: function() { return null == c && i(), e }, reliableMarginLeft: function() { return null == c && i(), f }, reliableMarginRight: function() { var b, c = h.appendChild(d.createElement("div")); return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b } })
        }
    }();

    function Fa(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g }

    function Ga(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } }
    var Ha = /^(none|table(?!-c[ea]).+)/,
        Ia = { position: "absolute", visibility: "hidden", display: "block" },
        Ja = { letterSpacing: "0", fontWeight: "400" },
        Ka = ["Webkit", "O", "Moz", "ms"],
        La = d.createElement("div").style;

    function Ma(a) {
        if (a in La) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ka.length;
        while (c--)
            if (a = Ka[c] + b, a in La) return a
    }

    function Na(a, b, c) { var d = T.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b }

    function Oa(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e))); return g }

    function Pa(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ca(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Qa(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a }
    n.extend({
        cssHooks: { opacity: { get: function(a, b) { if (b) { var c = Fa(a, "opacity"); return "" === c ? "1" : c } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": "cssFloat" },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) { var e, f, g, h = n.camelCase(b); return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) { return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() { return Pa(a, b, d) }) : Pa(a, b, d) : void 0 },
            set: function(a, c, d) {
                var e, f = d && Ca(a),
                    g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
            }
        }
    }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) { return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left })) + "px" : void 0 }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) { return b ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"]) : void 0 }), n.each({ margin: "", padding: "", border: "Width" }, function(a, b) { n.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Aa.test(a) || (n.cssHooks[a + b].set = Na) }), n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) { for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d); return f }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() { return Qa(this, !0) },
        hide: function() { return Qa(this) },
        toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { V(this) ? n(this).show() : n(this).hide() }) }
    });

    function Ra(a, b, c, d, e) { return new Ra.prototype.init(a, b, c, d, e) }
    n.Tween = Ra, Ra.prototype = { constructor: Ra, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px") }, cur: function() { var a = Ra.propHooks[this.prop]; return a && a.get ? a.get(this) : Ra.propHooks._default.get(this) }, run: function(a) { var b, c = Ra.propHooks[this.prop]; return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this } }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = { _default: { get: function(a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function(a) { n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit) } } }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, n.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
        Va = /queueHooks$/;

    function Wa() { return a.setTimeout(function() { Sa = void 0 }), Sa = n.now() }

    function Xa(a, b) {
        var c, d = 0,
            e = { height: a };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && V(a),
            q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, l.always(function() { l.always(function() { h.unqueued--, n.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] }));
        for (d in b)
            if (e = b[d], Ua.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() { n(a).hide() }), l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e
    }

    function _a(a, b, c) {
        var d, e, f = 0,
            g = _a.prefilters.length,
            h = n.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Sa || Wa(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) { var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++)
            if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(_a, { tweeners: { "*": [function(a, b) { var c = this.createTween(a, b); return W(c.elem, a, T.exec(b), c), c }] }, tweener: function(a, b) { n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b) }, prefilters: [Za], prefilter: function(a, b) { b ? _a.prefilters.unshift(a) : _a.prefilters.push(a) } }), n.speed = function(a, b, c) { var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b }; return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() { n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue) }, d }, n.fn.extend({
            fadeTo: function(a, b, c, d) { return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = _a(this, n.extend({}, a), f);
                        (e || N.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = N.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = N.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e) }
        }), n.each({ slideDown: Xa("show"), slideUp: Xa("hide"), slideToggle: Xa("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { n.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), n.timers = [], n.fx.tick = function() {
            var a, b = 0,
                c = n.timers;
            for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(), Sa = void 0
        }, n.fx.timer = function(a) { n.timers.push(a), a() ? n.fx.start() : n.timers.pop() }, n.fx.interval = 13, n.fx.start = function() { Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval)) }, n.fx.stop = function() { a.clearInterval(Ta), Ta = null }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() { a.clearTimeout(e) }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
        }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({ attr: function(a, b) { return K(this, n.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { n.removeAttr(this, a) }) } }), n.extend({
        attr: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d)) },
        attrHooks: { type: { set: function(a, b) { if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }
    }), ab = { set: function(a, b, c) { return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c } }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) { var e, f; return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e }
    });
    var cb = /^(?:input|select|textarea|button)$/i,
        db = /^(?:a|area)$/i;
    n.fn.extend({ prop: function(a, b) { return K(this, n.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return this.each(function() { delete this[n.propFix[a] || a] }) } }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]),
                void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: { tabIndex: { get: function(a) { var b = n.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1 } } },
        propFix: { "for": "htmlFor", "class": "className" }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { n.propFix[this.toLowerCase()] = this });
    var eb = /[\t\r\n\f]/g;

    function fb(a) { return a.getAttribute && a.getAttribute("class") || "" }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) { n(this).addClass(a.call(this, b, fb(this))) });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) { n(this).removeClass(a.call(this, b, fb(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) { n(this).toggleClass(a.call(this, c, fb(this), b), b) }) : this.each(function() { var b, d, e, f; if ("string" === c) { d = 0, e = n(this), f = a.match(G) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || "")) }) },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var gb = /\r/g,
        hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) { return null == a ? "" : a + "" })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: { get: function(a) { var b = n.find.attr(a, "value"); return null != b ? b : n.trim(n.text(a)).replace(hb, " ") } },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() { n.valHooks[this] = { set: function(a, b) { return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0 } }, l.checkOn || (n.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, { type: a, isSimulated: !0 });
            n.event.trigger(d, null, b)
        }
    }), n.fn.extend({ trigger: function(a, b) { return this.each(function() { n.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; return c ? n.event.trigger(a, b, c, !0) : void 0 } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { n.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), n.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } }), l.focusin = "onfocusin" in a, l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = function(a) { n.event.simulate(b, a.target, n.event.fix(a)) };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
            }
        }
    });
    var jb = a.location,
        kb = n.now(),
        lb = /\?/;
    n.parseJSON = function(a) { return JSON.parse(a + "") }, n.parseXML = function(b) { var c; if (!b || "string" != typeof b) return null; try { c = (new a.DOMParser).parseFromString(b, "text/xml") } catch (d) { c = void 0 } return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c };
    var mb = /#.*$/,
        nb = /([?&])_=[^&]*/,
        ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qb = /^(?:GET|HEAD)$/,
        rb = /^\/\//,
        sb = {},
        tb = {},
        ub = "*/".concat("*"),
        vb = d.createElement("a");
    vb.href = jb.href;

    function wb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function xb(a, b, c, d) {
        var e = {},
            f = a === tb;

        function g(h) { var i; return e[h] = !0, n.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function yb(a, b) { var c, d, e = n.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && n.extend(!0, a, d), a }

    function zb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) { i.unshift(e); break }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } }
        }
        return { state: "success", data: b }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: jb.href, type: "GET", isLocal: pb.test(jb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ub, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(a, b) { return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a) },
        ajaxPrefilter: wb(sb),
        ajaxTransport: wb(tb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
                o = m.context || m,
                p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
                q = n.Deferred(),
                r = n.Callbacks("once memory"),
                s = m.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === v) {
                            if (!h) { h = {}; while (b = ob.exec(g)) h[b[1].toLowerCase()] = b[2] }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() { return 2 === v ? g : null },
                    setRequestHeader: function(a, b) { var c = a.toLowerCase(); return v || (a = u[c] = u[c] || a, t[a] = b), this },
                    overrideMimeType: function(a) { return v || (m.mimeType = a), this },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > v)
                                for (b in a) s[b] = [s[b], a[b]];
                            else x.always(a[x.status]);
                        return this
                    },
                    abort: function(a) { var b = a || w; return e && e.abort(b), z(0, b), this }
                };
            if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) { j = d.createElement("a"); try { j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host } catch (y) { m.crossDomain = !0 } }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
            w = "abort";
            for (l in { success: 1, error: 1, complete: 1 }) x[l](m[l]);
            if (e = xb(tb, m, c, x)) {
                if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() { x.abort("timeout") }, m.timeout));
                try { v = 1, e.send(t, z) } catch (y) {
                    if (!(2 > v)) throw y;
                    z(-1, y)
                }
            } else z(-1, "No Transport");

            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(a, b, c) { return n.get(a, b, c, "json") },
        getScript: function(a, b) { return n.get(a, void 0, b, "script") }
    }), n.each(["get", "post"], function(a, b) { n[b] = function(a, c, d, e) { return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a)) } }), n._evalUrl = function(a) { return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, n.fn.extend({
        wrapAll: function(a) { var b; return n.isFunction(a) ? this.each(function(b) { n(this).wrapAll(a.call(this, b)) }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var a = this; while (a.firstElementChild) a = a.firstElementChild; return a }).append(this)), this) },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) { n(this).wrapInner(a.call(this, b)) }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) { var b = n.isFunction(a); return this.each(function(c) { n(this).wrapAll(b ? a.call(this, c) : a) }) },
        unwrap: function() { return this.parent().each(function() { n.nodeName(this, "body") || n(this).replaceWith(this.childNodes) }).end() }
    }), n.expr.filters.hidden = function(a) { return !n.expr.filters.visible(a) }, n.expr.filters.visible = function(a) { return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0 };
    var Bb = /%20/g,
        Cb = /\[\]$/,
        Db = /\r?\n/g,
        Eb = /^(?:submit|button|image|reset|file)$/i,
        Fb = /^(?:input|select|textarea|keygen)/i;

    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) { c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Gb(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) { b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) Gb(c, a[c], b, e);
        return d.join("&").replace(Bb, "+")
    }, n.fn.extend({ serialize: function() { return n.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = n.prop(this, "elements"); return a ? n.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a)) }).map(function(a, b) { var c = n(this).val(); return null == c ? null : n.isArray(c) ? n.map(c, function(a) { return { name: b.name, value: a.replace(Db, "\r\n") } }) : { name: b.name, value: c.replace(Db, "\r\n") } }).get() } }), n.ajaxSettings.xhr = function() { try { return new a.XMLHttpRequest } catch (b) {} };
    var Hb = { 0: 200, 1223: 204 },
        Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Ib && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) { return function() { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())) } }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() { 4 === h.readyState && a.setTimeout(function() { c && d() }) }, c = c("abort");
                try { h.send(b.hasContent && b.data || null) } catch (i) { if (c) throw i }
            },
            abort: function() { c && c() }
        } : void 0
    }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { return n.globalEval(a), a } } }), n.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), n.ajaxTransport("script", function(a) { if (a.crossDomain) { var b, c; return { send: function(e, f) { b = n("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function(a) { b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type) }), d.head.appendChild(b[0]) }, abort: function() { c && c() } } } });
    var Jb = [],
        Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = Jb.pop() || n.expando + "_" + kb++; return this[a] = !0, a } }), n.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || n.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a) }).always(c && function(a, b) { g.each(function() { c.apply(this, f || [a.responseText, b, a]) }) }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { n.fn[b] = function(a) { return this.on(b, a) } }), n.expr.filters.animated = function(a) { return n.grep(n.timers, function(b) { return a === b.elem }).length };

    function Mb(a) { return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) { n.offset.setOffset(this, a, b) });
            var b, c, d = this[0],
                e = { top: 0, left: 0 },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = { top: 0, left: 0 };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var a = this.offsetParent; while (a && "static" === n.css(a, "position")) a = a.offsetParent; return a || Ea }) }
    }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) { return K(this, function(a, d, e) { var f = Mb(a); return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e) }, a, d, arguments.length) }
    }), n.each(["top", "left"], function(a, b) { n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) { return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0 }) }), n.each({ Height: "height", Width: "width" }, function(a, b) {
        n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) { var e; return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g) }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) }, size: function() { return this.length } }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return n });
    var Nb = a.jQuery,
        Ob = a.$;
    return n.noConflict = function(b) { return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n }, b || (a.jQuery = a.$ = n), n
});
/*! jQuery UI - v1.11.4 - 2015-03-11
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery) })(function(e) {
    function t(t, s) { var n, a, o, r = t.nodeName.toLowerCase(); return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t) }

    function i(t) { return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() { return "hidden" === e.css(this, "visibility") }).length }

    function s(e) {
        for (var t, i; e.length && e[0] !== document;) {
            if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            e = e.parent()
        }
        return 0
    }

    function n() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) }

    function a(t) { var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return t.delegate(i, "mouseout", function() { e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover") }).delegate(i, "mouseover", o) }

    function o() { e.datepicker._isDisabledDatepicker(v.inline ? v.dpDiv.parent()[0] : v.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover")) }

    function r(t, i) { e.extend(t, i); for (var s in i) null == i[s] && (t[s] = i[s]); return t }

    function h(e) {
        return function() {
            var t = this.element.val();
            e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
        }
    }
    e.ui = e.ui || {}, e.extend(e.ui, { version: "1.11.4", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend({
        scrollParent: function(t) {
            var i = this.css("position"),
                s = "absolute" === i,
                n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                a = this.parents().filter(function() { var t = e(this); return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x")) }).eq(0);
            return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
        },
        uniqueId: function() { var e = 0; return function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++e) }) } }(),
        removeUniqueId: function() { return this.each(function() { /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id") }) }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) { return function(i) { return !!e.data(i, t) } }) : function(t, i, s) { return !!e.data(t, s[3]) },
        focusable: function(i) { return t(i, !isNaN(e.attr(i, "tabindex"))) },
        tabbable: function(i) {
            var s = e.attr(i, "tabindex"),
                n = isNaN(s);
            return (n || s >= 0) && t(i, !n)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
        function s(t, i, s, a) { return e.each(n, function() { i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0) }), i }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            a = i.toLowerCase(),
            o = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight };
        e.fn["inner" + i] = function(t) { return void 0 === t ? o["inner" + i].call(this) : this.each(function() { e(this).css(a, s(this, t) + "px") }) }, e.fn["outer" + i] = function(t, n) { return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() { e(this).css(a, s(this, t, !0, n) + "px") }) }
    }), e.fn.addBack || (e.fn.addBack = function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) { return function(i) { return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this) } }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function(t) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() { e(t).focus(), s && s.call(t) }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        disableSelection: function() { var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function() { return this.bind(e + ".ui-disableSelection", function(e) { e.preventDefault() }) } }(),
        enableSelection: function() { return this.unbind(".ui-disableSelection") },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
                    if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    n = n.parent()
                }
            return 0
        }
    }), e.ui.plugin = {
        add: function(t, i, s) { var n, a = e.ui[t].prototype; for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]]) },
        call: function(e, t, i, s) {
            var n, a = e.plugins[t];
            if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
        }
    };
    var l = 0,
        u = Array.prototype.slice;
    e.cleanData = function(t) {
        return function(i) {
            var s, n, a;
            for (a = 0; null != (n = i[a]); a++) try { s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove") } catch (o) {}
            t(i)
        }
    }(e.cleanData), e.widget = function(t, i, s) {
        var n, a, o, r, h = {},
            l = t.split(".")[0];
        return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function(t) { return !!e.data(t, n) }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function(e, t) { return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t) }, e.extend(o, a, { version: s.version, _proto: e.extend({}, s), _childConstructors: [] }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function(t, s) {
            return e.isFunction(s) ? (h[t] = function() {
                var e = function() { return i.prototype[t].apply(this, arguments) },
                    n = function(e) { return i.prototype[t].apply(this, e) };
                return function() {
                    var t, i = this._super,
                        a = this._superApply;
                    return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
                }
            }(), void 0) : (h[t] = s, void 0)
        }), o.prototype = e.widget.extend(r, { widgetEventPrefix: a ? r.widgetEventPrefix || t : t }, h, { constructor: o, namespace: l, widgetName: t, widgetFullName: n }), a ? (e.each(a._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
    }, e.widget.extend = function(t) {
        for (var i, s, n = u.call(arguments, 1), a = 0, o = n.length; o > a; a++)
            for (i in n[a]) s = n[a][i], n[a].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
        return t
    }, e.widget.bridge = function(t, i) {
        var s = i.prototype.widgetFullName || t;
        e.fn[t] = function(n) {
            var a = "string" == typeof n,
                o = u.call(arguments, 1),
                r = this;
            return a ? this.each(function() { var i, a = e.data(this, s); return "instance" === n ? (r = a, !1) : a ? e.isFunction(a[n]) && "_" !== n.charAt(0) ? (i = a[n].apply(a, o), i !== a && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + n + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + n + "'") }) : (o.length && (n = e.widget.extend.apply(null, [n].concat(o))), this.each(function() {
                var t = e.data(this, s);
                t ? (t.option(n || {}), t._init && t._init()) : e.data(this, s, new i(n, this))
            })), r
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { disabled: !1, create: null },
        _createWidget: function(t, i) { i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function(e) { e.target === i && this.destroy() } }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init() },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() { this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus") },
        _destroy: e.noop,
        widget: function() { return this.element },
        option: function(t, i) {
            var s, n, a, o = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (o = {}, s = t.split("."), t = s.shift(), s.length) {
                    for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
                    if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                    n[t] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = i
                }
            return this._setOptions(o), this
        },
        _setOptions: function(e) { var t; for (t in e) this._setOption(t, e[t]); return this },
        _setOption: function(e, t) { return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this },
        enable: function() { return this._setOptions({ disabled: !1 }) },
        disable: function() { return this._setOptions({ disabled: !0 }) },
        _on: function(t, i, s) {
            var n, a = this;
            "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function(s, o) {
                function r() { return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0 }
                "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/),
                    l = h[1] + a.eventNamespace,
                    u = h[2];
                u ? n.delegate(u, l, r) : i.bind(l, r)
            })
        },
        _off: function(t, i) { i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get()) },
        _delay: function(e, t) {
            function i() { return ("string" == typeof e ? s[e] : e).apply(s, arguments) }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) { this.hoverable = this.hoverable.add(t), this._on(t, { mouseenter: function(t) { e(t.currentTarget).addClass("ui-state-hover") }, mouseleave: function(t) { e(t.currentTarget).removeClass("ui-state-hover") } }) },
        _focusable: function(t) { this.focusable = this.focusable.add(t), this._on(t, { focusin: function(t) { e(t.currentTarget).addClass("ui-state-focus") }, focusout: function(t) { e(t.currentTarget).removeClass("ui-state-focus") } }) },
        _trigger: function(t, i, s) {
            var n, a, o = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (n in a) n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({ show: "fadeIn", hide: "fadeOut" }, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, n, a) {
            "string" == typeof n && (n = { effect: n });
            var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = { duration: n }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) { e(this)[t](), a && a.call(s[0]), i() })
        }
    }), e.widget;
    var d = !1;
    e(document).mouseup(function() { d = !1 }), e.widget("ui.mouse", {
            version: "1.11.4",
            options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 },
            _mouseInit: function() {
                var t = this;
                this.element.bind("mousedown." + this.widgetName, function(e) { return t._mouseDown(e) }).bind("click." + this.widgetName, function(i) { return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0 }), this.started = !1
            },
            _mouseDestroy: function() { this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate) },
            _mouseDown: function(t) {
                if (!d) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                    var i = this,
                        s = 1 === t.which,
                        n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                    return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) { return i._mouseMove(e) }, this._mouseUpDelegate = function(e) { return i._mouseUp(e) }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), d = !0, !0)) : !0
                }
            },
            _mouseMove: function(t) { if (this._mouseMoved) { if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t); if (!t.which) return this._mouseUp(t) } return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) },
            _mouseUp: function(t) { return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), d = !1, !1 },
            _mouseDistanceMet: function(e) { return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance },
            _mouseDelayMet: function() { return this.mouseDelayMet },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() { return !0 }
        }),
        function() {
            function t(e, t, i) { return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)] }

            function i(t, i) { return parseInt(e.css(t, i), 10) || 0 }

            function s(t) { var i = t[0]; return 9 === i.nodeType ? { width: t.width(), height: t.height(), offset: { top: 0, left: 0 } } : e.isWindow(i) ? { width: t.width(), height: t.height(), offset: { top: t.scrollTop(), left: t.scrollLeft() } } : i.preventDefault ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } } : { width: t.outerWidth(), height: t.outerHeight(), offset: t.offset() } }
            e.ui = e.ui || {};
            var n, a, o = Math.max,
                r = Math.abs,
                h = Math.round,
                l = /left|center|right/,
                u = /top|center|bottom/,
                d = /[\+\-]\d+(\.[\d]+)?%?/,
                c = /^\w+/,
                p = /%$/,
                f = e.fn.position;
            e.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== n) return n;
                        var t, i, s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            a = s.children()[0];
                        return e("body").append(s), t = a.offsetWidth, s.css("overflow", "scroll"), i = a.offsetWidth, t === i && (i = s[0].clientWidth), s.remove(), n = t - i
                    },
                    getScrollInfo: function(t) {
                        var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                            s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                            n = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                            a = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
                        return { width: a ? e.position.scrollbarWidth() : 0, height: n ? e.position.scrollbarWidth() : 0 }
                    },
                    getWithinInfo: function(t) {
                        var i = e(t || window),
                            s = e.isWindow(i[0]),
                            n = !!i[0] && 9 === i[0].nodeType;
                        return { element: i, isWindow: s, isDocument: n, offset: i.offset() || { left: 0, top: 0 }, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: s || n ? i.width() : i.outerWidth(), height: s || n ? i.height() : i.outerHeight() }
                    }
                }, e.fn.position = function(n) {
                    if (!n || !n.of) return f.apply(this, arguments);
                    n = e.extend({}, n);
                    var p, m, g, v, y, b, _ = e(n.of),
                        x = e.position.getWithinInfo(n.within),
                        w = e.position.getScrollInfo(x),
                        k = (n.collision || "flip").split(" "),
                        T = {};
                    return b = s(_), _[0].preventDefault && (n.at = "left top"), m = b.width, g = b.height, v = b.offset, y = e.extend({}, v), e.each(["my", "at"], function() {
                        var e, t, i = (n[this] || "").split(" ");
                        1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = d.exec(i[0]), t = d.exec(i[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
                    }), 1 === k.length && (k[1] = k[0]), "right" === n.at[0] ? y.left += m : "center" === n.at[0] && (y.left += m / 2), "bottom" === n.at[1] ? y.top += g : "center" === n.at[1] && (y.top += g / 2), p = t(T.at, m, g), y.left += p[0], y.top += p[1], this.each(function() {
                        var s, l, u = e(this),
                            d = u.outerWidth(),
                            c = u.outerHeight(),
                            f = i(this, "marginLeft"),
                            b = i(this, "marginTop"),
                            D = d + f + i(this, "marginRight") + w.width,
                            S = c + b + i(this, "marginBottom") + w.height,
                            M = e.extend({}, y),
                            C = t(T.my, u.outerWidth(), u.outerHeight());
                        "right" === n.my[0] ? M.left -= d : "center" === n.my[0] && (M.left -= d / 2), "bottom" === n.my[1] ? M.top -= c : "center" === n.my[1] && (M.top -= c / 2), M.left += C[0], M.top += C[1], a || (M.left = h(M.left), M.top = h(M.top)), s = { marginLeft: f, marginTop: b }, e.each(["left", "top"], function(t, i) { e.ui.position[k[t]] && e.ui.position[k[t]][i](M, { targetWidth: m, targetHeight: g, elemWidth: d, elemHeight: c, collisionPosition: s, collisionWidth: D, collisionHeight: S, offset: [p[0] + C[0], p[1] + C[1]], my: n.my, at: n.at, within: x, elem: u }) }), n.using && (l = function(e) {
                            var t = v.left - M.left,
                                i = t + m - d,
                                s = v.top - M.top,
                                a = s + g - c,
                                h = { target: { element: _, left: v.left, top: v.top, width: m, height: g }, element: { element: u, left: M.left, top: M.top, width: d, height: c }, horizontal: 0 > i ? "left" : t > 0 ? "right" : "center", vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle" };
                            d > m && m > r(t + i) && (h.horizontal = "center"), c > g && g > r(s + a) && (h.vertical = "middle"), h.important = o(r(t), r(i)) > o(r(s), r(a)) ? "horizontal" : "vertical", n.using.call(this, e, h)
                        }), u.offset(e.extend(M, { using: l }))
                    })
                }, e.ui.position = {
                    fit: {
                        left: function(e, t) {
                            var i, s = t.within,
                                n = s.isWindow ? s.scrollLeft : s.offset.left,
                                a = s.width,
                                r = e.left - t.collisionPosition.marginLeft,
                                h = n - r,
                                l = r + t.collisionWidth - a - n;
                            t.collisionWidth > a ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - a - n, e.left += h - i) : e.left = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionWidth : n : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = o(e.left - r, e.left)
                        },
                        top: function(e, t) {
                            var i, s = t.within,
                                n = s.isWindow ? s.scrollTop : s.offset.top,
                                a = t.within.height,
                                r = e.top - t.collisionPosition.marginTop,
                                h = n - r,
                                l = r + t.collisionHeight - a - n;
                            t.collisionHeight > a ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - a - n, e.top += h - i) : e.top = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionHeight : n : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = o(e.top - r, e.top)
                        }
                    },
                    flip: {
                        left: function(e, t) {
                            var i, s, n = t.within,
                                a = n.offset.left + n.scrollLeft,
                                o = n.width,
                                h = n.isWindow ? n.scrollLeft : n.offset.left,
                                l = e.left - t.collisionPosition.marginLeft,
                                u = l - h,
                                d = l + t.collisionWidth - o - h,
                                c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                                p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                                f = -2 * t.offset[0];
                            0 > u ? (i = e.left + c + p + f + t.collisionWidth - o - a, (0 > i || r(u) > i) && (e.left += c + p + f)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + f - h, (s > 0 || d > r(s)) && (e.left += c + p + f))
                        },
                        top: function(e, t) {
                            var i, s, n = t.within,
                                a = n.offset.top + n.scrollTop,
                                o = n.height,
                                h = n.isWindow ? n.scrollTop : n.offset.top,
                                l = e.top - t.collisionPosition.marginTop,
                                u = l - h,
                                d = l + t.collisionHeight - o - h,
                                c = "top" === t.my[1],
                                p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                                f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                                m = -2 * t.offset[1];
                            0 > u ? (s = e.top + p + f + m + t.collisionHeight - o - a, (0 > s || r(u) > s) && (e.top += p + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, (i > 0 || d > r(i)) && (e.top += p + f + m))
                        }
                    },
                    flipfit: { left: function() { e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments) }, top: function() { e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments) } }
                },
                function() {
                    var t, i, s, n, o, r = document.getElementsByTagName("body")[0],
                        h = document.createElement("div");
                    t = document.createElement(r ? "div" : "body"), s = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }, r && e.extend(s, { position: "absolute", left: "-1000px", top: "-1000px" });
                    for (o in s) t.style[o] = s[o];
                    t.appendChild(h), i = r || document.documentElement, i.insertBefore(t, i.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", n = e(h).offset().left, a = n > 10 && 11 > n, t.innerHTML = "", i.removeChild(t)
                }()
        }(), e.ui.position, e.widget("ui.accordion", {
            version: "1.11.4",
            options: { active: 0, animate: {}, collapsible: !1, event: "click", header: "> li > :first-child,> :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null },
            hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" },
            showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" },
            _create: function() {
                var t = this.options;
                this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function() { return { header: this.active, panel: this.active.length ? this.active.next() : e() } },
            _createIcons: function() {
                var t = this.options.icons;
                t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function() { this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove() },
            _destroy: function() {
                var e;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "")
            },
            _setOption: function(e, t) { return "active" === e ? (this._activate(t), void 0) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && (this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)), void 0) },
            _keydown: function(t) {
                if (!t.altKey && !t.ctrlKey) {
                    var i = e.ui.keyCode,
                        s = this.headers.length,
                        n = this.headers.index(t.target),
                        a = !1;
                    switch (t.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            a = this.headers[(n + 1) % s];
                            break;
                        case i.LEFT:
                        case i.UP:
                            a = this.headers[(n - 1 + s) % s];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(t);
                            break;
                        case i.HOME:
                            a = this.headers[0];
                            break;
                        case i.END:
                            a = this.headers[s - 1]
                    }
                    a && (e(t.target).attr("tabIndex", -1), e(a).attr("tabIndex", 0), a.focus(), t.preventDefault())
                }
            },
            _panelKeyDown: function(t) { t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus() },
            refresh: function() {
                var t = this.options;
                this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function() {
                var e = this.headers,
                    t = this.panels;
                this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), t && (this._off(e.not(this.headers)), this._off(t.not(this.panels)))
            },
            _refresh: function() {
                var t, i = this.options,
                    s = i.heightStyle,
                    n = this.element.parent();
                this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
                    var t = e(this),
                        i = t.uniqueId().attr("id"),
                        s = t.next(),
                        n = s.uniqueId().attr("id");
                    t.attr("aria-controls", n), s.attr("aria-labelledby", i)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (t = n.height(), this.element.siblings(":visible").each(function() {
                    var i = e(this),
                        s = i.css("position");
                    "absolute" !== s && "fixed" !== s && (t -= i.outerHeight(!0))
                }), this.headers.each(function() { t -= e(this).outerHeight(!0) }), this.headers.next().each(function() { e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height())) }).css("overflow", "auto")) : "auto" === s && (t = 0, this.headers.next().each(function() { t = Math.max(t, e(this).css("height", "").height()) }).height(t))
            },
            _activate: function(t) {
                var i = this._findActive(t)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: e.noop }))
            },
            _findActive: function(t) { return "number" == typeof t ? this.headers.eq(t) : e() },
            _setupEvents: function(t) {
                var i = { keydown: "_keydown" };
                t && e.each(t.split(" "), function(e, t) { i[t] = "_eventHandler" }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function(t) {
                var i = this.options,
                    s = this.active,
                    n = e(t.currentTarget),
                    a = n[0] === s[0],
                    o = a && i.collapsible,
                    r = o ? e() : n.next(),
                    h = s.next(),
                    l = { oldHeader: s, oldPanel: h, newHeader: o ? e() : n, newPanel: r };
                t.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", t, l) === !1 || (i.active = o ? !1 : this.headers.index(n), this.active = a ? e() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function(t) {
                var i = t.newPanel,
                    s = this.prevShow.length ? this.prevShow : t.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, t) : (s.hide(), i.show(), this._toggleComplete(t)), s.attr({ "aria-hidden": "true" }), s.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }), i.length && s.length ? s.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : i.length && this.headers.filter(function() { return 0 === parseInt(e(this).attr("tabIndex"), 10) }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
            },
            _animate: function(e, t, i) {
                var s, n, a, o = this,
                    r = 0,
                    h = e.css("box-sizing"),
                    l = e.length && (!t.length || e.index() < t.index()),
                    u = this.options.animate || {},
                    d = l && u.down || u,
                    c = function() { o._toggleComplete(i) };
                return "number" == typeof d && (a = d), "string" == typeof d && (n = d), n = n || d.easing || u.easing, a = a || d.duration || u.duration, t.length ? e.length ? (s = e.show().outerHeight(), t.animate(this.hideProps, { duration: a, easing: n, step: function(e, t) { t.now = Math.round(e) } }), e.hide().animate(this.showProps, { duration: a, easing: n, complete: c, step: function(e, i) { i.now = Math.round(e), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== o.options.heightStyle && (i.now = Math.round(s - t.outerHeight() - r), r = 0) } }), void 0) : t.animate(this.hideProps, a, n, c) : e.animate(this.showProps, a, n, c)
            },
            _toggleComplete: function(e) {
                var t = e.oldPanel;
                t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
            }
        }), e.widget("ui.menu", {
            version: "1.11.4",
            defaultElement: "<ul>",
            delay: 300,
            options: { icons: { submenu: "ui-icon-carat-1-e" }, items: "> *", menus: "ul", position: { my: "left-1 top", at: "right top" }, role: "menu", blur: null, focus: null, select: null },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({ role: this.options.role, tabIndex: 0 }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item": function(e) { e.preventDefault() },
                    "click .ui-menu-item": function(t) { var i = e(t.target);!this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer))) },
                    "mouseenter .ui-menu-item": function(t) {
                        if (!this.previousFilter) {
                            var i = e(t.currentTarget);
                            i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i)
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(e, t) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        t || this.focus(e, i)
                    },
                    blur: function(t) { this._delay(function() { e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t) }) },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, { click: function(e) { this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1 } })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var t = e(this);
                    t.data("ui-menu-submenu-carat") && t.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(t) {
                var i, s, n, a, o = !0;
                switch (t.keyCode) {
                    case e.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case e.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case e.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case e.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case e.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case e.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case e.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case e.ui.keyCode.ENTER:
                    case e.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case e.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        o = !1, s = this.previousFilter || "", n = String.fromCharCode(t.keyCode), a = !1, clearTimeout(this.filterTimer), n === s ? a = !0 : n = s + n, i = this._filterMenuItems(n), i = a && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(t.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(t, i), this.previousFilter = n, this.filterTimer = this._delay(function() { delete this.previousFilter }, 1e3)) : delete this.previousFilter
                }
                o && t.preventDefault()
            },
            _activate: function(e) { this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e)) },
            refresh: function() {
                var t, i, s = this,
                    n = this.options.icons.submenu,
                    a = this.element.find(this.options.menus);
                this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function() {
                    var t = e(this),
                        i = t.parent(),
                        s = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                    i.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", i.attr("id"))
                }), t = a.add(this.element), i = t.find(this.options.items), i.not(".ui-menu-item").each(function() {
                    var t = e(this);
                    s._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
                }), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() { return { menu: "menuitem", listbox: "option" }[this.options.role] },
            _setOption: function(e, t) { "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t) },
            focus: function(e, t) {
                var i, s;
                this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() { this._close() }, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, { item: t })
            },
            _scrollIntoView: function(t) {
                var i, s, n, a, o, r;
                this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.outerHeight(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
            },
            blur: function(e, t) { t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, { item: this.active })) },
            _startOpening: function(e) { clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() { this._close(), this._open(e) }, this.delay)) },
            _open: function(t) {
                var i = e.extend({ of: this.active }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function(t, i) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                    s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s
                }, this.delay)
            },
            _close: function(e) { e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active") },
            _closeOnDocumentClick: function(t) { return !e(t.target).closest(".ui-menu").length },
            _isDivider: function(e) { return !/[^\-\u2014\u2013\s]/.test(e.text()) },
            collapse: function(e) {
                var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                t && t.length && (this._close(), this.focus(e, t))
            },
            expand: function(e) {
                var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                t && t.length && (this._open(t.parent()), this._delay(function() { this.focus(e, t) }))
            },
            next: function(e) { this._move("next", "first", e) },
            previous: function(e) { this._move("prev", "last", e) },
            isFirstItem: function() { return this.active && !this.active.prevAll(".ui-menu-item").length },
            isLastItem: function() { return this.active && !this.active.nextAll(".ui-menu-item").length },
            _move: function(e, t, i) {
                var s;
                this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[t]()), this.focus(i, s)
            },
            nextPage: function(t) { var i, s, n; return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() { return i = e(this), 0 > i.offset().top - s - n }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0) },
            previousPage: function(t) { var i, s, n; return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() { return i = e(this), i.offset().top - s + n > 0 }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0) },
            _hasScroll: function() { return this.element.outerHeight() < this.element.prop("scrollHeight") },
            select: function(t) {
                this.active = this.active || e(t.target).closest(".ui-menu-item");
                var i = { item: this.active };
                this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
            },
            _filterMenuItems: function(t) {
                var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    s = RegExp("^" + i, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() { return s.test(e.trim(e(this).text())) })
            }
        }), e.widget("ui.autocomplete", {
            version: "1.11.4",
            defaultElement: "<input>",
            options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var t, i, s, n = this.element[0].nodeName.toLowerCase(),
                    a = "textarea" === n,
                    o = "input" === n;
                this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(n) {
                        if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, void 0;
                        t = !1, s = !1, i = !1;
                        var a = e.ui.keyCode;
                        switch (n.keyCode) {
                            case a.PAGE_UP:
                                t = !0, this._move("previousPage", n);
                                break;
                            case a.PAGE_DOWN:
                                t = !0, this._move("nextPage", n);
                                break;
                            case a.UP:
                                t = !0, this._keyEvent("previous", n);
                                break;
                            case a.DOWN:
                                t = !0, this._keyEvent("next", n);
                                break;
                            case a.ENTER:
                                this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                                break;
                            case a.TAB:
                                this.menu.active && this.menu.select(n);
                                break;
                            case a.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(n)
                        }
                    },
                    keypress: function(s) {
                        if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;
                        if (!i) {
                            var n = e.ui.keyCode;
                            switch (s.keyCode) {
                                case n.PAGE_UP:
                                    this._move("previousPage", s);
                                    break;
                                case n.PAGE_DOWN:
                                    this._move("nextPage", s);
                                    break;
                                case n.UP:
                                    this._keyEvent("previous", s);
                                    break;
                                case n.DOWN:
                                    this._keyEvent("next", s)
                            }
                        }
                    },
                    input: function(e) { return s ? (s = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0) },
                    focus: function() { this.selectedItem = null, this.previous = this._value() },
                    blur: function(e) { return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0) }
                }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"), this._on(this.menu.element, {
                    mousedown: function(t) {
                        t.preventDefault(), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur });
                        var i = this.menu.element[0];
                        e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                            var t = this;
                            this.document.one("mousedown", function(s) { s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close() })
                        })
                    },
                    menufocus: function(t, i) { var s, n; return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function() { e(t.target).trigger(t.originalEvent) }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, { item: n }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && e.trim(s).length && (this.liveRegion.children().hide(), e("<div>").text(s).appendTo(this.liveRegion)), void 0) },
                    menuselect: function(e, t) {
                        var i = t.item.data("ui-autocomplete-item"),
                            s = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() { this.previous = s, this.selectedItem = i })), !1 !== this._trigger("select", e, { item: i }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
                    }
                }), this.liveRegion = e("<span>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } })
            },
            _destroy: function() { clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove() },
            _setOption: function(e, t) { this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort() },
            _appendTo: function() { var t = this.options.appendTo; return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t },
            _initSource: function() {
                var t, i, s = this;
                e.isArray(this.options.source) ? (t = this.options.source, this.source = function(i, s) { s(e.ui.autocomplete.filter(t, i.term)) }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(t, n) { s.xhr && s.xhr.abort(), s.xhr = e.ajax({ url: i, data: t, dataType: "json", success: function(e) { n(e) }, error: function() { n([]) } }) }) : this.source = this.options.source
            },
            _searchTimeout: function(e) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    var t = this.term === this._value(),
                        i = this.menu.element.is(":visible"),
                        s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                    (!t || t && !i && !s) && (this.selectedItem = null, this.search(null, e))
                }, this.options.delay)
            },
            search: function(e, t) { return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0 },
            _search: function(e) { this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: e }, this._response()) },
            _response: function() { var t = ++this.requestIndex; return e.proxy(function(e) { t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading") }, this) },
            __response: function(e) { e && (e = this._normalize(e)), this._trigger("response", null, { content: e }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close() },
            close: function(e) { this.cancelSearch = !0, this._close(e) },
            _close: function(e) { this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e)) },
            _change: function(e) { this.previous !== this._value() && this._trigger("change", e, { item: this.selectedItem }) },
            _normalize: function(t) { return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) { return "string" == typeof t ? { label: t, value: t } : e.extend({}, t, { label: t.label || t.value, value: t.value || t.label }) }) },
            _suggest: function(t) {
                var i = this.menu.element.empty();
                this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var e = this.menu.element;
                e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(t, i) {
                var s = this;
                e.each(i, function(e, i) { s._renderItemData(t, i) })
            },
            _renderItemData: function(e, t) { return this._renderItem(e, t).data("ui-autocomplete-item", t) },
            _renderItem: function(t, i) { return e("<li>").text(i.label).appendTo(t) },
            _move: function(e, t) { return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0) },
            widget: function() { return this.menu.element },
            _value: function() { return this.valueMethod.apply(this.element, arguments) },
            _keyEvent: function(e, t) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
            }
        }), e.extend(e.ui.autocomplete, { escapeRegex: function(e) { return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }, filter: function(t, i) { var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i"); return e.grep(t, function(e) { return s.test(e.label || e.value || e) }) } }), e.widget("ui.autocomplete", e.ui.autocomplete, {
            options: { messages: { noResults: "No search results.", results: function(e) { return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate." } } },
            __response: function(t) {
                var i;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion))
            }
        }), e.ui.autocomplete;
    var c, p = "ui-button ui-widget ui-state-default ui-corner-all",
        f = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        m = function() {
            var t = e(this);
            setTimeout(function() { t.find(":ui-button").button("refresh") }, 1)
        },
        g = function(t) {
            var i = t.name,
                s = t.form,
                n = e([]);
            return i && (i = i.replace(/'/g, "\\'"), n = s ? e(s).find("[name='" + i + "'][type=radio]") : e("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function() { return !this.form })), n
        };
    e.widget("ui.button", {
        version: "1.11.4",
        defaultElement: "<button>",
        options: { disabled: null, text: !0, label: null, icons: { primary: null, secondary: null } },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, m), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var t = this,
                i = this.options,
                s = "checkbox" === this.type || "radio" === this.type,
                n = s ? "" : "ui-state-active";
            null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(p).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() { i.disabled || this === c && e(this).addClass("ui-state-active") }).bind("mouseleave" + this.eventNamespace, function() { i.disabled || e(this).removeClass(n) }).bind("click" + this.eventNamespace, function(e) { i.disabled && (e.preventDefault(), e.stopImmediatePropagation()) }), this._on({ focus: function() { this.buttonElement.addClass("ui-state-focus") }, blur: function() { this.buttonElement.removeClass("ui-state-focus") } }), s && this.element.bind("change" + this.eventNamespace, function() { t.refresh() }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() { return i.disabled ? !1 : void 0 }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (i.disabled) return !1;
                e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
                var s = t.element[0];
                g(s).not(s).map(function() { return e(this).button("widget")[0] }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() { return i.disabled ? !1 : (e(this).addClass("ui-state-active"), c = this, t.document.one("mouseup", function() { c = null }), void 0) }).bind("mouseup" + this.eventNamespace, function() { return i.disabled ? !1 : (e(this).removeClass("ui-state-active"), void 0) }).bind("keydown" + this.eventNamespace, function(t) { return i.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), void 0) }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() { e(this).removeClass("ui-state-active") }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) { t.keyCode === e.ui.keyCode.SPACE && e(this).click() })), this._setOption("disabled", i.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var e, t, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() { return this.buttonElement },
        _destroy: function() { this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(p + " ui-state-active " + f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title") },
        _setOption: function(e, t) { return this._super(e, t), "disabled" === e ? (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), t && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0) },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? g(this.element[0]).each(function() { e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false") }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0;
            var t = this.buttonElement.removeClass(f),
                i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                s = this.options.icons,
                n = s.primary && s.secondary,
                a = [];
            s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : a.push("ui-button-text-only"), t.addClass(a.join(" "))
        }
    }), e.widget("ui.buttonset", {
        version: "1.11.4",
        options: { items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)" },
        _create: function() { this.element.addClass("ui-buttonset") },
        _init: function() { this.refresh() },
        _setOption: function(e, t) { "disabled" === e && this.buttons.button("option", e, t), this._super(e, t) },
        refresh: function() {
            var t = "rtl" === this.element.css("direction"),
                i = this.element.find(this.options.items),
                s = i.filter(":ui-button");
            i.not(":ui-button").button(), s.button("refresh"), this.buttons = i.map(function() { return e(this).button("widget")[0] }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() { this.element.removeClass("ui-buttonset"), this.buttons.map(function() { return e(this).button("widget")[0] }).removeClass("ui-corner-left ui-corner-right").end().button("destroy") }
    }), e.ui.button, e.extend(e.ui, { datepicker: { version: "1.11.4" } });
    var v;
    e.extend(n.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() { return this.dpDiv },
        setDefaults: function(e) { return r(this._defaults, e || {}), this },
        _attachDatepicker: function(t, i) {
            var s, n, a;
            s = t.nodeName.toLowerCase(), n = "div" === s || "span" === s, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), a = this._newInst(e(t), n), a.settings = e.extend({}, i || {}), "input" === s ? this._connectDatepicker(t, a) : n && this._inlineDatepicker(t, a)
        },
        _newInst: function(t, i) { var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); return { id: s, input: t, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv } },
        _connectDatepicker: function(t, i) {
            var s = e(t);
            i.append = e([]), i.trigger = e([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var s, n, a, o = this._get(i, "appendText"),
                r = this._get(i, "isRTL");
            i.append && i.append.remove(), o && (i.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[r ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && t.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({ src: a, alt: n, title: n }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({ src: a, alt: n, title: n }) : n)), t[r ? "before" : "after"](i.trigger), i.trigger.click(function() { return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1 }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, s, n, a = new Date(2009, 11, 20),
                    o = this._get(e, "dateFormat");
                o.match(/[DM]/) && (t = function(e) { for (i = 0, s = 0, n = 0; e.length > n; n++) e[n].length > i && (i = e[n].length, s = n); return s }, a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length)
            }
        },
        _inlineDatepicker: function(t, i) {
            var s = e(t);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, i, s, n, a) { var o, h, l, u, d, c = this._dialogInst; return c || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), c = this._dialogInst = this._newInst(this._dialogInput, !1), c.settings = {}, e.data(this._dialogInput[0], "datepicker", c)), r(c.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(c, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, l / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", c), this },
        _destroyDatepicker: function(t) {
            var i, s = e(t),
                n = e.data(t, "datepicker");
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), v === n && (v = null))
        },
        _enableDatepicker: function(t) {
            var i, s, n = e(t),
                a = e.data(t, "datepicker");
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, a.trigger.filter("button").each(function() { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) { return e === t ? null : e }))
        },
        _disableDatepicker: function(t) {
            var i, s, n = e(t),
                a = e.data(t, "datepicker");
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, a.trigger.filter("button").each(function() { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) { return e === t ? null : e }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(t) { try { return e.data(t, "datepicker") } catch (i) { throw "Missing instance data for this datepicker" } },
        _optionDatepicker: function(t, i, s) { var n, a, o, h, l = this._getInst(t); return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : l ? "all" === i ? e.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), a = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), r(l.settings, n), null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, o)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), l), this._autoSize(l), this._setDate(l, a), this._updateAlternate(l), this._updateDatepicker(l)), void 0) },
        _changeDatepicker: function(e, t, i) { this._optionDatepicker(e, t, i) },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(e, t) { var i = this._getInst(e); return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null },
        _doKeyDown: function(t) {
            var i, s, n, a = e.datepicker._getInst(t.target),
                o = !0,
                r = a.dpDiv.is(".ui-datepicker-rtl");
            if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), o = !1;
                    break;
                case 13:
                    return n = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), n[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, n[0]), i = e.datepicker._get(a, "onSelect"), i ? (s = e.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                default:
                    o = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
            o && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var i, s, n = e.datepicker._getInst(t.target);
            return e.datepicker._get(n, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
        },
        _doKeyUp: function(t) {
            var i, s = e.datepicker._getInst(t.target);
            if (s.input.val() !== s.lastVal) try { i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)), i && (e.datepicker._setDateFromField(s), e.datepicker._updateAlternate(s), e.datepicker._updateDatepicker(s)) } catch (n) {}
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var i, n, a, o, h, l, u;
                i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), n = e.datepicker._get(i, "beforeShow"), a = n ? n.apply(t, [t, i]) : {}, a !== !1 && (r(i.settings, a), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function() { return o |= "fixed" === e(this).css("position"), !o }), h = { left: e.datepicker._pos[0], top: e.datepicker._pos[1] }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), e.datepicker._updateDatepicker(i), h = e.datepicker._checkOffset(i, h, o), i.dpDiv.css({ position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute", display: "none", left: h.left + "px", top: h.top + "px" }), i.inline || (l = e.datepicker._get(i, "showAnim"), u = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", s(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, v = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var i, s = this._getNumberOfMonths(t),
                n = s[1],
                a = 17,
                r = t.dpDiv.find("." + this._dayOverClass + " a");
            r.length > 0 && o.apply(r.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function() { i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null }, 0))
        },
        _shouldFocusInput: function(e) { return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus") },
        _checkOffset: function(t, i, s) {
            var n = t.dpDiv.outerWidth(),
                a = t.dpDiv.outerHeight(),
                o = t.input ? t.input.outerWidth() : 0,
                r = t.input ? t.input.outerHeight() : 0,
                h = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft()),
                l = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? n - o : 0, i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= s && i.top === t.input.offset().top + r ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + r) : 0), i
        },
        _findPos: function(t) { for (var i, s = this._getInst(t), n = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[n ? "previousSibling" : "nextSibling"]; return i = e(t).offset(), [i.left, i.top] },
        _hideDatepicker: function(t) { var i, s, n, a, o = this._curInst;!o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function() { e.datepicker._tidyDialog(o) }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1) },
        _tidyDialog: function(e) { e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar") },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var i = e(t.target),
                    s = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== s) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, s) {
            var n = e(t),
                a = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a))
        },
        _gotoToday: function(t) {
            var i, s = e(t),
                n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
        },
        _selectMonthYear: function(t, i, s) {
            var n = e(t),
                a = this._getInst(n[0]);
            a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
        },
        _selectDay: function(t, i, s, n) {
            var a, o = e(t);
            e(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]), a.selectedDay = a.currentDay = e("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
        },
        _clearDate: function(t) {
            var i = e(t);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var s, n = e(t),
                a = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i, s, n, a = this._get(t, "altField");
            a && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t), n = this.formatDate(i, s, this._getFormatConfig(t)), e(a).each(function() { e(this).val(n) }))
        },
        noWeekends: function(e) { var t = e.getDay(); return [t > 0 && 6 > t, ""] },
        iso8601Week: function(e) { var t, i = new Date(e.getTime()); return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1 },
        parseDate: function(t, i, s) {
            if (null == t || null == i) throw "Invalid arguments";
            if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
            var n, a, o, r, h = 0,
                l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                u = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
                d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                c = (s ? s.dayNames : null) || this._defaults.dayNames,
                p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (s ? s.monthNames : null) || this._defaults.monthNames,
                m = -1,
                g = -1,
                v = -1,
                y = -1,
                b = !1,
                _ = function(e) { var i = t.length > n + 1 && t.charAt(n + 1) === e; return i && n++, i },
                x = function(e) {
                    var t = _(e),
                        s = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        n = "y" === e ? s : 1,
                        a = RegExp("^\\d{" + n + "," + s + "}"),
                        o = i.substring(h).match(a);
                    if (!o) throw "Missing number at position " + h;
                    return h += o[0].length, parseInt(o[0], 10)
                },
                w = function(t, s, n) {
                    var a = -1,
                        o = e.map(_(t) ? n : s, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) { return -(e[1].length - t[1].length) });
                    if (e.each(o, function(e, t) { var s = t[1]; return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (a = t[0], h += s.length, !1) : void 0 }), -1 !== a) return a + 1;
                    throw "Unknown name at position " + h
                },
                k = function() {
                    if (i.charAt(h) !== t.charAt(n)) throw "Unexpected literal at position " + h;
                    h++
                };
            for (n = 0; t.length > n; n++)
                if (b) "'" !== t.charAt(n) || _("'") ? k() : b = !1;
                else switch (t.charAt(n)) {
                    case "d":
                        v = x("d");
                        break;
                    case "D":
                        w("D", d, c);
                        break;
                    case "o":
                        y = x("o");
                        break;
                    case "m":
                        g = x("m");
                        break;
                    case "M":
                        g = w("M", p, f);
                        break;
                    case "y":
                        m = x("y");
                        break;
                    case "@":
                        r = new Date(x("@")), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                        break;
                    case "!":
                        r = new Date((x("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                        break;
                    case "'":
                        _("'") ? k() : b = !0;
                        break;
                    default:
                        k()
                }
            if (i.length > h && (o = i.substr(h), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), y > -1)
                for (g = 1, v = y;;) {
                    if (a = this._getDaysInMonth(m, g - 1), a >= v) break;
                    g++, v -= a
                }
            if (r = this._daylightSavingAdjust(new Date(m, g - 1, v)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(e, t, i) {
            if (!t) return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                a = (i ? i.dayNames : null) || this._defaults.dayNames,
                o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames,
                h = function(t) { var i = e.length > s + 1 && e.charAt(s + 1) === t; return i && s++, i },
                l = function(e, t, i) {
                    var s = "" + t;
                    if (h(e))
                        for (; i > s.length;) s = "0" + s;
                    return s
                },
                u = function(e, t, i, s) { return h(e) ? s[t] : i[t] },
                d = "",
                c = !1;
            if (t)
                for (s = 0; e.length > s; s++)
                    if (c) "'" !== e.charAt(s) || h("'") ? d += e.charAt(s) : c = !1;
                    else switch (e.charAt(s)) {
                        case "d":
                            d += l("d", t.getDate(), 2);
                            break;
                        case "D":
                            d += u("D", t.getDay(), n, a);
                            break;
                        case "o":
                            d += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            d += l("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            d += u("M", t.getMonth(), o, r);
                            break;
                        case "y":
                            d += h("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            d += t.getTime();
                            break;
                        case "!":
                            d += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            h("'") ? d += "'" : c = !0;
                            break;
                        default:
                            d += e.charAt(s)
                    }
            return d
        },
        _possibleChars: function(e) {
            var t, i = "",
                s = !1,
                n = function(i) { var s = e.length > t + 1 && e.charAt(t + 1) === i; return s && t++, s };
            for (t = 0; e.length > t; t++)
                if (s) "'" !== e.charAt(t) || n("'") ? i += e.charAt(t) : s = !1;
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += e.charAt(t)
                }
            return i
        },
        _get: function(e, t) { return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t] },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat"),
                    s = e.lastVal = e.input ? e.input.val() : null,
                    n = this._getDefaultDate(e),
                    a = n,
                    o = this._getFormatConfig(e);
                try { a = this.parseDate(i, s, o) || n } catch (r) { s = t ? "" : s }
                e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = s ? a.getDate() : 0, e.currentMonth = s ? a.getMonth() : 0, e.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) { return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date)) },
        _determineDate: function(t, i, s) {
            var n = function(e) { var t = new Date; return t.setDate(t.getDate() + e), t },
                a = function(i) {
                    try { return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t)) } catch (s) {}
                    for (var n = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, a = n.getFullYear(), o = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
                        switch (l[2] || "d") {
                            case "d":
                            case "D":
                                r += parseInt(l[1], 10);
                                break;
                            case "w":
                            case "W":
                                r += 7 * parseInt(l[1], 10);
                                break;
                            case "m":
                            case "M":
                                o += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o));
                                break;
                            case "y":
                            case "Y":
                                a += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o))
                        }
                        l = h.exec(i)
                    }
                    return new Date(a, o, r)
                },
                o = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
            return o = o && "Invalid Date" == "" + o ? s : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function(e) { return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null },
        _setDate: function(e, t, i) {
            var s = !t,
                n = e.selectedMonth,
                a = e.selectedYear,
                o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), n === e.selectedMonth && a === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e))
        },
        _getDate: function(e) { var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)); return t },
        _attachHandlers: function(t) {
            var i = this._get(t, "stepMonths"),
                s = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = { prev: function() { e.datepicker._adjustDate(s, -i, "M") }, next: function() { e.datepicker._adjustDate(s, +i, "M") }, hide: function() { e.datepicker._hideDatepicker() }, today: function() { e.datepicker._gotoToday(s) }, selectDay: function() { return e.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function() { return e.datepicker._selectMonthYear(s, this, "M"), !1 }, selectYear: function() { return e.datepicker._selectMonthYear(s, this, "Y"), !1 } };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, i, s, n, a, o, r, h, l, u, d, c, p, f, m, g, v, y, b, _, x, w, k, T, D, S, M, C, N, A, P, I, H, z, F, E, O, j, W, L = new Date,
                R = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
                Y = this._get(e, "isRTL"),
                B = this._get(e, "showButtonPanel"),
                J = this._get(e, "hideIfNoPrevNext"),
                q = this._get(e, "navigationAsDateFormat"),
                K = this._getNumberOfMonths(e),
                V = this._get(e, "showCurrentAtPos"),
                U = this._get(e, "stepMonths"),
                Q = 1 !== K[0] || 1 !== K[1],
                G = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                X = this._getMinMaxDate(e, "min"),
                $ = this._getMinMaxDate(e, "max"),
                Z = e.drawMonth - V,
                et = e.drawYear;
            if (0 > Z && (Z += 12, et--), $)
                for (t = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - K[0] * K[1] + 1, $.getDate())), t = X && X > t ? X : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, et--);
            for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - U, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : J ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(e, "nextText"), n = q ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z + U, 1)), this._getFormatConfig(e)) : n, a = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : J ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", o = this._get(e, "currentText"), r = this._get(e, "gotoCurrent") && e.currentDay ? G : R, o = q ? this.formatDate(o, r, this._getFormatConfig(e)) : o, h = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(e, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (Y ? "" : h) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), c = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", w = 0; K[0] > w; w++) {
                for (k = "", this.maxRows = 4, T = 0; K[1] > T; T++) {
                    if (D = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), S = " ui-corner-all", M = "", Q) {
                        if (M += "<div class='ui-datepicker-group", K[1] > 1) switch (T) {
                            case 0:
                                M += " ui-datepicker-group-first", S = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case K[1] - 1:
                                M += " ui-datepicker-group-last", S = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                M += " ui-datepicker-group-middle", S = ""
                        }
                        M += "'>"
                    }
                    for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === w ? Y ? a : s : "") + (/all|right/.test(S) && 0 === w ? Y ? s : a : "") + this._generateMonthYearHeader(e, Z, et, X, $, w > 0 || T > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", C = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) N = (x + u) % 7, C += "<th scope='col'" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + c[N] + "'>" + p[N] + "</span></th>";
                    for (M += C + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), P = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, I = Math.ceil((P + A) / 7), H = Q ? this.maxRows > I ? this.maxRows : I : I, this.maxRows = H, z = this._daylightSavingAdjust(new Date(et, Z, 1 - P)), F = 0; H > F; F++) {
                        for (M += "<tr>", E = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(z) + "</td>" : "", x = 0; 7 > x; x++) O = g ? g.apply(e.input ? e.input[0] : null, [z]) : [!0, ""], j = z.getMonth() !== Z, W = j && !y || !O[0] || X && X > z || $ && z > $, E += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (j ? " ui-datepicker-other-month" : "") + (z.getTime() === D.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === z.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + (j && !v ? "" : " " + O[1] + (z.getTime() === G.getTime() ? " " + this._currentClass : "") + (z.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (j && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (j && !v ? "&#xa0;" : W ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === R.getTime() ? " ui-state-highlight" : "") + (z.getTime() === G.getTime() ? " ui-state-active" : "") + (j ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z);
                        M += E + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, et++), M += "</tbody></table>" + (Q ? "</div>" + (K[0] > 0 && T === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += M
                }
                _ += k
            }
            return _ += l, e._keyEvent = !1, _
        },
        _generateMonthYearHeader: function(e, t, i, s, n, a, o, r) {
            var h, l, u, d, c, p, f, m, g = this._get(e, "changeMonth"),
                v = this._get(e, "changeYear"),
                y = this._get(e, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                _ = "";
            if (a || !g) _ += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
            else {
                for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!h || u >= s.getMonth()) && (!l || n.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + r[u] + "</option>");
                _ += "</select>"
            }
            if (y || (b += _ + (!a && g && v ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (d = this._get(e, "yearRange").split(":"), c = (new Date).getFullYear(), p = function(e) { var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10); return isNaN(t) ? c : t }, f = p(d[0]), m = Math.max(f, p(d[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                }
            return b += this._get(e, "yearSuffix"), y && (b += (!a && g && v ? "" : "&#xa0;") + _), b += "</div>"
        },
        _adjustInstDate: function(e, t, i) {
            var s = e.drawYear + ("Y" === i ? t : 0),
                n = e.drawMonth + ("M" === i ? t : 0),
                a = Math.min(e.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? t : 0),
                o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, n, a)));
            e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var i = this._getMinMaxDate(e, "min"),
                s = this._getMinMaxDate(e, "max"),
                n = i && i > t ? i : t;
            return s && n > s ? s : n
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) { var t = this._get(e, "numberOfMonths"); return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t },
        _getMinMaxDate: function(e, t) { return this._determineDate(e, this._get(e, t + "Date"), null) },
        _getDaysInMonth: function(e, t) { return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate() },
        _getFirstDayOfMonth: function(e, t) { return new Date(e, t, 1).getDay() },
        _canAdjustMonth: function(e, t, i, s) {
            var n = this._getNumberOfMonths(e),
                a = this._daylightSavingAdjust(new Date(i, s + (0 > t ? t : n[0] * n[1]), 1));
            return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a)
        },
        _isInRange: function(e, t) {
            var i, s, n = this._getMinMaxDate(e, "min"),
                a = this._getMinMaxDate(e, "max"),
                o = null,
                r = null,
                h = this._get(e, "yearRange");
            return h && (i = h.split(":"), s = (new Date).getFullYear(), o = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += s), i[1].match(/[+\-].*/) && (r += s)), (!n || t.getTime() >= n.getTime()) && (!a || t.getTime() <= a.getTime()) && (!o || t.getFullYear() >= o) && (!r || r >= t.getFullYear())
        },
        _getFormatConfig: function(e) { var t = this._get(e, "shortYearCutoff"); return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), { shortYearCutoff: t, dayNamesShort: this._get(e, "dayNamesShort"), dayNames: this._get(e, "dayNames"), monthNamesShort: this._get(e, "monthNamesShort"), monthNames: this._get(e, "monthNames") } },
        _formatDate: function(e, t, i, s) { t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear); var n = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)); return this.formatDate(this._get(e, "dateFormat"), n, this._getFormatConfig(e)) }
    }), e.fn.datepicker = function(t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function() { "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t) }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.4", e.datepicker, e.widget("ui.draggable", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "drag",
        options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null },
        _create: function() { "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit() },
        _setOption: function(e, t) { this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName()) },
        _destroy: function() { return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0) },
        _mouseCapture: function(t) { var i = this.options; return this._blurActiveElement(t), this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1) },
        _blockFrames: function(t) { this.iframeBlocks = this.document.find(t).map(function() { var t = e(this); return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0] }) },
        _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
        _blurActiveElement: function(t) { var i = this.document[0]; if (this.handleElement.is(t.target)) try { i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur() } catch (s) {} },
        _mouseStart: function(t) { var i = this.options; return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() { return "fixed" === e(this).css("position") }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0) },
        _refreshOffsets: function(e) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top } },
        _mouseDrag: function(t, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var i = this,
                s = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() { i._trigger("stop", t) !== !1 && i._clear() }) : this._trigger("stop", t) !== !1 && this._clear(), !1
        },
        _mouseUp: function(t) { return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t) },
        cancel: function() { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this },
        _getHandle: function(t) { return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0 },
        _setHandleClassName: function() { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle") },
        _removeHandleClassName: function() { this.handleElement.removeClass("ui-draggable-handle") },
        _createHelper: function(t) {
            var i = this.options,
                s = e.isFunction(i.helper),
                n = s ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
        },
        _setPositionRelative: function() { /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative") },
        _adjustOffsetFromHelper: function(t) { "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top) },
        _isRootNode: function(e) { return /(html|body)/i.test(e.tagName) || e === this.document[0] },
        _getParentOffset: function() {
            var t = this.offsetParent.offset(),
                i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
            var e = this.element.position(),
                t = this._isRootNode(this.scrollParent[0]);
            return { top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft()) }
        },
        _cacheMargins: function() { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } },
        _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
        _setContainment: function() {
            var t, i, s, n = this.options,
                a = this.document[0];
            return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
        },
        _convertPositionTo: function(e, t) {
            t || (t = this.position);
            var i = "absolute" === e ? 1 : -1,
                s = this._isRootNode(this.scrollParent[0]);
            return { top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i, left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i }
        },
        _generatePosition: function(e, t) {
            var i, s, n, a, o = this.options,
                r = this._isRootNode(this.scrollParent[0]),
                h = e.pageX,
                l = e.pageY;
            return r && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), { top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top), left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) }
        },
        _clear: function() { this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy() },
        _normalizeRightBottom: function() { "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto")) },
        _trigger: function(t, i, s) { return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, s) },
        plugins: {},
        _uiHash: function() { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i, s) {
            var n = e.extend({}, i, { item: s.element });
            s.sortables = [], e(s.options.connectToSortable).each(function() {
                var i = e(this).sortable("instance");
                i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, n))
            })
        },
        stop: function(t, i, s) {
            var n = e.extend({}, i, { item: s.element });
            s.cancelHelperRemoval = !1, e.each(s.sortables, function() {
                var e = this;
                e.isOver ? (e.isOver = 0, s.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = { position: e.placeholder.css("position"), top: e.placeholder.css("top"), left: e.placeholder.css("left") }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, n))
            })
        },
        drag: function(t, i, s) {
            e.each(s.sortables, function() {
                var n = !1,
                    a = this;
                a.positionAbs = s.positionAbs, a.helperProportions = s.helperProportions, a.offset.click = s.offset.click, a._intersectsWith(a.containerCache) && (n = !0, e.each(s.sortables, function() { return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== a && this._intersectsWith(this.containerCache) && e.contains(a.element[0], this.element[0]) && (n = !1), n })), n ? (a.isOver || (a.isOver = 1, s._parent = i.helper.parent(), a.currentItem = i.helper.appendTo(a.element).data("ui-sortable-item", !0), a.options._helper = a.options.helper, a.options.helper = function() { return i.helper[0] }, t.target = a.currentItem[0], a._mouseCapture(t, !0), a._mouseStart(t, !0, !0), a.offset.click.top = s.offset.click.top, a.offset.click.left = s.offset.click.left, a.offset.parent.left -= s.offset.parent.left - a.offset.parent.left, a.offset.parent.top -= s.offset.parent.top - a.offset.parent.top, s._trigger("toSortable", t), s.dropped = a.element, e.each(s.sortables, function() { this.refreshPositions() }), s.currentItem = s.element, a.fromOutside = s), a.currentItem && (a._mouseDrag(t), i.position = a.position)) : a.isOver && (a.isOver = 0, a.cancelHelperRemoval = !0, a.options._revert = a.options.revert, a.options.revert = !1, a._trigger("out", t, a._uiHash(a)), a._mouseStop(t, !0), a.options.revert = a.options._revert, a.options.helper = a.options._helper, a.placeholder && a.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(t), i.position = s._generatePosition(t, !0), s._trigger("fromSortable", t), s.dropped = !1, e.each(s.sortables, function() { this.refreshPositions() }))
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function(t, i, s) {
            var n = e("body"),
                a = s.options;
            n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor)
        },
        stop: function(t, i, s) {
            var n = s.options;
            n._cursor && e("body").css("cursor", n._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function(t, i, s) {
            var n = e(i.helper),
                a = s.options;
            n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity)
        },
        stop: function(t, i, s) {
            var n = s.options;
            n._opacity && e(i.helper).css("opacity", n._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function(e, t, i) { i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset()) },
        drag: function(t, i, s) {
            var n = s.options,
                a = !1,
                o = s.scrollParentNotHidden[0],
                r = s.document[0];
            o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : t.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : t.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(r).scrollTop() < n.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < n.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - e(r).scrollLeft() < n.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < n.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function(t, i, s) {
            var n = s.options;
            s.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                var t = e(this),
                    i = t.offset();
                this !== s.element[0] && s.snapElements.push({ item: this, width: t.outerWidth(), height: t.outerHeight(), top: i.top, left: i.left })
            })
        },
        drag: function(t, i, s) {
            var n, a, o, r, h, l, u, d, c, p, f = s.options,
                m = f.snapTolerance,
                g = i.offset.left,
                v = g + s.helperProportions.width,
                y = i.offset.top,
                b = y + s.helperProportions.height;
            for (c = s.snapElements.length - 1; c >= 0; c--) h = s.snapElements[c].left - s.margins.left, l = h + s.snapElements[c].width, u = s.snapElements[c].top - s.margins.top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), { snapItem: s.snapElements[c].item })), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(d - y), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", { top: u - s.helperProportions.height, left: 0 }).top), a && (i.position.top = s._convertPositionTo("relative", { top: d, left: 0 }).top), o && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h - s.helperProportions.width }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l }).left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - y), a = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", { top: u, left: 0 }).top), a && (i.position.top = s._convertPositionTo("relative", { top: d - s.helperProportions.height, left: 0 }).top), o && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h }).left), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l - s.helperProportions.width }).left)), !s.snapElements[c].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), { snapItem: s.snapElements[c].item })), s.snapElements[c].snapping = n || a || o || r || p)
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function(t, i, s) {
            var n, a = s.options,
                o = e.makeArray(e(a.stack)).sort(function(t, i) { return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0) });
            o.length && (n = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function(t) { e(this).css("zIndex", n + t) }), this.css("zIndex", n + o.length))
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i, s) {
            var n = e(i.helper),
                a = s.options;
            n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex)
        },
        stop: function(t, i, s) {
            var n = s.options;
            n._zIndex && e(i.helper).css("zIndex", n._zIndex)
        }
    }), e.ui.draggable, e.widget("ui.resizable", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "resize",
        options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null },
        _num: function(e) { return parseInt(e, 10) || 0 },
        _isNumber: function(e) { return !isNaN(parseInt(e, 10)) },
        _hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                n = !1;
            return t[s] > 0 ? !0 : (t[s] = 1, n = t[s] > 0, t[s] = 0, n)
        },
        _create: function() {
            var t, i, s, n, a, o = this,
                r = this.options;
            if (this.element.addClass("ui-resizable"), e.extend(this, { _aspectRatio: !!r.aspectRatio, aspectRatio: r.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") }), this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css({ margin: this.originalElement.css("margin") }), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = e(), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({ zIndex: r.zIndex }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
            this._renderAxis = function(t) {
                var i, s, n, a;
                t = t || this.element;
                for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = e(this.handles[i]), this._on(this.handles[i], { mousedown: o._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function() { o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se") }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() { r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show()) }).mouseleave(function() { r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide()) })), this._mouseInit()
        },
        _destroy: function() { this._mouseDestroy(); var t, i = function(t) { e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove() }; return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({ position: t.css("position"), width: t.outerWidth(), height: t.outerHeight(), top: t.css("top"), left: t.css("left") }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this },
        _mouseCapture: function(t) { var i, s, n = !1; for (i in this.handles) s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0); return !this.options.disabled && n },
        _mouseStart: function(t) {
            var i, s, n, a = this.options,
                o = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), a.containment && (i += e(a.containment).scrollLeft() || 0, s += e(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: i, top: s }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: o.width(), height: o.height() }, this.originalSize = this._helper ? { width: o.outerWidth(), height: o.outerHeight() } : { width: o.width(), height: o.height() }, this.sizeDiff = { width: o.outerWidth() - o.width(), height: o.outerHeight() - o.height() }, this.originalPosition = { left: i, top: s }, this.originalMousePosition = { left: t.pageX, top: t.pageY }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function(t) {
            var i, s, n = this.originalMousePosition,
                a = this.axis,
                o = t.pageX - n.left || 0,
                r = t.pageY - n.top || 0,
                h = this._change[a];
            return this._updatePrevProperties(), h ? (i = h.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var i, s, n, a, o, r, h, l = this.options,
                u = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = { width: u.helper.width() - a, height: u.helper.height() - n }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, { top: h, left: r })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function() { this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height } },
        _applyChanges: function() { var e = {}; return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e },
        _updateVirtualBoundaries: function(e) {
            var t, i, s, n, a, o = this.options;
            a = { minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0, maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0, minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0, maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0 }, (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, n = a.maxWidth / this.aspectRatio, t > a.minWidth && (a.minWidth = t), s > a.minHeight && (a.minHeight = s), a.maxWidth > i && (a.maxWidth = i), a.maxHeight > n && (a.maxHeight = n)), this._vBoundaries = a
        },
        _updateCache: function(e) { this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width) },
        _updateRatio: function(e) {
            var t = this.position,
                i = this.size,
                s = this.axis;
            return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === s && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === s && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e
        },
        _respectSize: function(e) {
            var t = this._vBoundaries,
                i = this.axis,
                s = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
                n = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
                a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
                o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
                r = this.originalPosition.left + this.originalSize.width,
                h = this.position.top + this.size.height,
                l = /sw|nw|w/.test(i),
                u = /nw|ne|n/.test(i);
            return a && (e.width = t.minWidth), o && (e.height = t.minHeight), s && (e.width = t.maxWidth), n && (e.height = t.maxHeight), a && l && (e.left = r - t.minWidth), s && l && (e.left = r - t.maxWidth), o && u && (e.top = h - t.minHeight), n && u && (e.top = h - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
        },
        _getPaddingPlusBorderDimensions: function(e) { for (var t = 0, i = [], s = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], n = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) i[t] = parseInt(s[t], 10) || 0, i[t] += parseInt(n[t], 10) || 0; return { height: i[0] + i[2], width: i[1] + i[3] } },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 })
        },
        _renderProxy: function() {
            var t = this.element,
                i = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({ width: this.element.outerWidth() - 1, height: this.element.outerHeight() - 1, position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(e, t) { return { width: this.originalSize.width + t } },
            w: function(e, t) {
                var i = this.originalSize,
                    s = this.originalPosition;
                return { left: s.left + t, width: i.width - t }
            },
            n: function(e, t, i) {
                var s = this.originalSize,
                    n = this.originalPosition;
                return { top: n.top + i, height: s.height - i }
            },
            s: function(e, t, i) { return { height: this.originalSize.height + i } },
            se: function(t, i, s) { return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s])) },
            sw: function(t, i, s) { return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s])) },
            ne: function(t, i, s) { return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s])) },
            nw: function(t, i, s) { return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s])) }
        },
        _propagate: function(t, i) { e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui()) },
        plugins: {},
        ui: function() { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var i = e(this).resizable("instance"),
                s = i.options,
                n = i._proportionallyResizeElements,
                a = n.length && /textarea/i.test(n[0].nodeName),
                o = a && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                r = a ? 0 : i.sizeDiff.width,
                h = { width: i.size.width - r, height: i.size.height - o },
                l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(e.extend(h, u && l ? { top: u, left: l } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = { width: parseInt(i.element.css("width"), 10), height: parseInt(i.element.css("height"), 10), top: parseInt(i.element.css("top"), 10), left: parseInt(i.element.css("left"), 10) };
                    n && n.length && e(n[0]).css({ width: s.width, height: s.height }), i._updateCache(s), i._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function() {
            var t, i, s, n, a, o, r, h = e(this).resizable("instance"),
                l = h.options,
                u = h.element,
                d = l.containment,
                c = d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
            c && (h.containerElement = e(c), /document/.test(d) || d === document ? (h.containerOffset = { left: 0, top: 0 }, h.containerPosition = { left: 0, top: 0 }, h.parentData = { element: e(document), left: 0, top: 0, width: e(document).width(), height: e(document).height() || document.body.parentNode.scrollHeight }) : (t = e(c), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, s) { i[e] = h._num(t.css("padding" + s)) }), h.containerOffset = t.offset(), h.containerPosition = t.position(), h.containerSize = { height: t.innerHeight() - i[3], width: t.innerWidth() - i[1] }, s = h.containerOffset, n = h.containerSize.height, a = h.containerSize.width, o = h._hasScroll(c, "left") ? c.scrollWidth : a, r = h._hasScroll(c) ? c.scrollHeight : n, h.parentData = { element: c, left: s.left, top: s.top, width: o, height: r }))
        },
        resize: function(t) {
            var i, s, n, a, o = e(this).resizable("instance"),
                r = o.options,
                h = o.containerOffset,
                l = o.position,
                u = o._aspectRatio || t.shiftKey,
                d = { top: 0, left: 0 },
                c = o.containerElement,
                p = !0;
            c[0] !== document && /static/.test(c.css("position")) && (d = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - d.left), u && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? h.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - d.left : o.offset.left - h.left)), s = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - d.top : o.offset.top - h.top)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio, p = !1)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
        },
        stop: function() {
            var t = e(this).resizable("instance"),
                i = t.options,
                s = t.containerOffset,
                n = t.containerPosition,
                a = t.containerElement,
                o = e(t.helper),
                r = o.offset(),
                h = o.outerWidth() - t.sizeDiff.width,
                l = o.outerHeight() - t.sizeDiff.height;
            t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({ left: r.left - n.left - s.left, width: h, height: l }), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({ left: r.left - n.left - s.left, width: h, height: l })
        }
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = e(this).resizable("instance"),
                i = t.options;
            e(i.alsoResize).each(function() {
                var t = e(this);
                t.data("ui-resizable-alsoresize", { width: parseInt(t.width(), 10), height: parseInt(t.height(), 10), left: parseInt(t.css("left"), 10), top: parseInt(t.css("top"), 10) })
            })
        },
        resize: function(t, i) {
            var s = e(this).resizable("instance"),
                n = s.options,
                a = s.originalSize,
                o = s.originalPosition,
                r = { height: s.size.height - a.height || 0, width: s.size.width - a.width || 0, top: s.position.top - o.top || 0, left: s.position.left - o.left || 0 };
            e(n.alsoResize).each(function() {
                var t = e(this),
                    s = e(this).data("ui-resizable-alsoresize"),
                    n = {},
                    a = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                e.each(a, function(e, t) {
                    var i = (s[t] || 0) + (r[t] || 0);
                    i && i >= 0 && (n[t] = i || null)
                }), t.css(n)
            })
        },
        stop: function() { e(this).removeData("resizable-alsoresize") }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = e(this).resizable("instance"),
                i = t.options,
                s = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({ opacity: .25, display: "block", position: "relative", height: s.height, width: s.width, margin: 0, left: 0, top: 0 }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = e(this).resizable("instance");
            t.ghost && t.ghost.css({ position: "relative", height: t.size.height, width: t.size.width })
        },
        stop: function() {
            var t = e(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t, i = e(this).resizable("instance"),
                s = i.options,
                n = i.size,
                a = i.originalSize,
                o = i.originalPosition,
                r = i.axis,
                h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
                l = h[0] || 1,
                u = h[1] || 1,
                d = Math.round((n.width - a.width) / l) * l,
                c = Math.round((n.height - a.height) / u) * u,
                p = a.width + d,
                f = a.height + c,
                m = s.maxWidth && p > s.maxWidth,
                g = s.maxHeight && f > s.maxHeight,
                v = s.minWidth && s.minWidth > p,
                y = s.minHeight && s.minHeight > f;
            s.grid = h, v && (p += l), y && (f += u), m && (p -= l), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = o.top - c) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - d) : ((0 >= f - u || 0 >= p - l) && (t = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = o.top - c) : (f = u - t.height, i.size.height = f, i.position.top = o.top + a.height - f), p - l > 0 ? (i.size.width = p, i.position.left = o.left - d) : (p = l - t.width, i.size.width = p, i.position.left = o.left + a.width - p))
        }
    }), e.ui.resizable, e.widget("ui.dialog", {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "Close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var i = e(this).css(t).offset().top;
                    0 > i && e(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 },
        resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 },
        _create: function() { this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus() },
        _init: function() { this.options.autoOpen && this.open() },
        _appendTo: function() { var t = this.options.appendTo; return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0) },
        _destroy: function() {
            var e, t = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function() { return this.uiDialog },
        disable: e.noop,
        enable: e.noop,
        close: function(t) {
            var i, s = this;
            if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try { i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && e(i).blur() } catch (n) {}
                this._hide(this.uiDialog, this.options.hide, function() { s._trigger("close", t) })
            }
        },
        isOpen: function() { return this._isOpen },
        moveToTop: function() { this._moveToTop() },
        _moveToTop: function(t, i) {
            var s = !1,
                n = this.uiDialog.siblings(".ui-front:visible").map(function() { return +e(this).css("z-index") }).get(),
                a = Math.max.apply(null, n);
            return a >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", a + 1), s = !0), s && !i && this._trigger("focus", t), s
        },
        open: function() { var t = this; return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() { t._focusTabbable(), t._trigger("focus") }), this._makeFocusTarget(), this._trigger("open"), void 0) },
        _focusTabbable: function() {
            var e = this._focusedElement;
            e || (e = this.element.find("[autofocus]")), e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
        },
        _keepFocus: function(t) {
            function i() {
                var t = this.document[0].activeElement,
                    i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                i || this._focusTabbable()
            }
            t.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), void 0;
                    if (t.keyCode === e.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"),
                            s = i.filter(":first"),
                            n = i.filter(":last");
                        t.target !== n[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== s[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function() { n.focus() }), t.preventDefault()) : (this._delay(function() { s.focus() }), t.preventDefault())
                    }
                },
                mousedown: function(e) { this._moveToTop(e) && this._focusTabbable() }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, { mousedown: function(t) { e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus() } }), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({ label: this.options.closeText, icons: { primary: "ui-icon-closethick" }, text: !1 }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, { click: function(e) { e.preventDefault(), this.close(e) } }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({ "aria-labelledby": t.attr("id") })
        },
        _title: function(e) { this.options.title || e.html("&#160;"), e.text(this.options.title) },
        _createButtonPane: function() { this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons() },
        _createButtons: function() {
            var t = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (e.each(i, function(i, s) {
                var n, a;
                s = e.isFunction(s) ? { click: s, text: i } : s, s = e.extend({ type: "button" }, s), n = s.click, s.click = function() { n.apply(t.element[0], arguments) }, a = { icons: s.icons, text: s.showText }, delete s.icons, delete s.showText, e("<button></button>", s).button(a).appendTo(t.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
        },
        _makeDraggable: function() {
            function t(e) { return { position: e.position, offset: e.offset } }
            var i = this,
                s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(s, n) { e(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, t(n)) },
                drag: function(e, s) { i._trigger("drag", e, t(s)) },
                stop: function(n, a) {
                    var o = a.offset.left - i.document.scrollLeft(),
                        r = a.offset.top - i.document.scrollTop();
                    s.position = { my: "left top", at: "left" + (o >= 0 ? "+" : "") + o + " " + "top" + (r >= 0 ? "+" : "") + r, of: i.window }, e(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, t(a))
                }
            })
        },
        _makeResizable: function() {
            function t(e) { return { originalPosition: e.originalPosition, originalSize: e.originalSize, position: e.position, size: e.size } }
            var i = this,
                s = this.options,
                n = s.resizable,
                a = this.uiDialog.css("position"),
                o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: o,
                start: function(s, n) { e(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, t(n)) },
                resize: function(e, s) { i._trigger("resize", e, t(s)) },
                stop: function(n, a) {
                    var o = i.uiDialog.offset(),
                        r = o.left - i.document.scrollLeft(),
                        h = o.top - i.document.scrollTop();
                    s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = { my: "left top", at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h, of: i.window }, e(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, t(a))
                }
            }).css("position", a)
        },
        _trackFocus: function() { this._on(this.widget(), { focusin: function(t) { this._makeFocusTarget(), this._focusedElement = e(t.target) } }) },
        _makeFocusTarget: function() { this._untrackInstance(), this._trackingInstances().unshift(this) },
        _untrackInstance: function() {
            var t = this._trackingInstances(),
                i = e.inArray(this, t); - 1 !== i && t.splice(i, 1)
        },
        _trackingInstances: function() { var e = this.document.data("ui-dialog-instances"); return e || (e = [], this.document.data("ui-dialog-instances", e)), e },
        _minHeight: function() { var e = this.options; return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height) },
        _position: function() {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var i = this,
                s = !1,
                n = {};
            e.each(t, function(e, t) { i._setOption(e, t), e in i.sizeRelatedOptions && (s = !0), e in i.resizableRelatedOptions && (n[e] = t) }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
        },
        _setOption: function(e, t) { var i, s, n = this.uiDialog; "dialogClass" === e && n.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({ label: "" + t }), "draggable" === e && (i = n.is(":data(ui-draggable)"), i && !t && n.draggable("destroy"), !i && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = n.is(":data(ui-resizable)"), s && !t && n.resizable("destroy"), s && "string" == typeof t && n.resizable("option", "handles", t), s || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))) },
        _size: function() {
            var e, t, i, s = this.options;
            this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), s.minWidth > s.width && (s.width = s.minWidth), e = this.uiDialog.css({ height: "auto", width: s.width }).outerHeight(), t = Math.max(0, s.minHeight - e), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - e) : "none", "auto" === s.height ? this.element.css({ minHeight: t, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, s.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() { this.iframeBlocks = this.document.find("iframe").map(function() { var t = e(this); return e("<div>").css({ position: "absolute", width: t.outerWidth(), height: t.outerHeight() }).appendTo(t.parent()).offset(t.offset())[0] }) },
        _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
        _allowInteraction: function(t) { return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length },
        _createOverlay: function() {
            if (this.options.modal) {
                var t = !0;
                this._delay(function() { t = !1 }), this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function(e) { t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable()) } }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, { mousedown: "_keepFocus" }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var e = this.document.data("ui-dialog-overlays") - 1;
                e ? this.document.data("ui-dialog-overlays", e) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
            }
        }
    }), e.widget("ui.droppable", {
        version: "1.11.4",
        widgetEventPrefix: "drop",
        options: { accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null },
        _create: function() {
            var t, i = this.options,
                s = i.accept;
            this.isover = !1, this.isout = !0, this.accept = e.isFunction(s) ? s : function(e) { return e.is(s) }, this.proportions = function() { return arguments.length ? (t = arguments[0], void 0) : t ? t : t = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight } }, this._addToManager(i.scope), i.addClasses && this.element.addClass("ui-droppable")
        },
        _addToManager: function(t) { e.ui.ddmanager.droppables[t] = e.ui.ddmanager.droppables[t] || [], e.ui.ddmanager.droppables[t].push(this) },
        _splice: function(e) { for (var t = 0; e.length > t; t++) e[t] === this && e.splice(t, 1) },
        _destroy: function() {
            var t = e.ui.ddmanager.droppables[this.options.scope];
            this._splice(t), this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(t, i) {
            if ("accept" === t) this.accept = e.isFunction(i) ? i : function(e) { return e.is(i) };
            else if ("scope" === t) {
                var s = e.ui.ddmanager.droppables[this.options.scope];
                this._splice(s), this._addToManager(i)
            }
            this._super(t, i)
        },
        _activate: function(t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var s = i || e.ui.ddmanager.current,
                n = !1;
            return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() { var i = e(this).droppable("instance"); return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(i, { offset: i.element.offset() }), i.options.tolerance, t) ? (n = !0, !1) : void 0 }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1
        },
        ui: function(e) { return { draggable: e.currentItem || e.element, helper: e.helper, position: e.position, offset: e.positionAbs } }
    }), e.ui.intersect = function() {
        function e(e, t, i) { return e >= t && t + i > e }
        return function(t, i, s, n) {
            if (!i.offset) return !1;
            var a = (t.positionAbs || t.position.absolute).left + t.margins.left,
                o = (t.positionAbs || t.position.absolute).top + t.margins.top,
                r = a + t.helperProportions.width,
                h = o + t.helperProportions.height,
                l = i.offset.left,
                u = i.offset.top,
                d = l + i.proportions().width,
                c = u + i.proportions().height;
            switch (s) {
                case "fit":
                    return a >= l && d >= r && o >= u && c >= h;
                case "intersect":
                    return a + t.helperProportions.width / 2 > l && d > r - t.helperProportions.width / 2 && o + t.helperProportions.height / 2 > u && c > h - t.helperProportions.height / 2;
                case "pointer":
                    return e(n.pageY, u, i.proportions().height) && e(n.pageX, l, i.proportions().width);
                case "touch":
                    return (o >= u && c >= o || h >= u && c >= h || u > o && h > c) && (a >= l && d >= a || r >= l && d >= r || l > a && r > d);
                default:
                    return !1
            }
        }
    }(), e.ui.ddmanager = {
        current: null,
        droppables: { "default": [] },
        prepareOffsets: function(t, i) {
            var s, n, a = e.ui.ddmanager.droppables[t.options.scope] || [],
                o = i ? i.type : null,
                r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            e: for (s = 0; a.length > s; s++)
                if (!(a[s].options.disabled || t && !a[s].accept.call(a[s].element[0], t.currentItem || t.element))) {
                    for (n = 0; r.length > n; n++)
                        if (r[n] === a[s].element[0]) { a[s].proportions().height = 0; continue e }
                    a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions({ width: a[s].element[0].offsetWidth, height: a[s].element[0].offsetHeight }))
                }
        },
        drop: function(t, i) { var s = !1; return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() { this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i))) }), s },
        dragStart: function(t, i) { t.element.parentsUntil("body").bind("scroll.droppable", function() { t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i) }) },
        drag: function(t, i) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, a, o = e.ui.intersect(t, this, this.options.tolerance, i),
                        r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function() { return e(this).droppable("instance").options.scope === n }), a.length && (s = e(a[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        },
        dragStop: function(t, i) { t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i) }
    }, e.ui.droppable;
    var y = "ui-effects-",
        b = e;
    e.effects = { effect: {} },
        function(e, t) {
            function i(e, t, i) { var s = d[t.type] || {}; return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e) }

            function s(i) {
                var s = l(),
                    n = s._rgba = [];
                return i = i.toLowerCase(), f(h, function(e, a) {
                    var o, r = a.re.exec(i),
                        h = r && a.parse(r),
                        l = a.space || "rgba";
                    return h ? (o = s[l](h), s[u[l].cache] = o[u[l].cache], n = s._rgba = o._rgba, !1) : t
                }), n.length ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent), s) : a[i]
            }

            function n(e, t, i) { return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e }
            var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                r = /^([\-+])=\s*(\d+\.?\d*)/,
                h = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(e) { return [e[1], e[2], e[3], e[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(e) { return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function(e) { return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function(e) { return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(e) { return [e[1], e[2] / 100, e[3] / 100, e[4]] } }],
                l = e.Color = function(t, i, s, n) { return new e.Color.fn.parse(t, i, s, n) },
                u = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
                d = { "byte": { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
                c = l.support = {},
                p = e("<p>")[0],
                f = e.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function(e, t) { t.cache = "_" + e, t.props.alpha = { idx: 3, type: "percent", def: 1 } }), l.fn = e.extend(l.prototype, {
                parse: function(n, o, r, h) {
                    if (n === t) return this._rgba = [null, null, null, null], this;
                    (n.jquery || n.nodeType) && (n = e(n).css(o), o = t);
                    var d = this,
                        c = e.type(n),
                        p = this._rgba = [];
                    return o !== t && (n = [n, o, r, h], c = "array"), "string" === c ? this.parse(s(n) || a._default) : "array" === c ? (f(u.rgba.props, function(e, t) { p[t.idx] = i(n[t.idx], t) }), this) : "object" === c ? (n instanceof l ? f(u, function(e, t) { n[t.cache] && (d[t.cache] = n[t.cache].slice()) }) : f(u, function(t, s) {
                        var a = s.cache;
                        f(s.props, function(e, t) {
                            if (!d[a] && s.to) {
                                if ("alpha" === e || null == n[e]) return;
                                d[a] = s.to(d._rgba)
                            }
                            d[a][t.idx] = i(n[e], t, !0)
                        }), d[a] && 0 > e.inArray(null, d[a].slice(0, 3)) && (d[a][3] = 1, s.from && (d._rgba = s.from(d[a])))
                    }), this) : t
                },
                is: function(e) {
                    var i = l(e),
                        s = !0,
                        n = this;
                    return f(u, function(e, a) { var o, r = i[a.cache]; return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function(e, i) { return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : t })), s }), s
                },
                _space: function() {
                    var e = [],
                        t = this;
                    return f(u, function(i, s) { t[s.cache] && e.push(i) }), e.pop()
                },
                transition: function(e, t) {
                    var s = l(e),
                        n = s._space(),
                        a = u[n],
                        o = 0 === this.alpha() ? l("transparent") : this,
                        r = o[a.cache] || a.to(o._rgba),
                        h = r.slice();
                    return s = s[a.cache], f(a.props, function(e, n) {
                        var a = n.idx,
                            o = r[a],
                            l = s[a],
                            u = d[n.type] || {};
                        null !== l && (null === o ? h[a] = l : (u.mod && (l - o > u.mod / 2 ? o += u.mod : o - l > u.mod / 2 && (o -= u.mod)), h[a] = i((l - o) * t + o, n)))
                    }), this[n](h)
                },
                blend: function(t) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        s = i.pop(),
                        n = l(t)._rgba;
                    return l(e.map(i, function(e, t) { return (1 - s) * n[t] + s * e }))
                },
                toRgbaString: function() {
                    var t = "rgba(",
                        i = e.map(this._rgba, function(e, t) { return null == e ? t > 2 ? 1 : 0 : e });
                    return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
                },
                toHslaString: function() {
                    var t = "hsla(",
                        i = e.map(this.hsla(), function(e, t) { return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e });
                    return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
                },
                toHexString: function(t) {
                    var i = this._rgba.slice(),
                        s = i.pop();
                    return t && i.push(~~(255 * s)), "#" + e.map(i, function(e) { return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e }).join("")
                },
                toString: function() { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() }
            }), l.fn.parse.prototype = l.fn, u.hsla.to = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t, i, s = e[0] / 255,
                    n = e[1] / 255,
                    a = e[2] / 255,
                    o = e[3],
                    r = Math.max(s, n, a),
                    h = Math.min(s, n, a),
                    l = r - h,
                    u = r + h,
                    d = .5 * u;
                return t = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= d ? l / u : l / (2 - u), [Math.round(t) % 360, i, d, null == o ? 1 : o]
            }, u.hsla.from = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t = e[0] / 360,
                    i = e[1],
                    s = e[2],
                    a = e[3],
                    o = .5 >= s ? s * (1 + i) : s + i - s * i,
                    r = 2 * s - o;
                return [Math.round(255 * n(r, o, t + 1 / 3)), Math.round(255 * n(r, o, t)), Math.round(255 * n(r, o, t - 1 / 3)), a]
            }, f(u, function(s, n) {
                var a = n.props,
                    o = n.cache,
                    h = n.to,
                    u = n.from;
                l.fn[s] = function(s) {
                    if (h && !this[o] && (this[o] = h(this._rgba)), s === t) return this[o].slice();
                    var n, r = e.type(s),
                        d = "array" === r || "object" === r ? s : arguments,
                        c = this[o].slice();
                    return f(a, function(e, t) {
                        var s = d["object" === r ? e : t.idx];
                        null == s && (s = c[t.idx]), c[t.idx] = i(s, t)
                    }), u ? (n = l(u(c)), n[o] = c, n) : l(c)
                }, f(a, function(t, i) {
                    l.fn[t] || (l.fn[t] = function(n) {
                        var a, o = e.type(n),
                            h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s,
                            l = this[h](),
                            u = l[i.idx];
                        return "undefined" === o ? u : ("function" === o && (n = n.call(this, u), o = e.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
                    })
                })
            }), l.hook = function(t) {
                var i = t.split(" ");
                f(i, function(t, i) {
                    e.cssHooks[i] = {
                        set: function(t, n) {
                            var a, o, r = "";
                            if ("transparent" !== n && ("string" !== e.type(n) || (a = s(n)))) {
                                if (n = l(a || n), !c.rgba && 1 !== n._rgba[3]) {
                                    for (o = "backgroundColor" === i ? t.parentNode : t;
                                        ("" === r || "transparent" === r) && o && o.style;) try { r = e.css(o, "backgroundColor"), o = o.parentNode } catch (h) {}
                                    n = n.blend(r && "transparent" !== r ? r : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try { t.style[i] = n } catch (h) {}
                        }
                    }, e.fx.step[i] = function(t) { t.colorInit || (t.start = l(t.elem, i), t.end = l(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos)) }
                })
            }, l.hook(o), e.cssHooks.borderColor = { expand: function(e) { var t = {}; return f(["Top", "Right", "Bottom", "Left"], function(i, s) { t["border" + s + "Color"] = e }), t } }, a = e.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" }
        }(b),
        function() {
            function t(t) {
                var i, s, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    a = {};
                if (n && n.length && n[0] && n[n[0]])
                    for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (a[e.camelCase(i)] = n[i]);
                else
                    for (i in n) "string" == typeof n[i] && (a[i] = n[i]);
                return a
            }

            function i(t, i) { var s, a, o = {}; for (s in i) a = i[s], t[s] !== a && (n[s] || (e.fx.step[s] || !isNaN(parseFloat(a))) && (o[s] = a)); return o }
            var s = ["add", "remove", "toggle"],
                n = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
            e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
                e.fx.step[i] = function(e) {
                    ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (b.style(e.elem, i, e.end), e.setAttr = !0)
                }
            }), e.fn.addBack || (e.fn.addBack = function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }), e.effects.animateClass = function(n, a, o, r) {
                var h = e.speed(a, o, r);
                return this.queue(function() {
                    var a, o = e(this),
                        r = o.attr("class") || "",
                        l = h.children ? o.find("*").addBack() : o;
                    l = l.map(function() { var i = e(this); return { el: i, start: t(this) } }), a = function() { e.each(s, function(e, t) { n[t] && o[t + "Class"](n[t]) }) }, a(), l = l.map(function() { return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this }), o.attr("class", r), l = l.map(function() {
                        var t = this,
                            i = e.Deferred(),
                            s = e.extend({}, h, { queue: !1, complete: function() { i.resolve(t) } });
                        return this.el.animate(this.diff, s), i.promise()
                    }), e.when.apply(e, l.get()).done(function() {
                        a(), e.each(arguments, function() {
                            var t = this.el;
                            e.each(this.diff, function(e) { t.css(e, "") })
                        }), h.complete.call(o[0])
                    })
                })
            }, e.fn.extend({ addClass: function(t) { return function(i, s, n, a) { return s ? e.effects.animateClass.call(this, { add: i }, s, n, a) : t.apply(this, arguments) } }(e.fn.addClass), removeClass: function(t) { return function(i, s, n, a) { return arguments.length > 1 ? e.effects.animateClass.call(this, { remove: i }, s, n, a) : t.apply(this, arguments) } }(e.fn.removeClass), toggleClass: function(t) { return function(i, s, n, a, o) { return "boolean" == typeof s || void 0 === s ? n ? e.effects.animateClass.call(this, s ? { add: i } : { remove: i }, n, a, o) : t.apply(this, arguments) : e.effects.animateClass.call(this, { toggle: i }, s, n, a) } }(e.fn.toggleClass), switchClass: function(t, i, s, n, a) { return e.effects.animateClass.call(this, { add: i, remove: t }, s, n, a) } })
        }(),
        function() {
            function t(t, i, s, n) { return e.isPlainObject(t) && (i = t, t = t.effect), t = { effect: t }, null == i && (i = {}), e.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (n = s, s = i, i = {}), e.isFunction(s) && (n = s, s = null), i && e.extend(t, i), s = s || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default, t.complete = n || i.complete, t }

            function i(t) { return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0 }
            e.extend(e.effects, {
                version: "1.11.4",
                save: function(e, t) { for (var i = 0; t.length > i; i++) null !== t[i] && e.data(y + t[i], e[0].style[t[i]]) },
                restore: function(e, t) { var i, s; for (s = 0; t.length > s; s++) null !== t[s] && (i = e.data(y + t[s]), void 0 === i && (i = ""), e.css(t[s], i)) },
                setMode: function(e, t) { return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t },
                getBaseline: function(e, t) {
                    var i, s;
                    switch (e[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = e[0] / t.height
                    }
                    switch (e[1]) {
                        case "left":
                            s = 0;
                            break;
                        case "center":
                            s = .5;
                            break;
                        case "right":
                            s = 1;
                            break;
                        default:
                            s = e[1] / t.width
                    }
                    return { x: s, y: i }
                },
                createWrapper: function(t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var i = { width: t.outerWidth(!0), height: t.outerHeight(!0), "float": t.css("float") },
                        s = e("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                        n = { width: t.width(), height: t.height() },
                        a = document.activeElement;
                    try { a.id } catch (o) { a = document.body }
                    return t.wrap(s), (t[0] === a || e.contains(t[0], a)) && e(a).focus(), s = t.parent(), "static" === t.css("position") ? (s.css({ position: "relative" }), t.css({ position: "relative" })) : (e.extend(i, { position: t.css("position"), zIndex: t.css("z-index") }), e.each(["top", "left", "bottom", "right"], function(e, s) { i[s] = t.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto") }), t.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), t.css(n), s.css(i).show()
                },
                removeWrapper: function(t) { var i = document.activeElement; return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t },
                setTransition: function(t, i, s, n) {
                    return n = n || {}, e.each(i, function(e, i) {
                        var a = t.cssUnit(i);
                        a[0] > 0 && (n[i] = a[0] * s + a[1])
                    }), n
                }
            }), e.fn.extend({
                effect: function() {
                    function i(t) {
                        function i() { e.isFunction(a) && a.call(n[0]), e.isFunction(t) && t() }
                        var n = e(this),
                            a = s.complete,
                            r = s.mode;
                        (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), i()) : o.call(n[0], s, i)
                    }
                    var s = t.apply(this, arguments),
                        n = s.mode,
                        a = s.queue,
                        o = e.effects.effect[s.effect];
                    return e.fx.off || !o ? n ? this[n](s.duration, s.complete) : this.each(function() { s.complete && s.complete.call(this) }) : a === !1 ? this.each(i) : this.queue(a || "fx", i)
                },
                show: function(e) { return function(s) { if (i(s)) return e.apply(this, arguments); var n = t.apply(this, arguments); return n.mode = "show", this.effect.call(this, n) } }(e.fn.show),
                hide: function(e) { return function(s) { if (i(s)) return e.apply(this, arguments); var n = t.apply(this, arguments); return n.mode = "hide", this.effect.call(this, n) } }(e.fn.hide),
                toggle: function(e) { return function(s) { if (i(s) || "boolean" == typeof s) return e.apply(this, arguments); var n = t.apply(this, arguments); return n.mode = "toggle", this.effect.call(this, n) } }(e.fn.toggle),
                cssUnit: function(t) {
                    var i = this.css(t),
                        s = [];
                    return e.each(["em", "px", "%", "pt"], function(e, t) { i.indexOf(t) > 0 && (s = [parseFloat(i), t]) }), s
                }
            })
        }(),
        function() {
            var t = {};
            e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, i) { t[i] = function(t) { return Math.pow(t, e + 2) } }), e.extend(t, {
                Sine: function(e) { return 1 - Math.cos(e * Math.PI / 2) },
                Circ: function(e) { return 1 - Math.sqrt(1 - e * e) },
                Elastic: function(e) { return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15) },
                Back: function(e) { return e * e * (3 * e - 2) },
                Bounce: function(e) {
                    for (var t, i = 4;
                        ((t = Math.pow(2, --i)) - 1) / 11 > e;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                }
            }), e.each(t, function(t, i) { e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function(e) { return 1 - i(1 - e) }, e.easing["easeInOut" + t] = function(e) { return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2 } })
        }(), e.effects, e.effects.effect.blind = function(t, i) {
            var s, n, a, o = e(this),
                r = /up|down|vertical/,
                h = /up|left|vertical|horizontal/,
                l = ["position", "top", "bottom", "left", "right", "height", "width"],
                u = e.effects.setMode(o, t.mode || "hide"),
                d = t.direction || "up",
                c = r.test(d),
                p = c ? "height" : "width",
                f = c ? "top" : "left",
                m = h.test(d),
                g = {},
                v = "show" === u;
            o.parent().is(".ui-effects-wrapper") ? e.effects.save(o.parent(), l) : e.effects.save(o, l), o.show(), s = e.effects.createWrapper(o).css({ overflow: "hidden" }), n = s[p](), a = parseFloat(s.css(f)) || 0, g[p] = v ? n : 0, m || (o.css(c ? "bottom" : "right", 0).css(c ? "top" : "left", "auto").css({ position: "absolute" }), g[f] = v ? a : n + a), v && (s.css(p, 0), m || s.css(f, a + n)), s.animate(g, { duration: t.duration, easing: t.easing, queue: !1, complete: function() { "hide" === u && o.hide(), e.effects.restore(o, l), e.effects.removeWrapper(o), i() } })
        }, e.effects.effect.bounce = function(t, i) {
            var s, n, a, o = e(this),
                r = ["position", "top", "bottom", "left", "right", "height", "width"],
                h = e.effects.setMode(o, t.mode || "effect"),
                l = "hide" === h,
                u = "show" === h,
                d = t.direction || "up",
                c = t.distance,
                p = t.times || 5,
                f = 2 * p + (u || l ? 1 : 0),
                m = t.duration / f,
                g = t.easing,
                v = "up" === d || "down" === d ? "top" : "left",
                y = "up" === d || "left" === d,
                b = o.queue(),
                _ = b.length;
            for ((u || l) && r.push("opacity"), e.effects.save(o, r), o.show(), e.effects.createWrapper(o), c || (c = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), u && (a = { opacity: 1 }, a[v] = 0, o.css("opacity", 0).css(v, y ? 2 * -c : 2 * c).animate(a, m, g)), l && (c /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++) n = {}, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g).animate(a, m, g), c = l ? 2 * c : c / 2;
            l && (n = { opacity: 0 }, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g)), o.queue(function() { l && o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i() }), _ > 1 && b.splice.apply(b, [1, 0].concat(b.splice(_, f + 1))), o.dequeue()
        }, e.effects.effect.clip = function(t, i) {
            var s, n, a, o = e(this),
                r = ["position", "top", "bottom", "left", "right", "height", "width"],
                h = e.effects.setMode(o, t.mode || "hide"),
                l = "show" === h,
                u = t.direction || "vertical",
                d = "vertical" === u,
                c = d ? "height" : "width",
                p = d ? "top" : "left",
                f = {};
            e.effects.save(o, r), o.show(), s = e.effects.createWrapper(o).css({ overflow: "hidden" }), n = "IMG" === o[0].tagName ? s : o, a = n[c](), l && (n.css(c, 0), n.css(p, a / 2)), f[c] = l ? a : 0, f[p] = l ? 0 : a / 2, n.animate(f, { queue: !1, duration: t.duration, easing: t.easing, complete: function() { l || o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i() } })
        }, e.effects.effect.drop = function(t, i) {
            var s, n = e(this),
                a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                o = e.effects.setMode(n, t.mode || "hide"),
                r = "show" === o,
                h = t.direction || "left",
                l = "up" === h || "down" === h ? "top" : "left",
                u = "up" === h || "left" === h ? "pos" : "neg",
                d = { opacity: r ? 1 : 0 };
            e.effects.save(n, a), n.show(), e.effects.createWrapper(n), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === u ? -s : s), d[l] = (r ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + s, n.animate(d, { queue: !1, duration: t.duration, easing: t.easing, complete: function() { "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i() } })
        }, e.effects.effect.explode = function(t, i) {
            function s() { b.push(this), b.length === d * c && n() }

            function n() { p.css({ visibility: "visible" }), e(b).remove(), m || p.hide(), i() }
            var a, o, r, h, l, u, d = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
                c = d,
                p = e(this),
                f = e.effects.setMode(p, t.mode || "hide"),
                m = "show" === f,
                g = p.show().css("visibility", "hidden").offset(),
                v = Math.ceil(p.outerWidth() / c),
                y = Math.ceil(p.outerHeight() / d),
                b = [];
            for (a = 0; d > a; a++)
                for (h = g.top + a * y, u = a - (d - 1) / 2, o = 0; c > o; o++) r = g.left + o * v, l = o - (c - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -o * v, top: -a * y }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: v, height: y, left: r + (m ? l * v : 0), top: h + (m ? u * y : 0), opacity: m ? 0 : 1 }).animate({ left: r + (m ? 0 : l * v), top: h + (m ? 0 : u * y), opacity: m ? 1 : 0 }, t.duration || 500, t.easing, s)
        }, e.effects.effect.fade = function(t, i) {
            var s = e(this),
                n = e.effects.setMode(s, t.mode || "toggle");
            s.animate({ opacity: n }, { queue: !1, duration: t.duration, easing: t.easing, complete: i })
        }, e.effects.effect.fold = function(t, i) {
            var s, n, a = e(this),
                o = ["position", "top", "bottom", "left", "right", "height", "width"],
                r = e.effects.setMode(a, t.mode || "hide"),
                h = "show" === r,
                l = "hide" === r,
                u = t.size || 15,
                d = /([0-9]+)%/.exec(u),
                c = !!t.horizFirst,
                p = h !== c,
                f = p ? ["width", "height"] : ["height", "width"],
                m = t.duration / 2,
                g = {},
                v = {};
            e.effects.save(a, o), a.show(), s = e.effects.createWrapper(a).css({ overflow: "hidden" }), n = p ? [s.width(), s.height()] : [s.height(), s.width()], d && (u = parseInt(d[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(c ? { height: 0, width: u } : { height: u, width: 0 }), g[f[0]] = h ? n[0] : u, v[f[1]] = h ? n[1] : 0, s.animate(g, m, t.easing).animate(v, m, t.easing, function() { l && a.hide(), e.effects.restore(a, o), e.effects.removeWrapper(a), i() })
        }, e.effects.effect.highlight = function(t, i) {
            var s = e(this),
                n = ["backgroundImage", "backgroundColor", "opacity"],
                a = e.effects.setMode(s, t.mode || "show"),
                o = { backgroundColor: s.css("backgroundColor") };
            "hide" === a && (o.opacity = 0), e.effects.save(s, n), s.show().css({ backgroundImage: "none", backgroundColor: t.color || "#ffff99" }).animate(o, { queue: !1, duration: t.duration, easing: t.easing, complete: function() { "hide" === a && s.hide(), e.effects.restore(s, n), i() } })
        }, e.effects.effect.size = function(t, i) {
            var s, n, a, o = e(this),
                r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                l = ["width", "height", "overflow"],
                u = ["fontSize"],
                d = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                p = e.effects.setMode(o, t.mode || "effect"),
                f = t.restore || "effect" !== p,
                m = t.scale || "both",
                g = t.origin || ["middle", "center"],
                v = o.css("position"),
                y = f ? r : h,
                b = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
            "show" === p && o.show(), s = { height: o.height(), width: o.width(), outerHeight: o.outerHeight(), outerWidth: o.outerWidth() }, "toggle" === t.mode && "show" === p ? (o.from = t.to || b, o.to = t.from || s) : (o.from = t.from || ("show" === p ? b : s), o.to = t.to || ("hide" === p ? b : s)), a = { from: { y: o.from.height / s.height, x: o.from.width / s.width }, to: { y: o.to.height / s.height, x: o.to.width / s.width } }, ("box" === m || "both" === m) && (a.from.y !== a.to.y && (y = y.concat(d), o.from = e.effects.setTransition(o, d, a.from.y, o.from), o.to = e.effects.setTransition(o, d, a.to.y, o.to)), a.from.x !== a.to.x && (y = y.concat(c), o.from = e.effects.setTransition(o, c, a.from.x, o.from), o.to = e.effects.setTransition(o, c, a.to.x, o.to))), ("content" === m || "both" === m) && a.from.y !== a.to.y && (y = y.concat(u).concat(l), o.from = e.effects.setTransition(o, u, a.from.y, o.from), o.to = e.effects.setTransition(o, u, a.to.y, o.to)), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), g && (n = e.effects.getBaseline(g, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === m || "both" === m) && (d = d.concat(["marginTop", "marginBottom"]).concat(u), c = c.concat(["marginLeft", "marginRight"]), l = r.concat(d).concat(c), o.find("*[width]").each(function() {
                var i = e(this),
                    s = { height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth() };
                f && e.effects.save(i, l), i.from = { height: s.height * a.from.y, width: s.width * a.from.x, outerHeight: s.outerHeight * a.from.y, outerWidth: s.outerWidth * a.from.x }, i.to = { height: s.height * a.to.y, width: s.width * a.to.x, outerHeight: s.height * a.to.y, outerWidth: s.width * a.to.x }, a.from.y !== a.to.y && (i.from = e.effects.setTransition(i, d, a.from.y, i.from), i.to = e.effects.setTransition(i, d, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = e.effects.setTransition(i, c, a.from.x, i.from), i.to = e.effects.setTransition(i, c, a.to.x, i.to)), i.css(i.from), i.animate(i.to, t.duration, t.easing, function() { f && e.effects.restore(i, l) })
            })), o.animate(o.to, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), e.effects.restore(o, y), f || ("static" === v ? o.css({ position: "relative", top: o.to.top, left: o.to.left }) : e.each(["top", "left"], function(e, t) {
                        o.css(t, function(t, i) {
                            var s = parseInt(i, 10),
                                n = e ? o.to.left : o.to.top;
                            return "auto" === i ? n + "px" : s + n + "px"
                        })
                    })), e.effects.removeWrapper(o), i()
                }
            })
        }, e.effects.effect.scale = function(t, i) {
            var s = e(this),
                n = e.extend(!0, {}, t),
                a = e.effects.setMode(s, t.mode || "effect"),
                o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === a ? 0 : 100),
                r = t.direction || "both",
                h = t.origin,
                l = { height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth() },
                u = { y: "horizontal" !== r ? o / 100 : 1, x: "vertical" !== r ? o / 100 : 1 };
            n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = t.from || ("show" === a ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 } : l), n.to = { height: l.height * u.y, width: l.width * u.x, outerHeight: l.outerHeight * u.y, outerWidth: l.outerWidth * u.x }, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
        }, e.effects.effect.puff = function(t, i) {
            var s = e(this),
                n = e.effects.setMode(s, t.mode || "hide"),
                a = "hide" === n,
                o = parseInt(t.percent, 10) || 150,
                r = o / 100,
                h = { height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth() };
            e.extend(t, { effect: "scale", queue: !1, fade: !0, mode: n, complete: i, percent: a ? o : 100, from: a ? h : { height: h.height * r, width: h.width * r, outerHeight: h.outerHeight * r, outerWidth: h.outerWidth * r } }), s.effect(t)
        }, e.effects.effect.pulsate = function(t, i) {
            var s, n = e(this),
                a = e.effects.setMode(n, t.mode || "show"),
                o = "show" === a,
                r = "hide" === a,
                h = o || "hide" === a,
                l = 2 * (t.times || 5) + (h ? 1 : 0),
                u = t.duration / l,
                d = 0,
                c = n.queue(),
                p = c.length;
            for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), d = 1), s = 1; l > s; s++) n.animate({ opacity: d }, u, t.easing), d = 1 - d;
            n.animate({ opacity: d }, u, t.easing), n.queue(function() { r && n.hide(), i() }), p > 1 && c.splice.apply(c, [1, 0].concat(c.splice(p, l + 1))), n.dequeue()
        }, e.effects.effect.shake = function(t, i) {
            var s, n = e(this),
                a = ["position", "top", "bottom", "left", "right", "height", "width"],
                o = e.effects.setMode(n, t.mode || "effect"),
                r = t.direction || "left",
                h = t.distance || 20,
                l = t.times || 3,
                u = 2 * l + 1,
                d = Math.round(t.duration / u),
                c = "up" === r || "down" === r ? "top" : "left",
                p = "up" === r || "left" === r,
                f = {},
                m = {},
                g = {},
                v = n.queue(),
                y = v.length;
            for (e.effects.save(n, a), n.show(), e.effects.createWrapper(n), f[c] = (p ? "-=" : "+=") + h, m[c] = (p ? "+=" : "-=") + 2 * h, g[c] = (p ? "-=" : "+=") + 2 * h, n.animate(f, d, t.easing), s = 1; l > s; s++) n.animate(m, d, t.easing).animate(g, d, t.easing);
            n.animate(m, d, t.easing).animate(f, d / 2, t.easing).queue(function() { "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i() }), y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, u + 1))), n.dequeue()
        }, e.effects.effect.slide = function(t, i) {
            var s, n = e(this),
                a = ["position", "top", "bottom", "left", "right", "width", "height"],
                o = e.effects.setMode(n, t.mode || "show"),
                r = "show" === o,
                h = t.direction || "left",
                l = "up" === h || "down" === h ? "top" : "left",
                u = "up" === h || "left" === h,
                d = {};
            e.effects.save(n, a), n.show(), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(n).css({ overflow: "hidden" }), r && n.css(l, u ? isNaN(s) ? "-" + s : -s : s), d[l] = (r ? u ? "+=" : "-=" : u ? "-=" : "+=") + s, n.animate(d, { queue: !1, duration: t.duration, easing: t.easing, complete: function() { "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i() } })
        }, e.effects.effect.transfer = function(t, i) {
            var s = e(this),
                n = e(t.to),
                a = "fixed" === n.css("position"),
                o = e("body"),
                r = a ? o.scrollTop() : 0,
                h = a ? o.scrollLeft() : 0,
                l = n.offset(),
                u = { top: l.top - r, left: l.left - h, height: n.innerHeight(), width: n.innerWidth() },
                d = s.offset(),
                c = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({ top: d.top - r, left: d.left - h, height: s.innerHeight(), width: s.innerWidth(), position: a ? "fixed" : "absolute" }).animate(u, t.duration, t.easing, function() { c.remove(), i() })
        }, e.widget("ui.progressbar", {
            version: "1.11.4",
            options: { max: 100, value: 0, change: null, complete: null },
            min: 0,
            _create: function() { this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({ role: "progressbar", "aria-valuemin": this.min }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue() },
            _destroy: function() { this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove() },
            value: function(e) { return void 0 === e ? this.options.value : (this.options.value = this._constrainedValue(e), this._refreshValue(), void 0) },
            _constrainedValue: function(e) { return void 0 === e && (e = this.options.value), this.indeterminate = e === !1, "number" != typeof e && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e)) },
            _setOptions: function(e) {
                var t = e.value;
                delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue()
            },
            _setOption: function(e, t) { "max" === e && (t = Math.max(this.min, t)), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t) },
            _percentage: function() { return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min) },
            _refreshValue: function() {
                var t = this.options.value,
                    i = this._percentage();
                this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": t }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
            }
        }), e.widget("ui.selectable", e.ui.mouse, {
            version: "1.11.4",
            options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null },
            _create: function() {
                var t, i = this;
                this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                    t = e(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function() {
                        var t = e(this),
                            i = t.offset();
                        e.data(this, "selectable-item", { element: this, $element: t, left: i.left, top: i.top, right: i.left + t.outerWidth(), bottom: i.top + t.outerHeight(), startselected: !1, selected: t.hasClass("ui-selected"), selecting: t.hasClass("ui-selecting"), unselecting: t.hasClass("ui-unselecting") })
                    })
                }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
            },
            _destroy: function() { this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy() },
            _mouseStart: function(t) {
                var i = this,
                    s = this.options;
                this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), e(s.appendTo).append(this.helper), this.helper.css({ left: t.pageX, top: t.pageY, width: 0, height: 0 }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var s = e.data(this, "selectable-item");
                    s.startselected = !0, t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", t, { unselecting: s.element }))
                }), e(t.target).parents().addBack().each(function() { var s, n = e.data(this, "selectable-item"); return n ? (s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, { selecting: n.element }) : i._trigger("unselecting", t, { unselecting: n.element }), !1) : void 0 }))
            },
            _mouseDrag: function(t) {
                if (this.dragged = !0, !this.options.disabled) {
                    var i, s = this,
                        n = this.options,
                        a = this.opos[0],
                        o = this.opos[1],
                        r = t.pageX,
                        h = t.pageY;
                    return a > r && (i = r, r = a, a = i), o > h && (i = h, h = o, o = i), this.helper.css({ left: a, top: o, width: r - a, height: h - o }), this.selectees.each(function() {
                        var i = e.data(this, "selectable-item"),
                            l = !1;
                        i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || a > i.right || i.top > h || o > i.bottom) : "fit" === n.tolerance && (l = i.left > a && r > i.right && i.top > o && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", t, { selecting: i.element }))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", t, { unselecting: i.element }))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", t, { unselecting: i.element })))))
                    }), !1
                }
            },
            _mouseStop: function(t) {
                var i = this;
                return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function() {
                    var s = e.data(this, "selectable-item");
                    s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", t, { unselected: s.element })
                }), e(".ui-selecting", this.element[0]).each(function() {
                    var s = e.data(this, "selectable-item");
                    s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", t, { selected: s.element })
                }), this._trigger("stop", t), this.helper.remove(), !1
            }
        }), e.widget("ui.selectmenu", {
            version: "1.11.4",
            defaultElement: "<select>",
            options: { appendTo: null, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: null, change: null, close: null, focus: null, open: null, select: null },
            _create: function() {
                var e = this.element.uniqueId().attr("id");
                this.ids = { element: e, button: e + "-button", menu: e + "-menu" }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
            },
            _drawButton: function() {
                var t = this;
                this.label = e("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, { click: function(e) { this.button.focus(), e.preventDefault() } }), this.element.hide(), this.button = e("<span>", { "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all", tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true" }).insertAfter(this.element), e("<span>", { "class": "ui-icon " + this.options.icons.button }).prependTo(this.button), this.buttonText = e("<span>", { "class": "ui-selectmenu-text" }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() { t.menuItems || t._refreshMenu() }), this._hoverable(this.button), this._focusable(this.button)
            },
            _drawMenu: function() {
                var t = this;
                this.menu = e("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }), this.menuWrap = e("<div>", { "class": "ui-selectmenu-menu ui-front" }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                    role: "listbox",
                    select: function(e, i) { e.preventDefault(), t._setSelection(), t._select(i.item.data("ui-selectmenu-item"), e) },
                    focus: function(e, i) {
                        var s = i.item.data("ui-selectmenu-item");
                        null != t.focusIndex && s.index !== t.focusIndex && (t._trigger("focus", e, { item: s }), t.isOpen || t._select(s, e)), t.focusIndex = s.index, t.button.attr("aria-activedescendant", t.menuItems.eq(s.index).attr("id"))
                    }
                }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() { return !1 }, this.menuInstance._isDivider = function() { return !1 }
            },
            refresh: function() { this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton() },
            _refreshMenu: function() {
                this.menu.empty();
                var e, t = this.element.find("option");
                t.length && (this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), e = this._getSelectedItem(), this.menuInstance.focus(null, e), this._setAria(e.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
            },
            open: function(e) { this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", e)) },
            _position: function() { this.menuWrap.position(e.extend({ of: this.button }, this.options.position)) },
            close: function(e) { this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", e)) },
            widget: function() { return this.button },
            menuWidget: function() { return this.menu },
            _renderMenu: function(t, i) {
                var s = this,
                    n = "";
                e.each(i, function(i, a) { a.optgroup !== n && (e("<li>", { "class": "ui-selectmenu-optgroup ui-menu-divider" + (a.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""), text: a.optgroup }).appendTo(t), n = a.optgroup), s._renderItemData(t, a) })
            },
            _renderItemData: function(e, t) { return this._renderItem(e, t).data("ui-selectmenu-item", t) },
            _renderItem: function(t, i) { var s = e("<li>"); return i.disabled && s.addClass("ui-state-disabled"), this._setText(s, i.label), s.appendTo(t) },
            _setText: function(e, t) { t ? e.text(t) : e.html("&#160;") },
            _move: function(e, t) {
                var i, s, n = ".ui-menu-item";
                this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), n += ":not(.ui-state-disabled)"), s = "first" === e || "last" === e ? i["first" === e ? "prevAll" : "nextAll"](n).eq(-1) : i[e + "All"](n).eq(0), s.length && this.menuInstance.focus(t, s)
            },
            _getSelectedItem: function() { return this.menuItems.eq(this.element[0].selectedIndex) },
            _toggle: function(e) { this[this.isOpen ? "close" : "open"](e) },
            _setSelection: function() {
                var e;
                this.range && (window.getSelection ? (e = window.getSelection(), e.removeAllRanges(), e.addRange(this.range)) : this.range.select(), this.button.focus())
            },
            _documentClick: { mousedown: function(t) { this.isOpen && (e(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t)) } },
            _buttonEvents: {
                mousedown: function() {
                    var e;
                    window.getSelection ? (e = window.getSelection(), e.rangeCount && (this.range = e.getRangeAt(0))) : this.range = document.selection.createRange()
                },
                click: function(e) { this._setSelection(), this._toggle(e) },
                keydown: function(t) {
                    var i = !0;
                    switch (t.keyCode) {
                        case e.ui.keyCode.TAB:
                        case e.ui.keyCode.ESCAPE:
                            this.close(t), i = !1;
                            break;
                        case e.ui.keyCode.ENTER:
                            this.isOpen && this._selectFocusedItem(t);
                            break;
                        case e.ui.keyCode.UP:
                            t.altKey ? this._toggle(t) : this._move("prev", t);
                            break;
                        case e.ui.keyCode.DOWN:
                            t.altKey ? this._toggle(t) : this._move("next", t);
                            break;
                        case e.ui.keyCode.SPACE:
                            this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                            break;
                        case e.ui.keyCode.LEFT:
                            this._move("prev", t);
                            break;
                        case e.ui.keyCode.RIGHT:
                            this._move("next", t);
                            break;
                        case e.ui.keyCode.HOME:
                        case e.ui.keyCode.PAGE_UP:
                            this._move("first", t);
                            break;
                        case e.ui.keyCode.END:
                        case e.ui.keyCode.PAGE_DOWN:
                            this._move("last", t);
                            break;
                        default:
                            this.menu.trigger(t), i = !1
                    }
                    i && t.preventDefault()
                }
            },
            _selectFocusedItem: function(e) {
                var t = this.menuItems.eq(this.focusIndex);
                t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), e)
            },
            _select: function(e, t) {
                var i = this.element[0].selectedIndex;
                this.element[0].selectedIndex = e.index, this._setText(this.buttonText, e.label), this._setAria(e), this._trigger("select", t, { item: e }), e.index !== i && this._trigger("change", t, { item: e }), this.close(t)
            },
            _setAria: function(e) {
                var t = this.menuItems.eq(e.index).attr("id");
                this.button.attr({ "aria-labelledby": t, "aria-activedescendant": t }), this.menu.attr("aria-activedescendant", t)
            },
            _setOption: function(e, t) { "icons" === e && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button), this._super(e, t), "appendTo" === e && this.menuWrap.appendTo(this._appendTo()), "disabled" === e && (this.menuInstance.option("disabled", t), this.button.toggleClass("ui-state-disabled", t).attr("aria-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === e && this._resizeButton() },
            _appendTo: function() { var t = this.options.appendTo; return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t },
            _toggleAttr: function() { this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen) },
            _resizeButton: function() {
                var e = this.options.width;
                e || (e = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(e)
            },
            _resizeMenu: function() { this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1)) },
            _getCreateOptions: function() { return { disabled: this.element.prop("disabled") } },
            _parseOptions: function(t) {
                var i = [];
                t.each(function(t, s) {
                    var n = e(s),
                        a = n.parent("optgroup");
                    i.push({ element: n, index: t, value: n.val(), label: n.text(), optgroup: a.attr("label") || "", disabled: a.prop("disabled") || n.prop("disabled") })
                }), this.items = i
            },
            _destroy: function() { this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element) }
        }), e.widget("ui.slider", e.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "slide",
            options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null },
            numPages: 5,
            _create: function() { this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1 },
            _refresh: function() { this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue() },
            _createHandles: function() {
                var t, i, s = this.options,
                    n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                    o = [];
                for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) o.push(a);
                this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) { e(this).data("ui-slider-handle-index", t) })
            },
            _createRange: function() {
                var t = this.options,
                    i = "";
                t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({ left: "", bottom: "" }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function() { this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles) },
            _destroy: function() { this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy() },
            _mouseCapture: function(t) {
                var i, s, n, a, o, r, h, l, u = this,
                    d = this.options;
                return d.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: t.pageX, y: t.pageY }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                    var i = Math.abs(s - u.values(t));
                    (n > i || n === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (n = i, a = e(this), o = t)
                }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? { left: 0, top: 0 } : { left: t.pageX - h.left - a.width() / 2, top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0))
            },
            _mouseStart: function() { return !0 },
            _mouseDrag: function(e) {
                var t = { x: e.pageX, y: e.pageY },
                    i = this._normValueFromMouse(t);
                return this._slide(e, this._handleIndex, i), !1
            },
            _mouseStop: function(e) { return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 },
            _detectOrientation: function() { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" },
            _normValueFromMouse: function(e) { var t, i, s, n, a; return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a) },
            _start: function(e, t) { var i = { handle: this.handles[t], value: this.value() }; return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i) },
            _slide: function(e, t, i) {
                var s, n, a;
                this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, { handle: this.handles[t], value: i, values: n }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, { handle: this.handles[t], value: i }), a !== !1 && this.value(i))
            },
            _stop: function(e, t) {
                var i = { handle: this.handles[t], value: this.value() };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
            },
            _change: function(e, t) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = { handle: this.handles[t], value: this.value() };
                    this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
                }
            },
            value: function(e) { return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value() },
            values: function(t, i) {
                var s, n, a;
                if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;
                if (!arguments.length) return this._values();
                if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
                this._refreshValue()
            },
            _setOption: function(t, i) {
                var s, n = 0;
                switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
                    case "orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                        this._animateOff = !1;
                        break;
                    case "step":
                    case "min":
                    case "max":
                        this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _value: function() { var e = this.options.value; return e = this._trimAlignValue(e) },
            _values: function(e) { var t, i, s; if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t); if (this.options.values && this.options.values.length) { for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]); return i } return [] },
            _trimAlignValue: function(e) {
                if (this._valueMin() >= e) return this._valueMin();
                if (e >= this._valueMax()) return this._valueMax();
                var t = this.options.step > 0 ? this.options.step : 1,
                    i = (e - this._valueMin()) % t,
                    s = e - i;
                return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
            },
            _calculateNewMax: function() {
                var e = this.options.max,
                    t = this._valueMin(),
                    i = this.options.step,
                    s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
                e = s + t, this.max = parseFloat(e.toFixed(this._precision()))
            },
            _precision: function() { var e = this._precisionOf(this.options.step); return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e },
            _precisionOf: function(e) {
                var t = "" + e,
                    i = t.indexOf(".");
                return -1 === i ? 0 : t.length - i - 1
            },
            _valueMin: function() { return this.options.min },
            _valueMax: function() { return this.max },
            _refreshValue: function() {
                var t, i, s, n, a, o = this.options.range,
                    r = this.options,
                    h = this,
                    l = this._animateOff ? !1 : r.animate,
                    u = {};
                this.options.values && this.options.values.length ? this.handles.each(function(s) { i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ width: i - t + "%" }, { queue: !1, duration: r.animate })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ height: i - t + "%" }, { queue: !1, duration: r.animate }))), t = i }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: i + "%" }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({ width: 100 - i + "%" }, { queue: !1, duration: r.animate }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: i + "%" }, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({ height: 100 - i + "%" }, { queue: !1, duration: r.animate }))
            },
            _handleEvents: {
                keydown: function(t) {
                    var i, s, n, a, o = e(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                        case e.ui.keyCode.HOME:
                        case e.ui.keyCode.END:
                        case e.ui.keyCode.PAGE_UP:
                        case e.ui.keyCode.PAGE_DOWN:
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return
                    }
                    switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
                        case e.ui.keyCode.HOME:
                            n = this._valueMin();
                            break;
                        case e.ui.keyCode.END:
                            n = this._valueMax();
                            break;
                        case e.ui.keyCode.PAGE_UP:
                            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case e.ui.keyCode.PAGE_DOWN:
                            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                            if (s === this._valueMax()) return;
                            n = this._trimAlignValue(s + a);
                            break;
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (s === this._valueMin()) return;
                            n = this._trimAlignValue(s - a)
                    }
                    this._slide(t, o, n)
                },
                keyup: function(t) {
                    var i = e(t.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
                }
            }
        }), e.widget("ui.sortable", e.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "sort",
            ready: !1,
            options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null },
            _isOverAxis: function(e, t, i) { return e >= t && t + i > e },
            _isFloating: function(e) { return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display")) },
            _create: function() { this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0 },
            _setOption: function(e, t) { this._super(e, t), "handle" === e && this._setHandleClassName() },
            _setHandleClassName: function() {
                this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function() {
                    (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                })
            },
            _destroy: function() { this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy(); for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item"); return this },
            _mouseCapture: function(t, i) {
                var s = null,
                    n = !1,
                    a = this;
                return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function() { return e.data(this, a.widgetName + "-item") === a ? (s = e(this), !1) : void 0 }), e.data(t.target, a.widgetName + "-item") === a && (s = e(t.target)), s ? !this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function() { this === t.target && (n = !0) }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
            },
            _mouseStart: function(t, i, s) {
                var n, a, o = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, e.extend(this.offset, { click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                    for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", t, this._uiHash(this));
                return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
            },
            _mouseDrag: function(t) {
                var i, s, n, a, o = this.options,
                    r = !1;
                for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - this.document.scrollTop() < o.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), t.pageX - this.document.scrollLeft() < o.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), r !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                    if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !e.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], n) : !0)) {
                        if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                        this._rearrange(t, s), this._trigger("change", t, this._uiHash());
                        break
                    }
                return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(t, i) {
                if (t) {
                    if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                        var s = this,
                            n = this.placeholder.offset(),
                            a = this.options.axis,
                            o = {};
                        a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() { s._clear(t) })
                    } else this._clear(t, i);
                    return !1
                }
            },
            cancel: function() { if (this.dragging) { this._mouseUp({ target: null }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show(); for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0) } return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this },
            serialize: function(t) {
                var i = this._getItemsAsjQuery(t && t.connected),
                    s = [];
                return t = t || {}, e(i).each(function() {
                    var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                    i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
                }), !s.length && t.key && s.push(t.key + "="), s.join("&")
            },
            toArray: function(t) {
                var i = this._getItemsAsjQuery(t && t.connected),
                    s = [];
                return t = t || {}, i.each(function() { s.push(e(t.item || this).attr(t.attribute || "id") || "") }), s
            },
            _intersectsWith: function(e) {
                var t = this.positionAbs.left,
                    i = t + this.helperProportions.width,
                    s = this.positionAbs.top,
                    n = s + this.helperProportions.height,
                    a = e.left,
                    o = a + e.width,
                    r = e.top,
                    h = r + e.height,
                    l = this.offset.click.top,
                    u = this.offset.click.left,
                    d = "x" === this.options.axis || s + l > r && h > s + l,
                    c = "y" === this.options.axis || t + u > a && o > t + u,
                    p = d && c;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function(e) {
                var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                    i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                    s = t && i,
                    n = this._getDragVerticalDirection(),
                    a = this._getDragHorizontalDirection();
                return s ? this.floating ? a && "right" === a || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1
            },
            _intersectsWithSides: function(e) {
                var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                    i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                    s = this._getDragVerticalDirection(),
                    n = this._getDragHorizontalDirection();
                return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && t || "up" === s && !t)
            },
            _getDragVerticalDirection: function() { var e = this.positionAbs.top - this.lastPositionAbs.top; return 0 !== e && (e > 0 ? "down" : "up") },
            _getDragHorizontalDirection: function() { var e = this.positionAbs.left - this.lastPositionAbs.left; return 0 !== e && (e > 0 ? "right" : "left") },
            refresh: function(e) { return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this },
            _connectWith: function() { var e = this.options; return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith },
            _getItemsAsjQuery: function(t) {
                function i() { r.push(this) }
                var s, n, a, o, r = [],
                    h = [],
                    l = this._connectWith();
                if (l && t)
                    for (s = l.length - 1; s >= 0; s--)
                        for (a = e(l[s], this.document[0]), n = a.length - 1; n >= 0; n--) o = e.data(a[n], this.widgetFullName), o && o !== this && !o.options.disabled && h.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
                for (h.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
                return e(r)
            },
            _removeCurrentsFromItems: function() {
                var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = e.grep(this.items, function(e) {
                    for (var i = 0; t.length > i; i++)
                        if (t[i] === e.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(t) {
                this.items = [], this.containers = [this];
                var i, s, n, a, o, r, h, l, u = this.items,
                    d = [
                        [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, { item: this.currentItem }) : e(this.options.items, this.element), this]
                    ],
                    c = this._connectWith();
                if (c && this.ready)
                    for (i = c.length - 1; i >= 0; i--)
                        for (n = e(c[i], this.document[0]), s = n.length - 1; s >= 0; s--) a = e.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (d.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, { item: this.currentItem }) : e(a.options.items, a.element), a]), this.containers.push(a));
                for (i = d.length - 1; i >= 0; i--)
                    for (o = d[i][1], r = d[i][0], s = 0, l = r.length; l > s; s++) h = e(r[s]), h.data(this.widgetName + "-item", o), u.push({ item: h, instance: o, width: 0, height: 0, left: 0, top: 0 })
            },
            refreshPositions: function(t) {
                this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var i, s, n, a;
                for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--) a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function(t) {
                t = t || this;
                var i, s = t.options;
                s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                    element: function() {
                        var s = t.currentItem[0].nodeName.toLowerCase(),
                            n = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        return "tbody" === s ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(n)) : "tr" === s ? t._createTrPlaceholder(t.currentItem, n) : "img" === s && n.attr("src", t.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                    },
                    update: function(e, n) {
                        (!i || s.forcePlaceholderSize) && (n.height() || n.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), s.placeholder.update(t, t.placeholder)
            },
            _createTrPlaceholder: function(t, i) {
                var s = this;
                t.children().each(function() { e("<td>&#160;</td>", s.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(i) })
            },
            _contactContainers: function(t) {
                var i, s, n, a, o, r, h, l, u, d, c = null,
                    p = null;
                for (i = this.containers.length - 1; i >= 0; i--)
                    if (!e.contains(this.currentItem[0], this.containers[i].element[0]))
                        if (this._intersectsWith(this.containers[i].containerCache)) {
                            if (c && e.contains(this.containers[i].element[0], c.element[0])) continue;
                            c = this.containers[i], p = i
                        } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
                if (c)
                    if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                    else {
                        for (n = 1e4, a = null, u = c.floating || this._isFloating(this.currentItem), o = u ? "left" : "top", r = u ? "width" : "height", d = u ? "clientX" : "clientY", s = this.items.length - 1; s >= 0; s--) e.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[o], l = !1, t[d] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(t[d] - h) && (n = Math.abs(t[d] - h), a = this.items[s], this.direction = l ? "up" : "down"));
                        if (!a && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
                        a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[p].element, !0), this._trigger("change", t, this._uiHash()), this.containers[p]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1
                    }
            },
            _createHelper: function(t) {
                var i = this.options,
                    s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
            },
            _adjustOffsetFromHelper: function(t) { "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top) },
            _getParentOffset: function() { this.offsetParent = this.helper.offsetParent(); var t = this.offsetParent.offset(); return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } },
            _getRelativeOffset: function() { if ("relative" === this.cssPosition) { var e = this.currentItem.position(); return { top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } },
            _cacheMargins: function() { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 } },
            _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
            _setContainment: function() { var t, i, s, n = this.options; "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (t = e(n.containment)[0], i = e(n.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]) },
            _convertPositionTo: function(t, i) {
                i || (i = this.position);
                var s = "absolute" === t ? 1 : -1,
                    n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    a = /(html|body)/i.test(n[0].tagName);
                return { top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s }
            },
            _generatePosition: function(t) {
                var i, s, n = this.options,
                    a = t.pageX,
                    o = t.pageY,
                    r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    h = /(html|body)/i.test(r[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), { top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()), left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft()) }
            },
            _rearrange: function(e, t, i, s) {
                i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var n = this.counter;
                this._delay(function() { n === this.counter && this.refreshPositions(!s) })
            },
            _clear: function(e, t) {
                function i(e, t, i) { return function(s) { i._trigger(e, s, t._uiHash(t)) } }
                this.reverting = !1;
                var s, n = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !t && n.push(function(e) { this._trigger("receive", e, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || n.push(function(e) { this._trigger("update", e, this._uiHash()) }), this !== this.currentContainer && (t || (n.push(function(e) { this._trigger("remove", e, this._uiHash()) }), n.push(function(e) { return function(t) { e._trigger("receive", t, this._uiHash(this)) } }.call(this, this.currentContainer)), n.push(function(e) { return function(t) { e._trigger("update", t, this._uiHash(this)) } }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) t || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
                    for (s = 0; n.length > s; s++) n[s].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function() { e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel() },
            _uiHash: function(t) { var i = t || this; return { helper: i.helper, placeholder: i.placeholder || e([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: t ? t.element : null } }
        }), e.widget("ui.spinner", {
            version: "1.11.4",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: { culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null },
            _create: function() { this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } }) },
            _getCreateOptions: function() {
                var t = {},
                    i = this.element;
                return e.each(["min", "max", "step"], function(e, s) {
                    var n = i.attr(s);
                    void 0 !== n && n.length && (t[s] = n)
                }), t
            },
            _events: {
                keydown: function(e) { this._start(e) && this._keydown(e) && e.preventDefault() },
                keyup: "_stop",
                focus: function() { this.previous = this.element.val() },
                blur: function(e) { return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", e), void 0) },
                mousewheel: function(e, t) {
                    if (t) {
                        if (!this.spinning && !this._start(e)) return !1;
                        this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() { this.spinning && this._stop(e) }, 100), e.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function(t) {
                    function i() {
                        var e = this.element[0] === this.document[0].activeElement;
                        e || (this.element.focus(), this.previous = s, this._delay(function() { this.previous = s }))
                    }
                    var s;
                    s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur, i.call(this) }), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function(t) { return e(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : (this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0) : void 0 },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _draw: function() {
                var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * e.height()) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable()
            },
            _keydown: function(t) {
                var i = this.options,
                    s = e.ui.keyCode;
                switch (t.keyCode) {
                    case s.UP:
                        return this._repeat(null, 1, t), !0;
                    case s.DOWN:
                        return this._repeat(null, -1, t), !0;
                    case s.PAGE_UP:
                        return this._repeat(null, i.page, t), !0;
                    case s.PAGE_DOWN:
                        return this._repeat(null, -i.page, t), !0
                }
                return !1
            },
            _uiSpinnerHtml: function() { return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>" },
            _buttonHtml: function() { return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>" },
            _start: function(e) { return this.spinning || this._trigger("start", e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1 },
            _repeat: function(e, t, i) { e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function() { this._repeat(40, t, i) }, e), this._spin(t * this.options.step, i) },
            _spin: function(e, t) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1), i = this._adjustValue(i + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, { value: i }) === !1 || (this._value(i), this.counter++)
            },
            _increment: function(t) { var i = this.options.incremental; return i ? e.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1 },
            _precision: function() { var e = this._precisionOf(this.options.step); return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e },
            _precisionOf: function(e) {
                var t = "" + e,
                    i = t.indexOf(".");
                return -1 === i ? 0 : t.length - i - 1
            },
            _adjustValue: function(e) { var t, i, s = this.options; return t = null !== s.min ? s.min : 0, i = e - t, i = Math.round(i / s.step) * s.step, e = t + i, e = parseFloat(e.toFixed(this._precision())), null !== s.max && e > s.max ? s.max : null !== s.min && s.min > e ? s.min : e },
            _stop: function(e) { this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e)) },
            _setOption: function(e, t) { if ("culture" === e || "numberFormat" === e) { var i = this._parse(this.element.val()); return this.options[e] = t, this.element.val(this._format(i)), void 0 }("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), "icons" === e && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)), this._super(e, t), "disabled" === e && (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")) },
            _setOptions: h(function(e) { this._super(e) }),
            _parse: function(e) { return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e },
            _format: function(e) { return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e },
            _refresh: function() { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }) },
            isValid: function() { var e = this.value(); return null === e ? !1 : e === this._adjustValue(e) },
            _value: function(e, t) { var i; "" !== e && (i = this._parse(e), null !== i && (t || (i = this._adjustValue(i)), e = this._format(i))), this.element.val(e), this._refresh() },
            _destroy: function() { this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element) },
            stepUp: h(function(e) { this._stepUp(e) }),
            _stepUp: function(e) { this._start() && (this._spin((e || 1) * this.options.step), this._stop()) },
            stepDown: h(function(e) { this._stepDown(e) }),
            _stepDown: function(e) { this._start() && (this._spin((e || 1) * -this.options.step), this._stop()) },
            pageUp: h(function(e) { this._stepUp((e || 1) * this.options.page) }),
            pageDown: h(function(e) { this._stepDown((e || 1) * this.options.page) }),
            value: function(e) { return arguments.length ? (h(this._value).call(this, e), void 0) : this._parse(this.element.val()) },
            widget: function() { return this.uiSpinner }
        }), e.widget("ui.tabs", {
            version: "1.11.4",
            delay: 300,
            options: { active: null, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null },
            _isLocal: function() {
                var e = /#.*$/;
                return function(t) {
                    var i, s;
                    t = t.cloneNode(!1), i = t.href.replace(e, ""), s = location.href.replace(e, "");
                    try { i = decodeURIComponent(i) } catch (n) {}
                    try { s = decodeURIComponent(s) } catch (n) {}
                    return t.hash.length > 1 && i === s
                }
            }(),
            _create: function() {
                var t = this,
                    i = this.options;
                this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function(e) { return t.tabs.index(e) }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : e(), this._refresh(), this.active.length && this.load(i.active)
            },
            _initialActive: function() {
                var t = this.options.active,
                    i = this.options.collapsible,
                    s = location.hash.substring(1);
                return null === t && (s && this.tabs.each(function(i, n) { return e(n).attr("aria-controls") === s ? (t = i, !1) : void 0 }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t
            },
            _getCreateEventData: function() { return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : e() } },
            _tabKeydown: function(t) {
                var i = e(this.document[0].activeElement).closest("li"),
                    s = this.tabs.index(i),
                    n = !0;
                if (!this._handlePageNav(t)) {
                    switch (t.keyCode) {
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                            s++;
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.LEFT:
                            n = !1, s--;
                            break;
                        case e.ui.keyCode.END:
                            s = this.anchors.length - 1;
                            break;
                        case e.ui.keyCode.HOME:
                            s = 0;
                            break;
                        case e.ui.keyCode.SPACE:
                            return t.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;
                        case e.ui.keyCode.ENTER:
                            return t.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;
                        default:
                            return
                    }
                    t.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), t.ctrlKey || t.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() { this.option("active", s) }, this.delay))
                }
            },
            _panelKeydown: function(t) { this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus()) },
            _handlePageNav: function(t) { return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0 },
            _findNextTab: function(t, i) {
                function s() { return t > n && (t = 0), 0 > t && (t = n), t }
                for (var n = this.tabs.length - 1; - 1 !== e.inArray(s(), this.options.disabled);) t = i ? t + 1 : t - 1;
                return t
            },
            _focusNextTab: function(e, t) { return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e },
            _setOption: function(e, t) { return "active" === e ? (this._activate(t), void 0) : "disabled" === e ? (this._setupDisabled(t), void 0) : (this._super(e, t), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), "heightStyle" === e && this._setupHeightStyle(t), void 0) },
            _sanitizeSelector: function(e) { return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "" },
            refresh: function() {
                var t = this.options,
                    i = this.tablist.children(":has(a[href])");
                t.disabled = e.map(i.filter(".ui-state-disabled"), function(e) { return i.index(e) }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
            },
            _refresh: function() { this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0) },
            _processTabs: function() {
                var t = this,
                    i = this.tabs,
                    s = this.anchors,
                    n = this.panels;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(t) { e(this).is(".ui-state-disabled") && t.preventDefault() }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() { e(this).closest("li").is(".ui-state-disabled") && this.blur() }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({ role: "tab", tabIndex: -1 }), this.anchors = this.tabs.map(function() { return e("a", this)[0] }).addClass("ui-tabs-anchor").attr({ role: "presentation", tabIndex: -1 }), this.panels = e(), this.anchors.each(function(i, s) {
                    var n, a, o, r = e(s).uniqueId().attr("id"),
                        h = e(s).closest("li"),
                        l = h.attr("aria-controls");
                    t._isLocal(s) ? (n = s.hash, o = n.substring(1), a = t.element.find(t._sanitizeSelector(n))) : (o = h.attr("aria-controls") || e({}).uniqueId()[0].id, n = "#" + o, a = t.element.find(n), a.length || (a = t._createPanel(o), a.insertAfter(t.panels[i - 1] || t.tablist)), a.attr("aria-live", "polite")), a.length && (t.panels = t.panels.add(a)), l && h.data("ui-tabs-aria-controls", l), h.attr({ "aria-controls": o, "aria-labelledby": r }), a.attr("aria-labelledby", r)
                }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
            },
            _getList: function() { return this.tablist || this.element.find("ol,ul").eq(0) },
            _createPanel: function(t) { return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0) },
            _setupDisabled: function(t) {
                e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
                for (var i, s = 0; i = this.tabs[s]; s++) t === !0 || -1 !== e.inArray(s, t) ? e(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = t
            },
            _setupEvents: function(t) {
                var i = {};
                t && e.each(t.split(" "), function(e, t) { i[t] = "_eventHandler" }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, { click: function(e) { e.preventDefault() } }), this._on(this.anchors, i), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(t) {
                var i, s = this.element.parent();
                "fill" === t ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                    var t = e(this),
                        s = t.css("position");
                    "absolute" !== s && "fixed" !== s && (i -= t.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function() { i -= e(this).outerHeight(!0) }), this.panels.each(function() { e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height())) }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function() { i = Math.max(i, e(this).height("").height()) }).height(i))
            },
            _eventHandler: function(t) {
                var i = this.options,
                    s = this.active,
                    n = e(t.currentTarget),
                    a = n.closest("li"),
                    o = a[0] === s[0],
                    r = o && i.collapsible,
                    h = r ? e() : this._getPanelForTab(a),
                    l = s.length ? this._getPanelForTab(s) : e(),
                    u = { oldTab: s, oldPanel: l, newTab: r ? e() : a, newPanel: h };
                t.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", t, u) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? e() : a, this.xhr && this.xhr.abort(), l.length || h.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), t), this._toggle(t, u))
            },
            _toggle: function(t, i) {
                function s() { a.running = !1, a._trigger("activate", t, i) }

                function n() { i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s()) }
                var a = this,
                    o = i.newPanel,
                    r = i.oldPanel;
                this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() { i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n() }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() { return 0 === e(this).attr("tabIndex") }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
            },
            _activate: function(t) {
                var i, s = this._findActive(t);
                s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: e.noop }))
            },
            _findActive: function(t) { return t === !1 ? e() : this.tabs.eq(t) },
            _getIndex: function(e) { return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e },
            _destroy: function() {
                this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() { e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role") }), this.tabs.each(function() {
                    var t = e(this),
                        i = t.data("ui-tabs-aria-controls");
                    i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(t) {
                var i = this.options.disabled;
                i !== !1 && (void 0 === t ? i = !1 : (t = this._getIndex(t), i = e.isArray(i) ? e.map(i, function(e) { return e !== t ? e : null }) : e.map(this.tabs, function(e, i) { return i !== t ? i : null })), this._setupDisabled(i))
            },
            disable: function(t) {
                var i = this.options.disabled;
                if (i !== !0) {
                    if (void 0 === t) i = !0;
                    else {
                        if (t = this._getIndex(t), -1 !== e.inArray(t, i)) return;
                        i = e.isArray(i) ? e.merge([t], i).sort() : [t]
                    }
                    this._setupDisabled(i)
                }
            },
            load: function(t, i) {
                t = this._getIndex(t);
                var s = this,
                    n = this.tabs.eq(t),
                    a = n.find(".ui-tabs-anchor"),
                    o = this._getPanelForTab(n),
                    r = { tab: n, panel: o },
                    h = function(e, t) { "abort" === t && s.panels.stop(!1, !0), n.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), e === s.xhr && delete s.xhr };
                this._isLocal(a[0]) || (this.xhr = e.ajax(this._ajaxSettings(a, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function(e, t, n) { setTimeout(function() { o.html(e), s._trigger("load", i, r), h(n, t) }, 1) }).fail(function(e, t) { setTimeout(function() { h(e, t) }, 1) })))
            },
            _ajaxSettings: function(t, i, s) { var n = this; return { url: t.attr("href"), beforeSend: function(t, a) { return n._trigger("beforeLoad", i, e.extend({ jqXHR: t, ajaxSettings: a }, s)) } } },
            _getPanelForTab: function(t) { var i = e(t).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + i)) }
        }), e.widget("ui.tooltip", {
            version: "1.11.4",
            options: { content: function() { var t = e(this).attr("title") || ""; return e("<a>").text(t).html() }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, tooltipClass: null, track: !1, close: null, open: null },
            _addDescribedBy: function(t, i) {
                var s = (t.attr("aria-describedby") || "").split(/\s+/);
                s.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", e.trim(s.join(" ")))
            },
            _removeDescribedBy: function(t) {
                var i = t.data("ui-tooltip-id"),
                    s = (t.attr("aria-describedby") || "").split(/\s+/),
                    n = e.inArray(i, s); - 1 !== n && s.splice(n, 1), t.removeData("ui-tooltip-id"), s = e.trim(s.join(" ")), s ? t.attr("aria-describedby", s) : t.removeAttr("aria-describedby")
            },
            _create: function() { this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = e("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body) },
            _setOption: function(t, i) { var s = this; return "disabled" === t ? (this[i ? "_disable" : "_enable"](), this.options[t] = i, void 0) : (this._super(t, i), "content" === t && e.each(this.tooltips, function(e, t) { s._updateContent(t.element) }), void 0) },
            _disable: function() {
                var t = this;
                e.each(this.tooltips, function(i, s) {
                    var n = e.Event("blur");
                    n.target = n.currentTarget = s.element[0], t.close(n, !0)
                }), this.element.find(this.options.items).addBack().each(function() {
                    var t = e(this);
                    t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
                })
            },
            _enable: function() {
                this.element.find(this.options.items).addBack().each(function() {
                    var t = e(this);
                    t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                })
            },
            open: function(t) {
                var i = this,
                    s = e(t ? t.target : this.element).closest(this.options.items);
                s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), t && "mouseover" === t.type && s.parents().each(function() {
                    var t, s = e(this);
                    s.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = { element: this, title: s.attr("title") }, s.attr("title", ""))
                }), this._registerCloseHandlers(t, s), this._updateContent(s, t))
            },
            _updateContent: function(e, t) {
                var i, s = this.options.content,
                    n = this,
                    a = t ? t.type : null;
                return "string" == typeof s ? this._open(t, e, s) : (i = s.call(e[0], function(i) { n._delay(function() { e.data("ui-tooltip-open") && (t && (t.type = a), this._open(t, e, i)) }) }), i && this._open(t, e, i), void 0)
            },
            _open: function(t, i, s) {
                function n(e) { l.of = e, o.is(":hidden") || o.position(l) }
                var a, o, r, h, l = e.extend({}, this.options.position);
                if (s) {
                    if (a = this._find(i)) return a.tooltip.find(".ui-tooltip-content").html(s), void 0;
                    i.is("[title]") && (t && "mouseover" === t.type ? i.attr("title", "") : i.removeAttr("title")), a = this._tooltip(i), o = a.tooltip, this._addDescribedBy(i, o.attr("id")), o.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), s.clone ? (h = s.clone(), h.removeAttr("id").find("[id]").removeAttr("id")) : h = s, e("<div>").html(h).appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, { mousemove: n }), n(t)) : o.position(e.extend({ of: i }, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() { o.is(":visible") && (n(l.of), clearInterval(r)) }, e.fx.interval)), this._trigger("open", t, { tooltip: o })
                }
            },
            _registerCloseHandlers: function(t, i) {
                var s = {
                    keyup: function(t) {
                        if (t.keyCode === e.ui.keyCode.ESCAPE) {
                            var s = e.Event(t);
                            s.currentTarget = i[0], this.close(s, !0)
                        }
                    }
                };
                i[0] !== this.element[0] && (s.remove = function() { this._removeTooltip(this._find(i).tooltip) }), t && "mouseover" !== t.type || (s.mouseleave = "close"), t && "focusin" !== t.type || (s.focusout = "close"), this._on(!0, i, s)
            },
            close: function(t) {
                var i, s = this,
                    n = e(t ? t.currentTarget : this.element),
                    a = this._find(n);
                return a ? (i = a.tooltip, a.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), a.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() { s._removeTooltip(e(this)) }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function(t, i) { e(i.element).attr("title", i.title), delete s.parents[t] }), a.closing = !0, this._trigger("close", t, { tooltip: i }), a.hiding || (a.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0)
            },
            _tooltip: function(t) {
                var i = e("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                    s = i.uniqueId().attr("id");
                return e("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[s] = { element: t, tooltip: i }
            },
            _find: function(e) { var t = e.data("ui-tooltip-id"); return t ? this.tooltips[t] : null },
            _removeTooltip: function(e) { e.remove(), delete this.tooltips[e.attr("id")] },
            _destroy: function() {
                var t = this;
                e.each(this.tooltips, function(i, s) {
                    var n = e.Event("blur"),
                        a = s.element;
                    n.target = n.currentTarget = a[0], t.close(n, !0), e("#" + i).remove(), a.data("ui-tooltip-title") && (a.attr("title") || a.attr("title", a.data("ui-tooltip-title")), a.removeData("ui-tooltip-title"))
                }), this.liveRegion.remove()
            }
        })
});
//slick
! function(i) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery) }(function(i) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(t, o) {
            var s, n = this;
            n.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: i(t), appendDots: i(t), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(e, t) { return i('<button type="button" />').text(t + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, n.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
    }()).prototype.activateADA = function() { this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null;
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) { i(t).attr("data-slick-index", e) }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({ height: e }, i.options.speed)
        }
    }, e.prototype.animateSlide = function(e, t) {
        var o = {},
            s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({ animStart: s.currentLeft }).animate({ animStart: e }, { duration: s.options.speed, easing: s.options.easing, step: function(i) { i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o)) }, complete: function() { t && t.call() } })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() { s.disableTransition(), t.call() }, s.options.speed))
    }, e.prototype.getNavTarget = function() {
        var e = this,
            t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t
    }, e.prototype.asNavFor = function(e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function() {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function(i) {
        var e = this,
            t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var i = this,
            e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
    }, e.prototype.buildArrows = function() { var e = this;!0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, e.prototype.buildDots = function() {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) { i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "") }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" })
        }
    }, e.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this,
            l = !1,
            d = r.$slider.width(),
            a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function(e, t) {
        var o, s, n, r = this,
            l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case "next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case "index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function(i) {
        var e, t;
        if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) { i = t; break }
                t = e[o]
            }
        return i
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
    }, e.prototype.clickHandler = function(i) {!1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault()) }, e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { i(this).attr("style", i(this).data("originalStyling")) }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function(i) {
        var e = this,
            t = {};
        t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function(i, e) { var t = this;!1 === t.cssTransitions ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }), e && setTimeout(function() { t.disableTransition(i), e.call() }, t.options.speed)) }, e.prototype.fadeSlideOut = function(i) { var e = this;!1 === e.cssTransitions ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 })) }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function() { e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay()) }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() { return this.currentSlide }, e.prototype.getDotCount = function() {
        var i = this,
            e = 0,
            t = 0,
            o = 0;
        if (!0 === i.options.infinite)
            if (i.slideCount <= i.options.slidesToShow) ++o;
            else
                for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode) o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function(i) {
        var e, t, o, s, n = this,
            r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function(i) { return this.options[i] }, e.prototype.getNavigableIndexes = function() {
        var i, e = this,
            t = 0,
            o = 0,
            s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function() { return this }, e.prototype.getSlideCount = function() { var e, t, o = this; return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) { if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1 }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) { this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e) }, e.prototype.init = function(e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function() {
        var e = this,
            t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function(i) { return i >= 0 && i < e.slideCount });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            var s = o.indexOf(t);
            i(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + t, tabindex: -1 }), -1 !== s && i(this).attr({ "aria-describedby": "slick-slide-control" + e.instanceUid + s })
        }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            i(this).attr({ role: "presentation" }), i(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + s, "aria-controls": "slick-slide" + e.instanceUid + n, "aria-label": s + 1 + " of " + t, "aria-selected": null, tabindex: "-1" })
        }).eq(e.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function() { var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler))) }, e.prototype.initDotEvents = function() { var e = this;!0 === e.options.dots && (i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1)) }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
    }, e.prototype.initUI = function() { var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show() }, e.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }))
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            i("img[data-lazy]", e).each(function() {
                var e = i(this),
                    t = i(this).attr("data-lazy"),
                    o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                r.onload = function() { e.animate({ opacity: 0 }, 100, function() { o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({ opacity: 1 }, 200, function() { e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading") }), n.$slider.trigger("lazyLoaded", [n, e, t]) }) }, r.onerror = function() { e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]) }, r.src = t
            })
        }
        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
            for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
        e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, e.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function() { this.changeSlide({ data: { message: "next" } }) }, e.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, e.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function() { this.changeSlide({ data: { message: "previous" } }) }, e.prototype.preventDefault = function(i) { i.preventDefault() }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n, r, l = this,
            d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() { s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad() }, r.onerror = function() { e < 3 ? setTimeout(function() { l.progressiveLazyLoad(e + 1) }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad()) }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }, e.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, { currentSlide: t }), s.init(), e || s.changeSlide({ data: { message: "index", index: t } }, !1)
    }, e.prototype.registerBreakpoints = function() {
        var e, t, o, s = this,
            n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                    s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
                }
            s.breakpoints.sort(function(i, e) { return s.options.mobileFirst ? i - e : e - i })
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function() {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() { e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition() }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.setCSS = function(i) {
        var e, t, o = this,
            s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function() { var i = this;!1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({ padding: "0px " + i.options.centerPadding }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({ padding: i.options.centerPadding + " 0px" })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length))); var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();!1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e) }, e.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) { e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : i(s).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) }), t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 })
    }, e.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, t, o, s, n, r = this,
            l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
        else if ("multiple" === n) i.each(o, function(i, e) { r.options[i] = e });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(s[t])
                }
        l && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function() {
        var i = this,
            e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }, e.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() { i(this).attr("id", "") })
        }
    }, e.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, e.prototype.selectHandler = function(e) {
        var t = this,
            o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }, e.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null,
            a = this;
        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() { a.postSlide(o) }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() { a.postSlide(o) }) : a.postSlide(o));
        else { if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function() { a.postSlide(s) })) : a.postSlide(s), void a.animateHeight();!0 !== t ? a.animateSlide(d, function() { a.postSlide(s) }) : a.postSlide(s) }
    }, e.prototype.startLoad = function() { var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading") }, e.prototype.swipeDirection = function() { var i, e, t, o, s = this; return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical" }, e.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function(i) { var e, t, o, s, n, r, l = this; return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft)))) }, e.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function() {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, i.fn.slick = function() {
        var i, t, o = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
        return o
    }
});
//Boostraps
/* 
 * Bootstrap v3.4.1
 * moment-with-locales.min.js
 * jquery.daterangepicker.js
 * custom-select.js
 */

/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function(t) { "use strict"; var e = jQuery.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(),
function(n) {
    "use strict";
    n.fn.emulateTransitionEnd = function(t) {
        var e = !1,
            i = this;
        n(this).one("bsTransitionEnd", function() { e = !0 });
        return setTimeout(function() { e || n(i).trigger(n.support.transition.end) }, t), this
    }, n(function() {
        n.support.transition = function o() {
            var t = document.createElement("bootstrap"),
                e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
            for (var i in e)
                if (t.style[i] !== undefined) return { end: e[i] };
            return !1
        }(), n.support.transition && (n.event.special.bsTransitionEnd = { bindType: n.support.transition.end, delegateType: n.support.transition.end, handle: function(t) { if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments) } })
    })
}(jQuery),
function(s) {
    "use strict";
    var e = '[data-dismiss="alert"]',
        a = function(t) { s(t).on("click", e, this.close) };
    a.VERSION = "3.4.1", a.TRANSITION_DURATION = 150, a.prototype.close = function(t) {
        var e = s(this),
            i = e.attr("data-target");
        i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), i = "#" === i ? [] : i;
        var o = s(document).find(i);

        function n() { o.detach().trigger("closed.bs.alert").remove() }
        t && t.preventDefault(), o.length || (o = e.closest(".alert")), o.trigger(t = s.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), s.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(a.TRANSITION_DURATION) : n())
    };
    var t = s.fn.alert;
    s.fn.alert = function o(i) {
        return this.each(function() {
            var t = s(this),
                e = t.data("bs.alert");
            e || t.data("bs.alert", e = new a(this)), "string" == typeof i && e[i].call(t)
        })
    }, s.fn.alert.Constructor = a, s.fn.alert.noConflict = function() { return s.fn.alert = t, this }, s(document).on("click.bs.alert.data-api", e, a.prototype.close)
}(jQuery),
function(s) {
    "use strict";
    var n = function(t, e) { this.$element = s(t), this.options = s.extend({}, n.DEFAULTS, e), this.isLoading = !1 };

    function i(o) {
        return this.each(function() {
            var t = s(this),
                e = t.data("bs.button"),
                i = "object" == typeof o && o;
            e || t.data("bs.button", e = new n(this, i)), "toggle" == o ? e.toggle() : o && e.setState(o)
        })
    }
    n.VERSION = "3.4.1", n.DEFAULTS = { loadingText: "loading..." }, n.prototype.setState = function(t) {
        var e = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            n = i.data();
        t += "Text", null == n.resetText && i.data("resetText", i[o]()), setTimeout(s.proxy(function() { i[o](null == n[t] ? this.options[t] : n[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(e).attr(e, e).prop(e, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(e).removeAttr(e).prop(e, !1)) }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) { var i = this.$element.find("input"); "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var t = s.fn.button;
    s.fn.button = i, s.fn.button.Constructor = n, s.fn.button.noConflict = function() { return s.fn.button = t, this }, s(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var e = s(t.target).closest(".btn");
        i.call(e, "toggle"), s(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), e.is("input,button") ? e.trigger("focus") : e.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) { s(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type)) })
}(jQuery),
function(p) {
    "use strict";
    var c = function(t, e) { this.$element = p(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", p.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", p.proxy(this.pause, this)).on("mouseleave.bs.carousel", p.proxy(this.cycle, this)) };

    function r(n) {
        return this.each(function() {
            var t = p(this),
                e = t.data("bs.carousel"),
                i = p.extend({}, c.DEFAULTS, t.data(), "object" == typeof n && n),
                o = "string" == typeof n ? n : i.slide;
            e || t.data("bs.carousel", e = new c(this, i)), "number" == typeof n ? e.to(n) : o ? e[o]() : i.interval && e.pause().cycle()
        })
    }
    c.VERSION = "3.4.1", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, c.prototype.cycle = function(t) { return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(p.proxy(this.next, this), this.options.interval)), this }, c.prototype.getItemIndex = function(t) { return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active) }, c.prototype.getItemForDirection = function(t, e) { var i = this.getItemIndex(e); if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e; var o = (i + ("prev" == t ? -1 : 1)) % this.$items.length; return this.$items.eq(o) }, c.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() { e.to(t) }) : i == t ? this.pause().cycle() : this.slide(i < t ? "next" : "prev", this.$items.eq(t))
    }, c.prototype.pause = function(t) { return t || (this.paused = !0), this.$element.find(".next, .prev").length && p.support.transition && (this.$element.trigger(p.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, c.prototype.next = function() { if (!this.sliding) return this.slide("next") }, c.prototype.prev = function() { if (!this.sliding) return this.slide("prev") }, c.prototype.slide = function(t, e) {
        var i = this.$element.find(".item.active"),
            o = e || this.getItemForDirection(t, i),
            n = this.interval,
            s = "next" == t ? "left" : "right",
            a = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var r = o[0],
            l = p.Event("slide.bs.carousel", { relatedTarget: r, direction: s });
        if (this.$element.trigger(l), !l.isDefaultPrevented()) {
            if (this.sliding = !0, n && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = p(this.$indicators.children()[this.getItemIndex(o)]);
                h && h.addClass("active")
            }
            var d = p.Event("slid.bs.carousel", { relatedTarget: r, direction: s });
            return p.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), "object" == typeof o && o.length && o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function() { o.removeClass([t, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), a.sliding = !1, setTimeout(function() { a.$element.trigger(d) }, 0) }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), n && this.cycle(), this
        }
    };
    var t = p.fn.carousel;
    p.fn.carousel = r, p.fn.carousel.Constructor = c, p.fn.carousel.noConflict = function() { return p.fn.carousel = t, this };
    var e = function(t) {
        var e = p(this),
            i = e.attr("href");
        i && (i = i.replace(/.*(?=#[^\s]+$)/, ""));
        var o = e.attr("data-target") || i,
            n = p(document).find(o);
        if (n.hasClass("carousel")) {
            var s = p.extend({}, n.data(), e.data()),
                a = e.attr("data-slide-to");
            a && (s.interval = !1), r.call(n, s), a && n.data("bs.carousel").to(a), t.preventDefault()
        }
    };
    p(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), p(window).on("load", function() {
        p('[data-ride="carousel"]').each(function() {
            var t = p(this);
            r.call(t, t.data())
        })
    })
}(jQuery),
function(a) {
    "use strict";
    var r = function(t, e) { this.$element = a(t), this.options = a.extend({}, r.DEFAULTS, e), this.$trigger = a('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };

    function n(t) { var e, i = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""); return a(document).find(i) }

    function l(o) {
        return this.each(function() {
            var t = a(this),
                e = t.data("bs.collapse"),
                i = a.extend({}, r.DEFAULTS, t.data(), "object" == typeof o && o);
            !e && i.toggle && /show|hide/.test(o) && (i.toggle = !1), e || t.data("bs.collapse", e = new r(this, i)), "string" == typeof o && e[o]()
        })
    }
    r.VERSION = "3.4.1", r.TRANSITION_DURATION = 350, r.DEFAULTS = { toggle: !0 }, r.prototype.dimension = function() { return this.$element.hasClass("width") ? "width" : "height" }, r.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (t = e.data("bs.collapse")) && t.transitioning)) {
                var i = a.Event("show.bs.collapse");
                if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                    e && e.length && (l.call(e, "hide"), t || e.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var n = function() { this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") };
                    if (!a.support.transition) return n.call(this);
                    var s = a.camelCase(["scroll", o].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(n, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s])
                }
            }
        }
    }, r.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = a.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var e = this.dimension();
                this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var i = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") };
                if (!a.support.transition) return i.call(this);
                this.$element[e](0).one("bsTransitionEnd", a.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION)
            }
        }
    }, r.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, r.prototype.getParent = function() {
        return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(t, e) {
            var i = a(e);
            this.addAriaAndCollapsedClass(n(i), i)
        }, this)).end()
    }, r.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var t = a.fn.collapse;
    a.fn.collapse = l, a.fn.collapse.Constructor = r, a.fn.collapse.noConflict = function() { return a.fn.collapse = t, this }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var e = a(this);
        e.attr("data-target") || t.preventDefault();
        var i = n(e),
            o = i.data("bs.collapse") ? "toggle" : e.data();
        l.call(i, o)
    })
}(jQuery),
function(a) {
    "use strict";
    var r = '[data-toggle="dropdown"]',
        o = function(t) { a(t).on("click.bs.dropdown", this.toggle) };

    function l(t) {
        var e = t.attr("data-target");
        e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
        var i = "#" !== e ? a(document).find(e) : null;
        return i && i.length ? i : t.parent()
    }

    function s(o) {
        o && 3 === o.which || (a(".dropdown-backdrop").remove(), a(r).each(function() {
            var t = a(this),
                e = l(t),
                i = { relatedTarget: this };
            e.hasClass("open") && (o && "click" == o.type && /input|textarea/i.test(o.target.tagName) && a.contains(e[0], o.target) || (e.trigger(o = a.Event("hide.bs.dropdown", i)), o.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", i)))))
        }))
    }
    o.VERSION = "3.4.1", o.prototype.toggle = function(t) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var i = l(e),
                o = i.hasClass("open");
            if (s(), !o) {
                "ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", s);
                var n = { relatedTarget: this };
                if (i.trigger(t = a.Event("show.bs.dropdown", n)), t.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger(a.Event("shown.bs.dropdown", n))
            }
            return !1
        }
    }, o.prototype.keydown = function(t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var e = a(this);
            if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
                var i = l(e),
                    o = i.hasClass("open");
                if (!o && 27 != t.which || o && 27 == t.which) return 27 == t.which && i.find(r).trigger("focus"), e.trigger("click");
                var n = i.find(".dropdown-menu li:not(.disabled):visible a");
                if (n.length) {
                    var s = n.index(t.target);
                    38 == t.which && 0 < s && s--, 40 == t.which && s < n.length - 1 && s++, ~s || (s = 0), n.eq(s).trigger("focus")
                }
            }
        }
    };
    var t = a.fn.dropdown;
    a.fn.dropdown = function e(i) {
        return this.each(function() {
            var t = a(this),
                e = t.data("bs.dropdown");
            e || t.data("bs.dropdown", e = new o(this)), "string" == typeof i && e[i].call(t)
        })
    }, a.fn.dropdown.Constructor = o, a.fn.dropdown.noConflict = function() { return a.fn.dropdown = t, this }, a(document).on("click.bs.dropdown.data-api", s).on("click.bs.dropdown.data-api", ".dropdown form", function(t) { t.stopPropagation() }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery),
function(a) {
    "use strict";
    var s = function(t, e) { this.options = e, this.$body = a(document.body), this.$element = a(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };

    function r(o, n) {
        return this.each(function() {
            var t = a(this),
                e = t.data("bs.modal"),
                i = a.extend({}, s.DEFAULTS, t.data(), "object" == typeof o && o);
            e || t.data("bs.modal", e = new s(this, i)), "string" == typeof o ? e[o](n) : i.show && e.show(n)
        })
    }
    s.VERSION = "3.4.1", s.TRANSITION_DURATION = 300, s.BACKDROP_TRANSITION_DURATION = 150, s.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, s.prototype.toggle = function(t) { return this.isShown ? this.hide() : this.show(t) }, s.prototype.show = function(i) {
        var o = this,
            t = a.Event("show.bs.modal", { relatedTarget: i });
        this.$element.trigger(t), this.isShown || t.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { o.$element.one("mouseup.dismiss.bs.modal", function(t) { a(t.target).is(o.$element) && (o.ignoreBackdropClick = !0) }) }), this.backdrop(function() {
            var t = a.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), t && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var e = a.Event("shown.bs.modal", { relatedTarget: i });
            t ? o.$dialog.one("bsTransitionEnd", function() { o.$element.trigger("focus").trigger(e) }).emulateTransitionEnd(s.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(e)
        }))
    }, s.prototype.hide = function(t) { t && t.preventDefault(), t = a.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : this.hideModal()) }, s.prototype.enforceFocus = function() { a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(t) { document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus") }, this)) }, s.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(t) { 27 == t.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, s.prototype.resize = function() { this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal") }, s.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() { t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal") })
    }, s.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, s.prototype.backdrop = function(t) {
        var e = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = a.support.transition && i;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(t) { this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()) }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var n = function() { e.removeBackdrop(), t && t() };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : n()
        } else t && t()
    }, s.prototype.handleUpdate = function() { this.adjustDialog() }, s.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" })
    }, s.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, s.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, s.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var n = this.scrollbarWidth;
        this.bodyIsOverflowing && (this.$body.css("padding-right", t + n), a(this.fixedContent).each(function(t, e) {
            var i = e.style.paddingRight,
                o = a(e).css("padding-right");
            a(e).data("padding-right", i).css("padding-right", parseFloat(o) + n + "px")
        }))
    }, s.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad), a(this.fixedContent).each(function(t, e) {
            var i = a(e).data("padding-right");
            a(e).removeData("padding-right"), e.style.paddingRight = i || ""
        })
    }, s.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var t = a.fn.modal;
    a.fn.modal = r, a.fn.modal.Constructor = s, a.fn.modal.noConflict = function() { return a.fn.modal = t, this }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var e = a(this),
            i = e.attr("href"),
            o = e.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, ""),
            n = a(document).find(o),
            s = n.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(i) && i }, n.data(), e.data());
        e.is("a") && t.preventDefault(), n.one("show.bs.modal", function(t) { t.isDefaultPrevented() || n.one("hidden.bs.modal", function() { e.is(":visible") && e.trigger("focus") }) }), r.call(n, s, this)
    })
}(jQuery),
function(g) {
    "use strict";
    var o = ["sanitize", "whiteList", "sanitizeFn"],
        a = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        t = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
        r = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        l = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function u(t, e) {
        var i = t.nodeName.toLowerCase();
        if (-1 !== g.inArray(i, e)) return -1 === g.inArray(i, a) || Boolean(t.nodeValue.match(r) || t.nodeValue.match(l));
        for (var o = g(e).filter(function(t, e) { return e instanceof RegExp }), n = 0, s = o.length; n < s; n++)
            if (i.match(o[n])) return !0;
        return !1
    }

    function n(t, e, i) {
        if (0 === t.length) return t;
        if (i && "function" == typeof i) return i(t);
        if (!document.implementation || !document.implementation.createHTMLDocument) return t;
        var o = document.implementation.createHTMLDocument("sanitization");
        o.body.innerHTML = t;
        for (var n = g.map(e, function(t, e) { return e }), s = g(o.body).find("*"), a = 0, r = s.length; a < r; a++) {
            var l = s[a],
                h = l.nodeName.toLowerCase();
            if (-1 !== g.inArray(h, n))
                for (var d = g.map(l.attributes, function(t) { return t }), p = [].concat(e["*"] || [], e[h] || []), c = 0, f = d.length; c < f; c++) u(d[c], p) || l.removeAttribute(d[c].nodeName);
            else l.parentNode.removeChild(l)
        }
        return o.body.innerHTML
    }
    var m = function(t, e) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e) };
    m.VERSION = "3.4.1", m.TRANSITION_DURATION = 150, m.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 }, sanitize: !0, sanitizeFn: null, whiteList: t }, m.prototype.init = function(t, e, i) {
        if (this.enabled = !0, this.type = t, this.$element = g(e), this.options = this.getOptions(i), this.$viewport = this.options.viewport && g(document).find(g.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), n = o.length; n--;) {
            var s = o[n];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, g.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    r = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, g.proxy(this.enter, this)), this.$element.on(r + "." + this.type, this.options.selector, g.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = g.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle()
    }, m.prototype.getDefaults = function() { return m.DEFAULTS }, m.prototype.getOptions = function(t) { var e = this.$element.data(); for (var i in e) e.hasOwnProperty(i) && -1 !== g.inArray(i, o) && delete e[i]; return (t = g.extend({}, this.getDefaults(), e, t)).delay && "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), t.sanitize && (t.template = n(t.template, t.whiteList, t.sanitizeFn)), t }, m.prototype.getDelegateOptions = function() {
        var i = {},
            o = this.getDefaults();
        return this._options && g.each(this._options, function(t, e) { o[t] != e && (i[t] = e) }), i
    }, m.prototype.enter = function(t) {
        var e = t instanceof this.constructor ? t : g(t.currentTarget).data("bs." + this.type);
        if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e)), t instanceof g.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0), e.tip().hasClass("in") || "in" == e.hoverState) e.hoverState = "in";
        else {
            if (clearTimeout(e.timeout), e.hoverState = "in", !e.options.delay || !e.options.delay.show) return e.show();
            e.timeout = setTimeout(function() { "in" == e.hoverState && e.show() }, e.options.delay.show)
        }
    }, m.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, m.prototype.leave = function(t) {
        var e = t instanceof this.constructor ? t : g(t.currentTarget).data("bs." + this.type);
        if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e)), t instanceof g.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1), !e.isInStateTrue()) {
            if (clearTimeout(e.timeout), e.hoverState = "out", !e.options.delay || !e.options.delay.hide) return e.hide();
            e.timeout = setTimeout(function() { "out" == e.hoverState && e.hide() }, e.options.delay.hide)
        }
    }, m.prototype.show = function() {
        var t = g.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var e = g.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !e) return;
            var i = this,
                o = this.tip(),
                n = this.getUID(this.type);
            this.setContent(), o.attr("id", n), this.$element.attr("aria-describedby", n), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                r = a.test(s);
            r && (s = s.replace(a, "") || "top"), o.detach().css({ top: 0, left: 0, display: "block" }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(g(document).find(this.options.container)) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var l = this.getPosition(),
                h = o[0].offsetWidth,
                d = o[0].offsetHeight;
            if (r) {
                var p = s,
                    c = this.getPosition(this.$viewport);
                s = "bottom" == s && l.bottom + d > c.bottom ? "top" : "top" == s && l.top - d < c.top ? "bottom" : "right" == s && l.right + h > c.width ? "left" : "left" == s && l.left - h < c.left ? "right" : s, o.removeClass(p).addClass(s)
            }
            var f = this.getCalculatedOffset(s, l, h, d);
            this.applyPlacement(f, s);
            var u = function() {
                var t = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
            };
            g.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", u).emulateTransitionEnd(m.TRANSITION_DURATION) : u()
        }
    }, m.prototype.applyPlacement = function(t, e) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            n = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top += s, t.left += a, g.offset.setOffset(i[0], g.extend({ using: function(t) { i.css({ top: Math.round(t.top), left: Math.round(t.left) }) } }, t), 0), i.addClass("in");
        var r = i[0].offsetWidth,
            l = i[0].offsetHeight;
        "top" == e && l != n && (t.top = t.top + n - l);
        var h = this.getViewportAdjustedDelta(e, t, r, l);
        h.left ? t.left += h.left : t.top += h.top;
        var d = /top|bottom/.test(e),
            p = d ? 2 * h.left - o + r : 2 * h.top - n + l,
            c = d ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(p, i[0][c], d)
    }, m.prototype.replaceArrow = function(t, e, i) { this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "") }, m.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        this.options.html ? (this.options.sanitize && (e = n(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right")
    }, m.prototype.hide = function(t) {
        var e = this,
            i = g(this.$tip),
            o = g.Event("hide.bs." + this.type);

        function n() { "in" != e.hoverState && i.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), t && t() }
        if (this.$element.trigger(o), !o.isDefaultPrevented()) return i.removeClass("in"), g.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", n).emulateTransitionEnd(m.TRANSITION_DURATION) : n(), this.hoverState = null, this
    }, m.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, m.prototype.hasContent = function() { return this.getTitle() }, m.prototype.getPosition = function(t) {
        var e = (t = t || this.$element)[0],
            i = "BODY" == e.tagName,
            o = e.getBoundingClientRect();
        null == o.width && (o = g.extend({}, o, { width: o.right - o.left, height: o.bottom - o.top }));
        var n = window.SVGElement && e instanceof window.SVGElement,
            s = i ? { top: 0, left: 0 } : n ? null : t.offset(),
            a = { scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop() },
            r = i ? { width: g(window).width(), height: g(window).height() } : null;
        return g.extend({}, o, a, r, s)
    }, m.prototype.getCalculatedOffset = function(t, e, i, o) { return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 } : "top" == t ? { top: e.top - o, left: e.left + e.width / 2 - i / 2 } : "left" == t ? { top: e.top + e.height / 2 - o / 2, left: e.left - i } : { top: e.top + e.height / 2 - o / 2, left: e.left + e.width } }, m.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var n = { top: 0, left: 0 };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - s - a.scroll,
                l = e.top + s - a.scroll + o;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
            var h = e.left - s,
                d = e.left + s + i;
            h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d)
        }
        return n
    }, m.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, m.prototype.getUID = function(t) { for (; t += ~~(1e6 * Math.random()), document.getElementById(t);); return t }, m.prototype.tip = function() { if (!this.$tip && (this.$tip = g(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, m.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, m.prototype.enable = function() { this.enabled = !0 }, m.prototype.disable = function() { this.enabled = !1 }, m.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, m.prototype.toggle = function(t) {
        var e = this;
        t && ((e = g(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e))), t ? (e.inState.click = !e.inState.click, e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
    }, m.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() { t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null })
    }, m.prototype.sanitizeHtml = function(t) { return n(t, this.options.whiteList, this.options.sanitizeFn) };
    var e = g.fn.tooltip;
    g.fn.tooltip = function i(o) {
        return this.each(function() {
            var t = g(this),
                e = t.data("bs.tooltip"),
                i = "object" == typeof o && o;
            !e && /destroy|hide/.test(o) || (e || t.data("bs.tooltip", e = new m(this, i)), "string" == typeof o && e[o]())
        })
    }, g.fn.tooltip.Constructor = m, g.fn.tooltip.noConflict = function() { return g.fn.tooltip = e, this }
}(jQuery),
function(n) {
    "use strict";
    var s = function(t, e) { this.init("popover", t, e) };
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    s.VERSION = "3.4.1", s.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), ((s.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype)).constructor = s).prototype.getDefaults = function() { return s.DEFAULTS }, s.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        if (this.options.html) {
            var o = typeof i;
            this.options.sanitize && (e = this.sanitizeHtml(e), "string" === o && (i = this.sanitizeHtml(i))), t.find(".popover-title").html(e), t.find(".popover-content").children().detach().end()["string" === o ? "html" : "append"](i)
        } else t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(i);
        t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, s.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, s.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, s.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") };
    var t = n.fn.popover;
    n.fn.popover = function e(o) {
        return this.each(function() {
            var t = n(this),
                e = t.data("bs.popover"),
                i = "object" == typeof o && o;
            !e && /destroy|hide/.test(o) || (e || t.data("bs.popover", e = new s(this, i)), "string" == typeof o && e[o]())
        })
    }, n.fn.popover.Constructor = s, n.fn.popover.noConflict = function() { return n.fn.popover = t, this }
}(jQuery),
function(s) {
    "use strict";

    function n(t, e) { this.$body = s(document.body), this.$scrollElement = s(t).is(document.body) ? s(window) : s(t), this.options = s.extend({}, n.DEFAULTS, e), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", s.proxy(this.process, this)), this.refresh(), this.process() }

    function e(o) {
        return this.each(function() {
            var t = s(this),
                e = t.data("bs.scrollspy"),
                i = "object" == typeof o && o;
            e || t.data("bs.scrollspy", e = new n(this, i)), "string" == typeof o && e[o]()
        })
    }
    n.VERSION = "3.4.1", n.DEFAULTS = { offset: 10 }, n.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, n.prototype.refresh = function() {
        var t = this,
            o = "offset",
            n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), s.isWindow(this.$scrollElement[0]) || (o = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var t = s(this),
                e = t.data("target") || t.attr("href"),
                i = /^#./.test(e) && s(e);
            return i && i.length && i.is(":visible") && [
                [i[o]().top + n, e]
            ] || null
        }).sort(function(t, e) { return t[0] - e[0] }).each(function() { t.offsets.push(this[0]), t.targets.push(this[1]) })
    }, n.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            o = this.options.offset + i - this.$scrollElement.height(),
            n = this.offsets,
            s = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), o <= e) return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0]) return this.activeTarget = null, this.clear();
        for (t = n.length; t--;) a != s[t] && e >= n[t] && (n[t + 1] === undefined || e < n[t + 1]) && this.activate(s[t])
    }, n.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = s(e).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, n.prototype.clear = function() { s(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") };
    var t = s.fn.scrollspy;
    s.fn.scrollspy = e, s.fn.scrollspy.Constructor = n, s.fn.scrollspy.noConflict = function() { return s.fn.scrollspy = t, this }, s(window).on("load.bs.scrollspy.data-api", function() {
        s('[data-spy="scroll"]').each(function() {
            var t = s(this);
            e.call(t, t.data())
        })
    })
}(jQuery),
function(r) {
    "use strict";
    var a = function(t) { this.element = r(t) };

    function e(i) {
        return this.each(function() {
            var t = r(this),
                e = t.data("bs.tab");
            e || t.data("bs.tab", e = new a(this)), "string" == typeof i && e[i]()
        })
    }
    a.VERSION = "3.4.1", a.TRANSITION_DURATION = 150, a.prototype.show = function() {
        var t = this.element,
            e = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var o = e.find(".active:last a"),
                n = r.Event("hide.bs.tab", { relatedTarget: t[0] }),
                s = r.Event("show.bs.tab", { relatedTarget: o[0] });
            if (o.trigger(n), t.trigger(s), !s.isDefaultPrevented() && !n.isDefaultPrevented()) {
                var a = r(document).find(i);
                this.activate(t.closest("li"), e), this.activate(a, a.parent(), function() { o.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] }), t.trigger({ type: "shown.bs.tab", relatedTarget: o[0] }) })
            }
        }
    }, a.prototype.activate = function(t, e, i) {
        var o = e.find("> .active"),
            n = i && r.support.transition && (o.length && o.hasClass("fade") || !!e.find("> .fade").length);

        function s() { o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), n ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i() }
        o.length && n ? o.one("bsTransitionEnd", s).emulateTransitionEnd(a.TRANSITION_DURATION) : s(), o.removeClass("in")
    };
    var t = r.fn.tab;
    r.fn.tab = e, r.fn.tab.Constructor = a, r.fn.tab.noConflict = function() { return r.fn.tab = t, this };
    var i = function(t) { t.preventDefault(), e.call(r(this), "show") };
    r(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery),
function(l) {
    "use strict";
    var h = function(t, e) {
        this.options = l.extend({}, h.DEFAULTS, e);
        var i = this.options.target === h.DEFAULTS.target ? l(this.options.target) : l(document).find(this.options.target);
        this.$target = i.on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)), this.$element = l(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };

    function i(o) {
        return this.each(function() {
            var t = l(this),
                e = t.data("bs.affix"),
                i = "object" == typeof o && o;
            e || t.data("bs.affix", e = new h(this, i)), "string" == typeof o && e[o]()
        })
    }
    h.VERSION = "3.4.1", h.RESET = "affix affix-top affix-bottom", h.DEFAULTS = { offset: 0, target: window }, h.prototype.getState = function(t, e, i, o) {
        var n = this.$target.scrollTop(),
            s = this.$element.offset(),
            a = this.$target.height();
        if (null != i && "top" == this.affixed) return n < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(n + this.unpin <= s.top) && "bottom" : !(n + a <= t - o) && "bottom";
        var r = null == this.affixed,
            l = r ? n : s.top;
        return null != i && n <= i ? "top" : null != o && t - o <= l + (r ? a : e) && "bottom"
    }, h.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(h.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, h.prototype.checkPositionWithEventLoop = function() { setTimeout(l.proxy(this.checkPosition, this), 1) }, h.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                e = this.options.offset,
                i = e.top,
                o = e.bottom,
                n = Math.max(l(document).height(), l(document.body).height());
            "object" != typeof e && (o = i = e), "function" == typeof i && (i = e.top(this.$element)), "function" == typeof o && (o = e.bottom(this.$element));
            var s = this.getState(n, t, i, o);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var a = "affix" + (s ? "-" + s : ""),
                    r = l.Event(a + ".bs.affix");
                if (this.$element.trigger(r), r.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({ top: n - t - o })
        }
    };
    var t = l.fn.affix;
    l.fn.affix = i, l.fn.affix.Constructor = h, l.fn.affix.noConflict = function() { return l.fn.affix = t, this }, l(window).on("load", function() {
        l('[data-spy="affix"]').each(function() {
            var t = l(this),
                e = t.data();
            e.offset = e.offset || {}, null != e.offsetBottom && (e.offset.bottom = e.offsetBottom), null != e.offsetTop && (e.offset.top = e.offsetTop), i.call(t, e)
        })
    })
}(jQuery);

// moment-with-locales.min.js
! function(e, a) { "object" == typeof exports && "undefined" != typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : e.moment = a() }(this, function() {
    "use strict";
    var e, n;

    function l() { return e.apply(null, arguments) }

    function _(e) { return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e) }

    function i(e) { return null != e && "[object Object]" === Object.prototype.toString.call(e) }

    function o(e) { return void 0 === e }

    function m(e) { return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e) }

    function u(e) { return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e) }

    function M(e, a) { var t, s = []; for (t = 0; t < e.length; ++t) s.push(a(e[t], t)); return s }

    function h(e, a) { return Object.prototype.hasOwnProperty.call(e, a) }

    function L(e, a) { for (var t in a) h(a, t) && (e[t] = a[t]); return h(a, "toString") && (e.toString = a.toString), h(a, "valueOf") && (e.valueOf = a.valueOf), e }

    function c(e, a, t, s) { return Sa(e, a, t, s, !0).utc() }

    function Y(e) { return null == e._pf && (e._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), e._pf }

    function y(e) {
        if (null == e._isValid) {
            var a = Y(e),
                t = n.call(a.parsedDateParts, function(e) { return null != e }),
                s = !isNaN(e._d.getTime()) && a.overflow < 0 && !a.empty && !a.invalidMonth && !a.invalidWeekday && !a.weekdayMismatch && !a.nullInput && !a.invalidFormat && !a.userInvalidated && (!a.meridiem || a.meridiem && t);
            if (e._strict && (s = s && 0 === a.charsLeftOver && 0 === a.unusedTokens.length && void 0 === a.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s;
            e._isValid = s
        }
        return e._isValid
    }

    function f(e) { var a = c(NaN); return null != e ? L(Y(a), e) : Y(a).userInvalidated = !0, a }
    n = Array.prototype.some ? Array.prototype.some : function(e) {
        for (var a = Object(this), t = a.length >>> 0, s = 0; s < t; s++)
            if (s in a && e.call(this, a[s], s, a)) return !0;
        return !1
    };
    var d = l.momentProperties = [];

    function k(e, a) {
        var t, s, n;
        if (o(a._isAMomentObject) || (e._isAMomentObject = a._isAMomentObject), o(a._i) || (e._i = a._i), o(a._f) || (e._f = a._f), o(a._l) || (e._l = a._l), o(a._strict) || (e._strict = a._strict), o(a._tzm) || (e._tzm = a._tzm), o(a._isUTC) || (e._isUTC = a._isUTC), o(a._offset) || (e._offset = a._offset), o(a._pf) || (e._pf = Y(a)), o(a._locale) || (e._locale = a._locale), 0 < d.length)
            for (t = 0; t < d.length; t++) o(n = a[s = d[t]]) || (e[s] = n);
        return e
    }
    var a = !1;

    function p(e) { k(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === a && (a = !0, l.updateOffset(this), a = !1) }

    function D(e) { return e instanceof p || null != e && null != e._isAMomentObject }

    function T(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) }

    function g(e) {
        var a = +e,
            t = 0;
        return 0 !== a && isFinite(a) && (t = T(a)), t
    }

    function r(e, a, t) {
        var s, n = Math.min(e.length, a.length),
            d = Math.abs(e.length - a.length),
            r = 0;
        for (s = 0; s < n; s++)(t && e[s] !== a[s] || !t && g(e[s]) !== g(a[s])) && r++;
        return r + d
    }

    function w(e) {!1 === l.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e) }

    function t(n, d) {
        var r = !0;
        return L(function() {
            if (null != l.deprecationHandler && l.deprecationHandler(null, n), r) {
                for (var e, a = [], t = 0; t < arguments.length; t++) {
                    if (e = "", "object" == typeof arguments[t]) {
                        for (var s in e += "\n[" + t + "] ", arguments[0]) e += s + ": " + arguments[0][s] + ", ";
                        e = e.slice(0, -2)
                    } else e = arguments[t];
                    a.push(e)
                }
                w(n + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + (new Error).stack), r = !1
            }
            return d.apply(this, arguments)
        }, d)
    }
    var s, v = {};

    function S(e, a) { null != l.deprecationHandler && l.deprecationHandler(e, a), v[e] || (w(a), v[e] = !0) }

    function H(e) { return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e) }

    function b(e, a) { var t, s = L({}, e); for (t in a) h(a, t) && (i(e[t]) && i(a[t]) ? (s[t] = {}, L(s[t], e[t]), L(s[t], a[t])) : null != a[t] ? s[t] = a[t] : delete s[t]); for (t in e) h(e, t) && !h(a, t) && i(e[t]) && (s[t] = L({}, s[t])); return s }

    function j(e) { null != e && this.set(e) }
    l.suppressDeprecationWarnings = !1, l.deprecationHandler = null, s = Object.keys ? Object.keys : function(e) { var a, t = []; for (a in e) h(e, a) && t.push(a); return t };
    var x = {};

    function O(e, a) {
        var t = e.toLowerCase();
        x[t] = x[t + "s"] = x[a] = e
    }

    function P(e) { return "string" == typeof e ? x[e] || x[e.toLowerCase()] : void 0 }

    function W(e) { var a, t, s = {}; for (t in e) h(e, t) && (a = P(t)) && (s[a] = e[t]); return s }
    var A = {};

    function E(e, a) { A[e] = a }

    function F(e, a, t) {
        var s = "" + Math.abs(e),
            n = a - s.length;
        return (0 <= e ? t ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + s
    }
    var z = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        J = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        N = {},
        R = {};

    function C(e, a, t, s) { var n = s; "string" == typeof s && (n = function() { return this[s]() }), e && (R[e] = n), a && (R[a[0]] = function() { return F(n.apply(this, arguments), a[1], a[2]) }), t && (R[t] = function() { return this.localeData().ordinal(n.apply(this, arguments), e) }) }

    function I(e, a) { return e.isValid() ? (a = U(a, e.localeData()), N[a] = N[a] || function(s) { var e, n, a, d = s.match(z); for (e = 0, n = d.length; e < n; e++) R[d[e]] ? d[e] = R[d[e]] : d[e] = (a = d[e]).match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, ""); return function(e) { var a, t = ""; for (a = 0; a < n; a++) t += H(d[a]) ? d[a].call(e, s) : d[a]; return t } }(a), N[a](e)) : e.localeData().invalidDate() }

    function U(e, a) {
        var t = 5;

        function s(e) { return a.longDateFormat(e) || e }
        for (J.lastIndex = 0; 0 <= t && J.test(e);) e = e.replace(J, s), J.lastIndex = 0, t -= 1;
        return e
    }
    var G = /\d/,
        V = /\d\d/,
        K = /\d{3}/,
        Z = /\d{4}/,
        $ = /[+-]?\d{6}/,
        B = /\d\d?/,
        q = /\d\d\d\d?/,
        Q = /\d\d\d\d\d\d?/,
        X = /\d{1,3}/,
        ee = /\d{1,4}/,
        ae = /[+-]?\d{1,6}/,
        te = /\d+/,
        se = /[+-]?\d+/,
        ne = /Z|[+-]\d\d:?\d\d/gi,
        de = /Z|[+-]\d\d(?::?\d\d)?/gi,
        re = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        _e = {};

    function ie(e, t, s) { _e[e] = H(t) ? t : function(e, a) { return e && s ? s : t } }

    function oe(e, a) { return h(_e, e) ? _e[e](a._strict, a._locale) : new RegExp(me(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, a, t, s, n) { return a || t || s || n }))) }

    function me(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") }
    var ue = {};

    function le(e, t) { var a, s = t; for ("string" == typeof e && (e = [e]), m(t) && (s = function(e, a) { a[t] = g(e) }), a = 0; a < e.length; a++) ue[e[a]] = s }

    function Me(e, n) { le(e, function(e, a, t, s) { t._w = t._w || {}, n(e, t._w, t, s) }) }
    var he = 0,
        Le = 1,
        ce = 2,
        Ye = 3,
        ye = 4,
        fe = 5,
        ke = 6,
        pe = 7,
        De = 8;

    function Te(e) { return ge(e) ? 366 : 365 }

    function ge(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 }
    C("Y", 0, 0, function() { var e = this.year(); return e <= 9999 ? "" + e : "+" + e }), C(0, ["YY", 2], 0, function() { return this.year() % 100 }), C(0, ["YYYY", 4], 0, "year"), C(0, ["YYYYY", 5], 0, "year"), C(0, ["YYYYYY", 6, !0], 0, "year"), O("year", "y"), E("year", 1), ie("Y", se), ie("YY", B, V), ie("YYYY", ee, Z), ie("YYYYY", ae, $), ie("YYYYYY", ae, $), le(["YYYYY", "YYYYYY"], he), le("YYYY", function(e, a) { a[he] = 2 === e.length ? l.parseTwoDigitYear(e) : g(e) }), le("YY", function(e, a) { a[he] = l.parseTwoDigitYear(e) }), le("Y", function(e, a) { a[he] = parseInt(e, 10) }), l.parseTwoDigitYear = function(e) { return g(e) + (68 < g(e) ? 1900 : 2e3) };
    var we, ve = Se("FullYear", !0);

    function Se(a, t) { return function(e) { return null != e ? (be(this, a, e), l.updateOffset(this, t), this) : He(this, a) } }

    function He(e, a) { return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + a]() : NaN }

    function be(e, a, t) { e.isValid() && !isNaN(t) && ("FullYear" === a && ge(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + a](t, e.month(), je(t, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + a](t)) }

    function je(e, a) { if (isNaN(e) || isNaN(a)) return NaN; var t, s = (a % (t = 12) + t) % t; return e += (a - s) / 12, 1 === s ? ge(e) ? 29 : 28 : 31 - s % 7 % 2 }
    we = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var a;
        for (a = 0; a < this.length; ++a)
            if (this[a] === e) return a;
        return -1
    }, C("M", ["MM", 2], "Mo", function() { return this.month() + 1 }), C("MMM", 0, 0, function(e) { return this.localeData().monthsShort(this, e) }), C("MMMM", 0, 0, function(e) { return this.localeData().months(this, e) }), O("month", "M"), E("month", 8), ie("M", B), ie("MM", B, V), ie("MMM", function(e, a) { return a.monthsShortRegex(e) }), ie("MMMM", function(e, a) { return a.monthsRegex(e) }), le(["M", "MM"], function(e, a) { a[Le] = g(e) - 1 }), le(["MMM", "MMMM"], function(e, a, t, s) {
        var n = t._locale.monthsParse(e, s, t._strict);
        null != n ? a[Le] = n : Y(t).invalidMonth = e
    });
    var xe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Oe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
    var Pe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

    function We(e, a) {
        var t;
        if (!e.isValid()) return e;
        if ("string" == typeof a)
            if (/^\d+$/.test(a)) a = g(a);
            else if (!m(a = e.localeData().monthsParse(a))) return e;
        return t = Math.min(e.date(), je(e.year(), a)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](a, t), e
    }

    function Ae(e) { return null != e ? (We(this, e), l.updateOffset(this, !0), this) : He(this, "Month") }
    var Ee = re;
    var Fe = re;

    function ze() {
        function e(e, a) { return a.length - e.length }
        var a, t, s = [],
            n = [],
            d = [];
        for (a = 0; a < 12; a++) t = c([2e3, a]), s.push(this.monthsShort(t, "")), n.push(this.months(t, "")), d.push(this.months(t, "")), d.push(this.monthsShort(t, ""));
        for (s.sort(e), n.sort(e), d.sort(e), a = 0; a < 12; a++) s[a] = me(s[a]), n[a] = me(n[a]);
        for (a = 0; a < 24; a++) d[a] = me(d[a]);
        this._monthsRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
    }

    function Je(e) {
        var a;
        if (e < 100 && 0 <= e) {
            var t = Array.prototype.slice.call(arguments);
            t[0] = e + 400, a = new Date(Date.UTC.apply(null, t)), isFinite(a.getUTCFullYear()) && a.setUTCFullYear(e)
        } else a = new Date(Date.UTC.apply(null, arguments));
        return a
    }

    function Ne(e, a, t) { var s = 7 + a - t; return -((7 + Je(e, 0, s).getUTCDay() - a) % 7) + s - 1 }

    function Re(e, a, t, s, n) { var d, r, _ = 1 + 7 * (a - 1) + (7 + t - s) % 7 + Ne(e, s, n); return r = _ <= 0 ? Te(d = e - 1) + _ : _ > Te(e) ? (d = e + 1, _ - Te(e)) : (d = e, _), { year: d, dayOfYear: r } }

    function Ce(e, a, t) {
        var s, n, d = Ne(e.year(), a, t),
            r = Math.floor((e.dayOfYear() - d - 1) / 7) + 1;
        return r < 1 ? s = r + Ie(n = e.year() - 1, a, t) : r > Ie(e.year(), a, t) ? (s = r - Ie(e.year(), a, t), n = e.year() + 1) : (n = e.year(), s = r), { week: s, year: n }
    }

    function Ie(e, a, t) {
        var s = Ne(e, a, t),
            n = Ne(e + 1, a, t);
        return (Te(e) - s + n) / 7
    }
    C("w", ["ww", 2], "wo", "week"), C("W", ["WW", 2], "Wo", "isoWeek"), O("week", "w"), O("isoWeek", "W"), E("week", 5), E("isoWeek", 5), ie("w", B), ie("ww", B, V), ie("W", B), ie("WW", B, V), Me(["w", "ww", "W", "WW"], function(e, a, t, s) { a[s.substr(0, 1)] = g(e) });

    function Ue(e, a) { return e.slice(a, 7).concat(e.slice(0, a)) }
    C("d", 0, "do", "day"), C("dd", 0, 0, function(e) { return this.localeData().weekdaysMin(this, e) }), C("ddd", 0, 0, function(e) { return this.localeData().weekdaysShort(this, e) }), C("dddd", 0, 0, function(e) { return this.localeData().weekdays(this, e) }), C("e", 0, 0, "weekday"), C("E", 0, 0, "isoWeekday"), O("day", "d"), O("weekday", "e"), O("isoWeekday", "E"), E("day", 11), E("weekday", 11), E("isoWeekday", 11), ie("d", B), ie("e", B), ie("E", B), ie("dd", function(e, a) { return a.weekdaysMinRegex(e) }), ie("ddd", function(e, a) { return a.weekdaysShortRegex(e) }), ie("dddd", function(e, a) { return a.weekdaysRegex(e) }), Me(["dd", "ddd", "dddd"], function(e, a, t, s) {
        var n = t._locale.weekdaysParse(e, s, t._strict);
        null != n ? a.d = n : Y(t).invalidWeekday = e
    }), Me(["d", "e", "E"], function(e, a, t, s) { a[s] = g(e) });
    var Ge = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
    var Ve = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
    var Ke = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    var Ze = re;
    var $e = re;
    var Be = re;

    function qe() {
        function e(e, a) { return a.length - e.length }
        var a, t, s, n, d, r = [],
            _ = [],
            i = [],
            o = [];
        for (a = 0; a < 7; a++) t = c([2e3, 1]).day(a), s = this.weekdaysMin(t, ""), n = this.weekdaysShort(t, ""), d = this.weekdays(t, ""), r.push(s), _.push(n), i.push(d), o.push(s), o.push(n), o.push(d);
        for (r.sort(e), _.sort(e), i.sort(e), o.sort(e), a = 0; a < 7; a++) _[a] = me(_[a]), i[a] = me(i[a]), o[a] = me(o[a]);
        this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
    }

    function Qe() { return this.hours() % 12 || 12 }

    function Xe(e, a) { C(e, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), a) }) }

    function ea(e, a) { return a._meridiemParse }
    C("H", ["HH", 2], 0, "hour"), C("h", ["hh", 2], 0, Qe), C("k", ["kk", 2], 0, function() { return this.hours() || 24 }), C("hmm", 0, 0, function() { return "" + Qe.apply(this) + F(this.minutes(), 2) }), C("hmmss", 0, 0, function() { return "" + Qe.apply(this) + F(this.minutes(), 2) + F(this.seconds(), 2) }), C("Hmm", 0, 0, function() { return "" + this.hours() + F(this.minutes(), 2) }), C("Hmmss", 0, 0, function() { return "" + this.hours() + F(this.minutes(), 2) + F(this.seconds(), 2) }), Xe("a", !0), Xe("A", !1), O("hour", "h"), E("hour", 13), ie("a", ea), ie("A", ea), ie("H", B), ie("h", B), ie("k", B), ie("HH", B, V), ie("hh", B, V), ie("kk", B, V), ie("hmm", q), ie("hmmss", Q), ie("Hmm", q), ie("Hmmss", Q), le(["H", "HH"], Ye), le(["k", "kk"], function(e, a, t) {
        var s = g(e);
        a[Ye] = 24 === s ? 0 : s
    }), le(["a", "A"], function(e, a, t) { t._isPm = t._locale.isPM(e), t._meridiem = e }), le(["h", "hh"], function(e, a, t) { a[Ye] = g(e), Y(t).bigHour = !0 }), le("hmm", function(e, a, t) {
        var s = e.length - 2;
        a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s)), Y(t).bigHour = !0
    }), le("hmmss", function(e, a, t) {
        var s = e.length - 4,
            n = e.length - 2;
        a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s, 2)), a[fe] = g(e.substr(n)), Y(t).bigHour = !0
    }), le("Hmm", function(e, a, t) {
        var s = e.length - 2;
        a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s))
    }), le("Hmmss", function(e, a, t) {
        var s = e.length - 4,
            n = e.length - 2;
        a[Ye] = g(e.substr(0, s)), a[ye] = g(e.substr(s, 2)), a[fe] = g(e.substr(n))
    });
    var aa, ta = Se("Hours", !0),
        sa = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: Oe, monthsShort: Pe, week: { dow: 0, doy: 6 }, weekdays: Ge, weekdaysMin: Ke, weekdaysShort: Ve, meridiemParse: /[ap]\.?m?\.?/i },
        na = {},
        da = {};

    function ra(e) { return e ? e.toLowerCase().replace("_", "-") : e }

    function _a(e) {
        var a = null;
        if (!na[e] && "undefined" != typeof module && module && module.exports) try { a = aa._abbr, require("./locale/" + e), ia(a) } catch (e) {}
        return na[e]
    }

    function ia(e, a) { var t; return e && ((t = o(a) ? ma(e) : oa(e, a)) ? aa = t : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), aa._abbr }

    function oa(e, a) {
        if (null === a) return delete na[e], null;
        var t, s = sa;
        if (a.abbr = e, null != na[e]) S("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = na[e]._config;
        else if (null != a.parentLocale)
            if (null != na[a.parentLocale]) s = na[a.parentLocale]._config;
            else {
                if (null == (t = _a(a.parentLocale))) return da[a.parentLocale] || (da[a.parentLocale] = []), da[a.parentLocale].push({ name: e, config: a }), null;
                s = t._config
            }
        return na[e] = new j(b(s, a)), da[e] && da[e].forEach(function(e) { oa(e.name, e.config) }), ia(e), na[e]
    }

    function ma(e) {
        var a;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return aa;
        if (!_(e)) {
            if (a = _a(e)) return a;
            e = [e]
        }
        return function(e) {
            for (var a, t, s, n, d = 0; d < e.length;) {
                for (a = (n = ra(e[d]).split("-")).length, t = (t = ra(e[d + 1])) ? t.split("-") : null; 0 < a;) {
                    if (s = _a(n.slice(0, a).join("-"))) return s;
                    if (t && t.length >= a && r(n, t, !0) >= a - 1) break;
                    a--
                }
                d++
            }
            return aa
        }(e)
    }

    function ua(e) { var a, t = e._a; return t && -2 === Y(e).overflow && (a = t[Le] < 0 || 11 < t[Le] ? Le : t[ce] < 1 || t[ce] > je(t[he], t[Le]) ? ce : t[Ye] < 0 || 24 < t[Ye] || 24 === t[Ye] && (0 !== t[ye] || 0 !== t[fe] || 0 !== t[ke]) ? Ye : t[ye] < 0 || 59 < t[ye] ? ye : t[fe] < 0 || 59 < t[fe] ? fe : t[ke] < 0 || 999 < t[ke] ? ke : -1, Y(e)._overflowDayOfYear && (a < he || ce < a) && (a = ce), Y(e)._overflowWeeks && -1 === a && (a = pe), Y(e)._overflowWeekday && -1 === a && (a = De), Y(e).overflow = a), e }

    function la(e, a, t) { return null != e ? e : null != a ? a : t }

    function Ma(e) {
        var a, t, s, n, d, r = [];
        if (!e._d) {
            var _, i;
            for (_ = e, i = new Date(l.now()), s = _._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()], e._w && null == e._a[ce] && null == e._a[Le] && function(e) {
                    var a, t, s, n, d, r, _, i;
                    if (null != (a = e._w).GG || null != a.W || null != a.E) d = 1, r = 4, t = la(a.GG, e._a[he], Ce(Ha(), 1, 4).year), s = la(a.W, 1), ((n = la(a.E, 1)) < 1 || 7 < n) && (i = !0);
                    else {
                        d = e._locale._week.dow, r = e._locale._week.doy;
                        var o = Ce(Ha(), d, r);
                        t = la(a.gg, e._a[he], o.year), s = la(a.w, o.week), null != a.d ? ((n = a.d) < 0 || 6 < n) && (i = !0) : null != a.e ? (n = a.e + d, (a.e < 0 || 6 < a.e) && (i = !0)) : n = d
                    }
                    s < 1 || s > Ie(t, d, r) ? Y(e)._overflowWeeks = !0 : null != i ? Y(e)._overflowWeekday = !0 : (_ = Re(t, s, n, d, r), e._a[he] = _.year, e._dayOfYear = _.dayOfYear)
                }(e), null != e._dayOfYear && (d = la(e._a[he], s[he]), (e._dayOfYear > Te(d) || 0 === e._dayOfYear) && (Y(e)._overflowDayOfYear = !0), t = Je(d, 0, e._dayOfYear), e._a[Le] = t.getUTCMonth(), e._a[ce] = t.getUTCDate()), a = 0; a < 3 && null == e._a[a]; ++a) e._a[a] = r[a] = s[a];
            for (; a < 7; a++) e._a[a] = r[a] = null == e._a[a] ? 2 === a ? 1 : 0 : e._a[a];
            24 === e._a[Ye] && 0 === e._a[ye] && 0 === e._a[fe] && 0 === e._a[ke] && (e._nextDay = !0, e._a[Ye] = 0), e._d = (e._useUTC ? Je : function(e, a, t, s, n, d, r) { var _; return e < 100 && 0 <= e ? (_ = new Date(e + 400, a, t, s, n, d, r), isFinite(_.getFullYear()) && _.setFullYear(e)) : _ = new Date(e, a, t, s, n, d, r), _ }).apply(null, r), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ye] = 24), e._w && void 0 !== e._w.d && e._w.d !== n && (Y(e).weekdayMismatch = !0)
        }
    }
    var ha = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        La = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        ca = /Z|[+-]\d\d(?::?\d\d)?/,
        Ya = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        ya = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        fa = /^\/?Date\((\-?\d+)/i;

    function ka(e) {
        var a, t, s, n, d, r, _ = e._i,
            i = ha.exec(_) || La.exec(_);
        if (i) {
            for (Y(e).iso = !0, a = 0, t = Ya.length; a < t; a++)
                if (Ya[a][1].exec(i[1])) { n = Ya[a][0], s = !1 !== Ya[a][2]; break }
            if (null == n) return void(e._isValid = !1);
            if (i[3]) {
                for (a = 0, t = ya.length; a < t; a++)
                    if (ya[a][1].exec(i[3])) { d = (i[2] || " ") + ya[a][0]; break }
                if (null == d) return void(e._isValid = !1)
            }
            if (!s && null != d) return void(e._isValid = !1);
            if (i[4]) {
                if (!ca.exec(i[4])) return void(e._isValid = !1);
                r = "Z"
            }
            e._f = n + (d || "") + (r || ""), wa(e)
        } else e._isValid = !1
    }
    var pa = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function Da(e, a, t, s, n, d) { var r = [function(e) { var a = parseInt(e, 10); { if (a <= 49) return 2e3 + a; if (a <= 999) return 1900 + a } return a }(e), Pe.indexOf(a), parseInt(t, 10), parseInt(s, 10), parseInt(n, 10)]; return d && r.push(parseInt(d, 10)), r }
    var Ta = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };

    function ga(e) {
        var a, t, s, n = pa.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        if (n) {
            var d = Da(n[4], n[3], n[2], n[5], n[6], n[7]);
            if (a = n[1], t = d, s = e, a && Ve.indexOf(a) !== new Date(t[0], t[1], t[2]).getDay() && (Y(s).weekdayMismatch = !0, !(s._isValid = !1))) return;
            e._a = d, e._tzm = function(e, a, t) {
                if (e) return Ta[e];
                if (a) return 0;
                var s = parseInt(t, 10),
                    n = s % 100;
                return (s - n) / 100 * 60 + n
            }(n[8], n[9], n[10]), e._d = Je.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), Y(e).rfc2822 = !0
        } else e._isValid = !1
    }

    function wa(e) {
        if (e._f !== l.ISO_8601)
            if (e._f !== l.RFC_2822) {
                e._a = [], Y(e).empty = !0;
                var a, t, s, n, d, r, _, i, o = "" + e._i,
                    m = o.length,
                    u = 0;
                for (s = U(e._f, e._locale).match(z) || [], a = 0; a < s.length; a++) n = s[a], (t = (o.match(oe(n, e)) || [])[0]) && (0 < (d = o.substr(0, o.indexOf(t))).length && Y(e).unusedInput.push(d), o = o.slice(o.indexOf(t) + t.length), u += t.length), R[n] ? (t ? Y(e).empty = !1 : Y(e).unusedTokens.push(n), r = n, i = e, null != (_ = t) && h(ue, r) && ue[r](_, i._a, i, r)) : e._strict && !t && Y(e).unusedTokens.push(n);
                Y(e).charsLeftOver = m - u, 0 < o.length && Y(e).unusedInput.push(o), e._a[Ye] <= 12 && !0 === Y(e).bigHour && 0 < e._a[Ye] && (Y(e).bigHour = void 0), Y(e).parsedDateParts = e._a.slice(0), Y(e).meridiem = e._meridiem, e._a[Ye] = function(e, a, t) { var s; if (null == t) return a; return null != e.meridiemHour ? e.meridiemHour(a, t) : (null != e.isPM && ((s = e.isPM(t)) && a < 12 && (a += 12), s || 12 !== a || (a = 0)), a) }(e._locale, e._a[Ye], e._meridiem), Ma(e), ua(e)
            } else ga(e);
        else ka(e)
    }

    function va(e) {
        var a, t, s, n, d = e._i,
            r = e._f;
        return e._locale = e._locale || ma(e._l), null === d || void 0 === r && "" === d ? f({ nullInput: !0 }) : ("string" == typeof d && (e._i = d = e._locale.preparse(d)), D(d) ? new p(ua(d)) : (u(d) ? e._d = d : _(r) ? function(e) {
            var a, t, s, n, d;
            if (0 === e._f.length) return Y(e).invalidFormat = !0, e._d = new Date(NaN);
            for (n = 0; n < e._f.length; n++) d = 0, a = k({}, e), null != e._useUTC && (a._useUTC = e._useUTC), a._f = e._f[n], wa(a), y(a) && (d += Y(a).charsLeftOver, d += 10 * Y(a).unusedTokens.length, Y(a).score = d, (null == s || d < s) && (s = d, t = a));
            L(e, t || a)
        }(e) : r ? wa(e) : o(t = (a = e)._i) ? a._d = new Date(l.now()) : u(t) ? a._d = new Date(t.valueOf()) : "string" == typeof t ? (s = a, null === (n = fa.exec(s._i)) ? (ka(s), !1 === s._isValid && (delete s._isValid, ga(s), !1 === s._isValid && (delete s._isValid, l.createFromInputFallback(s)))) : s._d = new Date(+n[1])) : _(t) ? (a._a = M(t.slice(0), function(e) { return parseInt(e, 10) }), Ma(a)) : i(t) ? function(e) {
            if (!e._d) {
                var a = W(e._i);
                e._a = M([a.year, a.month, a.day || a.date, a.hour, a.minute, a.second, a.millisecond], function(e) { return e && parseInt(e, 10) }), Ma(e)
            }
        }(a) : m(t) ? a._d = new Date(t) : l.createFromInputFallback(a), y(e) || (e._d = null), e))
    }

    function Sa(e, a, t, s, n) {
        var d, r = {};
        return !0 !== t && !1 !== t || (s = t, t = void 0), (i(e) && function(e) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
            var a;
            for (a in e)
                if (e.hasOwnProperty(a)) return !1;
            return !0
        }(e) || _(e) && 0 === e.length) && (e = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = n, r._l = t, r._i = e, r._f = a, r._strict = s, (d = new p(ua(va(r))))._nextDay && (d.add(1, "d"), d._nextDay = void 0), d
    }

    function Ha(e, a, t, s) { return Sa(e, a, t, s, !1) }
    l.createFromInputFallback = t("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) }), l.ISO_8601 = function() {}, l.RFC_2822 = function() {};
    var ba = t("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = Ha.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : f() }),
        ja = t("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = Ha.apply(null, arguments); return this.isValid() && e.isValid() ? this < e ? this : e : f() });

    function xa(e, a) { var t, s; if (1 === a.length && _(a[0]) && (a = a[0]), !a.length) return Ha(); for (t = a[0], s = 1; s < a.length; ++s) a[s].isValid() && !a[s][e](t) || (t = a[s]); return t }
    var Oa = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function Pa(e) {
        var a = W(e),
            t = a.year || 0,
            s = a.quarter || 0,
            n = a.month || 0,
            d = a.week || a.isoWeek || 0,
            r = a.day || 0,
            _ = a.hour || 0,
            i = a.minute || 0,
            o = a.second || 0,
            m = a.millisecond || 0;
        this._isValid = function(e) {
            for (var a in e)
                if (-1 === we.call(Oa, a) || null != e[a] && isNaN(e[a])) return !1;
            for (var t = !1, s = 0; s < Oa.length; ++s)
                if (e[Oa[s]]) {
                    if (t) return !1;
                    parseFloat(e[Oa[s]]) !== g(e[Oa[s]]) && (t = !0)
                }
            return !0
        }(a), this._milliseconds = +m + 1e3 * o + 6e4 * i + 1e3 * _ * 60 * 60, this._days = +r + 7 * d, this._months = +n + 3 * s + 12 * t, this._data = {}, this._locale = ma(), this._bubble()
    }

    function Wa(e) { return e instanceof Pa }

    function Aa(e) { return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e) }

    function Ea(e, t) {
        C(e, 0, 0, function() {
            var e = this.utcOffset(),
                a = "+";
            return e < 0 && (e = -e, a = "-"), a + F(~~(e / 60), 2) + t + F(~~e % 60, 2)
        })
    }
    Ea("Z", ":"), Ea("ZZ", ""), ie("Z", de), ie("ZZ", de), le(["Z", "ZZ"], function(e, a, t) { t._useUTC = !0, t._tzm = za(de, e) });
    var Fa = /([\+\-]|\d\d)/gi;

    function za(e, a) {
        var t = (a || "").match(e);
        if (null === t) return null;
        var s = ((t[t.length - 1] || []) + "").match(Fa) || ["-", 0, 0],
            n = 60 * s[1] + g(s[2]);
        return 0 === n ? 0 : "+" === s[0] ? n : -n
    }

    function Ja(e, a) { var t, s; return a._isUTC ? (t = a.clone(), s = (D(e) || u(e) ? e.valueOf() : Ha(e).valueOf()) - t.valueOf(), t._d.setTime(t._d.valueOf() + s), l.updateOffset(t, !1), t) : Ha(e).local() }

    function Na(e) { return 15 * -Math.round(e._d.getTimezoneOffset() / 15) }

    function Ra() { return !!this.isValid() && (this._isUTC && 0 === this._offset) }
    l.updateOffset = function() {};
    var Ca = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        Ia = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function Ua(e, a) {
        var t, s, n, d = e,
            r = null;
        return Wa(e) ? d = { ms: e._milliseconds, d: e._days, M: e._months } : m(e) ? (d = {}, a ? d[a] = e : d.milliseconds = e) : (r = Ca.exec(e)) ? (t = "-" === r[1] ? -1 : 1, d = { y: 0, d: g(r[ce]) * t, h: g(r[Ye]) * t, m: g(r[ye]) * t, s: g(r[fe]) * t, ms: g(Aa(1e3 * r[ke])) * t }) : (r = Ia.exec(e)) ? (t = "-" === r[1] ? -1 : 1, d = { y: Ga(r[2], t), M: Ga(r[3], t), w: Ga(r[4], t), d: Ga(r[5], t), h: Ga(r[6], t), m: Ga(r[7], t), s: Ga(r[8], t) }) : null == d ? d = {} : "object" == typeof d && ("from" in d || "to" in d) && (n = function(e, a) {
            var t;
            if (!e.isValid() || !a.isValid()) return { milliseconds: 0, months: 0 };
            a = Ja(a, e), e.isBefore(a) ? t = Va(e, a) : ((t = Va(a, e)).milliseconds = -t.milliseconds, t.months = -t.months);
            return t
        }(Ha(d.from), Ha(d.to)), (d = {}).ms = n.milliseconds, d.M = n.months), s = new Pa(d), Wa(e) && h(e, "_locale") && (s._locale = e._locale), s
    }

    function Ga(e, a) { var t = e && parseFloat(e.replace(",", ".")); return (isNaN(t) ? 0 : t) * a }

    function Va(e, a) { var t = {}; return t.months = a.month() - e.month() + 12 * (a.year() - e.year()), e.clone().add(t.months, "M").isAfter(a) && --t.months, t.milliseconds = +a - +e.clone().add(t.months, "M"), t }

    function Ka(s, n) { return function(e, a) { var t; return null === a || isNaN(+a) || (S(n, "moment()." + n + "(period, number) is deprecated. Please use moment()." + n + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), t = e, e = a, a = t), Za(this, Ua(e = "string" == typeof e ? +e : e, a), s), this } }

    function Za(e, a, t, s) {
        var n = a._milliseconds,
            d = Aa(a._days),
            r = Aa(a._months);
        e.isValid() && (s = null == s || s, r && We(e, He(e, "Month") + r * t), d && be(e, "Date", He(e, "Date") + d * t), n && e._d.setTime(e._d.valueOf() + n * t), s && l.updateOffset(e, d || r))
    }
    Ua.fn = Pa.prototype, Ua.invalid = function() { return Ua(NaN) };
    var $a = Ka(1, "add"),
        Ba = Ka(-1, "subtract");

    function qa(e, a) {
        var t = 12 * (a.year() - e.year()) + (a.month() - e.month()),
            s = e.clone().add(t, "months");
        return -(t + (a - s < 0 ? (a - s) / (s - e.clone().add(t - 1, "months")) : (a - s) / (e.clone().add(t + 1, "months") - s))) || 0
    }

    function Qa(e) { var a; return void 0 === e ? this._locale._abbr : (null != (a = ma(e)) && (this._locale = a), this) }
    l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Xa = t("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) { return void 0 === e ? this.localeData() : this.locale(e) });

    function et() { return this._locale }
    var at = 126227808e5;

    function tt(e, a) { return (e % a + a) % a }

    function st(e, a, t) { return e < 100 && 0 <= e ? new Date(e + 400, a, t) - at : new Date(e, a, t).valueOf() }

    function nt(e, a, t) { return e < 100 && 0 <= e ? Date.UTC(e + 400, a, t) - at : Date.UTC(e, a, t) }

    function dt(e, a) { C(0, [e, e.length], 0, a) }

    function rt(e, a, t, s, n) {
        var d;
        return null == e ? Ce(this, s, n).year : ((d = Ie(e, s, n)) < a && (a = d), function(e, a, t, s, n) {
            var d = Re(e, a, t, s, n),
                r = Je(d.year, 0, d.dayOfYear);
            return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
        }.call(this, e, a, t, s, n))
    }
    C(0, ["gg", 2], 0, function() { return this.weekYear() % 100 }), C(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 }), dt("gggg", "weekYear"), dt("ggggg", "weekYear"), dt("GGGG", "isoWeekYear"), dt("GGGGG", "isoWeekYear"), O("weekYear", "gg"), O("isoWeekYear", "GG"), E("weekYear", 1), E("isoWeekYear", 1), ie("G", se), ie("g", se), ie("GG", B, V), ie("gg", B, V), ie("GGGG", ee, Z), ie("gggg", ee, Z), ie("GGGGG", ae, $), ie("ggggg", ae, $), Me(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, a, t, s) { a[s.substr(0, 2)] = g(e) }), Me(["gg", "GG"], function(e, a, t, s) { a[s] = l.parseTwoDigitYear(e) }), C("Q", 0, "Qo", "quarter"), O("quarter", "Q"), E("quarter", 7), ie("Q", G), le("Q", function(e, a) { a[Le] = 3 * (g(e) - 1) }), C("D", ["DD", 2], "Do", "date"), O("date", "D"), E("date", 9), ie("D", B), ie("DD", B, V), ie("Do", function(e, a) { return e ? a._dayOfMonthOrdinalParse || a._ordinalParse : a._dayOfMonthOrdinalParseLenient }), le(["D", "DD"], ce), le("Do", function(e, a) { a[ce] = g(e.match(B)[0]) });
    var _t = Se("Date", !0);
    C("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), O("dayOfYear", "DDD"), E("dayOfYear", 4), ie("DDD", X), ie("DDDD", K), le(["DDD", "DDDD"], function(e, a, t) { t._dayOfYear = g(e) }), C("m", ["mm", 2], 0, "minute"), O("minute", "m"), E("minute", 14), ie("m", B), ie("mm", B, V), le(["m", "mm"], ye);
    var it = Se("Minutes", !1);
    C("s", ["ss", 2], 0, "second"), O("second", "s"), E("second", 15), ie("s", B), ie("ss", B, V), le(["s", "ss"], fe);
    var ot, mt = Se("Seconds", !1);
    for (C("S", 0, 0, function() { return ~~(this.millisecond() / 100) }), C(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) }), C(0, ["SSS", 3], 0, "millisecond"), C(0, ["SSSS", 4], 0, function() { return 10 * this.millisecond() }), C(0, ["SSSSS", 5], 0, function() { return 100 * this.millisecond() }), C(0, ["SSSSSS", 6], 0, function() { return 1e3 * this.millisecond() }), C(0, ["SSSSSSS", 7], 0, function() { return 1e4 * this.millisecond() }), C(0, ["SSSSSSSS", 8], 0, function() { return 1e5 * this.millisecond() }), C(0, ["SSSSSSSSS", 9], 0, function() { return 1e6 * this.millisecond() }), O("millisecond", "ms"), E("millisecond", 16), ie("S", X, G), ie("SS", X, V), ie("SSS", X, K), ot = "SSSS"; ot.length <= 9; ot += "S") ie(ot, te);

    function ut(e, a) { a[ke] = g(1e3 * ("0." + e)) }
    for (ot = "S"; ot.length <= 9; ot += "S") le(ot, ut);
    var lt = Se("Milliseconds", !1);
    C("z", 0, 0, "zoneAbbr"), C("zz", 0, 0, "zoneName");
    var Mt = p.prototype;

    function ht(e) { return e }
    Mt.add = $a, Mt.calendar = function(e, a) {
        var t = e || Ha(),
            s = Ja(t, this).startOf("day"),
            n = l.calendarFormat(this, s) || "sameElse",
            d = a && (H(a[n]) ? a[n].call(this, t) : a[n]);
        return this.format(d || this.localeData().calendar(n, this, Ha(t)))
    }, Mt.clone = function() { return new p(this) }, Mt.diff = function(e, a, t) {
        var s, n, d;
        if (!this.isValid()) return NaN;
        if (!(s = Ja(e, this)).isValid()) return NaN;
        switch (n = 6e4 * (s.utcOffset() - this.utcOffset()), a = P(a)) {
            case "year":
                d = qa(this, s) / 12;
                break;
            case "month":
                d = qa(this, s);
                break;
            case "quarter":
                d = qa(this, s) / 3;
                break;
            case "second":
                d = (this - s) / 1e3;
                break;
            case "minute":
                d = (this - s) / 6e4;
                break;
            case "hour":
                d = (this - s) / 36e5;
                break;
            case "day":
                d = (this - s - n) / 864e5;
                break;
            case "week":
                d = (this - s - n) / 6048e5;
                break;
            default:
                d = this - s
        }
        return t ? d : T(d)
    }, Mt.endOf = function(e) {
        var a;
        if (void 0 === (e = P(e)) || "millisecond" === e || !this.isValid()) return this;
        var t = this._isUTC ? nt : st;
        switch (e) {
            case "year":
                a = t(this.year() + 1, 0, 1) - 1;
                break;
            case "quarter":
                a = t(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case "month":
                a = t(this.year(), this.month() + 1, 1) - 1;
                break;
            case "week":
                a = t(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case "isoWeek":
                a = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case "day":
            case "date":
                a = t(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case "hour":
                a = this._d.valueOf(), a += 36e5 - tt(a + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                break;
            case "minute":
                a = this._d.valueOf(), a += 6e4 - tt(a, 6e4) - 1;
                break;
            case "second":
                a = this._d.valueOf(), a += 1e3 - tt(a, 1e3) - 1;
                break
        }
        return this._d.setTime(a), l.updateOffset(this, !0), this
    }, Mt.format = function(e) { e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat); var a = I(this, e); return this.localeData().postformat(a) }, Mt.from = function(e, a) { return this.isValid() && (D(e) && e.isValid() || Ha(e).isValid()) ? Ua({ to: this, from: e }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate() }, Mt.fromNow = function(e) { return this.from(Ha(), e) }, Mt.to = function(e, a) { return this.isValid() && (D(e) && e.isValid() || Ha(e).isValid()) ? Ua({ from: this, to: e }).locale(this.locale()).humanize(!a) : this.localeData().invalidDate() }, Mt.toNow = function(e) { return this.to(Ha(), e) }, Mt.get = function(e) { return H(this[e = P(e)]) ? this[e]() : this }, Mt.invalidAt = function() { return Y(this).overflow }, Mt.isAfter = function(e, a) { var t = D(e) ? e : Ha(e); return !(!this.isValid() || !t.isValid()) && ("millisecond" === (a = P(a) || "millisecond") ? this.valueOf() > t.valueOf() : t.valueOf() < this.clone().startOf(a).valueOf()) }, Mt.isBefore = function(e, a) { var t = D(e) ? e : Ha(e); return !(!this.isValid() || !t.isValid()) && ("millisecond" === (a = P(a) || "millisecond") ? this.valueOf() < t.valueOf() : this.clone().endOf(a).valueOf() < t.valueOf()) }, Mt.isBetween = function(e, a, t, s) {
        var n = D(e) ? e : Ha(e),
            d = D(a) ? a : Ha(a);
        return !!(this.isValid() && n.isValid() && d.isValid()) && ("(" === (s = s || "()")[0] ? this.isAfter(n, t) : !this.isBefore(n, t)) && (")" === s[1] ? this.isBefore(d, t) : !this.isAfter(d, t))
    }, Mt.isSame = function(e, a) { var t, s = D(e) ? e : Ha(e); return !(!this.isValid() || !s.isValid()) && ("millisecond" === (a = P(a) || "millisecond") ? this.valueOf() === s.valueOf() : (t = s.valueOf(), this.clone().startOf(a).valueOf() <= t && t <= this.clone().endOf(a).valueOf())) }, Mt.isSameOrAfter = function(e, a) { return this.isSame(e, a) || this.isAfter(e, a) }, Mt.isSameOrBefore = function(e, a) { return this.isSame(e, a) || this.isBefore(e, a) }, Mt.isValid = function() { return y(this) }, Mt.lang = Xa, Mt.locale = Qa, Mt.localeData = et, Mt.max = ja, Mt.min = ba, Mt.parsingFlags = function() { return L({}, Y(this)) }, Mt.set = function(e, a) {
        if ("object" == typeof e)
            for (var t = function(e) { var a = []; for (var t in e) a.push({ unit: t, priority: A[t] }); return a.sort(function(e, a) { return e.priority - a.priority }), a }(e = W(e)), s = 0; s < t.length; s++) this[t[s].unit](e[t[s].unit]);
        else if (H(this[e = P(e)])) return this[e](a);
        return this
    }, Mt.startOf = function(e) {
        var a;
        if (void 0 === (e = P(e)) || "millisecond" === e || !this.isValid()) return this;
        var t = this._isUTC ? nt : st;
        switch (e) {
            case "year":
                a = t(this.year(), 0, 1);
                break;
            case "quarter":
                a = t(this.year(), this.month() - this.month() % 3, 1);
                break;
            case "month":
                a = t(this.year(), this.month(), 1);
                break;
            case "week":
                a = t(this.year(), this.month(), this.date() - this.weekday());
                break;
            case "isoWeek":
                a = t(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case "day":
            case "date":
                a = t(this.year(), this.month(), this.date());
                break;
            case "hour":
                a = this._d.valueOf(), a -= tt(a + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                break;
            case "minute":
                a = this._d.valueOf(), a -= tt(a, 6e4);
                break;
            case "second":
                a = this._d.valueOf(), a -= tt(a, 1e3);
                break
        }
        return this._d.setTime(a), l.updateOffset(this, !0), this
    }, Mt.subtract = Ba, Mt.toArray = function() { var e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()] }, Mt.toObject = function() { var e = this; return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() } }, Mt.toDate = function() { return new Date(this.valueOf()) }, Mt.toISOString = function(e) {
        if (!this.isValid()) return null;
        var a = !0 !== e,
            t = a ? this.clone().utc() : this;
        return t.year() < 0 || 9999 < t.year() ? I(t, a ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : H(Date.prototype.toISOString) ? a ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", I(t, "Z")) : I(t, a ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }, Mt.inspect = function() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment",
            a = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", a = "Z");
        var t = "[" + e + '("]',
            s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
            n = a + '[")]';
        return this.format(t + s + "-MM-DD[T]HH:mm:ss.SSS" + n)
    }, Mt.toJSON = function() { return this.isValid() ? this.toISOString() : null }, Mt.toString = function() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, Mt.unix = function() { return Math.floor(this.valueOf() / 1e3) }, Mt.valueOf = function() { return this._d.valueOf() - 6e4 * (this._offset || 0) }, Mt.creationData = function() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, Mt.year = ve, Mt.isLeapYear = function() { return ge(this.year()) }, Mt.weekYear = function(e) { return rt.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, Mt.isoWeekYear = function(e) { return rt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4) }, Mt.quarter = Mt.quarters = function(e) { return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3) }, Mt.month = Ae, Mt.daysInMonth = function() { return je(this.year(), this.month()) }, Mt.week = Mt.weeks = function(e) { var a = this.localeData().week(this); return null == e ? a : this.add(7 * (e - a), "d") }, Mt.isoWeek = Mt.isoWeeks = function(e) { var a = Ce(this, 1, 4).week; return null == e ? a : this.add(7 * (e - a), "d") }, Mt.weeksInYear = function() { var e = this.localeData()._week; return Ie(this.year(), e.dow, e.doy) }, Mt.isoWeeksInYear = function() { return Ie(this.year(), 1, 4) }, Mt.date = _t, Mt.day = Mt.days = function(e) { if (!this.isValid()) return null != e ? this : NaN; var a, t, s = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != e ? (a = e, t = this.localeData(), e = "string" != typeof a ? a : isNaN(a) ? "number" == typeof(a = t.weekdaysParse(a)) ? a : null : parseInt(a, 10), this.add(e - s, "d")) : s }, Mt.weekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; var a = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == e ? a : this.add(e - a, "d") }, Mt.isoWeekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; if (null == e) return this.day() || 7; var a, t, s = (a = e, t = this.localeData(), "string" == typeof a ? t.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a); return this.day(this.day() % 7 ? s : s - 7) }, Mt.dayOfYear = function(e) { var a = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == e ? a : this.add(e - a, "d") }, Mt.hour = Mt.hours = ta, Mt.minute = Mt.minutes = it, Mt.second = Mt.seconds = mt, Mt.millisecond = Mt.milliseconds = lt, Mt.utcOffset = function(e, a, t) { var s, n = this._offset || 0; if (!this.isValid()) return null != e ? this : NaN; if (null == e) return this._isUTC ? n : Na(this); if ("string" == typeof e) { if (null === (e = za(de, e))) return this } else Math.abs(e) < 16 && !t && (e *= 60); return !this._isUTC && a && (s = Na(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), n !== e && (!a || this._changeInProgress ? Za(this, Ua(e - n, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this }, Mt.utc = function(e) { return this.utcOffset(0, e) }, Mt.local = function(e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Na(this), "m")), this }, Mt.parseZone = function() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var e = za(ne, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }, Mt.hasAlignedHourOffset = function(e) { return !!this.isValid() && (e = e ? Ha(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0) }, Mt.isDST = function() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, Mt.isLocal = function() { return !!this.isValid() && !this._isUTC }, Mt.isUtcOffset = function() { return !!this.isValid() && this._isUTC }, Mt.isUtc = Ra, Mt.isUTC = Ra, Mt.zoneAbbr = function() { return this._isUTC ? "UTC" : "" }, Mt.zoneName = function() { return this._isUTC ? "Coordinated Universal Time" : "" }, Mt.dates = t("dates accessor is deprecated. Use date instead.", _t), Mt.months = t("months accessor is deprecated. Use month instead", Ae), Mt.years = t("years accessor is deprecated. Use year instead", ve), Mt.zone = t("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, a) { return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, a), this) : -this.utcOffset() }), Mt.isDSTShifted = t("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!o(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if (k(e, this), (e = va(e))._a) {
            var a = e._isUTC ? c(e._a) : Ha(e._a);
            this._isDSTShifted = this.isValid() && 0 < r(e._a, a.toArray())
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    });
    var Lt = j.prototype;

    function ct(e, a, t, s) {
        var n = ma(),
            d = c().set(s, a);
        return n[t](d, e)
    }

    function Yt(e, a, t) { if (m(e) && (a = e, e = void 0), e = e || "", null != a) return ct(e, a, t, "month"); var s, n = []; for (s = 0; s < 12; s++) n[s] = ct(e, s, t, "month"); return n }

    function yt(e, a, t, s) {
        a = ("boolean" == typeof e ? m(a) && (t = a, a = void 0) : (a = e, e = !1, m(t = a) && (t = a, a = void 0)), a || "");
        var n, d = ma(),
            r = e ? d._week.dow : 0;
        if (null != t) return ct(a, (t + r) % 7, s, "day");
        var _ = [];
        for (n = 0; n < 7; n++) _[n] = ct(a, (n + r) % 7, s, "day");
        return _
    }
    Lt.calendar = function(e, a, t) { var s = this._calendar[e] || this._calendar.sameElse; return H(s) ? s.call(a, t) : s }, Lt.longDateFormat = function(e) {
        var a = this._longDateFormat[e],
            t = this._longDateFormat[e.toUpperCase()];
        return a || !t ? a : (this._longDateFormat[e] = t.replace(/MMMM|MM|DD|dddd/g, function(e) { return e.slice(1) }), this._longDateFormat[e])
    }, Lt.invalidDate = function() { return this._invalidDate }, Lt.ordinal = function(e) { return this._ordinal.replace("%d", e) }, Lt.preparse = ht, Lt.postformat = ht, Lt.relativeTime = function(e, a, t, s) { var n = this._relativeTime[t]; return H(n) ? n(e, a, t, s) : n.replace(/%d/i, e) }, Lt.pastFuture = function(e, a) { var t = this._relativeTime[0 < e ? "future" : "past"]; return H(t) ? t(a) : t.replace(/%s/i, a) }, Lt.set = function(e) {
        var a, t;
        for (t in e) H(a = e[t]) ? this[t] = a : this["_" + t] = a;
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }, Lt.months = function(e, a) { return e ? _(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || xe).test(a) ? "format" : "standalone"][e.month()] : _(this._months) ? this._months : this._months.standalone }, Lt.monthsShort = function(e, a) { return e ? _(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[xe.test(a) ? "format" : "standalone"][e.month()] : _(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, Lt.monthsParse = function(e, a, t) {
        var s, n, d;
        if (this._monthsParseExact) return function(e, a, t) {
            var s, n, d, r = e.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) d = c([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(d, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(d, "").toLocaleLowerCase();
            return t ? "MMM" === a ? -1 !== (n = we.call(this._shortMonthsParse, r)) ? n : null : -1 !== (n = we.call(this._longMonthsParse, r)) ? n : null : "MMM" === a ? -1 !== (n = we.call(this._shortMonthsParse, r)) ? n : -1 !== (n = we.call(this._longMonthsParse, r)) ? n : null : -1 !== (n = we.call(this._longMonthsParse, r)) ? n : -1 !== (n = we.call(this._shortMonthsParse, r)) ? n : null
        }.call(this, e, a, t);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) { if (n = c([2e3, s]), t && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(n, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(n, "").replace(".", "") + "$", "i")), t || this._monthsParse[s] || (d = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[s] = new RegExp(d.replace(".", ""), "i")), t && "MMMM" === a && this._longMonthsParse[s].test(e)) return s; if (t && "MMM" === a && this._shortMonthsParse[s].test(e)) return s; if (!t && this._monthsParse[s].test(e)) return s }
    }, Lt.monthsRegex = function(e) { return this._monthsParseExact ? (h(this, "_monthsRegex") || ze.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (h(this, "_monthsRegex") || (this._monthsRegex = Fe), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex) }, Lt.monthsShortRegex = function(e) { return this._monthsParseExact ? (h(this, "_monthsRegex") || ze.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = Ee), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex) }, Lt.week = function(e) { return Ce(e, this._week.dow, this._week.doy).week }, Lt.firstDayOfYear = function() { return this._week.doy }, Lt.firstDayOfWeek = function() { return this._week.dow }, Lt.weekdays = function(e, a) { var t = _(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(a) ? "format" : "standalone"]; return !0 === e ? Ue(t, this._week.dow) : e ? t[e.day()] : t }, Lt.weekdaysMin = function(e) { return !0 === e ? Ue(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin }, Lt.weekdaysShort = function(e) { return !0 === e ? Ue(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort }, Lt.weekdaysParse = function(e, a, t) {
        var s, n, d;
        if (this._weekdaysParseExact) return function(e, a, t) {
            var s, n, d, r = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) d = c([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(d, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(d, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(d, "").toLocaleLowerCase();
            return t ? "dddd" === a ? -1 !== (n = we.call(this._weekdaysParse, r)) ? n : null : "ddd" === a ? -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : null : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : null : "dddd" === a ? -1 !== (n = we.call(this._weekdaysParse, r)) ? n : -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : null : "ddd" === a ? -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : -1 !== (n = we.call(this._weekdaysParse, r)) ? n : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : null : -1 !== (n = we.call(this._minWeekdaysParse, r)) ? n : -1 !== (n = we.call(this._weekdaysParse, r)) ? n : -1 !== (n = we.call(this._shortWeekdaysParse, r)) ? n : null
        }.call(this, e, a, t);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) { if (n = c([2e3, 1]).day(s), t && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(n, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (d = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[s] = new RegExp(d.replace(".", ""), "i")), t && "dddd" === a && this._fullWeekdaysParse[s].test(e)) return s; if (t && "ddd" === a && this._shortWeekdaysParse[s].test(e)) return s; if (t && "dd" === a && this._minWeekdaysParse[s].test(e)) return s; if (!t && this._weekdaysParse[s].test(e)) return s }
    }, Lt.weekdaysRegex = function(e) { return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || qe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = Ze), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex) }, Lt.weekdaysShortRegex = function(e) { return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || qe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = $e), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, Lt.weekdaysMinRegex = function(e) { return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || qe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Be), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, Lt.isPM = function(e) { return "p" === (e + "").toLowerCase().charAt(0) }, Lt.meridiem = function(e, a, t) { return 11 < e ? t ? "pm" : "PM" : t ? "am" : "AM" }, ia("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) { var a = e % 10; return e + (1 === g(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") } }), l.lang = t("moment.lang is deprecated. Use moment.locale instead.", ia), l.langData = t("moment.langData is deprecated. Use moment.localeData instead.", ma);
    var ft = Math.abs;

    function kt(e, a, t, s) { var n = Ua(a, t); return e._milliseconds += s * n._milliseconds, e._days += s * n._days, e._months += s * n._months, e._bubble() }

    function pt(e) { return e < 0 ? Math.floor(e) : Math.ceil(e) }

    function Dt(e) { return 4800 * e / 146097 }

    function Tt(e) { return 146097 * e / 4800 }

    function gt(e) { return function() { return this.as(e) } }
    var wt = gt("ms"),
        vt = gt("s"),
        St = gt("m"),
        Ht = gt("h"),
        bt = gt("d"),
        jt = gt("w"),
        xt = gt("M"),
        Ot = gt("Q"),
        Pt = gt("y");

    function Wt(e) { return function() { return this.isValid() ? this._data[e] : NaN } }
    var At = Wt("milliseconds"),
        Et = Wt("seconds"),
        Ft = Wt("minutes"),
        zt = Wt("hours"),
        Jt = Wt("days"),
        Nt = Wt("months"),
        Rt = Wt("years");
    var Ct = Math.round,
        It = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 };
    var Ut = Math.abs;

    function Gt(e) { return (0 < e) - (e < 0) || +e }

    function Vt() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, a, t = Ut(this._milliseconds) / 1e3,
            s = Ut(this._days),
            n = Ut(this._months);
        a = T((e = T(t / 60)) / 60), t %= 60, e %= 60;
        var d = T(n / 12),
            r = n %= 12,
            _ = s,
            i = a,
            o = e,
            m = t ? t.toFixed(3).replace(/\.?0+$/, "") : "",
            u = this.asSeconds();
        if (!u) return "P0D";
        var l = u < 0 ? "-" : "",
            M = Gt(this._months) !== Gt(u) ? "-" : "",
            h = Gt(this._days) !== Gt(u) ? "-" : "",
            L = Gt(this._milliseconds) !== Gt(u) ? "-" : "";
        return l + "P" + (d ? M + d + "Y" : "") + (r ? M + r + "M" : "") + (_ ? h + _ + "D" : "") + (i || o || m ? "T" : "") + (i ? L + i + "H" : "") + (o ? L + o + "M" : "") + (m ? L + m + "S" : "")
    }
    var Kt = Pa.prototype;
    Kt.isValid = function() { return this._isValid }, Kt.abs = function() { var e = this._data; return this._milliseconds = ft(this._milliseconds), this._days = ft(this._days), this._months = ft(this._months), e.milliseconds = ft(e.milliseconds), e.seconds = ft(e.seconds), e.minutes = ft(e.minutes), e.hours = ft(e.hours), e.months = ft(e.months), e.years = ft(e.years), this }, Kt.add = function(e, a) { return kt(this, e, a, 1) }, Kt.subtract = function(e, a) { return kt(this, e, a, -1) }, Kt.as = function(e) {
        if (!this.isValid()) return NaN;
        var a, t, s = this._milliseconds;
        if ("month" === (e = P(e)) || "quarter" === e || "year" === e) switch (a = this._days + s / 864e5, t = this._months + Dt(a), e) {
            case "month":
                return t;
            case "quarter":
                return t / 3;
            case "year":
                return t / 12
        } else switch (a = this._days + Math.round(Tt(this._months)), e) {
            case "week":
                return a / 7 + s / 6048e5;
            case "day":
                return a + s / 864e5;
            case "hour":
                return 24 * a + s / 36e5;
            case "minute":
                return 1440 * a + s / 6e4;
            case "second":
                return 86400 * a + s / 1e3;
            case "millisecond":
                return Math.floor(864e5 * a) + s;
            default:
                throw new Error("Unknown unit " + e)
        }
    }, Kt.asMilliseconds = wt, Kt.asSeconds = vt, Kt.asMinutes = St, Kt.asHours = Ht, Kt.asDays = bt, Kt.asWeeks = jt, Kt.asMonths = xt, Kt.asQuarters = Ot, Kt.asYears = Pt, Kt.valueOf = function() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12) : NaN }, Kt._bubble = function() {
        var e, a, t, s, n, d = this._milliseconds,
            r = this._days,
            _ = this._months,
            i = this._data;
        return 0 <= d && 0 <= r && 0 <= _ || d <= 0 && r <= 0 && _ <= 0 || (d += 864e5 * pt(Tt(_) + r), _ = r = 0), i.milliseconds = d % 1e3, e = T(d / 1e3), i.seconds = e % 60, a = T(e / 60), i.minutes = a % 60, t = T(a / 60), i.hours = t % 24, _ += n = T(Dt(r += T(t / 24))), r -= pt(Tt(n)), s = T(_ / 12), _ %= 12, i.days = r, i.months = _, i.years = s, this
    }, Kt.clone = function() { return Ua(this) }, Kt.get = function(e) { return e = P(e), this.isValid() ? this[e + "s"]() : NaN }, Kt.milliseconds = At, Kt.seconds = Et, Kt.minutes = Ft, Kt.hours = zt, Kt.days = Jt, Kt.weeks = function() { return T(this.days() / 7) }, Kt.months = Nt, Kt.years = Rt, Kt.humanize = function(e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var a, t, s, n, d, r, _, i, o, m, u, l = this.localeData(),
            M = (t = !e, s = l, n = Ua(a = this).abs(), d = Ct(n.as("s")), r = Ct(n.as("m")), _ = Ct(n.as("h")), i = Ct(n.as("d")), o = Ct(n.as("M")), m = Ct(n.as("y")), (u = d <= It.ss && ["s", d] || d < It.s && ["ss", d] || r <= 1 && ["m"] || r < It.m && ["mm", r] || _ <= 1 && ["h"] || _ < It.h && ["hh", _] || i <= 1 && ["d"] || i < It.d && ["dd", i] || o <= 1 && ["M"] || o < It.M && ["MM", o] || m <= 1 && ["y"] || ["yy", m])[2] = t, u[3] = 0 < +a, u[4] = s, function(e, a, t, s, n) { return n.relativeTime(a || 1, !!t, e, s) }.apply(null, u));
        return e && (M = l.pastFuture(+this, M)), l.postformat(M)
    }, Kt.toISOString = Vt, Kt.toString = Vt, Kt.toJSON = Vt, Kt.locale = Qa, Kt.localeData = et, Kt.toIsoString = t("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Vt), Kt.lang = Xa, C("X", 0, 0, "unix"), C("x", 0, 0, "valueOf"), ie("x", se), ie("X", /[+-]?\d+(\.\d{1,3})?/), le("X", function(e, a, t) { t._d = new Date(1e3 * parseFloat(e, 10)) }), le("x", function(e, a, t) { t._d = new Date(g(e)) }), l.version = "2.24.0", e = Ha, l.fn = Mt, l.min = function() { return xa("isBefore", [].slice.call(arguments, 0)) }, l.max = function() { return xa("isAfter", [].slice.call(arguments, 0)) }, l.now = function() { return Date.now ? Date.now() : +new Date }, l.utc = c, l.unix = function(e) { return Ha(1e3 * e) }, l.months = function(e, a) { return Yt(e, a, "months") }, l.isDate = u, l.locale = ia, l.invalid = f, l.duration = Ua, l.isMoment = D, l.weekdays = function(e, a, t) { return yt(e, a, t, "weekdays") }, l.parseZone = function() { return Ha.apply(null, arguments).parseZone() }, l.localeData = ma, l.isDuration = Wa, l.monthsShort = function(e, a) { return Yt(e, a, "monthsShort") }, l.weekdaysMin = function(e, a, t) { return yt(e, a, t, "weekdaysMin") }, l.defineLocale = oa, l.updateLocale = function(e, a) {
        if (null != a) {
            var t, s, n = sa;
            null != (s = _a(e)) && (n = s._config), (t = new j(a = b(n, a))).parentLocale = na[e], na[e] = t, ia(e)
        } else null != na[e] && (null != na[e].parentLocale ? na[e] = na[e].parentLocale : null != na[e] && delete na[e]);
        return na[e]
    }, l.locales = function() { return s(na) }, l.weekdaysShort = function(e, a, t) { return yt(e, a, t, "weekdaysShort") }, l.normalizeUnits = P, l.relativeTimeRounding = function(e) { return void 0 === e ? Ct : "function" == typeof e && (Ct = e, !0) }, l.relativeTimeThreshold = function(e, a) { return void 0 !== It[e] && (void 0 === a ? It[e] : (It[e] = a, "s" === e && (It.ss = a - 1), !0)) }, l.calendarFormat = function(e, a) { var t = e.diff(a, "days", !0); return t < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse" }, l.prototype = Mt, l.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, l.defineLocale("af", { months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), meridiemParse: /vm|nm/i, isPM: function(e) { return /^nm$/i.test(e) }, meridiem: function(e, a, t) { return e < 12 ? t ? "vm" : "VM" : t ? "nm" : "NM" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Vandag om] LT", nextDay: "[M\xf4re om] LT", nextWeek: "dddd [om] LT", lastDay: "[Gister om] LT", lastWeek: "[Laas] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", ss: "%d sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de") }, week: { dow: 1, doy: 4 } }), l.defineLocale("ar-dz", { months: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), monthsShort: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0627\u062d\u062f_\u0627\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u0623\u062d_\u0625\u062b_\u062b\u0644\u0627_\u0623\u0631_\u062e\u0645_\u062c\u0645_\u0633\u0628".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, week: { dow: 0, doy: 4 } }), l.defineLocale("ar-kw", { months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"), monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, week: { dow: 0, doy: 12 } });
    var Zt = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0" },
        $t = function(e) { return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5 },
        Bt = { s: ["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629", "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062b\u0627\u0646\u064a\u062a\u0627\u0646", "\u062b\u0627\u0646\u064a\u062a\u064a\u0646"], "%d \u062b\u0648\u0627\u0646", "%d \u062b\u0627\u0646\u064a\u0629", "%d \u062b\u0627\u0646\u064a\u0629"], m: ["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629", "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062f\u0642\u064a\u0642\u062a\u0627\u0646", "\u062f\u0642\u064a\u0642\u062a\u064a\u0646"], "%d \u062f\u0642\u0627\u0626\u0642", "%d \u062f\u0642\u064a\u0642\u0629", "%d \u062f\u0642\u064a\u0642\u0629"], h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u0633\u0627\u0639\u062a\u0627\u0646", "\u0633\u0627\u0639\u062a\u064a\u0646"], "%d \u0633\u0627\u0639\u0627\u062a", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"], d: ["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645", "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f", ["\u064a\u0648\u0645\u0627\u0646", "\u064a\u0648\u0645\u064a\u0646"], "%d \u0623\u064a\u0627\u0645", "%d \u064a\u0648\u0645\u064b\u0627", "%d \u064a\u0648\u0645"], M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064a\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"], y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064a\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064b\u0627", "%d \u0639\u0627\u0645"] },
        qt = function(r) {
            return function(e, a, t, s) {
                var n = $t(e),
                    d = Bt[r][$t(e)];
                return 2 === n && (d = d[a ? 0 : 1]), d.replace(/%d/i, e)
            }
        },
        Qt = ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"];
    l.defineLocale("ar-ly", { months: Qt, monthsShort: Qt, weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/\u200fM/\u200fYYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0635|\u0645/, isPM: function(e) { return "\u0645" === e }, meridiem: function(e, a, t) { return e < 12 ? "\u0635" : "\u0645" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0628\u0639\u062f %s", past: "\u0645\u0646\u0630 %s", s: qt("s"), ss: qt("s"), m: qt("m"), mm: qt("m"), h: qt("h"), hh: qt("h"), d: qt("d"), dd: qt("d"), M: qt("M"), MM: qt("M"), y: qt("y"), yy: qt("y") }, preparse: function(e) { return e.replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return Zt[e] }).replace(/,/g, "\u060c") }, week: { dow: 6, doy: 12 } }), l.defineLocale("ar-ma", { months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"), monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, week: { dow: 6, doy: 12 } });
    var Xt = { 1: "\u0661", 2: "\u0662", 3: "\u0663", 4: "\u0664", 5: "\u0665", 6: "\u0666", 7: "\u0667", 8: "\u0668", 9: "\u0669", 0: "\u0660" },
        es = { "\u0661": "1", "\u0662": "2", "\u0663": "3", "\u0664": "4", "\u0665": "5", "\u0666": "6", "\u0667": "7", "\u0668": "8", "\u0669": "9", "\u0660": "0" };
    l.defineLocale("ar-sa", { months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0635|\u0645/, isPM: function(e) { return "\u0645" === e }, meridiem: function(e, a, t) { return e < 12 ? "\u0635" : "\u0645" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, preparse: function(e) { return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(e) { return es[e] }).replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return Xt[e] }).replace(/,/g, "\u060c") }, week: { dow: 0, doy: 6 } }), l.defineLocale("ar-tn", { months: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), monthsShort: "\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"), weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0641\u064a %s", past: "\u0645\u0646\u0630 %s", s: "\u062b\u0648\u0627\u0646", ss: "%d \u062b\u0627\u0646\u064a\u0629", m: "\u062f\u0642\u064a\u0642\u0629", mm: "%d \u062f\u0642\u0627\u0626\u0642", h: "\u0633\u0627\u0639\u0629", hh: "%d \u0633\u0627\u0639\u0627\u062a", d: "\u064a\u0648\u0645", dd: "%d \u0623\u064a\u0627\u0645", M: "\u0634\u0647\u0631", MM: "%d \u0623\u0634\u0647\u0631", y: "\u0633\u0646\u0629", yy: "%d \u0633\u0646\u0648\u0627\u062a" }, week: { dow: 1, doy: 4 } });
    var as = { 1: "\u0661", 2: "\u0662", 3: "\u0663", 4: "\u0664", 5: "\u0665", 6: "\u0666", 7: "\u0667", 8: "\u0668", 9: "\u0669", 0: "\u0660" },
        ts = { "\u0661": "1", "\u0662": "2", "\u0663": "3", "\u0664": "4", "\u0665": "5", "\u0666": "6", "\u0667": "7", "\u0668": "8", "\u0669": "9", "\u0660": "0" },
        ss = function(e) { return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5 },
        ns = { s: ["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629", "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062b\u0627\u0646\u064a\u062a\u0627\u0646", "\u062b\u0627\u0646\u064a\u062a\u064a\u0646"], "%d \u062b\u0648\u0627\u0646", "%d \u062b\u0627\u0646\u064a\u0629", "%d \u062b\u0627\u0646\u064a\u0629"], m: ["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629", "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u062f\u0642\u064a\u0642\u062a\u0627\u0646", "\u062f\u0642\u064a\u0642\u062a\u064a\u0646"], "%d \u062f\u0642\u0627\u0626\u0642", "%d \u062f\u0642\u064a\u0642\u0629", "%d \u062f\u0642\u064a\u0642\u0629"], h: ["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629", "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629", ["\u0633\u0627\u0639\u062a\u0627\u0646", "\u0633\u0627\u0639\u062a\u064a\u0646"], "%d \u0633\u0627\u0639\u0627\u062a", "%d \u0633\u0627\u0639\u0629", "%d \u0633\u0627\u0639\u0629"], d: ["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645", "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f", ["\u064a\u0648\u0645\u0627\u0646", "\u064a\u0648\u0645\u064a\u0646"], "%d \u0623\u064a\u0627\u0645", "%d \u064a\u0648\u0645\u064b\u0627", "%d \u064a\u0648\u0645"], M: ["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631", "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f", ["\u0634\u0647\u0631\u0627\u0646", "\u0634\u0647\u0631\u064a\u0646"], "%d \u0623\u0634\u0647\u0631", "%d \u0634\u0647\u0631\u0627", "%d \u0634\u0647\u0631"], y: ["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645", "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f", ["\u0639\u0627\u0645\u0627\u0646", "\u0639\u0627\u0645\u064a\u0646"], "%d \u0623\u0639\u0648\u0627\u0645", "%d \u0639\u0627\u0645\u064b\u0627", "%d \u0639\u0627\u0645"] },
        ds = function(r) {
            return function(e, a, t, s) {
                var n = ss(e),
                    d = ns[r][ss(e)];
                return 2 === n && (d = d[a ? 0 : 1]), d.replace(/%d/i, e)
            }
        },
        rs = ["\u064a\u0646\u0627\u064a\u0631", "\u0641\u0628\u0631\u0627\u064a\u0631", "\u0645\u0627\u0631\u0633", "\u0623\u0628\u0631\u064a\u0644", "\u0645\u0627\u064a\u0648", "\u064a\u0648\u0646\u064a\u0648", "\u064a\u0648\u0644\u064a\u0648", "\u0623\u063a\u0633\u0637\u0633", "\u0633\u0628\u062a\u0645\u0628\u0631", "\u0623\u0643\u062a\u0648\u0628\u0631", "\u0646\u0648\u0641\u0645\u0628\u0631", "\u062f\u064a\u0633\u0645\u0628\u0631"];
    l.defineLocale("ar", { months: rs, monthsShort: rs, weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"), weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"), weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/\u200fM/\u200fYYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0635|\u0645/, isPM: function(e) { return "\u0645" === e }, meridiem: function(e, a, t) { return e < 12 ? "\u0635" : "\u0645" }, calendar: { sameDay: "[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextDay: "[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", nextWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastDay: "[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", lastWeek: "dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT", sameElse: "L" }, relativeTime: { future: "\u0628\u0639\u062f %s", past: "\u0645\u0646\u0630 %s", s: ds("s"), ss: ds("s"), m: ds("m"), mm: ds("m"), h: ds("h"), hh: ds("h"), d: ds("d"), dd: ds("d"), M: ds("M"), MM: ds("M"), y: ds("y"), yy: ds("y") }, preparse: function(e) { return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(e) { return ts[e] }).replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return as[e] }).replace(/,/g, "\u060c") }, week: { dow: 6, doy: 12 } });
    var _s = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-\xfcnc\xfc", 4: "-\xfcnc\xfc", 100: "-\xfcnc\xfc", 6: "-nc\u0131", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-\u0131nc\u0131", 90: "-\u0131nc\u0131" };

    function is(e, a, t) { var s, n; return "m" === t ? a ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443" : "h" === t ? a ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443" : e + " " + (s = +e, n = { ss: a ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434", mm: a ? "\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d" : "\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d", hh: a ? "\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d" : "\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d", dd: "\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d", MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e", yy: "\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e" }[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : 2 <= s % 10 && s % 10 <= 4 && (s % 100 < 10 || 20 <= s % 100) ? n[1] : n[2]) }
    l.defineLocale("az", { months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekdays: "Bazar_Bazar ert\u0259si_\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131_\xc7\u0259r\u015f\u0259nb\u0259_C\xfcm\u0259 ax\u015fam\u0131_C\xfcm\u0259_\u015e\u0259nb\u0259".split("_"), weekdaysShort: "Baz_BzE_\xc7Ax_\xc7\u0259r_CAx_C\xfcm_\u015e\u0259n".split("_"), weekdaysMin: "Bz_BE_\xc7A_\xc7\u0259_CA_C\xfc_\u015e\u0259".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bug\xfcn saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT", lastDay: "[d\xfcn\u0259n] LT", lastWeek: "[ke\xe7\u0259n h\u0259ft\u0259] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s \u0259vv\u0259l", s: "birne\xe7\u0259 saniy\u0259", ss: "%d saniy\u0259", m: "bir d\u0259qiq\u0259", mm: "%d d\u0259qiq\u0259", h: "bir saat", hh: "%d saat", d: "bir g\xfcn", dd: "%d g\xfcn", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, meridiemParse: /gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/, isPM: function(e) { return /^(g\xfcnd\xfcz|ax\u015fam)$/.test(e) }, meridiem: function(e, a, t) { return e < 4 ? "gec\u0259" : e < 12 ? "s\u0259h\u0259r" : e < 17 ? "g\xfcnd\xfcz" : "ax\u015fam" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/, ordinal: function(e) { if (0 === e) return e + "-\u0131nc\u0131"; var a = e % 10; return e + (_s[a] || _s[e % 100 - a] || _s[100 <= e ? 100 : null]) }, week: { dow: 1, doy: 7 } }), l.defineLocale("be", {
        months: { format: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f_\u043b\u044e\u0442\u0430\u0433\u0430_\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430_\u0442\u0440\u0430\u045e\u043d\u044f_\u0447\u044d\u0440\u0432\u0435\u043d\u044f_\u043b\u0456\u043f\u0435\u043d\u044f_\u0436\u043d\u0456\u045e\u043d\u044f_\u0432\u0435\u0440\u0430\u0441\u043d\u044f_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430_\u0441\u043d\u0435\u0436\u043d\u044f".split("_"), standalone: "\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c_\u043b\u044e\u0442\u044b_\u0441\u0430\u043a\u0430\u0432\u0456\u043a_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u044d\u0440\u0432\u0435\u043d\u044c_\u043b\u0456\u043f\u0435\u043d\u044c_\u0436\u043d\u0456\u0432\u0435\u043d\u044c_\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434_\u0441\u043d\u0435\u0436\u0430\u043d\u044c".split("_") },
        monthsShort: "\u0441\u0442\u0443\u0434_\u043b\u044e\u0442_\u0441\u0430\u043a_\u043a\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044d\u0440\u0432_\u043b\u0456\u043f_\u0436\u043d\u0456\u0432_\u0432\u0435\u0440_\u043a\u0430\u0441\u0442_\u043b\u0456\u0441\u0442_\u0441\u043d\u0435\u0436".split("_"),
        weekdays: { format: "\u043d\u044f\u0434\u0437\u0435\u043b\u044e_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0443_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"), standalone: "\u043d\u044f\u0434\u0437\u0435\u043b\u044f_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0430_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"), isFormat: /\[ ?[\u0423\u0443\u045e] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/ },
        weekdaysShort: "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),
        weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0433.", LLL: "D MMMM YYYY \u0433., HH:mm", LLLL: "dddd, D MMMM YYYY \u0433., HH:mm" },
        calendar: {
            sameDay: "[\u0421\u0451\u043d\u043d\u044f \u045e] LT",
            nextDay: "[\u0417\u0430\u045e\u0442\u0440\u0430 \u045e] LT",
            lastDay: "[\u0423\u0447\u043e\u0440\u0430 \u045e] LT",
            nextWeek: function() { return "[\u0423] dddd [\u045e] LT" },
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u0443\u044e] dddd [\u045e] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[\u0423 \u043c\u0456\u043d\u0443\u043b\u044b] dddd [\u045e] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "\u043f\u0440\u0430\u0437 %s", past: "%s \u0442\u0430\u043c\u0443", s: "\u043d\u0435\u043a\u0430\u043b\u044c\u043a\u0456 \u0441\u0435\u043a\u0443\u043d\u0434", m: is, mm: is, h: is, hh: is, d: "\u0434\u0437\u0435\u043d\u044c", dd: is, M: "\u043c\u0435\u0441\u044f\u0446", MM: is, y: "\u0433\u043e\u0434", yy: is },
        meridiemParse: /\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,
        isPM: function(e) { return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(e) },
        meridiem: function(e, a, t) { return e < 4 ? "\u043d\u043e\u0447\u044b" : e < 12 ? "\u0440\u0430\u043d\u0456\u0446\u044b" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u0430\u0440\u0430" },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,
        ordinal: function(e, a) {
            switch (a) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-\u044b" : e + "-\u0456";
                case "D":
                    return e + "-\u0433\u0430";
                default:
                    return e
            }
        },
        week: { dow: 1, doy: 7 }
    }), l.defineLocale("bg", {
        months: "\u044f\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),
        monthsShort: "\u044f\u043d\u0440_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),
        weekdays: "\u043d\u0435\u0434\u0435\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u044f\u0434\u0430_\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a_\u043f\u0435\u0442\u044a\u043a_\u0441\u044a\u0431\u043e\u0442\u0430".split("_"),
        weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u044f_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u044a\u0431".split("_"),
        weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
        longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" },
        calendar: {
            sameDay: "[\u0414\u043d\u0435\u0441 \u0432] LT",
            nextDay: "[\u0423\u0442\u0440\u0435 \u0432] LT",
            nextWeek: "dddd [\u0432] LT",
            lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0430\u0442\u0430] dddd [\u0432] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0438\u044f] dddd [\u0432] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "\u0441\u043b\u0435\u0434 %s", past: "\u043f\u0440\u0435\u0434\u0438 %s", s: "\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438", ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438", m: "\u043c\u0438\u043d\u0443\u0442\u0430", mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438", h: "\u0447\u0430\u0441", hh: "%d \u0447\u0430\u0441\u0430", d: "\u0434\u0435\u043d", dd: "%d \u0434\u043d\u0438", M: "\u043c\u0435\u0441\u0435\u0446", MM: "%d \u043c\u0435\u0441\u0435\u0446\u0430", y: "\u0433\u043e\u0434\u0438\u043d\u0430", yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438" },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
        ordinal: function(e) {
            var a = e % 10,
                t = e % 100;
            return 0 === e ? e + "-\u0435\u0432" : 0 === t ? e + "-\u0435\u043d" : 10 < t && t < 20 ? e + "-\u0442\u0438" : 1 === a ? e + "-\u0432\u0438" : 2 === a ? e + "-\u0440\u0438" : 7 === a || 8 === a ? e + "-\u043c\u0438" : e + "-\u0442\u0438"
        },
        week: { dow: 1, doy: 7 }
    }), l.defineLocale("bm", { months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_M\u025bkalo_Zuw\u025bnkalo_Zuluyekalo_Utikalo_S\u025btanburukalo_\u0254kut\u0254burukalo_Nowanburukalo_Desanburukalo".split("_"), monthsShort: "Zan_Few_Mar_Awi_M\u025b_Zuw_Zul_Uti_S\u025bt_\u0254ku_Now_Des".split("_"), weekdays: "Kari_Nt\u025bn\u025bn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"), weekdaysShort: "Kar_Nt\u025b_Tar_Ara_Ala_Jum_Sib".split("_"), weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM [tile] D [san] YYYY", LLL: "MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm", LLLL: "dddd MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm" }, calendar: { sameDay: "[Bi l\u025br\u025b] LT", nextDay: "[Sini l\u025br\u025b] LT", nextWeek: "dddd [don l\u025br\u025b] LT", lastDay: "[Kunu l\u025br\u025b] LT", lastWeek: "dddd [t\u025bm\u025bnen l\u025br\u025b] LT", sameElse: "L" }, relativeTime: { future: "%s k\u0254n\u0254", past: "a b\u025b %s b\u0254", s: "sanga dama dama", ss: "sekondi %d", m: "miniti kelen", mm: "miniti %d", h: "l\u025br\u025b kelen", hh: "l\u025br\u025b %d", d: "tile kelen", dd: "tile %d", M: "kalo kelen", MM: "kalo %d", y: "san kelen", yy: "san %d" }, week: { dow: 1, doy: 4 } });
    var os = { 1: "\u09e7", 2: "\u09e8", 3: "\u09e9", 4: "\u09ea", 5: "\u09eb", 6: "\u09ec", 7: "\u09ed", 8: "\u09ee", 9: "\u09ef", 0: "\u09e6" },
        ms = { "\u09e7": "1", "\u09e8": "2", "\u09e9": "3", "\u09ea": "4", "\u09eb": "5", "\u09ec": "6", "\u09ed": "7", "\u09ee": "8", "\u09ef": "9", "\u09e6": "0" };
    l.defineLocale("bn", { months: "\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09c0_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split("_"), monthsShort: "\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2_\u0986\u0997_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad\u09c7_\u09a1\u09bf\u09b8\u09c7".split("_"), weekdays: "\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split("_"), weekdaysShort: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"), weekdaysMin: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u0983_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"), longDateFormat: { LT: "A h:mm \u09b8\u09ae\u09df", LTS: "A h:mm:ss \u09b8\u09ae\u09df", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u09b8\u09ae\u09df", LLLL: "dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df" }, calendar: { sameDay: "[\u0986\u099c] LT", nextDay: "[\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2] LT", nextWeek: "dddd, LT", lastDay: "[\u0997\u09a4\u0995\u09be\u09b2] LT", lastWeek: "[\u0997\u09a4] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u09aa\u09b0\u09c7", past: "%s \u0986\u0997\u09c7", s: "\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1", ss: "%d \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1", m: "\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f", mm: "%d \u09ae\u09bf\u09a8\u09bf\u099f", h: "\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be", hh: "%d \u0998\u09a8\u09cd\u099f\u09be", d: "\u098f\u0995 \u09a6\u09bf\u09a8", dd: "%d \u09a6\u09bf\u09a8", M: "\u098f\u0995 \u09ae\u09be\u09b8", MM: "%d \u09ae\u09be\u09b8", y: "\u098f\u0995 \u09ac\u099b\u09b0", yy: "%d \u09ac\u099b\u09b0" }, preparse: function(e) { return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, function(e) { return ms[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return os[e] }) }, meridiemParse: /\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/, meridiemHour: function(e, a) { return 12 === e && (e = 0), "\u09b0\u09be\u09a4" === a && 4 <= e || "\u09a6\u09c1\u09aa\u09c1\u09b0" === a && e < 5 || "\u09ac\u09bf\u0995\u09be\u09b2" === a ? e + 12 : e }, meridiem: function(e, a, t) { return e < 4 ? "\u09b0\u09be\u09a4" : e < 10 ? "\u09b8\u0995\u09be\u09b2" : e < 17 ? "\u09a6\u09c1\u09aa\u09c1\u09b0" : e < 20 ? "\u09ac\u09bf\u0995\u09be\u09b2" : "\u09b0\u09be\u09a4" }, week: { dow: 0, doy: 6 } });
    var us = { 1: "\u0f21", 2: "\u0f22", 3: "\u0f23", 4: "\u0f24", 5: "\u0f25", 6: "\u0f26", 7: "\u0f27", 8: "\u0f28", 9: "\u0f29", 0: "\u0f20" },
        ls = { "\u0f21": "1", "\u0f22": "2", "\u0f23": "3", "\u0f24": "4", "\u0f25": "5", "\u0f26": "6", "\u0f27": "7", "\u0f28": "8", "\u0f29": "9", "\u0f20": "0" };

    function Ms(e, a, t) { var s, n, d; return e + " " + (s = { mm: "munutenn", MM: "miz", dd: "devezh" }[t], 2 !== e ? s : void 0 !== (d = { m: "v", b: "v", d: "z" })[(n = s).charAt(0)] ? d[n.charAt(0)] + n.substring(1) : n) }

    function hs(e, a, t) {
        var s = e + " ";
        switch (t) {
            case "ss":
                return s += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
            case "m":
                return a ? "jedna minuta" : "jedne minute";
            case "mm":
                return s += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
            case "h":
                return a ? "jedan sat" : "jednog sata";
            case "hh":
                return s += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
            case "dd":
                return s += 1 === e ? "dan" : "dana";
            case "MM":
                return s += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
            case "yy":
                return s += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
        }
    }
    l.defineLocale("bo", { months: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"), monthsShort: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"), weekdays: "\u0f42\u0f5f\u0f60\u0f0b\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f42\u0f5f\u0f60\u0f0b\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"), weekdaysShort: "\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"), weekdaysMin: "\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[\u0f51\u0f72\u0f0b\u0f62\u0f72\u0f44] LT", nextDay: "[\u0f66\u0f44\u0f0b\u0f49\u0f72\u0f53] LT", nextWeek: "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f62\u0f97\u0f7a\u0f66\u0f0b\u0f58], LT", lastDay: "[\u0f41\u0f0b\u0f66\u0f44] LT", lastWeek: "[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f58\u0f50\u0f60\u0f0b\u0f58] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0f63\u0f0b", past: "%s \u0f66\u0f94\u0f53\u0f0b\u0f63", s: "\u0f63\u0f58\u0f0b\u0f66\u0f44", ss: "%d \u0f66\u0f90\u0f62\u0f0b\u0f46\u0f0d", m: "\u0f66\u0f90\u0f62\u0f0b\u0f58\u0f0b\u0f42\u0f45\u0f72\u0f42", mm: "%d \u0f66\u0f90\u0f62\u0f0b\u0f58", h: "\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0b\u0f42\u0f45\u0f72\u0f42", hh: "%d \u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51", d: "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f45\u0f72\u0f42", dd: "%d \u0f49\u0f72\u0f53\u0f0b", M: "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f45\u0f72\u0f42", MM: "%d \u0f5f\u0fb3\u0f0b\u0f56", y: "\u0f63\u0f7c\u0f0b\u0f42\u0f45\u0f72\u0f42", yy: "%d \u0f63\u0f7c" }, preparse: function(e) { return e.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g, function(e) { return ls[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return us[e] }) }, meridiemParse: /\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/, meridiemHour: function(e, a) { return 12 === e && (e = 0), "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" === a && 4 <= e || "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" === a && e < 5 || "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" === a ? e + 12 : e }, meridiem: function(e, a, t) { return e < 4 ? "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" : e < 10 ? "\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66" : e < 17 ? "\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44" : e < 20 ? "\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42" : "\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c" }, week: { dow: 0, doy: 6 } }), l.defineLocale("br", {
        months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
        monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
        weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
        weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" },
        calendar: { sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L" },
        relativeTime: {
            future: "a-benn %s",
            past: "%s 'zo",
            s: "un nebeud segondenno\xf9",
            ss: "%d eilenn",
            m: "ur vunutenn",
            mm: Ms,
            h: "un eur",
            hh: "%d eur",
            d: "un devezh",
            dd: Ms,
            M: "ur miz",
            MM: Ms,
            y: "ur bloaz",
            yy: function(e) {
                switch (function e(a) { return 9 < a ? e(a % 10) : a }(e)) {
                    case 1:
                    case 3:
                    case 4:
                    case 5:
                    case 9:
                        return e + " bloaz";
                    default:
                        return e + " vloaz"
                }
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}(a\xf1|vet)/,
        ordinal: function(e) { return e + (1 === e ? "a\xf1" : "vet") },
        week: { dow: 1, doy: 4 }
    }), l.defineLocale("bs", {
        months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[ju\u010der u] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return "[pro\u0161lu] dddd [u] LT";
                    case 6:
                        return "[pro\u0161le] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[pro\u0161li] dddd [u] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", ss: hs, m: hs, mm: hs, h: hs, hh: hs, d: "dan", dd: hs, M: "mjesec", MM: hs, y: "godinu", yy: hs },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 }
    }), l.defineLocale("ca", { months: { standalone: "gener_febrer_mar\xe7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), format: "de gener_de febrer_de mar\xe7_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"), isFormat: /D[oD]?(\s)+MMMM/ }, monthsShort: "gen._febr._mar\xe7_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"), monthsParseExact: !0, weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", ll: "D MMM YYYY", LLL: "D MMMM [de] YYYY [a les] H:mm", lll: "D MMM YYYY, H:mm", LLLL: "dddd D MMMM [de] YYYY [a les] H:mm", llll: "ddd D MMM YYYY, H:mm" }, calendar: { sameDay: function() { return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextDay: function() { return "[dem\xe0 a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextWeek: function() { return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastDay: function() { return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastWeek: function() { return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, sameElse: "L" }, relativeTime: { future: "d'aqu\xed %s", past: "fa %s", s: "uns segons", ss: "%d segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|\xe8|a)/, ordinal: function(e, a) { var t = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "\xe8"; return "w" !== a && "W" !== a || (t = "a"), e + t }, week: { dow: 1, doy: 4 } });
    var Ls = "leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"),
        cs = "led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_"),
        Ys = [/^led/i, /^\xfano/i, /^b\u0159e/i, /^dub/i, /^kv\u011b/i, /^(\u010dvn|\u010derven$|\u010dervna)/i, /^(\u010dvc|\u010dervenec|\u010dervence)/i, /^srp/i, /^z\xe1\u0159/i, /^\u0159\xedj/i, /^lis/i, /^pro/i],
        ys = /^(leden|\xfanor|b\u0159ezen|duben|kv\u011bten|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|z\xe1\u0159\xed|\u0159\xedjen|listopad|prosinec|led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i;

    function fs(e) { return 1 < e && e < 5 && 1 != ~~(e / 10) }

    function ks(e, a, t, s) {
        var n = e + " ";
        switch (t) {
            case "s":
                return a || s ? "p\xe1r sekund" : "p\xe1r sekundami";
            case "ss":
                return a || s ? n + (fs(e) ? "sekundy" : "sekund") : n + "sekundami";
                break;
            case "m":
                return a ? "minuta" : s ? "minutu" : "minutou";
            case "mm":
                return a || s ? n + (fs(e) ? "minuty" : "minut") : n + "minutami";
                break;
            case "h":
                return a ? "hodina" : s ? "hodinu" : "hodinou";
            case "hh":
                return a || s ? n + (fs(e) ? "hodiny" : "hodin") : n + "hodinami";
                break;
            case "d":
                return a || s ? "den" : "dnem";
            case "dd":
                return a || s ? n + (fs(e) ? "dny" : "dn\xed") : n + "dny";
                break;
            case "M":
                return a || s ? "m\u011bs\xedc" : "m\u011bs\xedcem";
            case "MM":
                return a || s ? n + (fs(e) ? "m\u011bs\xedce" : "m\u011bs\xedc\u016f") : n + "m\u011bs\xedci";
                break;
            case "y":
                return a || s ? "rok" : "rokem";
            case "yy":
                return a || s ? n + (fs(e) ? "roky" : "let") : n + "lety";
                break
        }
    }

    function ps(e, a, t, s) { var n = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return a ? n[t][0] : n[t][1] }

    function Ds(e, a, t, s) { var n = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return a ? n[t][0] : n[t][1] }

    function Ts(e, a, t, s) { var n = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return a ? n[t][0] : n[t][1] }
    l.defineLocale("cs", {
        months: Ls,
        monthsShort: cs,
        monthsRegex: ys,
        monthsShortRegex: ys,
        monthsStrictRegex: /^(leden|ledna|\xfanora|\xfanor|b\u0159ezen|b\u0159ezna|duben|dubna|kv\u011bten|kv\u011btna|\u010dervenec|\u010dervence|\u010derven|\u010dervna|srpen|srpna|z\xe1\u0159\xed|\u0159\xedjen|\u0159\xedjna|listopadu|listopad|prosinec|prosince)/i,
        monthsShortStrictRegex: /^(led|\xfano|b\u0159e|dub|kv\u011b|\u010dvn|\u010dvc|srp|z\xe1\u0159|\u0159\xedj|lis|pro)/i,
        monthsParse: Ys,
        longMonthsParse: Ys,
        shortMonthsParse: Ys,
        weekdays: "ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split("_"),
        weekdaysShort: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),
        weekdaysMin: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),
        longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" },
        calendar: {
            sameDay: "[dnes v] LT",
            nextDay: "[z\xedtra v] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[v ned\u011bli v] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [v] LT";
                    case 3:
                        return "[ve st\u0159edu v] LT";
                    case 4:
                        return "[ve \u010dtvrtek v] LT";
                    case 5:
                        return "[v p\xe1tek v] LT";
                    case 6:
                        return "[v sobotu v] LT"
                }
            },
            lastDay: "[v\u010dera v] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[minulou ned\u011bli v] LT";
                    case 1:
                    case 2:
                        return "[minul\xe9] dddd [v] LT";
                    case 3:
                        return "[minulou st\u0159edu v] LT";
                    case 4:
                    case 5:
                        return "[minul\xfd] dddd [v] LT";
                    case 6:
                        return "[minulou sobotu v] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "za %s", past: "p\u0159ed %s", s: ks, ss: ks, m: ks, mm: ks, h: ks, hh: ks, d: ks, dd: ks, M: ks, MM: ks, y: ks, yy: ks },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 }
    }), l.defineLocale("cv", { months: "\u043a\u04d1\u0440\u043b\u0430\u0447_\u043d\u0430\u0440\u04d1\u0441_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440\u0442\u043c\u0435_\u0443\u0442\u04d1_\u04ab\u0443\u0440\u043b\u0430_\u0430\u0432\u04d1\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448\u0442\u0430\u0432".split("_"), monthsShort: "\u043a\u04d1\u0440_\u043d\u0430\u0440_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440_\u0443\u0442\u04d1_\u04ab\u0443\u0440_\u0430\u0432\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448".split("_"), weekdays: "\u0432\u044b\u0440\u0441\u0430\u0440\u043d\u0438\u043a\u0443\u043d_\u0442\u0443\u043d\u0442\u0438\u043a\u0443\u043d_\u044b\u0442\u043b\u0430\u0440\u0438\u043a\u0443\u043d_\u044e\u043d\u043a\u0443\u043d_\u043a\u04d7\u04ab\u043d\u0435\u0440\u043d\u0438\u043a\u0443\u043d_\u044d\u0440\u043d\u0435\u043a\u0443\u043d_\u0448\u04d1\u043c\u0430\u0442\u043a\u0443\u043d".split("_"), weekdaysShort: "\u0432\u044b\u0440_\u0442\u0443\u043d_\u044b\u0442\u043b_\u044e\u043d_\u043a\u04d7\u04ab_\u044d\u0440\u043d_\u0448\u04d1\u043c".split("_"), weekdaysMin: "\u0432\u0440_\u0442\u043d_\u044b\u0442_\u044e\u043d_\u043a\u04ab_\u044d\u0440_\u0448\u043c".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7]", LLL: "YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm", LLLL: "dddd, YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm" }, calendar: { sameDay: "[\u041f\u0430\u044f\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", nextDay: "[\u042b\u0440\u0430\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", lastDay: "[\u04d6\u043d\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", nextWeek: "[\u04aa\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", lastWeek: "[\u0418\u0440\u0442\u043d\u04d7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]", sameElse: "L" }, relativeTime: { future: function(e) { return e + (/\u0441\u0435\u0445\u0435\u0442$/i.exec(e) ? "\u0440\u0435\u043d" : /\u04ab\u0443\u043b$/i.exec(e) ? "\u0442\u0430\u043d" : "\u0440\u0430\u043d") }, past: "%s \u043a\u0430\u044f\u043b\u043b\u0430", s: "\u043f\u04d7\u0440-\u0438\u043a \u04ab\u0435\u043a\u043a\u0443\u043d\u0442", ss: "%d \u04ab\u0435\u043a\u043a\u0443\u043d\u0442", m: "\u043f\u04d7\u0440 \u043c\u0438\u043d\u0443\u0442", mm: "%d \u043c\u0438\u043d\u0443\u0442", h: "\u043f\u04d7\u0440 \u0441\u0435\u0445\u0435\u0442", hh: "%d \u0441\u0435\u0445\u0435\u0442", d: "\u043f\u04d7\u0440 \u043a\u0443\u043d", dd: "%d \u043a\u0443\u043d", M: "\u043f\u04d7\u0440 \u0443\u0439\u04d1\u0445", MM: "%d \u0443\u0439\u04d1\u0445", y: "\u043f\u04d7\u0440 \u04ab\u0443\u043b", yy: "%d \u04ab\u0443\u043b" }, dayOfMonthOrdinalParse: /\d{1,2}-\u043c\u04d7\u0448/, ordinal: "%d-\u043c\u04d7\u0448", week: { dow: 1, doy: 7 } }), l.defineLocale("cy", { months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L" }, relativeTime: { future: "mewn %s", past: "%s yn \xf4l", s: "ychydig eiliadau", ss: "%d eiliad", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" }, dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/, ordinal: function(e) { var a = ""; return 20 < e ? a = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : 0 < e && (a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + a }, week: { dow: 1, doy: 4 } }), l.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"), weekdaysShort: "s\xf8n_man_tir_ons_tor_fre_l\xf8r".split("_"), weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "p\xe5 dddd [kl.] LT", lastDay: "[i g\xe5r kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "f\xe5 sekunder", ss: "%d sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en m\xe5ned", MM: "%d m\xe5neder", y: "et \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("de-at", { months: "J\xe4nner_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "J\xe4n._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: ps, mm: "%d Minuten", h: ps, hh: "%d Stunden", d: ps, dd: ps, M: ps, MM: ps, y: ps, yy: ps }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("de-ch", { months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: Ds, mm: "%d Minuten", h: Ds, hh: "%d Stunden", d: Ds, dd: Ds, M: Ds, MM: Ds, y: Ds, yy: Ds }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("de", { months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: Ts, mm: "%d Minuten", h: Ts, hh: "%d Stunden", d: Ts, dd: Ts, M: Ts, MM: Ts, y: Ts, yy: Ts }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    var gs = ["\u0796\u07ac\u0782\u07aa\u0787\u07a6\u0783\u07a9", "\u078a\u07ac\u0784\u07b0\u0783\u07aa\u0787\u07a6\u0783\u07a9", "\u0789\u07a7\u0783\u07a8\u0797\u07aa", "\u0787\u07ad\u0795\u07b0\u0783\u07a9\u078d\u07aa", "\u0789\u07ad", "\u0796\u07ab\u0782\u07b0", "\u0796\u07aa\u078d\u07a6\u0787\u07a8", "\u0787\u07af\u078e\u07a6\u0790\u07b0\u0793\u07aa", "\u0790\u07ac\u0795\u07b0\u0793\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa", "\u0787\u07ae\u0786\u07b0\u0793\u07af\u0784\u07a6\u0783\u07aa", "\u0782\u07ae\u0788\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa", "\u0791\u07a8\u0790\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa"],
        ws = ["\u0787\u07a7\u078b\u07a8\u0787\u07b0\u078c\u07a6", "\u0780\u07af\u0789\u07a6", "\u0787\u07a6\u0782\u07b0\u078e\u07a7\u0783\u07a6", "\u0784\u07aa\u078b\u07a6", "\u0784\u07aa\u0783\u07a7\u0790\u07b0\u078a\u07a6\u078c\u07a8", "\u0780\u07aa\u0786\u07aa\u0783\u07aa", "\u0780\u07ae\u0782\u07a8\u0780\u07a8\u0783\u07aa"];
    l.defineLocale("dv", { months: gs, monthsShort: gs, weekdays: ws, weekdaysShort: ws, weekdaysMin: "\u0787\u07a7\u078b\u07a8_\u0780\u07af\u0789\u07a6_\u0787\u07a6\u0782\u07b0_\u0784\u07aa\u078b\u07a6_\u0784\u07aa\u0783\u07a7_\u0780\u07aa\u0786\u07aa_\u0780\u07ae\u0782\u07a8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0789\u0786|\u0789\u078a/, isPM: function(e) { return "\u0789\u078a" === e }, meridiem: function(e, a, t) { return e < 12 ? "\u0789\u0786" : "\u0789\u078a" }, calendar: { sameDay: "[\u0789\u07a8\u0787\u07a6\u078b\u07aa] LT", nextDay: "[\u0789\u07a7\u078b\u07a6\u0789\u07a7] LT", nextWeek: "dddd LT", lastDay: "[\u0787\u07a8\u0787\u07b0\u0794\u07ac] LT", lastWeek: "[\u078a\u07a7\u0787\u07a8\u078c\u07aa\u0788\u07a8] dddd LT", sameElse: "L" }, relativeTime: { future: "\u078c\u07ac\u0783\u07ad\u078e\u07a6\u0787\u07a8 %s", past: "\u0786\u07aa\u0783\u07a8\u0782\u07b0 %s", s: "\u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa\u0786\u07ae\u0785\u07ac\u0787\u07b0", ss: "d% \u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa", m: "\u0789\u07a8\u0782\u07a8\u0793\u07ac\u0787\u07b0", mm: "\u0789\u07a8\u0782\u07a8\u0793\u07aa %d", h: "\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07ac\u0787\u07b0", hh: "\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07aa %d", d: "\u078b\u07aa\u0788\u07a6\u0780\u07ac\u0787\u07b0", dd: "\u078b\u07aa\u0788\u07a6\u0790\u07b0 %d", M: "\u0789\u07a6\u0780\u07ac\u0787\u07b0", MM: "\u0789\u07a6\u0790\u07b0 %d", y: "\u0787\u07a6\u0780\u07a6\u0783\u07ac\u0787\u07b0", yy: "\u0787\u07a6\u0780\u07a6\u0783\u07aa %d" }, preparse: function(e) { return e.replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/,/g, "\u060c") }, week: { dow: 7, doy: 12 } }), l.defineLocale("el", {
        monthsNominativeEl: "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2_\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2_\u039c\u03ac\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2_\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2_\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2_\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split("_"),
        monthsGenitiveEl: "\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5_\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5_\u039c\u03b1\u0390\u03bf\u03c5_\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5_\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5_\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5_\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5_\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5".split("_"),
        months: function(e, a) { return e ? "string" == typeof a && /D/.test(a.substring(0, a.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl },
        monthsShort: "\u0399\u03b1\u03bd_\u03a6\u03b5\u03b2_\u039c\u03b1\u03c1_\u0391\u03c0\u03c1_\u039c\u03b1\u03ca_\u0399\u03bf\u03c5\u03bd_\u0399\u03bf\u03c5\u03bb_\u0391\u03c5\u03b3_\u03a3\u03b5\u03c0_\u039f\u03ba\u03c4_\u039d\u03bf\u03b5_\u0394\u03b5\u03ba".split("_"),
        weekdays: "\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae_\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1_\u03a4\u03c1\u03af\u03c4\u03b7_\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7_\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7_\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae_\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split("_"),
        weekdaysShort: "\u039a\u03c5\u03c1_\u0394\u03b5\u03c5_\u03a4\u03c1\u03b9_\u03a4\u03b5\u03c4_\u03a0\u03b5\u03bc_\u03a0\u03b1\u03c1_\u03a3\u03b1\u03b2".split("_"),
        weekdaysMin: "\u039a\u03c5_\u0394\u03b5_\u03a4\u03c1_\u03a4\u03b5_\u03a0\u03b5_\u03a0\u03b1_\u03a3\u03b1".split("_"),
        meridiem: function(e, a, t) { return 11 < e ? t ? "\u03bc\u03bc" : "\u039c\u039c" : t ? "\u03c0\u03bc" : "\u03a0\u039c" },
        isPM: function(e) { return "\u03bc" === (e + "").toLowerCase()[0] },
        meridiemParse: /[\u03a0\u039c]\.?\u039c?\.?/i,
        longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" },
        calendarEl: {
            sameDay: "[\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1 {}] LT",
            nextDay: "[\u0391\u03cd\u03c1\u03b9\u03bf {}] LT",
            nextWeek: "dddd [{}] LT",
            lastDay: "[\u03a7\u03b8\u03b5\u03c2 {}] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 6:
                        return "[\u03c4\u03bf \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf] dddd [{}] LT";
                    default:
                        return "[\u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7] dddd [{}] LT"
                }
            },
            sameElse: "L"
        },
        calendar: function(e, a) {
            var t = this._calendarEl[e],
                s = a && a.hours();
            return H(t) && (t = t.apply(a)), t.replace("{}", s % 12 == 1 ? "\u03c3\u03c4\u03b7" : "\u03c3\u03c4\u03b9\u03c2")
        },
        relativeTime: { future: "\u03c3\u03b5 %s", past: "%s \u03c0\u03c1\u03b9\u03bd", s: "\u03bb\u03af\u03b3\u03b1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1", ss: "%d \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1", m: "\u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc", mm: "%d \u03bb\u03b5\u03c0\u03c4\u03ac", h: "\u03bc\u03af\u03b1 \u03ce\u03c1\u03b1", hh: "%d \u03ce\u03c1\u03b5\u03c2", d: "\u03bc\u03af\u03b1 \u03bc\u03ad\u03c1\u03b1", dd: "%d \u03bc\u03ad\u03c1\u03b5\u03c2", M: "\u03ad\u03bd\u03b1\u03c2 \u03bc\u03ae\u03bd\u03b1\u03c2", MM: "%d \u03bc\u03ae\u03bd\u03b5\u03c2", y: "\u03ad\u03bd\u03b1\u03c2 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2", yy: "%d \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1" },
        dayOfMonthOrdinalParse: /\d{1,2}\u03b7/,
        ordinal: "%d\u03b7",
        week: { dow: 1, doy: 4 }
    }), l.defineLocale("en-SG", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), l.defineLocale("en-au", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), l.defineLocale("en-ca", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") } }), l.defineLocale("en-gb", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), l.defineLocale("en-ie", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), l.defineLocale("en-il", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") } }), l.defineLocale("en-nz", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), l.defineLocale("eo", { months: "januaro_februaro_marto_aprilo_majo_junio_julio_a\u016dgusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_a\u016dg_sep_okt_nov_dec".split("_"), weekdays: "diman\u0109o_lundo_mardo_merkredo_\u0135a\u016ddo_vendredo_sabato".split("_"), weekdaysShort: "dim_lun_mard_merk_\u0135a\u016d_ven_sab".split("_"), weekdaysMin: "di_lu_ma_me_\u0135a_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, meridiemParse: /[ap]\.t\.m/i, isPM: function(e) { return "p" === e.charAt(0).toLowerCase() }, meridiem: function(e, a, t) { return 11 < e ? t ? "p.t.m." : "P.T.M." : t ? "a.t.m." : "A.T.M." }, calendar: { sameDay: "[Hodia\u016d je] LT", nextDay: "[Morga\u016d je] LT", nextWeek: "dddd [je] LT", lastDay: "[Hiera\u016d je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L" }, relativeTime: { future: "post %s", past: "anta\u016d %s", s: "sekundoj", ss: "%d sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" }, dayOfMonthOrdinalParse: /\d{1,2}a/, ordinal: "%da", week: { dow: 1, doy: 7 } });
    var vs = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        Ss = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        Hs = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
        bs = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    l.defineLocale("es-do", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? Ss[e.month()] : vs[e.month()] : vs }, monthsRegex: bs, monthsShortRegex: bs, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: Hs, longMonthsParse: Hs, shortMonthsParse: Hs, weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un a\xf1o", yy: "%d a\xf1os" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } });
    var js = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        xs = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        Os = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
        Ps = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    l.defineLocale("es-us", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? xs[e.month()] : js[e.month()] : js }, monthsRegex: Ps, monthsShortRegex: Ps, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: Os, longMonthsParse: Os, shortMonthsParse: Os, weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un a\xf1o", yy: "%d a\xf1os" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 0, doy: 6 } });
    var Ws = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
        As = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
        Es = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
        Fs = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

    function zs(e, a, t, s) { var n = { s: ["m\xf5ne sekundi", "m\xf5ni sekund", "paar sekundit"], ss: [e + "sekundi", e + "sekundit"], m: ["\xfche minuti", "\xfcks minut"], mm: [e + " minuti", e + " minutit"], h: ["\xfche tunni", "tund aega", "\xfcks tund"], hh: [e + " tunni", e + " tundi"], d: ["\xfche p\xe4eva", "\xfcks p\xe4ev"], M: ["kuu aja", "kuu aega", "\xfcks kuu"], MM: [e + " kuu", e + " kuud"], y: ["\xfche aasta", "aasta", "\xfcks aasta"], yy: [e + " aasta", e + " aastat"] }; return a ? n[t][2] ? n[t][2] : n[t][1] : s ? n[t][0] : n[t][1] }
    l.defineLocale("es", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? As[e.month()] : Ws[e.month()] : Ws }, monthsRegex: Fs, monthsShortRegex: Fs, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: Es, longMonthsParse: Es, shortMonthsParse: Es, weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un a\xf1o", yy: "%d a\xf1os" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }), l.defineLocale("et", { months: "jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[T\xe4na,] LT", nextDay: "[Homme,] LT", nextWeek: "[J\xe4rgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L" }, relativeTime: { future: "%s p\xe4rast", past: "%s tagasi", s: zs, ss: zs, m: zs, mm: zs, h: zs, hh: zs, d: zs, dd: "%d p\xe4eva", M: zs, MM: zs, y: zs, yy: zs }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("eu", { months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), monthsParseExact: !0, weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, calendar: { sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", ss: "%d segundo", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
    var Js = { 1: "\u06f1", 2: "\u06f2", 3: "\u06f3", 4: "\u06f4", 5: "\u06f5", 6: "\u06f6", 7: "\u06f7", 8: "\u06f8", 9: "\u06f9", 0: "\u06f0" },
        Ns = { "\u06f1": "1", "\u06f2": "2", "\u06f3": "3", "\u06f4": "4", "\u06f5": "5", "\u06f6": "6", "\u06f7": "7", "\u06f8": "8", "\u06f9": "9", "\u06f0": "0" };
    l.defineLocale("fa", { months: "\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"), monthsShort: "\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"), weekdays: "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"), weekdaysShort: "\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"), weekdaysMin: "\u06cc_\u062f_\u0633_\u0686_\u067e_\u062c_\u0634".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/, isPM: function(e) { return /\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(e) }, meridiem: function(e, a, t) { return e < 12 ? "\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631" : "\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631" }, calendar: { sameDay: "[\u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT", nextDay: "[\u0641\u0631\u062f\u0627 \u0633\u0627\u0639\u062a] LT", nextWeek: "dddd [\u0633\u0627\u0639\u062a] LT", lastDay: "[\u062f\u06cc\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT", lastWeek: "dddd [\u067e\u06cc\u0634] [\u0633\u0627\u0639\u062a] LT", sameElse: "L" }, relativeTime: { future: "\u062f\u0631 %s", past: "%s \u067e\u06cc\u0634", s: "\u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647", ss: "\u062b\u0627\u0646\u06cc\u0647 d%", m: "\u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647", mm: "%d \u062f\u0642\u06cc\u0642\u0647", h: "\u06cc\u06a9 \u0633\u0627\u0639\u062a", hh: "%d \u0633\u0627\u0639\u062a", d: "\u06cc\u06a9 \u0631\u0648\u0632", dd: "%d \u0631\u0648\u0632", M: "\u06cc\u06a9 \u0645\u0627\u0647", MM: "%d \u0645\u0627\u0647", y: "\u06cc\u06a9 \u0633\u0627\u0644", yy: "%d \u0633\u0627\u0644" }, preparse: function(e) { return e.replace(/[\u06f0-\u06f9]/g, function(e) { return Ns[e] }).replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return Js[e] }).replace(/,/g, "\u060c") }, dayOfMonthOrdinalParse: /\d{1,2}\u0645/, ordinal: "%d\u0645", week: { dow: 6, doy: 12 } });
    var Rs = "nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(" "),
        Cs = ["nolla", "yhden", "kahden", "kolmen", "nelj\xe4n", "viiden", "kuuden", Rs[7], Rs[8], Rs[9]];

    function Is(e, a, t, s) {
        var n, d, r = "";
        switch (t) {
            case "s":
                return s ? "muutaman sekunnin" : "muutama sekunti";
            case "ss":
                return s ? "sekunnin" : "sekuntia";
            case "m":
                return s ? "minuutin" : "minuutti";
            case "mm":
                r = s ? "minuutin" : "minuuttia";
                break;
            case "h":
                return s ? "tunnin" : "tunti";
            case "hh":
                r = s ? "tunnin" : "tuntia";
                break;
            case "d":
                return s ? "p\xe4iv\xe4n" : "p\xe4iv\xe4";
            case "dd":
                r = s ? "p\xe4iv\xe4n" : "p\xe4iv\xe4\xe4";
                break;
            case "M":
                return s ? "kuukauden" : "kuukausi";
            case "MM":
                r = s ? "kuukauden" : "kuukautta";
                break;
            case "y":
                return s ? "vuoden" : "vuosi";
            case "yy":
                r = s ? "vuoden" : "vuotta";
                break
        }
        return d = s, r = ((n = e) < 10 ? d ? Cs[n] : Rs[n] : n) + " " + r
    }
    l.defineLocale("fi", { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] HH.mm", llll: "ddd, Do MMM YYYY, [klo] HH.mm" }, calendar: { sameDay: "[t\xe4n\xe4\xe4n] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s p\xe4\xe4st\xe4", past: "%s sitten", s: Is, ss: Is, m: Is, mm: Is, h: Is, hh: Is, d: Is, dd: Is, M: Is, MM: Is, y: Is, yy: Is }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("fo", { months: "januar_februar_mars_apr\xedl_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_m\xe1nadagur_t\xfdsdagur_mikudagur_h\xf3sdagur_fr\xedggjadagur_leygardagur".split("_"), weekdaysShort: "sun_m\xe1n_t\xfds_mik_h\xf3s_fr\xed_ley".split("_"), weekdaysMin: "su_m\xe1_t\xfd_mi_h\xf3_fr_le".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, calendar: { sameDay: "[\xcd dag kl.] LT", nextDay: "[\xcd morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[\xcd gj\xe1r kl.] LT", lastWeek: "[s\xed\xf0stu] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "um %s", past: "%s s\xed\xf0ani", s: "f\xe1 sekund", ss: "%d sekundir", m: "ein minuttur", mm: "%d minuttir", h: "ein t\xedmi", hh: "%d t\xedmar", d: "ein dagur", dd: "%d dagar", M: "ein m\xe1na\xf0ur", MM: "%d m\xe1na\xf0ir", y: "eitt \xe1r", yy: "%d \xe1r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("fr-ca", {
        months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
        monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
        calendar: { sameDay: "[Aujourd\u2019hui \xe0] LT", nextDay: "[Demain \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[Hier \xe0] LT", lastWeek: "dddd [dernier \xe0] LT", sameElse: "L" },
        relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function(e, a) {
            switch (a) {
                default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                    return e + (1 === e ? "er" : "e");
                case "w":
                        case "W":
                        return e + (1 === e ? "re" : "e")
            }
        }
    }), l.defineLocale("fr-ch", {
        months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
        monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
        calendar: { sameDay: "[Aujourd\u2019hui \xe0] LT", nextDay: "[Demain \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[Hier \xe0] LT", lastWeek: "dddd [dernier \xe0] LT", sameElse: "L" },
        relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function(e, a) {
            switch (a) {
                default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                    return e + (1 === e ? "er" : "e");
                case "w":
                        case "W":
                        return e + (1 === e ? "re" : "e")
            }
        },
        week: { dow: 1, doy: 4 }
    }), l.defineLocale("fr", {
        months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
        monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
        calendar: { sameDay: "[Aujourd\u2019hui \xe0] LT", nextDay: "[Demain \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[Hier \xe0] LT", lastWeek: "dddd [dernier \xe0] LT", sameElse: "L" },
        relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function(e, a) {
            switch (a) {
                case "D":
                    return e + (1 === e ? "er" : "");
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                    return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                    return e + (1 === e ? "re" : "e")
            }
        },
        week: { dow: 1, doy: 4 }
    });
    var Us = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
        Gs = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
    l.defineLocale("fy", { months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? Gs[e.month()] : Us[e.month()] : Us }, monthsParseExact: !0, weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[hjoed om] LT", nextDay: "[moarn om] LT", nextWeek: "dddd [om] LT", lastDay: "[juster om] LT", lastWeek: "[\xf4fr\xfbne] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", ss: "%d sekonden", m: "ien min\xfat", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de") }, week: { dow: 1, doy: 4 } });
    l.defineLocale("ga", { months: ["Ean\xe1ir", "Feabhra", "M\xe1rta", "Aibre\xe1n", "Bealtaine", "M\xe9itheamh", "I\xfail", "L\xfanasa", "Me\xe1n F\xf3mhair", "Deaireadh F\xf3mhair", "Samhain", "Nollaig"], monthsShort: ["Ean\xe1", "Feab", "M\xe1rt", "Aibr", "Beal", "M\xe9it", "I\xfail", "L\xfana", "Me\xe1n", "Deai", "Samh", "Noll"], monthsParseExact: !0, weekdays: ["D\xe9 Domhnaigh", "D\xe9 Luain", "D\xe9 M\xe1irt", "D\xe9 C\xe9adaoin", "D\xe9ardaoin", "D\xe9 hAoine", "D\xe9 Satharn"], weekdaysShort: ["Dom", "Lua", "M\xe1i", "C\xe9a", "D\xe9a", "hAo", "Sat"], weekdaysMin: ["Do", "Lu", "M\xe1", "Ce", "D\xe9", "hA", "Sa"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Inniu ag] LT", nextDay: "[Am\xe1rach ag] LT", nextWeek: "dddd [ag] LT", lastDay: "[Inn\xe9 aig] LT", lastWeek: "dddd [seo caite] [ag] LT", sameElse: "L" }, relativeTime: { future: "i %s", past: "%s \xf3 shin", s: "c\xfapla soicind", ss: "%d soicind", m: "n\xf3im\xe9ad", mm: "%d n\xf3im\xe9ad", h: "uair an chloig", hh: "%d uair an chloig", d: "l\xe1", dd: "%d l\xe1", M: "m\xed", MM: "%d m\xed", y: "bliain", yy: "%d bliain" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function(e) { return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh") }, week: { dow: 1, doy: 4 } });

    function Vs(e, a, t, s) { var n = { s: ["thodde secondanim", "thodde second"], ss: [e + " secondanim", e + " second"], m: ["eka mintan", "ek minute"], mm: [e + " mintanim", e + " mintam"], h: ["eka voran", "ek vor"], hh: [e + " voranim", e + " voram"], d: ["eka disan", "ek dis"], dd: [e + " disanim", e + " dis"], M: ["eka mhoinean", "ek mhoino"], MM: [e + " mhoineanim", e + " mhoine"], y: ["eka vorsan", "ek voros"], yy: [e + " vorsanim", e + " vorsam"] }; return a ? n[t][0] : n[t][1] }
    l.defineLocale("gd", { months: ["Am Faoilleach", "An Gearran", "Am M\xe0rt", "An Giblean", "An C\xe8itean", "An t-\xd2gmhios", "An t-Iuchar", "An L\xf9nastal", "An t-Sultain", "An D\xe0mhair", "An t-Samhain", "An D\xf9bhlachd"], monthsShort: ["Faoi", "Gear", "M\xe0rt", "Gibl", "C\xe8it", "\xd2gmh", "Iuch", "L\xf9n", "Sult", "D\xe0mh", "Samh", "D\xf9bh"], monthsParseExact: !0, weekdays: ["Did\xf2mhnaich", "Diluain", "Dim\xe0irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"], weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"], weekdaysMin: ["D\xf2", "Lu", "M\xe0", "Ci", "Ar", "Ha", "Sa"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[An-diugh aig] LT", nextDay: "[A-m\xe0ireach aig] LT", nextWeek: "dddd [aig] LT", lastDay: "[An-d\xe8 aig] LT", lastWeek: "dddd [seo chaidh] [aig] LT", sameElse: "L" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", ss: "%d diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "m\xecos", MM: "%d m\xecosan", y: "bliadhna", yy: "%d bliadhna" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function(e) { return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh") }, week: { dow: 1, doy: 4 } }), l.defineLocale("gl", { months: "xaneiro_febreiro_marzo_abril_maio_xu\xf1o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), monthsShort: "xan._feb._mar._abr._mai._xu\xf1._xul._ago._set._out._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "domingo_luns_martes_m\xe9rcores_xoves_venres_s\xe1bado".split("_"), weekdaysShort: "dom._lun._mar._m\xe9r._xov._ven._s\xe1b.".split("_"), weekdaysMin: "do_lu_ma_m\xe9_xo_ve_s\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function() { return "[hoxe " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT" }, nextDay: function() { return "[ma\xf1\xe1 " + (1 !== this.hours() ? "\xe1s" : "\xe1") + "] LT" }, nextWeek: function() { return "dddd [" + (1 !== this.hours() ? "\xe1s" : "a") + "] LT" }, lastDay: function() { return "[onte " + (1 !== this.hours() ? "\xe1" : "a") + "] LT" }, lastWeek: function() { return "[o] dddd [pasado " + (1 !== this.hours() ? "\xe1s" : "a") + "] LT" }, sameElse: "L" }, relativeTime: { future: function(e) { return 0 === e.indexOf("un") ? "n" + e : "en " + e }, past: "hai %s", s: "uns segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un d\xeda", dd: "%d d\xedas", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }), l.defineLocale("gom-latn", {
        months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
        monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
        weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
        weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" },
        calendar: { sameDay: "[Aiz] LT", nextDay: "[Faleam] LT", nextWeek: "[Ieta to] dddd[,] LT", lastDay: "[Kal] LT", lastWeek: "[Fatlo] dddd[,] LT", sameElse: "L" },
        relativeTime: { future: "%s", past: "%s adim", s: Vs, ss: Vs, m: Vs, mm: Vs, h: Vs, hh: Vs, d: Vs, dd: Vs, M: Vs, MM: Vs, y: Vs, yy: Vs },
        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
        ordinal: function(e, a) {
            switch (a) {
                case "D":
                    return e + "er";
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                case "w":
                case "W":
                    return e
            }
        },
        week: { dow: 1, doy: 4 },
        meridiemParse: /rati|sokalli|donparam|sanje/,
        meridiemHour: function(e, a) { return 12 === e && (e = 0), "rati" === a ? e < 4 ? e : e + 12 : "sokalli" === a ? e : "donparam" === a ? 12 < e ? e : e + 12 : "sanje" === a ? e + 12 : void 0 },
        meridiem: function(e, a, t) { return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati" }
    });
    var Ks = { 1: "\u0ae7", 2: "\u0ae8", 3: "\u0ae9", 4: "\u0aea", 5: "\u0aeb", 6: "\u0aec", 7: "\u0aed", 8: "\u0aee", 9: "\u0aef", 0: "\u0ae6" },
        Zs = { "\u0ae7": "1", "\u0ae8": "2", "\u0ae9": "3", "\u0aea": "4", "\u0aeb": "5", "\u0aec": "6", "\u0aed": "7", "\u0aee": "8", "\u0aef": "9", "\u0ae6": "0" };
    l.defineLocale("gu", { months: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0_\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0_\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2_\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe\u0a88_\u0a91\u0a97\u0ab8\u0acd\u0a9f_\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0a91\u0a95\u0acd\u0a9f\u0acd\u0aac\u0ab0_\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0".split("_"), monthsShort: "\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1._\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1._\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf._\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe._\u0a91\u0a97._\u0ab8\u0aaa\u0acd\u0a9f\u0ac7._\u0a91\u0a95\u0acd\u0a9f\u0acd._\u0aa8\u0ab5\u0ac7._\u0aa1\u0abf\u0ab8\u0ac7.".split("_"), monthsParseExact: !0, weekdays: "\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0_\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0_\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0_\u0aac\u0ac1\u0aa7\u0acd\u0ab5\u0abe\u0ab0_\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0_\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0_\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0".split("_"), weekdaysShort: "\u0ab0\u0ab5\u0abf_\u0ab8\u0acb\u0aae_\u0aae\u0a82\u0a97\u0ab3_\u0aac\u0ac1\u0aa7\u0acd_\u0a97\u0ac1\u0ab0\u0ac1_\u0ab6\u0ac1\u0a95\u0acd\u0ab0_\u0ab6\u0aa8\u0abf".split("_"), weekdaysMin: "\u0ab0_\u0ab8\u0acb_\u0aae\u0a82_\u0aac\u0ac1_\u0a97\u0ac1_\u0ab6\u0ac1_\u0ab6".split("_"), longDateFormat: { LT: "A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7", LTS: "A h:mm:ss \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7", LLLL: "dddd, D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7" }, calendar: { sameDay: "[\u0a86\u0a9c] LT", nextDay: "[\u0a95\u0abe\u0ab2\u0ac7] LT", nextWeek: "dddd, LT", lastDay: "[\u0a97\u0a87\u0a95\u0abe\u0ab2\u0ac7] LT", lastWeek: "[\u0aaa\u0abe\u0a9b\u0ab2\u0abe] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0aae\u0abe", past: "%s \u0aaa\u0ac7\u0ab9\u0ab2\u0abe", s: "\u0a85\u0aae\u0ac1\u0a95 \u0aaa\u0ab3\u0acb", ss: "%d \u0ab8\u0ac7\u0a95\u0a82\u0aa1", m: "\u0a8f\u0a95 \u0aae\u0abf\u0aa8\u0abf\u0a9f", mm: "%d \u0aae\u0abf\u0aa8\u0abf\u0a9f", h: "\u0a8f\u0a95 \u0a95\u0ab2\u0abe\u0a95", hh: "%d \u0a95\u0ab2\u0abe\u0a95", d: "\u0a8f\u0a95 \u0aa6\u0abf\u0ab5\u0ab8", dd: "%d \u0aa6\u0abf\u0ab5\u0ab8", M: "\u0a8f\u0a95 \u0aae\u0ab9\u0abf\u0aa8\u0acb", MM: "%d \u0aae\u0ab9\u0abf\u0aa8\u0acb", y: "\u0a8f\u0a95 \u0ab5\u0ab0\u0acd\u0ab7", yy: "%d \u0ab5\u0ab0\u0acd\u0ab7" }, preparse: function(e) { return e.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g, function(e) { return Zs[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return Ks[e] }) }, meridiemParse: /\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/, meridiemHour: function(e, a) { return 12 === e && (e = 0), "\u0ab0\u0abe\u0aa4" === a ? e < 4 ? e : e + 12 : "\u0ab8\u0ab5\u0abe\u0ab0" === a ? e : "\u0aac\u0aaa\u0acb\u0ab0" === a ? 10 <= e ? e : e + 12 : "\u0ab8\u0abe\u0a82\u0a9c" === a ? e + 12 : void 0 }, meridiem: function(e, a, t) { return e < 4 ? "\u0ab0\u0abe\u0aa4" : e < 10 ? "\u0ab8\u0ab5\u0abe\u0ab0" : e < 17 ? "\u0aac\u0aaa\u0acb\u0ab0" : e < 20 ? "\u0ab8\u0abe\u0a82\u0a9c" : "\u0ab0\u0abe\u0aa4" }, week: { dow: 0, doy: 6 } }), l.defineLocale("he", { months: "\u05d9\u05e0\u05d5\u05d0\u05e8_\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05d9\u05dc_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8_\u05e1\u05e4\u05d8\u05de\u05d1\u05e8_\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8_\u05e0\u05d5\u05d1\u05de\u05d1\u05e8_\u05d3\u05e6\u05de\u05d1\u05e8".split("_"), monthsShort: "\u05d9\u05e0\u05d5\u05f3_\u05e4\u05d1\u05e8\u05f3_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05f3_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05f3_\u05e1\u05e4\u05d8\u05f3_\u05d0\u05d5\u05e7\u05f3_\u05e0\u05d5\u05d1\u05f3_\u05d3\u05e6\u05de\u05f3".split("_"), weekdays: "\u05e8\u05d0\u05e9\u05d5\u05df_\u05e9\u05e0\u05d9_\u05e9\u05dc\u05d9\u05e9\u05d9_\u05e8\u05d1\u05d9\u05e2\u05d9_\u05d7\u05de\u05d9\u05e9\u05d9_\u05e9\u05d9\u05e9\u05d9_\u05e9\u05d1\u05ea".split("_"), weekdaysShort: "\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5\u05f3_\u05e9\u05f3".split("_"), weekdaysMin: "\u05d0_\u05d1_\u05d2_\u05d3_\u05d4_\u05d5_\u05e9".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [\u05d1]MMMM YYYY", LLL: "D [\u05d1]MMMM YYYY HH:mm", LLLL: "dddd, D [\u05d1]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[\u05d4\u05d9\u05d5\u05dd \u05d1\u05be]LT", nextDay: "[\u05de\u05d7\u05e8 \u05d1\u05be]LT", nextWeek: "dddd [\u05d1\u05e9\u05e2\u05d4] LT", lastDay: "[\u05d0\u05ea\u05de\u05d5\u05dc \u05d1\u05be]LT", lastWeek: "[\u05d1\u05d9\u05d5\u05dd] dddd [\u05d4\u05d0\u05d7\u05e8\u05d5\u05df \u05d1\u05e9\u05e2\u05d4] LT", sameElse: "L" }, relativeTime: { future: "\u05d1\u05e2\u05d5\u05d3 %s", past: "\u05dc\u05e4\u05e0\u05d9 %s", s: "\u05de\u05e1\u05e4\u05e8 \u05e9\u05e0\u05d9\u05d5\u05ea", ss: "%d \u05e9\u05e0\u05d9\u05d5\u05ea", m: "\u05d3\u05e7\u05d4", mm: "%d \u05d3\u05e7\u05d5\u05ea", h: "\u05e9\u05e2\u05d4", hh: function(e) { return 2 === e ? "\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd" : e + " \u05e9\u05e2\u05d5\u05ea" }, d: "\u05d9\u05d5\u05dd", dd: function(e) { return 2 === e ? "\u05d9\u05d5\u05de\u05d9\u05d9\u05dd" : e + " \u05d9\u05de\u05d9\u05dd" }, M: "\u05d7\u05d5\u05d3\u05e9", MM: function(e) { return 2 === e ? "\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd" : e + " \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd" }, y: "\u05e9\u05e0\u05d4", yy: function(e) { return 2 === e ? "\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd" : e % 10 == 0 && 10 !== e ? e + " \u05e9\u05e0\u05d4" : e + " \u05e9\u05e0\u05d9\u05dd" } }, meridiemParse: /\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i, isPM: function(e) { return /^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(e) }, meridiem: function(e, a, t) { return e < 5 ? "\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8" : e < 10 ? "\u05d1\u05d1\u05d5\u05e7\u05e8" : e < 12 ? t ? '\u05dc\u05e4\u05e0\u05d4"\u05e6' : "\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd" : e < 18 ? t ? '\u05d0\u05d7\u05d4"\u05e6' : "\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd" : "\u05d1\u05e2\u05e8\u05d1" } });
    var $s = { 1: "\u0967", 2: "\u0968", 3: "\u0969", 4: "\u096a", 5: "\u096b", 6: "\u096c", 7: "\u096d", 8: "\u096e", 9: "\u096f", 0: "\u0966" },
        Bs = { "\u0967": "1", "\u0968": "2", "\u0969": "3", "\u096a": "4", "\u096b": "5", "\u096c": "6", "\u096d": "7", "\u096e": "8", "\u096f": "9", "\u0966": "0" };

    function qs(e, a, t) {
        var s = e + " ";
        switch (t) {
            case "ss":
                return s += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
            case "m":
                return a ? "jedna minuta" : "jedne minute";
            case "mm":
                return s += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
            case "h":
                return a ? "jedan sat" : "jednog sata";
            case "hh":
                return s += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
            case "dd":
                return s += 1 === e ? "dan" : "dana";
            case "MM":
                return s += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
            case "yy":
                return s += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
        }
    }
    l.defineLocale("hi", { months: "\u091c\u0928\u0935\u0930\u0940_\u092b\u093c\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u092e\u094d\u092c\u0930_\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split("_"), monthsShort: "\u091c\u0928._\u092b\u093c\u0930._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948._\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0905\u0917._\u0938\u093f\u0924._\u0905\u0915\u094d\u091f\u0942._\u0928\u0935._\u0926\u093f\u0938.".split("_"), monthsParseExact: !0, weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0932\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"), weekdaysShort: "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0932_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"), weekdaysMin: "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"), longDateFormat: { LT: "A h:mm \u092c\u091c\u0947", LTS: "A h:mm:ss \u092c\u091c\u0947", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u092c\u091c\u0947", LLLL: "dddd, D MMMM YYYY, A h:mm \u092c\u091c\u0947" }, calendar: { sameDay: "[\u0906\u091c] LT", nextDay: "[\u0915\u0932] LT", nextWeek: "dddd, LT", lastDay: "[\u0915\u0932] LT", lastWeek: "[\u092a\u093f\u091b\u0932\u0947] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u092e\u0947\u0902", past: "%s \u092a\u0939\u0932\u0947", s: "\u0915\u0941\u091b \u0939\u0940 \u0915\u094d\u0937\u0923", ss: "%d \u0938\u0947\u0915\u0902\u0921", m: "\u090f\u0915 \u092e\u093f\u0928\u091f", mm: "%d \u092e\u093f\u0928\u091f", h: "\u090f\u0915 \u0918\u0902\u091f\u093e", hh: "%d \u0918\u0902\u091f\u0947", d: "\u090f\u0915 \u0926\u093f\u0928", dd: "%d \u0926\u093f\u0928", M: "\u090f\u0915 \u092e\u0939\u0940\u0928\u0947", MM: "%d \u092e\u0939\u0940\u0928\u0947", y: "\u090f\u0915 \u0935\u0930\u094d\u0937", yy: "%d \u0935\u0930\u094d\u0937" }, preparse: function(e) { return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) { return Bs[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return $s[e] }) }, meridiemParse: /\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/, meridiemHour: function(e, a) { return 12 === e && (e = 0), "\u0930\u093e\u0924" === a ? e < 4 ? e : e + 12 : "\u0938\u0941\u092c\u0939" === a ? e : "\u0926\u094b\u092a\u0939\u0930" === a ? 10 <= e ? e : e + 12 : "\u0936\u093e\u092e" === a ? e + 12 : void 0 }, meridiem: function(e, a, t) { return e < 4 ? "\u0930\u093e\u0924" : e < 10 ? "\u0938\u0941\u092c\u0939" : e < 17 ? "\u0926\u094b\u092a\u0939\u0930" : e < 20 ? "\u0936\u093e\u092e" : "\u0930\u093e\u0924" }, week: { dow: 0, doy: 6 } }), l.defineLocale("hr", {
        months: { format: "sije\u010dnja_velja\u010de_o\u017eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), standalone: "sije\u010danj_velja\u010da_o\u017eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_") },
        monthsShort: "sij._velj._o\u017eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[ju\u010der u] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return "[pro\u0161lu] dddd [u] LT";
                    case 6:
                        return "[pro\u0161le] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[pro\u0161li] dddd [u] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", ss: qs, m: qs, mm: qs, h: qs, hh: qs, d: "dan", dd: qs, M: "mjesec", MM: qs, y: "godinu", yy: qs },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 }
    });
    var Qs = "vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(" ");

    function Xs(e, a, t, s) {
        var n = e;
        switch (t) {
            case "s":
                return s || a ? "n\xe9h\xe1ny m\xe1sodperc" : "n\xe9h\xe1ny m\xe1sodperce";
            case "ss":
                return n + (s || a) ? " m\xe1sodperc" : " m\xe1sodperce";
            case "m":
                return "egy" + (s || a ? " perc" : " perce");
            case "mm":
                return n + (s || a ? " perc" : " perce");
            case "h":
                return "egy" + (s || a ? " \xf3ra" : " \xf3r\xe1ja");
            case "hh":
                return n + (s || a ? " \xf3ra" : " \xf3r\xe1ja");
            case "d":
                return "egy" + (s || a ? " nap" : " napja");
            case "dd":
                return n + (s || a ? " nap" : " napja");
            case "M":
                return "egy" + (s || a ? " h\xf3nap" : " h\xf3napja");
            case "MM":
                return n + (s || a ? " h\xf3nap" : " h\xf3napja");
            case "y":
                return "egy" + (s || a ? " \xe9v" : " \xe9ve");
            case "yy":
                return n + (s || a ? " \xe9v" : " \xe9ve")
        }
        return ""
    }

    function en(e) { return (e ? "" : "[m\xfalt] ") + "[" + Qs[this.day()] + "] LT[-kor]" }

    function an(e) { return e % 100 == 11 || e % 10 != 1 }

    function tn(e, a, t, s) {
        var n = e + " ";
        switch (t) {
            case "s":
                return a || s ? "nokkrar sek\xfandur" : "nokkrum sek\xfandum";
            case "ss":
                return an(e) ? n + (a || s ? "sek\xfandur" : "sek\xfandum") : n + "sek\xfanda";
            case "m":
                return a ? "m\xedn\xfata" : "m\xedn\xfatu";
            case "mm":
                return an(e) ? n + (a || s ? "m\xedn\xfatur" : "m\xedn\xfatum") : a ? n + "m\xedn\xfata" : n + "m\xedn\xfatu";
            case "hh":
                return an(e) ? n + (a || s ? "klukkustundir" : "klukkustundum") : n + "klukkustund";
            case "d":
                return a ? "dagur" : s ? "dag" : "degi";
            case "dd":
                return an(e) ? a ? n + "dagar" : n + (s ? "daga" : "d\xf6gum") : a ? n + "dagur" : n + (s ? "dag" : "degi");
            case "M":
                return a ? "m\xe1nu\xf0ur" : s ? "m\xe1nu\xf0" : "m\xe1nu\xf0i";
            case "MM":
                return an(e) ? a ? n + "m\xe1nu\xf0ir" : n + (s ? "m\xe1nu\xf0i" : "m\xe1nu\xf0um") : a ? n + "m\xe1nu\xf0ur" : n + (s ? "m\xe1nu\xf0" : "m\xe1nu\xf0i");
            case "y":
                return a || s ? "\xe1r" : "\xe1ri";
            case "yy":
                return an(e) ? n + (a || s ? "\xe1r" : "\xe1rum") : n + (a || s ? "\xe1r" : "\xe1ri")
        }
    }
    l.defineLocale("hu", { months: "janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"), monthsShort: "jan_feb_m\xe1rc_\xe1pr_m\xe1j_j\xfan_j\xfal_aug_szept_okt_nov_dec".split("_"), weekdays: "vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"), weekdaysShort: "vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" }, meridiemParse: /de|du/i, isPM: function(e) { return "u" === e.charAt(1).toLowerCase() }, meridiem: function(e, a, t) { return e < 12 ? !0 === t ? "de" : "DE" : !0 === t ? "du" : "DU" }, calendar: { sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function() { return en.call(this, !0) }, lastDay: "[tegnap] LT[-kor]", lastWeek: function() { return en.call(this, !1) }, sameElse: "L" }, relativeTime: { future: "%s m\xfalva", past: "%s", s: Xs, ss: Xs, m: Xs, mm: Xs, h: Xs, hh: Xs, d: Xs, dd: Xs, M: Xs, MM: Xs, y: Xs, yy: Xs }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("hy-am", {
        months: { format: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b_\u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b_\u0574\u0561\u0580\u057f\u056b_\u0561\u057a\u0580\u056b\u056c\u056b_\u0574\u0561\u0575\u056b\u057d\u056b_\u0570\u0578\u0582\u0576\u056b\u057d\u056b_\u0570\u0578\u0582\u056c\u056b\u057d\u056b_\u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b".split("_"), standalone: "\u0570\u0578\u0582\u0576\u057e\u0561\u0580_\u0583\u0565\u057f\u0580\u057e\u0561\u0580_\u0574\u0561\u0580\u057f_\u0561\u057a\u0580\u056b\u056c_\u0574\u0561\u0575\u056b\u057d_\u0570\u0578\u0582\u0576\u056b\u057d_\u0570\u0578\u0582\u056c\u056b\u057d_\u0585\u0563\u0578\u057d\u057f\u0578\u057d_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580".split("_") },
        monthsShort: "\u0570\u0576\u057e_\u0583\u057f\u0580_\u0574\u0580\u057f_\u0561\u057a\u0580_\u0574\u0575\u057d_\u0570\u0576\u057d_\u0570\u056c\u057d_\u0585\u0563\u057d_\u057d\u057a\u057f_\u0570\u056f\u057f_\u0576\u0574\u0562_\u0564\u056f\u057f".split("_"),
        weekdays: "\u056f\u056b\u0580\u0561\u056f\u056b_\u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b_\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b_\u0578\u0582\u0580\u0562\u0561\u0569_\u0577\u0561\u0562\u0561\u0569".split("_"),
        weekdaysShort: "\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),
        weekdaysMin: "\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0569.", LLL: "D MMMM YYYY \u0569., HH:mm", LLLL: "dddd, D MMMM YYYY \u0569., HH:mm" },
        calendar: { sameDay: "[\u0561\u0575\u057d\u0585\u0580] LT", nextDay: "[\u057e\u0561\u0572\u0568] LT", lastDay: "[\u0565\u0580\u0565\u056f] LT", nextWeek: function() { return "dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT" }, lastWeek: function() { return "[\u0561\u0576\u0581\u0561\u056e] dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT" }, sameElse: "L" },
        relativeTime: { future: "%s \u0570\u0565\u057f\u0578", past: "%s \u0561\u057c\u0561\u057b", s: "\u0574\u056b \u0584\u0561\u0576\u056b \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576", ss: "%d \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576", m: "\u0580\u0578\u057a\u0565", mm: "%d \u0580\u0578\u057a\u0565", h: "\u056a\u0561\u0574", hh: "%d \u056a\u0561\u0574", d: "\u0585\u0580", dd: "%d \u0585\u0580", M: "\u0561\u0574\u056b\u057d", MM: "%d \u0561\u0574\u056b\u057d", y: "\u057f\u0561\u0580\u056b", yy: "%d \u057f\u0561\u0580\u056b" },
        meridiemParse: /\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/,
        isPM: function(e) { return /^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(e) },
        meridiem: function(e) { return e < 4 ? "\u0563\u056b\u0577\u0565\u0580\u057e\u0561" : e < 12 ? "\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561" : e < 17 ? "\u0581\u0565\u0580\u0565\u056f\u057e\u0561" : "\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576" },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/,
        ordinal: function(e, a) {
            switch (a) {
                case "DDD":
                case "w":
                case "W":
                case "DDDo":
                    return 1 === e ? e + "-\u056b\u0576" : e + "-\u0580\u0564";
                default:
                    return e
            }
        },
        week: { dow: 1, doy: 7 }
    }), l.defineLocale("id", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|siang|sore|malam/, meridiemHour: function(e, a) { return 12 === e && (e = 0), "pagi" === a ? e : "siang" === a ? 11 <= e ? e : e + 12 : "sore" === a || "malam" === a ? e + 12 : void 0 }, meridiem: function(e, a, t) { return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", ss: "%d detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }), l.defineLocale("is", { months: "jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"), monthsShort: "jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"), weekdays: "sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"), weekdaysShort: "sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"), weekdaysMin: "Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, calendar: { sameDay: "[\xed dag kl.] LT", nextDay: "[\xe1 morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[\xed g\xe6r kl.] LT", lastWeek: "[s\xed\xf0asta] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "eftir %s", past: "fyrir %s s\xed\xf0an", s: tn, ss: tn, m: tn, mm: tn, h: "klukkustund", hh: tn, d: tn, dd: tn, M: tn, MM: tn, y: tn, yy: tn }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("it-ch", {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
        calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[la scorsa] dddd [alle] LT";
                    default:
                        return "[lo scorso] dddd [alle] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: function(e) { return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e }, past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\xba",
        week: { dow: 1, doy: 4 }
    }), l.defineLocale("it", {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" },
        calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[la scorsa] dddd [alle] LT";
                    default:
                        return "[lo scorso] dddd [alle] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: function(e) { return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e }, past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" },
        dayOfMonthOrdinalParse: /\d{1,2}\xba/,
        ordinal: "%d\xba",
        week: { dow: 1, doy: 4 }
    }), l.defineLocale("ja", {
        months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
        monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        weekdays: "\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split("_"),
        weekdaysShort: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
        weekdaysMin: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5e74M\u6708D\u65e5", LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm", LLLL: "YYYY\u5e74M\u6708D\u65e5 dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYY\u5e74M\u6708D\u65e5", lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm", llll: "YYYY\u5e74M\u6708D\u65e5(ddd) HH:mm" },
        meridiemParse: /\u5348\u524d|\u5348\u5f8c/i,
        isPM: function(e) { return "\u5348\u5f8c" === e },
        meridiem: function(e, a, t) { return e < 12 ? "\u5348\u524d" : "\u5348\u5f8c" },
        calendar: { sameDay: "[\u4eca\u65e5] LT", nextDay: "[\u660e\u65e5] LT", nextWeek: function(e) { return e.week() < this.week() ? "[\u6765\u9031]dddd LT" : "dddd LT" }, lastDay: "[\u6628\u65e5] LT", lastWeek: function(e) { return this.week() < e.week() ? "[\u5148\u9031]dddd LT" : "dddd LT" }, sameElse: "L" },
        dayOfMonthOrdinalParse: /\d{1,2}\u65e5/,
        ordinal: function(e, a) {
            switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + "\u65e5";
                default:
                    return e
            }
        },
        relativeTime: { future: "%s\u5f8c", past: "%s\u524d", s: "\u6570\u79d2", ss: "%d\u79d2", m: "1\u5206", mm: "%d\u5206", h: "1\u6642\u9593", hh: "%d\u6642\u9593", d: "1\u65e5", dd: "%d\u65e5", M: "1\u30f6\u6708", MM: "%d\u30f6\u6708", y: "1\u5e74", yy: "%d\u5e74" }
    }), l.defineLocale("jv", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /enjing|siyang|sonten|ndalu/, meridiemHour: function(e, a) { return 12 === e && (e = 0), "enjing" === a ? e : "siyang" === a ? 11 <= e ? e : e + 12 : "sonten" === a || "ndalu" === a ? e + 12 : void 0 }, meridiem: function(e, a, t) { return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu" }, calendar: { sameDay: "[Dinten puniko pukul] LT", nextDay: "[Mbenjang pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kala wingi pukul] LT", lastWeek: "dddd [kepengker pukul] LT", sameElse: "L" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", ss: "%d detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" }, week: { dow: 1, doy: 7 } }), l.defineLocale("ka", { months: { standalone: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8_\u10db\u10d0\u10e0\u10e2\u10d8_\u10d0\u10de\u10e0\u10d8\u10da\u10d8_\u10db\u10d0\u10d8\u10e1\u10d8_\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8_\u10d8\u10d5\u10da\u10d8\u10e1\u10d8_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8".split("_"), format: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10e1_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10e1_\u10db\u10d0\u10e0\u10e2\u10e1_\u10d0\u10de\u10e0\u10d8\u10da\u10d8\u10e1_\u10db\u10d0\u10d8\u10e1\u10e1_\u10d8\u10d5\u10dc\u10d8\u10e1\u10e1_\u10d8\u10d5\u10da\u10d8\u10e1\u10e1_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10e1_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10e1_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10e1".split("_") }, monthsShort: "\u10d8\u10d0\u10dc_\u10d7\u10d4\u10d1_\u10db\u10d0\u10e0_\u10d0\u10de\u10e0_\u10db\u10d0\u10d8_\u10d8\u10d5\u10dc_\u10d8\u10d5\u10da_\u10d0\u10d2\u10d5_\u10e1\u10d4\u10e5_\u10dd\u10e5\u10e2_\u10dc\u10dd\u10d4_\u10d3\u10d4\u10d9".split("_"), weekdays: { standalone: "\u10d9\u10d5\u10d8\u10e0\u10d0_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8_\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8".split("_"), format: "\u10d9\u10d5\u10d8\u10e0\u10d0\u10e1_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10e1_\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1".split("_"), isFormat: /(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/ }, weekdaysShort: "\u10d9\u10d5\u10d8_\u10dd\u10e0\u10e8_\u10e1\u10d0\u10db_\u10dd\u10d7\u10ee_\u10ee\u10e3\u10d7_\u10de\u10d0\u10e0_\u10e8\u10d0\u10d1".split("_"), weekdaysMin: "\u10d9\u10d5_\u10dd\u10e0_\u10e1\u10d0_\u10dd\u10d7_\u10ee\u10e3_\u10de\u10d0_\u10e8\u10d0".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[\u10d3\u10e6\u10d4\u10e1] LT[-\u10d6\u10d4]", nextDay: "[\u10ee\u10d5\u10d0\u10da] LT[-\u10d6\u10d4]", lastDay: "[\u10d2\u10e3\u10e8\u10d8\u10dc] LT[-\u10d6\u10d4]", nextWeek: "[\u10e8\u10d4\u10db\u10d3\u10d4\u10d2] dddd LT[-\u10d6\u10d4]", lastWeek: "[\u10ec\u10d8\u10dc\u10d0] dddd LT-\u10d6\u10d4", sameElse: "L" }, relativeTime: { future: function(e) { return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10ec\u10d4\u10da\u10d8)/.test(e) ? e.replace(/\u10d8$/, "\u10e8\u10d8") : e + "\u10e8\u10d8" }, past: function(e) { return /(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(e) ? e.replace(/(\u10d8|\u10d4)$/, "\u10d8\u10e1 \u10ec\u10d8\u10dc") : /\u10ec\u10d4\u10da\u10d8/.test(e) ? e.replace(/\u10ec\u10d4\u10da\u10d8$/, "\u10ec\u10da\u10d8\u10e1 \u10ec\u10d8\u10dc") : void 0 }, s: "\u10e0\u10d0\u10db\u10d3\u10d4\u10dc\u10d8\u10db\u10d4 \u10ec\u10d0\u10db\u10d8", ss: "%d \u10ec\u10d0\u10db\u10d8", m: "\u10ec\u10e3\u10d7\u10d8", mm: "%d \u10ec\u10e3\u10d7\u10d8", h: "\u10e1\u10d0\u10d0\u10d7\u10d8", hh: "%d \u10e1\u10d0\u10d0\u10d7\u10d8", d: "\u10d3\u10e6\u10d4", dd: "%d \u10d3\u10e6\u10d4", M: "\u10d7\u10d5\u10d4", MM: "%d \u10d7\u10d5\u10d4", y: "\u10ec\u10d4\u10da\u10d8", yy: "%d \u10ec\u10d4\u10da\u10d8" }, dayOfMonthOrdinalParse: /0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/, ordinal: function(e) { return 0 === e ? e : 1 === e ? e + "-\u10da\u10d8" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "\u10db\u10d4-" + e : e + "-\u10d4" }, week: { dow: 1, doy: 7 } });
    var sn = { 0: "-\u0448\u0456", 1: "-\u0448\u0456", 2: "-\u0448\u0456", 3: "-\u0448\u0456", 4: "-\u0448\u0456", 5: "-\u0448\u0456", 6: "-\u0448\u044b", 7: "-\u0448\u0456", 8: "-\u0448\u0456", 9: "-\u0448\u044b", 10: "-\u0448\u044b", 20: "-\u0448\u044b", 30: "-\u0448\u044b", 40: "-\u0448\u044b", 50: "-\u0448\u0456", 60: "-\u0448\u044b", 70: "-\u0448\u0456", 80: "-\u0448\u0456", 90: "-\u0448\u044b", 100: "-\u0448\u0456" };
    l.defineLocale("kk", { months: "\u049b\u0430\u04a3\u0442\u0430\u0440_\u0430\u049b\u043f\u0430\u043d_\u043d\u0430\u0443\u0440\u044b\u0437_\u0441\u04d9\u0443\u0456\u0440_\u043c\u0430\u043c\u044b\u0440_\u043c\u0430\u0443\u0441\u044b\u043c_\u0448\u0456\u043b\u0434\u0435_\u0442\u0430\u043c\u044b\u0437_\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a_\u049b\u0430\u0437\u0430\u043d_\u049b\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d".split("_"), monthsShort: "\u049b\u0430\u04a3_\u0430\u049b\u043f_\u043d\u0430\u0443_\u0441\u04d9\u0443_\u043c\u0430\u043c_\u043c\u0430\u0443_\u0448\u0456\u043b_\u0442\u0430\u043c_\u049b\u044b\u0440_\u049b\u0430\u0437_\u049b\u0430\u0440_\u0436\u0435\u043b".split("_"), weekdays: "\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456_\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0436\u04b1\u043c\u0430_\u0441\u0435\u043d\u0431\u0456".split("_"), weekdaysShort: "\u0436\u0435\u043a_\u0434\u04af\u0439_\u0441\u0435\u0439_\u0441\u04d9\u0440_\u0431\u0435\u0439_\u0436\u04b1\u043c_\u0441\u0435\u043d".split("_"), weekdaysMin: "\u0436\u043a_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043c_\u0441\u043d".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0411\u04af\u0433\u0456\u043d \u0441\u0430\u0493\u0430\u0442] LT", nextDay: "[\u0415\u0440\u0442\u0435\u04a3 \u0441\u0430\u0493\u0430\u0442] LT", nextWeek: "dddd [\u0441\u0430\u0493\u0430\u0442] LT", lastDay: "[\u041a\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442] LT", lastWeek: "[\u04e8\u0442\u043a\u0435\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u04a3] dddd [\u0441\u0430\u0493\u0430\u0442] LT", sameElse: "L" }, relativeTime: { future: "%s \u0456\u0448\u0456\u043d\u0434\u0435", past: "%s \u0431\u04b1\u0440\u044b\u043d", s: "\u0431\u0456\u0440\u043d\u0435\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434", ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434", m: "\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442", mm: "%d \u043c\u0438\u043d\u0443\u0442", h: "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442", hh: "%d \u0441\u0430\u0493\u0430\u0442", d: "\u0431\u0456\u0440 \u043a\u04af\u043d", dd: "%d \u043a\u04af\u043d", M: "\u0431\u0456\u0440 \u0430\u0439", MM: "%d \u0430\u0439", y: "\u0431\u0456\u0440 \u0436\u044b\u043b", yy: "%d \u0436\u044b\u043b" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0448\u0456|\u0448\u044b)/, ordinal: function(e) { return e + (sn[e] || sn[e % 10] || sn[100 <= e ? 100 : null]) }, week: { dow: 1, doy: 7 } });
    var nn = { 1: "\u17e1", 2: "\u17e2", 3: "\u17e3", 4: "\u17e4", 5: "\u17e5", 6: "\u17e6", 7: "\u17e7", 8: "\u17e8", 9: "\u17e9", 0: "\u17e0" },
        dn = { "\u17e1": "1", "\u17e2": "2", "\u17e3": "3", "\u17e4": "4", "\u17e5": "5", "\u17e6": "6", "\u17e7": "7", "\u17e8": "8", "\u17e9": "9", "\u17e0": "0" };
    l.defineLocale("km", { months: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"), monthsShort: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"), weekdays: "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split("_"), weekdaysShort: "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"), weekdaysMin: "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /\u1796\u17d2\u179a\u17b9\u1780|\u179b\u17d2\u1784\u17b6\u1785/, isPM: function(e) { return "\u179b\u17d2\u1784\u17b6\u1785" === e }, meridiem: function(e, a, t) { return e < 12 ? "\u1796\u17d2\u179a\u17b9\u1780" : "\u179b\u17d2\u1784\u17b6\u1785" }, calendar: { sameDay: "[\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7 \u1798\u17c9\u17c4\u1784] LT", nextDay: "[\u179f\u17d2\u17a2\u17c2\u1780 \u1798\u17c9\u17c4\u1784] LT", nextWeek: "dddd [\u1798\u17c9\u17c4\u1784] LT", lastDay: "[\u1798\u17d2\u179f\u17b7\u179b\u1798\u17b7\u1789 \u1798\u17c9\u17c4\u1784] LT", lastWeek: "dddd [\u179f\u1794\u17d2\u178f\u17b6\u17a0\u17cd\u1798\u17bb\u1793] [\u1798\u17c9\u17c4\u1784] LT", sameElse: "L" }, relativeTime: { future: "%s\u1791\u17c0\u178f", past: "%s\u1798\u17bb\u1793", s: "\u1794\u17c9\u17bb\u1793\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1793\u17b6\u1791\u17b8", ss: "%d \u179c\u17b7\u1793\u17b6\u1791\u17b8", m: "\u1798\u17bd\u1799\u1793\u17b6\u1791\u17b8", mm: "%d \u1793\u17b6\u1791\u17b8", h: "\u1798\u17bd\u1799\u1798\u17c9\u17c4\u1784", hh: "%d \u1798\u17c9\u17c4\u1784", d: "\u1798\u17bd\u1799\u1790\u17d2\u1784\u17c3", dd: "%d \u1790\u17d2\u1784\u17c3", M: "\u1798\u17bd\u1799\u1781\u17c2", MM: "%d \u1781\u17c2", y: "\u1798\u17bd\u1799\u1786\u17d2\u1793\u17b6\u17c6", yy: "%d \u1786\u17d2\u1793\u17b6\u17c6" }, dayOfMonthOrdinalParse: /\u1791\u17b8\d{1,2}/, ordinal: "\u1791\u17b8%d", preparse: function(e) { return e.replace(/[\u17e1\u17e2\u17e3\u17e4\u17e5\u17e6\u17e7\u17e8\u17e9\u17e0]/g, function(e) { return dn[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return nn[e] }) }, week: { dow: 1, doy: 4 } });
    var rn = { 1: "\u0ce7", 2: "\u0ce8", 3: "\u0ce9", 4: "\u0cea", 5: "\u0ceb", 6: "\u0cec", 7: "\u0ced", 8: "\u0cee", 9: "\u0cef", 0: "\u0ce6" },
        _n = { "\u0ce7": "1", "\u0ce8": "2", "\u0ce9": "3", "\u0cea": "4", "\u0ceb": "5", "\u0cec": "6", "\u0ced": "7", "\u0cee": "8", "\u0cef": "9", "\u0ce6": "0" };
    l.defineLocale("kn", { months: "\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf_\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5\u0cac\u0cb0\u0ccd_\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split("_"), monthsShort: "\u0c9c\u0ca8_\u0cab\u0cc6\u0cac\u0ccd\u0cb0_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5_\u0ca8\u0cb5\u0cc6\u0c82_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82".split("_"), monthsParseExact: !0, weekdays: "\u0cad\u0cbe\u0ca8\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae\u0cb5\u0cbe\u0cb0_\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0_\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0_\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0_\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0".split("_"), weekdaysShort: "\u0cad\u0cbe\u0ca8\u0cc1_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae_\u0cae\u0c82\u0c97\u0cb3_\u0cac\u0cc1\u0ca7_\u0c97\u0cc1\u0cb0\u0cc1_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0_\u0cb6\u0ca8\u0cbf".split("_"), weekdaysMin: "\u0cad\u0cbe_\u0cb8\u0cc6\u0cc2\u0cd5_\u0cae\u0c82_\u0cac\u0cc1_\u0c97\u0cc1_\u0cb6\u0cc1_\u0cb6".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[\u0c87\u0c82\u0ca6\u0cc1] LT", nextDay: "[\u0ca8\u0cbe\u0cb3\u0cc6] LT", nextWeek: "dddd, LT", lastDay: "[\u0ca8\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6] LT", lastWeek: "[\u0c95\u0cc6\u0cc2\u0ca8\u0cc6\u0caf] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0ca8\u0c82\u0ca4\u0cb0", past: "%s \u0cb9\u0cbf\u0c82\u0ca6\u0cc6", s: "\u0c95\u0cc6\u0cb2\u0cb5\u0cc1 \u0c95\u0ccd\u0cb7\u0ca3\u0c97\u0cb3\u0cc1", ss: "%d \u0cb8\u0cc6\u0c95\u0cc6\u0c82\u0ca1\u0cc1\u0c97\u0cb3\u0cc1", m: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7", mm: "%d \u0ca8\u0cbf\u0cae\u0cbf\u0cb7", h: "\u0c92\u0c82\u0ca6\u0cc1 \u0c97\u0c82\u0c9f\u0cc6", hh: "%d \u0c97\u0c82\u0c9f\u0cc6", d: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca6\u0cbf\u0ca8", dd: "%d \u0ca6\u0cbf\u0ca8", M: "\u0c92\u0c82\u0ca6\u0cc1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1", MM: "%d \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1", y: "\u0c92\u0c82\u0ca6\u0cc1 \u0cb5\u0cb0\u0ccd\u0cb7", yy: "%d \u0cb5\u0cb0\u0ccd\u0cb7" }, preparse: function(e) { return e.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g, function(e) { return _n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return rn[e] }) }, meridiemParse: /\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/, meridiemHour: function(e, a) { return 12 === e && (e = 0), "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" === a ? e < 4 ? e : e + 12 : "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6" === a ? e : "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8" === a ? 10 <= e ? e : e + 12 : "\u0cb8\u0c82\u0c9c\u0cc6" === a ? e + 12 : void 0 }, meridiem: function(e, a, t) { return e < 4 ? "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" : e < 10 ? "\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6" : e < 17 ? "\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8" : e < 20 ? "\u0cb8\u0c82\u0c9c\u0cc6" : "\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf" }, dayOfMonthOrdinalParse: /\d{1,2}(\u0ca8\u0cc6\u0cd5)/, ordinal: function(e) { return e + "\u0ca8\u0cc6\u0cd5" }, week: { dow: 0, doy: 6 } }), l.defineLocale("ko", {
        months: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),
        monthsShort: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),
        weekdays: "\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split("_"),
        weekdaysShort: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
        weekdaysMin: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
        longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY\ub144 MMMM D\uc77c", LLL: "YYYY\ub144 MMMM D\uc77c A h:mm", LLLL: "YYYY\ub144 MMMM D\uc77c dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY\ub144 MMMM D\uc77c", lll: "YYYY\ub144 MMMM D\uc77c A h:mm", llll: "YYYY\ub144 MMMM D\uc77c dddd A h:mm" },
        calendar: { sameDay: "\uc624\ub298 LT", nextDay: "\ub0b4\uc77c LT", nextWeek: "dddd LT", lastDay: "\uc5b4\uc81c LT", lastWeek: "\uc9c0\ub09c\uc8fc dddd LT", sameElse: "L" },
        relativeTime: { future: "%s \ud6c4", past: "%s \uc804", s: "\uba87 \ucd08", ss: "%d\ucd08", m: "1\ubd84", mm: "%d\ubd84", h: "\ud55c \uc2dc\uac04", hh: "%d\uc2dc\uac04", d: "\ud558\ub8e8", dd: "%d\uc77c", M: "\ud55c \ub2ec", MM: "%d\ub2ec", y: "\uc77c \ub144", yy: "%d\ub144" },
        dayOfMonthOrdinalParse: /\d{1,2}(\uc77c|\uc6d4|\uc8fc)/,
        ordinal: function(e, a) {
            switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + "\uc77c";
                case "M":
                    return e + "\uc6d4";
                case "w":
                case "W":
                    return e + "\uc8fc";
                default:
                    return e
            }
        },
        meridiemParse: /\uc624\uc804|\uc624\ud6c4/,
        isPM: function(e) { return "\uc624\ud6c4" === e },
        meridiem: function(e, a, t) { return e < 12 ? "\uc624\uc804" : "\uc624\ud6c4" }
    });
    var on = { 1: "\u0661", 2: "\u0662", 3: "\u0663", 4: "\u0664", 5: "\u0665", 6: "\u0666", 7: "\u0667", 8: "\u0668", 9: "\u0669", 0: "\u0660" },
        mn = { "\u0661": "1", "\u0662": "2", "\u0663": "3", "\u0664": "4", "\u0665": "5", "\u0666": "6", "\u0667": "7", "\u0668": "8", "\u0669": "9", "\u0660": "0" },
        un = ["\u06a9\u0627\u0646\u0648\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645", "\u0634\u0648\u0628\u0627\u062a", "\u0626\u0627\u0632\u0627\u0631", "\u0646\u06cc\u0633\u0627\u0646", "\u0626\u0627\u06cc\u0627\u0631", "\u062d\u0648\u0632\u06d5\u06cc\u0631\u0627\u0646", "\u062a\u06d5\u0645\u0645\u0648\u0632", "\u0626\u0627\u0628", "\u0626\u06d5\u06cc\u0644\u0648\u0648\u0644", "\u062a\u0634\u0631\u06cc\u0646\u06cc \u06cc\u06d5\u0643\u06d5\u0645", "\u062a\u0634\u0631\u06cc\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645", "\u0643\u0627\u0646\u0648\u0646\u06cc \u06cc\u06d5\u06a9\u06d5\u0645"];
    l.defineLocale("ku", { months: un, monthsShort: un, weekdays: "\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u062f\u0648\u0648\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0633\u06ce\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645\u0645\u0647\u200c_\u0647\u0647\u200c\u06cc\u0646\u06cc_\u0634\u0647\u200c\u0645\u0645\u0647\u200c".split("_"), weekdaysShort: "\u06cc\u0647\u200c\u0643\u0634\u0647\u200c\u0645_\u062f\u0648\u0648\u0634\u0647\u200c\u0645_\u0633\u06ce\u0634\u0647\u200c\u0645_\u0686\u0648\u0627\u0631\u0634\u0647\u200c\u0645_\u067e\u06ce\u0646\u062c\u0634\u0647\u200c\u0645_\u0647\u0647\u200c\u06cc\u0646\u06cc_\u0634\u0647\u200c\u0645\u0645\u0647\u200c".split("_"), weekdaysMin: "\u06cc_\u062f_\u0633_\u0686_\u067e_\u0647_\u0634".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c|\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc/, isPM: function(e) { return /\u0626\u06ce\u0648\u0627\u0631\u0647\u200c/.test(e) }, meridiem: function(e, a, t) { return e < 12 ? "\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc" : "\u0626\u06ce\u0648\u0627\u0631\u0647\u200c" }, calendar: { sameDay: "[\u0626\u0647\u200c\u0645\u0631\u06c6 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", nextDay: "[\u0628\u0647\u200c\u06cc\u0627\u0646\u06cc \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", nextWeek: "dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", lastDay: "[\u062f\u0648\u06ce\u0646\u06ce \u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", lastWeek: "dddd [\u0643\u0627\u062a\u0698\u0645\u06ce\u0631] LT", sameElse: "L" }, relativeTime: { future: "\u0644\u0647\u200c %s", past: "%s", s: "\u0686\u0647\u200c\u0646\u062f \u0686\u0631\u0643\u0647\u200c\u06cc\u0647\u200c\u0643", ss: "\u0686\u0631\u0643\u0647\u200c %d", m: "\u06cc\u0647\u200c\u0643 \u062e\u0648\u0644\u0647\u200c\u0643", mm: "%d \u062e\u0648\u0644\u0647\u200c\u0643", h: "\u06cc\u0647\u200c\u0643 \u0643\u0627\u062a\u0698\u0645\u06ce\u0631", hh: "%d \u0643\u0627\u062a\u0698\u0645\u06ce\u0631", d: "\u06cc\u0647\u200c\u0643 \u0695\u06c6\u0698", dd: "%d \u0695\u06c6\u0698", M: "\u06cc\u0647\u200c\u0643 \u0645\u0627\u0646\u06af", MM: "%d \u0645\u0627\u0646\u06af", y: "\u06cc\u0647\u200c\u0643 \u0633\u0627\u06b5", yy: "%d \u0633\u0627\u06b5" }, preparse: function(e) { return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, function(e) { return mn[e] }).replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return on[e] }).replace(/,/g, "\u060c") }, week: { dow: 6, doy: 12 } });
    var ln = { 0: "-\u0447\u04af", 1: "-\u0447\u0438", 2: "-\u0447\u0438", 3: "-\u0447\u04af", 4: "-\u0447\u04af", 5: "-\u0447\u0438", 6: "-\u0447\u044b", 7: "-\u0447\u0438", 8: "-\u0447\u0438", 9: "-\u0447\u0443", 10: "-\u0447\u0443", 20: "-\u0447\u044b", 30: "-\u0447\u0443", 40: "-\u0447\u044b", 50: "-\u0447\u04af", 60: "-\u0447\u044b", 70: "-\u0447\u0438", 80: "-\u0447\u0438", 90: "-\u0447\u0443", 100: "-\u0447\u04af" };

    function Mn(e, a, t, s) { var n = { m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"] }; return a ? n[t][0] : n[t][1] }

    function hn(e) { if (e = parseInt(e, 10), isNaN(e)) return !1; if (e < 0) return !0; if (e < 10) return 4 <= e && e <= 7; if (e < 100) { var a = e % 10; return hn(0 === a ? e / 10 : a) } if (e < 1e4) { for (; 10 <= e;) e /= 10; return hn(e) } return hn(e /= 1e3) }
    l.defineLocale("ky", { months: "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"), monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"), weekdays: "\u0416\u0435\u043a\u0448\u0435\u043c\u0431\u0438_\u0414\u04af\u0439\u0448\u04e9\u043c\u0431\u04af_\u0428\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0428\u0430\u0440\u0448\u0435\u043c\u0431\u0438_\u0411\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0416\u0443\u043c\u0430_\u0418\u0448\u0435\u043c\u0431\u0438".split("_"), weekdaysShort: "\u0416\u0435\u043a_\u0414\u04af\u0439_\u0428\u0435\u0439_\u0428\u0430\u0440_\u0411\u0435\u0439_\u0416\u0443\u043c_\u0418\u0448\u0435".split("_"), weekdaysMin: "\u0416\u043a_\u0414\u0439_\u0428\u0439_\u0428\u0440_\u0411\u0439_\u0416\u043c_\u0418\u0448".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0411\u04af\u0433\u04af\u043d \u0441\u0430\u0430\u0442] LT", nextDay: "[\u042d\u0440\u0442\u0435\u04a3 \u0441\u0430\u0430\u0442] LT", nextWeek: "dddd [\u0441\u0430\u0430\u0442] LT", lastDay: "[\u041a\u0435\u0447\u044d\u044d \u0441\u0430\u0430\u0442] LT", lastWeek: "[\u04e8\u0442\u043a\u04e9\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u043d] dddd [\u043a\u04af\u043d\u04af] [\u0441\u0430\u0430\u0442] LT", sameElse: "L" }, relativeTime: { future: "%s \u0438\u0447\u0438\u043d\u0434\u0435", past: "%s \u043c\u0443\u0440\u0443\u043d", s: "\u0431\u0438\u0440\u043d\u0435\u0447\u0435 \u0441\u0435\u043a\u0443\u043d\u0434", ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434", m: "\u0431\u0438\u0440 \u043c\u04af\u043d\u04e9\u0442", mm: "%d \u043c\u04af\u043d\u04e9\u0442", h: "\u0431\u0438\u0440 \u0441\u0430\u0430\u0442", hh: "%d \u0441\u0430\u0430\u0442", d: "\u0431\u0438\u0440 \u043a\u04af\u043d", dd: "%d \u043a\u04af\u043d", M: "\u0431\u0438\u0440 \u0430\u0439", MM: "%d \u0430\u0439", y: "\u0431\u0438\u0440 \u0436\u044b\u043b", yy: "%d \u0436\u044b\u043b" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/, ordinal: function(e) { return e + (ln[e] || ln[e % 10] || ln[100 <= e ? 100 : null]) }, week: { dow: 1, doy: 7 } }), l.defineLocale("lb", {
        months: "Januar_Februar_M\xe4erz_Abr\xebll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonndeg_M\xe9indeg_D\xebnschdeg_M\xebttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
        weekdaysShort: "So._M\xe9._D\xeb._M\xeb._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_M\xe9_D\xeb_M\xeb_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" },
        calendar: {
            sameDay: "[Haut um] LT",
            sameElse: "L",
            nextDay: "[Muer um] LT",
            nextWeek: "dddd [um] LT",
            lastDay: "[G\xebschter um] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 2:
                    case 4:
                        return "[Leschten] dddd [um] LT";
                    default:
                        return "[Leschte] dddd [um] LT"
                }
            }
        },
        relativeTime: { future: function(e) { return hn(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e }, past: function(e) { return hn(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e }, s: "e puer Sekonnen", ss: "%d Sekonnen", m: Mn, mm: "%d Minutten", h: Mn, hh: "%d Stonnen", d: Mn, dd: "%d Deeg", M: Mn, MM: "%d M\xe9int", y: Mn, yy: "%d Joer" },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 }
    }), l.defineLocale("lo", { months: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"), monthsShort: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"), weekdays: "\u0ead\u0eb2\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"), weekdaysShort: "\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"), weekdaysMin: "\u0e97_\u0e88_\u0ead\u0e84_\u0e9e_\u0e9e\u0eab_\u0eaa\u0e81_\u0eaa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "\u0ea7\u0eb1\u0e99dddd D MMMM YYYY HH:mm" }, meridiemParse: /\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/, isPM: function(e) { return "\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87" === e }, meridiem: function(e, a, t) { return e < 12 ? "\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2" : "\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87" }, calendar: { sameDay: "[\u0ea1\u0eb7\u0ec9\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT", nextDay: "[\u0ea1\u0eb7\u0ec9\u0ead\u0eb7\u0ec8\u0e99\u0ec0\u0ea7\u0ea5\u0eb2] LT", nextWeek: "[\u0ea7\u0eb1\u0e99]dddd[\u0edc\u0ec9\u0eb2\u0ec0\u0ea7\u0ea5\u0eb2] LT", lastDay: "[\u0ea1\u0eb7\u0ec9\u0ea7\u0eb2\u0e99\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT", lastWeek: "[\u0ea7\u0eb1\u0e99]dddd[\u0ec1\u0ea5\u0ec9\u0ea7\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT", sameElse: "L" }, relativeTime: { future: "\u0ead\u0eb5\u0e81 %s", past: "%s\u0e9c\u0ec8\u0eb2\u0e99\u0ea1\u0eb2", s: "\u0e9a\u0ecd\u0ec8\u0ec0\u0e97\u0ebb\u0ec8\u0eb2\u0ec3\u0e94\u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5", ss: "%d \u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5", m: "1 \u0e99\u0eb2\u0e97\u0eb5", mm: "%d \u0e99\u0eb2\u0e97\u0eb5", h: "1 \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87", hh: "%d \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87", d: "1 \u0ea1\u0eb7\u0ec9", dd: "%d \u0ea1\u0eb7\u0ec9", M: "1 \u0ec0\u0e94\u0eb7\u0ead\u0e99", MM: "%d \u0ec0\u0e94\u0eb7\u0ead\u0e99", y: "1 \u0e9b\u0eb5", yy: "%d \u0e9b\u0eb5" }, dayOfMonthOrdinalParse: /(\u0e97\u0eb5\u0ec8)\d{1,2}/, ordinal: function(e) { return "\u0e97\u0eb5\u0ec8" + e } });
    var Ln = { ss: "sekund\u0117_sekund\u017ei\u0173_sekundes", m: "minut\u0117_minut\u0117s_minut\u0119", mm: "minut\u0117s_minu\u010di\u0173_minutes", h: "valanda_valandos_valand\u0105", hh: "valandos_valand\u0173_valandas", d: "diena_dienos_dien\u0105", dd: "dienos_dien\u0173_dienas", M: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012f", MM: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius", y: "metai_met\u0173_metus", yy: "metai_met\u0173_metus" };

    function cn(e, a, t, s) { return a ? yn(t)[0] : s ? yn(t)[1] : yn(t)[2] }

    function Yn(e) { return e % 10 == 0 || 10 < e && e < 20 }

    function yn(e) { return Ln[e].split("_") }

    function fn(e, a, t, s) { var n = e + " "; return 1 === e ? n + cn(0, a, t[0], s) : a ? n + (Yn(e) ? yn(t)[1] : yn(t)[0]) : s ? n + yn(t)[1] : n + (Yn(e) ? yn(t)[1] : yn(t)[2]) }
    l.defineLocale("lt", { months: { format: "sausio_vasario_kovo_baland\u017eio_gegu\u017e\u0117s_bir\u017eelio_liepos_rugpj\u016b\u010dio_rugs\u0117jo_spalio_lapkri\u010dio_gruod\u017eio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegu\u017e\u0117_bir\u017eelis_liepa_rugpj\u016btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ }, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: { format: "sekmadien\u012f_pirmadien\u012f_antradien\u012f_tre\u010diadien\u012f_ketvirtadien\u012f_penktadien\u012f_\u0161e\u0161tadien\u012f".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_tre\u010diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"), isFormat: /dddd HH:mm/ }, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"), weekdaysMin: "S_P_A_T_K_Pn_\u0160".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, calendar: { sameDay: "[\u0160iandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Pra\u0117jus\u012f] dddd LT", sameElse: "L" }, relativeTime: { future: "po %s", past: "prie\u0161 %s", s: function(e, a, t, s) { return a ? "kelios sekund\u0117s" : s ? "keli\u0173 sekund\u017ei\u0173" : "kelias sekundes" }, ss: fn, m: cn, mm: fn, h: cn, hh: fn, d: cn, dd: fn, M: cn, MM: fn, y: cn, yy: fn }, dayOfMonthOrdinalParse: /\d{1,2}-oji/, ordinal: function(e) { return e + "-oji" }, week: { dow: 1, doy: 4 } });
    var kn = { ss: "sekundes_sekund\u0113m_sekunde_sekundes".split("_"), m: "min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"), mm: "min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"), h: "stundas_stund\u0101m_stunda_stundas".split("_"), hh: "stundas_stund\u0101m_stunda_stundas".split("_"), d: "dienas_dien\u0101m_diena_dienas".split("_"), dd: "dienas_dien\u0101m_diena_dienas".split("_"), M: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"), MM: "m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"), y: "gada_gadiem_gads_gadi".split("_"), yy: "gada_gadiem_gads_gadi".split("_") };

    function pn(e, a, t) { return t ? a % 10 == 1 && a % 100 != 11 ? e[2] : e[3] : a % 10 == 1 && a % 100 != 11 ? e[0] : e[1] }

    function Dn(e, a, t) { return e + " " + pn(kn[t], e, a) }

    function Tn(e, a, t) { return pn(kn[t], e, a) }
    l.defineLocale("lv", { months: "janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec".split("_"), weekdays: "sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, calendar: { sameDay: "[\u0160odien pulksten] LT", nextDay: "[R\u012bt pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT", sameElse: "L" }, relativeTime: { future: "p\u0113c %s", past: "pirms %s", s: function(e, a) { return a ? "da\u017eas sekundes" : "da\u017e\u0101m sekund\u0113m" }, ss: Dn, m: Tn, mm: Dn, h: Tn, hh: Dn, d: Tn, dd: Dn, M: Tn, MM: Dn, y: Tn, yy: Dn }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    var gn = { words: { ss: ["sekund", "sekunda", "sekundi"], m: ["jedan minut", "jednog minuta"], mm: ["minut", "minuta", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mjesec", "mjeseca", "mjeseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function(e, a) { return 1 === e ? a[0] : 2 <= e && e <= 4 ? a[1] : a[2] }, translate: function(e, a, t) { var s = gn.words[t]; return 1 === t.length ? a ? s[0] : s[1] : e + " " + gn.correctGrammaticalCase(e, s) } };

    function wn(e, a, t, s) {
        switch (t) {
            case "s":
                return a ? "\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434" : "\u0445\u044d\u0434\u0445\u044d\u043d \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d";
            case "ss":
                return e + (a ? " \u0441\u0435\u043a\u0443\u043d\u0434" : " \u0441\u0435\u043a\u0443\u043d\u0434\u044b\u043d");
            case "m":
            case "mm":
                return e + (a ? " \u043c\u0438\u043d\u0443\u0442" : " \u043c\u0438\u043d\u0443\u0442\u044b\u043d");
            case "h":
            case "hh":
                return e + (a ? " \u0446\u0430\u0433" : " \u0446\u0430\u0433\u0438\u0439\u043d");
            case "d":
            case "dd":
                return e + (a ? " \u04e9\u0434\u04e9\u0440" : " \u04e9\u0434\u0440\u0438\u0439\u043d");
            case "M":
            case "MM":
                return e + (a ? " \u0441\u0430\u0440" : " \u0441\u0430\u0440\u044b\u043d");
            case "y":
            case "yy":
                return e + (a ? " \u0436\u0438\u043b" : " \u0436\u0438\u043b\u0438\u0439\u043d");
            default:
                return e
        }
    }
    l.defineLocale("me", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sjutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[ju\u010de u] LT",
            lastWeek: function() { return ["[pro\u0161le] [nedjelje] [u] LT", "[pro\u0161log] [ponedjeljka] [u] LT", "[pro\u0161log] [utorka] [u] LT", "[pro\u0161le] [srijede] [u] LT", "[pro\u0161log] [\u010detvrtka] [u] LT", "[pro\u0161log] [petka] [u] LT", "[pro\u0161le] [subote] [u] LT"][this.day()] },
            sameElse: "L"
        },
        relativeTime: { future: "za %s", past: "prije %s", s: "nekoliko sekundi", ss: gn.translate, m: gn.translate, mm: gn.translate, h: gn.translate, hh: gn.translate, d: "dan", dd: gn.translate, M: "mjesec", MM: gn.translate, y: "godinu", yy: gn.translate },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 }
    }), l.defineLocale("mi", { months: "Kohi-t\u0101te_Hui-tanguru_Pout\u016b-te-rangi_Paenga-wh\u0101wh\u0101_Haratua_Pipiri_H\u014dngoingoi_Here-turi-k\u014dk\u0101_Mahuru_Whiringa-\u0101-nuku_Whiringa-\u0101-rangi_Hakihea".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_H\u014dngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i, weekdays: "R\u0101tapu_Mane_T\u016brei_Wenerei_T\u0101ite_Paraire_H\u0101tarei".split("_"), weekdaysShort: "Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"), weekdaysMin: "Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, calendar: { sameDay: "[i teie mahana, i] LT", nextDay: "[apopo i] LT", nextWeek: "dddd [i] LT", lastDay: "[inanahi i] LT", lastWeek: "dddd [whakamutunga i] LT", sameElse: "L" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te h\u0113kona ruarua", ss: "%d h\u0113kona", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }), l.defineLocale("mk", {
        months: "\u0458\u0430\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d\u0438_\u0458\u0443\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),
        monthsShort: "\u0458\u0430\u043d_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),
        weekdays: "\u043d\u0435\u0434\u0435\u043b\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a_\u043f\u0435\u0442\u043e\u043a_\u0441\u0430\u0431\u043e\u0442\u0430".split("_"),
        weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u0435_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u0430\u0431".split("_"),
        weekdaysMin: "\u043de_\u043fo_\u0432\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441a".split("_"),
        longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" },
        calendar: {
            sameDay: "[\u0414\u0435\u043d\u0435\u0441 \u0432\u043e] LT",
            nextDay: "[\u0423\u0442\u0440\u0435 \u0432\u043e] LT",
            nextWeek: "[\u0412\u043e] dddd [\u0432\u043e] LT",
            lastDay: "[\u0412\u0447\u0435\u0440\u0430 \u0432\u043e] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430] dddd [\u0432\u043e] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442] dddd [\u0432\u043e] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "\u043f\u043e\u0441\u043b\u0435 %s", past: "\u043f\u0440\u0435\u0434 %s", s: "\u043d\u0435\u043a\u043e\u043b\u043a\u0443 \u0441\u0435\u043a\u0443\u043d\u0434\u0438", ss: "%d \u0441\u0435\u043a\u0443\u043d\u0434\u0438", m: "\u043c\u0438\u043d\u0443\u0442\u0430", mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438", h: "\u0447\u0430\u0441", hh: "%d \u0447\u0430\u0441\u0430", d: "\u0434\u0435\u043d", dd: "%d \u0434\u0435\u043d\u0430", M: "\u043c\u0435\u0441\u0435\u0446", MM: "%d \u043c\u0435\u0441\u0435\u0446\u0438", y: "\u0433\u043e\u0434\u0438\u043d\u0430", yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438" },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,
        ordinal: function(e) {
            var a = e % 10,
                t = e % 100;
            return 0 === e ? e + "-\u0435\u0432" : 0 === t ? e + "-\u0435\u043d" : 10 < t && t < 20 ? e + "-\u0442\u0438" : 1 === a ? e + "-\u0432\u0438" : 2 === a ? e + "-\u0440\u0438" : 7 === a || 8 === a ? e + "-\u043c\u0438" : e + "-\u0442\u0438"
        },
        week: { dow: 1, doy: 7 }
    }), l.defineLocale("ml", { months: "\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f_\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f_\u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d_\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d_\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48_\u0d13\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d_\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c_\u0d12\u0d15\u0d4d\u0d1f\u0d4b\u0d2c\u0d7c_\u0d28\u0d35\u0d02\u0d2c\u0d7c_\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c".split("_"), monthsShort: "\u0d1c\u0d28\u0d41._\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41._\u0d2e\u0d3e\u0d7c._\u0d0f\u0d2a\u0d4d\u0d30\u0d3f._\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48._\u0d13\u0d17._\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31._\u0d12\u0d15\u0d4d\u0d1f\u0d4b._\u0d28\u0d35\u0d02._\u0d21\u0d3f\u0d38\u0d02.".split("_"), monthsParseExact: !0, weekdays: "\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u0d1a_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u0d1a_\u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a_\u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a_\u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a".split("_"), weekdaysShort: "\u0d1e\u0d3e\u0d2f\u0d7c_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d7e_\u0d1a\u0d4a\u0d35\u0d4d\u0d35_\u0d2c\u0d41\u0d27\u0d7b_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f_\u0d36\u0d28\u0d3f".split("_"), weekdaysMin: "\u0d1e\u0d3e_\u0d24\u0d3f_\u0d1a\u0d4a_\u0d2c\u0d41_\u0d35\u0d4d\u0d2f\u0d3e_\u0d35\u0d46_\u0d36".split("_"), longDateFormat: { LT: "A h:mm -\u0d28\u0d41", LTS: "A h:mm:ss -\u0d28\u0d41", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -\u0d28\u0d41", LLLL: "dddd, D MMMM YYYY, A h:mm -\u0d28\u0d41" }, calendar: { sameDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d4d] LT", nextDay: "[\u0d28\u0d3e\u0d33\u0d46] LT", nextWeek: "dddd, LT", lastDay: "[\u0d07\u0d28\u0d4d\u0d28\u0d32\u0d46] LT", lastWeek: "[\u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d", past: "%s \u0d2e\u0d41\u0d7b\u0d2a\u0d4d", s: "\u0d05\u0d7d\u0d2a \u0d28\u0d3f\u0d2e\u0d3f\u0d37\u0d19\u0d4d\u0d19\u0d7e", ss: "%d \u0d38\u0d46\u0d15\u0d4d\u0d15\u0d7b\u0d21\u0d4d", m: "\u0d12\u0d30\u0d41 \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d", mm: "%d \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d", h: "\u0d12\u0d30\u0d41 \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c", hh: "%d \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c", d: "\u0d12\u0d30\u0d41 \u0d26\u0d3f\u0d35\u0d38\u0d02", dd: "%d \u0d26\u0d3f\u0d35\u0d38\u0d02", M: "\u0d12\u0d30\u0d41 \u0d2e\u0d3e\u0d38\u0d02", MM: "%d \u0d2e\u0d3e\u0d38\u0d02", y: "\u0d12\u0d30\u0d41 \u0d35\u0d7c\u0d37\u0d02", yy: "%d \u0d35\u0d7c\u0d37\u0d02" }, meridiemParse: /\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i, meridiemHour: function(e, a) { return 12 === e && (e = 0), "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" === a && 4 <= e || "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" === a || "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" === a ? e + 12 : e }, meridiem: function(e, a, t) { return e < 4 ? "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" : e < 12 ? "\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46" : e < 17 ? "\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d" : e < 20 ? "\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02" : "\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f" } }), l.defineLocale("mn", {
        months: "\u041d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0425\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u04e9\u0440\u04e9\u0432\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0417\u0443\u0440\u0433\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0414\u043e\u043b\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u041d\u0430\u0439\u043c\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0415\u0441\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u043d\u044d\u0433\u0434\u04af\u0433\u044d\u044d\u0440 \u0441\u0430\u0440_\u0410\u0440\u0432\u0430\u043d \u0445\u043e\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440".split("_"),
        monthsShort: "1 \u0441\u0430\u0440_2 \u0441\u0430\u0440_3 \u0441\u0430\u0440_4 \u0441\u0430\u0440_5 \u0441\u0430\u0440_6 \u0441\u0430\u0440_7 \u0441\u0430\u0440_8 \u0441\u0430\u0440_9 \u0441\u0430\u0440_10 \u0441\u0430\u0440_11 \u0441\u0430\u0440_12 \u0441\u0430\u0440".split("_"),
        monthsParseExact: !0,
        weekdays: "\u041d\u044f\u043c_\u0414\u0430\u0432\u0430\u0430_\u041c\u044f\u0433\u043c\u0430\u0440_\u041b\u0445\u0430\u0433\u0432\u0430_\u041f\u04af\u0440\u044d\u0432_\u0411\u0430\u0430\u0441\u0430\u043d_\u0411\u044f\u043c\u0431\u0430".split("_"),
        weekdaysShort: "\u041d\u044f\u043c_\u0414\u0430\u0432_\u041c\u044f\u0433_\u041b\u0445\u0430_\u041f\u04af\u0440_\u0411\u0430\u0430_\u0411\u044f\u043c".split("_"),
        weekdaysMin: "\u041d\u044f_\u0414\u0430_\u041c\u044f_\u041b\u0445_\u041f\u04af_\u0411\u0430_\u0411\u044f".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY \u043e\u043d\u044b MMMM\u044b\u043d D", LLL: "YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm", LLLL: "dddd, YYYY \u043e\u043d\u044b MMMM\u044b\u043d D HH:mm" },
        meridiemParse: /\u04ae\u04e8|\u04ae\u0425/i,
        isPM: function(e) { return "\u04ae\u0425" === e },
        meridiem: function(e, a, t) { return e < 12 ? "\u04ae\u04e8" : "\u04ae\u0425" },
        calendar: { sameDay: "[\u04e8\u043d\u04e9\u04e9\u0434\u04e9\u0440] LT", nextDay: "[\u041c\u0430\u0440\u0433\u0430\u0430\u0448] LT", nextWeek: "[\u0418\u0440\u044d\u0445] dddd LT", lastDay: "[\u04e8\u0447\u0438\u0433\u0434\u04e9\u0440] LT", lastWeek: "[\u04e8\u043d\u0433\u04e9\u0440\u0441\u04e9\u043d] dddd LT", sameElse: "L" },
        relativeTime: { future: "%s \u0434\u0430\u0440\u0430\u0430", past: "%s \u04e9\u043c\u043d\u04e9", s: wn, ss: wn, m: wn, mm: wn, h: wn, hh: wn, d: wn, dd: wn, M: wn, MM: wn, y: wn, yy: wn },
        dayOfMonthOrdinalParse: /\d{1,2} \u04e9\u0434\u04e9\u0440/,
        ordinal: function(e, a) {
            switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + " \u04e9\u0434\u04e9\u0440";
                default:
                    return e
            }
        }
    });
    var vn = { 1: "\u0967", 2: "\u0968", 3: "\u0969", 4: "\u096a", 5: "\u096b", 6: "\u096c", 7: "\u096d", 8: "\u096e", 9: "\u096f", 0: "\u0966" },
        Sn = { "\u0967": "1", "\u0968": "2", "\u0969": "3", "\u096a": "4", "\u096b": "5", "\u096c": "6", "\u096d": "7", "\u096e": "8", "\u096f": "9", "\u0966": "0" };

    function Hn(e, a, t, s) {
        var n = "";
        if (a) switch (t) {
            case "s":
                n = "\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926";
                break;
            case "ss":
                n = "%d \u0938\u0947\u0915\u0902\u0926";
                break;
            case "m":
                n = "\u090f\u0915 \u092e\u093f\u0928\u093f\u091f";
                break;
            case "mm":
                n = "%d \u092e\u093f\u0928\u093f\u091f\u0947";
                break;
            case "h":
                n = "\u090f\u0915 \u0924\u093e\u0938";
                break;
            case "hh":
                n = "%d \u0924\u093e\u0938";
                break;
            case "d":
                n = "\u090f\u0915 \u0926\u093f\u0935\u0938";
                break;
            case "dd":
                n = "%d \u0926\u093f\u0935\u0938";
                break;
            case "M":
                n = "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e";
                break;
            case "MM":
                n = "%d \u092e\u0939\u093f\u0928\u0947";
                break;
            case "y":
                n = "\u090f\u0915 \u0935\u0930\u094d\u0937";
                break;
            case "yy":
                n = "%d \u0935\u0930\u094d\u0937\u0947";
                break
        } else switch (t) {
            case "s":
                n = "\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926\u093e\u0902";
                break;
            case "ss":
                n = "%d \u0938\u0947\u0915\u0902\u0926\u093e\u0902";
                break;
            case "m":
                n = "\u090f\u0915\u093e \u092e\u093f\u0928\u093f\u091f\u093e";
                break;
            case "mm":
                n = "%d \u092e\u093f\u0928\u093f\u091f\u093e\u0902";
                break;
            case "h":
                n = "\u090f\u0915\u093e \u0924\u093e\u0938\u093e";
                break;
            case "hh":
                n = "%d \u0924\u093e\u0938\u093e\u0902";
                break;
            case "d":
                n = "\u090f\u0915\u093e \u0926\u093f\u0935\u0938\u093e";
                break;
            case "dd":
                n = "%d \u0926\u093f\u0935\u0938\u093e\u0902";
                break;
            case "M":
                n = "\u090f\u0915\u093e \u092e\u0939\u093f\u0928\u094d\u092f\u093e";
                break;
            case "MM":
                n = "%d \u092e\u0939\u093f\u0928\u094d\u092f\u093e\u0902";
                break;
            case "y":
                n = "\u090f\u0915\u093e \u0935\u0930\u094d\u0937\u093e";
                break;
            case "yy":
                n = "%d \u0935\u0930\u094d\u0937\u093e\u0902";
                break
        }
        return n.replace(/%d/i, e)
    }
    l.defineLocale("mr", { months: "\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u093f\u0932_\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932\u0948_\u0911\u0917\u0938\u094d\u091f_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930_\u0911\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930_\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split("_"), monthsShort: "\u091c\u093e\u0928\u0947._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a._\u090f\u092a\u094d\u0930\u093f._\u092e\u0947._\u091c\u0942\u0928._\u091c\u0941\u0932\u0948._\u0911\u0917._\u0938\u092a\u094d\u091f\u0947\u0902._\u0911\u0915\u094d\u091f\u094b._\u0928\u094b\u0935\u094d\u0939\u0947\u0902._\u0921\u093f\u0938\u0947\u0902.".split("_"), monthsParseExact: !0, weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0933\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"), weekdaysShort: "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0933_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"), weekdaysMin: "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"), longDateFormat: { LT: "A h:mm \u0935\u093e\u091c\u0924\u093e", LTS: "A h:mm:ss \u0935\u093e\u091c\u0924\u093e", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e", LLLL: "dddd, D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e" }, calendar: { sameDay: "[\u0906\u091c] LT", nextDay: "[\u0909\u0926\u094d\u092f\u093e] LT", nextWeek: "dddd, LT", lastDay: "[\u0915\u093e\u0932] LT", lastWeek: "[\u092e\u093e\u0917\u0940\u0932] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s\u092e\u0927\u094d\u092f\u0947", past: "%s\u092a\u0942\u0930\u094d\u0935\u0940", s: Hn, ss: Hn, m: Hn, mm: Hn, h: Hn, hh: Hn, d: Hn, dd: Hn, M: Hn, MM: Hn, y: Hn, yy: Hn }, preparse: function(e) { return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) { return Sn[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return vn[e] }) }, meridiemParse: /\u0930\u093e\u0924\u094d\u0930\u0940|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940/, meridiemHour: function(e, a) { return 12 === e && (e = 0), "\u0930\u093e\u0924\u094d\u0930\u0940" === a ? e < 4 ? e : e + 12 : "\u0938\u0915\u093e\u0933\u0940" === a ? e : "\u0926\u0941\u092a\u093e\u0930\u0940" === a ? 10 <= e ? e : e + 12 : "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940" === a ? e + 12 : void 0 }, meridiem: function(e, a, t) { return e < 4 ? "\u0930\u093e\u0924\u094d\u0930\u0940" : e < 10 ? "\u0938\u0915\u093e\u0933\u0940" : e < 17 ? "\u0926\u0941\u092a\u093e\u0930\u0940" : e < 20 ? "\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940" : "\u0930\u093e\u0924\u094d\u0930\u0940" }, week: { dow: 0, doy: 6 } }), l.defineLocale("ms-my", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function(e, a) { return 12 === e && (e = 0), "pagi" === a ? e : "tengahari" === a ? 11 <= e ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0 }, meridiem: function(e, a, t) { return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }), l.defineLocale("ms", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function(e, a) { return 12 === e && (e = 0), "pagi" === a ? e : "tengahari" === a ? 11 <= e ? e : e + 12 : "petang" === a || "malam" === a ? e + 12 : void 0 }, meridiem: function(e, a, t) { return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }), l.defineLocale("mt", { months: "Jannar_Frar_Marzu_April_Mejju_\u0120unju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Di\u010bembru".split("_"), monthsShort: "Jan_Fra_Mar_Apr_Mej_\u0120un_Lul_Aww_Set_Ott_Nov_Di\u010b".split("_"), weekdays: "Il-\u0126add_It-Tnejn_It-Tlieta_L-Erbg\u0127a_Il-\u0126amis_Il-\u0120img\u0127a_Is-Sibt".split("_"), weekdaysShort: "\u0126ad_Tne_Tli_Erb_\u0126am_\u0120im_Sib".split("_"), weekdaysMin: "\u0126a_Tn_Tl_Er_\u0126a_\u0120i_Si".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Illum fil-]LT", nextDay: "[G\u0127ada fil-]LT", nextWeek: "dddd [fil-]LT", lastDay: "[Il-biera\u0127 fil-]LT", lastWeek: "dddd [li g\u0127adda] [fil-]LT", sameElse: "L" }, relativeTime: { future: "f\u2019 %s", past: "%s ilu", s: "ftit sekondi", ss: "%d sekondi", m: "minuta", mm: "%d minuti", h: "sieg\u0127a", hh: "%d sieg\u0127at", d: "\u0121urnata", dd: "%d \u0121ranet", M: "xahar", MM: "%d xhur", y: "sena", yy: "%d sni" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } });
    var bn = { 1: "\u1041", 2: "\u1042", 3: "\u1043", 4: "\u1044", 5: "\u1045", 6: "\u1046", 7: "\u1047", 8: "\u1048", 9: "\u1049", 0: "\u1040" },
        jn = { "\u1041": "1", "\u1042": "2", "\u1043": "3", "\u1044": "4", "\u1045": "5", "\u1046": "6", "\u1047": "7", "\u1048": "8", "\u1049": "9", "\u1040": "0" };
    l.defineLocale("my", { months: "\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e_\u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e_\u1019\u1010\u103a_\u1027\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u1007\u1030\u101c\u102d\u102f\u1004\u103a_\u101e\u103c\u1002\u102f\u1010\u103a_\u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c_\u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c_\u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c_\u1012\u102e\u1007\u1004\u103a\u1018\u102c".split("_"), monthsShort: "\u1007\u1014\u103a_\u1016\u1031_\u1019\u1010\u103a_\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u101c\u102d\u102f\u1004\u103a_\u101e\u103c_\u1005\u1000\u103a_\u1021\u1031\u102c\u1000\u103a_\u1014\u102d\u102f_\u1012\u102e".split("_"), weekdays: "\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031_\u1010\u1014\u1004\u103a\u1039\u101c\u102c_\u1021\u1004\u103a\u1039\u1002\u102b_\u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038_\u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038_\u101e\u1031\u102c\u1000\u103c\u102c_\u1005\u1014\u1031".split("_"), weekdaysShort: "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"), weekdaysMin: "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u101a\u1014\u1031.] LT [\u1019\u103e\u102c]", nextDay: "[\u1019\u1014\u1000\u103a\u1016\u103c\u1014\u103a] LT [\u1019\u103e\u102c]", nextWeek: "dddd LT [\u1019\u103e\u102c]", lastDay: "[\u1019\u1014\u1031.\u1000] LT [\u1019\u103e\u102c]", lastWeek: "[\u1015\u103c\u102e\u1038\u1001\u1032\u1037\u101e\u1031\u102c] dddd LT [\u1019\u103e\u102c]", sameElse: "L" }, relativeTime: { future: "\u101c\u102c\u1019\u100a\u103a\u1037 %s \u1019\u103e\u102c", past: "\u101c\u103d\u1014\u103a\u1001\u1032\u1037\u101e\u1031\u102c %s \u1000", s: "\u1005\u1000\u1039\u1000\u1014\u103a.\u1021\u1014\u100a\u103a\u1038\u1004\u101a\u103a", ss: "%d \u1005\u1000\u1039\u1000\u1014\u1037\u103a", m: "\u1010\u1005\u103a\u1019\u102d\u1014\u1005\u103a", mm: "%d \u1019\u102d\u1014\u1005\u103a", h: "\u1010\u1005\u103a\u1014\u102c\u101b\u102e", hh: "%d \u1014\u102c\u101b\u102e", d: "\u1010\u1005\u103a\u101b\u1000\u103a", dd: "%d \u101b\u1000\u103a", M: "\u1010\u1005\u103a\u101c", MM: "%d \u101c", y: "\u1010\u1005\u103a\u1014\u103e\u1005\u103a", yy: "%d \u1014\u103e\u1005\u103a" }, preparse: function(e) { return e.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g, function(e) { return jn[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return bn[e] }) }, week: { dow: 1, doy: 4 } }), l.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: !0, weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"), weekdaysShort: "s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"), weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i g\xe5r kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", ss: "%d sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en m\xe5ned", MM: "%d m\xe5neder", y: "ett \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    var xn = { 1: "\u0967", 2: "\u0968", 3: "\u0969", 4: "\u096a", 5: "\u096b", 6: "\u096c", 7: "\u096d", 8: "\u096e", 9: "\u096f", 0: "\u0966" },
        On = { "\u0967": "1", "\u0968": "2", "\u0969": "3", "\u096a": "4", "\u096b": "5", "\u096c": "6", "\u096d": "7", "\u096e": "8", "\u096f": "9", "\u0966": "0" };
    l.defineLocale("ne", { months: "\u091c\u0928\u0935\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f\u0932_\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0937\u094d\u091f_\u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930_\u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split("_"), monthsShort: "\u091c\u0928._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f._\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908._\u0905\u0917._\u0938\u0947\u092a\u094d\u091f._\u0905\u0915\u094d\u091f\u094b._\u0928\u094b\u092d\u0947._\u0921\u093f\u0938\u0947.".split("_"), monthsParseExact: !0, weekdays: "\u0906\u0907\u0924\u092c\u093e\u0930_\u0938\u094b\u092e\u092c\u093e\u0930_\u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930_\u092c\u0941\u0927\u092c\u093e\u0930_\u092c\u093f\u0939\u093f\u092c\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930_\u0936\u0928\u093f\u092c\u093e\u0930".split("_"), weekdaysShort: "\u0906\u0907\u0924._\u0938\u094b\u092e._\u092e\u0919\u094d\u0917\u0932._\u092c\u0941\u0927._\u092c\u093f\u0939\u093f._\u0936\u0941\u0915\u094d\u0930._\u0936\u0928\u093f.".split("_"), weekdaysMin: "\u0906._\u0938\u094b._\u092e\u0902._\u092c\u0941._\u092c\u093f._\u0936\u0941._\u0936.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "A\u0915\u094b h:mm \u092c\u091c\u0947", LTS: "A\u0915\u094b h:mm:ss \u092c\u091c\u0947", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947", LLLL: "dddd, D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947" }, preparse: function(e) { return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g, function(e) { return On[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return xn[e] }) }, meridiemParse: /\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/, meridiemHour: function(e, a) { return 12 === e && (e = 0), "\u0930\u093e\u0924\u093f" === a ? e < 4 ? e : e + 12 : "\u092c\u093f\u0939\u093e\u0928" === a ? e : "\u0926\u093f\u0909\u0901\u0938\u094b" === a ? 10 <= e ? e : e + 12 : "\u0938\u093e\u0901\u091d" === a ? e + 12 : void 0 }, meridiem: function(e, a, t) { return e < 3 ? "\u0930\u093e\u0924\u093f" : e < 12 ? "\u092c\u093f\u0939\u093e\u0928" : e < 16 ? "\u0926\u093f\u0909\u0901\u0938\u094b" : e < 20 ? "\u0938\u093e\u0901\u091d" : "\u0930\u093e\u0924\u093f" }, calendar: { sameDay: "[\u0906\u091c] LT", nextDay: "[\u092d\u094b\u0932\u093f] LT", nextWeek: "[\u0906\u0909\u0901\u0926\u094b] dddd[,] LT", lastDay: "[\u0939\u093f\u091c\u094b] LT", lastWeek: "[\u0917\u090f\u0915\u094b] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%s\u092e\u093e", past: "%s \u0905\u0917\u093e\u0921\u093f", s: "\u0915\u0947\u0939\u0940 \u0915\u094d\u0937\u0923", ss: "%d \u0938\u0947\u0915\u0947\u0923\u094d\u0921", m: "\u090f\u0915 \u092e\u093f\u0928\u0947\u091f", mm: "%d \u092e\u093f\u0928\u0947\u091f", h: "\u090f\u0915 \u0918\u0923\u094d\u091f\u093e", hh: "%d \u0918\u0923\u094d\u091f\u093e", d: "\u090f\u0915 \u0926\u093f\u0928", dd: "%d \u0926\u093f\u0928", M: "\u090f\u0915 \u092e\u0939\u093f\u0928\u093e", MM: "%d \u092e\u0939\u093f\u0928\u093e", y: "\u090f\u0915 \u092c\u0930\u094d\u0937", yy: "%d \u092c\u0930\u094d\u0937" }, week: { dow: 0, doy: 6 } });
    var Pn = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
        Wn = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        An = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
        En = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    l.defineLocale("nl-be", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? Wn[e.month()] : Pn[e.month()] : Pn }, monthsRegex: En, monthsShortRegex: En, monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: An, longMonthsParse: An, shortMonthsParse: An, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "\xe9\xe9n minuut", mm: "%d minuten", h: "\xe9\xe9n uur", hh: "%d uur", d: "\xe9\xe9n dag", dd: "%d dagen", M: "\xe9\xe9n maand", MM: "%d maanden", y: "\xe9\xe9n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de") }, week: { dow: 1, doy: 4 } });
    var Fn = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
        zn = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
        Jn = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
        Nn = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    l.defineLocale("nl", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function(e, a) { return e ? /-MMM-/.test(a) ? zn[e.month()] : Fn[e.month()] : Fn }, monthsRegex: Nn, monthsShortRegex: Nn, monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: Jn, longMonthsParse: Jn, shortMonthsParse: Jn, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "\xe9\xe9n minuut", mm: "%d minuten", h: "\xe9\xe9n uur", hh: "%d uur", d: "\xe9\xe9n dag", dd: "%d dagen", M: "\xe9\xe9n maand", MM: "%d maanden", y: "\xe9\xe9n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de") }, week: { dow: 1, doy: 4 } }), l.defineLocale("nn", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_m\xe5ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_m\xe5n_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_m\xe5_ty_on_to_fr_l\xf8".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I g\xe5r klokka] LT", lastWeek: "[F\xf8reg\xe5ande] dddd [klokka] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s sidan", s: "nokre sekund", ss: "%d sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein m\xe5nad", MM: "%d m\xe5nader", y: "eit \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    var Rn = { 1: "\u0a67", 2: "\u0a68", 3: "\u0a69", 4: "\u0a6a", 5: "\u0a6b", 6: "\u0a6c", 7: "\u0a6d", 8: "\u0a6e", 9: "\u0a6f", 0: "\u0a66" },
        Cn = { "\u0a67": "1", "\u0a68": "2", "\u0a69": "3", "\u0a6a": "4", "\u0a6b": "5", "\u0a6c": "6", "\u0a6d": "7", "\u0a6e": "8", "\u0a6f": "9", "\u0a66": "0" };
    l.defineLocale("pa-in", { months: "\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"), monthsShort: "\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"), weekdays: "\u0a10\u0a24\u0a35\u0a3e\u0a30_\u0a38\u0a4b\u0a2e\u0a35\u0a3e\u0a30_\u0a2e\u0a70\u0a17\u0a32\u0a35\u0a3e\u0a30_\u0a2c\u0a41\u0a27\u0a35\u0a3e\u0a30_\u0a35\u0a40\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a28\u0a40\u0a1a\u0a30\u0a35\u0a3e\u0a30".split("_"), weekdaysShort: "\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"), weekdaysMin: "\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"), longDateFormat: { LT: "A h:mm \u0a35\u0a1c\u0a47", LTS: "A h:mm:ss \u0a35\u0a1c\u0a47", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47", LLLL: "dddd, D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47" }, calendar: { sameDay: "[\u0a05\u0a1c] LT", nextDay: "[\u0a15\u0a32] LT", nextWeek: "[\u0a05\u0a17\u0a32\u0a3e] dddd, LT", lastDay: "[\u0a15\u0a32] LT", lastWeek: "[\u0a2a\u0a3f\u0a1b\u0a32\u0a47] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0a35\u0a3f\u0a71\u0a1a", past: "%s \u0a2a\u0a3f\u0a1b\u0a32\u0a47", s: "\u0a15\u0a41\u0a1d \u0a38\u0a15\u0a3f\u0a70\u0a1f", ss: "%d \u0a38\u0a15\u0a3f\u0a70\u0a1f", m: "\u0a07\u0a15 \u0a2e\u0a3f\u0a70\u0a1f", mm: "%d \u0a2e\u0a3f\u0a70\u0a1f", h: "\u0a07\u0a71\u0a15 \u0a18\u0a70\u0a1f\u0a3e", hh: "%d \u0a18\u0a70\u0a1f\u0a47", d: "\u0a07\u0a71\u0a15 \u0a26\u0a3f\u0a28", dd: "%d \u0a26\u0a3f\u0a28", M: "\u0a07\u0a71\u0a15 \u0a2e\u0a39\u0a40\u0a28\u0a3e", MM: "%d \u0a2e\u0a39\u0a40\u0a28\u0a47", y: "\u0a07\u0a71\u0a15 \u0a38\u0a3e\u0a32", yy: "%d \u0a38\u0a3e\u0a32" }, preparse: function(e) { return e.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g, function(e) { return Cn[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return Rn[e] }) }, meridiemParse: /\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/, meridiemHour: function(e, a) { return 12 === e && (e = 0), "\u0a30\u0a3e\u0a24" === a ? e < 4 ? e : e + 12 : "\u0a38\u0a35\u0a47\u0a30" === a ? e : "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30" === a ? 10 <= e ? e : e + 12 : "\u0a38\u0a3c\u0a3e\u0a2e" === a ? e + 12 : void 0 }, meridiem: function(e, a, t) { return e < 4 ? "\u0a30\u0a3e\u0a24" : e < 10 ? "\u0a38\u0a35\u0a47\u0a30" : e < 17 ? "\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30" : e < 20 ? "\u0a38\u0a3c\u0a3e\u0a2e" : "\u0a30\u0a3e\u0a24" }, week: { dow: 0, doy: 6 } });
    var In = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split("_"),
        Un = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia".split("_");

    function Gn(e) { return e % 10 < 5 && 1 < e % 10 && ~~(e / 10) % 10 != 1 }

    function Vn(e, a, t) {
        var s = e + " ";
        switch (t) {
            case "ss":
                return s + (Gn(e) ? "sekundy" : "sekund");
            case "m":
                return a ? "minuta" : "minut\u0119";
            case "mm":
                return s + (Gn(e) ? "minuty" : "minut");
            case "h":
                return a ? "godzina" : "godzin\u0119";
            case "hh":
                return s + (Gn(e) ? "godziny" : "godzin");
            case "MM":
                return s + (Gn(e) ? "miesi\u0105ce" : "miesi\u0119cy");
            case "yy":
                return s + (Gn(e) ? "lata" : "lat")
        }
    }

    function Kn(e, a, t) { var s = " "; return (20 <= e % 100 || 100 <= e && e % 100 == 0) && (s = " de "), e + s + { ss: "secunde", mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" }[t] }

    function Zn(e, a, t) { var s, n; return "m" === t ? a ? "\u043c\u0438\u043d\u0443\u0442\u0430" : "\u043c\u0438\u043d\u0443\u0442\u0443" : e + " " + (s = +e, n = { ss: a ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u044b_\u0441\u0435\u043a\u0443\u043d\u0434", mm: a ? "\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442" : "\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442", hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432", dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439", MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432", yy: "\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442" }[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : 2 <= s % 10 && s % 10 <= 4 && (s % 100 < 10 || 20 <= s % 100) ? n[1] : n[2]) }
    l.defineLocale("pl", {
        months: function(e, a) { return e ? "" === a ? "(" + Un[e.month()] + "|" + In[e.month()] + ")" : /D MMMM/.test(a) ? Un[e.month()] : In[e.month()] : In },
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"),
        weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota".split("_"),
        weekdaysShort: "ndz_pon_wt_\u015br_czw_pt_sob".split("_"),
        weekdaysMin: "Nd_Pn_Wt_\u015ar_Cz_Pt_So".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
        calendar: {
            sameDay: "[Dzi\u015b o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[W niedziel\u0119 o] LT";
                    case 2:
                        return "[We wtorek o] LT";
                    case 3:
                        return "[W \u015brod\u0119 o] LT";
                    case 6:
                        return "[W sobot\u0119 o] LT";
                    default:
                        return "[W] dddd [o] LT"
                }
            },
            lastDay: "[Wczoraj o] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[W zesz\u0142\u0105 niedziel\u0119 o] LT";
                    case 3:
                        return "[W zesz\u0142\u0105 \u015brod\u0119 o] LT";
                    case 6:
                        return "[W zesz\u0142\u0105 sobot\u0119 o] LT";
                    default:
                        return "[W zesz\u0142y] dddd [o] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", ss: Vn, m: Vn, mm: Vn, h: Vn, hh: Vn, d: "1 dzie\u0144", dd: "%d dni", M: "miesi\u0105c", MM: Vn, y: "rok", yy: Vn },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 }
    }), l.defineLocale("pt-br", { months: "Janeiro_Fevereiro_Mar\xe7o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"), weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [\xe0s] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm" }, calendar: { sameDay: "[Hoje \xe0s] LT", nextDay: "[Amanh\xe3 \xe0s] LT", nextWeek: "dddd [\xe0s] LT", lastDay: "[Ontem \xe0s] LT", lastWeek: function() { return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "h\xe1 %s", s: "poucos segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um m\xeas", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba" }), l.defineLocale("pt", { months: "Janeiro_Fevereiro_Mar\xe7o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"), weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm" }, calendar: { sameDay: "[Hoje \xe0s] LT", nextDay: "[Amanh\xe3 \xe0s] LT", nextWeek: "dddd [\xe0s] LT", lastDay: "[Ontem \xe0s] LT", lastWeek: function() { return 0 === this.day() || 6 === this.day() ? "[\xdaltimo] dddd [\xe0s] LT" : "[\xdaltima] dddd [\xe0s] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "h\xe1 %s", s: "segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um m\xeas", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}\xba/, ordinal: "%d\xba", week: { dow: 1, doy: 4 } }), l.defineLocale("ro", { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "duminic\u0103_luni_mar\u021bi_miercuri_joi_vineri_s\xe2mb\u0103t\u0103".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[m\xe2ine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: { future: "peste %s", past: "%s \xeen urm\u0103", s: "c\xe2teva secunde", ss: Kn, m: "un minut", mm: Kn, h: "o or\u0103", hh: Kn, d: "o zi", dd: Kn, M: "o lun\u0103", MM: Kn, y: "un an", yy: Kn }, week: { dow: 1, doy: 7 } });
    var $n = [/^\u044f\u043d\u0432/i, /^\u0444\u0435\u0432/i, /^\u043c\u0430\u0440/i, /^\u0430\u043f\u0440/i, /^\u043c\u0430[\u0439\u044f]/i, /^\u0438\u044e\u043d/i, /^\u0438\u044e\u043b/i, /^\u0430\u0432\u0433/i, /^\u0441\u0435\u043d/i, /^\u043e\u043a\u0442/i, /^\u043d\u043e\u044f/i, /^\u0434\u0435\u043a/i];
    l.defineLocale("ru", {
        months: { format: "\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split("_"), standalone: "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_") },
        monthsShort: { format: "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_"), standalone: "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440\u0442_\u0430\u043f\u0440._\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_") },
        weekdays: { standalone: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split("_"), format: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043e\u0442\u0443".split("_"), isFormat: /\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?\] ?dddd/ },
        weekdaysShort: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
        weekdaysMin: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
        monthsParse: $n,
        longMonthsParse: $n,
        shortMonthsParse: $n,
        monthsRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
        monthsShortRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,
        monthsStrictRegex: /^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i,
        monthsShortStrictRegex: /^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i,
        longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0433.", LLL: "D MMMM YYYY \u0433., H:mm", LLLL: "dddd, D MMMM YYYY \u0433., H:mm" },
        calendar: {
            sameDay: "[\u0421\u0435\u0433\u043e\u0434\u043d\u044f, \u0432] LT",
            nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430, \u0432] LT",
            lastDay: "[\u0412\u0447\u0435\u0440\u0430, \u0432] LT",
            nextWeek: function(e) {
                if (e.week() === this.week()) return 2 === this.day() ? "[\u0412\u043e] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT";
                switch (this.day()) {
                    case 0:
                        return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435] dddd, [\u0432] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439] dddd, [\u0432] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e] dddd, [\u0432] LT"
                }
            },
            lastWeek: function(e) {
                if (e.week() === this.week()) return 2 === this.day() ? "[\u0412\u043e] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT";
                switch (this.day()) {
                    case 0:
                        return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0435] dddd, [\u0432] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u044b\u0439] dddd, [\u0432] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[\u0412 \u043f\u0440\u043e\u0448\u043b\u0443\u044e] dddd, [\u0432] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "\u0447\u0435\u0440\u0435\u0437 %s", past: "%s \u043d\u0430\u0437\u0430\u0434", s: "\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434", ss: Zn, m: Zn, mm: Zn, h: "\u0447\u0430\u0441", hh: Zn, d: "\u0434\u0435\u043d\u044c", dd: Zn, M: "\u043c\u0435\u0441\u044f\u0446", MM: Zn, y: "\u0433\u043e\u0434", yy: Zn },
        meridiemParse: /\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i,
        isPM: function(e) { return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(e) },
        meridiem: function(e, a, t) { return e < 4 ? "\u043d\u043e\u0447\u0438" : e < 12 ? "\u0443\u0442\u0440\u0430" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u0435\u0440\u0430" },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e|\u044f)/,
        ordinal: function(e, a) {
            switch (a) {
                case "M":
                case "d":
                case "DDD":
                    return e + "-\u0439";
                case "D":
                    return e + "-\u0433\u043e";
                case "w":
                case "W":
                    return e + "-\u044f";
                default:
                    return e
            }
        },
        week: { dow: 1, doy: 4 }
    });
    var Bn = ["\u062c\u0646\u0648\u0631\u064a", "\u0641\u064a\u0628\u0631\u0648\u0631\u064a", "\u0645\u0627\u0631\u0686", "\u0627\u067e\u0631\u064a\u0644", "\u0645\u0626\u064a", "\u062c\u0648\u0646", "\u062c\u0648\u0644\u0627\u0621\u0650", "\u0622\u06af\u0633\u067d", "\u0633\u064a\u067e\u067d\u0645\u0628\u0631", "\u0622\u06aa\u067d\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u068a\u0633\u0645\u0628\u0631"],
        qn = ["\u0622\u0686\u0631", "\u0633\u0648\u0645\u0631", "\u0627\u06b1\u0627\u0631\u0648", "\u0627\u0631\u0628\u0639", "\u062e\u0645\u064a\u0633", "\u062c\u0645\u0639", "\u0687\u0646\u0687\u0631"];
    l.defineLocale("sd", { months: Bn, monthsShort: Bn, weekdays: qn, weekdaysShort: qn, weekdaysMin: qn, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd\u060c D MMMM YYYY HH:mm" }, meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/, isPM: function(e) { return "\u0634\u0627\u0645" === e }, meridiem: function(e, a, t) { return e < 12 ? "\u0635\u0628\u062d" : "\u0634\u0627\u0645" }, calendar: { sameDay: "[\u0627\u0684] LT", nextDay: "[\u0633\u0680\u0627\u06bb\u064a] LT", nextWeek: "dddd [\u0627\u06b3\u064a\u0646 \u0647\u0641\u062a\u064a \u062a\u064a] LT", lastDay: "[\u06aa\u0627\u0644\u0647\u0647] LT", lastWeek: "[\u06af\u0632\u0631\u064a\u0644 \u0647\u0641\u062a\u064a] dddd [\u062a\u064a] LT", sameElse: "L" }, relativeTime: { future: "%s \u067e\u0648\u0621", past: "%s \u0627\u06b3", s: "\u0686\u0646\u062f \u0633\u064a\u06aa\u0646\u068a", ss: "%d \u0633\u064a\u06aa\u0646\u068a", m: "\u0647\u06aa \u0645\u0646\u067d", mm: "%d \u0645\u0646\u067d", h: "\u0647\u06aa \u06aa\u0644\u0627\u06aa", hh: "%d \u06aa\u0644\u0627\u06aa", d: "\u0647\u06aa \u068f\u064a\u0646\u0647\u0646", dd: "%d \u068f\u064a\u0646\u0647\u0646", M: "\u0647\u06aa \u0645\u0647\u064a\u0646\u0648", MM: "%d \u0645\u0647\u064a\u0646\u0627", y: "\u0647\u06aa \u0633\u0627\u0644", yy: "%d \u0633\u0627\u0644" }, preparse: function(e) { return e.replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/,/g, "\u060c") }, week: { dow: 1, doy: 4 } }), l.defineLocale("se", { months: "o\u0111\u0111ajagem\xe1nnu_guovvam\xe1nnu_njuk\u010dam\xe1nnu_cuo\u014bom\xe1nnu_miessem\xe1nnu_geassem\xe1nnu_suoidnem\xe1nnu_borgem\xe1nnu_\u010dak\u010dam\xe1nnu_golggotm\xe1nnu_sk\xe1bmam\xe1nnu_juovlam\xe1nnu".split("_"), monthsShort: "o\u0111\u0111j_guov_njuk_cuo_mies_geas_suoi_borg_\u010dak\u010d_golg_sk\xe1b_juov".split("_"), weekdays: "sotnabeaivi_vuoss\xe1rga_ma\u014b\u014beb\xe1rga_gaskavahkku_duorastat_bearjadat_l\xe1vvardat".split("_"), weekdaysShort: "sotn_vuos_ma\u014b_gask_duor_bear_l\xe1v".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, calendar: { sameDay: "[otne ti] LT", nextDay: "[ihttin ti] LT", nextWeek: "dddd [ti] LT", lastDay: "[ikte ti] LT", lastWeek: "[ovddit] dddd [ti] LT", sameElse: "L" }, relativeTime: { future: "%s gea\u017ees", past: "ma\u014bit %s", s: "moadde sekunddat", ss: "%d sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta m\xe1nnu", MM: "%d m\xe1nut", y: "okta jahki", yy: "%d jagit" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("si", { months: "\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2_\u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2_\u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4_\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4_\u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca_\u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca".split("_"), monthsShort: "\u0da2\u0db1_\u0db4\u0dd9\u0db6_\u0db8\u0dcf\u0dbb\u0dca_\u0d85\u0db4\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd_\u0dc3\u0dd0\u0db4\u0dca_\u0d94\u0d9a\u0dca_\u0db1\u0ddc\u0dc0\u0dd0_\u0daf\u0dd9\u0dc3\u0dd0".split("_"), weekdays: "\u0d89\u0dbb\u0dd2\u0daf\u0dcf_\u0dc3\u0db3\u0dd4\u0daf\u0dcf_\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf_\u0db6\u0daf\u0dcf\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf_\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf_\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf".split("_"), weekdaysShort: "\u0d89\u0dbb\u0dd2_\u0dc3\u0db3\u0dd4_\u0d85\u0d9f_\u0db6\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4_\u0dc3\u0dd2\u0d9a\u0dd4_\u0dc3\u0dd9\u0db1".split("_"), weekdaysMin: "\u0d89_\u0dc3_\u0d85_\u0db6_\u0db6\u0dca\u200d\u0dbb_\u0dc3\u0dd2_\u0dc3\u0dd9".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [\u0dc0\u0dd0\u0db1\u0dd2] dddd, a h:mm:ss" }, calendar: { sameDay: "[\u0d85\u0daf] LT[\u0da7]", nextDay: "[\u0dc4\u0dd9\u0da7] LT[\u0da7]", nextWeek: "dddd LT[\u0da7]", lastDay: "[\u0d8a\u0dba\u0dda] LT[\u0da7]", lastWeek: "[\u0db4\u0dc3\u0dd4\u0d9c\u0dd2\u0dba] dddd LT[\u0da7]", sameElse: "L" }, relativeTime: { future: "%s\u0d9a\u0dd2\u0db1\u0dca", past: "%s\u0d9a\u0da7 \u0db4\u0dd9\u0dbb", s: "\u0dad\u0dad\u0dca\u0db4\u0dbb \u0d9a\u0dd2\u0dc4\u0dd2\u0db4\u0dba", ss: "\u0dad\u0dad\u0dca\u0db4\u0dbb %d", m: "\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4\u0dc0", mm: "\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4 %d", h: "\u0db4\u0dd0\u0dba", hh: "\u0db4\u0dd0\u0dba %d", d: "\u0daf\u0dd2\u0db1\u0dba", dd: "\u0daf\u0dd2\u0db1 %d", M: "\u0db8\u0dcf\u0dc3\u0dba", MM: "\u0db8\u0dcf\u0dc3 %d", y: "\u0dc0\u0dc3\u0dbb", yy: "\u0dc0\u0dc3\u0dbb %d" }, dayOfMonthOrdinalParse: /\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/, ordinal: function(e) { return e + " \u0dc0\u0dd0\u0db1\u0dd2" }, meridiemParse: /\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./, isPM: function(e) { return "\u0db4.\u0dc0." === e || "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4" === e }, meridiem: function(e, a, t) { return 11 < e ? t ? "\u0db4.\u0dc0." : "\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4" : t ? "\u0db4\u0dd9.\u0dc0." : "\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4" } });
    var Qn = "janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),
        Xn = "jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_");

    function ed(e) { return 1 < e && e < 5 }

    function ad(e, a, t, s) {
        var n = e + " ";
        switch (t) {
            case "s":
                return a || s ? "p\xe1r sek\xfand" : "p\xe1r sekundami";
            case "ss":
                return a || s ? n + (ed(e) ? "sekundy" : "sek\xfand") : n + "sekundami";
                break;
            case "m":
                return a ? "min\xfata" : s ? "min\xfatu" : "min\xfatou";
            case "mm":
                return a || s ? n + (ed(e) ? "min\xfaty" : "min\xfat") : n + "min\xfatami";
                break;
            case "h":
                return a ? "hodina" : s ? "hodinu" : "hodinou";
            case "hh":
                return a || s ? n + (ed(e) ? "hodiny" : "hod\xedn") : n + "hodinami";
                break;
            case "d":
                return a || s ? "de\u0148" : "d\u0148om";
            case "dd":
                return a || s ? n + (ed(e) ? "dni" : "dn\xed") : n + "d\u0148ami";
                break;
            case "M":
                return a || s ? "mesiac" : "mesiacom";
            case "MM":
                return a || s ? n + (ed(e) ? "mesiace" : "mesiacov") : n + "mesiacmi";
                break;
            case "y":
                return a || s ? "rok" : "rokom";
            case "yy":
                return a || s ? n + (ed(e) ? "roky" : "rokov") : n + "rokmi";
                break
        }
    }

    function td(e, a, t, s) {
        var n = e + " ";
        switch (t) {
            case "s":
                return a || s ? "nekaj sekund" : "nekaj sekundami";
            case "ss":
                return n += 1 === e ? a ? "sekundo" : "sekundi" : 2 === e ? a || s ? "sekundi" : "sekundah" : e < 5 ? a || s ? "sekunde" : "sekundah" : "sekund";
            case "m":
                return a ? "ena minuta" : "eno minuto";
            case "mm":
                return n += 1 === e ? a ? "minuta" : "minuto" : 2 === e ? a || s ? "minuti" : "minutama" : e < 5 ? a || s ? "minute" : "minutami" : a || s ? "minut" : "minutami";
            case "h":
                return a ? "ena ura" : "eno uro";
            case "hh":
                return n += 1 === e ? a ? "ura" : "uro" : 2 === e ? a || s ? "uri" : "urama" : e < 5 ? a || s ? "ure" : "urami" : a || s ? "ur" : "urami";
            case "d":
                return a || s ? "en dan" : "enim dnem";
            case "dd":
                return n += 1 === e ? a || s ? "dan" : "dnem" : 2 === e ? a || s ? "dni" : "dnevoma" : a || s ? "dni" : "dnevi";
            case "M":
                return a || s ? "en mesec" : "enim mesecem";
            case "MM":
                return n += 1 === e ? a || s ? "mesec" : "mesecem" : 2 === e ? a || s ? "meseca" : "mesecema" : e < 5 ? a || s ? "mesece" : "meseci" : a || s ? "mesecev" : "meseci";
            case "y":
                return a || s ? "eno leto" : "enim letom";
            case "yy":
                return n += 1 === e ? a || s ? "leto" : "letom" : 2 === e ? a || s ? "leti" : "letoma" : e < 5 ? a || s ? "leta" : "leti" : a || s ? "let" : "leti"
        }
    }
    l.defineLocale("sk", {
        months: Qn,
        monthsShort: Xn,
        weekdays: "nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),
        weekdaysShort: "ne_po_ut_st_\u0161t_pi_so".split("_"),
        weekdaysMin: "ne_po_ut_st_\u0161t_pi_so".split("_"),
        longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm" },
        calendar: {
            sameDay: "[dnes o] LT",
            nextDay: "[zajtra o] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[v nede\u013eu o] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [o] LT";
                    case 3:
                        return "[v stredu o] LT";
                    case 4:
                        return "[vo \u0161tvrtok o] LT";
                    case 5:
                        return "[v piatok o] LT";
                    case 6:
                        return "[v sobotu o] LT"
                }
            },
            lastDay: "[v\u010dera o] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[minul\xfa nede\u013eu o] LT";
                    case 1:
                    case 2:
                        return "[minul\xfd] dddd [o] LT";
                    case 3:
                        return "[minul\xfa stredu o] LT";
                    case 4:
                    case 5:
                        return "[minul\xfd] dddd [o] LT";
                    case 6:
                        return "[minul\xfa sobotu o] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "za %s", past: "pred %s", s: ad, ss: ad, m: ad, mm: ad, h: ad, hh: ad, d: ad, dd: ad, M: ad, MM: ad, y: ad, yy: ad },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 4 }
    }), l.defineLocale("sl", {
        months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split("_"),
        weekdaysShort: "ned._pon._tor._sre._\u010det._pet._sob.".split("_"),
        weekdaysMin: "ne_po_to_sr_\u010de_pe_so".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
        calendar: {
            sameDay: "[danes ob] LT",
            nextDay: "[jutri ob] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[v] [nedeljo] [ob] LT";
                    case 3:
                        return "[v] [sredo] [ob] LT";
                    case 6:
                        return "[v] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[v] dddd [ob] LT"
                }
            },
            lastDay: "[v\u010deraj ob] LT",
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[prej\u0161njo] [nedeljo] [ob] LT";
                    case 3:
                        return "[prej\u0161njo] [sredo] [ob] LT";
                    case 6:
                        return "[prej\u0161njo] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prej\u0161nji] dddd [ob] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "\u010dez %s", past: "pred %s", s: td, ss: td, m: td, mm: td, h: td, hh: td, d: td, dd: td, M: td, MM: td, y: td, yy: td },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 }
    }), l.defineLocale("sq", { months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xebntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xebn_Dhj".split("_"), weekdays: "E Diel_E H\xebn\xeb_E Mart\xeb_E M\xebrkur\xeb_E Enjte_E Premte_E Shtun\xeb".split("_"), weekdaysShort: "Die_H\xebn_Mar_M\xebr_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_M\xeb_E_P_Sh".split("_"), weekdaysParseExact: !0, meridiemParse: /PD|MD/, isPM: function(e) { return "M" === e.charAt(0) }, meridiem: function(e, a, t) { return e < 12 ? "PD" : "MD" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Sot n\xeb] LT", nextDay: "[Nes\xebr n\xeb] LT", nextWeek: "dddd [n\xeb] LT", lastDay: "[Dje n\xeb] LT", lastWeek: "dddd [e kaluar n\xeb] LT", sameElse: "L" }, relativeTime: { future: "n\xeb %s", past: "%s m\xeb par\xeb", s: "disa sekonda", ss: "%d sekonda", m: "nj\xeb minut\xeb", mm: "%d minuta", h: "nj\xeb or\xeb", hh: "%d or\xeb", d: "nj\xeb dit\xeb", dd: "%d dit\xeb", M: "nj\xeb muaj", MM: "%d muaj", y: "nj\xeb vit", yy: "%d vite" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    var sd = { words: { ss: ["\u0441\u0435\u043a\u0443\u043d\u0434\u0430", "\u0441\u0435\u043a\u0443\u043d\u0434\u0435", "\u0441\u0435\u043a\u0443\u043d\u0434\u0438"], m: ["\u0458\u0435\u0434\u0430\u043d \u043c\u0438\u043d\u0443\u0442", "\u0458\u0435\u0434\u043d\u0435 \u043c\u0438\u043d\u0443\u0442\u0435"], mm: ["\u043c\u0438\u043d\u0443\u0442", "\u043c\u0438\u043d\u0443\u0442\u0435", "\u043c\u0438\u043d\u0443\u0442\u0430"], h: ["\u0458\u0435\u0434\u0430\u043d \u0441\u0430\u0442", "\u0458\u0435\u0434\u043d\u043e\u0433 \u0441\u0430\u0442\u0430"], hh: ["\u0441\u0430\u0442", "\u0441\u0430\u0442\u0430", "\u0441\u0430\u0442\u0438"], dd: ["\u0434\u0430\u043d", "\u0434\u0430\u043d\u0430", "\u0434\u0430\u043d\u0430"], MM: ["\u043c\u0435\u0441\u0435\u0446", "\u043c\u0435\u0441\u0435\u0446\u0430", "\u043c\u0435\u0441\u0435\u0446\u0438"], yy: ["\u0433\u043e\u0434\u0438\u043d\u0430", "\u0433\u043e\u0434\u0438\u043d\u0435", "\u0433\u043e\u0434\u0438\u043d\u0430"] }, correctGrammaticalCase: function(e, a) { return 1 === e ? a[0] : 2 <= e && e <= 4 ? a[1] : a[2] }, translate: function(e, a, t) { var s = sd.words[t]; return 1 === t.length ? a ? s[0] : s[1] : e + " " + sd.correctGrammaticalCase(e, s) } };
    l.defineLocale("sr-cyrl", {
        months: "\u0458\u0430\u043d\u0443\u0430\u0440_\u0444\u0435\u0431\u0440\u0443\u0430\u0440_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440_\u043e\u043a\u0442\u043e\u0431\u0430\u0440_\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440_\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440".split("_"),
        monthsShort: "\u0458\u0430\u043d._\u0444\u0435\u0431._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433._\u0441\u0435\u043f._\u043e\u043a\u0442._\u043d\u043e\u0432._\u0434\u0435\u0446.".split("_"),
        monthsParseExact: !0,
        weekdays: "\u043d\u0435\u0434\u0435\u0459\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a_\u0443\u0442\u043e\u0440\u0430\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a_\u043f\u0435\u0442\u0430\u043a_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),
        weekdaysShort: "\u043d\u0435\u0434._\u043f\u043e\u043d._\u0443\u0442\u043e._\u0441\u0440\u0435._\u0447\u0435\u0442._\u043f\u0435\u0442._\u0441\u0443\u0431.".split("_"),
        weekdaysMin: "\u043d\u0435_\u043f\u043e_\u0443\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441\u0443".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
        calendar: {
            sameDay: "[\u0434\u0430\u043d\u0430\u0441 \u0443] LT",
            nextDay: "[\u0441\u0443\u0442\u0440\u0430 \u0443] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[\u0443] [\u043d\u0435\u0434\u0435\u0459\u0443] [\u0443] LT";
                    case 3:
                        return "[\u0443] [\u0441\u0440\u0435\u0434\u0443] [\u0443] LT";
                    case 6:
                        return "[\u0443] [\u0441\u0443\u0431\u043e\u0442\u0443] [\u0443] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[\u0443] dddd [\u0443] LT"
                }
            },
            lastDay: "[\u0458\u0443\u0447\u0435 \u0443] LT",
            lastWeek: function() { return ["[\u043f\u0440\u043e\u0448\u043b\u0435] [\u043d\u0435\u0434\u0435\u0459\u0435] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0443\u0442\u043e\u0440\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0440\u0435\u0434\u0435] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0447\u0435\u0442\u0432\u0440\u0442\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u0435\u0442\u043a\u0430] [\u0443] LT", "[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0443\u0431\u043e\u0442\u0435] [\u0443] LT"][this.day()] },
            sameElse: "L"
        },
        relativeTime: { future: "\u0437\u0430 %s", past: "\u043f\u0440\u0435 %s", s: "\u043d\u0435\u043a\u043e\u043b\u0438\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438", ss: sd.translate, m: sd.translate, mm: sd.translate, h: sd.translate, hh: sd.translate, d: "\u0434\u0430\u043d", dd: sd.translate, M: "\u043c\u0435\u0441\u0435\u0446", MM: sd.translate, y: "\u0433\u043e\u0434\u0438\u043d\u0443", yy: sd.translate },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 }
    });
    var nd = { words: { ss: ["sekunda", "sekunde", "sekundi"], m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function(e, a) { return 1 === e ? a[0] : 2 <= e && e <= 4 ? a[1] : a[2] }, translate: function(e, a, t) { var s = nd.words[t]; return 1 === t.length ? a ? s[0] : s[1] : e + " " + nd.correctGrammaticalCase(e, s) } };
    l.defineLocale("sr", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljak_utorak_sreda_\u010detvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sre._\u010det._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedelju] [u] LT";
                    case 3:
                        return "[u] [sredu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            },
            lastDay: "[ju\u010de u] LT",
            lastWeek: function() { return ["[pro\u0161le] [nedelje] [u] LT", "[pro\u0161log] [ponedeljka] [u] LT", "[pro\u0161log] [utorka] [u] LT", "[pro\u0161le] [srede] [u] LT", "[pro\u0161log] [\u010detvrtka] [u] LT", "[pro\u0161log] [petka] [u] LT", "[pro\u0161le] [subote] [u] LT"][this.day()] },
            sameElse: "L"
        },
        relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", ss: nd.translate, m: nd.translate, mm: nd.translate, h: nd.translate, hh: nd.translate, d: "dan", dd: nd.translate, M: "mesec", MM: nd.translate, y: "godinu", yy: nd.translate },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: { dow: 1, doy: 7 }
    }), l.defineLocale("ss", { months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Namuhla nga] LT", nextDay: "[Kusasa nga] LT", nextWeek: "dddd [nga] LT", lastDay: "[Itolo nga] LT", lastWeek: "dddd [leliphelile] [nga] LT", sameElse: "L" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", ss: "%d mzuzwana", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" }, meridiemParse: /ekuseni|emini|entsambama|ebusuku/, meridiem: function(e, a, t) { return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku" }, meridiemHour: function(e, a) { return 12 === e && (e = 0), "ekuseni" === a ? e : "emini" === a ? 11 <= e ? e : e + 12 : "entsambama" === a || "ebusuku" === a ? 0 === e ? 0 : e + 12 : void 0 }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: "%d", week: { dow: 1, doy: 4 } }), l.defineLocale("sv", { months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split("_"), weekdaysShort: "s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"), weekdaysMin: "s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Ig\xe5r] LT", nextWeek: "[P\xe5] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "f\xf6r %s sedan", s: "n\xe5gra sekunder", ss: "%d sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en m\xe5nad", MM: "%d m\xe5nader", y: "ett \xe5r", yy: "%d \xe5r" }, dayOfMonthOrdinalParse: /\d{1,2}(e|a)/, ordinal: function(e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === a ? "a" : 2 === a ? "a" : "e") }, week: { dow: 1, doy: 4 } }), l.defineLocale("sw", { months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[leo saa] LT", nextDay: "[kesho saa] LT", nextWeek: "[wiki ijayo] dddd [saat] LT", lastDay: "[jana] LT", lastWeek: "[wiki iliyopita] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", ss: "sekunde %d", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, week: { dow: 1, doy: 7 } });
    var dd = { 1: "\u0be7", 2: "\u0be8", 3: "\u0be9", 4: "\u0bea", 5: "\u0beb", 6: "\u0bec", 7: "\u0bed", 8: "\u0bee", 9: "\u0bef", 0: "\u0be6" },
        rd = { "\u0be7": "1", "\u0be8": "2", "\u0be9": "3", "\u0bea": "4", "\u0beb": "5", "\u0bec": "6", "\u0bed": "7", "\u0bee": "8", "\u0bef": "9", "\u0be6": "0" };
    l.defineLocale("ta", { months: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"), monthsShort: "\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"), weekdays: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0b9f\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0ba9\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8".split("_"), weekdaysShort: "\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf_\u0b9a\u0ba9\u0bbf".split("_"), weekdaysMin: "\u0b9e\u0bbe_\u0ba4\u0bbf_\u0b9a\u0bc6_\u0baa\u0bc1_\u0bb5\u0bbf_\u0bb5\u0bc6_\u0b9a".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, calendar: { sameDay: "[\u0b87\u0ba9\u0bcd\u0bb1\u0bc1] LT", nextDay: "[\u0ba8\u0bbe\u0bb3\u0bc8] LT", nextWeek: "dddd, LT", lastDay: "[\u0ba8\u0bc7\u0bb1\u0bcd\u0bb1\u0bc1] LT", lastWeek: "[\u0b95\u0b9f\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0b87\u0bb2\u0bcd", past: "%s \u0bae\u0bc1\u0ba9\u0bcd", s: "\u0b92\u0bb0\u0bc1 \u0b9a\u0bbf\u0bb2 \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd", ss: "%d \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd", m: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd", mm: "%d \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd", h: "\u0b92\u0bb0\u0bc1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd", hh: "%d \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd", d: "\u0b92\u0bb0\u0bc1 \u0ba8\u0bbe\u0bb3\u0bcd", dd: "%d \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bcd", M: "\u0b92\u0bb0\u0bc1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd", MM: "%d \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd", y: "\u0b92\u0bb0\u0bc1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd", yy: "%d \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd" }, dayOfMonthOrdinalParse: /\d{1,2}\u0bb5\u0ba4\u0bc1/, ordinal: function(e) { return e + "\u0bb5\u0ba4\u0bc1" }, preparse: function(e) { return e.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g, function(e) { return rd[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return dd[e] }) }, meridiemParse: /\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/, meridiem: function(e, a, t) { return e < 2 ? " \u0baf\u0bbe\u0bae\u0bae\u0bcd" : e < 6 ? " \u0bb5\u0bc8\u0b95\u0bb1\u0bc8" : e < 10 ? " \u0b95\u0bbe\u0bb2\u0bc8" : e < 14 ? " \u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" : e < 18 ? " \u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1" : e < 22 ? " \u0bae\u0bbe\u0bb2\u0bc8" : " \u0baf\u0bbe\u0bae\u0bae\u0bcd" }, meridiemHour: function(e, a) { return 12 === e && (e = 0), "\u0baf\u0bbe\u0bae\u0bae\u0bcd" === a ? e < 2 ? e : e + 12 : "\u0bb5\u0bc8\u0b95\u0bb1\u0bc8" === a || "\u0b95\u0bbe\u0bb2\u0bc8" === a ? e : "\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd" === a && 10 <= e ? e : e + 12 }, week: { dow: 0, doy: 6 } }), l.defineLocale("te", { months: "\u0c1c\u0c28\u0c35\u0c30\u0c3f_\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f_\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d_\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c41\u0c32\u0c48_\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41_\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d_\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d_\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d_\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split("_"), monthsShort: "\u0c1c\u0c28._\u0c2b\u0c3f\u0c2c\u0c4d\u0c30._\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f._\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c41\u0c32\u0c48_\u0c06\u0c17._\u0c38\u0c46\u0c2a\u0c4d._\u0c05\u0c15\u0c4d\u0c1f\u0c4b._\u0c28\u0c35._\u0c21\u0c3f\u0c38\u0c46.".split("_"), monthsParseExact: !0, weekdays: "\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02_\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02_\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02_\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02_\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02".split("_"), weekdaysShort: "\u0c06\u0c26\u0c3f_\u0c38\u0c4b\u0c2e_\u0c2e\u0c02\u0c17\u0c33_\u0c2c\u0c41\u0c27_\u0c17\u0c41\u0c30\u0c41_\u0c36\u0c41\u0c15\u0c4d\u0c30_\u0c36\u0c28\u0c3f".split("_"), weekdaysMin: "\u0c06_\u0c38\u0c4b_\u0c2e\u0c02_\u0c2c\u0c41_\u0c17\u0c41_\u0c36\u0c41_\u0c36".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[\u0c28\u0c47\u0c21\u0c41] LT", nextDay: "[\u0c30\u0c47\u0c2a\u0c41] LT", nextWeek: "dddd, LT", lastDay: "[\u0c28\u0c3f\u0c28\u0c4d\u0c28] LT", lastWeek: "[\u0c17\u0c24] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s \u0c32\u0c4b", past: "%s \u0c15\u0c4d\u0c30\u0c3f\u0c24\u0c02", s: "\u0c15\u0c4a\u0c28\u0c4d\u0c28\u0c3f \u0c15\u0c4d\u0c37\u0c23\u0c3e\u0c32\u0c41", ss: "%d \u0c38\u0c46\u0c15\u0c28\u0c4d\u0c32\u0c41", m: "\u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02", mm: "%d \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c41", h: "\u0c12\u0c15 \u0c17\u0c02\u0c1f", hh: "%d \u0c17\u0c02\u0c1f\u0c32\u0c41", d: "\u0c12\u0c15 \u0c30\u0c4b\u0c1c\u0c41", dd: "%d \u0c30\u0c4b\u0c1c\u0c41\u0c32\u0c41", M: "\u0c12\u0c15 \u0c28\u0c46\u0c32", MM: "%d \u0c28\u0c46\u0c32\u0c32\u0c41", y: "\u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02", yy: "%d \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41" }, dayOfMonthOrdinalParse: /\d{1,2}\u0c35/, ordinal: "%d\u0c35", meridiemParse: /\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/, meridiemHour: function(e, a) { return 12 === e && (e = 0), "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" === a ? e < 4 ? e : e + 12 : "\u0c09\u0c26\u0c2f\u0c02" === a ? e : "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02" === a ? 10 <= e ? e : e + 12 : "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02" === a ? e + 12 : void 0 }, meridiem: function(e, a, t) { return e < 4 ? "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" : e < 10 ? "\u0c09\u0c26\u0c2f\u0c02" : e < 17 ? "\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02" : e < 20 ? "\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02" : "\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f" }, week: { dow: 0, doy: 6 } }), l.defineLocale("tet", { months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Ju\xf1u_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"), weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"), weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Ohin iha] LT", nextDay: "[Aban iha] LT", nextWeek: "dddd [iha] LT", lastDay: "[Horiseik iha] LT", lastWeek: "dddd [semana kotuk] [iha] LT", sameElse: "L" }, relativeTime: { future: "iha %s", past: "%s liuba", s: "minutu balun", ss: "minutu %d", m: "minutu ida", mm: "minutu %d", h: "oras ida", hh: "oras %d", d: "loron ida", dd: "loron %d", M: "fulan ida", MM: "fulan %d", y: "tinan ida", yy: "tinan %d" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") }, week: { dow: 1, doy: 4 } });
    var _d = { 0: "-\u0443\u043c", 1: "-\u0443\u043c", 2: "-\u044e\u043c", 3: "-\u044e\u043c", 4: "-\u0443\u043c", 5: "-\u0443\u043c", 6: "-\u0443\u043c", 7: "-\u0443\u043c", 8: "-\u0443\u043c", 9: "-\u0443\u043c", 10: "-\u0443\u043c", 12: "-\u0443\u043c", 13: "-\u0443\u043c", 20: "-\u0443\u043c", 30: "-\u044e\u043c", 40: "-\u0443\u043c", 50: "-\u0443\u043c", 60: "-\u0443\u043c", 70: "-\u0443\u043c", 80: "-\u0443\u043c", 90: "-\u0443\u043c", 100: "-\u0443\u043c" };
    l.defineLocale("tg", { months: "\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"), monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"), weekdays: "\u044f\u043a\u0448\u0430\u043d\u0431\u0435_\u0434\u0443\u0448\u0430\u043d\u0431\u0435_\u0441\u0435\u0448\u0430\u043d\u0431\u0435_\u0447\u043e\u0440\u0448\u0430\u043d\u0431\u0435_\u043f\u0430\u043d\u04b7\u0448\u0430\u043d\u0431\u0435_\u04b7\u0443\u043c\u044a\u0430_\u0448\u0430\u043d\u0431\u0435".split("_"), weekdaysShort: "\u044f\u0448\u0431_\u0434\u0448\u0431_\u0441\u0448\u0431_\u0447\u0448\u0431_\u043f\u0448\u0431_\u04b7\u0443\u043c_\u0448\u043d\u0431".split("_"), weekdaysMin: "\u044f\u0448_\u0434\u0448_\u0441\u0448_\u0447\u0448_\u043f\u0448_\u04b7\u043c_\u0448\u0431".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u0418\u043c\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT", nextDay: "[\u041f\u0430\u0433\u043e\u04b3 \u0441\u043e\u0430\u0442\u0438] LT", lastDay: "[\u0414\u0438\u0440\u04ef\u0437 \u0441\u043e\u0430\u0442\u0438] LT", nextWeek: "dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u043e\u044f\u043d\u0434\u0430 \u0441\u043e\u0430\u0442\u0438] LT", lastWeek: "dddd[\u0438] [\u04b3\u0430\u0444\u0442\u0430\u0438 \u0433\u0443\u0437\u0430\u0448\u0442\u0430 \u0441\u043e\u0430\u0442\u0438] LT", sameElse: "L" }, relativeTime: { future: "\u0431\u0430\u044a\u0434\u0438 %s", past: "%s \u043f\u0435\u0448", s: "\u044f\u043a\u0447\u0430\u043d\u0434 \u0441\u043e\u043d\u0438\u044f", m: "\u044f\u043a \u0434\u0430\u049b\u0438\u049b\u0430", mm: "%d \u0434\u0430\u049b\u0438\u049b\u0430", h: "\u044f\u043a \u0441\u043e\u0430\u0442", hh: "%d \u0441\u043e\u0430\u0442", d: "\u044f\u043a \u0440\u04ef\u0437", dd: "%d \u0440\u04ef\u0437", M: "\u044f\u043a \u043c\u043e\u04b3", MM: "%d \u043c\u043e\u04b3", y: "\u044f\u043a \u0441\u043e\u043b", yy: "%d \u0441\u043e\u043b" }, meridiemParse: /\u0448\u0430\u0431|\u0441\u0443\u0431\u04b3|\u0440\u04ef\u0437|\u0431\u0435\u0433\u043e\u04b3/, meridiemHour: function(e, a) { return 12 === e && (e = 0), "\u0448\u0430\u0431" === a ? e < 4 ? e : e + 12 : "\u0441\u0443\u0431\u04b3" === a ? e : "\u0440\u04ef\u0437" === a ? 11 <= e ? e : e + 12 : "\u0431\u0435\u0433\u043e\u04b3" === a ? e + 12 : void 0 }, meridiem: function(e, a, t) { return e < 4 ? "\u0448\u0430\u0431" : e < 11 ? "\u0441\u0443\u0431\u04b3" : e < 16 ? "\u0440\u04ef\u0437" : e < 19 ? "\u0431\u0435\u0433\u043e\u04b3" : "\u0448\u0430\u0431" }, dayOfMonthOrdinalParse: /\d{1,2}-(\u0443\u043c|\u044e\u043c)/, ordinal: function(e) { return e + (_d[e] || _d[e % 10] || _d[100 <= e ? 100 : null]) }, week: { dow: 1, doy: 7 } }), l.defineLocale("th", { months: "\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21_\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c_\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21_\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19_\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21_\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19_\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21_\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21_\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19_\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21_\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19_\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split("_"), monthsShort: "\u0e21.\u0e04._\u0e01.\u0e1e._\u0e21\u0e35.\u0e04._\u0e40\u0e21.\u0e22._\u0e1e.\u0e04._\u0e21\u0e34.\u0e22._\u0e01.\u0e04._\u0e2a.\u0e04._\u0e01.\u0e22._\u0e15.\u0e04._\u0e1e.\u0e22._\u0e18.\u0e04.".split("_"), monthsParseExact: !0, weekdays: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"), weekdaysShort: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"), weekdaysMin: "\u0e2d\u0e32._\u0e08._\u0e2d._\u0e1e._\u0e1e\u0e24._\u0e28._\u0e2a.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm", LLLL: "\u0e27\u0e31\u0e19dddd\u0e17\u0e35\u0e48 D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm" }, meridiemParse: /\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/, isPM: function(e) { return "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" === e }, meridiem: function(e, a, t) { return e < 12 ? "\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" : "\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07" }, calendar: { sameDay: "[\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT", nextDay: "[\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT", nextWeek: "dddd[\u0e2b\u0e19\u0e49\u0e32 \u0e40\u0e27\u0e25\u0e32] LT", lastDay: "[\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT", lastWeek: "[\u0e27\u0e31\u0e19]dddd[\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e27\u0e25\u0e32] LT", sameElse: "L" }, relativeTime: { future: "\u0e2d\u0e35\u0e01 %s", past: "%s\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27", s: "\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35", ss: "%d \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35", m: "1 \u0e19\u0e32\u0e17\u0e35", mm: "%d \u0e19\u0e32\u0e17\u0e35", h: "1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07", hh: "%d \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07", d: "1 \u0e27\u0e31\u0e19", dd: "%d \u0e27\u0e31\u0e19", M: "1 \u0e40\u0e14\u0e37\u0e2d\u0e19", MM: "%d \u0e40\u0e14\u0e37\u0e2d\u0e19", y: "1 \u0e1b\u0e35", yy: "%d \u0e1b\u0e35" } }), l.defineLocale("tl-ph", { months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, calendar: { sameDay: "LT [ngayong araw]", nextDay: "[Bukas ng] LT", nextWeek: "LT [sa susunod na] dddd", lastDay: "LT [kahapon]", lastWeek: "LT [noong nakaraang] dddd", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", ss: "%d segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function(e) { return e }, week: { dow: 1, doy: 4 } });
    var id = "pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

    function od(e, a, t, s) {
        var n = function(e) {
            var a = Math.floor(e % 1e3 / 100),
                t = Math.floor(e % 100 / 10),
                s = e % 10,
                n = "";
            0 < a && (n += id[a] + "vatlh");
            0 < t && (n += ("" !== n ? " " : "") + id[t] + "maH");
            0 < s && (n += ("" !== n ? " " : "") + id[s]);
            return "" === n ? "pagh" : n
        }(e);
        switch (t) {
            case "ss":
                return n + " lup";
            case "mm":
                return n + " tup";
            case "hh":
                return n + " rep";
            case "dd":
                return n + " jaj";
            case "MM":
                return n + " jar";
            case "yy":
                return n + " DIS"
        }
    }
    l.defineLocale("tlh", { months: "tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019".split("_"), monthsShort: "jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019".split("_"), monthsParseExact: !0, weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[DaHjaj] LT", nextDay: "[wa\u2019leS] LT", nextWeek: "LLL", lastDay: "[wa\u2019Hu\u2019] LT", lastWeek: "LLL", sameElse: "L" }, relativeTime: { future: function(e) { var a = e; return a = -1 !== e.indexOf("jaj") ? a.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? a.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? a.slice(0, -3) + "nem" : a + " pIq" }, past: function(e) { var a = e; return a = -1 !== e.indexOf("jaj") ? a.slice(0, -3) + "Hu\u2019" : -1 !== e.indexOf("jar") ? a.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? a.slice(0, -3) + "ben" : a + " ret" }, s: "puS lup", ss: od, m: "wa\u2019 tup", mm: od, h: "wa\u2019 rep", hh: od, d: "wa\u2019 jaj", dd: od, M: "wa\u2019 jar", MM: od, y: "wa\u2019 DIS", yy: od }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
    var md = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'\xfcnc\xfc", 4: "'\xfcnc\xfc", 100: "'\xfcnc\xfc", 6: "'nc\u0131", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'\u0131nc\u0131", 90: "'\u0131nc\u0131" };

    function ud(e, a, t, s) { var n = { s: ["viensas secunds", "'iensas secunds"], ss: [e + " secunds", e + " secunds"], m: ["'n m\xedut", "'iens m\xedut"], mm: [e + " m\xeduts", e + " m\xeduts"], h: ["'n \xfeora", "'iensa \xfeora"], hh: [e + " \xfeoras", e + " \xfeoras"], d: ["'n ziua", "'iensa ziua"], dd: [e + " ziuas", e + " ziuas"], M: ["'n mes", "'iens mes"], MM: [e + " mesen", e + " mesen"], y: ["'n ar", "'iens ar"], yy: [e + " ars", e + " ars"] }; return s ? n[t][0] : a ? n[t][0] : n[t][1] }

    function ld(e, a, t) { var s, n; return "m" === t ? a ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443" : "h" === t ? a ? "\u0433\u043e\u0434\u0438\u043d\u0430" : "\u0433\u043e\u0434\u0438\u043d\u0443" : e + " " + (s = +e, n = { ss: a ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434", mm: a ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d", hh: a ? "\u0433\u043e\u0434\u0438\u043d\u0430_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d" : "\u0433\u043e\u0434\u0438\u043d\u0443_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d", dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u043d\u0456\u0432", MM: "\u043c\u0456\u0441\u044f\u0446\u044c_\u043c\u0456\u0441\u044f\u0446\u0456_\u043c\u0456\u0441\u044f\u0446\u0456\u0432", yy: "\u0440\u0456\u043a_\u0440\u043e\u043a\u0438_\u0440\u043e\u043a\u0456\u0432" }[t].split("_"), s % 10 == 1 && s % 100 != 11 ? n[0] : 2 <= s % 10 && s % 10 <= 4 && (s % 100 < 10 || 20 <= s % 100) ? n[1] : n[2]) }

    function Md(e) { return function() { return e + "\u043e" + (11 === this.hours() ? "\u0431" : "") + "] LT" } }
    l.defineLocale("tr", {
        months: "Ocak_\u015eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011fustos_Eyl\xfcl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
        monthsShort: "Oca_\u015eub_Mar_Nis_May_Haz_Tem_A\u011fu_Eyl_Eki_Kas_Ara".split("_"),
        weekdays: "Pazar_Pazartesi_Sal\u0131_\xc7ar\u015famba_Per\u015fembe_Cuma_Cumartesi".split("_"),
        weekdaysShort: "Paz_Pts_Sal_\xc7ar_Per_Cum_Cts".split("_"),
        weekdaysMin: "Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" },
        calendar: { sameDay: "[bug\xfcn saat] LT", nextDay: "[yar\u0131n saat] LT", nextWeek: "[gelecek] dddd [saat] LT", lastDay: "[d\xfcn] LT", lastWeek: "[ge\xe7en] dddd [saat] LT", sameElse: "L" },
        relativeTime: { future: "%s sonra", past: "%s \xf6nce", s: "birka\xe7 saniye", ss: "%d saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir g\xfcn", dd: "%d g\xfcn", M: "bir ay", MM: "%d ay", y: "bir y\u0131l", yy: "%d y\u0131l" },
        ordinal: function(e, a) {
            switch (a) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                    return e;
                default:
                    if (0 === e) return e + "'\u0131nc\u0131";
                    var t = e % 10;
                    return e + (md[t] || md[e % 100 - t] || md[100 <= e ? 100 : null])
            }
        },
        week: { dow: 1, doy: 7 }
    }), l.defineLocale("tzl", { months: "Januar_Fevraglh_Mar\xe7_Avr\xefu_Mai_G\xfcn_Julia_Guscht_Setemvar_Listop\xe4ts_Noemvar_Zecemvar".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_G\xfcn_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdays: "S\xfaladi_L\xfane\xe7i_Maitzi_M\xe1rcuri_Xh\xfaadi_Vi\xe9ner\xe7i_S\xe1turi".split("_"), weekdaysShort: "S\xfal_L\xfan_Mai_M\xe1r_Xh\xfa_Vi\xe9_S\xe1t".split("_"), weekdaysMin: "S\xfa_L\xfa_Ma_M\xe1_Xh_Vi_S\xe1".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" }, meridiemParse: /d\'o|d\'a/i, isPM: function(e) { return "d'o" === e.toLowerCase() }, meridiem: function(e, a, t) { return 11 < e ? t ? "d'o" : "D'O" : t ? "d'a" : "D'A" }, calendar: { sameDay: "[oxhi \xe0] LT", nextDay: "[dem\xe0 \xe0] LT", nextWeek: "dddd [\xe0] LT", lastDay: "[ieiri \xe0] LT", lastWeek: "[s\xfcr el] dddd [lasteu \xe0] LT", sameElse: "L" }, relativeTime: { future: "osprei %s", past: "ja%s", s: ud, ss: ud, m: ud, mm: ud, h: ud, hh: ud, d: ud, dd: ud, M: ud, MM: ud, y: ud, yy: ud }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), l.defineLocale("tzm-latn", { months: "innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", ss: "%d imik", m: "minu\u1e0d", mm: "%d minu\u1e0d", h: "sa\u025ba", hh: "%d tassa\u025bin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" }, week: { dow: 6, doy: 12 } }), l.defineLocale("tzm", { months: "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"), monthsShort: "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"), weekdays: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"), weekdaysShort: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"), weekdaysMin: "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[\u2d30\u2d59\u2d37\u2d45 \u2d34] LT", nextDay: "[\u2d30\u2d59\u2d3d\u2d30 \u2d34] LT", nextWeek: "dddd [\u2d34] LT", lastDay: "[\u2d30\u2d5a\u2d30\u2d4f\u2d5c \u2d34] LT", lastWeek: "dddd [\u2d34] LT", sameElse: "L" }, relativeTime: { future: "\u2d37\u2d30\u2d37\u2d45 \u2d59 \u2d62\u2d30\u2d4f %s", past: "\u2d62\u2d30\u2d4f %s", s: "\u2d49\u2d4e\u2d49\u2d3d", ss: "%d \u2d49\u2d4e\u2d49\u2d3d", m: "\u2d4e\u2d49\u2d4f\u2d53\u2d3a", mm: "%d \u2d4e\u2d49\u2d4f\u2d53\u2d3a", h: "\u2d59\u2d30\u2d44\u2d30", hh: "%d \u2d5c\u2d30\u2d59\u2d59\u2d30\u2d44\u2d49\u2d4f", d: "\u2d30\u2d59\u2d59", dd: "%d o\u2d59\u2d59\u2d30\u2d4f", M: "\u2d30\u2d62o\u2d53\u2d54", MM: "%d \u2d49\u2d62\u2d62\u2d49\u2d54\u2d4f", y: "\u2d30\u2d59\u2d33\u2d30\u2d59", yy: "%d \u2d49\u2d59\u2d33\u2d30\u2d59\u2d4f" }, week: { dow: 6, doy: 12 } }), l.defineLocale("ug-cn", {
        months: "\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"),
        monthsShort: "\u064a\u0627\u0646\u06cb\u0627\u0631_\u0641\u06d0\u06cb\u0631\u0627\u0644_\u0645\u0627\u0631\u062a_\u0626\u0627\u067e\u0631\u06d0\u0644_\u0645\u0627\u064a_\u0626\u0649\u064a\u06c7\u0646_\u0626\u0649\u064a\u06c7\u0644_\u0626\u0627\u06cb\u063a\u06c7\u0633\u062a_\u0633\u06d0\u0646\u062a\u06d5\u0628\u0649\u0631_\u0626\u06c6\u0643\u062a\u06d5\u0628\u0649\u0631_\u0646\u0648\u064a\u0627\u0628\u0649\u0631_\u062f\u06d0\u0643\u0627\u0628\u0649\u0631".split("_"),
        weekdays: "\u064a\u06d5\u0643\u0634\u06d5\u0646\u0628\u06d5_\u062f\u06c8\u0634\u06d5\u0646\u0628\u06d5_\u0633\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u0686\u0627\u0631\u0634\u06d5\u0646\u0628\u06d5_\u067e\u06d5\u064a\u0634\u06d5\u0646\u0628\u06d5_\u062c\u06c8\u0645\u06d5_\u0634\u06d5\u0646\u0628\u06d5".split("_"),
        weekdaysShort: "\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"),
        weekdaysMin: "\u064a\u06d5_\u062f\u06c8_\u0633\u06d5_\u0686\u0627_\u067e\u06d5_\u062c\u06c8_\u0634\u06d5".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649", LLL: "YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm", LLLL: "dddd\u060c YYYY-\u064a\u0649\u0644\u0649M-\u0626\u0627\u064a\u0646\u0649\u06adD-\u0643\u06c8\u0646\u0649\u060c HH:mm" },
        meridiemParse: /\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5|\u0633\u06d5\u06be\u06d5\u0631|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646|\u0686\u06c8\u0634|\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646|\u0643\u06d5\u0686/,
        meridiemHour: function(e, a) { return 12 === e && (e = 0), "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5" === a || "\u0633\u06d5\u06be\u06d5\u0631" === a || "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646" === a ? e : "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646" === a || "\u0643\u06d5\u0686" === a ? e + 12 : 11 <= e ? e : e + 12 },
        meridiem: function(e, a, t) { var s = 100 * e + a; return s < 600 ? "\u064a\u06d0\u0631\u0649\u0645 \u0643\u06d0\u0686\u06d5" : s < 900 ? "\u0633\u06d5\u06be\u06d5\u0631" : s < 1130 ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0628\u06c7\u0631\u06c7\u0646" : s < 1230 ? "\u0686\u06c8\u0634" : s < 1800 ? "\u0686\u06c8\u0634\u062a\u0649\u0646 \u0643\u06d0\u064a\u0649\u0646" : "\u0643\u06d5\u0686" },
        calendar: { sameDay: "[\u0628\u06c8\u06af\u06c8\u0646 \u0633\u0627\u0626\u06d5\u062a] LT", nextDay: "[\u0626\u06d5\u062a\u06d5 \u0633\u0627\u0626\u06d5\u062a] LT", nextWeek: "[\u0643\u06d0\u0644\u06d5\u0631\u0643\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT", lastDay: "[\u062a\u06c6\u0646\u06c8\u06af\u06c8\u0646] LT", lastWeek: "[\u0626\u0627\u0644\u062f\u0649\u0646\u0642\u0649] dddd [\u0633\u0627\u0626\u06d5\u062a] LT", sameElse: "L" },
        relativeTime: { future: "%s \u0643\u06d0\u064a\u0649\u0646", past: "%s \u0628\u06c7\u0631\u06c7\u0646", s: "\u0646\u06d5\u0686\u0686\u06d5 \u0633\u06d0\u0643\u0648\u0646\u062a", ss: "%d \u0633\u06d0\u0643\u0648\u0646\u062a", m: "\u0628\u0649\u0631 \u0645\u0649\u0646\u06c7\u062a", mm: "%d \u0645\u0649\u0646\u06c7\u062a", h: "\u0628\u0649\u0631 \u0633\u0627\u0626\u06d5\u062a", hh: "%d \u0633\u0627\u0626\u06d5\u062a", d: "\u0628\u0649\u0631 \u0643\u06c8\u0646", dd: "%d \u0643\u06c8\u0646", M: "\u0628\u0649\u0631 \u0626\u0627\u064a", MM: "%d \u0626\u0627\u064a", y: "\u0628\u0649\u0631 \u064a\u0649\u0644", yy: "%d \u064a\u0649\u0644" },
        dayOfMonthOrdinalParse: /\d{1,2}(-\u0643\u06c8\u0646\u0649|-\u0626\u0627\u064a|-\u06be\u06d5\u067e\u062a\u06d5)/,
        ordinal: function(e, a) {
            switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + "-\u0643\u06c8\u0646\u0649";
                case "w":
                case "W":
                    return e + "-\u06be\u06d5\u067e\u062a\u06d5";
                default:
                    return e
            }
        },
        preparse: function(e) { return e.replace(/\u060c/g, ",") },
        postformat: function(e) { return e.replace(/,/g, "\u060c") },
        week: { dow: 1, doy: 7 }
    }), l.defineLocale("uk", {
        months: { format: "\u0441\u0456\u0447\u043d\u044f_\u043b\u044e\u0442\u043e\u0433\u043e_\u0431\u0435\u0440\u0435\u0437\u043d\u044f_\u043a\u0432\u0456\u0442\u043d\u044f_\u0442\u0440\u0430\u0432\u043d\u044f_\u0447\u0435\u0440\u0432\u043d\u044f_\u043b\u0438\u043f\u043d\u044f_\u0441\u0435\u0440\u043f\u043d\u044f_\u0432\u0435\u0440\u0435\u0441\u043d\u044f_\u0436\u043e\u0432\u0442\u043d\u044f_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043d\u044f".split("_"), standalone: "\u0441\u0456\u0447\u0435\u043d\u044c_\u043b\u044e\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c_\u043a\u0432\u0456\u0442\u0435\u043d\u044c_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u0435\u0440\u0432\u0435\u043d\u044c_\u043b\u0438\u043f\u0435\u043d\u044c_\u0441\u0435\u0440\u043f\u0435\u043d\u044c_\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c_\u0436\u043e\u0432\u0442\u0435\u043d\u044c_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043d\u044c".split("_") },
        monthsShort: "\u0441\u0456\u0447_\u043b\u044e\u0442_\u0431\u0435\u0440_\u043a\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043b\u0438\u043f_\u0441\u0435\u0440\u043f_\u0432\u0435\u0440_\u0436\u043e\u0432\u0442_\u043b\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"),
        weekdays: function(e, a) { var t = { nominative: "\u043d\u0435\u0434\u0456\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"), accusative: "\u043d\u0435\u0434\u0456\u043b\u044e_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044e_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"), genitive: "\u043d\u0435\u0434\u0456\u043b\u0456_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043a\u0430_\u0432\u0456\u0432\u0442\u043e\u0440\u043a\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u0456_\u0441\u0443\u0431\u043e\u0442\u0438".split("_") }; return !0 === e ? t.nominative.slice(1, 7).concat(t.nominative.slice(0, 1)) : e ? t[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(a) ? "accusative" : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(a) ? "genitive" : "nominative"][e.day()] : t.nominative },
        weekdaysShort: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
        weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY \u0440.", LLL: "D MMMM YYYY \u0440., HH:mm", LLLL: "dddd, D MMMM YYYY \u0440., HH:mm" },
        calendar: {
            sameDay: Md("[\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 "),
            nextDay: Md("[\u0417\u0430\u0432\u0442\u0440\u0430 "),
            lastDay: Md("[\u0412\u0447\u043e\u0440\u0430 "),
            nextWeek: Md("[\u0423] dddd ["),
            lastWeek: function() {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return Md("[\u041c\u0438\u043d\u0443\u043b\u043e\u0457] dddd [").call(this);
                    case 1:
                    case 2:
                    case 4:
                        return Md("[\u041c\u0438\u043d\u0443\u043b\u043e\u0433\u043e] dddd [").call(this)
                }
            },
            sameElse: "L"
        },
        relativeTime: { future: "\u0437\u0430 %s", past: "%s \u0442\u043e\u043c\u0443", s: "\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434", ss: ld, m: ld, mm: ld, h: "\u0433\u043e\u0434\u0438\u043d\u0443", hh: ld, d: "\u0434\u0435\u043d\u044c", dd: ld, M: "\u043c\u0456\u0441\u044f\u0446\u044c", MM: ld, y: "\u0440\u0456\u043a", yy: ld },
        meridiemParse: /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,
        isPM: function(e) { return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(e) },
        meridiem: function(e, a, t) { return e < 4 ? "\u043d\u043e\u0447\u0456" : e < 12 ? "\u0440\u0430\u043d\u043a\u0443" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u043e\u0440\u0430" },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/,
        ordinal: function(e, a) {
            switch (a) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return e + "-\u0439";
                case "D":
                    return e + "-\u0433\u043e";
                default:
                    return e
            }
        },
        week: { dow: 1, doy: 7 }
    });
    var hd = ["\u062c\u0646\u0648\u0631\u06cc", "\u0641\u0631\u0648\u0631\u06cc", "\u0645\u0627\u0631\u0686", "\u0627\u067e\u0631\u06cc\u0644", "\u0645\u0626\u06cc", "\u062c\u0648\u0646", "\u062c\u0648\u0644\u0627\u0626\u06cc", "\u0627\u06af\u0633\u062a", "\u0633\u062a\u0645\u0628\u0631", "\u0627\u06a9\u062a\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062f\u0633\u0645\u0628\u0631"],
        Ld = ["\u0627\u062a\u0648\u0627\u0631", "\u067e\u06cc\u0631", "\u0645\u0646\u06af\u0644", "\u0628\u062f\u06be", "\u062c\u0645\u0639\u0631\u0627\u062a", "\u062c\u0645\u0639\u06c1", "\u06c1\u0641\u062a\u06c1"];
    return l.defineLocale("ur", { months: hd, monthsShort: hd, weekdays: Ld, weekdaysShort: Ld, weekdaysMin: Ld, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd\u060c D MMMM YYYY HH:mm" }, meridiemParse: /\u0635\u0628\u062d|\u0634\u0627\u0645/, isPM: function(e) { return "\u0634\u0627\u0645" === e }, meridiem: function(e, a, t) { return e < 12 ? "\u0635\u0628\u062d" : "\u0634\u0627\u0645" }, calendar: { sameDay: "[\u0622\u062c \u0628\u0648\u0642\u062a] LT", nextDay: "[\u06a9\u0644 \u0628\u0648\u0642\u062a] LT", nextWeek: "dddd [\u0628\u0648\u0642\u062a] LT", lastDay: "[\u06af\u0630\u0634\u062a\u06c1 \u0631\u0648\u0632 \u0628\u0648\u0642\u062a] LT", lastWeek: "[\u06af\u0630\u0634\u062a\u06c1] dddd [\u0628\u0648\u0642\u062a] LT", sameElse: "L" }, relativeTime: { future: "%s \u0628\u0639\u062f", past: "%s \u0642\u0628\u0644", s: "\u0686\u0646\u062f \u0633\u06cc\u06a9\u0646\u0688", ss: "%d \u0633\u06cc\u06a9\u0646\u0688", m: "\u0627\u06cc\u06a9 \u0645\u0646\u0679", mm: "%d \u0645\u0646\u0679", h: "\u0627\u06cc\u06a9 \u06af\u06be\u0646\u0679\u06c1", hh: "%d \u06af\u06be\u0646\u0679\u06d2", d: "\u0627\u06cc\u06a9 \u062f\u0646", dd: "%d \u062f\u0646", M: "\u0627\u06cc\u06a9 \u0645\u0627\u06c1", MM: "%d \u0645\u0627\u06c1", y: "\u0627\u06cc\u06a9 \u0633\u0627\u0644", yy: "%d \u0633\u0627\u0644" }, preparse: function(e) { return e.replace(/\u060c/g, ",") }, postformat: function(e) { return e.replace(/,/g, "\u060c") }, week: { dow: 1, doy: 4 } }), l.defineLocale("uz-latn", { months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Bugun soat] LT [da]", nextDay: "[Ertaga] LT [da]", nextWeek: "dddd [kuni soat] LT [da]", lastDay: "[Kecha soat] LT [da]", lastWeek: "[O'tgan] dddd [kuni soat] LT [da]", sameElse: "L" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", ss: "%d soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" }, week: { dow: 1, doy: 7 } }), l.defineLocale("uz", { months: "\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"), monthsShort: "\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"), weekdays: "\u042f\u043a\u0448\u0430\u043d\u0431\u0430_\u0414\u0443\u0448\u0430\u043d\u0431\u0430_\u0421\u0435\u0448\u0430\u043d\u0431\u0430_\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0430_\u041f\u0430\u0439\u0448\u0430\u043d\u0431\u0430_\u0416\u0443\u043c\u0430_\u0428\u0430\u043d\u0431\u0430".split("_"), weekdaysShort: "\u042f\u043a\u0448_\u0414\u0443\u0448_\u0421\u0435\u0448_\u0427\u043e\u0440_\u041f\u0430\u0439_\u0416\u0443\u043c_\u0428\u0430\u043d".split("_"), weekdaysMin: "\u042f\u043a_\u0414\u0443_\u0421\u0435_\u0427\u043e_\u041f\u0430_\u0416\u0443_\u0428\u0430".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[\u0411\u0443\u0433\u0443\u043d \u0441\u043e\u0430\u0442] LT [\u0434\u0430]", nextDay: "[\u042d\u0440\u0442\u0430\u0433\u0430] LT [\u0434\u0430]", nextWeek: "dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]", lastDay: "[\u041a\u0435\u0447\u0430 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]", lastWeek: "[\u0423\u0442\u0433\u0430\u043d] dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]", sameElse: "L" }, relativeTime: { future: "\u042f\u043a\u0438\u043d %s \u0438\u0447\u0438\u0434\u0430", past: "\u0411\u0438\u0440 \u043d\u0435\u0447\u0430 %s \u043e\u043b\u0434\u0438\u043d", s: "\u0444\u0443\u0440\u0441\u0430\u0442", ss: "%d \u0444\u0443\u0440\u0441\u0430\u0442", m: "\u0431\u0438\u0440 \u0434\u0430\u043a\u0438\u043a\u0430", mm: "%d \u0434\u0430\u043a\u0438\u043a\u0430", h: "\u0431\u0438\u0440 \u0441\u043e\u0430\u0442", hh: "%d \u0441\u043e\u0430\u0442", d: "\u0431\u0438\u0440 \u043a\u0443\u043d", dd: "%d \u043a\u0443\u043d", M: "\u0431\u0438\u0440 \u043e\u0439", MM: "%d \u043e\u0439", y: "\u0431\u0438\u0440 \u0439\u0438\u043b", yy: "%d \u0439\u0438\u043b" }, week: { dow: 1, doy: 7 } }), l.defineLocale("vi", { months: "th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), monthsParseExact: !0, weekdays: "ch\u1ee7 nh\u1eadt_th\u1ee9 hai_th\u1ee9 ba_th\u1ee9 t\u01b0_th\u1ee9 n\u0103m_th\u1ee9 s\xe1u_th\u1ee9 b\u1ea3y".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysParseExact: !0, meridiemParse: /sa|ch/i, isPM: function(e) { return /^ch$/i.test(e) }, meridiem: function(e, a, t) { return e < 12 ? t ? "sa" : "SA" : t ? "ch" : "CH" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [n\u0103m] YYYY", LLL: "D MMMM [n\u0103m] YYYY HH:mm", LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[H\xf4m nay l\xfac] LT", nextDay: "[Ng\xe0y mai l\xfac] LT", nextWeek: "dddd [tu\u1ea7n t\u1edbi l\xfac] LT", lastDay: "[H\xf4m qua l\xfac] LT", lastWeek: "dddd [tu\u1ea7n r\u1ed3i l\xfac] LT", sameElse: "L" }, relativeTime: { future: "%s t\u1edbi", past: "%s tr\u01b0\u1edbc", s: "v\xe0i gi\xe2y", ss: "%d gi\xe2y", m: "m\u1ed9t ph\xfat", mm: "%d ph\xfat", h: "m\u1ed9t gi\u1edd", hh: "%d gi\u1edd", d: "m\u1ed9t ng\xe0y", dd: "%d ng\xe0y", M: "m\u1ed9t th\xe1ng", MM: "%d th\xe1ng", y: "m\u1ed9t n\u0103m", yy: "%d n\u0103m" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function(e) { return e }, week: { dow: 1, doy: 4 } }), l.defineLocale("x-pseudo", { months: "J~\xe1\xf1\xfa\xe1~r\xfd_F~\xe9br\xfa~\xe1r\xfd_~M\xe1rc~h_\xc1p~r\xedl_~M\xe1\xfd_~J\xfa\xf1\xe9~_J\xfal~\xfd_\xc1\xfa~g\xfast~_S\xe9p~t\xe9mb~\xe9r_\xd3~ct\xf3b~\xe9r_\xd1~\xf3v\xe9m~b\xe9r_~D\xe9c\xe9~mb\xe9r".split("_"), monthsShort: "J~\xe1\xf1_~F\xe9b_~M\xe1r_~\xc1pr_~M\xe1\xfd_~J\xfa\xf1_~J\xfal_~\xc1\xfag_~S\xe9p_~\xd3ct_~\xd1\xf3v_~D\xe9c".split("_"), monthsParseExact: !0, weekdays: "S~\xfa\xf1d\xe1~\xfd_M\xf3~\xf1d\xe1\xfd~_T\xfa\xe9~sd\xe1\xfd~_W\xe9d~\xf1\xe9sd~\xe1\xfd_T~h\xfars~d\xe1\xfd_~Fr\xedd~\xe1\xfd_S~\xe1t\xfar~d\xe1\xfd".split("_"), weekdaysShort: "S~\xfa\xf1_~M\xf3\xf1_~T\xfa\xe9_~W\xe9d_~Th\xfa_~Fr\xed_~S\xe1t".split("_"), weekdaysMin: "S~\xfa_M\xf3~_T\xfa_~W\xe9_T~h_Fr~_S\xe1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[T~\xf3d\xe1~\xfd \xe1t] LT", nextDay: "[T~\xf3m\xf3~rr\xf3~w \xe1t] LT", nextWeek: "dddd [\xe1t] LT", lastDay: "[\xdd~\xe9st~\xe9rd\xe1~\xfd \xe1t] LT", lastWeek: "[L~\xe1st] dddd [\xe1t] LT", sameElse: "L" }, relativeTime: { future: "\xed~\xf1 %s", past: "%s \xe1~g\xf3", s: "\xe1 ~f\xe9w ~s\xe9c\xf3~\xf1ds", ss: "%d s~\xe9c\xf3\xf1~ds", m: "\xe1 ~m\xed\xf1~\xfat\xe9", mm: "%d m~\xed\xf1\xfa~t\xe9s", h: "\xe1~\xf1 h\xf3~\xfar", hh: "%d h~\xf3\xfars", d: "\xe1 ~d\xe1\xfd", dd: "%d d~\xe1\xfds", M: "\xe1 ~m\xf3\xf1~th", MM: "%d m~\xf3\xf1t~hs", y: "\xe1 ~\xfd\xe9\xe1r", yy: "%d \xfd~\xe9\xe1rs" }, dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) { var a = e % 10; return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th") }, week: { dow: 1, doy: 4 } }), l.defineLocale("yo", { months: "S\u1eb9\u0301r\u1eb9\u0301_E\u0300re\u0300le\u0300_\u1eb8r\u1eb9\u0300na\u0300_I\u0300gbe\u0301_E\u0300bibi_O\u0300ku\u0300du_Ag\u1eb9mo_O\u0300gu\u0301n_Owewe_\u1ecc\u0300wa\u0300ra\u0300_Be\u0301lu\u0301_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"), monthsShort: "S\u1eb9\u0301r_E\u0300rl_\u1eb8rn_I\u0300gb_E\u0300bi_O\u0300ku\u0300_Ag\u1eb9_O\u0300gu\u0301_Owe_\u1ecc\u0300wa\u0300_Be\u0301l_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"), weekdays: "A\u0300i\u0300ku\u0301_Aje\u0301_I\u0300s\u1eb9\u0301gun_\u1eccj\u1ecd\u0301ru\u0301_\u1eccj\u1ecd\u0301b\u1ecd_\u1eb8ti\u0300_A\u0300ba\u0301m\u1eb9\u0301ta".split("_"), weekdaysShort: "A\u0300i\u0300k_Aje\u0301_I\u0300s\u1eb9\u0301_\u1eccjr_\u1eccjb_\u1eb8ti\u0300_A\u0300ba\u0301".split("_"), weekdaysMin: "A\u0300i\u0300_Aj_I\u0300s_\u1eccr_\u1eccb_\u1eb8t_A\u0300b".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[O\u0300ni\u0300 ni] LT", nextDay: "[\u1ecc\u0300la ni] LT", nextWeek: "dddd [\u1eccs\u1eb9\u0300 to\u0301n'b\u1ecd] [ni] LT", lastDay: "[A\u0300na ni] LT", lastWeek: "dddd [\u1eccs\u1eb9\u0300 to\u0301l\u1ecd\u0301] [ni] LT", sameElse: "L" }, relativeTime: { future: "ni\u0301 %s", past: "%s k\u1ecdja\u0301", s: "i\u0300s\u1eb9ju\u0301 aaya\u0301 die", ss: "aaya\u0301 %d", m: "i\u0300s\u1eb9ju\u0301 kan", mm: "i\u0300s\u1eb9ju\u0301 %d", h: "wa\u0301kati kan", hh: "wa\u0301kati %d", d: "\u1ecdj\u1ecd\u0301 kan", dd: "\u1ecdj\u1ecd\u0301 %d", M: "osu\u0300 kan", MM: "osu\u0300 %d", y: "\u1ecddu\u0301n kan", yy: "\u1ecddu\u0301n %d" }, dayOfMonthOrdinalParse: /\u1ecdj\u1ecd\u0301\s\d{1,2}/, ordinal: "\u1ecdj\u1ecd\u0301 %d", week: { dow: 1, doy: 4 } }), l.defineLocale("zh-cn", {
        months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
        monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
        weekdaysShort: "\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),
        weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5e74M\u6708D\u65e5", LLL: "YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206", LLLL: "YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206", l: "YYYY/M/D", ll: "YYYY\u5e74M\u6708D\u65e5", lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm", llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm" },
        meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
        meridiemHour: function(e, a) { return 12 === e && (e = 0), "\u51cc\u6668" === a || "\u65e9\u4e0a" === a || "\u4e0a\u5348" === a ? e : "\u4e0b\u5348" === a || "\u665a\u4e0a" === a ? e + 12 : 11 <= e ? e : e + 12 },
        meridiem: function(e, a, t) { var s = 100 * e + a; return s < 600 ? "\u51cc\u6668" : s < 900 ? "\u65e9\u4e0a" : s < 1130 ? "\u4e0a\u5348" : s < 1230 ? "\u4e2d\u5348" : s < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a" },
        calendar: { sameDay: "[\u4eca\u5929]LT", nextDay: "[\u660e\u5929]LT", nextWeek: "[\u4e0b]ddddLT", lastDay: "[\u6628\u5929]LT", lastWeek: "[\u4e0a]ddddLT", sameElse: "L" },
        dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u5468)/,
        ordinal: function(e, a) {
            switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + "\u65e5";
                case "M":
                    return e + "\u6708";
                case "w":
                case "W":
                    return e + "\u5468";
                default:
                    return e
            }
        },
        relativeTime: { future: "%s\u5185", past: "%s\u524d", s: "\u51e0\u79d2", ss: "%d \u79d2", m: "1 \u5206\u949f", mm: "%d \u5206\u949f", h: "1 \u5c0f\u65f6", hh: "%d \u5c0f\u65f6", d: "1 \u5929", dd: "%d \u5929", M: "1 \u4e2a\u6708", MM: "%d \u4e2a\u6708", y: "1 \u5e74", yy: "%d \u5e74" },
        week: { dow: 1, doy: 4 }
    }), l.defineLocale("zh-hk", {
        months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
        monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
        weekdaysShort: "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),
        weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5e74M\u6708D\u65e5", LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm", LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm", l: "YYYY/M/D", ll: "YYYY\u5e74M\u6708D\u65e5", lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm", llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm" },
        meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
        meridiemHour: function(e, a) { return 12 === e && (e = 0), "\u51cc\u6668" === a || "\u65e9\u4e0a" === a || "\u4e0a\u5348" === a ? e : "\u4e2d\u5348" === a ? 11 <= e ? e : e + 12 : "\u4e0b\u5348" === a || "\u665a\u4e0a" === a ? e + 12 : void 0 },
        meridiem: function(e, a, t) { var s = 100 * e + a; return s < 600 ? "\u51cc\u6668" : s < 900 ? "\u65e9\u4e0a" : s < 1130 ? "\u4e0a\u5348" : s < 1230 ? "\u4e2d\u5348" : s < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a" },
        calendar: { sameDay: "[\u4eca\u5929]LT", nextDay: "[\u660e\u5929]LT", nextWeek: "[\u4e0b]ddddLT", lastDay: "[\u6628\u5929]LT", lastWeek: "[\u4e0a]ddddLT", sameElse: "L" },
        dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
        ordinal: function(e, a) {
            switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + "\u65e5";
                case "M":
                    return e + "\u6708";
                case "w":
                case "W":
                    return e + "\u9031";
                default:
                    return e
            }
        },
        relativeTime: { future: "%s\u5167", past: "%s\u524d", s: "\u5e7e\u79d2", ss: "%d \u79d2", m: "1 \u5206\u9418", mm: "%d \u5206\u9418", h: "1 \u5c0f\u6642", hh: "%d \u5c0f\u6642", d: "1 \u5929", dd: "%d \u5929", M: "1 \u500b\u6708", MM: "%d \u500b\u6708", y: "1 \u5e74", yy: "%d \u5e74" }
    }), l.defineLocale("zh-tw", {
        months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
        monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
        weekdaysShort: "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),
        weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
        longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5e74M\u6708D\u65e5", LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm", LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm", l: "YYYY/M/D", ll: "YYYY\u5e74M\u6708D\u65e5", lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm", llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm" },
        meridiemParse: /\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,
        meridiemHour: function(e, a) { return 12 === e && (e = 0), "\u51cc\u6668" === a || "\u65e9\u4e0a" === a || "\u4e0a\u5348" === a ? e : "\u4e2d\u5348" === a ? 11 <= e ? e : e + 12 : "\u4e0b\u5348" === a || "\u665a\u4e0a" === a ? e + 12 : void 0 },
        meridiem: function(e, a, t) { var s = 100 * e + a; return s < 600 ? "\u51cc\u6668" : s < 900 ? "\u65e9\u4e0a" : s < 1130 ? "\u4e0a\u5348" : s < 1230 ? "\u4e2d\u5348" : s < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a" },
        calendar: { sameDay: "[\u4eca\u5929] LT", nextDay: "[\u660e\u5929] LT", nextWeek: "[\u4e0b]dddd LT", lastDay: "[\u6628\u5929] LT", lastWeek: "[\u4e0a]dddd LT", sameElse: "L" },
        dayOfMonthOrdinalParse: /\d{1,2}(\u65e5|\u6708|\u9031)/,
        ordinal: function(e, a) {
            switch (a) {
                case "d":
                case "D":
                case "DDD":
                    return e + "\u65e5";
                case "M":
                    return e + "\u6708";
                case "w":
                case "W":
                    return e + "\u9031";
                default:
                    return e
            }
        },
        relativeTime: { future: "%s\u5167", past: "%s\u524d", s: "\u5e7e\u79d2", ss: "%d \u79d2", m: "1 \u5206\u9418", mm: "%d \u5206\u9418", h: "1 \u5c0f\u6642", hh: "%d \u5c0f\u6642", d: "1 \u5929", dd: "%d \u5929", M: "1 \u500b\u6708", MM: "%d \u500b\u6708", y: "1 \u5e74", yy: "%d \u5e74" }
    }), l.locale("en"), l
});
// custom-select.js
function closeAllSelect(e) { var t, a, n, s, r, o = []; for (t = document.getElementsByClassName("select-items"), a = document.getElementsByClassName("select-selected"), s = t.length, r = a.length, n = 0; r > n; n++) e == a[n] ? o.push(n) : a[n].classList.remove("select-arrow-active"); for (n = 0; s > n; n++) o.indexOf(n) && t[n].classList.add("select-hide") }
var x, i, j, l, ll, selElmnt, a, b, c;
for (x = document.getElementsByClassName("custom-select"), l = x.length, i = 0; l > i; i++) {
    for (selElmnt = x[i].getElementsByTagName("select")[0], ll = selElmnt.length, a = document.createElement("DIV"), a.setAttribute("class", "select-selected"), a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML, x[i].appendChild(a), b = document.createElement("DIV"), b.setAttribute("class", "select-items select-hide"), j = 1; ll > j; j++) c = document.createElement("DIV"), c.innerHTML = selElmnt.options[j].innerHTML, c.addEventListener("click", function(e) {
        var t, a, n, s, r, o, i;
        for (s = this.parentNode.parentNode.getElementsByTagName("select")[0], o = s.length, r = this.parentNode.previousSibling, a = 0; o > a; a++)
            if (s.options[a].innerHTML == this.innerHTML) {
                for (s.selectedIndex = a, r.innerHTML = this.innerHTML, t = this.parentNode.getElementsByClassName("same-as-selected"), i = t.length, n = 0; i > n; n++) t[n].removeAttribute("class");
                this.setAttribute("class", "same-as-selected");
                break
            }
        r.click()
    }), b.appendChild(c);
    x[i].appendChild(b), a.addEventListener("click", function(e) { e.stopPropagation(), closeAllSelect(this), this.nextSibling.classList.toggle("select-hide"), this.classList.toggle("select-arrow-active") })
}
document.addEventListener("click", closeAllSelect);
//target social


// ===== Scroll to Top ==== 
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() >= 150) {
        jQuery('#return-to-top').fadeIn(700);
    } else {
        jQuery('#return-to-top').fadeOut(500);
    }

    if (!(jQuery('#booking-mask-wrapper').hasClass('no-slide'))) {
        if (jQuery(this).scrollTop() > 150) {
            jQuery('#booking-mask-wrapper').addClass('hide-check-date');
            // jQuery('body').addClass('hide-info');
        } else {
            jQuery('#booking-mask-wrapper').removeClass('hide-check-date');
            // jQuery('body').removeClass('hide-info');
        }
    }
});
jQuery('#return-to-top').click(function() {
    jQuery('body,html').animate({
        scrollTop: 0
    }, 1000);
});

// JS all page

jQuery(document).ready(function() {
    if ((jQuery('#bannerFullscreen').length === 1)) {
        jQuery('#bannerFullscreen').modal('show');
    }

    if ((jQuery('.banner-mini').length === 1)) {
        jQuery('.close-banner').click(function() {
            if ($(this).hasClass('closer')) {
                jQuery('.banner-mini a').addClass('gone');
                $(this).removeClass('closer').html($(this).data('open'));
            } else {
                jQuery('.banner-mini a').removeClass('gone');
                $(this).addClass('closer').html($(this).data('close'));
            }

        });
    }
});
//slide
jQuery(document).ready(function() {
    // slider
    var prevArrow = '<button type="button" class="slick-prev slick-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>';
    var nextArrow = '<button type="button" class="slick-next slick-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>';

    //May be you like of page service
    jQuery('.secInfoLike .slider').slick({
        dots: false,
        arrows: true,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        speed: 1000,
        autoplay: false,
        slidesToShow: 3,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });
});